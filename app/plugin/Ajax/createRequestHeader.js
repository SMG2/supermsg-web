/**
 * Created by yangbingxun on 2016/11/29.
 */
import {hex_sha1} from '../lib/SH1'

export function header(id){
    var Nonce=Math.floor(Math.random()*100000).toString();
    var TimeStamp=new Date().getTime().toString();
    var Userid=id;
    var Signature=hex_sha1(Nonce+TimeStamp+Userid);

    return{
        Nonce:Nonce,
        TimeStamp:TimeStamp,
        Userid:Userid,
        Signature:Signature
    }
}