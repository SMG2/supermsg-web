/**
 * Created by yangbingxun on 2016/11/25.
 */


import {Link} from 'react-router'
import {connect} from 'react-redux'
import {setChatId} from '../../../../reduxComponent/actions/chatActions/chatAction'

import SingleTalkerInfoBtn from './SingleTalkerInfoBtn'
import SingleTalkerInfoBlock from './SingleTalkerInfoBlock'

import React from 'react'

class SingleTalker extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hover:false,
            unfold:false,
            showMember:false
        }
    }
    mouseEnter(e){
        $(e.target).next().css({'width':'220px'});
    }

    mouseOut(e){
        $(e.target).next().css({'width':'0px'});
    }

    setChatId(id,dispatch){
        dispatch(setChatId(id));
    }

    render(){
        const {dispatch} =this.props;
        const isP2P=this.props.stuNum;

        const cssBottom=
            this.state.hover?
                this.props.choice?
                    {width:'230px',backgroundColor: '#d4d4d4'}
                    :
                    {width:'230px',backgroundColor: '#dddddd'}
                :
                this.props.choice?
                    {width:'230px',backgroundColor: '#d4d4d4'}
                    :
                    {width:'0px',backgroundColor: 'transparent'};
        const Bottom= (props)=>
            {
                props.unfold?cssBottom['borderRadius']='10px 10px 0 0':cssBottom;
                return(
                    <div
                        className="labelBottom"
                        style={cssBottom}
                    />
                )
            }

        return(
            <div className="singleTalkerBlock">
                <div
                    className="singleTalker"
                    id={isP2P?'p'+this.props.id:'g'+this.props.id}
                >
                    <SingleTalkerInfoBtn
                        id={this.props.id}
                        stuNum={!!this.props.stuNum}
                        mouseOver={()=>{this.setState({hover:true})}}
                        mouseLeave={()=>{this.setState({hover:false})}}
                        click={(id)=>{this.setChatId(id,dispatch)}}
                        showMember={()=>{this.setState({unfold:true,showMember:true})}}
                        showInfo={()=>{this.setState({unfold:true,showMember:false})}}
                        hover={this.state.hover}
                    />

                    <Bottom unfold={this.state.unfold}/>

                    <div className="head_img">
                        <img src={this.props.headImg}/>
                    </div>
                    <div className="info">
                        <h1>{this.props.name}</h1>
                        <h2>{this.props.grade}</h2>
                    </div>
                </div>
                {
                    this.state.unfold?
                        this.state.showMember?
                            <SingleTalkerInfoBlock mark={"member"} members={this.props.memberInfo} unfold={()=>{this.setState({unfold:false})}}/>
                            :
                            <SingleTalkerInfoBlock info={"info"} unfold={()=>{this.setState({unfold:false})}}/>
                        :
                        <div/>
                }
            </div>
        )
    }
}

function select(state) {
    return{}
}

export default connect(select)(SingleTalker)