const a106_0x2e4a=['78358IqhYBw','268478VKwNCz','2oYmNhu','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','getRepositoryRecord','\x0a\x20\x20\x20\x20\x20\x20','function','149410jaYgIz','__decorate','./salesforce.service','objectType','%parentId%','58178hmYzsi','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Sync_In_Progress__c','Status__c','getComponentsFromRepository','salseforceService','427816MswiVP','disableSync','__metadata','constructor','objectId','__esModule','SalesforceSyncService','GET_REPOSITORY_QUERY','length','replace','metadata','GET_BRANCH_QUERY','GET_WAITING_REPOSITORIES_QUERY','decorate','ERR_INVALID_ATTACHMENT_ID','FLOSUM_NAMESPACE','apply','2IOjtAs','123604BFDqAM','../dto/flosum-repository-sync.dto','setStatus','records','design:paramtypes','defineProperty','setLastSha','push','getOwnPropertyDescriptor','../queries','getBranchRecord','patchObject','salesforceQuery','object','\x0a\x20\x20\x20\x20\x20\x20WHERE\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20%flosum_namespace%Repository__c\x20=\x27','GET_COMPONENTS_QUERY','test','query','fromRepositoryRecord','296560yfwlnH','FLOSUM_GIT_NAMESPACE','Service','Git_Settings__c','SalesforceService','getBranchRecords','getBranchComponents','../../../constants','./salesforce-query.service','FlosumRepositorySyncDto','map','../../../constants/errors','\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%flosum_namespace%Branch__c\x20=\x20\x27','GET_WAITING_BRANCHES_QUERY','getComponents','SalesforceQueryService','fromBranchRecord'];const a106_0x1979e8=a106_0x5a39;(function(_0xe358fb,_0x25ba4b){const _0x46ce7c=a106_0x5a39;while(!![]){try{const _0x5e52fb=parseInt(_0x46ce7c(0x193))+-parseInt(_0x46ce7c(0x163))+-parseInt(_0x46ce7c(0x1a4))*-parseInt(_0x46ce7c(0x17f))+-parseInt(_0x46ce7c(0x1a6))*parseInt(_0x46ce7c(0x180))+-parseInt(_0x46ce7c(0x168))+-parseInt(_0x46ce7c(0x1a5))+parseInt(_0x46ce7c(0x16e));if(_0x5e52fb===_0x25ba4b)break;else _0xe358fb['push'](_0xe358fb['shift']());}catch(_0x2b4001){_0xe358fb['push'](_0xe358fb['shift']());}}}(a106_0x2e4a,0x2687a));const a106_0x2135cb=function(){let _0x1a3f73=!![];return function(_0x331615,_0x8740d8){const _0x18fa40=_0x1a3f73?function(){const _0x34a7e1=a106_0x5a39;if(_0x8740d8){const _0x4558f3=_0x8740d8[_0x34a7e1(0x17e)](_0x331615,arguments);return _0x8740d8=null,_0x4558f3;}}:function(){};return _0x1a3f73=![],_0x18fa40;};}(),a106_0x3837ea=a106_0x2135cb(this,function(){const _0x4bb7cb=function(){const _0x4af64a=a106_0x5a39,_0xbd8a6a=_0x4bb7cb['constructor'](_0x4af64a(0x169))()[_0x4af64a(0x171)](_0x4af64a(0x1a7));return!_0xbd8a6a[_0x4af64a(0x190)](a106_0x3837ea);};return _0x4bb7cb();});a106_0x3837ea();'use strict';var __decorate=this&&this[a106_0x1979e8(0x164)]||function(_0x12755e,_0x43d115,_0x3cf184,_0x32e990){const _0x2aa72b=a106_0x1979e8;var _0x12f429=arguments[_0x2aa72b(0x176)],_0x18f2d9=_0x12f429<0x3?_0x43d115:_0x32e990===null?_0x32e990=Object[_0x2aa72b(0x188)](_0x43d115,_0x3cf184):_0x32e990,_0x5bb1ea;if(typeof Reflect===_0x2aa72b(0x18d)&&typeof Reflect['decorate']===_0x2aa72b(0x1aa))_0x18f2d9=Reflect[_0x2aa72b(0x17b)](_0x12755e,_0x43d115,_0x3cf184,_0x32e990);else{for(var _0x557751=_0x12755e[_0x2aa72b(0x176)]-0x1;_0x557751>=0x0;_0x557751--)if(_0x5bb1ea=_0x12755e[_0x557751])_0x18f2d9=(_0x12f429<0x3?_0x5bb1ea(_0x18f2d9):_0x12f429>0x3?_0x5bb1ea(_0x43d115,_0x3cf184,_0x18f2d9):_0x5bb1ea(_0x43d115,_0x3cf184))||_0x18f2d9;}return _0x12f429>0x3&&_0x18f2d9&&Object[_0x2aa72b(0x185)](_0x43d115,_0x3cf184,_0x18f2d9),_0x18f2d9;},__metadata=this&&this[a106_0x1979e8(0x170)]||function(_0xfb4396,_0x3b7d42){const _0x3d69dd=a106_0x1979e8;if(typeof Reflect==='object'&&typeof Reflect['metadata']==='function')return Reflect[_0x3d69dd(0x178)](_0xfb4396,_0x3b7d42);};Object[a106_0x1979e8(0x185)](exports,a106_0x1979e8(0x173),{'value':!![]}),exports['SalesforceSyncService']=void 0x0;const typedi_1=require('typedi'),constants_1=require(a106_0x1979e8(0x19a)),errors_1=require(a106_0x1979e8(0x19e)),flosum_repository_sync_dto_1=require(a106_0x1979e8(0x181)),queries_1=require(a106_0x1979e8(0x189)),salesforce_query_service_1=require(a106_0x1979e8(0x19b)),salesforce_service_1=require(a106_0x1979e8(0x165));function a106_0x5a39(_0x4d6476,_0x4f668b){return a106_0x5a39=function(_0x318044,_0x3837ea){_0x318044=_0x318044-0x163;let _0x2135cb=a106_0x2e4a[_0x318044];return _0x2135cb;},a106_0x5a39(_0x4d6476,_0x4f668b);}let SalesforceSyncService=class SalesforceSyncService{constructor(_0x11a003,_0x234c64){const _0x3b3431=a106_0x1979e8;this[_0x3b3431(0x18c)]=_0x11a003,this[_0x3b3431(0x16d)]=_0x234c64;}async[a106_0x1979e8(0x1a1)](_0x280091){const _0x364356=a106_0x1979e8,_0x580a0f=await this[_0x364356(0x18c)][_0x364356(0x191)](_0x280091),_0x3252cd=[];for(const _0x11ff9b of _0x580a0f){const _0x49dc1f=_0x11ff9b[constants_1[_0x364356(0x17d)]+'Components__r'][_0x364356(0x183)][0x0];_0x3252cd[_0x364356(0x187)](_0x49dc1f['Id']);}return _0x3252cd;}async['getRepositoryRecords'](){const _0x44d67d=a106_0x1979e8,_0x5c6d91=await this['salesforceQuery'][_0x44d67d(0x191)](queries_1[_0x44d67d(0x17a)]);return _0x5c6d91[_0x44d67d(0x19d)](_0x5833e0=>flosum_repository_sync_dto_1[_0x44d67d(0x19c)][_0x44d67d(0x192)](_0x5833e0));}async[a106_0x1979e8(0x198)](){const _0x37c0ee=a106_0x1979e8,_0x548a47=await this[_0x37c0ee(0x18c)][_0x37c0ee(0x191)](queries_1[_0x37c0ee(0x1a0)]);return _0x548a47[_0x37c0ee(0x19d)](_0x5b194f=>flosum_repository_sync_dto_1['FlosumRepositorySyncDto'][_0x37c0ee(0x1a3)](_0x5b194f));}async[a106_0x1979e8(0x1a8)](_0x48774c){const _0x4f9d2c=a106_0x1979e8,_0x26d09d=await this[_0x4f9d2c(0x18c)][_0x4f9d2c(0x191)](queries_1[_0x4f9d2c(0x175)]['replace']('%id%',_0x48774c));return flosum_repository_sync_dto_1['FlosumRepositorySyncDto'][_0x4f9d2c(0x192)](_0x26d09d[0x0]);}async[a106_0x1979e8(0x18a)](_0x909aa6){const _0xf7730c=a106_0x1979e8,_0x21a5c9=await this[_0xf7730c(0x18c)][_0xf7730c(0x191)](queries_1[_0xf7730c(0x179)][_0xf7730c(0x177)]('%id%',_0x909aa6));return flosum_repository_sync_dto_1['FlosumRepositorySyncDto']['fromBranchRecord'](_0x21a5c9[0x0]);}async[a106_0x1979e8(0x16c)](_0x27a16c){const _0x51f108=a106_0x1979e8,_0x3ddcc9=_0x51f108(0x1a9)+queries_1[_0x51f108(0x18f)]+_0x51f108(0x18e)+_0x27a16c+'\x27';return this[_0x51f108(0x1a1)](_0x3ddcc9);}async[a106_0x1979e8(0x199)](_0x2a0c1b){const _0x314667=a106_0x1979e8,_0x2f673a='\x0a\x20\x20\x20\x20\x20\x20\x20\x20'+queries_1[_0x314667(0x18f)]+_0x314667(0x19f)+_0x2a0c1b+'\x27';return this['getComponents'](_0x2f673a);}async['getAttachmentIdByParent'](_0x2f28a0){const _0x25da17=a106_0x1979e8;var _0x5085cd;const _0x54d47d=queries_1['GET_ATTACHMENT_BY_PARENT_ID_QUERY'][_0x25da17(0x177)](_0x25da17(0x167),_0x2f28a0),_0x2d9ec0=await this[_0x25da17(0x18c)][_0x25da17(0x191)](_0x54d47d),_0x42d637=(_0x5085cd=_0x2d9ec0[0x0])===null||_0x5085cd===void 0x0?void 0x0:_0x5085cd['Id'];if(!_0x42d637)throw new Error(errors_1[_0x25da17(0x17c)]);return _0x42d637;}async[a106_0x1979e8(0x182)](_0x35e011,_0x2818f2){const _0x4911bb=a106_0x1979e8;await this[_0x4911bb(0x16d)][_0x4911bb(0x18b)](_0x35e011[_0x4911bb(0x166)],_0x35e011[_0x4911bb(0x172)],{[constants_1[_0x4911bb(0x194)]+_0x4911bb(0x16b)]:_0x2818f2});}async[a106_0x1979e8(0x186)](_0x484f9e,_0x4220da){const _0x1c3e5f=a106_0x1979e8;await this[_0x1c3e5f(0x16d)][_0x1c3e5f(0x18b)](_0x484f9e[_0x1c3e5f(0x166)],_0x484f9e[_0x1c3e5f(0x172)],{[constants_1[_0x1c3e5f(0x194)]+'Sha__c']:_0x4220da});}async[a106_0x1979e8(0x16f)](_0x37fcd4){const _0x58f3a8=a106_0x1979e8;await this[_0x58f3a8(0x16d)][_0x58f3a8(0x18b)](constants_1['FLOSUM_GIT_NAMESPACE']+_0x58f3a8(0x196),_0x37fcd4,{[constants_1[_0x58f3a8(0x194)]+_0x58f3a8(0x16a)]:![]});}};SalesforceSyncService=__decorate([typedi_1[a106_0x1979e8(0x195)](),__metadata(a106_0x1979e8(0x184),[salesforce_query_service_1[a106_0x1979e8(0x1a2)],salesforce_service_1[a106_0x1979e8(0x197)]])],SalesforceSyncService),exports[a106_0x1979e8(0x174)]=SalesforceSyncService;