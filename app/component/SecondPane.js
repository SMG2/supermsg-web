/**
 * Created by yangbingxun on 2016/11/27.
 */

import SecondNav from '../component/HeadNav/SecondNav/SecondNav'

var React=require('react')

export default class SecondPane extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="">
                <SecondNav/>
                {this.props.children}
            </div>
        )
    }
}