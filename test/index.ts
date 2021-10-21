import PokeAPI from 'pokedex-promise-v2';

const pokedex = new PokeAPI();

pokedex.getPokemonSpeciesByName('pikachu').then((response) => console.log(response.color)).finally(() => console.log('exited'));
