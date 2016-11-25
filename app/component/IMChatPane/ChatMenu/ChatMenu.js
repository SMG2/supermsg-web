/**
 * Created by yangbingxun on 2016/11/19.
 */

import MenuBtnG from './MenuBtnG'
import MenuBtnP from './MenuBtnP'

var React = require('react');

export default class ChatGroup extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="slideMenu">
                <MenuBtnG/>
                <MenuBtnP/>
            </div>
        )
    }

}