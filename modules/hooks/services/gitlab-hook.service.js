const a73_0x4bc2=['defineProperty','update','1HluOVl','post','NotFoundError','delete','typedi','getOne','2GdQMkk','get','GitlabApiService','BadRequestError','HookDto','hooks','default','1549406FNdZuF','GitlabHookService','1ZKRjRb','repository','return\x20/\x22\x20+\x20this\x20+\x20\x22/','1039712oHZSzY','createRequest','475297toyzZf','../../../core/errors/not-found.error','983JxbYTd','hooks/','constructor','apiUrl','fromGitlab','3922dlAoMJ','578IHAByf','getAll','../../git-api/services/gitlab-api.service','request','5sfLXEE','147655BKrQla','GitHookService','__esModule','../../../core/errors/bad-request.error','put','create','832187kUtSPB','__importDefault','./git-hook.service'];const a73_0x3a86a5=a73_0x5b81;(function(_0xaab5ca,_0x48ef29){const _0x1a055e=a73_0x5b81;while(!![]){try{const _0x123d0c=parseInt(_0x1a055e(0xb8))*parseInt(_0x1a055e(0xbd))+parseInt(_0x1a055e(0xd8))*parseInt(_0x1a055e(0xc4))+parseInt(_0x1a055e(0xd6))+-parseInt(_0x1a055e(0xb3))*-parseInt(_0x1a055e(0xb9))+parseInt(_0x1a055e(0xbe))*-parseInt(_0x1a055e(0xc9))+-parseInt(_0x1a055e(0xdb))+parseInt(_0x1a055e(0xb1))*-parseInt(_0x1a055e(0xcf));if(_0x123d0c===_0x48ef29)break;else _0xaab5ca['push'](_0xaab5ca['shift']());}catch(_0x5b67c3){_0xaab5ca['push'](_0xaab5ca['shift']());}}}(a73_0x4bc2,0xcafb8));function a73_0x5b81(_0x311fc7,_0x27c256){return a73_0x5b81=function(_0x41c540,_0x23aa70){_0x41c540=_0x41c540-0xb1;let _0x13f90c=a73_0x4bc2[_0x41c540];return _0x13f90c;},a73_0x5b81(_0x311fc7,_0x27c256);}const a73_0x13f90c=function(){let _0x53b030=!![];return function(_0x217f90,_0x2b6ba0){const _0x4a9621=_0x53b030?function(){if(_0x2b6ba0){const _0x49716b=_0x2b6ba0['apply'](_0x217f90,arguments);return _0x2b6ba0=null,_0x49716b;}}:function(){};return _0x53b030=![],_0x4a9621;};}(),a73_0x23aa70=a73_0x13f90c(this,function(){const _0x5505a9=function(){const _0x1c3d17=a73_0x5b81,_0x115e01=_0x5505a9[_0x1c3d17(0xb5)](_0x1c3d17(0xda))()[_0x1c3d17(0xb5)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x115e01['test'](a73_0x23aa70);};return _0x5505a9();});a73_0x23aa70();'use strict';var __importDefault=this&&this[a73_0x3a86a5(0xc5)]||function(_0x366453){const _0x187af0=a73_0x3a86a5;return _0x366453&&_0x366453[_0x187af0(0xc0)]?_0x366453:{'default':_0x366453};};Object[a73_0x3a86a5(0xc7)](exports,a73_0x3a86a5(0xc0),{'value':!![]}),exports[a73_0x3a86a5(0xd7)]=void 0x0;const bad_request_error_1=require(a73_0x3a86a5(0xc1)),not_found_error_1=require(a73_0x3a86a5(0xb2)),gitlab_api_service_1=require(a73_0x3a86a5(0xbb)),typedi_1=__importDefault(require(a73_0x3a86a5(0xcd))),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require(a73_0x3a86a5(0xc6));class GitlabHookService extends git_hook_service_1[a73_0x3a86a5(0xbf)]{constructor(_0x2307c2){const _0x251eec=a73_0x3a86a5;super(_0x2307c2),this[_0x251eec(0xbc)]=this[_0x251eec(0xdc)]();}[a73_0x3a86a5(0xdc)](){const _0x2192a9=a73_0x3a86a5,_0x1cb18a=typedi_1[_0x2192a9(0xd5)][_0x2192a9(0xd0)](gitlab_api_service_1[_0x2192a9(0xd1)]);return _0x1cb18a['createRequest'](this[_0x2192a9(0xd9)][_0x2192a9(0xb6)]);}async[a73_0x3a86a5(0xc3)](_0x42d7ff){const _0x2c45b6=a73_0x3a86a5;try{const _0x55e67c=await this[_0x2c45b6(0xbc)][_0x2c45b6(0xca)]('hooks',_0x42d7ff);return hook_dto_1[_0x2c45b6(0xd3)][_0x2c45b6(0xb7)](_0x55e67c);}catch(_0x1c38bf){throw new bad_request_error_1[(_0x2c45b6(0xd2))](_0x1c38bf);}}async[a73_0x3a86a5(0xce)](_0x3da468){const _0x245e26=a73_0x3a86a5;try{const _0x1489b0=await this[_0x245e26(0xbc)]['get'](_0x245e26(0xb4)+_0x3da468);return hook_dto_1[_0x245e26(0xd3)][_0x245e26(0xb7)](_0x1489b0);}catch(_0x3619c9){throw new not_found_error_1[(_0x245e26(0xcb))](_0x3619c9);}}async[a73_0x3a86a5(0xba)](){const _0x4a9428=a73_0x3a86a5;try{const _0x26dff9=await this[_0x4a9428(0xbc)][_0x4a9428(0xd0)](_0x4a9428(0xd4));return _0x26dff9['map'](_0x1d1170=>hook_dto_1[_0x4a9428(0xd3)][_0x4a9428(0xb7)](_0x1d1170));}catch(_0xf37558){throw new not_found_error_1[(_0x4a9428(0xcb))](_0xf37558);}}async[a73_0x3a86a5(0xc8)](_0x480b05,_0x1a2941){const _0x505198=a73_0x3a86a5;try{const _0x3d1923=await this[_0x505198(0xbc)][_0x505198(0xc2)](_0x505198(0xb4)+_0x480b05,_0x1a2941);return hook_dto_1[_0x505198(0xd3)][_0x505198(0xb7)](_0x3d1923);}catch(_0x43fb9b){throw new not_found_error_1[(_0x505198(0xcb))](_0x43fb9b);}}async[a73_0x3a86a5(0xcc)](_0x2f36cc){const _0x245e2f=a73_0x3a86a5;try{await this['request'][_0x245e2f(0xcc)](_0x245e2f(0xb4)+_0x2f36cc);}catch(_0x575674){throw new not_found_error_1[(_0x245e2f(0xcb))](_0x575674);}}}exports['GitlabHookService']=GitlabHookService;