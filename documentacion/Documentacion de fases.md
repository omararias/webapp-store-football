FASE 1: Análisis y Planificación — Ingeniería de Software
🎯 Objetivo general del sistema:
Desarrollar una plataforma web donde los usuarios puedan ver y comprar artículos deportivos relacionados con football americano, permitiendo una experiencia simple, rápida y funcional desde el navegador.

📌 Público objetivo:
Jugadores de football americano.

Entrenadores y equipos.

Aficionados o padres que compran para sus hijos.

🎯 Definición de MVP (Mínimo Producto Viable)
Un MVP es una versión simplificada de tu sistema que entrega valor real al usuario con el menor tiempo y esfuerzo posible, permitiendo validar el modelo.


👤 Roles del sistema
Rol	Acciones principales
Usuario sin cuenta	-Ver productos, explorar sitio
Usuario registrado	-Iniciar sesión, agregar al carrito, ver carrito
Admin	-Iniciar sesión, acceder al panel privado, gestionar productos

📦 Funcionalidades clave del MVP
🧩 Funcionalidades públicas
Ver página de inicio con descripción de la tienda.

Ver listado de productos con imagen, nombre y precio.

Ver detalle individual del producto.

🔐 Funcionalidades con autenticación (usuario)
Registro de usuario con email y contraseña.

Login seguro con validación y almacenamiento de token JWT.

Visualización del carrito de compras.

Realización de compra (simulado inicialmente)

Cierre de sesión.

⚙️ Funcionalidades con autenticación (admin)
Crear, editar y eliminar productos.

Acceder a un panel de gestión (privado).

Validación de acceso mediante rol.

🔐 Seguridad en MVP
Contraseñas cifradas con bcrypt.

Tokens JWT para identificar sesiones.

Protección de rutas con middleware.

Validaciones básicas en formularios (XSS, inputs vacíos, etc.).