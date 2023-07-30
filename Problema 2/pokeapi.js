const axios = require('axios');

async function getTotalPokemonsByType(type) {
  const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
  console.log(`Total de pokemones de tipo ${type}: ${response.data.pokemon.length}`);
}

async function getPokemonsByTwoTypes(type1, type2) {
  const res1 = await axios.get(`https://pokeapi.co/api/v2/type/${type1}`);
  const res2 = await axios.get(`https://pokeapi.co/api/v2/type/${type2}`);

  const pokemonsType1 = new Set(res1.data.pokemon.map(p => p.pokemon.name));
  const pokemonsType2 = new Set(res2.data.pokemon.map(p => p.pokemon.name));

  const commonPokemons = [...pokemonsType1].filter(pokemon => pokemonsType2.has(pokemon));

  console.log(`Pokemones que son de tipo ${type1} y ${type2}: ${commonPokemons}`);
}

async function getPokemonNumber(name) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  console.log(`El número del Pokémon ${name} es: ${response.data.id}`);
}

async function getPokemonBaseStats(id) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const baseStats = {};
  response.data.stats.forEach(stat => {
    baseStats[stat.stat.name] = stat.base_stat;
  });

  console.log(`Las estadísticas base del Pokémon con ID ${id} son:`, baseStats);
}

async function getPokemonDetailsSorted(ids, orderBy) {
  const pokemonDetails = await Promise.all(ids.map(async id => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return {
      name: response.data.name,
      type: response.data.types[0].type.name,
      weight: response.data.weight
    };
  }));

  pokemonDetails.sort((a, b) => {
    if (orderBy === 'name' || orderBy === 'type') {
      return a[orderBy].localeCompare(b[orderBy]);
    } else if (orderBy === 'weight') {
      return a.weight - b.weight;
    }
  });

  console.log(`Pokemones ordenados por ${orderBy}:`, pokemonDetails);
}

async function isPokemonOfType(id, type) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemonTypes = response.data.types.map(t => t.type.name);
  const hasType = pokemonTypes.includes(type);

  console.log(`El Pokémon con ID ${id} ${hasType ? 'sí' : 'no'} es de tipo ${type}.`);

  return hasType;
}

async function main() {
  await getTotalPokemonsByType('fire');
  await getPokemonsByTwoTypes('grass', 'poison');
  await getPokemonNumber('pikachu');
  await getPokemonBaseStats(1);
  await getPokemonDetailsSorted([1, 2, 3, 4, 5], 'weight');
  await isPokemonOfType(6, 'grass');
}

main().catch(console.error);
