import{Q as S}from"./QrcodeSetting-o8qMyisl.js";import{R as b}from"./RfidSetting-sX-kE58I.js";import{C}from"./CarNumberSetting-1A9gAITy.js";import{_ as p,j as n,o as s,f as k,h as e,aq as d,A as m,B as a,c as h,e as q}from"./index-vVj6KyqG.js";import"./Nswitch-RlbnwRPC.js";import"./VSwitch-a-w6BOa_.js";import"./VInput--U0vz1Vj.js";import"./VDefaultsProvider-Vyzsdqis.js";import"./VSelectionControl-HcRx6z1p.js";import"./VProgressCircular-mkqGrEAY.js";import"./Card-1naTwH5a.js";import"./Previous-W861ppq1.js";import"./Remove_On_black-7FTly4y-.js";import"./Close-B_h6DRmI.js";import"./VDialog-05st9CUo.js";import"./VOverlay-lUvy3qoY.js";import"./VTextField-TFvjxaXO.js";import"./CarNumber-JA2Ixux1.js";const N={data(){return{radioval:"two",selectmode:"qrcode",selected:[]}},components:{QrcodeSetting:S,RfidSetting:b,CarNumberSetting:C},methods:{goto(t){this.$router.push(`/${t}`)},changeselectmode(t){this.selectmode=t}}},$={class:"startmodewrap"},B={class:"startmodemenu"};function x(t,o,u,_,r,c){const i=n("QrcodeSetting"),f=n("test"),g=n("RfidSetting"),v=n("CarNumberSetting");return s(),k("div",$,[e("div",B,[e("div",{class:d(["qrcode imgsize",{qrcodeenabled:r.selectmode=="qrcode"}]),onClick:o[0]||(o[0]=l=>c.changeselectmode("qrcode"))},null,2),e("div",{class:d(["rfid imgsize",{rfidenabled:r.selectmode=="rfid"}]),onClick:o[1]||(o[1]=l=>c.changeselectmode("rfid"))},null,2),e("div",{class:d(["licenseplate imgsize",{licenseplateenabled:r.selectmode=="carnumber"}]),onClick:o[2]||(o[2]=l=>c.changeselectmode("carnumber"))},null,2)]),e("div",null,[e("div",null,[r.selectmode=="qrcode"?(s(),m(i,{key:0})):a("",!0)]),e("div",null,[h(f),r.selectmode=="rfid"?(s(),m(g,{key:0})):a("",!0)]),e("div",null,[r.selectmode=="carnumber"?(s(),m(v,{key:0})):a("",!0)])])])}const z=p(N,[["render",x],["__scopeId","data-v-fe72ef2b"]]),Q={components:{Startmode:z},mounted(){const t=q();t.curpage="Startmode"}};function R(t,o,u,_,r,c){const i=n("Startmode");return s(),m(i)}const U=p(Q,[["render",R]]);export{U as default};