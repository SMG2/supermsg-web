/**
 * Created by yangbingxun on 2016/11/22.
 */

import {connect} from 'react-redux'

var React=require('react')
var IMChatPane=require('./component/IMChatPane/IMChatPane')

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {dispatch,msgList} = this.props;


        return(
            <IMChatPane/>
        )
    }
}