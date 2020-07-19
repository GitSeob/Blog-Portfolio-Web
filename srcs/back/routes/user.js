const express = require('express');
const db = require('../models');
const passport = require('passport');

const { isLoggedIn } = require('./middleware');

const router = express.Router();

router.get('/', isLoggedIn, (req, res) => {
	const user = Object.assign({}, req.user.toJSON());
	delete user.password;
	return res.json(user);
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
