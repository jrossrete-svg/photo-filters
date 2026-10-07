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
if(a[b]!==t){A.lP(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a,b){if(b!=null)A.l(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.hD(b)
return new t(c,this)}:function(){if(t===null)t=A.hD(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.hD(a).prototype
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
hG(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fP(a){var t,s,r,q,p,o="_$dart_js",n=a[v.dispatchPropertyName]
if(n==null)if($.hE==null){A.lB()
n=a[v.dispatchPropertyName]}if(n!=null){t=n.p
if(!1===t)return n.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return n.i
if(n.e===s)throw A.f(A.ip("Return interceptor for "+A.x(t(a,n))))}r=a.constructor
if(r==null)q=null
else{p=$.fy
if(p==null)p=$.fy=A.fO(o)
q=r[p]}if(q!=null)return q
q=A.lG(a)
if(q!=null)return q
if(typeof a=="function")return B.bM
t=Object.getPrototypeOf(a)
if(t==null)return B.aD
if(t===Object.prototype)return B.aD
if(typeof r=="function"){p=$.fy
if(p==null)p=$.fy=A.fO(o)
Object.defineProperty(r,p,{value:B.a9,enumerable:false,writable:true,configurable:true})
return B.a9}return B.a9},
jT(a,b){if(a<0||a>4294967295)throw A.f(A.W(a,0,4294967295,"length",null))
return J.i6(new Array(a),b)},
i5(a,b){if(a<0||a>4294967295)throw A.f(A.W(a,0,4294967295,"length",null))
return J.i6(new Array(a),b)},
i6(a,b){var t=A.l(a,b.l("v<0>"))
t.$flags=1
return t},
i7(a,b){var t=u.W
return J.jr(t.a(a),t.a(b))},
i8(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
jU(a,b){var t,s
for(t=a.length;b<t;){s=a.charCodeAt(b)
if(s!==32&&s!==13&&!J.i8(s))break;++b}return b},
jV(a,b){var t,s,r
for(t=a.length;b>0;b=s){s=b-1
if(!(s<t))return A.a(a,s)
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.i8(r))break}return b},
bx(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cl.prototype
return J.dI.prototype}if(typeof a=="string")return J.aQ.prototype
if(a==null)return J.cm.prototype
if(typeof a=="boolean")return J.dH.prototype
if(Array.isArray(a))return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bO.prototype
if(typeof a=="bigint")return J.bN.prototype
return a}if(a instanceof A.A)return a
return J.fP(a)},
J(a){if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(Array.isArray(a))return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bO.prototype
if(typeof a=="bigint")return J.bN.prototype
return a}if(a instanceof A.A)return a
return J.fP(a)},
aI(a){if(a==null)return a
if(Array.isArray(a))return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bO.prototype
if(typeof a=="bigint")return J.bN.prototype
return a}if(a instanceof A.A)return a
return J.fP(a)},
lw(a){if(typeof a=="number")return J.bM.prototype
if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(!(a instanceof A.A))return J.bo.prototype
return a},
lx(a){if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(!(a instanceof A.A))return J.bo.prototype
return a},
c1(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bO.prototype
if(typeof a=="bigint")return J.bN.prototype
return a}if(a instanceof A.A)return a
return J.fP(a)},
am(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bx(a).M(a,b)},
jn(a,b){return J.lx(a).d2(a,b)},
jo(a,b,c){return J.c1(a).d3(a,b,c)},
jp(a,b,c){return J.c1(a).d4(a,b,c)},
jq(a,b,c){return J.c1(a).d5(a,b,c)},
bA(a){return J.c1(a).d6(a)},
M(a,b,c){return J.c1(a).bt(a,b,c)},
jr(a,b){return J.lw(a).bu(a,b)},
hM(a,b){return J.aI(a).ah(a,b)},
aw(a){return J.bx(a).gF(a)},
aZ(a){return J.aI(a).gu(a)},
aK(a){return J.J(a).gj(a)},
js(a){return J.bx(a).gab(a)},
hN(a,b,c){return J.c1(a).dH(a,b,c)},
jt(a,b){return J.aI(a).bX(a,b)},
ju(a,b,c){return J.aI(a).bD(a,b,c)},
jv(a,b){return J.aI(a).dw(a,b)},
aL(a){return J.bx(a).B(a)},
dE:function dE(){},
dH:function dH(){},
cm:function cm(){},
co:function co(){},
aR:function aR(){},
dZ:function dZ(){},
bo:function bo(){},
aA:function aA(){},
bN:function bN(){},
bO:function bO(){},
v:function v(a){this.$ti=a},
dG:function dG(){},
f2:function f2(a){this.$ti=a},
b_:function b_(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bM:function bM(){},
cl:function cl(){},
dI:function dI(){},
aQ:function aQ(){}},A={h8:function h8(){},
f4(a){return new A.bP("Field '"+a+"' has not been initialized.")},
jW(a){return new A.bP("Field '"+a+"' has already been initialized.")},
aF(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
fn(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
iP(a,b,c){return a},
hF(a){var t,s
for(t=$.a5.length,s=0;s<t;++s)if(a===$.a5[s])return!0
return!1},
eb(a,b,c,d){A.cJ(b,"start")
if(c!=null){A.cJ(c,"end")
if(b>c)A.aJ(A.W(b,0,c,"start",null))}return new A.cP(a,b,c,d.l("cP<0>"))},
k_(a,b,c,d){return new A.cr(a,b,c.l("@<0>").aX(d).l("cr<1,2>"))},
i4(){return new A.cN("No element")},
bP:function bP(a){this.a=a},
ap:function ap(a){this.a=a},
fk:function fk(){},
c9:function c9(){},
a0:function a0(){},
cP:function cP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b5:function b5(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cr:function cr(a,b,c){this.a=a
this.b=b
this.$ti=c},
cT:function cT(a,b,c){this.a=a
this.b=b
this.$ti=c},
bp:function bp(a,b,c){this.a=a
this.b=b
this.$ti=c},
ca:function ca(a){this.$ti=a},
cb:function cb(a){this.$ti=a},
R:function R(){},
aW:function aW(){},
bT:function bT(){},
aE:function aE(a,b){this.a=a
this.$ti=b},
j0(a){var t=A.j_(a)
if(t!=null)return t
return"minified:"+a},
ml(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.da.b(a)},
x(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aL(a)
return t},
cH(a){var t,s=$.ie
if(s==null)s=$.ie=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
k8(a,b){var t,s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return null
if(3>=s.length)return A.a(s,3)
t=s[3]
if(t!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return null},
k7(a){var t,s
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
t=parseFloat(a)
if(isNaN(t)){s=B.k.bU(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return null}return t},
e1(a){var t,s,r,q
if(a instanceof A.A)return A.a4(A.av(a),null)
t=J.bx(a)
if(t===B.bL||t===B.bN||u.cr.b(a)){s=B.ac(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.a4(A.av(a),null)},
ig(a){var t,s,r
if(a==null||typeof a=="number"||A.hy(a))return J.aL(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.aM)return a.B(0)
if(a instanceof A.a8)return a.cV(!0)
t=$.jl()
for(s=0;s<1;++s){r=t[s].f9(a)
if(r!=null)return r}return"Instance of '"+A.e1(a)+"'"},
id(a){var t,s,r,q,p=a.length
if(p<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<p;s=r){r=s+500
q=r<p?r:p
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
k9(a){var t,s,r,q=A.l([],u.t)
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.F)(a),++s){r=a[s]
if(!A.d5(r))throw A.f(A.aY(r))
if(r<=65535)B.c.K(q,r)
else if(r<=1114111){B.c.K(q,55296+(B.b.H(r-65536,10)&1023))
B.c.K(q,56320+(r&1023))}else throw A.f(A.aY(r))}return A.id(q)},
ii(a){var t,s,r
for(t=a.length,s=0;s<t;++s){r=a[s]
if(!A.d5(r))throw A.f(A.aY(r))
if(r<0)throw A.f(A.aY(r))
if(r>65535)return A.k9(a)}return A.id(a)},
ka(a,b,c){var t,s,r,q
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(t=b,s="";t<c;t=r){r=t+500
q=r<c?r:c
s+=String.fromCharCode.apply(null,a.subarray(t,q))}return s},
ih(a){var t
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((B.b.H(t,10)|55296)>>>0,t&1023|56320)}}throw A.f(A.W(a,0,1114111,null,null))},
fQ(a){throw A.f(A.aY(a))},
a(a,b){if(a==null)J.aK(a)
throw A.f(A.fK(a,b))},
fK(a,b){var t,s="index"
if(!A.d5(b))return new A.an(!0,b,s,null)
t=A.q(J.aK(a))
if(b<0||b>=t)return A.h3(b,t,a,s)
return new A.cI(null,null,!0,b,s,"Value not in range")},
ln(a,b,c){if(a<0||a>c)return A.W(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.W(b,a,c,"end",null)
return new A.an(!0,b,"end",null)},
aY(a){return new A.an(!0,a,null,null)},
f(a){return A.L(a,new Error())},
L(a,b){var t
if(a==null)a=new A.cQ()
b.dartException=a
t=A.lQ
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:t})
b.name=""}else b.toString=t
return b},
lQ(){return J.aL(this.dartException)},
aJ(a,b){throw A.L(a,b==null?new Error():b)},
b(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.aJ(A.kM(a,b,c),t)},
kM(a,b,c){var t,s,r,q,p,o,n,m,l
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
return new A.cS("'"+t+"': Cannot "+p+" "+m+l+o)},
F(a){throw A.f(A.ac(a))},
aG(a){var t,s,r,q,p,o
a=A.iZ(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=A.l([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new A.fp(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
fq(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
io(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
h9(a,b){var t=b==null,s=t?null:b.method
return new A.dJ(a,s,t?null:b.receiver)},
ev(a){if(a==null)return new A.fc(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.bz(a,a.dartException)
return A.le(a)},
bz(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
le(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((B.b.H(s,16)&8191)===10)switch(r){case 438:return A.bz(a,A.h9(A.x(t)+" (Error "+r+")",null))
case 445:case 5007:A.x(t)
return A.bz(a,new A.cB())}}if(a instanceof TypeError){q=$.j5()
p=$.j6()
o=$.j7()
n=$.j8()
m=$.jb()
l=$.jc()
k=$.ja()
$.j9()
j=$.je()
i=$.jd()
h=q.aT(t)
if(h!=null)return A.bz(a,A.h9(A.V(t),h))
else{h=p.aT(t)
if(h!=null){h.method="call"
return A.bz(a,A.h9(A.V(t),h))}else if(o.aT(t)!=null||n.aT(t)!=null||m.aT(t)!=null||l.aT(t)!=null||k.aT(t)!=null||n.aT(t)!=null||j.aT(t)!=null||i.aT(t)!=null){A.V(t)
return A.bz(a,new A.cB())}}return A.bz(a,new A.ef(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new A.cM()
t=function(b){try{return String(b)}catch(g){}return null}(a)
return A.bz(a,new A.an(!1,null,null,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new A.cM()
return a},
hH(a){if(a==null)return J.aw(a)
if(typeof a=="object")return A.cH(a)
return J.aw(a)},
lj(a){if(typeof a=="number")return B.a.gF(a)
if(a instanceof A.eq)return A.cH(a)
if(a instanceof A.a8)return a.gF(a)
return A.hH(a)},
iT(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
kW(a,b,c,d,e,f){u.Z.a(a)
switch(A.q(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.f(new A.fw("Unsupported number of arguments for wrapped closure"))},
lk(a,b){var t=a.$identity
if(!!t)return t
t=A.ll(a,b)
a.$identity=t
return t},
ll(a,b){var t
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.kW)},
jD(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.e8().constructor.prototype):Object.create(new A.bB(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.hT(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.jz(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.hT(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
jz(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.f("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.jx)}throw A.f("Error in functionType of tearoff")},
jA(a,b,c,d){var t=A.hR
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
hT(a,b,c,d){if(c)return A.jC(a,b,d)
return A.jA(b.length,d,a,b)},
jB(a,b,c,d){var t=A.hR,s=A.jy
switch(b?-1:a){case 0:throw A.f(new A.e5("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
jC(a,b,c){var t,s
if($.hP==null)$.hP=A.hO("interceptor")
if($.hQ==null)$.hQ=A.hO("receiver")
t=b.length
s=A.jB(t,c,a,b)
return s},
hD(a){return A.jD(a)},
jx(a,b){return A.d2(v.typeUniverse,A.av(a.a),b)},
hR(a){return a.a},
jy(a){return a.b},
hO(a){var t,s,r,q=new A.bB("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.f(A.d7("Field name "+a+" not found."))},
fO(a){return v.getIsolateTag(a)},
mj(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lG(a){var t,s,r,q,p,o=A.V($.iU.$1(a)),n=$.fL[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.fU[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.iG($.iO.$2(a,o))
if(r!=null){n=$.fL[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.fU[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.fW(t)
$.fL[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.fU[o]=t
return t}if(q==="-"){p=A.fW(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.iX(a,t)
if(q==="*")throw A.f(A.ip(o))
if(v.leafTags[o]===true){p=A.fW(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.iX(a,t)},
iX(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.hG(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
fW(a){return J.hG(a,!1,null,!!a.$ia_)},
lI(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.fW(t)
else return J.hG(t,c,null,null)},
lB(){if(!0===$.hE)return
$.hE=!0
A.lC()},
lC(){var t,s,r,q,p,o,n,m
$.fL=Object.create(null)
$.fU=Object.create(null)
A.lA()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.iY.$1(p)
if(o!=null){n=A.lI(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
lA(){var t,s,r,q,p,o,n=B.aR()
n=A.c0(B.aS,A.c0(B.aT,A.c0(B.ad,A.c0(B.ad,A.c0(B.aU,A.c0(B.aV,A.c0(B.aW(B.ac),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.iU=new A.fR(q)
$.iO=new A.fS(p)
$.iY=new A.fT(o)},
c0(a,b){return a(b)||b},
ks(a,b){var t,s
for(t=0;t<a.length;++t){s=a[t]
if(!(t<b.length))return A.a(b,t)
if(!J.am(s,b[t]))return!1}return!0},
lm(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
i9(a,b,c,d,e,f){var t=b?"m":"",s=c?"":"i",r=d?"u":"",q=e?"s":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,t+s+r+q+f)
if(p instanceof RegExp)return p
throw A.f(A.az("Illegal RegExp pattern ("+String(p)+")",a,null))},
lM(a,b,c){var t=a.indexOf(b,c)
return t>=0},
lr(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
iZ(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lN(a,b,c){var t=A.lO(a,b,c)
return t},
lO(a,b,c){var t,s,r
if(b===""){if(a==="")return c
t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.iZ(b),"g"),A.lr(c))},
ah:function ah(a,b){this.a=a
this.b=b},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
bs:function bs(a){this.a=a},
bC:function bC(){},
eB:function eB(a,b,c){this.a=a
this.b=b
this.c=c},
c6:function c6(a,b,c){this.a=a
this.b=b
this.$ti=c},
cU:function cU(a,b){this.a=a
this.$ti=b},
bq:function bq(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bE:function bE(a,b){this.a=a
this.$ti=b},
c5:function c5(){},
aN:function aN(a,b,c){this.a=a
this.b=b
this.$ti=c},
cL:function cL(){},
fp:function fp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cB:function cB(){},
dJ:function dJ(a,b,c){this.a=a
this.b=b
this.c=c},
ef:function ef(a){this.a=a},
fc:function fc(a){this.a=a},
aM:function aM(){},
dc:function dc(){},
dd:function dd(){},
ed:function ed(){},
e8:function e8(){},
bB:function bB(a,b){this.a=a
this.b=b},
e5:function e5(a){this.a=a},
ad:function ad(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f8:function f8(a,b){this.a=a
this.b=b
this.c=null},
aB:function aB(a,b){this.a=a
this.$ti=b},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cp:function cp(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fR:function fR(a){this.a=a},
fS:function fS(a){this.a=a},
fT:function fT(a){this.a=a},
a8:function a8(){},
bW:function bW(){},
bX:function bX(){},
bY:function bY(){},
cn:function cn(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
em:function em(a){this.b=a},
eg:function eg(a,b,c){this.a=a
this.b=b
this.c=c},
eh:function eh(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ea:function ea(a,b){this.a=a
this.c=b},
eo:function eo(a,b,c){this.a=a
this.b=b
this.c=c},
ep:function ep(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
lP(a){throw A.L(new A.bP("Field '"+a+"' has been assigned during initialization."),new Error())},
c(){throw A.L(A.f4(""),new Error())},
hJ(){throw A.L(A.jW(""),new Error())},
ir(){var t=new A.fu()
return t.b=t},
fu:function fu(){this.b=null},
bt(a,b,c){},
G(a){return a},
k0(a,b,c){A.bt(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
k1(a){return new Float32Array(a)},
k2(a,b,c){A.bt(a,b,c)
c=B.b.aR(a.byteLength-b,4)
return new Float32Array(a,b,c)},
k3(a){return new Int8Array(A.G(a))},
k4(a,b,c){A.bt(a,b,c)
c=B.b.aR(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
k5(a){return new Uint8Array(a)},
k6(a,b,c){A.bt(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
aH(a,b,c){if(a>>>0!==a||a>=c)throw A.f(A.fK(b,a))},
er(a,b,c){var t
if(!(a>>>0!==a))if(b==null)t=a>c
else t=b>>>0!==b||a>b||b>c
else t=!0
if(t)throw A.f(A.ln(a,b,c))
if(b==null)return c
return b},
aT:function aT(){},
b6:function b6(){},
cx:function cx(){},
fF:function fF(a){this.a=a},
dP:function dP(){},
P:function P(){},
aU:function aU(){},
a2:function a2(){},
cs:function cs(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
b7:function b7(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
hn(a,b){var t=b.c
return t==null?b.c=A.d0(a,"i_",[b.x]):t},
ik(a){var t=a.w
if(t===6||t===7)return A.ik(a.x)
return t===11||t===12},
kc(a){return a.as},
lJ(a,b){var t,s=b.length
for(t=0;t<s;++t)if(!a[t].b(b[t]))return!1
return!0},
aj(a){return A.fE(v.typeUniverse,a,!1)},
bu(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.bu(a0,t,a2,a3)
if(s===t)return a1
return A.iz(a0,s,!0)
case 7:t=a1.x
s=A.bu(a0,t,a2,a3)
if(s===t)return a1
return A.iy(a0,s,!0)
case 8:r=a1.y
q=A.bZ(a0,r,a2,a3)
if(q===r)return a1
return A.d0(a0,a1.x,q)
case 9:p=a1.x
o=A.bu(a0,p,a2,a3)
n=a1.y
m=A.bZ(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.hs(a0,o,m)
case 10:l=a1.x
k=a1.y
j=A.bZ(a0,k,a2,a3)
if(j===k)return a1
return A.iA(a0,l,j)
case 11:i=a1.x
h=A.bu(a0,i,a2,a3)
g=a1.y
f=A.lb(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.ix(a0,h,f)
case 12:e=a1.y
a3+=e.length
d=A.bZ(a0,e,a2,a3)
p=a1.x
o=A.bu(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.ht(a0,o,d,!0)
case 13:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.f(A.d9("Attempted to substitute unexpected RTI kind "+a))}},
bZ(a,b,c,d){var t,s,r,q,p=b.length,o=A.fG(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.bu(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
lc(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.fG(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.bu(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
lb(a,b,c,d){var t,s=b.a,r=A.bZ(a,s,c,d),q=b.b,p=A.bZ(a,q,c,d),o=b.c,n=A.lc(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.ej()
t.a=r
t.b=p
t.c=n
return t},
l(a,b){a[v.arrayRti]=b
return a},
iQ(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.lz(t)
return a.$S()}return null},
lD(a,b){var t
if(A.ik(b))if(a instanceof A.aM){t=A.iQ(a)
if(t!=null)return t}return A.av(a)},
av(a){if(a instanceof A.A)return A.i(a)
if(Array.isArray(a))return A.U(a)
return A.hx(J.bx(a))},
U(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
i(a){var t=a.$ti
return t!=null?t:A.hx(a)},
hx(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.kU(a,t)},
kU(a,b){var t=a instanceof A.aM?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.kA(v.typeUniverse,t.name)
b.$ccache=s
return s},
lz(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.fE(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
ly(a){return A.bw(A.i(a))},
hA(a){var t
if(a instanceof A.a8)return A.ls(a.$r,a.bI())
t=a instanceof A.aM?A.iQ(a):null
if(t!=null)return t
if(u.bW.b(a))return J.js(a).a
if(Array.isArray(a))return A.U(a)
return A.av(a)},
bw(a){var t=a.r
return t==null?a.r=new A.eq(a):t},
ls(a,b){var t,s,r=b,q=r.length
if(q===0)return u.F
if(0>=q)return A.a(r,0)
t=A.d2(v.typeUniverse,A.hA(r[0]),"@<0>")
for(s=1;s<q;++s){if(!(s<r.length))return A.a(r,s)
t=A.iC(v.typeUniverse,t,A.hA(r[s]))}return A.d2(v.typeUniverse,t,a)},
al(a){return A.bw(A.fE(v.typeUniverse,a,!1))},
kT(a){var t=this
t.b=A.la(t)
return t.b(a)},
la(a){var t,s,r,q,p
if(a===u.K)return A.l1
if(A.by(a))return A.l5
t=a.w
if(t===6)return A.kR
if(t===1)return A.iL
if(t===7)return A.kX
s=A.l9(a)
if(s!=null)return s
if(t===8){r=a.x
if(a.y.every(A.by)){a.f="$i"+r
if(r==="t")return A.l_
if(a===u.m)return A.kZ
return A.l4}}else if(t===10){q=A.lm(a.x,a.y)
p=q==null?A.iL:q
return p==null?A.hv(p):p}return A.kP},
l9(a){if(a.w===8){if(a===u.S)return A.d5
if(a===u.i||a===u.o)return A.l0
if(a===u.N)return A.l3
if(a===u.y)return A.hy}return null},
kS(a){var t=this,s=A.kO
if(A.by(t))s=A.kH
else if(t===u.K)s=A.hv
else if(A.c2(t)){s=A.kQ
if(t===u.a3)s=A.kF
else if(t===u.aD)s=A.iG
else if(t===u.cG)s=A.kD
else if(t===u.ae)s=A.iF
else if(t===u.dd)s=A.kE
else if(t===u.z)s=A.kG}else if(t===u.S)s=A.q
else if(t===u.N)s=A.V
else if(t===u.y)s=A.kC
else if(t===u.o)s=A.d4
else if(t===u.i)s=A.d3
else if(t===u.m)s=A.hu
t.a=s
return t.a(a)},
kP(a){var t=this
if(a==null)return A.c2(t)
return A.lE(v.typeUniverse,A.lD(a,t),t)},
kR(a){if(a==null)return!0
return this.x.b(a)},
l4(a){var t,s=this
if(a==null)return A.c2(s)
t=s.f
if(a instanceof A.A)return!!a[t]
return!!J.bx(a)[t]},
l_(a){var t,s=this
if(a==null)return A.c2(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.A)return!!a[t]
return!!J.bx(a)[t]},
kZ(a){var t=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.A)return!!a[t.f]
return!0}if(typeof a=="function")return!0
return!1},
iK(a){if(typeof a=="object"){if(a instanceof A.A)return u.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
kO(a){var t=this
if(a==null){if(A.c2(t))return a}else if(t.b(a))return a
throw A.L(A.iH(a,t),new Error())},
kQ(a){var t=this
if(a==null||t.b(a))return a
throw A.L(A.iH(a,t),new Error())},
iH(a,b){return new A.cZ("TypeError: "+A.is(a,A.a4(b,null)))},
is(a,b){return A.eO(a)+": type '"+A.a4(A.hA(a),null)+"' is not a subtype of type '"+b+"'"},
a9(a,b){return new A.cZ("TypeError: "+A.is(a,b))},
kX(a){var t=this
return t.x.b(a)||A.hn(v.typeUniverse,t).b(a)},
l1(a){return a!=null},
hv(a){if(a!=null)return a
throw A.L(A.a9(a,"Object"),new Error())},
l5(a){return!0},
kH(a){return a},
iL(a){return!1},
hy(a){return!0===a||!1===a},
kC(a){if(!0===a)return!0
if(!1===a)return!1
throw A.L(A.a9(a,"bool"),new Error())},
kD(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.L(A.a9(a,"bool?"),new Error())},
d3(a){if(typeof a=="number")return a
throw A.L(A.a9(a,"double"),new Error())},
kE(a){if(typeof a=="number")return a
if(a==null)return a
throw A.L(A.a9(a,"double?"),new Error())},
d5(a){return typeof a=="number"&&Math.floor(a)===a},
q(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.L(A.a9(a,"int"),new Error())},
kF(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.L(A.a9(a,"int?"),new Error())},
l0(a){return typeof a=="number"},
d4(a){if(typeof a=="number")return a
throw A.L(A.a9(a,"num"),new Error())},
iF(a){if(typeof a=="number")return a
if(a==null)return a
throw A.L(A.a9(a,"num?"),new Error())},
l3(a){return typeof a=="string"},
V(a){if(typeof a=="string")return a
throw A.L(A.a9(a,"String"),new Error())},
iG(a){if(typeof a=="string")return a
if(a==null)return a
throw A.L(A.a9(a,"String?"),new Error())},
hu(a){if(A.iK(a))return a
throw A.L(A.a9(a,"JSObject"),new Error())},
kG(a){if(a==null)return a
if(A.iK(a))return a
throw A.L(A.a9(a,"JSObject?"),new Error())},
iM(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.a4(a[r],b)
return t},
l8(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.iM(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.a4(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
iI(a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", ",a1=null
if(a4!=null){t=a4.length
if(a3==null)a3=A.l([],u.s)
else a1=a3.length
s=a3.length
for(r=t;r>0;--r)B.c.K(a3,"T"+(s+r))
for(q=u.Q,p="<",o="",r=0;r<t;++r,o=a0){n=a3.length
m=n-1-r
if(!(m>=0))return A.a(a3,m)
p=p+o+a3[m]
l=a4[r]
k=l.w
if(!(k===2||k===3||k===4||k===5||l===q))p+=" extends "+A.a4(l,a3)}p+=">"}else p=""
q=a2.x
j=a2.y
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=A.a4(q,a3)
for(b="",a="",r=0;r<h;++r,a=a0)b+=a+A.a4(i[r],a3)
if(f>0){b+=a+"["
for(a="",r=0;r<f;++r,a=a0)b+=a+A.a4(g[r],a3)
b+="]"}if(d>0){b+=a+"{"
for(a="",r=0;r<d;r+=3,a=a0){b+=a
if(e[r+1])b+="required "
b+=A.a4(e[r+2],a3)+" "+e[r]}b+="}"}if(a1!=null){a3.toString
a3.length=a1}return p+"("+b+") => "+c},
a4(a,b){var t,s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=a.x
s=A.a4(t,b)
r=t.w
return(r===11||r===12?"("+s+")":s)+"?"}if(m===7)return"FutureOr<"+A.a4(a.x,b)+">"
if(m===8){q=A.ld(a.x)
p=a.y
return p.length>0?q+("<"+A.iM(p,b)+">"):q}if(m===10)return A.l8(a,b)
if(m===11)return A.iI(a,b,null)
if(m===12)return A.iI(a.x,b,a.y)
if(m===13){o=a.x
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.a(b,o)
return b[o]}return"?"},
ld(a){var t=A.j_(a)
if(t!=null)return t
return"minified:"+a},
kB(a,b){var t=a.tR[b]
while(typeof t=="string")t=a.tR[t]
return t},
kA(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.fE(a,b,!1)
else if(typeof n=="number"){t=n
s=A.d1(a,5,"#")
r=A.fG(t)
for(q=0;q<t;++q)r[q]=s
p=A.d0(a,b,r)
o[b]=p
return p}else return n},
kz(a,b){return A.iD(a.tR,b)},
ky(a,b){return A.iD(a.eT,b)},
fE(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.iB(a,null,b,!1)
s.set(b,t)
return t},
d2(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.iB(a,b,c,!0)
r.set(c,s)
return s},
iC(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.hs(a,b,c.w===9?c.y:[c])
q.set(t,r)
return r},
iB(a,b,c,d){return A.kq(A.kk(a,b,c,d))},
aX(a,b){b.a=A.kS
b.b=A.kT
return b},
d1(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.ag(null,null)
t.w=b
t.as=c
s=A.aX(a,t)
a.eC.set(c,s)
return s},
iz(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.kw(a,b,s,c)
a.eC.set(s,t)
return t},
kw(a,b,c,d){var t,s,r
if(d){t=b.w
s=!0
if(!A.by(b))if(!(b===u.a||b===u.T))if(t!==6)s=t===7&&A.c2(b.x)
if(s)return b
else if(t===1)return u.a}r=new A.ag(null,null)
r.w=6
r.x=b
r.as=c
return A.aX(a,r)},
iy(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.ku(a,b,s,c)
a.eC.set(s,t)
return t},
ku(a,b,c,d){var t,s
if(d){t=b.w
if(A.by(b)||b===u.K)return b
else if(t===1)return A.d0(a,"i_",[b])
else if(b===u.a||b===u.T)return u.bc}s=new A.ag(null,null)
s.w=7
s.x=b
s.as=c
return A.aX(a,s)},
kx(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.ag(null,null)
t.w=13
t.x=b
t.as=r
s=A.aX(a,t)
a.eC.set(r,s)
return s},
d_(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
kt(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
d0(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.d_(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.ag(null,null)
s.w=8
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.aX(a,s)
a.eC.set(q,r)
return r},
hs(a,b,c){var t,s,r,q,p,o
if(b.w===9){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.d_(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.ag(null,null)
p.w=9
p.x=t
p.y=s
p.as=r
o=A.aX(a,p)
a.eC.set(r,o)
return o},
iA(a,b,c){var t,s,r="+"+(b+"("+A.d_(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.ag(null,null)
t.w=10
t.x=b
t.y=c
t.as=r
s=A.aX(a,t)
a.eC.set(r,s)
return s},
ix(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.d_(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.d_(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.kt(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.ag(null,null)
q.w=11
q.x=b
q.y=c
q.as=s
p=A.aX(a,q)
a.eC.set(s,p)
return p},
ht(a,b,c,d){var t,s=b.as+("<"+A.d_(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.kv(a,b,c,s,d)
a.eC.set(s,t)
return t},
kv(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.fG(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.bu(a,b,s,0)
n=A.bZ(a,c,s,0)
return A.ht(a,o,n,c!==n)}}m=new A.ag(null,null)
m.w=12
m.x=b
m.y=c
m.as=d
return A.aX(a,m)},
kk(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
kq(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.km(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.iv(a,s,m,l,!1)
else if(r===46)s=A.iv(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.br(a.u,a.e,l.pop()))
break
case 94:l.push(A.kx(a.u,l.pop()))
break
case 35:l.push(A.d1(a.u,5,"#"))
break
case 64:l.push(A.d1(a.u,2,"@"))
break
case 126:l.push(A.d1(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.ko(a,l)
break
case 38:A.kn(a,l)
break
case 63:q=a.u
l.push(A.iz(q,A.br(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.iy(q,A.br(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.kl(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.iw(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.kr(a.u,a.e,p)
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
return A.br(a.u,a.e,n)},
km(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
iv(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===9)p=p.x
o=A.kB(t,p.x)[q]
if(o==null)A.aJ('No "'+q+'" in "'+A.kc(p)+'"')
d.push(A.d2(t,p,o))}else d.push(q)
return n},
ko(a,b){var t,s=a.u,r=A.iu(a,b),q=b.pop()
if(typeof q=="string")b.push(A.d0(s,q,r))
else{t=A.br(s,a.e,q)
switch(t.w){case 11:b.push(A.ht(s,t,r,a.n))
break
default:b.push(A.hs(s,t,r))
break}}},
kl(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
if(typeof p=="number")switch(p){case-1:o=b.pop()
break
case-2:n=b.pop()
break
default:b.push(p)
break}else b.push(p)
t=A.iu(a,b)
p=b.pop()
switch(p){case-3:p=b.pop()
if(o==null)o=q.sEA
if(n==null)n=q.sEA
s=A.br(q,a.e,p)
r=new A.ej()
r.a=t
r.b=o
r.c=n
b.push(A.ix(q,s,r))
return
case-4:b.push(A.iA(q,b.pop(),t))
return
default:throw A.f(A.d9("Unexpected state under `()`: "+A.x(p)))}},
kn(a,b){var t=b.pop()
if(0===t){b.push(A.d1(a.u,1,"0&"))
return}if(1===t){b.push(A.d1(a.u,4,"1&"))
return}throw A.f(A.d9("Unexpected extended operation "+A.x(t)))},
iu(a,b){var t=b.splice(a.p)
A.iw(a.u,a.e,t)
a.p=b.pop()
return t},
br(a,b,c){if(typeof c=="string")return A.d0(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.kp(a,b,c)}else return c},
iw(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.br(a,b,c[t])},
kr(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.br(a,b,c[t])},
kp(a,b,c){var t,s,r=b.w
if(r===9){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==8)throw A.f(A.d9("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.f(A.d9("Bad index "+c+" for "+b.B(0)))},
lE(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.I(a,b,null,c,null)
s.set(c,t)}return t},
I(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(A.by(d))return!0
t=b.w
if(t===4)return!0
if(A.by(b))return!1
if(b.w===1)return!0
s=t===13
if(s)if(A.I(a,c[b.x],c,d,e))return!0
r=d.w
q=u.a
if(b===q||b===u.T){if(r===7)return A.I(a,b,c,d.x,e)
return d===q||d===u.T||r===6}if(d===u.K){if(t===7)return A.I(a,b.x,c,d,e)
return t!==6}if(t===7){if(!A.I(a,b.x,c,d,e))return!1
return A.I(a,A.hn(a,b),c,d,e)}if(t===6)return A.I(a,q,c,d,e)&&A.I(a,b.x,c,d,e)
if(r===7){if(A.I(a,b,c,d.x,e))return!0
return A.I(a,b,c,A.hn(a,d),e)}if(r===6)return A.I(a,b,c,q,e)||A.I(a,b,c,d.x,e)
if(s)return!1
q=t!==11
if((!q||t===12)&&d===u.Z)return!0
p=t===10
if(p&&d===u.cY)return!0
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
if(!A.I(a,k,c,j,e)||!A.I(a,j,e,k,c))return!1}return A.iJ(a,b.x,c,d.x,e)}if(r===11){if(b===u.O)return!0
if(q)return!1
return A.iJ(a,b,c,d,e)}if(t===8){if(r!==8)return!1
return A.kY(a,b,c,d,e)}if(p&&r===10)return A.l2(a,b,c,d,e)
return!1},
iJ(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.I(a2,a3.x,a4,a5.x,a6))return!1
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
if(!A.I(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.I(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.I(a2,l[i],a6,h,a4))return!1}g=t.c
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
if(!A.I(a2,f[b+2],a6,h,a4))return!1
break}}while(c<e){if(g[c+1])return!1
c+=3}return!0},
kY(a,b,c,d,e){var t,s,r,q,p,o=b.x,n=d.x
while(o!==n){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.d2(a,b,s[p])
return A.iE(a,q,null,c,d.y,e)}return A.iE(a,b.y,null,c,d.y,e)},
iE(a,b,c,d,e,f){var t,s=b.length
for(t=0;t<s;++t)if(!A.I(a,b[t],d,e[t],f))return!1
return!0},
l2(a,b,c,d,e){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.I(a,s[t],c,r[t],e))return!1
return!0},
c2(a){var t=a.w,s=!0
if(!(a===u.a||a===u.T))if(!A.by(a))if(t!==6)s=t===7&&A.c2(a.x)
return s},
by(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.Q},
iD(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
fG(a){return a>0?new Array(a):v.typeUniverse.sEA},
ag:function ag(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
ej:function ej(){this.c=this.b=this.a=null},
eq:function eq(a){this.a=a},
ei:function ei(){},
cZ:function cZ(a){this.a=a},
e9:function e9(){},
jX(a,b){return new A.ad(a.l("@<0>").aX(b).l("ad<1,2>"))},
jY(a,b,c){return b.l("@<0>").aX(c).l("ha<1,2>").a(A.iT(a,new A.ad(b.l("@<0>").aX(c).l("ad<1,2>"))))},
ae(a,b){return new A.ad(a.l("@<0>").aX(b).l("ad<1,2>"))},
jR(a,b){var t=J.aZ(a.a)
if(new A.bp(t,a.b,a.$ti.l("bp<1>")).t())return t.gD()
return null},
hb(a,b,c){var t=A.jX(b,c)
a.aC(0,new A.f9(t,b,c))
return t},
hc(a){var t,s
if(A.hF(a))return"{...}"
t=new A.cO("")
try{s={}
B.c.K($.a5,a)
t.a+="{"
s.a=!0
a.aC(0,new A.fa(s,t))
t.a+="}"}finally{if(0>=$.a5.length)return A.a($.a5,-1)
$.a5.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
f9:function f9(a,b,c){this.a=a
this.b=b
this.c=c},
w:function w(){},
K:function K(){},
fa:function fa(a,b){this.a=a
this.b=b},
bS:function bS(){},
l7(a,b){var t,s,r,q=null
try{q=JSON.parse(a)}catch(s){t=A.ev(s)
r=A.az(String(t),null,null)
throw A.f(r)}r=A.fJ(q)
return r},
fJ(a){var t
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.ek(a,Object.create(null))
for(t=0;t<a.length;++t)a[t]=A.fJ(a[t])
return a},
kh(a,b,c,d,e,a0){var t,s,r,q,p,o,n,m,l,k,j="Invalid encoding before padding",i="Invalid character",h=B.b.H(a0,2),g=a0&3,f=$.jg()
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
if(g===3){if((h&3)!==0)throw A.f(A.az(j,a,q))
l=e+1
r&2&&A.b(d)
t=d.length
if(!(e<t))return A.a(d,e)
d[e]=h>>>10
if(!(l<t))return A.a(d,l)
d[l]=h>>>2}else{if((h&15)!==0)throw A.f(A.az(j,a,q))
r&2&&A.b(d)
if(!(e<d.length))return A.a(d,e)
d[e]=h>>>4}k=(3-g)*3
if(o===37)k+=2
return A.iq(a,q+1,c,-k-1)}throw A.f(A.az(i,a,q))}if(p>=0&&p<=127)return(h<<2|g)>>>0
for(q=b;q<c;++q){if(!(q<t))return A.a(a,q)
if(a.charCodeAt(q)>127)break}throw A.f(A.az(i,a,q))},
kf(a,b,c,d){var t=A.kg(a,b,c),s=(d&3)+(t-b),r=B.b.H(s,2)*3,q=s&3
if(q!==0&&t<c)r+=q-1
if(r>0)return new Uint8Array(r)
return $.jf()},
kg(a,b,c){var t,s=a.length,r=c,q=r,p=0
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
iq(a,b,c,d){var t,s,r
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
if(b===c)break}if(b!==c)throw A.f(A.az("Invalid padding character",a,b))
return-t-1},
ek:function ek(a,b){this.a=a
this.b=b
this.c=null},
el:function el(a){this.a=a},
fD:function fD(){},
fC:function fC(){},
ex:function ex(){},
ez:function ez(){},
ey:function ey(){},
ft:function ft(){this.a=0},
b0:function b0(){},
dt:function dt(){},
du:function du(){},
dK:function dK(){},
f3:function f3(a){this.a=a},
dL:function dL(){},
f6:function f6(){},
f5:function f5(a){this.a=a},
f7:function f7(){},
dN(a,b,c,d){var t,s=J.jT(a,d)
if(a!==0&&b!=null)for(t=0;t<a;++t)s[t]=b
return s},
jZ(a,b,c){var t,s,r=A.l([],c.l("v<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.F)(a),++s)B.c.K(r,c.a(a[s]))
r.$flags=1
return r},
m(a,b){var t,s
if(Array.isArray(a))return A.l(a.slice(0),b.l("v<0>"))
t=A.l([],b.l("v<0>"))
for(s=J.aZ(a);s.t();)B.c.K(t,s.gD())
return t},
fm(a,b,c){var t,s,r,q,p
A.cJ(b,"start")
t=c==null
s=!t
if(s){r=c-b
if(r<0)throw A.f(A.W(c,b,null,"end",null))
if(r===0)return""}if(Array.isArray(a)){q=a
p=q.length
if(t)c=p
return A.ii(b>0||c<p?q.slice(b,c):q)}if(u.Y.b(a))return A.kd(a,b,c)
if(s)a=J.jv(a,c)
if(b>0)a=J.jt(a,b)
t=A.m(a,u.S)
return A.ii(t)},
kd(a,b,c){var t=a.length
if(b>=t)return""
return A.ka(a,b,c==null||c>t?t:c)},
ij(a){return new A.cn(a,A.i9(a,!1,!0,!1,!1,""))},
im(a,b,c){var t=J.aZ(b)
if(!t.t())return a
if(c.length===0){do a+=A.x(t.gD())
while(t.t())}else{a+=A.x(t.gD())
while(t.t())a=a+c+A.x(t.gD())}return a},
eO(a){if(typeof a=="number"||A.hy(a)||a==null)return J.aL(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ig(a)},
d9(a){return new A.d8(a)},
d7(a){return new A.an(!1,null,null,a)},
jw(a,b,c){return new A.an(!0,a,b,c)},
W(a,b,c,d,e){return new A.cI(b,c,!0,a,d,"Invalid value")},
bn(a,b,c){if(0>a||a>c)throw A.f(A.W(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.f(A.W(b,a,c,"end",null))
return b}return c},
cJ(a,b){if(a<0)throw A.f(A.W(a,0,null,b,null))
return a},
h3(a,b,c,d){return new A.dB(b,!0,a,d,"Index out of range")},
bU(a){return new A.cS(a)},
ip(a){return new A.ee(a)},
il(a){return new A.cN(a)},
ac(a){return new A.dr(a)},
az(a,b,c){return new A.bD(a,b,c)},
jS(a,b,c){var t,s
if(A.hF(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.l([],u.s)
B.c.K($.a5,a)
try{A.l6(a,t)}finally{if(0>=$.a5.length)return A.a($.a5,-1)
$.a5.pop()}s=A.im(b,u.v.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
h7(a,b,c){var t,s
if(A.hF(a))return b+"..."+c
t=new A.cO(b)
B.c.K($.a5,a)
try{s=t
s.a=A.im(s.a,a,", ")}finally{if(0>=$.a5.length)return A.a($.a5,-1)
$.a5.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
l6(a,b){var t,s,r,q,p,o,n,m=a.gu(a),l=0,k=0
for(;;){if(!(l<80||k<3))break
if(!m.t())return
t=A.x(m.gD())
B.c.K(b,t)
l+=t.length+2;++k}if(!m.t()){if(k<=5)return
if(0>=b.length)return A.a(b,-1)
s=b.pop()
if(0>=b.length)return A.a(b,-1)
r=b.pop()}else{q=m.gD();++k
if(!m.t()){if(k<=4){B.c.K(b,A.x(q))
return}s=A.x(q)
if(0>=b.length)return A.a(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gD();++k
for(;m.t();q=p,p=o){o=m.gD();++k
if(k>100){for(;;){if(!(l>75&&k>3))break
if(0>=b.length)return A.a(b,-1)
l-=b.pop().length+2;--k}B.c.K(b,"...")
return}}r=A.x(q)
s=A.x(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
for(;;){if(!(l>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)B.c.K(b,n)
B.c.K(b,r)
B.c.K(b,s)},
hd(a,b,c,d){var t
if(B.C===c){t=B.b.gF(a)
b=J.aw(b)
return A.fn(A.aF(A.aF($.ew(),t),b))}if(B.C===d){t=B.b.gF(a)
b=J.aw(b)
c=J.aw(c)
return A.fn(A.aF(A.aF(A.aF($.ew(),t),b),c))}t=B.b.gF(a)
b=J.aw(b)
c=J.aw(c)
d=J.aw(d)
d=A.fn(A.aF(A.aF(A.aF(A.aF($.ew(),t),b),c),d))
return d},
n(a){var t,s,r=$.ew()
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.F)(a),++s)r=A.aF(r,J.aw(a[s]))
return A.fn(r)},
fv:function fv(){},
C:function C(){},
d8:function d8(a){this.a=a},
cQ:function cQ(){},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cI:function cI(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dB:function dB(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cS:function cS(a){this.a=a},
ee:function ee(a){this.a=a},
cN:function cN(a){this.a=a},
dr:function dr(a){this.a=a},
dS:function dS(){},
cM:function cM(){},
fw:function fw(a){this.a=a},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
d:function d(){},
aS:function aS(a,b,c){this.a=a
this.b=b
this.$ti=c},
b8:function b8(){},
A:function A(){},
e4:function e4(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
cO:function cO(a){this.a=a},
dA(a){var t=new A.eT()
t.dP(a)
return t},
eT:function eT(){this.a=$
this.b=0
this.c=2147483647},
fr:function fr(){},
fH:function fH(){},
fs:function fs(){},
fI:function fI(){},
jK(a,b,c,d){var t=A.hq(),s=A.hq(),r=A.hq(),q=new Uint16Array(16),p=new Uint32Array(573),o=new Uint8Array(573)
t=new A.eM(a,c,t,s,r,q,p,o)
t.ei(b,d)
t.e2(B.M)
return t},
hW(a,b,c,d){var t,s=b*2,r=a.length
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
hq(){return new A.fx()},
ki(a,b,c){var t,s,r,q,p,o,n,m=new Uint16Array(16)
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
o=A.kj(o,n)
a.$flags&2&&A.b(a)
if(!(p<r))return A.a(a,p)
a[p]=o}},
kj(a,b){var t,s=0
do{t=A.Y(a,1)
s=(s|a&1)<<1>>>0
if(--b,b>0){a=t
continue}else break}while(!0)
return A.Y(s,1)},
it(a){var t
if(a<256){if(!(a>=0))return A.a(B.U,a)
t=B.U[a]}else{t=256+A.Y(a,7)
if(!(t<512))return A.a(B.U,t)
t=B.U[t]}return t},
hr(a,b,c,d,e){return new A.fB(a,b,c,d,e)},
Y(a,b){if(a>=0)return B.b.bW(a,b)
else return B.b.bW(a,b)+B.b.ce(2,(~b>>>0)+65536&65535)},
bV:function bV(a,b){this.a=a
this.b=b},
eM:function eM(a,b,c,d,e,f,g,h){var _=this
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
_.aj=_.ai=_.bw=_.bO=_.bi=_.aS=_.bN=_.y2=_.y1=_.xr=$},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fx:function fx(){this.c=this.b=this.a=$},
fB:function fB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eZ:function eZ(a,b){var _=this
_.a=a
_.b=null
_.c=b
_.e=_.d=0},
db:function db(a,b){this.a=a
this.b=b},
f0(a,b,c,d){var t,s,r=new A.dC(b)
if(d==null)d=0
if(c==null)c=a.length-d
t=a.length
if(d+c>t)c=t-d
s=u.p.b(a)?a:new Uint8Array(A.G(a))
t=J.M(B.h.gE(s),s.byteOffset+d,c)
r.b=t
r.d=t.length
return r},
dC:function dC(a){var _=this
_.b=null
_.c=0
_.d=$
_.a=a},
dD:function dD(){},
ic(a,b){var t=b==null?32768:b
return new A.cC(new Uint8Array(t),a)},
cC:function cC(a,b){this.b=0
this.c=a
this.a=b},
dU:function dU(){},
eA:function eA(a,b){this.a=a
this.b=b},
B:function B(a){this.a=-1
this.b=a},
ao:function ao(a,b){this.a=a
this.b=b},
de:function de(a){this.a=a},
df:function df(a){this.a=a},
dg:function dg(a){this.a=a},
dh:function dh(a){this.a=a},
di:function di(a){this.a=a},
dj:function dj(a){this.a=a},
dl:function dl(a,b){this.a=a
this.b=b},
dm:function dm(a){this.a=a},
dn:function dn(a,b){this.a=a
this.b=b},
dp:function dp(a){this.a=a},
dq:function dq(a,b){this.a=a
this.b=b},
c4:function c4(a){this.a=a},
dk:function dk(a){this.a=a},
c3:function c3(a){this.a=a},
et(a,b,c){var t
if(b===c)return a
switch(b.a){case 0:if(a===0)t=0
else{t=B.aB.i(0,c)
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
case 1:return B.b.H(A.q(a),1)
case 2:return a
case 3:return a*17
case 4:return a*4369
case 5:return a*286331153
case 6:return a*8
case 7:return a*2184
case 8:return a*143165576
case 9:case 10:case 11:return a/3}break
case 3:switch(c.a){case 0:return a===0?0:1
case 1:return B.b.H(A.q(a),6)
case 2:return B.b.H(A.q(a),4)
case 3:return a
case 4:return a*257
case 5:return a*16843009
case 6:return B.b.H(A.q(a),1)
case 7:return a*128
case 8:return a*8421504
case 9:case 10:case 11:return a/255}break
case 4:switch(c.a){case 0:return a===0?0:1
case 1:return B.b.H(A.q(a),14)
case 2:return B.b.H(A.q(a),12)
case 3:return B.b.H(A.q(a),8)
case 4:return a
case 5:return A.q(a)<<8>>>0
case 6:return B.b.H(A.q(a),9)
case 7:return B.b.H(A.q(a),1)
case 8:return a*524296
case 9:case 10:case 11:return a/65535}break
case 5:switch(c.a){case 0:return a===0?0:1
case 1:return B.b.H(A.q(a),30)
case 2:return B.b.H(A.q(a),28)
case 3:return B.b.H(A.q(a),24)
case 4:return B.b.H(A.q(a),16)
case 5:return a
case 6:return B.b.H(A.q(a),25)
case 7:return B.b.H(A.q(a),17)
case 8:return B.b.H(A.q(a),1)
case 9:case 10:case 11:return a/4294967295}break
case 6:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.b.H(A.q(a),5)
case 2:return a<=0?0:B.b.H(A.q(a),3)
case 3:return a<=0?0:A.q(a)<<1>>>0
case 4:return a<=0?0:A.q(a)*516
case 5:return a<=0?0:A.q(a)*33818640
case 6:return a
case 7:return a*258
case 8:return a*16909320
case 9:case 10:case 11:return a/127}break
case 7:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.b.H(A.q(a),15)
case 2:return a<=0?0:B.b.H(A.q(a),11)
case 3:return a<=0?0:B.b.H(A.q(a),7)
case 4:return a<=0?0:A.q(a)<<1>>>0
case 5:return a<=0?0:A.q(a)*131076
case 6:return B.b.H(A.q(a),8)
case 7:return a
case 8:return A.q(a)*65538
case 9:case 10:case 11:return a/32767}break
case 8:switch(c.a){case 0:return a===0?0:1
case 1:return a<=0?0:B.b.H(A.q(a),29)
case 2:return a<=0?0:B.b.H(A.q(a),27)
case 3:return a<=0?0:B.b.H(A.q(a),23)
case 4:return a<=0?0:B.b.H(A.q(a),16)
case 5:return a<=0?0:A.q(a)<<1>>>0
case 6:return B.b.H(A.q(a),24)
case 7:return B.b.H(A.q(a),16)
case 8:return a
case 9:case 10:case 11:return a/2147483647}break
case 9:case 10:case 11:switch(c.a){case 0:return a===0?0:1
case 1:return B.a.h(B.a.C(a,0,1)*3)
case 2:return B.a.h(B.a.C(a,0,1)*15)
case 3:return B.a.h(B.a.C(a,0,1)*255)
case 4:return B.a.h(B.a.C(a,0,1)*65535)
case 5:return B.a.h(B.a.C(a,0,1)*4294967295)
case 6:return B.a.h(a<0?B.a.C(a,-1,1)*128:B.a.C(a,-1,1)*127)
case 7:return B.a.h(a<0?B.a.C(a,-1,1)*32768:B.a.C(a,-1,1)*32767)
case 8:return B.a.h(a<0?B.a.C(a,-1,1)*2147483648:B.a.C(a,-1,1)*2147483647)
case 9:case 10:case 11:return a}break}},
S:function S(a,b){this.a=a
this.b=b},
da:function da(a,b){this.a=a
this.b=b},
fY(a){var t,s=new A.dv(A.ae(u.N,u.P))
s.dQ(a)
t=a.b
if(t!=null)s.b=new Uint8Array(A.G(t))
return s},
dv:function dv(a){this.b=null
this.a=a},
e(a,b,c){return new A.dw(a)},
dw:function dw(a){this.a=a},
bF:function bF(a){this.a=a},
eV:function eV(a){this.a=a},
i0(a){var t=new A.b3(A.ae(u.S,u.r),new A.bF(A.ae(u.N,u.P)))
t.eO(a)
return t},
b3:function b3(a,b){this.a=a
this.b=b},
eW:function eW(a){this.a=a},
eX:function eX(a){this.a=a},
aP:function aP(a,b){this.a=a
this.b=b},
eL:function eL(){},
eN:function eN(){},
bR:function bR(a,b){this.a=a
this.b=b},
cF:function cF(a,b){this.a=a
this.b=b},
cG:function cG(){},
dF:function dF(a,b,c,d,e,f,g,h,i){var _=this
_.y=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
aV:function aV(a,b){this.a=a
this.b=b},
fh:function fh(){},
f1:function f1(a,b,c){var _=this
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
ff:function ff(a){var _=this
_.a=a
_.c=_.b=0
_.d=$
_.e=0},
e_:function e_(a,b){this.a=a
this.b=b},
fg:function fg(a,b,c){var _=this
_.a=null
_.b=a
_.c=0
_.d=b
_.e=$
_.f=0
_.r=!1
_.w=null
_.z=c},
jQ(a){return new A.cd(a.a,a.b,B.h.bZ(a.c,0))},
eU:function eU(a,b){this.a=a
this.b=b},
cd:function cd(a,b,c){this.a=a
this.b=b
this.c=c},
h1(a,b,c,d,e,f,g,h,i,j,k,l){var t=new A.b4(null,null,null,a,h,e,d,0)
B.c.K(t.gaf(),t)
t.cL(k,f,b,c,g,i,j,B.l,!1)
return t},
h2(a,b,c){var t,s,r,q=null,p=a.a
p=p==null?q:p.Z(c)
t=a.e
t=t==null?q:A.fY(t)
s=a.c
s=s==null?q:A.jQ(s)
r=a.w
p=new A.b4(p,s,t,q,a.r,r,a.y,a.z)
p.dR(a,b,c)
return p},
eS:function eS(a,b){this.a=a
this.b=b},
b4:function b4(a,b,c,d,e,f,g,h){var _=this
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
N:function N(){},
ce:function ce(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
cf:function cf(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
cg:function cg(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
ch:function ch(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
ci:function ci(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
cj:function cj(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
bG:function bG(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
bH:function bH(a,b,c,d,e){var _=this
_.d=a
_.e=b
_.a=c
_.b=d
_.c=e},
bI:function bI(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
ck:function ck(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
bJ:function bJ(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.r=null
_.a=d
_.b=e
_.c=f},
i2(a,b,c){return new A.bK(new Uint8Array(a*b*c),null,a,b,c)},
bK:function bK(a,b,c,d,e){var _=this
_.d=a
_.e=b
_.a=c
_.b=d
_.c=e},
cD:function cD(){},
cE:function cE(a,b,c){this.c=a
this.a=b
this.b=c},
ba:function ba(a,b,c){this.c=a
this.a=b
this.b=c},
he(a){return new A.bb(-1,0,-a.c,a)},
bb:function bb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hf(a){return new A.bc(-1,0,-a.c,a)},
bc:function bc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hg(a){return new A.bd(-1,0,-a.c,a)},
bd:function bd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hh(a){return new A.be(-1,0,-a.c,a)},
be:function be(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hi(a){return new A.bf(-1,0,-a.c,a)},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hj(a){return new A.bg(-1,0,-a.c,a)},
bg:function bg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
af(a,b,c,d,e){a.N(b-1,c)
return new A.dV(a,b,b+d-1,c+e-1)},
dV:function dV(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
dW(a){return new A.bh(-1,0,0,-1,0,a)},
bh:function bh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hk(a){return new A.bi(-1,0,-a.c,a)},
bi:function bi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dX(a){return new A.bj(-1,0,0,-2,0,a)},
bj:function bj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hl(a){return new A.bk(-1,0,-a.c,a)},
bk:function bk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dY(a){return new A.bl(-1,0,0,-(a.c<<2>>>0),a)},
bl:function bl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hm(a){return new A.bm(-1,0,-a.c,a)},
bm:function bm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(){},
at(a){return new A.eY(a)},
eY:function eY(a){this.a=a},
f_(a,b,c,d){var t=a.length,s=c==null?t:d+c
return new A.bL(a,d,Math.min(t,s),d,!0)},
i3(a){var t=a.a,s=a.d,r=t.length
return new A.bL(t,a.b,Math.min(r,a.c),s,!0)},
bL:function bL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dR:function dR(a){var _=this
_.a=$
_.b=10
_.c=16
_.d=3
_.f=_.e=$
_.r=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=a
_.ax=_.at=$},
b9(a,b){return new A.dT(!0,new Uint8Array(b))},
dT:function dT(a,b){this.a=0
this.b=a
this.c=b},
e2:function e2(){},
jF(a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=u.n,a1=A.l([0,0,0],a0),a2=A.l([1,1,1],a0)
for(a0=B.aY.aZ(a3),t=a0.length,s=a,r=s,q=r,p=0,o=0,n=0;n<a0.length;a0.length===t||(0,A.F)(a0),++n){++o
m=B.k.bU(a0[n])
l=m.length
if(l===0||B.k.cu(m,"#"))continue
if(0>=l)return A.a(m,0)
k=m.charCodeAt(0)
if(!(k>=48&&k<=57||k===45||k===43||k===46)){if(s!=null&&p>0)throw A.f(A.Z("Unexpected text in the colour table (line "+o+")."))
j=B.k.f1(m,A.ij("\\s"))
l=j<0
i=l?m:B.k.aW(m,0,j)
h=l?"":B.k.bU(B.k.c_(m,j))
switch(i){case"TITLE":r=A.lN(h,'"',"")
break
case"LUT_3D_SIZE":g=A.k8(h,a)
if(g==null||g<2||g>65)throw A.f(B.bs)
if(q!=null)throw A.f(B.bA)
s=new Float32Array(g*g*g*3)
q=g
break
case"DOMAIN_MIN":a1=A.fX(h,o)
break
case"DOMAIN_MAX":a2=A.fX(h,o)
break
case"LUT_1D_SIZE":throw A.f(B.by)
default:throw A.f(A.Z('Unknown keyword "'+(i.length>20?B.k.aW(i,0,20):i)+'" in .cube file.'))}continue}if(s==null)throw A.f(B.bo)
l=s.length
if(p>=l)throw A.f(B.bp)
g=A.fX(m,o)
if(0>=g.length)return A.a(g,0)
f=B.a.C(g[0],0,1)
s.$flags&2&&A.b(s)
s[p]=f
f=p+1
if(1>=g.length)return A.a(g,1)
e=B.a.C(g[1],0,1)
if(!(f<l))return A.a(s,f)
s[f]=e
e=p+2
if(2>=g.length)return A.a(g,2)
f=B.a.C(g[2],0,1)
if(!(e<l))return A.a(s,e)
s[e]=f
p+=3}if(q==null||s==null)throw A.f(B.bw)
if(p!==s.length)throw A.f(A.Z("The colour table has "+B.b.aR(p,3)+" rows; expected "+q*q*q+"."))
for(a0=a2.length,t=a1.length,d=0;d<3;++d){if(!(d<a0))return A.a(a2,d)
l=a2[d]
if(!(d<t))return A.a(a1,d)
if(!(l>a1[d]))throw A.f(B.bx)}c=B.c.di(a1,new A.eC())&&B.c.di(a2,new A.eD())
b=new A.c7(q,s)
return new A.ah(c?b:b.ez(a1,a2),r)},
fX(a,b){var t,s,r,q,p=B.k.dL(a,A.ij("\\s+"))
if(p.length!==3)throw A.f(A.Z("Line "+b+" must have exactly 3 numbers."))
t=A.l([],u.n)
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.F)(p),++r){q=A.k7(p[r])
if(q==null||!isFinite(q))throw A.f(A.Z("Line "+b+" has an invalid number."))
B.c.K(t,q)}return t},
jE(a,b){var t,s,r,q,p,o,n
if(a<2||a>65)throw A.f(B.bq)
t=null
try{t=B.ab.aZ(b)}catch(s){if(A.ev(s) instanceof A.bD)throw A.f(B.bu)
else throw s}r=a*a*a*3
if(J.aK(t)!==r*2)throw A.f(B.bz)
q=A.hS(t)
p=new Float32Array(r)
for(o=0;o<r;++o){n=q.getUint16(o*2,!0)
if(!(o<r))return A.a(p,o)
p[o]=n/65535}return new A.c7(a,p)},
c7:function c7(a,b){this.a=a
this.b=b},
eC:function eC(){},
eD:function eD(){},
eE:function eE(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eF:function eF(a,b,c){this.a=a
this.b=b
this.c=c},
jI(a,b,c){var t,s,r,q,p,o,n,m,l,k=a.a,j=a.b,i=b.a,h=i.a,g=i.b,f=Math.max(k/h,j/g),e=B.a6.i(0,b.b)
e.toString
t=b.c*c
s=new A.en(i)
for(i=k/2,r=h/2,q=j/2,p=g/2,o=0;o<j;++o){n=(o+0.5-q)/f+p-0.5
for(m=o*k,l=0;l<k;++l){if(!s.cq((l+0.5-i)/f+r-0.5,n))continue
A.hC(a,m+l,e,s.b,s.c,s.d,s.e*t)}}},
jJ(b2,b3,b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=b3.A(B.e),a7=b3.A(B.f),a8=Math.atan2(a7.b-a6.b,a7.a-a6.a),a9=Math.cos(a8),b0=Math.sin(a8),b1=Math.max(1,b3.A(B.e).X(0,b3.A(B.f)).gj(0))
switch(b4.b.a){case 0:t=b3.A(B.o)
s=b3.eI(B.o).a
r=Math.max(1,s[2]-s[0])*1.15
break
case 1:t=a6.aE(a7,0.5)
r=b1*2.3
break
case 2:t=b3.I(1)
r=b1*0.8
break
case 3:t=b3.A(B.K)
r=b3.I(61).X(0,b3.I(291)).gj(0)*1.5
break
case 4:t=b3.I(105).aE(b3.I(334),0.5).aE(b3.I(10),0.55)
r=b1*2
break
default:t=null
r=null}if(typeof r!=="number")return r.bd()
r*=b4.c
s=b4.a
q=s.a
p=s.b
o=r*p/q
n=b4.d
m=t.a+b0*n*o
l=t.b+-a9*n*o
k=0.5*Math.sqrt(r*r+o*o)
j=Math.max(0,B.a.Y(m-k))
n=b2.a
i=Math.min(n-1,B.a.a6(m+k))
h=Math.max(0,B.a.Y(l-k))
g=Math.min(b2.b-1,B.a.a6(l+k))
f=new A.en(s)
e=b4.e*b5
d=q/r
c=p/o
for(s=r/2,b=o/2,a=h;a<=g;++a)for(a0=a*n,a1=a+0.5-l,a2=a1*b0,a3=a1*a9,a4=j;a4<=i;++a4){a5=a4+0.5-m
if(!f.cq((a5*a9+a2+s)*d-0.5,(-a5*b0+a3+b)*c-0.5))continue
A.hC(b2,a0+a4,B.aC,f.b,f.c,f.d,f.e*e)}},
c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},
en:function en(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=0},
fA:function fA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jH(a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b="cube",a=null
try{a=B.a_.cg(a0,c)}catch(t){if(A.ev(t) instanceof A.bD)throw A.f(B.bh)
else throw t}s=A.eH(a,"The filter file",B.cS)
if(!J.am(s.i(0,"format"),"photo-effects-filter"))throw A.f(B.bv)
if(!J.am(s.i(0,"version"),1))throw A.f(B.be)
r=s.i(0,"name")
if(typeof r!="string")throw A.f(B.bi)
if(r.length>200)throw A.f(B.bl)
q=A.hI(r,A.hI(c,"My filter"))
if(s.a7("lut")){p=A.eH(s.i(0,"lut"),'"lut"',B.cU)
o=p.a7(b)
if(o===(p.a7("rgb16")||p.a7("size")))throw A.f(B.bk)
if(p.a7(b)){n=p.i(0,b)
if(typeof n!="string")throw A.f(B.br)
m=A.jF(n).a}else{l=p.i(0,"size")
k=p.i(0,"rgb16")
if(!A.d5(l)||typeof k!="string")throw A.f(B.bj)
m=A.jE(l,k)}}else m=c
if(s.a7("overlay")){j=A.eH(s.i(0,"overlay"),'"overlay"',B.cR)
i=j.i(0,"blend")
if(i==null)i="normal"
if(typeof i!="string"||!B.a6.a7(i))throw A.f(A.Z('"overlay.blend" must be one of: '+B.a6.gaM().bx(0,", ")+"."))
h=new A.fd(A.hV(j.i(0,"image"),'"overlay.image"'),i,A.eI(j.i(0,"opacity"),'"overlay.opacity"',0,1,1))}else h=c
if(s.a7("sticker")){g=A.eH(s.i(0,"sticker"),'"sticker"',B.cT)
f=g.i(0,"anchor")
if(f==null)f="face"
o=u.X
e=A.jR(new A.cT(B.ap,u.cZ.a(new A.eJ(f)),u.bj),o)
if(e==null)throw A.f(A.Z('"sticker.anchor" must be one of: '+A.k_(B.ap,u.ck.a(new A.eK()),o,u.N).bx(0,", ")+"."))
d=new A.fl(A.hV(g.i(0,"image"),'"sticker.image"'),e,A.eI(g.i(0,"scale"),'"sticker.scale"',0.2,3,1),A.eI(g.i(0,"offsetY"),'"sticker.offsetY"',-1,1,0),A.eI(g.i(0,"opacity"),'"sticker.opacity"',0,1,1))}else d=c
if(m==null&&h==null&&d==null)throw A.f(B.bm)
return new A.eG(q,m,h,d)},
eH(a,b,c){var t,s
if(!u.aE.b(a))throw A.f(A.Z(b+" must be a JSON object."))
for(t=a.gaM(),t=t.gu(t);t.t();){s=t.gD()
if(!c.aB(0,s))throw A.f(A.Z(b+' has an unsupported field "'+A.hI(s.length>24?B.k.aW(s,0,24)+"...":s,"?")+'".'))}return a},
eI(a,b,c,d,e){if(a==null)return e
if(typeof a!="number"||!isFinite(a)||a<c||a>d)throw A.f(A.Z(b+" must be a number from "+A.x(c)+" to "+d+"."))
return a},
hV(a,b){var t,s
if(typeof a!="string")throw A.f(A.Z(b+" must be an embedded PNG (data:image/png;base64,...)."))
if(!B.k.cu(a,"data:image/png;base64,"))throw A.f(A.Z(b+" must be an embedded PNG (data:image/png;base64,...). Links are not allowed."))
t=null
try{t=B.ab.aZ(B.k.c_(a,22))}catch(s){if(A.ev(s) instanceof A.bD)throw A.f(A.Z(b+" is not valid base64."))
else throw s}return A.lR(t)},
Q:function Q(a,b){this.a=a
this.b=b},
fd:function fd(a,b,c){this.a=a
this.b=b
this.c=c},
fl:function fl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eG:function eG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eJ:function eJ(a){this.a=a},
eK:function eK(){},
Z(a){return new A.z(a)},
hI(a,b){var t,s,r,q,p,o,n
if(a==null)return b
t=new A.cO("")
for(s=new A.e4(a),r=!1,q=0;s.t();){p=s.d
if(q>=40)break
if(p===32||p===9||p===10||p===13||p===160||p===12288){if(!r&&t.a.length!==0){t.a+=" ";++q}r=!0
continue}o=!0
if(p>=32)if(!(p>=127&&p<=159))if(p!==173)if(!(p>=8203&&p<=8207))if(!(p>=8232&&p<=8238))if(!(p>=8288&&p<=8303))if(p!==65279)if(!(p>=65520&&p<=65535))if(!(p>=917504&&p<=917631))o=p>=55296&&p<=57343
if(o)continue
o=A.ih(p)
t.a+=o;++q
r=!1}s=t.a
n=B.k.bU(s.charCodeAt(0)==0?s:s)
return n.length===0?b:n},
z:function z(a){this.a=a},
lF(a){var t
if(a.length<8)return!1
for(t=0;t<8;++t)if(a[t]!==B.aw[t])return!1
return!0},
lL(a){var t=a.length,s=t>=3
if(s&&a[0]===255&&a[1]===216&&a[2]===255)return"JPEG"
t=t>=12
if(t&&a[4]===102&&a[5]===116&&a[6]===121&&a[7]===112)return"HEIC/HEIF"
if(t&&a[0]===82&&a[1]===73&&a[2]===70&&a[3]===70&&a[8]===87&&a[9]===69&&a[10]===66&&a[11]===80)return"WebP"
if(s&&a[0]===71&&a[1]===73&&a[2]===70)return"GIF"
return null},
lK(a){var t,s,r,q,p,o,n,m,l,k
if(!A.lF(a))throw A.f(B.bf)
t=A.hS(a)
for(s=a.length,r=8,q=null,p=!1;o=r+8,o<=s;){n=t.getUint32(r,!1)
m=r+4
l=A.fm(new Uint8Array(a.subarray(m,A.er(m,o,s))),0,null)
if(n>s-r-12)throw A.f(B.R)
if(q==null&&l!=="IHDR")throw A.f(B.R)
if(l==="IHDR"){if(n!==13)throw A.f(B.R)
o=t.getUint32(o,!1)
m=t.getUint32(r+12,!1)
k=r+17
if(!(k>=0&&k<s))return A.a(a,k)
q=new A.e0(o,m,a[k],!1)}else if(l==="tRNS")p=!0
else if(l==="IDAT"||l==="IEND")break
r+=12+n}if(q==null)throw A.f(B.R)
return new A.e0(q.a,q.b,q.c,p)},
lR(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null
if(a.length>5242880)throw A.f(B.bt)
s=A.lL(a)
if(s!=null)throw A.f(A.Z(s+" images are not accepted. Use a PNG with a transparent background."))
r=A.lK(a)
q=r.a
if(q!==0){p=r.b
q=p===0||q>8192||p>8192||q*p>24e6}else q=!0
if(q)throw A.f(B.bC)
q=r.c
if(!(q===4||q===6||r.d))throw A.f(B.bn)
t=null
try{q=u.N
t=new A.ff(new A.f1(A.ae(q,q),A.l([],u.d),A.l([],u.t))).bM(a)}catch(o){t=null}if(t==null)throw A.f(B.bg)
n=t.gam()===4&&t.gG()===B.l&&!t.gaL()?t:t.eN(B.l,4)
m=n.gac()
l=n.ga8()
q=n.gam()
k=4!==q?n.eM(b,4):n
q=k.a
q=q==null?b:q.dD(k!==n,B.O)
if(q==null){q=n.a
q=q==null?b:J.bA(q.gE(q))
if(q==null)q=J.bA(n.gE(0))}j=new Uint8Array(A.G(q))
for(q=j.length,i=0,h=0,g=3;g<q;g+=4){f=j[g]
if(f<=240)++i
if(f>=8)++h}e=m*l
if(i<e*0.02)throw A.f(B.bB)
if(h<e*0.005)throw A.f(B.bD)
if(Math.max(m,l)>2048){d=A.lo(m,l,j,2048)
m=d.a
l=d.b
j=d.c}c=new A.b4(b,b,b,b,0,B.S,0,0)
c.dS(b,B.h.gE(j),j.byteOffset,b,B.l,0,0,B.S,l,b,0,4,B.O,b,B.l,b,b,m,!1)
return new A.fo(m,l,j,new A.fg(B.cI,6,b).eS(c,!1))},
lo(a9,b0,b1,b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=b2/Math.max(a9,b0),a3=Math.max(1,B.a.aU(a9*a2)),a4=Math.max(1,B.a.aU(b0*a2)),a5=a3*a4*4,a6=new Uint8Array(a5),a7=a9/a3,a8=b0/a4
for(t=b1.length,s=0;s<a4;s=q){r=B.a.Y(s*a8)
q=s+1
p=Math.max(r+1,Math.min(b0,B.a.a6(q*a8)))
for(o=s*a3,n=0;n<a3;n=l){m=B.a.Y(n*a7)
l=n+1
k=Math.max(m+1,Math.min(a9,B.a.a6(l*a7)))
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
if(f>0){b=B.b.C(B.a.aU(i/f),0,255)
if(!(a0>=0&&a0<a5))return A.a(a6,a0)
a6[a0]=b
b=a0+1
a1=B.b.C(B.a.aU(h/f),0,255)
if(!(b<a5))return A.a(a6,b)
a6[b]=a1
a1=a0+2
b=B.b.C(B.a.aU(g/f),0,255)
if(!(a1<a5))return A.a(a6,a1)
a6[a1]=b}b=a0+3
a1=B.b.C(B.a.aU(f/e*255),0,255)
if(!(b>=0&&b<a5))return A.a(a6,b)
a6[b]=a1}}return new A.X(a3,a4,a6)},
fo:function fo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e0:function e0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lu(a){var t=$.hU.i(0,a)
return t==null?B.c.eX(B.c0,new A.fM(a),new A.fN(a)):t},
fM:function fM(a){this.a=a},
fN:function fN(a){this.a=a},
dz:function dz(){},
dM:function dM(){},
dQ:function dQ(){},
T:function T(){},
e3:function e3(){},
e6:function e6(){},
e7:function e7(){},
ec:function ec(){},
jL(a){var t,s,r,q,p,o=u.c,n=o.a(B.a_.cg(a,null)),m=A.l([],u.q)
for(t=J.aZ(n),s=u.n;t.t();){r=t.gD()
q=A.l([],s)
for(p=J.aZ(o.a(r));p.t();)q.push(A.d4(p.gD()))
m.push(new A.dx(new Float32Array(A.G(q))))}return new A.eP(m)},
H:function H(a,b){this.a=a
this.b=b},
dx:function dx(a){this.a=a},
cc:function cc(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(a){this.a=a},
jM(a){return new A.eQ(A.d4(a.i(0,"intensity")),u.bC.a(a.i(0,"params")).dr(0,new A.eR(),u.N,u.i),B.a.h(A.d4(a.i(0,"seed"))))},
ds:function ds(a,b){this.a=a
this.b=b},
ar:function ar(){},
as:function as(a,b){this.a=a
this.d=b},
eQ:function eQ(a,b,c){this.a=a
this.b=b
this.c=c},
eR:function eR(){},
dO:function dO(a,b,c){this.a=a
this.b=b
this.c=c},
fi:function fi(a,b,c){this.a=a
this.b=b
this.c=c},
hB(a,b,c){var t
switch(a.a){case 0:return c
case 1:return 1-(1-b)*(1-c)
case 2:return b*c
case 3:return b<0.5?2*b*c:1-2*(1-b)*(1-c)
case 4:t=2*c
return(1-t)*b*b+t*b
case 5:return Math.min(1,b+c)
case 6:return c}},
hC(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m,l,k,j
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
if(c===B.a8){r=A.iV(q,o,m)-A.iV(d,e,f)
l=d+r
k=e+r
j=f+r}else{l=A.hB(c,q,d)
k=A.hB(c,o,e)
j=A.hB(c,m,f)}t.$flags&2&&A.b(t)
t[s]=q+(l-q)*g
t[p]=o+(k-o)*g
t[n]=m+(j-m)*g},
bv(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(g<=0)return
for(t=b.d,s=b.c,r=a.a,q=b.a,p=b.r,o=p.length,n=b.b,m=0;m<t;++m)for(l=(m+n)*r,k=m*s,j=0;j<s;++j){i=k+j
if(!(i>=0&&i<o))return A.a(p,i)
h=p[i]
if(h<=0.002)continue
A.hC(a,l+j+q,c,d,e,f,h*g)}},
aD:function aD(a,b){this.a=a
this.b=b},
c_(c4,c5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=c4.c,b5=c4.a*c4.b,b6=Math.pow(2,c5.a),b7=c5.f,b8=c5.r,b9=0.03*b8,c0=1+0.1*b7+b9,c1=1-0.05*b8,c2=1-0.12*b7+b9,c3=c5.c
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
a3=0.2126*a0+0.7152*a1+0.0722*a2}if(q){a0=A.hw(a0,c3)
a1=A.hw(a1,c3)
a2=A.hw(a2,c3)
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
a2=h+a2*b7}a0=A.hz(a0)
a1=A.hz(a1)
a2=A.hz(a2)
b4.$flags&2&&A.b(b4)
b4[f]=e+(a0-e)
b4[d]=c+(a1-c)
b4[b]=a+(a2-a)}},
hw(a,b){var t,s
if(a<0)t=0
else t=a>1?1:a
s=2*t
if(b>=0)return t+(t*t*(3-s)-t)*b
return t+(0.5-Math.sin(Math.asin(1-s)/3)-t)*-b},
hz(a){if(a<=0.85)return a<0?0:a
return 0.85+0.15*(1-Math.exp(-(a-0.85)/0.15))},
aq:function aq(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
ib(a,b,c,d,e,f){var t=Math.max(0,c)*Math.max(0,d)
if(!A.d5(t))A.aJ(A.d7("Invalid length "+A.x(t)))
return new A.fb(a,b,c,d,new Float32Array(t))},
aC(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
for(t=c.length,s=1/0,r=1/0,q=-1/0,p=-1/0,o=0;o<t;++o){n=c[o]
m=n.a
s=Math.min(s,m)
l=n.b
r=Math.min(r,l)
q=Math.max(q,m)
p=Math.max(p,l)}k=B.b.C(B.a.Y(s-d),0,a)
j=B.b.C(B.a.Y(r-d),0,b)
return A.ib(k,j,B.b.C(B.a.a6(q+d),0,a)-k,B.b.C(B.a.a6(p+d),0,b)-j,a,b)},
hX(a,b){var t,s,r,q,p,o
for(t=a.length,s=0,r=0,q=0;q<t;++q){p=a[q]
s+=p.a
r+=p.b}s/=t
r/=t
t=A.l([],u._)
for(o=a.length,q=0;q<a.length;a.length===o||(0,A.F)(a),++q){p=a[q]
t.push(new A.H(s+(p.a-s)*b,r+(p.b-r)*b))}return t},
fb:function fb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=e},
b1:function b1(a){this.a=a},
ia(a,b){var t,s=A.l([],u.n)
for(t=0;t<3;++t)s.push(1-(1-a[t])*b)
return s},
cq:function cq(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hZ(a,b){return new A.dy(a,b,new Float32Array(a*b*3))},
jP(a){var t,s,r,q,p,o,n,m=A.hZ(a.a,a.b),l=a.c,k=m.c
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
h0(a){if(a<=0)return 0
if(a>=1)return 255
return B.a.h(a*255+0.5)},
d6(a,b,c,d,e){var t,s,r
if(e<0.5||b<2||c<2)return
t=Math.max(1,B.a.aU((Math.sqrt(4*e*e+1)-1)/2))
s=new Float32Array(a.length)
for(r=0;r<3;++r){A.kI(a,s,b,c,d,t)
A.kJ(s,a,b,c,d,t)}},
kI(a,b,c,d,e,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=1/(2*a0+1)
for(t=c-1,s=a.length,r=a0+1,q=0;q<d;++q){p=q*c*e
for(o=0;o<e;++o){n=p+o
if(!(n>=0&&n<s))return A.a(a,n)
m=a[n]*r
for(l=1;l<=a0;++l)m+=B.L.i(a,p+Math.min(l,t)*e+o)
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
kJ(a,b,c,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=1/(2*a2+1),d=c*a1
for(t=a0-1,s=a.length,r=a2+1,q=0;q<c;++q)for(p=q*a1,o=0;o<a1;++o){n=p+o
if(!(n<s))return A.a(a,n)
m=a[n]*r
for(l=1;l<=a2;++l)m+=B.L.i(a,Math.min(l,t)*d+n)
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
iV(a,b,c){return 0.2126*a+0.7152*b+0.0722*c},
dy:function dy(a,b,c){this.a=a
this.b=b
this.c=c},
fj:function fj(a){this.a=a},
lH(){var t,s=v.G,r=new A.fV(s)
if(typeof r=="function")A.aJ(A.d7("Attempting to rewrap a JS function."))
t=function(a,b){return function(c){return a(b,c,arguments.length)}}(A.kK,r)
t[$.hK()]=r
s.onmessage=t},
fV:function fV(a){this.a=a},
hS(a){var t=a.BYTES_PER_ELEMENT,s=A.bn(0,null,B.b.bf(a.byteLength,t))
return J.jo(B.h.gE(a),a.byteOffset+0*t,s*t)},
j_(a){return v.mangledGlobalNames[a]},
kK(a,b,c){u.Z.a(a)
if(A.q(c)>=1)return a.$1(b)
return a.$0()},
lv(a){var t,s,r,q,p,o=a.gj(0)
for(t=1,s=0;o>0;){r=3800>o?o:3800
o-=r
while(--r,r>=0){q=a.b
q.toString
p=a.c++
if(!(p>=0&&p<q.length))return A.a(q,p)
t+=q[p]
s+=t}t=B.b.aV(t,65521)
s=B.b.aV(s,65521)}return(s<<16|t)>>>0},
au(a,b){var t,s,r=J.J(a),q=r.gj(a)
b^=4294967295
for(t=0;q>=8;){s=t+1
b=B.p[(b^r.i(a,t))&255]^b>>>8
t=s+1
b=B.p[(b^r.i(a,s))&255]^b>>>8
s=t+1
b=B.p[(b^r.i(a,t))&255]^b>>>8
t=s+1
b=B.p[(b^r.i(a,s))&255]^b>>>8
s=t+1
b=B.p[(b^r.i(a,t))&255]^b>>>8
t=s+1
b=B.p[(b^r.i(a,s))&255]^b>>>8
s=t+1
b=B.p[(b^r.i(a,t))&255]^b>>>8
t=s+1
b=B.p[(b^r.i(a,s))&255]^b>>>8
q-=8}if(q>0)do{s=t+1
b=B.p[(b^r.i(a,t))&255]^b>>>8
if(--q,q>0){t=s
continue}else break}while(!0)
return(b^4294967295)>>>0},
iR(a,b,c,d,e,f,g,h,i,j,k){var t,s,r,q,p,o,n,m
if(j==null)j=0
if(k==null)k=0
if(i==null)i=b.gac()
if(h==null)h=b.ga8()
if(e==null)e=a.gac()<b.gac()?a.gac():b.gac()
if(d==null)d=a.ga8()<b.ga8()?a.ga8():b.ga8()
t=c===B.Z
if(!t&&a.gaL())a=a.de(a.gam())
s=h/d
r=i/e
q=u.S
p=J.i5(d,q)
for(o=0;o<d;++o)p[o]=k+B.a.h(o*s)
n=J.i5(e,q)
for(m=0;m<e;++m)n[m]=j+B.a.h(m*r)
if(t)A.kN(b,a,f,g,e,d,n,p,null,B.ai)
else A.kL(b,a,f,g,e,d,n,p,c,!1,null,B.ai)
return a},
kN(a,b,c,d,e,f,g,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i=b.gac(),h=b.ga8()
for(t=g.length,s=a0.length,r=null,q=0;q<f;++q)for(p=d+q,o=p>=h,n=0;n<e;++n){m=c+n
if(m>=i||o)continue
if(!(n<t))return A.a(g,n)
l=g[n]
if(!(q<s))return A.a(a0,q)
k=a0[q]
j=a.a
r=j==null?null:j.a0(l,k,r)
if(r==null)r=new A.a3()
b.dJ(m,p,r)}},
kL(a,b,c,d,e,f,g,h,i,j,k,a0){var t,s,r,q,p,o,n,m,l
for(t=g.length,s=h.length,r=null,q=0;q<f;++q)for(p=d+q,o=0;o<e;++o){if(!(o<t))return A.a(g,o)
n=g[o]
if(!(q<s))return A.a(h,q)
m=h[q]
l=a.a
r=l==null?null:l.a0(n,m,r)
if(r==null)r=new A.a3()
A.lp(b,c+o,p,r,i,!1,k,a0)}},
lp(a7,a8,a9,b0,b1,b2,b3,b4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
if(!a7.dm(a8,a9))return a7
if(b1===B.Z||a7.gaL())if(a7.dm(a8,a9)){a7.co(a8,a9).W(b0)
return a7}t=b0.gU()
s=b0.gR()
r=b0.gS()
q=b0.gj(b0)<4?1:b0.gV()
if(q===0)return a7
p=a7.co(a8,a9)
o=p.gU()
n=p.gR()
m=p.gS()
l=p.gV()
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
i=B.a.C(q,0.01,1)
j=q<0
e=j?0:1
d=B.a.C(t/i*e,0,0.99)
e=B.a.C(q,0.01,1)
i=j?0:1
c=B.a.C(s/e*i,0,0.99)
i=B.a.C(q,0.01,1)
j=j?0:1
b=B.a.C(r/i*j,0,0.99)
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
p.sU((t*q+o*l*a4)*a6)
p.sR((s*q+n*l*a4)*a6)
p.sS((r*q+m*l*a4)*a6)
p.sV(a5)
return a7},
lt(a,b,c,d,e,f,g){var t,s=B.a.C(Math.min(d,e),0,a.gac()-1),r=B.a.C(Math.min(f,g),0,a.ga8()-1),q=B.a.C(Math.max(d,e),0,a.gac()-1),p=B.a.C(Math.max(f,g),0,a.ga8()-1),o=a.a.ap(0,s,r,q-s+1,p-r+1)
for(t=o.a;o.t();)t.W(c)
return a},
ai(a,b,c){var t,s,r,q,p=b.gj(b),o=b.gG(),n=a.gT(),m=n==null?null:n.gG()
if(m==null)m=a.gG()
t=a.gj(a)
if(p===1)b.n(0,0,A.et(B.a.Y(a.gj(a)>2?a.gal():a.i(0,0)),m,o))
else if(p<=t)for(s=0;s<p;++s)b.n(0,s,A.et(a.i(0,s),m,o))
else if(t===2){r=A.et(a.i(0,0),m,o)
if(p===3){b.n(0,0,r)
b.n(0,1,r)
b.n(0,2,r)}else{c=A.et(a.i(0,1),m,o)
b.n(0,0,r)
b.n(0,1,r)
b.n(0,2,r)
b.n(0,3,c)}}else{for(s=0;s<t;++s)b.n(0,s,A.et(a.i(0,s),m,o))
q=t===1?b.i(0,0):0
for(s=t;s<p;++s)b.n(0,s,s===3?c:q)}return b},
iS(a,b,c,d,e){var t,s,r=a.gT(),q=r==null?null:r.gG()
if(q==null)q=a.gG()
r=e==null
t=r?null:e.gG()
c=t==null?c:t
if(c==null)c=a.gG()
t=r?null:e.gj(e)
d=t==null?d:t
if(d==null)d=a.gj(a)
if(b==null)b=0
if(c===q&&d===a.gj(a)){if(r)return a.J()
e.W(a)
return e}switch(c.a){case 3:if(r)s=new A.c4(new Uint8Array(d))
else s=e
return A.ai(a,s,b)
case 0:return A.ai(a,r?new A.dl(d,0):e,b)
case 1:return A.ai(a,r?new A.dn(d,0):e,b)
case 2:if(r){r=d<3?1:2
s=new A.dq(d,new Uint8Array(r))}else s=e
return A.ai(a,s,b)
case 4:if(r)s=new A.dm(new Uint16Array(d))
else s=e
return A.ai(a,s,b)
case 5:if(r)s=new A.dp(new Uint32Array(d))
else s=e
return A.ai(a,s,b)
case 6:if(r)s=new A.dj(new Int8Array(d))
else s=e
return A.ai(a,s,b)
case 7:if(r)s=new A.dh(new Int16Array(d))
else s=e
return A.ai(a,s,b)
case 8:if(r)s=new A.di(new Int32Array(d))
else s=e
return A.ai(a,s,b)
case 9:if(r)s=new A.de(new Uint16Array(d))
else s=e
return A.ai(a,s,b)
case 10:if(r)s=new A.df(new Float32Array(d))
else s=e
return A.ai(a,s,b)
case 11:if(r)s=new A.dg(new Float64Array(d))
else s=e
return A.ai(a,s,b)}},
ak(a){return 0.299*a.gk()+0.587*a.gp()+0.114*a.gm()},
E(a){var t,s,r,q=$.hL()
q.$flags&2&&A.b(q)
q[0]=a
q=$.jk()
if(0>=q.length)return A.a(q,0)
t=q[0]
if(a===0)return t>>>16
if($.a6==null)A.ay()
s=t>>>23&511
q=$.hY.bp()
if(!(s<q.length))return A.a(q,s)
s=q[s]
if(s!==0){r=t&8388607
return s+(r+4095+(r>>>13&1)>>>13)}return A.jN(t)},
jN(a){var t,s,r=a>>>16&32768,q=(a>>>23&255)-112,p=a&8388607
if(q<=0){if(q<-10)return r
p|=8388608
t=14-q
return(r|B.b.bW(p+(B.b.a1(1,t-1)-1)+(B.b.aY(p,t)&1),t))>>>0}else if(q===143)if(p===0)return r|31744
else{p=p>>>13
s=p===0?1:0
return r|p|s|31744}else{p=p+4095+(p>>>13&1)
if((p&8388608)!==0){++q
p=0}if(q>30)return r|31744
return(r|q<<10|p>>>13)>>>0}},
ay(){var t,s,r,q,p,o=$.a6
if(o!=null)return o
t=new Uint32Array(65536)
$.a6=J.jp(B.a7.gE(t),0,null)
o=new Uint16Array(512)
$.hY.b=o
for(s=0;s<256;++s){r=(s&255)-112
if(r<=0||r>=30){o[s]=0
q=(s|256)>>>0
if(!(q<512))return A.a(o,q)
o[q]=0}else{q=r<<10>>>0
o[s]=q
p=(s|256)>>>0
if(!(p<512))return A.a(o,p)
o[p]=(q|32768)>>>0}}for(s=0;s<65536;++s)t[s]=A.jO(s)
o=$.a6
o.toString
return o},
jO(a){var t,s=a>>>15&1,r=a>>>10&31,q=a&1023
if(r===0)if(q===0)return s<<31>>>0
else{while((q&1024)===0){q=q<<1;--r}++r
q&=4294966271}else if(r===31){t=s<<31
if(q===0)return(t|2139095040)>>>0
else return(t|q<<13|2139095040)>>>0}return(s<<31|r+112<<23|q<<13)>>>0},
es(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(c<=0)return
t=Math.max(1,b*Math.max(a.a,a.b))
s=Math.max(1,B.a.Y(t/4))
r=a.dg(s)
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
q[i]=q[i]*(g*e[2])}A.d6(q,r.a,r.b,3,t/s)
A.iN(a,r,c)},
lf(a,b,c){var t,s,r
if(c<=0)return
t=Math.max(1,b*Math.max(a.a,a.b))
s=Math.max(1,B.a.Y(t/4))
r=a.dg(s)
A.d6(r.c,r.a,r.b,3,t/s)
A.iN(a,r,c)},
iN(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new Float32Array(3),e=a.c
for(t=a.b,s=a.a,r=e.length,q=0;q<t;++q){p=(q+0.5)/t
for(o=q*s,n=0;n<s;++n){b.dG((n+0.5)/s,p,f)
m=(o+n)*3
for(l=e.$flags|0,k=0;k<3;++k){j=m+k
if(!(j>=0&&j<r))return A.a(e,j)
i=e[j]
h=f[k]*c
g=h>1?1:h
l&2&&A.b(e)
e[j]=1-(1-i)*(1-g)}}}},
lg(a,b,c){var t,s,r,q,p,o,n,m,l
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
lh(a1,a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
li(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
eu(a9,b0,b1,b2,b3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
if(b2<=0||b0.gcl(0))return
t=b0.c
s=b0.d
r=t*s*3
q=new Float32Array(r)
for(p=b0.b,o=a9.a,n=b0.a,m=a9.c,l=0;l<s;l=k){k=l+1
B.L.aI(q,l*t*3,k*t*3,m,((l+p)*o+n)*3)}j=new Float32Array(A.G(q))
A.d6(j,t,s,3,Math.max(1,b1*b3))
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
iW(b8,b9,c0,c1,c2,c3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
if(c2<=0||c1<=0)return
t=Math.max(1,b9.A(B.e).X(0,b9.A(B.f)).gj(0))
s=c3>>>0
r=new A.fj(s===0?2654435769:s)
s=b8.a
q=A.aC(s,b8.b,b9.L(B.o),0)
p=b9.I(6)
o=b9.I(4)
n=b9.I(98)
m=b9.I(327)
l=A.l([new A.bs([p.aE(o,0.5),m.X(0,n).bd(0,0.25),o.X(0,p).bd(0,0.35),0.26])],u.J)
k=b9.I(197)
for(j=[B.cK,B.cM],i=k.a,h=k.b,g=t*0.15,f=0;f<2;++f){e=j[f]
d=b9.I(e.a).aE(b9.I(e.b),0.35)
c=d.aE(k,0.18)
b=(d.a-i)*0.42
a=(d.b-h)*0.42
a0=Math.max(0.001,Math.sqrt(b*b+a*a))
B.c.K(l,new A.bs([c,new A.H(b,a),new A.H(-a/a0*g,b/a0*g),0.37]))}a1=B.a.aU(30+170*c1)
for(j=l.length,f=0;f<l.length;l.length===j||(0,A.F)(l),++f){i=l[f].a
a2=B.a.aU(a1*i[3])
for(a3=0;a3<a2;++a3){do{a4=r.dt()
a5=r.dt()}while(a4*a4+a5*a5>3.2)
h=i[0]
g=i[1]
b=a4*0.6
a=i[2]
a6=a5*0.6
a7=r.ba()
a8=r.ba()/4294967296<0.1?1.6:1
a9=t*(0.006+0.009*(a7/4294967296))*a8
a8=r.ba()
b0=0.8+0.44999999999999996*(r.ba()/4294967296)
q.b9(new A.H(h.a+g.a*b+a.a*a6,h.b+g.b*b+a.b*a6),a9*b0,a9/b0,0+3.141592653589793*(r.ba()/4294967296),0.35+0.65*(a8/4294967296))}}q.bh(t*0.004)
q.bS(c0)
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
lq(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.a,g=a.b,f=h*g,e=new Float32Array(f)
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
e[r]=0.2126*p+0.7152*o+0.0722*q}A.d6(e,h,g,1,Math.max(1,Math.max(h,g)/600))
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
ab(a,b,c,d,e){var t=J.J(d)
return A.bv(a,b,c,t.i(d,0),t.i(d,1),t.i(d,2),e)}},B={}
var w=[A,J,B]
var $={}
A.h8.prototype={}
J.dE.prototype={
M(a,b){return a===b},
gF(a){return A.cH(a)},
B(a){return"Instance of '"+A.e1(a)+"'"},
gab(a){return A.bw(A.hx(this))}}
J.dH.prototype={
B(a){return String(a)},
gF(a){return a?519018:218159},
gab(a){return A.bw(u.y)},
$iy:1,
$iaa:1}
J.cm.prototype={
M(a,b){return null==b},
B(a){return"null"},
gF(a){return 0},
$iy:1}
J.co.prototype={$iD:1}
J.aR.prototype={
gF(a){return 0},
B(a){return String(a)}}
J.dZ.prototype={}
J.bo.prototype={}
J.aA.prototype={
B(a){var t=a[$.j1()]
if(t==null)t=a[$.hK()]
if(t==null)return this.dO(a)
return"JavaScript function for "+J.aL(t)},
$ib2:1}
J.bN.prototype={
gF(a){return 0},
B(a){return String(a)}}
J.bO.prototype={
gF(a){return 0},
B(a){return String(a)}}
J.v.prototype={
K(a,b){A.U(a).c.a(b)
a.$flags&1&&A.b(a,29)
a.push(b)},
b0(a,b){var t
A.U(a).l("d<1>").a(b)
a.$flags&1&&A.b(a,"addAll",2)
if(Array.isArray(b)){this.dT(a,b)
return}for(t=J.aZ(b);t.t();)a.push(t.gD())},
dT(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.f(A.ac(a))
for(s=0;s<t;++s)a.push(b[s])},
eJ(a){a.$flags&1&&A.b(a,"clear","clear")
a.length=0},
bx(a,b){var t,s=A.dN(a.length,"",!1,u.N)
for(t=0;t<a.length;++t)this.n(s,t,A.x(a[t]))
return s.join(b)},
dw(a,b){return A.eb(a,0,A.iP(b,"count",u.S),A.U(a).c)},
bX(a,b){return A.eb(a,b,null,A.U(a).c)},
eX(a,b,c){var t,s,r,q=A.U(a)
q.l("aa(1)").a(b)
q.l("1()?").a(c)
t=a.length
for(s=0;s<t;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==t)throw A.f(A.ac(a))}q=c.$0()
return q},
ah(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
bD(a,b,c){if(b<0||b>a.length)throw A.f(A.W(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.f(A.W(c,b,a.length,"end",null))
if(b===c)return A.l([],A.U(a))
return A.l(a.slice(b,c),A.U(a))},
bZ(a,b){return this.bD(a,b,null)},
gdn(a){var t=a.length
if(t>0)return a[t-1]
throw A.f(A.i4())},
di(a,b){var t,s
A.U(a).l("aa(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(!b.$1(a[s]))return!1
if(a.length!==t)throw A.f(A.ac(a))}return!0},
dK(a){var t,s,r,q,p,o
a.$flags&2&&A.b(a,"sort")
t=a.length
if(t<2)return
if(t===2){s=a[0]
r=a[1]
q=J.i7(s,r)
if(typeof q!=="number")return q.ff()
if(q>0){a[0]=r
a[1]=s}return}p=0
if(A.U(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.lk(J.kV(),2))
if(p>0)this.eA(a,p)},
eA(a,b){var t,s=a.length
for(;t=s-1,s>0;s=t)if(a[t]===null){a[t]=void 0;--b
if(b===0)break}},
aB(a,b){var t
for(t=0;t<a.length;++t)if(J.am(a[t],b))return!0
return!1},
B(a){return A.h7(a,"[","]")},
gu(a){return new J.b_(a,a.length,A.U(a).l("b_<1>"))},
gF(a){return A.cH(a)},
gj(a){return a.length},
i(a,b){if(!(b>=0&&b<a.length))throw A.f(A.fK(a,b))
return a[b]},
n(a,b,c){A.U(a).c.a(c)
a.$flags&2&&A.b(a)
if(!(b>=0&&b<a.length))throw A.f(A.fK(a,b))
a[b]=c},
$id:1,
$it:1}
J.dG.prototype={
f9(a){var t,s,r
if(!Array.isArray(a))return null
t=a.$flags|0
if((t&4)!==0)s="const, "
else if((t&2)!==0)s="unmodifiable, "
else s=(t&1)!==0?"fixed, ":""
r="Instance of '"+A.e1(a)+"'"
if(s==="")return r
return r+" ("+s+"length: "+a.length+")"}}
J.f2.prototype={}
J.b_.prototype={
gD(){var t=this.d
return t==null?this.$ti.c.a(t):t},
t(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.F(r)
throw A.f(r)}t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0},
$ip:1}
J.bM.prototype={
bu(a,b){var t
A.d4(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gbR(b)
if(this.gbR(a)===t)return 0
if(this.gbR(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbR(a){return a===0?1/a<0:a<0},
h(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.f(A.bU(""+a+".toInt()"))},
a6(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw A.f(A.bU(""+a+".ceil()"))},
Y(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw A.f(A.bU(""+a+".floor()"))},
aU(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.f(A.bU(""+a+".round()"))},
C(a,b,c){if(this.bu(b,c)>0)throw A.f(A.aY(b))
if(this.bu(a,b)<0)return b
if(this.bu(a,c)>0)return c
return a},
dz(a,b){var t
if(b>20)throw A.f(A.W(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gbR(a))return"-"+t
return t},
B(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
aV(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
bf(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cU(a,b)},
aR(a,b){return(a|0)===a?a/b|0:this.cU(a,b)},
cU(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.f(A.bU("Result of truncating division is "+A.x(t)+": "+A.x(a)+" ~/ "+b))},
a1(a,b){if(b<0)throw A.f(A.aY(b))
return b>31?0:a<<b>>>0},
ce(a,b){return b>31?0:a<<b>>>0},
bW(a,b){var t
if(b<0)throw A.f(A.aY(b))
if(a>0)t=this.br(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
H(a,b){var t
if(a>0)t=this.br(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aY(a,b){if(0>b)throw A.f(A.aY(b))
return this.br(a,b)},
br(a,b){return b>31?0:a>>>b},
gab(a){return A.bw(u.o)},
$iax:1,
$ir:1,
$ij:1}
J.cl.prototype={
gab(a){return A.bw(u.S)},
$iy:1,
$ih:1}
J.dI.prototype={
gab(a){return A.bw(u.i)},
$iy:1}
J.aQ.prototype={
d2(a,b){return new A.eo(b,a,0)},
dL(a,b){var t
if(typeof b=="string")return A.l(a.split(b),u.s)
else{if(b instanceof A.cn){t=b.e
t=!(t==null?b.e=b.dX():t)}else t=!1
if(t)return A.l(a.split(b.b),u.s)
else return this.e1(a,b)}},
e1(a,b){var t,s,r,q,p,o,n=A.l([],u.s)
for(t=J.jn(b,a),t=t.gu(t),s=0,r=1;t.t();){q=t.gD()
p=q.gct()
o=q.gci()
r=o-p
if(r===0&&s===p)continue
B.c.K(n,this.aW(a,s,p))
s=o}if(s<a.length||r>0)B.c.K(n,this.c_(a,s))
return n},
cu(a,b){var t=b.length
if(t>a.length)return!1
return b===a.substring(0,t)},
aW(a,b,c){return a.substring(b,A.bn(b,c,a.length))},
c_(a,b){return this.aW(a,b,null)},
bU(a){var t,s,r,q=a.trim(),p=q.length
if(p===0)return q
if(0>=p)return A.a(q,0)
if(q.charCodeAt(0)===133){t=J.jU(q,1)
if(t===p)return""}else t=0
s=p-1
if(!(s>=0))return A.a(q,s)
r=q.charCodeAt(s)===133?J.jV(q,s):p
if(t===0&&r===p)return q
return q.substring(t,r)},
bd(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.f(B.b_)
for(t=a,s="";;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
f1(a,b){var t=b.cG(a,0)
return t==null?-1:t.b.index},
bu(a,b){var t
A.V(b)
if(a===b)t=0
else t=a<b?-1:1
return t},
B(a){return a},
gF(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gab(a){return A.bw(u.N)},
gj(a){return a.length},
$iy:1,
$iax:1,
$ife:1,
$iu:1}
A.bP.prototype={
B(a){return"LateInitializationError: "+this.a}}
A.ap.prototype={
gj(a){return this.a.length},
i(a,b){var t=this.a
if(!(b>=0&&b<t.length))return A.a(t,b)
return t.charCodeAt(b)}}
A.fk.prototype={}
A.c9.prototype={}
A.a0.prototype={
gu(a){var t=this
return new A.b5(t,t.gj(t),A.i(t).l("b5<a0.E>"))},
bx(a,b){var t,s,r,q=this,p=q.gj(q)
if(b.length!==0){if(p===0)return""
t=A.x(q.ah(0,0))
if(p!==q.gj(q))throw A.f(A.ac(q))
for(s=t,r=1;r<p;++r){s=s+b+A.x(q.ah(0,r))
if(p!==q.gj(q))throw A.f(A.ac(q))}return s.charCodeAt(0)==0?s:s}else{for(r=0,s="";r<p;++r){s+=A.x(q.ah(0,r))
if(p!==q.gj(q))throw A.f(A.ac(q))}return s.charCodeAt(0)==0?s:s}}}
A.cP.prototype={
ge6(){var t=J.aK(this.a),s=this.c
if(s==null||s>t)return t
return s},
geD(){var t=J.aK(this.a),s=this.b
if(s>t)return t
return s},
gj(a){var t,s=J.aK(this.a),r=this.b
if(r>=s)return 0
t=this.c
if(t==null||t>=s)return s-r
return t-r},
ah(a,b){var t=this,s=t.geD()+b
if(b<0||s>=t.ge6())throw A.f(A.h3(b,t.gj(0),t,"index"))
return J.hM(t.a,s)},
bX(a,b){var t,s,r=this
A.cJ(b,"count")
t=r.b+b
s=r.c
if(s!=null&&t>=s)return new A.ca(r.$ti.l("ca<1>"))
return A.eb(r.a,t,s,r.$ti.c)}}
A.b5.prototype={
gD(){var t=this.d
return t==null?this.$ti.c.a(t):t},
t(){var t,s=this,r=s.a,q=J.J(r),p=q.gj(r)
if(s.b!==p)throw A.f(A.ac(r))
t=s.c
if(t>=p){s.d=null
return!1}s.d=q.ah(r,t);++s.c
return!0},
$ip:1}
A.cr.prototype={
gj(a){return J.aK(this.a)},
ah(a,b){return this.b.$1(J.hM(this.a,b))}}
A.cT.prototype={
gu(a){return new A.bp(J.aZ(this.a),this.b,this.$ti.l("bp<1>"))}}
A.bp.prototype={
t(){var t,s
for(t=this.a,s=this.b;t.t();)if(s.$1(t.gD()))return!0
return!1},
gD(){return this.a.gD()},
$ip:1}
A.ca.prototype={
gu(a){return B.aI},
gj(a){return 0}}
A.cb.prototype={
t(){return!1},
gD(){throw A.f(A.i4())},
$ip:1}
A.R.prototype={}
A.aW.prototype={
n(a,b,c){A.i(this).l("aW.E").a(c)
throw A.f(A.bU("Cannot modify an unmodifiable list"))},
aO(a,b,c,d){A.i(this).l("d<aW.E>").a(d)
throw A.f(A.bU("Cannot modify an unmodifiable list"))}}
A.bT.prototype={}
A.aE.prototype={
gj(a){return J.aK(this.a)},
ah(a,b){var t=this.a,s=J.J(t)
return s.ah(t,s.gj(t)-1-b)}}
A.ah.prototype={$r:"+(1,2)",$s:1}
A.X.prototype={$r:"+(1,2,3)",$s:2}
A.bs.prototype={$r:"+(1,2,3,4)",$s:3}
A.bC.prototype={
B(a){return A.hc(this)},
dr(a,b,c,d){var t=A.ae(c,d)
this.aC(0,new A.eB(this,A.i(this).aX(c).aX(d).l("aS<1,2>(3,4)").a(b),t))
return t},
$ia1:1}
A.eB.prototype={
$2(a,b){var t=A.i(this.a),s=this.b.$2(t.c.a(a),t.y[1].a(b))
this.c.n(0,s.a,s.b)},
$S(){return A.i(this.a).l("~(1,2)")}}
A.c6.prototype={
gj(a){return this.b.length},
gcN(){var t=this.$keys
if(t==null){t=Object.keys(this.a)
this.$keys=t}return t},
a7(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
i(a,b){if(!this.a7(b))return null
return this.b[this.a[b]]},
aC(a,b){var t,s,r,q
this.$ti.l("~(1,2)").a(b)
t=this.gcN()
s=this.b
for(r=t.length,q=0;q<r;++q)b.$2(t[q],s[q])},
gaM(){return new A.cU(this.gcN(),this.$ti.l("cU<1>"))}}
A.cU.prototype={
gj(a){return this.a.length},
gu(a){var t=this.a
return new A.bq(t,t.length,this.$ti.l("bq<1>"))}}
A.bq.prototype={
gD(){var t=this.d
return t==null?this.$ti.c.a(t):t},
t(){var t=this,s=t.c
if(s>=t.b){t.d=null
return!1}t.d=t.a[s]
t.c=s+1
return!0},
$ip:1}
A.bE.prototype={
bn(){var t=this,s=t.$map
if(s==null){s=new A.cp(t.$ti.l("cp<1,2>"))
A.iT(t.a,s)
t.$map=s}return s},
a7(a){return this.bn().a7(a)},
i(a,b){return this.bn().i(0,b)},
aC(a,b){this.$ti.l("~(1,2)").a(b)
this.bn().aC(0,b)},
gaM(){var t=this.bn()
return new A.aB(t,A.i(t).l("aB<1>"))},
gj(a){return this.bn().a}}
A.c5.prototype={}
A.aN.prototype={
gj(a){return this.b},
gu(a){var t,s=this,r=s.$keys
if(r==null){r=Object.keys(s.a)
s.$keys=r}t=r
return new A.bq(t,t.length,s.$ti.l("bq<1>"))},
aB(a,b){if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.cL.prototype={}
A.fp.prototype={
aT(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
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
A.cB.prototype={
B(a){return"Null check operator used on a null value"}}
A.dJ.prototype={
B(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
A.ef.prototype={
B(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
A.fc.prototype={
B(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aM.prototype={
B(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.j0(s==null?"unknown":s)+"'"},
$ib2:1,
gfe(){return this},
$C:"$1",
$R:1,
$D:null}
A.dc.prototype={$C:"$0",$R:0}
A.dd.prototype={$C:"$2",$R:2}
A.ed.prototype={}
A.e8.prototype={
B(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.j0(t)+"'"}}
A.bB.prototype={
M(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bB))return!1
return this.$_target===b.$_target&&this.a===b.a},
gF(a){return(A.hH(this.a)^A.cH(this.$_target))>>>0},
B(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.e1(this.a)+"'")}}
A.e5.prototype={
B(a){return"RuntimeError: "+this.a}}
A.ad.prototype={
gj(a){return this.a},
gaM(){return new A.aB(this,A.i(this).l("aB<1>"))},
a7(a){var t,s
if(typeof a=="string"){t=this.b
if(t==null)return!1
return t[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){s=this.c
if(s==null)return!1
return s[a]!=null}else return this.f2(a)},
f2(a){var t=this.d
if(t==null)return!1
return this.bQ(this.cJ(t,a),a)>=0},
i(a,b){var t,s,r,q,p=null
if(typeof b=="string"){t=this.b
if(t==null)return p
s=t[b]
r=s==null?p:s.b
return r}else if(typeof b=="number"&&(b&0x3fffffff)===b){q=this.c
if(q==null)return p
s=q[b]
r=s==null?p:s.b
return r}else return this.f3(b)},
f3(a){var t,s,r=this.d
if(r==null)return null
t=this.cJ(r,a)
s=this.bQ(t,a)
if(s<0)return null
return t[s].b},
n(a,b,c){var t,s,r=this,q=A.i(r)
q.c.a(b)
q.y[1].a(c)
if(typeof b=="string"){t=r.b
r.cA(t==null?r.b=r.c7():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=r.c
r.cA(s==null?r.c=r.c7():s,b,c)}else r.f4(b,c)},
f4(a,b){var t,s,r,q,p=this,o=A.i(p)
o.c.a(a)
o.y[1].a(b)
t=p.d
if(t==null)t=p.d=p.c7()
s=p.cj(a)
r=t[s]
if(r==null)t[s]=[p.c8(a,b)]
else{q=p.bQ(r,a)
if(q>=0)r[q].b=b
else r.push(p.c8(a,b))}},
aC(a,b){var t,s,r=this
A.i(r).l("~(1,2)").a(b)
t=r.e
s=r.r
while(t!=null){b.$2(t.a,t.b)
if(s!==r.r)throw A.f(A.ac(r))
t=t.c}},
cA(a,b,c){var t,s=A.i(this)
s.c.a(b)
s.y[1].a(c)
t=a[b]
if(t==null)a[b]=this.c8(b,c)
else t.b=c},
c8(a,b){var t=this,s=A.i(t),r=new A.f8(s.c.a(a),s.y[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
cj(a){return J.aw(a)&1073741823},
cJ(a,b){return a[this.cj(b)]},
bQ(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.am(a[s].a,b))return s
return-1},
B(a){return A.hc(this)},
c7(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
$iha:1}
A.f8.prototype={}
A.aB.prototype={
gj(a){return this.a.a},
gu(a){var t=this.a
return new A.O(t,t.r,t.e,this.$ti.l("O<1>"))},
aB(a,b){return this.a.a7(b)}}
A.O.prototype={
gD(){return this.d},
t(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.f(A.ac(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.a
s.c=t.c
return!0}},
$ip:1}
A.cp.prototype={
cj(a){return A.lj(a)&1073741823},
bQ(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.am(a[s].a,b))return s
return-1}}
A.fR.prototype={
$1(a){return this.a(a)},
$S:2}
A.fS.prototype={
$2(a,b){return this.a(a,b)},
$S:3}
A.fT.prototype={
$1(a){return this.a(A.V(a))},
$S:4}
A.a8.prototype={
B(a){return this.cV(!1)},
cV(a){var t,s,r,q,p,o=this.e8(),n=this.bI(),m=(a?"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
if(!(r<n.length))return A.a(n,r)
p=n[r]
m=a?m+A.ig(p):m+A.x(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
e8(){var t,s=this.$s
while($.fz.length<=s)B.c.K($.fz,null)
t=$.fz[s]
if(t==null){t=this.dW()
B.c.n($.fz,s,t)}return t},
dW(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=A.l(new Array(m),u.f)
for(t=0;t<m;++t)l[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
B.c.n(l,r,s[t])}}l=A.jZ(l,!1,u.K)
l.$flags=3
return l}}
A.bW.prototype={
bI(){return[this.a,this.b]},
M(a,b){if(b==null)return!1
return b instanceof A.bW&&this.$s===b.$s&&J.am(this.a,b.a)&&J.am(this.b,b.b)},
gF(a){return A.hd(this.$s,this.a,this.b,B.C)}}
A.bX.prototype={
bI(){return[this.a,this.b,this.c]},
M(a,b){var t=this
if(b==null)return!1
return b instanceof A.bX&&t.$s===b.$s&&J.am(t.a,b.a)&&J.am(t.b,b.b)&&J.am(t.c,b.c)},
gF(a){var t=this
return A.hd(t.$s,t.a,t.b,t.c)}}
A.bY.prototype={
bI(){return this.a},
M(a,b){if(b==null)return!1
return b instanceof A.bY&&this.$s===b.$s&&A.ks(this.a,b.a)},
gF(a){return A.hd(this.$s,A.n(this.a),B.C,B.C)}}
A.cn.prototype={
B(a){return"RegExp/"+this.a+"/"+this.b.flags},
gel(){var t=this,s=t.c
if(s!=null)return s
s=t.b
return t.c=A.i9(t.a,s.multiline,!s.ignoreCase,s.unicode,s.dotAll,"g")},
dX(){var t,s=this.a
if(!A.lM(s,"(",0))return!1
t=this.b.unicode?"u":""
return new RegExp("(?:)|"+s,t).exec("").length>1},
d2(a,b){return new A.eg(this,b,0)},
cG(a,b){var t,s=this.gel()
if(s==null)s=A.hv(s)
s.lastIndex=b
t=s.exec(a)
if(t==null)return null
return new A.em(t)},
$ife:1,
$ikb:1}
A.em.prototype={
gct(){return this.b.index},
gci(){var t=this.b
return t.index+t[0].length},
$ibQ:1,
$icK:1}
A.eg.prototype={
gu(a){return new A.eh(this.a,this.b,this.c)}}
A.eh.prototype={
gD(){var t=this.d
return t==null?u.a0.a(t):t},
t(){var t,s,r,q,p,o,n=this,m=n.b
if(m==null)return!1
t=n.c
s=m.length
if(t<=s){r=n.a
q=r.cG(m,t)
if(q!=null){n.d=q
p=q.gci()
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
$ip:1}
A.ea.prototype={
gci(){return this.a+this.c.length},
$ibQ:1,
gct(){return this.a}}
A.eo.prototype={
gu(a){return new A.ep(this.a,this.b,this.c)}}
A.ep.prototype={
t(){var t,s,r=this,q=r.c,p=r.b,o=p.length,n=r.a,m=n.length
if(q+o>m){r.d=null
return!1}t=n.indexOf(p,q)
if(t<0){r.c=m+1
r.d=null
return!1}s=t+o
r.d=new A.ea(t,p)
r.c=s===r.c?s+1:s
return!0},
gD(){var t=this.d
t.toString
return t},
$ip:1}
A.fu.prototype={
bp(){var t=this.b
if(t===this)throw A.f(A.f4(""))
return t}}
A.aT.prototype={
gab(a){return B.d_},
bt(a,b,c){A.bt(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
d6(a){return this.bt(a,0,null)},
d5(a,b,c){A.bt(a,b,c)
c=B.b.aR(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
d4(a,b,c){A.bt(a,b,c)
c=B.b.aR(a.byteLength-b,4)
return new Float32Array(a,b,c)},
d3(a,b,c){A.bt(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
$iy:1,
$iaT:1}
A.b6.prototype={$ib6:1}
A.cx.prototype={
gE(a){if(((a.$flags|0)&2)!==0)return new A.fF(a.buffer)
else return a.buffer},
ej(a,b,c,d){var t=A.W(b,0,c,d,null)
throw A.f(t)},
cC(a,b,c,d){if(b>>>0!==b||b>c)this.ej(a,b,c,d)}}
A.fF.prototype={
bt(a,b,c){var t=A.k6(this.a,b,c)
t.$flags=3
return t},
d6(a){return this.bt(0,0,null)},
d5(a,b,c){var t=A.k4(this.a,b,c)
t.$flags=3
return t},
d4(a,b,c){var t=A.k2(this.a,b,c)
t.$flags=3
return t},
d3(a,b,c){var t=A.k0(this.a,b,c)
t.$flags=3
return t}}
A.dP.prototype={
gab(a){return B.d0},
$iy:1}
A.P.prototype={
gj(a){return a.length},
cT(a,b,c,d,e){var t,s,r=a.length
this.cC(a,b,r,"start")
this.cC(a,c,r,"end")
if(b>c)throw A.f(A.W(b,0,c,null,null))
t=c-b
if(e<0)throw A.f(A.d7(e))
s=d.length
if(s-e<t)throw A.f(A.il("Not enough elements"))
if(e!==0||s!==t)d=d.subarray(e,e+t)
a.set(d,b)},
$ia_:1}
A.aU.prototype={
i(a,b){A.aH(b,a,a.length)
return a[b]},
n(a,b,c){A.d3(c)
a.$flags&2&&A.b(a)
A.aH(b,a,a.length)
a[b]=c},
aI(a,b,c,d,e){u.l.a(d)
a.$flags&2&&A.b(a,5)
if(u.d2.b(d)){this.cT(a,b,c,d,e)
return}this.cz(a,b,c,d,e)},
aO(a,b,c,d){return this.aI(a,b,c,d,0)},
$id:1,
$it:1}
A.a2.prototype={
n(a,b,c){A.q(c)
a.$flags&2&&A.b(a)
A.aH(b,a,a.length)
a[b]=c},
aI(a,b,c,d,e){u.w.a(d)
a.$flags&2&&A.b(a,5)
if(u.cu.b(d)){this.cT(a,b,c,d,e)
return}this.cz(a,b,c,d,e)},
aO(a,b,c,d){return this.aI(a,b,c,d,0)},
$id:1,
$it:1}
A.cs.prototype={
gab(a){return B.d1},
$iy:1,
$ifZ:1}
A.ct.prototype={
gab(a){return B.d2},
$iy:1,
$ih_:1}
A.cu.prototype={
gab(a){return B.d3},
i(a,b){A.aH(b,a,a.length)
return a[b]},
$iy:1,
$ih4:1}
A.cv.prototype={
gab(a){return B.d4},
i(a,b){A.aH(b,a,a.length)
return a[b]},
$iy:1,
$ih5:1}
A.cw.prototype={
gab(a){return B.d5},
i(a,b){A.aH(b,a,a.length)
return a[b]},
$iy:1,
$ih6:1}
A.cy.prototype={
gab(a){return B.d7},
i(a,b){A.aH(b,a,a.length)
return a[b]},
$iy:1,
$iho:1}
A.cz.prototype={
gab(a){return B.d8},
i(a,b){A.aH(b,a,a.length)
return a[b]},
$iy:1,
$ihp:1}
A.cA.prototype={
gab(a){return B.d9},
gj(a){return a.length},
i(a,b){A.aH(b,a,a.length)
return a[b]},
$iy:1}
A.b7.prototype={
gab(a){return B.da},
gj(a){return a.length},
i(a,b){A.aH(b,a,a.length)
return a[b]},
bD(a,b,c){return new Uint8Array(a.subarray(b,A.er(b,c,a.length)))},
bZ(a,b){return this.bD(a,b,null)},
$iy:1,
$ib7:1,
$icR:1}
A.cV.prototype={}
A.cW.prototype={}
A.cX.prototype={}
A.cY.prototype={}
A.ag.prototype={
l(a){return A.d2(v.typeUniverse,this,a)},
aX(a){return A.iC(v.typeUniverse,this,a)}}
A.ej.prototype={}
A.eq.prototype={
B(a){return A.a4(this.a,null)}}
A.ei.prototype={
B(a){return this.a}}
A.cZ.prototype={}
A.e9.prototype={}
A.f9.prototype={
$2(a,b){this.a.n(0,this.b.a(a),this.c.a(b))},
$S:5}
A.w.prototype={
gu(a){return new A.b5(a,this.gj(a),A.av(a).l("b5<w.E>"))},
ah(a,b){return this.i(a,b)},
aB(a,b){var t,s=this.gj(a)
for(t=0;t<s;++t){if(this.i(a,t)===b)return!0
if(s!==this.gj(a))throw A.f(A.ac(a))}return!1},
bX(a,b){return A.eb(a,b,null,A.av(a).l("w.E"))},
dw(a,b){return A.eb(a,0,A.iP(b,"count",u.S),A.av(a).l("w.E"))},
bP(a,b,c,d){var t
A.av(a).l("w.E?").a(d)
A.bn(b,c,this.gj(a))
for(t=b;t<c;++t)this.n(a,t,d)},
aI(a,b,c,d,e){var t,s,r
A.av(a).l("d<w.E>").a(d)
A.bn(b,c,this.gj(a))
t=c-b
if(t===0)return
A.cJ(e,"skipCount")
s=J.J(d)
if(e+t>s.gj(d))throw A.f(A.il("Too few elements"))
if(e<b)for(r=t-1;r>=0;--r)this.n(a,b+r,s.i(d,e+r))
else for(r=0;r<t;++r)this.n(a,b+r,s.i(d,e+r))},
aO(a,b,c,d){return this.aI(a,b,c,d,0)},
dH(a,b,c){A.av(a).l("d<w.E>").a(c)
this.aO(a,b,b+c.length,c)},
B(a){return A.h7(a,"[","]")},
$id:1,
$it:1}
A.K.prototype={
aC(a,b){var t,s,r,q=A.i(this)
q.l("~(K.K,K.V)").a(b)
for(t=this.gaM(),t=t.gu(t),q=q.l("K.V");t.t();){s=t.gD()
r=this.i(0,s)
b.$2(s,r==null?q.a(r):r)}},
dr(a,b,c,d){var t,s,r,q,p,o=A.i(this)
o.aX(c).aX(d).l("aS<1,2>(K.K,K.V)").a(b)
t=A.ae(c,d)
for(s=this.gaM(),s=s.gu(s),o=o.l("K.V");s.t();){r=s.gD()
q=this.i(0,r)
p=b.$2(r,q==null?o.a(q):q)
t.n(0,p.a,p.b)}return t},
a7(a){return this.gaM().aB(0,a)},
gj(a){var t=this.gaM()
return t.gj(t)},
B(a){return A.hc(this)},
$ia1:1}
A.fa.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=A.x(a)
s.a=(s.a+=t)+": "
t=A.x(b)
s.a+=t},
$S:6}
A.bS.prototype={
B(a){return A.h7(this,"{","}")},
$id:1}
A.ek.prototype={
i(a,b){var t,s=this.b
if(s==null)return this.c.i(0,b)
else if(typeof b!="string")return null
else{t=s[b]
return typeof t=="undefined"?this.ev(b):t}},
gj(a){return this.b==null?this.c.a:this.bG().length},
gaM(){if(this.b==null){var t=this.c
return new A.aB(t,A.i(t).l("aB<1>"))}return new A.el(this)},
a7(a){if(this.b==null)return this.c.a7(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
aC(a,b){var t,s,r,q,p=this
u.cQ.a(b)
if(p.b==null)return p.c.aC(0,b)
t=p.bG()
for(s=0;s<t.length;++s){r=t[s]
q=p.b[r]
if(typeof q=="undefined"){q=A.fJ(p.a[r])
p.b[r]=q}b.$2(r,q)
if(t!==p.c)throw A.f(A.ac(p))}},
bG(){var t=u.aL.a(this.c)
if(t==null)t=this.c=A.l(Object.keys(this.a),u.s)
return t},
ev(a){var t
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
t=A.fJ(this.a[a])
return this.b[a]=t}}
A.el.prototype={
gj(a){return this.a.gj(0)},
ah(a,b){var t=this.a
if(t.b==null)t=t.gaM().ah(0,b)
else{t=t.bG()
if(!(b>=0&&b<t.length))return A.a(t,b)
t=t[b]}return t},
gu(a){var t=this.a
if(t.b==null){t=t.gaM()
t=t.gu(t)}else{t=t.bG()
t=new J.b_(t,t.length,A.U(t).l("b_<1>"))}return t},
aB(a,b){return this.a.a7(b)}}
A.fD.prototype={
aZ(a){var t,s,r,q,p
A.V(a)
t=a.length
s=A.bn(0,null,t)
r=new Uint8Array(s)
for(q=0;q<s;++q){if(!(q<t))return A.a(a,q)
p=a.charCodeAt(q)
if((p&4294967040)!==0)throw A.f(A.jw(a,"string","Contains invalid characters."))
if(!(q<s))return A.a(r,q)
r[q]=p}return r}}
A.fC.prototype={
aZ(a){var t,s,r,q
u.L.a(a)
t=a.length
s=A.bn(0,null,t)
for(r=0;r<s;++r){if(!(r<t))return A.a(a,r)
q=a[r]
if((q&4294967040)!==0){if(!this.a)throw A.f(A.az("Invalid value in input: "+q,null,null))
return this.dZ(a,0,s)}}return A.fm(a,0,s)},
dZ(a,b,c){var t,s,r,q
u.L.a(a)
for(t=a.length,s=b,r="";s<c;++s){if(!(s<t))return A.a(a,s)
q=a[s]
r+=A.ih((q&4294967040)!==0?65533:q)}return r.charCodeAt(0)==0?r:r}}
A.ex.prototype={}
A.ez.prototype={}
A.ey.prototype={
aZ(a){var t,s,r,q=A.bn(0,null,a.length)
if(0===q)return new Uint8Array(0)
t=new A.ft()
s=t.eP(a,0,q)
s.toString
r=t.a
if(r<-1)A.aJ(A.az("Missing padding character",a,q))
if(r>0)A.aJ(A.az("Invalid length, must be multiple of four",a,q))
t.a=-1
return s}}
A.ft.prototype={
eP(a,b,c){var t,s=this,r=s.a
if(r<0){s.a=A.iq(a,b,c,r)
return null}if(b===c)return new Uint8Array(0)
t=A.kf(a,b,c,r)
s.a=A.kh(a,b,c,t,0,s.a)
return t}}
A.b0.prototype={}
A.dt.prototype={}
A.du.prototype={}
A.dK.prototype={
cg(a,b){var t=A.l7(a,this.geR().a)
return t},
geR(){return B.bO}}
A.f3.prototype={}
A.dL.prototype={
bM(a){var t
u.L.a(a)
t=B.bP.aZ(a)
return t}}
A.f6.prototype={}
A.f5.prototype={}
A.f7.prototype={
aZ(a){var t,s,r,q,p=A.l([],u.s),o=a.length
for(t=0,s=0,r=0;r<o;++r,s=q){q=a.charCodeAt(r)
if(q!==13){if(q!==10)continue
if(s===13){t=r+1
continue}}B.c.K(p,B.k.aW(a,t,r))
t=r+1}if(t<o)B.c.K(p,B.k.aW(a,t,o))
return p}}
A.fv.prototype={
B(a){return this.ae()}}
A.C.prototype={}
A.d8.prototype={
B(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.eO(t)
return"Assertion failed"}}
A.cQ.prototype={}
A.an.prototype={
gc3(){return"Invalid argument"+(!this.a?"(s)":"")},
gc2(){return""},
B(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+A.x(q),o=t.gc3()+r+p
if(!t.a)return o
return o+t.gc2()+": "+A.eO(t.gck())},
gck(){return this.b}}
A.cI.prototype={
gck(){return A.iF(this.b)},
gc3(){return"RangeError"},
gc2(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.x(r):""
else if(r==null)t=": Not greater than or equal to "+A.x(s)
else if(r>s)t=": Not in inclusive range "+A.x(s)+".."+A.x(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.x(s)
return t}}
A.dB.prototype={
gck(){return A.q(this.b)},
gc3(){return"RangeError"},
gc2(){if(A.q(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gj(a){return this.f}}
A.cS.prototype={
B(a){return"Unsupported operation: "+this.a}}
A.ee.prototype={
B(a){return"UnimplementedError: "+this.a}}
A.cN.prototype={
B(a){return"Bad state: "+this.a}}
A.dr.prototype={
B(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.eO(t)+"."}}
A.dS.prototype={
B(a){return"Out of Memory"},
$iC:1}
A.cM.prototype={
B(a){return"Stack Overflow"},
$iC:1}
A.fw.prototype={
B(a){return"Exception: "+this.a}}
A.bD.prototype={
B(a){var t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f=="string"){if(g!=null)t=g<0||g>f.length
else t=!1
if(t)g=null
if(g==null){if(f.length>78)f=B.k.aW(f,0,75)+"..."
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
l=""}return h+m+B.k.aW(f,j,k)+l+"\n"+B.k.bd(" ",g-j+m.length)+"^\n"}else return g!=null?h+(" (at offset "+A.x(g)+")"):h}}
A.d.prototype={
bx(a,b){var t,s,r=this.gu(this)
if(!r.t())return""
t=J.aL(r.gD())
if(!r.t())return t
if(b.length===0){s=t
do s+=J.aL(r.gD())
while(r.t())}else{s=t
do s=s+b+J.aL(r.gD())
while(r.t())}return s.charCodeAt(0)==0?s:s},
gj(a){var t,s=this.gu(this)
for(t=0;s.t();)++t
return t},
ah(a,b){var t,s
A.cJ(b,"index")
t=this.gu(this)
for(s=b;t.t();){if(s===0)return t.gD();--s}throw A.f(A.h3(b,b-s,this,"index"))},
B(a){return A.jS(this,"(",")")}}
A.aS.prototype={
B(a){return"MapEntry("+this.a+": "+A.x(this.b)+")"}}
A.b8.prototype={
gF(a){return A.A.prototype.gF.call(this,0)},
B(a){return"null"}}
A.A.prototype={$iA:1,
M(a,b){return this===b},
gF(a){return A.cH(this)},
B(a){return"Instance of '"+A.e1(this)+"'"},
gab(a){return A.ly(this)},
toString(){return this.B(this)}}
A.e4.prototype={
gD(){return this.d},
t(){var t,s,r,q=this,p=q.b=q.c,o=q.a,n=o.length
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
$ip:1}
A.cO.prototype={
gj(a){return this.a.length},
B(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.eT.prototype={
dP(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a.length
for(t=0;t<g;++t){s=a[t]
if(s>h.b)h.b=s
if(s<h.c)h.c=s}s=h.b
r=B.b.a1(1,s)
q=h.a=new Uint32Array(r)
for(p=1,o=0,n=2;p<=s;){for(m=p<<16,t=0;t<g;++t)if(a[t]===p){for(l=o,k=0,j=0;j<p;++j){k=(k<<1|l&1)>>>0
l=l>>>1}for(i=(m|t)>>>0,j=k;j<r;j+=n){if(!(j>=0))return A.a(q,j)
q[j]=i}++o}++p
o=o<<1>>>0
n=n<<1>>>0}}}
A.fr.prototype={}
A.fH.prototype={
eQ(a,b,c,d){var t,s,r,q,p,o,n=null
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
if(B.b.aV(p*256+o,31)!==0)return!1
if((o>>>5&1)!==0){a.a_()
return!1}if(n!=null)b.aN(n)
t=new A.cC(new Uint8Array(32768),B.N)
new A.eZ(a,t).eh()
n=J.M(B.h.gE(t.c),t.c.byteOffset,t.b)
a.a_()}if(n!=null)b.aN(n)
return!0}}
A.fs.prototype={}
A.fI.prototype={
dh(a,b){var t
u.L.a(a)
t=A.ic(B.B,32768)
this.eT(A.f0(a,B.N,null,null),t,b,!1,null)
return t.cn()},
eT(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
b.a=B.B
t=(B.b.C(15,0,15)-8<<4|8)>>>0
b.P(t)
s=t*256
for(r=0;q=(r|0)>>>0,B.b.aV(s+q,31)!==0;)++r
b.P(q)
p=a.c
o=A.lv(a)
a.c=p
q=c==null?6:c
A.jK(a,q,b,15)
q=o&255
n=o>>>24&255
m=o>>>16&255
l=o>>>8&255
if(b.a===B.B){b.P(n)
b.P(m)
b.P(l)
b.P(q)}else{b.P(q)
b.P(l)
b.P(m)
b.P(n)}}}
A.bV.prototype={
ae(){return"_DeflateFlushMode."+this.b}}
A.eM.prototype={
ei(a,b){var t,s,r,q,p=this,o=!0
if(b>=9)if(b<=15)o=a>9
if(o)return!1
t=p.eg(a)
if(t==null)return!1
$.aO.b=t
o=new Uint16Array(1146)
p.p1=o
s=new Uint16Array(122)
p.p2=s
r=new Uint16Array(78)
p.p3=r
p.as=b
q=p.Q=B.b.ce(1,b)
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
p.bN=16384
p.xr=49152
p.k4=a
p.w=p.x=p.ok=0
p.c=113
p.d=0
q=p.p4
q.a=o
q.c=$.jj()
q=p.R8
q.a=s
q.c=$.ji()
q=p.RG
q.a=r
q.c=$.jh()
p.aj=p.ai=0
p.bw=8
p.cK()
p.ay=2*p.Q
B.z.bP(p.CW,0,p.cy,0)
p.k2=p.fr=p.id=0
p.fx=p.k3=2
p.cx=p.go=0
return!0},
e2(a){var t,s,r,q,p=this,o=p.x
o===$&&A.c()
if(o!==0)p.c5()
o=p.a
t=o.c
o=o.d
o===$&&A.c()
s=!0
if(t>=o){o=p.k2
o===$&&A.c()
if(o===0)o=a!==B.Y&&p.c!==666
else o=s}else o=s
if(o){switch($.aO.bp().e){case 0:r=p.e5(a)
break
case 1:r=p.e3(a)
break
case 2:r=p.e4(a)
break
default:r=-1
break}o=r===2
if(o||r===3)p.c=666
if(r===0||o)return 0
if(r===1){if(a===B.db){p.a5(2,3)
p.bg(256,B.V)
p.d7()
o=p.bw
o===$&&A.c()
t=p.aj
t===$&&A.c()
if(1+o+10-t<9){p.a5(2,3)
p.bg(256,B.V)
p.d7()}p.bw=7}else{p.cW(0,0,!1)
if(a===B.dc){o=p.cy
o===$&&A.c()
t=p.CW
q=0
for(;q<o;++q){t===$&&A.c()
t.$flags&2&&A.b(t)
if(!(q<t.length))return A.a(t,q)
t[q]=0}}}p.c5()}}if(a!==B.M)return 0
return 1},
cK(){var t=this,s=t.p1
s===$&&A.c()
B.z.bP(s,0,572,0)
s=t.p2
s===$&&A.c()
B.z.bP(s,0,60,0)
s=t.p3
s===$&&A.c()
B.z.bP(s,0,38,0)
s=t.p1
s.$flags&2&&A.b(s)
s[512]=1
t.y2=t.bO=t.aS=t.bi=0},
cb(a,b){var t,s,r,q,p,o,n=this.ry
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
p=A.hW(a,p,n[s],q)}else p=!1
if(p)++s
if(!(s>=0&&s<573))return A.a(n,s)
if(A.hW(a,t,n[s],q))break
p=n[s]
r&2&&A.b(n)
if(!(b>=0&&b<573))return A.a(n,b)
n[b]=p
o=s<<1>>>0
b=s
s=o}r&2&&A.b(n)
if(!(b>=0&&b<573))return A.a(n,b)
n[b]=t},
cR(a,b){var t,s,r,q,p,o,n,m,l,k,j,i=a.length
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
dV(){var t,s,r=this,q=r.p1
q===$&&A.c()
t=r.p4.b
t===$&&A.c()
r.cR(q,t)
t=r.p2
t===$&&A.c()
q=r.R8.b
q===$&&A.c()
r.cR(t,q)
r.RG.c1(r)
for(q=r.p3,s=18;s>=3;--s){q===$&&A.c()
t=B.X[s]*2+1
if(!(t<78))return A.a(q,t)
if(q[t]!==0)break}q=r.aS
q===$&&A.c()
r.aS=q+(3*(s+1)+5+5+4)
return s},
eB(a,b,c){var t,s,r,q,p=this
p.a5(a-257,5)
t=b-1
p.a5(t,5)
p.a5(c-4,4)
for(s=0;s<c;++s){r=p.p3
r===$&&A.c()
if(!(s<19))return A.a(B.X,s)
q=B.X[s]*2+1
if(!(q<78))return A.a(r,q)
p.a5(r[q],3)}r=p.p1
r===$&&A.c()
p.cS(r,a-1)
r=p.p2
r===$&&A.c()
p.cS(r,t)},
cS(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=a.length
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
g.a5(h&65535,i[j]&65535)}while(--n,n!==0)}else if(t!==0){if(t!==o){m=g.p3
m===$&&A.c()
q.a(m)
j=t*2
if(!(j<78))return A.a(m,j)
i=m[j];++j
if(!(j<78))return A.a(m,j)
g.a5(i&65535,m[j]&65535);--n}m=g.p3
m===$&&A.c()
q.a(m)
g.a5(m[32]&65535,m[33]&65535)
g.a5(n-3,2)}else{m=g.p3
if(n<=10){m===$&&A.c()
q.a(m)
g.a5(m[34]&65535,m[35]&65535)
g.a5(n-3,3)}else{m===$&&A.c()
q.a(m)
g.a5(m[36]&65535,m[37]&65535)
g.a5(n-11,7)}}}if(l===0){r=k
s=138}else if(t===l){r=k
s=6}else{s=7
r=4}o=t
n=0}},
ex(a,b,c){var t,s,r=this
if(c===0)return
t=r.f
t===$&&A.c()
s=r.x
s===$&&A.c()
B.h.aI(t,s,s+c,a,b)
r.x=r.x+c},
aA(a){var t,s=this.f
s===$&&A.c()
t=this.x
t===$&&A.c()
this.x=t+1
s.$flags&2&&A.b(s)
if(!(t>=0&&t<s.length))return A.a(s,t)
s[t]=a},
bg(a,b){var t,s,r
u.L.a(b)
t=a*2
s=b.length
if(!(t<s))return A.a(b,t)
r=b[t];++t
if(!(t<s))return A.a(b,t)
this.a5(r&65535,b[t]&65535)},
a5(a,b){var t,s=this,r=s.aj
r===$&&A.c()
t=s.ai
if(r>16-b){t===$&&A.c()
r=s.ai=(t|B.b.a1(a,r)&65535)>>>0
s.aA(r)
s.aA(A.Y(r,8))
s.ai=A.Y(a,16-s.aj)
s.aj=s.aj+(b-16)}else{t===$&&A.c()
s.ai=(t|B.b.a1(a,r)&65535)>>>0
s.aj=r+b}},
bs(a,b){var t,s,r,q,p,o=this,n=o.f
n===$&&A.c()
t=o.bN
t===$&&A.c()
s=o.y2
s===$&&A.c()
s=t+s*2
t=A.Y(a,8)
n.$flags&2&&A.b(n)
if(!(s<n.length))return A.a(n,s)
n[s]=t
t=o.f
s=o.bN
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
n[t]=s+1}else{n=o.bO
n===$&&A.c()
o.bO=n+1
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
t=A.it(a-1)*2
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
q+=s[r]*(5+B.J[p])}q=A.Y(q,3)
s=o.bO
s===$&&A.c()
r=o.y2
if(s<r/2&&q<(n-t)/2)return!0
n=r}t=o.y1
t===$&&A.c()
return n===t-1},
cD(a,b){var t,s,r,q,p,o,n,m,l=this,k=u.L
k.a(a)
k.a(b)
k=l.y2
k===$&&A.c()
if(k!==0){t=0
do{k=l.f
k===$&&A.c()
s=l.bN
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
if(p===0)l.bg(o,a)
else{n=B.a4[o]
l.bg(n+256+1,a)
if(!(n<29))return A.a(B.a3,n)
m=B.a3[n]
if(m!==0)l.a5(o-B.bR[n],m);--p
n=A.it(p)
l.bg(n,b)
if(!(n<30))return A.a(B.J,n)
m=B.J[n]
if(m!==0)l.a5(p-B.bU[n],m)}}while(t<l.y2)}l.bg(256,a)
if(513>=a.length)return A.a(a,513)
l.bw=a[513]},
dI(){var t,s,r,q,p
for(t=this.p1,s=0,r=0;s<7;){t===$&&A.c()
q=s*2
if(!(q<1146))return A.a(t,q)
r+=t[q];++s}for(p=0;s<128;){t===$&&A.c()
q=s*2
if(!(q<1146))return A.a(t,q)
p+=t[q];++s}while(s<256){t===$&&A.c()
q=s*2
if(!(q<1146))return A.a(t,q)
r+=t[q];++s}this.y=r>A.Y(p,2)?0:1},
d7(){var t=this,s=t.aj
s===$&&A.c()
if(s===16){s=t.ai
s===$&&A.c()
t.aA(s)
t.aA(A.Y(s,8))
t.aj=t.ai=0}else if(s>=8){s=t.ai
s===$&&A.c()
t.aA(s)
t.ai=A.Y(t.ai,8)
t.aj=t.aj-8}},
cB(){var t=this,s=t.aj
s===$&&A.c()
if(s>8){s=t.ai
s===$&&A.c()
t.aA(s)
t.aA(A.Y(s,8))}else if(s>0){s=t.ai
s===$&&A.c()
t.aA(s)}t.aj=t.ai=0},
b_(a){var t,s,r,q,p,o=this,n=o.fr
n===$&&A.c()
if(n>=0)t=n
else t=-1
s=o.id
s===$&&A.c()
n=s-n
s=o.k4
s===$&&A.c()
if(s>0){if(o.y===2)o.dI()
o.p4.c1(o)
o.R8.c1(o)
r=o.dV()
s=o.aS
s===$&&A.c()
q=A.Y(s+3+7,3)
s=o.bi
s===$&&A.c()
p=A.Y(s+3+7,3)
if(p<=q)q=p}else{p=n+5
q=p
r=0}if(n+4<=q&&t!==-1)o.cW(t,n,a)
else if(p===q){o.a5(2+(a?1:0),3)
o.cD(B.V,B.ar)}else{o.a5(4+(a?1:0),3)
n=o.p4.b
n===$&&A.c()
t=o.R8.b
t===$&&A.c()
o.eB(n+1,t+1,r+1)
t=o.p1
t===$&&A.c()
n=o.p2
n===$&&A.c()
o.cD(t,n)}o.cK()
if(a)o.cB()
o.fr=o.id
o.c5()},
e5(a){var t,s,r,q,p,o=this,n=o.r
n===$&&A.c()
t=n-5
t=65535>t?t:65535
for(n=a===B.Y;;){s=o.k2
s===$&&A.c()
if(s<=1){o.c4()
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
o.b_(!1)}s=o.id
r=o.fr
p=o.Q
p===$&&A.c()
if(s-r>=p-262)o.b_(!1)}n=a===B.M
o.b_(n)
return n?3:1},
cW(a,b,c){var t,s=this
s.a5(c?1:0,3)
s.cB()
s.bw=8
s.aA(b)
s.aA(A.Y(b,8))
t=(~b>>>0)+65536&65535
s.aA(t)
s.aA(A.Y(t,8))
t=s.ax
t===$&&A.c()
s.ex(t,a,b)},
c4(){var t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.a
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
B.h.aI(s,0,t,s,t)
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
m=i.ey(t,i.id+i.k2,q)
t=i.k2=i.k2+m
if(t>=3){s=i.ax
r=i.id
o=s.length
if(r>>>0!==r||r>=o)return A.a(s,r)
k=s[r]&255
i.cx=k
j=i.dy
j===$&&A.c()
j=B.b.a1(k,j);++r
if(!(r<o))return A.a(s,r)
r=s[r]
s=i.dx
s===$&&A.c()
i.cx=((j^r&255)&s)>>>0}}while(t<262&&!(h.c>=h.d))},
e3(a){var t,s,r,q,p,o,n,m,l,k,j=this
for(t=a===B.Y,s=0;;){r=j.k2
r===$&&A.c()
if(r<262){j.c4()
r=j.k2
if(r<262&&t)return 0
if(r===0)break}if(r>=3){r=j.cx
r===$&&A.c()
q=j.dy
q===$&&A.c()
q=B.b.a1(r,q)
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
if(r!==2)j.fx=j.cP(s)}r=j.fx
r===$&&A.c()
q=j.id
if(r>=3){q===$&&A.c()
l=j.bs(q-j.k1,r-3)
r=j.k2
q=j.fx
r-=q
j.k2=r
p=$.aO.b
if(p===$.aO)A.aJ(A.f4(""))
if(q<=p.b&&r>=3){r=j.fx=q-1
do{q=j.id=j.id+1
p=j.cx
p===$&&A.c()
o=j.dy
o===$&&A.c()
o=B.b.a1(p,o)
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
n=B.b.a1(o,n);++r
if(!(r<p))return A.a(q,r)
r=q[r]
q=j.dx
q===$&&A.c()
j.cx=((n^r&255)&q)>>>0}}else{r=j.ax
r===$&&A.c()
q===$&&A.c()
if(!(q>=0&&q<r.length))return A.a(r,q)
l=j.bs(0,r[q]&255)
j.k2=j.k2-1
j.id=j.id+1}if(l)j.b_(!1)}t=a===B.M
j.b_(t)
return t?3:1},
e4(a){var t,s,r,q,p,o,n,m,l,k,j,i=this
for(t=a===B.Y,s=0;;){r=i.k2
r===$&&A.c()
if(r<262){i.c4()
r=i.k2
if(r<262&&t)return 0
if(r===0)break}if(r>=3){r=i.cx
r===$&&A.c()
q=i.dy
q===$&&A.c()
q=B.b.a1(r,q)
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
if(s!==0){p=$.aO.b
if(p===$.aO)A.aJ(A.f4(""))
if(r<p.b){r=i.id
r===$&&A.c()
q=i.Q
q===$&&A.c()
q=(r-s&65535)<=q-262
r=q}else r=q}else r=q
q=2
if(r){r=i.ok
r===$&&A.c()
if(r!==2){r=i.cP(s)
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
k=i.bs(r-1-i.fy,q-3)
q=i.k2
r=i.k3
i.k2=q-(r-1)
r=i.k3=r-2
do{q=i.id=i.id+1
if(q<=l){p=i.cx
p===$&&A.c()
o=i.dy
o===$&&A.c()
o=B.b.a1(p,o)
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
if(k)i.b_(!1)}else{r=i.go
r===$&&A.c()
if(r!==0){r=i.ax
r===$&&A.c()
q=i.id
q===$&&A.c();--q
if(!(q>=0&&q<r.length))return A.a(r,q)
if(i.bs(0,r[q]&255))i.b_(!1)
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
i.bs(0,t[r]&255)
i.go=0}t=a===B.M
i.b_(t)
return t?3:1},
cP(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=$.aO.bp().d,b=d.id
b===$&&A.c()
t=d.k3
t===$&&A.c()
s=d.Q
s===$&&A.c()
s-=262
r=b>s?b-s:0
q=$.aO.bp().c
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
if(d.k3>=$.aO.bp().a)c=c>>>2
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
ey(a,b,c){var t,s,r,q,p,o,n=this
if(c!==0){t=n.a
s=t.c
t=t.d
t===$&&A.c()
t=s>=t}else t=!0
if(t)return 0
r=n.a.by(c)
q=r.gj(0)
if(q===0)return 0
p=r.aF()
o=p.length
if(q>o)q=o
B.h.aO(a,b,b+q,p)
n.e+=q
n.d=A.au(p,n.d)
return q},
c5(){var t,s=this,r=s.x
r===$&&A.c()
t=s.f
t===$&&A.c()
s.b.dB(t,r)
t=s.w
t===$&&A.c()
s.w=t+r
r=s.x-r
s.x=r
if(r===0)s.w=0},
eg(a){switch(a){case 0:return new A.a7(0,0,0,0,0)
case 1:return new A.a7(4,4,8,4,1)
case 2:return new A.a7(4,5,16,8,1)
case 3:return new A.a7(4,6,32,32,1)
case 4:return new A.a7(4,4,16,16,2)
case 5:return new A.a7(8,16,32,32,2)
case 6:return new A.a7(8,16,128,128,2)
case 7:return new A.a7(8,32,128,256,2)
case 8:return new A.a7(32,128,258,1024,2)
case 9:return new A.a7(32,258,258,4096,2)}return null}}
A.a7.prototype={}
A.fx.prototype={
ef(a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
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
f=a3.aS
f===$&&A.c()
a3.aS=f+b*(n+c)
if(l){f=a3.bi
f===$&&A.c()
if(!(e<s.length))return A.a(s,e)
a3.bi=f+b*(s[e]+c)}}if(h===0)return
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
if(k!==n){f=a3.aS
f===$&&A.c()
if(!(o>=0&&o<j))return A.a(a2,o)
a3.aS=f+(n-k)*a2[o]
a2.$flags&2&&A.b(a2)
a2[l]=n}--g}}},
c1(a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a
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
g=a0.aS
g===$&&A.c()
a0.aS=g-1
if(j){g=a0.bi
g===$&&A.c();++i
if(!(i<s.length))return A.a(s,i)
a0.bi=g-s[i]}}b.b=k
for(l=B.b.aR(i,2);l>=1;--l)a0.cb(a,l)
h=r
do{l=q[1]
j=a0.to--
if(!(j>=0&&j<573))return A.a(q,j)
j=q[j]
p&2&&A.b(q)
q[1]=j
a0.cb(a,1)
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
a0.cb(a,1)
if(a0.to>=2){h=c
continue}else break}while(!0)
t=--a0.x1
p=q[1]
if(!(t>=0&&t<573))return A.a(q,t)
q[t]=p
b.ef(a0)
A.ki(a,k,a0.rx)}}
A.fB.prototype={}
A.eZ.prototype={
gaQ(){var t=this.a
if(t==null)return t
t.d===$&&A.c()
return t},
eh(){var t,s,r=this
r.e=r.d=0
if(r.gaQ()==null)return
for(;;){t=r.gaQ()
s=t.c
t=t.d
t===$&&A.c()
if(!(s<t))break
if(!r.eq())return}},
eq(){var t,s,r,q=this,p=q.gaQ()
if(p!=null){t=p.c
s=p.d
s===$&&A.c()
s=t>=s
t=s}else t=!0
if(t)return!1
r=q.au(3)
switch(B.b.H(r,1)){case 0:if(q.es()===-1)return!1
break
case 1:if(q.cF($.j3(),$.j2())===-1)return!1
break
case 2:if(q.er()===-1)return!1
break
default:return!1}return(r&1)===0},
au(a){var t,s,r,q,p=this
if(a===0)return 0
while(t=p.e,t<a){t=p.gaQ()
s=t.c
t=t.d
t===$&&A.c()
if(s>=t)return-1
t=p.gaQ()
s=t.b
s.toString
t=t.c++
if(!(t>=0&&t<s.length))return A.a(s,t)
r=s[t]
t=p.d
s=p.e
p.d=(t|B.b.a1(r,s))>>>0
p.e=s+8}s=p.d
q=B.b.ce(1,a)
p.d=B.b.br(s,a)
p.e=t-a
return(s&q-1)>>>0},
cc(a){var t,s,r,q,p,o,n,m=this,l=a.a
l===$&&A.c()
t=a.b
while(s=m.e,s<t){s=m.gaQ()
r=s.c
s=s.d
s===$&&A.c()
if(r>=s)return-1
s=m.gaQ()
r=s.b
r.toString
s=s.c++
if(!(s>=0&&s<r.length))return A.a(r,s)
q=r[s]
s=m.d
r=m.e
m.d=(s|B.b.a1(q,r))>>>0
m.e=r+8}r=m.d
p=(r&B.b.a1(1,t)-1)>>>0
if(!(p<l.length))return A.a(l,p)
o=l[p]
n=o>>>16
if(n===0)return-1
m.d=B.b.br(r,n)
m.e=s-n
return o&65535},
es(){var t,s,r=this
r.e=r.d=0
t=r.au(16)
s=r.au(16)
if(t!==0&&t!==(s^65535)>>>0)return-1
if(t>r.gaQ().gj(0))return-1
r.c.fd(r.gaQ().by(t))
return 0},
er(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.au(5)
if(i===-1)return-1
i+=257
if(i>288)return-1
t=j.au(5)
if(t===-1)return-1;++t
if(t>32)return-1
s=j.au(4)
if(s===-1)return-1
s+=4
if(s>19)return-1
r=new Uint8Array(19)
for(q=0;q<s;++q){p=j.au(3)
if(p===-1)return-1
o=B.X[q]
if(!(o<19))return A.a(r,o)
r[o]=p}n=A.dA(r)
o=i+t
m=new Uint8Array(o)
l=J.M(B.h.gE(m),0,i)
k=J.M(B.h.gE(m),i,t)
if(j.e0(o,n,m)===-1)return-1
return j.cF(A.dA(l),A.dA(k))},
cF(a,b){var t,s,r,q,p,o,n,m=this
for(t=m.c;;){s=m.cc(a)
if(s<0||s>285)return-1
if(s===256)break
if(s<256){t.P(s&255)
continue}r=s-257
if(!(r>=0&&r<29))return A.a(B.ax,r)
q=B.ax[r]
p=m.au(B.cp[r])
o=m.cc(b)
if(o<0||o>29)return-1
if(!(o>=0&&o<30))return A.a(B.ay,o)
n=B.ay[o]+m.au(B.J[o])
if(n<1||n>t.b)return-1
t.fc(n,q+p)}while(t=m.e,t>=8){m.e=t-8
t=m.gaQ()
q=--t.c
p=t.d
p===$&&A.c()
t.c=B.b.C(q,0,p)}return 0},
e0(a,b,c){var t,s,r,q,p,o,n,m,l=this
for(t=0,s=0;s<a;){r=l.cc(b)
if(r===-1)return-1
q=0
switch(r){case 16:p=l.au(2)
if(p===-1)return-1
p+=3
if(s+p>a)return-1
for(o=c.$flags|0;n=p-1,p>0;p=n,s=m){m=s+1
o&2&&A.b(c)
if(!(s>=0&&s<c.length))return A.a(c,s)
c[s]=t}break
case 17:p=l.au(3)
if(p===-1)return-1
p+=3
if(s+p>a)return-1
for(o=c.$flags|0;n=p-1,p>0;p=n,s=m){m=s+1
o&2&&A.b(c)
if(!(s>=0&&s<c.length))return A.a(c,s)
c[s]=0}t=q
break
case 18:p=l.au(7)
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
A.db.prototype={
ae(){return"ByteOrder."+this.b}}
A.dC.prototype={
gj(a){var t=this.b
return t==null?0:t.length-this.c},
dN(a,b){var t=this.b
if(t==null)return A.f0(A.l([],u.t),B.N,null,null)
return A.f0(t,this.a,a,b)},
bj(){var t,s=this.b
s.toString
t=this.c++
if(!(t>=0&&t<s.length))return A.a(s,t)
return s[t]},
aF(){var t,s,r,q=this,p=q.b
if(p==null)return new Uint8Array(0)
t=q.gj(0)
s=q.c
r=p.length
if(s+t>r)t=r-s
return J.M(B.h.gE(p),q.b.byteOffset+q.c,t)}}
A.dD.prototype={
a_(){var t=this,s=t.bj(),r=t.bj(),q=t.bj(),p=t.bj()
if(t.a===B.B)return(s<<24|r<<16|q<<8|p)>>>0
return(p<<24|q<<16|r<<8|s)>>>0},
by(a){var t=this,s=t.dN(a,t.c)
t.c=t.c+s.gj(0)
return s}}
A.cC.prototype={
cn(){return J.M(B.h.gE(this.c),this.c.byteOffset,this.b)},
P(a){var t,s,r=this
if(r.b===r.c.length)r.eo()
t=r.c
s=r.b++
t.$flags&2&&A.b(t)
if(!(s>=0&&s<t.length))return A.a(t,s)
t[s]=a},
dB(a,b){var t,s,r,q,p=this
u.L.a(a)
if(b==null)b=a.length
while(t=p.b,s=t+b,r=p.c,q=r.length,s>q)p.bJ(s-q)
B.h.aO(r,t,s,a)
p.b+=b},
aN(a){return this.dB(a,null)},
fd(a){var t,s,r,q,p,o,n=this
for(;;){t=n.b
s=a.b
r=s==null
q=r?0:s.length-a.c
p=n.c
o=p.length
if(!(t+q>o))break
n.bJ(t+(r?0:s.length-a.c)-o)}if(!r)B.h.aI(p,t,t+a.gj(0),s,a.c)
n.b=n.b+a.gj(0)},
fc(a,b){var t,s,r,q,p,o,n,m,l,k,j=this
while(t=j.b,s=t+b,r=j.c,q=r.length,s>q)j.bJ(s-q)
p=t-a
if(a>=b)B.h.aI(r,t,s,r,p)
else for(o=r.$flags|0,n=p;t<s;t=m,n=l){m=t+1
l=n+1
if(!(n>=0&&n<q))return A.a(r,n)
k=r[n]
o&2&&A.b(r)
if(!(t>=0))return A.a(r,t)
r[t]=k}j.b+=b},
bJ(a){var t,s=this.c,r=s.length,q=r+(a==null?1:a),p=r===0?32768:r*2
if(p<q)p=q
t=new Uint8Array(p)
B.h.aO(t,0,r,s)
this.c=t},
eo(){return this.bJ(null)},
gj(a){return this.b}}
A.dU.prototype={}
A.eA.prototype={
ae(){return"Channel."+this.b}}
A.B.prototype={
t(){var t=this.b
return++this.a<t.gj(t)},
gD(){return this.b.i(0,this.a)},
$ip:1}
A.ao.prototype={
ae(){return"ChannelOrder."+this.b}}
A.de.prototype={
gG(){return B.I},
gj(a){return this.a.length},
i(a,b){var t=this.a,s=t.length
if(b<s){if(!(b>=0))return A.a(t,b)
t=t[b]
s=$.a6
s=s!=null?s:A.ay()
if(!(t<s.length))return A.a(s,t)
t=s[t]}else t=0
return t},
n(a,b,c){var t,s=this.a
if(b<s.length){t=A.E(c)
s.$flags&2&&A.b(s)
s[b]=t}},
gk(){var t=this.a,s=t.length
if(s!==0){if(0>=s)return A.a(t,0)
t=t[0]
s=$.a6
s=s!=null?s:A.ay()
if(!(t<s.length))return A.a(s,t)
t=s[t]}else t=0
return t},
gp(){var t,s=this.a
if(s.length>1){s=s[1]
t=$.a6
t=t!=null?t:A.ay()
if(!(s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
gm(){var t,s=this.a
if(s.length>2){s=s[2]
t=$.a6
t=t!=null?t:A.ay()
if(!(s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
W(a){var t=a.gk(),s=this.a,r=s.length
if(r!==0){t=A.E(t)
s.$flags&2&&A.b(s)
if(0>=r)return A.a(s,0)
s[0]=t}t=a.gp()
if(r>1){t=A.E(t)
s.$flags&2&&A.b(s)
s[1]=t}t=a.gm()
if(r>2){t=A.E(t)
s.$flags&2&&A.b(s)
s[2]=t}t=a.gq()
if(r>3){t=A.E(t)
s.$flags&2&&A.b(s)
s[3]=t}},
gu(a){return new A.B(this)},
M(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a.length){t=b.gF(b)
s=A.m(this,A.i(this).l("d.E"))
t=t===A.n(s)}return t},
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$io:1}
A.df.prototype={
gG(){return B.D},
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
W(a){var t=a.gk(),s=this.a,r=s.length
if(r!==0){s.$flags&2&&A.b(s)
if(0>=r)return A.a(s,0)
s[0]=t}t=a.gp()
if(r>1){s.$flags&2&&A.b(s)
s[1]=t}t=a.gm()
if(r>2){s.$flags&2&&A.b(s)
s[2]=t}t=a.gq()
if(r>3){s.$flags&2&&A.b(s)
s[3]=t}},
gu(a){return new A.B(this)},
M(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a.length){t=b.gF(b)
s=A.m(this,A.i(this).l("d.E"))
t=t===A.n(s)}return t},
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$io:1}
A.dg.prototype={
gG(){return B.E},
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
W(a){var t=a.gk(),s=this.a,r=s.length
if(r!==0){s.$flags&2&&A.b(s)
if(0>=r)return A.a(s,0)
s[0]=t}t=a.gp()
if(r>1){s.$flags&2&&A.b(s)
s[1]=t}t=a.gm()
if(r>2){s.$flags&2&&A.b(s)
s[2]=t}t=a.gq()
if(r>3){s.$flags&2&&A.b(s)
s[3]=t}},
gu(a){return new A.B(this)},
M(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a.length){t=b.gF(b)
s=A.m(this,A.i(this).l("d.E"))
t=t===A.n(s)}return t},
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$io:1}
A.dh.prototype={
gG(){return B.G},
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
W(a){var t=a.gk(),s=this.a,r=s.length
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
gu(a){return new A.B(this)},
M(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a.length){t=b.gF(b)
s=A.m(this,A.i(this).l("d.E"))
t=t===A.n(s)}return t},
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$io:1}
A.di.prototype={
gG(){return B.H},
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
W(a){var t=a.gk(),s=this.a,r=s.length
if(r!==0){A.q(t)
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
gu(a){return new A.B(this)},
M(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a.length){t=b.gF(b)
s=A.m(this,A.i(this).l("d.E"))
t=t===A.n(s)}return t},
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$io:1}
A.dj.prototype={
gG(){return B.F},
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
W(a){var t=a.gk(),s=this.a,r=s.length
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
gu(a){return new A.B(this)},
M(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a.length){t=b.gF(b)
s=A.m(this,A.i(this).l("d.E"))
t=t===A.n(s)}return t},
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$io:1}
A.dl.prototype={
gG(){return B.t},
bE(a){var t
if(a<this.a){t=this.b
t===$&&A.c()
t=B.b.aY(t,7-a)&1}else t=0
return t},
bl(a,b){var t
if(a>=this.a)return
a=7-a
t=this.b
t===$&&A.c()
this.b=b!==0?(t|B.b.a1(1,a))>>>0:(t&~(B.b.a1(1,a)&255))>>>0},
i(a,b){return this.bE(b)},
n(a,b,c){return this.bl(b,c)},
gk(){return this.bE(0)},
gp(){return this.bE(1)},
gm(){return this.bE(2)},
W(a){var t=this,s=a.gk(),r=a.gp(),q=a.gm(),p=a.gq()
t.bl(0,s)
t.bl(1,r)
t.bl(2,q)
t.bl(3,p)},
gu(a){return new A.B(this)},
M(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a){t=b.gF(b)
s=A.m(this,A.i(this).l("d.E"))
t=t===A.n(s)}return t},
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$io:1,
gj(a){return this.a}}
A.dm.prototype={
gG(){return B.q},
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
W(a){var t=a.gk(),s=this.a,r=s.length
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
gu(a){return new A.B(this)},
M(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a.length){t=b.gF(b)
s=A.m(this,A.i(this).l("d.E"))
t=t===A.n(s)}return t},
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$io:1}
A.dn.prototype={
gG(){return B.u},
bF(a){var t
if(a<this.a){t=this.b
t===$&&A.c()
t=B.b.aY(t,6-(a<<1>>>0))&3}else t=0
return t},
bm(a,b){var t,s,r
if(a>=this.a)return
if(!(a<4))return A.a(B.am,a)
t=B.am[a]
s=B.a.h(b)
r=this.b
r===$&&A.c()
this.b=(r&t|B.b.a1(s&3,6-(a<<1>>>0)))>>>0},
i(a,b){return this.bF(b)},
n(a,b,c){return this.bm(b,c)},
gk(){return this.bF(0)},
gp(){return this.bF(1)},
gm(){return this.bF(2)},
W(a){var t=this,s=a.gk(),r=a.gp(),q=a.gm(),p=a.gq()
t.bm(0,s)
t.bm(1,r)
t.bm(2,q)
t.bm(3,p)},
gu(a){return new A.B(this)},
M(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a){t=b.gF(b)
s=A.m(this,A.i(this).l("d.E"))
t=t===A.n(s)}return t},
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$io:1,
gj(a){return this.a}}
A.dp.prototype={
gG(){return B.x},
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
W(a){var t=a.gk(),s=this.a,r=s.length
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
gu(a){return new A.B(this)},
M(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a.length){t=b.gF(b)
s=A.m(this,A.i(this).l("d.E"))
t=t===A.n(s)}return t},
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$io:1}
A.dq.prototype={
gG(){return B.v},
bH(a){var t,s
if(a<0||a>=this.a)t=0
else{t=this.b
s=t.length
if(a<2){if(0>=s)return A.a(t,0)
t=B.b.aY(t[0],4-(a<<2>>>0))&15}else{if(1>=s)return A.a(t,1)
t=B.b.aY(t[1],4-((a&1)<<2))&15}}return t},
bq(a,b){var t,s,r,q
if(a>=this.a)return
t=B.b.C(B.a.h(b),0,15)
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
i(a,b){return this.bH(b)},
n(a,b,c){return this.bq(b,c)},
gk(){return this.bH(0)},
gp(){return this.bH(1)},
gm(){return this.bH(2)},
W(a){var t=this,s=a.gk(),r=a.gp(),q=a.gm(),p=a.gq()
t.bq(0,s)
t.bq(1,r)
t.bq(2,q)
t.bq(3,p)},
gu(a){return new A.B(this)},
M(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a){t=b.gF(b)
s=A.m(this,A.i(this).l("d.E"))
t=t===A.n(s)}return t},
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$io:1,
gj(a){return this.a}}
A.c4.prototype={
gG(){return B.l},
gj(a){return this.a.length},
i(a,b){var t=this.a,s=t.length
if(b<s){if(!(b>=0))return A.a(t,b)
t=t[b]}else t=0
return t},
n(a,b,c){var t,s=this.a
if(b<s.length){t=B.a.h(c)
s.$flags&2&&A.b(s)
s[b]=t}},
gO(){var t=this.a,s=t.length
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
W(a){var t=a.gk(),s=this.a,r=s.length
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
gu(a){return new A.B(this)},
M(a,b){var t,s
if(b==null)return!1
t=!1
if(u.G.b(b))if(b.gj(b)===this.a.length){t=b.gF(b)
s=A.m(this,A.i(this).l("d.E"))
t=t===A.n(s)}return t},
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$io:1}
A.dk.prototype={}
A.c3.prototype={}
A.S.prototype={
ae(){return"Format."+this.b}}
A.da.prototype={
ae(){return"BlendMode."+this.b}}
A.dv.prototype={
cp(a){var t=$.jm()
if(!t.a7(a))return"<unknown>"
return t.i(0,a).a},
B(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
for(t=this.a,s=new A.O(t,t.r,t.e,A.i(t).l("O<1>")),r=u.S,q=u.r,p=u.N,o=u.P,n="";s.t();){m=s.d
n+=m+"\n"
l=t.i(0,m)
for(m=l.a,m=new A.O(m,m.r,m.e,A.i(m).l("O<1>"));m.t();){k=m.d
l.i(0,k)
n+="\t"+this.cp(k)+"\n"}for(m=l.b.a,k=new A.O(m,m.r,m.e,A.i(m).l("O<1>"));k.t();){j=k.d
n+=j+"\n"
if(!m.a7(j))m.n(0,j,new A.b3(A.ae(r,q),new A.bF(A.ae(p,o))))
i=m.i(0,j)
for(j=i.a,j=new A.O(j,j.r,j.e,A.i(j).l("O<1>"));j.t();){h=j.d
i.i(0,h)
n+="\t"+this.cp(h)+"\n"}}}return n.charCodeAt(0)==0?n:n}}
A.dw.prototype={}
A.bF.prototype={
dQ(a){a.a.aC(0,new A.eV(this))}}
A.eV.prototype={
$2(a,b){var t
A.V(a)
t=A.i0(u.P.a(b))
this.a.a.n(0,a,t)
return t},
$S:0}
A.b3.prototype={
eO(a){a.a.aC(0,new A.eW(this))
a.b.a.aC(0,new A.eX(this))},
i(a,b){var t=this.a.i(0,b)
return t}}
A.eW.prototype={
$2(a,b){var t
A.q(a)
t=u.r.a(b).J()
this.a.a.n(0,a,t)
return t},
$S:7}
A.eX.prototype={
$2(a,b){var t
A.V(a)
t=A.i0(u.P.a(b))
this.a.b.a.n(0,a,t)
return t},
$S:0}
A.aP.prototype={
ae(){return"IfdValueType."+this.b}}
A.eL.prototype={}
A.eN.prototype={}
A.bR.prototype={
ae(){return"PngDisposeMode."+this.b}}
A.cF.prototype={
ae(){return"PngBlendMode."+this.b}}
A.cG.prototype={}
A.dF.prototype={}
A.aV.prototype={
ae(){return"PngFilterType."+this.b}}
A.fh.prototype={
sT(a){this.w=u.cc.a(a)},
sf8(a){this.x=u.u.a(a)}}
A.f1.prototype={}
A.ff.prototype={
dM(b8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7=A.f_(b8,!0,b6,0)
b5.d=b7
t=b7.by(8)
for(b7=t.a,s=t.d,r=b7.length,q=0;q<8;++q){p=s+q
if(!(p>=0&&p<r))return A.a(b7,p)
if(b7[p]!==B.aw[q])return b6}for(b7=b5.a,s=b7.cy,r=u.t,p=b7.db,o=u.L,n=b7.ax;;){m=b5.d
l=m.d-m.b
k=m.a_()
j=b5.d.bT(4)
switch(j){case"tEXt":m=b5.d
i=m.aP(k)
m.d=m.d+(i.c-i.d)
h=i.aF()
g=h.length
for(q=0;q<g;++q)if(h[q]===0){m=q+1
n.n(0,B.ae.bM(new Uint8Array(h.subarray(0,A.er(0,q,g)))),B.ae.bM(new Uint8Array(h.subarray(m,A.er(m,b6,g)))))
break}b5.d.d+=4
break
case"pHYs":m=b5.d
i=m.aP(k)
m.d=m.d+(i.c-i.d)
f=A.i3(i)
f.a_()
f.a_()
m=f.a
e=f.d++
if(!(e>=0&&e<m.length))return A.a(m,e)
b5.d.d+=4
break
case"IHDR":m=b5.d
i=m.aP(k)
m.d=m.d+(i.c-i.d)
d=A.i3(i)
c=d.aF()
b7.a=d.a_()
b7.b=d.a_()
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
switch(b){case 0:if(!B.c.aB(A.l([1,2,4,8,16],r),b7.c))return b6
break
case 2:if(!B.c.aB(A.l([8,16],r),b7.c))return b6
break
case 3:if(!B.c.aB(A.l([1,2,4,8],r),b7.c))return b6
break
case 4:if(!B.c.aB(A.l([8,16],r),b7.c))return b6
break
case 6:if(!B.c.aB(A.l([8,16],r),b7.c))return b6
break}if(b5.d.a_()!==A.au(o.a(c),A.au(new A.ap(j),0)))throw A.f(A.at("Invalid "+j+" checksum"))
break
case"PLTE":m=b5.d
i=m.aP(k)
m.d=m.d+(i.c-i.d)
b7.sT(i.aF())
if(b5.d.a_()!==A.au(o.a(o.a(b7.w)),A.au(new A.ap(j),0)))throw A.f(A.at("Invalid "+j+" checksum"))
break
case"tRNS":m=b5.d
i=m.aP(k)
m.d=m.d+(i.c-i.d)
b7.sf8(i.aF())
a1=b5.d.a_()
m=b7.x
m.toString
if(a1!==A.au(o.a(m),A.au(new A.ap(j),0)))throw A.f(A.at("Invalid "+j+" checksum"))
break
case"IEND":b5.d.d+=4
break
case"gAMA":if(k!==4)throw A.f(A.at("Invalid gAMA chunk"))
b5.d.a_()
b5.d.d+=4
break
case"IDAT":B.c.K(p,l)
m=b5.d
m.d=(m.d+=k)+4
break
case"acTL":b7.CW=b5.d.a_()
b5.d.a_()
b5.d.d+=4
break
case"fcTL":b5.d.a_()
a2=b5.d.a_()
a3=b5.d.a_()
a4=b5.d.a_()
a5=b5.d.a_()
a6=b5.d.bb()
a7=b5.d.bb()
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
if(!(a8>=0&&a8<3))return A.a(B.al,a8)
a=B.al[a8]
if(!(a9>=0&&a9<2))return A.a(B.as,a9)
e=B.as[a9]
B.c.K(s,new A.dF(A.l([],r),a2,a3,a4,a5,a6,a7,a,e))
b5.d.d+=4
break
case"fdAT":b5.d.a_()
B.c.K(B.c.gdn(s).y,l)
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
if(m!=null){m=B.h.aB(m,b0)?0:255
e=new Uint8Array(4)
e[0]=b2
e[1]=b3
e[2]=b4
e[3]=m
b7.z=new A.c3(e)}else{m=new Uint8Array(3)
m[0]=b2
m[1]=b3
m[2]=b4
b7.z=new A.dk(m)}}else if(m===0||m===4){b5.d.bb()
k-=2}else if(m===2||m===6){m=b5.d
m.bb()
m.bb()
m.bb()
k-=24}if(k>0)b5.d.d+=k
b5.d.d+=4
break
case"iCCP":m=b5.d.f5()
b7.Q=m
e=b5.d
b=e.a
a=e.d
a0=a+1
e.d=a0
if(!(a>=0&&a<b.length))return A.a(b,a)
i=e.aP(k-(m.length+2))
e.d=a0+(i.c-i.d)
b7.at=i.aF()
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
df(c3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7=null,b8=b5.a,b9=b8.a,c0=b8.b,c1=b8.cy,c2=c1.length
if(c2===0||c3===0){s=A.l([],u.k)
c1=b8.db
r=c1.length
for(c2=u.L,q=0,p=0;p<r;++p){o=b5.d
o===$&&A.c()
if(!(p<c1.length))return A.a(c1,p)
o.d=c1[p]
n=o.a_()
m=b5.d.bT(4)
o=b5.d
l=o.aP(n)
o.d=o.d+(l.c-l.d)
k=l.aF()
q+=k.length
B.c.K(s,k)
if(b5.d.a_()!==A.au(c2.a(k),A.au(new A.ap(m),0)))throw A.f(A.at("Invalid "+m+" checksum"))}b7=new Uint8Array(q)
for(c1=s.length,j=0,i=0;i<s.length;s.length===c1||(0,A.F)(s),++i){k=s[i]
J.hN(b7,j,k)
j+=k.length}}else{if(c3>=c2)throw A.f(A.at("Invalid Frame Number: "+c3))
if(!(c3<c2))return A.a(c1,c3)
h=c1[c3]
b9=h.b
c0=h.c
s=A.l([],u.k)
for(c1=h.y,q=0,p=0;p<c1.length;++p){c2=b5.d
c2===$&&A.c()
c2.d=c1[p]
n=c2.a_()
c2=b5.d
c2.bT(4)
c2.d+=4
c2=b5.d
l=c2.aP(n-4)
c2.d=c2.d+(l.c-l.d)
k=l.aF()
q+=k.length
B.c.K(s,k)}b7=new Uint8Array(q)
for(c1=s.length,j=0,i=0;i<s.length;s.length===c1||(0,A.F)(s),++i){k=s[i]
J.hN(b7,j,k)
j+=k.length}}c1=b8.d
g=1
if(!(c1===3))if(!(c1===0)){if(c1===4)c1=2
else c1=c1===6?4:3
g=c1}t=null
try{c1=u.L.a(b7)
f=A.ic(B.N,32768)
B.b4.eQ(A.f0(c1,B.B,b6,b6),f,!1,!1)
t=f.cn()}catch(e){return b6}d=A.f_(t,!0,b6,0)
b5.c=b5.b=0
c=b6
if(b8.d===3){c1=b8.w
if(c1!=null){c2=c1.length
b=c2/3|0
a=b8.x
o=a!=null
a0=o?a.length:0
a1=o?4:3
c=new A.ba(new Uint8Array(b*a1),b,a1)
for(o=a1===4,p=0,a2=0;p<b;++p,a2+=3){if(o&&p<a0){if(!(p<a.length))return A.a(a,p)
a3=a[p]}else a3=255
if(!(a2<c2))return A.a(c1,a2)
a4=c1[a2]
a5=a2+1
if(!(a5<c2))return A.a(c1,a5)
a5=c1[a5]
a6=a2+2
if(!(a6<c2))return A.a(c1,a6)
c.cs(p,a4,a5,c1[a6],a3)}}}if(b8.d===0&&b8.x!=null&&c==null&&b8.c<=8){a=b8.x
a7=a.length
c1=b8.c
b=B.b.a1(1,c1)
c2=b*4
o=new Uint8Array(c2)
c=new A.ba(o,b,4)
if(c1===1)a8=255
else if(c1===2)a8=85
else{c1=c1===4?17:1
a8=c1}for(p=0;p<b;++p){a9=p*a8
c.cs(p,a9,a9,a9,255)}for(p=0;p<a7;p+=2){c1=a[p]
a4=p+1
if(!(a4<a7))return A.a(a,a4)
b0=(c1&255)<<8|a[a4]&255
if(b0<b){c1=b0*4+3
if(!(c1<c2))return A.a(o,c1)
o[c1]=0}}}c1=b8.c
if(c1===1)b1=B.t
else if(c1===2)b1=B.u
else{if(c1===4)c2=B.v
else c2=c1===16?B.q:B.l
b1=c2}c2=b8.d
if(c2===0&&b8.x!=null&&c1>8)g=4
b2=A.h1(b6,b6,b1,0,B.S,c0,b6,0,c2===2&&b8.x!=null?4:g,c,b9,!1)
b3=b8.a
b4=b8.b
b8.a=b9
b8.b=c0
b5.e=0
if(b8.r!==0){c1=c0+7>>>3
b5.b8(d,b2,0,0,8,8,b9+7>>>3,c1)
c2=b9+3
b5.b8(d,b2,4,0,8,8,c2>>>3,c1)
c1=c0+3
b5.b8(d,b2,0,4,4,8,c2>>>2,c1>>>3)
c2=b9+1
b5.b8(d,b2,2,0,4,4,c2>>>2,c1>>>2)
c1=c0+1
b5.b8(d,b2,0,2,2,4,c2>>>1,c1>>>2)
b5.b8(d,b2,1,0,2,2,b9>>>1,c1>>>1)
b5.b8(d,b2,0,1,1,2,b9,c0>>>1)}else b5.eu(d,b2)
b8.a=b3
b8.b=b4
c1=b8.at
if(c1!=null)b2.c=new A.cd(b8.Q,B.a2,c1)
b8=b8.ax
if(b8.a!==0)b2.eF(b8)
return b2},
bM(a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null
if(b.dM(a0)==null)return a
t=b.a
s=t.cy
r=s.length
if(r===0){t=b.df(0)
t.toString
return t}for(r=u.g,q=a,p=q,o=0;o<t.CW;++o){if(!(o<s.length))return A.a(s,o)
n=s[o]
m=b.df(o)
if(m==null)continue
if(p==null||q==null){p=m.de(m.gam())
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
j=j===(i==null?0:i)&&n.d===0&&n.e===0&&n.x===B.aE}else j=!1
if(j){l=n.f
m.y=B.a.h((l===0||n.r===0?0:l/n.r)*1000)
p.b1(m)
q=m
continue}d=p.x
if(d===$)d=p.x=A.l([],r)
if(!(l<d.length))return A.a(d,l)
q=A.h2(d[l],!1,!1)
c=k.w
if(c===B.aG){l=k.d
j=k.e
i=t.z
if(i==null){i=new Uint8Array(4)
h=new A.c3(i)
i[0]=0
i[1]=0
i[2]=0
i[3]=0
i=h}A.lt(q,!1,i,l,l+k.b-1,j,j+k.c-1)}else if(c===B.aH&&o>1){l=o-2
d=p.x
if(d===$)d=p.x=A.l([],r)
if(!(l>=0&&l<d.length))return A.a(d,l)
j=k.d
i=k.e
h=k.b
g=k.c
q=A.iR(q,d[l],B.aa,g,h,j,i,g,h,j,i)}l=n.f
q.y=B.a.h((l===0||n.r===0?0:l/n.r)*1000)
l=n.x===B.aF?B.aa:B.Z
q=A.iR(q,m,l,a,a,n.d,n.e,a,a,a,a)
p.b1(q)}return p},
b8(a4,a5,a6,a7,a8,a9,b0,b1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a,a3=a2.d
if(a3===4)t=2
else if(a3===2)t=3
else{a3=a3===6?4:1
t=a3}s=t*a2.c
r=B.b.H(s+7,3)
q=B.b.H(s*b0+7,3)
p=A.l([null,null],u.e)
o=A.l([0,0,0,0],u.t)
for(a2=a8>1,n=a8-a6,a3=a4.a,m=a7,l=0,k=0;l<b1;++l,m+=a9,++a1.e){j=a4.d
i=j+1
a4.d=i
if(!(j>=0&&j<a3.length))return A.a(a3,j)
j=a3[j]
if(!(j>=0&&j<5))return A.a(B.W,j)
h=B.W[j]
g=a4.aP(q)
a4.d=i+(g.c-g.d)
B.c.n(p,k,g.aF())
if(!(k>=0&&k<2))return A.a(p,k)
f=p[k]
k=1-k
e=p[k]
f.toString
a1.cX(h,r,f,e)
a1.c=a1.b=0
i=f.length
d=new A.bL(f,0,Math.min(i,i),0,!0)
for(j=n<=1,c=a6,b=0;b<b0;++b,c+=a8){a1.cQ(d,o)
i=a5.a
i=i==null?null:i.a0(c,m,null)
a1.cd(i==null?new A.a3():i,o)
if(!j||a2)for(a=0;a<a8;++a)for(i=m+a,a0=0;a0<n;++a0)a1.cd(a5.dF(c+a0,i),o)}}},
eu(a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.a,a0=a.d
if(a0===4)t=2
else if(a0===2)t=3
else{a0=a0===6?4:1
t=a0}s=t*a.c
r=a.a
q=a.b
p=B.b.H(r*s+7,3)
o=B.b.H(s+7,3)
n=A.dN(p,0,!1,u.S)
m=A.l([n,n],u.B)
l=A.l([0,0,0,0],u.t)
a=a2.a
k=a.gu(a)
k.t()
for(a=a1.a,j=0,i=0;j<q;++j,i=e){a0=a1.d
h=a0+1
a1.d=h
if(!(a0>=0&&a0<a.length))return A.a(a,a0)
a0=a[a0]
if(!(a0>=0&&a0<5))return A.a(B.W,a0)
g=B.W[a0]
f=a1.aP(p)
a1.d=h+(f.c-f.d)
B.c.n(m,i,f.aF())
if(!(i>=0&&i<2))return A.a(m,i)
e=1-i
b.cX(g,o,m[i],m[e])
b.c=b.b=0
h=m[i]
a0=h.length
d=new A.bL(h,0,Math.min(a0,a0),0,!0)
for(c=0;c<r;++c){b.cQ(d,l)
b.cd(k.gD(),l)
k.t()}}},
cX(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u.L.a(c)
u.u.a(d)
t=c.length
switch(a.a){case 0:break
case 1:for(s=J.aI(c),r=b;r<t;++r){q=c.length
if(!(r<q))return A.a(c,r)
p=c[r]
o=r-b
if(!(o>=0&&o<q))return A.a(c,o)
s.n(c,r,p+c[o]&255)}break
case 2:for(s=J.aI(c),q=d!=null,r=0;r<t;++r){if(q){if(!(r<d.length))return A.a(d,r)
n=d[r]}else n=0
if(!(r<c.length))return A.a(c,r)
s.n(c,r,c[r]+n&255)}break
case 3:for(s=J.aI(c),q=d!=null,r=0;r<t;++r){if(r<b)m=0
else{p=r-b
if(!(p>=0&&p<c.length))return A.a(c,p)
m=c[p]}if(q){if(!(r<d.length))return A.a(d,r)
n=d[r]}else n=0
if(!(r<c.length))return A.a(c,r)
s.n(c,r,c[r]+B.b.H(m+n,1)&255)}break
case 4:for(s=J.aI(c),q=d==null,p=!q,r=0;r<t;++r){o=r<b
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
aJ(a,b){var t,s,r,q,p,o=this
if(b===0)return 0
if(b===8)return a.bj()
if(b===16)return a.bb()
for(t=a.a,s=a.c;r=o.c,r<b;){q=a.d
if(q>=s)throw A.f(A.at("Invalid PNG data."))
a.d=q+1
if(!(q>=0&&q<t.length))return A.a(t,q)
o.b=B.b.a1(t[q],r)
o.c=r+8}if(b===1)p=1
else if(b===2)p=3
else{if(b===4)t=15
else t=0
p=t}t=r-b
s=B.b.aY(o.b,t)
o.c=t
return s&p},
cQ(a,b){var t,s,r=this
u.L.a(b)
t=r.a
s=t.d
switch(s){case 0:B.c.n(b,0,r.aJ(a,t.c))
return
case 2:B.c.n(b,0,r.aJ(a,t.c))
B.c.n(b,1,r.aJ(a,t.c))
B.c.n(b,2,r.aJ(a,t.c))
return
case 3:B.c.n(b,0,r.aJ(a,t.c))
return
case 4:B.c.n(b,0,r.aJ(a,t.c))
B.c.n(b,1,r.aJ(a,t.c))
return
case 6:B.c.n(b,0,r.aJ(a,t.c))
B.c.n(b,1,r.aJ(a,t.c))
B.c.n(b,2,r.aJ(a,t.c))
B.c.n(b,3,r.aJ(a,t.c))
return}throw A.f(A.at("Invalid color type: "+s+"."))},
cd(a,b){var t,s,r,q,p,o,n,m,l,k
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
a.aa(q,q,q,q!==((r&255)<<24|s&255)>>>0?a.gv():0)
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
if(p!==((r&255)<<8|n&255)||q!==((m&255)<<8|l&255)||o!==((k&255)<<8|t&255)){a.aa(p,q,o,a.gv())
return}}a.a9(p,q,o)
return
case 3:a.sO(b[0])
return
case 4:a.a9(b[0],b[1],0)
return
case 6:a.aa(b[0],b[1],b[2],b[3])
return}throw A.f(A.at("Invalid color type: "+s+"."))}}
A.e_.prototype={
ae(){return"PngFilter."+this.b}}
A.fg.prototype={
b1(a){var t,s,r,q,p,o,n,m,l=this,k=8192,j=a.a
j=j==null?null:j.gaD()
if(!(j===!0&&a.gG()!==B.q))j=a.gad()<8&&!a.gaL()&&a.gam()>1
else j=!0
if(j)a=a.eL(B.l)
if(l.w==null){j=A.b9(!0,k)
l.w=j
j.aN(A.l([137,80,78,71,13,10,26,10],u.t))
t=A.b9(!0,k)
t.aG(a.gac())
t.aG(a.ga8())
t.P(a.gad())
if(a.gaL())j=3
else if(a.gam()===1)j=0
else if(a.gam()===2)j=4
else j=a.gam()===3?2:6
t.P(j)
t.P(0)
t.P(0)
t.P(0)
j=l.w
j.toString
l.aK(j,"IHDR",J.M(B.h.gE(t.c),0,t.a))
j=a.c
if(j!=null){t=A.b9(!0,k)
t.aN(new A.ap(j.a))
t.P(0)
t.P(0)
t.aN(j.eK())
j=l.w
j.toString
l.aK(j,"iCCP",J.M(B.h.gE(t.c),0,t.a))}if(a.gaL()){j=l.a
if(j!=null){j=j.a
j===$&&A.c()
l.d0(j)}else{j=a.a
j=j==null?null:j.gT()
j.toString
l.d0(j)}}if(l.r){t=A.b9(!0,k)
j=l.e
j===$&&A.c()
t.aG(j)
t.aG(l.c)
j=l.w
j.toString
l.aK(j,"acTL",J.M(B.h.gE(t.c),0,t.a))}}s=a.gaL()?1:a.gam()
r=a.gG()===B.q?2:1
j=a.gac()
q=a.ga8()
p=a.ga8()
o=new Uint8Array(j*q*s*r+p)
l.e9(0,a,o)
n=B.ag.dh(u.L.a(o),l.d)
j=a.d
if(j!=null)for(j=new A.O(j,j.r,j.e,A.i(j).l("O<1>"));j.t();){q=j.d
p=a.d.i(0,q)
p.toString
t=new A.dT(!0,new Uint8Array(8192))
t.aN(B.af.aZ(q))
t.P(0)
t.aN(B.af.aZ(p))
q=l.w
q.toString
l.aK(q,"tEXt",J.M(B.h.gE(t.c),0,t.a))}if(l.r){t=A.b9(!0,k)
t.aG(l.f)
t.aG(a.gac())
t.aG(a.ga8())
t.aG(0)
t.aG(0)
t.dC(a.y)
t.dC(1000)
t.P(1)
t.P(0)
j=l.w
j.toString
l.aK(j,"fcTL",J.M(B.h.gE(t.c),0,t.a));++l.f}if(l.f<=1){j=l.w
j.toString
l.aK(j,"IDAT",n)}else{m=A.b9(!0,k)
m.aG(l.f)
m.aN(n)
j=l.w
j.toString
l.aK(j,"fdAT",J.M(B.h.gE(m.c),0,m.a));++l.f}},
eW(){var t,s=this,r=s.w
if(r==null)return null
s.aK(r,"IEND",A.l([],u.t))
s.f=0
r=s.w
t=J.M(B.h.gE(r.c),0,r.a)
s.w=null
return t},
eS(a,b){var t,s,r,q,p,o=this,n=a.gaf().length
if(n<=1){o.e=1
o.r=!1
o.b1(a)}else{n=a.gaf().length
o.e=n
o.r=n>1
o.c=a.r
if(a.gaL()){t=new A.dR(new Int32Array(256))
t.en(256)
t.eE(a)
o.a=t
for(n=a.gaf(),s=n.length,r=0;r<n.length;n.length===s||(0,A.F)(n),++r){q=n[r]
if(q!==a){t.cO(q)
t.cI()
t.cM()
t.cE()}}}for(n=a.gaf(),s=n.length,r=0;r<n.length;n.length===s||(0,A.F)(n),++r){q=n[r]
p=o.a
if(p!=null)o.b1(p.dE(q))
else o.b1(q)}}n=o.eW()
n.toString
return n},
d0(a){var t,s,r,q=this
if(a.gG()===B.l&&a.b===3&&a.a===256){t=q.w
t.toString
q.aK(t,"PLTE",J.M(a.gE(a),0,null))}else{t=a.a
s=A.b9(!0,t*3)
for(r=0;r<t;++r){s.P(B.a.h(a.bC(r)))
s.P(B.a.h(a.bB(r)))
s.P(B.a.h(a.bA(r)))}t=q.w
t.toString
q.aK(t,"PLTE",J.M(B.h.gE(s.c),0,s.a))}if(a.b===4){t=a.a
s=A.b9(!0,t)
for(r=0;r<t;++r)s.P(B.a.h(a.bz(r)))
t=q.w
t.toString
q.aK(t,"tRNS",J.M(B.h.gE(s.c),0,s.a))}},
aK(a,b,c){u.L.a(c)
a.aG(c.length)
a.aN(new A.ap(b))
a.aN(c)
a.aG(A.au(c,A.au(new A.ap(b),0)))},
e9(a,b,c){var t,s,r=this,q=b.gaL()?B.cH:r.b,p=b.gE(0),o=b.a.gan(),n=b.gaL()?1:b.gam(),m=n*b.gad()+7>>>3,l=b.gad()+7>>>3,k=q.a,j=J.c1(p),i=0,h=0,g=null,f=0
for(;;){t=b.a
t=t==null?null:t.b
if(!(f<(t==null?0:t)))break
s=j.bt(p,h,o)
h+=o
switch(k){case 1:i=r.ed(s,l,m,c,i)
break
case 2:i=r.ee(s,g,l,c,i)
break
case 3:i=r.ea(s,g,l,m,c,i)
break
case 4:i=r.ec(s,g,l,m,c,i)
break
default:i=r.eb(s,l,c,i)
break}++f
g=s}},
d_(a,b,c,d,e){var t,s,r,q;--a
for(t=b.length,s=d.$flags|0;a>=0;e=r){r=e+1
q=c+a
if(!(q<t))return A.a(b,q)
q=b[q]
s&2&&A.b(d)
if(!(e<d.length))return A.a(d,e)
d[e]=q;--a}return e},
eb(a,b,c,d){var t,s,r,q,p=d+1
c.$flags&2&&A.b(c)
t=c.length
if(!(d<t))return A.a(c,d)
c[d]=0
s=a.length
if(b===1)for(d=p,r=0;r<s;++r,d=p){p=d+1
q=a[r]
if(!(d<t))return A.a(c,d)
c[d]=q}else for(d=p,r=0;r<s;r+=b)d=this.d_(b,a,r,c,d)
return d},
ed(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k=e+1
d.$flags&2&&A.b(d)
t=d.length
if(!(e<t))return A.a(d,e)
d[e]=1
for(e=k,s=0;s<c;s+=b)e=this.d_(b,a,s,d,e)
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
ee(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j=e+1
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
ea(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=f+1
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
ep(a,b,c){var t=a+b-c,s=t>a?t-a:a-t,r=t>b?t-b:b-t,q=t>c?t-c:c-t
if(s<=r&&s<=q)return a
else if(r<=q)return b
return c},
ec(a,b,c,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2+1
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
e=this.ep(j,h,g)
d=a2+1
q&2&&A.b(a1)
if(!(a2>=0&&a2<t))return A.a(a1,a2)
a1[a2]=f-e&255}return a2}}
A.eU.prototype={
ae(){return"IccProfileCompression."+this.b}}
A.cd.prototype={
eK(){var t,s=this
if(s.b===B.a2)return s.c
t=B.ag.dh(u.L.a(s.c),null)
s.c=t
s.b=B.a2
return t}}
A.eS.prototype={
ae(){return"FrameType."+this.b}}
A.b4.prototype={
gaf(){var t=this.x
return t===$?this.x=A.l([],u.g):t},
dR(a,b,c){var t,s,r,q,p=this,o=a.b
if(o!=null)p.b=A.hb(o,u.N,u.I)
o=a.d
if(o!=null){t=u.N
p.d=A.hb(o,t,t)}B.c.K(p.gaf(),p)
if(!b&&a.gaf().length>1){s=a.gaf().length
for(o=u.g,r=1;r<s;++r){q=a.x
if(q===$)q=a.x=A.l([],o)
if(!(r<q.length))return A.a(q,r)
p.b1(A.h2(q[r],!1,!1))}}},
dS(a,b,c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
B.c.K(d.gaf(),d)
if(a8>4)throw A.f(A.at("An Image can only have 1-4 channels."))
if(a8===1)a9=B.b6
else if(a8===2)a9=B.b5
else if(a8===3){if(a9!==B.ah&&a9!==B.a1)a9=B.ah}else if(a8===4)if(a9!==B.P&&a9!==B.O&&a9!==B.a0&&a9!==B.Q)a9=B.O
d.cL(b4,a5,a0,a1,a6,a8,b0,b1,!1)
t=d.a
if(t==null)return
s=J.bA(t.gE(t))
r=J.M(b,c,null)
if(a1===B.t)b2=B.a.a6(b4*a8/8)
else if(a1===B.u){t=B.a.a6(b4*a8/4)
b2=t}else{t=b4*a8
if(a1===B.v)t=B.a.a6(t/2)
else{q=B.cq.i(0,a1)
q.toString
q=t*q
t=q}b2=t}p=d.a.gan()
o=Math.min(b2,p)
for(n=0,m=0,l=0;l<a5;++l,m+=b2,n+=p){k=r.BYTES_PER_ELEMENT
j=A.bn(m,m+o,B.b.bf(r.byteLength,k))
B.h.aO(s,n,n+o,J.M(B.h.gE(r),r.byteOffset+m*k,(j-m)*k))}if(a8===3&&a9===B.a1)for(t=d.a,t=t.gu(t);t.t();){i=t.gD()
h=i.gk()
i.sk(i.gm())
i.sm(h)}else{t=a8===4
if(t&&a9===B.a0)for(t=d.a,t=t.gu(t);t.t();){i=t.gD()
h=i.gk()
g=i.gp()
f=i.gm()
i.sk(i.gq())
i.sp(f)
i.sm(g)
i.sq(h)}else if(t&&a9===B.Q)for(t=d.a,t=t.gu(t);t.t();){i=t.gD()
h=i.gk()
g=i.gp()
f=i.gm()
i.sk(i.gq())
i.sp(h)
i.sm(g)
i.sq(f)}else if(t&&a9===B.P)for(t=d.a,t=t.gu(t);t.t();){i=t.gD()
h=i.gk()
g=i.gp()
f=i.gm()
e=i.gq()
i.sk(f)
i.sp(g)
i.sm(h)
i.sq(e)}}},
b1(a){var t=this
a.z=t.gaf().length
if(t.gaf().length===0||B.c.gdn(t.gaf())!==a)B.c.K(t.gaf(),a)
return a},
cL(a,b,c,d,e,f,g,h,i){this.c=e
if(c!=null)this.e=A.fY(c)
this.e_(a,b,d,f,g)},
e_(a,b,c,d,e){var t,s,r=this,q=null
switch(c.a){case 0:if(e==null){t=B.a.a6(a*d/8)
s=new A.bG($,t,q,a,b,d)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}else{t=B.a.a6(a/8)
s=new A.bG($,t,e,a,b,1)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}break
case 1:if(e==null){t=B.a.a6(a*(d<<1>>>0)/8)
s=new A.bI($,t,q,a,b,d)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}else{t=B.a.a6(a/4)
s=new A.bI($,t,e,a,b,1)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}break
case 2:if(e==null){if(d===2)t=a
else if(d===4)t=a*2
else t=d===3?B.a.a6(a*1.5):B.a.a6(a/2)
s=new A.bJ($,t,q,a,b,d)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}else{t=B.a.a6(a/2)
s=new A.bJ($,t,e,a,b,1)
t=Math.max(t*b,1)
s.d=new Uint8Array(t)
r.a=s}break
case 3:if(e==null)r.a=A.i2(a,b,d)
else r.a=new A.bK(new Uint8Array(a*b),e,a,b,1)
break
case 4:t=a*b
if(e==null)r.a=new A.bH(new Uint16Array(t*d),q,a,b,d)
else r.a=new A.bH(new Uint16Array(t),e,a,b,1)
break
case 5:r.a=new A.ck(new Uint32Array(a*b*d),a,b,d)
break
case 6:r.a=new A.cj(new Int8Array(a*b*d),a,b,d)
break
case 7:r.a=new A.ch(new Int16Array(a*b*d),a,b,d)
break
case 8:r.a=new A.ci(new Int32Array(a*b*d),a,b,d)
break
case 9:r.a=new A.ce(new Uint16Array(a*b*d),a,b,d)
break
case 10:r.a=new A.cf(new Float32Array(a*b*d),a,b,d)
break
case 11:r.a=new A.cg(new Float64Array(a*b*4*d),a,b,d)
break}},
B(a){var t=this
return"Image("+t.gac()+", "+t.ga8()+", "+t.gG().b+", "+t.gam()+")"},
gac(){var t=this.a
t=t==null?null:t.a
return t==null?0:t},
ga8(){var t=this.a
t=t==null?null:t.b
return t==null?0:t},
gG(){var t=this.a
t=t==null?null:t.gG()
return t==null?B.l:t},
gu(a){var t=this.a
return t.gu(t)},
gE(a){var t=this.a
t=t==null?null:t.gE(t)
if(t==null)t=B.h.gE(new Uint8Array(0))
return t},
gam(){var t=this.a
t=t==null?null:t.gT()
t=t==null?null:t.b
if(t==null){t=this.a
t=t==null?null:t.c}return t==null?0:t},
gaL(){var t=this.a
return(t==null?null:t.gT())!=null},
gad(){var t=this.a
t=t==null?null:t.gad()
return t==null?0:t},
dm(a,b){return a>=0&&b>=0&&a<this.gac()&&b<this.ga8()},
a0(a,b,c){var t=this.a
t=t==null?null:t.a0(a,b,c)
return t==null?new A.a3():t},
co(a,b){return this.a0(a,b,null)},
dF(a,b){var t=!0
if(a<this.gac())t=b>=this.ga8()
if(t)return new A.a3()
return this.a0(a,b,null)},
dJ(a,b,c){var t
if(c.gak().gT()!=null)if(this.gaL()){t=this.a
if(t!=null)t.aq(a,b,c.gO(),0,0)
return}t=this.a
if(t!=null)t.ar(a,b,c.gk(),c.gp(),c.gm(),c.gq())},
bL(a8,a9,b0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=null
if(a9==null)a9=a6.gG()
if(b0==null)b0=a6.gam()
a8=B.aB.i(0,a9)
t=!1
if(a9===a6.gG())if(b0===a6.gam()){s=a6.a
t=(s==null?a7:s.gT())==null}if(t){r=A.h2(a6,!1,!1)
return r}for(t=a6.gaf(),s=t.length,q=u.N,p=u.S,o=a7,n=0;n<t.length;t.length===s||(0,A.F)(t),++n,o=f){m=t[n]
l=m.a
k=l==null
j=k?a7:l.a
if(j==null)j=0
l=k?a7:l.b
if(l==null)l=0
k=m.e
k=k==null?a7:A.fY(k)
i=m.c
if(i==null)i=a7
else{h=i.a
g=i.b
i=i.c
i=new A.cd(h,g,new Uint8Array(i.subarray(0,A.er(0,a7,i.length))))}h=m.w
r=A.h1(a7,k,a9,m.y,h,l,i,m.r,b0,a7,j,!1)
l=m.d
r.sf6(l!=null?A.hb(l,q,q):a7)
if(o!=null){o.b1(r)
f=o}else f=r
l=r.a
e=l==null?a7:l.gT()
l=r.a
l=l==null?a7:l.gT()
d=l==null?a7:l.gG()
if(d==null)d=a9
l=m.a
if(e!=null){c=A.ae(p,p)
b=l==null?a7:l.a0(0,0,a7)
if(b==null)b=new A.a3()
for(l=r.a,l=l.gu(l),a=a7,a0=0;l.t();){a1=l.gD()
a2=B.a.Y(b.gU()*255)
a3=B.a.Y(b.gR()*255)
a4=B.a.Y(b.gS()*255)
a5=(B.b.C(a2,0,255)|B.b.C(a3,0,255)<<8|B.b.C(a4,0,255)<<16|B.b.C(0,0,255)<<24)>>>0
if(c.a7(a5)){k=c.i(0,a5)
k.toString
a1.sO(k)}else{c.n(0,a5,a0)
a1.sO(a0)
a=A.iS(b,a8,d,b0,a)
e.bV(a0,a.gk(),a.gp(),a.gm());++a0}b.t()}}else{b=l==null?a7:l.a0(0,0,a7)
if(b==null)b=new A.a3()
for(l=r.a,l=l.gu(l);l.t();){A.iS(b,a8,a7,a7,l.gD())
b.t()}}}o.toString
return o},
eN(a,b){return this.bL(null,a,b)},
eM(a,b){return this.bL(a,null,b)},
eL(a){return this.bL(null,a,null)},
de(a){return this.bL(null,null,a)},
eF(a){var t,s,r,q
u.aN.a(a)
if(this.d==null){t=u.N
this.d=A.ae(t,t)}for(t=new A.O(a,a.r,a.e,A.i(a).l("O<1>"));t.t();){s=t.d
r=this.d
r.toString
q=a.i(0,s)
q.toString
r.n(0,s,q)}},
sf6(a){this.d=u.a1.a(a)}}
A.N.prototype={
gT(){return null},
dD(a,b){var t,s,r,q,p,o,n,m=this
if(b==null)return J.bA(m.gE(m))
t=m.c
if(t===4){t=b===B.a0
if(t||b===B.Q||b===B.P){s=a?m:m.J()
if(t)for(t=s.gu(s);t.t();){r=t.gD()
q=r.gk()
p=r.gp()
o=r.gm()
r.sk(r.gq())
r.sp(o)
r.sm(p)
r.sq(q)}else if(b===B.Q)for(t=s.gu(s);t.t();){r=t.gD()
q=r.gk()
p=r.gp()
o=r.gm()
r.sk(r.gq())
r.sp(q)
r.sm(p)
r.sq(o)}else if(b===B.P)for(t=s.gu(s);t.t();){r=t.gD()
q=r.gk()
p=r.gp()
o=r.gm()
n=r.gq()
r.sk(o)
r.sp(p)
r.sm(q)
r.sq(n)}return J.bA(s.gE(s))}}else if(t===3)if(b===B.a1){s=a?m:m.J()
for(t=s.gu(s);t.t();){r=t.gD()
q=r.gk()
r.sk(r.gm())
r.sm(q)}return J.bA(s.gE(s))}return J.bA(m.gE(m))}}
A.ce.prototype={
Z(a){var t=this,s=t.d
if(a)s=new Uint16Array(s.length)
else s=new Uint16Array(A.G(s))
return new A.ce(s,t.a,t.b,t.c)},
J(){return this.Z(!1)},
gG(){return B.I},
gE(a){return B.z.gE(this.d)},
gad(){return 16},
gan(){return this.a*this.c*2},
gu(a){return A.he(this)},
ap(a,b,c,d,e){return A.af(A.he(this),b,c,d,e)},
gj(a){return this.d.byteLength},
gaD(){return!0},
a0(a,b,c){if(c==null||!(c instanceof A.bb)||c.d!==this)c=A.he(this)
c.N(a,b)
return c},
aq(a,b,c,d,e){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=A.E(c)
p.$flags&2&&A.b(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=A.E(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){r=q+2
o=A.E(e)
if(!(r<t))return A.a(p,r)
p[r]=o}}},
ar(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=A.E(c)
p.$flags&2&&A.b(p)
t=p.length
if(!(q>=0&&q<t))return A.a(p,q)
p[q]=o
if(r>1){o=q+1
s=A.E(d)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>2){o=q+2
s=A.E(e)
if(!(o<t))return A.a(p,o)
p[o]=s
if(r>3){r=q+3
o=A.E(f)
if(!(r<t))return A.a(p,r)
p[r]=o}}}},
B(a){return"ImageDataFloat16("+this.a+", "+this.b+", "+this.c+")"}}
A.cf.prototype={
Z(a){var t=this,s=t.d
if(a)s=new Float32Array(s.length)
else s=new Float32Array(A.G(s))
return new A.cf(s,t.a,t.b,t.c)},
J(){return this.Z(!1)},
gG(){return B.D},
gE(a){return B.L.gE(this.d)},
gad(){return 32},
gu(a){return A.hf(this)},
ap(a,b,c,d,e){return A.af(A.hf(this),b,c,d,e)},
gj(a){return this.d.byteLength},
gan(){return this.a*this.c*4},
gaD(){return!0},
a0(a,b,c){if(c==null||!(c instanceof A.bc)||c.d!==this)c=A.hf(this)
c.N(a,b)
return c},
aq(a,b,c,d,e){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d
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
ar(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d
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
B(a){return"ImageDataFloat32("+this.a+", "+this.b+", "+this.c+")"}}
A.cg.prototype={
Z(a){var t=this,s=t.d
if(a)s=new Float64Array(s.length)
else s=new Float64Array(A.G(s))
return new A.cg(s,t.a,t.b,t.c)},
J(){return this.Z(!1)},
gG(){return B.E},
gE(a){return B.cr.gE(this.d)},
gj(a){return this.d.byteLength},
gad(){return 64},
gu(a){return A.hg(this)},
ap(a,b,c,d,e){return A.af(A.hg(this),b,c,d,e)},
gan(){return this.a*this.c*8},
gaD(){return!0},
a0(a,b,c){if(c==null||!(c instanceof A.bd)||c.d!==this)c=A.hg(this)
c.N(a,b)
return c},
aq(a,b,c,d,e){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d
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
ar(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d
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
B(a){return"ImageDataFloat64("+this.a+", "+this.b+", "+this.c+")"}}
A.ch.prototype={
Z(a){var t=this,s=t.d
if(a)s=new Int16Array(s.length)
else s=new Int16Array(A.G(s))
return new A.ch(s,t.a,t.b,t.c)},
J(){return this.Z(!1)},
gG(){return B.G},
gE(a){return B.cs.gE(this.d)},
gu(a){return A.hh(this)},
ap(a,b,c,d,e){return A.af(A.hh(this),b,c,d,e)},
gj(a){return this.d.byteLength},
gaD(){return!0},
gad(){return 16},
gan(){return this.a*this.c*2},
a0(a,b,c){if(c==null||!(c instanceof A.be)||c.d!==this)c=A.hh(this)
c.N(a,b)
return c},
aq(a,b,c,d,e){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.a.h(c)
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
ar(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.a.h(c)
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
B(a){return"ImageDataInt16("+this.a+", "+this.b+", "+this.c+")"}}
A.ci.prototype={
Z(a){var t=this,s=t.d
if(a)s=new Int32Array(s.length)
else s=new Int32Array(A.G(s))
return new A.ci(s,t.a,t.b,t.c)},
J(){return this.Z(!1)},
gG(){return B.H},
gE(a){return B.ct.gE(this.d)},
gad(){return 32},
gan(){return this.a*this.c*4},
gu(a){return A.hi(this)},
ap(a,b,c,d,e){return A.af(A.hi(this),b,c,d,e)},
gj(a){return this.d.byteLength},
gaD(){return!0},
a0(a,b,c){if(c==null||!(c instanceof A.bf)||c.d!==this)c=A.hi(this)
c.N(a,b)
return c},
aq(a,b,c,d,e){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.a.h(c)
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
ar(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.a.h(c)
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
B(a){return"ImageDataInt32("+this.a+", "+this.b+", "+this.c+")"}}
A.cj.prototype={
Z(a){var t=this,s=t.d
if(a)s=new Int8Array(s.length)
else s=new Int8Array(A.G(s))
return new A.cj(s,t.a,t.b,t.c)},
J(){return this.Z(!1)},
gG(){return B.F},
gE(a){return B.cu.gE(this.d)},
gan(){return this.a*this.c},
gu(a){return A.hj(this)},
ap(a,b,c,d,e){return A.af(A.hj(this),b,c,d,e)},
gj(a){return this.d.byteLength},
gaD(){return!0},
gad(){return 8},
a0(a,b,c){if(c==null||!(c instanceof A.bg)||c.d!==this)c=A.hj(this)
c.N(a,b)
return c},
aq(a,b,c,d,e){var t,s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.a.h(c)
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
ar(a,b,c,d,e,f){var t,s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.a.h(c)
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
B(a){return"ImageDataInt8("+this.a+", "+this.b+", "+this.c+")"}}
A.bG.prototype={
fg(a,b,c){var t=Math.max(this.e*b,1)
t=new Uint8Array(t)
this.d!==$&&A.hJ()
this.d=t},
Z(a){var t,s=this,r=s.d
if(a){r===$&&A.c()
r=new Uint8Array(r.length)}else{r===$&&A.c()
r=new Uint8Array(A.G(r))}t=s.f
t=t==null?null:t.J()
return new A.bG(r,s.e,t,s.a,s.b,s.c)},
J(){return this.Z(!1)},
gG(){return B.t},
gj(a){var t=this.d
t===$&&A.c()
return t.byteLength},
gv(){var t=this.f
t=t==null?null:t.gv()
return t==null?1:t},
gaD(){return!1},
gE(a){var t=this.d
t===$&&A.c()
return B.h.gE(t)},
gad(){return 1},
gu(a){return A.dW(this)},
ap(a,b,c,d,e){return A.af(A.dW(this),b,c,d,e)},
a0(a,b,c){if(c==null||!(c instanceof A.bh)||c.f!==this)c=A.dW(this)
c.N(a,b)
return c},
aq(a,b,c,d,e){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dW(s):t).N(a,b)
s.r.a9(c,d,e)},
ar(a,b,c,d,e,f){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dW(s):t).N(a,b)
s.r.aa(c,d,e,f)},
B(a){return"ImageDataUint1("+this.a+", "+this.b+", "+this.c+")"},
gan(){return this.e},
gT(){return this.f}}
A.bH.prototype={
Z(a){var t,s=this,r=s.d
if(a)r=new Uint16Array(r.length)
else r=new Uint16Array(A.G(r))
t=s.e
t=t==null?null:t.J()
return new A.bH(r,t,s.a,s.b,s.c)},
J(){return this.Z(!1)},
gG(){return B.q},
gE(a){return B.z.gE(this.d)},
gad(){return 16},
gv(){var t=this.e
t=t==null?null:t.gv()
return t==null?65535:t},
gan(){return this.a*this.c*2},
gu(a){return A.hk(this)},
ap(a,b,c,d,e){return A.af(A.hk(this),b,c,d,e)},
gj(a){return this.d.byteLength},
gaD(){return!0},
a0(a,b,c){if(c==null||!(c instanceof A.bi)||c.d!==this)c=A.hk(this)
c.N(a,b)
return c},
aq(a,b,c,d,e){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.a.h(c)
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
ar(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.a.h(c)
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
B(a){return"ImageDataUint16("+this.a+", "+this.b+", "+this.c+")"},
gT(){return this.e}}
A.bI.prototype={
fh(a,b,c){var t=Math.max(this.e*b,1)
t=new Uint8Array(t)
this.d!==$&&A.hJ()
this.d=t},
Z(a){var t,s=this,r=s.d
if(a){r===$&&A.c()
r=new Uint8Array(r.length)}else{r===$&&A.c()
r=new Uint8Array(A.G(r))}t=s.f
t=t==null?null:t.J()
return new A.bI(r,s.e,t,s.a,s.b,s.c)},
J(){return this.Z(!1)},
gG(){return B.u},
gad(){return 2},
gE(a){var t=this.d
t===$&&A.c()
return B.h.gE(t)},
gu(a){return A.dX(this)},
ap(a,b,c,d,e){return A.af(A.dX(this),b,c,d,e)},
gj(a){var t=this.d
t===$&&A.c()
return t.byteLength},
gv(){var t=this.f
t=t==null?null:t.gv()
return t==null?3:t},
gaD(){return!1},
a0(a,b,c){if(c==null||!(c instanceof A.bj)||c.f!==this)c=A.dX(this)
c.N(a,b)
return c},
aq(a,b,c,d,e){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dX(s):t).N(a,b)
s.r.a9(c,d,e)},
ar(a,b,c,d,e,f){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dX(s):t).N(a,b)
s.r.aa(c,d,e,f)},
B(a){return"ImageDataUint2("+this.a+", "+this.b+", "+this.c+")"},
gan(){return this.e},
gT(){return this.f}}
A.ck.prototype={
Z(a){var t=this,s=t.d
if(a)s=new Uint32Array(s.length)
else s=new Uint32Array(A.G(s))
return new A.ck(s,t.a,t.b,t.c)},
J(){return this.Z(!1)},
gG(){return B.x},
gE(a){return B.a7.gE(this.d)},
gan(){return this.a*this.c*4},
gad(){return 32},
gu(a){return A.hl(this)},
ap(a,b,c,d,e){return A.af(A.hl(this),b,c,d,e)},
gj(a){return this.d.byteLength},
gaD(){return!0},
a0(a,b,c){if(c==null||!(c instanceof A.bk)||c.d!==this)c=A.hl(this)
c.N(a,b)
return c},
aq(a,b,c,d,e){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.a.h(c)
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
ar(a,b,c,d,e,f){var t,s,r=this.c,q=b*this.a*r+a*r,p=this.d,o=B.a.h(c)
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
B(a){return"ImageDataUint32("+this.a+", "+this.b+", "+this.c+")"}}
A.bJ.prototype={
fi(a,b,c){var t=Math.max(this.e*b,1)
t=new Uint8Array(t)
this.d!==$&&A.hJ()
this.d=t},
Z(a){var t,s=this,r=s.d
if(a){r===$&&A.c()
r=new Uint8Array(r.length)}else{r===$&&A.c()
r=new Uint8Array(A.G(r))}t=s.f
t=t==null?null:t.J()
return new A.bJ(r,s.e,t,s.a,s.b,s.c)},
J(){return this.Z(!1)},
gG(){return B.v},
gE(a){var t=this.d
t===$&&A.c()
return B.h.gE(t)},
gu(a){return A.dY(this)},
ap(a,b,c,d,e){return A.af(A.dY(this),b,c,d,e)},
gj(a){var t=this.d
t===$&&A.c()
return t.byteLength},
gv(){var t=this.f
t=t==null?null:t.gv()
return t==null?15:t},
gaD(){return!1},
gad(){return 4},
a0(a,b,c){if(c==null||!(c instanceof A.bl)||c.e!==this)c=A.dY(this)
c.N(a,b)
return c},
aq(a,b,c,d,e){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dY(s):t).N(a,b)
s.r.a9(c,d,e)},
ar(a,b,c,d,e,f){var t,s=this
if(s.c<1)return
t=s.r;(t==null?s.r=A.dY(s):t).N(a,b)
s.r.aa(c,d,e,f)},
B(a){return"ImageDataUint4("+this.a+", "+this.b+", "+this.c+")"},
gan(){return this.e},
gT(){return this.f}}
A.bK.prototype={
Z(a){var t,s=this,r=s.d
if(a)r=new Uint8Array(r.length)
else r=new Uint8Array(A.G(r))
t=s.e
t=t==null?null:t.J()
return new A.bK(r,t,s.a,s.b,s.c)},
J(){return this.Z(!1)},
gG(){return B.l},
gE(a){return B.h.gE(this.d)},
gan(){return this.a*this.c},
gad(){return 8},
gu(a){return A.hm(this)},
ap(a,b,c,d,e){return A.af(A.hm(this),b,c,d,e)},
gj(a){return this.d.byteLength},
gv(){var t=this.e
t=t==null?null:t.gv()
return t==null?255:t},
gaD(){return!1},
a0(a,b,c){if(c==null||!(c instanceof A.bm)||c.d!==this)c=A.hm(this)
c.N(a,b)
return c},
aq(a,b,c,d,e){var t,s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.a.h(c)
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
ar(a,b,c,d,e,f){var t,s,r=this.c,q=b*(this.a*r)+a*r,p=this.d,o=B.a.h(c)
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
B(a){return"ImageDataUint8("+this.a+", "+this.b+", "+this.c+")"},
gT(){return this.e}}
A.cD.prototype={}
A.cE.prototype={
J(){return new A.cE(new Uint32Array(A.G(this.c)),this.a,this.b)},
gE(a){return B.a7.gE(this.c)},
gG(){return B.x},
gv(){return 4294967295},
bV(a,b,c,d){var t,s,r,q,p=this.b
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
bc(a,b){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
bC(a){var t
a*=this.b
t=this.c
if(!(a<t.length))return A.a(t,a)
return t[a]},
bB(a){var t,s=this.b
if(s<2)return 0
t=this.c
s=a*s+1
if(!(s<t.length))return A.a(t,s)
return t[s]},
bA(a){var t,s=this.b
if(s<3)return 0
t=this.c
s=a*s+2
if(!(s<t.length))return A.a(t,s)
return t[s]},
bz(a){var t,s=this.b
if(s<4)return 0
t=this.c
s=a*s+3
if(!(s<t.length))return A.a(t,s)
return t[s]}}
A.ba.prototype={
J(){return new A.ba(new Uint8Array(A.G(this.c)),this.a,this.b)},
gE(a){return B.h.gE(this.c)},
gG(){return B.l},
gv(){return 255},
bV(a,b,c,d){var t,s,r,q,p=this.b
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
cs(a,b,c,d,e){var t,s,r,q,p=this.b
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
bc(a,b){var t,s=this.b
if(b<s){t=this.c
s=a*s+b
if(!(s>=0&&s<t.length))return A.a(t,s)
s=t[s]}else s=0
return s},
bC(a){var t
a*=this.b
t=this.c
if(a>=t.length)return 0
return t[a]},
bB(a){var t,s,r=this.b
if(r<2)return 0
a*=r
r=this.c
t=r.length
if(a>=t)return 0
s=a+1
if(!(s<t))return A.a(r,s)
return r[s]},
bA(a){var t,s,r=this.b
if(r<3)return 0
a*=r
r=this.c
t=r.length
if(a>=t)return 0
s=a+2
if(!(s<t))return A.a(r,s)
return r[s]},
bz(a){var t,s,r=this.b
if(r<4)return 255
a*=r
r=this.c
t=r.length
if(a>=t)return 0
s=a+3
if(!(s<t))return A.a(r,s)
return r[s]}}
A.bb.prototype={
J(){var t=this
return new A.bb(t.a,t.b,t.c,t.d)},
gG(){return B.I},
gj(a){return this.d.c},
gT(){return null},
gv(){return 1},
gao(){return this.a},
gag(){return this.b},
N(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gD(){return this},
t(){var t,s=this,r=s.d
if(++s.a===r.a){s.a=0
if(++s.b===r.b)return!1}t=s.c+r.c
s.c=t
return t<r.d.length},
i(a,b){var t,s=this.d
if(b<s.c){s=s.d
t=this.c+b
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=$.a6
s=s!=null?s:A.ay()
if(!(t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
n(a,b,c){var t,s,r=this.d
if(b<r.c){r=r.d
t=this.c+b
s=A.E(c)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gO(){return this.gk()},
sO(a){this.sk(a)},
gk(){var t,s=this.d
if(s.c>0){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=$.a6
s=s!=null?s:A.ay()
if(!(t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sk(a){var t,s,r=this.d
if(r.c>0){r=r.d
t=this.c
s=A.E(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gp(){var t,s=this.d
if(s.c>1){s=s.d
t=this.c+1
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=$.a6
s=s!=null?s:A.ay()
if(!(t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sp(a){var t,s,r=this.d
if(r.c>1){r=r.d
t=this.c+1
s=A.E(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gm(){var t,s=this.d
if(s.c>2){s=s.d
t=this.c+2
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=$.a6
s=s!=null?s:A.ay()
if(!(t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=0
return s},
sm(a){var t,s,r=this.d
if(r.c>2){r=r.d
t=this.c+2
s=A.E(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gq(){var t,s=this.d
if(s.c>3){s=s.d
t=this.c+3
if(!(t>=0&&t<s.length))return A.a(s,t)
t=s[t]
s=$.a6
s=s!=null?s:A.ay()
if(!(t<s.length))return A.a(s,t)
t=s[t]
s=t}else s=1
return s},
sq(a){var t,s,r=this.d
if(r.c>3){r=r.d
t=this.c+3
s=A.E(a)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gU(){return this.gk()/1},
sU(a){this.sk(a)},
gR(){return this.gp()/1},
sR(a){this.sp(a)},
gS(){return this.gm()/1},
sS(a){this.sm(a)},
gV(){return this.gq()/1},
sV(a){this.sq(a)},
gal(){return A.ak(this)},
W(a){var t=this
if(t.d.c>0){t.sk(a.gk())
t.sp(a.gp())
t.sm(a.gm())
t.sq(a.gq())}},
a9(a,b,c){var t,s,r,q=this,p=q.d,o=p.c
if(o>0){p=p.d
t=q.c
s=A.E(a)
p.$flags&2&&A.b(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){t=q.c+1
s=A.E(b)
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>2){o=q.c+2
t=A.E(c)
if(!(o>=0&&o<r))return A.a(p,o)
p[o]=t}}}},
aa(a,b,c,d){var t,s,r,q=this,p=q.d,o=p.c
if(o>0){p=p.d
t=q.c
s=A.E(a)
p.$flags&2&&A.b(p)
r=p.length
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>1){t=q.c+1
s=A.E(b)
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>2){t=q.c+2
s=A.E(c)
if(!(t>=0&&t<r))return A.a(p,t)
p[t]=s
if(o>3){o=q.c+3
t=A.E(d)
if(!(o>=0&&o<r))return A.a(p,o)
p[o]=t}}}}},
gu(a){return new A.B(this)},
M(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.bb){t=A.m(o,A.i(o).l("d.E"))
t=A.n(t)
s=A.m(b,A.i(b).l("d.E"))
return t===A.n(s)}if(u.L.b(b)){t=J.J(b)
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
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$ip:1,
$io:1,
$ik:1,
gak(){return this.d}}
A.bc.prototype={
J(){var t=this
return new A.bc(t.a,t.b,t.c,t.d)},
gj(a){return this.d.c},
gT(){return null},
gv(){return 1},
gG(){return B.D},
gao(){return this.a},
gag(){return this.b},
N(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gD(){return this},
t(){var t,s=this,r=s.d
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
gO(){return this.gk()},
sO(a){this.sk(a)},
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
gU(){return this.gk()/1},
sU(a){this.sk(a)},
gR(){return this.gp()/1},
sR(a){this.sp(a)},
gS(){return this.gm()/1},
sS(a){this.sm(a)},
gV(){return this.gq()/1},
sV(a){this.sq(a)},
gal(){return A.ak(this)},
W(a){var t=this
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
gu(a){return new A.B(this)},
M(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.bc){t=A.m(o,A.i(o).l("d.E"))
t=A.n(t)
s=A.m(b,A.i(b).l("d.E"))
return t===A.n(s)}if(u.L.b(b)){t=J.J(b)
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
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$ip:1,
$io:1,
$ik:1,
gak(){return this.d}}
A.bd.prototype={
J(){var t=this
return new A.bd(t.a,t.b,t.c,t.d)},
gj(a){return this.d.c},
gT(){return null},
gv(){return 1},
gG(){return B.E},
gao(){return this.a},
gag(){return this.b},
N(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gD(){return this},
t(){var t,s=this,r=s.d
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
gO(){return this.gk()},
sO(a){this.sk(a)},
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
gU(){return this.gk()/1},
sU(a){this.sk(a)},
gR(){return this.gp()/1},
sR(a){this.sp(a)},
gS(){return this.gm()/1},
sS(a){this.sm(a)},
gV(){return this.gq()/1},
sV(a){this.sq(a)},
gal(){return A.ak(this)},
W(a){var t=this
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
gu(a){return new A.B(this)},
M(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.bd){t=A.m(o,A.i(o).l("d.E"))
t=A.n(t)
s=A.m(b,A.i(b).l("d.E"))
return t===A.n(s)}if(u.L.b(b)){t=J.J(b)
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
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$ip:1,
$io:1,
$ik:1,
gak(){return this.d}}
A.be.prototype={
J(){var t=this
return new A.be(t.a,t.b,t.c,t.d)},
gj(a){return this.d.c},
gT(){return null},
gv(){return 32767},
gG(){return B.G},
gao(){return this.a},
gag(){return this.b},
N(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gD(){return this},
t(){var t,s=this,r=s.d
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
gO(){return this.gk()},
sO(a){this.sk(a)},
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
gU(){return this.gk()/32767},
sU(a){this.sk(a*32767)},
gR(){return this.gp()/32767},
sR(a){this.sp(a*32767)},
gS(){return this.gm()/32767},
sS(a){this.sm(a*32767)},
gV(){return this.gq()/32767},
sV(a){this.sq(a*32767)},
gal(){return A.ak(this)},
W(a){var t=this
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
gu(a){return new A.B(this)},
M(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.be){t=A.m(o,A.i(o).l("d.E"))
t=A.n(t)
s=A.m(b,A.i(b).l("d.E"))
return t===A.n(s)}if(u.L.b(b)){t=J.J(b)
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
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$ip:1,
$io:1,
$ik:1,
gak(){return this.d}}
A.bf.prototype={
J(){var t=this
return new A.bf(t.a,t.b,t.c,t.d)},
gj(a){return this.d.c},
gT(){return null},
gv(){return 2147483647},
gG(){return B.H},
gao(){return this.a},
gag(){return this.b},
N(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gD(){return this},
t(){var t,s=this,r=s.d
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
gO(){return this.gk()},
sO(a){this.sk(a)},
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
gU(){return this.gk()/2147483647},
sU(a){this.sk(a*2147483647)},
gR(){return this.gp()/2147483647},
sR(a){this.sp(a*2147483647)},
gS(){return this.gm()/2147483647},
sS(a){this.sm(a*2147483647)},
gV(){return this.gq()/2147483647},
sV(a){this.sq(a*2147483647)},
gal(){return A.ak(this)},
W(a){var t=this
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
gu(a){return new A.B(this)},
M(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.bf){t=A.m(o,A.i(o).l("d.E"))
t=A.n(t)
s=A.m(b,A.i(b).l("d.E"))
return t===A.n(s)}if(u.L.b(b)){t=J.J(b)
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
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$ip:1,
$io:1,
$ik:1,
gak(){return this.d}}
A.bg.prototype={
J(){var t=this
return new A.bg(t.a,t.b,t.c,t.d)},
gj(a){return this.d.c},
gT(){return null},
gv(){return 127},
gG(){return B.F},
gao(){return this.a},
gag(){return this.b},
N(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gD(){return this},
t(){var t,s=this,r=s.d
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
gO(){return this.gk()},
sO(a){this.sk(a)},
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
gU(){return this.gk()/127},
sU(a){this.sk(a*127)},
gR(){return this.gp()/127},
sR(a){this.sp(a*127)},
gS(){return this.gm()/127},
sS(a){this.sm(a*127)},
gV(){return this.gq()/127},
sV(a){this.sq(a*127)},
gal(){return A.ak(this)},
W(a){var t=this
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
gu(a){return new A.B(this)},
M(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.bg){t=A.m(o,A.i(o).l("d.E"))
t=A.n(t)
s=A.m(b,A.i(b).l("d.E"))
return t===A.n(s)}if(u.L.b(b)){t=J.J(b)
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
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$ip:1,
$io:1,
$ik:1,
gak(){return this.d}}
A.dV.prototype={
t(){var t=this,s=t.a
if(s.gao()+1>t.d){s.N(t.b,s.gag()+1)
return s.gag()<=t.e}return s.t()},
gD(){return this.a},
$ip:1}
A.bh.prototype={
J(){var t=this
return new A.bh(t.a,t.b,t.c,t.d,t.e,t.f)},
gj(a){var t=this.f,s=t.f
s=s==null?null:s.b
return s==null?t.c:s},
gT(){return this.f.f},
gv(){var t=this.f.f
t=t==null?null:t.gv()
return t==null?1:t},
gG(){return B.t},
gao(){return this.a},
gag(){return this.b},
N(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.f
s=b*t.e
r.e=s
t=a*t.c
r.c=s+B.b.H(t,3)
r.d=t&7},
gD(){return this},
t(){var t,s=this,r=++s.a,q=s.f
if(r===q.a){s.a=0
r=++s.b
s.d=0;++s.c
s.e=s.e+q.e
return r<q.b}t=q.c
if(q.f!=null||t===1){if(++s.d>7){s.d=0;++s.c}}else{r*=t
s.d=r&7
s.c=s.e+B.b.H(r,3)}r=s.c
q=q.d
q===$&&A.c()
return r<q.byteLength},
c9(a){var t,s,r=this.c,q=7-(this.d+a)
if(q<0){q+=8;++r}t=this.f.d
t===$&&A.c()
s=t.length
if(r>=s)return 0
if(!(r>=0))return A.a(t,r)
return B.b.aY(t[r],q)&1},
av(a){var t=this.f,s=t.f
if(s==null)t=t.c>a?this.c9(a):0
else t=s.bc(this.c9(0),a)
return t},
a2(a,b){var t,s,r,q,p,o,n=this.f
if(a>=n.c)return
t=this.c
s=7-(this.d+a)
if(s<0){++t
s+=8}r=n.d
r===$&&A.c()
if(!(t>=0&&t<r.length))return A.a(r,t)
q=r[t]
p=B.b.C(B.a.h(b),0,1)
if(!(s>=0&&s<8))return A.a(B.aq,s)
o=B.aq[s]
r=B.b.a1(p,s)
n=n.d
n.$flags&2&&A.b(n)
if(!(t<n.length))return A.a(n,t)
n[t]=(q&o|r)>>>0},
i(a,b){return this.av(b)},
n(a,b,c){return this.a2(b,c)},
gO(){return this.c9(0)},
sO(a){this.a2(0,a)},
gk(){return this.av(0)},
sk(a){this.a2(0,a)},
gp(){return this.av(1)},
sp(a){this.a2(1,a)},
gm(){return this.av(2)},
sm(a){this.a2(2,a)},
gq(){var t=this.f
return t.f==null&&t.c<4?t.gv():this.av(3)},
sq(a){this.a2(3,a)},
gU(){return this.av(0)/this.f.gv()},
sU(a){this.a2(0,a*this.f.gv())},
gR(){return this.av(1)/this.f.gv()},
sR(a){this.a2(1,a*this.f.gv())},
gS(){return this.av(2)/this.f.gv()},
sS(a){this.a2(2,a*this.f.gv())},
gV(){return this.gq()/this.f.gv()},
sV(a){this.a2(3,a*this.f.gv())},
gal(){return A.ak(this)},
W(a){var t=this
t.a2(0,a.gk())
t.a2(1,a.gp())
t.a2(2,a.gm())
t.a2(3,a.gq())},
a9(a,b,c){var t=this,s=t.f.c
if(s>0){t.a2(0,a)
if(s>1){t.a2(1,b)
if(s>2)t.a2(2,c)}}},
aa(a,b,c,d){var t=this,s=t.f.c
if(s>0){t.a2(0,a)
if(s>1){t.a2(1,b)
if(s>2){t.a2(2,c)
if(s>3)t.a2(3,d)}}}},
gu(a){return new A.B(this)},
M(a,b){var t,s,r,q=this
if(b==null)return!1
if(b instanceof A.bh){t=A.m(q,A.i(q).l("d.E"))
t=A.n(t)
s=A.m(b,A.i(b).l("d.E"))
return t===A.n(s)}if(u.L.b(b)){t=q.f
s=t.f
r=s!=null?s.b:t.c
t=J.J(b)
if(t.gj(b)!==r)return!1
if(q.av(0)!==t.i(b,0))return!1
if(r>1){if(q.av(1)!==t.i(b,1))return!1
if(r>2){if(q.av(2)!==t.i(b,2))return!1
if(r>3)if(q.av(3)!==t.i(b,3))return!1}}return!0}return!1},
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$ip:1,
$io:1,
$ik:1,
gak(){return this.f}}
A.bi.prototype={
J(){var t=this
return new A.bi(t.a,t.b,t.c,t.d)},
gj(a){var t=this.d,s=t.e
s=s==null?null:s.b
return s==null?t.c:s},
gT(){return this.d.e},
gv(){var t=this.d.e
t=t==null?null:t.gv()
return t==null?65535:t},
gG(){return B.q},
gao(){return this.a},
gag(){return this.b},
N(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gD(){return this},
t(){var t,s=this,r=s.d
if(++s.a===r.a){s.a=0
if(++s.b===r.b)return!1}t=s.c
t+=r.e==null?r.c:1
s.c=t
return t<r.d.length},
aH(a){var t,s=this.d,r=s.e
if(r!=null){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=r.bc(s[t],a)
s=t}else if(a<s.c){s=s.d
r=this.c+a
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
i(a,b){return this.aH(b)},
n(a,b,c){var t,s,r=this.d
if(b<r.c){r=r.d
t=this.c+b
s=B.a.h(c)
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gO(){return this.gk()},
sO(a){this.sk(a)},
gk(){var t,s=this.d,r=s.e
if(r==null)if(s.c>0){s=s.d
r=this.c
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
else{s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=r.bC(s[t])
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
t=q.bB(r[t])
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
t=q.bA(r[t])
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
r=q}else r=r.gv()}else{r=r.d
t=s.c
if(!(t>=0&&t<r.length))return A.a(r,t)
t=q.bz(r[t])
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
gU(){return this.gk()/this.d.gv()},
sU(a){this.sk(a*this.d.gv())},
gR(){return this.gp()/this.d.gv()},
sR(a){this.sp(a*this.d.gv())},
gS(){return this.gm()/this.d.gv()},
sS(a){this.sm(a*this.d.gv())},
gV(){return this.gq()/this.d.gv()},
sV(a){this.sq(a*this.d.gv())},
gal(){return this.d.c===2?this.gk():A.ak(this)},
W(a){var t=this
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
gu(a){return new A.B(this)},
M(a,b){var t,s,r,q=this
if(b==null)return!1
if(b instanceof A.bi){t=A.m(q,A.i(q).l("d.E"))
t=A.n(t)
s=A.m(b,A.i(b).l("d.E"))
return t===A.n(s)}if(u.L.b(b)){t=q.d
s=t.e
r=s!=null?s.b:t.c
t=J.J(b)
if(t.gj(b)!==r)return!1
if(q.aH(0)!==t.i(b,0))return!1
if(r>1){if(q.aH(1)!==t.i(b,1))return!1
if(r>2){if(q.aH(2)!==t.i(b,2))return!1
if(r>3)if(q.aH(3)!==t.i(b,3))return!1}}return!0}return!1},
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$ip:1,
$io:1,
$ik:1,
gak(){return this.d}}
A.bj.prototype={
J(){var t=this
return new A.bj(t.a,t.b,t.c,t.d,t.e,t.f)},
gj(a){var t=this.f,s=t.f
s=s==null?null:s.b
return s==null?t.c:s},
gT(){return this.f.f},
gv(){var t=this.f.f
t=t==null?null:t.gv()
return t==null?3:t},
gG(){return B.u},
gd8(){var t=this.f
return t.f!=null?2:t.c<<1>>>0},
gao(){return this.a},
gag(){return this.b},
N(a,b){var t,s,r,q=this
q.a=a
q.b=b
t=q.gd8()
s=b*q.f.e
q.e=s
r=a*t
q.c=s+B.b.H(r,3)
q.d=r&7},
gD(){return this},
t(){var t=this,s=++t.a,r=t.f
if(s===r.a){t.a=0
s=++t.b
t.d=0;++t.c
t.e=t.e+r.e
return s<r.b}if(r.f!=null||r.c===1){if((t.d+=2)>7){t.d=0;++t.c}}else{s*=t.gd8()
t.d=s&7
t.c=t.e+B.b.H(s,3)}s=t.c
r=r.d
r===$&&A.c()
return s<r.length},
ca(a){var t,s=this.c,r=6-(this.d+(a<<1>>>0))
if(r<0){r+=8;++s}t=this.f.d
t===$&&A.c()
if(!(s>=0&&s<t.length))return A.a(t,s)
return B.b.aY(t[s],r)&3},
aw(a){var t=this.f,s=t.f
if(s==null)t=t.c>a?this.ca(a):0
else t=s.bc(this.ca(0),a)
return t},
a3(a,b){var t,s,r,q,p,o,n=this.f
if(a>=n.c)return
t=this.c
s=6-(this.d+(a<<1>>>0))
if(s<0){++t
s+=8}r=n.d
r===$&&A.c()
if(!(t>=0&&t<r.length))return A.a(r,t)
q=r[t]
p=B.b.C(B.a.h(b),0,3)
r=B.b.H(s,1)
if(!(r<4))return A.a(B.ak,r)
o=B.ak[r]
r=B.b.a1(p,s)
n=n.d
n.$flags&2&&A.b(n)
if(!(t<n.length))return A.a(n,t)
n[t]=(q&o|r)>>>0},
i(a,b){return this.aw(b)},
n(a,b,c){return this.a3(b,c)},
gO(){return this.ca(0)},
sO(a){this.a3(0,a)},
gk(){return this.aw(0)},
sk(a){this.a3(0,a)},
gp(){return this.aw(1)},
sp(a){this.a3(1,a)},
gm(){return this.aw(2)},
sm(a){this.a3(2,a)},
gq(){var t=this.f
return t.f==null&&t.c<4?t.gv():this.aw(3)},
sq(a){this.a3(3,a)},
gU(){return this.aw(0)/this.f.gv()},
sU(a){this.a3(0,a*this.f.gv())},
gR(){return this.aw(1)/this.f.gv()},
sR(a){this.a3(1,a*this.f.gv())},
gS(){return this.aw(2)/this.f.gv()},
sS(a){this.a3(2,a*this.f.gv())},
gV(){return this.gq()/this.f.gv()},
sV(a){this.a3(3,a*this.f.gv())},
gal(){return A.ak(this)},
W(a){var t=this
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
gu(a){return new A.B(this)},
M(a,b){var t,s,r,q=this
if(b==null)return!1
if(b instanceof A.bj){t=A.m(q,A.i(q).l("d.E"))
t=A.n(t)
s=A.m(b,A.i(b).l("d.E"))
return t===A.n(s)}if(u.L.b(b)){t=q.f
s=t.f
r=s!=null?s.b:t.c
t=J.J(b)
if(t.gj(b)!==r)return!1
if(q.aw(0)!==t.i(b,0))return!1
if(r>1){if(q.aw(1)!==t.i(b,1))return!1
if(r>2){if(q.aw(2)!==t.i(b,2))return!1
if(r>3)if(q.aw(3)!==t.i(b,3))return!1}}return!0}return!1},
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$ip:1,
$io:1,
$ik:1,
gak(){return this.f}}
A.bk.prototype={
J(){var t=this
return new A.bk(t.a,t.b,t.c,t.d)},
gj(a){return this.d.c},
gT(){return null},
gv(){return 4294967295},
gG(){return B.x},
gao(){return this.a},
gag(){return this.b},
N(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gD(){return this},
t(){var t,s=this,r=s.d
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
gO(){return this.gk()},
sO(a){this.sk(a)},
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
gU(){return this.gk()/4294967295},
sU(a){this.sk(a*4294967295)},
gR(){return this.gp()/4294967295},
sR(a){this.sp(a*4294967295)},
gS(){return this.gm()/4294967295},
sS(a){this.sm(a*4294967295)},
gV(){return this.gq()/4294967295},
sV(a){this.sq(a*4294967295)},
gal(){return A.ak(this)},
W(a){var t=this
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
gu(a){return new A.B(this)},
M(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(b instanceof A.bk){t=A.m(o,A.i(o).l("d.E"))
t=A.n(t)
s=A.m(b,A.i(b).l("d.E"))
return t===A.n(s)}if(u.L.b(b)){t=J.J(b)
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
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$ip:1,
$io:1,
$ik:1,
gak(){return this.d}}
A.bl.prototype={
J(){var t=this
return new A.bl(t.a,t.b,t.c,t.d,t.e)},
gj(a){var t=this.e,s=t.f
s=s==null?null:s.b
return s==null?t.c:s},
gT(){return this.e.f},
gv(){var t=this.e.f
t=t==null?null:t.gv()
return t==null?15:t},
gG(){return B.v},
gao(){return this.a},
gag(){return this.b},
N(a,b){var t,s,r,q=this
q.a=a
q.b=b
t=q.e
s=t.c*4
r=t.e
if(s===4)t=b*r+B.b.H(a,1)
else if(s===8)t=b*t.a+a
else{t=b*r
t=s===16?t+(a<<1>>>0):t+B.b.H(a*s,3)}q.c=t
t=a*s
q.d=s>7?t&4:t&7},
gD(){return this},
t(){var t,s,r,q=this,p=q.e
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
c6(a){var t,s=this.c,r=4-(this.d+(a<<2>>>0))
if(r<0){r+=8;++s}t=this.e.d
t===$&&A.c()
if(!(s>=0&&s<t.length))return A.a(t,s)
return B.b.aY(t[s],r)&15},
az(a){var t=this.e,s=t.f
if(s==null)t=t.c>a?this.c6(a):0
else t=s.bc(this.c6(0),a)
return t},
a4(a,b){var t,s,r,q,p,o,n=this.e
if(a>=n.c)return
t=this.c
s=4-(this.d+(a<<2>>>0))
if(s<0){s+=8;++t}r=n.d
r===$&&A.c()
if(!(t>=0&&t<r.length))return A.a(r,t)
q=r[t]
p=B.b.C(B.a.h(b),0,15)
o=s===4?15:240
r=B.b.a1(p,s)
n=n.d
n.$flags&2&&A.b(n)
if(!(t<n.length))return A.a(n,t)
n[t]=(q&o|r)>>>0},
i(a,b){return this.az(b)},
n(a,b,c){return this.a4(b,c)},
gO(){return this.c6(0)},
sO(a){this.a4(0,a)},
gk(){return this.az(0)},
sk(a){this.a4(0,a)},
gp(){return this.az(1)},
sp(a){this.a4(1,a)},
gm(){return this.az(2)},
sm(a){this.a4(2,a)},
gq(){var t=this.e
return t.f==null&&t.c<4?t.gv():this.az(3)},
sq(a){this.a4(3,a)},
gU(){return this.az(0)/this.e.gv()},
sU(a){this.a4(0,a*this.e.gv())},
gR(){return this.az(1)/this.e.gv()},
sR(a){this.a4(1,a*this.e.gv())},
gS(){return this.az(2)/this.e.gv()},
sS(a){this.a4(2,a*this.e.gv())},
gV(){return this.gq()/this.e.gv()},
sV(a){this.a4(3,a*this.e.gv())},
gal(){return A.ak(this)},
W(a){var t=this
t.a4(0,a.gk())
t.a4(1,a.gp())
t.a4(2,a.gm())
t.a4(3,a.gq())},
a9(a,b,c){var t=this,s=t.e.c
if(s>0){t.a4(0,a)
if(s>1){t.a4(1,b)
if(s>2)t.a4(2,c)}}},
aa(a,b,c,d){var t=this,s=t.e.c
if(s>0){t.a4(0,a)
if(s>1){t.a4(1,b)
if(s>2){t.a4(2,c)
if(s>3)t.a4(3,d)}}}},
gu(a){return new A.B(this)},
M(a,b){var t,s,r,q=this
if(b==null)return!1
if(b instanceof A.bl){t=A.m(q,A.i(q).l("d.E"))
t=A.n(t)
s=A.m(b,A.i(b).l("d.E"))
return t===A.n(s)}if(u.L.b(b)){r=q.e.c
t=J.J(b)
if(t.gj(b)!==r)return!1
if(q.az(0)!==t.i(b,0))return!1
if(r>1){if(q.az(1)!==t.i(b,1))return!1
if(r>2){if(q.az(2)!==t.i(b,2))return!1
if(r>3)if(q.az(3)!==t.i(b,3))return!1}}return!0}return!1},
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$ip:1,
$io:1,
$ik:1,
gak(){return this.e}}
A.bm.prototype={
J(){var t=this
return new A.bm(t.a,t.b,t.c,t.d)},
gj(a){var t=this.d,s=t.e
s=s==null?null:s.b
return s==null?t.c:s},
gT(){return this.d.e},
gv(){var t=this.d.e
t=t==null?null:t.gv()
return t==null?255:t},
gG(){return B.l},
gao(){return this.a},
gag(){return this.b},
N(a,b){var t,s,r=this
r.a=a
r.b=b
t=r.d
s=t.c
r.c=b*t.a*s+a*s},
gD(){return this},
t(){var t,s=this,r=s.d
if(++s.a===r.a){s.a=0
if(++s.b===r.b)return!1}t=s.c
t+=r.e==null?r.c:1
s.c=t
return t<r.d.length},
aH(a){var t,s=this.d,r=s.e
if(r!=null){s=s.d
t=this.c
if(!(t>=0&&t<s.length))return A.a(s,t)
t=r.bc(s[t],a)
s=t}else if(a<s.c){s=s.d
r=this.c+a
if(!(r>=0&&r<s.length))return A.a(s,r)
r=s[r]
s=r}else s=0
return s},
i(a,b){return this.aH(b)},
n(a,b,c){var t,s,r=this.d
if(b<r.c){r=r.d
t=this.c+b
s=B.a.h(B.a.C(c,0,255))
r.$flags&2&&A.b(r)
if(!(t>=0&&t<r.length))return A.a(r,t)
r[t]=s}},
gO(){var t=this.d.d,s=this.c
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
sO(a){var t=this.d.d,s=this.c,r=B.a.h(B.a.C(a,0,255))
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
t=r.bC(s[t])
s=t}return s},
sk(a){var t,s,r=this.d
if(r.c>0){r=r.d
t=this.c
s=B.a.h(B.a.C(a,0,255))
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
t=q.bB(r[t])
r=t}return r},
sp(a){var t,s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
t=B.a.h(B.a.C(a,0,255))
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}else if(r>1){s=s.d
r=this.c+1
t=B.a.h(B.a.C(a,0,255))
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
t=q.bA(r[t])
r=t}return r},
sm(a){var t,s=this.d,r=s.c
if(r===2){s=s.d
r=this.c
t=B.a.h(B.a.C(a,0,255))
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}else if(r>2){s=s.d
r=this.c+2
t=B.a.h(B.a.C(a,0,255))
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
t=q.bz(r[t])
r=t}return r},
sq(a){var t,s=this.d,r=s.c
if(r===2){s=s.d
r=this.c+1
t=B.a.h(B.a.C(a,0,255))
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}else if(r>3){s=s.d
r=this.c+3
t=B.a.h(B.a.C(a,0,255))
s.$flags&2&&A.b(s)
if(!(r>=0&&r<s.length))return A.a(s,r)
s[r]=t}},
gU(){return this.gk()/this.d.gv()},
sU(a){this.sk(a*this.d.gv())},
gR(){return this.gp()/this.d.gv()},
sR(a){this.sp(a*this.d.gv())},
gS(){return this.gm()/this.d.gv()},
sS(a){this.sm(a*this.d.gv())},
gV(){return this.gq()/this.d.gv()},
sV(a){this.sq(a*this.d.gv())},
gal(){return this.d.c===2?this.gk():A.ak(this)},
W(a){var t=this
if(t.d.e!=null)t.sO(a.gO())
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
gu(a){return new A.B(this)},
M(a,b){var t,s,r,q=this
if(b==null)return!1
if(b instanceof A.bm){t=A.m(q,A.i(q).l("d.E"))
t=A.n(t)
s=A.m(b,A.i(b).l("d.E"))
return t===A.n(s)}if(u.L.b(b)){t=q.d
s=t.e
r=s!=null?s.b:t.c
t=J.J(b)
if(t.gj(b)!==r)return!1
if(q.aH(0)!==t.i(b,0))return!1
if(r>1){if(q.aH(1)!==t.i(b,1))return!1
if(r>2){if(q.aH(2)!==t.i(b,2))return!1
if(r>3)if(q.aH(3)!==t.i(b,3))return!1}}return!0}return!1},
gF(a){var t=A.m(this,A.i(this).l("d.E"))
return A.n(t)},
$ip:1,
$io:1,
$ik:1,
gak(){return this.d}}
A.a3.prototype={
J(){return new A.a3()},
gak(){return $.j4()},
gao(){return 0},
gag(){return 0},
gj(a){return 0},
gv(){return 0},
gG(){return B.l},
gT(){return null},
i(a,b){return 0},
n(a,b,c){},
gO(){return 0},
sO(a){},
gk(){return 0},
sk(a){},
gp(){return 0},
sp(a){},
gm(){return 0},
sm(a){},
gq(){return 0},
sq(a){},
gU(){return 0},
sU(a){},
gR(){return 0},
sR(a){},
gS(){return 0},
sS(a){},
gV(){return 0},
sV(a){},
gal(){return 0},
W(a){},
a9(a,b,c){},
aa(a,b,c,d){},
N(a,b){},
gD(){return this},
t(){return!1},
M(a,b){if(b==null)return!1
return b instanceof A.a3},
gF(a){return 0},
gu(a){return new A.B(this)},
$ip:1,
$io:1,
$ik:1}
A.eY.prototype={
B(a){return"ImageException: "+this.a}}
A.bL.prototype={
gj(a){return this.c-this.d},
aP(a){var t=this.d
return A.f_(this.a,!0,a,t)},
bj(){var t=this.a,s=this.d++
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
by(a){var t=this.d,s=A.f_(this.a,!0,a,t)
this.d=t+(s.c-s.d)
return s},
bT(a){var t,s,r,q,p,o=this
if(a==null){t=A.l([],u.t)
for(s=o.c,r=o.a;q=o.d,q<s;){o.d=q+1
if(!(q>=0&&q<r.length))return A.a(r,q)
p=r[q]
if(p===0)return A.fm(t,0,null)
B.c.K(t,p)}throw A.f(A.at("EOF reached without finding string terminator (length: "+A.x(a)+")"))}return A.fm(o.by(a).aF(),0,null)},
f5(){return this.bT(null)},
bb(){var t=this,s=t.a,r=t.d,q=t.d=r+1,p=s.length
if(!(r>=0&&r<p))return A.a(s,r)
r=s[r]
t.d=q+1
if(!(q>=0&&q<p))return A.a(s,q)
q=s[q]
return(r&255)<<8|q&255},
a_(){var t,s,r=this,q=r.a,p=r.d,o=r.d=p+1,n=q.length
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
aF(){var t=this,s=t.d,r=t.c-s,q=t.a
if(u.p.b(q))return J.M(B.h.gE(q),q.byteOffset+t.d,r)
s=new Uint8Array(A.G(J.ju(q,s,s+r)))
return s}}
A.dR.prototype={
eE(a){var t=this
t.cO(a)
t.cI()
t.cM()
t.cE()},
en(a){var t,s,r,q,p,o,n,m=this,l=m.c=Math.max(a,4)
m.f=l-m.d
m.r=l-1
t=B.a.aR(l,8)
m.w=t
m.x=t*256
m.Q=new A.cE(new Uint32Array(1024),256,4)
m.a=new A.ba(new Uint8Array(768),256,3)
m.d=3
m.e=2
t=B.a.H(l,3)
m.y=new Int32Array(t)
t=u.i
s=u.H
m.z=s.a(A.dN(l*3,0,!1,t))
m.at=s.a(A.dN(m.c,0,!1,t))
m.ax=s.a(A.dN(m.c,0,!1,t))
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
cE(){var t,s,r,q,p,o,n
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
s.bV(t,Math.abs(p),Math.abs(o),Math.abs(r))}},
ek(a,b,c){var t,s,r,q,p,o,n,m,l,k,j=this.as
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
cI(){var t,s,r,q,p,o,n,m=this
for(t=0,s=0;t<m.c;++t){for(r=0;r<3;++r,++s){q=m.z
q===$&&A.c()
if(!(s>=0&&s<q.length))return A.a(q,s)
p=B.b.C(B.a.h(0.5+q[s]),0,255)
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
cM(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
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
s=B.b.H(o+t,1)
q&2&&A.b(r)
if(!(p>=0&&p<256))return A.a(r,p)
r[p]=s
for(h=p+1;h<256;++h)r[h]=t},
cZ(a,b){var t,s,r,q
for(t=this.y,s=a*a,r=0;r<a;++r){t===$&&A.c()
q=B.a.h(b*((s-r*r)*256/s))
t.$flags&2&&A.b(t)
if(!(r<t.length))return A.a(t,r)
t[r]=q}},
cO(a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=a2.x
a3===$&&A.c()
t=a2.b
s=30+B.b.aR(t-1,3)
r=a4.gac()*a4.ga8()
q=B.b.bf(r,t)
p=Math.max(B.b.aR(q,100),1)
if(p===0)p=1
o=B.b.H(a3,8)
if(o<=1)o=0
a2.cZ(o,1024)
if(r<1509)n=a2.b=1
else if(B.b.aV(r,499)!==0)n=499
else if(B.b.aV(r,491)!==0)n=491
else n=B.b.aV(r,487)!==0?487:503
m=a4.gac()
l=a4.ga8()
for(k=a3,j=1024,i=0,h=0,g=0,f=0;f<q;){a3=a4.a
e=a3==null?null:a3.a0(h,g,null)
if(e==null)e=new A.a3()
d=e.gk()
c=e.gp()
b=e.gm()
if(f===0){a3=a2.z
a3===$&&A.c()
t=a2.e
t===$&&A.c()
B.c.n(a3,t*3,b)
B.c.n(a2.z,a2.e*3+1,c)
B.c.n(a2.z,a2.e*3+2,d)}a=a2.eC(b,c,d)
if(a<0)a=a2.dY(b,c,d)
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
if(o>0)a2.dU(a0,o,a,b,c,d)}i+=n
h+=n
while(h>m){h-=m;++g}while(i>=r){i-=r
g-=l}++f
if(B.b.aV(f,p)===0){j-=B.b.bf(j,s)
k-=B.b.aR(k,30)
o=B.b.H(k,8)
if(o<=1)o=0
a2.cZ(o,j)}}},
dU(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i=this,h=c-b,g=i.d-1
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
dY(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=1e30
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
eC(a,b,c){var t,s,r,q,p,o,n
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
A.dT.prototype={
P(a){var t,s,r=this
if(r.a===r.c.length)r.e7()
t=r.c
s=r.a++
t.$flags&2&&A.b(t)
if(!(s>=0&&s<t.length))return A.a(t,s)
t[s]=a&255},
aN(a){var t,s,r,q,p,o=this
u.L.a(a)
t=J.aK(a)
while(s=o.a,r=s+t,q=o.c,p=q.length,r>p)o.cH(r-p)
B.h.aO(q,s,r,a)
o.a+=t},
dC(a){this.P(B.b.H(a,8)&255)
this.P(a&255)
return},
aG(a){var t=this
t.P(B.b.H(a,24)&255)
t.P(B.b.H(a,16)&255)
t.P(B.b.H(a,8)&255)
t.P(a&255)
return},
cH(a){var t,s,r,q
if(a!=null)t=a
else{s=this.c.length
t=s===0?8192:s*2}s=this.c
r=s.length
q=new Uint8Array(r+t)
B.h.aO(q,0,r,s)
this.c=q},
e7(){return this.cH(null)},
gj(a){return this.a}}
A.e2.prototype={
dE(a){var t,s,r,q,p,o,n=a.gac(),m=a.ga8(),l=this.a
l===$&&A.c()
t=A.h1(null,null,B.l,0,B.S,m,null,0,1,l,n,!1)
n=t.a
s=n.gu(n)
s.t()
t.z=a.z
t.w=a.w
t.y=a.y
for(n=a.a,n=n.gu(n);n.t();){r=n.gD()
q=s.gD()
p=B.a.h(r.gk())
o=B.a.h(r.gp())
q.n(0,0,this.ek(B.a.h(r.gm()),o,p))
s.t()}return t}}
A.c7.prototype={
ez(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=u.H
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
c=this.cr((k/r-h)/(f-h),(l-e)/(d-e),(o-i)/(a0[2]-i))
if(!(j>=0&&j<b))return A.a(t,j)
t[j]=c.a
i=j+1
if(!(i<b))return A.a(t,i)
t[i]=c.b
i=j+2
if(!(i<b))return A.a(t,i)
t[i]=c.c}return new A.c7(s,t)},
cr(a,b,c){var t=this.a-1,s=B.a.C(a,0,1)*t,r=B.a.C(b,0,1)*t,q=B.a.C(c,0,1)*t,p=t-1,o=B.b.C(B.a.Y(s),0,p),n=B.b.C(B.a.Y(r),0,p),m=B.b.C(B.a.Y(q),0,p)
p=new A.eE(this,this.b,o,n,m,s-o,r-n,q-m)
return new A.X(p.$1(0),p.$1(1),p.$1(2))},
eG(a,b){var t,s,r,q,p,o,n,m=a.c
for(t=m.length,s=0;s<t;s+=3){r=m[s]
q=s+1
if(!(q<t))return A.a(m,q)
p=m[q]
o=s+2
if(!(o<t))return A.a(m,o)
n=this.cr(r,p,m[o])
p=m[s]
m.$flags&2&&A.b(m)
m[s]=p+(n.a-p)*b
p=m[q]
m[q]=p+(n.b-p)*b
p=m[o]
m[o]=p+(n.c-p)*b}}}
A.eC.prototype={
$1(a){return A.d3(a)===0},
$S:1}
A.eD.prototype={
$1(a){return A.d3(a)===1},
$S:1}
A.eE.prototype={
$1(a){var t,s,r,q,p,o,n,m=this,l=new A.eF(m.a,m.b,a),k=m.c,j=m.d,i=m.e,h=l.$3(k,j,i),g=k+1,f=l.$3(g,j,i),e=l.$3(k,j,i)
if(typeof f!=="number")return f.X()
if(typeof e!=="number")return A.fQ(e)
t=m.f
if(typeof h!=="number")return h.bk()
s=h+(f-e)*t
e=j+1
f=l.$3(k,e,i)
h=l.$3(g,e,i)
r=l.$3(k,e,i)
if(typeof h!=="number")return h.X()
if(typeof r!=="number")return A.fQ(r)
if(typeof f!=="number")return f.bk();++i
q=l.$3(k,j,i)
p=l.$3(g,j,i)
j=l.$3(k,j,i)
if(typeof p!=="number")return p.X()
if(typeof j!=="number")return A.fQ(j)
if(typeof q!=="number")return q.bk()
o=q+(p-j)*t
j=l.$3(k,e,i)
g=l.$3(g,e,i)
i=l.$3(k,e,i)
if(typeof g!=="number")return g.X()
if(typeof i!=="number")return A.fQ(i)
if(typeof j!=="number")return j.bk()
e=m.r
n=s+(f+(h-r)*t-s)*e
return n+(o+(j+(g-i)*t-o)*e-n)*m.w},
$S:8}
A.eF.prototype={
$3(a,b,c){var t=this.b,s=this.a.a
s=((c*s+b)*s+a)*3+this.c
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
$S:9}
A.c8.prototype={
gdu(){var t=this.b
return t.b==null&&t.c==null?"No face found, so the sticker was not placed.":"No face found, so the sticker was skipped."},
b4(a,b,c,d){var t,s,r,q,p
u.j.a(b)
t=this.b
s=t.b
if(s!=null)s.eG(a,d)
r=t.c
if(r!=null)A.jI(a,r,d)
q=t.d
if(q!=null)for(t=b.length,p=0;p<b.length;b.length===t||(0,A.F)(b),++p)A.jJ(a,b[p],q,d)},
gb2(){return this.a},
gb3(){return this.c}}
A.en.prototype={
cq(a,b){var t,s,r,q,p,o,n,m,l,k=this,j={},i=k.a,h=i.a,g=i.b
if(a<-0.5||b<-0.5||a>h-0.5||b>g-0.5)return!1
t=B.a.C(a,0,h-1)
s=B.a.C(b,0,g-1)
r=Math.min(B.a.Y(t),Math.max(0,h-2))
q=Math.min(B.a.Y(s),Math.max(0,g-2))
p=h===1?0:t-r
o=g===1?0:s-q
j.a=j.b=j.c=j.d=0
i=new A.fA(j,g,h,i.c)
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
A.fA.prototype={
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
$S:10}
A.Q.prototype={
ae(){return"StickerAnchor."+this.b}}
A.fd.prototype={}
A.fl.prototype={}
A.eG.prototype={}
A.eJ.prototype={
$1(a){return u.X.a(a).b===this.a},
$S:11}
A.eK.prototype={
$1(a){return u.X.a(a).b},
$S:12}
A.z.prototype={
B(a){return this.a}}
A.fo.prototype={}
A.e0.prototype={}
A.fM.prototype={
$1(a){return u.c8.a(a).gb2()===this.a},
$S:13}
A.fN.prototype={
$0(){return A.aJ(A.d7("Unknown filter "+this.a))},
$S:14}
A.dz.prototype={
gb2(){return"glow_makeup"},
gb3(){return B.bE},
b4(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h
u.j.a(b)
for(t=b.length,s=0.85*d,r=0.75*d,q=0.6*d,p=0.55*d,o=0;o<b.length;b.length===t||(0,A.F)(b),++o){n=b[o]
m=new A.b1(n)
l=new A.cq(a,n,m)
m=m.b6()
l.d=m
k=n.A(B.e)
j=n.A(B.f)
i=k.a-j.a
j=k.b-j.b
A.eu(a,m,Math.max(1,Math.sqrt(i*i+j*j)),q,0.05)
l.eV(B.cf,s)
l.ds(s)
l.dj(r,0.022,0.2)
l.dc(q)
l.d9(B.c9,p)
l.cm(B.cj,s,q)
l.eZ(d,B.ch)}A.c_(a,B.bb.b5(d))
h=c.b.i(0,"glow")
A.es(a,0.04,0.65*(h==null?0.6:h)*d,0.5,B.bX)
A.li(a,0.18*d)}}
A.dM.prototype={
gb2(){return"light"},
gb3(){return B.bF},
b4(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i
u.j.a(b)
A.c_(a,B.bc.b5(d))
A.lf(a,0.018,0.2*d)
A.es(a,0.04,0.32*d,0.65,B.aj)
t=c.eY("protectFace",!0)
for(s=b.length,r=0.18*d,q=0.25*d,p=0;p<b.length;b.length===s||(0,A.F)(b),++p){o=b[p]
n=new A.b1(o)
m=n.bo(o.L(B.o),0.25)
A.bv(a,m,B.w,1,0.97,0.95,r)
l=n.b6()
k=o.A(B.e)
j=o.A(B.f)
i=k.a-j.a
j=k.b-j.b
A.eu(a,l,Math.max(1,Math.sqrt(i*i+j*j)),q,0.05)
if(t)this.ew(a,m,d)}},
ew(a,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
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
A.dQ.prototype={
gb2(){return"neon_lines"},
gb3(){return B.bG},
b4(b2,b3,b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
u.j.a(b3)
t=b4.b.i(0,"glow")
s=0.5+(t==null?0.5:t)
r=b3.length===0?A.lq(b2):null
A.c_(b2,B.b8.b5(b5))
if(r!=null){this.em(b2,r,b5,s)
return}for(t=b3.length,q=0.9*b5,p=u.n,o=0.85*b5,n=b2.a,m=b2.b,l=u._,k=u.A,j=0;j<b3.length;b3.length===t||(0,A.F)(b3),++j){i=b3[j]
h=i.A(B.e)
g=i.A(B.f)
f=h.a-g.a
g=h.b-g.b
e=Math.max(1,Math.sqrt(f*f+g*g))
d=[new A.X(B.an,A.l([i.L(B.o)],k),!0),new A.X(B.a5,A.l([A.hX(i.L(B.o),1.1)],k),!0),new A.X(B.a5,A.l([i.L(B.e),i.L(B.f)],k),!0),new A.X(B.cd,A.l([i.L(B.az),i.L(B.at)],k),!1),new A.X(B.a5,A.l([i.L(B.c.bZ(B.c7,1)),i.L(B.ci)],k),!1),new A.X(B.an,A.l([i.L(B.K)],k),!0)]
for(h=e*0.012,g=e*0.022,f=e*0.12,c=e*0.07*s,b=e*0.011,a=e*0.35*s,a0=e*0.05,a1=0;a1<6;++a1){a2=d[a1]
a3=A.l([],l)
for(a4=a2.b,a5=J.aI(a4),a6=a5.gu(a4);a6.t();)B.c.b0(a3,a6.gD())
a7=A.aC(n,m,a3,a)
a8=A.aC(n,m,a3,a0)
for(a6=a5.gu(a4),a9=a2.c;a6.t();){b0=a6.gD()
a7.bY(b0,h,a9,c)
a8.bY(b0,b,a9,0.75)}a6=a2.a
b0=J.J(a6)
A.bv(b2,a7,B.w,b0.i(a6,0),b0.i(a6,1),b0.i(a6,2),o)
b1=A.aC(n,m,a3,f)
for(a3=a5.gu(a4);a3.t();)b1.bY(a3.gD(),h,a9,g)
A.bv(b2,b1,B.w,b0.i(a6,0),b0.i(a6,1),b0.i(a6,2),q)
a3=A.l([],p)
for(a4=b0.gu(a6);a4.t();)a3.push(0.55+0.45*a4.gD())
a4=a3.length
if(0>=a4)return A.a(a3,0)
a5=a3[0]
if(1>=a4)return A.a(a3,1)
a6=a3[1]
if(2>=a4)return A.a(a3,2)
A.bv(b2,a8,B.w,a5,a6,a3[2],b5)}}},
em(a4,a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=a4.a,a2=a4.b,a3=new Float32Array(A.G(a5))
A.d6(a3,a1,a2,1,Math.max(1,Math.max(a1,a2)*0.006*a7))
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
A.T.prototype={
eH(a,b,c){var t,s,r=A.jP(c),q=A.l([],u.x),p=a.gfb(),o=p.length,n=c.a,m=c.b,l=0
for(;l<p.length;p.length===o||(0,A.F)(p),++l)q.push(new A.cc(p[l],n,m))
t=B.a.C(b.a,0,1)
if(t>0)this.b4(r,q,b,t)
s=this.gb3().d&&q.length===0?this.gdu():null
return new A.fi(r.f7(),q.length,s)},
gdu(){return"No face found, so only the overall look was applied."}}
A.e3.prototype={
gb2(){return"rosy_haze"},
gb3(){return B.bH},
b4(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
u.j.a(b)
for(t=b.length,s=0.7*d,r=0.5*d,q=0.3*d,p=0;p<b.length;b.length===t||(0,A.F)(b),++p){o=b[p]
n=new A.b1(o)
m=new A.cq(a,o,n)
l=n.b6()
m.d=l
k=o.A(B.e)
j=o.A(B.f)
i=k.a-j.a
j=k.b-j.b
A.eu(a,l,Math.max(1,Math.sqrt(i*i+j*j)),q,0.05)
m.da(B.c6,s,1.15)
m.cm(B.bZ,s,r)
h=n.cf(0.0001)
n=o.I(1)
j=o.A(B.e)
i=o.A(B.f)
l=j.a-i.a
i=j.b-i.b
i=Math.max(1,Math.sqrt(l*l+i*i))
l=o.A(B.e)
j=o.A(B.f)
k=l.a-j.a
j=l.b-j.b
h.b9(n,i*0.12,Math.max(1,Math.sqrt(k*k+j*j))*0.08,0,0.6)
A.bv(a,h,B.r,0.93,0.42,0.52,r)}g=c.b.i(0,"haze")
if(g==null)g=0.5
A.c_(a,B.b7.b5(d))
A.lg(a,B.c5,0.55*g*d)
A.es(a,0.035,0.45*d,0.55,B.c1)}}
A.e6.prototype={
gb2(){return"serum"},
gb3(){return B.bI},
b4(a,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
u.j.a(a0)
A.c_(a,B.ba.b5(a2))
for(t=a0.length,s=0.25*a2,r=a1.b,q=0.9*a2,p=0.55*a2,o=0.7*a2,n=0.6*a2,m=0.35*a2,l=0.75*a2,k=a1.c,j=0,i=0;i<a0.length;a0.length===t||(0,A.F)(a0),++i){h=a0[i]
g=new A.b1(h)
f=new A.cq(a,h,g)
e=g.b6()
f.d=e
d=h.A(B.e)
c=h.A(B.f)
b=d.a-c.a
c=d.b-c.b
A.eu(a,e,Math.max(1,Math.sqrt(b*b+c*c)),l,0.06)
f.f_(q,1.1)
f.dc(p)
f.ds(o)
f.dj(n,0.022,0.12)
f.d9(B.c_,m)
f.cm(B.cm,p,q)
e=r.i(0,"freckles")
if(e==null)e=0
if(e>=0.5){e=f.d
if(e==null)e=f.d=g.b6()
A.iW(a,h,e,0.4,n,k+31*j)}e=f.d
A.bv(a,e==null?f.d=g.b6():e,B.r,1,0.95,0.92,s);++j}A.es(a,0.02,s,0.72,B.aj)}}
A.e7.prototype={
gb2(){return"soft_freckles"},
gb3(){return B.bJ},
b4(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
u.j.a(b)
A.c_(a,B.bd.b5(d))
for(t=b.length,s=0.35*d,r=0.25*d,q=c.c,p=c.b,o=0,n=0;n<b.length;b.length===t||(0,A.F)(b),++n,o=g){m=b[n]
l=new A.b1(m)
k=l.b6()
j=m.A(B.e)
i=m.A(B.f)
h=j.a-i.a
i=j.b-i.b
A.eu(a,k,Math.max(1,Math.sqrt(h*h+i*i)),s,0.05)
A.bv(a,l.cf(1.1),B.r,0.95,0.55,0.45,r)
g=o+1
i=p.i(0,"density")
j=i==null?0.55:i
A.iW(a,m,k,j,d,q+7919*o)}}}
A.ec.prototype={
gb2(){return"sunny_effect"},
gb3(){return B.bK},
b4(a,b,c,d){var t
u.j.a(b)
A.c_(a,B.b9.b5(d))
t=c.b.i(0,"sunGlow")
A.lh(a,0.92,-0.05,0.75,B.bW,0.45*((t==null?0.6:t)*d))
A.es(a,0.025,0.25*d,0.7,B.bQ)}}
A.H.prototype={
bk(a,b){return new A.H(this.a+b.a,this.b+b.b)},
X(a,b){return new A.H(this.a-b.a,this.b-b.b)},
bd(a,b){return new A.H(this.a*b,this.b*b)},
gj(a){var t=this.a,s=this.b
return Math.sqrt(t*t+s*s)},
aE(a,b){var t=this.a,s=this.b
return new A.H(t+(a.a-t)*b,s+(a.b-s)*b)},
B(a){return"Vec2("+B.a.dz(this.a,1)+", "+B.a.dz(this.b,1)+")"}}
A.dx.prototype={}
A.cc.prototype={
I(a){var t,s=this.a.a,r=a*2,q=s.length
if(!(r>=0&&r<q))return A.a(s,r)
t=s[r];++r
if(!(r<q))return A.a(s,r)
return new A.H(t*this.b,s[r]*this.c)},
L(a){var t,s
u.L.a(a)
t=A.l([],u._)
for(s=J.aZ(a);s.t();)t.push(this.I(s.gD()))
return t},
A(a){var t,s,r,q,p
u.L.a(a)
for(t=a.length,s=0,r=0,q=0;q<t;++q){p=this.I(a[q])
s+=p.a
r+=p.b}return new A.H(s/t,r/t)},
eI(a){var t,s,r,q,p,o,n,m
u.L.a(a)
for(t=1/0,s=1/0,r=-1/0,q=-1/0,p=0;p<36;++p){o=this.I(a[p])
n=o.a
t=Math.min(t,n)
m=o.b
s=Math.min(s,m)
r=Math.max(r,n)
q=Math.max(q,m)}return new A.bs([t,s,r,q])},
gdv(){var t=A.m(this.L(B.az),u.h),s=this.L(B.aA)
B.c.b0(t,new A.aE(s,A.U(s).l("aE<1>")))
return t},
gdq(){var t=A.m(this.L(B.at),u.h),s=this.L(B.au)
B.c.b0(t,new A.aE(s,A.U(s).l("aE<1>")))
return t}}
A.eP.prototype={
gfb(){var t,s,r,q,p=A.l([],u.q)
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,A.F)(t),++r){q=t[r]
if((q.a.length/2|0)>=468)p.push(q)}return p}}
A.ds.prototype={
ae(){return"ControlKind."+this.b}}
A.ar.prototype={}
A.as.prototype={}
A.eQ.prototype={
eY(a,b){var t=this.b.i(0,a)
if(t==null)t=b?1:0
return t>=0.5}}
A.eR.prototype={
$2(a,b){return new A.aS(A.V(a),A.d4(b),u.U)},
$S:15}
A.dO.prototype={}
A.fi.prototype={}
A.aD.prototype={
ae(){return"PixelBlend."+this.b}}
A.aq.prototype={
b5(a){var t,s,r,q=this,p=u.n,o=A.l([],p)
for(t=q.z,s=t.length,r=0;r<t.length;t.length===s||(0,A.F)(t),++r)o.push(t[r]*a)
p=A.l([],p)
for(t=q.Q,s=t.length,r=0;r<t.length;t.length===s||(0,A.F)(t),++r)p.push(t[r]*a)
return new A.aq(q.a*a,q.b*a,q.c*a,q.d*a,q.e*a,q.f*a,q.r*a,q.w*a,q.x*a,q.y*a,o,p)}}
A.fb.prototype={
gcl(a){return this.c<=0||this.d<=0},
bK(a,b){var t,s,r=this,q=a-r.a,p=b-r.b
if(q<0||p<0||q>=r.c||p>=r.d)return 0
t=r.r
s=p*r.c+q
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
dk(a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this
u.E.a(a6)
if(a6.length<3||a5.gcl(0))return
t=A.l([],u.n)
for(s=a5.d,r=a5.r,q=r.length,p=a5.c,o=r.$flags|0,n=a5.a,m=p-1,l=a5.b,k=0;k<s;++k){j=k+l+0.5
B.c.eJ(t)
for(i=0;h=a6.length,i<h;){g=a6[i];++i
f=a6[i%h]
h=g.b
if(!(h<=j&&f.b>j))e=f.b<=j&&h>j
else e=!0
if(e){e=g.a
B.c.K(t,e+(j-h)/(f.b-h)*(f.a-e))}}if(t.length<2)continue
B.c.dK(t)
for(h=k*p,d=0;e=d+1,c=t.length,e<c;d+=2){if(!(d<c))return A.a(t,d)
b=t[d]-n
a=t[e]-n
a0=Math.max(0,B.a.Y(b))
a1=Math.min(m,B.a.Y(a))
for(a2=a0;a2<=a1;a2=a3){a3=a2+1
a4=B.a.C(Math.min(a3,a)-Math.max(a2,b),0,1)
i=h+a2
if(!(i>=0&&i<q))return A.a(r,i)
if(a4>r[i]){o&2&&A.b(r)
r[i]=a4}}}}},
cw(b3,b4,b5,b6,b7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=b5+b6*3+1,a=b3.a,a0=b4.a,a1=c.a,a2=Math.max(0,B.a.Y(Math.min(a,a0)-b-a1)),a3=c.c,a4=Math.min(a3-1,B.a.a6(Math.max(a,a0)+b-a1)),a5=b3.b,a6=b4.b,a7=c.b,a8=Math.max(0,B.a.Y(Math.min(a5,a6)-b-a7)),a9=Math.min(c.d-1,B.a.a6(Math.max(a5,a6)+b-a7)),b0=a0-a,b1=a6-a5,b2=b0*b0+b1*b1
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
cv(a,b,c,d){return this.cw(a,b,c,d,1)},
bY(a,b,c,d){var t,s,r,q
u.E.a(a)
t=J.J(a)
s=c?t.gj(a):t.gj(a)-1
for(t=J.J(a),r=0;r<s;r=q){q=r+1
this.cw(t.i(a,r),t.i(a,B.b.aV(q,t.gj(a))),b,d,1)}},
b9(a7,a8,a9,b0,b1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=Math.max(a8,a9)*2.2,d=a7.a,c=f.a,b=Math.max(0,B.a.Y(d-e-c)),a=f.c,a0=Math.min(a-1,B.a.a6(d+e-c)),a1=a7.b,a2=f.b,a3=Math.max(0,B.a.Y(a1-e-a2)),a4=Math.min(f.d-1,B.a.a6(a1+e-a2)),a5=Math.cos(b0),a6=Math.sin(b0)
for(t=f.r,s=t.length,r=t.$flags|0,q=a3;q<=a4;++q){p=q+a2+0.5-a1
for(o=p*a6,n=p*a5,m=q*a,l=b;l<=a0;++l){k=l+c+0.5-d
j=(k*a5+o)/a8
i=(-k*a6+n)/a9
h=Math.exp(-(j*j+i*i)*1.4)*b1
g=m+l
if(!(g>=0&&g<s))return A.a(t,g)
if(h>t[g]){r&2&&A.b(t)
t[g]=h}}}},
d1(a,b,c,d){return this.b9(a,b,c,d,1)},
bh(a){var t=this
if(t.gcl(0))return
A.d6(t.r,t.c,t.d,1,a)},
c0(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(t=f.d,s=f.c,r=f.a,q=f.b,p=f.r,o=p.length,n=0;n<t;++n)for(m=n+q,l=n*s,k=0;k<s;++k){j=a.bK(k+r,m)
if(j>0){i=l+k
if(!(i>=0&&i<o))return A.a(p,i)
h=p[i]
g=j*b
if(g<0)g=0
else if(g>1)g=1
p.$flags&2&&A.b(p)
p[i]=h*(1-g)}}},
be(a){return this.c0(a,1)},
bS(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(t=f.d,s=f.c,r=f.r,q=r.length,p=f.a,o=f.b,n=r.$flags|0,m=0;m<t;++m)for(l=m*s,k=m+o,j=0;j<s;++j){i=l+j
if(!(i>=0&&i<q))return A.a(r,i)
h=r[i]
g=a.bK(j+p,k)
n&2&&A.b(r)
r[i]=h*g}}}
A.b1.prototype={
b7(a,b,c){var t,s,r,q
u.E.a(a)
t=c===1?a:A.hX(a,c)
s=this.a
r=b*Math.max(1,s.A(B.e).X(0,s.A(B.f)).gj(0))
q=A.aC(s.b,s.c,t,r*3+2)
q.dk(t)
if(r>0.4)q.bh(r)
return q},
bo(a,b){return this.b7(a,b,1)},
bv(a,b){var t=this,s=t.a
return t.cY(t.b7(s.L(B.e),a,b),t.b7(s.L(B.f),a,b))},
dd(a,b){var t=this,s=t.a
return t.cY(t.b7(s.gdv(),a,b),t.b7(s.gdq(),a,b))},
b6(){var t=this,s=t.a,r=t.bo(s.L(B.o),0.08)
r.be(t.bv(0.06,1.6))
r.c0(t.dd(0.05,1.3),0.9)
r.be(t.b7(s.L(B.K),0.04,1.12))
return r},
cf(a){var t,s,r,q,p,o,n,m,l,k,j=this.a,i=A.aC(j.b,j.c,j.L(B.o),0)
for(t=[B.cQ,B.cP],s=0;s<2;++s){r=t[s]
q=r.b
p=j.I(r.a).aE(j.I(q),0.25)
o=j.I(q)
n=r.c
m=j.I(n)
l=Math.atan2(o.b-m.b,o.a-m.a)
q=j.I(q)
n=j.I(n)
m=q.a-n.a
n=q.b-n.b
k=Math.sqrt(m*m+n*n)
n=j.A(B.e)
m=j.A(B.f)
q=n.a-m.a
m=n.b-m.b
m=Math.max(k*0.6,Math.max(1,Math.sqrt(q*q+m*m))*0.12)
q=j.A(B.e)
n=j.A(B.f)
o=q.a-n.a
n=q.b-n.b
i.b9(p,m*a,Math.max(1,Math.sqrt(o*o+n*n))*0.22*a,l,0.85)}i.be(this.bv(0.08,1.8))
return i},
dA(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.a,b=A.m(c.L(B.e),u.h)
B.c.b0(b,c.L(B.f))
t=A.aC(c.b,c.c,b,Math.max(1,c.A(B.e).X(0,c.A(B.f)).gj(0))*0.5)
for(b=[B.ao,B.av],s=a0>0,r=0;r<2;++r){q=c.L(b[r])
for(p=q.length-1,o=0;o<p;o=k){n=c.A(B.e)
m=c.A(B.f)
l=n.a-m.a
m=n.b-m.b
m=Math.max(1,Math.sqrt(l*l+m*m))
l=q.length
if(!(o<l))return A.a(q,o)
n=q[o]
k=o+1
if(!(k<l))return A.a(q,k)
l=q[k]
j=c.A(B.e)
i=c.A(B.f)
h=j.a-i.a
i=j.b-i.b
t.cv(n,l,m*a*(0.45+0.75*(1-o/p)),Math.max(1,Math.sqrt(h*h+i*i))*0.008)}if(s){p=q.length
if(0>=p)return A.a(q,0)
g=q[0]
if(2>=p)return A.a(q,2)
p=q[2]
n=g.a
m=n-p.a
l=g.b
p=l-p.b
f=Math.max(0.001,Math.sqrt(m*m+p*p))
j=c.A(B.e)
i=c.A(B.f)
h=j.a-i.a
i=j.b-i.b
i=Math.max(1,Math.sqrt(h*h+i*i))*a0
h=c.A(B.e)
j=c.A(B.f)
e=h.a-j.a
j=h.b-j.b
j=Math.max(1,Math.sqrt(e*e+j*j))
e=c.A(B.e)
h=c.A(B.f)
d=e.a-h.a
h=e.b-h.b
t.cv(g,new A.H(n+m/f*i,l+(p/f-0.45)*i),j*a*0.55,Math.max(1,Math.sqrt(d*d+h*h))*0.01)}}return t},
fa(a){return this.dA(a,0)},
eU(){var t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=u.h,f=A.m(h.gdv(),g)
B.c.b0(f,h.gdq())
B.c.b0(f,h.L(B.e))
B.c.b0(f,h.L(B.f))
t=A.aC(h.b,h.c,f,Math.max(1,h.A(B.e).X(0,h.A(B.f)).gj(0))*0.3)
for(f=[B.cN,B.cO],s=u.aw,r=u._,q=0;q<2;++q){p=f[q]
o=h.L(p.a)
n=h.L(p.b)
m=A.l([],r)
for(l=0;k=o.length,l<k;++l){j=n.length
i=B.a.aU(l/(k-1)*(j-1))
k=o[l]
if(!(i>=0&&i<j))return A.a(n,i)
B.c.K(m,k.aE(n[i],0.45))}k=A.m(o,g)
B.c.b0(k,new A.aE(m,s))
t.dk(k)}t.bh(Math.max(1,h.A(B.e).X(0,h.A(B.f)).gj(0))*0.05)
t.be(this.bv(0.01,1.05))
return t},
f0(a){var t,s,r,q,p,o,n,m,l,k,j=this.a,i=A.aC(j.b,j.c,j.L(B.o),0),h=j.I(197).aE(j.I(5),0.4),g=j.I(5).X(0,j.I(168))
i.b9(h,Math.max(1,j.A(B.e).X(0,j.A(B.f)).gj(0))*0.06*a,g.gj(0)*0.35*a,Math.atan2(g.b,g.a)-1.5707963267948966,0.85)
for(t=[B.cJ,B.cL],s=0;s<2;++s){r=t[s]
q=r.a
p=r.b
o=j.I(q).aE(j.I(p),0.55)
p=j.I(p)
q=j.I(q)
n=p.a-q.a
q=p.b-q.b
p=Math.sqrt(n*n+q*q)
m=j.A(B.e)
l=j.A(B.f)
k=m.a-l.a
l=m.b-l.b
l=Math.max(p*0.7,Math.max(1,Math.sqrt(k*k+l*l))*0.06)
k=j.A(B.e)
p=j.A(B.f)
m=k.a-p.a
p=k.b-p.b
i.d1(o,l*a,Math.max(1,Math.sqrt(m*m+p*p))*0.07*a,Math.atan2(q,n))}i.b9(j.I(0).bk(0,j.I(0).X(0,j.I(13)).bd(0,0.6)),Math.max(1,j.A(B.e).X(0,j.A(B.f)).gj(0))*0.06*a,Math.max(1,j.A(B.e).X(0,j.A(B.f)).gj(0))*0.025*a,0,0.6)
i.b9(j.I(152).aE(j.I(17),0.45),Math.max(1,j.A(B.e).X(0,j.A(B.f)).gj(0))*0.08*a,Math.max(1,j.A(B.e).X(0,j.A(B.f)).gj(0))*0.05*a,0,0.5)
i.be(this.bv(0.05,1.6))
return i},
cY(a,b){var t,s,r,q,p,o,n=a.a,m=b.a,l=Math.min(n,m),k=a.b,j=b.b,i=Math.min(k,j),h=this.a,g=A.ib(l,i,Math.max(n+a.c,m+b.c)-l,Math.max(k+a.d,j+b.d)-i,h.b,h.c)
for(n=g.d,m=g.c,k=g.r,j=k.$flags|0,t=0;t<n;++t)for(s=t+i,h=t*m,r=0;r<m;++r){q=r+l
p=h+r
o=Math.max(a.bK(q,s),b.bK(q,s))
j&2&&A.b(k)
if(!(p>=0&&p<k.length))return A.a(k,p)
k[p]=o}return g}}
A.cq.prototype={
cm(a,b,c){var t,s,r,q,p,o
u.H.a(a)
if(b<=0)return
t=this.c
s=t.a
r=t.bo(s.L(B.K),0.025)
r.be(t.b7(s.L(B.c4),0.0125,1.05))
s=this.a
A.ab(s,r,B.a8,a,b*0.75)
A.ab(s,r,B.r,a,b*0.5)
if(c>0){t=this.b
q=t.I(14).aE(t.I(17),0.55)
p=t.I(291).X(0,t.I(61)).gj(0)
o=A.aC(s.a,s.b,t.L(B.K),Math.max(1,t.A(B.e).X(0,t.A(B.f)).gj(0))*0.1)
o.d1(q,p*0.16,Math.max(1,t.A(B.e).X(0,t.A(B.f)).gj(0))*0.025,0)
o.bS(r)
A.ab(s,o,B.w,B.cc,c*0.6)}},
da(a,b,c){var t,s,r
u.H.a(a)
if(b<=0)return
t=this.c
s=t.cf(c)
r=this.b
s.bh(Math.max(1,r.A(B.e).X(0,r.A(B.f)).gj(0))*0.08)
s.bS(t.bo(t.a.L(B.o),0.06))
t=this.a
A.ab(t,s,B.a8,a,b*0.18)
A.ab(t,s,B.A,A.ia(a,0.3),b*0.45)
A.ab(t,s,B.r,a,b*0.35)},
d9(a,b){return this.da(a,b,1)},
dj(a,b,c){if(a<=0)return
A.ab(this.a,this.c.dA(b,c),B.A,B.ck,a)},
ds(a){var t,s,r
if(a<=0)return
t=this.c
s=t.fa(0.05)
r=this.b
s.bh(Math.max(1,r.A(B.e).X(0,r.A(B.f)).gj(0))*0.012)
s.c0(t.bv(0,0.92),0.6)
A.ab(this.a,s,B.A,B.bT,a*0.8)},
dc(a){if(a<=0)return
A.ab(this.a,this.c.dd(0.025,1.05),B.A,B.c3,a*0.55)},
eV(a,b){var t,s
u.H.a(a)
if(b<=0)return
t=this.c.eU()
s=this.a
A.ab(s,t,B.A,A.ia(a,0.35),b*0.6)
A.ab(s,t,B.r,a,b*0.5)},
dl(a,b,c){var t,s
u.H.a(b)
if(a<=0)return
t=this.c
s=t.f0(c)
s.bS(t.bo(t.a.L(B.o),0.04))
t=this.b
s.bh(Math.max(1,t.A(B.e).X(0,t.A(B.f)).gj(0))*0.03)
t=this.a
A.ab(t,s,B.r,b,a*0.5)
A.ab(t,s,B.w,b,a*0.18)},
eZ(a,b){return this.dl(a,b,1)},
f_(a,b){return this.dl(a,B.ce,b)}}
A.dy.prototype={
f7(){var t,s,r,q,p,o,n=this.a,m=this.b,l=n*m*4,k=new Uint8Array(l)
for(t=this.c,s=t.length,r=0,q=0;q<s;r+=4,q+=3){p=A.h0(t[q])
if(!(r<l))return A.a(k,r)
k[r]=p
p=r+1
o=q+1
if(!(o<s))return A.a(t,o)
o=A.h0(t[o])
if(!(p<l))return A.a(k,p)
k[p]=o
o=r+2
p=q+2
if(!(p<s))return A.a(t,p)
p=A.h0(t[p])
if(!(o<l))return A.a(k,o)
k[o]=p
p=r+3
if(!(p<l))return A.a(k,p)
k[p]=255}return new A.dO(n,m,k)},
dg(a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
if(a4<=1)return new A.dy(a3.a,a3.b,new Float32Array(A.G(a3.c)))
t=a3.a
s=Math.max(1,B.b.bf(t,a4))
r=a3.b
q=Math.max(1,B.b.bf(r,a4))
p=A.hZ(s,q)
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
dG(a,b,a0){var t,s,r,q,p,o,n,m=this.a,l=m-1,k=B.a.C(a*m-0.5,0,l),j=this.b,i=j-1,h=B.a.C(b*j-0.5,0,i),g=B.a.Y(k),f=B.a.Y(h),e=Math.min(g+1,l),d=k-g,c=h-f
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
A.fj.prototype={
ba(){var t=this.a
t^=t<<13
t^=t>>>17
return this.a=(t^t<<5)>>>0},
dt(){var t=Math.max(1e-9,this.ba()/4294967296),s=this.ba()
return Math.sqrt(-2*Math.log(t))*Math.cos(6.283185307179586*(s/4294967296))}}
A.fV.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=A.hu(A.hu(a).data),e=f.id
try{t=f.customJson
if(t!=null){l=A.V(f.filterId)
k=A.V(t)
j=A.jH(k)
$.jG.n(0,l,k)
k=A.l([],u.s)
if(j.b!=null)k.push("colour look")
if(j.c!=null)k.push("overlay")
i=j.d!=null
if(i)k.push("face sticker")
B.c.bx(k," + ")
$.hU.n(0,l,new A.c8(l,j,new A.as(l,i)))}s=new A.dO(A.q(A.d3(f.width)),A.q(A.d3(f.height)),u.Y.a(f.pixels))
r=A.jL(A.V(f.landmarks))
q=A.jM(u.cg.a(B.a_.cg(A.V(f.settings),null)))
p=A.lu(A.V(f.filterId)).eH(r,q,s)
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
this.a.postMessage(n,A.l([u.af.a(B.h.gE(p.a.c))],u.V))}catch(g){m=A.ev(g)
h={}
h.id=e
h.error=J.aL(m)
this.a.postMessage(h)}},
$S:16};(function aliases(){var t=J.aR.prototype
t.dO=t.B
t=A.w.prototype
t.cz=t.aI})();(function installTearOffs(){var t=hunkHelpers._static_2
t(J,"kV","i7",17)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.A,null)
r(A.A,[A.h8,J.dE,A.cL,J.b_,A.C,A.w,A.fk,A.d,A.b5,A.bp,A.cb,A.R,A.aW,A.a8,A.bC,A.aM,A.bq,A.bS,A.fp,A.fc,A.K,A.f8,A.O,A.cn,A.em,A.eh,A.ea,A.ep,A.fu,A.fF,A.ag,A.ej,A.eq,A.e9,A.dt,A.b0,A.ft,A.fv,A.dS,A.cM,A.fw,A.bD,A.aS,A.b8,A.e4,A.cO,A.eT,A.fr,A.fs,A.eM,A.a7,A.fx,A.fB,A.eZ,A.dD,A.dU,A.B,A.bF,A.dw,A.b3,A.eL,A.eN,A.cG,A.fh,A.cd,A.cD,A.dV,A.eY,A.bL,A.e2,A.dT,A.c7,A.T,A.en,A.fd,A.fl,A.eG,A.z,A.fo,A.e0,A.H,A.dx,A.cc,A.eP,A.ar,A.as,A.eQ,A.dO,A.fi,A.aq,A.fb,A.b1,A.cq,A.dy,A.fj])
r(J.dE,[J.dH,J.cm,J.co,J.bN,J.bO,J.bM,J.aQ])
r(J.co,[J.aR,J.v,A.aT,A.cx])
r(J.aR,[J.dZ,J.bo,J.aA])
s(J.dG,A.cL)
s(J.f2,J.v)
r(J.bM,[J.cl,J.dI])
r(A.C,[A.bP,A.cQ,A.dJ,A.ef,A.e5,A.ei,A.d8,A.an,A.cS,A.ee,A.cN,A.dr])
s(A.bT,A.w)
s(A.ap,A.bT)
r(A.d,[A.c9,A.cT,A.cU,A.eg,A.eo,A.de,A.df,A.dg,A.dh,A.di,A.dj,A.dl,A.dm,A.dn,A.dp,A.dq,A.c4,A.b4,A.N,A.bb,A.bc,A.bd,A.be,A.bf,A.bg,A.bh,A.bi,A.bj,A.bk,A.bl,A.bm,A.a3])
r(A.c9,[A.a0,A.ca,A.aB])
r(A.a0,[A.cP,A.cr,A.aE,A.el])
r(A.a8,[A.bW,A.bX,A.bY])
s(A.ah,A.bW)
s(A.X,A.bX)
s(A.bs,A.bY)
r(A.aM,[A.dd,A.dc,A.ed,A.fR,A.fT,A.eC,A.eD,A.eE,A.eF,A.fA,A.eJ,A.eK,A.fM,A.fV])
r(A.dd,[A.eB,A.fS,A.f9,A.fa,A.eV,A.eW,A.eX,A.eR])
r(A.bC,[A.c6,A.bE])
s(A.c5,A.bS)
s(A.aN,A.c5)
s(A.cB,A.cQ)
r(A.ed,[A.e8,A.bB])
r(A.K,[A.ad,A.ek])
s(A.cp,A.ad)
s(A.b6,A.aT)
r(A.cx,[A.dP,A.P])
r(A.P,[A.cV,A.cX])
s(A.cW,A.cV)
s(A.aU,A.cW)
s(A.cY,A.cX)
s(A.a2,A.cY)
r(A.aU,[A.cs,A.ct])
r(A.a2,[A.cu,A.cv,A.cw,A.cy,A.cz,A.cA,A.b7])
s(A.cZ,A.ei)
r(A.dt,[A.fD,A.fC,A.ez,A.ey,A.f3])
r(A.b0,[A.ex,A.du,A.dK])
s(A.dL,A.du)
s(A.f6,A.fD)
s(A.f5,A.fC)
s(A.f7,A.e9)
r(A.an,[A.cI,A.dB])
s(A.fH,A.fr)
s(A.fI,A.fs)
r(A.fv,[A.bV,A.db,A.eA,A.ao,A.S,A.da,A.aP,A.bR,A.cF,A.aV,A.e_,A.eU,A.eS,A.Q,A.ds,A.aD])
s(A.dC,A.dD)
s(A.cC,A.dU)
r(A.c4,[A.dk,A.c3])
s(A.dv,A.bF)
s(A.dF,A.cG)
s(A.f1,A.fh)
s(A.ff,A.eL)
s(A.fg,A.eN)
r(A.N,[A.ce,A.cf,A.cg,A.ch,A.ci,A.cj,A.bG,A.bH,A.bI,A.ck,A.bJ,A.bK])
r(A.cD,[A.cE,A.ba])
s(A.dR,A.e2)
r(A.T,[A.c8,A.dz,A.dM,A.dQ,A.e3,A.e6,A.e7,A.ec])
s(A.fN,A.dc)
t(A.bT,A.aW)
t(A.cV,A.w)
t(A.cW,A.R)
t(A.cX,A.w)
t(A.cY,A.R)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",r:"double",j:"num",u:"String",aa:"bool",b8:"Null",t:"List",A:"Object",a1:"Map",D:"JSObject"},mangledNames:{},types:["~(u,b3)","aa(r)","@(@)","@(@,u)","@(u)","~(@,@)","~(A?,A?)","~(h,i1)","r(h)","r(h,h,h)","~(h,h,r)","aa(Q)","u(Q)","aa(T)","0&()","aS<u,r>(@,@)","b8(D)","h(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.ah&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.X&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.bs&&A.lJ(a,b.a)}}
A.kz(v.typeUniverse,JSON.parse('{"aA":"aR","dZ":"aR","bo":"aR","lY":"aT","dH":{"aa":[],"y":[]},"cm":{"y":[]},"co":{"D":[]},"aR":{"D":[]},"v":{"t":["1"],"D":[],"d":["1"]},"dG":{"cL":[]},"f2":{"v":["1"],"t":["1"],"D":[],"d":["1"]},"b_":{"p":["1"]},"bM":{"r":[],"j":[],"ax":["j"]},"cl":{"r":[],"h":[],"j":[],"ax":["j"],"y":[]},"dI":{"r":[],"j":[],"ax":["j"],"y":[]},"aQ":{"u":[],"ax":["u"],"fe":[],"y":[]},"bP":{"C":[]},"ap":{"w":["h"],"aW":["h"],"t":["h"],"d":["h"],"w.E":"h","aW.E":"h"},"c9":{"d":["1"]},"a0":{"d":["1"]},"cP":{"a0":["1"],"d":["1"],"a0.E":"1","d.E":"1"},"b5":{"p":["1"]},"cr":{"a0":["2"],"d":["2"],"a0.E":"2","d.E":"2"},"cT":{"d":["1"],"d.E":"1"},"bp":{"p":["1"]},"ca":{"d":["1"],"d.E":"1"},"cb":{"p":["1"]},"bT":{"w":["1"],"aW":["1"],"t":["1"],"d":["1"]},"aE":{"a0":["1"],"d":["1"],"a0.E":"1","d.E":"1"},"ah":{"bW":[],"a8":[]},"X":{"bX":[],"a8":[]},"bs":{"bY":[],"a8":[]},"bC":{"a1":["1","2"]},"c6":{"bC":["1","2"],"a1":["1","2"]},"cU":{"d":["1"],"d.E":"1"},"bq":{"p":["1"]},"bE":{"bC":["1","2"],"a1":["1","2"]},"c5":{"bS":["1"],"d":["1"]},"aN":{"c5":["1"],"bS":["1"],"d":["1"]},"cB":{"C":[]},"dJ":{"C":[]},"ef":{"C":[]},"aM":{"b2":[]},"dc":{"b2":[]},"dd":{"b2":[]},"ed":{"b2":[]},"e8":{"b2":[]},"bB":{"b2":[]},"e5":{"C":[]},"ad":{"K":["1","2"],"ha":["1","2"],"a1":["1","2"],"K.K":"1","K.V":"2"},"aB":{"d":["1"],"d.E":"1"},"O":{"p":["1"]},"cp":{"ad":["1","2"],"K":["1","2"],"ha":["1","2"],"a1":["1","2"],"K.K":"1","K.V":"2"},"bW":{"a8":[]},"bX":{"a8":[]},"bY":{"a8":[]},"cn":{"kb":[],"fe":[]},"em":{"cK":[],"bQ":[]},"eg":{"d":["cK"],"d.E":"cK"},"eh":{"p":["cK"]},"ea":{"bQ":[]},"eo":{"d":["bQ"],"d.E":"bQ"},"ep":{"p":["bQ"]},"b6":{"aT":[],"D":[],"y":[]},"aT":{"D":[],"y":[]},"cx":{"D":[]},"dP":{"D":[],"y":[]},"P":{"a_":["1"],"D":[]},"aU":{"w":["r"],"P":["r"],"t":["r"],"a_":["r"],"D":[],"d":["r"],"R":["r"]},"a2":{"w":["h"],"P":["h"],"t":["h"],"a_":["h"],"D":[],"d":["h"],"R":["h"]},"cs":{"aU":[],"fZ":[],"w":["r"],"P":["r"],"t":["r"],"a_":["r"],"D":[],"d":["r"],"R":["r"],"y":[],"w.E":"r"},"ct":{"aU":[],"h_":[],"w":["r"],"P":["r"],"t":["r"],"a_":["r"],"D":[],"d":["r"],"R":["r"],"y":[],"w.E":"r"},"cu":{"a2":[],"h4":[],"w":["h"],"P":["h"],"t":["h"],"a_":["h"],"D":[],"d":["h"],"R":["h"],"y":[],"w.E":"h"},"cv":{"a2":[],"h5":[],"w":["h"],"P":["h"],"t":["h"],"a_":["h"],"D":[],"d":["h"],"R":["h"],"y":[],"w.E":"h"},"cw":{"a2":[],"h6":[],"w":["h"],"P":["h"],"t":["h"],"a_":["h"],"D":[],"d":["h"],"R":["h"],"y":[],"w.E":"h"},"cy":{"a2":[],"ho":[],"w":["h"],"P":["h"],"t":["h"],"a_":["h"],"D":[],"d":["h"],"R":["h"],"y":[],"w.E":"h"},"cz":{"a2":[],"hp":[],"w":["h"],"P":["h"],"t":["h"],"a_":["h"],"D":[],"d":["h"],"R":["h"],"y":[],"w.E":"h"},"cA":{"a2":[],"w":["h"],"P":["h"],"t":["h"],"a_":["h"],"D":[],"d":["h"],"R":["h"],"y":[],"w.E":"h"},"b7":{"a2":[],"cR":[],"w":["h"],"P":["h"],"t":["h"],"a_":["h"],"D":[],"d":["h"],"R":["h"],"y":[],"w.E":"h"},"ei":{"C":[]},"cZ":{"C":[]},"w":{"t":["1"],"d":["1"]},"K":{"a1":["1","2"]},"bS":{"d":["1"]},"ek":{"K":["u","@"],"a1":["u","@"],"K.K":"u","K.V":"@"},"el":{"a0":["u"],"d":["u"],"a0.E":"u","d.E":"u"},"ex":{"b0":["t<h>","u"]},"du":{"b0":["u","t<h>"]},"dK":{"b0":["A?","u"]},"dL":{"b0":["u","t<h>"]},"r":{"j":[],"ax":["j"]},"h":{"j":[],"ax":["j"]},"t":{"d":["1"]},"j":{"ax":["j"]},"cK":{"bQ":[]},"u":{"ax":["u"],"fe":[]},"d8":{"C":[]},"cQ":{"C":[]},"an":{"C":[]},"cI":{"C":[]},"dB":{"C":[]},"cS":{"C":[]},"ee":{"C":[]},"cN":{"C":[]},"dr":{"C":[]},"dS":{"C":[]},"cM":{"C":[]},"e4":{"p":["h"]},"dC":{"dD":[]},"cC":{"dU":[]},"B":{"p":["j"]},"de":{"o":[],"d":["j"],"d.E":"j"},"df":{"o":[],"d":["j"],"d.E":"j"},"dg":{"o":[],"d":["j"],"d.E":"j"},"dh":{"o":[],"d":["j"],"d.E":"j"},"di":{"o":[],"d":["j"],"d.E":"j"},"dj":{"o":[],"d":["j"],"d.E":"j"},"dl":{"o":[],"d":["j"],"d.E":"j"},"dm":{"o":[],"d":["j"],"d.E":"j"},"dn":{"o":[],"d":["j"],"d.E":"j"},"dp":{"o":[],"d":["j"],"d.E":"j"},"dq":{"o":[],"d":["j"],"d.E":"j"},"c4":{"o":[],"d":["j"],"d.E":"j"},"dk":{"o":[],"d":["j"],"d.E":"j"},"c3":{"o":[],"d":["j"],"d.E":"j"},"dv":{"bF":[]},"dF":{"cG":[]},"b4":{"d":["k"],"d.E":"k"},"N":{"d":["k"]},"ce":{"N":[],"d":["k"],"d.E":"k"},"cf":{"N":[],"d":["k"],"d.E":"k"},"cg":{"N":[],"d":["k"],"d.E":"k"},"ch":{"N":[],"d":["k"],"d.E":"k"},"ci":{"N":[],"d":["k"],"d.E":"k"},"cj":{"N":[],"d":["k"],"d.E":"k"},"bG":{"N":[],"d":["k"],"d.E":"k"},"bH":{"N":[],"d":["k"],"d.E":"k"},"bI":{"N":[],"d":["k"],"d.E":"k"},"ck":{"N":[],"d":["k"],"d.E":"k"},"bJ":{"N":[],"d":["k"],"d.E":"k"},"bK":{"N":[],"d":["k"],"d.E":"k"},"cE":{"cD":[]},"ba":{"cD":[]},"bb":{"k":[],"o":[],"d":["j"],"p":["k"],"d.E":"j"},"bc":{"k":[],"o":[],"d":["j"],"p":["k"],"d.E":"j"},"bd":{"k":[],"o":[],"d":["j"],"p":["k"],"d.E":"j"},"be":{"k":[],"o":[],"d":["j"],"p":["k"],"d.E":"j"},"bf":{"k":[],"o":[],"d":["j"],"p":["k"],"d.E":"j"},"bg":{"k":[],"o":[],"d":["j"],"p":["k"],"d.E":"j"},"dV":{"p":["k"]},"bh":{"k":[],"o":[],"d":["j"],"p":["k"],"d.E":"j"},"bi":{"k":[],"o":[],"d":["j"],"p":["k"],"d.E":"j"},"bj":{"k":[],"o":[],"d":["j"],"p":["k"],"d.E":"j"},"bk":{"k":[],"o":[],"d":["j"],"p":["k"],"d.E":"j"},"bl":{"k":[],"o":[],"d":["j"],"p":["k"],"d.E":"j"},"bm":{"k":[],"o":[],"d":["j"],"p":["k"],"d.E":"j"},"a3":{"k":[],"o":[],"d":["j"],"p":["k"],"d.E":"j"},"dR":{"e2":[]},"c8":{"T":[]},"dz":{"T":[]},"dM":{"T":[]},"dQ":{"T":[]},"e3":{"T":[]},"e6":{"T":[]},"e7":{"T":[]},"ec":{"T":[]},"h6":{"t":["h"],"d":["h"]},"cR":{"t":["h"],"d":["h"]},"ke":{"t":["h"],"d":["h"]},"h4":{"t":["h"],"d":["h"]},"ho":{"t":["h"],"d":["h"]},"h5":{"t":["h"],"d":["h"]},"hp":{"t":["h"],"d":["h"]},"fZ":{"t":["r"],"d":["r"]},"h_":{"t":["r"],"d":["r"]},"k":{"o":[],"p":["k"],"d":["j"]}}'))
A.ky(v.typeUniverse,JSON.parse('{"c9":1,"bT":1,"P":1,"e9":2,"dt":2}'))
var u=(function rtii(){var t=A.aj
return{G:t("o"),W:t("ax<@>"),M:t("aN<u>"),C:t("C"),Z:t("b2"),D:t("bE<S,h>"),P:t("b3"),r:t("i1"),I:t("N"),l:t("d<r>"),v:t("d<@>"),w:t("d<h>"),x:t("v<cc>"),q:t("v<dx>"),R:t("v<ar>"),g:t("v<b4>"),A:t("v<t<H>>"),B:t("v<t<h>>"),V:t("v<b6>"),f:t("v<A>"),d:t("v<cG>"),J:t("v<+(H,H,H,r)>"),s:t("v<u>"),k:t("v<cR>"),_:t("v<H>"),n:t("v<r>"),b:t("v<@>"),t:t("v<h>"),e:t("v<cR?>"),T:t("cm"),m:t("D"),O:t("aA"),da:t("a_<@>"),j:t("t<cc>"),E:t("t<H>"),H:t("t<r>"),c:t("t<@>"),L:t("t<h>"),U:t("aS<u,r>"),aN:t("a1<u,u>"),cg:t("a1<u,@>"),bC:t("a1<@,@>"),aE:t("a1<u,A?>"),af:t("b6"),d2:t("aU"),cu:t("a2"),Y:t("b7"),a:t("b8"),K:t("A"),c8:t("T"),cY:t("m_"),F:t("+()"),a0:t("cK"),aw:t("aE<H>"),X:t("Q"),N:t("u"),ck:t("u(Q)"),bW:t("y"),p:t("cR"),cr:t("bo"),h:t("H"),bj:t("cT<Q>"),y:t("aa"),cZ:t("aa(Q)"),i:t("r"),S:t("h"),bc:t("i_<b8>?"),z:t("D?"),aL:t("t<@>?"),u:t("t<h>?"),cc:t("t<h?>?"),a1:t("a1<u,u>?"),Q:t("A?"),aD:t("u?"),cG:t("aa?"),dd:t("r?"),a3:t("h?"),ae:t("j?"),o:t("j"),cQ:t("~(u,@)")}})();(function constants(){var t=hunkHelpers.makeConstList
B.bL=J.dE.prototype
B.c=J.v.prototype
B.b=J.cl.prototype
B.a=J.bM.prototype
B.k=J.aQ.prototype
B.bM=J.aA.prototype
B.bN=J.co.prototype
B.L=A.cs.prototype
B.cr=A.ct.prototype
B.cs=A.cu.prototype
B.ct=A.cv.prototype
B.cu=A.cw.prototype
B.z=A.cy.prototype
B.a7=A.cz.prototype
B.h=A.b7.prototype
B.aD=J.dZ.prototype
B.a9=J.bo.prototype
B.Z=new A.da(0,"direct")
B.aa=new A.da(1,"alpha")
B.N=new A.db(0,"littleEndian")
B.B=new A.db(1,"bigEndian")
B.ab=new A.ey()
B.dd=new A.ez()
B.aI=new A.cb(A.aj("cb<0&>"))
B.ac=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.aR=function() {
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
B.aW=function(getTagFallback) {
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
B.aS=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.aV=function(hooks) {
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
B.aU=function(hooks) {
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
B.aT=function(hooks) {
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

B.a_=new A.dK()
B.ae=new A.dL()
B.af=new A.f6()
B.aY=new A.f7()
B.b_=new A.dS()
B.C=new A.fk()
B.b4=new A.fH()
B.ag=new A.fI()
B.O=new A.ao(0,"rgba")
B.P=new A.ao(1,"bgra")
B.a0=new A.ao(2,"abgr")
B.Q=new A.ao(3,"argb")
B.ah=new A.ao(4,"rgb")
B.a1=new A.ao(5,"bgr")
B.b5=new A.ao(6,"grayAlpha")
B.b6=new A.ao(7,"red")
B.ai=new A.eA(4,"luminance")
B.ca=t([0.04,-0.01,0.025],u.n)
B.cg=t([0.04,0,0.015],u.n)
B.b7=new A.aq(0.12,0,-0.12,-0.05,0,0.25,0.45,0,0,0,B.ca,B.cg)
B.cn=t([0,-0.01,0.04],u.n)
B.c8=t([0.02,-0.02,0.05],u.n)
B.b8=new A.aq(-0.75,0,0.2,-0.35,0,0,0,0,0,0,B.cn,B.c8)
B.cb=t([0.02,0.008,-0.02],u.n)
B.cl=t([0.05,0.025,-0.035],u.n)
B.b9=new A.aq(0.28,0,0.12,0.08,0.35,0.75,0.08,0.25,-0.15,0,B.cb,B.cl)
B.y=t([0,0,0],u.n)
B.ba=new A.aq(0.1,0,0.05,0,0.12,0.06,0,0,-0.1,0,B.y,B.y)
B.c2=t([0.02,0.01,0],u.n)
B.bb=new A.aq(0,0,0.18,0.12,0.1,0.12,0,-0.3,0,0,B.y,B.c2)
B.bY=t([0.012,0.012,0.02],u.n)
B.bc=new A.aq(0.25,0,-0.08,-0.06,0,-0.05,0,0.4,-0.25,0.06,B.y,B.bY)
B.bd=new A.aq(0.05,0,0,0,0.1,0.18,0,0,0,0,B.y,B.y)
B.be=new A.z("Unsupported filter version (expected 1).")
B.bf=new A.z("This is not a PNG file.")
B.bg=new A.z("The PNG file could not be read.")
B.bh=new A.z("This JSON file could not be read.")
B.R=new A.z("The PNG file is damaged.")
B.bi=new A.z('"name" must be text.')
B.bj=new A.z('"lut.size"/"lut.rgb16" have the wrong type.')
B.bk=new A.z('"lut" needs either "cube" text or "size" + "rgb16".')
B.bl=new A.z('"name" is too long.')
B.bm=new A.z('The filter needs at least one of "lut", "overlay" or "sticker".')
B.bn=new A.z("This PNG has no transparency. Overlays and stickers need a transparent background.")
B.bo=new A.z("LUT_3D_SIZE is missing before the colour table.")
B.bp=new A.z("The colour table has too many rows.")
B.bq=new A.z("LUT size must be between 2 and 65.")
B.br=new A.z('"lut.cube" must be text.')
B.bs=new A.z("LUT_3D_SIZE must be between 2 and 65.")
B.bt=new A.z("The image is larger than 5 MB.")
B.bu=new A.z("The colour table data is not valid base64.")
B.bv=new A.z('This JSON file is not a Photo Effects filter ("format" must be "photo-effects-filter").')
B.bw=new A.z("Not a 3D .cube file (LUT_3D_SIZE missing).")
B.bx=new A.z("DOMAIN_MAX must be larger than DOMAIN_MIN.")
B.by=new A.z("1D LUTs are not supported; please use a 3D .cube file.")
B.bz=new A.z("The colour table has the wrong length.")
B.bA=new A.z("LUT_3D_SIZE appears twice.")
B.bB=new A.z("This PNG is (almost) fully opaque. Overlays and stickers need a transparent background.")
B.bC=new A.z("The PNG is too large (max 8192 px per side).")
B.bD=new A.z("This PNG is completely transparent.")
B.de=new A.ds(0,"slider")
B.aJ=new A.ar()
B.dg=t([B.aJ],u.R)
B.bE=new A.as("glow_makeup",!0)
B.df=new A.ds(1,"toggle")
B.aK=new A.ar()
B.dh=t([B.aK],u.R)
B.bF=new A.as("light",!0)
B.aL=new A.ar()
B.di=t([B.aL],u.R)
B.bG=new A.as("neon_lines",!0)
B.aM=new A.ar()
B.dj=t([B.aM],u.R)
B.bH=new A.as("rosy_haze",!0)
B.aN=new A.ar()
B.dk=t([B.aN],u.R)
B.bI=new A.as("serum",!0)
B.aO=new A.ar()
B.dl=t([B.aO],u.R)
B.bJ=new A.as("soft_freckles",!0)
B.aP=new A.ar()
B.dm=t([B.aP],u.R)
B.bK=new A.as("sunny_effect",!1)
B.t=new A.S(0,"uint1")
B.u=new A.S(1,"uint2")
B.D=new A.S(10,"float32")
B.E=new A.S(11,"float64")
B.v=new A.S(2,"uint4")
B.l=new A.S(3,"uint8")
B.q=new A.S(4,"uint16")
B.x=new A.S(5,"uint32")
B.F=new A.S(6,"int8")
B.G=new A.S(7,"int16")
B.H=new A.S(8,"int32")
B.I=new A.S(9,"float16")
B.S=new A.eS(2,"sequence")
B.a2=new A.eU(1,"deflate")
B.d=new A.aP(0,"none")
B.j=new A.aP(2,"ascii")
B.i=new A.aP(3,"short")
B.m=new A.aP(4,"long")
B.n=new A.aP(5,"rational")
B.T=new A.aP(7,"undefined")
B.bO=new A.f3(null)
B.bP=new A.f5(!1)
B.aj=t([1,1,1],u.n)
B.a3=t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],u.t)
B.bQ=t([1,0.85,0.6],u.n)
B.ak=t([252,243,207,63],u.t)
B.cB=new A.bR(0,"none")
B.aG=new A.bR(1,"background")
B.aH=new A.bR(2,"previous")
B.al=t([B.cB,B.aG,B.aH],A.aj("v<bR>"))
B.bR=t([0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],u.t)
B.bS=t([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],u.t)
B.am=t([63,207,243,252],u.t)
B.bT=t([0.2,0.16,0.15],u.n)
B.o=t([10,338,297,332,284,251,389,356,454,323,361,288,397,365,379,378,400,377,152,148,176,149,150,136,172,58,132,93,234,127,162,21,54,103,67,109],u.t)
B.bU=t([0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],u.t)
B.bV=t([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],u.t)
B.bW=t([1,0.78,0.42],u.n)
B.U=t([0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29],u.t)
B.bX=t([1,0.9,0.85],u.n)
B.an=t([1,0.18,0.78],u.n)
B.ao=t([33,246,161,160,159,158,157,173,133],u.t)
B.a4=t([0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28],u.t)
B.bZ=t([0.86,0.33,0.42],u.n)
B.J=t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],u.t)
B.cV=new A.Q(0,"face")
B.cW=new A.Q(1,"eyes")
B.cX=new A.Q(2,"nose")
B.cY=new A.Q(3,"mouth")
B.cZ=new A.Q(4,"forehead")
B.ap=t([B.cV,B.cW,B.cX,B.cY,B.cZ],A.aj("v<Q>"))
B.c_=t([0.92,0.55,0.5],u.n)
B.aq=t([254,253,251,247,239,223,191,127],u.t)
B.V=t([12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8],u.t)
B.ar=t([0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5],u.t)
B.b3=new A.ec()
B.b2=new A.e7()
B.aZ=new A.dQ()
B.aX=new A.dM()
B.b0=new A.e3()
B.b1=new A.e6()
B.aQ=new A.dz()
B.c0=t([B.b3,B.b2,B.aZ,B.aX,B.b0,B.b1,B.aQ],A.aj("v<T>"))
B.c1=t([1,0.72,0.82],u.n)
B.c3=t([0.42,0.3,0.24],u.n)
B.aE=new A.cF(0,"source")
B.aF=new A.cF(1,"over")
B.as=t([B.aE,B.aF],A.aj("v<cF>"))
B.c4=t([78,95,88,178,87,14,317,402,318,324,308,415,310,311,312,13,82,81,80,191],u.t)
B.c5=t([1,0.72,0.8],u.n)
B.c6=t([0.93,0.42,0.52],u.n)
B.c7=t([168,6,197,195,5,4,1],u.t)
B.c9=t([0.9,0.45,0.45],u.n)
B.at=t([300,293,334,296,336],u.t)
B.cc=t([1,0.97,0.95],u.n)
B.cd=t([0.62,0.35,1],u.n)
B.ce=t([1,0.96,0.9],u.n)
B.au=t([276,283,282,295,285],u.t)
B.cf=t([0.72,0.45,0.38],u.n)
B.cC=new A.aV(0,"none")
B.cD=new A.aV(1,"sub")
B.cE=new A.aV(2,"up")
B.cF=new A.aV(3,"average")
B.cG=new A.aV(4,"paeth")
B.W=t([B.cC,B.cD,B.cE,B.cF,B.cG],A.aj("v<aV>"))
B.ch=t([1,0.93,0.82],u.n)
B.p=t([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],u.t)
B.ci=t([98,97,2,326,327],u.t)
B.K=t([61,146,91,181,84,17,314,405,321,375,291,409,270,269,267,0,37,39,40,185],u.t)
B.X=t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],u.t)
B.cj=t([0.68,0.16,0.26],u.n)
B.av=t([263,466,388,387,386,385,384,398,362],u.t)
B.aw=t([137,80,78,71,13,10,26,10],u.t)
B.ax=t([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],u.t)
B.ay=t([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],u.t)
B.ck=t([0.12,0.09,0.08],u.n)
B.cm=t([0.85,0.48,0.48],u.n)
B.a5=t([0.15,0.9,1],u.n)
B.az=t([70,63,105,66,107],u.t)
B.e=t([33,7,163,144,145,153,154,155,133,173,157,158,159,160,161,246],u.t)
B.f=t([263,249,390,373,374,380,381,382,362,398,384,385,386,387,388,466],u.t)
B.co=t([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8],u.t)
B.aA=t([46,53,52,65,55],u.t)
B.cp=t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],u.t)
B.cz={normal:0,screen:1,multiply:2,overlay:3,"soft-light":4}
B.aC=new A.aD(0,"normal")
B.w=new A.aD(1,"screen")
B.A=new A.aD(2,"multiply")
B.cA=new A.aD(3,"overlay")
B.r=new A.aD(4,"softLight")
B.a6=new A.c6(B.cz,[B.aC,B.w,B.A,B.cA,B.r],A.aj("c6<u,aD>"))
B.aB=new A.bE([B.t,1,B.u,3,B.v,15,B.l,255,B.q,65535,B.x,4294967295,B.F,127,B.G,32767,B.H,2147483647,B.I,1,B.D,1,B.E,1],u.D)
B.cq=new A.bE([B.t,1,B.u,1,B.v,1,B.l,1,B.q,2,B.x,4,B.F,1,B.G,2,B.H,4,B.I,2,B.D,4,B.E,8],u.D)
B.a8=new A.aD(6,"color")
B.cH=new A.e_(0,"none")
B.cI=new A.e_(4,"paeth")
B.cJ=new A.ah(116,118)
B.cK=new A.ah(118,50)
B.cL=new A.ah(345,347)
B.cM=new A.ah(347,280)
B.cN=new A.ah(B.ao,B.aA)
B.cO=new A.ah(B.av,B.au)
B.cP=new A.X(280,345,425)
B.cQ=new A.X(50,116,205)
B.cx={image:0,blend:1,opacity:2}
B.cR=new A.aN(B.cx,3,u.M)
B.cw={format:0,version:1,name:2,lut:3,overlay:4,sticker:5}
B.cS=new A.aN(B.cw,6,u.M)
B.cy={image:0,anchor:1,scale:2,offsetY:3,opacity:4}
B.cT=new A.aN(B.cy,5,u.M)
B.cv={size:0,rgb16:1,cube:2}
B.cU=new A.aN(B.cv,3,u.M)
B.d_=A.al("lS")
B.d0=A.al("lT")
B.d1=A.al("fZ")
B.d2=A.al("h_")
B.d3=A.al("h4")
B.d4=A.al("h5")
B.d5=A.al("h6")
B.d6=A.al("A")
B.d7=A.al("ho")
B.d8=A.al("hp")
B.d9=A.al("ke")
B.da=A.al("cR")
B.Y=new A.bV(0,"none")
B.db=new A.bV(1,"partial")
B.dc=new A.bV(2,"full")
B.M=new A.bV(3,"finish")})();(function staticFields(){$.fy=null
$.a5=A.l([],u.f)
$.ie=null
$.hQ=null
$.hP=null
$.iU=null
$.iO=null
$.iY=null
$.fL=null
$.fU=null
$.hE=null
$.fz=A.l([],A.aj("v<t<A>?>"))
$.aO=A.ir()
$.a6=null
$.hY=A.ir()
$.hU=A.ae(u.N,A.aj("c8"))
$.jG=function(){var t=u.N
return A.ae(t,t)}()})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"lV","j1",()=>A.fO("_$dart_dartClosure"))
t($,"lU","hK",()=>A.fO("_$dart_dartClosure_dartJSInterop"))
t($,"mi","jl",()=>A.l([new J.dG()],A.aj("v<cL>")))
t($,"m0","j5",()=>A.aG(A.fq({
toString:function(){return"$receiver$"}})))
t($,"m1","j6",()=>A.aG(A.fq({$method$:null,
toString:function(){return"$receiver$"}})))
t($,"m2","j7",()=>A.aG(A.fq(null)))
t($,"m3","j8",()=>A.aG(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"m6","jb",()=>A.aG(A.fq(void 0)))
t($,"m7","jc",()=>A.aG(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"m5","ja",()=>A.aG(A.io(null)))
t($,"m4","j9",()=>A.aG(function(){try{null.$method$}catch(s){return s.message}}()))
t($,"m9","je",()=>A.aG(A.io(void 0)))
t($,"m8","jd",()=>A.aG(function(){try{(void 0).$method$}catch(s){return s.message}}()))
t($,"mb","jg",()=>A.k3(A.l([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],u.t)))
t($,"ma","jf",()=>A.k5(0))
t($,"mh","ew",()=>A.hH(B.d6))
t($,"me","jj",()=>A.hr(B.V,B.a3,257,286,15))
t($,"md","ji",()=>A.hr(B.ar,B.J,0,30,15))
t($,"mc","jh",()=>A.hr(null,B.bS,0,19,7))
t($,"lX","j3",()=>A.dA(B.co))
t($,"lW","j2",()=>A.dA(B.bV))
t($,"mk","jm",()=>{var s=null,r="ISOSpeed"
return A.jY([11,A.e("ProcessingSoftware",B.j,s),254,A.e("SubfileType",B.m,1),255,A.e("OldSubfileType",B.m,1),256,A.e("ImageWidth",B.m,1),257,A.e("ImageLength",B.m,1),258,A.e("BitsPerSample",B.i,1),259,A.e("Compression",B.i,1),262,A.e("PhotometricInterpretation",B.i,1),263,A.e("Thresholding",B.i,1),264,A.e("CellWidth",B.i,1),265,A.e("CellLength",B.i,1),266,A.e("FillOrder",B.i,1),269,A.e("DocumentName",B.j,s),270,A.e("ImageDescription",B.j,s),271,A.e("Make",B.j,s),272,A.e("Model",B.j,s),273,A.e("StripOffsets",B.m,s),274,A.e("Orientation",B.i,1),277,A.e("SamplesPerPixel",B.i,1),278,A.e("RowsPerStrip",B.m,1),279,A.e("StripByteCounts",B.m,1),280,A.e("MinSampleValue",B.i,1),281,A.e("MaxSampleValue",B.i,1),282,A.e("XResolution",B.n,1),283,A.e("YResolution",B.n,1),284,A.e("PlanarConfiguration",B.i,1),285,A.e("PageName",B.j,s),286,A.e("XPosition",B.n,1),287,A.e("YPosition",B.n,1),290,A.e("GrayResponseUnit",B.i,1),291,A.e("GrayResponseCurve",B.d,s),292,A.e("T4Options",B.d,s),293,A.e("T6Options",B.d,s),296,A.e("ResolutionUnit",B.i,1),297,A.e("PageNumber",B.i,2),300,A.e("ColorResponseUnit",B.d,s),301,A.e("TransferFunction",B.i,768),305,A.e("Software",B.j,s),306,A.e("DateTime",B.j,s),315,A.e("Artist",B.j,s),316,A.e("HostComputer",B.j,s),317,A.e("Predictor",B.i,1),318,A.e("WhitePoint",B.n,2),319,A.e("PrimaryChromaticities",B.n,6),320,A.e("ColorMap",B.i,s),321,A.e("HalftoneHints",B.i,2),322,A.e("TileWidth",B.m,1),323,A.e("TileLength",B.m,1),324,A.e("TileOffsets",B.m,s),325,A.e("TileByteCounts",B.d,s),326,A.e("BadFaxLines",B.d,s),327,A.e("CleanFaxData",B.d,s),328,A.e("ConsecutiveBadFaxLines",B.d,s),332,A.e("InkSet",B.d,s),333,A.e("InkNames",B.d,s),334,A.e("NumberofInks",B.d,s),336,A.e("DotRange",B.d,s),337,A.e("TargetPrinter",B.j,s),338,A.e("ExtraSamples",B.d,s),339,A.e("SampleFormat",B.i,1),340,A.e("SMinSampleValue",B.d,s),341,A.e("SMaxSampleValue",B.d,s),342,A.e("TransferRange",B.d,s),343,A.e("ClipPath",B.d,s),512,A.e("JPEGProc",B.d,s),513,A.e("JPEGInterchangeFormat",B.d,s),514,A.e("JPEGInterchangeFormatLength",B.d,s),529,A.e("YCbCrCoefficients",B.n,3),530,A.e("YCbCrSubSampling",B.i,1),531,A.e("YCbCrPositioning",B.i,1),532,A.e("ReferenceBlackWhite",B.n,6),700,A.e("ApplicationNotes",B.i,1),18246,A.e("Rating",B.i,1),33421,A.e("CFARepeatPatternDim",B.d,s),33422,A.e("CFAPattern",B.d,s),33423,A.e("BatteryLevel",B.d,s),33432,A.e("Copyright",B.j,s),33434,A.e("ExposureTime",B.n,1),33437,A.e("FNumber",B.n,s),33723,A.e("IPTC-NAA",B.m,1),34665,A.e("ExifOffset",B.d,s),34675,A.e("InterColorProfile",B.d,s),34850,A.e("ExposureProgram",B.i,1),34852,A.e("SpectralSensitivity",B.j,s),34853,A.e("GPSOffset",B.d,s),34855,A.e(r,B.m,1),34856,A.e("OECF",B.d,s),34864,A.e("SensitivityType",B.i,1),34866,A.e("RecommendedExposureIndex",B.m,1),34867,A.e(r,B.m,1),36864,A.e("ExifVersion",B.T,s),36867,A.e("DateTimeOriginal",B.j,s),36868,A.e("DateTimeDigitized",B.j,s),36880,A.e("OffsetTime",B.j,s),36881,A.e("OffsetTimeOriginal",B.j,s),36882,A.e("OffsetTimeDigitized",B.j,s),37121,A.e("ComponentsConfiguration",B.T,s),37122,A.e("CompressedBitsPerPixel",B.d,s),37377,A.e("ShutterSpeedValue",B.d,s),37378,A.e("ApertureValue",B.d,s),37379,A.e("BrightnessValue",B.d,s),37380,A.e("ExposureBiasValue",B.d,s),37381,A.e("MaxApertureValue",B.d,s),37382,A.e("SubjectDistance",B.d,s),37383,A.e("MeteringMode",B.d,s),37384,A.e("LightSource",B.d,s),37385,A.e("Flash",B.d,s),37386,A.e("FocalLength",B.d,s),37396,A.e("SubjectArea",B.d,s),37500,A.e("MakerNote",B.T,s),37510,A.e("UserComment",B.T,s),37520,A.e("SubSecTime",B.d,s),37521,A.e("SubSecTimeOriginal",B.d,s),37522,A.e("SubSecTimeDigitized",B.d,s),40091,A.e("XPTitle",B.d,s),40092,A.e("XPComment",B.d,s),40093,A.e("XPAuthor",B.d,s),40094,A.e("XPKeywords",B.d,s),40095,A.e("XPSubject",B.d,s),40960,A.e("FlashPixVersion",B.d,s),40961,A.e("ColorSpace",B.i,1),40962,A.e("ExifImageWidth",B.i,1),40963,A.e("ExifImageLength",B.i,1),40964,A.e("RelatedSoundFile",B.d,s),40965,A.e("InteroperabilityOffset",B.d,s),41483,A.e("FlashEnergy",B.d,s),41484,A.e("SpatialFrequencyResponse",B.d,s),41486,A.e("FocalPlaneXResolution",B.d,s),41487,A.e("FocalPlaneYResolution",B.d,s),41488,A.e("FocalPlaneResolutionUnit",B.d,s),41492,A.e("SubjectLocation",B.d,s),41493,A.e("ExposureIndex",B.d,s),41495,A.e("SensingMethod",B.d,s),41728,A.e("FileSource",B.d,s),41729,A.e("SceneType",B.d,s),41730,A.e("CVAPattern",B.d,s),41985,A.e("CustomRendered",B.d,s),41986,A.e("ExposureMode",B.d,s),41987,A.e("WhiteBalance",B.d,s),41988,A.e("DigitalZoomRatio",B.d,s),41989,A.e("FocalLengthIn35mmFilm",B.d,s),41990,A.e("SceneCaptureType",B.d,s),41991,A.e("GainControl",B.d,s),41992,A.e("Contrast",B.d,s),41993,A.e("Saturation",B.d,s),41994,A.e("Sharpness",B.d,s),41995,A.e("DeviceSettingDescription",B.d,s),41996,A.e("SubjectDistanceRange",B.d,s),42016,A.e("ImageUniqueID",B.d,s),42032,A.e("CameraOwnerName",B.j,s),42033,A.e("BodySerialNumber",B.j,s),42034,A.e("LensSpecification",B.d,s),42035,A.e("LensMake",B.j,s),42036,A.e("LensModel",B.j,s),42037,A.e("LensSerialNumber",B.j,s),42240,A.e("Gamma",B.n,1),50341,A.e("PrintIM",B.d,s),59932,A.e("Padding",B.d,s),59933,A.e("OffsetSchema",B.d,s),65e3,A.e("OwnerName",B.j,s),65001,A.e("SerialNumber",B.j,s)],u.S,A.aj("dw"))})
t($,"lZ","j4",()=>A.i2(0,0,0))
t($,"mf","hL",()=>A.k1(1))
t($,"mg","jk",()=>J.jq(B.L.gE($.hL()),0,null))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.aT,ArrayBuffer:A.b6,ArrayBufferView:A.cx,DataView:A.dP,Float32Array:A.cs,Float64Array:A.ct,Int16Array:A.cu,Int32Array:A.cv,Int8Array:A.cw,Uint16Array:A.cy,Uint32Array:A.cz,Uint8ClampedArray:A.cA,CanvasPixelArray:A.cA,Uint8Array:A.b7})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.P.$nativeSuperclassTag="ArrayBufferView"
A.cV.$nativeSuperclassTag="ArrayBufferView"
A.cW.$nativeSuperclassTag="ArrayBufferView"
A.aU.$nativeSuperclassTag="ArrayBufferView"
A.cX.$nativeSuperclassTag="ArrayBufferView"
A.cY.$nativeSuperclassTag="ArrayBufferView"
A.a2.$nativeSuperclassTag="ArrayBufferView"})()
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
var t=A.lH
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()