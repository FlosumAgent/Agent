var a67_0x49f5=['metadata','design:paramtypes','apply','constructor','test','token','Service','GithubAuthService','__esModule','decorate','settingsService','typedi','defineProperty','SettingsService','503412hsZjDL','getStore','return\x20/\x22\x20+\x20this\x20+\x20\x22/','1274047uEqAqZ','1zOXyIw','length','getAuthToken','324967FvSScK','130622mQiaDa','557687UECuTv','__metadata','__decorate','363988mkJtHP','2WuKrIu','../../../core/errors/not-found.error','auth','103205SUOsyI','NotFoundError','function','object'];var a67_0x36157b=a67_0x24ea;(function(_0x42a273,_0x2b03af){var _0x17c7e4=a67_0x24ea;while(!![]){try{var _0x26b38a=-parseInt(_0x17c7e4(0x19d))*parseInt(_0x17c7e4(0x1a0))+parseInt(_0x17c7e4(0x1a2))+-parseInt(_0x17c7e4(0x199))+-parseInt(_0x17c7e4(0x1a1))+parseInt(_0x17c7e4(0x1a9))*-parseInt(_0x17c7e4(0x1a6))+-parseInt(_0x17c7e4(0x1a5))+parseInt(_0x17c7e4(0x19c));if(_0x26b38a===_0x2b03af)break;else _0x42a273['push'](_0x42a273['shift']());}catch(_0x1f892e){_0x42a273['push'](_0x42a273['shift']());}}}(a67_0x49f5,0x49cff));var a67_0x47bc91=function(){var _0x4dc18d=!![];return function(_0x1f9047,_0x598e34){var _0xade94b=_0x4dc18d?function(){var _0x3345cf=a67_0x24ea;if(_0x598e34){var _0x335c2f=_0x598e34[_0x3345cf(0x1af)](_0x1f9047,arguments);return _0x598e34=null,_0x335c2f;}}:function(){};return _0x4dc18d=![],_0xade94b;};}(),a67_0x488d6c=a67_0x47bc91(this,function(){var _0x146456=function(){var _0x9718d9=a67_0x24ea,_0x5c5ddd=_0x146456[_0x9718d9(0x18e)](_0x9718d9(0x19b))()[_0x9718d9(0x18e)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x5c5ddd[_0x9718d9(0x18f)](a67_0x488d6c);};return _0x146456();});a67_0x488d6c();'use strict';var __decorate=this&&this[a67_0x36157b(0x1a4)]||function(_0x323b79,_0x595e46,_0x480b0f,_0x5e6427){var _0x3fc1c5=a67_0x36157b,_0x24337b=arguments[_0x3fc1c5(0x19e)],_0x18f5d1=_0x24337b<0x3?_0x595e46:_0x5e6427===null?_0x5e6427=Object['getOwnPropertyDescriptor'](_0x595e46,_0x480b0f):_0x5e6427,_0x59e53e;if(typeof Reflect===_0x3fc1c5(0x1ac)&&typeof Reflect[_0x3fc1c5(0x194)]==='function')_0x18f5d1=Reflect[_0x3fc1c5(0x194)](_0x323b79,_0x595e46,_0x480b0f,_0x5e6427);else{for(var _0x6c506e=_0x323b79['length']-0x1;_0x6c506e>=0x0;_0x6c506e--)if(_0x59e53e=_0x323b79[_0x6c506e])_0x18f5d1=(_0x24337b<0x3?_0x59e53e(_0x18f5d1):_0x24337b>0x3?_0x59e53e(_0x595e46,_0x480b0f,_0x18f5d1):_0x59e53e(_0x595e46,_0x480b0f))||_0x18f5d1;}return _0x24337b>0x3&&_0x18f5d1&&Object[_0x3fc1c5(0x197)](_0x595e46,_0x480b0f,_0x18f5d1),_0x18f5d1;},__metadata=this&&this[a67_0x36157b(0x1a3)]||function(_0x1daae4,_0x47cd75){var _0x33c2c2=a67_0x36157b;if(typeof Reflect===_0x33c2c2(0x1ac)&&typeof Reflect['metadata']===_0x33c2c2(0x1ab))return Reflect[_0x33c2c2(0x1ad)](_0x1daae4,_0x47cd75);};Object[a67_0x36157b(0x197)](exports,a67_0x36157b(0x193),{'value':!![]}),exports[a67_0x36157b(0x192)]=void 0x0;function a67_0x24ea(_0x56b1a1,_0x170dce){return a67_0x24ea=function(_0x387cd6,_0x488d6c){_0x387cd6=_0x387cd6-0x18e;var _0x47bc91=a67_0x49f5[_0x387cd6];return _0x47bc91;},a67_0x24ea(_0x56b1a1,_0x170dce);}const errors_1=require('../../../constants/errors'),not_found_error_1=require(a67_0x36157b(0x1a7)),settings_service_1=require('../../shared/services/settings.service'),typedi_1=require(a67_0x36157b(0x196));let GithubAuthService=class GithubAuthService{constructor(_0x570151){var _0x36d877=a67_0x36157b;this[_0x36d877(0x195)]=_0x570151;}get[a67_0x36157b(0x190)](){var _0xbbfde1=a67_0x36157b,_0x30a2ee,_0x3857e9,_0x2f0a7c;return(_0x2f0a7c=(_0x3857e9=(_0x30a2ee=this[_0xbbfde1(0x195)][_0xbbfde1(0x19a)]())===null||_0x30a2ee===void 0x0?void 0x0:_0x30a2ee[_0xbbfde1(0x1a8)])===null||_0x3857e9===void 0x0?void 0x0:_0x3857e9['authData'])===null||_0x2f0a7c===void 0x0?void 0x0:_0x2f0a7c[_0xbbfde1(0x190)];}[a67_0x36157b(0x19f)](){var _0x561821=a67_0x36157b;if(this[_0x561821(0x190)])return'token\x20'+this['token'];else throw new not_found_error_1[(_0x561821(0x1aa))](errors_1['ERR_MISSING_AUTH_OPTIONS']);}};GithubAuthService=__decorate([typedi_1[a67_0x36157b(0x191)]({'transient':!![]}),__metadata(a67_0x36157b(0x1ae),[settings_service_1[a67_0x36157b(0x198)]])],GithubAuthService),exports[a67_0x36157b(0x192)]=GithubAuthService;