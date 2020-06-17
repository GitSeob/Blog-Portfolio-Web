const express = require('express');
const multer = require('multer')
const path = require('path')
const db = require('../models')
const { isLoggedIn } = require('./middleware')

const router = express.Router()

const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, done) {
			done(null, 'uploads')
		},
		filename(req, file, done){
			let ext = path.extname(file.originalname);
			let basename = path.basename(file.originalname, ext);
			let savename = basename + new Date() + ext;
			savename = savename.replace(/\s/g, "_");
			done(null, savename);
		}
	}),
	limits: {fileSize: 20*1024*1024},
});

router.post('/', isLoggedIn, async (req, res, next) => {
	try {
		let reg = /<img[^>]+src="([^">]+)/g;
		let thumb_content = req.body.content.replace(/(<([^>]+)>)/ig," ")
		let thumb_imgs = req.body.content.match(reg);
		let thumb_img = '';

		if (thumb_imgs) {
			thumb_img = thumb_imgs[0].replace(/<img[^>]+src="/g, "");
		} else {
			thumb_img = "http://localhost:3065/globalImg/noImg.png";
		}
		const newPost = await db.Posts.create({
			title: req.body.title,
			CategoryId: req.body.category_id,
			content: req.body.content,
			thumbnail_content: thumb_content,
			thumbnail_img: thumb_img,
			UserId: req.user.id,
		})
		const fullPosts = await db.Posts.findOne({
			where: {id: newPost.id },
			include: [{
				model: db.Category,
				attribute: ['id', 'name'],
			}]
		})
		return res.json(fullPosts);
	} catch(e) {
		console.error(e);
		return next(e);
	}
})

router.get('/:id', async (req, res, next) => {
	try {
		const post = await db.Posts.findOne({
			where: {id: req.params.id},
			include: [{
				model: db.Category,
				attribute: ['id', 'name']
			}]
		})
		if (!post) {
			return res.status(401).send('포스트가 존재하지 않습니다.');
		}
		return res.json(post);
	} catch(e) {
		console.error(e);
		return next(e);
	}
})

router.patch('/:id', isLoggedIn, async (req, res, next) => {
	try {
		const post = await db.Posts.findOne({ where: { id: req.params.id}})
		if (!post) {
			return res.status(404).send('포스트가 존재하지 않습니다.');
		}
		if (post.UserId !== req.user.id) {
			return res.status(403).send('다른 사람의 글은 수정할 수 없습니다.');
		}
		let reg = /<img[^>]+src="([^">]+)/g;
		let thumb_content = req.body.content.replace(/(<([^>]+)>)/ig," ")
		let thumb_imgs = req.body.content.match(reg);
		let thumb_img = '';

		if (thumb_imgs) {
			thumb_img = thumb_imgs[0].replace(/<img[^>]+src="/g, "");
		} else {
			thumb_img = "http://localhost:3065/globalImg/noImg.png";
		}

		await db.Posts.update({
			title: req.body.title,
			CategoryId: req.body.category_id,
			content: req.body.content,
			thumbnail_content: thumb_content,
			thumbnail_img: thumb_img,
		}, {
			where: {id: req.params.id}
		})

		const updatedPost = await db.Posts.findOne({
			where: {id: req.params.id},
			include: [{
				model: db.Category,
				attribute: ['id', 'name']
			}]
		})
		return res.json(updatedPost);
	} catch(e){
		console.error(e);
		next(e);
	}
})

router.delete('/:id', isLoggedIn, async (req, res, next) => {
	try {
		const post = await db.Posts.findOne({ where: { id: req.params.id}})
		if (!post) {
			return res.status(404).send('포스트가 존재하지 않습니다.');
		}
		if (post.UserId !== req.user.id) {
			return res.status(403).send('다른 사람의 글은 삭제할 수 없습니다.');
		}
		console.log('params id : ' + req.params.id);
		await db.Posts.destroy({ where: {id: req.params.id}})
		res.send(req.params.id);
	} catch(e) {
		console.error(e);
		next(e);
	}
})

router.post('/images', upload.single('image'), (req, res) => {
	res.json({
		url: `http://localhost:3065/${req.file.filename}`
	});
});

module.exports = router
