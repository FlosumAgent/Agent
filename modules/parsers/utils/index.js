function a99_0x42bc(_0x527139,_0x471b98){const _0x968b87=a99_0x1dfd();return a99_0x42bc=function(_0x19ae10,_0x36db50){_0x19ae10=_0x19ae10-0xfa;let _0x1dfdb8=_0x968b87[_0x19ae10];return _0x1dfdb8;},a99_0x42bc(_0x527139,_0x471b98);}const a99_0x29cdbd=a99_0x42bc;(function(_0x5056e7,_0x43e026){const _0xf2f32d=a99_0x42bc,_0x5c4383=_0x5056e7();while(!![]){try{const _0x4d804e=-parseInt(_0xf2f32d(0x132))/0x1*(parseInt(_0xf2f32d(0x117))/0x2)+-parseInt(_0xf2f32d(0xfa))/0x3+parseInt(_0xf2f32d(0x12a))/0x4*(parseInt(_0xf2f32d(0x133))/0x5)+parseInt(_0xf2f32d(0x107))/0x6+parseInt(_0xf2f32d(0x112))/0x7+parseInt(_0xf2f32d(0x12c))/0x8*(parseInt(_0xf2f32d(0x100))/0x9)+-parseInt(_0xf2f32d(0x130))/0xa;if(_0x4d804e===_0x43e026)break;else _0x5c4383['push'](_0x5c4383['shift']());}catch(_0x2fb410){_0x5c4383['push'](_0x5c4383['shift']());}}}(a99_0x1dfd,0x2dbeb));const a99_0x36db50=function(){let _0x55b643=!![];return function(_0x272c6d,_0x1943fd){const _0x547059=_0x55b643?function(){const _0x192366=a99_0x42bc;if(_0x1943fd){const _0x414b01=_0x1943fd[_0x192366(0x10d)](_0x272c6d,arguments);return _0x1943fd=null,_0x414b01;}}:function(){};return _0x55b643=![],_0x547059;};}(),a99_0x19ae10=a99_0x36db50(this,function(){const _0x52d6eb=a99_0x42bc;return a99_0x19ae10[_0x52d6eb(0x105)]()[_0x52d6eb(0x118)](_0x52d6eb(0x12e))[_0x52d6eb(0x105)]()[_0x52d6eb(0x11c)](a99_0x19ae10)['search'](_0x52d6eb(0x12e));});a99_0x19ae10();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x10c4ab){const _0x15366d=a99_0x42bc;return _0x10c4ab&&_0x10c4ab[_0x15366d(0xfc)]?_0x10c4ab:{'default':_0x10c4ab};};Object[a99_0x29cdbd(0x128)](exports,'__esModule',{'value':!![]}),exports[a99_0x29cdbd(0x129)]=exports['createChildComponentsFromParent']=exports['calculateCRC32']=exports[a99_0x29cdbd(0x12f)]=exports['isParentComponent']=exports[a99_0x29cdbd(0x116)]=exports[a99_0x29cdbd(0x11b)]=exports['convertToCleanPaths']=void 0x0;const constants_1=require('../../../constants'),path_1=__importDefault(require(a99_0x29cdbd(0x110))),child_types_map_1=__importDefault(require(a99_0x29cdbd(0x124))),parent_xml_types_1=__importDefault(require(a99_0x29cdbd(0x11d))),xml_1=require(a99_0x29cdbd(0x131)),crc_32_1=__importDefault(require('crc-32')),parent_xml_types_map_1=__importDefault(require(a99_0x29cdbd(0x111)));function convertToCleanPaths(_0x5ade17){const _0x435435=a99_0x29cdbd,_0x179c92=_0x5ade17[_0x435435(0x123)](_0x54231b=>_0x54231b[_0x435435(0x10b)](constants_1[_0x435435(0x12b)])),_0x403bc6=_0x179c92[_0x435435(0x11a)](_0x83c0ab=>_0x83c0ab['replace'](new RegExp(constants_1[_0x435435(0x12b)]+'$'),'')),_0x3561a0=_0x5ade17[_0x435435(0x123)](_0x433bbe=>!_0x179c92['includes'](_0x433bbe));return[...new Set([..._0x3561a0,..._0x403bc6])];}function a99_0x1dfd(){const _0xeec2d8=['getChildComponentTypeByChildNodeName','constructor','../data/parent-xml-types','fullName','addChildNode','default','some','utf-8','filter','../data/child-types-map','crc','filePath','keys','defineProperty','extractComponentTypeFromFiles','4YEISOg','META_XML_EXTENSION','1016uJfaRs','createEmptyRootNodeFrom','(((.+)+)+)+$','isParentComponentFile','1302420kMepOl','./xml','2101vNcTpj','980330QbnOcU','nodeName','nodeData','960474EzympL','Xml','__esModule','calculateCRC32','from','indexOf','4149VPejxW','files','str','Cannot\x20identify\x20component\x20type.\x20At\x20file\x20[','values','toString','find','2016282geJelk','convertToString','push','basename','endsWith','entries','apply','length','split','path','../data/parent-xml-types-map','1447509jiFckb','includes','parse','join','extractFilenameFromPath','152YTxlfB','search','convertToCleanPaths','map'];a99_0x1dfd=function(){return _0xeec2d8;};return a99_0x1dfd();}exports[a99_0x29cdbd(0x119)]=convertToCleanPaths;function getChildComponentTypeByChildNodeName(_0xc44dd6){const _0x4ae947=a99_0x29cdbd,_0x30786e=Object[_0x4ae947(0x10c)](child_types_map_1[_0x4ae947(0x120)])['find'](([_0x378198,_0x51b5f3])=>_0x51b5f3===_0xc44dd6);if(!_0x30786e)throw new Error('Unknown\x20child\x20type\x20for\x20'+_0xc44dd6);return _0x30786e[0x0];}exports['getChildComponentTypeByChildNodeName']=getChildComponentTypeByChildNodeName;function extractFilenameFromPath(_0x4e8405){const _0x46e75b=a99_0x29cdbd,_0x72bb36=_0x4e8405[_0x46e75b(0x10f)]('/'),_0x56b912=path_1['default'][_0x46e75b(0x10a)](_0x4e8405,path_1[_0x46e75b(0x120)]['extname'](_0x4e8405));if(_0x72bb36['length']>0x2)return _0x72bb36[_0x72bb36[_0x46e75b(0x10e)]-0x2]+'/'+_0x56b912;return _0x56b912;}exports[a99_0x29cdbd(0x116)]=extractFilenameFromPath;function isParentComponent({type:_0x5818b9}){const _0x3d115b=a99_0x29cdbd;return parent_xml_types_1[_0x3d115b(0x120)][_0x3d115b(0x113)](_0x5818b9);}exports['isParentComponent']=isParentComponent;function isParentComponentFile(_0x365824){const _0x134136=a99_0x29cdbd,_0xff8a50=path_1[_0x134136(0x120)][_0x134136(0x114)](_0x365824);return Object[_0x134136(0x104)](parent_xml_types_map_1[_0x134136(0x120)])[_0x134136(0x121)](_0x545d66=>_0xff8a50['dir']['endsWith'](_0x545d66));}exports['isParentComponentFile']=isParentComponentFile;function calculateCRC32(_0x5570c1){const _0x370dfd=a99_0x29cdbd,_0x42f97e=Object['keys'](_0x5570c1[_0x370dfd(0x101)])['sort']();switch(_0x42f97e[_0x370dfd(0x10e)]){case 0x1:{const [_0x35ebe8]=_0x42f97e,_0x5cbc10=_0x5570c1[_0x370dfd(0x101)][_0x35ebe8];return crc_32_1[_0x370dfd(0x120)][_0x370dfd(0x102)](_0x5cbc10['toString'](_0x370dfd(0x122)),0x20)['toString']();}case 0x2:{const [_0x29a075,_0x3bf8f7]=_0x42f97e,_0x48f6d3=_0x5570c1['files'][_0x29a075],_0x5d744a=_0x5570c1[_0x370dfd(0x101)][_0x3bf8f7];return crc_32_1[_0x370dfd(0x120)][_0x370dfd(0x102)](_0x48f6d3[_0x370dfd(0x105)]('utf-8'),0x20)[_0x370dfd(0x105)]()+'\x20'+crc_32_1['default'][_0x370dfd(0x102)](_0x5d744a[_0x370dfd(0x105)]('utf-8'),0x20)[_0x370dfd(0x105)]();}default:{let _0x450d83=0x0;if(_0x42f97e['length']>0x0)_0x450d83=crc_32_1[_0x370dfd(0x120)][_0x370dfd(0x102)](_0x5570c1[_0x370dfd(0x101)][_0x42f97e[0x0]][_0x370dfd(0x105)](_0x370dfd(0x122)),0x20);for(let _0x25d21d=0x1;_0x25d21d<_0x42f97e['length'];_0x25d21d++){const _0x2f255a=crc_32_1[_0x370dfd(0x120)][_0x370dfd(0x102)](_0x5570c1[_0x370dfd(0x101)][_0x42f97e[_0x25d21d]][_0x370dfd(0x105)]('utf-8'),0x20);_0x450d83=Math['round']((_0x2f255a+_0x450d83)/0x2);}return _0x450d83[_0x370dfd(0x105)]();}}}exports[a99_0x29cdbd(0xfd)]=calculateCRC32;function createChildComponentsFromParent(_0x411ea2,_0x5208de,_0x1a94ed){const _0x57841a=a99_0x29cdbd,_0xf1b20d=[];for(const _0xd69e5f of _0x1a94ed){const _0x4dfc53=xml_1['Xml'][_0x57841a(0x11f)](xml_1[_0x57841a(0xfb)][_0x57841a(0x12d)](_0x5208de),_0xd69e5f[_0x57841a(0x134)],_0xd69e5f['nodeData']),_0x39706c={};_0x39706c[_0x57841a(0x126)]=_0x411ea2[_0x57841a(0x126)],_0x39706c['type']=getChildComponentTypeByChildNodeName(_0xd69e5f[_0x57841a(0x134)]),_0x39706c['name']=_0x411ea2['name']+'.'+_0xd69e5f[_0x57841a(0x135)][_0x57841a(0x11e)][0x0],_0x39706c[_0x57841a(0x101)]={[Object[_0x57841a(0x127)](_0x411ea2[_0x57841a(0x101)])[0x0]]:Buffer[_0x57841a(0xfe)](xml_1['Xml'][_0x57841a(0x108)](_0x4dfc53,![]))},_0x39706c[_0x57841a(0x125)]=calculateCRC32(_0x39706c),_0xf1b20d[_0x57841a(0x109)](_0x39706c);}return _0xf1b20d;}exports['createChildComponentsFromParent']=createChildComponentsFromParent;async function extractComponentTypeFromFiles({files:_0x463970}){const _0x534104=a99_0x29cdbd,_0x4bcd59=Object[_0x534104(0x127)](_0x463970),_0x2687f7=_0x4bcd59[_0x534104(0x106)](_0x104796=>_0x104796[_0x534104(0x10b)](constants_1[_0x534104(0x12b)]))||_0x4bcd59[0x0];try{const _0xd2be27=await xml_1[_0x534104(0xfb)][_0x534104(0x114)](_0x463970[_0x2687f7][_0x534104(0x105)](_0x534104(0x122))),_0x44be95=Object['keys'](_0xd2be27)[0x0];if(!_0x44be95)throw new Error();return _0x44be95;}catch(_0x2eec7e){throw new Error(_0x534104(0x103)+_0x4bcd59[_0x534104(0xff)](_0x2687f7)+']\x20index\x20in\x20('+_0x4bcd59[_0x534104(0x115)](',\x20')+')');}}exports['extractComponentTypeFromFiles']=extractComponentTypeFromFiles;