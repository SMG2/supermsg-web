/**
 * Created by yangbingxun on 2016/12/9.
 */

var React=require('react')

export default class SingleTalkerInfoBlock extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        setTimeout(()=>{
            $('.infoBlock').css({
                height:'200px'
            })
        },0)
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

        const MemberBlock=(props)=>{
            return(
                <div>
                    <div className="search">
                        <input placeholder="请输入查找人信息..."/>
                        <div className="closeBtn"
                             onClick={(e)=>{
                                 setTimeout(()=>{
                                     props.unfold()
                                 },500);
                                 $(e.target)
                                     .parent()
                                     .parent()
                                     .parent()
                                     .parent()
                                     .css({'height':'0'})

                             }}
                        >
                            <i className="icon-double-angle-up"/>
                        </div>
                    </div>
                    <div className="div_line"/>
                    <div className="displayInfo">
                        <div className="SingleMemberBlock">
                            <img src="http://localhost:8081/material/img/headImg/hj.jpg"/>
                            <div className="hint"
                                 onMouseEnter={(e)=>{$(e.target).css({'opacity':'0.8'})}}
                                 onMouseLeave={(e)=>{$(e.target).css({'opacity':'0'})}}
                            >
                                杨炳勋
                            </div>
                        </div>
                    </div>
                    <div className="div_line"/>
                </div>
            )
        }

        const InfoBlock=(props)=>{
            return(
                <div/>
            )
        }

        return(
            <div className="infoBlock">
                {this.props.mark=='member'?
                    <MemberBlock unfold={this.props.unfold}/>
                    :
                    <InfoBlock unfold={this.props.unfold}/>
                }
            </div>
        )
    }
}