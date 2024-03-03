import { v as validate_store, s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, a as add_attribute } from "../../../../chunks/ssr.js";
import { A as AuthCheck } from "../../../../chunks/AuthCheck.js";
import { a as user, u as userData } from "../../../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/storage";
const css = {
  code: ".profile-image.s-hZfY0tLdIh2a{width:256px;height:256px;border-radius:50%;-o-object-fit:cover;object-fit:cover}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $userData, $$unsubscribe_userData;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => value);
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  $$result.css.add(css);
  $$unsubscribe_user();
  $$unsubscribe_userData();
  return `${validate_component(AuthCheck, "AuthCheck").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 class="card-title" data-svelte-h="svelte-sqqhy9">Upload a Profile Picture</h2> <form class="max-w-screen-md w-full"><div class="form control w-full max-w-xs my-10 mx-auto text-center"><img${add_attribute("src", $userData?.photoURL ?? "https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png", 0)} alt="photoURL" width="256" height="256" class="profile-image mx-auto s-hZfY0tLdIh2a"> <label for="photoURL" class="label"><span class="label-text" data-svelte-h="svelte-n8v7pv">Pick a File</span></label> <input name="photoURL" type="file" class="file-input file-input-bordered w-full max-w-xs" accept="image/png, image/jpeg, image/gif, image/webp"> ${``}</div></form>`;
    }
  })}`;
});
export {
  Page as default
};
