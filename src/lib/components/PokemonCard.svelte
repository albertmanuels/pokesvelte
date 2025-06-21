<script>
	import { hexToHSL } from '$lib/utils/color';
	import { getPokemonImage, getPokemonTypes, getTypeColor } from '$lib/utils/pokemon';

	const { pokemon } = $props();

	const types = getPokemonTypes(pokemon);
</script>

<a href="/pokemon/{pokemon.id}">
	<div class="card" style="--bg-color: {hexToHSL(getTypeColor(types[0]), 0.8)}">
		<div class="image-wrapper">
			<img src={getPokemonImage(pokemon.id)} alt={pokemon.name} />
		</div>

		<div class="info-wrapper">
			<h4 class="title">{pokemon.name}</h4>
			<div class="types-wrapper">
				{#each types as type}
					<span class="type-badge" style="--bg-color: {getTypeColor(type)}">{type}</span>
				{/each}
			</div>
		</div>
	</div>
</a>

<style>
	.card {
		background-color: var(--bg-color);
		padding: 20px 10px;
		border-radius: 10px;
		height: 100%;
		min-height: 100%;
		border: 1px solid transparent;

		&:hover {
			border: 1px solid rgba(0, 0, 0, 0.8);
			transition: border 0.2s ease-in-out;
		}

		&:hover > .image-wrapper {
			transform: scale(1.06);
			transition: transform 0.2s ease-in-out;
		}
	}

	.image-wrapper {
		display: flex;
		justify-content: center;
		margin-bottom: 10px;
		min-height: 192px;
	}

	.info-wrapper {
		text-align: center;
		margin-top: auto;
	}

	.title {
		font-size: 1.2em;
		font-weight: bold;
		margin-bottom: 5px;
	}

	.types-wrapper {
		display: flex;
		justify-content: center;
		gap: 2px;
		flex-wrap: wrap;
	}

	.type-badge {
		background-color: var(--bg-color);
		border-radius: 10px;
		padding: 2px 10px;
		font-size: 1em;
		font-weight: 500;
		color: white;
		margin-top: 5px;
		display: inline-block;
	}
</style>
