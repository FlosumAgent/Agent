const a51_0x49e6=['0000000000000000000000000000000000000000','fromAzure','BadRequestError','apiUrl','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','refs/heads/','AzureBranchService','2393kzZBcX','GitBranchService','defineProperty','request','1AZaHVS','281378mXROVT','../dto/branch.dto','value','637009NdMGPP','./git-branch.service','default','name','replace','193651KuIOks','getAll','42653zdkHqD','../../../core/errors/bad-request.error','getOne','refs','../../../core/errors/not-found.error','__importDefault','repository','1rurIgW','createRequest','test','NotFoundError','70286gkbvlM','669109ckoQxc','79jcRsOz','typedi','get','apply','constructor','BranchDto','../../git-api/services/azure-api.service'];const a51_0x5be18d=a51_0x4db2;(function(_0x5b78b7,_0x468d15){const _0x200301=a51_0x4db2;while(!![]){try{const _0x579503=parseInt(_0x200301(0x149))*parseInt(_0x200301(0x157))+-parseInt(_0x200301(0x148))+-parseInt(_0x200301(0x164))*parseInt(_0x200301(0x15b))+parseInt(_0x200301(0x147))+parseInt(_0x200301(0x13c))+parseInt(_0x200301(0x143))*parseInt(_0x200301(0x15c))+parseInt(_0x200301(0x15f));if(_0x579503===_0x468d15)break;else _0x5b78b7['push'](_0x5b78b7['shift']());}catch(_0x33c085){_0x5b78b7['push'](_0x5b78b7['shift']());}}}(a51_0x49e6,0x574ed));function a51_0x4db2(_0x2fe058,_0x300f62){return a51_0x4db2=function(_0x2aabea,_0x1b657d){_0x2aabea=_0x2aabea-0x13c;let _0x1de75a=a51_0x49e6[_0x2aabea];return _0x1de75a;},a51_0x4db2(_0x2fe058,_0x300f62);}const a51_0x1de75a=function(){let _0x158a3d=!![];return function(_0x161478,_0x22e631){const _0x22a763=_0x158a3d?function(){const _0x5094cb=a51_0x4db2;if(_0x22e631){const _0x5858d0=_0x22e631[_0x5094cb(0x14c)](_0x161478,arguments);return _0x22e631=null,_0x5858d0;}}:function(){};return _0x158a3d=![],_0x22a763;};}(),a51_0x1b657d=a51_0x1de75a(this,function(){const _0x5b3090=function(){const _0x2a356c=a51_0x4db2,_0x44374f=_0x5b3090[_0x2a356c(0x14d)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x2a356c(0x14d)](_0x2a356c(0x154));return!_0x44374f[_0x2a356c(0x145)](a51_0x1b657d);};return _0x5b3090();});a51_0x1b657d();'use strict';var __importDefault=this&&this[a51_0x5be18d(0x141)]||function(_0x5b280e){return _0x5b280e&&_0x5b280e['__esModule']?_0x5b280e:{'default':_0x5b280e};};Object[a51_0x5be18d(0x159)](exports,'__esModule',{'value':!![]}),exports[a51_0x5be18d(0x156)]=void 0x0;const bad_request_error_1=require(a51_0x5be18d(0x13d)),not_found_error_1=require(a51_0x5be18d(0x140)),azure_api_service_1=require(a51_0x5be18d(0x14f)),typedi_1=__importDefault(require(a51_0x5be18d(0x14a))),branch_dto_1=require(a51_0x5be18d(0x15d)),git_branch_service_1=require(a51_0x5be18d(0x160));class AzureBranchService extends git_branch_service_1[a51_0x5be18d(0x158)]{constructor(_0x37285f){const _0x1d0e77=a51_0x5be18d;super(_0x37285f),this[_0x1d0e77(0x15a)]=this[_0x1d0e77(0x144)]();}[a51_0x5be18d(0x144)](){const _0x4577f9=a51_0x5be18d,_0x234acf=typedi_1[_0x4577f9(0x161)]['get'](azure_api_service_1['AzureApiService']);return _0x234acf[_0x4577f9(0x144)](this[_0x4577f9(0x142)][_0x4577f9(0x153)]);}async[a51_0x5be18d(0x13e)](_0x5f5077){const _0x2a197b=a51_0x5be18d;try{const _0x4b8580=await this['request'][_0x2a197b(0x14b)]('refs/heads/'+_0x5f5077),_0x38a043=_0x4b8580[_0x2a197b(0x15e)],_0x5d0260=_0x38a043['find'](_0x92d714=>_0x92d714[_0x2a197b(0x162)][_0x2a197b(0x163)](_0x2a197b(0x155),'')===_0x5f5077);if(!_0x5d0260)throw new not_found_error_1[(_0x2a197b(0x146))]('Branch\x20not\x20found');return branch_dto_1['BranchDto'][_0x2a197b(0x151)](_0x5d0260);}catch(_0x4ef9d1){throw new not_found_error_1[(_0x2a197b(0x146))](_0x4ef9d1);}}async[a51_0x5be18d(0x165)](){const _0x4b0be8=a51_0x5be18d;try{const _0x5ac015=await this[_0x4b0be8(0x15a)][_0x4b0be8(0x14b)](_0x4b0be8(0x13f));return _0x5ac015[_0x4b0be8(0x15e)]['map'](_0x4e2f5b=>branch_dto_1[_0x4b0be8(0x14e)][_0x4b0be8(0x151)](_0x4e2f5b));}catch(_0x3f9bd2){throw new not_found_error_1['NotFoundError'](_0x3f9bd2);}}async['delete'](_0x593832){const _0x58bca7=a51_0x5be18d;try{await this[_0x58bca7(0x13e)](_0x593832),await this[_0x58bca7(0x15a)]['post'](_0x58bca7(0x13f),[{'name':_0x58bca7(0x155)+_0x593832,'newObjectId':_0x58bca7(0x150),'oldObjectId':_0x58bca7(0x150)}]);}catch(_0x145fd9){throw new bad_request_error_1[(_0x58bca7(0x152))](_0x145fd9);}}}exports[a51_0x5be18d(0x156)]=AzureBranchService;