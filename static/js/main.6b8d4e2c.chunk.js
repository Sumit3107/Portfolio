(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/ourblog.eb23289e.png"},21:function(e,a,t){e.exports=t.p+"static/media/timetracker.a4e0a9b1.png"},22:function(e,a,t){e.exports=t.p+"static/media/tour.b9490746.png"},23:function(e,a,t){e.exports=t.p+"static/media/diltobaccha.083b10be.mp4"},24:function(e,a,t){e.exports=t.p+"static/media/ektarfa.c298d61f.mp4"},25:function(e,a,t){e.exports=t.p+"static/media/sumit.2b7817d1.jpg"},26:function(e,a,t){e.exports=t.p+"static/media/logo.0b4e3127.jpg"},27:function(e,a,t){e.exports=t.p+"static/media/basic.83c8ce4e.jpg"},28:function(e,a,t){e.exports=t(42)},33:function(e,a,t){},39:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),c=t.n(l),s=(t(33),t(6)),m=t(7),o=t(9),i=t(8),d=t(1),u=t(10),p=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar navbar-expand-md navbar-dark bg-light",id:"navbar"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(u.b,{to:"/portfolio"},r.a.createElement("img",{className:"logo rounded-circle",src:this.props.user.logo,alt:"logo"})),r.a.createElement("h1",{className:"navbar-brand ml-3",style:{color:"white"}},this.props.user.name)),r.a.createElement("ul",{className:"navbar-nav w-100 float-right"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(u.b,{className:" col-2 nav-link lin",to:"/portfolio/projects"},"Projects")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(u.b,{className:"nav-link lin",to:"/portfolio/resume"},"Resume")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(u.b,{className:"nav-link lin",to:"/portfolio/videos"},"Videos")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(u.b,{className:"nav-link lin",to:"/portfolio/about"},"About")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(u.b,{className:"nav-link lin",to:"/portfolio/contact"},"Contact Us"))))}}]),t}(n.Component),E=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron p-4",id:"jumbo"},r.a.createElement("h1",{className:"col-12"},"Sumit Kumar"),r.a.createElement("hr",null),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"sumit col-md-4 col-sm-12 offset-md-1 shadow-lg p-3 mb-5 rounded"},r.a.createElement("img",{className:"w-100",id:"sumit",src:this.props.user.image,alt:"sumit"})),r.a.createElement("div",{className:"info col-md-6 offset-md-1 col-sm-12  "},r.a.createElement("h3",{className:"lead"},"A front-end web developer with combine patience, determination and persistence to troubleshoot client issues. Also,I love to Dance."),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("img",{className:"col-12 w-100",src:this.props.user.image2,alt:"basic"}))))),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Featured projects"),r.a.createElement("hr",null),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-md-7 col-sm-12 shadow-lg p-3 mb-5 rounded"},r.a.createElement("img",{className:"w-100",src:this.props.projects[0].image,alt:"ourblog"})),r.a.createElement("div",{className:"col-md-4 col-sm-12 offset-1 col-sm-12"},r.a.createElement("h2",{className:"display-4 text-center",style:{color:"blue"}},this.props.projects[0].name),r.a.createElement("hr",null),r.a.createElement("h5",{className:"lead"},this.props.projects[0].description),r.a.createElement("strong",null,"Technology used:"),r.a.createElement("ul",null,this.props.projects[0].tech.map((function(a){return r.a.createElement("li",{key:e.props.projects[0].tech.indexOf(a)},a)}))))),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("h2",{className:"ml-3"},"Dance")),r.a.createElement("hr",null),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-md-4 col-sm-12"},r.a.createElement("h2",{className:"display-4 text-center",style:{color:"blue"}},this.props.videos[0].name),r.a.createElement("hr",null),r.a.createElement("h5",{className:"lead"},"A lyrical dance performace by me on one of the best song of ",this.props.videos[0].artist,"."),r.a.createElement("ul",null,r.a.createElement("li",null,"Dance-style: Lyrical"),r.a.createElement("li",null,"Song: ",this.props.videos[0].name," by ",this.props.videos[0].artist),r.a.createElement("li",null,"Performed by: Sumit Kumar"))),r.a.createElement("div",{className:"col-md-7 offset-1 col-sm-12 shadow-lg p-3 mb-5 rounded"},r.a.createElement("video",{className:"w-100",controls:!0},r.a.createElement("source",{src:this.props.videos[0].video,type:"video/mp4"}),r.a.createElement("source",{src:this.props.videos[0].video,type:"video/ogg"}))))))}}]),t}(n.Component),h=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"projectback"},r.a.createElement("div",{className:"jumbotron",id:"jumbo"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-md-6 col-sm-6"},r.a.createElement("center",null,r.a.createElement("h1",{className:"display-1"},"My Projects")))))),r.a.createElement("div",{className:"container"},this.props.projects.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("h2",{className:"text-center mt-5",style:{color:"black"}},e.name),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mb-3 col-sm-12 shadow-lg rounded"},r.a.createElement("img",{className:"w-100 ml-3 mt-3",src:e.image,alt:"ourblog"})),r.a.createElement("div",{className:"col-md-5 col-sm-12 offset-1 col-sm-12"},r.a.createElement("h5",{className:"lead"},e.description),r.a.createElement("strong",null,"Technology used:"),r.a.createElement("ul",null,e.tech.map((function(a){return r.a.createElement("li",{key:e.tech.indexOf(a)},a)})))),r.a.createElement("hr",null)))}))))}}]),t}(n.Component),v=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"footer p-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-4"},r.a.createElement("h1",null,"Sumit Kumar")),r.a.createElement("div",{className:"col-5 offset-3"},r.a.createElement("div",{className:"row mb-2"},r.a.createElement("a",{href:"https://github.com/Sumit3107",target:"_blank"},r.a.createElement("i",{className:"fa fa-github ","aria-hidden":"true"}),r.a.createElement("span",{className:"ml-2"},"Github"))),r.a.createElement("div",{className:"row mb-2"},r.a.createElement("a",{href:"https://www.linkedin.com/in/sumit-kumar-938326148",target:"_blank"},r.a.createElement("i",{className:"fa fa-linkedin ","aria-hidden":"true"}),r.a.createElement("span",{className:"ml-2"},"Linkdein"))),r.a.createElement("div",{className:"row mb-2"},r.a.createElement("a",{href:"https://instagram.com/roy.sumit31?igshid=1l8cmlxx4svca",target:"_blank"},r.a.createElement("i",{className:"fa fa-instagram ","aria-hidden":"true"}),r.a.createElement("span",{className:"ml-2"},"Instagram"))))))),r.a.createElement("div",{id:"copy"},r.a.createElement("center",null,r.a.createElement("i",{className:"fa fa-copyright"}),r.a.createElement("span",{className:"ml-1"},"2020. All rights reserved."))))}}]),t}(n.Component),b=t(20),f=t.n(b),g=t(21),N=t.n(g),j=t(22),w=t.n(j),k=[{id:0,name:"Our Blog",image:f.a,description:"A simple blog including different kinds of cupcakes, icecreams and cakes.",tech:["HTML","CSS","Javascript"]},{id:1,name:"Time Tracker",image:N.a,description:"Front End of a time tracker website made using React.",tech:["HTML","CSS","Javascript","React"]},{id:2,name:"Tour",image:w.a,description:"Front End of a Tour website.",tech:["HTML","CSS","SASS"]}],y=t(23),O=t.n(y),x=t(24),S=t.n(x),T=[{id:0,name:"Dil",video:O.a,artist:"Rahat Fateh Ali Khan"},{id:1,name:"Ek Tarfa",video:S.a,artist:"Darshan Raval"}],C=(t(39),t(25)),A=t.n(C),D=t(26),K=t.n(D),L=t(27),M=t.n(L),R={name:"Sumit Kumar",description:"",image:A.a,logo:K.a,image2:M.a},F=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={projects:k,videos:T,user:R},n}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(p,{user:this.state.user}),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/portfolio",render:function(a){return r.a.createElement(E,Object.assign({projects:e.state.projects,videos:e.state.videos,user:e.state.user},a))}}),r.a.createElement(d.b,{exact:!0,path:"/portfolio/projects",render:function(a){return r.a.createElement(h,Object.assign({projects:e.state.projects,user:e.state.user},a))}}),r.a.createElement(d.a,{from:"/",to:"/portfolio"})),r.a.createElement(v,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(40),t(41);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null,r.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.6b8d4e2c.chunk.js.map