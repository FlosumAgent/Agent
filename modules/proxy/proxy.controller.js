const a84_0x2e35=['get','decorate','design:type','param','request','design:paramtypes','handler','metadata','substring','../shared/utils','constructor','206566mMbRVo','BadRequestError','object','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','length','proxy','Version','228520QAIIKq','context','4xuxqzb','273872GDgyYm','next','Prefix','66314GSERPK','ProxyController','109399YzaGip','return\x20/\x22\x20+\x20this\x20+\x20\x22/','test','556361LjPQym','ERR_NO_DESTINATION','X-Destination','__metadata','__decorate','Controller','function','getOwnPropertyDescriptor','__importDefault','requestEnded','281767gGXfrA','__esModule'];const a84_0x323957=a84_0x3cce;(function(_0xfe0385,_0x27d2ac){const _0xd4629=a84_0x3cce;while(!![]){try{const _0x4963fa=-parseInt(_0xd4629(0x83))+parseInt(_0xd4629(0x97))+-parseInt(_0xd4629(0x9a))+-parseInt(_0xd4629(0x9f))+-parseInt(_0xd4629(0x90))+-parseInt(_0xd4629(0x99))*-parseInt(_0xd4629(0x9d))+parseInt(_0xd4629(0xa2));if(_0x4963fa===_0x27d2ac)break;else _0xfe0385['push'](_0xfe0385['shift']());}catch(_0x5592d2){_0xfe0385['push'](_0xfe0385['shift']());}}}(a84_0x2e35,0x2b965));const a84_0x145ff7=function(){let _0x359da4=!![];return function(_0x5cd192,_0x3ae5eb){const _0x1ccdc2=_0x359da4?function(){if(_0x3ae5eb){const _0x2e6d5a=_0x3ae5eb['apply'](_0x5cd192,arguments);return _0x3ae5eb=null,_0x2e6d5a;}}:function(){};return _0x359da4=![],_0x1ccdc2;};}(),a84_0x3c7f26=a84_0x145ff7(this,function(){const _0x360f38=function(){const _0x2dffde=a84_0x3cce,_0x10456e=_0x360f38['constructor'](_0x2dffde(0xa0))()[_0x2dffde(0x8f)](_0x2dffde(0x93));return!_0x10456e[_0x2dffde(0xa1)](a84_0x3c7f26);};return _0x360f38();});a84_0x3c7f26();function a84_0x3cce(_0x51e297,_0x24d039){return a84_0x3cce=function(_0x3f5977,_0x3c7f26){_0x3f5977=_0x3f5977-0x7d;let _0x145ff7=a84_0x2e35[_0x3f5977];return _0x145ff7;},a84_0x3cce(_0x51e297,_0x24d039);}'use strict';var __decorate=this&&this[a84_0x323957(0x7d)]||function(_0x43a7bd,_0x15e155,_0x5d6de4,_0x531ae2){const _0x13ea11=a84_0x323957;var _0x37e88d=arguments[_0x13ea11(0x94)],_0x4bb9be=_0x37e88d<0x3?_0x15e155:_0x531ae2===null?_0x531ae2=Object[_0x13ea11(0x80)](_0x15e155,_0x5d6de4):_0x531ae2,_0x4a1239;if(typeof Reflect===_0x13ea11(0x92)&&typeof Reflect['decorate']==='function')_0x4bb9be=Reflect[_0x13ea11(0x86)](_0x43a7bd,_0x15e155,_0x5d6de4,_0x531ae2);else{for(var _0x4f4882=_0x43a7bd['length']-0x1;_0x4f4882>=0x0;_0x4f4882--)if(_0x4a1239=_0x43a7bd[_0x4f4882])_0x4bb9be=(_0x37e88d<0x3?_0x4a1239(_0x4bb9be):_0x37e88d>0x3?_0x4a1239(_0x15e155,_0x5d6de4,_0x4bb9be):_0x4a1239(_0x15e155,_0x5d6de4))||_0x4bb9be;}return _0x37e88d>0x3&&_0x4bb9be&&Object['defineProperty'](_0x15e155,_0x5d6de4,_0x4bb9be),_0x4bb9be;},__metadata=this&&this[a84_0x323957(0xa5)]||function(_0x209748,_0x1c090d){const _0xe7d0e=a84_0x323957;if(typeof Reflect===_0xe7d0e(0x92)&&typeof Reflect['metadata']===_0xe7d0e(0x7f))return Reflect[_0xe7d0e(0x8c)](_0x209748,_0x1c090d);},__param=this&&this['__param']||function(_0x208973,_0x2f4391){return function(_0x4c4037,_0x15f666){_0x2f4391(_0x4c4037,_0x15f666,_0x208973);};},__importDefault=this&&this[a84_0x323957(0x81)]||function(_0x298e38){const _0x411fcf=a84_0x323957;return _0x298e38&&_0x298e38[_0x411fcf(0x84)]?_0x298e38:{'default':_0x298e38};};Object['defineProperty'](exports,a84_0x323957(0x84),{'value':!![]}),exports['ProxyController']=void 0x0;const errors_1=require('../../constants/errors'),core_1=require('../../core'),bad_request_error_1=require('../../core/errors/bad-request.error'),utils_1=require(a84_0x323957(0x8e)),express_http_proxy_1=__importDefault(require('express-http-proxy'));let ProxyController=class ProxyController{['handler'](_0x1f970d,_0x514bb,_0x2e63d9){const _0x1ced41=a84_0x323957,{originalUrl:_0x4e52a8,baseUrl:_0x59fecf}=_0x1f970d,_0x2c4efc=_0x1f970d[_0x1ced41(0x85)](_0x1ced41(0xa4));if(!_0x2c4efc)throw new bad_request_error_1[(_0x1ced41(0x91))](errors_1[_0x1ced41(0xa3)]);const _0x1873e3={'proxyReqPathResolver':()=>utils_1['joinURL'](_0x2c4efc,_0x4e52a8[_0x1ced41(0x8d)](_0x4e52a8['indexOf'](_0x59fecf)+_0x59fecf['length']))};_0x1f970d[_0x1ced41(0x98)][_0x1ced41(0x82)]=!![],express_http_proxy_1['default'](_0x2c4efc,_0x1873e3)(_0x1f970d,_0x514bb,_0x2e63d9);}};__decorate([core_1['All']('*'),__param(0x0,core_1[a84_0x323957(0x88)][a84_0x323957(0x89)]()),__param(0x1,core_1[a84_0x323957(0x88)]['response']()),__param(0x2,core_1[a84_0x323957(0x88)][a84_0x323957(0x9b)]()),__metadata(a84_0x323957(0x87),Function),__metadata(a84_0x323957(0x8a),[Object,Object,Function]),__metadata('design:returntype',void 0x0)],ProxyController['prototype'],a84_0x323957(0x8b),null),ProxyController=__decorate([core_1[a84_0x323957(0x7e)](),core_1[a84_0x323957(0x96)]('v1'),core_1[a84_0x323957(0x9c)](a84_0x323957(0x95))],ProxyController),exports[a84_0x323957(0x9e)]=ProxyController;