const a70_0x21d382=a70_0x4e39;function a70_0x4e39(_0x2bf84c,_0x33af3a){const _0x2312f5=a70_0x1755();return a70_0x4e39=function(_0x11e11d,_0x597c10){_0x11e11d=_0x11e11d-0x138;let _0x1755d6=_0x2312f5[_0x11e11d];return _0x1755d6;},a70_0x4e39(_0x2bf84c,_0x33af3a);}(function(_0xf56f48,_0x333fc7){const _0x44b6b4=a70_0x4e39,_0x31301a=_0xf56f48();while(!![]){try{const _0x184692=-parseInt(_0x44b6b4(0x158))/0x1+-parseInt(_0x44b6b4(0x149))/0x2+-parseInt(_0x44b6b4(0x144))/0x3*(parseInt(_0x44b6b4(0x13f))/0x4)+-parseInt(_0x44b6b4(0x139))/0x5+parseInt(_0x44b6b4(0x143))/0x6+-parseInt(_0x44b6b4(0x155))/0x7+parseInt(_0x44b6b4(0x146))/0x8;if(_0x184692===_0x333fc7)break;else _0x31301a['push'](_0x31301a['shift']());}catch(_0x155b66){_0x31301a['push'](_0x31301a['shift']());}}}(a70_0x1755,0xeb73b));const a70_0x597c10=function(){let _0x220ba0=!![];return function(_0xc156e3,_0x452de6){const _0x4782d1=_0x220ba0?function(){if(_0x452de6){const _0x1f1e57=_0x452de6['apply'](_0xc156e3,arguments);return _0x452de6=null,_0x1f1e57;}}:function(){};return _0x220ba0=![],_0x4782d1;};}(),a70_0x11e11d=a70_0x597c10(this,function(){const _0x445a3b=a70_0x4e39;return a70_0x11e11d['toString']()['search'](_0x445a3b(0x150))['toString']()['constructor'](a70_0x11e11d)[_0x445a3b(0x154)](_0x445a3b(0x150));});a70_0x11e11d();'use strict';var __importDefault=this&&this[a70_0x21d382(0x13b)]||function(_0xc0d6a0){const _0x2217c4=a70_0x21d382;return _0xc0d6a0&&_0xc0d6a0[_0x2217c4(0x151)]?_0xc0d6a0:{'default':_0xc0d6a0};};function a70_0x1755(){const _0x3a7fe0=['6xZtNRo','get','31528952WaQfbe','hooks','request','1370922vHQkYn','values','BitbucketApiService','default','../dto/hook.dto','defineProperty','getOne','(((.+)+)+)+$','__esModule','BadRequestError','fromBitbucket','search','7145208FcYAgz','repository','BitbucketHookService','216946RaStMT','apiUrl','../../../core/errors/not-found.error','5869470UbzCpo','typedi','__importDefault','delete','HookDto','post','2168292JZvCyF','createRequest','./git-hook.service','hooks/','7226898gXQDvG'];a70_0x1755=function(){return _0x3a7fe0;};return a70_0x1755();}Object[a70_0x21d382(0x14e)](exports,a70_0x21d382(0x151),{'value':!![]}),exports[a70_0x21d382(0x157)]=void 0x0;const bad_request_error_1=require('../../../core/errors/bad-request.error'),not_found_error_1=require(a70_0x21d382(0x138)),bitbucket_api_service_1=require('../../git-api/services/bitbucket-api.service'),typedi_1=__importDefault(require(a70_0x21d382(0x13a))),hook_dto_1=require(a70_0x21d382(0x14d)),git_hook_service_1=require(a70_0x21d382(0x141));class BitbucketHookService extends git_hook_service_1['GitHookService']{constructor(_0x18a7be){const _0x56b4a1=a70_0x21d382;super(_0x18a7be),this['request']=this[_0x56b4a1(0x140)]();}[a70_0x21d382(0x140)](){const _0x41a763=a70_0x21d382,_0x9adb74=typedi_1[_0x41a763(0x14c)][_0x41a763(0x145)](bitbucket_api_service_1[_0x41a763(0x14b)]);return _0x9adb74[_0x41a763(0x140)](this[_0x41a763(0x156)][_0x41a763(0x159)]);}async['create'](_0x4dcaa5){const _0x3d0a27=a70_0x21d382;try{const _0x512f83=await this[_0x3d0a27(0x148)][_0x3d0a27(0x13e)](_0x3d0a27(0x147),_0x4dcaa5);return hook_dto_1[_0x3d0a27(0x13d)][_0x3d0a27(0x153)](_0x512f83);}catch(_0x51c406){throw new bad_request_error_1[(_0x3d0a27(0x152))](_0x51c406);}}async[a70_0x21d382(0x14f)](_0x48b2bc){const _0x24938a=a70_0x21d382;try{const _0x18111d=await this['request']['get'](_0x24938a(0x142)+_0x48b2bc);return hook_dto_1['HookDto'][_0x24938a(0x153)](_0x18111d);}catch(_0x206ade){throw new not_found_error_1['NotFoundError'](_0x206ade);}}async['getAll'](){const _0x3d1467=a70_0x21d382;try{const _0x25c38b=await this[_0x3d1467(0x148)]['get'](_0x3d1467(0x147));return _0x25c38b[_0x3d1467(0x14a)]['map'](_0x4139b3=>hook_dto_1['HookDto'][_0x3d1467(0x153)](_0x4139b3));}catch(_0x402e44){throw new not_found_error_1['NotFoundError'](_0x402e44);}}async['update'](_0x4b64ac,_0x3439da){const _0x2fa14b=a70_0x21d382;try{const _0x2cd972=await this[_0x2fa14b(0x148)]['put'](_0x2fa14b(0x142)+_0x4b64ac,_0x3439da);return hook_dto_1[_0x2fa14b(0x13d)][_0x2fa14b(0x153)](_0x2cd972);}catch(_0x2b757c){throw new not_found_error_1['NotFoundError'](_0x2b757c);}}async[a70_0x21d382(0x13c)](_0x3f7f40){const _0x1eb353=a70_0x21d382;try{await this['request'][_0x1eb353(0x13c)]('hooks/'+_0x3f7f40);}catch(_0x15ec5c){throw new not_found_error_1['NotFoundError'](_0x15ec5c);}}}exports[a70_0x21d382(0x157)]=BitbucketHookService;