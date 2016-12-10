/**
 * Created by yangbingxun on 2016/12/8.
 */

import {Link} from 'react-router'

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
                <div className="infoBtn info_">
                    <i className="icon-info-sign"/>
                </div>
            )
        })

        const Member=((props)=>{
            return(
                <div className="infoBtn member_">
                    <i className="icon-user"/>
                </div>
            )
        })

        return(
            <Link
                to={this.props.stuNum?'/user/chat/p2p/'+this.props.id:'/user/chat/group/'+this.props.id}
                className="labelTop"
                onMouseOver={()=>{this.setState({onInfo:true});this.props.mouseOver();}}
                onMouseLeave={()=>{this.setState({onInfo:false});this.props.mouseLeave();}}
                onClick={()=>{this.props.click(this.props.id)}}
            >
                    <div  className="infoBtnBlock">
                        {
                            this.state.onInfo?
                                this.props.stuNum?
                                    <div>
                                        <div className="infoBtn"/>
                                        <Info/>
                                    </div>
                                        :
                                    <div>
                                        <Member/>
                                        <Info/>
                                    </div>
                                :
                                <div/>
                        }
                    </div>
            </Link>
        )
    }
}
