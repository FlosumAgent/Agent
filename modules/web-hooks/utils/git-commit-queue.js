const a190_0x175467=a190_0x5638;(function(_0x55eee3,_0x24918b){const _0x10f111=a190_0x5638,_0x1f507a=_0x55eee3();while(!![]){try{const _0x31b694=-parseInt(_0x10f111(0x183))/0x1+parseInt(_0x10f111(0x195))/0x2*(-parseInt(_0x10f111(0x187))/0x3)+parseInt(_0x10f111(0x184))/0x4*(parseInt(_0x10f111(0x18c))/0x5)+parseInt(_0x10f111(0x19f))/0x6+parseInt(_0x10f111(0x196))/0x7*(parseInt(_0x10f111(0x182))/0x8)+-parseInt(_0x10f111(0x19d))/0x9+-parseInt(_0x10f111(0x186))/0xa;if(_0x31b694===_0x24918b)break;else _0x1f507a['push'](_0x1f507a['shift']());}catch(_0x1508dd){_0x1f507a['push'](_0x1f507a['shift']());}}}(a190_0x27bc,0x7b775));const a190_0x4224f9=function(){let _0x599a01=!![];return function(_0x156f2f,_0x561d53){const _0x59fa9f=_0x599a01?function(){const _0x1a4bf1=a190_0x5638;if(_0x561d53){const _0x52a975=_0x561d53[_0x1a4bf1(0x190)](_0x156f2f,arguments);return _0x561d53=null,_0x52a975;}}:function(){};return _0x599a01=![],_0x59fa9f;};}(),a190_0x592bc7=a190_0x4224f9(this,function(){const _0x2c2394=a190_0x5638;return a190_0x592bc7[_0x2c2394(0x191)]()[_0x2c2394(0x185)](_0x2c2394(0x192))[_0x2c2394(0x191)]()['constructor'](a190_0x592bc7)[_0x2c2394(0x185)](_0x2c2394(0x192));});a190_0x592bc7();'use strict';function a190_0x27bc(){const _0x339ba5=['(((.+)+)+)+$','../../../core','run','192054BqIejH','3314339tYPCuJ','../../salesforce/services/salesforce-logger-v2.service','log','createLogger','name','Logger','push','3456009oKOLUf','run\x20commit\x20job\x20\x22%s\x22','5582358XAjUTw','repository','getLoggerId','git.commit','logger','execute','add\x20new\x20commit\x20to\x20queue\x20\x22%s\x22','16iuGHBS','308896cGOvCQ','43576pSkBCH','search','7610480UQaiLU','9Hcbfyb','currentJobs','__esModule','GitCommitQueue','queue','170GfVqKi','Child','SalesforceLogger2','../../childs/child','apply','toString'];a190_0x27bc=function(){return _0x339ba5;};return a190_0x27bc();}Object['defineProperty'](exports,a190_0x175467(0x189),{'value':!![]}),exports[a190_0x175467(0x18a)]=void 0x0;const salesforce_logger_v2_service_1=require(a190_0x175467(0x197)),core_1=require(a190_0x175467(0x193)),child_1=require(a190_0x175467(0x18f));function a190_0x5638(_0x1af441,_0xebf600){const _0x3ab0a6=a190_0x27bc();return a190_0x5638=function(_0x592bc7,_0x4224f9){_0x592bc7=_0x592bc7-0x181;let _0x27bce7=_0x3ab0a6[_0x592bc7];return _0x27bce7;},a190_0x5638(_0x1af441,_0xebf600);}class GitCommitQueue{constructor(){const _0x4dad39=a190_0x175467;this[_0x4dad39(0x1a3)]=new core_1[(_0x4dad39(0x19b))](GitCommitQueue[_0x4dad39(0x19a)]),this['queue']={},this[_0x4dad39(0x188)]={};}async[a190_0x175467(0x194)](_0xce8047){const _0x3c8c81=a190_0x175467;if(this['currentJobs'][_0xce8047]||!this[_0x3c8c81(0x18b)][_0xce8047])return;this[_0x3c8c81(0x1a3)][_0x3c8c81(0x198)](_0x3c8c81(0x19e),_0xce8047);const _0x5196aa=this['queue'][_0xce8047]['shift']();if(_0x5196aa){try{const _0x3c53dc=new child_1[(_0x3c8c81(0x18d))](_0x3c8c81(0x1a2));this[_0x3c8c81(0x188)][_0xce8047]=_0x3c53dc,await _0x3c53dc[_0x3c8c81(0x1a4)]({'data':{'commit':_0x5196aa,'loggerId':(await salesforce_logger_v2_service_1[_0x3c8c81(0x18e)][_0x3c8c81(0x199)]())[_0x3c8c81(0x1a1)]()}}),delete this[_0x3c8c81(0x188)][_0xce8047],this['logger'][_0x3c8c81(0x198)]('commit\x20job\x20done\x20for\x20%s',_0xce8047);}catch(_0x44306a){this[_0x3c8c81(0x18b)][_0xce8047]=[],delete this['currentJobs'][_0xce8047];}this[_0x3c8c81(0x194)](_0xce8047);}}['add'](_0x2e7eea){const _0x1ca9fc=a190_0x175467;var _0x244d2e;const _0x459e5e=_0x2e7eea[_0x1ca9fc(0x1a0)]+'#'+_0x2e7eea['branch'];this['logger'][_0x1ca9fc(0x198)](_0x1ca9fc(0x181),_0x459e5e),console['log'](_0x2e7eea),(_0x244d2e=this[_0x1ca9fc(0x18b)])[_0x459e5e]||(_0x244d2e[_0x459e5e]=[]),this[_0x1ca9fc(0x18b)][_0x459e5e][_0x1ca9fc(0x19c)](_0x2e7eea),this[_0x1ca9fc(0x194)](_0x459e5e);}}exports['GitCommitQueue']=GitCommitQueue;