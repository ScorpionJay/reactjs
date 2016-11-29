import React , {Component } from 'react'
import { Router, IndexRoute ,Route, hashHistory,Link,Redirect } from 'react-router'

// import {Icon} from 'react-fa'

// import Home from './containers/Home'
// import ItemDetail from './containers/ItemDetail'
// import TodoItem from './containers/TodoItem'
// import Find from './containers/Find'
// import Me from './containers/Me'

// import ItemDetail from './containers/demo'


/* App */
class App extends Component{
	render(){
		return (
			<div className="nav">
				<div className="content" >{this.props.children}</div>
			</div>
		);
	}
}

/* routes */
const Routes = {
	path: '/',
	component: App,
	indexRoute :{onEnter: (nextState, replace) => replace('/home')},
	childRoutes: [
		{ path: 'home',  getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/Home').default)
			})
		 }
		},
		// { path: 'todoItem', component: TodoItem},
		{ path: 'find', getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/Find').default)
			})
		 }
		},
		{ path: 'me', getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/Me').default)
			})
		 }

		},
		{ path: 'itemDetail/:id', getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/ItemDetail').default)
			})
		 }},
		{
			path: 'itemDetail',
			getComponent (nextState, cb) {
			require.ensure([], (require)=>{
				 cb(null, require('./containers/ItemDetail').default)
			})
		 },
			childRoutes : [{
				path: 'itemDetal/:id',
				onEnter: ({ params }, replace) => replace(`/itemDetail/${params.id}`)
			}]
		},
		// {
		// 	component: Home,
		// 	childRoutes: [{
		// 		path: 'itemDetail/:id',component:ItemDetail
		// 	}]
		// }
	]
}


export default Routes