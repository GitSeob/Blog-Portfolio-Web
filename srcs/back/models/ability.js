module.exports = (sequelize, DataTypes) => {
	const Ability = sequelize.define('Ability' , {
		title: {
			type: DataTypes.STRING(30),
			allowNull: false,
		},
		subTitle: {
			type: DataTypes.STRING(30),
			allowNull: false,
		},
	}, {
		charset: 'utf8',
		collate: 'utf8_general_ci'
	})

	Ability.associate = (db) => {
		db.Ability.hasMany(db.Ability_list);
	}

	return Ability;
}
