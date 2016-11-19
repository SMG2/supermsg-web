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
            <section id="ChatGroup" className="ChatGroup">
                <ChatGroup/>
            </section><section id="ChatPane" className="ChatPane">
                <ChatPane/>
            </section>
        </div>
        )
    }
}

module.exports=IMChatPane;