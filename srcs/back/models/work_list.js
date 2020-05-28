module.exports = (sequelize, DataTypes) => {
	const Work_list = sequelize.define('Work_list' , {
		title: {
			type: DataTypes.STRING(30),
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	}, {
		charset: 'utf8',
		collate: 'utf8_general_ci'
	})

	Work_list.associate = (db) => {
		db.Work_list.belongsTo(db.Works);
		db.Work_list.hasMany(db.Image);
	}

	return Work_list;
}
