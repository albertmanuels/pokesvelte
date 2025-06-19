import { gql } from "@apollo/client";

export const GET_POKEMON_DETAIL = gql`
  query GetPokemon($id: Int!) {
    pokemon_v2_pokemon(where: {id: {_eq: $id}}) {
      id
      name
      height
      weight
      base_experience
    }
  }
`