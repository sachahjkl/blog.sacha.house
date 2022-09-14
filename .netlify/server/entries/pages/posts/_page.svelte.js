import { c as create_ssr_component, d as each, e as escape } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const posts = data.posts;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h2>Liste des posts</h2>
<ul>${posts.length ? each(posts, (post) => {
    return `<li><a href="${"/" + escape(post.slug, true)}">${escape(post.title)}</a>
		</li>`;
  }) : `<li>Pas de posts.</li>`}</ul>`;
});
export {
  Page as default
};
