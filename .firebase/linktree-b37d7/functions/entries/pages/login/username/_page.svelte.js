import { v as validate_store, s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { A as AuthCheck } from "../../../../chunks/AuthCheck.js";
import { a as user, u as userData } from "../../../../chunks/firebase.js";
import "firebase/firestore";
const re = /^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isValid;
  let isTouched;
  let isTaken;
  let $$unsubscribe_user;
  let $userData, $$unsubscribe_userData;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => value);
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  let username = "";
  let loading = false;
  let isAvailable = false;
  isValid = username?.length > 2 && username?.length < 16 && re.test(username);
  isTouched = username?.length > 0;
  isTaken = isValid && !isAvailable && !loading;
  $$unsubscribe_user();
  $$unsubscribe_userData();
  return `${validate_component(AuthCheck, "AuthCheck").$$render($$result, {}, {}, {
    default: () => {
      return `${$userData ? `${$userData.username ? `<h3>Your username is ${escape($userData.username)}</h3> <p data-svelte-h="svelte-19nzs61">(username cannot be changed)</p>` : ``}` : `<h2 data-svelte-h="svelte-hq7db6">username</h2> <form class="w-2/5"><input type="text" placeholder="Username" class="${[
        "input w-full",
        (!isValid && isTouched ? "input-error" : "") + " " + (isTaken ? "input-warning" : "") + " "
      ].join(" ").trim()}"${add_attribute("value", username, 0)}> <div class="my-4 min-h-16 px-8 w-full">${``} ${!isValid && isTouched ? `<p class="text-error text-sm" data-svelte-h="svelte-1suomdh">must be 3-16 characters long, alphanumeric only</p>` : ``} ${isValid && !isAvailable && !loading ? `<p class="text-error text-sm">${escape(username)} is already taken</p>` : ``} ${``}</div></form>`}`;
    }
  })}`;
});
export {
  Page as default
};
