const a55_0x38c999=a55_0x7aa7;(function(_0x54c002,_0xa25aa){const _0x49aaea=a55_0x7aa7,_0x45e5fa=_0x54c002();while(!![]){try{const _0x20dd09=-parseInt(_0x49aaea(0xd2))/0x1*(parseInt(_0x49aaea(0xd5))/0x2)+-parseInt(_0x49aaea(0xbf))/0x3*(parseInt(_0x49aaea(0xd4))/0x4)+-parseInt(_0x49aaea(0xd0))/0x5*(-parseInt(_0x49aaea(0xbd))/0x6)+parseInt(_0x49aaea(0xc3))/0x7*(parseInt(_0x49aaea(0xcc))/0x8)+-parseInt(_0x49aaea(0xc2))/0x9+parseInt(_0x49aaea(0xd1))/0xa+parseInt(_0x49aaea(0xd3))/0xb;if(_0x20dd09===_0xa25aa)break;else _0x45e5fa['push'](_0x45e5fa['shift']());}catch(_0x1bac8f){_0x45e5fa['push'](_0x45e5fa['shift']());}}}(a55_0x4a30,0x54229));function a55_0x4a30(){const _0x5b3354=['20645txloBq','5896790aeJdAd','255589PfEolO','159775OSsknW','47452voQMmm','2xVEpKF','createEmptyBranch','constructor','294VLFPXL','search','69xoyXrc','BadRequestError','toString','1480842vTCCIm','7qbihEh','create','(((.+)+)+)+$','../../../core/errors/bad-request.error','GitBranchService','Git','getAll','repository','defineProperty','1848544FcpiIK','__esModule','name','init\x20branch'];a55_0x4a30=function(){return _0x5b3354;};return a55_0x4a30();}const a55_0x3625b1=function(){let _0x32ad9d=!![];return function(_0x580e27,_0x4e9ee4){const _0x29b9b6=_0x32ad9d?function(){if(_0x4e9ee4){const _0x4b6f41=_0x4e9ee4['apply'](_0x580e27,arguments);return _0x4e9ee4=null,_0x4b6f41;}}:function(){};return _0x32ad9d=![],_0x29b9b6;};}(),a55_0x1e3607=a55_0x3625b1(this,function(){const _0x1308de=a55_0x7aa7;return a55_0x1e3607[_0x1308de(0xc1)]()['search'](_0x1308de(0xc5))[_0x1308de(0xc1)]()[_0x1308de(0xbc)](a55_0x1e3607)[_0x1308de(0xbe)](_0x1308de(0xc5));});a55_0x1e3607();'use strict';Object[a55_0x38c999(0xcb)](exports,a55_0x38c999(0xcd),{'value':!![]}),exports[a55_0x38c999(0xc7)]=void 0x0;const bad_request_error_1=require(a55_0x38c999(0xc6)),not_found_error_1=require('../../../core/errors/not-found.error'),git_internal_1=require('../../internal/git.internal');function a55_0x7aa7(_0x58323f,_0x2c80d5){const _0x448047=a55_0x4a30();return a55_0x7aa7=function(_0x1e3607,_0x3625b1){_0x1e3607=_0x1e3607-0xbb;let _0x4a3055=_0x448047[_0x1e3607];return _0x4a3055;},a55_0x7aa7(_0x58323f,_0x2c80d5);}class GitBranchService{constructor(_0x3c760a){const _0x3339c5=a55_0x38c999;this[_0x3339c5(0xca)]=_0x3c760a;}async[a55_0x38c999(0xc4)](_0x511946){const _0x12a7e0=a55_0x38c999;try{return await git_internal_1[_0x12a7e0(0xc8)][_0x12a7e0(0xbb)](this[_0x12a7e0(0xca)],_0x511946[_0x12a7e0(0xce)],_0x12a7e0(0xcf)),this['getOne'](_0x511946[_0x12a7e0(0xce)]);}catch(_0x40e09b){throw new bad_request_error_1['BadRequestError'](_0x40e09b);}}async['getOne'](_0x523459){const _0xeb45ce=a55_0x38c999;try{const _0xb8a35f=await this[_0xeb45ce(0xc9)](),_0xc14c4b=_0xb8a35f['find'](_0xb5c91=>_0xb5c91['name']===_0x523459);if(!_0xc14c4b)throw new Error('Branch\x20not\x20found');return _0xc14c4b;}catch(_0x2bdce5){throw new not_found_error_1['NotFoundError'](_0x2bdce5);}}async[a55_0x38c999(0xc9)](){const _0x7cc88a=a55_0x38c999;try{const _0x247cf4=await git_internal_1[_0x7cc88a(0xc8)]['getRepositoryBranches'](this[_0x7cc88a(0xca)]);return _0x247cf4;}catch(_0x3f3ca3){throw new bad_request_error_1[(_0x7cc88a(0xc0))](_0x3f3ca3);}}}exports['GitBranchService']=GitBranchService;