const express = require('express');
const db = require('../models');
const bcrypt = require('bcrypt');
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

				console.log(fullUser);
				return res.json(fullUser);
				// const filteredUser = Object.assign({}, user.toJSON())
                // delete filteredUser.password // 프론트에 비밀번호를 전달하면 위험하기 때문에 delete를 이용하여 user 객체 안의 password를 지워주고 보내준다.
                // console.log(filteredUser)
                // return res.json(filteredUser)
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
