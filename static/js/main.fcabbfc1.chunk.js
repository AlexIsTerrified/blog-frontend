(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{139:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a.n(r),s=(a(95),a(96),a(12)),o=a(13),i=a(15),u=a(14),m=a(10),h=a(27),d=a(25),p=a.n(d),g=a(36),v=a.n(g),E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={width:window.innerWidth,anchor:null},e.handleClick=function(t){e.setState({anchor:t.currentTarget})},e.handleClose=function(){e.setState({anchor:null})},e}return Object(o.a)(a,[{key:"menuCl",value:function(){var e=p()(".menu"),t=p()(" nav");e.hasClass("close")?(e.removeClass("close"),t.removeClass("menu-display")):(e.addClass("close"),t.addClass("menu-display"))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"menu",onClick:this.menuCl},l.a.createElement("div",{className:"menu-1"}),l.a.createElement("div",{className:"menu-2"}),l.a.createElement("div",{className:"menu-3"})),l.a.createElement("nav",null,l.a.createElement("div",{className:"center"},l.a.createElement("div",null,l.a.createElement(m.b,{to:"/",target:"blank"},l.a.createElement("img",{src:v.a}))),l.a.createElement("span",null,l.a.createElement(m.c,{id:"3",onClick:this.menuCl,to:"/Blogs",activeClassName:"active-nav"},"BLOGS")),l.a.createElement("span",null,l.a.createElement("a",{id:"2",onClick:this.menuCl},"ABOUT")),l.a.createElement("span",null,l.a.createElement(m.c,{id:"1",onClick:this.menuCl,to:"/",activeClassName:"active-nav"},"HOME")))))}}]),a}(n.Component),f=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={blogs:[],loaded:!1},e}return Object(o.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;fetch("https://blog14710.herokuapp.com/").then((function(e){return e.text()})).then((function(t){return e.setState({blogs:JSON.parse(t),loaded:!0})})).catch((function(e){return e}))}},{key:"loaded",value:function(){var e=this;return this.state.loaded?l.a.createElement("div",{className:"page"},l.a.createElement("h1",null,"Blogs"),l.a.createElement("div",{className:"grid"},this.state.blogs.map((function(t,a){return a<e.state.blogs.length-1?l.a.createElement(m.b,{to:"./blogs/"+t._id,key:a},l.a.createElement("div",{className:"blog-item",style:{backgroundImage:"url(https://blog14710.herokuapp.com/photo/"+t._id+")"}},l.a.createElement("i",null,t.date.slice(0,10)),l.a.createElement("a",null,t.name))):void 0})))):l.a.createElement("div",{className:"lds-roller"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null))}},{key:"render",value:function(){return l.a.createElement("section",null,this.loaded())}}]),a}(n.Component),b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={home:null,blogs:[]},e}return Object(o.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;fetch("https://blog14710.herokuapp.com/home").then((function(e){return e.text()})).then((function(t){return e.setState({home:JSON.parse(t)})})).catch((function(e){return e})),fetch("https://blog14710.herokuapp.com/").then((function(e){return e.text()})).then((function(t){return e.setState({blogs:JSON.parse(t),loaded:!0})})).catch((function(e){return e}))}},{key:"gethome",value:function(){var e=this;return null==this.state.home?l.a.createElement("div",{className:"lds-roller"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)):l.a.createElement("div",{className:"page"},l.a.createElement("div",{className:"blog"},l.a.createElement("h1",null,this.state.home.name),l.a.createElement("div",{className:"head-img"},l.a.createElement("img",{src:"https://blog14710.herokuapp.com/home/photo/"})),l.a.createElement("div",{style:{height:"20px"}}),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.home.doc}}))),l.a.createElement("div",{style:{height:"50px"}}),l.a.createElement("h1",null,"Latest Blogs"),l.a.createElement("div",{className:"grid"},this.state.blogs.map((function(t,a){return a<3&&a<e.state.blogs.length-1?l.a.createElement(m.b,{to:"./blogs/"+t._id,key:a},l.a.createElement("div",{className:"blog-item",style:{backgroundImage:"url(https://blog14710.herokuapp.com/photo/"+t._id+")"}},l.a.createElement("i",null,t.date.slice(0,10)),l.a.createElement("a",null,t.name))):void 0}))))}},{key:"render",value:function(){return l.a.createElement("section",null,this.gethome())}}]),a}(n.Component),y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){p()(window).scroll((function(){p()(window).scrollTop()>1?p()(".header").css({opacity:1-p()(window).scrollTop()/350}):p()(".header").css({opacity:1})}))}},{key:"render",value:function(){return l.a.createElement("section",{className:"head"},l.a.createElement("div",{className:"header"},l.a.createElement("span",{className:"name"},"This weird blog"),l.a.createElement("p",null,"Blog site with a ReactJS front end and a NodeJS backend and mongodb database.")))}}]),a}(n.Component),k=a(53),S=a(17),O=a.n(S),x=a(28),w=a(171),N=a(172),j=a(38),C=a.n(j),A=a(39),_=a(79),B=a.n(_),J=a(80),F=a.n(J),M=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(m.a,null,l.a.createElement(h.d,null,l.a.createElement(h.b,{path:"/Admin",component:T,exact:!0}),l.a.createElement(h.b,{path:"/Admin/AddBlog",component:W})))}}]),a}(n.Component),T=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={logoff:!1},e.setSession=Object(x.a)(O.a.mark((function t(){var a,n,l;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.username,n=e.state.password,t.next=4,new FormData;case 4:return l=t.sent,t.next=7,l.set("username",e.state.username);case 7:return t.next=9,l.set("password",e.state.password);case 9:return console.log(e.state),t.next=12,C.a.post("https://blog14710.herokuapp.com/admin",{username:a,password:n}).then((function(t){t.data?(A.remove("login"),A.set("login",{name:e.state.username,pass:e.state.password},{expires:2}),e.setState({logoff:!1}),console.log(t)):e.setState({logoff:!0})}));case 12:case"end":return t.stop()}}),t)}))),e.getSession=function(){var e=Object(x.a)(O.a.mark((function e(t,a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.get("login");case 2:return e.sent,e.next=5,C.a.post("https://blog14710.herokuapp.com/admin",{username:t,password:a}).then((function(e){return e.data?l.a.createElement(h.a,{to:"/Admin/AddBlog"}):l.a.createElement(h.a,{to:"/Admin"})}));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(k.a)({},a,n)),console.log("slknioen")},e.loginCheck=function(){return e.state.logoff?l.a.createElement("b",null,"login fail"):l.a.createElement(h.a,{to:"/Admin/AddBlog"})},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("section",null,l.a.createElement("div",{className:"page"},this.loginCheck(),l.a.createElement("form",null,l.a.createElement(w.a,{label:"USERNAME",name:"username",className:"classes.margin",onChange:this.handleChange}),l.a.createElement(w.a,{label:"PASSWORD",name:"password",type:"password",className:"classes.margin",onChange:this.handleChange}),l.a.createElement(N.a,{variant:"contained",color:"primary",component:"span",type:"submit",onClick:this.setSession},"Login"))))}}]),a}(n.Component),W=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={login:!0},e.getSession=function(){var t=Object(x.a)(O.a.mark((function t(a,n){var l;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.get("login");case 2:return l=t.sent,console.log(JSON.parse(l)),t.next=6,C.a.post("https://blog14710.herokuapp.com/admin",{username:JSON.parse(l).name,password:JSON.parse(l).pass}).then((function(t){t.data?console.log("logged dawggg"):e.setState({login:!1})}));case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(k.a)({},a,n)),console.log("slknioen")},e.handleEditor=function(t,a){var n=a.getData();e.setState({editor:n})},e.handleFile=function(t){var a=t.target.files[0];e.setState({picture:a})},e.upload=Object(x.a)(O.a.mark((function t(){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new FormData;case 2:return a=t.sent,t.next=5,a.set("name",e.state.title);case 5:return t.next=7,a.set("doc",e.state.editor);case 7:return t.next=9,a.set("picture",e.state.picture);case 9:return t.next=11,C.a.post("https://blog14710.herokuapp.com/admin/add",a).then((function(t){t.data?console.log("yeah nigga"):(e.setState({logoff:!0}),e.loginCheck())}));case 11:case"end":return t.stop()}}),t)}))),e}return Object(o.a)(a,[{key:"redirect",value:function(){if(!this.state.login)return l.a.createElement(h.a,{to:"/Admin"})}},{key:"componentWillMount",value:function(){this.getSession("terrible","afkmbsmk")}},{key:"render",value:function(){return l.a.createElement("section",null,this.redirect(),l.a.createElement("div",{className:"page"},l.a.createElement("form",null,l.a.createElement(w.a,{label:"Blog Title",className:"blog-title",name:"title",onChange:this.handleChange}),l.a.createElement(N.a,{variant:"contained",component:"label"},"Upload Display Picture",l.a.createElement("input",{type:"file",style:{display:"none"},name:"picture",onChange:this.handleFile})),l.a.createElement("div",{style:{height:"20px"}}),l.a.createElement(B.a,{editor:F.a,onChange:this.handleEditor}),l.a.createElement("div",{style:{height:"20px"}}),l.a.createElement(N.a,{variant:"contained",component:"span",type:"submit",onClick:this.upload},"Submit"))))}}]),a}(n.Component),D=a(169),U=a(170),I=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={blogs:[],blog:[],loaded:!1,prev:null,next:null,curr:null},e}return Object(o.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var e=Object(x.a)(O.a.mark((function e(){var t,a=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.match.params.blog;case 2:return t=e.sent,e.next=5,fetch("https://blog14710.herokuapp.com/blogs/"+t).then((function(e){return e.text()})).then((function(e){return a.setState({blog:JSON.parse(e)})})).catch((function(e){return e}));case 5:return e.next=7,fetch("https://blog14710.herokuapp.com/").then((function(e){return e.text()})).then((function(e){return JSON.parse(e)})).then((function(e){e.map((function(t,n){t._id==a.state.blog[0]._id&&(n<=1?a.setState({prev:n}):a.setState({prev:n-1}),n>=e.length-1?a.setState({next:n}):a.setState({next:n+1}),a.setState({curr:n})),a.setState({loaded:!0})})),a.setState({blogs:e})})).catch((function(e){return e}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillReceiveProps",value:function(){var e=Object(x.a)(O.a.mark((function e(t){var a,n=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loaded:!1,blogs:[],blog:[]}),e.next=3,t.match.params.blog;case 3:return a=e.sent,e.next=6,fetch("https://blog14710.herokuapp.com/blogs/"+a).then((function(e){return e.text()})).then((function(e){return n.setState({blog:JSON.parse(e)})})).catch((function(e){return e}));case 6:return e.next=8,fetch("https://blog14710.herokuapp.com/").then((function(e){return e.text()})).then((function(e){return JSON.parse(e)})).then((function(e){e.map((function(t,a){t._id===n.state.blog[0]._id&&(a<=0?n.setState({prev:a}):n.setState({prev:a-1}),a>=e.length-2?n.setState({next:a}):n.setState({next:a+1}),n.setState({curr:a})),n.setState({loaded:!0})})),n.setState({blogs:e})})).catch((function(e){return e}));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"blognav",value:function(){return null!=this.state.blogs[0]?this.state.curr<=0&&this.state.curr>=this.state.blogs.length-1?void 0:this.state.curr<=0?l.a.createElement("section",null,l.a.createElement("a",null),l.a.createElement(m.b,{className:"right",to:"/Blogs/"+this.state.blogs[this.state.next]._id},l.a.createElement(D.a,null),l.a.createElement("div",null,l.a.createElement("a",null,this.state.blogs[this.state.next].name),l.a.createElement("i",null,this.state.blogs[this.state.next].date.slice(0,15))))):this.state.curr>=this.state.blogs.length-2?l.a.createElement("section",null,l.a.createElement(m.b,{className:"left",to:"./"+this.state.blogs[this.state.prev]._id},l.a.createElement(U.a,null),l.a.createElement("div",null,l.a.createElement("a",null,this.state.blogs[this.state.prev].name),l.a.createElement("i",null,this.state.blogs[this.state.prev].date.slice(0,15)))),l.a.createElement("a",null)):l.a.createElement("section",null,l.a.createElement(m.b,{className:"left",to:"./"+this.state.blogs[this.state.prev]._id},l.a.createElement(U.a,null),l.a.createElement("div",null,l.a.createElement("a",null,this.state.blogs[this.state.prev].name),l.a.createElement("i",null,this.state.blogs[this.state.prev].date.slice(0,15)))),l.a.createElement(m.b,{className:"right",to:"/Blogs/"+this.state.blogs[this.state.next]._id},l.a.createElement(D.a,null),l.a.createElement("div",null,l.a.createElement("a",null,this.state.blogs[this.state.next].name),l.a.createElement("i",null,this.state.blogs[this.state.next].date.slice(0,15))))):void 0}},{key:"loaded",value:function(){var e=this;return this.state.loaded?l.a.createElement("div",{className:"page"},this.state.blog.map((function(t,a){return l.a.createElement("div",{className:"blog",key:a},l.a.createElement("h1",null,t.name),l.a.createElement("div",{className:"head-img"},l.a.createElement("img",{src:"https://blog14710.herokuapp.com/photo/"+t._id})),l.a.createElement("i",null,t.date.slice(0,15)),l.a.createElement("div",{style:{height:"20px"}}),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.doc}})),e.blognav())}))):l.a.createElement("div",{className:"lds-roller"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null))}},{key:"render",value:function(){return l.a.createElement("section",null,this.loaded())}}]),a}(n.Component),L=a(45),R=(a(137),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ready:!1},e.GhostPlaceholder=function(){return l.a.createElement("div",{className:"my-placeholder"},l.a.createElement(L.RectShape,{color:"gray",style:{width:200,height:100}}),l.a.createElement(L.TextBlock,{rows:6,color:"blue"}))},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(m.a,null,l.a.createElement(E,null),l.a.createElement("div",{className:"main"},l.a.createElement(y,null),l.a.createElement(h.d,null,l.a.createElement(h.b,{path:"/",component:b,exact:!0}),l.a.createElement(h.b,{path:"/Blogs",component:f,exact:!0}),l.a.createElement(h.b,{path:"/Blogs/:blog",name:"blog",component:I,exact:!0}),l.a.createElement(h.b,{path:"/Admin",component:M}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(R,null)),document.getElementById("main")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},90:function(e,t,a){e.exports=a(139)},95:function(e,t,a){},96:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.fcabbfc1.chunk.js.map