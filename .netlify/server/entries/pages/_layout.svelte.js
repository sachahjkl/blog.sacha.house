import { c as create_ssr_component, e as escape } from "../../chunks/index.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const latestPost = data.latestPost;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<nav><a href="${"/"}">Home</a>
	<a href="${"/posts"}">Posts</a>
	<a href="${"/about"}">About</a>
	${latestPost ? `<a href="${"/post/" + escape(latestPost.slug, true)}">Latest post</a>` : ``}</nav>

${slots.default ? slots.default({}) : `Ceci est le contenu`}`;
});
export {
  Layout as default
};
