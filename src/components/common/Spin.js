import React ,{Component} from 'react'


export default class Spin extends Component {


	render() {
		return (
			<div style={ (this.props.spin ? Styles.show : Styles.hidden) }>
				Loading...
			</div>
		);
	}

} 

const Styles = {
	show:{
		position:'fixed',
		top: '50%',
		left:'44%',
		height: 80,
    	
    	borderRadius: '50%',
    	textAlign: 'center',
    	lineHeight: '77px',
    	color:'#333',
	},
	hidden:{
		display:'none',
		position:'fixed',
		top: '50%',
		left:'44%',
		height: 80,
    	backgroundColor: '#fff',
    	borderRadius: '50%',
    	textAlign: 'center',
    	lineHeight: 77,
	},
}