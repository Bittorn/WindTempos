<script lang="ts">
	import shayminIcon from '$lib/assets/shaymin-icon.png';
	import GitHubCard from '$lib/components/GitHubCard.svelte';
	import styles from './shaymin.module.scss';

	const name = 'Shaymin';
	const description = 'Official repo for Shaymin modpack';
	const repo = 'https://github.com/Bittorn/Shaymin';

	const license = '';
</script>

<section class={styles.introdiv}>
	<span class={styles.intro}>
		<img src={shayminIcon} alt="Shaymin logo" class={styles.center} />
		<h1 class="zain-extrabold">Shaymin Cobblemon</h1>
		<h2>A Cobblemon server run in Australia</h2>
	</span>
</section>

<div class={styles.links}>
	<ul class="zain-regular">
		<li><a href="https://docs.windtempos.com/shaymin/rules">Rules/Documentation</a></li>
		<li>
			<a
				href="https://docs.google.com/document/d/1bdppUSFltjYLHuNwIqcoyBi82M0KkOWMBSH0a4qtv68"
				target="_blank">League</a
			>
		</li>
	</ul>
</div>

<section id={styles.hero}>
	<h1 id={styles.version}>2.1</h1>

	<div id={styles.changelog}>
		<h1 class="zain-bold">What's New in 2.1</h1>
		<h2>Additions</h2>
		<ul>
			<li><b>Navas ZA Megas!</b> Adds all Megas from Pokémon Legends ZA</li>
			<li><b>Sophisticated Storage!</b> Storage mod with multiple tiers and upgrades</li>
			<li><b>Custom chat moderation!</b> No more nasty cursewords</li>
			<li><b>Web API!</b> See when gym leaders are taking challengers via the website</li>
		</ul>
		<h2>Updates</h2>
		<ul>
			<li>AllTheMons x Mega Showdown: 3.5 -> <b>3.6.1</b></li>
			<li>CobbleMotion: 1.5 -> <b>1.5.1</b></li>
		</ul>
		<h2>Fixes</h2>
		<ul>
			<li>Added translation keys for FTB Essentials commands</li>
		</ul>
	</div>
</section>

<section id={styles.download}>
	<span class={styles.ipbackground}> <h1 class="zain-extrabold">IP: mon.windtempos.com</h1></span>
	<br /><br /><br />
	<h2 class="zain-bold">Download directly</h2>
	<p>
		<a
			href="https://github.com/Bittorn/Shaymin/releases/download/v2.0.0/Shaymin_Cobblemon-2.0.0-Modrinth.mrpack"
			>Shaymin Cobblemon 2.1 for Modrinth/Prism (Recommended)</a
		>
	</p>
	<p>
		<a
			href="https://github.com/Bittorn/Shaymin/releases/download/v2.0.0/Shaymin_Cobblemon-2.0.0-CurseForge.zip"
			>Shaymin Cobblemon 2.1 for CurseForge</a
		>
	</p>
	<br />
	<p class="zain-regular-italic" style="font-size: 20px;">or</p>
	<h2 class="zain-bold">Download from GitHub!</h2>
	<GitHubCard {name} {description} {license} {repo}></GitHubCard>
</section>
