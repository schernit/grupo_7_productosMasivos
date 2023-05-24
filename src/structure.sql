CREATE TABLE `Usuarios` (
   `ID` INT,
   `Nombre ` VARCHAR(25),
   `Apellido` VARCHAR(50),
   `Email` VARCHAR(255),
   `Categoria_id` INT,
   `Password` VARCHAR(255),
   PRIMARY KEY (`ID`)
);

CREATE TABLE `Categorias` (
   `ID ` INT,
   `Descripcion` VARCHAR(50),
   PRIMARY KEY (`ID `)
);

CREATE TABLE `Usuarios_Productos` (
   `ID ` INT,
   `Producto_id` INT DEFAULT MANY TO MANY,
   `Usuario_id` INT,
   `` ,
   PRIMARY KEY (`ID `)
);

CREATE TABLE `Productos` (
   `ID` INT,
   `Marcas_id` INT,
   `Proveedores_id` INT,
   `Imagen` VARCHAR(255),
   `Precio` DECIMAL,
   PRIMARY KEY (`ID`)
);

CREATE TABLE `Marcas` (
   `ID` INT,
   `Nombre` VARCHAR(50),
   PRIMARY KEY (`ID`)
);

CREATE TABLE `Proveedores` (
   `ID` INT,
   `Nombre` VARCHAR(25),
   `Apellido` VARCHAR(50),
   `Direccion` VARCHAR(75),
   `Telefono` VARCHAR(75),
   PRIMARY KEY (`ID`)
);

CREATE TABLE `Marcas_Proveedores` (
   `ID` INT,
   `Marcas_id` INT,
   `Proveedores_id` INT,
   PRIMARY KEY (`ID`)
);


ALTER TABLE `Usuarios` ADD CONSTRAINT `FK_d6111943-3cc3-43c5-aea7-9ed7e77271f3` FOREIGN KEY (`Categoria_id`) REFERENCES `Categorias`(`ID `)  ;

ALTER TABLE `Usuarios_Productos` ADD CONSTRAINT `FK_8833b08a-a591-4dbb-9d8e-f32b02894bd1` FOREIGN KEY (`Producto_id`) REFERENCES `Productos`(`ID`)  ;

ALTER TABLE `Usuarios_Productos` ADD CONSTRAINT `FK_1710e314-52a9-4c3e-be7f-30489b7a03d6` FOREIGN KEY (`Usuario_id`) REFERENCES `Usuarios`(`ID`)  ;

ALTER TABLE `Productos` ADD CONSTRAINT `FK_1a630214-de1b-4228-b43d-fe7100d02066` FOREIGN KEY (`Proveedores_id`) REFERENCES `Proveedores`(`ID`)  ;

ALTER TABLE `Productos` ADD CONSTRAINT `FK_3d2acd00-970e-424f-a1f5-fb6924a80f0f` FOREIGN KEY (`Marcas_id`) REFERENCES `Marcas`(`ID`)  ;

ALTER TABLE `Marcas_Proveedores` ADD CONSTRAINT `FK_142a6f21-4d16-4ee7-aede-a92aa4aaae08` FOREIGN KEY (`Marcas_id`) REFERENCES `Marcas`(`ID`)  ;

ALTER TABLE `Marcas_Proveedores` ADD CONSTRAINT `FK_8a62d0f3-f63b-45f2-adfd-fc36502d9c15` FOREIGN KEY (`Proveedores_id`) REFERENCES `Proveedores`(`ID`)  ;
