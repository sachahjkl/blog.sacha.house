import { gql } from 'graphql-request';
export const GET_LATEST_POST = gql`
	{
		posts(orderBy: updatedAt_DESC, first: 1) {
			slug
			title
		}
	}
`;

export const GET_POST = gql`
	query getPost($slug: String!) {
		post(where: { slug: $slug }) {
			title
			date
			slug
			content {
				html
			}
		}
	}
`;

export const GET_POSTS_LIGHT = gql`
	{
		posts {
			slug
			title
		}
	}
`;

export const GET_PAGE_LIGHT = gql`
	query getPage($slug: String!) {
		page(where: { slug: $slug }) {
			title
			content {
				html
			}
		}
	}
`;
