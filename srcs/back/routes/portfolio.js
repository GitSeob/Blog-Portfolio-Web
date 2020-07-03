const express = require('express');
const multer = require('multer')
const path = require('path')
const db = require('../models')
const { isLoggedIn } = require('./middleware');

const router = express.Router()

const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, done) {
			done(null, 'img_for_portfolio');
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
		const portData = await db.Portfolio.findOne({
			where: {id: 1},
			include: [{
				model: db.Works,
				include: [{
					model: db.Work_row,
				}]
			}, {
				model: db.Abilities,
				include: [{
					model: db.Ab_list,
				}]
			}]
		});
		return res.json(portData);
	} catch (e) {
		console.error(e);
		next(e);
	}
})

router.post('/add/Ability', async (req, res, next) => {
	try {
		const newAbility = await db.Abilities.create({
			list_title: req.body.title,
			PortfolioId: 1,
		});
		const list_data = req.body.list;
		list_data.map((c) => {
			c['AbilityId'] = newAbility.id;
		});
		await db.Ab_list.bulkCreate(list_data, {
			returning: true,
		});
		const resAbility = await db.Abilities.findOne({
			where: {id: newAbility.id},
			include: [{
				model: db.Ab_list,
				attributes: ['id', 'list_attribute']
			}],
		});
		console.log(resAbility);
		return res.json(resAbility)
	} catch (e) {
		console.error(e);
		next(e);
	}
})

router.post('/remove/ability', async (req, res, next) => {
	try {
		const ability = await db.Abilities.findOne({ where: {id: req.body.abilityId}});
		if (!ability) {
			return res.status(404).send('존재하지 않는 어빌리티입니다.');
		}
		await db.Abilities.destroy({ where: { id: req.body.abilityId }});
		// await db.Ab_list.destroy({
		// 	where: {
		// 		AbilityId: req.body.abilityId
		// 	}
		// });

		const abilities = await db.Abilities.findAll({
			include: [{
				model: db.Ab_list,
				attributes: ['id', 'list_attribute']
			}]
		});

		return res.json(abilities);
	} catch (e) {
		console.error(e);
		next(e);
	}
})

router.post('/ability/edit/:ability_id', async (req, res, next) => {
	try {
		await db.Abilities.update({
			list_title: req.body.title
		}, {
			where: {id: req.params.ability_id}
		})

		await db.Ab_list.destroy({
			where: {AbilityId: req.params.ability_id}
		})
		const list_data = req.body.list;
		list_data.map((c) => {
			c['AbilityId'] = req.params.ability_id;
		});
		await db.Ab_list.bulkCreate(list_data, {
			returning: true,
		});

		const resValue = await db.Abilities.findAll({
			include: [{
				model: db.Ab_list,
				attributes: ['id', 'list_attribute']
			}]
		})

		return res.json(resValue);
	} catch(e) {
		console.error(e);
		next(e);
	}
});

router.post('/ability/editTitle/:ability_id', async (req, res, next) => {
	try {
		await db.Abilities.update({
			list_title: req.body.title
		}, {
			where: {id: req.params.ability_id}
		})

		const resValue = await db.Abilities.findAll({
			include: [{
				model: db.Ab_list,
				attributes: ['id', 'list_attribute']
			}]
		})

		return res.json(resValue);
	} catch(e) {
		console.error(e);
		next(e);
	}
});

router.post('/ability/editAttr/:ability_id', async (req, res, next) => {
	try {
		await db.Ab_list.destroy({
			where: {AbilityId: req.params.ability_id}
		})

		const list_data = req.body.list;
		list_data.map((c) => {
			c['AbilityId'] = req.params.ability_id;
		});
		await db.Ab_list.bulkCreate(list_data, {
			returning: true,
		});

		const resValue = await db.Abilities.findAll({
			include: [{
				model: db.Ab_list,
				attributes: ['id', 'list_attribute']
			}]
		})

		return res.json(resValue);
	} catch(e) {
		console.error(e);
		next(e);
	}
})

module.exports = router;
