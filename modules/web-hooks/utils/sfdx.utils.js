const a149_0x312c=['createProjectFrom','33392mXDvDa','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','constructor','__esModule','PROJECTS_PATH','13yUcDtK','projectName','.temp','removeDir','6319qFDAur','mdapiToSource','224932VhGszh','apply','../../internal/shell.internal','730671XJxozH','dir','1569dOZBzg','test','cp\x20-r\x20','__importDefault','SFDX','/*\x20','exec','../../internal/fs.internal','179879sXCeto','sfdx','makeDir','createEmptyProject','182470PIkzIL','path','fullProjectName','join','SFDXUtils'];const a149_0x486642=a149_0x19e7;(function(_0x183a17,_0xd52522){const _0xeb60d0=a149_0x19e7;while(!![]){try{const _0x260f68=-parseInt(_0xeb60d0(0x128))+-parseInt(_0xeb60d0(0x133))*-parseInt(_0xeb60d0(0x13e))+-parseInt(_0xeb60d0(0x124))+parseInt(_0xeb60d0(0x137))+-parseInt(_0xeb60d0(0x139))+-parseInt(_0xeb60d0(0x12e))+parseInt(_0xeb60d0(0x13c));if(_0x260f68===_0xd52522)break;else _0x183a17['push'](_0x183a17['shift']());}catch(_0x33e7e0){_0x183a17['push'](_0x183a17['shift']());}}}(a149_0x312c,0x2160a));const a149_0x5adb4e=function(){let _0x5acbe1=!![];return function(_0x1b2f0f,_0x3e12d5){const _0x810f7=_0x5acbe1?function(){const _0x212760=a149_0x19e7;if(_0x3e12d5){const _0x267579=_0x3e12d5[_0x212760(0x13a)](_0x1b2f0f,arguments);return _0x3e12d5=null,_0x267579;}}:function(){};return _0x5acbe1=![],_0x810f7;};}(),a149_0xf7407f=a149_0x5adb4e(this,function(){const _0x558378=function(){const _0x1afd50=a149_0x19e7,_0x482c2a=_0x558378[_0x1afd50(0x130)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x1afd50(0x130)](_0x1afd50(0x12f));return!_0x482c2a[_0x1afd50(0x13f)](a149_0xf7407f);};return _0x558378();});a149_0xf7407f();function a149_0x19e7(_0x5ae330,_0x4aae46){return a149_0x19e7=function(_0x24cce8,_0xf7407f){_0x24cce8=_0x24cce8-0x121;let _0x5adb4e=a149_0x312c[_0x24cce8];return _0x5adb4e;},a149_0x19e7(_0x5ae330,_0x4aae46);}'use strict';var __importDefault=this&&this[a149_0x486642(0x141)]||function(_0xd22da0){const _0x23da5f=a149_0x486642;return _0xd22da0&&_0xd22da0[_0x23da5f(0x131)]?_0xd22da0:{'default':_0xd22da0};};Object['defineProperty'](exports,a149_0x486642(0x131),{'value':!![]}),exports[a149_0x486642(0x12c)]=void 0x0;const path_1=__importDefault(require(a149_0x486642(0x129))),fs_internal_1=require(a149_0x486642(0x123)),shell_internal_1=require(a149_0x486642(0x13b)),sfdx_utils_1=require('../../salesforce/utils/sfdx.utils');class SFDXUtils{constructor(_0xbe93fb,_0x41e791){const _0x2ee5d2=a149_0x486642;this[_0x2ee5d2(0x134)]=_0xbe93fb,this['branchName']=_0x41e791,this['PROJECTS_PATH']=path_1['default'][_0x2ee5d2(0x12b)](process['cwd'](),_0x2ee5d2(0x135),_0x2ee5d2(0x125));}get[a149_0x486642(0x12a)](){const _0x504791=a149_0x486642;return this[_0x504791(0x134)]+'_'+this['branchName'];}get[a149_0x486642(0x13d)](){const _0x4ccbe1=a149_0x486642;return path_1['default'][_0x4ccbe1(0x12b)](this[_0x4ccbe1(0x132)],this[_0x4ccbe1(0x12a)]);}async[a149_0x486642(0x12d)](_0x59cae8){const _0xfe9123=a149_0x486642;!await fs_internal_1['FS']['exists'](this['PROJECTS_PATH'])&&await fs_internal_1['FS'][_0xfe9123(0x126)](this[_0xfe9123(0x132)]),await sfdx_utils_1[_0xfe9123(0x142)][_0xfe9123(0x127)](this[_0xfe9123(0x132)],this[_0xfe9123(0x12a)]),await sfdx_utils_1[_0xfe9123(0x142)][_0xfe9123(0x138)](_0x59cae8,this[_0xfe9123(0x13d)]);}async['copyProjectTo'](_0x4e0e8d){const _0x152de8=a149_0x486642;await shell_internal_1['Shell'][_0x152de8(0x122)](_0x152de8(0x140)+this[_0x152de8(0x13d)]+_0x152de8(0x121)+_0x4e0e8d);}async['removeDir'](){const _0x23ec13=a149_0x486642;await fs_internal_1['FS'][_0x23ec13(0x136)](this['dir']);}}exports[a149_0x486642(0x12c)]=SFDXUtils;