import{s as U,v as z,h as A,e as v,i as T,o as E,a as b,l as C,k as O,d as g,n as P,t as R,b as J,j as G}from"../chunks/scheduler.DfGOlq3b.js";import{S as Y,i as F,d as w,v as K,c as h,a as m,b as k,l as D,f as W,s as M}from"../chunks/index.BzQEtMZ_.js";import{a as x,b as S,G as j,s as q,c as I}from"../chunks/firebase.C_6QoUeW.js";const y="src/routes/login/+page.svelte";function H(c){let t,u="Sign in with Google",i,o;const f={c:function(){t=v("button"),t.textContent=u,this.h()},l:function(n){t=b(n,"BUTTON",{class:!0,"data-svelte-h":!0}),C(t)!=="svelte-eubzr8"&&(t.textContent=u),this.h()},h:function(){k(t,"class","btn btn-primary"),g(t,y,34,2,940)},m:function(n,d){h(n,t,d),i||(o=D(t,"click",c[1],!1,!1,!1,!1),i=!0)},p:P,d:function(n){n&&m(t),i=!1,o()}};return w("SvelteRegisterBlock",{block:f,id:H.name,type:"else",source:"(28:0) {:else}",ctx:c}),f}function L(c){let t,u,i=c[0].displayName+"",o,f,s,n="You are logged in",d,e,a="Sign out",r,$;const B={c:function(){t=v("h2"),u=R("Welcome, "),o=R(i),f=T(),s=v("p"),s.textContent=n,d=T(),e=v("button"),e.textContent=a,this.h()},l:function(l){t=b(l,"H2",{class:!0});var p=J(t);u=G(p,"Welcome, "),o=G(p,i),p.forEach(m),f=O(l),s=b(l,"P",{class:!0,"data-svelte-h":!0}),C(s)!=="svelte-1958qcl"&&(s.textContent=n),d=O(l),e=b(l,"BUTTON",{class:!0,"data-svelte-h":!0}),C(e)!=="svelte-wq7ddu"&&(e.textContent=a),this.h()},h:function(){k(t,"class","card-title"),g(t,y,30,2,739),k(s,"class","text-center text-success"),g(s,y,31,2,798),k(e,"class","btn btn-warning"),g(e,y,32,2,858)},m:function(l,p){h(l,t,p),W(t,u),W(t,o),h(l,f,p),h(l,s,p),h(l,d,p),h(l,e,p),r||($=D(e,"click",c[2],!1,!1,!1,!1),r=!0)},p:function(l,p){p&1&&i!==(i=l[0].displayName+"")&&M(o,i)},d:function(l){l&&(m(t),m(f),m(s),m(d),m(e)),r=!1,$()}};return w("SvelteRegisterBlock",{block:B,id:L.name,type:"if",source:"(24:0) {#if $user}",ctx:c}),B}function N(c){let t,u="Login",i,o;function f(e,a){return e[0]?L:H}let s=f(c),n=s(c);const d={c:function(){t=v("h2"),t.textContent=u,i=T(),n.c(),o=E(),this.h()},l:function(a){t=b(a,"H2",{"data-svelte-h":!0}),C(t)!=="svelte-bhb3ah"&&(t.textContent=u),i=O(a),n.l(a),o=E(),this.h()},h:function(){g(t,y,27,0,709)},m:function(a,r){h(a,t,r),h(a,i,r),n.m(a,r),h(a,o,r)},p:function(a,[r]){s===(s=f(a))&&n?n.p(a,r):(n.d(1),n=s(a),n&&(n.c(),n.m(o.parentNode,o)))},i:P,o:P,d:function(a){a&&(m(t),m(i),m(o)),n.d(a)}};return w("SvelteRegisterBlock",{block:d,id:N.name,type:"component",source:"",ctx:c}),d}function Q(c,t,u){let i;z(S,"user"),A(c,S,e=>u(0,i=e));let{$$slots:o={},$$scope:f}=t;K("Page",o,[]);async function s(){const e=new j,r=await(await q(x,e)).user.getIdToken();await fetch("/api/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:r})})}async function n(){await fetch("/api/signin",{method:"DELETE"}),await I(x)}const d=[];return Object.keys(t).forEach(e=>{!~d.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<Page> was created with unknown prop '${e}'`)}),c.$capture_state=()=>({auth:x,user:S,GoogleAuthProvider:j,signInWithPopup:q,signOut:I,signInWithGoogle:s,signOutSSR:n,$user:i}),[i,s,n]}class tt extends Y{constructor(t){super(t),F(this,t,Q,N,U,{}),w("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:N.name})}}export{tt as component};
