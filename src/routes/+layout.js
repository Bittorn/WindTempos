// If you're using a fallback (i.e. SPA mode) you don't need to prerender all
// pages by setting this here, but should prerender as many as possible to
// avoid large performance and SEO impacts
export const prerender = true;

// You must ensure SvelteKit’s trailingSlash option is set appropriately for
// your environment. If your host does not render /a.html upon receiving a
// request for /a then you will need to set trailingSlash: 'always' in
// your root layout to create /a/index.html instead.
export const trailingSlash = 'always';
