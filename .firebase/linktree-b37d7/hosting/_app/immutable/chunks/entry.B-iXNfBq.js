import{N as ge}from"./scheduler.DfGOlq3b.js";import{w as ve}from"./index.BOhZ0wyi.js";import{H as te,S as be,R as Me}from"./control.CYgJF_JY.js";new URL("sveltekit-internal://");function wt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function mt(e){return e.split("%25").map(decodeURI).join("%25")}function yt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function fe({href:e}){return e.split("#")[0]}const vt=["href","pathname","search","toString","toJSON"];function bt(e,n,t){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(r,o){if(o==="get"||o==="getAll"||o==="has")return s=>(t(s),r[o](s));n();const i=Reflect.get(r,o);return typeof i=="function"?i.bind(r):i}}),enumerable:!0,configurable:!0});for(const r of vt)Object.defineProperty(a,r,{get(){return n(),e[r]},enumerable:!0,configurable:!0});return kt(a),a}function kt(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Et="/__data.json",St=".html__data.json";function At(e){return e.endsWith(".html")?e.replace(/\.html$/,St):e.replace(/\/$/,"")+Et}function Rt(...e){let n=5381;for(const t of e)if(typeof t=="string"){let a=t.length;for(;a;)n=n*33^t.charCodeAt(--a)}else if(ArrayBuffer.isView(t)){const a=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let r=a.length;for(;r;)n=n*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function It(e){const n=atob(e),t=new Uint8Array(n.length);for(let a=0;a<n.length;a++)t[a]=n.charCodeAt(a);return t.buffer}let ke=0;const Ke=window.fetch;function $t(){ke+=1}function Pt(){ke-=1}{let e=!1;(async()=>{e=new Error().stack.includes("check_stack_trace")})(),window.fetch=(t,a)=>{const r=t instanceof Request?t.url:t.toString(),o=new Error().stack.split(`
`),i=o.findIndex(h=>h.includes("load@")||h.includes("at load")),s=o.slice(0,i+2).join(`
`),c=e?s.includes("src/runtime/client/client.js"):ke,f=a==null?void 0:a.__sveltekit_fetch__;return c&&!f&&console.warn(`Loading ${r} using \`window.fetch\`. For best results, use the \`fetch\` that is passed to your \`load\` function: https://kit.svelte.dev/docs/load#making-fetch-requests`),(t instanceof Request?t.method:(a==null?void 0:a.method)||"GET")!=="GET"&&V.delete(Ee(t)),Ke(t,a)}}const V=new Map;function xt(e,n){const t=Ee(e,n),a=document.querySelector(t);if(a!=null&&a.textContent){let{body:r,...o}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&V.set(t,{body:r,init:o,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=It(r)),Promise.resolve(new Response(r,o))}return Be(e,n)}function Lt(e,n,t){if(V.size>0){const a=Ee(e,t),r=V.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(r.body,r.init);V.delete(a)}}return Be(n,t)}function Be(e,n){const t={...n};return Object.defineProperty(t,"__sveltekit_fetch__",{value:!0,writable:!0,configurable:!0}),window.fetch(e,t)}function Ee(e,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const r=[];n.headers&&r.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&r.push(n.body),a+=`[data-hash="${Rt(...r)}"]`}return a}const Tt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${jt(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return n.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return ue(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ue(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=Tt.exec(c),[,h,g,u,_]=d;return n.push({name:u,matcher:_,optional:!!h,rest:!!g,chained:g?f===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return ue(c)}).join("")}).join("")}/?$`),params:n}}function Ut(e){return!/^\([^)]+\)$/.test(e)}function jt(e){return e.slice(1).split("/").filter(Ut)}function Nt(e,n,t){const a={},r=e.slice(1),o=r.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let f=r[s-i];if(c.chained&&c.rest&&i&&(f=r.slice(s-i,s+1).filter(d=>d).join("/"),i=0),f===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||t[c.matcher](f)){a[c.name]=f;const d=n[s+1],h=r[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(a).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function ue(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ct({nodes:e,server_loads:n,dictionary:t,matchers:a}){const r=new Set(n);return Object.entries(t).map(([s,[c,f,d]])=>{const{pattern:h,params:g}=Ot(s),u={id:s,exec:_=>{const l=h.exec(_);if(l)return Nt(l,g,a)},errors:[1,...d||[]].map(_=>e[_]),layouts:[0,...f||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[r.has(s),e[s]]}}function Je(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Oe(e,n,t=JSON.stringify){const a=t(n);try{sessionStorage[e]=a}catch{}}var He;const I=((He=globalThis.__sveltekit_ivbqvl)==null?void 0:He.base)??"";var Ge;(Ge=globalThis.__sveltekit_ivbqvl)==null||Ge.assets;const We="sveltekit:snapshot",Ye="sveltekit:scroll",ze="sveltekit:states",Dt="sveltekit:pageurl",N="sveltekit:history",H="sveltekit:navigation",Y={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},J=location.origin;function Xe(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function Se(){return{x:pageXOffset,y:pageYOffset}}const Ue=new WeakSet,je={"preload-code":["","off","false","tap","hover","viewport","eager"],"preload-data":["","off","false","tap","hover"],keepfocus:["","true","off","false"],noscroll:["","true","off","false"],reload:["","true","off","false"],replacestate:["","true","off","false"]};function U(e,n){const t=e.getAttribute(`data-sveltekit-${n}`);return qt(e,n,t),t}function qt(e,n,t){t!==null&&!Ue.has(e)&&!je[n].includes(t)&&(console.error(`Unexpected value for ${n} — should be one of ${je[n].map(a=>JSON.stringify(a)).join(", ")}`,e),Ue.add(e))}const Ne={...Y,"":Y.hover};function Ze(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Qe(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ze(e)}}function _e(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,r=!t||!!a||ne(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===J&&e.hasAttribute("download");return{url:t,external:r,target:a,download:o}}function z(e){let n=null,t=null,a=null,r=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)a===null&&(a=U(s,"preload-code")),r===null&&(r=U(s,"preload-data")),n===null&&(n=U(s,"keepfocus")),t===null&&(t=U(s,"noscroll")),o===null&&(o=U(s,"reload")),i===null&&(i=U(s,"replacestate")),s=Ze(s);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ne[a??"off"],preload_data:Ne[r??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function Ce(e){const n=ve(e);let t=!0;function a(){t=!0,n.update(i=>i)}function r(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:a,set:r,subscribe:o}}function Ft(){const{set:e,subscribe:n}=ve(!1);return{subscribe:n,check:async()=>!1}}function ne(e,n){return e.origin!==J||!e.pathname.startsWith(n)}const Vt=-1,Ht=-2,Gt=-3,Mt=-4,Kt=-5,Bt=-6;function gn(e,n){return et(JSON.parse(e),n)}function et(e,n){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,a=Array(t.length);function r(o,i=!1){if(o===Vt)return;if(o===Gt)return NaN;if(o===Mt)return 1/0;if(o===Kt)return-1/0;if(o===Bt)return-0;if(i)throw new Error("Invalid input");if(o in a)return a[o];const s=t[o];if(!s||typeof s!="object")a[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],f=n==null?void 0:n[c];if(f)return a[o]=f(r(s[1]));switch(c){case"Date":a[o]=new Date(s[1]);break;case"Set":const d=new Set;a[o]=d;for(let u=1;u<s.length;u+=1)d.add(r(s[u]));break;case"Map":const h=new Map;a[o]=h;for(let u=1;u<s.length;u+=2)h.set(r(s[u]),r(s[u+1]));break;case"RegExp":a[o]=new RegExp(s[1],s[2]);break;case"Object":a[o]=Object(s[1]);break;case"BigInt":a[o]=BigInt(s[1]);break;case"null":const g=Object.create(null);a[o]=g;for(let u=1;u<s.length;u+=2)g[s[u]]=r(s[u+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);a[o]=c;for(let f=0;f<s.length;f+=1){const d=s[f];d!==Ht&&(c[f]=r(d))}}else{const c={};a[o]=c;for(const f in s){const d=s[f];c[f]=r(d)}}return a[o]}return r(0)}function Jt(e){function n(t,a){if(t)for(const r in t){if(r[0]==="_"||e.has(r))continue;const o=[...e.values()],i=Wt(r,a==null?void 0:a.slice(a.lastIndexOf(".")))??`valid exports are ${o.join(", ")}, or anything with a '_' prefix`;throw new Error(`Invalid export '${r}'${a?` in ${a}`:""} (${i})`)}}return n}function Wt(e,n=".js"){const t=[];if(Ae.has(e)&&t.push(`+layout${n}`),tt.has(e)&&t.push(`+page${n}`),nt.has(e)&&t.push(`+layout.server${n}`),Yt.has(e)&&t.push(`+page.server${n}`),zt.has(e)&&t.push(`+server${n}`),t.length>0)return`'${e}' is a valid export in ${t.slice(0,-1).join(", ")}${t.length>1?" or ":""}${t.at(-1)}`}const Ae=new Set(["load","prerender","csr","ssr","trailingSlash","config"]),tt=new Set([...Ae,"entries"]),nt=new Set([...Ae]),Yt=new Set([...nt,"actions","entries"]),zt=new Set(["GET","POST","PATCH","PUT","DELETE","OPTIONS","HEAD","fallback","prerender","trailingSlash","config","entries"]),Xt=Jt(tt);function Zt(e){return e.filter(n=>n!=null)}function Qt(e,n){const t=/^(moz-icon|view-source|jar):/.exec(n);t&&console.warn(`${e}: Calling \`depends('${n}')\` will throw an error in Firefox because \`${t[1]}\` is a special URI scheme`)}const de="x-sveltekit-invalidated",en="x-sveltekit-trailing-slash";function X(e){return e instanceof te||e instanceof be?e.status:500}function tn(e){return e instanceof be?e.text:"Internal Error"}const O=Je(Ye)??{},G=Je(We)??{};{let e=!1;const n=import.meta.url.split("?")[0],t=()=>{var i,s;if(e)return;let o=(i=new Error().stack)==null?void 0:i.split(`
`);o&&(!o[0].includes("https:")&&!o[0].includes("http:")&&(o=o.slice(1)),o=o.slice(2),!((s=o[0])!=null&&s.includes(n))&&(e=!0,console.warn("Avoid using `history.pushState(...)` and `history.replaceState(...)` as these will conflict with SvelteKit's router. Use the `pushState` and `replaceState` imports from `$app/navigation` instead.")))},a=history.pushState;history.pushState=(...o)=>(t(),a.apply(history,o));const r=history.replaceState;history.replaceState=(...o)=>(t(),r.apply(history,o))}const x={url:Ce({}),page:Ce({}),navigating:ve(null),updated:Ft()};function Re(e){O[e]=Se()}function nn(e,n){let t=e+1;for(;O[t];)delete O[t],t+=1;for(t=n+1;G[t];)delete G[t],t+=1}function C(e){return location.href=e.href,new Promise(()=>{})}function De(){}let ae,we,Z,$,me,q;const at=[],Q=[];let P=null;const rt=[],an=[];let j=[],m={branch:[],error:null,url:null},Ie=!1,ee=!1,qe=!0,M=!1,F=!1,ot=!1,re=!1,T,E,R,A,D,he;async function _n(e,n,t){var r,o;n===document.body&&console.warn(`Placing %sveltekit.body% directly inside <body> is not recommended, as your app may break for users who have certain browser extensions installed.

Consider wrapping it in an element:

<div style="display: contents">
  %sveltekit.body%
</div>`),document.URL!==location.href&&(location.href=location.href),q=e,ae=Ct(e),$=document.documentElement,me=n,we=e.nodes[0],Z=e.nodes[1],we(),Z(),E=(r=history.state)==null?void 0:r[N],R=(o=history.state)==null?void 0:o[H],E||(E=R=Date.now(),history.replaceState({...history.state,[N]:E,[H]:R},""));const a=O[E];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),t?await un(me,t):ln(location.href,{replaceState:!0}),fn()}async function rn(){if(await(he||(he=Promise.resolve())),!he)return;he=null;const e=ie(m.url,!0);P=null;const n=D={},t=e&&await xe(e);if(!(!t||n!==D)){if(t.type==="redirect")return oe(new URL(t.location,m.url).href,{},1,n);t.props.page&&(A=t.props.page),m=t.state,st(),T.$set(t.props)}}function st(){at.length=0,re=!1}function it(e){Q.some(n=>n==null?void 0:n.snapshot)&&(G[e]=Q.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function ct(e){var n;(n=G[e])==null||n.forEach((t,a)=>{var r,o;(o=(r=Q[a])==null?void 0:r.snapshot)==null||o.restore(t)})}function Fe(){Re(E),Oe(Ye,O),it(R),Oe(We,G)}async function oe(e,n,t,a){return W({type:"goto",url:Xe(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:a,accept:()=>{n.invalidateAll&&(re=!0)}})}async function on(e){return P={id:e.id,promise:xe(e).then(n=>(n.type==="loaded"&&n.state.error&&(P=null),n))},P.promise}async function pe(e){const n=ae.find(t=>t.exec(ut(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function lt(e,n){var r;if(e.state.error&&document.querySelector("vite-error-overlay"))return;m=e.state;const t=document.querySelector("style[data-sveltekit]");t&&t.remove(),A=e.props.page,T=new q.root({target:n,props:{...e.props,stores:x,components:Q},hydrate:!0}),ct(R);const a={from:null,to:{params:m.params,route:{id:((r=m.route)==null?void 0:r.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};j.forEach(o=>o(a)),ee=!0}async function K({url:e,params:n,branch:t,status:a,error:r,route:o,form:i}){let s="never";if(I&&(e.pathname===I||e.pathname===I+"/"))s="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);e.pathname=wt(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:r,route:o},props:{constructors:Zt(t).map(u=>u.node.component),page:A}};i!==void 0&&(c.props.form=i);let f={},d=!A,h=0;for(let u=0;u<Math.max(t.length,m.branch.length);u+=1){const _=t[u],l=m.branch[u];(_==null?void 0:_.data)!==(l==null?void 0:l.data)&&(d=!0),_&&(f={...f,..._.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!m.url||e.href!==m.url.href||m.error!==r||i!==void 0&&i!==A.form||d)&&(c.props.page={error:r,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:a,url:new URL(e),form:i??null,data:d?f:A.data}),c}async function $e({loader:e,parent:n,url:t,params:a,route:r,server_data_node:o}){var d,h,g;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if(Xt(f.universal),(d=f.universal)!=null&&d.load){let u=function(...l){for(const w of l){Qt(r.id,w);const{href:v}=new URL(w,t);c.dependencies.add(v)}};const _={route:new Proxy(r,{get:(l,w)=>(s&&(c.route=!0),l[w])}),params:new Proxy(a,{get:(l,w)=>(s&&c.params.add(w),l[w])}),data:(o==null?void 0:o.data)??null,url:bt(t,()=>{s&&(c.url=!0)},l=>{s&&c.search_params.add(l)}),async fetch(l,w){let v;l instanceof Request?(v=l.url,w={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:l.headers,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...w}):v=l;const S=new URL(v,t);return s&&u(S.href),S.origin===t.origin&&(v=S.href.slice(t.origin.length)),ee?Lt(v,S.href,w):xt(v,w)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(l){s=!1;try{return l()}finally{s=!0}}};try{if($t(),i=await f.universal.load.call(null,_)??null,i!=null&&Object.getPrototypeOf(i)!==Object.prototype)throw new Error(`a load function related to route '${r.id}' returned ${typeof i!="object"?`a ${typeof i}`:i instanceof Response?"a Response object":Array.isArray(i)?"an array":"a non-plain object"}, but must return a plain object at the top level (i.e. \`return {...}\`)`)}finally{Pt()}}return{node:f,loader:e,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((g=f.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Ve(e,n,t,a,r,o){if(re)return!0;if(!r)return!1;if(r.parent&&e||r.route&&n||r.url&&t)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(o[i]!==m.params[i])return!0;for(const i of r.dependencies)if(at.some(s=>s(new URL(i))))return!0;return!1}function Pe(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function sn(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const a of t){const r=e.searchParams.getAll(a),o=n.searchParams.getAll(a);r.every(i=>o.includes(i))&&o.every(i=>r.includes(i))&&t.delete(a)}return t}async function xe({id:e,invalidating:n,url:t,params:a,route:r}){if((P==null?void 0:P.id)===e)return P.promise;const{errors:o,layouts:i,leaf:s}=r,c=[...i,s];o.forEach(p=>p==null?void 0:p().catch(()=>{})),c.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let f=null;const d=m.url?e!==m.url.pathname+m.url.search:!1,h=m.route?r.id!==m.route.id:!1,g=sn(m.url,t);let u=!1;const _=c.map((p,y)=>{var L;const b=m.branch[y],k=!!(p!=null&&p[0])&&((b==null?void 0:b.loader)!==p[1]||Ve(u,h,d,g,(L=b.server)==null?void 0:L.uses,a));return k&&(u=!0),k});if(_.some(Boolean)){try{f=await pt(t,_)}catch(p){return se({status:X(p),error:await B(p,{url:t,params:a,route:{id:r.id}}),url:t,route:r})}if(f.type==="redirect")return f}const l=f==null?void 0:f.nodes;let w=!1;const v=c.map(async(p,y)=>{var ce;if(!p)return;const b=m.branch[y],k=l==null?void 0:l[y];if((!k||k.type==="skip")&&p[1]===(b==null?void 0:b.loader)&&!Ve(w,h,d,g,(ce=b.universal)==null?void 0:ce.uses,a))return b;if(w=!0,(k==null?void 0:k.type)==="error")throw k;return $e({loader:p[1],url:t,params:a,route:r,parent:async()=>{var Te;const Le={};for(let le=0;le<y;le+=1)Object.assign(Le,(Te=await v[le])==null?void 0:Te.data);return Le},server_data_node:Pe(k===void 0&&p[0]?{type:"skip"}:k??null,p[0]?b==null?void 0:b.server:void 0)})});for(const p of v)p.catch(()=>{});const S=[];for(let p=0;p<c.length;p+=1)if(c[p])try{S.push(await v[p])}catch(y){if(y instanceof Me)return{type:"redirect",location:y.location};let b=X(y),k;if(l!=null&&l.includes(y))b=y.status??b,k=y.error;else if(y instanceof te)k=y.body;else{if(await x.updated.check())return await C(t);k=await B(y,{params:a,url:t,route:{id:r.id}})}const L=await ft(p,S,o);return L?await K({url:t,params:a,branch:S.slice(0,L.idx).concat(L.node),status:b,error:k,route:r}):await ht(t,{id:r.id},k,b)}else S.push(void 0);return await K({url:t,params:a,branch:S,status:200,error:null,route:r,form:n?void 0:null})}async function ft(e,n,t){for(;e--;)if(t[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function se({status:e,error:n,url:t,route:a}){const r={};let o=null;if(q.server_loads[0]===0)try{const f=await pt(t,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(t.origin!==J||t.pathname!==location.pathname||Ie)&&await C(t)}const s=await $e({loader:we,url:t,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Pe(o)}),c={node:await Z(),loader:Z,universal:null,server:null,data:null};return await K({url:t,params:r,branch:[s,c],status:e,error:n,route:null})}function ie(e,n){if(!e||ne(e,I))return;let t;try{t=q.hooks.reroute({url:new URL(e)})??e.pathname}catch(r){{console.error(r);debugger}return}const a=ut(t);for(const r of ae){const o=r.exec(a);if(o)return{id:e.pathname+e.search,invalidating:n,route:r,params:yt(o),url:e}}}function ut(e){return mt(e.slice(I.length)||"/")}function dt({url:e,type:n,intent:t,delta:a}){let r=!1;const o=_t(m,t,e,n);a!==void 0&&(o.navigation.delta=a);const i={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return M||rt.forEach(s=>s(i)),r?null:o}async function W({type:e,url:n,popped:t,keepfocus:a,noscroll:r,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:f=De,block:d=De}){const h=ie(n,!1),g=dt({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!g){d();return}const u=E,_=R;f(),M=!0,ee&&x.navigating.set(g.navigation),D=c;let l=h&&await xe(h);if(!l){if(ne(n,I))return await C(n);l=await ht(n,{id:null},await B(new be(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,D!==c)return g.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(s>=20)l=await se({status:500,error:await B(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return oe(new URL(l.location,n).href,{},s+1,c),!1;else l.props.page.status>=400&&await x.updated.check()&&await C(n);if(st(),Re(u),it(_),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),i=t?t.state:i,!t){const p=o?0:1,y={[N]:E+=p,[H]:R+=p,[ze]:i};(o?history.replaceState:history.pushState).call(history,y,"",n),o||nn(E,R)}if(P=null,l.props.page.state=i,ee){m=l.state,l.props.page&&(l.props.page.url=n);const p=(await Promise.all(an.map(y=>y(g.navigation)))).filter(y=>typeof y=="function");if(p.length>0){let y=function(){j=j.filter(b=>!p.includes(b))};p.push(y),j.push(...p)}T.$set(l.props),ot=!0}else lt(l,me);const{activeElement:w}=document;await ge();const v=t?t.scroll:r?Se():null;if(qe){const p=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));v?scrollTo(v.x,v.y):p?p.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==w&&document.activeElement!==document.body;!a&&!S&&ye(),qe=!0,l.props.page&&(A=l.props.page),M=!1,e==="popstate"&&ct(R),g.fulfil(void 0),j.forEach(p=>p(g.navigation)),x.navigating.set(null)}async function ht(e,n,t,a){if(e.origin===J&&e.pathname===location.pathname&&!Ie)return await se({status:a,error:t,url:e,route:n});if(a!==404){console.error("An error occurred while loading the page. This will cause a full page reload. (This message will only appear during development.)");debugger}return await C(e)}function cn(){let e;$.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{a(i,2)},20)});function n(o){a(o.composedPath()[0],1)}$.addEventListener("mousedown",n),$.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(pe(i.target.href),t.unobserve(i.target))},{threshold:0});function a(o,i){const s=Qe(o,$);if(!s)return;const{url:c,external:f,download:d}=_e(s,I);if(f||d)return;const h=z(s);if(!h.reload)if(i<=h.preload_data){const g=ie(c,!1);g&&on(g).then(u=>{u.type==="loaded"&&u.state.error&&console.warn(`Preloading data for ${g.url.pathname} failed with the following error: ${u.state.error.message}
If this error is transient, you can ignore it. Otherwise, consider disabling preloading for this route. This route was preloaded due to a data-sveltekit-preload-data attribute. See https://kit.svelte.dev/docs/link-options for more info`)})}else i<=h.preload_code&&pe(c.pathname)}function r(){t.disconnect();for(const o of $.querySelectorAll("a")){const{url:i,external:s,download:c}=_e(o,I);if(s||c)continue;const f=z(o);f.reload||(f.preload_code===Y.viewport&&t.observe(o),f.preload_code===Y.eager&&pe(i.pathname))}}j.push(r),r()}function B(e,n){if(e instanceof te)return e.body;console.warn("The next HMR update will cause the page to reload");const t=X(e),a=tn(e);return q.hooks.handleError({error:e,event:n,status:t,message:a})??{message:a}}function ln(e,n={}){return e=Xe(e),e.origin!==J?Promise.reject(new Error(`Cannot use \`goto\` with an external URL. Use \`window.location = "${e}"\` instead`)):oe(e,n,0)}function wn(){return re=!0,rn()}async function mn(e){if(e.type==="error"){const n=new URL(location.href),{branch:t,route:a}=m;if(!a)return;const r=await ft(m.branch.length,t,a.errors);if(r){const o=await K({url:n,params:m.params,branch:t.slice(0,r.idx).concat(r.node),status:e.status??500,error:e.error,route:a});m=o.state,T.$set(o.props),ge().then(ye)}}else e.type==="redirect"?oe(e.location,{invalidateAll:!0},0):(T.$set({form:null,page:{...A,form:e.data,status:e.status}}),await ge(),T.$set({form:e.data}),e.type==="success"&&ye())}function fn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let a=!1;if(Fe(),!M){const r=_t(m,void 0,null,"leave"),o={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};rt.forEach(i=>i(o))}a?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Fe()}),(n=navigator.connection)!=null&&n.saveData||cn(),$.addEventListener("click",t=>{var g;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const a=Qe(t.composedPath()[0],$);if(!a)return;const{url:r,external:o,target:i,download:s}=_e(a,I);if(!r)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=z(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||s)return;if(o||c.reload){dt({url:r,type:"link"})?M=!0:t.preventDefault();return}const[d,h]=r.href.split("#");if(h!==void 0&&d===fe(location)){const[,u]=m.url.href.split("#");if(u===h){t.preventDefault(),h===""||h==="top"&&a.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=a.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(F=!0,Re(E),e(r),!c.replace_state)return;F=!1}t.preventDefault(),W({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),$.addEventListener("submit",t=>{if(t.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if(((r==null?void 0:r.formMethod)||a.method)!=="get")return;const i=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(ne(i,I))return;const s=t.target,c=z(s);if(c.reload)return;t.preventDefault(),t.stopPropagation();const f=new FormData(s),d=r==null?void 0:r.getAttribute("name");d&&f.append(d,(r==null?void 0:r.getAttribute("value"))??""),i.search=new URLSearchParams(f).toString(),W({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{var a;if((a=t.state)!=null&&a[N]){const r=t.state[N];if(D={},r===E)return;const o=O[r],i=t.state[ze]??{},s=new URL(t.state[Dt]??location.href),c=t.state[H],f=fe(location)===fe(m.url);if(c===R&&(ot||f)){e(s),O[E]=Se(),o&&scrollTo(o.x,o.y),i!==A.state&&(A={...A,state:i},T.$set({page:A})),E=r;return}const h=r-E;await W({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{E=r,R=c},block:()=>{history.go(-h)},nav_token:D})}else if(!F){const r=new URL(location.href);e(r)}}),addEventListener("hashchange",()=>{F&&(F=!1,history.replaceState({...history.state,[N]:++E,[H]:R},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&x.navigating.set(null)});function e(t){m.url=t,x.page.set({...A,url:t}),x.page.notify()}}async function un(e,{status:n=200,error:t,node_ids:a,params:r,route:o,data:i,form:s}){Ie=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=ie(c,!1)||{});let f;try{const d=a.map(async(u,_)=>{const l=i[_];return l!=null&&l.uses&&(l.uses=gt(l.uses)),$e({loader:q.nodes[u],url:c,params:r,route:o,parent:async()=>{const w={};for(let v=0;v<_;v+=1)Object.assign(w,(await d[v]).data);return w},server_data_node:Pe(l)})}),h=await Promise.all(d),g=ae.find(({id:u})=>u===o.id);if(g){const u=g.layouts;for(let _=0;_<u.length;_++)u[_]||h.splice(_,0,void 0)}f=await K({url:c,params:r,branch:h,status:n,error:t,form:s,route:g??null})}catch(d){if(d instanceof Me){await C(new URL(d.location,location.href));return}f=await se({status:X(d),error:await B(d,{url:c,params:r,route:o}),url:c,route:o})}f.props.page&&(f.props.page.state={}),lt(f,e)}async function pt(e,n){var r;const t=new URL(e);if(t.pathname=At(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(en,"1"),e.searchParams.has(de))throw new Error(`Cannot used reserved query parameter "${de}"`);t.searchParams.append(de,n.map(o=>o?"1":"0").join(""));const a=await Ke(t.href);if(!a.ok){let o;throw(r=a.headers.get("content-type"))!=null&&r.includes("application/json")?o=await a.json():a.status===404?o="Not Found":a.status===500&&(o="Internal Error"),new te(a.status,o)}return new Promise(async o=>{var h;const i=new Map,s=a.body.getReader(),c=new TextDecoder;function f(g){return et(g,{Promise:u=>new Promise((_,l)=>{i.set(u,{fulfil:_,reject:l})})})}let d="";for(;;){const{done:g,value:u}=await s.read();if(g&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const _=d.indexOf(`
`);if(_===-1)break;const l=JSON.parse(d.slice(0,_));if(d=d.slice(_+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(w=>{(w==null?void 0:w.type)==="data"&&(w.uses=gt(w.uses),w.data=f(w.data))}),o(l);else if(l.type==="chunk"){const{id:w,data:v,error:S}=l,p=i.get(w);i.delete(w),S?p.reject(f(S)):p.fulfil(f(v))}}}})}function gt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function ye(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const i=r[o],s=a.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}a.removeAllRanges()}})}}}function _t(e,n,t,a){var c,f;let r,o;const i=new Promise((d,h)=>{r=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:t},willUnload:!n,type:a,complete:i},fulfil:r,reject:o}}{const e=console.warn;console.warn=function(...t){t.length===1&&/<(Layout|Page|Error)(_[\w$]+)?> was created (with unknown|without expected) prop '(data|form)'/.test(t[0])||e(...t)}}export{mn as a,_n as b,wn as i,gn as p,x as s};
