(this.webpackJsonphighcharts=this.webpackJsonphighcharts||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),o=(a(83),a(84),a(85),a(86),a(40)),i=a(4),u=a(5),m=a(7),s=a(6),h=a(21),d=a.n(h),p=a(27),E=a.n(p),f=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={myChart:""},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,{highcharts:d.a,options:{title:{text:"My chart"},series:[{data:[1,2,3,3,2,1,2,20,9,6,8,3,9,1]}]}}),"            ")}}]),a}(r.a.Component),v=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={myChart:""},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,{highcharts:d.a,options:{chart:{type:"bar"},title:{text:"Fruit Consumption"},xAxis:{categories:["Apples","Bananas","Oranges"]},yAxis:{title:{text:"Fruit eaten"}},series:[{name:"Jane",data:[1,0,4]},{name:"John",data:[5,7,3]}]}}),"            ")}}]),a}(r.a.Component),b=a(30),C=a.n(b),O=a(39),j=a.n(O);j()(C.a.Highcharts);var g=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={myChart:""},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C.a,{config:{chart:{polar:!0},xAxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},series:[{data:[29.9,71.5,106.4,129.2,144,176,135.6,148.5,216.4,194.1,95.6,54.4]}]}}),r.a.createElement(C.a,{config:{chart:{polar:!0},title:{text:"Highcharts Polar Chart"},subtitle:{text:"Also known as Radar Chart"},pane:{startAngle:0,endAngle:360},xAxis:{tickInterval:45,min:0,max:360,labels:{format:"{value}\xb0"}},yAxis:{min:0},plotOptions:{series:{pointStart:0,pointInterval:45},column:{pointPadding:0,groupPadding:0}},series:[{type:"column",name:"Column",data:[8,7,6,5,4,3,2,1],pointPlacement:"between"},{type:"line",name:"Line",data:[1,2,3,4,5,6,7,8]},{type:"area",name:"Area",data:[1,8,2,7,3,6,4,5]}]}}),r.a.createElement(E.a,{highcharts:d.a,options:{chart:{polar:!0},title:{text:"Highcharts Polar Chart"},subtitle:{text:"Also known as Radar Chart"},pane:{startAngle:0,endAngle:360},xAxis:{tickInterval:45,min:0,max:360,labels:{format:"{value}\xb0"}},yAxis:{min:0},plotOptions:{series:{pointStart:0,pointInterval:45},column:{pointPadding:0,groupPadding:0}},series:[{type:"column",name:"Column",data:[8,7,6,5,4,3,2,1],pointPlacement:"between"},{type:"line",name:"Line",data:[1,2,3,4,5,6,7,8]},{type:"area",name:"Area",data:[1,8,2,7,3,6,4,5]}]}}))}}]),a}(r.a.Component),y=a(11);var x=function(e){var t=e.match,a=Object(y.h)(),n=a.firstname;return a.lastname,r.a.createElement("div",null,r.a.createElement("h1",null,"Users"),r.a.createElement("h4",null,t.params.firstname),r.a.createElement("h4",null,t.params.lastname),r.a.createElement("h4",null,n),r.a.createElement("h4",null,n))};var k=function(){var e=Object(y.g)(),t=Object(y.f)();return console.log(e,t),r.a.createElement("div",null,r.a.createElement("h1",null,"About"),r.a.createElement("div",null,"Current Location : ",e.pathname),r.a.createElement("div",null,"Data Passes from Other component: ",e.state.user),r.a.createElement("button",{onClick:function(){t.goBack()}},"GO Back"))},w=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={firstName:"",lastName:""},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.firstName,a=e.lastName;return r.a.createElement("div",null,"Hello :",t,a)}}]),a}(r.a.Component),M=(r.a.Component,a(29)),N=a(67),I=a.n(N),A=(r.a.Component,a(18));var F=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleCheck=function(e){console.log(e),console.log(e.target.value,e.target.checked);n.checktext.filter((function(t){return t===e.target.value}))},n.checktext=["apple","ball","cat"],n.state={apple:!1,ball:!1,cat:!1},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.checktext.map((function(t){return r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",value:t,onChange:e.handleCheck,disabled:!1}),r.a.createElement("label",null,t))})))}}]),a}(r.a.Component),D=a(35),S=function(){return console.log("testRefetch called"),fetch("https://reqres.in/api/products/3")};var P=function(e){e.match;var t=Object(y.h)();return t.firstname,t.lastname,Object(D.useQuery)("Hello",S,{enabled:!1}).refetch,r.a.createElement("div",null,r.a.createElement("h1",null,"hello"),r.a.createElement(F,null))},B=a(14),H=a(69),T=a.n(H),J=0;var L=function(e){return e.match,Object(n.useEffect)((function(){J++})),r.a.createElement("div",null,"Value of renderCount: ",r.a.createElement("h2",null,J))};var R=function(e){e.match;var t=Object(n.useState)(0),a=Object(A.a)(t,2),l=a[0],c=a[1],o=Object(n.useMemo)((function(){return r.a.createElement(L,null)}),[]);return r.a.createElement("div",null,r.a.createElement("h1",null,"Memo Hook"),"Value of I: ",r.a.createElement("h2",null,l),r.a.createElement("button",{onClick:function(){c(l+1)}},"Increment"),r.a.createElement("h3",null,"Below are child component with and without useMemo. It restricts the child to re-render in functional commponent if no prop is changed. Just like should componentupdate in class component"),r.a.createElement("div",null,"Normal render"),r.a.createElement(L,null),r.a.createElement("div",null,"Memo Render"),o)},z=a(20),W=a(25),U=function(e){var t=Object(n.useState)(!1),a=Object(A.a)(t,2),l=a[0],o=a[1],i=function(){return o(!1)};return c.a.createPortal(r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{variant:"primary",onClick:function(){return o(!0)}},"Launch demo modal"),r.a.createElement(z.a,{show:l,onHide:i},r.a.createElement(z.a.Header,{closeButton:!0},r.a.createElement(z.a.Title,null,"Modal heading")),r.a.createElement(z.a.Body,null,"Woohoo, you're reading this text in a modal!"),r.a.createElement(z.a.Footer,null,r.a.createElement(W.a,{variant:"secondary",onClick:i},"Close"),r.a.createElement(W.a,{variant:"primary",onClick:i},"Save Changes")))),document.getElementById("Modal"))},V={chart:{type:"scatter",zoomType:"xy"},title:{text:"Height Versus Weight of 507 Individuals by Gender"},subtitle:{text:"Source: Heinz  2003"},xAxis:{title:{enabled:!0,text:"Height (cm)"},startOnTick:!0,endOnTick:!0,showLastLabel:!0},yAxis:{title:{text:"Weight (kg)"}},legend:{layout:"vertical",align:"left",verticalAlign:"top",x:100,y:70,floating:!0,backgroundColor:"red",borderWidth:1},plotOptions:{scatter:{marker:{radius:5,states:{hover:{enabled:!0,lineColor:"rgb(100,100,100)"}}},states:{hover:{marker:{enabled:!1}}},tooltip:{headerFormat:"<b>{series.name}</b><br>",pointFormat:"{point.x} cm, {point.y} kg"}}},series:[{name:"Female",color:"rgba(223, 83, 83, .5)",data:[[161.2,51.6],[167.5,59],[159.5,49.2],[157,63],[155.8,53.6],[170,59],[159.1,47.6],[166,69.8],[176.2,66.8],[160.2,75.2],[172.5,55.2],[170.9,54.2],[172.9,62.5],[153.4,42],[160,50],[147.2,49.8],[168.2,49.2],[175,73.2],[157,47.8],[167.6,68.8],[156,52.7],[160,74.3],[163,62],[165.7,73.1],[161,80],[162,54.7],[166,53.2],[174,75.7],[172.7,61.1],[167.6,55.7],[176.5,71.8],[164.4,55.5],[160.7,48.6],[174,66.4],[163.8,67.3]]},{name:"Male",color:"rgba(119, 152, 191, .5)",data:[[174,65.6],[175.3,71.8],[193.5,80.7],[186.5,72.6],[187.2,78.8],[163,57],[171.5,61.4],[184.2,76.8],[174,86.8],[174,72.2],[185.4,66.8],[177.8,75.5],[180.3,93.2],[180.3,82.7],[177.8,58],[177.8,79.5],[177.8,78.6],[177.8,71.8],[177.8,116.4],[163.8,72.2],[188,83.6],[198.1,85.5],[175.3,90.9],[166.4,85.9],[190.5,89.1],[180.3,83.2],[180.3,83.2]]}]};j()(C.a.Highcharts);var G=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Scatter Chart"),r.a.createElement(C.a,{config:V}),r.a.createElement(E.a,{highcharts:d.a,options:V}))}}]),a}(r.a.Component),Q=function(e){return function(t){Object(m.a)(n,t);var a=Object(s.a)(n);function n(e){var t;return Object(i.a)(this,n),(t=a.call(this,e)).state={count:0},t}return Object(u.a)(n,[{key:"handleContIncrement",value:function(){this.setState({count:this.state.count+1})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Count in higher order component is : ",this.state.count),r.a.createElement(e,Object.assign({count:this.state.count,handleContIncrement:this.handleContIncrement.bind(this)},this.props)))}}]),n}(r.a.Component)},q=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onMouseOver:this.props.handleContIncrement},"Hover ",this.props.count," times"))}}]),a}(r.a.Component),$=Q(q),K=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{onClick:this.props.handleContIncrement},"Clicked ",this.props.count," times"))}}]),a}(r.a.Component),X=Q(K),Y=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null),r.a.createElement($,null),r.a.createElement(X,null))}}]),a}(r.a.Component),Z=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleContIncrement=function(){n.setState({count:n.state.count+1})},n.state={count:0},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.render(this.state.count,this.handleContIncrement))}}]),a}(r.a.Component),_=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onMouseOver:this.props.handleContIncrement},"Hover ",this.props.count," times"))}}]),a}(r.a.Component),ee=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{onClick:this.props.handleContIncrement},"Clicked ",this.props.count," times"))}}]),a}(r.a.Component),te=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{render:function(e,t){return r.a.createElement(_,{count:e,handleContIncrement:t})}}),r.a.createElement(Z,{render:function(e,t){return r.a.createElement(ee,{count:e,handleContIncrement:t})}}))}}]),a}(r.a.Component),ae=Object(y.i)((function(e){var t=new Date("Jun 23, 2020 21:25:00"),a=new Date,l=t.getTime()-a.getTime(),c=Object(n.useState)(Math.floor(l/864e5)),o=Object(A.a)(c,2),i=o[0],u=o[1];l-=864e5*i;var m=Object(n.useState)(Math.floor(l/36e5)),s=Object(A.a)(m,2),h=s[0],d=s[1];l-=36e5*h;var p=Object(n.useState)(Math.floor(l/6e4)),E=Object(A.a)(p,2),f=E[0],v=E[1];l-=6e4*f;var b=Object(n.useState)(Math.floor(l/1e3)),C=Object(A.a)(b,2),O=C[0],j=C[1];console.log("Time Differnece",i,h,f,O),Object(n.useEffect)((function(){var e=setInterval((function(){j((function(e){return console.log(e),0===e&&(v((function(t){return 0===t&&0===e&&(d((function(a){return 0===a&&0===t&&0===e&&(u((function(e){return e-1})),d((function(e){return 23})),v((function(e){return 59})),j((function(e){return 59}))),a-1})),v((function(e){return 59})),j((function(e){return 59}))),t-1})),j((function(e){return 59}))),e-1}))}),1e3);return function(){return clearInterval(e)}}),[]);var g=Object(n.useState)(!0),y=Object(A.a)(g,2),x=y[0],k=y[1],w=function(){k(!1),e.history.goBack()};return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{show:x,onHide:w,animation:!1,dialogClassName:"modal90w"},r.a.createElement(z.a.Header,{closeButton:!0},r.a.createElement(z.a.Title,null,"CountDownTimer")),r.a.createElement(z.a.Body,{className:"noPadding"},r.a.createElement("div",{id:"Modalwrapper",className:"Modalwrapper Modallayout"},r.a.createElement("div",{className:"BodyPart"},r.a.createElement("div",{id:"Modalwrapper",className:"Modalwrapper Modallayout"},r.a.createElement("main",{id:"MainC",className:"MainC paddingzero Modallayout"},r.a.createElement("div",{className:"Contents"},r.a.createElement("div",{className:"BoxLayout"},r.a.createElement("div",{id:"CountDown",className:"columns CountDown"},r.a.createElement("div",{className:"CountDownBox"},r.a.createElement("div",{id:"days",className:"CountDownTimer"},r.a.createElement("p",null,"Days"),r.a.createElement("h1",null,i))),r.a.createElement("div",{className:"CountDownBox"},r.a.createElement("div",{id:"hours",className:"CountDownTimer"},r.a.createElement("p",null,"hrs"),r.a.createElement("h1",null,h))),r.a.createElement("div",{className:"CountDownBox"},r.a.createElement("div",{id:"minutes",className:"CountDownTimer"},r.a.createElement("p",null,"Min"),r.a.createElement("h1",null,f))),r.a.createElement("div",{className:"CountDownBox"},r.a.createElement("div",{id:"seconds",className:"CountDownTimer"},r.a.createElement("p",null,"Sec"),r.a.createElement("h1",null,O)))),r.a.createElement("div",{className:"columns ModalContents"},"Modal Content Here")))))))),r.a.createElement(z.a.Footer,null,r.a.createElement(W.a,{variant:"primary",onClick:w},"Close"))))})),ne=r.a.createContext("Default Value"),re=ne.Provider,le=ne.Consumer,ce=ne,oe=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(le,null,(function(e){return r.a.createElement("h1",null,"From CompCChildOfB ....Context Data is : ",r.a.createElement("h4",null,e))})),r.a.createElement("h1",null,"------------------------------------------------------------ ---------------------------------"),r.a.createElement("h1",null,"The other way of conssuming UserContext : ",r.a.createElement("h4",null,this.context)))}}]),a}(r.a.Component);oe.contextType=ce;var ie=oe,ue=(r.a.Component,function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).reffunc=n.reffunc.bind(Object(M.a)(n)),n.focusInput=n.focusInput.bind(Object(M.a)(n)),n}return Object(u.a)(a,[{key:"focusInput",value:function(){this.textInput.focus()}},{key:"reffunc",value:function(e){this.textInput=e}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),a}(r.a.Component)),me=T()(),se=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,119))})),he=function(){return r.a.createElement(y.b,{history:me},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("ul",{className:"flexDisplay"},r.a.createElement("li",null,r.a.createElement(B.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(B.a,{to:{pathname:"/about",state:{user:"vipul"}}},"About")),r.a.createElement("li",null,r.a.createElement(B.a,{to:"/user/John/Heyden"},"Users")),r.a.createElement("li",null,r.a.createElement(B.a,{to:"/Memo"},"Memo")),r.a.createElement("li",null,r.a.createElement(B.a,{to:"/polarChart"},"Polar Chart")),r.a.createElement("li",null,r.a.createElement(B.a,{to:"/columnChart"},"Line Chart")),r.a.createElement("li",null,r.a.createElement(B.a,{to:"/barChart"},"Bar Chart")),r.a.createElement("li",null,r.a.createElement(B.a,{to:"/scatterChart"},"Scatter Chart")),r.a.createElement("li",null,r.a.createElement(B.a,{to:"/lazyComp"},"Lazy Component"))),r.a.createElement("ul",{className:"flexDisplay"},r.a.createElement("li",null,r.a.createElement(B.a,{to:"/ReactPortalModal"},"ReactPortalModal")),r.a.createElement("li",null,r.a.createElement(B.a,{to:"/CommomFunc"},"CommomFuncHigherOrder")),r.a.createElement("li",null,r.a.createElement(B.a,{to:"/ParentComponent"},"CommomFuncRenderProp")),r.a.createElement("li",null,r.a.createElement(B.a,{to:"/ComingSoonModal"},"ComingSoonModal")),r.a.createElement("li",null,r.a.createElement(B.a,{to:"/contexttest"},"Context Test"))))),r.a.createElement("div",{className:"dynamicGraph"},r.a.createElement(y.c,null,r.a.createElement(y.a,{exact:!0,path:"/",component:P}),r.a.createElement(y.a,{exact:!0,path:"/about",component:k}),r.a.createElement(y.a,{exact:!0,path:"/user/:firstname/:lastname",component:x}),r.a.createElement(y.a,{exact:!0,path:"/memo",component:R}),r.a.createElement(y.a,{exact:!0,path:"/polarChart",component:g}),r.a.createElement(y.a,{exact:!0,path:"/barChart",component:v}),r.a.createElement(y.a,{exact:!0,path:"/scatterChart",component:G}),r.a.createElement(y.a,{exact:!0,path:"/ReactPortalModal",component:U}),r.a.createElement(y.a,{exact:!0,path:"/columnChart",component:f}),r.a.createElement(y.a,{exact:!0,path:"/CommomFunc",component:Y}),r.a.createElement(y.a,{exact:!0,path:"/ParentComponent",component:te}),r.a.createElement(y.a,{exact:!0,path:"/ComingSoonModal",component:ae}),r.a.createElement(y.a,{exact:!0,path:"/contexttest",component:ue}),r.a.createElement(y.a,{exact:!0,path:"/lazyComp",render:function(e){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(se,e))}}),r.a.createElement(y.a,{render:function(){return r.a.createElement("h1",null,"Not able to find your Route")}}))))};var de=function(){var e=new D.QueryClient;return Object(n.useEffect)((function(){o.a.initialize("UA-167420173-1"),o.a.pageview(window.location.pathname+window.location.search)}),[]),r.a.createElement(D.QueryClientProvider,{client:e},r.a.createElement(he,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,t,a){e.exports=a(114)},83:function(e,t,a){},84:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},85:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.cfba4ded.chunk.js.map