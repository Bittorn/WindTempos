<script lang="ts">
	import shayminIcon from '$lib/assets/shaymin-icon.png';
	import GitHubCard from '$lib/components/GitHubCard.svelte';
	import styles from './shaymin.module.scss';

	const name = 'Shaymin';
	const description = 'Official repo for Shaymin modpack';
	const repo = 'https://github.com/Bittorn/Shaymin'

	const license = '';
</script>

<div class={styles.intro}>
	<img src={shayminIcon} alt="Shaymin logo" class={styles.center} />
	<h1 class="zain-extrabold">Shaymin Cobblemon</h1>
	<h2>A Cobblemon server run in Australia</h2>
</div>

<div class={styles.links}>
	<ul class="zain-regular">
		<li><a href="https://docs.windtempos.com/shaymin/rules">Rules/Documentation</a></li>
		<li><a href="https://docs.google.com/document/d/1bdppUSFltjYLHuNwIqcoyBi82M0KkOWMBSH0a4qtv68" target="_blank">League</a></li>
	</ul>
</div>

<div class="{styles.changelog} zain">
	<h1 class="zain-bold">2.0 update</h1>
	<p>
		Shaymin Cobblemon has been rewritten from the ground up to ensure better performance, more stability, and better balance for all players!
	</p>
</div>

<div class={styles.download}>
	<h1 class="zain-extrabold">IP: mon.windtempos.com</h1>
	<h2 class="zain-bold">Download directly</h2>
	<p><a href="https://github.com/Bittorn/Shaymin/releases/download/v2.0.0/Shaymin_Cobblemon-2.0.0-Modrinth.mrpack">Shaymin Cobblemon 2.0.0 for Modrinth</a></p>
	<p><a href="https://github.com/Bittorn/Shaymin/releases/download/v2.0.0/Shaymin_Cobblemon-2.0.0-CurseForge.zip">Shaymin Cobblemon 2.0.0 for Curseforge</a></p>
	<br>
	<p class="zain-regular-italic" style="font-size: 20px;">or</p>
	<h2 class="zain-bold">Download from GitHub!</h2>
	<GitHubCard {name} {description} {license} {repo}></GitHubCard>
</div>
