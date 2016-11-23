/**
 * Created by yangbingxun on 2016/11/18.
 */
import TimeBar from './TimeBar'

var React=require('react');

export default class SingleMsg extends React.Component{
    constructor(props){
        super(props);
    }

    getContentHtml(content) {
        return {__html: content};
    };

    render(){
        var msgDiv;
        switch (this.props.forward){
            case 'send':
                msgDiv=(
                    <div className="send singleMsg ">
                        <div className="head_img animate bounceInUp">
                            <img src={this.props.headImg}/>
                        </div>
                        <div className="animate bounceInUp ">
                            <div className="msg_content ">
                                <div className="content">
                                    <div  dangerouslySetInnerHTML={this.getContentHtml(this.props.content)} />
                                </div>
                                <TimeBar date={this.props.date} time={this.props.time}/>
                            </div>
                        </div>
                    </div>
                )
                break;
            case 'receive':
                msgDiv=(
                    <div className="receive singleMsg ">
                        <div className="head_img animate bounceInUp">
                            <img src={this.props.headImg}/>
                        </div>
                        <div className="animate bounceInUp ">
                            <div className="msg_content ">
                                <div className="content">
                                    <div  dangerouslySetInnerHTML={this.getContentHtml(this.props.content)} />
                                </div>
                                <TimeBar date={this.props.date} time={this.props.time}/>
                            </div>
                        </div>
                    </div>
                )
                break;
        }
        return msgDiv;
    }
}
