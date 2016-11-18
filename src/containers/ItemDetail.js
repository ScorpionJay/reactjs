import React , { Component } from 'react'
import { connect } from 'react-redux'

import ItemDeatail from '../components/Home/ItemDetail'

import { fetchListItemApi } from '../actions/home'
import Bar from '../components/common/Bar'
import Nav from '../components/common/Nav'

import ReactMarkdown from 'react-markdown'
	
class List extends Component{

	componentDidMount(){
		console.log('componentDidMount' + this.props.params.id);
		  
		    const { dispatch } = this.props
		    dispatch(fetchListItemApi(this.props.params.id))
		 
	}

	render(){
		return (
			<div>
				<Nav/>
			            <div className='result-pane'>
			              <ReactMarkdown 
			              source={this.props.item.content}  
			              className='result'
                        />
			            </div>
			</div>
		);
	}
}


function map(state) {
  return {
    item: state.home.fetchItem
  }
}

export default connect(map)(List)

const Styles = {
  content:{

  }
}