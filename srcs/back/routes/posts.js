const express = require('express');
const db = require('../models');

const { isLoggedIn } = require('./middleware');
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

router.get('/search/:keyword', async (req, res, next) => {
	try {
		const posts = await db.Posts.findAll({
			where: {
				title: {
					[db.Sequelize.Op.like]: "%" + req.params.keyword + "%",
				}
			},
			include: [{
				model: db.Category,
				attributes: ['id', 'name'],
			}],
			order: [['createdAt', 'DESC']],
		})
		return res.json({
			posts: posts,
			keyword: req.params.keyword,
		});
	} catch(e) {
		console.error(e);
		next(e);
	}
})

router.post('/remove', isLoggedIn, async (req, res, next) => {
	try {
		await db.Posts.destroy({
			where: {
				id: req.body
			}
		})
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
		next(e);
	}
}) // 카테고리 index도 받아서 해당 index의 게시물 데이터를 res하도록 수정

router.post('/changeCategory', isLoggedIn, async (req, res, next) => {
	try {
		await db.Posts.update({
			CategoryId: req.body.category_index
		}, {
			where: {
				id: req.body.postIds,
			}
		});
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
		next(e);
	}
})

module.exports = router;
