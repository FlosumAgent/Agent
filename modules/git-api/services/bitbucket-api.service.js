const a62_0x3c99=['metadata','length','GitApiService','refreshToken','getCurrentUser','apply','../../shared/services/app-settings.service','112863tJXemq','design:paramtypes','object','checkAccessToken','102nVYyia','619vSgJvY','request','__param','accessToken','AppSettingsService','./git-api.service','BitbucketApiService','createRequest','interceptors','getOwnPropertyDescriptor','../../shared/services/auth-settings.service','defineProperty','constructor','BITBUCKET_REFRESH_TOKEN_URL','1xNIkei','bitbucket','test','default','then','now','AuthSettingsService','__metadata','413259SqFMEw','function','337955nMhEQS','update','headers','return\x20/\x22\x20+\x20this\x20+\x20\x22/','typedi','isLoggedIn','accessTokenExpiresAt','1609DUXvoh','Inject','2437vrKtTd','authSettings','Authorization','315209pUcPuP','user','getHeaders','16404essNnn','11NXjvaP','axios','__esModule','get'];const a62_0x2aa586=a62_0x329a;(function(_0x33b002,_0x27bb59){const _0x3936f5=a62_0x329a;while(!![]){try{const _0x170f2d=-parseInt(_0x3936f5(0x127))*-parseInt(_0x3936f5(0x128))+parseInt(_0x3936f5(0x10e))*-parseInt(_0x3936f5(0xfb))+-parseInt(_0x3936f5(0xff))*parseInt(_0x3936f5(0x11f))+-parseInt(_0x3936f5(0x118))+-parseInt(_0x3936f5(0x116))+-parseInt(_0x3936f5(0x124))+-parseInt(_0x3936f5(0x100))*-parseInt(_0x3936f5(0x121));if(_0x170f2d===_0x27bb59)break;else _0x33b002['push'](_0x33b002['shift']());}catch(_0xca54c8){_0x33b002['push'](_0x33b002['shift']());}}}(a62_0x3c99,0x545c7));const a62_0x4a6574=function(){let _0x2a1912=!![];return function(_0x21174c,_0x3255a1){const _0x2225e2=_0x2a1912?function(){const _0x18bd1b=a62_0x329a;if(_0x3255a1){const _0x41e145=_0x3255a1[_0x18bd1b(0x131)](_0x21174c,arguments);return _0x3255a1=null,_0x41e145;}}:function(){};return _0x2a1912=![],_0x2225e2;};}(),a62_0x163ece=a62_0x4a6574(this,function(){const _0x2e38a1=function(){const _0x42e953=a62_0x329a,_0x3079b0=_0x2e38a1[_0x42e953(0x10c)](_0x42e953(0x11b))()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x3079b0[_0x42e953(0x110)](a62_0x163ece);};return _0x2e38a1();});a62_0x163ece();function a62_0x329a(_0x3f0b82,_0x3e2655){return a62_0x329a=function(_0x148c27,_0x163ece){_0x148c27=_0x148c27-0xfb;let _0x4a6574=a62_0x3c99[_0x148c27];return _0x4a6574;},a62_0x329a(_0x3f0b82,_0x3e2655);}'use strict';var __decorate=this&&this['__decorate']||function(_0x5cd5bf,_0x8cd45e,_0x12618d,_0x19d591){const _0x328f59=a62_0x329a;var _0x18f28e=arguments[_0x328f59(0x12d)],_0x176022=_0x18f28e<0x3?_0x8cd45e:_0x19d591===null?_0x19d591=Object[_0x328f59(0x109)](_0x8cd45e,_0x12618d):_0x19d591,_0x43a825;if(typeof Reflect===_0x328f59(0xfd)&&typeof Reflect['decorate']===_0x328f59(0x117))_0x176022=Reflect['decorate'](_0x5cd5bf,_0x8cd45e,_0x12618d,_0x19d591);else{for(var _0x29d985=_0x5cd5bf[_0x328f59(0x12d)]-0x1;_0x29d985>=0x0;_0x29d985--)if(_0x43a825=_0x5cd5bf[_0x29d985])_0x176022=(_0x18f28e<0x3?_0x43a825(_0x176022):_0x18f28e>0x3?_0x43a825(_0x8cd45e,_0x12618d,_0x176022):_0x43a825(_0x8cd45e,_0x12618d))||_0x176022;}return _0x18f28e>0x3&&_0x176022&&Object['defineProperty'](_0x8cd45e,_0x12618d,_0x176022),_0x176022;},__metadata=this&&this[a62_0x2aa586(0x115)]||function(_0x4e0d7a,_0x2f8969){const _0x53cb94=a62_0x2aa586;if(typeof Reflect===_0x53cb94(0xfd)&&typeof Reflect['metadata']==='function')return Reflect[_0x53cb94(0x12c)](_0x4e0d7a,_0x2f8969);},__param=this&&this[a62_0x2aa586(0x102)]||function(_0x568fa7,_0x4132c4){return function(_0x5b849f,_0x3aa7c4){_0x4132c4(_0x5b849f,_0x3aa7c4,_0x568fa7);};},__importDefault=this&&this['__importDefault']||function(_0x245680){const _0x2f1026=a62_0x2aa586;return _0x245680&&_0x245680[_0x2f1026(0x12a)]?_0x245680:{'default':_0x245680};};Object[a62_0x2aa586(0x10b)](exports,'__esModule',{'value':!![]}),exports[a62_0x2aa586(0x106)]=void 0x0;const constants_1=require('../../../constants'),app_settings_service_1=require(a62_0x2aa586(0x132)),auth_settings_service_1=require(a62_0x2aa586(0x10a)),axios_1=__importDefault(require(a62_0x2aa586(0x129))),typedi_1=require(a62_0x2aa586(0x11c)),git_api_service_1=require(a62_0x2aa586(0x105));let BitbucketApiService=class BitbucketApiService extends git_api_service_1[a62_0x2aa586(0x12e)]{constructor(_0x6548fa,_0x3a7662){const _0x24142a=a62_0x2aa586;super(_0x6548fa),this[_0x24142a(0x122)]=_0x3a7662,this[_0x24142a(0x11e)]=-0x1,this[_0x24142a(0x101)]=this[_0x24142a(0x107)]();}get['apiRequest'](){const _0x4f1791=a62_0x2aa586;return this[_0x4f1791(0x101)];}[a62_0x2aa586(0x107)](_0x1978af){const _0x1b0658=a62_0x2aa586,_0x243eeb=super[_0x1b0658(0x107)](_0x1978af);return _0x243eeb[_0x1b0658(0x108)][_0x1b0658(0x101)]['use'](async _0x3d7b33=>{const _0x100894=_0x1b0658;return await this['checkAccessToken'](),_0x3d7b33[_0x100894(0x11a)][_0x100894(0x123)]='Bearer\x20'+this[_0x100894(0x103)],_0x3d7b33;}),_0x243eeb;}async[a62_0x2aa586(0xfe)](){const _0x55dd43=a62_0x2aa586;if(this['accessToken']&&Date[_0x55dd43(0x113)]()<this[_0x55dd43(0x11e)])return;await this['refreshToken']();}async[a62_0x2aa586(0x12f)](){const _0x828402=a62_0x2aa586,{clientToken:_0xb3d235}=this[_0x828402(0x122)][_0x828402(0x10f)],_0x2ebfd5=await axios_1[_0x828402(0x111)]['post'](constants_1[_0x828402(0x10d)]['replace']('%clientToken%',_0xb3d235),'grant_type=client_credentials')[_0x828402(0x112)](_0x3ddfc1=>_0x3ddfc1['data']),{expires_in:_0x42725d,access_token:_0x25f115}=_0x2ebfd5;this[_0x828402(0x122)][_0x828402(0x119)]({'bitbucket':{...this[_0x828402(0x122)][_0x828402(0x10f)],'token':_0x25f115}}),this[_0x828402(0x11e)]=Date[_0x828402(0x113)]()+_0x42725d*0x3e8,this[_0x828402(0x103)]=_0x25f115;}[a62_0x2aa586(0x126)](){return{};}[a62_0x2aa586(0x130)](){const _0x4aa80c=a62_0x2aa586;return this[_0x4aa80c(0x101)][_0x4aa80c(0x12b)](_0x4aa80c(0x125));}async[a62_0x2aa586(0x11d)](){try{return await this['getCurrentUser'](),!![];}catch(_0x4b0635){return![];}}};BitbucketApiService=__decorate([typedi_1['Service'](),__param(0x0,typedi_1[a62_0x2aa586(0x120)]()),__metadata(a62_0x2aa586(0xfc),[app_settings_service_1[a62_0x2aa586(0x104)],auth_settings_service_1[a62_0x2aa586(0x114)]])],BitbucketApiService),exports['BitbucketApiService']=BitbucketApiService;