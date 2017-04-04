/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";






Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

ReactElement=function(){function ReactElement(){_classCallCheck(this,ReactElement);}_createClass(ReactElement,[{key:'children',get:function get()




{
return this.props&&this.props.children;
}}]);return ReactElement;}();exports.default=ReactElement;
;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";






Object.defineProperty(exports,"__esModule",{value:true});

var _reactElement=__webpack_require__(0);var _reactElement2=_interopRequireDefault(_reactElement);
var _createElement=__webpack_require__(3);var _createElement2=_interopRequireDefault(_createElement);
var _render=__webpack_require__(4);var _render2=_interopRequireDefault(_render);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

{
ReactElement:_reactElement2.default,
createElement:_createElement2.default,
render:_render2.default};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";








var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var el=document.createElement('div');
document.body.appendChild(el);

var count=0;

var Rc1=
_react2.default.createElement('div',{style:{
width:100,
height:100,
background:'white',
transition:'all .5s'}},

_react2.default.createElement('div',{key:'1'},'1'),
_react2.default.createElement('div',{key:'2'},'2'),
_react2.default.createElement('div',{key:'3'},'3'),
false);



var Rc2=
_react2.default.createElement('div',{style:{
width:200,
height:200,
background:'pink',
transition:'all .5s'}},

_react2.default.createElement('div',{key:'1'},'1'),
_react2.default.createElement('div',{key:'2'},'2'),
_react2.default.createElement('div',null,'4'));



_react2.default.render(Rc1,el);

setInterval(function(){
_react2.default.render(count%2===0?Rc2:Rc1,el);
count++;
},2000);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";






Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=



createElement;var _reactElement=__webpack_require__(0);var _reactElement2=_interopRequireDefault(_reactElement);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function createElement(type,props){for(var _len=arguments.length,children=Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){children[_key-2]=arguments[_key];}
var rc=new _reactElement2.default();

rc.type=type;
rc.key=props&&props.key||null;
rc.ref=props&&props.ref||null;

if(children.length){
if(children.length===1){
rc.props=_extends({},
props,{
children:children[0]});


}else{
rc.props=_extends({},
props,{
children:children});

}

}else{
rc.props=props;
}

return rc;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";






Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.default=

























































































































































































































































































































































































render;var _reactElement=__webpack_require__(0);var _reactElement2=_interopRequireDefault(_reactElement);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var EmptyNode={};var TextNode={};function getType(jsx){if(typeof jsx==='string'||typeof jsx==='number'){return TextNode;}if(jsx===false||jsx===null){return EmptyNode;}return jsx.type;}function compareStyle(el,newStyle,oldStyle){var blacklist=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};var changeStyle={};if(newStyle){for(var _iterator=Object.keys(newStyle),_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var key=_ref;if(!blacklist[key]&&newStyle[key]!=null&&!oldStyle||oldStyle[key]!==newStyle[key]){if(typeof newStyle[key]==='number'){el.style[key]=newStyle[key]+'px';}else{el.style[key]=newStyle[key];}changeStyle[key]=newStyle[key];}}}if(oldStyle){for(var _iterator2=Object.keys(oldStyle),_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref2=_i2.value;}var _key=_ref2;if(!blacklist[_key]&&oldStyle[_key]!=null&&!newStyle||newStyle[_key]==null){el.style[_key]=null;changeStyle[_key]=null;}}}return changeStyle;}function compareProps(el,newProps,oldProps){var blacklist=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};if(newProps){for(var _iterator3=Object.keys(newProps),_isArray3=Array.isArray(_iterator3),_i3=0,_iterator3=_isArray3?_iterator3:_iterator3[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref3;if(_isArray3){if(_i3>=_iterator3.length)break;_ref3=_iterator3[_i3++];}else{_i3=_iterator3.next();if(_i3.done)break;_ref3=_i3.value;}var key=_ref3;if(!blacklist[key]&&newProps[key]!=null&&(!oldProps||oldProps[key]!==newProps[key])){el.setAttribute(key,newProps[key]);}}}if(oldProps){for(var _iterator4=Object.keys(oldProps),_isArray4=Array.isArray(_iterator4),_i4=0,_iterator4=_isArray4?_iterator4:_iterator4[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref4;if(_isArray4){if(_i4>=_iterator4.length)break;_ref4=_iterator4[_i4++];}else{_i4=_iterator4.next();if(_i4.done)break;_ref4=_i4.value;}var _key2=_ref4;if(!blacklist[_key2]&&oldProps[_key2]!=null&&(!newProps||newProps[_key2]==null)){el.removeAttribute(_key2);}}}}function initProps(el,props,blacklist){if(props){for(var _iterator5=Object.keys(props),_isArray5=Array.isArray(_iterator5),_i5=0,_iterator5=_isArray5?_iterator5:_iterator5[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref5;if(_isArray5){if(_i5>=_iterator5.length)break;_ref5=_iterator5[_i5++];}else{_i5=_iterator5.next();if(_i5.done)break;_ref5=_i5.value;}var key=_ref5;if(key==='style'&&props[key]){var style=props[key];for(var _iterator6=Object.keys(style),_isArray6=Array.isArray(_iterator6),_i6=0,_iterator6=_isArray6?_iterator6:_iterator6[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref6;if(_isArray6){if(_i6>=_iterator6.length)break;_ref6=_iterator6[_i6++];}else{_i6=_iterator6.next();if(_i6.done)break;_ref6=_i6.value;}var styleKey=_ref6;if(typeof style[styleKey]==='number'){el.style[styleKey]=style[styleKey]+'px';}else{el.style[styleKey]=style[styleKey];}}}else if(props[key]!=null&&!blacklist[key]){el.setAttribute(key,props[key]);}}}}function removeChildrens(el,oldChildren,newChildren){var noKeys=[];var map={};for(var _iterator7=newChildren,_isArray7=Array.isArray(_iterator7),_i7=0,_iterator7=_isArray7?_iterator7:_iterator7[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref7;if(_isArray7){if(_i7>=_iterator7.length)break;_ref7=_iterator7[_i7++];}else{_i7=_iterator7.next();if(_i7.done)break;_ref7=_i7.value;}var child=_ref7;if(child.key){map[child.key]=true;}else{noKeys.push(true);}}var removes=[];for(var _iterator8=oldChildren,_isArray8=Array.isArray(_iterator8),_i8=0,_iterator8=_isArray8?_iterator8:_iterator8[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref8;if(_isArray8){if(_i8>=_iterator8.length)break;_ref8=_iterator8[_i8++];}else{_i8=_iterator8.next();if(_i8.done)break;_ref8=_i8.value;}var _child=_ref8;if(_child.jsx.key){if(!map[_child.jsx.key]){_child.unmount();}}else if(!noKeys.shift()){_child.unmount();}}}function getChildrenMap(oldChildren,newChildren){var sources=[];var noKeys=[];var map={};for(var i=0;i<oldChildren.length;i++){var key=oldChildren[i].jsx.key;if(key){map[key]=i;}else{noKeys.push(i);}}for(var _i9=0;_i9<newChildren.length;_i9++){var _key3=newChildren[_i9].key;var v=void 0;if(_key3){v=map[_key3];}else{v=noKeys.shift();}sources.push(v===undefined?-1:v);}return sources;}function lis_algorithm(arr){var p=arr.slice(0);var result=[0];var i=void 0;var j=void 0;var u=void 0;var v=void 0;var c=void 0;var len=arr.length;for(i=0;i<len;i++){var arrI=arr[i];if(arrI===-1){continue;}j=result[result.length-1];if(arr[j]<arrI){p[i]=j;result.push(i);continue;}u=0;v=result.length-1;while(u<v){c=(u+v)/2|0;if(arr[result[c]]<arrI){u=c+1;}else{v=c;}}if(arrI<arr[result[u]]){if(u>0){p[i]=result[u-1];}result[u]=i;}}u=result.length;v=result[u-1];while(u-->0){result[u]=v;v=p[v];}return result;}function updateChildren(el,newChildren,children){var oldChildren=children.splice(0);if(!Array.isArray(newChildren)){newChildren=newChildren?[newChildren]:[];}removeChildrens(el,oldChildren,newChildren);var sources=getChildrenMap(oldChildren,newChildren);var lis=lis_algorithm(sources);var lastMountId=null;for(var i=newChildren.length-1;i>=0;i--){var jsx=newChildren[i];var mount=null;if(lis[lis.length-1]===i){lis.pop();mount=oldChildren[sources[i]];mount.beforeId=lastMountId;mount.update(jsx);}else if(sources[i]>=0){mount=oldChildren[sources[i]];mount.moveTo(lastMountId);mount.update(jsx);}else{mount=new ReactMount();mount.parentEl=el;mount.mount(jsx,lastMountId);}children[i]=mount;lastMountId=mount.id;}}var counter=0;var elRegistry=[];var ReactMount=function(){function ReactMount(){_classCallCheck(this,ReactMount);this.id=++counter;this.children=[];}_createClass(ReactMount,[{key:'mount',value:function mount(jsx,beforeId){this.jsx=jsx;this.beforeId=beforeId;if(getType(jsx)===TextNode){this.el=document.createTextNode(jsx);elRegistry[this.id]=this.el;if(beforeId){this.parentEl.insertBefore(this.el,elRegistry[this.beforeId]);}else{this.parentEl.appendChild(this.el);}}else if(getType(jsx)===EmptyNode){this.el=document.createComment('react-empty-node_'+this.id);elRegistry[this.id]=this.el;if(beforeId){this.parentEl.insertBefore(this.el,elRegistry[this.beforeId]);}else{this.parentEl.appendChild(this.el);}}else if(jsx instanceof _reactElement2.default){this.el=document.createElement(jsx.type);elRegistry[this.id]=this.el;this.el.setAttribute('data-react-id',this.id);if(beforeId){this.parentEl.insertBefore(this.el,elRegistry[this.beforeId]);}else{this.parentEl.appendChild(this.el);}initProps(this.el,jsx.props,{children:true,ref:true,key:true});if(jsx.children){if(Array.isArray(jsx.children)){for(var _iterator9=jsx.children,_isArray9=Array.isArray(_iterator9),_i10=0,_iterator9=_isArray9?_iterator9:_iterator9[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref9;if(_isArray9){if(_i10>=_iterator9.length)break;_ref9=_iterator9[_i10++];}else{_i10=_iterator9.next();if(_i10.done)break;_ref9=_i10.value;}var child=_ref9;var mount=new ReactMount();mount.parentEl=this.el;mount.mount(child);this.children.push(mount);}}else{var _mount=new ReactMount();_mount.parentEl=this.el;_mount.mount(jsx.children);this.children.push(_mount);}}}}},{key:'unmount',value:function unmount(){if(this.el){this.parentEl.removeChild(this.el);delete elRegistry[this.id];this.el=null;}}},{key:'moveTo',value:function moveTo(beforeId){if(this.el){this.parentEl.removeChild(this.el);this.beforeId=beforeId;if(beforeId){this.parentEl.insertBefore(this.el,elRegistry[beforeId]);}else{this.parentEl.appendChild(this.el);}}}},{key:'update',value:function update(newJsx){if(getType(newJsx)!==getType(this.jsx)||newJsx.key!==this.jsx.key){this.unmount();this.mount(newJsx,this.beforeId);}if(getType(newJsx)===TextNode){this.el.data=newJsx;}if(getType(newJsx)===EmptyNode){}else if(this.el){compareProps(this.el,newJsx.props,this.jsx.props,{children:true,ref:true,key:true,style:true});var changeStyle=compareStyle(this.el,newJsx.props&&newJsx.props.style,this.jsx.props&&this.jsx.props.style);if(Object.keys(changeStyle).length){this.jsx=_extends({},this.jsx,{props:_extends({},this.jsx.props,{style:_extends({},this.jsx.props.style,changeStyle)})});}updateChildren(this.el,newJsx.children,this.children);}}}]);return ReactMount;}();;function render(jsx,el){
if(el._reactMount){
el._reactMount.update(jsx);
return;
}

var mount=new ReactMount();

mount.parentEl=el;
el._reactMount=mount;

mount.mount(jsx);
}

/***/ })
/******/ ]);