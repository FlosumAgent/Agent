const a143_0x505d=['syncRepositoryId','../dto/commit-components.dto','../../../constants/errors','Service','function','setLoggerId','run','user','gitUrl','58237txDbSO',']\x20[Branch:\x20','../../shared/utils','getAttachmentId','defineProperty','35671ienQqj','Attachment',']\x20[Repository:\x20','getCommitDto','512329qmahxg','__esModule','../../salesforce/services/salesforce.service','map','getBranchRecord','flosum-commit-job','setStatus','ERR_INVALID_SYNC_RECORD_ID','toUpperCase','./commit-components.job','55WyRNvm','[INFO]\x20Start\x20commit\x20job','../../salesforce/services/salesforce-retriever.service','../../salesforce/services/salesforce-sync.service','syncBranchId','__metadata','all','FlosumCommitJob','constructor','salesforceService','then','Error','gitManager','catch','typedi','5fKJqYH','decorate','provider','getComponentsToDelete','[COMMIT]\x20[','733893JvBXRd','log','return\x20/\x22\x20+\x20this\x20+\x20\x22/','757273UDyyVk','handleCommitJobError','../../../core/errors/bad-request.error','repositoryData','ERR_UNKNOWN_SYNC_RECORD_ID','exec','getOwnPropertyDescriptor','error','branches','message','CommitComponentsDto','__decorate','Logger','salesforceSync','BadRequestError','name','667vFoNXT','branch','convertToSFDX','retrieveAttachment','getComponentsToWrite','updateLastCommit','branchName','1gWdXwq','logger','sha','commitAttachmentId','metadata','repository','repoService','commitData','split','object','[INFO]\x20Update\x20remote\x20state.','SalesforceService','apply','length','1314GsyJFU','122tzBemF','getOne','deleteAttachment','test','SalesforceRetrieverService','deleteAttachmentId','commitJob','Completed','getRepoService'];const a143_0x5fd194=a143_0x5540;(function(_0x4833df,_0x150b2c){const _0x26f5b1=a143_0x5540;while(!![]){try{const _0x15138c=parseInt(_0x26f5b1(0x7d))*parseInt(_0x26f5b1(0xa3))+parseInt(_0x26f5b1(0x99))+-parseInt(_0x26f5b1(0xba))+-parseInt(_0x26f5b1(0xb2))*parseInt(_0x26f5b1(0x95))+parseInt(_0x26f5b1(0xd1))*-parseInt(_0x26f5b1(0x90))+-parseInt(_0x26f5b1(0x7e))*-parseInt(_0x26f5b1(0xca))+parseInt(_0x26f5b1(0xb7));if(_0x15138c===_0x150b2c)break;else _0x4833df['push'](_0x4833df['shift']());}catch(_0x1b3e32){_0x4833df['push'](_0x4833df['shift']());}}}(a143_0x505d,0x631f1));const a143_0x3f2e03=function(){let _0x47f8ef=!![];return function(_0x4a5c30,_0x580a94){const _0x4792e1=_0x47f8ef?function(){const _0x3a6351=a143_0x5540;if(_0x580a94){const _0x1d38b5=_0x580a94[_0x3a6351(0xdd)](_0x4a5c30,arguments);return _0x580a94=null,_0x1d38b5;}}:function(){};return _0x47f8ef=![],_0x4792e1;};}(),a143_0x31e2b5=a143_0x3f2e03(this,function(){const _0x2a5d6c=function(){const _0x412c62=a143_0x5540,_0x59c829=_0x2a5d6c['constructor'](_0x412c62(0xb9))()[_0x412c62(0xab)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x59c829[_0x412c62(0x81)](a143_0x31e2b5);};return _0x2a5d6c();});a143_0x31e2b5();function a143_0x5540(_0x4c6f60,_0x44cc21){return a143_0x5540=function(_0x4d127e,_0x31e2b5){_0x4d127e=_0x4d127e-0x7d;let _0x3f2e03=a143_0x505d[_0x4d127e];return _0x3f2e03;},a143_0x5540(_0x4c6f60,_0x44cc21);}'use strict';var __decorate=this&&this[a143_0x5fd194(0xc5)]||function(_0x190f9f,_0x486360,_0x4e55ae,_0x290b83){const _0x12d631=a143_0x5fd194;var _0x2eb27c=arguments[_0x12d631(0xde)],_0x556054=_0x2eb27c<0x3?_0x486360:_0x290b83===null?_0x290b83=Object[_0x12d631(0xc0)](_0x486360,_0x4e55ae):_0x290b83,_0x13248d;if(typeof Reflect===_0x12d631(0xda)&&typeof Reflect[_0x12d631(0xb3)]===_0x12d631(0x8b))_0x556054=Reflect[_0x12d631(0xb3)](_0x190f9f,_0x486360,_0x4e55ae,_0x290b83);else{for(var _0x1f0ef1=_0x190f9f[_0x12d631(0xde)]-0x1;_0x1f0ef1>=0x0;_0x1f0ef1--)if(_0x13248d=_0x190f9f[_0x1f0ef1])_0x556054=(_0x2eb27c<0x3?_0x13248d(_0x556054):_0x2eb27c>0x3?_0x13248d(_0x486360,_0x4e55ae,_0x556054):_0x13248d(_0x486360,_0x4e55ae))||_0x556054;}return _0x2eb27c>0x3&&_0x556054&&Object[_0x12d631(0x94)](_0x486360,_0x4e55ae,_0x556054),_0x556054;},__metadata=this&&this[a143_0x5fd194(0xa8)]||function(_0x593b3a,_0x37ff06){const _0x397751=a143_0x5fd194;if(typeof Reflect==='object'&&typeof Reflect[_0x397751(0xd5)]===_0x397751(0x8b))return Reflect['metadata'](_0x593b3a,_0x37ff06);};Object['defineProperty'](exports,a143_0x5fd194(0x9a),{'value':!![]}),exports[a143_0x5fd194(0xaa)]=void 0x0;const core_1=require('../../../core'),salesforce_service_1=require(a143_0x5fd194(0x9b)),git_provider_manager_1=require('../../shared/git-provider.manager'),typedi_1=require(a143_0x5fd194(0xb1)),errors_1=require(a143_0x5fd194(0x89)),bad_request_error_1=require(a143_0x5fd194(0xbc)),salesforce_retriever_service_1=require(a143_0x5fd194(0xa5)),salesforce_sync_service_1=require(a143_0x5fd194(0xa6)),utils_1=require(a143_0x5fd194(0x92)),commit_components_dto_1=require(a143_0x5fd194(0x88)),commit_components_job_1=require(a143_0x5fd194(0xa2)),logger=new core_1[(a143_0x5fd194(0xc6))](a143_0x5fd194(0x9e));let FlosumCommitJob=class FlosumCommitJob{constructor(_0x45d50f,_0x67f5e4,_0x1ff440,_0x5d5264){const _0x567c19=a143_0x5fd194;this[_0x567c19(0xac)]=_0x45d50f,this[_0x567c19(0x84)]=_0x67f5e4,this[_0x567c19(0xc7)]=_0x1ff440,this[_0x567c19(0xaf)]=_0x5d5264,this[_0x567c19(0xd7)]=this[_0x567c19(0xaf)][_0x567c19(0x86)]();}[a143_0x5fd194(0xb8)](_0x44a4e0){const _0xf43cd3=a143_0x5fd194;return this[_0xf43cd3(0xd2)][_0xf43cd3(0xb8)](_0xf43cd3(0xb6)+this[_0xf43cd3(0xaf)][_0xf43cd3(0xb4)][_0xf43cd3(0xa1)]()+_0xf43cd3(0x97)+this[_0xf43cd3(0xd6)][_0xf43cd3(0xc9)]+_0xf43cd3(0x91)+this[_0xf43cd3(0xcb)][_0xf43cd3(0xc9)]+']\x20'+_0x44a4e0);}async['fetchRepositoryData'](){const _0x1f06f7=a143_0x5fd194;try{if(this[_0x1f06f7(0xd8)][_0x1f06f7(0x87)])this['repositoryData']=await this[_0x1f06f7(0xc7)]['getRepositoryRecord'](this['commitData'][_0x1f06f7(0x87)]);else this[_0x1f06f7(0xd8)]['syncBranchId']&&(this[_0x1f06f7(0xbd)]=await this[_0x1f06f7(0xc7)][_0x1f06f7(0x9d)](this[_0x1f06f7(0xd8)][_0x1f06f7(0xa7)]));}catch(_0x3bdbc1){throw new bad_request_error_1[(_0x1f06f7(0xc8))](errors_1[_0x1f06f7(0xa0)]);}}async['getComponentsToWrite'](){const _0x3a7bf1=a143_0x5fd194;if(!this[_0x3a7bf1(0xd8)][_0x3a7bf1(0xd4)])return[];const _0x47fa69=await this[_0x3a7bf1(0xac)][_0x3a7bf1(0xcd)](this[_0x3a7bf1(0xd8)][_0x3a7bf1(0xd4)])[_0x3a7bf1(0xad)](_0x1c7210=>_0x1c7210[_0x3a7bf1(0xd9)]('\x20')[_0x3a7bf1(0x9c)](_0x2861ef=>_0x2861ef['trim']())),_0x37f46e=new salesforce_retriever_service_1[(_0x3a7bf1(0x82))](this[_0x3a7bf1(0xac)]),_0x7d6f2e=await _0x37f46e[_0x3a7bf1(0x8d)](_0x47fa69);return _0x7d6f2e;}async[a143_0x5fd194(0xb5)](){const _0x14363b=a143_0x5fd194;if(!this['commitData'][_0x14363b(0x83)])return[];const _0x3ae96d=await this[_0x14363b(0xac)][_0x14363b(0xcd)](this[_0x14363b(0xd8)][_0x14363b(0x83)]);return _0x3ae96d;}async['getCommitDto'](){const _0x2d3d78=a143_0x5fd194,_0x4410d7=new commit_components_dto_1[(_0x2d3d78(0xc4))](),[_0x99a51c,_0x4abb85]=await Promise[_0x2d3d78(0xa9)]([this[_0x2d3d78(0xce)](),this[_0x2d3d78(0xb5)]()]);return _0x4410d7[_0x2d3d78(0xc3)]=this['commitData'][_0x2d3d78(0xc3)],_0x4410d7[_0x2d3d78(0x8e)]=this[_0x2d3d78(0xd8)][_0x2d3d78(0x8e)],_0x4410d7['components']={'writed':_0x99a51c,'deleted':_0x4abb85},_0x4410d7[_0x2d3d78(0xcc)]=this[_0x2d3d78(0xd8)]['convertToSFDX'],_0x4410d7['repo']=this['repository'],_0x4410d7[_0x2d3d78(0xcb)]=this[_0x2d3d78(0xcb)],_0x4410d7;}async['updateLastCommit'](){const _0x44e757=a143_0x5fd194,_0x58e515=await this[_0x44e757(0xd6)][_0x44e757(0xc2)]['getOne'](this[_0x44e757(0xcb)][_0x44e757(0xc9)]);this[_0x44e757(0xb8)](_0x44e757(0xdb));const _0x24d946=await this[_0x44e757(0xc7)][_0x44e757(0x93)](this['repositoryData']),_0x4481bc={[this[_0x44e757(0xd6)][_0x44e757(0x8f)]]:{'lastCommit':_0x58e515[_0x44e757(0xd3)]}};await this[_0x44e757(0xac)]['patchObject'](_0x44e757(0x96),_0x24d946,{'Body':utils_1['encodeBase64'](JSON['stringify'](_0x4481bc))});}async[a143_0x5fd194(0xbf)](){const _0xf8fb7f=a143_0x5fd194,_0x437367=await this[_0xf8fb7f(0x98)]();this[_0xf8fb7f(0x84)][_0xf8fb7f(0xd2)]=this[_0xf8fb7f(0xd2)],await this['salesforceSync'][_0xf8fb7f(0x9f)](this[_0xf8fb7f(0xbd)],'In\x20Progress'),await this[_0xf8fb7f(0x84)][_0xf8fb7f(0x8d)](_0x437367),await this[_0xf8fb7f(0xcf)](),this[_0xf8fb7f(0xd8)][_0xf8fb7f(0xd4)]&&await this['salesforceService'][_0xf8fb7f(0x80)](this[_0xf8fb7f(0xd8)]['commitAttachmentId']),this[_0xf8fb7f(0xd8)][_0xf8fb7f(0x83)]&&await this[_0xf8fb7f(0xac)]['deleteAttachment'](this[_0xf8fb7f(0xd8)][_0xf8fb7f(0x83)]),await this[_0xf8fb7f(0xc7)][_0xf8fb7f(0x9f)](this[_0xf8fb7f(0xbd)],_0xf8fb7f(0x85));}async[a143_0x5fd194(0xbb)](_0x436be2){const _0x39c2f2=a143_0x5fd194;try{this[_0x39c2f2(0xd2)][_0x39c2f2(0xb8)]('[ERROR]\x20'+_0x436be2),await this[_0x39c2f2(0xd2)]['send'](),await this['salesforceSync'][_0x39c2f2(0x9f)](this['repositoryData'],_0x39c2f2(0xae));}catch(_0x4f807e){logger[_0x39c2f2(0xc1)](_0x4f807e);}}async[a143_0x5fd194(0x8d)](_0x47652d,_0x1bf762){const _0x191f3a=a143_0x5fd194;try{this['commitData']=_0x47652d,this['salesforceService'][_0x191f3a(0x8c)](_0x1bf762),this[_0x191f3a(0xd2)]=this[_0x191f3a(0xac)]['getLogger'](),await this['fetchRepositoryData']();if(!this[_0x191f3a(0xbd)])throw new bad_request_error_1[(_0x191f3a(0xc8))](errors_1[_0x191f3a(0xbe)]);this[_0x191f3a(0xd6)]=await this[_0x191f3a(0xd7)][_0x191f3a(0x7f)](this[_0x191f3a(0xbd)]['repositoryName']),this[_0x191f3a(0xcb)]=await this[_0x191f3a(0xd6)]['branches'][_0x191f3a(0x7f)](this[_0x191f3a(0xbd)][_0x191f3a(0xd0)]),this[_0x191f3a(0xb8)](_0x191f3a(0xa4)),this[_0x191f3a(0xbf)]()[_0x191f3a(0xb0)](_0x144e7a=>this[_0x191f3a(0xbb)](_0x144e7a));}catch(_0x46a7aa){this['commitData']=undefined,logger['error'](_0x46a7aa);throw _0x46a7aa;}}};FlosumCommitJob=__decorate([typedi_1[a143_0x5fd194(0x8a)]({'transient':!![]}),__metadata('design:paramtypes',[salesforce_service_1[a143_0x5fd194(0xdc)],commit_components_job_1['CommitComponentsJob'],salesforce_sync_service_1['SalesforceSyncService'],git_provider_manager_1['GitProviderManager']])],FlosumCommitJob),exports[a143_0x5fd194(0xaa)]=FlosumCommitJob;