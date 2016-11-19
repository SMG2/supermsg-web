/**
 * Created by yangbingxun on 2016/11/19.
 */
var React = require('react');
var ChatPane=require('./ChatPane/ChatPane');
var ChatGroup=require('./ChatGroup/ChatGroup')

class IMChatPane extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        return(
        <div>
            <section className="Chatgroup">
                <ChatGroup/>
            </section><section className="ChatPane">
                <ChatPane/>
            </section>
        </div>
        )
    }
}

module.exports=IMChatPane;