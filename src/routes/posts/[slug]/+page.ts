import { PUBLIC_HYGRAPH_URL } from '$env/static/public';
import { request } from 'graphql-request';
import { GET_POST } from '$lib/queries';
import type { PostDefault } from '$lib/interfaces/Post';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { post }: { post: PostDefault[] } = await request(PUBLIC_HYGRAPH_URL, GET_POST, {
		slug: params.slug
	});

	return { post };
};
