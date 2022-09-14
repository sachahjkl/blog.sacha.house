import { c as create_ssr_component, e as escape } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const homePage = data.homePage;
  const latestPost = data.latestPost;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<!-- HTML_TAG_START -->${homePage.content.html || ""}<!-- HTML_TAG_END -->

${latestPost ? `<p>Voici le lien vers mon <em>dernier post</em> :
		<a href="${"/" + escape(latestPost.slug, true)}">${escape(latestPost.title)}</a></p>` : ``}`;
});
export {
  Page as default
};
