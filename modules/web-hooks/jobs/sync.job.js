const a145_0x736d=['getCommitDto','create','[ERROR]\x20','remoteStateAttachmentId','31131pDLGcJ','478uyvbwg','30YkItcg','design:paramtypes','getOne','setLoggerId','then','SyncJob','salesforceService','repo','function','__metadata','[INFO]\x20Sync\x20job\x20done.','user','./commit-components.job','run','getComponentIds','8BrKlxo','commitJob','repoService','decorate','Sync\x20repository','Attachment','syncData','../../salesforce/services/salesforce-retriever.service',']\x20[Repository:\x20','getComponentsFromRepository',']\x20[Branch:\x20','199659fsqwib','DEFAULT_GIT_USER_EMAIL','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','objectId','catch','../../salesforce/services/salesforce-sync.service','typedi','891490AuBVhu','[INFO]\x20Update\x20remote\x20state.','gitManager','../dto/commit-components.dto','name','branches','checkSyncStatus','SalesforceService','[SYNC]\x20[','738495qxhxeX','SalesforceSyncService','parse','flosumSync','1889bfhxpN','send','object','message','getOwnPropertyDescriptor','Completed','CommitComponentsDto','../../shared/git-provider.manager','test','../../../constants','getRepoService','encodeBase64','createRepositoryIfNotExists','remoteState','repositoryName','getComponents','In\x20Progress','repository','provider','__decorate','[INFO]\x20Branch\x20synchronized.\x20Skip','getBranchComponents','gitUrl','toUpperCase','length','78851ekqbDX','11497VnMadm','constructor','logger','defineProperty','lastCommit','sha','components','__esModule','setStatus','branch','log','SalesforceRetrieverService','repositoryId','force','metadata','Service','DEFAULT_GIT_USER_NAME','patchObject','branchName','return\x20/\x22\x20+\x20this\x20+\x20\x22/'];const a145_0x5531c3=a145_0x917b;(function(_0x4a6b80,_0x2f22ad){const _0x83df51=a145_0x917b;while(!![]){try{const _0x4b612d=-parseInt(_0x83df51(0xe1))+-parseInt(_0x83df51(0xff))*-parseInt(_0x83df51(0x119))+parseInt(_0x83df51(0x117))+parseInt(_0x83df51(0xd8))+-parseInt(_0x83df51(0xe5))*parseInt(_0x83df51(0x118))+-parseInt(_0x83df51(0xc6))*-parseInt(_0x83df51(0xfe))+parseInt(_0x83df51(0xd1));if(_0x4b612d===_0x2f22ad)break;else _0x4a6b80['push'](_0x4a6b80['shift']());}catch(_0x40a632){_0x4a6b80['push'](_0x4a6b80['shift']());}}}(a145_0x736d,0x6f771));const a145_0x4b3c55=function(){let _0x5bcf57=!![];return function(_0x5d2a3c,_0x1a787d){const _0x1775c7=_0x5bcf57?function(){if(_0x1a787d){const _0x4ef1fb=_0x1a787d['apply'](_0x5d2a3c,arguments);return _0x1a787d=null,_0x4ef1fb;}}:function(){};return _0x5bcf57=![],_0x1775c7;};}(),a145_0x4679df=a145_0x4b3c55(this,function(){const _0xb00e7a=function(){const _0x128d6c=a145_0x917b,_0x3554dc=_0xb00e7a[_0x128d6c(0x100)](_0x128d6c(0x112))()[_0x128d6c(0x100)](_0x128d6c(0xd3));return!_0x3554dc[_0x128d6c(0xed)](a145_0x4679df);};return _0xb00e7a();});a145_0x4679df();'use strict';var __decorate=this&&this[a145_0x5531c3(0xf8)]||function(_0x3e7404,_0x41a2c8,_0x1ffae7,_0x4e6d16){const _0x4b1297=a145_0x5531c3;var _0x549185=arguments['length'],_0x3b4576=_0x549185<0x3?_0x41a2c8:_0x4e6d16===null?_0x4e6d16=Object[_0x4b1297(0xe9)](_0x41a2c8,_0x1ffae7):_0x4e6d16,_0x35500f;if(typeof Reflect==='object'&&typeof Reflect[_0x4b1297(0xc9)]===_0x4b1297(0x121))_0x3b4576=Reflect[_0x4b1297(0xc9)](_0x3e7404,_0x41a2c8,_0x1ffae7,_0x4e6d16);else{for(var _0x2ab10a=_0x3e7404[_0x4b1297(0xfd)]-0x1;_0x2ab10a>=0x0;_0x2ab10a--)if(_0x35500f=_0x3e7404[_0x2ab10a])_0x3b4576=(_0x549185<0x3?_0x35500f(_0x3b4576):_0x549185>0x3?_0x35500f(_0x41a2c8,_0x1ffae7,_0x3b4576):_0x35500f(_0x41a2c8,_0x1ffae7))||_0x3b4576;}return _0x549185>0x3&&_0x3b4576&&Object[_0x4b1297(0x102)](_0x41a2c8,_0x1ffae7,_0x3b4576),_0x3b4576;},__metadata=this&&this[a145_0x5531c3(0x122)]||function(_0x20d4b4,_0x5ade55){const _0x4f498b=a145_0x5531c3;if(typeof Reflect===_0x4f498b(0xe7)&&typeof Reflect[_0x4f498b(0x10d)]===_0x4f498b(0x121))return Reflect[_0x4f498b(0x10d)](_0x20d4b4,_0x5ade55);};Object['defineProperty'](exports,a145_0x5531c3(0x106),{'value':!![]}),exports[a145_0x5531c3(0x11e)]=void 0x0;const typedi_1=require(a145_0x5531c3(0xd7)),constants_1=require(a145_0x5531c3(0xee)),salesforce_retriever_service_1=require(a145_0x5531c3(0xcd)),salesforce_sync_service_1=require(a145_0x5531c3(0xd6)),salesforce_service_1=require('../../salesforce/services/salesforce.service'),git_provider_manager_1=require(a145_0x5531c3(0xec)),utils_1=require('../../shared/utils'),commit_components_dto_1=require(a145_0x5531c3(0xdb)),commit_components_job_1=require(a145_0x5531c3(0xc3));function a145_0x917b(_0x2e5ca5,_0x1561ff){return a145_0x917b=function(_0x54b3c6,_0x4679df){_0x54b3c6=_0x54b3c6-0xc1;let _0x4b3c55=a145_0x736d[_0x54b3c6];return _0x4b3c55;},a145_0x917b(_0x2e5ca5,_0x1561ff);}let SyncJob=class SyncJob{constructor(_0x401a77,_0x5d2edf,_0x1802f1,_0x4261a3){const _0x29f3d5=a145_0x5531c3;this['gitManager']=_0x401a77,this[_0x29f3d5(0xe4)]=_0x5d2edf,this['salesforceService']=_0x1802f1,this[_0x29f3d5(0xc7)]=_0x4261a3,this['repoService']=this[_0x29f3d5(0xda)][_0x29f3d5(0xef)]();}async[a145_0x5531c3(0x109)](_0x18c8ed){const _0x12e97f=a145_0x5531c3;return this[_0x12e97f(0x101)][_0x12e97f(0x109)](_0x12e97f(0xe0)+this[_0x12e97f(0xda)][_0x12e97f(0xf7)][_0x12e97f(0xfc)]()+_0x12e97f(0xce)+this[_0x12e97f(0xcc)][_0x12e97f(0xf3)]+_0x12e97f(0xd0)+this[_0x12e97f(0xcc)][_0x12e97f(0x111)]+']\x20'+_0x18c8ed);}async[a145_0x5531c3(0xf1)](){const _0x404fd6=a145_0x5531c3;let _0xf3b3b1=await this[_0x404fd6(0xc8)][_0x404fd6(0x11b)](this[_0x404fd6(0xcc)][_0x404fd6(0xf3)])[_0x404fd6(0xd5)](()=>null);!_0xf3b3b1&&(_0xf3b3b1=await this[_0x404fd6(0xc8)][_0x404fd6(0x114)]({'name':this[_0x404fd6(0xcc)][_0x404fd6(0xf3)],'autoInit':!![],'defaultBranch':this[_0x404fd6(0xcc)]['branchName'],'private':!![]})),this[_0x404fd6(0xf6)]=_0xf3b3b1;}async['createBranchIfNotExists'](){const _0x173141=a145_0x5531c3;let _0x358240=await this['repository'][_0x173141(0xdd)]['getOne'](this[_0x173141(0xcc)][_0x173141(0x111)])['catch'](()=>null);!_0x358240&&(_0x358240=await this[_0x173141(0xf6)][_0x173141(0xdd)][_0x173141(0x114)]({'name':this[_0x173141(0xcc)]['branchName']})),this['branch']=_0x358240;}async[a145_0x5531c3(0xc5)](){const _0xe4b147=a145_0x5531c3;return this[_0xe4b147(0xcc)][_0xe4b147(0x10b)]?this[_0xe4b147(0xe4)][_0xe4b147(0xcf)](this[_0xe4b147(0xcc)][_0xe4b147(0x10b)]):this['flosumSync'][_0xe4b147(0xfa)](this['syncData']['branchId']);}async[a145_0x5531c3(0xf4)](){const _0x544317=a145_0x5531c3,_0x30f67c=await this[_0x544317(0xc5)](),_0x4b90d5=new salesforce_retriever_service_1[(_0x544317(0x10a))](this['salesforceService']),_0x2d94b0=await _0x4b90d5['run'](_0x30f67c);return _0x2d94b0;}async[a145_0x5531c3(0x113)](_0x2270cd){const _0x575e77=a145_0x5531c3,_0x5edf8c=new commit_components_dto_1[(_0x575e77(0xeb))]();return _0x5edf8c[_0x575e77(0xe8)]=_0x575e77(0xca),_0x5edf8c[_0x575e77(0xc2)]={'name':constants_1[_0x575e77(0x10f)],'email':constants_1[_0x575e77(0xd2)]},_0x5edf8c[_0x575e77(0x105)]={'writed':await this[_0x575e77(0xf4)]()},_0x5edf8c['convertToSFDX']=_0x2270cd,_0x5edf8c[_0x575e77(0x120)]=this[_0x575e77(0xf6)],_0x5edf8c[_0x575e77(0x108)]=this[_0x575e77(0x108)],_0x5edf8c[_0x575e77(0x10c)]=!![],_0x5edf8c;}async['checkSyncStatus'](){const _0x2b5032=a145_0x5531c3;this[_0x2b5032(0x116)]=await this[_0x2b5032(0xe4)]['getAttachmentIdByParent'](this[_0x2b5032(0xcc)][_0x2b5032(0xd4)]),this[_0x2b5032(0xf2)]=await this[_0x2b5032(0x11f)]['retrieveAttachment'](this[_0x2b5032(0x116)])[_0x2b5032(0x11d)](_0x18160d=>typeof _0x18160d===_0x2b5032(0xe7)?_0x18160d:JSON[_0x2b5032(0xe3)](_0x18160d||'{}'))[_0x2b5032(0xd5)](()=>({}));if(this[_0x2b5032(0xf2)][this[_0x2b5032(0xf6)][_0x2b5032(0xfb)]]){if(this['remoteState'][this['repository'][_0x2b5032(0xfb)]][_0x2b5032(0x103)]===this[_0x2b5032(0x108)][_0x2b5032(0x104)])return!![];}return![];}async['updateLastCommit'](){const _0x8f7360=a145_0x5531c3,_0x56738d=await this[_0x8f7360(0xf6)][_0x8f7360(0xdd)][_0x8f7360(0x11b)](this[_0x8f7360(0x108)][_0x8f7360(0xdc)]);await this[_0x8f7360(0x109)](_0x8f7360(0xd9)),this[_0x8f7360(0xf2)]={[this[_0x8f7360(0xf6)]['gitUrl']]:{'lastCommit':_0x56738d[_0x8f7360(0x104)]}},await this[_0x8f7360(0x11f)][_0x8f7360(0x110)](_0x8f7360(0xcb),this[_0x8f7360(0x116)],{'Body':utils_1[_0x8f7360(0xf0)](JSON['stringify'](this[_0x8f7360(0xf2)]))});}async[a145_0x5531c3(0xc4)](_0xa2255,_0x2856d4,_0xe935ae){const _0x4d2714=a145_0x5531c3;this[_0x4d2714(0xcc)]=_0xa2255,this[_0x4d2714(0x11f)][_0x4d2714(0x11c)](_0x2856d4),this['logger']=this[_0x4d2714(0x11f)]['getLogger']();try{await this[_0x4d2714(0xe4)][_0x4d2714(0x107)](this[_0x4d2714(0xcc)],_0x4d2714(0xf5)),await this[_0x4d2714(0x109)]('[INFO]\x20Start\x20sync\x20job'),await this[_0x4d2714(0xf1)](),await this['createBranchIfNotExists']();const _0x1b4e56=await this[_0x4d2714(0xde)]();if(_0x1b4e56){await this[_0x4d2714(0xe4)][_0x4d2714(0x107)](this[_0x4d2714(0xcc)],'Completed'),await this[_0x4d2714(0x109)](_0x4d2714(0xf9));return;}const _0x59f4b2=await this[_0x4d2714(0x113)](_0xe935ae);this[_0x4d2714(0xc7)]['logger']=this[_0x4d2714(0x101)],await this[_0x4d2714(0xc7)][_0x4d2714(0xc4)](_0x59f4b2),await this[_0x4d2714(0xe4)]['setStatus'](this['syncData'],_0x4d2714(0xea)),await this['updateLastCommit'](),await this[_0x4d2714(0x109)](_0x4d2714(0xc1));}catch(_0x40dd81){this['log'](_0x4d2714(0x115)+_0x40dd81);throw _0x40dd81;}finally{await this[_0x4d2714(0x101)][_0x4d2714(0xe6)]();}}};SyncJob=__decorate([typedi_1[a145_0x5531c3(0x10e)]({'transient':!![]}),__metadata(a145_0x5531c3(0x11a),[git_provider_manager_1['GitProviderManager'],salesforce_sync_service_1[a145_0x5531c3(0xe2)],salesforce_service_1[a145_0x5531c3(0xdf)],commit_components_job_1['CommitComponentsJob']])],SyncJob),exports[a145_0x5531c3(0x11e)]=SyncJob;