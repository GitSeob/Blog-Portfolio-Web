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
			// 이전에는 회원가입 할 때 bcrypt.hash를 이용해서 비밀번호를 암호화 후 db에 저장하였고,
			// 해당 값을 compare한 결과값이 같게 나온다.
			// 지금은 그냥 db에 문자열로 넣었기 때문에 false가 뜨는 것.

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
