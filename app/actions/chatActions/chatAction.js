/**
 * Created by yangbingxun on 2016/11/21.
 */

import {SEND_MSG_TO_G,SEND_MSG_TO_P,RECEIVE_MSG_FROM_P,SET_VIEW_CHAT,READ} from '../types/chat/chatActionType'

export function sendMsgToP(msg){
    /*
* msg={
*   userid:
*   type:
*   content:
*
*   date:
*   time:
*   headImg:
*   timeStamp:
*   read:
* }
 */

    return {
        view:msg.view,
        type:SEND_MSG_TO_P,
        msg:msg
    }

}
export function sendMsgToG(msg){
    /*
* msg={
*   groupid:
    type:
    content:

    date:
    time:
    headImg:
    timeStamp:
    read:
* }
 */
    return {
        view:msg.view,
        type:SEND_MSG_TO_G,
        msg:msg
    }
}

export function receiveMsgFromP(msg){
    return {
        view:msg.view,
        type:RECEIVE_MSG_FROM_P,
        msg:msg
    }
}
export function receiveMsgFromG(msg){
    return {
        view:msg.view,
        type:RECEIVE_MSG_FROM_G,
        msg:msg
    }
}

export function read(viewChat,id) {
    return{
        view:READ,
        type:viewChat,
        id:id
    }
}

export function showChatMsg(view){
    /*
    view={
        type:GROUP_CHAT||P2P_CHAT
        id:groupid||userid
    }
     */
    return{
        type:SET_VIEW_CHAT,
        view
    }
}
