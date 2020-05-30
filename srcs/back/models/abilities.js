module.exports = (sequelize, DataTypes) => {
	const Abilities = sequelize.define('Abilities', {
		title: {
			type: DataTypes.STRING(100),
			allowNull: false,
		}
	})

	Abilities.associate = (db) => {
		db.Abilities.hasMany(db.Ab_list);
	}

	return Abilities
}
