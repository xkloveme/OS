function Xr(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const vc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yc=Xr(vc);function Ls(t){return!!t||t===""}function Qr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=ge(r)?wc(r):Qr(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(ge(t))return t;if(me(t))return t}}const _c=/;(?![^(]*\))/g,bc=/:(.+)/;function wc(t){const e={};return t.split(_c).forEach(n=>{if(n){const r=n.split(bc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Zr(t){let e="";if(ge(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=Zr(t[n]);r&&(e+=r+" ")}else if(me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Vg=t=>t==null?"":H(t)||me(t)&&(t.toString===$s||!K(t.toString))?JSON.stringify(t,Ds,2):String(t),Ds=(t,e)=>e&&e.__v_isRef?Ds(t,e.value):jt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Fs(e)?{[`Set(${e.size})`]:[...e.values()]}:me(e)&&!H(e)&&!Bs(e)?String(e):e,ie={},Ht=[],Ue=()=>{},Ic=()=>!1,Ec=/^on[^a-z]/,Xn=t=>Ec.test(t),ei=t=>t.startsWith("onUpdate:"),ye=Object.assign,Us=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Tc=Object.prototype.hasOwnProperty,Q=(t,e)=>Tc.call(t,e),H=Array.isArray,jt=t=>Qn(t)==="[object Map]",Fs=t=>Qn(t)==="[object Set]",K=t=>typeof t=="function",ge=t=>typeof t=="string",ti=t=>typeof t=="symbol",me=t=>t!==null&&typeof t=="object",zs=t=>me(t)&&K(t.then)&&K(t.catch),$s=Object.prototype.toString,Qn=t=>$s.call(t),Ac=t=>Qn(t).slice(8,-1),Bs=t=>Qn(t)==="[object Object]",ni=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zn=Xr(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),er=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Cc=/-(\w)/g,$e=er(t=>t.replace(Cc,(e,n)=>n?n.toUpperCase():"")),kc=/\B([A-Z])/g,Wt=er(t=>t.replace(kc,"-$1").toLowerCase()),tr=er(t=>t.charAt(0).toUpperCase()+t.slice(1)),ri=er(t=>t?`on${tr(t)}`:""),mn=(t,e)=>!Object.is(t,e),nr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},rr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ir=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Hs;const Rc=()=>Hs||(Hs=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let It;const sr=[];class Oc{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&It&&(this.parent=It,this.index=(It.scopes||(It.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(sr.push(this),It=this)}off(){this.active&&(sr.pop(),It=sr[sr.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function Sc(t,e){e=e||It,e&&e.active&&e.effects.push(t)}const ii=t=>{const e=new Set(t);return e.w=0,e.n=0,e},js=t=>(t.w&ot)>0,Ws=t=>(t.n&ot)>0,Pc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ot},Nc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];js(i)&&!Ws(i)?i.delete(t):e[n++]=i,i.w&=~ot,i.n&=~ot}e.length=n}},si=new WeakMap;let gn=0,ot=1;const oi=30,vn=[];let Et;const Tt=Symbol(""),ai=Symbol("");class li{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],Sc(this,r)}run(){if(!this.active)return this.fn();if(!vn.includes(this))try{return vn.push(Et=this),xc(),ot=1<<++gn,gn<=oi?Pc(this):Vs(this),this.fn()}finally{gn<=oi&&Nc(this),ot=1<<--gn,At(),vn.pop();const e=vn.length;Et=e>0?vn[e-1]:void 0}}stop(){this.active&&(Vs(this),this.onStop&&this.onStop(),this.active=!1)}}function Vs(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Vt=!0;const ci=[];function Kt(){ci.push(Vt),Vt=!1}function xc(){ci.push(Vt),Vt=!0}function At(){const t=ci.pop();Vt=t===void 0?!0:t}function Re(t,e,n){if(!Ks())return;let r=si.get(t);r||si.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=ii()),qs(i)}function Ks(){return Vt&&Et!==void 0}function qs(t,e){let n=!1;gn<=oi?Ws(t)||(t.n|=ot,n=!js(t)):n=!t.has(Et),n&&(t.add(Et),Et.deps.push(t))}function Ye(t,e,n,r,i,s){const o=si.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t))o.forEach((l,c)=>{(c==="length"||c>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?ni(n)&&a.push(o.get("length")):(a.push(o.get(Tt)),jt(t)&&a.push(o.get(ai)));break;case"delete":H(t)||(a.push(o.get(Tt)),jt(t)&&a.push(o.get(ai)));break;case"set":jt(t)&&a.push(o.get(Tt));break}if(a.length===1)a[0]&&ui(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ui(ii(l))}}function ui(t,e){for(const n of H(t)?t:[...t])(n!==Et||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Mc=Xr("__proto__,__v_isRef,__isVue"),Gs=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(ti)),Lc=fi(),Dc=fi(!1,!0),Uc=fi(!0),Js=Fc();function Fc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Z(this);for(let s=0,o=this.length;s<o;s++)Re(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(Z)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Kt();const r=Z(this)[e].apply(this,n);return At(),r}}),t}function fi(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_raw"&&s===(t?e?eu:io:e?ro:no).get(r))return r;const o=H(r);if(!t&&o&&Q(Js,i))return Reflect.get(Js,i,s);const a=Reflect.get(r,i,s);return(ti(i)?Gs.has(i):Mc(i))||(t||Re(r,"get",i),e)?a:we(a)?!o||!ni(i)?a.value:a:me(a)?t?so(a):yn(a):a}}const zc=Ys(),$c=Ys(!0);function Ys(t=!1){return function(n,r,i,s){let o=n[r];if(!t&&!mi(i)&&(i=Z(i),o=Z(o),!H(n)&&we(o)&&!we(i)))return o.value=i,!0;const a=H(n)&&ni(r)?Number(r)<n.length:Q(n,r),l=Reflect.set(n,r,i,s);return n===Z(s)&&(a?mn(i,o)&&Ye(n,"set",r,i):Ye(n,"add",r,i)),l}}function Bc(t,e){const n=Q(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Ye(t,"delete",e,void 0),r}function Hc(t,e){const n=Reflect.has(t,e);return(!ti(e)||!Gs.has(e))&&Re(t,"has",e),n}function jc(t){return Re(t,"iterate",H(t)?"length":Tt),Reflect.ownKeys(t)}const Xs={get:Lc,set:zc,deleteProperty:Bc,has:Hc,ownKeys:jc},Wc={get:Uc,set(t,e){return!0},deleteProperty(t,e){return!0}},Vc=ye({},Xs,{get:Dc,set:$c}),di=t=>t,or=t=>Reflect.getPrototypeOf(t);function ar(t,e,n=!1,r=!1){t=t.__v_raw;const i=Z(t),s=Z(e);e!==s&&!n&&Re(i,"get",e),!n&&Re(i,"get",s);const{has:o}=or(i),a=r?di:n?gi:_n;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function lr(t,e=!1){const n=this.__v_raw,r=Z(n),i=Z(t);return t!==i&&!e&&Re(r,"has",t),!e&&Re(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function cr(t,e=!1){return t=t.__v_raw,!e&&Re(Z(t),"iterate",Tt),Reflect.get(t,"size",t)}function Qs(t){t=Z(t);const e=Z(this);return or(e).has.call(e,t)||(e.add(t),Ye(e,"add",t,t)),this}function Zs(t,e){e=Z(e);const n=Z(this),{has:r,get:i}=or(n);let s=r.call(n,t);s||(t=Z(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?mn(e,o)&&Ye(n,"set",t,e):Ye(n,"add",t,e),this}function eo(t){const e=Z(this),{has:n,get:r}=or(e);let i=n.call(e,t);i||(t=Z(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Ye(e,"delete",t,void 0),s}function to(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&Ye(t,"clear",void 0,void 0),n}function ur(t,e){return function(r,i){const s=this,o=s.__v_raw,a=Z(o),l=e?di:t?gi:_n;return!t&&Re(a,"iterate",Tt),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function fr(t,e,n){return function(...r){const i=this.__v_raw,s=Z(i),o=jt(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?di:e?gi:_n;return!e&&Re(s,"iterate",l?ai:Tt),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function at(t){return function(...e){return t==="delete"?!1:this}}function Kc(){const t={get(s){return ar(this,s)},get size(){return cr(this)},has:lr,add:Qs,set:Zs,delete:eo,clear:to,forEach:ur(!1,!1)},e={get(s){return ar(this,s,!1,!0)},get size(){return cr(this)},has:lr,add:Qs,set:Zs,delete:eo,clear:to,forEach:ur(!1,!0)},n={get(s){return ar(this,s,!0)},get size(){return cr(this,!0)},has(s){return lr.call(this,s,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:ur(!0,!1)},r={get(s){return ar(this,s,!0,!0)},get size(){return cr(this,!0)},has(s){return lr.call(this,s,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:ur(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=fr(s,!1,!1),n[s]=fr(s,!0,!1),e[s]=fr(s,!1,!0),r[s]=fr(s,!0,!0)}),[t,n,e,r]}const[qc,Gc,Jc,Yc]=Kc();function hi(t,e){const n=e?t?Yc:Jc:t?Gc:qc;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Q(n,i)&&i in r?n:r,i,s)}const Xc={get:hi(!1,!1)},Qc={get:hi(!1,!0)},Zc={get:hi(!0,!1)},no=new WeakMap,ro=new WeakMap,io=new WeakMap,eu=new WeakMap;function tu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nu(t){return t.__v_skip||!Object.isExtensible(t)?0:tu(Ac(t))}function yn(t){return t&&t.__v_isReadonly?t:pi(t,!1,Xs,Xc,no)}function ru(t){return pi(t,!1,Vc,Qc,ro)}function so(t){return pi(t,!0,Wc,Zc,io)}function pi(t,e,n,r,i){if(!me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=nu(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function qt(t){return mi(t)?qt(t.__v_raw):!!(t&&t.__v_isReactive)}function mi(t){return!!(t&&t.__v_isReadonly)}function oo(t){return qt(t)||mi(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function ao(t){return rr(t,"__v_skip",!0),t}const _n=t=>me(t)?yn(t):t,gi=t=>me(t)?so(t):t;function lo(t){Ks()&&(t=Z(t),t.dep||(t.dep=ii()),qs(t.dep))}function co(t,e){t=Z(t),t.dep&&ui(t.dep)}function we(t){return Boolean(t&&t.__v_isRef===!0)}function iu(t){return uo(t,!1)}function su(t){return uo(t,!0)}function uo(t,e){return we(t)?t:new ou(t,e)}class ou{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:_n(e)}get value(){return lo(this),this._value}set value(e){e=this._shallow?e:Z(e),mn(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:_n(e),co(this))}}function bn(t){return we(t)?t.value:t}const au={get:(t,e,n)=>bn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return we(i)&&!we(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function fo(t){return qt(t)?t:new Proxy(t,au)}function Kg(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=cu(t,n);return e}class lu{constructor(e,n){this._object=e,this._key=n,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function cu(t,e){const n=t[e];return we(n)?n:new lu(t,e)}class uu{constructor(e,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new li(e,()=>{this._dirty||(this._dirty=!0,co(this))}),this.__v_isReadonly=r}get value(){const e=Z(this);return lo(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function pe(t,e){let n,r;const i=K(t);return i?(n=t,r=Ue):(n=t.get,r=t.set),new uu(n,r,i||!r)}Promise.resolve();function fu(t,e,...n){const r=t.vnode.props||ie;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[u]||ie;h?i=n.map(v=>v.trim()):d&&(i=n.map(ir))}let a,l=r[a=ri(e)]||r[a=ri($e(e))];!l&&s&&(l=r[a=ri(Wt(e))]),l&&Me(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Me(c,t,6,i)}}function ho(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!K(t)){const l=c=>{const u=ho(c,e,!0);u&&(a=!0,ye(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(r.set(t,null),null):(H(s)?s.forEach(l=>o[l]=null):ye(o,s),r.set(t,o),o)}function vi(t,e){return!t||!Xn(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,Wt(e))||Q(t,e))}let Ne=null,po=null;function dr(t){const e=Ne;return Ne=t,po=t&&t.type.__scopeId||null,e}function du(t,e=Ne,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Ho(-1);const s=dr(e),o=t(...i);return dr(s),r._d&&Ho(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function yi(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:v,ctx:E,inheritAttrs:S}=t;let k,g;const w=dr(t);try{if(n.shapeFlag&4){const M=i||r;k=We(u.call(M,M,d,s,v,h,E)),g=l}else{const M=e;k=We(M.length>1?M(s,{attrs:l,slots:a,emit:c}):M(s,null)),g=e.props?l:hu(l)}}catch(M){En.length=0,Tr(M,t,1),k=Ce(je)}let N=k;if(g&&S!==!1){const M=Object.keys(g),{shapeFlag:W}=N;M.length&&W&(1|6)&&(o&&M.some(ei)&&(g=pu(g,o)),N=Gt(N,g))}return n.dirs&&(N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),k=N,dr(w),k}const hu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xn(n))&&((e||(e={}))[n]=t[n]);return e},pu=(t,e)=>{const n={};for(const r in t)(!ei(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function mu(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?mo(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==r[h]&&!vi(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?mo(r,o,c):!0:!!o;return!1}function mo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!vi(n,s))return!0}return!1}function gu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const vu=t=>t.__isSuspense;function yu(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):yf(t)}function hr(t,e){if(ve){let n=ve.provides;const r=ve.parent&&ve.parent.provides;r===n&&(n=ve.provides=Object.create(r)),n[t]=e}}function Xe(t,e,n=!1){const r=ve||Ne;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&K(e)?e.call(r.proxy):e}}function _u(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wo(()=>{t.isMounted=!0}),Io(()=>{t.isUnmounting=!0}),t}const xe=[Function,Array],bu={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xe,onEnter:xe,onAfterEnter:xe,onEnterCancelled:xe,onBeforeLeave:xe,onLeave:xe,onAfterLeave:xe,onLeaveCancelled:xe,onBeforeAppear:xe,onAppear:xe,onAfterAppear:xe,onAppearCancelled:xe},setup(t,{slots:e}){const n=af(),r=_u();let i;return()=>{const s=e.default&&_o(e.default(),!0);if(!s||!s.length)return;const o=Z(t),{mode:a}=o,l=s[0];if(r.isLeaving)return bi(l);const c=yo(l);if(!c)return bi(l);const u=_i(c,o,r,n);wi(c,u);const d=n.subTree,h=d&&yo(d);let v=!1;const{getTransitionKey:E}=c.type;if(E){const S=E();i===void 0?i=S:S!==i&&(i=S,v=!0)}if(h&&h.type!==je&&(!Ot(c,h)||v)){const S=_i(h,o,r,n);if(wi(h,S),a==="out-in")return r.isLeaving=!0,S.afterLeave=()=>{r.isLeaving=!1,n.update()},bi(l);a==="in-out"&&c.type!==je&&(S.delayLeave=(k,g,w)=>{const N=vo(r,h);N[String(h.key)]=h,k._leaveCb=()=>{g(),k._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=w})}return l}}},go=bu;function vo(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function _i(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:v,onLeaveCancelled:E,onBeforeAppear:S,onAppear:k,onAfterAppear:g,onAppearCancelled:w}=e,N=String(t.key),M=vo(n,t),W=(U,Y)=>{U&&Me(U,r,9,Y)},j={mode:s,persisted:o,beforeEnter(U){let Y=a;if(!n.isMounted)if(i)Y=S||a;else return;U._leaveCb&&U._leaveCb(!0);const q=M[N];q&&Ot(t,q)&&q.el._leaveCb&&q.el._leaveCb(),W(Y,[U])},enter(U){let Y=l,q=c,ee=u;if(!n.isMounted)if(i)Y=k||l,q=g||c,ee=w||u;else return;let ue=!1;const L=U._enterCb=de=>{ue||(ue=!0,de?W(ee,[U]):W(q,[U]),j.delayedLeave&&j.delayedLeave(),U._enterCb=void 0)};Y?(Y(U,L),Y.length<=1&&L()):L()},leave(U,Y){const q=String(t.key);if(U._enterCb&&U._enterCb(!0),n.isUnmounting)return Y();W(d,[U]);let ee=!1;const ue=U._leaveCb=L=>{ee||(ee=!0,Y(),L?W(E,[U]):W(v,[U]),U._leaveCb=void 0,M[q]===t&&delete M[q])};M[q]=t,h?(h(U,ue),h.length<=1&&ue()):ue()},clone(U){return _i(U,e,n,r)}};return j}function bi(t){if(pr(t))return t=Gt(t),t.children=null,t}function yo(t){return pr(t)?t.children?t.children[0]:void 0:t}function wi(t,e){t.shapeFlag&6&&t.component?wi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function _o(t,e=!1){let n=[],r=0;for(let i=0;i<t.length;i++){const s=t[i];s.type===He?(s.patchFlag&128&&r++,n=n.concat(_o(s.children,e))):(e||s.type!==je)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function wn(t){return K(t)?{setup:t,name:t.name}:t}const Ii=t=>!!t.type.__asyncLoader,pr=t=>t.type.__isKeepAlive;function wu(t,e){bo(t,"a",e)}function Iu(t,e){bo(t,"da",e)}function bo(t,e,n=ve){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(mr(e,r,n),n){let i=n.parent;for(;i&&i.parent;)pr(i.parent.vnode)&&Eu(r,e,n,i),i=i.parent}}function Eu(t,e,n,r){const i=mr(e,t,r,!0);Eo(()=>{Us(r[e],i)},n)}function mr(t,e,n=ve,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Kt(),Jt(n);const a=Me(e,n,t,o);return St(),At(),a});return r?i.unshift(s):i.push(s),s}}const Qe=t=>(e,n=ve)=>(!Er||t==="sp")&&mr(t,e,n),Tu=Qe("bm"),wo=Qe("m"),Au=Qe("bu"),Cu=Qe("u"),Io=Qe("bum"),Eo=Qe("um"),ku=Qe("sp"),Ru=Qe("rtg"),Ou=Qe("rtc");function Su(t,e=ve){mr("ec",t,e)}let Ei=!0;function Pu(t){const e=Co(t),n=t.proxy,r=t.ctx;Ei=!1,e.beforeCreate&&To(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:v,updated:E,activated:S,deactivated:k,beforeDestroy:g,beforeUnmount:w,destroyed:N,unmounted:M,render:W,renderTracked:j,renderTriggered:U,errorCaptured:Y,serverPrefetch:q,expose:ee,inheritAttrs:ue,components:L,directives:de,filters:Ae}=e;if(c&&Nu(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const oe in o){const te=o[oe];K(te)&&(r[oe]=te.bind(n))}if(i){const oe=i.call(n,n);me(oe)&&(t.data=yn(oe))}if(Ei=!0,s)for(const oe in s){const te=s[oe],Se=K(te)?te.bind(n,n):K(te.get)?te.get.bind(n,n):Ue,$t=!K(te)&&K(te.set)?te.set.bind(n):Ue,Je=pe({get:Se,set:$t});Object.defineProperty(r,oe,{enumerable:!0,configurable:!0,get:()=>Je.value,set:Fe=>Je.value=Fe})}if(a)for(const oe in a)Ao(a[oe],r,n,oe);if(l){const oe=K(l)?l.call(n):l;Reflect.ownKeys(oe).forEach(te=>{hr(te,oe[te])})}u&&To(u,t,"c");function he(oe,te){H(te)?te.forEach(Se=>oe(Se.bind(n))):te&&oe(te.bind(n))}if(he(Tu,d),he(wo,h),he(Au,v),he(Cu,E),he(wu,S),he(Iu,k),he(Su,Y),he(Ou,j),he(Ru,U),he(Io,w),he(Eo,M),he(ku,q),H(ee))if(ee.length){const oe=t.exposed||(t.exposed={});ee.forEach(te=>{Object.defineProperty(oe,te,{get:()=>n[te],set:Se=>n[te]=Se})})}else t.exposed||(t.exposed={});W&&t.render===Ue&&(t.render=W),ue!=null&&(t.inheritAttrs=ue),L&&(t.components=L),de&&(t.directives=de)}function Nu(t,e,n=Ue,r=!1){H(t)&&(t=Ti(t));for(const i in t){const s=t[i];let o;me(s)?"default"in s?o=Xe(s.from||i,s.default,!0):o=Xe(s.from||i):o=Xe(s),we(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function To(t,e,n){Me(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ao(t,e,n,r){const i=r.includes(".")?ia(n,r):()=>n[r];if(ge(t)){const s=e[t];K(s)&&Rn(i,s)}else if(K(t))Rn(i,t.bind(n));else if(me(t))if(H(t))t.forEach(s=>Ao(s,e,n,r));else{const s=K(t.handler)?t.handler.bind(n):e[t.handler];K(s)&&Rn(i,s,t)}}function Co(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>gr(l,c,o,!0)),gr(l,e,o)),s.set(e,l),l}function gr(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&gr(t,s,n,!0),i&&i.forEach(o=>gr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=xu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const xu={data:ko,props:Ct,emits:Ct,methods:Ct,computed:Ct,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Ct,directives:Ct,watch:Lu,provide:ko,inject:Mu};function ko(t,e){return e?t?function(){return ye(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function Mu(t,e){return Ct(Ti(t),Ti(e))}function Ti(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ie(t,e){return t?[...new Set([].concat(t,e))]:e}function Ct(t,e){return t?ye(ye(Object.create(null),t),e):e}function Lu(t,e){if(!t)return e;if(!e)return t;const n=ye(Object.create(null),t);for(const r in e)n[r]=Ie(t[r],e[r]);return n}function Du(t,e,n,r=!1){const i={},s={};rr(s,br,1),t.propsDefaults=Object.create(null),Ro(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:ru(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function Uu(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=Z(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];const v=e[h];if(l)if(Q(s,h))v!==s[h]&&(s[h]=v,c=!0);else{const E=$e(h);i[E]=Ai(l,a,E,v,t,!1)}else v!==s[h]&&(s[h]=v,c=!0)}}}else{Ro(t,e,i,s)&&(c=!0);let u;for(const d in a)(!e||!Q(e,d)&&((u=Wt(d))===d||!Q(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Ai(l,a,d,void 0,t,!0)):delete i[d]);if(s!==a)for(const d in s)(!e||!Q(e,d))&&(delete s[d],c=!0)}c&&Ye(t,"set","$attrs")}function Ro(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Zn(l))continue;const c=e[l];let u;i&&Q(i,u=$e(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:vi(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=Z(n),c=a||ie;for(let u=0;u<s.length;u++){const d=s[u];n[d]=Ai(i,l,d,c[d],t,!Q(c,d))}}return o}function Ai(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&K(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(Jt(i),r=c[n]=l.call(null,e),St())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Wt(n))&&(r=!0))}return r}function Oo(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!K(t)){const u=d=>{l=!0;const[h,v]=Oo(d,e,!0);ye(o,h),v&&a.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return r.set(t,Ht),Ht;if(H(s))for(let u=0;u<s.length;u++){const d=$e(s[u]);So(d)&&(o[d]=ie)}else if(s)for(const u in s){const d=$e(u);if(So(d)){const h=s[u],v=o[d]=H(h)||K(h)?{type:h}:h;if(v){const E=xo(Boolean,v.type),S=xo(String,v.type);v[0]=E>-1,v[1]=S<0||E<S,(E>-1||Q(v,"default"))&&a.push(d)}}}const c=[o,a];return r.set(t,c),c}function So(t){return t[0]!=="$"}function Po(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function No(t,e){return Po(t)===Po(e)}function xo(t,e){return H(e)?e.findIndex(n=>No(n,t)):K(e)&&No(e,t)?0:-1}const Mo=t=>t[0]==="_"||t==="$stable",Ci=t=>H(t)?t.map(We):[We(t)],Fu=(t,e,n)=>{const r=du((...i)=>Ci(e(...i)),n);return r._c=!1,r},Lo=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Mo(i))continue;const s=t[i];if(K(s))e[i]=Fu(i,s,r);else if(s!=null){const o=Ci(s);e[i]=()=>o}}},Do=(t,e)=>{const n=Ci(e);t.slots.default=()=>n},zu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),rr(e,"_",n)):Lo(e,t.slots={})}else t.slots={},e&&Do(t,e);rr(t.slots,br,1)},$u=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(ye(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Lo(e,i)),o=e}else e&&(Do(t,e),o={default:1});if(s)for(const a in i)!Mo(a)&&!(a in o)&&delete i[a]};function qg(t,e){const n=Ne;if(n===null)return t;const r=n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=ie]=e[s];K(o)&&(o={mounted:o,updated:o}),o.deep&&Pt(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function kt(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(Kt(),Me(l,n,8,[t.el,a,t,e]),At())}}function Uo(){return{app:null,config:{isNativeTag:Ic,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bu=0;function Hu(t,e){return function(r,i=null){i!=null&&!me(i)&&(i=null);const s=Uo(),o=new Set;let a=!1;const l=s.app={_uid:Bu++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:bf,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&K(c.install)?(o.add(c),c.install(l,...u)):K(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!a){const h=Ce(r,i);return h.appContext=s,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,Li(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}const Ee=yu;function ju(t){return Wu(t)}function Wu(t,e){const n=Rc();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:v=Ue,cloneNode:E,insertStaticContent:S}=t,k=(f,p,m,b=null,_=null,C=null,O=!1,T=null,A=!!p.dynamicChildren)=>{if(f===p)return;f&&!Ot(f,p)&&(b=D(f),Pe(f,_,C,!0),f=null),p.patchFlag===-2&&(A=!1,p.dynamicChildren=null);const{type:I,ref:F,shapeFlag:P}=p;switch(I){case Pi:g(f,p,m,b);break;case je:w(f,p,m,b);break;case yr:f==null&&N(p,m,b,O);break;case He:de(f,p,m,b,_,C,O,T,A);break;default:P&1?j(f,p,m,b,_,C,O,T,A):P&6?Ae(f,p,m,b,_,C,O,T,A):(P&64||P&128)&&I.process(f,p,m,b,_,C,O,T,A,ae)}F!=null&&_&&ki(F,f&&f.ref,C,p||f,!p)},g=(f,p,m,b)=>{if(f==null)r(p.el=a(p.children),m,b);else{const _=p.el=f.el;p.children!==f.children&&c(_,p.children)}},w=(f,p,m,b)=>{f==null?r(p.el=l(p.children||""),m,b):p.el=f.el},N=(f,p,m,b)=>{[f.el,f.anchor]=S(f.children,p,m,b)},M=({el:f,anchor:p},m,b)=>{let _;for(;f&&f!==p;)_=h(f),r(f,m,b),f=_;r(p,m,b)},W=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=h(f),i(f),f=m;i(p)},j=(f,p,m,b,_,C,O,T,A)=>{O=O||p.type==="svg",f==null?U(p,m,b,_,C,O,T,A):ee(f,p,_,C,O,T,A)},U=(f,p,m,b,_,C,O,T)=>{let A,I;const{type:F,props:P,shapeFlag:z,transition:B,patchFlag:X,dirs:fe}=f;if(f.el&&E!==void 0&&X===-1)A=f.el=E(f.el);else{if(A=f.el=o(f.type,C,P&&P.is,P),z&8?u(A,f.children):z&16&&q(f.children,A,null,b,_,C&&F!=="foreignObject",O,T),fe&&kt(f,null,b,"created"),P){for(const ce in P)ce!=="value"&&!Zn(ce)&&s(A,ce,null,P[ce],C,f.children,b,_,R);"value"in P&&s(A,"value",null,P.value),(I=P.onVnodeBeforeMount)&&Be(I,b,f)}Y(A,f,f.scopeId,O,b)}fe&&kt(f,null,b,"beforeMount");const re=(!_||_&&!_.pendingBranch)&&B&&!B.persisted;re&&B.beforeEnter(A),r(A,p,m),((I=P&&P.onVnodeMounted)||re||fe)&&Ee(()=>{I&&Be(I,b,f),re&&B.enter(A),fe&&kt(f,null,b,"mounted")},_)},Y=(f,p,m,b,_)=>{if(m&&v(f,m),b)for(let C=0;C<b.length;C++)v(f,b[C]);if(_){let C=_.subTree;if(p===C){const O=_.vnode;Y(f,O,O.scopeId,O.slotScopeIds,_.parent)}}},q=(f,p,m,b,_,C,O,T,A=0)=>{for(let I=A;I<f.length;I++){const F=f[I]=T?lt(f[I]):We(f[I]);k(null,F,p,m,b,_,C,O,T)}},ee=(f,p,m,b,_,C,O)=>{const T=p.el=f.el;let{patchFlag:A,dynamicChildren:I,dirs:F}=p;A|=f.patchFlag&16;const P=f.props||ie,z=p.props||ie;let B;(B=z.onVnodeBeforeUpdate)&&Be(B,m,p,f),F&&kt(p,f,m,"beforeUpdate");const X=_&&p.type!=="foreignObject";if(I?ue(f.dynamicChildren,I,T,m,b,X,C):O||Se(f,p,T,null,m,b,X,C,!1),A>0){if(A&16)L(T,p,P,z,m,b,_);else if(A&2&&P.class!==z.class&&s(T,"class",null,z.class,_),A&4&&s(T,"style",P.style,z.style,_),A&8){const fe=p.dynamicProps;for(let re=0;re<fe.length;re++){const ce=fe[re],De=P[ce],Bt=z[ce];(Bt!==De||ce==="value")&&s(T,ce,De,Bt,_,f.children,m,b,R)}}A&1&&f.children!==p.children&&u(T,p.children)}else!O&&I==null&&L(T,p,P,z,m,b,_);((B=z.onVnodeUpdated)||F)&&Ee(()=>{B&&Be(B,m,p,f),F&&kt(p,f,m,"updated")},b)},ue=(f,p,m,b,_,C,O)=>{for(let T=0;T<p.length;T++){const A=f[T],I=p[T],F=A.el&&(A.type===He||!Ot(A,I)||A.shapeFlag&(6|64))?d(A.el):m;k(A,I,F,null,b,_,C,O,!0)}},L=(f,p,m,b,_,C,O)=>{if(m!==b){for(const T in b){if(Zn(T))continue;const A=b[T],I=m[T];A!==I&&T!=="value"&&s(f,T,I,A,O,p.children,_,C,R)}if(m!==ie)for(const T in m)!Zn(T)&&!(T in b)&&s(f,T,m[T],null,O,p.children,_,C,R);"value"in b&&s(f,"value",m.value,b.value)}},de=(f,p,m,b,_,C,O,T,A)=>{const I=p.el=f?f.el:a(""),F=p.anchor=f?f.anchor:a("");let{patchFlag:P,dynamicChildren:z,slotScopeIds:B}=p;B&&(T=T?T.concat(B):B),f==null?(r(I,m,b),r(F,m,b),q(p.children,m,F,_,C,O,T,A)):P>0&&P&64&&z&&f.dynamicChildren?(ue(f.dynamicChildren,z,m,_,C,O,T),(p.key!=null||_&&p===_.subTree)&&Ri(f,p,!0)):Se(f,p,m,F,_,C,O,T,A)},Ae=(f,p,m,b,_,C,O,T,A)=>{p.slotScopeIds=T,f==null?p.shapeFlag&512?_.ctx.activate(p,m,b,O,A):Ge(p,m,b,_,C,O,A):he(f,p,A)},Ge=(f,p,m,b,_,C,O)=>{const T=f.component=of(f,b,_);if(pr(f)&&(T.ctx.renderer=ae),lf(T),T.asyncDep){if(_&&_.registerDep(T,oe),!f.el){const A=T.subTree=Ce(je);w(null,A,p,m)}return}oe(T,f,p,m,_,C,O)},he=(f,p,m)=>{const b=p.component=f.component;if(mu(f,p,m))if(b.asyncDep&&!b.asyncResolved){te(b,p,m);return}else b.next=p,gf(b.update),b.update();else p.component=f.component,p.el=f.el,b.vnode=p},oe=(f,p,m,b,_,C,O)=>{const T=()=>{if(f.isMounted){let{next:F,bu:P,u:z,parent:B,vnode:X}=f,fe=F,re;A.allowRecurse=!1,F?(F.el=X.el,te(f,F,O)):F=X,P&&nr(P),(re=F.props&&F.props.onVnodeBeforeUpdate)&&Be(re,B,F,X),A.allowRecurse=!0;const ce=yi(f),De=f.subTree;f.subTree=ce,k(De,ce,d(De.el),D(De),f,_,C),F.el=ce.el,fe===null&&gu(f,ce.el),z&&Ee(z,_),(re=F.props&&F.props.onVnodeUpdated)&&Ee(()=>Be(re,B,F,X),_)}else{let F;const{el:P,props:z}=p,{bm:B,m:X,parent:fe}=f,re=Ii(p);if(A.allowRecurse=!1,B&&nr(B),!re&&(F=z&&z.onVnodeBeforeMount)&&Be(F,fe,p),A.allowRecurse=!0,P&&V){const ce=()=>{f.subTree=yi(f),V(P,f.subTree,f,_,null)};re?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ce()):ce()}else{const ce=f.subTree=yi(f);k(null,ce,m,b,f,_,C),p.el=ce.el}if(X&&Ee(X,_),!re&&(F=z&&z.onVnodeMounted)){const ce=p;Ee(()=>Be(F,fe,ce),_)}p.shapeFlag&256&&f.a&&Ee(f.a,_),f.isMounted=!0,p=m=b=null}},A=new li(T,()=>Qo(f.update),f.scope),I=f.update=A.run.bind(A);I.id=f.uid,A.allowRecurse=I.allowRecurse=!0,I()},te=(f,p,m)=>{p.component=f;const b=f.vnode.props;f.vnode=p,f.next=null,Uu(f,p.props,b,m),$u(f,p.children,m),Kt(),zi(void 0,f.update),At()},Se=(f,p,m,b,_,C,O,T,A=!1)=>{const I=f&&f.children,F=f?f.shapeFlag:0,P=p.children,{patchFlag:z,shapeFlag:B}=p;if(z>0){if(z&128){Je(I,P,m,b,_,C,O,T,A);return}else if(z&256){$t(I,P,m,b,_,C,O,T,A);return}}B&8?(F&16&&R(I,_,C),P!==I&&u(m,P)):F&16?B&16?Je(I,P,m,b,_,C,O,T,A):R(I,_,C,!0):(F&8&&u(m,""),B&16&&q(P,m,b,_,C,O,T,A))},$t=(f,p,m,b,_,C,O,T,A)=>{f=f||Ht,p=p||Ht;const I=f.length,F=p.length,P=Math.min(I,F);let z;for(z=0;z<P;z++){const B=p[z]=A?lt(p[z]):We(p[z]);k(f[z],B,m,null,_,C,O,T,A)}I>F?R(f,_,C,!0,!1,P):q(p,m,b,_,C,O,T,A,P)},Je=(f,p,m,b,_,C,O,T,A)=>{let I=0;const F=p.length;let P=f.length-1,z=F-1;for(;I<=P&&I<=z;){const B=f[I],X=p[I]=A?lt(p[I]):We(p[I]);if(Ot(B,X))k(B,X,m,null,_,C,O,T,A);else break;I++}for(;I<=P&&I<=z;){const B=f[P],X=p[z]=A?lt(p[z]):We(p[z]);if(Ot(B,X))k(B,X,m,null,_,C,O,T,A);else break;P--,z--}if(I>P){if(I<=z){const B=z+1,X=B<F?p[B].el:b;for(;I<=z;)k(null,p[I]=A?lt(p[I]):We(p[I]),m,X,_,C,O,T,A),I++}}else if(I>z)for(;I<=P;)Pe(f[I],_,C,!0),I++;else{const B=I,X=I,fe=new Map;for(I=X;I<=z;I++){const ke=p[I]=A?lt(p[I]):We(p[I]);ke.key!=null&&fe.set(ke.key,I)}let re,ce=0;const De=z-X+1;let Bt=!1,Ns=0;const pn=new Array(De);for(I=0;I<De;I++)pn[I]=0;for(I=B;I<=P;I++){const ke=f[I];if(ce>=De){Pe(ke,_,C,!0);continue}let ze;if(ke.key!=null)ze=fe.get(ke.key);else for(re=X;re<=z;re++)if(pn[re-X]===0&&Ot(ke,p[re])){ze=re;break}ze===void 0?Pe(ke,_,C,!0):(pn[ze-X]=I+1,ze>=Ns?Ns=ze:Bt=!0,k(ke,p[ze],m,null,_,C,O,T,A),ce++)}const xs=Bt?Vu(pn):Ht;for(re=xs.length-1,I=De-1;I>=0;I--){const ke=X+I,ze=p[ke],Ms=ke+1<F?p[ke+1].el:b;pn[I]===0?k(null,ze,m,Ms,_,C,O,T,A):Bt&&(re<0||I!==xs[re]?Fe(ze,m,Ms,2):re--)}}},Fe=(f,p,m,b,_=null)=>{const{el:C,type:O,transition:T,children:A,shapeFlag:I}=f;if(I&6){Fe(f.component.subTree,p,m,b);return}if(I&128){f.suspense.move(p,m,b);return}if(I&64){O.move(f,p,m,ae);return}if(O===He){r(C,p,m);for(let P=0;P<A.length;P++)Fe(A[P],p,m,b);r(f.anchor,p,m);return}if(O===yr){M(f,p,m);return}if(b!==2&&I&1&&T)if(b===0)T.beforeEnter(C),r(C,p,m),Ee(()=>T.enter(C),_);else{const{leave:P,delayLeave:z,afterLeave:B}=T,X=()=>r(C,p,m),fe=()=>{P(C,()=>{X(),B&&B()})};z?z(C,X,fe):fe()}else r(C,p,m)},Pe=(f,p,m,b=!1,_=!1)=>{const{type:C,props:O,ref:T,children:A,dynamicChildren:I,shapeFlag:F,patchFlag:P,dirs:z}=f;if(T!=null&&ki(T,null,m,f,!0),F&256){p.ctx.deactivate(f);return}const B=F&1&&z,X=!Ii(f);let fe;if(X&&(fe=O&&O.onVnodeBeforeUnmount)&&Be(fe,p,f),F&6)x(f.component,m,b);else{if(F&128){f.suspense.unmount(m,b);return}B&&kt(f,null,p,"beforeUnmount"),F&64?f.type.remove(f,p,m,_,ae,b):I&&(C!==He||P>0&&P&64)?R(I,p,m,!1,!0):(C===He&&P&(128|256)||!_&&F&16)&&R(A,p,m),b&&Yr(f)}(X&&(fe=O&&O.onVnodeUnmounted)||B)&&Ee(()=>{fe&&Be(fe,p,f),B&&kt(f,null,p,"unmounted")},m)},Yr=f=>{const{type:p,el:m,anchor:b,transition:_}=f;if(p===He){y(m,b);return}if(p===yr){W(f);return}const C=()=>{i(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:O,delayLeave:T}=_,A=()=>O(m,C);T?T(f.el,C,A):A()}else C()},y=(f,p)=>{let m;for(;f!==p;)m=h(f),i(f),f=m;i(p)},x=(f,p,m)=>{const{bum:b,scope:_,update:C,subTree:O,um:T}=f;b&&nr(b),_.stop(),C&&(C.active=!1,Pe(O,f,p,m)),T&&Ee(T,p),Ee(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},R=(f,p,m,b=!1,_=!1,C=0)=>{for(let O=C;O<f.length;O++)Pe(f[O],p,m,b,_)},D=f=>f.shapeFlag&6?D(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),ne=(f,p,m)=>{f==null?p._vnode&&Pe(p._vnode,null,null,!0):k(p._vnode||null,f,p,null,null,null,m),ta(),p._vnode=f},ae={p:k,um:Pe,m:Fe,r:Yr,mt:Ge,mc:q,pc:Se,pbc:ue,n:D,o:t};let G,V;return e&&([G,V]=e(ae)),{render:ne,hydrate:G,createApp:Hu(ne,G)}}function ki(t,e,n,r,i=!1){if(H(t)){t.forEach((h,v)=>ki(h,e&&(H(e)?e[v]:e),n,r,i));return}if(Ii(r)&&!i)return;const s=r.shapeFlag&4?Li(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ie?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(ge(c)?(u[c]=null,Q(d,c)&&(d[c]=null)):we(c)&&(c.value=null)),ge(l)){const h=()=>{u[l]=o,Q(d,l)&&(d[l]=o)};o?(h.id=-1,Ee(h,n)):h()}else if(we(l)){const h=()=>{l.value=o};o?(h.id=-1,Ee(h,n)):h()}else K(l)&&ct(l,a,12,[o,u])}function Be(t,e,n,r=null){Me(t,e,7,[n,r])}function Ri(t,e,n=!1){const r=t.children,i=e.children;if(H(r)&&H(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=lt(i[s]),a.el=o.el),n||Ri(o,a))}}function Vu(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Ku=t=>t.__isTeleport,In=t=>t&&(t.disabled||t.disabled===""),Fo=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,Oi=(t,e)=>{const n=t&&t.to;return ge(n)?e?e(n):null:n},qu={__isTeleport:!0,process(t,e,n,r,i,s,o,a,l,c){const{mc:u,pc:d,pbc:h,o:{insert:v,querySelector:E,createText:S,createComment:k}}=c,g=In(e.props);let{shapeFlag:w,children:N,dynamicChildren:M}=e;if(t==null){const W=e.el=S(""),j=e.anchor=S("");v(W,n,r),v(j,n,r);const U=e.target=Oi(e.props,E),Y=e.targetAnchor=S("");U&&(v(Y,U),o=o||Fo(U));const q=(ee,ue)=>{w&16&&u(N,ee,ue,i,s,o,a,l)};g?q(n,j):U&&q(U,Y)}else{e.el=t.el;const W=e.anchor=t.anchor,j=e.target=t.target,U=e.targetAnchor=t.targetAnchor,Y=In(t.props),q=Y?n:j,ee=Y?W:U;if(o=o||Fo(j),M?(h(t.dynamicChildren,M,q,i,s,o,a),Ri(t,e,!0)):l||d(t,e,q,ee,i,s,o,a,!1),g)Y||vr(e,n,W,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const ue=e.target=Oi(e.props,E);ue&&vr(e,ue,null,c,0)}else Y&&vr(e,j,U,c,1)}},remove(t,e,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:d,props:h}=t;if(d&&s(u),(o||!In(h))&&(s(c),a&16))for(let v=0;v<l.length;v++){const E=l[v];i(E,e,n,!0,!!E.dynamicChildren)}},move:vr,hydrate:Gu};function vr(t,e,n,{o:{insert:r},m:i},s=2){s===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,d=s===2;if(d&&r(o,e,n),(!d||In(u))&&l&16)for(let h=0;h<c.length;h++)i(c[h],e,n,2);d&&r(a,e,n)}function Gu(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Oi(e.props,l);if(u){const d=u._lpa||u.firstChild;e.shapeFlag&16&&(In(e.props)?(e.anchor=c(o(t),e,a(t),n,r,i,s),e.targetAnchor=d):(e.anchor=o(t),e.targetAnchor=c(d,e,u,n,r,i,s)),u._lpa=e.targetAnchor&&o(e.targetAnchor))}return e.anchor&&o(e.anchor)}const Gg=qu,Si="components";function Jg(t,e){return $o(Si,t,!0,e)||t}const zo=Symbol();function Yg(t){return ge(t)?$o(Si,t,!1)||t:t||zo}function $o(t,e,n=!0,r=!1){const i=Ne||ve;if(i){const s=i.type;if(t===Si){const a=df(s);if(a&&(a===e||a===$e(e)||a===tr($e(e))))return s}const o=Bo(i[t]||s[t],e)||Bo(i.appContext[t],e);return!o&&r?s:o}}function Bo(t,e){return t&&(t[e]||t[$e(e)]||t[tr($e(e))])}const He=Symbol(void 0),Pi=Symbol(void 0),je=Symbol(void 0),yr=Symbol(void 0),En=[];let Rt=null;function Ju(t=!1){En.push(Rt=t?null:[])}function Yu(){En.pop(),Rt=En[En.length-1]||null}let _r=1;function Ho(t){_r+=t}function jo(t){return t.dynamicChildren=_r>0?Rt||Ht:null,Yu(),_r>0&&Rt&&Rt.push(t),t}function Xg(t,e,n,r,i,s){return jo(Vo(t,e,n,r,i,s,!0))}function Xu(t,e,n,r,i){return jo(Ce(t,e,n,r,i,!0))}function Ni(t){return t?t.__v_isVNode===!0:!1}function Ot(t,e){return t.type===e.type&&t.key===e.key}const br="__vInternal",Wo=({key:t})=>t!=null?t:null,wr=({ref:t})=>t!=null?ge(t)||we(t)||K(t)?{i:Ne,r:t}:t:null;function Vo(t,e=null,n=null,r=0,i=null,s=t===He?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wo(e),ref:e&&wr(e),scopeId:po,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(xi(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=ge(n)?8:16),_r>0&&!o&&Rt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Rt.push(l),l}const Ce=Qu;function Qu(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===zo)&&(t=je),Ni(t)){const a=Gt(t,e,!0);return n&&xi(a,n),a}if(hf(t)&&(t=t.__vccOpts),e){e=Zu(e);let{class:a,style:l}=e;a&&!ge(a)&&(e.class=Zr(a)),me(l)&&(oo(l)&&!H(l)&&(l=ye({},l)),e.style=Qr(l))}const o=ge(t)?1:vu(t)?128:Ku(t)?64:me(t)?4:K(t)?2:0;return Vo(t,e,n,r,i,o,s,!0)}function Zu(t){return t?oo(t)||br in t?ye({},t):t:null}function Gt(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?tf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Wo(a),ref:e&&e.ref?n&&i?H(i)?i.concat(wr(e)):[i,wr(e)]:wr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==He?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gt(t.ssContent),ssFallback:t.ssFallback&&Gt(t.ssFallback),el:t.el,anchor:t.anchor}}function ef(t=" ",e=0){return Ce(Pi,null,t,e)}function Qg(t,e){const n=Ce(yr,null,t);return n.staticCount=e,n}function Zg(t="",e=!1){return e?(Ju(),Xu(je,null,t)):Ce(je,null,t)}function We(t){return t==null||typeof t=="boolean"?Ce(je):H(t)?Ce(He,null,t.slice()):typeof t=="object"?lt(t):Ce(Pi,null,String(t))}function lt(t){return t.el===null||t.memo?t:Gt(t)}function xi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&(1|64)){const i=e.default;i&&(i._c&&(i._d=!1),xi(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(br in e)?e._ctx=Ne:i===3&&Ne&&(Ne.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:Ne},n=32):(e=String(e),r&64?(n=16,e=[ef(e)]):n=8);t.children=e,t.shapeFlag|=n}function tf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Zr([e.class,r.class]));else if(i==="style")e.style=Qr([e.style,r.style]);else if(Xn(i)){const s=e[i],o=r[i];s!==o&&!(H(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function ev(t,e,n,r){let i;const s=n&&n[r];if(H(t)||ge(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(me(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const Mi=t=>t?Ko(t)?Li(t)||t.proxy:Mi(t.parent):null,Ir=ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Mi(t.parent),$root:t=>Mi(t.root),$emit:t=>t.emit,$options:t=>Co(t),$forceUpdate:t=>()=>Qo(t.update),$nextTick:t=>Xo.bind(t.proxy),$watch:t=>_f.bind(t)}),nf={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(r!==ie&&Q(r,e))return o[e]=1,r[e];if(i!==ie&&Q(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Q(c,e))return o[e]=3,s[e];if(n!==ie&&Q(n,e))return o[e]=4,n[e];Ei&&(o[e]=0)}}const u=Ir[e];let d,h;if(u)return e==="$attrs"&&Re(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==ie&&Q(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,Q(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;if(i!==ie&&Q(i,e))i[e]=n;else if(r!==ie&&Q(r,e))r[e]=n;else if(Q(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==ie&&Q(t,o)||e!==ie&&Q(e,o)||(a=s[0])&&Q(a,o)||Q(r,o)||Q(Ir,o)||Q(i.config.globalProperties,o)}},rf=Uo();let sf=0;function of(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||rf,s={uid:sf++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,update:null,scope:new Oc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Oo(r,i),emitsOptions:ho(r,i),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=fu.bind(null,s),t.ce&&t.ce(s),s}let ve=null;const af=()=>ve||Ne,Jt=t=>{ve=t,t.scope.on()},St=()=>{ve&&ve.scope.off(),ve=null};function Ko(t){return t.vnode.shapeFlag&4}let Er=!1;function lf(t,e=!1){Er=e;const{props:n,children:r}=t.vnode,i=Ko(t);Du(t,n,i,e),zu(t,r);const s=i?cf(t,e):void 0;return Er=!1,s}function cf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ao(new Proxy(t.ctx,nf));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?ff(t):null;Jt(t),Kt();const s=ct(r,t,0,[t.props,i]);if(At(),St(),zs(s)){if(s.then(St,St),e)return s.then(o=>{qo(t,o,e)}).catch(o=>{Tr(o,t,0)});t.asyncDep=s}else qo(t,s,e)}else Jo(t,e)}function qo(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:me(e)&&(t.setupState=fo(e)),Jo(t,n)}let Go;function Jo(t,e,n){const r=t.type;if(!t.render){if(!e&&Go&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=ye(ye({isCustomElement:s,delimiters:a},o),l);r.render=Go(i,c)}}t.render=r.render||Ue}Jt(t),Kt(),Pu(t),At(),St()}function uf(t){return new Proxy(t.attrs,{get(e,n){return Re(t,"get","$attrs"),e[n]}})}function ff(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=uf(t))},slots:t.slots,emit:t.emit,expose:e}}function Li(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(fo(ao(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ir)return Ir[n](t)}}))}function df(t){return K(t)&&t.displayName||t.name}function hf(t){return K(t)&&"__vccOpts"in t}function ct(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Tr(s,e,n)}return i}function Me(t,e,n,r){if(K(t)){const s=ct(t,e,n,r);return s&&zs(s)&&s.catch(o=>{Tr(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Me(t[s],e,n,r));return i}function Tr(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){ct(l,null,10,[t,o,a]);return}}pf(t,n,i,r)}function pf(t,e,n,r=!0){console.error(t)}let Ar=!1,Di=!1;const Oe=[];let Ze=0;const Tn=[];let An=null,Yt=0;const Cn=[];let ut=null,Xt=0;const Yo=Promise.resolve();let Ui=null,Fi=null;function Xo(t){const e=Ui||Yo;return t?e.then(this?t.bind(this):t):e}function mf(t){let e=Ze+1,n=Oe.length;for(;e<n;){const r=e+n>>>1;kn(Oe[r])<t?e=r+1:n=r}return e}function Qo(t){(!Oe.length||!Oe.includes(t,Ar&&t.allowRecurse?Ze+1:Ze))&&t!==Fi&&(t.id==null?Oe.push(t):Oe.splice(mf(t.id),0,t),Zo())}function Zo(){!Ar&&!Di&&(Di=!0,Ui=Yo.then(na))}function gf(t){const e=Oe.indexOf(t);e>Ze&&Oe.splice(e,1)}function ea(t,e,n,r){H(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Zo()}function vf(t){ea(t,An,Tn,Yt)}function yf(t){ea(t,ut,Cn,Xt)}function zi(t,e=null){if(Tn.length){for(Fi=e,An=[...new Set(Tn)],Tn.length=0,Yt=0;Yt<An.length;Yt++)An[Yt]();An=null,Yt=0,Fi=null,zi(t,e)}}function ta(t){if(Cn.length){const e=[...new Set(Cn)];if(Cn.length=0,ut){ut.push(...e);return}for(ut=e,ut.sort((n,r)=>kn(n)-kn(r)),Xt=0;Xt<ut.length;Xt++)ut[Xt]();ut=null,Xt=0}}const kn=t=>t.id==null?1/0:t.id;function na(t){Di=!1,Ar=!0,zi(t),Oe.sort((n,r)=>kn(n)-kn(r));const e=Ue;try{for(Ze=0;Ze<Oe.length;Ze++){const n=Oe[Ze];n&&n.active!==!1&&ct(n,null,14)}}finally{Ze=0,Oe.length=0,ta(),Ar=!1,Ui=null,(Oe.length||Tn.length||Cn.length)&&na(t)}}function tv(t,e){return $i(t,null,e)}const ra={};function Rn(t,e,n){return $i(t,e,n)}function $i(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=ie){const a=ve;let l,c=!1,u=!1;if(we(t)?(l=()=>t.value,c=!!t._shallow):qt(t)?(l=()=>t,r=!0):H(t)?(u=!0,c=t.some(qt),l=()=>t.map(g=>{if(we(g))return g.value;if(qt(g))return Pt(g);if(K(g))return ct(g,a,2)})):K(t)?e?l=()=>ct(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),Me(t,a,3,[h])}:l=Ue,e&&r){const g=l;l=()=>Pt(g())}let d,h=g=>{d=k.onStop=()=>{ct(g,a,4)}};if(Er)return h=Ue,e?n&&Me(e,a,3,[l(),u?[]:void 0,h]):l(),Ue;let v=u?[]:ra;const E=()=>{if(!!k.active)if(e){const g=k.run();(r||c||(u?g.some((w,N)=>mn(w,v[N])):mn(g,v)))&&(d&&d(),Me(e,a,3,[g,v===ra?void 0:v,h]),v=g)}else k.run()};E.allowRecurse=!!e;let S;i==="sync"?S=E:i==="post"?S=()=>Ee(E,a&&a.suspense):S=()=>{!a||a.isMounted?vf(E):E()};const k=new li(l,S);return e?n?E():v=k.run():i==="post"?Ee(k.run.bind(k),a&&a.suspense):k.run(),()=>{k.stop(),a&&a.scope&&Us(a.scope.effects,k)}}function _f(t,e,n){const r=this.proxy,i=ge(t)?t.includes(".")?ia(r,t):()=>r[t]:t.bind(r,r);let s;K(e)?s=e:(s=e.handler,n=e);const o=ve;Jt(this);const a=$i(i,s.bind(r),n);return o?Jt(o):St(),a}function ia(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Pt(t,e){if(!me(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),we(t))Pt(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)Pt(t[n],e);else if(Fs(t)||jt(t))t.forEach(n=>{Pt(n,e)});else if(Bs(t))for(const n in t)Pt(t[n],e);return t}function On(t,e,n){const r=arguments.length;return r===2?me(e)&&!H(e)?Ni(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ni(n)&&(n=[n]),Ce(t,e,n))}const bf="3.2.24",wf="http://www.w3.org/2000/svg",Qt=typeof document!="undefined"?document:null,sa=new Map,If={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Qt.createElementNS(wf,t):Qt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Qt.createTextNode(t),createComment:t=>Qt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const i=n?n.previousSibling:e.lastChild;let s=sa.get(t);if(!s){const o=Qt.createElement("template");if(o.innerHTML=r?`<svg>${t}</svg>`:t,s=o.content,r){const a=s.firstChild;for(;a.firstChild;)s.appendChild(a.firstChild);s.removeChild(a)}sa.set(t,s)}return e.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ef(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Tf(t,e,n){const r=t.style,i=ge(n);if(n&&!i){for(const s in n)Bi(r,s,n[s]);if(e&&!ge(e))for(const s in e)n[s]==null&&Bi(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const oa=/\s*!important$/;function Bi(t,e,n){if(H(n))n.forEach(r=>Bi(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=Af(t,e);oa.test(n)?t.setProperty(Wt(r),n.replace(oa,""),"important"):t[r]=n}}const aa=["Webkit","Moz","ms"],Hi={};function Af(t,e){const n=Hi[e];if(n)return n;let r=$e(e);if(r!=="filter"&&r in t)return Hi[e]=r;r=tr(r);for(let i=0;i<aa.length;i++){const s=aa[i]+r;if(s in t)return Hi[e]=s}return e}const la="http://www.w3.org/1999/xlink";function Cf(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(la,e.slice(6,e.length)):t.setAttributeNS(la,e,n);else{const s=yc(e);n==null||s&&!Ls(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function kf(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Ls(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let Cr=Date.now,ca=!1;if(typeof window!="undefined"){Cr()>document.createEvent("Event").timeStamp&&(Cr=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);ca=!!(t&&Number(t[1])<=53)}let ji=0;const Rf=Promise.resolve(),Of=()=>{ji=0},Sf=()=>ji||(Rf.then(Of),ji=Cr());function Zt(t,e,n,r){t.addEventListener(e,n,r)}function Pf(t,e,n,r){t.removeEventListener(e,n,r)}function Nf(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=xf(e);if(r){const c=s[e]=Mf(r,i);Zt(t,a,c,l)}else o&&(Pf(t,a,o,l),s[e]=void 0)}}const ua=/(?:Once|Passive|Capture)$/;function xf(t){let e;if(ua.test(t)){e={};let n;for(;n=t.match(ua);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Wt(t.slice(2)),e]}function Mf(t,e){const n=r=>{const i=r.timeStamp||Cr();(ca||i>=n.attached-1)&&Me(Lf(r,n.value),e,5,[r])};return n.value=t,n.attached=Sf(),n}function Lf(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r(i))}else return e}const fa=/^on[a-z]/,Df=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?Ef(t,r,i):e==="style"?Tf(t,n,r):Xn(e)?ei(e)||Nf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Uf(t,e,r,i))?kf(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Cf(t,e,r,i))};function Uf(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&fa.test(e)&&K(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||fa.test(e)&&ge(n)?!1:e in t}const ft="transition",Sn="animation",da=(t,{slots:e})=>On(go,Ff(t),e);da.displayName="Transition";const ha={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};da.props=ye({},go.props,ha);const Nt=(t,e=[])=>{H(t)?t.forEach(n=>n(...e)):t&&t(...e)},pa=t=>t?H(t)?t.some(e=>e.length>1):t.length>1:!1;function Ff(t){const e={};for(const L in t)L in ha||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,E=zf(i),S=E&&E[0],k=E&&E[1],{onBeforeEnter:g,onEnter:w,onEnterCancelled:N,onLeave:M,onLeaveCancelled:W,onBeforeAppear:j=g,onAppear:U=w,onAppearCancelled:Y=N}=e,q=(L,de,Ae)=>{en(L,de?u:a),en(L,de?c:o),Ae&&Ae()},ee=(L,de)=>{en(L,v),en(L,h),de&&de()},ue=L=>(de,Ae)=>{const Ge=L?U:w,he=()=>q(de,L,Ae);Nt(Ge,[de,he]),ma(()=>{en(de,L?l:s),dt(de,L?u:a),pa(Ge)||ga(de,r,S,he)})};return ye(e,{onBeforeEnter(L){Nt(g,[L]),dt(L,s),dt(L,o)},onBeforeAppear(L){Nt(j,[L]),dt(L,l),dt(L,c)},onEnter:ue(!1),onAppear:ue(!0),onLeave(L,de){const Ae=()=>ee(L,de);dt(L,d),Hf(),dt(L,h),ma(()=>{en(L,d),dt(L,v),pa(M)||ga(L,r,k,Ae)}),Nt(M,[L,Ae])},onEnterCancelled(L){q(L,!1),Nt(N,[L])},onAppearCancelled(L){q(L,!0),Nt(Y,[L])},onLeaveCancelled(L){ee(L),Nt(W,[L])}})}function zf(t){if(t==null)return null;if(me(t))return[Wi(t.enter),Wi(t.leave)];{const e=Wi(t);return[e,e]}}function Wi(t){return ir(t)}function dt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function en(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function ma(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let $f=0;function ga(t,e,n,r){const i=t._endId=++$f,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Bf(t,e);if(!o)return r();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),s()},h=v=>{v.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function Bf(t,e){const n=window.getComputedStyle(t),r=E=>(n[E]||"").split(", "),i=r(ft+"Delay"),s=r(ft+"Duration"),o=va(i,s),a=r(Sn+"Delay"),l=r(Sn+"Duration"),c=va(a,l);let u=null,d=0,h=0;e===ft?o>0&&(u=ft,d=o,h=s.length):e===Sn?c>0&&(u=Sn,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?ft:Sn:null,h=u?u===ft?s.length:l.length:0);const v=u===ft&&/\b(transform|all)(,|$)/.test(n[ft+"Property"]);return{type:u,timeout:d,propCount:h,hasTransform:v}}function va(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>ya(n)+ya(t[r])))}function ya(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Hf(){return document.body.offsetHeight}const _a=t=>{const e=t.props["onUpdate:modelValue"];return H(e)?n=>nr(e,n):e};function jf(t){t.target.composing=!0}function ba(t){const e=t.target;e.composing&&(e.composing=!1,Wf(e,"input"))}function Wf(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const nv={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=_a(i);const s=r||i.props&&i.props.type==="number";Zt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():s&&(a=ir(a)),t._assign(a)}),n&&Zt(t,"change",()=>{t.value=t.value.trim()}),e||(Zt(t,"compositionstart",jf),Zt(t,"compositionend",ba),Zt(t,"change",ba))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=_a(s),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&ir(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Vf=["ctrl","shift","alt","meta"],Kf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Vf.some(n=>t[`${n}Key`]&&!e.includes(n))},rv=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=Kf[e[i]];if(s&&s(n,e))return}return t(n,...r)},iv={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Pn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Pn(t,!0),r.enter(t)):r.leave(t,()=>{Pn(t,!1)}):Pn(t,e))},beforeUnmount(t,{value:e}){Pn(t,e)}};function Pn(t,e){t.style.display=e?t._vod:"none"}const qf=ye({patchProp:Df},If);let wa;function Gf(){return wa||(wa=ju(qf))}const sv=(...t)=>{const e=Gf().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Jf(r);if(!i)return;const s=e._component;!K(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Jf(t){return ge(t)?document.querySelector(t):t}/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function Yf(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ia(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Xf(t,e,n){return e&&Ia(t.prototype,e),n&&Ia(t,n),t}function Qf(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function J(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),r.forEach(function(i){Qf(t,i,n[i])})}return t}function Ea(t,e){return td(t)||rd(t,e)||sd()}function Zf(t){return ed(t)||nd(t)||id()}function ed(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function td(t){if(Array.isArray(t))return t}function nd(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function rd(t,e){var n=[],r=!0,i=!1,s=void 0;try{for(var o=t[Symbol.iterator](),a;!(r=(a=o.next()).done)&&(n.push(a.value),!(e&&n.length===e));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&o.return!=null&&o.return()}finally{if(i)throw s}}return n}function id(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function sd(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var Ta=function(){},Vi={},Aa={},od=null,Ca={mark:Ta,measure:Ta};try{typeof window!="undefined"&&(Vi=window),typeof document!="undefined"&&(Aa=document),typeof MutationObserver!="undefined"&&(od=MutationObserver),typeof performance!="undefined"&&(Ca=performance)}catch{}var ad=Vi.navigator||{},ka=ad.userAgent,Ra=ka===void 0?"":ka,kr=Vi,Te=Aa,Rr=Ca;kr.document;var Ki=!!Te.documentElement&&!!Te.head&&typeof Te.addEventListener=="function"&&typeof Te.createElement=="function",ld=~Ra.indexOf("MSIE")||~Ra.indexOf("Trident/"),et="___FONT_AWESOME___",qi=16,Oa="fa",Sa="svg-inline--fa",Pa="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var Gi={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Na=kr.FontAwesomeConfig||{};function cd(t){var e=Te.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ud(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Te&&typeof Te.querySelector=="function"){var fd=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];fd.forEach(function(t){var e=Ea(t,2),n=e[0],r=e[1],i=ud(cd(n));i!=null&&(Na[r]=i)})}var dd={familyPrefix:Oa,replacementClass:Sa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Ji=J({},dd,Na);Ji.autoReplaceSvg||(Ji.observeMutations=!1);var _e=J({},Ji);kr.FontAwesomeConfig=_e;var tt=kr||{};tt[et]||(tt[et]={});tt[et].styles||(tt[et].styles={});tt[et].hooks||(tt[et].hooks={});tt[et].shims||(tt[et].shims=[]);var Ve=tt[et],hd=[],pd=function t(){Te.removeEventListener("DOMContentLoaded",t),Yi=1,hd.map(function(e){return e()})},Yi=!1;Ki&&(Yi=(Te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Te.readyState),Yi||Te.addEventListener("DOMContentLoaded",pd));typeof global!="undefined"&&typeof global.process!="undefined"&&global.process.emit;var ht=qi,pt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function md(t){if(!(!t||!Ki)){var e=Te.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Te.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Te.head.insertBefore(e,r),t}}var gd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Or(){for(var t=12,e="";t-- >0;)e+=gd[Math.random()*62|0];return e}function xa(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function vd(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(xa(t[n]),'" ')},"").trim()}function Xi(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n],";")},"")}function Qi(t){return t.size!==pt.size||t.x!==pt.x||t.y!==pt.y||t.rotate!==pt.rotate||t.flipX||t.flipY}function Ma(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function yd(t){var e=t.transform,n=t.width,r=n===void 0?qi:n,i=t.height,s=i===void 0?qi:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&ld?l+="translate(".concat(e.x/ht-r/2,"em, ").concat(e.y/ht-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/ht,"em), calc(-50% + ").concat(e.y/ht,"em)) "):l+="translate(".concat(e.x/ht,"em, ").concat(e.y/ht,"em) "),l+="scale(".concat(e.size/ht*(e.flipX?-1:1),", ").concat(e.size/ht*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Zi={x:0,y:0,width:"100%",height:"100%"};function La(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function _d(t){return t.tag==="g"?t.children:[t]}function bd(t){var e=t.children,n=t.attributes,r=t.main,i=t.mask,s=t.maskId,o=t.transform,a=r.width,l=r.icon,c=i.width,u=i.icon,d=Ma({transform:o,containerWidth:c,iconWidth:a}),h={tag:"rect",attributes:J({},Zi,{fill:"white"})},v=l.children?{children:l.children.map(La)}:{},E={tag:"g",attributes:J({},d.inner),children:[La(J({tag:l.tag,attributes:J({},l.attributes,d.path)},v))]},S={tag:"g",attributes:J({},d.outer),children:[E]},k="mask-".concat(s||Or()),g="clip-".concat(s||Or()),w={tag:"mask",attributes:J({},Zi,{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,S]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:_d(u)},w]};return e.push(N,{tag:"rect",attributes:J({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(k,")")},Zi)}),{children:e,attributes:n}}function wd(t){var e=t.children,n=t.attributes,r=t.main,i=t.transform,s=t.styles,o=Xi(s);if(o.length>0&&(n.style=o),Qi(i)){var a=Ma({transform:i,containerWidth:r.width,iconWidth:r.width});e.push({tag:"g",attributes:J({},a.outer),children:[{tag:"g",attributes:J({},a.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:J({},r.icon.attributes,a.path)}]}]})}else e.push(r.icon);return{children:e,attributes:n}}function Id(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Qi(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=Xi(J({},s,{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function Ed(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(_e.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:J({},i,{id:o}),children:r}]}]}function Td(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,d=t.extra,h=t.watchable,v=h===void 0?!1:h,E=r.found?r:n,S=E.width,k=E.height,g=i==="fak",w=g?"":"fa-w-".concat(Math.ceil(S/k*16)),N=[_e.replacementClass,s?"".concat(_e.familyPrefix,"-").concat(s):"",w].filter(function(ee){return d.classes.indexOf(ee)===-1}).filter(function(ee){return ee!==""||!!ee}).concat(d.classes).join(" "),M={children:[],attributes:J({},d.attributes,{"data-prefix":i,"data-icon":s,class:N,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(k)})},W=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/k*16*.0625,"em")}:{};v&&(M.attributes[Pa]=""),l&&M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(u||Or())},children:[l]});var j=J({},M,{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:J({},W,d.styles)}),U=r.found&&n.found?bd(j):wd(j),Y=U.children,q=U.attributes;return j.children=Y,j.attributes=q,a?Ed(j):Id(j)}function Ad(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=J({},o.attributes,s?{title:s}:{},{class:o.classes.join(" ")});l&&(c[Pa]="");var u=J({},o.styles);Qi(i)&&(u.transform=yd({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var d=Xi(u);d.length>0&&(c.style=d);var h=[];return h.push({tag:"span",attributes:c,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}var Da=function(){};_e.measurePerformance&&Rr&&Rr.mark&&Rr.measure;var Cd=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},es=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?Cd(n,i):n,l,c,u;for(r===void 0?(l=1,u=e[s[0]]):(l=0,u=r);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function Ua(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Object.keys(e).reduce(function(o,a){var l=e[a],c=!!l.icon;return c?o[l.iconName]=l.icon:o[a]=l,o},{});typeof Ve.hooks.addPack=="function"&&!i?Ve.hooks.addPack(t,s):Ve.styles[t]=J({},Ve.styles[t]||{},s),t==="fas"&&Ua("fa",e)}var Fa=Ve.styles,kd=Ve.shims,za=function(){var e=function(i){return es(Fa,function(s,o,a){return s[a]=es(o,i,{}),s},{})};e(function(r,i,s){return i[3]&&(r[i[3]]=s),r}),e(function(r,i,s){var o=i[2];return r[s]=s,o.forEach(function(a){r[a]=s}),r});var n="far"in Fa;es(kd,function(r,i){var s=i[0],o=i[1],a=i[2];return o==="far"&&!n&&(o="fas"),r[s]={prefix:o,iconName:a},r},{})};za();Ve.styles;function $a(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function Ba(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?xa(t):"<".concat(e," ").concat(vd(r),">").concat(s.map(Ba).join(""),"</").concat(e,">")}var Rd=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n):n};function ts(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=new Error().stack}ts.prototype=Object.create(Error.prototype);ts.prototype.constructor=ts;var Sr={fill:"currentColor"},Ha={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};J({},Sr,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var ns=J({},Ha,{attributeName:"opacity"});J({},Sr,{cx:"256",cy:"364",r:"28"}),J({},Ha,{attributeName:"r",values:"28;14;28;28;14;28;"}),J({},ns,{values:"1;0;1;1;0;1;"});J({},Sr,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),J({},ns,{values:"1;0;0;0;0;1;"});J({},Sr,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),J({},ns,{values:"0;0;1;1;0;0;"});Ve.styles;function ja(t){var e=t[0],n=t[1],r=t.slice(4),i=Ea(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(_e.familyPrefix,"-").concat(Gi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_e.familyPrefix,"-").concat(Gi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(_e.familyPrefix,"-").concat(Gi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}Ve.styles;var Od=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function Sd(){var t=Oa,e=Sa,n=_e.familyPrefix,r=_e.replacementClass,i=Od;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Pd=function(){function t(){Yf(this,t),this.definitions={}}return Xf(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=J({},n.definitions[a]||{},o[a]),Ua(a,o[a]),za()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,c=o.icon;n[a]||(n[a]={}),n[a][l]=c}),n}}]),t}();function Wa(){_e.autoAddCss&&!qa&&(md(Sd()),qa=!0)}function Va(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Ba(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Ki){var r=Te.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Ka(t){var e=t.prefix,n=e===void 0?"fa":e,r=t.iconName;if(!!r)return $a(xd.definitions,n,r)||$a(Ve.styles,n,r)}function Nd(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Ka(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Ka(i||{})),t(r,J({},n,{mask:i}))}}var xd=new Pd,qa=!1,Ga={transform:function(e){return Rd(e)}},Md=Nd(function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,r=n===void 0?pt:n,i=e.symbol,s=i===void 0?!1:i,o=e.mask,a=o===void 0?null:o,l=e.maskId,c=l===void 0?null:l,u=e.title,d=u===void 0?null:u,h=e.titleId,v=h===void 0?null:h,E=e.classes,S=E===void 0?[]:E,k=e.attributes,g=k===void 0?{}:k,w=e.styles,N=w===void 0?{}:w;if(!!t){var M=t.prefix,W=t.iconName,j=t.icon;return Va(J({type:"icon"},t),function(){return Wa(),_e.autoA11y&&(d?g["aria-labelledby"]="".concat(_e.replacementClass,"-title-").concat(v||Or()):(g["aria-hidden"]="true",g.focusable="false")),Td({icons:{main:ja(j),mask:a?ja(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:W,transform:J({},pt,r),symbol:s,title:d,maskId:c,titleId:v,extra:{attributes:g,styles:N,classes:S}})})}}),Ld=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?pt:r,s=n.title,o=s===void 0?null:s,a=n.classes,l=a===void 0?[]:a,c=n.attributes,u=c===void 0?{}:c,d=n.styles,h=d===void 0?{}:d;return Va({type:"text",content:e},function(){return Wa(),Ad({content:e,transform:J({},pt,i),title:o,extra:{attributes:u,styles:h,classes:["".concat(_e.familyPrefix,"-layers-text")].concat(Zf(l))}})})},Dd=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Ud(t,e){return e={exports:{}},t(e,e.exports),e.exports}var Fd=Ud(function(t){(function(e){var n=function(g,w,N){if(!c(w)||d(w)||h(w)||v(w)||l(w))return w;var M,W=0,j=0;if(u(w))for(M=[],j=w.length;W<j;W++)M.push(n(g,w[W],N));else{M={};for(var U in w)Object.prototype.hasOwnProperty.call(w,U)&&(M[g(U,N)]=n(g,w[U],N))}return M},r=function(g,w){w=w||{};var N=w.separator||"_",M=w.split||/(?=[A-Z])/;return g.split(M).join(N)},i=function(g){return E(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(w,N){return N?N.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},s=function(g){var w=i(g);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(g,w){return r(g,w).toLowerCase()},a=Object.prototype.toString,l=function(g){return typeof g=="function"},c=function(g){return g===Object(g)},u=function(g){return a.call(g)=="[object Array]"},d=function(g){return a.call(g)=="[object Date]"},h=function(g){return a.call(g)=="[object RegExp]"},v=function(g){return a.call(g)=="[object Boolean]"},E=function(g){return g=g-0,g===g},S=function(g,w){var N=w&&"process"in w?w.process:w;return typeof N!="function"?g:function(M,W){return N(M,g,W)}},k={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(g,w){return n(S(i,w),g)},decamelizeKeys:function(g,w){return n(S(o,w),g,w)},pascalizeKeys:function(g,w){return n(S(s,w),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=k:e.humps=k})(Dd)}),zd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nn=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},Pr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$d=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(t,r)||(n[r]=t[r]);return n},rs=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}else return Array.from(t)};function Bd(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Fd.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function Hd(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function is(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return is(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=Hd(u);break;case"style":l.style=Bd(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=$d(n,["class","style"]);return On(t.tag,Pr({},e,{class:i.class,style:Pr({},i.style,o)},i.attrs,a),r)}var Ja=!1;try{Ja=!0}catch{}function jd(){if(!Ja&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function xn(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Nn({},t,e):{}}function Wd(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Nn(e,"fa-"+t.size,t.size!==null),Nn(e,"fa-rotate-"+t.rotation,t.rotation!==null),Nn(e,"fa-pull-"+t.pull,t.pull!==null),Nn(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ya(t){if(t===null)return null;if((typeof t=="undefined"?"undefined":zd(t))==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var ov=wn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(e){return["horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=pe(function(){return Ya(e.icon)}),s=pe(function(){return xn("classes",Wd(e))}),o=pe(function(){return xn("transform",typeof e.transform=="string"?Ga.transform(e.transform):e.transform)}),a=pe(function(){return xn("mask",Ya(e.mask))}),l=pe(function(){return Md(i.value,Pr({},s.value,o.value,a.value,{symbol:e.symbol,title:e.title}))});Rn(l,function(u){if(!u)return jd("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var c=pe(function(){return l.value?is(l.value.abstract[0],{},r):null});return function(){return c.value}}});wn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=_e.familyPrefix,s=pe(function(){return[i+"-layers"].concat(rs(e.fixedWidth?[i+"-fw"]:[]))});return function(){return On("div",{class:s.value},r.default?r.default():[])}}});wn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=_e.familyPrefix,s=pe(function(){return xn("classes",[].concat(rs(e.counter?[i+"-layers-counter"]:[]),rs(e.position?[i+"-layers-"+e.position]:[])))}),o=pe(function(){return xn("transform",typeof e.transform=="string"?Ga.transform(e.transform):e.transform)}),a=pe(function(){var c=Ld(e.value.toString(),Pr({},o.value,s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=pe(function(){return is(a.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var av={prefix:"fas",iconName:"bars",icon:[448,512,[],"f0c9","M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"]},lv={prefix:"fas",iconName:"envelope",icon:[512,512,[],"f0e0","M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"]},cv={prefix:"fas",iconName:"info-circle",icon:[512,512,[],"f05a","M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"]},uv={prefix:"fas",iconName:"key",icon:[512,512,[],"f084","M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"]},fv={prefix:"fas",iconName:"sign-in-alt",icon:[512,512,[],"f2f6","M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"]},dv={prefix:"fas",iconName:"sign-out-alt",icon:[512,512,[],"f2f5","M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"]},hv={prefix:"fas",iconName:"user-circle",icon:[496,512,[],"f2bd","M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"]},pv={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"]};/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var mv={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]};/**
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
 *//**
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
 */const Vd=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Kd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},qd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(h=64)),r.push(n[u],n[d],n[h],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Kd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw Error();const h=s<<2|a>>4;if(r.push(h),c!==64){const v=a<<4&240|c>>2;if(r.push(v),d!==64){const E=c<<6&192|d;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Gd=function(t){try{return qd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Jd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function be(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yd(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function Xd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Qd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zd(){const t=be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}/**
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
 */const eh="FirebaseError";class tn extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=eh,Object.setPrototypeOf(this,tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mn.prototype.create)}}class Mn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?th(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new tn(i,a,r)}}function th(t,e){return t.replace(nh,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const nh=/\{\$([^}]+)}/g;function rh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Xa(s)&&Xa(o)){if(!Nr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xa(t){return t!==null&&typeof t=="object"}/**
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
 */function Ln(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Dn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Un(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ih(t,e){const n=new sh(t,e);return n.subscribe.bind(n)}class sh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");oh(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ss),i.error===void 0&&(i.error=ss),i.complete===void 0&&(i.complete=ss);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ss(){}/**
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
 */function nt(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xt="[DEFAULT]";/**
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
 */class ah{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Jd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ch(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lh(t){return t===xt?void 0:t}function ch(t){return t.instantiationMode==="EAGER"}/**
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
 */class uh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ah(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const fh={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},dh=le.INFO,hh={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},ph=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=hh[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qa{constructor(e){this.name=e,this._logLevel=dh,this._logHandler=ph,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}/**
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
 */class mh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const os="@firebase/app",Za="0.7.11";/**
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
 */const as=new Qa("@firebase/app"),vh="@firebase/app-compat",yh="@firebase/analytics-compat",_h="@firebase/analytics",bh="@firebase/app-check-compat",wh="@firebase/app-check",Ih="@firebase/auth",Eh="@firebase/auth-compat",Th="@firebase/database",Ah="@firebase/database-compat",Ch="@firebase/functions",kh="@firebase/functions-compat",Rh="@firebase/installations",Oh="@firebase/installations-compat",Sh="@firebase/messaging",Ph="@firebase/messaging-compat",Nh="@firebase/performance",xh="@firebase/performance-compat",Mh="@firebase/remote-config",Lh="@firebase/remote-config-compat",Dh="@firebase/storage",Uh="@firebase/storage-compat",Fh="@firebase/firestore",zh="@firebase/firestore-compat",$h="firebase",Bh="9.6.1";/**
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
 */const el="[DEFAULT]",Hh={[os]:"fire-core",[vh]:"fire-core-compat",[_h]:"fire-analytics",[yh]:"fire-analytics-compat",[wh]:"fire-app-check",[bh]:"fire-app-check-compat",[Ih]:"fire-auth",[Eh]:"fire-auth-compat",[Th]:"fire-rtdb",[Ah]:"fire-rtdb-compat",[Ch]:"fire-fn",[kh]:"fire-fn-compat",[Rh]:"fire-iid",[Oh]:"fire-iid-compat",[Sh]:"fire-fcm",[Ph]:"fire-fcm-compat",[Nh]:"fire-perf",[xh]:"fire-perf-compat",[Mh]:"fire-rc",[Lh]:"fire-rc-compat",[Dh]:"fire-gcs",[Uh]:"fire-gcs-compat",[Fh]:"fire-fst",[zh]:"fire-fst-compat","fire-js":"fire-js",[$h]:"fire-js-all"};/**
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
 */const xr=new Map,ls=new Map;function jh(t,e){try{t.container.addComponent(e)}catch(n){as.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mr(t){const e=t.name;if(ls.has(e))return as.debug(`There were multiple attempts to register component ${e}.`),!1;ls.set(e,t);for(const n of xr.values())jh(n,t);return!0}function tl(t,e){return t.container.getProvider(e)}/**
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
 */const Wh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Lr=new Mn("app","Firebase",Wh);/**
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
 */class Vh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lr.create("app-deleted",{appName:this._name})}}/**
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
 */const Dr=Bh;function gv(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:el,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Lr.create("bad-app-name",{appName:String(r)});const i=xr.get(r);if(i){if(Nr(t,i.options)&&Nr(n,i.config))return i;throw Lr.create("duplicate-app",{appName:r})}const s=new uh(r);for(const a of ls.values())s.addComponent(a);const o=new Vh(t,n,s);return xr.set(r,o),o}function Kh(t=el){const e=xr.get(t);if(!e)throw Lr.create("no-app",{appName:t});return e}function nn(t,e,n){var r;let i=(r=Hh[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),as.warn(a.join(" "));return}Mr(new Fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */function qh(t){Mr(new Fn("platform-logger",e=>new mh(e),"PRIVATE")),nn(os,Za,t),nn(os,Za,"esm2017"),nn("fire-js","")}qh("");var Gh="firebase",Jh="9.6.1";/**
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
 */nn(Gh,Jh,"app");/*! *****************************************************************************
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
***************************************************************************** */function cs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function nl(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yh=nl,rl=new Mn("auth","Firebase",nl());/**
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
 */const il=new Qa("@firebase/auth");function Ur(t,...e){il.logLevel<=le.ERROR&&il.error(`Auth (${Dr}): ${t}`,...e)}/**
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
 */function Le(t,...e){throw us(t,...e)}function Ke(t,...e){return us(t,...e)}function sl(t,e,n){const r=Object.assign(Object.assign({},Yh()),{[e]:n});return new Mn("auth","Firebase",r).create(e,{appName:t.name})}function Xh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Le(t,"argument-error"),sl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function us(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rl.create(t,...e)}function $(t,e,...n){if(!t)throw us(e,...n)}function rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ur(e),new Error(e)}function it(t,e){t||rt(e)}/**
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
 */const ol=new Map;function st(t){it(t instanceof Function,"Expected a class definition");let e=ol.get(t);return e?(it(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ol.set(t,e),e)}/**
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
 */function Qh(t,e){const n=tl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Nr(s,e!=null?e:{}))return i;Le(i,"already-initialized")}return n.initialize({options:e})}function Zh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(st);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function fs(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ep(){return al()==="http:"||al()==="https:"}function al(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function tp(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ep()||Xd()||"connection"in navigator)?navigator.onLine:!0}function np(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class zn{constructor(e,n){this.shortDelay=e,this.longDelay=n,it(n>e,"Short delay should be less than long delay!"),this.isMobile=Yd()||Qd()}get(){return tp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ds(t,e){it(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ll{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const ip=new zn(3e4,6e4);function rn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mt(t,e,n,r,i={}){return cl(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ln(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ll.fetch()(ul(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function cl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rp),e);try{const i=new sp(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hs(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hs(t,"email-already-in-use",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw sl(t,u,c);Le(t,u)}}catch(i){if(i instanceof tn)throw i;Le(t,"network-request-failed")}}async function $n(t,e,n,r,i={}){const s=await Mt(t,e,n,r,i);return"mfaPendingCredential"in s&&Le(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ul(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ds(t.config,i):`${t.config.apiScheme}://${i}`}class sp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"timeout")),ip.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ke(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function op(t,e){return Mt(t,"POST","/v1/accounts:delete",e)}async function ap(t,e){return Mt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lp(t,e=!1){const n=nt(t),r=await n.getIdToken(e),i=ms(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Bn(ps(i.auth_time)),issuedAtTime:Bn(ps(i.iat)),expirationTime:Bn(ps(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ps(t){return Number(t)*1e3}function ms(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ur("JWT malformed, contained fewer than 3 sections"),null;try{const i=Gd(n);return i?JSON.parse(i):(Ur("Failed to decode base64 JWT payload"),null)}catch(i){return Ur("Caught error parsing JWT payload as JSON",i),null}}function cp(t){const e=ms(t);return $(e,"internal-error"),$(typeof e.exp!="undefined","internal-error"),$(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function sn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tn&&up(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function up({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class fp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bn(this.lastLoginAt),this.creationTime=Bn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fr(t){var e;const n=t.auth,r=await t.getIdToken(),i=await sn(t,ap(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?pp(s.providerUserInfo):[],a=hp(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new fl(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function dp(t){const e=nt(t);await Fr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hp(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function pp(t){return t.map(e=>{var{providerId:n}=e,r=cs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function mp(t,e){const n=await cl(t,{},async()=>{const r=Ln({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ul(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ll.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Hn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken!="undefined","internal-error"),$(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):cp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await mp(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Hn;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hn,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
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
 */function mt(t,e){$(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Lt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=cs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new fp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new fl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await sn(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lp(this,e)}reload(){return dp(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Lt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await sn(this,op(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:M,isAnonymous:W,providerData:j,stsTokenManager:U}=n;$(N&&U,e,"internal-error");const Y=Hn.fromJSON(this.name,U);$(typeof N=="string",e,"internal-error"),mt(d,e.name),mt(h,e.name),$(typeof M=="boolean",e,"internal-error"),$(typeof W=="boolean",e,"internal-error"),mt(v,e.name),mt(E,e.name),mt(S,e.name),mt(k,e.name),mt(g,e.name),mt(w,e.name);const q=new Lt({uid:N,auth:e,email:h,emailVerified:M,displayName:d,isAnonymous:W,photoURL:E,phoneNumber:v,tenantId:S,stsTokenManager:Y,createdAt:g,lastLoginAt:w});return j&&Array.isArray(j)&&(q.providerData=j.map(ee=>Object.assign({},ee))),k&&(q._redirectEventId=k),q}static async _fromIdTokenResponse(e,n,r=!1){const i=new Hn;i.updateFromServerResponse(n);const s=new Lt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fr(s),s}}/**
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
 */class dl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dl.type="NONE";const hl=dl;/**
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
 */function zr(t,e,n){return`firebase:${t}:${e}:${n}`}class on{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zr(this.userKey,i.apiKey,s),this.fullPersistenceKey=zr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new on(st(hl),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||st(hl);const o=zr(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Lt._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new on(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new on(s,e,r))}}/**
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
 */function pl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ml(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_l(e))return"Blackberry";if(bl(e))return"Webos";if(gs(e))return"Safari";if((e.includes("chrome/")||gl(e))&&!e.includes("edge/"))return"Chrome";if(yl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ml(t=be()){return/firefox\//i.test(t)}function gs(t=be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gl(t=be()){return/crios\//i.test(t)}function vl(t=be()){return/iemobile/i.test(t)}function yl(t=be()){return/android/i.test(t)}function _l(t=be()){return/blackberry/i.test(t)}function bl(t=be()){return/webos/i.test(t)}function $r(t=be()){return/iphone|ipad|ipod/i.test(t)}function gp(t=be()){var e;return $r(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function vp(){return Zd()&&document.documentMode===10}function wl(t=be()){return $r(t)||yl(t)||bl(t)||_l(t)||/windows phone/i.test(t)||vl(t)}function yp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Il(t,e=[]){let n;switch(t){case"Browser":n=pl(be());break;case"Worker":n=`${pl(be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Dr}/${r}`}/**
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
 */class _p{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new El(this),this.idTokenSubscription=new El(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await on.create(this,e),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?($(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fr(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=np()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?nt(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(st(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&st(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await on.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Il(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function jn(t){return nt(t)}class El{constructor(e){this.auth=e,this.observer=null,this.addObserver=ih(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class vs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rt("not implemented")}_getIdTokenResponse(e){return rt("not implemented")}_linkToIdToken(e,n){return rt("not implemented")}_getReauthenticationResolver(e){return rt("not implemented")}}async function bp(t,e){return Mt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function wp(t,e){return $n(t,"POST","/v1/accounts:signInWithPassword",rn(t,e))}async function Ip(t,e){return Mt(t,"POST","/v1/accounts:sendOobCode",rn(t,e))}async function Ep(t,e){return Ip(t,e)}/**
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
 */async function Tp(t,e){return $n(t,"POST","/v1/accounts:signInWithEmailLink",rn(t,e))}async function Ap(t,e){return $n(t,"POST","/v1/accounts:signInWithEmailLink",rn(t,e))}/**
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
 */class Wn extends vs{constructor(e,n,r,i=null){super("password",r);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Wn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return wp(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Tp(e,{email:this._email,oobCode:this._password});default:Le(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return bp(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ap(e,{idToken:n,email:this._email,oobCode:this._password});default:Le(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function an(t,e){return $n(t,"POST","/v1/accounts:signInWithIdp",rn(t,e))}/**
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
 */const Cp="http://localhost";class Dt extends vs{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Dt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Le("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=cs(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Dt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return an(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,an(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,an(e,n)}buildRequest(){const e={requestUri:Cp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ln(n)}return e}}/**
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
 */function kp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Rp(t){const e=Dn(Un(t)).link,n=e?Dn(Un(e)).deep_link_id:null,r=Dn(Un(t)).deep_link_id;return(r?Dn(Un(r)).link:null)||r||n||e||t}class ys{constructor(e){var n,r,i,s,o,a;const l=Dn(Un(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,d=kp((i=l.mode)!==null&&i!==void 0?i:null);$(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Rp(e);try{return new ys(n)}catch{return null}}}/**
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
 */class ln{constructor(){this.providerId=ln.PROVIDER_ID}static credential(e,n){return Wn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ys.parseLink(n);return $(r,"argument-error"),Wn._fromEmailAndCode(e,r.code,r.tenantId)}}ln.PROVIDER_ID="password";ln.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ln.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class _s{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vn extends _s{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gt extends Vn{constructor(){super("facebook.com")}static credential(e){return Dt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";gt.PROVIDER_ID="facebook.com";/**
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
 */class vt extends Vn{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Dt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vt.credential(n,r)}catch{return null}}}vt.GOOGLE_SIGN_IN_METHOD="google.com";vt.PROVIDER_ID="google.com";/**
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
 */class yt extends Vn{constructor(){super("github.com")}static credential(e){return Dt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com";yt.PROVIDER_ID="github.com";/**
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
 */class _t extends Vn{constructor(){super("twitter.com")}static credential(e,n){return Dt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _t.credential(n,r)}catch{return null}}}_t.TWITTER_SIGN_IN_METHOD="twitter.com";_t.PROVIDER_ID="twitter.com";/**
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
 */async function Op(t,e){return $n(t,"POST","/v1/accounts:signUp",rn(t,e))}/**
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
 */class Ut{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Lt._fromIdTokenResponse(e,r,i),o=Tl(r);return new Ut({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Tl(r);return new Ut({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Tl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Br extends tn{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,Br.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Br(e,n,r,i)}}function Al(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Br._fromErrorAndOperation(t,s,e,r):s})}async function Sp(t,e,n=!1){const r=await sn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ut._forOperation(t,"link",r)}/**
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
 */async function Pp(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await sn(t,Al(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=ms(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),Ut._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Le(r,"user-mismatch"),s}}/**
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
 */async function Cl(t,e,n=!1){const r="signIn",i=await Al(t,r,e),s=await Ut._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Np(t,e){return Cl(jn(t),e)}/**
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
 */function xp(t,e,n){var r;$(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),$(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&($(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&($(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function vv(t,e,n){const r=nt(t),i={requestType:"PASSWORD_RESET",email:e};n&&xp(r,i,n),await Ep(r,i)}async function yv(t,e,n){const r=jn(t),i=await Op(r,{returnSecureToken:!0,email:e,password:n}),s=await Ut._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function _v(t,e,n){return Np(nt(t),ln.credential(e,n))}/**
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
 */async function Mp(t,e){return Mt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function bv(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=nt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await sn(r,Mp(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function wv(t,e,n,r){return nt(t).onAuthStateChanged(e,n,r)}function Iv(t){return nt(t).signOut()}const Hr="__sak";/**
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
 */class kl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hr,"1"),this.storage.removeItem(Hr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Lp(){const t=be();return gs(t)||$r(t)}const Dp=1e3,Up=10;class Rl extends kl{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Lp()&&yp(),this.fallbackToPolling=wl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);vp()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Up):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Dp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rl.type="LOCAL";const Fp=Rl;/**
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
 */class Ol extends kl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ol.type="SESSION";const Sl=Ol;/**
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
 */function zp(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class jr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new jr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await zp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jr.receivers=[];/**
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
 */function bs(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class $p{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=bs("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qe(){return window}function Bp(t){qe().location.href=t}/**
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
 */function Pl(){return typeof qe().WorkerGlobalScope!="undefined"&&typeof qe().importScripts=="function"}async function Hp(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Wp(){return Pl()?self:null}/**
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
 */const Nl="firebaseLocalStorageDb",Vp=1,Wr="firebaseLocalStorage",xl="fbase_key";class Kn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vr(t,e){return t.transaction([Wr],e?"readwrite":"readonly").objectStore(Wr)}function Kp(){const t=indexedDB.deleteDatabase(Nl);return new Kn(t).toPromise()}function ws(){const t=indexedDB.open(Nl,Vp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wr,{keyPath:xl})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wr)?e(r):(r.close(),await Kp(),e(await ws()))})})}async function Ml(t,e,n){const r=Vr(t,!0).put({[xl]:e,value:n});return new Kn(r).toPromise()}async function qp(t,e){const n=Vr(t,!1).get(e),r=await new Kn(n).toPromise();return r===void 0?null:r.value}function Ll(t,e){const n=Vr(t,!0).delete(e);return new Kn(n).toPromise()}const Gp=800,Jp=3;class Dl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ws(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Jp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jr._getInstance(Wp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Hp(),!this.activeServiceWorker)return;this.sender=new $p(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ws();return await Ml(e,Hr,"1"),await Ll(e,Hr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ml(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ll(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vr(i,!1).getAll();return new Kn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dl.type="LOCAL";const Yp=Dl;/**
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
 */function Xp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Qp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ke("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Xp().appendChild(r)})}function Zp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new zn(3e4,6e4);/**
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
 */function Ul(t,e){return e?st(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Is extends vs{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return an(e,this._buildIdpRequest())}_linkToIdToken(e,n){return an(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return an(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function em(t){return Cl(t.auth,new Is(t),t.bypassAuthState)}function tm(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Pp(n,new Is(t),t.bypassAuthState)}async function nm(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Sp(n,new Is(t),t.bypassAuthState)}/**
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
 */class Fl{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return em;case"linkViaPopup":case"linkViaRedirect":return nm;case"reauthViaPopup":case"reauthViaRedirect":return tm;default:Le(this.auth,"internal-error")}}resolve(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rm=new zn(2e3,1e4);async function Ev(t,e,n){const r=jn(t);Xh(t,e,_s);const i=Ul(r,n);return new Ft(r,"signInViaPopup",e,i).executeNotNull()}class Ft extends Fl{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,Ft.currentPopupAction&&Ft.currentPopupAction.cancel(),Ft.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){it(this.filter.length===1,"Popup operations only handle one event");const e=bs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ft.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,rm.get())};e()}}Ft.currentPopupAction=null;/**
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
 */const im="pendingRedirect",Es=new Map;class sm extends Fl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Es.get(this.auth._key());if(!e){try{const r=await om(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Es.set(this.auth._key(),e)}return this.bypassAuthState||Es.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function om(t,e){const n=lm(e),r=am(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function am(t){return st(t._redirectPersistence)}function lm(t){return zr(im,t.config.apiKey,t.name)}async function cm(t,e,n=!1){const r=jn(t),i=Ul(r,e),o=await new sm(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const um=10*60*1e3;class fm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$l(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ke(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=um&&this.cachedEventUids.clear(),this.cachedEventUids.has(zl(e))}saveEventToCache(e){this.cachedEventUids.add(zl(e)),this.lastProcessedEventTime=Date.now()}}function zl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $l({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $l(t);default:return!1}}/**
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
 */async function hm(t,e={}){return Mt(t,"GET","/v1/projects",e)}/**
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
 */const pm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mm=/^https?/;async function gm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hm(t);for(const n of e)try{if(vm(n))return}catch{}Le(t,"unauthorized-domain")}function vm(t){const e=fs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!mm.test(n))return!1;if(pm.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ym=new zn(3e4,6e4);function Bl(){const t=qe().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _m(t){return new Promise((e,n)=>{var r,i,s;function o(){Bl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bl(),n(Ke(t,"network-request-failed"))},timeout:ym.get()})}if((i=(r=qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=qe().gapi)===null||s===void 0?void 0:s.load)o();else{const a=Zp("iframefcb");return qe()[a]=()=>{gapi.load?o():n(Ke(t,"network-request-failed"))},Qp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Kr=null,e})}let Kr=null;function bm(t){return Kr=Kr||_m(t),Kr}/**
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
 */const wm=new zn(5e3,15e3),Im="__/auth/iframe",Em="emulator/auth/iframe",Tm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Am=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cm(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ds(e,Em):`https://${t.config.authDomain}/${Im}`,r={apiKey:e.apiKey,appName:t.name,v:Dr},i=Am.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ln(r).slice(1)}`}async function km(t){const e=await bm(t),n=qe().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:Cm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tm,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ke(t,"network-request-failed"),a=qe().setTimeout(()=>{s(o)},wm.get());function l(){qe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Rm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Om=500,Sm=600,Pm="_blank",Nm="http://localhost";class Hl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xm(t,e,n,r=Om,i=Sm){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Rm),{width:r.toString(),height:i.toString(),top:s,left:o}),c=be().toLowerCase();n&&(a=gl(c)?Pm:n),ml(c)&&(e=e||Nm,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[v,E])=>`${h}${v}=${E},`,"");if(gp(c)&&a!=="_self")return Mm(e||"",a),new Hl(null);const d=window.open(e||"",a,u);$(d,t,"popup-blocked");try{d.focus()}catch{}return new Hl(d)}function Mm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Lm="__/auth/handler",Dm="emulator/auth/handler";function jl(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Dr,eventId:i};if(e instanceof _s){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof Vn){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Um(t)}?${Ln(a).slice(1)}`}function Um({config:t}){return t.emulator?ds(t,Dm):`https://${t.authDomain}/${Lm}`}/**
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
 */const Ts="webStorageSupport";class Fm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sl,this._completeRedirectFn=cm}async _openPopup(e,n,r,i){var s;it((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=jl(e,n,r,fs(),i);return xm(e,o,bs())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Bp(jl(e,n,r,fs(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(it(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await km(e),r=new fm(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ts,{type:Ts},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ts];o!==void 0&&n(!!o),Le(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return wl()||gs()||$r()}}const zm=Fm;var Wl="@firebase/auth",Vl="0.19.4";/**
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
 */class $m{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Bm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Hm(t){Mr(new Fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{$(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),$(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Il(t)},l=new _p(o,a);return Zh(l,n),l})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mr(new Fn("auth-internal",e=>{const n=jn(e.getProvider("auth").getImmediate());return(r=>new $m(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(Wl,Vl,Bm(t)),nn(Wl,Vl,"esm2017")}/**
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
 */function Tv(t=Kh()){const e=tl(t,"auth");return e.isInitialized()?e.getImmediate():Qh(t,{popupRedirectResolver:zm,persistence:[Yp,Fp,Sl]})}Hm("Browser");/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Kl=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",cn=t=>Kl?Symbol(t):"_vr_"+t,jm=cn("rvlm"),ql=cn("rvd"),qr=cn("r"),Gl=cn("rl"),As=cn("rvl"),un=typeof window!="undefined";function Wm(t){return t.__esModule||Kl&&t[Symbol.toStringTag]==="Module"}const se=Object.assign;function Cs(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const qn=()=>{},Vm=/\/$/,Km=t=>t.replace(Vm,"");function ks(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),s=e.slice(a+1,l>-1?l:e.length),i=t(s)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=Ym(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function qm(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Gm(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&fn(e.matched[r],n.matched[i])&&Yl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Yl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Jm(t[n],e[n]))return!1;return!0}function Jm(t,e){return Array.isArray(t)?Xl(t,e):Array.isArray(e)?Xl(e,t):t===e}function Xl(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ym(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],!(i===1||o==="."))if(o==="..")i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var Gn;(function(t){t.pop="pop",t.push="push"})(Gn||(Gn={}));var Jn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Jn||(Jn={}));function Xm(t){if(!t)if(un){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Km(t)}const Qm=/^[^#]+#/;function Zm(t,e){return t.replace(Qm,"#")+e}function eg(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Gr=()=>({left:window.pageXOffset,top:window.pageYOffset});function tg(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=eg(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ql(t,e){return(history.state?history.state.position-e:-1)+t}const Rs=new Map;function ng(t,e){Rs.set(t,e)}function rg(t){const e=Rs.get(t);return Rs.delete(t),e}let ig=()=>location.protocol+"//"+location.host;function Zl(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Jl(l,"")}return Jl(n,t)+r+i}function sg(t,e,n,r){let i=[],s=[],o=null;const a=({state:h})=>{const v=Zl(t,location),E=n.value,S=e.value;let k=0;if(h){if(n.value=v,e.value=h,o&&o===E){o=null;return}k=S?h.position-S.position:0}else r(v);i.forEach(g=>{g(n.value,E,{delta:k,type:Gn.pop,direction:k?k>0?Jn.forward:Jn.back:Jn.unknown})})};function l(){o=n.value}function c(h){i.push(h);const v=()=>{const E=i.indexOf(h);E>-1&&i.splice(E,1)};return s.push(v),v}function u(){const{history:h}=window;!h.state||h.replaceState(se({},h.state,{scroll:Gr()}),"")}function d(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function ec(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Gr():null}}function og(t){const{history:e,location:n}=window,r={value:Zl(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:ig()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),i.value=c}catch(v){console.error(v),n[u?"replace":"assign"](h)}}function o(l,c){const u=se({},e.state,ec(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function a(l,c){const u=se({},i.value,e.state,{forward:l,scroll:Gr()});s(u.current,u,!0);const d=se({},ec(r.value,l,null),{position:u.position+1},c);s(l,d,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function Av(t){t=Xm(t);const e=og(t),n=sg(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=se({location:"",base:t,go:r,createHref:Zm.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function ag(t){return typeof t=="string"||t&&typeof t=="object"}function tc(t){return typeof t=="string"||typeof t=="symbol"}const bt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},nc=cn("nf");var rc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(rc||(rc={}));function dn(t,e){return se(new Error,{type:t,[nc]:!0},e)}function zt(t,e){return t instanceof Error&&nc in t&&(e==null||!!(t.type&e))}const ic="[^/]+?",lg={sensitive:!1,strict:!1,start:!0,end:!0},cg=/[.+*?^${}()[\]/\\]/g;function ug(t,e){const n=se({},lg,e),r=[];let i=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let v=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(cg,"\\$&"),v+=40;else if(h.type===1){const{value:E,repeatable:S,optional:k,regexp:g}=h;s.push({name:E,repeatable:S,optional:k});const w=g||ic;if(w!==ic){v+=10;try{new RegExp(`(${w})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${E}" (${w}): `+M.message)}}let N=S?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(N=k&&c.length<2?`(?:/${N})`:"/"+N),k&&(N+="?"),i+=N,v+=20,k&&(v+=-8),S&&(v+=-20),w===".*"&&(v+=-50)}u.push(v)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const v=u[h]||"",E=s[h-1];d[E.name]=v&&E.repeatable?v.split("/"):v}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const v of h)if(v.type===0)u+=v.value;else if(v.type===1){const{value:E,repeatable:S,optional:k}=v,g=E in c?c[E]:"";if(Array.isArray(g)&&!S)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const w=Array.isArray(g)?g.join("/"):g;if(!w)if(k)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);u+=w}}return u}return{re:o,score:r,keys:s,parse:a,stringify:l}}function fg(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function dg(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=fg(r[n],i[n]);if(s)return s;n++}return i.length-r.length}const hg={type:0,value:""},pg=/[a-zA-Z0-9_]/;function mg(t){if(!t)return[[]];if(t==="/")return[[hg]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${c}": ${v}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function d(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:pg.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function gg(t,e,n){const r=ug(mg(t.path),n),i=se(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function vg(t,e){const n=[],r=new Map;e=oc({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,d,h){const v=!h,E=_g(u);E.aliasOf=h&&h.record;const S=oc(e,u),k=[E];if("alias"in u){const N=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of N)k.push(se({},E,{components:h?h.record.components:E.components,path:M,aliasOf:h?h.record:E}))}let g,w;for(const N of k){const{path:M}=N;if(d&&M[0]!=="/"){const W=d.record.path,j=W[W.length-1]==="/"?"":"/";N.path=d.record.path+(M&&j+M)}if(g=gg(N,d,S),h?h.alias.push(g):(w=w||g,w!==g&&w.alias.push(g),v&&u.name&&!sc(g)&&o(u.name)),"children"in E){const W=E.children;for(let j=0;j<W.length;j++)s(W[j],g,h&&h.children[j])}h=h||g,l(g)}return w?()=>{o(w)}:qn}function o(u){if(tc(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&dg(u,n[d])>=0;)d++;n.splice(d,0,u),u.record.name&&!sc(u)&&r.set(u.record.name,u)}function c(u,d){let h,v={},E,S;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw dn(1,{location:u});S=h.record.name,v=se(yg(d.params,h.keys.filter(w=>!w.optional).map(w=>w.name)),u.params),E=h.stringify(v)}else if("path"in u)E=u.path,h=n.find(w=>w.re.test(E)),h&&(v=h.parse(E),S=h.record.name);else{if(h=d.name?r.get(d.name):n.find(w=>w.re.test(d.path)),!h)throw dn(1,{location:u,currentLocation:d});S=h.record.name,v=se({},d.params,u.params),E=h.stringify(v)}const k=[];let g=h;for(;g;)k.unshift(g.record),g=g.parent;return{name:S,path:E,params:v,matched:k,meta:wg(k)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function yg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function _g(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:bg(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function bg(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function sc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function wg(t){return t.reduce((e,n)=>se(e,n.meta),{})}function oc(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const ac=/#/g,Ig=/&/g,Eg=/\//g,Tg=/=/g,Ag=/\?/g,lc=/\+/g,Cg=/%5B/g,kg=/%5D/g,cc=/%5E/g,Rg=/%60/g,uc=/%7B/g,Og=/%7C/g,fc=/%7D/g,Sg=/%20/g;function Os(t){return encodeURI(""+t).replace(Og,"|").replace(Cg,"[").replace(kg,"]")}function Pg(t){return Os(t).replace(uc,"{").replace(fc,"}").replace(cc,"^")}function Ss(t){return Os(t).replace(lc,"%2B").replace(Sg,"+").replace(ac,"%23").replace(Ig,"%26").replace(Rg,"`").replace(uc,"{").replace(fc,"}").replace(cc,"^")}function Ng(t){return Ss(t).replace(Tg,"%3D")}function xg(t){return Os(t).replace(ac,"%23").replace(Ag,"%3F")}function Mg(t){return t==null?"":xg(t).replace(Eg,"%2F")}function Jr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Lg(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(lc," "),o=s.indexOf("="),a=Jr(o<0?s:s.slice(0,o)),l=o<0?null:Jr(s.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function dc(t){let e="";for(let n in t){const r=t[n];if(n=Ng(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(s=>s&&Ss(s)):[r&&Ss(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Dg(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}function Yn(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function wt(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(dn(4,{from:n,to:e})):d instanceof Error?a(d):ag(d)?a(dn(2,{from:e,to:d})):(s&&r.enterCallbacks[i]===s&&typeof d=="function"&&s.push(d),o())},c=t.call(r&&r.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Ps(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(Ug(a)){const c=(a.__vccOpts||a)[e];c&&i.push(wt(c,n,r,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Wm(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&wt(h,n,r,s,o)()}))}}return i}function Ug(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function hc(t){const e=Xe(qr),n=Xe(Gl),r=pe(()=>e.resolve(bn(t.to))),i=pe(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(fn.bind(null,u));if(h>-1)return h;const v=pc(l[c-2]);return c>1&&pc(u)===v&&d[d.length-1].path!==v?d.findIndex(fn.bind(null,l[c-2])):h}),s=pe(()=>i.value>-1&&Bg(n.params,r.value.params)),o=pe(()=>i.value>-1&&i.value===n.matched.length-1&&Yl(n.params,r.value.params));function a(l={}){return $g(l)?e[bn(t.replace)?"replace":"push"](bn(t.to)).catch(qn):Promise.resolve()}return{route:r,href:pe(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const Fg=wn({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hc,setup(t,{slots:e}){const n=yn(hc(t)),{options:r}=Xe(qr),i=pe(()=>({[mc(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[mc(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:On("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),zg=Fg;function $g(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Bg(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function pc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const mc=(t,e,n)=>t!=null?t:e!=null?e:n,Hg=wn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Xe(As),i=pe(()=>t.route||r.value),s=Xe(ql,0),o=pe(()=>i.value.matched[s]);hr(ql,s+1),hr(jm,o),hr(As,i);const a=iu();return Rn(()=>[a.value,o.value,t.name],([l,c,u],[d,h,v])=>{c&&(c.instances[u]=l,h&&h!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),l&&c&&(!h||!fn(c,h)||!d)&&(c.enterCallbacks[u]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=i.value,c=o.value,u=c&&c.components[t.name],d=t.name;if(!u)return gc(n.default,{Component:u,route:l});const h=c.props[t.name],v=h?h===!0?l.params:typeof h=="function"?h(l):h:null,S=On(u,se({},v,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(c.instances[d]=null)},ref:a}));return gc(n.default,{Component:S,route:l})||S}}});function gc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const jg=Hg;function Cv(t){const e=vg(t.routes,t),n=t.parseQuery||Lg,r=t.stringifyQuery||dc,i=t.history,s=Yn(),o=Yn(),a=Yn(),l=su(bt);let c=bt;un&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Cs.bind(null,y=>""+y),d=Cs.bind(null,Mg),h=Cs.bind(null,Jr);function v(y,x){let R,D;return tc(y)?(R=e.getRecordMatcher(y),D=x):D=y,e.addRoute(D,R)}function E(y){const x=e.getRecordMatcher(y);x&&e.removeRoute(x)}function S(){return e.getRoutes().map(y=>y.record)}function k(y){return!!e.getRecordMatcher(y)}function g(y,x){if(x=se({},x||l.value),typeof y=="string"){const V=ks(n,y,x.path),f=e.resolve({path:V.path},x),p=i.createHref(V.fullPath);return se(V,f,{params:h(f.params),hash:Jr(V.hash),redirectedFrom:void 0,href:p})}let R;if("path"in y)R=se({},y,{path:ks(n,y.path,x.path).path});else{const V=se({},y.params);for(const f in V)V[f]==null&&delete V[f];R=se({},y,{params:d(y.params)}),x.params=d(x.params)}const D=e.resolve(R,x),ne=y.hash||"";D.params=u(h(D.params));const ae=qm(r,se({},y,{hash:Pg(ne),path:D.path})),G=i.createHref(ae);return se({fullPath:ae,hash:ne,query:r===dc?Dg(y.query):y.query||{}},D,{redirectedFrom:void 0,href:G})}function w(y){return typeof y=="string"?ks(n,y,l.value.path):se({},y)}function N(y,x){if(c!==y)return dn(8,{from:x,to:y})}function M(y){return U(y)}function W(y){return M(se(w(y),{replace:!0}))}function j(y){const x=y.matched[y.matched.length-1];if(x&&x.redirect){const{redirect:R}=x;let D=typeof R=="function"?R(y):R;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=w(D):{path:D},D.params={}),se({query:y.query,hash:y.hash,params:y.params},D)}}function U(y,x){const R=c=g(y),D=l.value,ne=y.state,ae=y.force,G=y.replace===!0,V=j(R);if(V)return U(se(w(V),{state:ne,force:ae,replace:G}),x||R);const f=R;f.redirectedFrom=x;let p;return!ae&&Gm(r,D,R)&&(p=dn(16,{to:f,from:D}),$t(D,D,!0,!1)),(p?Promise.resolve(p):q(f,D)).catch(m=>zt(m)?m:oe(m,f,D)).then(m=>{if(m){if(zt(m,2))return U(se(w(m.to),{state:ne,force:ae,replace:G}),x||f)}else m=ue(f,D,!0,G,ne);return ee(f,D,m),m})}function Y(y,x){const R=N(y,x);return R?Promise.reject(R):Promise.resolve()}function q(y,x){let R;const[D,ne,ae]=Wg(y,x);R=Ps(D.reverse(),"beforeRouteLeave",y,x);for(const V of D)V.leaveGuards.forEach(f=>{R.push(wt(f,y,x))});const G=Y.bind(null,y,x);return R.push(G),hn(R).then(()=>{R=[];for(const V of s.list())R.push(wt(V,y,x));return R.push(G),hn(R)}).then(()=>{R=Ps(ne,"beforeRouteUpdate",y,x);for(const V of ne)V.updateGuards.forEach(f=>{R.push(wt(f,y,x))});return R.push(G),hn(R)}).then(()=>{R=[];for(const V of y.matched)if(V.beforeEnter&&!x.matched.includes(V))if(Array.isArray(V.beforeEnter))for(const f of V.beforeEnter)R.push(wt(f,y,x));else R.push(wt(V.beforeEnter,y,x));return R.push(G),hn(R)}).then(()=>(y.matched.forEach(V=>V.enterCallbacks={}),R=Ps(ae,"beforeRouteEnter",y,x),R.push(G),hn(R))).then(()=>{R=[];for(const V of o.list())R.push(wt(V,y,x));return R.push(G),hn(R)}).catch(V=>zt(V,8)?V:Promise.reject(V))}function ee(y,x,R){for(const D of a.list())D(y,x,R)}function ue(y,x,R,D,ne){const ae=N(y,x);if(ae)return ae;const G=x===bt,V=un?history.state:{};R&&(D||G?i.replace(y.fullPath,se({scroll:G&&V&&V.scroll},ne)):i.push(y.fullPath,ne)),l.value=y,$t(y,x,R,G),Se()}let L;function de(){L=i.listen((y,x,R)=>{const D=g(y),ne=j(D);if(ne){U(se(ne,{replace:!0}),D).catch(qn);return}c=D;const ae=l.value;un&&ng(Ql(ae.fullPath,R.delta),Gr()),q(D,ae).catch(G=>zt(G,4|8)?G:zt(G,2)?(U(G.to,D).then(V=>{zt(V,4|16)&&!R.delta&&R.type===Gn.pop&&i.go(-1,!1)}).catch(qn),Promise.reject()):(R.delta&&i.go(-R.delta,!1),oe(G,D,ae))).then(G=>{G=G||ue(D,ae,!1),G&&(R.delta?i.go(-R.delta,!1):R.type===Gn.pop&&zt(G,4|16)&&i.go(-1,!1)),ee(D,ae,G)}).catch(qn)})}let Ae=Yn(),Ge=Yn(),he;function oe(y,x,R){Se(y);const D=Ge.list();return D.length?D.forEach(ne=>ne(y,x,R)):console.error(y),Promise.reject(y)}function te(){return he&&l.value!==bt?Promise.resolve():new Promise((y,x)=>{Ae.add([y,x])})}function Se(y){he||(he=!0,de(),Ae.list().forEach(([x,R])=>y?R(y):x()),Ae.reset())}function $t(y,x,R,D){const{scrollBehavior:ne}=t;if(!un||!ne)return Promise.resolve();const ae=!R&&rg(Ql(y.fullPath,0))||(D||!R)&&history.state&&history.state.scroll||null;return Xo().then(()=>ne(y,x,ae)).then(G=>G&&tg(G)).catch(G=>oe(G,y,x))}const Je=y=>i.go(y);let Fe;const Pe=new Set;return{currentRoute:l,addRoute:v,removeRoute:E,hasRoute:k,getRoutes:S,resolve:g,options:t,push:M,replace:W,go:Je,back:()=>Je(-1),forward:()=>Je(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Ge.add,isReady:te,install(y){const x=this;y.component("RouterLink",zg),y.component("RouterView",jg),y.config.globalProperties.$router=x,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>bn(l)}),un&&!Fe&&l.value===bt&&(Fe=!0,M(i.location).catch(ne=>{}));const R={};for(const ne in bt)R[ne]=pe(()=>l.value[ne]);y.provide(qr,x),y.provide(Gl,yn(R)),y.provide(As,l);const D=y.unmount;Pe.add(y),y.unmount=function(){Pe.delete(y),Pe.size<1&&(c=bt,L&&L(),l.value=bt,Fe=!1,he=!1),D()}}}}function hn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Wg(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>fn(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>fn(c,l))||i.push(l))}return[n,r,i]}function kv(){return Xe(qr)}export{Kg as $,av as A,lv as B,uv as C,hv as D,pv as E,He as F,fv as G,dv as H,cv as I,sv as J,ov as K,Qg as L,Gt as M,On as N,Xe as O,hr as P,tv as Q,Gg as R,yn as S,da as T,Cu as U,Xo as V,Rn as W,rv as X,_v as Y,vt as Z,Ev as _,wo as a,qg as a0,nv as a1,Zr as a2,iv as a3,yv as a4,bv as a5,vv as a6,Eo as b,pe as c,wn as d,Jg as e,Xg as f,Tv as g,Vo as h,gv as i,Ce as j,Ju as k,ev as l,Zg as m,Xu as n,wv as o,ef as p,Yg as q,iu as r,Iv as s,Vg as t,kv as u,Cv as v,du as w,Av as x,xd as y,mv as z};
