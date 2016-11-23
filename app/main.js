/**
 * Created by yangbingxun on 2016/11/18.
 */

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import superMsg from './reducers/msgStoreReducer'
import {default as IMChatPane} from './component/IMChatPane/IMChatPane'

var React= require('react');
var ReactDOM= require('react-dom');


let store=createStore(superMsg);



ReactDOM.render(
    <Provider store={store}>
        <IMChatPane/>
    </Provider>,
    document.getElementById('body')
)


