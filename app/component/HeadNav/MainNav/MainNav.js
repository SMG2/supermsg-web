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
                <Link to="/chat">聊天</Link>
                &nbsp;
                <Link to="/adv">公告</Link>
            </div>
        )
    }
}