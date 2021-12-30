import{S as e,U as r}from"./vendor.b196b113.js";function t(){return t=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},t.apply(this,arguments)}function n(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return o(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function i(e,r){if(e in r){for(var t=r[e],n=arguments.length,o=new Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];return"function"==typeof t?t.apply(void 0,o):t}var u=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(r).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}var u,s,l,c,f,d;function p(e){var r,o,a=e.visible,s=void 0===a||a,c=e.features,f=void 0===c?u.None:c,d=n(e,["visible","features"]);return s||f&u.Static&&d.props.static?v(d):f&u.RenderStrategy?i(null==(r=d.props.unmount)||r?l.Unmount:l.Hidden,((o={})[l.Unmount]=function(){return null},o[l.Hidden]=function(){return v(t({},d,{props:t({},d.props,{hidden:!0,style:{display:"none"}})}))},o)):v(d)}function v(t){var o,a=t.props,i=t.attrs,u=t.slots,s=t.slot,l=t.name,c=y(a,["unmount","static"]),f=c.as,d=n(c,["as"]),p=null==u.default?void 0:u.default(s);if("template"===f){if(Object.keys(d).length>0||Object.keys(i).length>0){var v=null!=p?p:[],h=v[0],m=v.slice(1);if(null==(o=h)||"string"!=typeof o.type&&"object"!=typeof o.type&&"function"!=typeof o.type||m.length>0)throw new Error(['Passing props on "template"!',"","The current component <"+l+' /> is rendering a "template".',"However we need to passthrough the following props:",Object.keys(d).concat(Object.keys(i)).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return e(h,d)}return Array.isArray(p)&&1===p.length?p[0]:p}return r(f,d,p)}function y(e,r){void 0===r&&(r=[]);for(var t,n=Object.assign({},e),o=a(r);!(t=o()).done;){var i=t.value;i in n&&delete n[i]}return n}(s=u||(u={}))[s.None=0]="None",s[s.RenderStrategy=1]="RenderStrategy",s[s.Static=2]="Static",(c=l||(l={}))[c.Unmount=0]="Unmount",c[c.Hidden=1]="Hidden",(d=f||(f={})).Space=" ",d.Enter="Enter",d.Escape="Escape",d.Backspace="Backspace",d.ArrowLeft="ArrowLeft",d.ArrowUp="ArrowUp",d.ArrowRight="ArrowRight",d.ArrowDown="ArrowDown",d.Home="Home",d.End="End",d.PageUp="PageUp",d.PageDown="PageDown",d.Tab="Tab";var h=0;function m(){return++h}var b,w,g,A,S,x,j,E,O=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");function F(e){null==e||e.focus({preventScroll:!0})}function N(e,r){var t=Array.isArray(e)?e:function(e){return void 0===e&&(e=document.body),null==e?[]:Array.from(e.querySelectorAll(O))}(e),n=document.activeElement,o=function(){if(r&(b.First|b.Next))return S.Next;if(r&(b.Previous|b.Last))return S.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),a=function(){if(r&b.First)return 0;if(r&b.Previous)return Math.max(0,t.indexOf(n))-1;if(r&b.Next)return Math.max(0,t.indexOf(n))+1;if(r&b.Last)return t.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),i=r&b.NoScroll?{preventScroll:!0}:{},u=0,s=t.length,l=void 0;do{var c;if(u>=s||u+s<=0)return g.Error;var f=a+u;if(r&b.WrapAround)f=(f+s)%s;else{if(f<0)return g.Underflow;if(f>=s)return g.Overflow}null==(c=l=t[f])||c.focus(i),u+=o}while(l!==document.activeElement);return l.hasAttribute("tabindex")||l.setAttribute("tabindex","0"),g.Success}function P(e){var r;return null==e||null==e.value?null:null!=(r=e.value.$el)?r:e.value}(w=b||(b={}))[w.First=1]="First",w[w.Previous=2]="Previous",w[w.Next=4]="Next",w[w.Last=8]="Last",w[w.WrapAround=16]="WrapAround",w[w.NoScroll=32]="NoScroll",(A=g||(g={}))[A.Error=0]="Error",A[A.Overflow=1]="Overflow",A[A.Success=2]="Success",A[A.Underflow=3]="Underflow",(x=S||(S={}))[x.Previous=-1]="Previous",x[x.Next=1]="Next",(E=j||(j={}))[E.Strict=0]="Strict",E[E.Loose=1]="Loose";export{u as F,f as K,l as R,t as _,b as a,n as b,a as c,P as d,g as e,N as f,F as g,i as m,y as o,p as r,m as u};
