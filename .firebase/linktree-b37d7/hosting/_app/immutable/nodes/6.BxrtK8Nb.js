import{k as le,q as ce,l as ue,m as me,n as de,e as he,u as $}from"../chunks/firebase.C_6QoUeW.js";import{e as te}from"../chunks/index.U2O1cwQ4.js";import{s as fe,v as _e,h as pe,C as ge,e as P,i as q,t as A,D as ve,a as j,k as I,b as S,j as C,d as L,z as ae,E as be,F as ke}from"../chunks/scheduler.DfGOlq3b.js";import{S as we,i as ye,d as X,q as ne,v as Ee,a as k,b as g,f,c as J,s as se,t as N,n as Pe,e as K,g as je,h as Le,m as Re,j as De,k as Ue}from"../chunks/index.BzQEtMZ_.js";import{U as re,g as xe,a as Se}from"../chunks/UserLink.BstpuuXU.js";const qe=async({params:a})=>{var l,b;const e=le(he,"users"),s=ce(e,me("username","==",a.username),ue(1)),r=await de(s),v=(l=r.docs[0])==null?void 0:l.exists(),t=(b=r.docs[0])==null?void 0:b.data();if(!v)throw te(404,"that user does not exist");if(!t.published)throw te(403,`@${t.username} is not public`);return{username:t.username,photoURL:t.photoURL,bio:t.bio,links:t.links??[]}},Ce=Object.freeze(Object.defineProperty({__proto__:null,load:qe},Symbol.toStringTag,{value:"Module"})),R="src/routes/[username]/+page.svelte";function oe(a,e,s){const r=a.slice();return r[2]=e[s],r}function Q(a){let e,s,r,v,t;const l=[a[2]];let b={};for(let h=0;h<l.length;h+=1)b=ge(b,l[h]);r=new re({props:b,$$inline:!0});const c={c:function(){e=P("li"),s=P("div"),je(r.$$.fragment),v=q(),this.h()},l:function(_){e=j(_,"LI",{});var m=S(e);s=j(m,"DIV",{style:!0});var y=S(s);Le(r.$$.fragment,y),y.forEach(k),v=I(m),m.forEach(k),this.h()},h:function(){ke(s,"padding","10px"),L(s,R,26,8,753),L(e,R,25,6,740)},m:function(_,m){J(_,e,m),f(e,s),Re(r,s,null),f(e,v),t=!0},p:function(_,m){const y=m&1?xe(l,[Se(_[2])]):{};r.$set(y)},i:function(_){t||(N(r.$$.fragment,_),t=!0)},o:function(_){K(r.$$.fragment,_),t=!1},d:function(_){_&&k(e),De(r)}};return X("SvelteRegisterBlock",{block:c,id:Q.name,type:"each",source:"(23:4) {#each data.links as item}",ctx:a}),c}function W(a){let e,s,r,v,t,l,b,c=a[0].username+"",h,_,m,y,T,U,z=(a[0].bio??"no bio yet...")+"",M,F,D,G,E,H,O,w;document.title=e="@"+a[0].username+" Links";let x=ne(a[0].links),o=[];for(let p=0;p<x.length;p+=1)o[p]=Q(oe(a,x,p));const ie=p=>K(o[p],1,1,()=>{o[p]=null}),Y={c:function(){s=P("meta"),v=q(),t=P("main"),l=P("h1"),b=A("@"),h=A(c),_=q(),m=P("img"),T=q(),U=P("p"),M=A(z),F=q(),D=P("ul");for(let n=0;n<o.length;n+=1)o[n].c();G=q(),E=P("a"),H=A("Edit page"),this.h()},l:function(n){const i=ve("svelte-1ui6vuc",document.head);s=j(i,"META",{name:!0,content:!0}),i.forEach(k),v=I(n),t=j(n,"MAIN",{class:!0});var d=S(t);l=j(d,"H1",{class:!0});var u=S(l);b=C(u,"@"),h=C(u,c),u.forEach(k),_=I(d),m=j(d,"IMG",{src:!0,alt:!0,class:!0}),T=I(d),U=j(d,"P",{class:!0});var B=S(U);M=C(B,z),B.forEach(k),F=I(d),D=j(d,"UL",{class:!0});var Z=S(D);for(let V=0;V<o.length;V+=1)o[V].l(Z);Z.forEach(k),G=I(d),E=j(d,"A",{href:!0,class:!0});var ee=S(E);H=C(ee,"Edit page"),ee.forEach(k),d.forEach(k),this.h()},h:function(){var n;g(s,"name","description"),g(s,"content",r=a[0].bio),L(s,R,9,2,200),g(l,"class","text-7xl text-purple-500 mb-4"),L(l,R,13,2,317),ae(m.src,y=a[0].photoURL??"https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png")||g(m,"src",y),g(m,"alt","photoURL"),g(m,"class","mx-auto profile-image space-x-60 s-gkDBevr0hI8w"),L(m,R,15,2,384),g(U,"class","text-xl my-8"),L(U,R,22,2,620),g(D,"class","list-none"),L(D,R,23,2,680),g(E,"href",O="/"+((n=a[1])==null?void 0:n.username)+"/edit"),g(E,"class","underline text-purple-600"),L(E,R,33,2,865),g(t,"class","prose text-center mx-auto mt-8 mb-10"),L(t,R,12,0,263)},m:function(n,i){f(document.head,s),J(n,v,i),J(n,t,i),f(t,l),f(l,b),f(l,h),f(t,_),f(t,m),f(t,T),f(t,U),f(U,M),f(t,F),f(t,D);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(D,null);f(t,G),f(t,E),f(E,H),w=!0},p:function(n,[i]){var d;if((!w||i&1)&&e!==(e="@"+n[0].username+" Links")&&(document.title=e),(!w||i&1&&r!==(r=n[0].bio))&&g(s,"content",r),(!w||i&1)&&c!==(c=n[0].username+"")&&se(h,c),(!w||i&1&&!ae(m.src,y=n[0].photoURL??"https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"))&&g(m,"src",y),(!w||i&1)&&z!==(z=(n[0].bio??"no bio yet...")+"")&&se(M,z),i&1){x=ne(n[0].links);let u;for(u=0;u<x.length;u+=1){const B=oe(n,x,u);o[u]?(o[u].p(B,i),N(o[u],1)):(o[u]=Q(B),o[u].c(),N(o[u],1),o[u].m(D,null))}for(Ue(),u=x.length;u<o.length;u+=1)ie(u);Pe()}(!w||i&2&&O!==(O="/"+((d=n[1])==null?void 0:d.username)+"/edit"))&&g(E,"href",O)},i:function(n){if(!w){for(let i=0;i<x.length;i+=1)N(o[i]);w=!0}},o:function(n){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)K(o[i]);w=!1},d:function(n){n&&(k(v),k(t)),k(s),be(o,n)}};return X("SvelteRegisterBlock",{block:Y,id:W.name,type:"component",source:"",ctx:a}),Y}function Ie(a,e,s){let r;_e($,"userData"),pe(a,$,c=>s(1,r=c));let{$$slots:v={},$$scope:t}=e;Ee("Page",v,[]);let{data:l}=e;a.$$.on_mount.push(function(){l===void 0&&!("data"in e||a.$$.bound[a.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const b=["data"];return Object.keys(e).forEach(c=>{!~b.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<Page> was created with unknown prop '${c}'`)}),a.$$set=c=>{"data"in c&&s(0,l=c.data)},a.$capture_state=()=>({UserLink:re,data:l,userData:$,$userData:r}),a.$inject_state=c=>{"data"in c&&s(0,l=c.data)},e&&"$$inject"in e&&a.$inject_state(e.$$inject),[l,r]}class Ne extends we{constructor(e){super(e),ye(this,e,Ie,W,fe,{data:0}),X("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:W.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Ne as component,Ce as universal};
