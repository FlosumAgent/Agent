const a53_0x27ee=['Branch\x20not\x20found','./git-branch.service','43lTgidR','2650CXQQUY','2zDYDNx','apply','apiUrl','getAll','getOne','get','9069ilfRDI','../../git-api/services/bitbucket-server-api.service','2ULQaRj','../../../core/errors/not-found.error','351885rwrrwg','1eMJMiI','delete','return\x20/\x22\x20+\x20this\x20+\x20\x22/','find','../../../core/errors/bad-request.error','BranchDto','GitBranchService','defineProperty','__importDefault','189746XnJOiG','13NephNA','request','replace','branches','createRequest','repository','BitbucketServerBranchService','map','fromBitbucketServer','170635cMVBBk','typedi','test','NotFoundError','32iHevPA','829089eulugy','__esModule','12053UWCeRQ','values','/branch-utils/'];const a53_0x42bdd1=a53_0x4ad5;function a53_0x4ad5(_0x4152e1,_0x19808b){return a53_0x4ad5=function(_0xf3ff6,_0x5e50a4){_0xf3ff6=_0xf3ff6-0x1b3;let _0x4e2d0c=a53_0x27ee[_0xf3ff6];return _0x4e2d0c;},a53_0x4ad5(_0x4152e1,_0x19808b);}(function(_0x3c277d,_0x2949f4){const _0x58b7dc=a53_0x4ad5;while(!![]){try{const _0x810d8d=parseInt(_0x58b7dc(0x1cf))*-parseInt(_0x58b7dc(0x1d7))+-parseInt(_0x58b7dc(0x1d1))*parseInt(_0x58b7dc(0x1c3))+parseInt(_0x58b7dc(0x1ca))*-parseInt(_0x58b7dc(0x1ba))+-parseInt(_0x58b7dc(0x1dc))*parseInt(_0x58b7dc(0x1b9))+-parseInt(_0x58b7dc(0x1d0))*-parseInt(_0x58b7dc(0x1c7))+-parseInt(_0x58b7dc(0x1db))+parseInt(_0x58b7dc(0x1c8))*parseInt(_0x58b7dc(0x1d9));if(_0x810d8d===_0x2949f4)break;else _0x3c277d['push'](_0x3c277d['shift']());}catch(_0x5ab7d7){_0x3c277d['push'](_0x3c277d['shift']());}}}(a53_0x27ee,0x4c84d));const a53_0x4e2d0c=function(){let _0x24824b=!![];return function(_0x1ebf63,_0x5e9411){const _0x577567=_0x24824b?function(){const _0x5e00e8=a53_0x4ad5;if(_0x5e9411){const _0x32e184=_0x5e9411[_0x5e00e8(0x1d2)](_0x1ebf63,arguments);return _0x5e9411=null,_0x32e184;}}:function(){};return _0x24824b=![],_0x577567;};}(),a53_0x5e50a4=a53_0x4e2d0c(this,function(){const _0x1ec9d6=function(){const _0x4b90ee=a53_0x4ad5,_0x37eb92=_0x1ec9d6['constructor'](_0x4b90ee(0x1de))()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x37eb92[_0x4b90ee(0x1c5)](a53_0x5e50a4);};return _0x1ec9d6();});a53_0x5e50a4();'use strict';var __importDefault=this&&this[a53_0x42bdd1(0x1b8)]||function(_0x364a49){return _0x364a49&&_0x364a49['__esModule']?_0x364a49:{'default':_0x364a49};};Object[a53_0x42bdd1(0x1b7)](exports,a53_0x42bdd1(0x1c9),{'value':!![]}),exports[a53_0x42bdd1(0x1c0)]=void 0x0;const bad_request_error_1=require(a53_0x42bdd1(0x1b4)),not_found_error_1=require(a53_0x42bdd1(0x1da)),typedi_1=__importDefault(require(a53_0x42bdd1(0x1c4))),bitbucket_server_api_service_1=require(a53_0x42bdd1(0x1d8)),branch_dto_1=require('../dto/branch.dto'),git_branch_service_1=require(a53_0x42bdd1(0x1ce));class BitbucketServerBranchService extends git_branch_service_1[a53_0x42bdd1(0x1b6)]{constructor(_0x2f5b90){const _0x53f9c7=a53_0x42bdd1;super(_0x2f5b90),this[_0x53f9c7(0x1bb)]=this[_0x53f9c7(0x1be)]();}[a53_0x42bdd1(0x1be)](){const _0x49cfcf=a53_0x42bdd1,_0x2952af=typedi_1['default'][_0x49cfcf(0x1d6)](bitbucket_server_api_service_1['BitbucketServerApiService']);return _0x2952af[_0x49cfcf(0x1be)](this[_0x49cfcf(0x1bf)][_0x49cfcf(0x1d3)]);}async[a53_0x42bdd1(0x1d5)](_0x51582c){const _0x474155=a53_0x42bdd1;try{const _0x45fe29=await this[_0x474155(0x1d4)](),_0x4fc418=_0x45fe29[_0x474155(0x1b3)](_0x17bef7=>_0x17bef7['name']===_0x51582c);if(!_0x4fc418)throw new not_found_error_1[(_0x474155(0x1c6))](_0x474155(0x1cd));return _0x4fc418;}catch(_0x291642){throw new not_found_error_1['NotFoundError'](_0x291642);}}async['getAll'](){const _0x265425=a53_0x42bdd1;try{const _0x392b74=await this[_0x265425(0x1bb)][_0x265425(0x1d6)](_0x265425(0x1bd));return _0x392b74[_0x265425(0x1cb)][_0x265425(0x1c1)](_0x4c1658=>branch_dto_1[_0x265425(0x1b5)][_0x265425(0x1c2)](_0x4c1658));}catch(_0x3364c6){throw new not_found_error_1[(_0x265425(0x1c6))](_0x3364c6);}}async[a53_0x42bdd1(0x1dd)](_0x4cdb98){const _0x3e7257=a53_0x42bdd1;try{await this[_0x3e7257(0x1d5)](_0x4cdb98);const _0x2209ae=this[_0x3e7257(0x1bf)][_0x3e7257(0x1d3)][_0x3e7257(0x1bc)]('/api/',_0x3e7257(0x1cc));await this[_0x3e7257(0x1bb)][_0x3e7257(0x1dd)](_0x2209ae+'/branches',{'data':{'name':'refs/heads/'+_0x4cdb98,'dryRun':![]}});}catch(_0xf0afb8){throw new bad_request_error_1['BadRequestError'](_0xf0afb8);}}}exports[a53_0x42bdd1(0x1c0)]=BitbucketServerBranchService;