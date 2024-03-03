import { v as validate_store, s as subscribe } from "./utils.js";
import { c as create_ssr_component } from "./ssr.js";
import { p as page } from "./stores.js";
const AnimatedRoute = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_page();
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  AnimatedRoute as A
};
