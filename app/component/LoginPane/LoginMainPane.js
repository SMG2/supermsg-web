/**
 * Created by yangbingxun on 2016/11/30.
 */

import {connect} from 'react-redux'
import {setGroupList,setP2PList} from '../../reduxComponent/actions/chatActions/chatAction'

import {browserHistory} from 'react-router'

import HeaderPane from './HeadPane/HeaderPane'
import InputPane from './InputPane/InputPane'
import OtherPane from './OtherPane/OtherPane'
import QrCodeButton from './ButtonPane/QrCodeButton'
import createAjax from '../../plugin/Ajax/createAjax'


var React=require('react')

class LoginPane extends React.Component{
    constructor(props){
        super(props);
        this.state={
            qr:false,
            SignIn:false,
            qrMsg:"",
            goeasy:null,
            dispatch:null
        }
        this.accountLogin=this.accountLogin.bind(this);
        this.qrLogin=this.qrLogin.bind(this);
        this.initQRCode=this.initQRCode.bind(this);
        // this.initUserInfo=this.initUserInfo(this);
    }

    componentDidMount(){
        this.initQRCode();

    }


    initQRCode(){
        var self=this;
        createAjax({
            method:"get",
            url:"http://120.27.49.173:8080/v1.0/auth/qrcode/"+new Date().getTime(),
            success:function(data){
                var qrcode = new QRCode('QRCodePane', {
                    text: data.url,
                    width: 256,
                    height: 256,
                    colorDark: '#111111',
                    colorLight: '#ffffff',
                    correctLevel: QRCode.CorrectLevel.H
                });
                self.setState({
                    goEasy: new GoEasy({
                        appkey:'eb76ed63-ee44-4f07-96ac-eba8c2e544e6',
                        onConnected:function(){console.log('connected')},
                        onDisConnected:function(){console.log('disconnected')},
                        onConnectFailed:function(err){console.log(err)}
                    })
                })
                self.state.goEasy.subscribe({
                        channel:data.channel,
                        onMessage:function(msg){
                            console.log(msg)
                        }
                    }
                )
            }
        });
    }

    accountLogin(account,password){
        var id=123;
        // createAjax({
        //
        // });

        this.setState({
            SignIn:true
        },
            ()=>{this.initUserInfo(id)}
            );

    }

    qrLogin(id){
        this.setState({
            SignIn:true
        },
            ()=>{this.initUserInfo(id)}
        );

    }

    initUserInfo(userId){
        // createAjax({
        //
        // })

        var glist=[
            {
                id:'0000001',
                headImg:'http://localhost:8081/material/img/headImg/hj.jpg',
                name:'软件工程四班',
                grade:'2014计算机',
            },
            {
                id:'0000002',
                headImg:'http://localhost:8081/material/img/headImg/hj.jpg',
                name:'软件工程三班',
                grade:'2014计算机',
            }
        ];
        var plist=[
            {
                id:'0000003',
                headImg:'http://localhost:8081/material/img/headImg/hj.jpg',
                name:'朱鑫',
                grade:'2014计算机软件工程三班',
                stuNum:'14108438',
            },{
                id:'0000004',
                headImg:'http://localhost:8081/material/img/headImg/hj.jpg',
                name:'杨炳勋',
                grade:'2014计算机软件工程四班',
                stuNum:'14108438',
            }
        ];
        this.state.dispatch(setP2PList(plist));
        this.state.dispatch(setGroupList(glist))
        if(this.state.SignIn){
            browserHistory.push('/user')
        }

    }

    render(){
        const {dispatch} =this.props;

        return(
            <div>
                {this.state.SignIn?
                    <WaitPane/>
                    :
                    <div className="loginPane">
                        <HeaderPane/>
                        <InputPane
                            qr={this.state.qr}
                            login={(account,password)=>{
                                this.setState({dispatch:dispatch});
                                this.accountLogin(account,password)
                            }}/>
                        <div className="divide blackMargin"><div/></div>
                        <QrCodeButton
                            qr={this.state.qr}
                            changeQR={()=>{
                                this.setState({qr:!this.state.qr,dispatch:dispatch})
                            }}/>
                        <OtherPane/>
                    </div>
                }
            </div>

        )
    }
}

class WaitPane extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="waitPane center">
                <div className="animate"></div>
                <div className="animate"></div>
                <div className="animate"></div>
                <div className="animate"></div>
            </div>
        )
    }
}

function select(state) {
    return{}}


export default connect(select)(LoginPane)