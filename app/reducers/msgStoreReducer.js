/**
 * Created by yangbingxun on 2016/11/21.
 */

import {combineReducers} from 'redux'
import {SEND_MSG_TO_G,SEND_MSG_TO_P,RECEIVE_MSG_FROM_G,RECEIVE_MSG_FROM_P,SET_VIEW_CHAT} from '../actions/chatActionType'

function viewChatMsg(state=[],action){
    switch (action.type){
        case SET_VIEW_CHAT:
            return action.filter;
            break;
        default:
            return [];
    }
}

function groupMsg(state=[],action){
    switch (action.type){
        case SEND_MSG_TO_G:
            if(!state[action.msg.groupid]) state[action.msg.groupid]=[];
            var a={
                    forward:'send',
                    type:action.msg.type,
                    content:action.msg.content,
                    date:action.msg.date,
                    time:action.msg.time,
                    headImg:action.msg.headImg,
                }

            state[action.msg.groupid].push(a);
            return state;
            break;
        case RECEIVE_MSG_FROM_G:
            if(!state[action.msg.groupid]) state[action.msg.groupid]=[];
            var a={
                forward:'receive',
                type:action.msg.type,
                content:action.msg.content,
                date:action.msg.date,
                time:action.msg.time,
                headImg:action.msg.headImg,
            }

            state[action.msg.groupid].push(a);
            return state;
        break;
        default:
            return state;
    }
}

function p2pMsg(state=[],action) {
    switch(action.type) {
        case SEND_MSG_TO_P:
            if(!state[action.msg.userid]) state[action.msg.userid]=[];
            var a={
                forward:'send',
                type:action.msg.type,
                content:action.msg.content,
                date:action.msg.date,
                time:action.msg.time,
                headImg:action.msg.headImg
            }
            state[action.msg.groupid].push(a);
            return state;
            break;
        case RECEIVE_MSG_FROM_P:
            if(!state[action.msg.userid]) state[action.msg.userid]=[];
            var a={
                forward:'receive',
                type:action.msg.type,
                content:action.msg.content,
                date:action.msg.date,
                time:action.msg.time,
                headImg:action.msg.headImg,
            }

            state[action.msg.groupid].push(a);
            return state;
            break;
        default:
            return state;
    }
}

const superMsg=combineReducers({viewChatMsg,p2pMsg,groupMsg});

export default superMsg;