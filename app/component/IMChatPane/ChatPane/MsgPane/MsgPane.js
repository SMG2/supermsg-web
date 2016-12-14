/**
 * Created by yangbingxun on 2016/11/18.
 */


import SingleMsg from'./SingleMsg'

import React from 'react'

export default class MsgPane extends React.Component{
    constructor(props){
        super(props);
    }


    componentDidMount() {
        this.toNewMsg(document.getElementById('showMsg'));
    }
    componentDidUpdate() {
        this.toNewMsg(document.getElementById('showMsg'));
    }

    toNewMsg(node){
        node.scrollTop=node.scrollHeight;
    }

    render() {
        const msgListBlock = [];
        if(this.props.msgList instanceof Array )
            this.props.msgList.forEach((msg,index)=> {
                    msgListBlock.push(
                        <SingleMsg key={this.props.id+""+index} forward={msg.forward} content={msg.content}  headImg={msg.headImg} time={msg.time} date={msg.date} read={msg.read}/>
                    )
            });
        if(msgListBlock.length!=0){
            return (
                <div>{msgListBlock}</div>
            )
        }else{
            return(
                <div/>
        )
        }

    }
}
