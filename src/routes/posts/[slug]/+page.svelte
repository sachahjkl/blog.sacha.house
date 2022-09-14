<script lang="ts">
	import type { PostDefault } from '$lib/interfaces/Post';
	import type { PageData } from '../../../../.svelte-kit/types/src/routes/post/[slug]/$types';

	export let data: PageData;
	const post: PostDefault = data.post;
</script>

<h2>{post.title}</h2>
<h3>écrit le <em>{post.date}</em></h3>

{@html post.content.html}
