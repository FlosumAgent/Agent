const a52_0x30e3=['refs/branches/','../../../core/errors/not-found.error','get','createRequest','delete','BitbucketBranchService','25zVbGzx','values','defineProperty','4151781roKVOP','getOne','BitbucketApiService','test','381519GgLGJe','1520212qTyhub','apply','__esModule','46678okRdpx','typedi','repository','default','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','constructor','__importDefault','map','NotFoundError','return\x20/\x22\x20+\x20this\x20+\x20\x22/','GitBranchService','834115RhEkVn','apiUrl','421077lAvoXz','../../git-api/services/bitbucket-api.service','243541HhIIrj','fromBitbucket','./git-branch.service','request','4zuSKcs'];const a52_0x562397=a52_0x23c4;(function(_0x36f76f,_0x1c7c02){const _0x27604a=a52_0x23c4;while(!![]){try{const _0x301fd6=-parseInt(_0x27604a(0x10c))+-parseInt(_0x27604a(0x11c))+-parseInt(_0x27604a(0x11e))+-parseInt(_0x27604a(0x11a))+-parseInt(_0x27604a(0x10f))*-parseInt(_0x27604a(0x129))+-parseInt(_0x27604a(0x122))*parseInt(_0x27604a(0x10b))+parseInt(_0x27604a(0x12c));if(_0x301fd6===_0x1c7c02)break;else _0x36f76f['push'](_0x36f76f['shift']());}catch(_0x47b23c){_0x36f76f['push'](_0x36f76f['shift']());}}}(a52_0x30e3,0xbce4e));const a52_0x434595=function(){let _0x4246c0=!![];return function(_0x48991c,_0x5e4e6c){const _0x47dfc4=_0x4246c0?function(){const _0x42b11c=a52_0x23c4;if(_0x5e4e6c){const _0x307bcb=_0x5e4e6c[_0x42b11c(0x10d)](_0x48991c,arguments);return _0x5e4e6c=null,_0x307bcb;}}:function(){};return _0x4246c0=![],_0x47dfc4;};}(),a52_0x14b11b=a52_0x434595(this,function(){const _0x3dd1af=function(){const _0x164fae=a52_0x23c4,_0x4156dc=_0x3dd1af['constructor'](_0x164fae(0x118))()[_0x164fae(0x114)](_0x164fae(0x113));return!_0x4156dc[_0x164fae(0x12f)](a52_0x14b11b);};return _0x3dd1af();});a52_0x14b11b();'use strict';function a52_0x23c4(_0x299b85,_0x53bb79){return a52_0x23c4=function(_0x233d2a,_0x14b11b){_0x233d2a=_0x233d2a-0x10b;let _0x434595=a52_0x30e3[_0x233d2a];return _0x434595;},a52_0x23c4(_0x299b85,_0x53bb79);}var __importDefault=this&&this[a52_0x562397(0x115)]||function(_0x4dab4b){const _0x488bc1=a52_0x562397;return _0x4dab4b&&_0x4dab4b[_0x488bc1(0x10e)]?_0x4dab4b:{'default':_0x4dab4b};};Object[a52_0x562397(0x12b)](exports,'__esModule',{'value':!![]}),exports[a52_0x562397(0x128)]=void 0x0;const not_found_error_1=require(a52_0x562397(0x124)),bitbucket_api_service_1=require(a52_0x562397(0x11d)),typedi_1=__importDefault(require(a52_0x562397(0x110))),branch_dto_1=require('../dto/branch.dto'),git_branch_service_1=require(a52_0x562397(0x120));class BitbucketBranchService extends git_branch_service_1[a52_0x562397(0x119)]{constructor(_0x1dc027){const _0x58cab6=a52_0x562397;super(_0x1dc027),this[_0x58cab6(0x121)]=this['createRequest']();}[a52_0x562397(0x126)](){const _0x590cdd=a52_0x562397,_0x3d99c7=typedi_1[_0x590cdd(0x112)][_0x590cdd(0x125)](bitbucket_api_service_1[_0x590cdd(0x12e)]);return _0x3d99c7[_0x590cdd(0x126)](this[_0x590cdd(0x111)][_0x590cdd(0x11b)]);}async[a52_0x562397(0x12d)](_0x51bfe7){const _0x3ab020=a52_0x562397;try{const _0x3a4a72=await this['request'][_0x3ab020(0x125)](_0x3ab020(0x123)+_0x51bfe7);return branch_dto_1['BranchDto'][_0x3ab020(0x11f)](_0x3a4a72);}catch(_0x408b16){throw new not_found_error_1[(_0x3ab020(0x117))](_0x408b16);}}async['getAll'](){const _0x467487=a52_0x562397;try{const _0x53b7f5=await this[_0x467487(0x121)][_0x467487(0x125)]('refs/branches');return _0x53b7f5[_0x467487(0x12a)][_0x467487(0x116)](_0xfdce4d=>branch_dto_1['BranchDto'][_0x467487(0x11f)](_0xfdce4d));}catch(_0x44ba2f){throw new not_found_error_1[(_0x467487(0x117))](_0x44ba2f);}}async[a52_0x562397(0x127)](_0x37156b){const _0x162858=a52_0x562397;try{await this[_0x162858(0x121)][_0x162858(0x127)](_0x162858(0x123)+_0x37156b);}catch(_0x25b97d){throw new not_found_error_1['NotFoundError'](_0x25b97d);}}}exports[a52_0x562397(0x128)]=BitbucketBranchService;