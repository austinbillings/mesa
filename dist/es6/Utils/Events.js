'use strict';var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!(i&&_arr.length===i));_n=!0);}catch(err){_d=!0,_e=err}finally{try{!_n&&_i['return']&&_i['return']()}finally{if(_d)throw _e}}return _arr}return function(arr,i){if(Array.isArray(arr))return arr;if(Symbol.iterator in Object(arr))return sliceIterator(arr,i);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),_KeyCodes=require('./KeyCodes'),_KeyCodes2=_interopRequireDefault(_KeyCodes);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var idPrefix='listener_',Events={listenerStore:[],add:function add(event,callback){var length=Events.listenerStore.push([event,callback]);return window.addEventListener(event,callback),idPrefix+--length},remove:function remove(id){var offset=idPrefix.length,index=parseInt(id.substring(offset)),_Events$listenerStore=_slicedToArray(Events.listenerStore[index],2),event=_Events$listenerStore[0],callback=_Events$listenerStore[1];window.removeEventListener(event,callback),delete Events.listenerStore[index]},onKey:function onKey(key,callback){return!key in _KeyCodes2.default?void 0:Events.onKeyCode(_KeyCodes2.default[key],callback)},onKeyCode:function onKeyCode(keyCodeOrSet,callback){return Events.add('keydown',function handler(e){var acceptable=Array.isArray(keyCodeOrSet)?keyCodeOrSet:[keyCodeOrSet];acceptable.includes(e.keyCode)&&callback(e)})}};exports.default=Events;