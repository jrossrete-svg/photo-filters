(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r)){b[r]=a[r]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++){inherit(b[t],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t){A.mv(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a,b){if(b!=null)A.k(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.i3(b)
return new t(c,this)}:function(){if(t===null)t=A.i3(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.i3(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
i6(a,b,c,d){return{i:a,p:b,e:c,x:d}},
h8(a){var t,s,r,q,p,o="_$dart_js",n=a[v.dispatchPropertyName]
if(n==null)if($.i4==null){A.md()
n=a[v.dispatchPropertyName]}if(n!=null){t=n.p
if(!1===t)return n.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return n.i
if(n.e===s)throw A.f(A.iP("Return interceptor for "+A.x(t(a,n))))}r=a.constructor
if(r==null)q=null
else{p=$.fL
if(p==null)p=$.fL=A.h7(o)
q=r[p]}if(q!=null)return q
q=A.mj(a)
if(q!=null)return q
if(typeof a=="function")return B.bU
t=Object.getPrototypeOf(a)
if(t==null)return B.aE
if(t===Object.prototype)return B.aE
if(typeof r=="function"){p=$.fL
if(p==null)p=$.fL=A.h7(o)
Object.defineProperty(r,p,{value:B.a9,enumerable:false,writable:true,configurable:true})
return B.a9}return B.a9},
km(a,b){if(a<0||a>4294967295)throw A.f(A.a_(a,0,4294967295,"length",null))
return J.iy(new Array(a),b)},
ix(a,b){if(a<0||a>4294967295)throw A.f(A.a_(a,0,4294967295,"length",null))
return J.iy(new Array(a),b)},
iy(a,b){var t=A.k(a,b.l("u<0>"))
t.$flags=1
return t},
kn(a,b){var t=u.W
return J.jV(t.a(a),t.a(b))},
iz(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ko(a,b){var t,s
for(t=a.length;b<t;){s=a.charCodeAt(b)
if(s!==32&&s!==13&&!J.iz(s))break;++b}return b},
kp(a,b){var t,s,r
for(t=a.length;b>0;b=s){s=b-1
if(!(s<t))return A.a(a,s)
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.iz(r))break}return b},
bB(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cq.prototype
return J.dM.prototype}if(typeof a=="string")return J.aT.prototype
if(a==null)return J.cr.prototype
if(typeof a=="boolean")return J.dL.prototype
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
if(typeof a=="symbol")return J.bS.prototype
if(typeof a=="bigint")return J.bR.prototype
return a}if(a instanceof A.A)return a
return J.h8(a)},
K(a){if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
if(typeof a=="symbol")return J.bS.prototype
if(typeof a=="bigint")return J.bR.prototype
return a}if(a instanceof A.A)return a
return J.h8(a)},
ay(a){if(a==null)return a
if(Array.isArray(a))return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
if(typeof a=="symbol")return J.bS.prototype
if(typeof a=="bigint")return J.bR.prototype
return a}if(a instanceof A.A)return a
return J.h8(a)},
m8(a){if(typeof a=="number")return J.bQ.prototype
if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(!(a instanceof A.A))return J.bq.prototype
return a},
m9(a){if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(!(a instanceof A.A))return J.bq.prototype
return a},
c6(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
if(typeof a=="symbol")return J.bS.prototype
if(typeof a=="bigint")return J.bR.prototype
return a}if(a instanceof A.A)return a
return J.h8(a)},
as(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bB(a).O(a,b)},
jR(a,b){return J.m9(a).de(a,b)},
jS(a,b,c){return J.c6(a).df(a,b,c)},
jT(a,b,c){return J.c6(a).dg(a,b,c)},
jU(a,b,c){return J.c6(a).dh(a,b,c)},
bE(a){return J.c6(a).di(a)},
N(a,b,c){return J.c6(a).bx(a,b,c)},
jV(a,b){return J.m8(a).bn(a,b)},
id(a,b){return J.ay(a).ak(a,b)},
aA(a){return J.bB(a).gG(a)},
b1(a){return J.ay(a).gA(a)},
aN(a){return J.K(a).gj(a)},
jW(a){return J.bB(a).gab(a)},
ie(a,b,c){return J.c6(a).dQ(a,b,c)},
jX(a,b){return J.ay(a).c3(a,b)},
jY(a,b,c){return J.ay(a).bH(a,b,c)},
jZ(a,b){return J.ay(a).dH(a,b)},
aO(a){return J.bB(a).D(a)},
dI:function dI(){},
dL:function dL(){},
cr:function cr(){},
ct:function ct(){},
aU:function aU(){},
e2:function e2(){},
bq:function bq(){},
aE:function aE(){},
bR:function bR(){},
bS:function bS(){},
u:function u(a){this.$ti=a},
dK:function dK(){},
fe:function fe(a){this.$ti=a},
b2:function b2(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bQ:function bQ(){},
cq:function cq(){},
dM:function dM(){},
aT:function aT(){}},A={hz:function hz(){},
fg(a){return new A.bT("Field '"+a+"' has not been initialized.")},
kq(a){return new A.bT("Field '"+a+"' has already been initialized.")},
aI(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
fA(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
jg(a,b,c){return a},
i5(a){var t,s
for(t=$.a9.length,s=0;s<t;++s)if(a===$.a9[s])return!0
return!1},
eh(a,b,c,d){A.cN(b,"start")
if(c!=null){A.cN(c,"end")
if(b>c)A.aL(A.a_(b,0,c,"start",null))}return new A.cT(a,b,c,d.l("cT<0>"))},
ku(a,b,c,d){return new A.cv(a,b,c.l("@<0>").b0(d).l("cv<1,2>"))},
hx(){return new A.cR("No element")},
bT:function bT(a){this.a=a},
av:function av(a){this.a=a},
fw:function fw(){},
ce:function ce(){},
a4:function a4(){},
cT:function cT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b7:function b7(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cv:function cv(a,b,c){this.a=a
this.b=b
this.$ti=c},
cX:function cX(a,b,c){this.a=a
this.b=b
this.$ti=c},
br:function br(a,b,c){this.a=a
this.b=b
this.$ti=c},
cf:function cf(a){this.$ti=a},
cg:function cg(a){this.$ti=a},
V:function V(){},
aZ:function aZ(){},
bY:function bY(){},
aH:function aH(a,b){this.a=a
this.$ti=b},
ju(a){var t=A.jt(a)
if(t!=null)return t
return"minified:"+a},
n2(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.aU.b(a)},
x(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aO(a)
return t},
cL(a){var t,s=$.iG
if(s==null)s=$.iG=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
kD(a,b){var t,s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return null
if(3>=s.length)return A.a(s,3)
t=s[3]
if(t!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return null},
kC(a){var t,s
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
t=parseFloat(a)
if(isNaN(t)){s=B.k.c0(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return null}return t},
e5(a){var t,s,r,q
if(a instanceof A.A)return A.a8(A.az(a),null)
t=J.bB(a)
if(t===B.bT||t===B.bV||u.ak.b(a)){s=B.ac(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.a8(A.az(a),null)},
iH(a){var t,s,r
if(a==null||typeof a=="number"||A.hZ(a))return J.aO(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.aP)return a.D(0)
if(a instanceof A.ad)return a.d6(!0)
t=$.jP()
for(s=0;s<1;++s){r=t[s].fl(a)
if(r!=null)return r}return"Instance of '"+A.e5(a)+"'"},
iF(a){var t,s,r,q,p=a.length
if(p<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<p;s=r){r=s+500
q=r<p?r:p
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
kE(a){var t,s,r,q=A.k([],u.t)
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.D)(a),++s){r=a[s]
if(!A.d9(r))throw A.f(A.b0(r))
if(r<=65535)B.c.L(q,r)
else if(r<=1114111){B.c.L(q,55296+(B.b.I(r-65536,10)&1023))
B.c.L(q,56320+(r&1023))}else throw A.f(A.b0(r))}return A.iF(q)},
iJ(a){var t,s,r
for(t=a.length,s=0;s<t;++s){r=a[s]
if(!A.d9(r))throw A.f(A.b0(r))
if(r<0)throw A.f(A.b0(r))
if(r>65535)return A.kE(a)}return A.iF(a)},
kF(a,b,c){var t,s,r,q
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
q=r<c?r:c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
iI(a){var t
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((B.b.I(t,10)|55296)>>>0,t&1023|56320)}}throw A.f(A.a_(a,0,1114111,null,null))},
da(a){throw A.f(A.b0(a))},
a(a,b){if(a==null)J.aN(a)
throw A.f(A.h3(a,b))},
h3(a,b){var t,s="index"
if(!A.d9(b))return new A.at(!0,b,s,null)
t=A.t(J.aN(a))
if(b<0||b>=t)return A.ht(b,t,a,s)
return new A.cM(null,null,!0,b,s,"Value not in range")},
lZ(a,b,c){if(a<0||a>c)return A.a_(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.a_(b,a,c,"end",null)
return new A.at(!0,b,"end",null)},
b0(a){return new A.at(!0,a,null,null)},
f(a){return A.M(a,new Error())},
M(a,b){var t
if(a==null)a=new A.cU()
b.dartException=a
t=A.mw
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:t})
b.name=""}else b.toString=t
return b},
mw(){return J.aO(this.dartException)},
aL(a,b){throw A.M(a,b==null?new Error():b)},
b(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.aL(A.li(a,b,c),t)},
li(a,b,c){var t,s,r,q,p,o,n,m,l
if(typeof b=="string")t=b
else{s="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
r=s.length
q=b
if(q>r){c=q/r|0
q%=r}t=s[q]}p=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
o=u.c.b(a)?"list":"ByteData"
n=a.$flags|0
m="a "
if((n&4)!==0)l="constant "
else if((n&2)!==0){l="unmodifiable "
m="an "}else l=(n&1)!==0?"fixed-length ":""
return new A.cW("'"+t+"': Cannot "+p+" "+m+l+o)},
D(a){throw A.f(A.ai(a))},
aJ(a){var t,s,r,q,p,o
a=A.js(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=A.k([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new A.fC(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
fD(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
iO(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
hA(a,b){var t=b==null,s=t?null:b.method
return new A.dN(a,s,t?null:b.receiver)},
eE(a){if(a==null)return new A.fo(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.bD(a,a.dartException)
return A.lN(a)},
bD(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
lN(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((B.b.I(s,16)&8191)===10)switch(r){case 438:return A.bD(a,A.hA(A.x(t)+" (Error "+r+")",null))
case 445:case 5007:A.x(t)
return A.bD(a,new A.cF())}}if(a instanceof TypeError){q=$.jz()
p=$.jA()
o=$.jB()
n=$.jC()
m=$.jF()
l=$.jG()
k=$.jE()
$.jD()
j=$.jI()
i=$.jH()
h=q.aY(t)
if(h!=null)return A.bD(a,A.hA(A.Y(t),h))
else{h=p.aY(t)
if(h!=null){h.method="call"
return A.bD(a,A.hA(A.Y(t),h))}else if(o.aY(t)!=null||n.aY(t)!=null||m.aY(t)!=null||l.aY(t)!=null||k.aY(t)!=null||n.aY(t)!=null||j.aY(t)!=null||i.aY(t)!=null){A.Y(t)
return A.bD(a,new A.cF())}}return A.bD(a,new A.el(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new A.cQ()
t=function(b){try{return String(b)}catch(g){}return null}(a)
return A.bD(a,new A.at(!1,null,null,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new A.cQ()
return a},
i7(a){if(a==null)return J.aA(a)
if(typeof a=="object")return A.cL(a)
return J.aA(a)},
lV(a){if(typeof a=="number")return B.a.gG(a)
if(a instanceof A.ez)return A.cL(a)
if(a instanceof A.ad)return a.gG(a)
return A.i7(a)},
jk(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
ls(a,b,c,d,e,f){u.Z.a(a)
switch(A.t(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.f(new A.fJ("Unsupported number of arguments for wrapped closure"))},
lW(a,b){var t=a.$identity
if(!!t)return t
t=A.lX(a,b)
a.$identity=t
return t},
lX(a,b){var t
switch(b){case 0:t=a.$0
break
case 1:t=a.$1
break
case 2:t=a.$2
break
case 3:t=a.$3
break
case 4:t=a.$4
break
default:t=null}if(t!=null)return t.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.ls)},
k6(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.ee().constructor.prototype):Object.create(new A.bF(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.il(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.k2(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.il(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
k2(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.f("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.k0)}throw A.f("Error in functionType of tearoff")},
k3(a,b,c,d){var t=A.ij
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
il(a,b,c,d){if(c)return A.k5(a,b,d)
return A.k3(b.length,d,a,b)},
k4(a,b,c,d){var t=A.ij,s=A.k1
switch(b?-1:a){case 0:throw A.f(new A.e9("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
k5(a,b,c){var t,s
if($.ih==null)$.ih=A.ig("interceptor")
if($.ii==null)$.ii=A.ig("receiver")
t=b.length
s=A.k4(t,c,a,b)
return s},
i3(a){return A.k6(a)},
k0(a,b){return A.d7(v.typeUniverse,A.az(a.a),b)},
ij(a){return a.a},
k1(a){return a.b},
ig(a){var t,s,r,q=new A.bF("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.f(A.db("Field name "+a+" not found."))},
h7(a){return v.getIsolateTag(a)},
n0(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mj(a){var t,s,r,q,p,o=A.Y($.jl.$1(a)),n=$.h4[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.hc[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.j5($.je.$2(a,o))
if(r!=null){n=$.h4[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.hc[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.hh(t)
$.h4[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.hc[o]=t
return t}if(q==="-"){p=A.hh(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.jq(a,t)
if(q==="*")throw A.f(A.iP(o))
if(v.leafTags[o]===true){p=A.hh(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.jq(a,t)},
jq(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.i6(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
hh(a){return J.i6(a,!1,null,!!a.$ia3)},
ml(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.hh(t)
else return J.i6(t,c,null,null)},
md(){if(!0===$.i4)return
$.i4=!0
A.me()},
me(){var t,s,r,q,p,o,n,m
$.h4=Object.create(null)
$.hc=Object.create(null)
A.mc()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.jr.$1(p)
if(o!=null){n=A.ml(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
mc(){var t,s,r,q,p,o,n=B.aW()
n=A.c5(B.aX,A.c5(B.aY,A.c5(B.ad,A.c5(B.ad,A.c5(B.aZ,A.c5(B.b_,A.c5(B.b0(B.ac),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.jl=new A.h9(q)
$.je=new A.ha(p)
$.jr=new A.hb(o)},
c5(a,b){return a(b)||b},
kY(a,b){var t,s
for(t=0;t<a.length;++t){s=a[t]
if(!(t<b.length))return A.a(b,t)
if(!J.as(s,b[t]))return!1}return!0},
lY(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
iA(a,b,c,d,e,f){var t=b?"m":"",s=c?"":"i",r=d?"u":"",q=e?"s":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,t+s+r+q+f)
if(p instanceof RegExp)return p
throw A.f(A.aD("Illegal RegExp pattern ("+String(p)+")",a,null))},
ms(a,b,c){var t=a.indexOf(b,c)
return t>=0},
m3(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
js(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
mt(a,b,c){var t=A.mu(a,b,c)
return t},
mu(a,b,c){var t,s,r
if(b===""){if(a==="")return c
t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.js(b),"g"),A.m3(c))},
I:function I(a,b){this.a=a
this.b=b},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
bu:function bu(a){this.a=a},
bG:function bG(){},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(a,b,c){this.a=a
this.b=b
this.$ti=c},
cZ:function cZ(a,b){this.a=a
this.$ti=b},
bs:function bs(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bI:function bI(a,b){this.a=a
this.$ti=b},
ca:function ca(){},
aQ:function aQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cP:function cP(){},
fC:function fC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cF:function cF(){},
dN:function dN(a,b,c){this.a=a
this.b=b
this.c=c},
el:function el(a){this.a=a},
fo:function fo(a){this.a=a},
aP:function aP(){},
dg:function dg(){},
dh:function dh(){},
ej:function ej(){},
ee:function ee(){},
bF:function bF(a,b){this.a=a
this.b=b},
e9:function e9(a){this.a=a},
ak:function ak(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fk:function fk(a,b){this.a=a
this.b=b
this.c=null},
aF:function aF(a,b){this.a=a
this.$ti=b},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cu:function cu(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h9:function h9(a){this.a=a},
ha:function ha(a){this.a=a},
hb:function hb(a){this.a=a},
ad:function ad(){},
c0:function c0(){},
c1:function c1(){},
c2:function c2(){},
cs:function cs(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
eu:function eu(a){this.b=a},
em:function em(a,b,c){this.a=a
this.b=b
this.c=c},
en:function en(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
eg:function eg(a,b){this.a=a
this.c=b},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
ey:function ey(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
mv(a){throw A.M(new A.bT("Field '"+a+"' has been assigned during initialization."),new Error())},
c(){throw A.M(A.fg(""),new Error())},
aM(){throw A.M(A.kq(""),new Error())},
iR(){var t=new A.fH()
return t.b=t},
fH:function fH(){this.b=null},
bw(a,b,c){},
E(a){return a},
kv(a,b,c){A.bw(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
kw(a){return new Float32Array(a)},
kx(a,b,c){A.bw(a,b,c)
c=B.b.aV(a.byteLength-b,4)
return new Float32Array(a,b,c)},
ky(a){return new Int8Array(A.E(a))},
kz(a,b,c){A.bw(a,b,c)
c=B.b.aV(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
kA(a){return new Uint8Array(a)},
kB(a,b,c){A.bw(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
aK(a,b,c){if(a>>>0!==a||a>=c)throw A.f(A.h3(b,a))},
eA(a,b,c){var t
if(!(a>>>0!==a))if(b==null)t=a>c
else t=b>>>0!==b||a>b||b>c
else t=!0
if(t)throw A.f(A.lZ(a,b,c))
if(b==null)return c
return b},
aW:function aW(){},
b8:function b8(){},
cB:function cB(){},
fV:function fV(a){this.a=a},
dT:function dT(){},
Q:function Q(){},
aX:function aX(){},
a6:function a6(){},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
b9:function b9(){},
d_:function d_(){},
d0:function d0(){},
d1:function d1(){},
d2:function d2(){},
hO(a,b){var t=b.c
return t==null?b.c=A.d5(a,"is",[b.x]):t},
iL(a){var t=a.w
if(t===6||t===7)return A.iL(a.x)
return t===11||t===12},
kH(a){return a.as},
mn(a,b){var t,s=b.length
for(t=0;t<s;++t)if(!a[t].b(b[t]))return!1
return!0},
ap(a){return A.fU(v.typeUniverse,a,!1)},
bx(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.bx(a0,t,a2,a3)
if(s===t)return a1
return A.iZ(a0,s,!0)
case 7:t=a1.x
s=A.bx(a0,t,a2,a3)
if(s===t)return a1
return A.iY(a0,s,!0)
case 8:r=a1.y
q=A.c4(a0,r,a2,a3)
if(q===r)return a1
return A.d5(a0,a1.x,q)
case 9:p=a1.x
o=A.bx(a0,p,a2,a3)
n=a1.y
m=A.c4(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.hT(a0,o,m)
case 10:l=a1.x
k=a1.y
j=A.c4(a0,k,a2,a3)
if(j===k)return a1
return A.j_(a0,l,j)
case 11:i=a1.x
h=A.bx(a0,i,a2,a3)
g=a1.y
f=A.lJ(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.iX(a0,h,f)
case 12:e=a1.y
a3+=e.length
d=A.c4(a0,e,a2,a3)
p=a1.x
o=A.bx(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.hU(a0,o,d,!0)
case 13:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.f(A.dd("Attempted to substitute unexpected RTI kind "+a))}},
c4(a,b,c,d){var t,s,r,q,p=b.length,o=A.fW(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.bx(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
lK(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.fW(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.bx(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
lJ(a,b,c,d){var t,s=b.a,r=A.c4(a,s,c,d),q=b.b,p=A.c4(a,q,c,d),o=b.c,n=A.lK(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.ep()
t.a=r
t.b=p
t.c=n
return t},
k(a,b){a[v.arrayRti]=b
return a},
jh(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.mb(t)
return a.$S()}return null},
mf(a,b){var t
if(A.iL(b))if(a instanceof A.aP){t=A.jh(a)
if(t!=null)return t}return A.az(a)},
az(a){if(a instanceof A.A)return A.j(a)
if(Array.isArray(a))return A.X(a)
return A.hY(J.bB(a))},
X(a){var t=a[v.arrayRti],s=u.u
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
j(a){var t=a.$ti
return t!=null?t:A.hY(a)},
hY(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.lq(a,t)},
lq(a,b){var t=a instanceof A.aP?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.l5(v.typeUniverse,t.name)
b.$ccache=s
return s},
mb(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.fU(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
ma(a){return A.bA(A.j(a))},
i0(a){var t
if(a instanceof A.ad)return A.m4(a.$r,a.bN())
t=a instanceof A.aP?A.jh(a):null
if(t!=null)return t
if(u.dm.b(a))return J.jW(a).a
if(Array.isArray(a))return A.X(a)
return A.az(a)},
bA(a){var t=a.r
return t==null?a.r=new A.ez(a):t},
m4(a,b){var t,s,r=b,q=r.length
if(q===0)return u.bQ
if(0>=q)return A.a(r,0)
t=A.d7(v.typeUniverse,A.i0(r[0]),"@<0>")
for(s=1;s<q;++s){if(!(s<r.length))return A.a(r,s)
t=A.j1(v.typeUniverse,t,A.i0(r[s]))}return A.d7(v.typeUniverse,t,a)},
ar(a){return A.bA(A.fU(v.typeUniverse,a,!1))},
lp(a){var t=this
t.b=A.lI(t)
return t.b(a)},
lI(a){var t,s,r,q,p
if(a===u.K)return A.ly
if(A.bC(a))return A.lC
t=a.w
if(t===6)return A.ln
if(t===1)return A.ja
if(t===7)return A.lt
s=A.lH(a)
if(s!=null)return s
if(t===8){r=a.x
if(a.y.every(A.bC)){a.f="$i"+r
if(r==="r")return A.lw
if(a===u.m)return A.lv
return A.lB}}else if(t===10){q=A.lY(a.x,a.y)
p=q==null?A.ja:q
return p==null?A.hW(p):p}return A.ll},
lH(a){if(a.w===8){if(a===u.S)return A.d9
if(a===u.i||a===u.o)return A.lx
if(a===u.N)return A.lA
if(a===u.y)return A.hZ}return null},
lo(a){var t=this,s=A.lk
if(A.bC(t))s=A.lc
else if(t===u.K)s=A.hW
else if(A.c7(t)){s=A.lm
if(t===u.h6)s=A.la
else if(t===u.dk)s=A.j5
else if(t===u.fQ)s=A.l8
else if(t===u.cg)s=A.j4
else if(t===u.cD)s=A.l9
else if(t===u.z)s=A.lb}else if(t===u.S)s=A.t
else if(t===u.N)s=A.Y
else if(t===u.y)s=A.l7
else if(t===u.o)s=A.d8
else if(t===u.i)s=A.c3
else if(t===u.m)s=A.hV
t.a=s
return t.a(a)},
ll(a){var t=this
if(a==null)return A.c7(t)
return A.mg(v.typeUniverse,A.mf(a,t),t)},
ln(a){if(a==null)return!0
return this.x.b(a)},
lB(a){var t,s=this
if(a==null)return A.c7(s)
t=s.f
if(a instanceof A.A)return!!a[t]
return!!J.bB(a)[t]},
lw(a){var t,s=this
if(a==null)return A.c7(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.A)return!!a[t]
return!!J.bB(a)[t]},
lv(a){var t=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.A)return!!a[t.f]
return!0}if(typeof a=="function")return!0
return!1},
j9(a){if(typeof a=="object"){if(a instanceof A.A)return u.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
lk(a){var t=this
if(a==null){if(A.c7(t))return a}else if(t.b(a))return a
throw A.M(A.j6(a,t),new Error())},
lm(a){var t=this
if(a==null||t.b(a))return a
throw A.M(A.j6(a,t),new Error())},
j6(a,b){return new A.d3("TypeError: "+A.iS(a,A.a8(b,null)))},
iS(a,b){return A.eX(a)+": type '"+A.a8(A.i0(a),null)+"' is not a subtype of type '"+b+"'"},
ae(a,b){return new A.d3("TypeError: "+A.iS(a,b))},
lt(a){var t=this
return t.x.b(a)||A.hO(v.typeUniverse,t).b(a)},
ly(a){return a!=null},
hW(a){if(a!=null)return a
throw A.M(A.ae(a,"Object"),new Error())},
lC(a){return!0},
lc(a){return a},
ja(a){return!1},
hZ(a){return!0===a||!1===a},
l7(a){if(!0===a)return!0
if(!1===a)return!1
throw A.M(A.ae(a,"bool"),new Error())},
l8(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.M(A.ae(a,"bool?"),new Error())},
c3(a){if(typeof a=="number")return a
throw A.M(A.ae(a,"double"),new Error())},
l9(a){if(typeof a=="number")return a
if(a==null)return a
throw A.M(A.ae(a,"double?"),new Error())},
d9(a){return typeof a=="number"&&Math.floor(a)===a},
t(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.M(A.ae(a,"int"),new Error())},
la(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.M(A.ae(a,"int?"),new Error())},
lx(a){return typeof a=="number"},
d8(a){if(typeof a=="number")return a
throw A.M(A.ae(a,"num"),new Error())},
j4(a){if(typeof a=="number")return a
if(a==null)return a
throw A.M(A.ae(a,"num?"),new Error())},
lA(a){return typeof a=="string"},
Y(a){if(typeof a=="string")return a
throw A.M(A.ae(a,"String"),new Error())},
j5(a){if(typeof a=="string")return a
if(a==null)return a
throw A.M(A.ae(a,"String?"),new Error())},
hV(a){if(A.j9(a))return a
throw A.M(A.ae(a,"JSObject"),new Error())},
lb(a){if(a==null)return a
if(A.j9(a))return a
throw A.M(A.ae(a,"JSObject?"),new Error())},
jb(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.a8(a[r],b)
return t},
lG(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.jb(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.a8(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
j7(a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", ",a1=null
if(a4!=null){t=a4.length
if(a3==null)a3=A.k([],u.s)
else a1=a3.length
s=a3.length
for(r=t;r>0;--r)B.c.L(a3,"T"+(s+r))
for(q=u.Q,p="<",o="",r=0;r<t;++r,o=a0){n=a3.length
m=n-1-r
if(!(m>=0))return A.a(a3,m)
p=p+o+a3[m]
l=a4[r]
k=l.w
if(!(k===2||k===3||k===4||k===5||l===q))p+=" extends "+A.a8(l,a3)}p+=">"}else p=""
q=a2.x
j=a2.y
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=A.a8(q,a3)
for(b="",a="",r=0;r<h;++r,a=a0)b+=a+A.a8(i[r],a3)
if(f>0){b+=a+"["
for(a="",r=0;r<f;++r,a=a0)b+=a+A.a8(g[r],a3)
b+="]"}if(d>0){b+=a+"{"
for(a="",r=0;r<d;r+=3,a=a0){b+=a
if(e[r+1])b+="required "
b+=A.a8(e[r+2],a3)+" "+e[r]}b+="}"}if(a1!=null){a3.toString
a3.length=a1}return p+"("+b+") => "+c},
a8(a,b){var t,s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=a.x
s=A.a8(t,b)
r=t.w
return(r===11||r===12?"("+s+")":s)+"?"}if(m===7)return"FutureOr<"+A.a8(a.x,b)+">"
if(m===8){q=A.lM(a.x)
p=a.y
return p.length>0?q+("<"+A.jb(p,b)+">"):q}if(m===10)return A.lG(a,b)
if(m===11)return A.j7(a,b,null)
if(m===12)return A.j7(a.x,b,a.y)
if(m===13){o=a.x
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.a(b,o)
return b[o]}return"?"},
lM(a){var t=A.jt(a)
if(t!=null)return t
return"minified:"+a},
l6(a,b){var t=a.tR[b]
while(typeof t=="string")t=a.tR[t]
return t},
l5(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.fU(a,b,!1)
else if(typeof n=="number"){t=n
s=A.d6(a,5,"#")
r=A.fW(t)
for(q=0;q<t;++q)r[q]=s
p=A.d5(a,b,r)
o[b]=p
return p}else return n},
l4(a,b){return A.j2(a.tR,b)},
l3(a,b){return A.j2(a.eT,b)},
fU(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.j0(a,null,b,!1)
s.set(b,t)
return t},
d7(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.j0(a,b,c,!0)
r.set(c,s)
return s},
j1(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.hT(a,b,c.w===9?c.y:[c])
q.set(t,r)
return r},
j0(a,b,c,d){return A.kW(A.kQ(a,b,c,d))},
b_(a,b){b.a=A.lo
b.b=A.lp
return b},
d6(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.an(null,null)
t.w=b
t.as=c
s=A.b_(a,t)
a.eC.set(c,s)
return s},
iZ(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.l1(a,b,s,c)
a.eC.set(s,t)
return t},
l1(a,b,c,d){var t,s,r
if(d){t=b.w
s=!0
if(!A.bC(b))if(!(b===u.b||b===u.T))if(t!==6)s=t===7&&A.c7(b.x)
if(s)return b
else if(t===1)return u.b}r=new A.an(null,null)
r.w=6
r.x=b
r.as=c
return A.b_(a,r)},
iY(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.l_(a,b,s,c)
a.eC.set(s,t)
return t},
l_(a,b,c,d){var t,s
if(d){t=b.w
if(A.bC(b)||b===u.K)return b
else if(t===1)return A.d5(a,"is",[b])
else if(b===u.b||b===u.T)return u.eH}s=new A.an(null,null)
s.w=7
s.x=b
s.as=c
return A.b_(a,s)},
l2(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.an(null,null)
t.w=13
t.x=b
t.as=r
s=A.b_(a,t)
a.eC.set(r,s)
return s},
d4(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
kZ(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
d5(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.d4(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.an(null,null)
s.w=8
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.b_(a,s)
a.eC.set(q,r)
return r},
hT(a,b,c){var t,s,r,q,p,o
if(b.w===9){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.d4(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.an(null,null)
p.w=9
p.x=t
p.y=s
p.as=r
o=A.b_(a,p)
a.eC.set(r,o)
return o},
j_(a,b,c){var t,s,r="+"+(b+"("+A.d4(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.an(null,null)
t.w=10
t.x=b
t.y=c
t.as=r
s=A.b_(a,t)
a.eC.set(r,s)
return s},
iX(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.d4(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.d4(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.kZ(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.an(null,null)
q.w=11
q.x=b
q.y=c
q.as=s
p=A.b_(a,q)
a.eC.set(s,p)
return p},
hU(a,b,c,d){var t,s=b.as+("<"+A.d4(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.l0(a,b,c,s,d)
a.eC.set(s,t)
return t},
l0(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.fW(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.bx(a,b,s,0)
n=A.c4(a,c,s,0)
return A.hU(a,o,n,c!==n)}}m=new A.an(null,null)
m.w=12
m.x=b
m.y=c
m.as=d
return A.b_(a,m)},
kQ(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
kW(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.kS(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.iV(a,s,m,l,!1)
else if(r===46)s=A.iV(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.bt(a.u,a.e,l.pop()))
break
case 94:l.push(A.l2(a.u,l.pop()))
break
case 35:l.push(A.d6(a.u,5,"#"))
break
case 64:l.push(A.d6(a.u,2,"@"))
break
case 126:l.push(A.d6(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.kU(a,l)
break
case 38:A.kT(a,l)
break
case 63:q=a.u
l.push(A.iZ(q,A.bt(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.iY(q,A.bt(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.kR(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.iW(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.kX(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.bt(a.u,a.e,n)},
kS(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
iV(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===9)p=p.x
o=A.l6(t,p.x)[q]
if(o==null)A.aL('No "'+q+'" in "'+A.kH(p)+'"')
d.push(A.d7(t,p,o))}else d.push(q)
return n},
kU(a,b){var t,s=a.u,r=A.iU(a,b),q=b.pop()
if(typeof q=="string")b.push(A.d5(s,q,r))
else{t=A.bt(s,a.e,q)
switch(t.w){case 11:b.push(A.hU(s,t,r,a.n))
break
default:b.push(A.hT(s,t,r))
break}}},
kR(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
if(typeof p=="number")switch(p){case-1:o=b.pop()
break
case-2:n=b.pop()
break
default:b.push(p)
break}else b.push(p)
t=A.iU(a,b)
p=b.pop()
switch(p){case-3:p=b.pop()
if(o==null)o=q.sEA
if(n==null)n=q.sEA
s=A.bt(q,a.e,p)
r=new A.ep()
r.a=t
r.b=o
r.c=n
b.push(A.iX(q,s,r))
return
case-4:b.push(A.j_(q,b.pop(),t))
return
default:throw A.f(A.dd("Unexpected state under `()`: "+A.x(p)))}},
kT(a,b){var t=b.pop()
if(0===t){b.push(A.d6(a.u,1,"0&"))
return}if(1===t){b.push(A.d6(a.u,4,"1&"))
return}throw A.f(A.dd("Unexpected extended operation "+A.x(t)))},
iU(a,b){var t=b.splice(a.p)
A.iW(a.u,a.e,t)
a.p=b.pop()
return t},
bt(a,b,c){if(typeof c=="string")return A.d5(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.kV(a,b,c)}else return c},
iW(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.bt(a,b,c[t])},
kX(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.bt(a,b,c[t])},
kV(a,b,c){var t,s,r=b.w
if(r===9){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==8)throw A.f(A.dd("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.f(A.dd("Bad index "+c+" for "+b.D(0)))},
mg(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.J(a,b,null,c,null)
s.set(c,t)}return t},
J(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(A.bC(d))return!0
t=b.w
if(t===4)return!0
if(A.bC(b))return!1
if(b.w===1)return!0
s=t===13
if(s)if(A.J(a,c[b.x],c,d,e))return!0
r=d.w
q=u.b
if(b===q||b===u.T){if(r===7)return A.J(a,b,c,d.x,e)
return d===q||d===u.T||r===6}if(d===u.K){if(t===7)return A.J(a,b.x,c,d,e)
return t!==6}if(t===7){if(!A.J(a,b.x,c,d,e))return!1
return A.J(a,A.hO(a,b),c,d,e)}if(t===6)return A.J(a,q,c,d,e)&&A.J(a,b.x,c,d,e)
if(r===7){if(A.J(a,b,c,d.x,e))return!0
return A.J(a,b,c,A.hO(a,d),e)}if(r===6)return A.J(a,b,c,q,e)||A.J(a,b,c,d.x,e)
if(s)return!1
q=t!==11
if((!q||t===12)&&d===u.Z)return!0
p=t===10
if(p&&d===u.gT)return!0
if(r===12){if(b===u.O)return!0
if(t!==12)return!1
o=b.y
n=d.y
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.J(a,k,c,j,e)||!A.J(a,j,e,k,c))return!1}return A.j8(a,b.x,c,d.x,e)}if(r===11){if(b===u.O)return!0
if(q)return!1
return A.j8(a,b,c,d,e)}if(t===8){if(r!==8)return!1
return A.lu(a,b,c,d,e)}if(p&&r===10)return A.lz(a,b,c,d,e)
return!1},
j8(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.J(a2,a3.x,a4,a5.x,a6))return!1
t=a3.y
s=a5.y
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.J(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.J(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.J(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.J(a2,f[b+2],a6,h,a4))return!1
break}}while(c<e){if(g[c+1])return!1
c+=3}return!0},
lu(a,b,c,d,e){var t,s,r,q,p,o=b.x,n=d.x
while(o!==n){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.d7(a,b,s[p])
return A.j3(a,q,null,c,d.y,e)}return A.j3(a,b.y,null,c,d.y,e)},
j3(a,b,c,d,e,f){var t,s=b.length
for(t=0;t<s;++t)if(!A.J(a,b[t],d,e[t],f))return!1
return!0},
lz(a,b,c,d,e){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.J(a,s[t],c,r[t],e))return!1
return!0},
c7(a){var t=a.w,s=!0
if(!(a===u.b||a===u.T))if(!A.bC(a))if(t!==6)s=t===7&&A.c7(a.x)
return s},
bC(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.Q},
j2(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
fW(a){return a>0?new Array(a):v.typeUniverse.sEA},
an:function an(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
ep:function ep(){this.c=this.b=this.a=null},
ez:function ez(a){this.a=a},
eo:function eo(){},
d3:function d3(a){this.a=a},
ef:function ef(){},
kr(a,b){return new A.ak(a.l("@<0>").b0(b).l("ak<1,2>"))},
ks(a,b,c){return b.l("@<0>").b0(c).l("hB<1,2>").a(A.jk(a,new A.ak(b.l("@<0>").b0(c).l("ak<1,2>"))))},
ab(a,b){return new A.ak(a.l("@<0>").b0(b).l("ak<1,2>"))},
kk(a,b){var t=J.b1(a.a)
if(new A.br(t,a.b,a.$ti.l("br<1>")).v())return t.gE()
return null},
hC(a,b,c){var t=A.kr(b,c)
a.aF(0,new A.fl(t,b,c))
return t},
hD(a){var t,s
if(A.i5(a))return"{...}"
t=new A.cS("")
try{s={}
B.c.L($.a9,a)
t.a+="{"
s.a=!0
a.aF(0,new A.fm(s,t))
t.a+="}"}finally{if(0>=$.a9.length)return A.a($.a9,-1)
$.a9.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
fl:function fl(a,b,c){this.a=a
this.b=b
this.c=c},
w:function w(){},
L:function L(){},
fm:function fm(a,b){this.a=a
this.b=b},
bX:function bX(){},
lF(a,b){var t,s,r,q=null
try{q=JSON.parse(a)}catch(s){t=A.eE(s)
r=A.aD(String(t),null,null)
throw A.f(r)}r=A.h0(q)
return r},
h0(a){var t
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.er(a,Object.create(null))
for(t=0;t<a.length;++t)a[t]=A.h0(a[t])
return a},
kM(a,b,c,d,e,a0){var t,s,r,q,p,o,n,m,l,k,j="Invalid encoding before padding",i="Invalid character",h=B.b.I(a0,2),g=a0&3,f=$.jK()
for(t=a.length,s=f.length,r=d.$flags|0,q=b,p=0;q<c;++q){if(!(q<t))return A.a(a,q)
o=a.charCodeAt(q)
p|=o
n=o&127
if(!(n<s))return A.a(f,n)
m=f[n]
if(m>=0){h=(h<<6|m)&16777215
g=g+1&3
if(g===0){l=e+1
r&2&&A.b(d)
n=d.length
if(!(e<n))return A.a(d,e)
d[e]=h>>>16&255
e=l+1
if(!(l<n))return A.a(d,l)
d[l]=h>>>8&255
l=e+1
if(!(e<n))return A.a(d,e)
d[e]=h&255
e=l
h=0}continue}else if(m===-1&&g>1){if(p>127)break
if(g===3){if((h&3)!==0)throw A.f(A.aD(j,a,q))
l=e+1
r&2&&A.b(d)
t=d.length
if(!(e<t))return A.a(d,e)
d[e]=h>>>10
if(!(l<t))return A.a(d,l)
d[l]=h>>>2}else{if((h&15)!==0)throw A.f(A.aD(j,a,q))
r&2&&A.b(d)
if(!(e<d.length))return A.a(d,e)
d[e]=h>>>4}k=(3-g)*3
if(o===37)k+=2
return A.iQ(a,q+1,c,-k-1)}throw A.f(A.aD(i,a,q))}if(p>=0&&p<=127)return(h<<2|g)>>>0
for(q=b;q<c;++q){if(!(q<t))return A.a(a,q)
if(a.charCodeAt(q)>127)break}throw A.f(A.aD(i,a,q))},
kK(a,b,c,d){var t=A.kL(a,b,c),s=(d&3)+(t-b),r=B.b.I(s,2)*3,q=s&3
if(q!==0&&t<c)r+=q-1
if(r>0)return new Uint8Array(r)
return $.jJ()},
kL(a,b,c){var t,s=a.length,r=c,q=r,p=0
for(;;){if(!(q>b&&p<2))break
A:{--q
if(!(q>=0&&q<s))return A.a(a,q)
t=a.charCodeAt(q)
if(t===61){++p
r=q
break A}if((t|32)===100){if(q===b)break;--q
if(!(q>=0&&q<s))return A.a(a,q)
t=a.charCodeAt(q)}if(t===51){if(q===b)break;--q
if(!(q>=0&&q<s))return A.a(a,q)
t=a.charCodeAt(q)}if(t===37){++p
r=q
break A}break}}return r},
iQ(a,b,c,d){var t,s,r
if(b===c)return d
t=-d-1
for(s=a.length;t>0;){if(!(b<s))return A.a(a,b)
r=a.charCodeAt(b)
if(t===3){if(r===61){t-=3;++b
break}if(r===37){--t;++b
if(b===c)break
if(!(b<s))return A.a(a,b)
r=a.charCodeAt(b)}else break}if((t>3?t-3:t)===2){if(r!==51)break;++b;--t
if(b===c)break
if(!(b<s))return A.a(a,b)
r=a.charCodeAt(b)}if((r|32)!==100)break;++b;--t
if(b===c)break}if(b!==c)throw A.f(A.aD("Invalid padding character",a,b))
return-t-1},
er:function er(a,b){this.a=a
this.b=b
this.c=null},
es:function es(a){this.a=a},
fT:function fT(){},
fS:function fS(){},
eG:function eG(){},
eI:function eI(){},
eH:function eH(){},
fG:function fG(){this.a=0},
b3:function b3(){},
dx:function dx(){},
dy:function dy(){},
dO:function dO(){},
ff:function ff(a){this.a=a},
dP:function dP(){},
fi:function fi(){},
fh:function fh(a){this.a=a},
fj:function fj(){},
dR(a,b,c,d){var t,s=J.km(a,d)
if(a!==0&&b!=null)for(t=0;t<a;++t)s[t]=b
return s},
kt(a,b,c){var t,s,r=A.k([],c.l("u<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.D)(a),++s)B.c.L(r,c.a(a[s]))
r.$flags=1
return r},
n(a,b){var t,s
if(Array.isArray(a))return A.k(a.slice(0),b.l("u<0>"))
t=A.k([],b.l("u<0>"))
for(s=J.b1(a);s.v();)B.c.L(t,s.gE())
return t},
fz(a,b,c){var t,s,r,q,p
A.cN(b,"start")
t=c==null
s=!t
if(s){r=c-b
if(r<0)throw A.f(A.a_(c,b,null,"end",null))
if(r===0)return""}if(Array.isArray(a)){q=a
p=q.length
if(t)c=p
return A.iJ(b>0||c<p?q.slice(b,c):q)}if(u.Y.b(a))return A.kI(a,b,c)
if(s)a=J.jZ(a,c)
if(b>0)a=J.jX(a,b)
t=A.n(a,u.S)
return A.iJ(t)},
kI(a,b,c){var t=a.length
if(b>=t)return""
return A.kF(a,b,c==null||c>t?t:c)},
iK(a){return new A.cs(a,A.iA(a,!1,!0,!1,!1,""))},
iN(a,b,c){var t=J.b1(b)
if(!t.v())return a
if(c.length===0){do a+=A.x(t.gE())
while(t.v())}else{a+=A.x(t.gE())
while(t.v())a=a+c+A.x(t.gE())}return a},
eX(a){if(typeof a=="number"||A.hZ(a)||a==null)return J.aO(a)
if(typeof a=="string")return JSON.stringify(a)
return A.iH(a)},
dd(a){return new A.dc(a)},
db(a){return new A.at(!1,null,null,a)},
k_(a,b,c){return new A.at(!0,a,b,c)},
a_(a,b,c,d,e){return new A.cM(b,c,!0,a,d,"Invalid value")},
bp(a,b,c){if(0>a||a>c)throw A.f(A.a_(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.f(A.a_(b,a,c,"end",null))
return b}return c},
cN(a,b){if(a<0)throw A.f(A.a_(a,0,null,b,null))
return a},
ht(a,b,c,d){return new A.dF(b,!0,a,d,"Index out of range")},
bZ(a){return new A.cW(a)},
iP(a){return new A.ek(a)},
iM(a){return new A.cR(a)},
ai(a){return new A.dv(a)},
aD(a,b,c){return new A.bH(a,b,c)},
kl(a,b,c){var t,s
if(A.i5(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.k([],u.s)
B.c.L($.a9,a)
try{A.lD(a,t)}finally{if(0>=$.a9.length)return A.a($.a9,-1)
$.a9.pop()}s=A.iN(b,u.k.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
hy(a,b,c){var t,s
if(A.i5(a))return b+"..."+c
t=new A.cS(b)
B.c.L($.a9,a)
try{s=t
s.a=A.iN(s.a,a,", ")}finally{if(0>=$.a9.length)return A.a($.a9,-1)
$.a9.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
lD(a,b){var t,s,r,q,p,o,n,m=a.gA(a),l=0,k=0
for(;;){if(!(l<80||k<3))break
if(!m.v())return
t=A.x(m.gE())
B.c.L(b,t)
l+=t.length+2;++k}if(!m.v()){if(k<=5)return
if(0>=b.length)return A.a(b,-1)
s=b.pop()
if(0>=b.length)return A.a(b,-1)
r=b.pop()}else{q=m.gE();++k
if(!m.v()){if(k<=4){B.c.L(b,A.x(q))
return}s=A.x(q)
if(0>=b.length)return A.a(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gE();++k
for(;m.v();q=p,p=o){o=m.gE();++k
if(k>100){for(;;){if(!(l>75&&k>3))break
if(0>=b.length)return A.a(b,-1)
l-=b.pop().length+2;--k}B.c.L(b,"...")
return}}r=A.x(q)
s=A.x(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
for(;;){if(!(l>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)B.c.L(b,n)
B.c.L(b,r)
B.c.L(b,s)},
hE(a,b,c,d){var t
if(B.E===c){t=B.b.gG(a)
b=J.aA(b)
return A.fA(A.aI(A.aI($.eF(),t),b))}if(B.E===d){t=B.b.gG(a)
b=J.aA(b)
c=J.aA(c)
return A.fA(A.aI(A.aI(A.aI($.eF(),t),b),c))}t=B.b.gG(a)
b=J.aA(b)
c=J.aA(c)
d=J.aA(d)
d=A.fA(A.aI(A.aI(A.aI(A.aI($.eF(),t),b),c),d))
return d},
o(a){var t,s,r=$.eF()
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.D)(a),++s)r=A.aI(r,J.aA(a[s]))
return A.fA(r)},
fI:function fI(){},
F:function F(){},
dc:function dc(a){this.a=a},
cU:function cU(){},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cM:function cM(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dF:function dF(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cW:function cW(a){this.a=a},
ek:function ek(a){this.a=a},
cR:function cR(a){this.a=a},
dv:function dv(a){this.a=a},
dW:function dW(){},
cQ:function cQ(){},
fJ:function fJ(a){this.a=a},
bH:function bH(a,b,c){this.a=a
this.b=b
this.c=c},
d:function d(){},
aV:function aV(a,b,c){this.a=a
this.b=b
this.$ti=c},
ba:function ba(){},
A:function A(){},
e8:function e8(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
cS:function cS(a){this.a=a},
dE(a){var t=new A.f4()
t.dY(a)
return t},
f4:function f4(){this.a=$
this.b=0
this.c=2147483647},
fE:function fE(){},
fX:function fX(){},
fF:function fF(){},
fY:function fY(){},
kd(a,b,c,d){var t=A.hR(),s=A.hR(),r=A.hR(),q=new Uint16Array(16),p=new Uint32Array(573),o=new Uint8Array(573)
t=new A.eV(a,c,t,s,r,q,p,o)
t.eu(b,d)
t.ec(B.M)
return t},
ip(a,b,c,d){var t,s=b*2,r=a.length
if(!(s>=0&&s<r))return A.a(a,s)
s=a[s]
t=c*2
if(!(t>=0&&t<r))return A.a(a,t)
t=a[t]
if(s>=t)if(s===t){if(!(b>=0&&b<573))return A.a(d,b)
s=d[b]
if(!(c>=0&&c<573))return A.a(d,c)
s=s<=d[c]}else s=!1
else s=!0
return s},
hR(){return new A.fK()},
kN(a,b,c){var t,s,r,q,p,o,n,m=new Uint16Array(16)
for(t=0,s=1;s<=15;++s){t=t+c[s-1]<<1>>>0
if(!(s<16))return A.a(m,s)
m[s]=t}for(r=a.length,q=0;q<=b;++q){p=q*2
o=p+1
if(!(o<r))return A.a(a,o)
n=a[o]
if(n===0)continue
if(!(n<16))return A.a(m,n)
o=m[n]
if(!(n<16))return A.a(m,n)
m[n]=o+1
o=A.kO(o,n)
a.$flags&2&&A.b(a)
if(!(p<r))return A.a(a,p)
a[p]=o}},
kO(a,b){var t,s=0
do{t=A.a0(a,1)
s=(s|a&1)<<1>>>0
if(--b,b>0){a=t
continue}else break}while(!0)
return A.a0(s,1)},
iT(a){var t
if(a<256){if(!(a>=0))return A.a(B.U,a)
t=B.U[a]}else{t=256+A.a0(a,7)
if(!(t<512))return A.a(B.U,t)
t=B.U[t]}return t},
hS(a,b,c,d,e){return new A.fR(a,b,c,d,e)},
a0(a,b){if(a>=0)return B.b.c2(a,b)
else return B.b.c2(a,b)+B.b.cl(2,(~b>>>0)+65536&65535)},
c_:function c_(a,b){this.a=a
this.b=b},
eV:function eV(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=null
_.e=_.d=0
_.x=_.w=_.r=_.f=$
_.y=2
_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=$
_.k1=0
_.p3=_.p2=_.p1=_.ok=_.k4=_.k3=_.k2=$
_.p4=c
_.R8=d
_.RG=e
_.rx=f
_.ry=g
_.x1=_.to=$
_.x2=h
_.am=_.al=_.bz=_.bU=_.bo=_.aX=_.bT=_.y2=_.y1=_.xr=$},
ac:function ac(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fK:function fK(){this.c=this.b=this.a=$},
fR:function fR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fa:function fa(a,b){var _=this
_.a=a
_.b=null
_.c=b
_.e=_.d=0},
df:function df(a,b){this.a=a
this.b=b},
fc(a,b,c,d){var t,s,r=new A.dG(b)
if(d==null)d=0
if(c==null)c=a.length-d
t=a.length
if(d+c>t)c=t-d
s=u.F.b(a)?a:new Uint8Array(A.E(a))
t=J.N(B.h.gF(s),s.byteOffset+d,c)
r.b=t
r.d=t.length
return r},
dG:function dG(a){var _=this
_.b=null
_.c=0
_.d=$
_.a=a},
dH:function dH(){},
iE(a,b){var t=b==null?32768:b
return new A.cG(new Uint8Array(t),a)},
cG:function cG(a,b){this.b=0
this.c=a
this.a=b},
dY:function dY(){},
eJ:function eJ(a,b){this.a=a
this.b=b},
B:function B(a){this.a=-1
this.b=a},
au:function au(a,b){this.a=a
this.b=b},
di:function di(a){this.a=a},
dj:function dj(a){this.a=a},
dk:function dk(a){this.a=a},
dl:function dl(a){this.a=a},
dm:function dm(a){this.a=a},
dn:function dn(a){this.a=a},
dq:function dq(a,b){this.a=a
this.b=b},
dr:function dr(a){this.a=a},
ds:function ds(a,b){this.a=a
this.b=b},
dt:function dt(a){this.a=a},
du:function du(a,b){this.a=a
this.b=b},
c9:function c9(a){this.a=a},
dp:function dp(a){this.a=a},
c8:function c8(a){this.a=a},
eC(a,b,c){var t
if(b===c)return a
switch(b.a){case 0:if(a===0)t=0
else{t=B.aC.i(0,c)
t.toString}return t
case 1:switch(c.a){case 0:return a===0?0:1
case 1:return a
case 2:return a*5
case 3:return a*75
case 4:return a*21845
case 5:return a*1431655765
case 6:return a*42
case 7:return a*10922
case 8:return a*715827882
case 9:case 10:case 11:return a/3}break
case 2:switch(c.a){case 0:return a===0?0:1
case 1:return B.b.I(A.t(a),1)
case 2:return a
case 3:return a*17
case 4:return a*4369
case 5:return a*286331153
case 6:return a*8
case 7:return a*2184
case 8:return a*143165576
case 9:case 10:case 11:return a/3}break
case 3:switch(c.a){case 0:return a===0?0:1
case 1:return B.b.I(A.t(a),6)
case 2:return B.b.I(A.t(a),4)
case 3:return a
case 4:return a*257
case 5:return a*16843009
case 6:return B.b.I(A.t(a),1)
case 7:return a*128
case 8:return a*8421504
case 9:case 10:case 11:return a/255}break
case 4:switch(c.a){case 0:return a===0?0:1
case 1:return B.b.I(A.t(a),14)
case 2:return B.b.I(A.t(a),12)
case 3:return B.b.I(A.t(a),8)
case 4:return a
case 5:return A.t(a)<<8>>>0
case 6:return B.b.I(A.t(a),9)
case 7:return B.b.I(A.t(a),1)
case 8:return a*524296
case 9:case 10:case 11:return a/65535}break
case 5:switch(c.a){case 0:return a===0?0:1
case 1:return B.b.I(A.t(a),30)
case 2:return B.b.I(A.t(a),28)
case 3:return B.b.I(A.t(a),24)
case 4:return B.b.I(A.t(a),16)
case 5:return a
case 6:return B.b.I(A.t(a),25)
case 7:return B.b.I(A.t(a),17)
case 8:return B.b.I(A.t(a),1)
case 9:case 10:case 11:return a/4294967295}break
case 6:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.b.I(A.t(a),5)
case 2:return a<=0?0:B.b.I(A.t(a),3)
case 3:return a<=0?0:A.t(a)<<1>>>0
case 4:return a<=0?0:A.t(a)*516
case 5:return a<=0?0:A.t(a)*33818640
case 6:return a
case 7:return a*258
case 8:return a*16909320
case 9:case 10:case 11:return a/127}break
case 7:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.b.I(A.t(a),15)
case 2:return a<=0?0:B.b.I(A.t(a),11)
case 3:return a<=0?0:B.b.I(A.t(a),7)
case 4:return a<=0?0:A.t(a)<<1>>>0
case 5:return a<=0?0:A.t(a)*131076
case 6:return B.b.I(A.t(a),8)
case 7:return a
case 8:return A.t(a)*65538
case 9:case 10:case 11:return a/32767}break
case 8:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.b.I(A.t(a),29)
case 2:return a<=0?0:B.b.I(A.t(a),27)
case 3:return a<=0?0:B.b.I(A.t(a),23)
case 4:return a<=0?0:B.b.I(A.t(a),16)
case 5:return a<=0?0:A.t(a)<<1>>>0
case 6:return B.b.I(A.t(a),24)
case 7:return B.b.I(A.t(a),16)
case 8:return a
case 9:case 10:case 11:return a/2147483647}break
case 9:case 10:case 11:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.h(B.a.u(a,0,1)*3)
case 2:return B.a.h(B.a.u(a,0,1)*15)
case 3:return B.a.h(B.a.u(a,0,1)*255)
case 4:return B.a.h(B.a.u(a,0,1)*65535)
case 5:return B.a.h(B.a.u(a,0,1)*4294967295)
case 6:return B.a.h(a<0?B.a.u(a,-1,1)*128:B.a.u(a,-1,1)*127)
case 7:return B.a.h(a<0?B.a.u(a,-1,1)*32768:B.a.u(a,-1,1)*32767)
case 8:return B.a.h(a<0?B.a.u(a,-1,1)*2147483648:B.a.u(a,-1,1)*2147483647)
case 9:case 10:case 11:return a}break}},
W:function W(a,b){this.a=a
this.b=b},
de:function de(a,b){this.a=a
this.b=b},
hm(a){var t,s=new A.dz(A.ab(u.N,u.P))
s.dZ(a)
t=a.b
if(t!=null)s.b=new Uint8Array(A.E(t))
return s},
dz:function dz(a){this.b=null
this.a=a},
e(a,b,c){return new A.dA(a)},
dA:function dA(a){this.a=a},
bJ:function bJ(a){this.a=a},
f6:function f6(a){this.a=a},
it(a){var t=new A.b5(A.ab(u.S,u.r),new A.bJ(A.ab(u.N,u.P)))
t.eZ(a)
return t},
b5:function b5(a,b){this.a=a
this.b=b},
f7:function f7(a){this.a=a},
f8:function f8(a){this.a=a},
aS:function aS(a,b){this.a=a
this.b=b},
eU:function eU(){},
eW:function eW(){},
bW:function bW(a,b){this.a=a
this.b=b},
cJ:function cJ(a,b){this.a=a
this.b=b},
cK:function cK(){},
dJ:function dJ(a,b,c,d,e,f,g,h,i){var _=this
_.y=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
aY:function aY(a,b){this.a=a
this.b=b},
ft:function ft(){},
fd:function fd(a,b,c){var _=this
_.c=_.b=_.a=0
_.d=-1
_.r=_.f=0
_.z=_.x=_.w=null
_.Q=""
_.at=null
_.ax=a
_.CW=1
_.cy=b
_.db=c},
fr:function fr(a){var _=this
_.a=a
_.c=_.b=0
_.d=$
_.e=0},
e3:function e3(a,b){this.a=a
this.b=b},
fs:function fs(a,b,c){var _=this
_.a=null
_.b=a
_.c=0
_.d=b
_.e=$
_.f=0
_.r=!1
_.w=null
_.z=c},
kj(a){return new A.ci(a.a,a.b,B.h.c5(a.c,0))},
f5:function f5(a,b){this.a=a
this.b=b},
ci:function ci(a,b,c){this.a=a
this.b=b
this.c=c},
hr(a,b,c,d,e,f,g,h,i,j,k,l){var t=new A.b6(null,null,null,a,h,e,d,0)
B.c.L(t.gah(),t)
t.cX(k,f,b,c,g,i,j,B.l,!1)
return t},
hs(a,b,c){var t,s,r,q=null,p=a.a
p=p==null?q:p.a_(c)
t=a.e
t=t==null?q:A.hm(t)
s=a.c
s=s==null?q:A.kj(s)
r=a.w
p=new A.b6(p,s,t,q,a.r,r,a.y,a.z)
p.e_(a,b,c)
return p},
f3:function f3(a,b){this.a=a
this.b=b},
b6:function b6(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=null
_.c=b
_.d=null
_.e=c
_.f=d
_.r=e
_.w=f
_.x=$
_.y=g
_.z=h},
O:function O(){},
cj:function cj(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
ck:function ck(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
cl:function cl(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
cm:function cm(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
cn:function cn(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
co:function co(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
bK:function bK(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
bL:function bL(a,b,c,d,e){var _=this
_.d=a
_.e=b
_.a=c
_.b=d
_.c=e},
bM:function bM(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
cp:function cp(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
bN:function bN(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
iv(a,b,c){return new A.bO(new Uint8Array(a*b*c),null,a,b,c)},
bO:function bO(a,b,c,d,e){var _=this
_.d=a
_.e=b
_.a=c
_.b=d
_.c=e},
cH:function cH(){},
cI:function cI(a,b,c){this.c=a
this.a=b
this.b=c},
bc:function bc(a,b,c){this.c=a
this.a=b
this.b=c},
hF(a){return new A.bd(-1,0,-a.c,a)},
bd:function bd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hG(a){return new A.be(-1,0,-a.c,a)},
be:function be(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hH(a){return new A.bf(-1,0,-a.c,a)},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hI(a){return new A.bg(-1,0,-a.c,a)},
bg:function bg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hJ(a){return new A.bh(-1,0,-a.c,a)},
bh:function bh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hK(a){return new A.bi(-1,0,-a.c,a)},
bi:function bi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
am(a,b,c,d,e){a.P(b-1,c)
return new A.dZ(a,b,b+d-1,c+e-1)},
dZ:function dZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
e_(a){return new A.bj(-1,0,0,-1,0,a)},
bj:function bj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hL(a){return new A.bk(-1,0,-a.c,a)},
bk:function bk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e0(a){return new A.bl(-1,0,0,-2,0,a)},
bl:function bl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hM(a){return new A.bm(-1,0,-a.c,a)},
bm:function bm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e1(a){return new A.bn(-1,0,0,-(a.c<<2>>>0),a)},
bn:function bn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hN(a){return new A.bo(-1,0,-a.c,a)},
bo:function bo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a7:function a7(){},
aw(a){return new A.f9(a)},
f9:function f9(a){this.a=a},
fb(a,b,c,d){var t=a.length,s=c==null?t:d+c
return new A.bP(a,d,Math.min(t,s),d,!0)},
iw(a){var t=a.a,s=a.d,r=t.length
return new A.bP(t,a.b,Math.min(r,a.c),s,!0)},
bP:function bP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dV:function dV(a){var _=this
_.a=$
_.b=10
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=a
_.ax=_.at=$},
bb(a,b){return new A.dX(!0,new Uint8Array(b))},
dX:function dX(a,b){this.a=0
this.b=a
this.c=b},
e6:function e6(){},
k8(a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=u.n,a1=A.k([0,0,0],a0),a2=A.k([1,1,1],a0)
for(a0=B.b2.b2(a3),t=a0.length,s=a,r=s,q=r,p=0,o=0,n=0;n<a0.length;a0.length===t||(0,A.D)(a0),++n){++o
m=B.k.c0(a0[n])
l=m.length
if(l===0||B.k.cI(m,"#"))continue
if(0>=l)return A.a(m,0)
k=m.charCodeAt(0)
if(!(k>=48&&k<=57||k===45||k===43||k===46)){if(s!=null&&p>0)throw A.f(A.a2("Unexpected text in the colour table (line "+o+")."))
j=B.k.fb(m,A.iK("\\s"))
l=j<0
i=l?m:B.k.b_(m,0,j)
h=l?"":B.k.c0(B.k.c6(m,j))
switch(i){case"TITLE":r=A.mt(h,'"',"")
break
case"LUT_3D_SIZE":g=A.kD(h,a)
if(g==null||g<2||g>65)throw A.f(B.bz)
if(q!=null)throw A.f(B.bH)
s=new Float32Array(g*g*g*3)
q=g
break
case"DOMAIN_MIN":a1=A.hl(h,o)
break
case"DOMAIN_MAX":a2=A.hl(h,o)
break
case"LUT_1D_SIZE":throw A.f(B.bF)
default:throw A.f(A.a2('Unknown keyword "'+(i.length>20?B.k.b_(i,0,20):i)+'" in .cube file.'))}continue}if(s==null)throw A.f(B.bv)
l=s.length
if(p>=l)throw A.f(B.bw)
g=A.hl(m,o)
if(0>=g.length)return A.a(g,0)
f=B.a.u(g[0],0,1)
s.$flags&2&&A.b(s)
s[p]=f
f=p+1
if(1>=g.length)return A.a(g,1)
e=B.a.u(g[1],0,1)
if(!(f<l))return A.a(s,f)
s[f]=e
e=p+2
if(2>=g.length)return A.a(g,2)
f=B.a.u(g[2],0,1)
if(!(e<l))return A.a(s,e)
s[e]=f
p+=3}if(q==null||s==null)throw A.f(B.bD)
if(p!==s.length)throw A.f(A.a2("The colour table has "+B.b.aV(p,3)+" rows; expected "+q*q*q+"."))
for(a0=a2.length,t=a1.length,d=0;d<3;++d){if(!(d<a0))return A.a(a2,d)
l=a2[d]
if(!(d<t))return A.a(a1,d)
if(!(l>a1[d]))throw A.f(B.bE)}c=B.c.dv(a1,new A.eL())&&B.c.dv(a2,new A.eM())
b=new A.cc(q,s)
return new A.I(c?b:b.eL(a1,a2),r)},
hl(a,b){var t,s,r,q,p=B.k.dU(a,A.iK("\\s+"))
if(p.length!==3)throw A.f(A.a2("Line "+b+" must have exactly 3 numbers."))
t=A.k([],u.n)
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.D)(p),++r){q=A.kC(p[r])
if(q==null||!isFinite(q))throw A.f(A.a2("Line "+b+" has an invalid number."))
B.c.L(t,q)}return t},
k7(a,b){var t,s,r,q,p,o,n
if(a<2||a>65)throw A.f(B.bx)
t=null
try{t=B.ab.b2(b)}catch(s){if(A.eE(s) instanceof A.bH)throw A.f(B.bB)
else throw s}r=a*a*a*3
if(J.aN(t)!==r*2)throw A.f(B.bG)
q=A.ik(t)
p=new Float32Array(r)
for(o=0;o<r;++o){n=q.getUint16(o*2,!0)
if(!(o<r))return A.a(p,o)
p[o]=n/65535}return new A.cc(a,p)},
cc:function cc(a,b){this.a=a
this.b=b},
eL:function eL(){},
eM:function eM(){},
eN:function eN(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eO:function eO(a,b,c){this.a=a
this.b=b
this.c=c},
kb(a,b,c){var t,s,r,q,p,o,n,m,l,k=a.a,j=a.b,i=b.a,h=i.a,g=i.b,f=Math.max(k/h,j/g),e=B.a6.i(0,b.b)
e.toString
t=b.c*c
s=new A.ev(i)
for(i=k/2,r=h/2,q=j/2,p=g/2,o=0;o<j;++o){n=(o+0.5-q)/f+p-0.5
for(m=o*k,l=0;l<k;++l){if(!s.cD((l+0.5-i)/f+r-0.5,n))continue
A.i2(a,m+l,e,s.b,s.c,s.d,s.e*t)}}},
kc(b2,b3,b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=b3.t(B.e),a7=b3.t(B.f),a8=Math.atan2(a7.b-a6.b,a7.a-a6.a),a9=Math.cos(a8),b0=Math.sin(a8),b1=Math.max(1,b3.t(B.e).J(0,b3.t(B.f)).gj(0))
switch(b4.b.a){case 0:t=b3.t(B.n)
s=b3.dn(B.n).a
r=Math.max(1,s[2]-s[0])*1.15
break
case 1:t=a6.ai(a7,0.5)
r=b1*2.3
break
case 2:t=b3.C(1)
r=b1*0.8
break
case 3:t=b3.t(B.A)
r=b3.C(61).J(0,b3.C(291)).gj(0)*1.5
break
case 4:t=b3.C(105).ai(b3.C(334),0.5).ai(b3.C(10),0.55)
r=b1*2
break
default:t=null
r=null}if(typeof r!=="number")return r.aQ()
r*=b4.c
s=b4.a
q=s.a
p=s.b
o=r*p/q
n=b4.d
m=t.a+b0*n*o
l=t.b+-a9*n*o
k=0.5*Math.sqrt(r*r+o*o)
j=Math.max(0,B.a.K(m-k))
n=b2.a
i=Math.min(n-1,B.a.Z(m+k))
h=Math.max(0,B.a.K(l-k))
g=Math.min(b2.b-1,B.a.Z(l+k))
f=new A.ev(s)
e=b4.e*b5
d=q/r
c=p/o
for(s=r/2,b=o/2,a=h;a<=g;++a)for(a0=a*n,a1=a+0.5-l,a2=a1*b0,a3=a1*a9,a4=j;a4<=i;++a4){a5=a4+0.5-m
if(!f.cD((a5*a9+a2+s)*d-0.5,(-a5*b0+a3+b)*c-0.5))continue
A.i2(b2,a0+a4,B.aD,f.b,f.c,f.d,f.e*e)}},
cd:function cd(a,b,c){this.a=a
this.b=b
this.c=c},
ev:function ev(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=0},
fQ:function fQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ka(a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b="cube",a=null
try{a=B.a_.co(a0,c)}catch(t){if(A.eE(t) instanceof A.bH)throw A.f(B.bo)
else throw t}s=A.eQ(a,"The filter file",B.dc)
if(!J.as(s.i(0,"format"),"photo-effects-filter"))throw A.f(B.bC)
if(!J.as(s.i(0,"version"),1))throw A.f(B.bl)
r=s.i(0,"name")
if(typeof r!="string")throw A.f(B.bp)
if(r.length>200)throw A.f(B.bs)
q=A.i9(r,A.i9(c,"My filter"))
if(s.a6("lut")){p=A.eQ(s.i(0,"lut"),'"lut"',B.de)
o=p.a6(b)
if(o===(p.a6("rgb16")||p.a6("size")))throw A.f(B.br)
if(p.a6(b)){n=p.i(0,b)
if(typeof n!="string")throw A.f(B.by)
m=A.k8(n).a}else{l=p.i(0,"size")
k=p.i(0,"rgb16")
if(!A.d9(l)||typeof k!="string")throw A.f(B.bq)
m=A.k7(l,k)}}else m=c
if(s.a6("overlay")){j=A.eQ(s.i(0,"overlay"),'"overlay"',B.db)
i=j.i(0,"blend")
if(i==null)i="normal"
if(typeof i!="string"||!B.a6.a6(i))throw A.f(A.a2('"overlay.blend" must be one of: '+B.a6.gaO().bA(0,", ")+"."))
h=new A.fp(A.io(j.i(0,"image"),'"overlay.image"'),i,A.eR(j.i(0,"opacity"),'"overlay.opacity"',0,1,1))}else h=c
if(s.a6("sticker")){g=A.eQ(s.i(0,"sticker"),'"sticker"',B.dd)
f=g.i(0,"anchor")
if(f==null)f="face"
o=u.X
e=A.kk(new A.cX(B.aq,u.fp.a(new A.eS(f)),u.dE),o)
if(e==null)throw A.f(A.a2('"sticker.anchor" must be one of: '+A.ku(B.aq,u.aY.a(new A.eT()),o,u.N).bA(0,", ")+"."))
d=new A.fy(A.io(g.i(0,"image"),'"sticker.image"'),e,A.eR(g.i(0,"scale"),'"sticker.scale"',0.2,3,1),A.eR(g.i(0,"offsetY"),'"sticker.offsetY"',-1,1,0),A.eR(g.i(0,"opacity"),'"sticker.opacity"',0,1,1))}else d=c
if(m==null&&h==null&&d==null)throw A.f(B.bt)
return new A.eP(q,m,h,d)},
eQ(a,b,c){var t,s
if(!u.eE.b(a))throw A.f(A.a2(b+" must be a JSON object."))
for(t=a.gaO(),t=t.gA(t);t.v();){s=t.gE()
if(!c.aE(0,s))throw A.f(A.a2(b+' has an unsupported field "'+A.i9(s.length>24?B.k.b_(s,0,24)+"...":s,"?")+'".'))}return a},
eR(a,b,c,d,e){if(a==null)return e
if(typeof a!="number"||!isFinite(a)||a<c||a>d)throw A.f(A.a2(b+" must be a number from "+A.x(c)+" to "+d+"."))
return a},
io(a,b){var t,s
if(typeof a!="string")throw A.f(A.a2(b+" must be an embedded PNG (data:image/png;base64,...)."))
if(!B.k.cI(a,"data:image/png;base64,"))throw A.f(A.a2(b+" must be an embedded PNG (data:image/png;base64,...). Links are not allowed."))
t=null
try{t=B.ab.b2(B.k.c6(a,22))}catch(s){if(A.eE(s) instanceof A.bH)throw A.f(A.a2(b+" is not valid base64."))
else throw s}return A.my(t)},
S:function S(a,b){this.a=a
this.b=b},
fp:function fp(a,b,c){this.a=a
this.b=b
this.c=c},
fy:function fy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eP:function eP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eS:function eS(a){this.a=a},
eT:function eT(){},
a2(a){return new A.z(a)},
i9(a,b){var t,s,r,q,p,o,n
if(a==null)return b
t=new A.cS("")
for(s=new A.e8(a),r=!1,q=0;s.v();){p=s.d
if(q>=40)break
if(p===32||p===9||p===10||p===13||p===160||p===12288){if(!r&&t.a.length!==0){t.a+=" ";++q}r=!0
continue}o=!0
if(p>=32)if(!(p>=127&&p<=159))if(p!==173)if(!(p>=8203&&p<=8207))if(!(p>=8232&&p<=8238))if(!(p>=8288&&p<=8303))if(p!==65279)if(!(p>=65520&&p<=65535))if(!(p>=917504&&p<=917631))o=p>=55296&&p<=57343
if(o)continue
o=A.iI(p)
t.a+=o;++q
r=!1}s=t.a
n=B.k.c0(s.charCodeAt(0)==0?s:s)
return n.length===0?b:n},
z:function z(a){this.a=a},
mi(a){var t
if(a.length<8)return!1
for(t=0;t<8;++t)if(a[t]!==B.ax[t])return!1
return!0},
mq(a){var t=a.length,s=t>=3
if(s&&a[0]===255&&a[1]===216&&a[2]===255)return"JPEG"
t=t>=12
if(t&&a[4]===102&&a[5]===116&&a[6]===121&&a[7]===112)return"HEIC/HEIF"
if(t&&a[0]===82&&a[1]===73&&a[2]===70&&a[3]===70&&a[8]===87&&a[9]===69&&a[10]===66&&a[11]===80)return"WebP"
if(s&&a[0]===71&&a[1]===73&&a[2]===70)return"GIF"
return null},
mo(a){var t,s,r,q,p,o,n,m,l,k
if(!A.mi(a))throw A.f(B.bm)
t=A.ik(a)
for(s=a.length,r=8,q=null,p=!1;o=r+8,o<=s;){n=t.getUint32(r,!1)
m=r+4
l=A.fz(new Uint8Array(a.subarray(m,A.eA(m,o,s))),0,null)
if(n>s-r-12)throw A.f(B.R)
if(q==null&&l!=="IHDR")throw A.f(B.R)
if(l==="IHDR"){if(n!==13)throw A.f(B.R)
o=t.getUint32(o,!1)
m=t.getUint32(r+12,!1)
k=r+17
if(!(k>=0&&k<s))return A.a(a,k)
q=new A.e4(o,m,a[k],!1)}else if(l==="tRNS")p=!0
else if(l==="IDAT"||l==="IEND")break
r+=12+n}if(q==null)throw A.f(B.R)
return new A.e4(q.a,q.b,q.c,p)},
my(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null
if(a.length>5242880)throw A.f(B.bA)
s=A.mq(a)
if(s!=null)throw A.f(A.a2(s+" images are not accepted. Use a PNG with a transparent background."))
r=A.mo(a)
q=r.a
if(q!==0){p=r.b
q=p===0||q>8192||p>8192||q*p>24e6}else q=!0
if(q)throw A.f(B.bJ)
q=r.c
if(!(q===4||q===6||r.d))throw A.f(B.bu)
t=null
try{q=u.N
t=new A.fr(new A.fd(A.ab(q,q),A.k([],u.d),A.k([],u.t))).bS(a)}catch(o){t=null}if(t==null)throw A.f(B.bn)
n=t.gap()===4&&t.gH()===B.l&&!t.gaN()?t:t.eY(B.l,4)
m=n.gac()
l=n.ga8()
q=n.gap()
k=4!==q?n.eX(b,4):n
q=k.a
q=q==null?b:q.dM(k!==n,B.O)
if(q==null){q=n.a
q=q==null?b:J.bE(q.gF(q))
if(q==null)q=J.bE(n.gF(0))}j=new Uint8Array(A.E(q))
for(q=j.length,i=0,h=0,g=3;g<q;g+=4){f=j[g]
if(f<=240)++i
if(f>=8)++h}e=m*l
if(i<e*0.02)throw A.f(B.bI)
if(h<e*0.005)throw A.f(B.bK)
if(Math.max(m,l)>2048){d=A.m_(m,l,j,2048)
m=d.a
l=d.b
j=d.c}c=new A.b6(b,b,b,b,0,B.S,0,0)
c.e0(b,B.h.gF(j),j.byteOffset,b,B.l,0,0,B.S,l,b,0,4,B.O,b,B.l,b,b,m,!1)
return new A.fB(m,l,j,new A.fs(B.cY,6,b).f2(c,!1))},
m_(a9,b0,b1,b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=b2/Math.max(a9,b0),a3=Math.max(1,B.a.aH(a9*a2)),a4=Math.max(1,B.a.aH(b0*a2)),a5=a3*a4*4,a6=new Uint8Array(a5),a7=a9/a3,a8=b0/a4
for(t=b1.length,s=0;s<a4;s=q){r=B.a.K(s*a8)
q=s+1
p=Math.max(r+1,Math.min(b0,B.a.Z(q*a8)))
for(o=s*a3,n=0;n<a3;n=l){m=B.a.K(n*a7)
l=n+1
k=Math.max(m+1,Math.min(a9,B.a.Z(l*a7)))
for(j=r,i=0,h=0,g=0,f=0,e=0;j<p;++j){d=(j*a9+m)*4
for(c=m;c<k;++c){b=d+3
if(!(b>=0&&b<t))return A.a(b1,b)
a=b1[b]/255
if(!(d>=0&&d<t))return A.a(b1,d)
i+=b1[d]*a
b=d+1
if(!(b<t))return A.a(b1,b)
h+=b1[b]*a
b=d+2
if(!(b<t))return A.a(b1,b)
g+=b1[b]*a
f+=a;++e
d+=4}}a0=(o+n)*4
if(f>0){b=B.b.u(B.a.aH(i/f),0,255)
if(!(a0>=0&&a0<a5))return A.a(a6,a0)
a6[a0]=b
b=a0+1
a1=B.b.u(B.a.aH(h/f),0,255)
if(!(b<a5))return A.a(a6,b)
a6[b]=a1
a1=a0+2
b=B.b.u(B.a.aH(g/f),0,255)
if(!(a1<a5))return A.a(a6,a1)
a6[a1]=b}b=a0+3
a1=B.b.u(B.a.aH(f/e*255),0,255)
if(!(b>=0&&b<a5))return A.a(a6,b)
a6[b]=a1}}return new A.T(a3,a4,a6)},
fB:function fB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e4:function e4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m6(a){var t=$.im.i(0,a)
return t==null?B.c.f7(B.ca,new A.h5(a),new A.h6(a)):t},
h5:function h5(a){this.a=a},
h6:function h6(a){this.a=a},
dD:function dD(){},
dQ:function dQ(){},
dU:function dU(){},
R:function R(){},
e7:function e7(){},
ea:function ea(){},
ec:function ec(){},
ed:function ed(){},
ei:function ei(){},
ke(a){var t,s,r,q,p,o=u.c,n=o.a(B.a_.co(a,null)),m=A.k([],u.q)
for(t=J.b1(n),s=u.n;t.v();){r=t.gE()
q=A.k([],s)
for(p=J.b1(o.a(r));p.v();)q.push(A.d8(p.gE()))
m.push(new A.dB(new Float32Array(A.E(q))))}return new A.f_(m)},
C:function C(a,b){this.a=a
this.b=b},
dB:function dB(a){this.a=a},
ch:function ch(a,b,c){this.a=a
this.b=b
this.c=c},
f_:function f_(a){this.a=a},
kf(a){return new A.f1(A.d8(a.i(0,"intensity")),u.eO.a(a.i(0,"params")).dE(0,new A.f2(),u.N,u.i),B.a.h(A.d8(a.i(0,"seed"))))},
dw:function dw(a,b){this.a=a
this.b=b},
Z:function Z(){},
aj:function aj(a,b){this.a=a
this.d=b},
f1:function f1(a,b,c){this.a=a
this.b=b
this.c=c},
f2:function f2(){},
dS:function dS(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a,b,c){this.a=a
this.b=b
this.c=c},
i1(a,b,c){var t
switch(a.a){case 0:return c
case 1:return 1-(1-b)*(1-c)
case 2:return b*c
case 3:return b<0.5?2*b*c:1-2*(1-b)*(1-c)
case 4:t=2*c
return(1-t)*b*b+t*b
case 5:return Math.min(1,b+c)
case 6:return c}},
i2(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m,l,k,j
if(g<=0)return
t=a.c
s=b*3
r=t.length
if(!(s>=0&&s<r))return A.a(t,s)
q=t[s]
p=s+1
if(!(p<r))return A.a(t,p)
o=t[p]
n=s+2
if(!(n<r))return A.a(t,n)
m=t[n]
if(c===B.a8){r=A.hf(q,o,m)-A.hf(d,e,f)
l=d+r
k=e+r
j=f+r}else{l=A.i1(c,q,d)
k=A.i1(c,o,e)
j=A.i1(c,m,f)}t.$flags&2&&A.b(t)
t[s]=q+(l-q)*g
t[p]=o+(k-o)*g
t[n]=m+(j-m)*g},
bz(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(g<=0)return
for(t=b.d,s=b.c,r=a.a,q=b.a,p=b.r,o=p.length,n=b.b,m=0;m<t;++m)for(l=(m+n)*r,k=m*s,j=0;j<s;++j){i=k+j
if(!(i>=0&&i<o))return A.a(p,i)
h=p[i]
if(h<=0.002)continue
A.i2(a,l+j+q,c,d,e,f,h*g)}},
aG:function aG(a,b){this.a=a
this.b=b},
by(c4,c5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=c4.c,b5=c4.a*c4.b,b6=Math.pow(2,c5.a),b7=c5.f,b8=c5.r,b9=0.03*b8,c0=1+0.1*b7+b9,c1=1-0.05*b8,c2=1-0.12*b7+b9,c3=c5.c
for(b7=c5.y,b8=b7!==0,b9=c5.z,t=c5.Q,s=c5.d,r=s===0,q=c3!==0,p=c5.w,o=p===0,n=b4.length,m=c5.b*0.5,l=c5.x,k=l!==0,j=c5.e,i=j!==0,s=1+s,h=b7*0.18,b7=1-h,g=0;g<b5;++g){f=g*3
if(!(f<n))return A.a(b4,f)
e=b4[f]
d=f+1
if(!(d<n))return A.a(b4,d)
c=b4[d]
b=f+2
if(!(b<n))return A.a(b4,b)
a=b4[b]
a0=e*b6*c0+m
a1=c*b6*c1+m
a2=a*b6*c2+m
a3=0.2126*a0+0.7152*a1+0.0722*a2
if(!o||k){a4=a3/0.55
if(a4<0)a5=0
else a5=a4>1?1:a4
a4=(a3-0.45)/0.55
if(a4<0)a4=0
else if(a4>1)a4=1
a4=(1-a5*a5*(3-2*a5))*p*0.35+a4*a4*(3-2*a4)*l*0.25
a0+=a4
a1+=a4
a2+=a4
a3=0.2126*a0+0.7152*a1+0.0722*a2}if(q){a0=A.hX(a0,c3)
a1=A.hX(a1,c3)
a2=A.hX(a2,c3)
a3=0.2126*a0+0.7152*a1+0.0722*a2}if(!r||i){a6=Math.max(a0,Math.max(a1,a2))
a7=Math.min(a0,Math.min(a1,a2))
a8=s+j*(1-(a6<=0?0:(a6-a7)/Math.max(a6,0.000001)))*1.2
a0=a3+(a0-a3)*a8
a1=a3+(a1-a3)*a8
a2=a3+(a2-a3)*a8}if(a3<0)a9=0
else a9=a3>1?1:a3
a4=1-a9
b0=a4*a4
b1=a9*a9
a4=b9.length
if(0>=a4)return A.a(b9,0)
b2=b9[0]
b3=t.length
if(0>=b3)return A.a(t,0)
a0+=b2*b0+t[0]*b1
if(1>=a4)return A.a(b9,1)
b2=b9[1]
if(1>=b3)return A.a(t,1)
a1+=b2*b0+t[1]*b1
if(2>=a4)return A.a(b9,2)
a4=b9[2]
if(2>=b3)return A.a(t,2)
a2+=a4*b0+t[2]*b1
if(b8){a0=h+a0*b7
a1=h+a1*b7
a2=h+a2*b7}a0=A.i_(a0)
a1=A.i_(a1)
a2=A.i_(a2)
b4.$flags&2&&A.b(b4)
b4[f]=e+(a0-e)
b4[d]=c+(a1-c)
b4[b]=a+(a2-a)}},
hX(a,b){var t,s
if(a<0)t=0
else t=a>1?1:a
s=2*t
if(b>=0)return t+(t*t*(3-s)-t)*b
return t+(0.5-Math.sin(Math.asin(1-s)/3)-t)*-b},
i_(a){if(a<=0.85)return a<0?0:a
return 0.85+0.15*(1-Math.exp(-(a-0.85)/0.15))},
ah:function ah(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l},
i8(a){var t,s,r=new A.hk(),q=r.$1(a[0]),p=r.$1(a[1]),o=r.$1(a[2])
r=new A.hj()
t=r.$1((0.4124*q+0.3576*p+0.1805*o)/0.95047)
s=r.$1(0.2126*q+0.7152*p+0.0722*o)
return A.k([116*s-16,500*(t-s),200*(s-r.$1((0.0193*q+0.1192*p+0.9505*o)/1.08883))],u.n)},
mh(a){var t,s,r,q=(a[0]+16)/116,p=a[1],o=a[2],n=new A.he()
p=n.$1(q+p/500)
if(typeof p!=="number")return p.aQ()
t=p*0.95047
s=n.$1(q)
o=n.$1(q-o/200)
if(typeof o!=="number")return o.aQ()
r=o*1.08883
o=new A.hd()
return A.k([o.$1(3.2406*t-1.5372*s-0.4986*r),o.$1(-0.9689*t+1.8758*s+0.0415*r),o.$1(0.0557*t-0.204*s+1.057*r)],u.n)},
jo(a,b,c,d){var t=A.i8(a),s=u.n,r=A.mh(A.k([t[0]+b,t[1]+c,t[2]+d],s))
return A.k([r[0]-a[0],r[1]-a[1],r[2]-a[2]],s)},
hk:function hk(){},
hj:function hj(){},
he:function he(){},
hd:function hd(){},
eZ(a){var t=a.t(B.f).J(0,a.t(B.e)),s=Math.max(0.000001,t.gj(0))
return new A.eY(t.a/s,t.b/s)},
eY:function eY(a,b){this.a=a
this.b=b},
iC(a,b,c,d,e,f){var t=Math.max(0,c)*Math.max(0,d)
if(!A.d9(t))A.aL(A.db("Invalid length "+A.x(t)))
return new A.fn(a,b,c,d,new Float32Array(t))},
iD(a,b,c,d,e,f,g){var t=B.b.u(B.a.K(c-g),0,a),s=B.b.u(B.a.K(d-g),0,b)
return A.iC(t,s,B.b.u(B.a.Z(e+g),0,a)-t,B.b.u(B.a.Z(f+g),0,b)-s,a,b)},
al(a,b,c,d){var t,s,r,q,p,o,n,m,l
for(t=c.length,s=1/0,r=1/0,q=-1/0,p=-1/0,o=0;o<t;++o){n=c[o]
m=n.a
s=Math.min(s,m)
l=n.b
r=Math.min(r,l)
q=Math.max(q,m)
p=Math.max(p,l)}return A.iD(a,b,s,r,q,p,d)},
hn(a,b){var t,s,r,q,p,o
for(t=a.length,s=0,r=0,q=0;q<t;++q){p=a[q]
s+=p.a
r+=p.b}s/=t
r/=t
t=A.k([],u._)
for(o=a.length,q=0;q<a.length;a.length===o||(0,A.D)(a),++q){p=a[q]
t.push(new A.C(s+(p.a-s)*b,r+(p.b-r)*b))}return t},
fn:function fn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=e},
a1:function a1(a){this.a=a},
kP(a,b,c){var t=new A.eq(b,A.ab(u.S,u.gf))
t.e1(a,b,c)
return t},
lO(e5,e6,e7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4
if(e7.a<=0&&e7.b<=0&&e7.c<=0&&e7.d<=0)return
t=Math.max(1,e6.t(B.e).J(0,e6.t(B.f)).gj(0))
s=A.lL(e6,e7)
if(s.length===0)return
r=e6.dn(B.n).a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
m=(o-q)*0.35+t*0.1
l=Math.max(0,B.a.K(q-m))
k=Math.max(0,B.a.K(p-m))
r=e5.a
j=e5.b
i=Math.min(r,B.a.Z(o+m))-l
h=Math.min(j,B.a.Z(n+m))-k
if(i<2||h<2)return
g=Math.max(2,B.a.aH(t/48))
f=B.b.ag(i-1,g)+2
e=B.b.ag(h-1,g)+2
d=f*e
c=new Float32Array(d)
b=new Float32Array(d)
a=new Float64Array(2)
for(a0=!1,a1=0;a1<e;++a1)for(a2=a1*f,a3=k+a1*g+0.5,a4=0;a4<f;++a4){if(0>=2)return A.a(a,0)
a[0]=0
if(1>=2)return A.a(a,1)
a[1]=0
a5=l+a4*g+0.5
for(a6=s.length,a7=0;a7<s.length;s.length===a6||(0,A.D)(s),++a7)s[a7].bP(0,a5,a3,a)
a6=a2+a4
a8=a[0]
if(!(a6>=0&&a6<d))return A.a(c,a6)
c[a6]=a8
a8=a[1]
if(!(a6<d))return A.a(b,a6)
b[a6]=a8
if(Math.abs(a[0])>0.02||Math.abs(a[1])>0.02)a0=!0}if(!a0)return
a9=new Float32Array(i*h*3)
for(a2=e5.c,b0=0;b0<h;b0=p){p=b0+1
B.t.af(a9,b0*i*3,p*i*3,a2,((b0+k)*r+l)*3)}b1=1/g
for(a6=r-1.001,j-=1.001,b0=0;b0<h;++b0){b2=b0*b1
b3=B.a.K(b2)
b4=b2-b3
for(a8=b0+k,b5=a8*r,b6=b3*f,b7=1-b4,b8=0;b8<i;++b8){b9=b8*b1
c0=B.a.K(b9)
c1=b9-c0
c2=b6+c0
c3=c2+1
c4=c2+f
c5=c4+1
if(!(c2>=0&&c2<d))return A.a(c,c2)
c6=c[c2]
c7=1-c1
if(!(c3>=0&&c3<d))return A.a(c,c3)
c8=c[c3]
if(!(c4>=0&&c4<d))return A.a(c,c4)
c9=c[c4]
if(!(c5>=0&&c5<d))return A.a(c,c5)
d0=(c6*c7+c8*c1)*b7+(c9*c7+c[c5]*c1)*b4
if(!(c2<d))return A.a(b,c2)
d1=(b[c2]*c7+b[c3]*c1)*b7+(b[c4]*c7+b[c5]*c1)*b4
if(Math.abs(d0)<0.01&&Math.abs(d1)<0.01)continue
d2=B.a.u(b8+l+d0,0,a6)
d3=B.a.u(a8+d1,0,j)
d4=B.a.K(d2)
d5=B.a.K(d3)
d6=d2-d4
d7=d3-d5
d8=(b5+b8+l)*3
for(c6=d4+1,c7=d5+1,c8=1-d6,c9=1-d7,d9=0;d9<3;++d9){e0=A.h1(a9,a2,d4,d5,d9,l,k,i,h,r)
e1=A.h1(a9,a2,c6,d5,d9,l,k,i,h,r)
e2=A.h1(a9,a2,d4,c7,d9,l,k,i,h,r)
e3=A.h1(a9,a2,c6,c7,d9,l,k,i,h,r)
e4=d8+d9
a2.$flags&2&&A.b(a2)
if(!(e4>=0&&e4<a2.length))return A.a(a2,e4)
a2[e4]=(e0*c8+e1*d6)*c9+(e2*c8+e3*d6)*d7}}}},
h1(a,b,c,d,e,f,g,h,i,j){var t,s=c-f,r=d-g
if(s>=0&&r>=0&&s<h&&r<i){t=(r*h+s)*3+e
if(!(t>=0&&t<a.length))return A.a(a,t)
return a[t]}t=(d*j+c)*3+e
if(!(t>=0&&t<b.length))return A.a(b,t)
return b[t]},
lL(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.eZ(a),e=A.k([],u.cO),d=b.c
if(d>0)for(t=[B.e,B.f],s=0.42*d,r=0.06*d,d=0.16*d,q=0;q<2;++q){p=t[q]
o=a.t(p)
n=p===B.e
m=n?new A.I(a.C(33),a.C(133)):new A.I(a.C(263),a.C(362))
l=m.a
k=m.b
j=l.a-k.a
k=l.b-k.b
i=Math.max(2,Math.sqrt(j*j+k*k))
B.c.L(e,new A.cY(f,o,i,i*0.78,r,d))
B.c.L(e,new A.et(f,a.C(n?159:386),i*0.62,i*0.42,s))}d=b.b
if(d>0){h=a.C(98)
g=a.C(327)
o=h.ai(g,0.5)
B.c.L(e,new A.ew(f,o,Math.max(2,h.J(0,g).gj(0))*0.9,Math.max(2,a.C(168).J(0,a.C(2)).gj(0))*1.1,Math.max(2,o.J(0,a.C(0)).gj(0))*0.95,0.16*d))}d=b.d
if(d>0)B.c.L(e,new A.cY(f,a.C(13).ai(a.C(14),0.5),Math.max(2,a.C(61).J(0,a.C(291)).gj(0))*0.68,Math.max(2,a.C(0).J(0,a.C(17)).gj(0)),0.02*d,0.12*d))
d=b.a
if(d>0)B.c.L(e,A.kP(a,f,d))
return e},
f0:function f0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cY:function cY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
et:function et(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ew:function ew(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eq:function eq(a,b){var _=this
_.a=a
_.w=_.r=_.f=_.e=_.d=_.c=_.b=$
_.x=b},
fN:function fN(){},
fO:function fO(a,b){this.a=a
this.b=b},
fM:function fM(a,b){this.a=a
this.b=b},
jn(a,b){var t,s,r,q,p,o,n
if((a.a.a.length/2|0)>=478){t=a.C(b?468:473)
for(s=t.a,r=t.b,q=0,p=1;p<=4;++p){o=a.C((b?468:473)+p)
n=s-o.a
o=r-o.b
q+=Math.sqrt(n*n+o*o)}return new A.I(t,Math.max(1,q/4))}t=a.t(b?B.e:B.f)
return new A.I(t,Math.max(1,(b?a.C(33).J(0,a.C(133)).gj(0):a.C(263).J(0,a.C(362)).gj(0))*0.22))},
m2(c8,c9,d0,d1,d2,d3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7
if(d3<=0&&d0<=0)return
t=new A.a1(c9).ba(0.012,0.97)
if(t.gbb(0))return
s=[A.jn(c9,!0),A.jn(c9,!1)]
r=A.hf(d1[0],d1[1],d1[2])
q=c8.c
for(p=t.d,o=t.c,n=q.length,m=t.a,l=t.b,k=c8.a,j=t.r,i=j.length,h=0;h<p;++h)for(g=h+l,f=g*k,e=h*o,d=0;d<o;++d){c=e+d
if(!(c>=0&&c<i))return A.a(j,c)
b=j[c]
if(b<=0.003)continue
a=d+m
a0=(f+a)*3
for(c=a+0.5,a1=g+0.5,a2=1/0,a3=0;a3<2;++a3){a4=s[a3]
a5=a4.a
a6=c-a5.a
a7=a1-a5.b
a2=Math.min(a2,Math.sqrt(a6*a6+a7*a7)/a4.b)}c=(a2-0.92)/0.16000000000000003
if(c<0)a8=0
else a8=c>1?1:c
a9=1-a8*a8*(3-2*a8)
if(!(a0>=0&&a0<n))return A.a(q,a0)
b0=q[a0]
c=a0+1
if(!(c<n))return A.a(q,c)
b1=q[c]
a1=a0+2
if(!(a1<n))return A.a(q,a1)
b2=q[a1]
b3=0.2126*b0+0.7152*b1+0.0722*b2
b4=b*(1-a9)*d3
if(b4>0.002){b5=0.32*b4*(1-b3)
b6=b0+(b3-b0)*0.55*b4+b5
b7=b1+(b3-b1)*0.55*b4+b5
b8=b2+(b3-b2)*0.55*b4+b5*1.05}else{b8=b2
b7=b1
b6=b0}b9=b*a9*d0
if(b9>0.002){a4=(a2-0.28)/0.13999999999999996
if(a4<0)a8=0
else a8=a4>1?1:a4
a4=(a2-0.72)/0.22999999999999998
if(a4<0)a4=0
else if(a4>1)a4=1
c0=Math.min(1,b3*1.8+0.09)*(1-0.35*(a4*a4*(3-2*a4)))
a4=d1[0]
c1=d1[1]
c2=d1[2]
c3=b3>0.001?c0/b3:1
c4=b0*c3
c5=b1*c3
c6=b2*c3
c7=(b3-0.6)/0.25
if(c7<0)c7=0
else if(c7>1)c7=1
a8=b9*(1-Math.max((1-a8*a8*(3-2*a8))*0.85,c7*c7*(3-2*c7)))
b6+=(c4+(a4/r*c0-c4)*d2-b6)*a8
b7+=(c5+(c1/r*c0-c5)*d2-b7)*a8
b8+=(c6+(c2/r*c0-c6)*d2-b8)*a8}if(b6<0)a4=0
else a4=b6>1?1:b6
q.$flags&2&&A.b(q)
q[a0]=a4
if(b7<0)a4=0
else a4=b7>1?1:b7
q[c]=a4
if(b8<0)c=0
else c=b8>1?1:b8
q[a1]=c}},
mr(a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(a3<=0&&a4<=0)return
t=Math.max(1,a2.t(B.e).J(0,a2.t(B.f)).gj(0))
s=new A.a1(a2).bQ(0.03,1.2)
A.jd(a1,s,t*0.04,0.003,a3*0.8,70/t)
if(a4<=0||s.gbb(0))return
r=a1.c
for(q=s.d,p=s.c,o=r.$flags|0,n=r.length,m=s.b,l=a1.a,k=s.a,j=s.r,i=j.length,h=0;h<q;++h)for(g=(h+m)*l,f=h*p,e=0;e<p;++e){d=f+e
if(!(d>=0&&d<i))return A.a(j,d)
c=j[d]*a4
if(c<=0.003)continue
b=(g+e+k)*3
for(a=0;a<3;++a){d=b+a
if(!(d>=0&&d<n))return A.a(r,d)
a0=r[d]
a0+=(1-a0)*0.22*c
if(a0<0)a0=0
else if(a0>1)a0=1
o&2&&A.b(r)
r[d]=a0}}},
mp(a8,a9,b0,b1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
if(b0<=0&&b1<=0)return
t=Math.max(1,a9.t(B.e).J(0,a9.t(B.f)).gj(0))
s=new A.a1(a9).dD(0.02)
if(s.gbb(0))return
if(b0>0)A.jd(a8,s,t*0.035,0.0025,b0,90/t)
if(b1<=0)return
r=a8.c
for(q=s.d,p=s.c,o=s.b,n=a8.a,m=s.a,l=r.length,k=s.r,j=k.length,i=0,h=0,g=0,f=0,e=0;e<q;++e)for(d=(e+o)*n,c=e*p,b=0;b<p;++b){a=c+b
if(!(a>=0&&a<j))return A.a(k,a)
a0=k[a]
if(a0<0.7)continue
a1=(d+b+m)*3
i+=a0
if(!(a1>=0&&a1<l))return A.a(r,a1)
h+=r[a1]*a0
a=a1+1
if(!(a<l))return A.a(r,a)
g+=r[a]*a0
a=a1+2
if(!(a<l))return A.a(r,a)
f+=r[a]*a0}if(i<2)return
a2=A.k([h/i,g/i,f/i],u.n)
a3=A.i8(a2)
a4=new A.hi(10)
a5=A.jo(a2,a4.$1(57-a3[0]),a4.$1(19-a3[1]),a4.$1(7-a3[2]))
for(d=r.$flags|0,e=0;e<q;++e)for(c=(e+o)*n,a=e*p,b=0;b<p;++b){a6=a+b
if(!(a6>=0&&a6<j))return A.a(k,a6)
a0=k[a6]*b1
if(a0<=0.003)continue
a1=(c+b+m)*3
if(!(a1>=0&&a1<l))return A.a(r,a1)
a6=r[a1]+a5[0]*a0
if(a6<0)a6=0
else if(a6>1)a6=1
d&2&&A.b(r)
r[a1]=a6
a6=a1+1
if(!(a6<l))return A.a(r,a6)
a7=r[a6]+a5[1]*a0
if(a7<0)a7=0
else if(a7>1)a7=1
r[a6]=a7
a7=a1+2
if(!(a7<l))return A.a(r,a7)
a6=r[a7]+a5[2]*a0
if(a6<0)a6=0
else if(a6>1)a6=1
r[a7]=a6}},
jd(a4,a5,a6,a7,a8,a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
if(a5.gbb(0)||a8<=0)return
t=a5.c
s=a5.d
r=t*s*3
q=new Float32Array(r)
for(p=a5.b,o=a4.a,n=a5.a,m=a4.c,l=0;l<s;l=k){k=l+1
B.t.af(q,l*t*3,k*t*3,m,((l+p)*o+n)*3)}j=A.jm(q,t,s,a7,a6,a9)
for(i=j.length,h=a5.r,g=h.length,l=0;l<s;++l)for(f=l*t,e=(l+p)*o,d=0;d<t;++d){c=f+d
if(!(c>=0&&c<g))return A.a(h,c)
b=h[c]*a8
if(b<=0.003)continue
a=c*3
a0=(e+d+n)*3
for(a1=0;a1<3;++a1){c=a0+a1
a2=a+a1
if(!(a2<r))return A.a(q,a2)
a3=q[a2]
if(!(a2<i))return A.a(j,a2)
a3+=(j[a2]-a3)*b
if(a3<0)a2=0
else a2=a3>1?1:a3
m.$flags&2&&A.b(m)
if(!(c>=0&&c<m.length))return A.a(m,c)
m[c]=a2}}},
hi:function hi(a){this.a=a},
iB(a,b){var t,s=A.k([],u.n)
for(t=0;t<3;++t)s.push(1-(1-a[t])*b)
return s},
bU:function bU(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ir(a,b){return new A.dC(a,b,new Float32Array(a*b*3))},
ki(a){var t,s,r,q,p,o,n,m=A.ir(a.a,a.b),l=a.c,k=m.c
for(t=l.length,s=k.$flags|0,r=0,q=0;r<t;r+=4,q+=3){p=l[r]
s&2&&A.b(k)
o=k.length
if(!(q<o))return A.a(k,q)
k[q]=p*0.00392156862745098
p=q+1
n=r+1
if(!(n<t))return A.a(l,n)
n=l[n]
if(!(p<o))return A.a(k,p)
k[p]=n*0.00392156862745098
n=q+2
p=r+2
if(!(p<t))return A.a(l,p)
p=l[p]
if(!(n<o))return A.a(k,n)
k[n]=p*0.00392156862745098}return m},
hq(a){if(a<=0)return 0
if(a>=1)return 255
return B.a.h(a*255+0.5)},
U(a,b,c,d,e){var t,s,r
if(e<0.5||b<2||c<2)return
t=Math.max(1,B.a.aH((Math.sqrt(4*e*e+1)-1)/2))
s=new Float32Array(a.length)
for(r=0;r<3;++r){A.le(a,s,b,c,d,t)
A.lf(s,a,b,c,d,t)}},
le(a,b,c,d,e,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=1/(2*a0+1)
for(t=c-1,s=a.length,r=a0+1,q=0;q<d;++q){p=q*c*e
for(o=0;o<e;++o){n=p+o
if(!(n>=0&&n<s))return A.a(a,n)
m=a[n]*r
for(l=1;l<=a0;++l)m+=B.t.i(a,p+Math.min(l,t)*e+o)
for(n=b.$flags|0,k=0;k<c;++k){j=p+k*e+o
n&2&&A.b(b)
if(!(j>=0&&j<b.length))return A.a(b,j)
b[j]=m*f
i=Math.min(k+a0+1,t)
h=Math.max(k-a0,0)
j=p+i*e+o
if(!(j>=0&&j<s))return A.a(a,j)
j=a[j]
g=p+h*e+o
if(!(g>=0&&g<s))return A.a(a,g)
m+=j-a[g]}}}},
lf(a,b,c,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=1/(2*a2+1),d=c*a1
for(t=a0-1,s=a.length,r=a2+1,q=0;q<c;++q)for(p=q*a1,o=0;o<a1;++o){n=p+o
if(!(n<s))return A.a(a,n)
m=a[n]*r
for(l=1;l<=a2;++l)m+=B.t.i(a,Math.min(l,t)*d+n)
for(k=b.$flags|0,j=0;j<a0;++j){i=j*d+n
k&2&&A.b(b)
if(!(i>=0&&i<b.length))return A.a(b,i)
b[i]=m*e
h=Math.min(j+a2+1,t)
g=Math.max(j-a2,0)
i=h*d+n
if(!(i>=0&&i<s))return A.a(a,i)
i=a[i]
f=g*d+n
if(!(f>=0&&f<s))return A.a(a,f)
m+=i-a[f]}}},
ia(a,b,c){var t,s=(c-a)/(b-a)
if(s<0)t=0
else t=s>1?1:s
return t*t*(3-2*t)},
hf(a,b,c){return 0.2126*a+0.7152*b+0.0722*c},
dC:function dC(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(a){this.a=a},
lR(g2,g3,g4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0=Math.max(1,g3.t(B.e).J(0,g3.t(B.f)).gj(0)),g1=A.lU(g3)
if(g1.gbb(0))return null
t=g1.c
s=g1.d
r=g1.a
q=g1.b
p=t*s
o=p*3
n=new Float32Array(o)
for(m=g2.a,l=g2.c,k=0;k<s;k=j){j=k+1
B.t.af(n,k*t*3,j*t*3,l,((k+q)*m+r)*3)}i=new Float32Array(p)
for(h=[B.d4,B.d6,B.d7,B.d3,B.d5],g=g1.r,f=g.length,e=t-1,d=s-1,c=0;c<5;++c){b=h[c]
a=g3.C(b.a)
a0=b.b*g0
b=a.a
a1=Math.max(0,B.a.K(b-a0-r))
a2=Math.min(e,B.a.Z(b+a0-r))
a3=a.b
j=Math.max(0,B.a.K(a3-a0-q))
a4=Math.min(d,B.a.Z(a3+a0-q))
for(a5=a0*a0,k=j;k<=a4;++k)for(a6=k+q-a3,a7=k*t,a8=a6*a6,a9=a1;a9<=a2;++a9){b0=a9+r-b
if(b0*b0+a8<=a5){b1=a7+a9
if(!(b1>=0&&b1<f))return A.a(g,b1)
b2=g[b1]
if(!(b1<p))return A.a(i,b1)
i[b1]=b2}}}for(b3=0,b4=0,b5=0,b6=0,b7=0;b7<p;++b7){b8=i[b7]
if(b8<=0.5)continue
b3+=b8
h=b7*3
if(!(h<o))return A.a(n,h)
b4+=n[h]*b8
e=h+1
if(!(e<o))return A.a(n,e)
b5+=n[e]*b8
h+=2
if(!(h<o))return A.a(n,h)
b6+=n[h]*b8}if(b3<4)return null
b9=A.k([b4/b3,b5/b3,b6/b3],u.n)
h=b9[0]
e=b9[1]
d=b9[2]
c0=A.hf(h,e,d)
c1=d-c0
c2=h-c0
for(c3=0,b7=0;b7<p;++b7){b8=i[b7]
if(b8<=0.5)continue
h=b7*3
if(!(h<o))return A.a(n,h)
e=n[h]
d=h+1
if(!(d<o))return A.a(n,d)
d=n[d]
h+=2
if(!(h<o))return A.a(n,h)
h=n[h]
k=0.2126*e+0.7152*d+0.0722*h
c4=h-k-c1
c5=e-k-c2
c3+=b8*(c4*c4+c5*c5)}c6=Math.max(0.035,3.2*Math.sqrt(c3/b3))
c7=new Float32Array(p)
for(h=2*c6*c6,e=c0*0.3,d=c0*0.55-e,b7=0;b7<p;++b7){if(!(b7<f))return A.a(g,b7)
c8=g[b7]
if(c8<=0)continue
b=b7*3
if(!(b<o))return A.a(n,b)
c9=n[b]
a3=b+1
if(!(a3<o))return A.a(n,a3)
d0=n[a3]
b+=2
if(!(b<o))return A.a(n,b)
d1=n[b]
k=0.2126*c9+0.7152*d0+0.0722*d1
c4=d1-k-c1
c5=c9-k-c2
d2=Math.exp(-(c4*c4+c5*c5)/h)
b=(k-e)/d
if(b<0)d3=0
else d3=b>1?1:b
c7[b7]=c8*(0.15+0.85*d2*(d3*d3*(3-2*d3)))}A.U(c7,t,s,1,Math.max(0.6,g0*0.012))
d4=new Float32Array(A.E(n))
h=g4.c
if(h>0){d5=A.jm(n,t,s,g4.b,g0*g4.a,110/g0)
d6=new Float32Array(A.E(n))
A.U(d6,t,s,3,Math.max(0.7,g0*0.007))
d7=g4.d
for(g=d5.length,f=d4.$flags|0,e=d6.length,b7=0;b7<p;++b7){b8=c7[b7]*h
if(b8<=0.002)continue
d8=b7*3
if(!(d8<o))return A.a(n,d8)
d=n[d8]
b=d8+1
if(!(b<o))return A.a(n,b)
a3=n[b]
a5=d8+2
if(!(a5<o))return A.a(n,a5)
a7=n[a5]
if(!(d8<e))return A.a(d6,d8)
a8=d6[d8]
if(!(b<e))return A.a(d6,b)
b=d6[b]
if(!(a5<e))return A.a(d6,a5)
for(d=(0.2126*d+0.7152*a3+0.0722*a7-(0.2126*a8+0.7152*b+0.0722*d6[a5]))*d7,a=0;a<3;++a){b=d8+a
if(!(b<g))return A.a(d5,b)
a3=d5[b]
if(!(b<o))return A.a(n,b)
a5=n[b]
f&2&&A.b(d4)
if(!(b<d4.length))return A.a(d4,b)
d4[b]=a5+(a3+d-a5)*b8}}}o=g4.e
if(o>0){d9=A.mm(d4,c7,t,s,g0*0.28)
for(h=d4.length,g=d9.length,f=d4.$flags|0,b7=0;b7<p;++b7){b8=c7[b7]*o
if(b8<=0.002)continue
d8=b7*3
if(!(d8<h))return A.a(d4,d8)
e=d4[d8]
d=d8+1
if(!(d<h))return A.a(d4,d)
b=d4[d]
a3=d8+2
if(!(a3<h))return A.a(d4,a3)
e0=0.2126*e+0.7152*b+0.0722*d4[a3]
if(!(d8<g))return A.a(d9,d8)
b=d9[d8]
if(!(d<g))return A.a(d9,d)
d=d9[d]
if(!(a3<g))return A.a(d9,a3)
e1=0.2126*b+0.7152*d+0.0722*d9[a3]
e2=b8*0.75
a6=e1-e0
e=a6*b8
e3=a6>0?e*0.9:e*0.25
e4=c0-(e0+e3)
for(e=e0+(e4>0?e3+e4*b8*0.35:e3),a=0;a<3;++a){d=d8+a
if(!(d<h))return A.a(d4,d)
e5=d4[d]-e0
if(!(d<g))return A.a(d9,d)
b=d9[d]
a3=b9[a]
f&2&&A.b(d4)
d4[d]=e+e5+(0.5*(b-e1)+0.5*(a3-c0)-e5)*e2}}}o=g4.f
if(o>0){e6=A.mx(g3,new A.a1(g3))
e7=new Float32Array(A.E(d4))
A.U(e7,t,s,3,Math.max(1,g0*0.05))
e8=A.eZ(g3)
e9=g3.C(6)
h=A.k([],u.B)
for(g=g0*0.1,c=0;c<2;++c){f=A.lE(d4,c7,t,s,r,q,g3.C(B.c0[c]),g)
h.push(f==null?b9:f)}g=e6.a
a1=Math.max(g,r)
a2=Math.min(g+e6.c,r+t)
g=e6.b
j=Math.max(g,q)
a4=Math.min(g+e6.d,q+s)
for(g=e7.length,f=d4.length,e=d4.$flags|0,f0=j;f0<a4;++f0)for(d=(f0-q)*t,f1=a1;f1<a2;++f1){b8=e6.by(f1,f0)*o
if(b8<=0.002)continue
f2=e8.bc(new A.C(f1,f0),e9)
b=h.length
if(f2.a<0){if(0>=b)return A.a(h,0)
f3=h[0]}else{if(1>=b)return A.a(h,1)
f3=h[1]}f4=0.2126*f3[0]+0.7152*f3[1]+0.0722*f3[2]
d8=(d+f1-r)*3
if(!(d8>=0&&d8<g))return A.a(e7,d8)
b=e7[d8]
a3=d8+1
if(!(a3<g))return A.a(e7,a3)
a3=e7[a3]
a5=d8+2
if(!(a5<g))return A.a(e7,a5)
f5=0.2126*b+0.7152*a3+0.0722*e7[a5]
f6=Math.max(0,f4-f5)+0.03
for(a=0;a<3;++a){b=f3[a]
a3=d8+a
if(!(a3<g))return A.a(e7,a3)
a5=e7[a3]
if(!(a3<f))return A.a(d4,a3)
a7=d4[a3]
e&2&&A.b(d4)
d4[a3]=a7+(f6+(b-f4-(a5-f5))*0.8)*b8}}}o=g4.r
if(o>0){f7=A.i8(b9)
h=new A.h2(g4)
g=h.$2(13,f7[1])
if(typeof g!=="number")return g.aQ()
h=h.$2(16,f7[2])
if(typeof h!=="number")return h.aQ()
f8=A.jo(b9,g4.w*o,g*o,h*o)}else f8=B.p
for(o=t*3,h=d4.length,g=l.$flags|0,k=0;k<s;++k){f9=((k+q)*m+r)*3
for(f=k*t*3,b7=0;b7<o;++b7){e=f9+b7
d=f+b7
if(!(d>=0&&d<h))return A.a(d4,d)
d=d4[d]
if(d<0)d=0
else if(d>1)d=1
g&2&&A.b(l)
if(!(e>=0&&e<l.length))return A.a(l,e)
l[e]=d}}return new A.eb(b9,f8)},
lS(a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
if(a7<=0)return
t=a5.c
for(s=t.length,r=0;r<1;++r){q=a6[r]
p=q.b
if(p[0]===0&&p[1]===0&&p[2]===0)continue
o=q.a
n=o[0]
m=o[1]
l=o[2]
k=0.2126*n+0.7152*m+0.0722*l
j=l-k
i=n-k
for(n=k*0.3,m=k*0.6-n,h=0;h<s;h+=3){g=t[h]
l=h+1
if(!(l<s))return A.a(t,l)
f=t[l]
e=h+2
if(!(e<s))return A.a(t,e)
d=t[e]
c=0.2126*g+0.7152*f+0.0722*d
b=d-c
a=b-j
a0=g-c-i
a1=a*a+a0*a0
if(a1>0.09000000000000001)continue
a2=Math.exp(-a1/0.020000000000000004)
b=(b- -0.01)/0.04
if(b<0)a3=0
else a3=b>1?1:b
b=(c-n)/m
if(b<0)b=0
else if(b>1)b=1
a4=a2*(1-a3*a3*(3-2*a3))*(b*b*(3-2*b))*a7
if(a4<=0.002)continue
b=g+p[0]*a4
if(b<0)b=0
else if(b>1)b=1
t.$flags&2&&A.b(t)
t[h]=b
b=f+p[1]*a4
if(b<0)b=0
else if(b>1)b=1
t[l]=b
b=d+p[2]*a4
if(b<0)l=0
else l=b>1?1:b
t[e]=l}}},
lU(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new A.a1(a),c=Math.max(1,a.t(B.e).J(0,a.t(B.f)).gj(0)),b=d.bl(a.M(B.n),0.045)
b.aT(d.ba(0.025,1.1))
b.aT(d.bQ(0.03,1.18))
t=A.hn(a.M(B.A),1.04)
s=0.02*Math.max(1,a.t(B.e).J(0,a.t(B.f)).gj(0))
r=a.b
q=a.c
p=A.al(r,q,t,s*3+2)
p.bV(t)
if(s>0.4)p.b3(s)
b.aT(p)
o=A.eZ(a)
n=Math.atan2(o.b,o.a)
for(m=c*0.12,l=c*0.065,k=c*0.04,j=c*0.015,i=0;i<2;++i){h=a.t(B.c1[i])
g=h.a
f=h.b
e=A.iD(r,q,g,f,g,f,m)
e.cm(h,l,k,n)
e.b3(j)
b.bI(e,0.45)}return b},
mx(a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=Math.max(1,a1.t(B.e).J(0,a1.t(B.f)).gj(0)),d=A.eZ(a1).bC(0,1),c=d.a,b=d.b,a=u._,a0=A.k([],a)
for(t=0;t<2;++t)B.c.aW(a0,a1.M(B.ak[t]))
s=A.al(a1.b,a1.c,a0,e*0.45)
for(r=u.a,q=e*0.025,p=c*q,q=b*q,t=0;t<2;++t){o=a1.M(B.ak[t])
n=o.length
m=A.k([],a)
for(l=n-1,k=l;k>=0;--k){j=Math.sin(3.141592653589793*k/l)
if(!(k<o.length))return A.a(o,k)
i=o[k]
h=e*(0.08+0.24*j)
B.c.L(m,new A.C(i.a+c*h,i.b+b*h))}i=A.k([],a)
for(h=o.length,g=0;g<o.length;o.length===h||(0,A.D)(o),++g){f=o[g]
i.push(new A.C(f.a+p,f.b+q))}i=A.n(i,r)
B.c.aW(i,m)
s.bV(i)}s.b3(e*0.035)
s.aT(a2.ba(0.01,1.05))
return s},
lE(a,b,c,d,a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=a2.a,f=Math.max(0,B.a.K(g-a3-a0)),e=Math.min(c-1,B.a.Z(g+a3-a0))
g=a2.b
t=Math.max(0,B.a.K(g-a3-a1))
s=Math.min(d-1,B.a.Z(g+a3-a1))
for(g=a.length,r=b.length,q=t,p=0,o=0,n=0,m=0;q<=s;++q)for(l=q*c,k=f;k<=e;++k){j=l+k
if(!(j>=0&&j<r))return A.a(b,j)
i=b[j]
if(i<0.5)continue
h=j*3
p+=i
if(!(h<g))return A.a(a,h)
o+=a[h]*i
j=h+1
if(!(j<g))return A.a(a,j)
n+=a[j]*i
j=h+2
if(!(j<g))return A.a(a,j)
m+=a[j]*i}if(p<4)return null
return A.k([o/p,n/p,m/p],u.n)},
mm(a6,a7,a8,a9,b0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=Math.max(1,B.a.K(b0/6)),e=Math.max(1,B.b.ag(a8,f)),d=Math.max(1,B.b.ag(a9,f)),c=e*d,b=c*3,a=new Float32Array(b),a0=new Float32Array(c),a1=a7.length,a2=a6.length,a3=e*f,a4=d*f,a5=0
for(;;){if(!(a5<a4&&a5<a9))break
t=a5*a8
s=B.b.ag(a5,f)*e
r=0
for(;;){if(!(r<a3&&r<a8))break
q=B.b.ag(r,f)
p=t+r
if(!(p>=0&&p<a1))return A.a(a7,p)
o=a7[p]
n=s+q
if(!(n>=0&&n<c))return A.a(a0,n)
a0[n]=a0[n]+o
m=n*3
if(!(m>=0&&m<b))return A.a(a,m)
l=a[m]
p*=3
if(!(p<a2))return A.a(a6,p)
a[m]=l+a6[p]*o
l=m+1
if(!(l<b))return A.a(a,l)
k=a[l]
j=p+1
if(!(j<a2))return A.a(a6,j)
a[l]=k+a6[j]*o
m+=2
if(!(m<b))return A.a(a,m)
j=a[m]
p+=2
if(!(p<a2))return A.a(a6,p)
a[m]=j+a6[p]*o;++r}++a5}c=b0/f
A.U(a,e,d,3,c)
A.U(a0,e,d,1,c)
c=a8*a9*3
i=new Float32Array(c)
for(a5=0;a5<a9;++a5)for(b=(a5+0.5)/f-0.5,a1=a5*a8,r=0;r<a8;++r){h=A.ld(a,a0,e,d,(r+0.5)/f-0.5,b)
g=(a1+r)*3
a3=g+1
a4=g+2
if(h==null){if(!(g>=0&&g<a2))return A.a(a6,g)
t=a6[g]
if(!(g<c))return A.a(i,g)
i[g]=t
if(!(a3>=0&&a3<a2))return A.a(a6,a3)
t=a6[a3]
if(!(a3<c))return A.a(i,a3)
i[a3]=t
if(!(a4>=0&&a4<a2))return A.a(a6,a4)
t=a6[a4]
if(!(a4<c))return A.a(i,a4)
i[a4]=t}else{t=h.a
if(!(g>=0&&g<c))return A.a(i,g)
i[g]=t
t=h.b
if(!(a3>=0&&a3<c))return A.a(i,a3)
i[a3]=t
t=h.c
if(!(a4>=0&&a4<c))return A.a(i,a4)
i[a4]=t}}return i},
ld(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j=c-1
e=B.a.u(e,0,j)
t=d-1
f=B.a.u(f,0,t)
s=Math.min(B.a.K(e),Math.max(0,c-2))
r=Math.min(B.a.K(f),Math.max(0,d-2))
q=Math.min(s+1,j)
p=Math.min(r+1,t)
t=new A.h_(e-s,f-r)
j=r*c
o=j+s
n=b.length
if(!(o>=0&&o<n))return A.a(b,o)
o=b[o]
j+=q
if(!(j>=0&&j<n))return A.a(b,j)
j=b[j]
m=p*c
l=m+s
if(!(l>=0&&l<n))return A.a(b,l)
l=b[l]
m+=q
if(!(m>=0&&m<n))return A.a(b,m)
k=t.$4(o,j,l,b[m])
if(k<0.0001)return null
j=new A.fZ(t,a,r,c,s,q,p)
t=j.$1(0)
if(typeof t!=="number")return t.cz()
o=j.$1(1)
if(typeof o!=="number")return o.cz()
j=j.$1(2)
if(typeof j!=="number")return j.cz()
return new A.T(t/k,o/k,j/k)},
jm(e0,e1,e2,e3,e4,e5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=Math.max(1,B.a.K(1/B.a.u(e5,0.05,1))),d3=Math.max(1,B.b.ag(e1,d2)),d4=Math.max(1,B.b.ag(e2,d2)),d5=d3*d4,d6=new Float32Array(d5),d7=d5*3,d8=new Float32Array(d7),d9=1/(d2*d2)
for(t=e0.length,s=0;s<d4;++s)for(r=s*d3,q=s*d2,p=0;p<d3;++p){for(o=p*d2,n=0,m=0,l=0,k=0;k<d2;++k)for(j=(q+k)*e1+o,i=0;i<d2;++i){h=(j+i)*3
if(!(h>=0&&h<t))return A.a(e0,h)
n+=e0[h]
g=h+1
if(!(g<t))return A.a(e0,g)
m+=e0[g]
g=h+2
if(!(g<t))return A.a(e0,g)
l+=e0[g]}f=r+p
o=f*3
j=n*d9
if(!(o>=0&&o<d7))return A.a(d8,o)
d8[o]=j
g=o+1
e=m*d9
if(!(g<d7))return A.a(d8,g)
d8[g]=e
o+=2
g=l*d9
if(!(o<d7))return A.a(d8,o)
d8[o]=g
if(!(f>=0&&f<d5))return A.a(d6,f)
d6[f]=0.2126*j+0.7152*e+0.0722*g}d=Math.max(0.8,e4/d2)
c=new Float32Array(A.E(d6))
A.U(c,d3,d4,1,d)
b=new Float32Array(d5)
for(a=0;a<d5;++a){r=d6[a]
if(!(a<d5))return A.a(b,a)
b[a]=r*r}A.U(b,d3,d4,1,d)
a0=new Float32Array(A.E(d8))
A.U(a0,d3,d4,3,d)
a1=new Float32Array(d7)
for(a=0;a<d5;++a){r=a*3
q=d6[a]
if(!(r<d7))return A.a(d8,r)
o=d8[r]
if(!(r<d7))return A.a(a1,r)
a1[r]=q*o
o=r+1
q=d6[a]
if(!(o<d7))return A.a(d8,o)
j=d8[o]
if(!(o<d7))return A.a(a1,o)
a1[o]=q*j
r+=2
j=d6[a]
if(!(r<d7))return A.a(d8,r)
q=d8[r]
if(!(r<d7))return A.a(a1,r)
a1[r]=j*q}A.U(a1,d3,d4,3,d)
a2=new Float32Array(d7)
a3=new Float32Array(d7)
for(r=c.length,q=a0.length,a=0;a<d5;++a){o=b[a]
if(!(a<r))return A.a(c,a)
j=c[a]
for(g=a*3,j=o-j*j+e3,a4=0;a4<3;++a4){o=g+a4
if(!(o<d7))return A.a(a1,o)
e=a1[o]
a5=c[a]
if(!(o<q))return A.a(a0,o)
a6=(e-a5*a0[o])/j
if(!(o<d7))return A.a(a2,o)
a2[o]=a6
a5=a0[o]
e=c[a]
if(!(o<d7))return A.a(a3,o)
a3[o]=a5-a6*e}}A.U(a2,d3,d4,3,d)
A.U(a3,d3,d4,3,d)
r=e1*e2*3
a7=new Float32Array(r)
for(q=d3-1,o=d3-2,j=d4-1,g=d4-2,s=0;s<e2;++s){a8=B.a.u((s+0.5)/d2-0.5,0,j)
a9=Math.min(B.a.K(a8),Math.max(0,g))
b0=a8-a9
for(e=1-b0,a5=s*e1,b1=a9*d3,b2=Math.min(a9+1,j)*d3,p=0;p<e1;++p){b3=B.a.u((p+0.5)/d2-0.5,0,q)
b4=Math.min(B.a.K(b3),Math.max(0,o))
b5=Math.min(b4+1,q)
b6=b3-b4
h=(a5+p)*3
if(!(h>=0&&h<t))return A.a(e0,h)
b7=e0[h]
b8=h+1
if(!(b8<t))return A.a(e0,b8)
b8=e0[b8]
b9=h+2
if(!(b9<t))return A.a(e0,b9)
c0=0.2126*b7+0.7152*b8+0.0722*e0[b9]
c1=(b1+b4)*3
c2=(b1+b5)*3
c3=(b2+b4)*3
c4=(b2+b5)*3
for(b7=1-b6,a4=0;a4<3;++a4){b8=c1+a4
if(!(b8>=0&&b8<d7))return A.a(a2,b8)
b9=a2[b8]
c5=c2+a4
if(!(c5>=0&&c5<d7))return A.a(a2,c5)
c6=a2[c5]
c7=c3+a4
if(!(c7>=0&&c7<d7))return A.a(a2,c7)
c8=a2[c7]
c9=c4+a4
if(!(c9>=0&&c9<d7))return A.a(a2,c9)
d0=a2[c9]
if(!(b8<d7))return A.a(a3,b8)
b8=a3[b8]
if(!(c5<d7))return A.a(a3,c5)
c5=a3[c5]
if(!(c7<d7))return A.a(a3,c7)
c7=a3[c7]
if(!(c9<d7))return A.a(a3,c9)
c9=a3[c9]
d1=h+a4
if(!(d1<r))return A.a(a7,d1)
a7[d1]=((b9*b7+c6*b6)*e+(c8*b7+d0*b6)*b0)*c0+((b8*b7+c5*b6)*e+(c7*b7+c9*b6)*b0)}}}return a7},
fx:function fx(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eb:function eb(a,b){this.a=a
this.b=b},
h2:function h2(a){this.a=a},
h_:function h_(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mk(){var t,s=v.G,r=new A.hg(s)
if(typeof r=="function")A.aL(A.db("Attempting to rewrap a JS function."))
t=function(a,b){return function(c){return a(b,c,arguments.length)}}(A.lg,r)
t[$.ib()]=r
s.onmessage=t},
hg:function hg(a){this.a=a},
ik(a){var t=a.BYTES_PER_ELEMENT,s=A.bp(0,null,B.b.ag(a.byteLength,t))
return J.jS(B.h.gF(a),a.byteOffset+0*t,s*t)},
jt(a){return v.mangledGlobalNames[a]},
lg(a,b,c){u.Z.a(a)
if(A.t(c)>=1)return a.$1(b)
return a.$0()},
m7(a){var t,s,r,q,p,o=a.gj(0)
for(t=1,s=0;o>0;){r=3800>o?o:3800
o-=r
while(--r,r>=0){q=a.b
q.toString
p=a.c++
if(!(p>=0&&p<q.length))return A.a(q,p)
t+=q[p]
s+=t}t=B.b.aZ(t,65521)
s=B.b.aZ(s,65521)}return(s<<16|t)>>>0},
ax(a,b){var t,s,r=J.K(a),q=r.gj(a)
b^=4294967295
for(t=0;q>=8;){s=t+1
b=B.q[(b^r.i(a,t))&255]^b>>>8
t=s+1
b=B.q[(b^r.i(a,s))&255]^b>>>8
s=t+1
b=B.q[(b^r.i(a,t))&255]^b>>>8
t=s+1
b=B.q[(b^r.i(a,s))&255]^b>>>8
s=t+1
b=B.q[(b^r.i(a,t))&255]^b>>>8
t=s+1
b=B.q[(b^r.i(a,s))&255]^b>>>8
s=t+1
b=B.q[(b^r.i(a,t))&255]^b>>>8
t=s+1
b=B.q[(b^r.i(a,s))&255]^b>>>8
q-=8}if(q>0)do{s=t+1
b=B.q[(b^r.i(a,t))&255]^b>>>8
if(--q,q>0){t=s
continue}else break}while(!0)
return(b^4294967295)>>>0},
ji(a,b,c,d,e,f,g,h,i,j,k){var t,s,r,q,p,o,n,m
if(j==null)j=0
if(k==null)k=0
if(i==null)i=b.gac()
if(h==null)h=b.ga8()
if(e==null)e=a.gac()<b.gac()?a.gac():b.gac()
if(d==null)d=a.ga8()<b.ga8()?a.ga8():b.ga8()
t=c===B.Z
if(!t&&a.gaN())a=a.dr(a.gap())
s=h/d
r=i/e
q=u.S
p=J.ix(d,q)
for(o=0;o<d;++o)p[o]=k+B.a.h(o*s)
n=J.ix(e,q)
for(m=0;m<e;++m)n[m]=j+B.a.h(m*r)
if(t)A.lj(b,a,f,g,e,d,n,p,null,B.ai)
else A.lh(b,a,f,g,e,d,n,p,c,!1,null,B.ai)
return a},
lj(a,b,c,d,e,f,g,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i=b.gac(),h=b.ga8()
for(t=g.length,s=a0.length,r=null,q=0;q<f;++q)for(p=d+q,o=p>=h,n=0;n<e;++n){m=c+n
if(m>=i||o)continue
if(!(n<t))return A.a(g,n)
l=g[n]
if(!(q<s))return A.a(a0,q)
k=a0[q]
j=a.a
r=j==null?null:j.a1(l,k,r)
if(r==null)r=new A.a7()
b.dS(m,p,r)}},
lh(a,b,c,d,e,f,g,h,i,j,k,a0){var t,s,r,q,p,o,n,m,l
for(t=g.length,s=h.length,r=null,q=0;q<f;++q)for(p=d+q,o=0;o<e;++o){if(!(o<t))return A.a(g,o)
n=g[o]
if(!(q<s))return A.a(h,q)
m=h[q]
l=a.a
r=l==null?null:l.a1(n,m,r)
if(r==null)r=new A.a7()
A.m0(b,c+o,p,r,i,!1,k,a0)}},
m0(a7,a8,a9,b0,b1,b2,b3,b4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
if(!a7.dB(a8,a9))return a7
if(b1===B.Z||a7.gaN())if(a7.dB(a8,a9)){a7.cB(a8,a9).Y(b0)
return a7}t=b0.gW()
s=b0.gT()
r=b0.gU()
q=b0.gj(b0)<4?1:b0.gX()
if(q===0)return a7
p=a7.cB(a8,a9)
o=p.gW()
n=p.gT()
m=p.gU()
l=p.gX()
switch(b1.a){case 0:return a7
case 1:break
case 2:t=Math.max(o,t)
s=Math.max(n,s)
r=Math.max(m,r)
break
case 3:t=1-(1-t)*(1-o)
s=1-(1-s)*(1-n)
r=1-(1-r)*(1-m)
break
case 4:k=q*l
j=1-l
i=1-q
h=t*j+o*i
g=s*j+n*i
f=r*j+m*i
i=B.a.u(q,0.01,1)
j=q<0
e=j?0:1
d=B.a.u(t/i*e,0,0.99)
e=B.a.u(q,0.01,1)
i=j?0:1
c=B.a.u(s/e*i,0,0.99)
i=B.a.u(q,0.01,1)
j=j?0:1
b=B.a.u(r/i*j,0,0.99)
j=o*q
i=n*q
e=m*q
a=k<t*l+j?0:1
a0=k<s*l+i?0:1
a1=k<r*l+e?0:1
t=(k+h)*(1-a)+(j/(1-d)+h)*a
s=(k+g)*(1-a0)+(i/(1-c)+g)*a0
r=(k+f)*(1-a1)+(e/(1-b)+f)*a1
break
case 5:t=o+t
s=n+s
r=m+r
break
case 6:t=Math.min(o,t)
s=Math.min(n,s)
r=Math.min(m,r)
break
case 7:t=o*t
s=n*s
r=m*r
break
case 8:t=t!==0?1-(1-o)/t:0
s=s!==0?1-(1-n)/s:0
r=r!==0?1-(1-m)/r:0
break
case 9:j=1-l
i=1-q
e=t*j
a2=o*i
t=2*o<l?2*t*o+e+a2:q*l-2*(l-o)*(q-t)+e+a2
e=s*j
a2=n*i
s=2*n<l?2*s*n+e+a2:q*l-2*(l-n)*(q-s)+e+a2
j=r*j
i=m*i
r=2*m<l?2*r*m+j+i:q*l-2*(l-m)*(q-r)+j+i
break
case 10:j=l===0
if(j)t=0
else{i=o/l
t=o*(q*i+2*t*(1-i))+t*(1-l)+o*(1-q)}if(j)s=0
else{i=n/l
s=n*(q*i+2*s*(1-i))+s*(1-l)+n*(1-q)}if(j)r=0
else{j=m/l
r=m*(q*j+2*r*(1-j))+r*(1-l)+m*(1-q)}break
case 11:j=2*t
i=1-l
e=1-q
a2=t*i
a3=o*e
t=j<q?j*o+a2+a3:q*l-2*(l-o)*(q-t)+a2+a3
j=2*s
a2=s*i
a3=n*e
s=j<q?j*n+a2+a3:q*l-2*(l-n)*(q-s)+a2+a3
j=2*r
i=r*i
e=m*e
r=j<q?j*m+i+e:q*l-2*(l-m)*(q-r)+i+e
break
case 12:t=Math.abs(t-o)
s=Math.abs(s-n)
r=Math.abs(r-m)
break
case 13:t=o-t
s=n-s
r=m-r
break
case 14:t=t!==0?o/t:0
s=s!==0?n/s:0
r=r!==0?m/r:0
break}a4=1-q
a5=q+l*a4
a6=a5>0?1/a5:0
p.sW((t*q+o*l*a4)*a6)
p.sT((s*q+n*l*a4)*a6)
p.sU((r*q+m*l*a4)*a6)
p.sX(a5)
return a7},
m5(a,b,c,d,e,f,g){var t,s=B.a.u(Math.min(d,e),0,a.gac()-1),r=B.a.u(Math.min(f,g),0,a.ga8()-1),q=B.a.u(Math.max(d,e),0,a.gac()-1),p=B.a.u(Math.max(f,g),0,a.ga8()-1),o=a.a.au(0,s,r,q-s+1,p-r+1)
for(t=o.a;o.v();)t.Y(c)
return a},
ao(a,b,c){var t,s,r,q,p=b.gj(b),o=b.gH(),n=a.gV(),m=n==null?null:n.gH()
if(m==null)m=a.gH()
t=a.gj(a)
if(p===1)b.n(0,0,A.eC(B.a.K(a.gj(a)>2?a.gao():a.i(0,0)),m,o))
else if(p<=t)for(s=0;s<p;++s)b.n(0,s,A.eC(a.i(0,s),m,o))
else if(t===2){r=A.eC(a.i(0,0),m,o)
if(p===3){b.n(0,0,r)
b.n(0,1,r)
b.n(0,2,r)}else{c=A.eC(a.i(0,1),m,o)
b.n(0,0,r)
b.n(0,1,r)
b.n(0,2,r)
b.n(0,3,c)}}else{for(s=0;s<t;++s)b.n(0,s,A.eC(a.i(0,s),m,o))
q=t===1?b.i(0,0):0
for(s=t;s<p;++s)b.n(0,s,s===3?c:q)}return b},
jj(a,b,c,d,e){var t,s,r=a.gV(),q=r==null?null:r.gH()
if(q==null)q=a.gH()
r=e==null
t=r?null:e.gH()
c=t==null?c:t
if(c==null)c=a.gH()
t=r?null:e.gj(e)
d=t==null?d:t
if(d==null)d=a.gj(a)
if(b==null)b=0
if(c===q&&d===a.gj(a)){if(r)return a.N()
e.Y(a)
return e}switch(c.a){case 3:if(r)s=new A.c9(new Uint8Array(d))
else s=e
return A.ao(a,s,b)
case 0:return A.ao(a,r?new A.dq(d,0):e,b)
case 1:return A.ao(a,r?new A.ds(d,0):e,b)
case 2:if(r){r=d<3?1:2
s=new A.du(d,new Uint8Array(r))}else s=e
return A.ao(a,s,b)
case 4:if(r)s=new A.dr(new Uint16Array(d))
else s=e
return A.ao(a,s,b)
case 5:if(r)s=new A.dt(new Uint32Array(d))
else s=e
return A.ao(a,s,b)
case 6:if(r)s=new A.dn(new Int8Array(d))
else s=e
return A.ao(a,s,b)
case 7:if(r)s=new A.dl(new Int16Array(d))
else s=e
return A.ao(a,s,b)
case 8:if(r)s=new A.dm(new Int32Array(d))
else s=e
return A.ao(a,s,b)
case 9:if(r)s=new A.di(new Uint16Array(d))
else s=e
return A.ao(a,s,b)
case 10:if(r)s=new A.dj(new Float32Array(d))
else s=e
return A.ao(a,s,b)
case 11:if(r)s=new A.dk(new Float64Array(d))
else s=e
return A.ao(a,s,b)}},
aq(a){return 0.299*a.gk()+0.587*a.gp()+0.114*a.gm()},
H(a){var t,s,r,q=$.ic()
q.$flags&2&&A.b(q)
q[0]=a
q=$.jO()
if(0>=q.length)return A.a(q,0)
t=q[0]
if(a===0)return t>>>16
if($.aa==null)A.aC()
s=t>>>23&511
q=$.iq.bt()
if(!(s<q.length))return A.a(q,s)
s=q[s]
if(s!==0){r=t&8388607
return s+(r+4095+(r>>>13&1)>>>13)}return A.kg(t)},
kg(a){var t,s,r=a>>>16&32768,q=(a>>>23&255)-112,p=a&8388607
if(q<=0){if(q<-10)return r
p|=8388608
t=14-q
return(r|B.b.c2(p+(B.b.a2(1,t-1)-1)+(B.b.b1(p,t)&1),t))>>>0}else if(q===143)if(p===0)return r|31744
else{p=p>>>13
s=p===0?1:0
return r|p|s|31744}else{p=p+4095+(p>>>13&1)
if((p&8388608)!==0){++q
p=0}if(q>30)return r|31744
return(r|q<<10|p>>>13)>>>0}},
aC(){var t,s,r,q,p,o=$.aa
if(o!=null)return o
t=new Uint32Array(65536)
$.aa=J.jT(B.a7.gF(t),0,null)
o=new Uint16Array(512)
$.iq.b=o
for(s=0;s<256;++s){r=(s&255)-112
if(r<=0||r>=30){o[s]=0
q=(s|256)>>>0
if(!(q<512))return A.a(o,q)
o[q]=0}else{q=r<<10>>>0
o[s]=q
p=(s|256)>>>0
if(!(p<512))return A.a(o,p)
o[p]=(q|32768)>>>0}}for(s=0;s<65536;++s)t[s]=A.kh(s)
o=$.aa
o.toString
return o},
kh(a){var t,s=a>>>15&1,r=a>>>10&31,q=a&1023
if(r===0)if(q===0)return s<<31>>>0
else{while((q&1024)===0){q=q<<1;--r}++r
q&=4294966271}else if(r===31){t=s<<31
if(q===0)return(t|2139095040)>>>0
else return(t|q<<13|2139095040)>>>0}return(s<<31|r+112<<23|q<<13)>>>0},
eB(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(c<=0)return
t=Math.max(1,b*Math.max(a.a,a.b))
s=Math.max(1,B.a.K(t/4))
r=a.dt(s)
q=r.c
for(p=q.length,o=q.$flags|0,n=d+0.3,m=0;m<p;m+=3){l=q[m]
k=m+1
if(!(k<p))return A.a(q,k)
j=q[k]
i=m+2
if(!(i<p))return A.a(q,i)
j=(0.2126*l+0.7152*j+0.0722*q[i]-d)/(Math.min(1,n)-d)
if(j<0)h=0
else h=j>1?1:j
g=h*h*(3-2*h)
j=e[0]
o&2&&A.b(q)
q[m]=l*(g*j)
q[k]=q[k]*(g*e[1])
q[i]=q[i]*(g*e[2])}A.U(q,r.a,r.b,3,t/s)
A.jc(a,r,c)},
jf(a,b,c){var t,s,r
if(c<=0)return
t=Math.max(1,b*Math.max(a.a,a.b))
s=Math.max(1,B.a.K(t/4))
r=a.dt(s)
A.U(r.c,r.a,r.b,3,t/s)
A.jc(a,r,c)},
jc(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new Float32Array(3),e=a.c
for(t=a.b,s=a.a,r=e.length,q=0;q<t;++q){p=(q+0.5)/t
for(o=q*s,n=0;n<s;++n){b.dP((n+0.5)/s,p,f)
m=(o+n)*3
for(l=e.$flags|0,k=0;k<3;++k){j=m+k
if(!(j>=0&&j<r))return A.a(e,j)
i=e[j]
h=f[k]*c
g=h>1?1:h
l&2&&A.b(e)
e[j]=1-(1-i)*(1-g)}}}},
lP(a,b,c){var t,s,r,q,p,o,n,m,l
if(c<=0)return
t=a.c
for(s=t.length,r=t.$flags|0,q=0;q<s;q+=3){p=t[q]
o=q+1
if(!(o<s))return A.a(t,o)
o=t[o]
n=q+2
if(!(n<s))return A.a(t,n)
m=c*(0.35+0.65*(1-(0.2126*p+0.7152*o+0.0722*t[n])))
for(l=0;l<3;++l){p=q+l
if(!(p<s))return A.a(t,p)
o=t[p]
n=b[l]
r&2&&A.b(t)
t[p]=o+(n-o)*m*0.5}}},
lQ(a1,a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(a6<=0)return
t=a1.a
s=a1.b
r=a2*t
q=a3*s
p=a4*Math.max(t,s)
o=a1.c
for(n=o.length,m=0;m<s;++m)for(l=m*t,k=m-q,j=k*k,i=0;i<t;++i){h=i-r
g=Math.sqrt(h*h+j)/p
if(g>=1.6)continue
f=Math.exp(-g*g*2.2)*a6
e=(l+i)*3
for(d=o.$flags|0,c=0;c<3;++c){b=e+c
if(!(b>=0&&b<n))return A.a(o,b)
a=o[b]
a0=a5[c]
d&2&&A.b(o)
o[b]=1-(1-a)*(1-a0*f)}}},
lT(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(b===0)return
t=a.c
s=a.a
r=s/2
q=a.b
p=q/2
o=Math.sqrt(r*r+p*p)
for(n=t.length,m=0;m<q;++m)for(l=m*s,k=(m-p)/o,j=k*k,i=0;i<s;++i){h=(i-r)/o
g=(Math.sqrt(h*h+j)-0.45)/0.6000000000000001
if(g<0)f=0
else f=g>1?1:g
e=1-b*(f*f*(3-2*f))
d=(l+i)*3
if(!(d>=0&&d<n))return A.a(t,d)
g=t[d]
t.$flags&2&&A.b(t)
t[d]=g*e
g=d+1
if(!(g<n))return A.a(t,g)
t[g]=t[g]*e
g=d+2
if(!(g<n))return A.a(t,g)
t[g]=t[g]*e}},
eD(a9,b0,b1,b2,b3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
if(b2<=0||b0.gbb(0))return
t=b0.c
s=b0.d
r=t*s*3
q=new Float32Array(r)
for(p=b0.b,o=a9.a,n=b0.a,m=a9.c,l=0;l<s;l=k){k=l+1
B.t.af(q,l*t*3,k*t*3,m,((l+p)*o+n)*3)}j=new Float32Array(A.E(q))
A.U(j,t,s,3,Math.max(1,b1*b3))
for(i=j.length,h=m.$flags|0,g=b0.r,f=g.length,l=0;l<s;++l)for(e=(l+p)*o,d=l*t,c=0;c<t;++c){b=d+c
if(!(b>=0&&b<f))return A.a(g,b)
a=g[b]*b2
if(a<=0.003)continue
a0=b*3
if(!(a0<r))return A.a(q,a0)
b=q[a0]
a1=a0+1
if(!(a1<r))return A.a(q,a1)
a2=q[a1]
a3=a0+2
if(!(a3<r))return A.a(q,a3)
a4=q[a3]
if(!(a0<i))return A.a(j,a0)
a5=j[a0]
if(!(a1<i))return A.a(j,a1)
a1=j[a1]
if(!(a3<i))return A.a(j,a3)
a3=(Math.abs(0.2126*b+0.7152*a2+0.0722*a4-(0.2126*a5+0.7152*a1+0.0722*j[a3]))-0.035)/0.075
if(a3<0)a6=0
else a6=a3>1?1:a3
a6=a*(1-a6*a6*(3-2*a6))*0.85
a7=(e+c+n)*3
for(a8=0;a8<3;++a8){b=a7+a8
a1=a0+a8
if(!(a1<r))return A.a(q,a1)
a2=q[a1]
if(!(a1<i))return A.a(j,a1)
a1=j[a1]
h&2&&A.b(m)
if(!(b>=0&&b<m.length))return A.a(m,b)
m[b]=a2+(a1-a2)*a6}}},
jp(b8,b9,c0,c1,c2,c3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
if(c2<=0||c1<=0)return
t=Math.max(1,b9.t(B.e).J(0,b9.t(B.f)).gj(0))
s=c3>>>0
r=new A.fv(s===0?2654435769:s)
s=b8.a
q=A.al(s,b8.b,b9.M(B.n),0)
p=b9.C(6)
o=b9.C(4)
n=b9.C(98)
m=b9.C(327)
l=A.k([new A.bu([p.ai(o,0.5),m.J(0,n).aQ(0,0.25),o.J(0,p).aQ(0,0.35),0.26])],u.hh)
k=b9.C(197)
for(j=[B.d_,B.d1],i=k.a,h=k.b,g=t*0.15,f=0;f<2;++f){e=j[f]
d=b9.C(e.a).ai(b9.C(e.b),0.35)
c=d.ai(k,0.18)
b=(d.a-i)*0.42
a=(d.b-h)*0.42
a0=Math.max(0.001,Math.sqrt(b*b+a*a))
B.c.L(l,new A.bu([c,new A.C(b,a),new A.C(-a/a0*g,b/a0*g),0.37]))}a1=B.a.aH(30+170*c1)
for(j=l.length,f=0;f<l.length;l.length===j||(0,A.D)(l),++f){i=l[f].a
a2=B.a.aH(a1*i[3])
for(a3=0;a3<a2;++a3){do{a4=r.dF()
a5=r.dF()}while(a4*a4+a5*a5>3.2)
h=i[0]
g=i[1]
b=a4*0.6
a=i[2]
a6=a5*0.6
a7=r.bi()
a8=r.bi()/4294967296<0.1?1.6:1
a9=t*(0.006+0.009*(a7/4294967296))*a8
a8=r.bi()
b0=0.8+0.44999999999999996*(r.bi()/4294967296)
q.bh(new A.C(h.a+g.a*b+a.a*a6,h.b+g.b*b+a.b*a6),a9*b0,a9/b0,0+3.141592653589793*(r.bi()/4294967296),0.35+0.65*(a8/4294967296))}}q.b3(t*0.004)
q.bZ(c0)
for(j=q.d,i=q.c,h=q.b,g=q.a,b1=b8.c,b=b1.length,a=b1.$flags|0,a6=q.r,a7=a6.length,b2=0;b2<j;++b2)for(a8=(b2+h)*s,b3=b2*i,b4=0;b4<i;++b4){b5=b3+b4
if(!(b5>=0&&b5<a7))return A.a(a6,b5)
b6=a6[b5]*c2
if(b6<=0.004)continue
b7=(a8+b4+g)*3
if(!(b7>=0&&b7<b))return A.a(b1,b7)
b5=b1[b7]
a&2&&A.b(b1)
b1[b7]=b5*(1-b6*0.3)
b5=b7+1
if(!(b5<b))return A.a(b1,b5)
b1[b5]=b1[b5]*(1-b6*0.44)
b5=b7+2
if(!(b5<b))return A.a(b1,b5)
b1[b5]=b1[b5]*(1-b6*0.52)}},
m1(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.a,g=a.b,f=h*g,e=new Float32Array(f)
for(t=a.c,s=t.length,r=0;r<f;++r){q=r*3
if(!(q<s))return A.a(t,q)
p=t[q]
o=q+1
if(!(o<s))return A.a(t,o)
o=t[o]
q+=2
if(!(q<s))return A.a(t,q)
q=t[q]
if(!(r<f))return A.a(e,r)
e[r]=0.2126*p+0.7152*o+0.0722*q}A.U(e,h,g,1,Math.max(1,Math.max(h,g)/600))
n=new Float32Array(f)
for(t=g-1,s=h-1,m=1;m<t;++m)for(q=m*h,l=1;l<s;++l){r=q+l
p=r+1
if(!(p>=0&&p<f))return A.a(e,p)
p=e[p]
o=r-1
if(!(o>=0&&o<f))return A.a(e,o)
k=p-e[o]
o=r+h
if(!(o>=0&&o<f))return A.a(e,o)
o=e[o]
p=r-h
if(!(p>=0&&p<f))return A.a(e,p)
j=o-e[p]
p=(Math.sqrt(k*k+j*j)-0.03)/0.09
if(p<0)i=0
else i=p>1?1:p
if(!(r>=0&&r<f))return A.a(n,r)
n[r]=i*i*(3-2*i)}return n},
ag(a,b,c,d,e){var t=J.K(d)
return A.bz(a,b,c,t.i(d,0),t.i(d,1),t.i(d,2),e)}},B={}
var w=[A,J,B]
var $={}
A.hz.prototype={}
J.dI.prototype={
O(a,b){return a===b},
gG(a){return A.cL(a)},
D(a){return"Instance of '"+A.e5(a)+"'"},
gab(a){return A.bA(A.hY(this))}}
J.dL.prototype={
D(a){return String(a)},
gG(a){return a?519018:218159},
gab(a){return A.bA(u.y)},
$iy:1,
$iaf:1}
J.cr.prototype={
O(a,b){return null==b},
D(a){return"null"},
gG(a){return 0},
$iy:1}
J.ct.prototype={$iG:1}
J.aU.prototype={
gG(a){return 0},
D(a){return String(a)}}
J.e2.prototype={}
J.bq.prototype={}
J.aE.prototype={
D(a){var t=a[$.jv()]
if(t==null)t=a[$.ib()]
if(t==null)return this.dX(a)
return"JavaScript function for "+J.aO(t)},
$ib4:1}
J.bR.prototype={
gG(a){return 0},
D(a){return String(a)}}
J.bS.prototype={
gG(a){return 0},
D(a){return String(a)}}
J.u.prototype={
L(a,b){A.X(a).c.a(b)
a.$flags&1&&A.b(a,29)
a.push(b)},
aW(a,b){var t
A.X(a).l("d<1>").a(b)
a.$flags&1&&A.b(a,"addAll",2)
if(Array.isArray(b)){this.e2(a,b)
return}for(t=J.b1(b);t.v();)a.push(t.gE())},
e2(a,b){var t,s
u.u.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.f(A.ai(a))
for(s=0;s<t;++s)a.push(b[s])},
eU(a){a.$flags&1&&A.b(a,"clear","clear")
a.length=0},
bA(a,b){var t,s=A.dR(a.length,"",!1,u.N)
for(t=0;t<a.length;++t)this.n(s,t,A.x(a[t]))
return s.join(b)},
dH(a,b){return A.eh(a,0,A.jg(b,"count",u.S),A.X(a).c)},
c3(a,b){return A.eh(a,b,null,A.X(a).c)},
f7(a,b,c){var t,s,r,q=A.X(a)
q.l("af(1)").a(b)
q.l("1()?").a(c)
t=a.length
for(s=0;s<t;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==t)throw A.f(A.ai(a))}q=c.$0()
return q},
ak(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
bH(a,b,c){if(b<0||b>a.length)throw A.f(A.a_(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.f(A.a_(c,b,a.length,"end",null))
if(b===c)return A.k([],A.X(a))
return A.k(a.slice(b,c),A.X(a))},
c5(a,b){return this.bH(a,b,null)},
gdw(a){if(a.length>0)return a[0]
throw A.f(A.hx())},
gct(a){var t=a.length
if(t>0)return a[t-1]
throw A.f(A.hx())},
dv(a,b){var t,s
A.X(a).l("af(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(!b.$1(a[s]))return!1
if(a.length!==t)throw A.f(A.ai(a))}return!0},
cG(a,b){var t,s,r,q,p,o=A.X(a)
o.l("h(1,1)?").a(b)
a.$flags&2&&A.b(a,"sort")
t=a.length
if(t<2)return
if(b==null)b=J.lr()
if(t===2){s=a[0]
r=a[1]
o=b.$2(s,r)
if(typeof o!=="number")return o.fs()
if(o>0){a[0]=r
a[1]=s}return}q=0
if(o.c.b(null))for(p=0;p<a.length;++p)if(a[p]===void 0){a[p]=null;++q}a.sort(A.lW(b,2))
if(q>0)this.eM(a,q)},
dT(a){return this.cG(a,null)},
eM(a,b){var t,s=a.length
for(;t=s-1,s>0;s=t)if(a[t]===null){a[t]=void 0;--b
if(b===0)break}},
aE(a,b){var t
for(t=0;t<a.length;++t)if(J.as(a[t],b))return!0
return!1},
D(a){return A.hy(a,"[","]")},
gA(a){return new J.b2(a,a.length,A.X(a).l("b2<1>"))},
gG(a){return A.cL(a)},
gj(a){return a.length},
i(a,b){if(!(b>=0&&b<a.length))throw A.f(A.h3(a,b))
return a[b]},
n(a,b,c){A.X(a).c.a(c)
a.$flags&2&&A.b(a)
if(!(b>=0&&b<a.length))throw A.f(A.h3(a,b))
a[b]=c},
$id:1,
$ir:1}
J.dK.prototype={
fl(a){var t,s,r
if(!Array.isArray(a))return null
t=a.$flags|0
if((t&4)!==0)s="const, "
else if((t&2)!==0)s="unmodifiable, "
else s=(t&1)!==0?"fixed, ":""
r="Instance of '"+A.e5(a)+"'"
if(s==="")return r
return r+" ("+s+"length: "+a.length+")"}}
J.fe.prototype={}
J.b2.prototype={
gE(){var t=this.d
return t==null?this.$ti.c.a(t):t},
v(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.D(r)
throw A.f(r)}t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0},
$iq:1}
J.bQ.prototype={
bn(a,b){var t
A.d8(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gbY(b)
if(this.gbY(a)===t)return 0
if(this.gbY(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbY(a){return a===0?1/a<0:a<0},
h(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.f(A.bZ(""+a+".toInt()"))},
Z(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw A.f(A.bZ(""+a+".ceil()"))},
K(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw A.f(A.bZ(""+a+".floor()"))},
aH(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.f(A.bZ(""+a+".round()"))},
u(a,b,c){if(this.bn(b,c)>0)throw A.f(A.b0(b))
if(this.bn(a,b)<0)return b
if(this.bn(a,c)>0)return c
return a},
dI(a,b){var t
if(b>20)throw A.f(A.a_(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gbY(a))return"-"+t
return t},
D(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
aZ(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
ag(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d5(a,b)},
aV(a,b){return(a|0)===a?a/b|0:this.d5(a,b)},
d5(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.f(A.bZ("Result of truncating division is "+A.x(t)+": "+A.x(a)+" ~/ "+b))},
a2(a,b){if(b<0)throw A.f(A.b0(b))
return b>31?0:a<<b>>>0},
cl(a,b){return b>31?0:a<<b>>>0},
c2(a,b){var t
if(b<0)throw A.f(A.b0(b))
if(a>0)t=this.bv(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
I(a,b){var t
if(a>0)t=this.bv(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
b1(a,b){if(0>b)throw A.f(A.b0(b))
return this.bv(a,b)},
bv(a,b){return b>31?0:a>>>b},
gab(a){return A.bA(u.o)},
$iaB:1,
$ii:1,
$il:1}
J.cq.prototype={
gab(a){return A.bA(u.S)},
$iy:1,
$ih:1}
J.dM.prototype={
gab(a){return A.bA(u.i)},
$iy:1}
J.aT.prototype={
de(a,b){return new A.ex(b,a,0)},
dU(a,b){var t
if(typeof b=="string")return A.k(a.split(b),u.s)
else{if(b instanceof A.cs){t=b.e
t=!(t==null?b.e=b.e6():t)}else t=!1
if(t)return A.k(a.split(b.b),u.s)
else return this.eb(a,b)}},
eb(a,b){var t,s,r,q,p,o,n=A.k([],u.s)
for(t=J.jR(b,a),t=t.gA(t),s=0,r=1;t.v();){q=t.gE()
p=q.gcH()
o=q.gcp()
r=o-p
if(r===0&&s===p)continue
B.c.L(n,this.b_(a,s,p))
s=o}if(s<a.length||r>0)B.c.L(n,this.c6(a,s))
return n},
cI(a,b){var t=b.length
if(t>a.length)return!1
return b===a.substring(0,t)},
b_(a,b,c){return a.substring(b,A.bp(b,c,a.length))},
c6(a,b){return this.b_(a,b,null)},
c0(a){var t,s,r,q=a.trim(),p=q.length
if(p===0)return q
if(0>=p)return A.a(q,0)
if(q.charCodeAt(0)===133){t=J.ko(q,1)
if(t===p)return""}else t=0
s=p-1
if(!(s>=0))return A.a(q,s)
r=q.charCodeAt(s)===133?J.kp(q,s):p
if(t===0&&r===p)return q
return q.substring(t,r)},
aQ(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.f(B.b4)
for(t=a,s="";;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
fb(a,b){var t=b.cS(a,0)
return t==null?-1:t.b.index},
bn(a,b){var t
A.Y(b)
if(a===b)t=0
else t=a<b?-1:1
return t},
D(a){return a},
gG(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gab(a){return A.bA(u.N)},
gj(a){return a.length},
$iy:1,
$iaB:1,
$ifq:1,
$iv:1}
A.bT.prototype={
D(a){return"LateInitializationError: "+this.a}}
A.av.prototype={
gj(a){return this.a.length},
i(a,b){var t=this.a
if(!(b>=0&&b<t.length))return A.a(t,b)
return t.charCodeAt(b)}}
A.fw.prototype={}
A.ce.prototype={}
A.a4.prototype={
gA(a){var t=this
return new A.b7(t,t.gj(t),A.j(t).l("b7<a4.E>"))},
bA(a,b){var t,s,r,q=this,p=q.gj(q)
if(b.length!==0){if(p===0)return""
t=A.x(q.ak(0,0))
if(p!==q.gj(q))throw A.f(A.ai(q))
for(s=t,r=1;r<p;++r){s=s+b+A.x(q.ak(0,r))
if(p!==q.gj(q))throw A.f(A.ai(q))}return s.charCodeAt(0)==0?s:s}else{for(r=0,s="";r<p;++r){s+=A.x(q.ak(0,r))
if(p!==q.gj(q))throw A.f(A.ai(q))}return s.charCodeAt(0)==0?s:s}}}
A.cT.prototype={
geg(){var t=J.aN(this.a),s=this.c
if(s==null||s>t)return t
return s},
geP(){var t=J.aN(this.a),s=this.b
if(s>t)return t
return s},
gj(a){var t,s=J.aN(this.a),r=this.b
if(r>=s)return 0
t=this.c
if(t==null||t>=s)return s-r
return t-r},
ak(a,b){var t=this,s=t.geP()+b
if(b<0||s>=t.geg())throw A.f(A.ht(b,t.gj(0),t,"index"))
return J.id(t.a,s)},
c3(a,b){var t,s,r=this
A.cN(b,"count")
t=r.b+b
s=r.c
if(s!=null&&t>=s)return new A.cf(r.$ti.l("cf<1>"))
return A.eh(r.a,t,s,r.$ti.c)}}
A.b7.prototype={
gE(){var t=this.d
return t==null?this.$ti.c.a(t):t},
v(){var t,s=this,r=s.a,q=J.K(r),p=q.gj(r)
if(s.b!==p)throw A.f(A.ai(r))
t=s.c
if(t>=p){s.d=null
return!1}s.d=q.ak(r,t);++s.c
return!0},
$iq:1}
A.cv.prototype={
gj(a){return J.aN(this.a)},
ak(a,b){return this.b.$1(J.id(this.a,b))}}
A.cX.prototype={
gA(a){return new A.br(J.b1(this.a),this.b,this.$ti.l("br<1>"))}}
A.br.prototype={
v(){var t,s
for(t=this.a,s=this.b;t.v();)if(s.$1(t.gE()))return!0
return!1},
gE(){return this.a.gE()},
$iq:1}
A.cf.prototype={
gA(a){return B.aJ},
gj(a){return 0}}
A.cg.prototype={
v(){return!1},
gE(){throw A.f(A.hx())},
$iq:1}
A.V.prototype={}
A.aZ.prototype={
n(a,b,c){A.j(this).l("aZ.E").a(c)
throw A.f(A.bZ("Cannot modify an unmodifiable list"))},
aR(a,b,c,d){A.j(this).l("d<aZ.E>").a(d)
throw A.f(A.bZ("Cannot modify an unmodifiable list"))}}
A.bY.prototype={}
A.aH.prototype={
gj(a){return J.aN(this.a)},
ak(a,b){var t=this.a,s=J.K(t)
return s.ak(t,s.gj(t)-1-b)}}
A.I.prototype={$r:"+(1,2)",$s:1}
A.T.prototype={$r:"+(1,2,3)",$s:2}
A.bu.prototype={$r:"+(1,2,3,4)",$s:3}
A.bG.prototype={
D(a){return A.hD(this)},
dE(a,b,c,d){var t=A.ab(c,d)
this.aF(0,new A.eK(this,A.j(this).b0(c).b0(d).l("aV<1,2>(3,4)").a(b),t))
return t},
$ia5:1}
A.eK.prototype={
$2(a,b){var t=A.j(this.a),s=this.b.$2(t.c.a(a),t.y[1].a(b))
this.c.n(0,s.a,s.b)},
$S(){return A.j(this.a).l("~(1,2)")}}
A.cb.prototype={
gj(a){return this.b.length},
gcZ(){var t=this.$keys
if(t==null){t=Object.keys(this.a)
this.$keys=t}return t},
a6(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
i(a,b){if(!this.a6(b))return null
return this.b[this.a[b]]},
aF(a,b){var t,s,r,q
this.$ti.l("~(1,2)").a(b)
t=this.gcZ()
s=this.b
for(r=t.length,q=0;q<r;++q)b.$2(t[q],s[q])},
gaO(){return new A.cZ(this.gcZ(),this.$ti.l("cZ<1>"))}}
A.cZ.prototype={
gj(a){return this.a.length},
gA(a){var t=this.a
return new A.bs(t,t.length,this.$ti.l("bs<1>"))}}
A.bs.prototype={
gE(){var t=this.d
return t==null?this.$ti.c.a(t):t},
v(){var t=this,s=t.c
if(s>=t.b){t.d=null
return!1}t.d=t.a[s]
t.c=s+1
return!0},
$iq:1}
A.bI.prototype={
bs(){var t=this,s=t.$map
if(s==null){s=new A.cu(t.$ti.l("cu<1,2>"))
A.jk(t.a,s)
t.$map=s}return s},
a6(a){return this.bs().a6(a)},
i(a,b){return this.bs().i(0,b)},
aF(a,b){this.$ti.l("~(1,2)").a(b)
this.bs().aF(0,b)},
gaO(){var t=this.bs()
return new A.aF(t,A.j(t).l("aF<1>"))},
gj(a){return this.bs().a}}
A.ca.prototype={}
A.aQ.prototype={
gj(a){return this.b},
gA(a){var t,s=this,r=s.$keys
if(r==null){r=Object.keys(s.a)
s.$keys=r}t=r
return new A.bs(t,t.length,s.$ti.l("bs<1>"))},
aE(a,b){if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.cP.prototype={}
A.fC.prototype={
aY(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
A.cF.prototype={
D(a){return"Null check operator used on a null value"}}
A.dN.prototype={
D(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
A.el.prototype={
D(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
A.fo.prototype={
D(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aP.prototype={
D(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.ju(s==null?"unknown":s)+"'"},
$ib4:1,
gfq(){return this},
$C:"$1",
$R:1,
$D:null}
A.dg.prototype={$C:"$0",$R:0}
A.dh.prototype={$C:"$2",$R:2}
A.ej.prototype={}
A.ee.prototype={
D(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.ju(t)+"'"}}
A.bF.prototype={
O(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bF))return!1
return this.$_target===b.$_target&&this.a===b.a},
gG(a){return(A.i7(this.a)^A.cL(this.$_target))>>>0},
D(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.e5(this.a)+"'")}}
A.e9.prototype={
D(a){return"RuntimeError: "+this.a}}
A.ak.prototype={
gj(a){return this.a},
gaO(){return new A.aF(this,A.j(this).l("aF<1>"))},
a6(a){var t,s
if(typeof a=="string"){t=this.b
if(t==null)return!1
return t[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){s=this.c
if(s==null)return!1
return s[a]!=null}else return this.fc(a)},
fc(a){var t=this.d
if(t==null)return!1
return this.bX(this.cV(t,a),a)>=0},
i(a,b){var t,s,r,q,p=null
if(typeof b=="string"){t=this.b
if(t==null)return p
s=t[b]
r=s==null?p:s.b
return r}else if(typeof b=="number"&&(b&0x3fffffff)===b){q=this.c
if(q==null)return p
s=q[b]
r=s==null?p:s.b
return r}else return this.fd(b)},
fd(a){var t,s,r=this.d
if(r==null)return null
t=this.cV(r,a)
s=this.bX(t,a)
if(s<0)return null
return t[s].b},
n(a,b,c){var t,s,r=this,q=A.j(r)
q.c.a(b)
q.y[1].a(c)
if(typeof b=="string"){t=r.b
r.cM(t==null?r.b=r.cd():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=r.c
r.cM(s==null?r.c=r.cd():s,b,c)}else r.fe(b,c)},
fe(a,b){var t,s,r,q,p=this,o=A.j(p)
o.c.a(a)
o.y[1].a(b)
t=p.d
if(t==null)t=p.d=p.cd()
s=p.cr(a)
r=t[s]
if(r==null)t[s]=[p.ce(a,b)]
else{q=p.bX(r,a)
if(q>=0)r[q].b=b
else r.push(p.ce(a,b))}},
fg(a,b){var t,s,r=this,q=A.j(r)
q.c.a(a)
q.l("2()").a(b)
if(r.a6(a)){t=r.i(0,a)
return t==null?q.y[1].a(t):t}s=b.$0()
r.n(0,a,s)
return s},
aF(a,b){var t,s,r=this
A.j(r).l("~(1,2)").a(b)
t=r.e
s=r.r
while(t!=null){b.$2(t.a,t.b)
if(s!==r.r)throw A.f(A.ai(r))
t=t.c}},
cM(a,b,c){var t,s=A.j(this)
s.c.a(b)
s.y[1].a(c)
t=a[b]
if(t==null)a[b]=this.ce(b,c)
else t.b=c},
ce(a,b){var t=this,s=A.j(t),r=new A.fk(s.c.a(a),s.y[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
cr(a){return J.aA(a)&1073741823},
cV(a,b){return a[this.cr(b)]},
bX(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.as(a[s].a,b))return s
return-1},
D(a){return A.hD(this)},
cd(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
$ihB:1}
A.fk.prototype={}
A.aF.prototype={
gj(a){return this.a.a},
gA(a){var t=this.a
return new A.P(t,t.r,t.e,this.$ti.l("P<1>"))},
aE(a,b){return this.a.a6(b)}}
A.P.prototype={
gE(){return this.d},
v(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.f(A.ai(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.a
s.c=t.c
return!0}},
$iq:1}
A.cu.prototype={
cr(a){return A.lV(a)&1073741823},
bX(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.as(a[s].a,b))return s
return-1}}
A.h9.prototype={
$1(a){return this.a(a)},
$S:4}
A.ha.prototype={
$2(a,b){return this.a(a,b)},
$S:5}
A.hb.prototype={
$1(a){return this.a(A.Y(a))},
$S:6}
A.ad.prototype={
D(a){return this.d6(!1)},
d6(a){var t,s,r,q,p,o=this.ej(),n=this.bN(),m=(a?"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
if(!(r<n.length))return A.a(n,r)
p=n[r]
m=a?m+A.iH(p):m+A.x(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
ej(){var t,s=this.$s
while($.fP.length<=s)B.c.L($.fP,null)
t=$.fP[s]
if(t==null){t=this.e5()
B.c.n($.fP,s,t)}return t},
e5(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=A.k(new Array(m),u.f)
for(t=0;t<m;++t)l[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
B.c.n(l,r,s[t])}}l=A.kt(l,!1,u.K)
l.$flags=3
return l}}
A.c0.prototype={
bN(){return[this.a,this.b]},
O(a,b){if(b==null)return!1
return b instanceof A.c0&&this.$s===b.$s&&J.as(this.a,b.a)&&J.as(this.b,b.b)},
gG(a){return A.hE(this.$s,this.a,this.b,B.E)}}
A.c1.prototype={
bN(){return[this.a,this.b,this.c]},
O(a,b){var t=this
if(b==null)return!1
return b instanceof A.c1&&t.$s===b.$s&&J.as(t.a,b.a)&&J.as(t.b,b.b)&&J.as(t.c,b.c)},
gG(a){var t=this
return A.hE(t.$s,t.a,t.b,t.c)}}
A.c2.prototype={
bN(){return this.a},
O(a,b){if(b==null)return!1
return b instanceof A.c2&&this.$s===b.$s&&A.kY(this.a,b.a)},
gG(a){return A.hE(this.$s,A.o(this.a),B.E,B.E)}}
A.cs.prototype={
D(a){return"RegExp/"+this.a+"/"+this.b.flags},
gey(){var t=this,s=t.c
if(s!=null)return s
s=t.b
return t.c=A.iA(t.a,s.multiline,!s.ignoreCase,s.unicode,s.dotAll,"g")},
e6(){var t,s=this.a
if(!A.ms(s,"(",0))return!1
t=this.b.unicode?"u":""
return new RegExp("(?:)|"+s,t).exec("").length>1},
de(a,b){return new A.em(this,b,0)},
cS(a,b){var t,s=this.gey()
if(s==null)s=A.hW(s)
s.lastIndex=b
t=s.exec(a)
if(t==null)return null
return new A.eu(t)},
$ifq:1,
$ikG:1}
A.eu.prototype={
gcH(){return this.b.index},
gcp(){var t=this.b
return t.index+t[0].length},
$ibV:1,
$icO:1}
A.em.prototype={
gA(a){return new A.en(this.a,this.b,this.c)}}
A.en.prototype={
gE(){var t=this.d
return t==null?u.cz.a(t):t},
v(){var t,s,r,q,p,o,n=this,m=n.b
if(m==null)return!1
t=n.c
s=m.length
if(t<=s){r=n.a
q=r.cS(m,t)
if(q!=null){n.d=q
p=q.gcp()
if(q.b.index===p){t=!1
if(r.b.unicode){r=n.c
o=r+1
if(o<s){if(!(r>=0&&r<s))return A.a(m,r)
r=m.charCodeAt(r)
if(r>=55296&&r<=56319){if(!(o>=0))return A.a(m,o)
t=m.charCodeAt(o)
t=t>=56320&&t<=57343}}}p=(t?p+1:p)+1}n.c=p
return!0}}n.b=n.d=null
return!1},
$iq:1}
A.eg.prototype={
gcp(){return this.a+this.c.length},
$ibV:1,
gcH(){return this.a}}
A.ex.prototype={
gA(a){return new A.ey(this.a,this.b,this.c)}}
A.ey.prototype={
v(){var t,s,r=this,q=r.c,p=r.b,o=p.length,n=r.a,m=n.length
if(q+o>m){r.d=null
return!1}t=n.indexOf(p,q)
if(t<0){r.c=m+1
r.d=null
return!1}s=t+o
r.d=new A.eg(t,p)
r.c=s===r.c?s+1:s
return!0},
gE(){var t=this.d
t.toString
return t},
$iq:1}
A.fH.prototype={
bt(){var t=this.b
if(t===this)throw A.f(A.fg(""))
return t}}
A.aW.prototype={
gab(a){return B.dk},
bx(a,b,c){A.bw(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
di(a){return this.bx(a,0,null)},
dh(a,b,c){A.bw(a,b,c)
c=B.b.aV(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
dg(a,b,c){A.bw(a,b,c)
c=B.b.aV(a.byteLength-b,4)
return new Float32Array(a,b,c)},
df(a,b,c){A.bw(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
$iy:1,
$iaW:1}
A.b8.prototype={$ib8:1}
A.cB.prototype={
gF(a){if(((a.$flags|0)&2)!==0)return new A.fV(a.buffer)
else return a.buffer},
ev(a,b,c,d){var t=A.a_(b,0,c,d,null)
throw A.f(t)},
cO(a,b,c,d){if(b>>>0!==b||b>c)this.ev(a,b,c,d)}}
A.fV.prototype={
bx(a,b,c){var t=A.kB(this.a,b,c)
t.$flags=3
return t},
di(a){return this.bx(0,0,null)},
dh(a,b,c){var t=A.kz(this.a,b,c)
t.$flags=3
return t},
dg(a,b,c){var t=A.kx(this.a,b,c)
t.$flags=3
return t},
df(a,b,c){var t=A.kv(this.a,b,c)
t.$flags=3
return t}}
A.dT.prototype={
gab(a){return B.dl},
$iy:1}
A.Q.prototype={
gj(a){return a.length},
d4(a,b,c,d,e){var t,s,r=a.length
this.cO(a,b,r,"start")
this.cO(a,c,r,"end")
if(b>c)throw A.f(A.a_(b,0,c,null,null))
t=c-b
if(e<0)throw A.f(A.db(e))
s=d.length
if(s-e<t)throw A.f(A.iM("Not enough elements"))
if(e!==0||s!==t)d=d.subarray(e,e+t)
a.set(d,b)},
$ia3:1}
A.aX.prototype={
i(a,b){A.aK(b,a,a.length)
return a[b]},
n(a,b,c){A.c3(c)
a.$flags&2&&A.b(a)
A.aK(b,a,a.length)
a[b]=c},
af(a,b,c,d,e){u.l.a(d)
a.$flags&2&&A.b(a,5)
if(u.d4.b(d)){this.d4(a,b,c,d,e)
return}this.cL(a,b,c,d,e)},
aR(a,b,c,d){return this.af(a,b,c,d,0)},
$id:1,
$ir:1}
A.a6.prototype={
n(a,b,c){A.t(c)
a.$flags&2&&A.b(a)
A.aK(b,a,a.length)
a[b]=c},
af(a,b,c,d,e){u.w.a(d)
a.$flags&2&&A.b(a,5)
if(u.eB.b(d)){this.d4(a,b,c,d,e)
return}this.cL(a,b,c,d,e)},
aR(a,b,c,d){return this.af(a,b,c,d,0)},
$id:1,
$ir:1}
A.cw.prototype={
gab(a){return B.dm},
$iy:1,
$iho:1}
A.cx.prototype={
gab(a){return B.dn},
$iy:1,
$ihp:1}
A.cy.prototype={
gab(a){return B.dp},
i(a,b){A.aK(b,a,a.length)
return a[b]},
$iy:1,
$ihu:1}
A.cz.prototype={
gab(a){return B.dq},
i(a,b){A.aK(b,a,a.length)
return a[b]},
$iy:1,
$ihv:1}
A.cA.prototype={
gab(a){return B.dr},
i(a,b){A.aK(b,a,a.length)
return a[b]},
$iy:1,
$ihw:1}
A.cC.prototype={
gab(a){return B.dt},
i(a,b){A.aK(b,a,a.length)
return a[b]},
$iy:1,
$ihP:1}
A.cD.prototype={
gab(a){return B.du},
i(a,b){A.aK(b,a,a.length)
return a[b]},
$iy:1,
$ihQ:1}
A.cE.prototype={
gab(a){return B.dv},
gj(a){return a.length},
i(a,b){A.aK(b,a,a.length)
return a[b]},
$iy:1}
A.b9.prototype={
gab(a){return B.dw},
gj(a){return a.length},
i(a,b){A.aK(b,a,a.length)
return a[b]},
bH(a,b,c){return new Uint8Array(a.subarray(b,A.eA(b,c,a.length)))},
c5(a,b){return this.bH(a,b,null)},
$iy:1,
$ib9:1,
$icV:1}
A.d_.prototype={}
A.d0.prototype={}
A.d1.prototype={}
A.d2.prototype={}
A.an.prototype={
l(a){return A.d7(v.typeUniverse,this,a)},
b0(a){return A.j1(v.typeUniverse,this,a)}}
A.ep.prototype={}
A.ez.prototype={
D(a){return A.a8(this.a,null)}}
A.eo.prototype={
D(a){return this.a}}
A.d3.prototype={}
A.ef.prototype={}
A.fl.prototype={
$2(a,b){this.a.n(0,this.b.a(a),this.c.a(b))},
$S:7}
A.w.prototype={
gA(a){return new A.b7(a,this.gj(a),A.az(a).l("b7<w.E>"))},
ak(a,b){return this.i(a,b)},
aE(a,b){var t,s=this.gj(a)
for(t=0;t<s;++t){if(this.i(a,t)===b)return!0
if(s!==this.gj(a))throw A.f(A.ai(a))}return!1},
c3(a,b){return A.eh(a,b,null,A.az(a).l("w.E"))},
dH(a,b){return A.eh(a,0,A.jg(b,"count",u.S),A.az(a).l("w.E"))},
bW(a,b,c,d){var t
A.az(a).l("w.E?").a(d)
A.bp(b,c,this.gj(a))
for(t=b;t<c;++t)this.n(a,t,d)},
af(a,b,c,d,e){var t,s,r
A.az(a).l("d<w.E>").a(d)
A.bp(b,c,this.gj(a))
t=c-b
if(t===0)return
A.cN(e,"skipCount")
s=J.K(d)
if(e+t>s.gj(d))throw A.f(A.iM("Too few elements"))
if(e<b)for(r=t-1;r>=0;--r)this.n(a,b+r,s.i(d,e+r))
else for(r=0;r<t;++r)this.n(a,b+r,s.i(d,e+r))},
aR(a,b,c,d){return this.af(a,b,c,d,0)},
dQ(a,b,c){A.az(a).l("d<w.E>").a(c)
this.aR(a,b,b+c.length,c)},
D(a){return A.hy(a,"[","]")},
$id:1,
$ir:1}
A.L.prototype={
aF(a,b){var t,s,r,q=A.j(this)
q.l("~(L.K,L.V)").a(b)
for(t=this.gaO(),t=t.gA(t),q=q.l("L.V");t.v();){s=t.gE()
r=this.i(0,s)
b.$2(s,r==null?q.a(r):r)}},
dE(a,b,c,d){var t,s,r,q,p,o=A.j(this)
o.b0(c).b0(d).l("aV<1,2>(L.K,L.V)").a(b)
t=A.ab(c,d)
for(s=this.gaO(),s=s.gA(s),o=o.l("L.V");s.v();){r=s.gE()
q=this.i(0,r)
p=b.$2(r,q==null?o.a(q):q)
t.n(0,p.a,p.b)}return t},
a6(a){return this.gaO().aE(0,a)},
gj(a){var t=this.gaO()
return t.gj(t)},
D(a){return A.hD(this)},
$ia5:1}
A.fm.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=A.x(a)
s.a=(s.a+=t)+": "
t=A.x(b)
s.a+=t},
$S:8}
A.bX.prototype={
D(a){return A.hy(this,"{","}")},
$id:1}
A.er.prototype={
i(a,b){var t,s=this.b
if(s==null)return this.c.i(0,b)
else if(typeof b!="string")return null
else{t=s[b]
return typeof t=="undefined"?this.eH(b):t}},
gj(a){return this.b==null?this.c.a:this.bL().length},
gaO(){if(this.b==null){var t=this.c
return new A.aF(t,A.j(t).l("aF<1>"))}return new A.es(this)},
a6(a){if(this.b==null)return this.c.a6(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
aF(a,b){var t,s,r,q,p=this
u.cA.a(b)
if(p.b==null)return p.c.aF(0,b)
t=p.bL()
for(s=0;s<t.length;++s){r=t[s]
q=p.b[r]
if(typeof q=="undefined"){q=A.h0(p.a[r])
p.b[r]=q}b.$2(r,q)
if(t!==p.c)throw A.f(A.ai(p))}},
bL(){var t=u.bM.a(this.c)
if(t==null)t=this.c=A.k(Object.keys(this.a),u.s)
return t},
eH(a){var t
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
t=A.h0(this.a[a])
return this.b[a]=t}}
A.es.prototype={
gj(a){return this.a.gj(0)},
ak(a,b){var t=this.a
if(t.b==null)t=t.gaO().ak(0,b)
else{t=t.bL()
if(!(b>=0&&b<t.length))return A.a(t,b)
t=t[b]}return t},
gA(a){var t=this.a
if(t.b==null){t=t.gaO()
t=t.gA(t)}else{t=t.bL()
t=new J.b2(t,t.length,A.X(t).l("b2<1>"))}return t},
aE(a,b){return this.a.a6(b)}}
A.fT.prototype={
b2(a){var t,s,r,q,p
A.Y(a)
t=a.length
s=A.bp(0,null,t)
r=new Uint8Array(s)
for(q=0;q<s;++q){if(!(q<t))return A.a(a,q)
p=a.charCodeAt(q)
if((p&4294967040)!==0)throw A.f(A.k_(a,"string","Contains invalid characters."))
if(!(q<s))return A.a(r,q)
r[q]=p}return r}}
A.fS.prototype={
b2(a){var t,s,r,q
u.L.a(a)
t=a.length
s=A.bp(0,null,t)
for(r=0;r<s;++r){if(!(r<t))return A.a(a,r)
q=a[r]
if((q&4294967040)!==0){if(!this.a)throw A.f(A.aD("Invalid value in input: "+q,null,null))
return this.e8(a,0,s)}}return A.fz(a,0,s)},
e8(a,b,c){var t,s,r,q
u.L.a(a)
for(t=a.length,s=b,r="";s<c;++s){if(!(s<t))return A.a(a,s)
q=a[s]
r+=A.iI((q&4294967040)!==0?65533:q)}return r.charCodeAt(0)==0?r:r}}
A.eG.prototype={}
A.eI.prototype={}
A.eH.prototype={
b2(a){var t,s,r,q=A.bp(0,null,a.length)
if(0===q)return new Uint8Array(0)
t=new A.fG()
s=t.f_(a,0,q)
s.toString
r=t.a
if(r<-1)A.aL(A.aD("Missing padding character",a,q))
if(r>0)A.aL(A.aD("Invalid length, must be multiple of four",a,q))
t.a=-1
return s}}
A.fG.prototype={
f_(a,b,c){var t,s=this,r=s.a
if(r<0){s.a=A.iQ(a,b,c,r)
return null}if(b===c)return new Uint8Array(0)
t=A.kK(a,b,c,r)
s.a=A.kM(a,b,c,t,0,s.a)
return t}}
A.b3.prototype={}
A.dx.prototype={}
A.dy.prototype={}
A.dO.prototype={
co(a,b){var t=A.lF(a,this.gf1().a)
return t},
gf1(){return B.bW}}
A.ff.prototype={}
A.dP.prototype={
bS(a){var t
u.L.a(a)
t=B.bX.b2(a)
return t}}
A.fi.prototype={}
A.fh.prototype={}
A.fj.prototype={
b2(a){var t,s,r,q,p=A.k([],u.s),o=a.length
for(t=0,s=0,r=0;r<o;++r,s=q){q=a.charCodeAt(r)
if(q!==13){if(q!==10)continue
if(s===13){t=r+1
continue}}B.c.L(p,B.k.b_(a,t,r))
t=r+1}if(t<o)B.c.L(p,B.k.b_(a,t,o))
return p}}
A.fI.prototype={
D(a){return this.ae()}}
A.F.prototype={}
A.dc.prototype={
D(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.eX(t)
return"Assertion failed"}}
A.cU.prototype={}
A.at.prototype={
gc9(){return"Invalid argument"+(!this.a?"(s)":"")},
gc8(){return""},
D(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+A.x(q),o=t.gc9()+r+p
if(!t.a)return o
return o+t.gc8()+": "+A.eX(t.gcs())},
gcs(){return this.b}}
A.cM.prototype={
gcs(){return A.j4(this.b)},
gc9(){return"RangeError"},
gc8(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.x(r):""
else if(r==null)t=": Not greater than or equal to "+A.x(s)
else if(r>s)t=": Not in inclusive range "+A.x(s)+".."+A.x(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.x(s)
return t}}
A.dF.prototype={
gcs(){return A.t(this.b)},
gc9(){return"RangeError"},
gc8(){if(A.t(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gj(a){return this.f}}
A.cW.prototype={
D(a){return"Unsupported operation: "+this.a}}
A.ek.prototype={
D(a){return"UnimplementedError: "+this.a}}
A.cR.prototype={
D(a){return"Bad state: "+this.a}}
A.dv.prototype={
D(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.eX(t)+"."}}
A.dW.prototype={
D(a){return"Out of Memory"},
$iF:1}
A.cQ.prototype={
D(a){return"Stack Overflow"},
$iF:1}
A.fJ.prototype={
D(a){return"Exception: "+this.a}}
A.bH.prototype={
D(a){var t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f=="string"){if(g!=null)t=g<0||g>f.length
else t=!1
if(t)g=null
if(g==null){if(f.length>78)f=B.k.b_(f,0,75)+"..."
return h+"\n"+f}for(s=f.length,r=1,q=0,p=!1,o=0;o<g;++o){if(!(o<s))return A.a(f,o)
n=f.charCodeAt(o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}h=r>1?h+(" (at line "+r+", character "+(g-q+1)+")\n"):h+(" (at character "+(g+1)+")\n")
for(o=g;o<s;++o){if(!(o>=0))return A.a(f,o)
n=f.charCodeAt(o)
if(n===10||n===13){s=o
break}}m=""
if(s-q>78){l="..."
if(g-q<75){k=q+75
j=q}else{if(s-g<75){j=s-75
k=s
l=""}else{j=g-36
k=g+36}m="..."}}else{k=s
j=q
l=""}return h+m+B.k.b_(f,j,k)+l+"\n"+B.k.aQ(" ",g-j+m.length)+"^\n"}else return g!=null?h+(" (at offset "+A.x(g)+")"):h}}
A.d.prototype={
bA(a,b){var t,s,r=this.gA(this)
if(!r.v())return""
t=J.aO(r.gE())
if(!r.v())return t
if(b.length===0){s=t
do s+=J.aO(r.gE())
while(r.v())}else{s=t
do s=s+b+J.aO(r.gE())
while(r.v())}return s.charCodeAt(0)==0?s:s},
gj(a){var t,s=this.gA(this)
for(t=0;s.v();)++t
return t},
ak(a,b){var t,s
A.cN(b,"index")
t=this.gA(this)
for(s=b;t.v();){if(s===0)return t.gE();--s}throw A.f(A.ht(b,b-s,this,"index"))},
D(a){return A.kl(this,"(",")")}}
A.aV.prototype={
D(a){return"MapEntry("+this.a+": "+A.x(this.b)+")"}}
A.ba.prototype={
gG(a){return A.A.prototype.gG.call(this,0)},
D(a){return"null"}}
A.A.prototype={$iA:1,
O(a,b){return this===b},
gG(a){return A.cL(this)},
D(a){return"Instance of '"+A.e5(this)+"'"},
gab(a){return A.ma(this)},
toString(){return this.D(this)}}
A.e8.prototype={
gE(){return this.d},
v(){var t,s,r,q=this,p=q.b=q.c,o=q.a,n=o.length
if(p===n){q.d=-1
return!1}if(!(p<n))return A.a(o,p)
t=o.charCodeAt(p)
s=p+1
if((t&64512)===55296&&s<n){if(!(s<n))return A.a(o,s)
r=o.charCodeAt(s)
if((r&64512)===56320){q.c=s+1
q.d=65536+((t&1023)<<10)+(r&1023)
return!0}}q.c=s
q.d=t
return!0},
$iq:1}
A.cS.prototype={
gj(a){return this.a.length},
D(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.f4.prototype={
dY(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.length
for(t=0;t<g;++t){s=a[t]
if(s>h.b)h.b=s
if(s<h.c)h.c=s}s=h.b
r=B.b.a2(1,s)
q=h.a=new Uint32Array(r)
for(p=1,o=0,n=2;p<=s;){for(m=p<<16,t=0;t<g;++t)if(a[t]===p){for(l=o,k=0,j=0;j<p;++j){k=(k<<1|l&1)>>>0
l=l>>>1}for(i=(m|t)>>>0,j=k;j<r;j+=n){if(!(j>=0))return A.a(q,j)
q[j]=i}++o}++p
o=o<<1>>>0
n=n<<1>>>0}}}
A.fE.prototype={}
A.fX.prototype={
f0(a,b,c,d){var t,s,r,q,p,o,n=null
for(;;){t=a.c
s=a.d
s===$&&A.c()
if(!(t<s))break
s=a.b
if((s==null?0:s.length-t)<2)return!1
s.toString
r=a.c=t+1
q=s.length
if(!(t>=0&&t<q))return A.a(s,t)
p=s[t]
a.c=r+1
if(!(r>=0&&r<q))return A.a(s,r)
o=s[r]
if((p&8)!==8)return!1
if(B.b.aZ(p*256+o,31)!==0)return!1
if((o>>>5&1)!==0){a.a0()
return!1}if(n!=null)b.aP(n)
t=new A.cG(new Uint8Array(32768),B.N)
new A.fa(a,t).es()
n=J.N(B.h.gF(t.c),t.c.byteOffset,t.b)
a.a0()}if(n!=null)b.aP(n)
return!0}}
A.fF.prototype={}
A.fY.prototype={
du(a,b){var t
u.L.a(a)
t=A.iE(B.D,32768)
this.f3(A.fc(a,B.N,null,null),t,b,!1,null)
return t.cA()},
f3(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
b.a=B.D
t=(B.b.u(15,0,15)-8<<4|8)>>>0
b.S(t)
s=t*256
for(r=0;q=(r|0)>>>0,B.b.aZ(s+q,31)!==0;)++r
b.S(q)
p=a.c
o=A.m7(a)
a.c=p
q=c==null?6:c
A.kd(a,q,b,15)
q=o&255
n=o>>>24&255
m=o>>>16&255
l=o>>>8&255
if(b.a===B.D){b.S(n)
b.S(m)
b.S(l)
b.S(q)}else{b.S(q)
b.S(l)
b.S(m)
b.S(n)}}}
A.c_.prototype={
ae(){return"_DeflateFlushMode."+this.b}}
A.eV.prototype={
eu(a,b){var t,s,r,q,p=this,o=!0
if(b>=9)if(b<=15)o=a>9
if(o)return!1
t=p.er(a)
if(t==null)return!1
$.aR.b=t
o=new Uint16Array(1146)
p.p1=o
s=new Uint16Array(122)
p.p2=s
r=new Uint16Array(78)
p.p3=r
p.as=b
q=p.Q=B.b.cl(1,b)
p.at=q-1
p.db=15
p.cy=32768
p.dx=32767
p.dy=5
p.ax=new Uint8Array(q*2)
p.ch=new Uint16Array(q)
p.CW=new Uint16Array(32768)
p.y1=16384
p.f=new Uint8Array(65536)
p.r=65536
p.bT=16384
p.xr=49152
p.k4=a
p.w=p.x=p.ok=0
p.c=113
p.d=0
q=p.p4
q.a=o
q.c=$.jN()
q=p.R8
q.a=s
q.c=$.jM()
q=p.RG
q.a=r
q.c=$.jL()
p.am=p.al=0
p.bz=8
p.cW()
p.ay=2*p.Q
B.B.bW(p.CW,0,p.cy,0)
p.k2=p.fr=p.id=0
p.fx=p.k3=2
p.cx=p.go=0
return!0},
ec(a){var t,s,r,q,p=this,o=p.x
o===$&&A.c()
if(o!==0)p.cb()
o=p.a
t=o.c
o=o.d
o===$&&A.c()
s=!0
if(t>=o){o=p.k2
o===$&&A.c()
if(o===0)o=a!==B.Y&&p.c!==666
else o=s}else o=s
if(o){switch($.aR.bt().e){case 0:r=p.ef(a)
break
case 1:r=p.ed(a)
break
case 2:r=p.ee(a)
break
default:r=-1
break}o=r===2
if(o||r===3)p.c=666
if(r===0||o)return 0
if(r===1){if(a===B.dx){p.a7(2,3)
p.bm(256,B.V)
p.dj()
o=p.bz
o===$&&A.c()
t=p.am
t===$&&A.c()
if(1+o+10-t<9){p.a7(2,3)
p.bm(256,B.V)
p.dj()}p.bz=7}else{p.d7(0,0,!1)
if(a===B.dy){o=p.cy
o===$&&A.c()
t=p.CW
q=0
for(;q<o;++q){t===$&&A.c()
t.$flags&2&&A.b(t)
if(!(q<t.length))return A.a(t,q)
t[q]=0}}}p.cb()}}if(a!==B.M)return 0
return 1},
cW(){var t=this,s=t.p1
s===$&&A.c()
B.B.bW(s,0,572,0)
s=t.p2
s===$&&A.c()
B.B.bW(s,0,60,0)
s=t.p3
s===$&&A.c()
B.B.bW(s,0,38,0)
s=t.p1
s.$flags&2&&A.b(s)
s[512]=1
t.y2=t.bU=t.aX=t.bo=0},
ci(a,b){var t,s,r,q,p,o,n=this.ry
if(!(b>=0&&b<573))return A.a(n,b)
t=n[b]
s=b<<1>>>0
r=n.$flags|0
q=this.x2
for(;;){p=this.to
p===$&&A.c()
if(!(s<=p))break
if(s<p){p=s+1
if(!(p>=0&&p<573))return A.a(n,p)
p=n[p]
if(!(s>=0&&s<573))return A.a(n,s)
p=A.ip(a,p,n[s],q)}else p=!1
if(p)++s
if(!(s>=0&&s<573))return A.a(n,s)
if(A.ip(a,t,n[s],q))break
p=n[s]
r&2&&A.b(n)
if(!(b>=0&&b<573))return A.a(n,b)
n[b]=p
o=s<<1>>>0
b=s
s=o}r&2&&A.b(n)
if(!(b>=0&&b<573))return A.a(n,b)
n[b]=t},
d2(a,b){var t,s,r,q,p,o,n,m,l,k,j,i=a.length
if(1>=i)return A.a(a,1)
t=a[1]
if(t===0){s=138
r=3}else{s=7
r=4}q=(b+1)*2+1
a.$flags&2&&A.b(a)
if(!(q>=0&&q<i))return A.a(a,q)
a[q]=65535
for(q=this.p3,p=0,o=-1,n=0;p<=b;t=l){++p
m=p*2+1
if(!(m<i))return A.a(a,m)
l=a[m];++n
if(n<s&&t===l)continue
else{k=3
if(n<r){q===$&&A.c()
m=t*2
if(!(m<78))return A.a(q,m)
j=q[m]
q.$flags&2&&A.b(q)
q[m]=j+n}else if(t!==0){if(t!==o){q===$&&A.c()
m=t*2
if(!(m<78))return A.a(q,m)
j=q[m]
q.$flags&2&&A.b(q)
q[m]=j+1}q===$&&A.c()
m=q[32]
q.$flags&2&&A.b(q)
q[32]=m+1}else if(n<=10){q===$&&A.c()
m=q[34]
q.$flags&2&&A.b(q)
q[34]=m+1}else{q===$&&A.c()
m=q[36]
q.$flags&2&&A.b(q)
q[36]=m+1}}if(l===0){r=k
s=138}else if(t===l){r=k
s=6}else{s=7
r=4}o=t
n=0}},
e4(){var t,s,r=this,q=r.p1
q===$&&A.c()
t=r.p4.b
t===$&&A.c()
r.d2(q,t)
t=r.p2
t===$&&A.c()
q=r.R8.b
q===$&&A.c()
r.d2(t,q)
r.RG.c7(r)
for(q=r.p3,s=18;s>=3;--s){q===$&&A.c()
t=B.X[s]*2+1
if(!(t<78))return A.a(q,t)
if(q[t]!==0)break}q=r.aX
q===$&&A.c()
r.aX=q+(3*(s+1)+5+5+4)
return s},
eN(a,b,c){var t,s,r,q,p=this
p.a7(a-257,5)
t=b-1
p.a7(t,5)
p.a7(c-4,4)
for(s=0;s<c;++s){r=p.p3
r===$&&A.c()
if(!(s<19))return A.a(B.X,s)
q=B.X[s]*2+1
if(!(q<78))return A.a(r,q)
p.a7(r[q],3)}r=p.p1
r===$&&A.c()
p.d3(r,a-1)
r=p.p2
r===$&&A.c()
p.d3(r,t)},
d3(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=a.length
if(1>=f)return A.a(a,1)
t=a[1]
if(t===0){s=138
r=3}else{s=7
r=4}for(q=u.L,p=0,o=-1,n=0;p<=b;t=l){++p
m=p*2+1
if(!(m<f))return A.a(a,m)
l=a[m];++n
if(n<s&&t===l)continue
else{k=3
if(n<r){m=t*2
j=m+1
do{i=g.p3
i===$&&A.c()
q.a(i)
if(!(m<78))return A.a(i,m)
h=i[m]
if(!(j<78))return A.a(i,j)
g.a7(h&65535,i[j]&65535)}while(--n,n!==0)}else if(t!==0){if(t!==o){m=g.p3
m===$&&A.c()
q.a(m)
j=t*2
if(!(j<78))return A.a(m,j)
i=m[j];++j
if(!(j<78))return A.a(m,j)
g.a7(i&65535,m[j]&65535);--n}m=g.p3
m===$&&A.c()
q.a(m)
g.a7(m[32]&65535,m[33]&65535)
g.a7(n-3,2)}else{m=g.p3
if(n<=10){m===$&&A.c()
q.a(m)
g.a7(m[34]&65535,m[35]&65535)
g.a7(n-3,3)}else{m===$&&A.c()
q.a(m)
g.a7(m[36]&65535,m[37]&65535)
g.a7(n-11,7)}}}if(l===0){r=k
s=138}else if(t===l){r=k
s=6}else{s=7
r=4}o=t
n=0}},
eJ(a,b,c){var t,s,r=this
if(c===0)return
t=r.f
t===$&&A.c()
s=r.x
s===$&&A.c()
B.h.af(t,s,s+c,a,b)
r.x=r.x+c},
aD(a){var t,s=this.f
s===$&&A.c()
t=this.x
t===$&&A.c()
this.x=t+1
s.$flags&2&&A.b(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=a},
bm(a,b){var t,s,r
u.L.a(b)
t=a*2
s=b.length
if(!(t<s))return A.a(b,t)
r=b[t];++t
if(!(t<s))return A.a(b,t)
this.a7(r&65535,b[t]&65535)},
a7(a,b){var t,s=this,r=s.am
r===$&&A.c()
t=s.al
if(r>16-b){t===$&&A.c()
r=s.al=(t|B.b.a2(a,r)&65535)>>>0
s.aD(r)
s.aD(A.a0(r,8))
s.al=A.a0(a,16-s.am)
s.am=s.am+(b-16)}else{t===$&&A.c()
s.al=(t|B.b.a2(a,r)&65535)>>>0
s.am=r+b}},
bw(a,b){var t,s,r,q,p,o=this,n=o.f
n===$&&A.c()
t=o.bT
t===$&&A.c()
s=o.y2
s===$&&A.c()
s=t+s*2
t=A.a0(a,8)
n.$flags&2&&A.b(n)
if(!(s<n.length))return A.a(n,s)
n[s]=t
t=o.f
s=o.bT
n=o.y2
s=s+n*2+1
t.$flags&2&&A.b(t)
r=t.length
if(!(s<r))return A.a(t,s)
t[s]=a
s=o.xr
s===$&&A.c()
s+=n
if(!(s<r))return A.a(t,s)
t[s]=b
o.y2=n+1
if(a===0){n=o.p1
n===$&&A.c()
t=b*2
if(!(t>=0&&t<1146))return A.a(n,t)
s=n[t]
n.$flags&2&&A.b(n)
n[t]=s+1}else{n=o.bU
n===$&&A.c()
o.bU=n+1
n=o.p1
n===$&&A.c()
if(!(b>=0&&b<256))return A.a(B.a4,b)
t=(B.a4[b]+256+1)*2
if(!(t<1146))return A.a(n,t)
s=n[t]
n.$flags&2&&A.b(n)
n[t]=s+1
s=o.p2
s===$&&A.c()
t=A.iT(a-1)*2
if(!(t<122))return A.a(s,t)
n=s[t]
s.$flags&2&&A.b(s)
s[t]=n+1}n=o.y2
if((n&8191)===0){t=o.k4
t===$&&A.c()
t=t>2}else t=!1
if(t){q=n*8
n=o.id
n===$&&A.c()
t=o.fr
t===$&&A.c()
for(s=o.p2,p=0;p<30;++p){s===$&&A.c()
r=p*2
if(!(r<122))return A.a(s,r)
q+=s[r]*(5+B.L[p])}q=A.a0(q,3)
s=o.bU
s===$&&A.c()
r=o.y2
if(s<r/2&&q<(n-t)/2)return!0
n=r}t=o.y1
t===$&&A.c()
return n===t-1},
cP(a,b){var t,s,r,q,p,o,n,m,l=this,k=u.L
k.a(a)
k.a(b)
k=l.y2
k===$&&A.c()
if(k!==0){t=0
do{k=l.f
k===$&&A.c()
s=l.bT
s===$&&A.c()
s+=t*2
r=k.length
if(!(s<r))return A.a(k,s)
q=k[s];++s
if(!(s<r))return A.a(k,s)
p=q<<8&65280|k[s]&255
s=l.xr
s===$&&A.c()
s+=t
if(!(s<r))return A.a(k,s)
o=k[s]&255;++t
if(p===0)l.bm(o,a)
else{n=B.a4[o]
l.bm(n+256+1,a)
if(!(n<29))return A.a(B.a3,n)
m=B.a3[n]
if(m!==0)l.a7(o-B.bZ[n],m);--p
n=A.iT(p)
l.bm(n,b)
if(!(n<30))return A.a(B.L,n)
m=B.L[n]
if(m!==0)l.a7(p-B.c3[n],m)}}while(t<l.y2)}l.bm(256,a)
if(513>=a.length)return A.a(a,513)
l.bz=a[513]},
dR(){var t,s,r,q,p
for(t=this.p1,s=0,r=0;s<7;){t===$&&A.c()
q=s*2
if(!(q<1146))return A.a(t,q)
r+=t[q];++s}for(p=0;s<128;){t===$&&A.c()
q=s*2
if(!(q<1146))return A.a(t,q)
p+=t[q];++s}while(s<256){t===$&&A.c()
q=s*2
if(!(q<1146))return A.a(t,q)
r+=t[q];++s}this.y=r>A.a0(p,2)?0:1},
dj(){var t=this,s=t.am
s===$&&A.c()
if(s===16){s=t.al
s===$&&A.c()
t.aD(s)
t.aD(A.a0(s,8))
t.am=t.al=0}else if(s>=8){s=t.al
s===$&&A.c()
t.aD(s)
t.al=A.a0(t.al,8)
t.am=t.am-8}},
cN(){var t=this,s=t.am
s===$&&A.c()
if(s>8){s=t.al
s===$&&A.c()
t.aD(s)
t.aD(A.a0(s,8))}else if(s>0){s=t.al
s===$&&A.c()
t.aD(s)}t.am=t.al=0},
b8(a){var t,s,r,q,p,o=this,n=o.fr
n===$&&A.c()
if(n>=0)t=n
else t=-1
s=o.id
s===$&&A.c()
n=s-n
s=o.k4
s===$&&A.c()
if(s>0){if(o.y===2)o.dR()
o.p4.c7(o)
o.R8.c7(o)
r=o.e4()
s=o.aX
s===$&&A.c()
q=A.a0(s+3+7,3)
s=o.bo
s===$&&A.c()
p=A.a0(s+3+7,3)
if(p<=q)q=p}else{p=n+5
q=p
r=0}if(n+4<=q&&t!==-1)o.d7(t,n,a)
else if(p===q){o.a7(2+(a?1:0),3)
o.cP(B.V,B.as)}else{o.a7(4+(a?1:0),3)
n=o.p4.b
n===$&&A.c()
t=o.R8.b
t===$&&A.c()
o.eN(n+1,t+1,r+1)
t=o.p1
t===$&&A.c()
n=o.p2
n===$&&A.c()
o.cP(t,n)}o.cW()
if(a)o.cN()
o.fr=o.id
o.cb()},
ef(a){var t,s,r,q,p,o=this,n=o.r
n===$&&A.c()
t=n-5
t=65535>t?t:65535
for(n=a===B.Y;;){s=o.k2
s===$&&A.c()
if(s<=1){o.ca()
s=o.k2
r=s===0
if(r&&n)return 0
if(r)break}r=o.id
r===$&&A.c()
s=o.id=r+s
o.k2=0
r=o.fr
r===$&&A.c()
q=r+t
if(s>=q){o.k2=s-q
o.id=q
o.b8(!1)}s=o.id
r=o.fr
p=o.Q
p===$&&A.c()
if(s-r>=p-262)o.b8(!1)}n=a===B.M
o.b8(n)
return n?3:1},
d7(a,b,c){var t,s=this
s.a7(c?1:0,3)
s.cN()
s.bz=8
s.aD(b)
s.aD(A.a0(b,8))
t=(~b>>>0)+65536&65535
s.aD(t)
s.aD(A.a0(t,8))
t=s.ax
t===$&&A.c()
s.eJ(t,a,b)},
ca(){var t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.a
do{t=i.ay
t===$&&A.c()
s=i.k2
s===$&&A.c()
r=i.id
r===$&&A.c()
q=t-s-r
if(q===0&&r===0&&s===0){t=i.Q
t===$&&A.c()
q=t}else{t=i.Q
t===$&&A.c()
if(r>=t+t-262){s=i.ax
s===$&&A.c()
B.h.af(s,0,t,s,t)
t=i.k1
p=i.Q
i.k1=t-p
i.id=i.id-p
t=i.fr
t===$&&A.c()
i.fr=t-p
t=i.cy
t===$&&A.c()
s=i.CW
s===$&&A.c()
r=s.length
o=s.$flags|0
n=t
m=n
do{--n
if(!(n>=0&&n<r))return A.a(s,n)
l=s[n]&65535
t=l>=p?l-p:0
o&2&&A.b(s)
s[n]=t}while(--m,m!==0)
t=i.ch
t===$&&A.c()
s=t.length
r=t.$flags|0
n=p
m=n
do{--n
if(!(n>=0&&n<s))return A.a(t,n)
l=t[n]&65535
o=l>=p?l-p:0
r&2&&A.b(t)
t[n]=o}while(--m,m!==0)
q+=p}}t=h.c
s=h.d
s===$&&A.c()
if(t>=s)return
t=i.ax
t===$&&A.c()
m=i.eK(t,i.id+i.k2,q)
t=i.k2=i.k2+m
if(t>=3){s=i.ax
r=i.id
o=s.length
if(r>>>0!==r||r>=o)return A.a(s,r)
k=s[r]&255
i.cx=k
j=i.dy
j===$&&A.c()
j=B.b.a2(k,j);++r
if(!(r<o))return A.a(s,r)
r=s[r]
s=i.dx
s===$&&A.c()
i.cx=((j^r&255)&s)>>>0}}while(t<262&&!(h.c>=h.d))},
ed(a){var t,s,r,q,p,o,n,m,l,k,j=this
for(t=a===B.Y,s=0;;){r=j.k2
r===$&&A.c()
if(r<262){j.ca()
r=j.k2
if(r<262&&t)return 0
if(r===0)break}if(r>=3){r=j.cx
r===$&&A.c()
q=j.dy
q===$&&A.c()
q=B.b.a2(r,q)
r=j.ax
r===$&&A.c()
p=j.id
p===$&&A.c()
o=p+2
if(!(o>=0&&o<r.length))return A.a(r,o)
o=r[o]
r=j.dx
r===$&&A.c()
r=((q^o&255)&r)>>>0
j.cx=r
o=j.CW
o===$&&A.c()
if(!(r<o.length))return A.a(o,r)
q=o[r]
s=q&65535
n=j.ch
n===$&&A.c()
m=j.at
m===$&&A.c()
m=(p&m)>>>0
n.$flags&2&&A.b(n)
if(!(m>=0&&m<n.length))return A.a(n,m)
n[m]=q
o.$flags&2&&A.b(o)
o[r]=p}if(s!==0){r=j.id
r===$&&A.c()
q=j.Q
q===$&&A.c()
q=(r-s&65535)<=q-262
r=q}else r=!1
if(r){r=j.ok
r===$&&A.c()
if(r!==2)j.fx=j.d0(s)}r=j.fx
r===$&&A.c()
q=j.id
if(r>=3){q===$&&A.c()
l=j.bw(q-j.k1,r-3)
r=j.k2
q=j.fx
r-=q
j.k2=r
p=$.aR.b
if(p===$.aR)A.aL(A.fg(""))
if(q<=p.b&&r>=3){r=j.fx=q-1
do{q=j.id=j.id+1
p=j.cx
p===$&&A.c()
o=j.dy
o===$&&A.c()
o=B.b.a2(p,o)
p=j.ax
p===$&&A.c()
n=q+2
if(!(n>=0&&n<p.length))return A.a(p,n)
n=p[n]
p=j.dx
p===$&&A.c()
p=((o^n&255)&p)>>>0
j.cx=p
n=j.CW
n===$&&A.c()
if(!(p<n.length))return A.a(n,p)
o=n[p]
s=o&65535
m=j.ch
m===$&&A.c()
k=j.at
k===$&&A.c()
k=(q&k)>>>0
m.$flags&2&&A.b(m)
if(!(k>=0&&k<m.length))return A.a(m,k)
m[k]=o
n.$flags&2&&A.b(n)
n[p]=q}while(r=j.fx=r-1,r!==0)
j.id=q+1}else{r=j.id=j.id+q
j.fx=0
q=j.ax
q===$&&A.c()
p=q.length
if(!(r>=0&&r<p))return A.a(q,r)
o=q[r]&255
j.cx=o
n=j.dy
n===$&&A.c()
n=B.b.a2(o,n);++r
if(!(r<p))return A.a(q,r)
r=q[r]
q=j.dx
q===$&&A.c()
j.cx=((n^r&255)&q)>>>0}}else{r=j.ax
r===$&&A.c()
q===$&&A.c()
if(!(q>=0&&q<r.length))return A.a(r,q)
l=j.bw(0,r[q]&255)
j.k2=j.k2-1
j.id=j.id+1}if(l)j.b8(!1)}t=a===B.M
j.b8(t)
return t?3:1},
ee(a){var t,s,r,q,p,o,n,m,l,k,j,i=this
for(t=a===B.Y,s=0;;){r=i.k2
r===$&&A.c()
if(r<262){i.ca()
r=i.k2
if(r<262&&t)return 0
if(r===0)break}if(r>=3){r=i.cx
r===$&&A.c()
q=i.dy
q===$&&A.c()
q=B.b.a2(r,q)
r=i.ax
r===$&&A.c()
p=i.id
p===$&&A.c()
o=p+2
if(!(o>=0&&o<r.length))return A.a(r,o)
o=r[o]
r=i.dx
r===$&&A.c()
r=((q^o&255)&r)>>>0
i.cx=r
o=i.CW
o===$&&A.c()
if(!(r<o.length))return A.a(o,r)
q=o[r]
s=q&65535
n=i.ch
n===$&&A.c()
m=i.at
m===$&&A.c()
m=(p&m)>>>0
n.$flags&2&&A.b(n)
if(!(m>=0&&m<n.length))return A.a(n,m)
n[m]=q
o.$flags&2&&A.b(o)
o[r]=p}r=i.fx
r===$&&A.c()
i.k3=r
i.fy=i.k1
i.fx=2
q=!1
if(s!==0){p=$.aR.b
if(p===$.aR)A.aL(A.fg(""))
if(r<p.b){r=i.id
r===$&&A.c()
q=i.Q
q===$&&A.c()
q=(r-s&65535)<=q-262
r=q}else r=q}else r=q
q=2
if(r){r=i.ok
r===$&&A.c()
if(r!==2){r=i.d0(s)
i.fx=r}else r=q
p=!1
if(r<=5)if(i.ok!==1){if(r===3){p=i.id
p===$&&A.c()
p=p-i.k1>4096}}else p=!0
if(p){i.fx=2
r=q}}else r=q
q=i.k3
if(q>=3&&r<=q){r=i.id
r===$&&A.c()
l=r+i.k2-3
k=i.bw(r-1-i.fy,q-3)
q=i.k2
r=i.k3
i.k2=q-(r-1)
r=i.k3=r-2
do{q=i.id=i.id+1
if(q<=l){p=i.cx
p===$&&A.c()
o=i.dy
o===$&&A.c()
o=B.b.a2(p,o)
p=i.ax
p===$&&A.c()
n=q+2
if(!(n>=0&&n<p.length))return A.a(p,n)
n=p[n]
p=i.dx
p===$&&A.c()
p=((o^n&255)&p)>>>0
i.cx=p
n=i.CW
n===$&&A.c()
if(!(p<n.length))return A.a(n,p)
o=n[p]
s=o&65535
m=i.ch
m===$&&A.c()
j=i.at
j===$&&A.c()
j=(q&j)>>>0
m.$flags&2&&A.b(m)
if(!(j>=0&&j<m.length))return A.a(m,j)
m[j]=o
n.$flags&2&&A.b(n)
n[p]=q}}while(r=i.k3=r-1,r!==0)
i.go=0
i.fx=2
i.id=q+1
if(k)i.b8(!1)}else{r=i.go
r===$&&A.c()
if(r!==0){r=i.ax
r===$&&A.c()
q=i.id
q===$&&A.c();--q
if(!(q>=0&&q<r.length))return A.a(r,q)
if(i.bw(0,r[q]&255))i.b8(!1)
i.id=i.id+1
i.k2=i.k2-1}else{i.go=1
r=i.id
r===$&&A.c()
i.id=r+1
i.k2=i.k2-1}}}t=i.go
t===$&&A.c()
if(t!==0){t=i.ax
t===$&&A.c()
r=i.id
r===$&&A.c();--r
if(!(r>=0&&r<t.length))return A.a(t,r)
i.bw(0,t[r]&255)
i.go=0}t=a===B.M
i.b8(t)
return t?3:1},
d0(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=$.aR.bt().d,b=d.id
b===$&&A.c()
t=d.k3
t===$&&A.c()
s=d.Q
s===$&&A.c()
s-=262
r=b>s?b-s:0
q=$.aR.bt().c
s=d.at
s===$&&A.c()
p=d.id+258
o=d.ax
o===$&&A.c()
n=b+t
m=n-1
l=o.length
if(!(m>=0&&m<l))return A.a(o,m)
k=o[m]
if(!(n>=0&&n<l))return A.a(o,n)
j=o[n]
if(d.k3>=$.aR.bt().a)c=c>>>2
o=d.k2
o===$&&A.c()
if(q>o)q=o
i=p-258
h=t
g=b
do{A:{b=d.ax
t=a+h
o=b.length
if(!(t>=0&&t<o))return A.a(b,t)
n=!0
if(b[t]===j){--t
if(!(t>=0))return A.a(b,t)
if(b[t]===k){if(!(a>=0&&a<o))return A.a(b,a)
t=b[a]
if(!(g>=0&&g<o))return A.a(b,g)
if(t===b[g]){f=a+1
if(!(f<o))return A.a(b,f)
t=b[f]
n=g+1
if(!(n<o))return A.a(b,n)
n=t!==b[n]
t=n}else{t=n
f=a}}else{t=n
f=a}}else{t=n
f=a}if(t)break A
g+=2;++f
do{++g
if(!(g>=0&&g<o))return A.a(b,g)
t=b[g];++f
if(!(f>=0&&f<o))return A.a(b,f)
n=!1
if(t===b[f]){++g
if(!(g<o))return A.a(b,g)
t=b[g];++f
if(!(f<o))return A.a(b,f)
if(t===b[f]){++g
if(!(g<o))return A.a(b,g)
t=b[g];++f
if(!(f<o))return A.a(b,f)
if(t===b[f]){++g
if(!(g<o))return A.a(b,g)
t=b[g];++f
if(!(f<o))return A.a(b,f)
if(t===b[f]){++g
if(!(g<o))return A.a(b,g)
t=b[g];++f
if(!(f<o))return A.a(b,f)
if(t===b[f]){++g
if(!(g<o))return A.a(b,g)
t=b[g];++f
if(!(f<o))return A.a(b,f)
if(t===b[f]){++g
if(!(g<o))return A.a(b,g)
t=b[g];++f
if(!(f<o))return A.a(b,f)
if(t===b[f]){++g
if(!(g<o))return A.a(b,g)
t=b[g];++f
if(!(f<o))return A.a(b,f)
t=t===b[f]&&g<p}else t=n}else t=n}else t=n}else t=n}else t=n}else t=n}else t=n}while(t)
e=258-(p-g)
if(e>h){d.k1=a
if(e>=q){h=e
break}b=d.ax
t=i+e
o=t-1
n=b.length
if(!(o>=0&&o<n))return A.a(b,o)
k=b[o]
if(!(t<n))return A.a(b,t)
j=b[t]
h=e}g=i}b=d.ch
b===$&&A.c()
t=a&s
if(!(t>=0&&t<b.length))return A.a(b,t)
a=b[t]&65535
if(a>r){--c
b=c!==0}else b=!1}while(b)
b=d.k2
if(h<=b)return h
return b},
eK(a,b,c){var t,s,r,q,p,o,n=this
if(c!==0){t=n.a
s=t.c
t=t.d
t===$&&A.c()
t=s>=t}else t=!0
if(t)return 0
r=n.a.bB(c)
q=r.gj(0)
if(q===0)return 0
p=r.aI()
o=p.length
if(q>o)q=o
B.h.aR(a,b,b+q,p)
n.e+=q
n.d=A.ax(p,n.d)
return q},
cb(){var t,s=this,r=s.x
r===$&&A.c()
t=s.f
t===$&&A.c()
s.b.dK(t,r)
t=s.w
t===$&&A.c()
s.w=t+r
r=s.x-r
s.x=r
if(r===0)s.w=0},
er(a){switch(a){case 0:return new A.ac(0,0,0,0,0)
case 1:return new A.ac(4,4,8,4,1)
case 2:return new A.ac(4,5,16,8,1)
case 3:return new A.ac(4,6,32,32,1)
case 4:return new A.ac(4,4,16,16,2)
case 5:return new A.ac(8,16,32,32,2)
case 6:return new A.ac(8,16,128,128,2)
case 7:return new A.ac(8,32,128,256,2)
case 8:return new A.ac(32,128,258,1024,2)
case 9:return new A.ac(32,258,258,4096,2)}return null}}
A.ac.prototype={}
A.fK.prototype={
eq(a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
a2===$&&A.c()
t=a1.c
t===$&&A.c()
s=t.a
r=t.b
q=t.c
p=t.e
for(t=a3.rx,o=t.$flags|0,n=0;n<=15;++n){o&2&&A.b(t)
t[n]=0}m=a3.ry
l=a3.x1
l===$&&A.c()
if(!(l>=0&&l<573))return A.a(m,l)
k=m[l]*2+1
a2.$flags&2&&A.b(a2)
j=a2.length
if(!(k>=0&&k<j))return A.a(a2,k)
a2[k]=0
for(i=l+1,l=s!=null,k=r.length,h=0;i<573;++i){g=m[i]
f=g*2
e=f+1
if(!(e>=0&&e<j))return A.a(a2,e)
d=a2[e]*2+1
if(!(d<j))return A.a(a2,d)
n=a2[d]+1
if(n>p){++h
n=p}a2.$flags&2&&A.b(a2)
a2[e]=n
d=a1.b
d===$&&A.c()
if(g>d)continue
if(!(n<16))return A.a(t,n)
d=t[n]
o&2&&A.b(t)
t[n]=d+1
if(g>=q){d=g-q
if(!(d>=0&&d<k))return A.a(r,d)
c=r[d]}else c=0
if(!(f>=0&&f<j))return A.a(a2,f)
b=a2[f]
f=a3.aX
f===$&&A.c()
a3.aX=f+b*(n+c)
if(l){f=a3.bo
f===$&&A.c()
if(!(e<s.length))return A.a(s,e)
a3.bo=f+b*(s[e]+c)}}if(h===0)return
n=p-1
do{a=n
for(;;){if(!(a>=0&&a<16))return A.a(t,a)
l=t[a]
if(!(l===0))break;--a}o&2&&A.b(t)
t[a]=l-1
l=a+1
if(!(l<16))return A.a(t,l)
t[l]=t[l]+2
if(!(p<16))return A.a(t,p)
t[p]=t[p]-1
h-=2}while(h>0)
for(n=p;n!==0;--n){if(!(n>=0))return A.a(t,n)
g=t[n]
while(g!==0){--i
if(!(i>=0&&i<573))return A.a(m,i)
a0=m[i]
o=a1.b
o===$&&A.c()
if(a0>o)continue
o=a0*2
l=o+1
if(!(l>=0&&l<j))return A.a(a2,l)
k=a2[l]
if(k!==n){f=a3.aX
f===$&&A.c()
if(!(o>=0&&o<j))return A.a(a2,o)
a3.aX=f+(n-k)*a2[o]
a2.$flags&2&&A.b(a2)
a2[l]=n}--g}}},
c7(a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a
a===$&&A.c()
t=b.c
t===$&&A.c()
s=t.a
r=t.d
a0.to=0
a0.x1=573
for(t=a.length,q=a0.ry,p=q.$flags|0,o=a0.x2,n=o.$flags|0,m=a.$flags|0,l=0,k=-1;l<r;++l){j=l*2
if(!(j<t))return A.a(a,j)
if(a[j]!==0){j=++a0.to
p&2&&A.b(q)
if(!(j>=0&&j<573))return A.a(q,j)
q[j]=l
n&2&&A.b(o)
if(!(l<573))return A.a(o,l)
o[l]=0
k=l}else{++j
m&2&&A.b(a)
if(!(j<t))return A.a(a,j)
a[j]=0}}for(j=s!=null;i=a0.to,i<2;){++i
a0.to=i
if(k<2){++k
h=k}else h=0
p&2&&A.b(q)
if(!(i>=0))return A.a(q,i)
q[i]=h
i=h*2
m&2&&A.b(a)
if(!(i>=0&&i<t))return A.a(a,i)
a[i]=1
n&2&&A.b(o)
if(!(h>=0))return A.a(o,h)
o[h]=0
g=a0.aX
g===$&&A.c()
a0.aX=g-1
if(j){g=a0.bo
g===$&&A.c();++i
if(!(i<s.length))return A.a(s,i)
a0.bo=g-s[i]}}b.b=k
for(l=B.b.aV(i,2);l>=1;--l)a0.ci(a,l)
h=r
do{l=q[1]
j=a0.to--
if(!(j>=0&&j<573))return A.a(q,j)
j=q[j]
p&2&&A.b(q)
q[1]=j
a0.ci(a,1)
f=q[1]
j=--a0.x1
if(!(j>=0&&j<573))return A.a(q,j)
q[j]=l;--j
a0.x1=j
if(!(j>=0))return A.a(q,j)
q[j]=f
j=h*2
i=l*2
if(!(i>=0&&i<t))return A.a(a,i)
g=a[i]
e=f*2
if(!(e>=0&&e<t))return A.a(a,e)
d=a[e]
m&2&&A.b(a)
if(!(j<t))return A.a(a,j)
a[j]=g+d
if(!(l>=0&&l<573))return A.a(o,l)
d=o[l]
if(!(f>=0&&f<573))return A.a(o,f)
g=o[f]
j=d>g?d:g
n&2&&A.b(o)
if(!(h<573))return A.a(o,h)
o[h]=j+1;++i;++e
if(!(e<t))return A.a(a,e)
a[e]=h
if(!(i<t))return A.a(a,i)
a[i]=h
c=h+1
q[1]=h
a0.ci(a,1)
if(a0.to>=2){h=c
continue}else break}while(!0)
t=--a0.x1
p=q[1]
if(!(t>=0&&t<573))return A.a(q,t)
q[t]=p
b.eq(a0)
A.kN(a,k,a0.rx)}}
A.fR.prototype={}
A.fa.prototype={
gaU(){var t=this.a
if(t==null)return t
t.d===$&&A.c()
return t},
es(){var t,s,r=this
r.e=r.d=0
if(r.gaU()==null)return
for(;;){t=r.gaU()
s=t.c
t=t.d
t===$&&A.c()
if(!(s<t))break
if(!r.eD())return}},
eD(){var t,s,r,q=this,p=q.gaU()
if(p!=null){t=p.c
s=p.d
s===$&&A.c()
s=t>=s
t=s}else t=!0
if(t)return!1
r=q.az(3)
switch(B.b.I(r,1)){case 0:if(q.eF()===-1)return!1
break
case 1:if(q.cR($.jx(),$.jw())===-1)return!1
break
case 2:if(q.eE()===-1)return!1
break
default:return!1}return(r&1)===0},
az(a){var t,s,r,q,p=this
if(a===0)return 0
while(t=p.e,t<a){t=p.gaU()
s=t.c
t=t.d
t===$&&A.c()
if(s>=t)return-1
t=p.gaU()
s=t.b
s.toString
t=t.c++
if(!(t>=0&&t<s.length))return A.a(s,t)
r=s[t]
t=p.d
s=p.e
p.d=(t|B.b.a2(r,s))>>>0
p.e=s+8}s=p.d
q=B.b.cl(1,a)
p.d=B.b.bv(s,a)
p.e=t-a
return(s&q-1)>>>0},
cj(a){var t,s,r,q,p,o,n,m=this,l=a.a
l===$&&A.c()
t=a.b
while(s=m.e,s<t){s=m.gaU()
r=s.c
s=s.d
s===$&&A.c()
if(r>=s)return-1
s=m.gaU()
r=s.b
r.toString
s=s.c++
if(!(s>=0&&s<r.length))return A.a(r,s)
q=r[s]
s=m.d
r=m.e
m.d=(s|B.b.a2(q,r))>>>0
m.e=r+8}r=m.d
p=(r&B.b.a2(1,t)-1)>>>0
if(!(p<l.length))return A.a(l,p)
o=l[p]
n=o>>>16
if(n===0)return-1
m.d=B.b.bv(r,n)
m.e=s-n
return o&65535},
eF(){var t,s,r=this
r.e=r.d=0
t=r.az(16)
s=r.az(16)
if(t!==0&&t!==(s^65535)>>>0)return-1
if(t>r.gaU().gj(0))return-1
r.c.fp(r.gaU().bB(t))
return 0},
eE(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.az(5)
if(i===-1)return-1
i+=257
if(i>288)return-1
t=j.az(5)
if(t===-1)return-1;++t
if(t>32)return-1
s=j.az(4)
if(s===-1)return-1
s+=4
if(s>19)return-1
r=new Uint8Array(19)
for(q=0;q<s;++q){p=j.az(3)
if(p===-1)return-1
o=B.X[q]
if(!(o<19))return A.a(r,o)
r[o]=p}n=A.dE(r)
o=i+t
m=new Uint8Array(o)
l=J.N(B.h.gF(m),0,i)
k=J.N(B.h.gF(m),i,t)
if(j.ea(o,n,m)===-1)return-1
return j.cR(A.dE(l),A.dE(k))},
cR(a,b){var t,s,r,q,p,o,n,m=this
for(t=m.c;;){s=m.cj(a)
if(s<0||s>285)return-1
if(s===256)break
if(s<256){t.S(s&255)
continue}r=s-257
if(!(r>=0&&r<29))return A.a(B.ay,r)
q=B.ay[r]
p=m.az(B.cF[r])
o=m.cj(b)
if(o<0||o>29)return-1
if(!(o>=0&&o<30))return A.a(B.az,o)
n=B.az[o]+m.az(B.L[o])
if(n<1||n>t.b)return-1
t.fo(n,q+p)}while(t=m.e,t>=8){m.e=t-8
t=m.gaU()
q=--t.c
p=t.d
p===$&&A.c()
t.c=B.b.u(q,0,p)}return 0},
ea(a,b,c){var t,s,r,q,p,o,n,m,l=this
for(t=0,s=0;s<a;){r=l.cj(b)
if(r===-1)return-1
q=0
switch(r){case 16:p=l.az(2)
if(p===-1)return-1
p+=3
if(s+p>a)return-1
for(o=c.$flags|0;n=p-1,p>0;p=n,s=m){m=s+1
o&2&&A.b(c)
if(!(s>=0&&s<c.length))return A.a(c,s)
c[s]=t}break
case 17:p=l.az(3)
if(p===-1)return-1
p+=3
if(s+p>a)return-1
for(o=c.$flags|0;n=p-1,p>0;p=n,s=m){m=s+1
o&2&&A.b(c)
if(!(s>=0&&s<c.length))return A.a(c,s)
c[s]=0}t=q
break
case 18:p=l.az(7)
if(p===-1)return-1
p+=11
if(s+p>a)return-1
for(o=c.$flags|0;n=p-1,p>0;p=n,s=m){m=s+1
o&2&&A.b(c)
if(!(s>=0&&s<c.length))return A.a(c,s)
c[s]=0}t=q
break
default:if(r<0||r>15)return-1
m=s+1
c.$flags&2&&A.b(c)
if(!(s>=0&&s<c.length))return A.a(c,s)
c[s]=r
s=m
t=r
break}}return 0}}
A.df.prototype={
ae(){return"ByteOrder."+this.b}}
A.dG.prototype={
gj(a){var t=this.b
return t==null?0:t.length-this.c},
dW(a,b){var t=this.b
if(t==null)return A.fc(A.k([],u.t),B.N,null,null)
return A.fc(t,this.a,a,b)},
bp(){var t,s=this.b
s.toString
t=this.c++
if(!(t>=0&&t<s.length))return A.a(s,t)
return s[t]},
aI(){var t,s,r,q=this,p=q.b
if(p==null)return new Uint8Array(0)
t=q.gj(0)
s=q.c
r=p.length
if(s+t>r)t=r-s
return J.N(B.h.gF(p),q.b.byteOffset+q.c,t)}}
A.dH.prototype={
a0(){var t=this,s=t.bp(),r=t.bp(),q=t.bp(),p=t.bp()
if(t.a===B.D)return(s<<24|r<<16|q<<8|p)>>>0
return(p<<24|q<<16|r<<8|s)>>>0},
bB(a){var t=this,s=t.dW(a,t.c)
t.c=t.c+s.gj(0)
return s}}
A.cG.prototype={
cA(){return J.N(B.h.gF(this.c),this.c.byteOffset,this.b)},
S(a){var t,s,r=this
if(r.b===r.c.length)r.eB()
t=r.c
s=r.b++
t.$flags&2&&A.b(t)
if(!(s>=0&&s<t.length))return A.a(t,s)
t[s]=a},
dK(a,b){var t,s,r,q,p=this
u.L.a(a)
if(b==null)b=a.length
while(t=p.b,s=t+b,r=p.c,q=r.length,s>q)p.bO(s-q)
B.h.aR(r,t,s,a)
p.b+=b},
aP(a){return this.dK(a,null)},
fp(a){var t,s,r,q,p,o,n=this
for(;;){t=n.b
s=a.b
r=s==null
q=r?0:s.length-a.c
p=n.c
o=p.length
if(!(t+q>o))break
n.bO(t+(r?0:s.length-a.c)-o)}if(!r)B.h.af(p,t,t+a.gj(0),s,a.c)
n.b=n.b+a.gj(0)},
fo(a,b){var t,s,r,q,p,o,n,m,l,k,j=this
while(t=j.b,s=t+b,r=j.c,q=r.length,s>q)j.bO(s-q)
p=t-a
if(a>=b)B.h.af(r,t,s,r,p)
else for(o=r.$flags|0,n=p;t<s;t=m,n=l){m=t+1
l=n+1
if(!(n>=0&&n<q))return A.a(r,n)
k=r[n]
o&2&&A.b(r)
if(!(t>=0))return A.a(r,t)
r[t]=k}j.b+=b},
bO(a){var t,s=this.c,r=s.length,q=r+(a==null?1:a),p=r===0?32768:r*2
if(p<q)p=q
t=new Uint8Array(p)
B.h.aR(t,0,r,s)
this.c=t},
eB(){return this.bO(null)},
gj(a){return this.b}}
A.dY.prototype={}
A.eJ.prototype={
ae(){return"Channel."+this.b}}
A.B.prototype={
v(){var t=this.b
return++this.a<t.gj(t)},
gE(){return this.b.i(0,this.a)},
$iq:1}
A.au.prototype={
ae(){return"ChannelOrder."+this.b}}
A.di.prototype={
gH(){return B.K},
gj(a){return this.a.length},
i(a,b){var t=this.a,s=t.length
if(b<s){if(!(b>=0))return A.a(t,b)
t=t[b]
s=$.aa
s=s!=null?s:A.aC()
if(!(t<s.length))return A.a(s,t)
t=s[t]}else t=0
return t},
n(a,b,c){var t,s=this.a
if(b<s.length){t=A.H(c)
s.$flags&2&&A.b(s)
s[b]=t}},
gk(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]
s=$.aa
s=s!=null?s:A.aC()
if(!(t<s.length))return A.a(s,t)
t=s[t]}else t=0
return t},
gp(){var t,s=this.a
if(s.length>1){s=s[1]
t=$.aa
t=t!=null?t:A.aC()
if(!(s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
gm(){var t,s=this.a
if(s.length>2){s=s[2]
t=$.aa
t=t!=null?t:A.aC()
if(!(s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
Y(a){var t=a.gk(),s=this.a,r=s.length
if(r!==0){t=A.H(t)
s.$flags&2&&A.b(s)
if(0>=r)return A.a(s,0)
s[0]=t}t=a.gp()
if(r>1){t=A.H(t)
s.$flags&2&&A.b(s)
s[1]=t}t=a.gm()
if(r>2){t=A.H(t)
s.$flags&2&&A.b(s)
s[2]=t}t=a.gq()
if(r>3){t=A.H(t)
s.$flags&2&&A.b(s)
s[3]=t}},
gA(a){return new A.B(this)},
O(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a.length){t=b.gG(b)
s=A.n(this,A.j(this).l("d.E"))
t=t===A.o(s)}return t},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$ip:1}
A.dj.prototype={
gH(){return B.F},
gj(a){return this.a.length},
i(a,b){var t=this.a,s=t.length
if(b<s){if(!(b>=0))return A.a(t,b)
t=t[b]}else t=0
return t},
n(a,b,c){var t=this.a
if(b<t.length){t.$flags&2&&A.b(t)
t[b]=c}},
gk(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gp(){var t=this.a
return t.length>1?t[1]:0},
gm(){var t=this.a
return t.length>2?t[2]:0},
Y(a){var t=a.gk(),s=this.a,r=s.length
if(r!==0){s.$flags&2&&A.b(s)
if(0>=r)return A.a(s,0)
s[0]=t}t=a.gp()
if(r>1){s.$flags&2&&A.b(s)
s[1]=t}t=a.gm()
if(r>2){s.$flags&2&&A.b(s)
s[2]=t}t=a.gq()
if(r>3){s.$flags&2&&A.b(s)
s[3]=t}},
gA(a){return new A.B(this)},
O(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a.length){t=b.gG(b)
s=A.n(this,A.j(this).l("d.E"))
t=t===A.o(s)}return t},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$ip:1}
A.dk.prototype={
gH(){return B.G},
gj(a){return this.a.length},
i(a,b){var t=this.a,s=t.length
if(b<s){if(!(b>=0))return A.a(t,b)
t=t[b]}else t=0
return t},
n(a,b,c){var t=this.a
if(b<t.length){t.$flags&2&&A.b(t)
t[b]=c}},
gk(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gp(){var t=this.a
return t.length>1?t[1]:0},
gm(){var t=this.a
return t.length>2?t[2]:0},
Y(a){var t=a.gk(),s=this.a,r=s.length
if(r!==0){s.$flags&2&&A.b(s)
if(0>=r)return A.a(s,0)
s[0]=t}t=a.gp()
if(r>1){s.$flags&2&&A.b(s)
s[1]=t}t=a.gm()
if(r>2){s.$flags&2&&A.b(s)
s[2]=t}t=a.gq()
if(r>3){s.$flags&2&&A.b(s)
s[3]=t}},
gA(a){return new A.B(this)},
O(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a.length){t=b.gG(b)
s=A.n(this,A.j(this).l("d.E"))
t=t===A.o(s)}return t},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$ip:1}
A.dl.prototype={
gH(){return B.I},
gj(a){return this.a.length},
i(a,b){var t=this.a,s=t.length
if(b<s){if(!(b>=0))return A.a(t,b)
t=t[b]}else t=0
return t},
n(a,b,c){var t,s=this.a
if(b<s.length){t=B.a.h(c)
s.$flags&2&&A.b(s)
s[b]=t}},
gk(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gp(){var t=this.a
return t.length>1?t[1]:0},
gm(){var t=this.a
return t.length>2?t[2]:0},
Y(a){var t=a.gk(),s=this.a,r=s.length
if(r!==0){t=B.a.h(t)
s.$flags&2&&A.b(s)
if(0>=r)return A.a(s,0)
s[0]=t}t=a.gp()
if(r>1){t=B.a.h(t)
s.$flags&2&&A.b(s)
s[1]=t}t=a.gm()
if(r>2){t=B.a.h(t)
s.$flags&2&&A.b(s)
s[2]=t}t=a.gq()
if(r>3){t=B.a.h(t)
s.$flags&2&&A.b(s)
s[3]=t}},
gA(a){return new A.B(this)},
O(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a.length){t=b.gG(b)
s=A.n(this,A.j(this).l("d.E"))
t=t===A.o(s)}return t},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$ip:1}
A.dm.prototype={
gH(){return B.J},
gj(a){return this.a.length},
i(a,b){var t=this.a,s=t.length
if(b<s){if(!(b>=0))return A.a(t,b)
t=t[b]}else t=0
return t},
n(a,b,c){var t,s=this.a
if(b<s.length){t=B.a.h(c)
s.$flags&2&&A.b(s)
s[b]=t}},
gk(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gp(){var t=this.a
return t.length>1?t[1]:0},
gm(){var t=this.a
return t.length>2?t[2]:0},
Y(a){var t=a.gk(),s=this.a,r=s.length
if(r!==0){A.t(t)
s.$flags&2&&A.b(s)
if(0>=r)return A.a(s,0)
s[0]=t}t=a.gp()
if(r>1){t=B.a.h(t)
s.$flags&2&&A.b(s)
s[1]=t}t=a.gm()
if(r>2){t=B.a.h(t)
s.$flags&2&&A.b(s)
s[2]=t}t=a.gq()
if(r>3){t=B.a.h(t)
s.$flags&2&&A.b(s)
s[3]=t}},
gA(a){return new A.B(this)},
O(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a.length){t=b.gG(b)
s=A.n(this,A.j(this).l("d.E"))
t=t===A.o(s)}return t},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$ip:1}
A.dn.prototype={
gH(){return B.H},
gj(a){return this.a.length},
i(a,b){var t=this.a,s=t.length
if(b<s){if(!(b>=0))return A.a(t,b)
t=t[b]}else t=0
return t},
n(a,b,c){var t,s=this.a
if(b<s.length){t=B.a.h(c)
s.$flags&2&&A.b(s)
s[b]=t}},
gk(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gp(){var t=this.a
return t.length>1?t[1]:0},
gm(){var t=this.a
return t.length>2?t[2]:0},
Y(a){var t=a.gk(),s=this.a,r=s.length
if(r!==0){t=B.a.h(t)
s.$flags&2&&A.b(s)
if(0>=r)return A.a(s,0)
s[0]=t}t=a.gp()
if(r>1){t=B.a.h(t)
s.$flags&2&&A.b(s)
s[1]=t}t=a.gm()
if(r>2){t=B.a.h(t)
s.$flags&2&&A.b(s)
s[2]=t}t=a.gq()
if(r>3){t=B.a.h(t)
s.$flags&2&&A.b(s)
s[3]=t}},
gA(a){return new A.B(this)},
O(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a.length){t=b.gG(b)
s=A.n(this,A.j(this).l("d.E"))
t=t===A.o(s)}return t},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$ip:1}
A.dq.prototype={
gH(){return B.v},
bJ(a){var t
if(a<this.a){t=this.b
t===$&&A.c()
t=B.b.b1(t,7-a)&1}else t=0
return t},
bq(a,b){var t
if(a>=this.a)return
a=7-a
t=this.b
t===$&&A.c()
this.b=b!==0?(t|B.b.a2(1,a))>>>0:(t&~(B.b.a2(1,a)&255))>>>0},
i(a,b){return this.bJ(b)},
n(a,b,c){return this.bq(b,c)},
gk(){return this.bJ(0)},
gp(){return this.bJ(1)},
gm(){return this.bJ(2)},
Y(a){var t=this,s=a.gk(),r=a.gp(),q=a.gm(),p=a.gq()
t.bq(0,s)
t.bq(1,r)
t.bq(2,q)
t.bq(3,p)},
gA(a){return new A.B(this)},
O(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a){t=b.gG(b)
s=A.n(this,A.j(this).l("d.E"))
t=t===A.o(s)}return t},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$ip:1,
gj(a){return this.a}}
A.dr.prototype={
gH(){return B.r},
gj(a){return this.a.length},
i(a,b){var t=this.a,s=t.length
if(b<s){if(!(b>=0))return A.a(t,b)
t=t[b]}else t=0
return t},
n(a,b,c){var t,s=this.a
if(b<s.length){t=B.a.h(c)
s.$flags&2&&A.b(s)
s[b]=t}},
gk(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gp(){var t=this.a
return t.length>1?t[1]:0},
gm(){var t=this.a
return t.length>2?t[2]:0},
Y(a){var t=a.gk(),s=this.a,r=s.length
if(r!==0){t=B.a.h(t)
s.$flags&2&&A.b(s)
if(0>=r)return A.a(s,0)
s[0]=t}t=a.gp()
if(r>1){t=B.a.h(t)
s.$flags&2&&A.b(s)
s[1]=t}t=a.gm()
if(r>2){t=B.a.h(t)
s.$flags&2&&A.b(s)
s[2]=t}t=a.gq()
if(r>3){t=B.a.h(t)
s.$flags&2&&A.b(s)
s[3]=t}},
gA(a){return new A.B(this)},
O(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a.length){t=b.gG(b)
s=A.n(this,A.j(this).l("d.E"))
t=t===A.o(s)}return t},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$ip:1}
A.ds.prototype={
gH(){return B.w},
bK(a){var t
if(a<this.a){t=this.b
t===$&&A.c()
t=B.b.b1(t,6-(a<<1>>>0))&3}else t=0
return t},
br(a,b){var t,s,r
if(a>=this.a)return
if(!(a<4))return A.a(B.an,a)
t=B.an[a]
s=B.a.h(b)
r=this.b
r===$&&A.c()
this.b=(r&t|B.b.a2(s&3,6-(a<<1>>>0)))>>>0},
i(a,b){return this.bK(b)},
n(a,b,c){return this.br(b,c)},
gk(){return this.bK(0)},
gp(){return this.bK(1)},
gm(){return this.bK(2)},
Y(a){var t=this,s=a.gk(),r=a.gp(),q=a.gm(),p=a.gq()
t.br(0,s)
t.br(1,r)
t.br(2,q)
t.br(3,p)},
gA(a){return new A.B(this)},
O(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a){t=b.gG(b)
s=A.n(this,A.j(this).l("d.E"))
t=t===A.o(s)}return t},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$ip:1,
gj(a){return this.a}}
A.dt.prototype={
gH(){return B.z},
gj(a){return this.a.length},
i(a,b){var t=this.a,s=t.length
if(b<s){if(!(b>=0))return A.a(t,b)
t=t[b]}else t=0
return t},
n(a,b,c){var t,s=this.a
if(b<s.length){t=B.a.h(c)
s.$flags&2&&A.b(s)
s[b]=t}},
gk(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gp(){var t=this.a
return t.length>1?t[1]:0},
gm(){var t=this.a
return t.length>2?t[2]:0},
Y(a){var t=a.gk(),s=this.a,r=s.length
if(r!==0){t=B.a.h(t)
s.$flags&2&&A.b(s)
if(0>=r)return A.a(s,0)
s[0]=t}t=a.gp()
if(r>1){t=B.a.h(t)
s.$flags&2&&A.b(s)
s[1]=t}t=a.gm()
if(r>2){t=B.a.h(t)
s.$flags&2&&A.b(s)
s[2]=t}t=a.gq()
if(r>3){t=B.a.h(t)
s.$flags&2&&A.b(s)
s[3]=t}},
gA(a){return new A.B(this)},
O(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a.length){t=b.gG(b)
s=A.n(this,A.j(this).l("d.E"))
t=t===A.o(s)}return t},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$ip:1}
A.du.prototype={
gH(){return B.x},
bM(a){var t,s
if(a<0||a>=this.a)t=0
else{t=this.b
s=t.length
if(a<2){if(0>=s)return A.a(t,0)
t=B.b.b1(t[0],4-(a<<2>>>0))&15}else{if(1>=s)return A.a(t,1)
t=B.b.b1(t[1],4-((a&1)<<2))&15}}return t},
bu(a,b){var t,s,r,q
if(a>=this.a)return
t=B.b.u(B.a.h(b),0,15)
if(a>1){a&=1
s=1}else s=0
if(a===0){r=this.b
if(!(s<r.length))return A.a(r,s)
q=r[s]
r.$flags&2&&A.b(r)
r[s]=(q&15|t<<4)>>>0}else if(a===1){r=this.b
if(!(s<r.length))return A.a(r,s)
q=r[s]
r.$flags&2&&A.b(r)
r[s]=(q&240|t)>>>0}},
i(a,b){return this.bM(b)},
n(a,b,c){return this.bu(b,c)},
gk(){return this.bM(0)},
gp(){return this.bM(1)},
gm(){return this.bM(2)},
Y(a){var t=this,s=a.gk(),r=a.gp(),q=a.gm(),p=a.gq()
t.bu(0,s)
t.bu(1,r)
t.bu(2,q)
t.bu(3,p)},
gA(a){return new A.B(this)},
O(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a){t=b.gG(b)
s=A.n(this,A.j(this).l("d.E"))
t=t===A.o(s)}return t},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$ip:1,
gj(a){return this.a}}
A.c9.prototype={
gH(){return B.l},
gj(a){return this.a.length},
i(a,b){var t=this.a,s=t.length
if(b<s){if(!(b>=0))return A.a(t,b)
t=t[b]}else t=0
return t},
n(a,b,c){var t,s=this.a
if(b<s.length){t=B.a.h(c)
s.$flags&2&&A.b(s)
s[b]=t}},
gR(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gk(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]}else t=0
return t},
gp(){var t=this.a
return t.length>1?t[1]:0},
gm(){var t=this.a
return t.length>2?t[2]:0},
gq(){var t=this.a
return t.length>3?t[3]:255},
Y(a){var t=a.gk(),s=this.a,r=s.length
if(r!==0){t=B.a.h(t)
s.$flags&2&&A.b(s)
if(0>=r)return A.a(s,0)
s[0]=t}t=a.gp()
if(r>1){t=B.a.h(t)
s.$flags&2&&A.b(s)
s[1]=t}t=a.gm()
if(r>2){t=B.a.h(t)
s.$flags&2&&A.b(s)
s[2]=t}t=a.gq()
if(r>3){t=B.a.h(t)
s.$flags&2&&A.b(s)
s[3]=t}},
gA(a){return new A.B(this)},
O(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a.length){t=b.gG(b)
s=A.n(this,A.j(this).l("d.E"))
t=t===A.o(s)}return t},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$ip:1}
A.dp.prototype={}
A.c8.prototype={}
A.W.prototype={
ae(){return"Format."+this.b}}
A.de.prototype={
ae(){return"BlendMode."+this.b}}
A.dz.prototype={
cC(a){var t=$.jQ()
if(!t.a6(a))return"<unknown>"
return t.i(0,a).a},
D(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
for(t=this.a,s=new A.P(t,t.r,t.e,A.j(t).l("P<1>")),r=u.S,q=u.r,p=u.N,o=u.P,n="";s.v();){m=s.d
n+=m+"\n"
l=t.i(0,m)
for(m=l.a,m=new A.P(m,m.r,m.e,A.j(m).l("P<1>"));m.v();){k=m.d
l.i(0,k)
n+="\t"+this.cC(k)+"\n"}for(m=l.b.a,k=new A.P(m,m.r,m.e,A.j(m).l("P<1>"));k.v();){j=k.d
n+=j+"\n"
if(!m.a6(j))m.n(0,j,new A.b5(A.ab(r,q),new A.bJ(A.ab(p,o))))
i=m.i(0,j)
for(j=i.a,j=new A.P(j,j.r,j.e,A.j(j).l("P<1>"));j.v();){h=j.d
i.i(0,h)
n+="\t"+this.cC(h)+"\n"}}}return n.charCodeAt(0)==0?n:n}}
A.dA.prototype={}
A.bJ.prototype={
dZ(a){a.a.aF(0,new A.f6(this))}}
A.f6.prototype={
$2(a,b){var t
A.Y(a)
t=A.it(u.P.a(b))
this.a.a.n(0,a,t)
return t},
$S:2}
A.b5.prototype={
eZ(a){a.a.aF(0,new A.f7(this))
a.b.a.aF(0,new A.f8(this))},
i(a,b){var t=this.a.i(0,b)
return t}}
A.f7.prototype={
$2(a,b){var t
A.t(a)
t=u.r.a(b).N()
this.a.a.n(0,a,t)
return t},
$S:9}
A.f8.prototype={
$2(a,b){var t
A.Y(a)
t=A.it(u.P.a(b))
this.a.b.a.n(0,a,t)
return t},
$S:2}
A.aS.prototype={
ae(){return"IfdValueType."+this.b}}
A.eU.prototype={}
A.eW.prototype={}
A.bW.prototype={
ae(){return"PngDisposeMode."+this.b}}
A.cJ.prototype={
ae(){return"PngBlendMode."+this.b}}
A.cK.prototype={}
A.dJ.prototype={}
A.aY.prototype={
ae(){return"PngFilterType."+this.b}}
A.ft.prototype={
sV(a){this.w=u.di.a(a)},
sfk(a){this.x=u.v.a(a)}}
A.fd.prototype={}
A.fr.prototype={
dV(b8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7=A.fb(b8,!0,b6,0)
b5.d=b7
t=b7.bB(8)
for(b7=t.a,s=t.d,r=b7.length,q=0;q<8;++q){p=s+q
if(!(p>=0&&p<r))return A.a(b7,p)
if(b7[p]!==B.ax[q])return b6}for(b7=b5.a,s=b7.cy,r=u.t,p=b7.db,o=u.L,n=b7.ax;;){m=b5.d
l=m.d-m.b
k=m.a0()
j=b5.d.c_(4)
switch(j){case"tEXt":m=b5.d
i=m.aS(k)
m.d=m.d+(i.c-i.d)
h=i.aI()
g=h.length
for(q=0;q<g;++q)if(h[q]===0){m=q+1
n.n(0,B.ae.bS(new Uint8Array(h.subarray(0,A.eA(0,q,g)))),B.ae.bS(new Uint8Array(h.subarray(m,A.eA(m,b6,g)))))
break}b5.d.d+=4
break
case"pHYs":m=b5.d
i=m.aS(k)
m.d=m.d+(i.c-i.d)
f=A.iw(i)
f.a0()
f.a0()
m=f.a
e=f.d++
if(!(e>=0&&e<m.length))return A.a(m,e)
b5.d.d+=4
break
case"IHDR":m=b5.d
i=m.aS(k)
m.d=m.d+(i.c-i.d)
d=A.iw(i)
c=d.aI()
b7.a=d.a0()
b7.b=d.a0()
m=d.a
e=d.d
b=d.d=e+1
a=m.length
if(!(e>=0&&e<a))return A.a(m,e)
b7.c=m[e]
e=d.d=b+1
if(!(b>=0&&b<a))return A.a(m,b)
b=b7.d=m[b]
a0=d.d=e+1
if(!(e>=0&&e<a))return A.a(m,e)
e=d.d=a0+1
if(!(a0>=0&&a0<a))return A.a(m,a0)
a0=m[a0]
b7.f=a0
d.d=e+1
if(!(e>=0&&e<a))return A.a(m,e)
b7.r=m[e]
if(!(b===0||b===2||b===3||b===4||b===6))return b6
if(a0!==0)return b6
switch(b){case 0:if(!B.c.aE(A.k([1,2,4,8,16],r),b7.c))return b6
break
case 2:if(!B.c.aE(A.k([8,16],r),b7.c))return b6
break
case 3:if(!B.c.aE(A.k([1,2,4,8],r),b7.c))return b6
break
case 4:if(!B.c.aE(A.k([8,16],r),b7.c))return b6
break
case 6:if(!B.c.aE(A.k([8,16],r),b7.c))return b6
break}if(b5.d.a0()!==A.ax(o.a(c),A.ax(new A.av(j),0)))throw A.f(A.aw("Invalid "+j+" checksum"))
break
case"PLTE":m=b5.d
i=m.aS(k)
m.d=m.d+(i.c-i.d)
b7.sV(i.aI())
if(b5.d.a0()!==A.ax(o.a(o.a(b7.w)),A.ax(new A.av(j),0)))throw A.f(A.aw("Invalid "+j+" checksum"))
break
case"tRNS":m=b5.d
i=m.aS(k)
m.d=m.d+(i.c-i.d)
b7.sfk(i.aI())
a1=b5.d.a0()
m=b7.x
m.toString
if(a1!==A.ax(o.a(m),A.ax(new A.av(j),0)))throw A.f(A.aw("Invalid "+j+" checksum"))
break
case"IEND":b5.d.d+=4
break
case"gAMA":if(k!==4)throw A.f(A.aw("Invalid gAMA chunk"))
b5.d.a0()
b5.d.d+=4
break
case"IDAT":B.c.L(p,l)
m=b5.d
m.d=(m.d+=k)+4
break
case"acTL":b7.CW=b5.d.a0()
b5.d.a0()
b5.d.d+=4
break
case"fcTL":b5.d.a0()
a2=b5.d.a0()
a3=b5.d.a0()
a4=b5.d.a0()
a5=b5.d.a0()
a6=b5.d.bj()
a7=b5.d.bj()
m=b5.d
e=m.a
b=m.d
a=m.d=b+1
a0=e.length
if(!(b>=0&&b<a0))return A.a(e,b)
a8=e[b]
m.d=a+1
if(!(a>=0&&a<a0))return A.a(e,a)
a9=e[a]
if(!(a8>=0&&a8<3))return A.a(B.am,a8)
a=B.am[a8]
if(!(a9>=0&&a9<2))return A.a(B.at,a9)
e=B.at[a9]
B.c.L(s,new A.dJ(A.k([],r),a2,a3,a4,a5,a6,a7,a,e))
b5.d.d+=4
break
case"fdAT":b5.d.a0()
B.c.L(B.c.gct(s).y,l)
m=b5.d
m.d=(m.d+=k-4)+4
break
case"bKGD":m=b7.d
if(m===3){m=b5.d
e=m.a
m=m.d++
if(!(m>=0&&m<e.length))return A.a(e,m)
b0=e[m];--k
b1=b0*3
m=b7.w
e=m.length
if(!(b1>=0&&b1<e))return A.a(m,b1)
b2=m[b1]
b=b1+1
if(!(b<e))return A.a(m,b)
b3=m[b]
b=b1+2
if(!(b<e))return A.a(m,b)
b4=m[b]
m=b7.x
if(m!=null){m=B.h.aE(m,b0)?0:255
e=new Uint8Array(4)
e[0]=b2
e[1]=b3
e[2]=b4
e[3]=m
b7.z=new A.c8(e)}else{m=new Uint8Array(3)
m[0]=b2
m[1]=b3
m[2]=b4
b7.z=new A.dp(m)}}else if(m===0||m===4){b5.d.bj()
k-=2}else if(m===2||m===6){m=b5.d
m.bj()
m.bj()
m.bj()
k-=24}if(k>0)b5.d.d+=k
b5.d.d+=4
break
case"iCCP":m=b5.d.fh()
b7.Q=m
e=b5.d
b=e.a
a=e.d
a0=a+1
e.d=a0
if(!(a>=0&&a<b.length))return A.a(b,a)
i=e.aS(k-(m.length+2))
e.d=a0+(i.c-i.d)
b7.at=i.aI()
b5.d.d+=4
break
case"cICP":m=b5.d
e=m.d
if(k===4){b=m.a
a=m.d=e+1
a0=b.length
if(!(e>=0&&e<a0))return A.a(b,e)
e=m.d=a+1
if(!(a>=0&&a<a0))return A.a(b,a)
a=m.d=e+1
if(!(e>=0&&e<a0))return A.a(b,e)
e=m.d=a+1
if(!(a>=0&&a<a0))return A.a(b,a)}else e=m.d=e+k
m.d=e+4
break
default:m=b5.d
m.d=(m.d+=k)+4
break}if(j==="IEND")break
m=b5.d
if(m.d>=m.c)return b6}return b7},
ds(c3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7=null,b8=b5.a,b9=b8.a,c0=b8.b,c1=b8.cy,c2=c1.length
if(c2===0||c3===0){s=A.k([],u.h)
c1=b8.db
r=c1.length
for(c2=u.L,q=0,p=0;p<r;++p){o=b5.d
o===$&&A.c()
if(!(p<c1.length))return A.a(c1,p)
o.d=c1[p]
n=o.a0()
m=b5.d.c_(4)
o=b5.d
l=o.aS(n)
o.d=o.d+(l.c-l.d)
k=l.aI()
q+=k.length
B.c.L(s,k)
if(b5.d.a0()!==A.ax(c2.a(k),A.ax(new A.av(m),0)))throw A.f(A.aw("Invalid "+m+" checksum"))}b7=new Uint8Array(q)
for(c1=s.length,j=0,i=0;i<s.length;s.length===c1||(0,A.D)(s),++i){k=s[i]
J.ie(b7,j,k)
j+=k.length}}else{if(c3>=c2)throw A.f(A.aw("Invalid Frame Number: "+c3))
if(!(c3<c2))return A.a(c1,c3)
h=c1[c3]
b9=h.b
c0=h.c
s=A.k([],u.h)
for(c1=h.y,q=0,p=0;p<c1.length;++p){c2=b5.d
c2===$&&A.c()
c2.d=c1[p]
n=c2.a0()
c2=b5.d
c2.c_(4)
c2.d+=4
c2=b5.d
l=c2.aS(n-4)
c2.d=c2.d+(l.c-l.d)
k=l.aI()
q+=k.length
B.c.L(s,k)}b7=new Uint8Array(q)
for(c1=s.length,j=0,i=0;i<s.length;s.length===c1||(0,A.D)(s),++i){k=s[i]
J.ie(b7,j,k)
j+=k.length}}c1=b8.d
g=1
if(!(c1===3))if(!(c1===0)){if(c1===4)c1=2
else c1=c1===6?4:3
g=c1}t=null
try{c1=u.L.a(b7)
f=A.iE(B.N,32768)
B.ba.f0(A.fc(c1,B.D,b6,b6),f,!1,!1)
t=f.cA()}catch(e){return b6}d=A.fb(t,!0,b6,0)
b5.c=b5.b=0
c=b6
if(b8.d===3){c1=b8.w
if(c1!=null){c2=c1.length
b=c2/3|0
a=b8.x
o=a!=null
a0=o?a.length:0
a1=o?4:3
c=new A.bc(new Uint8Array(b*a1),b,a1)
for(o=a1===4,p=0,a2=0;p<b;++p,a2+=3){if(o&&p<a0){if(!(p<a.length))return A.a(a,p)
a3=a[p]}else a3=255
if(!(a2<c2))return A.a(c1,a2)
a4=c1[a2]
a5=a2+1
if(!(a5<c2))return A.a(c1,a5)
a5=c1[a5]
a6=a2+2
if(!(a6<c2))return A.a(c1,a6)
c.cF(p,a4,a5,c1[a6],a3)}}}if(b8.d===0&&b8.x!=null&&c==null&&b8.c<=8){a=b8.x
a7=a.length
c1=b8.c
b=B.b.a2(1,c1)
c2=b*4
o=new Uint8Array(c2)
c=new A.bc(o,b,4)
if(c1===1)a8=255
else if(c1===2)a8=85
else{c1=c1===4?17:1
a8=c1}for(p=0;p<b;++p){a9=p*a8
c.cF(p,a9,a9,a9,255)}for(p=0;p<a7;p+=2){c1=a[p]
a4=p+1
if(!(a4<a7))return A.a(a,a4)
b0=(c1&255)<<8|a[a4]&255
if(b0<b){c1=b0*4+3
if(!(c1<c2))return A.a(o,c1)
o[c1]=0}}}c1=b8.c
if(c1===1)b1=B.v
else if(c1===2)b1=B.w
else{if(c1===4)c2=B.x
else c2=c1===16?B.r:B.l
b1=c2}c2=b8.d
if(c2===0&&b8.x!=null&&c1>8)g=4
b2=A.hr(b6,b6,b1,0,B.S,c0,b6,0,c2===2&&b8.x!=null?4:g,c,b9,!1)
b3=b8.a
b4=b8.b
b8.a=b9
b8.b=c0
b5.e=0
if(b8.r!==0){c1=c0+7>>>3
b5.bg(d,b2,0,0,8,8,b9+7>>>3,c1)
c2=b9+3
b5.bg(d,b2,4,0,8,8,c2>>>3,c1)
c1=c0+3
b5.bg(d,b2,0,4,4,8,c2>>>2,c1>>>3)
c2=b9+1
b5.bg(d,b2,2,0,4,4,c2>>>2,c1>>>2)
c1=c0+1
b5.bg(d,b2,0,2,2,4,c2>>>1,c1>>>2)
b5.bg(d,b2,1,0,2,2,b9>>>1,c1>>>1)
b5.bg(d,b2,0,1,1,2,b9,c0>>>1)}else b5.eG(d,b2)
b8.a=b3
b8.b=b4
c1=b8.at
if(c1!=null)b2.c=new A.ci(b8.Q,B.a2,c1)
b8=b8.ax
if(b8.a!==0)b2.eR(b8)
return b2},
bS(a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null
if(b.dV(a0)==null)return a
t=b.a
s=t.cy
r=s.length
if(r===0){t=b.ds(0)
t.toString
return t}for(r=u.g,q=a,p=q,o=0;o<t.CW;++o){if(!(o<s.length))return A.a(s,o)
n=s[o]
m=b.ds(o)
if(m==null)continue
if(p==null||q==null){p=m.dr(m.gap())
l=n.f
p.y=B.a.h((l===0||n.r===0?0:l/n.r)*1000)
q=p
continue}l=o-1
if(!(l>=0&&l<s.length))return A.a(s,l)
k=s[l]
j=m.a
i=j==null
h=i?a:j.a
if(h==null)h=0
g=q.a
f=g==null
e=f?a:g.a
if(h===(e==null?0:e)){j=i?a:j.b
if(j==null)j=0
i=f?a:g.b
j=j===(i==null?0:i)&&n.d===0&&n.e===0&&n.x===B.aF}else j=!1
if(j){l=n.f
m.y=B.a.h((l===0||n.r===0?0:l/n.r)*1000)
p.b9(m)
q=m
continue}d=p.x
if(d===$)d=p.x=A.k([],r)
if(!(l<d.length))return A.a(d,l)
q=A.hs(d[l],!1,!1)
c=k.w
if(c===B.aH){l=k.d
j=k.e
i=t.z
if(i==null){i=new Uint8Array(4)
h=new A.c8(i)
i[0]=0
i[1]=0
i[2]=0
i[3]=0
i=h}A.m5(q,!1,i,l,l+k.b-1,j,j+k.c-1)}else if(c===B.aI&&o>1){l=o-2
d=p.x
if(d===$)d=p.x=A.k([],r)
if(!(l>=0&&l<d.length))return A.a(d,l)
j=k.d
i=k.e
h=k.b
g=k.c
q=A.ji(q,d[l],B.aa,g,h,j,i,g,h,j,i)}l=n.f
q.y=B.a.h((l===0||n.r===0?0:l/n.r)*1000)
l=n.x===B.aG?B.aa:B.Z
q=A.ji(q,m,l,a,a,n.d,n.e,a,a,a,a)
p.b9(q)}return p},
bg(a4,a5,a6,a7,a8,a9,b0,b1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.d
if(a3===4)t=2
else if(a3===2)t=3
else{a3=a3===6?4:1
t=a3}s=t*a2.c
r=B.b.I(s+7,3)
q=B.b.I(s*b0+7,3)
p=A.k([null,null],u.e)
o=A.k([0,0,0,0],u.t)
for(a2=a8>1,n=a8-a6,a3=a4.a,m=a7,l=0,k=0;l<b1;++l,m+=a9,++a1.e){j=a4.d
i=j+1
a4.d=i
if(!(j>=0&&j<a3.length))return A.a(a3,j)
j=a3[j]
if(!(j>=0&&j<5))return A.a(B.W,j)
h=B.W[j]
g=a4.aS(q)
a4.d=i+(g.c-g.d)
B.c.n(p,k,g.aI())
if(!(k>=0&&k<2))return A.a(p,k)
f=p[k]
k=1-k
e=p[k]
f.toString
a1.d8(h,r,f,e)
a1.c=a1.b=0
i=f.length
d=new A.bP(f,0,Math.min(i,i),0,!0)
for(j=n<=1,c=a6,b=0;b<b0;++b,c+=a8){a1.d1(d,o)
i=a5.a
i=i==null?null:i.a1(c,m,null)
a1.ck(i==null?new A.a7():i,o)
if(!j||a2)for(a=0;a<a8;++a)for(i=m+a,a0=0;a0<n;++a0)a1.ck(a5.dO(c+a0,i),o)}}},
eG(a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a,a0=a.d
if(a0===4)t=2
else if(a0===2)t=3
else{a0=a0===6?4:1
t=a0}s=t*a.c
r=a.a
q=a.b
p=B.b.I(r*s+7,3)
o=B.b.I(s+7,3)
n=A.dR(p,0,!1,u.S)
m=A.k([n,n],u.p)
l=A.k([0,0,0,0],u.t)
a=a2.a
k=a.gA(a)
k.v()
for(a=a1.a,j=0,i=0;j<q;++j,i=e){a0=a1.d
h=a0+1
a1.d=h
if(!(a0>=0&&a0<a.length))return A.a(a,a0)
a0=a[a0]
if(!(a0>=0&&a0<5))return A.a(B.W,a0)
g=B.W[a0]
f=a1.aS(p)
a1.d=h+(f.c-f.d)
B.c.n(m,i,f.aI())
if(!(i>=0&&i<2))return A.a(m,i)
e=1-i
b.d8(g,o,m[i],m[e])
b.c=b.b=0
h=m[i]
a0=h.length
d=new A.bP(h,0,Math.min(a0,a0),0,!0)
for(c=0;c<r;++c){b.d1(d,l)
b.ck(k.gE(),l)
k.v()}}},
d8(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u.L.a(c)
u.v.a(d)
t=c.length
switch(a.a){case 0:break
case 1:for(s=J.ay(c),r=b;r<t;++r){q=c.length
if(!(r<q))return A.a(c,r)
p=c[r]
o=r-b
if(!(o>=0&&o<q))return A.a(c,o)
s.n(c,r,p+c[o]&255)}break
case 2:for(s=J.ay(c),q=d!=null,r=0;r<t;++r){if(q){if(!(r<d.length))return A.a(d,r)
n=d[r]}else n=0
if(!(r<c.length))return A.a(c,r)
s.n(c,r,c[r]+n&255)}break
case 3:for(s=J.ay(c),q=d!=null,r=0;r<t;++r){if(r<b)m=0
else{p=r-b
if(!(p>=0&&p<c.length))return A.a(c,p)
m=c[p]}if(q){if(!(r<d.length))return A.a(d,r)
n=d[r]}else n=0
if(!(r<c.length))return A.a(c,r)
s.n(c,r,c[r]+B.b.I(m+n,1)&255)}break
case 4:for(s=J.ay(c),q=d==null,p=!q,r=0;r<t;++r){o=r<b
if(o)m=0
else{l=r-b
if(!(l>=0&&l<c.length))return A.a(c,l)
m=c[l]}if(p){if(!(r<d.length))return A.a(d,r)
n=d[r]}else n=0
if(o||q)k=0
else{o=r-b
if(!(o>=0&&o<d.length))return A.a(d,o)
k=d[o]}j=m+n-k
i=Math.abs(j-m)
h=Math.abs(j-n)
g=Math.abs(j-k)
if(i<=h&&i<=g)f=m
else f=h<=g?n:k
if(!(r<c.length))return A.a(c,r)
s.n(c,r,c[r]+f&255)}break}},
aL(a,b){var t,s,r,q,p,o=this
if(b===0)return 0
if(b===8)return a.bp()
if(b===16)return a.bj()
for(t=a.a,s=a.c;r=o.c,r<b;){q=a.d
if(q>=s)throw A.f(A.aw("Invalid PNG data."))
a.d=q+1
if(!(q>=0&&q<t.length))return A.a(t,q)
o.b=B.b.a2(t[q],r)
o.c=r+8}if(b===1)p=1
else if(b===2)p=3
else{if(b===4)t=15
else t=0
p=t}t=r-b
s=B.b.b1(o.b,t)
o.c=t
return s&p},
d1(a,b){var t,s,r=this
u.L.a(b)
t=r.a
s=t.d
switch(s){case 0:B.c.n(b,0,r.aL(a,t.c))
return
case 2:B.c.n(b,0,r.aL(a,t.c))
B.c.n(b,1,r.aL(a,t.c))
B.c.n(b,2,r.aL(a,t.c))
return
case 3:B.c.n(b,0,r.aL(a,t.c))
return
case 4:B.c.n(b,0,r.aL(a,t.c))
B.c.n(b,1,r.aL(a,t.c))
return
case 6:B.c.n(b,0,r.aL(a,t.c))
B.c.n(b,1,r.aL(a,t.c))
B.c.n(b,2,r.aL(a,t.c))
B.c.n(b,3,r.aL(a,t.c))
return}throw A.f(A.aw("Invalid color type: "+s+"."))},
ck(a,b){var t,s,r,q,p,o,n,m,l,k
u.L.a(b)
t=this.a
s=t.d
switch(s){case 0:s=t.x
if(s!=null&&t.c>8){t=s.length
if(0>=t)return A.a(s,0)
r=s[0]
if(1>=t)return A.a(s,1)
s=s[1]
q=b[0]
a.aa(q,q,q,q!==((r&255)<<24|s&255)>>>0?a.gB():0)
return}a.a9(b[0],0,0)
return
case 2:p=b[0]
q=b[1]
o=b[2]
t=t.x
if(t!=null){s=t.length
if(0>=s)return A.a(t,0)
r=t[0]
if(1>=s)return A.a(t,1)
n=t[1]
if(2>=s)return A.a(t,2)
m=t[2]
if(3>=s)return A.a(t,3)
l=t[3]
if(4>=s)return A.a(t,4)
k=t[4]
if(5>=s)return A.a(t,5)
t=t[5]
if(p!==((r&255)<<8|n&255)||q!==((m&255)<<8|l&255)||o!==((k&255)<<8|t&255)){a.aa(p,q,o,a.gB())
return}}a.a9(p,q,o)
return
case 3:a.sR(b[0])
return
case 4:a.a9(b[0],b[1],0)
return
case 6:a.aa(b[0],b[1],b[2],b[3])
return}throw A.f(A.aw("Invalid color type: "+s+"."))}}
A.e3.prototype={
ae(){return"PngFilter."+this.b}}
A.fs.prototype={
b9(a){var t,s,r,q,p,o,n,m,l=this,k=8192,j=a.a
j=j==null?null:j.gaG()
if(!(j===!0&&a.gH()!==B.r))j=a.gad()<8&&!a.gaN()&&a.gap()>1
else j=!0
if(j)a=a.eW(B.l)
if(l.w==null){j=A.bb(!0,k)
l.w=j
j.aP(A.k([137,80,78,71,13,10,26,10],u.t))
t=A.bb(!0,k)
t.aJ(a.gac())
t.aJ(a.ga8())
t.S(a.gad())
if(a.gaN())j=3
else if(a.gap()===1)j=0
else if(a.gap()===2)j=4
else j=a.gap()===3?2:6
t.S(j)
t.S(0)
t.S(0)
t.S(0)
j=l.w
j.toString
l.aM(j,"IHDR",J.N(B.h.gF(t.c),0,t.a))
j=a.c
if(j!=null){t=A.bb(!0,k)
t.aP(new A.av(j.a))
t.S(0)
t.S(0)
t.aP(j.eV())
j=l.w
j.toString
l.aM(j,"iCCP",J.N(B.h.gF(t.c),0,t.a))}if(a.gaN()){j=l.a
if(j!=null){j=j.a
j===$&&A.c()
l.dd(j)}else{j=a.a
j=j==null?null:j.gV()
j.toString
l.dd(j)}}if(l.r){t=A.bb(!0,k)
j=l.e
j===$&&A.c()
t.aJ(j)
t.aJ(l.c)
j=l.w
j.toString
l.aM(j,"acTL",J.N(B.h.gF(t.c),0,t.a))}}s=a.gaN()?1:a.gap()
r=a.gH()===B.r?2:1
j=a.gac()
q=a.ga8()
p=a.ga8()
o=new Uint8Array(j*q*s*r+p)
l.ek(0,a,o)
n=B.ag.du(u.L.a(o),l.d)
j=a.d
if(j!=null)for(j=new A.P(j,j.r,j.e,A.j(j).l("P<1>"));j.v();){q=j.d
p=a.d.i(0,q)
p.toString
t=new A.dX(!0,new Uint8Array(8192))
t.aP(B.af.b2(q))
t.S(0)
t.aP(B.af.b2(p))
q=l.w
q.toString
l.aM(q,"tEXt",J.N(B.h.gF(t.c),0,t.a))}if(l.r){t=A.bb(!0,k)
t.aJ(l.f)
t.aJ(a.gac())
t.aJ(a.ga8())
t.aJ(0)
t.aJ(0)
t.dL(a.y)
t.dL(1000)
t.S(1)
t.S(0)
j=l.w
j.toString
l.aM(j,"fcTL",J.N(B.h.gF(t.c),0,t.a));++l.f}if(l.f<=1){j=l.w
j.toString
l.aM(j,"IDAT",n)}else{m=A.bb(!0,k)
m.aJ(l.f)
m.aP(n)
j=l.w
j.toString
l.aM(j,"fdAT",J.N(B.h.gF(m.c),0,m.a));++l.f}},
f6(){var t,s=this,r=s.w
if(r==null)return null
s.aM(r,"IEND",A.k([],u.t))
s.f=0
r=s.w
t=J.N(B.h.gF(r.c),0,r.a)
s.w=null
return t},
f2(a,b){var t,s,r,q,p,o=this,n=a.gah().length
if(n<=1){o.e=1
o.r=!1
o.b9(a)}else{n=a.gah().length
o.e=n
o.r=n>1
o.c=a.r
if(a.gaN()){t=new A.dV(new Int32Array(256))
t.eA(256)
t.eQ(a)
o.a=t
for(n=a.gah(),s=n.length,r=0;r<n.length;n.length===s||(0,A.D)(n),++r){q=n[r]
if(q!==a){t.d_(q)
t.cU()
t.cY()
t.cQ()}}}for(n=a.gah(),s=n.length,r=0;r<n.length;n.length===s||(0,A.D)(n),++r){q=n[r]
p=o.a
if(p!=null)o.b9(p.dN(q))
else o.b9(q)}}n=o.f6()
n.toString
return n},
dd(a){var t,s,r,q=this
if(a.gH()===B.l&&a.b===3&&a.a===256){t=q.w
t.toString
q.aM(t,"PLTE",J.N(a.gF(a),0,null))}else{t=a.a
s=A.bb(!0,t*3)
for(r=0;r<t;++r){s.S(B.a.h(a.bG(r)))
s.S(B.a.h(a.bF(r)))
s.S(B.a.h(a.bE(r)))}t=q.w
t.toString
q.aM(t,"PLTE",J.N(B.h.gF(s.c),0,s.a))}if(a.b===4){t=a.a
s=A.bb(!0,t)
for(r=0;r<t;++r)s.S(B.a.h(a.bD(r)))
t=q.w
t.toString
q.aM(t,"tRNS",J.N(B.h.gF(s.c),0,s.a))}},
aM(a,b,c){u.L.a(c)
a.aJ(c.length)
a.aP(new A.av(b))
a.aP(c)
a.aJ(A.ax(c,A.ax(new A.av(b),0)))},
ek(a,b,c){var t,s,r=this,q=b.gaN()?B.cX:r.b,p=b.gF(0),o=b.a.gaq(),n=b.gaN()?1:b.gap(),m=n*b.gad()+7>>>3,l=b.gad()+7>>>3,k=q.a,j=J.c6(p),i=0,h=0,g=null,f=0
for(;;){t=b.a
t=t==null?null:t.b
if(!(f<(t==null?0:t)))break
s=j.bx(p,h,o)
h+=o
switch(k){case 1:i=r.eo(s,l,m,c,i)
break
case 2:i=r.ep(s,g,l,c,i)
break
case 3:i=r.el(s,g,l,m,c,i)
break
case 4:i=r.en(s,g,l,m,c,i)
break
default:i=r.em(s,l,c,i)
break}++f
g=s}},
dc(a,b,c,d,e){var t,s,r,q;--a
for(t=b.length,s=d.$flags|0;a>=0;e=r){r=e+1
q=c+a
if(!(q<t))return A.a(b,q)
q=b[q]
s&2&&A.b(d)
if(!(e<d.length))return A.a(d,e)
d[e]=q;--a}return e},
em(a,b,c,d){var t,s,r,q,p=d+1
c.$flags&2&&A.b(c)
t=c.length
if(!(d<t))return A.a(c,d)
c[d]=0
s=a.length
if(b===1)for(d=p,r=0;r<s;++r,d=p){p=d+1
q=a[r]
if(!(d<t))return A.a(c,d)
c[d]=q}else for(d=p,r=0;r<s;r+=b)d=this.dc(b,a,r,c,d)
return d},
eo(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k=e+1
d.$flags&2&&A.b(d)
t=d.length
if(!(e<t))return A.a(d,e)
d[e]=1
for(e=k,s=0;s<c;s+=b)e=this.dc(b,a,s,d,e)
r=a.length
for(q=b-1,p=d.$flags|0,s=c;s<r;s+=b)for(o=q,n=0;n<b;++n,--o,e=k){k=e+1
m=s+o
if(!(m>=0&&m<r))return A.a(a,m)
l=a[m]
m-=c
if(!(m>=0))return A.a(a,m)
m=a[m]
p&2&&A.b(d)
if(!(e>=0&&e<t))return A.a(d,e)
d[e]=l-m&255}return e},
ep(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j=e+1
d.$flags&2&&A.b(d)
t=d.length
if(!(e<t))return A.a(d,e)
d[e]=2
s=a.length
for(r=c-1,q=d.$flags|0,p=b!=null,e=j,o=0;o<s;o+=c)for(n=r,m=0;m<c;++m,--n,e=j){if(p){l=o+n
if(!(l>=0&&l<b.length))return A.a(b,l)
k=b[l]}else k=0
j=e+1
l=o+n
if(!(l>=0&&l<s))return A.a(a,l)
l=a[l]
q&2&&A.b(d)
if(!(e>=0&&e<t))return A.a(d,e)
d[e]=l-k&255}return e},
el(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=f+1
e.$flags&2&&A.b(e)
t=e.length
if(!(f<t))return A.a(e,f)
e[f]=3
s=a.length
for(r=c-1,q=e.$flags|0,p=b==null,f=g,o=0;o<s;o+=c)for(n=r,m=0;m<c;++m,--n,f=g){l=o+n
if(l<d)k=0
else{j=l-d
if(!(j>=0&&j<s))return A.a(a,j)
k=a[j]}if(p)i=0
else{if(!(l>=0&&l<b.length))return A.a(b,l)
i=b[l]}if(!(l>=0&&l<s))return A.a(a,l)
h=a[l]
g=f+1
q&2&&A.b(e)
if(!(f>=0&&f<t))return A.a(e,f)
e[f]=h-(k+i>>>1)}return f},
eC(a,b,c){var t=a+b-c,s=t>a?t-a:a-t,r=t>b?t-b:b-t,q=t>c?t-c:c-t
if(s<=r&&s<=q)return a
else if(r<=q)return b
return c},
en(a,b,c,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2+1
a1.$flags&2&&A.b(a1)
t=a1.length
if(!(a2<t))return A.a(a1,a2)
a1[a2]=4
s=a.length
for(r=c-1,q=a1.$flags|0,p=b==null,a2=d,o=0;o<s;o+=c)for(n=r,m=0;m<c;++m,--n,a2=d){l=o+n
k=l<a0
if(k)j=0
else{i=l-a0
if(!(i>=0&&i<s))return A.a(a,i)
j=a[i]}if(p)h=0
else{if(!(l>=0&&l<b.length))return A.a(b,l)
h=b[l]}if(k||p)g=0
else{k=l-a0
if(!(k>=0&&k<b.length))return A.a(b,k)
g=b[k]}if(!(l>=0&&l<s))return A.a(a,l)
f=a[l]
e=this.eC(j,h,g)
d=a2+1
q&2&&A.b(a1)
if(!(a2>=0&&a2<t))return A.a(a1,a2)
a1[a2]=f-e&255}return a2}}
A.f5.prototype={
ae(){return"IccProfileCompression."+this.b}}
A.ci.prototype={
eV(){var t,s=this
if(s.b===B.a2)return s.c
t=B.ag.du(u.L.a(s.c),null)
s.c=t
s.b=B.a2
return t}}
A.f3.prototype={
ae(){return"FrameType."+this.b}}
A.b6.prototype={
gah(){var t=this.x
return t===$?this.x=A.k([],u.g):t},
e_(a,b,c){var t,s,r,q,p=this,o=a.b
if(o!=null)p.b=A.hC(o,u.N,u.I)
o=a.d
if(o!=null){t=u.N
p.d=A.hC(o,t,t)}B.c.L(p.gah(),p)
if(!b&&a.gah().length>1){s=a.gah().length
for(o=u.g,r=1;r<s;++r){q=a.x
if(q===$)q=a.x=A.k([],o)
if(!(r<q.length))return A.a(q,r)
p.b9(A.hs(q[r],!1,!1))}}},
e0(a,b,c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
B.c.L(d.gah(),d)
if(a8>4)throw A.f(A.aw("An Image can only have 1-4 channels."))
if(a8===1)a9=B.bc
else if(a8===2)a9=B.bb
else if(a8===3){if(a9!==B.ah&&a9!==B.a1)a9=B.ah}else if(a8===4)if(a9!==B.P&&a9!==B.O&&a9!==B.a0&&a9!==B.Q)a9=B.O
d.cX(b4,a5,a0,a1,a6,a8,b0,b1,!1)
t=d.a
if(t==null)return
s=J.bE(t.gF(t))
r=J.N(b,c,null)
if(a1===B.v)b2=B.a.Z(b4*a8/8)
else if(a1===B.w){t=B.a.Z(b4*a8/4)
b2=t}else{t=b4*a8
if(a1===B.x)t=B.a.Z(t/2)
else{q=B.cG.i(0,a1)
q.toString
q=t*q
t=q}b2=t}p=d.a.gaq()
o=Math.min(b2,p)
for(n=0,m=0,l=0;l<a5;++l,m+=b2,n+=p){k=r.BYTES_PER_ELEMENT
j=A.bp(m,m+o,B.b.ag(r.byteLength,k))
B.h.aR(s,n,n+o,J.N(B.h.gF(r),r.byteOffset+m*k,(j-m)*k))}if(a8===3&&a9===B.a1)for(t=d.a,t=t.gA(t);t.v();){i=t.gE()
h=i.gk()
i.sk(i.gm())
i.sm(h)}else{t=a8===4
if(t&&a9===B.a0)for(t=d.a,t=t.gA(t);t.v();){i=t.gE()
h=i.gk()
g=i.gp()
f=i.gm()
i.sk(i.gq())
i.sp(f)
i.sm(g)
i.sq(h)}else if(t&&a9===B.Q)for(t=d.a,t=t.gA(t);t.v();){i=t.gE()
h=i.gk()
g=i.gp()
f=i.gm()
i.sk(i.gq())
i.sp(h)
i.sm(g)
i.sq(f)}else if(t&&a9===B.P)for(t=d.a,t=t.gA(t);t.v();){i=t.gE()
h=i.gk()
g=i.gp()
f=i.gm()
e=i.gq()
i.sk(f)
i.sp(g)
i.sm(h)
i.sq(e)}}},
b9(a){var t=this
a.z=t.gah().length
if(t.gah().length===0||B.c.gct(t.gah())!==a)B.c.L(t.gah(),a)
return a},
cX(a,b,c,d,e,f,g,h,i){this.c=e
if(c!=null)this.e=A.hm(c)
this.e9(a,b,d,f,g)},
e9(a,b,c,d,e){var t,s,r=this,q=null
switch(c.a){case 0:if(e==null){t=B.a.Z(a*d/8)
s=new A.bK($,t,q,a,b,d)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}else{t=B.a.Z(a/8)
s=new A.bK($,t,e,a,b,1)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}break
case 1:if(e==null){t=B.a.Z(a*(d<<1>>>0)/8)
s=new A.bM($,t,q,a,b,d)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}else{t=B.a.Z(a/4)
s=new A.bM($,t,e,a,b,1)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}break
case 2:if(e==null){if(d===2)t=a
else if(d===4)t=a*2
else t=d===3?B.a.Z(a*1.5):B.a.Z(a/2)
s=new A.bN($,t,q,a,b,d)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}else{t=B.a.Z(a/2)
s=new A.bN($,t,e,a,b,1)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}break
case 3:if(e==null)r.a=A.iv(a,b,d)
else r.a=new A.bO(new Uint8Array(a*b),e,a,b,1)
break
case 4:t=a*b
if(e==null)r.a=new A.bL(new Uint16Array(t*d),q,a,b,d)
else r.a=new A.bL(new Uint16Array(t),e,a,b,1)
break
case 5:r.a=new A.cp(new Uint32Array(a*b*d),a,b,d)
break
case 6:r.a=new A.co(new Int8Array(a*b*d),a,b,d)
break
case 7:r.a=new A.cm(new Int16Array(a*b*d),a,b,d)
break
case 8:r.a=new A.cn(new Int32Array(a*b*d),a,b,d)
break
case 9:r.a=new A.cj(new Uint16Array(a*b*d),a,b,d)
break
case 10:r.a=new A.ck(new Float32Array(a*b*d),a,b,d)
break
case 11:r.a=new A.cl(new Float64Array(a*b*4*d),a,b,d)
break}},
D(a){var t=this
return"Image("+t.gac()+", "+t.ga8()+", "+t.gH().b+", "+t.gap()+")"},
gac(){var t=this.a
t=t==null?null:t.a
return t==null?0:t},
ga8(){var t=this.a
t=t==null?null:t.b
return t==null?0:t},
gH(){var t=this.a
t=t==null?null:t.gH()
return t==null?B.l:t},
gA(a){var t=this.a
return t.gA(t)},
gF(a){var t=this.a
t=t==null?null:t.gF(t)
if(t==null)t=B.h.gF(new Uint8Array(0))
return t},
gap(){var t=this.a
t=t==null?null:t.gV()
t=t==null?null:t.b
if(t==null){t=this.a
t=t==null?null:t.c}return t==null?0:t},
gaN(){var t=this.a
return(t==null?null:t.gV())!=null},
gad(){var t=this.a
t=t==null?null:t.gad()
return t==null?0:t},
dB(a,b){return a>=0&&b>=0&&a<this.gac()&&b<this.ga8()},
a1(a,b,c){var t=this.a
t=t==null?null:t.a1(a,b,c)
return t==null?new A.a7():t},
cB(a,b){return this.a1(a,b,null)},
dO(a,b){var t=!0
if(a<this.gac())t=b>=this.ga8()
if(t)return new A.a7()
return this.a1(a,b,null)},
dS(a,b,c){var t
if(c.gan().gV()!=null)if(this.gaN()){t=this.a
if(t!=null)t.av(a,b,c.gR(),0,0)
return}t=this.a
if(t!=null)t.aw(a,b,c.gk(),c.gp(),c.gm(),c.gq())},
bR(a8,a9,b0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=null
if(a9==null)a9=a6.gH()
if(b0==null)b0=a6.gap()
a8=B.aC.i(0,a9)
t=!1
if(a9===a6.gH())if(b0===a6.gap()){s=a6.a
t=(s==null?a7:s.gV())==null}if(t){r=A.hs(a6,!1,!1)
return r}for(t=a6.gah(),s=t.length,q=u.N,p=u.S,o=a7,n=0;n<t.length;t.length===s||(0,A.D)(t),++n,o=f){m=t[n]
l=m.a
k=l==null
j=k?a7:l.a
if(j==null)j=0
l=k?a7:l.b
if(l==null)l=0
k=m.e
k=k==null?a7:A.hm(k)
i=m.c
if(i==null)i=a7
else{h=i.a
g=i.b
i=i.c
i=new A.ci(h,g,new Uint8Array(i.subarray(0,A.eA(0,a7,i.length))))}h=m.w
r=A.hr(a7,k,a9,m.y,h,l,i,m.r,b0,a7,j,!1)
l=m.d
r.sfi(l!=null?A.hC(l,q,q):a7)
if(o!=null){o.b9(r)
f=o}else f=r
l=r.a
e=l==null?a7:l.gV()
l=r.a
l=l==null?a7:l.gV()
d=l==null?a7:l.gH()
if(d==null)d=a9
l=m.a
if(e!=null){c=A.ab(p,p)
b=l==null?a7:l.a1(0,0,a7)
if(b==null)b=new A.a7()
for(l=r.a,l=l.gA(l),a=a7,a0=0;l.v();){a1=l.gE()
a2=B.a.K(b.gW()*255)
a3=B.a.K(b.gT()*255)
a4=B.a.K(b.gU()*255)
a5=(B.b.u(a2,0,255)|B.b.u(a3,0,255)<<8|B.b.u(a4,0,255)<<16|B.b.u(0,0,255)<<24)>>>0
if(c.a6(a5)){k=c.i(0,a5)
k.toString
a1.sR(k)}else{c.n(0,a5,a0)
a1.sR(a0)
a=A.jj(b,a8,d,b0,a)
e.c1(a0,a.gk(),a.gp(),a.gm());++a0}b.v()}}else{b=l==null?a7:l.a1(0,0,a7)
if(b==null)b=new A.a7()
for(l=r.a,l=l.gA(l);l.v();){A.jj(b,a8,a7,a7,l.gE())
b.v()}}}o.toString
return o},
eY(a,b){return this.bR(null,a,b)},
eX(a,b){return this.bR(a,null,b)},
eW(a){return this.bR(null,a,null)},
dr(a){return this.bR(null,null,a)},
eR(a){var t,s,r,q
u.ck.a(a)
if(this.d==null){t=u.N
this.d=A.ab(t,t)}for(t=new A.P(a,a.r,a.e,A.j(a).l("P<1>"));t.v();){s=t.d
r=this.d
r.toString
q=a.i(0,s)
q.toString
r.n(0,s,q)}},
sfi(a){this.d=u.cZ.a(a)}}
A.O.prototype={
gV(){return null},
dM(a,b){var t,s,r,q,p,o,n,m=this
if(b==null)return J.bE(m.gF(m))
t=m.c
if(t===4){t=b===B.a0
if(t||b===B.Q||b===B.P){s=a?m:m.N()
if(t)for(t=s.gA(s);t.v();){r=t.gE()
q=r.gk()
p=r.gp()
o=r.gm()
r.sk(r.gq())
r.sp(o)
r.sm(p)
r.sq(q)}else if(b===B.Q)for(t=s.gA(s);t.v();){r=t.gE()
q=r.gk()
p=r.gp()
o=r.gm()
r.sk(r.gq())
r.sp(q)
r.sm(p)
r.sq(o)}else if(b===B.P)for(t=s.gA(s);t.v();){r=t.gE()
q=r.gk()
p=r.gp()
o=r.gm()
n=r.gq()
r.sk(o)
r.sp(p)
r.sm(q)
r.sq(n)}return J.bE(s.gF(s))}}else if(t===3)if(b===B.a1){s=a?m:m.N()
for(t=s.gA(s);t.v();){r=t.gE()
q=r.gk()
r.sk(r.gm())
r.sm(q)}return J.bE(s.gF(s))}return J.bE(m.gF(m))}}
A.cj.prototype={
a_(a){var t=this,s=t.d
if(a)s=new Uint16Array(s.length)
else s=new Uint16Array(A.E(s))
return new A.cj(s,t.a,t.b,t.c)},
N(){return this.a_(!1)},
gH(){return B.K},
gF(a){return B.B.gF(this.d)},
gad(){return 16},
gaq(){return this.a*this.c*2},
gA(a){return A.hF(this)},
au(a,b,c,d,e){return A.am(A.hF(this),b,c,d,e)},
gj(a){return this.d.byteLength},
gaG(){return!0},
a1(a,b,c){if(c==null||!(c instanceof A.bd)||c.d!==this)c=A.hF(this)
c.P(a,b)
return c},
av(a,b,c,d,e){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=A.H(c)
p.$flags&2&&A.b(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=A.H(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=A.H(e)
if(!(r<t))return A.a(p,r)
p[r]=o}}},
aw(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=A.H(c)
p.$flags&2&&A.b(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=A.H(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=A.H(e)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=A.H(f)
if(!(r<t))return A.a(p,r)
p[r]=o}}}},
D(a){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"}}
A.ck.prototype={
a_(a){var t=this,s=t.d
if(a)s=new Float32Array(s.length)
else s=new Float32Array(A.E(s))
return new A.ck(s,t.a,t.b,t.c)},
N(){return this.a_(!1)},
gH(){return B.F},
gF(a){return B.t.gF(this.d)},
gad(){return 32},
gA(a){return A.hG(this)},
au(a,b,c,d,e){return A.am(A.hG(this),b,c,d,e)},
gj(a){return this.d.byteLength},
gaq(){return this.a*this.c*4},
gaG(){return!0},
a1(a,b,c){if(c==null||!(c instanceof A.be)||c.d!==this)c=A.hG(this)
c.P(a,b)
return c},
av(a,b,c,d,e){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d
p.$flags&2&&A.b(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=c
if(r>1){s=q+1
if(!(s<t))return A.a(p,s)
p[s]=d
if(r>2){r=q+2
if(!(r<t))return A.a(p,r)
p[r]=e}}},
aw(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d
p.$flags&2&&A.b(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=c
if(r>1){s=q+1
if(!(s<t))return A.a(p,s)
p[s]=d
if(r>2){s=q+2
if(!(s<t))return A.a(p,s)
p[s]=e
if(r>3){r=q+3
if(!(r<t))return A.a(p,r)
p[r]=f}}}},
D(a){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"}}
A.cl.prototype={
a_(a){var t=this,s=t.d
if(a)s=new Float64Array(s.length)
else s=new Float64Array(A.E(s))
return new A.cl(s,t.a,t.b,t.c)},
N(){return this.a_(!1)},
gH(){return B.G},
gF(a){return B.cH.gF(this.d)},
gj(a){return this.d.byteLength},
gad(){return 64},
gA(a){return A.hH(this)},
au(a,b,c,d,e){return A.am(A.hH(this),b,c,d,e)},
gaq(){return this.a*this.c*8},
gaG(){return!0},
a1(a,b,c){if(c==null||!(c instanceof A.bf)||c.d!==this)c=A.hH(this)
c.P(a,b)
return c},
av(a,b,c,d,e){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d
p.$flags&2&&A.b(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=c
if(r>1){s=q+1
if(!(s<t))return A.a(p,s)
p[s]=d
if(r>2){r=q+2
if(!(r<t))return A.a(p,r)
p[r]=e}}},
aw(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d
p.$flags&2&&A.b(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=c
if(r>1){s=q+1
if(!(s<t))return A.a(p,s)
p[s]=d
if(r>2){s=q+2
if(!(s<t))return A.a(p,s)
p[s]=e
if(r>3){r=q+3
if(!(r<t))return A.a(p,r)
p[r]=f}}}},
D(a){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"}}
A.cm.prototype={
a_(a){var t=this,s=t.d
if(a)s=new Int16Array(s.length)
else s=new Int16Array(A.E(s))
return new A.cm(s,t.a,t.b,t.c)},
N(){return this.a_(!1)},
gH(){return B.I},
gF(a){return B.cI.gF(this.d)},
gA(a){return A.hI(this)},
au(a,b,c,d,e){return A.am(A.hI(this),b,c,d,e)},
gj(a){return this.d.byteLength},
gaG(){return!0},
gad(){return 16},
gaq(){return this.a*this.c*2},
a1(a,b,c){if(c==null||!(c instanceof A.bg)||c.d!==this)c=A.hI(this)
c.P(a,b)
return c},
av(a,b,c,d,e){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.a.h(c)
p.$flags&2&&A.b(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.h(e)
if(!(r<t))return A.a(p,r)
p[r]=o}}},
aw(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.a.h(c)
p.$flags&2&&A.b(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.a.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.a.h(e)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.a.h(f)
if(!(r<t))return A.a(p,r)
p[r]=o}}}},
D(a){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"}}
A.cn.prototype={
a_(a){var t=this,s=t.d
if(a)s=new Int32Array(s.length)
else s=new Int32Array(A.E(s))
return new A.cn(s,t.a,t.b,t.c)},
N(){return this.a_(!1)},
gH(){return B.J},
gF(a){return B.cJ.gF(this.d)},
gad(){return 32},
gaq(){return this.a*this.c*4},
gA(a){return A.hJ(this)},
au(a,b,c,d,e){return A.am(A.hJ(this),b,c,d,e)},
gj(a){return this.d.byteLength},
gaG(){return!0},
a1(a,b,c){if(c==null||!(c instanceof A.bh)||c.d!==this)c=A.hJ(this)
c.P(a,b)
return c},
av(a,b,c,d,e){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.a.h(c)
p.$flags&2&&A.b(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.h(e)
if(!(r<t))return A.a(p,r)
p[r]=o}}},
aw(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.a.h(c)
p.$flags&2&&A.b(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.a.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.a.h(e)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.a.h(f)
if(!(r<t))return A.a(p,r)
p[r]=o}}}},
D(a){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"}}
A.co.prototype={
a_(a){var t=this,s=t.d
if(a)s=new Int8Array(s.length)
else s=new Int8Array(A.E(s))
return new A.co(s,t.a,t.b,t.c)},
N(){return this.a_(!1)},
gH(){return B.H},
gF(a){return B.cK.gF(this.d)},
gaq(){return this.a*this.c},
gA(a){return A.hK(this)},
au(a,b,c,d,e){return A.am(A.hK(this),b,c,d,e)},
gj(a){return this.d.byteLength},
gaG(){return!0},
gad(){return 8},
a1(a,b,c){if(c==null||!(c instanceof A.bi)||c.d!==this)c=A.hK(this)
c.P(a,b)
return c},
av(a,b,c,d,e){var t,s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.a.h(c)
p.$flags&2&&A.b(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.h(e)
if(!(r<t))return A.a(p,r)
p[r]=o}}},
aw(a,b,c,d,e,f){var t,s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.a.h(c)
p.$flags&2&&A.b(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.a.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.a.h(e)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.a.h(f)
if(!(r<t))return A.a(p,r)
p[r]=o}}}},
D(a){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"}}
A.bK.prototype={
ft(a,b,c){var t=Math.max(this.e*b,1)
t=new Uint8Array(t)
this.d!==$&&A.aM()
this.d=t},
a_(a){var t,s=this,r=s.d
if(a){r===$&&A.c()
r=new Uint8Array(r.length)}else{r===$&&A.c()
r=new Uint8Array(A.E(r))}t=s.f
t=t==null?null:t.N()
return new A.bK(r,s.e,t,s.a,s.b,s.c)},
N(){return this.a_(!1)},
gH(){return B.v},
gj(a){var t=this.d
t===$&&A.c()
return t.byteLength},
gB(){var t=this.f
t=t==null?null:t.gB()
return t==null?1:t},
gaG(){return!1},
gF(a){var t=this.d
t===$&&A.c()
return B.h.gF(t)},
gad(){return 1},
gA(a){return A.e_(this)},
au(a,b,c,d,e){return A.am(A.e_(this),b,c,d,e)},
a1(a,b,c){if(c==null||!(c instanceof A.bj)||c.f!==this)c=A.e_(this)
c.P(a,b)
return c},
av(a,b,c,d,e){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.e_(s):t).P(a,b)
s.r.a9(c,d,e)},
aw(a,b,c,d,e,f){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.e_(s):t).P(a,b)
s.r.aa(c,d,e,f)},
D(a){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
gaq(){return this.e},
gV(){return this.f}}
A.bL.prototype={
a_(a){var t,s=this,r=s.d
if(a)r=new Uint16Array(r.length)
else r=new Uint16Array(A.E(r))
t=s.e
t=t==null?null:t.N()
return new A.bL(r,t,s.a,s.b,s.c)},
N(){return this.a_(!1)},
gH(){return B.r},
gF(a){return B.B.gF(this.d)},
gad(){return 16},
gB(){var t=this.e
t=t==null?null:t.gB()
return t==null?65535:t},
gaq(){return this.a*this.c*2},
gA(a){return A.hL(this)},
au(a,b,c,d,e){return A.am(A.hL(this),b,c,d,e)},
gj(a){return this.d.byteLength},
gaG(){return!0},
a1(a,b,c){if(c==null||!(c instanceof A.bk)||c.d!==this)c=A.hL(this)
c.P(a,b)
return c},
av(a,b,c,d,e){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.a.h(c)
p.$flags&2&&A.b(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.h(e)
if(!(r<t))return A.a(p,r)
p[r]=o}}},
aw(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.a.h(c)
p.$flags&2&&A.b(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.a.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.a.h(e)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.a.h(f)
if(!(r<t))return A.a(p,r)
p[r]=o}}}},
D(a){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
gV(){return this.e}}
A.bM.prototype={
fu(a,b,c){var t=Math.max(this.e*b,1)
t=new Uint8Array(t)
this.d!==$&&A.aM()
this.d=t},
a_(a){var t,s=this,r=s.d
if(a){r===$&&A.c()
r=new Uint8Array(r.length)}else{r===$&&A.c()
r=new Uint8Array(A.E(r))}t=s.f
t=t==null?null:t.N()
return new A.bM(r,s.e,t,s.a,s.b,s.c)},
N(){return this.a_(!1)},
gH(){return B.w},
gad(){return 2},
gF(a){var t=this.d
t===$&&A.c()
return B.h.gF(t)},
gA(a){return A.e0(this)},
au(a,b,c,d,e){return A.am(A.e0(this),b,c,d,e)},
gj(a){var t=this.d
t===$&&A.c()
return t.byteLength},
gB(){var t=this.f
t=t==null?null:t.gB()
return t==null?3:t},
gaG(){return!1},
a1(a,b,c){if(c==null||!(c instanceof A.bl)||c.f!==this)c=A.e0(this)
c.P(a,b)
return c},
av(a,b,c,d,e){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.e0(s):t).P(a,b)
s.r.a9(c,d,e)},
aw(a,b,c,d,e,f){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.e0(s):t).P(a,b)
s.r.aa(c,d,e,f)},
D(a){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
gaq(){return this.e},
gV(){return this.f}}
A.cp.prototype={
a_(a){var t=this,s=t.d
if(a)s=new Uint32Array(s.length)
else s=new Uint32Array(A.E(s))
return new A.cp(s,t.a,t.b,t.c)},
N(){return this.a_(!1)},
gH(){return B.z},
gF(a){return B.a7.gF(this.d)},
gaq(){return this.a*this.c*4},
gad(){return 32},
gA(a){return A.hM(this)},
au(a,b,c,d,e){return A.am(A.hM(this),b,c,d,e)},
gj(a){return this.d.byteLength},
gaG(){return!0},
a1(a,b,c){if(c==null||!(c instanceof A.bm)||c.d!==this)c=A.hM(this)
c.P(a,b)
return c},
av(a,b,c,d,e){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.a.h(c)
p.$flags&2&&A.b(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.h(e)
if(!(r<t))return A.a(p,r)
p[r]=o}}},
aw(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.a.h(c)
p.$flags&2&&A.b(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.a.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.a.h(e)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.a.h(f)
if(!(r<t))return A.a(p,r)
p[r]=o}}}},
D(a){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"}}
A.bN.prototype={
fv(a,b,c){var t=Math.max(this.e*b,1)
t=new Uint8Array(t)
this.d!==$&&A.aM()
this.d=t},
a_(a){var t,s=this,r=s.d
if(a){r===$&&A.c()
r=new Uint8Array(r.length)}else{r===$&&A.c()
r=new Uint8Array(A.E(r))}t=s.f
t=t==null?null:t.N()
return new A.bN(r,s.e,t,s.a,s.b,s.c)},
N(){return this.a_(!1)},
gH(){return B.x},
gF(a){var t=this.d
t===$&&A.c()
return B.h.gF(t)},
gA(a){return A.e1(this)},
au(a,b,c,d,e){return A.am(A.e1(this),b,c,d,e)},
gj(a){var t=this.d
t===$&&A.c()
return t.byteLength},
gB(){var t=this.f
t=t==null?null:t.gB()
return t==null?15:t},
gaG(){return!1},
gad(){return 4},
a1(a,b,c){if(c==null||!(c instanceof A.bn)||c.e!==this)c=A.e1(this)
c.P(a,b)
return c},
av(a,b,c,d,e){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.e1(s):t).P(a,b)
s.r.a9(c,d,e)},
aw(a,b,c,d,e,f){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.e1(s):t).P(a,b)
s.r.aa(c,d,e,f)},
D(a){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
gaq(){return this.e},
gV(){return this.f}}
A.bO.prototype={
a_(a){var t,s=this,r=s.d
if(a)r=new Uint8Array(r.length)
else r=new Uint8Array(A.E(r))
t=s.e
t=t==null?null:t.N()
return new A.bO(r,t,s.a,s.b,s.c)},
N(){return this.a_(!1)},
gH(){return B.l},
gF(a){return B.h.gF(this.d)},
gaq(){return this.a*this.c},
gad(){return 8},
gA(a){return A.hN(this)},
au(a,b,c,d,e){return A.am(A.hN(this),b,c,d,e)},
gj(a){return this.d.byteLength},
gB(){var t=this.e
t=t==null?null:t.gB()
return t==null?255:t},
gaG(){return!1},
a1(a,b,c){if(c==null||!(c instanceof A.bo)||c.d!==this)c=A.hN(this)
c.P(a,b)
return c},
av(a,b,c,d,e){var t,s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.a.h(c)
p.$flags&2&&A.b(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.b.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=B.b.h(e)
if(!(r<t))return A.a(p,r)
p[r]=o}}},
aw(a,b,c,d,e,f){var t,s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.a.h(c)
p.$flags&2&&A.b(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=B.a.h(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=B.a.h(e)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=B.a.h(f)
if(!(r<t))return A.a(p,r)
p[r]=o}}}},
D(a){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
gV(){return this.e}}
A.cH.prototype={}
A.cI.prototype={
N(){return new A.cI(new Uint32Array(A.E(this.c)),this.a,this.b)},
gF(a){return B.a7.gF(this.c)},
gH(){return B.z},
gB(){return 4294967295},
c1(a,b,c,d){var t,s,r,q,p=this.b
a*=p
t=this.c
s=B.a.h(b)
t.$flags&2&&A.b(t)
r=t.length
if(!(a<r))return A.a(t,a)
t[a]=s
if(p>1){s=a+1
q=B.a.h(c)
if(!(s<r))return A.a(t,s)
t[s]=q
if(p>2){p=a+2
s=B.a.h(d)
if(!(p<r))return A.a(t,p)
t[p]=s}}},
bk(a,b){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
bG(a){var t
a*=this.b
t=this.c
if(!(a<t.length))return A.a(t,a)
return t[a]},
bF(a){var t,s=this.b
if(s<2)return 0
t=this.c
s=a*s+1
if(!(s<t.length))return A.a(t,s)
return t[s]},
bE(a){var t,s=this.b
if(s<3)return 0
t=this.c
s=a*s+2
if(!(s<t.length))return A.a(t,s)
return t[s]},
bD(a){var t,s=this.b
if(s<4)return 0
t=this.c
s=a*s+3
if(!(s<t.length))return A.a(t,s)
return t[s]}}
A.bc.prototype={
N(){return new A.bc(new Uint8Array(A.E(this.c)),this.a,this.b)},
gF(a){return B.h.gF(this.c)},
gH(){return B.l},
gB(){return 255},
c1(a,b,c,d){var t,s,r,q,p=this.b
a*=p
t=this.c
s=B.a.h(b)
t.$flags&2&&A.b(t)
r=t.length
if(!(a<r))return A.a(t,a)
t[a]=s
if(p>1){s=a+1
q=B.a.h(c)
if(!(s<r))return A.a(t,s)
t[s]=q
if(p>2){p=a+2
s=B.a.h(d)
if(!(p<r))return A.a(t,p)
t[p]=s}}},
cF(a,b,c,d,e){var t,s,r,q,p=this.b
a*=p
t=this.c
s=B.b.h(b)
t.$flags&2&&A.b(t)
r=t.length
if(!(a<r))return A.a(t,a)
t[a]=s
if(p>1){s=a+1
q=B.b.h(c)
if(!(s<r))return A.a(t,s)
t[s]=q
if(p>2){s=a+2
q=B.b.h(d)
if(!(s<r))return A.a(t,s)
t[s]=q
if(p>3){p=a+3
s=B.b.h(e)
if(!(p<r))return A.a(t,p)
t[p]=s}}}},
bk(a,b){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
bG(a){var t
a*=this.b
t=this.c
if(a>=t.length)return 0
return t[a]},
bF(a){var t,s,r=this.b
if(r<2)return 0
a*=r
r=this.c
t=r.length
if(a>=t)return 0
s=a+1
if(!(s<t))return A.a(r,s)
return r[s]},
bE(a){var t,s,r=this.b
if(r<3)return 0
a*=r
r=this.c
t=r.length
if(a>=t)return 0
s=a+2
if(!(s<t))return A.a(r,s)
return r[s]},
bD(a){var t,s,r=this.b
if(r<4)return 255
a*=r
r=this.c
t=r.length
if(a>=t)return 0
s=a+3
if(!(s<t))return A.a(r,s)
return r[s]}}
A.bd.prototype={
N(){var t=this
return new A.bd(t.a,t.b,t.c,t.d)},
gH(){return B.K},
gj(a){return this.d.c},
gV(){return null},
gB(){return 1},
gar(){return this.a},
gaj(){return this.b},
P(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gE(){return this},
v(){var t,s=this,r=s.d
if(++s.a===r.a){s.a=0
if(++s.b===r.b)return!1}t=s.c+r.c
s.c=t
return t<r.d.length},
i(a,b){var t,s=this.d
if(b<s.c){s=s.d
t=this.c+b
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=$.aa
s=s!=null?s:A.aC()
if(!(t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
n(a,b,c){var t,s,r=this.d
if(b<r.c){r=r.d
t=this.c+b
s=A.H(c)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gR(){return this.gk()},
sR(a){this.sk(a)},
gk(){var t,s=this.d
if(s.c>0){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=$.aa
s=s!=null?s:A.aC()
if(!(t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sk(a){var t,s,r=this.d
if(r.c>0){r=r.d
t=this.c
s=A.H(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gp(){var t,s=this.d
if(s.c>1){s=s.d
t=this.c+1
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=$.aa
s=s!=null?s:A.aC()
if(!(t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sp(a){var t,s,r=this.d
if(r.c>1){r=r.d
t=this.c+1
s=A.H(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gm(){var t,s=this.d
if(s.c>2){s=s.d
t=this.c+2
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=$.aa
s=s!=null?s:A.aC()
if(!(t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sm(a){var t,s,r=this.d
if(r.c>2){r=r.d
t=this.c+2
s=A.H(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gq(){var t,s=this.d
if(s.c>3){s=s.d
t=this.c+3
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=$.aa
s=s!=null?s:A.aC()
if(!(t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=1
return s},
sq(a){var t,s,r=this.d
if(r.c>3){r=r.d
t=this.c+3
s=A.H(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gW(){return this.gk()/1},
sW(a){this.sk(a)},
gT(){return this.gp()/1},
sT(a){this.sp(a)},
gU(){return this.gm()/1},
sU(a){this.sm(a)},
gX(){return this.gq()/1},
sX(a){this.sq(a)},
gao(){return A.aq(this)},
Y(a){var t=this
if(t.d.c>0){t.sk(a.gk())
t.sp(a.gp())
t.sm(a.gm())
t.sq(a.gq())}},
a9(a,b,c){var t,s,r,q=this,p=q.d,o=p.c
if(o>0){p=p.d
t=q.c
s=A.H(a)
p.$flags&2&&A.b(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){t=q.c+1
s=A.H(b)
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>2){o=q.c+2
t=A.H(c)
if(!(o>=0&&o<r))return A.a(p,o)
p[o]=t}}}},
aa(a,b,c,d){var t,s,r,q=this,p=q.d,o=p.c
if(o>0){p=p.d
t=q.c
s=A.H(a)
p.$flags&2&&A.b(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){t=q.c+1
s=A.H(b)
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>2){t=q.c+2
s=A.H(c)
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>3){o=q.c+3
t=A.H(d)
if(!(o>=0&&o<r))return A.a(p,o)
p[o]=t}}}}},
gA(a){return new A.B(this)},
O(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.bd){t=A.n(o,A.j(o).l("d.E"))
t=A.o(t)
s=A.n(b,A.j(b).l("d.E"))
return t===A.o(s)}if(u.L.b(b)){t=J.K(b)
s=o.d
r=s.c
if(t.gj(b)!==r)return!1
s=s.d
q=o.c
p=s.length
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.i(b,0))return!1
if(r>1){q=o.c+1
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.i(b,1))return!1
if(r>2){q=o.c+2
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.i(b,2))return!1
if(r>3){r=o.c+3
if(!(r>=0&&r<p))return A.a(s,r)
if(s[r]!==t.i(b,3))return!1}}}return!0}return!1},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$iq:1,
$ip:1,
$im:1,
gan(){return this.d}}
A.be.prototype={
N(){var t=this
return new A.be(t.a,t.b,t.c,t.d)},
gj(a){return this.d.c},
gV(){return null},
gB(){return 1},
gH(){return B.F},
gar(){return this.a},
gaj(){return this.b},
P(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gE(){return this},
v(){var t,s=this,r=s.d
if(++s.a===r.a){s.a=0
if(++s.b===r.b)return!1}t=s.c+r.c
s.c=t
return t<r.d.length},
i(a,b){var t,s=this.d
if(b<s.c){s=s.d
t=this.c+b
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
n(a,b,c){var t,s=this.d
if(b<s.c){s=s.d
t=this.c+b
s.$flags&2&&A.b(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=c}},
gR(){return this.gk()},
sR(a){this.sk(a)},
gk(){var t,s=this.d
if(s.c>0){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sk(a){var t,s=this.d
if(s.c>0){s=s.d
t=this.c
s.$flags&2&&A.b(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=a}},
gp(){var t,s=this.d
if(s.c>1){s=s.d
t=this.c+1
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sp(a){var t,s=this.d
if(s.c>1){s=s.d
t=this.c+1
s.$flags&2&&A.b(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=a}},
gm(){var t,s=this.d
if(s.c>2){s=s.d
t=this.c+2
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sm(a){var t,s=this.d
if(s.c>2){s=s.d
t=this.c+2
s.$flags&2&&A.b(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=a}},
gq(){var t,s=this.d
if(s.c>3){s=s.d
t=this.c+3
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=1
return s},
sq(a){var t,s=this.d
if(s.c>3){s=s.d
t=this.c+3
s.$flags&2&&A.b(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=a}},
gW(){return this.gk()/1},
sW(a){this.sk(a)},
gT(){return this.gp()/1},
sT(a){this.sp(a)},
gU(){return this.gm()/1},
sU(a){this.sm(a)},
gX(){return this.gq()/1},
sX(a){this.sq(a)},
gao(){return A.aq(this)},
Y(a){var t=this
t.sk(a.gk())
t.sp(a.gp())
t.sm(a.gm())
t.sq(a.gq())},
a9(a,b,c){var t,s,r=this.d,q=r.d,p=this.c
q.$flags&2&&A.b(q)
t=q.length
if(!(p>=0&&p<t))return A.a(q,p)
q[p]=a
r=r.c
if(r>1){s=p+1
if(!(s<t))return A.a(q,s)
q[s]=b
if(r>2){r=p+2
if(!(r<t))return A.a(q,r)
q[r]=c}}},
aa(a,b,c,d){var t,s,r=this.d,q=r.d,p=this.c
q.$flags&2&&A.b(q)
t=q.length
if(!(p>=0&&p<t))return A.a(q,p)
q[p]=a
r=r.c
if(r>1){s=p+1
if(!(s<t))return A.a(q,s)
q[s]=b
if(r>2){s=p+2
if(!(s<t))return A.a(q,s)
q[s]=c
if(r>3){r=p+3
if(!(r<t))return A.a(q,r)
q[r]=d}}}},
gA(a){return new A.B(this)},
O(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.be){t=A.n(o,A.j(o).l("d.E"))
t=A.o(t)
s=A.n(b,A.j(b).l("d.E"))
return t===A.o(s)}if(u.L.b(b)){t=J.K(b)
s=o.d
r=s.c
if(t.gj(b)!==r)return!1
s=s.d
q=o.c
p=s.length
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.i(b,0))return!1
if(r>1){q=o.c+1
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.i(b,1))return!1
if(r>2){q=o.c+2
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.i(b,2))return!1
if(r>3){r=o.c+3
if(!(r>=0&&r<p))return A.a(s,r)
if(s[r]!==t.i(b,3))return!1}}}return!0}return!1},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$iq:1,
$ip:1,
$im:1,
gan(){return this.d}}
A.bf.prototype={
N(){var t=this
return new A.bf(t.a,t.b,t.c,t.d)},
gj(a){return this.d.c},
gV(){return null},
gB(){return 1},
gH(){return B.G},
gar(){return this.a},
gaj(){return this.b},
P(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gE(){return this},
v(){var t,s=this,r=s.d
if(++s.a===r.a){s.a=0
if(++s.b===r.b)return!1}t=s.c+r.c
s.c=t
return t<r.d.length},
i(a,b){var t,s=this.d
if(b<s.c){s=s.d
t=this.c+b
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
n(a,b,c){var t,s=this.d
if(b<s.c){s=s.d
t=this.c+b
s.$flags&2&&A.b(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=c}},
gR(){return this.gk()},
sR(a){this.sk(a)},
gk(){var t,s=this.d
if(s.c>0){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sk(a){var t,s=this.d
if(s.c>0){s=s.d
t=this.c
s.$flags&2&&A.b(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=a}},
gp(){var t,s=this.d
if(s.c>1){s=s.d
t=this.c+1
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sp(a){var t,s=this.d
if(s.c>1){s=s.d
t=this.c+1
s.$flags&2&&A.b(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=a}},
gm(){var t,s=this.d
if(s.c>2){s=s.d
t=this.c+2
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sm(a){var t,s=this.d
if(s.c>2){s=s.d
t=this.c+2
s.$flags&2&&A.b(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=a}},
gq(){var t,s=this.d
if(s.c>3){s=s.d
t=this.c+3
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=1
return s},
sq(a){var t,s=this.d
if(s.c>3){s=s.d
t=this.c+3
s.$flags&2&&A.b(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=a}},
gW(){return this.gk()/1},
sW(a){this.sk(a)},
gT(){return this.gp()/1},
sT(a){this.sp(a)},
gU(){return this.gm()/1},
sU(a){this.sm(a)},
gX(){return this.gq()/1},
sX(a){this.sq(a)},
gao(){return A.aq(this)},
Y(a){var t=this
t.sk(a.gk())
t.sp(a.gp())
t.sm(a.gm())
t.sq(a.gq())},
a9(a,b,c){var t,s,r=this.d,q=r.d,p=this.c
q.$flags&2&&A.b(q)
t=q.length
if(!(p>=0&&p<t))return A.a(q,p)
q[p]=a
r=r.c
if(r>1){s=p+1
if(!(s<t))return A.a(q,s)
q[s]=b
if(r>2){r=p+2
if(!(r<t))return A.a(q,r)
q[r]=c}}},
aa(a,b,c,d){var t,s,r=this.d,q=r.d,p=this.c
q.$flags&2&&A.b(q)
t=q.length
if(!(p>=0&&p<t))return A.a(q,p)
q[p]=a
r=r.c
if(r>1){s=p+1
if(!(s<t))return A.a(q,s)
q[s]=b
if(r>2){s=p+2
if(!(s<t))return A.a(q,s)
q[s]=c
if(r>3){r=p+3
if(!(r<t))return A.a(q,r)
q[r]=d}}}},
gA(a){return new A.B(this)},
O(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.bf){t=A.n(o,A.j(o).l("d.E"))
t=A.o(t)
s=A.n(b,A.j(b).l("d.E"))
return t===A.o(s)}if(u.L.b(b)){t=J.K(b)
s=o.d
r=s.c
if(t.gj(b)!==r)return!1
s=s.d
q=o.c
p=s.length
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.i(b,0))return!1
if(r>1){q=o.c+1
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.i(b,1))return!1
if(r>2){q=o.c+2
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.i(b,2))return!1
if(r>3){r=o.c+3
if(!(r>=0&&r<p))return A.a(s,r)
if(s[r]!==t.i(b,3))return!1}}}return!0}return!1},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$iq:1,
$ip:1,
$im:1,
gan(){return this.d}}
A.bg.prototype={
N(){var t=this
return new A.bg(t.a,t.b,t.c,t.d)},
gj(a){return this.d.c},
gV(){return null},
gB(){return 32767},
gH(){return B.I},
gar(){return this.a},
gaj(){return this.b},
P(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gE(){return this},
v(){var t,s=this,r=s.d
if(++s.a===r.a){s.a=0
if(++s.b===r.b)return!1}t=s.c+r.c
s.c=t
return t<r.d.length},
i(a,b){var t,s=this.d
if(b<s.c){s=s.d
t=this.c+b
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
n(a,b,c){var t,s,r=this.d
if(b<r.c){r=r.d
t=this.c+b
s=B.a.h(c)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gR(){return this.gk()},
sR(a){this.sk(a)},
gk(){var t,s=this.d
if(s.c>0){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sk(a){var t,s,r=this.d
if(r.c>0){r=r.d
t=this.c
s=B.a.h(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gp(){var t,s=this.d
if(s.c>1){s=s.d
t=this.c+1
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sp(a){var t,s,r=this.d
if(r.c>1){r=r.d
t=this.c+1
s=B.a.h(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gm(){var t,s=this.d
if(s.c>2){s=s.d
t=this.c+2
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sm(a){var t,s,r=this.d
if(r.c>2){r=r.d
t=this.c+2
s=B.a.h(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gq(){var t,s=this.d
if(s.c>3){s=s.d
t=this.c+3
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=32767
return s},
sq(a){var t,s,r=this.d
if(r.c>3){r=r.d
t=this.c+3
s=B.a.h(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gW(){return this.gk()/32767},
sW(a){this.sk(a*32767)},
gT(){return this.gp()/32767},
sT(a){this.sp(a*32767)},
gU(){return this.gm()/32767},
sU(a){this.sm(a*32767)},
gX(){return this.gq()/32767},
sX(a){this.sq(a*32767)},
gao(){return A.aq(this)},
Y(a){var t=this
t.sk(a.gk())
t.sp(a.gp())
t.sm(a.gm())
t.sq(a.gq())},
a9(a,b,c){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.b.h(a)
p.$flags&2&&A.b(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.b.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){o=t+2
t=B.b.h(c)
if(!(o<r))return A.a(p,o)
p[o]=t}}}},
aa(a,b,c,d){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.b.h(a)
p.$flags&2&&A.b(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.b.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){s=t+2
q=B.b.h(c)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>3){o=t+3
t=B.b.h(d)
if(!(o<r))return A.a(p,o)
p[o]=t}}}}},
gA(a){return new A.B(this)},
O(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.bg){t=A.n(o,A.j(o).l("d.E"))
t=A.o(t)
s=A.n(b,A.j(b).l("d.E"))
return t===A.o(s)}if(u.L.b(b)){t=J.K(b)
s=o.d
r=s.c
if(t.gj(b)!==r)return!1
s=s.d
q=o.c
p=s.length
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.i(b,0))return!1
if(r>1){q=o.c+1
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.i(b,1))return!1
if(r>2){q=o.c+2
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.i(b,2))return!1
if(r>3){r=o.c+3
if(!(r>=0&&r<p))return A.a(s,r)
if(s[r]!==t.i(b,3))return!1}}}return!0}return!1},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$iq:1,
$ip:1,
$im:1,
gan(){return this.d}}
A.bh.prototype={
N(){var t=this
return new A.bh(t.a,t.b,t.c,t.d)},
gj(a){return this.d.c},
gV(){return null},
gB(){return 2147483647},
gH(){return B.J},
gar(){return this.a},
gaj(){return this.b},
P(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gE(){return this},
v(){var t,s=this,r=s.d
if(++s.a===r.a){s.a=0
if(++s.b===r.b)return!1}t=s.c+r.c
s.c=t
return t<r.d.length},
i(a,b){var t,s=this.d
if(b<s.c){s=s.d
t=this.c+b
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
n(a,b,c){var t,s,r=this.d
if(b<r.c){r=r.d
t=this.c+b
s=B.a.h(c)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gR(){return this.gk()},
sR(a){this.sk(a)},
gk(){var t,s=this.d
if(s.c>0){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sk(a){var t,s,r=this.d
if(r.c>0){r=r.d
t=this.c
s=B.a.h(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gp(){var t,s=this.d
if(s.c>1){s=s.d
t=this.c+1
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sp(a){var t,s,r=this.d
if(r.c>1){r=r.d
t=this.c+1
s=B.a.h(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gm(){var t,s=this.d
if(s.c>2){s=s.d
t=this.c+2
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sm(a){var t,s,r=this.d
if(r.c>2){r=r.d
t=this.c+2
s=B.a.h(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gq(){var t,s=this.d
if(s.c>3){s=s.d
t=this.c+3
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=2147483647
return s},
sq(a){var t,s,r=this.d
if(r.c>3){r=r.d
t=this.c+3
s=B.a.h(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gW(){return this.gk()/2147483647},
sW(a){this.sk(a*2147483647)},
gT(){return this.gp()/2147483647},
sT(a){this.sp(a*2147483647)},
gU(){return this.gm()/2147483647},
sU(a){this.sm(a*2147483647)},
gX(){return this.gq()/2147483647},
sX(a){this.sq(a*2147483647)},
gao(){return A.aq(this)},
Y(a){var t=this
t.sk(a.gk())
t.sp(a.gp())
t.sm(a.gm())
t.sq(a.gq())},
a9(a,b,c){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.b.h(a)
p.$flags&2&&A.b(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.b.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){o=t+2
t=B.b.h(c)
if(!(o<r))return A.a(p,o)
p[o]=t}}}},
aa(a,b,c,d){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.b.h(a)
p.$flags&2&&A.b(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.b.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){s=t+2
q=B.b.h(c)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>3){o=t+3
t=B.b.h(d)
if(!(o<r))return A.a(p,o)
p[o]=t}}}}},
gA(a){return new A.B(this)},
O(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.bh){t=A.n(o,A.j(o).l("d.E"))
t=A.o(t)
s=A.n(b,A.j(b).l("d.E"))
return t===A.o(s)}if(u.L.b(b)){t=J.K(b)
s=o.d
r=s.c
if(t.gj(b)!==r)return!1
s=s.d
q=o.c
p=s.length
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.i(b,0))return!1
if(r>1){q=o.c+1
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.i(b,1))return!1
if(r>2){q=o.c+2
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.i(b,2))return!1
if(r>3){r=o.c+3
if(!(r>=0&&r<p))return A.a(s,r)
if(s[r]!==t.i(b,3))return!1}}}return!0}return!1},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$iq:1,
$ip:1,
$im:1,
gan(){return this.d}}
A.bi.prototype={
N(){var t=this
return new A.bi(t.a,t.b,t.c,t.d)},
gj(a){return this.d.c},
gV(){return null},
gB(){return 127},
gH(){return B.H},
gar(){return this.a},
gaj(){return this.b},
P(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gE(){return this},
v(){var t,s=this,r=s.d
if(++s.a===r.a){s.a=0
if(++s.b===r.b)return!1}t=s.c+r.c
s.c=t
return t<r.d.length},
i(a,b){var t,s=this.d
if(b<s.c){s=s.d
t=this.c+b
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
n(a,b,c){var t,s,r=this.d
if(b<r.c){r=r.d
t=this.c+b
s=B.a.h(c)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gR(){return this.gk()},
sR(a){this.sk(a)},
gk(){var t,s=this.d
if(s.c>0){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sk(a){var t,s,r=this.d
if(r.c>0){r=r.d
t=this.c
s=B.a.h(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gp(){var t,s=this.d
if(s.c>1){s=s.d
t=this.c+1
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sp(a){var t,s,r=this.d
if(r.c>1){r=r.d
t=this.c+1
s=B.a.h(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gm(){var t,s=this.d
if(s.c>2){s=s.d
t=this.c+2
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sm(a){var t,s,r=this.d
if(r.c>2){r=r.d
t=this.c+2
s=B.a.h(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gq(){var t,s=this.d
if(s.c>3){s=s.d
t=this.c+3
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=127
return s},
sq(a){var t,s,r=this.d
if(r.c>3){r=r.d
t=this.c+3
s=B.a.h(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gW(){return this.gk()/127},
sW(a){this.sk(a*127)},
gT(){return this.gp()/127},
sT(a){this.sp(a*127)},
gU(){return this.gm()/127},
sU(a){this.sm(a*127)},
gX(){return this.gq()/127},
sX(a){this.sq(a*127)},
gao(){return A.aq(this)},
Y(a){var t=this
t.sk(a.gk())
t.sp(a.gp())
t.sm(a.gm())
t.sq(a.gq())},
a9(a,b,c){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.b.h(a)
p.$flags&2&&A.b(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.b.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){o=t+2
t=B.b.h(c)
if(!(o<r))return A.a(p,o)
p[o]=t}}}},
aa(a,b,c,d){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.b.h(a)
p.$flags&2&&A.b(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.b.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){s=t+2
q=B.b.h(c)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>3){o=t+3
t=B.b.h(d)
if(!(o<r))return A.a(p,o)
p[o]=t}}}}},
gA(a){return new A.B(this)},
O(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.bi){t=A.n(o,A.j(o).l("d.E"))
t=A.o(t)
s=A.n(b,A.j(b).l("d.E"))
return t===A.o(s)}if(u.L.b(b)){t=J.K(b)
s=o.d
r=s.c
if(t.gj(b)!==r)return!1
s=s.d
q=o.c
p=s.length
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.i(b,0))return!1
if(r>1){q=o.c+1
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.i(b,1))return!1
if(r>2){q=o.c+2
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.i(b,2))return!1
if(r>3){r=o.c+3
if(!(r>=0&&r<p))return A.a(s,r)
if(s[r]!==t.i(b,3))return!1}}}return!0}return!1},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$iq:1,
$ip:1,
$im:1,
gan(){return this.d}}
A.dZ.prototype={
v(){var t=this,s=t.a
if(s.gar()+1>t.d){s.P(t.b,s.gaj()+1)
return s.gaj()<=t.e}return s.v()},
gE(){return this.a},
$iq:1}
A.bj.prototype={
N(){var t=this
return new A.bj(t.a,t.b,t.c,t.d,t.e,t.f)},
gj(a){var t=this.f,s=t.f
s=s==null?null:s.b
return s==null?t.c:s},
gV(){return this.f.f},
gB(){var t=this.f.f
t=t==null?null:t.gB()
return t==null?1:t},
gH(){return B.v},
gar(){return this.a},
gaj(){return this.b},
P(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.f
s=b*t.e
r.e=s
t=a*t.c
r.c=s+B.b.I(t,3)
r.d=t&7},
gE(){return this},
v(){var t,s=this,r=++s.a,q=s.f
if(r===q.a){s.a=0
r=++s.b
s.d=0;++s.c
s.e=s.e+q.e
return r<q.b}t=q.c
if(q.f!=null||t===1){if(++s.d>7){s.d=0;++s.c}}else{r*=t
s.d=r&7
s.c=s.e+B.b.I(r,3)}r=s.c
q=q.d
q===$&&A.c()
return r<q.byteLength},
cf(a){var t,s,r=this.c,q=7-(this.d+a)
if(q<0){q+=8;++r}t=this.f.d
t===$&&A.c()
s=t.length
if(r>=s)return 0
if(!(r>=0))return A.a(t,r)
return B.b.b1(t[r],q)&1},
aA(a){var t=this.f,s=t.f
if(s==null)t=t.c>a?this.cf(a):0
else t=s.bk(this.cf(0),a)
return t},
a3(a,b){var t,s,r,q,p,o,n=this.f
if(a>=n.c)return
t=this.c
s=7-(this.d+a)
if(s<0){++t
s+=8}r=n.d
r===$&&A.c()
if(!(t>=0&&t<r.length))return A.a(r,t)
q=r[t]
p=B.b.u(B.a.h(b),0,1)
if(!(s>=0&&s<8))return A.a(B.ar,s)
o=B.ar[s]
r=B.b.a2(p,s)
n=n.d
n.$flags&2&&A.b(n)
if(!(t<n.length))return A.a(n,t)
n[t]=(q&o|r)>>>0},
i(a,b){return this.aA(b)},
n(a,b,c){return this.a3(b,c)},
gR(){return this.cf(0)},
sR(a){this.a3(0,a)},
gk(){return this.aA(0)},
sk(a){this.a3(0,a)},
gp(){return this.aA(1)},
sp(a){this.a3(1,a)},
gm(){return this.aA(2)},
sm(a){this.a3(2,a)},
gq(){var t=this.f
return t.f==null&&t.c<4?t.gB():this.aA(3)},
sq(a){this.a3(3,a)},
gW(){return this.aA(0)/this.f.gB()},
sW(a){this.a3(0,a*this.f.gB())},
gT(){return this.aA(1)/this.f.gB()},
sT(a){this.a3(1,a*this.f.gB())},
gU(){return this.aA(2)/this.f.gB()},
sU(a){this.a3(2,a*this.f.gB())},
gX(){return this.gq()/this.f.gB()},
sX(a){this.a3(3,a*this.f.gB())},
gao(){return A.aq(this)},
Y(a){var t=this
t.a3(0,a.gk())
t.a3(1,a.gp())
t.a3(2,a.gm())
t.a3(3,a.gq())},
a9(a,b,c){var t=this,s=t.f.c
if(s>0){t.a3(0,a)
if(s>1){t.a3(1,b)
if(s>2)t.a3(2,c)}}},
aa(a,b,c,d){var t=this,s=t.f.c
if(s>0){t.a3(0,a)
if(s>1){t.a3(1,b)
if(s>2){t.a3(2,c)
if(s>3)t.a3(3,d)}}}},
gA(a){return new A.B(this)},
O(a,b){var t,s,r,q=this
if(b==null)return!1
if(b instanceof A.bj){t=A.n(q,A.j(q).l("d.E"))
t=A.o(t)
s=A.n(b,A.j(b).l("d.E"))
return t===A.o(s)}if(u.L.b(b)){t=q.f
s=t.f
r=s!=null?s.b:t.c
t=J.K(b)
if(t.gj(b)!==r)return!1
if(q.aA(0)!==t.i(b,0))return!1
if(r>1){if(q.aA(1)!==t.i(b,1))return!1
if(r>2){if(q.aA(2)!==t.i(b,2))return!1
if(r>3)if(q.aA(3)!==t.i(b,3))return!1}}return!0}return!1},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$iq:1,
$ip:1,
$im:1,
gan(){return this.f}}
A.bk.prototype={
N(){var t=this
return new A.bk(t.a,t.b,t.c,t.d)},
gj(a){var t=this.d,s=t.e
s=s==null?null:s.b
return s==null?t.c:s},
gV(){return this.d.e},
gB(){var t=this.d.e
t=t==null?null:t.gB()
return t==null?65535:t},
gH(){return B.r},
gar(){return this.a},
gaj(){return this.b},
P(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gE(){return this},
v(){var t,s=this,r=s.d
if(++s.a===r.a){s.a=0
if(++s.b===r.b)return!1}t=s.c
t+=r.e==null?r.c:1
s.c=t
return t<r.d.length},
aK(a){var t,s=this.d,r=s.e
if(r!=null){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=r.bk(s[t],a)
s=t}else if(a<s.c){s=s.d
r=this.c+a
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
i(a,b){return this.aK(b)},
n(a,b,c){var t,s,r=this.d
if(b<r.c){r=r.d
t=this.c+b
s=B.a.h(c)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gR(){return this.gk()},
sR(a){this.sk(a)},
gk(){var t,s=this.d,r=s.e
if(r==null)if(s.c>0){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
else{s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=r.bG(s[t])
s=t}return s},
sk(a){var t,s,r=this.d
if(r.c>0){r=r.d
t=this.c
s=B.a.h(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gp(){var t,s=this,r=s.d,q=r.e
if(q==null){q=r.c
if(q===2){r=r.d
q=s.c
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else if(q>1){r=r.d
q=s.c+1
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0}else{r=r.d
t=s.c
if(!(t>=0&&t<r.length))return A.a(r,t)
t=q.bF(r[t])
r=t}return r},
sp(a){var t,s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
t=B.a.h(a)
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}else if(r>1){s=s.d
r=this.c+1
t=B.a.h(a)
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}},
gm(){var t,s=this,r=s.d,q=r.e
if(q==null){q=r.c
if(q===2){r=r.d
q=s.c
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else if(q>2){r=r.d
q=s.c+2
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0}else{r=r.d
t=s.c
if(!(t>=0&&t<r.length))return A.a(r,t)
t=q.bE(r[t])
r=t}return r},
sm(a){var t,s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
t=B.a.h(a)
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}else if(r>2){s=s.d
r=this.c+2
t=B.a.h(a)
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}},
gq(){var t,s=this,r=s.d,q=r.e
if(q==null){q=r.c
if(q===2){r=r.d
q=s.c+1
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else if(q>3){r=r.d
q=s.c+3
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=r.gB()}else{r=r.d
t=s.c
if(!(t>=0&&t<r.length))return A.a(r,t)
t=q.bD(r[t])
r=t}return r},
sq(a){var t,s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
t=B.a.h(a)
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}else if(r>3){s=s.d
r=this.c+3
t=B.a.h(a)
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}},
gW(){return this.gk()/this.d.gB()},
sW(a){this.sk(a*this.d.gB())},
gT(){return this.gp()/this.d.gB()},
sT(a){this.sp(a*this.d.gB())},
gU(){return this.gm()/this.d.gB()},
sU(a){this.sm(a*this.d.gB())},
gX(){return this.gq()/this.d.gB()},
sX(a){this.sq(a*this.d.gB())},
gao(){return this.d.c===2?this.gk():A.aq(this)},
Y(a){var t=this
t.sk(a.gk())
t.sp(a.gp())
t.sm(a.gm())
t.sq(a.gq())},
a9(a,b,c){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.b.h(a)
p.$flags&2&&A.b(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.b.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){o=t+2
t=B.b.h(c)
if(!(o<r))return A.a(p,o)
p[o]=t}}}},
aa(a,b,c,d){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.b.h(a)
p.$flags&2&&A.b(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.b.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){s=t+2
q=B.b.h(c)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>3){o=t+3
t=B.b.h(d)
if(!(o<r))return A.a(p,o)
p[o]=t}}}}},
gA(a){return new A.B(this)},
O(a,b){var t,s,r,q=this
if(b==null)return!1
if(b instanceof A.bk){t=A.n(q,A.j(q).l("d.E"))
t=A.o(t)
s=A.n(b,A.j(b).l("d.E"))
return t===A.o(s)}if(u.L.b(b)){t=q.d
s=t.e
r=s!=null?s.b:t.c
t=J.K(b)
if(t.gj(b)!==r)return!1
if(q.aK(0)!==t.i(b,0))return!1
if(r>1){if(q.aK(1)!==t.i(b,1))return!1
if(r>2){if(q.aK(2)!==t.i(b,2))return!1
if(r>3)if(q.aK(3)!==t.i(b,3))return!1}}return!0}return!1},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$iq:1,
$ip:1,
$im:1,
gan(){return this.d}}
A.bl.prototype={
N(){var t=this
return new A.bl(t.a,t.b,t.c,t.d,t.e,t.f)},
gj(a){var t=this.f,s=t.f
s=s==null?null:s.b
return s==null?t.c:s},
gV(){return this.f.f},
gB(){var t=this.f.f
t=t==null?null:t.gB()
return t==null?3:t},
gH(){return B.w},
gdk(){var t=this.f
return t.f!=null?2:t.c<<1>>>0},
gar(){return this.a},
gaj(){return this.b},
P(a,b){var t,s,r,q=this
q.a=a
q.b=b
t=q.gdk()
s=b*q.f.e
q.e=s
r=a*t
q.c=s+B.b.I(r,3)
q.d=r&7},
gE(){return this},
v(){var t=this,s=++t.a,r=t.f
if(s===r.a){t.a=0
s=++t.b
t.d=0;++t.c
t.e=t.e+r.e
return s<r.b}if(r.f!=null||r.c===1){if((t.d+=2)>7){t.d=0;++t.c}}else{s*=t.gdk()
t.d=s&7
t.c=t.e+B.b.I(s,3)}s=t.c
r=r.d
r===$&&A.c()
return s<r.length},
cg(a){var t,s=this.c,r=6-(this.d+(a<<1>>>0))
if(r<0){r+=8;++s}t=this.f.d
t===$&&A.c()
if(!(s>=0&&s<t.length))return A.a(t,s)
return B.b.b1(t[s],r)&3},
aB(a){var t=this.f,s=t.f
if(s==null)t=t.c>a?this.cg(a):0
else t=s.bk(this.cg(0),a)
return t},
a4(a,b){var t,s,r,q,p,o,n=this.f
if(a>=n.c)return
t=this.c
s=6-(this.d+(a<<1>>>0))
if(s<0){++t
s+=8}r=n.d
r===$&&A.c()
if(!(t>=0&&t<r.length))return A.a(r,t)
q=r[t]
p=B.b.u(B.a.h(b),0,3)
r=B.b.I(s,1)
if(!(r<4))return A.a(B.al,r)
o=B.al[r]
r=B.b.a2(p,s)
n=n.d
n.$flags&2&&A.b(n)
if(!(t<n.length))return A.a(n,t)
n[t]=(q&o|r)>>>0},
i(a,b){return this.aB(b)},
n(a,b,c){return this.a4(b,c)},
gR(){return this.cg(0)},
sR(a){this.a4(0,a)},
gk(){return this.aB(0)},
sk(a){this.a4(0,a)},
gp(){return this.aB(1)},
sp(a){this.a4(1,a)},
gm(){return this.aB(2)},
sm(a){this.a4(2,a)},
gq(){var t=this.f
return t.f==null&&t.c<4?t.gB():this.aB(3)},
sq(a){this.a4(3,a)},
gW(){return this.aB(0)/this.f.gB()},
sW(a){this.a4(0,a*this.f.gB())},
gT(){return this.aB(1)/this.f.gB()},
sT(a){this.a4(1,a*this.f.gB())},
gU(){return this.aB(2)/this.f.gB()},
sU(a){this.a4(2,a*this.f.gB())},
gX(){return this.gq()/this.f.gB()},
sX(a){this.a4(3,a*this.f.gB())},
gao(){return A.aq(this)},
Y(a){var t=this
t.a4(0,a.gk())
t.a4(1,a.gp())
t.a4(2,a.gm())
t.a4(3,a.gq())},
a9(a,b,c){var t=this,s=t.f.c
if(s>0){t.a4(0,a)
if(s>1){t.a4(1,b)
if(s>2)t.a4(2,c)}}},
aa(a,b,c,d){var t=this,s=t.f.c
if(s>0){t.a4(0,a)
if(s>1){t.a4(1,b)
if(s>2){t.a4(2,c)
if(s>3)t.a4(3,d)}}}},
gA(a){return new A.B(this)},
O(a,b){var t,s,r,q=this
if(b==null)return!1
if(b instanceof A.bl){t=A.n(q,A.j(q).l("d.E"))
t=A.o(t)
s=A.n(b,A.j(b).l("d.E"))
return t===A.o(s)}if(u.L.b(b)){t=q.f
s=t.f
r=s!=null?s.b:t.c
t=J.K(b)
if(t.gj(b)!==r)return!1
if(q.aB(0)!==t.i(b,0))return!1
if(r>1){if(q.aB(1)!==t.i(b,1))return!1
if(r>2){if(q.aB(2)!==t.i(b,2))return!1
if(r>3)if(q.aB(3)!==t.i(b,3))return!1}}return!0}return!1},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$iq:1,
$ip:1,
$im:1,
gan(){return this.f}}
A.bm.prototype={
N(){var t=this
return new A.bm(t.a,t.b,t.c,t.d)},
gj(a){return this.d.c},
gV(){return null},
gB(){return 4294967295},
gH(){return B.z},
gar(){return this.a},
gaj(){return this.b},
P(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gE(){return this},
v(){var t,s=this,r=s.d
if(++s.a===r.a){s.a=0
if(++s.b===r.b)return!1}t=s.c+r.c
s.c=t
return t<r.d.length},
i(a,b){var t,s=this.d
if(b<s.c){s=s.d
t=this.c+b
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
n(a,b,c){var t,s,r=this.d
if(b<r.c){r=r.d
t=this.c+b
s=B.a.h(c)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gR(){return this.gk()},
sR(a){this.sk(a)},
gk(){var t,s=this.d
if(s.c>0){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sk(a){var t,s,r=this.d
if(r.c>0){r=r.d
t=this.c
s=B.a.h(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gp(){var t,s=this.d
if(s.c>1){s=s.d
t=this.c+1
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sp(a){var t,s,r=this.d
if(r.c>1){r=r.d
t=this.c+1
s=B.a.h(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gm(){var t,s=this.d
if(s.c>2){s=s.d
t=this.c+2
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sm(a){var t,s,r=this.d
if(r.c>2){r=r.d
t=this.c+2
s=B.a.h(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gq(){var t,s=this.d
if(s.c>3){s=s.d
t=this.c+3
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=4294967295
return s},
sq(a){var t,s,r=this.d
if(r.c>3){r=r.d
t=this.c+3
s=B.a.h(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gW(){return this.gk()/4294967295},
sW(a){this.sk(a*4294967295)},
gT(){return this.gp()/4294967295},
sT(a){this.sp(a*4294967295)},
gU(){return this.gm()/4294967295},
sU(a){this.sm(a*4294967295)},
gX(){return this.gq()/4294967295},
sX(a){this.sq(a*4294967295)},
gao(){return A.aq(this)},
Y(a){var t=this
t.sk(a.gk())
t.sp(a.gp())
t.sm(a.gm())
t.sq(a.gq())},
a9(a,b,c){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.b.h(a)
p.$flags&2&&A.b(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.b.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){o=t+2
t=B.b.h(c)
if(!(o<r))return A.a(p,o)
p[o]=t}}}},
aa(a,b,c,d){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.b.h(a)
p.$flags&2&&A.b(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.b.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){s=t+2
q=B.b.h(c)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>3){o=t+3
t=B.b.h(d)
if(!(o<r))return A.a(p,o)
p[o]=t}}}}},
gA(a){return new A.B(this)},
O(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.bm){t=A.n(o,A.j(o).l("d.E"))
t=A.o(t)
s=A.n(b,A.j(b).l("d.E"))
return t===A.o(s)}if(u.L.b(b)){t=J.K(b)
s=o.d
r=s.c
if(t.gj(b)!==r)return!1
s=s.d
q=o.c
p=s.length
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.i(b,0))return!1
if(r>1){q=o.c+1
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.i(b,1))return!1
if(r>2){q=o.c+2
if(!(q>=0&&q<p))return A.a(s,q)
if(s[q]!==t.i(b,2))return!1
if(r>3){r=o.c+3
if(!(r>=0&&r<p))return A.a(s,r)
if(s[r]!==t.i(b,3))return!1}}}return!0}return!1},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$iq:1,
$ip:1,
$im:1,
gan(){return this.d}}
A.bn.prototype={
N(){var t=this
return new A.bn(t.a,t.b,t.c,t.d,t.e)},
gj(a){var t=this.e,s=t.f
s=s==null?null:s.b
return s==null?t.c:s},
gV(){return this.e.f},
gB(){var t=this.e.f
t=t==null?null:t.gB()
return t==null?15:t},
gH(){return B.x},
gar(){return this.a},
gaj(){return this.b},
P(a,b){var t,s,r,q=this
q.a=a
q.b=b
t=q.e
s=t.c*4
r=t.e
if(s===4)t=b*r+B.b.I(a,1)
else if(s===8)t=b*t.a+a
else{t=b*r
t=s===16?t+(a<<1>>>0):t+B.b.I(a*s,3)}q.c=t
t=a*s
q.d=s>7?t&4:t&7},
gE(){return this},
v(){var t,s,r,q=this,p=q.e
if(++q.a===p.a){q.a=0
t=++q.b
q.d=0
q.c=t*p.e
return t<p.b}s=p.c
t=p.f!=null||s===1
r=q.d
if(t){t=r+4
q.d=t
if(t>7){q.d=0;++q.c}}else{t=q.d=r+(s<<2>>>0)
while(t>7){t-=8
q.d=t;++q.c}}t=q.c
p=p.d
p===$&&A.c()
return t<p.length},
cc(a){var t,s=this.c,r=4-(this.d+(a<<2>>>0))
if(r<0){r+=8;++s}t=this.e.d
t===$&&A.c()
if(!(s>=0&&s<t.length))return A.a(t,s)
return B.b.b1(t[s],r)&15},
aC(a){var t=this.e,s=t.f
if(s==null)t=t.c>a?this.cc(a):0
else t=s.bk(this.cc(0),a)
return t},
a5(a,b){var t,s,r,q,p,o,n=this.e
if(a>=n.c)return
t=this.c
s=4-(this.d+(a<<2>>>0))
if(s<0){s+=8;++t}r=n.d
r===$&&A.c()
if(!(t>=0&&t<r.length))return A.a(r,t)
q=r[t]
p=B.b.u(B.a.h(b),0,15)
o=s===4?15:240
r=B.b.a2(p,s)
n=n.d
n.$flags&2&&A.b(n)
if(!(t<n.length))return A.a(n,t)
n[t]=(q&o|r)>>>0},
i(a,b){return this.aC(b)},
n(a,b,c){return this.a5(b,c)},
gR(){return this.cc(0)},
sR(a){this.a5(0,a)},
gk(){return this.aC(0)},
sk(a){this.a5(0,a)},
gp(){return this.aC(1)},
sp(a){this.a5(1,a)},
gm(){return this.aC(2)},
sm(a){this.a5(2,a)},
gq(){var t=this.e
return t.f==null&&t.c<4?t.gB():this.aC(3)},
sq(a){this.a5(3,a)},
gW(){return this.aC(0)/this.e.gB()},
sW(a){this.a5(0,a*this.e.gB())},
gT(){return this.aC(1)/this.e.gB()},
sT(a){this.a5(1,a*this.e.gB())},
gU(){return this.aC(2)/this.e.gB()},
sU(a){this.a5(2,a*this.e.gB())},
gX(){return this.gq()/this.e.gB()},
sX(a){this.a5(3,a*this.e.gB())},
gao(){return A.aq(this)},
Y(a){var t=this
t.a5(0,a.gk())
t.a5(1,a.gp())
t.a5(2,a.gm())
t.a5(3,a.gq())},
a9(a,b,c){var t=this,s=t.e.c
if(s>0){t.a5(0,a)
if(s>1){t.a5(1,b)
if(s>2)t.a5(2,c)}}},
aa(a,b,c,d){var t=this,s=t.e.c
if(s>0){t.a5(0,a)
if(s>1){t.a5(1,b)
if(s>2){t.a5(2,c)
if(s>3)t.a5(3,d)}}}},
gA(a){return new A.B(this)},
O(a,b){var t,s,r,q=this
if(b==null)return!1
if(b instanceof A.bn){t=A.n(q,A.j(q).l("d.E"))
t=A.o(t)
s=A.n(b,A.j(b).l("d.E"))
return t===A.o(s)}if(u.L.b(b)){r=q.e.c
t=J.K(b)
if(t.gj(b)!==r)return!1
if(q.aC(0)!==t.i(b,0))return!1
if(r>1){if(q.aC(1)!==t.i(b,1))return!1
if(r>2){if(q.aC(2)!==t.i(b,2))return!1
if(r>3)if(q.aC(3)!==t.i(b,3))return!1}}return!0}return!1},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$iq:1,
$ip:1,
$im:1,
gan(){return this.e}}
A.bo.prototype={
N(){var t=this
return new A.bo(t.a,t.b,t.c,t.d)},
gj(a){var t=this.d,s=t.e
s=s==null?null:s.b
return s==null?t.c:s},
gV(){return this.d.e},
gB(){var t=this.d.e
t=t==null?null:t.gB()
return t==null?255:t},
gH(){return B.l},
gar(){return this.a},
gaj(){return this.b},
P(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gE(){return this},
v(){var t,s=this,r=s.d
if(++s.a===r.a){s.a=0
if(++s.b===r.b)return!1}t=s.c
t+=r.e==null?r.c:1
s.c=t
return t<r.d.length},
aK(a){var t,s=this.d,r=s.e
if(r!=null){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=r.bk(s[t],a)
s=t}else if(a<s.c){s=s.d
r=this.c+a
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
i(a,b){return this.aK(b)},
n(a,b,c){var t,s,r=this.d
if(b<r.c){r=r.d
t=this.c+b
s=B.a.h(B.a.u(c,0,255))
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gR(){var t=this.d.d,s=this.c
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
sR(a){var t=this.d.d,s=this.c,r=B.a.h(B.a.u(a,0,255))
t.$flags&2&&A.b(t)
if(!(s>=0&&s<t.length))return A.a(t,s)
t[s]=r},
gk(){var t,s=this.d,r=s.e
if(r==null)if(s.c>0){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
else{s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=r.bG(s[t])
s=t}return s},
sk(a){var t,s,r=this.d
if(r.c>0){r=r.d
t=this.c
s=B.a.h(B.a.u(a,0,255))
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gp(){var t,s=this,r=s.d,q=r.e
if(q==null){q=r.c
if(q===2){r=r.d
q=s.c
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else if(q>1){r=r.d
q=s.c+1
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0}else{r=r.d
t=s.c
if(!(t>=0&&t<r.length))return A.a(r,t)
t=q.bF(r[t])
r=t}return r},
sp(a){var t,s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
t=B.a.h(B.a.u(a,0,255))
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}else if(r>1){s=s.d
r=this.c+1
t=B.a.h(B.a.u(a,0,255))
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}},
gm(){var t,s=this,r=s.d,q=r.e
if(q==null){q=r.c
if(q===2){r=r.d
q=s.c
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else if(q>2){r=r.d
q=s.c+2
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0}else{r=r.d
t=s.c
if(!(t>=0&&t<r.length))return A.a(r,t)
t=q.bE(r[t])
r=t}return r},
sm(a){var t,s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
t=B.a.h(B.a.u(a,0,255))
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}else if(r>2){s=s.d
r=this.c+2
t=B.a.h(B.a.u(a,0,255))
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}},
gq(){var t,s=this,r=s.d,q=r.e
if(q==null){q=r.c
if(q===2){r=r.d
q=s.c+1
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else if(q>3){r=r.d
q=s.c+3
if(!(q>=0&&q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=255}else{r=r.d
t=s.c
if(!(t>=0&&t<r.length))return A.a(r,t)
t=q.bD(r[t])
r=t}return r},
sq(a){var t,s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
t=B.a.h(B.a.u(a,0,255))
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}else if(r>3){s=s.d
r=this.c+3
t=B.a.h(B.a.u(a,0,255))
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}},
gW(){return this.gk()/this.d.gB()},
sW(a){this.sk(a*this.d.gB())},
gT(){return this.gp()/this.d.gB()},
sT(a){this.sp(a*this.d.gB())},
gU(){return this.gm()/this.d.gB()},
sU(a){this.sm(a*this.d.gB())},
gX(){return this.gq()/this.d.gB()},
sX(a){this.sq(a*this.d.gB())},
gao(){return this.d.c===2?this.gk():A.aq(this)},
Y(a){var t=this
if(t.d.e!=null)t.sR(a.gR())
else{t.sk(a.gk())
t.sp(a.gp())
t.sm(a.gm())
t.sq(a.gq())}},
a9(a,b,c){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.b.h(a)
p.$flags&2&&A.b(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.b.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){o=t+2
t=B.b.h(c)
if(!(o<r))return A.a(p,o)
p[o]=t}}}},
aa(a,b,c,d){var t,s,r,q,p=this.d,o=p.c
if(o>0){p=p.d
t=this.c
s=B.b.h(a)
p.$flags&2&&A.b(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){s=t+1
q=B.b.h(b)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>2){s=t+2
q=B.b.h(c)
if(!(s<r))return A.a(p,s)
p[s]=q
if(o>3){o=t+3
t=B.b.h(d)
if(!(o<r))return A.a(p,o)
p[o]=t}}}}},
gA(a){return new A.B(this)},
O(a,b){var t,s,r,q=this
if(b==null)return!1
if(b instanceof A.bo){t=A.n(q,A.j(q).l("d.E"))
t=A.o(t)
s=A.n(b,A.j(b).l("d.E"))
return t===A.o(s)}if(u.L.b(b)){t=q.d
s=t.e
r=s!=null?s.b:t.c
t=J.K(b)
if(t.gj(b)!==r)return!1
if(q.aK(0)!==t.i(b,0))return!1
if(r>1){if(q.aK(1)!==t.i(b,1))return!1
if(r>2){if(q.aK(2)!==t.i(b,2))return!1
if(r>3)if(q.aK(3)!==t.i(b,3))return!1}}return!0}return!1},
gG(a){var t=A.n(this,A.j(this).l("d.E"))
return A.o(t)},
$iq:1,
$ip:1,
$im:1,
gan(){return this.d}}
A.a7.prototype={
N(){return new A.a7()},
gan(){return $.jy()},
gar(){return 0},
gaj(){return 0},
gj(a){return 0},
gB(){return 0},
gH(){return B.l},
gV(){return null},
i(a,b){return 0},
n(a,b,c){},
gR(){return 0},
sR(a){},
gk(){return 0},
sk(a){},
gp(){return 0},
sp(a){},
gm(){return 0},
sm(a){},
gq(){return 0},
sq(a){},
gW(){return 0},
sW(a){},
gT(){return 0},
sT(a){},
gU(){return 0},
sU(a){},
gX(){return 0},
sX(a){},
gao(){return 0},
Y(a){},
a9(a,b,c){},
aa(a,b,c,d){},
P(a,b){},
gE(){return this},
v(){return!1},
O(a,b){if(b==null)return!1
return b instanceof A.a7},
gG(a){return 0},
gA(a){return new A.B(this)},
$iq:1,
$ip:1,
$im:1}
A.f9.prototype={
D(a){return"ImageException: "+this.a}}
A.bP.prototype={
gj(a){return this.c-this.d},
aS(a){var t=this.d
return A.fb(this.a,!0,a,t)},
bp(){var t=this.a,s=this.d++
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
bB(a){var t=this.d,s=A.fb(this.a,!0,a,t)
this.d=t+(s.c-s.d)
return s},
c_(a){var t,s,r,q,p,o=this
if(a==null){t=A.k([],u.t)
for(s=o.c,r=o.a;q=o.d,q<s;){o.d=q+1
if(!(q>=0&&q<r.length))return A.a(r,q)
p=r[q]
if(p===0)return A.fz(t,0,null)
B.c.L(t,p)}throw A.f(A.aw("EOF reached without finding string terminator (length: "+A.x(a)+")"))}return A.fz(o.bB(a).aI(),0,null)},
fh(){return this.c_(null)},
bj(){var t=this,s=t.a,r=t.d,q=t.d=r+1,p=s.length
if(!(r>=0&&r<p))return A.a(s,r)
r=s[r]
t.d=q+1
if(!(q>=0&&q<p))return A.a(s,q)
q=s[q]
return(r&255)<<8|q&255},
a0(){var t,s,r=this,q=r.a,p=r.d,o=r.d=p+1,n=q.length
if(!(p>=0&&p<n))return A.a(q,p)
p=q[p]
t=r.d=o+1
if(!(o>=0&&o<n))return A.a(q,o)
o=q[o]
s=r.d=t+1
if(!(t>=0&&t<n))return A.a(q,t)
t=q[t]
r.d=s+1
if(!(s>=0&&s<n))return A.a(q,s)
s=q[s]
return((p&255)<<24|(o&255)<<16|(t&255)<<8|s&255)>>>0},
aI(){var t=this,s=t.d,r=t.c-s,q=t.a
if(u.F.b(q))return J.N(B.h.gF(q),q.byteOffset+t.d,r)
s=new Uint8Array(A.E(J.jY(q,s,s+r)))
return s}}
A.dV.prototype={
eQ(a){var t=this
t.d_(a)
t.cU()
t.cY()
t.cQ()},
eA(a){var t,s,r,q,p,o,n,m=this,l=m.c=Math.max(a,4)
m.f=l-m.d
m.r=l-1
t=B.a.aV(l,8)
m.w=t
m.x=t*256
m.Q=new A.cI(new Uint32Array(1024),256,4)
m.a=new A.bc(new Uint8Array(768),256,3)
m.d=3
m.e=2
t=B.a.I(l,3)
m.y=new Int32Array(t)
t=u.i
s=u.H
m.z=s.a(A.dR(l*3,0,!1,t))
m.at=s.a(A.dR(m.c,0,!1,t))
m.ax=s.a(A.dR(m.c,0,!1,t))
B.c.n(m.z,0,0)
B.c.n(m.z,1,0)
B.c.n(m.z,2,0)
B.c.n(m.z,3,255)
B.c.n(m.z,4,255)
B.c.n(m.z,5,255)
r=1/m.c
for(q=0;p=m.d,q<p;++q){B.c.n(m.ax,q,r)
B.c.n(m.at,q,0)}for(o=p*3,q=p;q<m.c;++q,o=n){n=o+1
B.c.n(m.z,o,255*(q-m.d)/m.f)
o=n+1
B.c.n(m.z,n,255*(q-m.d)/m.f)
n=o+1
B.c.n(m.z,o,255*(q-m.d)/m.f)
B.c.n(m.ax,q,r)
B.c.n(m.at,q,0)}},
cQ(){var t,s,r,q,p,o,n
for(t=0;t<this.c;++t){s=this.a
s===$&&A.c()
r=this.Q
r===$&&A.c()
q=r.b
if(2<q){p=r.c
o=t*q+2
if(!(o<p.length))return A.a(p,o)
o=p[o]
p=o}else p=0
if(1<q){o=r.c
n=t*q+1
if(!(n<o.length))return A.a(o,n)
n=o[n]
o=n}else o=0
if(0<q){r=r.c
q=t*q
if(!(q<r.length))return A.a(r,q)
q=r[q]
r=q}else r=0
s.c1(t,Math.abs(p),Math.abs(o),Math.abs(r))}},
ew(a,b,c){var t,s,r,q,p,o,n,m,l,k,j=this.as
if(!(b>=0&&b<256))return A.a(j,b)
t=j[b]
s=t-1
r=this.c
j=this.Q
q=1000
p=-1
for(;;){o=t<r
if(!(o||s>=0))break
if(o){j===$&&A.c()
o=j.b
if(1<o){n=j.c
m=t*o+1
if(!(m>=0&&m<n.length))return A.a(n,m)
m=n[m]
n=m}else n=0
l=n-b
if(l>=q)t=r
else{if(l<0)l=-l
if(0<o){n=j.c
m=t*o
if(!(m>=0&&m<n.length))return A.a(n,m)
m=n[m]
n=m}else n=0
k=n-a
l+=k<0?-k:k
if(l<q){if(2<o){n=j.c
o=t*o+2
if(!(o>=0&&o<n.length))return A.a(n,o)
o=n[o]}else o=0
k=o-c
l+=k<0?-k:k
if(l<q){p=t
q=l}}++t}}if(s>=0){j===$&&A.c()
o=j.b
if(1<o){n=j.c
m=s*o+1
if(!(m>=0&&m<n.length))return A.a(n,m)
m=n[m]
n=m}else n=0
l=b-n
if(l>=q)s=-1
else{if(l<0)l=-l
if(0<o){n=j.c
m=s*o
if(!(m>=0&&m<n.length))return A.a(n,m)
m=n[m]
n=m}else n=0
k=n-a
l+=k<0?-k:k
if(l<q){if(2<o){n=j.c
o=s*o+2
if(!(o>=0&&o<n.length))return A.a(n,o)
o=n[o]}else o=0
k=o-c
l+=k<0?-k:k
if(l<q){p=s
q=l}}--s}}}return p},
cU(){var t,s,r,q,p,o,n,m=this
for(t=0,s=0;t<m.c;++t){for(r=0;r<3;++r,++s){q=m.z
q===$&&A.c()
if(!(s>=0&&s<q.length))return A.a(q,s)
p=B.b.u(B.a.h(0.5+q[s]),0,255)
q=m.Q
q===$&&A.c()
o=q.b
if(r<o){q=q.c
o=t*o+r
n=B.b.h(p)
q.$flags&2&&A.b(q)
if(!(o<q.length))return A.a(q,o)
q[o]=n}}q=m.Q
q===$&&A.c()
o=q.b
if(3<o){q=q.c
o=t*o+3
n=B.b.h(t)
q.$flags&2&&A.b(q)
if(!(o<q.length))return A.a(q,o)
q[o]=n}}},
cY(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
for(t=c.c,s=c.Q,r=c.as,q=r.$flags|0,p=0,o=0,n=0;n<t;n=h){s===$&&A.c()
m=s.b
l=1<m
if(l){k=s.c
j=n*m+1
if(!(j<k.length))return A.a(k,j)
i=k[j]}else i=0
for(h=n+1,g=h,f=n;g<t;++g){if(l){k=s.c
j=g*m+1
if(!(j<k.length))return A.a(k,j)
j=k[j]
k=j}else k=0
if(k<i){if(l){k=s.c
j=g*m+1
if(!(j<k.length))return A.a(k,j)
i=k[j]}else i=0
f=g}}if(n!==f){k=0<m
if(k){j=s.c
e=f*m
if(!(e<j.length))return A.a(j,e)
g=j[e]}else g=0
if(k){j=s.c
e=n*m
if(!(e<j.length))return A.a(j,e)
e=j[e]
j=e}else j=0
if(k){d=f*m
e=s.c
j=B.b.h(j)
e.$flags&2&&A.b(e)
if(!(d<e.length))return A.a(e,d)
e[d]=j}if(k){d=n*m
k=s.c
j=B.b.h(g)
k.$flags&2&&A.b(k)
if(!(d<k.length))return A.a(k,d)
k[d]=j}if(l){k=s.c
j=f*m+1
if(!(j<k.length))return A.a(k,j)
g=k[j]}else g=0
if(l){k=s.c
j=n*m+1
if(!(j<k.length))return A.a(k,j)
j=k[j]
k=j}else k=0
if(l){j=s.c
e=f*m+1
k=B.b.h(k)
j.$flags&2&&A.b(j)
if(!(e<j.length))return A.a(j,e)
j[e]=k}if(l){l=s.c
k=n*m+1
j=B.b.h(g)
l.$flags&2&&A.b(l)
if(!(k<l.length))return A.a(l,k)
l[k]=j}l=2<m
if(l){k=s.c
j=f*m+2
if(!(j<k.length))return A.a(k,j)
g=k[j]}else g=0
if(l){k=s.c
j=n*m+2
if(!(j<k.length))return A.a(k,j)
j=k[j]
k=j}else k=0
if(l){j=s.c
e=f*m+2
k=B.b.h(k)
j.$flags&2&&A.b(j)
if(!(e<j.length))return A.a(j,e)
j[e]=k}if(l){l=s.c
k=n*m+2
j=B.b.h(g)
l.$flags&2&&A.b(l)
if(!(k<l.length))return A.a(l,k)
l[k]=j}l=3<m
if(l){k=s.c
j=f*m+3
if(!(j<k.length))return A.a(k,j)
g=k[j]}else g=0
if(l){k=s.c
j=n*m+3
if(!(j<k.length))return A.a(k,j)
j=k[j]
k=j}else k=0
if(l){j=s.c
e=f*m+3
k=B.b.h(k)
j.$flags&2&&A.b(j)
if(!(e<j.length))return A.a(j,e)
j[e]=k}if(l){l=s.c
m=n*m+3
k=B.b.h(g)
l.$flags&2&&A.b(l)
if(!(m<l.length))return A.a(l,m)
l[m]=k}}if(i!==p){q&2&&A.b(r)
if(!(p>=0&&p<256))return A.a(r,p)
r[p]=o+n>>>1
for(g=p+1;g<i;++g){if(!(g<256))return A.a(r,g)
r[g]=n}o=n
p=i}}t=c.r
t.toString
s=B.b.I(o+t,1)
q&2&&A.b(r)
if(!(p>=0&&p<256))return A.a(r,p)
r[p]=s
for(h=p+1;h<256;++h)r[h]=t},
da(a,b){var t,s,r,q
for(t=this.y,s=a*a,r=0;r<a;++r){t===$&&A.c()
q=B.a.h(b*((s-r*r)*256/s))
t.$flags&2&&A.b(t)
if(!(r<t.length))return A.a(t,r)
t[r]=q}},
d_(a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.x
a3===$&&A.c()
t=a2.b
s=30+B.b.aV(t-1,3)
r=a4.gac()*a4.ga8()
q=B.b.ag(r,t)
p=Math.max(B.b.aV(q,100),1)
if(p===0)p=1
o=B.b.I(a3,8)
if(o<=1)o=0
a2.da(o,1024)
if(r<1509)n=a2.b=1
else if(B.b.aZ(r,499)!==0)n=499
else if(B.b.aZ(r,491)!==0)n=491
else n=B.b.aZ(r,487)!==0?487:503
m=a4.gac()
l=a4.ga8()
for(k=a3,j=1024,i=0,h=0,g=0,f=0;f<q;){a3=a4.a
e=a3==null?null:a3.a1(h,g,null)
if(e==null)e=new A.a7()
d=e.gk()
c=e.gp()
b=e.gm()
if(f===0){a3=a2.z
a3===$&&A.c()
t=a2.e
t===$&&A.c()
B.c.n(a3,t*3,b)
B.c.n(a2.z,a2.e*3+1,c)
B.c.n(a2.z,a2.e*3+2,d)}a=a2.eO(b,c,d)
if(a<0)a=a2.e7(b,c,d)
if(a>=a2.d){a0=j/1024
e=a*3
a3=a2.z
a3===$&&A.c()
if(!(e>=0&&e<a3.length))return A.a(a3,e)
t=a3[e]
B.c.n(a3,e,t-a0*(t-b))
t=a2.z
a3=e+1
if(!(a3<t.length))return A.a(t,a3)
a1=t[a3]
B.c.n(t,a3,a1-a0*(a1-c))
a1=a2.z
a3=e+2
if(!(a3<a1.length))return A.a(a1,a3)
t=a1[a3]
B.c.n(a1,a3,t-a0*(t-d))
if(o>0)a2.e3(a0,o,a,b,c,d)}i+=n
h+=n
while(h>m){h-=m;++g}while(i>=r){i-=r
g-=l}++f
if(B.b.aZ(f,p)===0){j-=B.b.ag(j,s)
k-=B.b.aV(k,30)
o=B.b.I(k,8)
if(o<=1)o=0
a2.da(o,j)}}},
e3(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i=this,h=c-b,g=i.d-1
if(h<g)h=g
t=c+b
s=i.c
if(t>s)t=s
r=c+1
q=c-1
p=1
for(;;){o=r<t
if(!(o||q>h))break
n=i.y
n===$&&A.c()
m=p+1
if(!(p<n.length))return A.a(n,p)
l=n[p]
if(o){k=r*3
o=i.z
o===$&&A.c()
if(!(k>=0&&k<o.length))return A.a(o,k)
n=o[k]
B.c.n(o,k,n-l*(n-d)/262144)
n=i.z
o=k+1
if(!(o<n.length))return A.a(n,o)
j=n[o]
B.c.n(n,o,j-l*(j-e)/262144)
j=i.z
o=k+2
if(!(o<j.length))return A.a(j,o)
n=j[o]
B.c.n(j,o,n-l*(n-f)/262144);++r}if(q>h){k=q*3
o=i.z
o===$&&A.c()
if(!(k>=0&&k<o.length))return A.a(o,k)
n=o[k]
B.c.n(o,k,n-l*(n-d)/262144)
n=i.z
o=k+1
if(!(o<n.length))return A.a(n,o)
j=n[o]
B.c.n(n,o,j-l*(j-e)/262144)
j=i.z
o=k+2
if(!(o<j.length))return A.a(j,o)
n=j[o]
B.c.n(j,o,n-l*(n-f)/262144);--q}p=m}},
e7(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=1e30
for(t=f.d,s=t*3,r=e,q=r,p=-1,o=-1;t<f.c;++t,s=m){n=f.z
n===$&&A.c()
m=s+1
l=n.length
if(!(s<l))return A.a(n,s)
k=n[s]-a
if(k<0)k=-k
s=m+1
if(!(m<l))return A.a(n,m)
j=n[m]-b
if(j<0)j=-j
m=s+1
if(!(s<l))return A.a(n,s)
i=n[s]-c
if(i<0)i=-i
k=k+j+i
if(k<q){p=t
q=k}n=f.at
n===$&&A.c()
if(!(t<n.length))return A.a(n,t)
h=k-n[t]
if(h<r){o=t
r=h}n=f.ax
n===$&&A.c()
if(!(t<n.length))return A.a(n,t)
l=n[t]
B.c.n(n,t,l-0.0009765625*l)
l=f.at
if(!(t<l.length))return A.a(l,t)
n=l[t]
g=f.ax
if(!(t<g.length))return A.a(g,t)
B.c.n(l,t,n+g[t])}n=f.ax
n===$&&A.c()
if(!(p>=0&&p<n.length))return A.a(n,p)
B.c.n(n,p,n[p]+0.0009765625)
n=f.at
n===$&&A.c()
if(!(p<n.length))return A.a(n,p)
B.c.n(n,p,n[p]-1)
return o},
eO(a,b,c){var t,s,r,q,p,o,n
for(t=this.d,s=this.z,r=0,q=0;r<t;++r){s===$&&A.c()
p=q+1
o=s.length
if(!(q<o))return A.a(s,q)
n=!1
if(s[q]===a){q=p+1
if(!(p<o))return A.a(s,p)
if(s[p]===b){p=q+1
if(!(q<o))return A.a(s,q)
o=s[q]===c
q=p}else o=n}else{o=n
q=p}if(o)return r}return-1}}
A.dX.prototype={
S(a){var t,s,r=this
if(r.a===r.c.length)r.eh()
t=r.c
s=r.a++
t.$flags&2&&A.b(t)
if(!(s>=0&&s<t.length))return A.a(t,s)
t[s]=a&255},
aP(a){var t,s,r,q,p,o=this
u.L.a(a)
t=J.aN(a)
while(s=o.a,r=s+t,q=o.c,p=q.length,r>p)o.cT(r-p)
B.h.aR(q,s,r,a)
o.a+=t},
dL(a){this.S(B.b.I(a,8)&255)
this.S(a&255)
return},
aJ(a){var t=this
t.S(B.b.I(a,24)&255)
t.S(B.b.I(a,16)&255)
t.S(B.b.I(a,8)&255)
t.S(a&255)
return},
cT(a){var t,s,r,q
if(a!=null)t=a
else{s=this.c.length
t=s===0?8192:s*2}s=this.c
r=s.length
q=new Uint8Array(r+t)
B.h.aR(q,0,r,s)
this.c=q},
eh(){return this.cT(null)},
gj(a){return this.a}}
A.e6.prototype={
dN(a){var t,s,r,q,p,o,n=a.gac(),m=a.ga8(),l=this.a
l===$&&A.c()
t=A.hr(null,null,B.l,0,B.S,m,null,0,1,l,n,!1)
n=t.a
s=n.gA(n)
s.v()
t.z=a.z
t.w=a.w
t.y=a.y
for(n=a.a,n=n.gA(n);n.v();){r=n.gE()
q=s.gE()
p=B.a.h(r.gk())
o=B.a.h(r.gp())
q.n(0,0,this.ew(B.a.h(r.gm()),o,p))
s.v()}return t}}
A.cc.prototype={
eL(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=u.H
b.a(a)
b.a(a0)
b=this.b.length
t=new Float32Array(b)
s=this.a
r=s-1
for(q=0;q<s;++q)for(p=q*s,o=q/r,n=0;n<s;++n)for(m=(p+n)*s,l=n/r,k=0;k<s;++k){j=(m+k)*3
i=a.length
if(0>=i)return A.a(a,0)
h=a[0]
g=a0.length
if(0>=g)return A.a(a0,0)
f=a0[0]
if(1>=i)return A.a(a,1)
e=a[1]
if(1>=g)return A.a(a0,1)
d=a0[1]
if(2>=i)return A.a(a,2)
i=a[2]
if(2>=g)return A.a(a0,2)
c=this.cE((k/r-h)/(f-h),(l-e)/(d-e),(o-i)/(a0[2]-i))
if(!(j>=0&&j<b))return A.a(t,j)
t[j]=c.a
i=j+1
if(!(i<b))return A.a(t,i)
t[i]=c.b
i=j+2
if(!(i<b))return A.a(t,i)
t[i]=c.c}return new A.cc(s,t)},
cE(a,b,c){var t=this.a-1,s=B.a.u(a,0,1)*t,r=B.a.u(b,0,1)*t,q=B.a.u(c,0,1)*t,p=t-1,o=B.b.u(B.a.K(s),0,p),n=B.b.u(B.a.K(r),0,p),m=B.b.u(B.a.K(q),0,p)
p=new A.eN(this,this.b,o,n,m,s-o,r-n,q-m)
return new A.T(p.$1(0),p.$1(1),p.$1(2))},
eS(a,b){var t,s,r,q,p,o,n,m=a.c
for(t=m.length,s=0;s<t;s+=3){r=m[s]
q=s+1
if(!(q<t))return A.a(m,q)
p=m[q]
o=s+2
if(!(o<t))return A.a(m,o)
n=this.cE(r,p,m[o])
p=m[s]
m.$flags&2&&A.b(m)
m[s]=p+(n.a-p)*b
p=m[q]
m[q]=p+(n.b-p)*b
p=m[o]
m[o]=p+(n.c-p)*b}}}
A.eL.prototype={
$1(a){return A.c3(a)===0},
$S:3}
A.eM.prototype={
$1(a){return A.c3(a)===1},
$S:3}
A.eN.prototype={
$1(a){var t,s,r,q,p,o,n,m=this,l=new A.eO(m.a,m.b,a),k=m.c,j=m.d,i=m.e,h=l.$3(k,j,i),g=k+1,f=l.$3(g,j,i),e=l.$3(k,j,i)
if(typeof f!=="number")return f.J()
if(typeof e!=="number")return A.da(e)
t=m.f
if(typeof h!=="number")return h.bd()
s=h+(f-e)*t
e=j+1
f=l.$3(k,e,i)
h=l.$3(g,e,i)
r=l.$3(k,e,i)
if(typeof h!=="number")return h.J()
if(typeof r!=="number")return A.da(r)
if(typeof f!=="number")return f.bd();++i
q=l.$3(k,j,i)
p=l.$3(g,j,i)
j=l.$3(k,j,i)
if(typeof p!=="number")return p.J()
if(typeof j!=="number")return A.da(j)
if(typeof q!=="number")return q.bd()
o=q+(p-j)*t
j=l.$3(k,e,i)
g=l.$3(g,e,i)
i=l.$3(k,e,i)
if(typeof g!=="number")return g.J()
if(typeof i!=="number")return A.da(i)
if(typeof j!=="number")return j.bd()
e=m.r
n=s+(f+(h-r)*t-s)*e
return n+(o+(j+(g-i)*t-o)*e-n)*m.w},
$S:1}
A.eO.prototype={
$3(a,b,c){var t=this.b,s=this.a.a
s=((c*s+b)*s+a)*3+this.c
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
$S:10}
A.cd.prototype={
gcw(){var t=this.b
return t.b==null&&t.c==null?"No face found, so the sticker was not placed.":"No face found, so the sticker was skipped."},
b6(a,b,c,d){var t,s,r,q,p
u.j.a(b)
t=this.b
s=t.b
if(s!=null)s.eS(a,d)
r=t.c
if(r!=null)A.kb(a,r,d)
q=t.d
if(q!=null)for(t=b.length,p=0;p<b.length;b.length===t||(0,A.D)(b),++p)A.kc(a,b[p],q,d)},
gb4(){return this.a},
gb5(){return this.c}}
A.ev.prototype={
cD(a,b){var t,s,r,q,p,o,n,m,l,k=this,j={},i=k.a,h=i.a,g=i.b
if(a<-0.5||b<-0.5||a>h-0.5||b>g-0.5)return!1
t=B.a.u(a,0,h-1)
s=B.a.u(b,0,g-1)
r=Math.min(B.a.K(t),Math.max(0,h-2))
q=Math.min(B.a.K(s),Math.max(0,g-2))
p=h===1?0:t-r
o=g===1?0:s-q
j.a=j.b=j.c=j.d=0
i=new A.fQ(j,g,h,i.c)
n=1-p
m=1-o
i.$3(r,q,n*m)
l=r+1
i.$3(l,q,p*m)
m=q+1
i.$3(r,m,n*o)
i.$3(l,m,p*o)
i=j.a
if(i<=0.0001)return!1
k.b=j.d/i/255
k.c=j.c/i/255
k.d=j.b/i/255
k.e=i
return!0}}
A.fQ.prototype={
$3(a,b,c){var t,s,r,q,p,o,n,m=this
if(c<=0)return
t=m.b
t=b<t?b:t-1
s=m.c
r=a<s?a:s-1
q=(t*s+r)*4
r=m.d
s=q+3
t=r.length
if(!(s>=0&&s<t))return A.a(r,s)
p=r[s]/255*c
s=m.a
o=s.d
if(!(q>=0&&q<t))return A.a(r,q)
s.d=o+r[q]*p
o=s.c
n=q+1
if(!(n<t))return A.a(r,n)
s.c=o+r[n]*p
n=s.b
o=q+2
if(!(o<t))return A.a(r,o)
s.b=n+r[o]*p
s.a+=p},
$S:11}
A.S.prototype={
ae(){return"StickerAnchor."+this.b}}
A.fp.prototype={}
A.fy.prototype={}
A.eP.prototype={}
A.eS.prototype={
$1(a){return u.X.a(a).b===this.a},
$S:12}
A.eT.prototype={
$1(a){return u.X.a(a).b},
$S:13}
A.z.prototype={
D(a){return this.a}}
A.fB.prototype={}
A.e4.prototype={}
A.h5.prototype={
$1(a){return u.ce.a(a).gb4()===this.a},
$S:14}
A.h6.prototype={
$0(){return A.aL(A.db("Unknown filter "+this.a))},
$S:15}
A.dD.prototype={
gb4(){return"glow_makeup"},
gb5(){return B.bL},
b6(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h
u.j.a(b)
for(t=b.length,s=0.85*d,r=0.75*d,q=0.6*d,p=0.55*d,o=0;o<b.length;b.length===t||(0,A.D)(b),++o){n=b[o]
m=new A.a1(n)
l=new A.bU(a,n,m)
m=m.be()
l.d=m
k=n.t(B.e)
j=n.t(B.f)
i=k.a-j.a
j=k.b-j.b
A.eD(a,m,Math.max(1,Math.sqrt(i*i+j*j)),q,0.05)
l.f5(B.cs,s)
l.cv(s)
l.cq(r,0.022,0.2)
l.dq(q)
l.dl(B.cl,p)
l.cu(B.cw,s,q)
l.f8(d,B.cu)}A.by(a,B.bh.b7(d))
h=c.b.i(0,"glow")
A.eB(a,0.04,0.65*(h==null?0.6:h)*d,0.5,B.c6)
A.lT(a,0.18*d)}}
A.dQ.prototype={
gb4(){return"light"},
gb5(){return B.bM},
b6(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i
u.j.a(b)
A.by(a,B.bi.b7(d))
A.jf(a,0.018,0.2*d)
A.eB(a,0.04,0.32*d,0.65,B.aj)
t=c.dz("protectFace",!0)
for(s=b.length,r=0.18*d,q=0.25*d,p=0;p<b.length;b.length===s||(0,A.D)(b),++p){o=b[p]
n=new A.a1(o)
m=n.bl(o.M(B.n),0.25)
A.bz(a,m,B.y,1,0.97,0.95,r)
l=n.be()
k=o.t(B.e)
j=o.t(B.f)
i=k.a-j.a
j=k.b-j.b
A.eD(a,l,Math.max(1,Math.sqrt(i*i+j*j)),q,0.05)
if(t)this.eI(a,m,d)}},
eI(a,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(t=a0.d,s=a0.c,r=a.c,q=r.length,p=r.$flags|0,o=a0.b,n=a.a,m=a0.a,l=a0.r,k=l.length,j=0;j<t;++j)for(i=(j+o)*n,h=j*s,g=0;g<s;++g){f=h+g
if(!(f>=0&&f<k))return A.a(l,f)
e=l[f]*a1
if(e<=0.01)continue
d=(i+g+m)*3
for(c=0;c<3;++c){f=d+c
if(!(f>=0&&f<q))return A.a(r,f)
b=r[f]
if(b>0.78){p&2&&A.b(r)
r[f]=b+(0.78+(b-0.78)*0.45-b)*e}}}}}
A.dU.prototype={
gb4(){return"neon_lines"},
gb5(){return B.bN},
b6(b2,b3,b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
u.j.a(b3)
t=b4.b.i(0,"glow")
s=0.5+(t==null?0.5:t)
r=b3.length===0?A.m1(b2):null
A.by(b2,B.be.b7(b5))
if(r!=null){this.ez(b2,r,b5,s)
return}for(t=b3.length,q=0.9*b5,p=u.n,o=0.85*b5,n=b2.a,m=b2.b,l=u._,k=u.A,j=0;j<b3.length;b3.length===t||(0,A.D)(b3),++j){i=b3[j]
h=i.t(B.e)
g=i.t(B.f)
f=h.a-g.a
g=h.b-g.b
e=Math.max(1,Math.sqrt(f*f+g*g))
d=[new A.T(B.ao,A.k([i.M(B.n)],k),!0),new A.T(B.a5,A.k([A.hn(i.M(B.n),1.1)],k),!0),new A.T(B.a5,A.k([i.M(B.e),i.M(B.f)],k),!0),new A.T(B.cp,A.k([i.M(B.aA),i.M(B.au)],k),!1),new A.T(B.a5,A.k([i.M(B.c.c5(B.cj,1)),i.M(B.cv)],k),!1),new A.T(B.ao,A.k([i.M(B.A)],k),!0)]
for(h=e*0.012,g=e*0.022,f=e*0.12,c=e*0.07*s,b=e*0.011,a=e*0.35*s,a0=e*0.05,a1=0;a1<6;++a1){a2=d[a1]
a3=A.k([],l)
for(a4=a2.b,a5=J.ay(a4),a6=a5.gA(a4);a6.v();)B.c.aW(a3,a6.gE())
a7=A.al(n,m,a3,a)
a8=A.al(n,m,a3,a0)
for(a6=a5.gA(a4),a9=a2.c;a6.v();){b0=a6.gE()
a7.c4(b0,h,a9,c)
a8.c4(b0,b,a9,0.75)}a6=a2.a
b0=J.K(a6)
A.bz(b2,a7,B.y,b0.i(a6,0),b0.i(a6,1),b0.i(a6,2),o)
b1=A.al(n,m,a3,f)
for(a3=a5.gA(a4);a3.v();)b1.c4(a3.gE(),h,a9,g)
A.bz(b2,b1,B.y,b0.i(a6,0),b0.i(a6,1),b0.i(a6,2),q)
a3=A.k([],p)
for(a4=b0.gA(a6);a4.v();)a3.push(0.55+0.45*a4.gE())
a4=a3.length
if(0>=a4)return A.a(a3,0)
a5=a3[0]
if(1>=a4)return A.a(a3,1)
a6=a3[1]
if(2>=a4)return A.a(a3,2)
A.bz(b2,a8,B.y,a5,a6,a3[2],b5)}}},
ez(a4,a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=a4.a,a2=a4.b,a3=new Float32Array(A.E(a5))
A.U(a3,a1,a2,1,Math.max(1,Math.max(a1,a2)*0.006*a7))
t=a4.c
for(s=t.$flags|0,r=t.length,q=a5.length,p=a3.length,o=0;o<a2;++o)for(n=o*a1,m=o/a2,l=0;l<a1;++l){k=n+l
j=(l/a1+m)/2
i=[1+-0.85*j,0.18+0.72*j,0.78+0.21999999999999997*j]
if(!(k>=0&&k<p))return A.a(a3,k)
h=a3[k]*2.2
if(h<0)h=0
else if(h>1)h=1
if(!(k<q))return A.a(a5,k)
g=h*0.8*a6+a5[k]*0.7*a6
if(g<=0.003)continue
for(h=g>1,f=g<0,e=k*3,d=0;d<3;++d){c=e+d
if(!(c>=0&&c<r))return A.a(t,c)
b=t[c]
a=i[d]
if(f)a0=0
else a0=h?1:g
s&2&&A.b(t)
t[c]=1-(1-b)*(1-a*a0)}}}}
A.R.prototype={
eT(a,b,c){var t,s,r=A.ki(c),q=A.k([],u.x),p=a.gfn(),o=p.length,n=c.a,m=c.b,l=0
for(;l<p.length;p.length===o||(0,A.D)(p),++l)q.push(new A.ch(p[l],n,m))
t=B.a.u(b.a,0,1)
if(t>0)this.b6(r,q,b,t)
s=this.gb5().d&&q.length===0?this.gcw():null
return new A.fu(r.fj(),q.length,s)},
gcw(){return"No face found, so only the overall look was applied."}}
A.e7.prototype={
gb4(){return"rosy_haze"},
gb5(){return B.bO},
b6(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
u.j.a(b)
for(t=b.length,s=0.7*d,r=0.5*d,q=0.3*d,p=0;p<b.length;b.length===t||(0,A.D)(b),++p){o=b[p]
n=new A.a1(o)
m=new A.bU(a,o,n)
l=n.be()
m.d=l
k=o.t(B.e)
j=o.t(B.f)
i=k.a-j.a
j=k.b-j.b
A.eD(a,l,Math.max(1,Math.sqrt(i*i+j*j)),q,0.05)
m.dm(B.ci,s,1.15)
m.cu(B.c9,s,r)
h=n.cn(0.0001)
n=o.C(1)
j=o.t(B.e)
i=o.t(B.f)
l=j.a-i.a
i=j.b-i.b
i=Math.max(1,Math.sqrt(l*l+i*i))
l=o.t(B.e)
j=o.t(B.f)
k=l.a-j.a
j=l.b-j.b
h.bh(n,i*0.12,Math.max(1,Math.sqrt(k*k+j*j))*0.08,0,0.6)
A.bz(a,h,B.u,0.93,0.42,0.52,r)}g=c.b.i(0,"haze")
if(g==null)g=0.5
A.by(a,B.bd.b7(d))
A.lP(a,B.ch,0.55*g*d)
A.eB(a,0.035,0.45*d,0.55,B.cd)}}
A.ea.prototype={
gb4(){return"serum"},
gb5(){return B.bP},
b6(a,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
u.j.a(a0)
A.by(a,B.bg.b7(a2))
for(t=a0.length,s=0.25*a2,r=a1.b,q=0.9*a2,p=0.55*a2,o=0.7*a2,n=0.6*a2,m=0.35*a2,l=0.75*a2,k=a1.c,j=0,i=0;i<a0.length;a0.length===t||(0,A.D)(a0),++i){h=a0[i]
g=new A.a1(h)
f=new A.bU(a,h,g)
e=g.be()
f.d=e
d=h.t(B.e)
c=h.t(B.f)
b=d.a-c.a
c=d.b-c.b
A.eD(a,e,Math.max(1,Math.sqrt(b*b+c*c)),l,0.06)
f.f9(q,1.1)
f.dq(p)
f.cv(o)
f.cq(n,0.022,0.12)
f.dl(B.cc,m)
f.cu(B.cB,p,q)
e=r.i(0,"freckles")
if(e==null)e=0
if(e>=0.5){e=f.d
if(e==null)e=f.d=g.be()
A.jp(a,h,e,0.4,n,k+31*j)}e=f.d
A.bz(a,e==null?f.d=g.be():e,B.u,1,0.95,0.92,s);++j}A.eB(a,0.02,s,0.72,B.aj)}}
A.ec.prototype={
gb4(){return"soft_freckles"},
gb5(){return B.bQ},
b6(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
u.j.a(b)
A.by(a,B.bk.b7(d))
for(t=b.length,s=0.35*d,r=0.25*d,q=c.c,p=c.b,o=0,n=0;n<b.length;b.length===t||(0,A.D)(b),++n,o=g){m=b[n]
l=new A.a1(m)
k=l.be()
j=m.t(B.e)
i=m.t(B.f)
h=j.a-i.a
i=j.b-i.b
A.eD(a,k,Math.max(1,Math.sqrt(h*h+i*i)),s,0.05)
A.bz(a,l.cn(1.1),B.u,0.95,0.55,0.45,r)
g=o+1
i=p.i(0,"density")
j=i==null?0.55:i
A.jp(a,m,k,j,d,q+7919*o)}}}
A.ed.prototype={
gb4(){return"soft_glam"},
gb5(){return B.bR},
gcw(){return"No face found. Soft Glam retouches faces, so the photo is unchanged."},
b6(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u.j.a(b)
if(b.length===0)return
t=a0.b
s=t.i(0,"smooth")
r=B.a.u(s==null?0.85:s,0,1)*a1
s=t.i(0,"slim")
q=B.a.u(s==null?0.6:s,0,1)*a1
t=t.i(0,"eyes")
p=B.a.u(t==null?0.7:t,0,1)*a1
o=a0.dz("light_iris",!0)
for(t=b.length,s=0.25*p,n=0.12*p,m=0.7*r,l=0.3*r,k=0.85*a1,j=0.85*p,i=0.9*p,h=0.85*r,g=u.ff,f=0;f<b.length;b.length===t||(0,A.D)(b),++f){e=b[f]
d=A.lR(a,e,new A.fx(0.13,0.03,r,0.15,h,a1,a1,4))
if(d!=null)A.lS(a,A.k([d],g),1)
A.mr(a,e,m,l)
A.mp(a,e,m,k)
A.m2(a,e,i,B.c8,o?0.9:0,j)
c=new A.bU(a,e,new A.a1(e))
c.cv(s)
c.cq(n,0.011,0.04)}A.by(a,B.bj.b7(a1))
A.jf(a,0.015,0.08*a1)
for(t=b.length,s=0.45*a1,f=0;f<b.length;b.length===t||(0,A.D)(b),++f)A.lO(a,b[f],new A.f0(q,q,p,s))}}
A.ei.prototype={
gb4(){return"sunny_effect"},
gb5(){return B.bS},
b6(a,b,c,d){var t
u.j.a(b)
A.by(a,B.bf.b7(d))
t=c.b.i(0,"sunGlow")
A.lQ(a,0.92,-0.05,0.75,B.c5,0.45*((t==null?0.6:t)*d))
A.eB(a,0.025,0.25*d,0.7,B.bY)}}
A.C.prototype={
bd(a,b){return new A.C(this.a+b.a,this.b+b.b)},
J(a,b){return new A.C(this.a-b.a,this.b-b.b)},
aQ(a,b){return new A.C(this.a*b,this.b*b)},
gj(a){var t=this.a,s=this.b
return Math.sqrt(t*t+s*s)},
ai(a,b){var t=this.a,s=this.b
return new A.C(t+(a.a-t)*b,s+(a.b-s)*b)},
D(a){return"Vec2("+B.a.dI(this.a,1)+", "+B.a.dI(this.b,1)+")"}}
A.dB.prototype={}
A.ch.prototype={
C(a){var t,s=this.a.a,r=a*2,q=s.length
if(!(r>=0&&r<q))return A.a(s,r)
t=s[r];++r
if(!(r<q))return A.a(s,r)
return new A.C(t*this.b,s[r]*this.c)},
M(a){var t,s
u.L.a(a)
t=A.k([],u._)
for(s=J.b1(a);s.v();)t.push(this.C(s.gE()))
return t},
t(a){var t,s,r,q,p
u.L.a(a)
for(t=J.ay(a),s=t.gA(a),r=0,q=0;s.v();){p=this.C(s.gE())
r+=p.a
q+=p.b}return new A.C(r/t.gj(a),q/t.gj(a))},
dn(a){var t,s,r,q,p,o,n,m
u.L.a(a)
for(t=1/0,s=1/0,r=-1/0,q=-1/0,p=0;p<36;++p){o=this.C(a[p])
n=o.a
t=Math.min(t,n)
m=o.b
s=Math.min(s,m)
r=Math.max(r,n)
q=Math.max(q,m)}return new A.bu([t,s,r,q])},
gdG(){var t=A.n(this.M(B.aA),u.a),s=this.M(B.aB)
B.c.aW(t,new A.aH(s,A.X(s).l("aH<1>")))
return t},
gdC(){var t=A.n(this.M(B.au),u.a),s=this.M(B.av)
B.c.aW(t,new A.aH(s,A.X(s).l("aH<1>")))
return t}}
A.f_.prototype={
gfn(){var t,s,r,q,p=A.k([],u.q)
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,A.D)(t),++r){q=t[r]
if((q.a.length/2|0)>=468)p.push(q)}return p}}
A.dw.prototype={
ae(){return"ControlKind."+this.b}}
A.Z.prototype={}
A.aj.prototype={}
A.f1.prototype={
dz(a,b){var t=this.b.i(0,a)
if(t==null)t=b?1:0
return t>=0.5}}
A.f2.prototype={
$2(a,b){return new A.aV(A.Y(a),A.d8(b),u.U)},
$S:16}
A.dS.prototype={}
A.fu.prototype={}
A.aG.prototype={
ae(){return"PixelBlend."+this.b}}
A.ah.prototype={
b7(a){var t,s,r,q=this,p=u.n,o=A.k([],p)
for(t=q.z,s=t.length,r=0;r<t.length;t.length===s||(0,A.D)(t),++r)o.push(t[r]*a)
p=A.k([],p)
for(t=q.Q,s=t.length,r=0;r<t.length;t.length===s||(0,A.D)(t),++r)p.push(t[r]*a)
return new A.ah(q.a*a,q.b*a,q.c*a,q.d*a,q.e*a,q.f*a,q.r*a,q.w*a,q.x*a,q.y*a,o,p)}}
A.hk.prototype={
$1(a){a=B.a.u(a,0,1)
return a<=0.04045?a/12.92:Math.pow((a+0.055)/1.055,2.4)},
$S:0}
A.hj.prototype={
$1(a){return a>0.008856?Math.pow(a,0.3333333333333333):7.787*a+0.13793103448275862},
$S:0}
A.he.prototype={
$1(a){var t=a*a*a
return t>0.008856?t:(a-0.13793103448275862)/7.787},
$S:0}
A.hd.prototype={
$1(a){a=B.a.u(a,0,1)
return a<=0.0031308?12.92*a:1.055*Math.pow(a,0.4166666666666667)-0.055},
$S:0}
A.eY.prototype={
bc(a,b){var t=a.a-b.a,s=a.b-b.b,r=this.a,q=this.b
return new A.I(t*r+s*q,-t*q+s*r)},
bC(a,b){var t=this.a,s=this.b
return new A.I(a*t-b*s,a*s+b*t)}}
A.fn.prototype={
gbb(a){return this.c<=0||this.d<=0},
by(a,b){var t,s,r=this,q=a-r.a,p=b-r.b
if(q<0||p<0||q>=r.c||p>=r.d)return 0
t=r.r
s=p*r.c+q
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
bV(a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this
u.E.a(a6)
if(a6.length<3||a5.gbb(0))return
t=A.k([],u.n)
for(s=a5.d,r=a5.r,q=r.length,p=a5.c,o=r.$flags|0,n=a5.a,m=p-1,l=a5.b,k=0;k<s;++k){j=k+l+0.5
B.c.eU(t)
for(i=0;h=a6.length,i<h;){g=a6[i];++i
f=a6[i%h]
h=g.b
if(!(h<=j&&f.b>j))e=f.b<=j&&h>j
else e=!0
if(e){e=g.a
B.c.L(t,e+(j-h)/(f.b-h)*(f.a-e))}}if(t.length<2)continue
B.c.dT(t)
for(h=k*p,d=0;e=d+1,c=t.length,e<c;d+=2){if(!(d<c))return A.a(t,d)
b=t[d]-n
a=t[e]-n
a0=Math.max(0,B.a.K(b))
a1=Math.min(m,B.a.K(a))
for(a2=a0;a2<=a1;a2=a3){a3=a2+1
a4=B.a.u(Math.min(a3,a)-Math.max(a2,b),0,1)
i=h+a2
if(!(i>=0&&i<q))return A.a(r,i)
if(a4>r[i]){o&2&&A.b(r)
r[i]=a4}}}}},
cK(b3,b4,b5,b6,b7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=b5+b6*3+1,a=b3.a,a0=b4.a,a1=c.a,a2=Math.max(0,B.a.K(Math.min(a,a0)-b-a1)),a3=c.c,a4=Math.min(a3-1,B.a.Z(Math.max(a,a0)+b-a1)),a5=b3.b,a6=b4.b,a7=c.b,a8=Math.max(0,B.a.K(Math.min(a5,a6)-b-a7)),a9=Math.min(c.d-1,B.a.Z(Math.max(a5,a6)+b-a7)),b0=a0-a,b1=a6-a5,b2=b0*b0+b1*b1
for(a0=c.r,a6=a0.length,t=2*b6*b6,s=b6<=0.75,r=b2===0,q=a0.$flags|0,p=a8;p<=a9;++p){o=p+a7+0.5
for(n=p*a3,m=(o-a5)*b1,l=a2;l<=a4;++l){k=l+a1+0.5
j=r?0:((k-a)*b0+m)/b2
if(j<0)j=0
else if(j>1)j=1
i=k-(a+b0*j)
h=o-(a5+b1*j)
g=Math.sqrt(i*i+h*h)-b5
if(g<=0)f=1
else if(s){e=1-g/Math.max(0.75,b6)
if(e<0)f=0
else f=e>1?1:e}else f=Math.exp(-(g*g)/t)
f*=b7
d=n+l
if(!(d>=0&&d<a6))return A.a(a0,d)
if(f>a0[d]){q&2&&A.b(a0)
a0[d]=f}}}},
cJ(a,b,c,d){return this.cK(a,b,c,d,1)},
c4(a,b,c,d){var t,s,r,q
u.E.a(a)
t=J.K(a)
s=c?t.gj(a):t.gj(a)-1
for(t=J.K(a),r=0;r<s;r=q){q=r+1
this.cK(t.i(a,r),t.i(a,B.b.aZ(q,t.gj(a))),b,d,1)}},
bh(a7,a8,a9,b0,b1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=Math.max(a8,a9)*2.2,d=a7.a,c=f.a,b=Math.max(0,B.a.K(d-e-c)),a=f.c,a0=Math.min(a-1,B.a.Z(d+e-c)),a1=a7.b,a2=f.b,a3=Math.max(0,B.a.K(a1-e-a2)),a4=Math.min(f.d-1,B.a.Z(a1+e-a2)),a5=Math.cos(b0),a6=Math.sin(b0)
for(t=f.r,s=t.length,r=t.$flags|0,q=a3;q<=a4;++q){p=q+a2+0.5-a1
for(o=p*a6,n=p*a5,m=q*a,l=b;l<=a0;++l){k=l+c+0.5-d
j=(k*a5+o)/a8
i=(-k*a6+n)/a9
h=Math.exp(-(j*j+i*i)*1.4)*b1
g=m+l
if(!(g>=0&&g<s))return A.a(t,g)
if(h>t[g]){r&2&&A.b(t)
t[g]=h}}}},
cm(a,b,c,d){return this.bh(a,b,c,d,1)},
b3(a){var t=this
if(t.gbb(0))return
A.U(t.r,t.c,t.d,1,a)},
bI(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(t=f.d,s=f.c,r=f.a,q=f.b,p=f.r,o=p.length,n=0;n<t;++n)for(m=n+q,l=n*s,k=0;k<s;++k){j=a.by(k+r,m)
if(j>0){i=l+k
if(!(i>=0&&i<o))return A.a(p,i)
h=p[i]
g=j*b
if(g<0)g=0
else if(g>1)g=1
p.$flags&2&&A.b(p)
p[i]=h*(1-g)}}},
aT(a){return this.bI(a,1)},
bZ(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(t=f.d,s=f.c,r=f.r,q=r.length,p=f.a,o=f.b,n=r.$flags|0,m=0;m<t;++m)for(l=m*s,k=m+o,j=0;j<s;++j){i=l+j
if(!(i>=0&&i<q))return A.a(r,i)
h=r[i]
g=a.by(j+p,k)
n&2&&A.b(r)
r[i]=h*g}}}
A.a1.prototype={
bf(a,b,c){var t,s,r,q
u.E.a(a)
t=c===1?a:A.hn(a,c)
s=this.a
r=b*Math.max(1,s.t(B.e).J(0,s.t(B.f)).gj(0))
q=A.al(s.b,s.c,t,r*3+2)
q.bV(t)
if(r>0.4)q.b3(r)
return q},
bl(a,b){return this.bf(a,b,1)},
dD(a){var t=this.a,s=this.bl(t.M(B.A),a)
s.aT(this.bf(t.M(B.cg),a*0.5,1.05))
return s},
ff(){return this.dD(0.025)},
ba(a,b){var t=this,s=t.a
return t.d9(t.bf(s.M(B.e),a,b),t.bf(s.M(B.f),a,b))},
bQ(a,b){var t=this,s=t.a
return t.d9(t.bf(s.gdG(),a,b),t.bf(s.gdC(),a,b))},
be(){var t=this,s=t.a,r=t.bl(s.M(B.n),0.08)
r.aT(t.ba(0.06,1.6))
r.bI(t.bQ(0.05,1.3),0.9)
r.aT(t.bf(s.M(B.A),0.04,1.12))
return r},
cn(a){var t,s,r,q,p,o,n,m,l,k,j=this.a,i=A.al(j.b,j.c,j.M(B.n),0)
for(t=[B.da,B.d9],s=0;s<2;++s){r=t[s]
q=r.b
p=j.C(r.a).ai(j.C(q),0.25)
o=j.C(q)
n=r.c
m=j.C(n)
l=Math.atan2(o.b-m.b,o.a-m.a)
q=j.C(q)
n=j.C(n)
m=q.a-n.a
n=q.b-n.b
k=Math.sqrt(m*m+n*n)
n=j.t(B.e)
m=j.t(B.f)
q=n.a-m.a
m=n.b-m.b
m=Math.max(k*0.6,Math.max(1,Math.sqrt(q*q+m*m))*0.12)
q=j.t(B.e)
n=j.t(B.f)
o=q.a-n.a
n=q.b-n.b
i.bh(p,m*a,Math.max(1,Math.sqrt(o*o+n*n))*0.22*a,l,0.85)}i.aT(this.ba(0.08,1.8))
return i},
dJ(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.a,b=A.n(c.M(B.e),u.a)
B.c.aW(b,c.M(B.f))
t=A.al(c.b,c.c,b,Math.max(1,c.t(B.e).J(0,c.t(B.f)).gj(0))*0.5)
for(b=[B.ap,B.aw],s=a0>0,r=0;r<2;++r){q=c.M(b[r])
for(p=q.length-1,o=0;o<p;o=k){n=c.t(B.e)
m=c.t(B.f)
l=n.a-m.a
m=n.b-m.b
m=Math.max(1,Math.sqrt(l*l+m*m))
l=q.length
if(!(o<l))return A.a(q,o)
n=q[o]
k=o+1
if(!(k<l))return A.a(q,k)
l=q[k]
j=c.t(B.e)
i=c.t(B.f)
h=j.a-i.a
i=j.b-i.b
t.cJ(n,l,m*a*(0.45+0.75*(1-o/p)),Math.max(1,Math.sqrt(h*h+i*i))*0.008)}if(s){p=q.length
if(0>=p)return A.a(q,0)
g=q[0]
if(2>=p)return A.a(q,2)
p=q[2]
n=g.a
m=n-p.a
l=g.b
p=l-p.b
f=Math.max(0.001,Math.sqrt(m*m+p*p))
j=c.t(B.e)
i=c.t(B.f)
h=j.a-i.a
i=j.b-i.b
i=Math.max(1,Math.sqrt(h*h+i*i))*a0
h=c.t(B.e)
j=c.t(B.f)
e=h.a-j.a
j=h.b-j.b
j=Math.max(1,Math.sqrt(e*e+j*j))
e=c.t(B.e)
h=c.t(B.f)
d=e.a-h.a
h=e.b-h.b
t.cJ(g,new A.C(n+m/f*i,l+(p/f-0.45)*i),j*a*0.55,Math.max(1,Math.sqrt(d*d+h*h))*0.01)}}return t},
fm(a){return this.dJ(a,0)},
f4(){var t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=u.a,f=A.n(h.gdG(),g)
B.c.aW(f,h.gdC())
B.c.aW(f,h.M(B.e))
B.c.aW(f,h.M(B.f))
t=A.al(h.b,h.c,f,Math.max(1,h.t(B.e).J(0,h.t(B.f)).gj(0))*0.3)
for(f=[B.d2,B.d8],s=u.fv,r=u._,q=0;q<2;++q){p=f[q]
o=h.M(p.a)
n=h.M(p.b)
m=A.k([],r)
for(l=0;k=o.length,l<k;++l){j=n.length
i=B.a.aH(l/(k-1)*(j-1))
k=o[l]
if(!(i>=0&&i<j))return A.a(n,i)
B.c.L(m,k.ai(n[i],0.45))}k=A.n(o,g)
B.c.aW(k,new A.aH(m,s))
t.bV(k)}t.b3(Math.max(1,h.t(B.e).J(0,h.t(B.f)).gj(0))*0.05)
t.aT(this.ba(0.01,1.05))
return t},
fa(a){var t,s,r,q,p,o,n,m,l,k,j=this.a,i=A.al(j.b,j.c,j.M(B.n),0),h=j.C(197).ai(j.C(5),0.4),g=j.C(5).J(0,j.C(168))
i.bh(h,Math.max(1,j.t(B.e).J(0,j.t(B.f)).gj(0))*0.06*a,g.gj(0)*0.35*a,Math.atan2(g.b,g.a)-1.5707963267948966,0.85)
for(t=[B.cZ,B.d0],s=0;s<2;++s){r=t[s]
q=r.a
p=r.b
o=j.C(q).ai(j.C(p),0.55)
p=j.C(p)
q=j.C(q)
n=p.a-q.a
q=p.b-q.b
p=Math.sqrt(n*n+q*q)
m=j.t(B.e)
l=j.t(B.f)
k=m.a-l.a
l=m.b-l.b
l=Math.max(p*0.7,Math.max(1,Math.sqrt(k*k+l*l))*0.06)
k=j.t(B.e)
p=j.t(B.f)
m=k.a-p.a
p=k.b-p.b
i.cm(o,l*a,Math.max(1,Math.sqrt(m*m+p*p))*0.07*a,Math.atan2(q,n))}i.bh(j.C(0).bd(0,j.C(0).J(0,j.C(13)).aQ(0,0.6)),Math.max(1,j.t(B.e).J(0,j.t(B.f)).gj(0))*0.06*a,Math.max(1,j.t(B.e).J(0,j.t(B.f)).gj(0))*0.025*a,0,0.6)
i.bh(j.C(152).ai(j.C(17),0.45),Math.max(1,j.t(B.e).J(0,j.t(B.f)).gj(0))*0.08*a,Math.max(1,j.t(B.e).J(0,j.t(B.f)).gj(0))*0.05*a,0,0.5)
i.aT(this.ba(0.05,1.6))
return i},
d9(a,b){var t,s,r,q,p,o,n=a.a,m=b.a,l=Math.min(n,m),k=a.b,j=b.b,i=Math.min(k,j),h=this.a,g=A.iC(l,i,Math.max(n+a.c,m+b.c)-l,Math.max(k+a.d,j+b.d)-i,h.b,h.c)
for(n=g.d,m=g.c,k=g.r,j=k.$flags|0,t=0;t<n;++t)for(s=t+i,h=t*m,r=0;r<m;++r){q=r+l
p=h+r
o=Math.max(a.by(q,s),b.by(q,s))
j&2&&A.b(k)
if(!(p>=0&&p<k.length))return A.a(k,p)
k[p]=o}return g}}
A.f0.prototype={}
A.cY.prototype={
bP(a,b,c,d){var t,s,r=this,q=r.a,p=q.bc(new A.C(b,c),r.b),o=p.a,n=p.b,m=r.c,l=r.d,k=o*o/(m*m)+n*n/(l*l)
if(k>=1)return
m=1-k
t=m*m
s=q.bC(-r.e*t*o,-r.f*t*n)
q=d[0]
d.$flags&2&&A.b(d)
d[0]=q+s.a
d[1]=d[1]+s.b},
$ibv:1}
A.et.prototype={
bP(a,b,c,d){var t,s=this,r=s.a,q=r.bc(new A.C(b,c),s.b),p=q.a,o=q.b,n=s.c,m=s.d,l=p*p/(n*n)+o*o/(m*m)
if(l>=1)return
n=1-l
t=r.bC(0,s.e*(n*n)*m)
m=d[0]
d.$flags&2&&A.b(d)
d[0]=m+t.a
d[1]=d[1]+t.b},
$ibv:1}
A.ew.prototype={
bP(a,b,c,d){var t,s=this,r=s.a,q=r.bc(new A.C(b,c),s.b),p=q.a,o=q.b,n=o<0?s.d:s.e,m=s.c,l=p*p/(m*m)+o*o/(n*n)
if(l>=1)return
m=1-l
t=r.bC(s.f*(m*m)*p,0)
m=d[0]
d.$flags&2&&A.b(d)
d[0]=m+t.a
d[1]=d[1]+t.b},
$ibv:1}
A.eq.prototype={
e1(a,b,c){var t,s,r,q,p,o,n=this,m=a.C(168)
n.b!==$&&A.aM()
n.b=m
t=u.J
s=A.k([],t)
for(r=a.M(B.n),q=r.length,p=n.a,o=0;o<r.length;r.length===q||(0,A.D)(r),++o)s.push(p.bc(r[o],m))
r=u.hd
r.a(s)
n.c!==$&&A.aM()
n.c=s
t=A.k([],t)
for(o=0;o<10;++o)t.push(p.bc(a.C(B.cx[o]),m))
B.c.cG(t,new A.fN())
r.a(t)
n.d!==$&&A.aM()
n.d=t
m=new A.fO(n,a)
t=m.$1(234)
s=m.$1(454)
if(typeof t!=="number")return t.bd()
if(typeof s!=="number")return A.da(s)
n.e!==$&&A.aM()
n.e=(t+s)/2
s=m.$1(61)
t=m.$1(291)
if(typeof s!=="number")return s.bd()
if(typeof t!=="number")return A.da(t)
n.f!==$&&A.aM()
n.f=(s+t)/2
m=A.c3(m.$1(152))
n.r!==$&&A.aM()
n.r=m
n.w!==$&&A.aM()
n.w=0.13*c},
ex(a){var t,s,r,q,p,o,n,m=this.d
m===$&&A.c()
if(a<=B.c.gdw(m).b)return B.c.gdw(m).a
for(t=m.length,s=1;s<t;++s){r=m[s]
q=r.b
if(a<=q){p=m[s-1]
t=p.b
o=q-t
n=o<=0.000001?0:(a-t)/o
m=p.a
return m+(r.a-m)*n}}return B.c.gct(m).a},
ei(a){var t,s,r,q,p,o,n,m,l,k=this.c
k===$&&A.c()
t=k.length
s=1/0
r=-1/0
q=0
while(q<t){p=k[q];++q
o=k[q%t]
n=p.b
if(!(n<=a&&o.b>a))m=o.b<=a&&n>a
else m=!0
if(m){m=p.a
l=m+(o.a-m)*((a-n)/(o.b-n))
s=Math.min(s,l)
r=Math.max(r,l)}}return s<r?new A.I(s,r):null},
bP(a,b,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.w
c===$&&A.c()
if(c<=0)return
t=d.a
s=d.b
s===$&&A.c()
r=t.bc(new A.C(b,a0),s)
q=r.b
s=d.e
s===$&&A.c()
if(!(q<=s)){p=d.r
p===$&&A.c()
p=q>=p}else p=!0
if(p)return
p=d.f
p===$&&A.c()
o=A.ia(s,p,q)
if(o<=0)return
n=B.a.aH(q)
m=d.x.fg(n,new A.fM(d,n))
if(m==null)return
l=m.a
k=m.b
j=m.c
i=r.a-l
s=i>=0
h=s?j-l:l-k
if(h<=1)return
g=Math.abs(i)
c=c*o*h
f=g<=h?c*A.ia(h*0.45,h,g):c*(1-A.ia(h,h*1.6,g))
if(f===0)return
e=t.bC(s?f:-f,0)
c=a1[0]
a1.$flags&2&&A.b(a1)
a1[0]=c+e.a
a1[1]=a1[1]+e.b},
$ibv:1}
A.fN.prototype={
$2(a,b){var t=u.a6
return B.a.bn(t.a(a).b,t.a(b).b)},
$S:17}
A.fO.prototype={
$1(a){var t=this.a,s=this.b.C(a),r=t.b
r===$&&A.c()
return t.a.bc(s,r).b},
$S:1}
A.fM.prototype={
$0(){var t=this.a,s=this.b,r=t.ei(s)
if(r==null)return null
return new A.T(t.ex(s),r.a,r.b)},
$S:18}
A.hi.prototype={
$1(a){var t=this.a
return B.a.u(a,-t,t)},
$S:0}
A.bU.prototype={
cu(a,b,c){var t,s,r,q,p,o
u.H.a(a)
if(b<=0)return
t=this.c.ff()
s=this.a
A.ag(s,t,B.a8,a,b*0.75)
A.ag(s,t,B.u,a,b*0.5)
if(c>0){r=this.b
q=r.C(14).ai(r.C(17),0.55)
p=r.C(291).J(0,r.C(61)).gj(0)
o=A.al(s.a,s.b,r.M(B.A),Math.max(1,r.t(B.e).J(0,r.t(B.f)).gj(0))*0.1)
o.cm(q,p*0.16,Math.max(1,r.t(B.e).J(0,r.t(B.f)).gj(0))*0.025,0)
o.bZ(t)
A.ag(s,o,B.y,B.co,c*0.6)}},
dm(a,b,c){var t,s,r
u.H.a(a)
if(b<=0)return
t=this.c
s=t.cn(c)
r=this.b
s.b3(Math.max(1,r.t(B.e).J(0,r.t(B.f)).gj(0))*0.08)
s.bZ(t.bl(t.a.M(B.n),0.06))
t=this.a
A.ag(t,s,B.a8,a,b*0.18)
A.ag(t,s,B.C,A.iB(a,0.3),b*0.45)
A.ag(t,s,B.u,a,b*0.35)},
dl(a,b){return this.dm(a,b,1)},
cq(a,b,c){if(a<=0)return
A.ag(this.a,this.c.dJ(b,c),B.C,B.cz,a)},
cv(a){var t,s,r
if(a<=0)return
t=this.c
s=t.fm(0.05)
r=this.b
s.b3(Math.max(1,r.t(B.e).J(0,r.t(B.f)).gj(0))*0.012)
s.bI(t.ba(0,0.92),0.6)
A.ag(this.a,s,B.C,B.c2,a*0.8)},
dq(a){if(a<=0)return
A.ag(this.a,this.c.bQ(0.025,1.05),B.C,B.cf,a*0.55)},
f5(a,b){var t,s
u.H.a(a)
if(b<=0)return
t=this.c.f4()
s=this.a
A.ag(s,t,B.C,A.iB(a,0.35),b*0.6)
A.ag(s,t,B.u,a,b*0.5)},
dA(a,b,c){var t,s
u.H.a(b)
if(a<=0)return
t=this.c
s=t.fa(c)
s.bZ(t.bl(t.a.M(B.n),0.04))
t=this.b
s.b3(Math.max(1,t.t(B.e).J(0,t.t(B.f)).gj(0))*0.03)
t=this.a
A.ag(t,s,B.u,b,a*0.5)
A.ag(t,s,B.y,b,a*0.18)},
f8(a,b){return this.dA(a,b,1)},
f9(a,b){return this.dA(a,B.cr,b)}}
A.dC.prototype={
fj(){var t,s,r,q,p,o,n=this.a,m=this.b,l=n*m*4,k=new Uint8Array(l)
for(t=this.c,s=t.length,r=0,q=0;q<s;r+=4,q+=3){p=A.hq(t[q])
if(!(r<l))return A.a(k,r)
k[r]=p
p=r+1
o=q+1
if(!(o<s))return A.a(t,o)
o=A.hq(t[o])
if(!(p<l))return A.a(k,p)
k[p]=o
o=r+2
p=q+2
if(!(p<s))return A.a(t,p)
p=A.hq(t[p])
if(!(o<l))return A.a(k,o)
k[o]=p
p=r+3
if(!(p<l))return A.a(k,p)
k[p]=255}return new A.dS(n,m,k)},
dt(a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
if(a4<=1)return new A.dC(a3.a,a3.b,new Float32Array(A.E(a3.c)))
t=a3.a
s=Math.max(1,B.b.ag(t,a4))
r=a3.b
q=Math.max(1,B.b.ag(r,a4))
p=A.ir(s,q)
o=p.c
n=1/(a4*a4)
for(m=o.$flags|0,l=a3.c,k=l.length,--r,j=0;j<q;++j)for(i=j*s,h=j*a4,g=0;g<s;++g){for(f=g*a4,e=0,d=0,c=0,b=0;b<a4;++b){a=(Math.min(r,h+b)*t+f)*3
for(a0=0;a0<a4;++a0){if(!(a>=0&&a<k))return A.a(l,a)
e+=l[a]
a1=a+1
if(!(a1<k))return A.a(l,a1)
d+=l[a1]
a1=a+2
if(!(a1<k))return A.a(l,a1)
c+=l[a1]
a+=3}}a2=(i+g)*3
m&2&&A.b(o)
f=o.length
if(!(a2>=0&&a2<f))return A.a(o,a2)
o[a2]=e*n
a1=a2+1
if(!(a1<f))return A.a(o,a1)
o[a1]=d*n
a1=a2+2
if(!(a1<f))return A.a(o,a1)
o[a1]=c*n}return p},
dP(a,b,a0){var t,s,r,q,p,o,n,m=this.a,l=m-1,k=B.a.u(a*m-0.5,0,l),j=this.b,i=j-1,h=B.a.u(b*j-0.5,0,i),g=B.a.K(k),f=B.a.K(h),e=Math.min(g+1,l),d=k-g,c=h-f
l=f*m
t=(l+g)*3
s=(l+e)*3
m=Math.min(f+1,i)*m
r=(m+g)*3
q=(m+e)*3
for(m=this.c,l=m.length,j=a0.$flags|0,p=0;p<3;++p){i=t+p
if(!(i>=0&&i<l))return A.a(m,i)
i=m[i]
o=s+p
if(!(o>=0&&o<l))return A.a(m,o)
n=i+(m[o]-i)*d
i=r+p
if(!(i>=0&&i<l))return A.a(m,i)
i=m[i]
o=q+p
if(!(o>=0&&o<l))return A.a(m,o)
o=m[o]
j&2&&A.b(a0)
if(!(p<3))return A.a(a0,p)
a0[p]=n+(i+(o-i)*d-n)*c}}}
A.fv.prototype={
bi(){var t=this.a
t^=t<<13
t^=t>>>17
return this.a=(t^t<<5)>>>0},
dF(){var t=Math.max(1e-9,this.bi()/4294967296),s=this.bi()
return Math.sqrt(-2*Math.log(t))*Math.cos(6.283185307179586*(s/4294967296))}}
A.fx.prototype={}
A.eb.prototype={}
A.h2.prototype={
$2(a,b){return B.a.u(a-b,-7,7)},
$S:19}
A.h_.prototype={
$4(a,b,c,d){var t=this.a,s=1-t,r=this.b
return(a*s+b*t)*(1-r)+(c*s+d*t)*r},
$S:20}
A.fZ.prototype={
$1(a){var t,s=this,r=s.b,q=s.d,p=s.c*q,o=s.e,n=(p+o)*3+a,m=r.length
if(!(n>=0&&n<m))return A.a(r,n)
n=r[n]
t=s.f
p=(p+t)*3+a
if(!(p>=0&&p<m))return A.a(r,p)
p=r[p]
q=s.r*q
o=(q+o)*3+a
if(!(o>=0&&o<m))return A.a(r,o)
o=r[o]
t=(q+t)*3+a
if(!(t>=0&&t<m))return A.a(r,t)
return s.a.$4(n,p,o,r[t])},
$S:1}
A.hg.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.hV(A.hV(a).data),e=f.id
try{t=f.customJson
if(t!=null){l=A.Y(f.filterId)
k=A.Y(t)
j=A.ka(k)
$.k9.n(0,l,k)
k=A.k([],u.s)
if(j.b!=null)k.push("colour look")
if(j.c!=null)k.push("overlay")
i=j.d!=null
if(i)k.push("face sticker")
B.c.bA(k," + ")
$.im.n(0,l,new A.cd(l,j,new A.aj(l,i)))}s=new A.dS(A.t(A.c3(f.width)),A.t(A.c3(f.height)),u.Y.a(f.pixels))
r=A.ke(A.Y(f.landmarks))
q=A.kf(u.d1.a(B.a_.co(A.Y(f.settings),null)))
p=A.m6(A.Y(f.filterId)).eT(r,q,s)
o=p.a.c
h={}
h.id=e
h.width=p.a.a
h.height=p.a.b
h.pixels=o
h.usedFaces=p.b
l=p.c
if(l==null)l=null
h.note=l
n=h
this.a.postMessage(n,A.k([u.e9.a(B.h.gF(p.a.c))],u.V))}catch(g){m=A.eE(g)
h={}
h.id=e
h.error=J.aO(m)
this.a.postMessage(h)}},
$S:21};(function aliases(){var t=J.aU.prototype
t.dX=t.D
t=A.w.prototype
t.cL=t.af})();(function installTearOffs(){var t=hunkHelpers._static_2
t(J,"lr","kn",22)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.A,null)
r(A.A,[A.hz,J.dI,A.cP,J.b2,A.F,A.w,A.fw,A.d,A.b7,A.br,A.cg,A.V,A.aZ,A.ad,A.bG,A.aP,A.bs,A.bX,A.fC,A.fo,A.L,A.fk,A.P,A.cs,A.eu,A.en,A.eg,A.ey,A.fH,A.fV,A.an,A.ep,A.ez,A.ef,A.dx,A.b3,A.fG,A.fI,A.dW,A.cQ,A.fJ,A.bH,A.aV,A.ba,A.e8,A.cS,A.f4,A.fE,A.fF,A.eV,A.ac,A.fK,A.fR,A.fa,A.dH,A.dY,A.B,A.bJ,A.dA,A.b5,A.eU,A.eW,A.cK,A.ft,A.ci,A.cH,A.dZ,A.f9,A.bP,A.e6,A.dX,A.cc,A.R,A.ev,A.fp,A.fy,A.eP,A.z,A.fB,A.e4,A.C,A.dB,A.ch,A.f_,A.Z,A.aj,A.f1,A.dS,A.fu,A.ah,A.eY,A.fn,A.a1,A.f0,A.cY,A.et,A.ew,A.eq,A.bU,A.dC,A.fv,A.fx,A.eb])
r(J.dI,[J.dL,J.cr,J.ct,J.bR,J.bS,J.bQ,J.aT])
r(J.ct,[J.aU,J.u,A.aW,A.cB])
r(J.aU,[J.e2,J.bq,J.aE])
s(J.dK,A.cP)
s(J.fe,J.u)
r(J.bQ,[J.cq,J.dM])
r(A.F,[A.bT,A.cU,A.dN,A.el,A.e9,A.eo,A.dc,A.at,A.cW,A.ek,A.cR,A.dv])
s(A.bY,A.w)
s(A.av,A.bY)
r(A.d,[A.ce,A.cX,A.cZ,A.em,A.ex,A.di,A.dj,A.dk,A.dl,A.dm,A.dn,A.dq,A.dr,A.ds,A.dt,A.du,A.c9,A.b6,A.O,A.bd,A.be,A.bf,A.bg,A.bh,A.bi,A.bj,A.bk,A.bl,A.bm,A.bn,A.bo,A.a7])
r(A.ce,[A.a4,A.cf,A.aF])
r(A.a4,[A.cT,A.cv,A.aH,A.es])
r(A.ad,[A.c0,A.c1,A.c2])
s(A.I,A.c0)
s(A.T,A.c1)
s(A.bu,A.c2)
r(A.aP,[A.dh,A.dg,A.ej,A.h9,A.hb,A.eL,A.eM,A.eN,A.eO,A.fQ,A.eS,A.eT,A.h5,A.hk,A.hj,A.he,A.hd,A.fO,A.hi,A.h_,A.fZ,A.hg])
r(A.dh,[A.eK,A.ha,A.fl,A.fm,A.f6,A.f7,A.f8,A.f2,A.fN,A.h2])
r(A.bG,[A.cb,A.bI])
s(A.ca,A.bX)
s(A.aQ,A.ca)
s(A.cF,A.cU)
r(A.ej,[A.ee,A.bF])
r(A.L,[A.ak,A.er])
s(A.cu,A.ak)
s(A.b8,A.aW)
r(A.cB,[A.dT,A.Q])
r(A.Q,[A.d_,A.d1])
s(A.d0,A.d_)
s(A.aX,A.d0)
s(A.d2,A.d1)
s(A.a6,A.d2)
r(A.aX,[A.cw,A.cx])
r(A.a6,[A.cy,A.cz,A.cA,A.cC,A.cD,A.cE,A.b9])
s(A.d3,A.eo)
r(A.dx,[A.fT,A.fS,A.eI,A.eH,A.ff])
r(A.b3,[A.eG,A.dy,A.dO])
s(A.dP,A.dy)
s(A.fi,A.fT)
s(A.fh,A.fS)
s(A.fj,A.ef)
r(A.at,[A.cM,A.dF])
s(A.fX,A.fE)
s(A.fY,A.fF)
r(A.fI,[A.c_,A.df,A.eJ,A.au,A.W,A.de,A.aS,A.bW,A.cJ,A.aY,A.e3,A.f5,A.f3,A.S,A.dw,A.aG])
s(A.dG,A.dH)
s(A.cG,A.dY)
r(A.c9,[A.dp,A.c8])
s(A.dz,A.bJ)
s(A.dJ,A.cK)
s(A.fd,A.ft)
s(A.fr,A.eU)
s(A.fs,A.eW)
r(A.O,[A.cj,A.ck,A.cl,A.cm,A.cn,A.co,A.bK,A.bL,A.bM,A.cp,A.bN,A.bO])
r(A.cH,[A.cI,A.bc])
s(A.dV,A.e6)
r(A.R,[A.cd,A.dD,A.dQ,A.dU,A.e7,A.ea,A.ec,A.ed,A.ei])
r(A.dg,[A.h6,A.fM])
t(A.bY,A.aZ)
t(A.d_,A.w)
t(A.d0,A.V)
t(A.d1,A.w)
t(A.d2,A.V)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",i:"double",l:"num",v:"String",af:"bool",ba:"Null",r:"List",A:"Object",a5:"Map",G:"JSObject"},mangledNames:{},types:["i(i)","i(h)","~(v,b5)","af(i)","@(@)","@(@,v)","@(v)","~(@,@)","~(A?,A?)","~(h,iu)","i(h,h,h)","~(h,h,i)","af(S)","v(S)","af(R)","0&()","aV<v,i>(@,@)","h(+(i,i),+(i,i))","+(i,i,i)?()","i(i,i)","i(i,i,i,i)","ba(G)","h(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.I&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.T&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.bu&&A.mn(a,b.a)}}
A.l4(v.typeUniverse,JSON.parse('{"aE":"aU","e2":"aU","bq":"aU","mF":"aW","dL":{"af":[],"y":[]},"cr":{"y":[]},"ct":{"G":[]},"aU":{"G":[]},"u":{"r":["1"],"G":[],"d":["1"]},"dK":{"cP":[]},"fe":{"u":["1"],"r":["1"],"G":[],"d":["1"]},"b2":{"q":["1"]},"bQ":{"i":[],"l":[],"aB":["l"]},"cq":{"i":[],"h":[],"l":[],"aB":["l"],"y":[]},"dM":{"i":[],"l":[],"aB":["l"],"y":[]},"aT":{"v":[],"aB":["v"],"fq":[],"y":[]},"bT":{"F":[]},"av":{"w":["h"],"aZ":["h"],"r":["h"],"d":["h"],"w.E":"h","aZ.E":"h"},"ce":{"d":["1"]},"a4":{"d":["1"]},"cT":{"a4":["1"],"d":["1"],"a4.E":"1","d.E":"1"},"b7":{"q":["1"]},"cv":{"a4":["2"],"d":["2"],"a4.E":"2","d.E":"2"},"cX":{"d":["1"],"d.E":"1"},"br":{"q":["1"]},"cf":{"d":["1"],"d.E":"1"},"cg":{"q":["1"]},"bY":{"w":["1"],"aZ":["1"],"r":["1"],"d":["1"]},"aH":{"a4":["1"],"d":["1"],"a4.E":"1","d.E":"1"},"I":{"c0":[],"ad":[]},"T":{"c1":[],"ad":[]},"bu":{"c2":[],"ad":[]},"bG":{"a5":["1","2"]},"cb":{"bG":["1","2"],"a5":["1","2"]},"cZ":{"d":["1"],"d.E":"1"},"bs":{"q":["1"]},"bI":{"bG":["1","2"],"a5":["1","2"]},"ca":{"bX":["1"],"d":["1"]},"aQ":{"ca":["1"],"bX":["1"],"d":["1"]},"cF":{"F":[]},"dN":{"F":[]},"el":{"F":[]},"aP":{"b4":[]},"dg":{"b4":[]},"dh":{"b4":[]},"ej":{"b4":[]},"ee":{"b4":[]},"bF":{"b4":[]},"e9":{"F":[]},"ak":{"L":["1","2"],"hB":["1","2"],"a5":["1","2"],"L.K":"1","L.V":"2"},"aF":{"d":["1"],"d.E":"1"},"P":{"q":["1"]},"cu":{"ak":["1","2"],"L":["1","2"],"hB":["1","2"],"a5":["1","2"],"L.K":"1","L.V":"2"},"c0":{"ad":[]},"c1":{"ad":[]},"c2":{"ad":[]},"cs":{"kG":[],"fq":[]},"eu":{"cO":[],"bV":[]},"em":{"d":["cO"],"d.E":"cO"},"en":{"q":["cO"]},"eg":{"bV":[]},"ex":{"d":["bV"],"d.E":"bV"},"ey":{"q":["bV"]},"b8":{"aW":[],"G":[],"y":[]},"aW":{"G":[],"y":[]},"cB":{"G":[]},"dT":{"G":[],"y":[]},"Q":{"a3":["1"],"G":[]},"aX":{"w":["i"],"Q":["i"],"r":["i"],"a3":["i"],"G":[],"d":["i"],"V":["i"]},"a6":{"w":["h"],"Q":["h"],"r":["h"],"a3":["h"],"G":[],"d":["h"],"V":["h"]},"cw":{"aX":[],"ho":[],"w":["i"],"Q":["i"],"r":["i"],"a3":["i"],"G":[],"d":["i"],"V":["i"],"y":[],"w.E":"i"},"cx":{"aX":[],"hp":[],"w":["i"],"Q":["i"],"r":["i"],"a3":["i"],"G":[],"d":["i"],"V":["i"],"y":[],"w.E":"i"},"cy":{"a6":[],"hu":[],"w":["h"],"Q":["h"],"r":["h"],"a3":["h"],"G":[],"d":["h"],"V":["h"],"y":[],"w.E":"h"},"cz":{"a6":[],"hv":[],"w":["h"],"Q":["h"],"r":["h"],"a3":["h"],"G":[],"d":["h"],"V":["h"],"y":[],"w.E":"h"},"cA":{"a6":[],"hw":[],"w":["h"],"Q":["h"],"r":["h"],"a3":["h"],"G":[],"d":["h"],"V":["h"],"y":[],"w.E":"h"},"cC":{"a6":[],"hP":[],"w":["h"],"Q":["h"],"r":["h"],"a3":["h"],"G":[],"d":["h"],"V":["h"],"y":[],"w.E":"h"},"cD":{"a6":[],"hQ":[],"w":["h"],"Q":["h"],"r":["h"],"a3":["h"],"G":[],"d":["h"],"V":["h"],"y":[],"w.E":"h"},"cE":{"a6":[],"w":["h"],"Q":["h"],"r":["h"],"a3":["h"],"G":[],"d":["h"],"V":["h"],"y":[],"w.E":"h"},"b9":{"a6":[],"cV":[],"w":["h"],"Q":["h"],"r":["h"],"a3":["h"],"G":[],"d":["h"],"V":["h"],"y":[],"w.E":"h"},"eo":{"F":[]},"d3":{"F":[]},"w":{"r":["1"],"d":["1"]},"L":{"a5":["1","2"]},"bX":{"d":["1"]},"er":{"L":["v","@"],"a5":["v","@"],"L.K":"v","L.V":"@"},"es":{"a4":["v"],"d":["v"],"a4.E":"v","d.E":"v"},"eG":{"b3":["r<h>","v"]},"dy":{"b3":["v","r<h>"]},"dO":{"b3":["A?","v"]},"dP":{"b3":["v","r<h>"]},"i":{"l":[],"aB":["l"]},"h":{"l":[],"aB":["l"]},"r":{"d":["1"]},"l":{"aB":["l"]},"cO":{"bV":[]},"v":{"aB":["v"],"fq":[]},"dc":{"F":[]},"cU":{"F":[]},"at":{"F":[]},"cM":{"F":[]},"dF":{"F":[]},"cW":{"F":[]},"ek":{"F":[]},"cR":{"F":[]},"dv":{"F":[]},"dW":{"F":[]},"cQ":{"F":[]},"e8":{"q":["h"]},"dG":{"dH":[]},"cG":{"dY":[]},"B":{"q":["l"]},"di":{"p":[],"d":["l"],"d.E":"l"},"dj":{"p":[],"d":["l"],"d.E":"l"},"dk":{"p":[],"d":["l"],"d.E":"l"},"dl":{"p":[],"d":["l"],"d.E":"l"},"dm":{"p":[],"d":["l"],"d.E":"l"},"dn":{"p":[],"d":["l"],"d.E":"l"},"dq":{"p":[],"d":["l"],"d.E":"l"},"dr":{"p":[],"d":["l"],"d.E":"l"},"ds":{"p":[],"d":["l"],"d.E":"l"},"dt":{"p":[],"d":["l"],"d.E":"l"},"du":{"p":[],"d":["l"],"d.E":"l"},"c9":{"p":[],"d":["l"],"d.E":"l"},"dp":{"p":[],"d":["l"],"d.E":"l"},"c8":{"p":[],"d":["l"],"d.E":"l"},"dz":{"bJ":[]},"dJ":{"cK":[]},"b6":{"d":["m"],"d.E":"m"},"O":{"d":["m"]},"cj":{"O":[],"d":["m"],"d.E":"m"},"ck":{"O":[],"d":["m"],"d.E":"m"},"cl":{"O":[],"d":["m"],"d.E":"m"},"cm":{"O":[],"d":["m"],"d.E":"m"},"cn":{"O":[],"d":["m"],"d.E":"m"},"co":{"O":[],"d":["m"],"d.E":"m"},"bK":{"O":[],"d":["m"],"d.E":"m"},"bL":{"O":[],"d":["m"],"d.E":"m"},"bM":{"O":[],"d":["m"],"d.E":"m"},"cp":{"O":[],"d":["m"],"d.E":"m"},"bN":{"O":[],"d":["m"],"d.E":"m"},"bO":{"O":[],"d":["m"],"d.E":"m"},"cI":{"cH":[]},"bc":{"cH":[]},"bd":{"m":[],"p":[],"d":["l"],"q":["m"],"d.E":"l"},"be":{"m":[],"p":[],"d":["l"],"q":["m"],"d.E":"l"},"bf":{"m":[],"p":[],"d":["l"],"q":["m"],"d.E":"l"},"bg":{"m":[],"p":[],"d":["l"],"q":["m"],"d.E":"l"},"bh":{"m":[],"p":[],"d":["l"],"q":["m"],"d.E":"l"},"bi":{"m":[],"p":[],"d":["l"],"q":["m"],"d.E":"l"},"dZ":{"q":["m"]},"bj":{"m":[],"p":[],"d":["l"],"q":["m"],"d.E":"l"},"bk":{"m":[],"p":[],"d":["l"],"q":["m"],"d.E":"l"},"bl":{"m":[],"p":[],"d":["l"],"q":["m"],"d.E":"l"},"bm":{"m":[],"p":[],"d":["l"],"q":["m"],"d.E":"l"},"bn":{"m":[],"p":[],"d":["l"],"q":["m"],"d.E":"l"},"bo":{"m":[],"p":[],"d":["l"],"q":["m"],"d.E":"l"},"a7":{"m":[],"p":[],"d":["l"],"q":["m"],"d.E":"l"},"dV":{"e6":[]},"cd":{"R":[]},"dD":{"R":[]},"dQ":{"R":[]},"dU":{"R":[]},"e7":{"R":[]},"ea":{"R":[]},"ec":{"R":[]},"ed":{"R":[]},"ei":{"R":[]},"cY":{"bv":[]},"et":{"bv":[]},"ew":{"bv":[]},"eq":{"bv":[]},"hw":{"r":["h"],"d":["h"]},"cV":{"r":["h"],"d":["h"]},"kJ":{"r":["h"],"d":["h"]},"hu":{"r":["h"],"d":["h"]},"hP":{"r":["h"],"d":["h"]},"hv":{"r":["h"],"d":["h"]},"hQ":{"r":["h"],"d":["h"]},"ho":{"r":["i"],"d":["i"]},"hp":{"r":["i"],"d":["i"]},"m":{"p":[],"q":["m"],"d":["l"]}}'))
A.l3(v.typeUniverse,JSON.parse('{"ce":1,"bY":1,"Q":1,"ef":2,"dx":2}'))
var u=(function rtii(){var t=A.ap
return{G:t("p"),W:t("aB<@>"),M:t("aQ<v>"),C:t("F"),Z:t("b4"),D:t("bI<W,h>"),P:t("b5"),r:t("iu"),I:t("O"),l:t("d<i>"),k:t("d<@>"),w:t("d<h>"),x:t("u<ch>"),q:t("u<dB>"),R:t("u<Z>"),g:t("u<b6>"),A:t("u<r<C>>"),B:t("u<r<i>>"),p:t("u<r<h>>"),V:t("u<b8>"),f:t("u<A>"),d:t("u<cK>"),J:t("u<+(i,i)>"),hh:t("u<+(C,C,C,i)>"),ff:t("u<eb>"),s:t("u<v>"),h:t("u<cV>"),_:t("u<C>"),cO:t("u<bv>"),n:t("u<i>"),u:t("u<@>"),t:t("u<h>"),e:t("u<cV?>"),T:t("cr"),m:t("G"),O:t("aE"),aU:t("a3<@>"),j:t("r<ch>"),hd:t("r<+(i,i)>"),E:t("r<C>"),H:t("r<i>"),c:t("r<@>"),L:t("r<h>"),U:t("aV<v,i>"),ck:t("a5<v,v>"),d1:t("a5<v,@>"),eO:t("a5<@,@>"),eE:t("a5<v,A?>"),e9:t("b8"),d4:t("aX"),eB:t("a6"),Y:t("b9"),b:t("ba"),K:t("A"),ce:t("R"),gT:t("mH"),bQ:t("+()"),a6:t("+(i,i)"),cz:t("cO"),fv:t("aH<C>"),X:t("S"),N:t("v"),aY:t("v(S)"),dm:t("y"),F:t("cV"),ak:t("bq"),a:t("C"),dE:t("cX<S>"),y:t("af"),fp:t("af(S)"),i:t("i"),S:t("h"),eH:t("is<ba>?"),z:t("G?"),bM:t("r<@>?"),v:t("r<h>?"),di:t("r<h?>?"),cZ:t("a5<v,v>?"),Q:t("A?"),gf:t("+(i,i,i)?"),dk:t("v?"),fQ:t("af?"),cD:t("i?"),h6:t("h?"),cg:t("l?"),o:t("l"),cA:t("~(v,@)")}})();(function constants(){var t=hunkHelpers.makeConstList
B.bT=J.dI.prototype
B.c=J.u.prototype
B.b=J.cq.prototype
B.a=J.bQ.prototype
B.k=J.aT.prototype
B.bU=J.aE.prototype
B.bV=J.ct.prototype
B.t=A.cw.prototype
B.cH=A.cx.prototype
B.cI=A.cy.prototype
B.cJ=A.cz.prototype
B.cK=A.cA.prototype
B.B=A.cC.prototype
B.a7=A.cD.prototype
B.h=A.b9.prototype
B.aE=J.e2.prototype
B.a9=J.bq.prototype
B.Z=new A.de(0,"direct")
B.aa=new A.de(1,"alpha")
B.N=new A.df(0,"littleEndian")
B.D=new A.df(1,"bigEndian")
B.ab=new A.eH()
B.dz=new A.eI()
B.aJ=new A.cg(A.ap("cg<0&>"))
B.ac=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.aW=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.b0=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.aX=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.b_=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.aZ=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.aY=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.ad=function(hooks) { return hooks; }

B.a_=new A.dO()
B.ae=new A.dP()
B.af=new A.fi()
B.b2=new A.fj()
B.b4=new A.dW()
B.E=new A.fw()
B.ba=new A.fX()
B.ag=new A.fY()
B.O=new A.au(0,"rgba")
B.P=new A.au(1,"bgra")
B.a0=new A.au(2,"abgr")
B.Q=new A.au(3,"argb")
B.ah=new A.au(4,"rgb")
B.a1=new A.au(5,"bgr")
B.bb=new A.au(6,"grayAlpha")
B.bc=new A.au(7,"red")
B.ai=new A.eJ(4,"luminance")
B.cm=t([0.04,-0.01,0.025],u.n)
B.ct=t([0.04,0,0.015],u.n)
B.bd=new A.ah(0.12,0,-0.12,-0.05,0,0.25,0.45,0,0,0,B.cm,B.ct)
B.cC=t([0,-0.01,0.04],u.n)
B.ck=t([0.02,-0.02,0.05],u.n)
B.be=new A.ah(-0.75,0,0.2,-0.35,0,0,0,0,0,0,B.cC,B.ck)
B.cn=t([0.02,0.008,-0.02],u.n)
B.cA=t([0.05,0.025,-0.035],u.n)
B.bf=new A.ah(0.28,0,0.12,0.08,0.35,0.75,0.08,0.25,-0.15,0,B.cn,B.cA)
B.p=t([0,0,0],u.n)
B.bg=new A.ah(0.1,0,0.05,0,0.12,0.06,0,0,-0.1,0,B.p,B.p)
B.ce=t([0.02,0.01,0],u.n)
B.bh=new A.ah(0,0,0.18,0.12,0.1,0.12,0,-0.3,0,0,B.p,B.ce)
B.c7=t([0.012,0.012,0.02],u.n)
B.bi=new A.ah(0.25,0,-0.08,-0.06,0,-0.05,0,0.4,-0.25,0.06,B.p,B.c7)
B.bj=new A.ah(0,0,-0.05,0,0,0.35,0,0,0,0,B.p,B.p)
B.bk=new A.ah(0.05,0,0,0,0.1,0.18,0,0,0,0,B.p,B.p)
B.bl=new A.z("Unsupported filter version (expected 1).")
B.bm=new A.z("This is not a PNG file.")
B.bn=new A.z("The PNG file could not be read.")
B.bo=new A.z("This JSON file could not be read.")
B.R=new A.z("The PNG file is damaged.")
B.bp=new A.z('"name" must be text.')
B.bq=new A.z('"lut.size"/"lut.rgb16" have the wrong type.')
B.br=new A.z('"lut" needs either "cube" text or "size" + "rgb16".')
B.bs=new A.z('"name" is too long.')
B.bt=new A.z('The filter needs at least one of "lut", "overlay" or "sticker".')
B.bu=new A.z("This PNG has no transparency. Overlays and stickers need a transparent background.")
B.bv=new A.z("LUT_3D_SIZE is missing before the colour table.")
B.bw=new A.z("The colour table has too many rows.")
B.bx=new A.z("LUT size must be between 2 and 65.")
B.by=new A.z('"lut.cube" must be text.')
B.bz=new A.z("LUT_3D_SIZE must be between 2 and 65.")
B.bA=new A.z("The image is larger than 5 MB.")
B.bB=new A.z("The colour table data is not valid base64.")
B.bC=new A.z('This JSON file is not a Photo Effects filter ("format" must be "photo-effects-filter").')
B.bD=new A.z("Not a 3D .cube file (LUT_3D_SIZE missing).")
B.bE=new A.z("DOMAIN_MAX must be larger than DOMAIN_MIN.")
B.bF=new A.z("1D LUTs are not supported; please use a 3D .cube file.")
B.bG=new A.z("The colour table has the wrong length.")
B.bH=new A.z("LUT_3D_SIZE appears twice.")
B.bI=new A.z("This PNG is (almost) fully opaque. Overlays and stickers need a transparent background.")
B.bJ=new A.z("The PNG is too large (max 8192 px per side).")
B.bK=new A.z("This PNG is completely transparent.")
B.dA=new A.dw(0,"slider")
B.aK=new A.Z()
B.dF=t([B.aK],u.R)
B.bL=new A.aj("glow_makeup",!0)
B.dB=new A.dw(1,"toggle")
B.aL=new A.Z()
B.dG=t([B.aL],u.R)
B.bM=new A.aj("light",!0)
B.aM=new A.Z()
B.dH=t([B.aM],u.R)
B.bN=new A.aj("neon_lines",!0)
B.aN=new A.Z()
B.dI=t([B.aN],u.R)
B.bO=new A.aj("rosy_haze",!0)
B.aO=new A.Z()
B.dJ=t([B.aO],u.R)
B.bP=new A.aj("serum",!0)
B.aP=new A.Z()
B.dK=t([B.aP],u.R)
B.bQ=new A.aj("soft_freckles",!0)
B.aQ=new A.Z()
B.aR=new A.Z()
B.aS=new A.Z()
B.aT=new A.Z()
B.dC=t([B.aQ,B.aR,B.aS,B.aT],u.R)
B.bR=new A.aj("soft_glam",!0)
B.aU=new A.Z()
B.dL=t([B.aU],u.R)
B.bS=new A.aj("sunny_effect",!1)
B.v=new A.W(0,"uint1")
B.w=new A.W(1,"uint2")
B.F=new A.W(10,"float32")
B.G=new A.W(11,"float64")
B.x=new A.W(2,"uint4")
B.l=new A.W(3,"uint8")
B.r=new A.W(4,"uint16")
B.z=new A.W(5,"uint32")
B.H=new A.W(6,"int8")
B.I=new A.W(7,"int16")
B.J=new A.W(8,"int32")
B.K=new A.W(9,"float16")
B.S=new A.f3(2,"sequence")
B.a2=new A.f5(1,"deflate")
B.d=new A.aS(0,"none")
B.j=new A.aS(2,"ascii")
B.i=new A.aS(3,"short")
B.m=new A.aS(4,"long")
B.o=new A.aS(5,"rational")
B.T=new A.aS(7,"undefined")
B.bW=new A.ff(null)
B.bX=new A.fh(!1)
B.aj=t([1,1,1],u.n)
B.a3=t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],u.t)
B.bY=t([1,0.85,0.6],u.n)
B.cq=t([33,7,163,144,145,153,154,155,133],u.t)
B.cE=t([263,249,390,373,374,380,381,382,362],u.t)
B.ak=t([B.cq,B.cE],u.p)
B.al=t([252,243,207,63],u.t)
B.cR=new A.bW(0,"none")
B.aH=new A.bW(1,"background")
B.aI=new A.bW(2,"previous")
B.am=t([B.cR,B.aH,B.aI],A.ap("u<bW>"))
B.bZ=t([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],u.t)
B.c_=t([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],u.t)
B.c0=t([50,280],u.t)
B.dD=t([57,19,7],u.n)
B.an=t([63,207,243,252],u.t)
B.cy=t([79,237,239,238,20],u.t)
B.cb=t([309,457,459,458,250],u.t)
B.c1=t([B.cy,B.cb],u.p)
B.c2=t([0.2,0.16,0.15],u.n)
B.n=t([10,338,297,332,284,251,389,356,454,323,361,288,397,365,379,378,400,377,152,148,176,149,150,136,172,58,132,93,234,127,162,21,54,103,67,109],u.t)
B.c3=t([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],u.t)
B.dE=t([0.56,0.64,0.7],u.n)
B.c4=t([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],u.t)
B.c5=t([1,0.78,0.42],u.n)
B.U=t([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29],u.t)
B.c6=t([1,0.9,0.85],u.n)
B.ao=t([1,0.18,0.78],u.n)
B.ap=t([33,246,161,160,159,158,157,173,133],u.t)
B.a4=t([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28],u.t)
B.c8=t([0.57,0.62,0.58],u.n)
B.c9=t([0.86,0.33,0.42],u.n)
B.L=t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],u.t)
B.b8=new A.ed()
B.b9=new A.ei()
B.b7=new A.ec()
B.b3=new A.dU()
B.b1=new A.dQ()
B.b5=new A.e7()
B.b6=new A.ea()
B.aV=new A.dD()
B.ca=t([B.b8,B.b9,B.b7,B.b3,B.b1,B.b5,B.b6,B.aV],A.ap("u<R>"))
B.df=new A.S(0,"face")
B.dg=new A.S(1,"eyes")
B.dh=new A.S(2,"nose")
B.di=new A.S(3,"mouth")
B.dj=new A.S(4,"forehead")
B.aq=t([B.df,B.dg,B.dh,B.di,B.dj],A.ap("u<S>"))
B.cc=t([0.92,0.55,0.5],u.n)
B.ar=t([254,253,251,247,239,223,191,127],u.t)
B.V=t([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8],u.t)
B.as=t([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5],u.t)
B.cd=t([1,0.72,0.82],u.n)
B.cf=t([0.42,0.3,0.24],u.n)
B.aF=new A.cJ(0,"source")
B.aG=new A.cJ(1,"over")
B.at=t([B.aF,B.aG],A.ap("u<cJ>"))
B.cg=t([78,95,88,178,87,14,317,402,318,324,308,415,310,311,312,13,82,81,80,191],u.t)
B.ch=t([1,0.72,0.8],u.n)
B.ci=t([0.93,0.42,0.52],u.n)
B.cj=t([168,6,197,195,5,4,1],u.t)
B.cl=t([0.9,0.45,0.45],u.n)
B.au=t([300,293,334,296,336],u.t)
B.co=t([1,0.97,0.95],u.n)
B.cp=t([0.62,0.35,1],u.n)
B.cr=t([1,0.96,0.9],u.n)
B.av=t([276,283,282,295,285],u.t)
B.cs=t([0.72,0.45,0.38],u.n)
B.cS=new A.aY(0,"none")
B.cT=new A.aY(1,"sub")
B.cU=new A.aY(2,"up")
B.cV=new A.aY(3,"average")
B.cW=new A.aY(4,"paeth")
B.W=t([B.cS,B.cT,B.cU,B.cV,B.cW],A.ap("u<aY>"))
B.cu=t([1,0.93,0.82],u.n)
B.q=t([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],u.t)
B.cv=t([98,97,2,326,327],u.t)
B.A=t([61,146,91,181,84,17,314,405,321,375,291,409,270,269,267,0,37,39,40,185],u.t)
B.X=t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],u.t)
B.cw=t([0.68,0.16,0.26],u.n)
B.aw=t([263,466,388,387,386,385,384,398,362],u.t)
B.cx=t([168,6,4,1,2,0,13,14,17,152],u.t)
B.ax=t([137,80,78,71,13,10,26,10],u.t)
B.ay=t([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],u.t)
B.az=t([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],u.t)
B.cz=t([0.12,0.09,0.08],u.n)
B.cB=t([0.85,0.48,0.48],u.n)
B.a5=t([0.15,0.9,1],u.n)
B.aA=t([70,63,105,66,107],u.t)
B.e=t([33,7,163,144,145,153,154,155,133,173,157,158,159,160,161,246],u.t)
B.f=t([263,249,390,373,374,380,381,382,362,398,384,385,386,387,388,466],u.t)
B.cD=t([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8],u.t)
B.aB=t([46,53,52,65,55],u.t)
B.cF=t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],u.t)
B.cP={normal:0,screen:1,multiply:2,overlay:3,"soft-light":4}
B.aD=new A.aG(0,"normal")
B.y=new A.aG(1,"screen")
B.C=new A.aG(2,"multiply")
B.cQ=new A.aG(3,"overlay")
B.u=new A.aG(4,"softLight")
B.a6=new A.cb(B.cP,[B.aD,B.y,B.C,B.cQ,B.u],A.ap("cb<v,aG>"))
B.aC=new A.bI([B.v,1,B.w,3,B.x,15,B.l,255,B.r,65535,B.z,4294967295,B.H,127,B.I,32767,B.J,2147483647,B.K,1,B.F,1,B.G,1],u.D)
B.cG=new A.bI([B.v,1,B.w,1,B.x,1,B.l,1,B.r,2,B.z,4,B.H,1,B.I,2,B.J,4,B.K,2,B.F,4,B.G,8],u.D)
B.a8=new A.aG(6,"color")
B.cX=new A.e3(0,"none")
B.cY=new A.e3(4,"paeth")
B.cZ=new A.I(116,118)
B.d_=new A.I(118,50)
B.d0=new A.I(345,347)
B.d1=new A.I(347,280)
B.d2=new A.I(B.ap,B.aB)
B.d3=new A.I(205,0.09)
B.d4=new A.I(50,0.13)
B.d5=new A.I(425,0.09)
B.d6=new A.I(280,0.13)
B.d7=new A.I(151,0.12)
B.d8=new A.I(B.aw,B.av)
B.d9=new A.T(280,345,425)
B.da=new A.T(50,116,205)
B.cN={image:0,blend:1,opacity:2}
B.db=new A.aQ(B.cN,3,u.M)
B.cM={format:0,version:1,name:2,lut:3,overlay:4,sticker:5}
B.dc=new A.aQ(B.cM,6,u.M)
B.cO={image:0,anchor:1,scale:2,offsetY:3,opacity:4}
B.dd=new A.aQ(B.cO,5,u.M)
B.cL={size:0,rgb16:1,cube:2}
B.de=new A.aQ(B.cL,3,u.M)
B.dk=A.ar("mz")
B.dl=A.ar("mA")
B.dm=A.ar("ho")
B.dn=A.ar("hp")
B.dp=A.ar("hu")
B.dq=A.ar("hv")
B.dr=A.ar("hw")
B.ds=A.ar("A")
B.dt=A.ar("hP")
B.du=A.ar("hQ")
B.dv=A.ar("kJ")
B.dw=A.ar("cV")
B.Y=new A.c_(0,"none")
B.dx=new A.c_(1,"partial")
B.dy=new A.c_(2,"full")
B.M=new A.c_(3,"finish")})();(function staticFields(){$.fL=null
$.a9=A.k([],u.f)
$.iG=null
$.ii=null
$.ih=null
$.jl=null
$.je=null
$.jr=null
$.h4=null
$.hc=null
$.i4=null
$.fP=A.k([],A.ap("u<r<A>?>"))
$.aR=A.iR()
$.aa=null
$.iq=A.iR()
$.im=A.ab(u.N,A.ap("cd"))
$.k9=function(){var t=u.N
return A.ab(t,t)}()})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"mC","jv",()=>A.h7("_$dart_dartClosure"))
t($,"mB","ib",()=>A.h7("_$dart_dartClosure_dartJSInterop"))
t($,"n_","jP",()=>A.k([new J.dK()],A.ap("u<cP>")))
t($,"mI","jz",()=>A.aJ(A.fD({
toString:function(){return"$receiver$"}})))
t($,"mJ","jA",()=>A.aJ(A.fD({$method$:null,
toString:function(){return"$receiver$"}})))
t($,"mK","jB",()=>A.aJ(A.fD(null)))
t($,"mL","jC",()=>A.aJ(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"mO","jF",()=>A.aJ(A.fD(void 0)))
t($,"mP","jG",()=>A.aJ(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"mN","jE",()=>A.aJ(A.iO(null)))
t($,"mM","jD",()=>A.aJ(function(){try{null.$method$}catch(s){return s.message}}()))
t($,"mR","jI",()=>A.aJ(A.iO(void 0)))
t($,"mQ","jH",()=>A.aJ(function(){try{(void 0).$method$}catch(s){return s.message}}()))
t($,"mT","jK",()=>A.ky(A.k([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],u.t)))
t($,"mS","jJ",()=>A.kA(0))
t($,"mZ","eF",()=>A.i7(B.ds))
t($,"mW","jN",()=>A.hS(B.V,B.a3,257,286,15))
t($,"mV","jM",()=>A.hS(B.as,B.L,0,30,15))
t($,"mU","jL",()=>A.hS(null,B.c_,0,19,7))
t($,"mE","jx",()=>A.dE(B.cD))
t($,"mD","jw",()=>A.dE(B.c4))
t($,"n1","jQ",()=>{var s=null,r="ISOSpeed"
return A.ks([11,A.e("ProcessingSoftware",B.j,s),254,A.e("SubfileType",B.m,1),255,A.e("OldSubfileType",B.m,1),256,A.e("ImageWidth",B.m,1),257,A.e("ImageLength",B.m,1),258,A.e("BitsPerSample",B.i,1),259,A.e("Compression",B.i,1),262,A.e("PhotometricInterpretation",B.i,1),263,A.e("Thresholding",B.i,1),264,A.e("CellWidth",B.i,1),265,A.e("CellLength",B.i,1),266,A.e("FillOrder",B.i,1),269,A.e("DocumentName",B.j,s),270,A.e("ImageDescription",B.j,s),271,A.e("Make",B.j,s),272,A.e("Model",B.j,s),273,A.e("StripOffsets",B.m,s),274,A.e("Orientation",B.i,1),277,A.e("SamplesPerPixel",B.i,1),278,A.e("RowsPerStrip",B.m,1),279,A.e("StripByteCounts",B.m,1),280,A.e("MinSampleValue",B.i,1),281,A.e("MaxSampleValue",B.i,1),282,A.e("XResolution",B.o,1),283,A.e("YResolution",B.o,1),284,A.e("PlanarConfiguration",B.i,1),285,A.e("PageName",B.j,s),286,A.e("XPosition",B.o,1),287,A.e("YPosition",B.o,1),290,A.e("GrayResponseUnit",B.i,1),291,A.e("GrayResponseCurve",B.d,s),292,A.e("T4Options",B.d,s),293,A.e("T6Options",B.d,s),296,A.e("ResolutionUnit",B.i,1),297,A.e("PageNumber",B.i,2),300,A.e("ColorResponseUnit",B.d,s),301,A.e("TransferFunction",B.i,768),305,A.e("Software",B.j,s),306,A.e("DateTime",B.j,s),315,A.e("Artist",B.j,s),316,A.e("HostComputer",B.j,s),317,A.e("Predictor",B.i,1),318,A.e("WhitePoint",B.o,2),319,A.e("PrimaryChromaticities",B.o,6),320,A.e("ColorMap",B.i,s),321,A.e("HalftoneHints",B.i,2),322,A.e("TileWidth",B.m,1),323,A.e("TileLength",B.m,1),324,A.e("TileOffsets",B.m,s),325,A.e("TileByteCounts",B.d,s),326,A.e("BadFaxLines",B.d,s),327,A.e("CleanFaxData",B.d,s),328,A.e("ConsecutiveBadFaxLines",B.d,s),332,A.e("InkSet",B.d,s),333,A.e("InkNames",B.d,s),334,A.e("NumberofInks",B.d,s),336,A.e("DotRange",B.d,s),337,A.e("TargetPrinter",B.j,s),338,A.e("ExtraSamples",B.d,s),339,A.e("SampleFormat",B.i,1),340,A.e("SMinSampleValue",B.d,s),341,A.e("SMaxSampleValue",B.d,s),342,A.e("TransferRange",B.d,s),343,A.e("ClipPath",B.d,s),512,A.e("JPEGProc",B.d,s),513,A.e("JPEGInterchangeFormat",B.d,s),514,A.e("JPEGInterchangeFormatLength",B.d,s),529,A.e("YCbCrCoefficients",B.o,3),530,A.e("YCbCrSubSampling",B.i,1),531,A.e("YCbCrPositioning",B.i,1),532,A.e("ReferenceBlackWhite",B.o,6),700,A.e("ApplicationNotes",B.i,1),18246,A.e("Rating",B.i,1),33421,A.e("CFARepeatPatternDim",B.d,s),33422,A.e("CFAPattern",B.d,s),33423,A.e("BatteryLevel",B.d,s),33432,A.e("Copyright",B.j,s),33434,A.e("ExposureTime",B.o,1),33437,A.e("FNumber",B.o,s),33723,A.e("IPTC-NAA",B.m,1),34665,A.e("ExifOffset",B.d,s),34675,A.e("InterColorProfile",B.d,s),34850,A.e("ExposureProgram",B.i,1),34852,A.e("SpectralSensitivity",B.j,s),34853,A.e("GPSOffset",B.d,s),34855,A.e(r,B.m,1),34856,A.e("OECF",B.d,s),34864,A.e("SensitivityType",B.i,1),34866,A.e("RecommendedExposureIndex",B.m,1),34867,A.e(r,B.m,1),36864,A.e("ExifVersion",B.T,s),36867,A.e("DateTimeOriginal",B.j,s),36868,A.e("DateTimeDigitized",B.j,s),36880,A.e("OffsetTime",B.j,s),36881,A.e("OffsetTimeOriginal",B.j,s),36882,A.e("OffsetTimeDigitized",B.j,s),37121,A.e("ComponentsConfiguration",B.T,s),37122,A.e("CompressedBitsPerPixel",B.d,s),37377,A.e("ShutterSpeedValue",B.d,s),37378,A.e("ApertureValue",B.d,s),37379,A.e("BrightnessValue",B.d,s),37380,A.e("ExposureBiasValue",B.d,s),37381,A.e("MaxApertureValue",B.d,s),37382,A.e("SubjectDistance",B.d,s),37383,A.e("MeteringMode",B.d,s),37384,A.e("LightSource",B.d,s),37385,A.e("Flash",B.d,s),37386,A.e("FocalLength",B.d,s),37396,A.e("SubjectArea",B.d,s),37500,A.e("MakerNote",B.T,s),37510,A.e("UserComment",B.T,s),37520,A.e("SubSecTime",B.d,s),37521,A.e("SubSecTimeOriginal",B.d,s),37522,A.e("SubSecTimeDigitized",B.d,s),40091,A.e("XPTitle",B.d,s),40092,A.e("XPComment",B.d,s),40093,A.e("XPAuthor",B.d,s),40094,A.e("XPKeywords",B.d,s),40095,A.e("XPSubject",B.d,s),40960,A.e("FlashPixVersion",B.d,s),40961,A.e("ColorSpace",B.i,1),40962,A.e("ExifImageWidth",B.i,1),40963,A.e("ExifImageLength",B.i,1),40964,A.e("RelatedSoundFile",B.d,s),40965,A.e("InteroperabilityOffset",B.d,s),41483,A.e("FlashEnergy",B.d,s),41484,A.e("SpatialFrequencyResponse",B.d,s),41486,A.e("FocalPlaneXResolution",B.d,s),41487,A.e("FocalPlaneYResolution",B.d,s),41488,A.e("FocalPlaneResolutionUnit",B.d,s),41492,A.e("SubjectLocation",B.d,s),41493,A.e("ExposureIndex",B.d,s),41495,A.e("SensingMethod",B.d,s),41728,A.e("FileSource",B.d,s),41729,A.e("SceneType",B.d,s),41730,A.e("CVAPattern",B.d,s),41985,A.e("CustomRendered",B.d,s),41986,A.e("ExposureMode",B.d,s),41987,A.e("WhiteBalance",B.d,s),41988,A.e("DigitalZoomRatio",B.d,s),41989,A.e("FocalLengthIn35mmFilm",B.d,s),41990,A.e("SceneCaptureType",B.d,s),41991,A.e("GainControl",B.d,s),41992,A.e("Contrast",B.d,s),41993,A.e("Saturation",B.d,s),41994,A.e("Sharpness",B.d,s),41995,A.e("DeviceSettingDescription",B.d,s),41996,A.e("SubjectDistanceRange",B.d,s),42016,A.e("ImageUniqueID",B.d,s),42032,A.e("CameraOwnerName",B.j,s),42033,A.e("BodySerialNumber",B.j,s),42034,A.e("LensSpecification",B.d,s),42035,A.e("LensMake",B.j,s),42036,A.e("LensModel",B.j,s),42037,A.e("LensSerialNumber",B.j,s),42240,A.e("Gamma",B.o,1),50341,A.e("PrintIM",B.d,s),59932,A.e("Padding",B.d,s),59933,A.e("OffsetSchema",B.d,s),65e3,A.e("OwnerName",B.j,s),65001,A.e("SerialNumber",B.j,s)],u.S,A.ap("dA"))})
t($,"mG","jy",()=>A.iv(0,0,0))
t($,"mX","ic",()=>A.kw(1))
t($,"mY","jO",()=>J.jU(B.t.gF($.ic()),0,null))})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.aW,ArrayBuffer:A.b8,ArrayBufferView:A.cB,DataView:A.dT,Float32Array:A.cw,Float64Array:A.cx,Int16Array:A.cy,Int32Array:A.cz,Int8Array:A.cA,Uint16Array:A.cC,Uint32Array:A.cD,Uint8ClampedArray:A.cE,CanvasPixelArray:A.cE,Uint8Array:A.b9})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.Q.$nativeSuperclassTag="ArrayBufferView"
A.d_.$nativeSuperclassTag="ArrayBufferView"
A.d0.$nativeSuperclassTag="ArrayBufferView"
A.aX.$nativeSuperclassTag="ArrayBufferView"
A.d1.$nativeSuperclassTag="ArrayBufferView"
A.d2.$nativeSuperclassTag="ArrayBufferView"
A.a6.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$2$1=function(a){return this(a)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r){t[r].removeEventListener("load",onLoad,false)}a(b.target)}for(var s=0;s<t.length;++s){t[s].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var t=A.mk
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()