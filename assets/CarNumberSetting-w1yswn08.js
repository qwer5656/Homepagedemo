import{N as m}from"./Nswitch-fZvAvUsw.js";import{C as h}from"./CarNumber-znM6EZ3g.js";import{_ as b,k as o,o as c,B as d,f as _,h as e,c as w,ar as l}from"./index-ANTTTZ6x.js";const p=""+new URL("CarNumberEnabled-eWLpbL-H.png",import.meta.url).href,C={setup(){},data(){return{carnumberswitchval:!1,carnumbershow:!1}},components:{Nswitch:m,CarNumber:h},methods:{changecarnumbershow(){this.carnumberswitchval==!0&&(this.carnumbershow=!0)},Changestatus(t){this.carnumbershow=t}}},g={key:1,class:"CarNumberSettingwrap"},v={class:"container"},f={class:"content"},N={class:"switch"},k=e("span",null,"Auto Scan Car License",-1),L=e("div",{class:"explain"}," Turn on this option will be allow auto scan car number to start the charging. ",-1),B={class:"imgwrap"},V=e("img",{src:p,alt:""},null,-1);function x(t,s,y,S,n,r){const i=o("CarNumber"),u=o("Nswitch");return n.carnumbershow?(c(),d(i,{key:0,onChangestatus:r.Changestatus},null,8,["onChangestatus"])):(c(),_("div",g,[e("div",null,[e("div",v,[e("div",f,[e("div",N,[k,w(u,{modelValue:n.carnumberswitchval,"onUpdate:modelValue":s[0]||(s[0]=a=>n.carnumberswitchval=a)},null,8,["modelValue"])]),L,e("div",{class:l(["bt",{btenabled:n.carnumberswitchval}]),onClick:s[1]||(s[1]=(...a)=>r.changecarnumbershow&&r.changecarnumbershow(...a))}," My Car License ",2)]),e("div",B,[V,e("div",{class:l(["phonebt bt",{btenabled:n.carnumberswitchval}]),onClick:s[2]||(s[2]=(...a)=>r.changecarnumbershow&&r.changecarnumbershow(...a))}," My Car License ",2)])])])]))}const z=b(C,[["render",x]]);export{z as C};