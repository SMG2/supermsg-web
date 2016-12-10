/**
 * Created by yangbingxun on 2016/12/8.
 */

export function setCookie(name,value) {
    var cookie=getCookieToJson();
    cookie[name]=value;
    setJsonToCookie(cookie);
}

export function delCookie(name){
    var cookie=getCookieToJson();
    delete cookie[name];
    setJsonToCookie(cookie);
}

export function getCookie(name){
    var cookie=document.cookie;
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
}