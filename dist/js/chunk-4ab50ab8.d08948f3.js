(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ab50ab8"],{"02f4":function(t,e,r){var n=r("4588"),a=r("be13");t.exports=function(t){return function(e,r){var o,l,i=String(a(e)),c=n(r),s=i.length;return c<0||c>=s?t?"":void 0:(o=i.charCodeAt(c),o<55296||o>56319||c+1===s||(l=i.charCodeAt(c+1))<56320||l>57343?t?i.charAt(c):o:t?i.slice(c,c+2):l-56320+(o-55296<<10)+65536)}}},"0390":function(t,e,r){"use strict";var n=r("02f4")(!0);t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},"0bfb":function(t,e,r){"use strict";var n=r("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,r){"use strict";r("b0c5");var n=r("2aba"),a=r("32e9"),o=r("79e5"),l=r("be13"),i=r("2b4c"),c=r("520a"),s=i("species"),u=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),p=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var f=i(t),v=!o(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),d=v?!o(function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[s]=function(){return r}),r[f](""),!e}):void 0;if(!v||!d||"replace"===t&&!u||"split"===t&&!p){var b=/./[f],h=r(l,f,""[t],function(t,e,r,n,a){return e.exec===c?v&&!a?{done:!0,value:b.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),g=h[0],x=h[1];n(String.prototype,t,g),a(RegExp.prototype,f,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}}},"520a":function(t,e,r){"use strict";var n=r("0bfb"),a=RegExp.prototype.exec,o=String.prototype.replace,l=a,i="lastIndex",c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[i]||0!==e[i]}(),s=void 0!==/()??/.exec("")[1],u=c||s;u&&(l=function(t){var e,r,l,u,p=this;return s&&(r=new RegExp("^"+p.source+"$(?!\\s)",n.call(p))),c&&(e=p[i]),l=a.call(p,t),c&&l&&(p[i]=p.global?l.index+l[0].length:e),s&&l&&l.length>1&&o.call(l[0],r,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(l[u]=void 0)}),l}),t.exports=l},"56b4":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"background"},[r("div",[r("el-form",{ref:"registerform",staticClass:"register-box",staticStyle:{"z-index":"1"}},[r("h3",{staticClass:"register-title"},[t._v("用户注册")]),r("el-form-item",{attrs:{label:"真实姓名",prop:"name"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入真实姓名"}})],1),r("el-form-item",{attrs:{prop:"username"}},[r("label",{attrs:{slot:"label"},slot:"label"},[t._v("用 户 名")]),r("el-input",{attrs:{type:"text",placeholder:"请输入用户名"}})],1),r("el-form-item",{attrs:{prop:"tel"}},[r("label",{attrs:{slot:"label"},slot:"label"},[t._v(" 电  话 ")]),r("el-input",{attrs:{type:"text",placeholder:"请输入电话号码"}})],1),r("el-form-item",{attrs:{prop:"useridnumber"}},[r("label",{attrs:{slot:"label"},slot:"label"},[t._v("身份证号")]),r("el-input",{attrs:{type:"text",placeholder:"请输入身份证号码"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("label",{attrs:{slot:"label"},slot:"label"},[t._v(" 密  码 ")]),r("el-input",{attrs:{type:"password",placeholder:"请输入密码"}})],1),r("el-form-item",{attrs:{label:"确定密码",prop:"checkpass"}},[r("el-input",{attrs:{type:"password",placeholder:"再次输入密码"}})],1),r("el-button",{staticClass:"el-btn",attrs:{type:"primary"}},[t._v("注册")]),r("el-button",[t._v("重置")]),r("el-form-item",[r("el-button",{staticClass:"tologin",attrs:{type:"info",size:"mini"},on:{click:t.toLogin}},[t._v("已有账号，去登录")])],1)],1)],1)])},a=[],o=(r("a481"),{name:"Register",data:function(){return{}},methods:{toLogin:function(){this.$router.replace("/Login")}}}),l=o,i=(r("7357"),r("2877")),c=Object(i["a"])(l,n,a,!1,null,"928915ca",null);e["default"]=c.exports},"5f1b":function(t,e,r){"use strict";var n=r("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var o=r.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},7357:function(t,e,r){"use strict";var n=r("af55"),a=r.n(n);a.a},a481:function(t,e,r){"use strict";var n=r("cb7c"),a=r("4bf8"),o=r("9def"),l=r("4588"),i=r("0390"),c=r("5f1b"),s=Math.max,u=Math.min,p=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g,d=function(t){return void 0===t?t:String(t)};r("214f")("replace",2,function(t,e,r,b){return[function(n,a){var o=t(this),l=void 0==n?void 0:n[e];return void 0!==l?l.call(n,o,a):r.call(String(o),n,a)},function(t,e){var a=b(r,t,this,e);if(a.done)return a.value;var p=n(t),f=String(this),v="function"===typeof e;v||(e=String(e));var g=p.global;if(g){var x=p.unicode;p.lastIndex=0}var m=[];while(1){var y=c(p,f);if(null===y)break;if(m.push(y),!g)break;var w=String(y[0]);""===w&&(p.lastIndex=i(f,o(p.lastIndex),x))}for(var E="",S=0,k=0;k<m.length;k++){y=m[k];for(var $=String(y[0]),_=s(u(l(y.index),f.length),0),R=[],C=1;C<y.length;C++)R.push(d(y[C]));var A=y.groups;if(v){var I=[$].concat(R,_,f);void 0!==A&&I.push(A);var j=String(e.apply(void 0,I))}else j=h($,f,_,R,A,e);_>=S&&(E+=f.slice(S,_)+j,S=_+$.length)}return E+f.slice(S)}];function h(t,e,n,o,l,i){var c=n+t.length,s=o.length,u=v;return void 0!==l&&(l=a(l),u=f),r.call(i,u,function(r,a){var i;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(c);case"<":i=l[a.slice(1,-1)];break;default:var u=+a;if(0===u)return r;if(u>s){var f=p(u/10);return 0===f?r:f<=s?void 0===o[f-1]?a.charAt(1):o[f-1]+a.charAt(1):r}i=o[u-1]}return void 0===i?"":i})}})},af55:function(t,e,r){},b0c5:function(t,e,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})}}]);
//# sourceMappingURL=chunk-4ab50ab8.d08948f3.js.map