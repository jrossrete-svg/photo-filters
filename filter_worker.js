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
if(a[b]!==t){A.fR(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a,b){if(b!=null)A.f(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.cV(b)
return new t(c,this)}:function(){if(t===null)t=A.cV(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.cV(a).prototype
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
d_(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cX(a){var t,s,r,q,p,o="_$dart_js",n=a[v.dispatchPropertyName]
if(n==null)if($.cY==null){A.fI()
n=a[v.dispatchPropertyName]}if(n!=null){t=n.p
if(!1===t)return n.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return n.i
if(n.e===s)throw A.h(A.dl("Return interceptor for "+A.n(t(a,n))))}r=a.constructor
if(r==null)q=null
else{p=$.cj
if(p==null)p=$.cj=A.cv(o)
q=r[p]}if(q!=null)return q
q=A.fM(a)
if(q!=null)return q
if(typeof a=="function")return B.ac
t=Object.getPrototypeOf(a)
if(t==null)return B.D
if(t===Object.prototype)return B.D
if(typeof r=="function"){p=$.cj
if(p==null)p=$.cj=A.cv(o)
Object.defineProperty(r,p,{value:B.q,enumerable:false,writable:true,configurable:true})
return B.q}return B.q},
dc(a,b){var t=u.W
return J.e7(t.a(a),t.a(b))},
af(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aE.prototype
return J.bo.prototype}if(typeof a=="string")return J.ao.prototype
if(a==null)return J.aF.prototype
if(typeof a=="boolean")return J.bn.prototype
if(Array.isArray(a))return J.j.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a_.prototype
if(typeof a=="symbol")return J.aI.prototype
if(typeof a=="bigint")return J.aG.prototype
return a}if(a instanceof A.m)return a
return J.cX(a)},
dL(a){if(typeof a=="string")return J.ao.prototype
if(a==null)return a
if(Array.isArray(a))return J.j.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a_.prototype
if(typeof a=="symbol")return J.aI.prototype
if(typeof a=="bigint")return J.aG.prototype
return a}if(a instanceof A.m)return a
return J.cX(a)},
dM(a){if(a==null)return a
if(Array.isArray(a))return J.j.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a_.prototype
if(typeof a=="symbol")return J.aI.prototype
if(typeof a=="bigint")return J.aG.prototype
return a}if(a instanceof A.m)return a
return J.cX(a)},
fE(a){if(typeof a=="number")return J.an.prototype
if(typeof a=="string")return J.ao.prototype
if(a==null)return a
if(!(a instanceof A.m))return J.ar.prototype
return a},
aj(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.af(a).H(a,b)},
e7(a,b){return J.fE(a).X(a,b)},
e8(a,b){return J.dM(a).M(a,b)},
Q(a){return J.af(a).gp(a)},
cC(a){return J.dM(a).gC(a)},
d1(a){return J.dL(a).gj(a)},
e9(a){return J.af(a).gq(a)},
aB(a){return J.af(a).i(a)},
bl:function bl(){},
bn:function bn(){},
aF:function aF(){},
aH:function aH(){},
a0:function a0(){},
bD:function bD(){},
ar:function ar(){},
a_:function a_(){},
aG:function aG(){},
aI:function aI(){},
j:function j(a){this.$ti=a},
bm:function bm(){},
c4:function c4(a){this.$ti=a},
ak:function ak(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
an:function an(){},
aE:function aE(){},
bo:function bo(){},
ao:function ao(){}},A={cF:function cF(){},
W(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ce(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cZ(a){var t,s
for(t=$.D.length,s=0;s<t;++s)if(a===$.D[s])return!0
return!1},
bq:function bq(a){this.a=a},
cd:function cd(){},
aC:function aC(){},
T:function T(){},
ap:function ap(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
y:function y(){},
V:function V(a,b){this.a=a
this.$ti=b},
dU(a){var t=A.dT(a)
if(t!=null)return t
return"minified:"+a},
hb(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
n(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aB(a)
return t},
bE(a){var t,s=$.dg
if(s==null)s=$.dg=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
bF(a){var t,s,r,q
if(a instanceof A.m)return A.C(A.b7(a),null)
t=J.af(a)
if(t===B.ab||t===B.ad||u.A.b(a)){s=B.r(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.C(A.b7(a),null)},
dh(a){var t,s,r
if(a==null||typeof a=="number"||A.cQ(a))return J.aB(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.Z)return a.i(0)
if(a instanceof A.J)return a.ao(!0)
t=$.e6()
for(s=0;s<1;++s){r=t[s].bi(a)
if(r!=null)return r}return"Instance of '"+A.bF(a)+"'"},
a(a,b){if(a==null)J.d1(a)
throw A.h(A.cW(a,b))},
cW(a,b){var t,s="index"
if(!A.cR(b))return new A.Y(!0,b,s,null)
t=A.ab(J.d1(a))
if(b<0||b>=t)return A.da(b,t,a,s)
return new A.aS(null,null,!0,b,s,"Value not in range")},
fw(a){return new A.Y(!0,a,null,null)},
h(a){return A.w(a,new Error())},
w(a,b){var t
if(a==null)a=new A.aV()
b.dartException=a
t=A.fS
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:t})
b.name=""}else b.toString=t
return b},
fS(){return J.aB(this.dartException)},
ai(a,b){throw A.w(a,b==null?new Error():b)},
k(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.ai(A.f_(a,b,c),t)},
f_(a,b,c){var t,s,r,q,p,o,n,m,l
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
return new A.aW("'"+t+"': Cannot "+p+" "+m+l+o)},
t(a){throw A.h(A.am(a))},
X(a){var t,s,r,q,p,o
a=A.fQ(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=A.f([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new A.cf(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
cg(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
dk(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
cG(a,b){var t=b==null,s=t?null:b.method
return new A.bp(a,s,t?null:b.receiver)},
dV(a){if(a==null)return new A.ca(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.ah(a,a.dartException)
return A.fr(a)},
ah(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
fr(a){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((B.e.b2(s,16)&8191)===10)switch(r){case 438:return A.ah(a,A.cG(A.n(t)+" (Error "+r+")",null))
case 445:case 5007:A.n(t)
return A.ah(a,new A.aR())}}if(a instanceof TypeError){q=$.dX()
p=$.dY()
o=$.dZ()
n=$.e_()
m=$.e2()
l=$.e3()
k=$.e1()
$.e0()
j=$.e5()
i=$.e4()
h=q.D(t)
if(h!=null)return A.ah(a,A.cG(A.O(t),h))
else{h=p.D(t)
if(h!=null){h.method="call"
return A.ah(a,A.cG(A.O(t),h))}else if(o.D(t)!=null||n.D(t)!=null||m.D(t)!=null||l.D(t)!=null||k.D(t)!=null||n.D(t)!=null||j.D(t)!=null||i.D(t)!=null){A.O(t)
return A.ah(a,new A.aR())}}return A.ah(a,new A.bR(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new A.aU()
t=function(b){try{return String(b)}catch(g){}return null}(a)
return A.ah(a,new A.Y(!1,null,null,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new A.aU()
return a},
dP(a){if(a==null)return J.Q(a)
if(typeof a=="object")return A.bE(a)
return J.Q(a)},
f8(a,b,c,d,e,f){u.Z.a(a)
switch(A.ab(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.h(new A.ci("Unsupported number of arguments for wrapped closure"))},
fy(a,b){var t=a.$identity
if(!!t)return t
t=A.fz(a,b)
a.$identity=t
return t},
fz(a,b){var t
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.f8)},
eg(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.bM().constructor.prototype):Object.create(new A.al(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.d6(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.ec(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.d6(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
ec(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.h("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.ea)}throw A.h("Error in functionType of tearoff")},
ed(a,b,c,d){var t=A.d5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
d6(a,b,c,d){if(c)return A.ef(a,b,d)
return A.ed(b.length,d,a,b)},
ee(a,b,c,d){var t=A.d5,s=A.eb
switch(b?-1:a){case 0:throw A.h(new A.bI("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
ef(a,b,c){var t,s
if($.d3==null)$.d3=A.d2("interceptor")
if($.d4==null)$.d4=A.d2("receiver")
t=b.length
s=A.ee(t,c,a,b)
return s},
cV(a){return A.eg(a)},
ea(a,b){return A.b4(v.typeUniverse,A.b7(a.a),b)},
d5(a){return a.a},
eb(a){return a.b},
d2(a){var t,s,r,q=new A.al("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.h(A.b8("Field name "+a+" not found."))},
cv(a){return v.getIsolateTag(a)},
ha(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
fM(a){var t,s,r,q,p,o=A.O($.dN.$1(a)),n=$.cr[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cz[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.dB($.dJ.$2(a,o))
if(r!=null){n=$.cr[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cz[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.cB(t)
$.cr[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.cz[o]=t
return t}if(q==="-"){p=A.cB(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.dR(a,t)
if(q==="*")throw A.h(A.dl(o))
if(v.leafTags[o]===true){p=A.cB(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.dR(a,t)},
dR(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.d_(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
cB(a){return J.d_(a,!1,null,!!a.$iB)},
fO(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.cB(t)
else return J.d_(t,c,null,null)},
fI(){if(!0===$.cY)return
$.cY=!0
A.fJ()},
fJ(){var t,s,r,q,p,o,n,m
$.cr=Object.create(null)
$.cz=Object.create(null)
A.fH()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dS.$1(p)
if(o!=null){n=A.fO(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
fH(){var t,s,r,q,p,o,n=B.M()
n=A.ay(B.N,A.ay(B.O,A.ay(B.t,A.ay(B.t,A.ay(B.P,A.ay(B.Q,A.ay(B.R(B.r),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dN=new A.cw(q)
$.dJ=new A.cx(p)
$.dS=new A.cy(o)},
ay(a,b){return a(b)||b},
eG(a,b){var t,s
for(t=0;t<a.length;++t){s=a[t]
if(!(t<b.length))return A.a(b,t)
if(!J.aj(s,b[t]))return!1}return!0},
fA(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
fQ(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
N:function N(a,b){this.a=a
this.b=b},
E:function E(a,b,c){this.a=a
this.b=b
this.c=c},
av:function av(a){this.a=a},
aT:function aT(){},
cf:function cf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aR:function aR(){},
bp:function bp(a,b,c){this.a=a
this.b=b
this.c=c},
bR:function bR(a){this.a=a},
ca:function ca(a){this.a=a},
Z:function Z(){},
bb:function bb(){},
bc:function bc(){},
bP:function bP(){},
bM:function bM(){},
al:function al(a,b){this.a=a
this.b=b},
bI:function bI(a){this.a=a},
aJ:function aJ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c7:function c7(a,b){this.a=a
this.b=b
this.c=null},
a5:function a5(a,b){this.a=a
this.$ti=b},
bs:function bs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cw:function cw(a){this.a=a},
cx:function cx(a){this.a=a},
cy:function cy(a){this.a=a},
J:function J(){},
as:function as(){},
at:function at(){},
au:function au(){},
cq(a){return a},
eZ(a,b,c){if(a>>>0!==a||a>=c)throw A.h(A.cW(b,a))},
a1:function a1(){},
a7:function a7(){},
aP:function aP(){},
cn:function cn(){},
bv:function bv(){},
v:function v(){},
aN:function aN(){},
aO:function aO(){},
aM:function aM(){},
bw:function bw(){},
bx:function bx(){},
by:function by(){},
bz:function bz(){},
bA:function bA(){},
bB:function bB(){},
aQ:function aQ(){},
a8:function a8(){},
aX:function aX(){},
aY:function aY(){},
aZ:function aZ(){},
b_:function b_(){},
cI(a,b){var t=b.c
return t==null?b.c=A.b2(a,"d9",[b.x]):t},
di(a){var t=a.w
if(t===6||t===7)return A.di(a.x)
return t===11||t===12},
et(a){return a.as},
fP(a,b){var t,s=b.length
for(t=0;t<s;++t)if(!a[t].b(b[t]))return!1
return!0},
cu(a){return A.cm(v.typeUniverse,a,!1)},
ac(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.ac(a0,t,a2,a3)
if(s===t)return a1
return A.dt(a0,s,!0)
case 7:t=a1.x
s=A.ac(a0,t,a2,a3)
if(s===t)return a1
return A.ds(a0,s,!0)
case 8:r=a1.y
q=A.aw(a0,r,a2,a3)
if(q===r)return a1
return A.b2(a0,a1.x,q)
case 9:p=a1.x
o=A.ac(a0,p,a2,a3)
n=a1.y
m=A.aw(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.cK(a0,o,m)
case 10:l=a1.x
k=a1.y
j=A.aw(a0,k,a2,a3)
if(j===k)return a1
return A.du(a0,l,j)
case 11:i=a1.x
h=A.ac(a0,i,a2,a3)
g=a1.y
f=A.fo(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.dr(a0,h,f)
case 12:e=a1.y
a3+=e.length
d=A.aw(a0,e,a2,a3)
p=a1.x
o=A.ac(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.cL(a0,o,d,!0)
case 13:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.h(A.ba("Attempted to substitute unexpected RTI kind "+a))}},
aw(a,b,c,d){var t,s,r,q,p=b.length,o=A.co(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.ac(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
fp(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.co(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.ac(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
fo(a,b,c,d){var t,s=b.a,r=A.aw(a,s,c,d),q=b.b,p=A.aw(a,q,c,d),o=b.c,n=A.fp(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bU()
t.a=r
t.b=p
t.c=n
return t},
f(a,b){a[v.arrayRti]=b
return a},
dK(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.fG(t)
return a.$S()}return null},
fK(a,b){var t
if(A.di(b))if(a instanceof A.Z){t=A.dK(a)
if(t!=null)return t}return A.b7(a)},
b7(a){if(a instanceof A.m)return A.P(a)
if(Array.isArray(a))return A.G(a)
return A.cP(J.af(a))},
G(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
P(a){var t=a.$ti
return t!=null?t:A.cP(a)},
cP(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.f6(a,t)},
f6(a,b){var t=a instanceof A.Z?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.eO(v.typeUniverse,t.name)
b.$ccache=s
return s},
fG(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.cm(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
fF(a){return A.ae(A.P(a))},
cT(a){var t
if(a instanceof A.J)return A.fC(a.$r,a.a0())
t=a instanceof A.Z?A.dK(a):null
if(t!=null)return t
if(u.w.b(a))return J.e9(a).a
if(Array.isArray(a))return A.G(a)
return A.b7(a)},
ae(a){var t=a.r
return t==null?a.r=new A.cl(a):t},
fC(a,b){var t,s,r=b,q=r.length
if(q===0)return u.F
if(0>=q)return A.a(r,0)
t=A.b4(v.typeUniverse,A.cT(r[0]),"@<0>")
for(s=1;s<q;++s){if(!(s<r.length))return A.a(r,s)
t=A.dw(v.typeUniverse,t,A.cT(r[s]))}return A.b4(v.typeUniverse,t,a)},
K(a){return A.ae(A.cm(v.typeUniverse,a,!1))},
f5(a){var t=this
t.b=A.fn(t)
return t.b(a)},
fn(a){var t,s,r,q,p
if(a===u.K)return A.fe
if(A.ag(a))return A.fi
t=a.w
if(t===6)return A.f3
if(t===1)return A.dG
if(t===7)return A.f9
s=A.fm(a)
if(s!=null)return s
if(t===8){r=a.x
if(a.y.every(A.ag)){a.f="$i"+r
if(r==="e")return A.fc
if(a===u.m)return A.fb
return A.fh}}else if(t===10){q=A.fA(a.x,a.y)
p=q==null?A.dG:q
return p==null?A.dA(p):p}return A.f1},
fm(a){if(a.w===8){if(a===u.S)return A.cR
if(a===u.i||a===u.o)return A.fd
if(a===u.R)return A.fg
if(a===u.y)return A.cQ}return null},
f4(a){var t=this,s=A.f0
if(A.ag(t))s=A.eV
else if(t===u.K)s=A.dA
else if(A.aA(t)){s=A.f2
if(t===u.D)s=A.eT
else if(t===u.B)s=A.dB
else if(t===u.u)s=A.eR
else if(t===u.ae)s=A.dz
else if(t===u.I)s=A.eS
else if(t===u.z)s=A.eU}else if(t===u.S)s=A.ab
else if(t===u.R)s=A.O
else if(t===u.y)s=A.eQ
else if(t===u.o)s=A.b5
else if(t===u.i)s=A.cM
else if(t===u.m)s=A.cN
t.a=s
return t.a(a)},
f1(a){var t=this
if(a==null)return A.aA(t)
return A.fL(v.typeUniverse,A.fK(a,t),t)},
f3(a){if(a==null)return!0
return this.x.b(a)},
fh(a){var t,s=this
if(a==null)return A.aA(s)
t=s.f
if(a instanceof A.m)return!!a[t]
return!!J.af(a)[t]},
fc(a){var t,s=this
if(a==null)return A.aA(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.m)return!!a[t]
return!!J.af(a)[t]},
fb(a){var t=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.m)return!!a[t.f]
return!0}if(typeof a=="function")return!0
return!1},
dF(a){if(typeof a=="object"){if(a instanceof A.m)return u.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
f0(a){var t=this
if(a==null){if(A.aA(t))return a}else if(t.b(a))return a
throw A.w(A.dC(a,t),new Error())},
f2(a){var t=this
if(a==null||t.b(a))return a
throw A.w(A.dC(a,t),new Error())},
dC(a,b){return new A.b0("TypeError: "+A.dm(a,A.C(b,null)))},
dm(a,b){return A.c_(a)+": type '"+A.C(A.cT(a),null)+"' is not a subtype of type '"+b+"'"},
F(a,b){return new A.b0("TypeError: "+A.dm(a,b))},
f9(a){var t=this
return t.x.b(a)||A.cI(v.typeUniverse,t).b(a)},
fe(a){return a!=null},
dA(a){if(a!=null)return a
throw A.w(A.F(a,"Object"),new Error())},
fi(a){return!0},
eV(a){return a},
dG(a){return!1},
cQ(a){return!0===a||!1===a},
eQ(a){if(!0===a)return!0
if(!1===a)return!1
throw A.w(A.F(a,"bool"),new Error())},
eR(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.w(A.F(a,"bool?"),new Error())},
cM(a){if(typeof a=="number")return a
throw A.w(A.F(a,"double"),new Error())},
eS(a){if(typeof a=="number")return a
if(a==null)return a
throw A.w(A.F(a,"double?"),new Error())},
cR(a){return typeof a=="number"&&Math.floor(a)===a},
ab(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.w(A.F(a,"int"),new Error())},
eT(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.w(A.F(a,"int?"),new Error())},
fd(a){return typeof a=="number"},
b5(a){if(typeof a=="number")return a
throw A.w(A.F(a,"num"),new Error())},
dz(a){if(typeof a=="number")return a
if(a==null)return a
throw A.w(A.F(a,"num?"),new Error())},
fg(a){return typeof a=="string"},
O(a){if(typeof a=="string")return a
throw A.w(A.F(a,"String"),new Error())},
dB(a){if(typeof a=="string")return a
if(a==null)return a
throw A.w(A.F(a,"String?"),new Error())},
cN(a){if(A.dF(a))return a
throw A.w(A.F(a,"JSObject"),new Error())},
eU(a){if(a==null)return a
if(A.dF(a))return a
throw A.w(A.F(a,"JSObject?"),new Error())},
dH(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.C(a[r],b)
return t},
fl(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.dH(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.C(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
dD(a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", ",a1=null
if(a4!=null){t=a4.length
if(a3==null)a3=A.f([],u.s)
else a1=a3.length
s=a3.length
for(r=t;r>0;--r)B.c.u(a3,"T"+(s+r))
for(q=u.X,p="<",o="",r=0;r<t;++r,o=a0){n=a3.length
m=n-1-r
if(!(m>=0))return A.a(a3,m)
p=p+o+a3[m]
l=a4[r]
k=l.w
if(!(k===2||k===3||k===4||k===5||l===q))p+=" extends "+A.C(l,a3)}p+=">"}else p=""
q=a2.x
j=a2.y
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=A.C(q,a3)
for(b="",a="",r=0;r<h;++r,a=a0)b+=a+A.C(i[r],a3)
if(f>0){b+=a+"["
for(a="",r=0;r<f;++r,a=a0)b+=a+A.C(g[r],a3)
b+="]"}if(d>0){b+=a+"{"
for(a="",r=0;r<d;r+=3,a=a0){b+=a
if(e[r+1])b+="required "
b+=A.C(e[r+2],a3)+" "+e[r]}b+="}"}if(a1!=null){a3.toString
a3.length=a1}return p+"("+b+") => "+c},
C(a,b){var t,s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=a.x
s=A.C(t,b)
r=t.w
return(r===11||r===12?"("+s+")":s)+"?"}if(m===7)return"FutureOr<"+A.C(a.x,b)+">"
if(m===8){q=A.fq(a.x)
p=a.y
return p.length>0?q+("<"+A.dH(p,b)+">"):q}if(m===10)return A.fl(a,b)
if(m===11)return A.dD(a,b,null)
if(m===12)return A.dD(a.x,b,a.y)
if(m===13){o=a.x
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.a(b,o)
return b[o]}return"?"},
fq(a){var t=A.dT(a)
if(t!=null)return t
return"minified:"+a},
eP(a,b){var t=a.tR[b]
while(typeof t=="string")t=a.tR[t]
return t},
eO(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.cm(a,b,!1)
else if(typeof n=="number"){t=n
s=A.b3(a,5,"#")
r=A.co(t)
for(q=0;q<t;++q)r[q]=s
p=A.b2(a,b,r)
o[b]=p
return p}else return n},
eN(a,b){return A.dx(a.tR,b)},
eM(a,b){return A.dx(a.eT,b)},
cm(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.dv(a,null,b,!1)
s.set(b,t)
return t},
b4(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.dv(a,b,c,!0)
r.set(c,s)
return s},
dw(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.cK(a,b,c.w===9?c.y:[c])
q.set(t,r)
return r},
dv(a,b,c,d){return A.eE(A.ey(a,b,c,d))},
a2(a,b){b.a=A.f4
b.b=A.f5
return b},
b3(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.I(null,null)
t.w=b
t.as=c
s=A.a2(a,t)
a.eC.set(c,s)
return s},
dt(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.eK(a,b,s,c)
a.eC.set(s,t)
return t},
eK(a,b,c,d){var t,s,r
if(d){t=b.w
s=!0
if(!A.ag(b))if(!(b===u.P||b===u.T))if(t!==6)s=t===7&&A.aA(b.x)
if(s)return b
else if(t===1)return u.P}r=new A.I(null,null)
r.w=6
r.x=b
r.as=c
return A.a2(a,r)},
ds(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.eI(a,b,s,c)
a.eC.set(s,t)
return t},
eI(a,b,c,d){var t,s
if(d){t=b.w
if(A.ag(b)||b===u.K)return b
else if(t===1)return A.b2(a,"d9",[b])
else if(b===u.P||b===u.T)return u.Q}s=new A.I(null,null)
s.w=7
s.x=b
s.as=c
return A.a2(a,s)},
eL(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.I(null,null)
t.w=13
t.x=b
t.as=r
s=A.a2(a,t)
a.eC.set(r,s)
return s},
b1(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
eH(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
b2(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.b1(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.I(null,null)
s.w=8
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.a2(a,s)
a.eC.set(q,r)
return r},
cK(a,b,c){var t,s,r,q,p,o
if(b.w===9){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.b1(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.I(null,null)
p.w=9
p.x=t
p.y=s
p.as=r
o=A.a2(a,p)
a.eC.set(r,o)
return o},
du(a,b,c){var t,s,r="+"+(b+"("+A.b1(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.I(null,null)
t.w=10
t.x=b
t.y=c
t.as=r
s=A.a2(a,t)
a.eC.set(r,s)
return s},
dr(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.b1(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.b1(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.eH(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.I(null,null)
q.w=11
q.x=b
q.y=c
q.as=s
p=A.a2(a,q)
a.eC.set(s,p)
return p},
cL(a,b,c,d){var t,s=b.as+("<"+A.b1(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.eJ(a,b,c,s,d)
a.eC.set(s,t)
return t},
eJ(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.co(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.ac(a,b,s,0)
n=A.aw(a,c,s,0)
return A.cL(a,o,n,c!==n)}}m=new A.I(null,null)
m.w=12
m.x=b
m.y=c
m.as=d
return A.a2(a,m)},
ey(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
eE(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.eA(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.dp(a,s,m,l,!1)
else if(r===46)s=A.dp(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.aa(a.u,a.e,l.pop()))
break
case 94:l.push(A.eL(a.u,l.pop()))
break
case 35:l.push(A.b3(a.u,5,"#"))
break
case 64:l.push(A.b3(a.u,2,"@"))
break
case 126:l.push(A.b3(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.eC(a,l)
break
case 38:A.eB(a,l)
break
case 63:q=a.u
l.push(A.dt(q,A.aa(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.ds(q,A.aa(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.ez(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.dq(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.eF(a.u,a.e,p)
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
return A.aa(a.u,a.e,n)},
eA(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
dp(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===9)p=p.x
o=A.eP(t,p.x)[q]
if(o==null)A.ai('No "'+q+'" in "'+A.et(p)+'"')
d.push(A.b4(t,p,o))}else d.push(q)
return n},
eC(a,b){var t,s=a.u,r=A.dn(a,b),q=b.pop()
if(typeof q=="string")b.push(A.b2(s,q,r))
else{t=A.aa(s,a.e,q)
switch(t.w){case 11:b.push(A.cL(s,t,r,a.n))
break
default:b.push(A.cK(s,t,r))
break}}},
ez(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
if(typeof p=="number")switch(p){case-1:o=b.pop()
break
case-2:n=b.pop()
break
default:b.push(p)
break}else b.push(p)
t=A.dn(a,b)
p=b.pop()
switch(p){case-3:p=b.pop()
if(o==null)o=q.sEA
if(n==null)n=q.sEA
s=A.aa(q,a.e,p)
r=new A.bU()
r.a=t
r.b=o
r.c=n
b.push(A.dr(q,s,r))
return
case-4:b.push(A.du(q,b.pop(),t))
return
default:throw A.h(A.ba("Unexpected state under `()`: "+A.n(p)))}},
eB(a,b){var t=b.pop()
if(0===t){b.push(A.b3(a.u,1,"0&"))
return}if(1===t){b.push(A.b3(a.u,4,"1&"))
return}throw A.h(A.ba("Unexpected extended operation "+A.n(t)))},
dn(a,b){var t=b.splice(a.p)
A.dq(a.u,a.e,t)
a.p=b.pop()
return t},
aa(a,b,c){if(typeof c=="string")return A.b2(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.eD(a,b,c)}else return c},
dq(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.aa(a,b,c[t])},
eF(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.aa(a,b,c[t])},
eD(a,b,c){var t,s,r=b.w
if(r===9){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==8)throw A.h(A.ba("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.h(A.ba("Bad index "+c+" for "+b.i(0)))},
fL(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.u(a,b,null,c,null)
s.set(c,t)}return t},
u(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(A.ag(d))return!0
t=b.w
if(t===4)return!0
if(A.ag(b))return!1
if(b.w===1)return!0
s=t===13
if(s)if(A.u(a,c[b.x],c,d,e))return!0
r=d.w
q=u.P
if(b===q||b===u.T){if(r===7)return A.u(a,b,c,d.x,e)
return d===q||d===u.T||r===6}if(d===u.K){if(t===7)return A.u(a,b.x,c,d,e)
return t!==6}if(t===7){if(!A.u(a,b.x,c,d,e))return!1
return A.u(a,A.cI(a,b),c,d,e)}if(t===6)return A.u(a,q,c,d,e)&&A.u(a,b.x,c,d,e)
if(r===7){if(A.u(a,b,c,d.x,e))return!0
return A.u(a,b,c,A.cI(a,d),e)}if(r===6)return A.u(a,b,c,q,e)||A.u(a,b,c,d.x,e)
if(s)return!1
q=t!==11
if((!q||t===12)&&d===u.Z)return!0
p=t===10
if(p&&d===u.O)return!0
if(r===12){if(b===u.g)return!0
if(t!==12)return!1
o=b.y
n=d.y
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.u(a,k,c,j,e)||!A.u(a,j,e,k,c))return!1}return A.dE(a,b.x,c,d.x,e)}if(r===11){if(b===u.g)return!0
if(q)return!1
return A.dE(a,b,c,d,e)}if(t===8){if(r!==8)return!1
return A.fa(a,b,c,d,e)}if(p&&r===10)return A.ff(a,b,c,d,e)
return!1},
dE(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.u(a2,a3.x,a4,a5.x,a6))return!1
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
if(!A.u(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.u(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.u(a2,l[i],a6,h,a4))return!1}g=t.c
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
if(!A.u(a2,f[b+2],a6,h,a4))return!1
break}}while(c<e){if(g[c+1])return!1
c+=3}return!0},
fa(a,b,c,d,e){var t,s,r,q,p,o=b.x,n=d.x
while(o!==n){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.b4(a,b,s[p])
return A.dy(a,q,null,c,d.y,e)}return A.dy(a,b.y,null,c,d.y,e)},
dy(a,b,c,d,e,f){var t,s=b.length
for(t=0;t<s;++t)if(!A.u(a,b[t],d,e[t],f))return!1
return!0},
ff(a,b,c,d,e){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.u(a,s[t],c,r[t],e))return!1
return!0},
aA(a){var t=a.w,s=!0
if(!(a===u.P||a===u.T))if(!A.ag(a))if(t!==6)s=t===7&&A.aA(a.x)
return s},
ag(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.X},
dx(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
co(a){return a>0?new Array(a):v.typeUniverse.sEA},
I:function I(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bU:function bU(){this.c=this.b=this.a=null},
cl:function cl(a){this.a=a},
bT:function bT(){},
b0:function b0(a){this.a=a},
ep(a,b){return new A.aJ(a.m("@<0>").a9(b).m("aJ<1,2>"))},
de(a){var t,s
if(A.cZ(a))return"{...}"
t=new A.bN("")
try{s={}
B.c.u($.D,a)
t.a+="{"
s.a=!0
a.a2(0,new A.c8(s,t))
t.a+="}"}finally{if(0>=$.D.length)return A.a($.D,-1)
$.D.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
l:function l(){},
x:function x(){},
c8:function c8(a,b){this.a=a
this.b=b},
fk(a,b){var t,s,r,q=null
try{q=JSON.parse(a)}catch(s){t=A.dV(s)
r=String(t)
throw A.h(new A.c3(r))}r=A.cp(q)
return r},
cp(a){var t
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.bV(a,Object.create(null))
for(t=0;t<a.length;++t)a[t]=A.cp(a[t])
return a},
bV:function bV(a,b){this.a=a
this.b=b
this.c=null},
bW:function bW(a){this.a=a},
bd:function bd(){},
bg:function bg(){},
c5:function c5(){},
c6:function c6(a){this.a=a},
eq(a,b,c){var t,s,r=A.f([],c.m("j<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.t)(a),++s)B.c.u(r,c.a(a[s]))
r.$flags=1
return r},
bt(a,b){var t,s
if(Array.isArray(a))return A.f(a.slice(0),b.m("j<0>"))
t=A.f([],b.m("j<0>"))
for(s=J.cC(a);s.v();)B.c.u(t,s.gA())
return t},
dj(a,b,c){var t=J.cC(b)
if(!t.v())return a
if(c.length===0){do a+=A.n(t.gA())
while(t.v())}else{a+=A.n(t.gA())
while(t.v())a=a+c+A.n(t.gA())}return a},
c_(a){if(typeof a=="number"||A.cQ(a)||a==null)return J.aB(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dh(a)},
ba(a){return new A.b9(a)},
b8(a){return new A.Y(!1,null,null,a)},
bG(a,b,c,d,e){return new A.aS(b,c,!0,a,d,"Invalid value")},
es(a,b){if(a<0)throw A.h(A.bG(a,0,null,b,null))
return a},
da(a,b,c,d){return new A.bk(b,!0,a,d,"Index out of range")},
bS(a){return new A.aW(a)},
dl(a){return new A.bQ(a)},
eu(a){return new A.bL(a)},
am(a){return new A.be(a)},
eo(a,b,c){var t,s
if(A.cZ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.f([],u.s)
B.c.u($.D,a)
try{A.fj(a,t)}finally{if(0>=$.D.length)return A.a($.D,-1)
$.D.pop()}s=A.dj(b,u.Y.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
db(a,b,c){var t,s
if(A.cZ(a))return b+"..."+c
t=new A.bN(b)
B.c.u($.D,a)
try{s=t
s.a=A.dj(s.a,a,", ")}finally{if(0>=$.D.length)return A.a($.D,-1)
$.D.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
fj(a,b){var t,s,r,q,p,o,n,m=a.gC(a),l=0,k=0
for(;;){if(!(l<80||k<3))break
if(!m.v())return
t=A.n(m.gA())
B.c.u(b,t)
l+=t.length+2;++k}if(!m.v()){if(k<=5)return
if(0>=b.length)return A.a(b,-1)
s=b.pop()
if(0>=b.length)return A.a(b,-1)
r=b.pop()}else{q=m.gA();++k
if(!m.v()){if(k<=4){B.c.u(b,A.n(q))
return}s=A.n(q)
if(0>=b.length)return A.a(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gA();++k
for(;m.v();q=p,p=o){o=m.gA();++k
if(k>100){for(;;){if(!(l>75&&k>3))break
if(0>=b.length)return A.a(b,-1)
l-=b.pop().length+2;--k}B.c.u(b,"...")
return}}r=A.n(q)
s=A.n(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
for(;;){if(!(l>80&&b.length>3))break
if(0>=b.length)return A.a(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)B.c.u(b,n)
B.c.u(b,r)
B.c.u(b,s)},
cH(a,b,c,d){var t
if(B.k===c){t=B.e.gp(a)
b=J.Q(b)
return A.ce(A.W(A.W($.bZ(),t),b))}if(B.k===d){t=B.e.gp(a)
b=J.Q(b)
c=J.Q(c)
return A.ce(A.W(A.W(A.W($.bZ(),t),b),c))}t=B.e.gp(a)
b=J.Q(b)
c=J.Q(c)
d=J.Q(d)
d=A.ce(A.W(A.W(A.W(A.W($.bZ(),t),b),c),d))
return d},
er(a){var t,s,r=$.bZ()
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.t)(a),++s)r=A.W(r,J.Q(a[s]))
return A.ce(r)},
ch:function ch(){},
p:function p(){},
b9:function b9(a){this.a=a},
aV:function aV(){},
Y:function Y(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aS:function aS(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bk:function bk(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aW:function aW(a){this.a=a},
bQ:function bQ(a){this.a=a},
bL:function bL(a){this.a=a},
be:function be(a){this.a=a},
aU:function aU(){},
ci:function ci(a){this.a=a},
c3:function c3(a){this.a=a},
c:function c(){},
a6:function a6(a,b,c){this.a=a
this.b=b
this.$ti=c},
a9:function a9(){},
m:function m(){},
bN:function bN(a){this.a=a},
fD(a){return B.c.ba(B.am,new A.cs(a),new A.ct(a))},
cs:function cs(a){this.a=a},
ct:function ct(a){this.a=a},
bj:function bj(){},
br:function br(){},
bC:function bC(){},
z:function z(){},
bH:function bH(){},
bJ:function bJ(){},
bK:function bK(){},
bO:function bO(){},
eh(a){var t,s,r,q,p,o,n,m=u.c,l=m.a(B.u.az(a,null)),k=A.f([],u.q)
for(t=l.length,s=u.n,r=0;r<l.length;l.length===t||(0,A.t)(l),++r){q=l[r]
p=A.f([],s)
for(m.a(q),o=q.length,n=0;n<q.length;q.length===o||(0,A.t)(q),++n)p.push(A.b5(q[n]))
k.push(new A.bh(new Float32Array(A.cq(p))))}return new A.c0(k)},
r:function r(a,b){this.a=a
this.b=b},
bh:function bh(a){this.a=a},
aD:function aD(a,b,c){this.a=a
this.b=b
this.c=c},
c0:function c0(a){this.a=a},
ei(a){return new A.c1(A.b5(a.t(0,"intensity")),u.J.a(a.t(0,"params")).bg(0,new A.c2(),u.R,u.i),B.d.aK(A.b5(a.t(0,"seed"))))},
bf:function bf(a,b){this.a=a
this.b=b},
M:function M(){},
S:function S(a,b){this.a=a
this.d=b},
c1:function c1(a,b,c){this.a=a
this.b=b
this.c=c},
c2:function c2(){},
bu:function bu(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(a,b,c){this.a=a
this.b=b
this.c=c},
cU(a,b,c){var t
switch(a.a){case 0:return c
case 1:return 1-(1-b)*(1-c)
case 2:return b*c
case 3:return b<0.5?2*b*c:1-2*(1-b)*(1-c)
case 4:t=2*c
return(1-t)*b*b+t*b
case 5:return Math.min(1,b+c)
case 6:return c}},
fx(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m,l,k,j
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
if(c===B.p){r=A.dO(q,o,m)-A.dO(d,e,f)
l=d+r
k=e+r
j=f+r}else{l=A.cU(c,q,d)
k=A.cU(c,o,e)
j=A.cU(c,m,f)}t.$flags&2&&A.k(t)
t[s]=q+(l-q)*g
t[p]=o+(k-o)*g
t[n]=m+(j-m)*g},
ad(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m,l,k,j,i,h
if(g<=0)return
for(t=b.d,s=b.c,r=a.a,q=b.a,p=b.r,o=p.length,n=b.b,m=0;m<t;++m)for(l=(m+n)*r,k=m*s,j=0;j<s;++j){i=k+j
if(!(i>=0&&i<o))return A.a(p,i)
h=p[i]
if(h<=0.002)continue
A.fx(a,l+j+q,c,d,e,f,h*g)}},
aq:function aq(a,b){this.a=a
this.b=b},
ax(c4,c5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=c4.c,b5=c4.a*c4.b,b6=Math.pow(2,c5.a),b7=c5.f,b8=c5.r,b9=0.03*b8,c0=1+0.1*b7+b9,c1=1-0.05*b8,c2=1-0.12*b7+b9,c3=c5.c
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
a3=0.2126*a0+0.7152*a1+0.0722*a2}if(q){a0=A.cO(a0,c3)
a1=A.cO(a1,c3)
a2=A.cO(a2,c3)
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
a2=h+a2*b7}a0=A.cS(a0)
a1=A.cS(a1)
a2=A.cS(a2)
b4.$flags&2&&A.k(b4)
b4[f]=e+(a0-e)
b4[d]=c+(a1-c)
b4[b]=a+(a2-a)}},
cO(a,b){var t,s
if(a<0)t=0
else t=a>1?1:a
s=2*t
if(b>=0)return t+(t*t*(3-s)-t)*b
return t+(0.5-Math.sin(Math.asin(1-s)/3)-t)*-b},
cS(a){if(a<=0.85)return a<0?0:a
return 0.85+0.15*(1-Math.exp(-(a-0.85)/0.15))},
L:function L(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
df(a,b,c,d,e,f){var t=Math.max(0,c)*Math.max(0,d)
if(!A.cR(t))A.ai(A.b8("Invalid length "+A.n(t)))
return new A.c9(a,b,c,d,new Float32Array(t))},
U(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
for(t=c.length,s=1/0,r=1/0,q=-1/0,p=-1/0,o=0;o<t;++o){n=c[o]
m=n.a
s=Math.min(s,m)
l=n.b
r=Math.min(r,l)
q=Math.max(q,m)
p=Math.max(p,l)}k=B.e.G(B.d.B(s-d),0,a)
j=B.e.G(B.d.B(r-d),0,b)
return A.df(k,j,B.e.G(B.d.T(q+d),0,a)-k,B.e.G(B.d.T(p+d),0,b)-j,a,b)},
d7(a,b){var t,s,r,q,p,o
for(t=a.length,s=0,r=0,q=0;q<t;++q){p=a[q]
s+=p.a
r+=p.b}s/=t
r/=t
t=A.f([],u._)
for(o=a.length,q=0;q<a.length;a.length===o||(0,A.t)(a),++q){p=a[q]
t.push(new A.r(s+(p.a-s)*b,r+(p.b-r)*b))}return t},
c9:function c9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=e},
a3:function a3(a){this.a=a},
dd(a,b){var t,s=A.f([],u.n)
for(t=0;t<3;++t)s.push(1-(1-a[t])*b)
return s},
aK:function aK(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
d8(a,b){return new A.bi(a,b,new Float32Array(a*b*3))},
ek(a){var t,s,r,q,p,o,n,m=A.d8(a.a,a.b),l=a.c,k=m.c
for(t=l.length,s=k.$flags|0,r=0,q=0;r<t;r+=4,q+=3){p=l[r]
s&2&&A.k(k)
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
cE(a){if(a<=0)return 0
if(a>=1)return 255
return B.d.aK(a*255+0.5)},
b6(a,b,c,d,e){var t,s,r
if(e<0.5||b<2||c<2)return
t=Math.max(1,B.d.a5((Math.sqrt(4*e*e+1)-1)/2))
s=new Float32Array(a.length)
for(r=0;r<3;++r){A.eW(a,s,b,c,d,t)
A.eX(s,a,b,c,d,t)}},
eW(a,b,c,d,e,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=1/(2*a0+1)
for(t=c-1,s=a.length,r=a0+1,q=0;q<d;++q){p=q*c*e
for(o=0;o<e;++o){n=p+o
if(!(n>=0&&n<s))return A.a(a,n)
m=a[n]*r
for(l=1;l<=a0;++l)m+=B.o.t(a,p+Math.min(l,t)*e+o)
for(n=b.$flags|0,k=0;k<c;++k){j=p+k*e+o
n&2&&A.k(b)
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
eX(a,b,c,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=1/(2*a2+1),d=c*a1
for(t=a0-1,s=a.length,r=a2+1,q=0;q<c;++q)for(p=q*a1,o=0;o<a1;++o){n=p+o
if(!(n<s))return A.a(a,n)
m=a[n]*r
for(l=1;l<=a2;++l)m+=B.o.t(a,Math.min(l,t)*d+n)
for(k=b.$flags|0,j=0;j<a0;++j){i=j*d+n
k&2&&A.k(b)
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
dO(a,b,c){return 0.2126*a+0.7152*b+0.0722*c},
bi:function bi(a,b,c){this.a=a
this.b=b
this.c=c},
cc:function cc(a){this.a=a},
fN(){var t,s=v.G,r=new A.cA(s)
if(typeof r=="function")A.ai(A.b8("Attempting to rewrap a JS function."))
t=function(a,b){return function(c){return a(b,c,arguments.length)}}(A.eY,r)
t[$.d0()]=r
s.onmessage=t},
cA:function cA(a){this.a=a},
dT(a){return v.mangledGlobalNames[a]},
fR(a){throw A.w(new A.bq("Field '"+a+"' has been assigned during initialization."),new Error())},
eY(a,b,c){u.Z.a(a)
if(A.ab(c)>=1)return a.$1(b)
return a.$0()},
bX(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(c<=0)return
t=Math.max(1,b*Math.max(a.a,a.b))
s=Math.max(1,B.d.B(t/4))
r=a.aA(s)
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
o&2&&A.k(q)
q[m]=l*(g*j)
q[k]=q[k]*(g*e[1])
q[i]=q[i]*(g*e[2])}A.b6(q,r.a,r.b,3,t/s)
A.dI(a,r,c)},
fs(a,b,c){var t,s,r
if(c<=0)return
t=Math.max(1,b*Math.max(a.a,a.b))
s=Math.max(1,B.d.B(t/4))
r=a.aA(s)
A.b6(r.c,r.a,r.b,3,t/s)
A.dI(a,r,c)},
dI(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new Float32Array(3),e=a.c
for(t=a.b,s=a.a,r=e.length,q=0;q<t;++q){p=(q+0.5)/t
for(o=q*s,n=0;n<s;++n){b.aO((n+0.5)/s,p,f)
m=(o+n)*3
for(l=e.$flags|0,k=0;k<3;++k){j=m+k
if(!(j>=0&&j<r))return A.a(e,j)
i=e[j]
h=f[k]*c
g=h>1?1:h
l&2&&A.k(e)
e[j]=1-(1-i)*(1-g)}}}},
ft(a,b,c){var t,s,r,q,p,o,n,m,l
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
r&2&&A.k(t)
t[p]=o+(n-o)*m*0.5}}},
fu(a1,a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
d&2&&A.k(o)
o[b]=1-(1-a)*(1-a0*f)}}},
fv(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
t.$flags&2&&A.k(t)
t[d]=g*e
g=d+1
if(!(g<n))return A.a(t,g)
t[g]=t[g]*e
g=d+2
if(!(g<n))return A.a(t,g)
t[g]=t[g]*e}},
bY(a9,b0,b1,b2,b3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
if(b2<=0||b0.gag(0))return
t=b0.c
s=b0.d
r=t*s*3
q=new Float32Array(r)
for(p=b0.b,o=a9.a,n=b0.a,m=a9.c,l=0;l<s;l=k){k=l+1
B.o.aP(q,l*t*3,k*t*3,m,((l+p)*o+n)*3)}j=new Float32Array(A.cq(q))
A.b6(j,t,s,3,Math.max(1,b1*b3))
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
h&2&&A.k(m)
if(!(b>=0&&b<m.length))return A.a(m,b)
m[b]=a2+(a1-a2)*a6}}},
dQ(b8,b9,c0,c1,c2,c3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
if(c2<=0||c1<=0)return
t=Math.max(1,b9.h(B.a).n(0,b9.h(B.b)).gj(0))
s=c3>>>0
r=new A.cc(s===0?2654435769:s)
s=b8.a
q=A.U(s,b8.b,b9.l(B.f),0)
p=b9.k(6)
o=b9.k(4)
n=b9.k(98)
m=b9.k(327)
l=A.f([new A.av([p.E(o,0.5),m.n(0,n).a6(0,0.25),o.n(0,p).a6(0,0.35),0.26])],u.k)
k=b9.k(197)
for(j=[B.aM,B.aO],i=k.a,h=k.b,g=t*0.15,f=0;f<2;++f){e=j[f]
d=b9.k(e.a).E(b9.k(e.b),0.35)
c=d.E(k,0.18)
b=(d.a-i)*0.42
a=(d.b-h)*0.42
a0=Math.max(0.001,Math.sqrt(b*b+a*a))
B.c.u(l,new A.av([c,new A.r(b,a),new A.r(-a/a0*g,b/a0*g),0.37]))}a1=B.d.a5(30+170*c1)
for(j=l.length,f=0;f<l.length;l.length===j||(0,A.t)(l),++f){i=l[f].a
a2=B.d.a5(a1*i[3])
for(a3=0;a3<a2;++a3){do{a4=r.aI()
a5=r.aI()}while(a4*a4+a5*a5>3.2)
h=i[0]
g=i[1]
b=a4*0.6
a=i[2]
a6=a5*0.6
a7=r.O()
a8=r.O()/4294967296<0.1?1.6:1
a9=t*(0.006+0.009*(a7/4294967296))*a8
a8=r.O()
b0=0.8+0.44999999999999996*(r.O()/4294967296)
q.L(new A.r(h.a+g.a*b+a.a*a6,h.b+g.b*b+a.b*a6),a9*b0,a9/b0,0+3.141592653589793*(r.O()/4294967296),0.35+0.65*(a8/4294967296))}}q.U(t*0.004)
q.a4(c0)
for(j=q.d,i=q.c,h=q.b,g=q.a,b1=b8.c,b=b1.length,a=b1.$flags|0,a6=q.r,a7=a6.length,b2=0;b2<j;++b2)for(a8=(b2+h)*s,b3=b2*i,b4=0;b4<i;++b4){b5=b3+b4
if(!(b5>=0&&b5<a7))return A.a(a6,b5)
b6=a6[b5]*c2
if(b6<=0.004)continue
b7=(a8+b4+g)*3
if(!(b7>=0&&b7<b))return A.a(b1,b7)
b5=b1[b7]
a&2&&A.k(b1)
b1[b7]=b5*(1-b6*0.3)
b5=b7+1
if(!(b5<b))return A.a(b1,b5)
b1[b5]=b1[b5]*(1-b6*0.44)
b5=b7+2
if(!(b5<b))return A.a(b1,b5)
b1[b5]=b1[b5]*(1-b6*0.52)}},
fB(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.a,g=a.b,f=h*g,e=new Float32Array(f)
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
e[r]=0.2126*p+0.7152*o+0.0722*q}A.b6(e,h,g,1,Math.max(1,Math.max(h,g)/600))
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
H(a,b,c,d,e){var t,s,r=d.length
if(0>=r)return A.a(d,0)
t=d[0]
if(1>=r)return A.a(d,1)
s=d[1]
if(2>=r)return A.a(d,2)
return A.ad(a,b,c,t,s,d[2],e)}},B={}
var w=[A,J,B]
var $={}
A.cF.prototype={}
J.bl.prototype={
H(a,b){return a===b},
gp(a){return A.bE(a)},
i(a){return"Instance of '"+A.bF(a)+"'"},
gq(a){return A.ae(A.cP(this))}}
J.bn.prototype={
i(a){return String(a)},
gp(a){return a?519018:218159},
gq(a){return A.ae(u.y)},
$ii:1,
$iaz:1}
J.aF.prototype={
H(a,b){return null==b},
i(a){return"null"},
gp(a){return 0},
$ii:1}
J.aH.prototype={$io:1}
J.a0.prototype={
gp(a){return 0},
i(a){return String(a)}}
J.bD.prototype={}
J.ar.prototype={}
J.a_.prototype={
i(a){var t=a[$.dW()]
if(t==null)t=a[$.d0()]
if(t==null)return this.aS(a)
return"JavaScript function for "+J.aB(t)},
$ia4:1}
J.aG.prototype={
gp(a){return 0},
i(a){return String(a)}}
J.aI.prototype={
gp(a){return 0},
i(a){return String(a)}}
J.j.prototype={
u(a,b){A.G(a).c.a(b)
a.$flags&1&&A.k(a,29)
a.push(b)},
F(a,b){var t
A.G(a).m("c<1>").a(b)
a.$flags&1&&A.k(a,"addAll",2)
if(Array.isArray(b)){this.aT(a,b)
return}for(t=J.cC(b);t.v();)a.push(t.gA())},
aT(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.h(A.am(a))
for(s=0;s<t;++s)a.push(b[s])},
b6(a){a.$flags&1&&A.k(a,"clear","clear")
a.length=0},
ba(a,b,c){var t,s,r,q=A.G(a)
q.m("az(1)").a(b)
q.m("1()?").a(c)
t=a.length
for(s=0;s<t;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==t)throw A.h(A.am(a))}q=c.$0()
return q},
M(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
aR(a,b){var t=a.length
if(b>t)throw A.h(A.bG(b,0,t,"start",null))
if(b===t)return A.f([],A.G(a))
return A.f(a.slice(b,t),A.G(a))},
aQ(a){var t,s,r,q,p,o
a.$flags&2&&A.k(a,"sort")
t=a.length
if(t<2)return
if(t===2){s=a[0]
r=a[1]
q=J.dc(s,r)
if(typeof q!=="number")return q.bm()
if(q>0){a[0]=r
a[1]=s}return}p=0
if(A.G(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.fy(J.f7(),2))
if(p>0)this.b0(a,p)},
b0(a,b){var t,s=a.length
for(;t=s-1,s>0;s=t)if(a[t]===null){a[t]=void 0;--b
if(b===0)break}},
i(a){return A.db(a,"[","]")},
gC(a){return new J.ak(a,a.length,A.G(a).m("ak<1>"))},
gp(a){return A.bE(a)},
gj(a){return a.length},
Z(a,b,c){A.G(a).c.a(c)
a.$flags&2&&A.k(a)
if(!(b>=0&&b<a.length))throw A.h(A.cW(a,b))
a[b]=c},
$ic:1,
$ie:1}
J.bm.prototype={
bi(a){var t,s,r
if(!Array.isArray(a))return null
t=a.$flags|0
if((t&4)!==0)s="const, "
else if((t&2)!==0)s="unmodifiable, "
else s=(t&1)!==0?"fixed, ":""
r="Instance of '"+A.bF(a)+"'"
if(s==="")return r
return r+" ("+s+"length: "+a.length+")"}}
J.c4.prototype={}
J.ak.prototype={
gA(){var t=this.d
return t==null?this.$ti.c.a(t):t},
v(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.t(r)
throw A.h(r)}t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.an.prototype={
X(a,b){var t
A.b5(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.ga3(b)
if(this.ga3(a)===t)return 0
if(this.ga3(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga3(a){return a===0?1/a<0:a<0},
aK(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.h(A.bS(""+a+".toInt()"))},
T(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw A.h(A.bS(""+a+".ceil()"))},
B(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw A.h(A.bS(""+a+".floor()"))},
a5(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.h(A.bS(""+a+".round()"))},
G(a,b,c){if(B.e.X(b,c)>0)throw A.h(A.fw(b))
if(this.X(a,b)<0)return b
if(this.X(a,c)>0)return c
return a},
aL(a,b){var t
if(b>20)throw A.h(A.bG(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.ga3(a))return"-"+t
return t},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gp(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
ak(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.b3(a,b)},
b3(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.h(A.bS("Result of truncating division is "+A.n(t)+": "+A.n(a)+" ~/ "+b))},
b2(a,b){var t
if(a>0)t=this.b1(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
b1(a,b){return b>31?0:a>>>b},
gq(a){return A.ae(u.o)},
$iR:1,
$id:1,
$iA:1}
J.aE.prototype={
gq(a){return A.ae(u.S)},
$ii:1,
$ib:1}
J.bo.prototype={
gq(a){return A.ae(u.i)},
$ii:1}
J.ao.prototype={
X(a,b){var t
A.O(b)
if(a===b)t=0
else t=a<b?-1:1
return t},
i(a){return a},
gp(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gq(a){return A.ae(u.R)},
gj(a){return a.length},
$ii:1,
$iR:1,
$iq:1}
A.bq.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.cd.prototype={}
A.aC.prototype={}
A.T.prototype={
gC(a){var t=this
return new A.ap(t,t.gj(t),A.P(t).m("ap<T.E>"))}}
A.ap.prototype={
gA(){var t=this.d
return t==null?this.$ti.c.a(t):t},
v(){var t,s=this,r=s.a,q=J.dL(r),p=q.gj(r)
if(s.b!==p)throw A.h(A.am(r))
t=s.c
if(t>=p){s.d=null
return!1}s.d=q.M(r,t);++s.c
return!0}}
A.y.prototype={}
A.V.prototype={
gj(a){return this.a.length},
M(a,b){var t=this.a
return J.e8(t,t.length-1-b)}}
A.N.prototype={$r:"+(1,2)",$s:1}
A.E.prototype={$r:"+(1,2,3)",$s:2}
A.av.prototype={$r:"+(1,2,3,4)",$s:3}
A.aT.prototype={}
A.cf.prototype={
D(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
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
A.aR.prototype={
i(a){return"Null check operator used on a null value"}}
A.bp.prototype={
i(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
A.bR.prototype={
i(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
A.ca.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.Z.prototype={
i(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.dU(s==null?"unknown":s)+"'"},
$ia4:1,
gbl(){return this},
$C:"$1",
$R:1,
$D:null}
A.bb.prototype={$C:"$0",$R:0}
A.bc.prototype={$C:"$2",$R:2}
A.bP.prototype={}
A.bM.prototype={
i(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.dU(t)+"'"}}
A.al.prototype={
H(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.al))return!1
return this.$_target===b.$_target&&this.a===b.a},
gp(a){return(A.dP(this.a)^A.bE(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bF(this.a)+"'")}}
A.bI.prototype={
i(a){return"RuntimeError: "+this.a}}
A.aJ.prototype={
gj(a){return this.a},
gV(){return new A.a5(this,A.P(this).m("a5<1>"))},
t(a,b){var t,s,r,q,p=null
if(typeof b=="string"){t=this.b
if(t==null)return p
s=t[b]
r=s==null?p:s.b
return r}else if(typeof b=="number"&&(b&0x3fffffff)===b){q=this.c
if(q==null)return p
s=q[b]
r=s==null?p:s.b
return r}else return this.bf(b)},
bf(a){var t,s,r=this.d
if(r==null)return null
t=this.aW(r,a)
s=this.aF(t,a)
if(s<0)return null
return t[s].b},
Z(a,b,c){var t,s,r,q,p,o,n=this,m=A.P(n)
m.c.a(b)
m.y[1].a(c)
if(typeof b=="string"){t=n.b
n.al(t==null?n.b=n.ac():t,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){s=n.c
n.al(s==null?n.c=n.ac():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.ac()
q=n.aE(b)
p=r[q]
if(p==null)r[q]=[n.ad(b,c)]
else{o=n.aF(p,b)
if(o>=0)p[o].b=c
else p.push(n.ad(b,c))}}},
a2(a,b){var t,s,r=this
A.P(r).m("~(1,2)").a(b)
t=r.e
s=r.r
while(t!=null){b.$2(t.a,t.b)
if(s!==r.r)throw A.h(A.am(r))
t=t.c}},
al(a,b,c){var t,s=A.P(this)
s.c.a(b)
s.y[1].a(c)
t=a[b]
if(t==null)a[b]=this.ad(b,c)
else t.b=c},
ad(a,b){var t=this,s=A.P(t),r=new A.c7(s.c.a(a),s.y[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
aE(a){return J.Q(a)&1073741823},
aW(a,b){return a[this.aE(b)]},
aF(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.aj(a[s].a,b))return s
return-1},
i(a){return A.de(this)},
ac(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t}}
A.c7.prototype={}
A.a5.prototype={
gj(a){return this.a.a},
gC(a){var t=this.a
return new A.bs(t,t.r,t.e,this.$ti.m("bs<1>"))}}
A.bs.prototype={
gA(){return this.d},
v(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.h(A.am(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.a
s.c=t.c
return!0}}}
A.cw.prototype={
$1(a){return this.a(a)},
$S:0}
A.cx.prototype={
$2(a,b){return this.a(a,b)},
$S:1}
A.cy.prototype={
$1(a){return this.a(A.O(a))},
$S:2}
A.J.prototype={
i(a){return this.ao(!1)},
ao(a){var t,s,r,q,p,o=this.aV(),n=this.a0(),m=(a?"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
if(!(r<n.length))return A.a(n,r)
p=n[r]
m=a?m+A.dh(p):m+A.n(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
aV(){var t,s=this.$s
while($.ck.length<=s)B.c.u($.ck,null)
t=$.ck[s]
if(t==null){t=this.aU()
B.c.Z($.ck,s,t)}return t},
aU(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=A.f(new Array(m),u.f)
for(t=0;t<m;++t)l[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
B.c.Z(l,r,s[t])}}l=A.eq(l,!1,u.K)
l.$flags=3
return l}}
A.as.prototype={
a0(){return[this.a,this.b]},
H(a,b){if(b==null)return!1
return b instanceof A.as&&this.$s===b.$s&&J.aj(this.a,b.a)&&J.aj(this.b,b.b)},
gp(a){return A.cH(this.$s,this.a,this.b,B.k)}}
A.at.prototype={
a0(){return[this.a,this.b,this.c]},
H(a,b){var t=this
if(b==null)return!1
return b instanceof A.at&&t.$s===b.$s&&J.aj(t.a,b.a)&&J.aj(t.b,b.b)&&J.aj(t.c,b.c)},
gp(a){var t=this
return A.cH(t.$s,t.a,t.b,t.c)}}
A.au.prototype={
a0(){return this.a},
H(a,b){if(b==null)return!1
return b instanceof A.au&&this.$s===b.$s&&A.eG(this.a,b.a)},
gp(a){return A.cH(this.$s,A.er(this.a),B.k,B.k)}}
A.a1.prototype={
gq(a){return B.aT},
$ii:1,
$ia1:1}
A.a7.prototype={$ia7:1}
A.aP.prototype={
gb5(a){if(((a.$flags|0)&2)!==0){a.buffer
return new A.cn()}else return a.buffer},
aX(a,b,c,d){var t=A.bG(b,0,c,d,null)
throw A.h(t)},
am(a,b,c,d){if(b>>>0!==b||b>c)this.aX(a,b,c,d)}}
A.cn.prototype={}
A.bv.prototype={
gq(a){return B.aU},
$ii:1}
A.v.prototype={
gj(a){return a.length},
$iB:1}
A.aN.prototype={
t(a,b){A.eZ(b,a,a.length)
return a[b]},
aP(a,b,c,d,e){var t,s,r,q
u.l.a(d)
a.$flags&2&&A.k(a,5)
t=a.length
this.am(a,b,t,"start")
this.am(a,c,t,"end")
if(b>c)A.ai(A.bG(b,0,c,null,null))
s=c-b
if(e<0)A.ai(A.b8(e))
r=d.length
if(r-e<s)A.ai(A.eu("Not enough elements"))
q=e!==0||r!==s?d.subarray(e,e+s):d
a.set(q,b)
return},
$ic:1,
$ie:1}
A.aO.prototype={$ic:1,$ie:1}
A.aM.prototype={
gq(a){return B.aV},
$ii:1,
$icD:1}
A.bw.prototype={
gq(a){return B.aW},
$ii:1}
A.bx.prototype={
gq(a){return B.aX},
$ii:1}
A.by.prototype={
gq(a){return B.aY},
$ii:1}
A.bz.prototype={
gq(a){return B.aZ},
$ii:1}
A.bA.prototype={
gq(a){return B.b0},
$ii:1}
A.bB.prototype={
gq(a){return B.b1},
$ii:1}
A.aQ.prototype={
gq(a){return B.b2},
gj(a){return a.length},
$ii:1}
A.a8.prototype={
gq(a){return B.b3},
gj(a){return a.length},
$ii:1,
$ia8:1,
$icJ:1}
A.aX.prototype={}
A.aY.prototype={}
A.aZ.prototype={}
A.b_.prototype={}
A.I.prototype={
m(a){return A.b4(v.typeUniverse,this,a)},
a9(a){return A.dw(v.typeUniverse,this,a)}}
A.bU.prototype={}
A.cl.prototype={
i(a){return A.C(this.a,null)}}
A.bT.prototype={
i(a){return this.a}}
A.b0.prototype={}
A.l.prototype={
gC(a){return new A.ap(a,a.length,A.b7(a).m("ap<l.E>"))},
M(a,b){if(!(b>=0&&b<a.length))return A.a(a,b)
return a[b]},
i(a){return A.db(a,"[","]")}}
A.x.prototype={
a2(a,b){var t,s,r,q=A.P(this)
q.m("~(x.K,x.V)").a(b)
for(t=this.gV(),t=t.gC(t),q=q.m("x.V");t.v();){s=t.gA()
r=this.t(0,s)
b.$2(s,r==null?q.a(r):r)}},
bg(a,b,c,d){var t,s,r,q,p,o=A.P(this)
o.a9(c).a9(d).m("a6<1,2>(x.K,x.V)").a(b)
t=A.ep(c,d)
for(s=this.gV(),s=s.gC(s),o=o.m("x.V");s.v();){r=s.gA()
q=this.t(0,r)
p=b.$2(r,q==null?o.a(q):q)
t.Z(0,p.a,p.b)}return t},
gj(a){var t=this.gV()
return t.gj(t)},
i(a){return A.de(this)},
$iaL:1}
A.c8.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=A.n(a)
s.a=(s.a+=t)+": "
t=A.n(b)
s.a+=t},
$S:3}
A.bV.prototype={
t(a,b){var t,s=this.b
if(s==null)return this.c.t(0,b)
else if(typeof b!="string")return null
else{t=s[b]
return typeof t=="undefined"?this.aZ(b):t}},
gj(a){return this.b==null?this.c.a:this.a_().length},
gV(){if(this.b==null){var t=this.c
return new A.a5(t,A.P(t).m("a5<1>"))}return new A.bW(this)},
a2(a,b){var t,s,r,q,p=this
u.cQ.a(b)
if(p.b==null)return p.c.a2(0,b)
t=p.a_()
for(s=0;s<t.length;++s){r=t[s]
q=p.b[r]
if(typeof q=="undefined"){q=A.cp(p.a[r])
p.b[r]=q}b.$2(r,q)
if(t!==p.c)throw A.h(A.am(p))}},
a_(){var t=u.x.a(this.c)
if(t==null)t=this.c=A.f(Object.keys(this.a),u.s)
return t},
aZ(a){var t
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
t=A.cp(this.a[a])
return this.b[a]=t}}
A.bW.prototype={
gj(a){return this.a.gj(0)},
M(a,b){var t=this.a
if(t.b==null)t=t.gV().M(0,b)
else{t=t.a_()
if(!(b>=0&&b<t.length))return A.a(t,b)
t=t[b]}return t},
gC(a){var t=this.a
if(t.b==null){t=t.gV()
t=t.gC(t)}else{t=t.a_()
t=new J.ak(t,t.length,A.G(t).m("ak<1>"))}return t}}
A.bd.prototype={}
A.bg.prototype={}
A.c5.prototype={
az(a,b){var t=A.fk(a,this.gb7().a)
return t},
gb7(){return B.ae}}
A.c6.prototype={}
A.ch.prototype={
i(a){return this.an()}}
A.p.prototype={}
A.b9.prototype={
i(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.c_(t)
return"Assertion failed"}}
A.aV.prototype={}
A.Y.prototype={
gab(){return"Invalid argument"+(!this.a?"(s)":"")},
gaa(){return""},
i(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+A.n(q),o=t.gab()+r+p
if(!t.a)return o
return o+t.gaa()+": "+A.c_(t.gaf())},
gaf(){return this.b}}
A.aS.prototype={
gaf(){return A.dz(this.b)},
gab(){return"RangeError"},
gaa(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.n(r):""
else if(r==null)t=": Not greater than or equal to "+A.n(s)
else if(r>s)t=": Not in inclusive range "+A.n(s)+".."+A.n(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.n(s)
return t}}
A.bk.prototype={
gaf(){return A.ab(this.b)},
gab(){return"RangeError"},
gaa(){if(A.ab(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gj(a){return this.f}}
A.aW.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.bQ.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.bL.prototype={
i(a){return"Bad state: "+this.a}}
A.be.prototype={
i(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.c_(t)+"."}}
A.aU.prototype={
i(a){return"Stack Overflow"},
$ip:1}
A.ci.prototype={
i(a){return"Exception: "+this.a}}
A.c3.prototype={
i(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException"
return s}}
A.c.prototype={
gj(a){var t,s=this.gC(this)
for(t=0;s.v();)++t
return t},
M(a,b){var t,s
A.es(b,"index")
t=this.gC(this)
for(s=b;t.v();){if(s===0)return t.gA();--s}throw A.h(A.da(b,b-s,this,"index"))},
i(a){return A.eo(this,"(",")")}}
A.a6.prototype={
i(a){return"MapEntry("+this.a+": "+A.n(this.b)+")"}}
A.a9.prototype={
gp(a){return A.m.prototype.gp.call(this,0)},
i(a){return"null"}}
A.m.prototype={$im:1,
H(a,b){return this===b},
gp(a){return A.bE(this)},
i(a){return"Instance of '"+A.bF(this)+"'"},
gq(a){return A.fF(this)},
toString(){return this.i(this)}}
A.bN.prototype={
gj(a){return this.a.length},
i(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.cs.prototype={
$1(a){return u.v.a(a).gN()===this.a},
$S:4}
A.ct.prototype={
$0(){return A.ai(A.b8("Unknown filter "+this.a))},
$S:5}
A.bj.prototype={
gN(){return"glow_makeup"},
gP(){return B.a4},
R(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h
u.j.a(b)
for(t=b.length,s=0.85*d,r=0.75*d,q=0.6*d,p=0.55*d,o=0;o<b.length;b.length===t||(0,A.t)(b),++o){n=b[o]
m=new A.a3(n)
l=new A.aK(a,n,m)
m=m.J()
l.d=m
k=n.h(B.a)
j=n.h(B.b)
i=k.a-j.a
j=k.b-j.b
A.bY(a,m,Math.max(1,Math.sqrt(i*i+j*j)),q,0.05)
l.b9(B.aB,s)
l.aH(s)
l.aB(r,0.022,0.2)
l.av(q)
l.ar(B.av,p)
l.ah(B.aF,s,q)
l.bc(d,B.aD)}A.ax(a,B.a1.I(d))
h=c.b.t(0,"glow")
A.bX(a,0.04,0.65*(h==null?0.6:h)*d,0.5,B.ai)
A.fv(a,0.18*d)}}
A.br.prototype={
gN(){return"light"},
gP(){return B.a5},
R(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i
u.j.a(b)
A.ax(a,B.a2.I(d))
A.fs(a,0.018,0.2*d)
A.bX(a,0.04,0.32*d,0.65,B.v)
t=c.bb("protectFace",!0)
for(s=b.length,r=0.18*d,q=0.25*d,p=0;p<b.length;b.length===s||(0,A.t)(b),++p){o=b[p]
n=new A.a3(o)
m=n.W(o.l(B.f),0.25)
A.ad(a,m,B.j,1,0.97,0.95,r)
l=n.J()
k=o.h(B.a)
j=o.h(B.b)
i=k.a-j.a
j=k.b-j.b
A.bY(a,l,Math.max(1,Math.sqrt(i*i+j*j)),q,0.05)
if(t)this.b_(a,m,d)}},
b_(a,a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
for(t=a0.d,s=a0.c,r=a.c,q=r.length,p=r.$flags|0,o=a0.b,n=a.a,m=a0.a,l=a0.r,k=l.length,j=0;j<t;++j)for(i=(j+o)*n,h=j*s,g=0;g<s;++g){f=h+g
if(!(f>=0&&f<k))return A.a(l,f)
e=l[f]*a1
if(e<=0.01)continue
d=(i+g+m)*3
for(c=0;c<3;++c){f=d+c
if(!(f>=0&&f<q))return A.a(r,f)
b=r[f]
if(b>0.78){p&2&&A.k(r)
r[f]=b+(0.78+(b-0.78)*0.45-b)*e}}}}}
A.bC.prototype={
gN(){return"neon_lines"},
gP(){return B.a6},
R(b5,b6,b7,b8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
u.j.a(b6)
t=b7.b.t(0,"glow")
s=0.5+(t==null?0.5:t)
r=b6.length===0?A.fB(b5):null
A.ax(b5,B.Z.I(b8))
if(r!=null){this.aY(b5,r,b8,s)
return}for(t=b6.length,q=0.9*b8,p=u.n,o=0.85*b8,n=b5.a,m=b5.b,l=u._,k=u.G,j=0;j<b6.length;b6.length===t||(0,A.t)(b6),++j){i=b6[j]
h=i.h(B.a)
g=i.h(B.b)
f=h.a-g.a
g=h.b-g.b
e=Math.max(1,Math.sqrt(f*f+g*g))
d=[new A.E(B.w,A.f([i.l(B.f)],k),!0),new A.E(B.n,A.f([A.d7(i.l(B.f),1.1)],k),!0),new A.E(B.n,A.f([i.l(B.a),i.l(B.b)],k),!0),new A.E(B.az,A.f([i.l(B.B),i.l(B.y)],k),!1),new A.E(B.n,A.f([i.l(B.c.aR(B.at,1)),i.l(B.aE)],k),!1),new A.E(B.w,A.f([i.l(B.m)],k),!0)]
for(h=e*0.012,g=e*0.022,f=e*0.12,c=e*0.07*s,b=e*0.011,a=e*0.35*s,a0=e*0.05,a1=0;a1<6;++a1){a2=d[a1]
a3=A.f([],l)
for(a4=a2.b,a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.t)(a4),++a6)B.c.F(a3,a4[a6])
a7=A.U(n,m,a3,a)
a8=A.U(n,m,a3,a0)
for(a5=a4.length,a9=a2.c,a6=0;a6<a4.length;a4.length===a5||(0,A.t)(a4),++a6){b0=a4[a6]
a7.a7(b0,h,a9,c)
a8.a7(b0,b,a9,0.75)}a5=a2.a
b1=a5.length
if(0>=b1)return A.a(a5,0)
b2=a5[0]
if(1>=b1)return A.a(a5,1)
b3=a5[1]
if(2>=b1)return A.a(a5,2)
A.ad(b5,a7,B.j,b2,b3,a5[2],o)
b4=A.U(n,m,a3,f)
for(a3=a4.length,a6=0;a6<a4.length;a4.length===a3||(0,A.t)(a4),++a6)b4.a7(a4[a6],h,a9,g)
a3=a5.length
if(0>=a3)return A.a(a5,0)
a4=a5[0]
if(1>=a3)return A.a(a5,1)
a9=a5[1]
if(2>=a3)return A.a(a5,2)
A.ad(b5,b4,B.j,a4,a9,a5[2],q)
a9=A.f([],p)
for(a3=a5.length,a6=0;a6<a5.length;a5.length===a3||(0,A.t)(a5),++a6)a9.push(0.55+0.45*a5[a6])
a3=a9.length
if(0>=a3)return A.a(a9,0)
a4=a9[0]
if(1>=a3)return A.a(a9,1)
a5=a9[1]
if(2>=a3)return A.a(a9,2)
A.ad(b5,a8,B.j,a4,a5,a9[2],b8)}}},
aY(a4,a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=a4.a,a2=a4.b,a3=new Float32Array(A.cq(a5))
A.b6(a3,a1,a2,1,Math.max(1,Math.max(a1,a2)*0.006*a7))
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
s&2&&A.k(t)
t[c]=1-(1-b)*(1-a*a0)}}}}
A.z.prototype={
b4(a,b,c){var t,s,r=A.ek(c),q=A.f([],u.h),p=a.gbk(),o=p.length,n=c.a,m=c.b,l=0
for(;l<p.length;p.length===o||(0,A.t)(p),++l)q.push(new A.aD(p[l],n,m))
t=B.d.G(b.a,0,1)
if(t>0)this.R(r,q,b,t)
s=this.gP().d&&q.length===0?"No face found, so only the overall look was applied.":null
return new A.cb(r.bh(),q.length,s)}}
A.bH.prototype={
gN(){return"rosy_haze"},
gP(){return B.a7},
R(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
u.j.a(b)
for(t=b.length,s=0.7*d,r=0.5*d,q=0.3*d,p=0;p<b.length;b.length===t||(0,A.t)(b),++p){o=b[p]
n=new A.a3(o)
m=new A.aK(a,o,n)
l=n.J()
m.d=l
k=o.h(B.a)
j=o.h(B.b)
i=k.a-j.a
j=k.b-j.b
A.bY(a,l,Math.max(1,Math.sqrt(i*i+j*j)),q,0.05)
m.au(B.as,s,1.15)
m.ah(B.ak,s,r)
h=n.ae(0.0001)
n=o.k(1)
j=o.h(B.a)
i=o.h(B.b)
l=j.a-i.a
i=j.b-i.b
i=Math.max(1,Math.sqrt(l*l+i*i))
l=o.h(B.a)
j=o.h(B.b)
k=l.a-j.a
j=l.b-j.b
h.L(n,i*0.12,Math.max(1,Math.sqrt(k*k+j*j))*0.08,0,0.6)
A.ad(a,h,B.h,0.93,0.42,0.52,r)}g=c.b.t(0,"haze")
if(g==null)g=0.5
A.ax(a,B.Y.I(d))
A.ft(a,B.ar,0.55*g*d)
A.bX(a,0.035,0.45*d,0.55,B.an)}}
A.bJ.prototype={
gN(){return"serum"},
gP(){return B.a8},
R(a,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
u.j.a(a0)
A.ax(a,B.a0.I(a2))
for(t=a0.length,s=0.25*a2,r=a1.b,q=0.9*a2,p=0.55*a2,o=0.7*a2,n=0.6*a2,m=0.35*a2,l=0.75*a2,k=a1.c,j=0,i=0;i<a0.length;a0.length===t||(0,A.t)(a0),++i){h=a0[i]
g=new A.a3(h)
f=new A.aK(a,h,g)
e=g.J()
f.d=e
d=h.h(B.a)
c=h.h(B.b)
b=d.a-c.a
c=d.b-c.b
A.bY(a,e,Math.max(1,Math.sqrt(b*b+c*c)),l,0.06)
f.bd(q,1.1)
f.av(p)
f.aH(o)
f.aB(n,0.022,0.12)
f.ar(B.al,m)
f.ah(B.aI,p,q)
e=r.t(0,"freckles")
if(e==null)e=0
if(e>=0.5){e=f.d
if(e==null)e=f.d=g.J()
A.dQ(a,h,e,0.4,n,k+31*j)}e=f.d
A.ad(a,e==null?f.d=g.J():e,B.h,1,0.95,0.92,s);++j}A.bX(a,0.02,s,0.72,B.v)}}
A.bK.prototype={
gN(){return"soft_freckles"},
gP(){return B.a9},
R(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
u.j.a(b)
A.ax(a,B.a3.I(d))
for(t=b.length,s=0.35*d,r=0.25*d,q=c.c,p=c.b,o=0,n=0;n<b.length;b.length===t||(0,A.t)(b),++n,o=g){m=b[n]
l=new A.a3(m)
k=l.J()
j=m.h(B.a)
i=m.h(B.b)
h=j.a-i.a
i=j.b-i.b
A.bY(a,k,Math.max(1,Math.sqrt(h*h+i*i)),s,0.05)
A.ad(a,l.ae(1.1),B.h,0.95,0.55,0.45,r)
g=o+1
i=p.t(0,"density")
j=i==null?0.55:i
A.dQ(a,m,k,j,d,q+7919*o)}}}
A.bO.prototype={
gN(){return"sunny_effect"},
gP(){return B.aa},
R(a,b,c,d){var t
u.j.a(b)
A.ax(a,B.a_.I(d))
t=c.b.t(0,"sunGlow")
A.fu(a,0.92,-0.05,0.75,B.ah,0.45*((t==null?0.6:t)*d))
A.bX(a,0.025,0.25*d,0.7,B.af)}}
A.r.prototype={
aN(a,b){return new A.r(this.a+b.a,this.b+b.b)},
n(a,b){return new A.r(this.a-b.a,this.b-b.b)},
a6(a,b){return new A.r(this.a*b,this.b*b)},
gj(a){var t=this.a,s=this.b
return Math.sqrt(t*t+s*s)},
E(a,b){var t=this.a,s=this.b
return new A.r(t+(a.a-t)*b,s+(a.b-s)*b)},
i(a){return"Vec2("+B.d.aL(this.a,1)+", "+B.d.aL(this.b,1)+")"}}
A.bh.prototype={}
A.aD.prototype={
k(a){var t,s=this.a.a,r=a*2,q=s.length
if(!(r>=0&&r<q))return A.a(s,r)
t=s[r];++r
if(!(r<q))return A.a(s,r)
return new A.r(t*this.b,s[r]*this.c)},
l(a){var t,s,r
u.L.a(a)
t=A.f([],u._)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.t)(a),++r)t.push(this.k(a[r]))
return t},
h(a){var t,s,r,q
u.L.a(a)
for(t=0,s=0,r=0;r<16;++r){q=this.k(a[r])
t+=q.a
s+=q.b}return new A.r(t/16,s/16)},
gaJ(){var t=A.bt(this.l(B.B),u.a),s=this.l(B.C)
B.c.F(t,new A.V(s,A.G(s).m("V<1>")))
return t},
gaG(){var t=A.bt(this.l(B.y),u.a),s=this.l(B.z)
B.c.F(t,new A.V(s,A.G(s).m("V<1>")))
return t}}
A.c0.prototype={
gbk(){var t,s,r,q,p=A.f([],u.q)
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,A.t)(t),++r){q=t[r]
if((q.a.length/2|0)>=468)p.push(q)}return p}}
A.bf.prototype={
an(){return"ControlKind."+this.b}}
A.M.prototype={}
A.S.prototype={}
A.c1.prototype={
bb(a,b){var t=this.b.t(0,a)
if(t==null)t=b?1:0
return t>=0.5}}
A.c2.prototype={
$2(a,b){return new A.a6(A.O(a),A.b5(b),u.U)},
$S:6}
A.bu.prototype={}
A.cb.prototype={}
A.aq.prototype={
an(){return"PixelBlend."+this.b}}
A.L.prototype={
I(a){var t,s,r,q=this,p=u.n,o=A.f([],p)
for(t=q.z,s=t.length,r=0;r<t.length;t.length===s||(0,A.t)(t),++r)o.push(t[r]*a)
p=A.f([],p)
for(t=q.Q,s=t.length,r=0;r<t.length;t.length===s||(0,A.t)(t),++r)p.push(t[r]*a)
return new A.L(q.a*a,q.b*a,q.c*a,q.d*a,q.e*a,q.f*a,q.r*a,q.w*a,q.x*a,q.y*a,o,p)}}
A.c9.prototype={
gag(a){return this.c<=0||this.d<=0},
a1(a,b){var t,s,r=this,q=a-r.a,p=b-r.b
if(q<0||p<0||q>=r.c||p>=r.d)return 0
t=r.r
s=p*r.c+q
if(!(s>=0&&s<t.length))return A.a(t,s)
return t[s]},
aC(a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this
u.E.a(a6)
if(a6.length<3||a5.gag(0))return
t=A.f([],u.n)
for(s=a5.d,r=a5.r,q=r.length,p=a5.c,o=r.$flags|0,n=a5.a,m=p-1,l=a5.b,k=0;k<s;++k){j=k+l+0.5
B.c.b6(t)
for(i=0;h=a6.length,i<h;){g=a6[i];++i
f=a6[i%h]
h=g.b
if(!(h<=j&&f.b>j))e=f.b<=j&&h>j
else e=!0
if(e){e=g.a
B.c.u(t,e+(j-h)/(f.b-h)*(f.a-e))}}if(t.length<2)continue
B.c.aQ(t)
for(h=k*p,d=0;e=d+1,c=t.length,e<c;d+=2){if(!(d<c))return A.a(t,d)
b=t[d]-n
a=t[e]-n
a0=Math.max(0,B.d.B(b))
a1=Math.min(m,B.d.B(a))
for(a2=a0;a2<=a1;a2=a3){a3=a2+1
a4=B.d.G(Math.min(a3,a)-Math.max(a2,b),0,1)
i=h+a2
if(!(i>=0&&i<q))return A.a(r,i)
if(a4>r[i]){o&2&&A.k(r)
r[i]=a4}}}}},
aj(b3,b4,b5,b6,b7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=b5+b6*3+1,a=b3.a,a0=b4.a,a1=c.a,a2=Math.max(0,B.d.B(Math.min(a,a0)-b-a1)),a3=c.c,a4=Math.min(a3-1,B.d.T(Math.max(a,a0)+b-a1)),a5=b3.b,a6=b4.b,a7=c.b,a8=Math.max(0,B.d.B(Math.min(a5,a6)-b-a7)),a9=Math.min(c.d-1,B.d.T(Math.max(a5,a6)+b-a7)),b0=a0-a,b1=a6-a5,b2=b0*b0+b1*b1
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
if(f>a0[d]){q&2&&A.k(a0)
a0[d]=f}}}},
ai(a,b,c,d){return this.aj(a,b,c,d,1)},
a7(a,b,c,d){var t,s,r,q
u.E.a(a)
t=a.length
t=c?t:t-1
for(s=0;s<t;s=q){r=a.length
if(!(s<r))return A.a(a,s)
q=s+1
this.aj(a[s],a[q%r],b,d,1)}},
L(a7,a8,a9,b0,b1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=Math.max(a8,a9)*2.2,d=a7.a,c=f.a,b=Math.max(0,B.d.B(d-e-c)),a=f.c,a0=Math.min(a-1,B.d.T(d+e-c)),a1=a7.b,a2=f.b,a3=Math.max(0,B.d.B(a1-e-a2)),a4=Math.min(f.d-1,B.d.T(a1+e-a2)),a5=Math.cos(b0),a6=Math.sin(b0)
for(t=f.r,s=t.length,r=t.$flags|0,q=a3;q<=a4;++q){p=q+a2+0.5-a1
for(o=p*a6,n=p*a5,m=q*a,l=b;l<=a0;++l){k=l+c+0.5-d
j=(k*a5+o)/a8
i=(-k*a6+n)/a9
h=Math.exp(-(j*j+i*i)*1.4)*b1
g=m+l
if(!(g>=0&&g<s))return A.a(t,g)
if(h>t[g]){r&2&&A.k(t)
t[g]=h}}}},
aq(a,b,c,d){return this.L(a,b,c,d,1)},
U(a){var t=this
if(t.gag(0))return
A.b6(t.r,t.c,t.d,1,a)},
a8(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(t=f.d,s=f.c,r=f.a,q=f.b,p=f.r,o=p.length,n=0;n<t;++n)for(m=n+q,l=n*s,k=0;k<s;++k){j=a.a1(k+r,m)
if(j>0){i=l+k
if(!(i>=0&&i<o))return A.a(p,i)
h=p[i]
g=j*b
if(g<0)g=0
else if(g>1)g=1
p.$flags&2&&A.k(p)
p[i]=h*(1-g)}}},
S(a){return this.a8(a,1)},
a4(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(t=f.d,s=f.c,r=f.r,q=r.length,p=f.a,o=f.b,n=r.$flags|0,m=0;m<t;++m)for(l=m*s,k=m+o,j=0;j<s;++j){i=l+j
if(!(i>=0&&i<q))return A.a(r,i)
h=r[i]
g=a.a1(j+p,k)
n&2&&A.k(r)
r[i]=h*g}}}
A.a3.prototype={
K(a,b,c){var t,s,r,q
u.E.a(a)
t=c===1?a:A.d7(a,c)
s=this.a
r=b*Math.max(1,s.h(B.a).n(0,s.h(B.b)).gj(0))
q=A.U(s.b,s.c,t,r*3+2)
q.aC(t)
if(r>0.4)q.U(r)
return q},
W(a,b){return this.K(a,b,1)},
Y(a,b){var t=this,s=t.a
return t.ap(t.K(s.l(B.a),a,b),t.K(s.l(B.b),a,b))},
aw(a,b){var t=this,s=t.a
return t.ap(t.K(s.gaJ(),a,b),t.K(s.gaG(),a,b))},
J(){var t=this,s=t.a,r=t.W(s.l(B.f),0.08)
r.S(t.Y(0.06,1.6))
r.a8(t.aw(0.05,1.3),0.9)
r.S(t.K(s.l(B.m),0.04,1.12))
return r},
ae(a){var t,s,r,q,p,o,n,m,l,k,j=this.a,i=A.U(j.b,j.c,j.l(B.f),0)
for(t=[B.aS,B.aR],s=0;s<2;++s){r=t[s]
q=r.b
p=j.k(r.a).E(j.k(q),0.25)
o=j.k(q)
n=r.c
m=j.k(n)
l=Math.atan2(o.b-m.b,o.a-m.a)
q=j.k(q)
n=j.k(n)
m=q.a-n.a
n=q.b-n.b
k=Math.sqrt(m*m+n*n)
n=j.h(B.a)
m=j.h(B.b)
q=n.a-m.a
m=n.b-m.b
m=Math.max(k*0.6,Math.max(1,Math.sqrt(q*q+m*m))*0.12)
q=j.h(B.a)
n=j.h(B.b)
o=q.a-n.a
n=q.b-n.b
i.L(p,m*a,Math.max(1,Math.sqrt(o*o+n*n))*0.22*a,l,0.85)}i.S(this.Y(0.08,1.8))
return i},
aM(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.a,b=A.bt(c.l(B.a),u.a)
B.c.F(b,c.l(B.b))
t=A.U(c.b,c.c,b,Math.max(1,c.h(B.a).n(0,c.h(B.b)).gj(0))*0.5)
for(b=[B.x,B.A],s=a0>0,r=0;r<2;++r){q=c.l(b[r])
for(p=q.length-1,o=0;o<p;o=k){n=c.h(B.a)
m=c.h(B.b)
l=n.a-m.a
m=n.b-m.b
m=Math.max(1,Math.sqrt(l*l+m*m))
l=q.length
if(!(o<l))return A.a(q,o)
n=q[o]
k=o+1
if(!(k<l))return A.a(q,k)
l=q[k]
j=c.h(B.a)
i=c.h(B.b)
h=j.a-i.a
i=j.b-i.b
t.ai(n,l,m*a*(0.45+0.75*(1-o/p)),Math.max(1,Math.sqrt(h*h+i*i))*0.008)}if(s){p=q.length
if(0>=p)return A.a(q,0)
g=q[0]
if(2>=p)return A.a(q,2)
p=q[2]
n=g.a
m=n-p.a
l=g.b
p=l-p.b
f=Math.max(0.001,Math.sqrt(m*m+p*p))
j=c.h(B.a)
i=c.h(B.b)
h=j.a-i.a
i=j.b-i.b
i=Math.max(1,Math.sqrt(h*h+i*i))*a0
h=c.h(B.a)
j=c.h(B.b)
e=h.a-j.a
j=h.b-j.b
j=Math.max(1,Math.sqrt(e*e+j*j))
e=c.h(B.a)
h=c.h(B.b)
d=e.a-h.a
h=e.b-h.b
t.ai(g,new A.r(n+m/f*i,l+(p/f-0.45)*i),j*a*0.55,Math.max(1,Math.sqrt(d*d+h*h))*0.01)}}return t},
bj(a){return this.aM(a,0)},
b8(){var t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=u.a,f=A.bt(h.gaJ(),g)
B.c.F(f,h.gaG())
B.c.F(f,h.l(B.a))
B.c.F(f,h.l(B.b))
t=A.U(h.b,h.c,f,Math.max(1,h.h(B.a).n(0,h.h(B.b)).gj(0))*0.3)
for(f=[B.aP,B.aQ],s=u.M,r=u._,q=0;q<2;++q){p=f[q]
o=h.l(p.a)
n=h.l(p.b)
m=A.f([],r)
for(l=0;k=o.length,l<k;++l){j=n.length
i=B.d.a5(l/(k-1)*(j-1))
k=o[l]
if(!(i>=0&&i<j))return A.a(n,i)
B.c.u(m,k.E(n[i],0.45))}k=A.bt(o,g)
B.c.F(k,new A.V(m,s))
t.aC(k)}t.U(Math.max(1,h.h(B.a).n(0,h.h(B.b)).gj(0))*0.05)
t.S(this.Y(0.01,1.05))
return t},
be(a){var t,s,r,q,p,o,n,m,l,k,j=this.a,i=A.U(j.b,j.c,j.l(B.f),0),h=j.k(197).E(j.k(5),0.4),g=j.k(5).n(0,j.k(168))
i.L(h,Math.max(1,j.h(B.a).n(0,j.h(B.b)).gj(0))*0.06*a,g.gj(0)*0.35*a,Math.atan2(g.b,g.a)-1.5707963267948966,0.85)
for(t=[B.aL,B.aN],s=0;s<2;++s){r=t[s]
q=r.a
p=r.b
o=j.k(q).E(j.k(p),0.55)
p=j.k(p)
q=j.k(q)
n=p.a-q.a
q=p.b-q.b
p=Math.sqrt(n*n+q*q)
m=j.h(B.a)
l=j.h(B.b)
k=m.a-l.a
l=m.b-l.b
l=Math.max(p*0.7,Math.max(1,Math.sqrt(k*k+l*l))*0.06)
k=j.h(B.a)
p=j.h(B.b)
m=k.a-p.a
p=k.b-p.b
i.aq(o,l*a,Math.max(1,Math.sqrt(m*m+p*p))*0.07*a,Math.atan2(q,n))}i.L(j.k(0).aN(0,j.k(0).n(0,j.k(13)).a6(0,0.6)),Math.max(1,j.h(B.a).n(0,j.h(B.b)).gj(0))*0.06*a,Math.max(1,j.h(B.a).n(0,j.h(B.b)).gj(0))*0.025*a,0,0.6)
i.L(j.k(152).E(j.k(17),0.45),Math.max(1,j.h(B.a).n(0,j.h(B.b)).gj(0))*0.08*a,Math.max(1,j.h(B.a).n(0,j.h(B.b)).gj(0))*0.05*a,0,0.5)
i.S(this.Y(0.05,1.6))
return i},
ap(a,b){var t,s,r,q,p,o,n=a.a,m=b.a,l=Math.min(n,m),k=a.b,j=b.b,i=Math.min(k,j),h=this.a,g=A.df(l,i,Math.max(n+a.c,m+b.c)-l,Math.max(k+a.d,j+b.d)-i,h.b,h.c)
for(n=g.d,m=g.c,k=g.r,j=k.$flags|0,t=0;t<n;++t)for(s=t+i,h=t*m,r=0;r<m;++r){q=r+l
p=h+r
o=Math.max(a.a1(q,s),b.a1(q,s))
j&2&&A.k(k)
if(!(p>=0&&p<k.length))return A.a(k,p)
k[p]=o}return g}}
A.aK.prototype={
ah(a,b,c){var t,s,r,q,p,o
u.H.a(a)
if(b<=0)return
t=this.c
s=t.a
r=t.W(s.l(B.m),0.025)
r.S(t.K(s.l(B.aq),0.0125,1.05))
s=this.a
A.H(s,r,B.p,a,b*0.75)
A.H(s,r,B.h,a,b*0.5)
if(c>0){t=this.b
q=t.k(14).E(t.k(17),0.55)
p=t.k(291).n(0,t.k(61)).gj(0)
o=A.U(s.a,s.b,t.l(B.m),Math.max(1,t.h(B.a).n(0,t.h(B.b)).gj(0))*0.1)
o.aq(q,p*0.16,Math.max(1,t.h(B.a).n(0,t.h(B.b)).gj(0))*0.025,0)
o.a4(r)
A.H(s,o,B.j,B.ay,c*0.6)}},
au(a,b,c){var t,s,r
u.H.a(a)
if(b<=0)return
t=this.c
s=t.ae(c)
r=this.b
s.U(Math.max(1,r.h(B.a).n(0,r.h(B.b)).gj(0))*0.08)
s.a4(t.W(t.a.l(B.f),0.06))
t=this.a
A.H(t,s,B.p,a,b*0.18)
A.H(t,s,B.l,A.dd(a,0.3),b*0.45)
A.H(t,s,B.h,a,b*0.35)},
ar(a,b){return this.au(a,b,1)},
aB(a,b,c){if(a<=0)return
A.H(this.a,this.c.aM(b,c),B.l,B.aG,a)},
aH(a){var t,s,r
if(a<=0)return
t=this.c
s=t.bj(0.05)
r=this.b
s.U(Math.max(1,r.h(B.a).n(0,r.h(B.b)).gj(0))*0.012)
s.a8(t.Y(0,0.92),0.6)
A.H(this.a,s,B.l,B.ag,a*0.8)},
av(a){if(a<=0)return
A.H(this.a,this.c.aw(0.025,1.05),B.l,B.ap,a*0.55)},
b9(a,b){var t,s
u.H.a(a)
if(b<=0)return
t=this.c.b8()
s=this.a
A.H(s,t,B.l,A.dd(a,0.35),b*0.6)
A.H(s,t,B.h,a,b*0.5)},
aD(a,b,c){var t,s
u.H.a(b)
if(a<=0)return
t=this.c
s=t.be(c)
s.a4(t.W(t.a.l(B.f),0.04))
t=this.b
s.U(Math.max(1,t.h(B.a).n(0,t.h(B.b)).gj(0))*0.03)
t=this.a
A.H(t,s,B.h,b,a*0.5)
A.H(t,s,B.j,b,a*0.18)},
bc(a,b){return this.aD(a,b,1)},
bd(a,b){return this.aD(a,B.aA,b)}}
A.bi.prototype={
bh(){var t,s,r,q,p,o,n=this.a,m=this.b,l=n*m*4,k=new Uint8Array(l)
for(t=this.c,s=t.length,r=0,q=0;q<s;r+=4,q+=3){p=A.cE(t[q])
if(!(r<l))return A.a(k,r)
k[r]=p
p=r+1
o=q+1
if(!(o<s))return A.a(t,o)
o=A.cE(t[o])
if(!(p<l))return A.a(k,p)
k[p]=o
o=r+2
p=q+2
if(!(p<s))return A.a(t,p)
p=A.cE(t[p])
if(!(o<l))return A.a(k,o)
k[o]=p
p=r+3
if(!(p<l))return A.a(k,p)
k[p]=255}return new A.bu(n,m,k)},
aA(a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
if(a4<=1)return new A.bi(a3.a,a3.b,new Float32Array(A.cq(a3.c)))
t=a3.a
s=Math.max(1,B.e.ak(t,a4))
r=a3.b
q=Math.max(1,B.e.ak(r,a4))
p=A.d8(s,q)
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
m&2&&A.k(o)
f=o.length
if(!(a2>=0&&a2<f))return A.a(o,a2)
o[a2]=e*n
a1=a2+1
if(!(a1<f))return A.a(o,a1)
o[a1]=d*n
a1=a2+2
if(!(a1<f))return A.a(o,a1)
o[a1]=c*n}return p},
aO(a,b,a0){var t,s,r,q,p,o,n,m=this.a,l=m-1,k=B.d.G(a*m-0.5,0,l),j=this.b,i=j-1,h=B.d.G(b*j-0.5,0,i),g=B.d.B(k),f=B.d.B(h),e=Math.min(g+1,l),d=k-g,c=h-f
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
j&2&&A.k(a0)
if(!(p<3))return A.a(a0,p)
a0[p]=n+(i+(o-i)*d-n)*c}}}
A.cc.prototype={
O(){var t=this.a
t^=t<<13
t^=t>>>17
return this.a=(t^t<<5)>>>0},
aI(){var t=Math.max(1e-9,this.O()/4294967296),s=this.O()
return Math.sqrt(-2*Math.log(t))*Math.cos(6.283185307179586*(s/4294967296))}}
A.cA.prototype={
$1(a){var t,s,r,q,p,o,n,m,l,k,j=A.cN(A.cN(a).data),i=j.id
try{t=new A.bu(A.ab(A.cM(j.width)),A.ab(A.cM(j.height)),u.e.a(j.pixels))
s=A.eh(A.O(j.landmarks))
r=A.ei(u.d.a(B.u.az(A.O(j.settings),null)))
q=A.fD(A.O(j.filterId)).b4(s,r,t)
p=q.a.c
m={}
m.id=i
m.width=q.a.a
m.height=q.a.b
m.pixels=p
m.usedFaces=q.b
l=q.c
if(l==null)l=null
m.note=l
o=m
this.a.postMessage(o,A.f([u.r.a(B.aK.gb5(q.a.c))],u.V))}catch(k){n=A.dV(k)
m={}
m.id=i
m.error=J.aB(n)
this.a.postMessage(m)}},
$S:7};(function aliases(){var t=J.a0.prototype
t.aS=t.i})();(function installTearOffs(){var t=hunkHelpers._static_2
t(J,"f7","dc",8)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.m,null)
r(A.m,[A.cF,J.bl,A.aT,J.ak,A.p,A.cd,A.c,A.ap,A.y,A.J,A.cf,A.ca,A.Z,A.x,A.c7,A.bs,A.cn,A.I,A.bU,A.cl,A.l,A.bd,A.bg,A.ch,A.aU,A.ci,A.c3,A.a6,A.a9,A.bN,A.z,A.r,A.bh,A.aD,A.c0,A.M,A.S,A.c1,A.bu,A.cb,A.L,A.c9,A.a3,A.aK,A.bi,A.cc])
r(J.bl,[J.bn,J.aF,J.aH,J.aG,J.aI,J.an,J.ao])
r(J.aH,[J.a0,J.j,A.a1,A.aP])
r(J.a0,[J.bD,J.ar,J.a_])
s(J.bm,A.aT)
s(J.c4,J.j)
r(J.an,[J.aE,J.bo])
r(A.p,[A.bq,A.aV,A.bp,A.bR,A.bI,A.bT,A.b9,A.Y,A.aW,A.bQ,A.bL,A.be])
s(A.aC,A.c)
r(A.aC,[A.T,A.a5])
r(A.T,[A.V,A.bW])
r(A.J,[A.as,A.at,A.au])
s(A.N,A.as)
s(A.E,A.at)
s(A.av,A.au)
s(A.aR,A.aV)
r(A.Z,[A.bb,A.bc,A.bP,A.cw,A.cy,A.cs,A.cA])
r(A.bP,[A.bM,A.al])
r(A.x,[A.aJ,A.bV])
r(A.bc,[A.cx,A.c8,A.c2])
s(A.a7,A.a1)
r(A.aP,[A.bv,A.v])
r(A.v,[A.aX,A.aZ])
s(A.aY,A.aX)
s(A.aN,A.aY)
s(A.b_,A.aZ)
s(A.aO,A.b_)
r(A.aN,[A.aM,A.bw])
r(A.aO,[A.bx,A.by,A.bz,A.bA,A.bB,A.aQ,A.a8])
s(A.b0,A.bT)
s(A.c5,A.bd)
s(A.c6,A.bg)
r(A.Y,[A.aS,A.bk])
s(A.ct,A.bb)
r(A.z,[A.bj,A.br,A.bC,A.bH,A.bJ,A.bK,A.bO])
r(A.ch,[A.bf,A.aq])
t(A.aX,A.l)
t(A.aY,A.y)
t(A.aZ,A.l)
t(A.b_,A.y)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{b:"int",d:"double",A:"num",q:"String",az:"bool",a9:"Null",e:"List",m:"Object",aL:"Map",o:"JSObject"},mangledNames:{},types:["@(@)","@(@,q)","@(q)","~(m?,m?)","az(z)","0&()","a6<q,d>(@,@)","a9(o)","b(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.N&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.E&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.av&&A.fP(a,b.a)}}
A.eN(v.typeUniverse,JSON.parse('{"a_":"a0","bD":"a0","ar":"a0","fX":"a1","bn":{"az":[],"i":[]},"aF":{"i":[]},"aH":{"o":[]},"a0":{"o":[]},"j":{"e":["1"],"o":[],"c":["1"]},"bm":{"aT":[]},"c4":{"j":["1"],"e":["1"],"o":[],"c":["1"]},"an":{"d":[],"A":[],"R":["A"]},"aE":{"d":[],"b":[],"A":[],"R":["A"],"i":[]},"bo":{"d":[],"A":[],"R":["A"],"i":[]},"ao":{"q":[],"R":["q"],"i":[]},"bq":{"p":[]},"aC":{"c":["1"]},"T":{"c":["1"]},"V":{"T":["1"],"c":["1"],"T.E":"1"},"N":{"as":[],"J":[]},"E":{"at":[],"J":[]},"av":{"au":[],"J":[]},"aR":{"p":[]},"bp":{"p":[]},"bR":{"p":[]},"Z":{"a4":[]},"bb":{"a4":[]},"bc":{"a4":[]},"bP":{"a4":[]},"bM":{"a4":[]},"al":{"a4":[]},"bI":{"p":[]},"aJ":{"x":["1","2"],"aL":["1","2"],"x.K":"1","x.V":"2"},"a5":{"c":["1"]},"as":{"J":[]},"at":{"J":[]},"au":{"J":[]},"a7":{"a1":[],"o":[],"i":[]},"a1":{"o":[],"i":[]},"aP":{"o":[]},"bv":{"o":[],"i":[]},"v":{"B":["1"],"o":[]},"aN":{"l":["d"],"v":["d"],"e":["d"],"B":["d"],"o":[],"c":["d"],"y":["d"]},"aO":{"l":["b"],"v":["b"],"e":["b"],"B":["b"],"o":[],"c":["b"],"y":["b"]},"aM":{"cD":[],"l":["d"],"v":["d"],"e":["d"],"B":["d"],"o":[],"c":["d"],"y":["d"],"i":[],"l.E":"d"},"bw":{"l":["d"],"v":["d"],"e":["d"],"B":["d"],"o":[],"c":["d"],"y":["d"],"i":[],"l.E":"d"},"bx":{"l":["b"],"v":["b"],"e":["b"],"B":["b"],"o":[],"c":["b"],"y":["b"],"i":[],"l.E":"b"},"by":{"l":["b"],"v":["b"],"e":["b"],"B":["b"],"o":[],"c":["b"],"y":["b"],"i":[],"l.E":"b"},"bz":{"l":["b"],"v":["b"],"e":["b"],"B":["b"],"o":[],"c":["b"],"y":["b"],"i":[],"l.E":"b"},"bA":{"l":["b"],"v":["b"],"e":["b"],"B":["b"],"o":[],"c":["b"],"y":["b"],"i":[],"l.E":"b"},"bB":{"l":["b"],"v":["b"],"e":["b"],"B":["b"],"o":[],"c":["b"],"y":["b"],"i":[],"l.E":"b"},"aQ":{"l":["b"],"v":["b"],"e":["b"],"B":["b"],"o":[],"c":["b"],"y":["b"],"i":[],"l.E":"b"},"a8":{"cJ":[],"l":["b"],"v":["b"],"e":["b"],"B":["b"],"o":[],"c":["b"],"y":["b"],"i":[],"l.E":"b"},"bT":{"p":[]},"b0":{"p":[]},"x":{"aL":["1","2"]},"bV":{"x":["q","@"],"aL":["q","@"],"x.K":"q","x.V":"@"},"bW":{"T":["q"],"c":["q"],"T.E":"q"},"d":{"A":[],"R":["A"]},"b":{"A":[],"R":["A"]},"e":{"c":["1"]},"A":{"R":["A"]},"q":{"R":["q"]},"b9":{"p":[]},"aV":{"p":[]},"Y":{"p":[]},"aS":{"p":[]},"bk":{"p":[]},"aW":{"p":[]},"bQ":{"p":[]},"bL":{"p":[]},"be":{"p":[]},"aU":{"p":[]},"bj":{"z":[]},"br":{"z":[]},"bC":{"z":[]},"bH":{"z":[]},"bJ":{"z":[]},"bK":{"z":[]},"bO":{"z":[]},"en":{"e":["b"],"c":["b"]},"cJ":{"e":["b"],"c":["b"]},"ex":{"e":["b"],"c":["b"]},"el":{"e":["b"],"c":["b"]},"ev":{"e":["b"],"c":["b"]},"em":{"e":["b"],"c":["b"]},"ew":{"e":["b"],"c":["b"]},"cD":{"e":["d"],"c":["d"]},"ej":{"e":["d"],"c":["d"]}}'))
A.eM(v.typeUniverse,JSON.parse('{"aC":1,"v":1,"bd":2,"bg":2}'))
var u=(function rtii(){var t=A.cu
return{W:t("R<@>"),C:t("p"),Z:t("a4"),l:t("c<d>"),Y:t("c<@>"),h:t("j<aD>"),q:t("j<bh>"),N:t("j<M>"),G:t("j<e<r>>"),V:t("j<a7>"),f:t("j<m>"),k:t("j<+(r,r,r,d)>"),s:t("j<q>"),_:t("j<r>"),n:t("j<d>"),b:t("j<@>"),t:t("j<b>"),T:t("aF"),m:t("o"),g:t("a_"),p:t("B<@>"),j:t("e<aD>"),E:t("e<r>"),H:t("e<d>"),c:t("e<@>"),L:t("e<b>"),U:t("a6<q,d>"),d:t("aL<q,@>"),J:t("aL<@,@>"),r:t("a7"),e:t("a8"),P:t("a9"),K:t("m"),v:t("z"),O:t("fY"),F:t("+()"),M:t("V<r>"),R:t("q"),w:t("i"),A:t("ar"),a:t("r"),y:t("az"),i:t("d"),S:t("b"),Q:t("d9<a9>?"),z:t("o?"),x:t("e<@>?"),X:t("m?"),B:t("q?"),u:t("az?"),I:t("d?"),D:t("b?"),ae:t("A?"),o:t("A"),cQ:t("~(q,@)")}})();(function constants(){var t=hunkHelpers.makeConstList
B.ab=J.bl.prototype
B.c=J.j.prototype
B.e=J.aE.prototype
B.d=J.an.prototype
B.ac=J.a_.prototype
B.ad=J.aH.prototype
B.o=A.aM.prototype
B.aK=A.a8.prototype
B.D=J.bD.prototype
B.q=J.ar.prototype
B.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.M=function() {
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
B.R=function(getTagFallback) {
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
B.N=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.Q=function(hooks) {
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
B.P=function(hooks) {
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
B.O=function(hooks) {
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
B.t=function(hooks) { return hooks; }

B.u=new A.c5()
B.k=new A.cd()
B.aw=t([0.04,-0.01,0.025],u.n)
B.aC=t([0.04,0,0.015],u.n)
B.Y=new A.L(0.12,0,-0.12,-0.05,0,0.25,0.45,0,0,0,B.aw,B.aC)
B.aJ=t([0,-0.01,0.04],u.n)
B.au=t([0.02,-0.02,0.05],u.n)
B.Z=new A.L(-0.75,0,0.2,-0.35,0,0,0,0,0,0,B.aJ,B.au)
B.ax=t([0.02,0.008,-0.02],u.n)
B.aH=t([0.05,0.025,-0.035],u.n)
B.a_=new A.L(0.28,0,0.12,0.08,0.35,0.75,0.08,0.25,-0.15,0,B.ax,B.aH)
B.i=t([0,0,0],u.n)
B.a0=new A.L(0.1,0,0.05,0,0.12,0.06,0,0,-0.1,0,B.i,B.i)
B.ao=t([0.02,0.01,0],u.n)
B.a1=new A.L(0,0,0.18,0.12,0.1,0.12,0,-0.3,0,0,B.i,B.ao)
B.aj=t([0.012,0.012,0.02],u.n)
B.a2=new A.L(0.25,0,-0.08,-0.06,0,-0.05,0,0.4,-0.25,0.06,B.i,B.aj)
B.a3=new A.L(0.05,0,0,0,0.1,0.18,0,0,0,0,B.i,B.i)
B.b4=new A.bf(0,"slider")
B.E=new A.M()
B.b6=t([B.E],u.N)
B.a4=new A.S("glow_makeup",!0)
B.b5=new A.bf(1,"toggle")
B.F=new A.M()
B.b7=t([B.F],u.N)
B.a5=new A.S("light",!0)
B.G=new A.M()
B.b8=t([B.G],u.N)
B.a6=new A.S("neon_lines",!0)
B.H=new A.M()
B.b9=t([B.H],u.N)
B.a7=new A.S("rosy_haze",!0)
B.I=new A.M()
B.ba=t([B.I],u.N)
B.a8=new A.S("serum",!0)
B.J=new A.M()
B.bb=t([B.J],u.N)
B.a9=new A.S("soft_freckles",!0)
B.K=new A.M()
B.bc=t([B.K],u.N)
B.aa=new A.S("sunny_effect",!1)
B.ae=new A.c6(null)
B.v=t([1,1,1],u.n)
B.af=t([1,0.85,0.6],u.n)
B.ag=t([0.2,0.16,0.15],u.n)
B.f=t([10,338,297,332,284,251,389,356,454,323,361,288,397,365,379,378,400,377,152,148,176,149,150,136,172,58,132,93,234,127,162,21,54,103,67,109],u.t)
B.ah=t([1,0.78,0.42],u.n)
B.ai=t([1,0.9,0.85],u.n)
B.w=t([1,0.18,0.78],u.n)
B.x=t([33,246,161,160,159,158,157,173,133],u.t)
B.ak=t([0.86,0.33,0.42],u.n)
B.al=t([0.92,0.55,0.5],u.n)
B.X=new A.bO()
B.W=new A.bK()
B.T=new A.bC()
B.S=new A.br()
B.U=new A.bH()
B.V=new A.bJ()
B.L=new A.bj()
B.am=t([B.X,B.W,B.T,B.S,B.U,B.V,B.L],A.cu("j<z>"))
B.an=t([1,0.72,0.82],u.n)
B.ap=t([0.42,0.3,0.24],u.n)
B.aq=t([78,95,88,178,87,14,317,402,318,324,308,415,310,311,312,13,82,81,80,191],u.t)
B.ar=t([1,0.72,0.8],u.n)
B.as=t([0.93,0.42,0.52],u.n)
B.at=t([168,6,197,195,5,4,1],u.t)
B.av=t([0.9,0.45,0.45],u.n)
B.y=t([300,293,334,296,336],u.t)
B.ay=t([1,0.97,0.95],u.n)
B.az=t([0.62,0.35,1],u.n)
B.aA=t([1,0.96,0.9],u.n)
B.z=t([276,283,282,295,285],u.t)
B.aB=t([0.72,0.45,0.38],u.n)
B.aD=t([1,0.93,0.82],u.n)
B.aE=t([98,97,2,326,327],u.t)
B.m=t([61,146,91,181,84,17,314,405,321,375,291,409,270,269,267,0,37,39,40,185],u.t)
B.aF=t([0.68,0.16,0.26],u.n)
B.A=t([263,466,388,387,386,385,384,398,362],u.t)
B.aG=t([0.12,0.09,0.08],u.n)
B.aI=t([0.85,0.48,0.48],u.n)
B.n=t([0.15,0.9,1],u.n)
B.B=t([70,63,105,66,107],u.t)
B.a=t([33,7,163,144,145,153,154,155,133,173,157,158,159,160,161,246],u.t)
B.b=t([263,249,390,373,374,380,381,382,362,398,384,385,386,387,388,466],u.t)
B.C=t([46,53,52,65,55],u.t)
B.j=new A.aq(1,"screen")
B.l=new A.aq(2,"multiply")
B.h=new A.aq(4,"softLight")
B.p=new A.aq(6,"color")
B.aL=new A.N(116,118)
B.aM=new A.N(118,50)
B.aN=new A.N(345,347)
B.aO=new A.N(347,280)
B.aP=new A.N(B.x,B.C)
B.aQ=new A.N(B.A,B.z)
B.aR=new A.E(280,345,425)
B.aS=new A.E(50,116,205)
B.aT=A.K("fT")
B.aU=A.K("fU")
B.aV=A.K("cD")
B.aW=A.K("ej")
B.aX=A.K("el")
B.aY=A.K("em")
B.aZ=A.K("en")
B.b_=A.K("m")
B.b0=A.K("ev")
B.b1=A.K("ew")
B.b2=A.K("ex")
B.b3=A.K("cJ")})();(function staticFields(){$.cj=null
$.D=A.f([],u.f)
$.dg=null
$.d4=null
$.d3=null
$.dN=null
$.dJ=null
$.dS=null
$.cr=null
$.cz=null
$.cY=null
$.ck=A.f([],A.cu("j<e<m>?>"))})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"fW","dW",()=>A.cv("_$dart_dartClosure"))
t($,"fV","d0",()=>A.cv("_$dart_dartClosure_dartJSInterop"))
t($,"h9","e6",()=>A.f([new J.bm()],A.cu("j<aT>")))
t($,"fZ","dX",()=>A.X(A.cg({
toString:function(){return"$receiver$"}})))
t($,"h_","dY",()=>A.X(A.cg({$method$:null,
toString:function(){return"$receiver$"}})))
t($,"h0","dZ",()=>A.X(A.cg(null)))
t($,"h1","e_",()=>A.X(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"h4","e2",()=>A.X(A.cg(void 0)))
t($,"h5","e3",()=>A.X(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"h3","e1",()=>A.X(A.dk(null)))
t($,"h2","e0",()=>A.X(function(){try{null.$method$}catch(s){return s.message}}()))
t($,"h7","e5",()=>A.X(A.dk(void 0)))
t($,"h6","e4",()=>A.X(function(){try{(void 0).$method$}catch(s){return s.message}}()))
t($,"h8","bZ",()=>A.dP(B.b_))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.a1,ArrayBuffer:A.a7,ArrayBufferView:A.aP,DataView:A.bv,Float32Array:A.aM,Float64Array:A.bw,Int16Array:A.bx,Int32Array:A.by,Int8Array:A.bz,Uint16Array:A.bA,Uint32Array:A.bB,Uint8ClampedArray:A.aQ,CanvasPixelArray:A.aQ,Uint8Array:A.a8})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.v.$nativeSuperclassTag="ArrayBufferView"
A.aX.$nativeSuperclassTag="ArrayBufferView"
A.aY.$nativeSuperclassTag="ArrayBufferView"
A.aN.$nativeSuperclassTag="ArrayBufferView"
A.aZ.$nativeSuperclassTag="ArrayBufferView"
A.b_.$nativeSuperclassTag="ArrayBufferView"
A.aO.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$2$1=function(a){return this(a)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r){t[r].removeEventListener("load",onLoad,false)}a(b.target)}for(var s=0;s<t.length;++s){t[s].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var t=A.fN
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()