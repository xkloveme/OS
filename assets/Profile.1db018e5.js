import{_ as p,L as g,u as f,a as _}from"./index.3ff1be66.js";import{d as b,u as h,r as v,e as a,f as k,h as i,t as w,n as r,j as y,p as D,k as s}from"./vendor.1e82f0be.js";import{D as L}from"./Dialog.edd64883.js";const O=b({name:"Home",components:{Dialog:L,Loading:g},setup(){const{user:e}=f(),o=h(),n=v(!1);return{user:e,signOutUser:async()=>{n.value=!0,await _(),await o.replace({name:"Login"}),n.value=!1},loading:n}}}),j={class:"t-page-position p-4 bg-secondary"},B=D(" LogOut ");function N(e,o,n,c,U,V){var t;const l=a("Loading"),u=a("font-awesome-icon"),d=a("Dialog");return s(),k("section",j,[i("h1",null,"Welcome, "+w((t=e.user)==null?void 0:t.displayName),1),i("button",{class:"my-4 t-btn inline-flex items-center bg-error",onClick:o[0]||(o[0]=(...m)=>e.signOutUser&&e.signOutUser(...m))},[e.loading?(s(),r(l,{key:0,class:"h-5 w-5"})):(s(),r(u,{key:1,icon:["fas","sign-out-alt"],class:"mr-2"})),B]),y(d,{"button-name":"About Me",title:"About Me",description:`Hello there,I have created a
      authetication demo using Vue 3, Firebase 9 and Tailwind. Features included are sign up 
      form validation, navigation guard, firestore read and write demo, page transition,
      and this reuseable modal.`,icon:["fas","info-circle"]})])}var S=p(O,[["render",N]]);export{S as default};