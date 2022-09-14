import { P as PUBLIC_HYGRAPH_URL, G as GET_LATEST_POST, a as GET_PAGE_LIGHT } from "../../chunks/queries.js";
import { request } from "graphql-request";
const load = async () => {
  const { posts } = await request(PUBLIC_HYGRAPH_URL, GET_LATEST_POST);
  const { page } = await request(PUBLIC_HYGRAPH_URL, GET_PAGE_LIGHT, {
    slug: "home"
  });
  return { latestPost: posts[0], homePage: page };
};
export {
  load
};
