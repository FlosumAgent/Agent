const a89_0x54b0=['defineProperty','githubApi','delete','test','1gFetiK','565394FwNapA','defaultBranch','/repos','../../shared/services/auth-settings.service','__decorate','metadata','object','apply','request','length','login','getOwnPropertyDescriptor','decorate','repos/','name','defaults','GithubRepoService','660220mKxInU','orgs/','update','return\x20/\x22\x20+\x20this\x20+\x20\x22/','AuthSettingsService','GitRepoService','post','patch','getOne','baseURL','branches','./git-repo.service','design:paramtypes','1JjguQr','8jBhAuH','251MzzGdt','392933xvNuAc','autoInit','Service','createRequest','NotFoundError','BadRequestError','../../../core/errors/not-found.error','../../../core/errors/bad-request.error','create','509412mASEBk','3637aOyPTR','Inject','function','GithubApiService','organization','1619IHFisb','constructor','createRequestToRepos','Repo','1534243CRBrvv','apiBody'];const a89_0x147224=a89_0x1687;(function(_0x448eb8,_0x1b0f69){const _0x145cb8=a89_0x1687;while(!![]){try{const _0x57f2a8=parseInt(_0x145cb8(0xf0))*-parseInt(_0x145cb8(0xe0))+-parseInt(_0x145cb8(0xde))*parseInt(_0x145cb8(0xfb))+-parseInt(_0x145cb8(0xd1))+parseInt(_0x145cb8(0xeb))*-parseInt(_0x145cb8(0xdf))+parseInt(_0x145cb8(0xe1))+parseInt(_0x145cb8(0xea))+-parseInt(_0x145cb8(0xfa))*-parseInt(_0x145cb8(0xf4));if(_0x57f2a8===_0x1b0f69)break;else _0x448eb8['push'](_0x448eb8['shift']());}catch(_0x32310a){_0x448eb8['push'](_0x448eb8['shift']());}}}(a89_0x54b0,0xbd555));function a89_0x1687(_0x5b510c,_0x20a3bf){return a89_0x1687=function(_0x5b9060,_0x664629){_0x5b9060=_0x5b9060-0xcd;let _0x1b6fac=a89_0x54b0[_0x5b9060];return _0x1b6fac;},a89_0x1687(_0x5b510c,_0x20a3bf);}const a89_0x1b6fac=function(){let _0x5c18ab=!![];return function(_0x25cee0,_0x4f9d03){const _0x49436c=_0x5c18ab?function(){const _0x33f5cc=a89_0x1687;if(_0x4f9d03){const _0x22b1ac=_0x4f9d03[_0x33f5cc(0x102)](_0x25cee0,arguments);return _0x4f9d03=null,_0x22b1ac;}}:function(){};return _0x5c18ab=![],_0x49436c;};}(),a89_0x664629=a89_0x1b6fac(this,function(){const _0x40b372=function(){const _0x34db85=a89_0x1687,_0x4d09c7=_0x40b372[_0x34db85(0xf1)](_0x34db85(0xd4))()[_0x34db85(0xf1)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x4d09c7[_0x34db85(0xf9)](a89_0x664629);};return _0x40b372();});a89_0x664629();'use strict';var __decorate=this&&this[a89_0x147224(0xff)]||function(_0x14939a,_0x1ebfec,_0x4377df,_0x1ab0fb){const _0x220cbf=a89_0x147224;var _0x41deb1=arguments[_0x220cbf(0x104)],_0x436eab=_0x41deb1<0x3?_0x1ebfec:_0x1ab0fb===null?_0x1ab0fb=Object[_0x220cbf(0x106)](_0x1ebfec,_0x4377df):_0x1ab0fb,_0x418a2c;if(typeof Reflect===_0x220cbf(0x101)&&typeof Reflect[_0x220cbf(0x107)]==='function')_0x436eab=Reflect[_0x220cbf(0x107)](_0x14939a,_0x1ebfec,_0x4377df,_0x1ab0fb);else{for(var _0x346d2e=_0x14939a['length']-0x1;_0x346d2e>=0x0;_0x346d2e--)if(_0x418a2c=_0x14939a[_0x346d2e])_0x436eab=(_0x41deb1<0x3?_0x418a2c(_0x436eab):_0x41deb1>0x3?_0x418a2c(_0x1ebfec,_0x4377df,_0x436eab):_0x418a2c(_0x1ebfec,_0x4377df))||_0x436eab;}return _0x41deb1>0x3&&_0x436eab&&Object[_0x220cbf(0xf6)](_0x1ebfec,_0x4377df,_0x436eab),_0x436eab;},__metadata=this&&this['__metadata']||function(_0x47d36f,_0xc635c2){const _0x506804=a89_0x147224;if(typeof Reflect==='object'&&typeof Reflect[_0x506804(0x100)]===_0x506804(0xed))return Reflect[_0x506804(0x100)](_0x47d36f,_0xc635c2);},__param=this&&this['__param']||function(_0x5f50f0,_0x271b8b){return function(_0x190868,_0x4a632a){_0x271b8b(_0x190868,_0x4a632a,_0x5f50f0);};};Object[a89_0x147224(0xf6)](exports,'__esModule',{'value':!![]}),exports[a89_0x147224(0xd0)]=void 0x0;const bad_request_error_1=require(a89_0x147224(0xe8)),not_found_error_1=require(a89_0x147224(0xe7)),github_api_service_1=require('../../git-api/services/github-api.service'),auth_settings_service_1=require(a89_0x147224(0xfe)),typedi_1=require('typedi'),repo_class_1=require('../repo.class'),git_repo_service_1=require(a89_0x147224(0xdc));let GithubRepoService=class GithubRepoService extends git_repo_service_1[a89_0x147224(0xd6)]{constructor(_0x422b1c,_0x5c0b8a){const _0x2fdc2f=a89_0x147224;super(_0x422b1c),this[_0x2fdc2f(0xf7)]=_0x422b1c,this['organization']=_0x5c0b8a['github'][_0x2fdc2f(0xef)];}async['createRequestToRepos'](){const _0x1f47ec=a89_0x147224;let _0x21fddc='';if(this[_0x1f47ec(0xef)])_0x21fddc=_0x1f47ec(0xcd)+this['organization'];else{const _0x15b12f=await this[_0x1f47ec(0xf7)]['getCurrentUser']();_0x21fddc=_0x1f47ec(0xcd)+_0x15b12f[_0x1f47ec(0x105)];}const _0x54f1ae=this[_0x1f47ec(0xf7)][_0x1f47ec(0xe4)](this[_0x1f47ec(0x103)][_0x1f47ec(0xcf)][_0x1f47ec(0xda)]+'/'+_0x21fddc);return _0x54f1ae;}async['create'](_0x13f532){const _0x26261a=a89_0x147224;try{const _0x576b0a=this[_0x26261a(0xef)]?_0x26261a(0xd2)+this['organization']+_0x26261a(0xfd):'user/repos',_0x389642={'name':_0x13f532[_0x26261a(0xce)],'auto_init':_0x13f532[_0x26261a(0xe2)],..._0x13f532[_0x26261a(0xf5)]||{}},_0x10de34=await this[_0x26261a(0x103)][_0x26261a(0xd7)](_0x576b0a,_0x389642);let _0x2e2510=repo_class_1['Repo']['fromGithub'](_0x10de34);if(_0x13f532['defaultBranch']){const {sha:_0x26a11e}=await _0x2e2510[_0x26261a(0xdb)]['getOne'](_0x2e2510[_0x26261a(0xfc)]);await _0x2e2510[_0x26261a(0xdb)][_0x26261a(0xe9)]({'name':_0x13f532[_0x26261a(0xfc)],'sha':_0x26a11e}),_0x2e2510=await this['update'](_0x13f532[_0x26261a(0xce)],{'default_branch':_0x13f532[_0x26261a(0xfc)]});}return _0x2e2510;}catch(_0x18b383){throw new bad_request_error_1['BadRequestError'](_0x18b383);}}async[a89_0x147224(0xd9)](_0x46a886){const _0x395fa4=a89_0x147224;try{const _0x536f81=await this[_0x395fa4(0xf2)](),_0x7b6171=await _0x536f81['get'](_0x46a886);return repo_class_1[_0x395fa4(0xf3)]['fromGithub'](_0x7b6171);}catch(_0x521164){throw new not_found_error_1[(_0x395fa4(0xe5))](_0x521164);}}async[a89_0x147224(0xd3)](_0x34e767,_0x541ea0){const _0x23e4e9=a89_0x147224;try{const _0x2a4f58=await this[_0x23e4e9(0xf2)](),_0xa1f377=await _0x2a4f58[_0x23e4e9(0xd8)](_0x34e767,_0x541ea0);return repo_class_1[_0x23e4e9(0xf3)]['fromGithub'](_0xa1f377);}catch(_0x59109a){throw new not_found_error_1[(_0x23e4e9(0xe5))](_0x59109a);}}async[a89_0x147224(0xf8)](_0x47922b){const _0x513c46=a89_0x147224;try{const _0x39fea0=await this['createRequestToRepos']();await _0x39fea0[_0x513c46(0xf8)](_0x47922b);}catch(_0x17b5d6){throw new bad_request_error_1[(_0x513c46(0xe6))](_0x17b5d6);}}};GithubRepoService=__decorate([typedi_1[a89_0x147224(0xe3)](),__param(0x1,typedi_1[a89_0x147224(0xec)]()),__metadata(a89_0x147224(0xdd),[github_api_service_1[a89_0x147224(0xee)],auth_settings_service_1[a89_0x147224(0xd5)]])],GithubRepoService),exports[a89_0x147224(0xd0)]=GithubRepoService;