const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require("dotenv");
const passport = require('passport');
const path = require('path');
const hpp = require('hpp');
const helmet = require('helmet');

const passportConfig = require('./passport');
const db = require('./models');

const portAPIRouter = require('./routes/portfolio');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');
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

if (process.env.NODE_ENV === 'production') {
	app.set('trust proxy', 1);
	app.use(morgan('combined'));
	app.use(hpp());
	app.use(helmet());
	app.use(cors({
		origin: 'https://anjoy.info',
		credentials: true,
	}));
} else {
	app.use(morgan('dev'));
	app.use(cors({
		origin: true,
		credentials: true,
	}));
}

app.use('/globalImg', express.static(path.join(__dirname, 'globalImg')));
app.use('/img_for_portfolio', express.static(path.join(__dirname, 'img_for_portfolio')));
app.use('/', express.static(path.join(__dirname, 'uploads')));

app.use(express.json({
	limit: "50mb",
}))
app.use(express.urlencoded({
	extended: true,
	limit: "50mb",
	parameterLimit: 1000000,
}))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(session({
	saveUninitialized: false,
	resave: false,
	proxy: true,
	secret: process.env.COOKIE_SECRET,
	cookie: {
		httpOnly: true,
		secure: true,
		domain: process.env.NODE_ENV === 'production' && '.anjoy.info'
	},
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/user', userAPIRouter);
app.use('/post', postAPIRouter);
app.use('/posts', postsAPIRouter);
app.use('/category', categoryAPIRouter);
app.use('/information', informationAPIRouter);
app.use('/portfolio', portAPIRouter);

app.get('/', (req, res) => {
	res.send('hello express');
});

app.listen(3065, () => {
	console.log('server is running !');
});
