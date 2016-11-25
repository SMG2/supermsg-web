/**
 * Created by yangbingxun on 2016/11/18.
 */


import InputBar from './InputBar/InputBar'
import MsgPane from'./MsgPane/MsgPane'

var React=require('react');

export default class ChatPane extends React.Component {
    constructor(props) {
        super(props);
    }

    send(msg){
        this.props.send(msg);
    }

    render(){
        return (
            <div className="Pane">
                <div id="showMsg" className="msgContent">
                    {typeof this.props.msgList=='object'&&this.props.msgList instanceof Array?<MsgPane msgList={this.props.msgList} id={this.props.id}/>:<div/>}
                </div>
                <InputBar send={this.props.send} />
            </div>
        )
    }
}


