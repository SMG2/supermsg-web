/**
 * Created by yangbingxun on 2016/11/27.
 */

import {Link} from 'react-router'

var React=require('react')

export default class MainNav extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="MainNav">
                <div>
                    <Link activeStyle={{backgroundColor:'lightblue',color:'#5b6de0'}} to="/user/chat">聊天</Link>
                    <Link activeStyle={{backgroundColor:'lightblue',color:'#5b6de0'}} to="/user/adv">公告</Link>
                </div>
            </div>
        )
    }
}