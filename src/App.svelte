<script>
	import Summary from './Summary.svelte';
	import Card from './Card.svelte';
</script>

<main>
	<h1>COVID-19 Cases Summary</h1>
</main>

<Summary />
<Card />

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #5f80ff;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>