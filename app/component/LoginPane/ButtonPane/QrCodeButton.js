/**
 * Created by yangbingxun on 2016/12/1.
 */

import React from 'react'

export default class QrCodeButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hover:false,
            QRCode:false
        }
    }

    render(){
        return(
            <div className="blackMargin buttonBlock qrcodeBtnBlock">
                <button className="qrcodeBtn" onClick={this.props.changeQR} onMouseOver={()=>{this.setState({hover:true})}} onMouseLeave={()=>{this.setState({hover:false})}}>
                    <div style={{display:'inline-block'}}>
                        {this.props.qr?"账号密码登录":"二维码登录"}
                    </div>
                    <i className={this.props.qr?"animate icon-reply":"animate icon-qrcode"} style={this.state.hover?{opacity:'1',width:'25px'}:{}}/>
                </button>
            </div>
        )
    }
}
