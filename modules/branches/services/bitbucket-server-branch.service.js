const a53_0x137e=['getOne','find','BranchDto','constructor','fromBitbucketServer','40NNApdY','BitbucketServerBranchService','491013BbhhFp','getAll','BitbucketServerApiService','NotFoundError','Branch\x20not\x20found','test','../../../core/errors/bad-request.error','63198DTSHdH','values','delete','1575667BZLtuO','repository','map','1WqGwkk','/branch-utils/','/api/','1178998QezQDO','apiUrl','name','1UTETxd','defineProperty','createRequest','1448089gYejJV','branches','typedi','__esModule','604mwQHxz','582dvzZSF','get','apply','/branches','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','return\x20/\x22\x20+\x20this\x20+\x20\x22/','request','../dto/branch.dto','refs/heads/','1209233gzmFII'];const a53_0x3a89dd=a53_0x4e86;(function(_0xc31f4b,_0x1a7b58){const _0x41949d=a53_0x4e86;while(!![]){try{const _0x15de79=parseInt(_0x41949d(0x105))+parseInt(_0x41949d(0x102))*-parseInt(_0x41949d(0xf9))+parseInt(_0x41949d(0x109))*parseInt(_0x41949d(0x10a))+parseInt(_0x41949d(0xef))+-parseInt(_0x41949d(0xe7))+parseInt(_0x41949d(0xff))*-parseInt(_0x41949d(0xfc))+parseInt(_0x41949d(0xf6))*parseInt(_0x41949d(0xed));if(_0x15de79===_0x1a7b58)break;else _0xc31f4b['push'](_0xc31f4b['shift']());}catch(_0x336640){_0xc31f4b['push'](_0xc31f4b['shift']());}}}(a53_0x137e,0xd0a7c));const a53_0x2fe8a7=function(){let _0x359105=!![];return function(_0x675dd8,_0x7cdae4){const _0xddfff8=_0x359105?function(){const _0x44e77a=a53_0x4e86;if(_0x7cdae4){const _0x49fb8d=_0x7cdae4[_0x44e77a(0x10c)](_0x675dd8,arguments);return _0x7cdae4=null,_0x49fb8d;}}:function(){};return _0x359105=![],_0xddfff8;};}(),a53_0x4ec12c=a53_0x2fe8a7(this,function(){const _0x52aec7=function(){const _0x3795a3=a53_0x4e86,_0x131ed=_0x52aec7['constructor'](_0x3795a3(0x10f))()[_0x3795a3(0xeb)](_0x3795a3(0x10e));return!_0x131ed[_0x3795a3(0xf4)](a53_0x4ec12c);};return _0x52aec7();});a53_0x4ec12c();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x54e0d7){const _0x2caa6a=a53_0x4e86;return _0x54e0d7&&_0x54e0d7[_0x2caa6a(0x108)]?_0x54e0d7:{'default':_0x54e0d7};};Object[a53_0x3a89dd(0x103)](exports,a53_0x3a89dd(0x108),{'value':!![]}),exports[a53_0x3a89dd(0xee)]=void 0x0;const bad_request_error_1=require(a53_0x3a89dd(0xf5)),not_found_error_1=require('../../../core/errors/not-found.error'),typedi_1=__importDefault(require(a53_0x3a89dd(0x107))),bitbucket_server_api_service_1=require('../../git-api/services/bitbucket-server-api.service'),branch_dto_1=require(a53_0x3a89dd(0x111)),git_branch_service_1=require('./git-branch.service');class BitbucketServerBranchService extends git_branch_service_1['GitBranchService']{constructor(_0x56f858){const _0x38050d=a53_0x3a89dd;super(_0x56f858),this[_0x38050d(0x110)]=this['createRequest']();}['createRequest'](){const _0x484141=a53_0x3a89dd,_0x17a0a0=typedi_1['default'][_0x484141(0x10b)](bitbucket_server_api_service_1[_0x484141(0xf1)]);return _0x17a0a0[_0x484141(0x104)](this[_0x484141(0xfa)][_0x484141(0x100)]);}async[a53_0x3a89dd(0xe8)](_0x785aa0){const _0x314ee8=a53_0x3a89dd;try{const _0x2be623=await this[_0x314ee8(0xf0)](),_0x2a47b6=_0x2be623[_0x314ee8(0xe9)](_0x2b70b2=>_0x2b70b2[_0x314ee8(0x101)]===_0x785aa0);if(!_0x2a47b6)throw new not_found_error_1[(_0x314ee8(0xf2))](_0x314ee8(0xf3));return _0x2a47b6;}catch(_0x110e34){throw new not_found_error_1['NotFoundError'](_0x110e34);}}async['getAll'](){const _0x105140=a53_0x3a89dd;try{const _0x12c8aa=await this[_0x105140(0x110)][_0x105140(0x10b)](_0x105140(0x106));return _0x12c8aa[_0x105140(0xf7)][_0x105140(0xfb)](_0x2e3ebe=>branch_dto_1[_0x105140(0xea)][_0x105140(0xec)](_0x2e3ebe));}catch(_0x3d83c7){throw new not_found_error_1['NotFoundError'](_0x3d83c7);}}async[a53_0x3a89dd(0xf8)](_0x5c5151){const _0x465b3d=a53_0x3a89dd;try{await this['getOne'](_0x5c5151);const _0x5eb826=this[_0x465b3d(0xfa)][_0x465b3d(0x100)]['replace'](_0x465b3d(0xfe),_0x465b3d(0xfd));await this[_0x465b3d(0x110)][_0x465b3d(0xf8)](_0x5eb826+_0x465b3d(0x10d),{'data':{'name':_0x465b3d(0xe6)+_0x5c5151,'dryRun':![]}});}catch(_0x1d5bc8){throw new bad_request_error_1['BadRequestError'](_0x1d5bc8);}}}function a53_0x4e86(_0x3613b4,_0x20d683){return a53_0x4e86=function(_0x318aa2,_0x4ec12c){_0x318aa2=_0x318aa2-0xe6;let _0x2fe8a7=a53_0x137e[_0x318aa2];return _0x2fe8a7;},a53_0x4e86(_0x3613b4,_0x20d683);}exports['BitbucketServerBranchService']=BitbucketServerBranchService;