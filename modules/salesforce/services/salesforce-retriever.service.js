const a108_0x1ae1=['return\x20/\x22\x20+\x20this\x20+\x20\x22/','test','logger','1053844ivVtBW','retrieveLastComponents','439047WyDnyZ','330970rJxvdR','salesforceService','retrieved\x20%d/%d\x20components\x20from\x20salesforce','defineProperty','constructor','29513lecLhw','length','push','1EmgmDU','__esModule','1zVGhFS','COMPONENTS_PER_REQUEST','ids','retrieveComponents','name','392053UdnTHV','407281kIWgtf','run','68084uPSWrY','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','../../../core'];function a108_0x947e(_0x5b2b64,_0x32963d){return a108_0x947e=function(_0x1a147d,_0x3f103d){_0x1a147d=_0x1a147d-0x185;let _0x4c44b9=a108_0x1ae1[_0x1a147d];return _0x4c44b9;},a108_0x947e(_0x5b2b64,_0x32963d);}const a108_0x5219e7=a108_0x947e;(function(_0xf2e907,_0x233a15){const _0x44def6=a108_0x947e;while(!![]){try{const _0x30a222=-parseInt(_0x44def6(0x199))*parseInt(_0x44def6(0x193))+-parseInt(_0x44def6(0x191))*-parseInt(_0x44def6(0x198))+parseInt(_0x44def6(0x19b))+-parseInt(_0x44def6(0x18e))+-parseInt(_0x44def6(0x188))+-parseInt(_0x44def6(0x189))+parseInt(_0x44def6(0x186));if(_0x30a222===_0x233a15)break;else _0xf2e907['push'](_0xf2e907['shift']());}catch(_0x4eb0a2){_0xf2e907['push'](_0xf2e907['shift']());}}}(a108_0x1ae1,0x4afe2));const a108_0x4c44b9=function(){let _0x570bff=!![];return function(_0x3715e0,_0x33db25){const _0x1a771c=_0x570bff?function(){if(_0x33db25){const _0x52dffb=_0x33db25['apply'](_0x3715e0,arguments);return _0x33db25=null,_0x52dffb;}}:function(){};return _0x570bff=![],_0x1a771c;};}(),a108_0x3f103d=a108_0x4c44b9(this,function(){const _0x2f75a0=function(){const _0x12c238=a108_0x947e,_0xebd58f=_0x2f75a0['constructor'](_0x12c238(0x19e))()[_0x12c238(0x18d)](_0x12c238(0x19c));return!_0xebd58f[_0x12c238(0x19f)](a108_0x3f103d);};return _0x2f75a0();});a108_0x3f103d();'use strict';Object[a108_0x5219e7(0x18c)](exports,a108_0x5219e7(0x192),{'value':!![]}),exports['SalesforceRetrieverService']=void 0x0;const core_1=require(a108_0x5219e7(0x19d));class SalesforceRetrieverService{constructor(_0x6f04be){const _0x33f261=a108_0x5219e7;this[_0x33f261(0x18a)]=_0x6f04be,this['logger']=new core_1['Logger'](SalesforceRetrieverService[_0x33f261(0x197)]),this[_0x33f261(0x194)]=0xbb8;}async[a108_0x5219e7(0x187)](_0x57c628){const _0x53df3=a108_0x5219e7,_0x19c2b8=[];for(const _0x3c0de3 of _0x57c628){const _0x58860e=await this[_0x53df3(0x18a)]['retrieveAttachment'](_0x3c0de3);_0x19c2b8[_0x53df3(0x190)](_0x58860e);}return _0x19c2b8;}async[a108_0x5219e7(0x19a)](_0x52384b){const _0x12c473=a108_0x5219e7,_0x3ef139=[..._0x52384b],_0x1c789e=[];while(_0x3ef139[_0x12c473(0x18f)]){const _0x48f68f=_0x3ef139['splice'](0x0,this[_0x12c473(0x194)]),_0x4ff77c=await this['salesforceService'][_0x12c473(0x196)](_0x48f68f);if(_0x48f68f[_0x12c473(0x18f)]!==_0x4ff77c[_0x12c473(0x195)][_0x12c473(0x18f)])_0x3ef139[_0x12c473(0x190)](..._0x4ff77c[_0x12c473(0x195)]),_0x1c789e[_0x12c473(0x190)](..._0x4ff77c['components']);else{const _0x2d4c32=await this[_0x12c473(0x187)](_0x48f68f);_0x1c789e[_0x12c473(0x190)](..._0x2d4c32);}this[_0x12c473(0x185)]['log'](_0x12c473(0x18b),_0x52384b[_0x12c473(0x18f)]-_0x3ef139[_0x12c473(0x18f)],_0x52384b[_0x12c473(0x18f)]);}return _0x1c789e;}}exports['SalesforceRetrieverService']=SalesforceRetrieverService;