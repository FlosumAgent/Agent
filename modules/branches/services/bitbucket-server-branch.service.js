const a53_0x3d38=['find','defineProperty','branches','request','__esModule','__importDefault','155412opKLSz','../../../core/errors/bad-request.error','getAll','default','createRequest','39693fEHxlT','NotFoundError','delete','../../../core/errors/not-found.error','Branch\x20not\x20found','BadRequestError','getOne','37740VIXrPL','fromBitbucketServer','return\x20/\x22\x20+\x20this\x20+\x20\x22/','BitbucketServerApiService','BitbucketServerBranchService','apply','../../git-api/services/bitbucket-server-api.service','/branch-utils/','constructor','/branches','typedi','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','5526rCfTVd','15AVuhzO','apiUrl','9xmijNQ','repository','./git-branch.service','66781bfvmcp','/api/','1XuSFpg','6755uwXzJG','706940xwQSis','name','get','12NuQPoH','refs/heads/','test','1UzMZpE','../dto/branch.dto','map','replace'];const a53_0x1deac1=a53_0x3c7c;(function(_0x39e7a7,_0x219bfa){const _0x86487=a53_0x3c7c;while(!![]){try{const _0x453eeb=parseInt(_0x86487(0xc4))+-parseInt(_0x86487(0xba))*parseInt(_0x86487(0xb0))+-parseInt(_0x86487(0xc9))*parseInt(_0x86487(0xad))+-parseInt(_0x86487(0x9e))+-parseInt(_0x86487(0xb7))*parseInt(_0x86487(0xaa))+parseInt(_0x86487(0xb3))*-parseInt(_0x86487(0xab))+-parseInt(_0x86487(0xb4))*-parseInt(_0x86487(0xb2));if(_0x453eeb===_0x219bfa)break;else _0x39e7a7['push'](_0x39e7a7['shift']());}catch(_0x442e55){_0x39e7a7['push'](_0x39e7a7['shift']());}}}(a53_0x3d38,0x38dfd));const a53_0xc01e45=function(){let _0x15cc1a=!![];return function(_0x3d0098,_0x3a3a6d){const _0x54cc71=_0x15cc1a?function(){const _0xe54779=a53_0x3c7c;if(_0x3a3a6d){const _0xea4d06=_0x3a3a6d[_0xe54779(0xa3)](_0x3d0098,arguments);return _0x3a3a6d=null,_0xea4d06;}}:function(){};return _0x15cc1a=![],_0x54cc71;};}(),a53_0x106d04=a53_0xc01e45(this,function(){const _0x275a2d=function(){const _0x2638c7=a53_0x3c7c,_0x3a7e86=_0x275a2d[_0x2638c7(0xa6)](_0x2638c7(0xa0))()['constructor'](_0x2638c7(0xa9));return!_0x3a7e86[_0x2638c7(0xb9)](a53_0x106d04);};return _0x275a2d();});a53_0x106d04();'use strict';var __importDefault=this&&this[a53_0x1deac1(0xc3)]||function(_0x17acdf){return _0x17acdf&&_0x17acdf['__esModule']?_0x17acdf:{'default':_0x17acdf};};function a53_0x3c7c(_0xebbb1b,_0x2c028f){return a53_0x3c7c=function(_0x3bc300,_0x106d04){_0x3bc300=_0x3bc300-0x98;let _0xc01e45=a53_0x3d38[_0x3bc300];return _0xc01e45;},a53_0x3c7c(_0xebbb1b,_0x2c028f);}Object[a53_0x1deac1(0xbf)](exports,a53_0x1deac1(0xc2),{'value':!![]}),exports[a53_0x1deac1(0xa2)]=void 0x0;const bad_request_error_1=require(a53_0x1deac1(0xc5)),not_found_error_1=require(a53_0x1deac1(0x9a)),typedi_1=__importDefault(require(a53_0x1deac1(0xa8))),bitbucket_server_api_service_1=require(a53_0x1deac1(0xa4)),branch_dto_1=require(a53_0x1deac1(0xbb)),git_branch_service_1=require(a53_0x1deac1(0xaf));class BitbucketServerBranchService extends git_branch_service_1['GitBranchService']{constructor(_0x1755b9){const _0x5d9c35=a53_0x1deac1;super(_0x1755b9),this[_0x5d9c35(0xc1)]=this[_0x5d9c35(0xc8)]();}[a53_0x1deac1(0xc8)](){const _0x5a099f=a53_0x1deac1,_0x2e2988=typedi_1[_0x5a099f(0xc7)][_0x5a099f(0xb6)](bitbucket_server_api_service_1[_0x5a099f(0xa1)]);return _0x2e2988[_0x5a099f(0xc8)](this[_0x5a099f(0xae)][_0x5a099f(0xac)]);}async[a53_0x1deac1(0x9d)](_0x2008a8){const _0x39d978=a53_0x1deac1;try{const _0x2d79f4=await this[_0x39d978(0xc6)](),_0x1f06cb=_0x2d79f4[_0x39d978(0xbe)](_0x2ff15b=>_0x2ff15b[_0x39d978(0xb5)]===_0x2008a8);if(!_0x1f06cb)throw new not_found_error_1[(_0x39d978(0x98))](_0x39d978(0x9b));return _0x1f06cb;}catch(_0x427602){throw new not_found_error_1[(_0x39d978(0x98))](_0x427602);}}async[a53_0x1deac1(0xc6)](){const _0x1a43d5=a53_0x1deac1;try{const _0x5e9442=await this['request'][_0x1a43d5(0xb6)](_0x1a43d5(0xc0));return _0x5e9442['values'][_0x1a43d5(0xbc)](_0xac26f9=>branch_dto_1['BranchDto'][_0x1a43d5(0x9f)](_0xac26f9));}catch(_0xb7fbb8){throw new not_found_error_1[(_0x1a43d5(0x98))](_0xb7fbb8);}}async[a53_0x1deac1(0x99)](_0x4279da){const _0x1e837c=a53_0x1deac1;try{await this[_0x1e837c(0x9d)](_0x4279da);const _0x37a125=this['repository']['apiUrl'][_0x1e837c(0xbd)](_0x1e837c(0xb1),_0x1e837c(0xa5));await this['request']['delete'](_0x37a125+_0x1e837c(0xa7),{'data':{'name':_0x1e837c(0xb8)+_0x4279da,'dryRun':![]}});}catch(_0x2ad267){throw new bad_request_error_1[(_0x1e837c(0x9c))](_0x2ad267);}}}exports['BitbucketServerBranchService']=BitbucketServerBranchService;