/**
 * Created by yangbingxun on 2016/11/25.
 */


import {Link} from 'react-router'
import {connect} from 'react-redux'
import {setChatId} from '../../../../reduxComponent/actions/chatActions/chatAction'

var React=require('react');

class SingleTalker extends React.Component{
    constructor(props){
        super(props);
    }
    mouseEnter(e){
        $(e.target).next().css({'width':'240px'});
    }

    mouseOut(e){
        $(e.target).next().css({'width':'0px'});
    }

    setChatId(id,dispatch){
        dispatch(setChatId(id));
    }

    render(){
        const {dispatch} =this.props

        return(
            <div className="singleTalker" >
                <Link
                    to={this.props.stuNum?'/chat/p2p/'+this.props.id:'/chat/group/'+this.props.id}
                    className="labelTop"
                    onMouseEnter={(e)=>{this.mouseEnter(e)}}
                    onMouseOut={(e)=>this.mouseOut(e)}
                    onClick={()=>{this.setChatId(this.props.id,dispatch)}}
                />
                <div className="labelBottom" />
                <div className="head_img">
                    <img src={this.props.headImg}/>
                </div>
                <div className="info">
                    <h1>{this.props.name}</h1>
                    <h2>{this.props.grade}</h2>
                </div>
            </div>
        )
    }
}

function select(state) {
    return{}
}

export default connect(select)(SingleTalker)