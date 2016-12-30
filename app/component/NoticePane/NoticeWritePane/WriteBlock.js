/**
 * Created by yangbingxun on 2016/12/15.
 */

import React from 'react'

export default class WriteBlock extends React.Component{
    constructor(props){
        super(props)
        this.state={
            UM:null,
            UMEditor:null,
            Title:""
        }
    }
    componentWillMount(){
        $('body').append(`
            <script type="text/javascript" charset="utf-8" src="http://localhost:8081/lib/umeditor-dev/umeditor.config.js"></script>
            <script type="text/javascript" charset="utf-8" src="http://localhost:8081/js/editor_api.js"></script>
            <script type="text/javascript" charset="utf-8" src="http://localhost:8081/lib/umeditor-dev/lang/zh-cn/zh-cn.js"></script>

        `)
        this.setState({
            UM:UM
        })
    }

    componentDidMount(){
        this.setState({
            UMEditor:this.state.UM.getEditor('noticeEditor',{
                UMEDITOR_HOME_URL:"http://localhost:8081/lib/umeditor-dev/"
                ,toolbar:[
                    'source undo redo bold italic underline strikethrough forecolor backcolor removeformat',
                    'insertorderedlist insertunorderedlist selectall cleardoc fontfamily fontsize' ,
                    'justifyleft justifycenter justifyright justifyjustify ',
                    'link unlink emotion image video ',
                    'horizontal preview  fullscreen', 'formula'
                ],

            })
        })
        setTimeout(()=>{
            $('.edui-container').removeAttr('style')
            $('.edui-body-container').removeAttr('style')
        },0);
    }

    render(){
        return(
            <div className="writePane">
                <div className="centerBlock writeBlock">
                    <div className="titleBlock">
                        <div className="t">
                            主题:
                        </div>
                        <input value={this.state.Title} onChange={(e)=>{this.setState({Title:e.target.value})}}/>
                    </div>
                    <div className="UMEditorBlock">
                        <div className="t">
                            正文:
                        </div>
                        <div className="noticeEditor">
                            <script id="noticeEditor">

                            </script>
                        </div>
                    </div>
                    <div className="ButtonBlock">
                        <div
                            onClick={()=>{
                                this.props.send(
                                    combineTitleNContent(this.state.Title,this.state.UMEditor.getContent()),
                                    this.state.Title
                                )
                            }}>
                            发送
                        </div>
                        <div onClick={()=>{
                            this.state.UMEditor.execCommand('cleardoc');
                            this.setState({Title:""})
                        }}>
                            清空
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function combineTitleNContent(h_,content_){
    var html_=$('<div></div>');//套在最外层
    var html=$('<html></html>');
    var head=$('<head></head>');
    var title=$('<title>'+h_+'</title>');
    var body=$('<body></body>');
    var content=$('<div>'+content_+'</div>');

    html_.append(
        html.append(
            head.append(title)
        )
            .append(
                body.append(content)
            )
    )

    return html_.html();

}