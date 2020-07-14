!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).chai=e()}}(function(){return function e(t,n,o){function r(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var u=n[s]={exports:{}};t[s][0].call(u.exports,function(e){var n=t[s][1][e];return r(n||e)},u,u.exports,e,t,n,o)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)r(o[s]);return r}({1:[function(e,t){t.exports=e("./lib/chai")},{"./lib/chai":2}],2:[function(e,t,n){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=[];
/*!
 * Chai version
 */(n=t.exports={}).version="3.5.0",
/*!
 * Assertion Error
 */
n.AssertionError=e("assertion-error");
/*!
 * Utils for plugins (not exported)
 */
var r=e("./chai/utils");n.use=function(e){return~o.indexOf(e)||(e(this,r),o.push(e)),this},
/*!
 * Utility Functions
 */
n.util=r;
/*!
 * Configuration
 */
var i=e("./chai/config");n.config=i;
/*!
 * Primary `Assertion` prototype
 */
var s=e("./chai/assertion");n.use(s);
/*!
 * Core Assertions
 */
var a=e("./chai/core/assertions");n.use(a);
/*!
 * Expect interface
 */
var c=e("./chai/interface/expect");n.use(c);
/*!
 * Should interface
 */
var h=e("./chai/interface/should");n.use(h);
/*!
 * Assert interface
 */
var u=e("./chai/interface/assert");n.use(u)},{"./chai/assertion":3,"./chai/config":4,"./chai/core/assertions":5,"./chai/interface/assert":6,"./chai/interface/expect":7,"./chai/interface/should":8,"./chai/utils":22,"assertion-error":30}],3:[function(e,t){
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var n=e("./config");t.exports=function(e,t){
/*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * @api private
   */
function o(e,t,n){i(this,"ssfi",n||arguments.callee),i(this,"object",e),i(this,"message",t)}
/*!
   * Module dependencies.
   */
var r=e.AssertionError,i=t.flag;
/*!
   * Module export.
   */e.Assertion=o,Object.defineProperty(o,"includeStack",{get:function(){return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),n.includeStack},set:function(e){console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),n.includeStack=e}}),Object.defineProperty(o,"showDiff",{get:function(){return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),n.showDiff},set:function(e){console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),n.showDiff=e}}),o.addProperty=function(e,n){t.addProperty(this.prototype,e,n)},o.addMethod=function(e,n){t.addMethod(this.prototype,e,n)},o.addChainableMethod=function(e,n,o){t.addChainableMethod(this.prototype,e,n,o)},o.overwriteProperty=function(e,n){t.overwriteProperty(this.prototype,e,n)},o.overwriteMethod=function(e,n){t.overwriteMethod(this.prototype,e,n)},o.overwriteChainableMethod=function(e,n,o){t.overwriteChainableMethod(this.prototype,e,n,o)},o.prototype.assert=function(e,o,s,a,c,h){var u=t.test(this,arguments);if(!0!==h&&(h=!1),!0!==n.showDiff&&(h=!1),!u){o=t.getMessage(this,arguments);var f=t.getActual(this,arguments);throw new r(o,{actual:f,expected:a,showDiff:h},n.includeStack?this.assert:i(this,"ssfi"))}},
/*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */
Object.defineProperty(o.prototype,"_obj",{get:function(){return i(this,"object")},set:function(e){i(this,"object",e)}})}},{"./config":4}],4:[function(e,t){t.exports={includeStack:!1,showDiff:!0,truncateThreshold:40}},{}],5:[function(e,t){
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e,t){function n(e,n){n&&k(this,"message",n),e=e.toLowerCase();var o=k(this,"object"),r=~["a","e","i","o","u"].indexOf(e.charAt(0))?"an ":"a ";this.assert(e===t.type(o),"expected #{this} to be "+r+e,"expected #{this} not to be "+r+e)}function o(){k(this,"contains",!0)}function r(e,n){t.expectTypes(this,["array","object","string"]),n&&k(this,"message",n);var o=k(this,"object"),r=!1;if("array"===t.type(o)&&"object"===t.type(e)){for(var i in o)if(t.eql(o[i],e)){r=!0;break}}else if("object"===t.type(e)){if(!k(this,"negate")){for(var s in e)new S(o).property(s,e[s]);return}var a={};for(var s in e)a[s]=o[s];r=t.eql(a,e)}else r=o!=undefined&&~o.indexOf(e);this.assert(r,"expected #{this} to include "+t.inspect(e),"expected #{this} to not include "+t.inspect(e))}function i(){var e=k(this,"object"),t=Object.prototype.toString.call(e);this.assert("[object Arguments]"===t,"expected #{this} to be arguments but got "+t,"expected #{this} to not be arguments")}function s(e,t){t&&k(this,"message",t);var n=k(this,"object");if(k(this,"deep"))return this.eql(e);this.assert(e===n,"expected #{this} to equal #{exp}","expected #{this} to not equal #{exp}",e,this._obj,!0)}function a(e,n){n&&k(this,"message",n),this.assert(t.eql(e,k(this,"object")),"expected #{this} to deeply equal #{exp}","expected #{this} to not deeply equal #{exp}",e,this._obj,!0)}function c(e,t){t&&k(this,"message",t);var n=k(this,"object");if(k(this,"doLength")){new S(n,t).to.have.property("length");var o=n.length;this.assert(o>e,"expected #{this} to have a length above #{exp} but got #{act}","expected #{this} to not have a length above #{exp}",e,o)}else this.assert(n>e,"expected #{this} to be above "+e,"expected #{this} to be at most "+e)}function h(e,t){t&&k(this,"message",t);var n=k(this,"object");if(k(this,"doLength")){new S(n,t).to.have.property("length");var o=n.length;this.assert(o>=e,"expected #{this} to have a length at least #{exp} but got #{act}","expected #{this} to have a length below #{exp}",e,o)}else this.assert(n>=e,"expected #{this} to be at least "+e,"expected #{this} to be below "+e)}function u(e,t){t&&k(this,"message",t);var n=k(this,"object");if(k(this,"doLength")){new S(n,t).to.have.property("length");var o=n.length;this.assert(o<e,"expected #{this} to have a length below #{exp} but got #{act}","expected #{this} to not have a length below #{exp}",e,o)}else this.assert(n<e,"expected #{this} to be below "+e,"expected #{this} to be at least "+e)}function f(e,t){t&&k(this,"message",t);var n=k(this,"object");if(k(this,"doLength")){new S(n,t).to.have.property("length");var o=n.length;this.assert(o<=e,"expected #{this} to have a length at most #{exp} but got #{act}","expected #{this} to have a length above #{exp}",e,o)}else this.assert(n<=e,"expected #{this} to be at most "+e,"expected #{this} to be above "+e)}function p(e,n){n&&k(this,"message",n);var o=t.getName(e);this.assert(k(this,"object")instanceof e,"expected #{this} to be an instance of "+o,"expected #{this} to not be an instance of "+o)}function d(e,n){n&&k(this,"message",n);var o=k(this,"object");this.assert(o.hasOwnProperty(e),"expected #{this} to have own property "+t.inspect(e),"expected #{this} to not have own property "+t.inspect(e))}function l(e,n,o){"string"==typeof n&&(o=n,n=null),o&&k(this,"message",o);var r=k(this,"object"),i=Object.getOwnPropertyDescriptor(Object(r),e);i&&n?this.assert(t.eql(n,i),"expected the own property descriptor for "+t.inspect(e)+" on #{this} to match "+t.inspect(n)+", got "+t.inspect(i),"expected the own property descriptor for "+t.inspect(e)+" on #{this} to not match "+t.inspect(n),n,i,!0):this.assert(i,"expected #{this} to have an own property descriptor for "+t.inspect(e),"expected #{this} to not have an own property descriptor for "+t.inspect(e)),k(this,"object",i)}function b(){k(this,"doLength",!0)}function g(e,t){t&&k(this,"message",t);var n=k(this,"object");new S(n,t).to.have.property("length");var o=n.length;this.assert(o==e,"expected #{this} to have a length of #{exp} but got #{act}","expected #{this} to not have a length of #{act}",e,o)}function y(e,t){t&&k(this,"message",t);var n=k(this,"object");this.assert(e.exec(n),"expected #{this} to match "+e,"expected #{this} not to match "+e)}function w(e){var n,o=k(this,"object"),r=!0,i="keys must be given single argument of Array|Object|String, or multiple String arguments";switch(t.type(e)){case"array":if(arguments.length>1)throw new Error(i);break;case"object":if(arguments.length>1)throw new Error(i);e=Object.keys(e);break;default:e=Array.prototype.slice.call(arguments)}if(!e.length)throw new Error("keys required");var s=Object.keys(o),a=e,c=e.length,h=k(this,"any"),u=k(this,"all");(h||u||(u=!0),h)&&(r=a.filter(function(e){return~s.indexOf(e)}).length>0);if(u&&(r=e.every(function(e){return~s.indexOf(e)}),k(this,"negate")||k(this,"contains")||(r=r&&e.length==s.length)),c>1){var f=(e=e.map(function(e){return t.inspect(e)})).pop();u&&(n=e.join(", ")+", and "+f),h&&(n=e.join(", ")+", or "+f)}else n=t.inspect(e[0]);n=(c>1?"keys ":"key ")+n,n=(k(this,"contains")?"contain ":"have ")+n,this.assert(r,"expected #{this} to "+n,"expected #{this} to not "+n,a.slice(0).sort(),s.sort(),!0)}function x(e,n,o){o&&k(this,"message",o);var r=k(this,"object");new S(r,o).is.a("function");var i=!1,s=null,a=null,c=null;0===arguments.length?(n=null,e=null):e&&(e instanceof RegExp||"string"==typeof e)?(n=e,e=null):e&&e instanceof Error?(s=e,e=null,n=null):"function"==typeof e?(!(a=e.prototype.name)||"Error"===a&&e!==Error)&&(a=e.name||(new e).name):e=null;try{r()}catch(p){if(s)return this.assert(p===s,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}",s instanceof Error?s.toString():s,p instanceof Error?p.toString():p),k(this,"object",p),this;if(e&&(this.assert(p instanceof e,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp} but #{act} was thrown",a,p instanceof Error?p.toString():p),!n))return k(this,"object",p),this;var h="error"===t.type(p)&&"message"in p?p.message:""+p;if(null!=h&&n&&n instanceof RegExp)return this.assert(n.exec(h),"expected #{this} to throw error matching #{exp} but got #{act}","expected #{this} to throw error not matching #{exp}",n,h),k(this,"object",p),this;if(null!=h&&n&&"string"==typeof n)return this.assert(~h.indexOf(n),"expected #{this} to throw error including #{exp} but got #{act}","expected #{this} to throw error not including #{act}",n,h),k(this,"object",p),this;i=!0,c=p}var u="",f=null!==a?a:s?"#{exp}":"an error";i&&(u=" but #{act} was thrown"),this.assert(!0===i,"expected #{this} to throw "+f+u,"expected #{this} to not throw "+f+u,s instanceof Error?s.toString():s,c instanceof Error?c.toString():c),k(this,"object",c)}function v(e,n){n&&k(this,"message",n);var o=k(this,"object"),r=k(this,"itself"),i="function"!==t.type(o)||r?o[e]:o.prototype[e];this.assert("function"==typeof i,"expected #{this} to respond to "+t.inspect(e),"expected #{this} to not respond to "+t.inspect(e))}function m(e,n){n&&k(this,"message",n);var o=e(k(this,"object"));this.assert(o,"expected #{this} to satisfy "+t.objDisplay(e),"expected #{this} to not satisfy"+t.objDisplay(e),!this.negate,o)}function j(e,n,o){o&&k(this,"message",o);var r=k(this,"object");if(new S(r,o).is.a("number"),"number"!==t.type(e)||"number"!==t.type(n))throw new Error("the arguments to closeTo or approximately must be numbers");this.assert(Math.abs(r-e)<=n,"expected #{this} to be close to "+e+" +/- "+n,"expected #{this} not to be close to "+e+" +/- "+n)}function O(e,t,n){return e.every(function(e){return n?t.some(function(t){return n(e,t)}):-1!==t.indexOf(e)})}function M(e,t){t&&k(this,"message",t);var n=k(this,"object");new S(e).to.be.an("array"),this.assert(e.indexOf(n)>-1,"expected #{this} to be one of #{exp}","expected #{this} to not be one of #{exp}",e,n)}function P(e,t,n){n&&k(this,"message",n);var o=k(this,"object");new S(e,n).to.have.property(t),new S(o).is.a("function");var r=e[t];o(),this.assert(r!==e[t],"expected ."+t+" to change","expected ."+t+" to not change")}function E(e,t,n){n&&k(this,"message",n);var o=k(this,"object");new S(e,n).to.have.property(t),new S(o).is.a("function");var r=e[t];o(),this.assert(e[t]-r>0,"expected ."+t+" to increase","expected ."+t+" to not increase")}function N(e,t,n){n&&k(this,"message",n);var o=k(this,"object");new S(e,n).to.have.property(t),new S(o).is.a("function");var r=e[t];o(),this.assert(e[t]-r<0,"expected ."+t+" to decrease","expected ."+t+" to not decrease")}var S=e.Assertion,k=(Object.prototype.toString,t.flag);["to","be","been","is","and","has","have","with","that","which","at","of","same"].forEach(function(e){S.addProperty(e,function(){return this})}),S.addProperty("not",function(){k(this,"negate",!0)}),S.addProperty("deep",function(){k(this,"deep",!0)}),S.addProperty("any",function(){k(this,"any",!0),k(this,"all",!1)}),S.addProperty("all",function(){k(this,"all",!0),k(this,"any",!1)}),S.addChainableMethod("an",n),S.addChainableMethod("a",n),S.addChainableMethod("include",r,o),S.addChainableMethod("contain",r,o),S.addChainableMethod("contains",r,o),S.addChainableMethod("includes",r,o),S.addProperty("ok",function(){this.assert(k(this,"object"),"expected #{this} to be truthy","expected #{this} to be falsy")}),S.addProperty("true",function(){this.assert(!0===k(this,"object"),"expected #{this} to be true","expected #{this} to be false",!this.negate)}),S.addProperty("false",function(){this.assert(!1===k(this,"object"),"expected #{this} to be false","expected #{this} to be true",!!this.negate)}),S.addProperty("null",function(){this.assert(null===k(this,"object"),"expected #{this} to be null","expected #{this} not to be null")}),S.addProperty("undefined",function(){this.assert(undefined===k(this,"object"),"expected #{this} to be undefined","expected #{this} not to be undefined")}),S.addProperty("NaN",function(){this.assert(isNaN(k(this,"object")),"expected #{this} to be NaN","expected #{this} not to be NaN")}),S.addProperty("exist",function(){this.assert(null!=k(this,"object"),"expected #{this} to exist","expected #{this} to not exist")}),S.addProperty("empty",function(){var e=k(this,"object"),t=e;Array.isArray(e)||"string"==typeof object?t=e.length:"object"==typeof e&&(t=Object.keys(e).length),this.assert(!t,"expected #{this} to be empty","expected #{this} not to be empty")}),S.addProperty("arguments",i),S.addProperty("Arguments",i),S.addMethod("equal",s),S.addMethod("equals",s),S.addMethod("eq",s),S.addMethod("eql",a),S.addMethod("eqls",a),S.addMethod("above",c),S.addMethod("gt",c),S.addMethod("greaterThan",c),S.addMethod("least",h),S.addMethod("gte",h),S.addMethod("below",u),S.addMethod("lt",u),S.addMethod("lessThan",u),S.addMethod("most",f),S.addMethod("lte",f),S.addMethod("within",function(e,t,n){n&&k(this,"message",n);var o=k(this,"object"),r=e+".."+t;if(k(this,"doLength")){new S(o,n).to.have.property("length");var i=o.length;this.assert(i>=e&&i<=t,"expected #{this} to have a length within "+r,"expected #{this} to not have a length within "+r)}else this.assert(o>=e&&o<=t,"expected #{this} to be within "+r,"expected #{this} to not be within "+r)}),S.addMethod("instanceof",p),S.addMethod("instanceOf",p),S.addMethod("property",function(e,n,o){o&&k(this,"message",o);var r=!!k(this,"deep"),i=r?"deep property ":"property ",s=k(this,"negate"),a=k(this,"object"),c=r?t.getPathInfo(e,a):null,h=r?c.exists:t.hasProperty(e,a),u=r?c.value:a[e];if(s&&arguments.length>1){if(undefined===u)throw o=null!=o?o+": ":"",new Error(o+t.inspect(a)+" has no "+i+t.inspect(e))}else this.assert(h,"expected #{this} to have a "+i+t.inspect(e),"expected #{this} to not have "+i+t.inspect(e));arguments.length>1&&this.assert(n===u,"expected #{this} to have a "+i+t.inspect(e)+" of #{exp}, but got #{act}","expected #{this} to not have a "+i+t.inspect(e)+" of #{act}",n,u),k(this,"object",u)}),S.addMethod("ownProperty",d),S.addMethod("haveOwnProperty",d),S.addMethod("ownPropertyDescriptor",l),S.addMethod("haveOwnPropertyDescriptor",l),S.addChainableMethod("length",g,b),S.addMethod("lengthOf",g),S.addMethod("match",y),S.addMethod("matches",y),S.addMethod("string",function(e,n){n&&k(this,"message",n);var o=k(this,"object");new S(o,n).is.a("string"),this.assert(~o.indexOf(e),"expected #{this} to contain "+t.inspect(e),"expected #{this} to not contain "+t.inspect(e))}),S.addMethod("keys",w),S.addMethod("key",w),S.addMethod("throw",x),S.addMethod("throws",x),S.addMethod("Throw",x),S.addMethod("respondTo",v),S.addMethod("respondsTo",v),S.addProperty("itself",function(){k(this,"itself",!0)}),S.addMethod("satisfy",m),S.addMethod("satisfies",m),S.addMethod("closeTo",j),S.addMethod("approximately",j),S.addMethod("members",function(e,n){n&&k(this,"message",n);var o=k(this,"object");new S(o).to.be.an("array"),new S(e).to.be.an("array");var r=k(this,"deep")?t.eql:undefined;if(k(this,"contains"))return this.assert(O(e,o,r),"expected #{this} to be a superset of #{act}","expected #{this} to not be a superset of #{act}",o,e);this.assert(O(o,e,r)&&O(e,o,r),"expected #{this} to have the same members as #{act}","expected #{this} to not have the same members as #{act}",o,e)}),S.addMethod("oneOf",M),S.addChainableMethod("change",P),S.addChainableMethod("changes",P),S.addChainableMethod("increase",E),S.addChainableMethod("increases",E),S.addChainableMethod("decrease",N),S.addChainableMethod("decreases",N),S.addProperty("extensible",function(){var e,t=k(this,"object");try{e=Object.isExtensible(t)}catch(n){if(!(n instanceof TypeError))throw n;e=!1}this.assert(e,"expected #{this} to be extensible","expected #{this} to not be extensible")}),S.addProperty("sealed",function(){var e,t=k(this,"object");try{e=Object.isSealed(t)}catch(n){if(!(n instanceof TypeError))throw n;e=!0}this.assert(e,"expected #{this} to be sealed","expected #{this} to not be sealed")}),S.addProperty("frozen",function(){var e,t=k(this,"object");try{e=Object.isFrozen(t)}catch(n){if(!(n instanceof TypeError))throw n;e=!0}this.assert(e,"expected #{this} to be frozen","expected #{this} to not be frozen")})}},{}],6:[function(e,t){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e,t){
/*!
   * Chai dependencies.
   */
var n=e.Assertion,o=t.flag,r=e.assert=function(t,o){new n(null,null,e.assert).assert(t,o,"[ negation message unavailable ]")};
/*!
   * Module export.
   */r.fail=function(t,n,o,i){throw o=o||"assert.fail()",new e.AssertionError(o,{actual:t,expected:n,operator:i},r.fail)},r.isOk=function(e,t){new n(e,t).is.ok},r.isNotOk=function(e,t){new n(e,t).is.not.ok},r.equal=function(e,t,i){var s=new n(e,i,r.equal);s.assert(t==o(s,"object"),"expected #{this} to equal #{exp}","expected #{this} to not equal #{act}",t,e)},r.notEqual=function(e,t,i){var s=new n(e,i,r.notEqual);s.assert(t!=o(s,"object"),"expected #{this} to not equal #{exp}","expected #{this} to equal #{act}",t,e)},r.strictEqual=function(e,t,o){new n(e,o).to.equal(t)},r.notStrictEqual=function(e,t,o){new n(e,o).to.not.equal(t)},r.deepEqual=function(e,t,o){new n(e,o).to.eql(t)},r.notDeepEqual=function(e,t,o){new n(e,o).to.not.eql(t)},r.isAbove=function(e,t,o){new n(e,o).to.be.above(t)},r.isAtLeast=function(e,t,o){new n(e,o).to.be.least(t)},r.isBelow=function(e,t,o){new n(e,o).to.be.below(t)},r.isAtMost=function(e,t,o){new n(e,o).to.be.most(t)},r.isTrue=function(e,t){new n(e,t).is["true"]},r.isNotTrue=function(e,t){new n(e,t).to.not.equal(!0)},r.isFalse=function(e,t){new n(e,t).is["false"]},r.isNotFalse=function(e,t){new n(e,t).to.not.equal(!1)},r.isNull=function(e,t){new n(e,t).to.equal(null)},r.isNotNull=function(e,t){new n(e,t).to.not.equal(null)},r.isNaN=function(e,t){new n(e,t).to.be.NaN},r.isNotNaN=function(e,t){new n(e,t).not.to.be.NaN},r.isUndefined=function(e,t){new n(e,t).to.equal(undefined)},r.isDefined=function(e,t){new n(e,t).to.not.equal(undefined)},r.isFunction=function(e,t){new n(e,t).to.be.a("function")},r.isNotFunction=function(e,t){new n(e,t).to.not.be.a("function")},r.isObject=function(e,t){new n(e,t).to.be.a("object")},r.isNotObject=function(e,t){new n(e,t).to.not.be.a("object")},r.isArray=function(e,t){new n(e,t).to.be.an("array")},r.isNotArray=function(e,t){new n(e,t).to.not.be.an("array")},r.isString=function(e,t){new n(e,t).to.be.a("string")},r.isNotString=function(e,t){new n(e,t).to.not.be.a("string")},r.isNumber=function(e,t){new n(e,t).to.be.a("number")},r.isNotNumber=function(e,t){new n(e,t).to.not.be.a("number")},r.isBoolean=function(e,t){new n(e,t).to.be.a("boolean")},r.isNotBoolean=function(e,t){new n(e,t).to.not.be.a("boolean")},r.typeOf=function(e,t,o){new n(e,o).to.be.a(t)},r.notTypeOf=function(e,t,o){new n(e,o).to.not.be.a(t)},r.instanceOf=function(e,t,o){new n(e,o).to.be.instanceOf(t)},r.notInstanceOf=function(e,t,o){new n(e,o).to.not.be.instanceOf(t)},r.include=function(e,t,o){new n(e,o,r.include).include(t)},r.notInclude=function(e,t,o){new n(e,o,r.notInclude).not.include(t)},r.match=function(e,t,o){new n(e,o).to.match(t)},r.notMatch=function(e,t,o){new n(e,o).to.not.match(t)},r.property=function(e,t,o){new n(e,o).to.have.property(t)},r.notProperty=function(e,t,o){new n(e,o).to.not.have.property(t)},r.deepProperty=function(e,t,o){new n(e,o).to.have.deep.property(t)},r.notDeepProperty=function(e,t,o){new n(e,o).to.not.have.deep.property(t)},r.propertyVal=function(e,t,o,r){new n(e,r).to.have.property(t,o)},r.propertyNotVal=function(e,t,o,r){new n(e,r).to.not.have.property(t,o)},r.deepPropertyVal=function(e,t,o,r){new n(e,r).to.have.deep.property(t,o)},r.deepPropertyNotVal=function(e,t,o,r){new n(e,r).to.not.have.deep.property(t,o)},r.lengthOf=function(e,t,o){new n(e,o).to.have.length(t)},r.throws=function(e,t,r,i){("string"==typeof t||t instanceof RegExp)&&(r=t,t=null);var s=new n(e,i).to["throw"](t,r);return o(s,"object")},r.doesNotThrow=function(e,t,o){"string"==typeof t&&(o=t,t=null),new n(e,o).to.not.Throw(t)},r.operator=function(e,r,i,s){var a;switch(r){case"==":a=e==i;break;case"===":a=e===i;break;case">":a=e>i;break;case">=":a=e>=i;break;case"<":a=e<i;break;case"<=":a=e<=i;break;case"!=":a=e!=i;break;case"!==":a=e!==i;break;default:throw new Error('Invalid operator "'+r+'"')}var c=new n(a,s);c.assert(!0===o(c,"object"),"expected "+t.inspect(e)+" to be "+r+" "+t.inspect(i),"expected "+t.inspect(e)+" to not be "+r+" "+t.inspect(i))},r.closeTo=function(e,t,o,r){new n(e,r).to.be.closeTo(t,o)},r.approximately=function(e,t,o,r){new n(e,r).to.be.approximately(t,o)},r.sameMembers=function(e,t,o){new n(e,o).to.have.same.members(t)},r.sameDeepMembers=function(e,t,o){new n(e,o).to.have.same.deep.members(t)},r.includeMembers=function(e,t,o){new n(e,o).to.include.members(t)},r.includeDeepMembers=function(e,t,o){new n(e,o).to.include.deep.members(t)},r.oneOf=function(e,t,o){new n(e,o).to.be.oneOf(t)},r.changes=function(e,t,o){new n(e).to.change(t,o)},r.doesNotChange=function(e,t,o){new n(e).to.not.change(t,o)},r.increases=function(e,t,o){new n(e).to.increase(t,o)},r.doesNotIncrease=function(e,t,o){new n(e).to.not.increase(t,o)},r.decreases=function(e,t,o){new n(e).to.decrease(t,o)},r.doesNotDecrease=function(e,t,o){new n(e).to.not.decrease(t,o)}
/*!
   * ### .ifError(object)
   *
   * Asserts if value is not a false value, and throws if it is a true value.
   * This is added to allow for chai to be a drop-in replacement for Node's
   * assert class.
   *
   *     var err = new Error('I am a custom error');
   *     assert.ifError(err); // Rethrows err!
   *
   * @name ifError
   * @param {Object} object
   * @namespace Assert
   * @api public
   */,r.ifError=function(e){if(e)throw e},r.isExtensible=function(e,t){new n(e,t).to.be.extensible},r.isNotExtensible=function(e,t){new n(e,t).to.not.be.extensible},r.isSealed=function(e,t){new n(e,t).to.be.sealed},r.isNotSealed=function(e,t){new n(e,t).to.not.be.sealed},r.isFrozen=function(e,t){new n(e,t).to.be.frozen},r.isNotFrozen=function(e,t){new n(e,t).to.not.be.frozen},
/*!
   * Aliases.
   */
function i(e,t){return r[t]=r[e],i}("isOk","ok")("isNotOk","notOk")("throws","throw")("throws","Throw")("isExtensible","extensible")("isNotExtensible","notExtensible")("isSealed","sealed")("isNotSealed","notSealed")("isFrozen","frozen")("isNotFrozen","notFrozen")}},{}],7:[function(e,t){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e){e.expect=function(t,n){return new e.Assertion(t,n)},e.expect.fail=function(t,n,o,r){throw o=o||"expect.fail()",new e.AssertionError(o,{actual:t,expected:n,operator:r},e.expect.fail)}}},{}],8:[function(e,t){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e){function t(){function t(){return this instanceof String||this instanceof Number||this instanceof Boolean?new n(this.valueOf(),null,t):new n(this,null,t)}function o(e){Object.defineProperty(this,"should",{value:e,enumerable:!0,configurable:!0,writable:!0})}Object.defineProperty(Object.prototype,"should",{set:o,get:t,configurable:!0});var r={fail:function(t,n,o,i){throw o=o||"should.fail()",new e.AssertionError(o,{actual:t,expected:n,operator:i},r.fail)},equal:function(e,t,o){new n(e,o).to.equal(t)},Throw:function(e,t,o,r){new n(e,r).to.Throw(t,o)},exist:function(e,t){new n(e,t).to.exist},not:{}};return r.not.equal=function(e,t,o){new n(e,o).to.not.equal(t)},r.not.Throw=function(e,t,o,r){new n(e,r).to.not.Throw(t,o)},r.not.exist=function(e,t){new n(e,t).to.not.exist},r["throw"]=r.Throw,r.not["throw"]=r.not.Throw,r}var n=e.Assertion;e.should=t,e.Should=t}},{}],9:[function(e,t){
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var n=e("./transferFlags"),o=e("./flag"),r=e("../config"),i="__proto__"in Object,s=/^(?:length|name|arguments|caller)$/,a=Function.prototype.call,c=Function.prototype.apply;t.exports=function(e,t,h,u){"function"!=typeof u&&(u=function(){});var f={method:h,chainingBehavior:u};e.__methods||(e.__methods={}),e.__methods[t]=f,Object.defineProperty(e,t,{get:function(){f.chainingBehavior.call(this);var t=function u(){o(this,"ssfi")&&!1===r.includeStack&&o(this,"ssfi",u);var e=f.method.apply(this,arguments);return e===undefined?this:e};if(i){var h=t.__proto__=Object.create(this);h.call=a,h.apply=c}else{Object.getOwnPropertyNames(e).forEach(function(n){if(!s.test(n)){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o)}})}return n(this,t),t},configurable:!0})}},{"../config":4,"./flag":13,"./transferFlags":29}],10:[function(e,t){
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var n=e("../config"),o=e("./flag");t.exports=function(e,t,r){e[t]=function(){o(this,"ssfi")&&!1===n.includeStack&&o(this,"ssfi",e[t]);var i=r.apply(this,arguments);return i===undefined?this:i}}},{"../config":4,"./flag":13}],11:[function(e,t){
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var n=e("../config"),o=e("./flag");t.exports=function(e,t,r){Object.defineProperty(e,t,{get:function i(){o(this,"ssfi")&&!1===n.includeStack&&o(this,"ssfi",i);var e=r.call(this);return e===undefined?this:e},configurable:!0})}},{"../config":4,"./flag":13}],12:[function(e,t){
/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var n=e("assertion-error"),o=e("./flag"),r=e("type-detect");t.exports=function(e,t){e=o(e,"object");(t=t.map(function(e){return e.toLowerCase()})).sort();var i=t.map(function(e,n){var o=~["a","e","i","o","u"].indexOf(e.charAt(0))?"an":"a";return(t.length>1&&n===t.length-1?"or ":"")+o+" "+e}).join(", ");if(!t.some(function(t){return r(e)===t}))throw new n("object tested must be "+i+", but "+r(e)+" given")}},{"./flag":13,"assertion-error":30,"type-detect":35}],13:[function(e,t){
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e,t,n){var o=e.__flags||(e.__flags=Object.create(null));if(3!==arguments.length)return o[t];o[t]=n}},{}],14:[function(e,t){
/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e,t){return t.length>4?t[4]:e._obj}},{}],15:[function(e,t){
/*!
 * Chai - getEnumerableProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e){var t=[];for(var n in e)t.push(n);return t}},{}],16:[function(e,t){
/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var n=e("./flag"),o=e("./getActual"),r=(e("./inspect"),e("./objDisplay"));t.exports=function(e,t){var i=n(e,"negate"),s=n(e,"object"),a=t[3],c=o(e,t),h=i?t[2]:t[1],u=n(e,"message");return"function"==typeof h&&(h=h()),h=(h=h||"").replace(/#\{this\}/g,function(){return r(s)}).replace(/#\{act\}/g,function(){return r(c)}).replace(/#\{exp\}/g,function(){return r(a)}),u?u+": "+h:h}},{"./flag":13,"./getActual":14,"./inspect":23,"./objDisplay":24}],17:[function(e,t){
/*!
 * Chai - getName utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e){if(e.name)return e.name;var t=/^\s?function ([^(]*)\(/.exec(e);return t&&t[1]?t[1]:""}},{}],18:[function(e,t){
/*!
 * ## parsePath(path)
 *
 * Helper function used to parse string object
 * paths. Use in conjunction with `_getPathValue`.
 *
 *      var parsed = parsePath('myobject.property.subprop');
 *
 * ### Paths:
 *
 * * Can be as near infinitely deep and nested
 * * Arrays are also valid using the formal `myobject.document[3].property`.
 * * Literal dots and brackets (not delimiter) must be backslash-escaped.
 *
 * @param {String} path
 * @returns {Object} parsed
 * @api private
 */
function n(e){return e.replace(/([^\\])\[/g,"$1.[").match(/(\\\.|[^.]+?)+/g).map(function(e){var t=/^\[(\d+)\]$/.exec(e);return t?{i:parseFloat(t[1])}:{p:e.replace(/\\([.\[\]])/g,"$1")}})}
/*!
 * ## _getPathValue(parsed, obj)
 *
 * Helper companion function for `.parsePath` that returns
 * the value located at the parsed address.
 *
 *      var value = getPathValue(parsed, obj);
 *
 * @param {Object} parsed definition from `parsePath`.
 * @param {Object} object to search against
 * @param {Number} object to search against
 * @returns {Object|Undefined} value
 * @api private
 */function o(e,t,n){for(var o,r=t,i=0,s=n=n===undefined?e.length:n;i<s;i++){var a=e[i];r?("undefined"!=typeof a.p?r=r[a.p]:"undefined"!=typeof a.i&&(r=r[a.i]),i==s-1&&(o=r)):o=undefined}return o}
/*!
 * Chai - getPathInfo utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var r=e("./hasProperty");t.exports=function(e,t){var i=n(e),s=i[i.length-1],a={parent:i.length>1?o(i,t,i.length-1):t,name:s.p||s.i,value:o(i,t)};return a.exists=r(a.name,a.parent),a}},{"./hasProperty":21}],19:[function(e,t){
/*!
 * Chai - getPathValue utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * @see https://github.com/logicalparadox/filtr
 * MIT Licensed
 */
var n=e("./getPathInfo");t.exports=function(e,t){return n(e,t).value}},{"./getPathInfo":18}],20:[function(e,t){
/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e){function t(e){-1===n.indexOf(e)&&n.push(e)}for(var n=Object.getOwnPropertyNames(e),o=Object.getPrototypeOf(e);null!==o;)Object.getOwnPropertyNames(o).forEach(t),o=Object.getPrototypeOf(o);return n}},{}],21:[function(e,t){
/*!
 * Chai - hasProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var n=e("type-detect"),o={number:Number,string:String};t.exports=function(e,t){var r=n(t);return"null"!==r&&"undefined"!==r&&(o[r]&&"object"!=typeof t&&(t=new o[r](t)),e in t)}},{"type-detect":35}],22:[function(e,t,n){
/*!
 * test utility
 */
(n=t.exports={}).test=e("./test"),
/*!
 * type utility
 */
n.type=e("type-detect"),
/*!
 * expectTypes utility
 */
n.expectTypes=e("./expectTypes"),
/*!
 * message utility
 */
n.getMessage=e("./getMessage"),
/*!
 * actual utility
 */
n.getActual=e("./getActual"),
/*!
 * Inspect util
 */
n.inspect=e("./inspect"),
/*!
 * Object Display util
 */
n.objDisplay=e("./objDisplay"),
/*!
 * Flag utility
 */
n.flag=e("./flag"),
/*!
 * Flag transferring utility
 */
n.transferFlags=e("./transferFlags"),
/*!
 * Deep equal utility
 */
n.eql=e("deep-eql"),
/*!
 * Deep path value
 */
n.getPathValue=e("./getPathValue"),
/*!
 * Deep path info
 */
n.getPathInfo=e("./getPathInfo"),
/*!
 * Check if a property exists
 */
n.hasProperty=e("./hasProperty"),
/*!
 * Function name
 */
n.getName=e("./getName"),
/*!
 * add Property
 */
n.addProperty=e("./addProperty"),
/*!
 * add Method
 */
n.addMethod=e("./addMethod"),
/*!
 * overwrite Property
 */
n.overwriteProperty=e("./overwriteProperty"),
/*!
 * overwrite Method
 */
n.overwriteMethod=e("./overwriteMethod"),
/*!
 * Add a chainable method
 */
n.addChainableMethod=e("./addChainableMethod"),
/*!
 * Overwrite chainable method
 */
n.overwriteChainableMethod=e("./overwriteChainableMethod")},{"./addChainableMethod":9,"./addMethod":10,"./addProperty":11,"./expectTypes":12,"./flag":13,"./getActual":14,"./getMessage":16,"./getName":17,"./getPathInfo":18,"./getPathValue":19,"./hasProperty":21,"./inspect":23,"./objDisplay":24,"./overwriteChainableMethod":25,"./overwriteMethod":26,"./overwriteProperty":27,"./test":28,"./transferFlags":29,"deep-eql":31,"type-detect":35}],23:[function(e,t,n){function o(e,t,n){return r({showHidden:t,seen:[],stylize:function(e){return e}},e,void 0===n?2:n)}function r(e,t,o){if(t&&"function"==typeof t.inspect&&t.inspect!==n.inspect&&(!t.constructor||t.constructor.prototype!==t)){var l=t.inspect(o);return"string"!=typeof l&&(l=r(e,l,o)),l}var x=i(e,t);if(x)return x;if(w(t)){if("outerHTML"in t)return t.outerHTML;try{if(document.xmlVersion)return(new XMLSerializer).serializeToString(t);var v="http://www.w3.org/1999/xhtml",m=document.createElementNS(v,"_");return m.appendChild(t.cloneNode(!1)),html=m.innerHTML.replace("><",">"+t.innerHTML+"<"),m.innerHTML="",html}catch(_){}}var j=y(t),O=e.showHidden?g(t):j;if(0===O.length||d(t)&&(1===O.length&&"stack"===O[0]||2===O.length&&"description"===O[0]&&"stack"===O[1])){if("function"==typeof t){var M=(P=b(t))?": "+P:"";return e.stylize("[Function"+M+"]","special")}if(f(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(p(t))return e.stylize(Date.prototype.toUTCString.call(t),"date");if(d(t))return s(t)}var P,E,N="",S=!1,k=["{","}"];(u(t)&&(S=!0,k=["[","]"]),"function"==typeof t)&&(N=" [Function"+(M=(P=b(t))?": "+P:"")+"]");return f(t)&&(N=" "+RegExp.prototype.toString.call(t)),p(t)&&(N=" "+Date.prototype.toUTCString.call(t)),d(t)?s(t):0!==O.length||S&&0!=t.length?o<0?f(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special"):(e.seen.push(t),E=S?a(e,t,o,j,O):O.map(function(n){return c(e,t,o,j,n,S)}),e.seen.pop(),h(E,N,k)):k[0]+N+k[1]}function i(e,t){switch(typeof t){case"undefined":return e.stylize("undefined","undefined");case"string":var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string");case"number":return 0===t&&1/t==-Infinity?e.stylize("-0","number"):e.stylize(""+t,"number");case"boolean":return e.stylize(""+t,"boolean")}if(null===t)return e.stylize("null","null")}function s(e){return"["+Error.prototype.toString.call(e)+"]"}function a(e,t,n,o,r){for(var i=[],s=0,a=t.length;s<a;++s)Object.prototype.hasOwnProperty.call(t,String(s))?i.push(c(e,t,n,o,String(s),!0)):i.push("");return r.forEach(function(r){r.match(/^\d+$/)||i.push(c(e,t,n,o,r,!0))}),i}function c(e,t,n,o,i,s){var a,c;if(t.__lookupGetter__&&(t.__lookupGetter__(i)?c=t.__lookupSetter__(i)?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):t.__lookupSetter__(i)&&(c=e.stylize("[Setter]","special"))),o.indexOf(i)<0&&(a="["+i+"]"),c||(e.seen.indexOf(t[i])<0?(c=r(e,t[i],null===n?null:n-1)).indexOf("\n")>-1&&(c=s?c.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+c.split("\n").map(function(e){return"   "+e}).join("\n")):c=e.stylize("[Circular]","special")),void 0===a){if(s&&i.match(/^\d+$/))return c;(a=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+c}function h(e,t,n){return e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.length+1},0)>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function u(e){return Array.isArray(e)||"object"==typeof e&&"[object Array]"===l(e)}function f(e){return"object"==typeof e&&"[object RegExp]"===l(e)}function p(e){return"object"==typeof e&&"[object Date]"===l(e)}function d(e){return"object"==typeof e&&"[object Error]"===l(e)}function l(e){return Object.prototype.toString.call(e)}var b=e("./getName"),g=e("./getProperties"),y=e("./getEnumerableProperties");t.exports=o;var w=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&1===e.nodeType&&"string"==typeof e.nodeName}},{"./getEnumerableProperties":15,"./getName":17,"./getProperties":20}],24:[function(e,t){
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var n=e("./inspect"),o=e("../config");t.exports=function(e){var t=n(e),r=Object.prototype.toString.call(e);if(o.truncateThreshold&&t.length>=o.truncateThreshold){if("[object Function]"===r)return e.name&&""!==e.name?"[Function: "+e.name+"]":"[Function]";if("[object Array]"===r)return"[ Array("+e.length+") ]";if("[object Object]"===r){var i=Object.keys(e);return"{ Object ("+(i.length>2?i.splice(0,2).join(", ")+", ...":i.join(", "))+") }"}return t}return t}},{"../config":4,"./inspect":23}],25:[function(e,t){
/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e,t,n,o){var r=e.__methods[t],i=r.chainingBehavior;r.chainingBehavior=function(){var e=o(i).call(this);return e===undefined?this:e};var s=r.method;r.method=function(){var e=n(s).apply(this,arguments);return e===undefined?this:e}}},{}],26:[function(e,t){
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e,t,n){var o=e[t],r=function(){return this};o&&"function"==typeof o&&(r=o),e[t]=function(){var e=n(r).apply(this,arguments);return e===undefined?this:e}}},{}],27:[function(e,t){
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e,t,n){var o=Object.getOwnPropertyDescriptor(e,t),r=function(){};o&&"function"==typeof o.get&&(r=o.get),Object.defineProperty(e,t,{get:function(){var e=n(r).call(this);return e===undefined?this:e},configurable:!0})}},{}],28:[function(e,t){
/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var n=e("./flag");t.exports=function(e,t){var o=n(e,"negate"),r=t[0];return o?!r:r}},{"./flag":13}],29:[function(e,t){
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e,t,n){var o=e.__flags||(e.__flags=Object.create(null));for(var r in t.__flags||(t.__flags=Object.create(null)),n=3!==arguments.length||n,o)(n||"object"!==r&&"ssfi"!==r&&"message"!=r)&&(t.__flags[r]=o[r])}},{}],30:[function(e,t){
/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */
/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */
function n(){function e(e,n){Object.keys(n).forEach(function(o){~t.indexOf(o)||(e[o]=n[o])})}var t=[].slice.call(arguments);return function(){for(var t=[].slice.call(arguments),n=0,o={};n<t.length;n++)e(o,t[n]);return o}}function o(e,t,o){var r=n("name","message","stack","constructor","toJSON")(t||{});for(var i in this.message=e||"Unspecified AssertionError",this.showDiff=!1,r)this[i]=r[i];(o=o||arguments.callee)&&Error.captureStackTrace?Error.captureStackTrace(this,o):this.stack=(new Error).stack}
/*!
 * Inherit from Error.prototype
 */
/*!
 * Primary Exports
 */
t.exports=o,o.prototype=Object.create(Error.prototype),
/*!
 * Statically set name
 */
o.prototype.name="AssertionError",
/*!
 * Ensure correct constructor
 */
o.prototype.constructor=o,o.prototype.toJSON=function(e){var t=n("constructor","toJSON","stack")({name:this.name},this);return!1!==e&&this.stack&&(t.stack=this.stack),t}},{}],31:[function(e,t){t.exports=e("./lib/eql")},{"./lib/eql":32}],32:[function(e,t){function n(e,t,n){return!!o(e,t)||("date"===l(e)?i(e,t):"regexp"===l(e)?s(e,t):d.isBuffer(e)?u(e,t):"arguments"===l(e)?a(e,t,n):!!r(e,t)&&("object"!==l(e)&&"object"!==l(t)&&"array"!==l(e)&&"array"!==l(t)?o(e,t):p(e,t,n)))}
/*!
 * Strict (egal) equality test. Ensures that NaN always
 * equals NaN and `-0` does not equal `+0`.
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @return {Boolean} equal match
 */function o(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}
/*!
 * Compare the types of two given objects and
 * return if they are equal. Note that an Array
 * has a type of `array` (not `object`) and arguments
 * have a type of `arguments` (not `array`/`object`).
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @return {Boolean} result
 */function r(e,t){return l(e)===l(t)}
/*!
 * Compare two Date objects by asserting that
 * the time values are equal using `saveValue`.
 *
 * @param {Date} a
 * @param {Date} b
 * @return {Boolean} result
 */function i(e,t){return"date"===l(t)&&o(e.getTime(),t.getTime())}
/*!
 * Compare two regular expressions by converting them
 * to string and checking for `sameValue`.
 *
 * @param {RegExp} a
 * @param {RegExp} b
 * @return {Boolean} result
 */function s(e,t){return"regexp"===l(t)&&o(e.toString(),t.toString())}
/*!
 * Assert deep equality of two `arguments` objects.
 * Unfortunately, these must be sliced to arrays
 * prior to test to ensure no bad behavior.
 *
 * @param {Arguments} a
 * @param {Arguments} b
 * @param {Array} memoize (optional)
 * @return {Boolean} result
 */function a(e,t,o){return"arguments"===l(t)&&n(e=[].slice.call(e),t=[].slice.call(t),o)}
/*!
 * Get enumerable properties of a given object.
 *
 * @param {Object} a
 * @return {Array} property names
 */function c(e){var t=[];for(var n in e)t.push(n);return t}
/*!
 * Simple equality for flat iterable objects
 * such as Arrays or Node.js buffers.
 *
 * @param {Iterable} a
 * @param {Iterable} b
 * @return {Boolean} result
 */function h(e,t){if(e.length!==t.length)return!1;for(var n=0,o=!0;n<e.length;n++)if(e[n]!==t[n]){o=!1;break}return o}
/*!
 * Extension to `iterableEqual` specifically
 * for Node.js Buffers.
 *
 * @param {Buffer} a
 * @param {Mixed} b
 * @return {Boolean} result
 */function u(e,t){return!!d.isBuffer(t)&&h(e,t)}
/*!
 * Block for `objectEqual` ensuring non-existing
 * values don't get in.
 *
 * @param {Mixed} object
 * @return {Boolean} result
 */function f(e){return null!==e&&e!==undefined}
/*!
 * Recursively check the equality of two objects.
 * Once basic sameness has been established it will
 * defer to `deepEqual` for each enumerable key
 * in the object.
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @return {Boolean} result
 */function p(e,t,o){if(!f(e)||!f(t))return!1;if(e.prototype!==t.prototype)return!1;var r,i;if(o){for(r=0;r<o.length;r++)if(o[r][0]===e&&o[r][1]===t||o[r][0]===t&&o[r][1]===e)return!0}else o=[];try{var s=c(e),a=c(t)}catch(u){return!1}if(s.sort(),a.sort(),!h(s,a))return!1;for(o.push([e,t]),r=s.length-1;r>=0;r--)if(!n(e[i=s[r]],t[i],o))return!1;return!0}
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var d,l=e("type-detect");
/*!
 * Buffer.isBuffer browser shim
 */try{d=e("buffer").Buffer}catch(b){(d={}).isBuffer=function(){return!1}}
/*!
 * Primary Export
 */t.exports=n},{buffer:undefined,"type-detect":33}],33:[function(e,t){t.exports=e("./lib/type")},{"./lib/type":34}],34:[function(e,t,n){function o(e){var t=Object.prototype.toString.call(e);return i[t]?i[t]:null===e?"null":e===undefined?"undefined":e===Object(e)?"object":typeof e}function r(){this.tests={}}
/*!
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Primary Exports
 */
n=t.exports=o;
/*!
 * Detectable javascript natives
 */var i={"[object Array]":"array","[object RegExp]":"regexp","[object Function]":"function","[object Arguments]":"arguments","[object Date]":"date"};n.Library=r,r.prototype.of=o,r.prototype.define=function(e,t){return 1===arguments.length?this.tests[e]:(this.tests[e]=t,this)},r.prototype.test=function(e,t){if(t===o(e))return!0;var n=this.tests[t];if(n&&"regexp"===o(n))return n.test(e);if(n&&"function"===o(n))return n(e);throw new ReferenceError('Type test "'+t+'" not defined or invalid.')}},{}],35:[function(e,t,n){arguments[4][33][0].apply(n,arguments)},{"./lib/type":36,dup:33}],36:[function(e,t,n){function o(e){var t=Object.prototype.toString.call(e).match(i)[1].toLowerCase();return"function"==typeof Promise&&e instanceof Promise?"promise":null===e?"null":e===undefined?"undefined":t}function r(){if(!(this instanceof r))return new r;this.tests={}}
/*!
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Primary Exports
 */
n=t.exports=o;var i=/^\[object (.*)\]$/;n.Library=r,r.prototype.of=o,r.prototype.define=function(e,t){return 1===arguments.length?this.tests[e]:(this.tests[e]=t,this)},r.prototype.test=function(e,t){if(t===o(e))return!0;var n=this.tests[t];if(n&&"regexp"===o(n))return n.test(e);if(n&&"function"===o(n))return n(e);throw new ReferenceError('Type test "'+t+'" not defined or invalid.')}},{}]},{},[1])(1)});