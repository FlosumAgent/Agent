const a104_0x1086=['AUTH_WAIT_TIME','design:paramtypes','updateAccessToken','../../../constants','requestConfig','tokenType','256805JBLliM','object','refresh_token','1616119khQrnf','force\x20update\x20token','response','501XbTBXZ','error','InvalidRefreshTokenError','data','instanceUrl','application/json','instance_url','343296tzDYRb','then','axios','logger','defineProperty','../errors/invalid-refresh-token.error','update\x20access\x20token\x20failed:\x20%s','create\x20authorized\x20request\x20failed:\x20authorization\x20is\x20not\x20done','default','get','joinURL','sleep','__importDefault','log','typedi','Idle','Active','__esModule','UnauthorizedSalesforceError','forceUpdateToken','681BwJUqi','message','metadata','constructor','settings','48872rFirPc','Updating','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','authState','function','create\x20authorized\x20request\x20failed:\x20authorization\x20error','length','SalesforceAuthService','../../shared/services/salesforce-settings.service','decorate','AuthState','/services/oauth2/token','SalesforceSettingsService','../errors/unauthorized-salesforce.error','56053yWdyBr','2VFVMYm','347178HrmJwA','Error','check\x20auth:\x20current\x20state\x20-\x20%s','test','salesforseSettings','SALESFORCE_API_VERSION','setAuthDetails','accessToken','access\x20token\x20updated\x20for\x20%s','ERR_INVALID_SALESFORCE_TOKEN','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../enums/auth-state.enum'];const a104_0x2fc579=a104_0x2a4b;(function(_0x38668c,_0x286112){const _0x8f641a=a104_0x2a4b;while(!![]){try{const _0x2c8978=-parseInt(_0x8f641a(0x206))+-parseInt(_0x8f641a(0x213))+-parseInt(_0x8f641a(0x1f2))+-parseInt(_0x8f641a(0x227))*parseInt(_0x8f641a(0x20c))+-parseInt(_0x8f641a(0x1f4))+parseInt(_0x8f641a(0x1f3))*-parseInt(_0x8f641a(0x1e4))+parseInt(_0x8f641a(0x209));if(_0x2c8978===_0x286112)break;else _0x38668c['push'](_0x38668c['shift']());}catch(_0x4c6876){_0x38668c['push'](_0x38668c['shift']());}}}(a104_0x1086,0x2a726));const a104_0x47b127=function(){let _0x311b83=!![];return function(_0x13293a,_0x1c90a6){const _0x50ceaf=_0x311b83?function(){if(_0x1c90a6){const _0x326f96=_0x1c90a6['apply'](_0x13293a,arguments);return _0x1c90a6=null,_0x326f96;}}:function(){};return _0x311b83=![],_0x50ceaf;};}(),a104_0x8f986e=a104_0x47b127(this,function(){const _0x4e25f7=function(){const _0x26d8fb=a104_0x2a4b,_0x1770ef=_0x4e25f7[_0x26d8fb(0x1e2)](_0x26d8fb(0x1fe))()['constructor'](_0x26d8fb(0x1e6));return!_0x1770ef[_0x26d8fb(0x1f7)](a104_0x8f986e);};return _0x4e25f7();});a104_0x8f986e();function a104_0x2a4b(_0x16c5aa,_0x521eaf){return a104_0x2a4b=function(_0x4760b2,_0x8f986e){_0x4760b2=_0x4760b2-0x1e0;let _0x47b127=a104_0x1086[_0x4760b2];return _0x47b127;},a104_0x2a4b(_0x16c5aa,_0x521eaf);}'use strict';var __decorate=this&&this['__decorate']||function(_0x330e7e,_0x41d6e5,_0x25d594,_0x2f707b){const _0x58ff9a=a104_0x2a4b;var _0xfd817f=arguments[_0x58ff9a(0x1ea)],_0x28bbb0=_0xfd817f<0x3?_0x41d6e5:_0x2f707b===null?_0x2f707b=Object['getOwnPropertyDescriptor'](_0x41d6e5,_0x25d594):_0x2f707b,_0x50c923;if(typeof Reflect==='object'&&typeof Reflect['decorate']===_0x58ff9a(0x1e8))_0x28bbb0=Reflect[_0x58ff9a(0x1ed)](_0x330e7e,_0x41d6e5,_0x25d594,_0x2f707b);else{for(var _0x4dc1f5=_0x330e7e[_0x58ff9a(0x1ea)]-0x1;_0x4dc1f5>=0x0;_0x4dc1f5--)if(_0x50c923=_0x330e7e[_0x4dc1f5])_0x28bbb0=(_0xfd817f<0x3?_0x50c923(_0x28bbb0):_0xfd817f>0x3?_0x50c923(_0x41d6e5,_0x25d594,_0x28bbb0):_0x50c923(_0x41d6e5,_0x25d594))||_0x28bbb0;}return _0xfd817f>0x3&&_0x28bbb0&&Object[_0x58ff9a(0x217)](_0x41d6e5,_0x25d594,_0x28bbb0),_0x28bbb0;},__metadata=this&&this['__metadata']||function(_0x22df3d,_0x59773b){const _0x1ac3e5=a104_0x2a4b;if(typeof Reflect===_0x1ac3e5(0x207)&&typeof Reflect[_0x1ac3e5(0x1e1)]==='function')return Reflect['metadata'](_0x22df3d,_0x59773b);},__importDefault=this&&this[a104_0x2fc579(0x21f)]||function(_0x19f77c){return _0x19f77c&&_0x19f77c['__esModule']?_0x19f77c:{'default':_0x19f77c};},SalesforceAuthService_1;Object[a104_0x2fc579(0x217)](exports,a104_0x2fc579(0x224),{'value':!![]}),exports[a104_0x2fc579(0x1eb)]=void 0x0;const typedi_1=require(a104_0x2fc579(0x221)),errors_1=require('../../../constants/errors'),core_1=require('../../../core'),salesforce_settings_service_1=require(a104_0x2fc579(0x1ec)),axios_1=__importDefault(require(a104_0x2fc579(0x215))),utils_1=require('../../shared/utils'),invalid_refresh_token_error_1=require(a104_0x2fc579(0x218)),auth_state_enum_1=require(a104_0x2fc579(0x1ff)),unauthorized_salesforce_error_1=require(a104_0x2fc579(0x1f1)),constants_1=require(a104_0x2fc579(0x203));let SalesforceAuthService=SalesforceAuthService_1=class SalesforceAuthService{constructor(_0x396514){const _0x4e1dbb=a104_0x2fc579;this['salesforseSettings']=_0x396514,this[_0x4e1dbb(0x200)]=0x1388,this[_0x4e1dbb(0x1e7)]=auth_state_enum_1[_0x4e1dbb(0x1ee)]['Idle'],this[_0x4e1dbb(0x216)]=new core_1['Logger'](SalesforceAuthService_1['name']),this[_0x4e1dbb(0x1fa)]();}get[a104_0x2fc579(0x1e3)](){const _0x34e976=a104_0x2fc579;return this['salesforseSettings'][_0x34e976(0x1e3)];}async[a104_0x2fc579(0x1fa)](){const _0x36fc0c=a104_0x2fc579;this[_0x36fc0c(0x216)][_0x36fc0c(0x220)](_0x36fc0c(0x1f6),auth_state_enum_1['AuthState'][this[_0x36fc0c(0x1e7)]]);try{if(this[_0x36fc0c(0x1e7)]===auth_state_enum_1[_0x36fc0c(0x1ee)][_0x36fc0c(0x1f5)])return;if(this[_0x36fc0c(0x1e7)]===auth_state_enum_1['AuthState']['Idle'])await this['updateAccessToken']();else{const _0x490b0f=await this[_0x36fc0c(0x204)](),_0x233af0=await axios_1[_0x36fc0c(0x21b)][_0x36fc0c(0x21c)]('services/data/'+constants_1[_0x36fc0c(0x1f9)],_0x490b0f)[_0x36fc0c(0x214)](()=>!![])['catch'](()=>![]);!_0x233af0&&await this['updateAccessToken']();}}catch(_0x1a5414){}}async[a104_0x2fc579(0x202)](){const _0x2e4419=a104_0x2fc579;var _0x2686eb,_0xadc475,_0x326bf5;this[_0x2e4419(0x216)][_0x2e4419(0x220)]('update\x20access\x20token');try{this[_0x2e4419(0x1e7)]=auth_state_enum_1[_0x2e4419(0x1ee)]['Updating'];const {refreshToken:_0x47bcc3,clientId:_0x5567c8,clientSecret:_0x4ca9d0}=this[_0x2e4419(0x1e3)],{data:_0x24db27}=await axios_1[_0x2e4419(0x21b)]['post'](utils_1[_0x2e4419(0x21d)](this[_0x2e4419(0x1f8)]['loginUrl'],_0x2e4419(0x1ef)),null,{'params':{'grant_type':_0x2e4419(0x208),'refresh_token':_0x47bcc3,'client_id':_0x5567c8,'client_secret':_0x4ca9d0}});this[_0x2e4419(0x210)]=_0x24db27[_0x2e4419(0x212)],this[_0x2e4419(0x1fb)]=_0x24db27['access_token'],this[_0x2e4419(0x205)]=_0x24db27['token_type'],this['authState']=auth_state_enum_1[_0x2e4419(0x1ee)][_0x2e4419(0x223)],this[_0x2e4419(0x216)][_0x2e4419(0x220)](_0x2e4419(0x1fc),this['instanceUrl']);}catch(_0x42cb6){const _0x5ce5c1=((_0xadc475=(_0x2686eb=_0x42cb6===null||_0x42cb6===void 0x0?void 0x0:_0x42cb6[_0x2e4419(0x20b)])===null||_0x2686eb===void 0x0?void 0x0:_0x2686eb[_0x2e4419(0x20f)])===null||_0xadc475===void 0x0?void 0x0:_0xadc475[_0x2e4419(0x20d)])||((_0x326bf5=_0x42cb6===null||_0x42cb6===void 0x0?void 0x0:_0x42cb6['response'])===null||_0x326bf5===void 0x0?void 0x0:_0x326bf5[_0x2e4419(0x20f)])||_0x42cb6[_0x2e4419(0x1e0)];this[_0x2e4419(0x216)]['error'](_0x2e4419(0x219),_0x5ce5c1),this[_0x2e4419(0x1e7)]=auth_state_enum_1[_0x2e4419(0x1ee)][_0x2e4419(0x1f5)];throw new invalid_refresh_token_error_1[(_0x2e4419(0x20e))](errors_1[_0x2e4419(0x1fd)]);}}async[a104_0x2fc579(0x226)](){const _0x509f93=a104_0x2fc579;this[_0x509f93(0x216)]['log'](_0x509f93(0x20a));if(this[_0x509f93(0x1e7)]===auth_state_enum_1[_0x509f93(0x1ee)][_0x509f93(0x1e5)]||this[_0x509f93(0x1e7)]===auth_state_enum_1[_0x509f93(0x1ee)][_0x509f93(0x222)])return await utils_1[_0x509f93(0x21e)](this[_0x509f93(0x200)]),this[_0x509f93(0x226)]();if(this['authState']===auth_state_enum_1[_0x509f93(0x1ee)][_0x509f93(0x1f5)])throw new invalid_refresh_token_error_1[(_0x509f93(0x20e))](errors_1[_0x509f93(0x1fd)]);await this[_0x509f93(0x202)]();}async[a104_0x2fc579(0x204)](){const _0x126f8d=a104_0x2fc579;if(this['authState']===auth_state_enum_1[_0x126f8d(0x1ee)]['Error']){this[_0x126f8d(0x216)][_0x126f8d(0x220)](_0x126f8d(0x1e9));throw new unauthorized_salesforce_error_1[(_0x126f8d(0x225))]();}if(this[_0x126f8d(0x1e7)]!==auth_state_enum_1[_0x126f8d(0x1ee)][_0x126f8d(0x223)])return this[_0x126f8d(0x216)]['log'](_0x126f8d(0x21a)),await utils_1[_0x126f8d(0x21e)](this[_0x126f8d(0x200)]),this[_0x126f8d(0x204)]();return{'baseURL':this[_0x126f8d(0x210)],'headers':{'accept':_0x126f8d(0x211),'content-type':_0x126f8d(0x211),'authorization':this[_0x126f8d(0x205)]+'\x20'+this[_0x126f8d(0x1fb)]}};}};SalesforceAuthService=SalesforceAuthService_1=__decorate([typedi_1['Service'](),__metadata(a104_0x2fc579(0x201),[salesforce_settings_service_1[a104_0x2fc579(0x1f0)]])],SalesforceAuthService),exports[a104_0x2fc579(0x1eb)]=SalesforceAuthService;