# Especificación de Requisitos del Software (ERS)

## 1. Introducción

### 1.1 Propósito del sistema

El sistema "Tienda Football" tiene como propósito ofrecer una plataforma web para la visualización y adquisición de artículos relacionados con el football americano. Esta primera versión busca validar la viabilidad del modelo mediante un MVP funcional que incluya navegación, visualización de productos, autenticación de usuarios, gestión de stock por parte de un administrador y un proceso de compra simulado.

### 1.2 Alcance

Este MVP contempla tanto la parte web pública como la autenticada para usuarios finales y administradores. Incluye un panel de administración básico para gestión de productos, así como una funcionalidad de compra simulada. No se contempla aún integración real con pasarelas de pago. El objetivo es probar la experiencia del usuario, la gestión de inventario y la arquitectura base.

---

## 2. Descripción general

### 2.1 Perspectiva del producto

La aplicación web será desarrollada como un sistema monolítico utilizando Next.js (React en frontend y API routes en backend), con una base de datos para gestión de usuarios y productos. Se desplegará inicialmente en Hostinger, con posibilidad de escalar a Azure.

### 2.2 Funcionalidades del sistema

* Visualización de productos sin necesidad de registro.
* Registro y login seguro de usuarios.
* Gestión de carrito por usuario autenticado.
* Acceso restringido a secciones protegidas (como el carrito y la compra).
* Gestión de productos por usuarios con rol administrador (crear, editar, eliminar productos).
* Proceso de compra simulado.

---

## 3. Requisitos funcionales

### RF01 - Registro de usuario

* El sistema permitirá registrar usuarios mediante correo electrónico y contraseña.
* La contraseña se almacenará de forma segura usando hashing (bcrypt).

### RF02 - Login de usuario

* El sistema validará las credenciales e iniciará sesión mediante token JWT.
* Si las credenciales son inválidas, mostrará un mensaje de error.

### RF03 - Visualización de productos

* Los usuarios podrán ver una lista de productos.
* Cada producto tendrá: nombre, imagen, precio, y descripción.

### RF04 - Detalle de producto

* Al seleccionar un producto, el usuario podrá ver detalles ampliados.

### RF05 - Carrito de compras

* Solo usuarios autenticados podrán agregar y ver productos en su carrito.
* El carrito se asocia al usuario logueado.

### RF06 - Logout

* El usuario podrá cerrar sesión, eliminando el token del almacenamiento.

### RF07 - Gestión de productos (administrador)

* Un usuario con rol administrador podrá crear, editar y eliminar productos desde una interfaz de gestión.
* El sistema validará que solo administradores accedan a estas funcionalidades.

### RF08 - Simulación de compra

* El usuario autenticado podrá realizar una compra simulada de los productos en su carrito.
* El sistema deberá mostrar un resumen de compra, detalles del pedido y mensaje de confirmación.

---

## 4. Requisitos no funcionales

### RNF01 - Seguridad

* Todas las contraseñas deben estar cifradas.
* Las rutas protegidas deben requerir validación de token JWT.
* Las API deben sanitizar la entrada de datos.

### RNF02 - Escalabilidad

* El sistema debe estar preparado para migrar a entornos como Azure.

### RNF03 - Compatibilidad

* El sistema será accesible desde navegadores modernos (Chrome, Edge, Firefox).

### RNF04 - Usabilidad

* Interfaz limpia y responsive usando TailwindCSS.

---

## 5. Supuestos y dependencias

* Se asume conexión estable a internet.
* El despliegue se realizará inicialmente en Hostinger.
* La autenticación se maneja con JWT en el cliente y validación en middleware del servidor.

---

## 6. Futuras mejoras (fuera del alcance del MVP)

* Integración con pasarelas de pago como Stripe o MercadoPago.
* Historial de pedidos y facturación.
* Roles adicionales (moderador, cliente premium).
* Gestión de usuarios por parte del administrador.

---

**Fin del documento ERS - Tienda Football MVP**
