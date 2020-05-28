module.exports = (sequelize, DataTypes) => {
	const About = sequelize.define('About', {
		title: {
			type: DataTypes.STRING(40),
			allowNull: false,
		},
		subTitle: {
			type: DataTypes.STRING(40),
			allowNull: false,
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},{
		charset: 'utf8',
		collate: 'utf8_general_ci',
	})

	return About;
}
