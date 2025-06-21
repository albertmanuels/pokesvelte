import { fetchPokemon } from '$lib/apollo/queries/pokemon.js'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({params}) => {
  const {id} = params

  const result = await fetchPokemon({variables: {id: parseInt(id)}})

  return {
    data: result.data,
    loading: result.loading,
    error: result.error
  }
}