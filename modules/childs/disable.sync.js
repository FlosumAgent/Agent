const a59_0x57fb8a=a59_0x1b6f;(function(_0x2cd85f,_0x40fa64){const _0x181078=a59_0x1b6f,_0x5a7ba6=_0x2cd85f();while(!![]){try{const _0x59e14c=-parseInt(_0x181078(0x1ca))/0x1*(-parseInt(_0x181078(0x1cc))/0x2)+-parseInt(_0x181078(0x1bf))/0x3*(parseInt(_0x181078(0x1c0))/0x4)+parseInt(_0x181078(0x1c8))/0x5*(parseInt(_0x181078(0x1b3))/0x6)+parseInt(_0x181078(0x1c6))/0x7+-parseInt(_0x181078(0x1ba))/0x8*(parseInt(_0x181078(0x1b6))/0x9)+-parseInt(_0x181078(0x1b1))/0xa+parseInt(_0x181078(0x1c9))/0xb*(parseInt(_0x181078(0x1bc))/0xc);if(_0x59e14c===_0x40fa64)break;else _0x5a7ba6['push'](_0x5a7ba6['shift']());}catch(_0x117acf){_0x5a7ba6['push'](_0x5a7ba6['shift']());}}}(a59_0x2a5f,0xc2024));const a59_0xd4ce72=function(){let _0x58b5df=!![];return function(_0x3925fe,_0x17e621){const _0x44d014=_0x58b5df?function(){if(_0x17e621){const _0x5040b3=_0x17e621['apply'](_0x3925fe,arguments);return _0x17e621=null,_0x5040b3;}}:function(){};return _0x58b5df=![],_0x44d014;};}(),a59_0xf2e6e5=a59_0xd4ce72(this,function(){const _0x89ce6f=a59_0x1b6f;return a59_0xf2e6e5[_0x89ce6f(0x1c4)]()['search'](_0x89ce6f(0x1b0))[_0x89ce6f(0x1c4)]()['constructor'](a59_0xf2e6e5)[_0x89ce6f(0x1c7)](_0x89ce6f(0x1b0));});a59_0xf2e6e5();'use strict';var __importDefault=this&&this[a59_0x57fb8a(0x1b2)]||function(_0x5b79af){const _0x3613a3=a59_0x57fb8a;return _0x5b79af&&_0x5b79af[_0x3613a3(0x1c1)]?_0x5b79af:{'default':_0x5b79af};};Object[a59_0x57fb8a(0x1c5)](exports,a59_0x57fb8a(0x1c1),{'value':!![]}),require(a59_0x57fb8a(0x1b8));const typedi_1=__importDefault(require(a59_0x57fb8a(0x1bd)));require('../config');function a59_0x1b6f(_0x2d656c,_0x14dbd9){const _0x354b38=a59_0x2a5f();return a59_0x1b6f=function(_0xf2e6e5,_0xd4ce72){_0xf2e6e5=_0xf2e6e5-0x1ae;let _0x2a5f67=_0x354b38[_0xf2e6e5];return _0x2a5f67;},a59_0x1b6f(_0x2d656c,_0x14dbd9);}function a59_0x2a5f(){const _0x259374=['4812xJHReD','typedi','../shared/services/app-settings.service','489138JfDJpH','32fmcSsF','__esModule','run','parse','toString','defineProperty','1224454lhZyLE','search','40DalFsx','37191SZLSJl','479766pYmUcO','get','2nveuAF','SettingsConfigService','provider','pid','loadSettings','message','(((.+)+)+)+$','12322500wxAEqJ','__importDefault','1028292Njunkv','DisableSyncService','loggerId','150741wWuQqx','AppSettingsService','reflect-metadata','../shared/services/settings-config.service','24DKjmvK','default'];a59_0x2a5f=function(){return _0x259374;};return a59_0x2a5f();}const app_settings_service_1=require(a59_0x57fb8a(0x1be)),settings_config_service_1=require(a59_0x57fb8a(0x1b9)),disable_sync_service_1=require('../web-hooks/services/disable-sync.service'),appSettings=typedi_1[a59_0x57fb8a(0x1bb)][a59_0x57fb8a(0x1cb)](app_settings_service_1[a59_0x57fb8a(0x1b7)]);process['on'](a59_0x57fb8a(0x1af),_0x588b30=>{const _0x260e58=a59_0x57fb8a,{data:_0x3d13c7}=JSON[_0x260e58(0x1c3)](_0x588b30);execute(_0x3d13c7);});const execute=async _0x34a42b=>{const _0x5e549a=a59_0x57fb8a;await settings_config_service_1[_0x5e549a(0x1cd)][_0x5e549a(0x1ae)](),appSettings['update']({'provider':_0x34a42b['provider']});const _0x5a96cb=typedi_1[_0x5e549a(0x1bb)]['get'](disable_sync_service_1[_0x5e549a(0x1b4)]);await _0x5a96cb[_0x5e549a(0x1c2)](_0x34a42b[_0x5e549a(0x1b5)],_0x34a42b[_0x5e549a(0x1ce)],_0x34a42b['instanceUrl']),process['kill'](process[_0x5e549a(0x1cf)],0x0);};