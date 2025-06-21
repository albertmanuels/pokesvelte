import { gql } from "@apollo/client/core";
import { client } from "../client";
import type { QueryFunctionOptions } from "@apollo/client";
import type { Pokemon_V2_Pokemon } from "../../../__generated__/types";


export const GET_POKEMON_DETAIL = gql`
 query GetPokemon($pokemonV2PokemonByPkId: Int!) {
  pokemon_v2_pokemon_by_pk(id: $pokemonV2PokemonByPkId) {
    id
    name
    height
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
  }
}
`

export const fetchPokemon = async (ctx:QueryFunctionOptions) => {
  const {variables} = ctx

  const result = await client.query({
    query: GET_POKEMON_DETAIL,
    variables: {pokemonV2PokemonByPkId: variables?.id}
  })

  return {
    data: result.data.pokemon_v2_pokemon_by_pk as Pokemon_V2_Pokemon,
    loading: result.loading,
    error: result.error
  }
} 