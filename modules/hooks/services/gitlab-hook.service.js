const a73_0x5476=['16979VhUUfF','delete','createRequest','repository','GitlabHookService','8222WLKEYF','13KunxHV','getOne','put','HookDto','hooks/','124uaxKin','map','GitHookService','get','416902CKVCnw','NotFoundError','__importDefault','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../../git-api/services/gitlab-api.service','request','GitlabApiService','__esModule','1217807RvKNbu','111bGlqVj','../../../core/errors/not-found.error','BadRequestError','../dto/hook.dto','apiUrl','post','../../../core/errors/bad-request.error','1440532YwnCNq','test','728494BXmDnh','apply','constructor','14159wahKFj','fromGitlab','./git-hook.service'];const a73_0x9d5a78=a73_0xe738;(function(_0x2f46cb,_0x363aea){const _0x4c89cd=a73_0xe738;while(!![]){try{const _0x1b0781=-parseInt(_0x4c89cd(0x1cf))+parseInt(_0x4c89cd(0x1ec))+-parseInt(_0x4c89cd(0x1e4))+-parseInt(_0x4c89cd(0x1db))*parseInt(_0x4c89cd(0x1da))+parseInt(_0x4c89cd(0x1cd))+parseInt(_0x4c89cd(0x1ed))*parseInt(_0x4c89cd(0x1d2))+-parseInt(_0x4c89cd(0x1e0))*parseInt(_0x4c89cd(0x1d5));if(_0x1b0781===_0x363aea)break;else _0x2f46cb['push'](_0x2f46cb['shift']());}catch(_0x1b248e){_0x2f46cb['push'](_0x2f46cb['shift']());}}}(a73_0x5476,0xd4f76));const a73_0x161abf=function(){let _0x2c226f=!![];return function(_0x12fd23,_0x335805){const _0x28681b=_0x2c226f?function(){const _0x175056=a73_0xe738;if(_0x335805){const _0x3a959a=_0x335805[_0x175056(0x1d0)](_0x12fd23,arguments);return _0x335805=null,_0x3a959a;}}:function(){};return _0x2c226f=![],_0x28681b;};}(),a73_0xbda3a7=a73_0x161abf(this,function(){const _0x1b3c44=function(){const _0x5d11de=a73_0xe738,_0x52969b=_0x1b3c44[_0x5d11de(0x1d1)](_0x5d11de(0x1e7))()[_0x5d11de(0x1d1)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x52969b[_0x5d11de(0x1ce)](a73_0xbda3a7);};return _0x1b3c44();});a73_0xbda3a7();'use strict';var __importDefault=this&&this[a73_0x9d5a78(0x1e6)]||function(_0x2f9364){const _0xd60a87=a73_0x9d5a78;return _0x2f9364&&_0x2f9364[_0xd60a87(0x1eb)]?_0x2f9364:{'default':_0x2f9364};};Object['defineProperty'](exports,a73_0x9d5a78(0x1eb),{'value':!![]}),exports[a73_0x9d5a78(0x1d9)]=void 0x0;const bad_request_error_1=require(a73_0x9d5a78(0x1cc)),not_found_error_1=require(a73_0x9d5a78(0x1ee)),gitlab_api_service_1=require(a73_0x9d5a78(0x1e8)),typedi_1=__importDefault(require('typedi')),hook_dto_1=require(a73_0x9d5a78(0x1f0)),git_hook_service_1=require(a73_0x9d5a78(0x1d4));function a73_0xe738(_0x57b5d8,_0x4091c7){return a73_0xe738=function(_0x22e7ce,_0xbda3a7){_0x22e7ce=_0x22e7ce-0x1cc;let _0x161abf=a73_0x5476[_0x22e7ce];return _0x161abf;},a73_0xe738(_0x57b5d8,_0x4091c7);}class GitlabHookService extends git_hook_service_1[a73_0x9d5a78(0x1e2)]{constructor(_0x12df09){const _0x328e49=a73_0x9d5a78;super(_0x12df09),this[_0x328e49(0x1e9)]=this[_0x328e49(0x1d7)]();}[a73_0x9d5a78(0x1d7)](){const _0x16d081=a73_0x9d5a78,_0x5b9e54=typedi_1['default'][_0x16d081(0x1e3)](gitlab_api_service_1[_0x16d081(0x1ea)]);return _0x5b9e54['createRequest'](this[_0x16d081(0x1d8)][_0x16d081(0x1f1)]);}async['create'](_0xaea9e7){const _0x5f0671=a73_0x9d5a78;try{const _0x1c4430=await this['request'][_0x5f0671(0x1f2)]('hooks',_0xaea9e7);return hook_dto_1['HookDto']['fromGitlab'](_0x1c4430);}catch(_0x17c059){throw new bad_request_error_1[(_0x5f0671(0x1ef))](_0x17c059);}}async[a73_0x9d5a78(0x1dc)](_0x2d72f6){const _0x398ab2=a73_0x9d5a78;try{const _0x54c120=await this[_0x398ab2(0x1e9)][_0x398ab2(0x1e3)](_0x398ab2(0x1df)+_0x2d72f6);return hook_dto_1[_0x398ab2(0x1de)][_0x398ab2(0x1d3)](_0x54c120);}catch(_0x2623f6){throw new not_found_error_1[(_0x398ab2(0x1e5))](_0x2623f6);}}async['getAll'](){const _0x2ef66a=a73_0x9d5a78;try{const _0x3ff11e=await this[_0x2ef66a(0x1e9)][_0x2ef66a(0x1e3)]('hooks');return _0x3ff11e[_0x2ef66a(0x1e1)](_0x2dc9ef=>hook_dto_1[_0x2ef66a(0x1de)][_0x2ef66a(0x1d3)](_0x2dc9ef));}catch(_0x24ba63){throw new not_found_error_1[(_0x2ef66a(0x1e5))](_0x24ba63);}}async['update'](_0x29f9d9,_0x2cf70b){const _0x2421ed=a73_0x9d5a78;try{const _0x40ce12=await this[_0x2421ed(0x1e9)][_0x2421ed(0x1dd)](_0x2421ed(0x1df)+_0x29f9d9,_0x2cf70b);return hook_dto_1[_0x2421ed(0x1de)][_0x2421ed(0x1d3)](_0x40ce12);}catch(_0x5e43ba){throw new not_found_error_1[(_0x2421ed(0x1e5))](_0x5e43ba);}}async['delete'](_0x1939bb){const _0x3c8246=a73_0x9d5a78;try{await this['request'][_0x3c8246(0x1d6)]('hooks/'+_0x1939bb);}catch(_0x56ae89){throw new not_found_error_1[(_0x3c8246(0x1e5))](_0x56ae89);}}}exports[a73_0x9d5a78(0x1d9)]=GitlabHookService;