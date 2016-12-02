/**
 * Created by yangbingxun on 2016/11/27.
 */

import MainNav from '../component/HeadNav/MainNav/MainNav'
import {setGroupList} from '../reduxComponent/actions/chatActions/chatAction'
import {} from '../reduxComponent/actions/types/chat/chatActionType'
import {connect} from 'react-redux'
import  createAjax from '../Ajax/createAjax'

var React=require('react')

export default class MainPane extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mount: false,
            userDetail:null
        }

    }

    componentDidMount(){
        var self=this;
        var id='1033614108438';
        createAjax({
            id:id,
            method:'get',
            url:'http://120.27.49.173:8080/v1.0/users/'+id+'/detail',
            success:function(data,msg,status){
                self.setState({
                    mount:true,
                    userDetail:data
                })
            }
        })
    }


    render(){

        return(
            <div className="">
                {this.state.mount?<MainNav/>:<WaitPane/>}
                <section>
                    {this.props.children}
                </section>
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