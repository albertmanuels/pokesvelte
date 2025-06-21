<script lang="ts">
	const { children } = $props();
</script>

<div class="container">
	{@render children()}
</div>

<style>
	.container {
		margin: 0 auto;
		padding: 0 20px;
	}
</style>
