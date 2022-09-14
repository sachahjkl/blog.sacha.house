import { PUBLIC_HYGRAPH_URL } from '$env/static/public';
import type { PageLoad } from './$types';
import { request } from 'graphql-request';
import { GET_LATEST_POST, GET_PAGE_LIGHT } from '$lib/queries';
import type { PostLight } from '$lib/interfaces/Post';
import type { PageLight } from '$lib/interfaces/Page';

export const load: PageLoad = async () => {
	const { posts }: { posts: PostLight[] } = await request(PUBLIC_HYGRAPH_URL, GET_LATEST_POST);

	const { page }: { page: PageLight } = await request(PUBLIC_HYGRAPH_URL, GET_PAGE_LIGHT, {
		slug: 'home'
	});

	return { latestPost: posts[0], homePage: page };
};
