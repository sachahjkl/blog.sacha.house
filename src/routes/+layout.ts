import { PUBLIC_HYGRAPH_URL } from '$env/static/public';
// import type { LayoutLoad } from './$types';
import { request } from 'graphql-request';
import { GET_LATEST_POST } from '$lib/queries';
import type { PostLight } from '$lib/interfaces/Post';

export const load = async () => {
	const { posts }: { posts: PostLight[] } = await request(PUBLIC_HYGRAPH_URL, GET_LATEST_POST);

	return { latestPost: posts[0] };
};
