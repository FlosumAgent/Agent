const a56_0x1549=['constructor','81867BAMMSW','1187175qcdnCd','5iekkHq','BadRequestError','1FuwbpD','__importDefault','test','GitBranchService','GitlabApiService','5343kMnZQc','BranchDto','../../../core/errors/not-found.error','../../git-api/services/gitlab-api.service','NotFoundError','../../../core/errors/bad-request.error','778144QCDegO','typedi','GitlabBranchService','140600byFtKy','__esModule','getAll','repository/branches','get','repository/branches/','196278xOxqJg','delete','createRequest','default','85421WcuviR','getOne','fromGitlab','apply','279DdktUV','17LlTdAN','apiUrl','map','defineProperty','request','11WlcJOD','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}'];const a56_0x54d39f=a56_0x55b2;(function(_0x3b6391,_0x47444a){const _0x449940=a56_0x55b2;while(!![]){try{const _0x562cc6=-parseInt(_0x449940(0x9f))+parseInt(_0x449940(0x91))*-parseInt(_0x449940(0x94))+parseInt(_0x449940(0x8d))*-parseInt(_0x449940(0x83))+parseInt(_0x449940(0x99))*parseInt(_0x449940(0x87))+-parseInt(_0x449940(0x90))*-parseInt(_0x449940(0x88))+-parseInt(_0x449940(0xa8))*-parseInt(_0x449940(0x92))+-parseInt(_0x449940(0xa2));if(_0x562cc6===_0x47444a)break;else _0x3b6391['push'](_0x3b6391['shift']());}catch(_0x283196){_0x3b6391['push'](_0x3b6391['shift']());}}}(a56_0x1549,0xc7c64));const a56_0x4ea86a=function(){let _0x1dabb9=!![];return function(_0x539380,_0x2caab3){const _0x3bb1a8=_0x1dabb9?function(){const _0x6e91c=a56_0x55b2;if(_0x2caab3){const _0x47dda2=_0x2caab3[_0x6e91c(0x86)](_0x539380,arguments);return _0x2caab3=null,_0x47dda2;}}:function(){};return _0x1dabb9=![],_0x3bb1a8;};}(),a56_0x5a3330=a56_0x4ea86a(this,function(){const _0x43e5c4=function(){const _0x530880=a56_0x55b2,_0x2d7d09=_0x43e5c4[_0x530880(0x8f)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x530880(0x8f)](_0x530880(0x8e));return!_0x2d7d09[_0x530880(0x96)](a56_0x5a3330);};return _0x43e5c4();});a56_0x5a3330();'use strict';function a56_0x55b2(_0x16cba2,_0x407ec8){return a56_0x55b2=function(_0x5ac057,_0x5a3330){_0x5ac057=_0x5ac057-0x80;let _0x4ea86a=a56_0x1549[_0x5ac057];return _0x4ea86a;},a56_0x55b2(_0x16cba2,_0x407ec8);}var __importDefault=this&&this[a56_0x54d39f(0x95)]||function(_0x420040){const _0x211e47=a56_0x54d39f;return _0x420040&&_0x420040[_0x211e47(0xa3)]?_0x420040:{'default':_0x420040};};Object[a56_0x54d39f(0x8b)](exports,'__esModule',{'value':!![]}),exports[a56_0x54d39f(0xa1)]=void 0x0;const bad_request_error_1=require(a56_0x54d39f(0x9e)),not_found_error_1=require(a56_0x54d39f(0x9b)),gitlab_api_service_1=require(a56_0x54d39f(0x9c)),typedi_1=__importDefault(require(a56_0x54d39f(0xa0))),branch_dto_1=require('../dto/branch.dto'),git_branch_service_1=require('./git-branch.service');class GitlabBranchService extends git_branch_service_1[a56_0x54d39f(0x97)]{constructor(_0x2d296b){const _0x5828c0=a56_0x54d39f;super(_0x2d296b),this[_0x5828c0(0x8c)]=this[_0x5828c0(0x81)]();}[a56_0x54d39f(0x81)](){const _0xf8a5=a56_0x54d39f,_0x352066=typedi_1[_0xf8a5(0x82)][_0xf8a5(0xa6)](gitlab_api_service_1[_0xf8a5(0x98)]);return _0x352066[_0xf8a5(0x81)](this['repository'][_0xf8a5(0x89)]);}async[a56_0x54d39f(0x84)](_0x20d6dc){const _0x2b4fbc=a56_0x54d39f;try{const _0x119c48=await this[_0x2b4fbc(0x8c)][_0x2b4fbc(0xa6)](_0x2b4fbc(0xa7)+_0x20d6dc);return branch_dto_1[_0x2b4fbc(0x9a)]['fromGitlab'](_0x119c48);}catch(_0x48b69f){throw new not_found_error_1[(_0x2b4fbc(0x9d))](_0x48b69f);}}async[a56_0x54d39f(0xa4)](){const _0x486714=a56_0x54d39f;try{const _0x953b88=await this[_0x486714(0x8c)][_0x486714(0xa6)](_0x486714(0xa5));return _0x953b88[_0x486714(0x8a)](_0x493597=>branch_dto_1[_0x486714(0x9a)][_0x486714(0x85)](_0x493597));}catch(_0xd6b6ac){throw new not_found_error_1['NotFoundError'](_0xd6b6ac);}}async['delete'](_0x212a81){const _0x1f4ac2=a56_0x54d39f;try{await this[_0x1f4ac2(0x8c)][_0x1f4ac2(0x80)]('repository/branches/'+_0x212a81);}catch(_0x432f1f){throw new bad_request_error_1[(_0x1f4ac2(0x93))](_0x432f1f);}}}exports[a56_0x54d39f(0xa1)]=GitlabBranchService;