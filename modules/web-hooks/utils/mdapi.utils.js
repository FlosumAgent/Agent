const a148_0xf668=['fullDirName','mdapi-utils','exec','/.git','apply','__importDefault','../../salesforce/utils/sfdx.utils','rm\x20-rf\x20','MDApiUtils','start','log','test','copy\x20mdapi\x20to\x20temp\x20dir','repoName','MDApiRemover','119022MVstmF','mdapi','1552444pMqsRB','187150hnpfuU','__esModule','../../internal/shell.internal','/*\x20','constructor','copyMdapiTo','cp\x20-r\x20','MDApiWriter','path','/package.xml','rm\x20-f\x20','22AeMVLm','\x20&&\x20rm\x20-rf\x20','isSFDXProject','dir','SFDX','mkdir\x20-p\x20','cwd','495490alryvW','removeDir','10042ObGSlh','608591mQgrEG','../../parsers/mdapi','932415oZFbko','branchName','default','Shell','defineProperty','../../../core'];const a148_0x5eb7fd=a148_0x2e7c;(function(_0x502542,_0x56351d){const _0x36eae1=a148_0x2e7c;while(!![]){try{const _0x82d0e3=parseInt(_0x36eae1(0x1d4))+-parseInt(_0x36eae1(0x1d1))*parseInt(_0x36eae1(0x1c8))+-parseInt(_0x36eae1(0x1d2))+-parseInt(_0x36eae1(0x1cf))+-parseInt(_0x36eae1(0x1ba))+-parseInt(_0x36eae1(0x1bd))+parseInt(_0x36eae1(0x1bc));if(_0x82d0e3===_0x56351d)break;else _0x502542['push'](_0x502542['shift']());}catch(_0x488f76){_0x502542['push'](_0x502542['shift']());}}}(a148_0xf668,0xd06b2));const a148_0x28eefd=function(){let _0x1f748f=!![];return function(_0x13a0f2,_0x33d80b){const _0x1d0679=_0x1f748f?function(){const _0x195226=a148_0x2e7c;if(_0x33d80b){const _0xdf55b1=_0x33d80b[_0x195226(0x1af)](_0x13a0f2,arguments);return _0x33d80b=null,_0xdf55b1;}}:function(){};return _0x1f748f=![],_0x1d0679;};}(),a148_0x455213=a148_0x28eefd(this,function(){const _0x4bd0d4=function(){const _0x53a49c=a148_0x2e7c,_0x368a68=_0x4bd0d4[_0x53a49c(0x1c1)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x53a49c(0x1c1)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x368a68[_0x53a49c(0x1b6)](a148_0x455213);};return _0x4bd0d4();});a148_0x455213();'use strict';var __importDefault=this&&this[a148_0x5eb7fd(0x1b0)]||function(_0x258486){const _0x42f05c=a148_0x5eb7fd;return _0x258486&&_0x258486[_0x42f05c(0x1be)]?_0x258486:{'default':_0x258486};};function a148_0x2e7c(_0x247ef6,_0x4a6361){return a148_0x2e7c=function(_0x34c7f1,_0x455213){_0x34c7f1=_0x34c7f1-0x1a9;let _0x28eefd=a148_0xf668[_0x34c7f1];return _0x28eefd;},a148_0x2e7c(_0x247ef6,_0x4a6361);}Object[a148_0x5eb7fd(0x1a9)](exports,a148_0x5eb7fd(0x1be),{'value':!![]}),exports[a148_0x5eb7fd(0x1b3)]=void 0x0;const path_1=__importDefault(require(a148_0x5eb7fd(0x1c5))),core_1=require(a148_0x5eb7fd(0x1aa)),shell_internal_1=require(a148_0x5eb7fd(0x1bf)),mdapi_1=require(a148_0x5eb7fd(0x1d3)),remover_1=require('../../parsers/mdapi/remover'),sfdx_utils_1=require(a148_0x5eb7fd(0x1b1)),logger=new core_1['Logger'](a148_0x5eb7fd(0x1ac));class MDApiUtils{constructor(_0x25f0a4,_0x54e2cc){const _0xa83396=a148_0x5eb7fd;this[_0xa83396(0x1b8)]=_0x25f0a4,this[_0xa83396(0x1d5)]=_0x54e2cc;}get['fullDirName'](){const _0x3dfde6=a148_0x5eb7fd;return this['repoName']+'_'+this[_0x3dfde6(0x1d5)];}get[a148_0x5eb7fd(0x1cb)](){const _0x3612e6=a148_0x5eb7fd;return path_1[_0x3612e6(0x1d6)]['join'](process[_0x3612e6(0x1ce)](),'.temp',_0x3612e6(0x1bb),this[_0x3612e6(0x1ab)]);}async['prepareMdapi'](_0x1cd9b1){const _0x55a52b=a148_0x5eb7fd;if(await sfdx_utils_1[_0x55a52b(0x1cc)][_0x55a52b(0x1ca)](_0x1cd9b1))logger[_0x55a52b(0x1b5)]('detected\x20sfdx\x20project\x20convert\x20to\x20mdapi'),await sfdx_utils_1[_0x55a52b(0x1cc)]['sourceToMdapi'](_0x1cd9b1,this[_0x55a52b(0x1cb)]);else{logger[_0x55a52b(0x1b5)](_0x55a52b(0x1b7));try{await shell_internal_1[_0x55a52b(0x1d7)][_0x55a52b(0x1ad)]('mkdir\x20-p\x20'+this[_0x55a52b(0x1cb)]+'\x20&&\x20cp\x20-r\x20'+_0x1cd9b1+_0x55a52b(0x1c0)+this[_0x55a52b(0x1cb)]+_0x55a52b(0x1c9)+this[_0x55a52b(0x1cb)]+_0x55a52b(0x1ae));}catch(_0x489ede){await shell_internal_1[_0x55a52b(0x1d7)][_0x55a52b(0x1ad)](_0x55a52b(0x1cd)+this[_0x55a52b(0x1cb)]);}}await sfdx_utils_1[_0x55a52b(0x1cc)]['createEmptyPackageXml'](this[_0x55a52b(0x1cb)]);}async[a148_0x5eb7fd(0x1c2)](_0x59b72d){const _0x2c329a=a148_0x5eb7fd;await shell_internal_1[_0x2c329a(0x1d7)][_0x2c329a(0x1ad)](_0x2c329a(0x1c7)+this[_0x2c329a(0x1cb)]+_0x2c329a(0x1c6)),await shell_internal_1[_0x2c329a(0x1d7)][_0x2c329a(0x1ad)](_0x2c329a(0x1c3)+this[_0x2c329a(0x1cb)]+'/*\x20'+_0x59b72d);}async[a148_0x5eb7fd(0x1d0)](){const _0x2b5b25=a148_0x5eb7fd;await shell_internal_1[_0x2b5b25(0x1d7)][_0x2b5b25(0x1ad)](_0x2b5b25(0x1b2)+this[_0x2b5b25(0x1cb)]);}async['writeFlosumComponents'](_0x40241b){const _0x2f6ff9=a148_0x5eb7fd,_0x5bf2fa=new mdapi_1[(_0x2f6ff9(0x1c4))](_0x40241b,this[_0x2f6ff9(0x1cb)]);await _0x5bf2fa['start']();}async['removeComponents'](_0x176384){const _0x36f59a=a148_0x5eb7fd,_0x1efd8b=new remover_1[(_0x36f59a(0x1b9))](_0x176384,this[_0x36f59a(0x1cb)]);await _0x1efd8b[_0x36f59a(0x1b4)]();}}exports['MDApiUtils']=MDApiUtils;