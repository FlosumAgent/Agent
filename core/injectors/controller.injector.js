const a22_0x2fd5=['../utils','\x20is\x20not\x20a\x20Controller','injectMiddlewares','1jysvXd','32053LuSYbv','name','log','177617TGZbNv','method','nestedPath','Router','injectHandlers','166282MHIiTr','getOwnMetadata','nested','__esModule','middlewares','injecting\x20nested\x20','Logger','CONTROLLER_DEFAULT_PREFIX','META_CONTROLLER_PATH','../wrappers/handler.wrapper','toLowerCase','injecting\x20','router','4177PaeCgt','use','inject','53678kaTRTd','192753gaqAMf','META_CONTROLLER_VERSION','root','17VSfFTD','handlerWrapper','normalizePaths','META_CONTROLLER_PREFIX','test','\x20at\x20[','instance','apply','controller-injector','45102MUDHud','typedi','META_CONTROLLER_MIDDLEWARES','prefix','getOwnPropertyNames','path','ControllerInjector','filter','injectNestedController','controllerType','get','defineProperty','5VEhNPZ','getHandlerMeta','middlewareInjector','express','constructor','map'];const a22_0x1d9830=a22_0x109a;(function(_0x26b9a5,_0x5e0b08){const _0x3e2a9e=a22_0x109a;while(!![]){try{const _0x15a2a0=-parseInt(_0x3e2a9e(0x101))+-parseInt(_0x3e2a9e(0x126))+-parseInt(_0x3e2a9e(0x10d))*-parseInt(_0x3e2a9e(0x119))+-parseInt(_0x3e2a9e(0x122))*-parseInt(_0x3e2a9e(0x100))+parseInt(_0x3e2a9e(0x104))*parseInt(_0x3e2a9e(0xfd))+-parseInt(_0x3e2a9e(0x123))+parseInt(_0x3e2a9e(0x12b));if(_0x15a2a0===_0x5e0b08)break;else _0x26b9a5['push'](_0x26b9a5['shift']());}catch(_0x4820d3){_0x26b9a5['push'](_0x26b9a5['shift']());}}}(a22_0x2fd5,0x1bd88));function a22_0x109a(_0x47c8ad,_0x422904){return a22_0x109a=function(_0x242929,_0x4fb492){_0x242929=_0x242929-0xf6;let _0x26e82a=a22_0x2fd5[_0x242929];return _0x26e82a;},a22_0x109a(_0x47c8ad,_0x422904);}const a22_0x26e82a=function(){let _0x25898b=!![];return function(_0x22be8c,_0x549e88){const _0x184069=_0x25898b?function(){const _0x267942=a22_0x109a;if(_0x549e88){const _0x4d6730=_0x549e88[_0x267942(0x10b)](_0x22be8c,arguments);return _0x549e88=null,_0x4d6730;}}:function(){};return _0x25898b=![],_0x184069;};}(),a22_0x4fb492=a22_0x26e82a(this,function(){const _0x40f91e=function(){const _0x87c53a=a22_0x109a,_0x304743=_0x40f91e[_0x87c53a(0x11d)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x87c53a(0x11d)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x304743[_0x87c53a(0x108)](a22_0x4fb492);};return _0x40f91e();});a22_0x4fb492();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x3faaa0){return _0x3faaa0&&_0x3faaa0['__esModule']?_0x3faaa0:{'default':_0x3faaa0};};Object[a22_0x1d9830(0x118)](exports,a22_0x1d9830(0x12e),{'value':!![]}),exports[a22_0x1d9830(0x113)]=void 0x0;const express_1=require(a22_0x1d9830(0x11c)),typedi_1=__importDefault(require(a22_0x1d9830(0x10e))),logger_class_1=require('../classes/logger.class'),constants_1=require('../constants'),utils_1=require(a22_0x1d9830(0x11f)),handler_wrapper_1=require(a22_0x1d9830(0xf9)),middleware_injector_1=require('./middleware.injector'),logger=new logger_class_1[(a22_0x1d9830(0xf6))](a22_0x1d9830(0x10c));class ControllerInjector{constructor(_0x145116,_0x1ae014){const _0x3524fb=a22_0x1d9830;this[_0x3524fb(0x116)]=_0x145116,this[_0x3524fb(0x103)]=_0x1ae014,this['router']=express_1[_0x3524fb(0x129)]({'mergeParams':!![]}),this['nestedPath']='';if(!Reflect[_0x3524fb(0x12c)](constants_1['META_CONTROLLER'],_0x145116))throw TypeError(_0x145116[_0x3524fb(0x124)]+_0x3524fb(0x120));}get['handlers'](){const _0xa6f577=a22_0x1d9830,_0x2bda9c=Object['getPrototypeOf'](this[_0xa6f577(0x10a)]);return Object[_0xa6f577(0x111)](_0x2bda9c)[_0xa6f577(0x11e)](_0x4a8daf=>_0x2bda9c[_0x4a8daf])[_0xa6f577(0x114)](_0x555a09=>!!Reflect['getOwnMetadata'](constants_1['META_HANDLER'],_0x555a09));}get['middlewares'](){const _0x2278dc=a22_0x1d9830;return Reflect[_0x2278dc(0x12c)](constants_1[_0x2278dc(0x10f)],this[_0x2278dc(0x10a)])||[];}get['prefix'](){const _0x33489c=a22_0x1d9830;var _0x3a29f6;const _0x5115df=(_0x3a29f6=Reflect[_0x33489c(0x12c)](constants_1[_0x33489c(0x107)],this['controllerType']))!==null&&_0x3a29f6!==void 0x0?_0x3a29f6:constants_1[_0x33489c(0xf7)],_0x567adc=Reflect[_0x33489c(0x12c)](constants_1[_0x33489c(0x102)],this[_0x33489c(0x116)])||'';return this[_0x33489c(0x128)]?'':utils_1[_0x33489c(0x106)](_0x5115df,_0x567adc);}get['path'](){const _0x454854=a22_0x1d9830;if(this['nestedPath'])return this['nestedPath'];const _0x28c0d4=Reflect[_0x454854(0x12c)](constants_1[_0x454854(0xf8)],this[_0x454854(0x116)])||'';return utils_1['normalizePaths'](_0x28c0d4);}get[a22_0x1d9830(0x10a)](){const _0x28ece8=a22_0x1d9830;return typedi_1['default'][_0x28ece8(0x117)](this[_0x28ece8(0x116)]);}async[a22_0x1d9830(0x121)](){const _0x329629=a22_0x1d9830;for(const _0x18d595 of this[_0x329629(0x12f)]){const _0x38f5a8=await middleware_injector_1[_0x329629(0x11b)](_0x18d595);this[_0x329629(0xfc)][_0x329629(0xfe)](_0x38f5a8);}}async[a22_0x1d9830(0x115)](_0x29e34d){const _0xd8b146=a22_0x1d9830,_0x3c1a34=_0x29e34d[_0xd8b146(0x12d)];logger[_0xd8b146(0x125)](_0xd8b146(0x130)+_0x3c1a34['name']+'\x20at\x20'+this[_0xd8b146(0x112)]+_0x29e34d['path']);const _0x1c7a46=new ControllerInjector(_0x3c1a34,this);_0x1c7a46[_0xd8b146(0x128)]=_0x29e34d[_0xd8b146(0x112)],await _0x1c7a46['inject'](this[_0xd8b146(0xfc)]);}async['injectHandlers'](){const _0xdddc1e=a22_0x1d9830;var _0x5cb360;for(const _0xf825a3 of this['handlers']){const _0xb9a5a1=utils_1[_0xdddc1e(0x11a)](_0xf825a3);if(_0xb9a5a1[_0xdddc1e(0x12d)])await this['injectNestedController'](_0xb9a5a1);else{const _0x3be84b=_0xb9a5a1[_0xdddc1e(0x127)]['toString']()[_0xdddc1e(0xfa)]();logger[_0xdddc1e(0x125)](_0xdddc1e(0xfb)+this[_0xdddc1e(0x116)]['name']+'#'+_0xf825a3[_0xdddc1e(0x124)]+_0xdddc1e(0x109)+_0xb9a5a1['method']+']\x20'+utils_1[_0xdddc1e(0x106)](((_0x5cb360=this[_0xdddc1e(0x103)])===null||_0x5cb360===void 0x0?void 0x0:_0x5cb360[_0xdddc1e(0x112)])||'',this[_0xdddc1e(0x112)],_0xb9a5a1[_0xdddc1e(0x112)])),this['router'][_0x3be84b](_0xb9a5a1[_0xdddc1e(0x112)],handler_wrapper_1[_0xdddc1e(0x105)](_0xf825a3,this[_0xdddc1e(0x10a)]));}}}async[a22_0x1d9830(0xff)](_0x2967ee){const _0x89b1f2=a22_0x1d9830;!this[_0x89b1f2(0x128)]&&logger[_0x89b1f2(0x125)](_0x89b1f2(0xfb)+this['controllerType'][_0x89b1f2(0x124)]+'\x20{'+this[_0x89b1f2(0x110)]+'}'),await this[_0x89b1f2(0x121)](),await this[_0x89b1f2(0x12a)](),_0x2967ee[_0x89b1f2(0xfe)](''+this[_0x89b1f2(0x110)]+this[_0x89b1f2(0x112)],this['router']);}}exports['ControllerInjector']=ControllerInjector;