const a23_0x2c66=['1shbBJU','value','4SECTeA','pipes','type','META_HANDLER_ARGS','META_HANDLER_PARAMTYPES','index','query','test','constructor','transformable','getOwnMetadata','push','context','795644IIxNUr','validatable','300559EkWXmK','sort','1150613JXqaAl','handlerParamInjector','params','__esModule','apply','1974219uCfUzm','1176552MoNnDg','defineProperty','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','212423SAyDZR','data','transform','89186oZQoZH'];const a23_0x1bb888=a23_0x24ef;(function(_0x65484c,_0x4ee7d3){const _0xe91405=a23_0x24ef;while(!![]){try{const _0x5da9b0=-parseInt(_0xe91405(0xc8))+-parseInt(_0xe91405(0xbb))*parseInt(_0xe91405(0xb8))+parseInt(_0xe91405(0xcc))+parseInt(_0xe91405(0xd5))+-parseInt(_0xe91405(0xca))*parseInt(_0xe91405(0xb9))+-parseInt(_0xe91405(0xd2))+parseInt(_0xe91405(0xd1));if(_0x5da9b0===_0x4ee7d3)break;else _0x65484c['push'](_0x65484c['shift']());}catch(_0x468eca){_0x65484c['push'](_0x65484c['shift']());}}}(a23_0x2c66,0xaccac));const a23_0x55f913=function(){let _0x32b4bd=!![];return function(_0x29c030,_0x3abfa6){const _0x3575ab=_0x32b4bd?function(){const _0x389176=a23_0x24ef;if(_0x3abfa6){const _0x197493=_0x3abfa6[_0x389176(0xd0)](_0x29c030,arguments);return _0x3abfa6=null,_0x197493;}}:function(){};return _0x32b4bd=![],_0x3575ab;};}(),a23_0x1b8747=a23_0x55f913(this,function(){const _0x265497=function(){const _0x4ded93=a23_0x24ef,_0x55ae37=_0x265497[_0x4ded93(0xc3)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x4ded93(0xc3)](_0x4ded93(0xd4));return!_0x55ae37[_0x4ded93(0xc2)](a23_0x1b8747);};return _0x265497();});a23_0x1b8747();'use strict';Object[a23_0x1bb888(0xd3)](exports,a23_0x1bb888(0xcf),{'value':!![]}),exports[a23_0x1bb888(0xcd)]=void 0x0;function a23_0x24ef(_0x37623a,_0x187892){return a23_0x24ef=function(_0x3a7328,_0x1b8747){_0x3a7328=_0x3a7328-0xb8;let _0x55f913=a23_0x2c66[_0x3a7328];return _0x55f913;},a23_0x24ef(_0x37623a,_0x187892);}const constants_1=require('../constants');async function injectParam(_0x3e1ef2,_0x554610,_0x4dd01d){const _0x531988=a23_0x1bb888;var _0x3c2006,_0x4f7da9;const _0x2d8dbe=Reflect['getMetadata'](constants_1[_0x531988(0xbf)],_0x3e1ef2),_0x345bec=(_0x3c2006=_0x554610[_0x531988(0xd6)])===null||_0x3c2006===void 0x0?void 0x0:_0x3c2006['name'],_0x1b86d6=((_0x4f7da9=_0x554610[_0x531988(0xd6)])===null||_0x4f7da9===void 0x0?void 0x0:_0x4f7da9[_0x531988(0xbc)])||[];let _0x5ab590=_0x345bec?_0x4dd01d[_0x345bec]:_0x4dd01d;for(const _0x7551b0 of _0x1b86d6){_0x7551b0[_0x531988(0xc9)]&&await _0x7551b0['validate'](_0x5ab590,_0x2d8dbe[_0x554610['index']]),_0x7551b0[_0x531988(0xc4)]&&(_0x5ab590=await _0x7551b0[_0x531988(0xd7)](_0x5ab590,_0x2d8dbe[_0x554610[_0x531988(0xc0)]]));}return _0x5ab590;}async function injectCustomParam(_0x5cdf7a,_0x5bf91c){const _0x21d572=a23_0x1bb888;return _0x5cdf7a[_0x21d572(0xba)]&&_0x5cdf7a[_0x21d572(0xba)](_0x5bf91c,_0x5cdf7a['data']);}async function handlerParamInjector(_0x2d34a8,_0x4768b3,_0x530650,_0x38a5a2){const _0xf6f6a1=a23_0x1bb888,_0x246203=Reflect[_0xf6f6a1(0xc5)](constants_1[_0xf6f6a1(0xbe)],_0x2d34a8)||[],_0x3c8100=[];for(const _0x2a7db6 of _0x246203[_0xf6f6a1(0xcb)]((_0x47f6be,_0x3b0ce7)=>_0x47f6be[_0xf6f6a1(0xc0)]-_0x3b0ce7['index'])){switch(_0x2a7db6[_0xf6f6a1(0xbd)]){case 0x0:_0x3c8100[_0xf6f6a1(0xc6)](_0x4768b3[_0xf6f6a1(0xc7)]);break;case 0x4:_0x3c8100[_0xf6f6a1(0xc6)](_0x4768b3);break;case 0x5:_0x3c8100[_0xf6f6a1(0xc6)](_0x530650);break;case 0x6:_0x3c8100[_0xf6f6a1(0xc6)](_0x38a5a2);break;case 0x1:_0x3c8100['push'](await injectParam(_0x2d34a8,_0x2a7db6,_0x4768b3['body']));break;case 0x2:_0x3c8100[_0xf6f6a1(0xc6)](await injectParam(_0x2d34a8,_0x2a7db6,_0x4768b3[_0xf6f6a1(0xce)]));break;case 0x3:_0x3c8100[_0xf6f6a1(0xc6)](await injectParam(_0x2d34a8,_0x2a7db6,_0x4768b3[_0xf6f6a1(0xc1)]));break;case 0x7:_0x3c8100[_0xf6f6a1(0xc6)](await injectCustomParam(_0x2a7db6,_0x4768b3[_0xf6f6a1(0xc7)]));break;default:continue;}}return _0x3c8100;}exports[a23_0x1bb888(0xcd)]=handlerParamInjector;