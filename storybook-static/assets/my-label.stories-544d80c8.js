import{j as v}from"./jsx-runtime-e6a661ac.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";const S=({label:o,size:g="normal",allCaps:f,color:x="text-primary",fontColor:z})=>v("span",{className:`${g} ${x} label`,style:{color:z},children:f?o.toLocaleUpperCase():o});try{mylabel.displayName="mylabel",mylabel.__docgenInfo={description:"",displayName:"mylabel",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:null,description:"",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"text-primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:null,description:"",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const V={title:"UI/labels/MyLabel",component:S,tags:["autodocs"],parameters:{layout:"centered"},args:{allCaps:!1},argTypes:{label:{description:"Text to display",type:"string"},size:{description:"Label size",type:"symbol",control:"select",options:["normal","h1","h2","h3"]},allCaps:{description:"Capitalize text",type:"boolean"},color:{description:"Set color",type:"symbol",control:"select",options:["text-primary","text-secondary","text-tertiary"]},fontColor:{description:"Set custom color",control:"color"}}},e={args:{label:"Basic label",size:"normal",color:"text-secondary"}},a={args:{label:"All Caps label",size:"normal",allCaps:!0}},r={args:{label:"Secondary label",size:"normal",color:"text-secondary"}},l={args:{label:"Custom Color label",size:"normal",fontColor:"#46734b"}};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: "Basic label",
    size: "normal",
    color: "text-secondary"
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "All Caps label",
    size: "normal",
    allCaps: true
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,d,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Secondary label",
    size: "normal",
    color: "text-secondary"
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var y,b,C;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Custom Color label",
    size: "normal",
    fontColor: "#46734b"
  }
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const A=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,A as __namedExportsOrder,V as default};
//# sourceMappingURL=my-label.stories-544d80c8.js.map
