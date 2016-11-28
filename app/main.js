/**
 * Created by yangbingxun on 2016/11/18.
 */

import {Provider} from 'react-redux'
import {createStore,combineReducers} from 'redux'
import {viewChatMsg,chatMsg,listOfChatObject} from './reducers/msgStoreReducer'
import {browserHistory} from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
// import {default as IMChatPane} from './component/IMChatPane/IMChatPane'
import Router from './Router'

var React= require('react');
var ReactDOM= require('react-dom');


var reducers=combineReducers({
    routing:routerReducer,
    viewChatMsg,
    chatMsg,
    listOfChatObject
})

let store=createStore(reducers);

const history=syncHistoryWithStore(browserHistory,store);



ReactDOM.render(
    <Provider store={store}>
        <Router history={history}/>
    </Provider>,
    document.getElementById('body')
)


