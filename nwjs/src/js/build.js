'use strict';
const fs = require('fs');
const editor = require('nw.gui').Window.get();

const preview = window.open( 'template.html' );
editor.showDevTools();
const firstFocus = function(){
    editor.focus();
}
setTimeout(firstFocus,10);

let clickX;
let clickY;

const prismJs = function(){
    /* PrismJS 1.28.0 Copyright (c) 2012 Lea Verou
    https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+c+csharp+cpp&plugins=line-numbers */
    var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(e){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,r={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof i?new i(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var r,i;switch(t=t||{},a.util.type(n)){case"Object":if(i=a.util.objId(n),t[i])return t[i];for(var l in r={},t[i]=r,n)n.hasOwnProperty(l)&&(r[l]=e(n[l],t));return r;case"Array":return i=a.util.objId(n),t[i]?t[i]:(r=[],t[i]=r,n.forEach((function(n,a){r[a]=e(n,t)})),r);default:return n}},getLanguage:function(e){for(;e;){var t=n.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(n,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var i=(r=r||a.languages)[e],l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var s in t)t.hasOwnProperty(s)&&(l[s]=t[s]);t.hasOwnProperty(o)||(l[o]=i[o])}var u=r[e];return r[e]=l,a.languages.DFS(a.languages,(function(n,t){t===u&&n!=e&&(this[n]=l)})),l},DFS:function e(n,t,r,i){i=i||{};var l=a.util.objId;for(var o in n)if(n.hasOwnProperty(o)){t.call(n,o,n[o],r||o);var s=n[o],u=a.util.type(s);"Object"!==u||i[l(s)]?"Array"!==u||i[l(s)]||(i[l(s)]=!0,e(s,t,o,i)):(i[l(s)]=!0,e(s,t,null,i))}}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,l=0;i=r.elements[l++];)a.highlightElement(i,!0===n,r.callback)},highlightElement:function(n,t,r){var i=a.util.getLanguage(n),l=a.languages[i];a.util.setLanguage(n,i);var o=n.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&a.util.setLanguage(o,i);var s={element:n,language:i,grammar:l,code:n.textContent};function u(e){s.highlightedCode=e,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a.hooks.run("after-highlight",s),a.hooks.run("complete",s),r&&r.call(s.element)}if(a.hooks.run("before-sanity-check",s),(o=s.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!s.code)return a.hooks.run("complete",s),void(r&&r.call(s.element));if(a.hooks.run("before-highlight",s),s.grammar)if(t&&e.Worker){var c=new Worker(a.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else u(a.highlight(s.code,s.grammar,s.language));else u(a.util.encode(s.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};if(a.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new s;return u(a,a.head,e),o(e,a,n,a.head,0),function(e){for(var n=[],t=e.head.next;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,i=0;r=t[i++];)r(n)}},Token:i};function i(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function l(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function o(e,n,t,r,s,g){for(var f in t)if(t.hasOwnProperty(f)&&t[f]){var h=t[f];h=Array.isArray(h)?h:[h];for(var d=0;d<h.length;++d){if(g&&g.cause==f+","+d)return;var v=h[d],p=v.inside,m=!!v.lookbehind,y=!!v.greedy,k=v.alias;if(y&&!v.pattern.global){var x=v.pattern.toString().match(/[imsuy]*$/)[0];v.pattern=RegExp(v.pattern.source,x+"g")}for(var b=v.pattern||v,w=r.next,A=s;w!==n.tail&&!(g&&A>=g.reach);A+=w.value.length,w=w.next){var E=w.value;if(n.length>e.length)return;if(!(E instanceof i)){var P,L=1;if(y){if(!(P=l(b,A,e,m))||P.index>=e.length)break;var S=P.index,O=P.index+P[0].length,j=A;for(j+=w.value.length;S>=j;)j+=(w=w.next).value.length;if(A=j-=w.value.length,w.value instanceof i)continue;for(var C=w;C!==n.tail&&(j<O||"string"==typeof C.value);C=C.next)L++,j+=C.value.length;L--,E=e.slice(A,j),P.index-=A}else if(!(P=l(b,0,E,m)))continue;S=P.index;var N=P[0],_=E.slice(0,S),M=E.slice(S+N.length),W=A+E.length;g&&W>g.reach&&(g.reach=W);var z=w.prev;if(_&&(z=u(n,z,_),A+=_.length),c(n,z,L),w=u(n,z,new i(f,p?a.tokenize(N,p):N,k,N)),M&&u(n,w,M),L>1){var I={cause:f+","+d,reach:W};o(e,n,t,w.prev,A,I),g&&I.reach>g.reach&&(g.reach=I.reach)}}}}}}function s(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function u(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function c(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;n.next=r,r.prev=n,e.length-=a}if(e.Prism=a,i.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var r="";return n.forEach((function(n){r+=e(n,t)})),r}var i={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},l=n.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(i.classes,l):i.classes.push(l)),a.hooks.run("wrap",i);var o="";for(var s in i.attributes)o+=" "+s+'="'+(i.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),r=t.language,i=t.code,l=t.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),l&&e.close()}),!1),a):a;var g=a.util.currentScript();function f(){a.manual||a.highlightAll()}if(g&&(a.filename=g.src,g.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var h=document.readyState;"loading"===h||"interactive"===h&&g&&g.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return a}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
    Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",(function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))})),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var t={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};t["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var n={};n[a]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,(function(){return a})),"i"),lookbehind:!0,greedy:!0,inside:t},Prism.languages.insertBefore("markup","cdata",n)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(a,e){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp("(^|[\"'\\s])(?:"+a+")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))","i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:Prism.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml;
    !function(s){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|"+e.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var t=s.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))}(Prism);
    Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};
    Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp("((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))"),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),Prism.languages.js=Prism.languages.javascript;
    Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}}),Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete Prism.languages.c.boolean;
    !function(e){function n(e,n){return e.replace(/<<(\d+)>>/g,(function(e,s){return"(?:"+n[+s]+")"}))}function s(e,s,a){return RegExp(n(e,s),a||"")}function a(e,n){for(var s=0;s<n;s++)e=e.replace(/<<self>>/g,(function(){return"(?:"+e+")"}));return e.replace(/<<self>>/g,"[^\\s\\S]")}var t="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",r="class enum interface record struct",i="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",o="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function l(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var d=l(r),p=RegExp(l(t+" "+r+" "+i+" "+o)),c=l(r+" "+i+" "+o),u=l(t+" "+r+" "+o),g=a("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>",2),b=a("\\((?:[^()]|<<self>>)*\\)",2),h="@?\\b[A-Za-z_]\\w*\\b",f=n("<<0>>(?:\\s*<<1>>)?",[h,g]),m=n("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*",[c,f]),k="\\[\\s*(?:,\\s*)*\\]",y=n("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?",[m,k]),w=n("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>",[g,b,k]),v=n("\\(<<0>>+(?:,<<0>>+)+\\)",[w]),x=n("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?",[v,m,k]),$={keyword:p,punctuation:/[<>()?,.:[\]]/},_="'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'",B='"(?:\\\\.|[^\\\\"\r\n])*"';e.languages.csharp=e.languages.extend("clike",{string:[{pattern:s("(^|[^$\\\\])<<0>>",['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),lookbehind:!0,greedy:!0},{pattern:s("(^|[^@$\\\\])<<0>>",[B]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:s("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)",[m]),lookbehind:!0,inside:$},{pattern:s("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)",[h,x]),lookbehind:!0,inside:$},{pattern:s("(\\busing\\s+)<<0>>(?=\\s*=)",[h]),lookbehind:!0},{pattern:s("(\\b<<0>>\\s+)<<1>>",[d,f]),lookbehind:!0,inside:$},{pattern:s("(\\bcatch\\s*\\(\\s*)<<0>>",[m]),lookbehind:!0,inside:$},{pattern:s("(\\bwhere\\s+)<<0>>",[h]),lookbehind:!0},{pattern:s("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>",[y]),lookbehind:!0,inside:$},{pattern:s("\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))",[x,u,h]),inside:$}],keyword:p,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:s("([(,]\\s*)<<0>>(?=\\s*:)",[h]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:s("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",[h]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:s("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))",[b]),lookbehind:!0,alias:"class-name",inside:$},"return-type":{pattern:s("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",[x,m]),inside:$,alias:"class-name"},"constructor-invocation":{pattern:s("(\\bnew\\s+)<<0>>(?=\\s*[[({])",[x]),lookbehind:!0,inside:$,alias:"class-name"},"generic-method":{pattern:s("<<0>>\\s*<<1>>(?=\\s*\\()",[h,g]),inside:{function:s("^<<0>>",[h]),generic:{pattern:RegExp(g),alias:"class-name",inside:$}}},"type-list":{pattern:s("\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))",[d,f,h,x,p.source,b,"\\bnew\\s*\\(\\s*\\)"]),lookbehind:!0,inside:{"record-arguments":{pattern:s("(^(?!new\\s*\\()<<0>>\\s*)<<1>>",[f,b]),lookbehind:!0,greedy:!0,inside:e.languages.csharp},keyword:p,"class-name":{pattern:RegExp(x),greedy:!0,inside:$},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var E=B+"|"+_,R=n("/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>",[E]),z=a(n("[^\"'/()]|<<0>>|\\(<<self>>*\\)",[R]),2),S="\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",j=n("<<0>>(?:\\s*\\(<<1>>*\\))?",[m,z]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:s("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",[S,j]),lookbehind:!0,greedy:!0,inside:{target:{pattern:s("^<<0>>(?=\\s*:)",[S]),alias:"keyword"},"attribute-arguments":{pattern:s("\\(<<0>>*\\)",[z]),inside:e.languages.csharp},"class-name":{pattern:RegExp(m),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var A=":[^}\r\n]+",F=a(n("[^\"'/()]|<<0>>|\\(<<self>>*\\)",[R]),2),P=n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[F,A]),U=a(n("[^\"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)",[E]),2),Z=n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[U,A]);function q(n,a){return{interpolation:{pattern:s("((?:^|[^{])(?:\\{\\{)*)<<0>>",[n]),lookbehind:!0,inside:{"format-string":{pattern:s("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)",[a,A]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:s('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',[P]),lookbehind:!0,greedy:!0,inside:q(P,F)},{pattern:s('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"',[Z]),lookbehind:!0,greedy:!0,inside:q(Z,U)}],char:{pattern:RegExp(_),greedy:!0}}),e.languages.dotnet=e.languages.cs=e.languages.csharp}(Prism);
    !function(e){var t=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n="\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(/<keyword>/g,(function(){return t.source}));e.languages.cpp=e.languages.extend("c",{"class-name":[{pattern:RegExp("(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(/<keyword>/g,(function(){return t.source}))),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:t,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),e.languages.insertBefore("cpp","string",{module:{pattern:RegExp('(\\b(?:import|module)\\s+)(?:"(?:\\\\(?:\r\n|[^])|[^"\\\\\r\n])*"|<[^<>\r\n]*>|'+"<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(/<mod-name>/g,(function(){return n}))+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),e.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e.languages.cpp}}}}),e.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),e.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend("cpp",{})}}),e.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp["base-clause"])}(Prism);
    !function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var e="line-numbers",n=/\n(?!$)/g,t=Prism.plugins.lineNumbers={getLine:function(n,t){if("PRE"===n.tagName&&n.classList.contains(e)){var i=n.querySelector(".line-numbers-rows");if(i){var r=parseInt(n.getAttribute("data-start"),10)||1,s=r+(i.children.length-1);t<r&&(t=r),t>s&&(t=s);var l=t-r;return i.children[l]}}},resize:function(e){r([e])},assumeViewportIndependence:!0},i=void 0;window.addEventListener("resize",(function(){t.assumeViewportIndependence&&i===window.innerWidth||(i=window.innerWidth,r(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers"))))})),Prism.hooks.add("complete",(function(t){if(t.code){var i=t.element,s=i.parentNode;if(s&&/pre/i.test(s.nodeName)&&!i.querySelector(".line-numbers-rows")&&Prism.util.isActive(i,e)){i.classList.remove(e),s.classList.add(e);var l,o=t.code.match(n),a=o?o.length+1:1,u=new Array(a+1).join("<span></span>");(l=document.createElement("span")).setAttribute("aria-hidden","true"),l.className="line-numbers-rows",l.innerHTML=u,s.hasAttribute("data-start")&&(s.style.counterReset="linenumber "+(parseInt(s.getAttribute("data-start"),10)-1)),t.element.appendChild(l),r([s]),Prism.hooks.run("line-numbers",t)}}})),Prism.hooks.add("line-numbers",(function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}))}function r(e){if(0!=(e=e.filter((function(e){var n,t=(n=e,n?window.getComputedStyle?getComputedStyle(n):n.currentStyle||null:null)["white-space"];return"pre-wrap"===t||"pre-line"===t}))).length){var t=e.map((function(e){var t=e.querySelector("code"),i=e.querySelector(".line-numbers-rows");if(t&&i){var r=e.querySelector(".line-numbers-sizer"),s=t.textContent.split(n);r||((r=document.createElement("span")).className="line-numbers-sizer",t.appendChild(r)),r.innerHTML="0",r.style.display="block";var l=r.getBoundingClientRect().height;return r.innerHTML="",{element:e,lines:s,lineHeights:[],oneLinerHeight:l,sizer:r}}})).filter(Boolean);t.forEach((function(e){var n=e.sizer,t=e.lines,i=e.lineHeights,r=e.oneLinerHeight;i[t.length-1]=void 0,t.forEach((function(e,t){if(e&&e.length>1){var s=n.appendChild(document.createElement("span"));s.style.display="block",s.textContent=e}else i[t]=r}))})),t.forEach((function(e){for(var n=e.sizer,t=e.lineHeights,i=0,r=0;r<t.length;r++)void 0===t[r]&&(t[r]=n.children[i++].getBoundingClientRect().height)})),t.forEach((function(e){var n=e.sizer,t=e.element.querySelector(".line-numbers-rows");n.style.display="none",n.innerHTML="",e.lineHeights.forEach((function(e,n){t.children[n].style.height=e+"px"}))}))}}}();
}

let bodyHtml = "";
let text = "";
let convertedText = "";
// let fileNumber = 1;
let descriptions = [null,{}];
class Description{
    constructor(){
        this.number = 1;
        this.date = 0;
        this.modified = "";
        this.title = "";
        this.tags = [];
        this.public = 0;
    }
}
let description = new Description();
let tagString = "";

let buffer = document.getElementById("buffer");

const changeDate = function(){
    description.date = document.getElementById("edit-date").value;
    preview.document.getElementById("date").innerText = description.date;
    autoBackupData();
}
const changeModified = function(){
    description.modified = document.getElementById("edit-modified").value;
    let modifiedString;
    if(description.modified){
        modifiedString = description.modified + "更新";
        preview.document.getElementById("modified").style.visibility="visible";
    }else{
        modifiedString = "";
        preview.document.getElementById("modified").style.visibility="hidden";
    }
    preview.document.getElementById("modified").innerText = modifiedString;
    autoBackupData();
}
const changeTitle = function(){
    description.title = document.getElementById("edit-title").value;
    preview.document.title = description.title;
    preview.document.getElementById("title").innerText = description.title;
    autoBackupData();
}
const changeTags = function(){
    tagString = document.getElementById("edit-tags").value;
    description.tags = tagString.split(",");
    let tagBlocks = "";
    description.tags.forEach(e=>tagBlocks = tagBlocks + '<a href="" class="tagblock link-gray">'
    +'<span class="material-icons">sell</span>'+e+"</a>")
    preview.document.getElementById("tags").innerHTML = tagBlocks;
    autoBackupData();
}
let gTimer;
const inputText = function(){
    if(gTimer){clearTimeout(gTimer);}
    gTimer = setTimeout(changeText, 1000);
}
const changeText = function(){
    text = document.getElementById("editor").value;
    autoBackupText();
    convertText();
    buffer.innerHTML = convertedText;
    prismJs();
    setTimeout(insertPreview, 100);
}
const pStart = '<p class="contents">';
const pEnd = '</p>';
// const n = '\n';
const convertText = function(){
    convertedText =  '<p class="contents">' +text+ '</p>';
    convertMultiLines(">", '', '<blockquote>', '</blockquote>');
    convertMultiLines("- ", '<li>', '<ul>', '</ul>');
    convertMultiLines("・", '<li>', '<ul>', '</ul>');
    convertMarks("```js", "```", '<pre class="line-numbers code"><code class="language-js">', '</code></pre>');
    convertMarks("```html", "```", '<pre class="line-numbers code"><code class="language-html">', '</code></pre>');
    convertMarks("```css", "```", '<pre class="line-numbers code"><code class="language-css">', '</code></pre>');
    convertMarks("```cs", "```", '<pre class="line-numbers code"><code class="language-cs">', '</code></pre>');
    convertLines("####", "\n", '<h4>', '</h4>');
    convertLines("###", "\n", '<h3 class="textCaption">', '</h3>');
}
const convertLines = function(letter, endLetter, startTag, endTag){
    let condition = -1;
    while(true){
        condition = convertedText.indexOf(letter);
        if(condition === -1){break;}
        const indexCount = condition;
        const indexCountEnd = convertedText.indexOf(endLetter,indexCount+letter.length);
        const h3Before = convertedText.slice(0,indexCount);
        const h3Core = convertedText.slice(indexCount+letter.length,indexCountEnd);
        const h3After = convertedText.slice(indexCountEnd+endLetter.length);
        convertedText = h3Before+pEnd+startTag+h3Core+endTag+pStart+h3After;
    };
}
const convertMultiLines = function(letter, startTag, beforeStartTag, afterEndTag){
    let textArray = convertedText.split("\n");
    textArray.forEach((e, index)=>{
        if(e.startsWith(letter)){
            let i = index + 1; //iは先頭以外の行用のカウンタindex
            textArray[index] = beforeStartTag + startTag + e.slice(letter.length);
            while(textArray[i].startsWith(letter)){
                textArray[i] = startTag + textArray[i].slice(letter.length);
                i++;
            }
            textArray[i - 1] = textArray[i - 1] + afterEndTag;
        }
    });
    const result = textArray.join("\n");
    convertedText = result;
}
const convertMarks = function(letter, endLetter, startTag, endTag){
    let condition = -1;
    while(true){
        condition = convertedText.indexOf(letter);
        if(condition === -1){break;}
        const indexCount = condition;
        const indexCountEnd = convertedText.indexOf(endLetter,indexCount+letter.length);
        const h3Before = convertedText.slice(0,indexCount);
        const h3Core = convertedText.slice(indexCount+letter.length+1,indexCountEnd);
        const h3After = convertedText.slice(indexCountEnd+endLetter.length);
        convertedText = h3Before+pEnd+startTag+h3Core+endTag+pStart+h3After;
    };
}
const convertCode = function(){
    // const letter = "```js";
    // const endLetter = "```";
    // const condition = convertedText.indexOf(cletter);
    // while(condition !== -1){
    //     const indexCount = condition;
    //     const indexCountEnd = convertedText.indexOf(endLetter,indexCount+5);
    //     const h3Before = convertedText.slice(0,indexCount);
    //     const h3Core = convertedText.slice(indexCount+5,indexCountEnd);
    //     const h3After = convertedText.slice(indexCountEnd+1);
    //     convertedText = h3Before+'</p><h3 class="textCaption">'+h3Core+'</h3><p class="contents">'+h3After;
    // };
}

const insertPreview = function(){
    buffer = document.getElementById("buffer");
    preview.document.getElementById("text").innerHTML = buffer.innerHTML;
}
const changeAll = function(){
    changeDate();
    changeModified();
    changeTitle();
    changeTags();
    changeText();
}

let changeCount = 0;
let data = {
    lastEditFile : 1,
    editorX : 20,
    editorY : 20,
    editorWidth : 600,
    editorHight : 760,
    previewX : 620,
    previewY : 20,
    previewWidth : 1024,
    previewHight : 760
}
try{
    const dataJson = fs.readFileSync("src/data/config.json");
    data = {...data, ...JSON.parse(dataJson)};
}catch(e){alert();("config.jsonが読み込めませんでした")}
window.moveTo(data.editorX, data.editorY);
window.resizeTo(data.editorWidth, data.editorHight);
preview.moveTo(data.previewX, data.previewY);
preview.resizeTo(data.previewWidth, data.previewHight);

const updateEditor = function(fileNum){
    description.number = fileNum;
    data.lastEditFile = fileNum;

    document.getElementById("edit-date").value = description.date;
    document.getElementById("edit-modified").value = description.modified;
    document.getElementById("edit-title").value = description.title;
    document.getElementById("edit-tags").value = description.tags.join(",");
    document.getElementById("editor").value = text;

    const dataJson = JSON.stringify(data); //data.lastEditFileが変更されたのでconfigを更新
    fs.writeFileSync("src/data/config.json", dataJson);
}
const load = function(fileNum){
    try{
        text = fs.readFileSync("src/"+String(fileNum).padStart(5,"0")+".html","utf-8");
        document.getElementById("editor").value = text;
        const descriptionsJson = fs.readFileSync("src/data/database.json");
        descriptions = JSON.parse(descriptionsJson);
        description = {...description, ...descriptions[fileNum]};
        updateEditor(fileNum);
        setTimeout(changeAll,1000);
        console.log(fileNum + "をロードしました",description);
    }catch(e){alert(String(fileNum).padStart(5,"0")+".html"+"が存在しません");console.error(e);return;}
}


const slowUpdate = function(){
    if(data.editorWidth !== window.outerWidth || data.editorHight !== window.outerHeight
        || data.editorX !== window.screenX || data.editorY !== window.screenY
        || data.previewWidth !== preview.outerWidth || data.previewHight !== preview.outerHeight
        || data.previewX !== preview.screenX || data.previewY !== preview.screenY){
        data.editorWidth = window.outerWidth;
        data.editorHight = window.outerHeight;
        data.editorX = window.screenX;
        data.editorY = window.screenY;
        data.previewWidth = preview.outerWidth;
        data.previewHight = preview.outerHeight;
        data.previewX = preview.screenX;
        data.previewY = preview.screenY;
        const dataJson = JSON.stringify(data);
        fs.writeFileSync("src/data/config.json", dataJson);
    }
}
const update = setInterval(slowUpdate, 1000);
const loadBackupData = function(){
    const descriptionsJson = fs.readFileSync("src/data/database.json");
    descriptions = JSON.parse(descriptionsJson);
    const lastDescriptionJson = fs.readFileSync("src/data/lastdata.json","utf-8");
    const lastDescription = JSON.parse(lastDescriptionJson);
    description = {...description, ...lastDescription};
    text = fs.readFileSync("src/data/lasttext.txt","utf-8");
    updateEditor(description.number);
    setTimeout(changeAll,1000);
}
loadBackupData(); //前回編集していたデータを開く
// load(description.number);



const reloadThis = function(){ //リロード
    chrome.runtime.reload();
}
const buildAll = function(){ //全ビルド
    const changeDate = function(){
    description.date = document.getElementById("edit-date").value;
    preview.document.getElementById("date").innerText = description.date;
    autoBackupData();
}
const changeModified = function(){
    description.modified = document.getElementById("edit-modified").value;
    let modifiedString;
    if(description.modified){
        modifiedString = description.modified + "更新";
        preview.document.getElementById("modified").style.visibility="visible";
    }else{
        modifiedString = "";
        preview.document.getElementById("modified").style.visibility="hidden";
    }
    preview.document.getElementById("modified").innerText = modifiedString;
    autoBackupData();
}
const changeTitle = function(){
    description.title = document.getElementById("edit-title").value;
    preview.document.title = description.title;
    preview.document.getElementById("title").innerText = description.title;
    autoBackupData();
}
const changeTags = function(){
    tagString = document.getElementById("edit-tags").value;
    description.tags = tagString.split(",");
    let tagBlocks = "";
    description.tags.forEach(e=>tagBlocks = tagBlocks + '<a href="" class="tagblock link-gray">'
    +'<span class="material-icons">sell</span>'+e+"</a>")
    preview.document.getElementById("tags").innerHTML = tagBlocks;
    autoBackupData();
}
let gTimer;
const inputText = function(){
    if(gTimer){clearTimeout(gTimer);}
    gTimer = setTimeout(changeText, 1000);
}
const changeText = function(){
    text = document.getElementById("editor").value;
    autoBackupText();
    convertText();
    buffer.innerHTML = convertedText;
    prismJs();
    setTimeout(insertPreview, 100);
}

}
const build = function(number){
    load(number);
    setTimeout(buildThis,12);
}
const buildThis = function(){ //ビルド
    let resultHtml = '<!DOCTYPE html>\n' + preview.document.documentElement.outerHTML;
    resultHtml = resultHtml.replace('</title>','</title>\n    <base href="nwjs/src/">');
    resultHtml = resultHtml.replace('<!-- <script src="js/blog.js" defer></script> -->','<script src="js/blog.js" defer></script>');
    
    let allTags = createAllTags();
    let allTagsHtml = createAllTagsHtml(allTags);
    resultHtml = resultHtml.replace('<option>全てのタグ</option>', '<option>全てのタグ</option>\n' + allTagsHtml);
    resultHtml = resultHtml.replace('<a id="twittershare" href=""></a>', 
    `<a id="twittershare" href="https://twitter.com/share?url=https://napiiey.github.io/blog/00029.html
&text=${description.title}"></a>`);
    let descriptionText = preview.document.getElementById("text").innerText;
    descriptionText = descriptionText.slice(0,200);
    descriptionText = descriptionText.replace(/\s+/g,"");
    descriptionText = descriptionText.slice(0,99) + "…";
    resultHtml = resultHtml.replace('<meta property="og:title" content="">',
    `    <meta property="og:title" content="${description.title}">
    <meta property="og:description" content="${descriptionText}">
    <meta property="og:url" content="https://napiiey.github.io/blog/index.html">
    <meta property="og:image" content="https://napiiey.github.io/blog/nwjs/src/image/napiiey_ogimage.jpg">
    <meta property="og:type" content="blog">
    <meta property="og:site_name" content="なぴぃブログでいい">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@napiiey">
    <meta property="twitter:title" content="${description.title}"></meta>
    <meta property="twitter:image" content="https://napiiey.github.io/blog/nwjs/src/image/napiiey_ogimage.jpg"></meta>`);
    const relatedPages = makeRelatedPages();
    resultHtml = resultHtml.replace('<section id="articles">', '<section id="articles">\n' + relatedPages);
    fs.writeFileSync("../"+String(description.number).padStart(5,"0")+".html", resultHtml);

    description.public = 1;
    descriptions[description.number].public = 1;
    saveDescriptions();
    console.log(description.number + "のビルドが完了しました");

    buildTopPage();
}
const makeRelatedPages = function(){
    let articleHeads = "";
    const thisDate = new Date(description.date);
    let  database = descriptions.slice(0,descriptions.length);
    database.splice(description.number,1); //現在のページを除外
    database = database.filter(e=>e && e.public); //非公開ページを除外
    database.forEach((e,index)=>{
        let matchTagCount = 0;
        description.tags.forEach(e2=>{
            if(e.tags.includes(e2)){matchTagCount++};
        });
        const date = new Date(e.date);
        let relevance = (date - thisDate) / 86400000;
        if(Math.sign(relevance) === -1){
            relevance = (relevance * -1) +0.5;
        }
        relevance = (matchTagCount + 1) * 100000 - relevance;
        database[index].relevance = relevance;
    });
    database.sort((a,b)=>{
        return b.relevance - a.relevance;
    });

    let relatedPagesCount = 5; //関連記事表示数
    for(let i = 0; i < relatedPagesCount; i++){
        if(!database[i]){break;}
        const e = database[i];
        let tagBlocks = "";
        e.tags.forEach(e2=>{
            tagBlocks = tagBlocks + `<a href="../../index.html?tag=${e2}" class="tagblock link-gray">
            <span class="material-icons">sell</span>${e2}</a>`
        });
        articleHeads = articleHeads + `
        <a href="../../${String(e.number).padStart(5,"0")}.html">
        <div class="i-articlehead">
        <span class="i-date">${e.date}</span>
        <span class="i-modified">${e.modified}</span>
        <div class="i-title">${e.title}</div>
        <div class="i-tags">${tagBlocks}</div>
        </div>
        </a>\n`;
    }
    return articleHeads;
}
const buildTopPage = function(){
    let result = fs.readFileSync("src/index_template.html", "utf-8");
    let articleHeads = "";
    const database = descriptions.filter(e=>e && e.public);
    let allTags = createAllTags();
    let allTagsHtml = createAllTagsHtml(allTags);
    const databaseString = `const database = ${objectToJsString(database)};
    const allTags = ${objectToJsString(allTags)};`;
    fs.writeFileSync("src/js/database.js", databaseString);

    database.some((e, index)=>{
        if(index >= 20){
            // 現在は未実装
            // 1, 2, 3, といった20番目以上を表示するリンクを追加する処理を書く
            // return true;
        }
        let tagBlocks = "";
        e.tags.forEach(e2=>{
            tagBlocks = tagBlocks + `<a href="../../index.html?tag=${e2}" class="tagblock link-gray">
            <span class="material-icons">sell</span>${e2}</a>`
        });
        articleHeads = `
        <a href="../../${String(e.number).padStart(5,"0")}.html">
        <div class="i-articlehead">
        <span class="i-date">${e.date}</span>
        <span class="i-modified">${e.modified}</span>
        <div class="i-title">${e.title}</div>
        <div class="i-tags">${tagBlocks}</div>
        </div>
        </a>\n` + articleHeads;
        // console.log(articleHeads);
    });
    
    result = result.replace('<!-- <base href="nwjs/src/"> -->', '<base href="nwjs/src/">');
    result = result.replace('<option>全てのタグ</option>', '<option>全てのタグ</option>\n' + allTagsHtml);
    result = result.replace('<section id="articles">', '<section id="articles">\n' + articleHeads);
    fs.writeFileSync("../index.html", result);
}
const createAllTags = function(){
    let allTags = [];
    descriptions.forEach(e=>{
        if(!e){return;}
        allTags = allTags.concat(e.tags);
    });
    allTags = Array.from(new Set(allTags));
    return allTags;
}
const createAllTagsHtml = function(allTags){
    let allTagsHtml = "";
    allTags.forEach(e=>{
        allTagsHtml =  `${allTagsHtml}<option>${e}</option>\n`;
    });
    return allTagsHtml;
}
const objectToJsString = function(obj){
    let result = JSON.stringify(obj);
    result = result.replaceAll(/"(\w+)":/g,'$1:');
    return result; 
}


const createNew = function(){ //新規作成
    const continueConfirm = confirm("変更を破棄して新しい記事を作成します。よろしいですか？");
    if(!continueConfirm){return;}
    description = new Description();
    description.number = descriptions.length;
    description.date = new Date().toLocaleDateString();
    descriptions.push(description);
    text = "";
    updateEditor(description.number);
    setTimeout(changeAll,1000);
}
const autoBackupData = function(){
    const dataJson = JSON.stringify(description);
    fs.writeFileSync("src/data/lastdata.json", dataJson);
}
const autoBackupText = function(){
    fs.writeFileSync("src/data/lasttext.txt", String(text));
}
const save = function(fileNum){
    changeAll();
    descriptions[fileNum] = description;
    saveDescriptions();
    fs.writeFileSync("src/"+String(fileNum).padStart(5,"0")+".html", text);
}
const saveDescriptions = function(){
    const descriptionJson = JSON.stringify(descriptions);
    fs.writeFileSync("src/data/database.json", descriptionJson);
}
const saveThis = function(){ //セーブ
    save(description.number);
}







//FileList

const openFileList = function(){ //ファイル
    document.getElementById("filelist-cancel").style.display="block";
    document.getElementById("filelist-bg").style.display="block";
    let fileBlock = "";
    let result = "";
    let classNum = 0;
    descriptions.forEach((e,index)=>{
        if(!e){return;}
        classNum++;
        let publicColor = "";
        if(e.public){
            publicColor = ' publiccolor1';
        }else{
            publicColor = ' publiccolor2';
        }
        result =  `
<div class="filedata">
<div class="filenumber">${String(index)}</div>
<input type="text" class="filetitle" value="${e.title}" onchange="changeListTitle(${index},${classNum})">
<input type="text" class="filetags" value="${e.tags}" onchange="changeListTags(${index},${classNum})">
<input type="text" class="filedate" value="${e.date}" onchange="changeListDate(${index},${classNum})">
<input type="text" class="filemodified" value="${e.modified}" onchange="changeListModified(${index},${classNum})">
<div class="filecommands">
<div type="button" class="editcommand" onclick="editCommand(${index})"><span class="material-icons">edit</span></div>
<div type="button" class="publiccommand${publicColor}" onclick="publicCommand(${index})"><span class="material-icons">public_off</span></div>
<div type="button" class="deletecommand" onclick="deleteCommand(${index})"><span class="material-icons">clear</span></div>
</div>
</div>` + result;
    });
    document.getElementById("filelist").innerHTML = result;
}
const changeListTitle = function(number, classNum){ //ファイルリスト>>タイトル
    const elements = document.getElementsByClassName("filetitle");
    const result = elements[elements.length - classNum].value;
    descriptions[number].title = result;
    saveDescriptions();
}
const changeListTags = function(number, classNum){ //ファイルリスト>>タグ
    const elements = document.getElementsByClassName("filetags");
    const result = elements[elements.length - classNum].value;
    descriptions[number].tags = result;
    saveDescriptions();
}
const changeListDate = function(number, classNum){ //ファイルリスト>>date
    const elements = document.getElementsByClassName("filedate");
    const result = elements[elements.length - classNum].value;
    descriptions[number].date = result;
    saveDescriptions();
}
const changeListModified = function(number, classNum){ //ファイルリスト>>modified
    const elements = document.getElementsByClassName("filemodified");
    const result = elements[elements.length - classNum].value;
    descriptions[number].modified = result;
    saveDescriptions();
}
const editCommand = function(number){ //ファイルリスト>>編集
    load(number);
    cancelFileList();
}
const publicCommand = function(number){ //ファイルリスト>>公開
    if(descriptions[number].public){
        descriptions[number].public = 0;
        try {
            fs.unlinkSync("../"+String(number).padStart(5,"0")+".html");
        } catch (e){}
    }else{
        build(number);
        descriptions[number].public = 1;
    }
    saveDescriptions();
    openFileList();
}
const deleteCommand = function(number){ //ファイルリスト>>削除
    const continueConfirm = confirm("データを完全に削除します。よろしいですか？");
    if(!continueConfirm){return}
    descriptions[number] = null;
    saveDescriptions();
    try {
        fs.unlinkSync("src/"+String(number).padStart(5,"0")+".html");
        fs.unlinkSync("../"+String(number).padStart(5,"0")+".html");
    } catch (e){}
    openFileList();
}

const cancelFileList = function(){
    document.getElementById("filelist-cancel").style.display="none";
    document.getElementById("filelist-bg").style.display="none";
}




//コンテキストメニュー
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
}, true);
document.addEventListener('mousedown', mouseDown);
function mouseDown(event) {
    if (typeof event=== 'object' && event.button === 2) {
        clickX = event.clientX;
        clickY = event.clientY;
        showMenu();
    }
}
document.addEventListener('mouseup', mouseUp);
function mouseUp(event) {
    if (typeof event === 'object' && event.button === 2) {
        setTimeout(closeMenu, 20);
    }
}
document.addEventListener("click", function(event){
    
  });
const showMenu = function(){
    const menu = document.getElementById("contextmenu");
    const contextradius = 0; //cssの変数と合わせる
    menu.style.left = (clickX - contextradius) + "px";
    menu.style.top = (clickY - contextradius) + "px";
    menu.style.visibility = "visible";
}
const closeMenu = function(){
    const menu = document.getElementById("contextmenu");
    menu.style.visibility = "hidden";
}


const getStartOfLine = function(e){
    let startPos = text.lastIndexOf("\n", e.selectionStart) + 1;
    if(e.selectionStart - (startPos - 1) === 0){
        startPos = text.lastIndexOf("\n", e.selectionStart - 1) + 1;
    }
    return startPos;
}
const getEndOfLine = function(e){
    let startPos = text.lastIndexOf("\n", e.selectionEnd) + 1;
    let endPos = 0;
    if(e.selectionStart - (startPos - 1) === 0){
        endPos = text.indexOf("\n", e.selectionEnd - 1) + 1;
    }else{
        endPos = text.indexOf("\n", e.selectionEnd) + 1;
    }
    return endPos;
}
const pushH = function(){
    const e = document.getElementById("editor");
    let startPos = getStartOfLine(e);
    text = text.slice(0, startPos)
    + "###"
    + text.slice(startPos);
    e.value = text;
    changeText();
}
const pushImage = function(){
    // const e = document.getElementById("editor");
    // text = text.slice(0, e.selectionStart)
    // + "**"
    // + text.slice(e.selectionStart, e.selectionEnd)
    // + "**"
    // + text.slice(e.selectionEnd);
    // e.value = text;
    // changeText();
}
const pushLine = function(){
    // const e = document.getElementById("editor");
    // text = text.slice(0, e.selectionStart)
    // + "**"
    // + text.slice(e.selectionStart, e.selectionEnd)
    // + "**"
    // + text.slice(e.selectionEnd);
    // e.value = text;
    // changeText();
}
const pushCode = function(){
    const e = document.getElementById("editor");
    let startPos = getStartOfLine(e);
    text = text.slice(0, startPos)
    + "```js\n"
    + text.slice(startPos, e.selectionEnd)
    + "\n```"
    + text.slice(e.selectionEnd);
    e.value = text;
    changeText();
    e.setSelectionRange(startPos + 3, startPos + 5);
}
const pushBold = function(){
    const e = document.getElementById("editor");
    text = text.slice(0, e.selectionStart)
    + "**"
    + text.slice(e.selectionStart, e.selectionEnd)
    + "**"
    + text.slice(e.selectionEnd);
    e.value = text;
    changeText();
}