/**
 * Created by yangbingxun on 2016/11/18.
 */

import React from 'react'

export default class TimeBar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="timeBlock">
                <div>{this.props.date+" "+this.props.time}</div>
            </div>
        )
    }
}
