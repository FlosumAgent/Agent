const a57_0x302a23=a57_0x3fc0;(function(_0xac7bce,_0x280c41){const _0x5c8e49=a57_0x3fc0,_0x11d69a=_0xac7bce();while(!![]){try{const _0x39924d=parseInt(_0x5c8e49(0xa9))/0x1+parseInt(_0x5c8e49(0xb3))/0x2+parseInt(_0x5c8e49(0xbc))/0x3+parseInt(_0x5c8e49(0xb9))/0x4*(parseInt(_0x5c8e49(0xb5))/0x5)+-parseInt(_0x5c8e49(0xbb))/0x6+-parseInt(_0x5c8e49(0xad))/0x7+parseInt(_0x5c8e49(0xae))/0x8*(-parseInt(_0x5c8e49(0xaa))/0x9);if(_0x39924d===_0x280c41)break;else _0x11d69a['push'](_0x11d69a['shift']());}catch(_0x486b5b){_0x11d69a['push'](_0x11d69a['shift']());}}}(a57_0x1d18,0x2859c));const a57_0x2749d1=function(){let _0x4d963d=!![];return function(_0x4cc958,_0x3e99ff){const _0x24128e=_0x4d963d?function(){const _0xd9c0b6=a57_0x3fc0;if(_0x3e99ff){const _0x2fca50=_0x3e99ff[_0xd9c0b6(0xc0)](_0x4cc958,arguments);return _0x3e99ff=null,_0x2fca50;}}:function(){};return _0x4d963d=![],_0x24128e;};}(),a57_0x4d1e36=a57_0x2749d1(this,function(){const _0x150c99=a57_0x3fc0;return a57_0x4d1e36[_0x150c99(0xc4)]()[_0x150c99(0xc5)](_0x150c99(0xc1))[_0x150c99(0xc4)]()[_0x150c99(0xc3)](a57_0x4d1e36)[_0x150c99(0xc5)]('(((.+)+)+)+$');});function a57_0x3fc0(_0x8737b8,_0x1581c7){const _0x12ca67=a57_0x1d18();return a57_0x3fc0=function(_0x4d1e36,_0x2749d1){_0x4d1e36=_0x4d1e36-0xa8;let _0x1d18cf=_0x12ca67[_0x4d1e36];return _0x1d18cf;},a57_0x3fc0(_0x8737b8,_0x1581c7);}function a57_0x1d18(){const _0x47a356=['__esModule','request','apply','(((.+)+)+)+$','__importDefault','constructor','toString','search','default','88057cxxrtj','29961ILUcgM','GitlabBranchService','defineProperty','444556YDnTNn','248sqKphN','get','delete','createRequest','GitBranchService','409906mLJqat','../../../core/errors/bad-request.error','5Xkctrq','../../git-api/services/gitlab-api.service','repository/branches/','GitlabApiService','542792HRlsjX','repository','1599108nLANCw','509379PzEBZJ','BadRequestError'];a57_0x1d18=function(){return _0x47a356;};return a57_0x1d18();}a57_0x4d1e36();'use strict';var __importDefault=this&&this[a57_0x302a23(0xc2)]||function(_0x4c48f8){const _0x559adf=a57_0x302a23;return _0x4c48f8&&_0x4c48f8[_0x559adf(0xbe)]?_0x4c48f8:{'default':_0x4c48f8};};Object[a57_0x302a23(0xac)](exports,a57_0x302a23(0xbe),{'value':!![]}),exports['GitlabBranchService']=void 0x0;const bad_request_error_1=require(a57_0x302a23(0xb4)),gitlab_api_service_1=require(a57_0x302a23(0xb6)),typedi_1=__importDefault(require('typedi')),git_branch_service_1=require('./git-branch.service');class GitlabBranchService extends git_branch_service_1[a57_0x302a23(0xb2)]{constructor(_0x1c6303){const _0x9a6059=a57_0x302a23;super(_0x1c6303),this[_0x9a6059(0xbf)]=this[_0x9a6059(0xb1)]();}['createRequest'](){const _0x7d333a=a57_0x302a23,_0x3df34f=typedi_1[_0x7d333a(0xa8)][_0x7d333a(0xaf)](gitlab_api_service_1[_0x7d333a(0xb8)]);return _0x3df34f['createRequest'](this[_0x7d333a(0xba)]['apiUrl']);}async[a57_0x302a23(0xb0)](_0x2d7a77){const _0x2eca2a=a57_0x302a23;try{await this[_0x2eca2a(0xbf)][_0x2eca2a(0xb0)](_0x2eca2a(0xb7)+_0x2d7a77);}catch(_0x181657){throw new bad_request_error_1[(_0x2eca2a(0xbd))](_0x181657);}}}exports[a57_0x302a23(0xab)]=GitlabBranchService;