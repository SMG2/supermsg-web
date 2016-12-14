/**
 * Created by yangbingxun on 2016/12/14.
 */

import {SET_USER_INFO} from '../types/userActionType'

export function setUserInfo(info){

    return {
        info:info,
        type:SET_USER_INFO
    }
}