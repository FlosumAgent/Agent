const a79_0x58e079=a79_0x55b8;(function(_0x5e0846,_0x1961a3){const _0x23f7ce=a79_0x55b8,_0x5731c3=_0x5e0846();while(!![]){try{const _0x260ab6=-parseInt(_0x23f7ce(0x1e6))/0x1*(parseInt(_0x23f7ce(0x1cd))/0x2)+parseInt(_0x23f7ce(0x1d7))/0x3*(parseInt(_0x23f7ce(0x1d0))/0x4)+parseInt(_0x23f7ce(0x1cf))/0x5*(parseInt(_0x23f7ce(0x1ee))/0x6)+parseInt(_0x23f7ce(0x1d3))/0x7*(-parseInt(_0x23f7ce(0x1ec))/0x8)+-parseInt(_0x23f7ce(0x1f1))/0x9*(parseInt(_0x23f7ce(0x1cb))/0xa)+parseInt(_0x23f7ce(0x1eb))/0xb*(-parseInt(_0x23f7ce(0x1e1))/0xc)+parseInt(_0x23f7ce(0x1db))/0xd;if(_0x260ab6===_0x1961a3)break;else _0x5731c3['push'](_0x5731c3['shift']());}catch(_0x473f27){_0x5731c3['push'](_0x5731c3['shift']());}}}(a79_0x30ce,0xdb26c));const a79_0x16d853=function(){let _0x3df783=!![];return function(_0x6cb603,_0x45f1a3){const _0x6e406a=_0x3df783?function(){const _0x177559=a79_0x55b8;if(_0x45f1a3){const _0x3271df=_0x45f1a3[_0x177559(0x1ce)](_0x6cb603,arguments);return _0x45f1a3=null,_0x3271df;}}:function(){};return _0x3df783=![],_0x6e406a;};}(),a79_0x24eae1=a79_0x16d853(this,function(){const _0xc3a4d8=a79_0x55b8;return a79_0x24eae1[_0xc3a4d8(0x1c6)]()[_0xc3a4d8(0x1e0)](_0xc3a4d8(0x1df))[_0xc3a4d8(0x1c6)]()[_0xc3a4d8(0x1d4)](a79_0x24eae1)[_0xc3a4d8(0x1e0)](_0xc3a4d8(0x1df));});a79_0x24eae1();'use strict';var __importDefault=this&&this[a79_0x58e079(0x1dc)]||function(_0x501922){const _0x274b86=a79_0x58e079;return _0x501922&&_0x501922[_0x274b86(0x1da)]?_0x501922:{'default':_0x501922};};Object[a79_0x58e079(0x1f2)](exports,a79_0x58e079(0x1da),{'value':!![]}),exports[a79_0x58e079(0x1c9)]=void 0x0;const bad_request_error_1=require(a79_0x58e079(0x1d5)),not_found_error_1=require('../../../core/errors/not-found.error'),typedi_1=__importDefault(require(a79_0x58e079(0x1d2))),bitbucket_server_api_service_1=require(a79_0x58e079(0x1d8)),hook_dto_1=require(a79_0x58e079(0x1dd)),git_hook_service_1=require(a79_0x58e079(0x1ef));function a79_0x30ce(){const _0x34f6b6=['map','2xLoCbF','apply','10nFlUKP','4KAoxKB','GitHookService','typedi','525egOjtb','constructor','../../../core/errors/bad-request.error','put','4439010LGvBgM','../../git-api/services/bitbucket-server-api.service','webhooks','__esModule','2089906GLpMuR','__importDefault','../dto/hook.dto','NotFoundError','(((.+)+)+)+$','search','216516NsdPDz','HookDto','getAll','delete','get','1184457OnaXAo','createRequest','default','apiUrl','webhooks/','341UgTcJI','49944puYAMX','repository','4678116izIHWQ','./git-hook.service','post','5445ihquqO','defineProperty','request','toString','fromBitbucketServer','BitbucketServerApiService','BitbucketServerHookService','BadRequestError','1490vSkWjQ'];a79_0x30ce=function(){return _0x34f6b6;};return a79_0x30ce();}function a79_0x55b8(_0x434a2e,_0x31d596){const _0xdb78a6=a79_0x30ce();return a79_0x55b8=function(_0x24eae1,_0x16d853){_0x24eae1=_0x24eae1-0x1c6;let _0x30ce06=_0xdb78a6[_0x24eae1];return _0x30ce06;},a79_0x55b8(_0x434a2e,_0x31d596);}class BitbucketServerHookService extends git_hook_service_1[a79_0x58e079(0x1d1)]{constructor(_0xc43699){const _0x14659d=a79_0x58e079;super(_0xc43699),this[_0x14659d(0x1f3)]=this[_0x14659d(0x1e7)]();}['createRequest'](){const _0x515a57=a79_0x58e079,_0x3f153a=typedi_1[_0x515a57(0x1e8)][_0x515a57(0x1e5)](bitbucket_server_api_service_1[_0x515a57(0x1c8)]);return _0x3f153a[_0x515a57(0x1e7)](this[_0x515a57(0x1ed)][_0x515a57(0x1e9)]);}async['create'](_0x528e2b){const _0x2b94f5=a79_0x58e079;try{const _0x43c8ca=await this[_0x2b94f5(0x1f3)][_0x2b94f5(0x1f0)]('webhooks',_0x528e2b);return hook_dto_1[_0x2b94f5(0x1e2)][_0x2b94f5(0x1c7)](_0x43c8ca);}catch(_0x3d64bd){throw new bad_request_error_1[(_0x2b94f5(0x1ca))](_0x3d64bd);}}async['getOne'](_0x42c1f6){const _0x10af4a=a79_0x58e079;try{const _0x38061d=await this[_0x10af4a(0x1f3)]['get']('webhooks/'+_0x42c1f6);return hook_dto_1['HookDto'][_0x10af4a(0x1c7)](_0x38061d);}catch(_0x4c9926){throw new not_found_error_1[(_0x10af4a(0x1de))](_0x4c9926);}}async[a79_0x58e079(0x1e3)](){const _0x312ea9=a79_0x58e079;try{const _0x3dad76=await this[_0x312ea9(0x1f3)][_0x312ea9(0x1e5)](_0x312ea9(0x1d9));return _0x3dad76['values'][_0x312ea9(0x1cc)](_0x4b046c=>hook_dto_1[_0x312ea9(0x1e2)][_0x312ea9(0x1c7)](_0x4b046c));}catch(_0x17c419){throw new not_found_error_1[(_0x312ea9(0x1de))](_0x17c419);}}async['update'](_0x53605b,_0x35fcd5){const _0x474b1f=a79_0x58e079;try{const _0x4d1929=await this[_0x474b1f(0x1f3)][_0x474b1f(0x1d6)](_0x474b1f(0x1ea)+_0x53605b,_0x35fcd5);return hook_dto_1[_0x474b1f(0x1e2)][_0x474b1f(0x1c7)](_0x4d1929);}catch(_0x32d967){throw new not_found_error_1[(_0x474b1f(0x1de))](_0x32d967);}}async[a79_0x58e079(0x1e4)](_0x5af16b){const _0x2a12f9=a79_0x58e079;try{await this[_0x2a12f9(0x1f3)]['delete'](_0x2a12f9(0x1ea)+_0x5af16b);}catch(_0x5835b1){throw new not_found_error_1[(_0x2a12f9(0x1de))](_0x5835b1);}}}exports['BitbucketServerHookService']=BitbucketServerHookService;