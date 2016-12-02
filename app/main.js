/**
 * Created by yangbingxun on 2016/11/18.
 */

import {Provider} from 'react-redux'
import {createStore,combineReducers} from 'redux'
import {viewChatMsg,chatMsg,listOfChatObject,thisChatId} from './reduxComponent/reducers/msgStoreReducer'
import {browserHistory} from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import Router from './Router'

import ajax from './Ajax/createAjax'

var React= require('react');
var ReactDOM= require('react-dom');


var reducers=combineReducers({
    routing:routerReducer,
    thisChatId,
    viewChatMsg,
    chatMsg,
    listOfChatObject
})

let store=createStore(reducers);

const history=syncHistoryWithStore(browserHistory,store);

// ajax({
//     id:'1033614108438',
//     url:'http://120.27.49.173:8080/v1.0/users/',
//     data:{'userid':'1033614108438','groupid':'14108414','content':"吃的撒巨款收到卡基本流程卡微风不拉吧"},
//     method:'get',
//     success:function(status,data,msg){
//         console.log(status,data,msg)
//     },
//     fail:function(status){
//         console.log('fail status'+status)
//     }
// })

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}/>
    </Provider>,
    document.getElementById('body')
)


