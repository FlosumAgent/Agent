function a74_0x2143(_0x91b7c1,_0x37813b){const _0x379182=a74_0x5b34();return a74_0x2143=function(_0x48acf4,_0x181100){_0x48acf4=_0x48acf4-0x1f3;let _0x5b34f5=_0x379182[_0x48acf4];return _0x5b34f5;},a74_0x2143(_0x91b7c1,_0x37813b);}function a74_0x5b34(){const _0x26c0ad=['get','update','NotFoundError','30273klfrmF','put','796652KREJpF','delete','toString','hooks','default','../../../core/errors/bad-request.error','repository','__importDefault','5372reJpVd','defineProperty','GitlabApiService','./git-hook.service','HookDto','(((.+)+)+)+$','671769HXUNOP','hooks/','search','__esModule','4978768WnfWUs','create','GitlabHookService','1834054QtsoMT','7eKOcaq','../../../core/errors/not-found.error','apiUrl','../dto/hook.dto','BadRequestError','post','request','220CdikCM','fromGitlab','GitHookService','getAll','23466yYtmSp','../../git-api/services/gitlab-api.service','4870XFMnNE','createRequest'];a74_0x5b34=function(){return _0x26c0ad;};return a74_0x5b34();}const a74_0x3d2df8=a74_0x2143;(function(_0x471f6d,_0x29ac38){const _0x547f4c=a74_0x2143,_0x5df5d0=_0x471f6d();while(!![]){try{const _0xf00411=parseInt(_0x547f4c(0x219))/0x1+parseInt(_0x547f4c(0x204))/0x2+-parseInt(_0x547f4c(0x217))/0x3+parseInt(_0x547f4c(0x1f7))/0x4*(parseInt(_0x547f4c(0x212))/0x5)+-parseInt(_0x547f4c(0x210))/0x6+parseInt(_0x547f4c(0x205))/0x7*(-parseInt(_0x547f4c(0x201))/0x8)+-parseInt(_0x547f4c(0x1fd))/0x9*(parseInt(_0x547f4c(0x20c))/0xa);if(_0xf00411===_0x29ac38)break;else _0x5df5d0['push'](_0x5df5d0['shift']());}catch(_0x184db7){_0x5df5d0['push'](_0x5df5d0['shift']());}}}(a74_0x5b34,0xb578f));const a74_0x181100=function(){let _0x4b16a6=!![];return function(_0xfa2f74,_0x4a2f78){const _0x35a333=_0x4b16a6?function(){if(_0x4a2f78){const _0x221afa=_0x4a2f78['apply'](_0xfa2f74,arguments);return _0x4a2f78=null,_0x221afa;}}:function(){};return _0x4b16a6=![],_0x35a333;};}(),a74_0x48acf4=a74_0x181100(this,function(){const _0x527739=a74_0x2143;return a74_0x48acf4['toString']()['search'](_0x527739(0x1fc))[_0x527739(0x21b)]()['constructor'](a74_0x48acf4)[_0x527739(0x1ff)](_0x527739(0x1fc));});a74_0x48acf4();'use strict';var __importDefault=this&&this[a74_0x3d2df8(0x1f6)]||function(_0x344108){const _0x570608=a74_0x3d2df8;return _0x344108&&_0x344108[_0x570608(0x200)]?_0x344108:{'default':_0x344108};};Object[a74_0x3d2df8(0x1f8)](exports,a74_0x3d2df8(0x200),{'value':!![]}),exports[a74_0x3d2df8(0x203)]=void 0x0;const bad_request_error_1=require(a74_0x3d2df8(0x1f4)),not_found_error_1=require(a74_0x3d2df8(0x206)),gitlab_api_service_1=require(a74_0x3d2df8(0x211)),typedi_1=__importDefault(require('typedi')),hook_dto_1=require(a74_0x3d2df8(0x208)),git_hook_service_1=require(a74_0x3d2df8(0x1fa));class GitlabHookService extends git_hook_service_1[a74_0x3d2df8(0x20e)]{constructor(_0x443ae5){const _0x599272=a74_0x3d2df8;super(_0x443ae5),this[_0x599272(0x20b)]=this[_0x599272(0x213)]();}['createRequest'](){const _0x123c57=a74_0x3d2df8,_0x28413b=typedi_1[_0x123c57(0x1f3)][_0x123c57(0x214)](gitlab_api_service_1[_0x123c57(0x1f9)]);return _0x28413b[_0x123c57(0x213)](this[_0x123c57(0x1f5)][_0x123c57(0x207)]);}async[a74_0x3d2df8(0x202)](_0xf463ab){const _0x5701a1=a74_0x3d2df8;try{const _0x16a844=await this[_0x5701a1(0x20b)][_0x5701a1(0x20a)]('hooks',_0xf463ab);return hook_dto_1[_0x5701a1(0x1fb)][_0x5701a1(0x20d)](_0x16a844);}catch(_0x530635){throw new bad_request_error_1[(_0x5701a1(0x209))](_0x530635);}}async['getOne'](_0x15ba57){const _0x4c13a4=a74_0x3d2df8;try{const _0x55cced=await this[_0x4c13a4(0x20b)][_0x4c13a4(0x214)]('hooks/'+_0x15ba57);return hook_dto_1['HookDto'][_0x4c13a4(0x20d)](_0x55cced);}catch(_0x595089){throw new not_found_error_1[(_0x4c13a4(0x216))](_0x595089);}}async[a74_0x3d2df8(0x20f)](){const _0x495a29=a74_0x3d2df8;try{const _0x1110b7=await this[_0x495a29(0x20b)][_0x495a29(0x214)](_0x495a29(0x21c));return _0x1110b7['map'](_0x4eba4b=>hook_dto_1[_0x495a29(0x1fb)][_0x495a29(0x20d)](_0x4eba4b));}catch(_0x461d0c){throw new not_found_error_1[(_0x495a29(0x216))](_0x461d0c);}}async[a74_0x3d2df8(0x215)](_0xc2841c,_0x1b5a03){const _0x5447fa=a74_0x3d2df8;try{const _0x17cea7=await this[_0x5447fa(0x20b)][_0x5447fa(0x218)](_0x5447fa(0x1fe)+_0xc2841c,_0x1b5a03);return hook_dto_1[_0x5447fa(0x1fb)][_0x5447fa(0x20d)](_0x17cea7);}catch(_0x3e0396){throw new not_found_error_1[(_0x5447fa(0x216))](_0x3e0396);}}async[a74_0x3d2df8(0x21a)](_0x43a637){const _0x27da86=a74_0x3d2df8;try{await this[_0x27da86(0x20b)][_0x27da86(0x21a)]('hooks/'+_0x43a637);}catch(_0x3d0fc5){throw new not_found_error_1[(_0x27da86(0x216))](_0x3d0fc5);}}}exports[a74_0x3d2df8(0x203)]=GitlabHookService;