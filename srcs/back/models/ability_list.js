module.exports = (sequelize, DataTypes) => {
	const Ability_list = sequelize.define('Ability_list' , {
		title: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	}, {
		charset: 'utf8',
		collate: 'utf8_general_ci'
	})

	Ability_list.associate = (db) => {
		db.Ability_list.belongsTo(db.Ability);
	}

	return Ability_list;
}
