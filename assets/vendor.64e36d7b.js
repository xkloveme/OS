function e(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const t=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function n(e){return!!e||""===e}function r(e){if(w(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=T(i)?o(i):r(i);if(s)for(const e in s)t[e]=s[e]}return t}return T(e)||C(e)?e:void 0}const i=/;(?![^(]*\))/g,s=/:(.+)/;function o(e){const t={};return e.split(i).forEach((e=>{if(e){const n=e.split(s);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function a(e){let t="";if(T(e))t=e;else if(w(e))for(let n=0;n<e.length;n++){const r=a(e[n]);r&&(t+=r+" ")}else if(C(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const c=e=>null==e?"":w(e)||C(e)&&(e.toString===A||!E(e.toString))?JSON.stringify(e,l,2):String(e),l=(e,t)=>t&&t.__v_isRef?l(e,t.value):I(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:k(t)?{[`Set(${t.size})`]:[...t.values()]}:!C(t)||w(t)||x(t)?t:String(t),u={},d=[],f=()=>{},h=()=>!1,p=/^on[^a-z]/,m=e=>p.test(e),g=e=>e.startsWith("onUpdate:"),v=Object.assign,y=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},b=Object.prototype.hasOwnProperty,_=(e,t)=>b.call(e,t),w=Array.isArray,I=e=>"[object Map]"===R(e),k=e=>"[object Set]"===R(e),E=e=>"function"==typeof e,T=e=>"string"==typeof e,S=e=>"symbol"==typeof e,C=e=>null!==e&&"object"==typeof e,O=e=>C(e)&&E(e.then)&&E(e.catch),A=Object.prototype.toString,R=e=>A.call(e),x=e=>"[object Object]"===R(e),N=e=>T(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,P=e(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),L=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},M=/-(\w)/g,D=L((e=>e.replace(M,((e,t)=>t?t.toUpperCase():"")))),U=/\B([A-Z])/g,j=L((e=>e.replace(U,"-$1").toLowerCase())),F=L((e=>e.charAt(0).toUpperCase()+e.slice(1))),z=L((e=>e?`on${F(e)}`:"")),V=(e,t)=>!Object.is(e,t),$=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},B=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},W=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let H;let q;const K=[];class G{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&q&&(this.parent=q,this.index=(q.scopes||(q.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(K.push(this),q=this)}off(){this.active&&(K.pop(),q=K[K.length-1])}stop(e){if(this.active){if(this.effects.forEach((e=>e.stop())),this.cleanups.forEach((e=>e())),this.scopes&&this.scopes.forEach((e=>e.stop(!0))),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}const J=e=>{const t=new Set(e);return t.w=0,t.n=0,t},X=e=>(e.w&ee)>0,Y=e=>(e.n&ee)>0,Z=new WeakMap;let Q=0,ee=1;const te=[];let ne;const re=Symbol(""),ie=Symbol("");class se{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],function(e,t){(t=t||q)&&t.active&&t.effects.push(e)}(this,n)}run(){if(!this.active)return this.fn();if(!te.includes(this))try{return te.push(ne=this),ce.push(ae),ae=!0,ee=1<<++Q,Q<=30?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ee})(this):oe(this),this.fn()}finally{Q<=30&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];X(i)&&!Y(i)?i.delete(e):t[n++]=i,i.w&=~ee,i.n&=~ee}t.length=n}})(this),ee=1<<--Q,ue(),te.pop();const e=te.length;ne=e>0?te[e-1]:void 0}}stop(){this.active&&(oe(this),this.onStop&&this.onStop(),this.active=!1)}}function oe(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ae=!0;const ce=[];function le(){ce.push(ae),ae=!1}function ue(){const e=ce.pop();ae=void 0===e||e}function de(e,t,n){if(!fe())return;let r=Z.get(e);r||Z.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=J()),he(i)}function fe(){return ae&&void 0!==ne}function he(e,t){let n=!1;Q<=30?Y(e)||(e.n|=ee,n=!X(e)):n=!e.has(ne),n&&(e.add(ne),ne.deps.push(e))}function pe(e,t,n,r,i,s){const o=Z.get(e);if(!o)return;let a=[];if("clear"===t)a=[...o.values()];else if("length"===n&&w(e))o.forEach(((e,t)=>{("length"===t||t>=r)&&a.push(e)}));else switch(void 0!==n&&a.push(o.get(n)),t){case"add":w(e)?N(n)&&a.push(o.get("length")):(a.push(o.get(re)),I(e)&&a.push(o.get(ie)));break;case"delete":w(e)||(a.push(o.get(re)),I(e)&&a.push(o.get(ie)));break;case"set":I(e)&&a.push(o.get(re))}if(1===a.length)a[0]&&me(a[0]);else{const e=[];for(const t of a)t&&e.push(...t);me(J(e))}}function me(e,t){for(const n of w(e)?e:[...e])(n!==ne||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ge=e("__proto__,__v_isRef,__isVue"),ve=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(S)),ye=ke(),be=ke(!1,!0),_e=ke(!0),we=Ie();function Ie(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=ot(this);for(let t=0,i=this.length;t<i;t++)de(n,0,t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(ot)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){le();const n=ot(this)[t].apply(this,e);return ue(),n}})),e}function ke(e=!1,t=!1){return function(n,r,i){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_raw"===r&&i===(e?t?Ze:Ye:t?Xe:Je).get(n))return n;const s=w(n);if(!e&&s&&_(we,r))return Reflect.get(we,r,i);const o=Reflect.get(n,r,i);if(S(r)?ve.has(r):ge(r))return o;if(e||de(n,0,r),t)return o;if(ft(o)){return!s||!N(r)?o.value:o}return C(o)?e?tt(o):et(o):o}}function Ee(e=!1){return function(t,n,r,i){let s=t[n];if(!e&&!it(r)&&(r=ot(r),s=ot(s),!w(t)&&ft(s)&&!ft(r)))return s.value=r,!0;const o=w(t)&&N(n)?Number(n)<t.length:_(t,n),a=Reflect.set(t,n,r,i);return t===ot(i)&&(o?V(r,s)&&pe(t,"set",n,r):pe(t,"add",n,r)),a}}const Te={get:ye,set:Ee(),deleteProperty:function(e,t){const n=_(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&pe(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return S(t)&&ve.has(t)||de(e,0,t),n},ownKeys:function(e){return de(e,0,w(e)?"length":re),Reflect.ownKeys(e)}},Se={get:_e,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Ce=v({},Te,{get:be,set:Ee(!0)}),Oe=e=>e,Ae=e=>Reflect.getPrototypeOf(e);function Re(e,t,n=!1,r=!1){const i=ot(e=e.__v_raw),s=ot(t);t!==s&&!n&&de(i,0,t),!n&&de(i,0,s);const{has:o}=Ae(i),a=r?Oe:n?lt:ct;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function xe(e,t=!1){const n=this.__v_raw,r=ot(n),i=ot(e);return e!==i&&!t&&de(r,0,e),!t&&de(r,0,i),e===i?n.has(e):n.has(e)||n.has(i)}function Ne(e,t=!1){return e=e.__v_raw,!t&&de(ot(e),0,re),Reflect.get(e,"size",e)}function Pe(e){e=ot(e);const t=ot(this);return Ae(t).has.call(t,e)||(t.add(e),pe(t,"add",e,e)),this}function Le(e,t){t=ot(t);const n=ot(this),{has:r,get:i}=Ae(n);let s=r.call(n,e);s||(e=ot(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?V(t,o)&&pe(n,"set",e,t):pe(n,"add",e,t),this}function Me(e){const t=ot(this),{has:n,get:r}=Ae(t);let i=n.call(t,e);i||(e=ot(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&pe(t,"delete",e,void 0),s}function De(){const e=ot(this),t=0!==e.size,n=e.clear();return t&&pe(e,"clear",void 0,void 0),n}function Ue(e,t){return function(n,r){const i=this,s=i.__v_raw,o=ot(s),a=t?Oe:e?lt:ct;return!e&&de(o,0,re),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function je(e,t,n){return function(...r){const i=this.__v_raw,s=ot(i),o=I(s),a="entries"===e||e===Symbol.iterator&&o,c="keys"===e&&o,l=i[e](...r),u=n?Oe:t?lt:ct;return!t&&de(s,0,c?ie:re),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Fe(e){return function(...t){return"delete"!==e&&this}}function ze(){const e={get(e){return Re(this,e)},get size(){return Ne(this)},has:xe,add:Pe,set:Le,delete:Me,clear:De,forEach:Ue(!1,!1)},t={get(e){return Re(this,e,!1,!0)},get size(){return Ne(this)},has:xe,add:Pe,set:Le,delete:Me,clear:De,forEach:Ue(!1,!0)},n={get(e){return Re(this,e,!0)},get size(){return Ne(this,!0)},has(e){return xe.call(this,e,!0)},add:Fe("add"),set:Fe("set"),delete:Fe("delete"),clear:Fe("clear"),forEach:Ue(!0,!1)},r={get(e){return Re(this,e,!0,!0)},get size(){return Ne(this,!0)},has(e){return xe.call(this,e,!0)},add:Fe("add"),set:Fe("set"),delete:Fe("delete"),clear:Fe("clear"),forEach:Ue(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((i=>{e[i]=je(i,!1,!1),n[i]=je(i,!0,!1),t[i]=je(i,!1,!0),r[i]=je(i,!0,!0)})),[e,n,t,r]}const[Ve,$e,Be,We]=ze();function He(e,t){const n=t?e?We:Be:e?$e:Ve;return(t,r,i)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(_(n,r)&&r in t?n:t,r,i)}const qe={get:He(!1,!1)},Ke={get:He(!1,!0)},Ge={get:He(!0,!1)},Je=new WeakMap,Xe=new WeakMap,Ye=new WeakMap,Ze=new WeakMap;function Qe(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>R(e).slice(8,-1))(e))}function et(e){return e&&e.__v_isReadonly?e:nt(e,!1,Te,qe,Je)}function tt(e){return nt(e,!0,Se,Ge,Ye)}function nt(e,t,n,r,i){if(!C(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=Qe(e);if(0===o)return e;const a=new Proxy(e,2===o?r:n);return i.set(e,a),a}function rt(e){return it(e)?rt(e.__v_raw):!(!e||!e.__v_isReactive)}function it(e){return!(!e||!e.__v_isReadonly)}function st(e){return rt(e)||it(e)}function ot(e){const t=e&&e.__v_raw;return t?ot(t):e}function at(e){return B(e,"__v_skip",!0),e}const ct=e=>C(e)?et(e):e,lt=e=>C(e)?tt(e):e;function ut(e){fe()&&((e=ot(e)).dep||(e.dep=J()),he(e.dep))}function dt(e,t){(e=ot(e)).dep&&me(e.dep)}function ft(e){return Boolean(e&&!0===e.__v_isRef)}function ht(e){return pt(e,!1)}function pt(e,t){return ft(e)?e:new mt(e,t)}class mt{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ot(e),this._value=t?e:ct(e)}get value(){return ut(this),this._value}set value(e){e=this._shallow?e:ot(e),V(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:ct(e),dt(this))}}function gt(e){return ft(e)?e.value:e}const vt={get:(e,t,n)=>gt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return ft(i)&&!ft(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function yt(e){return rt(e)?e:new Proxy(e,vt)}function bt(e){const t=w(e)?new Array(e.length):{};for(const n in e)t[n]=wt(e,n);return t}class _t{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function wt(e,t){const n=e[t];return ft(n)?n:new _t(e,t)}class It{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new se(e,(()=>{this._dirty||(this._dirty=!0,dt(this))})),this.__v_isReadonly=n}get value(){const e=ot(this);return ut(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function kt(e,t){let n,r;const i=E(e);i?(n=e,r=f):(n=e.get,r=e.set);return new It(n,r,i||!r)}function Et(e,t,...n){const r=e.vnode.props||u;let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const e=`${"modelValue"===o?"model":o}Modifiers`,{number:t,trim:s}=r[e]||u;s?i=n.map((e=>e.trim())):t&&(i=n.map(W))}let a,c=r[a=z(t)]||r[a=z(D(t))];!c&&s&&(c=r[a=z(j(t))]),c&&Br(c,e,6,i);const l=r[a+"Once"];if(l){if(e.emitted){if(e.emitted[a])return}else e.emitted={};e.emitted[a]=!0,Br(l,e,6,i)}}function Tt(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const s=e.emits;let o={},a=!1;if(!E(e)){const r=e=>{const n=Tt(e,t,!0);n&&(a=!0,v(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||a?(w(s)?s.forEach((e=>o[e]=null)):v(o,s),r.set(e,o),o):(r.set(e,null),null)}function St(e,t){return!(!e||!m(t))&&(t=t.slice(2).replace(/Once$/,""),_(e,t[0].toLowerCase()+t.slice(1))||_(e,j(t))||_(e,t))}Promise.resolve();let Ct=null,Ot=null;function At(e){const t=Ct;return Ct=e,Ot=e&&e.type.__scopeId||null,t}function Rt(e,t=Ct,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&lr(-1);const i=At(t),s=e(...n);return At(i),r._d&&lr(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function xt(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:f,setupState:h,ctx:p,inheritAttrs:m}=e;let v,y;const b=At(e);try{if(4&n.shapeFlag){const e=i||r;v=Er(u.call(e,e,d,s,h,f,p)),y=c}else{const e=t;0,v=Er(e.length>1?e(s,{attrs:c,slots:a,emit:l}):e(s,null)),y=t.props?c:Nt(c)}}catch(w){sr.length=0,Wr(w,e,1),v=br(rr)}let _=v;if(y&&!1!==m){const e=Object.keys(y),{shapeFlag:t}=_;e.length&&7&t&&(o&&e.some(g)&&(y=Pt(y,o)),_=_r(_,y))}return n.dirs&&(_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),v=_,At(b),v}const Nt=e=>{let t;for(const n in e)("class"===n||"style"===n||m(n))&&((t||(t={}))[n]=e[n]);return t},Pt=(e,t)=>{const n={};for(const r in e)g(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Lt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!St(n,s))return!0}return!1}function Mt(e,t){if(Pr){let n=Pr.provides;const r=Pr.parent&&Pr.parent.provides;r===n&&(n=Pr.provides=Object.create(r)),n[e]=t}else;}function Dt(e,t,n=!1){const r=Pr||Ct;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&E(t)?t.call(r.proxy):t}}const Ut=[Function,Array],jt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ut,onEnter:Ut,onAfterEnter:Ut,onEnterCancelled:Ut,onBeforeLeave:Ut,onLeave:Ut,onAfterLeave:Ut,onLeaveCancelled:Ut,onBeforeAppear:Ut,onAppear:Ut,onAfterAppear:Ut,onAppearCancelled:Ut},setup(e,{slots:t}){const n=Lr(),r=function(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tn((()=>{e.isMounted=!0})),sn((()=>{e.isUnmounting=!0})),e}();let i;return()=>{const s=t.default&&Wt(t.default(),!0);if(!s||!s.length)return;const o=ot(e),{mode:a}=o,c=s[0];if(r.isLeaving)return Vt(c);const l=$t(c);if(!l)return Vt(c);const u=zt(l,o,r,n);Bt(l,u);const d=n.subTree,f=d&&$t(d);let h=!1;const{getTransitionKey:p}=l.type;if(p){const e=p();void 0===i?i=e:e!==i&&(i=e,h=!0)}if(f&&f.type!==rr&&(!pr(l,f)||h)){const e=zt(f,o,r,n);if(Bt(f,e),"out-in"===a)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},Vt(c);"in-out"===a&&l.type!==rr&&(e.delayLeave=(e,t,n)=>{Ft(r,f)[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return c}}};function Ft(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function zt(e,t,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:h,onLeaveCancelled:p,onBeforeAppear:m,onAppear:g,onAfterAppear:v,onAppearCancelled:y}=t,b=String(e.key),_=Ft(n,e),w=(e,t)=>{e&&Br(e,r,9,t)},I={mode:s,persisted:o,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=m||a}t._leaveCb&&t._leaveCb(!0);const s=_[b];s&&pr(e,s)&&s.el._leaveCb&&s.el._leaveCb(),w(r,[t])},enter(e){let t=c,r=l,s=u;if(!n.isMounted){if(!i)return;t=g||c,r=v||l,s=y||u}let o=!1;const a=e._enterCb=t=>{o||(o=!0,w(t?s:r,[e]),I.delayedLeave&&I.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();w(d,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),w(n?p:h,[t]),t._leaveCb=void 0,_[i]===e&&delete _[i])};_[i]=e,f?(f(t,o),f.length<=1&&o()):o()},clone:e=>zt(e,t,n,r)};return I}function Vt(e){if(Kt(e))return(e=_r(e)).children=null,e}function $t(e){return Kt(e)?e.children?e.children[0]:void 0:e}function Bt(e,t){6&e.shapeFlag&&e.component?Bt(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Wt(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const s=e[i];s.type===tr?(128&s.patchFlag&&r++,n=n.concat(Wt(s.children,t))):(t||s.type!==rr)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function Ht(e){return E(e)?{setup:e,name:e.name}:e}const qt=e=>!!e.type.__asyncLoader,Kt=e=>e.type.__isKeepAlive;function Gt(e,t){Xt(e,"a",t)}function Jt(e,t){Xt(e,"da",t)}function Xt(e,t,n=Pr){const r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(Zt(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Kt(e.parent.vnode)&&Yt(r,t,n,e),e=e.parent}}function Yt(e,t,n,r){const i=Zt(t,e,r,!0);on((()=>{y(r[t],i)}),n)}function Zt(e,t,n=Pr,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;le(),Mr(n);const i=Br(t,n,e,r);return Dr(),ue(),i});return r?i.unshift(s):i.push(s),s}}const Qt=e=>(t,n=Pr)=>(!jr||"sp"===e)&&Zt(e,t,n),en=Qt("bm"),tn=Qt("m"),nn=Qt("bu"),rn=Qt("u"),sn=Qt("bum"),on=Qt("um"),an=Qt("sp"),cn=Qt("rtg"),ln=Qt("rtc");function un(e,t=Pr){Zt("ec",e,t)}let dn=!0;function fn(e){const t=mn(e),n=e.proxy,r=e.ctx;dn=!1,t.beforeCreate&&hn(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:p,updated:m,activated:g,deactivated:v,beforeDestroy:y,beforeUnmount:b,destroyed:_,unmounted:I,render:k,renderTracked:T,renderTriggered:S,errorCaptured:O,serverPrefetch:A,expose:R,inheritAttrs:x,components:N,directives:P,filters:L}=t;if(l&&function(e,t,n=f,r=!1){w(e)&&(e=bn(e));for(const i in e){const n=e[i];let s;s=C(n)?"default"in n?Dt(n.from||i,n.default,!0):Dt(n.from||i):Dt(n),ft(s)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[i]=s}}(l,r,null,e.appContext.config.unwrapInjectedRef),o)for(const f in o){const e=o[f];E(e)&&(r[f]=e.bind(n))}if(i){const t=i.call(n,n);C(t)&&(e.data=et(t))}if(dn=!0,s)for(const w in s){const e=s[w],t=kt({get:E(e)?e.bind(n,n):E(e.get)?e.get.bind(n,n):f,set:!E(e)&&E(e.set)?e.set.bind(n):f});Object.defineProperty(r,w,{enumerable:!0,configurable:!0,get:()=>t.value,set:e=>t.value=e})}if(a)for(const f in a)pn(a[f],r,n,f);if(c){const e=E(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{Mt(t,e[t])}))}function M(e,t){w(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(u&&hn(u,e,"c"),M(en,d),M(tn,h),M(nn,p),M(rn,m),M(Gt,g),M(Jt,v),M(un,O),M(ln,T),M(cn,S),M(sn,b),M(on,I),M(an,A),w(R))if(R.length){const t=e.exposed||(e.exposed={});R.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});k&&e.render===f&&(e.render=k),null!=x&&(e.inheritAttrs=x),N&&(e.components=N),P&&(e.directives=P)}function hn(e,t,n){Br(w(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function pn(e,t,n,r){const i=r.includes(".")?vi(n,r):()=>n[r];if(T(e)){const n=t[e];E(n)&&pi(i,n)}else if(E(e))pi(i,e.bind(n));else if(C(e))if(w(e))e.forEach((e=>pn(e,t,n,r)));else{const r=E(e.handler)?e.handler.bind(n):t[e.handler];E(r)&&pi(i,r,e)}}function mn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((e=>gn(c,e,o,!0))),gn(c,t,o)):c=t,s.set(t,c),c}function gn(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&gn(e,s,n,!0),i&&i.forEach((t=>gn(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=vn[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const vn={data:yn,props:wn,emits:wn,methods:wn,computed:wn,beforeCreate:_n,created:_n,beforeMount:_n,mounted:_n,beforeUpdate:_n,updated:_n,beforeDestroy:_n,beforeUnmount:_n,destroyed:_n,unmounted:_n,activated:_n,deactivated:_n,errorCaptured:_n,serverPrefetch:_n,components:wn,directives:wn,watch:function(e,t){if(!e)return t;if(!t)return e;const n=v(Object.create(null),e);for(const r in t)n[r]=_n(e[r],t[r]);return n},provide:yn,inject:function(e,t){return wn(bn(e),bn(t))}};function yn(e,t){return t?e?function(){return v(E(e)?e.call(this,this):e,E(t)?t.call(this,this):t)}:t:e}function bn(e){if(w(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function _n(e,t){return e?[...new Set([].concat(e,t))]:t}function wn(e,t){return e?v(v(Object.create(null),e),t):t}function In(e,t,n,r=!1){const i={},s={};B(s,mr,1),e.propsDefaults=Object.create(null),kn(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:nt(i,!1,Ce,Ke,Xe):e.type.props?e.props=i:e.props=s,e.attrs=s}function kn(e,t,n,r){const[i,s]=e.propsOptions;let o,a=!1;if(t)for(let c in t){if(P(c))continue;const l=t[c];let u;i&&_(i,u=D(c))?s&&s.includes(u)?(o||(o={}))[u]=l:n[u]=l:St(e.emitsOptions,c)||c in r&&l===r[c]||(r[c]=l,a=!0)}if(s){const t=ot(n),r=o||u;for(let o=0;o<s.length;o++){const a=s[o];n[a]=En(i,t,a,r[a],e,!_(r,a))}}return a}function En(e,t,n,r,i,s){const o=e[n];if(null!=o){const e=_(o,"default");if(e&&void 0===r){const e=o.default;if(o.type!==Function&&E(e)){const{propsDefaults:s}=i;n in s?r=s[n]:(Mr(i),r=s[n]=e.call(null,t),Dr())}else r=e}o[0]&&(s&&!e?r=!1:!o[1]||""!==r&&r!==j(n)||(r=!0))}return r}function Tn(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let c=!1;if(!E(e)){const r=e=>{c=!0;const[n,r]=Tn(e,t,!0);v(o,n),r&&a.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!c)return r.set(e,d),d;if(w(s))for(let d=0;d<s.length;d++){const e=D(s[d]);Sn(e)&&(o[e]=u)}else if(s)for(const u in s){const e=D(u);if(Sn(e)){const t=s[u],n=o[e]=w(t)||E(t)?{type:t}:t;if(n){const t=An(Boolean,n.type),r=An(String,n.type);n[0]=t>-1,n[1]=r<0||t<r,(t>-1||_(n,"default"))&&a.push(e)}}}const l=[o,a];return r.set(e,l),l}function Sn(e){return"$"!==e[0]}function Cn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function On(e,t){return Cn(e)===Cn(t)}function An(e,t){return w(t)?t.findIndex((t=>On(t,e))):E(t)&&On(t,e)?0:-1}const Rn=e=>"_"===e[0]||"$stable"===e,xn=e=>w(e)?e.map(Er):[Er(e)],Nn=(e,t,n)=>{const r=Rt(((...e)=>xn(t(...e))),n);return r._c=!1,r},Pn=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Rn(i))continue;const n=e[i];if(E(n))t[i]=Nn(0,n,r);else if(null!=n){const e=xn(n);t[i]=()=>e}}},Ln=(e,t)=>{const n=xn(t);e.slots.default=()=>n};function Mn(e,t){if(null===Ct)return e;const n=Ct.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[e,s,o,a=u]=t[i];E(e)&&(e={mounted:e,updated:e}),e.deep&&yi(s),r.push({dir:e,instance:n,value:s,oldValue:void 0,arg:o,modifiers:a})}return e}function Dn(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(le(),Br(c,n,8,[e.el,a,e,t]),ue())}}function Un(){return{app:null,config:{isNativeTag:h,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jn=0;function Fn(e,t){return function(n,r=null){null==r||C(r)||(r=null);const i=Un(),s=new Set;let o=!1;const a=i.app={_uid:jn++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:_i,get config(){return i.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&E(e.install)?(s.add(e),e.install(a,...t)):E(e)&&(s.add(e),e(a,...t))),a),mixin:e=>(i.mixins.includes(e)||i.mixins.push(e),a),component:(e,t)=>t?(i.components[e]=t,a):i.components[e],directive:(e,t)=>t?(i.directives[e]=t,a):i.directives[e],mount(s,c,l){if(!o){const u=br(n,r);return u.appContext=i,c&&t?t(u,s):e(u,s,l),o=!0,a._container=s,s.__vue_app__=a,Vr(u.component)||u.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(i.provides[e]=t,a)};return a}}const zn=function(e,t){t&&t.pendingBranch?w(e)?t.effects.push(...e):t.effects.push(e):ai(e,Qr,Zr,ei)};function Vn(e){return function(e,t){(H||(H="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})).__VUE__=!0;const{insert:n,remove:r,patchProp:i,createElement:s,createText:o,createComment:a,setText:c,setElementText:l,parentNode:h,nextSibling:p,setScopeId:m=f,cloneNode:g,insertStaticContent:y}=e,b=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!pr(e,t)&&(r=ne(e),Y(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:d}=t;switch(l){case nr:w(e,t,n,r);break;case rr:I(e,t,n,r);break;case ir:null==e&&k(t,n,r,o);break;case tr:M(e,t,n,r,i,s,o,a,c);break;default:1&d?S(e,t,n,r,i,s,o,a,c):6&d?U(e,t,n,r,i,s,o,a,c):(64&d||128&d)&&l.process(e,t,n,r,i,s,o,a,c,ie)}null!=u&&i&&$n(u,e&&e.ref,s,t||e,!t)},w=(e,t,r,i)=>{if(null==e)n(t.el=o(t.children),r,i);else{const n=t.el=e.el;t.children!==e.children&&c(n,t.children)}},I=(e,t,r,i)=>{null==e?n(t.el=a(t.children||""),r,i):t.el=e.el},k=(e,t,n,r)=>{[e.el,e.anchor]=y(e.children,t,n,r)},E=({el:e,anchor:t},r,i)=>{let s;for(;e&&e!==t;)s=p(e),n(e,r,i),e=s;n(t,r,i)},T=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=p(e),r(e),e=n;r(t)},S=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?C(t,n,r,i,s,o,a,c):x(e,t,i,s,o,a,c)},C=(e,t,r,o,a,c,u,d)=>{let f,h;const{type:p,props:m,shapeFlag:v,transition:y,patchFlag:b,dirs:_}=e;if(e.el&&void 0!==g&&-1===b)f=e.el=g(e.el);else{if(f=e.el=s(e.type,c,m&&m.is,m),8&v?l(f,e.children):16&v&&R(e.children,f,null,o,a,c&&"foreignObject"!==p,u,d),_&&Dn(e,null,o,"created"),m){for(const t in m)"value"===t||P(t)||i(f,t,null,m[t],c,e.children,o,a,te);"value"in m&&i(f,"value",null,m.value),(h=m.onVnodeBeforeMount)&&Bn(h,o,e)}A(f,e,e.scopeId,u,o)}_&&Dn(e,null,o,"beforeMount");const w=(!a||a&&!a.pendingBranch)&&y&&!y.persisted;w&&y.beforeEnter(f),n(f,t,r),((h=m&&m.onVnodeMounted)||w||_)&&zn((()=>{h&&Bn(h,o,e),w&&y.enter(f),_&&Dn(e,null,o,"mounted")}),a)},A=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){if(t===i.subTree){const t=i.vnode;A(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},R=(e,t,n,r,i,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?Tr(e[l]):Er(e[l]);b(null,c,t,n,r,i,s,o,a)}},x=(e,t,n,r,s,o,a)=>{const c=t.el=e.el;let{patchFlag:d,dynamicChildren:f,dirs:h}=t;d|=16&e.patchFlag;const p=e.props||u,m=t.props||u;let g;(g=m.onVnodeBeforeUpdate)&&Bn(g,n,t,e),h&&Dn(t,e,n,"beforeUpdate");const v=s&&"foreignObject"!==t.type;if(f?N(e.dynamicChildren,f,c,n,r,v,o):a||q(e,t,c,null,n,r,v,o,!1),d>0){if(16&d)L(c,t,p,m,n,r,s);else if(2&d&&p.class!==m.class&&i(c,"class",null,m.class,s),4&d&&i(c,"style",p.style,m.style,s),8&d){const o=t.dynamicProps;for(let t=0;t<o.length;t++){const a=o[t],l=p[a],u=m[a];u===l&&"value"!==a||i(c,a,l,u,s,e.children,n,r,te)}}1&d&&e.children!==t.children&&l(c,t.children)}else a||null!=f||L(c,t,p,m,n,r,s);((g=m.onVnodeUpdated)||h)&&zn((()=>{g&&Bn(g,n,t,e),h&&Dn(t,e,n,"updated")}),r)},N=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===tr||!pr(c,l)||70&c.shapeFlag)?h(c.el):n;b(c,l,u,null,r,i,s,o,!0)}},L=(e,t,n,r,s,o,a)=>{if(n!==r){for(const c in r){if(P(c))continue;const l=r[c],u=n[c];l!==u&&"value"!==c&&i(e,c,u,l,a,t.children,s,o,te)}if(n!==u)for(const c in n)P(c)||c in r||i(e,c,n[c],null,a,t.children,s,o,te);"value"in r&&i(e,"value",n.value,r.value)}},M=(e,t,r,i,s,a,c,l,u)=>{const d=t.el=e?e.el:o(""),f=t.anchor=e?e.anchor:o("");let{patchFlag:h,dynamicChildren:p,slotScopeIds:m}=t;m&&(l=l?l.concat(m):m),null==e?(n(d,r,i),n(f,r,i),R(t.children,r,f,s,a,c,l,u)):h>0&&64&h&&p&&e.dynamicChildren?(N(e.dynamicChildren,p,r,s,a,c,l),(null!=t.key||s&&t===s.subTree)&&Wn(e,t,!0)):q(e,t,r,f,s,a,c,l,u)},U=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):F(t,n,r,i,s,o,c):z(e,t,c)},F=(e,t,n,r,i,s,o)=>{const a=e.component=function(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||xr,s={uid:Nr++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,update:null,scope:new G(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tn(r,i),emitsOptions:Tt(r,i),emit:null,emitted:null,propsDefaults:u,inheritAttrs:r.inheritAttrs,ctx:u,data:u,props:u,attrs:u,slots:u,refs:u,setupState:u,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};s.ctx={_:s},s.root=t?t.root:s,s.emit=Et.bind(null,s),e.ce&&e.ce(s);return s}(e,r,i);if(Kt(e)&&(a.ctx.renderer=ie),function(e,t=!1){jr=t;const{props:n,children:r}=e.vnode,i=Ur(e);In(e,n,i,t),((e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=ot(t),B(t,"_",n)):Pn(t,e.slots={})}else e.slots={},t&&Ln(e,t);B(e.slots,mr,1)})(e,r);const s=i?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=at(new Proxy(e.ctx,Rr));const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?function(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=function(e){return new Proxy(e.attrs,{get:(t,n)=>(de(e,0,"$attrs"),t[n])})}(e))},slots:e.slots,emit:e.emit,expose:t}}(e):null;Mr(e),le();const i=$r(r,e,0,[e.props,n]);if(ue(),Dr(),O(i)){if(i.then(Dr,Dr),t)return i.then((n=>{Fr(e,n,t)})).catch((t=>{Wr(t,e,0)}));e.asyncDep=i}else Fr(e,i,t)}else zr(e,t)}(e,t):void 0;jr=!1}(a),a.asyncDep){if(i&&i.registerDep(a,V),!e.el){const e=a.subTree=br(rr);I(null,e,t,n)}}else V(a,e,t,n,i,s,o)},z=(e,t,n)=>{const r=t.component=e.component;if(function(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Lt(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?Lt(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!St(l,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void W(r,t,n);r.next=t,function(e){const t=Kr.indexOf(e);t>Gr&&Kr.splice(t,1)}(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},V=(e,t,n,r,i,s,o)=>{const a=new se((()=>{if(e.isMounted){let t,{next:n,bu:r,u:c,parent:l,vnode:u}=e,d=n;a.allowRecurse=!1,n?(n.el=u.el,W(e,n,o)):n=u,r&&$(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Bn(t,l,n,u),a.allowRecurse=!0;const f=xt(e),p=e.subTree;e.subTree=f,b(p,f,h(p.el),ne(p),e,i,s),n.el=f.el,null===d&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,f.el),c&&zn(c,i),(t=n.props&&n.props.onVnodeUpdated)&&zn((()=>Bn(t,l,n,u)),i)}else{let o;const{el:c,props:l}=t,{bm:u,m:d,parent:f}=e,h=qt(t);if(a.allowRecurse=!1,u&&$(u),!h&&(o=l&&l.onVnodeBeforeMount)&&Bn(o,f,t),a.allowRecurse=!0,c&&ae){const n=()=>{e.subTree=xt(e),ae(c,e.subTree,e,i,null)};h?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{const o=e.subTree=xt(e);b(null,o,n,r,e,i,s),t.el=o.el}if(d&&zn(d,i),!h&&(o=l&&l.onVnodeMounted)){const e=t;zn((()=>Bn(o,f,e)),i)}256&t.shapeFlag&&e.a&&zn(e.a,i),e.isMounted=!0,t=n=r=null}}),(()=>si(e.update)),e.scope),c=e.update=a.run.bind(a);c.id=e.uid,a.allowRecurse=c.allowRecurse=!0,c()},W=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=ot(i),[c]=e.propsOptions;let l=!1;if(!(r||o>0)||16&o){let r;kn(e,t,i,s)&&(l=!0);for(const s in a)t&&(_(t,s)||(r=j(s))!==s&&_(t,r))||(c?!n||void 0===n[s]&&void 0===n[r]||(i[s]=En(c,a,s,void 0,e,!0)):delete i[s]);if(s!==a)for(const e in s)t&&_(t,e)||(delete s[e],l=!0)}else if(8&o){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];const u=t[o];if(c)if(_(s,o))u!==s[o]&&(s[o]=u,l=!0);else{const t=D(o);i[t]=En(c,a,t,u,e,!1)}else u!==s[o]&&(s[o]=u,l=!0)}}l&&pe(e,"set","$attrs")}(e,t.props,r,n),((e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=u;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:(v(i,t),n||1!==e||delete i._):(s=!t.$stable,Pn(t,i)),o=t}else t&&(Ln(e,t),o={default:1});if(s)for(const a in i)Rn(a)||a in o||delete i[a]})(e,t.children,n),le(),ci(void 0,e.update),ue()},q=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,d=e?e.shapeFlag:0,f=t.children,{patchFlag:h,shapeFlag:p}=t;if(h>0){if(128&h)return void J(u,f,n,r,i,s,o,a,c);if(256&h)return void K(u,f,n,r,i,s,o,a,c)}8&p?(16&d&&te(u,i,s),f!==u&&l(n,f)):16&d?16&p?J(u,f,n,r,i,s,o,a,c):te(u,i,s,!0):(8&d&&l(n,""),16&p&&R(f,n,r,i,s,o,a,c))},K=(e,t,n,r,i,s,o,a,c)=>{t=t||d;const l=(e=e||d).length,u=t.length,f=Math.min(l,u);let h;for(h=0;h<f;h++){const r=t[h]=c?Tr(t[h]):Er(t[h]);b(e[h],r,n,null,i,s,o,a,c)}l>u?te(e,i,s,!0,!1,f):R(t,n,r,i,s,o,a,c,f)},J=(e,t,n,r,i,s,o,a,c)=>{let l=0;const u=t.length;let f=e.length-1,h=u-1;for(;l<=f&&l<=h;){const r=e[l],u=t[l]=c?Tr(t[l]):Er(t[l]);if(!pr(r,u))break;b(r,u,n,null,i,s,o,a,c),l++}for(;l<=f&&l<=h;){const r=e[f],l=t[h]=c?Tr(t[h]):Er(t[h]);if(!pr(r,l))break;b(r,l,n,null,i,s,o,a,c),f--,h--}if(l>f){if(l<=h){const e=h+1,d=e<u?t[e].el:r;for(;l<=h;)b(null,t[l]=c?Tr(t[l]):Er(t[l]),n,d,i,s,o,a,c),l++}}else if(l>h)for(;l<=f;)Y(e[l],i,s,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=h;l++){const e=t[l]=c?Tr(t[l]):Er(t[l]);null!=e.key&&g.set(e.key,l)}let v,y=0;const _=h-m+1;let w=!1,I=0;const k=new Array(_);for(l=0;l<_;l++)k[l]=0;for(l=p;l<=f;l++){const r=e[l];if(y>=_){Y(r,i,s,!0);continue}let u;if(null!=r.key)u=g.get(r.key);else for(v=m;v<=h;v++)if(0===k[v-m]&&pr(r,t[v])){u=v;break}void 0===u?Y(r,i,s,!0):(k[u-m]=l+1,u>=I?I=u:w=!0,b(r,t[u],n,null,i,s,o,a,c),y++)}const E=w?function(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];for(;s-- >0;)n[s]=o,o=t[o];return n}(k):d;for(v=E.length-1,l=_-1;l>=0;l--){const e=m+l,d=t[e],f=e+1<u?t[e+1].el:r;0===k[l]?b(null,d,n,f,i,s,o,a,c):w&&(v<0||l!==E[v]?X(d,n,f,2):v--)}}},X=(e,t,r,i,s=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void X(e.component.subTree,t,r,i);if(128&u)return void e.suspense.move(t,r,i);if(64&u)return void a.move(e,t,r,ie);if(a===tr){n(o,t,r);for(let e=0;e<l.length;e++)X(l[e],t,r,i);return void n(e.anchor,t,r)}if(a===ir)return void E(e,t,r);if(2!==i&&1&u&&c)if(0===i)c.beforeEnter(o),n(o,t,r),zn((()=>c.enter(o)),s);else{const{leave:e,delayLeave:i,afterLeave:s}=c,a=()=>n(o,t,r),l=()=>{e(o,(()=>{a(),s&&s()}))};i?i(o,a,l):l()}else n(o,t,r)},Y=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f}=e;if(null!=a&&$n(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const h=1&u&&f,p=!qt(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&Bn(m,t,e),6&u)ee(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);h&&Dn(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,ie,r):l&&(s!==tr||d>0&&64&d)?te(l,t,n,!1,!0):(s===tr&&384&d||!i&&16&u)&&te(c,t,n),r&&Z(e)}(p&&(m=o&&o.onVnodeUnmounted)||h)&&zn((()=>{m&&Bn(m,t,e),h&&Dn(e,null,t,"unmounted")}),n)},Z=e=>{const{type:t,el:n,anchor:i,transition:s}=e;if(t===tr)return void Q(n,i);if(t===ir)return void T(e);const o=()=>{r(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:r}=s,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},Q=(e,t)=>{let n;for(;e!==t;)n=p(e),r(e),e=n;r(t)},ee=(e,t,n)=>{const{bum:r,scope:i,update:s,subTree:o,um:a}=e;r&&$(r),i.stop(),s&&(s.active=!1,Y(o,e,t,n)),a&&zn(a,t),zn((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},te=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)Y(e[o],t,n,r,i)},ne=e=>6&e.shapeFlag?ne(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),re=(e,t,n)=>{null==e?t._vnode&&Y(t._vnode,null,null,!0):b(t._vnode||null,e,t,null,null,null,n),li(),t._vnode=e},ie={p:b,um:Y,m:X,r:Z,mt:F,mc:R,pc:q,pbc:N,n:ne,o:e};let oe,ae;t&&([oe,ae]=t(ie));return{render:re,hydrate:oe,createApp:Fn(re,oe)}}(e)}function $n(e,t,n,r,i=!1){if(w(e))return void e.forEach(((e,s)=>$n(e,t&&(w(t)?t[s]:t),n,r,i)));if(qt(r)&&!i)return;const s=4&r.shapeFlag?Vr(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=e,l=t&&t.r,d=a.refs===u?a.refs={}:a.refs,f=a.setupState;if(null!=l&&l!==c&&(T(l)?(d[l]=null,_(f,l)&&(f[l]=null)):ft(l)&&(l.value=null)),T(c)){const e=()=>{d[c]=o,_(f,c)&&(f[c]=o)};o?(e.id=-1,zn(e,n)):e()}else if(ft(c)){const e=()=>{c.value=o};o?(e.id=-1,zn(e,n)):e()}else E(c)&&$r(c,a,12,[o,d])}function Bn(e,t,n,r=null){Br(e,t,7,[n,r])}function Wn(e,t,n=!1){const r=e.children,i=t.children;if(w(r)&&w(i))for(let s=0;s<r.length;s++){const e=r[s];let t=i[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[s]=Tr(i[s]),t.el=e.el),n||Wn(e,t))}}const Hn=e=>e&&(e.disabled||""===e.disabled),qn=e=>"undefined"!=typeof SVGElement&&e instanceof SVGElement,Kn=(e,t)=>{const n=e&&e.to;if(T(n)){if(t){return t(n)}return null}return n};function Gn(e,t,n,{o:{insert:r},m:i},s=2){0===s&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=e,d=2===s;if(d&&r(o,t,n),(!d||Hn(u))&&16&c)for(let f=0;f<l.length;f++)i(l[f],t,n,2);d&&r(a,t,n)}const Jn={__isTeleport:!0,process(e,t,n,r,i,s,o,a,c,l){const{mc:u,pc:d,pbc:f,o:{insert:h,querySelector:p,createText:m,createComment:g}}=l,v=Hn(t.props);let{shapeFlag:y,children:b,dynamicChildren:_}=t;if(null==e){const e=t.el=m(""),l=t.anchor=m("");h(e,n,r),h(l,n,r);const d=t.target=Kn(t.props,p),f=t.targetAnchor=m("");d&&(h(f,d),o=o||qn(d));const g=(e,t)=>{16&y&&u(b,e,t,i,s,o,a,c)};v?g(n,l):d&&g(d,f)}else{t.el=e.el;const r=t.anchor=e.anchor,u=t.target=e.target,h=t.targetAnchor=e.targetAnchor,m=Hn(e.props),g=m?n:u,y=m?r:h;if(o=o||qn(u),_?(f(e.dynamicChildren,_,g,i,s,o,a),Wn(e,t,!0)):c||d(e,t,g,y,i,s,o,a,!1),v)m||Gn(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=Kn(t.props,p);e&&Gn(t,e,null,l,0)}else m&&Gn(t,u,h,l,1)}},remove(e,t,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:d,props:f}=e;if(d&&s(u),(o||!Hn(f))&&(s(l),16&a))for(let h=0;h<c.length;h++){const e=c[h];i(e,t,n,!0,!!e.dynamicChildren)}},move:Gn,hydrate:function(e,t,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=t.target=Kn(t.props,c);if(u){const c=u._lpa||u.firstChild;16&t.shapeFlag&&(Hn(t.props)?(t.anchor=l(o(e),t,a(e),n,r,i,s),t.targetAnchor=c):(t.anchor=o(e),t.targetAnchor=l(c,t,u,n,r,i,s)),u._lpa=t.targetAnchor&&o(t.targetAnchor))}return t.anchor&&o(t.anchor)}};function Xn(e,t){return Qn("components",e,!0,t)||e}const Yn=Symbol();function Zn(e){return T(e)?Qn("components",e,!1)||e:e||Yn}function Qn(e,t,n=!0,r=!1){const i=Ct||Pr;if(i){const n=i.type;if("components"===e){const e=function(e){return E(e)&&e.displayName||e.name}(n);if(e&&(e===t||e===D(t)||e===F(D(t))))return n}const s=er(i[e]||n[e],t)||er(i.appContext[e],t);return!s&&r?n:s}}function er(e,t){return e&&(e[t]||e[D(t)]||e[F(D(t))])}const tr=Symbol(void 0),nr=Symbol(void 0),rr=Symbol(void 0),ir=Symbol(void 0),sr=[];let or=null;function ar(e=!1){sr.push(or=e?null:[])}let cr=1;function lr(e){cr+=e}function ur(e){return e.dynamicChildren=cr>0?or||d:null,sr.pop(),or=sr[sr.length-1]||null,cr>0&&or&&or.push(e),e}function dr(e,t,n,r,i,s){return ur(yr(e,t,n,r,i,s,!0))}function fr(e,t,n,r,i){return ur(br(e,t,n,r,i,!0))}function hr(e){return!!e&&!0===e.__v_isVNode}function pr(e,t){return e.type===t.type&&e.key===t.key}const mr="__vInternal",gr=({key:e})=>null!=e?e:null,vr=({ref:e})=>null!=e?T(e)||ft(e)||E(e)?{i:Ct,r:e}:e:null;function yr(e,t=null,n=null,r=0,i=null,s=(e===tr?0:1),o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&gr(t),ref:t&&vr(t),scopeId:Ot,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Sr(c,n),128&s&&e.normalize(c)):n&&(c.shapeFlag|=T(n)?8:16),cr>0&&!o&&or&&(c.patchFlag>0||6&s)&&32!==c.patchFlag&&or.push(c),c}const br=function(e,t=null,n=null,i=0,s=null,o=!1){e&&e!==Yn||(e=rr);if(hr(e)){const r=_r(e,t,!0);return n&&Sr(r,n),r}c=e,E(c)&&"__vccOpts"in c&&(e=e.__vccOpts);var c;if(t){t=function(e){return e?st(e)||mr in e?v({},e):e:null}(t);let{class:e,style:n}=t;e&&!T(e)&&(t.class=a(e)),C(n)&&(st(n)&&!w(n)&&(n=v({},n)),t.style=r(n))}const l=T(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:C(e)?4:E(e)?2:0;return yr(e,t,n,i,s,l,o,!0)};function _r(e,t,n=!1){const{props:i,ref:s,patchFlag:o,children:c}=e,l=t?function(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=a([t.class,i.class]));else if("style"===e)t.style=r([t.style,i.style]);else if(m(e)){const n=t[e],r=i[e];n===r||w(n)&&n.includes(r)||(t[e]=n?[].concat(n,r):r)}else""!==e&&(t[e]=i[e])}return t}(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&gr(l),ref:t&&t.ref?n&&s?w(s)?s.concat(vr(t)):[s,vr(t)]:vr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==tr?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&_r(e.ssContent),ssFallback:e.ssFallback&&_r(e.ssFallback),el:e.el,anchor:e.anchor}}function wr(e=" ",t=0){return br(nr,null,e,t)}function Ir(e,t){const n=br(ir,null,e);return n.staticCount=t,n}function kr(e="",t=!1){return t?(ar(),fr(rr,null,e)):br(rr,null,e)}function Er(e){return null==e||"boolean"==typeof e?br(rr):w(e)?br(tr,null,e.slice()):"object"==typeof e?Tr(e):br(nr,null,String(e))}function Tr(e){return null===e.el||e.memo?e:_r(e)}function Sr(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(w(t))n=16;else if("object"==typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Sr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||mr in t?3===r&&Ct&&(1===Ct.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Ct}}else E(t)?(t={default:t,_ctx:Ct},n=32):(t=String(t),64&r?(n=16,t=[wr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Cr(e,t,n,r){let i;const s=n&&n[r];if(w(e)||T(e)){i=new Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,s&&s[n])}else if("number"==typeof e){i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,s&&s[n])}else if(C(e))if(e[Symbol.iterator])i=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];i[r]=t(e[o],o,r,s&&s[r])}}else i=[];return n&&(n[r]=i),i}const Or=e=>e?Ur(e)?Vr(e)||e.proxy:Or(e.parent):null,Ar=v(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Or(e.parent),$root:e=>Or(e.root),$emit:e=>e.emit,$options:e=>mn(e),$forceUpdate:e=>()=>si(e.update),$nextTick:e=>ii.bind(e.proxy),$watch:e=>gi.bind(e)}),Rr={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=e;let l;if("$"!==t[0]){const a=o[t];if(void 0!==a)switch(a){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(r!==u&&_(r,t))return o[t]=1,r[t];if(i!==u&&_(i,t))return o[t]=2,i[t];if((l=e.propsOptions[0])&&_(l,t))return o[t]=3,s[t];if(n!==u&&_(n,t))return o[t]=4,n[t];dn&&(o[t]=0)}}const d=Ar[t];let f,h;return d?("$attrs"===t&&de(e,0,t),d(e)):(f=a.__cssModules)&&(f=f[t])?f:n!==u&&_(n,t)?(o[t]=4,n[t]):(h=c.config.globalProperties,_(h,t)?h[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;if(i!==u&&_(i,t))i[t]=n;else if(r!==u&&_(r,t))r[t]=n;else if(_(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||e!==u&&_(e,o)||t!==u&&_(t,o)||(a=s[0])&&_(a,o)||_(r,o)||_(Ar,o)||_(i.config.globalProperties,o)}},xr=Un();let Nr=0;let Pr=null;const Lr=()=>Pr||Ct,Mr=e=>{Pr=e,e.scope.on()},Dr=()=>{Pr&&Pr.scope.off(),Pr=null};function Ur(e){return 4&e.vnode.shapeFlag}let jr=!1;function Fr(e,t,n){E(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:C(t)&&(e.setupState=yt(t)),zr(e,n)}function zr(e,t,n){const r=e.type;e.render||(e.render=r.render||f),Mr(e),le(),fn(e),ue(),Dr()}function Vr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(yt(at(e.exposed)),{get:(t,n)=>n in t?t[n]:n in Ar?Ar[n](e):void 0}))}function $r(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Wr(s,t,n)}return i}function Br(e,t,n,r){if(E(e)){const i=$r(e,t,n,r);return i&&O(i)&&i.catch((e=>{Wr(e,t,n)})),i}const i=[];for(let s=0;s<e.length;s++)i.push(Br(e[s],t,n,r));return i}function Wr(e,t,n,r=!0){t&&t.vnode;if(t){let r=t.parent;const i=t.proxy,s=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void $r(o,null,10,[e,i,s])}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let Hr=!1,qr=!1;const Kr=[];let Gr=0;const Jr=[];let Xr=null,Yr=0;const Zr=[];let Qr=null,ei=0;const ti=Promise.resolve();let ni=null,ri=null;function ii(e){const t=ni||ti;return e?t.then(this?e.bind(this):e):t}function si(e){Kr.length&&Kr.includes(e,Hr&&e.allowRecurse?Gr+1:Gr)||e===ri||(null==e.id?Kr.push(e):Kr.splice(function(e){let t=Gr+1,n=Kr.length;for(;t<n;){const r=t+n>>>1;ui(Kr[r])<e?t=r+1:n=r}return t}(e.id),0,e),oi())}function oi(){Hr||qr||(qr=!0,ni=ti.then(di))}function ai(e,t,n,r){w(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),oi()}function ci(e,t=null){if(Jr.length){for(ri=t,Xr=[...new Set(Jr)],Jr.length=0,Yr=0;Yr<Xr.length;Yr++)Xr[Yr]();Xr=null,Yr=0,ri=null,ci(e,t)}}function li(e){if(Zr.length){const e=[...new Set(Zr)];if(Zr.length=0,Qr)return void Qr.push(...e);for(Qr=e,Qr.sort(((e,t)=>ui(e)-ui(t))),ei=0;ei<Qr.length;ei++)Qr[ei]();Qr=null,ei=0}}const ui=e=>null==e.id?1/0:e.id;function di(e){qr=!1,Hr=!0,ci(e),Kr.sort(((e,t)=>ui(e)-ui(t)));try{for(Gr=0;Gr<Kr.length;Gr++){const e=Kr[Gr];e&&!1!==e.active&&$r(e,null,14)}}finally{Gr=0,Kr.length=0,li(),Hr=!1,ni=null,(Kr.length||Jr.length||Zr.length)&&di(e)}}function fi(e,t){return mi(e,null,t)}const hi={};function pi(e,t,n){return mi(e,t,n)}function mi(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=u){const a=Pr;let c,l,d=!1,h=!1;if(ft(e)?(c=()=>e.value,d=!!e._shallow):rt(e)?(c=()=>e,r=!0):w(e)?(h=!0,d=e.some(rt),c=()=>e.map((e=>ft(e)?e.value:rt(e)?yi(e):E(e)?$r(e,a,2):void 0))):c=E(e)?t?()=>$r(e,a,2):()=>{if(!a||!a.isUnmounted)return l&&l(),Br(e,a,3,[p])}:f,t&&r){const e=c;c=()=>yi(e())}let p=e=>{l=b.onStop=()=>{$r(e,a,4)}};if(jr)return p=f,t?n&&Br(t,a,3,[c(),h?[]:void 0,p]):c(),f;let m=h?[]:hi;const g=()=>{if(b.active)if(t){const e=b.run();(r||d||(h?e.some(((e,t)=>V(e,m[t]))):V(e,m)))&&(l&&l(),Br(t,a,3,[e,m===hi?void 0:m,p]),m=e)}else b.run()};let v;g.allowRecurse=!!t,v="sync"===i?g:"post"===i?()=>zn(g,a&&a.suspense):()=>{!a||a.isMounted?function(e){ai(e,Xr,Jr,Yr)}(g):g()};const b=new se(c,v);return t?n?g():m=b.run():"post"===i?zn(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&y(a.scope.effects,b)}}function gi(e,t,n){const r=this.proxy,i=T(e)?e.includes(".")?vi(r,e):()=>r[e]:e.bind(r,r);let s;E(t)?s=t:(s=t.handler,n=t);const o=Pr;Mr(this);const a=mi(i,s.bind(r),n);return o?Mr(o):Dr(),a}function vi(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function yi(e,t){if(!C(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),ft(e))yi(e.value,t);else if(w(e))for(let n=0;n<e.length;n++)yi(e[n],t);else if(k(e)||I(e))e.forEach((e=>{yi(e,t)}));else if(x(e))for(const n in e)yi(e[n],t);return e}function bi(e,t,n){const r=arguments.length;return 2===r?C(t)&&!w(t)?hr(t)?br(e,null,[t]):br(e,t):br(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&hr(n)&&(n=[n]),br(e,t,n))}const _i="3.2.24",wi="undefined"!=typeof document?document:null,Ii=new Map,ki={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?wi.createElementNS("http://www.w3.org/2000/svg",e):wi.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>wi.createTextNode(e),createComment:e=>wi.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>wi.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const i=n?n.previousSibling:t.lastChild;let s=Ii.get(e);if(!s){const t=wi.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,s=t.content,r){const e=s.firstChild;for(;e.firstChild;)s.appendChild(e.firstChild);s.removeChild(e)}Ii.set(e,s)}return t.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};const Ei=/\s*!important$/;function Ti(e,t,n){if(w(n))n.forEach((n=>Ti(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=function(e,t){const n=Ci[t];if(n)return n;let r=D(t);if("filter"!==r&&r in e)return Ci[t]=r;r=F(r);for(let i=0;i<Si.length;i++){const n=Si[i]+r;if(n in e)return Ci[t]=n}return t}(e,t);Ei.test(n)?e.setProperty(j(r),n.replace(Ei,""),"important"):e[r]=n}}const Si=["Webkit","Moz","ms"],Ci={};const Oi="http://www.w3.org/1999/xlink";let Ai=Date.now,Ri=!1;if("undefined"!=typeof window){Ai()>document.createEvent("Event").timeStamp&&(Ai=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Ri=!!(e&&Number(e[1])<=53)}let xi=0;const Ni=Promise.resolve(),Pi=()=>{xi=0};function Li(e,t,n,r){e.addEventListener(t,n,r)}function Mi(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=function(e){let t;if(Di.test(e)){let n;for(t={};n=e.match(Di);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[j(e.slice(2)),t]}(t);if(r){const o=s[t]=function(e,t){const n=e=>{const r=e.timeStamp||Ai();(Ri||r>=n.attached-1)&&Br(function(e,t){if(w(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=(()=>xi||(Ni.then(Pi),xi=Ai()))(),n}(r,i);Li(e,n,o,a)}else o&&(!function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,o,a),s[t]=void 0)}}const Di=/(?:Once|Passive|Capture)$/;const Ui=/^on[a-z]/;const ji="transition",Fi=(e,{slots:t})=>bi(jt,function(e){const t={};for(const v in e)v in zi||(t[v]=e[v]);if(!1===e.css)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,p=function(e){if(null==e)return null;if(C(e))return[Bi(e.enter),Bi(e.leave)];{const t=Bi(e);return[t,t]}}(i),m=p&&p[0],g=p&&p[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:_,onLeave:w,onLeaveCancelled:I,onBeforeAppear:k=y,onAppear:E=b,onAppearCancelled:T=_}=t,S=(e,t,n)=>{Hi(e,t?u:a),Hi(e,t?l:o),n&&n()},O=(e,t)=>{Hi(e,h),Hi(e,f),t&&t()},A=e=>(t,n)=>{const i=e?E:b,o=()=>S(t,e,n);Vi(i,[t,o]),qi((()=>{Hi(t,e?c:s),Wi(t,e?u:a),$i(i)||Gi(t,r,m,o)}))};return v(t,{onBeforeEnter(e){Vi(y,[e]),Wi(e,s),Wi(e,o)},onBeforeAppear(e){Vi(k,[e]),Wi(e,c),Wi(e,l)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){const n=()=>O(e,t);Wi(e,d),document.body.offsetHeight,Wi(e,f),qi((()=>{Hi(e,d),Wi(e,h),$i(w)||Gi(e,r,g,n)})),Vi(w,[e,n])},onEnterCancelled(e){S(e,!1),Vi(_,[e])},onAppearCancelled(e){S(e,!0),Vi(T,[e])},onLeaveCancelled(e){O(e),Vi(I,[e])}})}(e),t);Fi.displayName="Transition";const zi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Fi.props=v({},jt.props,zi);const Vi=(e,t=[])=>{w(e)?e.forEach((e=>e(...t))):e&&e(...t)},$i=e=>!!e&&(w(e)?e.some((e=>e.length>1)):e.length>1);function Bi(e){return W(e)}function Wi(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function Hi(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function qi(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let Ki=0;function Gi(e,t,n,r){const i=e._endId=++Ki,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=function(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r("transitionDelay"),s=r("transitionDuration"),o=Ji(i,s),a=r("animationDelay"),c=r("animationDuration"),l=Ji(a,c);let u=null,d=0,f=0;t===ji?o>0&&(u=ji,d=o,f=s.length):"animation"===t?l>0&&(u="animation",d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?ji:"animation":null,f=u?u===ji?s.length:c.length:0);const h=u===ji&&/\b(transform|all)(,|$)/.test(n.transitionProperty);return{type:u,timeout:d,propCount:f,hasTransform:h}}(e,t);if(!o)return r();const l=o+"end";let u=0;const d=()=>{e.removeEventListener(l,f),s()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout((()=>{u<c&&d()}),a+1),e.addEventListener(l,f)}function Ji(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>Xi(t)+Xi(e[n]))))}function Xi(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}const Yi=e=>{const t=e.props["onUpdate:modelValue"];return w(t)?e=>$(t,e):t};function Zi(e){e.target.composing=!0}function Qi(e){const t=e.target;t.composing&&(t.composing=!1,function(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}(t,"input"))}const es={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=Yi(i);const s=r||i.props&&"number"===i.props.type;Li(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n?r=r.trim():s&&(r=W(r)),e._assign(r)})),n&&Li(e,"change",(()=>{e.value=e.value.trim()})),t||(Li(e,"compositionstart",Zi),Li(e,"compositionend",Qi),Li(e,"change",Qi))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e._assign=Yi(s),e.composing)return;if(document.activeElement===e){if(n)return;if(r&&e.value.trim()===t)return;if((i||"number"===e.type)&&W(e.value)===t)return}const o=null==t?"":t;e.value!==o&&(e.value=o)}},ts=["ctrl","shift","alt","meta"],ns={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ts.some((n=>e[`${n}Key`]&&!t.includes(n)))},rs=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=ns[t[e]];if(r&&r(n,t))return}return e(n,...r)},is={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):ss(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),ss(e,!0),r.enter(e)):r.leave(e,(()=>{ss(e,!1)})):ss(e,t))},beforeUnmount(e,{value:t}){ss(e,t)}};function ss(e,t){e.style.display=t?e._vod:"none"}const os=v({patchProp:(e,r,i,s,o=!1,a,c,l,u)=>{"class"===r?function(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,s,o):"style"===r?function(e,t,n){const r=e.style,i=T(n);if(n&&!i){for(const e in n)Ti(r,e,n[e]);if(t&&!T(t))for(const e in t)null==n[e]&&Ti(r,e,"")}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}(e,i,s):m(r)?g(r)||Mi(e,r,0,s,c):("."===r[0]?(r=r.slice(1),1):"^"===r[0]?(r=r.slice(1),0):function(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&Ui.test(t)&&E(n));if("spellcheck"===t||"draggable"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if(Ui.test(t)&&T(n))return!1;return t in e}(e,r,s,o))?function(e,t,r,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==r?"":r);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=r;const n=null==r?"":r;return e.value===n&&"OPTION"!==e.tagName||(e.value=n),void(null==r&&e.removeAttribute(t))}if(""===r||null==r){const i=typeof e[t];if("boolean"===i)return void(e[t]=n(r));if(null==r&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=r}catch(l){}}(e,r,s,a,c,l,u):("true-value"===r?e._trueValue=s:"false-value"===r&&(e._falseValue=s),function(e,r,i,s,o){if(s&&r.startsWith("xlink:"))null==i?e.removeAttributeNS(Oi,r.slice(6,r.length)):e.setAttributeNS(Oi,r,i);else{const s=t(r);null==i||s&&!n(i)?e.removeAttribute(r):e.setAttribute(r,s?"":i)}}(e,r,s,o))}},ki);let as;const cs=(...e)=>{const t=(as||(as=Vn(os))).createApp(...e),{mount:n}=t;return t.mount=e=>{const r=function(e){if(T(e)){return document.querySelector(e)}return e}
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */(e);if(!r)return;const i=t._component;E(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};function ls(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function us(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ds(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){us(e,t,n[t])}))}return e}function fs(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(c){i=!0,s=c}finally{try{r||null==a.return||a.return()}finally{if(i)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function hs(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var ps=function(){},ms={},gs={},vs={mark:ps,measure:ps};try{"undefined"!=typeof window&&(ms=window),"undefined"!=typeof document&&(gs=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&(vs=performance)}catch(Pd){}var ys=(ms.navigator||{}).userAgent,bs=void 0===ys?"":ys,_s=ms,ws=gs,Is=vs;_s.document;var ks=!!ws.documentElement&&!!ws.head&&"function"==typeof ws.addEventListener&&"function"==typeof ws.createElement,Es=~bs.indexOf("MSIE")||~bs.indexOf("Trident/");!function(){try{}catch(Pd){return!1}}();var Ts="group",Ss="primary",Cs="secondary",Os=_s.FontAwesomeConfig||{};if(ws&&"function"==typeof ws.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(e){var t=fs(e,2),n=t[0],r=t[1],i=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=ws.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(n));null!=i&&(Os[r]=i)}))}var As=ds({},{familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Os);As.autoReplaceSvg||(As.observeMutations=!1);var Rs=ds({},As);_s.FontAwesomeConfig=Rs;var xs=_s||{};xs.___FONT_AWESOME___||(xs.___FONT_AWESOME___={}),xs.___FONT_AWESOME___.styles||(xs.___FONT_AWESOME___.styles={}),xs.___FONT_AWESOME___.hooks||(xs.___FONT_AWESOME___.hooks={}),xs.___FONT_AWESOME___.shims||(xs.___FONT_AWESOME___.shims=[]);var Ns=xs.___FONT_AWESOME___,Ps=[];ks&&((ws.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ws.readyState)||ws.addEventListener("DOMContentLoaded",(function e(){ws.removeEventListener("DOMContentLoaded",e),1,Ps.map((function(e){return e()}))}))),"undefined"!=typeof global&&void 0!==global.process&&global.process.emit,"undefined"==typeof setImmediate?setTimeout:setImmediate;var Ls=16,Ms={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ds(){for(var e=12,t="";e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function Us(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function js(e){return Object.keys(e||{}).reduce((function(t,n){return t+"".concat(n,": ").concat(e[n],";")}),"")}function Fs(e){return e.size!==Ms.size||e.x!==Ms.x||e.y!==Ms.y||e.rotate!==Ms.rotate||e.flipX||e.flipY}function zs(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(32*t.x,", ").concat(32*t.y,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)");return{outer:i,inner:{transform:"".concat(s," ").concat(o," ").concat(a)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}var Vs={x:0,y:0,width:"100%",height:"100%"};function $s(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Bs(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,o=e.transform,a=e.symbol,c=e.title,l=e.maskId,u=e.titleId,d=e.extra,f=e.watchable,h=void 0!==f&&f,p=r.found?r:n,m=p.width,g=p.height,v="fak"===i,y=v?"":"fa-w-".concat(Math.ceil(m/g*16)),b=[Rs.replacementClass,s?"".concat(Rs.familyPrefix,"-").concat(s):"",y].filter((function(e){return-1===d.classes.indexOf(e)})).filter((function(e){return""!==e||!!e})).concat(d.classes).join(" "),_={children:[],attributes:ds({},d.attributes,{"data-prefix":i,"data-icon":s,class:b,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)})},w=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};h&&(_.attributes["data-fa-i2svg"]=""),c&&_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(u||Ds())},children:[c]});var I=ds({},_,{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:o,symbol:a,styles:ds({},w,d.styles)}),k=r.found&&n.found?function(e){var t,n=e.children,r=e.attributes,i=e.main,s=e.mask,o=e.maskId,a=e.transform,c=i.width,l=i.icon,u=s.width,d=s.icon,f=zs({transform:a,containerWidth:u,iconWidth:c}),h={tag:"rect",attributes:ds({},Vs,{fill:"white"})},p=l.children?{children:l.children.map($s)}:{},m={tag:"g",attributes:ds({},f.inner),children:[$s(ds({tag:l.tag,attributes:ds({},l.attributes,f.path)},p))]},g={tag:"g",attributes:ds({},f.outer),children:[m]},v="mask-".concat(o||Ds()),y="clip-".concat(o||Ds()),b={tag:"mask",attributes:ds({},Vs,{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,g]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:(t=d,"g"===t.tag?t.children:[t])},b]};return n.push(_,{tag:"rect",attributes:ds({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(v,")")},Vs)}),{children:n,attributes:r}}(I):function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,s=js(e.styles);if(s.length>0&&(n.style=s),Fs(i)){var o=zs({transform:i,containerWidth:r.width,iconWidth:r.width});t.push({tag:"g",attributes:ds({},o.outer),children:[{tag:"g",attributes:ds({},o.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:ds({},r.icon.attributes,o.path)}]}]})}else t.push(r.icon);return{children:t,attributes:n}}(I),E=k.children,T=k.attributes;return I.children=E,I.attributes=T,a?function(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:ds({},i,{id:!0===s?"".concat(t,"-").concat(Rs.familyPrefix,"-").concat(n):s}),children:r}]}]}(I):function(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,o=e.transform;if(Fs(o)&&n.found&&!r.found){var a={x:n.width/n.height/2,y:.5};i.style=js(ds({},s,{"transform-origin":"".concat(a.x+o.x/16,"em ").concat(a.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}(I)}function Ws(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,o=e.extra,a=e.watchable,c=void 0!==a&&a,l=ds({},o.attributes,s?{title:s}:{},{class:o.classes.join(" ")});c&&(l["data-fa-i2svg"]="");var u=ds({},o.styles);Fs(i)&&(u.transform=function(e){var t=e.transform,n=e.width,r=void 0===n?16:n,i=e.height,s=void 0===i?16:i,o=e.startCentered,a=void 0!==o&&o,c="";return c+=a&&Es?"translate(".concat(t.x/Ls-r/2,"em, ").concat(t.y/Ls-s/2,"em) "):a?"translate(calc(-50% + ".concat(t.x/Ls,"em), calc(-50% + ").concat(t.y/Ls,"em)) "):"translate(".concat(t.x/Ls,"em, ").concat(t.y/Ls,"em) "),c+="scale(".concat(t.size/Ls*(t.flipX?-1:1),", ").concat(t.size/Ls*(t.flipY?-1:1),") "),c+"rotate(".concat(t.rotate,"deg) ")}({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var d=js(u);d.length>0&&(l.style=d);var f=[];return f.push({tag:"span",attributes:l,children:[t]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}Rs.measurePerformance&&Is&&Is.mark&&Is.measure;var Hs=function(e,t,n,r){var i,s,o,a=Object.keys(e),c=a.length,l=void 0!==r?function(e,t){return function(n,r,i,s){return e.call(t,n,r,i,s)}}(t,r):t;for(void 0===n?(i=1,o=e[a[0]]):(i=0,o=n);i<c;i++)o=l(o,e[s=a[i]],s,e);return o};function qs(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.skipHooks,i=void 0!==r&&r,s=Object.keys(t).reduce((function(e,n){var r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e}),{});"function"!=typeof Ns.hooks.addPack||i?Ns.styles[e]=ds({},Ns.styles[e]||{},s):Ns.hooks.addPack(e,s),"fas"===e&&qs("fa",t)}var Ks=Ns.styles,Gs=Ns.shims,Js=function(){var e=function(e){return Hs(Ks,(function(t,n,r){return t[r]=Hs(n,e,{}),t}),{})};e((function(e,t,n){return t[3]&&(e[t[3]]=n),e})),e((function(e,t,n){var r=t[2];return e[n]=n,r.forEach((function(t){e[t]=n})),e}));var t="far"in Ks;Hs(Gs,(function(e,n){var r=n[0],i=n[1],s=n[2];return"far"!==i||t||(i="fas"),e[r]={prefix:i,iconName:s},e}),{})};function Xs(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function Ys(e){var t=e.tag,n=e.attributes,r=void 0===n?{}:n,i=e.children,s=void 0===i?[]:i;return"string"==typeof e?Us(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce((function(t,n){return t+"".concat(n,'="').concat(Us(e[n]),'" ')}),"").trim()}(r),">").concat(s.map(Ys).join(""),"</").concat(t,">")}Js(),Ns.styles;function Zs(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=(new Error).stack}Zs.prototype=Object.create(Error.prototype),Zs.prototype.constructor=Zs;var Qs={fill:"currentColor"},eo={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};ds({},Qs,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var to=ds({},eo,{attributeName:"opacity"});function no(e){var t=e[0],n=e[1],r=fs(e.slice(4),1)[0];return{found:!0,width:t,height:n,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(Rs.familyPrefix,"-").concat(Ts)},children:[{tag:"path",attributes:{class:"".concat(Rs.familyPrefix,"-").concat(Cs),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(Rs.familyPrefix,"-").concat(Ss),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}ds({},Qs,{cx:"256",cy:"364",r:"28"}),ds({},eo,{attributeName:"r",values:"28;14;28;28;14;28;"}),ds({},to,{values:"1;0;1;1;0;1;"}),ds({},Qs,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),ds({},to,{values:"1;0;0;0;0;1;"}),ds({},Qs,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),ds({},to,{values:"0;0;1;1;0;0;"}),Ns.styles,Ns.styles;function ro(){Rs.autoAddCss&&!co&&(!function(e){if(e&&ks){var t=ws.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ws.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}ws.head.insertBefore(t,r)}}(function(){var e="fa",t="svg-inline--fa",n=Rs.familyPrefix,r=Rs.replacementClass,i='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}()),co=!0)}function io(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map((function(e){return Ys(e)}))}}),Object.defineProperty(e,"node",{get:function(){if(ks){var t=ws.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function so(e){var t=e.prefix,n=void 0===t?"fa":t,r=e.iconName;if(r)return Xs(ao.definitions,n,r)||Xs(Ns.styles,n,r)}var oo,ao=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}}var t,n,r;return t=e,n=[{key:"add",value:function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach((function(t){e.definitions[t]=ds({},e.definitions[t]||{},i[t]),qs(t,i[t]),Js()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map((function(t){var r=n[t],i=r.prefix,s=r.iconName,o=r.icon;e[i]||(e[i]={}),e[i][s]=o})),e}}],n&&ls(t.prototype,n),r&&ls(t,r),e}()),co=!1,lo=function(e){return function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce((function(e,t){var n=t.toLowerCase().split("-"),r=n[0],i=n.slice(1).join("-");if(r&&"h"===i)return e.flipX=!0,e;if(r&&"v"===i)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case"grow":e.size=e.size+i;break;case"shrink":e.size=e.size-i;break;case"left":e.x=e.x-i;break;case"right":e.x=e.x+i;break;case"up":e.y=e.y-i;break;case"down":e.y=e.y+i;break;case"rotate":e.rotate=e.rotate+i}return e}),t):t}(e)},uo=(oo=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.transform,r=void 0===n?Ms:n,i=t.symbol,s=void 0!==i&&i,o=t.mask,a=void 0===o?null:o,c=t.maskId,l=void 0===c?null:c,u=t.title,d=void 0===u?null:u,f=t.titleId,h=void 0===f?null:f,p=t.classes,m=void 0===p?[]:p,g=t.attributes,v=void 0===g?{}:g,y=t.styles,b=void 0===y?{}:y;if(e){var _=e.prefix,w=e.iconName,I=e.icon;return io(ds({type:"icon"},e),(function(){return ro(),Rs.autoA11y&&(d?v["aria-labelledby"]="".concat(Rs.replacementClass,"-title-").concat(h||Ds()):(v["aria-hidden"]="true",v.focusable="false")),Bs({icons:{main:no(I),mask:a?no(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:w,transform:ds({},Ms,r),symbol:s,title:d,maskId:l,titleId:h,extra:{attributes:v,styles:b,classes:m}})}))}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(e||{}).icon?e:so(e||{}),r=t.mask;return r&&(r=(r||{}).icon?r:so(r||{})),oo(n,ds({},t,{mask:r}))}),fo="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ho,po,mo=(ho=function(e){var t,n,r,i,s,o,a,c,l,u,d,f,h,p,m;t=fo,n=function(e,t,r){if(!c(t)||u(t)||d(t)||f(t)||a(t))return t;var i,s=0,o=0;if(l(t))for(i=[],o=t.length;s<o;s++)i.push(n(e,t[s],r));else for(var h in i={},t)Object.prototype.hasOwnProperty.call(t,h)&&(i[e(h,r)]=n(e,t[h],r));return i},r=function(e){return h(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1)},i=function(e){var t=r(e);return t.substr(0,1).toUpperCase()+t.substr(1)},s=function(e,t){return function(e,t){var n=(t=t||{}).separator||"_",r=t.split||/(?=[A-Z])/;return e.split(r).join(n)}(e,t).toLowerCase()},o=Object.prototype.toString,a=function(e){return"function"==typeof e},c=function(e){return e===Object(e)},l=function(e){return"[object Array]"==o.call(e)},u=function(e){return"[object Date]"==o.call(e)},d=function(e){return"[object RegExp]"==o.call(e)},f=function(e){return"[object Boolean]"==o.call(e)},h=function(e){return(e-=0)==e},p=function(e,t){var n=t&&"process"in t?t.process:t;return"function"!=typeof n?e:function(t,r){return n(t,e,r)}},m={camelize:r,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(e,t){return n(p(r,t),e)},decamelizeKeys:function(e,t){return n(p(s,t),e,t)},pascalizeKeys:function(e,t){return n(p(i,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}},e.exports?e.exports=m:t.humps=m},ho(po={exports:{}},po.exports),po.exports),go="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},vo=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},yo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bo=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},_o=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function wo(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n=t.indexOf(":"),r=mo.camelize(t.slice(0,n)),i=t.slice(n+1).trim();return e[r]=i,e}),{})}function Io(e){return e.split(/\s+/).reduce((function(e,t){return e[t]=!0,e}),{})}function ko(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof e)return e;var r=(e.children||[]).map((function(e){return ko(e)})),i=Object.keys(e.attributes||{}).reduce((function(t,n){var r=e.attributes[n];switch(n){case"class":t.class=Io(r);break;case"style":t.style=wo(r);break;default:t.attrs[n]=r}return t}),{attrs:{},class:{},style:{}});n.class;var s=n.style,o=void 0===s?{}:s,a=bo(n,["class","style"]);return bi(e.tag,yo({},t,{class:i.class,style:yo({},i.style,o)},i.attrs,a),r)}var Eo=!1;try{Eo=!0}catch(Pd){}function To(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?vo({},e,t):{}}function So(e){return null===e?null:"object"===(void 0===e?"undefined":go(e))&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}var Co=Ht({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(e){return["horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(e,t){var n=t.attrs,r=kt((function(){return So(e.icon)})),i=kt((function(){return To("classes",function(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":"horizontal"===e.flip||"both"===e.flip,"fa-flip-vertical":"vertical"===e.flip||"both"===e.flip},vo(t,"fa-"+e.size,null!==e.size),vo(t,"fa-rotate-"+e.rotation,null!==e.rotation),vo(t,"fa-pull-"+e.pull,null!==e.pull),vo(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map((function(e){return n[e]?e:null})).filter((function(e){return e}))}(e))})),s=kt((function(){return To("transform","string"==typeof e.transform?lo(e.transform):e.transform)})),o=kt((function(){return To("mask",So(e.mask))})),a=kt((function(){return uo(r.value,yo({},i.value,s.value,o.value,{symbol:e.symbol,title:e.title}))}));pi(a,(function(e){if(!e)return function(){var e;!Eo&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find one or more icon(s)",r.value,o.value)}),{immediate:!0});var c=kt((function(){return a.value?ko(a.value.abstract[0],{},n):null}));return function(){return c.value}}});Ht({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,t){var n=t.slots,r=Rs.familyPrefix,i=kt((function(){return[r+"-layers"].concat(_o(e.fixedWidth?[r+"-fw"]:[]))}));return function(){return bi("div",{class:i.value},n.default?n.default():[])}}}),Ht({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,t){var n=t.attrs,r=Rs.familyPrefix,i=kt((function(){return To("classes",[].concat(_o(e.counter?[r+"-layers-counter"]:[]),_o(e.position?[r+"-layers-"+e.position]:[])))})),s=kt((function(){return To("transform","string"==typeof e.transform?lo(e.transform):e.transform)})),o=kt((function(){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.transform,r=void 0===n?Ms:n,i=t.title,s=void 0===i?null:i,o=t.classes,a=void 0===o?[]:o,c=t.attributes,l=void 0===c?{}:c,u=t.styles,d=void 0===u?{}:u;return io({type:"text",content:e},(function(){return ro(),Ws({content:e,transform:ds({},Ms,r),title:s,extra:{attributes:l,styles:d,classes:["".concat(Rs.familyPrefix,"-layers-text")].concat(hs(a))}})}))}(e.value.toString(),yo({},s.value,i.value)),n=t.abstract;return e.counter&&(n[0].attributes.class=n[0].attributes.class.replace("fa-layers-text","")),n[0]})),a=kt((function(){return ko(o.value,{},n)}));return function(){return a.value}}});
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var Oo={prefix:"fas",iconName:"bars",icon:[448,512,[],"f0c9","M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"]},Ao={prefix:"fas",iconName:"envelope",icon:[512,512,[],"f0e0","M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"]},Ro={prefix:"fas",iconName:"fish",icon:[576,512,[],"f578","M327.1 96c-89.97 0-168.54 54.77-212.27 101.63L27.5 131.58c-12.13-9.18-30.24.6-27.14 14.66L24.54 256 .35 365.77c-3.1 14.06 15.01 23.83 27.14 14.66l87.33-66.05C158.55 361.23 237.13 416 327.1 416 464.56 416 576 288 576 256S464.56 96 327.1 96zm87.43 184c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24 13.26 0 24 10.74 24 24 0 13.25-10.75 24-24 24z"]},xo={prefix:"fas",iconName:"info-circle",icon:[512,512,[],"f05a","M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"]},No={prefix:"fas",iconName:"key",icon:[512,512,[],"f084","M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"]},Po={prefix:"fas",iconName:"sign-in-alt",icon:[512,512,[],"f2f6","M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"]},Lo={prefix:"fas",iconName:"sign-out-alt",icon:[512,512,[],"f2f5","M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"]},Mo={prefix:"fas",iconName:"user-circle",icon:[496,512,[],"f2bd","M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"]},Do={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"]},Uo={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},jo={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]};
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
const Fo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let d=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(d=64)),r.push(n[l],n[u],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const o=i<e.length?n[e.charAt(i)]:64;++i;const a=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==o||null==a)throw Error();const c=t<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
class zo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
 */function Vo(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class $o extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,$o.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bo.prototype.create)}}class Bo{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Wo,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new $o(r,o,n)}}const Wo=/\{\$([^}]+)}/g;function Ho(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(qo(n)&&qo(s)){if(!Ho(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qo(e){return null!==e&&"object"==typeof e}
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
 */function Ko(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Go(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function Jo(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class Xo{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Yo),void 0===r.error&&(r.error=Yo),void 0===r.complete&&(r.complete=Yo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(Pd){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(Pd){"undefined"!=typeof console&&console.error&&console.error(Pd)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Yo(){}
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
 */function Zo(e){return e&&e._delegate?e._delegate:e}class Qo{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
class ea{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new zo;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(Pd){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(Pd){if(r)return null;throw Pd}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(Pd){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(Pd){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class ta{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ea(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */var na,ra;(ra=na||(na={}))[ra.DEBUG=0]="DEBUG",ra[ra.VERBOSE=1]="VERBOSE",ra[ra.INFO=2]="INFO",ra[ra.WARN=3]="WARN",ra[ra.ERROR=4]="ERROR",ra[ra.SILENT=5]="SILENT";const ia={debug:na.DEBUG,verbose:na.VERBOSE,info:na.INFO,warn:na.WARN,error:na.ERROR,silent:na.SILENT},sa=na.INFO,oa={[na.DEBUG]:"log",[na.VERBOSE]:"log",[na.INFO]:"info",[na.WARN]:"warn",[na.ERROR]:"error"},aa=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=oa[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class ca{constructor(e){this.name=e,this._logLevel=sa,this._logHandler=aa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in na))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ia[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,na.DEBUG,...e),this._logHandler(this,na.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,na.VERBOSE,...e),this._logHandler(this,na.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,na.INFO,...e),this._logHandler(this,na.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,na.WARN,...e),this._logHandler(this,na.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,na.ERROR,...e),this._logHandler(this,na.ERROR,...e)}}
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
 */class la{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const ua="@firebase/app",da=new ca("@firebase/app"),fa={[ua]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ha=new Map,pa=new Map;function ma(e,t){try{e.container.addComponent(t)}catch(Pd){da.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,Pd)}}function ga(e){const t=e.name;if(pa.has(t))return da.debug(`There were multiple attempts to register component ${t}.`),!1;pa.set(t,e);for(const n of ha.values())ma(n,e);return!0}function va(e,t){return e.container.getProvider(t)}
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
 */const ya=new Bo("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class ba{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Qo("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ya.create("app-deleted",{appName:this._name})}}
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
 */function _a(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw ya.create("bad-app-name",{appName:String(r)});const i=ha.get(r);if(i){if(Ho(e,i.options)&&Ho(n,i.config))return i;throw ya.create("duplicate-app",{appName:r})}const s=new ta(r);for(const a of pa.values())s.addComponent(a);const o=new ba(e,n,s);return ha.set(r,o),o}function wa(e,t,n){var r;let i=null!==(r=fa[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void da.warn(e.join(" "))}ga(new Qo(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
 */var Ia;Ia="",ga(new Qo("platform-logger",(e=>new la(e)),"PRIVATE")),wa(ua,"0.7.11",Ia),wa(ua,"0.7.11","esm2017"),wa("fire-js","");
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
function ka(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function Ea(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}
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
wa("firebase","9.6.1","app");const Ta=Ea,Sa=new Bo("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ca=new ca("@firebase/auth");function Oa(e,...t){Ca.logLevel<=na.ERROR&&Ca.error(`Auth (9.6.1): ${e}`,...t)}
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
 */function Aa(e,...t){throw Na(e,...t)}function Ra(e,...t){return Na(e,...t)}function xa(e,t,n){const r=Object.assign(Object.assign({},Ta()),{[t]:n});return new Bo("auth","Firebase",r).create(t,{appName:e.name})}function Na(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Sa.create(e,...t)}function Pa(e,t,...n){if(!e)throw Na(t,...n)}function La(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Oa(t),new Error(t)}function Ma(e,t){e||La(t)}
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
 */const Da=new Map;function Ua(e){Ma(e instanceof Function,"Expected a class definition");let t=Da.get(e);return t?(Ma(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Da.set(e,t),t)}
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
function ja(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Fa(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function za(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Fa()&&"https:"!==Fa()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
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
class Va{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ma(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vo())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return za()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function $a(e,t){Ma(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Ba{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void La("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void La("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void La("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Wa={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Ha=new Va(3e4,6e4);
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
 */function qa(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ka(e,t,n,r,i={}){return Ga(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Ko(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Ba.fetch()(Xa(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Ga(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Wa),t);try{const t=new Ya(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Za(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Za(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Za(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw xa(e,a,o);Aa(e,a)}}catch(Pd){if(Pd instanceof $o)throw Pd;Aa(e,"network-request-failed")}}async function Ja(e,t,n,r,i={}){const s=await Ka(e,t,n,r,i);return"mfaPendingCredential"in s&&Aa(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Xa(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?$a(e.config,i):`${e.config.apiScheme}://${i}`}class Ya{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Ra(this.auth,"timeout"))),Ha.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Za(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ra(e,t,r);return i.customData._tokenResponse=n,i}
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
function Qa(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(Pd){}}function ec(e){return 1e3*Number(e)}function tc(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Oa("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return Fo.decodeString(e,!0)}catch(Pd){console.error("base64Decode failed: ",Pd)}return null}(n);return e?JSON.parse(e):(Oa("Failed to decode base64 JWT payload"),null)}catch(Pd){return Oa("Caught error parsing JWT payload as JSON",Pd),null}}
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
async function nc(e,t,n=!1){if(n)return t;try{return await t}catch(Pd){throw Pd instanceof $o&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(Pd)&&e.auth.currentUser===e&&await e.auth.signOut(),Pd}}class rc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(Pd){return void("auth/network-request-failed"===Pd.code&&this.schedule(!0))}this.schedule()}}
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
 */class ic{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qa(this.lastLoginAt),this.creationTime=Qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function sc(e){var t;const n=e.auth,r=await e.getIdToken(),i=await nc(e,async function(e,t){return Ka(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Pa(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=ka(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,d=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),f=!!u&&d,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ic(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(e,h)}
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
class oc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Pa(e.idToken,"internal-error"),Pa(void 0!==e.idToken,"internal-error"),Pa(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=tc(e);return Pa(t,"internal-error"),Pa(void 0!==t.exp,"internal-error"),Pa(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Pa(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(e,t){const n=await Ga(e,{},(async()=>{const n=Ko({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Xa(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Ba.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new oc;return n&&(Pa("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Pa("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Pa("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oc,this.toJSON())}_performRefresh(){return La("not implemented")}}
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
 */function ac(e,t){Pa("string"==typeof e||void 0===e,"internal-error",{appName:t})}class cc{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=ka(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new rc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new ic(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await nc(this,this.stsTokenManager.getToken(this.auth,e));return Pa(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Zo(e),r=await n.getIdToken(t),i=tc(r);Pa(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qa(ec(i.auth_time)),issuedAtTime:Qa(ec(i.iat)),expirationTime:Qa(ec(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Zo(e);await sc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Pa(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new cc(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Pa(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await sc(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await nc(this,async function(e,t){return Ka(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,h=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:b,isAnonymous:_,providerData:w,stsTokenManager:I}=t;Pa(y&&I,e,"internal-error");const k=oc.fromJSON(this.name,I);Pa("string"==typeof y,e,"internal-error"),ac(u,e.name),ac(d,e.name),Pa("boolean"==typeof b,e,"internal-error"),Pa("boolean"==typeof _,e,"internal-error"),ac(f,e.name),ac(h,e.name),ac(p,e.name),ac(m,e.name),ac(g,e.name),ac(v,e.name);const E=new cc({uid:y,auth:e,email:d,emailVerified:b,displayName:u,isAnonymous:_,photoURL:h,phoneNumber:f,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:v});return w&&Array.isArray(w)&&(E.providerData=w.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new oc;r.updateFromServerResponse(t);const i=new cc({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await sc(i),i}}
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
 */class lc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}lc.type="NONE";const uc=lc;
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
 */function dc(e,t,n){return`firebase:${e}:${t}:${n}`}class fc{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=dc(this.userKey,r.apiKey,i),this.fullPersistenceKey=dc("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cc._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new fc(Ua(uc),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Ua(uc);const s=dc(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=cc._fromJSON(e,t);l!==i&&(o=n),i=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new fc(i,e,n)):new fc(i,e,n)}}
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
 */function hc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(vc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(pc(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(bc(t))return"Blackberry";if(_c(t))return"Webos";if(mc(t))return"Safari";if((t.includes("chrome/")||gc(t))&&!t.includes("edge/"))return"Chrome";if(yc(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function pc(e=Vo()){return/firefox\//i.test(e)}function mc(e=Vo()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function gc(e=Vo()){return/crios\//i.test(e)}function vc(e=Vo()){return/iemobile/i.test(e)}function yc(e=Vo()){return/android/i.test(e)}function bc(e=Vo()){return/blackberry/i.test(e)}function _c(e=Vo()){return/webos/i.test(e)}function wc(e=Vo()){return/iphone|ipad|ipod/i.test(e)}function Ic(){return function(){const e=Vo();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}
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
 */()&&10===document.documentMode}function kc(e=Vo()){return wc(e)||yc(e)||_c(e)||bc(e)||/windows phone/i.test(e)||vc(e)}
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
function Ec(e,t=[]){let n;switch(e){case"Browser":n=hc(Vo());break;case"Worker":n=`${hc(Vo())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.1/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */class Tc{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cc(this),this.idTokenSubscription=new Cc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sa,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ua(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await fc.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(Pd){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e)):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(Pa(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(Pd){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await sc(e)}catch(Pd){if("auth/network-request-failed"!==Pd.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Zo(e):null;return t&&Pa(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Pa(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Ua(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bo("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ua(e)||this._popupRedirectResolver;Pa(t,this,"argument-error"),this.redirectPersistenceManager=await fc.create(this,[Ua(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Pa(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Pa(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ec(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Sc(e){return Zo(e)}class Cc{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Xo(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Pa(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */class Oc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return La("not implemented")}_getIdTokenResponse(e){return La("not implemented")}_linkToIdToken(e,t){return La("not implemented")}_getReauthenticationResolver(e){return La("not implemented")}}async function Ac(e,t){return async function(e,t){return Ka(e,"POST","/v1/accounts:sendOobCode",qa(e,t))}(e,t)}
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
class Rc extends Oc{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Rc(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Rc(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return Ja(e,"POST","/v1/accounts:signInWithPassword",qa(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Ja(e,"POST","/v1/accounts:signInWithEmailLink",qa(e,t))}(e,{email:this._email,oobCode:this._password});default:Aa(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return Ka(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Ja(e,"POST","/v1/accounts:signInWithEmailLink",qa(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Aa(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function xc(e,t){return Ja(e,"POST","/v1/accounts:signInWithIdp",qa(e,t))}
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
 */class Nc extends Oc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Nc(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Aa("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=ka(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Nc(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return xc(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,xc(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xc(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ko(t)}return e}}
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
 */class Pc{constructor(e){var t,n,r,i,s,o;const a=Go(Jo(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);Pa(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=Go(Jo(e)).link,n=t?Go(Jo(t)).deep_link_id:null,r=Go(Jo(e)).deep_link_id;return(r?Go(Jo(r)).link:null)||r||n||t||e}(e);try{return new Pc(t)}catch(n){return null}}}
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
 */class Lc{constructor(){this.providerId=Lc.PROVIDER_ID}static credential(e,t){return Rc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Pc.parseLink(t);return Pa(n,"argument-error"),Rc._fromEmailAndCode(e,n.code,n.tenantId)}}Lc.PROVIDER_ID="password",Lc.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Lc.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Mc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class Dc extends Mc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
 */class Uc extends Dc{constructor(){super("facebook.com")}static credential(e){return Nc._fromParams({providerId:Uc.PROVIDER_ID,signInMethod:Uc.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Uc.credentialFromTaggedObject(e)}static credentialFromError(e){return Uc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Uc.credential(e.oauthAccessToken)}catch(t){return null}}}Uc.FACEBOOK_SIGN_IN_METHOD="facebook.com",Uc.PROVIDER_ID="facebook.com";
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
class jc extends Dc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Nc._fromParams({providerId:jc.PROVIDER_ID,signInMethod:jc.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return jc.credentialFromTaggedObject(e)}static credentialFromError(e){return jc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return jc.credential(t,n)}catch(r){return null}}}jc.GOOGLE_SIGN_IN_METHOD="google.com",jc.PROVIDER_ID="google.com";
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
class Fc extends Dc{constructor(){super("github.com")}static credential(e){return Nc._fromParams({providerId:Fc.PROVIDER_ID,signInMethod:Fc.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fc.credentialFromTaggedObject(e)}static credentialFromError(e){return Fc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Fc.credential(e.oauthAccessToken)}catch(t){return null}}}Fc.GITHUB_SIGN_IN_METHOD="github.com",Fc.PROVIDER_ID="github.com";
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
class zc extends Dc{constructor(){super("twitter.com")}static credential(e,t){return Nc._fromParams({providerId:zc.PROVIDER_ID,signInMethod:zc.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return zc.credentialFromTaggedObject(e)}static credentialFromError(e){return zc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return zc.credential(t,n)}catch(r){return null}}}zc.TWITTER_SIGN_IN_METHOD="twitter.com",zc.PROVIDER_ID="twitter.com";
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
class Vc{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await cc._fromIdTokenResponse(e,n,r),s=$c(n);return new Vc({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=$c(n);return new Vc({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function $c(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */class Bc extends $o{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Bc.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Bc(e,t,n,r)}}function Wc(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Bc._fromErrorAndOperation(e,n,t,r);throw n}))}
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
async function Hc(e,t,n=!1){const r="signIn",i=await Wc(e,r,t),s=await Vc._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}
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
async function qc(e,t,n){const r=Zo(e),i={requestType:"PASSWORD_RESET",email:t};n&&
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
function(e,t,n){var r;Pa((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),Pa(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Pa(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(Pa(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}(r,i,n),await Ac(r,i)}async function Kc(e,t,n){const r=Sc(e),i=await
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
async function(e,t){return Ja(e,"POST","/v1/accounts:signUp",qa(e,t))}(r,{returnSecureToken:!0,email:t,password:n}),s=await Vc._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Gc(e,t,n){return async function(e,t){return Hc(Sc(e),t)}(Zo(e),Lc.credential(t,n))}
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
async function Jc(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=Zo(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await nc(r,async function(e,t){return Ka(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function Xc(e,t,n,r){return Zo(e).onAuthStateChanged(t,n,r)}function Yc(e){return Zo(e).signOut()}
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
class Zc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class Qc extends Zc{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Vo();return mc(e)||wc(e)}()&&function(){try{return!(!window||window===window.top)}catch(Pd){return!1}}(),this.fallbackToPolling=kc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ic()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qc.type="LOCAL";const el=Qc;
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
 */class tl extends Zc{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}tl.type="SESSION";const nl=tl;
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
class rl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new rl(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function il(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */rl.receivers=[];class sl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=il("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function ol(){return window}
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
function al(){return void 0!==ol().WorkerGlobalScope&&"function"==typeof ol().importScripts}
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
const cl="firebaseLocalStorageDb";class ll{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function ul(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function dl(){const e=indexedDB.open(cl,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(Pd){n(Pd)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(cl);return new ll(e).toPromise()}(),t(await dl()))}))}))}async function fl(e,t,n){const r=ul(e,!0).put({fbase_key:t,value:n});return new ll(r).toPromise()}function hl(e,t){const n=ul(e,!0).delete(t);return new ll(n).toPromise()}class pl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await dl()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(Pd){if(t++>3)throw Pd;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return al()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rl._getInstance(al()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new sl(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dl();return await fl(e,"__sak","1"),await hl(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>fl(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ul(e,!1).get(t),r=await new ll(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>hl(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ul(e,!1).getAll();return new ll(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}pl.type="LOCAL";const ml=pl;
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
 */function gl(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Ra("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}
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
function vl(e,t){return t?Ua(t):(Pa(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */new Va(3e4,6e4);class yl extends Oc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xc(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xc(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xc(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bl(e){return Hc(e.auth,new yl(e),e.bypassAuthState)}function _l(e){const{auth:t,user:n}=e;return Pa(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await nc(e,Wc(r,i,t,e),n);Pa(s.idToken,r,"internal-error");const o=tc(s.idToken);Pa(o,r,"internal-error");const{sub:a}=o;return Pa(e.uid===a,r,"user-mismatch"),Vc._forOperation(e,i,s)}catch(Pd){throw"auth/user-not-found"===(null==Pd?void 0:Pd.code)&&Aa(r,"user-mismatch"),Pd}}(n,new yl(e),e.bypassAuthState)}async function wl(e){const{auth:t,user:n}=e;return Pa(n,t,"internal-error"),async function(e,t,n=!1){const r=await nc(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Vc._forOperation(e,"link",r)}(n,new yl(e),e.bypassAuthState)}
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
 */class Il{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(Pd){this.reject(Pd)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(Pd){this.reject(Pd)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bl;case"linkViaPopup":case"linkViaRedirect":return wl;case"reauthViaPopup":case"reauthViaRedirect":return _l;default:Aa(this.auth,"internal-error")}}resolve(e){Ma(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ma(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const kl=new Va(2e3,1e4);async function El(e,t,n){const r=Sc(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Aa(e,"argument-error"),xa(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,Mc);const i=vl(r,n);return new Tl(r,"signInViaPopup",t,i).executeNotNull()}class Tl extends Il{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Tl.currentPopupAction&&Tl.currentPopupAction.cancel(),Tl.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Pa(e,this.auth,"internal-error"),e}async onExecution(){Ma(1===this.filter.length,"Popup operations only handle one event");const e=il();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Ra(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Ra(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tl.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Ra(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,kl.get())};e()}}Tl.currentPopupAction=null;
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
const Sl=new Map;class Cl extends Il{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Sl.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return dc("pendingRedirect",e.config.apiKey,e.name)}(t),r=function(e){return Ua(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(Pd){e=()=>Promise.reject(Pd)}Sl.set(this.auth._key(),e)}return this.bypassAuthState||Sl.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Ol(e,t,n=!1){const r=Sc(e),i=vl(r,t),s=new Cl(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
 */class Al{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xl(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!xl(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ra(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rl(e))}saveEventToCache(e){this.cachedEventUids.add(Rl(e)),this.lastProcessedEventTime=Date.now()}}function Rl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function xl({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const Nl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pl=/^https?/;async function Ll(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Ka(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(Ml(r))return}catch(n){}Aa(e,"unauthorized-domain")}function Ml(e){const t=ja(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Pl.test(n))return!1;if(Nl.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const Dl=new Va(3e4,6e4);function Ul(){const e=ol().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function jl(e){return new Promise(((t,n)=>{var r,i,s;function o(){Ul(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ul(),n(Ra(e,"network-request-failed"))},timeout:Dl.get()})}if(null===(i=null===(r=ol().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=ol().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return ol()[t]=()=>{gapi.load?o():n(Ra(e,"network-request-failed"))},gl(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Fl=null,e}))}let Fl=null;
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
const zl=new Va(5e3,15e3),Vl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$l=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bl(e){const t=e.config;Pa(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?$a(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.6.1"},i=$l.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ko(r).slice(1)}`}async function Wl(e){const t=await function(e){return Fl=Fl||jl(e),Fl}(e),n=ol().gapi;return Pa(n,e,"internal-error"),t.open({where:document.body,url:Bl(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vl,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Ra(e,"network-request-failed"),s=ol().setTimeout((()=>{r(i)}),zl.get());function o(){ol().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
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
 */const Hl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ql{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(Pd){}}}function Kl(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Hl),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Vo().toLowerCase();n&&(a=gc(l)?"_blank":n),pc(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Vo()){var t;return wc(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",a),new ql(null);const d=window.open(t||"",a,u);Pa(d,e,"popup-blocked");try{d.focus()}catch(Pd){}return new ql(d)}function Gl(e,t,n,r,i,s){Pa(e.config.authDomain,e,"auth-domain-config-required"),Pa(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.6.1",eventId:i};if(t instanceof Mc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Dc){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return $a(e,"emulator/auth/handler")}
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
 */(e)}?${Ko(a).slice(1)}`}const Jl=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nl,this._completeRedirectFn=Ol}async _openPopup(e,t,n,r){var i;Ma(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Kl(e,Gl(e,t,n,ja(),r),il())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Gl(e,t,n,ja(),r),ol().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Ma(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Wl(e),n=new Al(e);return t.register("authEvent",(t=>{Pa(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Aa(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ll(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return kc()||mc()||wc()}};var Xl,Yl="@firebase/auth";
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
class Zl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Pa(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
function Ql(e=function(e="[DEFAULT]"){const t=ha.get(e);if(!t)throw ya.create("no-app",{appName:e});return t}()){const t=va(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=va(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Ho(n.getOptions(),null!=t?t:{}))return e;Aa(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Jl,persistence:[ml,el,nl]})}Xl="Browser",ga(new Qo("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{Pa(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),Pa(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:Xl,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ec(Xl)},s=new Tc(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ua);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),ga(new Qo("auth-internal",(e=>{const t=Sc(e.getProvider("auth").getImmediate());return new Zl(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),wa(Yl,"0.19.4",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Xl)),wa(Yl,"0.19.4","esm2017");
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const eu="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,tu=e=>eu?Symbol(e):"_vr_"+e,nu=tu("rvlm"),ru=tu("rvd"),iu=tu("r"),su=tu("rl"),ou=tu("rvl"),au="undefined"!=typeof window;const cu=Object.assign;function lu(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const uu=()=>{},du=/\/$/;function fu(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),i=e(s)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function hu(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function pu(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function mu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!gu(e[n],t[n]))return!1;return!0}function gu(e,t){return Array.isArray(e)?vu(e,t):Array.isArray(t)?vu(t,e):e===t}function vu(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var yu,bu,_u,wu;function Iu(e){if(!e)if(au){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(du,"")}(bu=yu||(yu={})).pop="pop",bu.push="push",(wu=_u||(_u={})).back="back",wu.forward="forward",wu.unknown="";const ku=/^[^#]+#/;function Eu(e,t){return e.replace(ku,"#")+t}const Tu=()=>({left:window.pageXOffset,top:window.pageYOffset});function Su(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),i="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function Cu(e,t){return(history.state?history.state.position-t:-1)+e}const Ou=new Map;function Au(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),hu(n,"")}return hu(n,e)+r+i}function Ru(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Tu():null}}function xu(e){const{history:t,location:n}=window,r={value:Au(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:location.protocol+"//"+location.host+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:function(e,n){const o=cu({},i.value,t.state,{forward:e,scroll:Tu()});s(o.current,o,!0),s(e,cu({},Ru(r.value,e,null),{position:o.position+1},n),!1),r.value=e},replace:function(e,n){s(e,cu({},t.state,Ru(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}}}function Nu(e){const t=xu(e=Iu(e)),n=function(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=Au(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:u,type:yu.pop,direction:u?u>0?_u.forward:_u.back:_u.unknown})}))};function c(){const{history:e}=window;e.state&&e.replaceState(cu({},e.state,{scroll:Tu()}),"")}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c),{pauseListeners:function(){o=n.value},listen:function(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t},destroy:function(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}}}(e,t.state,t.location,t.replace);const r=cu({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:Eu.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Pu(e){return(e=location.host?e||location.pathname+location.search:"").includes("#")||(e+="#"),Nu(e)}function Lu(e){return"string"==typeof e||"symbol"==typeof e}const Mu={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Du=tu("nf");var Uu,ju;function Fu(e,t){return cu(new Error,{type:e,[Du]:!0},t)}function zu(e,t){return e instanceof Error&&Du in e&&(null==t||!!(e.type&t))}(ju=Uu||(Uu={}))[ju.aborted=4]="aborted",ju[ju.cancelled=8]="cancelled",ju[ju.duplicated=16]="duplicated";const Vu={sensitive:!1,strict:!1,start:!0,end:!0},$u=/[.+*?^${}()[\]/\\]/g;function Bu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Wu(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const e=Bu(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const Hu={type:0,value:""},qu=/[a-zA-Z0-9_]/;function Ku(e,t,n){const r=function(e,t){const n=cu({},Vu,t),r=[];let i=n.start?"^":"";const s=[];for(const c of e){const e=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let t=0;t<c.length;t++){const r=c[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace($u,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:u}=r;s.push({name:e,repeatable:n,optional:l});const d=u||"[^/]+?";if("[^/]+?"!==d){o+=10;try{new RegExp(`(${d})`)}catch(a){throw new Error(`Invalid custom RegExp for param "${e}" (${d}): `+a.message)}}let f=n?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;t||(f=l&&c.length<2?`(?:/${f})`:"/"+f),l&&(f+="?"),i+=f,o+=20,l&&(o+=-8),n&&(o+=-20),".*"===d&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");return{re:o,score:r,keys:s,parse:function(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[Hu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,l="",u="";function d(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function f(){l+=a}for(;c<e.length;)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&d(),o()):":"===a?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:qu.test(a)?f():(d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}(e.path),n),i=cu(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Gu(e,t){const n=[],r=new Map;function i(e,n,r){const a=!r,c=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ju(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);c.aliasOf=r&&r.record;const l=Zu(t,e),u=[c];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(cu({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let d,f;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(d=Ku(t,n,l),r?r.alias.push(d):(f=f||d,f!==d&&f.alias.push(d),a&&e.name&&!Xu(d)&&s(e.name)),"children"in c){const e=c.children;for(let t=0;t<e.length;t++)i(e[t],d,r&&r.children[t])}r=r||d,o(d)}return f?()=>{s(f)}:uu}function s(e){if(Lu(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function o(e){let t=0;for(;t<n.length&&Wu(e,n[t])>=0;)t++;n.splice(t,0,e),e.record.name&&!Xu(e)&&r.set(e.record.name,e)}return t=Zu({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:function(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw Fu(1,{location:e});o=i.record.name,a=cu(function(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw Fu(1,{location:e,currentLocation:t});o=i.record.name,a=cu({},t.params,e.params),s=i.stringify(a)}const c=[];let l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:o,path:s,params:a,matched:c,meta:Yu(c)}},removeRoute:s,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function Ju(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function Xu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Yu(e){return e.reduce(((e,t)=>cu(e,t.meta)),{})}function Zu(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Qu=/#/g,ed=/&/g,td=/\//g,nd=/=/g,rd=/\?/g,id=/\+/g,sd=/%5B/g,od=/%5D/g,ad=/%5E/g,cd=/%60/g,ld=/%7B/g,ud=/%7C/g,dd=/%7D/g,fd=/%20/g;function hd(e){return encodeURI(""+e).replace(ud,"|").replace(sd,"[").replace(od,"]")}function pd(e){return hd(e).replace(id,"%2B").replace(fd,"+").replace(Qu,"%23").replace(ed,"%26").replace(cd,"`").replace(ld,"{").replace(dd,"}").replace(ad,"^")}function md(e){return null==e?"":function(e){return hd(e).replace(Qu,"%23").replace(rd,"%3F")}(e).replace(td,"%2F")}function gd(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function vd(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(id," "),i=e.indexOf("="),s=gd(i<0?e:e.slice(0,i)),o=i<0?null:gd(e.slice(i+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function yd(e){let t="";for(let n in e){const r=e[n];if(n=pd(n).replace(nd,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map((e=>e&&pd(e))):[r&&pd(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function bd(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function _d(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function wd(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{var c;!1===e?a(Fu(4,{from:n,to:t})):e instanceof Error?a(e):"string"==typeof(c=e)||c&&"object"==typeof c?a(Fu(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"==typeof e&&s.push(e),o())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch((e=>a(e)))}))}function Id(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if("object"==typeof(s=a)||"displayName"in s||"props"in s||"__vccOpts"in s){const s=(a.__vccOpts||a)[t];s&&i.push(wd(s,n,r,o,e))}else{let s=a();i.push((()=>s.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=(a=i).__esModule||eu&&"Module"===a[Symbol.toStringTag]?i.default:i;var a;o.components[e]=s;const c=(s.__vccOpts||s)[t];return c&&wd(c,n,r,o,e)()}))))}}var s;return i}function kd(e){const t=Dt(iu),n=Dt(su),r=kt((()=>t.resolve(gt(e.to)))),i=kt((()=>{const{matched:e}=r.value,{length:t}=e,i=e[t-1],s=n.matched;if(!i||!s.length)return-1;const o=s.findIndex(pu.bind(null,i));if(o>-1)return o;const a=Td(e[t-2]);return t>1&&Td(i)===a&&s[s.length-1].path!==a?s.findIndex(pu.bind(null,e[t-2])):o})),s=kt((()=>i.value>-1&&function(e,t){for(const n in t){const r=t[n],i=e[n];if("string"==typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}(n.params,r.value.params))),o=kt((()=>i.value>-1&&i.value===n.matched.length-1&&mu(n.params,r.value.params)));return{route:r,href:kt((()=>r.value.href)),isActive:s,isExactActive:o,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[gt(e.replace)?"replace":"push"](gt(e.to)).catch(uu):Promise.resolve()}}}const Ed=Ht({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:kd,setup(e,{slots:t}){const n=et(kd(e)),{options:r}=Dt(iu),i=kt((()=>({[Sd(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Sd(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:bi("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Td(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Sd=(e,t,n)=>null!=e?e:null!=t?t:n,Cd=Ht({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=Dt(ou),i=kt((()=>e.route||r.value)),s=Dt(ru,0),o=kt((()=>i.value.matched[s]));Mt(ru,s+1),Mt(nu,o),Mt(ou,i);const a=ht();return pi((()=>[a.value,o.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&pu(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=i.value,s=o.value,c=s&&s.components[e.name],l=e.name;if(!c)return Od(n.default,{Component:c,route:r});const u=s.props[e.name],d=u?!0===u?r.params:"function"==typeof u?u(r):u:null,f=bi(c,cu({},d,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(s.instances[l]=null)},ref:a}));return Od(n.default,{Component:f,route:r})||f}}});function Od(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Ad=Cd;function Rd(e){const t=Gu(e.routes,e),n=e.parseQuery||vd,r=e.stringifyQuery||yd,i=e.history,s=_d(),o=_d(),a=_d(),c=pt(Mu,!0);let l=Mu;au&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=lu.bind(null,(e=>""+e)),d=lu.bind(null,md),f=lu.bind(null,gd);function h(e,s){if(s=cu({},s||c.value),"string"==typeof e){const r=fu(n,e,s.path),o=t.resolve({path:r.path},s),a=i.createHref(r.fullPath);return cu(r,o,{params:f(o.params),hash:gd(r.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=cu({},e,{path:fu(n,e.path,s.path).path});else{const t=cu({},e.params);for(const e in t)null==t[e]&&delete t[e];o=cu({},e,{params:d(e.params)}),s.params=d(s.params)}const a=t.resolve(o,s),l=e.hash||"";a.params=u(f(a.params));const h=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(r,cu({},e,{hash:(p=l,hd(p).replace(ld,"{").replace(dd,"}").replace(ad,"^")),path:a.path}));var p;const m=i.createHref(h);return cu({fullPath:h,hash:l,query:r===yd?bd(e.query):e.query||{}},a,{redirectedFrom:void 0,href:m})}function p(e){return"string"==typeof e?fu(n,e,c.value.path):cu({},e)}function m(e,t){if(l!==e)return Fu(8,{from:t,to:e})}function g(e){return y(e)}function v(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=p(r):{path:r},r.params={}),cu({query:e.query,hash:e.hash,params:e.params},r)}}function y(e,t){const n=l=h(e),i=c.value,s=e.state,o=e.force,a=!0===e.replace,u=v(n);if(u)return y(cu(p(u),{state:s,force:o,replace:a}),t||n);const d=n;let f;return d.redirectedFrom=t,!o&&function(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&pu(t.matched[r],n.matched[i])&&mu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(r,i,n)&&(f=Fu(16,{to:d,from:i}),R(i,i,!0,!1)),(f?Promise.resolve(f):_(d,i)).catch((e=>zu(e)?e:O(e,d,i))).then((e=>{if(e){if(zu(e,2))return y(cu(p(e.to),{state:s,force:o,replace:a}),t||d)}else e=I(d,i,!0,a,s);return w(d,i,e),e}))}function b(e,t){const n=m(e,t);return n?Promise.reject(n):Promise.resolve()}function _(e,t){let n;const[r,i,a]=function(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>pu(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>pu(e,a)))||i.push(a))}return[n,r,i]}(e,t);n=Id(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach((r=>{n.push(wd(r,e,t))}));const c=b.bind(null,e,t);return n.push(c),xd(n).then((()=>{n=[];for(const r of s.list())n.push(wd(r,e,t));return n.push(c),xd(n)})).then((()=>{n=Id(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(wd(r,e,t))}));return n.push(c),xd(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(wd(i,e,t));else n.push(wd(r.beforeEnter,e,t));return n.push(c),xd(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Id(a,"beforeRouteEnter",e,t),n.push(c),xd(n)))).then((()=>{n=[];for(const r of o.list())n.push(wd(r,e,t));return n.push(c),xd(n)})).catch((e=>zu(e,8)?e:Promise.reject(e)))}function w(e,t,n){for(const r of a.list())r(e,t,n)}function I(e,t,n,r,s){const o=m(e,t);if(o)return o;const a=t===Mu,l=au?history.state:{};n&&(r||a?i.replace(e.fullPath,cu({scroll:a&&l&&l.scroll},s)):i.push(e.fullPath,s)),c.value=e,R(e,t,n,a),A()}let k;function E(){k=i.listen(((e,t,n)=>{const r=h(e),s=v(r);if(s)return void y(cu(s,{replace:!0}),r).catch(uu);l=r;const o=c.value;var a,u;au&&(a=Cu(o.fullPath,n.delta),u=Tu(),Ou.set(a,u)),_(r,o).catch((e=>zu(e,12)?e:zu(e,2)?(y(e.to,r).then((e=>{zu(e,20)&&!n.delta&&n.type===yu.pop&&i.go(-1,!1)})).catch(uu),Promise.reject()):(n.delta&&i.go(-n.delta,!1),O(e,r,o)))).then((e=>{(e=e||I(r,o,!1))&&(n.delta?i.go(-n.delta,!1):n.type===yu.pop&&zu(e,20)&&i.go(-1,!1)),w(r,o,e)})).catch(uu)}))}let T,S=_d(),C=_d();function O(e,t,n){A(e);const r=C.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function A(e){T||(T=!0,E(),S.list().forEach((([t,n])=>e?n(e):t())),S.reset())}function R(t,n,r,i){const{scrollBehavior:s}=e;if(!au||!s)return Promise.resolve();const o=!r&&function(e){const t=Ou.get(e);return Ou.delete(e),t}(Cu(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return ii().then((()=>s(t,n,o))).then((e=>e&&Su(e))).catch((e=>O(e,t,n)))}const x=e=>i.go(e);let N;const P=new Set;return{currentRoute:c,addRoute:function(e,n){let r,i;return Lu(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)},removeRoute:function(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:h,options:e,push:g,replace:function(e){return g(cu(p(e),{replace:!0}))},go:x,back:()=>x(-1),forward:()=>x(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:C.add,isReady:function(){return T&&c.value!==Mu?Promise.resolve():new Promise(((e,t)=>{S.add([e,t])}))},install(e){e.component("RouterLink",Ed),e.component("RouterView",Ad),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>gt(c)}),au&&!N&&c.value===Mu&&(N=!0,g(i.location).catch((e=>{})));const t={};for(const r in Mu)t[r]=kt((()=>c.value[r]));e.provide(iu,this),e.provide(su,et(t)),e.provide(ou,c);const n=e.unmount;P.add(e),e.unmount=function(){P.delete(e),P.size<1&&(l=Mu,k&&k(),c.value=Mu,N=!1,T=!1),n()}}}}function xd(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function Nd(){return Dt(iu)}export{et as $,Uo as A,Oo as B,Ao as C,No as D,Ro as E,tr as F,Mo as G,Do as H,Po as I,Lo as J,xo as K,cs as L,Co as M,Ir as N,fi as O,Mt as P,Dt as Q,a as R,_r as S,Fi as T,bi as U,r as V,rs as W,Gc as X,jc as Y,El as Z,Jn as _,tn as a,rn as a0,ii as a1,pi as a2,bt as a3,Mn as a4,es as a5,is as a6,Kc as a7,Jc as a8,qc as a9,on as b,kt as c,Ht as d,Xn as e,dr as f,Ql as g,yr as h,_a as i,br as j,ar as k,Cr as l,kr as m,fr as n,Xc as o,wr as p,Zn as q,ht as r,Yc as s,c as t,Nd as u,Rd as v,Rt as w,Pu as x,ao as y,jo as z};
