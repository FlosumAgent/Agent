const a75_0x6185=['\x20&&\x20git\x20checkout\x20--orphan\x20','146581OKsWCa','info','clean\x20up\x20repository\x20directory\x20after\x20creating\x20branch','exec','\x20&&\x20git\x20add\x20','__esModule','Shell','\x20&&\x20git\x20status','create\x20empty\x20branch\x20at\x20%s\x20name\x20%s\x20[%s]\x20%s','gitUrl','77647lClcpg','\x20&&\x20git\x20commit\x20-m\x20\x22','443531WaLMYQ','agent@flosum.com','setCredentials','../../core','createEmptyBranch','AuthSettingsService','name','parseGitError','defineProperty','\x20&&\x20git\x20config\x20--local\x20user.name\x20\x22','__importDefault','../shared/services/auth-settings.service','replace','13INkKCv','\x20&&\x20git\x20push\x20origin\x20','_repoPath','\x20--single-branch\x20','commit','apply','removeDir','constructor','\x20&&\x20git\x20init','path','Git','git','\x20&&\x20git\x20remote\x20add\x20origin\x20','1771978NmvVJb','./internal.utils','clone\x20repository\x20branch\x20%s\x20from\x20%s\x20to\x20%s','commit\x20message\x20\x22%s\x22','set\x20credentials\x20%s\x20(%s)','242723zDtQXO','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Logger','DEFAULT_CLONE_PATH','join','init\x20repository','../shared/utils','://','1900794LXZkRO','logger','default','flosum-agent','cd\x20','getProtocol','\x22\x20--allow-empty','14pKBUoE','return\x20/\x22\x20+\x20this\x20+\x20\x22/','catch','1dfcEWT','\x22\x20&&\x20git\x20config\x20--local\x20user.email\x20\x22','clone','1721792FbSILE'];const a75_0xa204fc=a75_0x31a2;(function(_0x4a8eda,_0x22490a){const _0x38734d=a75_0x31a2;while(!![]){try{const _0x179da0=parseInt(_0x38734d(0x1f0))+parseInt(_0x38734d(0x1d6))+-parseInt(_0x38734d(0x1e3))+parseInt(_0x38734d(0x1c9))*-parseInt(_0x38734d(0x1f2))+-parseInt(_0x38734d(0x1db))*parseInt(_0x38734d(0x1ed))+parseInt(_0x38734d(0x1bc))+-parseInt(_0x38734d(0x1ba))*-parseInt(_0x38734d(0x1ea));if(_0x179da0===_0x22490a)break;else _0x4a8eda['push'](_0x4a8eda['shift']());}catch(_0x90e71c){_0x4a8eda['push'](_0x4a8eda['shift']());}}}(a75_0x6185,0xee1b9));const a75_0x21f408=function(){let _0x4055f8=!![];return function(_0x4d2bcc,_0xbee762){const _0x367e25=_0x4055f8?function(){const _0x3fdc10=a75_0x31a2;if(_0xbee762){const _0x567697=_0xbee762[_0x3fdc10(0x1ce)](_0x4d2bcc,arguments);return _0xbee762=null,_0x567697;}}:function(){};return _0x4055f8=![],_0x367e25;};}(),a75_0x500ee8=a75_0x21f408(this,function(){const _0x177c0b=function(){const _0x2ad984=a75_0x31a2,_0x33a549=_0x177c0b[_0x2ad984(0x1d0)](_0x2ad984(0x1eb))()[_0x2ad984(0x1d0)](_0x2ad984(0x1dc));return!_0x33a549['test'](a75_0x500ee8);};return _0x177c0b();});a75_0x500ee8();'use strict';var __importDefault=this&&this[a75_0xa204fc(0x1c6)]||function(_0x1aa5da){const _0x1e6c61=a75_0xa204fc;return _0x1aa5da&&_0x1aa5da[_0x1e6c61(0x1b5)]?_0x1aa5da:{'default':_0x1aa5da};};Object[a75_0xa204fc(0x1c4)](exports,a75_0xa204fc(0x1b5),{'value':!![]}),exports['Git']=void 0x0;const core_1=require(a75_0xa204fc(0x1bf)),path_1=__importDefault(require(a75_0xa204fc(0x1d2))),typedi_1=__importDefault(require('typedi')),auth_settings_service_1=require(a75_0xa204fc(0x1c7)),utils_1=require(a75_0xa204fc(0x1e1)),fs_internal_1=require('./fs.internal'),internal_utils_1=require(a75_0xa204fc(0x1d7)),shell_internal_1=require('./shell.internal');function a75_0x31a2(_0x38ed4d,_0x14e17e){return a75_0x31a2=function(_0x5c3de0,_0x500ee8){_0x5c3de0=_0x5c3de0-0x1b3;let _0x21f408=a75_0x6185[_0x5c3de0];return _0x21f408;},a75_0x31a2(_0x38ed4d,_0x14e17e);}class Git{constructor(_0x30e0f5){const _0x24e00e=a75_0xa204fc;this[_0x24e00e(0x1cb)]=_0x30e0f5;}get['baseDir'](){const _0x295952=a75_0xa204fc;return this[_0x295952(0x1cb)];}async[a75_0xa204fc(0x1be)](_0x876506,_0x4f0792){const _0x4ad433=a75_0xa204fc;Git[_0x4ad433(0x1e4)][_0x4ad433(0x1f3)](_0x4ad433(0x1da),_0x876506,_0x4f0792),await shell_internal_1['Shell'][_0x4ad433(0x1b3)](_0x4ad433(0x1e7)+this[_0x4ad433(0x1cb)]+_0x4ad433(0x1c5)+_0x876506+_0x4ad433(0x1ee)+_0x4f0792+'\x22')[_0x4ad433(0x1ec)](internal_utils_1['parseGitError']);}async['add'](..._0xa6ddab){const _0x63afa4=a75_0xa204fc;await shell_internal_1[_0x63afa4(0x1b6)][_0x63afa4(0x1b3)](_0x63afa4(0x1e7)+this['_repoPath']+_0x63afa4(0x1b4)+_0xa6ddab['join']('\x20'))[_0x63afa4(0x1ec)](internal_utils_1[_0x63afa4(0x1c3)]);}async['status'](){const _0x2d665b=a75_0xa204fc;return shell_internal_1[_0x2d665b(0x1b6)][_0x2d665b(0x1b3)](_0x2d665b(0x1e7)+this[_0x2d665b(0x1cb)]+_0x2d665b(0x1b7))[_0x2d665b(0x1ec)](internal_utils_1[_0x2d665b(0x1c3)]);}async[a75_0xa204fc(0x1cd)](_0x2cb870){const _0x6107a0=a75_0xa204fc;Git[_0x6107a0(0x1e4)][_0x6107a0(0x1f3)](_0x6107a0(0x1d9),_0x2cb870),await shell_internal_1[_0x6107a0(0x1b6)][_0x6107a0(0x1b3)](_0x6107a0(0x1e7)+this[_0x6107a0(0x1cb)]+'\x20&&\x20git\x20commit\x20-m\x20\x22'+_0x2cb870+'\x22')[_0x6107a0(0x1ec)](internal_utils_1[_0x6107a0(0x1c3)]);}async['push'](_0x29e7f0){const _0x491f8f=a75_0xa204fc;Git['logger'][_0x491f8f(0x1f3)]('push\x20changes\x20to\x20%s',_0x29e7f0),await shell_internal_1['Shell'][_0x491f8f(0x1b3)](_0x491f8f(0x1e7)+this['_repoPath']+_0x491f8f(0x1ca)+_0x29e7f0+'\x20--quiet')[_0x491f8f(0x1ec)](internal_utils_1[_0x491f8f(0x1c3)]);}static async[a75_0xa204fc(0x1ef)](_0x4206f8,_0xb4e931,_0x49c9a4){const _0x777502=a75_0xa204fc,_0x3fe93a=path_1['default']['join'](this[_0x777502(0x1de)],_0xb4e931),_0x556f35=new Git(_0x3fe93a);return Git['logger'][_0x777502(0x1f3)](_0x777502(0x1d8),_0x49c9a4,_0x4206f8,_0x3fe93a),await fs_internal_1['FS']['removeDir'](_0x3fe93a),await shell_internal_1['Shell']['exec']('git\x20clone\x20-b\x20'+_0x49c9a4+_0x777502(0x1cc)+_0x4206f8+'\x20'+_0x3fe93a)[_0x777502(0x1ec)](()=>void 0x0),_0x556f35;}static async[a75_0xa204fc(0x1c0)](_0x4cf929,_0x32fac8,_0x52ed5a=a75_0xa204fc(0x1e0)){const _0x3cdbe6=a75_0xa204fc,{gitCredentials:_0x208a3a}=typedi_1['default']['get'](auth_settings_service_1[_0x3cdbe6(0x1c1)]),_0x39989a=_0x4cf929[_0x3cdbe6(0x1b9)][_0x3cdbe6(0x1c8)](/http(s)?\:\/\/(.+@)?/,utils_1[_0x3cdbe6(0x1e8)](_0x4cf929['gitUrl'])+_0x3cdbe6(0x1e2)+_0x208a3a+'@'),_0x2e0158=path_1[_0x3cdbe6(0x1e5)][_0x3cdbe6(0x1df)](this['DEFAULT_CLONE_PATH'],_0x4cf929[_0x3cdbe6(0x1c2)]);Git[_0x3cdbe6(0x1e4)][_0x3cdbe6(0x1f3)](_0x3cdbe6(0x1b8),_0x4cf929['name'],_0x32fac8,_0x2e0158,_0x39989a),await fs_internal_1['FS'][_0x3cdbe6(0x1cf)](_0x2e0158),await fs_internal_1['FS']['makeDir'](_0x2e0158);const _0x2a5871=new Git(_0x2e0158);await shell_internal_1[_0x3cdbe6(0x1b6)][_0x3cdbe6(0x1b3)]('cd\x20'+_0x2a5871['baseDir']+_0x3cdbe6(0x1d1))[_0x3cdbe6(0x1ec)](internal_utils_1[_0x3cdbe6(0x1c3)]),await shell_internal_1[_0x3cdbe6(0x1b6)][_0x3cdbe6(0x1b3)](_0x3cdbe6(0x1e7)+_0x2a5871['baseDir']+_0x3cdbe6(0x1d5)+_0x39989a)[_0x3cdbe6(0x1ec)](internal_utils_1[_0x3cdbe6(0x1c3)]),await _0x2a5871[_0x3cdbe6(0x1be)](_0x3cdbe6(0x1e6),_0x3cdbe6(0x1bd)),_0x32fac8&&(await shell_internal_1[_0x3cdbe6(0x1b6)][_0x3cdbe6(0x1b3)](_0x3cdbe6(0x1e7)+_0x2a5871['baseDir']+_0x3cdbe6(0x1f1)+_0x32fac8)[_0x3cdbe6(0x1ec)](internal_utils_1[_0x3cdbe6(0x1c3)]),await shell_internal_1[_0x3cdbe6(0x1b6)][_0x3cdbe6(0x1b3)]('cd\x20'+_0x2a5871['baseDir']+_0x3cdbe6(0x1bb)+_0x52ed5a+_0x3cdbe6(0x1e9))[_0x3cdbe6(0x1ec)](internal_utils_1[_0x3cdbe6(0x1c3)]),await _0x2a5871['push'](_0x32fac8)),Git[_0x3cdbe6(0x1e4)][_0x3cdbe6(0x1f3)](_0x3cdbe6(0x1f4)),await fs_internal_1['FS'][_0x3cdbe6(0x1cf)](_0x2a5871['baseDir']);}}exports[a75_0xa204fc(0x1d3)]=Git,Git[a75_0xa204fc(0x1de)]=path_1['default'][a75_0xa204fc(0x1df)](process['cwd'](),'.temp',a75_0xa204fc(0x1d4)),Git[a75_0xa204fc(0x1e4)]=new core_1[(a75_0xa204fc(0x1dd))](Git['name']);