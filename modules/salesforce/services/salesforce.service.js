const a110_0x33e1=['constructor','SalesforceAuthService','object','design:paramtypes','deleteAttachment','services/apexrest','341228oZsxCy','services/data/','__metadata','post','/body','2337jwFwgQ','/sobjects/Attachment/','1PsWcmc','7QZmjfc','sendLog','IGNORE_FLOSUM_GIT_NAMESPACE','../../../constants','request','loggerId','../../../core/errors/internal-server.error','createSalesforceRequest','418452pqfJOZ','../../../core/errors/not-found.error','get','./salesforce-auth.service','decorate','logger','getLogger','../utils/create-request.util','defineProperty','retrieveComponents','[message]\x20%s','343008WJBIQm','setLoggerId','493445BXGpFX','apply','function','length','log','NotFoundError','typedi','metadata','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../../../core/errors/bad-request.error','SalesforceService','./salesforce-logger.service','1558gdwRJP','209icutQk','namespace','test','patchObject','__decorate','delete','166234YNELGZ','/attachments','salesforce-service','SALESFORCE_API_VERSION','retrieve\x20attachment\x20%s\x20from\x20salesforce','InternalServerError'];const a110_0x426ccf=a110_0x3c09;(function(_0x3b02d2,_0x51560e){const _0x36e342=a110_0x3c09;while(!![]){try{const _0x2111d2=-parseInt(_0x36e342(0x12f))+parseInt(_0x36e342(0x13d))*-parseInt(_0x36e342(0x158))+-parseInt(_0x36e342(0x144))+parseInt(_0x36e342(0x150))+-parseInt(_0x36e342(0x155))*parseInt(_0x36e342(0x13e))+parseInt(_0x36e342(0x160))+-parseInt(_0x36e342(0x131))*-parseInt(_0x36e342(0x157));if(_0x2111d2===_0x51560e)break;else _0x3b02d2['push'](_0x3b02d2['shift']());}catch(_0x3bea21){_0x3b02d2['push'](_0x3b02d2['shift']());}}}(a110_0x33e1,0x3bb40));const a110_0x58ebb6=function(){let _0x3ae7db=!![];return function(_0x2dd6b4,_0x14fe2b){const _0x2290f6=_0x3ae7db?function(){const _0x64b390=a110_0x3c09;if(_0x14fe2b){const _0x3073ff=_0x14fe2b[_0x64b390(0x132)](_0x2dd6b4,arguments);return _0x14fe2b=null,_0x3073ff;}}:function(){};return _0x3ae7db=![],_0x2290f6;};}(),a110_0x2f9047=a110_0x58ebb6(this,function(){const _0x1f7f4c=function(){const _0x48ffb4=a110_0x3c09,_0x2f88a7=_0x1f7f4c[_0x48ffb4(0x14a)](_0x48ffb4(0x139))()[_0x48ffb4(0x14a)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x2f88a7[_0x48ffb4(0x140)](a110_0x2f9047);};return _0x1f7f4c();});a110_0x2f9047();'use strict';var __decorate=this&&this[a110_0x426ccf(0x142)]||function(_0x163b38,_0xa749c7,_0x3d9b03,_0x323ee0){const _0x5477b4=a110_0x426ccf;var _0x3dfad2=arguments[_0x5477b4(0x134)],_0x30345c=_0x3dfad2<0x3?_0xa749c7:_0x323ee0===null?_0x323ee0=Object['getOwnPropertyDescriptor'](_0xa749c7,_0x3d9b03):_0x323ee0,_0x33cfc5;if(typeof Reflect===_0x5477b4(0x14c)&&typeof Reflect['decorate']===_0x5477b4(0x133))_0x30345c=Reflect[_0x5477b4(0x164)](_0x163b38,_0xa749c7,_0x3d9b03,_0x323ee0);else{for(var _0x9a8707=_0x163b38[_0x5477b4(0x134)]-0x1;_0x9a8707>=0x0;_0x9a8707--)if(_0x33cfc5=_0x163b38[_0x9a8707])_0x30345c=(_0x3dfad2<0x3?_0x33cfc5(_0x30345c):_0x3dfad2>0x3?_0x33cfc5(_0xa749c7,_0x3d9b03,_0x30345c):_0x33cfc5(_0xa749c7,_0x3d9b03))||_0x30345c;}return _0x3dfad2>0x3&&_0x30345c&&Object['defineProperty'](_0xa749c7,_0x3d9b03,_0x30345c),_0x30345c;},__metadata=this&&this[a110_0x426ccf(0x152)]||function(_0x27ce9b,_0x25fb1e){const _0x5bef1e=a110_0x426ccf;if(typeof Reflect==='object'&&typeof Reflect['metadata']===_0x5bef1e(0x133))return Reflect[_0x5bef1e(0x138)](_0x27ce9b,_0x25fb1e);};Object[a110_0x426ccf(0x12c)](exports,'__esModule',{'value':!![]}),exports[a110_0x426ccf(0x13b)]=void 0x0;const typedi_1=require(a110_0x426ccf(0x137)),core_1=require('../../../core'),internal_server_error_1=require(a110_0x426ccf(0x15e)),salesforce_auth_service_1=require(a110_0x426ccf(0x163)),constants_1=require(a110_0x426ccf(0x15b)),not_found_error_1=require(a110_0x426ccf(0x161)),bad_request_error_1=require(a110_0x426ccf(0x13a)),create_request_util_1=require(a110_0x426ccf(0x12b)),salesforce_logger_service_1=require(a110_0x426ccf(0x13c)),logger=new core_1['Logger'](a110_0x426ccf(0x146));function a110_0x3c09(_0x92c85b,_0x1fc0a4){return a110_0x3c09=function(_0x4227cd,_0x2f9047){_0x4227cd=_0x4227cd-0x12b;let _0x58ebb6=a110_0x33e1[_0x4227cd];return _0x58ebb6;},a110_0x3c09(_0x92c85b,_0x1fc0a4);}let SalesforceService=class SalesforceService{constructor(_0x3ac1aa){const _0x4df45d=a110_0x426ccf;this[_0x4df45d(0x15c)]=create_request_util_1[_0x4df45d(0x15f)](_0x3ac1aa),this[_0x4df45d(0x13f)]=constants_1[_0x4df45d(0x15a)]?'':'/flosum_git';}[a110_0x426ccf(0x130)](_0x1074f9){const _0x44b48c=a110_0x426ccf;this[_0x44b48c(0x15d)]=_0x1074f9,this[_0x44b48c(0x165)]=new salesforce_logger_service_1['SalesforceLogger'](this);}[a110_0x426ccf(0x166)](){return this['logger'];}async[a110_0x426ccf(0x12d)](_0x3b4f38){const _0x1182d8=a110_0x426ccf;try{logger[_0x1182d8(0x135)]('retrieve\x20components\x20\x20%d\x20from\x20salesforce',_0x3b4f38[_0x1182d8(0x134)]);const _0xec1e4f=await this[_0x1182d8(0x15c)][_0x1182d8(0x153)](_0x1182d8(0x14f)+this[_0x1182d8(0x13f)]+_0x1182d8(0x145),{'componentIds':_0x3b4f38,'loggerId':this[_0x1182d8(0x15d)]})['then'](({data:_0x4438b2})=>_0x4438b2);return _0xec1e4f;}catch(_0x560a48){throw new bad_request_error_1['BadRequestError'](_0x560a48);}}async[a110_0x426ccf(0x14e)](_0x4312e7){const _0x3d0177=a110_0x426ccf;try{logger[_0x3d0177(0x135)]('delete\x20attachment\x20%s\x20from\x20salesforce',_0x4312e7),await this[_0x3d0177(0x15c)][_0x3d0177(0x143)](_0x3d0177(0x151)+constants_1[_0x3d0177(0x147)]+_0x3d0177(0x156)+_0x4312e7);}catch(_0x1cc492){throw new not_found_error_1[(_0x3d0177(0x136))](_0x1cc492);}}async['retrieveAttachment'](_0x326190){const _0x52e23b=a110_0x426ccf;try{logger[_0x52e23b(0x135)](_0x52e23b(0x148),_0x326190);const _0x7ceb69=await this[_0x52e23b(0x15c)][_0x52e23b(0x162)](_0x52e23b(0x151)+constants_1[_0x52e23b(0x147)]+_0x52e23b(0x156)+_0x326190+_0x52e23b(0x154))['then'](({data:_0x16080c})=>_0x16080c);return _0x7ceb69;}catch(_0x48cc54){throw new not_found_error_1[(_0x52e23b(0x136))](_0x48cc54);}}async[a110_0x426ccf(0x159)](_0x46b203){const _0x271bf8=a110_0x426ccf;try{_0x46b203['forEach'](_0x431a77=>logger[_0x271bf8(0x135)](_0x271bf8(0x12e),_0x431a77)),await this[_0x271bf8(0x15c)][_0x271bf8(0x153)](_0x271bf8(0x14f)+this[_0x271bf8(0x13f)]+'/logger',{'messages':_0x46b203,'loggerId':this[_0x271bf8(0x15d)]});}catch(_0xbffa5b){throw new internal_server_error_1[(_0x271bf8(0x149))](_0xbffa5b);}}async[a110_0x426ccf(0x141)](_0x5e5809,_0x2b4e86,_0x357aaf){const _0x43445c=a110_0x426ccf;try{await this[_0x43445c(0x15c)]['patch'](_0x43445c(0x151)+constants_1['SALESFORCE_API_VERSION']+'/sobjects/'+_0x5e5809+'/'+_0x2b4e86,_0x357aaf);}catch(_0x3d08c3){throw new internal_server_error_1['InternalServerError'](_0x3d08c3);}}};SalesforceService=__decorate([typedi_1['Service']({'transient':!![]}),__metadata(a110_0x426ccf(0x14d),[salesforce_auth_service_1[a110_0x426ccf(0x14b)]])],SalesforceService),exports[a110_0x426ccf(0x13b)]=SalesforceService;