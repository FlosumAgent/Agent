const a52_0x3d22c6=a52_0x2546;(function(_0x158d3f,_0x59cc95){const _0x5285d9=a52_0x2546,_0xbd69bf=_0x158d3f();while(!![]){try{const _0x1b7e68=parseInt(_0x5285d9(0x16e))/0x1+parseInt(_0x5285d9(0x177))/0x2*(-parseInt(_0x5285d9(0x173))/0x3)+parseInt(_0x5285d9(0x167))/0x4+-parseInt(_0x5285d9(0x169))/0x5+parseInt(_0x5285d9(0x162))/0x6+-parseInt(_0x5285d9(0x17b))/0x7+-parseInt(_0x5285d9(0x17a))/0x8*(parseInt(_0x5285d9(0x16c))/0x9);if(_0x1b7e68===_0x59cc95)break;else _0xbd69bf['push'](_0xbd69bf['shift']());}catch(_0x181339){_0xbd69bf['push'](_0xbd69bf['shift']());}}}(a52_0x26b1,0xef89e));function a52_0x26b1(){const _0x3b3527=['45YxCgKC','get','GitBranchService','BadRequestError','5634ZWFdrP','apiUrl','(((.+)+)+)+$','440Ziffyu','1684879difnlD','toString','0000000000000000000000000000000000000000','repository','createRequest','defineProperty','./git-branch.service','8944398mbzWkO','../../git-api/services/azure-api.service','../../../core/errors/bad-request.error','__importDefault','search','6677608HEbuGq','typedi','8347450vvTUwy','__esModule','getOne','99657slPSEW','default','382472qtWRfe','constructor','AzureBranchService','post','delete'];a52_0x26b1=function(){return _0x3b3527;};return a52_0x26b1();}function a52_0x2546(_0x5032a0,_0x349d61){const _0x303667=a52_0x26b1();return a52_0x2546=function(_0x46b68c,_0x40eba9){_0x46b68c=_0x46b68c-0x15d;let _0x26b112=_0x303667[_0x46b68c];return _0x26b112;},a52_0x2546(_0x5032a0,_0x349d61);}const a52_0x40eba9=function(){let _0x1d6dc1=!![];return function(_0xb89fd0,_0x505041){const _0x412779=_0x1d6dc1?function(){if(_0x505041){const _0x58d056=_0x505041['apply'](_0xb89fd0,arguments);return _0x505041=null,_0x58d056;}}:function(){};return _0x1d6dc1=![],_0x412779;};}(),a52_0x46b68c=a52_0x40eba9(this,function(){const _0x11362d=a52_0x2546;return a52_0x46b68c[_0x11362d(0x17c)]()[_0x11362d(0x166)](_0x11362d(0x179))[_0x11362d(0x17c)]()[_0x11362d(0x16f)](a52_0x46b68c)['search'](_0x11362d(0x179));});a52_0x46b68c();'use strict';var __importDefault=this&&this[a52_0x3d22c6(0x165)]||function(_0x24f5fa){const _0x4ea9df=a52_0x3d22c6;return _0x24f5fa&&_0x24f5fa[_0x4ea9df(0x16a)]?_0x24f5fa:{'default':_0x24f5fa};};Object[a52_0x3d22c6(0x160)](exports,a52_0x3d22c6(0x16a),{'value':!![]}),exports[a52_0x3d22c6(0x170)]=void 0x0;const bad_request_error_1=require(a52_0x3d22c6(0x164)),azure_api_service_1=require(a52_0x3d22c6(0x163)),typedi_1=__importDefault(require(a52_0x3d22c6(0x168))),git_branch_service_1=require(a52_0x3d22c6(0x161));class AzureBranchService extends git_branch_service_1[a52_0x3d22c6(0x175)]{constructor(_0x42104b){const _0x3c9b8d=a52_0x3d22c6;super(_0x42104b),this['request']=this[_0x3c9b8d(0x15f)]();}['createRequest'](){const _0x56ac52=a52_0x3d22c6,_0x2fa371=typedi_1[_0x56ac52(0x16d)][_0x56ac52(0x174)](azure_api_service_1['AzureApiService']);return _0x2fa371[_0x56ac52(0x15f)](this[_0x56ac52(0x15e)][_0x56ac52(0x178)]);}async[a52_0x3d22c6(0x172)](_0xb9a252){const _0x3a6281=a52_0x3d22c6;try{await this[_0x3a6281(0x16b)](_0xb9a252),await this['request'][_0x3a6281(0x171)]('refs',[{'name':'refs/heads/'+_0xb9a252,'newObjectId':_0x3a6281(0x15d),'oldObjectId':_0x3a6281(0x15d)}]);}catch(_0x2c77fb){throw new bad_request_error_1[(_0x3a6281(0x176))](_0x2c77fb);}}}exports[a52_0x3d22c6(0x170)]=AzureBranchService;