import { PUBLIC_HYGRAPH_URL } from '$env/static/public';
import type { PageLoad } from './$types';
import { request } from 'graphql-request';
import { GET_POSTS_LIGHT } from '$lib/queries';
import type { PostLight } from '$lib/interfaces/Post';

export const load: PageLoad = async () => {
	const { posts }: { posts: PostLight[] } = await request(PUBLIC_HYGRAPH_URL, GET_POSTS_LIGHT);

	return { posts: posts || [] };
};
