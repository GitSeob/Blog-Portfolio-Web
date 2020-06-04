module.exports = (sequelize, DataTypes) => {
	const Works = sequelize.define('Works' , {
		proj_name: {
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
		period: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		members: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		category: {
			type: DataTypes.STRING(40),
			allowNull: false,
		},
		repo: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	}, {
		charset: 'utf8',
		collate: 'utf8_general_ci'
	})

	Works.associate = (db) => {
		// db.Works.hasOne(db.Posts);
		db.Works.hasOne(db.Image);
	}

	return Works;
}
