module.exports = (sequelize, dataTypes) => {
    
    let alias = "Productos";
        
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        marca: {
            type: dataTypes.STRING,
            allowNull: false
        },
        proveedor: {
            type: dataTypes.STRING,
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: dataTypes.STRING,
            allowNull: false
        },
    }

    let config = {
        tableName: "productos",
        timestamps: false
    }

    const Producto = sequelize.define(alias, cols, config);

    /*
    Usuario.associate = function (models) {
        Usuario.belongsTo(models.Genres, {
            as: "genre",
            foreignKey: "genre_id"
        })
    }
    */

    return Producto;
}