const a52_0xe354=['return\x20/\x22\x20+\x20this\x20+\x20\x22/','constructor','NotFoundError','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','createRequest','fromBitbucket','defineProperty','BranchDto','values','get','__esModule','typedi','map','1200491sObjgm','getOne','335069pKhYNa','186132GbNAJw','164705tjMdcZ','refs/branches/','BitbucketBranchService','getAll','apiUrl','1fwHRTB','../dto/branch.dto','2331452iPSLLr','BitbucketApiService','23163DIdjTz','./git-branch.service','refs/branches','515324nECjst','60wLaMii','6LTVPLI','../../git-api/services/bitbucket-api.service'];const a52_0x4d45d8=a52_0x1ba2;(function(_0x2ada48,_0x35aac7){const _0x482f8=a52_0x1ba2;while(!![]){try{const _0x4485b3=parseInt(_0x482f8(0xcb))*-parseInt(_0x482f8(0xe8))+-parseInt(_0x482f8(0xde))+-parseInt(_0x482f8(0xdd))+parseInt(_0x482f8(0xca))+-parseInt(_0x482f8(0xe4))*parseInt(_0x482f8(0xdb))+-parseInt(_0x482f8(0xcc))*-parseInt(_0x482f8(0xdf))+parseInt(_0x482f8(0xe6));if(_0x4485b3===_0x35aac7)break;else _0x2ada48['push'](_0x2ada48['shift']());}catch(_0x40b517){_0x2ada48['push'](_0x2ada48['shift']());}}}(a52_0xe354,0xb0a4e));const a52_0x51cf78=function(){let _0x125dda=!![];return function(_0x16b518,_0x2f3972){const _0x508dec=_0x125dda?function(){if(_0x2f3972){const _0x490e81=_0x2f3972['apply'](_0x16b518,arguments);return _0x2f3972=null,_0x490e81;}}:function(){};return _0x125dda=![],_0x508dec;};}(),a52_0x1fecbd=a52_0x51cf78(this,function(){const _0x6535b9=function(){const _0x416a28=a52_0x1ba2,_0x4aee1e=_0x6535b9[_0x416a28(0xcf)](_0x416a28(0xce))()[_0x416a28(0xcf)](_0x416a28(0xd1));return!_0x4aee1e['test'](a52_0x1fecbd);};return _0x6535b9();});function a52_0x1ba2(_0x47a4f2,_0x32ba63){return a52_0x1ba2=function(_0x4404b8,_0x1fecbd){_0x4404b8=_0x4404b8-0xca;let _0x51cf78=a52_0xe354[_0x4404b8];return _0x51cf78;},a52_0x1ba2(_0x47a4f2,_0x32ba63);}a52_0x1fecbd();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x14591e){return _0x14591e&&_0x14591e['__esModule']?_0x14591e:{'default':_0x14591e};};Object[a52_0x4d45d8(0xd4)](exports,a52_0x4d45d8(0xd8),{'value':!![]}),exports[a52_0x4d45d8(0xe1)]=void 0x0;const not_found_error_1=require('../../../core/errors/not-found.error'),bitbucket_api_service_1=require(a52_0x4d45d8(0xcd)),typedi_1=__importDefault(require(a52_0x4d45d8(0xd9))),branch_dto_1=require(a52_0x4d45d8(0xe5)),git_branch_service_1=require(a52_0x4d45d8(0xe9));class BitbucketBranchService extends git_branch_service_1['GitBranchService']{constructor(_0x2bf353){const _0x1cde9c=a52_0x4d45d8;super(_0x2bf353),this['request']=this[_0x1cde9c(0xd2)]();}[a52_0x4d45d8(0xd2)](){const _0x12f027=a52_0x4d45d8,_0x2bf828=typedi_1['default']['get'](bitbucket_api_service_1[_0x12f027(0xe7)]);return _0x2bf828['createRequest'](this['repository'][_0x12f027(0xe3)]);}async[a52_0x4d45d8(0xdc)](_0x28b1b0){const _0x30a8b3=a52_0x4d45d8;try{const _0x3e167f=await this['request'][_0x30a8b3(0xd7)]('refs/branches/'+_0x28b1b0);return branch_dto_1[_0x30a8b3(0xd5)][_0x30a8b3(0xd3)](_0x3e167f);}catch(_0x1ea305){throw new not_found_error_1['NotFoundError'](_0x1ea305);}}async[a52_0x4d45d8(0xe2)](){const _0x6d2225=a52_0x4d45d8;try{const _0x15013c=await this['request']['get'](_0x6d2225(0xea));return _0x15013c[_0x6d2225(0xd6)][_0x6d2225(0xda)](_0x83b7bb=>branch_dto_1[_0x6d2225(0xd5)][_0x6d2225(0xd3)](_0x83b7bb));}catch(_0x41e110){throw new not_found_error_1[(_0x6d2225(0xd0))](_0x41e110);}}async['delete'](_0x3888a3){const _0x221d29=a52_0x4d45d8;try{await this['request']['delete'](_0x221d29(0xe0)+_0x3888a3);}catch(_0x48d9eb){throw new not_found_error_1[(_0x221d29(0xd0))](_0x48d9eb);}}}exports[a52_0x4d45d8(0xe1)]=BitbucketBranchService;