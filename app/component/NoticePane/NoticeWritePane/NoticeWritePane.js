/**
 * Created by yangbingxun on 2016/12/15.
 */

import React from 'react'

import ReceiveMenuBlock from './ReceiveMenuBlock'
import WriteBlock from './WriteBlock'

export default class NoticeWritePane extends React.Component{
    constructor(props){
        super(props)
        this.state={
            receiveList:[],
            noticeContent:''
        }
    }

    componentDidMount(){
        let css={'height':$(window).height()-80+"px"}
        $('.bodyPane').css(css);
    }

    submit(){

    }

    setNoticeContent(content){
        this.setState({
            noticeContent:content
        },()=>{
            console.log(this.state.noticeContent)
            console.log(this.state.receiveList)
        })
    }

    setReceiveList(receiveList){
        this.setState({
            receiveList:receiveList
        })
    }

    render(){
        return (
            <div className="bodyPane">
                <WriteBlock send={(content)=>{
                    this.setNoticeContent(content);
                }}/>
                <ReceiveMenuBlock update={(receiveList)=>{
                    this.setReceiveList(receiveList)
                }}/>
            </div>
        )
    }
}