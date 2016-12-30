/**
 * Created by yangbingxun on 2016/12/15.
 */

import React from 'react'
import {connect} from 'react-redux'
import ReceiveMenuBlock from './ReceiveMenuBlock'
import WriteBlock from './WriteBlock'

import createAjax from '../../../plugin/Ajax/createAjax'


class NoticeWritePane extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            receiveList:[],
            noticeContent:''
        }
        this.submit=this.submit.bind(this)
    }

    componentDidMount(){
        let css={'height':$(window).height()-80+"px"}
        $('.bodyPane').css(css);
    }

    submit(id){
        //提交公告
        var data_={
            title:this.state.title,
            content:this.state.noticeContent
        };

        createAjax({ //上传公告网页
            id:id,
            method:'post',
            url:'/v1.0/file/upload',
            data:data_,
            success:function(data){
                if(data.url){
                    createAjax({
                        id: id,
                        method: 'post',
                        url: '/v1.0/push/all',
                        data:{title:data_.title,content:data.url},
                        success:function(data,msg){
                            alert('公告发送成功');
                        }
                    })
                }
            }
        })
    }

    setNoticeContent(content,submit,id){
        this.setState({
            noticeContent:content
        },()=>{
            submit(id)
        })
    }

    setReceiveList(receiveList){
        this.setState({
            receiveList:receiveList
        })
    }

    setTitle(title){
        this.setState({
            title:title
        })
    }

    render(){

        const {id}=this.props

        return (
            <div className="bodyPane">
                <WriteBlock
                    send={(content,title)=>{
                    this.setTitle(title);
                    this.setNoticeContent(content,this.submit,id);
                    }}
                />
                <ReceiveMenuBlock update={(receiveList)=>{
                    this.setReceiveList(receiveList)
                }}/>
            </div>
        )
    }
}

function select(state){
    return {
        id:state.userInfo.id
    }

}

export default connect(select)(NoticeWritePane)