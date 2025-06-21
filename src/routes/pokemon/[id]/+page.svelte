<script lang="ts">
	import Container from '$lib/components/layouts/Container.svelte';
	import { THRESHOLD } from '$lib/constants/globals.js';
	import { generateRandomTheshold } from '$lib/utils/globals.js';
	import { setPokemonLS } from '$lib/utils/localStorage.js';

	const { data } = $props();

	let pokemon = $state(data.data);

	function catchPokemon() {
		const percentage = generateRandomTheshold();

		const payload = {
			name: pokemon.name,
			id: pokemon.id,
			pokemon_v2_pokemontypes: pokemon.pokemon_v2_pokemontypes
		};

		if (percentage >= THRESHOLD) {
			setPokemonLS(payload);
		} else {
			alert('failed to catch a pokemon');
		}
	}
</script>

<Container>
	<div>
		<div>{pokemon.name}</div>
		<span>Height: {pokemon.height}</span>
	</div>

	<button class="catch-button" onclick={catchPokemon}>Catch</button>
</Container>

<style>
	.catch-button {
		padding: 5px 10px;
		background-color: var(--primary-blue);
		color: var(--poke-white);
		cursor: pointer;
	}
</style>
