const a109_0x1eac=['270OUGBRq','retrieveComponentIdsFromHistoryIds','length','info','replace','run','33529phjLIa','splice','defineProperty','attachmentId','Name','ids','salesforceService','manually\x20retrieved\x20%d/%d\x20components','name','Logger','FlosumComponentHistoryDto','push','%ids%','manually\x20retrieving\x20component\x20ids\x20from\x20history\x20ids\x20(%d)','components','typedi','manually\x20retrieving\x20components\x20from\x20salesforce','constructor','join','test','retrieved\x20%d/%d\x20components\x20from\x20salesforce\x20rest','default','../dto/flosum-component-history.dto','255433MYCyVo','ParentId','retrieveLastComponents','1TuEJGe','169972OVMSwk','__esModule','../../../core','get','base64','../queries','88525gtIUkI','1VoVQOl','524246YEXTiM','%parent_ids%','1429BeDVbM','map','COMPONENTS_PER_REQUEST','COMPONENTS_PER_QUERY','SalesforceRetrieverService','fileName','find','fromSalesforce','59159YYpzQR','3gySxNk','3mYQWvx','retrieveAttachment','fileType','logger','SalesforceQueryService','retrieveComponents','log','then','all'];const a109_0x5dbf55=a109_0x477d;(function(_0x1b7708,_0x277a76){const _0x1d3320=a109_0x477d;while(!![]){try{const _0x414019=parseInt(_0x1d3320(0x1ea))*-parseInt(_0x1d3320(0x1d6))+-parseInt(_0x1d3320(0x1d5))*parseInt(_0x1d3320(0x1e8))+-parseInt(_0x1d3320(0x1d2))+parseInt(_0x1d3320(0x1de))+parseInt(_0x1d3320(0x1e0))*parseInt(_0x1d3320(0x1f3))+-parseInt(_0x1d3320(0x1dc))*-parseInt(_0x1d3320(0x1e9))+parseInt(_0x1d3320(0x1f9))*-parseInt(_0x1d3320(0x1dd));if(_0x414019===_0x277a76)break;else _0x1b7708['push'](_0x1b7708['shift']());}catch(_0x3c4474){_0x1b7708['push'](_0x1b7708['shift']());}}}(a109_0x1eac,0x4d8ae));const a109_0x5db16b=function(){let _0x13a393=!![];return function(_0x206355,_0x4894f6){const _0x17a4f3=_0x13a393?function(){if(_0x4894f6){const _0x13ab8d=_0x4894f6['apply'](_0x206355,arguments);return _0x4894f6=null,_0x13ab8d;}}:function(){};return _0x13a393=![],_0x17a4f3;};}(),a109_0x153be2=a109_0x5db16b(this,function(){const _0x102885=function(){const _0x1083c7=a109_0x477d,_0x5cee85=_0x102885[_0x1083c7(0x1cc)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x1083c7(0x1cc)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x5cee85[_0x1083c7(0x1ce)](a109_0x153be2);};return _0x102885();});a109_0x153be2();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4e103c){return _0x4e103c&&_0x4e103c['__esModule']?_0x4e103c:{'default':_0x4e103c};};Object[a109_0x5dbf55(0x1bd)](exports,a109_0x5dbf55(0x1d7),{'value':!![]}),exports[a109_0x5dbf55(0x1e4)]=void 0x0;const core_1=require(a109_0x5dbf55(0x1d8)),typedi_1=__importDefault(require(a109_0x5dbf55(0x1ca))),salesforce_query_service_1=require('./salesforce-query.service'),queries_1=require(a109_0x5dbf55(0x1db)),flosum_component_history_dto_1=require(a109_0x5dbf55(0x1d1));function a109_0x477d(_0x4709ad,_0x973196){return a109_0x477d=function(_0x4d8933,_0x153be2){_0x4d8933=_0x4d8933-0x1bc;let _0x5db16b=a109_0x1eac[_0x4d8933];return _0x5db16b;},a109_0x477d(_0x4709ad,_0x973196);}class SalesforceRetrieverService{constructor(_0x59ad88){const _0x1d94b2=a109_0x5dbf55;this[_0x1d94b2(0x1c1)]=_0x59ad88,this[_0x1d94b2(0x1ed)]=new core_1[(_0x1d94b2(0x1c4))](SalesforceRetrieverService[_0x1d94b2(0x1c3)]),this['COMPONENTS_PER_REQUEST']=0xbb8,this[_0x1d94b2(0x1e3)]=0x1f4;}async[a109_0x5dbf55(0x1f4)](_0xd15217){const _0x56bfc0=a109_0x5dbf55;this[_0x56bfc0(0x1ed)][_0x56bfc0(0x1f6)](_0x56bfc0(0x1c8),_0xd15217[_0x56bfc0(0x1f5)]);const _0xd13443=typedi_1[_0x56bfc0(0x1d0)][_0x56bfc0(0x1d9)](salesforce_query_service_1[_0x56bfc0(0x1ee)]),_0x1133d5=_0xd15217['map'](_0x3ae9fe=>'\x27'+_0x3ae9fe+'\x27'),_0x11e8ae=[];while(_0x1133d5[_0x56bfc0(0x1f5)]){const _0x24c100=_0x1133d5[_0x56bfc0(0x1bc)](0x0,this['COMPONENTS_PER_QUERY']),_0x1a6588=_0xd13443['query'](queries_1['GET_ATTACHMENT_BY_PARENT_IDS_QUERY'][_0x56bfc0(0x1f7)](_0x56bfc0(0x1df),_0x24c100['join']())),_0x377eed=_0xd13443['query'](queries_1['GET_COMPONENT_HISTORIES_BY_IDS'][_0x56bfc0(0x1f7)](_0x56bfc0(0x1c7),_0x24c100[_0x56bfc0(0x1cd)]()))[_0x56bfc0(0x1f1)](_0x1622ab=>_0x1622ab[_0x56bfc0(0x1e1)](_0x189475=>flosum_component_history_dto_1[_0x56bfc0(0x1c5)][_0x56bfc0(0x1e7)](_0x189475))),[_0x321fdc,_0x1c0fdb]=await Promise[_0x56bfc0(0x1f2)]([_0x1a6588,_0x377eed]);for(const _0x1b77e8 of _0x1c0fdb){const _0x276e20=_0x321fdc[_0x56bfc0(0x1e6)](_0x4d7b52=>_0x4d7b52[_0x56bfc0(0x1d3)]===_0x1b77e8['id']);_0x11e8ae[_0x56bfc0(0x1c6)]({'fileType':_0x276e20[_0x56bfc0(0x1bf)],'fileName':_0x1b77e8['filename'],'attachmentId':_0x276e20['Id']});}}return _0x11e8ae;}async[a109_0x5dbf55(0x1d4)](_0x461d62){const _0x40f482=a109_0x5dbf55,_0x376165=await this[_0x40f482(0x1f4)](_0x461d62);this['logger'][_0x40f482(0x1f6)](_0x40f482(0x1cb));const _0xe2b808=[];for(const _0x137124 of _0x376165){const _0xfde5d0=await this[_0x40f482(0x1c1)][_0x40f482(0x1eb)](_0x137124[_0x40f482(0x1be)],!![]);_0xe2b808[_0x40f482(0x1c6)]({'body':_0xfde5d0['toString'](_0x40f482(0x1da)),'fileName':_0x137124[_0x40f482(0x1e5)],'fileType':_0x137124[_0x40f482(0x1ec)]}),this[_0x40f482(0x1ed)][_0x40f482(0x1f6)](_0x40f482(0x1c2),_0xe2b808['length'],_0x461d62[_0x40f482(0x1f5)]);}return _0xe2b808;}async[a109_0x5dbf55(0x1f8)](_0x342ed2){const _0x355af7=a109_0x5dbf55,_0x2b92cd=[..._0x342ed2],_0x4ff2c6=[],_0x1e9207=[];while(_0x2b92cd['length']){const _0x21924e=_0x2b92cd[_0x355af7(0x1bc)](0x0,this[_0x355af7(0x1e2)]),_0x2e9a00=await this[_0x355af7(0x1c1)][_0x355af7(0x1ef)](_0x21924e);_0x21924e[_0x355af7(0x1f5)]!==_0x2e9a00[_0x355af7(0x1c0)]['length']?(_0x2b92cd[_0x355af7(0x1c6)](..._0x2e9a00[_0x355af7(0x1c0)]),_0x4ff2c6[_0x355af7(0x1c6)](..._0x2e9a00[_0x355af7(0x1c9)])):_0x1e9207[_0x355af7(0x1c6)](..._0x21924e),this[_0x355af7(0x1ed)][_0x355af7(0x1f0)](_0x355af7(0x1cf),_0x342ed2[_0x355af7(0x1f5)]-_0x2b92cd[_0x355af7(0x1f5)],_0x342ed2[_0x355af7(0x1f5)]);}if(_0x1e9207[_0x355af7(0x1f5)]){const _0xce8c4b=await this[_0x355af7(0x1d4)](_0x1e9207);_0x4ff2c6[_0x355af7(0x1c6)](..._0xce8c4b);}return _0x4ff2c6;}}exports[a109_0x5dbf55(0x1e4)]=SalesforceRetrieverService;