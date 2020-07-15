const express = require('express');
const db = require('../models');

const router = express.Router();
const { isLoggedIn } = require('./middleware');

router.get('/', async (req, res, next) => {
	try {
		const categories = await db.Category.findAll({
			attributes: ['id', 'name'],
			order: [['createdAt', 'ASC']],
		});
		return res.json(categories);
	} catch(e) {
		console.error(e);
		return next(e);
	}
})

router.get('/:name', async (req, res, next) => {
	try {
		const where = {};
		if (parseInt(req.query.lastId, 10)) {
			where.id = { [Op.lt]: parseInt(req.query.lastId, 10)}
		};
		const posts = await db.Posts.findAll({
			where,
			limit: 10,
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

router.post('/', isLoggedIn, async (req, res, next) => {
	try {
		const newCategory = await db.Category.create({
			name: req.body.name,
		})
		const resCategory = await db.Category.findOne({
			where: {id: newCategory.id},
			attributes: ['id', 'name'],
			order: [['id', 'ASC']],
		})
		return res.json(resCategory);
	} catch(e) {
		console.error(e);
		next(e);
	}
})

router.patch('/:id', isLoggedIn, async (req, res, next) => {
	try {
		await db.Category.update({
			name: req.body.name,
		}, {
			where: {id: req.params.id},
		})

		const updatedCategory = await db.Category.findAll({
			attributes: ['id', 'name'],
			order: [['id', 'ASC']],
		})

		const editedPosts = await db.Posts.findAll({
			include: [{
				model: db.Category,
				where: {
					name: decodeURIComponent(req.params.name)
				},
				attributes: ['id', 'name'],
			}],
			order: [['createdAt', 'DESC']],
		});
		return res.json({
			category: updatedCategory,
			posts: editedPosts
		});
	} catch(e) {
		console.error(e);
		next(e);
	}
})

router.delete('/:id', isLoggedIn, async (req, res, next) => {
	try {
		await db.Posts.update({
			CategoryId: 1,
		}, {
			where: {CategoryId: req.params.id},
		})
		// 해당 카테고리의 게시물들의 CategoryId를 카테고리 없음(id = 1)로 바꾸어줘야함.
		await db.Category.destroy({ where: {id: req.params.id }});
		const editedPosts = await db.Posts.findAll({
			include: [{
				model: db.Category,
				attributes: ['id', 'name'],
			}],
			order: [['createdAt', 'DESC']],
		});

		return res.json({
			category_id : req.params.id,
			posts: editedPosts,
		});
	} catch(e) {
		console.error(e);
		next(e);
	}
})

module.exports = router;
