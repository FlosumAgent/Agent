const a92_0x21bc=['object','Inject','orgs/','getOne','apiBody','post','constructor','__param','../../../core/errors/bad-request.error','user/repos','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','/repos','426268XoVqTi','Service','142IBnGAJ','../../../core/errors/not-found.error','baseURL','549144rlQMwT','__esModule','apply','2399mbkXBy','defaultBranch','379483iYdwEz','NotFoundError','repos/','name','__metadata','test','createRequestToRepos','defineProperty','autoInit','defaults','Repo','get','patch','github','425145rDaGdl','design:paramtypes','488YENLcw','typedi','length','../../git-api/services/github-api.service','fromGithub','641xFlYkq','function','18459UIKmIF','update','49RiHbIX','request','GithubRepoService','../../shared/services/auth-settings.service','organization','login','delete','create','decorate','BadRequestError','githubApi'];const a92_0x539080=a92_0x3c6c;(function(_0x17fd9b,_0x2958cc){const _0x4d35a4=a92_0x3c6c;while(!![]){try{const _0x3ccce4=parseInt(_0x4d35a4(0xbd))*-parseInt(_0x4d35a4(0xb7))+parseInt(_0x4d35a4(0xd8))*parseInt(_0x4d35a4(0xd6))+parseInt(_0x4d35a4(0xcd))+-parseInt(_0x4d35a4(0xd4))*-parseInt(_0x4d35a4(0xcf))+parseInt(_0x4d35a4(0xb5))+-parseInt(_0x4d35a4(0xbf))+-parseInt(_0x4d35a4(0xba));if(_0x3ccce4===_0x2958cc)break;else _0x17fd9b['push'](_0x17fd9b['shift']());}catch(_0x2d9c9b){_0x17fd9b['push'](_0x17fd9b['shift']());}}}(a92_0x21bc,0xc32c3));const a92_0x2861bf=function(){let _0x3556a1=!![];return function(_0xbd307e,_0x26ebfc){const _0x3a1a93=_0x3556a1?function(){const _0x5a0daa=a92_0x3c6c;if(_0x26ebfc){const _0x3359b3=_0x26ebfc[_0x5a0daa(0xbc)](_0xbd307e,arguments);return _0x26ebfc=null,_0x3359b3;}}:function(){};return _0x3556a1=![],_0x3a1a93;};}(),a92_0x28204a=a92_0x2861bf(this,function(){const _0x145435=function(){const _0x10a5bb=a92_0x3c6c,_0xf0cfe8=_0x145435[_0x10a5bb(0xaf)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x10a5bb(0xaf)](_0x10a5bb(0xb3));return!_0xf0cfe8[_0x10a5bb(0xc4)](a92_0x28204a);};return _0x145435();});a92_0x28204a();'use strict';var __decorate=this&&this['__decorate']||function(_0x1d6cbd,_0x16b2af,_0x4e4abd,_0x5ab4df){const _0x9a5f8a=a92_0x3c6c;var _0x25e7e9=arguments[_0x9a5f8a(0xd1)],_0x58ba44=_0x25e7e9<0x3?_0x16b2af:_0x5ab4df===null?_0x5ab4df=Object['getOwnPropertyDescriptor'](_0x16b2af,_0x4e4abd):_0x5ab4df,_0x3910a3;if(typeof Reflect===_0x9a5f8a(0xa9)&&typeof Reflect[_0x9a5f8a(0xa6)]===_0x9a5f8a(0xd5))_0x58ba44=Reflect[_0x9a5f8a(0xa6)](_0x1d6cbd,_0x16b2af,_0x4e4abd,_0x5ab4df);else{for(var _0x94dca3=_0x1d6cbd[_0x9a5f8a(0xd1)]-0x1;_0x94dca3>=0x0;_0x94dca3--)if(_0x3910a3=_0x1d6cbd[_0x94dca3])_0x58ba44=(_0x25e7e9<0x3?_0x3910a3(_0x58ba44):_0x25e7e9>0x3?_0x3910a3(_0x16b2af,_0x4e4abd,_0x58ba44):_0x3910a3(_0x16b2af,_0x4e4abd))||_0x58ba44;}return _0x25e7e9>0x3&&_0x58ba44&&Object[_0x9a5f8a(0xc6)](_0x16b2af,_0x4e4abd,_0x58ba44),_0x58ba44;},__metadata=this&&this[a92_0x539080(0xc3)]||function(_0x1fcd69,_0x2c3c52){const _0x5f254c=a92_0x539080;if(typeof Reflect===_0x5f254c(0xa9)&&typeof Reflect['metadata']===_0x5f254c(0xd5))return Reflect['metadata'](_0x1fcd69,_0x2c3c52);},__param=this&&this[a92_0x539080(0xb0)]||function(_0x3ad460,_0x411160){return function(_0x42aaf4,_0x308338){_0x411160(_0x42aaf4,_0x308338,_0x3ad460);};};function a92_0x3c6c(_0x37ff97,_0x2ff5f5){return a92_0x3c6c=function(_0x577688,_0x28204a){_0x577688=_0x577688-0xa0;let _0x2861bf=a92_0x21bc[_0x577688];return _0x2861bf;},a92_0x3c6c(_0x37ff97,_0x2ff5f5);}Object[a92_0x539080(0xc6)](exports,a92_0x539080(0xbb),{'value':!![]}),exports['GithubRepoService']=void 0x0;const bad_request_error_1=require(a92_0x539080(0xb1)),not_found_error_1=require(a92_0x539080(0xb8)),github_api_service_1=require(a92_0x539080(0xd2)),auth_settings_service_1=require(a92_0x539080(0xa1)),typedi_1=require(a92_0x539080(0xd0)),repo_class_1=require('../repo.class'),git_repo_service_1=require('./git-repo.service');let GithubRepoService=class GithubRepoService extends git_repo_service_1['GitRepoService']{constructor(_0x433919,_0xb3864e){const _0xa6080a=a92_0x539080;super(_0x433919),this[_0xa6080a(0xa8)]=_0x433919,this['organization']=_0xb3864e[_0xa6080a(0xcc)]['organization'];}async[a92_0x539080(0xc5)](){const _0x3f780f=a92_0x539080;let _0x53ed46='';if(this[_0x3f780f(0xa2)])_0x53ed46=_0x3f780f(0xc1)+this[_0x3f780f(0xa2)];else{const _0x57a940=await this['githubApi']['getCurrentUser']();_0x53ed46=_0x3f780f(0xc1)+_0x57a940[_0x3f780f(0xa3)];}const _0xa53835=this['githubApi']['createRequest'](this[_0x3f780f(0xd9)][_0x3f780f(0xc8)][_0x3f780f(0xb9)]+'/'+_0x53ed46);return _0xa53835;}async['create'](_0x5f7d95){const _0x59fe30=a92_0x539080;try{const _0x21a5bf=this[_0x59fe30(0xa2)]?_0x59fe30(0xab)+this[_0x59fe30(0xa2)]+_0x59fe30(0xb4):_0x59fe30(0xb2),_0xac1293={'name':_0x5f7d95[_0x59fe30(0xc2)],'auto_init':_0x5f7d95[_0x59fe30(0xc7)],..._0x5f7d95[_0x59fe30(0xad)]||{}},_0x1e57e3=await this[_0x59fe30(0xd9)][_0x59fe30(0xae)](_0x21a5bf,_0xac1293);let _0x4592f8=repo_class_1['Repo'][_0x59fe30(0xd3)](_0x1e57e3);if(_0x5f7d95['defaultBranch']){const {sha:_0x6fd3b3}=await _0x4592f8['branches'][_0x59fe30(0xac)](_0x4592f8[_0x59fe30(0xbe)]);await _0x4592f8['branches'][_0x59fe30(0xa5)]({'name':_0x5f7d95[_0x59fe30(0xbe)],'sha':_0x6fd3b3}),_0x4592f8=await this['update'](_0x5f7d95[_0x59fe30(0xc2)],{'default_branch':_0x5f7d95[_0x59fe30(0xbe)]});}return _0x4592f8;}catch(_0x1160d8){throw new bad_request_error_1[(_0x59fe30(0xa7))](_0x1160d8);}}async['getOne'](_0x724e86){const _0x1ceccb=a92_0x539080;try{const _0x57f9fb=await this['createRequestToRepos'](),_0x3295d2=await _0x57f9fb[_0x1ceccb(0xca)](_0x724e86);return repo_class_1['Repo'][_0x1ceccb(0xd3)](_0x3295d2);}catch(_0x8e6192){throw new not_found_error_1['NotFoundError'](_0x8e6192);}}async[a92_0x539080(0xd7)](_0x457448,_0x659ebe){const _0x118c7c=a92_0x539080;try{const _0x365a43=await this['createRequestToRepos'](),_0x49ed6d=await _0x365a43[_0x118c7c(0xcb)](_0x457448,_0x659ebe);return repo_class_1[_0x118c7c(0xc9)][_0x118c7c(0xd3)](_0x49ed6d);}catch(_0x17921e){throw new not_found_error_1[(_0x118c7c(0xc0))](_0x17921e);}}async[a92_0x539080(0xa4)](_0x2f9b53){const _0x5b8b33=a92_0x539080;try{const _0x21bb16=await this['createRequestToRepos']();await _0x21bb16[_0x5b8b33(0xa4)](_0x2f9b53);}catch(_0x12feb4){throw new bad_request_error_1[(_0x5b8b33(0xa7))](_0x12feb4);}}};GithubRepoService=__decorate([typedi_1[a92_0x539080(0xb6)](),__param(0x1,typedi_1[a92_0x539080(0xaa)]()),__metadata(a92_0x539080(0xce),[github_api_service_1['GithubApiService'],auth_settings_service_1['AuthSettingsService']])],GithubRepoService),exports[a92_0x539080(0xa0)]=GithubRepoService;