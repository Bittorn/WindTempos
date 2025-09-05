<script lang="ts">
	import towsLogo from '$lib/assets/tows-icon.png';
	import TowsCard from '$lib/components/TOWSCard.svelte';
	import styles from './tows.module.scss';
</script>

<h1 class="funnel-display">Tales of Wayward Stars</h1>
<TowsCard></TowsCard>
<img src={towsLogo} alt="Tales of Wayward Stars logo" class={styles.center} />
