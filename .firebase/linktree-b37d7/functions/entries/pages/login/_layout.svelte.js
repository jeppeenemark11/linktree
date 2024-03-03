import { v as validate_store, s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/ssr.js";
/* empty css                  */
import { p as page } from "../../../chunks/stores.js";
import { A as AnimatedRoute } from "../../../chunks/AnimatedRoute.js";
import { u as userData } from "../../../chunks/firebase.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $userData, $$unsubscribe_userData;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  $$unsubscribe_page();
  $$unsubscribe_userData();
  return `<nav class="flex justify-center my-6"><ul class="steps"><a href="/login" class="step step-primary" data-svelte-h="svelte-193hlgp">Register</a> <a href="/login/username" class="${[
    "step",
    $page.route.id?.match(/username|photo/g) ? "step-primary" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-241js">plan</a> <a href="/login/photo" class="${[
    "step",
    $page.route.id?.includes("photo") || $page.route.id?.includes("bio") || $page.route.id?.includes("edit") ? "step-primary" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-kxdrfy">Photo</a> <a href="${"/" + escape($userData?.username, true) + "/bio"}" class="${[
    "step",
    $page.route.id?.includes("bio") || $page.route.id?.includes("edit") ? "step-primary" : ""
  ].join(" ").trim()}">Bio</a> <a href="${"/" + escape($userData?.username, true) + "/edit"}" class="${["step", $page.route.id?.includes("edit") ? "step-primary" : ""].join(" ").trim()}">Links</a></ul></nav> ${validate_component(AnimatedRoute, "AnimatedRoute").$$render($$result, {}, {}, {
    default: () => {
      return `<main class="card w-4/6 bg-neutral text-neutral-content mx-auto"><div class="card-body items-center text-center">${slots.default ? slots.default({}) : ``}</div></main>`;
    }
  })}`;
});
export {
  Layout as default
};
