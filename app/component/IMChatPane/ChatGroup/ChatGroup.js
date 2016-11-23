/**
 * Created by yangbingxun on 2016/11/19.
 */
var React = require('react');

export default class ChatGroup extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div onClick={this.props.test1}>第一组</div>
                <div onClick={this.props.test2}>第二组</div>
            </div>
        )
    }

}