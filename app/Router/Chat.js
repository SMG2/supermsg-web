/**
 * Created by yangbingxun on 2016/11/26.
 */

import {  Route } from 'react-router';
import SecondPane from '../component/SecondPane'
import IMChatPane from '../component/IMChatPane/IMChatPane'


export default function Chat(props){
    return(
        <Route path="chat" component={SecondPane}>
            <Route path="*(/:id)" component={IMChatPane}/>
        </Route>
    )
}