import{i as e,o as t,g as a,r as n,a as o,b as s,c as r,s as i,d as c,u as l,e as u,f as m,h as d,j as p,w as h,T as f,k as g,F as _,l as v,m as b,n as y,p as k,t as w,q as A,v as L,x as E,y as x,z as O,A as P,B as H,C as I,D,E as j,G as C,H as T,I as U,J as N,K as S}from"./vendor.1e82f0be.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}(),e({apiKey:"AIzaSyB1uSE1rOAKYDnG14r4gEoFnwHJorhAhbk",authDomain:"hunshui-72c5c.firebaseapp.com",databaseURL:"https://databaseName.firebaseio.com",projectId:"hunshui-72c5c",storageBucket:"hunshui-72c5c.appspot.com",messagingSenderId:"445243691470",appId:"1:445243691470:web:f9a9a4c0fd57665b451b9f"});const R=()=>{const e=n(null),i=n(null),c=a();let l;o((()=>{l=t(c,(t=>e.value=t),(e=>i.value=e))})),s((()=>l()));const u=r((()=>null!=e.value));return{user:e,error:i,isAuthenticated:u}},V=async()=>{try{const e=a();await i(e)}catch(e){alert(e.message)}},q=()=>new Promise(((e,n)=>t(a(),e,n)));var M=(e,t)=>{const a=e.__vccOpts||e;for(const[n,o]of t)a[n]=o;return a};const F=c({name:"Menu",setup(){const{isAuthenticated:e}=R(),t=n(!1),a=()=>{t.value=!t.value},o=l();return{show:t,toggle:a,isAuthenticated:e,signOutUser:async()=>{a(),await V(),await o.replace({name:"Login"})},menuAuth:[{name:"Home",link:{name:"Home"}},{name:"Profile",link:{name:"Profile"}},{name:"Database",link:{name:"Database"}}],menuNoAuth:[{name:"Home",link:{name:"Home"}},{name:"Login",link:{name:"Login"}},{name:"Signup",link:{name:"SignUp"}}]}}}),z={class:"ml-3 relative"},B={key:0,class:"origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg py-1 bg-gray-800 text-white font-heading",role:"menu","aria-orientation":"vertical","aria-labelledby":"user-menu-button",tabindex:"-1"};const K=c({components:{Menu:M(F,[["render",function(e,t,a,n,o,s){const r=u("font-awesome-icon"),i=u("router-link");return g(),m("div",z,[d("div",null,[d("button",{type:"button",class:"text-lg h-8 w-8 rounded-full hover:bg-primary","aria-expanded":"false","aria-haspopup":"true",onClick:t[0]||(t[0]=(...t)=>e.toggle&&e.toggle(...t))},[p(r,{icon:["fas","bars"],class:""})])]),p(f,{name:"fade"},{default:h((()=>[e.show?(g(),m("div",B,[(g(!0),m(_,null,v(e.isAuthenticated?e.menuAuth:e.menuNoAuth,((t,a)=>(g(),y(i,{key:a,to:t.link,class:"block px-4 py-2 text-sm",onClick:e.toggle},{default:h((()=>[k(w(t.name),1)])),_:2},1032,["to","onClick"])))),128)),e.isAuthenticated?(g(),m("p",{key:0,class:"px-4 py-2 text-sm cursor-pointer text-error",onClick:t[1]||(t[1]=(...t)=>e.signOutUser&&e.signOutUser(...t))}," Logout ")):b("",!0)])):b("",!0)])),_:1})])}],["__scopeId","data-v-4a1dd6e8"]])},setup(){const{user:e}=R(),t=l();return{user:e,signOutUser:async()=>{await V(),await t.replace({name:"Login"})},goToHome:()=>{t.push({name:"Home"})}}}}),$={class:"t-transition-effect nav-style px-2 md:px-0"},G={class:"t-main-set flex justify-between items-center"},J={key:0,class:"hidden md:block"},W=k("首页 "),Y={key:1,class:"hidden md:block"},Q=k("首页 "),X=k(" 登录 "),Z={class:"block md:hidden"};var ee=M(K,[["render",function(e,t,a,n,o,s){const r=u("router-link"),i=u("Menu");return g(),m("nav",$,[d("div",G,[d("h1",{class:"font-bold text-primary cursor-pointer",onClick:t[0]||(t[0]=(...t)=>e.goToHome&&e.goToHome(...t))}," 浑水 "),e.user?(g(),m("div",J,[p(r,{to:{name:"Home"},class:"nav-link t-transition-effect"},{default:h((()=>[W])),_:1}),d("a",{class:"t-transition-effect py-2 px-4 ml-4 font-heading rounded cursor-pointer bg-error hover:bg-opacity-75",onClick:t[1]||(t[1]=(...t)=>e.signOutUser&&e.signOutUser(...t))},"登出 ")])):(g(),m("div",Y,[p(r,{to:{name:"Home"},class:"nav-link t-transition-effect"},{default:h((()=>[Q])),_:1}),p(r,{to:{name:"Login"},class:"nav-link t-transition-effect"},{default:h((()=>[X])),_:1})])),d("div",Z,[p(i)])])])}],["__scopeId","data-v-7e48e3d4"]]);const te={},ae={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"animate-spin -ml-1 mr-3"},ne=[d("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),d("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)];var oe=M(te,[["render",function(e,t){return g(),m("svg",ae,ne)}]]);const se=c({name:"App",components:{Navbar:ee,Loading:oe},setup(e){const t=n(!0);return q().then((()=>{t.value=!1})),{isLoading:t}}}),re={key:0,class:"flex items-center justify-center",style:{height:"80vh"}},ie={key:1},ce={class:"t-main-set"};var le=M(se,[["render",function(e,t,a,n,o,s){const r=u("Loading"),i=u("Navbar"),c=u("router-view");return e.isLoading?(g(),m("div",re,[p(r,{class:"h-16 w-16"})])):(g(),m("div",ie,[p(i),d("div",ce,[p(c,null,{default:h((({Component:e,route:t})=>[p(f,{name:"slide",mode:"out-in"},{default:h((()=>[(g(),y(A(e),{key:t.path}))])),_:2},1024)])),_:1})])]))}],["__scopeId","data-v-3f15415a"]]);const ue={},me=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`./${e}`)in ue)return;ue[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},de=[{path:"/",name:"Home",component:()=>me((()=>import("./Home.e9f13dba.js")),["assets/Home.e9f13dba.js","assets/Home.18253982.css","assets/vendor.1e82f0be.js"])},{path:"/profile",name:"Profile",component:()=>me((()=>import("./Profile.c0d387ae.js")),["assets/Profile.c0d387ae.js","assets/vendor.1e82f0be.js","assets/Dialog.2486a1ad.js"]),meta:{requiresAuth:!0}},{path:"/auth/login",name:"Login",component:()=>me((()=>import("./Login.a944318b.js")),["assets/Login.a944318b.js","assets/vendor.1e82f0be.js","assets/Dialog.2486a1ad.js","assets/isValidEmail.d4801c25.js"]),meta:{noAuth:!0}},{path:"/auth/signup",name:"SignUp",component:()=>me((()=>import("./SignUp.65b16a5c.js")),["assets/SignUp.65b16a5c.js","assets/vendor.1e82f0be.js","assets/isValidEmail.d4801c25.js"]),meta:{noAuth:!0}},{path:"/auth/forgot-password",name:"ForgotPassword",component:()=>me((()=>import("./ForgotPassword.8cc48bb4.js")),["assets/ForgotPassword.8cc48bb4.js","assets/vendor.1e82f0be.js","assets/Dialog.2486a1ad.js"]),meta:{noAuth:!0}},{path:"/database",name:"Database",component:()=>me((()=>import("./Database.59649b70.js")),["assets/Database.59649b70.js","assets/vendor.1e82f0be.js"]),meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>me((()=>import("./404.94f3b5e9.js")),["assets/404.94f3b5e9.js","assets/vendor.1e82f0be.js"])}],pe=L({history:E("./"),routes:de});pe.beforeEach((async(e,t,a)=>{const n=e.matched.some((e=>e.meta.requiresAuth)),o=e.matched.some((e=>e.meta.noAuth)),s=await q();n&&!s?a({name:"Login"}):o&&s?a({name:"Home"}):a()}));x.add([O,P,H,I,D,j,C,T,U]),N(le).component("font-awesome-icon",S).use(pe).mount("#app");export{oe as L,M as _,V as a,R as u};
