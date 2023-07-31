# Buscador de Pokémon

## Descripción

Esta es una aplicación web que utiliza la API de Pokémon (https://pokeapi.co/) para buscar información sobre los Pokémon por su nombre o número.

## Funcionamiento

El usuario puede ingresar el nombre o número de un Pokémon en un campo de texto y luego hacer clic en el botón "Buscar". La aplicación buscará en la API de Pokémon la información correspondiente y la mostrará en la pantalla. Los datos que se muestran incluyen: nombre, número, tipo, peso, altura e imagen del Pokémon.

## Código

La aplicación consta de tres archivos: `index.html`, `styles.css` y `scripts.js`.

### HTML

El archivo `index.html` proporciona la estructura básica de la aplicación. Contiene el campo de texto para ingresar el nombre o número del Pokémon y el botón para realizar la búsqueda. También contiene los elementos HTML donde se mostrarán los datos del Pokémon.

### CSS

El archivo `styles.css` proporciona los estilos para la aplicación. Esto incluye la tipografía, los colores, el espaciado, y los estilos específicos para los elementos de entrada, botones y datos del Pokémon.

### JavaScript

El archivo `scripts.js` contiene la lógica de la aplicación. Implementa la función `searchPokemon` que realiza la búsqueda en la API de Pokémon utilizando `fetch`, y luego actualiza los elementos HTML con los datos recibidos.

## Conclusión

Esta aplicación demuestra cómo se pueden utilizar HTML, CSS y JavaScript para interactuar con una API y mostrar datos dinámicamente en la página. Es un ejemplo sencillo de cómo se puede crear una interfaz de usuario interactiva y funcional que interactúa con una API externa.
