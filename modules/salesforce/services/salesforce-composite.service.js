function a122_0x1125(){const _0xa035f6=['defineProperty','50273qHBqVn','post','./salesforce-auth.service','getOwnPropertyDescriptor','apply','71380RGztPO','SALESFORCE_MAX_REQUEST_SIZE_BYTES','../../../constants','every','design:paramtypes','function','../errors/salesforce.error','toString','SalesforceAuthService','executeGraphs','CompositeGraphError','383452wibwqH','__esModule','length','isSuccessful','request','156ydYkWk','SalesforceCompositeService','search','5370DQKHot','/services/data/','Service','object','createSalesforceRequest','SALESFORCE_API_VERSION','258336SskTBi','../errors/composite-graph.error','__metadata','typedi','SalesforceError','constructor','2149592BJnXXA','graphs','7357WFArhS'];a122_0x1125=function(){return _0xa035f6;};return a122_0x1125();}const a122_0x397ea5=a122_0x3b5a;(function(_0x41aed2,_0x2649ea){const _0x9d4d55=a122_0x3b5a,_0x406207=_0x41aed2();while(!![]){try{const _0x20333a=parseInt(_0x9d4d55(0x1f2))/0x1+parseInt(_0x9d4d55(0x202))/0x2+parseInt(_0x9d4d55(0x1e8))/0x3+parseInt(_0x9d4d55(0x1f7))/0x4+parseInt(_0x9d4d55(0x20a))/0x5+-parseInt(_0x9d4d55(0x207))/0x6*(-parseInt(_0x9d4d55(0x1f0))/0x7)+-parseInt(_0x9d4d55(0x1ee))/0x8;if(_0x20333a===_0x2649ea)break;else _0x406207['push'](_0x406207['shift']());}catch(_0x1da6af){_0x406207['push'](_0x406207['shift']());}}}(a122_0x1125,0x19cb9));const a122_0x37329e=function(){let _0x47fe35=!![];return function(_0x49554f,_0x3c9ca7){const _0x8eba46=_0x47fe35?function(){const _0x498d0f=a122_0x3b5a;if(_0x3c9ca7){const _0x339408=_0x3c9ca7[_0x498d0f(0x1f6)](_0x49554f,arguments);return _0x3c9ca7=null,_0x339408;}}:function(){};return _0x47fe35=![],_0x8eba46;};}(),a122_0x11ae8c=a122_0x37329e(this,function(){const _0x1c212e=a122_0x3b5a;return a122_0x11ae8c[_0x1c212e(0x1fe)]()[_0x1c212e(0x209)]('(((.+)+)+)+$')[_0x1c212e(0x1fe)]()[_0x1c212e(0x1ed)](a122_0x11ae8c)[_0x1c212e(0x209)]('(((.+)+)+)+$');});a122_0x11ae8c();'use strict';function a122_0x3b5a(_0xd839a3,_0x4c3244){const _0x526059=a122_0x1125();return a122_0x3b5a=function(_0x11ae8c,_0x37329e){_0x11ae8c=_0x11ae8c-0x1e6;let _0x112548=_0x526059[_0x11ae8c];return _0x112548;},a122_0x3b5a(_0xd839a3,_0x4c3244);}var __decorate=this&&this['__decorate']||function(_0x46408b,_0x26914e,_0x20c3e4,_0x5c5998){const _0x33a39a=a122_0x3b5a;var _0x52f378=arguments[_0x33a39a(0x204)],_0x14ea61=_0x52f378<0x3?_0x26914e:_0x5c5998===null?_0x5c5998=Object[_0x33a39a(0x1f5)](_0x26914e,_0x20c3e4):_0x5c5998,_0x1a5933;if(typeof Reflect===_0x33a39a(0x20d)&&typeof Reflect['decorate']==='function')_0x14ea61=Reflect['decorate'](_0x46408b,_0x26914e,_0x20c3e4,_0x5c5998);else{for(var _0x42d119=_0x46408b['length']-0x1;_0x42d119>=0x0;_0x42d119--)if(_0x1a5933=_0x46408b[_0x42d119])_0x14ea61=(_0x52f378<0x3?_0x1a5933(_0x14ea61):_0x52f378>0x3?_0x1a5933(_0x26914e,_0x20c3e4,_0x14ea61):_0x1a5933(_0x26914e,_0x20c3e4))||_0x14ea61;}return _0x52f378>0x3&&_0x14ea61&&Object[_0x33a39a(0x1f1)](_0x26914e,_0x20c3e4,_0x14ea61),_0x14ea61;},__metadata=this&&this[a122_0x397ea5(0x1ea)]||function(_0x1b660b,_0x1701f2){const _0x320d0e=a122_0x397ea5;if(typeof Reflect===_0x320d0e(0x20d)&&typeof Reflect['metadata']===_0x320d0e(0x1fc))return Reflect['metadata'](_0x1b660b,_0x1701f2);};Object['defineProperty'](exports,a122_0x397ea5(0x203),{'value':!![]}),exports['SalesforceCompositeService']=void 0x0;const constants_1=require(a122_0x397ea5(0x1f9)),typedi_1=require(a122_0x397ea5(0x1eb)),composite_graph_error_1=require(a122_0x397ea5(0x1e9)),salesforce_error_1=require(a122_0x397ea5(0x1fd)),create_request_util_1=require('../utils/create-request.util'),salesforce_auth_service_1=require(a122_0x397ea5(0x1f4));let SalesforceCompositeService=class SalesforceCompositeService{constructor(_0x30374a){const _0x1f5418=a122_0x397ea5;this[_0x1f5418(0x206)]=create_request_util_1[_0x1f5418(0x1e6)](_0x30374a);}async[a122_0x397ea5(0x200)](_0x593301){const _0x3977da=a122_0x397ea5;try{const {data:_0xf7e0a6}=await this[_0x3977da(0x206)][_0x3977da(0x1f3)](_0x3977da(0x20b)+constants_1[_0x3977da(0x1e7)]+'/composite/graph',{'graphs':_0x593301},{'maxBodyLength':constants_1[_0x3977da(0x1f8)]});if(!_0xf7e0a6[_0x3977da(0x1ef)][_0x3977da(0x1fa)](_0x206b1d=>_0x206b1d[_0x3977da(0x205)]))throw new composite_graph_error_1[(_0x3977da(0x201))]('Unsucsessful\x20composite\x20request',_0x593301,_0xf7e0a6);return _0xf7e0a6;}catch(_0x1d10fc){if(_0x1d10fc instanceof salesforce_error_1['SalesforceError'])throw _0x1d10fc;throw new salesforce_error_1[(_0x3977da(0x1ec))](_0x1d10fc);}}};SalesforceCompositeService=__decorate([typedi_1[a122_0x397ea5(0x20c)](),__metadata(a122_0x397ea5(0x1fb),[salesforce_auth_service_1[a122_0x397ea5(0x1ff)]])],SalesforceCompositeService),exports[a122_0x397ea5(0x208)]=SalesforceCompositeService;