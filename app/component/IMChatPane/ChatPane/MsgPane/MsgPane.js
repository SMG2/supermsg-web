/**
 * Created by yangbingxun on 2016/11/18.
 */
var React=require('react');
var SingleMsg=require('./SingleMsg');
var TimeBar=require('./TimeBar');

class MsgPane extends React.Component{
    constructor(props){
        super(props);
        this.state={
            addTimeBar:false
        }
    }

    componentDidUpdate() {
        this.toNewMsg(document.getElementById('showMsg'));

    }


    toNewMsg(node){
        node.scrollTop=node.scrollHeight;
    }

    render() {
        const msgListBlock = [];
        this.props.msgList.forEach(msg=> {
                msgListBlock.push(
                    <SingleMsg key={msg.timeStamp} forward={msg.forward} content={msg.content}  headImg={msg.headImg} time={msg.time} date={msg.date}/>
                )
        });
        return (
            <div>{msgListBlock}</div>
        )
    }
}

module.exports=MsgPane;