/**
 * Created by yangbingxun on 2016/11/25.
 */

import {VIEW_CHAT} from '../../../../reduxComponent/actions/types/chat/chatActionType'
import {Link} from 'react-router'

var React=require('react');

export default class MenuBtnP extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Link to={'/chat/p2p/'} className="menuBtn p2p" onClick={()=>{this.props.ChangeChat(VIEW_CHAT.P2P_CHAT);}} >
                <div>
                    <i className="icon-user icon-3x"/>
                </div>
            </Link>
        )
    }
}