function a53_0x1f72(_0x3df285,_0x5c628e){const _0x4c854d=a53_0x270f();return a53_0x1f72=function(_0x3649bf,_0xe9edb){_0x3649bf=_0x3649bf-0x1a5;let _0x270fd6=_0x4c854d[_0x3649bf];return _0x270fd6;},a53_0x1f72(_0x3df285,_0x5c628e);}const a53_0x4483dd=a53_0x1f72;(function(_0x5573f4,_0x103fde){const _0x287276=a53_0x1f72,_0x42d827=_0x5573f4();while(!![]){try{const _0x543159=parseInt(_0x287276(0x1a5))/0x1+-parseInt(_0x287276(0x1ad))/0x2*(parseInt(_0x287276(0x1bb))/0x3)+parseInt(_0x287276(0x1af))/0x4+parseInt(_0x287276(0x1b0))/0x5*(parseInt(_0x287276(0x1ac))/0x6)+parseInt(_0x287276(0x1b2))/0x7+parseInt(_0x287276(0x1b4))/0x8+-parseInt(_0x287276(0x1bf))/0x9;if(_0x543159===_0x103fde)break;else _0x42d827['push'](_0x42d827['shift']());}catch(_0x4d790b){_0x42d827['push'](_0x42d827['shift']());}}}(a53_0x270f,0x1fdbf));const a53_0xe9edb=function(){let _0xe7398f=!![];return function(_0x23fb5d,_0x3695fe){const _0x529706=_0xe7398f?function(){const _0x47bef7=a53_0x1f72;if(_0x3695fe){const _0x3e612e=_0x3695fe[_0x47bef7(0x1b3)](_0x23fb5d,arguments);return _0x3695fe=null,_0x3e612e;}}:function(){};return _0xe7398f=![],_0x529706;};}(),a53_0x3649bf=a53_0xe9edb(this,function(){const _0x2696ce=a53_0x1f72;return a53_0x3649bf['toString']()[_0x2696ce(0x1b9)](_0x2696ce(0x1b5))['toString']()['constructor'](a53_0x3649bf)[_0x2696ce(0x1b9)]('(((.+)+)+)+$');});a53_0x3649bf();'use strict';function a53_0x270f(){const _0x21e4a7=['request','repository','__importDefault','4811454vOGUTE','140150gRbCbN','NotFoundError','BitbucketBranchService','apiUrl','__esModule','typedi','createRequest','6lizMiz','448pVIPuj','BitbucketApiService','646312dQadIv','930660SBkFcJ','../../git-api/services/bitbucket-api.service','594321EWHkKj','apply','2043280rruFWb','(((.+)+)+)+$','../../../core/errors/not-found.error','GitBranchService','defineProperty','search','delete','2184olkexY'];a53_0x270f=function(){return _0x21e4a7;};return a53_0x270f();}var __importDefault=this&&this[a53_0x4483dd(0x1be)]||function(_0x28125b){const _0xbb209b=a53_0x4483dd;return _0x28125b&&_0x28125b[_0xbb209b(0x1a9)]?_0x28125b:{'default':_0x28125b};};Object[a53_0x4483dd(0x1b8)](exports,a53_0x4483dd(0x1a9),{'value':!![]}),exports['BitbucketBranchService']=void 0x0;const not_found_error_1=require(a53_0x4483dd(0x1b6)),bitbucket_api_service_1=require(a53_0x4483dd(0x1b1)),typedi_1=__importDefault(require(a53_0x4483dd(0x1aa))),git_branch_service_1=require('./git-branch.service');class BitbucketBranchService extends git_branch_service_1[a53_0x4483dd(0x1b7)]{constructor(_0x3140aa){super(_0x3140aa),this['request']=this['createRequest']();}[a53_0x4483dd(0x1ab)](){const _0xa676ac=a53_0x4483dd,_0x26443d=typedi_1['default']['get'](bitbucket_api_service_1[_0xa676ac(0x1ae)]);return _0x26443d['createRequest'](this[_0xa676ac(0x1bd)][_0xa676ac(0x1a8)]);}async[a53_0x4483dd(0x1ba)](_0x486840){const _0x5064da=a53_0x4483dd;try{await this[_0x5064da(0x1bc)]['delete']('refs/branches/'+_0x486840);}catch(_0x7c5216){throw new not_found_error_1[(_0x5064da(0x1a6))](_0x7c5216);}}}exports[a53_0x4483dd(0x1a7)]=BitbucketBranchService;