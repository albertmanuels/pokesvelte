import type { Pokemon_V2_Pokemon } from "../../__generated__/types";

export const formatPokemonId = (id: number | string) => String(id).padStart(3, '0');

export const getPokemonImage = (id: number | string) =>  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

export const getTypeColor = (type: string): string => {
  const colors: Record<string, string> = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
  };
  return colors[type] || '#68A090';
};

export const getPokemonTypes = (pokemon: Pokemon_V2_Pokemon): string[] => {
  return pokemon.pokemon_v2_pokemontypes.map(type => type?.pokemon_v2_type?.name) as string[];
}