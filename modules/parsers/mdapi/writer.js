const a81_0x2dbb=['splice','634076nPxkBg','writeParent','default','Xml','files','../../internal/fs.internal','replaceOrAppend','MDApiWriter','__importDefault','componentType','all','1EYdTMY','sourceComponents','start','writeChild','from','126079DhWXlh','map','return\x20/\x22\x20+\x20this\x20+\x20\x22/','join','__esModule','564540AZKNUh','MAX_WRITES_PER_TICK','1XlEpYU','parse','constructor','body','keys','2WwNSea','586712gZmyOV','../../../core','683463QXAjPc','Logger','writed\x20%d\x20files','4701chWlli','path','parent','../utils/xml','length','exists','parsedComponents','151QWmCWj','log','apply','toString','sourceDir','writeFile','68087SuuuvA','utf-8','name','test'];const a81_0x1916fe=a81_0x47b2;function a81_0x47b2(_0x1273ff,_0x188cbc){return a81_0x47b2=function(_0x4f823e,_0x25a27f){_0x4f823e=_0x4f823e-0x18b;let _0x18465e=a81_0x2dbb[_0x4f823e];return _0x18465e;},a81_0x47b2(_0x1273ff,_0x188cbc);}(function(_0x51ea4a,_0x1bf422){const _0x216aef=a81_0x47b2;while(!![]){try{const _0x58669d=-parseInt(_0x216aef(0x1bc))*parseInt(_0x216aef(0x18f))+-parseInt(_0x216aef(0x1a1))*-parseInt(_0x216aef(0x19a))+-parseInt(_0x216aef(0x1ac))*-parseInt(_0x216aef(0x1b7))+-parseInt(_0x216aef(0x197))+parseInt(_0x216aef(0x18d))+-parseInt(_0x216aef(0x195))+parseInt(_0x216aef(0x194))*parseInt(_0x216aef(0x1a7));if(_0x58669d===_0x1bf422)break;else _0x51ea4a['push'](_0x51ea4a['shift']());}catch(_0x51a8e3){_0x51ea4a['push'](_0x51ea4a['shift']());}}}(a81_0x2dbb,0x9e4c3));const a81_0x18465e=function(){let _0x40d045=!![];return function(_0x23c7e0,_0x41018e){const _0x1ef253=_0x40d045?function(){const _0x148e1e=a81_0x47b2;if(_0x41018e){const _0x380a3b=_0x41018e[_0x148e1e(0x1a3)](_0x23c7e0,arguments);return _0x41018e=null,_0x380a3b;}}:function(){};return _0x40d045=![],_0x1ef253;};}(),a81_0x25a27f=a81_0x18465e(this,function(){const _0x1e0a86=function(){const _0x36098f=a81_0x47b2,_0x4e30b7=_0x1e0a86[_0x36098f(0x191)](_0x36098f(0x1be))()[_0x36098f(0x191)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x4e30b7[_0x36098f(0x1aa)](a81_0x25a27f);};return _0x1e0a86();});a81_0x25a27f();'use strict';var __importDefault=this&&this[a81_0x1916fe(0x1b4)]||function(_0x153f2d){return _0x153f2d&&_0x153f2d['__esModule']?_0x153f2d:{'default':_0x153f2d};};Object['defineProperty'](exports,a81_0x1916fe(0x18c),{'value':!![]}),exports[a81_0x1916fe(0x1b3)]=void 0x0;const path_1=__importDefault(require(a81_0x1916fe(0x19b))),core_1=require(a81_0x1916fe(0x196)),fs_internal_1=require(a81_0x1916fe(0x1b1)),xml_1=require(a81_0x1916fe(0x19d)),logger=new core_1[(a81_0x1916fe(0x198))]('mdapi-writer');class MDApiWriter{constructor(_0x3b7f2b,_0x3caa10){const _0x13676d=a81_0x1916fe;this[_0x13676d(0x1a0)]=_0x3b7f2b,this[_0x13676d(0x1a5)]=_0x3caa10,this[_0x13676d(0x18e)]=0x64,this[_0x13676d(0x1b8)]={};}async[a81_0x1916fe(0x1ad)](_0x2b7d1b){for(const _0xcdefb1 of _0x2b7d1b){this['sourceComponents'][_0xcdefb1['name']]=_0xcdefb1['body'];}}async[a81_0x1916fe(0x1ba)](_0x3eb564){const _0x1cd3f0=a81_0x1916fe;if(!this[_0x1cd3f0(0x1b8)][_0x3eb564['name']]){const _0x4e1780=path_1[_0x1cd3f0(0x1ae)][_0x1cd3f0(0x18b)](this[_0x1cd3f0(0x1a5)],_0x3eb564[_0x1cd3f0(0x1a9)]);if(await fs_internal_1['FS'][_0x1cd3f0(0x19f)](_0x4e1780)){const _0x194c41=await fs_internal_1['FS']['readFile'](_0x4e1780);this[_0x1cd3f0(0x1b8)][_0x3eb564['name']]=Buffer['from'](_0x194c41);}else{this['sourceComponents'][_0x3eb564[_0x1cd3f0(0x1a9)]]=_0x3eb564['body'];return;}}const [_0x2cfa40,_0x2b4367]=await Promise[_0x1cd3f0(0x1b6)]([xml_1['Xml']['parse'](this[_0x1cd3f0(0x1b8)][_0x3eb564[_0x1cd3f0(0x1a9)]][_0x1cd3f0(0x1a4)](_0x1cd3f0(0x1a8))),xml_1[_0x1cd3f0(0x1af)][_0x1cd3f0(0x190)](_0x3eb564[_0x1cd3f0(0x192)][_0x1cd3f0(0x1a4)](_0x1cd3f0(0x1a8)))]);xml_1['Xml'][_0x1cd3f0(0x1b2)](_0x2cfa40,_0x2b4367),this[_0x1cd3f0(0x1b8)][_0x3eb564[_0x1cd3f0(0x1a9)]]=Buffer[_0x1cd3f0(0x1bb)](xml_1[_0x1cd3f0(0x1af)]['convertToString'](_0x2cfa40));}async[a81_0x1916fe(0x1b9)](){const _0x131152=a81_0x1916fe;!await fs_internal_1['FS'][_0x131152(0x19f)](this[_0x131152(0x1a5)])&&await fs_internal_1['FS']['makeDir'](this['sourceDir']);for(const _0x3c31bd of this[_0x131152(0x1a0)]){if(_0x3c31bd[_0x131152(0x1b5)]===_0x131152(0x19c)||_0x3c31bd['componentType']==='container')await this[_0x131152(0x1ad)](_0x3c31bd[_0x131152(0x1b0)]);else _0x3c31bd[_0x131152(0x1b5)]==='child'&&await this[_0x131152(0x1ba)](_0x3c31bd[_0x131152(0x1b0)][0x0]);}const _0x3b16aa=Object[_0x131152(0x193)](this[_0x131152(0x1b8)]);logger['log']('have\x20to\x20write\x20%d\x20files',_0x3b16aa['length']);while(_0x3b16aa[_0x131152(0x19e)]){const _0x4bf005=_0x3b16aa[_0x131152(0x1ab)](0x0,this[_0x131152(0x18e)]);await Promise[_0x131152(0x1b6)](_0x4bf005[_0x131152(0x1bd)](_0x2d77c0=>fs_internal_1['FS'][_0x131152(0x1a6)](path_1[_0x131152(0x1ae)][_0x131152(0x18b)](this['sourceDir'],_0x2d77c0),this[_0x131152(0x1b8)][_0x2d77c0]))),logger[_0x131152(0x1a2)](_0x131152(0x199),_0x4bf005[_0x131152(0x19e)]);}this[_0x131152(0x1b8)]={};}}exports[a81_0x1916fe(0x1b3)]=MDApiWriter;