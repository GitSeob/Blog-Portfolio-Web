const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Abilities = require('./abilities')(sequelize, Sequelize);
db.Ab_list = require('./ab_list')(sequelize, Sequelize);
db.Portfolio = require('./portfolio')(sequelize, Sequelize);
db.Image = require('./image')(sequelize, Sequelize);
// db.Information = require('./information')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);
db.Works = require('./works')(sequelize, Sequelize);
// db.Work_list = require('./work_list')(sequelize, Sequelize);

db.Posts = require('./posts')(sequelize, Sequelize);
db.Category = require('./category')(sequelize, Sequelize);
// 각 테이블 연결

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
