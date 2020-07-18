module.exports = (sequelize, DataTypes) => {
	const Abilities = sequelize.define('Abilities', {
		list_title: {
			type: DataTypes.STRING(100),
			allowNull: false,
		}
	}, {
		charset: 'utf8',
		collate: 'utf8_general_ci'
	})

	Abilities.associate = (db) => {
		db.Abilities.belongsTo(db.Portfolio);
		db.Abilities.hasMany(db.Ab_list, {
			onDelete: 'cascade',
		});
	}

	return Abilities
}
