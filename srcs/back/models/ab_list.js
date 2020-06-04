module.exports = (sequelize, DataTypes) => {
	const Ab_list = sequelize.define('Ab_list', {
		list_attribute: {
			type: DataTypes.STRING(100),
			allowNull: false,
		}
	})

	Ab_list.associate = (db) => {
		db.Ab_list.belongsTo(db.Abilities);
	}

	return Ab_list
}
