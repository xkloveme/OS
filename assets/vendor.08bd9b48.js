function e(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const t=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function n(e){return!!e||""===e}function r(e){if(w(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=T(i)?o(i):r(i);if(s)for(const e in s)t[e]=s[e]}return t}return T(e)||C(e)?e:void 0}const i=/;(?![^(]*\))/g,s=/:(.+)/;function o(e){const t={};return e.split(i).forEach((e=>{if(e){const n=e.split(s);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function a(e){let t="";if(T(e))t=e;else if(w(e))for(let n=0;n<e.length;n++){const r=a(e[n]);r&&(t+=r+" ")}else if(C(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const c=e=>null==e?"":w(e)||C(e)&&(e.toString===A||!E(e.toString))?JSON.stringify(e,l,2):String(e),l=(e,t)=>t&&t.__v_isRef?l(e,t.value):I(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:k(t)?{[`Set(${t.size})`]:[...t.values()]}:!C(t)||w(t)||x(t)?t:String(t),u={},d=[],f=()=>{},h=()=>!1,p=/^on[^a-z]/,m=e=>p.test(e),g=e=>e.startsWith("onUpdate:"),v=Object.assign,y=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},b=Object.prototype.hasOwnProperty,_=(e,t)=>b.call(e,t),w=Array.isArray,I=e=>"[object Map]"===R(e),k=e=>"[object Set]"===R(e),E=e=>"function"==typeof e,T=e=>"string"==typeof e,S=e=>"symbol"==typeof e,C=e=>null!==e&&"object"==typeof e,O=e=>C(e)&&E(e.then)&&E(e.catch),A=Object.prototype.toString,R=e=>A.call(e),x=e=>"[object Object]"===R(e),N=e=>T(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,P=e(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),L=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},M=/-(\w)/g,D=L((e=>e.replace(M,((e,t)=>t?t.toUpperCase():"")))),U=/\B([A-Z])/g,j=L((e=>e.replace(U,"-$1").toLowerCase())),F=L((e=>e.charAt(0).toUpperCase()+e.slice(1))),z=L((e=>e?`on${F(e)}`:"")),V=(e,t)=>!Object.is(e,t),$=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},B=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},W=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let H;let q;const K=[];class G{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&q&&(this.parent=q,this.index=(q.scopes||(q.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(K.push(this),q=this)}off(){this.active&&(K.pop(),q=K[K.length-1])}stop(e){if(this.active){if(this.effects.forEach((e=>e.stop())),this.cleanups.forEach((e=>e())),this.scopes&&this.scopes.forEach((e=>e.stop(!0))),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}const J=e=>{const t=new Set(e);return t.w=0,t.n=0,t},X=e=>(e.w&ee)>0,Y=e=>(e.n&ee)>0,Z=new WeakMap;let Q=0,ee=1;const te=[];let ne;const re=Symbol(""),ie=Symbol("");class se{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],function(e,t){(t=t||q)&&t.active&&t.effects.push(e)}(this,n)}run(){if(!this.active)return this.fn();if(!te.includes(this))try{return te.push(ne=this),ce.push(ae),ae=!0,ee=1<<++Q,Q<=30?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ee})(this):oe(this),this.fn()}finally{Q<=30&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];X(i)&&!Y(i)?i.delete(e):t[n++]=i,i.w&=~ee,i.n&=~ee}t.length=n}})(this),ee=1<<--Q,ue(),te.pop();const e=te.length;ne=e>0?te[e-1]:void 0}}stop(){this.active&&(oe(this),this.onStop&&this.onStop(),this.active=!1)}}function oe(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ae=!0;const ce=[];function le(){ce.push(ae),ae=!1}function ue(){const e=ce.pop();ae=void 0===e||e}function de(e,t,n){if(!fe())return;let r=Z.get(e);r||Z.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=J()),he(i)}function fe(){return ae&&void 0!==ne}function he(e,t){let n=!1;Q<=30?Y(e)||(e.n|=ee,n=!X(e)):n=!e.has(ne),n&&(e.add(ne),ne.deps.push(e))}function pe(e,t,n,r,i,s){const o=Z.get(e);if(!o)return;let a=[];if("clear"===t)a=[...o.values()];else if("length"===n&&w(e))o.forEach(((e,t)=>{("length"===t||t>=r)&&a.push(e)}));else switch(void 0!==n&&a.push(o.get(n)),t){case"add":w(e)?N(n)&&a.push(o.get("length")):(a.push(o.get(re)),I(e)&&a.push(o.get(ie)));break;case"delete":w(e)||(a.push(o.get(re)),I(e)&&a.push(o.get(ie)));break;case"set":I(e)&&a.push(o.get(re))}if(1===a.length)a[0]&&me(a[0]);else{const e=[];for(const t of a)t&&e.push(...t);me(J(e))}}function me(e,t){for(const n of w(e)?e:[...e])(n!==ne||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ge=e("__proto__,__v_isRef,__isVue"),ve=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(S)),ye=ke(),be=ke(!1,!0),_e=ke(!0),we=Ie();function Ie(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=ot(this);for(let t=0,i=this.length;t<i;t++)de(n,0,t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(ot)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){le();const n=ot(this)[t].apply(this,e);return ue(),n}})),e}function ke(e=!1,t=!1){return function(n,r,i){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_raw"===r&&i===(e?t?Ze:Ye:t?Xe:Je).get(n))return n;const s=w(n);if(!e&&s&&_(we,r))return Reflect.get(we,r,i);const o=Reflect.get(n,r,i);if(S(r)?ve.has(r):ge(r))return o;if(e||de(n,0,r),t)return o;if(ft(o)){return!s||!N(r)?o.value:o}return C(o)?e?tt(o):et(o):o}}function Ee(e=!1){return function(t,n,r,i){let s=t[n];if(!e&&!it(r)&&(r=ot(r),s=ot(s),!w(t)&&ft(s)&&!ft(r)))return s.value=r,!0;const o=w(t)&&N(n)?Number(n)<t.length:_(t,n),a=Reflect.set(t,n,r,i);return t===ot(i)&&(o?V(r,s)&&pe(t,"set",n,r):pe(t,"add",n,r)),a}}const Te={get:ye,set:Ee(),deleteProperty:function(e,t){const n=_(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&pe(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return S(t)&&ve.has(t)||de(e,0,t),n},ownKeys:function(e){return de(e,0,w(e)?"length":re),Reflect.ownKeys(e)}},Se={get:_e,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Ce=v({},Te,{get:be,set:Ee(!0)}),Oe=e=>e,Ae=e=>Reflect.getPrototypeOf(e);function Re(e,t,n=!1,r=!1){const i=ot(e=e.__v_raw),s=ot(t);t!==s&&!n&&de(i,0,t),!n&&de(i,0,s);const{has:o}=Ae(i),a=r?Oe:n?lt:ct;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function xe(e,t=!1){const n=this.__v_raw,r=ot(n),i=ot(e);return e!==i&&!t&&de(r,0,e),!t&&de(r,0,i),e===i?n.has(e):n.has(e)||n.has(i)}function Ne(e,t=!1){return e=e.__v_raw,!t&&de(ot(e),0,re),Reflect.get(e,"size",e)}function Pe(e){e=ot(e);const t=ot(this);return Ae(t).has.call(t,e)||(t.add(e),pe(t,"add",e,e)),this}function Le(e,t){t=ot(t);const n=ot(this),{has:r,get:i}=Ae(n);let s=r.call(n,e);s||(e=ot(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?V(t,o)&&pe(n,"set",e,t):pe(n,"add",e,t),this}function Me(e){const t=ot(this),{has:n,get:r}=Ae(t);let i=n.call(t,e);i||(e=ot(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&pe(t,"delete",e,void 0),s}function De(){const e=ot(this),t=0!==e.size,n=e.clear();return t&&pe(e,"clear",void 0,void 0),n}function Ue(e,t){return function(n,r){const i=this,s=i.__v_raw,o=ot(s),a=t?Oe:e?lt:ct;return!e&&de(o,0,re),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function je(e,t,n){return function(...r){const i=this.__v_raw,s=ot(i),o=I(s),a="entries"===e||e===Symbol.iterator&&o,c="keys"===e&&o,l=i[e](...r),u=n?Oe:t?lt:ct;return!t&&de(s,0,c?ie:re),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Fe(e){return function(...t){return"delete"!==e&&this}}function ze(){const e={get(e){return Re(this,e)},get size(){return Ne(this)},has:xe,add:Pe,set:Le,delete:Me,clear:De,forEach:Ue(!1,!1)},t={get(e){return Re(this,e,!1,!0)},get size(){return Ne(this)},has:xe,add:Pe,set:Le,delete:Me,clear:De,forEach:Ue(!1,!0)},n={get(e){return Re(this,e,!0)},get size(){return Ne(this,!0)},has(e){return xe.call(this,e,!0)},add:Fe("add"),set:Fe("set"),delete:Fe("delete"),clear:Fe("clear"),forEach:Ue(!0,!1)},r={get(e){return Re(this,e,!0,!0)},get size(){return Ne(this,!0)},has(e){return xe.call(this,e,!0)},add:Fe("add"),set:Fe("set"),delete:Fe("delete"),clear:Fe("clear"),forEach:Ue(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((i=>{e[i]=je(i,!1,!1),n[i]=je(i,!0,!1),t[i]=je(i,!1,!0),r[i]=je(i,!0,!0)})),[e,n,t,r]}const[Ve,$e,Be,We]=ze();function He(e,t){const n=t?e?We:Be:e?$e:Ve;return(t,r,i)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(_(n,r)&&r in t?n:t,r,i)}const qe={get:He(!1,!1)},Ke={get:He(!1,!0)},Ge={get:He(!0,!1)},Je=new WeakMap,Xe=new WeakMap,Ye=new WeakMap,Ze=new WeakMap;function Qe(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>R(e).slice(8,-1))(e))}function et(e){return e&&e.__v_isReadonly?e:nt(e,!1,Te,qe,Je)}function tt(e){return nt(e,!0,Se,Ge,Ye)}function nt(e,t,n,r,i){if(!C(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=Qe(e);if(0===o)return e;const a=new Proxy(e,2===o?r:n);return i.set(e,a),a}function rt(e){return it(e)?rt(e.__v_raw):!(!e||!e.__v_isReactive)}function it(e){return!(!e||!e.__v_isReadonly)}function st(e){return rt(e)||it(e)}function ot(e){const t=e&&e.__v_raw;return t?ot(t):e}function at(e){return B(e,"__v_skip",!0),e}const ct=e=>C(e)?et(e):e,lt=e=>C(e)?tt(e):e;function ut(e){fe()&&((e=ot(e)).dep||(e.dep=J()),he(e.dep))}function dt(e,t){(e=ot(e)).dep&&me(e.dep)}function ft(e){return Boolean(e&&!0===e.__v_isRef)}function ht(e){return pt(e,!1)}function pt(e,t){return ft(e)?e:new mt(e,t)}class mt{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ot(e),this._value=t?e:ct(e)}get value(){return ut(this),this._value}set value(e){e=this._shallow?e:ot(e),V(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:ct(e),dt(this))}}function gt(e){return ft(e)?e.value:e}const vt={get:(e,t,n)=>gt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return ft(i)&&!ft(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function yt(e){return rt(e)?e:new Proxy(e,vt)}function bt(e){const t=w(e)?new Array(e.length):{};for(const n in e)t[n]=wt(e,n);return t}class _t{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function wt(e,t){const n=e[t];return ft(n)?n:new _t(e,t)}class It{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new se(e,(()=>{this._dirty||(this._dirty=!0,dt(this))})),this.__v_isReadonly=n}get value(){const e=ot(this);return ut(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function kt(e,t){let n,r;const i=E(e);i?(n=e,r=f):(n=e.get,r=e.set);return new It(n,r,i||!r)}function Et(e,t,...n){const r=e.vnode.props||u;let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const e=`${"modelValue"===o?"model":o}Modifiers`,{number:t,trim:s}=r[e]||u;s?i=n.map((e=>e.trim())):t&&(i=n.map(W))}let a,c=r[a=z(t)]||r[a=z(D(t))];!c&&s&&(c=r[a=z(j(t))]),c&&Hr(c,e,6,i);const l=r[a+"Once"];if(l){if(e.emitted){if(e.emitted[a])return}else e.emitted={};e.emitted[a]=!0,Hr(l,e,6,i)}}function Tt(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const s=e.emits;let o={},a=!1;if(!E(e)){const r=e=>{const n=Tt(e,t,!0);n&&(a=!0,v(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||a?(w(s)?s.forEach((e=>o[e]=null)):v(o,s),r.set(e,o),o):(r.set(e,null),null)}function St(e,t){return!(!e||!m(t))&&(t=t.slice(2).replace(/Once$/,""),_(e,t[0].toLowerCase()+t.slice(1))||_(e,j(t))||_(e,t))}Promise.resolve();let Ct=null,Ot=null;function At(e){const t=Ct;return Ct=e,Ot=e&&e.type.__scopeId||null,t}function Rt(e){Ot=e}function xt(){Ot=null}function Nt(e,t=Ct,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&dr(-1);const i=At(t),s=e(...n);return At(i),r._d&&dr(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function Pt(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:f,setupState:h,ctx:p,inheritAttrs:m}=e;let v,y;const b=At(e);try{if(4&n.shapeFlag){const e=i||r;v=Sr(u.call(e,e,d,s,h,f,p)),y=c}else{const e=t;0,v=Sr(e.length>1?e(s,{attrs:c,slots:a,emit:l}):e(s,null)),y=t.props?c:Lt(c)}}catch(w){ar.length=0,qr(w,e,1),v=wr(sr)}let _=v;if(y&&!1!==m){const e=Object.keys(y),{shapeFlag:t}=_;e.length&&7&t&&(o&&e.some(g)&&(y=Mt(y,o)),_=Ir(_,y))}return n.dirs&&(_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),v=_,At(b),v}const Lt=e=>{let t;for(const n in e)("class"===n||"style"===n||m(n))&&((t||(t={}))[n]=e[n]);return t},Mt=(e,t)=>{const n={};for(const r in e)g(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Dt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!St(n,s))return!0}return!1}function Ut(e,t){if(Mr){let n=Mr.provides;const r=Mr.parent&&Mr.parent.provides;r===n&&(n=Mr.provides=Object.create(r)),n[e]=t}else;}function jt(e,t,n=!1){const r=Mr||Ct;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&E(t)?t.call(r.proxy):t}}const Ft=[Function,Array],zt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ft,onEnter:Ft,onAfterEnter:Ft,onEnterCancelled:Ft,onBeforeLeave:Ft,onLeave:Ft,onAfterLeave:Ft,onLeaveCancelled:Ft,onBeforeAppear:Ft,onAppear:Ft,onAfterAppear:Ft,onAppearCancelled:Ft},setup(e,{slots:t}){const n=Dr(),r=function(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return rn((()=>{e.isMounted=!0})),an((()=>{e.isUnmounting=!0})),e}();let i;return()=>{const s=t.default&&qt(t.default(),!0);if(!s||!s.length)return;const o=ot(e),{mode:a}=o,c=s[0];if(r.isLeaving)return Bt(c);const l=Wt(c);if(!l)return Bt(c);const u=$t(l,o,r,n);Ht(l,u);const d=n.subTree,f=d&&Wt(d);let h=!1;const{getTransitionKey:p}=l.type;if(p){const e=p();void 0===i?i=e:e!==i&&(i=e,h=!0)}if(f&&f.type!==sr&&(!gr(l,f)||h)){const e=$t(f,o,r,n);if(Ht(f,e),"out-in"===a)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},Bt(c);"in-out"===a&&l.type!==sr&&(e.delayLeave=(e,t,n)=>{Vt(r,f)[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return c}}};function Vt(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function $t(e,t,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:h,onLeaveCancelled:p,onBeforeAppear:m,onAppear:g,onAfterAppear:v,onAppearCancelled:y}=t,b=String(e.key),_=Vt(n,e),w=(e,t)=>{e&&Hr(e,r,9,t)},I={mode:s,persisted:o,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=m||a}t._leaveCb&&t._leaveCb(!0);const s=_[b];s&&gr(e,s)&&s.el._leaveCb&&s.el._leaveCb(),w(r,[t])},enter(e){let t=c,r=l,s=u;if(!n.isMounted){if(!i)return;t=g||c,r=v||l,s=y||u}let o=!1;const a=e._enterCb=t=>{o||(o=!0,w(t?s:r,[e]),I.delayedLeave&&I.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();w(d,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),w(n?p:h,[t]),t._leaveCb=void 0,_[i]===e&&delete _[i])};_[i]=e,f?(f(t,o),f.length<=1&&o()):o()},clone:e=>$t(e,t,n,r)};return I}function Bt(e){if(Jt(e))return(e=Ir(e)).children=null,e}function Wt(e){return Jt(e)?e.children?e.children[0]:void 0:e}function Ht(e,t){6&e.shapeFlag&&e.component?Ht(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function qt(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const s=e[i];s.type===rr?(128&s.patchFlag&&r++,n=n.concat(qt(s.children,t))):(t||s.type!==sr)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function Kt(e){return E(e)?{setup:e,name:e.name}:e}const Gt=e=>!!e.type.__asyncLoader,Jt=e=>e.type.__isKeepAlive;function Xt(e,t){Zt(e,"a",t)}function Yt(e,t){Zt(e,"da",t)}function Zt(e,t,n=Mr){const r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(en(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Jt(e.parent.vnode)&&Qt(r,t,n,e),e=e.parent}}function Qt(e,t,n,r){const i=en(t,e,r,!0);cn((()=>{y(r[t],i)}),n)}function en(e,t,n=Mr,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;le(),Ur(n);const i=Hr(t,n,e,r);return jr(),ue(),i});return r?i.unshift(s):i.push(s),s}}const tn=e=>(t,n=Mr)=>(!zr||"sp"===e)&&en(e,t,n),nn=tn("bm"),rn=tn("m"),sn=tn("bu"),on=tn("u"),an=tn("bum"),cn=tn("um"),ln=tn("sp"),un=tn("rtg"),dn=tn("rtc");function fn(e,t=Mr){en("ec",e,t)}let hn=!0;function pn(e){const t=vn(e),n=e.proxy,r=e.ctx;hn=!1,t.beforeCreate&&mn(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:p,updated:m,activated:g,deactivated:v,beforeDestroy:y,beforeUnmount:b,destroyed:_,unmounted:I,render:k,renderTracked:T,renderTriggered:S,errorCaptured:O,serverPrefetch:A,expose:R,inheritAttrs:x,components:N,directives:P,filters:L}=t;if(l&&function(e,t,n=f,r=!1){w(e)&&(e=wn(e));for(const i in e){const n=e[i];let s;s=C(n)?"default"in n?jt(n.from||i,n.default,!0):jt(n.from||i):jt(n),ft(s)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[i]=s}}(l,r,null,e.appContext.config.unwrapInjectedRef),o)for(const f in o){const e=o[f];E(e)&&(r[f]=e.bind(n))}if(i){const t=i.call(n,n);C(t)&&(e.data=et(t))}if(hn=!0,s)for(const w in s){const e=s[w],t=kt({get:E(e)?e.bind(n,n):E(e.get)?e.get.bind(n,n):f,set:!E(e)&&E(e.set)?e.set.bind(n):f});Object.defineProperty(r,w,{enumerable:!0,configurable:!0,get:()=>t.value,set:e=>t.value=e})}if(a)for(const f in a)gn(a[f],r,n,f);if(c){const e=E(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{Ut(t,e[t])}))}function M(e,t){w(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(u&&mn(u,e,"c"),M(nn,d),M(rn,h),M(sn,p),M(on,m),M(Xt,g),M(Yt,v),M(fn,O),M(dn,T),M(un,S),M(an,b),M(cn,I),M(ln,A),w(R))if(R.length){const t=e.exposed||(e.exposed={});R.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});k&&e.render===f&&(e.render=k),null!=x&&(e.inheritAttrs=x),N&&(e.components=N),P&&(e.directives=P)}function mn(e,t,n){Hr(w(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function gn(e,t,n,r){const i=r.includes(".")?bi(n,r):()=>n[r];if(T(e)){const n=t[e];E(n)&&gi(i,n)}else if(E(e))gi(i,e.bind(n));else if(C(e))if(w(e))e.forEach((e=>gn(e,t,n,r)));else{const r=E(e.handler)?e.handler.bind(n):t[e.handler];E(r)&&gi(i,r,e)}}function vn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((e=>yn(c,e,o,!0))),yn(c,t,o)):c=t,s.set(t,c),c}function yn(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&yn(e,s,n,!0),i&&i.forEach((t=>yn(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=bn[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const bn={data:_n,props:kn,emits:kn,methods:kn,computed:kn,beforeCreate:In,created:In,beforeMount:In,mounted:In,beforeUpdate:In,updated:In,beforeDestroy:In,beforeUnmount:In,destroyed:In,unmounted:In,activated:In,deactivated:In,errorCaptured:In,serverPrefetch:In,components:kn,directives:kn,watch:function(e,t){if(!e)return t;if(!t)return e;const n=v(Object.create(null),e);for(const r in t)n[r]=In(e[r],t[r]);return n},provide:_n,inject:function(e,t){return kn(wn(e),wn(t))}};function _n(e,t){return t?e?function(){return v(E(e)?e.call(this,this):e,E(t)?t.call(this,this):t)}:t:e}function wn(e){if(w(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function In(e,t){return e?[...new Set([].concat(e,t))]:t}function kn(e,t){return e?v(v(Object.create(null),e),t):t}function En(e,t,n,r=!1){const i={},s={};B(s,vr,1),e.propsDefaults=Object.create(null),Tn(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:nt(i,!1,Ce,Ke,Xe):e.type.props?e.props=i:e.props=s,e.attrs=s}function Tn(e,t,n,r){const[i,s]=e.propsOptions;let o,a=!1;if(t)for(let c in t){if(P(c))continue;const l=t[c];let u;i&&_(i,u=D(c))?s&&s.includes(u)?(o||(o={}))[u]=l:n[u]=l:St(e.emitsOptions,c)||c in r&&l===r[c]||(r[c]=l,a=!0)}if(s){const t=ot(n),r=o||u;for(let o=0;o<s.length;o++){const a=s[o];n[a]=Sn(i,t,a,r[a],e,!_(r,a))}}return a}function Sn(e,t,n,r,i,s){const o=e[n];if(null!=o){const e=_(o,"default");if(e&&void 0===r){const e=o.default;if(o.type!==Function&&E(e)){const{propsDefaults:s}=i;n in s?r=s[n]:(Ur(i),r=s[n]=e.call(null,t),jr())}else r=e}o[0]&&(s&&!e?r=!1:!o[1]||""!==r&&r!==j(n)||(r=!0))}return r}function Cn(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let c=!1;if(!E(e)){const r=e=>{c=!0;const[n,r]=Cn(e,t,!0);v(o,n),r&&a.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!c)return r.set(e,d),d;if(w(s))for(let d=0;d<s.length;d++){const e=D(s[d]);On(e)&&(o[e]=u)}else if(s)for(const u in s){const e=D(u);if(On(e)){const t=s[u],n=o[e]=w(t)||E(t)?{type:t}:t;if(n){const t=xn(Boolean,n.type),r=xn(String,n.type);n[0]=t>-1,n[1]=r<0||t<r,(t>-1||_(n,"default"))&&a.push(e)}}}const l=[o,a];return r.set(e,l),l}function On(e){return"$"!==e[0]}function An(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function Rn(e,t){return An(e)===An(t)}function xn(e,t){return w(t)?t.findIndex((t=>Rn(t,e))):E(t)&&Rn(t,e)?0:-1}const Nn=e=>"_"===e[0]||"$stable"===e,Pn=e=>w(e)?e.map(Sr):[Sr(e)],Ln=(e,t,n)=>{const r=Nt(((...e)=>Pn(t(...e))),n);return r._c=!1,r},Mn=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Nn(i))continue;const n=e[i];if(E(n))t[i]=Ln(0,n,r);else if(null!=n){const e=Pn(n);t[i]=()=>e}}},Dn=(e,t)=>{const n=Pn(t);e.slots.default=()=>n};function Un(e,t){if(null===Ct)return e;const n=Ct.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[e,s,o,a=u]=t[i];E(e)&&(e={mounted:e,updated:e}),e.deep&&_i(s),r.push({dir:e,instance:n,value:s,oldValue:void 0,arg:o,modifiers:a})}return e}function jn(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(le(),Hr(c,n,8,[e.el,a,e,t]),ue())}}function Fn(){return{app:null,config:{isNativeTag:h,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zn=0;function Vn(e,t){return function(n,r=null){null==r||C(r)||(r=null);const i=Fn(),s=new Set;let o=!1;const a=i.app={_uid:zn++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Ii,get config(){return i.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&E(e.install)?(s.add(e),e.install(a,...t)):E(e)&&(s.add(e),e(a,...t))),a),mixin:e=>(i.mixins.includes(e)||i.mixins.push(e),a),component:(e,t)=>t?(i.components[e]=t,a):i.components[e],directive:(e,t)=>t?(i.directives[e]=t,a):i.directives[e],mount(s,c,l){if(!o){const u=wr(n,r);return u.appContext=i,c&&t?t(u,s):e(u,s,l),o=!0,a._container=s,s.__vue_app__=a,Br(u.component)||u.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(i.provides[e]=t,a)};return a}}const $n=function(e,t){t&&t.pendingBranch?w(e)?t.effects.push(...e):t.effects.push(e):li(e,ti,ei,ni)};function Bn(e){return function(e,t){(H||(H="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})).__VUE__=!0;const{insert:n,remove:r,patchProp:i,createElement:s,createText:o,createComment:a,setText:c,setElementText:l,parentNode:h,nextSibling:p,setScopeId:m=f,cloneNode:g,insertStaticContent:y}=e,b=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!gr(e,t)&&(r=ne(e),Y(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:d}=t;switch(l){case ir:w(e,t,n,r);break;case sr:I(e,t,n,r);break;case or:null==e&&k(t,n,r,o);break;case rr:M(e,t,n,r,i,s,o,a,c);break;default:1&d?S(e,t,n,r,i,s,o,a,c):6&d?U(e,t,n,r,i,s,o,a,c):(64&d||128&d)&&l.process(e,t,n,r,i,s,o,a,c,ie)}null!=u&&i&&Wn(u,e&&e.ref,s,t||e,!t)},w=(e,t,r,i)=>{if(null==e)n(t.el=o(t.children),r,i);else{const n=t.el=e.el;t.children!==e.children&&c(n,t.children)}},I=(e,t,r,i)=>{null==e?n(t.el=a(t.children||""),r,i):t.el=e.el},k=(e,t,n,r)=>{[e.el,e.anchor]=y(e.children,t,n,r)},E=({el:e,anchor:t},r,i)=>{let s;for(;e&&e!==t;)s=p(e),n(e,r,i),e=s;n(t,r,i)},T=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=p(e),r(e),e=n;r(t)},S=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?C(t,n,r,i,s,o,a,c):x(e,t,i,s,o,a,c)},C=(e,t,r,o,a,c,u,d)=>{let f,h;const{type:p,props:m,shapeFlag:v,transition:y,patchFlag:b,dirs:_}=e;if(e.el&&void 0!==g&&-1===b)f=e.el=g(e.el);else{if(f=e.el=s(e.type,c,m&&m.is,m),8&v?l(f,e.children):16&v&&R(e.children,f,null,o,a,c&&"foreignObject"!==p,u,d),_&&jn(e,null,o,"created"),m){for(const t in m)"value"===t||P(t)||i(f,t,null,m[t],c,e.children,o,a,te);"value"in m&&i(f,"value",null,m.value),(h=m.onVnodeBeforeMount)&&Hn(h,o,e)}A(f,e,e.scopeId,u,o)}_&&jn(e,null,o,"beforeMount");const w=(!a||a&&!a.pendingBranch)&&y&&!y.persisted;w&&y.beforeEnter(f),n(f,t,r),((h=m&&m.onVnodeMounted)||w||_)&&$n((()=>{h&&Hn(h,o,e),w&&y.enter(f),_&&jn(e,null,o,"mounted")}),a)},A=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){if(t===i.subTree){const t=i.vnode;A(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},R=(e,t,n,r,i,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?Cr(e[l]):Sr(e[l]);b(null,c,t,n,r,i,s,o,a)}},x=(e,t,n,r,s,o,a)=>{const c=t.el=e.el;let{patchFlag:d,dynamicChildren:f,dirs:h}=t;d|=16&e.patchFlag;const p=e.props||u,m=t.props||u;let g;(g=m.onVnodeBeforeUpdate)&&Hn(g,n,t,e),h&&jn(t,e,n,"beforeUpdate");const v=s&&"foreignObject"!==t.type;if(f?N(e.dynamicChildren,f,c,n,r,v,o):a||q(e,t,c,null,n,r,v,o,!1),d>0){if(16&d)L(c,t,p,m,n,r,s);else if(2&d&&p.class!==m.class&&i(c,"class",null,m.class,s),4&d&&i(c,"style",p.style,m.style,s),8&d){const o=t.dynamicProps;for(let t=0;t<o.length;t++){const a=o[t],l=p[a],u=m[a];u===l&&"value"!==a||i(c,a,l,u,s,e.children,n,r,te)}}1&d&&e.children!==t.children&&l(c,t.children)}else a||null!=f||L(c,t,p,m,n,r,s);((g=m.onVnodeUpdated)||h)&&$n((()=>{g&&Hn(g,n,t,e),h&&jn(t,e,n,"updated")}),r)},N=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===rr||!gr(c,l)||70&c.shapeFlag)?h(c.el):n;b(c,l,u,null,r,i,s,o,!0)}},L=(e,t,n,r,s,o,a)=>{if(n!==r){for(const c in r){if(P(c))continue;const l=r[c],u=n[c];l!==u&&"value"!==c&&i(e,c,u,l,a,t.children,s,o,te)}if(n!==u)for(const c in n)P(c)||c in r||i(e,c,n[c],null,a,t.children,s,o,te);"value"in r&&i(e,"value",n.value,r.value)}},M=(e,t,r,i,s,a,c,l,u)=>{const d=t.el=e?e.el:o(""),f=t.anchor=e?e.anchor:o("");let{patchFlag:h,dynamicChildren:p,slotScopeIds:m}=t;m&&(l=l?l.concat(m):m),null==e?(n(d,r,i),n(f,r,i),R(t.children,r,f,s,a,c,l,u)):h>0&&64&h&&p&&e.dynamicChildren?(N(e.dynamicChildren,p,r,s,a,c,l),(null!=t.key||s&&t===s.subTree)&&qn(e,t,!0)):q(e,t,r,f,s,a,c,l,u)},U=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):F(t,n,r,i,s,o,c):z(e,t,c)},F=(e,t,n,r,i,s,o)=>{const a=e.component=function(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Pr,s={uid:Lr++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,update:null,scope:new G(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cn(r,i),emitsOptions:Tt(r,i),emit:null,emitted:null,propsDefaults:u,inheritAttrs:r.inheritAttrs,ctx:u,data:u,props:u,attrs:u,slots:u,refs:u,setupState:u,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};s.ctx={_:s},s.root=t?t.root:s,s.emit=Et.bind(null,s),e.ce&&e.ce(s);return s}(e,r,i);if(Jt(e)&&(a.ctx.renderer=ie),function(e,t=!1){zr=t;const{props:n,children:r}=e.vnode,i=Fr(e);En(e,n,i,t),((e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=ot(t),B(t,"_",n)):Mn(t,e.slots={})}else e.slots={},t&&Dn(e,t);B(e.slots,vr,1)})(e,r);const s=i?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=at(new Proxy(e.ctx,Nr));const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?function(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=function(e){return new Proxy(e.attrs,{get:(t,n)=>(de(e,0,"$attrs"),t[n])})}(e))},slots:e.slots,emit:e.emit,expose:t}}(e):null;Ur(e),le();const i=Wr(r,e,0,[e.props,n]);if(ue(),jr(),O(i)){if(i.then(jr,jr),t)return i.then((n=>{Vr(e,n,t)})).catch((t=>{qr(t,e,0)}));e.asyncDep=i}else Vr(e,i,t)}else $r(e,t)}(e,t):void 0;zr=!1}(a),a.asyncDep){if(i&&i.registerDep(a,V),!e.el){const e=a.subTree=wr(sr);I(null,e,t,n)}}else V(a,e,t,n,i,s,o)},z=(e,t,n)=>{const r=t.component=e.component;if(function(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Dt(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?Dt(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!St(l,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void W(r,t,n);r.next=t,function(e){const t=Jr.indexOf(e);t>Xr&&Jr.splice(t,1)}(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},V=(e,t,n,r,i,s,o)=>{const a=new se((()=>{if(e.isMounted){let t,{next:n,bu:r,u:c,parent:l,vnode:u}=e,d=n;a.allowRecurse=!1,n?(n.el=u.el,W(e,n,o)):n=u,r&&$(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Hn(t,l,n,u),a.allowRecurse=!0;const f=Pt(e),p=e.subTree;e.subTree=f,b(p,f,h(p.el),ne(p),e,i,s),n.el=f.el,null===d&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,f.el),c&&$n(c,i),(t=n.props&&n.props.onVnodeUpdated)&&$n((()=>Hn(t,l,n,u)),i)}else{let o;const{el:c,props:l}=t,{bm:u,m:d,parent:f}=e,h=Gt(t);if(a.allowRecurse=!1,u&&$(u),!h&&(o=l&&l.onVnodeBeforeMount)&&Hn(o,f,t),a.allowRecurse=!0,c&&ae){const n=()=>{e.subTree=Pt(e),ae(c,e.subTree,e,i,null)};h?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{const o=e.subTree=Pt(e);b(null,o,n,r,e,i,s),t.el=o.el}if(d&&$n(d,i),!h&&(o=l&&l.onVnodeMounted)){const e=t;$n((()=>Hn(o,f,e)),i)}256&t.shapeFlag&&e.a&&$n(e.a,i),e.isMounted=!0,t=n=r=null}}),(()=>ai(e.update)),e.scope),c=e.update=a.run.bind(a);c.id=e.uid,a.allowRecurse=c.allowRecurse=!0,c()},W=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=ot(i),[c]=e.propsOptions;let l=!1;if(!(r||o>0)||16&o){let r;Tn(e,t,i,s)&&(l=!0);for(const s in a)t&&(_(t,s)||(r=j(s))!==s&&_(t,r))||(c?!n||void 0===n[s]&&void 0===n[r]||(i[s]=Sn(c,a,s,void 0,e,!0)):delete i[s]);if(s!==a)for(const e in s)t&&_(t,e)||(delete s[e],l=!0)}else if(8&o){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];const u=t[o];if(c)if(_(s,o))u!==s[o]&&(s[o]=u,l=!0);else{const t=D(o);i[t]=Sn(c,a,t,u,e,!1)}else u!==s[o]&&(s[o]=u,l=!0)}}l&&pe(e,"set","$attrs")}(e,t.props,r,n),((e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=u;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:(v(i,t),n||1!==e||delete i._):(s=!t.$stable,Mn(t,i)),o=t}else t&&(Dn(e,t),o={default:1});if(s)for(const a in i)Nn(a)||a in o||delete i[a]})(e,t.children,n),le(),ui(void 0,e.update),ue()},q=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,d=e?e.shapeFlag:0,f=t.children,{patchFlag:h,shapeFlag:p}=t;if(h>0){if(128&h)return void J(u,f,n,r,i,s,o,a,c);if(256&h)return void K(u,f,n,r,i,s,o,a,c)}8&p?(16&d&&te(u,i,s),f!==u&&l(n,f)):16&d?16&p?J(u,f,n,r,i,s,o,a,c):te(u,i,s,!0):(8&d&&l(n,""),16&p&&R(f,n,r,i,s,o,a,c))},K=(e,t,n,r,i,s,o,a,c)=>{t=t||d;const l=(e=e||d).length,u=t.length,f=Math.min(l,u);let h;for(h=0;h<f;h++){const r=t[h]=c?Cr(t[h]):Sr(t[h]);b(e[h],r,n,null,i,s,o,a,c)}l>u?te(e,i,s,!0,!1,f):R(t,n,r,i,s,o,a,c,f)},J=(e,t,n,r,i,s,o,a,c)=>{let l=0;const u=t.length;let f=e.length-1,h=u-1;for(;l<=f&&l<=h;){const r=e[l],u=t[l]=c?Cr(t[l]):Sr(t[l]);if(!gr(r,u))break;b(r,u,n,null,i,s,o,a,c),l++}for(;l<=f&&l<=h;){const r=e[f],l=t[h]=c?Cr(t[h]):Sr(t[h]);if(!gr(r,l))break;b(r,l,n,null,i,s,o,a,c),f--,h--}if(l>f){if(l<=h){const e=h+1,d=e<u?t[e].el:r;for(;l<=h;)b(null,t[l]=c?Cr(t[l]):Sr(t[l]),n,d,i,s,o,a,c),l++}}else if(l>h)for(;l<=f;)Y(e[l],i,s,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=h;l++){const e=t[l]=c?Cr(t[l]):Sr(t[l]);null!=e.key&&g.set(e.key,l)}let v,y=0;const _=h-m+1;let w=!1,I=0;const k=new Array(_);for(l=0;l<_;l++)k[l]=0;for(l=p;l<=f;l++){const r=e[l];if(y>=_){Y(r,i,s,!0);continue}let u;if(null!=r.key)u=g.get(r.key);else for(v=m;v<=h;v++)if(0===k[v-m]&&gr(r,t[v])){u=v;break}void 0===u?Y(r,i,s,!0):(k[u-m]=l+1,u>=I?I=u:w=!0,b(r,t[u],n,null,i,s,o,a,c),y++)}const E=w?function(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];for(;s-- >0;)n[s]=o,o=t[o];return n}(k):d;for(v=E.length-1,l=_-1;l>=0;l--){const e=m+l,d=t[e],f=e+1<u?t[e+1].el:r;0===k[l]?b(null,d,n,f,i,s,o,a,c):w&&(v<0||l!==E[v]?X(d,n,f,2):v--)}}},X=(e,t,r,i,s=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void X(e.component.subTree,t,r,i);if(128&u)return void e.suspense.move(t,r,i);if(64&u)return void a.move(e,t,r,ie);if(a===rr){n(o,t,r);for(let e=0;e<l.length;e++)X(l[e],t,r,i);return void n(e.anchor,t,r)}if(a===or)return void E(e,t,r);if(2!==i&&1&u&&c)if(0===i)c.beforeEnter(o),n(o,t,r),$n((()=>c.enter(o)),s);else{const{leave:e,delayLeave:i,afterLeave:s}=c,a=()=>n(o,t,r),l=()=>{e(o,(()=>{a(),s&&s()}))};i?i(o,a,l):l()}else n(o,t,r)},Y=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f}=e;if(null!=a&&Wn(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const h=1&u&&f,p=!Gt(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&Hn(m,t,e),6&u)ee(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);h&&jn(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,ie,r):l&&(s!==rr||d>0&&64&d)?te(l,t,n,!1,!0):(s===rr&&384&d||!i&&16&u)&&te(c,t,n),r&&Z(e)}(p&&(m=o&&o.onVnodeUnmounted)||h)&&$n((()=>{m&&Hn(m,t,e),h&&jn(e,null,t,"unmounted")}),n)},Z=e=>{const{type:t,el:n,anchor:i,transition:s}=e;if(t===rr)return void Q(n,i);if(t===or)return void T(e);const o=()=>{r(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:r}=s,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},Q=(e,t)=>{let n;for(;e!==t;)n=p(e),r(e),e=n;r(t)},ee=(e,t,n)=>{const{bum:r,scope:i,update:s,subTree:o,um:a}=e;r&&$(r),i.stop(),s&&(s.active=!1,Y(o,e,t,n)),a&&$n(a,t),$n((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},te=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)Y(e[o],t,n,r,i)},ne=e=>6&e.shapeFlag?ne(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),re=(e,t,n)=>{null==e?t._vnode&&Y(t._vnode,null,null,!0):b(t._vnode||null,e,t,null,null,null,n),di(),t._vnode=e},ie={p:b,um:Y,m:X,r:Z,mt:F,mc:R,pc:q,pbc:N,n:ne,o:e};let oe,ae;t&&([oe,ae]=t(ie));return{render:re,hydrate:oe,createApp:Vn(re,oe)}}(e)}function Wn(e,t,n,r,i=!1){if(w(e))return void e.forEach(((e,s)=>Wn(e,t&&(w(t)?t[s]:t),n,r,i)));if(Gt(r)&&!i)return;const s=4&r.shapeFlag?Br(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=e,l=t&&t.r,d=a.refs===u?a.refs={}:a.refs,f=a.setupState;if(null!=l&&l!==c&&(T(l)?(d[l]=null,_(f,l)&&(f[l]=null)):ft(l)&&(l.value=null)),T(c)){const e=()=>{d[c]=o,_(f,c)&&(f[c]=o)};o?(e.id=-1,$n(e,n)):e()}else if(ft(c)){const e=()=>{c.value=o};o?(e.id=-1,$n(e,n)):e()}else E(c)&&Wr(c,a,12,[o,d])}function Hn(e,t,n,r=null){Hr(e,t,7,[n,r])}function qn(e,t,n=!1){const r=e.children,i=t.children;if(w(r)&&w(i))for(let s=0;s<r.length;s++){const e=r[s];let t=i[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[s]=Cr(i[s]),t.el=e.el),n||qn(e,t))}}const Kn=e=>e&&(e.disabled||""===e.disabled),Gn=e=>"undefined"!=typeof SVGElement&&e instanceof SVGElement,Jn=(e,t)=>{const n=e&&e.to;if(T(n)){if(t){return t(n)}return null}return n};function Xn(e,t,n,{o:{insert:r},m:i},s=2){0===s&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=e,d=2===s;if(d&&r(o,t,n),(!d||Kn(u))&&16&c)for(let f=0;f<l.length;f++)i(l[f],t,n,2);d&&r(a,t,n)}const Yn={__isTeleport:!0,process(e,t,n,r,i,s,o,a,c,l){const{mc:u,pc:d,pbc:f,o:{insert:h,querySelector:p,createText:m,createComment:g}}=l,v=Kn(t.props);let{shapeFlag:y,children:b,dynamicChildren:_}=t;if(null==e){const e=t.el=m(""),l=t.anchor=m("");h(e,n,r),h(l,n,r);const d=t.target=Jn(t.props,p),f=t.targetAnchor=m("");d&&(h(f,d),o=o||Gn(d));const g=(e,t)=>{16&y&&u(b,e,t,i,s,o,a,c)};v?g(n,l):d&&g(d,f)}else{t.el=e.el;const r=t.anchor=e.anchor,u=t.target=e.target,h=t.targetAnchor=e.targetAnchor,m=Kn(e.props),g=m?n:u,y=m?r:h;if(o=o||Gn(u),_?(f(e.dynamicChildren,_,g,i,s,o,a),qn(e,t,!0)):c||d(e,t,g,y,i,s,o,a,!1),v)m||Xn(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=Jn(t.props,p);e&&Xn(t,e,null,l,0)}else m&&Xn(t,u,h,l,1)}},remove(e,t,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:d,props:f}=e;if(d&&s(u),(o||!Kn(f))&&(s(l),16&a))for(let h=0;h<c.length;h++){const e=c[h];i(e,t,n,!0,!!e.dynamicChildren)}},move:Xn,hydrate:function(e,t,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=t.target=Jn(t.props,c);if(u){const c=u._lpa||u.firstChild;16&t.shapeFlag&&(Kn(t.props)?(t.anchor=l(o(e),t,a(e),n,r,i,s),t.targetAnchor=c):(t.anchor=o(e),t.targetAnchor=l(c,t,u,n,r,i,s)),u._lpa=t.targetAnchor&&o(t.targetAnchor))}return t.anchor&&o(t.anchor)}};function Zn(e,t){return tr("components",e,!0,t)||e}const Qn=Symbol();function er(e){return T(e)?tr("components",e,!1)||e:e||Qn}function tr(e,t,n=!0,r=!1){const i=Ct||Mr;if(i){const n=i.type;if("components"===e){const e=function(e){return E(e)&&e.displayName||e.name}(n);if(e&&(e===t||e===D(t)||e===F(D(t))))return n}const s=nr(i[e]||n[e],t)||nr(i.appContext[e],t);return!s&&r?n:s}}function nr(e,t){return e&&(e[t]||e[D(t)]||e[F(D(t))])}const rr=Symbol(void 0),ir=Symbol(void 0),sr=Symbol(void 0),or=Symbol(void 0),ar=[];let cr=null;function lr(e=!1){ar.push(cr=e?null:[])}let ur=1;function dr(e){ur+=e}function fr(e){return e.dynamicChildren=ur>0?cr||d:null,ar.pop(),cr=ar[ar.length-1]||null,ur>0&&cr&&cr.push(e),e}function hr(e,t,n,r,i,s){return fr(_r(e,t,n,r,i,s,!0))}function pr(e,t,n,r,i){return fr(wr(e,t,n,r,i,!0))}function mr(e){return!!e&&!0===e.__v_isVNode}function gr(e,t){return e.type===t.type&&e.key===t.key}const vr="__vInternal",yr=({key:e})=>null!=e?e:null,br=({ref:e})=>null!=e?T(e)||ft(e)||E(e)?{i:Ct,r:e}:e:null;function _r(e,t=null,n=null,r=0,i=null,s=(e===rr?0:1),o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&yr(t),ref:t&&br(t),scopeId:Ot,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Or(c,n),128&s&&e.normalize(c)):n&&(c.shapeFlag|=T(n)?8:16),ur>0&&!o&&cr&&(c.patchFlag>0||6&s)&&32!==c.patchFlag&&cr.push(c),c}const wr=function(e,t=null,n=null,i=0,s=null,o=!1){e&&e!==Qn||(e=sr);if(mr(e)){const r=Ir(e,t,!0);return n&&Or(r,n),r}c=e,E(c)&&"__vccOpts"in c&&(e=e.__vccOpts);var c;if(t){t=function(e){return e?st(e)||vr in e?v({},e):e:null}(t);let{class:e,style:n}=t;e&&!T(e)&&(t.class=a(e)),C(n)&&(st(n)&&!w(n)&&(n=v({},n)),t.style=r(n))}const l=T(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:C(e)?4:E(e)?2:0;return _r(e,t,n,i,s,l,o,!0)};function Ir(e,t,n=!1){const{props:i,ref:s,patchFlag:o,children:c}=e,l=t?function(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=a([t.class,i.class]));else if("style"===e)t.style=r([t.style,i.style]);else if(m(e)){const n=t[e],r=i[e];n===r||w(n)&&n.includes(r)||(t[e]=n?[].concat(n,r):r)}else""!==e&&(t[e]=i[e])}return t}(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&yr(l),ref:t&&t.ref?n&&s?w(s)?s.concat(br(t)):[s,br(t)]:br(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==rr?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ir(e.ssContent),ssFallback:e.ssFallback&&Ir(e.ssFallback),el:e.el,anchor:e.anchor}}function kr(e=" ",t=0){return wr(ir,null,e,t)}function Er(e,t){const n=wr(or,null,e);return n.staticCount=t,n}function Tr(e="",t=!1){return t?(lr(),pr(sr,null,e)):wr(sr,null,e)}function Sr(e){return null==e||"boolean"==typeof e?wr(sr):w(e)?wr(rr,null,e.slice()):"object"==typeof e?Cr(e):wr(ir,null,String(e))}function Cr(e){return null===e.el||e.memo?e:Ir(e)}function Or(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(w(t))n=16;else if("object"==typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Or(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||vr in t?3===r&&Ct&&(1===Ct.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Ct}}else E(t)?(t={default:t,_ctx:Ct},n=32):(t=String(t),64&r?(n=16,t=[kr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ar(e,t,n,r){let i;const s=n&&n[r];if(w(e)||T(e)){i=new Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,s&&s[n])}else if("number"==typeof e){i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,s&&s[n])}else if(C(e))if(e[Symbol.iterator])i=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];i[r]=t(e[o],o,r,s&&s[r])}}else i=[];return n&&(n[r]=i),i}const Rr=e=>e?Fr(e)?Br(e)||e.proxy:Rr(e.parent):null,xr=v(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Rr(e.parent),$root:e=>Rr(e.root),$emit:e=>e.emit,$options:e=>vn(e),$forceUpdate:e=>()=>ai(e.update),$nextTick:e=>oi.bind(e.proxy),$watch:e=>yi.bind(e)}),Nr={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=e;let l;if("$"!==t[0]){const a=o[t];if(void 0!==a)switch(a){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(r!==u&&_(r,t))return o[t]=1,r[t];if(i!==u&&_(i,t))return o[t]=2,i[t];if((l=e.propsOptions[0])&&_(l,t))return o[t]=3,s[t];if(n!==u&&_(n,t))return o[t]=4,n[t];hn&&(o[t]=0)}}const d=xr[t];let f,h;return d?("$attrs"===t&&de(e,0,t),d(e)):(f=a.__cssModules)&&(f=f[t])?f:n!==u&&_(n,t)?(o[t]=4,n[t]):(h=c.config.globalProperties,_(h,t)?h[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;if(i!==u&&_(i,t))i[t]=n;else if(r!==u&&_(r,t))r[t]=n;else if(_(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||e!==u&&_(e,o)||t!==u&&_(t,o)||(a=s[0])&&_(a,o)||_(r,o)||_(xr,o)||_(i.config.globalProperties,o)}},Pr=Fn();let Lr=0;let Mr=null;const Dr=()=>Mr||Ct,Ur=e=>{Mr=e,e.scope.on()},jr=()=>{Mr&&Mr.scope.off(),Mr=null};function Fr(e){return 4&e.vnode.shapeFlag}let zr=!1;function Vr(e,t,n){E(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:C(t)&&(e.setupState=yt(t)),$r(e,n)}function $r(e,t,n){const r=e.type;e.render||(e.render=r.render||f),Ur(e),le(),pn(e),ue(),jr()}function Br(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(yt(at(e.exposed)),{get:(t,n)=>n in t?t[n]:n in xr?xr[n](e):void 0}))}function Wr(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){qr(s,t,n)}return i}function Hr(e,t,n,r){if(E(e)){const i=Wr(e,t,n,r);return i&&O(i)&&i.catch((e=>{qr(e,t,n)})),i}const i=[];for(let s=0;s<e.length;s++)i.push(Hr(e[s],t,n,r));return i}function qr(e,t,n,r=!0){t&&t.vnode;if(t){let r=t.parent;const i=t.proxy,s=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void Wr(o,null,10,[e,i,s])}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let Kr=!1,Gr=!1;const Jr=[];let Xr=0;const Yr=[];let Zr=null,Qr=0;const ei=[];let ti=null,ni=0;const ri=Promise.resolve();let ii=null,si=null;function oi(e){const t=ii||ri;return e?t.then(this?e.bind(this):e):t}function ai(e){Jr.length&&Jr.includes(e,Kr&&e.allowRecurse?Xr+1:Xr)||e===si||(null==e.id?Jr.push(e):Jr.splice(function(e){let t=Xr+1,n=Jr.length;for(;t<n;){const r=t+n>>>1;fi(Jr[r])<e?t=r+1:n=r}return t}(e.id),0,e),ci())}function ci(){Kr||Gr||(Gr=!0,ii=ri.then(hi))}function li(e,t,n,r){w(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),ci()}function ui(e,t=null){if(Yr.length){for(si=t,Zr=[...new Set(Yr)],Yr.length=0,Qr=0;Qr<Zr.length;Qr++)Zr[Qr]();Zr=null,Qr=0,si=null,ui(e,t)}}function di(e){if(ei.length){const e=[...new Set(ei)];if(ei.length=0,ti)return void ti.push(...e);for(ti=e,ti.sort(((e,t)=>fi(e)-fi(t))),ni=0;ni<ti.length;ni++)ti[ni]();ti=null,ni=0}}const fi=e=>null==e.id?1/0:e.id;function hi(e){Gr=!1,Kr=!0,ui(e),Jr.sort(((e,t)=>fi(e)-fi(t)));try{for(Xr=0;Xr<Jr.length;Xr++){const e=Jr[Xr];e&&!1!==e.active&&Wr(e,null,14)}}finally{Xr=0,Jr.length=0,di(),Kr=!1,ii=null,(Jr.length||Yr.length||ei.length)&&hi(e)}}function pi(e,t){return vi(e,null,t)}const mi={};function gi(e,t,n){return vi(e,t,n)}function vi(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=u){const a=Mr;let c,l,d=!1,h=!1;if(ft(e)?(c=()=>e.value,d=!!e._shallow):rt(e)?(c=()=>e,r=!0):w(e)?(h=!0,d=e.some(rt),c=()=>e.map((e=>ft(e)?e.value:rt(e)?_i(e):E(e)?Wr(e,a,2):void 0))):c=E(e)?t?()=>Wr(e,a,2):()=>{if(!a||!a.isUnmounted)return l&&l(),Hr(e,a,3,[p])}:f,t&&r){const e=c;c=()=>_i(e())}let p=e=>{l=b.onStop=()=>{Wr(e,a,4)}};if(zr)return p=f,t?n&&Hr(t,a,3,[c(),h?[]:void 0,p]):c(),f;let m=h?[]:mi;const g=()=>{if(b.active)if(t){const e=b.run();(r||d||(h?e.some(((e,t)=>V(e,m[t]))):V(e,m)))&&(l&&l(),Hr(t,a,3,[e,m===mi?void 0:m,p]),m=e)}else b.run()};let v;g.allowRecurse=!!t,v="sync"===i?g:"post"===i?()=>$n(g,a&&a.suspense):()=>{!a||a.isMounted?function(e){li(e,Zr,Yr,Qr)}(g):g()};const b=new se(c,v);return t?n?g():m=b.run():"post"===i?$n(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&y(a.scope.effects,b)}}function yi(e,t,n){const r=this.proxy,i=T(e)?e.includes(".")?bi(r,e):()=>r[e]:e.bind(r,r);let s;E(t)?s=t:(s=t.handler,n=t);const o=Mr;Ur(this);const a=vi(i,s.bind(r),n);return o?Ur(o):jr(),a}function bi(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function _i(e,t){if(!C(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),ft(e))_i(e.value,t);else if(w(e))for(let n=0;n<e.length;n++)_i(e[n],t);else if(k(e)||I(e))e.forEach((e=>{_i(e,t)}));else if(x(e))for(const n in e)_i(e[n],t);return e}function wi(e,t,n){const r=arguments.length;return 2===r?C(t)&&!w(t)?mr(t)?wr(e,null,[t]):wr(e,t):wr(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&mr(n)&&(n=[n]),wr(e,t,n))}const Ii="3.2.24",ki="undefined"!=typeof document?document:null,Ei=new Map,Ti={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?ki.createElementNS("http://www.w3.org/2000/svg",e):ki.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>ki.createTextNode(e),createComment:e=>ki.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ki.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const i=n?n.previousSibling:t.lastChild;let s=Ei.get(e);if(!s){const t=ki.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,s=t.content,r){const e=s.firstChild;for(;e.firstChild;)s.appendChild(e.firstChild);s.removeChild(e)}Ei.set(e,s)}return t.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};const Si=/\s*!important$/;function Ci(e,t,n){if(w(n))n.forEach((n=>Ci(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=function(e,t){const n=Ai[t];if(n)return n;let r=D(t);if("filter"!==r&&r in e)return Ai[t]=r;r=F(r);for(let i=0;i<Oi.length;i++){const n=Oi[i]+r;if(n in e)return Ai[t]=n}return t}(e,t);Si.test(n)?e.setProperty(j(r),n.replace(Si,""),"important"):e[r]=n}}const Oi=["Webkit","Moz","ms"],Ai={};const Ri="http://www.w3.org/1999/xlink";let xi=Date.now,Ni=!1;if("undefined"!=typeof window){xi()>document.createEvent("Event").timeStamp&&(xi=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Ni=!!(e&&Number(e[1])<=53)}let Pi=0;const Li=Promise.resolve(),Mi=()=>{Pi=0};function Di(e,t,n,r){e.addEventListener(t,n,r)}function Ui(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=function(e){let t;if(ji.test(e)){let n;for(t={};n=e.match(ji);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[j(e.slice(2)),t]}(t);if(r){const o=s[t]=function(e,t){const n=e=>{const r=e.timeStamp||xi();(Ni||r>=n.attached-1)&&Hr(function(e,t){if(w(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=(()=>Pi||(Li.then(Mi),Pi=xi()))(),n}(r,i);Di(e,n,o,a)}else o&&(!function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,o,a),s[t]=void 0)}}const ji=/(?:Once|Passive|Capture)$/;const Fi=/^on[a-z]/;const zi="transition",Vi=(e,{slots:t})=>wi(zt,function(e){const t={};for(const v in e)v in $i||(t[v]=e[v]);if(!1===e.css)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,p=function(e){if(null==e)return null;if(C(e))return[Hi(e.enter),Hi(e.leave)];{const t=Hi(e);return[t,t]}}(i),m=p&&p[0],g=p&&p[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:_,onLeave:w,onLeaveCancelled:I,onBeforeAppear:k=y,onAppear:E=b,onAppearCancelled:T=_}=t,S=(e,t,n)=>{Ki(e,t?u:a),Ki(e,t?l:o),n&&n()},O=(e,t)=>{Ki(e,h),Ki(e,f),t&&t()},A=e=>(t,n)=>{const i=e?E:b,o=()=>S(t,e,n);Bi(i,[t,o]),Gi((()=>{Ki(t,e?c:s),qi(t,e?u:a),Wi(i)||Xi(t,r,m,o)}))};return v(t,{onBeforeEnter(e){Bi(y,[e]),qi(e,s),qi(e,o)},onBeforeAppear(e){Bi(k,[e]),qi(e,c),qi(e,l)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){const n=()=>O(e,t);qi(e,d),document.body.offsetHeight,qi(e,f),Gi((()=>{Ki(e,d),qi(e,h),Wi(w)||Xi(e,r,g,n)})),Bi(w,[e,n])},onEnterCancelled(e){S(e,!1),Bi(_,[e])},onAppearCancelled(e){S(e,!0),Bi(T,[e])},onLeaveCancelled(e){O(e),Bi(I,[e])}})}(e),t);Vi.displayName="Transition";const $i={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Vi.props=v({},zt.props,$i);const Bi=(e,t=[])=>{w(e)?e.forEach((e=>e(...t))):e&&e(...t)},Wi=e=>!!e&&(w(e)?e.some((e=>e.length>1)):e.length>1);function Hi(e){return W(e)}function qi(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function Ki(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Gi(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let Ji=0;function Xi(e,t,n,r){const i=e._endId=++Ji,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=function(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r("transitionDelay"),s=r("transitionDuration"),o=Yi(i,s),a=r("animationDelay"),c=r("animationDuration"),l=Yi(a,c);let u=null,d=0,f=0;t===zi?o>0&&(u=zi,d=o,f=s.length):"animation"===t?l>0&&(u="animation",d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?zi:"animation":null,f=u?u===zi?s.length:c.length:0);const h=u===zi&&/\b(transform|all)(,|$)/.test(n.transitionProperty);return{type:u,timeout:d,propCount:f,hasTransform:h}}(e,t);if(!o)return r();const l=o+"end";let u=0;const d=()=>{e.removeEventListener(l,f),s()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout((()=>{u<c&&d()}),a+1),e.addEventListener(l,f)}function Yi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>Zi(t)+Zi(e[n]))))}function Zi(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}const Qi=e=>{const t=e.props["onUpdate:modelValue"];return w(t)?e=>$(t,e):t};function es(e){e.target.composing=!0}function ts(e){const t=e.target;t.composing&&(t.composing=!1,function(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}(t,"input"))}const ns={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=Qi(i);const s=r||i.props&&"number"===i.props.type;Di(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n?r=r.trim():s&&(r=W(r)),e._assign(r)})),n&&Di(e,"change",(()=>{e.value=e.value.trim()})),t||(Di(e,"compositionstart",es),Di(e,"compositionend",ts),Di(e,"change",ts))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e._assign=Qi(s),e.composing)return;if(document.activeElement===e){if(n)return;if(r&&e.value.trim()===t)return;if((i||"number"===e.type)&&W(e.value)===t)return}const o=null==t?"":t;e.value!==o&&(e.value=o)}},rs=["ctrl","shift","alt","meta"],is={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>rs.some((n=>e[`${n}Key`]&&!t.includes(n)))},ss=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=is[t[e]];if(r&&r(n,t))return}return e(n,...r)},os={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):as(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),as(e,!0),r.enter(e)):r.leave(e,(()=>{as(e,!1)})):as(e,t))},beforeUnmount(e,{value:t}){as(e,t)}};function as(e,t){e.style.display=t?e._vod:"none"}const cs=v({patchProp:(e,r,i,s,o=!1,a,c,l,u)=>{"class"===r?function(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,s,o):"style"===r?function(e,t,n){const r=e.style,i=T(n);if(n&&!i){for(const e in n)Ci(r,e,n[e]);if(t&&!T(t))for(const e in t)null==n[e]&&Ci(r,e,"")}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}(e,i,s):m(r)?g(r)||Ui(e,r,0,s,c):("."===r[0]?(r=r.slice(1),1):"^"===r[0]?(r=r.slice(1),0):function(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&Fi.test(t)&&E(n));if("spellcheck"===t||"draggable"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if(Fi.test(t)&&T(n))return!1;return t in e}(e,r,s,o))?function(e,t,r,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==r?"":r);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=r;const n=null==r?"":r;return e.value===n&&"OPTION"!==e.tagName||(e.value=n),void(null==r&&e.removeAttribute(t))}if(""===r||null==r){const i=typeof e[t];if("boolean"===i)return void(e[t]=n(r));if(null==r&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=r}catch(l){}}(e,r,s,a,c,l,u):("true-value"===r?e._trueValue=s:"false-value"===r&&(e._falseValue=s),function(e,r,i,s,o){if(s&&r.startsWith("xlink:"))null==i?e.removeAttributeNS(Ri,r.slice(6,r.length)):e.setAttributeNS(Ri,r,i);else{const s=t(r);null==i||s&&!n(i)?e.removeAttribute(r):e.setAttribute(r,s?"":i)}}(e,r,s,o))}},Ti);let ls;const us=(...e)=>{const t=(ls||(ls=Bn(cs))).createApp(...e),{mount:n}=t;return t.mount=e=>{const r=function(e){if(T(e)){return document.querySelector(e)}return e}
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */(e);if(!r)return;const i=t._component;E(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};function ds(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fs(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hs(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){fs(e,t,n[t])}))}return e}function ps(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(c){i=!0,s=c}finally{try{r||null==a.return||a.return()}finally{if(i)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ms(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var gs=function(){},vs={},ys={},bs={mark:gs,measure:gs};try{"undefined"!=typeof window&&(vs=window),"undefined"!=typeof document&&(ys=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&(bs=performance)}catch(Md){}var _s=(vs.navigator||{}).userAgent,ws=void 0===_s?"":_s,Is=vs,ks=ys,Es=bs;Is.document;var Ts=!!ks.documentElement&&!!ks.head&&"function"==typeof ks.addEventListener&&"function"==typeof ks.createElement,Ss=~ws.indexOf("MSIE")||~ws.indexOf("Trident/");!function(){try{}catch(Md){return!1}}();var Cs="group",Os="primary",As="secondary",Rs=Is.FontAwesomeConfig||{};if(ks&&"function"==typeof ks.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(e){var t=ps(e,2),n=t[0],r=t[1],i=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=ks.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(n));null!=i&&(Rs[r]=i)}))}var xs=hs({},{familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Rs);xs.autoReplaceSvg||(xs.observeMutations=!1);var Ns=hs({},xs);Is.FontAwesomeConfig=Ns;var Ps=Is||{};Ps.___FONT_AWESOME___||(Ps.___FONT_AWESOME___={}),Ps.___FONT_AWESOME___.styles||(Ps.___FONT_AWESOME___.styles={}),Ps.___FONT_AWESOME___.hooks||(Ps.___FONT_AWESOME___.hooks={}),Ps.___FONT_AWESOME___.shims||(Ps.___FONT_AWESOME___.shims=[]);var Ls=Ps.___FONT_AWESOME___,Ms=[];Ts&&((ks.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ks.readyState)||ks.addEventListener("DOMContentLoaded",(function e(){ks.removeEventListener("DOMContentLoaded",e),1,Ms.map((function(e){return e()}))}))),"undefined"!=typeof global&&void 0!==global.process&&global.process.emit,"undefined"==typeof setImmediate?setTimeout:setImmediate;var Ds=16,Us={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function js(){for(var e=12,t="";e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function Fs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zs(e){return Object.keys(e||{}).reduce((function(t,n){return t+"".concat(n,": ").concat(e[n],";")}),"")}function Vs(e){return e.size!==Us.size||e.x!==Us.x||e.y!==Us.y||e.rotate!==Us.rotate||e.flipX||e.flipY}function $s(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(32*t.x,", ").concat(32*t.y,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)");return{outer:i,inner:{transform:"".concat(s," ").concat(o," ").concat(a)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}var Bs={x:0,y:0,width:"100%",height:"100%"};function Ws(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Hs(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,o=e.transform,a=e.symbol,c=e.title,l=e.maskId,u=e.titleId,d=e.extra,f=e.watchable,h=void 0!==f&&f,p=r.found?r:n,m=p.width,g=p.height,v="fak"===i,y=v?"":"fa-w-".concat(Math.ceil(m/g*16)),b=[Ns.replacementClass,s?"".concat(Ns.familyPrefix,"-").concat(s):"",y].filter((function(e){return-1===d.classes.indexOf(e)})).filter((function(e){return""!==e||!!e})).concat(d.classes).join(" "),_={children:[],attributes:hs({},d.attributes,{"data-prefix":i,"data-icon":s,class:b,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)})},w=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};h&&(_.attributes["data-fa-i2svg"]=""),c&&_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(u||js())},children:[c]});var I=hs({},_,{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:o,symbol:a,styles:hs({},w,d.styles)}),k=r.found&&n.found?function(e){var t,n=e.children,r=e.attributes,i=e.main,s=e.mask,o=e.maskId,a=e.transform,c=i.width,l=i.icon,u=s.width,d=s.icon,f=$s({transform:a,containerWidth:u,iconWidth:c}),h={tag:"rect",attributes:hs({},Bs,{fill:"white"})},p=l.children?{children:l.children.map(Ws)}:{},m={tag:"g",attributes:hs({},f.inner),children:[Ws(hs({tag:l.tag,attributes:hs({},l.attributes,f.path)},p))]},g={tag:"g",attributes:hs({},f.outer),children:[m]},v="mask-".concat(o||js()),y="clip-".concat(o||js()),b={tag:"mask",attributes:hs({},Bs,{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,g]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:(t=d,"g"===t.tag?t.children:[t])},b]};return n.push(_,{tag:"rect",attributes:hs({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(v,")")},Bs)}),{children:n,attributes:r}}(I):function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,s=zs(e.styles);if(s.length>0&&(n.style=s),Vs(i)){var o=$s({transform:i,containerWidth:r.width,iconWidth:r.width});t.push({tag:"g",attributes:hs({},o.outer),children:[{tag:"g",attributes:hs({},o.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:hs({},r.icon.attributes,o.path)}]}]})}else t.push(r.icon);return{children:t,attributes:n}}(I),E=k.children,T=k.attributes;return I.children=E,I.attributes=T,a?function(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:hs({},i,{id:!0===s?"".concat(t,"-").concat(Ns.familyPrefix,"-").concat(n):s}),children:r}]}]}(I):function(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,o=e.transform;if(Vs(o)&&n.found&&!r.found){var a={x:n.width/n.height/2,y:.5};i.style=zs(hs({},s,{"transform-origin":"".concat(a.x+o.x/16,"em ").concat(a.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}(I)}function qs(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,o=e.extra,a=e.watchable,c=void 0!==a&&a,l=hs({},o.attributes,s?{title:s}:{},{class:o.classes.join(" ")});c&&(l["data-fa-i2svg"]="");var u=hs({},o.styles);Vs(i)&&(u.transform=function(e){var t=e.transform,n=e.width,r=void 0===n?16:n,i=e.height,s=void 0===i?16:i,o=e.startCentered,a=void 0!==o&&o,c="";return c+=a&&Ss?"translate(".concat(t.x/Ds-r/2,"em, ").concat(t.y/Ds-s/2,"em) "):a?"translate(calc(-50% + ".concat(t.x/Ds,"em), calc(-50% + ").concat(t.y/Ds,"em)) "):"translate(".concat(t.x/Ds,"em, ").concat(t.y/Ds,"em) "),c+="scale(".concat(t.size/Ds*(t.flipX?-1:1),", ").concat(t.size/Ds*(t.flipY?-1:1),") "),c+"rotate(".concat(t.rotate,"deg) ")}({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var d=zs(u);d.length>0&&(l.style=d);var f=[];return f.push({tag:"span",attributes:l,children:[t]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}Ns.measurePerformance&&Es&&Es.mark&&Es.measure;var Ks=function(e,t,n,r){var i,s,o,a=Object.keys(e),c=a.length,l=void 0!==r?function(e,t){return function(n,r,i,s){return e.call(t,n,r,i,s)}}(t,r):t;for(void 0===n?(i=1,o=e[a[0]]):(i=0,o=n);i<c;i++)o=l(o,e[s=a[i]],s,e);return o};function Gs(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.skipHooks,i=void 0!==r&&r,s=Object.keys(t).reduce((function(e,n){var r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e}),{});"function"!=typeof Ls.hooks.addPack||i?Ls.styles[e]=hs({},Ls.styles[e]||{},s):Ls.hooks.addPack(e,s),"fas"===e&&Gs("fa",t)}var Js=Ls.styles,Xs=Ls.shims,Ys=function(){var e=function(e){return Ks(Js,(function(t,n,r){return t[r]=Ks(n,e,{}),t}),{})};e((function(e,t,n){return t[3]&&(e[t[3]]=n),e})),e((function(e,t,n){var r=t[2];return e[n]=n,r.forEach((function(t){e[t]=n})),e}));var t="far"in Js;Ks(Xs,(function(e,n){var r=n[0],i=n[1],s=n[2];return"far"!==i||t||(i="fas"),e[r]={prefix:i,iconName:s},e}),{})};function Zs(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function Qs(e){var t=e.tag,n=e.attributes,r=void 0===n?{}:n,i=e.children,s=void 0===i?[]:i;return"string"==typeof e?Fs(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce((function(t,n){return t+"".concat(n,'="').concat(Fs(e[n]),'" ')}),"").trim()}(r),">").concat(s.map(Qs).join(""),"</").concat(t,">")}Ys(),Ls.styles;function eo(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=(new Error).stack}eo.prototype=Object.create(Error.prototype),eo.prototype.constructor=eo;var to={fill:"currentColor"},no={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};hs({},to,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var ro=hs({},no,{attributeName:"opacity"});function io(e){var t=e[0],n=e[1],r=ps(e.slice(4),1)[0];return{found:!0,width:t,height:n,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(Ns.familyPrefix,"-").concat(Cs)},children:[{tag:"path",attributes:{class:"".concat(Ns.familyPrefix,"-").concat(As),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(Ns.familyPrefix,"-").concat(Os),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}hs({},to,{cx:"256",cy:"364",r:"28"}),hs({},no,{attributeName:"r",values:"28;14;28;28;14;28;"}),hs({},ro,{values:"1;0;1;1;0;1;"}),hs({},to,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),hs({},ro,{values:"1;0;0;0;0;1;"}),hs({},to,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),hs({},ro,{values:"0;0;1;1;0;0;"}),Ls.styles,Ls.styles;function so(){Ns.autoAddCss&&!uo&&(!function(e){if(e&&Ts){var t=ks.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ks.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}ks.head.insertBefore(t,r)}}(function(){var e="fa",t="svg-inline--fa",n=Ns.familyPrefix,r=Ns.replacementClass,i='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}()),uo=!0)}function oo(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map((function(e){return Qs(e)}))}}),Object.defineProperty(e,"node",{get:function(){if(Ts){var t=ks.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function ao(e){var t=e.prefix,n=void 0===t?"fa":t,r=e.iconName;if(r)return Zs(lo.definitions,n,r)||Zs(Ls.styles,n,r)}var co,lo=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}}var t,n,r;return t=e,n=[{key:"add",value:function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach((function(t){e.definitions[t]=hs({},e.definitions[t]||{},i[t]),Gs(t,i[t]),Ys()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map((function(t){var r=n[t],i=r.prefix,s=r.iconName,o=r.icon;e[i]||(e[i]={}),e[i][s]=o})),e}}],n&&ds(t.prototype,n),r&&ds(t,r),e}()),uo=!1,fo=function(e){return function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce((function(e,t){var n=t.toLowerCase().split("-"),r=n[0],i=n.slice(1).join("-");if(r&&"h"===i)return e.flipX=!0,e;if(r&&"v"===i)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case"grow":e.size=e.size+i;break;case"shrink":e.size=e.size-i;break;case"left":e.x=e.x-i;break;case"right":e.x=e.x+i;break;case"up":e.y=e.y-i;break;case"down":e.y=e.y+i;break;case"rotate":e.rotate=e.rotate+i}return e}),t):t}(e)},ho=(co=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.transform,r=void 0===n?Us:n,i=t.symbol,s=void 0!==i&&i,o=t.mask,a=void 0===o?null:o,c=t.maskId,l=void 0===c?null:c,u=t.title,d=void 0===u?null:u,f=t.titleId,h=void 0===f?null:f,p=t.classes,m=void 0===p?[]:p,g=t.attributes,v=void 0===g?{}:g,y=t.styles,b=void 0===y?{}:y;if(e){var _=e.prefix,w=e.iconName,I=e.icon;return oo(hs({type:"icon"},e),(function(){return so(),Ns.autoA11y&&(d?v["aria-labelledby"]="".concat(Ns.replacementClass,"-title-").concat(h||js()):(v["aria-hidden"]="true",v.focusable="false")),Hs({icons:{main:io(I),mask:a?io(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:w,transform:hs({},Us,r),symbol:s,title:d,maskId:l,titleId:h,extra:{attributes:v,styles:b,classes:m}})}))}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(e||{}).icon?e:ao(e||{}),r=t.mask;return r&&(r=(r||{}).icon?r:ao(r||{})),co(n,hs({},t,{mask:r}))}),po="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var mo,go,vo=(mo=function(e){var t,n,r,i,s,o,a,c,l,u,d,f,h,p,m;t=po,n=function(e,t,r){if(!c(t)||u(t)||d(t)||f(t)||a(t))return t;var i,s=0,o=0;if(l(t))for(i=[],o=t.length;s<o;s++)i.push(n(e,t[s],r));else for(var h in i={},t)Object.prototype.hasOwnProperty.call(t,h)&&(i[e(h,r)]=n(e,t[h],r));return i},r=function(e){return h(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1)},i=function(e){var t=r(e);return t.substr(0,1).toUpperCase()+t.substr(1)},s=function(e,t){return function(e,t){var n=(t=t||{}).separator||"_",r=t.split||/(?=[A-Z])/;return e.split(r).join(n)}(e,t).toLowerCase()},o=Object.prototype.toString,a=function(e){return"function"==typeof e},c=function(e){return e===Object(e)},l=function(e){return"[object Array]"==o.call(e)},u=function(e){return"[object Date]"==o.call(e)},d=function(e){return"[object RegExp]"==o.call(e)},f=function(e){return"[object Boolean]"==o.call(e)},h=function(e){return(e-=0)==e},p=function(e,t){var n=t&&"process"in t?t.process:t;return"function"!=typeof n?e:function(t,r){return n(t,e,r)}},m={camelize:r,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(e,t){return n(p(r,t),e)},decamelizeKeys:function(e,t){return n(p(s,t),e,t)},pascalizeKeys:function(e,t){return n(p(i,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}},e.exports?e.exports=m:t.humps=m},mo(go={exports:{}},go.exports),go.exports),yo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bo=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},_o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wo=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Io=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function ko(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n=t.indexOf(":"),r=vo.camelize(t.slice(0,n)),i=t.slice(n+1).trim();return e[r]=i,e}),{})}function Eo(e){return e.split(/\s+/).reduce((function(e,t){return e[t]=!0,e}),{})}function To(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof e)return e;var r=(e.children||[]).map((function(e){return To(e)})),i=Object.keys(e.attributes||{}).reduce((function(t,n){var r=e.attributes[n];switch(n){case"class":t.class=Eo(r);break;case"style":t.style=ko(r);break;default:t.attrs[n]=r}return t}),{attrs:{},class:{},style:{}});n.class;var s=n.style,o=void 0===s?{}:s,a=wo(n,["class","style"]);return wi(e.tag,_o({},t,{class:i.class,style:_o({},i.style,o)},i.attrs,a),r)}var So=!1;try{So=!0}catch(Md){}function Co(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?bo({},e,t):{}}function Oo(e){return null===e?null:"object"===(void 0===e?"undefined":yo(e))&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}var Ao=Kt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(e){return["horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(e,t){var n=t.attrs,r=kt((function(){return Oo(e.icon)})),i=kt((function(){return Co("classes",function(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":"horizontal"===e.flip||"both"===e.flip,"fa-flip-vertical":"vertical"===e.flip||"both"===e.flip},bo(t,"fa-"+e.size,null!==e.size),bo(t,"fa-rotate-"+e.rotation,null!==e.rotation),bo(t,"fa-pull-"+e.pull,null!==e.pull),bo(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map((function(e){return n[e]?e:null})).filter((function(e){return e}))}(e))})),s=kt((function(){return Co("transform","string"==typeof e.transform?fo(e.transform):e.transform)})),o=kt((function(){return Co("mask",Oo(e.mask))})),a=kt((function(){return ho(r.value,_o({},i.value,s.value,o.value,{symbol:e.symbol,title:e.title}))}));gi(a,(function(e){if(!e)return function(){var e;!So&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find one or more icon(s)",r.value,o.value)}),{immediate:!0});var c=kt((function(){return a.value?To(a.value.abstract[0],{},n):null}));return function(){return c.value}}});Kt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,t){var n=t.slots,r=Ns.familyPrefix,i=kt((function(){return[r+"-layers"].concat(Io(e.fixedWidth?[r+"-fw"]:[]))}));return function(){return wi("div",{class:i.value},n.default?n.default():[])}}}),Kt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,t){var n=t.attrs,r=Ns.familyPrefix,i=kt((function(){return Co("classes",[].concat(Io(e.counter?[r+"-layers-counter"]:[]),Io(e.position?[r+"-layers-"+e.position]:[])))})),s=kt((function(){return Co("transform","string"==typeof e.transform?fo(e.transform):e.transform)})),o=kt((function(){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.transform,r=void 0===n?Us:n,i=t.title,s=void 0===i?null:i,o=t.classes,a=void 0===o?[]:o,c=t.attributes,l=void 0===c?{}:c,u=t.styles,d=void 0===u?{}:u;return oo({type:"text",content:e},(function(){return so(),qs({content:e,transform:hs({},Us,r),title:s,extra:{attributes:l,styles:d,classes:["".concat(Ns.familyPrefix,"-layers-text")].concat(ms(a))}})}))}(e.value.toString(),_o({},s.value,i.value)),n=t.abstract;return e.counter&&(n[0].attributes.class=n[0].attributes.class.replace("fa-layers-text","")),n[0]})),a=kt((function(){return To(o.value,{},n)}));return function(){return a.value}}});
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var Ro={prefix:"fas",iconName:"bars",icon:[448,512,[],"f0c9","M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"]},xo={prefix:"fas",iconName:"envelope",icon:[512,512,[],"f0e0","M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"]},No={prefix:"fas",iconName:"fish",icon:[576,512,[],"f578","M327.1 96c-89.97 0-168.54 54.77-212.27 101.63L27.5 131.58c-12.13-9.18-30.24.6-27.14 14.66L24.54 256 .35 365.77c-3.1 14.06 15.01 23.83 27.14 14.66l87.33-66.05C158.55 361.23 237.13 416 327.1 416 464.56 416 576 288 576 256S464.56 96 327.1 96zm87.43 184c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24 13.26 0 24 10.74 24 24 0 13.25-10.75 24-24 24z"]},Po={prefix:"fas",iconName:"info-circle",icon:[512,512,[],"f05a","M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"]},Lo={prefix:"fas",iconName:"key",icon:[512,512,[],"f084","M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"]},Mo={prefix:"fas",iconName:"sign-in-alt",icon:[512,512,[],"f2f6","M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"]},Do={prefix:"fas",iconName:"sign-out-alt",icon:[512,512,[],"f2f5","M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"]},Uo={prefix:"fas",iconName:"user-circle",icon:[496,512,[],"f2bd","M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"]},jo={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"]},Fo={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},zo={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let d=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(d=64)),r.push(n[l],n[u],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const o=i<e.length?n[e.charAt(i)]:64;++i;const a=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==o||null==a)throw Error();const c=t<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $o{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class Wo extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Wo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ho.prototype.create)}}class Ho{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(qo,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new Wo(r,o,n)}}const qo=/\{\$([^}]+)}/g;function Ko(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(Go(n)&&Go(s)){if(!Ko(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Go(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Xo(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function Yo(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class Zo{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Qo),void 0===r.error&&(r.error=Qo),void 0===r.complete&&(r.complete=Qo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(Md){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(Md){"undefined"!=typeof console&&console.error&&console.error(Md)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Qo(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(e){return e&&e._delegate?e._delegate:e}class ta{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class na{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new $o;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(Md){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(Md){if(r)return null;throw Md}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(Md){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(Md){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class ra{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new na(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ia,sa;(sa=ia||(ia={}))[sa.DEBUG=0]="DEBUG",sa[sa.VERBOSE=1]="VERBOSE",sa[sa.INFO=2]="INFO",sa[sa.WARN=3]="WARN",sa[sa.ERROR=4]="ERROR",sa[sa.SILENT=5]="SILENT";const oa={debug:ia.DEBUG,verbose:ia.VERBOSE,info:ia.INFO,warn:ia.WARN,error:ia.ERROR,silent:ia.SILENT},aa=ia.INFO,ca={[ia.DEBUG]:"log",[ia.VERBOSE]:"log",[ia.INFO]:"info",[ia.WARN]:"warn",[ia.ERROR]:"error"},la=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=ca[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class ua{constructor(e){this.name=e,this._logLevel=aa,this._logHandler=la,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ia))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?oa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ia.DEBUG,...e),this._logHandler(this,ia.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ia.VERBOSE,...e),this._logHandler(this,ia.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ia.INFO,...e),this._logHandler(this,ia.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ia.WARN,...e),this._logHandler(this,ia.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ia.ERROR,...e),this._logHandler(this,ia.ERROR,...e)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const fa="@firebase/app",ha=new ua("@firebase/app"),pa={[fa]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ma=new Map,ga=new Map;function va(e,t){try{e.container.addComponent(t)}catch(Md){ha.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,Md)}}function ya(e){const t=e.name;if(ga.has(t))return ha.debug(`There were multiple attempts to register component ${t}.`),!1;ga.set(t,e);for(const n of ma.values())va(n,e);return!0}function ba(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=new Ho("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wa{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ta("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _a.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw _a.create("bad-app-name",{appName:String(r)});const i=ma.get(r);if(i){if(Ko(e,i.options)&&Ko(n,i.config))return i;throw _a.create("duplicate-app",{appName:r})}const s=new ra(r);for(const a of ga.values())s.addComponent(a);const o=new wa(e,n,s);return ma.set(r,o),o}function ka(e,t,n){var r;let i=null!==(r=pa[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ha.warn(e.join(" "))}ya(new ta(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ea;Ea="",ya(new ta("platform-logger",(e=>new da(e)),"PRIVATE")),ka(fa,"0.7.11",Ea),ka(fa,"0.7.11","esm2017"),ka("fire-js","");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Ta(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function Sa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ka("firebase","9.6.1","app");const Ca=Sa,Oa=new Ho("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Aa=new ua("@firebase/auth");function Ra(e,...t){Aa.logLevel<=ia.ERROR&&Aa.error(`Auth (9.6.1): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(e,...t){throw La(e,...t)}function Na(e,...t){return La(e,...t)}function Pa(e,t,n){const r=Object.assign(Object.assign({},Ca()),{[t]:n});return new Ho("auth","Firebase",r).create(t,{appName:e.name})}function La(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Oa.create(e,...t)}function Ma(e,t,...n){if(!e)throw La(t,...n)}function Da(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ra(t),new Error(t)}function Ua(e,t){e||Da(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=new Map;function Fa(e){Ua(e instanceof Function,"Expected a class definition");let t=ja.get(e);return t?(Ua(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ja.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function za(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Va(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Va()&&"https:"!==Va()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ua(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bo())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return $a()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(e,t){Ua(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Da("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Da("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Da("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Ka=new Ba(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ja(e,t,n,r,i={}){return Xa(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Jo(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Ha.fetch()(Za(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Xa(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},qa),t);try{const t=new Qa(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw ec(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ec(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw ec(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Pa(e,a,o);xa(e,a)}}catch(Md){if(Md instanceof Wo)throw Md;xa(e,"network-request-failed")}}async function Ya(e,t,n,r,i={}){const s=await Ja(e,t,n,r,i);return"mfaPendingCredential"in s&&xa(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Za(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Wa(e.config,i):`${e.config.apiScheme}://${i}`}class Qa{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Na(this.auth,"timeout"))),Ka.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function ec(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Na(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tc(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(Md){}}function nc(e){return 1e3*Number(e)}function rc(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Ra("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return Vo.decodeString(e,!0)}catch(Md){console.error("base64Decode failed: ",Md)}return null}(n);return e?JSON.parse(e):(Ra("Failed to decode base64 JWT payload"),null)}catch(Md){return Ra("Caught error parsing JWT payload as JSON",Md),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ic(e,t,n=!1){if(n)return t;try{return await t}catch(Md){throw Md instanceof Wo&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Md)&&e.auth.currentUser===e&&await e.auth.signOut(),Md}}class sc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(Md){return void("auth/network-request-failed"===Md.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=tc(this.lastLoginAt),this.creationTime=tc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ac(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ic(e,async function(e,t){return Ja(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Ma(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Ta(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,d=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),f=!!u&&d,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new oc(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(e,h)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ma(e.idToken,"internal-error"),Ma(void 0!==e.idToken,"internal-error"),Ma(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=rc(e);return Ma(t,"internal-error"),Ma(void 0!==t.exp,"internal-error"),Ma(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Ma(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Xa(e,{},(async()=>{const n=Jo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Za(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Ha.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new cc;return n&&(Ma("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Ma("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Ma("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cc,this.toJSON())}_performRefresh(){return Da("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(e,t){Ma("string"==typeof e||void 0===e,"internal-error",{appName:t})}class uc{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Ta(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new sc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new oc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ic(this,this.stsTokenManager.getToken(this.auth,e));return Ma(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=ea(e),r=await n.getIdToken(t),i=rc(r);Ma(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:tc(nc(i.auth_time)),issuedAtTime:tc(nc(i.iat)),expirationTime:tc(nc(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=ea(e);await ac(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Ma(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new uc(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Ma(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ac(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ic(this,async function(e,t){return Ja(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,h=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:b,isAnonymous:_,providerData:w,stsTokenManager:I}=t;Ma(y&&I,e,"internal-error");const k=cc.fromJSON(this.name,I);Ma("string"==typeof y,e,"internal-error"),lc(u,e.name),lc(d,e.name),Ma("boolean"==typeof b,e,"internal-error"),Ma("boolean"==typeof _,e,"internal-error"),lc(f,e.name),lc(h,e.name),lc(p,e.name),lc(m,e.name),lc(g,e.name),lc(v,e.name);const E=new uc({uid:y,auth:e,email:d,emailVerified:b,displayName:u,isAnonymous:_,photoURL:h,phoneNumber:f,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:v});return w&&Array.isArray(w)&&(E.providerData=w.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new cc;r.updateFromServerResponse(t);const i=new uc({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ac(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}dc.type="NONE";const fc=dc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(e,t,n){return`firebase:${e}:${t}:${n}`}class pc{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=hc(this.userKey,r.apiKey,i),this.fullPersistenceKey=hc("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?uc._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pc(Fa(fc),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Fa(fc);const s=hc(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=uc._fromJSON(e,t);l!==i&&(o=n),i=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new pc(i,e,n)):new pc(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(bc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(gc(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(wc(t))return"Blackberry";if(Ic(t))return"Webos";if(vc(t))return"Safari";if((t.includes("chrome/")||yc(t))&&!t.includes("edge/"))return"Chrome";if(_c(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function gc(e=Bo()){return/firefox\//i.test(e)}function vc(e=Bo()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function yc(e=Bo()){return/crios\//i.test(e)}function bc(e=Bo()){return/iemobile/i.test(e)}function _c(e=Bo()){return/android/i.test(e)}function wc(e=Bo()){return/blackberry/i.test(e)}function Ic(e=Bo()){return/webos/i.test(e)}function kc(e=Bo()){return/iphone|ipad|ipod/i.test(e)}function Ec(){return function(){const e=Bo();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()&&10===document.documentMode}function Tc(e=Bo()){return kc(e)||_c(e)||Ic(e)||wc(e)||/windows phone/i.test(e)||bc(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Sc(e,t=[]){let n;switch(e){case"Browser":n=mc(Bo());break;case"Worker":n=`${mc(Bo())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.1/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ac(this),this.idTokenSubscription=new Ac(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Oa,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Fa(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await pc.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(Md){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e)):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(Ma(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(Md){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ac(e)}catch(Md){if("auth/network-request-failed"!==Md.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ea(e):null;return t&&Ma(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Ma(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Fa(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ho("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Fa(e)||this._popupRedirectResolver;Ma(t,this,"argument-error"),this.redirectPersistenceManager=await pc.create(this,[Fa(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Ma(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ma(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Oc(e){return ea(e)}class Ac{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Zo(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Ma(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Da("not implemented")}_getIdTokenResponse(e){return Da("not implemented")}_linkToIdToken(e,t){return Da("not implemented")}_getReauthenticationResolver(e){return Da("not implemented")}}async function xc(e,t){return async function(e,t){return Ja(e,"POST","/v1/accounts:sendOobCode",Ga(e,t))}(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nc extends Rc{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Nc(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Nc(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Ya(e,"POST","/v1/accounts:signInWithPassword",Ga(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Ya(e,"POST","/v1/accounts:signInWithEmailLink",Ga(e,t))}(e,{email:this._email,oobCode:this._password});default:xa(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return Ja(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Ya(e,"POST","/v1/accounts:signInWithEmailLink",Ga(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:xa(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pc(e,t){return Ya(e,"POST","/v1/accounts:signInWithIdp",Ga(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc extends Rc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Lc(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):xa("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Ta(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Lc(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Pc(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Pc(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Pc(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Jo(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){var t,n,r,i,s,o;const a=Xo(Yo(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);Ma(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=Xo(Yo(e)).link,n=t?Xo(Yo(t)).deep_link_id:null,r=Xo(Yo(e)).deep_link_id;return(r?Xo(Yo(r)).link:null)||r||n||t||e}(e);try{return new Mc(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this.providerId=Dc.PROVIDER_ID}static credential(e,t){return Nc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Mc.parseLink(t);return Ma(n,"argument-error"),Nc._fromEmailAndCode(e,n.code,n.tenantId)}}Dc.PROVIDER_ID="password",Dc.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Dc.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc extends Uc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends jc{constructor(){super("facebook.com")}static credential(e){return Lc._fromParams({providerId:Fc.PROVIDER_ID,signInMethod:Fc.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fc.credentialFromTaggedObject(e)}static credentialFromError(e){return Fc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Fc.credential(e.oauthAccessToken)}catch(t){return null}}}Fc.FACEBOOK_SIGN_IN_METHOD="facebook.com",Fc.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zc extends jc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Lc._fromParams({providerId:zc.PROVIDER_ID,signInMethod:zc.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return zc.credentialFromTaggedObject(e)}static credentialFromError(e){return zc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return zc.credential(t,n)}catch(r){return null}}}zc.GOOGLE_SIGN_IN_METHOD="google.com",zc.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vc extends jc{constructor(){super("github.com")}static credential(e){return Lc._fromParams({providerId:Vc.PROVIDER_ID,signInMethod:Vc.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vc.credentialFromTaggedObject(e)}static credentialFromError(e){return Vc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Vc.credential(e.oauthAccessToken)}catch(t){return null}}}Vc.GITHUB_SIGN_IN_METHOD="github.com",Vc.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $c extends jc{constructor(){super("twitter.com")}static credential(e,t){return Lc._fromParams({providerId:$c.PROVIDER_ID,signInMethod:$c.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return $c.credentialFromTaggedObject(e)}static credentialFromError(e){return $c.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return $c.credential(t,n)}catch(r){return null}}}$c.TWITTER_SIGN_IN_METHOD="twitter.com",$c.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bc{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await uc._fromIdTokenResponse(e,n,r),s=Wc(n);return new Bc({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Wc(n);return new Bc({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Wc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc extends Wo{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Hc.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Hc(e,t,n,r)}}function qc(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Hc._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Kc(e,t,n=!1){const r="signIn",i=await qc(e,r,t),s=await Bc._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Gc(e,t,n){const r=ea(e),i={requestType:"PASSWORD_RESET",email:t};n&&
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t,n){var r;Ma((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),Ma(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Ma(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(Ma(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}(r,i,n),await xc(r,i)}async function Jc(e,t,n){const r=Oc(e),i=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return Ya(e,"POST","/v1/accounts:signUp",Ga(e,t))}(r,{returnSecureToken:!0,email:t,password:n}),s=await Bc._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Xc(e,t,n){return async function(e,t){return Kc(Oc(e),t)}(ea(e),Dc.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Yc(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=ea(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await ic(r,async function(e,t){return Ja(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function Zc(e,t,n,r){return ea(e).onAuthStateChanged(t,n,r)}function Qc(e){return ea(e).signOut()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class el{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends el{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Bo();return vc(e)||kc(e)}()&&function(){try{return!(!window||window===window.top)}catch(Md){return!1}}(),this.fallbackToPolling=Tc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ec()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}tl.type="LOCAL";const nl=tl;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends el{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rl.type="SESSION";const il=rl;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new sl(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ol(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sl.receivers=[];class al{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=ol("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ll(){return void 0!==cl().WorkerGlobalScope&&"function"==typeof cl().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ul="firebaseLocalStorageDb";class dl{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function fl(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function hl(){const e=indexedDB.open(ul,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(Md){n(Md)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(ul);return new dl(e).toPromise()}(),t(await hl()))}))}))}async function pl(e,t,n){const r=fl(e,!0).put({fbase_key:t,value:n});return new dl(r).toPromise()}function ml(e,t){const n=fl(e,!0).delete(t);return new dl(n).toPromise()}class gl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await hl()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(Md){if(t++>3)throw Md;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ll()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sl._getInstance(ll()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new al(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hl();return await pl(e,"__sak","1"),await ml(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>pl(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=fl(e,!1).get(t),r=await new dl(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>ml(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=fl(e,!1).getAll();return new dl(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}gl.type="LOCAL";const vl=gl;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Na("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bl(e,t){return t?Fa(t):(Ma(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ba(3e4,6e4);class _l extends Rc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pc(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Pc(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Pc(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function wl(e){return Kc(e.auth,new _l(e),e.bypassAuthState)}function Il(e){const{auth:t,user:n}=e;return Ma(n,t,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ic(e,qc(r,i,t,e),n);Ma(s.idToken,r,"internal-error");const o=rc(s.idToken);Ma(o,r,"internal-error");const{sub:a}=o;return Ma(e.uid===a,r,"user-mismatch"),Bc._forOperation(e,i,s)}catch(Md){throw"auth/user-not-found"===(null==Md?void 0:Md.code)&&xa(r,"user-mismatch"),Md}}(n,new _l(e),e.bypassAuthState)}async function kl(e){const{auth:t,user:n}=e;return Ma(n,t,"internal-error"),async function(e,t,n=!1){const r=await ic(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Bc._forOperation(e,"link",r)}(n,new _l(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(Md){this.reject(Md)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(Md){this.reject(Md)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wl;case"linkViaPopup":case"linkViaRedirect":return kl;case"reauthViaPopup":case"reauthViaRedirect":return Il;default:xa(this.auth,"internal-error")}}resolve(e){Ua(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ua(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new Ba(2e3,1e4);async function Sl(e,t,n){const r=Oc(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&xa(e,"argument-error"),Pa(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,Uc);const i=bl(r,n);return new Cl(r,"signInViaPopup",t,i).executeNotNull()}class Cl extends El{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Cl.currentPopupAction&&Cl.currentPopupAction.cancel(),Cl.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ma(e,this.auth,"internal-error"),e}async onExecution(){Ua(1===this.filter.length,"Popup operations only handle one event");const e=ol();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Na(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Na(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cl.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Na(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Tl.get())};e()}}Cl.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ol=new Map;class Al extends El{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ol.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return hc("pendingRedirect",e.config.apiKey,e.name)}(t),r=function(e){return Fa(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(Md){e=()=>Promise.reject(Md)}Ol.set(this.auth._key(),e)}return this.bypassAuthState||Ol.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Rl(e,t,n=!1){const r=Oc(e),i=bl(r,t),s=new Al(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pl(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Pl(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Na(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nl(e))}saveEventToCache(e){this.cachedEventUids.add(Nl(e)),this.lastProcessedEventTime=Date.now()}}function Nl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Pl({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ll=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ml=/^https?/;async function Dl(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Ja(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(Ul(r))return}catch(n){}xa(e,"unauthorized-domain")}function Ul(e){const t=za(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ml.test(n))return!1;if(Ll.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new Ba(3e4,6e4);function Fl(){const e=cl().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function zl(e){return new Promise(((t,n)=>{var r,i,s;function o(){Fl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Fl(),n(Na(e,"network-request-failed"))},timeout:jl.get()})}if(null===(i=null===(r=cl().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=cl().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return cl()[t]=()=>{gapi.load?o():n(Na(e,"network-request-failed"))},yl(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Vl=null,e}))}let Vl=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $l=new Ba(5e3,15e3),Bl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hl(e){const t=e.config;Ma(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Wa(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.6.1"},i=Wl.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Jo(r).slice(1)}`}async function ql(e){const t=await function(e){return Vl=Vl||zl(e),Vl}(e),n=cl().gapi;return Ma(n,e,"internal-error"),t.open({where:document.body,url:Hl(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bl,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Na(e,"network-request-failed"),s=cl().setTimeout((()=>{r(i)}),$l.get());function o(){cl().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Gl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(Md){}}}function Jl(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Kl),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Bo().toLowerCase();n&&(a=yc(l)?"_blank":n),gc(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Bo()){var t;return kc(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Gl(null);const d=window.open(t||"",a,u);Ma(d,e,"popup-blocked");try{d.focus()}catch(Md){}return new Gl(d)}function Xl(e,t,n,r,i,s){Ma(e.config.authDomain,e,"auth-domain-config-required"),Ma(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.6.1",eventId:i};if(t instanceof Uc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof jc){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return Wa(e,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Jo(a).slice(1)}`}const Yl=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=il,this._completeRedirectFn=Rl}async _openPopup(e,t,n,r){var i;Ua(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Jl(e,Xl(e,t,n,za(),r),ol())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Xl(e,t,n,za(),r),cl().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Ua(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await ql(e),n=new xl(e);return t.register("authEvent",(t=>{Ma(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),xa(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Dl(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Tc()||vc()||kc()}};var Zl,Ql="@firebase/auth";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ma(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tu(e=function(e="[DEFAULT]"){const t=ma.get(e);if(!t)throw _a.create("no-app",{appName:e});return t}()){const t=ba(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=ba(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Ko(n.getOptions(),null!=t?t:{}))return e;xa(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Yl,persistence:[vl,nl,il]})}Zl="Browser",ya(new ta("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{Ma(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),Ma(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:Zl,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sc(Zl)},s=new Cc(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fa);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),ya(new ta("auth-internal",(e=>{const t=Oc(e.getProvider("auth").getImmediate());return new eu(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ka(Ql,"0.19.4",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Zl)),ka(Ql,"0.19.4","esm2017");
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const nu="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,ru=e=>nu?Symbol(e):"_vr_"+e,iu=ru("rvlm"),su=ru("rvd"),ou=ru("r"),au=ru("rl"),cu=ru("rvl"),lu="undefined"!=typeof window;const uu=Object.assign;function du(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const fu=()=>{},hu=/\/$/;function pu(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),i=e(s)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function mu(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function gu(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function vu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!yu(e[n],t[n]))return!1;return!0}function yu(e,t){return Array.isArray(e)?bu(e,t):Array.isArray(t)?bu(t,e):e===t}function bu(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var _u,wu,Iu,ku;function Eu(e){if(!e)if(lu){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(hu,"")}(wu=_u||(_u={})).pop="pop",wu.push="push",(ku=Iu||(Iu={})).back="back",ku.forward="forward",ku.unknown="";const Tu=/^[^#]+#/;function Su(e,t){return e.replace(Tu,"#")+t}const Cu=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ou(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),i="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function Au(e,t){return(history.state?history.state.position-t:-1)+e}const Ru=new Map;function xu(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),mu(n,"")}return mu(n,e)+r+i}function Nu(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Cu():null}}function Pu(e){const{history:t,location:n}=window,r={value:xu(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:location.protocol+"//"+location.host+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:function(e,n){const o=uu({},i.value,t.state,{forward:e,scroll:Cu()});s(o.current,o,!0),s(e,uu({},Nu(r.value,e,null),{position:o.position+1},n),!1),r.value=e},replace:function(e,n){s(e,uu({},t.state,Nu(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}}}function Lu(e){const t=Pu(e=Eu(e)),n=function(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=xu(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:u,type:_u.pop,direction:u?u>0?Iu.forward:Iu.back:Iu.unknown})}))};function c(){const{history:e}=window;e.state&&e.replaceState(uu({},e.state,{scroll:Cu()}),"")}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c),{pauseListeners:function(){o=n.value},listen:function(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t},destroy:function(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}}}(e,t.state,t.location,t.replace);const r=uu({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:Su.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Mu(e){return(e=location.host?e||location.pathname+location.search:"").includes("#")||(e+="#"),Lu(e)}function Du(e){return"string"==typeof e||"symbol"==typeof e}const Uu={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ju=ru("nf");var Fu,zu;function Vu(e,t){return uu(new Error,{type:e,[ju]:!0},t)}function $u(e,t){return e instanceof Error&&ju in e&&(null==t||!!(e.type&t))}(zu=Fu||(Fu={}))[zu.aborted=4]="aborted",zu[zu.cancelled=8]="cancelled",zu[zu.duplicated=16]="duplicated";const Bu={sensitive:!1,strict:!1,start:!0,end:!0},Wu=/[.+*?^${}()[\]/\\]/g;function Hu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function qu(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const e=Hu(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const Ku={type:0,value:""},Gu=/[a-zA-Z0-9_]/;function Ju(e,t,n){const r=function(e,t){const n=uu({},Bu,t),r=[];let i=n.start?"^":"";const s=[];for(const c of e){const e=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let t=0;t<c.length;t++){const r=c[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(Wu,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:u}=r;s.push({name:e,repeatable:n,optional:l});const d=u||"[^/]+?";if("[^/]+?"!==d){o+=10;try{new RegExp(`(${d})`)}catch(a){throw new Error(`Invalid custom RegExp for param "${e}" (${d}): `+a.message)}}let f=n?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;t||(f=l&&c.length<2?`(?:/${f})`:"/"+f),l&&(f+="?"),i+=f,o+=20,l&&(o+=-8),n&&(o+=-20),".*"===d&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");return{re:o,score:r,keys:s,parse:function(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[Ku]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,l="",u="";function d(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function f(){l+=a}for(;c<e.length;)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&d(),o()):":"===a?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:Gu.test(a)?f():(d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}(e.path),n),i=uu(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Xu(e,t){const n=[],r=new Map;function i(e,n,r){const a=!r,c=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Yu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);c.aliasOf=r&&r.record;const l=ed(t,e),u=[c];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(uu({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let d,f;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(d=Ju(t,n,l),r?r.alias.push(d):(f=f||d,f!==d&&f.alias.push(d),a&&e.name&&!Zu(d)&&s(e.name)),"children"in c){const e=c.children;for(let t=0;t<e.length;t++)i(e[t],d,r&&r.children[t])}r=r||d,o(d)}return f?()=>{s(f)}:fu}function s(e){if(Du(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function o(e){let t=0;for(;t<n.length&&qu(e,n[t])>=0;)t++;n.splice(t,0,e),e.record.name&&!Zu(e)&&r.set(e.record.name,e)}return t=ed({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:function(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw Vu(1,{location:e});o=i.record.name,a=uu(function(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw Vu(1,{location:e,currentLocation:t});o=i.record.name,a=uu({},t.params,e.params),s=i.stringify(a)}const c=[];let l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:o,path:s,params:a,matched:c,meta:Qu(c)}},removeRoute:s,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function Yu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function Zu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Qu(e){return e.reduce(((e,t)=>uu(e,t.meta)),{})}function ed(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const td=/#/g,nd=/&/g,rd=/\//g,id=/=/g,sd=/\?/g,od=/\+/g,ad=/%5B/g,cd=/%5D/g,ld=/%5E/g,ud=/%60/g,dd=/%7B/g,fd=/%7C/g,hd=/%7D/g,pd=/%20/g;function md(e){return encodeURI(""+e).replace(fd,"|").replace(ad,"[").replace(cd,"]")}function gd(e){return md(e).replace(od,"%2B").replace(pd,"+").replace(td,"%23").replace(nd,"%26").replace(ud,"`").replace(dd,"{").replace(hd,"}").replace(ld,"^")}function vd(e){return null==e?"":function(e){return md(e).replace(td,"%23").replace(sd,"%3F")}(e).replace(rd,"%2F")}function yd(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function bd(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(od," "),i=e.indexOf("="),s=yd(i<0?e:e.slice(0,i)),o=i<0?null:yd(e.slice(i+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function _d(e){let t="";for(let n in e){const r=e[n];if(n=gd(n).replace(id,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map((e=>e&&gd(e))):[r&&gd(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function wd(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function Id(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function kd(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{var c;!1===e?a(Vu(4,{from:n,to:t})):e instanceof Error?a(e):"string"==typeof(c=e)||c&&"object"==typeof c?a(Vu(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"==typeof e&&s.push(e),o())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch((e=>a(e)))}))}function Ed(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if("object"==typeof(s=a)||"displayName"in s||"props"in s||"__vccOpts"in s){const s=(a.__vccOpts||a)[t];s&&i.push(kd(s,n,r,o,e))}else{let s=a();i.push((()=>s.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=(a=i).__esModule||nu&&"Module"===a[Symbol.toStringTag]?i.default:i;var a;o.components[e]=s;const c=(s.__vccOpts||s)[t];return c&&kd(c,n,r,o,e)()}))))}}var s;return i}function Td(e){const t=jt(ou),n=jt(au),r=kt((()=>t.resolve(gt(e.to)))),i=kt((()=>{const{matched:e}=r.value,{length:t}=e,i=e[t-1],s=n.matched;if(!i||!s.length)return-1;const o=s.findIndex(gu.bind(null,i));if(o>-1)return o;const a=Cd(e[t-2]);return t>1&&Cd(i)===a&&s[s.length-1].path!==a?s.findIndex(gu.bind(null,e[t-2])):o})),s=kt((()=>i.value>-1&&function(e,t){for(const n in t){const r=t[n],i=e[n];if("string"==typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}(n.params,r.value.params))),o=kt((()=>i.value>-1&&i.value===n.matched.length-1&&vu(n.params,r.value.params)));return{route:r,href:kt((()=>r.value.href)),isActive:s,isExactActive:o,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[gt(e.replace)?"replace":"push"](gt(e.to)).catch(fu):Promise.resolve()}}}const Sd=Kt({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Td,setup(e,{slots:t}){const n=et(Td(e)),{options:r}=jt(ou),i=kt((()=>({[Od(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Od(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:wi("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Cd(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Od=(e,t,n)=>null!=e?e:null!=t?t:n,Ad=Kt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=jt(cu),i=kt((()=>e.route||r.value)),s=jt(su,0),o=kt((()=>i.value.matched[s]));Ut(su,s+1),Ut(iu,o),Ut(cu,i);const a=ht();return gi((()=>[a.value,o.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&gu(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=i.value,s=o.value,c=s&&s.components[e.name],l=e.name;if(!c)return Rd(n.default,{Component:c,route:r});const u=s.props[e.name],d=u?!0===u?r.params:"function"==typeof u?u(r):u:null,f=wi(c,uu({},d,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(s.instances[l]=null)},ref:a}));return Rd(n.default,{Component:f,route:r})||f}}});function Rd(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const xd=Ad;function Nd(e){const t=Xu(e.routes,e),n=e.parseQuery||bd,r=e.stringifyQuery||_d,i=e.history,s=Id(),o=Id(),a=Id(),c=pt(Uu,!0);let l=Uu;lu&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=du.bind(null,(e=>""+e)),d=du.bind(null,vd),f=du.bind(null,yd);function h(e,s){if(s=uu({},s||c.value),"string"==typeof e){const r=pu(n,e,s.path),o=t.resolve({path:r.path},s),a=i.createHref(r.fullPath);return uu(r,o,{params:f(o.params),hash:yd(r.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=uu({},e,{path:pu(n,e.path,s.path).path});else{const t=uu({},e.params);for(const e in t)null==t[e]&&delete t[e];o=uu({},e,{params:d(e.params)}),s.params=d(s.params)}const a=t.resolve(o,s),l=e.hash||"";a.params=u(f(a.params));const h=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(r,uu({},e,{hash:(p=l,md(p).replace(dd,"{").replace(hd,"}").replace(ld,"^")),path:a.path}));var p;const m=i.createHref(h);return uu({fullPath:h,hash:l,query:r===_d?wd(e.query):e.query||{}},a,{redirectedFrom:void 0,href:m})}function p(e){return"string"==typeof e?pu(n,e,c.value.path):uu({},e)}function m(e,t){if(l!==e)return Vu(8,{from:t,to:e})}function g(e){return y(e)}function v(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=p(r):{path:r},r.params={}),uu({query:e.query,hash:e.hash,params:e.params},r)}}function y(e,t){const n=l=h(e),i=c.value,s=e.state,o=e.force,a=!0===e.replace,u=v(n);if(u)return y(uu(p(u),{state:s,force:o,replace:a}),t||n);const d=n;let f;return d.redirectedFrom=t,!o&&function(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&gu(t.matched[r],n.matched[i])&&vu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(r,i,n)&&(f=Vu(16,{to:d,from:i}),R(i,i,!0,!1)),(f?Promise.resolve(f):_(d,i)).catch((e=>$u(e)?e:O(e,d,i))).then((e=>{if(e){if($u(e,2))return y(uu(p(e.to),{state:s,force:o,replace:a}),t||d)}else e=I(d,i,!0,a,s);return w(d,i,e),e}))}function b(e,t){const n=m(e,t);return n?Promise.reject(n):Promise.resolve()}function _(e,t){let n;const[r,i,a]=function(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>gu(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>gu(e,a)))||i.push(a))}return[n,r,i]}(e,t);n=Ed(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach((r=>{n.push(kd(r,e,t))}));const c=b.bind(null,e,t);return n.push(c),Pd(n).then((()=>{n=[];for(const r of s.list())n.push(kd(r,e,t));return n.push(c),Pd(n)})).then((()=>{n=Ed(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(kd(r,e,t))}));return n.push(c),Pd(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(kd(i,e,t));else n.push(kd(r.beforeEnter,e,t));return n.push(c),Pd(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Ed(a,"beforeRouteEnter",e,t),n.push(c),Pd(n)))).then((()=>{n=[];for(const r of o.list())n.push(kd(r,e,t));return n.push(c),Pd(n)})).catch((e=>$u(e,8)?e:Promise.reject(e)))}function w(e,t,n){for(const r of a.list())r(e,t,n)}function I(e,t,n,r,s){const o=m(e,t);if(o)return o;const a=t===Uu,l=lu?history.state:{};n&&(r||a?i.replace(e.fullPath,uu({scroll:a&&l&&l.scroll},s)):i.push(e.fullPath,s)),c.value=e,R(e,t,n,a),A()}let k;function E(){k=i.listen(((e,t,n)=>{const r=h(e),s=v(r);if(s)return void y(uu(s,{replace:!0}),r).catch(fu);l=r;const o=c.value;var a,u;lu&&(a=Au(o.fullPath,n.delta),u=Cu(),Ru.set(a,u)),_(r,o).catch((e=>$u(e,12)?e:$u(e,2)?(y(e.to,r).then((e=>{$u(e,20)&&!n.delta&&n.type===_u.pop&&i.go(-1,!1)})).catch(fu),Promise.reject()):(n.delta&&i.go(-n.delta,!1),O(e,r,o)))).then((e=>{(e=e||I(r,o,!1))&&(n.delta?i.go(-n.delta,!1):n.type===_u.pop&&$u(e,20)&&i.go(-1,!1)),w(r,o,e)})).catch(fu)}))}let T,S=Id(),C=Id();function O(e,t,n){A(e);const r=C.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function A(e){T||(T=!0,E(),S.list().forEach((([t,n])=>e?n(e):t())),S.reset())}function R(t,n,r,i){const{scrollBehavior:s}=e;if(!lu||!s)return Promise.resolve();const o=!r&&function(e){const t=Ru.get(e);return Ru.delete(e),t}(Au(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return oi().then((()=>s(t,n,o))).then((e=>e&&Ou(e))).catch((e=>O(e,t,n)))}const x=e=>i.go(e);let N;const P=new Set;return{currentRoute:c,addRoute:function(e,n){let r,i;return Du(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)},removeRoute:function(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:h,options:e,push:g,replace:function(e){return g(uu(p(e),{replace:!0}))},go:x,back:()=>x(-1),forward:()=>x(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:C.add,isReady:function(){return T&&c.value!==Uu?Promise.resolve():new Promise(((e,t)=>{S.add([e,t])}))},install(e){e.component("RouterLink",Sd),e.component("RouterView",xd),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>gt(c)}),lu&&!N&&c.value===Uu&&(N=!0,g(i.location).catch((e=>{})));const t={};for(const r in Uu)t[r]=kt((()=>c.value[r]));e.provide(ou,this),e.provide(au,et(t)),e.provide(cu,c);const n=e.unmount;P.add(e),e.unmount=function(){P.delete(e),P.size<1&&(l=Uu,k&&k(),c.value=Uu,N=!1,T=!1),n()}}}}function Pd(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function Ld(){return jt(ou)}export{Sl as $,Fo as A,Ro as B,xo as C,Lo as D,No as E,rr as F,Uo as G,jo as H,Mo as I,Do as J,Po as K,us as L,Ao as M,Er as N,Rt as O,xt as P,pi as Q,Ut as R,jt as S,Vi as T,a as U,Ir as V,wi as W,r as X,ss as Y,Xc as Z,zc as _,rn as a,Yn as a0,et as a1,on as a2,oi as a3,gi as a4,bt as a5,Un as a6,ns as a7,os as a8,Jc as a9,Yc as aa,Gc as ab,cn as b,kt as c,Kt as d,Zn as e,hr as f,tu as g,_r as h,Ia as i,wr as j,lr as k,Ar as l,Tr as m,pr as n,Zc as o,kr as p,er as q,ht as r,Qc as s,c as t,Ld as u,Nd as v,Nt as w,Mu as x,lo as y,zo as z};
