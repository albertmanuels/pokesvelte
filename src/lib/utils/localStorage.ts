import type { PokemonLS } from "$lib/types/globals";

export const getPokemonLS = () => {
  const result = localStorage.getItem('my-pokemons') as string;
  return JSON.parse(result)
}

export const setPokemonLS = (value: PokemonLS) => {
  const pokemonLS = getPokemonLS()

  if (pokemonLS) {
    localStorage.setItem('my-pokemons', JSON.stringify([...pokemonLS, value]));
  } else {
    localStorage.setItem('my-pokemons', JSON.stringify([value]));
  }
}