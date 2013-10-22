/* --------------------------------------------- */
/* Author: http://codecanyon.net/user/CodingJack */
/* --------------------------------------------- */

(function(){function p(a){var b=a.cjIsNull=T(a);this.length="undefined"!==typeof a.length?a.length:!b?1:0;this.element=a;a.cjMigrate=this}function Z(a,b,c){switch(a){case "append":b.appendChild(c);break;case "appendTo":c.appendChild(b);break;case "prepend":b.insertBefore(c,b.firstChild);break;case "prependTo":c.insertBefore(b,c.firstChild);break;case "insertBefore":c.parentNode.insertBefore(b,c);break;case "insertAfter":c.parentNode.insertBefore(b,c.nextSibling)}}function $(a){return!a?[]:a.length? $(a[0]):a}function g(a,b,c,d){var e=this.cjMigrate;return!e?n(this)[a](b,c,d):e[a](b,c,d)}function w(a){var b=a.cjMigrate;return!b?new p(a):b}function T(a){if(E(a))return!1;if(a&&a.item&&a.length){if(!a.item(0))return!0}else if(Array.isArray(a)&&!a.length)return!0;return!1}function F(a,b){if(null===a)return[];var c,d;if("string"===typeof a){if(-1!==a.search("</")){c=a.indexOf(">")+1;d=a.substring(0,c);var e=d.split(" ")[0];return aa(d.substring(0,d.length-1)+" />",a.substring(c,a.lastIndexOf("</"+ e.substring(1,e.length))))}if(-1!==a.search("/>"))return!/'|"/.test(a)?r.createElement(B(a.split("<").join("").split("/>").join(""))):aa(a);c=a.split(",");d=c.length}else d=1;if(1===d)return ba(a,b);for(var e=[],f=-1;++f<d;)e[f]=ba(c[f],b);return e}function aa(a,b){" "!==a.charAt(a.length-3)&&(a=a.substring(0,a.length-2)+" />");var c=a.split(" "),d=c[0],e,f,k,d=r.createElement(d.substring(1,d.length));c.pop();c.shift();if(c=c.join().split(",").join(" ")){f=c;c=[];e=0;var h=/'|"/,g=f.length,l=0;for(k= -1;++k<g;)f.charAt(k).match(h)&&(0===e?e=1:(c[c.length]=B(f.substring(l,k+1)),e=0,l=k+1))}for(k=c.length;k--;)e=c[k].split("="),f=e[1],d.setAttribute(e[0],f.substring(1,f.length-1));b&&(d.innerHTML=b);return d}function ba(a,b){b||(b=r);return"string"===typeof a?(a=B(a),/\[|:|>|\s/.test(a)?b.querySelectorAll(a):/\./.test(a)?ra?b.getElementsByClassName(a.substr(1,a.length-1)):b.querySelectorAll(a):-1!==a.search("#")?b.getElementById(a.substr(1,a.length-1)):b.getElementsByTagName(a)):E(a)?a:[]}function ca(a, b){return parseInt(a["inner"+b]||a["client"+b]||a["natural"+b]||a[b],10)||0}function U(a){return a.charAt(0).toUpperCase()+a.substr(1,a.length-1)}function da(a,b,c,d){var e=a.cjEvents,f=b.split("."),k,h;b=f[0];z&&("mouseenter"===b?(h=!0,b="mouseover"):"mouseleave"===b&&(h=!0,b="mouseout"));d=[b,c,d];if(e){for(var g=e.length,l=[],m;g--;)m=e[g],m[1]!==c?l[l.length]=m:k=!0;e=l.length?l:null}1<f.length&&(d.namespace=f[1]);z||(d.callback=function(){G.call(a,q.event)});h&&(d.matchTarget=a);e?e[e.length]= d:e=[d];a.cjEvents=e;z?a.addEventListener&&a.addEventListener(b,G,!1):!k&&a.attachEvent&&a.attachEvent("on"+b,d.callback)}function ea(a,b,c){a.removeSwipe();var d=b.cjEvents;if(d){for(var e,f=d.length;f--;)e=d[f],c&&e.namespace!==c||a.off(e[0]);v(b,"cjEvents");v(b,"cjEntered")}}function E(a){return a?a===q||a===r||1===a.nodeType:!1}function J(a,b,c,d){var e;switch(d){case "closest":e=a.parentNode;break;case "prev":e=a.previousSibling;break;case "next":e=a.nextSibling}if(!e)return null;if(!E(e))return J(e, b,c,d);if(!b)return e;switch(c){case "tag":return e.tagName.toLowerCase()===b?e:J(e,b,c,d);case "id":return e.id===b?e:J(e,b,c,d);default:a=e.className;var f;if(a){a=a.split(" ");for(var k=a.length;k--;)if(a[k]===b){f=!0;break}}return f?e:J(e,b,c,d)}}function fa(a,b){var c;if(a.cjDisplay)c=a.cjDisplay,v(a,"cjDisplay");else if(c=m?m(b,null).display:b.currentStyle.display,"none"===c){L||(L=r.body);for(var d=b.tagName.toLowerCase(),e=M.length,f,k;e--;)if(f=M[e],-1!==f.search(d)){c=f.split(".")[1];k= !0;break}k||(e=r.createElement(d),L.appendChild(e),c=m?m(e,null).display:e.currentStyle.display,L.removeChild(e),M[M.length]=d+"."+c)}return c}function v(a,b){x?a[b]=null:delete a[b]}function sa(a){a[a.length]=w(this)}function G(a){var b=this.cjMigrate,c=this.cjEvents,d=a.type;if(c){for(var e=c.length,f,k;e--;)if(f=c[e],f[0]===d)if(f.matchTarget){var h=b,g=f.matchTarget,l=d,q=f[1],m=a;f=f[0]===d&&f[2];if("mouseover"===l)g.cjEntered||q.call(h,m),f?h.off(l,G):g.cjEntered=!0;else{var j=h.offset(),n= m.pageX,p=m.pageY,r=j.left,j=j.top;if(n<=r||n>=r+h.width()||p<=j||p>=j+h.height())f&&h.off(l,G),g.cjEntered=!1,q.call(h,m)}}else f[2]&&b.off(d,G),b.googleFonts?k=f[1]:f[1].call(b,a);k&&(WebFont.load({google:{families:b.googleFonts},active:function(){k.call(b,a)}}),v(b,"googleFonts"))}}function ga(a,b,c){if(!isNaN(c))if("opacity"!==b){if("zIndex"!==b)return[!0,c+"px"]}else if(x)return a.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+100*c+")",[!1];return[!0,c]}function V(a,b){if(z){var c= r.createEvent("Event");c.initEvent(b,!0,!0);a.dispatchEvent(c)}else a.fireEvent("on"+b,r.createEventObject())}function ha(a){a=a.touches?a.touches[0]:a;var b=this.cjSwipe;b.newPageX=null;b.pageX=a.pageX}function ia(a){var b=this.cjSwipe,c;c=b.newPageX=(a.touches?a.touches[0]:a).pageX;10<Math.abs(b.pageX-c)&&a.preventDefault()}function ja(){var a=this.cjSwipe,b=a.newPageX,c=a.pageX;null===b||Math.abs(c-b)<ta||(c>b?a.callback.call(this.cjMigrate,"right"):a.callback.call(this.cjMigrate,"left"))}function C(){for(var a= !1,b=A,c;b--;){c=u[b];if(!c)break;c.cycle()?a=!0:c.stop(!1,c.onComplete,!1,!0)}N?a?N(C):K(C):a?H||(W=setInterval(C,ka)):clearInterval(W);H=a}function la(a,b,c){c.fadeOut?this.fadeOut=!0:c.fadeIn&&(this.fadeIn=!0);this.obj=a;this.onComplete=c.onComplete;this.onCompleteParams=c.onCompleteParams;A=u.length;a.cjTween=u[A++]=this;if(0===c.duration)this.stop();else if(c.delay){var d=this;this.delayed=setTimeout(function(){ma(d,a,b,c)},c.delay)}else ma(this,a,b,c)}function na(a,b){if(b&&b.onUpdate){A=u.length; u[A++]=a.cjTween=this;this.onCompleteParams=b.onCompleteParams;var c=this.onComplete=b.onUpdate,d=b.ease||X,d=d.toLowerCase().split("."),d=O[d[0]][d[1]];this.obj=a;var e=b.duration||Y,f=d,k,h=0,g=Date.now(),l;this.transitions=function(){l=Date.now();h+=l-g;g=l;k=f(h,0,1,e);return 0.98>k?(c.call(a,k),!0):!1};H?setTimeout(oa,10):C()}}function ma(a,b,c,d){var e,f=0,k=[],h=b.style,g=d.duration||Y,l=(d.ease||X).toLowerCase().split("."),l=O[l[0]][l[1]];h.visibility="visible";d.fadeIn&&(h.display=d.display|| "block",h.opacity=0);if(x){var m=null;if("opacity"in c){if(b.filters.length)try{m=b.filters.item("DXImageTransform.Microsoft.Alpha").Opacity}catch(q){}null===m&&(h.filter=P+(d.fadeIn?0:98)+")")}}for(e in c)c.hasOwnProperty(e)&&(k[f++]=ua(b,e,c[e],g,l));a.transitions=k;H?setTimeout(oa,10):C()}function ua(a,b,c,d,e){function f(){v=Date.now();g+=v-s;t=e(g,u,q,d);s=v;t=!k||x?n?t+0.5|0:t-0.5|0:t.toFixed(2);if(t===p)return!0;if(n){if(t>=c)return l?a.style.filter=P+j+")":r[b]=j,!1}else if(t<=c)return l? a.style.filter=P+j+")":r[b]=j,!1;p=t;l?a.style.filter=P+t+")":r[b]=t+h;return!0}var k="opacity"===b,h=!k?"px":0,g=0,l,q,j,n,p,r,u,s,t,v,w;!k||!x?(r=a.style,w=r[b],t=""!==w?w:m?m(a,null)[b]:a.currentStyle[b]):(t=a.filters.item("DXImageTransform.Microsoft.Alpha").Opacity,l=!0,c*=100);t=parseFloat(t);q=c-t;n=t<c;j=c+h;s=Date.now();u=t;!k||x?n?c-=1:c+=1:n?c-=0.1:c+=0.1;f.stored=[b,j];return f}function oa(){H||C()}function pa(a,b){return q["webkit"+a+b]||q["moz"+a+b]||q["o"+a+b]||q[a+b]||null}if(!window.jQuick){var D, y,q=window,r=document,qa=navigator,z="addEventListener"in q,j=qa.userAgent.toLowerCase(),ra="getElementsByClassName"in r,K=pa("Cancel","AnimationFrame"),N=pa("Request","AnimationFrame"),m=q.getComputedStyle?q.getComputedStyle:null,P="progid:DXImageTransform.Microsoft.Alpha(opacity=",ta=30,u=[],M=[],H,A=0,Q,R,S,L,W,I,s;"ontouchend"in q?(I=!0,Q="touchstart",R="touchmove",S="touchend"):qa.msMaxTouchPoints&&(I=!0,Q="MSPointerDown",R="MSPointerMove",S="MSPointerUp");if(!N||!K)N=K=null;var n=q.jQuick=function(a, b){return w(!E(a)?F(a,b||r)||[]:a)};n.fn=function(a,b){p.prototype[a]=b};n.extend=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a};n.stopAll=function(a){A=0;K?K(C):clearInterval(W);for(var b=u.length;b--;)u[b].stop(a,!1,!0,!0);u=[];H=!1};n.setEase=function(a){var b=a.toLowerCase().split(".");2>b.length||O[b[0]]&&O[b[0]][b[1]]&&(X=a)};n.setDuration=function(a){Y=a};n.touchEnabled=I;n.transitions=function(){s||(s=r.createElement("span").style);return"WebkitTransition"in s?{property:"-webkit-transition", end:"webkitTransitionEnd"}:"MozTransition"in s?{property:"-moz-transition",end:"transitionend"}:"MSTransition"in s?{property:"-ms-transition",end:"transitionend"}:"OTransition"in s?{property:"-o-transition",end:"otransitionend"}:"transition"in s?{property:"transition",end:"transitionend"}:null};n.transforms=function(){s||(s=r.createElement("span").style);return"WebkitTransform"in s?"WebkitTransform":"MozTransform"in s?"MozTransform":"msTransform"in s?"msTransform":"OTransform"in s?"OTransform":"transform"in s?"transform":null};n.browser=function(){D||(D=-1!==j.search("firefox")?"firefox":-1!==j.search("webkit")?"webkit":-1!==j.search("opera")?"opera":-1!==j.search("msie")?"msie":null,"webkit"===D&&(D=-1!==j.search("chrome")?"chrome":"safari"));return D};n.version=function(){if("undefined"===typeof y){var a;switch(D){case "msie":y=parseInt(j.substr(j.indexOf("msie")+4),10);break;case "safari":a=j.indexOf("version")+8;y=parseInt(j.substr(a,a+4),10);break;case "opera":a=j.indexOf("version")+8;y=parseInt(j.substr(a, a+4),10);break;case "chrome":a=j.indexOf("chrome")+7;y=parseInt(j.substr(a,a+4),10);break;case "firefox":y=parseInt(j.substr(j.indexOf("firefox")+8),10)}}return y};n.mobile=function(){if(I){if(-1!==j.search("iphone")||-1!==j.search("ipad")||-1!==j.search("ipod"))return"ios";if(-1!==j.search("android")||-1!==j.search("applewebkit"))return"android"}return null};var B=n.trim=function(a){return!a?"":a.replace(/^\s+|\s+$/g,"")},X=n.defaultEase="Quint.easeOut",Y=n.defaultDuration=500,ka;ka="msie"!==n.browser()? 33.3:9<=n.version()?16.6:33.3;var x=n.ie8="msie"===D&&9>y;if(!(x&&8>y)){p.prototype={ready:function(a,b){if(this.element===r){b&&b.length&&(this.googleFonts=b);if(z)this.one("DOMContentLoaded",a);else this.element=q,r.cjMigrate=null,q.cjMigrate=this,this.one("load",a);return this}},each:function(a,b){var c=this.element;if(c.cjIsNull)return this;var d=c.length||0,e=typeof b,f="undefined"!==e,g=[],h=-1;d||(c=[c],d=1);for(;++h<d;)g[h]=c[h];for(h=-1;++h<d;)f?"string"!==e?a.apply(g[h],b):a.call(g[h],b): a.call(g[h],h);return this},domElement:function(a){if(this.length){var b=this.element;return b.length?b[a||0]:b}return null},on:function(a,b,c){var d=this.element;if(d.cjIsNull)return this;if(d.length&&d!==q)return this.each(g,["on",a,b,c]);var e=a.split(" "),f=e.length;if(2>f)da(d,a,b,c);else for(;f--;)da(d,e[f],b,c);return this},off:function(a,b){var c=this.element;if(c.cjIsNull)return this;if(c.length&&c!==q)return this.each(g,["off",a,b]);var d;a&&(d="."===a.charAt(0));if(a&&!d){var e=c.cjEvents; if(!e)return this;var f=a.split(" "),k=f.length,h=e.length;d=[];for(var j,l,m=[],n=h,r,p,s;n--;)m[n]=e[n];for(n=h;n--;){p=e[n];r=p[0];for(s=k;s--;){h=f[s];j=h.split(".");if(1<j.length){if(j[1]!==p.namespace)continue;h=j[0]}if(h===r&&(j=m.indexOf(p),-1!==j&&(!b||b===p[1])))m.splice(j,1),d[d.length]=z?h:[h,p.callback]}}if(d.length)for(;d.length;)h=d[0],d.shift(),z||(l=h[1],h=h[0]),-1===d.indexOf(h)&&(e=c,f=h,k=l,z?e.removeEventListener&&e.removeEventListener(f,G,!1):e.detachEvent&&e.detachEvent("on"+ f,k));m.length?c.cjEvents=m:v(c,"cjEvents")}else d&&(d=a.substring(1,a.length)),ea(this,c,d);return this},one:function(a,b){var c=this.element;return c.cjIsNull?this:c.length&&c!==q?this.each(g,["one",a,b]):this.on(a,b,!0)},trigger:function(a){var b=this.element;if(b.cjIsNull)return this;if(b.length&&b!==q)return this.each(g,["trigger",a]);a=a.split(" ");for(var c=a.length;c--;){var d=b,e=a[c];if(/\./.test(e)){var f=d.cjEvents,k=f.length,h=void 0,j=void 0,l=h=void 0;"."!==e.charAt(0)?(h=e.split("."), j=h[0],l=h[1]):l=e;for(;k--;)h=f[k],j?(e=h[0],h.namespace===l&&j===e&&V(d,e)):h.namespace===l&&V(d,h[0])}else V(d,e)}return this},hasEventListener:function(a){var b=this.element;if(b.cjIsNull)return!1;if(1!==b.nodeType&&b.length&&b!==q)return g.apply(b[0],["hasEventListener",a]);var c="."===a.charAt(0),b=b.cjEvents;if(!b)return!1;var d=b.length,e;c?(e=a.substring(1,a.length),a=null):(c=a.split("."),1<c.length&&(a=c[0],e=c[1]));for(;d--;)if(c=b[d],e)if(e&&a){if(c[0]===a&&c.namespace===e)return!0}else{if(c.namespace=== e)return!0}else if(c[0]===a)return!0;return!1},children:function(a){var b=this.element;if(b.cjIsNull)return new p([]);if(1!==b.nodeType&&b.length)return g.apply(b[0],["children",a]);if(!b.hasChildNodes||!b.hasChildNodes())return new p([]);if(a)a=F(a,b);else{a=b.childNodes;var c=[];if(a&&a.length)for(var d=a.length,e,f=-1;++f<d;)e=a[f],E(e)&&(c[c.length]=e);a=c}c=a.length;d=[];for(e=-1;++e<c;)f=a[e],f.parentNode===b&&(d[d.length]=f);return new p(d)},getChildAt:function(a){var b=this.element;if(b.cjIsNull)return new p([]); if(1!==b.nodeType&&b.length)return g.apply(b[0],["getChildAt",a]);if(!b.hasChildNodes||!b.hasChildNodes())return new p([]);for(var b=b.childNodes,c=[],d=b.length,e,f=-1;++f<d;)e=b[f],T(e)||(c[c.length]=e);return a<c.length?w(c[a]):new p([])},eq:function(a){var b=this.element;return b.cjIsNull||"undefined"===typeof a?new p([]):b.length?w(b[a]):this},toArray:function(){var a=this.element,b=[];if(a.cjIsNull||!a.length)return b;this.each(sa,[b]);return b},parent:function(){var a=this.element;if(a.cjIsNull)return new p([]); if(1!==a.nodeType&&a.length)return g.call(a[0],"parent");a=a.parentNode;return!a?new p([]):w(a)},parents:function(){var a=this.element;if(a.cjIsNull)return new p([]);if(1!==a.nodeType&&a.length)return g.call(a[0],"parents");for(var b=[];a=a.parentNode;)1===a.nodeType&&(b[b.length]=a);return new p(b)},find:function(a){var b=this.element;return b.cjIsNull||!a?new p([]):1!==b.nodeType&&b.length?g.apply(b[0],["find",a]):!b.hasChildNodes||!b.hasChildNodes()?new p([]):w(F(a,b))},closest:function(a){return!a? this.parent():this.travel(a,"closest")},prev:function(a){return this.travel(a,"prev")},next:function(a){return this.travel(a,"next")},append:function(a){return this.changeDom(a,"append")},appendTo:function(a){return this.changeDom(a,"appendTo")},prepend:function(a){return this.changeDom(a,"prepend")},prependTo:function(a){return this.changeDom(a,"prependTo")},insertBefore:function(a){return this.changeDom(a,"insertBefore")},insertAfter:function(a){return this.changeDom(a,"insertAfter")},wrap:function(a){var b= this.element;if(b.cjIsNull)return this;if(b.length)return this.each(g,["wrap",a]);a=w(F(a));if(!a.length)return this;a=a.element;b.parentNode.insertBefore(a,b);a.appendChild(b)},text:function(a){var b=this.element;if("undefined"===typeof a)return b.cjIsNull?"":1!==b.nodeType&&b.length?g.apply(b[0],["text",a]):B(b.innerHTML.replace(/(<([^>]+)>)/ig,""));if(b.cjIsNull)return this;if(b.length)return this.each(g,["text",a]);b.innerHTML=a?B(a.toString().replace(/(<([^>]+)>)/ig,"")):"";return this},html:function(a){var b= this.element;if("undefined"===typeof a)return b.cjIsNull?"":1!==b.nodeType&&b.length?g.apply(b[0],["html",a]):B(b.innerHTML).replace(/\s+/g," ");if(b.cjIsNull)return this;if(b.length)return this.each(g,["html",a]);a||(a="");b.innerHTML=a;return this},width:function(a){return this.getSize(a,"width")},height:function(a){return this.getSize(a,"height")},outerWidth:function(a){return this.getFullSize(a,"width")},outerHeight:function(a){return this.getFullSize(a,"height")},scrollTop:function(a){var b= this.element;if(b.cjIsNull)return 0;if(1!==b.nodeType&&b.length&&b!==q)return g.apply(b[0],["scrollTop",a]);if(b===q){if("undefined"===typeof a)return!x?pageYOffset:r.documentElement.scrollTop;b.scrollTo(0,a)}else{if("undefined"===typeof a)return b.scrollTop;b.scrollTop=a}},css:function(a,b){var c=this.element;if("object"===typeof a){if(c.cjIsNull)return this;if(c.length)return this.each(g,["css",a,b]);var d,e;for(e in a)a.hasOwnProperty(e)&&(b=ga(c,e,a[e]),d=b[1],b[0]&&(!isNaN(d)||d)&&(c.style[e]= d));return this}if("undefined"!==typeof b){if(c.cjIsNull)return this;if(c.length)return this.each(g,["css",a,b]);var f=a;d=f.split("-");e=d.length;if(1<e)for(var f="",k,h=-1;++h<e;)k=d[h],0!==h?f+=U(k):f+=k;a=f;b=ga(c,a,b);d=b[1];if(isNaN(d)&&!d)return this;b[0]&&(c.style[a]=d);return this}return c.cjIsNull?0:1!==c.nodeType&&c.length?g.apply(c[0],["css",a,b]):m?m(c,null).getPropertyValue(a):c.currentStyle[a]},addClass:function(a){var b=this.element;if(b.cjIsNull)return this;if(b.length)return this.each(g, ["addClass",a]);for(var c=a.split(" "),d=c.length,e;d--;)a=c[d],(e=b.className)?-1===e.indexOf(a)&&(b.className=e+" "+a):b.className=a;return this},removeClass:function(a){var b=this.element;if(b.cjIsNull)return this;if(b.length)return this.each(g,["removeClass",a]);var c=b.className;if(c)for(var d=a.split(" "),e=d.length,f;e--;)a=d[e],f=c.indexOf(a),-1!==f&&(b.className=c=B(c.substring(0,f)+c.substring(f+a.length,c.length)));return this},hasClass:function(a){var b=this.element;return b.cjIsNull? !1:1!==b.nodeType&&b.length?g.apply(b[0],["hasClass",a]):(b=b.className)?-1!==b.search(a):!1},show:function(){return this.showHide("show")},hide:function(){return this.showHide("hide")},data:function(a,b){var c=this.element;if(c.cjIsNull)return!1;if(1!==c.nodeType&&c.length)return g.apply(c[0],["data",a,b]);var d=c.cjStorage||{};if(a){if("object"===typeof a){for(var e in a)a.hasOwnProperty(e)&&(d[e]=a[e]);c.cjStorage=d;return this}return"undefined"!==typeof b?(d[a]=b,c.cjStorage=d,this):d[a]}return d}, removeData:function(a){a?this.data&&delete this.storage[a]:delete this.storage;return this},remove:function(a){var b=this.element;if(b.cjIsNull)return this;if(b.length)return this.each(g,"remove");a||this.empty();n.transform&&this.transform("stop");this.stop();ea(this,b);this.removeSwipe();v(b,"cjMigrate");v(b,"cjDisplay");v(b,"cjStorage");v(b,"cjIsNull");b.parentNode.removeChild(b)},empty:function(){var a=this.element;if(a.cjIsNull)return this;if(a.length)return this.each(g,"empty");for(var b=a.getElementsByTagName("*"), c=b.length;c--;)g.apply(b[c],["remove",!0]);a.innerHTML="";return this},clone:function(){var a=this.element;if(a.cjIsNull)return this;if(1!==a.nodeType&&a.length)return g.call(a[0],"clone");var b=r.createElement(a.tagName),c=new p(b),d=a.cjEvents,e=a.attributes,f=this.data,k=e.length,h,j;for(j=0;j<k;j++)h=e[j],b.setAttribute(h.name,h.value);if(d){e=d.length;for(j=-1;++j<e;)k=d[j],c.on(k[0],k[1])}if(f){var d={},l;for(l in f)f.hasOwnProperty(l)&&(d[l]=f[l]);c.storage=d}b.innerHTML=a.innerHTML;b.cjDisplay= a.cjDisplay;return c},offset:function(){var a=this.element;if(a.cjIsNull)return{left:0,top:0};if(1!==a.nodeType&&a.length)return g.call(a[0],"offset");var b=0,c=0;if(a.offsetParent){b=a.offsetLeft;for(c=a.offsetTop;a=a.offsetParent;)b+=a.offsetLeft,c+=a.offsetTop}return{left:b,top:c}},attr:function(a,b){var c=this.element;if("object"===typeof a){if(c.cjIsNull)return this;if(c.length)return this.each(g,["attr",a,b]);for(var d in a)a.hasOwnProperty(d)&&c.setAttribute(d,a[d]);return this}if("undefined"!== typeof b){if(c.cjIsNull)return this;if(c.length)return this.each(g,["attr",a,b]);c.setAttribute(a,b);return this}return c.cjIsNull?null:1!==c.nodeType&&c.length?g.apply(c[0],["attr",a,b]):c.getAttribute(a)},removeAttr:function(a){var b=this.element;if(b.cjIsNull)return this;if(b.length)return this.each(g,["removeAttr",a]);b.removeAttribute(a);return this},val:function(a){return this.getProp("val",a)},is:function(a){return this.getProp("is",a)},innerCSS:function(a){var b=this.element;return b.cjIsNull|| "style"!==b.nodeName.toLowerCase()?this:1!==b.nodeType&&b.length?g.apply(b[0],["innerCSS",a]):a?(x?(b=b.styleSheet,b.cssText+=a):b.innerHTML+=a,this):x?b.styleSheet.cssText:b.innerHTML},animate:function(a,b){var c=this.element;if(c.cjIsNull)return this;if(c.length)return this.each(g,["animate",a,b]);c.cjTween&&c.cjTween.stop();new la(c,a,b||{});return this},tick:function(a){var b=this.element;if(b.cjIsNull)return this;if(1!==b.nodeType&&b.length)return g.apply(b[0],["tick",a]);b.cjTween&&b.cjTween.stop(); new na(b,a);return this},fadeIn:function(a){return this.fadeIt("fadeIn",a)},fadeOut:function(a){return this.fadeIt("fadeOut",a)},stop:function(a,b){var c=this.element;if(c.cjIsNull)return this;if(c.length)return this.each(g,["stop",a,b]);c=c.cjTween;if(!c)return this;c.stop(a,b);return this},stopAll:function(a,b){var c=this.element;if(c.cjIsNull)return this;if(c.length)return this.each(g,["stopAll",a,b]);if(!c.hasChildNodes||!c.hasChildNodes())return this;c.stop(a,b);for(var c=c.getElementsByTagName("*"), d=c.length;d--;)w(c[d]).stop(a,b);return this},swipe:function(a){if(!I||!a)return this;var b=this.element;if(b.cjIsNull)return this;if(b.length)return this.each(g,["swipe",a]);b.cjSwipe={callback:a};b.addEventListener(Q,ha,!1);b.addEventListener(R,ia,!1);b.addEventListener(S,ja,!1);return this},removeSwipe:function(){if(!I)return this;var a=this.element;if(a.cjIsNull)return this;if(a.length)return this.each(g,"removeSwipe");a.removeEventListener(Q,ha,!1);a.removeEventListener(R,ia,!1);a.removeEventListener(S, ja,!1);delete a.cjSwipe;return this},travel:function(a,b){var c=this.element;if(c.cjIsNull)return new p([]);if(1!==c.nodeType&&c.length)return g.apply(c[0],["travel",a,b]);var d;d=a;var e;d&&(/\./.test(d)?(e="class",d=d.substr(1,d.length-1)):-1!==d.search("#")?(e="id",d=d.substr(1,d.length-1)):e="tag");d=J(c,d,e,b);return w(F(d,c))},changeDom:function(a,b){var c=this.element;if(c.cjIsNull)return this;if(1!==c.nodeType&&c.length)return g.apply(c[0],["changeDom",a,b]);E(a)||(a.cjMigrate?a=$(a.element): a.element||(a=w(F(a)).domElement()));if(T(a))return this;var d=a.length;if(d){for(var e=[],f=-1;++f<d;)e[f]=a.eq(f).domElement();for(f=-1;++f<d;)Z(b,c,e[f])}else Z(b,c,a);return this},getSize:function(a,b){var c=this.element;if(c.length&&c!==q){if(a)return c.cjIsNull?this:this.each(g,["getSize",a,b]);if(c.cjIsNull)return 0;if(1!==c.nodeType)return g.apply(c[0],["getSize",a,b])}var d=b;if("undefined"===typeof a||!0===a){d=U(d);x&&c===q&&(c=r.documentElement);var e=ca(c,d);if(!(c===q||c===r)&&!a){if(!e){var f= m?m(c,null).display:c.currentStyle.display;if("inline"===f||"hidden"===f)c.style.display="block",e=ca(c,d),c.style.display=f}"Width"===d?(d="Left",f="Right"):(d="Top",f="Bottom");m?(e-=parseInt(m(c,null)["padding"+d],10),e-=parseInt(m(c,null)["padding"+f],10)):(e-=parseInt(c.currentStyle["padding"+d],10)||0,e-=parseInt(c.currentStyle["padding"+f],10)||0)}c=e}else c.style[d]=parseInt(a,10)+"px",c=this;return c},getFullSize:function(a,b){var c=this.element;if(c.cjIsNull)return 0;if(1!==c.nodeType&& c.length&&c!==q)return g.apply(c[0],["getFullSize",a,b]);var d,e,f,k,h;"width"===b?(d="Left",e="Right"):(d="Top",e="Bottom");f=this[b](!0);U(b);var j="border"+d+"Width",l="border"+e+"Width";a&&(k="margin"+d,h="margin"+e);m?(f+=parseInt(m(c,null)[j],10)+parseInt(m(c,null)[l],10),a&&(f+=parseInt(m(c,null)[k],10)+parseInt(m(c,null)[h],10))):(f+=parseInt(c.currentStyle[j],10)||0+parseInt(c.currentStyle[l],10)||0,a&&(f+=parseInt(c.currentStyle[k],10)||0+parseInt(c.currentStyle[h],10)||0));return f},getProp:function(a, b){var c=this.element;if(c.cjIsNull)return null;if(1!==c.nodeType&&c.length)return g.apply(c[0],["getProp",a,b]);if("val"===a){if("undefined"===typeof b)return c.value;c.value=b;return this}return c.tagName.toLowerCase()===b.toLowerCase()},fadeIt:function(a,b){var c=this.element;if(c.cjIsNull)return this;if(1!==c.nodeType&&c.length)return g.apply(c[0],["fadeIt",a,b]);b||(b={});var d;b[a]=!0;"fadeIn"===a?(d=1,b.display=fa(this,c)):d=0;return this.animate({opacity:d},b)},showHide:function(a){var b= this.element;if(b.cjIsNull)return this;if(b.length)return this.each(g,["showHide",a]);"show"===a?b.style.display=fa(this,b):(a=m?m(b,null).display:b.currentStyle.display,"none"!==a&&(this.cjDisplay=a),b.style.display="none");return this}};la.prototype={cycle:function(){var a=this.transitions;if(!a)return!0;for(var b=a.length,c;b--;)a[b]()&&(c=!0);return c},stop:function(a,b,c){var d=this.obj;v(d,"cjTween");if(a){a=this.transitions;var e,f,g;if(a)for(e=a.length;e--;)f=a[e].stored,g=f[0],x?"Opacity"!== g?d.style[g]=f[1]:d.filters.item("DXImageTransform.Microsoft.Alpha").Opacity=100*f[1]:d.style[g]=f[1]}this.fadeIn?(d.style.opacity=1,d.style.visibility="visible"):this.fadeOut&&(d.style.display="none");b&&(b=this.onComplete);c||(c=this.onCompleteParams,u.splice(u.indexOf(this),1),A=u.length,b&&b.apply(d,[c]))}};na.prototype={cycle:function(){return this.transitions()},stop:function(a,b,c,d){if(b=this.obj)v(b,"cjTween"),c||(u.splice(u.indexOf(this),1),A=u.length),(a||d)&&this.onComplete.apply(b,[1, this.onCompleteParams])}};Array.indexOf||(Array.prototype.indexOf=function(a){for(var b=this.length;b--;)if(this[b]===a)return b;return-1});Array.isArray||(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)});Date.now||(Date.now=function(){return+new Date});x&&(Event.prototype.preventDefault=function(){this.returnValue=!1},Event.prototype.stopPropagation=function(){this.cancelBubble=!0});var O={linear:{easenone:function(a,b,c,d){return c*a/d+b},easein:function(a, b,c,d){return c*a/d+b},easeout:function(a,b,c,d){return c*a/d+b},easeinout:function(a,b,c,d){return c*a/d+b}},quint:{easeout:function(a,b,c,d){return c*((a=a/d-1)*a*a*a*a+1)+b},easein:function(a,b,c,d){return c*(a/=d)*a*a*a*a+b},easeinout:function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a*a*a*a+b:c/2*((a-=2)*a*a*a*a+2)+b}},quad:{easein:function(a,b,c,d){return c*(a/=d)*a+b},easeout:function(a,b,c,d){return-c*(a/=d)*(a-2)+b},easeinout:function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b}},quart:{easein:function(a, b,c,d){return c*(a/=d)*a*a*a+b},easeout:function(a,b,c,d){return-c*((a=a/d-1)*a*a*a-1)+b},easeinout:function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a*a*a+b:-c/2*((a-=2)*a*a*a-2)+b}},cubic:{easein:function(a,b,c,d){return c*(a/=d)*a*a+b},easeout:function(a,b,c,d){return c*((a=a/d-1)*a*a+1)+b},easeinout:function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a*a+b:c/2*((a-=2)*a*a+2)+b}},circ:{easein:function(a,b,c,d){return-c*(Math.sqrt(1-(a/=d)*a)-1)+b},easeout:function(a,b,c,d){return c*Math.sqrt(1-(a=a/d-1)*a)+b},easeinout:function(a, b,c,d){return 1>(a/=d/2)?-c/2*(Math.sqrt(1-a*a)-1)+b:c/2*(Math.sqrt(1-(a-=2)*a)+1)+b}},sine:{easein:function(a,b,c,d){return-c*Math.cos(a/d*(Math.PI/2))+c+b},easeout:function(a,b,c,d){return c*Math.sin(a/d*(Math.PI/2))+b},easeinout:function(a,b,c,d){return-c/2*(Math.cos(Math.PI*a/d)-1)+b}},expo:{easein:function(a,b,c,d){return 0===a?b:c*Math.pow(2,10*(a/d-1))+b},easeout:function(a,b,c,d){return a===d?b+c:c*(-Math.pow(2,-10*a/d)+1)+b},easeinout:function(a,b,c,d){return 0===a?b:a===d?b+c:1>(a/=d/2)? c/2*Math.pow(2,10*(a-1))+b:c/2*(-Math.pow(2,-10*--a)+2)+b}}}}}})();

(function(l){function n(b,a,c){this.onComplete=c.onComplete;this.onCompleteParams=c.onCompleteParams;0===c.duration?this.stop():(b.style.visibility="visible",b.cjTransform=this,this.to=a,this.obj=b,this.duration=c.duration||jQuick.defaultDuration,this.ease=(c.ease||jQuick.defaultEase).toLowerCase().split("."),c.delay?this.timer(30<c.delay?c.delay:30):this.timer(30))}function s(b){var a=this.cjTransform;a&&(b.target===b.currentTarget&&a.stop(a.onComplete),a.running=!1)}function r(b,a,c){"animate"=== b?(this.cjTransform&&this.cjTransform.stop(),c||(c={}),"transform"in a&&(a[p]=a.transform,"transform"!==p&&delete a.transform),new n(this,a,c)):"stop"===b&&this.cjTransform&&this.cjTransform.stop(a)}var m=l.transitions(),p,t,u=/,/g,w=/{}/g,x=/[A-Z]/g,y=/ cj-tween/g,z=/^\s+|\s+$/g,A=/{props}/,B=/{easing}/,C=/{duration}/,D=/(auto|inherit|rgb|%|#)/,E={linear:{easenone:"0.250, 0.250, 0.750, 0.750",easein:"0.420, 0.000, 1.000, 1.000",easeout:"0.000, 0.000, 0.580, 1.000",easeinout:"0.420, 0.000, 0.580, 1.000"}, quint:{easein:"0.755, 0.050, 0.855, 0.060",easeout:"0.230, 1.000, 0.320, 1.000",easeinout:"0.860, 0.000, 0.070, 1.000"},quad:{easein:"0.550, 0.085, 0.680, 0.530",easeout:"0.250, 0.460, 0.450, 0.940",easeinout:"0.455, 0.030, 0.515, 0.955"},quart:{easein:"0.895, 0.030, 0.685, 0.220",easeout:"0.165, 0.840, 0.440, 1.000",easeinout:"0.770, 0.000, 0.175, 1.000"},cubic:{easein:"0.550, 0.055, 0.675, 0.190",easeout:"0.215, 0.610, 0.355, 1.000",easeinout:"0.645, 0.045, 0.355, 1.000"},circ:{easein:"0.600, 0.040, 0.980, 0.335", easeout:"0.075, 0.820, 0.165, 1.000",easeinout:"0.785, 0.135, 0.150, 0.860"},sine:{easein:"0.470, 0.000, 0.745, 0.715",easeout:"0.390, 0.575, 0.565, 1.000",easeinout:"0.445, 0.050, 0.550, 0.950"},expo:{easein:"0.950, 0.050, 0.795, 0.035",easeout:"0.190, 1.000, 0.220, 1.000",easeinout:"1.000, 0.000, 0.000, 1.000"}};if(m){var h=m.property,j=document.createElement("style");p=l.transforms();m=m.end;j.type="text/css";j.innerHTML=".cj-tween{"+h+"-property:none !important;}";document.getElementsByTagName("head")[0].appendChild(j); t=h+"-property:{props};"+h+"-duration:{duration}s;"+h+"-timing-function:cubic-bezier({easing});"}n.prototype={timer:function(b){var a=this;this.delayed=setTimeout(function(){a.animate()},b)},animate:function(){var b,a,c,d,e,h=0,f;f=[];var l=[],j=this.to,k=this.obj,n=this.ease,r=this.duration,g=k.getAttribute("style");for(a in j)if(j.hasOwnProperty(a)){c=a;if(e=c.match(x)){for(b=e.length;b--;)d=e[b],c=c.replace(RegExp(d,"g"),"-"+d.toLowerCase());"ms-transform"===c&&(c="-ms-transform")}d=b=j[a];e="backgroundPosition"=== a;if(!D.test(d)&&"opacity"!==a&&-1===a.search(p)&&!e)d+="px;";else if(e){d=b.x;b=b.y;e=isNaN(d);var v=isNaN(b);if(!e&&!v)d+="px",b+="px";else{var q=k.style.backgroundPosition,q=""!==q?q.split(" "):window.getComputedStyle(k,null).backgroundPosition.split(" ");!e?d+="px":d=q[0];!v?b+="px":b=q[1]}d=d+" "+b+";"}else d+=";";f[h]=c+":"+d.replace(u,"{}");l[h++]=c;if(g&&(e=g.search(c),-1!==e)){c=g.length-1;for(b=e-1;++b<c&&";"!==g[b];);g=g.split(g.substring(e,b+1)).join("")}}this.moves=a=t.replace(A,l.toString()).replace(C, (0.001*r).toFixed(2)).replace(B,E[n[0]][n[1]]);f=f.toString();f=f.replace(u,"");f=f.replace(w,",");k.className=k.className.replace(y,"");k.addEventListener(m,s,!1);k.setAttribute("style",g.replace(z,"")+a+f);this.running=!0},stop:function(b){var a=this.obj;a&&delete a.cjTransform;this.running?(a.removeEventListener(m,s,!1),a.className+=" cj-tween",a.setAttribute("style",a.getAttribute("style").split(this.moves).join(";").split(";;").join(";"))):clearTimeout(this.delayed);b&&this.onComplete.apply(a, this.onCompleteParams)}};l.fn("transform",function(b,a,c){return p?this.each(r,[b,a,c]):this})})(jQuick);

(function(m){function A(a,b){var j=document.createDocumentFragment(),c=m.extend({},T),g=this.banner=m(a),f={visibility:"visible",display:"none"},t=a.attributes,d=t.length,y=[],l,k,n,p,e,h,r,x,u,q,v,s,I,J;b&&m.extend(c,b);for(e=0;e<d;e++)if(k=t[e],h=k.name,-1!==h.search("data-")){h=h.split("data-")[1];if(-1!==h.search("-")){r=h.split("-");q=r.length;for(var w=r[0],z=void 0,z=1;z<q;z++)h=r[z],w+=h.charAt(0).toUpperCase()+h.substring(1,h.length);h=w}c[h]=k.value}r=this.width=parseInt(c.width,10);h=this.height= parseInt(c.height,10);d={width:r,height:h};t=this.canTransform=O&&"true"===c.transition3d.toString();q=g.css(d).children(".blades-slide").css(d).toArray();k=U&&"true"===c.useRetina.toString();d=this.length=q.length;if("true"===c.randomize.toString()){w=[];for(e=0;e<d;e++)w[e]=q[e];for(q=[];0<w.length;)e=Math.random()*w.length|0,q[q.length]=w[e],w.splice(e,1)}for(e=0;e<d;e++)y[e]=new P(q[e],this,f,k);this.slides=y;e=g.children(".blades-controls");e.length&&(f=e.children(".blades-btn-left"),d=e.children(".blades-btn-right"), f.length&&(l=!0,this.left=f.data({banner:this,left:!0}).on("click",K).domElement()),d.length&&(l=!0,this.right=d.data("banner",this).on("click",K).domElement()),l&&(this.controls=e,Q&&e.addClass("blades-controls-trans"),("msie"!==D||8<L)&&e.addClass("blades-controls-fix"),"msie"===D&&9<L&&e.addClass("blades-btn-ie10")));if("true"===c.responsive.toString()&&O&&(Q||B))this.element=a,this.par=g.parent(),this.margin=parseInt(g.css("margin-bottom"),10),this.hideCaptions="true"===c.scaledHidesCaptions.toString(), E[E.length]=this,R(),m(window).on("resize",V);f=-parseInt(c.spacing,10);e=parseInt(c.rows,10);q=parseInt(c.cols,10);var w=this.total=e*q,z=this.iTotal=w-1,F=h/e|0,G=r/q|0,A=1===q%2,C=1===e%2,M=q-1>>1,N=e-1>>1;l=[];var H={width:G,height:F},d={width:G,height:F};A&&(n=q/2|0);C&&(p=e/2|0);k&&(H.backgroundSize=r+"px "+h+"px");for(e=0;e<w;e++)k=e%q,h=e/q|0,v=G*k,s=F*h,I=A?k!==n?k<n?v+f*(n-k):k>n?v-f*(k-n):v:v:k<M?v+f*(M-k):v-f*(k-M),J=C?h!==p?h<p?s+f*(p-h):h>p?s-f*(h-p):s:s:h<N?s+f*(N-h):s-f*(h-N),d.top= J,d.left=I,H.backgroundPosition=-(G*k)+"px "+-(F*h)+"px",x=m("<span />").css(H).addClass("blades-plane"),u=m("<span />").css(H).addClass("blades-plane"),t||(x.data("instance",this),u.data("instance",this)),r=m("<div />").data({front:x,backs:u}).addClass("blades-panel").css(d).append(x).append(u),e===z&&r.data("instance",this),l[e]={xx:I,yy:J,x:v,y:s,row:h,col:k,front:x,backs:u,square:r},j.appendChild(r.domElement());n=document.createElement("div");n.className="blades-container";n.appendChild(j);a.insertBefore(n, a.firstChild);j=c.transitionType;if("mixed"===j)this.mixed=!0,this.transition=0;else switch(j){case "vertical":this.transition=0;break;case "horizontal":this.transition=1;break;case "verticalRows":this.transition=2;break;case "horizontalRows":this.transition=3;break;case "verticalCols":this.transition=4;break;default:this.transition=5}if((this.autoplay="true"===c.autoplay.toString())||B)if(g.data("banner",this),!B)g.on("mouseenter",W).on("mouseleave",X);this.isOn=0;this.panels=l;this.currentSlide= y[0];this.numChil=g.children().length;this.leftCallback=c.leftClickCallback;this.rightCallback=c.rightClickCallback;this.delay=parseInt(c.autoplayDelay,10);this.allDelay=parseInt(c.transitionAllDelay,10);this.colDelay=parseInt(c.transitionColsDelay,10);this.rowDelay=parseInt(c.transitionRowsDelay,10);g=this;setTimeout(function(){g.loadSlide()},250)}function Y(a,b,j,c,g){var f=m(this),t=f.data(),d;a?(t.front.hide(),t.backs.show()):(t.backs.hide(),t.front.show());c&&(this.style[s]=c+" skew"+b+"(-15deg)"); g&&(d={onComplete:C});f.transform("animate",j,d)}function P(a,b,j,c){var g=[],f=a.attr("data-retina");this.container=a;this.banner=b;this.src=c&&f?f:a.attr("data-img");a.children("span").each(Z,[g,this]);b=g.length;a.css(j);this.info=b?g:null;this.infoLength=b}function $(){var a=this.data("slide");a.loaded=!0;a.banner.flip()}function aa(){m(this).data("instance").loadSlide()}function ba(){m(this).data("instance").done()}function C(){var a=m(this).data("instance");a.flipped=!a.flipped;a.move(!0)}function K(a){var b; "object"===typeof a?(a=this.data(),b=a.banner,a=a.left):(b=this.data("banner"),a="left"===a);b.running||(clearTimeout(b.timer),b.next(a))}function W(){var a=this.data("banner");clearTimeout(a.timer);a.isOver=!0}function X(){var a=this.data("banner");a.isOver=!1;a.isReady&&a.startTimer()}function Z(a,b){var j=m(this);if(j.html()){var c=j.attr("data-align")||"left",g=parseInt(j.attr("data-x"),10),f=parseInt(j.attr("data-y"),10),t=j.attr("data-background"),d=j.attr("data-color"),y=j.outerHeight(),l= j.outerWidth(),k=a.length,n;isNaN(g)&&(g=0);isNaN(f)&&(f=0);n={top:f};n[c]=g;d&&(n.color=d);t&&(n.background=t);this.cjSlide=b;this.cjAlign=c;this.cjWidth=l;this.cjHeight=y;a[k]=[j.css(n),c,l,y,f,y*k+10*k+10,c,g]}}function V(){clearTimeout(S);S=setTimeout(R,100)}function R(){for(var a=E.length,b={},j,c,g,f,t,d,m,l,k,n,p,e;a--;)if(d=E[a],c=d.parentWidth,j=Math.max(d.par.width(),320),c!==j){f=d.banner;t=d.slides;c=Math.min(j/d.width,1).toFixed(2);n=d.hideCaptions;p=d.length;1>c?(l=1-parseFloat(c)+1, 0.5>c&&(l+=0.5),f.addClass("blades-responsive")):(l=1,f.removeClass("blades-responsive"));for(;p--;)if(g=t[p],k=g.info)for(e=g.infoLength;e--;)g=k[e],n?1>c?g[0].addClass("blades-hide-info"):g[0].removeClass("blades-hide-info"):(m=g[6],"left"===m?b.hasOwnProperty("right")&&delete b.right:b.hasOwnProperty("left")&&delete b.left,1>c?(b.top=g[5]*l|0,b[m]=10):(b.top=g[4],b[m]=g[7]),b[s]="scale("+l+", "+l+")",g[0].css(b));d.left&&(d.left.style[s]="scale("+l+", "+l+")");d.right&&(d.right.style[s]="scale("+ l+", "+l+")");b={marginBottom:d.margin-(d.height-d.height*c)};b[s]="scale("+c+", "+c+")";f.css(b);d.parentWidth=j}}var T={cols:7,rows:3,width:700,height:300,spacing:10,useRetina:!0,randomize:!1,responsive:!0,autoplay:!1,autoplayDelay:4E3,transition3d:!0,transitionType:"mixed",transitionAllDelay:75,transitionColsDelay:100,transitionRowsDelay:250,scaledHidesCaptions:!1,rightClickCallback:null,leftClickCallback:null},S,E=[],D=m.browser(),L=m.version(),B=m.touchEnabled,s=m.transforms(),Q="safari"!==D|| 5<L,U=window.devicePixelRatio&&1<window.devicePixelRatio,O=s&&m.transitions()&&"opera"!==D;m.fn("blades",function(a){return this.each(function(){new A(this,a)})});A.prototype={move:function(a){var b=this.canTransform,j=this.panels,c=this.iTotal,g=this.total,f,m,d,s,l,k,n,p;b||(l={});a?(f={duration:300},m={duration:300,onComplete:ba}):(f={duration:300,ease:"Cubic.easeOut"},m={duration:300,ease:"Cubic.easeOut",onComplete:aa});for(p=0;p<g;p++)d=j[p],a?(k=d.x,n=d.y):(k=d.xx,n=d.yy),s=p<c?f:m,b?d.square.transform("animate", {left:k,top:n},s):(l.top=n,l.left=k,d.square.animate(l,s))},loadSlide:function(){var a=this.currentSlide;a.loaded?this.flip():m("<img />").data("slide",a).one("load",$).attr("src",a.src)},flip:function(){var a={backgroundImage:"url("+this.currentSlide.src+")"},b=this.transition,j=this.allDelay,c=this.rowDelay,g=this.colDelay,f=this.flipped,m=this.panels,d=this.iTotal,y=this.total,l=this.mixed,k,n,p,e,h,r;f?(k="backs",n="front"):(k="front",n="backs");if(this.canTransform){var x,u,q,v;b%2?(q="Y",v= "X"):(q="X",v="Y");l||!f?(u="180",l="90"):(u="360",l="270",p=!0);x="rotate"+q+"("+l+"deg)";l={transform:x+" skew"+q+"(15deg)"};a[s]="rotate"+q+"("+u+"deg)";u={transform:"rotate"+q+"("+u+"deg) skew"+q+"(0deg)"};p||(x=null);p={ease:"Quint.easeIn",onComplete:Y,onCompleteParams:[f,q,u,x]};for(r=0;r<y;r++)h=m[r],e=h.square,h[k].css(a),h[n].css(s,"rotate"+v+"(0deg)"),p.delay=(2>b?r*j:4>b?h.row*c:h.col*g)+30,r===d&&(p.onCompleteParams=[f,q,u,x,!0]),e.css(s,"rotate"+v+"(0deg)").transform("animate",l,p)}else{p= {};a.zIndex=1;for(r=a.opacity=0;r<y;r++)h=m[r],h[n].css("z-index",0),p.delay=2>b?r*j:4>b?h.row*c:h.col*g,r===d&&(p.onComplete=C),h[k].css(a).fadeIn(p)}this.mixed&&(this.transition=5>b?b+1:0)},done:function(){var a=this.currentSlide,b=a.info,j=this.controls;if(b){var c={zIndex:0,display:"none"},g=a.infoLength,f=this.prevSlide;for(f&&f.container.css(c);g--;)b[g][0].css("visibility","hidden");c.zIndex=this.numChil;c.display="block";a.container.css(c);a.infoOn=0;a.runInfo()}else this.autoplay&&this.startTimer(); j&&j.addClass("blades-controls-on");B&&this.banner.swipe(K);this.running=!1},startTimer:function(){this.isReady=!0;if(!this.isOver){var a=this;this.timer=setTimeout(function(){a.next()},this.delay)}},next:function(a){this.running=!0;this.isReady=!1;B&&this.banner.removeSwipe();var b=this.isOn,j=this.controls,c=this.currentSlide;j&&j.removeClass("blades-controls-on");c.container.hide();this.prevSlide=c;a?(this.leftCallback&&this.leftCallback(),this.isOn=b=0<b?b-1:this.length-1):(this.rightCallback&& this.rightCallback(),this.isOn=b=b<this.length-1?b+1:0);this.currentSlide=this.slides[b];this.move()}};P.prototype={runInfo:function(){if(this.infoOn<this.infoLength){var a=this.info[this.infoOn],b;"left"===a[0]?b="rect(0px, 0px, "+a[3]+"px, 0px)":(b=a[2],b="rect(0px, "+b+"px, "+a[3]+"px, "+b+"px)");this.infoOn++;a[0].css({clip:b,visibility:"visible"}).tick(this.settings)}else a=this.banner,a.autoplay&&a.startTimer()},settings:{onUpdate:function(a){if("left"===this.cjAlign)this.style.clip="rect(0px, "+ this.cjWidth*a+"px, "+this.cjHeight+"px, 0px)";else{var b=this.cjWidth;this.style.clip="rect(0px, "+b+"px, "+this.cjHeight+"px, "+b*(1-a)+"px)"}1===a&&this.cjSlide.runInfo()}}}})(jQuick);