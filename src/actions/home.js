import 'whatwg-fetch'

import { spin,spinHidden } from './spin'

export const FETCH_LIST = 'FETCH_LIST'
export const FETCH_LIST_ITEM = 'FETCH_LIST_ITEM'

import Config from '../Base'


export function addTodo(text){
	return {
		type: FETCH_LIST,text
	}
}

export function fetchListItem(value){
	return {
		type:FETCH_LIST_ITEM,value
	}
}


export function fetchList(index){
	 return dispatch => {
	 	dispatch(spin())

	 	fetch(Config.articles,{
			//mode: "cors"
			}).then(function(response) {
				
    return response.json()
  }).then(function(json) {
     dispatch(addTodo(json.data))
     dispatch(spinHidden())
  }).catch(function(ex) {
    console.log('parsing failed', ex)
    dispatch(spinHidden())
  })}
}


export function fetchListItemApi(id){
	console.log('hack',id)
	 return dispatch => {
	 	//Config.article + '/'+id
	 	fetch(Config.article +id,{
			//mode: "cors"
			}).then(function(response) {
				
	    return response.json()
	  }).then(function(json) {
	  	dispatch(fetchListItem(json.data))
	    //dispatch(fetchListItem(json[id-1]))
	  }).catch(function(ex) {
	    console.log('parsing failed', ex)
	  })
	}
}