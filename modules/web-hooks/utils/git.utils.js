const a152_0x2f255c=a152_0x4a57;(function(_0x52db4e,_0x35c62e){const _0xd7fb61=a152_0x4a57,_0x4535e5=_0x52db4e();while(!![]){try{const _0x49b9e0=parseInt(_0xd7fb61(0x16b))/0x1*(parseInt(_0xd7fb61(0x15d))/0x2)+parseInt(_0xd7fb61(0x159))/0x3*(parseInt(_0xd7fb61(0x16a))/0x4)+parseInt(_0xd7fb61(0x144))/0x5+-parseInt(_0xd7fb61(0x15b))/0x6*(-parseInt(_0xd7fb61(0x147))/0x7)+-parseInt(_0xd7fb61(0x166))/0x8*(parseInt(_0xd7fb61(0x146))/0x9)+-parseInt(_0xd7fb61(0x169))/0xa*(parseInt(_0xd7fb61(0x158))/0xb)+-parseInt(_0xd7fb61(0x14e))/0xc*(parseInt(_0xd7fb61(0x14a))/0xd);if(_0x49b9e0===_0x35c62e)break;else _0x4535e5['push'](_0x4535e5['shift']());}catch(_0x447ff9){_0x4535e5['push'](_0x4535e5['shift']());}}}(a152_0x3ec8,0xbdfdd));const a152_0x3f7092=function(){let _0x3dc050=!![];return function(_0x19b56e,_0x3e1170){const _0x29a65d=_0x3dc050?function(){const _0x43a61f=a152_0x4a57;if(_0x3e1170){const _0x1b1e9e=_0x3e1170[_0x43a61f(0x155)](_0x19b56e,arguments);return _0x3e1170=null,_0x1b1e9e;}}:function(){};return _0x3dc050=![],_0x29a65d;};}(),a152_0xbb980a=a152_0x3f7092(this,function(){const _0x394e6f=a152_0x4a57;return a152_0xbb980a['toString']()['search'](_0x394e6f(0x168))[_0x394e6f(0x164)]()[_0x394e6f(0x153)](a152_0xbb980a)['search'](_0x394e6f(0x168));});a152_0xbb980a();function a152_0x3ec8(){const _0x337f59=['apply','name','exec','616847DIUMFg','3teXiHT','status','7119318aCyzgO','sleep','860596lsrzfI','Shell','MAX_GIT_STATUS_CHECK','push','GIT_STATUS_CHECK_INTERVAL','nothing\x20to\x20commit','defineProperty','toString','includes','4771512NsoTCV','email','(((.+)+)+)+$','230FtypOy','2996828aWqqBr','2oeJIIn','GitUtils','../../shared/utils','4257165mVvELq','commit','18hOkaec','7mwKJQi','\x20&&\x20git\x20rm\x20-rf\x20.\x20&&\x20git\x20clean\x20.\x20-fxd','clone','1235OwjfsD','baseDir','../../internal/git.internal','dir','48876ujATjd','git','catch','message','remote','constructor','removeDir'];a152_0x3ec8=function(){return _0x337f59;};return a152_0x3ec8();}'use strict';Object[a152_0x2f255c(0x163)](exports,'__esModule',{'value':!![]}),exports[a152_0x2f255c(0x142)]=void 0x0;function a152_0x4a57(_0x4fc1a2,_0x2fa65f){const _0x26c8cb=a152_0x3ec8();return a152_0x4a57=function(_0xbb980a,_0x3f7092){_0xbb980a=_0xbb980a-0x142;let _0x3ec818=_0x26c8cb[_0xbb980a];return _0x3ec818;},a152_0x4a57(_0x4fc1a2,_0x2fa65f);}const fs_internal_1=require('../../internal/fs.internal'),git_internal_1=require(a152_0x2f255c(0x14c)),shell_internal_1=require('../../internal/shell.internal'),utils_1=require(a152_0x2f255c(0x143));class GitUtils{constructor(_0x4126d6){const _0x13d88f=a152_0x2f255c;this[_0x13d88f(0x152)]=_0x4126d6,this[_0x13d88f(0x15f)]=0xa,this[_0x13d88f(0x161)]=0xbb8;}get[a152_0x2f255c(0x14d)](){const _0x28edd5=a152_0x2f255c;return this['git'][_0x28edd5(0x14b)];}async[a152_0x2f255c(0x149)](_0xcaebc9,_0x20b312){const _0xb95705=a152_0x2f255c;this[_0xb95705(0x14f)]=await git_internal_1['Git'][_0xb95705(0x149)](this['remote'],_0x20b312+'_'+_0xcaebc9,_0xcaebc9);}async['commitAndPush'](_0x51d615,_0x5e01d3,_0x3a4b17){const _0x4fff12=a152_0x2f255c;await this[_0x4fff12(0x14f)]['add']('.');const _0x4f4e67=await this[_0x4fff12(0x14f)][_0x4fff12(0x15a)]()[_0x4fff12(0x150)](_0x44a2bc=>_0x44a2bc['message']||_0x44a2bc);if(_0x4f4e67['includes']('nothing\x20to\x20commit'))return;await this[_0x4fff12(0x14f)]['setCredentials'](_0x5e01d3[_0x4fff12(0x156)],_0x5e01d3[_0x4fff12(0x167)]);try{await this[_0x4fff12(0x14f)][_0x4fff12(0x145)](_0x51d615);}catch(_0x5c58bb){let _0x2cad6b=0x0;do{_0x2cad6b++;const _0x162786=await this[_0x4fff12(0x14f)]['status']()[_0x4fff12(0x150)](_0x1a18f3=>_0x1a18f3[_0x4fff12(0x151)]||_0x1a18f3);if(_0x162786[_0x4fff12(0x165)](_0x4fff12(0x162))){_0x2cad6b=0x0;break;}await(0x0,utils_1[_0x4fff12(0x15c)])(this[_0x4fff12(0x161)]);}while(_0x2cad6b<this[_0x4fff12(0x15f)]);if(_0x2cad6b===this[_0x4fff12(0x15f)])throw _0x5c58bb;}await this[_0x4fff12(0x14f)][_0x4fff12(0x160)](_0x3a4b17);}async['clearDir'](){const _0xd9ea1b=a152_0x2f255c;await shell_internal_1[_0xd9ea1b(0x15e)][_0xd9ea1b(0x157)]('cd\x20'+this[_0xd9ea1b(0x14d)]+_0xd9ea1b(0x148))[_0xd9ea1b(0x150)](()=>void 0x0);}async['removeDir'](){const _0x1ffa6c=a152_0x2f255c;await fs_internal_1['FS'][_0x1ffa6c(0x154)](this[_0x1ffa6c(0x14d)]);}}exports[a152_0x2f255c(0x142)]=GitUtils;