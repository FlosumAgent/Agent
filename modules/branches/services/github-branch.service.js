const a55_0x290f=['../../../core/errors/bad-request.error','test','58148tiMyCu','GithubBranchService','GitBranchService','21445BtWBuK','apply','git/refs/heads/','1zaRVAD','128147XqVNAQ','branches','delete','../../../core/errors/not-found.error','__esModule','createRequest','1npkjdE','55382ZpsPVa','fromGithub','return\x20/\x22\x20+\x20this\x20+\x20\x22/','map','defineProperty','BranchDto','../dto/branch.dto','../../git-api/services/github-api.service','get','__importDefault','repository','request','default','386731wXqUqM','./git-branch.service','branches/','36175qnuMLK','typedi','6833IehtdE','5fAKKtr','2NMkxcc','constructor','NotFoundError'];const a55_0x1afb89=a55_0x5c11;(function(_0xc0daa9,_0x308adf){const _0x36ef00=a55_0x5c11;while(!![]){try{const _0x1e8586=parseInt(_0x36ef00(0x114))*parseInt(_0x36ef00(0x101))+-parseInt(_0x36ef00(0xf4))+-parseInt(_0x36ef00(0x102))*-parseInt(_0x36ef00(0x115))+parseInt(_0x36ef00(0xf7))+parseInt(_0x36ef00(0x112))+parseInt(_0x36ef00(0xfb))*parseInt(_0x36ef00(0x116))+-parseInt(_0x36ef00(0xfa))*parseInt(_0x36ef00(0x10f));if(_0x1e8586===_0x308adf)break;else _0xc0daa9['push'](_0xc0daa9['shift']());}catch(_0x6117de){_0xc0daa9['push'](_0xc0daa9['shift']());}}}(a55_0x290f,0x254ca));const a55_0x443fe0=function(){let _0x8d18d7=!![];return function(_0x38c1eb,_0x1464da){const _0x5d8be6=_0x8d18d7?function(){const _0x327929=a55_0x5c11;if(_0x1464da){const _0x40317b=_0x1464da[_0x327929(0xf8)](_0x38c1eb,arguments);return _0x1464da=null,_0x40317b;}}:function(){};return _0x8d18d7=![],_0x5d8be6;};}(),a55_0x1cb94c=a55_0x443fe0(this,function(){const _0x536328=function(){const _0xd68591=a55_0x5c11,_0x3805b0=_0x536328[_0xd68591(0x117)](_0xd68591(0x104))()[_0xd68591(0x117)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x3805b0[_0xd68591(0xf3)](a55_0x1cb94c);};return _0x536328();});a55_0x1cb94c();'use strict';function a55_0x5c11(_0x3d0152,_0x456daf){return a55_0x5c11=function(_0x2d9e3e,_0x1cb94c){_0x2d9e3e=_0x2d9e3e-0xf2;let _0x443fe0=a55_0x290f[_0x2d9e3e];return _0x443fe0;},a55_0x5c11(_0x3d0152,_0x456daf);}var __importDefault=this&&this[a55_0x1afb89(0x10b)]||function(_0x1c3c3a){const _0x561443=a55_0x1afb89;return _0x1c3c3a&&_0x1c3c3a[_0x561443(0xff)]?_0x1c3c3a:{'default':_0x1c3c3a};};Object[a55_0x1afb89(0x106)](exports,'__esModule',{'value':!![]}),exports[a55_0x1afb89(0xf5)]=void 0x0;const bad_request_error_1=require(a55_0x1afb89(0xf2)),not_found_error_1=require(a55_0x1afb89(0xfe)),github_api_service_1=require(a55_0x1afb89(0x109)),typedi_1=__importDefault(require(a55_0x1afb89(0x113))),branch_dto_1=require(a55_0x1afb89(0x108)),git_branch_service_1=require(a55_0x1afb89(0x110));class GithubBranchService extends git_branch_service_1[a55_0x1afb89(0xf6)]{constructor(_0x177486){super(_0x177486),this['request']=this['createRequest']();}[a55_0x1afb89(0x100)](){const _0x4f2f77=a55_0x1afb89,_0x35c9c5=typedi_1[_0x4f2f77(0x10e)][_0x4f2f77(0x10a)](github_api_service_1['GithubApiService']);return _0x35c9c5[_0x4f2f77(0x100)](this[_0x4f2f77(0x10c)]['apiUrl']);}async['getOne'](_0x1c9e9f){const _0x36e345=a55_0x1afb89;try{const _0x361eab=await this[_0x36e345(0x10d)]['get'](_0x36e345(0x111)+_0x1c9e9f);return branch_dto_1[_0x36e345(0x107)]['fromGithub'](_0x361eab);}catch(_0x4dc9d4){throw new not_found_error_1[(_0x36e345(0x118))](_0x4dc9d4);}}async['getAll'](){const _0x7ede6f=a55_0x1afb89;try{const _0x113788=await this[_0x7ede6f(0x10d)][_0x7ede6f(0x10a)](_0x7ede6f(0xfc));return _0x113788[_0x7ede6f(0x105)](_0xbb711d=>branch_dto_1[_0x7ede6f(0x107)][_0x7ede6f(0x103)](_0xbb711d));}catch(_0x3df6ea){throw new not_found_error_1[(_0x7ede6f(0x118))](_0x3df6ea);}}async[a55_0x1afb89(0xfd)](_0x28b252){const _0x5c0dbb=a55_0x1afb89;try{await this[_0x5c0dbb(0x10d)][_0x5c0dbb(0xfd)](_0x5c0dbb(0xf9)+_0x28b252);}catch(_0x43a101){throw new bad_request_error_1['BadRequestError'](_0x43a101);}}}exports[a55_0x1afb89(0xf5)]=GithubBranchService;