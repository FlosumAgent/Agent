const a76_0x9be51=a76_0x2db9;(function(_0x4126df,_0x362018){const _0x5d859f=a76_0x2db9,_0x4a3d35=_0x4126df();while(!![]){try{const _0x10405f=parseInt(_0x5d859f(0xa7))/0x1*(parseInt(_0x5d859f(0x9a))/0x2)+parseInt(_0x5d859f(0x99))/0x3*(parseInt(_0x5d859f(0xa0))/0x4)+-parseInt(_0x5d859f(0xa3))/0x5+parseInt(_0x5d859f(0x90))/0x6+-parseInt(_0x5d859f(0x94))/0x7*(-parseInt(_0x5d859f(0x92))/0x8)+parseInt(_0x5d859f(0x86))/0x9+parseInt(_0x5d859f(0x8b))/0xa*(-parseInt(_0x5d859f(0x9c))/0xb);if(_0x10405f===_0x362018)break;else _0x4a3d35['push'](_0x4a3d35['shift']());}catch(_0x4fa5cf){_0x4a3d35['push'](_0x4a3d35['shift']());}}}(a76_0x8320,0x999f6));function a76_0x2db9(_0xc1bd17,_0x311662){const _0x4fe014=a76_0x8320();return a76_0x2db9=function(_0x5b2b0d,_0x23dec7){_0x5b2b0d=_0x5b2b0d-0x83;let _0x83209b=_0x4fe014[_0x5b2b0d];return _0x83209b;},a76_0x2db9(_0xc1bd17,_0x311662);}const a76_0x23dec7=function(){let _0x5e8154=!![];return function(_0x37dbf8,_0x3bc599){const _0xca16ee=_0x5e8154?function(){if(_0x3bc599){const _0x3cfa76=_0x3bc599['apply'](_0x37dbf8,arguments);return _0x3bc599=null,_0x3cfa76;}}:function(){};return _0x5e8154=![],_0xca16ee;};}(),a76_0x5b2b0d=a76_0x23dec7(this,function(){const _0x51fcfb=a76_0x2db9;return a76_0x5b2b0d[_0x51fcfb(0x93)]()[_0x51fcfb(0xa5)](_0x51fcfb(0x91))[_0x51fcfb(0x93)]()['constructor'](a76_0x5b2b0d)[_0x51fcfb(0xa5)](_0x51fcfb(0x91));});a76_0x5b2b0d();'use strict';function a76_0x8320(){const _0x49a4ab=['default','fromGithub','6DLHorr','4axRtWL','request','11yaJwCZ','hooks/','createRequest','getAll','2419316sqbJIg','BadRequestError','create','4648165jlFEJR','get','search','delete','291654BIapWM','../../../core/errors/not-found.error','hooks','repository','9581616XShUPg','typedi','patch','apiUrl','defineProperty','32074330zWydqt','../../../core/errors/bad-request.error','__esModule','GithubApiService','HookDto','4040910fwerRn','(((.+)+)+)+$','8KWbaAW','toString','8646603mJFoIA','NotFoundError','post'];a76_0x8320=function(){return _0x49a4ab;};return a76_0x8320();}var __importDefault=this&&this['__importDefault']||function(_0x51add4){const _0x3f7a21=a76_0x2db9;return _0x51add4&&_0x51add4[_0x3f7a21(0x8d)]?_0x51add4:{'default':_0x51add4};};Object[a76_0x9be51(0x8a)](exports,a76_0x9be51(0x8d),{'value':!![]}),exports['GithubHookService']=void 0x0;const bad_request_error_1=require(a76_0x9be51(0x8c)),not_found_error_1=require(a76_0x9be51(0x83)),github_api_service_1=require('../../git-api/services/github-api.service'),typedi_1=__importDefault(require(a76_0x9be51(0x87))),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require('./git-hook.service');class GithubHookService extends git_hook_service_1['GitHookService']{constructor(_0x465b0c){const _0x20960d=a76_0x9be51;super(_0x465b0c),this['request']=this[_0x20960d(0x9e)]();}[a76_0x9be51(0x9e)](){const _0x35ac07=a76_0x9be51,_0x324187=typedi_1[_0x35ac07(0x97)]['get'](github_api_service_1[_0x35ac07(0x8e)]);return _0x324187[_0x35ac07(0x9e)](this[_0x35ac07(0x85)][_0x35ac07(0x89)]);}async[a76_0x9be51(0xa2)](_0x330fdf){const _0x12e52d=a76_0x9be51;try{const _0x1e7cc1=await this[_0x12e52d(0x9b)][_0x12e52d(0x96)]('hooks',_0x330fdf);return hook_dto_1[_0x12e52d(0x8f)][_0x12e52d(0x98)](_0x1e7cc1);}catch(_0x5d2866){throw new bad_request_error_1[(_0x12e52d(0xa1))](_0x5d2866);}}async['getOne'](_0x391f19){const _0x432987=a76_0x9be51;try{const _0x1e2efa=await this[_0x432987(0x9b)][_0x432987(0xa4)](_0x432987(0x9d)+_0x391f19);return hook_dto_1['HookDto'][_0x432987(0x98)](_0x1e2efa);}catch(_0x1ed064){throw new not_found_error_1[(_0x432987(0x95))](_0x1ed064);}}async[a76_0x9be51(0x9f)](){const _0x63a95c=a76_0x9be51;try{const _0x491d0e=await this['request'][_0x63a95c(0xa4)](_0x63a95c(0x84));return _0x491d0e['map'](_0x4b3c5b=>hook_dto_1[_0x63a95c(0x8f)][_0x63a95c(0x98)](_0x4b3c5b));}catch(_0x500657){throw new not_found_error_1['NotFoundError'](_0x500657);}}async['update'](_0x2f1baa,_0x3f5277){const _0x51265e=a76_0x9be51;try{const _0x489215=await this['request'][_0x51265e(0x88)](_0x51265e(0x9d)+_0x2f1baa,_0x3f5277);return hook_dto_1[_0x51265e(0x8f)]['fromGithub'](_0x489215);}catch(_0x5484fd){throw new bad_request_error_1['BadRequestError'](_0x5484fd);}}async['delete'](_0x76356e){const _0x8cfe94=a76_0x9be51;try{await this[_0x8cfe94(0x9b)][_0x8cfe94(0xa6)](_0x8cfe94(0x9d)+_0x76356e);}catch(_0x8b0dec){throw new bad_request_error_1[(_0x8cfe94(0xa1))](_0x8b0dec);}}}exports['GithubHookService']=GithubHookService;