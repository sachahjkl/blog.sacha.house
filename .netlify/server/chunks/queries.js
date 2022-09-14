import { gql } from "graphql-request";
const PUBLIC_HYGRAPH_URL = "https://api-eu-central-1.hygraph.com/v2/cl821svsd251z01t91x0c2q1g/master";
const GET_LATEST_POST = gql`
	{
		posts(orderBy: updatedAt_DESC, first: 1) {
			slug
			title
		}
	}
`;
const GET_POSTS_LIGHT = gql`
	{
		posts {
			slug
			title
		}
	}
`;
const GET_PAGE_LIGHT = gql`
	query getPage($slug: String!) {
		page(where: { slug: $slug }) {
			title
			content {
				html
			}
		}
	}
`;
export {
  GET_LATEST_POST as G,
  PUBLIC_HYGRAPH_URL as P,
  GET_PAGE_LIGHT as a,
  GET_POSTS_LIGHT as b
};
