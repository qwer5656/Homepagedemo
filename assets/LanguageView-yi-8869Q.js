import{N as p}from"./Nbt-HHHpdFHG.js";import{_ as i,k as c,o as l,f as g,h as a,c as r,e as _,B as f}from"./index-ANTTTZ6x.js";import{d as h}from"./VSelect-xijf3Y7V.js";import"./VTextField-8xR5-YFl.js";import"./VInput-APnVl5-v.js";import"./VOverlay-pHhKPXvT.js";import"./VDefaultsProvider-Oduj6c9g.js";import"./VSelectionControl-c66f1_no.js";const v={data(){return{languagedata:"中文",languageitem:["English","中文"]}},mounted(){},methods:{},components:{Nbt:p}},$={class:"languagemodewrap"},V=a("h3",null,"Select language",-1),b={class:"date"},w={class:"selectwrap"},N={class:"nbtwrap"};function k(t,e,d,m,o,u){const n=c("Nbt");return l(),g("div",$,[V,a("div",b,[a("div",w,[r(h,{items:o.languageitem,class:"timeselect",variant:"plain",color:"#000",modelValue:o.languagedata,"onUpdate:modelValue":e[0]||(e[0]=s=>o.languagedata=s)},null,8,["items","modelValue"])])]),a("div",N,[r(n,{title:"Save",enabled:"true",onClick:e[1]||(e[1]=s=>t.savetime())})])])}const B=i(v,[["render",k]]),L={components:{Language:B},mounted(){var t=document.body.clientWidth;t>576&&this.$router.push("/Setting");const e=_();e.curpage="Language"}};function S(t,e,d,m,o,u){const n=c("Language");return l(),f(n)}const q=i(L,[["render",S]]);export{q as default};