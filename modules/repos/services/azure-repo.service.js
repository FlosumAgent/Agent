const a91_0x31ad=['__esModule','createEmptyBranch','GitRepoService','61481ytbZjP','AuthSettingsService','project','BadRequestError','../repo.class','../../internal/git.internal','13gHrHvy','request','master','getOwnPropertyDescriptor','repositories','defaults','name','2245wDKfwF','36724MKqxFU','../../../core/errors/not-found.error','9327TtDxca','autoInit','1JdRfUi','5iabdOm','defaultBranch','getOne','update','repositories/','constructor','apply','typedi','45165RChQzh','post','Service','__decorate','function','../../shared/services/auth-settings.service','110YTvmcF','NotFoundError','../../../core/errors/bad-request.error','../../git-api/services/azure-api.service','delete','defineProperty','fromAzure','azure','Repo','./git-repo.service','__metadata','design:paramtypes','1070lHMeHq','decorate','/_apis/git','create','Inject','organization','79743ASpqVe','85AEkaXS','length','metadata','AzureRepoService','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}'];const a91_0xcd9138=a91_0x16fc;(function(_0x10395a,_0x241407){const _0x5124cc=a91_0x16fc;while(!![]){try{const _0x2c356d=-parseInt(_0x5124cc(0x19a))*parseInt(_0x5124cc(0x1af))+-parseInt(_0x5124cc(0x193))*-parseInt(_0x5124cc(0x187))+parseInt(_0x5124cc(0x1b2))+-parseInt(_0x5124cc(0x1b4))*parseInt(_0x5124cc(0x1a2))+parseInt(_0x5124cc(0x1b0))*-parseInt(_0x5124cc(0x1b5))+-parseInt(_0x5124cc(0x199))+parseInt(_0x5124cc(0x1a8))*parseInt(_0x5124cc(0x1bd));if(_0x2c356d===_0x241407)break;else _0x10395a['push'](_0x10395a['shift']());}catch(_0x21ea2d){_0x10395a['push'](_0x10395a['shift']());}}}(a91_0x31ad,0x30767));function a91_0x16fc(_0x22770c,_0x4504e9){return a91_0x16fc=function(_0x262d95,_0x844168){_0x262d95=_0x262d95-0x184;let _0x1eafbe=a91_0x31ad[_0x262d95];return _0x1eafbe;},a91_0x16fc(_0x22770c,_0x4504e9);}const a91_0x1eafbe=function(){let _0x894788=!![];return function(_0x22382d,_0x2d9dca){const _0x2e43c0=_0x894788?function(){const _0x524d76=a91_0x16fc;if(_0x2d9dca){const _0x4e12de=_0x2d9dca[_0x524d76(0x1bb)](_0x22382d,arguments);return _0x2d9dca=null,_0x4e12de;}}:function(){};return _0x894788=![],_0x2e43c0;};}(),a91_0x844168=a91_0x1eafbe(this,function(){const _0x44e474=function(){const _0x546a4c=a91_0x16fc,_0x1614cf=_0x44e474[_0x546a4c(0x1ba)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x546a4c(0x1ba)](_0x546a4c(0x19e));return!_0x1614cf['test'](a91_0x844168);};return _0x44e474();});a91_0x844168();'use strict';var __decorate=this&&this[a91_0xcd9138(0x184)]||function(_0x29d493,_0x1f6b15,_0x47e5c3,_0x509588){const _0x3875cd=a91_0xcd9138;var _0x1e373a=arguments[_0x3875cd(0x19b)],_0x2dbb19=_0x1e373a<0x3?_0x1f6b15:_0x509588===null?_0x509588=Object[_0x3875cd(0x1ab)](_0x1f6b15,_0x47e5c3):_0x509588,_0x46a01b;if(typeof Reflect==='object'&&typeof Reflect['decorate']===_0x3875cd(0x185))_0x2dbb19=Reflect[_0x3875cd(0x194)](_0x29d493,_0x1f6b15,_0x47e5c3,_0x509588);else{for(var _0x59232d=_0x29d493[_0x3875cd(0x19b)]-0x1;_0x59232d>=0x0;_0x59232d--)if(_0x46a01b=_0x29d493[_0x59232d])_0x2dbb19=(_0x1e373a<0x3?_0x46a01b(_0x2dbb19):_0x1e373a>0x3?_0x46a01b(_0x1f6b15,_0x47e5c3,_0x2dbb19):_0x46a01b(_0x1f6b15,_0x47e5c3))||_0x2dbb19;}return _0x1e373a>0x3&&_0x2dbb19&&Object['defineProperty'](_0x1f6b15,_0x47e5c3,_0x2dbb19),_0x2dbb19;},__metadata=this&&this[a91_0xcd9138(0x191)]||function(_0x1eee6d,_0xc2e865){const _0x1f6746=a91_0xcd9138;if(typeof Reflect==='object'&&typeof Reflect[_0x1f6746(0x19c)]==='function')return Reflect[_0x1f6746(0x19c)](_0x1eee6d,_0xc2e865);},__param=this&&this['__param']||function(_0xab7f95,_0x4e0c95){return function(_0x599ea4,_0x1fa9a9){_0x4e0c95(_0x599ea4,_0x1fa9a9,_0xab7f95);};};Object[a91_0xcd9138(0x18c)](exports,a91_0xcd9138(0x19f),{'value':!![]}),exports[a91_0xcd9138(0x19d)]=void 0x0;const bad_request_error_1=require(a91_0xcd9138(0x189)),not_found_error_1=require(a91_0xcd9138(0x1b1)),azure_api_service_1=require(a91_0xcd9138(0x18a)),auth_settings_service_1=require(a91_0xcd9138(0x186)),typedi_1=require(a91_0xcd9138(0x1bc)),git_internal_1=require(a91_0xcd9138(0x1a7)),repo_class_1=require(a91_0xcd9138(0x1a6)),git_repo_service_1=require(a91_0xcd9138(0x190));let AzureRepoService=class AzureRepoService extends git_repo_service_1[a91_0xcd9138(0x1a1)]{constructor(_0xf247be,_0x4ab402){const _0x4bc83a=a91_0xcd9138;super(_0xf247be),this[_0x4bc83a(0x198)]=_0x4ab402[_0x4bc83a(0x18e)][_0x4bc83a(0x198)],this[_0x4bc83a(0x1a4)]=_0x4ab402[_0x4bc83a(0x18e)][_0x4bc83a(0x1a4)],this[_0x4bc83a(0x1a9)][_0x4bc83a(0x1ad)]['baseURL']=''+this['request'][_0x4bc83a(0x1ad)]['baseURL']+this[_0x4bc83a(0x198)]+'/'+this['project']+_0x4bc83a(0x195);}async[a91_0xcd9138(0x196)](_0x1956d6){const _0x332fdb=a91_0xcd9138;try{const _0x371f75=await this['request'][_0x332fdb(0x1be)](_0x332fdb(0x1ac),_0x1956d6),_0x24e744=repo_class_1[_0x332fdb(0x18f)][_0x332fdb(0x18d)](_0x371f75);return _0x1956d6[_0x332fdb(0x1b3)]&&await git_internal_1['Git'][_0x332fdb(0x1a0)](_0x24e744,_0x1956d6[_0x332fdb(0x1b6)]||_0x332fdb(0x1aa)),this['getOne'](_0x24e744[_0x332fdb(0x1ae)]);}catch(_0x12ca43){throw new bad_request_error_1[(_0x332fdb(0x1a5))](_0x12ca43);}}async[a91_0xcd9138(0x1b7)](_0x4f24af){const _0x29c97e=a91_0xcd9138;try{const _0x59f8ec=await this['request']['get'](_0x29c97e(0x1b9)+_0x4f24af);return repo_class_1[_0x29c97e(0x18f)][_0x29c97e(0x18d)](_0x59f8ec);}catch(_0x469ae3){throw new not_found_error_1[(_0x29c97e(0x188))](_0x469ae3);}}async[a91_0xcd9138(0x1b8)](_0x55c7bf,_0x4c3db4){const _0x15c0ea=a91_0xcd9138;try{const _0x1b67e1=await this[_0x15c0ea(0x1b7)](_0x55c7bf),_0x4f5332=await this[_0x15c0ea(0x1a9)]['patch'](_0x1b67e1['apiUrl'],_0x4c3db4);return repo_class_1['Repo']['fromAzure'](_0x4f5332);}catch(_0x4dbd25){throw new bad_request_error_1[(_0x15c0ea(0x1a5))](_0x4dbd25);}}async[a91_0xcd9138(0x18b)](_0x23e83c){const _0x214b0d=a91_0xcd9138;try{await this[_0x214b0d(0x1a9)][_0x214b0d(0x18b)](_0x214b0d(0x1b9)+_0x23e83c);}catch(_0x5a917d){throw new not_found_error_1[(_0x214b0d(0x188))](_0x5a917d);}}};AzureRepoService=__decorate([typedi_1[a91_0xcd9138(0x1bf)](),__param(0x1,typedi_1[a91_0xcd9138(0x197)]()),__metadata(a91_0xcd9138(0x192),[azure_api_service_1['AzureApiService'],auth_settings_service_1[a91_0xcd9138(0x1a3)]])],AzureRepoService),exports['AzureRepoService']=AzureRepoService;