const a102_0x1697=['SalesforceError','message','3SfScno','RequestError','739qwKprK','errorResponse','toJSON','1307360PhsvMx','13wswACD','toString','1670743aVTKFK','368513aHRhYD','1084198RmqiWS','test','913MPFlyJ','defineProperty','77823xVeBvs','constructor','ERR_UNKNOWN','stringify','309417qHeltI','1knIegC','original','response'];const a102_0x2a9e3e=a102_0x3679;(function(_0xe1ac42,_0x2ea70d){const _0x514fb0=a102_0x3679;while(!![]){try{const _0x4b6e17=-parseInt(_0x514fb0(0xbe))*parseInt(_0x514fb0(0xb4))+-parseInt(_0x514fb0(0xb3))+-parseInt(_0x514fb0(0xb1))*parseInt(_0x514fb0(0xb9))+-parseInt(_0x514fb0(0xbd))+parseInt(_0x514fb0(0xb7))*-parseInt(_0x514fb0(0xad))+parseInt(_0x514fb0(0xb5))+parseInt(_0x514fb0(0xb0))*parseInt(_0x514fb0(0xab));if(_0x4b6e17===_0x2ea70d)break;else _0xe1ac42['push'](_0xe1ac42['shift']());}catch(_0x36438e){_0xe1ac42['push'](_0xe1ac42['shift']());}}}(a102_0x1697,0xed1bf));function a102_0x3679(_0x26171e,_0x1b20a6){return a102_0x3679=function(_0x2ef2da,_0x5e7f5c){_0x2ef2da=_0x2ef2da-0xa9;let _0x427286=a102_0x1697[_0x2ef2da];return _0x427286;},a102_0x3679(_0x26171e,_0x1b20a6);}const a102_0x427286=function(){let _0x3842ce=!![];return function(_0x4033f9,_0x2189d7){const _0x4ab726=_0x3842ce?function(){if(_0x2189d7){const _0x158397=_0x2189d7['apply'](_0x4033f9,arguments);return _0x2189d7=null,_0x158397;}}:function(){};return _0x3842ce=![],_0x4ab726;};}(),a102_0x5e7f5c=a102_0x427286(this,function(){const _0x280f47=function(){const _0xfca8ee=a102_0x3679,_0x36ba18=_0x280f47[_0xfca8ee(0xba)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0xfca8ee(0xba)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x36ba18[_0xfca8ee(0xb6)](a102_0x5e7f5c);};return _0x280f47();});a102_0x5e7f5c();'use strict';Object[a102_0x2a9e3e(0xb8)](exports,'__esModule',{'value':!![]}),exports[a102_0x2a9e3e(0xa9)]=void 0x0;const errors_1=require('../../../constants/errors'),request_error_1=require('../../shared/errors/request.error');class SalesforceError extends Error{constructor(_0x1ae408){const _0x28da3a=a102_0x2a9e3e;super(_0x1ae408[_0x28da3a(0xaa)]||_0x1ae408||errors_1[_0x28da3a(0xbb)]),_0x1ae408 instanceof request_error_1[_0x28da3a(0xac)]&&(this[_0x28da3a(0xc0)]=_0x1ae408[_0x28da3a(0xae)]),this[_0x28da3a(0xbf)]=_0x1ae408;}static['createError'](_0x580dc1){const _0x7b755c=new SalesforceError(_0x580dc1['message']);return _0x7b755c;}[a102_0x2a9e3e(0xaf)](){return{'message':this['message'],'original':this['original'],'response':this['response']};}[a102_0x2a9e3e(0xb2)](){const _0xaf3feb=a102_0x2a9e3e;return JSON[_0xaf3feb(0xbc)](this[_0xaf3feb(0xaf)](),null,0x2);}}exports[a102_0x2a9e3e(0xa9)]=SalesforceError;