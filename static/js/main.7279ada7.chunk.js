(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(2),r=a.n(l),o=a(3),i=a(4),s=a(6),b=a(5);a(12);var u=function(e){var t=e.tabs,a=e.selectedTab,n=e.onTabSelected;return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"tabs"},t.map((function(e){return c.a.createElement("button",{key:e.id,type:"button",onClick:function(){n(e.id)}},e.title)}))),c.a.createElement("p",null,a.content))},d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],m=function(e){Object(s.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={selectedTab:d[0]},e.onTabSelected=function(t){var a=d.find((function(e){return e.id===t}));e.setState({selectedTab:a})},e}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Selected tab is\xa0",this.state.selectedTab.title),c.a.createElement(u,{tabs:d,selectedTab:this.state.selectedTab,onTabSelected:this.onTabSelected}))}}]),a}(c.a.Component);r.a.render(c.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.7279ada7.chunk.js.map