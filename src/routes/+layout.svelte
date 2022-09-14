<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	const latestPost = data.latestPost;
</script>

<header>
	<nav>
		<a href="/">Home</a>
		<a href="/posts">Posts</a>
		<a href="/about">About</a>
		{#if latestPost}
			<a href="/posts/{latestPost.slug}">Latest post</a>
		{/if}
	</nav>
</header>

<slot>Ceci est le contenu</slot>
