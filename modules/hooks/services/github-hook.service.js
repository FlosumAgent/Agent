const a72_0x30e8=['create','GithubHookService','NotFoundError','test','delete','request','757873EcsXsf','../../../core/errors/not-found.error','GithubApiService','7QnyxtM','defineProperty','209247RKjXRI','HookDto','typedi','__importDefault','map','repository','apply','__esModule','hooks/','GitHookService','183154fWcwNo','522747pKNwCM','4oqyiKZ','createRequest','15205zbYwmG','../../../core/errors/bad-request.error','6HBKLUl','getAll','get','hooks','post','1830843nRQZeA','fromGithub','constructor','patch','default','./git-hook.service','BadRequestError','539242RHXRtG'];const a72_0x2fa8e7=a72_0x5ac0;(function(_0x501335,_0x469f5a){const _0x56ec4d=a72_0x5ac0;while(!![]){try{const _0x5b7d6d=-parseInt(_0x56ec4d(0xd2))+parseInt(_0x56ec4d(0xb4))*-parseInt(_0x56ec4d(0xc0))+parseInt(_0x56ec4d(0xc4))*-parseInt(_0x56ec4d(0xc6))+-parseInt(_0x56ec4d(0xb6))*-parseInt(_0x56ec4d(0xc2))+parseInt(_0x56ec4d(0xcb))+parseInt(_0x56ec4d(0xb1))+-parseInt(_0x56ec4d(0xc1));if(_0x5b7d6d===_0x469f5a)break;else _0x501335['push'](_0x501335['shift']());}catch(_0x5613df){_0x501335['push'](_0x501335['shift']());}}}(a72_0x30e8,0xf1cc7));const a72_0x4b01c1=function(){let _0x580eeb=!![];return function(_0x3038b3,_0x11e63c){const _0x1a5ecb=_0x580eeb?function(){const _0x18f330=a72_0x5ac0;if(_0x11e63c){const _0x3b3a6d=_0x11e63c[_0x18f330(0xbc)](_0x3038b3,arguments);return _0x11e63c=null,_0x3b3a6d;}}:function(){};return _0x580eeb=![],_0x1a5ecb;};}(),a72_0x1b83ea=a72_0x4b01c1(this,function(){const _0x180acf=function(){const _0x15642d=a72_0x5ac0,_0x13edc4=_0x180acf['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x15642d(0xcd)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x13edc4[_0x15642d(0xae)](a72_0x1b83ea);};return _0x180acf();});a72_0x1b83ea();function a72_0x5ac0(_0x301d02,_0x435255){return a72_0x5ac0=function(_0x536c03,_0x1b83ea){_0x536c03=_0x536c03-0xad;let _0x4b01c1=a72_0x30e8[_0x536c03];return _0x4b01c1;},a72_0x5ac0(_0x301d02,_0x435255);}'use strict';var __importDefault=this&&this[a72_0x2fa8e7(0xb9)]||function(_0x5e9a2b){return _0x5e9a2b&&_0x5e9a2b['__esModule']?_0x5e9a2b:{'default':_0x5e9a2b};};Object[a72_0x2fa8e7(0xb5)](exports,a72_0x2fa8e7(0xbd),{'value':!![]}),exports[a72_0x2fa8e7(0xd4)]=void 0x0;const bad_request_error_1=require(a72_0x2fa8e7(0xc5)),not_found_error_1=require(a72_0x2fa8e7(0xb2)),github_api_service_1=require('../../git-api/services/github-api.service'),typedi_1=__importDefault(require(a72_0x2fa8e7(0xb8))),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require(a72_0x2fa8e7(0xd0));class GithubHookService extends git_hook_service_1[a72_0x2fa8e7(0xbf)]{constructor(_0x156a48){const _0x3645e3=a72_0x2fa8e7;super(_0x156a48),this[_0x3645e3(0xb0)]=this[_0x3645e3(0xc3)]();}[a72_0x2fa8e7(0xc3)](){const _0x1cb6e8=a72_0x2fa8e7,_0x3158c0=typedi_1[_0x1cb6e8(0xcf)][_0x1cb6e8(0xc8)](github_api_service_1[_0x1cb6e8(0xb3)]);return _0x3158c0['createRequest'](this[_0x1cb6e8(0xbb)]['apiUrl']);}async[a72_0x2fa8e7(0xd3)](_0x29ce6f){const _0x2fff3b=a72_0x2fa8e7;try{const _0x518142=await this['request'][_0x2fff3b(0xca)]('hooks',_0x29ce6f);return hook_dto_1['HookDto'][_0x2fff3b(0xcc)](_0x518142);}catch(_0x1b10dd){throw new bad_request_error_1['BadRequestError'](_0x1b10dd);}}async['getOne'](_0x43d1f7){const _0x4523ff=a72_0x2fa8e7;try{const _0x1071ea=await this[_0x4523ff(0xb0)][_0x4523ff(0xc8)](_0x4523ff(0xbe)+_0x43d1f7);return hook_dto_1['HookDto']['fromGithub'](_0x1071ea);}catch(_0x562a82){throw new not_found_error_1[(_0x4523ff(0xad))](_0x562a82);}}async[a72_0x2fa8e7(0xc7)](){const _0x4b69cd=a72_0x2fa8e7;try{const _0xe986a5=await this[_0x4b69cd(0xb0)][_0x4b69cd(0xc8)](_0x4b69cd(0xc9));return _0xe986a5[_0x4b69cd(0xba)](_0x56dc06=>hook_dto_1[_0x4b69cd(0xb7)]['fromGithub'](_0x56dc06));}catch(_0x310f33){throw new not_found_error_1['NotFoundError'](_0x310f33);}}async['update'](_0x31d2cb,_0x29f1e8){const _0x41cd32=a72_0x2fa8e7;try{const _0x3acf77=await this[_0x41cd32(0xb0)][_0x41cd32(0xce)](_0x41cd32(0xbe)+_0x31d2cb,_0x29f1e8);return hook_dto_1[_0x41cd32(0xb7)][_0x41cd32(0xcc)](_0x3acf77);}catch(_0x2fd360){throw new bad_request_error_1[(_0x41cd32(0xd1))](_0x2fd360);}}async[a72_0x2fa8e7(0xaf)](_0x31c4b4){const _0x2a5167=a72_0x2fa8e7;try{await this[_0x2a5167(0xb0)][_0x2a5167(0xaf)](_0x2a5167(0xbe)+_0x31c4b4);}catch(_0x426967){throw new bad_request_error_1[(_0x2a5167(0xd1))](_0x426967);}}}exports[a72_0x2fa8e7(0xd4)]=GithubHookService;