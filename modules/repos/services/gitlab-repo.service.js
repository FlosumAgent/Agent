const a95_0x57bd=['defineProperty','object','../../shared/services/auth-settings.service','471810ZEWISb','post','function','14679orQbYR','1021224uhgfyO','decorate','Git','152MfdJIB','1lGELJk','__decorate','1844576tbumVs','typedi','createRequest','__metadata','length','Inject','../repo.class','groupId','username','gitlab','1LjRObS','baseURL','getOwnPropertyDescriptor','return\x20/\x22\x20+\x20this\x20+\x20\x22/','test','1394867KQtXBA','BadRequestError','../../internal/git.internal','__esModule','../../git-api/services/gitlab-api.service','getCurrentUser','metadata','get','constructor','update','delete','AuthSettingsService','request','createRequestToRepo','NotFoundError','277666EVxjQx','../../../core/errors/not-found.error','name','Repo','apiBody','GitlabApiService','public','defaultBranch','master','getOne','Service','put','createEmptyBranch','path','../../../core/errors/bad-request.error','api','1102253zYrcrN','GitRepoService','fromGitlab','private','defaults','projects','./git-repo.service','__param'];const a95_0x30056a=a95_0x262f;(function(_0x465526,_0x476bcf){const _0x33662b=a95_0x262f;while(!![]){try{const _0x1afeb1=-parseInt(_0x33662b(0x13d))*-parseInt(_0x33662b(0x138))+parseInt(_0x33662b(0x124))*-parseInt(_0x33662b(0x12c))+-parseInt(_0x33662b(0x119))+-parseInt(_0x33662b(0x109))+parseInt(_0x33662b(0x128))+-parseInt(_0x33662b(0x12e))+-parseInt(_0x33662b(0x12b))*-parseInt(_0x33662b(0x127));if(_0x1afeb1===_0x476bcf)break;else _0x465526['push'](_0x465526['shift']());}catch(_0x316d89){_0x465526['push'](_0x465526['shift']());}}}(a95_0x57bd,0xe82d2));const a95_0x1bc8ab=function(){let _0x309353=!![];return function(_0xe26c2d,_0x577e5c){const _0x45527e=_0x309353?function(){if(_0x577e5c){const _0xc0ec2b=_0x577e5c['apply'](_0xe26c2d,arguments);return _0x577e5c=null,_0xc0ec2b;}}:function(){};return _0x309353=![],_0x45527e;};}(),a95_0x1e8097=a95_0x1bc8ab(this,function(){const _0x12ce29=function(){const _0x1ce82e=a95_0x262f,_0x280dcc=_0x12ce29[_0x1ce82e(0x102)](_0x1ce82e(0x13b))()[_0x1ce82e(0x102)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x280dcc[_0x1ce82e(0x13c)](a95_0x1e8097);};return _0x12ce29();});function a95_0x262f(_0x52a638,_0x43e1c8){return a95_0x262f=function(_0x219e2c,_0x1e8097){_0x219e2c=_0x219e2c-0x101;let _0x1bc8ab=a95_0x57bd[_0x219e2c];return _0x1bc8ab;},a95_0x262f(_0x52a638,_0x43e1c8);}a95_0x1e8097();'use strict';var __decorate=this&&this[a95_0x30056a(0x12d)]||function(_0x5659e6,_0x3f280a,_0x5e611e,_0x5c9415){const _0x458bac=a95_0x30056a;var _0x1bcc37=arguments['length'],_0x533566=_0x1bcc37<0x3?_0x3f280a:_0x5c9415===null?_0x5c9415=Object[_0x458bac(0x13a)](_0x3f280a,_0x5e611e):_0x5c9415,_0x2342f1;if(typeof Reflect===_0x458bac(0x122)&&typeof Reflect['decorate']===_0x458bac(0x126))_0x533566=Reflect[_0x458bac(0x129)](_0x5659e6,_0x3f280a,_0x5e611e,_0x5c9415);else{for(var _0x2b6b52=_0x5659e6[_0x458bac(0x132)]-0x1;_0x2b6b52>=0x0;_0x2b6b52--)if(_0x2342f1=_0x5659e6[_0x2b6b52])_0x533566=(_0x1bcc37<0x3?_0x2342f1(_0x533566):_0x1bcc37>0x3?_0x2342f1(_0x3f280a,_0x5e611e,_0x533566):_0x2342f1(_0x3f280a,_0x5e611e))||_0x533566;}return _0x1bcc37>0x3&&_0x533566&&Object[_0x458bac(0x121)](_0x3f280a,_0x5e611e,_0x533566),_0x533566;},__metadata=this&&this[a95_0x30056a(0x131)]||function(_0x2bbad2,_0x57f35c){const _0x213a0c=a95_0x30056a;if(typeof Reflect===_0x213a0c(0x122)&&typeof Reflect[_0x213a0c(0x143)]===_0x213a0c(0x126))return Reflect['metadata'](_0x2bbad2,_0x57f35c);},__param=this&&this[a95_0x30056a(0x120)]||function(_0x2176a1,_0x4e6950){return function(_0x1a4e26,_0x29eb91){_0x4e6950(_0x1a4e26,_0x29eb91,_0x2176a1);};};Object[a95_0x30056a(0x121)](exports,a95_0x30056a(0x140),{'value':!![]}),exports['GitlabRepoService']=void 0x0;const bad_request_error_1=require(a95_0x30056a(0x117)),not_found_error_1=require(a95_0x30056a(0x10a)),gitlab_api_service_1=require(a95_0x30056a(0x141)),typedi_1=require(a95_0x30056a(0x12f)),git_internal_1=require(a95_0x30056a(0x13f)),auth_settings_service_1=require(a95_0x30056a(0x123)),repo_class_1=require(a95_0x30056a(0x134)),git_repo_service_1=require(a95_0x30056a(0x11f));let GitlabRepoService=class GitlabRepoService extends git_repo_service_1[a95_0x30056a(0x11a)]{constructor(_0x375b68,_0x379174){const _0x1eb7e2=a95_0x30056a;super(_0x375b68),this[_0x1eb7e2(0x118)]=_0x375b68,this[_0x1eb7e2(0x135)]=_0x379174[_0x1eb7e2(0x137)]['groupId'];}async[a95_0x30056a(0x107)](_0x5af410){const _0x5c9816=a95_0x30056a;let _0x38a909='';if(this[_0x5c9816(0x135)]){const _0x1a2d52=await this[_0x5c9816(0x118)]['getGroup'](this[_0x5c9816(0x135)]);_0x38a909=_0x1a2d52[_0x5c9816(0x116)];}else{const _0x29eaa0=await this[_0x5c9816(0x118)][_0x5c9816(0x142)]();_0x38a909=_0x29eaa0[_0x5c9816(0x136)];}const _0x442890=this['api'][_0x5c9816(0x130)](this[_0x5c9816(0x106)][_0x5c9816(0x11d)][_0x5c9816(0x139)]+'/projects/'+encodeURIComponent(_0x38a909+'/'+_0x5af410));return _0x442890;}async['create'](_0x38166a){const _0x3d3187=a95_0x30056a;try{const _0x112117={'name':_0x38166a[_0x3d3187(0x10b)],'visibility':_0x38166a[_0x3d3187(0x11c)]?_0x3d3187(0x11c):_0x3d3187(0x10f),'namespace_id':this[_0x3d3187(0x135)],..._0x38166a[_0x3d3187(0x10d)]||{}},_0x1c8f6a=await this['request'][_0x3d3187(0x125)](_0x3d3187(0x11e),_0x112117),_0x3a69f2=repo_class_1[_0x3d3187(0x10c)]['fromGitlab'](_0x1c8f6a);return _0x38166a['autoInit']&&await git_internal_1[_0x3d3187(0x12a)][_0x3d3187(0x115)](_0x3a69f2,_0x38166a[_0x3d3187(0x110)]||_0x3d3187(0x111)),this['getOne'](_0x3a69f2[_0x3d3187(0x10b)]);}catch(_0x1c36ff){throw new bad_request_error_1[(_0x3d3187(0x13e))](_0x1c36ff);}}async[a95_0x30056a(0x112)](_0x231609){const _0x53b34e=a95_0x30056a;try{const _0x1c5b59=await this[_0x53b34e(0x107)](_0x231609),_0x3cde09=await _0x1c5b59[_0x53b34e(0x101)]('');return repo_class_1[_0x53b34e(0x10c)][_0x53b34e(0x11b)](_0x3cde09);}catch(_0x10fe38){throw new not_found_error_1[(_0x53b34e(0x108))](_0x10fe38);}}async[a95_0x30056a(0x103)](_0x1b39c2,_0x34aad2){const _0x427088=a95_0x30056a;try{const _0x14720e=await this[_0x427088(0x107)](_0x1b39c2),_0x152154=await _0x14720e[_0x427088(0x114)]('',_0x34aad2);return repo_class_1[_0x427088(0x10c)][_0x427088(0x11b)](_0x152154);}catch(_0x1dd94d){throw new not_found_error_1['NotFoundError'](_0x1dd94d);}}async[a95_0x30056a(0x104)](_0x4db2ae){const _0xa7d286=a95_0x30056a;try{const _0x1a6613=await this['createRequestToRepo'](_0x4db2ae);await _0x1a6613[_0xa7d286(0x104)]('');}catch(_0x42df9a){throw new bad_request_error_1[(_0xa7d286(0x13e))](_0x42df9a);}}};GitlabRepoService=__decorate([typedi_1[a95_0x30056a(0x113)](),__param(0x1,typedi_1[a95_0x30056a(0x133)]()),__metadata('design:paramtypes',[gitlab_api_service_1[a95_0x30056a(0x10e)],auth_settings_service_1[a95_0x30056a(0x105)]])],GitlabRepoService),exports['GitlabRepoService']=GitlabRepoService;