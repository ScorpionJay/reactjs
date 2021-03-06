import 'whatwg-fetch'
import Config from '../Base'
import Storage from '../storage'

export const LOGIN = 'LOGIN'

export const LOGIN_ERROR = 'LOGIN_ERROR'

/**
*  跨域服务器没有解决 暂时模拟
*/
// export function loginFetch(username,password,redirect){
// 	console.log('actions',username,password)
// 	// fetch login
// 	return dispatch => { 
// 	 	fetch(Config.loginUrl,{
// 	 	  //mode: "cors",// 跨域
//           headers: {
//             'Username': username,
//             'Password': password
//           },
//           method: 'POST'
//         })
//         .then((response) => {
//               const authToken = response.headers.get("Auth-Token");
//                console.log("authToken",authToken)
//                if(authToken){
//                 	// 持久化
// 	               Storage.put('token',authToken)
	               
// 	               dispatch(login(authToken))
// 	               // 页面跳转
// 	               if (redirect) redirect()
//                }else{
//                	 console.log('帐号或密码错误')
//                	 dispatch(loginError('帐号或密码错误'))
//                }

//         })
//         .catch(function(ex) {
//           console.log('parsing failed', ex)
//         })
// 	}

// 	// return {
// 	// 	type: LOGIN,username,password
// 	// }

// }

export function loginFetch(username,password,redirect){
	console.log('actions',username,password)
	// fetch login
	return dispatch => { 
	 	fetch('https://gist.githubusercontent.com/ScorpionJay/de11dc5bacefea9cee5394b73f456688/raw/e86fd421e4bce5c85dd87d29ddc7315ec1d33eed/list.json',{
          method: 'get'
        })
        .then((response) => {
               const token = Math.random().toString(36).substring(7)
               if(token){
                	// 持久化
	               Storage.put('token',token)
	               
	               dispatch(login(token))
	               // 页面跳转
	               if (redirect) redirect()
               }else{
               	 console.log('帐号或密码错误')
               	 dispatch(loginError('帐号或密码错误'))
               }

        })
        .catch(function(ex) {
          console.log('parsing failed', ex)
        })
	}

}


export function loginError(message){
	console.log('action',message)
	return {
		type: LOGIN_ERROR,message
	}
}

export function login(token){
	return {
		type: LOGIN,token
	}
}

