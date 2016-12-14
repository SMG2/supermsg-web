/**
 * Created by yangbingxun on 2016/12/9.
 */

import {connect} from 'react-redux'
import {showChatMsg} from '../../../../reduxComponent/actions/chatActions/chatAction'
import {VIEW_CHAT} from '../../../../reduxComponent/actions/types/chat/chatActionType'
import {setChatId} from '../../../../reduxComponent/actions/chatActions/chatAction'
import {browserHistory,Link} from 'react-router'

import React from 'react'



class SingleTalkerInfoBlock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchText:''
        };
        this.selectShowMember=this.selectShowMember.bind(this);
        this.change=this.change.bind(this);


    }

    componentDidMount(){
        setTimeout(()=>{
            $('.infoBlock').css({
                height:'200px'
            })
        },0)
    }

    selectShowMember(members,keyword){
        var options={
            keys:['id','stuNum','name','sex','nation']
        };
        var fuse = new Fuse(members, options)
        return fuse.search(keyword);
    }

    change(text){
        this.setState({
            searchText:text
        })
    }

    render(){
        var {dispatch}=this.props;

        var members=this.props.members||[];

        var showMembers=this.selectShowMember(members,this.state.searchText);

        showMembers=showMembers.length==0?members:showMembers;
        var membersBlock=[]
        try {
            showMembers.map((member)=>{
                membersBlock.push(
                    <Link className="SingleMemberBlock"
                         key={member.id}
                         onClick={
                             ()=>{
                                 dispatch(setChatId(member.id))
                                 dispatch(showChatMsg({type:VIEW_CHAT.P2P_CHAT}))
                             }
                         }
                          to={'/user/chat/p2p/'+member.id}
                    >
                        <img src={member.headImg}/>
                        <div className="hint"
                             onMouseEnter={(e)=>{
                                 $(e.target).css({
                                     'opacity':'0.8'
                                 })
                             }}
                             onMouseLeave={(e)=>{
                                 $(e.target).css({
                                     'opacity':'0'
                                 })
                             }}
                        >
                            {member.name}
                        </div>
                    </Link>
                )
            })
        }catch (e){}

        return(
            <div className="infoBlock">
                {this.props.mark=='member'?
                    <MemberBlock unfold={this.props.unfold}
                                 searchText={this.state.searchText}
                                 changeWord={this.change}
                                 membersBlock={membersBlock}
                    />
                    :
                    <InfoBlock unfold={this.props.unfold}/>
                }
            </div>
        )
    }
}

const MemberBlock=(props)=>{
    return(
        <div>
            <div className="search">
                <input placeholder="请输入查找人信息..."
                       onChange={(e)=>{props.changeWord(e.target.value)}}
                       value={props.searchText}
                       autoFocus="autoFocus"
                />
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
                {props.membersBlock}
            </div>
        </div>
    )
};

const InfoBlock=(props)=>{
    return(
        <div/>
    )
}

function select(state){
    return{}
}

export default connect(select)(SingleTalkerInfoBlock)
