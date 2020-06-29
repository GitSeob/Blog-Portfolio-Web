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
		console.log(req.body);
		const newAbility = await db.Abilities.create({
			list_title: req.body.title,
			PortfolioId: 1,
		})
		console.log(newAbility);
		req.body.list.map(async (c) => {
			await db.Ab_list.create({
				list_attribute: c,
				AbilityId: newAbility.id,
			})
		})

		const resAbility = await db.Abilities.findOne({
			where: {id: newAbility.id},
			include: [{
				model: db.Ab_list
			}]
		})
		console.log(resAbility);
		return res.json(resAbility)
	} catch (e) {
		console.error(e);
		next(e);
	}
})

module.exports = router;
