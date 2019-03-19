(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(35)},35:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),l=n.n(r),c=n(20),s=n(1),i=n(2),u=n(4),m=n(3),h=n(5),p=(n(6),n(15)),d=n.n(p),b=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).maxId=100,n.state={id:100,label:""},n.onLabelChange=function(e){n.setState({label:e.target.value})},n.onSubmit=function(e){e.preventDefault();n.state.label;n.setState({label:""}),(n.props.onItemAdded||function(){})(n.state.label)},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"formInput",value:this.state.label,onChange:this.onLabelChange,placeholder:"What needs to be done?"}),o.a.createElement("button",{type:"submit"},"Add"))}}]),t}(a.Component),f=n(16),g=n(9),v=n.n(g);function y(){var e=Object(f.a)(["\n  \n  \n  button{\n    display:none\n    background-color:white\n  }\n  &:hover{\n    .noteButtons{\n      display:flex\n      justify-content:center\n      align-items:center\n      \n      button{\n        display:block\n      }\n    }  \n  }\n  .true{\n    color:black\n    .Typist{\n      color:#fd7e14\n    }\n  }\n  \n"]);return y=function(){return e},e}var O=n(17).a.div(y()),j=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={active:"".concat(!1)},n.toggleClass=function(){"false"==n.state.active?n.setState({active:"".concat(!0)}):n.setState({active:"".concat(!1)})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this;return e=(this.props.name,this.props.name),console.log(e),o.a.createElement(O,null,o.a.createElement("div",{className:this.state.active},o.a.createElement("span",{className:"MyTypist notes"},o.a.createElement(v.a,null,e),o.a.createElement("div",{className:"noteButtons"},o.a.createElement("button",{onClick:this.toggleClass},"Mark as completed"),o.a.createElement("button",{onClick:function(){return t.props.onDelete(e)}},"Exterminate")))))}}]),t}(o.a.Component),E=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this,e))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;console.log(this.props.items);var t=(this.props.items||[]).map(function(t){return o.a.createElement("li",null,o.a.createElement(j,{name:t,onDelete:e.props.onDelete}))});return o.a.createElement("ul",{className:"todo-list list-group list-unstyled"},t)}}]),t}(o.a.Component),k=function(e){function t(e){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this,e))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.image.includes("youtube")?o.a.createElement("iframe",{height:600,src:this.props.image,width:800}):o.a.createElement("img",{width:800,height:600,src:this.props.image})}}]),t}(o.a.Component),S=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={title:"",url:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.nasa.gov/planetary/apod?api_key=2kZhniEdqDZmS8bkcJQmYsxNM5sYg5PZM4SJXn5D").then(function(e){if(e.ok)return e.json();throw Error}).then(function(t){e.setState({title:t.title,url:t.url,explanation:t.explanation})}).catch(this.setState({title:"You've got an error, sorry",url:"https://images.pexels.com/photos/2422/sky-earth-galaxy-universe.jpg?cs=srgb&dl=astronomy-discovery-earth-2422.jpg&fm=jpg",explanation:"Better luck next time"}))}},{key:"render",value:function(){var e=this.state,t=e.title,n=e.url,a=e.explanation,r=new Date,l=["January","February","March","April","May","June","July","August","September","October","November","December"][r.getMonth()],c=r.getDate();return o.a.createElement("div",{className:"d-block m-2 iotd"},o.a.createElement("h1",null,"Nasa image of the day"),o.a.createElement("h1",null,l," ",c),o.a.createElement("h2",null,t),o.a.createElement(k,{image:n}),o.a.createElement("p",{className:""},a))}}]),t}(o.a.Component),I=(o.a.Component,function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).id=d()(),n.state={items:[],setOfIds:[],lastId:localStorage.length+1},n.onDelete=function(e){console.log("In development")},n.onItemAdded=function(e){var t=n.state.lastId+1;n.setState(function(a){var o=n.createItem(e);return{items:[].concat(Object(c.a)(a.items),[o]),lastId:t}});var a=localStorage.setItem("".concat(t),JSON.stringify(e));n.state.items.push(a)},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){for(var e=0;e<=localStorage.length;e++)console.log(localStorage.key(e)),this.setState({setOfIds:this.state.setOfIds.push(localStorage.key(e))});this.setState({})}},{key:"createItem",value:function(e){return{id:this.maxId++,label:e}}},{key:"render",value:function(){this.state.items;console.log(localStorage.getItem(localStorage.key(1)));for(var e=[],t=localStorage.length,n=1;n<=t;n++)e.push(localStorage.getItem(n+1)),console.log(localStorage.getItem("".concat(this.state.setOfIds[n])));return console.log(e),o.a.createElement("div",{className:"container main-div"},o.a.createElement("h1",null,"Space TODOs"),o.a.createElement(b,{onItemAdded:this.onItemAdded}),o.a.createElement(E,{onDelete:this.onDelete,items:e}),o.a.createElement(S,null))}}]),t}(a.Component));l.a.render(o.a.createElement(I,null),document.getElementById("root"))},6:function(e,t,n){}},[[22,1,2]]]);
//# sourceMappingURL=main.22b0c96b.chunk.js.map