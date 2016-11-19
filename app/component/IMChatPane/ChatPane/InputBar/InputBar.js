/**
 * Created by yangbingxun on 2016/11/18.
 */
var React=require('react');
var EmotionButton=require('./EmotionButton');
var MoreButton=require('./MoreButton');
var MsgInput=require('./MsgInput');



class InputBar extends React.Component{
    constructor(props){
        super(props);
        this.state={msgList:[],send:false}
        this.send=this.send.bind(this);
    }

    send(_msg){
        _msg=this.replace_em(_msg);
        var dateTime=new Date();
        var time=dateTime.toTimeString();
        var msg={
            forward:'send',
            content:_msg,
            timeStamp:dateTime.getTime().toString(),
            headImg:'material/img/headImg/hj.jpg',
            time:time.split(':')[0]+":"+time.split(':')[1],
            date:(dateTime.getMonth()+1)+"月"+dateTime.getDate()+"日"
        }
        if(this.state.send){
            this.props.send(msg);
            this.setState({send:!this.state.send})
        }else{
            msg.forward='receive';
            this.props.send(msg);
            this.setState({send:!this.state.send})
        }

    }

    replace_em(str){  //从 textarea 替换表情符号
        str = str.replace(/\</g,'&lt;');
        str = str.replace(/\>/g,'&gt;');
        str = str.replace(/\n/g,'<br/>');
        str = str.replace(/\[em_([0-9]*)\]/g,'<img src="/assets/material/img/QQEmotion/$1.gif" border="0" />');
        return str;
    }

    render(){
        return(
            <div className="sendMsgBar">
                <MoreButton/>
                <EmotionButton/>
                <MsgInput send={this.send} />

            </div>
        )
    }
}

module.exports=InputBar;
