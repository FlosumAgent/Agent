const a92_0x8190=['end','defineProperty','hasCredentials','4sBVBiR','jsforce','/attachments','Connection','/logger','74739bshXJG','__importDefault','namespace','apply','Attachment','1ypbgrG','typedi','1hnMmKf','connection','error','sobject','deleteCommit','test','419655VyhydN','metadata','settings','__esModule','../../shared/services/app-settings.service','oauth2','update','delete','env','retrieveAttachment','length','hasAuthorizedCredentials','create\x20new\x20oauth\x20connection\x20from\x20given\x20credentials','retrieve\x20attachment\x20%s\x20from\x20salesforce','function','loginUrl','log','../../shared/services/salesforce-settings.service','513842nJOMmW','constructor','__decorate','432911rvWWkJ','SalesforceService','apex','appSettings','Body','trying\x20to\x20establish\x20connection\x20to\x20salesforce','1562007lPqBnn','salesforce\x20connection\x20established','object','salesforseSettings','/attachments/','salesforce-service','decorate','remove\x20commit\x20%s','/flosum_git','ERR_MISSING_SALEFORCE_CONFIGURATION','../../../core','../../../constants/errors','1ojzrZy','280628NZVtdw','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','UnauthorizedError','return\x20/\x22\x20+\x20this\x20+\x20\x22/','default','data','298373qQyMWG','post','Logger','blob'];const a92_0x31890b=a92_0x2c9b;(function(_0x5d3eb2,_0x3ff75b){const _0x107e85=a92_0x2c9b;while(!![]){try{const _0x3c055b=parseInt(_0x107e85(0x1f4))+-parseInt(_0x107e85(0x20d))*parseInt(_0x107e85(0x1ed))+parseInt(_0x107e85(0x1fb))*-parseInt(_0x107e85(0x200))+-parseInt(_0x107e85(0x1ee))*-parseInt(_0x107e85(0x207))+-parseInt(_0x107e85(0x222))+-parseInt(_0x107e85(0x21f))+parseInt(_0x107e85(0x1e1))*parseInt(_0x107e85(0x205));if(_0x3c055b===_0x3ff75b)break;else _0x5d3eb2['push'](_0x5d3eb2['shift']());}catch(_0x343543){_0x5d3eb2['push'](_0x5d3eb2['shift']());}}}(a92_0x8190,0x741fc));const a92_0x472ef4=function(){let _0x4df380=!![];return function(_0x574fea,_0x24e795){const _0x40707f=_0x4df380?function(){const _0x38b19e=a92_0x2c9b;if(_0x24e795){const _0x2c2956=_0x24e795[_0x38b19e(0x203)](_0x574fea,arguments);return _0x24e795=null,_0x2c2956;}}:function(){};return _0x4df380=![],_0x40707f;};}(),a92_0x39c0f6=a92_0x472ef4(this,function(){const _0xd28554=function(){const _0x430e71=a92_0x2c9b,_0x5e38a9=_0xd28554[_0x430e71(0x220)](_0x430e71(0x1f1))()[_0x430e71(0x220)](_0x430e71(0x1ef));return!_0x5e38a9[_0x430e71(0x20c)](a92_0x39c0f6);};return _0xd28554();});a92_0x39c0f6();'use strict';var __decorate=this&&this[a92_0x31890b(0x221)]||function(_0x13b327,_0x1b5ebb,_0x306415,_0x469aee){const _0x17f33a=a92_0x31890b;var _0x2509ee=arguments[_0x17f33a(0x217)],_0x52861d=_0x2509ee<0x3?_0x1b5ebb:_0x469aee===null?_0x469aee=Object['getOwnPropertyDescriptor'](_0x1b5ebb,_0x306415):_0x469aee,_0x8fbb49;if(typeof Reflect==='object'&&typeof Reflect['decorate']===_0x17f33a(0x21b))_0x52861d=Reflect[_0x17f33a(0x1e7)](_0x13b327,_0x1b5ebb,_0x306415,_0x469aee);else{for(var _0x47ed6e=_0x13b327['length']-0x1;_0x47ed6e>=0x0;_0x47ed6e--)if(_0x8fbb49=_0x13b327[_0x47ed6e])_0x52861d=(_0x2509ee<0x3?_0x8fbb49(_0x52861d):_0x2509ee>0x3?_0x8fbb49(_0x1b5ebb,_0x306415,_0x52861d):_0x8fbb49(_0x1b5ebb,_0x306415))||_0x52861d;}return _0x2509ee>0x3&&_0x52861d&&Object[_0x17f33a(0x1f9)](_0x1b5ebb,_0x306415,_0x52861d),_0x52861d;},__metadata=this&&this['__metadata']||function(_0x16bd7a,_0x4217f0){const _0x4ffba2=a92_0x31890b;if(typeof Reflect===_0x4ffba2(0x1e3)&&typeof Reflect[_0x4ffba2(0x20e)]===_0x4ffba2(0x21b))return Reflect['metadata'](_0x16bd7a,_0x4217f0);},__importDefault=this&&this[a92_0x31890b(0x201)]||function(_0x37b128){const _0x4394e0=a92_0x31890b;return _0x37b128&&_0x37b128[_0x4394e0(0x210)]?_0x37b128:{'default':_0x37b128};};Object[a92_0x31890b(0x1f9)](exports,'__esModule',{'value':!![]}),exports[a92_0x31890b(0x223)]=void 0x0;const typedi_1=require(a92_0x31890b(0x206)),jsforce_1=__importDefault(require(a92_0x31890b(0x1fc))),unauthorized_error_1=require('../../../core/errors/unauthorized.error'),errors_1=require(a92_0x31890b(0x1ec)),core_1=require(a92_0x31890b(0x1eb)),salesforce_settings_service_1=require(a92_0x31890b(0x21e)),app_settings_service_1=require(a92_0x31890b(0x211)),logger=new core_1[(a92_0x31890b(0x1f6))](a92_0x31890b(0x1e6));let SalesforceService=class SalesforceService{constructor(_0x2ea6a4,_0x437d3c){const _0x155c28=a92_0x31890b;this[_0x155c28(0x1e4)]=_0x2ea6a4,this[_0x155c28(0x225)]=_0x437d3c,this[_0x155c28(0x202)]=this[_0x155c28(0x225)][_0x155c28(0x215)]==='production'?_0x155c28(0x1e9):'';}get[a92_0x31890b(0x20f)](){const _0x1cc4eb=a92_0x31890b;return this[_0x1cc4eb(0x1e4)][_0x1cc4eb(0x20f)];}async['connect'](){const _0x9a9006=a92_0x31890b;logger[_0x9a9006(0x21d)](_0x9a9006(0x1e0));if(!this[_0x9a9006(0x1e4)][_0x9a9006(0x1fa)])throw new unauthorized_error_1[(_0x9a9006(0x1f0))](errors_1[_0x9a9006(0x1ea)]);const {clientId:_0x1a9194,clientSecret:_0x4b1a04,refreshToken:_0x4417e0}=this['settings'],_0x5614cd={'clientId':_0x1a9194,'clientSecret':_0x4b1a04,'loginUrl':this[_0x9a9006(0x1e4)][_0x9a9006(0x21c)]};if(!this[_0x9a9006(0x1e4)][_0x9a9006(0x218)]){logger[_0x9a9006(0x21d)](_0x9a9006(0x219));const _0x30196f=new jsforce_1[(_0x9a9006(0x1f2))][(_0x9a9006(0x1fe))](_0x5614cd),{access_token:_0x55b1bf,instance_url:_0x40c556}=await _0x30196f[_0x9a9006(0x212)]['refreshToken'](_0x4417e0);await this[_0x9a9006(0x1e4)][_0x9a9006(0x213)]({'accessToken':_0x55b1bf,'instanceUrl':_0x40c556});}const {accessToken:_0x308c1f,instanceUrl:_0x4e9521}=this[_0x9a9006(0x20f)];this['connection']=new jsforce_1['default'][(_0x9a9006(0x1fe))]({'oauth2':_0x5614cd,'refreshToken':_0x4417e0,'accessToken':_0x308c1f,'instanceUrl':_0x4e9521}),logger['log'](_0x9a9006(0x1e2));}async['retrieve'](_0x55f729){const _0x37bf56=a92_0x31890b;return logger[_0x37bf56(0x21d)]('retrieve\x20%d\x20components',_0x55f729['length']),this['connection']['apex'][_0x37bf56(0x1f5)](this[_0x37bf56(0x202)]+_0x37bf56(0x1fd),{'componentIds':_0x55f729});}async[a92_0x31890b(0x20b)](_0x571fb8){const _0x31a859=a92_0x31890b;logger['log'](_0x31a859(0x1e8),_0x571fb8),await this['connection'][_0x31a859(0x224)][_0x31a859(0x214)](this[_0x31a859(0x202)]+_0x31a859(0x1e5)+_0x571fb8);}async[a92_0x31890b(0x216)](_0xefdc3d){const _0x2870bf=a92_0x31890b;return logger['log'](_0x2870bf(0x21a),_0xefdc3d),new Promise((_0xb9833,_0x533f24)=>{const _0x38dfa2=_0x2870bf,_0x50251e=[],_0x39ce46=this[_0x38dfa2(0x208)][_0x38dfa2(0x20a)](_0x38dfa2(0x204))['record'](_0xefdc3d)[_0x38dfa2(0x1f7)](_0x38dfa2(0x226));_0x39ce46['on'](_0x38dfa2(0x209),_0x533f24),_0x39ce46['on'](_0x38dfa2(0x1f3),_0x470aec=>_0x50251e['push'](_0x470aec)),_0x39ce46['on'](_0x38dfa2(0x1f8),()=>_0xb9833(_0x50251e['join']('')));});}async['log'](_0x76751f){const _0x305fff=a92_0x31890b;await this[_0x305fff(0x208)][_0x305fff(0x224)][_0x305fff(0x1f5)](this[_0x305fff(0x202)]+_0x305fff(0x1ff),{'message':_0x76751f});}};function a92_0x2c9b(_0x24e9fb,_0xe1d690){return a92_0x2c9b=function(_0x15e7e6,_0x39c0f6){_0x15e7e6=_0x15e7e6-0x1e0;let _0x472ef4=a92_0x8190[_0x15e7e6];return _0x472ef4;},a92_0x2c9b(_0x24e9fb,_0xe1d690);}SalesforceService=__decorate([typedi_1['Service'](),__metadata('design:paramtypes',[salesforce_settings_service_1['SalesforceSettingsService'],app_settings_service_1['AppSettingsService']])],SalesforceService),exports[a92_0x31890b(0x223)]=SalesforceService;