const a53_0x446d=['getOne','/api/','apply','../../git-api/services/bitbucket-server-api.service','Branch\x20not\x20found','apiUrl','BitbucketServerApiService','73541zthNHf','__esModule','27bpIzkf','BadRequestError','branches','defineProperty','typedi','default','repository','__importDefault','19Zarlvk','return\x20/\x22\x20+\x20this\x20+\x20\x22/','11raMYXv','1DYnINj','GitBranchService','replace','constructor','76469XMfzhU','/branch-utils/','BitbucketServerBranchService','map','../../../core/errors/bad-request.error','NotFoundError','createRequest','1QSqGmA','getAll','1249531ecAfad','./git-branch.service','1078785UfQAvQ','13bQtIOs','26UJCVxL','../dto/branch.dto','delete','name','92392dzLvXr','29489iPfORU','refs/heads/','56107KCuwzB','request'];const a53_0x47710a=a53_0xec6d;(function(_0x4a1459,_0x38c43e){const _0x4ebc5c=a53_0xec6d;while(!![]){try{const _0x4bf7ca=parseInt(_0x4ebc5c(0x18b))*parseInt(_0x4ebc5c(0x19c))+-parseInt(_0x4ebc5c(0x186))*parseInt(_0x4ebc5c(0x18a))+parseInt(_0x4ebc5c(0x1a8))*-parseInt(_0x4ebc5c(0x193))+-parseInt(_0x4ebc5c(0x191))*parseInt(_0x4ebc5c(0x18c))+-parseInt(_0x4ebc5c(0x17f))*parseInt(_0x4ebc5c(0x1a6))+-parseInt(_0x4ebc5c(0x188))*-parseInt(_0x4ebc5c(0x1a9))+-parseInt(_0x4ebc5c(0x190))*-parseInt(_0x4ebc5c(0x19e));if(_0x4bf7ca===_0x38c43e)break;else _0x4a1459['push'](_0x4a1459['shift']());}catch(_0x2f6d68){_0x4a1459['push'](_0x4a1459['shift']());}}}(a53_0x446d,0xbf8b1));const a53_0x4265fb=function(){let _0x828db7=!![];return function(_0x22ca96,_0x3ca9c1){const _0x594a92=_0x828db7?function(){const _0x9268b1=a53_0xec6d;if(_0x3ca9c1){const _0x37e541=_0x3ca9c1[_0x9268b1(0x197)](_0x22ca96,arguments);return _0x3ca9c1=null,_0x37e541;}}:function(){};return _0x828db7=![],_0x594a92;};}(),a53_0x1a7b3a=a53_0x4265fb(this,function(){const _0x1421da=function(){const _0x385d7d=a53_0xec6d,_0x96ac10=_0x1421da[_0x385d7d(0x1ac)](_0x385d7d(0x1a7))()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x96ac10['test'](a53_0x1a7b3a);};return _0x1421da();});a53_0x1a7b3a();'use strict';function a53_0xec6d(_0x3cea25,_0x27beb3){return a53_0xec6d=function(_0x5bf112,_0x1a7b3a){_0x5bf112=_0x5bf112-0x17f;let _0x4265fb=a53_0x446d[_0x5bf112];return _0x4265fb;},a53_0xec6d(_0x3cea25,_0x27beb3);}var __importDefault=this&&this[a53_0x47710a(0x1a5)]||function(_0x12b0a0){const _0x1f833d=a53_0x47710a;return _0x12b0a0&&_0x12b0a0[_0x1f833d(0x19d)]?_0x12b0a0:{'default':_0x12b0a0};};Object[a53_0x47710a(0x1a1)](exports,a53_0x47710a(0x19d),{'value':!![]}),exports[a53_0x47710a(0x181)]=void 0x0;const bad_request_error_1=require(a53_0x47710a(0x183)),not_found_error_1=require('../../../core/errors/not-found.error'),typedi_1=__importDefault(require(a53_0x47710a(0x1a2))),bitbucket_server_api_service_1=require(a53_0x47710a(0x198)),branch_dto_1=require(a53_0x47710a(0x18d)),git_branch_service_1=require(a53_0x47710a(0x189));class BitbucketServerBranchService extends git_branch_service_1[a53_0x47710a(0x1aa)]{constructor(_0x4212d5){const _0x10ee4d=a53_0x47710a;super(_0x4212d5),this[_0x10ee4d(0x194)]=this[_0x10ee4d(0x185)]();}[a53_0x47710a(0x185)](){const _0x2fab69=a53_0x47710a,_0x475bd3=typedi_1[_0x2fab69(0x1a3)]['get'](bitbucket_server_api_service_1[_0x2fab69(0x19b)]);return _0x475bd3[_0x2fab69(0x185)](this[_0x2fab69(0x1a4)][_0x2fab69(0x19a)]);}async[a53_0x47710a(0x195)](_0x26f068){const _0xddef7f=a53_0x47710a;try{const _0x456ae9=await this[_0xddef7f(0x187)](),_0x4fd4f7=_0x456ae9['find'](_0x2c39f3=>_0x2c39f3[_0xddef7f(0x18f)]===_0x26f068);if(!_0x4fd4f7)throw new not_found_error_1[(_0xddef7f(0x184))](_0xddef7f(0x199));return _0x4fd4f7;}catch(_0x317c9e){throw new not_found_error_1[(_0xddef7f(0x184))](_0x317c9e);}}async[a53_0x47710a(0x187)](){const _0x821b47=a53_0x47710a;try{const _0x4a6d8d=await this['request']['get'](_0x821b47(0x1a0));return _0x4a6d8d['values'][_0x821b47(0x182)](_0x8d4191=>branch_dto_1['BranchDto']['fromBitbucketServer'](_0x8d4191));}catch(_0x1e27ff){throw new not_found_error_1[(_0x821b47(0x184))](_0x1e27ff);}}async[a53_0x47710a(0x18e)](_0x105f8b){const _0x5b665f=a53_0x47710a;try{await this['getOne'](_0x105f8b);const _0x44e062=this[_0x5b665f(0x1a4)][_0x5b665f(0x19a)][_0x5b665f(0x1ab)](_0x5b665f(0x196),_0x5b665f(0x180));await this['request'][_0x5b665f(0x18e)](_0x44e062+'/branches',{'data':{'name':_0x5b665f(0x192)+_0x105f8b,'dryRun':![]}});}catch(_0x169df4){throw new bad_request_error_1[(_0x5b665f(0x19f))](_0x169df4);}}}exports[a53_0x47710a(0x181)]=BitbucketServerBranchService;