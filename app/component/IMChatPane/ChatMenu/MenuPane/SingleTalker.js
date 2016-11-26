/**
 * Created by yangbingxun on 2016/11/25.
 */



var React=require('react');

export default class SingleTalker extends React.Component{
    constructor(props){
        super(props);
    }
    mouseEnter(e){
        $(e.target).next().css({'width':'240px'});
    }

    mouseOut(e){
        $(e.target).next().css({'width':'0px'});
    }

    render(){
        return(
            <div className="singleTalker" >
                <div className="labelTop" onMouseEnter={(e)=>{this.mouseEnter(e)}} onMouseOut={(e)=>this.mouseOut(e)}/>
                <div className="labelBottom" />
                <div className="head_img">
                    <img src={this.props.imgUrl}/>
                </div>
                <div className="info">
                    <h1>{this.props.cname}</h1>
                    <h2>{this.props.grade}</h2>
                </div>
            </div>
        )
    }
}
