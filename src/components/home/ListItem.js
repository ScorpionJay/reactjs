import React , { Component } from 'react'
import {Link } from 'react-router'

import {Icon} from 'react-fa'

export default class ListItem extends Component{
	render(){
		return (
			<Link to={`/itemDetail/${this.props._id}`} >
				<div style={Styles.row} >
					<div style={Styles.left}>{this.props.title}</div>
					<div style={Styles.right}>{this.props.date}</div>
				</div>
			</Link>
		);
	}
}

const Styles = {
	row: {
		borderBottom: '1px solid #000',
		marginBottom: '.125em',
		padding:8,
		backgroundColor:'#fafafa'
	},
	left: {
		color: '#2ca6cb',
		fontSize: '1.2em',
		fontWeight:'bold'
	},
	right: {
		color: '#817c7c',
	    display: 'block',
	    fontSize: '.4em',
	}
}