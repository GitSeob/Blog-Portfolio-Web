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
		console.log(portData);
		return res.json(portData);
	} catch (e) {
		console.error(e);
		next(e);
	}
})

module.exports = router;
