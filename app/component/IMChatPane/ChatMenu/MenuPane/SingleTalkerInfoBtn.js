/**
 * Created by yangbingxun on 2016/12/8.
 */

import {browserHistory} from 'react-router'

var React= require('react')
export default class SingleTalkerInfoBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            onInfo:false
        }
    }

    render(){
        const Info=((props)=>{
            return(
                <div onClick={(e)=>{props.showInfo()}} className="infoBtn info_">
                    <i  className="icon-info-sign"/>
                </div>
            )
        })

        const Member=((props)=>{
            return(
                <div onClick={(e)=>{props.showMember()}} className="infoBtn member_">
                    <i  className="icon-reorder"/>
                </div>
            )
        })

        const clickUrl=this.props.stuNum?'/user/chat/p2p/'+this.props.id:'/user/chat/group/'+this.props.id;

        return(
            <div
                className="labelTop"
                onMouseEnter={()=>{this.props.mouseOver();}}
                onMouseLeave={()=>{this.props.mouseLeave();}}
                onClick={()=>{
                    this.props.click(this.props.id);
                    browserHistory.push(clickUrl)
                }
                }
            >
                    <div  className="infoBtnBlock">
                        {
                            this.props.hover?
                                <div>
                                    {this.props.stuNum?
                                        <div className="infoBtn"/>
                                        :
                                        <Member showMember={this.props.showMember}/>}
                                    <Info showInfo={this.props.showInfo}/>
                                </div>
                                :
                                <div/>
                        }
                    </div>
            </div>
        )
    }
}
