function y(){}const _t=t=>t;function dt(t,e){for(const n in e)t[n]=e[n];return t}function Y(t){return t()}function K(){return Object.create(null)}function E(t){t.forEach(Y)}function O(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Jt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function ht(t){return Object.keys(t).length===0}function mt(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Kt(t,e,n){t.$$.on_destroy.push(mt(e,n))}function Qt(t,e,n,i){if(t){const s=Z(t,e,n,i);return t[0](s)}}function Z(t,e,n,i){return t[1]&&i?dt(n.ctx.slice(),t[1](i(e))):n.ctx}function Ut(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Vt(t,e,n,i,s,l){if(s){const r=Z(e,n,i,l);t.p(r,s)}}function Xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Yt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Zt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function te(t,e,n){return t.set(n),e}function ee(t){return t&&O(t.destroy)?t.destroy:y}const tt=typeof window<"u";let pt=tt?()=>window.performance.now():()=>Date.now(),I=tt?t=>requestAnimationFrame(t):y;const w=new Set;function et(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&I(et)}function gt(t){let e;return w.size===0&&I(et),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}const ne=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let H=!1;function yt(){H=!0}function $t(){H=!1}function bt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function xt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=a?s+1:bt(1,s,h=>e[n[h]].claim_order,a))-1;i[c]=n[_]+1;const u=_+1;n[u]=c,s=Math.max(u,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<l.length&&r[c].claim_order>=l[a].claim_order;)a++;const _=a<l.length?l[a]:null;t.insertBefore(r[c],_)}}function wt(t,e){t.appendChild(e)}function nt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=W("style");return Et(nt(t),e),e.sheet}function Et(t,e){return wt(t.head||t,e),e.sheet}function Nt(t,e){if(H){for(xt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Tt(t,e,n){t.insertBefore(e,n||null)}function kt(t,e,n){H&&!n?Nt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function ie(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function W(t){return document.createElement(t)}function it(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function se(){return J(" ")}function re(){return J("")}function oe(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ce(t){return function(e){return e.preventDefault(),t.call(this,e)}}function le(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function At(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Mt=["width","height"];function ae(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Mt.indexOf(i)===-1?t[i]=e[i]:At(t,i,e[i])}function ue(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function St(t){return Array.from(t.childNodes)}function st(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function rt(t,e,n,i,s=!1){st(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ot(t,e,n,i){return rt(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function fe(t,e,n){return ot(t,e,n,W)}function _e(t,e,n){return ot(t,e,n,it)}function Ct(t,e){return rt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>J(e),!0)}function de(t){return Ct(t," ")}function Q(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function he(t,e){const n=Q(t,"HTML_TAG_START",0),i=Q(t,"HTML_TAG_END",n);if(n===i)return new U(void 0,e);st(t);const s=t.splice(n,i-n+1);A(s[0]),A(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new U(l,e)}function me(t,e){e=""+e,t.data!==e&&(t.data=e)}function pe(t,e){t.value=e??""}function ge(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ye(t,e,n){t.classList[n?"add":"remove"](e)}function ct(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}class jt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=it(n.nodeName):this.e=W(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Tt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(A)}}class U extends jt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)kt(this.t,this.n[n],e)}}function $e(t,e){return new t(e)}const P=new Map;let L=0;function Pt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Lt(t,e){const n={stylesheet:vt(e),rules:{}};return P.set(t,n),n}function V(t,e,n,i,s,l,r,o=0){const c=16.666/i;let a=`{
`;for(let g=0;g<=1;g+=c){const $=e+(n-e)*l(g);a+=g*100+`%{${r($,1-$)}}
`}const _=a+`100% {${r(n,1-n)}}
}`,u=`__svelte_${Pt(_)}_${o}`,h=nt(t),{stylesheet:f,rules:d}=P.get(h)||Lt(h,t);d[u]||(d[u]=!0,f.insertRule(`@keyframes ${u} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${u} ${i}ms linear ${s}ms 1 both`,L+=1,u}function Dt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),L-=s,L||Ot())}function Ot(){I(()=>{L||(P.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&A(e)}),P.clear())})}let M;function k(t){M=t}function N(){if(!M)throw new Error("Function called outside component initialization");return M}function be(t){N().$$.on_mount.push(t)}function xe(t){N().$$.after_update.push(t)}function we(t){N().$$.on_destroy.push(t)}function ve(){const t=N();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=ct(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function Ee(t,e){return N().$$.context.set(t,e),e}function Ne(t){return N().$$.context.get(t)}function Te(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const x=[],X=[];let v=[];const F=[],lt=Promise.resolve();let G=!1;function at(){G||(G=!0,lt.then(ut))}function ke(){return at(),lt}function D(t){v.push(t)}function Ae(t){F.push(t)}const B=new Set;let b=0;function ut(){if(b!==0)return;const t=M;do{try{for(;b<x.length;){const e=x[b];b++,k(e),Ht(e.$$)}}catch(e){throw x.length=0,b=0,e}for(k(null),x.length=0,b=0;X.length;)X.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];B.has(n)||(B.add(n),n())}v.length=0}while(x.length);for(;F.length;)F.pop()();G=!1,B.clear(),k(t)}function Ht(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}function Rt(t){const e=[],n=[];v.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),v=e}let T;function qt(){return T||(T=Promise.resolve(),T.then(()=>{T=null})),T}function z(t,e,n){t.dispatchEvent(ct(`${e?"intro":"outro"}${n}`))}const j=new Set;let p;function Me(){p={r:0,c:[],p}}function Se(){p.r||E(p.c),p=p.p}function Bt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function Ce(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),p.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const zt={duration:0};function je(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),r=i?0:1,o=null,c=null,a=null;function _(){a&&Dt(t,a)}function u(f,d){const m=f.b-r;return d*=Math.abs(m),{a:r,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:g=_t,tick:$=y,css:R}=l||zt,q={start:pt()+d,b:f};f||(q.group=p,p.r+=1),o||c?c=q:(R&&(_(),a=V(t,r,f,m,d,g,R)),f&&$(0,1),o=u(q,m),D(()=>z(t,f,"start")),gt(S=>{if(c&&S>c.start&&(o=u(c,m),c=null,z(t,o.b,"start"),R&&(_(),a=V(t,r,o.b,o.duration,0,g,l.css))),o){if(S>=o.end)$(r=o.b,1-r),z(t,o.b,"end"),c||(o.b?_():--o.group.r||E(o.group.c)),o=null;else if(S>=o.start){const ft=S-o.start;r=o.a+o.d*g(ft/o.duration),$(r,1-r)}}return!!(o||c)}))}return{run(f){O(l)?qt().then(()=>{l=l(s),h(f)}):h(f)},end(){_(),o=c=null}}}function Pe(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Le(t){return typeof t=="object"&&t!==null?t:{}}function De(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Oe(t){t&&t.c()}function He(t,e){t&&t.l(e)}function Ft(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||D(()=>{const r=t.$$.on_mount.map(Y).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...r):E(r),t.$$.on_mount=[]}),l.forEach(D)}function Gt(t,e){const n=t.$$;n.fragment!==null&&(Rt(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function It(t,e){t.$$.dirty[0]===-1&&(x.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Re(t,e,n,i,s,l,r,o=[-1]){const c=M;k(t);const a=t.$$={fragment:null,ctx:[],props:l,update:y,not_equal:s,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:K(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(u,h,...f)=>{const d=f.length?f[0]:h;return a.ctx&&s(a.ctx[u],a.ctx[u]=d)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](d),_&&It(t,u)),h}):[],a.update(),_=!0,E(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){yt();const u=St(e.target);a.fragment&&a.fragment.l(u),u.forEach(A)}else a.fragment&&a.fragment.c();e.intro&&Bt(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),$t(),ut()}k(c)}class qe{$destroy(){Gt(this,1),this.$destroy=y}$on(e,n){if(!O(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ht(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Me as $,Ae as A,Bt as B,Ce as C,Gt as D,Zt as E,N as F,Kt as G,U as H,Yt as I,ke as J,Qt as K,Vt as L,Xt as M,Ut as N,be as O,we as P,it as Q,_e as R,qe as S,pe as T,oe as U,Se as V,ie as W,E as X,D as Y,je as Z,ye as _,Re as a,ue as a0,Jt as a1,ge as a2,ve as a3,Ee as a4,Ne as a5,O as a6,mt as a7,xe as a8,ee as a9,ne as aa,Te as ab,ce as ac,le as ad,$e as ae,ae as af,te as ag,se as b,de as c,kt as d,re as e,A as f,Ct as g,me as h,_t as i,he as j,W as k,fe as l,St as m,y as n,At as o,Nt as p,dt as q,X as r,Wt as s,J as t,De as u,Oe as v,He as w,Ft as x,Pe as y,Le as z};
