const a22_0x13d2=['nestedPath','log','inject','controllerType','../classes/logger.class','toLowerCase','middlewareInjector','META_CONTROLLER','ControllerInjector','instance','method','injecting\x20','\x20at\x20','1633BeihbO','../constants','6489cGdDeC','toString','normalizePaths','669782JYBLcr','nested','default','middlewares','router','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','constructor','express','injectMiddlewares','721iwGQMx','root','META_CONTROLLER_PATH','__esModule','META_HANDLER','map','test','getHandlerMeta','105003ENBbrQ','controller-injector','358900cCgjMo','use','get','197czOCZp','1nYvWhU','path','defineProperty','injectNestedController','name','injectHandlers','injecting\x20nested\x20','./middleware.injector','getOwnMetadata','prefix','Router','return\x20/\x22\x20+\x20this\x20+\x20\x22/','\x20is\x20not\x20a\x20Controller','15GSzUKY','2977941erpedl','865552VhWggK','META_CONTROLLER_VERSION','CONTROLLER_DEFAULT_PREFIX','handlers'];const a22_0x58f57f=a22_0x5258;(function(_0x612ed5,_0x53cf13){const _0x33498c=a22_0x5258;while(!![]){try{const _0x54758a=parseInt(_0x33498c(0x1d0))+parseInt(_0x33498c(0x1cd))*parseInt(_0x33498c(0x1e6))+-parseInt(_0x33498c(0x1e1))*parseInt(_0x33498c(0x1b8))+parseInt(_0x33498c(0x1e7))*-parseInt(_0x33498c(0x1ba))+-parseInt(_0x33498c(0x1d9))*parseInt(_0x33498c(0x1cb))+-parseInt(_0x33498c(0x1e3))+parseInt(_0x33498c(0x1b9));if(_0x54758a===_0x53cf13)break;else _0x612ed5['push'](_0x612ed5['shift']());}catch(_0x3ac8a7){_0x612ed5['push'](_0x612ed5['shift']());}}}(a22_0x13d2,0xe7bae));const a22_0x447565=function(){let _0x3ac34a=!![];return function(_0x3f8696,_0x17033d){const _0x3f67ad=_0x3ac34a?function(){if(_0x17033d){const _0x933dae=_0x17033d['apply'](_0x3f8696,arguments);return _0x17033d=null,_0x933dae;}}:function(){};return _0x3ac34a=![],_0x3f67ad;};}(),a22_0x3587ad=a22_0x447565(this,function(){const _0x5bbd89=function(){const _0x35eaa8=a22_0x5258,_0xb902c9=_0x5bbd89[_0x35eaa8(0x1d6)](_0x35eaa8(0x1b6))()[_0x35eaa8(0x1d6)](_0x35eaa8(0x1d5));return!_0xb902c9[_0x35eaa8(0x1df)](a22_0x3587ad);};return _0x5bbd89();});a22_0x3587ad();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x35c82e){const _0x3b74d7=a22_0x5258;return _0x35c82e&&_0x35c82e[_0x3b74d7(0x1dc)]?_0x35c82e:{'default':_0x35c82e};};Object[a22_0x58f57f(0x1e9)](exports,a22_0x58f57f(0x1dc),{'value':!![]}),exports[a22_0x58f57f(0x1c6)]=void 0x0;const express_1=require(a22_0x58f57f(0x1d7)),typedi_1=__importDefault(require('typedi')),logger_class_1=require(a22_0x58f57f(0x1c2)),constants_1=require(a22_0x58f57f(0x1cc)),utils_1=require('../utils'),handler_wrapper_1=require('../wrappers/handler.wrapper'),middleware_injector_1=require(a22_0x58f57f(0x1ee)),logger=new logger_class_1['Logger'](a22_0x58f57f(0x1e2));function a22_0x5258(_0x5267dd,_0x3c6550){return a22_0x5258=function(_0x4750ef,_0x3587ad){_0x4750ef=_0x4750ef-0x1b4;let _0x447565=a22_0x13d2[_0x4750ef];return _0x447565;},a22_0x5258(_0x5267dd,_0x3c6550);}class ControllerInjector{constructor(_0x39b121,_0x38c42f){const _0x22a1e0=a22_0x58f57f;this[_0x22a1e0(0x1c1)]=_0x39b121,this[_0x22a1e0(0x1da)]=_0x38c42f,this[_0x22a1e0(0x1d4)]=express_1[_0x22a1e0(0x1b5)]({'mergeParams':!![]}),this['nestedPath']='';if(!Reflect['getOwnMetadata'](constants_1[_0x22a1e0(0x1c5)],_0x39b121))throw TypeError(_0x39b121[_0x22a1e0(0x1eb)]+_0x22a1e0(0x1b7));}get[a22_0x58f57f(0x1bd)](){const _0x5610ee=a22_0x58f57f,_0x4fbb17=Object['getPrototypeOf'](this[_0x5610ee(0x1c7)]);return Object['getOwnPropertyNames'](_0x4fbb17)[_0x5610ee(0x1de)](_0xaf0346=>_0x4fbb17[_0xaf0346])['filter'](_0x1ea056=>!!Reflect['getOwnMetadata'](constants_1[_0x5610ee(0x1dd)],_0x1ea056));}get[a22_0x58f57f(0x1d3)](){const _0x293b16=a22_0x58f57f;return Reflect[_0x293b16(0x1ef)](constants_1['META_CONTROLLER_MIDDLEWARES'],this[_0x293b16(0x1c7)])||[];}get['prefix'](){const _0x31fe74=a22_0x58f57f;var _0x4e06e8;const _0x132a65=(_0x4e06e8=Reflect[_0x31fe74(0x1ef)](constants_1['META_CONTROLLER_PREFIX'],this[_0x31fe74(0x1c1)]))!==null&&_0x4e06e8!==void 0x0?_0x4e06e8:constants_1[_0x31fe74(0x1bc)],_0x151df7=Reflect[_0x31fe74(0x1ef)](constants_1[_0x31fe74(0x1bb)],this[_0x31fe74(0x1c1)])||'';return this[_0x31fe74(0x1be)]?'':utils_1[_0x31fe74(0x1cf)](_0x132a65,_0x151df7);}get[a22_0x58f57f(0x1e8)](){const _0x17337b=a22_0x58f57f;if(this[_0x17337b(0x1be)])return this[_0x17337b(0x1be)];const _0x3b76b3=Reflect['getOwnMetadata'](constants_1[_0x17337b(0x1db)],this[_0x17337b(0x1c1)])||'';return utils_1[_0x17337b(0x1cf)](_0x3b76b3);}get['instance'](){const _0x14f496=a22_0x58f57f;return typedi_1[_0x14f496(0x1d2)][_0x14f496(0x1e5)](this[_0x14f496(0x1c1)]);}async[a22_0x58f57f(0x1d8)](){const _0x369c41=a22_0x58f57f;for(const _0x202f78 of this[_0x369c41(0x1d3)]){const _0x1dd497=await middleware_injector_1[_0x369c41(0x1c4)](_0x202f78);this[_0x369c41(0x1d4)][_0x369c41(0x1e4)](_0x1dd497);}}async['injectNestedController'](_0x5444ba){const _0x5940e1=a22_0x58f57f,_0x5bee98=_0x5444ba['nested'];logger['log'](_0x5940e1(0x1ed)+_0x5bee98[_0x5940e1(0x1eb)]+_0x5940e1(0x1ca)+this[_0x5940e1(0x1e8)]+_0x5444ba[_0x5940e1(0x1e8)]);const _0x5f3169=new ControllerInjector(_0x5bee98,this);_0x5f3169[_0x5940e1(0x1be)]=_0x5444ba['path'],await _0x5f3169[_0x5940e1(0x1c0)](this['router']);}async[a22_0x58f57f(0x1ec)](){const _0x298fa6=a22_0x58f57f;var _0x53b5e0;for(const _0x14c3b7 of this[_0x298fa6(0x1bd)]){const _0x2089df=utils_1[_0x298fa6(0x1e0)](_0x14c3b7);if(_0x2089df[_0x298fa6(0x1d1)])await this[_0x298fa6(0x1ea)](_0x2089df);else{const _0x31d5c1=_0x2089df[_0x298fa6(0x1c8)][_0x298fa6(0x1ce)]()[_0x298fa6(0x1c3)]();logger['log'](_0x298fa6(0x1c9)+this[_0x298fa6(0x1c1)]['name']+'#'+_0x14c3b7[_0x298fa6(0x1eb)]+'\x20at\x20['+_0x2089df['method']+']\x20'+utils_1[_0x298fa6(0x1cf)](((_0x53b5e0=this['root'])===null||_0x53b5e0===void 0x0?void 0x0:_0x53b5e0[_0x298fa6(0x1e8)])||'',this[_0x298fa6(0x1e8)],_0x2089df[_0x298fa6(0x1e8)])),this['router'][_0x31d5c1](_0x2089df[_0x298fa6(0x1e8)],handler_wrapper_1['handlerWrapper'](_0x14c3b7,this[_0x298fa6(0x1c7)]));}}}async[a22_0x58f57f(0x1c0)](_0x52f372){const _0x4475c7=a22_0x58f57f;!this[_0x4475c7(0x1be)]&&logger[_0x4475c7(0x1bf)](_0x4475c7(0x1c9)+this[_0x4475c7(0x1c1)]['name']+'\x20{'+this[_0x4475c7(0x1b4)]+'}'),await this[_0x4475c7(0x1d8)](),await this[_0x4475c7(0x1ec)](),_0x52f372[_0x4475c7(0x1e4)](''+this[_0x4475c7(0x1b4)]+this['path'],this[_0x4475c7(0x1d4)]);}}exports['ControllerInjector']=ControllerInjector;