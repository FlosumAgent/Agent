const a149_0x42c0=['2555465PjGlts','sleep','remote','../../internal/shell.internal','\x20&&\x20git\x20rm\x20-rf\x20.\x20&&\x20git\x20clean\x20.\x20-fxd','clone','87529BepGiT','570263WCQMZa','1pqnInQ','catch','constructor','88HosNFd','includes','GIT_STATUS_CHECK_INTERVAL','apply','../../shared/utils','1243360QFWIQh','27yZmNmF','return\x20/\x22\x20+\x20this\x20+\x20\x22/','12ocNDZG','1245485McYELE','1GCwKTm','Git','status','name','cd\x20','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','../../internal/fs.internal','email','16417BMAyzy','GitUtils','dir','../../internal/git.internal','baseDir','commit','defineProperty','nothing\x20to\x20commit','git','message','5126yqnyAp'];const a149_0x2ba9ed=a149_0x3256;function a149_0x3256(_0x6b0c2,_0xd6673b){return a149_0x3256=function(_0x1f9d2e,_0x49dbdf){_0x1f9d2e=_0x1f9d2e-0x7d;let _0xa0f44=a149_0x42c0[_0x1f9d2e];return _0xa0f44;},a149_0x3256(_0x6b0c2,_0xd6673b);}(function(_0x120c74,_0x5835dd){const _0x272dc7=a149_0x3256;while(!![]){try{const _0x7748f9=-parseInt(_0x272dc7(0x83))*parseInt(_0x272dc7(0x95))+parseInt(_0x272dc7(0x89))*parseInt(_0x272dc7(0x9f))+parseInt(_0x272dc7(0x80))*parseInt(_0x272dc7(0x7f))+-parseInt(_0x272dc7(0x8c))+-parseInt(_0x272dc7(0x8d))*-parseInt(_0x272dc7(0x88))+-parseInt(_0x272dc7(0x7e))*parseInt(_0x272dc7(0x8b))+parseInt(_0x272dc7(0xa0));if(_0x7748f9===_0x5835dd)break;else _0x120c74['push'](_0x120c74['shift']());}catch(_0x35e5b1){_0x120c74['push'](_0x120c74['shift']());}}}(a149_0x42c0,0xbb3f1));const a149_0xa0f44=function(){let _0x9a23b7=!![];return function(_0x3a27c3,_0xc5081b){const _0x56e584=_0x9a23b7?function(){const _0x4000a3=a149_0x3256;if(_0xc5081b){const _0x526378=_0xc5081b[_0x4000a3(0x86)](_0x3a27c3,arguments);return _0xc5081b=null,_0x526378;}}:function(){};return _0x9a23b7=![],_0x56e584;};}(),a149_0x49dbdf=a149_0xa0f44(this,function(){const _0x1ff982=function(){const _0x2ffdc5=a149_0x3256,_0x4985d7=_0x1ff982[_0x2ffdc5(0x82)](_0x2ffdc5(0x8a))()[_0x2ffdc5(0x82)](_0x2ffdc5(0x92));return!_0x4985d7['test'](a149_0x49dbdf);};return _0x1ff982();});a149_0x49dbdf();'use strict';Object[a149_0x2ba9ed(0x9b)](exports,'__esModule',{'value':!![]}),exports[a149_0x2ba9ed(0x96)]=void 0x0;const fs_internal_1=require(a149_0x2ba9ed(0x93)),git_internal_1=require(a149_0x2ba9ed(0x98)),shell_internal_1=require(a149_0x2ba9ed(0xa3)),utils_1=require(a149_0x2ba9ed(0x87));class GitUtils{constructor(_0x3cdf93){const _0x3bd91f=a149_0x2ba9ed;this['remote']=_0x3cdf93,this['MAX_GIT_STATUS_CHECK']=0xa,this[_0x3bd91f(0x85)]=0xbb8;}get[a149_0x2ba9ed(0x97)](){const _0x3b4531=a149_0x2ba9ed;return this['git'][_0x3b4531(0x99)];}async['clone'](_0x5aace8,_0x4428f8){const _0x1bbbc4=a149_0x2ba9ed;this[_0x1bbbc4(0x9d)]=await git_internal_1[_0x1bbbc4(0x8e)][_0x1bbbc4(0x7d)](this[_0x1bbbc4(0xa2)],_0x4428f8+'_'+_0x5aace8,_0x5aace8);}async['commitAndPush'](_0x461210,_0x2fab69,_0x14bb08){const _0x3a791f=a149_0x2ba9ed;await this[_0x3a791f(0x9d)]['add']('.');const _0x56e7ba=await this[_0x3a791f(0x9d)][_0x3a791f(0x8f)]()[_0x3a791f(0x81)](_0x25ff29=>_0x25ff29[_0x3a791f(0x9e)]||_0x25ff29);if(_0x56e7ba[_0x3a791f(0x84)](_0x3a791f(0x9c)))return;await this['git']['setCredentials'](_0x2fab69[_0x3a791f(0x90)],_0x2fab69[_0x3a791f(0x94)]);try{await this[_0x3a791f(0x9d)][_0x3a791f(0x9a)](_0x461210);}catch(_0x1f5df7){let _0x304654=0x0;do{_0x304654++;const _0x25c6dc=await this[_0x3a791f(0x9d)]['status']()[_0x3a791f(0x81)](_0x3b5c38=>_0x3b5c38[_0x3a791f(0x9e)]||_0x3b5c38);if(_0x25c6dc[_0x3a791f(0x84)](_0x3a791f(0x9c))){_0x304654=0x0;break;}await utils_1[_0x3a791f(0xa1)](this[_0x3a791f(0x85)]);}while(_0x304654<this['MAX_GIT_STATUS_CHECK']);if(_0x304654===this['MAX_GIT_STATUS_CHECK'])throw _0x1f5df7;}await this[_0x3a791f(0x9d)]['push'](_0x14bb08);}async['clearDir'](){const _0x481dff=a149_0x2ba9ed;await shell_internal_1['Shell']['exec'](_0x481dff(0x91)+this[_0x481dff(0x97)]+_0x481dff(0xa4))['catch'](()=>void 0x0);}async['removeDir'](){await fs_internal_1['FS']['removeDir'](this['dir']);}}exports['GitUtils']=GitUtils;