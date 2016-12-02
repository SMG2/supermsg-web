/**
 * Created by yangbingxun on 2016/11/30.
 */

import {Link} from 'react-router'

var React=require('react')
import LoginButton from '../ButtonPane/LoginButton'


export default class InputPane extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="inputPane ">
                <div className="inputFormPane ">
                    <div className="inputForm animate"
                         style={this.props.qr?{transform:'translate(-400px,0)'}:{transform:'translate(0,0)'}}>

                        <div className="inputForm_">
                            <div className="blackMargin inputBlock ">
                                <input type="text" placeholder="账号" className="account center"/>
                            </div>
                            <div className="blackMargin inputBlock ">
                                <div className="center" >
                                    <input type="password" placeholder="密码" className="password center"/>
                                    <Link to="/login/forgot" className="forgot">忘记密码？</Link>
                                </div>
                            </div>
                            <LoginButton/>
                        </div>

                        <div className="QRCodePane" id="QRCodePane">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}