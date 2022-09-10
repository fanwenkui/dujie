!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return n={686:function(t,e,n){"use strict";n.d(e,{default:function(){return b}});var e=n(279),i=n.n(e),e=n(370),u=n.n(e),e=n(817),r=n.n(e);function c(t){try{return document.execCommand(t)}catch(t){return}}var a=function(t){t=r()(t);return c("cut"),t};function o(t,e){var n,o,t=(n=t,o="rtl"===document.documentElement.getAttribute("dir"),(t=document.createElement("textarea")).style.fontSize="12pt",t.style.border="0",t.style.padding="0",t.style.margin="0",t.style.position="absolute",t.style[o?"right":"left"]="-9999px",o=window.pageYOffset||document.documentElement.scrollTop,t.style.top="".concat(o,"px"),t.setAttribute("readonly",""),t.value=n,t);return e.container.appendChild(t),e=r()(t),c("copy"),t.remove(),e}var f=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"==typeof t?n=o(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==t?void 0:t.type)?n=o(t.value,e):(n=r()(t),c("copy")),n};function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var s=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,o=t.container,e=t.target,t=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==e){if(!e||"object"!==l(e)||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return t?f(t,{container:o}):e?"cut"===n?a(e):f(e,{container:o}):void 0};function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=v(n);return t=o?(t=v(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==p(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){t="data-clipboard-".concat(t);if(e.hasAttribute(t))return e.getAttribute(t)}var b=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(r,i());var t,e,n,o=h(r);function r(t,e){var n;return function(t){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this),(n=o.call(this)).resolveOptions(e),n.listenClick(t),n}return t=r,n=[{key:"copy",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body};return f(t,e)}},{key:"cut",value:function(t){return a(t)}},{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof t?[t]:t,e=!!document.queryCommandSupported;return t.forEach(function(t){e=e&&!!document.queryCommandSupported(t)}),e}}],(e=[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===p(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=u()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",t=s({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(t?"success":"error",{action:n,text:t,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return m("action",t)}},{key:"defaultTarget",value:function(t){t=m("target",t);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(t){return m("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&d(t.prototype,e),n&&d(t,n),r}()},828:function(t){var e;"undefined"==typeof Element||Element.prototype.matches||((e=Element.prototype).matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector),t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,n){var u=n(828);function i(t,e,n,o,r){var i=function(e,n,t,o){return function(t){t.delegateTarget=u(t.target,n),t.delegateTarget&&o.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}},879:function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var f=n(879),l=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!f.string(e))throw new TypeError("Second argument must be a String");if(!f.fn(n))throw new TypeError("Third argument must be a Function");if(f.node(t))return c=e,a=n,(u=t).addEventListener(c,a),{destroy:function(){u.removeEventListener(c,a)}};if(f.nodeList(t))return o=t,r=e,i=n,Array.prototype.forEach.call(o,function(t){t.addEventListener(r,i)}),{destroy:function(){Array.prototype.forEach.call(o,function(t){t.removeEventListener(r,i)})}};if(f.string(t))return t=t,e=e,n=n,l(document.body,t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,r,i,u,c,a}},817:function(t){t.exports=function(t){var e,n="SELECT"===t.nodeName?(t.focus(),t.value):"INPUT"===t.nodeName||"TEXTAREA"===t.nodeName?((e=t.hasAttribute("readonly"))||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),e||t.removeAttribute("readonly"),t.value):(t.hasAttribute("contenteditable")&&t.focus(),n=window.getSelection(),(e=document.createRange()).selectNodeContents(t),n.removeAllRanges(),n.addRange(e),n.toString());return n}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,u=o.length;i<u;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},r={},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o(686).default;function o(t){if(r[t])return r[t].exports;var e=r[t]={exports:{}};return n[t](e,e.exports,o),e.exports}var n,r});

var clipboard = new ClipboardJS('#copy');

const {createApp} = Vue

createApp({
    data() {
        return {
            version: '1.5.0',
            pro: {
                xiuWei: 0,
                tiZhi: 0,
                wuKang: 0,
                faKang: 0,
                wu: 0,
                jin: 0,
                mu: 0,
                shui: 0,
                huo: 0,
                tu: 0,
                lei: 0,
                du: 0,
                wuJian: 0,
                faJian: 0,
                zuiZhong: 0
            },
            importStr:"",
            bossData:[],
            dataVersion:1,
            defaultData:[{"data":[{"te":400,"fa":1300,"type":"lei","wu":1300}],"name":"凡人升练气","index":10},{"data":[{"te":1000,"fa":0,"type":"lei","wu":4200},{"te":1100,"fa":4300,"type":"shui","wu":0}],"name":"练气升筑基","index":20},{"data":[{"te":2000,"fa":0,"type":"lei","wu":11000},{"te":2500,"fa":12000,"type":"tu","wu":0}],"name":"筑基升金丹","index":30},{"data":[{"te":4800,"fa":0,"type":"lei","wu":20200},{"te":5500,"fa":22000,"type":"mu","wu":0},{"te":6000,"fa":23000,"type":"shui","wu":23000}],"name":"金丹升元婴","index":40},{"data":[{"te":9500,"fa":0,"type":"lei","wu":46000},{"te":10500,"fa":47000,"type":"jin","wu":0},{"te":11000,"fa":43000,"type":"huo","wu":45000}],"name":"元婴升化神","index":50},{"data":[{"te":22000,"fa":67000,"type":"lei","wu":67000},{"te":23000,"fa":75000,"type":"du","wu":0},{"te":25000,"fa":69000,"type":"tu","wu":69000}],"name":"化神升寂灭","index":60},{"data":[{"te":27000,"fa":0,"type":"tu","wu":120000},{"te":30500,"fa":105000,"type":"shui","wu":105000},{"te":30000,"fa":125000,"type":"huo","wu":0},{"te":32000,"fa":110000,"type":"lei","wu":110000}],"name":"寂灭升大乘","index":70},{"data":[{"te":40000,"fa":225000,"type":"jin","wu":195000},{"te":49500,"fa":185000,"type":"mu","wu":210000},{"te":50000,"fa":180000,"type":"shui","wu":220000},{"te":58500,"fa":210000,"type":"huo","wu":175000},{"te":51000,"fa":155000,"type":"tu","wu":250000},{"te":51500,"fa":255000,"type":"du","wu":160000},{"te":54000,"fa":230000,"type":"lei","wu":230000}],"name":"大乘升飞升","index":80},{"data":[{"te":0,"fa":2500,"type":"wu","wu":2500}],"name":"21修士伏击","index":90},{"data":[{"te":500,"fa":3800,"type":"huo","wu":3300}],"name":"24宗门大战","index":100},{"data":[{"te":500,"fa":4500,"type":"tu","wu":4000}],"name":"28试炼谷实战","index":110},{"data":[{"te":800,"fa":0,"type":"shui","wu":6500}],"name":"35为民除妖","index":120},{"data":[{"te":0,"fa":11000,"type":"wu","wu":9000}],"name":"41散修土匪","index":130},{"data":[{"te":2000,"fa":0,"type":"du","wu":12000}],"name":"45三打白骨精1","index":140},{"data":[{"te":2500,"fa":13000,"type":"jin","wu":0}],"name":"46三打白骨精2","index":150},{"data":[{"te":0,"fa":14000,"type":"wu","wu":13000}],"name":"48英雄救美","index":160},{"data":[{"te":2400,"fa":14000,"type":"huo","wu":0}],"name":"51自由天赋","index":170},{"data":[{"te":2400,"fa":0,"type":"lei","wu":14000}],"name":"51统治天赋","index":180},{"data":[{"te":1500,"fa":15000,"type":"du","wu":14000}],"name":"53进药仙谷","index":190},{"data":[{"te":2500,"fa":16000,"type":"mu","wu":0}],"name":"55魔教袭击","index":200},{"data":[{"te":2000,"fa":0,"type":"shui","wu":18000}],"name":"57突破邪修","index":210},{"data":[{"te":2700,"fa":20000,"type":"mu","wu":18000}],"name":"70采灵草","index":220},{"data":[{"te":3000,"fa":0,"type":"du","wu":21000}],"name":"71沙漠毒蝎","index":230},{"data":[{"te":3000,"fa":21000,"type":"shui","wu":0}],"name":"71雪山雪狼","index":240},{"data":[{"te":3200,"fa":19000,"type":"tu","wu":20000}],"name":"75占领仓库","index":250},{"data":[{"te":7500,"fa":35000,"type":"huo","wu":43000}],"name":"76水月镜(困难)","index":260},{"data":[{"te":3500,"fa":21000,"type":"shui","wu":21000}],"name":"79千年玄龟","index":270},{"data":[{"te":4000,"fa":22000,"type":"huo","wu":22000}],"name":"80魔教总攻","index":280},{"data":[{"te":5400,"fa":28000,"type":"jin","wu":29000}],"name":"85地牢救人","index":290},{"data":[{"te":5700,"fa":27000,"type":"lei","wu":27000}],"name":"87和秀秀合作","index":300},{"data":[{"te":5700,"fa":28000,"type":"du","wu":26000}],"name":"87和黑衣人合作","index":310},{"data":[{"te":5700,"fa":30000,"type":"mu","wu":30000}],"name":"89打三头龙","index":320},{"data":[{"te":16000,"fa":56000,"type":"lei","wu":68000}],"name":"89水月镜(困难)","index":330},{"data":[{"te":7500,"fa":34000,"type":"du","wu":32000}],"name":"98枯木老祖","index":340},{"data":[{"te":17000,"fa":71000,"type":"lei","wu":55000}],"name":"99灵璇儿(困难)长老","index":350},{"data":[{"te":0,"fa":0,"type":"wu","wu":40000}],"name":"105青头鸟","index":360},{"data":[{"te":8000,"fa":33000,"type":"shui","wu":35000}],"name":"108灵阳少女","index":370},{"data":[{"te":9200,"fa":42000,"type":"tu","wu":0}],"name":"111星河领主","index":380},{"data":[{"te":11500,"fa":39000,"type":"shui","wu":39000}],"name":"114突袭雪猿","index":390},{"data":[{"te":12500,"fa":41000,"type":"lei","wu":41000}],"name":"118娜迦海妖","index":400},{"data":[{"te":20000,"fa":84000,"type":"huo","wu":74000}],"name":"122灵璇儿(困难)人鸟族","index":410},{"data":[{"te":12000,"fa":41000,"type":"mu","wu":44000}],"name":"122战人鸟族","index":420},{"data":[{"te":16000,"fa":51000,"type":"shui","wu":50000}],"name":"130娜迦海妖","index":430},{"data":[{"te":23000,"fa":129000,"type":"du","wu":0}],"name":"137灵璇儿(困难)人鸟族","index":440},{"data":[{"te":17000,"fa":65000,"type":"du","wu":0}],"name":"137人鸟堵截","index":450},{"data":[{"te":18600,"fa":67000,"type":"huo","wu":63000}],"name":"141双头人鸟","index":460},{"data":[{"te":0,"fa":110000,"type":"wu","wu":0}],"name":"142老王(蓝色)","index":470},{"data":[{"te":0,"fa":0,"type":"wu","wu":110000}],"name":"142老王(黄色)","index":480},{"data":[{"te":0,"fa":310000,"type":"wu","wu":90000}],"name":"142老王(极难蓝色)","index":490},{"data":[{"te":0,"fa":90000,"type":"wu","wu":310000}],"name":"142老王(极难黄色)","index":500},{"data":[{"te":19000,"fa":69000,"type":"jin","wu":71000}],"name":"143利爪长老","index":510},{"data":[{"te":22000,"fa":73000,"type":"mu","wu":73000}],"name":"146首领夫妇","index":520},{"data":[{"te":0,"fa":185000,"type":"wu","wu":185000}],"name":"151混元帝君(困难)","index":530},{"data":[{"te":29000,"fa":108000,"type":"lei","wu":0}],"name":"152道殿搜寻","index":540},{"data":[{"te":270000,"fa":220000,"type":"du","wu":90000}],"name":"152剑式","index":550},{"data":[{"te":40000,"fa":135000,"type":"mu","wu":135000}],"name":"155暖暖(困难)","index":560},{"data":[{"te":31000,"fa":0,"type":"du","wu":122000}],"name":"157双头鸭群","index":570},{"data":[{"te":34000,"fa":94000,"type":"shui","wu":93000}],"name":"161剑修灵剑","index":580},{"data":[{"te":48000,"fa":70000,"type":"huo","wu":110000}],"name":"164选择红色","index":590},{"data":[{"te":48000,"fa":110000,"type":"mu","wu":70000}],"name":"164选择绿色","index":600},{"data":[{"te":48000,"fa":90000,"type":"tu","wu":90000}],"name":"164选择黄色","index":610},{"data":[{"te":35000,"fa":111000,"type":"shui","wu":111000}],"name":"167暖暖(困难)五个剑修","index":620},{"data":[{"te":45000,"fa":235000,"type":"du","wu":0}],"name":"167暖暖(困难)医修","index":630},{"data":[{"te":45000,"fa":180000,"type":"jin","wu":180000}],"name":"167暖暖(困难)绝修","index":640},{"data":[{"te":35000,"fa":111000,"type":"shui","wu":111000}],"name":"167五个剑修","index":650},{"data":[{"te":36000,"fa":150000,"type":"du","wu":0}],"name":"167医修","index":660},{"data":[{"te":37000,"fa":120000,"type":"jin","wu":120000}],"name":"167绝修","index":670},{"data":[{"te":0,"fa":0,"type":"wu","wu":430000}],"name":"171守陵人小弟","index":680},{"data":[{"te":80000,"fa":330000,"type":"shui","wu":205000}],"name":"171守陵人大哥","index":690},{"data":[{"te":38000,"fa":130000,"type":"mu","wu":130000}],"name":"172妖兽兽潮","index":700},{"data":[{"te":39000,"fa":160000,"type":"jin","wu":0}],"name":"177灵璇儿","index":710},{"data":[{"te":45000,"fa":220000,"type":"du","wu":220000}],"name":"177暖暖(困难)幻毒阵医修","index":720},{"data":[{"te":45000,"fa":250000,"type":"jin","wu":0}],"name":"177灵璇儿(困难)七重大阵","index":730},{"data":[{"te":0,"fa":480000,"type":"wu","wu":380000}],"name":"177剑式","index":740},{"data":[{"te":40000,"fa":160000,"type":"shui","wu":160000}],"name":"179劫云兽潮","index":750},{"data":[{"te":0,"fa":0,"type":"wu","wu":205000}],"name":"182开阳殿","index":760},{"data":[{"te":43000,"fa":180000,"type":"lei","wu":165000}],"name":"183瑶光殿星光虎","index":770},{"data":[{"te":100000,"fa":315000,"type":"lei","wu":405000}],"name":"183瑶光殿星光虎（困难）","index":780},{"data":[{"te":55000,"fa":375000,"type":"mu","wu":0}],"name":"184邪眼(困难)","index":790},{"data":[{"te":45000,"fa":185000,"type":"mu","wu":165000}],"name":"184乘胜追击邪眼","index":800},{"data":[{"te":51000,"fa":230000,"type":"du","wu":270000}],"name":"186暖暖(困难)落日门剑圣","index":810},{"data":[{"te":55000,"fa":255000,"type":"shui","wu":280000}],"name":"186灵璇儿(困难)落日门剑圣","index":820},{"data":[{"te":46000,"fa":170000,"type":"shui","wu":190000}],"name":"186剑圣金光子","index":830},{"data":[{"te":48000,"fa":205000,"type":"shui","wu":175000}],"name":"190自由天赋童姥","index":840},{"data":[{"te":49000,"fa":180000,"type":"tu","wu":205000}],"name":"190统治天赋雪猿","index":850},{"data":[{"te":79000,"fa":415000,"type":"shui","wu":255000}],"name":"190自由天赋童姥(困难)","index":860},{"data":[{"te":78000,"fa":230000,"type":"tu","wu":435000}],"name":"190统治天赋雪猿(困难)","index":870},{"data":[{"te":60000,"fa":340000,"type":"du","wu":260000}],"name":"194暖暖(困难)食人花","index":880},{"data":[{"te":50000,"fa":240000,"type":"du","wu":0}],"name":"194食人花","index":890},{"data":[{"te":70000,"fa":0,"type":"lei","wu":475000}],"name":"195剑圣二十三(困难)","index":900},{"data":[{"te":280000,"fa":0,"type":"lei","wu":720000}],"name":"195剑圣二十三(极难)","index":910},{"data":[{"te":115000,"fa":645000,"type":"huo","wu":455000}],"name":"196邪神","index":920},{"data":[{"te":0,"fa":0,"type":"wu","wu":275000}],"name":"197三角形","index":930},{"data":[{"te":0,"fa":275000,"type":"wu","wu":0}],"name":"197圆形","index":940},{"data":[{"te":70000,"fa":175000,"type":"huo","wu":195000}],"name":"197正方形","index":950},{"data":[{"te":0,"fa":0,"type":"wu","wu":455000}],"name":"197暖暖(困难)正方形","index":960},{"data":[{"te":0,"fa":455000,"type":"wu","wu":0}],"name":"197暖暖(困难)圆形","index":970},{"data":[{"te":120000,"fa":335000,"type":"huo","wu":335000}],"name":"197暖暖(困难)正方形","index":980},{"data":[{"te":53000,"fa":255000,"type":"huo","wu":0}],"name":"197菩提老祖","index":990},{"data":[{"te":100000,"fa":460000,"type":"huo","wu":0}],"name":"197菩提老祖 暖暖(困难)","index":1000},{"data":[{"te":0,"fa":620000,"type":"wu","wu":620000}],"name":"198如来神掌","index":1010},{"data":[{"te":140000,"fa":720000,"type":"du","wu":0}],"name":"198认真一拳","index":1020},{"data":[{"te":140000,"fa":0,"type":"du","wu":720000}],"name":"198七星落","index":1030},{"data":[{"te":90000,"fa":0,"type":"huo","wu":300000},{"te":90000,"fa":300000,"type":"shui","wu":0},{"te":100000,"fa":280000,"type":"tu","wu":280000}],"name":"199剑意","index":1040},{"data":[{"te":200000,"fa":0,"type":"huo","wu":605000},{"te":200000,"fa":605000,"type":"shui","wu":0},{"te":200000,"fa":580000,"type":"tu","wu":555000}],"name":"199剑意(极难)","index":1050},{"data":[{"te":110000,"fa":540000,"type":"tu","wu":540000}],"name":"200丹王小弟","index":1060},{"data":[{"te":120000,"fa":460000,"type":"jin","wu":660000}],"name":"200丹王","index":1070},{"data":[{"te":10000,"fa":400000,"type":"lei","wu":360000}],"name":"201带电九头龙(璇儿)(困难)","index":1080},{"data":[{"te":85000,"fa":385000,"type":"mu","wu":425000}],"name":"201万剑台剑侍(璇儿)(困难)","index":1090},{"data":[{"te":85000,"fa":430000,"type":"shui","wu":430000}],"name":"201剑圣金光子(璇儿)(困难)","index":1100},{"data":[{"te":100000,"fa":410000,"type":"du","wu":480000}],"name":"201魔化金光子(璇儿)(困难)","index":1110},{"data":[{"te":10000,"fa":300000,"type":"lei","wu":270000}],"name":"201带电九头龙(璇儿)","index":1120},{"data":[{"te":60000,"fa":280000,"type":"mu","wu":300000}],"name":"201万剑台剑侍(璇儿)","index":1130},{"data":[{"te":60000,"fa":295000,"type":"shui","wu":295000}],"name":"201剑圣金光子(璇儿)","index":1140},{"data":[{"te":70000,"fa":280000,"type":"du","wu":330000}],"name":"201魔化金光子(璇儿)","index":1150},{"data":[{"te":85000,"fa":400000,"type":"lei","wu":360000}],"name":"201带电九头龙(暖暖)(困难)","index":1160},{"data":[{"te":10000,"fa":385000,"type":"mu","wu":425000}],"name":"201万剑台剑侍(暖暖)(困难)","index":1170},{"data":[{"te":85000,"fa":430000,"type":"shui","wu":430000}],"name":"201剑圣金光子(暖暖)(困难)","index":1180},{"data":[{"te":10000,"fa":460000,"type":"du","wu":460000}],"name":"201魔化金光子(暖暖)(困难)","index":1190},{"data":[{"te":60000,"fa":300000,"type":"lei","wu":270000}],"name":"201带电九头龙(暖暖)","index":1200},{"data":[{"te":10000,"fa":280000,"type":"mu","wu":300000}],"name":"201万剑台剑侍(暖暖)","index":1210},{"data":[{"te":60000,"fa":295000,"type":"shui","wu":295000}],"name":"201剑圣金光子(暖暖)","index":1220},{"data":[{"te":10000,"fa":320000,"type":"du","wu":320000}],"name":"201魔化金光子(暖暖)","index":1230},{"data":[{"te":60000,"fa":300000,"type":"lei","wu":270000}],"name":"201带电九头龙(童姥)","index":1240},{"data":[{"te":70000,"fa":280000,"type":"mu","wu":300000}],"name":"201万剑台剑侍(童姥)","index":1250},{"data":[{"te":10000,"fa":335000,"type":"shui","wu":335000}],"name":"201剑圣金光子(童姥)","index":1260},{"data":[{"te":70000,"fa":330000,"type":"du","wu":280000}],"name":"201魔化金光子(童姥)","index":1270},{"data":[{"te":60000,"fa":300000,"type":"lei","wu":270000}],"name":"201带电九头龙(独自一人)","index":1280},{"data":[{"te":70000,"fa":280000,"type":"mu","wu":300000}],"name":"201万剑台剑侍(独自一人)","index":1290},{"data":[{"te":60000,"fa":295000,"type":"shui","wu":295000}],"name":"201剑圣金光子(独自一人)","index":1300},{"data":[{"te":70000,"fa":335000,"type":"du","wu":335000}],"name":"201魔化金光子(独自一人)","index":1310},{"data":[{"te":140000,"fa":660000,"type":"lei","wu":460000}],"name":"201极难1","index":1320},{"data":[{"te":140000,"fa":500000,"type":"mu","wu":680000}],"name":"201极难2","index":1330},{"data":[{"te":140000,"fa":645000,"type":"shui","wu":645000}],"name":"201极难3","index":1340},{"data":[{"te":160000,"fa":690000,"type":"du","wu":690000}],"name":"204极难4","index":1350},{"data":[{"te":0,"fa":690000,"type":"wu","wu":690000},{"te":280000,"fa":755000,"type":"jin","wu":655000},{"te":300000,"fa":775000,"type":"huo","wu":775000}],"name":"201龙开天门","index":1360}],
            typeEnum: {
                wu: '无',
                jin: '金',
                mu: '木',
                shui: '水',
                huo: '火',
                tu: '土',
                lei: '雷',
                du: '毒'
            },
            log: {
                '2022-08-20': '新增渡劫计算器',
                '2022-08-21': '优化了ui展示</br>调整了部分数据排序</br>增加了输入框数据的本地缓存',
                '2022-08-22': '更新了142,171,199层数据</br>格式化了数字，不会出现小数了</br>输入框聚焦时自动清除数字</br>增加了编辑本地数据的功能,后续将更新添加数据以及导入导出',
                '2022-08-23': '更新了自定义数据添加功能</br>增加了导入导出功能',
                '2022-09-04': '增加了删除一组数据功能</br>更新了142,190,198,199层数据,删除了171极难数据',
                '2022-09-10': '更新了152,177,195,201层数据',
            },
            clientWidth: 0,
            clientHeight: 0,
            scrollHeight: 0,
        }
    },
    created() {
        this.clientWidth = document.documentElement.clientWidth;
        this.clientHeight = document.documentElement.clientHeight;

        let proStr = localStorage.getItem("pro");
        if (proStr) {
            this.pro = JSON.parse(proStr);
        }

        let bossDataStr = localStorage.getItem("bossData");
        let dataVersionStr = localStorage.getItem("dataVersion");
        if(bossDataStr && dataVersionStr && bossDataStr==this.dataVersion){
            this.bossData = JSON.parse(bossDataStr);
        }else{
            this.bossData = this.defaultData;
        }

        this.initData();
    },
    mounted() {
        this.scrollHeight = this.clientHeight - document.getElementById("nav").offsetHeight -
            document.getElementById("top").offsetHeight - 10;
    },
    watch: {
        pro:{
            handler(newValue, oldValue) {
                localStorage.setItem("pro", JSON.stringify(newValue));
            },
            deep: true
        }
    },
    methods: {
        delGroup(index){
            this.bossData.splice(index,1)
        },
        importData(){
            let temp=JSON.parse(this.importStr);
            if(temp){
                this.bossData=temp;
                this.saveData();
                this.initData();
            }
        },
        initData(){
            for(let data of this.bossData){
                for(let item of data.data){
                    if(!item.temp){
                        item.temp={};
                    }
                }
            }
        },
        saveData(){
            localStorage.setItem("bossData",JSON.stringify(this.getClearData()));
            localStorage.setItem("dataVersion",this.dataVersion);
        },
        resetData(){
            this.bossData=this.defaultData;
            localStorage.removeItem("bossData");
            localStorage.removeItem("dataVersion");
            this.initData();
        },
        getClearData(){
            return this.bossData.map((item)=>{
                return {
                    data:item.data.map((t)=>{
                        return {te:t.te,fa:t.fa,type:t.type,wu:t.wu};
                    }),
                    name:item.name,
                    index:item.index
                }

            });
        },
        addRow(data){
            let item={te:0,fa:0,type:"wu",wu:0,temp:{}};
            data.push(item);
        },
        addGroup(index){
            this.bossData.splice(index+1,0,{data:[{te:0,fa:0,type:"wu",wu:0,temp:{}}],name:"",index:this.bossData[index].index+1})
        },
        clearNum(value,event){
            this.pro[value]=0;
            event.target.value='';
        },
        computedWushang(key) {
            let temp = key.wu - this.pro.xiuWei * 45 - this.pro.wuKang * 125;
            temp = parseInt((temp * 100 - temp * this.pro.wuJian) / 100);
            key.temp.chengWuShang = temp < 0 ? 0 : temp;
            return key.temp.chengWuShang;
        },
        computedFaShang(key) {
            let temp = key.fa - this.pro.xiuWei * 45 - this.pro.faKang * 125;
            temp = parseInt((temp * 100 - temp * this.pro.faJian) / 100);
            key.temp.chengFaShang = temp < 0 ? 0 : temp;
            return key.temp.chengFaShang;
        },
        computedTeShang(key) {
            key.temp.chengTeShang =parseInt((key.te * 100 - key.te * this.pro[key.type]) / 100);
            key.temp.chengTeShang = key.temp.chengTeShang < 0 ? 0 : key.temp.chengTeShang;
            return key.temp.chengTeShang;
        },
        computedZuiShang(key) {
            let temp = key.temp.chengWuShang + key.temp.chengFaShang + key.temp.chengTeShang;
            key.temp.chengZuiShang = parseInt((temp * 100 - temp * this.pro.zuiZhong) / 100);
            return key.temp.chengZuiShang;
        },
        computedTongGuo(key) {
            return this.pro.tiZhi * 50 - key.temp.chengZuiShang <= 0 ? '失败' : '成功';
        },
        isSuccess(key) {
            return this.pro.tiZhi * 50 - key.temp.chengZuiShang <= 0 ? 'fail' : 'success';
        }
    },
}).mount('#app')