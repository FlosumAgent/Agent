const a91_0x358d=['repositories/','apiUrl','function','1ZVfwof','AzureApiService','/_apis/git','../../../core/errors/bad-request.error','request','GitRepoService','test','__esModule','patch','AzureRepoService','268609Mmdppx','master','1gmhTuO','project','apply','1jUZaUX','3HbvSxI','metadata','./git-repo.service','repositories','../../../core/errors/not-found.error','fromAzure','152809yfhqlx','11lbAGCV','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','253720KQFmPK','79843fczjsv','Repo','createEmptyBranch','length','getOne','azure','defaults','post','../../shared/services/auth-settings.service','Inject','constructor','__decorate','../../git-api/services/azure-api.service','create','NotFoundError','defineProperty','autoInit','288589uhObjk','__param','3wDuqNh','defaultBranch','delete','name','get','design:paramtypes','organization','../../internal/git.internal','24235TFwjXl','object','32423sTLweZ','Git'];const a91_0x27ba81=a91_0x5d69;(function(_0x44fd08,_0x491f95){const _0x53a74e=a91_0x5d69;while(!![]){try{const _0x4450a0=-parseInt(_0x53a74e(0x12a))*-parseInt(_0x53a74e(0x141))+parseInt(_0x53a74e(0x11e))*parseInt(_0x53a74e(0x120))+parseInt(_0x53a74e(0x12e))*-parseInt(_0x53a74e(0x123))+parseInt(_0x53a74e(0x149))*-parseInt(_0x53a74e(0x12b))+parseInt(_0x53a74e(0x124))*-parseInt(_0x53a74e(0x14b))+parseInt(_0x53a74e(0x12d))+parseInt(_0x53a74e(0x150))*-parseInt(_0x53a74e(0x13f));if(_0x4450a0===_0x491f95)break;else _0x44fd08['push'](_0x44fd08['shift']());}catch(_0x19dab5){_0x44fd08['push'](_0x44fd08['shift']());}}}(a91_0x358d,0x3ca96));const a91_0x300e2b=function(){let _0xb4cf83=!![];return function(_0x151b43,_0xebd90f){const _0xbd690c=_0xb4cf83?function(){const _0x535707=a91_0x5d69;if(_0xebd90f){const _0x90dd21=_0xebd90f[_0x535707(0x122)](_0x151b43,arguments);return _0xebd90f=null,_0x90dd21;}}:function(){};return _0xb4cf83=![],_0xbd690c;};}(),a91_0x43ac61=a91_0x300e2b(this,function(){const _0x1cc0c9=function(){const _0x2652f9=a91_0x5d69,_0x342fe0=_0x1cc0c9[_0x2652f9(0x138)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor'](_0x2652f9(0x12c));return!_0x342fe0[_0x2652f9(0x11a)](a91_0x43ac61);};return _0x1cc0c9();});a91_0x43ac61();'use strict';var __decorate=this&&this[a91_0x27ba81(0x139)]||function(_0x482c58,_0x5e4c58,_0x2f5227,_0x3bfee4){const _0x47598b=a91_0x27ba81;var _0x4c4031=arguments[_0x47598b(0x131)],_0x1d193d=_0x4c4031<0x3?_0x5e4c58:_0x3bfee4===null?_0x3bfee4=Object['getOwnPropertyDescriptor'](_0x5e4c58,_0x2f5227):_0x3bfee4,_0x23d761;if(typeof Reflect==='object'&&typeof Reflect['decorate']===_0x47598b(0x14f))_0x1d193d=Reflect['decorate'](_0x482c58,_0x5e4c58,_0x2f5227,_0x3bfee4);else{for(var _0x565578=_0x482c58[_0x47598b(0x131)]-0x1;_0x565578>=0x0;_0x565578--)if(_0x23d761=_0x482c58[_0x565578])_0x1d193d=(_0x4c4031<0x3?_0x23d761(_0x1d193d):_0x4c4031>0x3?_0x23d761(_0x5e4c58,_0x2f5227,_0x1d193d):_0x23d761(_0x5e4c58,_0x2f5227))||_0x1d193d;}return _0x4c4031>0x3&&_0x1d193d&&Object[_0x47598b(0x13d)](_0x5e4c58,_0x2f5227,_0x1d193d),_0x1d193d;},__metadata=this&&this['__metadata']||function(_0x2d1a1a,_0x3ebad0){const _0x555727=a91_0x27ba81;if(typeof Reflect===_0x555727(0x14a)&&typeof Reflect[_0x555727(0x125)]===_0x555727(0x14f))return Reflect[_0x555727(0x125)](_0x2d1a1a,_0x3ebad0);},__param=this&&this[a91_0x27ba81(0x140)]||function(_0x5a51c5,_0x2e8c11){return function(_0x4f075f,_0x4e2d24){_0x2e8c11(_0x4f075f,_0x4e2d24,_0x5a51c5);};};Object[a91_0x27ba81(0x13d)](exports,a91_0x27ba81(0x11b),{'value':!![]}),exports[a91_0x27ba81(0x11d)]=void 0x0;const bad_request_error_1=require(a91_0x27ba81(0x117)),not_found_error_1=require(a91_0x27ba81(0x128)),azure_api_service_1=require(a91_0x27ba81(0x13a)),auth_settings_service_1=require(a91_0x27ba81(0x136)),typedi_1=require('typedi'),git_internal_1=require(a91_0x27ba81(0x148)),repo_class_1=require('../repo.class'),git_repo_service_1=require(a91_0x27ba81(0x126));let AzureRepoService=class AzureRepoService extends git_repo_service_1[a91_0x27ba81(0x119)]{constructor(_0x4dd95a,_0x5a2a32){const _0x2d4417=a91_0x27ba81;super(_0x4dd95a),this[_0x2d4417(0x147)]=_0x5a2a32[_0x2d4417(0x133)]['organization'],this[_0x2d4417(0x121)]=_0x5a2a32['azure'][_0x2d4417(0x121)],this[_0x2d4417(0x118)][_0x2d4417(0x134)]['baseURL']=''+this['request'][_0x2d4417(0x134)]['baseURL']+this['organization']+'/'+this[_0x2d4417(0x121)]+_0x2d4417(0x116);}async[a91_0x27ba81(0x13b)](_0x11c5e6){const _0x2f99fe=a91_0x27ba81;try{const _0x327695=await this[_0x2f99fe(0x118)][_0x2f99fe(0x135)](_0x2f99fe(0x127),_0x11c5e6),_0x3d1ebf=repo_class_1['Repo'][_0x2f99fe(0x129)](_0x327695);return _0x11c5e6[_0x2f99fe(0x13e)]&&await git_internal_1[_0x2f99fe(0x14c)][_0x2f99fe(0x130)](_0x3d1ebf,_0x11c5e6[_0x2f99fe(0x142)]||_0x2f99fe(0x11f)),this[_0x2f99fe(0x132)](_0x3d1ebf[_0x2f99fe(0x144)]);}catch(_0x18e46a){throw new bad_request_error_1['BadRequestError'](_0x18e46a);}}async['getOne'](_0x14b095){const _0x446bdb=a91_0x27ba81;try{const _0x388cf6=await this['request'][_0x446bdb(0x145)](_0x446bdb(0x14d)+_0x14b095);return repo_class_1[_0x446bdb(0x12f)][_0x446bdb(0x129)](_0x388cf6);}catch(_0x40940a){throw new not_found_error_1[(_0x446bdb(0x13c))](_0x40940a);}}async['update'](_0x344cbd,_0xc1cef3){const _0x92f07d=a91_0x27ba81;try{const _0x325d5e=await this[_0x92f07d(0x132)](_0x344cbd),_0x5969ed=await this[_0x92f07d(0x118)][_0x92f07d(0x11c)](_0x325d5e[_0x92f07d(0x14e)],_0xc1cef3);return repo_class_1[_0x92f07d(0x12f)]['fromAzure'](_0x5969ed);}catch(_0x16f3d5){throw new bad_request_error_1['BadRequestError'](_0x16f3d5);}}async[a91_0x27ba81(0x143)](_0x2db4af){const _0x5590b0=a91_0x27ba81;try{await this[_0x5590b0(0x118)]['delete'](_0x5590b0(0x14d)+_0x2db4af);}catch(_0x4c95ea){throw new not_found_error_1[(_0x5590b0(0x13c))](_0x4c95ea);}}};function a91_0x5d69(_0x15b772,_0x4d2a66){return a91_0x5d69=function(_0x5e85cf,_0x43ac61){_0x5e85cf=_0x5e85cf-0x115;let _0x300e2b=a91_0x358d[_0x5e85cf];return _0x300e2b;},a91_0x5d69(_0x15b772,_0x4d2a66);}AzureRepoService=__decorate([typedi_1['Service'](),__param(0x1,typedi_1[a91_0x27ba81(0x137)]()),__metadata(a91_0x27ba81(0x146),[azure_api_service_1[a91_0x27ba81(0x115)],auth_settings_service_1['AuthSettingsService']])],AzureRepoService),exports['AzureRepoService']=AzureRepoService;