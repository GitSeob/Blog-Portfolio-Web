const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, {
	host: 'blog-db.cvjt8y9opoga.ap-northeast-2.rds.amazonaws.com',
	port: 3306,
	maxConcurrentQueries: 100,
	dialect: 'mysql',
	pool: { maxConnections: 5, maxIdleTime: 30},
});

db.Abilities = require('./abilities')(sequelize, Sequelize);
db.Ab_list = require('./ab_list')(sequelize, Sequelize);
db.Portfolio = require('./portfolio')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);
db.Works = require('./works')(sequelize, Sequelize);
db.Work_row = require('./work_row')(sequelize, Sequelize);

db.Posts = require('./posts')(sequelize, Sequelize);
db.Category = require('./category')(sequelize, Sequelize);
db.Blog = require('./blog')(sequelize, Sequelize);
// 각 테이블 연결

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
			db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
