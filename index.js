'use strict';const a47_0x25bb=['Server','__esModule','6WhalhR','ReposController','get','ProxyController','test','134562DUznkx','WebHooksController','./modules/shared/services/settings-config.service','1ArRRec','SettingsConfigService','14xkZwxX','17300hVQlSN','ProviderMiddleware','AppSettingsService','./modules/shared/provider.middleware','useMiddlewares','49498uuEJOn','468474YfwZdK','./modules/proxy/proxy.controller','./modules/config','128590lsbGqb','225128pxNnjc','17rUzbCr','apply','typedi','port','return\x20/\x22\x20+\x20this\x20+\x20\x22/','reflect-metadata','default','./modules/repos/repos.controller','34555IxURLI','run'];const a47_0x46c5b6=a47_0x2171;function a47_0x2171(_0x535c7a,_0x403df9){return a47_0x2171=function(_0x58c5d7,_0x21e28e){_0x58c5d7=_0x58c5d7-0x108;let _0x330b1b=a47_0x25bb[_0x58c5d7];return _0x330b1b;},a47_0x2171(_0x535c7a,_0x403df9);}(function(_0x40a453,_0x4c8486){const _0x3993e8=a47_0x2171;while(!![]){try{const _0x29fe28=parseInt(_0x3993e8(0x126))+-parseInt(_0x3993e8(0x11c))+-parseInt(_0x3993e8(0x11b))*-parseInt(_0x3993e8(0x121))+parseInt(_0x3993e8(0x127))*parseInt(_0x3993e8(0x10d))+parseInt(_0x3993e8(0x116))+-parseInt(_0x3993e8(0x119))*parseInt(_0x3993e8(0x122))+-parseInt(_0x3993e8(0x111))*parseInt(_0x3993e8(0x125));if(_0x29fe28===_0x4c8486)break;else _0x40a453['push'](_0x40a453['shift']());}catch(_0x36144a){_0x40a453['push'](_0x40a453['shift']());}}}(a47_0x25bb,0x5d73f));var __importDefault=this&&this['__importDefault']||function(_0x3472f7){const _0x52bbbd=a47_0x2171;return _0x3472f7&&_0x3472f7[_0x52bbbd(0x110)]?_0x3472f7:{'default':_0x3472f7};};Object['defineProperty'](exports,a47_0x46c5b6(0x110),{'value':!![]}),require(a47_0x46c5b6(0x10a)),require(a47_0x46c5b6(0x124));const typedi_1=__importDefault(require(a47_0x46c5b6(0x129))),server_1=require('./core/server'),proxy_controller_1=require(a47_0x46c5b6(0x123)),repos_controller_1=require(a47_0x46c5b6(0x10c)),settings_config_service_1=require(a47_0x46c5b6(0x118)),web_hooks_controller_1=require('./modules/web-hooks/web-hooks.controller'),app_settings_service_1=require('./modules/shared/services/app-settings.service'),provider_middleware_1=require(a47_0x46c5b6(0x11f));async function bootstrap(){const _0x49cc54=a47_0x46c5b6,_0x402c6d=function(){let _0x1af8b1=!![];return function(_0x5d4256,_0x429e88){const _0x1c80f0=_0x1af8b1?function(){const _0x21bd51=a47_0x2171;if(_0x429e88){const _0x5106a6=_0x429e88[_0x21bd51(0x128)](_0x5d4256,arguments);return _0x429e88=null,_0x5106a6;}}:function(){};return _0x1af8b1=![],_0x1c80f0;};}(),_0x40061b=_0x402c6d(this,function(){const _0x490bf7=function(){const _0x4bcecd=a47_0x2171,_0x2579f9=_0x490bf7['constructor'](_0x4bcecd(0x109))()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x2579f9[_0x4bcecd(0x115)](_0x40061b);};return _0x490bf7();});_0x40061b(),await settings_config_service_1[_0x49cc54(0x11a)]['loadSettings']();const _0x58c878=typedi_1['default'][_0x49cc54(0x113)](server_1[_0x49cc54(0x10f)]),_0x5af766=typedi_1[_0x49cc54(0x10b)][_0x49cc54(0x113)](app_settings_service_1[_0x49cc54(0x11e)]);_0x58c878[_0x49cc54(0x120)](provider_middleware_1[_0x49cc54(0x11d)]),_0x58c878['useControllers'](repos_controller_1[_0x49cc54(0x112)],proxy_controller_1[_0x49cc54(0x114)],web_hooks_controller_1[_0x49cc54(0x117)]),await _0x58c878[_0x49cc54(0x10e)](_0x5af766[_0x49cc54(0x108)]);}bootstrap();