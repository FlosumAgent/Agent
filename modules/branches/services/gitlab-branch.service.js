const a56_0x1513=['346668YJBsqo','15501eZabsv','fromGitlab','23JVZJfD','repository/branches/','BadRequestError','BranchDto','default','getOne','constructor','__importDefault','request','__esModule','39761QjcBbZ','repository/branches','1AJzUsW','NotFoundError','190192YePNoI','../dto/branch.dto','return\x20/\x22\x20+\x20this\x20+\x20\x22/','2dyZsjA','7lICOmx','createRequest','apiUrl','../../git-api/services/gitlab-api.service','154657YsYObx','GitBranchService','repository','map','347597UGKFJm','delete','GitlabApiService','538446JXeIrN','GitlabBranchService','get'];const a56_0x4a574d=a56_0x5ab5;(function(_0xee1fa5,_0x54ee55){const _0xe14f5c=a56_0x5ab5;while(!![]){try{const _0x2c5386=parseInt(_0xe14f5c(0x1e8))*parseInt(_0xe14f5c(0x1ea))+-parseInt(_0xe14f5c(0x1e7))+parseInt(_0xe14f5c(0x1dd))*parseInt(_0xe14f5c(0x1fb))+parseInt(_0xe14f5c(0x1fc))*parseInt(_0xe14f5c(0x1f4))+parseInt(_0xe14f5c(0x1e1))*parseInt(_0xe14f5c(0x1f6))+-parseInt(_0xe14f5c(0x1f8))+-parseInt(_0xe14f5c(0x1e4));if(_0x2c5386===_0x54ee55)break;else _0xee1fa5['push'](_0xee1fa5['shift']());}catch(_0x1c6564){_0xee1fa5['push'](_0xee1fa5['shift']());}}}(a56_0x1513,0x34d87));const a56_0x5213fa=function(){let _0x3d6850=!![];return function(_0xaf014c,_0x41f580){const _0x3ba8d8=_0x3d6850?function(){if(_0x41f580){const _0x1c2a3a=_0x41f580['apply'](_0xaf014c,arguments);return _0x41f580=null,_0x1c2a3a;}}:function(){};return _0x3d6850=![],_0x3ba8d8;};}(),a56_0x56db5c=a56_0x5213fa(this,function(){const _0x10e0e5=function(){const _0x46882a=a56_0x5ab5,_0x3d384f=_0x10e0e5[_0x46882a(0x1f0)](_0x46882a(0x1fa))()[_0x46882a(0x1f0)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x3d384f['test'](a56_0x56db5c);};return _0x10e0e5();});a56_0x56db5c();'use strict';var __importDefault=this&&this[a56_0x4a574d(0x1f1)]||function(_0x31c603){return _0x31c603&&_0x31c603['__esModule']?_0x31c603:{'default':_0x31c603};};Object['defineProperty'](exports,a56_0x4a574d(0x1f3),{'value':!![]}),exports[a56_0x4a574d(0x1e5)]=void 0x0;const bad_request_error_1=require('../../../core/errors/bad-request.error'),not_found_error_1=require('../../../core/errors/not-found.error'),gitlab_api_service_1=require(a56_0x4a574d(0x1ff)),typedi_1=__importDefault(require('typedi')),branch_dto_1=require(a56_0x4a574d(0x1f9)),git_branch_service_1=require('./git-branch.service');class GitlabBranchService extends git_branch_service_1[a56_0x4a574d(0x1de)]{constructor(_0x530b41){const _0x1d0517=a56_0x4a574d;super(_0x530b41),this[_0x1d0517(0x1f2)]=this[_0x1d0517(0x1fd)]();}[a56_0x4a574d(0x1fd)](){const _0x39aae2=a56_0x4a574d,_0x42c1b5=typedi_1[_0x39aae2(0x1ee)][_0x39aae2(0x1e6)](gitlab_api_service_1[_0x39aae2(0x1e3)]);return _0x42c1b5[_0x39aae2(0x1fd)](this[_0x39aae2(0x1df)][_0x39aae2(0x1fe)]);}async[a56_0x4a574d(0x1ef)](_0x3a57a7){const _0xf0a449=a56_0x4a574d;try{const _0x33ac2d=await this[_0xf0a449(0x1f2)]['get'](_0xf0a449(0x1eb)+_0x3a57a7);return branch_dto_1[_0xf0a449(0x1ed)][_0xf0a449(0x1e9)](_0x33ac2d);}catch(_0x336451){throw new not_found_error_1[(_0xf0a449(0x1f7))](_0x336451);}}async['getAll'](){const _0x289fb3=a56_0x4a574d;try{const _0x1aa7de=await this[_0x289fb3(0x1f2)][_0x289fb3(0x1e6)](_0x289fb3(0x1f5));return _0x1aa7de[_0x289fb3(0x1e0)](_0x2bab97=>branch_dto_1['BranchDto'][_0x289fb3(0x1e9)](_0x2bab97));}catch(_0x54a72e){throw new not_found_error_1[(_0x289fb3(0x1f7))](_0x54a72e);}}async[a56_0x4a574d(0x1e2)](_0x29d775){const _0x5ce466=a56_0x4a574d;try{await this[_0x5ce466(0x1f2)][_0x5ce466(0x1e2)](_0x5ce466(0x1eb)+_0x29d775);}catch(_0x4d8ccd){throw new bad_request_error_1[(_0x5ce466(0x1ec))](_0x4d8ccd);}}}function a56_0x5ab5(_0x28ef85,_0x4275ad){return a56_0x5ab5=function(_0x145d68,_0x56db5c){_0x145d68=_0x145d68-0x1dd;let _0x5213fa=a56_0x1513[_0x145d68];return _0x5213fa;},a56_0x5ab5(_0x28ef85,_0x4275ad);}exports[a56_0x4a574d(0x1e5)]=GitlabBranchService;