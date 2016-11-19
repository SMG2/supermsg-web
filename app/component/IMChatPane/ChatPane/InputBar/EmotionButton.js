/**
 * Created by yangbingxun on 2016/11/18.
 */

var React=require('react');

class EmotionButton extends  React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        $('.emojiBtn').qqFace({
            id: 'qqface',
            assign: 'msgInput',
            path: '/material/img/QQEmotion/'
        })

    }

    render(){
        return(
            <div className="emojiBtnBlock">
                <div className="emojiBtn">
                    <i></i>
                </div>
            </div>
        )
    }
}
module.exports=EmotionButton;