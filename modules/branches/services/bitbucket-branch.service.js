const a60_0x19ef=['13ALBPFA','request','1104962cNyfIt','177944Wpdkim','createRequest','134347bPuMYX','delete','40387JjMnie','name','fromBitbucket','539193udsqrW','getAll','658433acDMfI','40329mcgmio','defineProperty','../../../core/errors/bad-request.error','BranchDto','1cCDzXr','BitbucketBranchService','BadRequestError','./git-branch.service','default','BitbucketApiService','NotFoundError','repository','test','get','__esModule','apiUrl','create','apply','map','refs/branches','refs/branches/','4NrmqjD','sha','__importDefault','1FEeVys','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','../dto/branch.dto','values','1XtwCzW','../../git-api/services/bitbucket-api.service','typedi'];const a60_0x266a1f=a60_0x4267;(function(_0x232295,_0xdfc23e){const _0x3fe974=a60_0x4267;while(!![]){try{const _0x4f9fea=parseInt(_0x3fe974(0x1b2))*parseInt(_0x3fe974(0x1ad))+-parseInt(_0x3fe974(0x1a8))*-parseInt(_0x3fe974(0x1c6))+parseInt(_0x3fe974(0x1a4))+-parseInt(_0x3fe974(0x1ae))*parseInt(_0x3fe974(0x1a1))+parseInt(_0x3fe974(0x1ab))*-parseInt(_0x3fe974(0x19e))+parseInt(_0x3fe974(0x1c3))*-parseInt(_0x3fe974(0x1a6))+parseInt(_0x3fe974(0x1a3));if(_0x4f9fea===_0xdfc23e)break;else _0x232295['push'](_0x232295['shift']());}catch(_0x1a4f95){_0x232295['push'](_0x232295['shift']());}}}(a60_0x19ef,0x5cfc4));const a60_0x430bc9=function(){let _0x389255=!![];return function(_0x551b92,_0x17df3e){const _0x538e68=_0x389255?function(){const _0x4372e1=a60_0x4267;if(_0x17df3e){const _0x48285e=_0x17df3e[_0x4372e1(0x1bf)](_0x551b92,arguments);return _0x17df3e=null,_0x48285e;}}:function(){};return _0x389255=![],_0x538e68;};}(),a60_0x4d09ba=a60_0x430bc9(this,function(){const _0x22220c=function(){const _0x4f179e=a60_0x4267,_0x2899ad=_0x22220c['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor'](_0x4f179e(0x19b));return!_0x2899ad[_0x4f179e(0x1ba)](a60_0x4d09ba);};return _0x22220c();});a60_0x4d09ba();function a60_0x4267(_0x46e09b,_0x2a71bc){return a60_0x4267=function(_0x3aba57,_0x4d09ba){_0x3aba57=_0x3aba57-0x19b;let _0x430bc9=a60_0x19ef[_0x3aba57];return _0x430bc9;},a60_0x4267(_0x46e09b,_0x2a71bc);}'use strict';var __importDefault=this&&this[a60_0x266a1f(0x1c5)]||function(_0xef8bba){const _0x49404f=a60_0x266a1f;return _0xef8bba&&_0xef8bba[_0x49404f(0x1bc)]?_0xef8bba:{'default':_0xef8bba};};Object[a60_0x266a1f(0x1af)](exports,a60_0x266a1f(0x1bc),{'value':!![]}),exports[a60_0x266a1f(0x1b3)]=void 0x0;const bad_request_error_1=require(a60_0x266a1f(0x1b0)),not_found_error_1=require('../../../core/errors/not-found.error'),bitbucket_api_service_1=require(a60_0x266a1f(0x19f)),typedi_1=__importDefault(require(a60_0x266a1f(0x1a0))),branch_dto_1=require(a60_0x266a1f(0x19c)),git_branch_service_1=require(a60_0x266a1f(0x1b5));class BitbucketBranchService extends git_branch_service_1['GitBranchService']{constructor(_0x40af3b){const _0x4e6041=a60_0x266a1f;super(_0x40af3b),this[_0x4e6041(0x1a2)]=this[_0x4e6041(0x1a5)]();}[a60_0x266a1f(0x1a5)](){const _0x31fa6c=a60_0x266a1f,_0xd88812=typedi_1[_0x31fa6c(0x1b6)][_0x31fa6c(0x1bb)](bitbucket_api_service_1[_0x31fa6c(0x1b7)]);return _0xd88812[_0x31fa6c(0x1a5)](this[_0x31fa6c(0x1b9)][_0x31fa6c(0x1bd)]);}async[a60_0x266a1f(0x1be)](_0x4c01dc){const _0x406ff1=a60_0x266a1f;try{const _0x5b2c66=await this['request']['post'](_0x406ff1(0x1c1),{'name':_0x4c01dc[_0x406ff1(0x1a9)],'target':{'hash':_0x4c01dc[_0x406ff1(0x1c4)]}});return branch_dto_1[_0x406ff1(0x1b1)][_0x406ff1(0x1aa)](_0x5b2c66);}catch(_0x59ff7d){throw new bad_request_error_1[(_0x406ff1(0x1b4))](_0x59ff7d);}}async['getOne'](_0x17a037){const _0x1ebc10=a60_0x266a1f;try{const _0x68e228=await this[_0x1ebc10(0x1a2)][_0x1ebc10(0x1bb)](_0x1ebc10(0x1c2)+_0x17a037);return branch_dto_1['BranchDto'][_0x1ebc10(0x1aa)](_0x68e228);}catch(_0x3013f7){throw new not_found_error_1[(_0x1ebc10(0x1b8))](_0x3013f7);}}async[a60_0x266a1f(0x1ac)](){const _0x1a4eb2=a60_0x266a1f;try{const _0x58e979=await this['request'][_0x1a4eb2(0x1bb)]('refs/branches');return _0x58e979[_0x1a4eb2(0x19d)][_0x1a4eb2(0x1c0)](_0x4e1537=>branch_dto_1[_0x1a4eb2(0x1b1)][_0x1a4eb2(0x1aa)](_0x4e1537));}catch(_0x2be02b){throw new not_found_error_1[(_0x1a4eb2(0x1b8))](_0x2be02b);}}async['delete'](_0x29f337){const _0x19171d=a60_0x266a1f;try{await this[_0x19171d(0x1a2)][_0x19171d(0x1a7)](_0x19171d(0x1c2)+_0x29f337);}catch(_0x446036){throw new not_found_error_1['NotFoundError'](_0x446036);}}}exports['BitbucketBranchService']=BitbucketBranchService;