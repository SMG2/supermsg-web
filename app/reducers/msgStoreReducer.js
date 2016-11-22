/**
 * Created by yangbingxun on 2016/11/21.
 */

import {combineReducers} from 'redux'
import {SEND_MSG_TO_G,SEND_MSG_TO_P,RECEIVE_MSG_FROM_G,RECEIVE_MSG_FROM_P,SET_VIEW_CHAT} from '../action/chatActionType'

function viewChatMsg(state=[],action){
    switch (action.type){
        case SET_VIEW_CHAT:
            return action.filter;
            break;
        default:
            return state;
    }
}

function groupMsg(state=[],action){
    switch (action.type){
        case SEND_MSG_TO_G:
            return [
                ...state.gchat[action.groupid],
                {
                    forward:'send',
                    type:action.msg.type,
                    content:action.msg.content,
                    date:action.msg.date,
                    time:action.msg.time
                }
            ]
            break;
        case RECEIVE_MSG_FROM_G:
            return[
                ...state.gchat[action.groupid],
                {
                    forward:'receive',
                    senduserid:action.senduserid,
                    type:action.msg.type,
                    content:action.msg.content,
                    date:action.msg.date,
                    time:action.msg.time
                }
            ]
        break;
        default:
            return state;
    }
}

function p2pMsg(state=[],action) {
    switch(action.type) {
        case SEND_MSG_TO_P:
            return [
                ...state.pchat[action.userid],
                {
                    forward: 'send',
                    type: action.msg.type,
                    content: action.msg.content,
                    date: action.msg.date,
                    time: action.msg.time
                }
            ]
            break;
        case RECEIVE_MSG_FROM_P:
            return[
                ...state.pchat[action.userid],
                {
                    forward:'receive',
                    type:action.msg.type,
                    content:action.msg.content,
                    date:action.msg.date,
                    time:action.msg.time
                }
            ]
            break;
        default:
            return state;
    }
}

const superMsg=combineReducers({viewChatMsg,p2pMsg,groupMsg});

export default superMsg;