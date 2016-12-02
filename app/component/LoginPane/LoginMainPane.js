/**
 * Created by yangbingxun on 2016/11/30.
 */

import HeaderPane from './HeadPane/HeaderPane'
import InputPane from './InputPane/InputPane'
import OtherPane from './OtherPane/OtherPane'
import QrCodeButton from './ButtonPane/QrCodeButton'


var React=require('react')

export default class LoginPane extends React.Component{
    constructor(props){
        super(props);
        this.state={
            qr:false
        }
    }

    componentDidMount(){
        this.initQRCode("what's the fuck!");
    }

    initQRCode(msg){
        var qrcode = new QRCode('QRCodePane', {
            text: msg,
            width: 256,
            height: 256,
            colorDark: '#111111',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.M
        });
    }

    render(){
        return(
            <div className="loginPane">
                <HeaderPane/>
                <InputPane qr={this.state.qr}/>
                <div className="divide blackMargin"><div/></div>
                <QrCodeButton qr={this.state.qr} changeQR={()=>{ this.setState({qr:!this.state.qr})}}/>
                <OtherPane/>
            </div>
        )
    }
}