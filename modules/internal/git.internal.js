const a75_0x5216=['\x20&&\x20git\x20checkout\x20--orphan\x20','name','agent@flosum.com','268207jePjsy','_repoPath','DEFAULT_CLONE_PATH','rm\x20-rf\x20','599LkKHeG','pull\x20request','path','constructor','NO_FLAG_BRANCHES','catch','\x20&&\x20git\x20add\x20','\x20&&\x20git\x20commit\x20-m\x20\x22repository\x20init\x22\x20--allow-empty','clone','cd\x20','gitUrl','Git','includes','\x20&&\x20git\x20init','push','test','Shell','status','apply','get','.temp','12061EbQKue','git\x20clone\x20-b\x20','://','\x20--single-branch\x20','master','\x20&&\x20git\x20commit\x20-m\x20\x22','baseDir','92125LQdOvo','203625zjJvUp','commit','return\x20/\x22\x20+\x20this\x20+\x20\x22/','__esModule','175147HqZvyh','git\x20clone\x20','getProtocol','default','./shell.internal','\x20&&\x20git\x20config\x20--local\x20user.name\x20','792746SZCKSs','\x20--quiet','mkdir\x20-p\x20','exec','git','AuthSettingsService','6wZJVLy','add','../shared/utils','\x20&&\x20git\x20status','merge','replace','main','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','529nPNRvk','Switched','\x20&&\x20git\x20remote\x20add\x20origin\x20','join'];const a75_0x1d9b6d=a75_0x1aa2;(function(_0x5b9150,_0x378570){const _0x5b75ea=a75_0x1aa2;while(!![]){try{const _0x44e16d=parseInt(_0x5b75ea(0x199))+-parseInt(_0x5b75ea(0x194))+-parseInt(_0x5b75ea(0x1b4))+-parseInt(_0x5b75ea(0x1ad))*parseInt(_0x5b75ea(0x1b8))+parseInt(_0x5b75ea(0x1a5))*parseInt(_0x5b75ea(0x1cd))+-parseInt(_0x5b75ea(0x195))+parseInt(_0x5b75ea(0x19f));if(_0x44e16d===_0x378570)break;else _0x5b9150['push'](_0x5b9150['shift']());}catch(_0x338978){_0x5b9150['push'](_0x5b9150['shift']());}}}(a75_0x5216,0x26ec7));const a75_0x374f09=function(){let _0xe73bdf=!![];return function(_0x315c04,_0x51c28f){const _0x3448d1=_0xe73bdf?function(){const _0x21c1c7=a75_0x1aa2;if(_0x51c28f){const _0x515014=_0x51c28f[_0x21c1c7(0x1ca)](_0x315c04,arguments);return _0x51c28f=null,_0x515014;}}:function(){};return _0xe73bdf=![],_0x3448d1;};}(),a75_0x2f93f4=a75_0x374f09(this,function(){const _0x197e2a=function(){const _0x42eef1=a75_0x1aa2,_0x23d899=_0x197e2a[_0x42eef1(0x1bb)](_0x42eef1(0x197))()[_0x42eef1(0x1bb)](_0x42eef1(0x1ac));return!_0x23d899[_0x42eef1(0x1c7)](a75_0x2f93f4);};return _0x197e2a();});a75_0x2f93f4();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x24b12a){const _0x2f2ccc=a75_0x1aa2;return _0x24b12a&&_0x24b12a[_0x2f2ccc(0x198)]?_0x24b12a:{'default':_0x24b12a};};Object['defineProperty'](exports,a75_0x1d9b6d(0x198),{'value':!![]}),exports[a75_0x1d9b6d(0x1c3)]=void 0x0;function a75_0x1aa2(_0x302af7,_0x17f5c4){return a75_0x1aa2=function(_0x2344da,_0x2f93f4){_0x2344da=_0x2344da-0x193;let _0x374f09=a75_0x5216[_0x2344da];return _0x374f09;},a75_0x1aa2(_0x302af7,_0x17f5c4);}const path_1=__importDefault(require(a75_0x1d9b6d(0x1ba))),typedi_1=__importDefault(require('typedi')),auth_settings_service_1=require('../shared/services/auth-settings.service'),utils_1=require(a75_0x1d9b6d(0x1a7)),shell_internal_1=require(a75_0x1d9b6d(0x19d));class Git{constructor(_0x283cb8){this['_repoPath']=_0x283cb8;}get[a75_0x1d9b6d(0x193)](){const _0x44fb63=a75_0x1d9b6d;return this[_0x44fb63(0x1b5)];}async['setCredentials'](_0x4e52ef,_0x45ab24){const _0x34ee80=a75_0x1d9b6d;await shell_internal_1[_0x34ee80(0x1c8)]['exec'](_0x34ee80(0x1c1)+this[_0x34ee80(0x1b5)]+_0x34ee80(0x19e)+_0x4e52ef+'\x20&&\x20git\x20config\x20--local\x20user.email\x20'+_0x45ab24);}async[a75_0x1d9b6d(0x1a6)](..._0x3e2f43){const _0x508bcb=a75_0x1d9b6d;await shell_internal_1['Shell'][_0x508bcb(0x1a2)](_0x508bcb(0x1c1)+this[_0x508bcb(0x1b5)]+_0x508bcb(0x1be)+_0x3e2f43['join']('\x20'));}async[a75_0x1d9b6d(0x1c9)](){const _0xa3a483=a75_0x1d9b6d;return shell_internal_1[_0xa3a483(0x1c8)][_0xa3a483(0x1a2)]('cd\x20'+this[_0xa3a483(0x1b5)]+_0xa3a483(0x1a8));}async[a75_0x1d9b6d(0x196)](_0xaf681c){const _0x30cab7=a75_0x1d9b6d;await shell_internal_1[_0x30cab7(0x1c8)][_0x30cab7(0x1a2)](_0x30cab7(0x1c1)+this[_0x30cab7(0x1b5)]+_0x30cab7(0x1d2)+_0xaf681c+'\x22');}async[a75_0x1d9b6d(0x1c6)](_0x58fb23){const _0x227d65=a75_0x1d9b6d;await shell_internal_1['Shell'][_0x227d65(0x1a2)](_0x227d65(0x1c1)+this['_repoPath']+'\x20&&\x20git\x20push\x20origin\x20'+_0x58fb23+_0x227d65(0x1a0))[_0x227d65(0x1bd)](_0x1e5e12=>{const _0x4d0b60=_0x227d65;if(_0x1e5e12[_0x4d0b60(0x1c4)](_0x4d0b60(0x1a9))||_0x1e5e12[_0x4d0b60(0x1c4)](_0x4d0b60(0x1b9)))return!![];throw _0x1e5e12;});}static async[a75_0x1d9b6d(0x1c0)](_0x40c901,_0x49d510,_0x31860b){const _0x36f253=a75_0x1d9b6d,_0x262ea0=path_1[_0x36f253(0x19c)][_0x36f253(0x1b0)](this[_0x36f253(0x1b6)],_0x49d510),_0x5d5fa3=new Git(_0x262ea0);return await shell_internal_1[_0x36f253(0x1c8)][_0x36f253(0x1a2)](_0x36f253(0x1b7)+_0x262ea0),_0x31860b&&this[_0x36f253(0x1bc)][_0x36f253(0x1c4)](_0x31860b)?await shell_internal_1[_0x36f253(0x1c8)]['exec'](_0x36f253(0x19a)+_0x40c901+'\x20'+_0x262ea0)[_0x36f253(0x1bd)](()=>void 0x0):await shell_internal_1[_0x36f253(0x1c8)]['exec'](_0x36f253(0x1ce)+_0x31860b+_0x36f253(0x1d0)+_0x40c901+'\x20'+_0x262ea0)[_0x36f253(0x1bd)](()=>void 0x0),_0x5d5fa3;}static async['createEmptyBranch'](_0x3add1e,_0x57ad72){const _0x54d6c2=a75_0x1d9b6d,{gitCredentials:_0x2b8517}=typedi_1[_0x54d6c2(0x19c)][_0x54d6c2(0x1cb)](auth_settings_service_1[_0x54d6c2(0x1a4)]),_0x17fe3a=_0x3add1e[_0x54d6c2(0x1c2)][_0x54d6c2(0x1aa)](/http(s)?\:\/\/(.+@)?/,utils_1[_0x54d6c2(0x19b)](_0x3add1e[_0x54d6c2(0x1c2)])+_0x54d6c2(0x1cf)+_0x2b8517+'@'),_0x4989f0=path_1[_0x54d6c2(0x19c)]['join'](this[_0x54d6c2(0x1b6)],_0x3add1e[_0x54d6c2(0x1b2)]);await shell_internal_1['Shell'][_0x54d6c2(0x1a2)]('rm\x20-rf\x20'+_0x4989f0),await shell_internal_1[_0x54d6c2(0x1c8)]['exec'](_0x54d6c2(0x1a1)+_0x4989f0);const _0x5ac2c9=new Git(_0x4989f0);await shell_internal_1[_0x54d6c2(0x1c8)][_0x54d6c2(0x1a2)]('cd\x20'+_0x5ac2c9[_0x54d6c2(0x193)]+_0x54d6c2(0x1c5)),await shell_internal_1['Shell'][_0x54d6c2(0x1a2)](_0x54d6c2(0x1c1)+_0x5ac2c9[_0x54d6c2(0x193)]+_0x54d6c2(0x1af)+_0x17fe3a),await _0x5ac2c9['setCredentials']('flosum-agent',_0x54d6c2(0x1b3)),_0x57ad72&&await shell_internal_1[_0x54d6c2(0x1c8)]['exec'](_0x54d6c2(0x1c1)+_0x5ac2c9[_0x54d6c2(0x193)]+_0x54d6c2(0x1b1)+_0x57ad72)[_0x54d6c2(0x1bd)](_0x48bc19=>{const _0x120563=_0x54d6c2;if(_0x48bc19[_0x120563(0x1c4)](_0x120563(0x1ae)))return!![];throw _0x48bc19;}),await shell_internal_1[_0x54d6c2(0x1c8)][_0x54d6c2(0x1a2)](_0x54d6c2(0x1c1)+_0x5ac2c9['baseDir']+_0x54d6c2(0x1bf)),await _0x5ac2c9[_0x54d6c2(0x1c6)](_0x57ad72),await shell_internal_1['Shell'][_0x54d6c2(0x1a2)](_0x54d6c2(0x1b7)+_0x5ac2c9[_0x54d6c2(0x193)]);}}exports['Git']=Git,Git[a75_0x1d9b6d(0x1bc)]=[a75_0x1d9b6d(0x1d1),a75_0x1d9b6d(0x1ab)],Git[a75_0x1d9b6d(0x1b6)]=path_1[a75_0x1d9b6d(0x19c)]['join'](process['cwd'](),a75_0x1d9b6d(0x1cc),a75_0x1d9b6d(0x1a3));