/**
 * Created by yangbingxun on 2016/11/18.
 */

import { Router, Route, IndexRoute} from 'react-router';
import MainPane from './component/MainPane'
import ChatNav from './component/HeadNav/SecondNav/ChatNav'
import IMChatPane from './component/IMChatPane/IMChatPane'
import ForgotPane from './component/LoginPane/ForgotPane/ForgotPane'
import LoginPane from './component/LoginPane/LoginPane'
import SignPane from './component/SignPane/SignPane'

var React= require('react');

export default function Routers(props){
    return(
        <Router history={props.history}>
            <Route path="/" component={LoginPane}>
                <Route path="login" component={LoginPane} >
                    <Route path="forgot" component={ForgotPane}/>
                </Route>
                <Route path="user" component={MainPane}>
                    <Route path="chat" component={ChatNav}>
                        <IndexRoute component={IMChatPane}/>
                        <Route path="group(/:id)" component={IMChatPane}/>
                        <Route path="p2p(/:id)" component={IMChatPane}/>
                    </Route>
                </Route>
                <Route path="sign" component={SignPane} />



                <Route path={'**'} component={(props)=>{return(<div>路由错误！！</div>)}}/>
            </Route>
        </Router>
    )
}
