/**
 * Created by yangbingxun on 2016/11/25.
 */

import SingleTalker from './SingleTalker'

import React from 'react'

export default class TalkerMenu extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        setTimeout(()=>{$('#talkerMenuPane').css({width:'240px'})},0)
    }

    render(){
        var talkerBlock=[];
        this.props.talkerList.map(talker=>{
            if(talker.stuNum){
                talkerBlock.push(
                    <SingleTalker
                        key={"p"+talker.id}
                        headImg={talker.headImg}
                        name={talker.name}
                        grade={talker.grade}
                        id={talker.id}
                        stuNum={talker.stuNum}
                        choice={this.props.id==talker.id}
                    />
                )
            }else{
                talkerBlock.push(
                    <SingleTalker
                        key={"g"+talker.id}
                        headImg={talker.headImg}
                        name={talker.name}
                        grade={talker.grade}
                        id={talker.id}
                        choice={this.props.id==talker.id}
                        memberInfo={talker.memberInfo}
                    />
                )
            }
                })
        return(
            <div id="talkerMenuPane" className="TalkerMenuPane">
                {talkerBlock}
            </div>
        )
    }
}