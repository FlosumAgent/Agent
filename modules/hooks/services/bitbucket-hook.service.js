const a70_0x5072=['post','default','request','__importDefault','map','put','1018802OlnxfW','hooks','__esModule','hooks/','HookDto','3fsuqMM','BitbucketHookService','649877fnjzoF','test','createRequest','defineProperty','constructor','149217fAaeXN','apiUrl','../../git-api/services/bitbucket-api.service','669279TcWojK','./git-hook.service','1tYQhvX','873144YnOOrR','getOne','return\x20/\x22\x20+\x20this\x20+\x20\x22/','get','NotFoundError','../../../core/errors/bad-request.error','330483JPAKtK','565507cNTRnB','delete','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','apply','BitbucketApiService','../dto/hook.dto','GitHookService','getAll','fromBitbucket'];const a70_0x462680=a70_0x28e9;(function(_0x357ee3,_0x5a2509){const _0x494c71=a70_0x28e9;while(!![]){try{const _0x191cdf=parseInt(_0x494c71(0x8c))*-parseInt(_0x494c71(0x82))+parseInt(_0x494c71(0x87))+-parseInt(_0x494c71(0x94))+parseInt(_0x494c71(0x93))*-parseInt(_0x494c71(0x80))+parseInt(_0x494c71(0x8a))+parseInt(_0x494c71(0x8d))+parseInt(_0x494c71(0x7b));if(_0x191cdf===_0x5a2509)break;else _0x357ee3['push'](_0x357ee3['shift']());}catch(_0x3cd145){_0x357ee3['push'](_0x357ee3['shift']());}}}(a70_0x5072,0x7af39));const a70_0x47c684=function(){let _0x599bb8=!![];return function(_0x52f5d1,_0x520418){const _0x7f5e70=_0x599bb8?function(){const _0x543e3c=a70_0x28e9;if(_0x520418){const _0x5be849=_0x520418[_0x543e3c(0x6f)](_0x52f5d1,arguments);return _0x520418=null,_0x5be849;}}:function(){};return _0x599bb8=![],_0x7f5e70;};}(),a70_0x2ffe14=a70_0x47c684(this,function(){const _0x5d180c=function(){const _0x530653=a70_0x28e9,_0x3e726a=_0x5d180c[_0x530653(0x86)](_0x530653(0x8f))()[_0x530653(0x86)](_0x530653(0x6e));return!_0x3e726a[_0x530653(0x83)](a70_0x2ffe14);};return _0x5d180c();});a70_0x2ffe14();'use strict';function a70_0x28e9(_0x118ddd,_0x3e320b){return a70_0x28e9=function(_0x29805a,_0x2ffe14){_0x29805a=_0x29805a-0x6e;let _0x47c684=a70_0x5072[_0x29805a];return _0x47c684;},a70_0x28e9(_0x118ddd,_0x3e320b);}var __importDefault=this&&this[a70_0x462680(0x78)]||function(_0x32583d){const _0x434cdc=a70_0x462680;return _0x32583d&&_0x32583d[_0x434cdc(0x7d)]?_0x32583d:{'default':_0x32583d};};Object[a70_0x462680(0x85)](exports,'__esModule',{'value':!![]}),exports[a70_0x462680(0x81)]=void 0x0;const bad_request_error_1=require(a70_0x462680(0x92)),not_found_error_1=require('../../../core/errors/not-found.error'),bitbucket_api_service_1=require(a70_0x462680(0x89)),typedi_1=__importDefault(require('typedi')),hook_dto_1=require(a70_0x462680(0x71)),git_hook_service_1=require(a70_0x462680(0x8b));class BitbucketHookService extends git_hook_service_1[a70_0x462680(0x72)]{constructor(_0x1869c0){const _0x46b64e=a70_0x462680;super(_0x1869c0),this['request']=this[_0x46b64e(0x84)]();}[a70_0x462680(0x84)](){const _0x2d2d5f=a70_0x462680,_0x45386e=typedi_1[_0x2d2d5f(0x76)][_0x2d2d5f(0x90)](bitbucket_api_service_1[_0x2d2d5f(0x70)]);return _0x45386e[_0x2d2d5f(0x84)](this['repository'][_0x2d2d5f(0x88)]);}async['create'](_0x144dcb){const _0x107a0d=a70_0x462680;try{const _0x4f3b3c=await this['request'][_0x107a0d(0x75)]('hooks',_0x144dcb);return hook_dto_1['HookDto'][_0x107a0d(0x74)](_0x4f3b3c);}catch(_0x5c3983){throw new bad_request_error_1['BadRequestError'](_0x5c3983);}}async[a70_0x462680(0x8e)](_0x199362){const _0x35e1bb=a70_0x462680;try{const _0xbe3c85=await this[_0x35e1bb(0x77)][_0x35e1bb(0x90)](_0x35e1bb(0x7e)+_0x199362);return hook_dto_1['HookDto']['fromBitbucket'](_0xbe3c85);}catch(_0x3907e0){throw new not_found_error_1[(_0x35e1bb(0x91))](_0x3907e0);}}async[a70_0x462680(0x73)](){const _0x4b7d02=a70_0x462680;try{const _0x14c90e=await this[_0x4b7d02(0x77)][_0x4b7d02(0x90)](_0x4b7d02(0x7c));return _0x14c90e['values'][_0x4b7d02(0x79)](_0x1a18c3=>hook_dto_1[_0x4b7d02(0x7f)]['fromBitbucket'](_0x1a18c3));}catch(_0x410160){throw new not_found_error_1[(_0x4b7d02(0x91))](_0x410160);}}async['update'](_0x25efbe,_0x25be10){const _0x4eb3ad=a70_0x462680;try{const _0x33e96f=await this[_0x4eb3ad(0x77)][_0x4eb3ad(0x7a)](_0x4eb3ad(0x7e)+_0x25efbe,_0x25be10);return hook_dto_1['HookDto']['fromBitbucket'](_0x33e96f);}catch(_0x2107da){throw new not_found_error_1['NotFoundError'](_0x2107da);}}async[a70_0x462680(0x95)](_0x577709){const _0x210878=a70_0x462680;try{await this[_0x210878(0x77)]['delete'](_0x210878(0x7e)+_0x577709);}catch(_0x294b2c){throw new not_found_error_1[(_0x210878(0x91))](_0x294b2c);}}}exports['BitbucketHookService']=BitbucketHookService;