<script lang="ts">
	import logo from '$lib/assets/logo-horizontal-invert.png';
	import discordIcon from '$lib/assets/discord-icon.svg'
	import githubIcon from '$lib/assets/github-icon.svg'
	import NavLink from './NavLink.svelte';
	import styles from './NavBar.module.scss';

	const discordLink = "https://discord.gg/FHbCJDx4";
	const githubLink = "https://github.com/Bittorn/WindTempos";
</script>

<nav class="{styles.navbar} funnel-display">
	<div class={styles.logo}>
		<a href="/"><img src={logo} alt="Logo" /></a>
	</div>
	<ul>
		<NavLink href="/">Home</NavLink>
		<NavLink href="/about">About</NavLink>
		<NavLink href="/tows">TOWS</NavLink>
		<NavLink href="/projects">Projects</NavLink>
		<NavLink href="/contact">Contact</NavLink>
	</ul>
	<div class={styles.socials}>
		<a href={discordLink} target="_blank"><img src={discordIcon} alt="Discord icon" /></a>
		<a href={githubLink} target="_blank"><img src={githubIcon} alt="GitHub icon" /></a>
	</div>
</nav>
