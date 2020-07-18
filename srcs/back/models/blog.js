module.exports = (sequelize, DataTypes) => {
	const Blog = sequelize.define('Blog', {
		title: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		favicon_url: {
			type: DataTypes.TEXT,
			allowNull: true,
		}
	}, {
		charset: 'utf8',
		collate: 'utf8_general_ci'
	})

	Blog.associate = (db) => {
		db.Blog.belongsTo(db.User);
	}

	return Blog
}
