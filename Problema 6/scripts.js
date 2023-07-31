function searchPokemon() {
  var pokemonInput = document.getElementById("pokemon-input");
  var pokemonData = document.getElementById("pokemon-data");
  var pokemon = pokemonInput.value;

  fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
    .then(response => response.json())
    .then(data => {
      pokemonData.innerHTML = `
        <h2>${data.name}</h2>
        <p>Número: ${data.id}</p>
        <p>Tipo: ${data.types.map(t => t.type.name).join(", ")}</p>
        <p>Peso: ${data.weight}</p>
        <p>Altura: ${data.height}</p>
        <img src="${data.sprites.front_default}" alt="${data.name}">
      `;
    })
    .catch(err => {
      pokemonData.textContent = "No se encontró el Pokémon. Intenta de nuevo.";
    });
}
