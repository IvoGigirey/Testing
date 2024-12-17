# MITRE SHOP 

## DESCRIPCIÓN
MITRE SHOP es un e-commerce diseñado para la venta de productos relacionados al fitness y al equipamiento de gimnasios. Este proyecto tiene como objetivo ofrecer una plataforma accesible y eficiente donde los usuarios puedan adquirir máquinas de entrenamiento, suplementos deportivos y otros accesorios de calidad.

## PROPÓSITO
El propósito de este e-commerce es aplicar y demostrar los conceptos aprendidos durante el curso, desde el diseño de interfaces hasta la implementación funcional del sitio. En esta preentrega, se utilizaron **HTML**, **CSS** y **JAVASCRIPT** para su desarrollo.

---

## FUNCIONALIDADES GENERALES
- Barra de navegación horizontal que incluye las secciones: **Inicio**, **Productos**, **Contacto** y **Reseñas**. La pestaña activa se destaca visualmente con un color rojo.
- Diseño **responsive** implementado con **media queries**, asegurando una experiencia óptima en cualquier dispositivo.
- Uso de **Flexbox** y **Grid** para organizar los elementos de forma adaptable y estética.

---

## SECCIONES

### INICIO
- Presenta la marca con un eslogan y una breve descripción.
- Muestra productos destacados organizados mediante **Flexbox** para garantizar una correcta visualización en diferentes tamaños de pantalla.
- Contiene un footer con información de contacto, una descripción de la marca y un botón "CONTACTANOS" que redirige a la sección Contacto.

### PRODUCTOS
- Lista de productos mostrados en formato **Flexbox**, con columnas ajustables según el tamaño de pantalla.
- Cada producto incluye imagen, nombre, precio y un botón de compra.
- Los productos provienen tanto de un archivo JSON local como de la **API de Mercado Libre**.
- El footer incluye información relevante y el botón "CONTACTANOS".

### CONTACTO
- Formulario para enviar mensajes a la empresa. Los campos disponibles son:
  - Nombre
  - Email
  - Número de teléfono
  - Asunto
  - Mensaje
- Sección adicional con datos de contacto de MITRE SHOP: dirección, teléfono y email.
- Incluye un mapa de Google Maps con la ubicación física de la empresa.

### RESEÑAS
- Reseñas mostradas en formato **Grid**, con columnas ajustables según el tamaño de pantalla.
- Muestra opiniones de los clientes en tarjetas con:
  - Nombre del cliente
  - Calificación (de 1 a 5 estrellas)
  - Comentario
- Botón "Dejar una reseña" que abre un formulario para que los usuarios puedan compartir su experiencia con MITRE SHOP.

---

## TECNOLOGÍAS UTILIZADAS
- **HTML5**: Para la estructura del sitio.
- **CSS3**: Para el diseño, estilos y creación de un sitio web responsive.
- **Flexbox y Grid**: Para organizar los elementos en diferentes secciones y adaptarlos a varios dispositivos.
- **Google Maps API**: Para mostrar la ubicación física de MITRE SHOP.
- **API de Mercado Libre**: Para obtener datos dinámicos de productos en las categorías seleccionadas.
- **JSON**: Para gestionar un catálogo local de productos.

---

## INSTRUCCIONES PARA CLONAR Y EJECUTAR EL PROYECTO  

1. **Clonar el repositorio:**  
   Ejecutá el siguiente comando en tu terminal:  
   ```bash
   git clone https://github.com/tuusuario/mitre-shop.git