const a95_0x1504=['autoInit','metadata','design:paramtypes','138668ruHOpE','../../../core/errors/not-found.error','object','delete','__metadata','../repo.class','repos/','19lyvchF','getOne','user/repos','4sxSCpn','length','521GwQvek','orgs/','../../shared/services/auth-settings.service','Repo','BadRequestError','private','test','createRequest','3217konIVM','fromGithub','decorate','apiBody','GithubRepoService','__esModule','373596pjBpAS','createRequestToRepos','defaults','21883qZhOmM','githubApi','/repos','name','github','defineProperty','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../../shared/utils','function','constructor','298cAKGhB','92963AlBfgc','getOwnPropertyDescriptor','__param','../../internal/git.internal','request','defaultBranch','__decorate','973ktsjEd','317GWdXcH','organization','./git-repo.service','post','patch','apply','getCurrentUser'];const a95_0x4f883d=a95_0x3c27;(function(_0x29e6f2,_0x632225){const _0x517c86=a95_0x3c27;while(!![]){try{const _0x13c37a=-parseInt(_0x517c86(0x18f))+-parseInt(_0x517c86(0x16f))+-parseInt(_0x517c86(0x169))*-parseInt(_0x517c86(0x196))+-parseInt(_0x517c86(0x172))+-parseInt(_0x517c86(0x17d))*-parseInt(_0x517c86(0x15f))+parseInt(_0x517c86(0x184))*parseInt(_0x517c86(0x17c))+-parseInt(_0x517c86(0x161))*-parseInt(_0x517c86(0x185));if(_0x13c37a===_0x632225)break;else _0x29e6f2['push'](_0x29e6f2['shift']());}catch(_0x337823){_0x29e6f2['push'](_0x29e6f2['shift']());}}}(a95_0x1504,0x56693));const a95_0x1b6741=function(){let _0x3d4065=!![];return function(_0x36605e,_0x4df8f6){const _0x5d6820=_0x3d4065?function(){const _0x4887c8=a95_0x3c27;if(_0x4df8f6){const _0x47c316=_0x4df8f6[_0x4887c8(0x18a)](_0x36605e,arguments);return _0x4df8f6=null,_0x47c316;}}:function(){};return _0x3d4065=![],_0x5d6820;};}(),a95_0x2d6c6b=a95_0x1b6741(this,function(){const _0x59acb0=function(){const _0x2abca2=a95_0x3c27,_0x360fe9=_0x59acb0[_0x2abca2(0x17b)](_0x2abca2(0x178))()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x360fe9[_0x2abca2(0x167)](a95_0x2d6c6b);};return _0x59acb0();});a95_0x2d6c6b();function a95_0x3c27(_0x34dc82,_0x4f4f88){return a95_0x3c27=function(_0x2e9820,_0x2d6c6b){_0x2e9820=_0x2e9820-0x15f;let _0x1b6741=a95_0x1504[_0x2e9820];return _0x1b6741;},a95_0x3c27(_0x34dc82,_0x4f4f88);}'use strict';var __decorate=this&&this[a95_0x4f883d(0x183)]||function(_0x58808e,_0x338162,_0x5ded0a,_0x3f064b){const _0x6aa806=a95_0x4f883d;var _0x398435=arguments[_0x6aa806(0x160)],_0x3ff20d=_0x398435<0x3?_0x338162:_0x3f064b===null?_0x3f064b=Object[_0x6aa806(0x17e)](_0x338162,_0x5ded0a):_0x3f064b,_0x343b4d;if(typeof Reflect===_0x6aa806(0x191)&&typeof Reflect['decorate']===_0x6aa806(0x17a))_0x3ff20d=Reflect[_0x6aa806(0x16b)](_0x58808e,_0x338162,_0x5ded0a,_0x3f064b);else{for(var _0x462058=_0x58808e['length']-0x1;_0x462058>=0x0;_0x462058--)if(_0x343b4d=_0x58808e[_0x462058])_0x3ff20d=(_0x398435<0x3?_0x343b4d(_0x3ff20d):_0x398435>0x3?_0x343b4d(_0x338162,_0x5ded0a,_0x3ff20d):_0x343b4d(_0x338162,_0x5ded0a))||_0x3ff20d;}return _0x398435>0x3&&_0x3ff20d&&Object[_0x6aa806(0x177)](_0x338162,_0x5ded0a,_0x3ff20d),_0x3ff20d;},__metadata=this&&this[a95_0x4f883d(0x193)]||function(_0x4aaee3,_0x461ca7){const _0xb92415=a95_0x4f883d;if(typeof Reflect==='object'&&typeof Reflect[_0xb92415(0x18d)]===_0xb92415(0x17a))return Reflect[_0xb92415(0x18d)](_0x4aaee3,_0x461ca7);},__param=this&&this[a95_0x4f883d(0x17f)]||function(_0x51fa41,_0x4381c6){return function(_0x3a7a39,_0x372f96){_0x4381c6(_0x3a7a39,_0x372f96,_0x51fa41);};};Object[a95_0x4f883d(0x177)](exports,a95_0x4f883d(0x16e),{'value':!![]}),exports[a95_0x4f883d(0x16d)]=void 0x0;const bad_request_error_1=require('../../../core/errors/bad-request.error'),not_found_error_1=require(a95_0x4f883d(0x190)),github_api_service_1=require('../../git-api/services/github-api.service'),auth_settings_service_1=require(a95_0x4f883d(0x163)),typedi_1=require('typedi'),git_internal_1=require(a95_0x4f883d(0x180)),utils_1=require(a95_0x4f883d(0x179)),repo_class_1=require(a95_0x4f883d(0x194)),git_repo_service_1=require(a95_0x4f883d(0x187));let GithubRepoService=class GithubRepoService extends git_repo_service_1['GitRepoService']{constructor(_0x4243ea,_0x386d02){const _0x53e715=a95_0x4f883d;super(_0x4243ea),this[_0x53e715(0x173)]=_0x4243ea,this[_0x53e715(0x186)]=_0x386d02[_0x53e715(0x176)][_0x53e715(0x186)];}async[a95_0x4f883d(0x170)](){const _0x1fb170=a95_0x4f883d;let _0x36cc3b='';if(this['organization'])_0x36cc3b='repos/'+this['organization'];else{const _0x12a481=await this[_0x1fb170(0x173)][_0x1fb170(0x18b)]();_0x36cc3b=_0x1fb170(0x195)+_0x12a481['login'];}const _0x39261e=this[_0x1fb170(0x173)][_0x1fb170(0x168)](utils_1['joinURL'](''+this[_0x1fb170(0x181)][_0x1fb170(0x171)]['baseURL'],''+_0x36cc3b));return _0x39261e;}async['create'](_0x4e239a){const _0x710375=a95_0x4f883d;try{const _0x15e96e=this['organization']?_0x710375(0x162)+this[_0x710375(0x186)]+_0x710375(0x174):_0x710375(0x198),_0x209eb8={'name':_0x4e239a[_0x710375(0x175)],'private':_0x4e239a[_0x710375(0x166)],..._0x4e239a[_0x710375(0x16c)]||{}},_0x46d157=await this[_0x710375(0x181)][_0x710375(0x188)](_0x15e96e,_0x209eb8),_0x157b7a=repo_class_1[_0x710375(0x164)][_0x710375(0x16a)](_0x46d157);return _0x4e239a[_0x710375(0x18c)]&&await git_internal_1['Git']['createEmptyBranch'](_0x157b7a,_0x4e239a[_0x710375(0x182)]||'master'),this[_0x710375(0x197)](_0x157b7a[_0x710375(0x175)]);}catch(_0x14c530){throw new bad_request_error_1[(_0x710375(0x165))](_0x14c530);}}async[a95_0x4f883d(0x197)](_0x51e5df){const _0x16000d=a95_0x4f883d;try{const _0x3a1cf9=await this[_0x16000d(0x170)](),_0x56c88a=await _0x3a1cf9['get'](_0x51e5df);return repo_class_1[_0x16000d(0x164)][_0x16000d(0x16a)](_0x56c88a);}catch(_0x2f2a72){throw new not_found_error_1['NotFoundError'](_0x2f2a72);}}async['update'](_0x3825b2,_0x4eec1b){const _0x305ca4=a95_0x4f883d;try{const _0x390a26=await this[_0x305ca4(0x170)](),_0x118839=await _0x390a26[_0x305ca4(0x189)](_0x3825b2,_0x4eec1b);return repo_class_1[_0x305ca4(0x164)]['fromGithub'](_0x118839);}catch(_0x32427b){throw new not_found_error_1['NotFoundError'](_0x32427b);}}async[a95_0x4f883d(0x192)](_0x472210){const _0x55ac96=a95_0x4f883d;try{const _0x34b30f=await this['createRequestToRepos']();await _0x34b30f[_0x55ac96(0x192)](_0x472210);}catch(_0x33fa51){throw new bad_request_error_1[(_0x55ac96(0x165))](_0x33fa51);}}};GithubRepoService=__decorate([typedi_1['Service'](),__param(0x1,typedi_1['Inject']()),__metadata(a95_0x4f883d(0x18e),[github_api_service_1['GithubApiService'],auth_settings_service_1['AuthSettingsService']])],GithubRepoService),exports[a95_0x4f883d(0x16d)]=GithubRepoService;