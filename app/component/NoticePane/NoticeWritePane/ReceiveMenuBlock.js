/**
 * Created by yangbingxun on 2016/12/15.
 */

import React from 'react'
import {connect} from 'react-redux'

class ReceiveMenuBlock extends React.Component{
    constructor(props){
        super(props)
        this.state={
            memberList_:null,
            memberList:null,
            showSearchResult:false,
            searchWord:'',
            update:props.update

        }
        this.showSearchResult=this.showSearchResult.bind(this)
    }

    getList(){
        return this.state.memberList_;
    }

    updateParent(){
        let receiveList=[];
        let memberList_=this.getList();
        for (var k in memberList_){
            if(memberList_[k]){
                receiveList.push(k)
            }
        }
        this.state.update(receiveList);
    }


    showSearchResult(show){
        this.setState({
            showSearchResult:show
        })
    }

    showSearchList(members,keyword){
        var options={
            keys:['id','stuNum','name','sex','nation'] //还差tags
        };
        var fuse = new Fuse(members, options)
        return fuse.search(keyword);
    }

    getReceiveList(memberList,marks){
        var rm=[];
        memberList.map((member)=>{
            if(marks[member.id]){
                rm.push({id:member.id,name:member.name})
            }
        })
        return rm;
    }

    render(){
        const {dispatch,memberList,memberList__}=this.props;
        const memberList_=this.state.memberList_?this.state.memberList_:memberList__;
        const showMemberList=this.showSearchList(memberList,this.state.searchWord)
        const receiveList=this.getReceiveList(memberList,memberList_);

        return(
            <div className="receiveMenuPane">
                <div className="centerBlock receiveMenuBlock">
                    <SearchBlock
                        focus={(show)=>{
                            if(this.state.memberList=null){
                                this.setState({
                                    memberList:memberList,
                                    memberList_:memberList_,
                                })
                            }
                            this.showSearchResult(show)
                        }}
                        change={(word)=>{
                            if(!this.state.showSearchResult){
                                this.showSearchResult(true)
                            }
                            this.setState({searchWord:word})
                        }}
                        searchWord={this.state.searchWord}
                    />





                    <ReceivePeopleBlock
                        memberList_={memberList_}
                        receiveList={receiveList}
                        setThatState={(state)=>{this.setState(state,()=>{this.updateParent()})}}
                    />




                    {
                        this.state.showSearchResult?
                            <SearchResultLabel
                                setThatState={(state)=>{this.setState(state,()=>{this.updateParent()})}}
                                memberList_={memberList_}
                                showMemberList={showMemberList}
                            />
                        :
                            <div/>
                    }
                </div>
            </div>
        )
    }
}

function setMemberList(list){
    var m={};
    list.map((member)=>{
       m[member.id]=false;
    })
    return m;
}

function select(state){

    return{
        memberList__:setMemberList(state.listOfChatObject.plist), //用于标记用户是否被选取
        memberList:state.listOfChatObject.plist
    }
}

export default connect(select)(ReceiveMenuBlock)


class SearchBlock extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="searchBlock">
                <input
                    type="text"
                    placeholder="请输入关键词搜索用户..."
                    onFocus={()=>{this.props.focus(true)}}
                    value={this.props.searchWord}
                    onChange={(e)=>{this.props.change(e.target.value)}}
                />
            </div>
        )

    }
}

class SearchResultLabel extends React.Component{
    constructor(props){
        super(props)
        this.state={
            onLabel:false,
            setThatState:props.setThatState,
            showMemberList:props.showMemberList,
            memberList_:props.memberList_,
        }
    }



    componentDidMount(){
        var that=this;
        setTimeout(()=>{
            $('body').bind({
                click:function(){
                    if(!that.state.onLabel){
                        that.state.setThatState({showSearchResult:false})
                    }
                }
            })
        },500)

    }

    componentWillUnmount(){
        $('body').unbind('click');
    }

    choice(id){
        let memberList_=this.state.memberList_;
        memberList_[id]=true;
        this.state.setThatState({
            memberList_:memberList_
        })
    }

    unChoice(id){
        let memberList_=this.state.memberList_;
        memberList_[id]=false;
        this.state.setThatState({
            memberList_:memberList_
        })
    }

    choiceAll(){
        let memberList_=this.state.memberList_;
        this.state.showMemberList.map((member)=>{

            memberList_[member.id]=true;
        })
        this.state.setThatState({
            memberList_:memberList_
        })
    }
    unChoiceAll(){
        let memberList_=this.state.memberList_;
        this.state.showMemberList.map((member)=>{
            memberList_[member.id]=false;
        })
        this.state.setThatState({
            memberList_:memberList_
        })
    }

    render(){
        const that=this;

        const MemberBlock=(props)=>{

            return(
                <div className="memberBlock">
                    <div className="memberContent">
                        <div className="headImg">
                            <img
                                src={props.headImg}
                                className="centerBlock"
                                onClick={()=>{props.choice(props.userId)}}
                            />
                            {props.selected?
                                <div className="centerBlock selected"
                                    onClick={()=>{props.unChoice(props.userId)}}
                                >
                                    <i className="icon-ok"/>
                                </div>
                                :
                                <div/>
                            }
                        </div>
                        <div className="nameBlock">
                            <div>
                                {props.name}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        const MemberListBlock=(props)=>{
            let showMemberBlock=[]

            that.props.showMemberList.map((member)=>{
                showMemberBlock.push(
                    <MemberBlock
                        key={member.id}
                        userId={member.id}
                        selected={that.props.memberList_[member.id]}
                        choice={(id)=>{that.choice(id)}}
                        unChoice={(id)=>{that.unChoice(id)}}
                        headImg={member.headImg}
                        name={member.name}
                    />
                )
            })

            return(
                <div className="memberListBlock">
                    {showMemberBlock}
                </div>
            )
        }

        return(
            <div>
                <div className="searchResultLabel"
                     onMouseEnter={()=>{this.setState({onLabel:true})}}
                     onMouseLeave={()=>{this.setState({onLabel:false})}}
                >
                    <div className="SRHeader">
                        <div className="checkboxBlock">
                            <input id="selectAll"
                                   type="checkbox"
                                   onChange={(e)=>{
                                       let checked=e.target.checked
                                       this.setState({
                                           showMemberList:this.props.showMemberList,
                                       },
                                           ()=>{
                                           if(checked){
                                               that.choiceAll();
                                           }
                                           else{that.unChoiceAll()}
                                       })

                                   }}/>
                            <div>全选</div>
                        </div>
                        <div className="sureBlock">
                            <div onClick={()=>{
                                this.state.setThatState({showSearchResult:false
                                })
                                }
                                }
                            >
                                确认
                            </div>
                        </div>
                    </div>
                    <MemberListBlock />
                </div>
            </div>

        )
    }
}

class ReceivePeopleBlock extends React.Component{
    constructor(props){
        super(props)
        this.state={
            memberList_:props.memberList_,
            // receiveList:props.receiveList,
            setThatState:props.setThatState
        }
        this.unChoice=this.unChoice.bind(this)
        this.clearAll=this.clearAll.bind(this)
    }

    unChoice(id){
        let memberList_=this.state.memberList_;
        memberList_[id]=false;
        this.state.setThatState({
            memberList_:memberList_
        })
    }

    clearAll(){
        let memberList_=this.state.memberList_;
        for(let k in memberList_){
            memberList_[k]=false;
        }
        this.state.setThatState({
            memberList_:memberList_
        })
    }

    render(){

        var that=this;

        const ReceiveMemberBlock=(props)=>{

            return(
                <section>
                    {props.name}
                    <i onClick={()=>{that.unChoice(props.id)}}/>
                </section>
            )
        }

        let listBlock=[];

        this.props.receiveList.map((member)=>{
            listBlock.push(<ReceiveMemberBlock key={member.id} name={member.name} id={member.id}/>)
        });

        const ReceiveMemberListBlock=(props)=>{

            return(
                <div>
                    {listBlock}
                </div>
            )
        }

        return(
            <div className="receiveMemberBlock">
                <ReceiveMemberListBlock/>
                <div className="clearMember">
                    <div onClick={this.clearAll}>全部清除</div>
                </div>
            </div>
        )
    }
}

