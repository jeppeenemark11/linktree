import{x as h,s as b,v as V,h as B,c as D,o as k,n as E,e as N,a as U,b as j,d as q,u as I,g as z,f as F,y as G}from"./scheduler.DfGOlq3b.js";import{S as H,i as J,d as y,v as K,c as g,k as L,e as f,n as M,t as d,a as _,o as P}from"./index.BzQEtMZ_.js";import{c as Q}from"./index.CvmYViMX.js";import{p as u}from"./stores.i5K_SLPl.js";function $(i,{delay:s=0,duration:r=400,easing:a=Q,x:o=0,y:n=0,opacity:c=0}={}){const t=getComputedStyle(i),e=+t.opacity,l=t.transform==="none"?"":t.transform,R=e*(1-c),[A,S]=h(o),[w,C]=h(n);return{delay:s,duration:r,easing:a,css:(v,O)=>`
			transform: ${l} translate(${(1-v)*A}${S}, ${(1-v)*w}${C});
			opacity: ${e-R*O}`}}const T="src/lib/components/AnimatedRoute.svelte";function m(i){let s,r,a;const o=i[2].default,n=D(o,i,i[1],null),c={c:function(){s=N("div"),n&&n.c(),this.h()},l:function(e){s=U(e,"DIV",{});var l=j(s);n&&n.l(l),l.forEach(_),this.h()},h:function(){q(s,T,6,0,116)},m:function(e,l){g(e,s,l),n&&n.m(s,null),a=!0},p:function(e,l){n&&n.p&&(!a||l&2)&&I(n,o,e,e[1],a?F(o,e[1],l,null):z(e[1]),null)},i:function(e){a||(d(n,e),e&&(r||G(()=>{r=P(s,$,{x:"-100%",duration:500}),r.start()})),a=!0)},o:function(e){f(n,e),a=!1},d:function(e){e&&_(s),n&&n.d(e)}};return y("SvelteRegisterBlock",{block:c,id:m.name,type:"key",source:"(6:0) {#key $page.url}",ctx:i}),c}function p(i){let s=i[0].url,r,a,o=m(i);const n={c:function(){o.c(),r=k()},l:function(t){o.l(t),r=k()},m:function(t,e){o.m(t,e),g(t,r,e),a=!0},p:function(t,[e]){e&1&&b(s,s=t[0].url)?(L(),f(o,1,1,E),M(),o=m(t),o.c(),d(o,1),o.m(r.parentNode,r)):o.p(t,e)},i:function(t){a||(d(o),a=!0)},o:function(t){f(o),a=!1},d:function(t){t&&_(r),o.d(t)}};return y("SvelteRegisterBlock",{block:n,id:p.name,type:"component",source:"",ctx:i}),n}function W(i,s,r){let a;V(u,"page"),B(i,u,t=>r(0,a=t));let{$$slots:o={},$$scope:n}=s;K("AnimatedRoute",o,["default"]);const c=[];return Object.keys(s).forEach(t=>{!~c.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<AnimatedRoute> was created with unknown prop '${t}'`)}),i.$$set=t=>{"$$scope"in t&&r(1,n=t.$$scope)},i.$capture_state=()=>({fly:$,page:u,$page:a}),[a,n,o]}class tt extends H{constructor(s){super(s),J(this,s,W,p,b,{}),y("SvelteRegisterComponent",{component:this,tagName:"AnimatedRoute",options:s,id:p.name})}}export{tt as A};
