/**
 * Created by yangbingxun on 2016/11/24.
 */

function createHeader(){
    var Nonce='123'//Math.floor(Math.random()*100000).toString();
    var TimeStamp='1477985732446'//new Date().getTime().toString();
    var Userid='1033614108438';
    var Signature=hex_sha1(Nonce+TimeStamp+Userid);
    return{
        Nonce:Nonce,
        TimeStamp:TimeStamp,
        Userid:Userid,
        Signature:Signature
    }
}
function GetData(){
    var xhr=new XMLHttpRequest();
    var header=createHeader();
    xhr.open("GET","http://localhost:8081",true);
    xhr.setRequestHeader('nonce',header.Nonce)
    xhr.setRequestHeader('timestamp',header.TimeStamp)
    xhr.setRequestHeader('userid',header.Userid)
    xhr.setRequestHeader('signature',header.Signature)
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if(xhr.status==200){
               console.log(xhr.responseText);
            }
        }
    }
    xhr.send(null);
}
function con(){






    var header=createHeader();
    $.ajaxSetup({
        beforeSend: function(xhr) {
           xhr.setRequestHeader('nonce',header.Nonce)
           xhr.setRequestHeader('timestamp',header.TimeStamp)
           xhr.setRequestHeader('userid',header.Userid)
           xhr.setRequestHeader('signature',header.Signature)
        },
        success:function(date){
            console.log(date)
        }
    });
    $.ajax({
        //请求类型，这里为POST
        type: 'GET',
        //你要请求的api的URL
        url: "http://localhost:8081" ,
        // url: "http://120.27.49.173:8080/v1.0/schools" ,
        //是否使用缓存
        cache:false,
        //数据类型，这里我用的是json
        dataType: "json",
        //必要的时候需要用JSON.stringify() 将JSON对象转换成字符串
        data: '',
        //请求成功的回调函数
        // success: function(data,d){
        //     //函数参数 "data" 为请求成功服务端返回的数据
        //     console.log(data,d,1234)
        // },
        fail:function (status) {
            console.log(status)
        }
    });
}

// con()
GetData();