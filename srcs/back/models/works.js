module.exports = (sequelize, DataTypes) => {
	const Works = sequelize.define('Works' , {
		title: {
			type: DataTypes.STRING(30),
			allowNull: false,
		},
	}, {
		charset: 'utf8',
		collate: 'utf8_general_ci'
	})

	Works.associate = (db) => {
		db.Works.hasMany(db.Image);
		db.Works.hasMany(db.Work_list);
	}

	return Works;
}
