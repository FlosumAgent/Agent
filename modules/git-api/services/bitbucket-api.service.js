const a63_0x35df=['__esModule','length','now','46211fahHkE','defineProperty','1tDjlhX','10567gilsZk','__decorate','%clientToken%','__metadata','default','getCurrentUser','decorate','Authorization','request','constructor','289757peJsYp','7bZdFaX','test','function','1oyPArx','apply','192940wEERAa','230663HJpLyP','__param','3rwEtjl','./git-api.service','getOwnPropertyDescriptor','12aLhrkY','getHeaders','headers','bitbucket','__importDefault','use','interceptors','Bearer\x20','metadata','checkAccessToken','Inject','post','accessTokenExpiresAt','object','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','121025POoHBv','282678gupUnQ','get','accessToken','apiRequest','design:paramtypes','BitbucketApiService','../../../constants','refreshToken','../../shared/services/auth-settings.service','user','grant_type=client_credentials','GitApiService','createRequest','authSettings','update'];const a63_0x328434=a63_0x2441;(function(_0x2916da,_0x2831d8){const _0x2c8306=a63_0x2441;while(!![]){try{const _0xac9e93=-parseInt(_0x2c8306(0x1c1))*-parseInt(_0x2c8306(0x19c))+-parseInt(_0x2c8306(0x196))+parseInt(_0x2c8306(0x1ab))*parseInt(_0x2c8306(0x199))+parseInt(_0x2c8306(0x1c0))*parseInt(_0x2c8306(0x197))+parseInt(_0x2c8306(0x191))*-parseInt(_0x2c8306(0x1be))+parseInt(_0x2c8306(0x1ac))+-parseInt(_0x2c8306(0x190))*parseInt(_0x2c8306(0x194));if(_0xac9e93===_0x2831d8)break;else _0x2916da['push'](_0x2916da['shift']());}catch(_0xf75c5f){_0x2916da['push'](_0x2916da['shift']());}}}(a63_0x35df,0x301b6));const a63_0x13ce4c=function(){let _0x30e191=!![];return function(_0x22645b,_0x367724){const _0x1a45e6=_0x30e191?function(){const _0x5e6740=a63_0x2441;if(_0x367724){const _0xf2bb8=_0x367724[_0x5e6740(0x195)](_0x22645b,arguments);return _0x367724=null,_0xf2bb8;}}:function(){};return _0x30e191=![],_0x1a45e6;};}(),a63_0x4a0336=a63_0x13ce4c(this,function(){const _0x4e0d5f=function(){const _0x19a568=a63_0x2441,_0x58d072=_0x4e0d5f['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x19a568(0x18f)](_0x19a568(0x1aa));return!_0x58d072[_0x19a568(0x192)](a63_0x4a0336);};return _0x4e0d5f();});function a63_0x2441(_0x16e05e,_0x4ef19d){return a63_0x2441=function(_0x51d2a1,_0x4a0336){_0x51d2a1=_0x51d2a1-0x18e;let _0x13ce4c=a63_0x35df[_0x51d2a1];return _0x13ce4c;},a63_0x2441(_0x16e05e,_0x4ef19d);}a63_0x4a0336();'use strict';var __decorate=this&&this[a63_0x328434(0x1c2)]||function(_0x4ecaa2,_0x94ed3e,_0x56b87f,_0x2d3d6f){const _0x261386=a63_0x328434;var _0x372f08=arguments[_0x261386(0x1bc)],_0x9071ee=_0x372f08<0x3?_0x94ed3e:_0x2d3d6f===null?_0x2d3d6f=Object[_0x261386(0x19b)](_0x94ed3e,_0x56b87f):_0x2d3d6f,_0x291a61;if(typeof Reflect===_0x261386(0x1a9)&&typeof Reflect[_0x261386(0x1c7)]===_0x261386(0x193))_0x9071ee=Reflect[_0x261386(0x1c7)](_0x4ecaa2,_0x94ed3e,_0x56b87f,_0x2d3d6f);else{for(var _0x20abbb=_0x4ecaa2['length']-0x1;_0x20abbb>=0x0;_0x20abbb--)if(_0x291a61=_0x4ecaa2[_0x20abbb])_0x9071ee=(_0x372f08<0x3?_0x291a61(_0x9071ee):_0x372f08>0x3?_0x291a61(_0x94ed3e,_0x56b87f,_0x9071ee):_0x291a61(_0x94ed3e,_0x56b87f))||_0x9071ee;}return _0x372f08>0x3&&_0x9071ee&&Object[_0x261386(0x1bf)](_0x94ed3e,_0x56b87f,_0x9071ee),_0x9071ee;},__metadata=this&&this[a63_0x328434(0x1c4)]||function(_0x3b4457,_0xb8dfc9){const _0x5e8ee7=a63_0x328434;if(typeof Reflect==='object'&&typeof Reflect[_0x5e8ee7(0x1a4)]===_0x5e8ee7(0x193))return Reflect[_0x5e8ee7(0x1a4)](_0x3b4457,_0xb8dfc9);},__param=this&&this[a63_0x328434(0x198)]||function(_0x4f2059,_0x45bde8){return function(_0x1c88d3,_0x1e6564){_0x45bde8(_0x1c88d3,_0x1e6564,_0x4f2059);};},__importDefault=this&&this[a63_0x328434(0x1a0)]||function(_0x420a0f){const _0x301a21=a63_0x328434;return _0x420a0f&&_0x420a0f[_0x301a21(0x1bb)]?_0x420a0f:{'default':_0x420a0f};};Object[a63_0x328434(0x1bf)](exports,a63_0x328434(0x1bb),{'value':!![]}),exports['BitbucketApiService']=void 0x0;const constants_1=require(a63_0x328434(0x1b2)),app_settings_service_1=require('../../shared/services/app-settings.service'),auth_settings_service_1=require(a63_0x328434(0x1b4)),axios_1=__importDefault(require('axios')),typedi_1=require('typedi'),git_api_service_1=require(a63_0x328434(0x19a));let BitbucketApiService=class BitbucketApiService extends git_api_service_1[a63_0x328434(0x1b7)]{constructor(_0x2ab6bd,_0x3a727e){const _0x58909e=a63_0x328434;super(_0x2ab6bd),this['authSettings']=_0x3a727e,this[_0x58909e(0x1a8)]=-0x1,this[_0x58909e(0x18e)]=this[_0x58909e(0x1b8)]();}get[a63_0x328434(0x1af)](){const _0x1b244a=a63_0x328434;return this[_0x1b244a(0x18e)];}['createRequest'](_0x2215a4){const _0x1ae3f3=a63_0x328434,_0x1302a4=super[_0x1ae3f3(0x1b8)](_0x2215a4);return _0x1302a4[_0x1ae3f3(0x1a2)]['request'][_0x1ae3f3(0x1a1)](async _0x170b62=>{const _0x46c7cf=_0x1ae3f3;return await this[_0x46c7cf(0x1a5)](),_0x170b62[_0x46c7cf(0x19e)][_0x46c7cf(0x1c8)]=_0x46c7cf(0x1a3)+this[_0x46c7cf(0x1ae)],_0x170b62;}),_0x1302a4;}async[a63_0x328434(0x1a5)](){const _0x5d8fb2=a63_0x328434;if(this[_0x5d8fb2(0x1ae)]&&Date[_0x5d8fb2(0x1bd)]()<this[_0x5d8fb2(0x1a8)])return;await this[_0x5d8fb2(0x1b3)]();}async['refreshToken'](){const _0x353001=a63_0x328434,{clientToken:_0x48a4ba}=this[_0x353001(0x1b9)][_0x353001(0x19f)],_0x2515b1=await axios_1[_0x353001(0x1c5)][_0x353001(0x1a7)](constants_1['BITBUCKET_REFRESH_TOKEN_URL']['replace'](_0x353001(0x1c3),_0x48a4ba),_0x353001(0x1b6))['then'](_0x31d6fd=>_0x31d6fd['data']),{expires_in:_0x41d973,access_token:_0x33728b}=_0x2515b1;this[_0x353001(0x1b9)][_0x353001(0x1ba)]({'bitbucket':{...this[_0x353001(0x1b9)][_0x353001(0x19f)],'token':_0x33728b}}),this[_0x353001(0x1a8)]=Date[_0x353001(0x1bd)]()+_0x41d973*0x3e8,this['accessToken']=_0x33728b;}[a63_0x328434(0x19d)](){return{};}['getCurrentUser'](){const _0x4c6960=a63_0x328434;return this[_0x4c6960(0x18e)][_0x4c6960(0x1ad)](_0x4c6960(0x1b5));}async['isLoggedIn'](){const _0xd1f093=a63_0x328434;return await this[_0xd1f093(0x1c6)](),!![];}};BitbucketApiService=__decorate([typedi_1['Service'](),__param(0x0,typedi_1[a63_0x328434(0x1a6)]()),__metadata(a63_0x328434(0x1b0),[app_settings_service_1['AppSettingsService'],auth_settings_service_1['AuthSettingsService']])],BitbucketApiService),exports[a63_0x328434(0x1b1)]=BitbucketApiService;