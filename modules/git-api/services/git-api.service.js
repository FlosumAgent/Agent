const a65_0x536a=['1471DvzjYm','default','InternalServerError','__importDefault','catch','request','281zzfwUW','../../shared/utils/request','4aYOdUM','GIT_API_LINKS','Agent','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','getHeaders','36543pwXPdK','61068tljuGH','../../../constants','constructor','testConnection','defineProperty','236964iaJDRz','110IWisdm','145889dbUext','requestWrapper','createRequest','GitApiService','test','176293qjabXx','appSettings','__esModule','get','421IowiiT'];const a65_0x28b7a0=a65_0xcbae;(function(_0x45feb8,_0x471683){const _0x25e02f=a65_0xcbae;while(!![]){try{const _0x1a58b5=parseInt(_0x25e02f(0x108))+-parseInt(_0x25e02f(0x11f))+-parseInt(_0x25e02f(0x112))*parseInt(_0x25e02f(0x107))+-parseInt(_0x25e02f(0x11a))*-parseInt(_0x25e02f(0x120))+parseInt(_0x25e02f(0x106))+parseInt(_0x25e02f(0x118))*-parseInt(_0x25e02f(0x111))+-parseInt(_0x25e02f(0x10d));if(_0x1a58b5===_0x471683)break;else _0x45feb8['push'](_0x45feb8['shift']());}catch(_0x268f8f){_0x45feb8['push'](_0x45feb8['shift']());}}}(a65_0x536a,0x20c22));const a65_0x171c4d=function(){let _0x5268dc=!![];return function(_0x86f0bb,_0x384eca){const _0x581264=_0x5268dc?function(){if(_0x384eca){const _0x239782=_0x384eca['apply'](_0x86f0bb,arguments);return _0x384eca=null,_0x239782;}}:function(){};return _0x5268dc=![],_0x581264;};}(),a65_0x235e3a=a65_0x171c4d(this,function(){const _0x5a8456=function(){const _0xb88938=a65_0xcbae,_0x312e19=_0x5a8456[_0xb88938(0x122)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor'](_0xb88938(0x11d));return!_0x312e19[_0xb88938(0x10c)](a65_0x235e3a);};return _0x5a8456();});a65_0x235e3a();'use strict';var __importDefault=this&&this[a65_0x28b7a0(0x115)]||function(_0x268927){const _0x5b752a=a65_0x28b7a0;return _0x268927&&_0x268927[_0x5b752a(0x10f)]?_0x268927:{'default':_0x268927};};Object[a65_0x28b7a0(0x124)](exports,'__esModule',{'value':!![]}),exports['GitApiService']=void 0x0;const constants_1=require(a65_0x28b7a0(0x121)),request_1=require(a65_0x28b7a0(0x119)),axios_1=__importDefault(require('axios')),internal_server_error_1=require('../../../core/errors/internal-server.error'),https_1=__importDefault(require('https'));class GitApiService{constructor(_0x2df893){const _0x5a4673=a65_0x28b7a0;this[_0x5a4673(0x10e)]=_0x2df893,this['request']=this[_0x5a4673(0x10a)]();}async[a65_0x28b7a0(0x123)](){const _0x222aa9=a65_0x28b7a0;await this[_0x222aa9(0x117)][_0x222aa9(0x110)]('')[_0x222aa9(0x116)](_0x2bb546=>{const _0x4c5ad4=_0x222aa9;if(_0x2bb546 instanceof internal_server_error_1[_0x4c5ad4(0x114)])throw _0x2bb546;return!![];});}['createRequest'](_0x1dd643){const _0x3cbb6c=a65_0x28b7a0,_0x20ea7d=axios_1['default']['create']({'baseURL':_0x1dd643||constants_1[_0x3cbb6c(0x11b)][this[_0x3cbb6c(0x10e)]['provider']],'headers':this[_0x3cbb6c(0x11e)](),'httpsAgent':new https_1[(_0x3cbb6c(0x113))][(_0x3cbb6c(0x11c))]({'rejectUnauthorized':![]})});return request_1[_0x3cbb6c(0x109)](_0x20ea7d);}}function a65_0xcbae(_0x4f292b,_0x12fdd5){return a65_0xcbae=function(_0x6ae432,_0x235e3a){_0x6ae432=_0x6ae432-0x106;let _0x171c4d=a65_0x536a[_0x6ae432];return _0x171c4d;},a65_0xcbae(_0x4f292b,_0x12fdd5);}exports[a65_0x28b7a0(0x10b)]=GitApiService;