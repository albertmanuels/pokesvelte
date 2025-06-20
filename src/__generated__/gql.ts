/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetAllPokemons($limit: Int!) {\n    pokemons: pokemon_v2_pokemon(limit: $limit) {\n      id\n      name\n      height\n      weight\n      pokemon_v2_pokemontypes {\n        pokemon_v2_type {\n          name\n        }\n      }\n    }\n  }\n": typeof types.GetAllPokemonsDocument,
    "\n  query GetPokemon($id: Int!) {\n    pokemon_v2_pokemon(where: {id: {_eq: $id}}) {\n      id\n      name\n      height\n      weight\n      base_experience\n    }\n  }\n": typeof types.GetPokemonDocument,
};
const documents: Documents = {
    "\n  query GetAllPokemons($limit: Int!) {\n    pokemons: pokemon_v2_pokemon(limit: $limit) {\n      id\n      name\n      height\n      weight\n      pokemon_v2_pokemontypes {\n        pokemon_v2_type {\n          name\n        }\n      }\n    }\n  }\n": types.GetAllPokemonsDocument,
    "\n  query GetPokemon($id: Int!) {\n    pokemon_v2_pokemon(where: {id: {_eq: $id}}) {\n      id\n      name\n      height\n      weight\n      base_experience\n    }\n  }\n": types.GetPokemonDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAllPokemons($limit: Int!) {\n    pokemons: pokemon_v2_pokemon(limit: $limit) {\n      id\n      name\n      height\n      weight\n      pokemon_v2_pokemontypes {\n        pokemon_v2_type {\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllPokemons($limit: Int!) {\n    pokemons: pokemon_v2_pokemon(limit: $limit) {\n      id\n      name\n      height\n      weight\n      pokemon_v2_pokemontypes {\n        pokemon_v2_type {\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPokemon($id: Int!) {\n    pokemon_v2_pokemon(where: {id: {_eq: $id}}) {\n      id\n      name\n      height\n      weight\n      base_experience\n    }\n  }\n"): (typeof documents)["\n  query GetPokemon($id: Int!) {\n    pokemon_v2_pokemon(where: {id: {_eq: $id}}) {\n      id\n      name\n      height\n      weight\n      base_experience\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;