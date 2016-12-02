/**
 * Created by yangbingxun on 2016/11/30.
 */

import {browserHistory} from 'react-router'

var React=require('react')

export default class ForgotPane extends React.Component{
    constructor(props){
        super(props);
        this.state={
            thover:false,
            bhover:false

        }
    }

    render(){

        return(
            <div className="loginPane forgotPane">
                <div className="headBlock blackMargin">
                    <div>哎呀，真是粗心，密码忘了。</div>
                </div>
                <div className="inputBlock center" >
                    <input type="text" placeholder="输入手机号试试..." className="account center"/>
                </div>

                <div className="buttonBlock center blackMargin ">
                    <button className="loginBtn" onMouseOver={()=>{this.setState({thover:true})}} onMouseLeave={()=>{this.setState({thover:false})}}>
                        <div style={{display:'inline-block'}}>
                            试一试
                        </div>
                        <i className={"animate icon-signin"} style={this.state.thover?{opacity:'1',width:'25px'}:{}}/>
                    </button>
                </div>
                <div className="buttonBlock center blackMargin remember">
                    <button onClick={()=>{browserHistory.go(-1)}} className="loginBtn" onMouseOver={()=>{this.setState({bhover:true})}} onMouseLeave={()=>{this.setState({bhover:false})}}>
                        <div style={{display:'inline-block'}}>
                            想起来了
                        </div>
                        <i className={"animate icon-reply"} style={this.state.bhover?{opacity:'1',width:'25px'}:{}}/>
                    </button>
                </div>
            </div>

        )
    }
}
