(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,function(e,a,t){},,,,,function(e,a,t){e.exports=t.p+"static/media/trade-jack.175dbd0e.png"},function(e,a,t){e.exports=t.p+"static/media/vivere.f3275bbf.png"},function(e,a,t){e.exports=t.p+"static/media/weather-app.f13f6b34.png"},function(e,a,t){e.exports=t.p+"static/media/mosh.93d9f9cd.png"},,,,function(e,a,t){e.exports=t(23)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(3),c=t.n(l);t(19);function i(){return r.a.createElement("div",null,r.a.createElement("nav",{class:"fixed-bottom footer text-center"},r.a.createElement("div",{clas:"row"},r.a.createElement("p",{class:"navbar-brand copyright"},"Copyright @ Nate Ginn 2020")),r.a.createElement("div",{clas:"row"},r.a.createElement("a",{class:"navbar-brand",href:"https://github.com/jittel",target:"_blank"},"Github"))))}var o=t(4),s=t(5),m=t(12),u=t(6),d=t(13);t(2);function h(){return r.a.createElement("div",{class:"row"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"}),r.a.createElement("div",{className:"col-md-8 thing"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",{className:"text-center about-me"},"About Me")),r.a.createElement("img",{src:"https://ca.slack-edge.com/TQ1KWR5HU-UQKNHH7QE-5caa6237aac7-512",alt:"me",id:"bio-image"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("p",{className:"text"},"A little happy sunlight shining through there. This is gonna be a happy little seascape. Just let your mind wander and enjoy. This should make you happy.",r.a.createElement("br",null),r.a.createElement("br",null),"You've got to learn to fight the temptation to resist these things. Just let them happen. Isn't that fantastic that you can create an almighty tree that fast? I'm gonna start with a little Alizarin crimson and a touch of Prussian blue It's a very cold picture, I may have to go get my coat. It\u2019s about to freeze me to death. And maybe a little bush lives there.",r.a.createElement("br",null),r.a.createElement("br",null),"Just beat the devil out of it. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. Let your imagination be your guide.")))),r.a.createElement("div",{className:"col-md-2"})))}var p=t(11);t(20);function g(e){return r.a.createElement("div",{className:"CardBody card"},r.a.createElement("img",{src:e.card.image,class:"card-img-top",alt:"pic"}),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},e.card.title),r.a.createElement("p",{class:"card-text"},e.card.body),r.a.createElement("a",{href:e.card.link,class:"btn btn-primary",target:"_blank"},e.card.button)))}t(21);function v(e){return r.a.createElement("div",{className:"Card col-3"},r.a.createElement(g,{card:e.card}))}var b=t(7),E=t.n(b),f=t(8),y=t.n(f),k=t(9),w=t.n(k),C=t(10),N=t.n(C);function P(){var e=Object(n.useState)([{id:1,title:"Trade Jack",body:"a reverse bidding application for work",link:"https://trade-jack.herokuapp.com",image:E.a,button:"Click Me!"},{id:2,title:"Vivere",body:"plan your night on food and drink based on your current location",link:"https://gregreneris.github.io/Project1/",image:y.a,button:"Click Me!"},{id:3,title:"Weather App",body:"gives you a one day and five day forecast",link:"https://jittel.github.io/weather-app/",image:w.a,button:"Click Me!"},{id:4,title:"Mosh",body:"Local musician social networking app",link:"https://mosh-app.herokuapp.com/",image:N.a,button:"Click Me!"}]),a=Object(p.a)(e,2),t=a[0];a[1];return r.a.createElement("div",null,r.a.createElement("div",{class:"row"},r.a.createElement(v,{card:t[0]}),r.a.createElement(v,{card:t[1]}),r.a.createElement(v,{card:t[2]}),r.a.createElement(v,{card:t[3]})))}function j(e){return r.a.createElement("div",null,r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{class:"navbar-nav mr-auto"},r.a.createElement("li",{class:"nav-item active"},r.a.createElement("a",{class:"nav-link",href:"#about",onClick:function(){return e.handlePageChange("About")}},"About ",r.a.createElement("span",{class:"sr-only"},"(current)"))),r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link",href:"#gallery",onClick:function(){return e.handlePageChange("Gallery")}},"Gallery"))))))}var x=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={currentPage:"About"},t.handlePageChange=function(e){t.setState({currentPage:e})},t.renderPage=function(){return"About"===t.state.currentPage?r.a.createElement(h,null):"Gallery"===t.state.currentPage?r.a.createElement(P,null):void 0},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement(j,{currentPage:this.state.currentPage,handlePageChange:this.handlePageChange}),this.renderPage()))}}]),a}(n.Component);t(22);var A=function(){return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(i,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[14,1,2]]]);
//# sourceMappingURL=main.164b92b7.chunk.js.map