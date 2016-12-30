/**
 * Created by yangbingxun on 2016/11/27.
 */

import {Link} from 'react-router'

import {connect} from 'react-redux'

import {getCookie} from '../../../plugin/Cookie/MyCookie'
import createAjax from '../../../plugin/Ajax/createAjax'
import React from 'react'

class MainNav extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            on: '',
            goEasy: null,
            remindTitle:'',
            remindMsg:'',
            remindData:[],
            showRemind:false,
        };
        this.initListener=this.initListener.bind(this)
        this.clickRemindBlock=this.clickRemindBlock.bind(this)
    }

    componentDidMount(){
        // this.setState({
        //     goEasy:new GoEasy({
        //         appkey:'eb76ed63-ee44-4f07-96ac-eba8c2e544e6',
        //         onConnected:function(){console.log('connected')},
        //         onDisConnected:function(){console.log('disconnected')},
        //         onConnectFailed:function(err){console.log(err)}
        //     })
        // })
        var that=this;
        setTimeout(()=>{
            that.setState({
                remindTitle:'新消息',
                remindMsg:'四班',
                showRemind:true
            })
        },3000)
        this.initListener();
    }

    enter(node){
        node.find('div').css({width:'40px'})
    }

    leave(node){
        node.find('div').css({width:'0px'})
    }

    initListener(){
        var userid=getCookie('userid');
        var that=this;
        createAjax({   //获取监听端口
            id:userid,
            method:'get',
            url:'/v1.0/users/'+userid+'/group',
            success:function(data){
                // that.state.goEasy.subscribe({
                //     channel:data.group,
                //     onMessage:function(msg){    //接收消息
                //         if(msg){
                //             that.receiveMsg(msg)
                //         }
                //     }
                // })
            }
        })
    }

    clickRemindBlock(cancel,dispatch){
        this.setState({showRemind:false});
        if (cancel) return;

    }

    receiveMsg(msg){
        console.log(msg);
    }


    render(){
        const {dispatch,userInfo} =this.props;

        const chat=location.pathname.indexOf('chat')
        const adv=location.pathname.indexOf('notice')

        const Line=(props)=>{
            const css={
                display:'block',
                height:'3px',
                position:'absolute',
                left:'0',right:'0',
                bottom:'0',top:'45px',
                margin:'auto',
                borderRadius:'3px',
                transition:'all 0.3s'
            }
            props.active?css['backgroundColor']='#38c2f2':css['backgroundColor']='#444444'
            props.active?css['width']='40px':css['width']='0'
            return(
                <div style={css}/>
            )
        }

        return(
            <div className="headerNav">
            <div className="MainNav">
                <div className="logoBlock">
                    <b>S</b>choolMsg
                </div>
                <div className="navBlock">
                    <div className="chatNav">
                        <Link to="/user/chat"
                              onClick={(e)=>{
                                    this.setState({
                                        on:'chat'
                                    })
                              }}
                              onMouseOver={(e)=>{
                                  chat>0?this.setState({on:'chat'}):null;
                                  if(this.state.on!='chat') this.enter($(e.target))
                              }}
                              onMouseOut={(e)=>{
                                  if(this.state.on!='chat') this.leave($(e.target))
                              }}
                        >
                            聊天
                            {chat>0?<Line active={true}/>:<Line active={this.state.on=="chat"}/>}
                        </Link>
                    </div>
                    <div className="advNav">
                        <Link to="/user/notice"
                              onClick={(e)=>{
                                  this.setState({
                                      on:'notice'
                                  })
                              }}
                              onMouseOver={(e)=>{
                                  adv>0?this.setState({on:'notice'}):null;
                                  if(this.state.on!='notice') this.enter($(e.target))
                              }}
                              onMouseOut={(e)=>{
                                  if(this.state.on!='notice') this.leave($(e.target))
                              }}
                        >
                            公告
                            {adv>0?<Line active={true}/>:<Line active={this.state.on=="notice"}/>}
                        </Link>
                    </div>
                </div>

                <MenuBlock headImg={userInfo.headImg}/>
            </div>
                <RemindBlock
                title={this.state.remindTitle}
                msg={this.state.remindMsg}
                show={this.state.showRemind}
                click={(e)=>(this.clickRemindBlock(e))}
                dispatch={dispatch}
                    />
                {/*<MenuPane />*/}
            </div>
        )
    }
}

function select(state){
    return{
        userInfo:state.userInfo
    }
}

export default connect(select)(MainNav)

class RemindBlock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hidden:false
        }
    }

    componentDidMount(){

    }

    componentWillReceiveProps(nextProps){
        var css=nextProps.show?{display:'block'}:{display:'none'}
        if(nextProps.show){
            $('.remindBlock').css(css)
        }else {
            setTimeout(()=>{$('.remindBlock').css(css)},300)
        }
    }

    componentDidUpdate(){


    }

    render(){
        return(
            <div className="remindBlock"
                 style={this.props.show?{transform:'translate(-180px,0px)'}:{transform:'translate(0px,0px)'}}>
                <div className="left"
                     onClick={()=>{this.props.click(false,this.props.dispatch)}}
                     onMouseOver={()=>{this.setState({hidden:true})}}
                >
                    <div className="remindTitle">
                        {this.props.title}
                    </div>
                    <div className="remindMsg">
                        {this.props.msg}
                    </div>
                </div>
                <div className="right" onClick={()=>{this.props.click(true)}}>
                    忽略
                </div>
            </div>
        )

    }
}

class MenuBlock extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="menuBlock">
                <div className="btnBlock">
                    <img src={this.props.headImg} />
                </div>
            </div>
        )
    }
}

class MenuPane extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="menuPane">
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }

}