/**
 * Created by yangbingxun on 2016/11/18.
 */

var React=require('react');

class TimeBar extends React.Component{
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

module.exports=TimeBar;
