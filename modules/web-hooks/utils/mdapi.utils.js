const a126_0x3475=['constructor','return\x20/\x22\x20+\x20this\x20+\x20\x22/','MDApiParser','copy\x20mdapi\x20to\x20temp\x20dir','dir','__importDefault','1LJpaSC','detected\x20sfdx\x20project\x20convert\x20to\x20mdapi','start','7dsdXWQ','\x20&&\x20rm\x20-rf\x20','../../sfdx/utils/sfdx','default','733102GoVwOS','rm\x20-rf\x20','mdapi','isSFDXProject','apply','prepareMdapi','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','cwd','817664GPFynm','../../internal/shell.internal','repoName','mdapi-utils','removeDir','run','join','727980DJfkIr','\x20&&\x20cp\x20-r\x20','/*\x20','Shell','MDApiWriter','205939TdilGR','rm\x20-f\x20','sourceToMdapi','/.git','MDApiUtils','exec','cp\x20-r\x20','defineProperty','SFDX','783853VJqBFS','log','../../parsers/mdapi','mkdir\x20-p\x20','__esModule','/package.xml','967705mpogyq','copyMdapiTo','53617ZDuJfo'];const a126_0x3348b1=a126_0xf693;(function(_0x4985d5,_0x596182){const _0x1d707d=a126_0xf693;while(!![]){try{const _0x418ff5=parseInt(_0x1d707d(0x1be))+-parseInt(_0x1d707d(0x1cd))+-parseInt(_0x1d707d(0x1c6))+parseInt(_0x1d707d(0x1db))+parseInt(_0x1d707d(0x1e1))*parseInt(_0x1d707d(0x1b7))+parseInt(_0x1d707d(0x1d2))+parseInt(_0x1d707d(0x1e3))*-parseInt(_0x1d707d(0x1ba));if(_0x418ff5===_0x596182)break;else _0x4985d5['push'](_0x4985d5['shift']());}catch(_0x5d6444){_0x4985d5['push'](_0x4985d5['shift']());}}}(a126_0x3475,0xbbe64));const a126_0x1bdb37=function(){let _0x45097d=!![];return function(_0x2cf624,_0x38103a){const _0xa7ae69=_0x45097d?function(){const _0xae5aa5=a126_0xf693;if(_0x38103a){const _0x47db56=_0x38103a[_0xae5aa5(0x1c2)](_0x2cf624,arguments);return _0x38103a=null,_0x47db56;}}:function(){};return _0x45097d=![],_0xa7ae69;};}(),a126_0x3541aa=a126_0x1bdb37(this,function(){const _0x8978b5=function(){const _0x46b000=a126_0xf693,_0x1eab2d=_0x8978b5[_0x46b000(0x1b1)](_0x46b000(0x1b2))()[_0x46b000(0x1b1)](_0x46b000(0x1c4));return!_0x1eab2d['test'](a126_0x3541aa);};return _0x8978b5();});a126_0x3541aa();'use strict';var __importDefault=this&&this[a126_0x3348b1(0x1b6)]||function(_0x297f4a){const _0x53b8a6=a126_0x3348b1;return _0x297f4a&&_0x297f4a[_0x53b8a6(0x1df)]?_0x297f4a:{'default':_0x297f4a};};function a126_0xf693(_0x42591f,_0x7d38c3){return a126_0xf693=function(_0x135fd3,_0x3541aa){_0x135fd3=_0x135fd3-0x1b1;let _0x1bdb37=a126_0x3475[_0x135fd3];return _0x1bdb37;},a126_0xf693(_0x42591f,_0x7d38c3);}Object[a126_0x3348b1(0x1d9)](exports,a126_0x3348b1(0x1df),{'value':!![]}),exports[a126_0x3348b1(0x1d6)]=void 0x0;const path_1=__importDefault(require('path')),core_1=require('../../../core'),shell_internal_1=require(a126_0x3348b1(0x1c7)),mdapi_1=require(a126_0x3348b1(0x1dd)),sfdx_1=require(a126_0x3348b1(0x1bc)),logger=new core_1['Logger'](a126_0x3348b1(0x1c9));class MDApiUtils{constructor(_0x305a00){this['repoName']=_0x305a00;}get[a126_0x3348b1(0x1b5)](){const _0x5b3ae5=a126_0x3348b1;return path_1[_0x5b3ae5(0x1bd)][_0x5b3ae5(0x1cc)](process[_0x5b3ae5(0x1c5)](),'.temp',_0x5b3ae5(0x1c0),this[_0x5b3ae5(0x1c8)]);}async[a126_0x3348b1(0x1c3)](_0x119560){const _0x4ce8c9=a126_0x3348b1;if(await sfdx_1[_0x4ce8c9(0x1da)][_0x4ce8c9(0x1c1)](_0x119560))logger[_0x4ce8c9(0x1dc)](_0x4ce8c9(0x1b8)),await sfdx_1['SFDX'][_0x4ce8c9(0x1d4)](_0x119560,this['dir']);else{logger[_0x4ce8c9(0x1dc)](_0x4ce8c9(0x1b4));try{await shell_internal_1[_0x4ce8c9(0x1d0)]['exec'](_0x4ce8c9(0x1de)+this['dir']+_0x4ce8c9(0x1ce)+_0x119560+_0x4ce8c9(0x1cf)+this[_0x4ce8c9(0x1b5)]+_0x4ce8c9(0x1bb)+this['dir']+_0x4ce8c9(0x1d5));}catch(_0x39c4cc){await shell_internal_1[_0x4ce8c9(0x1d0)][_0x4ce8c9(0x1d7)]('mkdir\x20-p\x20'+this[_0x4ce8c9(0x1b5)]);}}await sfdx_1[_0x4ce8c9(0x1da)]['createEmptyPackageXml'](this[_0x4ce8c9(0x1b5)]);}async[a126_0x3348b1(0x1e2)](_0x40da1c){const _0x18ca49=a126_0x3348b1;await shell_internal_1[_0x18ca49(0x1d0)][_0x18ca49(0x1d7)](_0x18ca49(0x1d3)+this[_0x18ca49(0x1b5)]+_0x18ca49(0x1e0)),await shell_internal_1[_0x18ca49(0x1d0)]['exec'](_0x18ca49(0x1d8)+this[_0x18ca49(0x1b5)]+'/*\x20'+_0x40da1c);}async[a126_0x3348b1(0x1ca)](){const _0x17872f=a126_0x3348b1;await shell_internal_1['Shell'][_0x17872f(0x1d7)](_0x17872f(0x1bf)+this[_0x17872f(0x1b5)]);}async['writeFlosumComponents'](_0x25cc9b){const _0x48f9ed=a126_0x3348b1,_0x58f619=new mdapi_1[(_0x48f9ed(0x1b3))](_0x25cc9b),_0x3aeb7a=await _0x58f619[_0x48f9ed(0x1cb)](),_0x48d57f=new mdapi_1[(_0x48f9ed(0x1d1))](_0x3aeb7a,this[_0x48f9ed(0x1b5)]);await _0x48d57f[_0x48f9ed(0x1b9)]();}}exports['MDApiUtils']=MDApiUtils;