const passport = require('passport');
const db = require('../models');
const local = require('./local');

module.exports = () => {
	passport.serializeUser((user, done) => {
		return done(null, user.id);
	})

	passport.deserializeUser(async (id, done) => {
		try {
			const user = await db.User.findOne({
				where: {id},
			})
			return done(null, user);
		} catch(e) {
			console.error(e);
			return done(e);
		}
	})

	local();
}

// cookie와 session으로 로그인 하는 순서

// 프론트에서 서버로는 cookie만 보낸다.
// 서버가 쿠키파서, express-session으로 쿠키 검사 후 ex)id: 3 발견
// id: 3이 deserializeUser에 들어감
// req.user로 사용자 정보가 들어감

// 요청 보낼때마다 deserializeUser가 실행된다(서버자원을 제일 많이 차지함)
// 실무에서는 deserializeUser 결과를 캐싱한다.
