(this["webpackJsonpcbolos-portfolio"]=this["webpackJsonpcbolos-portfolio"]||[]).push([[0],{17:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(16),r=n.n(c),i=(n(32),n(33),n(2)),s=n(4),l=n(7),h=n(6),b=(n(11),n(34),n(47)),j=n(48),u=n(52),d=n(1),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(b.a,{className:"black-bg m-0",children:[Object(d.jsxs)(j.a,{md:9,children:[Object(d.jsx)("h1",{className:"text-bold text-white text-start ml-5 mt-5",children:"Christian Bolos"}),Object(d.jsx)("h2",{className:"text-start h2 ml-5 mb-5",children:"VFS Graduate - Characters/Environments/Concept Art"})]}),Object(d.jsx)(j.a,{className:"align-self-end",md:3,children:Object(d.jsxs)(u.a,{fill:!0,variant:"tabs",className:"justify-content-center mb-1",children:[Object(d.jsx)(u.a.Item,{children:Object(d.jsx)(u.a.Link,{className:"top-nav",eventKey:"portfolio",children:"Portfolio"})}),Object(d.jsx)(u.a.Item,{children:Object(d.jsx)(u.a.Link,{className:"top-nav",eventKey:"contact",children:"Contact"})})]})})]})}}]),n}(a.Component),m=n(50),O=(n(39),n(49)),f=n(51),g=(n(40),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(u.a,{variant:"tabs",className:"justify-content-center my-4",children:[Object(d.jsx)(u.a.Item,{children:Object(d.jsx)(u.a.Link,{className:"gallery-nav",eventKey:"concept-art",children:"Concept Art"})}),Object(d.jsx)(u.a.Item,{children:Object(d.jsx)(u.a.Link,{className:"gallery-nav",eventKey:"illustrations",children:"Illustrations"})}),Object(d.jsx)(u.a.Item,{children:Object(d.jsx)(u.a.Link,{className:"gallery-nav",eventKey:"other-works",children:"Other Works"})})]})}}]),n}(a.Component)),y=(n(17),n(18),n(24)),x=n.n(y),v=n(15),C=function(){function e(t,n,a,o,c,r){Object(i.a)(this,e),this.path=t,this.title=n,this.caption=a,this.thumbnailPath=o,this.thumbnailX=c,this.thumbnailY=r}return Object(s.a)(e,null,[{key:"CreateGallery",value:function(e,t){return e.Settings.map((function(e){var n=null,a=null;return null!=e.title&&(n=Object(d.jsx)("div",{className:"caption-overlay",children:Object(d.jsx)("div",{className:"caption-overlay-inner",children:Object(d.jsx)("div",{className:"caption-text",children:e.title})})})),a=null==e.thumbnailX?{objectFit:"none"}:{objectFit:"cover",objectPosition:e.thumbnailX+" "+e.thumbnailY},Object(d.jsx)("a",{"data-fancybox":t,href:e.path,"data-caption":e.caption,fit:e.fit,children:Object(d.jsxs)("div",{className:"gallery-img",children:[Object(d.jsx)("img",{className:"center-preview",src:e.thumbnailPath,alt:e.caption,style:a}),n]})},e.path)}))}}]),e}(),k=function e(){Object(i.a)(this,e)};k.Settings=[new C("/concept-art/[VFS] Composition Assignment.png","Composition Assignment","Composition Assignment","/concept-art/[VFS] Composition Assignment.png","50%","0"),new C("/concept-art/[VFS] Robin Hood Character Models.png","Robin Hood Character Models","Robin Hood Character Models","/concept-art/thumbnails/Robin hood Chacter Models T.png","50%","0"),new C("/concept-art/[VFS] Robin Hood Model Sheets.png","Robin Hood Model Sheets","Robin Hood Model Sheets","/concept-art/thumbnails/ACA09_Christian_ModelPack(1) T.png","50%","0"),new C("/concept-art/[VFS] Term 2 Character Lineup.png","VFS Term 2 Character Lineup","VFS Term 2 Character Lineup","/concept-art/thumbnails/Term 2 Character Lineup T.png","50%","0"),new C("/concept-art/Book of Canin - Model Sheets.png","Book of Canin - Model Sheets","Book of Canin - Model Sheets","/concept-art/thumbnails/Book of Canin - Model Sheets T.png","50%","0"),new C("/concept-art/Caleb - Character Design.png","Caleb - Character Design","Caleb - Character Design","/concept-art/thumbnails/Caleb - Character Design T.png","50%","0"),new C("/concept-art/Elven Mountain.png","Elven Mountain","Elven Mountain","/concept-art/thumbnails/Elven Mountain T.png","50%","0")];var w=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){v.a.bind('[data-fancybox="concept-art-gallery"]',{preload:10,Thumbs:!1,Image:{zoom:!1,wheel:null},on:{reveal:function(){for(var e=1;e<7;e++){var t=x()('div[data-index="'+e+'"]');0!==t.length&&t.attr("data-image-fit","contain-w")}}}})}},{key:"render",value:function(){var e=C.CreateGallery(k,"concept-art-gallery");return Object(d.jsx)(f.a,{eventKey:"concept-art",children:e})}}]),n}(a.Component),N=function e(){Object(i.a)(this,e)};N.Settings=[new C("/illustrations/Underwater Colony.png","Underwater Colony","Underwater Colony","/illustrations/Underwater Colony.png","45%","0"),new C("/illustrations/Book of Canin Key Art.png","Book of Canin Key Art","Book of Canin Key Art","/illustrations/Book of Canin Key Art.png","59%","0")];var F=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){v.a.bind('[data-fancybox="illustrations-gallery"]',{preload:10,Thumbs:!1,Image:{zoom:!1,wheel:null}})}},{key:"render",value:function(){var e=C.CreateGallery(N,"illustrations-gallery");return Object(d.jsx)(f.a,{eventKey:"illustrations",children:e})}}]),n}(a.Component),S=function e(){Object(i.a)(this,e)};S.Settings=[new C("/other-works/Landscape Painting.png","Landscape Painting","Landscape Painting","/other-works/Landscape Painting.png","50%","0"),new C("/other-works/Vehicle Photobash.png","Vehicle Photobash","Vehicle Photobash","/other-works/Vehicle Photobash.png","88%","0"),new C("/other-works/Ana Fanart.png","Ana Fanart","Ana Fanart","/other-works/Ana Fanart.png","50%","0"),new C("/other-works/Link Fanart.png","Link Fanart","Link Fanart","/other-works/Link Fanart.png","50%","0")];var M=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){v.a.bind('[data-fancybox="other-works-gallery"]',{preload:10,Thumbs:!1,Image:{zoom:!1,wheel:null}})}},{key:"render",value:function(){var e=C.CreateGallery(S,"other-works-gallery");return Object(d.jsx)(f.a,{eventKey:"other-works",children:e})}}]),n}(a.Component),A=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(O.a,{children:[Object(d.jsx)(w,{}),Object(d.jsx)(F,{}),Object(d.jsx)(M,{})]})}}]),n}(a.Component),L=(n(44),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"body-text text-start text-grey ml-5 mt-5",children:[Object(d.jsx)("div",{className:"text-bold",children:"Thank you for your interest in my portfolio! If you would like to contact me you can do so through:"}),Object(d.jsxs)("ul",{className:"my-3",children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"text-bold",children:"Email: "}),Object(d.jsx)("a",{className:"font-italic",href:"mailto:cbolosarts@gmail.com",children:"cbolosarts@gmail.com"})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"text-bold",children:"Twitter: "}),Object(d.jsx)("a",{className:"font-italic",href:"https://twitter.com/ChristianBolos",rel:"noopener noreferrer",target:"_blank",children:"@ChristianBolos"})]})]}),Object(d.jsx)("div",{className:"text-bold",children:"I also do commissions! Email me for more information."})]})}}]),n}(a.Component)),T=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"grey-bg flex-1",children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)(f.a,{eventKey:"portfolio",children:Object(d.jsxs)(m.a,{defaultActiveKey:"concept-art",children:[Object(d.jsx)(g,{}),Object(d.jsx)(A,{})]})}),Object(d.jsx)(f.a,{eventKey:"contact",children:Object(d.jsx)(L,{})})]})})}}]),n}(a.Component);var K=function(){return Object(d.jsx)("div",{className:"App max-height",children:Object(d.jsxs)(m.a,{defaultActiveKey:"portfolio",children:[Object(d.jsx)(p,{}),Object(d.jsx)(T,{})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(K,{})}),document.getElementById("root")),P()}},[[45,1,2]]]);
//# sourceMappingURL=main.1d16c632.chunk.js.map