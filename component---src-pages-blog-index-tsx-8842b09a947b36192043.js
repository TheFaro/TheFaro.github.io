"use strict";(self.webpackChunkfanelesibonge_portfolio=self.webpackChunkfanelesibonge_portfolio||[]).push([[643],{2460:function(e,t,l){l.d(t,{Z:function(){return o}});var a=l(7294),n=l(1883),r="layout-module--nav-link-item--a5f0a";var o=e=>{let{pageTitle:t,children:l}=e;return a.createElement("div",{className:"layout-module--container--78b04"},a.createElement("header",{className:"layout-module--site-title--e4dea"},"My Gatsby Site"),a.createElement("nav",null,a.createElement("ul",{className:"layout-module--nav-links--1113b"},a.createElement("li",{className:r},a.createElement(n.rU,{to:"/"},"Home")),a.createElement("li",{className:r},a.createElement(n.rU,{to:"/about"},"About")),a.createElement("li",{className:r},a.createElement(n.rU,{to:"/blog",className:r},"Blog")))),a.createElement("main",null,a.createElement("h1",{className:"layout-module--heading--f158c"},t),l))}},4001:function(e,t,l){var a=l(7294);t.Z=e=>{let{title:t}=e;return a.createElement("title",null,t," | My Gatsby Site")}},8133:function(e,t,l){l.r(t),l.d(t,{Head:function(){return c}});var a=l(7294),n=l(2460),r=l(4001),o=l(1883);const c=()=>a.createElement(r.Z,{title:"My Blog Posts"});t.default=e=>{let{data:t}=e;return console.table(t.allMdx.edges[0].node.frontmatter),a.createElement(n.Z,{pageTitle:"My Blog Posts"},t.allMdx.edges.map((e=>a.createElement("article",{key:e.node.id},a.createElement("h2",null,a.createElement(o.rU,{to:"/blog/"+e.node.frontmatter.slug},e.node.frontmatter.title)),a.createElement("p",null,"Posted: ",e.node.frontmatter.date),a.createElement("p",null,e.node.excerpt)))))}}}]);
//# sourceMappingURL=component---src-pages-blog-index-tsx-8842b09a947b36192043.js.map