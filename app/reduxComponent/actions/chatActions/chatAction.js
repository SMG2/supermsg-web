/**
 * Created by yangbingxun on 2016/11/21.
 */

import {
    SEND_MSG_TO_G,
    SEND_MSG_TO_P,
    RECEIVE_MSG_FROM_P,
    SET_VIEW_CHAT,
    READ,
    CHAT_OBJECT_LIST,
    SET_THIS_CHAT_ID
} from '../types/chat/chatActionType'


//聊天消息
export function setChatId(id){
    return{
        type:SET_THIS_CHAT_ID,
        id:id
    }
}

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

//设置聊天对象列表信息
 /*
infos={
    [{
        id:groupid||userid
        headImg:
        name:cnmae||stuName
        grade:
        stuNum:(P2P)
    }],
    ...
    }
*/
export function setGroupList(infos) {
    return{
        type:CHAT_OBJECT_LIST.GROUP,
        infos:infos
    }
}
export function setP2PList(infos) {
    return{
        type:CHAT_OBJECT_LIST.P2P,
        infos:infos
    }
}

//聊天展示对象
export function showChatMsg(view){
    /*
    view={
        type:GROUP_CHAT||P2P_CHAT
        id:groupid||userid (暂时不要)
    }
     */
    return{
        type:SET_VIEW_CHAT,
        view
    }
}