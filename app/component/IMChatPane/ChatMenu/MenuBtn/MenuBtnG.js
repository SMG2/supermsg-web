/**
 * Created by yangbingxun on 2016/11/25.
 */

import {VIEW_CHAT} from '../../../../actions/types/chat/chatActionType'

var React=require('react');

export default class MenuBtnG extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="menuBtn group" onClick={()=>(this.props.ChangeChat(VIEW_CHAT.GROUP_CHAT))}>
                <div>
                    <i className="icon-group icon-3x"/>
                </div>
            </div>
        )
    }
}