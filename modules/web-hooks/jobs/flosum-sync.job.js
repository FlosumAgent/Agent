const a146_0x5151=['BRANCH_NAME_REGEXP','handleRecordSyncError','syncing\x20%s[%s]\x20repository\x20%s[%s]\x20branch','logger','../../salesforce/errors/salesforce.error','Service','repositoriesIntersections','__createBinding','__decorate','__setModuleDefault','../../salesforce/services/salesforce.service','run','\x27\x20[',']\x20due\x20error\x20-\x20','error','1012982CYaZKf','call','\x27\x20due\x20it\x20intersects\x20with\x20another\x20repository\x20by\x20repository\x20key\x20\x27','[ERROR]\x20Stop\x20sync\x20job\x20due\x20error\x20-\x20','\x27\x20-\x20\x27','getLogger','[INFO]\x20Sync\x20job\x20done.','create','1367031gMOfaJ','metadata','690631dAsSpO','catch','setLoggerId','object','stringify','1327420AwYRpc','get','316920fnJWGi','getAttachmentId','setStatus','\x27\x20due\x20branch\x20name\x20does\x20not\x20meet\x20the\x20naming\x20requirements.','constructor','hasOwnProperty','disableSync','repositoryName','__importStar','SalesforceService','toLowerCase','REPOSITORY_NAME_REGEXP','../../../constants','Unable\x20to\x20synchronize\x20repository\x20\x27','Logger','./sync.job','../../salesforce/services/salesforce-sync.service','branchId','Attachment','\x27\x20in\x20repository\x20\x27','defineProperty','branchName','salesforceService','Error','172308ivYKZZ','length','prototype','function','default','getOwnPropertyDescriptor','repositoryId','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','test','SalesforceError','SyncJob','typedi','decorate','getBranchRecords','__esModule','send','getRepositoryRecords','all','SalesforceSyncService','log','flosum-sync-job','checkValidNaming','1666580kIbVwz','[ERROR]\x20Stop\x20sync\x20job\x20for\x20\x27','../../shared/utils','encodeBase64','design:paramtypes','FlosumSyncJob','salesforceSync','isIntersects'];const a146_0x4748bc=a146_0x1c39;function a146_0x1c39(_0x39fbf8,_0x4b0823){return a146_0x1c39=function(_0xd1fa6,_0x4812e2){_0xd1fa6=_0xd1fa6-0x8e;let _0x192623=a146_0x5151[_0xd1fa6];return _0x192623;},a146_0x1c39(_0x39fbf8,_0x4b0823);}(function(_0x586b34,_0x5521b8){const _0x4b367d=a146_0x1c39;while(!![]){try{const _0x425f80=-parseInt(_0x4b367d(0xd6))+parseInt(_0x4b367d(0xde))+parseInt(_0x4b367d(0x91))+parseInt(_0x4b367d(0xe0))+-parseInt(_0x4b367d(0xbf))+parseInt(_0x4b367d(0x8f))+-parseInt(_0x4b367d(0xa9));if(_0x425f80===_0x5521b8)break;else _0x586b34['push'](_0x586b34['shift']());}catch(_0x1b7c83){_0x586b34['push'](_0x586b34['shift']());}}}(a146_0x5151,0xcf8d4));const a146_0x192623=function(){let _0x3f2fdc=!![];return function(_0x5d7310,_0x9cdaf){const _0x201bf6=_0x3f2fdc?function(){if(_0x9cdaf){const _0x185733=_0x9cdaf['apply'](_0x5d7310,arguments);return _0x9cdaf=null,_0x185733;}}:function(){};return _0x3f2fdc=![],_0x201bf6;};}(),a146_0x4812e2=a146_0x192623(this,function(){const _0x2a4bba=function(){const _0x259b74=a146_0x1c39,_0x1ab29c=_0x2a4bba[_0x259b74(0x95)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x259b74(0x95)](_0x259b74(0xb0));return!_0x1ab29c[_0x259b74(0xb1)](a146_0x4812e2);};return _0x2a4bba();});a146_0x4812e2();'use strict';var __createBinding=this&&this[a146_0x4748bc(0xce)]||(Object[a146_0x4748bc(0xdd)]?function(_0x202ec1,_0x5edd97,_0x3743c6,_0x33dd8e){if(_0x33dd8e===undefined)_0x33dd8e=_0x3743c6;Object['defineProperty'](_0x202ec1,_0x33dd8e,{'enumerable':!![],'get':function(){return _0x5edd97[_0x3743c6];}});}:function(_0x30cc3a,_0x563521,_0x4d23ea,_0x35b4f1){if(_0x35b4f1===undefined)_0x35b4f1=_0x4d23ea;_0x30cc3a[_0x35b4f1]=_0x563521[_0x4d23ea];}),__setModuleDefault=this&&this[a146_0x4748bc(0xd0)]||(Object['create']?function(_0x50d908,_0x3e1194){const _0x374eec=a146_0x4748bc;Object[_0x374eec(0xa5)](_0x50d908,'default',{'enumerable':!![],'value':_0x3e1194});}:function(_0x58a78c,_0x8abddb){const _0x4813e5=a146_0x4748bc;_0x58a78c[_0x4813e5(0xad)]=_0x8abddb;}),__decorate=this&&this[a146_0x4748bc(0xcf)]||function(_0x18c062,_0x28c419,_0x2e0063,_0x519473){const _0x461016=a146_0x4748bc;var _0x31a2ff=arguments[_0x461016(0xaa)],_0x5625d1=_0x31a2ff<0x3?_0x28c419:_0x519473===null?_0x519473=Object[_0x461016(0xae)](_0x28c419,_0x2e0063):_0x519473,_0x292a22;if(typeof Reflect==='object'&&typeof Reflect[_0x461016(0xb5)]===_0x461016(0xac))_0x5625d1=Reflect[_0x461016(0xb5)](_0x18c062,_0x28c419,_0x2e0063,_0x519473);else{for(var _0x42519f=_0x18c062['length']-0x1;_0x42519f>=0x0;_0x42519f--)if(_0x292a22=_0x18c062[_0x42519f])_0x5625d1=(_0x31a2ff<0x3?_0x292a22(_0x5625d1):_0x31a2ff>0x3?_0x292a22(_0x28c419,_0x2e0063,_0x5625d1):_0x292a22(_0x28c419,_0x2e0063))||_0x5625d1;}return _0x31a2ff>0x3&&_0x5625d1&&Object[_0x461016(0xa5)](_0x28c419,_0x2e0063,_0x5625d1),_0x5625d1;},__importStar=this&&this[a146_0x4748bc(0x99)]||function(_0x42f5b8){const _0x5c61db=a146_0x4748bc;if(_0x42f5b8&&_0x42f5b8[_0x5c61db(0xb7)])return _0x42f5b8;var _0x2181b6={};if(_0x42f5b8!=null){for(var _0x25bed0 in _0x42f5b8)if(_0x25bed0!==_0x5c61db(0xad)&&Object[_0x5c61db(0xab)][_0x5c61db(0x96)][_0x5c61db(0xd7)](_0x42f5b8,_0x25bed0))__createBinding(_0x2181b6,_0x42f5b8,_0x25bed0);}return __setModuleDefault(_0x2181b6,_0x42f5b8),_0x2181b6;},__metadata=this&&this['__metadata']||function(_0x57cdbb,_0x210654){const _0x1b7dcc=a146_0x4748bc;if(typeof Reflect===_0x1b7dcc(0xe3)&&typeof Reflect[_0x1b7dcc(0xdf)]===_0x1b7dcc(0xac))return Reflect[_0x1b7dcc(0xdf)](_0x57cdbb,_0x210654);};Object[a146_0x4748bc(0xa5)](exports,a146_0x4748bc(0xb7),{'value':!![]}),exports['FlosumSyncJob']=void 0x0;const constants_1=require(a146_0x4748bc(0x9d)),typedi_1=__importStar(require(a146_0x4748bc(0xb4))),core_1=require('../../../core'),salesforce_error_1=require(a146_0x4748bc(0xcb)),salesforce_sync_service_1=require(a146_0x4748bc(0xa1)),salesforce_service_1=require(a146_0x4748bc(0xd1)),utils_1=require(a146_0x4748bc(0xc1)),sync_job_1=require(a146_0x4748bc(0xa0)),logger=new core_1[(a146_0x4748bc(0x9f))](a146_0x4748bc(0xbd));let FlosumSyncJob=class FlosumSyncJob{constructor(_0x3eabfe,_0x554f15){const _0x5779ff=a146_0x4748bc;this['salesforceService']=_0x3eabfe,this[_0x5779ff(0xc5)]=_0x554f15,this[_0x5779ff(0xcd)]={};}async[a146_0x4748bc(0xc8)](_0x162c87,_0x1c1af9){const _0x4d7619=a146_0x4748bc;try{const _0x578dd0=await this[_0x4d7619(0xc5)][_0x4d7619(0x92)](_0x162c87);this[_0x4d7619(0xca)][_0x4d7619(0xbc)](_0x4d7619(0xc0)+_0x162c87[_0x4d7619(0x98)]+_0x4d7619(0xd3)+_0x162c87[_0x4d7619(0xa6)]+_0x4d7619(0xd4)+_0x1c1af9),await this[_0x4d7619(0xca)][_0x4d7619(0xb8)](),await this['salesforceService']['patchObject'](_0x4d7619(0xa3),_0x578dd0,{'Body':utils_1[_0x4d7619(0xc2)](JSON[_0x4d7619(0x8e)]({}))}),await this[_0x4d7619(0xc5)][_0x4d7619(0x93)](_0x162c87,_0x4d7619(0xa8));}catch(_0x502c6a){logger[_0x4d7619(0xd5)](_0x502c6a);if(_0x502c6a instanceof salesforce_error_1[_0x4d7619(0xb2)])throw _0x502c6a;}}async[a146_0x4748bc(0xc6)](_0x11cb08){const _0xa652ff=a146_0x4748bc;if(_0x11cb08[_0xa652ff(0xaf)]){const _0x237954=_0x11cb08[_0xa652ff(0x98)][_0xa652ff(0x9b)](),_0x24081c=this[_0xa652ff(0xcd)][_0x237954];if(!_0x24081c)this[_0xa652ff(0xcd)][_0x237954]=_0x11cb08[_0xa652ff(0x98)];else{if(_0x24081c&&_0x24081c!==_0x11cb08['repositoryName'])return await this[_0xa652ff(0xc8)](_0x11cb08,new Error(_0xa652ff(0x9e)+_0x11cb08[_0xa652ff(0x98)]+_0xa652ff(0xd8)+_0x237954+_0xa652ff(0xda)+_0x24081c+'\x27')),!![];}}return![];}async['checkValidNaming'](_0x4cda6c){const _0x356e77=a146_0x4748bc;if(!constants_1[_0x356e77(0x9c)]['test'](_0x4cda6c['repositoryName']))return await this[_0x356e77(0xc8)](_0x4cda6c,new Error(_0x356e77(0x9e)+_0x4cda6c['repositoryName']+'\x27\x20due\x20repository\x20name\x20does\x20not\x20meet\x20the\x20naming\x20requirements.')),![];if(!constants_1[_0x356e77(0xc7)][_0x356e77(0xb1)](_0x4cda6c[_0x356e77(0xa6)]))return await this[_0x356e77(0xc8)](_0x4cda6c,new Error('Unable\x20to\x20synchronize\x20branch\x20\x27'+_0x4cda6c[_0x356e77(0xa6)]+_0x356e77(0xa4)+_0x4cda6c[_0x356e77(0x98)]+_0x356e77(0x94))),![];return!![];}async['run'](_0x5f0fc7,_0x2021f3){const _0x3ed1bf=a146_0x4748bc;this[_0x3ed1bf(0xa7)][_0x3ed1bf(0xe2)](_0x2021f3),this[_0x3ed1bf(0xca)]=this[_0x3ed1bf(0xa7)][_0x3ed1bf(0xdb)]();try{this['logger'][_0x3ed1bf(0xbc)]('[INFO]\x20Start\x20sync\x20job'),await this[_0x3ed1bf(0xca)][_0x3ed1bf(0xb8)]();const [_0x501b22,_0x4a21e4]=await Promise[_0x3ed1bf(0xba)]([this[_0x3ed1bf(0xc5)][_0x3ed1bf(0xb6)](),this[_0x3ed1bf(0xc5)][_0x3ed1bf(0xb9)]()]),_0x7e05f9=[..._0x4a21e4,..._0x501b22];logger['log']('have\x20to\x20synchronize\x20%d\x20branches',_0x7e05f9['length']);for(const _0xa50906 of _0x7e05f9){const _0x4017da=typedi_1[_0x3ed1bf(0xad)][_0x3ed1bf(0x90)](sync_job_1[_0x3ed1bf(0xb3)]);logger[_0x3ed1bf(0xbc)](_0x3ed1bf(0xc9),_0xa50906[_0x3ed1bf(0x98)],_0xa50906['repositoryId'],_0xa50906[_0x3ed1bf(0xa6)],_0xa50906[_0x3ed1bf(0xa2)]);const _0x14c769=await this[_0x3ed1bf(0xbe)](_0xa50906);if(!_0x14c769)continue;const _0x5f2701=await this[_0x3ed1bf(0xc6)](_0xa50906);if(_0x5f2701)continue;await _0x4017da[_0x3ed1bf(0xd2)](_0xa50906,_0x2021f3,_0x5f0fc7['convertToSFDX'])[_0x3ed1bf(0xe1)](_0x2e4c51=>this[_0x3ed1bf(0xc8)](_0xa50906,_0x2e4c51));}}catch(_0x44837b){logger[_0x3ed1bf(0xd5)](_0x44837b),this[_0x3ed1bf(0xca)][_0x3ed1bf(0xbc)](_0x3ed1bf(0xd9)+_0x44837b),await this[_0x3ed1bf(0xca)][_0x3ed1bf(0xb8)]()[_0x3ed1bf(0xe1)](()=>void 0x0);return;}this[_0x3ed1bf(0xca)]['log'](_0x3ed1bf(0xdc)),await this[_0x3ed1bf(0xca)][_0x3ed1bf(0xb8)](),await this[_0x3ed1bf(0xc5)][_0x3ed1bf(0x97)](_0x5f0fc7['syncID']);}};FlosumSyncJob=__decorate([typedi_1[a146_0x4748bc(0xcc)]({'transient':!![]}),__metadata(a146_0x4748bc(0xc3),[salesforce_service_1[a146_0x4748bc(0x9a)],salesforce_sync_service_1[a146_0x4748bc(0xbb)]])],FlosumSyncJob),exports[a146_0x4748bc(0xc4)]=FlosumSyncJob;