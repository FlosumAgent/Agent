const a110_0x279780=a110_0x76ad;(function(_0xcb5eb1,_0x25dc3f){const _0x2de5fe=a110_0x76ad,_0x55b4c7=_0xcb5eb1();while(!![]){try{const _0x4ccf88=parseInt(_0x2de5fe(0x170))/0x1*(-parseInt(_0x2de5fe(0x16c))/0x2)+parseInt(_0x2de5fe(0x182))/0x3*(-parseInt(_0x2de5fe(0x16a))/0x4)+parseInt(_0x2de5fe(0x17f))/0x5*(-parseInt(_0x2de5fe(0x167))/0x6)+-parseInt(_0x2de5fe(0x15d))/0x7*(-parseInt(_0x2de5fe(0x188))/0x8)+parseInt(_0x2de5fe(0x160))/0x9+parseInt(_0x2de5fe(0x15e))/0xa+-parseInt(_0x2de5fe(0x162))/0xb;if(_0x4ccf88===_0x25dc3f)break;else _0x55b4c7['push'](_0x55b4c7['shift']());}catch(_0x3c8f5d){_0x55b4c7['push'](_0x55b4c7['shift']());}}}(a110_0x1ac1,0x624a1));const a110_0x12284c=function(){let _0x4778d7=!![];return function(_0x523cc0,_0x15e72c){const _0x3c14cd=_0x4778d7?function(){const _0x3ceaa3=a110_0x76ad;if(_0x15e72c){const _0x4317da=_0x15e72c[_0x3ceaa3(0x190)](_0x523cc0,arguments);return _0x15e72c=null,_0x4317da;}}:function(){};return _0x4778d7=![],_0x3c14cd;};}(),a110_0x123808=a110_0x12284c(this,function(){const _0x1abc9e=a110_0x76ad;return a110_0x123808[_0x1abc9e(0x161)]()[_0x1abc9e(0x177)](_0x1abc9e(0x17b))[_0x1abc9e(0x161)]()[_0x1abc9e(0x174)](a110_0x123808)[_0x1abc9e(0x177)](_0x1abc9e(0x17b));});a110_0x123808();function a110_0x1ac1(){const _0x4ac48a=['run','../dto/flosum-component-history.dto','SalesforceRetrieverService','(((.+)+)+)+$','manually\x20retrieved\x20%d/%d\x20components','fileType','./salesforce-query.service','298075ZOAgrh','retrieveComponentIdsFromHistoryIds','map','613530csJvid','salesforceService','GET_COMPONENT_HISTORIES_BY_IDS','GET_ATTACHMENT_BY_PARENT_IDS_QUERY','__esModule','fromSalesforce','1637672ZWPXMn','get','attachmentId','push','ParentId','find','length','../../../core','apply','ids','then','21KysJwO','3629410hEftzL','replace','4515066AglwZv','toString','5602146oPSQsq','query','components','../queries','Name','12HwkAly','filename','%parent_ids%','4ppPtzv','info','6dhJIEg','COMPONENTS_PER_REQUEST','manually\x20retrieving\x20components\x20from\x20salesforce','retrieveLastComponents','81041RrvHap','logger','splice','COMPONENTS_PER_QUERY','constructor','base64','FlosumComponentHistoryDto','search'];a110_0x1ac1=function(){return _0x4ac48a;};return a110_0x1ac1();}'use strict';var __importDefault=this&&this['__importDefault']||function(_0x16ceab){const _0x48942d=a110_0x76ad;return _0x16ceab&&_0x16ceab[_0x48942d(0x186)]?_0x16ceab:{'default':_0x16ceab};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['SalesforceRetrieverService']=void 0x0;const core_1=require(a110_0x279780(0x18f)),typedi_1=__importDefault(require('typedi')),salesforce_query_service_1=require(a110_0x279780(0x17e)),queries_1=require(a110_0x279780(0x165)),flosum_component_history_dto_1=require(a110_0x279780(0x179));class SalesforceRetrieverService{constructor(_0x333f33){const _0x4cd8e8=a110_0x279780;this[_0x4cd8e8(0x183)]=_0x333f33,this[_0x4cd8e8(0x171)]=new core_1['Logger'](SalesforceRetrieverService['name']),this['COMPONENTS_PER_REQUEST']=0xbb8,this[_0x4cd8e8(0x173)]=0x1f4;}async[a110_0x279780(0x180)](_0x43b9ab){const _0x23a5d1=a110_0x279780;this[_0x23a5d1(0x171)][_0x23a5d1(0x16b)]('manually\x20retrieving\x20component\x20ids\x20from\x20history\x20ids\x20(%d)',_0x43b9ab[_0x23a5d1(0x18e)]);const _0x436aa5=typedi_1['default'][_0x23a5d1(0x189)](salesforce_query_service_1['SalesforceQueryService']),_0x73ba1a=_0x43b9ab[_0x23a5d1(0x181)](_0x6143a0=>'\x27'+_0x6143a0+'\x27'),_0x2c6cb8=[];while(_0x73ba1a[_0x23a5d1(0x18e)]){const _0x368573=_0x73ba1a[_0x23a5d1(0x172)](0x0,this['COMPONENTS_PER_QUERY']),_0x220553=_0x436aa5[_0x23a5d1(0x163)](queries_1[_0x23a5d1(0x185)][_0x23a5d1(0x15f)](_0x23a5d1(0x169),_0x368573['join']())),_0x45fbd7=_0x436aa5[_0x23a5d1(0x163)](queries_1[_0x23a5d1(0x184)][_0x23a5d1(0x15f)]('%ids%',_0x368573['join']()))[_0x23a5d1(0x192)](_0x3190fc=>_0x3190fc[_0x23a5d1(0x181)](_0x25e5b8=>flosum_component_history_dto_1[_0x23a5d1(0x176)][_0x23a5d1(0x187)](_0x25e5b8))),[_0x4b6a34,_0x237a98]=await Promise['all']([_0x220553,_0x45fbd7]);for(const _0xe3d023 of _0x237a98){const _0x503abc=_0x4b6a34[_0x23a5d1(0x18d)](_0x2ec6f6=>_0x2ec6f6[_0x23a5d1(0x18c)]===_0xe3d023['id']);_0x2c6cb8['push']({'fileType':_0x503abc[_0x23a5d1(0x166)],'fileName':_0xe3d023[_0x23a5d1(0x168)],'attachmentId':_0x503abc['Id']});}}return _0x2c6cb8;}async[a110_0x279780(0x16f)](_0x385884){const _0x21ae3c=a110_0x279780,_0x24a15b=await this[_0x21ae3c(0x180)](_0x385884);this[_0x21ae3c(0x171)][_0x21ae3c(0x16b)](_0x21ae3c(0x16e));const _0xfa8e35=[];for(const _0x30ff5f of _0x24a15b){const _0x46649f=await this[_0x21ae3c(0x183)]['retrieveAttachment'](_0x30ff5f[_0x21ae3c(0x18a)],!![]);_0xfa8e35[_0x21ae3c(0x18b)]({'body':_0x46649f[_0x21ae3c(0x161)](_0x21ae3c(0x175)),'fileName':_0x30ff5f['fileName'],'fileType':_0x30ff5f[_0x21ae3c(0x17d)]}),this['logger'][_0x21ae3c(0x16b)](_0x21ae3c(0x17c),_0xfa8e35[_0x21ae3c(0x18e)],_0x385884[_0x21ae3c(0x18e)]);}return _0xfa8e35;}async[a110_0x279780(0x178)](_0x16ef82){const _0x14bc4c=a110_0x279780,_0x3a2c7a=[..._0x16ef82],_0x430f02=[],_0x3f8320=[];while(_0x3a2c7a['length']){const _0x577503=_0x3a2c7a[_0x14bc4c(0x172)](0x0,this[_0x14bc4c(0x16d)]),_0x3788be=await this['salesforceService']['retrieveComponents'](_0x577503);_0x577503[_0x14bc4c(0x18e)]!==_0x3788be[_0x14bc4c(0x191)][_0x14bc4c(0x18e)]?(_0x3a2c7a[_0x14bc4c(0x18b)](..._0x3788be[_0x14bc4c(0x191)]),_0x430f02[_0x14bc4c(0x18b)](..._0x3788be[_0x14bc4c(0x164)])):_0x3f8320[_0x14bc4c(0x18b)](..._0x577503),this[_0x14bc4c(0x171)]['log']('retrieved\x20%d/%d\x20components\x20from\x20salesforce\x20rest',_0x16ef82['length']-_0x3a2c7a['length'],_0x16ef82[_0x14bc4c(0x18e)]);}if(_0x3f8320[_0x14bc4c(0x18e)]){const _0x40a1f5=await this[_0x14bc4c(0x16f)](_0x3f8320);_0x430f02[_0x14bc4c(0x18b)](..._0x40a1f5);}return _0x430f02;}}function a110_0x76ad(_0x316d88,_0x2c75dd){const _0x4a0f5d=a110_0x1ac1();return a110_0x76ad=function(_0x123808,_0x12284c){_0x123808=_0x123808-0x15d;let _0x1ac154=_0x4a0f5d[_0x123808];return _0x1ac154;},a110_0x76ad(_0x316d88,_0x2c75dd);}exports[a110_0x279780(0x17a)]=SalesforceRetrieverService;