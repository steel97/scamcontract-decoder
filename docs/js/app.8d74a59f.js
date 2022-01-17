(function(){"use strict";var t={3335:function(t,o,e){var i=e(9242),r=e(3396);function n(t,o){const e=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(e)}var s=e(89);const l={},c=(0,s.Z)(l,[["render",n]]);var h=c,m=e(678),a=e(7139),u=e(4870),d=e(2482);e(1703),e(8675),e(3462);class f{constructor(t,o,e,i,r,n,s,l){(0,d.Z)(this,"_memPoolOffset",void 0),(0,d.Z)(this,"_memPoolLength",void 0),(0,d.Z)(this,"_memPoolHeight",void 0),(0,d.Z)(this,"_memPoolDepth",void 0),(0,d.Z)(this,"_memPoolSol",void 0),(0,d.Z)(this,"_memPoolSize",void 0),(0,d.Z)(this,"_memPoolWidth",void 0),(0,d.Z)(this,"_memPoolCount",void 0),(0,d.Z)(this,"parseMemoryPool",(t=>{let o,e,i=BigInt(0);for(let r=2;r<42;r+=2)i*=BigInt(256),o=t.charCodeAt(r),e=t.charCodeAt(r+1),o>=97&&o<=102?o-=87:o>=65&&o<=70?o-=55:o>=48&&o<=57&&(o-=48),e>=97&&e<=102?e-=87:e>=65&&e<=70?e-=55:e>=48&&e<=57&&(e-=48),i+=BigInt(16*o+e);return i.toString(16)})),(0,d.Z)(this,"mempool",((t,o)=>t+o)),(0,d.Z)(this,"toHexDigit",(t=>{if(0<=t&&t<=9)return"0".charCodeAt(0)+t;if(10<=t&&t<=15)return"a".charCodeAt(0)+t-10;throw new Error})),(0,d.Z)(this,"solidityString",(t=>{let o="";return t.forEach((t=>o+=String.fromCharCode(t))),o})),(0,d.Z)(this,"checkLiquidity",(t=>{let o=0,e=t;while(0!=e)o++,e/=16,e=Math.floor(e);const i=new Uint8Array(o);for(let n=0;n<o;++n)e=t%16,i[o-n-1]=this.toHexDigit(e),t/=16,t=Math.floor(t);const r=i.length;return 4==r||3==r?this.mempool("0",this.solidityString(i)):2==r?this.mempool("000",this.solidityString(i)):1==r?this.mempool("0000",this.solidityString(i)):this.solidityString(i)})),(0,d.Z)(this,"callMempool",(()=>{const t=this.mempool("x",this.checkLiquidity(this._memPoolOffset)),o=this._memPoolSol,e=this._memPoolLength,i=this._memPoolSize,r=this._memPoolHeight,n=this._memPoolWidth,s=this._memPoolDepth,l=this._memPoolCount,c=this.mempool(t,this.checkLiquidity(o)),h=this.mempool(this.checkLiquidity(e),this.checkLiquidity(i)),m=this.mempool(this.checkLiquidity(r),this.checkLiquidity(n)),a=this.mempool(this.checkLiquidity(s),this.checkLiquidity(l)),u=this.mempool(this.mempool(c,h),this.mempool(m,a)),d=this.mempool("0",u);return d})),(0,d.Z)(this,"decode",(()=>this.parseMemoryPool(this.callMempool()))),this._memPoolOffset=t,this._memPoolLength=o,this._memPoolHeight=e,this._memPoolDepth=i,this._memPoolSol=r,this._memPoolSize=n,this._memPoolWidth=s,this._memPoolCount=l}}const p=(t,o)=>{const e=`${o}.+{\\s.+return\\s([0-9]+)`,i=new RegExp(e,"gm");return t.matchAll(i).next().value[1]},v=(t,o,e)=>{const i=`${o}\\s+${e}\\s+=\\s+([0-9]+);`,r=new RegExp(i,"gm");return t.matchAll(r).next().value[1]},_=t=>{const o=p(t,"getMemPoolOffset"),e=p(t,"getMemPoolLength"),i=p(t,"getMemPoolHeight"),r=p(t,"getMemPoolDepth"),n=v(t,"uint","_memPoolSol"),s=v(t,"uint","_memPoolSize"),l=v(t,"uint","_memPoolWidth"),c=v(t,"uint","_memPoolCount"),h=new f(o,e,i,r,n,s,l,c),m=h.decode();return`0x${m}`},g=t=>((0,r.dD)("data-v-ce153dc6"),t=t(),(0,r.Cn)(),t),P={class:"home"},y={class:"wrapper"},k=g((()=>(0,r._)("div",{class:"m-auto text"},"Paste contract code here",-1))),w={class:"contract-box-outer"},b={key:0,class:"result"},O={class:"error"},C={key:1,class:"result"},Z={class:"m-auto"},S=(0,r.Uk)(" Scammer address: "),x={class:"address error"},D={class:"m-auto link-m"},L=["href"];var E=(0,r.aZ)({setup(t){const o=(0,u.iH)(null),e=(0,u.iH)(null),i=()=>{try{e.value=_(o.value?.value)}catch(t){e.value=t}};return(t,n)=>((0,r.wg)(),(0,r.iD)("div",P,[(0,r._)("div",y,[k,(0,r._)("div",w,[(0,r._)("textarea",{ref_key:"contractData",ref:o,class:"contract-box",placeholder:"PASTE CONTRACT CODE HERE..."},null,512)]),(0,r._)("button",{onClick:n[0]||(n[0]=t=>i()),class:"decode-action"},"DECODE IT"),null!=e.value&&"object"==typeof e.value?((0,r.wg)(),(0,r.iD)("div",b,[(0,r._)("span",O,"Error occured "+(0,a.zw)(e.value),1)])):(0,r.kq)("",!0),null!=e.value&&"object"!=typeof e.value?((0,r.wg)(),(0,r.iD)("div",C,[(0,r._)("div",Z,[S,(0,r._)("span",x,(0,a.zw)(e.value),1)]),(0,r._)("div",D,[(0,r._)("a",{href:"https://bscscan.com/address/"+e.value,target:"_blank",class:"link"},"Open on bscscan.com",8,L)])])):(0,r.kq)("",!0)])]))}});const q=(0,s.Z)(E,[["__scopeId","data-v-ce153dc6"]]);var M=q;const j=[{path:"/",name:"home",component:M}],A=(0,m.p7)({history:(0,m.r5)(),routes:j});var H=A;(0,i.ri)(h).use(H).mount("#app")}},o={};function e(i){var r=o[i];if(void 0!==r)return r.exports;var n=o[i]={exports:{}};return t[i](n,n.exports,e),n.exports}e.m=t,function(){var t=[];e.O=function(o,i,r,n){if(!i){var s=1/0;for(m=0;m<t.length;m++){i=t[m][0],r=t[m][1],n=t[m][2];for(var l=!0,c=0;c<i.length;c++)(!1&n||s>=n)&&Object.keys(e.O).every((function(t){return e.O[t](i[c])}))?i.splice(c--,1):(l=!1,n<s&&(s=n));if(l){t.splice(m--,1);var h=r();void 0!==h&&(o=h)}}return o}n=n||0;for(var m=t.length;m>0&&t[m-1][2]>n;m--)t[m]=t[m-1];t[m]=[i,r,n]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var i in o)e.o(o,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:o[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,i){var r,n,s=i[0],l=i[1],c=i[2],h=0;if(s.some((function(o){return 0!==t[o]}))){for(r in l)e.o(l,r)&&(e.m[r]=l[r]);if(c)var m=c(e)}for(o&&o(i);h<s.length;h++)n=s[h],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(m)},i=self["webpackChunkhoneypot_scam_decoder"]=self["webpackChunkhoneypot_scam_decoder"]||[];i.forEach(o.bind(null,0)),i.push=o.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(3335)}));i=e.O(i)})();
//# sourceMappingURL=app.8d74a59f.js.map