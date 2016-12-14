/**
 * Created by yangbingxun on 2016/12/6.
 */

import {Link} from 'react-router'


import React from 'react'

export default class MenuBtnSet extends React.Component{
    constructor(props){
        super(props)
    }

    mouseOver(e){
        $(e.target).css({
            'transform':'rotate(0deg)'
        })
    }
    mouseOut(e){
        $(e.target).css({
            'transform':'rotate(-180deg)'
        })
    }

    render(){


        return(
            <Link className="menuBtn set">
                <i className=" icon-cog animate"
                   onMouseOver={(e)=>{this.mouseOver(e)}}
                   onMouseLeave={(e)=>{this.mouseOut(e)}}
                />
            </Link>
        )
    }
}