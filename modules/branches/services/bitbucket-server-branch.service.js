const a53_0xfd81=['1GxOWPO','25DhdNWp','name','255527fOtBbs','/branch-utils/','513350PTMktp','373037yttHjr','../dto/branch.dto','default','delete','fromBitbucketServer','411098vFhCsM','/api/','constructor','121343fsjYgL','branches','4682yJbmrb','repository','apiUrl','BitbucketServerBranchService','Branch\x20not\x20found','find','__importDefault','getOne','../../../core/errors/not-found.error','116035SowRgm','GitBranchService','__esModule','get','typedi','refs/heads/','1Ruivmp','./git-branch.service','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','/branches','NotFoundError','map','return\x20/\x22\x20+\x20this\x20+\x20\x22/','replace','createRequest','request'];const a53_0x2d0dc2=a53_0x4900;(function(_0xb9e885,_0x49b5d4){const _0x51b41d=a53_0x4900;while(!![]){try{const _0x2597cf=parseInt(_0x51b41d(0xb1))*parseInt(_0x51b41d(0xb4))+parseInt(_0x51b41d(0xb7))+-parseInt(_0x51b41d(0xb6))+-parseInt(_0x51b41d(0xbf))+parseInt(_0x51b41d(0xa1))+parseInt(_0x51b41d(0xc1))*-parseInt(_0x51b41d(0xb2))+parseInt(_0x51b41d(0xbc))*parseInt(_0x51b41d(0xa7));if(_0x2597cf===_0x49b5d4)break;else _0xb9e885['push'](_0xb9e885['shift']());}catch(_0x4c2072){_0xb9e885['push'](_0xb9e885['shift']());}}}(a53_0xfd81,0x629f2));const a53_0x4cdab1=function(){let _0x1ae571=!![];return function(_0x214f43,_0x20b252){const _0x4b6901=_0x1ae571?function(){if(_0x20b252){const _0x469218=_0x20b252['apply'](_0x214f43,arguments);return _0x20b252=null,_0x469218;}}:function(){};return _0x1ae571=![],_0x4b6901;};}(),a53_0x217abb=a53_0x4cdab1(this,function(){const _0x7be0ec=function(){const _0x22fa83=a53_0x4900,_0x4f4328=_0x7be0ec[_0x22fa83(0xbe)](_0x22fa83(0xad))()[_0x22fa83(0xbe)](_0x22fa83(0xa9));return!_0x4f4328['test'](a53_0x217abb);};return _0x7be0ec();});a53_0x217abb();'use strict';var __importDefault=this&&this[a53_0x2d0dc2(0xc7)]||function(_0x1e37e2){return _0x1e37e2&&_0x1e37e2['__esModule']?_0x1e37e2:{'default':_0x1e37e2};};Object['defineProperty'](exports,a53_0x2d0dc2(0xa3),{'value':!![]}),exports['BitbucketServerBranchService']=void 0x0;function a53_0x4900(_0x435393,_0x45ac9f){return a53_0x4900=function(_0x201d78,_0x217abb){_0x201d78=_0x201d78-0x9f;let _0x4cdab1=a53_0xfd81[_0x201d78];return _0x4cdab1;},a53_0x4900(_0x435393,_0x45ac9f);}const bad_request_error_1=require('../../../core/errors/bad-request.error'),not_found_error_1=require(a53_0x2d0dc2(0xa0)),typedi_1=__importDefault(require(a53_0x2d0dc2(0xa5))),bitbucket_server_api_service_1=require('../../git-api/services/bitbucket-server-api.service'),branch_dto_1=require(a53_0x2d0dc2(0xb8)),git_branch_service_1=require(a53_0x2d0dc2(0xa8));class BitbucketServerBranchService extends git_branch_service_1[a53_0x2d0dc2(0xa2)]{constructor(_0xf38dec){super(_0xf38dec),this['request']=this['createRequest']();}[a53_0x2d0dc2(0xaf)](){const _0x400e07=a53_0x2d0dc2,_0x473383=typedi_1[_0x400e07(0xb9)]['get'](bitbucket_server_api_service_1['BitbucketServerApiService']);return _0x473383[_0x400e07(0xaf)](this['repository'][_0x400e07(0xc3)]);}async[a53_0x2d0dc2(0x9f)](_0x77e281){const _0x5f11e4=a53_0x2d0dc2;try{const _0x309d37=await this['getAll'](),_0x3143f8=_0x309d37[_0x5f11e4(0xc6)](_0x300cbb=>_0x300cbb[_0x5f11e4(0xb3)]===_0x77e281);if(!_0x3143f8)throw new not_found_error_1['NotFoundError'](_0x5f11e4(0xc5));return _0x3143f8;}catch(_0x37e99a){throw new not_found_error_1[(_0x5f11e4(0xab))](_0x37e99a);}}async['getAll'](){const _0x273048=a53_0x2d0dc2;try{const _0x131bcd=await this['request'][_0x273048(0xa4)](_0x273048(0xc0));return _0x131bcd['values'][_0x273048(0xac)](_0x5407b7=>branch_dto_1['BranchDto'][_0x273048(0xbb)](_0x5407b7));}catch(_0x2bbffb){throw new not_found_error_1[(_0x273048(0xab))](_0x2bbffb);}}async['delete'](_0x1bcd84){const _0x394ec8=a53_0x2d0dc2;try{await this['getOne'](_0x1bcd84);const _0x3e7a46=this[_0x394ec8(0xc2)][_0x394ec8(0xc3)][_0x394ec8(0xae)](_0x394ec8(0xbd),_0x394ec8(0xb5));await this[_0x394ec8(0xb0)][_0x394ec8(0xba)](_0x3e7a46+_0x394ec8(0xaa),{'data':{'name':_0x394ec8(0xa6)+_0x1bcd84,'dryRun':![]}});}catch(_0x31bd26){throw new bad_request_error_1['BadRequestError'](_0x31bd26);}}}exports[a53_0x2d0dc2(0xc4)]=BitbucketServerBranchService;