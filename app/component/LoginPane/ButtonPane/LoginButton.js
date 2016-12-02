/**
 * Created by yangbingxun on 2016/12/1.
 */

import {browserHistory} from 'react-router'

var React=require('react')

export default class LoginButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hover:false
        }
    }

    render(){
        return(
            <div className="buttonBlock blackMargin">
                <button onClick={()=>{browserHistory.push('/user')}} className="loginBtn" onMouseOver={()=>{this.setState({hover:true})}} onMouseLeave={()=>{this.setState({hover:false})}}>
                    <div style={{display:'inline-block'}}>
                        登录
                    </div>
                    <i className={"animate icon-signin"} style={this.state.hover?{opacity:'1',width:'25px'}:{}}/>
                </button>
            </div>
        )
    }
}