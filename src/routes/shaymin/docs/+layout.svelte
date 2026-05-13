<script lang="ts">
	import DocsNavBar from '$lib/components/docs/DocsNavBar.svelte';
import styles from './docs.module.scss';

	let { children } = $props();
</script>

<div class={styles.intro}>
	<h1 class="zain-extrabold">Documentation</h1>
</div>

<div class={styles.links}>
	<ul class="zain-regular">
		<li><a href="/shaymin/rules">Rules</a></li>
		<li><a class={styles.selected} aria-disabled="true">Documentation</a></li>
		<li><a href="https://docs.google.com/document/d/1bdppUSFltjYLHuNwIqcoyBi82M0KkOWMBSH0a4qtv68" target="_blank">League</a></li>
	</ul>
</div>

<div class="{styles.docs} zain-light">
	<DocsNavBar />

	{@render children?.()}
</div>