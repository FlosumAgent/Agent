const a153_0x2d4d37=a153_0x40ff;(function(_0x4e23f1,_0x2ee0b6){const _0x33102e=a153_0x40ff,_0x3c3ae5=_0x4e23f1();while(!![]){try{const _0x170715=-parseInt(_0x33102e(0x1e8))/0x1*(parseInt(_0x33102e(0x1f6))/0x2)+-parseInt(_0x33102e(0x1ed))/0x3+-parseInt(_0x33102e(0x1fb))/0x4*(parseInt(_0x33102e(0x203))/0x5)+parseInt(_0x33102e(0x20b))/0x6+parseInt(_0x33102e(0x1ea))/0x7+parseInt(_0x33102e(0x208))/0x8*(-parseInt(_0x33102e(0x1f9))/0x9)+-parseInt(_0x33102e(0x1e9))/0xa*(-parseInt(_0x33102e(0x20c))/0xb);if(_0x170715===_0x2ee0b6)break;else _0x3c3ae5['push'](_0x3c3ae5['shift']());}catch(_0x1c5b50){_0x3c3ae5['push'](_0x3c3ae5['shift']());}}}(a153_0x4c24,0x30e40));function a153_0x4c24(){const _0x48d561=['1454976CXyJBi','2585JONHwV','defineProperty','constructor','PROJECTS_PATH','createProjectFrom','49VWNImh','12520AnxyeC','1158773jguLac','projectName','SFDX','142827PSBunn','default','copyProjectTo','path','../../internal/shell.internal','cwd','dir','SFDXUtils','.temp','14558VorvRK','createEmptyProject','search','5715lzcmaI','removeDir','244SLEnGn','__importDefault','join','Shell','fullProjectName','apply','../../salesforce/utils/sfdx.utils','/*\x20','5095hqOkYh','sfdx','__esModule','branchName','exec','448cUfXar','cp\x20-r\x20','exists'];a153_0x4c24=function(){return _0x48d561;};return a153_0x4c24();}const a153_0xe273d5=function(){let _0x293e71=!![];return function(_0xfe4ed7,_0x5bf5d1){const _0x50caa0=_0x293e71?function(){const _0x52ebc8=a153_0x40ff;if(_0x5bf5d1){const _0x576caf=_0x5bf5d1[_0x52ebc8(0x200)](_0xfe4ed7,arguments);return _0x5bf5d1=null,_0x576caf;}}:function(){};return _0x293e71=![],_0x50caa0;};}(),a153_0x5c0c8e=a153_0xe273d5(this,function(){const _0x49fafd=a153_0x40ff;return a153_0x5c0c8e['toString']()[_0x49fafd(0x1f8)]('(((.+)+)+)+$')['toString']()[_0x49fafd(0x1e5)](a153_0x5c0c8e)['search']('(((.+)+)+)+$');});a153_0x5c0c8e();'use strict';var __importDefault=this&&this[a153_0x2d4d37(0x1fc)]||function(_0x31be76){const _0x42d5d7=a153_0x2d4d37;return _0x31be76&&_0x31be76[_0x42d5d7(0x205)]?_0x31be76:{'default':_0x31be76};};function a153_0x40ff(_0x4b2dad,_0x2ea8b8){const _0x1eba8d=a153_0x4c24();return a153_0x40ff=function(_0x5c0c8e,_0xe273d5){_0x5c0c8e=_0x5c0c8e-0x1e5;let _0x4c241f=_0x1eba8d[_0x5c0c8e];return _0x4c241f;},a153_0x40ff(_0x4b2dad,_0x2ea8b8);}Object[a153_0x2d4d37(0x20d)](exports,a153_0x2d4d37(0x205),{'value':!![]}),exports[a153_0x2d4d37(0x1f4)]=void 0x0;const path_1=__importDefault(require(a153_0x2d4d37(0x1f0))),fs_internal_1=require('../../internal/fs.internal'),shell_internal_1=require(a153_0x2d4d37(0x1f1)),sfdx_utils_1=require(a153_0x2d4d37(0x201));class SFDXUtils{constructor(_0x145a82,_0xb02027){const _0x1be489=a153_0x2d4d37;this[_0x1be489(0x1eb)]=_0x145a82,this[_0x1be489(0x206)]=_0xb02027,this['PROJECTS_PATH']=path_1[_0x1be489(0x1ee)][_0x1be489(0x1fd)](process[_0x1be489(0x1f2)](),_0x1be489(0x1f5),_0x1be489(0x204));}get[a153_0x2d4d37(0x1ff)](){const _0x562099=a153_0x2d4d37;return this[_0x562099(0x1eb)]+'_'+this['branchName'];}get['dir'](){const _0x24c2ae=a153_0x2d4d37;return path_1[_0x24c2ae(0x1ee)][_0x24c2ae(0x1fd)](this[_0x24c2ae(0x1e6)],this[_0x24c2ae(0x1ff)]);}async[a153_0x2d4d37(0x1e7)](_0x23de8d){const _0x54f9d9=a153_0x2d4d37;!await fs_internal_1['FS'][_0x54f9d9(0x20a)](this[_0x54f9d9(0x1e6)])&&await fs_internal_1['FS']['makeDir'](this[_0x54f9d9(0x1e6)]),await sfdx_utils_1['SFDX'][_0x54f9d9(0x1f7)](this[_0x54f9d9(0x1e6)],this['fullProjectName']),await sfdx_utils_1[_0x54f9d9(0x1ec)]['mdapiToSource'](_0x23de8d,this[_0x54f9d9(0x1f3)]);}async[a153_0x2d4d37(0x1ef)](_0x59da16){const _0xcade76=a153_0x2d4d37;await shell_internal_1[_0xcade76(0x1fe)][_0xcade76(0x207)](_0xcade76(0x209)+this[_0xcade76(0x1f3)]+_0xcade76(0x202)+_0x59da16);}async[a153_0x2d4d37(0x1fa)](){const _0x460684=a153_0x2d4d37;await fs_internal_1['FS']['removeDir'](this[_0x460684(0x1f3)]);}}exports[a153_0x2d4d37(0x1f4)]=SFDXUtils;