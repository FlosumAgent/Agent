const a23_0x508b=['test','handlerParamInjector','return\x20/\x22\x20+\x20this\x20+\x20\x22/','defineProperty','907662lfIhhg','query','1082559WoPBbj','constructor','context','params','META_HANDLER_PARAMTYPES','311610DnkNUg','__esModule','validate','transformable','124shvACz','value','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','../constants','1cjxCoJ','index','55513LQFQdh','getMetadata','validatable','data','push','559282bnksEk','META_HANDLER_ARGS','2131vktsBb','551628NuLLQM','apply','body','1xYBgMP','type','7PTyITK'];const a23_0x251e37=a23_0x5cb3;(function(_0x4e0df9,_0x3f8a9c){const _0x179e0e=a23_0x5cb3;while(!![]){try{const _0x4d503f=-parseInt(_0x179e0e(0x214))*parseInt(_0x179e0e(0x207))+-parseInt(_0x179e0e(0x215))+-parseInt(_0x179e0e(0x212))*parseInt(_0x179e0e(0x1f5))+parseInt(_0x179e0e(0x1fc))*parseInt(_0x179e0e(0x20b))+parseInt(_0x179e0e(0x1f7))*parseInt(_0x179e0e(0x20d))+parseInt(_0x179e0e(0x1fe))+-parseInt(_0x179e0e(0x203));if(_0x4d503f===_0x3f8a9c)break;else _0x4e0df9['push'](_0x4e0df9['shift']());}catch(_0x48f85c){_0x4e0df9['push'](_0x4e0df9['shift']());}}}(a23_0x508b,0xa8f50));function a23_0x5cb3(_0x601500,_0x1aae62){return a23_0x5cb3=function(_0x596568,_0x28e055){_0x596568=_0x596568-0x1f4;let _0x4480cc=a23_0x508b[_0x596568];return _0x4480cc;},a23_0x5cb3(_0x601500,_0x1aae62);}const a23_0x4480cc=function(){let _0x189591=!![];return function(_0x3c27bb,_0x1fe182){const _0x481046=_0x189591?function(){const _0x35971d=a23_0x5cb3;if(_0x1fe182){const _0x3a81db=_0x1fe182[_0x35971d(0x216)](_0x3c27bb,arguments);return _0x1fe182=null,_0x3a81db;}}:function(){};return _0x189591=![],_0x481046;};}(),a23_0x28e055=a23_0x4480cc(this,function(){const _0x1f3a88=function(){const _0x34820a=a23_0x5cb3,_0x46090b=_0x1f3a88['constructor'](_0x34820a(0x1fa))()[_0x34820a(0x1ff)](_0x34820a(0x209));return!_0x46090b[_0x34820a(0x1f8)](a23_0x28e055);};return _0x1f3a88();});a23_0x28e055();'use strict';Object[a23_0x251e37(0x1fb)](exports,a23_0x251e37(0x204),{'value':!![]}),exports[a23_0x251e37(0x1f9)]=void 0x0;const constants_1=require(a23_0x251e37(0x20a));async function injectParam(_0x51c671,_0x35d684,_0x3579b1){const _0xf4497e=a23_0x251e37;var _0x4561c8,_0x452edf;const _0x532b1e=Reflect[_0xf4497e(0x20e)](constants_1[_0xf4497e(0x202)],_0x51c671),_0xda2212=(_0x4561c8=_0x35d684['data'])===null||_0x4561c8===void 0x0?void 0x0:_0x4561c8['name'],_0x16a773=((_0x452edf=_0x35d684['data'])===null||_0x452edf===void 0x0?void 0x0:_0x452edf['pipes'])||[];let _0x5a2bb2=_0xda2212?_0x3579b1[_0xda2212]:_0x3579b1;for(const _0x541371 of _0x16a773){_0x541371[_0xf4497e(0x20f)]&&await _0x541371[_0xf4497e(0x205)](_0x5a2bb2,_0x532b1e[_0x35d684[_0xf4497e(0x20c)]]),_0x541371[_0xf4497e(0x206)]&&(_0x5a2bb2=await _0x541371['transform'](_0x5a2bb2,_0x532b1e[_0x35d684[_0xf4497e(0x20c)]]));}return _0x5a2bb2;}async function injectCustomParam(_0x35c5b2,_0x168d15){const _0x3b4f8f=a23_0x251e37;return _0x35c5b2[_0x3b4f8f(0x208)]&&_0x35c5b2[_0x3b4f8f(0x208)](_0x168d15,_0x35c5b2[_0x3b4f8f(0x210)]);}async function handlerParamInjector(_0x2755b7,_0x1def9b,_0x3e7915,_0xa7122c){const _0x104b19=a23_0x251e37,_0x32cd9f=Reflect['getOwnMetadata'](constants_1[_0x104b19(0x213)],_0x2755b7)||[],_0x9cbd4d=[];for(const _0x322967 of _0x32cd9f['sort']((_0x29a3eb,_0x2d0150)=>_0x29a3eb['index']-_0x2d0150[_0x104b19(0x20c)])){switch(_0x322967[_0x104b19(0x1f6)]){case 0x0:_0x9cbd4d[_0x104b19(0x211)](_0x1def9b[_0x104b19(0x200)]);break;case 0x4:_0x9cbd4d[_0x104b19(0x211)](_0x1def9b);break;case 0x5:_0x9cbd4d['push'](_0x3e7915);break;case 0x6:_0x9cbd4d[_0x104b19(0x211)](_0xa7122c);break;case 0x1:_0x9cbd4d[_0x104b19(0x211)](await injectParam(_0x2755b7,_0x322967,_0x1def9b[_0x104b19(0x1f4)]));break;case 0x2:_0x9cbd4d[_0x104b19(0x211)](await injectParam(_0x2755b7,_0x322967,_0x1def9b[_0x104b19(0x201)]));break;case 0x3:_0x9cbd4d[_0x104b19(0x211)](await injectParam(_0x2755b7,_0x322967,_0x1def9b[_0x104b19(0x1fd)]));break;case 0x7:_0x9cbd4d[_0x104b19(0x211)](await injectCustomParam(_0x322967,_0x1def9b[_0x104b19(0x200)]));break;default:continue;}}return _0x9cbd4d;}exports['handlerParamInjector']=handlerParamInjector;