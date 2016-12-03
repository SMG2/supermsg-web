/**
 * Created by yangbingxun on 2016/11/27.
 */

import MainNav from '../component/HeadNav/MainNav/MainNav'

var React=require('react')

export default class MainPane extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mount: false,
            userDetail:null,
            haveRequestData:false
        }

    }

    componentDidMount(){
    }

    render(){
        return(
            <div className="">
                <MainNav/>
                <section>
                    {this.props.children}
                </section>
            </div>
        )
    }
}
