/*! For license information please see bundle.d68074189abb2dc0efc2.js.LICENSE.txt */
(()=>{"use strict";var n,e={211:(n,e,t)=>{var r=t(379),o=t.n(r),i=t(795),a=t.n(i),c=t(569),u=t.n(c),l=t(565),s=t.n(l),f=t(216),p=t.n(f),d=t(589),h=t.n(d),v=t(426),g={};function y(n){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},y(n)}function m(){m=function(){return n};var n={},e=Object.prototype,t=e.hasOwnProperty,r=Object.defineProperty||function(n,e,t){n[e]=t.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(n,e,t){return Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}),n[e]}try{u({},"")}catch(n){u=function(n,e,t){return n[e]=t}}function l(n,e,t,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new O(o||[]);return r(a,"_invoke",{value:k(n,t,c)}),a}function s(n,e,t){try{return{type:"normal",arg:n.call(e,t)}}catch(n){return{type:"throw",arg:n}}}n.wrap=l;var f={};function p(){}function d(){}function h(){}var v={};u(v,i,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(S([])));x&&x!==e&&t.call(x,i)&&(v=x);var b=h.prototype=p.prototype=Object.create(v);function w(n){["next","throw","return"].forEach((function(e){u(n,e,(function(n){return this._invoke(e,n)}))}))}function _(n,e){function o(r,i,a,c){var u=s(n[r],n,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==y(f)&&t.call(f,"__await")?e.resolve(f.__await).then((function(n){o("next",n,a,c)}),(function(n){o("throw",n,a,c)})):e.resolve(f).then((function(n){l.value=n,a(l)}),(function(n){return o("throw",n,a,c)}))}c(u.arg)}var i;r(this,"_invoke",{value:function(n,t){function r(){return new e((function(e,r){o(n,t,e,r)}))}return i=i?i.then(r,r):r()}})}function k(n,e,t){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(t.method=o,t.arg=i;;){var a=t.delegate;if(a){var c=L(a,t);if(c){if(c===f)continue;return c}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===r)throw r="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);r="executing";var u=s(n,e,t);if("normal"===u.type){if(r=t.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:t.done}}"throw"===u.type&&(r="completed",t.method="throw",t.arg=u.arg)}}}function L(n,e){var t=e.method,r=n.iterator[t];if(void 0===r)return e.delegate=null,"throw"===t&&n.iterator.return&&(e.method="return",e.arg=void 0,L(n,e),"throw"===e.method)||"return"!==t&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+t+"' method")),f;var o=s(r,n.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[n.resultName]=i.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(n){var e={tryLoc:n[0]};1 in n&&(e.catchLoc=n[1]),2 in n&&(e.finallyLoc=n[2],e.afterLoc=n[3]),this.tryEntries.push(e)}function j(n){var e=n.completion||{};e.type="normal",delete e.arg,n.completion=e}function O(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(E,this),this.reset(!0)}function S(n){if(n){var e=n[i];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var r=-1,o=function e(){for(;++r<n.length;)if(t.call(n,r))return e.value=n[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:z}}function z(){return{value:void 0,done:!0}}return d.prototype=h,r(b,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:d,configurable:!0}),d.displayName=u(h,c,"GeneratorFunction"),n.isGeneratorFunction=function(n){var e="function"==typeof n&&n.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,h):(n.__proto__=h,u(n,c,"GeneratorFunction")),n.prototype=Object.create(b),n},n.awrap=function(n){return{__await:n}},w(_.prototype),u(_.prototype,a,(function(){return this})),n.AsyncIterator=_,n.async=function(e,t,r,o,i){void 0===i&&(i=Promise);var a=new _(l(e,t,r,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},w(b),u(b,c,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var e=Object(n),t=[];for(var r in e)t.push(r);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},n.values=S,O.prototype={constructor:O,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!n)for(var e in this)"t"===e.charAt(0)&&t.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function r(t,r){return a.type="throw",a.arg=n,e.next=t,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=t.call(i,"catchLoc"),u=t.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(n,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&t.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(n,e){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&e&&(this.next=e),f},finish:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.finallyLoc===n)return this.complete(t.completion,t.afterLoc),j(t),f}},catch:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.tryLoc===n){var r=t.completion;if("throw"===r.type){var o=r.arg;j(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,t){return this.delegate={iterator:S(n),resultName:e,nextLoc:t},"next"===this.method&&(this.arg=void 0),f}},n}function x(n,e,t,r,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void t(n)}c.done?e(u):Promise.resolve(u).then(r,o)}function b(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function a(n){x(i,r,o,a,c,"next",n)}function c(n){x(i,r,o,a,c,"throw",n)}a(void 0)}))}}g.styleTagTransform=h(),g.setAttributes=s(),g.insert=u().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),o()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals,t(146);var w=1,_="8c8e1a50-6322-4135-8875-5d40a5420d86",k="https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=";j(k);var L=document.querySelector(".pagination_btn1"),E=document.querySelector(".pagination_btn2");function j(n){return O.apply(this,arguments)}function O(){return(O=b(m().mark((function n(e){var t;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e,{headers:{"Content-Type":"application/json","X-API-KEY":_}});case 2:return t=n.sent,n.next=5,t.json();case 5:S(n.sent);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function S(n){var e=document.querySelector(".movies");document.querySelector(".movies").innerHTML="",n.films.forEach((function(n){var t,r=document.createElement("div");r.classList.add("movie"),r.innerHTML='\n        <div class="movie__cover-inner">\n        <img\n          src="'.concat(n.posterUrlPreview,'"\n          class="movie__cover"\n          alt="').concat(n.nameRu,'"\n        />\n        <div class="movie__cover--darkened"></div>\n      </div>\n      <div class="movie__info">\n        <div class="movie__title">').concat(n.nameRu,'</div>\n        <div class="movie__category">').concat(n.genres.map((function(n){return" ".concat(n.genre)})),"</div>\n        ").concat(n.rating&&'\n        <div class="movie__average movie__average--'.concat((t=n.rating,t>=7?"green":t>5?"orange":"red"),'">').concat(n.rating,"</div>\n        "),"\n      </div>\n        "),e.appendChild(r)}))}document.querySelector(".container"),L.addEventListener("click",(function(n){n.preventDefault(),w<=5&&w>1&&(w--,j("".concat(k).concat(w)),console.log("helo"))})),E.addEventListener("click",(function(n){n.preventDefault(),w<5&&w>=1&&(w++,j("".concat(k).concat(w)))}));var z=document.querySelector("form"),P=document.querySelector(".search_input");z.addEventListener("submit",(function(n){n.preventDefault();var e="".concat("https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=").concat(P.value);P.value&&(j(e),P.value="")}))},426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"*{\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #1a191f;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.container{\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  gap: 5rem;\n}\n\n.movie_container {\n  max-width: 80%;\n  margin: 0 auto;\n}\n\n.header{\n  position: relative;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 40rem;\n  justify-content: space-between;\n}\n\n.background{\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  opacity: .3;\n  background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/7cee2527-d2cc-4cc9-99f6-d1375e72d46e/388bead7-65d5-497f-ad43-790a4412dc19/UZ-en-20230103-popsignuptwoweeks-perspective_alpha_website_large.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n}\n\n.form{\n  position: relative;\n  z-index: 2;\n  width: 35rem;\n  height: 50%;\n  top: -15%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.header_title{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n  gap: 1rem;\n}\n\n.title{\n  font-size: 45px;\n  font-weight: 900;\n  text-align: center;\n}\n\n.subtitle{\n  font-weight: 600;\n}\n\n.navbar{\n  position: relative;\n  z-index: 2;\n  padding: 1rem;\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.registration{\n  width: 15rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.signup_btn{\n  padding: 5px 18px;\n  background-color: #E50914;\n  border-radius: 2px;\n  color: white;\n  cursor: pointer;\n  font-weight: 400;\n  text-decoration: none;\n  font-size: 14px;\n}\n\n.logo{\n  position: relative;\n  z-index: 2;\n  font-size: 58px;\n  font-weight: 900;\n  color: #E50914;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.search_input{\n  box-sizing: border-box;\n  width: 100%;\n  font-family: inherit;\n  padding: 16px 20px 20px 20px;\n  height: 3rem;\n  font-size: 16px;\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  background-color: rgb(255, 255, 255);\n  color: #444;\n}\n\n.movies {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n.movie {\n  width: 240px;\n  margin: 10px;\n  position: relative;\n}\n\n.movie__cover-inner {\n  position: relative;\n  height: 360px;\n}\n\n.movie__cover {\n  max-width: 100%;\n  height: 100%;\n}\n\n.movie__cover--darkened {\n  background-color: #000000;\n  opacity: 0.1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  max-width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n\n.movie__cover--darkened:hover {\n  background-color: grey;\n  cursor: pointer;\n}\n\n.movie__info {\n  padding: 10px 0px;\n}\n\n.movie__title {\n  font-size: 16px;\n  color: #ffffff;\n}\n\n.movie__category {\n  font-size: 14px;\n  color: #ffd80e;\n}\n\n.movie__average {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  right: 0;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #1a191f;\n  color: #ffffff;\n  font-size: 14px;\n}\n\n.movie__average--green {\n  border: 1px solid green;\n}\n\n.movie__average--orange {\n  border: 1px solid orange;\n}\n\n.movie__average--red {\n  border: 1px solid red;\n}\n\n\n.pagination{\n  display: flex;\n  gap: 2rem;\n  width: 20%;\n  margin-bottom: 4rem;\n}\n\n.pagination_btn1{\n  border: none;\n  color: white;\n  padding: 4%;\n  border-radius: 5px;\n  font-size: 18px;\n  background-color: #E50914;\n}\n\n.pagination_btn2{\n  border: none;\n  color: white;\n  padding: 4%;\n  border-radius: 5px;\n  font-size: 18px;\n  background-color: #E50914;\n}",""]);const c=a}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,n=[],r.O=(e,t,o,i)=>{if(!t){var a=1/0;for(s=0;s<n.length;s++){for(var[t,o,i]=n[s],c=!0,u=0;u<t.length;u++)(!1&i||a>=i)&&Object.keys(r.O).every((n=>r.O[n](t[u])))?t.splice(u--,1):(c=!1,i<a&&(a=i));if(c){n.splice(s--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[t,o,i]},r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n={826:0};r.O.j=e=>0===n[e];var e=(e,t)=>{var o,i,[a,c,u]=t,l=0;if(a.some((e=>0!==n[e]))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(u)var s=u(r)}for(e&&e(t);l<a.length;l++)i=a[l],r.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return r.O(s)},t=self.webpackChunkvanilla_js=self.webpackChunkvanilla_js||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})(),r.nc=void 0;var o=r.O(void 0,[122],(()=>r(211)));o=r.O(o)})();