"use strict";(self.webpackChunkdandelion_pro=self.webpackChunkdandelion_pro||[]).push([[603],{34603:(e,n,a)=>{a.r(n),a.d(n,{default:()=>z});var i,o=a(89526),t=a(54519),r=a(3199),s=a.n(r),d=a(33360),l=a(39937),c=a(99813),p=a.n(c),u=a(67550),m=a.n(u),v=a(74983),g=a.n(v),f=a(11752),h=a.n(f),y=a(71387),b=a.n(y),k=a(5700),w=a.n(k),N=a(59657);function S(e,n,a,o){i||(i="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var t=e&&e.defaultProps,r=arguments.length-3;if(n||0===r||(n={children:void 0}),1===r)n.children=o;else if(r>1){for(var s=new Array(r),d=0;d<r;d++)s[d]=arguments[d+3];n.children=s}if(n&&t)for(var l in t)void 0===n[l]&&(n[l]=t[l]);else n||(n=t||{});return{$$typeof:i,type:e,key:void 0===a?null:""+a,ref:null,props:n,_owner:null}}const x=(0,t.ZL)()((e=>({appBar:{position:"relative"},layout:{width:"auto"},paper:{marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(3)},stepper:{padding:`${e.spacing(3)} 0 ${e.spacing(5)}`},finishMessage:{textAlign:"center",maxWidth:600,margin:"0 auto","& h4":{color:e.palette.primary.main,"& span":{textAlign:"center",display:"block","& i":{fontSize:120}}}},buttons:{display:"flex",justifyContent:"center"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}))),C=["Shipping address","Payment details","Review your order"];var A=S(N.kS,{}),B=S(N.c7,{}),T=S(N.Cq,{});var $=S(d.Z,{}),L=S(w(),{variant:"h4",gutterBottom:!0},void 0,S("span",{},void 0,S("i",{className:"ion-ios-checkmark-outline"})),"Thank you for your order."),P=S(w(),{variant:"subtitle1"},void 0,"Your order number is\xa0",S("strong",{},void 0,"#2001539"),".\xa0We have emailed your order confirmation, and will send you an update when your order has shipped."),_=S(s(),{item:!0,xs:12,md:5},void 0,S(N.Tl,{}));const z=function(){const[e,n]=(0,o.useState)(0),a=(0,l.default)((e=>e.breakpoints.down("md"))),{classes:i}=x();return S(o.Fragment,{},void 0,$,S("main",{className:i.layout},void 0,S(p(),{className:i.paper},void 0,e===C.length?S("div",{className:i.finishMessage},void 0,L,P,S(b(),{variant:"contained",color:"primary",href:"/app/pages/ecommerce",className:i.button},void 0,"Shoping Again")):S(o.Fragment,{},void 0,S(s(),{container:!0,spacing:3},void 0,S(s(),{item:!0,xs:12,md:7},void 0,S(m(),{activeStep:e,className:i.stepper,alternativeLabel:a},void 0,C.map((e=>S(g(),{},e,S(h(),{},void 0,e))))),function(e){switch(e){case 0:return A;case 1:return B;case 2:return T;default:throw new Error("Unknown step")}}(e)),_),S("div",{className:i.buttons},void 0,0!==e&&S(b(),{onClick:()=>{n(e-1)},className:i.button},void 0,"Back"),S(b(),{variant:"contained",color:"primary",onClick:()=>{n(e+1)},className:i.button,size:"large"},void 0,e===C.length-1?"Place order":"Next"))))))}}}]);