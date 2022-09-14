import { P as PUBLIC_HYGRAPH_URL, G as GET_LATEST_POST } from "../../chunks/queries.js";
import { request } from "graphql-request";
const load = async () => {
  const { posts } = await request(PUBLIC_HYGRAPH_URL, GET_LATEST_POST);
  return { latestPost: posts[0] };
};
export {
  load
};
