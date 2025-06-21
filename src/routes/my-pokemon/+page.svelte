<script lang="ts">
	import Container from '$lib/components/layouts/Container.svelte';
	import PokemonCard from '$lib/components/PokemonCard.svelte';
	import { getPokemonLS } from '$lib/utils/localStorage';
	import { onMount } from 'svelte';

	let pokemons = $state<Array<{ name: string; id: string }>>([]);

	async function loadPokemonFromLS() {
		try {
			const pokemonLS = getPokemonLS();

			pokemons = pokemonLS;
		} catch (error) {
			console.log(error);
		}
	}

	onMount(async () => {
		await loadPokemonFromLS();
	});
</script>

<Container>
	<ul class="list-wrapper">
		{#each pokemons as pokemon (pokemon.id)}
			<li>
				<PokemonCard {pokemon} />
			</li>
		{/each}
	</ul>
</Container>

<style>
	.list-wrapper {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 16px;
	}
</style>
