/*!
 * @project        Example Project
 * @name           amplitudeplayer-legacy.f5251fb914bec495d6f0.js
 * @author         Andrew Welch
 * @build          Mon, Dec 23, 2019 10:07 AM ET
 * @release        9fd2850b8f997b81ba48349e3b9790f3aea2235a [develop]
 * @copyright      Copyright (c) 2019 Example Company, Inc.
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{131:function(t,n,e){var r=e(48),i=e(171);r({target:"Date",proto:!0,forced:Date.prototype.toISOString!==i},{toISOString:i})},132:function(t,n,e){var r=e(10),i=Date.prototype,o=i.toString,a=i.getTime;new Date(NaN)+""!="Invalid Date"&&r(i,"toString",(function(){var t=a.call(this);return t==t?o.call(this):"Invalid Date"}))},133:function(t,n,e){var r=e(48),i=e(173);r({global:!0,forced:parseInt!=i},{parseInt:i})},156:function(t,n,e){"use strict";var r=e(27),i=e(26);t.exports="".repeat||function(t){var n=String(i(this)),e="",o=r(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(e+=n);return e}},171:function(t,n,e){"use strict";var r=e(4),i=e(172).start,o=Math.abs,a=Date.prototype,s=a.getTime,c=a.toISOString;t.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=c.call(new Date(-5e13-1))}))||!r((function(){c.call(new Date(NaN))}))?function(){if(!isFinite(s.call(this)))throw RangeError("Invalid time value");var t=this.getUTCFullYear(),n=this.getUTCMilliseconds(),e=t<0?"-":t>9999?"+":"";return e+i(o(t),e?6:4,0)+"-"+i(this.getUTCMonth()+1,2,0)+"-"+i(this.getUTCDate(),2,0)+"T"+i(this.getUTCHours(),2,0)+":"+i(this.getUTCMinutes(),2,0)+":"+i(this.getUTCSeconds(),2,0)+"."+i(n,3,0)+"Z"}:c},172:function(t,n,e){var r=e(23),i=e(156),o=e(26),a=Math.ceil,s=function(t){return function(n,e,s){var c,u,l=String(o(n)),g=l.length,f=void 0===s?" ":String(s),p=r(e);return p<=g||""==f?l:(c=p-g,(u=i.call(f,a(c/f.length))).length>c&&(u=u.slice(0,c)),t?l+u:u+l)}};t.exports={start:s(!1),end:s(!0)}},173:function(t,n,e){var r=e(0),i=e(80).trim,o=e(81),a=r.parseInt,s=/^[+-]?0[Xx]/,c=8!==a(o+"08")||22!==a(o+"0x16");t.exports=c?function(t,n){var e=i(String(t));return a(e,n>>>0||(s.test(e)?16:10))}:a}}]);
//# sourceMappingURL=amplitudeplayer-legacy.f5251fb914bec495d6f0.js.map