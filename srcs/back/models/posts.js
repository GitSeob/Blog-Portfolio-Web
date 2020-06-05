module.exports = (sequelize, DataTypes) => {
	const Posts = sequelize.define('Posts', {
		title: {
			type: DataTypes.STRING(60),
			allowNull: false,
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		thumbnail_img: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		thumbnail_content: {
			type: DataTypes.TEXT,
			allowNull: false,
		}
	}, {
		charset: 'utf8',
		collate: 'utf8_general_ci'
	})

	Posts.associate = (db) =>{
		db.Posts.belongsTo(db.Category);
		// db.posts.hasOne(db.Works);
	};

	return Posts;
}
