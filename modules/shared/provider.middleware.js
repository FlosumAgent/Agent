const a127_0x4cbfaa=a127_0x5c08;function a127_0x8800(){const _0x4dba85=['../../core/errors/internal-server.error','(((.+)+)+)+$','5369rsDhEM','toString','24669QcOvXV','decorate','isLoggedIn','typedi','42514950gyhKqz','GitProviderManager','function','4Vcjakx','object','2055512ICtuLy','search','constructor','appSettings','length','1032776ZOGjWZ','InternalServerError','ProviderMiddleware','get','64NivYzk','before','defineProperty','./git-provider.manager','apply','9066RckmGX','getOwnPropertyDescriptor','x-git-provider','headers','4177971xsIjCG','./services/app-settings.service','update','__esModule','Middleware','11IPDLFk','6383770TuJbUu','AppSettingsService','../../core/errors/unauthorized.error','__importDefault','getApi','metadata','UnauthorizedError','__decorate'];a127_0x8800=function(){return _0x4dba85;};return a127_0x8800();}(function(_0x566ae9,_0x335610){const _0x108ce7=a127_0x5c08,_0x4cca43=_0x566ae9();while(!![]){try{const _0x2500c1=-parseInt(_0x108ce7(0xc7))/0x1+-parseInt(_0x108ce7(0xcb))/0x2*(-parseInt(_0x108ce7(0xe6))/0x3)+-parseInt(_0x108ce7(0xed))/0x4*(parseInt(_0x108ce7(0xda))/0x5)+parseInt(_0x108ce7(0xd0))/0x6*(-parseInt(_0x108ce7(0xe4))/0x7)+parseInt(_0x108ce7(0xef))/0x8+-parseInt(_0x108ce7(0xd4))/0x9+parseInt(_0x108ce7(0xea))/0xa*(parseInt(_0x108ce7(0xd9))/0xb);if(_0x2500c1===_0x335610)break;else _0x4cca43['push'](_0x4cca43['shift']());}catch(_0x186b38){_0x4cca43['push'](_0x4cca43['shift']());}}}(a127_0x8800,0xccce4));const a127_0x189d5b=function(){let _0x4cf5e9=!![];return function(_0x3afb20,_0x33c5b7){const _0x101077=_0x4cf5e9?function(){const _0xdfbad6=a127_0x5c08;if(_0x33c5b7){const _0x477930=_0x33c5b7[_0xdfbad6(0xcf)](_0x3afb20,arguments);return _0x33c5b7=null,_0x477930;}}:function(){};return _0x4cf5e9=![],_0x101077;};}(),a127_0x4ce272=a127_0x189d5b(this,function(){const _0x301c35=a127_0x5c08;return a127_0x4ce272[_0x301c35(0xe5)]()[_0x301c35(0xf0)](_0x301c35(0xe3))[_0x301c35(0xe5)]()[_0x301c35(0xf1)](a127_0x4ce272)[_0x301c35(0xf0)](_0x301c35(0xe3));});function a127_0x5c08(_0x2dde8e,_0x377d09){const _0x3fffbd=a127_0x8800();return a127_0x5c08=function(_0x4ce272,_0x189d5b){_0x4ce272=_0x4ce272-0xc5;let _0x88008d=_0x3fffbd[_0x4ce272];return _0x88008d;},a127_0x5c08(_0x2dde8e,_0x377d09);}a127_0x4ce272();'use strict';var __decorate=this&&this[a127_0x4cbfaa(0xe1)]||function(_0x4f4aaa,_0x38e307,_0x246150,_0x125dc5){const _0x259a6c=a127_0x4cbfaa;var _0x11be73=arguments[_0x259a6c(0xc6)],_0x33f08e=_0x11be73<0x3?_0x38e307:_0x125dc5===null?_0x125dc5=Object[_0x259a6c(0xd1)](_0x38e307,_0x246150):_0x125dc5,_0x53fedb;if(typeof Reflect===_0x259a6c(0xee)&&typeof Reflect['decorate']==='function')_0x33f08e=Reflect[_0x259a6c(0xe7)](_0x4f4aaa,_0x38e307,_0x246150,_0x125dc5);else{for(var _0x45cf05=_0x4f4aaa[_0x259a6c(0xc6)]-0x1;_0x45cf05>=0x0;_0x45cf05--)if(_0x53fedb=_0x4f4aaa[_0x45cf05])_0x33f08e=(_0x11be73<0x3?_0x53fedb(_0x33f08e):_0x11be73>0x3?_0x53fedb(_0x38e307,_0x246150,_0x33f08e):_0x53fedb(_0x38e307,_0x246150))||_0x33f08e;}return _0x11be73>0x3&&_0x33f08e&&Object[_0x259a6c(0xcd)](_0x38e307,_0x246150,_0x33f08e),_0x33f08e;},__metadata=this&&this['__metadata']||function(_0x6fe49f,_0x26395a){const _0x22f544=a127_0x4cbfaa;if(typeof Reflect===_0x22f544(0xee)&&typeof Reflect[_0x22f544(0xdf)]===_0x22f544(0xec))return Reflect[_0x22f544(0xdf)](_0x6fe49f,_0x26395a);},__importDefault=this&&this[a127_0x4cbfaa(0xdd)]||function(_0x55bbcd){const _0x3770a1=a127_0x4cbfaa;return _0x55bbcd&&_0x55bbcd[_0x3770a1(0xd7)]?_0x55bbcd:{'default':_0x55bbcd};};Object['defineProperty'](exports,a127_0x4cbfaa(0xd7),{'value':!![]}),exports[a127_0x4cbfaa(0xc9)]=void 0x0;const core_1=require('../../core'),unauthorized_error_1=require(a127_0x4cbfaa(0xdc)),typedi_1=__importDefault(require(a127_0x4cbfaa(0xe9))),internal_server_error_1=require(a127_0x4cbfaa(0xe2)),git_provider_manager_1=require(a127_0x4cbfaa(0xce)),app_settings_service_1=require(a127_0x4cbfaa(0xd5));let ProviderMiddleware=class ProviderMiddleware{constructor(_0x360dfa){const _0x3a4edd=a127_0x4cbfaa;this[_0x3a4edd(0xc5)]=_0x360dfa;}async['handle'](_0x27beae,_0x103d7c){const _0x225f24=a127_0x4cbfaa;if(_0x27beae[_0x225f24(0xd3)][_0x225f24(0xd2)]){this[_0x225f24(0xc5)][_0x225f24(0xd6)]({'provider':_0x27beae[_0x225f24(0xd3)][_0x225f24(0xd2)][_0x225f24(0xe5)]()});const _0x8a36fc=typedi_1['default'][_0x225f24(0xca)](git_provider_manager_1[_0x225f24(0xeb)])[_0x225f24(0xde)]();try{await _0x8a36fc[_0x225f24(0xe8)]();}catch(_0x52d8d2){if(_0x52d8d2 instanceof internal_server_error_1[_0x225f24(0xc8)])throw _0x52d8d2;throw new unauthorized_error_1[(_0x225f24(0xe0))](_0x52d8d2);}}}};ProviderMiddleware=__decorate([(0x0,core_1[a127_0x4cbfaa(0xd8)])(a127_0x4cbfaa(0xcc)),__metadata('design:paramtypes',[app_settings_service_1[a127_0x4cbfaa(0xdb)]])],ProviderMiddleware),exports[a127_0x4cbfaa(0xc9)]=ProviderMiddleware;