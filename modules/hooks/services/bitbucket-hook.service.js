const a70_0x407b=['apiUrl','BitbucketApiService','../../../core/errors/bad-request.error','444176kZvlOW','constructor','17mIFLgG','123YMjKCS','../../../core/errors/not-found.error','GitHookService','delete','BadRequestError','update','HookDto','hooks/','hooks','39583nXcNqe','__importDefault','321605DbfZRF','request','./git-hook.service','8157IKmVsM','__esModule','map','NotFoundError','post','typedi','repository','get','BitbucketHookService','test','889103mbxHKq','create','defineProperty','../dto/hook.dto','20036dJXjXb','getOne','createRequest','109WRVUDI','138141ThKvEw'];const a70_0x132ee6=a70_0x3cdc;(function(_0x6efce9,_0x40f6f3){const _0xb1876=a70_0x3cdc;while(!![]){try{const _0x4a0b00=-parseInt(_0xb1876(0x1eb))+-parseInt(_0xb1876(0x1fd))+parseInt(_0xb1876(0x200))*-parseInt(_0xb1876(0x1ea))+-parseInt(_0xb1876(0x1e3))+-parseInt(_0xb1876(0x1ef))+parseInt(_0xb1876(0x1f1))*parseInt(_0xb1876(0x1fb))+parseInt(_0xb1876(0x1f2))*parseInt(_0xb1876(0x1e7));if(_0x4a0b00===_0x40f6f3)break;else _0x6efce9['push'](_0x6efce9['shift']());}catch(_0x4beadf){_0x6efce9['push'](_0x6efce9['shift']());}}}(a70_0x407b,0x6f221));const a70_0x13629e=function(){let _0x312ef4=!![];return function(_0x5d4495,_0x11389e){const _0x409850=_0x312ef4?function(){if(_0x11389e){const _0x2b76a6=_0x11389e['apply'](_0x5d4495,arguments);return _0x11389e=null,_0x2b76a6;}}:function(){};return _0x312ef4=![],_0x409850;};}(),a70_0x51b6d8=a70_0x13629e(this,function(){const _0xc7fd5=function(){const _0xfd40fd=a70_0x3cdc,_0x297265=_0xc7fd5[_0xfd40fd(0x1f0)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x297265[_0xfd40fd(0x1e2)](a70_0x51b6d8);};return _0xc7fd5();});a70_0x51b6d8();'use strict';function a70_0x3cdc(_0x4a0ede,_0x5770f0){return a70_0x3cdc=function(_0x364022,_0x51b6d8){_0x364022=_0x364022-0x1e0;let _0x13629e=a70_0x407b[_0x364022];return _0x13629e;},a70_0x3cdc(_0x4a0ede,_0x5770f0);}var __importDefault=this&&this[a70_0x132ee6(0x1fc)]||function(_0x2a9e07){const _0x3a4069=a70_0x132ee6;return _0x2a9e07&&_0x2a9e07[_0x3a4069(0x201)]?_0x2a9e07:{'default':_0x2a9e07};};Object[a70_0x132ee6(0x1e5)](exports,a70_0x132ee6(0x201),{'value':!![]}),exports[a70_0x132ee6(0x1e1)]=void 0x0;const bad_request_error_1=require(a70_0x132ee6(0x1ee)),not_found_error_1=require(a70_0x132ee6(0x1f3)),bitbucket_api_service_1=require('../../git-api/services/bitbucket-api.service'),typedi_1=__importDefault(require(a70_0x132ee6(0x205))),hook_dto_1=require(a70_0x132ee6(0x1e6)),git_hook_service_1=require(a70_0x132ee6(0x1ff));class BitbucketHookService extends git_hook_service_1[a70_0x132ee6(0x1f4)]{constructor(_0x37c68c){const _0x2042bd=a70_0x132ee6;super(_0x37c68c),this[_0x2042bd(0x1fe)]=this[_0x2042bd(0x1e9)]();}[a70_0x132ee6(0x1e9)](){const _0x5e300a=a70_0x132ee6,_0x3d18ad=typedi_1['default'][_0x5e300a(0x1e0)](bitbucket_api_service_1[_0x5e300a(0x1ed)]);return _0x3d18ad[_0x5e300a(0x1e9)](this[_0x5e300a(0x206)][_0x5e300a(0x1ec)]);}async[a70_0x132ee6(0x1e4)](_0x380c07){const _0x5e9a3f=a70_0x132ee6;try{const _0x9b6493=await this[_0x5e9a3f(0x1fe)][_0x5e9a3f(0x204)](_0x5e9a3f(0x1fa),_0x380c07);return hook_dto_1[_0x5e9a3f(0x1f8)]['fromBitbucket'](_0x9b6493);}catch(_0xc22903){throw new bad_request_error_1[(_0x5e9a3f(0x1f6))](_0xc22903);}}async[a70_0x132ee6(0x1e8)](_0x14716b){const _0x54019c=a70_0x132ee6;try{const _0x389ff3=await this[_0x54019c(0x1fe)][_0x54019c(0x1e0)]('hooks/'+_0x14716b);return hook_dto_1[_0x54019c(0x1f8)]['fromBitbucket'](_0x389ff3);}catch(_0xf4080b){throw new not_found_error_1[(_0x54019c(0x203))](_0xf4080b);}}async['getAll'](){const _0x19f406=a70_0x132ee6;try{const _0x367b3c=await this[_0x19f406(0x1fe)]['get'](_0x19f406(0x1fa));return _0x367b3c['values'][_0x19f406(0x202)](_0x416a79=>hook_dto_1[_0x19f406(0x1f8)]['fromBitbucket'](_0x416a79));}catch(_0x5f0404){throw new not_found_error_1[(_0x19f406(0x203))](_0x5f0404);}}async[a70_0x132ee6(0x1f7)](_0x5991c5,_0x525874){const _0x1fca91=a70_0x132ee6;try{const _0x120f17=await this[_0x1fca91(0x1fe)]['put'](_0x1fca91(0x1f9)+_0x5991c5,_0x525874);return hook_dto_1['HookDto']['fromBitbucket'](_0x120f17);}catch(_0x4aade3){throw new not_found_error_1[(_0x1fca91(0x203))](_0x4aade3);}}async[a70_0x132ee6(0x1f5)](_0x5e8684){const _0x400e37=a70_0x132ee6;try{await this['request'][_0x400e37(0x1f5)](_0x400e37(0x1f9)+_0x5e8684);}catch(_0x26514f){throw new not_found_error_1[(_0x400e37(0x203))](_0x26514f);}}}exports[a70_0x132ee6(0x1e1)]=BitbucketHookService;