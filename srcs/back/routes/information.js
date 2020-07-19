const express = require('express');
const multer = require('multer')
const path = require('path')
const db = require('../models')
const { isLoggedIn } = require('./middleware');

const router = express.Router()

const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, done) {
			done(null, 'uploads')
		},
		filename(req, file, done){
			let ext = path.extname(file.originalname);
			let basename = path.basename(file.originalname, ext);
			let savename = "favicon_" + basename + ext;
			done(null, savename);
		}
	}),
	limits: {fileSize: 20*1024*1024},
});

router.get('/', async (req, res, next) => {
	try {
		const info = await db.Blog.findOne({
			where: {id: 1}
		});
		return res.json(info);
	} catch (e) {
		console.error(e);
		next(e);
	}
})

router.post('/', async (req, res, next) => {
	try {
		await db.Blog.update({
			title: req.body.blogTitle,
			description: req.body.description,
			favicon_url: req.body.faviconURL,
		}, {
			where: {
				id: 1,
			}
		})
		const info = await db.Blog.findOne({
			where: {
				id: 1
			},
		})
		return res.json(info);
	} catch(e) {
		console.error(e);
		next(e);
	}
})

router.post('/image', upload.single('image'), async (req, res) => {
	res.json({
		url: `http://api.anjoy.info/${req.file.filename}`
	});
})

module.exports = router;
