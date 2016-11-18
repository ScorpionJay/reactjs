import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { meFetchData} from '../actions/me'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Bar from '../components/common/Bar'
import Me from '../components/me/Me'
import Tab from '../components/common/Tab'
import Nav from '../components/common/Nav'
class App extends Component {

  componentDidMount() {
    const { dispatch,login } = this.props
    if(login)  dispatch(meFetchData(login))
  }


  render() {
    // Injected by connect() call:
    const { dispatch, login,me } = this.props
    return (
      <div>
        <Nav/>
        <div style={Styles.content}>
          <div className='content1'>
            <div className='content2' style={Styles.me}>
              <img src="https://avatars0.githubusercontent.com/u/5726089?v=3&amp;s=460" alt="" style={{ width:'100px',borderRadius:'100%'}}/>
              <div>Name:Jay</div>
              <div>Gender: Man</div>
              <div> Interest: Like coding. Like fitness.</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


function map(state) {
  return {
    login: state.login.login,
    me: state.me.user
  }
}

export default connect(map)(App)

const Styles = {
  me:{
    color: 'rgb(44, 166, 203)',
    fontSize: '1.2em',
    fontWeight: 'bold',
    padding:50
  }
}