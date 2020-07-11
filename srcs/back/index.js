const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require("dotenv");
const passport = require('passport');
//const path = require('path');
//const helmet = require('helmet');

const passportConfig = require('./passport');
const db = require('./models');

const portAPIRouter = require('./routes/portfolio');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');
const imageAPIRouter = require('./routes/image');
const categoryAPIRouter = require('./routes/category');
const informationAPIRouter = require('./routes/information');

dotenv.config();
const app = express();
db.sequelize.sync()
	.then(() => {
		console.log('✓ DB connection success.');
		console.log('  Press CTRL-C to stop\n');
	})
	.catch(err => {
		console.error(err);
		console.log('✗ DB connection error. Please make sure DB is running.');
		process.exit();
});
passportConfig();

//if (process.env.NODE_ENV === 'production') {
//		app.use(morgan('combined'));
//		app.use(hpp());
//		app.use(helmet());
//		app.use(cors({
//		origin: /* url */,
//		credentials: true,
//		}));
//	} else {
//		app.use(morgan('dev'));
//		app.use(cors({
//		origin: true,
//		credentials: true,
//	}));
//}

app.use(morgan('dev')) // 요청들어오면 log가 남음
app.use('/globalImg', express.static('globalImg'));
app.use('/img_for_portfolio', express.static('img_for_portfolio'));
app.use('/', express.static('uploads')) // uploads 폴더를 다른 서버에서 자유롭게 가져갈 수 있게 해준다
app.use(cors({
	origin: 'http://localhost:3060', // 요청 주소랑 같게
	credentials: true, // 서버쪽에서도 쿠키 주고받을 수 있게
})) // 다른 서버에서 요청을 받을 수 있게 허용하게 해준다. 추가안하면 서버에서 거절함
app.use(express.json({
	limit: "50mb",
})) // json 사용하기 위해
app.use(express.urlencoded({
	extended: true,
	limit: "50mb",
	parameterLimit: 1000000,
})) // form형식으로 전달하기 위해
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(expressSession({
	resave: false, // 매번 새션 강제 저장
	saveUninitialized: false, // 빈 값도 저장
	secret: process.env.COOKIE_SECRET, // 쿠키 보안코드
	cookie: {
		httpOnly: true, // 자바스크립트에서 쿠키에 접근 불가 옵션
		secure: false, // https를 쓸 때 true로 해주면 된다.
		//domain: process.env.NODE_ENV === 'production' && '.nodebird.com'
	},
	name: 'anjoy_blog' // cookie이름을 바꿔야함 conect.sid면 express를 쓰는 걸 들킨다
}))
// 쿠키랑 세션 미들웨어 붙임

app.use(passport.initialize());
app.use(passport.session());
// passport 세션은 express 세션 뒤에 붙여야 한다. 반드시.
// 미들웨어간 의존 관계가 있기 때문에 의존 관계가 있는 경우에는 순서가 매우 중요하다.

app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);
app.use('/api/image', imageAPIRouter);
app.use('/api/category', categoryAPIRouter);
app.use('/api/information', informationAPIRouter);
app.use('/api/portfolio', portAPIRouter);

app.listen(3065, () => {
	console.log('server is running on localhost:3065 !');
});
