webpackJsonp([1],{"2AYO":function(t,s){},"3Azg":function(t,s){},AXA2:function(t,s){},"C1S/":function(t,s){},HRIN:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"navbar-div"},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark fixed-top",attrs:{id:"sideNav"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link clickable",on:{click:function(s){t.$router.push("/")}}},[t._v("Home")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link clickable",on:{click:function(s){t.$router.push("/hireme")}}},[t._v("Hire Me")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link clickable",on:{click:function(s){t.$router.push("/dateme")}}},[t._v("Date Me")])]),t._v(" "),t._m(2)])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"navbar-brand js-scroll-trigger",attrs:{href:"#page-top"}},[s("span",{staticClass:"d-block d-lg-none"},[this._v("Anwesh Mohanty")]),this._v(" "),s("span",{staticClass:"d-none d-lg-block"},[s("img",{staticClass:"img-profile",attrs:{src:"https://scontent-sin6-1.cdninstagram.com/vp/b51791f732e2023370146f529d31ccfd/5C7252AC/t51.2885-15/e35/42116866_1632851330154845_8463874381676158446_n.jpg",alt:""}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link clickable"},[this._v("Interests")])])}]};var n=a("VU/8")({name:"navbar",data:function(){return{}}},i,!1,function(t){a("2AYO")},null,null).exports,l=(a("K3J8"),{name:"App",components:{"navbar-side":n}}),r={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",[s("navbar-side")],1),this._v(" "),s("div",{staticClass:"app",attrs:{id:"app"}},[s("router-view")],1)])},staticRenderFns:[]};var o=a("VU/8")(l,r,!1,function(t){a("pPs/")},null,null).exports,c=a("/ocq"),d={name:"DescriptionCards",created:function(){},data:function(){return{show_more_data:!1}},methods:{toggle_data:function(){this.show_more_data=!this.show_more_data}},props:{heading:String,description:String,additional_data:String}},v={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"info"},[t._v("\n      "+t._s(t.heading)+"\n    ")]),t._v(" "),a("div",{on:{click:function(s){t.toggle_data()}}},[t._v("\n      "+t._s(t.description)+"\n    ")]),t._v(" "),t.show_more_data?a("div",[t._v("\n      "+t._s(t.additional_data)+"\n  ")]):t._e()])},staticRenderFns:[]};var u={name:"Home",created:function(){},data:function(){return{msg:"Welcome to Your Vue.js App"}},methods:{show_more_data:function(){this.show_more_data=!0}},components:{cards:a("VU/8")(d,v,!1,function(t){a("HRIN")},"data-v-f5d25d72",null).exports}},m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"container-fluid"},[a("section",{staticClass:"introduction",attrs:{id:"about"}},[a("div",{staticClass:"my-auto"},[a("h1",{staticClass:"mb-0"},[t._v("\n          Anwesh Mohanty\n        ")]),t._v(" "),a("div",{staticClass:"subheading mb-5"},[t._v("Silicon Valley, Madhapur, Hyderabad\n          "),a("a",{attrs:{href:"mailto:anwesh063@gmail.com"}},[t._v("anwesh063@gmail.com")])]),t._v(" "),a("p",{staticClass:"lead mb-5"},[t._v("I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.")]),t._v(" "),a("div",{staticClass:"social-icons"},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-linkedin-in"})]),t._v(" "),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-github"})]),t._v(" "),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-twitter"})]),t._v(" "),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-facebook-f"})])])])])])])}]};var f=a("VU/8")(u,m,!1,function(t){a("AXA2")},"data-v-97b9bc92",null).exports,h={name:"About",data:{message:null},created:function(){this.SetAboutMessage()},methods:{SetAboutMessage:function(){this.message="This is an about page. These pages are very important"}},props:{akash:Object}},j={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"col-md-3"},[this._v("\n        "+this._s(this.message)+"\n    ")]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("button")])}]};a("VU/8")(h,j,!1,function(t){a("C1S/")},null,null).exports;var _={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Hi")])},staticRenderFns:[]},p=a("VU/8")({name:"Date-me"},_,!1,null,null,null).exports,g=a("PJh5"),b={name:"Timeline",created:function(){},data:function(){return{timeline:[{StartDate:"2017-06-01",EndDate:null,Organisation:"NowFloats",Title:"Software Engineer",ShowActivity:!1,Activities:["Member of the core back-end team, responsible for creation, deployment and optimization of API's and services","Built partner management system using Vue, .Net Core , MongoDB and PostgreSQL. Features included purchasing and redeeming products, automated commissions as well as renewal and revenue cohorts","Built a customer engagement platform for sales using AWS, MongoDB and Vue. This led to a 50% increase in renewal rates","Modularisation and Migration of core API's to dotnet core and AWS ECS and lambda, which lead to 70% reduction in hosting costs"]},{StartDate:"2013-07-01",EndDate:"2017-05-15",Organisation:"CETB",Title:"Aspiring Engineer",ShowActivity:!1,Activities:["Studied as mechanical engineer during the day","Studied as computer science engineer during the night"]}]}},methods:{Moment:function(t){return g(t)},ShowActivity:function(t){this.timeline[t].ShowActivity=!0}},props:{limit:Number}},C={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h2",{staticStyle:{"text-align":"center"}},[t._v("\n      Timeline\n    ")]),t._v(" "),t._l(t.timeline,function(s,e){return a("div",{key:e,staticClass:"timeline-main"},[a("div",{staticClass:"container mt-5 mb-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"timeline-heading"},[t._v("\n            "+t._s(s.Title)+"\n          ")])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"timeline-sub-heading-1"},[t._v("\n            "+t._s(s.Organisation)+"\n          ")])]),t._v(" "),a("div",{staticClass:"row"},[s.EndDate?a("div",{staticClass:"timeline-sub-heading-2"},[t._v("\n            "+t._s(t.Moment(s.StartDate).format("YYYY-MMM"))+" - "+t._s(t.Moment(s.EndDate).format("YYYY-MMM"))+"\n          ")]):a("div",{staticClass:"timeline-sub-heading-2"},[t._v("\n            "+t._s(t.Moment(s.StartDate).format("YYYY-MMM"))+" - Present\n          ")])]),t._v(" "),a("div",{staticClass:"row"},[a("ul",{staticClass:"timeline"},t._l(s.Activities,function(s,e){return a("li",{key:e},[a("transition",{attrs:{name:"list"}},[a("p",[t._v(t._s(s))])])],1)}))])])])})],2)},staticRenderFns:[]};var k={components:{timeline:a("VU/8")(b,C,!1,function(t){a("3Azg")},"data-v-d1dc9858",null).exports},mixins:[{methods:{add:function(t,s){return t+s},OpenExternalLinkInNewTab:function(t){window.open(t,"_blank")}}}]},w={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("section",{staticClass:"d-flex flex-column",attrs:{id:"external"}},[a("h2",[t._v("\n      Profiles\n    ")]),t._v(" "),a("div",{staticClass:"col-md-12"},[a("button",{staticClass:"btn button-github",on:{click:function(s){t.OpenExternalLinkInNewTab("https://github.com/vozille")}}},[a("i",{staticClass:"fab fa-github"}),t._v(" Github ")]),t._v(" "),a("button",{staticClass:"btn button-linkedin",on:{click:function(s){t.OpenExternalLinkInNewTab("https://www.linkedin.com/in/anwesh-mohanty-497031aa")}}},[a("i",{staticClass:"fab fa-linkedin"}),t._v(" LinkedIn ")]),t._v(" "),a("button",{staticClass:"btn",on:{click:function(s){t.OpenExternalLinkInNewTab("https://drive.google.com/open?id=1599vxf-Kjo44g3rAxddokiR1emJ0GG-z")}}},[a("i",{staticClass:"fa fa-download"}),t._v(" Resume ")])])]),t._v(" "),t._m(0),t._v(" "),a("timeline")],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"skills"}},[a("div",{staticClass:"my-auto"},[a("div",{staticClass:"subheading mb-3"},[t._v("Programming Languages")]),t._v(" "),a("ul",{staticClass:"list-inline dev-icons"},[a("li",{staticClass:"list-inline-item"},[a("div",[t._v("C#")])]),t._v(" "),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-js-square"})]),t._v(" "),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-python"})]),t._v(" "),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-java"})])]),t._v(" "),a("div",{staticClass:"subheading mb-3"},[t._v("Frameworks")]),t._v(" "),a("ul",{staticClass:"list-inline dev-icons"},[a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-vuejs"})]),t._v(" "),a("li",{staticClass:"list-inline-item"},[a("div",[t._v(".NET")])]),t._v(" "),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-node"})]),t._v(" "),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-sass"})])]),t._v(" "),a("div",{staticClass:"subheading mb-3"},[t._v("Tools")]),t._v(" "),a("ul",{staticClass:"list-inline dev-icons"},[a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-git"})]),t._v(" "),a("li",{staticClass:"list-inline-item"},[a("div",[t._v("Mongo")])]),t._v(" "),a("li",{staticClass:"list-inline-item"},[a("div",[t._v("SQL")])]),t._v(" "),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-docker"})]),t._v(" "),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-aws"})]),t._v(" "),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-linux"})]),t._v(" "),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fab fa-windows"})])])])])}]};var y=a("VU/8")(k,w,!1,function(t){a("rrcK")},"data-v-cc55e388",null).exports;e.a.use(c.a);var x=new c.a({mode:"history",routes:[{path:"/",name:"Home",component:f},{path:"/dateme",name:"Timeline",component:p,props:function(t){return{limit:t.query.limit}}},{path:"/hireme",name:"SkillSet",component:y}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:x,components:{App:o},template:"<App/>"})},"pPs/":function(t,s){},rrcK:function(t,s){},uslO:function(t,s,a){var e={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function i(t){return a(n(t))}function n(t){var s=e[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}i.keys=function(){return Object.keys(e)},i.resolve=n,t.exports=i,i.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.dbe5c1514de836bffd4b.js.map