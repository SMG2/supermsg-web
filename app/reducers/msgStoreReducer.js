/**
 * Created by yangbingxun on 2016/11/21.
 */

import {combineReducers} from 'redux'
import {SEND_MSG_TO_G,SEND_MSG_TO_P,RECEIVE_MSG_FROM_G,RECEIVE_MSG_FROM_P,SET_VIEW_CHAT,VIEW_CHAT,READ} from '../actions/types/chat/chatActionType'

function viewChatMsg(state=[],action){
    switch (action.type){
        case SET_VIEW_CHAT:
            return action.view;
            break;
        default:
            return [];
    }
}

function chatMsg(state=[],action){
    if(!state.group||typeof state.group !='object') state.group={};
    if(!state.p2p ||typeof state.p2p !='object') state.p2p={};
    switch (action.view){
        case VIEW_CHAT.GROUP_CHAT:
            state.group=groupMsg(state.group,action);
            return state;
            break;
        case VIEW_CHAT.P2P_CHAT:
            state.p2p=p2pMsg(state.p2p,action);
            return state;
            break;
        case READ:
            return readAll(state,action);
            break;
        default:
            return state;
    }

}

function groupMsg(group=[],action){
    // console.log(group)
    switch (action.type){
        case SEND_MSG_TO_G:
            if(!group[action.msg.groupid]) group[action.msg.groupid]=[];
            var a={
                forward:'send',
                type:action.msg.type,
                content:action.msg.content,
                date:action.msg.date,
                time:action.msg.time,
                headImg:action.msg.headImg,
                read:action.msg.read
            }

            group[action.msg.groupid].push(a);
            // console.log(group)
            return group;
            break;
        case RECEIVE_MSG_FROM_G:
            if(!group[action.msg.groupid]) group[action.msg.groupid]=[];
            var a={
                forward:'receive',
                type:action.msg.type,
                content:action.msg.content,
                date:action.msg.date,
                time:action.msg.time,
                headImg:action.msg.headImg,
                read:action.msg.read
            }

            group[action.msg.groupid].push(a);
            return group;
            break;
        default:
            return group;
    }
}

function p2pMsg(p2p=[],action) {

    switch(action.type) {
        case SEND_MSG_TO_P:
            if(!p2p[action.msg.userid]) p2p[action.msg.userid]=[];
            var a={
                forward:'send',
                type:action.msg.type,
                content:action.msg.content,
                date:action.msg.date,
                time:action.msg.time,
                headImg:action.msg.headImg,
                read:action.msg.read
            }
            p2p[action.msg.groupid].push(a);
            return p2p;
            break;
        case RECEIVE_MSG_FROM_P:
            if(!p2p[action.msg.userid]) p2p[action.msg.userid]=[];
            var a={
                forward:'receive',
                type:action.msg.type,
                content:action.msg.content,
                date:action.msg.date,
                time:action.msg.time,
                headImg:action.msg.headImg,
                read:action.msg.read
            }

            p2p[action.msg.userid].push(a);
            return p2p;
            break;
        default:
            return p2p;
    }
}

function readAll(state=[],action){
    switch(action.type){
        case VIEW_CHAT.GROUP_CHAT:
            state.group[action.id].map(msg=>{msg.read=true;return msg})
            return state;
            break;
        case VIEW_CHAT.P2P_CHAT:
            state.p2p[action.id].map(msg=>{msg.read=true;return msg})
            return state;
            break;
        default:
            return state;
    }
}

var msgStoreReducers={viewChatMsg,chatMsg}

export default msgStoreReducers