const a89_0xbdfb=['BadRequestError','482976pBYoda','__decorate','azure','NotFoundError','post','object','../../../core/errors/bad-request.error','getOne','488062vfxUgM','repositories/','../repo.class','AzureApiService','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','0000000000000000000000000000000000000000','return\x20/\x22\x20+\x20this\x20+\x20\x22/','./git-repo.service','organization','baseURL','add','defineProperty','getOwnPropertyDescriptor','length','rawtext','request','typedi','function','project','apiUrl','962643QxdwlS','Repo','delete','apply','name','11btssrB','create','design:paramtypes','defaults','refs/heads/','AzureRepoService','fromAzure','169331fsVuRr','757008jQKNab','973274ztRKBS','constructor','__esModule','Initial\x20commit','decorate','/README.md','defaultBranch','Service','metadata','AuthSettingsService','/_apis/git','../../git-api/services/azure-api.service','142588qxalCH','__metadata'];const a89_0x167417=a89_0x3b51;(function(_0x478648,_0xaa13d5){const _0x78dd1e=a89_0x3b51;while(!![]){try{const _0x650d0c=-parseInt(_0x78dd1e(0xe1))+-parseInt(_0x78dd1e(0xc5))+parseInt(_0x78dd1e(0xee))+parseInt(_0x78dd1e(0xcd))+-parseInt(_0x78dd1e(0xef))+-parseInt(_0x78dd1e(0xc2))+parseInt(_0x78dd1e(0xed))*parseInt(_0x78dd1e(0xe6));if(_0x650d0c===_0xaa13d5)break;else _0x478648['push'](_0x478648['shift']());}catch(_0x2fd945){_0x478648['push'](_0x478648['shift']());}}}(a89_0xbdfb,0x855b6));const a89_0x2b2d18=function(){let _0x143a3c=!![];return function(_0x504205,_0x72c560){const _0x2dcd6e=_0x143a3c?function(){const _0x307392=a89_0x3b51;if(_0x72c560){const _0x1a0e0f=_0x72c560[_0x307392(0xe4)](_0x504205,arguments);return _0x72c560=null,_0x1a0e0f;}}:function(){};return _0x143a3c=![],_0x2dcd6e;};}(),a89_0x82e8be=a89_0x2b2d18(this,function(){const _0x5da974=function(){const _0x13be78=a89_0x3b51,_0x4d49fc=_0x5da974[_0x13be78(0xf0)](_0x13be78(0xd3))()['constructor'](_0x13be78(0xd1));return!_0x4d49fc['test'](a89_0x82e8be);};return _0x5da974();});a89_0x82e8be();'use strict';var __decorate=this&&this[a89_0x167417(0xc6)]||function(_0x4bcc0a,_0x80294b,_0x13c776,_0x2ca99a){const _0x1cd971=a89_0x167417;var _0x554d92=arguments['length'],_0x42b974=_0x554d92<0x3?_0x80294b:_0x2ca99a===null?_0x2ca99a=Object[_0x1cd971(0xd9)](_0x80294b,_0x13c776):_0x2ca99a,_0x50db69;if(typeof Reflect===_0x1cd971(0xca)&&typeof Reflect[_0x1cd971(0xf3)]==='function')_0x42b974=Reflect[_0x1cd971(0xf3)](_0x4bcc0a,_0x80294b,_0x13c776,_0x2ca99a);else{for(var _0x3e4bd6=_0x4bcc0a[_0x1cd971(0xda)]-0x1;_0x3e4bd6>=0x0;_0x3e4bd6--)if(_0x50db69=_0x4bcc0a[_0x3e4bd6])_0x42b974=(_0x554d92<0x3?_0x50db69(_0x42b974):_0x554d92>0x3?_0x50db69(_0x80294b,_0x13c776,_0x42b974):_0x50db69(_0x80294b,_0x13c776))||_0x42b974;}return _0x554d92>0x3&&_0x42b974&&Object['defineProperty'](_0x80294b,_0x13c776,_0x42b974),_0x42b974;},__metadata=this&&this[a89_0x167417(0xc3)]||function(_0x1df3d3,_0x1c613e){const _0x44d8a2=a89_0x167417;if(typeof Reflect===_0x44d8a2(0xca)&&typeof Reflect[_0x44d8a2(0xf7)]===_0x44d8a2(0xde))return Reflect[_0x44d8a2(0xf7)](_0x1df3d3,_0x1c613e);},__param=this&&this['__param']||function(_0x5804ae,_0x39b09a){return function(_0x76b100,_0xdfd74e){_0x39b09a(_0x76b100,_0xdfd74e,_0x5804ae);};};Object[a89_0x167417(0xd8)](exports,a89_0x167417(0xf1),{'value':!![]}),exports['AzureRepoService']=void 0x0;const bad_request_error_1=require(a89_0x167417(0xcb)),not_found_error_1=require('../../../core/errors/not-found.error'),azure_api_service_1=require(a89_0x167417(0xfa)),auth_settings_service_1=require('../../shared/services/auth-settings.service'),typedi_1=require(a89_0x167417(0xdd)),repo_class_1=require(a89_0x167417(0xcf)),git_repo_service_1=require(a89_0x167417(0xd4));let AzureRepoService=class AzureRepoService extends git_repo_service_1['GitRepoService']{constructor(_0x26be0c,_0x325f44){const _0x9790fe=a89_0x167417;super(_0x26be0c),this['api']=_0x26be0c,this['organization']=_0x325f44[_0x9790fe(0xc7)][_0x9790fe(0xd5)],this[_0x9790fe(0xdf)]=_0x325f44['azure'][_0x9790fe(0xdf)],this[_0x9790fe(0xdc)][_0x9790fe(0xe9)]['baseURL']=''+this[_0x9790fe(0xdc)][_0x9790fe(0xe9)][_0x9790fe(0xd6)]+this[_0x9790fe(0xd5)]+'/'+this[_0x9790fe(0xdf)]+_0x9790fe(0xf9);}async['initRepository'](_0x4dc2bf,_0x3ae989){const _0x245145=a89_0x167417,_0x58a608={'refUpdates':[{'name':_0x245145(0xea)+(_0x3ae989||'main'),'oldObjectId':_0x245145(0xd2)}],'commits':[{'comment':_0x245145(0xf2),'changes':[{'changeType':_0x245145(0xd7),'item':{'path':_0x245145(0xf4)},'newContent':{'content':'#\x20'+_0x4dc2bf[_0x245145(0xe5)],'contentType':_0x245145(0xdb)}}]}]};await this['request'][_0x245145(0xc9)](_0x4dc2bf[_0x245145(0xe0)]+'/pushes',_0x58a608);}async[a89_0x167417(0xe7)](_0x144178){const _0x200e6c=a89_0x167417;try{const _0x3bce06=await this[_0x200e6c(0xdc)]['post']('repositories',_0x144178),_0x4df3fc=repo_class_1[_0x200e6c(0xe2)][_0x200e6c(0xec)](_0x3bce06);return _0x144178['autoInit']&&await this['initRepository'](_0x4df3fc,_0x144178[_0x200e6c(0xf5)]),this[_0x200e6c(0xcc)](_0x4df3fc[_0x200e6c(0xe5)]);}catch(_0x11b1e2){throw new bad_request_error_1['BadRequestError'](_0x11b1e2);}}async[a89_0x167417(0xcc)](_0x460662){const _0x17adf0=a89_0x167417;try{const _0x4c63d6=await this[_0x17adf0(0xdc)]['get']('repositories/'+_0x460662);return repo_class_1['Repo']['fromAzure'](_0x4c63d6);}catch(_0x8746c3){throw new not_found_error_1[(_0x17adf0(0xc8))](_0x8746c3);}}async['update'](_0x43988f,_0x152cf4){const _0x599ada=a89_0x167417;try{const _0x1c8c90=await this['getOne'](_0x43988f),_0x4821b0=await this[_0x599ada(0xdc)]['patch'](_0x1c8c90['apiUrl'],_0x152cf4);return repo_class_1['Repo']['fromAzure'](_0x4821b0);}catch(_0x2e7337){throw new bad_request_error_1[(_0x599ada(0xc4))](_0x2e7337);}}async[a89_0x167417(0xe3)](_0x1f6854){const _0x381328=a89_0x167417;try{await this[_0x381328(0xdc)]['delete'](_0x381328(0xce)+_0x1f6854);}catch(_0x5f0b97){throw new not_found_error_1['NotFoundError'](_0x5f0b97);}}};function a89_0x3b51(_0x12d10e,_0xe79de5){return a89_0x3b51=function(_0x59dffd,_0x82e8be){_0x59dffd=_0x59dffd-0xc2;let _0x2b2d18=a89_0xbdfb[_0x59dffd];return _0x2b2d18;},a89_0x3b51(_0x12d10e,_0xe79de5);}AzureRepoService=__decorate([typedi_1[a89_0x167417(0xf6)](),__param(0x1,typedi_1['Inject']()),__metadata(a89_0x167417(0xe8),[azure_api_service_1[a89_0x167417(0xd0)],auth_settings_service_1[a89_0x167417(0xf8)]])],AzureRepoService),exports[a89_0x167417(0xeb)]=AzureRepoService;