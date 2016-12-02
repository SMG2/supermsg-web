/**
 * Created by yangbingxun on 2016/11/30.
 */

var React=require('react')

export default class HeaderInput extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="headBlock">
                <div><b style={{fontSize:'80px'}}>S</b>choolMsg</div>
            </div>
        )
    }
}