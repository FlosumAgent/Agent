const a52_0x1390=['constructor','typedi','apiUrl','BitbucketBranchService','1zHQgrS','sha','getOne','17026nfIexL','./git-branch.service','1itrLlm','delete','137819WMwQyu','1YBdSZQ','fromBitbucket','39857lLYRnd','get','apply','create','post','getAll','NotFoundError','BranchDto','request','916189ZeZGHC','return\x20/\x22\x20+\x20this\x20+\x20\x22/','BitbucketApiService','default','values','331491gONNBm','../dto/branch.dto','refs/branches/','repository','__esModule','833491jQRJAp','createRequest','7SOfIJm','map','GitBranchService','796687FYuzzO','refs/branches','2umHZZb','../../../core/errors/bad-request.error'];const a52_0x5bf81c=a52_0x53ad;(function(_0x555ba0,_0x5003c9){const _0x41024b=a52_0x53ad;while(!![]){try{const _0x2a53be=-parseInt(_0x41024b(0x1cc))*-parseInt(_0x41024b(0x1b7))+-parseInt(_0x41024b(0x1b5))*parseInt(_0x41024b(0x1c5))+-parseInt(_0x41024b(0x1ca))+parseInt(_0x41024b(0x1b2))*parseInt(_0x41024b(0x1cf))+-parseInt(_0x41024b(0x1b4))+parseInt(_0x41024b(0x1d7))*parseInt(_0x41024b(0x1c0))+parseInt(_0x41024b(0x1b0))*parseInt(_0x41024b(0x1d1));if(_0x2a53be===_0x5003c9)break;else _0x555ba0['push'](_0x555ba0['shift']());}catch(_0x4600ce){_0x555ba0['push'](_0x555ba0['shift']());}}}(a52_0x1390,0xb08b6));const a52_0x11952d=function(){let _0x48c40a=!![];return function(_0x1cd8e3,_0x311645){const _0x36dcd3=_0x48c40a?function(){const _0x4014c9=a52_0x53ad;if(_0x311645){const _0x58b943=_0x311645[_0x4014c9(0x1b9)](_0x1cd8e3,arguments);return _0x311645=null,_0x58b943;}}:function(){};return _0x48c40a=![],_0x36dcd3;};}(),a52_0x1b9d03=a52_0x11952d(this,function(){const _0x5e35e9=function(){const _0x460502=a52_0x53ad,_0x1e6aea=_0x5e35e9['constructor'](_0x460502(0x1c1))()[_0x460502(0x1d3)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x1e6aea['test'](a52_0x1b9d03);};return _0x5e35e9();});a52_0x1b9d03();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4bf5ef){const _0x1e80a8=a52_0x53ad;return _0x4bf5ef&&_0x4bf5ef[_0x1e80a8(0x1c9)]?_0x4bf5ef:{'default':_0x4bf5ef};};Object['defineProperty'](exports,a52_0x5bf81c(0x1c9),{'value':!![]}),exports['BitbucketBranchService']=void 0x0;function a52_0x53ad(_0x146282,_0x4037d9){return a52_0x53ad=function(_0x4c2ed5,_0x1b9d03){_0x4c2ed5=_0x4c2ed5-0x1af;let _0x11952d=a52_0x1390[_0x4c2ed5];return _0x11952d;},a52_0x53ad(_0x146282,_0x4037d9);}const bad_request_error_1=require(a52_0x5bf81c(0x1d2)),not_found_error_1=require('../../../core/errors/not-found.error'),bitbucket_api_service_1=require('../../git-api/services/bitbucket-api.service'),typedi_1=__importDefault(require(a52_0x5bf81c(0x1d4))),branch_dto_1=require(a52_0x5bf81c(0x1c6)),git_branch_service_1=require(a52_0x5bf81c(0x1b1));class BitbucketBranchService extends git_branch_service_1[a52_0x5bf81c(0x1ce)]{constructor(_0x3ba17f){const _0xf251dc=a52_0x5bf81c;super(_0x3ba17f),this[_0xf251dc(0x1bf)]=this[_0xf251dc(0x1cb)]();}[a52_0x5bf81c(0x1cb)](){const _0x61612e=a52_0x5bf81c,_0x3f7fb2=typedi_1[_0x61612e(0x1c3)]['get'](bitbucket_api_service_1[_0x61612e(0x1c2)]);return _0x3f7fb2[_0x61612e(0x1cb)](this[_0x61612e(0x1c8)][_0x61612e(0x1d5)]);}async[a52_0x5bf81c(0x1ba)](_0x6d0db7){const _0x1673af=a52_0x5bf81c;try{const _0x3037f2=await this[_0x1673af(0x1bf)][_0x1673af(0x1bb)](_0x1673af(0x1d0),{'name':_0x6d0db7['name'],'target':{'hash':_0x6d0db7[_0x1673af(0x1d8)]}});return branch_dto_1['BranchDto'][_0x1673af(0x1b6)](_0x3037f2);}catch(_0x27ee44){throw new bad_request_error_1['BadRequestError'](_0x27ee44);}}async[a52_0x5bf81c(0x1af)](_0x34632e){const _0x15e705=a52_0x5bf81c;try{const _0x3e45a7=await this[_0x15e705(0x1bf)][_0x15e705(0x1b8)](_0x15e705(0x1c7)+_0x34632e);return branch_dto_1[_0x15e705(0x1be)][_0x15e705(0x1b6)](_0x3e45a7);}catch(_0x4edc85){throw new not_found_error_1[(_0x15e705(0x1bd))](_0x4edc85);}}async[a52_0x5bf81c(0x1bc)](){const _0x3ed0fd=a52_0x5bf81c;try{const _0x4a2e3f=await this[_0x3ed0fd(0x1bf)][_0x3ed0fd(0x1b8)](_0x3ed0fd(0x1d0));return _0x4a2e3f[_0x3ed0fd(0x1c4)][_0x3ed0fd(0x1cd)](_0x22bfd6=>branch_dto_1[_0x3ed0fd(0x1be)][_0x3ed0fd(0x1b6)](_0x22bfd6));}catch(_0x1f0579){throw new not_found_error_1[(_0x3ed0fd(0x1bd))](_0x1f0579);}}async[a52_0x5bf81c(0x1b3)](_0x214068){const _0x4e8701=a52_0x5bf81c;try{await this[_0x4e8701(0x1bf)]['delete'](_0x4e8701(0x1c7)+_0x214068);}catch(_0x510435){throw new not_found_error_1['NotFoundError'](_0x510435);}}}exports[a52_0x5bf81c(0x1d6)]=BitbucketBranchService;