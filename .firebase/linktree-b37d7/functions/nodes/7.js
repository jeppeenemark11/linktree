import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.iLXc7xaZ.js","_app/immutable/chunks/scheduler.DfGOlq3b.js","_app/immutable/chunks/index.BzQEtMZ_.js","_app/immutable/chunks/stores.i5K_SLPl.js","_app/immutable/chunks/entry.B-iXNfBq.js","_app/immutable/chunks/index.BOhZ0wyi.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/AnimatedRoute.BjsYX6kl.js","_app/immutable/chunks/index.CvmYViMX.js"];
export const stylesheets = [];
export const fonts = [];
