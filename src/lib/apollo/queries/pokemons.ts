import { gql } from '@apollo/client/core';
import { client } from '../client';
import type { QueryFunctionOptions } from '@apollo/client';
import type { Pokemon_V2_Pokemon } from '../../../__generated__/types';

export const LIMIT = 5

export const GET_POKEMON_LIST = gql`
  query GetAllPokemons($limit: Int!, $offset: Int!) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      id
      name
      height
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;

export const fetchPokemons = async (ctx: QueryFunctionOptions) => {
    const {variables}  = ctx
  
  	const result = await client.query({
			query: GET_POKEMON_LIST,
			variables: { limit: LIMIT , offset: variables?.offset },
			fetchPolicy: 'network-only'
		});

  
		return {
      data: result.data.pokemon_v2_pokemon as Pokemon_V2_Pokemon[],
      loading: result.loading,
      error: result.error,
    }
}

export const fetchInfinitePokemons = async ({offset}: {offset: number}) => {
  const result = await client.query({
    query: GET_POKEMON_LIST,
    variables: { limit: LIMIT , offset: offset },
    fetchPolicy: "network-only"
  });

  return {
    data: result.data.pokemon_v2_pokemon as Pokemon_V2_Pokemon[],
    loading: result.loading,
    error: result.error,
  }
}
