function a51_0x66ba(){const _0x392b78=['toString','(((.+)+)+)+$','__esModule','696744jVBSlm','value','261252pYLYjP','getOne','repository','request','../../../core/errors/bad-request.error','GitBranchService','1372483ckZFDl','delete','Branch\x20not\x20found','fromAzure','post','replace','BadRequestError','get','defineProperty','2yWxVrU','constructor','5076AFSMdk','../dto/branch.dto','find','148LVVhli','getAll','refs','createRequest','../../git-api/services/azure-api.service','../../../core/errors/not-found.error','NotFoundError','12785MZuKRY','name','0000000000000000000000000000000000000000','6GjLsEL','refs/heads/','search','apply','__importDefault','default','AzureApiService','5596950pUohTm','131760ioqogi','typedi'];a51_0x66ba=function(){return _0x392b78;};return a51_0x66ba();}const a51_0x4ec083=a51_0x4633;(function(_0x1e97bc,_0x2589ed){const _0x2558ab=a51_0x4633,_0x5a58ba=_0x1e97bc();while(!![]){try{const _0x5fddd7=-parseInt(_0x2558ab(0x169))/0x1+-parseInt(_0x2558ab(0x152))/0x2*(parseInt(_0x2558ab(0x170))/0x3)+parseInt(_0x2558ab(0x157))/0x4*(-parseInt(_0x2558ab(0x15e))/0x5)+parseInt(_0x2558ab(0x161))/0x6*(-parseInt(_0x2558ab(0x149))/0x7)+parseInt(_0x2558ab(0x16e))/0x8+-parseInt(_0x2558ab(0x154))/0x9+parseInt(_0x2558ab(0x168))/0xa;if(_0x5fddd7===_0x2589ed)break;else _0x5a58ba['push'](_0x5a58ba['shift']());}catch(_0x5f4575){_0x5a58ba['push'](_0x5a58ba['shift']());}}}(a51_0x66ba,0x215fe));function a51_0x4633(_0x22fc18,_0x102f64){const _0x5985d3=a51_0x66ba();return a51_0x4633=function(_0x5623ae,_0x5b05ef){_0x5623ae=_0x5623ae-0x145;let _0x66bace=_0x5985d3[_0x5623ae];return _0x66bace;},a51_0x4633(_0x22fc18,_0x102f64);}const a51_0x5b05ef=function(){let _0x250d5e=!![];return function(_0x26fd7a,_0x4d1f57){const _0x398cd5=_0x250d5e?function(){const _0x1748d7=a51_0x4633;if(_0x4d1f57){const _0x38be21=_0x4d1f57[_0x1748d7(0x164)](_0x26fd7a,arguments);return _0x4d1f57=null,_0x38be21;}}:function(){};return _0x250d5e=![],_0x398cd5;};}(),a51_0x5623ae=a51_0x5b05ef(this,function(){const _0x1f3b5a=a51_0x4633;return a51_0x5623ae['toString']()[_0x1f3b5a(0x163)](_0x1f3b5a(0x16c))[_0x1f3b5a(0x16b)]()[_0x1f3b5a(0x153)](a51_0x5623ae)['search']('(((.+)+)+)+$');});a51_0x5623ae();'use strict';var __importDefault=this&&this[a51_0x4ec083(0x165)]||function(_0x5b12ad){const _0x3ce372=a51_0x4ec083;return _0x5b12ad&&_0x5b12ad[_0x3ce372(0x16d)]?_0x5b12ad:{'default':_0x5b12ad};};Object[a51_0x4ec083(0x151)](exports,a51_0x4ec083(0x16d),{'value':!![]}),exports['AzureBranchService']=void 0x0;const bad_request_error_1=require(a51_0x4ec083(0x147)),not_found_error_1=require(a51_0x4ec083(0x15c)),azure_api_service_1=require(a51_0x4ec083(0x15b)),typedi_1=__importDefault(require(a51_0x4ec083(0x16a))),branch_dto_1=require(a51_0x4ec083(0x155)),git_branch_service_1=require('./git-branch.service');class AzureBranchService extends git_branch_service_1[a51_0x4ec083(0x148)]{constructor(_0x2d2312){const _0x97b0a9=a51_0x4ec083;super(_0x2d2312),this['request']=this[_0x97b0a9(0x15a)]();}[a51_0x4ec083(0x15a)](){const _0x2f2390=a51_0x4ec083,_0x2821a0=typedi_1[_0x2f2390(0x166)][_0x2f2390(0x150)](azure_api_service_1[_0x2f2390(0x167)]);return _0x2821a0[_0x2f2390(0x15a)](this[_0x2f2390(0x145)]['apiUrl']);}async['getOne'](_0x3a14ba){const _0x2c1517=a51_0x4ec083;try{const _0x3c9013=await this[_0x2c1517(0x146)][_0x2c1517(0x150)](_0x2c1517(0x162)+_0x3a14ba),_0x5675be=_0x3c9013[_0x2c1517(0x16f)],_0x383067=_0x5675be[_0x2c1517(0x156)](_0x5ca495=>_0x5ca495[_0x2c1517(0x15f)][_0x2c1517(0x14e)](_0x2c1517(0x162),'')===_0x3a14ba);if(!_0x383067)throw new not_found_error_1[(_0x2c1517(0x15d))](_0x2c1517(0x14b));return branch_dto_1['BranchDto'][_0x2c1517(0x14c)](_0x383067);}catch(_0x5f2b29){throw new not_found_error_1['NotFoundError'](_0x5f2b29);}}async[a51_0x4ec083(0x158)](){const _0x18071f=a51_0x4ec083;try{const _0x28cc5=await this[_0x18071f(0x146)][_0x18071f(0x150)]('refs');return _0x28cc5[_0x18071f(0x16f)]['map'](_0x186214=>branch_dto_1['BranchDto'][_0x18071f(0x14c)](_0x186214));}catch(_0x2cf7c1){throw new not_found_error_1['NotFoundError'](_0x2cf7c1);}}async[a51_0x4ec083(0x14a)](_0x39a8b0){const _0x52502d=a51_0x4ec083;try{await this[_0x52502d(0x171)](_0x39a8b0),await this[_0x52502d(0x146)][_0x52502d(0x14d)](_0x52502d(0x159),[{'name':_0x52502d(0x162)+_0x39a8b0,'newObjectId':_0x52502d(0x160),'oldObjectId':_0x52502d(0x160)}]);}catch(_0x22bf85){throw new bad_request_error_1[(_0x52502d(0x14f))](_0x22bf85);}}}exports['AzureBranchService']=AzureBranchService;