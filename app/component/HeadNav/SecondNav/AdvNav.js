/**
 * Created by yangbingxun on 2016/12/14.
 */
/**
 * Created by yangbingxun on 2016/11/27.
 */

import {Link,browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {setP2PList,setGroupList} from '../../../reduxComponent/actions/chatActions/chatAction'

import React from 'react'

class SecondNav extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    initUserInfo(dispatch){
        // createAjax({
        //
        // })

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
        var glist=[
            {
                id:'0000001',
                headImg:'http://localhost:8081/material/img/headImg/hj.jpg',
                name:'软件工程四班',
                grade:'2014计算机',
                memberInfo:plist
            },
            {
                id:'0000002',
                headImg:'http://localhost:8081/material/img/headImg/hj.jpg',
                name:'软件工程三班',
                grade:'2014计算机',
                memberInfo:plist
            }
        ];

        dispatch(setP2PList(plist));
        dispatch(setGroupList(glist))

    }

    render(){
        const {dispatch} =this.props;
        return(
            <div>
                <div className="SecondNav chatNav">
                    <div onClick={()=>{this.initUserInfo(dispatch)}}>写公告</div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

function select(state) {
    return {};
}

export default connect(select)(SecondNav)
