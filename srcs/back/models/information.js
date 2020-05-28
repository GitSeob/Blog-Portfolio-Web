module.exports = (sequelize, DataTypes) => {
	const Information = sequelize.define('Information', {
		f_title: {
			type: DataTypes.STRING(40),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(40),
			allowNull: false,
		},
		f_comment: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		github: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		blog: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		l_comment: {
			type: DataTypes.TEXT,
			allowNull: false,
		}

	},{
		charset: 'utf8',
		collate: 'utf8_general_ci',
	})

	return Information;
}
