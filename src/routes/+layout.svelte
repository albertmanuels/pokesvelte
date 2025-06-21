<script>
	import Header from '$lib/components/layouts/Header.svelte';
	import Sidebar from '$lib/components/layouts/Sidebar.svelte';

	let { children } = $props();
</script>

<div>
	<Header />
	<div class="layout">
		<Sidebar />
		<main class="">
			{@render children()}
		</main>
	</div>
</div>

<style>
	:global {
		/* 1. Use a more-intuitive box-sizing model */
		*,
		*::before,
		*::after {
			box-sizing: border-box;
		}

		/* 2. Remove default margin */
		* {
			margin: 0;
			padding: 0;
		}

		/* 3. Enable keyword animations */
		@media (prefers-reduced-motion: no-preference) {
			:global(html) {
				interpolate-size: allow-keywords;
			}
		}

		body {
			/* 4. Add accessible line-height */
			line-height: 1.5;
			/* 5. Improve text rendering */
			-webkit-font-smoothing: antialiased;
		}

		/* 6. Improve media defaults */
		img,
		picture,
		video,
		canvas,
		svg {
			display: block;
			max-width: 100%;
		}

		a {
			text-decoration: none;
			color: inherit;
		}

		/* 7. Inherit fonts for form controls */
		input,
		button,
		textarea,
		select {
			font: inherit;
		}

		/* 8. Avoid text overflows */
		p,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			overflow-wrap: break-word;
		}

		/* 9. Improve line wrapping */
		p {
			text-wrap: pretty;
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			text-wrap: balance;
		}

		#root {
			isolation: isolate;
		}
	}

	:root {
		--primary-blue: #2a75bb;
		--accent-yellow: #ffcb05;
		--deep-red: #cc0000;
		--poke-black: #3b4cca;
		--poke-white: #ffffff;
	}

	.layout {
		position: relative;
		min-height: 100dvh;
	}

	main {
		margin-left: calc(20vw);
		padding-top: 5rem;
	}
</style>
