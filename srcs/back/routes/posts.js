const express = require('express');
const db = require('../models');
const { Op } = require('sequelize');

const { isLoggedIn } = require('./middleware');
const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const where = {};
		if (parseInt(req.query.lastId, 10)) { // 초기 로딩이 아닐 때
		  where.id = { [Op.lt]: parseInt(req.query.lastId, 10)}
		} // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
		const posts = await db.Posts.findAll({
			where,
			limit: 10,
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
		const where = {
			title: {
				[db.Sequelize.Op.like]: "%" + req.params.keyword + "%",
			}
		};
		if (parseInt(req.query.lastId, 10)) { // 초기 로딩이 아닐 때
		  where.id = { [Op.lt]: parseInt(req.query.lastId, 10)}
		} // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1

		const posts = await db.Posts.findAll({
			where,
			limit: 10,
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
