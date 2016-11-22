/**
 * Created by yangbingxun on 2016/11/18.
 */

import {Provider} from 'react-redux'
import {createStore} from 'redux'


var React= require('react');
var ReactDOM= require('react-dom');
var IMChatPane=require('./component/IMChatPane/IMChatPane')
var msgStore=require('./reducers/msgStoreReducer');

// let store=createStore(msgStore);

ReactDOM.render(
    // <Provider store={store}>
        <IMChatPane/>,
    // </Provider>,
    document.getElementById('body')
)


