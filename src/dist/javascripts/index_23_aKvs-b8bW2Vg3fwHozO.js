!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4)}([function(e,t,n){var r=n(1);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insertAt:"top",hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,r){var n,o,s,c={},u=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),i=(s={},function(e,t){if("function"==typeof e)return e();if(void 0===s[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}s[e]=n}return s[e]}),d=null,l=0,a=[],f=r(3);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=c[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(b(r.parts[s],t))}else{var i=[];for(s=0;s<r.parts.length;s++)i.push(b(r.parts[s],t));c[r.id]={id:r.id,refs:1,parts:i}}}}function m(e,t){for(var n=[],r={},o=0;o<e.length;o++){var s=e[o],i=t.base?s[0]+t.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};r[i]?r[i].parts.push(a):n.push(r[i]={id:i,parts:[a]})}return n}function h(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=a[a.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),a.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertAt.before,n);n.insertBefore(t,o)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=a.indexOf(e);0<=t&&a.splice(t,1)}function y(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return r.nc}();n&&(e.attrs.nonce=n)}return v(t,e.attrs),h(e,t),t}function v(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function b(t,e){var n,r,o,s,i,a;if(e.transform&&t.css){if(!(s="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=s}if(e.singleton){var c=l++;n=d||(d=y(e)),r=I.bind(null,n,c,!1),o=I.bind(null,n,c,!0)}else o=t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=e,a=document.createElement("link"),void 0===i.attrs.type&&(i.attrs.type="text/css"),i.attrs.rel="stylesheet",v(a,i.attrs),h(i,a),r=function(e,t,n){var r=n.css,o=n.sourceMap,s=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||s)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a)}.bind(null,n=a,e),function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(e),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),function(){g(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}e.exports=function(e,i){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(i=i||{}).attrs="object"==typeof i.attrs?i.attrs:{},i.singleton||"boolean"==typeof i.singleton||(i.singleton=u()),i.insertInto||(i.insertInto="head"),i.insertAt||(i.insertAt="bottom");var a=m(e,i);return p(a,i),function(e){for(var t=[],n=0;n<a.length;n++){var r=a[n];(o=c[r.id]).refs--,t.push(o)}e&&p(m(e,i),i);for(n=0;n<t.length;n++){var o;if(0===(o=t[n]).refs){for(var s=0;s<o.parts.length;s++)o.parts[s]();delete c[o.id]}}}};var S,_=(S=[],function(e,t){return S[e]=t,S.filter(Boolean).join("\n")});function I(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var s=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var o=t.protocol+"//"+t.host,s=o+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var n,r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?e:(n=0===r.indexOf("//")?r:0===r.indexOf("/")?o+r:s+r.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},function(e,t,n){"use strict";n.r(t);n(0);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s={httpJoin:"http://api.cbcoffee.cn/",_wx_httpJoin:"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx71c7dc4f5208bb07&redirect_uri="+location.href+"&response_type=code&scope=snsapi_userinfo&state=wx"},i=new(function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e=e||{},this.secret=e.secret||"",this.code=e.code||""}var e,n,r;return e=t,(n=[{key:"get",value:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(t);return null!=n?decodeURI(n[2]):null}},{key:"push",value:function(e){this._xml({method:"POST",uri:"http://uin8.com/error",async:!0,xmldata:{uri:JSON.stringify(e.uri),async:JSON.stringify(e.async),phone:JSON.stringify({version:navigator.appVersion,platform:navigator.platform}),data:JSON.stringify(e.data)},done:function(e){console.log(e)}})}},{key:"login",value:function(){var t=this;this._xml({method:"GET",uri:s.httpJoin+"WeChat_login",async:!1,xmldata:{code:this.get("code")},done:function(e){if(sessionStorage.setItem("token",JSON.stringify({_name:e.user_token,_id:e.user_id})),1==e.type)try{t.record(e.user_id,e.user_token)}catch(e){alert(e)}i.unpaid()}})}},{key:"record",value:function(e,t){this.push({uri:s.httpJoin+"record_user_source",async:!0,data:{userId:e,userToken:t,machineNumber:JSON.parse(sessionStorage.getItem("_token")).machineNumber,source:1}}),this._xml({method:"GET",uri:s.httpJoin+"record_user_source",async:!0,xmldata:{userId:e,userToken:t,machineNumber:JSON.parse(sessionStorage.getItem("_token")).machineNumber,source:1},done:function(e){console.log("已成功提交用户信息")}})}},{key:"unpaid",value:function(){this.push({uri:s.httpJoin+"find_product_detail",async:!0,data:{userId:JSON.parse(sessionStorage.getItem("token"))._id,userToken:JSON.parse(sessionStorage.getItem("token"))._name,productId:JSON.parse(sessionStorage.getItem("_token")).productId}});try{this._xml({method:"GET",uri:s.httpJoin+"find_product_detail",async:!0,xmldata:{userId:JSON.parse(sessionStorage.getItem("token"))._id,userToken:JSON.parse(sessionStorage.getItem("token"))._name,productId:JSON.parse(sessionStorage.getItem("_token")).productId},done:function(e){try{if("6666"==e.statusCode.status)document.getElementById("_money").innerHTML='<i>\n                                <svg class="icon" aria-hidden="true">\n                                    <use xlink:href="#ym-icon-rmb"></use>\n                                </svg>\n                            </i> '.concat(1!=e.isFree?parseFloat(e.productDetail.productPrice/100).toFixed(2):"0.00"),sessionStorage.setItem("_money",document.getElementById("_money").innerHTML),document.getElementById("_product").innerHTML=e.productDetail.productName+"<small> (ID: ".concat(e.productDetail.productId,")</small>"),setTimeout(function(){document.getElementById("showbox").style.display="none"},1e3);else if(alert("收集到错误：\n\n"+e.statusCode.msg),document.getElementById("showbox").style.display="none",1005==e.statusCode.status)throw"Error login-Wechat not code 1005"}catch(e){alert(e)}}})}catch(e){alert(e),document.getElementById("showbox").style.display="none"}}},{key:"post",value:function(){this.push({uri:s.httpJoin+"weChat_pay_machine",async:!1,data:{productId:JSON.parse(sessionStorage.getItem("_token")).productId,userToken:JSON.parse(sessionStorage.getItem("token"))._name,userId:JSON.parse(sessionStorage.getItem("token"))._id,machineNumber:JSON.parse(sessionStorage.getItem("_token")).machineNumber,flavorData:JSON.parse(sessionStorage.getItem("_token")).flavorData}});this._xml({method:"POST",uri:s.httpJoin+"weChat_pay_machine",async:!1,xmldata:{productId:JSON.parse(sessionStorage.getItem("_token")).productId,userToken:JSON.parse(sessionStorage.getItem("token"))._name,userId:JSON.parse(sessionStorage.getItem("token"))._id,machineNumber:JSON.parse(sessionStorage.getItem("_token")).machineNumber,flavorData:JSON.parse(sessionStorage.getItem("_token")).flavorData},done:function(e){"1009"==e.statusCode.status&&1==e.needPay?WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:e.appId,nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType,timeStamp:e.timeStamp},function(e){if("get_brand_wcpay_request:ok"!=e.err_msg)throw"支付失败！Error: "+e.err_msg;window.location.href="./view/successfull.htm?503"}):"1009"==e.statusCode.status?location.href="./view/successfull.htm?503":alert("收集到错误: \n\n"+e.statusCode.msg)}})}},{key:"_xml",value:function(e){(e=e||{}).method=e.method.toUpperCase()||"POST",e.uri=e.uri||"",e.async=e.async||!0,e.xmldata=e.xmldata||{},e.success=e.success||function(){};var t,n=null,r=[];for(var o in n=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),e.xmldata)r.push(o+"="+e.xmldata[o]);t=r.join("&"),"POST"===e.method.toUpperCase()?(n.open(e.method,e.uri,e.async),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n.send(t)):"GET"===e.method.toUpperCase()&&(n.open(e.method,e.uri+"?"+t,e.async),n.send(null)),n.onreadystatechange=function(){4==n.readyState&&200==n.status&&e.done(JSON.parse(n.responseText))}}}])&&o(e.prototype,n),r&&o(e,r),t}());sessionStorage.getItem("token")?i.unpaid():i.get("code")?i.login():function(){try{if(!i.get("productId"))throw"Error  productId not empty";sessionStorage.setItem("_token",JSON.stringify({machineNumber:i.get("machineNumber"),productId:i.get("productId"),flavorData:i.get("flavorData")?i.get("flavorData"):[]})),location.href=s._wx_httpJoin}catch(e){alert(e)}}(),document.getElementById("_submit").addEventListener("click",function(){i.post()},!0);try{var r=function(){WeixinJSBridge.call("closeWindow")};"undefined"==typeof WeixinJSBridge?document.addEventListener&&"true"==sessionStorage.getItem("successfull")&&document.addEventListener("WeixinJSBridgeReady",r,!1):r()}catch(e){alert(e)}}]);