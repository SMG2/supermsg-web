/**
 * Created by yangbingxun on 2016/11/19.
 */

import MenuBtnG from './MenuBtn/MenuBtnG'
import MenuBtnP from './MenuBtn/MenuBtnP'
// import TalkerMenu from './MenuPane/TalkerMenu'

var React = require('react');

export default class ChatGroup extends React.Component{
    constructor(props){
        super(props);
    }

    changeChat(viewChat){
        animate(viewChat);


    }

    render(){
        const {talkers}=this.props;
        var TalkerMenu=this.props.children;
        return(
            <div className="ChatMenuPane">
                <div className="slideMenu" id="slideMenu">
                    <MenuBtnG ChangeChat={this.changeChat}/>
                    <MenuBtnP ChangeChat={this.changeChat}/>
                </div>
                {/*<TalkerMenu/>*/}
                <TalkerMenu talkers={talkers} />
            </div>

        )
    }

}

function animate(viewChat){
    $('#talkerMenuPane').css({width:'240px'})
    $('.ChatMenuPane').css({width:'305px'})
    $('.slideMenu').css({borderRight:'3px solid #666666'})

    switch (viewChat){
        case 'GROUP':
            $('.group').css({backgroundColor:'#dddddd'})
            $('.p2p').css({backgroundColor:'#ffffff'})
            break;
        case 'P2P':
            $('.p2p').css({backgroundColor:'#dddddd'})
            $('.group').css({backgroundColor:'#ffffff'})
            break;
    }
}