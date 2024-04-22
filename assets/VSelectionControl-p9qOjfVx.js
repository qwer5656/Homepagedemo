import{p as x,as as A,aD as re,m as M,N as se,g as Y,H as W,av as X,D as d,T as ue,aP as ce,J as de,I as m,u as j,c as _,K as me,b3 as F,R as D,r as ve,aw as pe,E as H,U as fe,V as he,F as ye,W as Ce,aj as S,aT as _e,Z as ge}from"./index-EsmoOMmo.js";import{a as be,t as we,o as Ee,b as Te,u as Ve,d as Se}from"./VInput-VNbJZR_T.js";const q=Symbol.for("vuetify:selection-control-group"),K=x({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:A,trueIcon:A,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:re},...M(),...be(),...se()},"SelectionControlGroup"),Le=x({...K({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");Y()({name:"VSelectionControlGroup",props:Le(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const i=W(e,"modelValue"),o=X(),a=d(()=>e.id||`v-selection-control-group-${o}`),s=d(()=>e.name||a.value),l=new Set;return ue(q,{modelValue:i,forceUpdate:()=>{l.forEach(r=>r())},onForceUpdate:r=>{l.add(r),ce(()=>{l.delete(r)})}}),de({[e.defaultsTarget]:{color:m(e,"color"),disabled:m(e,"disabled"),density:m(e,"density"),error:m(e,"error"),inline:m(e,"inline"),modelValue:i,multiple:d(()=>!!e.multiple||e.multiple==null&&Array.isArray(i.value)),name:s,falseIcon:m(e,"falseIcon"),trueIcon:m(e,"trueIcon"),readonly:m(e,"readonly"),ripple:m(e,"ripple"),type:m(e,"type"),valueComparator:m(e,"valueComparator")}}),j(()=>{var r;return _("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(r=n.default)==null?void 0:r.call(n)])}),{}}});const L=Symbol("rippleStop"),ke=80;function G(e,t){e.style.transform=t,e.style.webkitTransform=t}function k(e){return e.constructor.name==="TouchEvent"}function z(e){return e.constructor.name==="KeyboardEvent"}const xe=function(e,t){var v;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=0,o=0;if(!z(e)){const p=t.getBoundingClientRect(),u=k(e)?e.touches[e.touches.length-1]:e;i=u.clientX-p.left,o=u.clientY-p.top}let a=0,s=.3;(v=t._ripple)!=null&&v.circle?(s=.15,a=t.clientWidth/2,a=n.center?a:a+Math.sqrt((i-a)**2+(o-a)**2)/4):a=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const l=`${(t.clientWidth-a*2)/2}px`,r=`${(t.clientHeight-a*2)/2}px`,h=n.center?l:`${i-a}px`,y=n.center?r:`${o-a}px`;return{radius:a,scale:s,x:h,y,centerX:l,centerY:r}},V={show(e,t){var u;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((u=t==null?void 0:t._ripple)!=null&&u.enabled))return;const i=document.createElement("span"),o=document.createElement("span");i.appendChild(o),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:a,scale:s,x:l,y:r,centerX:h,centerY:y}=xe(e,t,n),v=`${a*2}px`;o.className="v-ripple__animation",o.style.width=v,o.style.height=v,t.appendChild(i);const p=window.getComputedStyle(t);p&&p.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),o.classList.add("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--visible"),G(o,`translate(${l}, ${r}) scale3d(${s},${s},${s})`),o.dataset.activated=String(performance.now()),setTimeout(()=>{o.classList.remove("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--in"),G(o,`translate(${h}, ${y}) scale3d(1,1,1)`)},0)},hide(e){var a;if(!((a=e==null?void 0:e._ripple)!=null&&a.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),o=Math.max(250-i,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var l;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((l=n.parentNode)==null?void 0:l.parentNode)===e&&e.removeChild(n.parentNode)},300)},o)}};function J(e){return typeof e>"u"||!!e}function w(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[L])){if(e[L]=!0,k(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||z(e),n._ripple.class&&(t.class=n._ripple.class),k(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{V.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var i;(i=n==null?void 0:n._ripple)!=null&&i.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},ke)}else V.show(e,n,t)}}function U(e){e[L]=!0}function c(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{c(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),V.hide(t)}}function O(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let E=!1;function Z(e){!E&&(e.keyCode===F.enter||e.keyCode===F.space)&&(E=!0,w(e))}function Q(e){E=!1,c(e)}function ee(e){E&&(E=!1,c(e))}function te(e,t,n){const{value:i,modifiers:o}=t,a=J(i);if(a||V.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=a,e._ripple.centered=o.center,e._ripple.circle=o.circle,me(i)&&i.class&&(e._ripple.class=i.class),a&&!n){if(o.stop){e.addEventListener("touchstart",U,{passive:!0}),e.addEventListener("mousedown",U);return}e.addEventListener("touchstart",w,{passive:!0}),e.addEventListener("touchend",c,{passive:!0}),e.addEventListener("touchmove",O,{passive:!0}),e.addEventListener("touchcancel",c),e.addEventListener("mousedown",w),e.addEventListener("mouseup",c),e.addEventListener("mouseleave",c),e.addEventListener("keydown",Z),e.addEventListener("keyup",Q),e.addEventListener("blur",ee),e.addEventListener("dragstart",c,{passive:!0})}else!a&&n&&ne(e)}function ne(e){e.removeEventListener("mousedown",w),e.removeEventListener("touchstart",w),e.removeEventListener("touchend",c),e.removeEventListener("touchmove",O),e.removeEventListener("touchcancel",c),e.removeEventListener("mouseup",c),e.removeEventListener("mouseleave",c),e.removeEventListener("keydown",Z),e.removeEventListener("keyup",Q),e.removeEventListener("dragstart",c),e.removeEventListener("blur",ee)}function Ie(e,t){te(e,t,!1)}function Pe(e){delete e._ripple,ne(e)}function $e(e,t){if(t.value===t.oldValue)return;const n=J(t.oldValue);te(e,t,n)}const Re={mounted:Ie,unmounted:Pe,updated:$e},Be=x({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...M(),...K()},"VSelectionControl");function Ne(e){const t=Ce(q,void 0),{densityClasses:n}=Te(e),i=W(e,"modelValue"),o=d(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),a=d(()=>e.falseValue!==void 0?e.falseValue:!1),s=d(()=>!!e.multiple||e.multiple==null&&Array.isArray(i.value)),l=d({get(){const u=t?t.modelValue.value:i.value;return s.value?S(u).some(f=>e.valueComparator(f,o.value)):e.valueComparator(u,o.value)},set(u){if(e.readonly)return;const f=u?o.value:a.value;let g=f;s.value&&(g=u?[...S(i.value),f]:S(i.value).filter(b=>!e.valueComparator(b,o.value))),t?t.modelValue.value=g:i.value=g}}),{textColorClasses:r,textColorStyles:h}=Ve(d(()=>{if(!(e.error||e.disabled))return l.value?e.color:e.baseColor})),{backgroundColorClasses:y,backgroundColorStyles:v}=Se(d(()=>l.value&&!e.error&&!e.disabled?e.color:void 0)),p=d(()=>l.value?e.trueIcon:e.falseIcon);return{group:t,densityClasses:n,trueValue:o,falseValue:a,model:l,textColorClasses:r,textColorStyles:h,backgroundColorClasses:y,backgroundColorStyles:v,icon:p}}const De=Y()({name:"VSelectionControl",directives:{Ripple:Re},inheritAttrs:!1,props:Be(),emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:i}=t;const{group:o,densityClasses:a,icon:s,model:l,textColorClasses:r,textColorStyles:h,backgroundColorClasses:y,backgroundColorStyles:v,trueValue:p}=Ne(e),u=X(),f=D(!1),g=D(!1),b=ve(),T=d(()=>e.id||`input-${u}`),I=d(()=>!e.disabled&&!e.readonly);o==null||o.onForceUpdate(()=>{b.value&&(b.value.checked=l.value)});function P(C){I.value&&(f.value=!0,_e(C.target,":focus-visible")!==!1&&(g.value=!0))}function $(){f.value=!1,g.value=!1}function ie(C){C.stopPropagation()}function oe(C){I.value&&(e.readonly&&o&&ge(()=>o.forceUpdate()),l.value=C.target.checked)}return j(()=>{var B,N;const C=i.label?i.label({label:e.label,props:{for:T.value}}):e.label,[ae,le]=pe(n),R=_("input",H({ref:b,checked:l.value,disabled:!!e.disabled,id:T.value,onBlur:$,onFocus:P,onInput:oe,"aria-disabled":!!e.disabled,type:e.type,value:p.value,name:e.name,"aria-checked":e.type==="checkbox"?l.value:void 0},le),null);return _("div",H({class:["v-selection-control",{"v-selection-control--dirty":l.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":f.value,"v-selection-control--focus-visible":g.value,"v-selection-control--inline":e.inline},a.value,e.class]},ae,{style:e.style}),[_("div",{class:["v-selection-control__wrapper",r.value],style:h.value},[(B=i.default)==null?void 0:B.call(i,{backgroundColorClasses:y,backgroundColorStyles:v}),fe(_("div",{class:["v-selection-control__input"]},[((N=i.input)==null?void 0:N.call(i,{model:l,textColorClasses:r,textColorStyles:h,backgroundColorClasses:y,backgroundColorStyles:v,inputNode:R,icon:s.value,props:{onFocus:P,onBlur:$,id:T.value}}))??_(ye,null,[s.value&&_(we,{key:"icon",icon:s.value},null),R])]),[[he("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),C&&_(Ee,{for:T.value,onClick:ie},{default:()=>[C]})])}),{isFocused:f,input:b}}});export{Re as R,De as V,Be as m};
