/**
 * Created by yangbingxun on 2016/11/21.
 */

import {SEND_MSG_TO_G,SEND_MSG_TO_P,RECEIVE_MSG_FROM_P,SET_VIEW_CHAT} from './chatActionType'

export function sendMsgToP(msg){
    /*
* msg={
*   userid:
*   type:                        提醒朱鑫
*   content:
*
*   date:
*   time:
*   headImg:
*   timeStamp:
* }
 */

    return {
        type:SEND_MSG_TO_P,
        msg:msg
    }

}
export function sendMsgToG(msg){
    /*
* msg={
*   groupid:
    type:                        提醒朱鑫
    content:

    date:
    time:
    headImg:
    timeStamp:
* }
 */
    return {
        type:SEND_MSG_TO_G,
        msg:msg
    }
}

export function receiveMsgFromP(msg){
    return {
        type:RECEIVE_MSG_FROM_P,
        msg:msg
    }
}
export function receiveMsgFromG(msg){
    return {
        type:RECEIVE_MSG_FROM_G,
        msg:msg
    }
}

export function showChatMsg(filter){
    /*
    filter={
        type:GROUP_CHAT||P2P_CHAT
        id:groupid||userid
    }
     */
    return{
        type:SET_VIEW_CHAT,
        filter
    }
}
