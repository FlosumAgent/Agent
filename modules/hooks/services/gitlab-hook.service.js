const a74_0x52fa83=a74_0x3505;function a74_0x3505(_0x40ef2d,_0x56288c){const _0x3e48e8=a74_0x3a33();return a74_0x3505=function(_0x80c603,_0x48615d){_0x80c603=_0x80c603-0x7c;let _0x3a33c0=_0x3e48e8[_0x80c603];return _0x3a33c0;},a74_0x3505(_0x40ef2d,_0x56288c);}(function(_0x22eb27,_0x553aac){const _0x3d5351=a74_0x3505,_0x4f23b9=_0x22eb27();while(!![]){try{const _0x5ac5c1=-parseInt(_0x3d5351(0xa1))/0x1*(parseInt(_0x3d5351(0x92))/0x2)+parseInt(_0x3d5351(0x85))/0x3*(parseInt(_0x3d5351(0x99))/0x4)+parseInt(_0x3d5351(0x9a))/0x5*(-parseInt(_0x3d5351(0x9d))/0x6)+-parseInt(_0x3d5351(0xa4))/0x7+-parseInt(_0x3d5351(0x98))/0x8*(parseInt(_0x3d5351(0xa3))/0x9)+-parseInt(_0x3d5351(0x95))/0xa*(parseInt(_0x3d5351(0x8f))/0xb)+-parseInt(_0x3d5351(0x82))/0xc*(-parseInt(_0x3d5351(0x8b))/0xd);if(_0x5ac5c1===_0x553aac)break;else _0x4f23b9['push'](_0x4f23b9['shift']());}catch(_0x32b4dd){_0x4f23b9['push'](_0x4f23b9['shift']());}}}(a74_0x3a33,0x4d748));const a74_0x48615d=function(){let _0x5f2740=!![];return function(_0x5d40cc,_0x1e3e38){const _0xb9305a=_0x5f2740?function(){if(_0x1e3e38){const _0x5ceb48=_0x1e3e38['apply'](_0x5d40cc,arguments);return _0x1e3e38=null,_0x5ceb48;}}:function(){};return _0x5f2740=![],_0xb9305a;};}(),a74_0x80c603=a74_0x48615d(this,function(){const _0x32dacc=a74_0x3505;return a74_0x80c603[_0x32dacc(0x80)]()['search'](_0x32dacc(0x83))[_0x32dacc(0x80)]()[_0x32dacc(0x91)](a74_0x80c603)[_0x32dacc(0x9b)](_0x32dacc(0x83));});function a74_0x3a33(){const _0x5eca2f=['constructor','2DmGtFT','./git-hook.service','delete','20630fWSHrN','NotFoundError','createRequest','32zmLQEF','136LhHArz','577855PXPkLl','search','../../git-api/services/gitlab-api.service','12keCqia','getAll','BadRequestError','update','459434oeNndx','put','511074GivSai','2926287RRCaWt','GitlabApiService','post','../../../core/errors/not-found.error','apiUrl','toString','hooks/','8827152Bmoylj','(((.+)+)+)+$','get','50811JgsIKW','../dto/hook.dto','GitHookService','GitlabHookService','hooks','fromGitlab','26YhWbTR','HookDto','__esModule','request','2101sbxLXm','typedi'];a74_0x3a33=function(){return _0x5eca2f;};return a74_0x3a33();}a74_0x80c603();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4d40e4){const _0x2a797e=a74_0x3505;return _0x4d40e4&&_0x4d40e4[_0x2a797e(0x8d)]?_0x4d40e4:{'default':_0x4d40e4};};Object['defineProperty'](exports,a74_0x52fa83(0x8d),{'value':!![]}),exports[a74_0x52fa83(0x88)]=void 0x0;const bad_request_error_1=require('../../../core/errors/bad-request.error'),not_found_error_1=require(a74_0x52fa83(0x7e)),gitlab_api_service_1=require(a74_0x52fa83(0x9c)),typedi_1=__importDefault(require(a74_0x52fa83(0x90))),hook_dto_1=require(a74_0x52fa83(0x86)),git_hook_service_1=require(a74_0x52fa83(0x93));class GitlabHookService extends git_hook_service_1[a74_0x52fa83(0x87)]{constructor(_0x28d8d1){const _0x5c38f9=a74_0x52fa83;super(_0x28d8d1),this[_0x5c38f9(0x8e)]=this[_0x5c38f9(0x97)]();}['createRequest'](){const _0x156920=a74_0x52fa83,_0x2f753c=typedi_1['default']['get'](gitlab_api_service_1[_0x156920(0x7c)]);return _0x2f753c[_0x156920(0x97)](this['repository'][_0x156920(0x7f)]);}async['create'](_0x206581){const _0x22488f=a74_0x52fa83;try{const _0x269443=await this['request'][_0x22488f(0x7d)](_0x22488f(0x89),_0x206581);return hook_dto_1['HookDto']['fromGitlab'](_0x269443);}catch(_0x445067){throw new bad_request_error_1[(_0x22488f(0x9f))](_0x445067);}}async['getOne'](_0x2009ff){const _0x444b55=a74_0x52fa83;try{const _0x15c75c=await this[_0x444b55(0x8e)][_0x444b55(0x84)](_0x444b55(0x81)+_0x2009ff);return hook_dto_1[_0x444b55(0x8c)][_0x444b55(0x8a)](_0x15c75c);}catch(_0x51f84a){throw new not_found_error_1[(_0x444b55(0x96))](_0x51f84a);}}async[a74_0x52fa83(0x9e)](){const _0x4120ca=a74_0x52fa83;try{const _0x26e0a4=await this['request'][_0x4120ca(0x84)](_0x4120ca(0x89));return _0x26e0a4['map'](_0x55153e=>hook_dto_1[_0x4120ca(0x8c)][_0x4120ca(0x8a)](_0x55153e));}catch(_0x2a683c){throw new not_found_error_1[(_0x4120ca(0x96))](_0x2a683c);}}async[a74_0x52fa83(0xa0)](_0x347846,_0x429cbe){const _0x567d11=a74_0x52fa83;try{const _0xcd37cf=await this[_0x567d11(0x8e)][_0x567d11(0xa2)]('hooks/'+_0x347846,_0x429cbe);return hook_dto_1[_0x567d11(0x8c)][_0x567d11(0x8a)](_0xcd37cf);}catch(_0x42da5f){throw new not_found_error_1[(_0x567d11(0x96))](_0x42da5f);}}async['delete'](_0x3697fb){const _0x277d1b=a74_0x52fa83;try{await this[_0x277d1b(0x8e)][_0x277d1b(0x94)]('hooks/'+_0x3697fb);}catch(_0x41cc89){throw new not_found_error_1[(_0x277d1b(0x96))](_0x41cc89);}}}exports['GitlabHookService']=GitlabHookService;