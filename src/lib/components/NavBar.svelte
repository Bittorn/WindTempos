<script lang="ts">
    import logo from '$lib/assets/logo-horizontal-invert.png';
	import NavLink from './NavLink.svelte';
    import styles from './NavBar.module.scss';
</script>

<nav class="{styles.navbar} funnel-display">
	<div class={styles.logo}>
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