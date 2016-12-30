/**
 * Created by yangbingxun on 2016/11/29.
 */

import {header} from './createRequestHeader'

/*
option={
    id:
    url:
    data:
    method:
    success:function(responseText)
    fail:function(status,msg)
    readyStateCall:function(state)
}
 */

export default function ajax(option){
    if(!option) return;
    const host='http://120.27.49.173:8080';
    var id=option.id||'000';
    var url=option.url.indexOf("http")>0?option.url:host+option.url;
    var type=option.type||'json';
    var method=(option.method||'GET').toUpperCase();
    var data=method!=='GET'?option.data:null;
    var success=option.success||function(){};
    var fail=option.fail||function(){};
    var readyStateCall=option.readyStateCall||function(){}
    var headers=header(id);

    if(type=='json'){
        var a=[];
        data=typeof data==='object'?data:JSON.parse(data);
        for(var k in data){
            a.push(k+"="+data[k]);
        }
        data=a.join('&');
    }

    var xhr=new XMLHttpRequest();
    xhr.open(method,url,true);
    for(var key in headers){
        xhr.setRequestHeader(key,headers[key])
    }
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")

    var response
    xhr.onreadystatechange=function(){
        readyStateCall(xhr.readyState);
        if(xhr.readyState==4){
            if(xhr.status==200){
                try{
                    response=JSON.parse(xhr.responseText);
                    success(response.data,response.msg,response.status)
                }catch (e){}
            }else{
                try{
                    response=JSON.parse(xhr.responseText);
                    fail(response.msg,response.status)
            }catch(e){}

            }
        }
    }
    xhr.send(data);
}