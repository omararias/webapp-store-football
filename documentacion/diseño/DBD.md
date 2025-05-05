Documentación de Diseño de Base de Datos

1. Introducción

Este documento describe el diseño de base de datos para el sistema "Tienda Football", una aplicación de e-commerce especializada en artículos de football americano. Se utiliza MongoDB como motor NoSQL orientado a documentos. La estructura propuesta cubre el MVP definido para la versión inicial.

2. Entidades y Estructura de Datos

2.1 Usuario (usuarios)

{
  "_id": ObjectId,
  "nombre": "Omar Arias",
  "email": "omar@example.com",
  "passwordHash": "hashed_password",
  "rol": "cliente", // o "admin"
  "fechaRegistro": ISODate()
}

2.2 Producto (productos)

{
  "_id": ObjectId,
  "nombre": "Balón Wilson",
  "descripcion": "Balón oficial con grip para juego competitivo.",
  "precio": 1199,
  "stock": 30,
  "imagenUrl": "/imagenes/balon.jpg",
  "fechaCreacion": ISODate()
}

2.3 Carrito (carritos)

{
  "_id": ObjectId,
  "usuarioId": ObjectId, // referencia a usuarios
  "items": [
    {
      "productoId": ObjectId,
      "cantidad": 2
    }
  ],
  "fechaActualizacion": ISODate()
}

2.4 Pedido (pedidos)

{
  "_id": ObjectId,
  "usuarioId": ObjectId, // referencia a usuarios
  "productos": [
    {
      "productoId": ObjectId,
      "cantidad": 1,
      "precioUnitario": 1199
    }
  ],
  "total": 1199,
  "fechaPedido": ISODate(),
  "estado": "simulado" // en el futuro: pagado, enviado, etc.
}

3. Relaciones Principales

Un usuario puede tener un carrito.

Un usuario puede tener muchos pedidos.

Un carrito contiene varios productos referenciados.

Un pedido contiene copia de productos y su precio al momento de compra.

4. Diccionario de Datos

Colección: usuarios

Campo

Tipo

Descripción

_id

ObjectId

Identificador único

nombre

string

Nombre completo del usuario

email

string

Correo electrónico (único)

passwordHash

string

Contraseña cifrada

rol

string

"cliente" o "admin"

fechaRegistro

date

Fecha de creación de cuenta

Colección: productos

Campo

Tipo

Descripción

_id

ObjectId

ID único del producto

nombre

string

Nombre del producto

descripcion

string

Detalle completo

precio

decimal

Precio en MXN

stock

int

Cantidad disponible

imagenUrl

string

Ruta a la imagen del producto

fechaCreacion

date

Fecha de alta en catálogo

Colección: carritos

Campo

Tipo

Descripción

_id

ObjectId

ID del carrito

usuarioId

ObjectId

Referencia al usuario

items[].productoId

ObjectId

Referencia al producto agregado

items[].cantidad

int

Cantidad deseada

fechaActualizacion

date

Fecha de última modificación

Colección: pedidos

Campo

Tipo

Descripción

_id

ObjectId

ID del pedido

usuarioId

ObjectId

Usuario que realiza el pedido

productos[].productoId

ObjectId

Producto comprado

productos[].cantidad

int

Cantidad adquirida

productos[].precioUnitario

decimal

Precio unitario al momento

total

decimal

Total de la compra

fechaPedido

date

Fecha de creación del pedido

estado

string

Estado del pedido (simulado)

5. Consideraciones de Integridad y Seguridad

Se deben usar índices en los campos de búsqueda frecuentes (email, usuarioId, productoId).

Contraseñas cifradas con bcrypt.

Validar que el carrito pertenezca al usuario autenticado.

Los pedidos deben registrar los datos históricos de precio y cantidad.

6. Expansión futura

Integración con Stripe (estado del pedido: pagado).

Dirección de envío, teléfono, y datos fiscales.

Historial de pedidos por usuario.

Roles adicionales (moderador, soporte).

Fin del documento de diseño de base de datos
