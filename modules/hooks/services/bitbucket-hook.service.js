const a70_0x58f9=['values','createRequest','37eENjxf','NotFoundError','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','create','382908PmuADZ','getAll','GitHookService','../../../core/errors/not-found.error','typedi','get','constructor','update','139ciVfXj','3gdeEMq','fromBitbucket','4AivWIj','BadRequestError','delete','getOne','../../git-api/services/bitbucket-api.service','920292tOHjIZ','hooks/','./git-hook.service','__esModule','307683cWwtCl','4LMdXmk','1ZBJPNC','return\x20/\x22\x20+\x20this\x20+\x20\x22/','132706WTrWKp','request','../../../core/errors/bad-request.error','__importDefault','post','HookDto','repository','BitbucketApiService','160115LmLREa','11273TWLqGy','map','3855ypggvT','apiUrl','BitbucketHookService'];const a70_0x107f15=a70_0x4df6;(function(_0x5005dc,_0x582912){const _0xa00f18=a70_0x4df6;while(!![]){try{const _0x1469aa=parseInt(_0xa00f18(0xef))*parseInt(_0xa00f18(0xf8))+parseInt(_0xa00f18(0xfa))*-parseInt(_0xa00f18(0xdb))+-parseInt(_0xa00f18(0xf7))*parseInt(_0xa00f18(0xe6))+parseInt(_0xa00f18(0xe3))*parseInt(_0xa00f18(0xd8))+-parseInt(_0xa00f18(0xeb))*parseInt(_0xa00f18(0xe4))+parseInt(_0xa00f18(0xff))+-parseInt(_0xa00f18(0xd7))*parseInt(_0xa00f18(0xd9));if(_0x1469aa===_0x582912)break;else _0x5005dc['push'](_0x5005dc['shift']());}catch(_0x5c47c9){_0x5005dc['push'](_0x5005dc['shift']());}}}(a70_0x58f9,0xe0207));function a70_0x4df6(_0x2f1145,_0x2c1faa){return a70_0x4df6=function(_0x399528,_0xa27361){_0x399528=_0x399528-0xd6;let _0x368d66=a70_0x58f9[_0x399528];return _0x368d66;},a70_0x4df6(_0x2f1145,_0x2c1faa);}const a70_0x368d66=function(){let _0x482c6b=!![];return function(_0x3a969a,_0x55e524){const _0x13548e=_0x482c6b?function(){if(_0x55e524){const _0x3c85e0=_0x55e524['apply'](_0x3a969a,arguments);return _0x55e524=null,_0x3c85e0;}}:function(){};return _0x482c6b=![],_0x13548e;};}(),a70_0xa27361=a70_0x368d66(this,function(){const _0x4357aa=function(){const _0x4f33b3=a70_0x4df6,_0x461264=_0x4357aa[_0x4f33b3(0xf5)](_0x4f33b3(0xda))()['constructor'](_0x4f33b3(0xed));return!_0x461264['test'](a70_0xa27361);};return _0x4357aa();});a70_0xa27361();'use strict';var __importDefault=this&&this[a70_0x107f15(0xde)]||function(_0x300adf){const _0x1be813=a70_0x107f15;return _0x300adf&&_0x300adf[_0x1be813(0xd6)]?_0x300adf:{'default':_0x300adf};};Object['defineProperty'](exports,a70_0x107f15(0xd6),{'value':!![]}),exports[a70_0x107f15(0xe8)]=void 0x0;const bad_request_error_1=require(a70_0x107f15(0xdd)),not_found_error_1=require(a70_0x107f15(0xf2)),bitbucket_api_service_1=require(a70_0x107f15(0xfe)),typedi_1=__importDefault(require(a70_0x107f15(0xf3))),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require(a70_0x107f15(0x101));class BitbucketHookService extends git_hook_service_1[a70_0x107f15(0xf1)]{constructor(_0x3c7ac4){const _0x39aeb7=a70_0x107f15;super(_0x3c7ac4),this[_0x39aeb7(0xdc)]=this[_0x39aeb7(0xea)]();}['createRequest'](){const _0x284f24=a70_0x107f15,_0xd26bff=typedi_1['default']['get'](bitbucket_api_service_1[_0x284f24(0xe2)]);return _0xd26bff[_0x284f24(0xea)](this[_0x284f24(0xe1)][_0x284f24(0xe7)]);}async[a70_0x107f15(0xee)](_0x5cbcb9){const _0x1316cd=a70_0x107f15;try{const _0x9a22d4=await this[_0x1316cd(0xdc)][_0x1316cd(0xdf)]('hooks',_0x5cbcb9);return hook_dto_1[_0x1316cd(0xe0)][_0x1316cd(0xf9)](_0x9a22d4);}catch(_0x4a32e2){throw new bad_request_error_1[(_0x1316cd(0xfb))](_0x4a32e2);}}async[a70_0x107f15(0xfd)](_0x3def23){const _0x5f0c5a=a70_0x107f15;try{const _0x232c0f=await this['request'][_0x5f0c5a(0xf4)](_0x5f0c5a(0x100)+_0x3def23);return hook_dto_1[_0x5f0c5a(0xe0)][_0x5f0c5a(0xf9)](_0x232c0f);}catch(_0x23cf85){throw new not_found_error_1['NotFoundError'](_0x23cf85);}}async[a70_0x107f15(0xf0)](){const _0x3a487d=a70_0x107f15;try{const _0x33b740=await this['request'][_0x3a487d(0xf4)]('hooks');return _0x33b740[_0x3a487d(0xe9)][_0x3a487d(0xe5)](_0x851b85=>hook_dto_1['HookDto'][_0x3a487d(0xf9)](_0x851b85));}catch(_0x1a795d){throw new not_found_error_1[(_0x3a487d(0xec))](_0x1a795d);}}async[a70_0x107f15(0xf6)](_0x4310be,_0x3dbaa3){const _0x2ddce7=a70_0x107f15;try{const _0x363fe5=await this[_0x2ddce7(0xdc)]['put'](_0x2ddce7(0x100)+_0x4310be,_0x3dbaa3);return hook_dto_1[_0x2ddce7(0xe0)][_0x2ddce7(0xf9)](_0x363fe5);}catch(_0x169de4){throw new not_found_error_1['NotFoundError'](_0x169de4);}}async[a70_0x107f15(0xfc)](_0x63f773){const _0x52c5e9=a70_0x107f15;try{await this[_0x52c5e9(0xdc)][_0x52c5e9(0xfc)](_0x52c5e9(0x100)+_0x63f773);}catch(_0x328f0c){throw new not_found_error_1['NotFoundError'](_0x328f0c);}}}exports[a70_0x107f15(0xe8)]=BitbucketHookService;