var a64_0x1745=['Basic\x20','get','username','2bIHPNK','GitApiService','typedi','AuthSettingsService','__esModule','__importStar','bitbucketServer','token','object','request','return\x20/\x22\x20+\x20this\x20+\x20\x22/','__param','Inject','BitbucketServerApiService','__metadata','1jzAOsA','default','length','defineProperty','1087258uWwHHD','./git-api.service','1fbTWRK','12515WMLopb','Service','function','148042BjrLje','hasOwnProperty','74lNosWl','getUsers','__createBinding','getOwnPropertyDescriptor','create','4stoNrk','apiRequest','484632KeAaSd','AppSettingsService','68552tDjuLl','__decorate','494567WicpRw','519813spHZxT','__setModuleDefault','../../shared/services/auth-settings.service','design:paramtypes','constructor'];var a64_0x491c77=a64_0xe988;(function(_0x342c74,_0x4f3c76){var _0x27e5f7=a64_0xe988;while(!![]){try{var _0x1b6e8c=-parseInt(_0x27e5f7(0x93))*-parseInt(_0x27e5f7(0xbb))+-parseInt(_0x27e5f7(0x95))*parseInt(_0x27e5f7(0xa2))+parseInt(_0x27e5f7(0x9a))+parseInt(_0x27e5f7(0x99))+parseInt(_0x27e5f7(0xb5))*-parseInt(_0x27e5f7(0xb7))+-parseInt(_0x27e5f7(0x97))*-parseInt(_0x27e5f7(0xb1))+-parseInt(_0x27e5f7(0xb8))*-parseInt(_0x27e5f7(0xbd));if(_0x1b6e8c===_0x4f3c76)break;else _0x342c74['push'](_0x342c74['shift']());}catch(_0x19aeb9){_0x342c74['push'](_0x342c74['shift']());}}}(a64_0x1745,0x84fb0));var a64_0x5e9c8b=function(){var _0x238390=!![];return function(_0x18d585,_0x2c032b){var _0x348523=_0x238390?function(){if(_0x2c032b){var _0x3e4171=_0x2c032b['apply'](_0x18d585,arguments);return _0x2c032b=null,_0x3e4171;}}:function(){};return _0x238390=![],_0x348523;};}(),a64_0xe6085d=a64_0x5e9c8b(this,function(){var _0x8e4916=function(){var _0x1b3f5f=a64_0xe988,_0x30c759=_0x8e4916[_0x1b3f5f(0x9e)](_0x1b3f5f(0xac))()[_0x1b3f5f(0x9e)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x30c759['test'](a64_0xe6085d);};return _0x8e4916();});a64_0xe6085d();'use strict';var __createBinding=this&&this[a64_0x491c77(0x90)]||(Object[a64_0x491c77(0x92)]?function(_0x3ec74d,_0x1767fa,_0x23c112,_0x5c62b4){var _0x9add2b=a64_0x491c77;if(_0x5c62b4===undefined)_0x5c62b4=_0x23c112;Object[_0x9add2b(0xb4)](_0x3ec74d,_0x5c62b4,{'enumerable':!![],'get':function(){return _0x1767fa[_0x23c112];}});}:function(_0x59bc98,_0x49dc7c,_0x28a1b0,_0x315b50){if(_0x315b50===undefined)_0x315b50=_0x28a1b0;_0x59bc98[_0x315b50]=_0x49dc7c[_0x28a1b0];}),__setModuleDefault=this&&this[a64_0x491c77(0x9b)]||(Object[a64_0x491c77(0x92)]?function(_0x2d9ff3,_0x16fe1f){var _0x309826=a64_0x491c77;Object[_0x309826(0xb4)](_0x2d9ff3,_0x309826(0xb2),{'enumerable':!![],'value':_0x16fe1f});}:function(_0x19c51a,_0x21804c){var _0x73e923=a64_0x491c77;_0x19c51a[_0x73e923(0xb2)]=_0x21804c;}),__decorate=this&&this[a64_0x491c77(0x98)]||function(_0x3bade6,_0x515a7e,_0x27ee35,_0x5b1074){var _0x498f6d=a64_0x491c77,_0x572f15=arguments[_0x498f6d(0xb3)],_0x47efc9=_0x572f15<0x3?_0x515a7e:_0x5b1074===null?_0x5b1074=Object[_0x498f6d(0x91)](_0x515a7e,_0x27ee35):_0x5b1074,_0x12230b;if(typeof Reflect===_0x498f6d(0xaa)&&typeof Reflect['decorate']===_0x498f6d(0xba))_0x47efc9=Reflect['decorate'](_0x3bade6,_0x515a7e,_0x27ee35,_0x5b1074);else{for(var _0x45b114=_0x3bade6['length']-0x1;_0x45b114>=0x0;_0x45b114--)if(_0x12230b=_0x3bade6[_0x45b114])_0x47efc9=(_0x572f15<0x3?_0x12230b(_0x47efc9):_0x572f15>0x3?_0x12230b(_0x515a7e,_0x27ee35,_0x47efc9):_0x12230b(_0x515a7e,_0x27ee35))||_0x47efc9;}return _0x572f15>0x3&&_0x47efc9&&Object[_0x498f6d(0xb4)](_0x515a7e,_0x27ee35,_0x47efc9),_0x47efc9;},__importStar=this&&this[a64_0x491c77(0xa7)]||function(_0x1c77fa){var _0x2f8592=a64_0x491c77;if(_0x1c77fa&&_0x1c77fa[_0x2f8592(0xa6)])return _0x1c77fa;var _0x180ce4={};if(_0x1c77fa!=null){for(var _0x40c023 in _0x1c77fa)if(_0x40c023!==_0x2f8592(0xb2)&&Object['prototype'][_0x2f8592(0xbc)]['call'](_0x1c77fa,_0x40c023))__createBinding(_0x180ce4,_0x1c77fa,_0x40c023);}return __setModuleDefault(_0x180ce4,_0x1c77fa),_0x180ce4;},__metadata=this&&this[a64_0x491c77(0xb0)]||function(_0x568719,_0x48cfcf){var _0x429e02=a64_0x491c77;if(typeof Reflect===_0x429e02(0xaa)&&typeof Reflect['metadata']===_0x429e02(0xba))return Reflect['metadata'](_0x568719,_0x48cfcf);},__param=this&&this[a64_0x491c77(0xad)]||function(_0x1d8b78,_0x474bf2){return function(_0x1743c8,_0x22f725){_0x474bf2(_0x1743c8,_0x22f725,_0x1d8b78);};};Object[a64_0x491c77(0xb4)](exports,'__esModule',{'value':!![]}),exports[a64_0x491c77(0xaf)]=void 0x0;const app_settings_service_1=require('../../shared/services/app-settings.service'),auth_settings_service_1=require(a64_0x491c77(0x9c)),typedi_1=__importStar(require(a64_0x491c77(0xa4))),utils_1=require('../../shared/utils'),git_api_service_1=require(a64_0x491c77(0xb6));let BitbucketServerApiService=class BitbucketServerApiService extends git_api_service_1[a64_0x491c77(0xa3)]{get[a64_0x491c77(0x94)](){var _0x4b9aba=a64_0x491c77;return this[_0x4b9aba(0xab)];}constructor(_0x2f737d){var _0x1a9ea3=a64_0x491c77;super(_0x2f737d),this[_0x1a9ea3(0xab)]=this['createRequest']();}['getHeaders'](){var _0xabdc48=a64_0x491c77;const _0x14f905=typedi_1[_0xabdc48(0xb2)][_0xabdc48(0xa0)](auth_settings_service_1[_0xabdc48(0xa5)]),_0x33d8e6=utils_1['encodeBase64'](_0x14f905[_0xabdc48(0xa8)][_0xabdc48(0xa1)]+':'+_0x14f905[_0xabdc48(0xa8)][_0xabdc48(0xa9)]);return{'Authorization':_0xabdc48(0x9f)+_0x33d8e6};}[a64_0x491c77(0x8f)](){var _0x4a19cd=a64_0x491c77;return this['request'][_0x4a19cd(0xa0)]('users');}async['isLoggedIn'](){try{return await this['getUsers'](),!![];}catch(_0x12cce9){return![];}}};function a64_0xe988(_0x1e15b6,_0x544051){return a64_0xe988=function(_0x38c98b,_0xe6085d){_0x38c98b=_0x38c98b-0x8f;var _0x5e9c8b=a64_0x1745[_0x38c98b];return _0x5e9c8b;},a64_0xe988(_0x1e15b6,_0x544051);}BitbucketServerApiService=__decorate([typedi_1[a64_0x491c77(0xb9)](),__param(0x0,typedi_1[a64_0x491c77(0xae)]()),__metadata(a64_0x491c77(0x9d),[app_settings_service_1[a64_0x491c77(0x96)]])],BitbucketServerApiService),exports[a64_0x491c77(0xaf)]=BitbucketServerApiService;