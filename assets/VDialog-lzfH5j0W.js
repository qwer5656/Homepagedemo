import{e as b,V as y,f as D,g as d}from"./VOverlay-SqWkssnz.js";import{f as S}from"./VTextField-8n1NyAtl.js";import{p as h,g as x,H as w,r as B,at as F,S as v,Z as I,D as R,E as m,u as T,au as O,c as g}from"./index-yoNXwepb.js";import{V as A}from"./VDefaultsProvider-bfDQmCa-.js";const C=h({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...b({origin:"center center",scrollStrategy:"block",transition:{component:y},zIndex:2400})},"VDialog"),H=x()({name:"VDialog",props:C(),emits:{"update:modelValue":a=>!0},setup(a,p){let{slots:c}=p;const n=w(a,"modelValue"),{scopeId:V}=D(),t=B();function i(l){var r,s;const e=l.relatedTarget,o=l.target;if(e!==o&&((r=t.value)!=null&&r.contentEl)&&((s=t.value)!=null&&s.globalTop)&&![document,t.value.contentEl].includes(o)&&!t.value.contentEl.contains(o)){const u=O(t.value.contentEl);if(!u.length)return;const f=u[0],P=u[u.length-1];e===f?P.focus():f.focus()}}F&&v(()=>n.value&&a.retainFocus,l=>{l?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),v(n,async l=>{var e,o;await I(),l?(e=t.value.contentEl)==null||e.focus({preventScroll:!0}):(o=t.value.activatorEl)==null||o.focus({preventScroll:!0})});const E=R(()=>m({"aria-haspopup":"dialog","aria-expanded":String(n.value)},a.activatorProps));return T(()=>{const l=d.filterProps(a);return g(d,m({ref:t,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},l,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-modal":"true",activatorProps:E.value,role:"dialog"},V),{activator:c.activator,default:function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return g(A,{root:"VDialog"},{default:()=>{var s;return[(s=c.default)==null?void 0:s.call(c,...o)]}})}})}),S({},t)}});export{H as V};