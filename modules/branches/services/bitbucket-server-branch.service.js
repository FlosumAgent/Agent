const a54_0x306e91=a54_0xb626;(function(_0x5795ae,_0x2ff3ef){const _0x394523=a54_0xb626,_0x825b16=_0x5795ae();while(!![]){try{const _0x35299a=parseInt(_0x394523(0xc5))/0x1*(-parseInt(_0x394523(0xc0))/0x2)+-parseInt(_0x394523(0xc7))/0x3*(parseInt(_0x394523(0xc6))/0x4)+parseInt(_0x394523(0xac))/0x5*(parseInt(_0x394523(0xb9))/0x6)+parseInt(_0x394523(0xb7))/0x7+-parseInt(_0x394523(0xae))/0x8*(-parseInt(_0x394523(0xc8))/0x9)+-parseInt(_0x394523(0xbf))/0xa*(-parseInt(_0x394523(0xbb))/0xb)+-parseInt(_0x394523(0xb6))/0xc;if(_0x35299a===_0x2ff3ef)break;else _0x825b16['push'](_0x825b16['shift']());}catch(_0x413356){_0x825b16['push'](_0x825b16['shift']());}}}(a54_0x3d48,0x4f560));const a54_0x1b3663=function(){let _0x431245=!![];return function(_0x1f1c45,_0x618591){const _0x48a101=_0x431245?function(){const _0x178081=a54_0xb626;if(_0x618591){const _0x4ede9b=_0x618591[_0x178081(0xbd)](_0x1f1c45,arguments);return _0x618591=null,_0x4ede9b;}}:function(){};return _0x431245=![],_0x48a101;};}(),a54_0x55a46c=a54_0x1b3663(this,function(){const _0x53f154=a54_0xb626;return a54_0x55a46c['toString']()[_0x53f154(0xad)](_0x53f154(0xc4))[_0x53f154(0xb5)]()[_0x53f154(0xba)](a54_0x55a46c)['search'](_0x53f154(0xc4));});a54_0x55a46c();'use strict';var __importDefault=this&&this[a54_0x306e91(0xcc)]||function(_0x2819a0){const _0x3baa29=a54_0x306e91;return _0x2819a0&&_0x2819a0[_0x3baa29(0xc9)]?_0x2819a0:{'default':_0x2819a0};};Object[a54_0x306e91(0xc3)](exports,a54_0x306e91(0xc9),{'value':!![]}),exports[a54_0x306e91(0xbe)]=void 0x0;const bad_request_error_1=require(a54_0x306e91(0xcb)),typedi_1=__importDefault(require('typedi')),bitbucket_server_api_service_1=require(a54_0x306e91(0xb3)),git_branch_service_1=require(a54_0x306e91(0xcd));function a54_0xb626(_0x28cf5f,_0x173d78){const _0x32d998=a54_0x3d48();return a54_0xb626=function(_0x55a46c,_0x1b3663){_0x55a46c=_0x55a46c-0xac;let _0x3d4868=_0x32d998[_0x55a46c];return _0x3d4868;},a54_0xb626(_0x28cf5f,_0x173d78);}function a54_0x3d48(){const _0x2bc3fd=['GitBranchService','defineProperty','(((.+)+)+)+$','19542wyeVwx','8QoxNLa','520434SMhcLr','20520aXgeLR','__esModule','/branches','../../../core/errors/bad-request.error','__importDefault','./git-branch.service','createRequest','get','33650RuAtzt','search','808gvnfnk','/branch-utils/','repository','BadRequestError','refs/heads/','../../git-api/services/bitbucket-server-api.service','delete','toString','7239912dnIEus','2009245HOyugs','getOne','246AGPaOo','constructor','737nkzYDE','apiUrl','apply','BitbucketServerBranchService','80690NVyYyV','6WtFSSE','BitbucketServerApiService'];a54_0x3d48=function(){return _0x2bc3fd;};return a54_0x3d48();}class BitbucketServerBranchService extends git_branch_service_1[a54_0x306e91(0xc2)]{constructor(_0x1cfd51){const _0x296fd9=a54_0x306e91;super(_0x1cfd51),this['request']=this[_0x296fd9(0xce)]();}[a54_0x306e91(0xce)](){const _0x50673b=a54_0x306e91,_0x29a243=typedi_1['default'][_0x50673b(0xcf)](bitbucket_server_api_service_1[_0x50673b(0xc1)]);return _0x29a243['createRequest'](this[_0x50673b(0xb0)][_0x50673b(0xbc)]);}async[a54_0x306e91(0xb4)](_0x5c7207){const _0x48c4e7=a54_0x306e91;try{await this[_0x48c4e7(0xb8)](_0x5c7207);const _0x3185e9=this[_0x48c4e7(0xb0)]['apiUrl']['replace']('/api/',_0x48c4e7(0xaf));await this['request'][_0x48c4e7(0xb4)](_0x3185e9+_0x48c4e7(0xca),{'data':{'name':_0x48c4e7(0xb2)+_0x5c7207,'dryRun':![]}});}catch(_0x454196){throw new bad_request_error_1[(_0x48c4e7(0xb1))](_0x454196);}}}exports[a54_0x306e91(0xbe)]=BitbucketServerBranchService;