const a154_0x5f427f=a154_0x277f;(function(_0x30dc91,_0x2eff6e){const _0xc792c2=a154_0x277f,_0x364453=_0x30dc91();while(!![]){try{const _0x3aaa21=-parseInt(_0xc792c2(0x88))/0x1+-parseInt(_0xc792c2(0x6f))/0x2+-parseInt(_0xc792c2(0x80))/0x3*(-parseInt(_0xc792c2(0x76))/0x4)+parseInt(_0xc792c2(0x75))/0x5*(parseInt(_0xc792c2(0x89))/0x6)+-parseInt(_0xc792c2(0x79))/0x7*(parseInt(_0xc792c2(0x73))/0x8)+parseInt(_0xc792c2(0x87))/0x9+parseInt(_0xc792c2(0x6b))/0xa;if(_0x3aaa21===_0x2eff6e)break;else _0x364453['push'](_0x364453['shift']());}catch(_0x485d85){_0x364453['push'](_0x364453['shift']());}}}(a154_0xbcf1,0x3bc67));const a154_0x269e68=function(){let _0x4e50d8=!![];return function(_0x454700,_0x5e306f){const _0xeee13d=_0x4e50d8?function(){if(_0x5e306f){const _0x2b7458=_0x5e306f['apply'](_0x454700,arguments);return _0x5e306f=null,_0x2b7458;}}:function(){};return _0x4e50d8=![],_0xeee13d;};}(),a154_0x5ab9f8=a154_0x269e68(this,function(){const _0x2e696d=a154_0x277f;return a154_0x5ab9f8[_0x2e696d(0x6e)]()[_0x2e696d(0x7a)](_0x2e696d(0x70))[_0x2e696d(0x6e)]()[_0x2e696d(0x84)](a154_0x5ab9f8)['search'](_0x2e696d(0x70));});a154_0x5ab9f8();function a154_0x277f(_0x2ee96,_0xb7be3f){const _0x1cbdaf=a154_0xbcf1();return a154_0x277f=function(_0x5ab9f8,_0x269e68){_0x5ab9f8=_0x5ab9f8-0x6b;let _0xbcf1db=_0x1cbdaf[_0x5ab9f8];return _0xbcf1db;},a154_0x277f(_0x2ee96,_0xb7be3f);}'use strict';var __importDefault=this&&this['__importDefault']||function(_0x581140){const _0x55d2f2=a154_0x277f;return _0x581140&&_0x581140[_0x55d2f2(0x81)]?_0x581140:{'default':_0x581140};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a154_0x5f427f(0x7e)]=void 0x0;const path_1=__importDefault(require('path')),fs_internal_1=require(a154_0x5f427f(0x78)),shell_internal_1=require('../../internal/shell.internal'),sfdx_utils_1=require(a154_0x5f427f(0x8d));function a154_0xbcf1(){const _0x202441=['__esModule','default','cwd','constructor','SFDX','PROJECTS_PATH','999243YqRTRG','175569NrXxdN','246384muErZJ','removeDir','mdapiToSource','join','../../salesforce/utils/sfdx.utils','.temp','4287290lINKKZ','exec','Shell','toString','556590XgJitp','(((.+)+)+)+$','fullProjectName','cp\x20-r\x20','2351736ydhXhJ','dir','40qJWALm','4LWlPHJ','createProjectFrom','../../internal/fs.internal','7VQKpYk','search','createEmptyProject','copyProjectTo','exists','SFDXUtils','sfdx','373206synpBM'];a154_0xbcf1=function(){return _0x202441;};return a154_0xbcf1();}class SFDXUtils{constructor(_0x31346c,_0x49f360){const _0x3133e2=a154_0x5f427f;this['projectName']=_0x31346c,this['branchName']=_0x49f360,this[_0x3133e2(0x86)]=path_1[_0x3133e2(0x82)][_0x3133e2(0x8c)](process[_0x3133e2(0x83)](),_0x3133e2(0x8e),_0x3133e2(0x7f));}get['fullProjectName'](){return this['projectName']+'_'+this['branchName'];}get[a154_0x5f427f(0x74)](){const _0x3a9dcd=a154_0x5f427f;return path_1['default'][_0x3a9dcd(0x8c)](this[_0x3a9dcd(0x86)],this[_0x3a9dcd(0x71)]);}async[a154_0x5f427f(0x77)](_0xb7d3f3){const _0x2e5757=a154_0x5f427f;!await fs_internal_1['FS'][_0x2e5757(0x7d)](this[_0x2e5757(0x86)])&&await fs_internal_1['FS']['makeDir'](this[_0x2e5757(0x86)]),await sfdx_utils_1[_0x2e5757(0x85)][_0x2e5757(0x7b)](this['PROJECTS_PATH'],this[_0x2e5757(0x71)]),await sfdx_utils_1[_0x2e5757(0x85)][_0x2e5757(0x8b)](_0xb7d3f3,this[_0x2e5757(0x74)]);}async[a154_0x5f427f(0x7c)](_0x5e6967){const _0x51c63f=a154_0x5f427f;await shell_internal_1[_0x51c63f(0x6d)][_0x51c63f(0x6c)](_0x51c63f(0x72)+this[_0x51c63f(0x74)]+'/*\x20'+_0x5e6967);}async['removeDir'](){const _0x26efeb=a154_0x5f427f;await fs_internal_1['FS'][_0x26efeb(0x8a)](this[_0x26efeb(0x74)]);}}exports['SFDXUtils']=SFDXUtils;