import { v as validate_store, s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, a as add_attribute, b as each, v as validate_component } from "../../../chunks/ssr.js";
import { U as UserLink } from "../../../chunks/UserLink.js";
import { u as userData } from "../../../chunks/firebase.js";
const css = {
  code: ".profile-image.s-gkDBevr0hI8w{width:256px;height:256px;border-radius:50%;-o-object-fit:cover;object-fit:cover}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userData, $$unsubscribe_userData;
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_userData();
  return `${$$result.head += `<!-- HEAD_svelte-1ui6vuc_START -->${$$result.title = `<title>@${escape(data.username)} Links</title>`, ""}<meta name="description"${add_attribute("content", data.bio, 0)}><!-- HEAD_svelte-1ui6vuc_END -->`, ""} <main class="prose text-center mx-auto mt-8 mb-10"><h1 class="text-7xl text-purple-500 mb-4">@${escape(data.username)}</h1> <img${add_attribute("src", data.photoURL ?? "https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png", 0)} alt="photoURL" class="mx-auto profile-image space-x-60 s-gkDBevr0hI8w"> <p class="text-xl my-8">${escape(data.bio ?? "no bio yet...")}</p> <ul class="list-none">${each(data.links, (item) => {
    return `<li><div style="padding: 10px;">${validate_component(UserLink, "UserLink").$$render($$result, Object.assign({}, item), {}, {})}</div> </li>`;
  })}</ul> <a href="${"/" + escape($userData?.username, true) + "/edit"}" class="underline text-purple-600">Edit page</a> </main>`;
});
export {
  Page as default
};
