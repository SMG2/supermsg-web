/**
 * Created by yangbingxun on 2016/11/25.
 */

import {VIEW_CHAT} from '../../../../actions/types/chat/chatActionType'

var React=require('react');

export default class MenuBtnP extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="menuBtn p2p" onClick={()=>(this.props.ChangeChat(VIEW_CHAT.P2P_CHAT))} >
                <div>
                    <i className="icon-user icon-3x"/>
                </div>
            </div>
        )
    }
}