const a96_0x20ed=['getOwnPropertyDescriptor','GitRepoService','../../internal/git.internal','baseURL','./git-repo.service','Repo','204GTNDFp','64559rDVAdW','defaultBranch','getOne','AuthSettingsService','776604jwCqJD','object','put','typedi','1RNJOpD','constructor','length','190642eZJhXi','name','defineProperty','projects','1YUAZsp','__esModule','request','Inject','return\x20/\x22\x20+\x20this\x20+\x20\x22/','656398aXpLYx','function','private','5JDdGkW','GitlabApiService','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','6FRNxTK','update','getGroup','fromGitlab','test','../../../core/errors/not-found.error','1029890zdoLsY','9743icNylv','path','api','BadRequestError','createRequest','1942hfcvpF','username','/projects/','decorate','groupId','Git','__metadata','create','createRequestToRepo','getCurrentUser','Service','metadata','GitlabRepoService','public','delete','../../shared/services/auth-settings.service','../../../core/errors/bad-request.error'];const a96_0x781a41=a96_0x5e44;(function(_0x5d6103,_0x4fa387){const _0x4fc21c=a96_0x5e44;while(!![]){try{const _0xbf80da=parseInt(_0x4fc21c(0xff))*parseInt(_0x4fc21c(0xfb))+parseInt(_0x4fc21c(0xd3))*-parseInt(_0x4fc21c(0xda))+parseInt(_0x4fc21c(0x10b))+parseInt(_0x4fc21c(0xf7))*parseInt(_0x4fc21c(0xd0))+parseInt(_0x4fc21c(0x102))*parseInt(_0x4fc21c(0x106))+-parseInt(_0x4fc21c(0xf6))*parseInt(_0x4fc21c(0xdf))+-parseInt(_0x4fc21c(0xd9));if(_0xbf80da===_0x4fa387)break;else _0x5d6103['push'](_0x5d6103['shift']());}catch(_0x15b173){_0x5d6103['push'](_0x5d6103['shift']());}}}(a96_0x20ed,0x70c63));const a96_0x47544a=function(){let _0x3620e2=!![];return function(_0x59fd38,_0xbaff6e){const _0x8a5d0a=_0x3620e2?function(){if(_0xbaff6e){const _0x30d97b=_0xbaff6e['apply'](_0x59fd38,arguments);return _0xbaff6e=null,_0x30d97b;}}:function(){};return _0x3620e2=![],_0x8a5d0a;};}(),a96_0x471ebe=a96_0x47544a(this,function(){const _0x36abe8=function(){const _0x5aab5f=a96_0x5e44,_0x86a240=_0x36abe8[_0x5aab5f(0x100)](_0x5aab5f(0x10a))()['constructor'](_0x5aab5f(0xd2));return!_0x86a240[_0x5aab5f(0xd7)](a96_0x471ebe);};return _0x36abe8();});a96_0x471ebe();'use strict';var __decorate=this&&this['__decorate']||function(_0x30421d,_0xb87727,_0x531744,_0x5c253c){const _0x2227df=a96_0x5e44;var _0x25b6da=arguments['length'],_0x4f9642=_0x25b6da<0x3?_0xb87727:_0x5c253c===null?_0x5c253c=Object[_0x2227df(0xf0)](_0xb87727,_0x531744):_0x5c253c,_0x16f75d;if(typeof Reflect===_0x2227df(0xfc)&&typeof Reflect[_0x2227df(0xe2)]===_0x2227df(0xce))_0x4f9642=Reflect[_0x2227df(0xe2)](_0x30421d,_0xb87727,_0x531744,_0x5c253c);else{for(var _0xb7361=_0x30421d[_0x2227df(0x101)]-0x1;_0xb7361>=0x0;_0xb7361--)if(_0x16f75d=_0x30421d[_0xb7361])_0x4f9642=(_0x25b6da<0x3?_0x16f75d(_0x4f9642):_0x25b6da>0x3?_0x16f75d(_0xb87727,_0x531744,_0x4f9642):_0x16f75d(_0xb87727,_0x531744))||_0x4f9642;}return _0x25b6da>0x3&&_0x4f9642&&Object[_0x2227df(0x104)](_0xb87727,_0x531744,_0x4f9642),_0x4f9642;},__metadata=this&&this[a96_0x781a41(0xe5)]||function(_0x3d5323,_0x19012e){const _0x2d0ee1=a96_0x781a41;if(typeof Reflect===_0x2d0ee1(0xfc)&&typeof Reflect[_0x2d0ee1(0xea)]==='function')return Reflect['metadata'](_0x3d5323,_0x19012e);},__param=this&&this['__param']||function(_0x31538a,_0x52fdbe){return function(_0x178770,_0x5742ed){_0x52fdbe(_0x178770,_0x5742ed,_0x31538a);};};Object['defineProperty'](exports,a96_0x781a41(0x107),{'value':!![]}),exports[a96_0x781a41(0xeb)]=void 0x0;const bad_request_error_1=require(a96_0x781a41(0xef)),not_found_error_1=require(a96_0x781a41(0xd8)),gitlab_api_service_1=require('../../git-api/services/gitlab-api.service'),typedi_1=require(a96_0x781a41(0xfe)),git_internal_1=require(a96_0x781a41(0xf2)),auth_settings_service_1=require(a96_0x781a41(0xee)),repo_class_1=require('../repo.class'),git_repo_service_1=require(a96_0x781a41(0xf4));function a96_0x5e44(_0x2cb2eb,_0x569dd4){return a96_0x5e44=function(_0x3d67df,_0x471ebe){_0x3d67df=_0x3d67df-0xce;let _0x47544a=a96_0x20ed[_0x3d67df];return _0x47544a;},a96_0x5e44(_0x2cb2eb,_0x569dd4);}let GitlabRepoService=class GitlabRepoService extends git_repo_service_1[a96_0x781a41(0xf1)]{constructor(_0x1b7671,_0x25d387){const _0x451497=a96_0x781a41;super(_0x1b7671),this[_0x451497(0xdc)]=_0x1b7671,this[_0x451497(0xe3)]=_0x25d387['gitlab'][_0x451497(0xe3)];}async[a96_0x781a41(0xe7)](_0x305c47){const _0x31f22d=a96_0x781a41;let _0x2c8916='';if(this[_0x31f22d(0xe3)]){const _0x25376a=await this['api'][_0x31f22d(0xd5)](this[_0x31f22d(0xe3)]);_0x2c8916=_0x25376a[_0x31f22d(0xdb)];}else{const _0xf44410=await this[_0x31f22d(0xdc)][_0x31f22d(0xe8)]();_0x2c8916=_0xf44410[_0x31f22d(0xe0)];}const _0x4ab4a3=this[_0x31f22d(0xdc)][_0x31f22d(0xde)](this[_0x31f22d(0x108)]['defaults'][_0x31f22d(0xf3)]+_0x31f22d(0xe1)+encodeURIComponent(_0x2c8916+'/'+_0x305c47));return _0x4ab4a3;}async[a96_0x781a41(0xe6)](_0x4d7f7f){const _0x1ff441=a96_0x781a41;try{const _0x421de8={'name':_0x4d7f7f[_0x1ff441(0x103)],'visibility':_0x4d7f7f[_0x1ff441(0xcf)]?_0x1ff441(0xcf):_0x1ff441(0xec),'namespace_id':this[_0x1ff441(0xe3)],..._0x4d7f7f['apiBody']||{}},_0x19de97=await this[_0x1ff441(0x108)]['post'](_0x1ff441(0x105),_0x421de8),_0x348371=repo_class_1[_0x1ff441(0xf5)][_0x1ff441(0xd6)](_0x19de97);return _0x4d7f7f['autoInit']&&await git_internal_1[_0x1ff441(0xe4)]['createEmptyBranch'](_0x348371,_0x4d7f7f[_0x1ff441(0xf8)]||'master'),this[_0x1ff441(0xf9)](_0x348371[_0x1ff441(0x103)]);}catch(_0x5dd245){throw new bad_request_error_1[(_0x1ff441(0xdd))](_0x5dd245);}}async[a96_0x781a41(0xf9)](_0x56d6a1){const _0x25b43b=a96_0x781a41;try{const _0x4caa7a=await this[_0x25b43b(0xe7)](_0x56d6a1),_0x1a0829=await _0x4caa7a['get']('');return repo_class_1[_0x25b43b(0xf5)][_0x25b43b(0xd6)](_0x1a0829);}catch(_0x160f9f){throw new not_found_error_1['NotFoundError'](_0x160f9f);}}async[a96_0x781a41(0xd4)](_0x144f06,_0x211abd){const _0x2b410a=a96_0x781a41;try{const _0x74c893=await this[_0x2b410a(0xe7)](_0x144f06),_0x24ea28=await _0x74c893[_0x2b410a(0xfd)]('',_0x211abd);return repo_class_1[_0x2b410a(0xf5)][_0x2b410a(0xd6)](_0x24ea28);}catch(_0x1ca0ad){throw new not_found_error_1['NotFoundError'](_0x1ca0ad);}}async[a96_0x781a41(0xed)](_0x594d0a){const _0x4d3202=a96_0x781a41;try{const _0x1f2757=await this[_0x4d3202(0xe7)](_0x594d0a);await _0x1f2757[_0x4d3202(0xed)]('');}catch(_0x49fa51){throw new bad_request_error_1[(_0x4d3202(0xdd))](_0x49fa51);}}};GitlabRepoService=__decorate([typedi_1[a96_0x781a41(0xe9)](),__param(0x1,typedi_1[a96_0x781a41(0x109)]()),__metadata('design:paramtypes',[gitlab_api_service_1[a96_0x781a41(0xd1)],auth_settings_service_1[a96_0x781a41(0xfa)]])],GitlabRepoService),exports['GitlabRepoService']=GitlabRepoService;