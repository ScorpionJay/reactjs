import React , { Component } from 'react'
import ListItem from './ListItem'

export default class List extends Component{

	render(){
		return (
			<div>
				{
					this.props.data.map((item, index) =>
		          		<ListItem {...item} key={index} />
		       		 )	
		    	}
			</div>
		);
	}
}