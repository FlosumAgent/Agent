const a47_0x1046=['./modules/web-hooks/web-hooks.controller','AppSettingsService','Server','default','port','./core/server','568873zJwLKI','ProxyController','ProviderMiddleware','SettingsConfigService','./pre-bootstrap','./modules/shared/salesforce-logger.middleware','run','1319NYQjkB','typedi','316xsXaRj','./modules/shared/services/app-settings.service','./modules/shared/provider.middleware','./modules/repos/repos.controller','./modules/shared/info.controller','705zyVDSr','./modules/proxy/proxy.controller','return\x20/\x22\x20+\x20this\x20+\x20\x22/','apply','168867FOFMJV','11811PVAjBO','61zIgKaR','__esModule','get','preBootstrap','useControllers','1aXfyem','SalesforceLoggerMiddleware','1kIGNaM','defineProperty','constructor','./modules/config','416915bSCzzA','2459069EXlJHq','useMiddlewares','InfoController','ReposController','then'];const a47_0x300e72=a47_0xbc77;(function(_0xa0d45d,_0x2f5ba8){const _0x581723=a47_0xbc77;while(!![]){try{const _0x539d72=parseInt(_0x581723(0x73))*parseInt(_0x581723(0x87))+-parseInt(_0x581723(0x7f))*parseInt(_0x581723(0x80))+-parseInt(_0x581723(0x85))*parseInt(_0x581723(0x6c))+-parseInt(_0x581723(0x7a))*parseInt(_0x581723(0x75))+-parseInt(_0x581723(0x8b))+-parseInt(_0x581723(0x7e))+parseInt(_0x581723(0x8c));if(_0x539d72===_0x2f5ba8)break;else _0xa0d45d['push'](_0xa0d45d['shift']());}catch(_0x303963){_0xa0d45d['push'](_0xa0d45d['shift']());}}}(a47_0x1046,0x587f2));const a47_0x289d04=function(){let _0x2514ff=!![];return function(_0x3a1be0,_0x3ce5c2){const _0xa9cf8e=_0x2514ff?function(){const _0x43e9aa=a47_0xbc77;if(_0x3ce5c2){const _0x7d1f8b=_0x3ce5c2[_0x43e9aa(0x7d)](_0x3a1be0,arguments);return _0x3ce5c2=null,_0x7d1f8b;}}:function(){};return _0x2514ff=![],_0xa9cf8e;};}(),a47_0x21aa63=a47_0x289d04(this,function(){const _0x23c90b=function(){const _0x5e46ae=a47_0xbc77,_0x391d42=_0x23c90b[_0x5e46ae(0x89)](_0x5e46ae(0x7c))()[_0x5e46ae(0x89)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x391d42['test'](a47_0x21aa63);};return _0x23c90b();});function a47_0xbc77(_0x2522f8,_0x192c0e){return a47_0xbc77=function(_0x238896,_0x21aa63){_0x238896=_0x238896-0x67;let _0x289d04=a47_0x1046[_0x238896];return _0x289d04;},a47_0xbc77(_0x2522f8,_0x192c0e);}a47_0x21aa63();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4428d4){return _0x4428d4&&_0x4428d4['__esModule']?_0x4428d4:{'default':_0x4428d4};};Object[a47_0x300e72(0x88)](exports,a47_0x300e72(0x81),{'value':!![]}),require('reflect-metadata'),require(a47_0x300e72(0x8a));const typedi_1=__importDefault(require(a47_0x300e72(0x74))),server_1=require(a47_0x300e72(0x6b)),proxy_controller_1=require(a47_0x300e72(0x7b)),repos_controller_1=require(a47_0x300e72(0x78)),settings_config_service_1=require('./modules/shared/services/settings-config.service'),web_hooks_controller_1=require(a47_0x300e72(0x91)),app_settings_service_1=require(a47_0x300e72(0x76)),provider_middleware_1=require(a47_0x300e72(0x77)),pre_bootstrap_1=require(a47_0x300e72(0x70)),salesforce_logger_middleware_1=require(a47_0x300e72(0x71)),info_controller_1=require(a47_0x300e72(0x79));async function bootstrap(){const _0x595870=a47_0x300e72;await settings_config_service_1[_0x595870(0x6f)]['loadSettings']();const _0x562f74=typedi_1[_0x595870(0x69)][_0x595870(0x82)](server_1[_0x595870(0x68)]),_0x43666a=typedi_1[_0x595870(0x69)][_0x595870(0x82)](app_settings_service_1[_0x595870(0x67)]);_0x562f74[_0x595870(0x8d)](provider_middleware_1[_0x595870(0x6e)],salesforce_logger_middleware_1[_0x595870(0x86)]),_0x562f74[_0x595870(0x84)](repos_controller_1[_0x595870(0x8f)],proxy_controller_1[_0x595870(0x6d)],web_hooks_controller_1['WebHooksController'],info_controller_1[_0x595870(0x8e)]),await _0x562f74[_0x595870(0x72)](_0x43666a[_0x595870(0x6a)]);}pre_bootstrap_1[a47_0x300e72(0x83)]()[a47_0x300e72(0x90)](bootstrap);