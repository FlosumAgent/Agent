const a55_0x366b=['createRequest','242116RxIQeS','constructor','defineProperty','typedi','getAll','__importDefault','__esModule','map','NotFoundError','18638osznFw','18420BwCJKJ','get','GitBranchService','3133ZMYOkc','default','apiUrl','76512gjlioJ','1DGvauY','getOne','GithubBranchService','./git-branch.service','request','repository','../dto/branch.dto','61Wiazzf','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../../../core/errors/bad-request.error','GithubApiService','BadRequestError','70349QjDgcX','168429Nepwbw','test'];const a55_0x4dc1e3=a55_0x207f;(function(_0x308b2a,_0xbed2fd){const _0x1b6076=a55_0x207f;while(!![]){try{const _0x265cfb=-parseInt(_0x1b6076(0x7d))*-parseInt(_0x1b6076(0x88))+-parseInt(_0x1b6076(0x8d))+parseInt(_0x1b6076(0x80))+parseInt(_0x1b6076(0x79))*parseInt(_0x1b6076(0x81))+parseInt(_0x1b6076(0x7a))+-parseInt(_0x1b6076(0x91))+parseInt(_0x1b6076(0x8e));if(_0x265cfb===_0xbed2fd)break;else _0x308b2a['push'](_0x308b2a['shift']());}catch(_0x4324ab){_0x308b2a['push'](_0x308b2a['shift']());}}}(a55_0x366b,0x27387));const a55_0x1d7f43=function(){let _0x397d42=!![];return function(_0x261b77,_0x13c367){const _0x59399b=_0x397d42?function(){if(_0x13c367){const _0x458ff2=_0x13c367['apply'](_0x261b77,arguments);return _0x13c367=null,_0x458ff2;}}:function(){};return _0x397d42=![],_0x59399b;};}(),a55_0x89e599=a55_0x1d7f43(this,function(){const _0xc43558=function(){const _0x143060=a55_0x207f,_0x1e243a=_0xc43558[_0x143060(0x92)](_0x143060(0x89))()[_0x143060(0x92)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x1e243a[_0x143060(0x8f)](a55_0x89e599);};return _0xc43558();});a55_0x89e599();'use strict';var __importDefault=this&&this[a55_0x4dc1e3(0x75)]||function(_0x20dff1){const _0x59d06d=a55_0x4dc1e3;return _0x20dff1&&_0x20dff1[_0x59d06d(0x76)]?_0x20dff1:{'default':_0x20dff1};};Object[a55_0x4dc1e3(0x93)](exports,a55_0x4dc1e3(0x76),{'value':!![]}),exports[a55_0x4dc1e3(0x83)]=void 0x0;function a55_0x207f(_0x3353ba,_0x5425fa){return a55_0x207f=function(_0x2a527a,_0x89e599){_0x2a527a=_0x2a527a-0x73;let _0x1d7f43=a55_0x366b[_0x2a527a];return _0x1d7f43;},a55_0x207f(_0x3353ba,_0x5425fa);}const bad_request_error_1=require(a55_0x4dc1e3(0x8a)),not_found_error_1=require('../../../core/errors/not-found.error'),github_api_service_1=require('../../git-api/services/github-api.service'),typedi_1=__importDefault(require(a55_0x4dc1e3(0x73))),branch_dto_1=require(a55_0x4dc1e3(0x87)),git_branch_service_1=require(a55_0x4dc1e3(0x84));class GithubBranchService extends git_branch_service_1[a55_0x4dc1e3(0x7c)]{constructor(_0x29b149){const _0xb3a217=a55_0x4dc1e3;super(_0x29b149),this[_0xb3a217(0x85)]=this['createRequest']();}[a55_0x4dc1e3(0x90)](){const _0x33fa99=a55_0x4dc1e3,_0x3397e5=typedi_1[_0x33fa99(0x7e)][_0x33fa99(0x7b)](github_api_service_1[_0x33fa99(0x8b)]);return _0x3397e5[_0x33fa99(0x90)](this[_0x33fa99(0x86)][_0x33fa99(0x7f)]);}async[a55_0x4dc1e3(0x82)](_0x54fd6e){const _0x489a41=a55_0x4dc1e3;try{const _0x22c917=await this['request'][_0x489a41(0x7b)]('branches/'+_0x54fd6e);return branch_dto_1['BranchDto']['fromGithub'](_0x22c917);}catch(_0x55e8c5){throw new not_found_error_1['NotFoundError'](_0x55e8c5);}}async[a55_0x4dc1e3(0x74)](){const _0x345987=a55_0x4dc1e3;try{const _0x574baa=await this[_0x345987(0x85)][_0x345987(0x7b)]('branches');return _0x574baa[_0x345987(0x77)](_0x577f03=>branch_dto_1['BranchDto']['fromGithub'](_0x577f03));}catch(_0x5c5c81){throw new not_found_error_1[(_0x345987(0x78))](_0x5c5c81);}}async['delete'](_0xa7b696){const _0x21e442=a55_0x4dc1e3;try{await this['request']['delete']('git/refs/heads/'+_0xa7b696);}catch(_0xe74d2f){throw new bad_request_error_1[(_0x21e442(0x8c))](_0xe74d2f);}}}exports[a55_0x4dc1e3(0x83)]=GithubBranchService;