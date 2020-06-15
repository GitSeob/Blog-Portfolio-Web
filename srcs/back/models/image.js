module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
        src: {
            type: DataTypes.BLOB,
            allowNull: false
        },
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci'
    })

    Image.associate = (db) =>{
        db.Image.belongsTo(db.Works);
        // db.Image.belongsTo(db.Posts);
    }

    return Image
}
