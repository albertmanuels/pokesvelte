<script lang="ts">
	import { fetchInfinitePokemons, LIMIT } from '$lib/apollo/queries/pokemons.js';
	import Container from '$lib/components/layouts/Container.svelte';
	import PokemonCard from '$lib/components/PokemonCard.svelte';
	import { getPokemonImage } from '$lib/utils/pokemon';
	import type { Pokemon_V2_Pokemon } from '../__generated__/types';

	let { data } = $props();

	let pokemons = $state<Pokemon_V2_Pokemon[]>(data.pokemons);
	let offset = $state(LIMIT);
	let isLoading = $state(data.loading);

	let loadingCard = Array.from({ length: LIMIT }, (_, i) => i + 1);

	async function loadMore() {
		try {
			isLoading = true;
			const { data, loading } = await fetchInfinitePokemons({ offset });

			pokemons.push(...data);
			isLoading = loading;
			offset += LIMIT;
		} catch (error) {
			isLoading = false;
			console.error('Error loading more pokemons:', error);
		}
	}
</script>

{#snippet SkeletonCard(id: number)}
	<div class="card skeleton">
		<div class="image-placeholder">
			<img src={getPokemonImage(id)} alt="Loading..." />
		</div>
		<div class="info-wrapper">
			<span class="text-placeholder placeholder"></span>
			<div class="types-wrapper">
				<span class="placeholder"></span>
				<span class="placeholder"></span>
			</div>
		</div>
	</div>
{/snippet}

<Container>
	<ul class="list-wrapper">
		{#each pokemons as pokemon (pokemon.id)}
			<li>
				<PokemonCard {pokemon} />
			</li>
		{/each}

		{#if isLoading}
			{#each loadingCard as i (i)}
				<li>
					{@render SkeletonCard(25)}
				</li>
			{/each}
		{/if}
	</ul>

	<button onclick={loadMore} class="load-more-button" disabled={isLoading}>
		{#if isLoading}
			<span>Loading...</span>
		{:else}
			<span>Load More</span>
		{/if}
	</button>
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

	.load-more-button {
		display: block;
		margin: 20px auto;
		padding: 10px 20px;
		background-color: goldenrod;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		font-size: 16px;
	}

	.skeleton {
		background-color: #f0f0f0;
		border-radius: 10px;
		padding: 20px 10px;
		width: 100%;
		height: 100%;
		min-height: 252px;

		.image-placeholder > img {
			width: 100%;
			height: auto;
			filter: brightness(0);
		}

		.types-wrapper {
			display: flex;
			gap: 2px;
			flex-wrap: wrap;
			justify-content: center;
		}
		.placeholder {
			display: block;
			background-color: black;
			width: 50%;
			height: 12px;
			border-radius: 10px;
		}
		.types-wrapper > .placeholder {
			background-color: black;
			width: 30px;
			height: 12px;
			border-radius: 10px;
		}

		.text-placeholder {
			margin: 0 auto 8px;
		}
	}
</style>
