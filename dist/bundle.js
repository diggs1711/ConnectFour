!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.board=t,this.width=r,this.height=n,this.colors=["red","yellow"]}return r(e,[{key:"createEmptyBoard",value:function(){var e=this;this.board=Array(this.height).fill().map(function(){return Array(e.width).fill(" ")});var t=document.getElementById("board");t.innerHTML="";for(var n=0;n<this.height;n++){for(var r=document.createElement("div"),o=0;o<this.width;o++){var i=document.createElement("div");i.className="cell row-"+n+" col-"+o,r.appendChild(i)}t.appendChild(r)}return this.board}},{key:"isEmpty",value:function(){return this.board.every(function(e){return e.every(function(e){return" "===e})})}},{key:"isFull",value:function(){return!this.isEmpty}},{key:"isColumnFull",value:function(e){return" "!==this.board[0][e]}},{key:"getAvailableColumns",value:function(){for(var e=[],t=0;t<this.width;t++)this.isColumnFull(t)||e.push(t);return e}},{key:"chkLine",value:function(e,t,n,r){return 0!=e&&e==t&&e==n&&e==r}},{key:"isWinner",value:function(){var e=this.board;if(this.isEmpty())return!1;for(var t=0;t<3;t++)for(var n=0;n<7;n++)if(this.chkLine(e[t][n],e[t+1][n],e[t+2][n],e[t+3][n]))return{winner:e[t][n],direction:"V",colum:n};for(var r=0;r<6;r++)for(var o=0;o<4;o++)if(this.chkLine(e[r][o],e[r][o+1],e[r][o+2],e[r][o+3]))return{winner:e[r][o],direction:"H",colum:o};for(var i=0;i<3;i++)for(var a=0;a<4;a++)if(this.chkLine(e[i][a],e[i+1][a+1],e[i+2][a+2],e[i+3][a+3]))return{winner:e[i][a],direction:"DR",colum:a};for(var s=3;s<6;s++)for(var u=0;u<4;u++)if(this.chkLine(e[s][u],e[s-1][u+1],e[s-2][u+2],e[s-3][u+3]))return{winner:e[s][u],direction:"DL",colum:u};return!1}},{key:"insertDisc",value:function(e,t){if(t>this.width||!this.colors.find(function(t){return t===e}))console.log("invalid params");else if(!this.isColumnFull(t))for(var n=this.height-1;n>-1;n--)if(" "===this.board[n][t])return void(this.board[n][t]=e)}},{key:"copyBoard",value:function(){var t=new e;t.createEmptyBoard();for(var n=0;n<=this.height-1;n++)t.board[n]=this.board[n].slice();return t}}]),e}();t.default=o},function(e,t,n){"use strict";var r=i(n(0)),o=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}n(3);var a=new r.default;a.createEmptyBoard(),a.insertDisc("red",0),a.insertDisc("red",1),a.insertDisc("yellow",1);var s=new o.default(5).getBestMove(a);a.insertDisc("red",s),console.log(a)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0);(r=i)&&r.__esModule;var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.max_depth=t,this.nodes_map=new Map}return o(e,[{key:"getBestMove",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(0==o&&this.nodes_map.clear(),e.isWinner()||o===this.max_depth){var i=e.isWinner();return"red"===i.winner?1e3-o:"yellow"===i.winner?-1e3+o:0}if(t){var a=-1/0;if(e.getAvailableColumns().forEach(function(t){var i=e.copyBoard();i.insertDisc("red",t);var s=n.getBestMove(i,!1,r,o+1);if(a=Math.max(a,s),0==o){var u=n.nodes_map.has(s)?n.nodes_map.get(s)+","+t:t;n.nodes_map.set(s,u)}}),0==o){if("string"==typeof this.nodes_map.get(a))var s=(f=this.nodes_map.get(a).split(","))[Math.floor(Math.random()*f.length)];else s=this.nodes_map.get(a);return r(s),s}return a}if(!t){var u=1/0;if(e.getAvailableColumns().forEach(function(t){var i=e.copyBoard();i.insertDisc("yellow",t);var a=n.getBestMove(i,!0,r,o+1);if(u=Math.min(u,a),0==o){var s=n.nodes_map.has(a)?n.nodes_map.get(a)+","+t:t;n.nodes_map.set(a,s)}}),0==o){if("string"==typeof this.nodes_map.get(u)){var f;s=(f=this.nodes_map.get(u).split(","))[Math.floor(Math.random()*f.length)]}else s=this.nodes_map.get(u);return r(s),s}return u}}}]),e}();t.default=a},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(6)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(5)(!1)).push([e.i,"body {\n  height: 100%;\n  width: 100%; }\n\n.board {\n  display: grid;\n  height: 500px;\n  width: 500px; }\n  .board .cell {\n    background: blue; }\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),u=null,f=0,c=[],l=n(7);function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(b(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,n);n.insertBefore(t,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return y(t,e.attrs),h(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=f++;n=u||(u=m(t)),r=M.bind(null,n,a,!1),o=M.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return d(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}e&&d(p(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete i[s.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function M(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);