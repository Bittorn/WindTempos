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
	<h1 class="zain-extrabold">Shaymin</h1>
	<h2>A Cobblemon server run in Australia</h2>
</div>

<div class={styles.links}>
	<ul class="zain-regular">
		<li><a href="./rules">Rules</a></li>
		<li><a href="https://docs.google.com/document/d/1bdppUSFltjYLHuNwIqcoyBi82M0KkOWMBSH0a4qtv68" target="_blank">League</a></li>
	</ul>
</div>

<div class="{styles.changelog} zain">
	<h1 class="zain-bold">What's Changed Since Beta?</h1>
	<h2 class="zain-bold">Notable Updates</h2>
	<p>Updated Cobblemon to 1.7</p>
	<p>Updated AllTheMons to R3.1</p>
	<p>Updated CobbleMotion to v1.4</p>

	<h2 class="zain-bold">Added</h2>
	<p>Added Construction Sticks</p>
	<p>Added Cosmetic Armor Reworked</p>
	<p>Added Pokémon Field Lab</p>
	<p>Added Cobblemon: Parting Gifts</p>
	<p>Added Cobblemon Smartphone</p>
	<p>Added PlayerXP</p>
	<p>Added AllTheLeaks</p>

	<h2 class="zain-bold">Removed & Replaced</h2>
	<p>Removed Plasmo Voice due to connectivity issues</p>
	<p>Removed Distant Horizons, but players can install it themselves</p>
	<p>Removed Brewin' And Chewin' due to instability</p>
	<p>Removed Elytra Trims due to missing textures</p>
	<p>Removed Pipez due to thematic conflicts</p>
	<p>Removed ProjectRed due to instability</p>
	<p>Removed Cobblemon: Ride On! due to features being added into base Cobblemon</p>
	<p>Replaced Stoneworks with Rechiseled + Chipped, with interoperability addon</p>
	<p>Replaced Furnace Mk.2 with Iron Furnaces</p>
	<p>Replaced EMI with JEI</p>
	<p>Replaced Pylons with Botany Pots + Cobblemon integration</p>
</div>

<div class={styles.download}>
	<h1 class="zain-extrabold">IP: mon.windtempos.com</h1>
	<h2 class="zain-bold">Download directly</h2>
	<p><a href="https://github.com/Bittorn/Shaymin/releases/download/v1.0.0/Shaymin-1.0.0_PrismLauncher.zip">Shaymin 1.0.0 for PrismLauncher (Recommended)</a></p>
	<p><a href="https://github.com/Bittorn/Shaymin/releases/download/v1.0.0/Shaymin-1.0.0_Modrinth.zip">Shaymin 1.0.0 for Modrinth</a></p>
	<p><a href="https://github.com/Bittorn/Shaymin/releases/download/v1.0.0/Shaymin-1.0.0_CurseForge.zip">Shaymin 1.0.0 for Curseforge</a></p>
	<br>
	<p class="zain-regular-italic" style="font-size: 20px;">or</p>
	<h2 class="zain-bold">Download from GitHub!</h2>
	<GitHubCard {name} {description} {license} {repo}></GitHubCard>
</div>
