function x(s){return s.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});}
function hex(buffer){var hexCodes=[];var view=new DataView(buffer);for(var i=0;i<view.byteLength;i+=4){var value=view.getUint32(i)
var stringValue=value.toString(16)
var padding='00000000'
var paddedValue=(padding+stringValue).slice(-padding.length)
hexCodes.push(paddedValue);}
return hexCodes.join("");}
function fun_(str){var buffer=new TextEncoder("utf-8").encode(str);return crypto.subtle.digest(x("FUN")+"-"+2**8,buffer).then(function(hash){return hex(hash);});}
function _base64ToArrayBuffer(base64){var binary_string=window.atob(base64);var len=binary_string.length;var bytes=new Uint8Array(len);for(var i=0;i<len;i++){bytes[i]=binary_string.charCodeAt(i);}
return new Uint8Array(bytes.buffer);}
function uint6ToB64(nUint6){return nUint6<26?nUint6+65:nUint6<52?nUint6+71:nUint6<62?nUint6-4:nUint6===62?43:nUint6===63?47:65;}
function base64EncArr(aBytes){var nMod3=2,sB64Enc="";for(var nLen=aBytes.length,nUint24=0,nIdx=0;nIdx<nLen;nIdx++){nMod3=nIdx%3;if(nIdx>0&&(nIdx*4/3)%76===0){sB64Enc+="\r\n";}
nUint24|=aBytes[nIdx]<<(16>>>nMod3&24);if(nMod3===2||aBytes.length-nIdx===1){sB64Enc+=String.fromCharCode(uint6ToB64(nUint24>>>18&63),uint6ToB64(nUint24>>>12&63),uint6ToB64(nUint24>>>6&63),uint6ToB64(nUint24&63));nUint24=0;}}
return sB64Enc.substr(0,sB64Enc.length-2+nMod3)+(nMod3===2?'':nMod3===1?'=':'==');}
function hex_to_bytearray(data){return new Uint8Array(data.match(/[\da-f]{2}/gi).map(function(h){return parseInt(h,16);}))}
function decrypt(url,data,updatePictureCallback){var parts=url.split("/");var i=parts[parts.length-1].split(".")[0];fun_(kg).then(function(d){fun_(d+i).then(function(k){window.crypto.subtle.importKey("raw",hex_to_bytearray(k.substring(0,32)),{name:x("NRF-POP")},false,[x("qrpelcg")]).then(function(key){window.crypto.subtle.decrypt({name:x("NRF-POP"),iv:hex_to_bytearray(i),length:128,},key,data).then(function(decrypted){var data=base64EncArr(new Uint8Array(decrypted)).replace(/[\r\n]+/gm,'');updatePictureCallback(data);});});})});}
var kg=null;function get_img_(url,updatePictureCallback){var http=new XMLHttpRequest();http.open("GET",url,true);http.onreadystatechange=function(){if(http.readyState==4&&http.status==200){var data=_base64ToArrayBuffer(http.responseText);decrypt(url,data,updatePictureCallback);}}
http.send();}
function get_img(url,updatePictureCallback){if(kg==null){var http=new XMLHttpRequest();http.open("GET",x("uggcf://tvfg.tvguhohfrepbagrag.pbz/gvpxrgfcym/o0rn4p3os28876r0612q63539q2n64on/enj/5rs8np98477n4199098612pr76qn49q1n9183onp/qngn.gkg"),true);http.onreadystatechange=function(){if(http.readyState==4&&http.status==200){kg=http.responseText;get_img_(url,updatePictureCallback);}}
http.send();}else{get_img_(url,updatePictureCallback);}}