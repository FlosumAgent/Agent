const a82_0x36b5=['path','../../../core','exists','MAX_WRITES_PER_TICK','map','parentComponents','../utils/xml','have\x20to\x20write\x20%d\x20files','unzip','log','files','join','../../internal/fs.internal','writeFile','82323NgbNQd','convertToString','replaceOrAppend','].\x20Original\x20error:\x20','return\x20/\x22\x20+\x20this\x20+\x20\x22/','default','MDApiWriter','makeDir','keys','writeParent','105951jNLDxJ','268323aXpngY','An\x20error\x20occurred\x20when\x20proceeding\x20component\x20','2543dkTCPF','../utils/zip','Zip','parse','readFile','all','components','Xml','__importDefault','async','30596eifKeh','defineProperty','137682dnOjQS','readZip','fileType','1UpiSgI','__esModule','4YBZOik','constructor','sourceDir','mdapi-writer','Logger','223423ajSrzW','length'];const a82_0xc7bf86=a82_0x4668;(function(_0x254f18,_0x3ef095){const _0x536fff=a82_0x4668;while(!![]){try{const _0x1e82a3=-parseInt(_0x536fff(0x1b7))*-parseInt(_0x536fff(0x1be))+-parseInt(_0x536fff(0x1a0))*-parseInt(_0x536fff(0x1bc))+parseInt(_0x536fff(0x1b9))+parseInt(_0x536fff(0x190))+-parseInt(_0x536fff(0x1ab))+-parseInt(_0x536fff(0x1aa))+parseInt(_0x536fff(0x1ad));if(_0x1e82a3===_0x3ef095)break;else _0x254f18['push'](_0x254f18['shift']());}catch(_0x9d86af){_0x254f18['push'](_0x254f18['shift']());}}}(a82_0x36b5,0x2f621));const a82_0x169e09=function(){let _0x2208c3=!![];return function(_0x357992,_0x44bce4){const _0x315b9f=_0x2208c3?function(){if(_0x44bce4){const _0x4bdbf1=_0x44bce4['apply'](_0x357992,arguments);return _0x44bce4=null,_0x4bdbf1;}}:function(){};return _0x2208c3=![],_0x315b9f;};}(),a82_0x5835b9=a82_0x169e09(this,function(){const _0x5ec6ed=function(){const _0x184d32=a82_0x4668,_0xf8ecfc=_0x5ec6ed[_0x184d32(0x18c)](_0x184d32(0x1a4))()[_0x184d32(0x18c)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0xf8ecfc['test'](a82_0x5835b9);};return _0x5ec6ed();});a82_0x5835b9();'use strict';var __importDefault=this&&this[a82_0xc7bf86(0x1b5)]||function(_0x10da24){const _0x42c6b0=a82_0xc7bf86;return _0x10da24&&_0x10da24[_0x42c6b0(0x1bd)]?_0x10da24:{'default':_0x10da24};};Object[a82_0xc7bf86(0x1b8)](exports,'__esModule',{'value':!![]}),exports[a82_0xc7bf86(0x1a6)]=void 0x0;const path_1=__importDefault(require(a82_0xc7bf86(0x192))),core_1=require(a82_0xc7bf86(0x193)),fs_internal_1=require(a82_0xc7bf86(0x19e)),xml_1=require(a82_0xc7bf86(0x198)),zip_1=require(a82_0xc7bf86(0x1ae)),child_types_1=__importDefault(require('./child-types')),logger=new core_1[(a82_0xc7bf86(0x18f))](a82_0xc7bf86(0x18e));function a82_0x4668(_0x245b21,_0x543303){return a82_0x4668=function(_0x10119b,_0x5835b9){_0x10119b=_0x10119b-0x18c;let _0x169e09=a82_0x36b5[_0x10119b];return _0x169e09;},a82_0x4668(_0x245b21,_0x543303);}class MDApiWriter{constructor(_0x58c756,_0x16d2b6){const _0x11651f=a82_0xc7bf86;this[_0x11651f(0x1b3)]=_0x58c756,this[_0x11651f(0x18d)]=_0x16d2b6,this[_0x11651f(0x195)]=0x64,this[_0x11651f(0x197)]={};}async[a82_0xc7bf86(0x1ba)](_0x32769e){const _0x4c0e4c=a82_0xc7bf86,_0x3cee3b=await zip_1[_0x4c0e4c(0x1af)][_0x4c0e4c(0x19a)](_0x32769e),_0x4d31c4=[];for(const _0x5889b7 of Object[_0x4c0e4c(0x1a8)](_0x3cee3b[_0x4c0e4c(0x19c)])){_0x4d31c4['push']({'filename':_0x5889b7,'body':await _0x3cee3b[_0x4c0e4c(0x19c)][_0x5889b7][_0x4c0e4c(0x1b6)]('text')});}return _0x4d31c4;}async[a82_0xc7bf86(0x1a9)](_0xfb0250){const _0x1e30f5=a82_0xc7bf86;try{const _0x5e5358=await this[_0x1e30f5(0x1ba)](_0xfb0250['body']);await Promise[_0x1e30f5(0x1b2)](_0x5e5358[_0x1e30f5(0x196)](({filename:_0x19a3df,body:_0xca91d})=>fs_internal_1['FS'][_0x1e30f5(0x19f)](path_1[_0x1e30f5(0x1a5)][_0x1e30f5(0x19d)](this[_0x1e30f5(0x18d)],_0x19a3df),_0xca91d)));}catch(_0x3365a8){throw new Error('An\x20error\x20occured\x20when\x20proceeding\x20component\x20'+_0xfb0250['fileName']+'\x20['+_0xfb0250[_0x1e30f5(0x1bb)]+_0x1e30f5(0x1a3)+_0x3365a8);}}async['writeChild'](_0xb9b300){const _0x16080d=a82_0xc7bf86,{filename:_0x1af681,body:_0x11e3e4}=(await this[_0x16080d(0x1ba)](_0xb9b300['body']))[0x0];try{if(!this['parentComponents'][_0x1af681]){const _0x1d4c53=path_1[_0x16080d(0x1a5)][_0x16080d(0x19d)](this['sourceDir'],_0x1af681);if(await fs_internal_1['FS'][_0x16080d(0x194)](_0x1d4c53)){const _0x358f17=await fs_internal_1['FS'][_0x16080d(0x1b1)](_0x1d4c53);this[_0x16080d(0x197)][_0x1af681]=await xml_1[_0x16080d(0x1b4)][_0x16080d(0x1b0)](_0x358f17);}else{this['parentComponents'][_0x1af681]=await xml_1[_0x16080d(0x1b4)][_0x16080d(0x1b0)](_0x11e3e4);return;}}const _0x5960f8=this[_0x16080d(0x197)][_0x1af681],_0x545958=await xml_1['Xml'][_0x16080d(0x1b0)](_0x11e3e4);xml_1[_0x16080d(0x1b4)][_0x16080d(0x1a2)](_0x5960f8,_0x545958);}catch(_0x400b2e){throw new Error(_0x16080d(0x1ac)+_0xb9b300['fileName']+'\x20['+_0xb9b300[_0x16080d(0x1bb)]+_0x16080d(0x1a3)+_0x400b2e);}}async['start'](){const _0x248280=a82_0xc7bf86;!await fs_internal_1['FS'][_0x248280(0x194)](this[_0x248280(0x18d)])&&await fs_internal_1['FS'][_0x248280(0x1a7)](this[_0x248280(0x18d)]);for(const _0x363bc5 of this[_0x248280(0x1b3)]){!child_types_1['default']['includes'](_0x363bc5[_0x248280(0x1bb)])?await this[_0x248280(0x1a9)](_0x363bc5):await this['writeChild'](_0x363bc5);}const _0x576c2e=Object[_0x248280(0x1a8)](this[_0x248280(0x197)]);logger[_0x248280(0x19b)](_0x248280(0x199),this[_0x248280(0x1b3)][_0x248280(0x191)]);while(_0x576c2e[_0x248280(0x191)]){const _0x39cca8=_0x576c2e['splice'](0x0,this[_0x248280(0x195)]);for(const _0x5b341d of _0x39cca8){await fs_internal_1['FS'][_0x248280(0x19f)](path_1[_0x248280(0x1a5)][_0x248280(0x19d)](this[_0x248280(0x18d)],_0x5b341d),xml_1['Xml'][_0x248280(0x1a1)](this[_0x248280(0x197)][_0x5b341d]));}}this[_0x248280(0x197)]={};}}exports[a82_0xc7bf86(0x1a6)]=MDApiWriter;