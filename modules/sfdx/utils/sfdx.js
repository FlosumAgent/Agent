const a98_0x1777=['createEmptyPackageXml','26sOkqOb','<Package\x20xmlns=\x22http://soap.sforce.com/2006/04/metadata\x22><version>52.0</version></Package>','1wsLthp','writeFile','You\x20acknowledge\x20and\x20agree\x20that\x20the\x20CLI\x20tool\x20','constructor','__esModule','force-app','9134RTAoIX','cd\x20','goto\x20%s\x20folder\x20and\x20convert\x20mdapi\x20from\x20%s','create\x20empty\x20sfdx-project.json\x20at\x20%s','../../../core','createEmptyProject','\x20&&\x20sfdx\x20force:project:create\x20-t\x20empty\x20-n\x20','sfdx-project.json','10pUXpqH','../../internal/shell.internal','default','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','\x20&&\x20sfdx\x20force:mdapi:convert\x20-r\x20','return\x20/\x22\x20+\x20this\x20+\x20\x22/','219395UARDjc','log','149183iSWMfy','54713dofsyv','1iqwqKR','SFDX','__importDefault','14jkWRtZ','1KlGLUF','12697BZmkib','Shell','2401VJkRSx','exec','catch','join','path','1313dhUVAB'];const a98_0x4f66dd=a98_0x5133;(function(_0x34249d,_0x5f0fb0){const _0x441524=a98_0x5133;while(!![]){try{const _0xb5b390=-parseInt(_0x441524(0x17d))*parseInt(_0x441524(0x178))+-parseInt(_0x441524(0x174))+-parseInt(_0x441524(0x184))*-parseInt(_0x441524(0x17b))+parseInt(_0x441524(0x18e))*-parseInt(_0x441524(0x188))+-parseInt(_0x441524(0x17c))*parseInt(_0x441524(0x176))+-parseInt(_0x441524(0x17f))*parseInt(_0x441524(0x186))+-parseInt(_0x441524(0x196))*-parseInt(_0x441524(0x177));if(_0xb5b390===_0x5f0fb0)break;else _0x34249d['push'](_0x34249d['shift']());}catch(_0x370286){_0x34249d['push'](_0x34249d['shift']());}}}(a98_0x1777,0x1b825));const a98_0x42ce3d=function(){let _0x3a9510=!![];return function(_0x2b0882,_0x3f4d02){const _0x356222=_0x3a9510?function(){if(_0x3f4d02){const _0x719d0=_0x3f4d02['apply'](_0x2b0882,arguments);return _0x3f4d02=null,_0x719d0;}}:function(){};return _0x3a9510=![],_0x356222;};}(),a98_0x5ed9a6=a98_0x42ce3d(this,function(){const _0x2690a9=function(){const _0x231216=a98_0x5133,_0x3aa248=_0x2690a9['constructor'](_0x231216(0x173))()[_0x231216(0x18b)](_0x231216(0x199));return!_0x3aa248['test'](a98_0x5ed9a6);};return _0x2690a9();});a98_0x5ed9a6();'use strict';var __importDefault=this&&this[a98_0x4f66dd(0x17a)]||function(_0x5b3699){const _0x15115e=a98_0x4f66dd;return _0x5b3699&&_0x5b3699[_0x15115e(0x18c)]?_0x5b3699:{'default':_0x5b3699};};Object['defineProperty'](exports,a98_0x4f66dd(0x18c),{'value':!![]}),exports[a98_0x4f66dd(0x179)]=void 0x0;function a98_0x5133(_0x332f71,_0x2e9731){return a98_0x5133=function(_0xd8206a,_0x5ed9a6){_0xd8206a=_0xd8206a-0x173;let _0x42ce3d=a98_0x1777[_0xd8206a];return _0x42ce3d;},a98_0x5133(_0x332f71,_0x2e9731);}const core_1=require(a98_0x4f66dd(0x192)),fs_internal_1=require('../../internal/fs.internal'),shell_internal_1=require(a98_0x4f66dd(0x197)),path_1=__importDefault(require(a98_0x4f66dd(0x183))),logger=new core_1['Logger']('sfdx');class SFDX{static async['mdapiToSource'](_0x52e643,_0x57d351){const _0xf26a73=a98_0x4f66dd;logger[_0xf26a73(0x175)](_0xf26a73(0x190),_0x57d351,_0x52e643),await shell_internal_1['Shell'][_0xf26a73(0x180)]('cd\x20'+_0x57d351+_0xf26a73(0x19a)+_0x52e643)[_0xf26a73(0x181)](_0x4994f6=>{const _0x42ebef=_0xf26a73,_0x19c88f=_0x4994f6['message']||_0x4994f6;if(_0x19c88f['includes'](_0x42ebef(0x18a)))return;throw _0x4994f6;});}static async[a98_0x4f66dd(0x193)](_0x3ee571,_0x328985){const _0x2b38ce=a98_0x4f66dd;await shell_internal_1[_0x2b38ce(0x17e)][_0x2b38ce(0x180)](_0x2b38ce(0x18f)+_0x3ee571+_0x2b38ce(0x194)+_0x328985);}static async[a98_0x4f66dd(0x185)](_0x24d631){const _0x548cd9=a98_0x4f66dd,_0x3ceae7=path_1[_0x548cd9(0x198)]['join'](_0x24d631,'package.xml');logger[_0x548cd9(0x175)]('create\x20empty\x20package.xml\x20at\x20%s',_0x3ceae7),await fs_internal_1['FS'][_0x548cd9(0x189)](_0x3ceae7,_0x548cd9(0x187));}static async['createEmptyProjectJson'](_0x5e3a21){const _0x12674c=a98_0x4f66dd,_0x1e6850=path_1[_0x12674c(0x198)][_0x12674c(0x182)](_0x5e3a21,_0x12674c(0x195));logger[_0x12674c(0x175)](_0x12674c(0x191),_0x1e6850),await fs_internal_1['FS']['writeFile'](_0x1e6850,JSON['stringify']({'packageDirectories':[{'path':_0x12674c(0x18d),'default':!![]}]}));}}exports[a98_0x4f66dd(0x179)]=SFDX;