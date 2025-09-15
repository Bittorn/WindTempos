<script lang="ts">
	import logo from '$lib/assets/logo-horizontal.png';
	import discordIcon from '$lib/assets/discord-icon.svg';
	import githubIcon from '$lib/assets/github-icon.svg';
	import NavLink from './NavLink.svelte';
	import styles from './NavBar.module.scss';

	const discordLink = 'https://discord.gg/FHbCJDx4';
	const githubLink = 'https://github.com/Bittorn/WindTempos';

	var overlay: HTMLDivElement;

	function openMenu() {
		overlay.classList.add(styles.overlay_active);
	}

	function closeMenu() {
		overlay.classList.remove(styles.overlay_active);
	}
</script>

<header>
	<nav class="{styles.navbar} funnel-display">
		<div class={styles.logo}>
			<a href="/"><img src={logo} alt="Logo" /></a>
		</div>
		<ul class={styles.nav__links}>
			<NavLink href="/">Home</NavLink>
			<NavLink href="/about">About</NavLink>
			<NavLink href="/tows">TOWS</NavLink>
			<NavLink href="/projects">Projects</NavLink>
			<NavLink href="/contact">Contact</NavLink>
		</ul>
		<div class="{styles.socials} {styles.nav__links}">
			<a href={discordLink} target="_blank"><img src={discordIcon} alt="Discord icon" /></a>
			<a href={githubLink} target="_blank"><img src={githubIcon} alt="GitHub icon" /></a>
		</div>
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<p class="{styles.menu} {styles.cta}" onclick={openMenu} onkeydown={openMenu}>Menu</p>
	</nav>
</header>
<div class="{styles.overlay}" bind:this={overlay}>
	<!-- svelte-ignore a11y_missing_attribute -->
	<a class={styles.close} onclick={closeMenu} onkeydown={closeMenu} role="button" tabindex="0"
		>&times;</a
	>
	<div class={styles.overlay__content}>
		<NavLink href="/" onclick={closeMenu}>Home</NavLink>
		<NavLink href="/about" onclick={closeMenu}>About</NavLink>
		<NavLink href="/tows" onclick={closeMenu}>TOWS</NavLink>
		<NavLink href="/projects" onclick={closeMenu}>Projects</NavLink>
		<NavLink href="/contact" onclick={closeMenu}>Contact</NavLink>
	</div>
</div>
