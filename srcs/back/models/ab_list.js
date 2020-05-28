module.exports = (sequelize, DataTypes) => {
	const Ab_list = sequelize.define('Ab_list', {
		content: {
			type: DataTypes.STRING(100),
			allowNull: false,
		}
	})

	Ab_list.associate = (db) => {
		db.Ab_list.belongsTo(db.Abilities);
	}
}
