/**
 * Created by yangbingxun on 2016/11/18.
 */

import { Router, Route } from 'react-router';
import MainPane from '../component/MainPane'

import Chat from './Chat'
// import IMChatPane from '../component/IMChatPane/IMChatPane'



// var React= require('react');
// var ReactDOM= require('react-dom');

// module.exports =R

export default function Routers(props){
    return(
        <Router history={props.history}>
            <Route path="/" component={MainPane}>
                <Chat/>
            </Route>
        </Router>
    )
}
