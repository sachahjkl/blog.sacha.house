import { P as PUBLIC_HYGRAPH_URL, b as GET_POSTS_LIGHT } from "../../../chunks/queries.js";
import { request } from "graphql-request";
const load = async () => {
  const { posts } = await request(PUBLIC_HYGRAPH_URL, GET_POSTS_LIGHT);
  return { posts };
};
export {
  load
};
