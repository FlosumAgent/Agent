const a23_0x54ec=['value','getMetadata','apply','425279wobgyF','META_HANDLER_PARAMTYPES','constructor','index','context','66778MJJKQt','test','handlerParamInjector','push','1042582ymxAZt','pipes','6087xVHZex','transformable','1112744KSrUdf','validate','body','1031lZNEir','../constants','1eDHBPW','META_HANDLER_ARGS','validatable','query','data','transform','754279bSarlZ','785pGJCrp','1bSRUfB','4smYvRC','defineProperty','return\x20/\x22\x20+\x20this\x20+\x20\x22/','type','__esModule','797ulonoW'];const a23_0x59b152=a23_0x30c3;(function(_0x1bafbb,_0x1f1f94){const _0x2c3f1f=a23_0x30c3;while(!![]){try{const _0xf0f0cb=-parseInt(_0x2c3f1f(0x1fb))+-parseInt(_0x2c3f1f(0x1f7))+parseInt(_0x2c3f1f(0x207))*-parseInt(_0x2c3f1f(0x20e))+parseInt(_0x2c3f1f(0x1ee))*-parseInt(_0x2c3f1f(0x209))+parseInt(_0x2c3f1f(0x208))*-parseInt(_0x2c3f1f(0x1f3))+parseInt(_0x2c3f1f(0x206))*-parseInt(_0x2c3f1f(0x200))+-parseInt(_0x2c3f1f(0x1f9))*-parseInt(_0x2c3f1f(0x1fe));if(_0xf0f0cb===_0x1f1f94)break;else _0x1bafbb['push'](_0x1bafbb['shift']());}catch(_0x18767b){_0x1bafbb['push'](_0x1bafbb['shift']());}}}(a23_0x54ec,0xed709));const a23_0x18592d=function(){let _0x367a5c=!![];return function(_0x3bf07d,_0x5c5dd7){const _0x284b23=_0x367a5c?function(){const _0x4bf313=a23_0x30c3;if(_0x5c5dd7){const _0xcb6b68=_0x5c5dd7[_0x4bf313(0x1ed)](_0x3bf07d,arguments);return _0x5c5dd7=null,_0xcb6b68;}}:function(){};return _0x367a5c=![],_0x284b23;};}(),a23_0x39cd04=a23_0x18592d(this,function(){const _0x134a82=function(){const _0x135c78=a23_0x30c3,_0x4e5027=_0x134a82[_0x135c78(0x1f0)](_0x135c78(0x20b))()[_0x135c78(0x1f0)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x4e5027[_0x135c78(0x1f4)](a23_0x39cd04);};return _0x134a82();});a23_0x39cd04();'use strict';Object[a23_0x59b152(0x20a)](exports,a23_0x59b152(0x20d),{'value':!![]}),exports[a23_0x59b152(0x1f5)]=void 0x0;const constants_1=require(a23_0x59b152(0x1ff));async function injectParam(_0x10d086,_0x13e374,_0x4f5747){const _0x34b724=a23_0x59b152;var _0x5eea17,_0x2a5f9b;const _0x5a0ff6=Reflect[_0x34b724(0x210)](constants_1[_0x34b724(0x1ef)],_0x10d086),_0x34a13a=(_0x5eea17=_0x13e374['data'])===null||_0x5eea17===void 0x0?void 0x0:_0x5eea17['name'],_0x57e8ae=((_0x2a5f9b=_0x13e374[_0x34b724(0x204)])===null||_0x2a5f9b===void 0x0?void 0x0:_0x2a5f9b[_0x34b724(0x1f8)])||[];let _0x44c70c=_0x34a13a?_0x4f5747[_0x34a13a]:_0x4f5747;for(const _0x531b6a of _0x57e8ae){_0x531b6a[_0x34b724(0x202)]&&await _0x531b6a[_0x34b724(0x1fc)](_0x44c70c,_0x5a0ff6[_0x13e374[_0x34b724(0x1f1)]]),_0x531b6a[_0x34b724(0x1fa)]&&(_0x44c70c=await _0x531b6a[_0x34b724(0x205)](_0x44c70c,_0x5a0ff6[_0x13e374[_0x34b724(0x1f1)]]));}return _0x44c70c;}async function injectCustomParam(_0x4a53ad,_0x2863ba){const _0x509ba2=a23_0x59b152;return _0x4a53ad['value']&&_0x4a53ad[_0x509ba2(0x20f)](_0x2863ba,_0x4a53ad['data']);}async function handlerParamInjector(_0x390c95,_0x2dc796,_0x4cafb9,_0x1f3a52){const _0x3ba5ea=a23_0x59b152,_0x4248b9=Reflect['getOwnMetadata'](constants_1[_0x3ba5ea(0x201)],_0x390c95)||[],_0x3ea355=[];for(const _0x10a188 of _0x4248b9['sort']((_0x370fae,_0x8cf86d)=>_0x370fae[_0x3ba5ea(0x1f1)]-_0x8cf86d[_0x3ba5ea(0x1f1)])){switch(_0x10a188[_0x3ba5ea(0x20c)]){case 0x0:_0x3ea355[_0x3ba5ea(0x1f6)](_0x2dc796[_0x3ba5ea(0x1f2)]);break;case 0x4:_0x3ea355[_0x3ba5ea(0x1f6)](_0x2dc796);break;case 0x5:_0x3ea355[_0x3ba5ea(0x1f6)](_0x4cafb9);break;case 0x6:_0x3ea355[_0x3ba5ea(0x1f6)](_0x1f3a52);break;case 0x1:_0x3ea355['push'](await injectParam(_0x390c95,_0x10a188,_0x2dc796[_0x3ba5ea(0x1fd)]));break;case 0x2:_0x3ea355[_0x3ba5ea(0x1f6)](await injectParam(_0x390c95,_0x10a188,_0x2dc796['params']));break;case 0x3:_0x3ea355[_0x3ba5ea(0x1f6)](await injectParam(_0x390c95,_0x10a188,_0x2dc796[_0x3ba5ea(0x203)]));break;case 0x7:_0x3ea355[_0x3ba5ea(0x1f6)](await injectCustomParam(_0x10a188,_0x2dc796[_0x3ba5ea(0x1f2)]));break;default:continue;}}return _0x3ea355;}function a23_0x30c3(_0x30a8e6,_0x4bf445){return a23_0x30c3=function(_0x189c1c,_0x39cd04){_0x189c1c=_0x189c1c-0x1ed;let _0x18592d=a23_0x54ec[_0x189c1c];return _0x18592d;},a23_0x30c3(_0x30a8e6,_0x4bf445);}exports[a23_0x59b152(0x1f5)]=handlerParamInjector;