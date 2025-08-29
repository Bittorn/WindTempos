<script lang="ts">
	import type { Snippet } from 'svelte';

	interface NavLinkInterface {
		children: Snippet;
		href: string;
	}

	let { href, children }: NavLinkInterface = $props();
</script>

<li><a {href}>{@render children()}</a></li>
