const a60_0x6a22=['test','./git-branch.service','472883nqqPSR','apply','getOne','fromGitlab','../../git-api/services/gitlab-api.service','map','apiUrl','607863ZcsLoN','post','3231rVAyXP','GitlabBranchService','__esModule','1qpBcFC','createRequest','request','delete','return\x20/\x22\x20+\x20this\x20+\x20\x22/','BranchDto','sha','repository/branches/','59ldLIKz','get','getAll','repository/branches','452587JNoaDI','NotFoundError','../dto/branch.dto','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','311525MJqdpc','1DXoInU','BadRequestError','1261701ePoVIl','GitlabApiService','typedi','1nTQNRe','GitBranchService','1oCLiqo','name','253901LWHJos'];const a60_0x1c6562=a60_0x50ea;(function(_0x35c13c,_0x48ad45){const _0x2becf9=a60_0x50ea;while(!![]){try{const _0x29a9d9=parseInt(_0x2becf9(0x198))*-parseInt(_0x2becf9(0x188))+parseInt(_0x2becf9(0x194))*-parseInt(_0x2becf9(0x1a0))+-parseInt(_0x2becf9(0x1a2))*-parseInt(_0x2becf9(0x19e))+-parseInt(_0x2becf9(0x183))*parseInt(_0x2becf9(0x199))+parseInt(_0x2becf9(0x17c))+-parseInt(_0x2becf9(0x190))*parseInt(_0x2becf9(0x185))+parseInt(_0x2becf9(0x19b));if(_0x29a9d9===_0x48ad45)break;else _0x35c13c['push'](_0x35c13c['shift']());}catch(_0x56c902){_0x35c13c['push'](_0x35c13c['shift']());}}}(a60_0x6a22,0x67f99));const a60_0x24bc62=function(){let _0x3e4350=!![];return function(_0x2ed8fa,_0x8ff73c){const _0x51f823=_0x3e4350?function(){const _0xc776c9=a60_0x50ea;if(_0x8ff73c){const _0x54f906=_0x8ff73c[_0xc776c9(0x17d)](_0x2ed8fa,arguments);return _0x8ff73c=null,_0x54f906;}}:function(){};return _0x3e4350=![],_0x51f823;};}(),a60_0x230ddb=a60_0x24bc62(this,function(){const _0x3dbf93=function(){const _0x2341bc=a60_0x50ea,_0x1e05cd=_0x3dbf93['constructor'](_0x2341bc(0x18c))()['constructor'](_0x2341bc(0x197));return!_0x1e05cd[_0x2341bc(0x1a3)](a60_0x230ddb);};return _0x3dbf93();});a60_0x230ddb();function a60_0x50ea(_0x45a8c9,_0x35c8c2){return a60_0x50ea=function(_0x1a87bf,_0x230ddb){_0x1a87bf=_0x1a87bf-0x17c;let _0x24bc62=a60_0x6a22[_0x1a87bf];return _0x24bc62;},a60_0x50ea(_0x45a8c9,_0x35c8c2);}'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5b05bd){return _0x5b05bd&&_0x5b05bd['__esModule']?_0x5b05bd:{'default':_0x5b05bd};};Object['defineProperty'](exports,a60_0x1c6562(0x187),{'value':!![]}),exports[a60_0x1c6562(0x186)]=void 0x0;const bad_request_error_1=require('../../../core/errors/bad-request.error'),not_found_error_1=require('../../../core/errors/not-found.error'),gitlab_api_service_1=require(a60_0x1c6562(0x180)),typedi_1=__importDefault(require(a60_0x1c6562(0x19d))),branch_dto_1=require(a60_0x1c6562(0x196)),git_branch_service_1=require(a60_0x1c6562(0x1a4));class GitlabBranchService extends git_branch_service_1[a60_0x1c6562(0x19f)]{constructor(_0x4f4669){const _0x1f8f3f=a60_0x1c6562;super(_0x4f4669),this[_0x1f8f3f(0x18a)]=this[_0x1f8f3f(0x189)]();}['createRequest'](){const _0x43e3de=a60_0x1c6562,_0x5054b9=typedi_1['default'][_0x43e3de(0x191)](gitlab_api_service_1[_0x43e3de(0x19c)]);return _0x5054b9[_0x43e3de(0x189)](this['repository'][_0x43e3de(0x182)]);}async['create'](_0x40c6b9){const _0x2f4d5f=a60_0x1c6562;try{const _0x44e5c5=await this[_0x2f4d5f(0x18a)][_0x2f4d5f(0x184)]('repository/branches',{'branch':_0x40c6b9[_0x2f4d5f(0x1a1)],'ref':_0x40c6b9[_0x2f4d5f(0x18e)]});return branch_dto_1[_0x2f4d5f(0x18d)][_0x2f4d5f(0x17f)](_0x44e5c5);}catch(_0x127c0d){throw new bad_request_error_1[(_0x2f4d5f(0x19a))](_0x127c0d);}}async[a60_0x1c6562(0x17e)](_0x326591){const _0x1c216e=a60_0x1c6562;try{const _0x4a4094=await this[_0x1c216e(0x18a)][_0x1c216e(0x191)](_0x1c216e(0x18f)+_0x326591);return branch_dto_1[_0x1c216e(0x18d)][_0x1c216e(0x17f)](_0x4a4094);}catch(_0x49c9ca){throw new not_found_error_1[(_0x1c216e(0x195))](_0x49c9ca);}}async[a60_0x1c6562(0x192)](){const _0x24c987=a60_0x1c6562;try{const _0x5685b0=await this[_0x24c987(0x18a)][_0x24c987(0x191)](_0x24c987(0x193));return _0x5685b0[_0x24c987(0x181)](_0x56dcb1=>branch_dto_1[_0x24c987(0x18d)][_0x24c987(0x17f)](_0x56dcb1));}catch(_0x35f669){throw new not_found_error_1[(_0x24c987(0x195))](_0x35f669);}}async[a60_0x1c6562(0x18b)](_0x24a261){const _0x58332f=a60_0x1c6562;try{await this[_0x58332f(0x18a)][_0x58332f(0x18b)](_0x58332f(0x18f)+_0x24a261);}catch(_0x587d23){throw new bad_request_error_1[(_0x58332f(0x19a))](_0x587d23);}}}exports[a60_0x1c6562(0x186)]=GitlabBranchService;