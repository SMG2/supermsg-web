/**
 * Created by yangbingxun on 2016/11/18.
 */

var React=require('react');
class MoreBtn extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="moreBtnBlock">
                <div className="moreBtn">
                    <i></i>
                </div>
            </div>
        )
    }
}
module.exports=MoreBtn;