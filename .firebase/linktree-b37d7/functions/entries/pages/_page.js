import { r as redirect } from "../../chunks/index.js";
const load = async () => {
  return redirect(302, "/login");
};
export {
  load
};
