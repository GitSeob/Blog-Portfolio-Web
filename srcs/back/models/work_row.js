module.exports = (sequelize, DataType) => {
	const Work_row = sequelize.define('Work_row', {
		row_name: {
			type: DataType.STRING(100),
			allowNull: false,
		},
		row_descript: {
			type: DataType.STRING(200),
			allowNull: false,
		},
		row_content: {
			type: DataType.TEXT,
			allowNull: false,
		}
	})

	Work_row.associate = (db) => {
		db.Work_row.belongsTo(db.Works);
	}

	return Work_row;
}
