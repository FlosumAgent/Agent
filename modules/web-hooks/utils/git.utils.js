const a192_0x587f58=a192_0x1fe4;function a192_0x1fe4(_0x53b598,_0x3a547d){const _0x20ba60=a192_0x5a94();return a192_0x1fe4=function(_0x1688b3,_0xe3108c){_0x1688b3=_0x1688b3-0x92;let _0x5a9497=_0x20ba60[_0x1688b3];return _0x5a9497;},a192_0x1fe4(_0x53b598,_0x3a547d);}(function(_0x53fa83,_0x3d7ec1){const _0x25b286=a192_0x1fe4,_0x5e3095=_0x53fa83();while(!![]){try{const _0x263e95=-parseInt(_0x25b286(0xb7))/0x1+parseInt(_0x25b286(0x9e))/0x2*(parseInt(_0x25b286(0xab))/0x3)+parseInt(_0x25b286(0x94))/0x4*(-parseInt(_0x25b286(0x92))/0x5)+-parseInt(_0x25b286(0xb2))/0x6+parseInt(_0x25b286(0x93))/0x7*(parseInt(_0x25b286(0x9b))/0x8)+-parseInt(_0x25b286(0xa7))/0x9+parseInt(_0x25b286(0xba))/0xa;if(_0x263e95===_0x3d7ec1)break;else _0x5e3095['push'](_0x5e3095['shift']());}catch(_0xacd0a1){_0x5e3095['push'](_0x5e3095['shift']());}}}(a192_0x5a94,0x1ba59));const a192_0xe3108c=function(){let _0x18d96e=!![];return function(_0x5b7c00,_0x4deaf7){const _0x2572bb=_0x18d96e?function(){if(_0x4deaf7){const _0x128e1f=_0x4deaf7['apply'](_0x5b7c00,arguments);return _0x4deaf7=null,_0x128e1f;}}:function(){};return _0x18d96e=![],_0x2572bb;};}(),a192_0x1688b3=a192_0xe3108c(this,function(){const _0x31218c=a192_0x1fe4;return a192_0x1688b3[_0x31218c(0xa3)]()[_0x31218c(0x9c)](_0x31218c(0xbf))[_0x31218c(0xa3)]()[_0x31218c(0xa6)](a192_0x1688b3)['search']('(((.+)+)+)+$');});a192_0x1688b3();'use strict';var __importDefault=this&&this[a192_0x587f58(0xad)]||function(_0x1027fb){const _0x4e2d25=a192_0x587f58;return _0x1027fb&&_0x1027fb[_0x4e2d25(0xb4)]?_0x1027fb:{'default':_0x1027fb};};Object['defineProperty'](exports,a192_0x587f58(0xb4),{'value':!![]}),exports[a192_0x587f58(0x99)]=void 0x0;const fs_internal_1=require(a192_0x587f58(0xbc)),git_internal_1=require(a192_0x587f58(0xb9)),shell_internal_1=require(a192_0x587f58(0xbb)),utils_1=require('../../shared/utils'),shortid_1=__importDefault(require('shortid'));class GitUtils{constructor(_0x2d486a){const _0x2a4f90=a192_0x587f58;this['remote']=_0x2d486a,this[_0x2a4f90(0x98)]=0xa,this[_0x2a4f90(0xb3)]=0xbb8,this[_0x2a4f90(0xa0)]=shortid_1[_0x2a4f90(0xb5)]();}get[a192_0x587f58(0x9f)](){const _0x16e4f4=a192_0x587f58;return this[_0x16e4f4(0xaf)]['baseDir'];}async[a192_0x587f58(0x97)](_0x4010d6,_0x45e1a7){const _0x55f0ff=a192_0x587f58;this[_0x55f0ff(0xaf)]=await git_internal_1[_0x55f0ff(0xb1)][_0x55f0ff(0x97)](this['remote'],_0x45e1a7+'_'+_0x4010d6+'_'+this['uniqueId'],_0x4010d6);}async[a192_0x587f58(0x9a)](_0x560ef8){const _0x2363be=a192_0x587f58;await this['git'][_0x2363be(0xbd)](_0x560ef8);}[a192_0x587f58(0xa9)](){const _0x25e0e3=a192_0x587f58;return this[_0x25e0e3(0xaf)]['getCurrentHash']();}[a192_0x587f58(0x96)](_0x5e0dd8){const _0x338345=a192_0x587f58;return this[_0x338345(0xaf)]['describeCommit'](_0x5e0dd8);}async[a192_0x587f58(0x95)](_0x43c87d,_0x34af5d,_0x38d4fa){const _0x2f60e6=a192_0x587f58;await this['git'][_0x2f60e6(0xae)]('.');const _0x252d9c=await this[_0x2f60e6(0xaf)][_0x2f60e6(0xb0)]()[_0x2f60e6(0x9d)](_0x288ead=>_0x288ead[_0x2f60e6(0xbe)]||_0x288ead);if(_0x252d9c[_0x2f60e6(0xc1)](_0x2f60e6(0xa1)))return;await this[_0x2f60e6(0xaf)][_0x2f60e6(0xa4)](_0x34af5d[_0x2f60e6(0xb8)],_0x34af5d['email']);try{await this[_0x2f60e6(0xaf)][_0x2f60e6(0xa2)](_0x43c87d);}catch(_0x540350){let _0x5a3d9b=0x0;do{_0x5a3d9b++;const _0x162840=await this[_0x2f60e6(0xaf)][_0x2f60e6(0xb0)]()[_0x2f60e6(0x9d)](_0x39640d=>_0x39640d[_0x2f60e6(0xbe)]||_0x39640d);if(_0x162840[_0x2f60e6(0xc1)](_0x2f60e6(0xa1))){_0x5a3d9b=0x0;break;}await utils_1[_0x2f60e6(0xa5)](this['GIT_STATUS_CHECK_INTERVAL']);}while(_0x5a3d9b<this[_0x2f60e6(0x98)]);if(_0x5a3d9b===this[_0x2f60e6(0x98)])throw _0x540350;}await this[_0x2f60e6(0xaf)][_0x2f60e6(0xb6)](_0x38d4fa);}async[a192_0x587f58(0xc0)](){const _0xa614d4=a192_0x587f58;await shell_internal_1[_0xa614d4(0xa8)]['exec'](_0xa614d4(0xac)+this[_0xa614d4(0x9f)]+_0xa614d4(0xaa))[_0xa614d4(0x9d)](()=>void 0x0);}async['removeDir'](){await fs_internal_1['FS']['removeDir'](this['dir']);}}function a192_0x5a94(){const _0xba988d=['includes','5tNPnlL','482412beXdqy','305080SZCsAJ','commitAndPush','describeCommit','clone','MAX_GIT_STATUS_CHECK','GitUtils','checkoutTo','8aWpcWW','search','catch','300028zXJoRk','dir','uniqueId','nothing\x20to\x20commit','commit','toString','setCredentials','sleep','constructor','1419003BBTtWT','Shell','getCurrentHash','\x20&&\x20git\x20rm\x20-rf\x20.\x20&&\x20git\x20clean\x20.\x20-fxd','3RxuWYr','cd\x20','__importDefault','add','git','status','Git','1231620gcvNCY','GIT_STATUS_CHECK_INTERVAL','__esModule','default','push','23624ZriSqs','name','../../internal/git.internal','3571420vqtiNl','../../internal/shell.internal','../../internal/fs.internal','checkout','message','(((.+)+)+)+$','clearDir'];a192_0x5a94=function(){return _0xba988d;};return a192_0x5a94();}exports['GitUtils']=GitUtils;