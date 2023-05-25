module.exports = (sequelize, dataTypes) => {
    
    let alias = "Usuarios";
        
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        clave: {
            type: dataTypes.STRING,
            allowNull: false
        },
        categoria: {
            type: dataTypes.ENUM('PERSONAL','ADMINISTRADOR'),
            //type: dataTypes.STRING,
        },
        nombreImagen: {
            type: dataTypes.STRING,
            allowNull: false
        }      
    }

    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    const Usuario = sequelize.define(alias, cols, config);

    
    /*Usuario.associate = function (models) {
        Usuario.belongsTo(models.Genres, {
            as: "genre",
            foreignKey: "genre_id"
        })
    }*/
    
    

    return Usuario;
} 