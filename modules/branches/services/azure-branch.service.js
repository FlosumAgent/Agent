const a51_0x3c8b=['0000000000000000000000000000000000000000','803834uYfIqP','value','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','290BDOgwo','default','../../git-api/services/azure-api.service','__importDefault','BadRequestError','322869vIsWmN','2DFABsf','2JNRGhI','get','refs/heads/','1edvMNo','getAll','getOne','__esModule','refs','createRequest','5301930KmHTUg','fromAzure','1024411hbKVSw','defineProperty','../dto/branch.dto','delete','repository','4088YtCcPB','4668fAkhtl','./git-branch.service','NotFoundError','9LPGevo','apiUrl','193oIQvuW','GitBranchService','BranchDto','../../../core/errors/bad-request.error','constructor','request','post','AzureApiService','44808iwSdGd','AzureBranchService','typedi','replace','apply'];const a51_0xd0de68=a51_0x1e26;function a51_0x1e26(_0x53b0a2,_0x517432){return a51_0x1e26=function(_0x91f186,_0x32bf45){_0x91f186=_0x91f186-0x1d0;let _0x34711e=a51_0x3c8b[_0x91f186];return _0x34711e;},a51_0x1e26(_0x53b0a2,_0x517432);}(function(_0x729390,_0xa860e9){const _0x18e8e8=a51_0x1e26;while(!![]){try{const _0x5f4964=parseInt(_0x18e8e8(0x1e9))*-parseInt(_0x18e8e8(0x1ee))+parseInt(_0x18e8e8(0x1d7))*parseInt(_0x18e8e8(0x1d6))+parseInt(_0x18e8e8(0x1fc))*-parseInt(_0x18e8e8(0x1d8))+parseInt(_0x18e8e8(0x1db))*-parseInt(_0x18e8e8(0x1e3))+parseInt(_0x18e8e8(0x1e8))*-parseInt(_0x18e8e8(0x1d1))+parseInt(_0x18e8e8(0x1f6))*-parseInt(_0x18e8e8(0x1ec))+parseInt(_0x18e8e8(0x1e1));if(_0x5f4964===_0xa860e9)break;else _0x729390['push'](_0x729390['shift']());}catch(_0x5bfe69){_0x729390['push'](_0x729390['shift']());}}}(a51_0x3c8b,0xc9a11));const a51_0x34711e=function(){let _0x4c468c=!![];return function(_0x186384,_0x3f8d32){const _0x32ebe2=_0x4c468c?function(){const _0x388386=a51_0x1e26;if(_0x3f8d32){const _0x3207e7=_0x3f8d32[_0x388386(0x1fa)](_0x186384,arguments);return _0x3f8d32=null,_0x3207e7;}}:function(){};return _0x4c468c=![],_0x32ebe2;};}(),a51_0x32bf45=a51_0x34711e(this,function(){const _0x3504d3=function(){const _0x39ee03=a51_0x1e26,_0x48f38c=_0x3504d3[_0x39ee03(0x1f2)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x39ee03(0x1f2)](_0x39ee03(0x1d0));return!_0x48f38c['test'](a51_0x32bf45);};return _0x3504d3();});a51_0x32bf45();'use strict';var __importDefault=this&&this[a51_0xd0de68(0x1d4)]||function(_0x382bc0){const _0x276bf1=a51_0xd0de68;return _0x382bc0&&_0x382bc0[_0x276bf1(0x1de)]?_0x382bc0:{'default':_0x382bc0};};Object[a51_0xd0de68(0x1e4)](exports,'__esModule',{'value':!![]}),exports[a51_0xd0de68(0x1f7)]=void 0x0;const bad_request_error_1=require(a51_0xd0de68(0x1f1)),not_found_error_1=require('../../../core/errors/not-found.error'),azure_api_service_1=require(a51_0xd0de68(0x1d3)),typedi_1=__importDefault(require(a51_0xd0de68(0x1f8))),branch_dto_1=require(a51_0xd0de68(0x1e5)),git_branch_service_1=require(a51_0xd0de68(0x1ea));class AzureBranchService extends git_branch_service_1[a51_0xd0de68(0x1ef)]{constructor(_0x1712b6){const _0x19284e=a51_0xd0de68;super(_0x1712b6),this[_0x19284e(0x1f3)]=this[_0x19284e(0x1e0)]();}['createRequest'](){const _0x15e168=a51_0xd0de68,_0x22d94f=typedi_1[_0x15e168(0x1d2)][_0x15e168(0x1d9)](azure_api_service_1[_0x15e168(0x1f5)]);return _0x22d94f[_0x15e168(0x1e0)](this[_0x15e168(0x1e7)][_0x15e168(0x1ed)]);}async[a51_0xd0de68(0x1dd)](_0x51eefd){const _0x23b178=a51_0xd0de68;try{const _0x40a489=await this['request'][_0x23b178(0x1d9)](_0x23b178(0x1da)+_0x51eefd),_0xf9165c=_0x40a489[_0x23b178(0x1fd)],_0x8e5757=_0xf9165c['find'](_0x49937a=>_0x49937a['name'][_0x23b178(0x1f9)](_0x23b178(0x1da),'')===_0x51eefd);if(!_0x8e5757)throw new not_found_error_1[(_0x23b178(0x1eb))]('Branch\x20not\x20found');return branch_dto_1['BranchDto']['fromAzure'](_0x8e5757);}catch(_0x526266){throw new not_found_error_1[(_0x23b178(0x1eb))](_0x526266);}}async[a51_0xd0de68(0x1dc)](){const _0x59c6cf=a51_0xd0de68;try{const _0x14c277=await this[_0x59c6cf(0x1f3)][_0x59c6cf(0x1d9)](_0x59c6cf(0x1df));return _0x14c277['value']['map'](_0x13d905=>branch_dto_1[_0x59c6cf(0x1f0)][_0x59c6cf(0x1e2)](_0x13d905));}catch(_0x1de6db){throw new not_found_error_1['NotFoundError'](_0x1de6db);}}async[a51_0xd0de68(0x1e6)](_0x15f083){const _0x4e460f=a51_0xd0de68;try{await this['getOne'](_0x15f083),await this[_0x4e460f(0x1f3)][_0x4e460f(0x1f4)]('refs',[{'name':_0x4e460f(0x1da)+_0x15f083,'newObjectId':_0x4e460f(0x1fb),'oldObjectId':_0x4e460f(0x1fb)}]);}catch(_0x23b966){throw new bad_request_error_1[(_0x4e460f(0x1d5))](_0x23b966);}}}exports[a51_0xd0de68(0x1f7)]=AzureBranchService;