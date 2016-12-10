/**
 * Created by yangbingxun on 2016/11/19.
 */

import {connect} from 'react-redux'
import {VIEW_CHAT} from '../../reduxComponent/actions/types/chat/chatActionType'
import {browserHistory} from 'react-router'
import {
    sendMsgToG,
    sendMsgToP,
    read
} from '../../reduxComponent/actions/chatActions/chatAction'


import ChatMenu from './ChatMenu/ChatMenu'
import ChatPane from './ChatPane/ChatPane'

var React = require('react');

class IMChatPane extends React.Component{
    constructor(props){
        super(props);
    }

    send(msg,viewChat,id,dispatch){
        let msg_={
            forward:'send',
            type:msg.type,
            content:msg.content,
            date:msg.date,
            time:msg.time,
            headImg:msg.headImg,
            timeStamp:msg.timeStamp,
            read:false
        }

        switch (viewChat){
            case VIEW_CHAT.GROUP_CHAT:
                msg_.groupid=id;
                msg_.view=VIEW_CHAT.GROUP_CHAT;
                dispatch(sendMsgToG(msg_))
                setTimeout(()=>{
                    dispatch(read(VIEW_CHAT.GROUP_CHAT,id));
                },1000)
                browserHistory.push('/user/chat/group/'+id) //通过push路由 重新渲染当前页面 因为redux不能进行自动渲染
                break;
            case VIEW_CHAT.P2P_CHAT:
                msg_.userid=id;
                msg_.view=VIEW_CHAT.P2P_CHAT;
                dispatch(sendMsgToP(msg_))
                setTimeout(()=>{
                    dispatch(read(VIEW_CHAT.P2P_CHAT,id));
                },1000)
                browserHistory.push('/user/chat/p2p/'+id)
                break;
        }
    }

    componentDidMount(){
        let css={'height':$(window).height()-80+"px"}
        $('.bodyPane').css(css);
    }

    render(){
        const {dispatch,msgList,viewChat,id} = this.props;
        return(
            <div className="bodyPane" >
                <section className="ChatMenu">
                    <ChatMenu/>
                </section><section id="ChatPane" className="ChatPane">
                    {
                        typeof id=='string'?<ChatPane
                            msgList={msgList}
                            send={(msg)=>{this.send(msg,viewChat,id,dispatch)}}
                            id={id}/>
                        :<div className="Pane"/>
                    }
                    </section>
            </div>
        )
    }
}

function selectViewChatMsg(chatMsg,viewChatMsg,id){
    if(viewChatMsg)
        switch (viewChatMsg.type){
            case VIEW_CHAT.GROUP_CHAT:
                return typeof chatMsg.group[id] !=='undefined'?chatMsg.group[id]:[];
                break;
            case VIEW_CHAT.P2P_CHAT:
                return typeof chatMsg.p2p[id] !=='undefined'?chatMsg.p2p[id]:[];
                break;
            default:
                return [];
                break;
        }
}

function select(state){
    return{
        msgList:selectViewChatMsg(state.chatMsg,state.viewChatMsg,state.thisChatId),
        viewChat:state.viewChatMsg?state.viewChatMsg.type:{},
        id:state.thisChatId
    }
}

export default connect(select)(IMChatPane);