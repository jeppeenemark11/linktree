

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CMM7Rbt9.js","_app/immutable/chunks/scheduler.DfGOlq3b.js","_app/immutable/chunks/index.BzQEtMZ_.js"];
export const stylesheets = ["_app/immutable/assets/app.B7NmvIIa.css"];
export const fonts = [];
