const a187_0x1d8bfa=a187_0x378b;(function(_0x3c5167,_0x21f880){const _0x5896f8=a187_0x378b,_0xdbb4bd=_0x3c5167();while(!![]){try{const _0x182786=-parseInt(_0x5896f8(0x1af))/0x1+-parseInt(_0x5896f8(0x1a9))/0x2*(-parseInt(_0x5896f8(0x194))/0x3)+-parseInt(_0x5896f8(0x197))/0x4+parseInt(_0x5896f8(0x195))/0x5+parseInt(_0x5896f8(0x1b4))/0x6*(-parseInt(_0x5896f8(0x190))/0x7)+parseInt(_0x5896f8(0x1a7))/0x8*(-parseInt(_0x5896f8(0x19c))/0x9)+parseInt(_0x5896f8(0x198))/0xa;if(_0x182786===_0x21f880)break;else _0xdbb4bd['push'](_0xdbb4bd['shift']());}catch(_0x1649e9){_0xdbb4bd['push'](_0xdbb4bd['shift']());}}}(a187_0x1909,0x7f207));const a187_0x8fb0e0=function(){let _0x59a20c=!![];return function(_0x5989ce,_0x4658bb){const _0x297ab9=_0x59a20c?function(){if(_0x4658bb){const _0xeb01bf=_0x4658bb['apply'](_0x5989ce,arguments);return _0x4658bb=null,_0xeb01bf;}}:function(){};return _0x59a20c=![],_0x297ab9;};}(),a187_0xdce083=a187_0x8fb0e0(this,function(){const _0x2eddd2=a187_0x378b;return a187_0xdce083[_0x2eddd2(0x193)]()[_0x2eddd2(0x1ab)](_0x2eddd2(0x1b6))['toString']()[_0x2eddd2(0x1b7)](a187_0xdce083)['search'](_0x2eddd2(0x1b6));});function a187_0x378b(_0x23fd41,_0x38ab38){const _0x23a376=a187_0x1909();return a187_0x378b=function(_0xdce083,_0x8fb0e0){_0xdce083=_0xdce083-0x18f;let _0x1909c4=_0x23a376[_0xdce083];return _0x1909c4;},a187_0x378b(_0x23fd41,_0x38ab38);}a187_0xdce083();function a187_0x1909(){const _0x1ecfce=['393931NQMzFM','projectName','createEmptyProject','dir','../../internal/fs.internal','3077052unDpbE','PROJECTS_PATH','(((.+)+)+)+$','constructor','uniqueId','14jzIaMw','SFDXUtils','defineProperty','toString','1320093TUCORh','517205pXTPHS','copyProjectTo','3511608bRxAJp','26079230VIWEZD','../../internal/shell.internal','fullProjectName','shortid','3479391IoGaPz','cp\x20-r\x20','SFDX','__esModule','__importDefault','exec','makeDir','removeDir','path','branchName','cwd','16YjYINa','default','4ZrfuIv','mdapiToSource','search','.temp','sfdx','/*\x20'];a187_0x1909=function(){return _0x1ecfce;};return a187_0x1909();}'use strict';var __importDefault=this&&this[a187_0x1d8bfa(0x1a0)]||function(_0x5e5265){const _0x26643b=a187_0x1d8bfa;return _0x5e5265&&_0x5e5265[_0x26643b(0x19f)]?_0x5e5265:{'default':_0x5e5265};};Object[a187_0x1d8bfa(0x192)](exports,'__esModule',{'value':!![]}),exports[a187_0x1d8bfa(0x191)]=void 0x0;const path_1=__importDefault(require(a187_0x1d8bfa(0x1a4))),fs_internal_1=require(a187_0x1d8bfa(0x1b3)),shell_internal_1=require(a187_0x1d8bfa(0x199)),sfdx_utils_1=require('../../salesforce/utils/sfdx.utils'),shortid_1=__importDefault(require(a187_0x1d8bfa(0x19b)));class SFDXUtils{constructor(_0x402185,_0x39400e){const _0x125085=a187_0x1d8bfa;this[_0x125085(0x1b0)]=_0x402185,this['branchName']=_0x39400e,this['PROJECTS_PATH']=path_1[_0x125085(0x1a8)]['join'](process[_0x125085(0x1a6)](),_0x125085(0x1ac),_0x125085(0x1ad)),this[_0x125085(0x18f)]=shortid_1[_0x125085(0x1a8)]();}get['fullProjectName'](){const _0x331997=a187_0x1d8bfa;return this['projectName']+'_'+this[_0x331997(0x1a5)]+'_'+this[_0x331997(0x18f)];}get[a187_0x1d8bfa(0x1b2)](){return path_1['default']['join'](this['PROJECTS_PATH'],this['fullProjectName']);}async['createProjectFrom'](_0x4dcbb9){const _0x39cd6a=a187_0x1d8bfa;!await fs_internal_1['FS']['exists'](this[_0x39cd6a(0x1b5)])&&await fs_internal_1['FS'][_0x39cd6a(0x1a2)](this[_0x39cd6a(0x1b5)]),await sfdx_utils_1[_0x39cd6a(0x19e)][_0x39cd6a(0x1b1)](this[_0x39cd6a(0x1b5)],this[_0x39cd6a(0x19a)]),await sfdx_utils_1[_0x39cd6a(0x19e)][_0x39cd6a(0x1aa)](_0x4dcbb9,this[_0x39cd6a(0x1b2)]);}async[a187_0x1d8bfa(0x196)](_0xb6f8ab){const _0x2e1b08=a187_0x1d8bfa;await shell_internal_1['Shell'][_0x2e1b08(0x1a1)](_0x2e1b08(0x19d)+this[_0x2e1b08(0x1b2)]+_0x2e1b08(0x1ae)+_0xb6f8ab);}async[a187_0x1d8bfa(0x1a3)](){const _0x40b0cb=a187_0x1d8bfa;await fs_internal_1['FS']['removeDir'](this[_0x40b0cb(0x1b2)]);}}exports[a187_0x1d8bfa(0x191)]=SFDXUtils;