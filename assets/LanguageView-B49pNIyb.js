import{N as p}from"./Nbt-QacNQn9k.js";import{_ as i,j as c,o as l,f as g,h as a,c as r,e as _,A as f}from"./index-R4Gm6xPY.js";import{d as h}from"./VSelect-kwoWPgX7.js";import"./VTextField-GNiq3NnK.js";import"./VInput-ZrnpFaBQ.js";import"./VOverlay-Fvagsge2.js";import"./VDefaultsProvider-CcTYO0cm.js";import"./VSelectionControl-u2I6xLsg.js";const v={data(){return{languagedata:"中文",languageitem:["English","中文"]}},mounted(){},methods:{},components:{Nbt:p}},$={class:"languagemodewrap"},V=a("h3",null,"Select language",-1),b={class:"date"},w={class:"selectwrap"},N={class:"nbtwrap"};function L(t,e,d,m,o,u){const n=c("Nbt");return l(),g("div",$,[V,a("div",b,[a("div",w,[r(h,{items:o.languageitem,class:"timeselect",variant:"plain",color:"#000",modelValue:o.languagedata,"onUpdate:modelValue":e[0]||(e[0]=s=>o.languagedata=s)},null,8,["items","modelValue"])])]),a("div",N,[r(n,{title:"Save",enabled:"true",onClick:e[1]||(e[1]=s=>t.savetime())})])])}const S=i(v,[["render",L]]),k={components:{Language:S},mounted(){var t=document.body.clientWidth;t>576&&this.$router.push("/Setting");const e=_();e.curpage="Language"}};function B(t,e,d,m,o,u){const n=c("Language");return l(),f(n)}const U=i(k,[["render",B]]);export{U as default};
