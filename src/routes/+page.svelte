<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const homePage = data.homePage;
	const latestPost = data.latestPost;
</script>

{@html homePage.content.html || ''}

{#if latestPost}
	<p>
		Voici le lien vers mon <em>dernier post</em> :
		<a href="/posts/{latestPost.slug}">{latestPost.title}</a>
	</p>
{/if}
