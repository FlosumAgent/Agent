const a96_0x2d0a37=a96_0x415b;(function(_0xe6f9c,_0x12c88e){const _0x1c661b=a96_0x415b,_0x18f0f1=_0xe6f9c();while(!![]){try{const _0x37ac49=-parseInt(_0x1c661b(0x145))/0x1+parseInt(_0x1c661b(0x164))/0x2*(parseInt(_0x1c661b(0x13b))/0x3)+parseInt(_0x1c661b(0x163))/0x4+-parseInt(_0x1c661b(0x14b))/0x5*(-parseInt(_0x1c661b(0x154))/0x6)+parseInt(_0x1c661b(0x15b))/0x7+parseInt(_0x1c661b(0x149))/0x8+-parseInt(_0x1c661b(0x137))/0x9;if(_0x37ac49===_0x12c88e)break;else _0x18f0f1['push'](_0x18f0f1['shift']());}catch(_0x3fa332){_0x18f0f1['push'](_0x18f0f1['shift']());}}}(a96_0x4f46,0x6e9e2));const a96_0x4300ad=function(){let _0x268977=!![];return function(_0x48689e,_0x131c0d){const _0x4d9c30=_0x268977?function(){const _0x296ac8=a96_0x415b;if(_0x131c0d){const _0x4cdc77=_0x131c0d[_0x296ac8(0x141)](_0x48689e,arguments);return _0x131c0d=null,_0x4cdc77;}}:function(){};return _0x268977=![],_0x4d9c30;};}(),a96_0x4903f0=a96_0x4300ad(this,function(){const _0x414c5d=a96_0x415b;return a96_0x4903f0['toString']()[_0x414c5d(0x14f)](_0x414c5d(0x130))[_0x414c5d(0x14d)]()[_0x414c5d(0x16d)](a96_0x4903f0)[_0x414c5d(0x14f)]('(((.+)+)+)+$');});a96_0x4903f0();'use strict';var __decorate=this&&this[a96_0x2d0a37(0x140)]||function(_0x45e635,_0x3df762,_0x37a286,_0x482fe1){const _0x95a38c=a96_0x2d0a37;var _0x308e52=arguments[_0x95a38c(0x13c)],_0x5f07b5=_0x308e52<0x3?_0x3df762:_0x482fe1===null?_0x482fe1=Object['getOwnPropertyDescriptor'](_0x3df762,_0x37a286):_0x482fe1,_0x15a8e1;if(typeof Reflect===_0x95a38c(0x13d)&&typeof Reflect[_0x95a38c(0x13e)]===_0x95a38c(0x152))_0x5f07b5=Reflect[_0x95a38c(0x13e)](_0x45e635,_0x3df762,_0x37a286,_0x482fe1);else{for(var _0x15e928=_0x45e635[_0x95a38c(0x13c)]-0x1;_0x15e928>=0x0;_0x15e928--)if(_0x15a8e1=_0x45e635[_0x15e928])_0x5f07b5=(_0x308e52<0x3?_0x15a8e1(_0x5f07b5):_0x308e52>0x3?_0x15a8e1(_0x3df762,_0x37a286,_0x5f07b5):_0x15a8e1(_0x3df762,_0x37a286))||_0x5f07b5;}return _0x308e52>0x3&&_0x5f07b5&&Object[_0x95a38c(0x169)](_0x3df762,_0x37a286,_0x5f07b5),_0x5f07b5;},__metadata=this&&this[a96_0x2d0a37(0x131)]||function(_0x3dd565,_0x4cfdeb){const _0xed39b1=a96_0x2d0a37;if(typeof Reflect===_0xed39b1(0x13d)&&typeof Reflect[_0xed39b1(0x15e)]===_0xed39b1(0x152))return Reflect['metadata'](_0x3dd565,_0x4cfdeb);},__param=this&&this[a96_0x2d0a37(0x15a)]||function(_0x471752,_0x39b60e){return function(_0x37f840,_0x1993ad){_0x39b60e(_0x37f840,_0x1993ad,_0x471752);};};Object[a96_0x2d0a37(0x169)](exports,'__esModule',{'value':!![]}),exports[a96_0x2d0a37(0x134)]=void 0x0;function a96_0x415b(_0x17ad24,_0x184965){const _0x95be0e=a96_0x4f46();return a96_0x415b=function(_0x4903f0,_0x4300ad){_0x4903f0=_0x4903f0-0x130;let _0x4f4655=_0x95be0e[_0x4903f0];return _0x4f4655;},a96_0x415b(_0x17ad24,_0x184965);}const bad_request_error_1=require(a96_0x2d0a37(0x14e)),not_found_error_1=require(a96_0x2d0a37(0x16a)),gitlab_api_service_1=require('../../git-api/services/gitlab-api.service'),typedi_1=require('typedi'),git_internal_1=require(a96_0x2d0a37(0x135)),auth_settings_service_1=require('../../shared/services/auth-settings.service'),repo_class_1=require(a96_0x2d0a37(0x167)),git_repo_service_1=require(a96_0x2d0a37(0x146));let GitlabRepoService=class GitlabRepoService extends git_repo_service_1[a96_0x2d0a37(0x153)]{constructor(_0x33fe48,_0x592161){const _0x17c4d5=a96_0x2d0a37;super(_0x33fe48),this[_0x17c4d5(0x142)]=_0x33fe48,this[_0x17c4d5(0x15c)]=_0x592161[_0x17c4d5(0x15f)][_0x17c4d5(0x15c)];}async[a96_0x2d0a37(0x16c)](_0x1497bd){const _0x22e56a=a96_0x2d0a37;let _0x3bb3ea='';if(this['groupId']){const _0x129fa5=await this[_0x22e56a(0x142)][_0x22e56a(0x139)](this['groupId']);_0x3bb3ea=_0x129fa5[_0x22e56a(0x158)];}else{const _0x4cd9d5=await this['api'][_0x22e56a(0x155)]();_0x3bb3ea=_0x4cd9d5['username'];}const _0x6c953e=this['api'][_0x22e56a(0x159)](this[_0x22e56a(0x160)][_0x22e56a(0x143)][_0x22e56a(0x148)]+_0x22e56a(0x132)+encodeURIComponent(_0x3bb3ea+'/'+_0x1497bd));return _0x6c953e;}async['create'](_0x3b8f59){const _0x154393=a96_0x2d0a37;try{const _0x2943dd={'name':_0x3b8f59[_0x154393(0x138)],'visibility':_0x3b8f59['private']?_0x154393(0x136):_0x154393(0x14c),'namespace_id':this[_0x154393(0x15c)],..._0x3b8f59[_0x154393(0x156)]||{}},_0x43213f=await this[_0x154393(0x160)][_0x154393(0x166)](_0x154393(0x15d),_0x2943dd),_0x3891b4=repo_class_1[_0x154393(0x13a)][_0x154393(0x151)](_0x43213f);return _0x3b8f59[_0x154393(0x14a)]&&await git_internal_1[_0x154393(0x168)][_0x154393(0x157)](_0x3891b4,_0x3b8f59[_0x154393(0x150)]||'master'),this[_0x154393(0x161)](_0x3891b4[_0x154393(0x138)]);}catch(_0x429da4){throw new bad_request_error_1[(_0x154393(0x144))](_0x429da4);}}async[a96_0x2d0a37(0x161)](_0x485e77){const _0x27cffd=a96_0x2d0a37;try{const _0x48bfd1=await this[_0x27cffd(0x16c)](_0x485e77),_0x3063cc=await _0x48bfd1['get']('');return repo_class_1[_0x27cffd(0x13a)]['fromGitlab'](_0x3063cc);}catch(_0x593742){throw new not_found_error_1[(_0x27cffd(0x147))](_0x593742);}}async[a96_0x2d0a37(0x16b)](_0x3f758e,_0x210b8f){const _0x33e377=a96_0x2d0a37;try{const _0x2735d9=await this['createRequestToRepo'](_0x3f758e),_0x3a0f0b=await _0x2735d9[_0x33e377(0x165)]('',_0x210b8f);return repo_class_1[_0x33e377(0x13a)][_0x33e377(0x151)](_0x3a0f0b);}catch(_0x43a3d4){throw new not_found_error_1[(_0x33e377(0x147))](_0x43a3d4);}}async['delete'](_0x510719){const _0x5cd3ad=a96_0x2d0a37;try{const _0x5f1a91=await this[_0x5cd3ad(0x16c)](_0x510719);await _0x5f1a91[_0x5cd3ad(0x133)]('');}catch(_0x10d5ad){throw new bad_request_error_1[(_0x5cd3ad(0x144))](_0x10d5ad);}}};function a96_0x4f46(){const _0x292e62=['Git','defineProperty','../../../core/errors/not-found.error','update','createRequestToRepo','constructor','(((.+)+)+)+$','__metadata','/projects/','delete','GitlabRepoService','../../internal/git.internal','private','6710067LuaLXI','name','getGroup','Repo','165eTUidR','length','object','decorate','Service','__decorate','apply','api','defaults','BadRequestError','893373PVVpho','./git-repo.service','NotFoundError','baseURL','4153456xuSGex','autoInit','2255kcJJcr','public','toString','../../../core/errors/bad-request.error','search','defaultBranch','fromGitlab','function','GitRepoService','1266xtobzZ','getCurrentUser','apiBody','createEmptyBranch','path','createRequest','__param','1774178gBxxoL','groupId','projects','metadata','gitlab','request','getOne','design:paramtypes','2553696qjposT','21302biEtNI','put','post','../repo.class'];a96_0x4f46=function(){return _0x292e62;};return a96_0x4f46();}GitlabRepoService=__decorate([(0x0,typedi_1[a96_0x2d0a37(0x13f)])(),__param(0x1,(0x0,typedi_1['Inject'])()),__metadata(a96_0x2d0a37(0x162),[gitlab_api_service_1['GitlabApiService'],auth_settings_service_1['AuthSettingsService']])],GitlabRepoService),exports['GitlabRepoService']=GitlabRepoService;