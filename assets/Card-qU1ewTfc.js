import{_ as p,o as l,f as o,h as a,k as u,F as _,ap as h,B as A,c as i,w as g,t as c}from"./index-R4Gm6xPY.js";import{_ as v}from"./Previous-W861ppq1.js";import{_ as w,a as f,b as k}from"./Remove_On_black-7FTly4y-.js";import{_ as N}from"./Close-B_h6DRmI.js";import{V as b}from"./VDialog-BNOIH52i.js";import{V as m}from"./VTextField-GNiq3NnK.js";const V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUEAAAAcCAYAAAD/aQ2sAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGeSURBVHgB7d3RUYNAEMbxxbGAlJASUgIdaAfSgekgsQM7IHZgB8EOtAJKwA7WPbmML46zR2Dk4P+b2eGFk7dv7ssFIwIAC6Cqpc29AMBaWOhtbCqbs/ZqSXQrAJCZEH52ebTZ22zkCoQggGyEymuXyuZOrgy/C0IQwOzFz/rCzq+UkRGCAGZpYOX9EADIWTzlfbbp1KeL95cCALmK4XdWvxB+x7hjBID8xK+4HNS/6wsadn0AsqZUXgBrpDOsvIUAwIT055S3stk6l73ZHIuiaGQAe+bOLp5X6BoBgCkl7PzCrq8eo/La32idzywFAKbkDMHRKq/27xJ7tOH+GwGA//Vp08lIr8GZB+d9TwIAU7Md16v61TZbGSisdT6nvazhYATApGKolTYH8R+MNDYvdjBykgSacCAy9NAFAAaLn9c16tfGNVsBgKWItfWkaWrCEMCixDCs1P+VluAc1ggALIlSlQGAqgwA33RYVd4LACyN+qty8q/NAUA2LOR2+ndVJgQBLF+sysdfqjIhCGBdYlV+JwQBrJr2/7C1lERfs+Y/kROcqM0AAAAASUVORK5CYII=",B={data(){return{deletedialog:!1,newCarddata:{},carddata:[],tempdata:{},mode:""}},methods:{previous(){this.$emit("changestatus",!1)},close(){this.deletedialog=!1},open(){this.deletedialog=!0},savecard(){this.mode=="edit"&&(this.tempdata.CardNumberName=this.newCarddata.CardNumberName,this.tempdata.CardNumber=this.newCarddata.CardNumber),this.mode=="add"&&(this.carddata.push(this.newCarddata),this.newCarddata={}),this.deletedialog=!1},cardclick(s){s.select=!0,this.carddata.forEach(d=>{d!=s&&(d.select=!1)})},addcard(){this.open(),this.mode="add"},editcard(s){this.tempdata=s,this.newCarddata=JSON.parse(JSON.stringify(s)),this.open(),this.mode="edit"},removecard(s){this.carddata.splice(s,1)},clearcard(){this.carddata.forEach(s=>{s.select=!1})}}},x={class:"Cardwrap"},I=a("img",{src:v,alt:""},null,-1),y=a("span",null,"Back",-1),U=[I,y],G={class:"addcontent"},S=a("div",null,"My Card",-1),E=a("img",{src:w,alt:""},null,-1),R=["onClickCapture"],O=a("img",{src:V,alt:""},null,-1),q={key:0,class:"cardoperatewrap"},L=["onClick"],Q=a("img",{class:"cardoperateimg",src:f,alt:""},null,-1),Y=a("div",{class:"cardoperatetxt"},"Edit",-1),F=[Q,Y],M=["onClick"],T=a("img",{class:"cardoperateimg",src:k,alt:""},null,-1),z=a("div",{class:"cardoperatetxt"},"Remove",-1),D=[T,z],K={key:0,class:"cardnone"},Z={class:"addcardwrap"},J={style:{color:"white","text-align":"right","font-size":"40px","padding-right":"10px",cursor:"pointer"}},X={class:"formwrap"};function H(s,d,W,j,r,t){return l(),o("div",x,[a("div",{class:"backicon",onClick:d[0]||(d[0]=e=>t.previous())},U),a("div",G,[S,a("div",{class:"addiconwrap",onClick:d[1]||(d[1]=(...e)=>t.addcard&&t.addcard(...e))},[u(" Add "),E])]),a("div",{class:"cardmangerwrap",onClickCapture:d[2]||(d[2]=(...e)=>t.clearcard&&t.clearcard(...e))},[(l(!0),o(_,null,h(r.carddata,(e,C)=>(l(),o("div",{key:e},[a("h3",null,c(e.CardNumberName),1),a("div",{class:"cardcontent",onClickCapture:n=>t.cardclick(e)},[O,e.select==!0?(l(),o("div",q,[a("div",{class:"cardoperate",onClick:n=>t.editcard(e)},F,8,L),a("div",{class:"cardoperate",onClick:n=>t.removecard(C)},D,8,M)])):A("",!0),a("span",null,c(e.CardNumber),1)],40,R)]))),128)),r.carddata.length==0?(l(),o("div",K)):A("",!0)],32),i(b,{modelValue:r.deletedialog,"onUpdate:modelValue":d[7]||(d[7]=e=>r.deletedialog=e),persistent:"",width:"auto",class:"Carddialogwrap"},{default:g(()=>[a("div",Z,[a("div",J,[a("img",{src:N,onClick:d[3]||(d[3]=(...e)=>t.close&&t.close(...e)),alt:""})]),a("form",X,[i(m,{label:"Fill in Name",variant:"solo",modelValue:r.newCarddata.CardNumberName,"onUpdate:modelValue":d[4]||(d[4]=e=>r.newCarddata.CardNumberName=e)},null,8,["modelValue"]),i(m,{label:"Fill in number",variant:"solo",modelValue:r.newCarddata.CardNumber,"onUpdate:modelValue":d[5]||(d[5]=e=>r.newCarddata.CardNumber=e)},null,8,["modelValue"]),a("div",{class:"chargebt",onClick:d[6]||(d[6]=(...e)=>t.savecard&&t.savecard(...e))},c(r.mode=="add"?"Create":"Save"),1)])])]),_:1},8,["modelValue"])])}const sa=p(B,[["render",H]]);export{sa as C};
