import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchList,fetchListItem } from '../actions/home'

import Slide from '../components/Home/Slide'
import List from '../components/Home/List'

import Bar from '../components/common/Bar'
import Tab from '../components/common/Tab'
import Spin from '../components/common/Spin'
import Nav from '../components/common/Nav'



class App extends Component {

  componentDidMount(){
    const { dispatch, data } = this.props
    dispatch(fetchList(1))
  }

  render() {
    
    const { dispatch,spin } = this.props
    return (
      <div>
        <Nav/>
        <div style={Styles.content}>
          <div className='content1'>
            <div className='content2'>
              <List data={this.props.data} />
            </div>
          </div>

          
        </div>
        <Spin spin={spin}/>
      </div>
    )
  }
}

function map(state) {
  return {
    data: state.home.fetchList,
    spin: state.spin.spin
  }
}

// 样式
const Styles = {
  content:{
  
  }
}

export default connect(map)(App)