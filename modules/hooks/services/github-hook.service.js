const a72_0x162d=['4qfPXeO','test','GithubHookService','372455fstigO','hooks','389mBblKb','370320umBAwS','repository','apply','1049NxfPzq','apiUrl','../../git-api/services/github-api.service','post','createRequest','HookDto','default','map','127599kPWarn','GitHookService','365EnhKDP','GithubApiService','../../../core/errors/bad-request.error','typedi','defineProperty','constructor','fromGithub','../dto/hook.dto','getOne','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','1EgnXDm','create','request','BadRequestError','NotFoundError','68683maosZo','hooks/','getAll','__importDefault','1534MURebZ','502394mPtoVs','./git-hook.service','get'];const a72_0x5a0185=a72_0x116d;(function(_0x32edcc,_0x265b92){const _0x5beb49=a72_0x116d;while(!![]){try{const _0x520540=-parseInt(_0x5beb49(0x83))*parseInt(_0x5beb49(0x7b))+parseInt(_0x5beb49(0x86))+parseInt(_0x5beb49(0x6c))*parseInt(_0x5beb49(0x7f))+-parseInt(_0x5beb49(0x89))+-parseInt(_0x5beb49(0x80))+-parseInt(_0x5beb49(0x8c))*-parseInt(_0x5beb49(0x88))+parseInt(_0x5beb49(0x6a))*parseInt(_0x5beb49(0x76));if(_0x520540===_0x265b92)break;else _0x32edcc['push'](_0x32edcc['shift']());}catch(_0x222010){_0x32edcc['push'](_0x32edcc['shift']());}}}(a72_0x162d,0x4e443));function a72_0x116d(_0x291d48,_0x12089b){return a72_0x116d=function(_0x1da7d7,_0xf79406){_0x1da7d7=_0x1da7d7-0x6a;let _0x2f7296=a72_0x162d[_0x1da7d7];return _0x2f7296;},a72_0x116d(_0x291d48,_0x12089b);}const a72_0x2f7296=function(){let _0x305243=!![];return function(_0x52f507,_0x2217a9){const _0x1ffccc=_0x305243?function(){const _0x2d9b99=a72_0x116d;if(_0x2217a9){const _0x484660=_0x2217a9[_0x2d9b99(0x8b)](_0x52f507,arguments);return _0x2217a9=null,_0x484660;}}:function(){};return _0x305243=![],_0x1ffccc;};}(),a72_0xf79406=a72_0x2f7296(this,function(){const _0x48b840=function(){const _0x43d1cd=a72_0x116d,_0x2f0ad3=_0x48b840[_0x43d1cd(0x71)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x43d1cd(0x71)](_0x43d1cd(0x75));return!_0x2f0ad3[_0x43d1cd(0x84)](a72_0xf79406);};return _0x48b840();});a72_0xf79406();'use strict';var __importDefault=this&&this[a72_0x5a0185(0x7e)]||function(_0x22501d){return _0x22501d&&_0x22501d['__esModule']?_0x22501d:{'default':_0x22501d};};Object[a72_0x5a0185(0x70)](exports,'__esModule',{'value':!![]}),exports[a72_0x5a0185(0x85)]=void 0x0;const bad_request_error_1=require(a72_0x5a0185(0x6e)),not_found_error_1=require('../../../core/errors/not-found.error'),github_api_service_1=require(a72_0x5a0185(0x8e)),typedi_1=__importDefault(require(a72_0x5a0185(0x6f))),hook_dto_1=require(a72_0x5a0185(0x73)),git_hook_service_1=require(a72_0x5a0185(0x81));class GithubHookService extends git_hook_service_1[a72_0x5a0185(0x6b)]{constructor(_0x2df04b){super(_0x2df04b),this['request']=this['createRequest']();}[a72_0x5a0185(0x90)](){const _0x4d4832=a72_0x5a0185,_0x2c3444=typedi_1[_0x4d4832(0x92)][_0x4d4832(0x82)](github_api_service_1[_0x4d4832(0x6d)]);return _0x2c3444[_0x4d4832(0x90)](this[_0x4d4832(0x8a)][_0x4d4832(0x8d)]);}async[a72_0x5a0185(0x77)](_0x56d7bd){const _0x4be9c3=a72_0x5a0185;try{const _0x121d5c=await this[_0x4be9c3(0x78)][_0x4be9c3(0x8f)](_0x4be9c3(0x87),_0x56d7bd);return hook_dto_1[_0x4be9c3(0x91)][_0x4be9c3(0x72)](_0x121d5c);}catch(_0x2803bb){throw new bad_request_error_1[(_0x4be9c3(0x79))](_0x2803bb);}}async[a72_0x5a0185(0x74)](_0x3f92dd){const _0x4f30ed=a72_0x5a0185;try{const _0x6b0f04=await this[_0x4f30ed(0x78)][_0x4f30ed(0x82)](_0x4f30ed(0x7c)+_0x3f92dd);return hook_dto_1[_0x4f30ed(0x91)]['fromGithub'](_0x6b0f04);}catch(_0x180ffb){throw new not_found_error_1[(_0x4f30ed(0x7a))](_0x180ffb);}}async[a72_0x5a0185(0x7d)](){const _0x317343=a72_0x5a0185;try{const _0x9abf70=await this[_0x317343(0x78)]['get'](_0x317343(0x87));return _0x9abf70[_0x317343(0x93)](_0x26c48f=>hook_dto_1[_0x317343(0x91)][_0x317343(0x72)](_0x26c48f));}catch(_0x4374e1){throw new not_found_error_1[(_0x317343(0x7a))](_0x4374e1);}}async['update'](_0x51bfcc,_0xb28551){const _0x14762d=a72_0x5a0185;try{const _0xb3f8c8=await this[_0x14762d(0x78)]['patch'](_0x14762d(0x7c)+_0x51bfcc,_0xb28551);return hook_dto_1[_0x14762d(0x91)][_0x14762d(0x72)](_0xb3f8c8);}catch(_0x1122eb){throw new bad_request_error_1[(_0x14762d(0x79))](_0x1122eb);}}async['delete'](_0x332f3c){const _0x4e8693=a72_0x5a0185;try{await this[_0x4e8693(0x78)]['delete'](_0x4e8693(0x7c)+_0x332f3c);}catch(_0x11d348){throw new bad_request_error_1[(_0x4e8693(0x79))](_0x11d348);}}}exports[a72_0x5a0185(0x85)]=GithubHookService;