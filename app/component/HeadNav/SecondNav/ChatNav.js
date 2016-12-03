/**
 * Created by yangbingxun on 2016/11/27.
 */

// import {Link,browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {setP2PList,setGroupList} from '../../../reduxComponent/actions/chatActions/chatAction'

var React=require('react')

class SecondNav extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    render(){
        const {dispatch} =this.props;
        return(
            <div>
                <div className="SecondNav chatNav">
                    <div>开始聊天</div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

function select(state) {
    return {};
}

export default connect(select)(SecondNav)
