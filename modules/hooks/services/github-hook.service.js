const a72_0x141e=['../../../core/errors/bad-request.error','fromGithub','typedi','NotFoundError','apiUrl','delete','../../../core/errors/not-found.error','getOne','93815hifbdp','GitHookService','createRequest','173984OcadTg','1ckQsKR','194256JAiIAD','31dQRnkS','151FMIcOl','request','HookDto','GithubHookService','get','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','17jwiylY','BadRequestError','93QXjFbu','hooks/','repository','55877aAHIaY','./git-hook.service','update','defineProperty','hooks','return\x20/\x22\x20+\x20this\x20+\x20\x22/','6011xPKQqJ','16447BAPplq','map','test','__esModule','2HrtIyU','__importDefault'];const a72_0x253f2f=a72_0x1318;(function(_0x429e61,_0x2f8da9){const _0x21de46=a72_0x1318;while(!![]){try{const _0x1feab7=parseInt(_0x21de46(0x168))*parseInt(_0x21de46(0x156))+-parseInt(_0x21de46(0x153))+parseInt(_0x21de46(0x169))*-parseInt(_0x21de46(0x15d))+-parseInt(_0x21de46(0x157))*parseInt(_0x21de46(0x15f))+-parseInt(_0x21de46(0x16d))*-parseInt(_0x21de46(0x150))+parseInt(_0x21de46(0x155))+-parseInt(_0x21de46(0x162))*-parseInt(_0x21de46(0x154));if(_0x1feab7===_0x2f8da9)break;else _0x429e61['push'](_0x429e61['shift']());}catch(_0x3cfebb){_0x429e61['push'](_0x429e61['shift']());}}}(a72_0x141e,0x2633e));const a72_0x43d8c8=function(){let _0x417cd3=!![];return function(_0x4241dd,_0x28e323){const _0x31fadf=_0x417cd3?function(){if(_0x28e323){const _0x3b66c3=_0x28e323['apply'](_0x4241dd,arguments);return _0x28e323=null,_0x3b66c3;}}:function(){};return _0x417cd3=![],_0x31fadf;};}(),a72_0x1ac37e=a72_0x43d8c8(this,function(){const _0x137209=function(){const _0x314857=a72_0x1318,_0x762e96=_0x137209['constructor'](_0x314857(0x167))()['constructor'](_0x314857(0x15c));return!_0x762e96[_0x314857(0x16b)](a72_0x1ac37e);};return _0x137209();});function a72_0x1318(_0x18992e,_0x12645a){return a72_0x1318=function(_0x410cec,_0x1ac37e){_0x410cec=_0x410cec-0x14f;let _0x43d8c8=a72_0x141e[_0x410cec];return _0x43d8c8;},a72_0x1318(_0x18992e,_0x12645a);}a72_0x1ac37e();'use strict';var __importDefault=this&&this[a72_0x253f2f(0x16e)]||function(_0x16ec20){const _0x508591=a72_0x253f2f;return _0x16ec20&&_0x16ec20[_0x508591(0x16c)]?_0x16ec20:{'default':_0x16ec20};};Object[a72_0x253f2f(0x165)](exports,a72_0x253f2f(0x16c),{'value':!![]}),exports[a72_0x253f2f(0x15a)]=void 0x0;const bad_request_error_1=require(a72_0x253f2f(0x16f)),not_found_error_1=require(a72_0x253f2f(0x175)),github_api_service_1=require('../../git-api/services/github-api.service'),typedi_1=__importDefault(require(a72_0x253f2f(0x171))),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require(a72_0x253f2f(0x163));class GithubHookService extends git_hook_service_1[a72_0x253f2f(0x151)]{constructor(_0x2e6c54){const _0x247457=a72_0x253f2f;super(_0x2e6c54),this[_0x247457(0x158)]=this[_0x247457(0x152)]();}['createRequest'](){const _0x5d78c3=a72_0x253f2f,_0x318e53=typedi_1['default'][_0x5d78c3(0x15b)](github_api_service_1['GithubApiService']);return _0x318e53[_0x5d78c3(0x152)](this[_0x5d78c3(0x161)][_0x5d78c3(0x173)]);}async['create'](_0x28cafa){const _0x39a0cc=a72_0x253f2f;try{const _0x386c84=await this[_0x39a0cc(0x158)]['post'](_0x39a0cc(0x166),_0x28cafa);return hook_dto_1[_0x39a0cc(0x159)]['fromGithub'](_0x386c84);}catch(_0x143c65){throw new bad_request_error_1[(_0x39a0cc(0x15e))](_0x143c65);}}async[a72_0x253f2f(0x14f)](_0x3a54b7){const _0xfe442e=a72_0x253f2f;try{const _0x3ff71f=await this[_0xfe442e(0x158)][_0xfe442e(0x15b)](_0xfe442e(0x160)+_0x3a54b7);return hook_dto_1['HookDto'][_0xfe442e(0x170)](_0x3ff71f);}catch(_0x4fc109){throw new not_found_error_1[(_0xfe442e(0x172))](_0x4fc109);}}async['getAll'](){const _0x23cd48=a72_0x253f2f;try{const _0x1d0aa3=await this[_0x23cd48(0x158)][_0x23cd48(0x15b)]('hooks');return _0x1d0aa3[_0x23cd48(0x16a)](_0x3466a8=>hook_dto_1[_0x23cd48(0x159)][_0x23cd48(0x170)](_0x3466a8));}catch(_0x39eb9a){throw new not_found_error_1[(_0x23cd48(0x172))](_0x39eb9a);}}async[a72_0x253f2f(0x164)](_0x89f88d,_0x470fd6){const _0x3dc0b0=a72_0x253f2f;try{const _0x2aab13=await this[_0x3dc0b0(0x158)]['patch']('hooks/'+_0x89f88d,_0x470fd6);return hook_dto_1['HookDto'][_0x3dc0b0(0x170)](_0x2aab13);}catch(_0xa62969){throw new bad_request_error_1[(_0x3dc0b0(0x15e))](_0xa62969);}}async[a72_0x253f2f(0x174)](_0x38ecc7){const _0x5e500e=a72_0x253f2f;try{await this[_0x5e500e(0x158)][_0x5e500e(0x174)](_0x5e500e(0x160)+_0x38ecc7);}catch(_0x4dc13b){throw new bad_request_error_1[(_0x5e500e(0x15e))](_0x4dc13b);}}}exports[a72_0x253f2f(0x15a)]=GithubHookService;