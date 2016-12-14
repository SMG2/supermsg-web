/**
 * Created by yangbingxun on 2016/11/18.
 */

import {Provider} from 'react-redux'
import {createStore,combineReducers} from 'redux'
import {
    viewChatMsg,
    chatMsg,
    listOfChatObject,
    thisChatId,
    userInfo
} from './reduxComponent/reducers/msgStoreReducer'
import {browserHistory} from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import Router from './Router'

import ajax from './plugin/Ajax/createAjax'
import React from 'react'

import ReactDOM from 'react-dom'


var reducers=combineReducers({
    routing:routerReducer,
    thisChatId,
    viewChatMsg,
    chatMsg,
    listOfChatObject,
    userInfo
})

let store=createStore(reducers);

const history=syncHistoryWithStore(browserHistory,store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}/>
    </Provider>,
    document.getElementById('body')
)


