const a83_0x54a2ee=a83_0x5268;(function(_0x33c419,_0x3ce360){const _0x4d0d7a=a83_0x5268,_0x2c243d=_0x33c419();while(!![]){try{const _0x14f646=parseInt(_0x4d0d7a(0x14d))/0x1*(parseInt(_0x4d0d7a(0x14a))/0x2)+-parseInt(_0x4d0d7a(0x173))/0x3+parseInt(_0x4d0d7a(0x145))/0x4+parseInt(_0x4d0d7a(0x15c))/0x5*(parseInt(_0x4d0d7a(0x178))/0x6)+-parseInt(_0x4d0d7a(0x16c))/0x7+parseInt(_0x4d0d7a(0x157))/0x8+-parseInt(_0x4d0d7a(0x17b))/0x9*(parseInt(_0x4d0d7a(0x15d))/0xa);if(_0x14f646===_0x3ce360)break;else _0x2c243d['push'](_0x2c243d['shift']());}catch(_0x49ea9f){_0x2c243d['push'](_0x2c243d['shift']());}}}(a83_0x1205,0xafd6c));const a83_0x332a2f=function(){let _0x7c1305=!![];return function(_0x1ada26,_0x556984){const _0x3c89ab=_0x7c1305?function(){const _0x122b82=a83_0x5268;if(_0x556984){const _0x5d5476=_0x556984[_0x122b82(0x16b)](_0x1ada26,arguments);return _0x556984=null,_0x5d5476;}}:function(){};return _0x7c1305=![],_0x3c89ab;};}(),a83_0x2be027=a83_0x332a2f(this,function(){const _0x510762=a83_0x5268;return a83_0x2be027[_0x510762(0x171)]()[_0x510762(0x156)](_0x510762(0x176))[_0x510762(0x171)]()['constructor'](a83_0x2be027)['search'](_0x510762(0x176));});a83_0x2be027();'use strict';var __importDefault=this&&this[a83_0x54a2ee(0x174)]||function(_0xcc56bd){const _0x324816=a83_0x54a2ee;return _0xcc56bd&&_0xcc56bd[_0x324816(0x175)]?_0xcc56bd:{'default':_0xcc56bd};};function a83_0x1205(){const _0x2e2004=['30DZrbYQ','defineProperty','length','225nPStdW','4020948JmthLl','removeFile','start','remove\x20component\x20directory\x20%s\x20[%s]','Logger','2678352MRQrRo','join','removeAt','1tTWtup','Unknown\x20child\x20type\x20','remove\x20parent\x20component\x20%s\x20[%s]','name','sourceDir','have\x20to\x20update\x20%d\x20files','pop','Xml','makeDir','search','8502800PsrJAo','logger','./child-types','remove\x20component\x20\x20%s\x20[%s]','all','86915JikKtE','475120BvpQla','log','readFile','fileName','../utils/xml','parse','removeChild','./child-types-map','path','isDir','removeParent','removeDir','exists','includes','apply','6784484KdqKbX','META_EXTENSION','components','parentComponents','type','toString','default','1850790TSAwNF','__importDefault','__esModule','(((.+)+)+)+$','writeFile'];a83_0x1205=function(){return _0x2e2004;};return a83_0x1205();}Object[a83_0x54a2ee(0x179)](exports,'__esModule',{'value':!![]}),exports['MDApiRemover']=void 0x0;const fs_internal_1=require('../../internal/fs.internal'),core_1=require('../../../core'),xml_1=require(a83_0x54a2ee(0x161)),child_types_1=__importDefault(require(a83_0x54a2ee(0x159))),child_types_map_1=__importDefault(require(a83_0x54a2ee(0x164))),path_1=__importDefault(require(a83_0x54a2ee(0x165)));function a83_0x5268(_0x3bd34d,_0x44baa3){const _0x2063d0=a83_0x1205();return a83_0x5268=function(_0x2be027,_0x332a2f){_0x2be027=_0x2be027-0x145;let _0x1205e3=_0x2063d0[_0x2be027];return _0x1205e3;},a83_0x5268(_0x3bd34d,_0x44baa3);}class MDApiRemover{constructor(_0x578b7d,_0x37d987){const _0x4e9a51=a83_0x54a2ee;this['components']=_0x578b7d,this[_0x4e9a51(0x151)]=_0x37d987,this[_0x4e9a51(0x16d)]='-meta.xml',this['MAX_WRITES_PER_TICK']=0x64,this['logger']=new core_1[(_0x4e9a51(0x149))](MDApiRemover[_0x4e9a51(0x150)]),this[_0x4e9a51(0x16f)]={};}async[a83_0x54a2ee(0x167)](_0x4e1975){const _0x343d32=a83_0x54a2ee,_0x4223e2=path_1[_0x343d32(0x172)][_0x343d32(0x14b)](this['sourceDir'],_0x4e1975[_0x343d32(0x165)]),_0x292c03=path_1[_0x343d32(0x172)]['join'](this['sourceDir'],''+_0x4e1975['path']+this['META_EXTENSION']);this['parentComponents'][_0x4e1975[_0x343d32(0x165)]]&&delete this[_0x343d32(0x16f)][_0x4e1975[_0x343d32(0x165)]];const _0x51a9e7=await fs_internal_1['FS'][_0x343d32(0x166)](_0x4223e2)['catch'](()=>![]);if(_0x51a9e7){this[_0x343d32(0x158)][_0x343d32(0x15e)](_0x343d32(0x148),_0x4223e2,_0x4e1975[_0x343d32(0x170)]),await fs_internal_1['FS'][_0x343d32(0x168)](_0x4223e2);return;}this[_0x343d32(0x158)][_0x343d32(0x15e)](_0x343d32(0x15a),_0x4223e2,_0x4e1975['type']),await Promise[_0x343d32(0x15b)]([fs_internal_1['FS'][_0x343d32(0x146)](_0x4223e2),fs_internal_1['FS']['removeFile'](_0x292c03)]);}async[a83_0x54a2ee(0x163)](_0x4b8299){const _0x4a94f8=a83_0x54a2ee,{fileName:_0x312804,type:_0x2d9518,path:_0x5bb629}=_0x4b8299,_0x339212=child_types_map_1[_0x4a94f8(0x172)][_0x2d9518];if(!_0x339212)throw new Error(_0x4a94f8(0x14e)+_0x2d9518);if(!this[_0x4a94f8(0x16f)][_0x5bb629]){const _0x249d98=path_1[_0x4a94f8(0x172)][_0x4a94f8(0x14b)](this[_0x4a94f8(0x151)],_0x5bb629),_0x5f2fb2=await fs_internal_1['FS'][_0x4a94f8(0x169)](_0x249d98);if(!_0x5f2fb2)return;const _0x5da1e5=await fs_internal_1['FS'][_0x4a94f8(0x15f)](_0x249d98);this[_0x4a94f8(0x16f)][_0x5bb629]=await xml_1[_0x4a94f8(0x154)][_0x4a94f8(0x162)](_0x5da1e5);}const _0x11be6a=this[_0x4a94f8(0x16f)][_0x5bb629],_0x6e48c5=_0x312804['split']('.')[_0x4a94f8(0x153)]();xml_1[_0x4a94f8(0x154)][_0x4a94f8(0x14c)](_0x11be6a,_0x339212,_0x6e48c5||_0x312804),xml_1[_0x4a94f8(0x154)]['isEmptyXml'](_0x11be6a)?(this[_0x4a94f8(0x158)][_0x4a94f8(0x15e)]('remote\x20empty\x20parent\x20component\x20file\x20%s\x20[%s]',_0x4b8299[_0x4a94f8(0x165)],_0x4b8299[_0x4a94f8(0x160)]),await this['removeParent'](_0x4b8299),delete this['parentComponents'][_0x5bb629]):this[_0x4a94f8(0x16f)][_0x5bb629]=_0x11be6a;}async[a83_0x54a2ee(0x147)](){const _0x4d5b1e=a83_0x54a2ee;!await fs_internal_1['FS'][_0x4d5b1e(0x169)](this['sourceDir'])&&await fs_internal_1['FS'][_0x4d5b1e(0x155)](this[_0x4d5b1e(0x151)]);for(const _0x5e3b99 of this['components']){!child_types_1[_0x4d5b1e(0x172)][_0x4d5b1e(0x16a)](_0x5e3b99[_0x4d5b1e(0x170)])?(this[_0x4d5b1e(0x158)][_0x4d5b1e(0x15e)](_0x4d5b1e(0x14f),_0x5e3b99[_0x4d5b1e(0x160)],_0x5e3b99[_0x4d5b1e(0x170)]),await this[_0x4d5b1e(0x167)](_0x5e3b99)):(this['logger'][_0x4d5b1e(0x15e)]('remove\x20child\x20component\x20%s\x20[%s]',_0x5e3b99[_0x4d5b1e(0x160)],_0x5e3b99[_0x4d5b1e(0x170)]),await this[_0x4d5b1e(0x163)](_0x5e3b99));}const _0x6dacb7=Object['keys'](this['parentComponents']);this[_0x4d5b1e(0x158)][_0x4d5b1e(0x15e)](_0x4d5b1e(0x152),this[_0x4d5b1e(0x16e)][_0x4d5b1e(0x17a)]);while(_0x6dacb7[_0x4d5b1e(0x17a)]){const _0x1b9984=_0x6dacb7['splice'](0x0,this['MAX_WRITES_PER_TICK']);for(const _0x12baca of _0x1b9984){await fs_internal_1['FS'][_0x4d5b1e(0x177)](path_1[_0x4d5b1e(0x172)][_0x4d5b1e(0x14b)](this[_0x4d5b1e(0x151)],_0x12baca),xml_1[_0x4d5b1e(0x154)]['convertToString'](this[_0x4d5b1e(0x16f)][_0x12baca]));}}this[_0x4d5b1e(0x16f)]={};}}exports['MDApiRemover']=MDApiRemover;