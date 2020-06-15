const express = require('express');
const multer = require('multer')
const path = require('path')
const db = require('../models')

const router = express.Router();
// const upload = multer();
const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, done) {
			done(null, 'uploads')
		},
		filename(req, file, done){
			const ext = path.extname(file.originalname);
			const basename = path.basename(file.originalname, ext);
			done(null, basename + new Date() + ext);
		}
	}),
	limits: {fileSize: 20*1024*1024},
});

router.post('/', upload.array('image'), (req, res) => {
	console.log(res.files);
	res.json({
		test: 'ok',
	})
	// res.json()
});

// router.post('/', async (req, res, next) => {
// 	try {
// 		console.log(req);
// 		const newImage = await db.Image.create({
// 			src: req.body.data,
// 		})
// 		const imageURL = URL.createObjectURL(newImage);
// 		return res.json({
// 			imageURL: imageURL
// 		})
// 	} catch(e) {
// 		console.error(e);
// 		next(e);
// 	}
// })

module.exports = router;
