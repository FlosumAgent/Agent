var a67_0x3dc3=['create','__esModule','function','../../shared/services/auth-settings.service','request','229911nXqdEd','metadata','47sZkoAc','length','get','3rxsUiZ','../../shared/services/app-settings.service','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','design:paramtypes','__setModuleDefault','getOwnPropertyDescriptor','__decorate','isLoggedIn','1036572yecfSD','test','user','decorate','AuthSettingsService','gitlab','constructor','Service','1hbkjHE','94218XGfaiy','application/vnd.github.v3+json','__param','1387955XBIdzE','groups/','13LKTkYJ','getHeaders','default','object','1693fMkXcY','apply','__createBinding','defineProperty','1011433xesXRb','444929AwqCcS','call','return\x20/\x22\x20+\x20this\x20+\x20\x22/','__importStar','prototype','Inject','AppSettingsService','GitlabApiService','__metadata','hasOwnProperty','getCurrentUser'];var a67_0x485d74=a67_0x492c;(function(_0x11763e,_0x37b6d7){var _0x199758=a67_0x492c;while(!![]){try{var _0x590c49=parseInt(_0x199758(0x15c))*-parseInt(_0x199758(0x164))+-parseInt(_0x199758(0x16e))*parseInt(_0x199758(0x151))+-parseInt(_0x199758(0x16a))*-parseInt(_0x199758(0x165))+-parseInt(_0x199758(0x14f))+parseInt(_0x199758(0x168))+-parseInt(_0x199758(0x154))*parseInt(_0x199758(0x173))+parseInt(_0x199758(0x172));if(_0x590c49===_0x37b6d7)break;else _0x11763e['push'](_0x11763e['shift']());}catch(_0x5cfea0){_0x11763e['push'](_0x11763e['shift']());}}}(a67_0x3dc3,0xe6515));var a67_0x51233c=function(){var _0x306604=!![];return function(_0x2c2672,_0x5ece2b){var _0x38aa4f=_0x306604?function(){var _0x32a34f=a67_0x492c;if(_0x5ece2b){var _0x2a9545=_0x5ece2b[_0x32a34f(0x16f)](_0x2c2672,arguments);return _0x5ece2b=null,_0x2a9545;}}:function(){};return _0x306604=![],_0x38aa4f;};}(),a67_0x3a7cd6=a67_0x51233c(this,function(){var _0xc9bd96=function(){var _0x5d44db=a67_0x492c,_0x35f031=_0xc9bd96[_0x5d44db(0x162)](_0x5d44db(0x175))()[_0x5d44db(0x162)](_0x5d44db(0x156));return!_0x35f031[_0x5d44db(0x15d)](a67_0x3a7cd6);};return _0xc9bd96();});a67_0x3a7cd6();'use strict';var __createBinding=this&&this[a67_0x485d74(0x170)]||(Object[a67_0x485d74(0x14a)]?function(_0x3c3900,_0x22e74d,_0x362799,_0x1c2247){if(_0x1c2247===undefined)_0x1c2247=_0x362799;Object['defineProperty'](_0x3c3900,_0x1c2247,{'enumerable':!![],'get':function(){return _0x22e74d[_0x362799];}});}:function(_0xd7d76b,_0x3e24cc,_0x3aebf9,_0x3da775){if(_0x3da775===undefined)_0x3da775=_0x3aebf9;_0xd7d76b[_0x3da775]=_0x3e24cc[_0x3aebf9];}),__setModuleDefault=this&&this[a67_0x485d74(0x158)]||(Object[a67_0x485d74(0x14a)]?function(_0x19939e,_0x38d8a6){var _0x49a453=a67_0x485d74;Object['defineProperty'](_0x19939e,_0x49a453(0x16c),{'enumerable':!![],'value':_0x38d8a6});}:function(_0x27309e,_0x8d514c){var _0x4eced3=a67_0x485d74;_0x27309e[_0x4eced3(0x16c)]=_0x8d514c;}),__decorate=this&&this[a67_0x485d74(0x15a)]||function(_0x1bd0bf,_0x4c4c1d,_0x1cd1ab,_0x449e18){var _0x14d227=a67_0x485d74,_0x317386=arguments[_0x14d227(0x152)],_0x10eb72=_0x317386<0x3?_0x4c4c1d:_0x449e18===null?_0x449e18=Object[_0x14d227(0x159)](_0x4c4c1d,_0x1cd1ab):_0x449e18,_0x2ebc06;if(typeof Reflect===_0x14d227(0x16d)&&typeof Reflect[_0x14d227(0x15f)]==='function')_0x10eb72=Reflect[_0x14d227(0x15f)](_0x1bd0bf,_0x4c4c1d,_0x1cd1ab,_0x449e18);else{for(var _0x395e91=_0x1bd0bf['length']-0x1;_0x395e91>=0x0;_0x395e91--)if(_0x2ebc06=_0x1bd0bf[_0x395e91])_0x10eb72=(_0x317386<0x3?_0x2ebc06(_0x10eb72):_0x317386>0x3?_0x2ebc06(_0x4c4c1d,_0x1cd1ab,_0x10eb72):_0x2ebc06(_0x4c4c1d,_0x1cd1ab))||_0x10eb72;}return _0x317386>0x3&&_0x10eb72&&Object['defineProperty'](_0x4c4c1d,_0x1cd1ab,_0x10eb72),_0x10eb72;},__importStar=this&&this[a67_0x485d74(0x142)]||function(_0x1e557c){var _0x3247a0=a67_0x485d74;if(_0x1e557c&&_0x1e557c[_0x3247a0(0x14b)])return _0x1e557c;var _0x32b112={};if(_0x1e557c!=null){for(var _0x20c4e2 in _0x1e557c)if(_0x20c4e2!==_0x3247a0(0x16c)&&Object[_0x3247a0(0x143)][_0x3247a0(0x148)][_0x3247a0(0x174)](_0x1e557c,_0x20c4e2))__createBinding(_0x32b112,_0x1e557c,_0x20c4e2);}return __setModuleDefault(_0x32b112,_0x1e557c),_0x32b112;},__metadata=this&&this[a67_0x485d74(0x147)]||function(_0x45ae49,_0x44af0f){var _0x66ab11=a67_0x485d74;if(typeof Reflect===_0x66ab11(0x16d)&&typeof Reflect[_0x66ab11(0x150)]===_0x66ab11(0x14c))return Reflect[_0x66ab11(0x150)](_0x45ae49,_0x44af0f);},__param=this&&this[a67_0x485d74(0x167)]||function(_0x5cabd3,_0x5e1285){return function(_0x9e2372,_0x19913c){_0x5e1285(_0x9e2372,_0x19913c,_0x5cabd3);};};function a67_0x492c(_0x3d048d,_0x47d0a1){return a67_0x492c=function(_0x4ef227,_0x3a7cd6){_0x4ef227=_0x4ef227-0x142;var _0x51233c=a67_0x3dc3[_0x4ef227];return _0x51233c;},a67_0x492c(_0x3d048d,_0x47d0a1);}Object[a67_0x485d74(0x171)](exports,a67_0x485d74(0x14b),{'value':!![]}),exports[a67_0x485d74(0x146)]=void 0x0;const app_settings_service_1=require(a67_0x485d74(0x155)),auth_settings_service_1=require(a67_0x485d74(0x14d)),typedi_1=__importStar(require('typedi')),git_api_service_1=require('./git-api.service');let GitlabApiService=class GitlabApiService extends git_api_service_1['GitApiService']{constructor(_0x52ae8d){super(_0x52ae8d);}[a67_0x485d74(0x16b)](){var _0x3c10ec=a67_0x485d74;const _0x43885a=typedi_1[_0x3c10ec(0x16c)]['get'](auth_settings_service_1[_0x3c10ec(0x160)]),{token:_0x546d5b}=_0x43885a[_0x3c10ec(0x161)];return{'Accept':_0x3c10ec(0x166),'Authorization':'Bearer\x20'+_0x546d5b};}[a67_0x485d74(0x149)](){var _0x247340=a67_0x485d74;return this[_0x247340(0x14e)][_0x247340(0x153)](_0x247340(0x15e));}['getGroup'](_0x5d929a){var _0x2b66c1=a67_0x485d74;return this['request'][_0x2b66c1(0x153)](_0x2b66c1(0x169)+_0x5d929a);}async[a67_0x485d74(0x15b)](){var _0x22c773=a67_0x485d74;try{return await this[_0x22c773(0x149)](),!![];}catch(_0x5661fc){return![];}}};GitlabApiService=__decorate([typedi_1[a67_0x485d74(0x163)](),__param(0x0,typedi_1[a67_0x485d74(0x144)]()),__metadata(a67_0x485d74(0x157),[app_settings_service_1[a67_0x485d74(0x145)]])],GitlabApiService),exports[a67_0x485d74(0x146)]=GitlabApiService;