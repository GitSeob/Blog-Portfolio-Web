const express = require('express');
const multer = require('multer')
const path = require('path')
const db = require('../models')
const { isLoggedIn } = require('./middleware');

const router = express.Router()

const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, done) {
			done(null, 'uploads');
		},
		filename(req, file, done){
			let ext = path.extname(file.originalname);
			let basename = path.basename(file.originalname, ext);
			let savename = "work_" + basename + ext;
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
					order: [['id', 'ASC']],
				}]
			}, {
				model: db.Abilities,
				include: [{
					model: db.Ab_list,
					order: [['id', 'ASC']],
				}]
			}]
		});
		return res.json(portData);
	} catch (e) {
		console.error(e);
		next(e);
	}
})



router.patch('/', async (req, res, next) => {
	try {
		await db.Portfolio.update({
			about_title: req.body.about_title,
			about_sub_title: req.body.about_sub_title,
			about_content: req.body.about_content,
			ability_title: req.body.ability_title,
			ability_sub_title: req.body.ability_sub_title,
			work_title: req.body.work_title,
			work_sub_title: req.body.work_sub_title,
			email: req.body.email,
			kakao: req.body.kakao,
			github: req.body.github,
			comment: req.body.comment
		}, {
			where: {id: 1}
		})

		const portData = await db.Portfolio.findOne({
			where: {id: 1},
			include: [{
				model: db.Works,
				include: [{
					model: db.Work_row,
					order: [['id', 'ASC']],
				}]
			}, {
				model: db.Abilities,
				include: [{
					model: db.Ab_list,
					order: [['id', 'ASC']],
				}]
			}]
		});

		return res.json(portData);
	} catch(e) {
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
				attributes: ['id', 'list_attribute'],
				order: [['id', 'ASC']],
			}],
		});
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
				attributes: ['id', 'list_attribute'],
				order: [['id', 'ASC']],
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
				attributes: ['id', 'list_attribute'],
				order: [['id', 'ASC']],
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
				attributes: ['id', 'list_attribute'],
				order: [['id', 'ASC']],
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
				attributes: ['id', 'list_attribute'],
				order: [['id', 'ASC']],
			}]
		})

		return res.json(resValue);
	} catch(e) {
		console.error(e);
		next(e);
	}
})

router.post('/work/imgUpload', upload.single('image'), async (req, res) => {
	res.json({
		url: `http://localhost:3065/${req.file.filename}`
	});
})

router.post('/work', async (req, res, next) => {
	try {
		const addedWork = await db.Works.create({
			proj_name: req.body.proj_name,
			category: req.body.category,
			period: req.body.period,
			content: req.body.content,
			members: req.body.members,
			repo: req.body.repo,
			description: req.body.description,
			imgSrc: req.body.imgSrc,
			PortfolioId: 1,
		})
		const workRows = req.body.Work_rows;
		workRows.map((c) => {
			c['WorkId'] = addedWork.id;
		})
		await db.Work_row.bulkCreate(workRows, {
			returning: true
		});
		const resRow = await db.Works.findOne({
			where: {id: addedWork.id},
			include: [{
				model: db.Work_row,
				order: [['id', 'ASC']],
			}]
		})
		return res.json(resRow);
	} catch(e) {
		console.error(e);
		next(e);
	}
})

router.post('/work/:work_id', async (req, res, next) => {
	try {
		const work = await db.Works.findOne({
			where: {id: req.params.work_id}
		})
		if (!work) {
			return res.status(401).send('work id error');
		}
		await db.Works.update({
			proj_name: req.body.proj_name,
			category: req.body.category,
			period: req.body.period,
			members: req.body.members,
			repo: req.body.repo,
			description: req.body.description,
			imgSrc: req.body.imgSrc === '' ? 'http://localhost:3065/globalImg/noImg.png' : req.body.imgSrc,
		}, {
			where: {id: req.params.work_id}
		})

		await db.Work_row.destroy({
			where: {WorkId: req.params.work_id}
		});
		await db.Work_row.bulkCreate(req.body.Work_rows ,{
			returning: true,
		})

		const resValue = await db.Works.findAll({
			include: [{
				model: db.Work_row,
				order: [['id', 'ASC']],
			}]
		})
		return res.json(resValue);
	} catch(e) {
		console.error(e);
		next(e);
	}
})

router.delete('/work/:work_id', async (req, res, next) => {
	try {
		const work = await db.Works.findOne({ where: { id: req.params.work_id}})
		if (!work) {
			return res.status(404).send('work attribute error');
		}
		await db.Works.destroy({ where: {id: req.params.work_id}})
		res.send(req.params.work_id);
	} catch(e) {
		console.error(e);
		next(e);
	}
})

module.exports = router;
