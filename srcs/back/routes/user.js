const express = require('express');
const db = require('../models');
const passport = require('passport');

const { isLoggedIn } = require('./middleware');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		if (req.user) {
			const fullUserWithoutPassword = await db.User.findOne({
				where: {id : req.user.id},
				attributes: {
					exclude: ['password']
				}
			})
			res.status(200).json(fullUserWithoutPassword);
		} else {
			res.status(200).json(null);
		}
	} catch (e) {
		console.error(e);
		next(e);
	}
})

router.post('/login', (req, res, next) => {
	passport.authenticate('local', (err, user, info) => {
		if (err){
			console.errer(err);
			return next(err);
		}
		if (info) {
			return res.status(401).send(info.reason);
		}
		return req.login(user, async (loginErr) => {
			try {
				if (loginErr) {
					return next(loginErr);
				}
				const fullUser = await db.User.findOne({
					where: {id: user.id},
					attributes: ['id', 'nickname', 'userId']
				})
				return res.json(fullUser);
			} catch(e) {
				next(e);
			}
		})
	})(req, res, next)
})

router.post('/logout', (req, res) => {
	req.logout();
	req.session.destroy();
	res.send('logout 성공');
})

module.exports = router;
