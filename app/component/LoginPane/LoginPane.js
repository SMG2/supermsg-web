/**
 * Created by yangbingxun on 2016/11/30.
 */

import LoginPane from './LoginMainPane'

var React=require('react')

export default class ForgotPane extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <div>
                {this.props.children?this.props.children:<LoginPane/>}
            </div>
        )
    }
}