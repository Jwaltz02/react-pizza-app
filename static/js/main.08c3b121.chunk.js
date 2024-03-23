(this["webpackJsonpreact-waltz-pizza-app"]=this["webpackJsonpreact-waltz-pizza-app"]||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/pizza-logo.c2406571.png"},function(e,a,t){e.exports=t.p+"static/media/PepperoniPizza.81befe2f.jpeg"},function(e,a,t){e.exports=t.p+"static/media/VeggiePizza.5f1d23e0.jpeg"},function(e,a,t){e.exports=t.p+"static/media/MargheritaPizza.92ef7dc2.jpeg"},function(e,a,t){e.exports=t.p+"static/media/HawaiianPizza.9420f4ef.jpeg"},function(e,a,t){e.exports=t.p+"static/media/MeatLoverPizza.5524fff2.jpeg"},function(e,a,t){e.exports=t.p+"static/media/WaltzPizza.b5487f12.jpeg"},function(e,a,t){e.exports=t.p+"static/media/BuildYourOwn.f5ea3643.jpeg"},function(e,a,t){e.exports=t.p+"static/media/MexicanPizza.7f3d971e.jpeg"},function(e,a,t){e.exports=t.p+"static/media/SeafoodPizza.9462178f.jpeg"},function(e,a,t){e.exports=t.p+"static/media/ButterChicken.33d0f899.jpeg"},function(e,a,t){e.exports=t.p+"static/media/AboutPageImage.2905f32c.jpg"},function(e,a,t){e.exports=t.p+"static/media/PizzaContactPage.04b3098b.webp"},function(e,a,t){e.exports=t.p+"static/media/pizza-slideshow1.50d1b93c.jpg"},function(e,a,t){e.exports=t.p+"static/media/pizza-slideshow2.39a07eb8.jpg"},function(e,a,t){e.exports=t.p+"static/media/pizza-slideshow3.d8db1005.jpg"},function(e,a,t){e.exports=t.p+"static/media/pizza-slideshow4.3aa71b17.jpg"},function(e,a,t){e.exports=t(44)},,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),c=t(9),l=t.n(c),r=(t(35),t(36),t(10)),m=t.n(r),o=t(5),s=t(4);t(37);var p=function(){const[e,a]=Object(n.useState)(!1);return window.addEventListener("resize",()=>{a(!1)}),i.a.createElement("div",{className:"navbar"},i.a.createElement("div",{className:"left-side"},console.log(e),i.a.createElement("div",{className:e?"hamburger-menu active":"hamburger-menu",onClick:()=>a(!e)},i.a.createElement(s.c,null)),i.a.createElement("img",{className:"logo",alt:"website logo",src:m.a})),i.a.createElement("ul",{id:"rightSide",className:e?"right-side":"right-side menu-close"},i.a.createElement("li",null,i.a.createElement(o.b,{to:"/react-pizza-app"}," Home ")),i.a.createElement("li",null,i.a.createElement(o.b,{to:"/Menu"}," Menu ")),i.a.createElement("li",null,i.a.createElement(o.b,{to:"/About"}," About ")),i.a.createElement("li",null,i.a.createElement(o.b,{to:"/Contact"}," Contact "))))},u=(t(38),t(6));var d=function(e){let{slides:a}=e;const[t,c]=Object(n.useState)(0);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"home"},i.a.createElement("div",{className:"arrow-box"},i.a.createElement(u.a,{className:"slide-arrow-left",onClick:()=>{c(0!==t?t-1:3)}}),i.a.createElement(u.b,{className:"slide-arrow-right",onClick:()=>{c(3!==t?t+1:0)}})),i.a.createElement("img",{className:"slideImages",alt:"pizza slideshow",src:a[t].image})))},g=(t(39),t(11)),z=t.n(g),f=t(12),E=t.n(f),h=t(13),b=t.n(h),v=t(14),N=t.n(v),w=t(15),P=t.n(w),x=t(16),y=t.n(x),j=t(17),C=t.n(j),k=t(18),F=t.n(k),M=t(19),S=t.n(M),B=t(20),I=t.n(B);const O=[{name:"Pepperoni Pizza",image:z.a,price:15.99},{name:"Vegan Pizza",image:E.a,price:12.99},{name:"Margherita Pizza",image:b.a,price:11.99},{name:"Pineapple Pizza",image:N.a,price:11.99},{name:"Meat Lover Pizza",image:P.a,price:16.99},{name:"Waltz Signature Pizza",image:y.a,price:14.99},{name:"Seafood Pizza",image:S.a,price:16.99},{name:"Build Your Own",image:C.a,price:13.99},{name:"Mexican Style Pizza",image:F.a,price:14.99},{name:"Butter Chicken Pizza",image:I.a,price:14.99}];var W=function(e){let{image:a,name:t,price:n}=e;return i.a.createElement("div",{className:"menu-items"},i.a.createElement("div",{className:"menu-image",style:{backgroundImage:"url(".concat(a,")")}}),i.a.createElement("div",{className:"name-price"},i.a.createElement("h5",{className:"menu-name"}," ",t," "),i.a.createElement("p",{className:"menu-price"}," $",n)))};var A=function(){return i.a.createElement("div",{className:"menu"},i.a.createElement("h1",{className:"menu-title"},"Our Menu"),i.a.createElement("div",{className:"menu-list"},O.map((e,a)=>i.a.createElement(W,{key:a,image:e.image,name:e.name,price:e.price}))))};t(40);const L=["Welcome to Waltz Pizza Cafe, where passion meets taste. Founded in 2002, our mission is simple: crafting the perfect slice to bring joy to every bite. From our humble beginnings in a small kitchen, we've grown into a community favorite, driven by our commitment to quality, authenticity, and innovation. We believe great pizza starts with the finest ingredients and traditional techniques. Our handcrafted dough, simmered sauces, and locally sourced toppings ensure each pizza is a flavorful masterpiece. Beyond pizza, we provide exceptional service, creating a warm atmosphere for families and friends. Committed to sustainability, we strive to make a positive impact by reducing our carbon footprint and supporting local initiatives. Join us on this delicious journey as we redefine pizza-making, one slice at a time. Thank you for choosing Waltz Pizza Cafe, where every pizza is made with love."];var q=t(21),T=t.n(q);var J=function(){return i.a.createElement("div",{className:"about"},i.a.createElement("div",{className:"about-top",style:{backgroundImage:"url(".concat(T.a,")")}}),i.a.createElement("div",{className:"about-bottom"},i.a.createElement("h1",null,"ABOUT US"),i.a.createElement("p",{className:"about-paragraph"},L)))},U=(t(41),t(22)),H=t.n(U);var V=function(){return i.a.createElement("div",{className:"contact-page"},i.a.createElement("div",{className:"left-side-contact",style:{backgroundImage:"url(".concat(H.a,")")}}),i.a.createElement("div",{className:"right-side-contact"},i.a.createElement("h1",null,"Contact Us"),i.a.createElement("form",{id:"contact-form",method:"get",action:"/contact",className:"contact-form"},i.a.createElement("label",{htmlFor:"name"},"Full Name"),i.a.createElement("input",{id:"name",placeholder:"Enter Full Name...",type:"text",required:!0}),i.a.createElement("label",{htmlFor:"email"},"Email"),i.a.createElement("input",{id:"email",placeholder:"Enter Email...",type:"email",required:!0}),i.a.createElement("label",{htmlFor:"message"},"Message"),i.a.createElement("textarea",{id:"message",rows:"6",placeholder:"Enter message..."})),i.a.createElement("button",{type:"submit",form:"contact-form"},"Submit Form")))};t(42);var Y=function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("div",{className:"socialMedia"},i.a.createElement(s.b,{className:"social-icons"}),i.a.createElement(s.a,{className:"social-icons"}),i.a.createElement(s.e,{className:"social-icons"}),i.a.createElement(s.d,{className:"social-icons"})),i.a.createElement("p",{style:{fontFamily:"Monospace",color:"white",paddingBottom:"10px"}}," \xa9 2024, Waltz Pizza Cafe"))},D=t(23),R=t.n(D),$=t(24),G=t.n($),K=t(25),Q=t.n(K),X=t(26),Z=t.n(X),_=(t(43),t(3));var ee=function(){const e=[{image:R.a,title:"image1"},{image:G.a,title:"image2"},{image:Q.a,title:"image3"},{image:Z.a,title:"image4"}];return i.a.createElement("div",{className:"App"},i.a.createElement(o.a,null,i.a.createElement(p,null),i.a.createElement(_.c,null,i.a.createElement(_.a,{path:"/react-pizza-app",element:i.a.createElement(d,{slides:e})}),i.a.createElement(_.a,{path:"/Menu",element:i.a.createElement(A,null)}),i.a.createElement(_.a,{path:"/About",element:i.a.createElement(J,null)}),i.a.createElement(_.a,{path:"/Contact",element:i.a.createElement(V,null)})),i.a.createElement(Y,null)))};var ae=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then(a=>{let{getCLS:t,getFID:n,getFCP:i,getLCP:c,getTTFB:l}=a;t(e),n(e),i(e),c(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ee,null))),ae()}],[[27,1,2]]]);
//# sourceMappingURL=main.08c3b121.chunk.js.map