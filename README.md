
# Proyecto de Carrito de Compras

Este proyecto es una aplicación web simple que simula un carrito de compras al estilo de Amazon. Utiliza JavaScript moderno con módulos para estructurar el código y mejorar la legibilidad y la mantenibilidad.

## Tabla de Contenidos

- [Proyecto de Carrito de Compras](#proyecto-de-carrito-de-compras)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Características](#características)
  - [Tecnologías Usadas](#tecnologías-usadas)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Instalación](#instalación)
  - [Uso](#uso)
  - [Autor](#autor)

## Características

- Visualización de productos con detalles como nombre, descripción y precio.
- Agregar productos al carrito de compras.
- Visualización de reseñas de productos.
- Persistencia del carrito utilizando Local Storage.

## Tecnologías Usadas

- HTML
- CSS
- JavaScript
- Local Storage para almacenamiento del carrito

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
/proyecto-carrito
├── /css
│   └── styles.css          # Estilos de la aplicación
├── /modules
│   ├── cart.js             # Lógica del carrito
│   ├── footer.js           # Componente del pie de página
│   ├── header.js           # Componente de la cabecera
│   ├── productDetails.js    # Componente de detalles del producto
│   └── reviews.js          # Componente de reseñas
├── index.js                # Archivo principal que inicializa la aplicación
└── index.html              # Página HTML principal
```

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone <url-del-repositorio>
   ```

2. Navega a la carpeta del proyecto:

   ```bash
   cd proyecto-carrito
   ```

3. Abre `index.html` en tu navegador para ver la aplicación en acción.

## Uso

- En la página principal, puedes ver una lista de productos disponibles.
- Al hacer clic en "Agregar al carrito" en un producto, este se añadirá a tu carrito.
- Puedes visualizar el contenido del carrito en la sección designada en la página.
- Las reseñas de los productos se muestran en su respectiva sección.


## Autor
Mathias Teran
