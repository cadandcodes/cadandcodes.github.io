import{H as i,F as u}from"./ZKqmDZFw.js";import{_ as b,v as p,z as n,x as o,J as f,K as s,L as r,t as x}from"./CMDwfFvD.js";const g={data(){return{formData:{name:"",email:"",message:""}}},methods:{handleSubmit(){console.log(this.formData)}}},v={class:"container mx-auto p-4"};function y(D,e,c,k,l,a){const m=i,d=u;return x(),p("div",null,[n(m),o("div",v,[e[8]||(e[8]=o("h1",{class:"text-3xl font-bold"},"Contact Us",-1)),e[9]||(e[9]=o("p",{class:"mt-4"}," Get in touch with us to discuss your project or learn more about our services. ",-1)),o("form",{class:"mt-8 space-y-4",onSubmit:e[3]||(e[3]=f((...t)=>a.handleSubmit&&a.handleSubmit(...t),["prevent"]))},[o("div",null,[e[4]||(e[4]=o("label",{for:"name",class:"block text-lg font-bold"},"Name",-1)),s(o("input",{type:"text",id:"name","onUpdate:modelValue":e[0]||(e[0]=t=>l.formData.name=t),class:"block w-full px-4 py-2 border border-gray-300 rounded-md"},null,512),[[r,l.formData.name]])]),o("div",null,[e[5]||(e[5]=o("label",{for:"email",class:"block text-lg font-bold"},"Email",-1)),s(o("input",{type:"email",id:"email","onUpdate:modelValue":e[1]||(e[1]=t=>l.formData.email=t),class:"block w-full px-4 py-2 border border-gray-300 rounded-md"},null,512),[[r,l.formData.email]])]),o("div",null,[e[6]||(e[6]=o("label",{for:"message",class:"block text-lg font-bold"},"Message",-1)),s(o("textarea",{id:"message","onUpdate:modelValue":e[2]||(e[2]=t=>l.formData.message=t),class:"block w-full px-4 py-2 border border-gray-300 rounded-md",rows:"5"},null,512),[[r,l.formData.message]])]),e[7]||(e[7]=o("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}," Send ",-1))],32)]),n(d)])}const V=b(g,[["render",y],["__scopeId","data-v-66178767"]]);export{V as default};
