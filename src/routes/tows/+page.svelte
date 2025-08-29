<script lang="ts">
	import towsLogo from '$lib/assets/tows-icon.png';
	import styles from "./tows.module.scss"
	import { page } from '$app/state';
</script>

<h1 class="funnel-display">Tales of Wayward Stars</h1>
<img src={towsLogo} alt="Tales of Wayward Stars logo" class={styles.center} />
<p>Currently at {page.url.pathname}</p>
