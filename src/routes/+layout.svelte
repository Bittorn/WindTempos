<script lang="ts">
	import { base } from '$app/paths';
	import favicon from '$lib/assets/favicon.ico';
	import logo from '$lib/assets/logo-horizontal-invert.png';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Wind Tempos 🚧</title>
</svelte:head>

<nav class="navbar funnel-display">
	<div class="logo">
		<a href={base}><img src={logo} alt="Logo" /></a>
	</div>
	<ul>
		<li><a href='{base}'>About</a></li>
		<li><a href='{base}'>TOWS</a></li>
		<li><a href='{base}'>Projects</a></li>
		<li><a href='{base}'>Contact</a></li>
	</ul>
</nav>

{@render children?.()}

<h1 class="zain-extrabold">Under construction</h1>
