const a53_0x2f62=['64423XeVyPg','/branch-utils/','163713ayFpco','test','__importDefault','69461DOfzkQ','Branch\x20not\x20found','191986TrUMLl','replace','/api/','3TyEWZI','delete','constructor','getAll','GitBranchService','70791TjUvyL','apply','get','__esModule','172618dUNWoR','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','request','repository','defineProperty','BitbucketServerBranchService','/branches','./git-branch.service','3yMvAeP','1xMEJjj','branches','17722HzhLVQ','return\x20/\x22\x20+\x20this\x20+\x20\x22/','createRequest','apiUrl','NotFoundError','getOne','../../../core/errors/not-found.error','find','map','../../git-api/services/bitbucket-server-api.service','values','7YBQpdv'];const a53_0x4341c8=a53_0x116e;(function(_0x5aeda9,_0x2422fa){const _0x4f9aa2=a53_0x116e;while(!![]){try{const _0x84fea9=parseInt(_0x4f9aa2(0x157))+-parseInt(_0x4f9aa2(0x149))+parseInt(_0x4f9aa2(0x132))*parseInt(_0x4f9aa2(0x147))+-parseInt(_0x4f9aa2(0x13e))+parseInt(_0x4f9aa2(0x13a))*parseInt(_0x4f9aa2(0x135))+-parseInt(_0x4f9aa2(0x15a))*-parseInt(_0x4f9aa2(0x146))+-parseInt(_0x4f9aa2(0x154))*parseInt(_0x4f9aa2(0x155));if(_0x84fea9===_0x2422fa)break;else _0x5aeda9['push'](_0x5aeda9['shift']());}catch(_0x173f49){_0x5aeda9['push'](_0x5aeda9['shift']());}}}(a53_0x2f62,0x20ff2));const a53_0x5f48dd=function(){let _0x467c8a=!![];return function(_0x5c1aa5,_0xd003b2){const _0xb60b09=_0x467c8a?function(){const _0x3bc6cb=a53_0x116e;if(_0xd003b2){const _0x2d269b=_0xd003b2[_0x3bc6cb(0x13b)](_0x5c1aa5,arguments);return _0xd003b2=null,_0x2d269b;}}:function(){};return _0x467c8a=![],_0xb60b09;};}(),a53_0x2e4377=a53_0x5f48dd(this,function(){const _0x1b8b12=function(){const _0x2c1efa=a53_0x116e,_0x57b76e=_0x1b8b12[_0x2c1efa(0x137)](_0x2c1efa(0x14a))()[_0x2c1efa(0x137)](_0x2c1efa(0x13f));return!_0x57b76e[_0x2c1efa(0x158)](a53_0x2e4377);};return _0x1b8b12();});function a53_0x116e(_0x24df4,_0x321769){return a53_0x116e=function(_0x16c4e2,_0x2e4377){_0x16c4e2=_0x16c4e2-0x131;let _0x5f48dd=a53_0x2f62[_0x16c4e2];return _0x5f48dd;},a53_0x116e(_0x24df4,_0x321769);}a53_0x2e4377();'use strict';var __importDefault=this&&this[a53_0x4341c8(0x159)]||function(_0x1a387d){return _0x1a387d&&_0x1a387d['__esModule']?_0x1a387d:{'default':_0x1a387d};};Object[a53_0x4341c8(0x142)](exports,a53_0x4341c8(0x13d),{'value':!![]}),exports[a53_0x4341c8(0x143)]=void 0x0;const bad_request_error_1=require('../../../core/errors/bad-request.error'),not_found_error_1=require(a53_0x4341c8(0x14f)),typedi_1=__importDefault(require('typedi')),bitbucket_server_api_service_1=require(a53_0x4341c8(0x152)),branch_dto_1=require('../dto/branch.dto'),git_branch_service_1=require(a53_0x4341c8(0x145));class BitbucketServerBranchService extends git_branch_service_1[a53_0x4341c8(0x139)]{constructor(_0x28e3ef){const _0x297049=a53_0x4341c8;super(_0x28e3ef),this[_0x297049(0x140)]=this['createRequest']();}[a53_0x4341c8(0x14b)](){const _0x5cfa59=a53_0x4341c8,_0x3a41e8=typedi_1['default']['get'](bitbucket_server_api_service_1['BitbucketServerApiService']);return _0x3a41e8[_0x5cfa59(0x14b)](this[_0x5cfa59(0x141)][_0x5cfa59(0x14c)]);}async[a53_0x4341c8(0x14e)](_0x2ac82e){const _0x495ed1=a53_0x4341c8;try{const _0x1a9cc6=await this[_0x495ed1(0x138)](),_0x116d91=_0x1a9cc6[_0x495ed1(0x150)](_0x3f691d=>_0x3f691d['name']===_0x2ac82e);if(!_0x116d91)throw new not_found_error_1[(_0x495ed1(0x14d))](_0x495ed1(0x131));return _0x116d91;}catch(_0x3bf476){throw new not_found_error_1[(_0x495ed1(0x14d))](_0x3bf476);}}async[a53_0x4341c8(0x138)](){const _0x14c9f3=a53_0x4341c8;try{const _0x3c2c89=await this['request'][_0x14c9f3(0x13c)](_0x14c9f3(0x148));return _0x3c2c89[_0x14c9f3(0x153)][_0x14c9f3(0x151)](_0x5d34e7=>branch_dto_1['BranchDto']['fromBitbucketServer'](_0x5d34e7));}catch(_0x5cff33){throw new not_found_error_1[(_0x14c9f3(0x14d))](_0x5cff33);}}async['delete'](_0x5d4f84){const _0x629d11=a53_0x4341c8;try{await this['getOne'](_0x5d4f84);const _0x585134=this[_0x629d11(0x141)][_0x629d11(0x14c)][_0x629d11(0x133)](_0x629d11(0x134),_0x629d11(0x156));await this['request'][_0x629d11(0x136)](_0x585134+_0x629d11(0x144),{'data':{'name':'refs/heads/'+_0x5d4f84,'dryRun':![]}});}catch(_0xdd6627){throw new bad_request_error_1['BadRequestError'](_0xdd6627);}}}exports[a53_0x4341c8(0x143)]=BitbucketServerBranchService;