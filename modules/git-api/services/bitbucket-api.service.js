const a63_0x2771=['now','BitbucketApiService','GitApiService','refreshToken','Authorization','typedi','metadata','user','update','accessToken','object','1OYeYsk','data','accessTokenExpiresAt','59zylyEA','replace','5489KOLRla','__metadata','length','685310HVDrlO','createRequest','interceptors','authSettings','default','design:paramtypes','../../shared/services/auth-settings.service','post','./git-api.service','BITBUCKET_REFRESH_TOKEN_URL','Inject','grant_type=client_credentials','2YjlBKQ','__decorate','apiRequest','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','__esModule','%clientToken%','apply','AppSettingsService','1055ptcGpB','getCurrentUser','headers','request','decorate','131PyaXOP','getHeaders','967eoxhoU','6691SicKfd','Service','defineProperty','AuthSettingsService','../../../constants','test','bitbucket','checkAccessToken','441359gebjIu','use','function','8093ZOJrfU','78QXCWAR','1266215vUIvyP'];const a63_0x3acd9a=a63_0x4a8c;(function(_0x225941,_0x20865a){const _0x2a3d13=a63_0x4a8c;while(!![]){try{const _0x1e69d0=parseInt(_0x2a3d13(0x205))*-parseInt(_0x2a3d13(0x221))+parseInt(_0x2a3d13(0x203))*parseInt(_0x2a3d13(0x1f2))+-parseInt(_0x2a3d13(0x21c))*-parseInt(_0x2a3d13(0x223))+-parseInt(_0x2a3d13(0x22c))*-parseInt(_0x2a3d13(0x214))+-parseInt(_0x2a3d13(0x1f3))*parseInt(_0x2a3d13(0x224))+parseInt(_0x2a3d13(0x208))+parseInt(_0x2a3d13(0x200))*-parseInt(_0x2a3d13(0x1f4));if(_0x1e69d0===_0x20865a)break;else _0x225941['push'](_0x225941['shift']());}catch(_0xb1941f){_0x225941['push'](_0x225941['shift']());}}}(a63_0x2771,0x885c0));const a63_0x313328=function(){let _0x599394=!![];return function(_0x1f8486,_0x2aebba){const _0x5aa94e=_0x599394?function(){const _0x7c74fb=a63_0x4a8c;if(_0x2aebba){const _0x47882f=_0x2aebba[_0x7c74fb(0x21a)](_0x1f8486,arguments);return _0x2aebba=null,_0x47882f;}}:function(){};return _0x599394=![],_0x5aa94e;};}(),a63_0x514635=a63_0x313328(this,function(){const _0x543ba0=function(){const _0x118c2d=a63_0x4a8c,_0x3b5347=_0x543ba0['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor'](_0x118c2d(0x217));return!_0x3b5347[_0x118c2d(0x229)](a63_0x514635);};return _0x543ba0();});a63_0x514635();'use strict';var __decorate=this&&this[a63_0x3acd9a(0x215)]||function(_0x2a3b4b,_0x5572b2,_0x3ffb33,_0x4ec9fc){const _0x438c51=a63_0x3acd9a;var _0x5e7f3d=arguments[_0x438c51(0x207)],_0x25eee9=_0x5e7f3d<0x3?_0x5572b2:_0x4ec9fc===null?_0x4ec9fc=Object['getOwnPropertyDescriptor'](_0x5572b2,_0x3ffb33):_0x4ec9fc,_0x39e5c2;if(typeof Reflect===_0x438c51(0x1ff)&&typeof Reflect[_0x438c51(0x220)]===_0x438c51(0x1f1))_0x25eee9=Reflect[_0x438c51(0x220)](_0x2a3b4b,_0x5572b2,_0x3ffb33,_0x4ec9fc);else{for(var _0x5a83d7=_0x2a3b4b[_0x438c51(0x207)]-0x1;_0x5a83d7>=0x0;_0x5a83d7--)if(_0x39e5c2=_0x2a3b4b[_0x5a83d7])_0x25eee9=(_0x5e7f3d<0x3?_0x39e5c2(_0x25eee9):_0x5e7f3d>0x3?_0x39e5c2(_0x5572b2,_0x3ffb33,_0x25eee9):_0x39e5c2(_0x5572b2,_0x3ffb33))||_0x25eee9;}return _0x5e7f3d>0x3&&_0x25eee9&&Object[_0x438c51(0x226)](_0x5572b2,_0x3ffb33,_0x25eee9),_0x25eee9;},__metadata=this&&this[a63_0x3acd9a(0x206)]||function(_0x1bd6e1,_0x5e5d4c){const _0x322e5f=a63_0x3acd9a;if(typeof Reflect===_0x322e5f(0x1ff)&&typeof Reflect[_0x322e5f(0x1fb)]==='function')return Reflect[_0x322e5f(0x1fb)](_0x1bd6e1,_0x5e5d4c);},__param=this&&this['__param']||function(_0x8f01ed,_0x1ed1a9){return function(_0x4e4e6e,_0xd3bb0f){_0x1ed1a9(_0x4e4e6e,_0xd3bb0f,_0x8f01ed);};},__importDefault=this&&this['__importDefault']||function(_0x278096){return _0x278096&&_0x278096['__esModule']?_0x278096:{'default':_0x278096};};Object['defineProperty'](exports,a63_0x3acd9a(0x218),{'value':!![]}),exports[a63_0x3acd9a(0x1f6)]=void 0x0;const constants_1=require(a63_0x3acd9a(0x228)),app_settings_service_1=require('../../shared/services/app-settings.service'),auth_settings_service_1=require(a63_0x3acd9a(0x20e)),axios_1=__importDefault(require('axios')),typedi_1=require(a63_0x3acd9a(0x1fa)),git_api_service_1=require(a63_0x3acd9a(0x210));let BitbucketApiService=class BitbucketApiService extends git_api_service_1[a63_0x3acd9a(0x1f7)]{constructor(_0x435b2c,_0x4c9f15){const _0x439e5b=a63_0x3acd9a;super(_0x435b2c),this[_0x439e5b(0x20b)]=_0x4c9f15,this[_0x439e5b(0x202)]=-0x1,this['request']=this[_0x439e5b(0x209)]();}get[a63_0x3acd9a(0x216)](){const _0x4feb5b=a63_0x3acd9a;return this[_0x4feb5b(0x21f)];}[a63_0x3acd9a(0x209)](_0x998811){const _0x1e3834=a63_0x3acd9a,_0x52f21e=super[_0x1e3834(0x209)](_0x998811);return _0x52f21e[_0x1e3834(0x20a)][_0x1e3834(0x21f)][_0x1e3834(0x1f0)](async _0x149b4d=>{const _0x4a23b2=_0x1e3834;return await this[_0x4a23b2(0x22b)](),_0x149b4d[_0x4a23b2(0x21e)][_0x4a23b2(0x1f9)]='Bearer\x20'+this['accessToken'],_0x149b4d;}),_0x52f21e;}async['checkAccessToken'](){const _0x35a0ba=a63_0x3acd9a;if(this[_0x35a0ba(0x1fe)]&&Date[_0x35a0ba(0x1f5)]()<this[_0x35a0ba(0x202)])return;await this['refreshToken']();}async[a63_0x3acd9a(0x1f8)](){const _0xc17426=a63_0x3acd9a,{clientToken:_0x51c38d}=this['authSettings'][_0xc17426(0x22a)],_0xb469f7=await axios_1[_0xc17426(0x20c)][_0xc17426(0x20f)](constants_1[_0xc17426(0x211)][_0xc17426(0x204)](_0xc17426(0x219),_0x51c38d),_0xc17426(0x213))['then'](_0x398dc8=>_0x398dc8[_0xc17426(0x201)]),{expires_in:_0xe2e295,access_token:_0x258b4d}=_0xb469f7;this[_0xc17426(0x20b)][_0xc17426(0x1fd)]({'bitbucket':{...this[_0xc17426(0x20b)][_0xc17426(0x22a)],'token':_0x258b4d}}),this[_0xc17426(0x202)]=Date[_0xc17426(0x1f5)]()+_0xe2e295*0x3e8,this[_0xc17426(0x1fe)]=_0x258b4d;}[a63_0x3acd9a(0x222)](){return{};}[a63_0x3acd9a(0x21d)](){const _0x583b3a=a63_0x3acd9a;return this[_0x583b3a(0x21f)]['get'](_0x583b3a(0x1fc));}async['isLoggedIn'](){const _0x4e6f55=a63_0x3acd9a;return await this[_0x4e6f55(0x21d)](),!![];}};function a63_0x4a8c(_0x33fa84,_0x25df1b){return a63_0x4a8c=function(_0x143c28,_0x514635){_0x143c28=_0x143c28-0x1f0;let _0x313328=a63_0x2771[_0x143c28];return _0x313328;},a63_0x4a8c(_0x33fa84,_0x25df1b);}BitbucketApiService=__decorate([typedi_1[a63_0x3acd9a(0x225)](),__param(0x0,typedi_1[a63_0x3acd9a(0x212)]()),__metadata(a63_0x3acd9a(0x20d),[app_settings_service_1[a63_0x3acd9a(0x21b)],auth_settings_service_1[a63_0x3acd9a(0x227)]])],BitbucketApiService),exports[a63_0x3acd9a(0x1f6)]=BitbucketApiService;