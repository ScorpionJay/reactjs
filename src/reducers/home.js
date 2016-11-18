import { combineReducers } from 'redux'
import { FETCH_LIST,FETCH_LIST_ITEM } from '../actions/home'

function fetchList(state = [], action) {
  switch (action.type) {
    case FETCH_LIST:
      return action.text
    default:
      return state
  }
}

function fetchItem(state = '', action) {
  switch (action.type) {
    case FETCH_LIST_ITEM:
      return action.value
    default:
      return state
  }
}

const todoApp = combineReducers({
  fetchList,fetchItem
})

export default todoApp