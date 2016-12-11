/**
 * Created by yangbingxun on 2016/11/19.
 */

import {VIEW_CHAT} from '../../../reduxComponent/actions/types/chat/chatActionType'
import {connect} from 'react-redux'
import {showChatMsg} from '../../../reduxComponent/actions/chatActions/chatAction'

import MenuBtnG from './MenuBtn/MenuBtnG'
import MenuBtnP from './MenuBtn/MenuBtnP'
import MenuBtnSet from './MenuBtn/MenuBtnSet'
import TalkerMenu from './MenuPane/TalkerMenu'

var React = require('react');

class ChatMenu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            unfold:false,
            button:null
        }
        this.changeChat=this.changeChat.bind(this)
    }

    changeChat(viewChat,dispatch){
        animate(viewChat);
        this.setState({
          button:viewChat
        })
        dispatch(showChatMsg({type:viewChat}))
    }

    mouseIn(viewChat,node,nodeViewChat){
        if(viewChat!=nodeViewChat){
            $(node).css({'background-color':'#eeeeee'})
        }
    }

    mouseOut(viewChat,node,nodeViewChat){
        if(viewChat!=nodeViewChat){
            $(node).css({'background-color':'transparent'})
        }
    }


    render(){
        const {talkerList,dispatch,viewChat,id}=this.props;
        if(viewChat){
            setTimeout(()=>{
                $('.ChatMenuPane').css({width:'305px'})
                $('.menuBtn.set .animate').css({transform:'rotate(-180deg)'})
                $('.slideMenu').css({borderRight:'3px solid #666666'})
                animate(viewChat)
            },0)
        }

        return(
            <div className="ChatMenuPane">
                <div className="slideMenu" id="slideMenu">
                    <MenuBtnG
                        ChangeChat={(viewChat)=>{this.changeChat(viewChat,dispatch)}}
                        mouseIn={(nodeViewChat,node)=>{this.mouseIn(viewChat,node,nodeViewChat)}}
                        mouseOut={(nodeViewChat,node)=>{this.mouseOut(viewChat,node,nodeViewChat)}}
                    />
                    <MenuBtnP
                        ChangeChat={(viewChat)=>{this.changeChat(viewChat,dispatch)}}
                        mouseIn={(nodeViewChat,node)=>{this.mouseIn(viewChat,node,nodeViewChat)}}
                        mouseOut={(nodeViewChat,node)=>{this.mouseOut(viewChat,node,nodeViewChat)}}
                    />
                    <MenuBtnSet

                    />
                </div>
                {talkerList?<TalkerMenu talkerList={talkerList} id={id}/>:<div/>}
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
        talkerList:getTalkerList(state.listOfChatObject,state.viewChatMsg.type),
        viewChat:state.viewChatMsg.type,
        id:state.thisChatId
    })

}

export default connect(select)(ChatMenu)