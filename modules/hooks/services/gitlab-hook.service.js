const a73_0x5e69=['../dto/hook.dto','NotFoundError','typedi','3213bdCcRl','63WTCoTI','post','148725HeGNuZ','./git-hook.service','fromGitlab','../../../core/errors/not-found.error','HookDto','GitlabHookService','delete','getAll','1SnCpWV','put','hooks/','51335ZLZHQR','__importDefault','GitHookService','default','BadRequestError','request','constructor','313242WFfdQV','hooks','8giGAOd','../../../core/errors/bad-request.error','__esModule','createRequest','create','GitlabApiService','defineProperty','286591UzEdBV','map','1mBDgAL','610205QyRWQM','getOne','404733pzqvLq','get'];const a73_0x3eb2e1=a73_0xe435;(function(_0x12b0c8,_0x57f6e7){const _0x4abe14=a73_0xe435;while(!![]){try{const _0x3938bb=-parseInt(_0x4abe14(0x181))*-parseInt(_0x4abe14(0x18a))+parseInt(_0x4abe14(0x193))*parseInt(_0x4abe14(0x191))+-parseInt(_0x4abe14(0x19c))*-parseInt(_0x4abe14(0x19b))+-parseInt(_0x4abe14(0x188))+-parseInt(_0x4abe14(0x17e))*parseInt(_0x4abe14(0x19e))+parseInt(_0x4abe14(0x196))+-parseInt(_0x4abe14(0x194));if(_0x3938bb===_0x57f6e7)break;else _0x12b0c8['push'](_0x12b0c8['shift']());}catch(_0x36cf39){_0x12b0c8['push'](_0x12b0c8['shift']());}}}(a73_0x5e69,0x38b3b));const a73_0x7d73fe=function(){let _0x5ab96a=!![];return function(_0x478d31,_0x4899c9){const _0x712bb1=_0x5ab96a?function(){if(_0x4899c9){const _0x561c8e=_0x4899c9['apply'](_0x478d31,arguments);return _0x4899c9=null,_0x561c8e;}}:function(){};return _0x5ab96a=![],_0x712bb1;};}(),a73_0x4d3b2f=a73_0x7d73fe(this,function(){const _0x404d17=function(){const _0x24f8e2=a73_0xe435,_0x90aca=_0x404d17[_0x24f8e2(0x187)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x24f8e2(0x187)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x90aca['test'](a73_0x4d3b2f);};return _0x404d17();});function a73_0xe435(_0x4f3e70,_0x12347c){return a73_0xe435=function(_0x49e1d0,_0x4d3b2f){_0x49e1d0=_0x49e1d0-0x17a;let _0x7d73fe=a73_0x5e69[_0x49e1d0];return _0x7d73fe;},a73_0xe435(_0x4f3e70,_0x12347c);}a73_0x4d3b2f();'use strict';var __importDefault=this&&this[a73_0x3eb2e1(0x182)]||function(_0x5541f2){const _0x24e81c=a73_0x3eb2e1;return _0x5541f2&&_0x5541f2[_0x24e81c(0x18c)]?_0x5541f2:{'default':_0x5541f2};};Object[a73_0x3eb2e1(0x190)](exports,a73_0x3eb2e1(0x18c),{'value':!![]}),exports[a73_0x3eb2e1(0x17b)]=void 0x0;const bad_request_error_1=require(a73_0x3eb2e1(0x18b)),not_found_error_1=require(a73_0x3eb2e1(0x1a1)),gitlab_api_service_1=require('../../git-api/services/gitlab-api.service'),typedi_1=__importDefault(require(a73_0x3eb2e1(0x19a))),hook_dto_1=require(a73_0x3eb2e1(0x198)),git_hook_service_1=require(a73_0x3eb2e1(0x19f));class GitlabHookService extends git_hook_service_1[a73_0x3eb2e1(0x183)]{constructor(_0x13cf3c){const _0x32e93f=a73_0x3eb2e1;super(_0x13cf3c),this[_0x32e93f(0x186)]=this[_0x32e93f(0x18d)]();}['createRequest'](){const _0x56b0a6=a73_0x3eb2e1,_0x293ab1=typedi_1[_0x56b0a6(0x184)][_0x56b0a6(0x197)](gitlab_api_service_1[_0x56b0a6(0x18f)]);return _0x293ab1['createRequest'](this['repository']['apiUrl']);}async[a73_0x3eb2e1(0x18e)](_0x4dc4c){const _0x245477=a73_0x3eb2e1;try{const _0x8868b2=await this[_0x245477(0x186)][_0x245477(0x19d)](_0x245477(0x189),_0x4dc4c);return hook_dto_1[_0x245477(0x17a)]['fromGitlab'](_0x8868b2);}catch(_0x4ddd74){throw new bad_request_error_1[(_0x245477(0x185))](_0x4ddd74);}}async[a73_0x3eb2e1(0x195)](_0x383997){const _0x5e1c9d=a73_0x3eb2e1;try{const _0x3d83d6=await this[_0x5e1c9d(0x186)][_0x5e1c9d(0x197)](_0x5e1c9d(0x180)+_0x383997);return hook_dto_1[_0x5e1c9d(0x17a)][_0x5e1c9d(0x1a0)](_0x3d83d6);}catch(_0x20cf01){throw new not_found_error_1[(_0x5e1c9d(0x199))](_0x20cf01);}}async[a73_0x3eb2e1(0x17d)](){const _0x53d5a4=a73_0x3eb2e1;try{const _0x2c4cf5=await this[_0x53d5a4(0x186)]['get']('hooks');return _0x2c4cf5[_0x53d5a4(0x192)](_0x55d0ee=>hook_dto_1[_0x53d5a4(0x17a)][_0x53d5a4(0x1a0)](_0x55d0ee));}catch(_0x4b78ff){throw new not_found_error_1[(_0x53d5a4(0x199))](_0x4b78ff);}}async['update'](_0x39ab1e,_0x338517){const _0x182a0d=a73_0x3eb2e1;try{const _0x5988e5=await this[_0x182a0d(0x186)][_0x182a0d(0x17f)](_0x182a0d(0x180)+_0x39ab1e,_0x338517);return hook_dto_1[_0x182a0d(0x17a)][_0x182a0d(0x1a0)](_0x5988e5);}catch(_0x402765){throw new not_found_error_1[(_0x182a0d(0x199))](_0x402765);}}async[a73_0x3eb2e1(0x17c)](_0x27c0e3){const _0x5d11fd=a73_0x3eb2e1;try{await this[_0x5d11fd(0x186)]['delete']('hooks/'+_0x27c0e3);}catch(_0x41dc71){throw new not_found_error_1['NotFoundError'](_0x41dc71);}}}exports['GitlabHookService']=GitlabHookService;