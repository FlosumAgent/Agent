const a55_0x199807=a55_0x2b62;(function(_0x4a6229,_0x3ae0c0){const _0x510c89=a55_0x2b62,_0x2ae8f4=_0x4a6229();while(!![]){try{const _0x17f6a6=parseInt(_0x510c89(0x1c6))/0x1+-parseInt(_0x510c89(0x1b7))/0x2*(-parseInt(_0x510c89(0x1b1))/0x3)+-parseInt(_0x510c89(0x1ad))/0x4+parseInt(_0x510c89(0x1ba))/0x5+-parseInt(_0x510c89(0x1aa))/0x6*(-parseInt(_0x510c89(0x1ae))/0x7)+parseInt(_0x510c89(0x1b2))/0x8*(parseInt(_0x510c89(0x1b8))/0x9)+-parseInt(_0x510c89(0x1b0))/0xa;if(_0x17f6a6===_0x3ae0c0)break;else _0x2ae8f4['push'](_0x2ae8f4['shift']());}catch(_0x2f699c){_0x2ae8f4['push'](_0x2ae8f4['shift']());}}}(a55_0x111c,0xe166b));const a55_0x3d43d0=function(){let _0x585655=!![];return function(_0x125a29,_0x2c1b30){const _0x1d05ca=_0x585655?function(){const _0x37a4af=a55_0x2b62;if(_0x2c1b30){const _0x241eb0=_0x2c1b30[_0x37a4af(0x1b6)](_0x125a29,arguments);return _0x2c1b30=null,_0x241eb0;}}:function(){};return _0x585655=![],_0x1d05ca;};}(),a55_0x4ae0dc=a55_0x3d43d0(this,function(){const _0x75dc89=a55_0x2b62;return a55_0x4ae0dc[_0x75dc89(0x1bc)]()[_0x75dc89(0x1c2)](_0x75dc89(0x1c4))[_0x75dc89(0x1bc)]()['constructor'](a55_0x4ae0dc)[_0x75dc89(0x1c2)](_0x75dc89(0x1c4));});function a55_0x111c(){const _0x5ebdeb=['repository','Branch\x20not\x20found','703416sBIpBC','381353ankhed','name','27045790LaOHBL','380805TDffds','2872zJdNKK','getRepositoryBranches','init\x20branch','getOne','apply','2USHBUU','8865PHNiQf','BadRequestError','7178065VYgLJM','defineProperty','toString','getAll','find','GitBranchService','Git','../../../core/errors/bad-request.error','search','create','(((.+)+)+)+$','../../../core/errors/not-found.error','1833034UGNHqV','6reuIhq'];a55_0x111c=function(){return _0x5ebdeb;};return a55_0x111c();}a55_0x4ae0dc();function a55_0x2b62(_0x32b37f,_0x28c600){const _0x26f58a=a55_0x111c();return a55_0x2b62=function(_0x4ae0dc,_0x3d43d0){_0x4ae0dc=_0x4ae0dc-0x1aa;let _0x111c2e=_0x26f58a[_0x4ae0dc];return _0x111c2e;},a55_0x2b62(_0x32b37f,_0x28c600);}'use strict';Object[a55_0x199807(0x1bb)](exports,'__esModule',{'value':!![]}),exports[a55_0x199807(0x1bf)]=void 0x0;const bad_request_error_1=require(a55_0x199807(0x1c1)),not_found_error_1=require(a55_0x199807(0x1c5)),git_internal_1=require('../../internal/git.internal');class GitBranchService{constructor(_0x421851){this['repository']=_0x421851;}async[a55_0x199807(0x1c3)](_0x4c2106){const _0x22c0e9=a55_0x199807;try{return await git_internal_1[_0x22c0e9(0x1c0)]['createEmptyBranch'](this[_0x22c0e9(0x1ab)],_0x4c2106[_0x22c0e9(0x1af)],_0x22c0e9(0x1b4)),this[_0x22c0e9(0x1b5)](_0x4c2106[_0x22c0e9(0x1af)]);}catch(_0x499a58){throw new bad_request_error_1[(_0x22c0e9(0x1b9))](_0x499a58);}}async[a55_0x199807(0x1b5)](_0x426ed1){const _0x4b9481=a55_0x199807;try{const _0x183fd4=await this[_0x4b9481(0x1bd)](),_0x3f89ad=_0x183fd4[_0x4b9481(0x1be)](_0x2372fe=>_0x2372fe[_0x4b9481(0x1af)]===_0x426ed1);if(!_0x3f89ad)throw new Error(_0x4b9481(0x1ac));return _0x3f89ad;}catch(_0x267de1){throw new not_found_error_1['NotFoundError'](_0x267de1);}}async[a55_0x199807(0x1bd)](){const _0x203938=a55_0x199807;try{const _0x374c9a=await git_internal_1[_0x203938(0x1c0)][_0x203938(0x1b3)](this[_0x203938(0x1ab)]);return _0x374c9a;}catch(_0x3a84bd){throw new bad_request_error_1['BadRequestError'](_0x3a84bd);}}}exports[a55_0x199807(0x1bf)]=GitBranchService;