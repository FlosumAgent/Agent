const a72_0x5de2=['__importDefault','GitHookService','getOne','../../git-api/services/github-api.service','return\x20/\x22\x20+\x20this\x20+\x20\x22/','55375qseuCB','defineProperty','typedi','1PsbDPs','update','hooks/','apply','repository','delete','428243AgWHgQ','GithubHookService','./git-hook.service','151820PixuNa','map','__esModule','hooks','HookDto','440988OASoYL','NotFoundError','request','post','getAll','BadRequestError','patch','apiUrl','50275gUixav','376952Ltvcrc','../dto/hook.dto','test','fromGithub','7NVUFqd','createRequest','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','20095uUcyWp','constructor','get'];const a72_0x3c5103=a72_0x468a;(function(_0x50db13,_0x97e38c){const _0x376710=a72_0x468a;while(!![]){try{const _0x569311=parseInt(_0x376710(0xb6))+parseInt(_0x376710(0xda))+-parseInt(_0x376710(0xbe))+parseInt(_0x376710(0xd1))*-parseInt(_0x376710(0xd7))+-parseInt(_0x376710(0xc3))*parseInt(_0x376710(0xc6))+parseInt(_0x376710(0xbf))+-parseInt(_0x376710(0xce));if(_0x569311===_0x97e38c)break;else _0x50db13['push'](_0x50db13['shift']());}catch(_0x637ef3){_0x50db13['push'](_0x50db13['shift']());}}}(a72_0x5de2,0x48122));const a72_0x36ae6e=function(){let _0x3c04a1=!![];return function(_0xaf73b5,_0x59ef1b){const _0x8ea92d=_0x3c04a1?function(){const _0x4ce461=a72_0x468a;if(_0x59ef1b){const _0x48e937=_0x59ef1b[_0x4ce461(0xd4)](_0xaf73b5,arguments);return _0x59ef1b=null,_0x48e937;}}:function(){};return _0x3c04a1=![],_0x8ea92d;};}(),a72_0x5406d5=a72_0x36ae6e(this,function(){const _0x5f01ba=function(){const _0xa1b11a=a72_0x468a,_0x2ee07b=_0x5f01ba[_0xa1b11a(0xc7)](_0xa1b11a(0xcd))()[_0xa1b11a(0xc7)](_0xa1b11a(0xc5));return!_0x2ee07b[_0xa1b11a(0xc1)](a72_0x5406d5);};return _0x5f01ba();});a72_0x5406d5();'use strict';var __importDefault=this&&this[a72_0x3c5103(0xc9)]||function(_0x3b9352){return _0x3b9352&&_0x3b9352['__esModule']?_0x3b9352:{'default':_0x3b9352};};Object[a72_0x3c5103(0xcf)](exports,a72_0x3c5103(0xb3),{'value':!![]}),exports[a72_0x3c5103(0xd8)]=void 0x0;function a72_0x468a(_0x131394,_0x4df04c){return a72_0x468a=function(_0x202fac,_0x5406d5){_0x202fac=_0x202fac-0xb3;let _0x36ae6e=a72_0x5de2[_0x202fac];return _0x36ae6e;},a72_0x468a(_0x131394,_0x4df04c);}const bad_request_error_1=require('../../../core/errors/bad-request.error'),not_found_error_1=require('../../../core/errors/not-found.error'),github_api_service_1=require(a72_0x3c5103(0xcc)),typedi_1=__importDefault(require(a72_0x3c5103(0xd0))),hook_dto_1=require(a72_0x3c5103(0xc0)),git_hook_service_1=require(a72_0x3c5103(0xd9));class GithubHookService extends git_hook_service_1[a72_0x3c5103(0xca)]{constructor(_0x4b34a3){const _0x50d99c=a72_0x3c5103;super(_0x4b34a3),this[_0x50d99c(0xb8)]=this[_0x50d99c(0xc4)]();}[a72_0x3c5103(0xc4)](){const _0x168a9a=a72_0x3c5103,_0x1a3bdd=typedi_1['default'][_0x168a9a(0xc8)](github_api_service_1['GithubApiService']);return _0x1a3bdd[_0x168a9a(0xc4)](this[_0x168a9a(0xd5)][_0x168a9a(0xbd)]);}async['create'](_0x5c9c53){const _0x372e95=a72_0x3c5103;try{const _0x57fcb5=await this[_0x372e95(0xb8)][_0x372e95(0xb9)]('hooks',_0x5c9c53);return hook_dto_1[_0x372e95(0xb5)][_0x372e95(0xc2)](_0x57fcb5);}catch(_0x1d509d){throw new bad_request_error_1[(_0x372e95(0xbb))](_0x1d509d);}}async[a72_0x3c5103(0xcb)](_0x4aa908){const _0x1dff1d=a72_0x3c5103;try{const _0xf4ba31=await this[_0x1dff1d(0xb8)][_0x1dff1d(0xc8)](_0x1dff1d(0xd3)+_0x4aa908);return hook_dto_1['HookDto'][_0x1dff1d(0xc2)](_0xf4ba31);}catch(_0x913758){throw new not_found_error_1[(_0x1dff1d(0xb7))](_0x913758);}}async[a72_0x3c5103(0xba)](){const _0x27c63c=a72_0x3c5103;try{const _0x55f468=await this[_0x27c63c(0xb8)][_0x27c63c(0xc8)](_0x27c63c(0xb4));return _0x55f468[_0x27c63c(0xdb)](_0x44eaab=>hook_dto_1[_0x27c63c(0xb5)][_0x27c63c(0xc2)](_0x44eaab));}catch(_0x2b46c8){throw new not_found_error_1[(_0x27c63c(0xb7))](_0x2b46c8);}}async[a72_0x3c5103(0xd2)](_0x51e36d,_0x768fb9){const _0x47a94d=a72_0x3c5103;try{const _0x359be1=await this[_0x47a94d(0xb8)][_0x47a94d(0xbc)](_0x47a94d(0xd3)+_0x51e36d,_0x768fb9);return hook_dto_1[_0x47a94d(0xb5)][_0x47a94d(0xc2)](_0x359be1);}catch(_0x389edd){throw new bad_request_error_1[(_0x47a94d(0xbb))](_0x389edd);}}async[a72_0x3c5103(0xd6)](_0x333c4f){const _0x3d0c82=a72_0x3c5103;try{await this[_0x3d0c82(0xb8)]['delete']('hooks/'+_0x333c4f);}catch(_0x5a53be){throw new bad_request_error_1['BadRequestError'](_0x5a53be);}}}exports[a72_0x3c5103(0xd8)]=GithubHookService;