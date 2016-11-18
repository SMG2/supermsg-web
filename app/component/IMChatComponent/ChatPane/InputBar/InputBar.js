/**
 * Created by yangbingxun on 2016/11/18.
 */
var react=require('react');
var EmotionButton=require('./EmotionButton');
var MoreButton=require('./MoreButton');
var MsgInput=require('./MsgInput');



class InputBar extends React.Component{
    constructor(props){
        super(props);
        this.state={msgList:[]}
        this.send=this.send.bind(this);
    }


    send(_msg){
        _msg=this.replace_em(_msg);
        var dateTime=new Date();
        var msg={
            forward:'send',
            content:_msg,
            time:Math.round(dateTime.getTime()/1000).toString(),
            headImg:'../material/t.jpg'
        }
        this.props.send(msg);
    }

    replace_em(str){  //从 textarea 替换表情符号
        str = str.replace(/\</g,'&lt;');
        str = str.replace(/\>/g,'&gt;');
        str = str.replace(/\n/g,'<br/>');
        str = str.replace(/\[em_([0-9]*)\]/g,'<img src="/material/img/QQEmotion/$1.gif" border="0" />');
        return str;
    }

    render(){
        return(
            <div className="sendMsgBar">
                <MoreBtn/>
                <MsgInput send={this.send} />
                <EmotionButton/>
            </div>
        )
    }
}

module.exports=InputBar;
