const a52_0x57ea=['request','1XfisFY','./git-branch.service','20417XXwnXx','getOne','refs/branches','delete','__esModule','fromBitbucket','647zrfSxY','4337lTZGQg','NotFoundError','sha','values','create','164963nuiuuG','map','11QnYmsS','58lobfqO','738209uTmuUW','getAll','apiUrl','typedi','post','get','11bJOVWH','__importDefault','226089ZAaPvA','675709NPhOUC','../dto/branch.dto','test','../../../core/errors/bad-request.error','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../../../core/errors/not-found.error','constructor','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','2irCHSF','BranchDto','apply','name','../../git-api/services/bitbucket-api.service','382IAfmDW','BitbucketApiService','BitbucketBranchService','BadRequestError','createRequest'];const a52_0x2849a5=a52_0x5247;(function(_0x286cb5,_0x486d6c){const _0x33c640=a52_0x5247;while(!![]){try{const _0x17aea2=parseInt(_0x33c640(0xff))*-parseInt(_0x33c640(0xf7))+parseInt(_0x33c640(0xe8))*-parseInt(_0x33c640(0xf6))+parseInt(_0x33c640(0xee))*-parseInt(_0x33c640(0xdb))+parseInt(_0x33c640(0xe3))*-parseInt(_0x33c640(0xfc))+-parseInt(_0x33c640(0xf0))*-parseInt(_0x33c640(0xfe))+-parseInt(_0x33c640(0x100))+parseInt(_0x33c640(0xda))*parseInt(_0x33c640(0xd8));if(_0x17aea2===_0x486d6c)break;else _0x286cb5['push'](_0x286cb5['shift']());}catch(_0x50d38d){_0x286cb5['push'](_0x286cb5['shift']());}}}(a52_0x57ea,0x7281e));const a52_0xe5f8df=function(){let _0x2e21ec=!![];return function(_0x19cd46,_0x67d50f){const _0x29733d=_0x2e21ec?function(){const _0x2a026f=a52_0x5247;if(_0x67d50f){const _0x52fc53=_0x67d50f[_0x2a026f(0xe5)](_0x19cd46,arguments);return _0x67d50f=null,_0x52fc53;}}:function(){};return _0x2e21ec=![],_0x29733d;};}(),a52_0x5b0a01=a52_0xe5f8df(this,function(){const _0x53dbf0=function(){const _0x31e602=a52_0x5247,_0x5a80ec=_0x53dbf0[_0x31e602(0xe1)](_0x31e602(0xdf))()[_0x31e602(0xe1)](_0x31e602(0xe2));return!_0x5a80ec[_0x31e602(0xdd)](a52_0x5b0a01);};return _0x53dbf0();});a52_0x5b0a01();'use strict';var __importDefault=this&&this[a52_0x2849a5(0xd9)]||function(_0x1d5365){const _0x4ad442=a52_0x2849a5;return _0x1d5365&&_0x1d5365[_0x4ad442(0xf4)]?_0x1d5365:{'default':_0x1d5365};};Object['defineProperty'](exports,a52_0x2849a5(0xf4),{'value':!![]}),exports[a52_0x2849a5(0xea)]=void 0x0;const bad_request_error_1=require(a52_0x2849a5(0xde)),not_found_error_1=require(a52_0x2849a5(0xe0)),bitbucket_api_service_1=require(a52_0x2849a5(0xe7)),typedi_1=__importDefault(require(a52_0x2849a5(0xd5))),branch_dto_1=require(a52_0x2849a5(0xdc)),git_branch_service_1=require(a52_0x2849a5(0xef));function a52_0x5247(_0x4f78e4,_0x2400bc){return a52_0x5247=function(_0x4e6f91,_0x5b0a01){_0x4e6f91=_0x4e6f91-0xd5;let _0xe5f8df=a52_0x57ea[_0x4e6f91];return _0xe5f8df;},a52_0x5247(_0x4f78e4,_0x2400bc);}class BitbucketBranchService extends git_branch_service_1['GitBranchService']{constructor(_0x5b844e){const _0x54827a=a52_0x2849a5;super(_0x5b844e),this[_0x54827a(0xed)]=this[_0x54827a(0xec)]();}[a52_0x2849a5(0xec)](){const _0x3d25da=a52_0x2849a5,_0x395f94=typedi_1['default'][_0x3d25da(0xd7)](bitbucket_api_service_1[_0x3d25da(0xe9)]);return _0x395f94['createRequest'](this['repository'][_0x3d25da(0x102)]);}async[a52_0x2849a5(0xfb)](_0x12193d){const _0x2ad6fe=a52_0x2849a5;try{const _0x389a56=await this[_0x2ad6fe(0xed)][_0x2ad6fe(0xd6)](_0x2ad6fe(0xf2),{'name':_0x12193d[_0x2ad6fe(0xe6)],'target':{'hash':_0x12193d[_0x2ad6fe(0xf9)]}});return branch_dto_1[_0x2ad6fe(0xe4)][_0x2ad6fe(0xf5)](_0x389a56);}catch(_0x17842b){throw new bad_request_error_1[(_0x2ad6fe(0xeb))](_0x17842b);}}async[a52_0x2849a5(0xf1)](_0xf2fe59){const _0x3c1398=a52_0x2849a5;try{const _0x3117f8=await this[_0x3c1398(0xed)]['get']('refs/branches/'+_0xf2fe59);return branch_dto_1[_0x3c1398(0xe4)]['fromBitbucket'](_0x3117f8);}catch(_0x5d442d){throw new not_found_error_1[(_0x3c1398(0xf8))](_0x5d442d);}}async[a52_0x2849a5(0x101)](){const _0x15cdf0=a52_0x2849a5;try{const _0x2c29d6=await this['request'][_0x15cdf0(0xd7)](_0x15cdf0(0xf2));return _0x2c29d6[_0x15cdf0(0xfa)][_0x15cdf0(0xfd)](_0x55fe1a=>branch_dto_1[_0x15cdf0(0xe4)][_0x15cdf0(0xf5)](_0x55fe1a));}catch(_0x497ce2){throw new not_found_error_1[(_0x15cdf0(0xf8))](_0x497ce2);}}async['delete'](_0x53cd07){const _0x2caa80=a52_0x2849a5;try{await this[_0x2caa80(0xed)][_0x2caa80(0xf3)]('refs/branches/'+_0x53cd07);}catch(_0x150e06){throw new not_found_error_1['NotFoundError'](_0x150e06);}}}exports[a52_0x2849a5(0xea)]=BitbucketBranchService;