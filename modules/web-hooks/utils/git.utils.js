const a149_0x103d=['defineProperty','GitUtils','remote','dir','2aAoMvm','message','85grSnGa','status','push','test','constructor','catch','email','../../internal/shell.internal','Shell','nothing\x20to\x20commit','1186594cFdxOS','apply','removeDir','git','MAX_GIT_STATUS_CHECK','12995lsxiNg','133631BTEabp','exec','1SIaYFR','4072mkQQcV','GIT_STATUS_CHECK_INTERVAL','commit','baseDir','67491SliRyt','clone','__esModule','1470745UwbkGH','sleep','139aMpbeO','name','clearDir','includes','cd\x20','../../internal/git.internal','1558124sTQitb'];const a149_0x279f38=a149_0x51a2;(function(_0x5661e0,_0x25e420){const _0x813328=a149_0x51a2;while(!![]){try{const _0x3a4d7e=parseInt(_0x813328(0x18b))*parseInt(_0x813328(0x179))+parseInt(_0x813328(0x192))+parseInt(_0x813328(0x18e))*parseInt(_0x813328(0x16e))+parseInt(_0x813328(0x18a))*parseInt(_0x813328(0x17b))+parseInt(_0x813328(0x16c))*-parseInt(_0x813328(0x18d))+parseInt(_0x813328(0x174))+-parseInt(_0x813328(0x185));if(_0x3a4d7e===_0x25e420)break;else _0x5661e0['push'](_0x5661e0['shift']());}catch(_0x2427e1){_0x5661e0['push'](_0x5661e0['shift']());}}}(a149_0x103d,0xdd389));const a149_0x22a1a1=function(){let _0x27ee5e=!![];return function(_0xbf3a2f,_0x488062){const _0x45009b=_0x27ee5e?function(){const _0x158033=a149_0x51a2;if(_0x488062){const _0x2d72dc=_0x488062[_0x158033(0x186)](_0xbf3a2f,arguments);return _0x488062=null,_0x2d72dc;}}:function(){};return _0x27ee5e=![],_0x45009b;};}(),a149_0xe3b6e=a149_0x22a1a1(this,function(){const _0x2c5ec7=function(){const _0x5b19bc=a149_0x51a2,_0x1faae1=_0x2c5ec7[_0x5b19bc(0x17f)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x1faae1[_0x5b19bc(0x17e)](a149_0xe3b6e);};return _0x2c5ec7();});function a149_0x51a2(_0x4fd5b2,_0x1340c6){return a149_0x51a2=function(_0xd11626,_0xe3b6e){_0xd11626=_0xd11626-0x16b;let _0x22a1a1=a149_0x103d[_0xd11626];return _0x22a1a1;},a149_0x51a2(_0x4fd5b2,_0x1340c6);}a149_0xe3b6e();'use strict';Object[a149_0x279f38(0x175)](exports,a149_0x279f38(0x16b),{'value':!![]}),exports[a149_0x279f38(0x176)]=void 0x0;const fs_internal_1=require('../../internal/fs.internal'),git_internal_1=require(a149_0x279f38(0x173)),shell_internal_1=require(a149_0x279f38(0x182)),utils_1=require('../../shared/utils');class GitUtils{constructor(_0x58a400){const _0x2504e6=a149_0x279f38;this[_0x2504e6(0x177)]=_0x58a400,this[_0x2504e6(0x189)]=0xa,this[_0x2504e6(0x18f)]=0xbb8;}get[a149_0x279f38(0x178)](){const _0x42d7ee=a149_0x279f38;return this[_0x42d7ee(0x188)][_0x42d7ee(0x191)];}async[a149_0x279f38(0x193)](_0x28f08c,_0xbf5eaa){const _0x22fccd=a149_0x279f38;this[_0x22fccd(0x188)]=await git_internal_1['Git'][_0x22fccd(0x193)](this[_0x22fccd(0x177)],_0xbf5eaa+'_'+_0x28f08c,_0x28f08c);}async['commitAndPush'](_0x2f37d9,_0x262c81,_0x33f624){const _0x5afc15=a149_0x279f38;await this[_0x5afc15(0x188)]['add']('.');const _0xb3cde2=await this[_0x5afc15(0x188)][_0x5afc15(0x17c)]()[_0x5afc15(0x180)](_0x3a91fa=>_0x3a91fa['message']||_0x3a91fa);if(_0xb3cde2[_0x5afc15(0x171)](_0x5afc15(0x184)))return;await this[_0x5afc15(0x188)]['setCredentials'](_0x262c81[_0x5afc15(0x16f)],_0x262c81[_0x5afc15(0x181)]);try{await this['git'][_0x5afc15(0x190)](_0x2f37d9);}catch(_0x20456c){let _0x27e558=0x0;do{_0x27e558++;const _0xcc6a74=await this[_0x5afc15(0x188)]['status']()[_0x5afc15(0x180)](_0x24cbc6=>_0x24cbc6[_0x5afc15(0x17a)]||_0x24cbc6);if(_0xcc6a74[_0x5afc15(0x171)]('nothing\x20to\x20commit')){_0x27e558=0x0;break;}await utils_1[_0x5afc15(0x16d)](this[_0x5afc15(0x18f)]);}while(_0x27e558<this['MAX_GIT_STATUS_CHECK']);if(_0x27e558===this[_0x5afc15(0x189)])throw _0x20456c;}await this[_0x5afc15(0x188)][_0x5afc15(0x17d)](_0x33f624);}async[a149_0x279f38(0x170)](){const _0x4154ff=a149_0x279f38;await shell_internal_1[_0x4154ff(0x183)][_0x4154ff(0x18c)](_0x4154ff(0x172)+this[_0x4154ff(0x178)]+'\x20&&\x20git\x20rm\x20-rf\x20.\x20&&\x20git\x20clean\x20.\x20-fxd')[_0x4154ff(0x180)](()=>void 0x0);}async[a149_0x279f38(0x187)](){const _0x22e421=a149_0x279f38;await fs_internal_1['FS'][_0x22e421(0x187)](this[_0x22e421(0x178)]);}}exports[a149_0x279f38(0x176)]=GitUtils;