const a51_0x272b=['fromAzure','return\x20/\x22\x20+\x20this\x20+\x20\x22/','280460mRStuP','269595dixnZn','delete','getOne','BranchDto','328198QxvlFE','__importDefault','Branch\x20not\x20found','replace','953aQirwp','../../../core/errors/bad-request.error','get','./git-branch.service','constructor','../../../core/errors/not-found.error','GitBranchService','repository','214651BJFKiL','../dto/branch.dto','defineProperty','35951tGijST','map','NotFoundError','default','refs/heads/','post','124fWkwpY','__esModule','AzureApiService','name','refs','request','3SlhZHz','value','find','AzureBranchService','createRequest','BadRequestError','apply','getAll','1qkyJUO','209899kyudMl','0000000000000000000000000000000000000000'];const a51_0x39474e=a51_0x3b2b;(function(_0x371b29,_0x2d193d){const _0x5ce970=a51_0x3b2b;while(!![]){try{const _0x3d6e51=-parseInt(_0x5ce970(0xd4))*-parseInt(_0x5ce970(0xe5))+-parseInt(_0x5ce970(0xc6))*parseInt(_0x5ce970(0xcc))+parseInt(_0x5ce970(0xd0))+-parseInt(_0x5ce970(0xcb))+parseInt(_0x5ce970(0xdc))+parseInt(_0x5ce970(0xc7))+parseInt(_0x5ce970(0xeb))*-parseInt(_0x5ce970(0xdf));if(_0x3d6e51===_0x2d193d)break;else _0x371b29['push'](_0x371b29['shift']());}catch(_0x246bd5){_0x371b29['push'](_0x371b29['shift']());}}}(a51_0x272b,0x34014));const a51_0x51d69d=function(){let _0x2923bc=!![];return function(_0x42402e,_0xdf3c8b){const _0x22d5fb=_0x2923bc?function(){const _0x4d3657=a51_0x3b2b;if(_0xdf3c8b){const _0x35223d=_0xdf3c8b[_0x4d3657(0xc4)](_0x42402e,arguments);return _0xdf3c8b=null,_0x35223d;}}:function(){};return _0x2923bc=![],_0x22d5fb;};}(),a51_0x394e42=a51_0x51d69d(this,function(){const _0x176e11=function(){const _0x5af74c=a51_0x3b2b,_0x502429=_0x176e11[_0x5af74c(0xd8)](_0x5af74c(0xca))()[_0x5af74c(0xd8)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x502429['test'](a51_0x394e42);};return _0x176e11();});a51_0x394e42();'use strict';function a51_0x3b2b(_0x1ca759,_0x56a681){return a51_0x3b2b=function(_0xbeff25,_0x394e42){_0xbeff25=_0xbeff25-0xc0;let _0x51d69d=a51_0x272b[_0xbeff25];return _0x51d69d;},a51_0x3b2b(_0x1ca759,_0x56a681);}var __importDefault=this&&this[a51_0x39474e(0xd1)]||function(_0x15179b){return _0x15179b&&_0x15179b['__esModule']?_0x15179b:{'default':_0x15179b};};Object[a51_0x39474e(0xde)](exports,a51_0x39474e(0xe6),{'value':!![]}),exports[a51_0x39474e(0xc1)]=void 0x0;const bad_request_error_1=require(a51_0x39474e(0xd5)),not_found_error_1=require(a51_0x39474e(0xd9)),azure_api_service_1=require('../../git-api/services/azure-api.service'),typedi_1=__importDefault(require('typedi')),branch_dto_1=require(a51_0x39474e(0xdd)),git_branch_service_1=require(a51_0x39474e(0xd7));class AzureBranchService extends git_branch_service_1[a51_0x39474e(0xda)]{constructor(_0x1b3855){const _0x3782ea=a51_0x39474e;super(_0x1b3855),this[_0x3782ea(0xea)]=this[_0x3782ea(0xc2)]();}[a51_0x39474e(0xc2)](){const _0x461735=a51_0x39474e,_0x5d12d7=typedi_1[_0x461735(0xe2)][_0x461735(0xd6)](azure_api_service_1[_0x461735(0xe7)]);return _0x5d12d7[_0x461735(0xc2)](this[_0x461735(0xdb)]['apiUrl']);}async[a51_0x39474e(0xce)](_0x2d844c){const _0x556482=a51_0x39474e;try{const _0x4bb396=await this['request']['get'](_0x556482(0xe3)+_0x2d844c),_0xe7e37b=_0x4bb396[_0x556482(0xec)],_0x4d0012=_0xe7e37b[_0x556482(0xc0)](_0x2bbe4d=>_0x2bbe4d[_0x556482(0xe8)][_0x556482(0xd3)]('refs/heads/','')===_0x2d844c);if(!_0x4d0012)throw new not_found_error_1[(_0x556482(0xe1))](_0x556482(0xd2));return branch_dto_1[_0x556482(0xcf)][_0x556482(0xc9)](_0x4d0012);}catch(_0x2a56eb){throw new not_found_error_1[(_0x556482(0xe1))](_0x2a56eb);}}async[a51_0x39474e(0xc5)](){const _0x387632=a51_0x39474e;try{const _0x9dbba1=await this['request']['get']('refs');return _0x9dbba1[_0x387632(0xec)][_0x387632(0xe0)](_0x1fd466=>branch_dto_1[_0x387632(0xcf)][_0x387632(0xc9)](_0x1fd466));}catch(_0x2d1b03){throw new not_found_error_1[(_0x387632(0xe1))](_0x2d1b03);}}async[a51_0x39474e(0xcd)](_0x317c3f){const _0x1a000=a51_0x39474e;try{await this[_0x1a000(0xce)](_0x317c3f),await this[_0x1a000(0xea)][_0x1a000(0xe4)](_0x1a000(0xe9),[{'name':_0x1a000(0xe3)+_0x317c3f,'newObjectId':_0x1a000(0xc8),'oldObjectId':_0x1a000(0xc8)}]);}catch(_0x3d4d38){throw new bad_request_error_1[(_0x1a000(0xc3))](_0x3d4d38);}}}exports[a51_0x39474e(0xc1)]=AzureBranchService;