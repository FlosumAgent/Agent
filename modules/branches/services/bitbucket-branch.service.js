const a52_0x42c1=['11qJtZHE','161540JSGhgH','default','getOne','NotFoundError','refs/branches','../../git-api/services/bitbucket-api.service','BitbucketBranchService','get','refs/branches/','typedi','BranchDto','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','./git-branch.service','create','1jjraVN','BitbucketApiService','270747TrJhiv','457476pQPGkR','../../../core/errors/bad-request.error','apply','request','fromBitbucket','494057wCqBaA','1482038LESMdm','values','name','createRequest','../../../core/errors/not-found.error','return\x20/\x22\x20+\x20this\x20+\x20\x22/','43fpFKZQ','getAll','post','test','22947rjCVsI','11549Dddkwb','__esModule','../dto/branch.dto','sha','map','delete','repository','BadRequestError'];function a52_0x1dea(_0xa532b4,_0x480645){return a52_0x1dea=function(_0x3addb6,_0x343d3a){_0x3addb6=_0x3addb6-0x145;let _0xe47441=a52_0x42c1[_0x3addb6];return _0xe47441;},a52_0x1dea(_0xa532b4,_0x480645);}const a52_0x92c4f6=a52_0x1dea;(function(_0x2a3d99,_0x4361b6){const _0x2abbeb=a52_0x1dea;while(!![]){try{const _0x2f0a99=-parseInt(_0x2abbeb(0x16a))+-parseInt(_0x2abbeb(0x155))+parseInt(_0x2abbeb(0x161))*-parseInt(_0x2abbeb(0x15c))+-parseInt(_0x2abbeb(0x160))*parseInt(_0x2abbeb(0x169))+parseInt(_0x2abbeb(0x150))+-parseInt(_0x2abbeb(0x14f))+parseInt(_0x2abbeb(0x156))*parseInt(_0x2abbeb(0x14d));if(_0x2f0a99===_0x4361b6)break;else _0x2a3d99['push'](_0x2a3d99['shift']());}catch(_0xb63577){_0x2a3d99['push'](_0x2a3d99['shift']());}}}(a52_0x42c1,0x407d2));const a52_0xe47441=function(){let _0x1880f0=!![];return function(_0x63443e,_0x24859e){const _0x417384=_0x1880f0?function(){const _0x582db6=a52_0x1dea;if(_0x24859e){const _0x5a1108=_0x24859e[_0x582db6(0x152)](_0x63443e,arguments);return _0x24859e=null,_0x5a1108;}}:function(){};return _0x1880f0=![],_0x417384;};}(),a52_0x343d3a=a52_0xe47441(this,function(){const _0x7024b4=function(){const _0x1ecf2d=a52_0x1dea,_0x52d76d=_0x7024b4['constructor'](_0x1ecf2d(0x15b))()['constructor'](_0x1ecf2d(0x14a));return!_0x52d76d[_0x1ecf2d(0x15f)](a52_0x343d3a);};return _0x7024b4();});a52_0x343d3a();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x26be20){const _0x50bcee=a52_0x1dea;return _0x26be20&&_0x26be20[_0x50bcee(0x162)]?_0x26be20:{'default':_0x26be20};};Object['defineProperty'](exports,a52_0x92c4f6(0x162),{'value':!![]}),exports[a52_0x92c4f6(0x145)]=void 0x0;const bad_request_error_1=require(a52_0x92c4f6(0x151)),not_found_error_1=require(a52_0x92c4f6(0x15a)),bitbucket_api_service_1=require(a52_0x92c4f6(0x16f)),typedi_1=__importDefault(require(a52_0x92c4f6(0x148))),branch_dto_1=require(a52_0x92c4f6(0x163)),git_branch_service_1=require(a52_0x92c4f6(0x14b));class BitbucketBranchService extends git_branch_service_1['GitBranchService']{constructor(_0xb807cc){const _0x59e811=a52_0x92c4f6;super(_0xb807cc),this[_0x59e811(0x153)]=this[_0x59e811(0x159)]();}['createRequest'](){const _0x2145ac=a52_0x92c4f6,_0x12aafe=typedi_1[_0x2145ac(0x16b)][_0x2145ac(0x146)](bitbucket_api_service_1[_0x2145ac(0x14e)]);return _0x12aafe[_0x2145ac(0x159)](this[_0x2145ac(0x167)]['apiUrl']);}async[a52_0x92c4f6(0x14c)](_0x322b0b){const _0x101c71=a52_0x92c4f6;try{const _0x7408d7=await this[_0x101c71(0x153)][_0x101c71(0x15e)]('refs/branches',{'name':_0x322b0b[_0x101c71(0x158)],'target':{'hash':_0x322b0b[_0x101c71(0x164)]}});return branch_dto_1[_0x101c71(0x149)][_0x101c71(0x154)](_0x7408d7);}catch(_0x31d251){throw new bad_request_error_1[(_0x101c71(0x168))](_0x31d251);}}async[a52_0x92c4f6(0x16c)](_0x2c7bd0){const _0x3fe994=a52_0x92c4f6;try{const _0x3f2a5d=await this[_0x3fe994(0x153)][_0x3fe994(0x146)](_0x3fe994(0x147)+_0x2c7bd0);return branch_dto_1[_0x3fe994(0x149)][_0x3fe994(0x154)](_0x3f2a5d);}catch(_0x534a03){throw new not_found_error_1[(_0x3fe994(0x16d))](_0x534a03);}}async[a52_0x92c4f6(0x15d)](){const _0x368405=a52_0x92c4f6;try{const _0x3cb4af=await this[_0x368405(0x153)][_0x368405(0x146)](_0x368405(0x16e));return _0x3cb4af[_0x368405(0x157)][_0x368405(0x165)](_0x231fc2=>branch_dto_1[_0x368405(0x149)]['fromBitbucket'](_0x231fc2));}catch(_0x1a28b9){throw new not_found_error_1['NotFoundError'](_0x1a28b9);}}async['delete'](_0x15669b){const _0x46c053=a52_0x92c4f6;try{await this[_0x46c053(0x153)][_0x46c053(0x166)](_0x46c053(0x147)+_0x15669b);}catch(_0x5f3b4a){throw new not_found_error_1['NotFoundError'](_0x5f3b4a);}}}exports[a52_0x92c4f6(0x145)]=BitbucketBranchService;