/**
 * Created by yangbingxun on 2016/12/9.
 */

var React=require('react')

export default class SingleTalkerInfoBlock extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        var members=this.props.members||[];
        var membersBlock=[]
        try {
            members.map((member)=>{
                membersBlock.push(
                    <div className="memberHead">
                        <img/>
                        <div></div>
                    </div>
                )
            })
        }catch (e){}




        return(
            <div className="infoBlock">
                <div className="search"></div>
                <div className="displayInfo">

                </div>
            </div>
        )
    }
}