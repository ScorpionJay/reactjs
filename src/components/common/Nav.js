import React ,{Component} from 'react'
import { Link } from 'react-router'

export default class Nav extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	nav:false
	  };
	}

	showMenu(){
		console.log('menu')
		this.setState({nav:!this.state.nav})
	}


	render() {
		return (
			<header style={Styles.header}>
				<div style={Styles.logo}>
					<div>
						<div className='logoText'>Jay</div>
						<div style={Styles.logoDesc}>Life's simple.You make choices and don't look back</div>
					</div>
					<div className="icon" onClick={ this.showMenu.bind(this) } >&#9776;</div>
				</div>

				<nav>
					<ul id='myTopnav'  className={this.state.nav ? 'topnav responsive':'topnav '}>
						<li onClick={ this.showMenu.bind(this) }><Link to="/home" activeClassName="active">Home</Link></li>
						<li onClick={ this.showMenu.bind(this) }><Link to='/find' activeClassName="active">Project</Link></li>
						<li onClick={ this.showMenu.bind(this) } style={{display:'none'}}><Link to='/music' activeClassName="active">Music</Link></li>
						<li onClick={ this.showMenu.bind(this) }><Link to='/me' activeClassName="active">About</Link></li>
					</ul>
				</nav>
			</header>
		);
	}
} 

const Styles = {
	header: {
		backgroundColor: '#333',
		color:'#fff',
		padding:'20px'
	},
	logo: {
		display:'flex',
		justifyContent: 'space-between'
	},
	logoDesc: {
		fontSize: '.8em',
	    color: 'silver',
	    fontStyle: 'italic',
	},
	

}