const a149_0x5df2=['/*\x20','1BhlqFT','apply','301853fbUcnW','2CVfPSu','SFDX','4mdONTB','createProjectFrom','47923WPLDHk','__esModule','return\x20/\x22\x20+\x20this\x20+\x20\x22/','fullProjectName','makeDir','../../salesforce/utils/sfdx.utils','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','100585BXJslY','mdapiToSource','1091842iLqVfT','cwd','projectName','dir','../../internal/shell.internal','3GJexUO','1180225UdTzMj','copyProjectTo','test','defineProperty','path','SFDXUtils','sfdx','319815wdjvKY','createEmptyProject','1069287qZiZJU','removeDir','exists','cp\x20-r\x20','constructor','PROJECTS_PATH','branchName'];const a149_0x3805d2=a149_0x259b;(function(_0x358609,_0xc2f52c){const _0x1c51b4=a149_0x259b;while(!![]){try{const _0x37f008=-parseInt(_0x1c51b4(0x91))+parseInt(_0x1c51b4(0x96))*-parseInt(_0x1c51b4(0x94))+parseInt(_0x1c51b4(0x8f))*-parseInt(_0x1c51b4(0x9d))+parseInt(_0x1c51b4(0x7d))*-parseInt(_0x1c51b4(0x85))+parseInt(_0x1c51b4(0x7e))+-parseInt(_0x1c51b4(0x78))+-parseInt(_0x1c51b4(0x92))*-parseInt(_0x1c51b4(0x87));if(_0x37f008===_0xc2f52c)break;else _0x358609['push'](_0x358609['shift']());}catch(_0x58d354){_0x358609['push'](_0x358609['shift']());}}}(a149_0x5df2,0xa4666));const a149_0x1b600d=function(){let _0x473043=!![];return function(_0x18186a,_0x3588f8){const _0x3d9148=_0x473043?function(){const _0x921f4a=a149_0x259b;if(_0x3588f8){const _0x30f16b=_0x3588f8[_0x921f4a(0x90)](_0x18186a,arguments);return _0x3588f8=null,_0x30f16b;}}:function(){};return _0x473043=![],_0x3d9148;};}(),a149_0x1b3a3e=a149_0x1b600d(this,function(){const _0xca1b2a=function(){const _0x5eb940=a149_0x259b,_0xabfcf7=_0xca1b2a[_0x5eb940(0x8b)](_0x5eb940(0x98))()[_0x5eb940(0x8b)](_0x5eb940(0x9c));return!_0xabfcf7[_0x5eb940(0x80)](a149_0x1b3a3e);};return _0xca1b2a();});a149_0x1b3a3e();'use strict';function a149_0x259b(_0x39a771,_0x3ed79e){return a149_0x259b=function(_0xbd0b0,_0x1b3a3e){_0xbd0b0=_0xbd0b0-0x77;let _0x1b600d=a149_0x5df2[_0xbd0b0];return _0x1b600d;},a149_0x259b(_0x39a771,_0x3ed79e);}var __importDefault=this&&this['__importDefault']||function(_0x3e2d5e){const _0xe537d8=a149_0x259b;return _0x3e2d5e&&_0x3e2d5e[_0xe537d8(0x97)]?_0x3e2d5e:{'default':_0x3e2d5e};};Object[a149_0x3805d2(0x81)](exports,a149_0x3805d2(0x97),{'value':!![]}),exports[a149_0x3805d2(0x83)]=void 0x0;const path_1=__importDefault(require(a149_0x3805d2(0x82))),fs_internal_1=require('../../internal/fs.internal'),shell_internal_1=require(a149_0x3805d2(0x7c)),sfdx_utils_1=require(a149_0x3805d2(0x9b));class SFDXUtils{constructor(_0x2575d1,_0x10712a){const _0x5931c1=a149_0x3805d2;this[_0x5931c1(0x7a)]=_0x2575d1,this['branchName']=_0x10712a,this['PROJECTS_PATH']=path_1['default']['join'](process[_0x5931c1(0x79)](),'.temp',_0x5931c1(0x84));}get[a149_0x3805d2(0x99)](){const _0x2a25d4=a149_0x3805d2;return this[_0x2a25d4(0x7a)]+'_'+this[_0x2a25d4(0x8d)];}get[a149_0x3805d2(0x7b)](){const _0x165654=a149_0x3805d2;return path_1['default']['join'](this[_0x165654(0x8c)],this['fullProjectName']);}async[a149_0x3805d2(0x95)](_0x321e99){const _0x367e60=a149_0x3805d2;!await fs_internal_1['FS'][_0x367e60(0x89)](this[_0x367e60(0x8c)])&&await fs_internal_1['FS'][_0x367e60(0x9a)](this[_0x367e60(0x8c)]),await sfdx_utils_1[_0x367e60(0x93)][_0x367e60(0x86)](this['PROJECTS_PATH'],this[_0x367e60(0x99)]),await sfdx_utils_1[_0x367e60(0x93)][_0x367e60(0x77)](_0x321e99,this[_0x367e60(0x7b)]);}async[a149_0x3805d2(0x7f)](_0x2bda41){const _0x30a773=a149_0x3805d2;await shell_internal_1['Shell']['exec'](_0x30a773(0x8a)+this['dir']+_0x30a773(0x8e)+_0x2bda41);}async['removeDir'](){const _0x33bc4f=a149_0x3805d2;await fs_internal_1['FS'][_0x33bc4f(0x88)](this['dir']);}}exports[a149_0x3805d2(0x83)]=SFDXUtils;