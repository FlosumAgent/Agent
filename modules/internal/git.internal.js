const a75_0x9a4a=['push\x20changes\x20to\x20%s','agent@flosum.com','.temp','43PGSSFK','\x20&&\x20git\x20add\x20','cd\x20','commit','./fs.internal','__esModule','removeDir','510277xLhhoR','clone','DEFAULT_CLONE_PATH','170pBFNIY','return\x20/\x22\x20+\x20this\x20+\x20\x22/','path','clean\x20up\x20repository\x20directory\x20after\x20creating\x20branch','parseGitError','apply','AuthSettingsService','\x20--quiet','1ssxaYQ','Git','name','\x20&&\x20git\x20config\x20--local\x20user.name\x20\x22','355128MAiYqa','add','baseDir','_repoPath','getProtocol','./shell.internal','create\x20empty\x20branch\x20at\x20%s\x20name\x20%s\x20[%s]\x20%s','logger','catch','__importDefault','info','../shared/utils','\x20--single-branch\x20','get','../../core','Shell','constructor','replace','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','cwd','test','10723xUqYZm','\x20&&\x20git\x20checkout\x20--orphan\x20','../shared/services/auth-settings.service','gitUrl','9yqyXND','join','\x20&&\x20git\x20init','50667QPPufw','17Ktgkgk','1sEfOhi','3227xaaNNF','defineProperty','createEmptyBranch','set\x20credentials\x20%s\x20(%s)','default','://','typedi','Logger','\x20&&\x20git\x20status','makeDir','27317qdVshi','commit\x20message\x20\x22%s\x22','\x20&&\x20git\x20commit\x20-m\x20\x22','1089059IJkoMO','setCredentials','flosum-agent','exec','push','\x20&&\x20git\x20push\x20origin\x20'];const a75_0x499892=a75_0x118d;(function(_0x41298e,_0x37cc7b){const _0x3bc9a4=a75_0x118d;while(!![]){try{const _0x49c85c=-parseInt(_0x3bc9a4(0x1cb))*-parseInt(_0x3bc9a4(0x1d7))+-parseInt(_0x3bc9a4(0x1ca))*-parseInt(_0x3bc9a4(0x1c7))+-parseInt(_0x3bc9a4(0x1e3))*-parseInt(_0x3bc9a4(0x1c3))+-parseInt(_0x3bc9a4(0x1cd))*-parseInt(_0x3bc9a4(0x1ed))+-parseInt(_0x3bc9a4(0x1da))*parseInt(_0x3bc9a4(0x1f5))+parseInt(_0x3bc9a4(0x1ea))*-parseInt(_0x3bc9a4(0x1cc))+parseInt(_0x3bc9a4(0x1f9));if(_0x49c85c===_0x37cc7b)break;else _0x41298e['push'](_0x41298e['shift']());}catch(_0x52fa74){_0x41298e['push'](_0x41298e['shift']());}}}(a75_0x9a4a,0xa7727));const a75_0x468778=function(){let _0x2df2a4=!![];return function(_0x35a2f1,_0xa326b7){const _0x20bfcc=_0x2df2a4?function(){const _0x34309f=a75_0x118d;if(_0xa326b7){const _0x24d3c3=_0xa326b7[_0x34309f(0x1f2)](_0x35a2f1,arguments);return _0xa326b7=null,_0x24d3c3;}}:function(){};return _0x2df2a4=![],_0x20bfcc;};}(),a75_0x446b54=a75_0x468778(this,function(){const _0xd55447=function(){const _0x14ef0b=a75_0x118d,_0x49c528=_0xd55447[_0x14ef0b(0x209)](_0x14ef0b(0x1ee))()['constructor'](_0x14ef0b(0x20b));return!_0x49c528[_0x14ef0b(0x1c2)](a75_0x446b54);};return _0xd55447();});a75_0x446b54();'use strict';var __importDefault=this&&this[a75_0x499892(0x202)]||function(_0x8ed635){const _0x4e9af2=a75_0x499892;return _0x8ed635&&_0x8ed635[_0x4e9af2(0x1e8)]?_0x8ed635:{'default':_0x8ed635};};Object[a75_0x499892(0x1ce)](exports,'__esModule',{'value':!![]}),exports['Git']=void 0x0;const core_1=require(a75_0x499892(0x207)),path_1=__importDefault(require(a75_0x499892(0x1ef))),typedi_1=__importDefault(require(a75_0x499892(0x1d3))),auth_settings_service_1=require(a75_0x499892(0x1c5)),utils_1=require(a75_0x499892(0x204)),fs_internal_1=require(a75_0x499892(0x1e7)),internal_utils_1=require('./internal.utils'),shell_internal_1=require(a75_0x499892(0x1fe));class Git{constructor(_0x3d2b4e){this['_repoPath']=_0x3d2b4e;}get[a75_0x499892(0x1fb)](){const _0x715de4=a75_0x499892;return this[_0x715de4(0x1fc)];}async[a75_0x499892(0x1db)](_0x4356f4,_0x206ee9){const _0x43375f=a75_0x499892;Git[_0x43375f(0x200)]['info'](_0x43375f(0x1d0),_0x4356f4,_0x206ee9),await shell_internal_1['Shell'][_0x43375f(0x1dd)](_0x43375f(0x1e5)+this[_0x43375f(0x1fc)]+_0x43375f(0x1f8)+_0x4356f4+'\x22\x20&&\x20git\x20config\x20--local\x20user.email\x20\x22'+_0x206ee9+'\x22')['catch'](internal_utils_1[_0x43375f(0x1f1)]);}async[a75_0x499892(0x1fa)](..._0xf6f6d5){const _0x568861=a75_0x499892;await shell_internal_1['Shell'][_0x568861(0x1dd)](_0x568861(0x1e5)+this[_0x568861(0x1fc)]+_0x568861(0x1e4)+_0xf6f6d5[_0x568861(0x1c8)]('\x20'))[_0x568861(0x201)](internal_utils_1['parseGitError']);}async['status'](){const _0x5d1162=a75_0x499892;return shell_internal_1['Shell'][_0x5d1162(0x1dd)](_0x5d1162(0x1e5)+this[_0x5d1162(0x1fc)]+_0x5d1162(0x1d5))[_0x5d1162(0x201)](internal_utils_1[_0x5d1162(0x1f1)]);}async[a75_0x499892(0x1e6)](_0x10b613){const _0x188835=a75_0x499892;Git['logger'][_0x188835(0x203)](_0x188835(0x1d8),_0x10b613),await shell_internal_1[_0x188835(0x208)]['exec']('cd\x20'+this[_0x188835(0x1fc)]+_0x188835(0x1d9)+_0x10b613+'\x22')[_0x188835(0x201)](internal_utils_1[_0x188835(0x1f1)]);}async[a75_0x499892(0x1de)](_0x23e483){const _0x78ed07=a75_0x499892;Git[_0x78ed07(0x200)][_0x78ed07(0x203)](_0x78ed07(0x1e0),_0x23e483),await shell_internal_1['Shell']['exec']('cd\x20'+this[_0x78ed07(0x1fc)]+_0x78ed07(0x1df)+_0x23e483+_0x78ed07(0x1f4))[_0x78ed07(0x201)](internal_utils_1[_0x78ed07(0x1f1)]);}static async[a75_0x499892(0x1eb)](_0x56d6b3,_0x4d95b8,_0x113223){const _0x69f423=a75_0x499892,_0x48f7b4=path_1[_0x69f423(0x1d1)][_0x69f423(0x1c8)](this['DEFAULT_CLONE_PATH'],_0x4d95b8),_0x3a7860=new Git(_0x48f7b4);return Git[_0x69f423(0x200)][_0x69f423(0x203)]('clone\x20repository\x20branch\x20%s\x20from\x20%s\x20to\x20%s',_0x113223,_0x56d6b3,_0x48f7b4),await fs_internal_1['FS'][_0x69f423(0x1e9)](_0x48f7b4),await shell_internal_1['Shell'][_0x69f423(0x1dd)]('git\x20clone\x20-b\x20'+_0x113223+_0x69f423(0x205)+_0x56d6b3+'\x20'+_0x48f7b4)[_0x69f423(0x201)](()=>void 0x0),_0x3a7860;}static async[a75_0x499892(0x1cf)](_0x43ea38,_0x2ed1ea,_0x484a47='init\x20repository'){const _0x2cff56=a75_0x499892,{gitCredentials:_0x4c2cc9}=typedi_1['default'][_0x2cff56(0x206)](auth_settings_service_1[_0x2cff56(0x1f3)]),_0x155126=_0x43ea38[_0x2cff56(0x1c6)][_0x2cff56(0x20a)](/http(s)?\:\/\/(.+@)?/,utils_1[_0x2cff56(0x1fd)](_0x43ea38[_0x2cff56(0x1c6)])+_0x2cff56(0x1d2)+_0x4c2cc9+'@'),_0x45bc0d=path_1['default'][_0x2cff56(0x1c8)](this[_0x2cff56(0x1ec)],_0x43ea38[_0x2cff56(0x1f7)]);Git[_0x2cff56(0x200)][_0x2cff56(0x203)](_0x2cff56(0x1ff),_0x43ea38[_0x2cff56(0x1f7)],_0x2ed1ea,_0x45bc0d,_0x155126),await fs_internal_1['FS'][_0x2cff56(0x1e9)](_0x45bc0d),await fs_internal_1['FS'][_0x2cff56(0x1d6)](_0x45bc0d);const _0x1630ab=new Git(_0x45bc0d);await shell_internal_1[_0x2cff56(0x208)]['exec'](_0x2cff56(0x1e5)+_0x1630ab[_0x2cff56(0x1fb)]+_0x2cff56(0x1c9))[_0x2cff56(0x201)](internal_utils_1[_0x2cff56(0x1f1)]),await shell_internal_1[_0x2cff56(0x208)][_0x2cff56(0x1dd)]('cd\x20'+_0x1630ab[_0x2cff56(0x1fb)]+'\x20&&\x20git\x20remote\x20add\x20origin\x20'+_0x155126)['catch'](internal_utils_1[_0x2cff56(0x1f1)]),await _0x1630ab[_0x2cff56(0x1db)](_0x2cff56(0x1dc),_0x2cff56(0x1e1)),_0x2ed1ea&&(await shell_internal_1['Shell'][_0x2cff56(0x1dd)](_0x2cff56(0x1e5)+_0x1630ab[_0x2cff56(0x1fb)]+_0x2cff56(0x1c4)+_0x2ed1ea)['catch'](internal_utils_1['parseGitError']),await shell_internal_1[_0x2cff56(0x208)][_0x2cff56(0x1dd)](_0x2cff56(0x1e5)+_0x1630ab['baseDir']+_0x2cff56(0x1d9)+_0x484a47+'\x22\x20--allow-empty')[_0x2cff56(0x201)](internal_utils_1[_0x2cff56(0x1f1)]),await _0x1630ab[_0x2cff56(0x1de)](_0x2ed1ea)),Git[_0x2cff56(0x200)][_0x2cff56(0x203)](_0x2cff56(0x1f0)),await fs_internal_1['FS'][_0x2cff56(0x1e9)](_0x1630ab[_0x2cff56(0x1fb)]);}}function a75_0x118d(_0x16ce74,_0x2227a0){return a75_0x118d=function(_0xb7a11c,_0x446b54){_0xb7a11c=_0xb7a11c-0x1c2;let _0x468778=a75_0x9a4a[_0xb7a11c];return _0x468778;},a75_0x118d(_0x16ce74,_0x2227a0);}exports[a75_0x499892(0x1f6)]=Git,Git[a75_0x499892(0x1ec)]=path_1[a75_0x499892(0x1d1)]['join'](process[a75_0x499892(0x20c)](),a75_0x499892(0x1e2),'git'),Git['logger']=new core_1[(a75_0x499892(0x1d4))](Git[a75_0x499892(0x1f7)]);