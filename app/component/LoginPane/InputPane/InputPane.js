/**
 * Created by yangbingxun on 2016/11/30.
 */

import {Link} from 'react-router'
import React from 'react'


import LoginButton from '../ButtonPane/LoginButton'


export default class InputPane extends React.Component{
    constructor(props){
        super(props)
        this.state={
            account:"",
            password:""
        }
    }

    login(loginAction,account,password){
        loginAction(account,password);
    }

    render(){
        return(
            <div className="inputPane ">
                <div className="inputFormPane ">
                    <div className="inputForm animate"
                         style={this.props.qr?{transform:'translate(-400px,0)'}:{transform:'translate(0,0)'}}>
                        <div className="inputForm_">
                            <div className="blackMargin inputBlock ">
                                <input type="text"
                                       placeholder="账号"
                                       className="account center"
                                       onChange={(e)=>{this.setState({account:e.target.value})}}
                                />
                            </div>
                            <div className="blackMargin inputBlock ">
                                <div className="center" >
                                    <input type="password"
                                           placeholder="密码"
                                           className="password center"
                                           onChange={(e)=>{this.setState({password:e.target.value})}}

                                    />
                                    <Link to="/login/forgot" className="forgot">忘记密码？</Link>
                                </div>
                            </div>
                            <LoginButton login={()=>(this.login(this.props.login,this.state.account,this.state.password))}/>
                        </div>

                        <div className="QRCodePane" id="QRCodePane">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}