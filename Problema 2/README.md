# Aplicación de consulta de Pokémon

Esta es una aplicación sencilla escrita en Node.js que consulta datos de Pokémon desde la [PokéAPI](https://pokeapi.co/).

## Funciones

1. `getTotalPokemonsByType(type)`: Esta función toma una cadena de texto que representa un tipo de Pokémon y devuelve la cantidad total de Pokémon de ese tipo.

2. `getPokemonsByTwoTypes(type1, type2)`: Esta función toma dos tipos de Pokémon y devuelve todos los Pokémon que son de ambos tipos.

3. `getPokemonNumber(name)`: Esta función toma el nombre de un Pokémon y devuelve su número de identificación.

4. `getPokemonBaseStats(id)`: Esta función toma el ID de un Pokémon y devuelve un objeto con sus seis estadísticas base.

5. `getPokemonDetailsSorted(ids, orderBy)`: Esta función toma un arreglo de IDs de Pokémon y una cadena de texto que representa el criterio de ordenamiento (nombre, tipo o peso) y devuelve un arreglo de Pokémon con sus nombres, tipos y pesos, ordenados según el criterio especificado.

6. `isPokemonOfType(id, type)`: Esta función toma un ID de Pokémon y un tipo y devuelve `true` si el Pokémon tiene ese tipo y `false` si no.

## Cómo ejecutar la aplicación

1. Asegúrate de tener instalado Node.js en tu sistema. Si no lo tienes instalado, puedes descargarlo desde el [sitio oficial de Node.js](https://nodejs.org/).

2. Abre una terminal y navega hasta el directorio donde se encuentra el archivo `pokeapi.js`.

3. Instala las dependencias del proyecto ejecutando `npm install`.

4. Ejecuta la aplicación con el comando `node pokeapi.js`.

Ten en cuenta que las funciones se llaman en el orden mencionado anteriormente en la función `main` del archivo `pokeapi.js`. Para cambiar los parámetros que se pasan a cada función, deberás modificarlos directamente en la función `main`.
