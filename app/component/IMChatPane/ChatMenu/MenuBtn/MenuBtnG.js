/**
 * Created by yangbingxun on 2016/11/25.
 */

import {VIEW_CHAT} from '../../../../reduxComponent/actions/types/chat/chatActionType'
import {Link} from 'react-router'

var React=require('react');

export default class MenuBtnG extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Link to={'/chat/group/'} className="menuBtn group" onClick={()=>{this.props.ChangeChat(VIEW_CHAT.GROUP_CHAT);}}>
                <i
                    className="icon-group icon-3x"
                    onMouseEnter={(e)=>{this.props.mouseIn(VIEW_CHAT.GROUP_CHAT,$(e.target).parent().get(0))}}
                    onMouseOut={(e)=>{this.props.mouseOut(VIEW_CHAT.GROUP_CHAT,$(e.target).parent().get(0))}}
                />
            </Link>
        )
    }
}