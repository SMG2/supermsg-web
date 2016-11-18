/**
 * Created by yangbingxun on 2016/11/18.
 */

var InputBar=require('./InputBar/InputBar');
var MsgPane=require('./MsgPane/MsgPane');

class ChatPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msgList: []
        }
        this.show = this.show.bind(this);
    }


    show(msg){
        this.state.msgList.push(msg);
        this.refreshMsg(this.state.msgList);
    }

    refreshMsg(msgList){
        var msgList=msgList;
        // var last=msgList[msgList.length-2].time;
        // var now=msgList[msgList.length-1].time;
        ReactDOM.render(
            <MsgPane msgList={msgList} />,
            document.getElementById('showMsg')
    );
}


    render(){
        return (
            <div>
                <div id="showMsg" className="msgContent">

                </div>
                <InputBar send={this.show} />
            </div>
        )
    }
}

module.exports=ChatPane;
