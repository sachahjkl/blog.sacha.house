<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const posts = data.posts;
</script>

<h2>Liste des posts</h2>
<ul>
	{#each posts as post}
		<li>
			<a href="/posts/{post.slug}">{post.title}</a>
		</li>
	{:else}
		<li>Pas de posts.</li>
	{/each}
</ul>
