import{s as O,v as R,h as q,e as g,t as E,i as B,a as b,b as w,j as $,k as D,d as S,n as j}from"../chunks/scheduler.DfGOlq3b.js";import{S as H,i as N,d as C,v as P,a as d,c as u,f as k,s as x}from"../chunks/index.BzQEtMZ_.js";import{p as _}from"../chunks/stores.i5K_SLPl.js";const y="node_modules/@sveltejs/kit/src/runtime/components/error.svelte";function f(r){var v;let e,i=r[0].status+"",o,l,n,c=((v=r[0].error)==null?void 0:v.message)+"",s;const h={c:function(){e=g("h1"),o=E(i),l=B(),n=g("p"),s=E(c),this.h()},l:function(t){e=b(t,"H1",{});var a=w(e);o=$(a,i),a.forEach(d),l=D(t),n=b(t,"P",{});var m=w(n);s=$(m,c),m.forEach(d),this.h()},h:function(){S(e,y,4,0,57),S(n,y,5,0,81)},m:function(t,a){u(t,e,a),k(e,o),u(t,l,a),u(t,n,a),k(n,s)},p:function(t,[a]){var m;a&1&&i!==(i=t[0].status+"")&&x(o,i),a&1&&c!==(c=((m=t[0].error)==null?void 0:m.message)+"")&&x(s,c)},i:j,o:j,d:function(t){t&&(d(e),d(l),d(n))}};return C("SvelteRegisterBlock",{block:h,id:f.name,type:"component",source:"",ctx:r}),h}function z(r,e,i){let o;R(_,"page"),q(r,_,s=>i(0,o=s));let{$$slots:l={},$$scope:n}=e;P("Error",l,[]);const c=[];return Object.keys(e).forEach(s=>{!~c.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<Error> was created with unknown prop '${s}'`)}),r.$capture_state=()=>({page:_,$page:o}),[o]}class I extends H{constructor(e){super(e),N(this,e,z,f,O,{}),C("SvelteRegisterComponent",{component:this,tagName:"Error",options:e,id:f.name})}}export{I as component};
