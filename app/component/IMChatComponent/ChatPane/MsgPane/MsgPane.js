/**
 * Created by yangbingxun on 2016/11/18.
 */
var React=require('react');
var SingleMsg=require('./SingleMsg');

class MsgPane extends React.Component{
    constructor(props){
        super(props);
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
                <SingleMsg forward={msg.forward} content={msg.content} key={msg.time} headImg={msg.headImg}/>
            )
        })
        return (
            <div>{msgListBlock}</div>
        )
    }
}

module.exports=MsgPane;