const a106_0x175e4c=a106_0x3a0f;(function(_0x14bac7,_0x591882){const _0x30c9cc=a106_0x3a0f,_0x131992=_0x14bac7();while(!![]){try{const _0xdde58a=parseInt(_0x30c9cc(0xab))/0x1+parseInt(_0x30c9cc(0xa8))/0x2*(-parseInt(_0x30c9cc(0xaa))/0x3)+-parseInt(_0x30c9cc(0xb6))/0x4*(-parseInt(_0x30c9cc(0xb7))/0x5)+parseInt(_0x30c9cc(0xaf))/0x6*(parseInt(_0x30c9cc(0xb2))/0x7)+-parseInt(_0x30c9cc(0xa5))/0x8+-parseInt(_0x30c9cc(0xb5))/0x9*(parseInt(_0x30c9cc(0xa1))/0xa)+-parseInt(_0x30c9cc(0xa3))/0xb;if(_0xdde58a===_0x591882)break;else _0x131992['push'](_0x131992['shift']());}catch(_0x1d149b){_0x131992['push'](_0x131992['shift']());}}}(a106_0xeede,0x28f15));const a106_0x417aef=function(){let _0x4ee18c=!![];return function(_0x4b84ee,_0x42b8be){const _0x5822b4=_0x4ee18c?function(){const _0x45294e=a106_0x3a0f;if(_0x42b8be){const _0x448f44=_0x42b8be[_0x45294e(0xa6)](_0x4b84ee,arguments);return _0x42b8be=null,_0x448f44;}}:function(){};return _0x4ee18c=![],_0x5822b4;};}(),a106_0x24f4e0=a106_0x417aef(this,function(){const _0x28670a=a106_0x3a0f;return a106_0x24f4e0[_0x28670a(0xa9)]()[_0x28670a(0xad)](_0x28670a(0xb3))[_0x28670a(0xa9)]()['constructor'](a106_0x24f4e0)[_0x28670a(0xad)](_0x28670a(0xb3));});function a106_0xeede(){const _0x3baa7f=['3alJNOL','208841BdXBXg','length','search','COMPONENTS_PER_REQUEST','4644hGDxSj','salesforceService','__esModule','35FrTWgp','(((.+)+)+)+$','run','26847mhyWLg','7432vreUER','580PzaHtT','push','log','splice','retrieved\x20%d/%d\x20components\x20from\x20salesforce','110mGwdNP','SalesforceRetrieverService','2259609uWonaW','ids','90072FNoUPz','apply','../../../core','22094ftzXMg','toString'];a106_0xeede=function(){return _0x3baa7f;};return a106_0xeede();}function a106_0x3a0f(_0x32828c,_0x50769e){const _0x4152d0=a106_0xeede();return a106_0x3a0f=function(_0x24f4e0,_0x417aef){_0x24f4e0=_0x24f4e0-0xa0;let _0xeede45=_0x4152d0[_0x24f4e0];return _0xeede45;},a106_0x3a0f(_0x32828c,_0x50769e);}a106_0x24f4e0();'use strict';Object['defineProperty'](exports,a106_0x175e4c(0xb1),{'value':!![]}),exports[a106_0x175e4c(0xa2)]=void 0x0;const core_1=require(a106_0x175e4c(0xa7)),logger=new core_1['Logger']('flosum-retriever');class SalesforceRetrieverService{constructor(_0x4f06e8){const _0x424e4f=a106_0x175e4c;this[_0x424e4f(0xb0)]=_0x4f06e8,this[_0x424e4f(0xae)]=0xbb8;}async[a106_0x175e4c(0xb4)](_0x3d7e1f){const _0x3459c0=a106_0x175e4c,_0x169aa7=[..._0x3d7e1f],_0x3b2b70=[];while(_0x169aa7['length']){const _0x2398dc=await this['salesforceService']['retrieveComponents'](_0x169aa7[_0x3459c0(0xba)](0x0,this[_0x3459c0(0xae)]));_0x169aa7[_0x3459c0(0xb8)](..._0x2398dc[_0x3459c0(0xa4)]),_0x3b2b70['push'](..._0x2398dc['components']),logger[_0x3459c0(0xb9)](_0x3459c0(0xa0),_0x3d7e1f['length']-_0x169aa7['length'],_0x3d7e1f[_0x3459c0(0xac)]);}return _0x3b2b70;}}exports['SalesforceRetrieverService']=SalesforceRetrieverService;