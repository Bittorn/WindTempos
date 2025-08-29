<script lang="ts">
    import logo from '$lib/assets/logo-horizontal-invert.png';
	import NavLink from './NavLink.svelte';
</script>

<nav class="navbar funnel-display">
	<div class="logo">
		<a href='/'><img src={logo} alt="Logo" /></a>
	</div>
	<ul>
		<NavLink href='/'>Home</NavLink>
		<NavLink href='/about'>About</NavLink>
		<NavLink href='/tows'>TOWS</NavLink>
		<NavLink href='/projects'>Projects</NavLink>
		<NavLink href='/contact'>Contact</NavLink>
	</ul>
</nav>