/**
 * Created by yangbingxun on 2016/12/8.
 */

export function setCookie(c_name,value,expiredays) {
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

export function delCookie(name){
    document.cookie=name+'="";expires='+new Date().toGMTString();
}

export function getCookie(name){
    var cookie=getCookieToJson();
    return cookie[name]
}

function getCookieToJson(){
    return JSON.parse('{"'+document.cookie.replace(/; /g,'","').replace(/=/g,'":"')+'"}');
}

function setJsonToCookie(json){
    var cookie;
    var cookies=[];
    for(var k in json){
        cookies.push(k+'='+json[k])
    }
    cookie=cookies.join("; ")
    document.cookie=cookie;
    console.log(cookie)
    console.log(document.cookie)
}