const a55_0x5538b0=a55_0x4c09;function a55_0x3a25(){const _0x38a725=['330fnAUMC','GitBranchService','13461852JkZqIN','(((.+)+)+)+$','init\x20branch','228dnrgyi','112915poXVYa','2238IzKteh','find','4582510CUdeqo','13465704iUHROw','BadRequestError','12ahkztb','createEmptyBranch','getRepositoryBranches','name','Git','9DjTobD','1099548nkqsZS','defineProperty','33OQMUdl','create','getAll','NotFoundError','constructor','getOne','65695AQRsjY','repository','toString','../../../core/errors/not-found.error'];a55_0x3a25=function(){return _0x38a725;};return a55_0x3a25();}(function(_0x32f5f6,_0x2875b8){const _0x4a7f89=a55_0x4c09,_0x5aad26=_0x32f5f6();while(!![]){try{const _0x41ddff=-parseInt(_0x4a7f89(0x93))/0x1*(-parseInt(_0x4a7f89(0x86))/0x2)+parseInt(_0x4a7f89(0x8b))/0x3*(-parseInt(_0x4a7f89(0x91))/0x4)+-parseInt(_0x4a7f89(0x88))/0x5+parseInt(_0x4a7f89(0x84))/0x6*(parseInt(_0x4a7f89(0x99))/0x7)+parseInt(_0x4a7f89(0x89))/0x8*(parseInt(_0x4a7f89(0x90))/0x9)+parseInt(_0x4a7f89(0x7f))/0xa*(-parseInt(_0x4a7f89(0x85))/0xb)+parseInt(_0x4a7f89(0x81))/0xc;if(_0x41ddff===_0x2875b8)break;else _0x5aad26['push'](_0x5aad26['shift']());}catch(_0x408001){_0x5aad26['push'](_0x5aad26['shift']());}}}(a55_0x3a25,0xce014));function a55_0x4c09(_0x444569,_0x9b77e3){const _0x5ad14e=a55_0x3a25();return a55_0x4c09=function(_0x3732b1,_0x1ca9f4){_0x3732b1=_0x3732b1-0x7e;let _0x3a251f=_0x5ad14e[_0x3732b1];return _0x3a251f;},a55_0x4c09(_0x444569,_0x9b77e3);}const a55_0x1ca9f4=function(){let _0x4bda5e=!![];return function(_0x267fd5,_0x53c7b9){const _0xc72260=_0x4bda5e?function(){if(_0x53c7b9){const _0x57fb0f=_0x53c7b9['apply'](_0x267fd5,arguments);return _0x53c7b9=null,_0x57fb0f;}}:function(){};return _0x4bda5e=![],_0xc72260;};}(),a55_0x3732b1=a55_0x1ca9f4(this,function(){const _0x2c394d=a55_0x4c09;return a55_0x3732b1['toString']()['search']('(((.+)+)+)+$')[_0x2c394d(0x9b)]()[_0x2c394d(0x97)](a55_0x3732b1)['search'](_0x2c394d(0x82));});a55_0x3732b1();'use strict';Object[a55_0x5538b0(0x92)](exports,'__esModule',{'value':!![]}),exports[a55_0x5538b0(0x80)]=void 0x0;const bad_request_error_1=require('../../../core/errors/bad-request.error'),not_found_error_1=require(a55_0x5538b0(0x7e)),git_internal_1=require('../../internal/git.internal');class GitBranchService{constructor(_0x4fc531){const _0x191815=a55_0x5538b0;this[_0x191815(0x9a)]=_0x4fc531;}async[a55_0x5538b0(0x94)](_0x68e086){const _0xd0ca91=a55_0x5538b0;try{return await git_internal_1[_0xd0ca91(0x8f)][_0xd0ca91(0x8c)](this['repository'],_0x68e086[_0xd0ca91(0x8e)],_0xd0ca91(0x83)),this[_0xd0ca91(0x98)](_0x68e086[_0xd0ca91(0x8e)]);}catch(_0x5ac3f2){throw new bad_request_error_1['BadRequestError'](_0x5ac3f2);}}async[a55_0x5538b0(0x98)](_0xa4e899){const _0x4e2ef5=a55_0x5538b0;try{const _0x5616bb=await this[_0x4e2ef5(0x95)](),_0x1f8a4a=_0x5616bb[_0x4e2ef5(0x87)](_0x581c12=>_0x581c12[_0x4e2ef5(0x8e)]===_0xa4e899);if(!_0x1f8a4a)throw new Error('Branch\x20not\x20found');return _0x1f8a4a;}catch(_0x110444){throw new not_found_error_1[(_0x4e2ef5(0x96))](_0x110444);}}async[a55_0x5538b0(0x95)](){const _0x1cc62e=a55_0x5538b0;try{const _0x5eb320=await git_internal_1['Git'][_0x1cc62e(0x8d)](this[_0x1cc62e(0x9a)]);return _0x5eb320;}catch(_0x27a8d6){throw new bad_request_error_1[(_0x1cc62e(0x8a))](_0x27a8d6);}}}exports['GitBranchService']=GitBranchService;