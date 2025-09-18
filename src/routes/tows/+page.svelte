<script lang="ts">
	import towsIcon from '$lib/assets/tows-icon.gif';
	import GitHubCard from '$lib/components/GitHubCard.svelte';
	import styles from './tows.module.scss';

	const name = 'TOWS';
	const description = 'Tales of Wayward Stars resource repository';
	const repo = 'https://github.com/Bittorn/TOWS'

	const clientName = "TOWS-Client";
	const clientDescription = 'Client mod for Tales of Wayward Stars ';
	const clientRepo = 'https://github.com/Bittorn/TOWS-Client';

	const license = 'Creative Commons Zero v1.0 Universal';
</script>

<h1 class="funnel-display">Tales of Wayward Stars</h1>
<img src={towsIcon} alt="Tales of Wayward Stars logo" class={styles.center} />

<GitHubCard {name} {description} {license} {repo}></GitHubCard>
<GitHubCard name={clientName} description={clientDescription} {license} repo={clientRepo}></GitHubCard>
