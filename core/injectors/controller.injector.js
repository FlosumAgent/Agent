const a25_0x4129=['../utils','META_CONTROLLER_PATH','105466wmCiVY','__importDefault','controllerType','defineProperty','name','../wrappers/handler.wrapper','filter','normalizePaths','19293RqcbJX','ControllerInjector','\x20is\x20not\x20a\x20Controller','middlewareInjector','META_HANDLER','prefix','getPrototypeOf','test','toLowerCase','26xWTggf','META_CONTROLLER','instance','./middleware.injector','injectNestedController','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','34POfrsy','toString','root','nestedPath','21737uJSXwp','20GYSTGW','getOwnPropertyNames','439796UMIiWq','controller-injector','use','method','1kxXeYY','getOwnMetadata','injecting\x20','injecting\x20nested\x20','18433SgPXLM','10589GVokfo','nested','log','\x20at\x20','Router','CONTROLLER_DEFAULT_PREFIX','express','inject','constructor','handlers','injectMiddlewares','209810pvFJkW','get','path','return\x20/\x22\x20+\x20this\x20+\x20\x22/','24UdhsrQ','META_CONTROLLER_VERSION','Logger','META_CONTROLLER_PREFIX','META_CONTROLLER_MIDDLEWARES','middlewares','__esModule','router','handlerWrapper','../constants','apply'];function a25_0x10b3(_0x555289,_0x376c00){return a25_0x10b3=function(_0x5950fd,_0x2c71ee){_0x5950fd=_0x5950fd-0x109;let _0x54ddbb=a25_0x4129[_0x5950fd];return _0x54ddbb;},a25_0x10b3(_0x555289,_0x376c00);}const a25_0x1c6a3a=a25_0x10b3;(function(_0x3a8056,_0x3c8617){const _0x405dc6=a25_0x10b3;while(!![]){try{const _0x3a796d=-parseInt(_0x405dc6(0x11b))+-parseInt(_0x405dc6(0x124))*parseInt(_0x405dc6(0x133))+parseInt(_0x405dc6(0x118))*parseInt(_0x405dc6(0x114))+-parseInt(_0x405dc6(0x123))*-parseInt(_0x405dc6(0x10e))+-parseInt(_0x405dc6(0x148))*parseInt(_0x405dc6(0x119))+parseInt(_0x405dc6(0x140))+-parseInt(_0x405dc6(0x11f))*-parseInt(_0x405dc6(0x12f));if(_0x3a796d===_0x3c8617)break;else _0x3a8056['push'](_0x3a8056['shift']());}catch(_0x5976a5){_0x3a8056['push'](_0x3a8056['shift']());}}}(a25_0x4129,0x6eca8));const a25_0x54ddbb=function(){let _0xc2be84=!![];return function(_0x690e38,_0x311dc2){const _0x44f3d6=_0xc2be84?function(){const _0x2e0667=a25_0x10b3;if(_0x311dc2){const _0x1b6ca2=_0x311dc2[_0x2e0667(0x13d)](_0x690e38,arguments);return _0x311dc2=null,_0x1b6ca2;}}:function(){};return _0xc2be84=![],_0x44f3d6;};}(),a25_0x2c71ee=a25_0x54ddbb(this,function(){const _0x416032=function(){const _0x45d215=a25_0x10b3,_0x57e718=_0x416032[_0x45d215(0x12c)](_0x45d215(0x132))()[_0x45d215(0x12c)](_0x45d215(0x113));return!_0x57e718[_0x45d215(0x10c)](a25_0x2c71ee);};return _0x416032();});a25_0x2c71ee();'use strict';var __importDefault=this&&this[a25_0x1c6a3a(0x141)]||function(_0xe2de21){return _0xe2de21&&_0xe2de21['__esModule']?_0xe2de21:{'default':_0xe2de21};};Object[a25_0x1c6a3a(0x143)](exports,a25_0x1c6a3a(0x139),{'value':!![]}),exports[a25_0x1c6a3a(0x149)]=void 0x0;const express_1=require(a25_0x1c6a3a(0x12a)),typedi_1=__importDefault(require('typedi')),logger_class_1=require('../classes/logger.class'),constants_1=require(a25_0x1c6a3a(0x13c)),utils_1=require(a25_0x1c6a3a(0x13e)),handler_wrapper_1=require(a25_0x1c6a3a(0x145)),middleware_injector_1=require(a25_0x1c6a3a(0x111)),logger=new logger_class_1[(a25_0x1c6a3a(0x135))](a25_0x1c6a3a(0x11c));class ControllerInjector{constructor(_0x50afa6,_0x22e552){const _0x5cc510=a25_0x1c6a3a;this[_0x5cc510(0x142)]=_0x50afa6,this[_0x5cc510(0x116)]=_0x22e552,this[_0x5cc510(0x13a)]=express_1[_0x5cc510(0x128)]({'mergeParams':!![]}),this[_0x5cc510(0x117)]='';if(!Reflect[_0x5cc510(0x120)](constants_1[_0x5cc510(0x10f)],_0x50afa6))throw TypeError(_0x50afa6['name']+_0x5cc510(0x14a));}get[a25_0x1c6a3a(0x12d)](){const _0x412857=a25_0x1c6a3a,_0x1b6b32=Object[_0x412857(0x10b)](this['instance']);return Object[_0x412857(0x11a)](_0x1b6b32)['map'](_0x49622c=>_0x1b6b32[_0x49622c])[_0x412857(0x146)](_0x4e58d1=>!!Reflect[_0x412857(0x120)](constants_1[_0x412857(0x109)],_0x4e58d1));}get[a25_0x1c6a3a(0x138)](){const _0x396262=a25_0x1c6a3a;return Reflect[_0x396262(0x120)](constants_1[_0x396262(0x137)],this[_0x396262(0x110)])||[];}get[a25_0x1c6a3a(0x10a)](){const _0x58e389=a25_0x1c6a3a;var _0x4c99f5;const _0x4d0388=(_0x4c99f5=Reflect['getOwnMetadata'](constants_1[_0x58e389(0x136)],this[_0x58e389(0x142)]))!==null&&_0x4c99f5!==void 0x0?_0x4c99f5:constants_1[_0x58e389(0x129)],_0x4662a7=Reflect[_0x58e389(0x120)](constants_1[_0x58e389(0x134)],this[_0x58e389(0x142)])||'';return this['nestedPath']?'':utils_1[_0x58e389(0x147)](_0x4d0388,_0x4662a7);}get[a25_0x1c6a3a(0x131)](){const _0x254f7d=a25_0x1c6a3a;if(this['nestedPath'])return this[_0x254f7d(0x117)];const _0x2c1ee0=Reflect[_0x254f7d(0x120)](constants_1[_0x254f7d(0x13f)],this[_0x254f7d(0x142)])||'';return utils_1[_0x254f7d(0x147)](_0x2c1ee0);}get[a25_0x1c6a3a(0x110)](){const _0x585a28=a25_0x1c6a3a;return typedi_1['default'][_0x585a28(0x130)](this[_0x585a28(0x142)]);}async[a25_0x1c6a3a(0x12e)](){const _0x1d1267=a25_0x1c6a3a;for(const _0x326c9 of this[_0x1d1267(0x138)]){const _0x25d253=await middleware_injector_1[_0x1d1267(0x14b)](_0x326c9);this[_0x1d1267(0x13a)][_0x1d1267(0x11d)](_0x25d253);}}async[a25_0x1c6a3a(0x112)](_0x444de9){const _0x3d31be=a25_0x1c6a3a,_0x2ba7ea=_0x444de9[_0x3d31be(0x125)];logger[_0x3d31be(0x126)](_0x3d31be(0x122)+_0x2ba7ea['name']+_0x3d31be(0x127)+this[_0x3d31be(0x131)]+_0x444de9[_0x3d31be(0x131)]);const _0x5dfb1a=new ControllerInjector(_0x2ba7ea,this);_0x5dfb1a[_0x3d31be(0x117)]=_0x444de9[_0x3d31be(0x131)],await _0x5dfb1a[_0x3d31be(0x12b)](this[_0x3d31be(0x13a)]);}async['injectHandlers'](){const _0x419efa=a25_0x1c6a3a;var _0x5e24f4;for(const _0x33edb1 of this[_0x419efa(0x12d)]){const _0x1f9584=utils_1['getHandlerMeta'](_0x33edb1);if(_0x1f9584[_0x419efa(0x125)])await this[_0x419efa(0x112)](_0x1f9584);else{const _0xab7c1e=_0x1f9584[_0x419efa(0x11e)][_0x419efa(0x115)]()[_0x419efa(0x10d)]();logger['log'](_0x419efa(0x121)+this[_0x419efa(0x142)][_0x419efa(0x144)]+'#'+_0x33edb1[_0x419efa(0x144)]+'\x20at\x20['+_0x1f9584[_0x419efa(0x11e)]+']\x20'+utils_1[_0x419efa(0x147)](((_0x5e24f4=this[_0x419efa(0x116)])===null||_0x5e24f4===void 0x0?void 0x0:_0x5e24f4[_0x419efa(0x131)])||'',this[_0x419efa(0x131)],_0x1f9584['path'])),this['router'][_0xab7c1e](_0x1f9584['path'],handler_wrapper_1[_0x419efa(0x13b)](_0x33edb1,this['instance']));}}}async[a25_0x1c6a3a(0x12b)](_0x3588ab){const _0x1f191f=a25_0x1c6a3a;!this[_0x1f191f(0x117)]&&logger['log']('injecting\x20'+this[_0x1f191f(0x142)][_0x1f191f(0x144)]+'\x20{'+this[_0x1f191f(0x10a)]+'}'),await this[_0x1f191f(0x12e)](),await this['injectHandlers'](),_0x3588ab['use'](''+this[_0x1f191f(0x10a)]+this['path'],this[_0x1f191f(0x13a)]);}}exports[a25_0x1c6a3a(0x149)]=ControllerInjector;