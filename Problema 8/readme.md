# Visualizador de imágenes

## Descripción

Esta es una aplicación web simple que recibe un número como entrada y muestra esa cantidad de imágenes en el navegador.

## Funcionamiento

El usuario debe ingresar un número entre 1 y 15 en el campo de entrada y hacer clic en el botón "Mostrar imágenes". Luego, la aplicación generará esa cantidad de imágenes en el navegador.

Si el número ingresado es par, se mostrarán la misma cantidad de imágenes en cada fila (hasta un máximo de 7 imágenes por fila). Si el número ingresado es impar, la última fila mostrará menos imágenes que las otras filas.

Las imágenes utilizadas en esta aplicación están alojadas en un servidor remoto y se cargan de forma dinámica en la página utilizando JavaScript.

## Código

La aplicación está compuesta por tres archivos: `index.html`, `styles.css` y `scripts.js`.

### HTML

El archivo `index.html` contiene la estructura básica de la aplicación, que consiste en un campo de entrada para ingresar el número de imágenes, un botón para generar las imágenes y un contenedor donde se mostrarán las imágenes.

### CSS

El archivo `styles.css` proporciona los estilos para la aplicación. Esto incluye la tipografía, los colores, el espaciado, el diseño general de la aplicación y los estilos específicos para el campo de entrada, el botón y las imágenes.

### JavaScript

El archivo `scripts.js` contiene la lógica de la aplicación. Cuando el usuario hace clic en el botón "Mostrar imágenes", se llama a la función `displayImages()`. Esta función toma el número ingresado por el usuario, valida que sea un número entre 1 y 15, y genera esa cantidad de imágenes en el navegador.

## Conclusión

Esta aplicación demuestra cómo se puede utilizar JavaScript para interactuar con el DOM y generar contenido dinámico en una página web. También muestra cómo se pueden aplicar estilos a los elementos HTML usando CSS para crear una interfaz de usuario atractiva y profesional.
