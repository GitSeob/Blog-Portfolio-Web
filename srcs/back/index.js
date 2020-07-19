const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require("dotenv");
const passport = require('passport');

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

app.use(morgan('dev'))
app.use('/globalImg', express.static('globalImg'));
app.use('/img_for_portfolio', express.static('img_for_portfolio'));
app.use('/', express.static('uploads'))
app.use(cors({
	origin: 'http://anjoy.info',
	credentials: true,
}))
app.use(express.json({
	limit: "50mb",
}))
app.use(express.urlencoded({
	extended: true,
	limit: "50mb",
	parameterLimit: 1000000,
}))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(expressSession({
	resave: false,
	saveUninitialized: false,
	secret: process.env.COOKIE_SECRET,
	cookie: {
		httpOnly: true,
		secure: false,
		domain: process.env.NODE_ENV === 'production' && '.anjoy.info'
	},
	name: 'anjoy_blog'
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);
app.use('/api/image', imageAPIRouter);
app.use('/api/category', categoryAPIRouter);
app.use('/api/information', informationAPIRouter);
app.use('/api/portfolio', portAPIRouter);

app.listen(80, () => {
	console.log('server is running !');
});
