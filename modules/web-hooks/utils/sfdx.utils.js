const a143_0x396c=['/*\x20','exists','constructor','SFDX','join','937fnMyWZ','sfdx','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','19bKgjIr','495430KAEXfh','__importDefault','10639rgtVOq','644UdeCkb','dir','PROJECTS_PATH','rm\x20-rf\x20','removeDir','defineProperty','fullProjectName','Shell','createEmptyProject','16319JbHvxz','path','.temp','apply','260771OogZVz','mkdir\x20-p\x20','21rWtaGF','projectName','cwd','cp\x20-r\x20','branchName','mdapiToSource','SFDXUtils','13uQECGa','createProjectFrom','10399YgmSHs','default','121mqmCUQ','../../internal/shell.internal','test','4327YKcqES','exec','__esModule'];const a143_0x24e532=a143_0x345a;(function(_0x4d39ca,_0x5f7ffc){const _0x29392a=a143_0x345a;while(!![]){try{const _0x1bb0c6=-parseInt(_0x29392a(0x1df))*-parseInt(_0x29392a(0x1e1))+-parseInt(_0x29392a(0x1d8))*-parseInt(_0x29392a(0x1d2))+parseInt(_0x29392a(0x1c9))*-parseInt(_0x29392a(0x1ee))+parseInt(_0x29392a(0x1d6))+-parseInt(_0x29392a(0x1c6))+parseInt(_0x29392a(0x1c5))*parseInt(_0x29392a(0x1c8))+-parseInt(_0x29392a(0x1e3))*-parseInt(_0x29392a(0x1e6));if(_0x1bb0c6===_0x5f7ffc)break;else _0x4d39ca['push'](_0x4d39ca['shift']());}catch(_0x54eb68){_0x4d39ca['push'](_0x4d39ca['shift']());}}}(a143_0x396c,0x593c3));const a143_0x235f36=function(){let _0x4f84c3=!![];return function(_0x4d8f1a,_0x590dae){const _0x5dacf1=_0x4f84c3?function(){const _0x113a3a=a143_0x345a;if(_0x590dae){const _0x329b6e=_0x590dae[_0x113a3a(0x1d5)](_0x4d8f1a,arguments);return _0x590dae=null,_0x329b6e;}}:function(){};return _0x4f84c3=![],_0x5dacf1;};}(),a143_0x1c452d=a143_0x235f36(this,function(){const _0x132b6c=function(){const _0x5759d2=a143_0x345a,_0x507299=_0x132b6c['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x5759d2(0x1eb)](_0x5759d2(0x1f0));return!_0x507299[_0x5759d2(0x1e5)](a143_0x1c452d);};return _0x132b6c();});a143_0x1c452d();function a143_0x345a(_0x18b97f,_0x48d4c7){return a143_0x345a=function(_0x194c8b,_0x1c452d){_0x194c8b=_0x194c8b-0x1c5;let _0x235f36=a143_0x396c[_0x194c8b];return _0x235f36;},a143_0x345a(_0x18b97f,_0x48d4c7);}'use strict';var __importDefault=this&&this[a143_0x24e532(0x1c7)]||function(_0x3b7e2e){const _0x237fa1=a143_0x24e532;return _0x3b7e2e&&_0x3b7e2e[_0x237fa1(0x1e8)]?_0x3b7e2e:{'default':_0x3b7e2e};};Object[a143_0x24e532(0x1ce)](exports,a143_0x24e532(0x1e8),{'value':!![]}),exports[a143_0x24e532(0x1de)]=void 0x0;const path_1=__importDefault(require(a143_0x24e532(0x1d3))),fs_internal_1=require('../../internal/fs.internal'),shell_internal_1=require(a143_0x24e532(0x1e4)),sfdx_utils_1=require('../../salesforce/utils/sfdx.utils');class SFDXUtils{constructor(_0x3ad30f,_0x24f74b){const _0xbe79d4=a143_0x24e532;this[_0xbe79d4(0x1d9)]=_0x3ad30f,this[_0xbe79d4(0x1dc)]=_0x24f74b,this[_0xbe79d4(0x1cb)]=path_1['default'][_0xbe79d4(0x1ed)](process[_0xbe79d4(0x1da)](),_0xbe79d4(0x1d4),_0xbe79d4(0x1ef));}get[a143_0x24e532(0x1cf)](){const _0x2600fe=a143_0x24e532;return this[_0x2600fe(0x1d9)]+'_'+this[_0x2600fe(0x1dc)];}get[a143_0x24e532(0x1ca)](){const _0x1eccac=a143_0x24e532;return path_1[_0x1eccac(0x1e2)]['join'](this[_0x1eccac(0x1cb)],this[_0x1eccac(0x1cf)]);}async[a143_0x24e532(0x1e0)](_0x2b8625){const _0x299a62=a143_0x24e532;!await fs_internal_1['FS'][_0x299a62(0x1ea)](this[_0x299a62(0x1cb)])&&await shell_internal_1[_0x299a62(0x1d0)][_0x299a62(0x1e7)](_0x299a62(0x1d7)+this[_0x299a62(0x1cb)]),await sfdx_utils_1[_0x299a62(0x1ec)][_0x299a62(0x1d1)](this['PROJECTS_PATH'],this[_0x299a62(0x1cf)]),await sfdx_utils_1[_0x299a62(0x1ec)][_0x299a62(0x1dd)](_0x2b8625,this[_0x299a62(0x1ca)]);}async['copyProjectTo'](_0x1e3803){const _0x2d34f7=a143_0x24e532;await shell_internal_1[_0x2d34f7(0x1d0)][_0x2d34f7(0x1e7)](_0x2d34f7(0x1db)+this[_0x2d34f7(0x1ca)]+_0x2d34f7(0x1e9)+_0x1e3803);}async[a143_0x24e532(0x1cd)](){const _0x5042ab=a143_0x24e532;await shell_internal_1[_0x5042ab(0x1d0)]['exec'](_0x5042ab(0x1cc)+this[_0x5042ab(0x1ca)]);}}exports[a143_0x24e532(0x1de)]=SFDXUtils;