(this.webpackJsonpcreamheroes=this.webpackJsonpcreamheroes||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(3),r=n.n(s),i=(n(12),n(4)),o=n(5),h=n(7),u=n(6),l=(n(13),n(14),n(15),n(0)),d=function(e){var t=e.cat;return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(t.id,"?set=set4&size=180x180"),alt:""}),Object(l.jsx)("h2",{children:t.name}),Object(l.jsx)("p",{children:t.email})]})},j=function(e){var t=e.cats;return Object(l.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(l.jsx)(d,{cat:e},e.id)}))})},f=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(l.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),b=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={cats:[],searchField:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({cats:t})}))}},{key:"render",value:function(){var e=this.state,t=e.cats,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Robohash Cats"}),Object(l.jsx)(f,{placeholder:"Search cats",handleChange:this.handleChange}),Object(l.jsx)(j,{cats:c})]})}}]),n}(c.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.69704035.chunk.js.map