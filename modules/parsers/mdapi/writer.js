const a82_0x1f84a8=a82_0x4cae;function a82_0x4cae(_0x3d6b86,_0x16f521){const _0x1e65dd=a82_0x315c();return a82_0x4cae=function(_0x2aea04,_0x4bfae0){_0x2aea04=_0x2aea04-0x117;let _0x315c84=_0x1e65dd[_0x2aea04];return _0x315c84;},a82_0x4cae(_0x3d6b86,_0x16f521);}(function(_0x57a4fc,_0x16eee7){const _0x211bf4=a82_0x4cae,_0xd6e7c6=_0x57a4fc();while(!![]){try{const _0xa53165=-parseInt(_0x211bf4(0x125))/0x1*(parseInt(_0x211bf4(0x145))/0x2)+-parseInt(_0x211bf4(0x14b))/0x3+-parseInt(_0x211bf4(0x126))/0x4*(-parseInt(_0x211bf4(0x13a))/0x5)+-parseInt(_0x211bf4(0x134))/0x6+-parseInt(_0x211bf4(0x129))/0x7*(parseInt(_0x211bf4(0x123))/0x8)+-parseInt(_0x211bf4(0x140))/0x9+-parseInt(_0x211bf4(0x12e))/0xa*(-parseInt(_0x211bf4(0x133))/0xb);if(_0xa53165===_0x16eee7)break;else _0xd6e7c6['push'](_0xd6e7c6['shift']());}catch(_0x2e34c6){_0xd6e7c6['push'](_0xd6e7c6['shift']());}}}(a82_0x315c,0xc1003));const a82_0x4bfae0=function(){let _0x1c15e3=!![];return function(_0x358654,_0x2f7b84){const _0x3bf70c=_0x1c15e3?function(){const _0x5dfd7b=a82_0x4cae;if(_0x2f7b84){const _0x582e42=_0x2f7b84[_0x5dfd7b(0x143)](_0x358654,arguments);return _0x2f7b84=null,_0x582e42;}}:function(){};return _0x1c15e3=![],_0x3bf70c;};}(),a82_0x2aea04=a82_0x4bfae0(this,function(){const _0x1c9ddf=a82_0x4cae;return a82_0x2aea04['toString']()[_0x1c9ddf(0x11c)]('(((.+)+)+)+$')[_0x1c9ddf(0x12c)]()[_0x1c9ddf(0x12b)](a82_0x2aea04)[_0x1c9ddf(0x11c)]('(((.+)+)+)+$');});a82_0x2aea04();function a82_0x315c(){const _0xe11f0d=['].\x20Original\x20error:\x20','components','makeDir','all','2925835oaqPrX','405186OZQDWN','Xml','Logger','parse','includes','join','1115wOKKOB','path','files','__esModule','writeChild','sourceDir','12741237iHBlXq','fileType','dir','apply','exists','2Segeig','unzip','body','parentComponents','default','splice','2754969mGzGCI','writeParent','async','have\x20to\x20write\x20%d\x20files','fileName','log','search','./child-types','writeFile','../../internal/fs.internal','defineProperty','readZip','__importDefault','10712024HEjBOK','../../../core','220793ecwDQL','23212LcBaYJ','An\x20error\x20occured\x20when\x20proceeding\x20component\x20','MAX_WRITES_PER_TICK','7Mvnksa','length','constructor','toString','MDApiWriter','130GlGCDw'];a82_0x315c=function(){return _0xe11f0d;};return a82_0x315c();}'use strict';var __importDefault=this&&this[a82_0x1f84a8(0x122)]||function(_0x32b18e){const _0x584921=a82_0x1f84a8;return _0x32b18e&&_0x32b18e[_0x584921(0x13d)]?_0x32b18e:{'default':_0x32b18e};};Object[a82_0x1f84a8(0x120)](exports,a82_0x1f84a8(0x13d),{'value':!![]}),exports[a82_0x1f84a8(0x12d)]=void 0x0;const path_1=__importDefault(require(a82_0x1f84a8(0x13b))),core_1=require(a82_0x1f84a8(0x124)),fs_internal_1=require(a82_0x1f84a8(0x11f)),xml_1=require('../utils/xml'),zip_1=require('../utils/zip'),child_types_1=__importDefault(require(a82_0x1f84a8(0x11d))),logger=new core_1[(a82_0x1f84a8(0x136))]('mdapi-writer');class MDApiWriter{constructor(_0x23eeaf,_0x264d00){const _0x532e7b=a82_0x1f84a8;this['components']=_0x23eeaf,this[_0x532e7b(0x13f)]=_0x264d00,this[_0x532e7b(0x128)]=0x64,this[_0x532e7b(0x148)]={};}async[a82_0x1f84a8(0x121)](_0x387024){const _0x46f882=a82_0x1f84a8,_0x5258cc=await zip_1['Zip'][_0x46f882(0x146)](_0x387024),_0x2d3499=[];for(const _0x536eb8 of Object['keys'](_0x5258cc[_0x46f882(0x13c)])){!_0x5258cc[_0x46f882(0x13c)][_0x536eb8][_0x46f882(0x142)]&&_0x2d3499['push']({'filename':_0x536eb8,'body':await _0x5258cc[_0x46f882(0x13c)][_0x536eb8][_0x46f882(0x118)]('text')});}return _0x2d3499;}async[a82_0x1f84a8(0x117)](_0x3a866a){const _0x3454bc=a82_0x1f84a8;try{const _0x48a9af=await this[_0x3454bc(0x121)](_0x3a866a['body']);await Promise[_0x3454bc(0x132)](_0x48a9af['map'](({filename:_0x19b9e8,body:_0x22ab28})=>fs_internal_1['FS'][_0x3454bc(0x11e)](path_1['default'][_0x3454bc(0x139)](this[_0x3454bc(0x13f)],_0x19b9e8),_0x22ab28)));}catch(_0x14dd91){throw new Error(_0x3454bc(0x127)+_0x3a866a[_0x3454bc(0x11a)]+'\x20['+_0x3a866a[_0x3454bc(0x141)]+_0x3454bc(0x12f)+_0x14dd91);}}async['writeChild'](_0x1d0a9a){const _0x2be43d=a82_0x1f84a8,{filename:_0xda159d,body:_0x10c528}=(await this[_0x2be43d(0x121)](_0x1d0a9a[_0x2be43d(0x147)]))[0x0];try{if(!this['parentComponents'][_0xda159d]){const _0x48bb84=path_1[_0x2be43d(0x149)][_0x2be43d(0x139)](this['sourceDir'],_0xda159d);if(await fs_internal_1['FS'][_0x2be43d(0x144)](_0x48bb84)){const _0x702b08=await fs_internal_1['FS']['readFile'](_0x48bb84);this[_0x2be43d(0x148)][_0xda159d]=await xml_1[_0x2be43d(0x135)][_0x2be43d(0x137)](_0x702b08);}else{this['parentComponents'][_0xda159d]=await xml_1[_0x2be43d(0x135)][_0x2be43d(0x137)](_0x10c528);return;}}const _0x1d5e46=this[_0x2be43d(0x148)][_0xda159d],_0x10eab7=await xml_1[_0x2be43d(0x135)]['parse'](_0x10c528);xml_1[_0x2be43d(0x135)]['replaceOrAppend'](_0x1d5e46,_0x10eab7);}catch(_0x14cc45){throw new Error('An\x20error\x20occurred\x20when\x20proceeding\x20component\x20'+_0x1d0a9a[_0x2be43d(0x11a)]+'\x20['+_0x1d0a9a[_0x2be43d(0x141)]+_0x2be43d(0x12f)+_0x14cc45);}}async['start'](){const _0x261f6a=a82_0x1f84a8;!await fs_internal_1['FS'][_0x261f6a(0x144)](this[_0x261f6a(0x13f)])&&await fs_internal_1['FS'][_0x261f6a(0x131)](this[_0x261f6a(0x13f)]);for(const _0x2fd490 of this[_0x261f6a(0x130)]){!child_types_1[_0x261f6a(0x149)][_0x261f6a(0x138)](_0x2fd490[_0x261f6a(0x141)])?await this[_0x261f6a(0x117)](_0x2fd490):await this[_0x261f6a(0x13e)](_0x2fd490);}const _0x2ad14c=Object['keys'](this[_0x261f6a(0x148)]);logger[_0x261f6a(0x11b)](_0x261f6a(0x119),this[_0x261f6a(0x130)][_0x261f6a(0x12a)]);while(_0x2ad14c[_0x261f6a(0x12a)]){const _0x2ce389=_0x2ad14c[_0x261f6a(0x14a)](0x0,this[_0x261f6a(0x128)]);for(const _0x300af4 of _0x2ce389){await fs_internal_1['FS'][_0x261f6a(0x11e)](path_1[_0x261f6a(0x149)][_0x261f6a(0x139)](this[_0x261f6a(0x13f)],_0x300af4),xml_1[_0x261f6a(0x135)]['convertToString'](this[_0x261f6a(0x148)][_0x300af4]));}}this['parentComponents']={};}}exports[a82_0x1f84a8(0x12d)]=MDApiWriter;