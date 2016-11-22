/**
 * Created by yangbingxun on 2016/11/18.
 */
var React=require('react');

class MsgInput extends  React.Component {
    constructor(props) {
        super(props);
        this.state={
            msg:''
        }

        this.change=this.change.bind(this);
        this.keyDown=this.keyDown.bind(this);
    }

    change(e){
        this.setState({
            msg:e.target.value
        })
    }

    keyDown(e){
        if(e.charCode===13&&e.ctrlKey){
            if(e.target.value.length!=0){
                this.props.send(e.target.value);
            }
            this.setState({
                msg:''
            })
        }
    }

    render(){
        return(
            <div className="textBar clearfix">
                <textarea id="msgInput" name="msgInput" onChange={this.change} value={this.state.msg} onKeyPress={this.keyDown}>
                </textarea>
            </div>
        )
    }
}

module.exports=MsgInput;