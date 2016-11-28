/**
 * Created by yangbingxun on 2016/11/19.
 */

import {VIEW_CHAT} from '../../../reduxComponent/actions/types/chat/chatActionType'
import {connect} from 'react-redux'
import {showChatMsg} from '../../../reduxComponent/actions/chatActions/chatAction'

import MenuBtnG from './MenuBtn/MenuBtnG'
import MenuBtnP from './MenuBtn/MenuBtnP'
import TalkerMenu from './MenuPane/TalkerMenu'

var React = require('react');

class ChatMenu extends React.Component{
    constructor(props){
        super(props);
    }

    changeChat(viewChat,dispatch){
        animate(viewChat);
        dispatch(showChatMsg({type:viewChat}))


    }

    render(){
        const {talkerList,dispatch}=this.props;


        return(
            <div className="ChatMenuPane">
                <div className="slideMenu" id="slideMenu">
                    <MenuBtnG ChangeChat={(viewChat)=>{this.changeChat(viewChat,dispatch)}}/>
                    <MenuBtnP ChangeChat={(viewChat)=>{this.changeChat(viewChat,dispatch)}}/>
                </div>
                {talkerList?<TalkerMenu talkerList={talkerList}/>:<div/>}
            </div>

        )
    }



}
function animate(viewChat){
    $('.ChatMenuPane').css({width:'305px'})
    $('.slideMenu').css({borderRight:'3px solid #666666'})

    switch (viewChat){
        case VIEW_CHAT.GROUP_CHAT:
            $('.group').css({backgroundColor:'#dddddd'})
            $('.p2p').css({backgroundColor:'#ffffff'})
            break;
        case VIEW_CHAT.P2P_CHAT:
            $('.p2p').css({backgroundColor:'#dddddd'})
            $('.group').css({backgroundColor:'#ffffff'})
            break;
    }
}

function getTalkerList(talkers,view){
    switch (view){
        case VIEW_CHAT.GROUP_CHAT:
            return talkers.glist;
            break;
        case VIEW_CHAT.P2P_CHAT:
            return talkers.plist;
            break;
    }

}

function select(state){
    return({
        talkerList:getTalkerList(state.listOfChatObject,state.viewChatMsg.type)
    })

}

export default connect(select)(ChatMenu)