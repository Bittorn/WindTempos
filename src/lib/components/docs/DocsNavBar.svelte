<script lang="ts">
	import NavLink from '../NavLink.svelte';
	import styles from './DocsNavBar.module.scss';
</script>

<div>
	<nav class={styles.navbar}>
		<h2>Contents</h2>
		<ul class={styles.items}>
			<NavLink href="/shaymin/docs/license">License</NavLink>
            <NavLink href="/shaymin/docs/custom-mods">Custom mods</NavLink>
		</ul>
	</nav>
</div>
