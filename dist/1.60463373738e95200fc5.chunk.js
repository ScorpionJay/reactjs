webpackJsonp([1],{555:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return{data:e.home.fetchList,spin:e.spin.spin}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(299),f=r(c),s=n(484),p=n(556),d=n(560),b=(r(d),n(561)),y=r(b),h=n(563),m=(r(h),n(564)),v=(r(m),n(565)),_=r(v),w=n(566),g=r(w),O=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch;e.data;t((0,p.fetchList)(1))}},{key:"render",value:function(){var e=this.props,t=(e.dispatch,e.spin);return f.default.createElement("div",null,f.default.createElement(g.default,null),f.default.createElement("div",{style:E.content},f.default.createElement("div",{className:"content1"},f.default.createElement("div",{className:"content2"},f.default.createElement(y.default,{data:this.props.data})))),f.default.createElement(_.default,{spin:t}))}}]),t}(c.Component),E={content:{}};t.default=(0,s.connect)(l)(O)},560:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(299),c=r(u),f=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return c.default.createElement("div",null,"轮播组件",c.default.createElement("br",null),"轮播组件",c.default.createElement("br",null),"轮播组件",c.default.createElement("br",null),"轮播组件",c.default.createElement("br",null),"轮播组件",c.default.createElement("br",null),"轮播组件",c.default.createElement("br",null),"轮播组件",c.default.createElement("br",null))}}]),t}(u.Component);t.default=f},561:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(299),f=r(c),s=n(562),p=r(s),d=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return f.default.createElement("div",null,this.props.data.map(function(e,t){return f.default.createElement(p.default,l({},e,{key:t}))}))}}]),t}(c.Component);t.default=d},562:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(299),c=r(u),f=n(493),s=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return c.default.createElement(f.Link,{to:"/itemDetail/"+this.props._id},c.default.createElement("div",{style:p.row},c.default.createElement("div",{style:p.left},this.props.title),c.default.createElement("div",{style:p.right},this.props.date)))}}]),t}(u.Component);t.default=s;var p={row:{borderBottom:"1px solid #000",marginBottom:".125em",padding:8,backgroundColor:"#fafafa",marginLeft:".35em",marginRight:".35em"},left:{color:"#2ca6cb",fontSize:"1.7em",fontWeight:"bold",lineHeight:2},right:{color:"#817c7c",display:"block",fontSize:".4em"}}},563:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(299),c=r(u),f=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"_back",value:function(){history.go(-1)}},{key:"render",value:function(){var e=void 0;return this.props.left,c.default.createElement("div",{style:s.container},c.default.createElement("div",{style:s.left},e),c.default.createElement("div",{style:s.center},this.props.center),c.default.createElement("div",{style:s.right},this.props.right))}}]),t}(u.Component);t.default=f;var s={container:{background:"black",height:30,lineHeight:"30px",color:"#fff",display:"flex",flex:1,padding:5,position:"fixed",width:"100%",top:0},left:{flex:1},center:{flex:1,textAlign:"center"},right:{flex:1,textAlign:"right"}}},564:function(e,t){"use strict"},565:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(299),c=r(u),f=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return c.default.createElement("div",{style:this.props.spin?s.show:s.hidden},"Loading...")}}]),t}(u.Component);t.default=f;var s={show:{position:"fixed",top:"50%",left:"44%",height:80,borderRadius:"50%",textAlign:"center",lineHeight:"77px",color:"#333"},hidden:{display:"none",position:"fixed",top:"50%",left:"44%",height:80,backgroundColor:"#fff",borderRadius:"50%",textAlign:"center",lineHeight:77}}},566:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(299),c=r(u),f=n(493),s=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={nav:!1},n}return a(t,e),l(t,[{key:"showMenu",value:function(){this.setState({nav:!this.state.nav})}},{key:"render",value:function(){return c.default.createElement("header",{style:p.header},c.default.createElement("div",{style:p.logo},c.default.createElement("div",null,c.default.createElement("div",{className:"logoText"},"Jay"),c.default.createElement("div",{style:p.logoDesc},"Life's simple.You make choices and don't look back")),c.default.createElement("div",{className:"icon",onClick:this.showMenu.bind(this)},"☰")),c.default.createElement("nav",null,c.default.createElement("ul",{id:"myTopnav",className:this.state.nav?"topnav responsive":"topnav "},c.default.createElement("li",{onClick:this.showMenu.bind(this)},c.default.createElement(f.Link,{to:"/home",activeClassName:"active"},"Home")),c.default.createElement("li",{onClick:this.showMenu.bind(this)},c.default.createElement(f.Link,{to:"/find",activeClassName:"active"},"Project")),c.default.createElement("li",{onClick:this.showMenu.bind(this),style:{display:"none"}},c.default.createElement(f.Link,{to:"/music",activeClassName:"active"},"Music")),c.default.createElement("li",{onClick:this.showMenu.bind(this)},c.default.createElement(f.Link,{to:"/me",activeClassName:"active"},"About")))))}}]),t}(u.Component);t.default=s;var p={header:{backgroundColor:"#333",color:"#fff",padding:"20px"},logo:{display:"flex",justifyContent:"space-between"},logoDesc:{fontSize:"1.2em",color:"silver",fontStyle:"italic"}}}});