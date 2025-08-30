<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';

	interface NavLinkInterface {
		children: Snippet;
		href: string;
	}

	let { href, children }: NavLinkInterface = $props();

	let selected = () => {
		// stupid fix for '/'
		if (page.url.pathname == href && href == '/') return 'current';
		// the actual good code
		return page.url.pathname == href + '/' ? 'current' : '';
	};
</script>

<li><a {href} class={selected()}>{@render children()}</a></li>
