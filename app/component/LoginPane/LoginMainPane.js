/**
 * Created by yangbingxun on 2016/11/30.
 */

import {connect} from 'react-redux'
import {setGroupList,setP2PList} from '../../reduxComponent/actions/chatActions/chatAction'
import {setUserInfo} from '../../reduxComponent/actions/userActions/userAction'

import {browserHistory} from 'react-router'

import HeaderPane from './HeadPane/HeaderPane'
import InputPane from './InputPane/InputPane'
import OtherPane from './OtherPane/OtherPane'
import QrCodeButton from './ButtonPane/QrCodeButton'

import createAjax from '../../plugin/Ajax/createAjax'
import {setCookie} from '../../plugin/Cookie/MyCookie'

import React from 'react'

class LoginPane extends React.Component{
    constructor(props){
        super(props);
        this.state={
            qr:false,
            SignIn:false,
            qrMsg:"",
            goEasy:null,
            dispatch:null,
            loginChannel:''
        }
        this.accountLogin=this.accountLogin.bind(this);
        this.qrLogin=this.qrLogin.bind(this);
        this.initQRCode=this.initQRCode.bind(this);
    }

    componentDidMount(){
        this.initQRCode();
    }


    initQRCode(){
        var self=this;
        createAjax({    //获取二维码
            method:"get",
            url:"/v1.0/auth/qrcode/"+new Date().getTime(),
            success:function(data){
                var qrcode = new QRCode('QRCodePane', {
                    text: '{action:"login", url:"'+data.url+'"}',
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
                    }),
                    loginChannel:data.channel
                })
                self.state.goEasy.subscribe({
                        channel:data.channel,
                        onMessage:function(msg){
                            if(msg){
                                var content=JSON.parse(msg.content)
                                var userid=content.userid;
                                self.state.goEasy.unsubscribe({
                                    channel:msg.channel,
                                    onSuccess:function(){console.log('disConnected')}
                                })
                               self.qrLogin(userid);
                            }
                        }
                    }
                )
            }
        });
    }

    accountLogin(account,password){
        account=account?account:'17764591353';
        password=password?password:'123456789';
        var url="/v1.0/auth/account/"+account;
        var that=this;
        createAjax({
            url:url,
            method:'post',
            data:{
                pwd:password
            },
            success:function(data){
                if(!data){location.reload()}
                that.setState({
                        SignIn:true
                    },
                    ()=>{that.initUserInfo(data.userid)}
                );
            },
            fail:function(msg,status){
                console.log(msg,status)
            }

        });
        this.state.goEasy.unsubscribe({
            channel:this.state.loginChannel,
            onSuccess:function(){console.log('disConnected')}
        })

    }

    qrLogin(id){
        this.setState({
            SignIn:true
        },
            ()=>{this.initUserInfo(id)}
        );

    }

    initUserInfo(userId){
        var plist=[];
        var glist=[];
        var that=this;
        var grade,className;
        var groupid;

        setCookie('userid',userId,1); //设置cookie

        createAjax({     //获取用户个人基本信息
            id:userId,
            url:'/v1.0/users/'+userId,
            method:'get',
            success:function(data,msg){
                if (data){
                    that.state.dispatch(setUserInfo({
                        id:data.id,
                        headImg:getHeadImgData(data.name),
                        name:data.name,
                        nation:data.nation,
                        stuNum:data.st_num,
                        sex:data.sex
                    }))
                }
            }
        })

        createAjax({  //请求用户所在组群
            id:userId,
            url:'/v1.0/users/'+userId+'/group',
            method:'get',
            success:function(data,msg){
                if(data){
                    groupid=data.group;

                    createAjax({  //请求组群内所有用户信息
                        id:userId,
                        url:'/v1.0/groups/'+groupid+'/users',
                        method:'get',
                        success:function(data){
                            var userData=data.userData;

                            createAjax({    //取组群中一个人的id查询组群的信息
                                id:userId,
                                url:'/v1.0/users/'+userId+'/detail',
                                method:'get',
                                success:function(data){
                                    grade=data.grade+data.college;
                                    className=data.major+numberToChina(data.cla.substring(data.cla.length-1))+'班';
                                    userData.map((user)=>{
                                        if(userId==user.id) return;
                                        plist.push({
                                            id:user.id,
                                            headImg:getHeadImgData(user.name),
                                            name:user.name,
                                            nation:user.nation,
                                            stuNum:user.st_num,
                                            sex:user.sex,
                                            grade:grade.substring(0,grade.length-2)+className
                                        })
                                    })
                                    glist.push({
                                        id:data.cla,
                                        headImg:getHeadImgData(className.substring(className.length-2,className.length-1)),
                                        name:className,
                                        grade:grade,
                                        memberInfo:plist
                                    });
                                    that.state.dispatch(setP2PList(plist));
                                    that.state.dispatch(setGroupList(glist));
                                    browserHistory.push('/user')
                                }
                            })
                        }
                    })
                }
                else console.log(msg)
            }
        })

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
    return{}
}


export default connect(select)(LoginPane)


function getHeadImgData(name){
    var color="7C9CBC,8E8882,C2AE97,BF6462,F8CECA,C25B7D,85CC9F,B1E1A4,5CACC1,9FD4C1"
    color=color.split(",");
    var font=name.substring(0,1);
    var canvas=$('<canvas width="100" height="100"></canvas>').get(0);
    var context=canvas.getContext('2d');

    context.fillStyle="#"+color[Math.floor(Math.random()*10)];
    context.beginPath();
    context.arc(50,50,50,0,360*Math.PI/180,true);
    context.fill();

    context.beginPath();
    context.fillStyle='white';
    context.font="60px 微软雅黑";
    context.textAlign='center';
    context.textBaseline='middle';
    context.fillText(font,50,50);
    return canvas.toDataURL('image/png')
}

function numberToChina(num){
    switch (num){
        case '1':
            return '一';
            break;
        case '2':
            return '二'
            break;
        case '3':
            return '三'
            break;
        case '4':
            return '四'
            break;
        case '5':
            return '五'
            break;
        case '6':
            return '六'
            break;
        case '7':
            return '七'
            break;
        case '8':
            return '八';
            break;
        case '9':
            return '九'
            break;
        case '10':
            return '十'
            break;
    }
}