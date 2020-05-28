const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const db = require('../models');

module.exports = () => {
	passport.use(new LocalStrategy({
		usernameField: "userId",
		passwordField: "password",
	}, async (userId, password, done) => {
		try {
			const user = await db.User.findOne({
				where: {
					userId
				}
			}) // 기존 사용자인지 확인한다.
			if (!user) {
				return done(null, false, { reason: '존재하지 않는 사용자입니다.'});
			}
			const result = await bcrypt.compare(password, user.password);
			console.log({
				password: password,
				user_password : user.password,
				result: result,
			})
			if (result) {
				return done(null, user)
			} // 비밀번호가 일치하면 성공을 보낸다.
			return done(null, false, {reason: '비밀번호가 일치하지 않습니다.'});
		} catch(e) {
			console.error(e);
			return done(e);
		}
	}))
	// done(에러, 정보, 로직상 에러 전달 정보);
}
