/**
 * Created by yangbingxun on 2016/11/25.
 */
var React=require('react');

export default class MenuBtnP extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="menuBtn p2p" onClick={()=>(this.props.ChangeChat('P2P'))} >
                <div>
                    <i className="icon-user icon-3x"></i>
                </div>
            </div>
        )
    }
}