import { fetchPokemons } from "$lib/apollo/queries/pokemons";

export const load = async () => {
  const data = await fetchPokemons({ variables: { offset: 0 } });

  return {
    pokemons: data.data,
    loading: data.loading,
    error: data.error,
  }
}