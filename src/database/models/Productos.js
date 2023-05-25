module.exports = (sequelize, dataTypes) => {
    
    let alias = "Productos";
        
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreImagen: {
            type: dataTypes.STRING,
            allowNull: false
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING,
            allowNull: false
        },
        marca: {
            type: dataTypes.STRING,
            allowNull: false
        },
        /*proveedor: {
            type: dataTypes.STRING,
            allowNull: false
        },*/
        precio: {
            type: dataTypes.STRING,
            allowNull: false
        },
        oferta: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        categoria: {
            type: dataTypes.ENUM('PRODUCTO','NO APLICA','SEGUNDO PRODUCTO','2 X 1','3 X 1'),
            allowNull: false
        },
        precioDescuentoLeyenda: {
            type: dataTypes.STRING,
            allowNull: false
        }

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
