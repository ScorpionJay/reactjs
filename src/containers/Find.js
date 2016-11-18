import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchFollowers } from '../actions/find'
import Followers from '../components/find/followers'
import Bar from '../components/common/Bar'
import Tab from '../components/common/Tab'
import Nav from '../components/common/Nav'

class App extends Component {


  componentDidMount(){
    const { dispatch, data } = this.props
    // dispatch(fetchFollowers())
  }



  render() {
    // Injected by connect() call:
    const { dispatch, followers } = this.props
    return (
      <div>
        <Nav/>
        
        <div style={Styles.content}>
          <div className='content1'>
            <div className='content2' style={Styles.text}>
              <h1>Some Projects</h1>
              <ul>
                <li>health</li>
                <li>finace</li>
              </ul>
            </div>
          </div>
          
        </div>
        
      </div>
    )
  }
}


function map(state) {
  return {
    followers: state.find.followers
  }
}

export default connect(map)(App)

const Styles = {
  text:{
    color: 'rgb(44, 166, 203)',
    fontSize: '1.2em',
    fontWeight: 'bold',
    padding:50
  }
}