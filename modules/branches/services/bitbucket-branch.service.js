const a52_0xcb47c4=a52_0xce72;(function(_0x3fdbec,_0x2bca56){const _0x213ddf=a52_0xce72,_0x1d99ba=_0x3fdbec();while(!![]){try{const _0x3216df=-parseInt(_0x213ddf(0x143))/0x1+parseInt(_0x213ddf(0x13d))/0x2*(-parseInt(_0x213ddf(0x121))/0x3)+parseInt(_0x213ddf(0x137))/0x4+parseInt(_0x213ddf(0x130))/0x5*(parseInt(_0x213ddf(0x134))/0x6)+-parseInt(_0x213ddf(0x125))/0x7+-parseInt(_0x213ddf(0x141))/0x8*(-parseInt(_0x213ddf(0x135))/0x9)+-parseInt(_0x213ddf(0x132))/0xa*(-parseInt(_0x213ddf(0x129))/0xb);if(_0x3216df===_0x2bca56)break;else _0x1d99ba['push'](_0x1d99ba['shift']());}catch(_0x275cda){_0x1d99ba['push'](_0x1d99ba['shift']());}}}(a52_0x2b1c,0xe9bcc));const a52_0x5ad22f=function(){let _0xcbd85e=!![];return function(_0x36a110,_0x428165){const _0x3cb1d2=_0xcbd85e?function(){const _0x533377=a52_0xce72;if(_0x428165){const _0x5cb078=_0x428165[_0x533377(0x122)](_0x36a110,arguments);return _0x428165=null,_0x5cb078;}}:function(){};return _0xcbd85e=![],_0x3cb1d2;};}(),a52_0x2d8b5c=a52_0x5ad22f(this,function(){const _0x452c07=a52_0xce72;return a52_0x2d8b5c['toString']()[_0x452c07(0x133)](_0x452c07(0x12a))[_0x452c07(0x12c)]()[_0x452c07(0x142)](a52_0x2d8b5c)[_0x452c07(0x133)](_0x452c07(0x12a));});a52_0x2d8b5c();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x425511){const _0x3b3faa=a52_0xce72;return _0x425511&&_0x425511[_0x3b3faa(0x127)]?_0x425511:{'default':_0x425511};};function a52_0x2b1c(){const _0x26fdb5=['6722iqAwWT','createRequest','refs/branches/','get','14872xbYWmS','constructor','352758WqywPI','apiUrl','NotFoundError','1653BVBYNg','apply','../../../core/errors/not-found.error','BitbucketApiService','2364320gAKDbf','getAll','__esModule','typedi','33SvaBiV','(((.+)+)+)+$','repository','toString','request','delete','fromBitbucket','1567990GbDlJx','BranchDto','5270570dEHWPi','search','6TbzomW','6651dBASMe','refs/branches','924988hPWVyb','BitbucketBranchService','../dto/branch.dto','../../git-api/services/bitbucket-api.service','GitBranchService','defineProperty'];a52_0x2b1c=function(){return _0x26fdb5;};return a52_0x2b1c();}Object[a52_0xcb47c4(0x13c)](exports,a52_0xcb47c4(0x127),{'value':!![]}),exports[a52_0xcb47c4(0x138)]=void 0x0;const not_found_error_1=require(a52_0xcb47c4(0x123)),bitbucket_api_service_1=require(a52_0xcb47c4(0x13a)),typedi_1=__importDefault(require(a52_0xcb47c4(0x128))),branch_dto_1=require(a52_0xcb47c4(0x139)),git_branch_service_1=require('./git-branch.service');function a52_0xce72(_0x29e025,_0xee7a4c){const _0x2fd49b=a52_0x2b1c();return a52_0xce72=function(_0x2d8b5c,_0x5ad22f){_0x2d8b5c=_0x2d8b5c-0x121;let _0x2b1c43=_0x2fd49b[_0x2d8b5c];return _0x2b1c43;},a52_0xce72(_0x29e025,_0xee7a4c);}class BitbucketBranchService extends git_branch_service_1[a52_0xcb47c4(0x13b)]{constructor(_0x97e91d){const _0x3e4d27=a52_0xcb47c4;super(_0x97e91d),this['request']=this[_0x3e4d27(0x13e)]();}[a52_0xcb47c4(0x13e)](){const _0x2d7495=a52_0xcb47c4,_0x2a46f0=typedi_1['default'][_0x2d7495(0x140)](bitbucket_api_service_1[_0x2d7495(0x124)]);return _0x2a46f0[_0x2d7495(0x13e)](this[_0x2d7495(0x12b)][_0x2d7495(0x144)]);}async['getOne'](_0x1bc50e){const _0x46f2be=a52_0xcb47c4;try{const _0x299288=await this[_0x46f2be(0x12d)][_0x46f2be(0x140)](_0x46f2be(0x13f)+_0x1bc50e);return branch_dto_1[_0x46f2be(0x131)]['fromBitbucket'](_0x299288);}catch(_0x300bbb){throw new not_found_error_1[(_0x46f2be(0x145))](_0x300bbb);}}async[a52_0xcb47c4(0x126)](){const _0x4151f0=a52_0xcb47c4;try{const _0x1cb287=await this[_0x4151f0(0x12d)][_0x4151f0(0x140)](_0x4151f0(0x136));return _0x1cb287['values']['map'](_0x3afe31=>branch_dto_1[_0x4151f0(0x131)][_0x4151f0(0x12f)](_0x3afe31));}catch(_0x17e380){throw new not_found_error_1['NotFoundError'](_0x17e380);}}async[a52_0xcb47c4(0x12e)](_0x429e15){const _0x365cc0=a52_0xcb47c4;try{await this[_0x365cc0(0x12d)]['delete'](_0x365cc0(0x13f)+_0x429e15);}catch(_0x48339e){throw new not_found_error_1[(_0x365cc0(0x145))](_0x48339e);}}}exports[a52_0xcb47c4(0x138)]=BitbucketBranchService;