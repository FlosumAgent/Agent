const a92_0x58de=['1ySeHFz','93InrHlD','../../git-api/services/bitbucket-server-api.service','git','__param','/repos/','../../shared/services/auth-settings.service','update','1213801NcFLiF','displayId','__decorate','bitbucketServer','length','Inject','object','projects/','Service','1wUQLGL','apiBody','name','3701QMEkXE','baseURL','271085HAqGyi','delete','get','67pSammQ','autoInit','typedi','getOne','./git-repo.service','BitbucketServerApiService','GitRepoService','AuthSettingsService','390812kKcVnG','BitbucketServerRepoService','design:paramtypes','/repos','fromBitbucketServer','383754KTyQvs','../repo.class','create','post','function','getOwnPropertyDescriptor','__esModule','defaultBranch','defineProperty','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../../../core/errors/bad-request.error','Repo','project','__metadata','request','decorate','metadata','NotFoundError','/projects/','1hlbNyK','/default-branch','apply','createEmptyBranch','760895EAxSvr','defaults','test','constructor','Git','2469KClPEf','BadRequestError'];function a92_0x2d25(_0x3f7939,_0x5d1b39){return a92_0x2d25=function(_0x10e2d1,_0x3da90f){_0x10e2d1=_0x10e2d1-0x1c8;let _0x3e9f64=a92_0x58de[_0x10e2d1];return _0x3e9f64;},a92_0x2d25(_0x3f7939,_0x5d1b39);}const a92_0x573616=a92_0x2d25;(function(_0x5c2ce7,_0xf83844){const _0x3326be=a92_0x2d25;while(!![]){try{const _0x30fb6e=parseInt(_0x3326be(0x1cb))+-parseInt(_0x3326be(0x1e3))*-parseInt(_0x3326be(0x1e8))+parseInt(_0x3326be(0x1f3))+parseInt(_0x3326be(0x1d2))*-parseInt(_0x3326be(0x1da))+-parseInt(_0x3326be(0x1d0))*parseInt(_0x3326be(0x1eb))+parseInt(_0x3326be(0x1d3))*parseInt(_0x3326be(0x1e6))+parseInt(_0x3326be(0x20b))*parseInt(_0x3326be(0x1f8));if(_0x30fb6e===_0xf83844)break;else _0x5c2ce7['push'](_0x5c2ce7['shift']());}catch(_0x39a48b){_0x5c2ce7['push'](_0x5c2ce7['shift']());}}}(a92_0x58de,0xbc5bb));const a92_0x3e9f64=function(){let _0x36e055=!![];return function(_0x1bcb9a,_0x406468){const _0xfbf393=_0x36e055?function(){const _0x1c6976=a92_0x2d25;if(_0x406468){const _0x5970b2=_0x406468[_0x1c6976(0x1c9)](_0x1bcb9a,arguments);return _0x406468=null,_0x5970b2;}}:function(){};return _0x36e055=![],_0xfbf393;};}(),a92_0x3da90f=a92_0x3e9f64(this,function(){const _0x56a802=function(){const _0x2ef64c=a92_0x2d25,_0x2cf0e9=_0x56a802[_0x2ef64c(0x1ce)](_0x2ef64c(0x201))()[_0x2ef64c(0x1ce)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x2cf0e9[_0x2ef64c(0x1cd)](a92_0x3da90f);};return _0x56a802();});a92_0x3da90f();'use strict';var __decorate=this&&this[a92_0x573616(0x1dc)]||function(_0x30282b,_0x1f6976,_0x4cace5,_0x1372ee){const _0x349bab=a92_0x573616;var _0x4828fc=arguments['length'],_0x33365a=_0x4828fc<0x3?_0x1f6976:_0x1372ee===null?_0x1372ee=Object[_0x349bab(0x1fd)](_0x1f6976,_0x4cace5):_0x1372ee,_0x54ecbb;if(typeof Reflect===_0x349bab(0x1e0)&&typeof Reflect['decorate']===_0x349bab(0x1fc))_0x33365a=Reflect[_0x349bab(0x207)](_0x30282b,_0x1f6976,_0x4cace5,_0x1372ee);else{for(var _0x495371=_0x30282b[_0x349bab(0x1de)]-0x1;_0x495371>=0x0;_0x495371--)if(_0x54ecbb=_0x30282b[_0x495371])_0x33365a=(_0x4828fc<0x3?_0x54ecbb(_0x33365a):_0x4828fc>0x3?_0x54ecbb(_0x1f6976,_0x4cace5,_0x33365a):_0x54ecbb(_0x1f6976,_0x4cace5))||_0x33365a;}return _0x4828fc>0x3&&_0x33365a&&Object[_0x349bab(0x200)](_0x1f6976,_0x4cace5,_0x33365a),_0x33365a;},__metadata=this&&this[a92_0x573616(0x205)]||function(_0xa8445d,_0x384546){const _0x276774=a92_0x573616;if(typeof Reflect===_0x276774(0x1e0)&&typeof Reflect[_0x276774(0x208)]===_0x276774(0x1fc))return Reflect[_0x276774(0x208)](_0xa8445d,_0x384546);},__param=this&&this[a92_0x573616(0x1d6)]||function(_0x17a2a0,_0x45cc83){return function(_0x4678f3,_0x1bdde0){_0x45cc83(_0x4678f3,_0x1bdde0,_0x17a2a0);};};Object[a92_0x573616(0x200)](exports,a92_0x573616(0x1fe),{'value':!![]}),exports[a92_0x573616(0x1f4)]=void 0x0;const bad_request_error_1=require(a92_0x573616(0x202)),not_found_error_1=require('../../../core/errors/not-found.error'),auth_settings_service_1=require(a92_0x573616(0x1d8)),typedi_1=require(a92_0x573616(0x1ed)),bitbucket_server_api_service_1=require(a92_0x573616(0x1d4)),git_internal_1=require('../../internal/git.internal'),utils_1=require('../../shared/utils'),repo_class_1=require(a92_0x573616(0x1f9)),git_repo_service_1=require(a92_0x573616(0x1ef));let BitbucketServerRepoService=class BitbucketServerRepoService extends git_repo_service_1[a92_0x573616(0x1f1)]{constructor(_0x5ad1d3,_0xdac374){const _0xff532c=a92_0x573616;super(_0x5ad1d3),this['api']=_0x5ad1d3,this[_0xff532c(0x204)]=_0xdac374[_0xff532c(0x1dd)][_0xff532c(0x204)];}async[a92_0x573616(0x1fa)](_0x3bae5f){const _0x2df157=a92_0x573616;try{const _0x2a5051={'name':_0x3bae5f[_0x2df157(0x1e5)],'scmId':_0x2df157(0x1d5),'defaultBranch':_0x3bae5f[_0x2df157(0x1ff)],..._0x3bae5f[_0x2df157(0x1e4)]||{}},_0xd32f03=await this[_0x2df157(0x206)][_0x2df157(0x1fb)](_0x2df157(0x1e1)+this[_0x2df157(0x204)]+_0x2df157(0x1f6),_0x2a5051),_0x4e6c9f=repo_class_1[_0x2df157(0x203)][_0x2df157(0x1f7)](_0xd32f03,'');return _0x3bae5f[_0x2df157(0x1ec)]&&await git_internal_1[_0x2df157(0x1cf)][_0x2df157(0x1ca)](_0x4e6c9f,_0x3bae5f['defaultBranch']||'master'),this[_0x2df157(0x1ee)](_0x4e6c9f[_0x2df157(0x1e5)]);}catch(_0x8b6b42){throw new bad_request_error_1[(_0x2df157(0x1d1))](_0x8b6b42);}}async[a92_0x573616(0x1ee)](_0x60df3b){const _0x1398d9=a92_0x573616;try{const _0x205adf=await this[_0x1398d9(0x206)]['get'](_0x1398d9(0x1e1)+this[_0x1398d9(0x204)]+_0x1398d9(0x1d7)+_0x60df3b),_0x5177cb=await this['request'][_0x1398d9(0x1ea)]('projects/'+this[_0x1398d9(0x204)]+_0x1398d9(0x1d7)+_0x60df3b+_0x1398d9(0x1c8)),_0x2383a7=repo_class_1['Repo'][_0x1398d9(0x1f7)](_0x205adf,utils_1['joinURL'](this[_0x1398d9(0x206)][_0x1398d9(0x1cc)][_0x1398d9(0x1e7)]||'',_0x1398d9(0x20a)+this[_0x1398d9(0x204)]+'/repos/'+_0x60df3b));return _0x2383a7[_0x1398d9(0x1ff)]=_0x5177cb[_0x1398d9(0x1db)],_0x2383a7;}catch(_0x159ff0){throw new not_found_error_1[(_0x1398d9(0x209))](_0x159ff0);}}async[a92_0x573616(0x1d9)](_0x465fa7,_0x528770){const _0x50e02e=a92_0x573616;try{const _0x241fb9=await this['request']['put'](_0x50e02e(0x1e1)+this[_0x50e02e(0x204)]+_0x50e02e(0x1d7)+_0x465fa7,_0x528770),_0x1624c3=await this[_0x50e02e(0x206)][_0x50e02e(0x1ea)](_0x50e02e(0x1e1)+this[_0x50e02e(0x204)]+_0x50e02e(0x1d7)+_0x465fa7+_0x50e02e(0x1c8)),_0x2f73d1=repo_class_1['Repo'][_0x50e02e(0x1f7)](_0x241fb9,utils_1['joinURL'](this[_0x50e02e(0x206)][_0x50e02e(0x1cc)]['baseURL']||'','/projects/'+this[_0x50e02e(0x204)]+'/repos/'+_0x465fa7));return _0x2f73d1[_0x50e02e(0x1ff)]=_0x1624c3[_0x50e02e(0x1db)],_0x2f73d1;}catch(_0x4c4164){throw new not_found_error_1['NotFoundError'](_0x4c4164);}}async[a92_0x573616(0x1e9)](_0x4958ef){const _0x1d34b2=a92_0x573616;try{await this[_0x1d34b2(0x1ee)](_0x4958ef),await this[_0x1d34b2(0x206)]['delete'](_0x1d34b2(0x1e1)+this[_0x1d34b2(0x204)]+_0x1d34b2(0x1d7)+_0x4958ef);}catch(_0x357e75){throw new bad_request_error_1[(_0x1d34b2(0x1d1))](_0x357e75);}}};BitbucketServerRepoService=__decorate([typedi_1[a92_0x573616(0x1e2)](),__param(0x1,typedi_1[a92_0x573616(0x1df)]()),__metadata(a92_0x573616(0x1f5),[bitbucket_server_api_service_1[a92_0x573616(0x1f0)],auth_settings_service_1[a92_0x573616(0x1f2)]])],BitbucketServerRepoService),exports[a92_0x573616(0x1f4)]=BitbucketServerRepoService;