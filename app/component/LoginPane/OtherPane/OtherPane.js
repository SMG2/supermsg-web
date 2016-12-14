/**
 * Created by yangbingxun on 2016/11/30.
 */

import {Link} from 'react-router'
import React from 'react'

export default class OtherPane extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="loginOther">
                <div>还没有账号？</div>
                <Link to="/sign" className="signToNew">注册新账号</Link>
            </div>
        )
    }
}
