const a106_0x5c1333=a106_0x5a41;(function(_0x467211,_0x4002bf){const _0x3de731=a106_0x5a41,_0x2b3fa6=_0x467211();while(!![]){try{const _0x231631=parseInt(_0x3de731(0x131))/0x1*(-parseInt(_0x3de731(0x14b))/0x2)+parseInt(_0x3de731(0x158))/0x3*(-parseInt(_0x3de731(0x14e))/0x4)+parseInt(_0x3de731(0x15b))/0x5+-parseInt(_0x3de731(0x12b))/0x6+parseInt(_0x3de731(0x12c))/0x7*(-parseInt(_0x3de731(0x14a))/0x8)+-parseInt(_0x3de731(0x141))/0x9*(-parseInt(_0x3de731(0x145))/0xa)+parseInt(_0x3de731(0x156))/0xb;if(_0x231631===_0x4002bf)break;else _0x2b3fa6['push'](_0x2b3fa6['shift']());}catch(_0x433df5){_0x2b3fa6['push'](_0x2b3fa6['shift']());}}}(a106_0x1114,0x7d61e));const a106_0x431a56=function(){let _0x7adc1=!![];return function(_0x54b215,_0x1f7cee){const _0x5d9d27=_0x7adc1?function(){if(_0x1f7cee){const _0x4ec92e=_0x1f7cee['apply'](_0x54b215,arguments);return _0x1f7cee=null,_0x4ec92e;}}:function(){};return _0x7adc1=![],_0x5d9d27;};}(),a106_0x59d312=a106_0x431a56(this,function(){const _0x2b99cd=a106_0x5a41;return a106_0x59d312[_0x2b99cd(0x138)]()['search'](_0x2b99cd(0x139))['toString']()[_0x2b99cd(0x15c)](a106_0x59d312)[_0x2b99cd(0x135)]('(((.+)+)+)+$');});function a106_0x5a41(_0x588795,_0x8c5e3){const _0x728c7d=a106_0x1114();return a106_0x5a41=function(_0x59d312,_0x431a56){_0x59d312=_0x59d312-0x10e;let _0x111464=_0x728c7d[_0x59d312];return _0x111464;},a106_0x5a41(_0x588795,_0x8c5e3);}a106_0x59d312();'use strict';var __decorate=this&&this['__decorate']||function(_0xd0a928,_0x33d2c5,_0x4d90b8,_0x2fb87a){const _0x3fb689=a106_0x5a41;var _0xf4f217=arguments[_0x3fb689(0x14c)],_0xa4e1c8=_0xf4f217<0x3?_0x33d2c5:_0x2fb87a===null?_0x2fb87a=Object['getOwnPropertyDescriptor'](_0x33d2c5,_0x4d90b8):_0x2fb87a,_0x571537;if(typeof Reflect==='object'&&typeof Reflect[_0x3fb689(0x130)]==='function')_0xa4e1c8=Reflect['decorate'](_0xd0a928,_0x33d2c5,_0x4d90b8,_0x2fb87a);else{for(var _0x835866=_0xd0a928[_0x3fb689(0x14c)]-0x1;_0x835866>=0x0;_0x835866--)if(_0x571537=_0xd0a928[_0x835866])_0xa4e1c8=(_0xf4f217<0x3?_0x571537(_0xa4e1c8):_0xf4f217>0x3?_0x571537(_0x33d2c5,_0x4d90b8,_0xa4e1c8):_0x571537(_0x33d2c5,_0x4d90b8))||_0xa4e1c8;}return _0xf4f217>0x3&&_0xa4e1c8&&Object[_0x3fb689(0x129)](_0x33d2c5,_0x4d90b8,_0xa4e1c8),_0xa4e1c8;},__metadata=this&&this[a106_0x5c1333(0x133)]||function(_0x3d0dc7,_0x7de93){const _0x5ec53a=a106_0x5c1333;if(typeof Reflect===_0x5ec53a(0x136)&&typeof Reflect[_0x5ec53a(0x13e)]===_0x5ec53a(0x150))return Reflect[_0x5ec53a(0x13e)](_0x3d0dc7,_0x7de93);},__importDefault=this&&this[a106_0x5c1333(0x117)]||function(_0x3e3252){return _0x3e3252&&_0x3e3252['__esModule']?_0x3e3252:{'default':_0x3e3252};},SalesforceAuthService_1;Object[a106_0x5c1333(0x129)](exports,'__esModule',{'value':!![]}),exports['SalesforceAuthService']=void 0x0;const typedi_1=require('typedi'),errors_1=require(a106_0x5c1333(0x124)),core_1=require(a106_0x5c1333(0x113)),salesforce_settings_service_1=require(a106_0x5c1333(0x13c)),axios_1=__importDefault(require(a106_0x5c1333(0x134))),utils_1=require('../../shared/utils'),invalid_refresh_token_error_1=require('../errors/invalid-refresh-token.error'),auth_state_enum_1=require(a106_0x5c1333(0x12d)),unauthorized_salesforce_error_1=require(a106_0x5c1333(0x11a)),constants_1=require(a106_0x5c1333(0x143));let SalesforceAuthService=SalesforceAuthService_1=class SalesforceAuthService{constructor(_0x1e2e6){const _0x5178e0=a106_0x5c1333;this[_0x5178e0(0x140)]=_0x1e2e6,this['AUTH_WAIT_TIME']=0x1388,this[_0x5178e0(0x11c)]=auth_state_enum_1[_0x5178e0(0x11e)][_0x5178e0(0x13b)],this[_0x5178e0(0x13a)]=new core_1[(_0x5178e0(0x132))](SalesforceAuthService_1[_0x5178e0(0x110)]),this[_0x5178e0(0x137)]();}get[a106_0x5c1333(0x122)](){const _0x14321c=a106_0x5c1333;return this[_0x14321c(0x140)][_0x14321c(0x122)];}async[a106_0x5c1333(0x137)](){const _0xfde35f=a106_0x5c1333;this['logger'][_0xfde35f(0x14d)](_0xfde35f(0x142),auth_state_enum_1[_0xfde35f(0x11e)][this['authState']]);try{if(this[_0xfde35f(0x11c)]===auth_state_enum_1[_0xfde35f(0x11e)][_0xfde35f(0x15a)])return;if(this[_0xfde35f(0x11c)]===auth_state_enum_1[_0xfde35f(0x11e)]['Idle'])await this[_0xfde35f(0x152)]();else{const _0x3e37bb=await this['requestConfig'](),_0x5bcbc4=await axios_1[_0xfde35f(0x114)][_0xfde35f(0x11d)](_0xfde35f(0x11f)+constants_1[_0xfde35f(0x115)],_0x3e37bb)['then'](()=>!![])[_0xfde35f(0x12e)](()=>![]);!_0x5bcbc4&&await this[_0xfde35f(0x152)]();}}catch(_0x62f27b){}}async[a106_0x5c1333(0x152)](){const _0x43fa9c=a106_0x5c1333;var _0x270e35,_0x1d3489,_0x299944;this[_0x43fa9c(0x13a)][_0x43fa9c(0x14d)]('update\x20access\x20token');try{this[_0x43fa9c(0x11c)]=auth_state_enum_1[_0x43fa9c(0x11e)][_0x43fa9c(0x147)];const {refreshToken:_0x163416,clientId:_0x341145,clientSecret:_0x2a0599}=this[_0x43fa9c(0x122)],{data:_0x41e26f}=await axios_1[_0x43fa9c(0x114)][_0x43fa9c(0x155)]((0x0,utils_1[_0x43fa9c(0x12a)])(this[_0x43fa9c(0x140)][_0x43fa9c(0x144)],_0x43fa9c(0x159)),null,{'params':{'grant_type':_0x43fa9c(0x125),'refresh_token':_0x163416,'client_id':_0x341145,'client_secret':_0x2a0599}});this[_0x43fa9c(0x112)]=_0x41e26f[_0x43fa9c(0x13d)],this[_0x43fa9c(0x14f)]=_0x41e26f['access_token'],this[_0x43fa9c(0x126)]=_0x41e26f[_0x43fa9c(0x13f)],this[_0x43fa9c(0x11c)]=auth_state_enum_1[_0x43fa9c(0x11e)]['Active'],this[_0x43fa9c(0x13a)]['log'](_0x43fa9c(0x118),this['instanceUrl']);}catch(_0x311495){const _0x48a8d7=((_0x1d3489=(_0x270e35=_0x311495===null||_0x311495===void 0x0?void 0x0:_0x311495[_0x43fa9c(0x12f)])===null||_0x270e35===void 0x0?void 0x0:_0x270e35[_0x43fa9c(0x148)])===null||_0x1d3489===void 0x0?void 0x0:_0x1d3489[_0x43fa9c(0x111)])||((_0x299944=_0x311495===null||_0x311495===void 0x0?void 0x0:_0x311495[_0x43fa9c(0x12f)])===null||_0x299944===void 0x0?void 0x0:_0x299944[_0x43fa9c(0x148)])||_0x311495[_0x43fa9c(0x10e)];this[_0x43fa9c(0x13a)][_0x43fa9c(0x111)](_0x43fa9c(0x121),_0x48a8d7),this['authState']=auth_state_enum_1[_0x43fa9c(0x11e)][_0x43fa9c(0x15a)];throw new invalid_refresh_token_error_1[(_0x43fa9c(0x127))](errors_1['ERR_INVALID_SALESFORCE_TOKEN']);}}async[a106_0x5c1333(0x11b)](){const _0x55ef0f=a106_0x5c1333;this[_0x55ef0f(0x13a)]['log'](_0x55ef0f(0x120));if(this[_0x55ef0f(0x11c)]===auth_state_enum_1[_0x55ef0f(0x11e)][_0x55ef0f(0x147)]||this['authState']===auth_state_enum_1[_0x55ef0f(0x11e)][_0x55ef0f(0x13b)])return await(0x0,utils_1[_0x55ef0f(0x149)])(this[_0x55ef0f(0x10f)]),this['forceUpdateToken']();if(this[_0x55ef0f(0x11c)]===auth_state_enum_1[_0x55ef0f(0x11e)][_0x55ef0f(0x15a)])throw new invalid_refresh_token_error_1['InvalidRefreshTokenError'](errors_1['ERR_INVALID_SALESFORCE_TOKEN']);await this['updateAccessToken']();}async['requestConfig'](){const _0x39bf75=a106_0x5c1333;if(this['authState']===auth_state_enum_1[_0x39bf75(0x11e)][_0x39bf75(0x15a)]){this[_0x39bf75(0x13a)]['log'](_0x39bf75(0x151));throw new unauthorized_salesforce_error_1[(_0x39bf75(0x154))]();}if(this[_0x39bf75(0x11c)]!==auth_state_enum_1[_0x39bf75(0x11e)][_0x39bf75(0x157)])return this[_0x39bf75(0x13a)][_0x39bf75(0x14d)](_0x39bf75(0x146)),await(0x0,utils_1[_0x39bf75(0x149)])(this[_0x39bf75(0x10f)]),this['requestConfig']();return{'baseURL':this[_0x39bf75(0x112)],'headers':{'accept':_0x39bf75(0x153),'content-type':_0x39bf75(0x153),'authorization':this[_0x39bf75(0x126)]+'\x20'+this[_0x39bf75(0x14f)]}};}};SalesforceAuthService=SalesforceAuthService_1=__decorate([(0x0,typedi_1[a106_0x5c1333(0x116)])(),__metadata(a106_0x5c1333(0x119),[salesforce_settings_service_1[a106_0x5c1333(0x128)]])],SalesforceAuthService),exports[a106_0x5c1333(0x123)]=SalesforceAuthService;function a106_0x1114(){const _0x5df63a=['loginUrl','10730nLjups','create\x20authorized\x20request\x20failed:\x20authorization\x20is\x20not\x20done','Updating','data','sleep','30344vfsYDT','2EBvXJK','length','log','4OqZbno','accessToken','function','create\x20authorized\x20request\x20failed:\x20authorization\x20error','updateAccessToken','application/json','UnauthorizedSalesforceError','post','21819963etSMRv','Active','662172SvUYIN','/services/oauth2/token','Error','1558860kiFHMH','constructor','message','AUTH_WAIT_TIME','name','error','instanceUrl','../../../core','default','SALESFORCE_API_VERSION','Service','__importDefault','access\x20token\x20updated\x20for\x20%s','design:paramtypes','../errors/unauthorized-salesforce.error','forceUpdateToken','authState','get','AuthState','services/data/','force\x20update\x20token','update\x20access\x20token\x20failed:\x20%s','settings','SalesforceAuthService','../../../constants/errors','refresh_token','tokenType','InvalidRefreshTokenError','SalesforceSettingsService','defineProperty','joinURL','5885490HAwioV','1834IdrZCT','../enums/auth-state.enum','catch','response','decorate','274227dCCXdg','Logger','__metadata','axios','search','object','setAuthDetails','toString','(((.+)+)+)+$','logger','Idle','../../shared/services/salesforce-settings.service','instance_url','metadata','token_type','salesforseSettings','5769MOMPGS','check\x20auth:\x20current\x20state\x20-\x20%s','../../../constants'];a106_0x1114=function(){return _0x5df63a;};return a106_0x1114();}