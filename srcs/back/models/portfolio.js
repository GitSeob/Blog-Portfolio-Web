module.exports = (sequelize, DataTypes) => {
	const Portfolio = sequelize.define('Portfolio' , {
		about_title: {
			type: DataTypes.STRING(40),
			allowNull: false,
		},
		about_sub_title: {
			type: DataTypes.STRING(40),
			allowNull: false,
		},
		about_content: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		ability_title: {
			type: DataTypes.STRING(40),
			allowNull: false,
		},
		ability_sub_title: {
			type: DataTypes.STRING(40),
			allowNull: false,
		},
		work_title: {
			type: DataTypes.STRING(40),
			allowNull: false,
		},
		footer_title: {
			type: DataTypes.STRING(40),
			allowNull: false,
		},
		footer_email: {
			type: DataTypes.STRING(60),
			allowNull: false,
		},
		footer_comment: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		link_github: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		link_blog: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		link_comment: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	}, {
		charset: 'utf8',
		collate: 'utf8_general_ci'
	})

	return Portfolio;
}
