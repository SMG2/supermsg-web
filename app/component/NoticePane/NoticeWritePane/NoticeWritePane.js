/**
 * Created by yangbingxun on 2016/12/15.
 */

import React from 'react'

import ReceiveMenuBlock from './ReceiveMenuBlock'
import WriteBlock from './WriteBlock'

export default class NoticeWritePane extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let css={'height':$(window).height()-80+"px"}
        $('.bodyPane').css(css);
    }


    render(){
        return (
            <div className="bodyPane">
                <WriteBlock/>
                <ReceiveMenuBlock/>
            </div>
        )
    }
}