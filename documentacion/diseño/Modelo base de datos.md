Se utilizará la herramienta MongoDB.
✅ ENTIDADES PRINCIPALES
1. 🧑 Usuario
json

{
  "_id": ObjectId,
  "nombre": "Omar Arias",
  "email": "omar@example.com",
  "passwordHash": "hashed_password",
  "rol": "cliente", // o "admin"
  "fechaRegistro": ISODate
}
2. 🛒 Carrito
json

{
  "_id": ObjectId,
  "usuarioId": ObjectId,
  "items": [
    {
      "productoId": ObjectId,
      "cantidad": 2
    }
  ],
  "fechaActualizacion": ISODate
}
3. 📦 Producto
json

{
  "_id": ObjectId,
  "nombre": "Balón Wilson",
  "descripcion": "Balón oficial con grip para juego competitivo.",
  "precio": 1199,
  "stock": 30,
  "imagenUrl": "/imagenes/balon.jpg",
  "fechaCreacion": ISODate
}
4. 🧾 Pedido (simulado)
json
{
  "_id": ObjectId,
  "usuarioId": ObjectId,
  "productos": [
    {
      "productoId": ObjectId,
      "cantidad": 1,
      "precioUnitario": 1199
    }
  ],
  "total": 1199,
  "fechaPedido": ISODate,
  "estado": "simulado" // en el futuro: pagado, enviado, etc.
}
🎯 Relaciones principales
Un usuario puede tener un carrito.

Un usuario puede tener muchos pedidos.

Un carrito contiene varios productos (por id).

Un pedido contiene copia de productos con su precio al momento de la compra.

💾 Asignacion de nombres de colecciones en MongoDB:
Entidad	Nombre colección
Usuario	usuarios
Producto	productos
Carrito	carritos
Pedido	pedidos

