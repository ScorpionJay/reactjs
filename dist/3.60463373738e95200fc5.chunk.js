webpackJsonp([3],{563:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(299),c=r(u),f=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"_back",value:function(){history.go(-1)}},{key:"render",value:function(){var e=void 0;return this.props.left,c.default.createElement("div",{style:s.container},c.default.createElement("div",{style:s.left},e),c.default.createElement("div",{style:s.center},this.props.center),c.default.createElement("div",{style:s.right},this.props.right))}}]),t}(u.Component);t.default=f;var s={container:{background:"black",height:30,lineHeight:"30px",color:"#fff",display:"flex",flex:1,padding:5,position:"fixed",width:"100%",top:0},left:{flex:1},center:{flex:1,textAlign:"center"},right:{flex:1,textAlign:"right"}}},564:function(e,t){"use strict"},566:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(299),c=r(u),f=n(493),s=function(e){function t(e){o(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={nav:!1},n}return i(t,e),a(t,[{key:"showMenu",value:function(){this.setState({nav:!this.state.nav})}},{key:"render",value:function(){return c.default.createElement("header",{style:p.header},c.default.createElement("div",{style:p.logo},c.default.createElement("div",null,c.default.createElement("div",{className:"logoText"},"Jay"),c.default.createElement("div",{style:p.logoDesc},"Life's simple.You make choices and don't look back")),c.default.createElement("div",{className:"icon",onClick:this.showMenu.bind(this)},"☰")),c.default.createElement("nav",null,c.default.createElement("ul",{id:"myTopnav",className:this.state.nav?"topnav responsive":"topnav "},c.default.createElement("li",{onClick:this.showMenu.bind(this)},c.default.createElement(f.Link,{to:"/home",activeClassName:"active"},"Home")),c.default.createElement("li",{onClick:this.showMenu.bind(this)},c.default.createElement(f.Link,{to:"/find",activeClassName:"active"},"Project")),c.default.createElement("li",{onClick:this.showMenu.bind(this),style:{display:"none"}},c.default.createElement(f.Link,{to:"/music",activeClassName:"active"},"Music")),c.default.createElement("li",{onClick:this.showMenu.bind(this)},c.default.createElement(f.Link,{to:"/me",activeClassName:"active"},"About")))))}}]),t}(u.Component);t.default=s;var p={header:{backgroundColor:"#333",color:"#fff",padding:"20px"},logo:{display:"flex",justifyContent:"space-between"},logoDesc:{fontSize:"1.2em",color:"silver",fontStyle:"italic"}}},571:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return{login:e.login.login,me:e.me.user}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(299),f=r(c),s=n(484),p=n(572),d=n(573),y=(r(d),n(574)),h=(r(y),n(563)),b=(r(h),n(576)),m=(r(b),n(564)),v=(r(m),n(566)),g=r(v),_=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,n=e.login;n&&t((0,p.meFetchData)(n))}},{key:"render",value:function(){var e=this.props;e.dispatch,e.login,e.me;return f.default.createElement("div",null,f.default.createElement(g.default,null),f.default.createElement("div",{style:E.content},f.default.createElement("div",{className:"content1"},f.default.createElement("div",{className:"content2",style:E.me},f.default.createElement("img",{src:"https://avatars0.githubusercontent.com/u/5726089?v=3&s=460",alt:"",style:{width:"100px",borderRadius:"100%"}}),f.default.createElement("div",null,"Name:Jay"),f.default.createElement("div",null,"Gender: Man"),f.default.createElement("div",null," Interest: Like coding. Like fitness.")))))}}]),t}(c.Component);t.default=(0,s.connect)(a)(_);var E={me:{color:"rgb(44, 166, 203)",fontSize:"1.2em",fontWeight:"bold",padding:50}}},573:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(299),c=r(u),f=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){var e=this;return c.default.createElement("div",null,c.default.createElement("input",{type:"text",ref:"input"}),c.default.createElement("button",{onClick:function(t){return e.handleClick(t)}},"Add"))}},{key:"handleClick",value:function(e){var t=this.refs.input,n=t.value.trim();this.props.onAddClick(n),t.value=""}}]),t}(u.Component);t.default=f},574:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(299),f=r(c),s=n(575),p=r(s),d=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this;return f.default.createElement("ul",null,this.props.todos.map(function(t,n){return f.default.createElement(p.default,a({},t,{key:n,onClick:function(){return e.props.onTodoClick(n)}}))}))}}]),t}(c.Component);t.default=d},575:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(299),c=r(u),f=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return c.default.createElement("li",{onClick:this.props.onClick,style:{textDecoration:this.props.completed?"line-through":"none",cursor:this.props.completed?"default":"pointer",color:this.props.completed?"red":"blue"}},this.props.text)}}]),t}(u.Component);t.default=f},576:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(299),c=r(u),f=n(563),s=(r(f),n(493)),p=function(e){function t(e){o(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return i(t,e),a(t,[{key:"render",value:function(){var e=this.props.me,t=e.avatar_url,n=e.login;return c.default.createElement("div",{style:d.container},c.default.createElement("div",{style:d.row},c.default.createElement(s.Link,{to:"login"},c.default.createElement("div",{style:d.picture},c.default.createElement("div",{style:d.left},c.default.createElement("img",{src:t,style:{width:40,height:40}}),n),c.default.createElement(Icon,{name:"angle-right",style:d.pictureRight})))),c.default.createElement("div",{style:d.row},c.default.createElement("div",{style:d.item},c.default.createElement("div",{style:d.left},c.default.createElement(Icon,{name:"photo",style:d.leftIcon}),c.default.createElement("div",{style:d.leftText},"相册")),c.default.createElement(Icon,{name:"angle-right",style:d.right})),c.default.createElement("div",{style:d.item},c.default.createElement("div",{style:d.left},c.default.createElement(Icon,{name:"cube",style:d.leftIcon}),c.default.createElement("div",{style:d.leftText},"收藏")),c.default.createElement(Icon,{name:"angle-right",style:d.right})),c.default.createElement("div",{style:d.item},c.default.createElement("div",{style:d.left},c.default.createElement(Icon,{name:"gear",style:d.leftIcon}),c.default.createElement("div",{style:d.leftText},"设置")),c.default.createElement(Icon,{name:"angle-right",style:d.right}))))}}]),t}(u.Component);t.default=p;var d={container:{display:"flex",flexDirection:"column"},row:{marginBottom:10},item:{display:"flex",padding:10,backgroundColor:"#fff",fontSize:20,borderTop:"1px solid #eee"},left:{justifyContent:"flex-start",flex:1,display:"flex"},leftIcon:{color:"rgb(11, 101, 216)"},leftText:{marginLeft:10,color:"rgb(117, 112, 112)"},right:{alignSelf:"flex-end"},picture:{height:50,display:"flex",padding:10,backgroundColor:"#fff",color:"#aaa",fontSize:20},pictureRight:{alignSelf:"center"}}}});