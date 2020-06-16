const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const posts = await db.Posts.findAll({
			include: [{
				model: db.Category,
				attributes: ['id', 'name'],
			}],
			order: [['createdAt', 'DESC']],
		});
		return res.json(posts);
	} catch(e) {
		console.error(e);
		return next(e);
	}
})

router.get('/category', async (req, res, next) => {
	try {
		const categories = await db.Category.findAll({
			attributes: ['id', 'name']
		});
		return res.json(categories);
	} catch(e) {
		console.error(e);
		return next(e);
	}
})

router.get('/category/:name', async (req, res, next) => {
	try {
		const posts = await db.Posts.findAll({
			include: [{
				model: db.Category,
				where: {
					name: decodeURIComponent(req.params.name)
				},
				attributes: ['id', 'name'],
			}],
			order: [['createdAt', 'DESC']],
		})
		res.json({
			name: decodeURIComponent(req.params.name),
			posts: posts
		})
	} catch(e) {
		console.error(e);
		next(e);
	}
})

module.exports = router;
