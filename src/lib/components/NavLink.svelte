<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';

	interface NavLinkInterface {
		children: Snippet;
		href: string;
		[key: string]: unknown;
	}

	let { href, children, ...rest }: NavLinkInterface = $props();

	let selected = () => {
		// stupid fix for '/'
		if (page.url.pathname == href && href == '/') return 'current';
		else if (href == '/') return '';

		// the actual semi-decent code
		if (page.url.pathname.includes(href)) {
			return 'current';
		} else {
			return '';
		}
	};
</script>

<li><a {href} class={selected()} {...rest}>{@render children()}</a></li>
