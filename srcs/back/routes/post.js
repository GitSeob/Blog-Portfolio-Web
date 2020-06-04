express = require('express');
const multer = require('multer')
const path = require('path')
const db = require('../models')
// const { isLoggedIn } = require('./middleware')

const router = express.Router()

router.post('/', async (req, res, next) => {
	try {
		const thumb_content = req.body.content.replace(/(<([^>]+)>)/ig," ")
		const newPost = await db.Posts.create({
			title: req.body.title,
			CategoryId: req.body.category_id,
			content: req.body.content,
			thumbnail_content: thumb_content,
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
			where: {id: req.params.id}
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

module.exports = router
