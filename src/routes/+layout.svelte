<script lang="ts">
	import favicon from '$lib/assets/favicon.ico';
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.scss';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Wind Tempos 🚧</title>
</svelte:head>

<NavBar />

{@render children?.()}

<footer>
	<a href="https://github.com/Bittorn/">Made by a certified brainlet</a>
</footer>
