/**
 * Created by yangbingxun on 2016/11/18.
 */

import { Router, Route, IndexRoute} from 'react-router';
import MainPane from './component/MainPane'
import SecondPane from './component/SecondPane'
import IMChatPane from './component/IMChatPane/IMChatPane'

var React= require('react');

export default function Routers(props){
    return(
        <Router history={props.history}>
            <Route path="/" component={MainPane}>
                <Route path="chat" component={SecondPane}>
                    <IndexRoute component={IMChatPane}/>
                    <Route path="group(/:id)" component={IMChatPane}/>
                    <Route path="p2p(/:id)" component={IMChatPane}/>
                </Route>

                <Route path={'**'} component={(props)=>{return(<div>路由错误！！</div>)}}/>
            </Route>
        </Router>
    )
}
