module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User' , {
		nickname: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		userId: {
			type: DataTypes.STRING(20),
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING(100),
			allowNull: false,
		}
	}, {
		charset: 'utf8',
		collate: 'utf8_general_ci'
	})

	// User.associate = (db) => {

	// }
	// 블로깅 기능 추가할 때 작성

	return User;
}
