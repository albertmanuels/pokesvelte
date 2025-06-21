<aside>
	<div class="wrapper">
		<ul>
			<li>
				<a href="/" class="nav-link">Home</a>
			</li>
			<li>
				<a href="/my-pokemon" class="nav-link">My Pokemon</a>
			</li>
		</ul>
	</div>
</aside>

<style>
	aside {
		display: inline-block;
		position: fixed;
		top: 4rem;
		left: 0;
		min-width: 14.75rem;
		background-color: var(--poke-white);
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		height: 100vh;
	}

	ul {
		list-style-type: none;

		& > li {
			background-color: hsl(var(--deep-red), 0.4, 0.8);
		}
	}
</style>
