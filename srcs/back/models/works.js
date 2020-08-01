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
		imgSrc: {
			type: DataTypes.TEXT,
			allowNull: true,
		}
	}, {
		charset: 'utf8',
		collate: 'utf8_general_ci'
	})

	Works.associate = (db) => {
		db.Works.belongsTo(db.Portfolio);
		db.Works.hasMany(db.Work_row, {
			onDelete: 'cascade',
		});
	}

	return Works;
}
