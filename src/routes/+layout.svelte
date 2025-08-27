<script lang="ts">
	import favicon from '$lib/assets/favicon.ico';
	import logo from '$lib/assets/logo-horizontal-invert.png';
	import { resolve } from '$app/paths';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Wind Tempos 🚧</title>
</svelte:head>

<nav class="navbar funnel-display">
	<div class="logo">
		<a href={resolve('/')}><img src={logo} alt="Logo" /></a>
	</div>
	<ul>
		<li><a href={resolve('/')}>About</a></li>
		<li><a href={resolve('/')}>TOWS</a></li>
		<li><a href={resolve('/')}>Projects</a></li>
		<li><a href={resolve('/')}>Contact</a></li>
	</ul>
</nav>

{@render children?.()}

<h1 class="zain-extrabold">Under construction</h1>
