const a23_0x42364d=a23_0x1920;(function(_0x9934eb,_0x3f00c5){const _0x407562=a23_0x1920,_0x227469=_0x9934eb();while(!![]){try{const _0x177c63=parseInt(_0x407562(0xb4))/0x1*(-parseInt(_0x407562(0xbb))/0x2)+parseInt(_0x407562(0xc5))/0x3+parseInt(_0x407562(0xd7))/0x4*(-parseInt(_0x407562(0xc8))/0x5)+-parseInt(_0x407562(0xb7))/0x6+parseInt(_0x407562(0xc6))/0x7+-parseInt(_0x407562(0xa7))/0x8*(-parseInt(_0x407562(0xb0))/0x9)+parseInt(_0x407562(0xab))/0xa*(parseInt(_0x407562(0xbf))/0xb);if(_0x177c63===_0x3f00c5)break;else _0x227469['push'](_0x227469['shift']());}catch(_0x29f42b){_0x227469['push'](_0x227469['shift']());}}}(a23_0x2c37,0xe0019));const a23_0x2dd06c=function(){let _0x157103=!![];return function(_0x2d90de,_0x39a493){const _0x54e9f0=_0x157103?function(){const _0x5b3914=a23_0x1920;if(_0x39a493){const _0x3d7600=_0x39a493[_0x5b3914(0xb1)](_0x2d90de,arguments);return _0x39a493=null,_0x3d7600;}}:function(){};return _0x157103=![],_0x54e9f0;};}(),a23_0x85c2fe=a23_0x2dd06c(this,function(){const _0x37f5a6=a23_0x1920;return a23_0x85c2fe['toString']()[_0x37f5a6(0xb5)](_0x37f5a6(0xd9))['toString']()[_0x37f5a6(0xa9)](a23_0x85c2fe)[_0x37f5a6(0xb5)](_0x37f5a6(0xd9));});a23_0x85c2fe();function a23_0x2c37(){const _0x2f74de=['META_CONTROLLER_PREFIX','264029rPaLoC','search','normalizePaths','5669406tYmUxy','Router','injectHandlers','nested','6kkdFEo','prefix','injectNestedController','getOwnPropertyNames','11njAJEF','name','handlers','use','injecting\x20','middlewares','193005VBAOmg','6709472NGKNNi','root','2115JhEqJI','instance','defineProperty','log','__esModule','typedi','getOwnMetadata','toLowerCase','META_CONTROLLER_VERSION','inject','injectMiddlewares','path','method','ControllerInjector','nestedPath','1260lbYvWr','META_HANDLER','(((.+)+)+)+$','controllerType','../constants','filter','router','__importDefault','handlerWrapper','./middleware.injector','default','75800hOcbBr','CONTROLLER_DEFAULT_PREFIX','constructor','\x20at\x20[','8079560AfggkR','getPrototypeOf','META_CONTROLLER_PATH','META_CONTROLLER_MIDDLEWARES','../wrappers/handler.wrapper','909Wzvavg','apply','toString'];a23_0x2c37=function(){return _0x2f74de;};return a23_0x2c37();}'use strict';var __importDefault=this&&this[a23_0x42364d(0xde)]||function(_0x907340){return _0x907340&&_0x907340['__esModule']?_0x907340:{'default':_0x907340};};Object[a23_0x42364d(0xca)](exports,a23_0x42364d(0xcc),{'value':!![]}),exports[a23_0x42364d(0xd5)]=void 0x0;const express_1=require('express'),typedi_1=__importDefault(require(a23_0x42364d(0xcd))),logger_class_1=require('../classes/logger.class'),constants_1=require(a23_0x42364d(0xdb)),utils_1=require('../utils'),handler_wrapper_1=require(a23_0x42364d(0xaf)),middleware_injector_1=require(a23_0x42364d(0xa5)),logger=new logger_class_1['Logger']('controller-injector');class ControllerInjector{constructor(_0x4cf4e0,_0x1a0a6d){const _0x5b0f6d=a23_0x42364d;this[_0x5b0f6d(0xda)]=_0x4cf4e0,this[_0x5b0f6d(0xc7)]=_0x1a0a6d,this['router']=(0x0,express_1[_0x5b0f6d(0xb8)])({'mergeParams':!![]}),this['nestedPath']='';if(!Reflect[_0x5b0f6d(0xce)](constants_1['META_CONTROLLER'],_0x4cf4e0))throw TypeError(_0x4cf4e0['name']+'\x20is\x20not\x20a\x20Controller');}get['handlers'](){const _0x5151f7=a23_0x42364d,_0x22b79e=Object[_0x5151f7(0xac)](this[_0x5151f7(0xc9)]);return Object[_0x5151f7(0xbe)](_0x22b79e)['map'](_0x3de155=>_0x22b79e[_0x3de155])[_0x5151f7(0xdc)](_0x4198e1=>!!Reflect[_0x5151f7(0xce)](constants_1[_0x5151f7(0xd8)],_0x4198e1));}get[a23_0x42364d(0xc4)](){const _0x1e9149=a23_0x42364d;return Reflect[_0x1e9149(0xce)](constants_1[_0x1e9149(0xae)],this['instance'])||[];}get[a23_0x42364d(0xbc)](){const _0x3ad3d0=a23_0x42364d;var _0x48d8aa;const _0x38fab2=(_0x48d8aa=Reflect[_0x3ad3d0(0xce)](constants_1[_0x3ad3d0(0xb3)],this[_0x3ad3d0(0xda)]))!==null&&_0x48d8aa!==void 0x0?_0x48d8aa:constants_1[_0x3ad3d0(0xa8)],_0x8f89c7=Reflect['getOwnMetadata'](constants_1[_0x3ad3d0(0xd0)],this['controllerType'])||'';return this[_0x3ad3d0(0xd6)]?'':(0x0,utils_1[_0x3ad3d0(0xb6)])(_0x38fab2,_0x8f89c7);}get[a23_0x42364d(0xd3)](){const _0x556ac5=a23_0x42364d;if(this['nestedPath'])return this['nestedPath'];const _0x4c87a2=Reflect[_0x556ac5(0xce)](constants_1[_0x556ac5(0xad)],this[_0x556ac5(0xda)])||'';return(0x0,utils_1['normalizePaths'])(_0x4c87a2);}get[a23_0x42364d(0xc9)](){const _0xacd790=a23_0x42364d;return typedi_1[_0xacd790(0xa6)]['get'](this[_0xacd790(0xda)]);}async[a23_0x42364d(0xd2)](){const _0x4f04c8=a23_0x42364d;for(const _0x4af943 of this['middlewares']){const _0x51b25d=await(0x0,middleware_injector_1['middlewareInjector'])(_0x4af943);this['router'][_0x4f04c8(0xc2)](_0x51b25d);}}async['injectNestedController'](_0x1585d2){const _0x3705e3=a23_0x42364d,_0x1265b0=_0x1585d2['nested'];logger[_0x3705e3(0xcb)]('injecting\x20nested\x20'+_0x1265b0[_0x3705e3(0xc0)]+'\x20at\x20'+this[_0x3705e3(0xd3)]+_0x1585d2[_0x3705e3(0xd3)]);const _0x355478=new ControllerInjector(_0x1265b0,this);_0x355478['nestedPath']=_0x1585d2['path'],await _0x355478[_0x3705e3(0xd1)](this['router']);}async['injectHandlers'](){const _0x369a96=a23_0x42364d;var _0x3a225b;for(const _0x2ba1dd of this[_0x369a96(0xc1)]){const _0xe25c62=(0x0,utils_1['getHandlerMeta'])(_0x2ba1dd);if(_0xe25c62[_0x369a96(0xba)])await this[_0x369a96(0xbd)](_0xe25c62);else{const _0x11ae42=_0xe25c62[_0x369a96(0xd4)][_0x369a96(0xb2)]()[_0x369a96(0xcf)]();logger[_0x369a96(0xcb)](_0x369a96(0xc3)+this[_0x369a96(0xda)][_0x369a96(0xc0)]+'#'+_0x2ba1dd[_0x369a96(0xc0)]+_0x369a96(0xaa)+_0xe25c62['method']+']\x20'+(0x0,utils_1[_0x369a96(0xb6)])(((_0x3a225b=this[_0x369a96(0xc7)])===null||_0x3a225b===void 0x0?void 0x0:_0x3a225b[_0x369a96(0xd3)])||'',this['path'],_0xe25c62[_0x369a96(0xd3)])),this[_0x369a96(0xdd)][_0x11ae42](_0xe25c62[_0x369a96(0xd3)],(0x0,handler_wrapper_1[_0x369a96(0xdf)])(_0x2ba1dd,this[_0x369a96(0xc9)]));}}}async[a23_0x42364d(0xd1)](_0x2868fc){const _0x150914=a23_0x42364d;!this[_0x150914(0xd6)]&&logger['log'](_0x150914(0xc3)+this['controllerType'][_0x150914(0xc0)]+'\x20{'+this[_0x150914(0xbc)]+'}'),await this[_0x150914(0xd2)](),await this[_0x150914(0xb9)](),_0x2868fc[_0x150914(0xc2)](''+this[_0x150914(0xbc)]+this['path'],this[_0x150914(0xdd)]);}}function a23_0x1920(_0x4db54c,_0x2386e1){const _0x379e4a=a23_0x2c37();return a23_0x1920=function(_0x85c2fe,_0x2dd06c){_0x85c2fe=_0x85c2fe-0xa5;let _0x2c37c8=_0x379e4a[_0x85c2fe];return _0x2c37c8;},a23_0x1920(_0x4db54c,_0x2386e1);}exports[a23_0x42364d(0xd5)]=ControllerInjector;