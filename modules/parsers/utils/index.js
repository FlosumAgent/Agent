const a99_0x39b174=a99_0xa0ec;(function(_0x2eef0e,_0x23c50c){const _0x436446=a99_0xa0ec,_0x342ca9=_0x2eef0e();while(!![]){try{const _0x37fb89=parseInt(_0x436446(0x1dd))/0x1*(-parseInt(_0x436446(0x1e4))/0x2)+-parseInt(_0x436446(0x1d3))/0x3+parseInt(_0x436446(0x1ba))/0x4+-parseInt(_0x436446(0x1af))/0x5*(parseInt(_0x436446(0x1cc))/0x6)+-parseInt(_0x436446(0x1b7))/0x7+parseInt(_0x436446(0x1b6))/0x8*(-parseInt(_0x436446(0x1cf))/0x9)+parseInt(_0x436446(0x1da))/0xa*(parseInt(_0x436446(0x1d1))/0xb);if(_0x37fb89===_0x23c50c)break;else _0x342ca9['push'](_0x342ca9['shift']());}catch(_0x1d7f96){_0x342ca9['push'](_0x342ca9['shift']());}}}(a99_0x5669,0x409a1));const a99_0x55c8ec=function(){let _0x11688b=!![];return function(_0x308bc6,_0x16300a){const _0x514659=_0x11688b?function(){if(_0x16300a){const _0x14efca=_0x16300a['apply'](_0x308bc6,arguments);return _0x16300a=null,_0x14efca;}}:function(){};return _0x11688b=![],_0x514659;};}(),a99_0x12c785=a99_0x55c8ec(this,function(){const _0x36d6ab=a99_0xa0ec;return a99_0x12c785['toString']()[_0x36d6ab(0x1d9)](_0x36d6ab(0x1c7))[_0x36d6ab(0x1ad)]()[_0x36d6ab(0x1d6)](a99_0x12c785)['search'](_0x36d6ab(0x1c7));});a99_0x12c785();'use strict';var __importDefault=this&&this[a99_0x39b174(0x1e0)]||function(_0x5004b9){const _0x5571e4=a99_0x39b174;return _0x5004b9&&_0x5004b9[_0x5571e4(0x1c6)]?_0x5004b9:{'default':_0x5004b9};};Object['defineProperty'](exports,a99_0x39b174(0x1c6),{'value':!![]}),exports['extractComponentTypeFromFiles']=exports[a99_0x39b174(0x1c8)]=exports[a99_0x39b174(0x1ca)]=exports[a99_0x39b174(0x1df)]=exports[a99_0x39b174(0x1db)]=exports[a99_0x39b174(0x1b1)]=exports[a99_0x39b174(0x1e2)]=exports[a99_0x39b174(0x1dc)]=void 0x0;const constants_1=require(a99_0x39b174(0x1be)),path_1=__importDefault(require(a99_0x39b174(0x1bf))),child_types_map_1=__importDefault(require(a99_0x39b174(0x1b9))),parent_xml_types_1=__importDefault(require(a99_0x39b174(0x1b4))),xml_1=require(a99_0x39b174(0x1c0)),crc_32_1=__importDefault(require(a99_0x39b174(0x1bc))),parent_xml_types_map_1=__importDefault(require('../data/parent-xml-types-map'));function convertToCleanPaths(_0x260c11){const _0x2d6c30=a99_0x39b174,_0x32fdf3=_0x260c11[_0x2d6c30(0x1e3)](_0xd5c2c4=>_0xd5c2c4[_0x2d6c30(0x1d2)](constants_1[_0x2d6c30(0x1cd)])),_0x4d97f8=_0x32fdf3['map'](_0x17d2b6=>_0x17d2b6['replace'](new RegExp(constants_1['META_XML_EXTENSION']+'$'),'')),_0x54448e=_0x260c11[_0x2d6c30(0x1e3)](_0x46023b=>!_0x32fdf3[_0x2d6c30(0x1e1)](_0x46023b));return[...new Set([..._0x54448e,..._0x4d97f8])];}exports[a99_0x39b174(0x1dc)]=convertToCleanPaths;function a99_0xa0ec(_0x4dfcdd,_0x24d6ed){const _0xb2b8e9=a99_0x5669();return a99_0xa0ec=function(_0x12c785,_0x55c8ec){_0x12c785=_0x12c785-0x1a8;let _0x566941=_0xb2b8e9[_0x12c785];return _0x566941;},a99_0xa0ec(_0x4dfcdd,_0x24d6ed);}function getChildComponentTypeByChildNodeName(_0xd61bea){const _0x448923=a99_0x39b174,_0x4aae50=Object[_0x448923(0x1bb)](child_types_map_1[_0x448923(0x1c4)])[_0x448923(0x1a9)](([_0x132761,_0x49c1ef])=>_0x49c1ef===_0xd61bea);if(!_0x4aae50)throw new Error(_0x448923(0x1bd)+_0xd61bea);return _0x4aae50[0x0];}exports[a99_0x39b174(0x1e2)]=getChildComponentTypeByChildNodeName;function extractFilenameFromPath(_0x23b54f){const _0xb269d0=a99_0x39b174,_0x5e40bd=_0x23b54f['split']('/'),_0x2e5cd8=path_1['default'][_0xb269d0(0x1cb)](_0x23b54f,path_1['default'][_0xb269d0(0x1c9)](_0x23b54f));if(_0x5e40bd['length']>0x2)return _0x5e40bd[_0x5e40bd['length']-0x2]+'/'+_0x2e5cd8;return _0x2e5cd8;}exports['extractFilenameFromPath']=extractFilenameFromPath;function isParentComponent({type:_0x3d5b8f}){const _0x58388d=a99_0x39b174;return parent_xml_types_1[_0x58388d(0x1c4)]['includes'](_0x3d5b8f);}exports['isParentComponent']=isParentComponent;function isParentComponentFile(_0x51d714){const _0x412c54=a99_0x39b174,_0x348ed2=path_1[_0x412c54(0x1c4)][_0x412c54(0x1c1)](_0x51d714);return Object[_0x412c54(0x1aa)](parent_xml_types_map_1[_0x412c54(0x1c4)])[_0x412c54(0x1ac)](_0x3cde04=>_0x348ed2['dir']['endsWith'](_0x3cde04));}exports[a99_0x39b174(0x1df)]=isParentComponentFile;function calculateCRC32(_0x48841b){const _0x14d275=a99_0x39b174,_0x3affb7=Object['keys'](_0x48841b['files'])['sort']();switch(_0x3affb7[_0x14d275(0x1d7)]){case 0x1:{const [_0x108411]=_0x3affb7,_0x206ae9=_0x48841b[_0x14d275(0x1b5)][_0x108411];return crc_32_1[_0x14d275(0x1c4)][_0x14d275(0x1d0)](_0x206ae9[_0x14d275(0x1ad)]('utf-8'),0x20)[_0x14d275(0x1ad)]();}case 0x2:{const [_0x363bf4,_0x47367d]=_0x3affb7,_0x94d359=_0x48841b[_0x14d275(0x1b5)][_0x363bf4],_0xa177b9=_0x48841b['files'][_0x47367d];return crc_32_1[_0x14d275(0x1c4)][_0x14d275(0x1d0)](_0x94d359['toString'](_0x14d275(0x1b2)),0x20)[_0x14d275(0x1ad)]()+'\x20'+crc_32_1[_0x14d275(0x1c4)][_0x14d275(0x1d0)](_0xa177b9[_0x14d275(0x1ad)](_0x14d275(0x1b2)),0x20)['toString']();}default:{let _0x46ac3a=0x0;if(_0x3affb7[_0x14d275(0x1d7)]>0x0)_0x46ac3a=crc_32_1['default'][_0x14d275(0x1d0)](_0x48841b['files'][_0x3affb7[0x0]][_0x14d275(0x1ad)]('utf-8'),0x20);for(let _0x389ee6=0x1;_0x389ee6<_0x3affb7[_0x14d275(0x1d7)];_0x389ee6++){const _0x3f9130=crc_32_1['default'][_0x14d275(0x1d0)](_0x48841b[_0x14d275(0x1b5)][_0x3affb7[_0x389ee6]][_0x14d275(0x1ad)]('utf-8'),0x20);_0x46ac3a=Math['round']((_0x3f9130+_0x46ac3a)/0x2);}return _0x46ac3a['toString']();}}}exports[a99_0x39b174(0x1ca)]=calculateCRC32;function createChildComponentsFromParent(_0x133269,_0x55025f,_0x4c054a){const _0x5069a9=a99_0x39b174,_0x574be9=[];for(const _0x12a6c0 of _0x4c054a){const _0x4cdc60=xml_1[_0x5069a9(0x1d4)]['addChildNode'](xml_1[_0x5069a9(0x1d4)][_0x5069a9(0x1d8)](_0x55025f),_0x12a6c0[_0x5069a9(0x1b0)],_0x12a6c0[_0x5069a9(0x1c5)]),_0x2f4537={};_0x2f4537['filePath']=_0x133269['filePath'],_0x2f4537[_0x5069a9(0x1ae)]=getChildComponentTypeByChildNodeName(_0x12a6c0[_0x5069a9(0x1b0)]),_0x2f4537[_0x5069a9(0x1b3)]=_0x133269[_0x5069a9(0x1b3)]+'.'+_0x12a6c0[_0x5069a9(0x1c5)][_0x5069a9(0x1a8)][0x0],_0x2f4537[_0x5069a9(0x1b5)]={[Object[_0x5069a9(0x1ab)](_0x133269[_0x5069a9(0x1b5)])[0x0]]:Buffer[_0x5069a9(0x1c2)](xml_1['Xml']['convertToString'](_0x4cdc60,![]))},_0x2f4537[_0x5069a9(0x1c3)]=calculateCRC32(_0x2f4537),_0x574be9['push'](_0x2f4537);}return _0x574be9;}exports[a99_0x39b174(0x1c8)]=createChildComponentsFromParent;async function extractComponentTypeFromFiles({files:_0x3aa7aa}){const _0x1bb4b7=a99_0x39b174,_0xd58f0f=Object[_0x1bb4b7(0x1ab)](_0x3aa7aa),_0x92cf81=_0xd58f0f[_0x1bb4b7(0x1a9)](_0x4e019e=>_0x4e019e['endsWith'](constants_1[_0x1bb4b7(0x1cd)]))||_0xd58f0f[0x0];try{const _0x2301ce=await xml_1[_0x1bb4b7(0x1d4)]['parse'](_0x3aa7aa[_0x92cf81][_0x1bb4b7(0x1ad)](_0x1bb4b7(0x1b2))),_0x26b64d=Object['keys'](_0x2301ce)[0x0];if(!_0x26b64d)throw new Error();return _0x26b64d;}catch(_0x31aa9d){throw new Error(_0x1bb4b7(0x1de)+_0xd58f0f[_0x1bb4b7(0x1b8)](_0x92cf81)+_0x1bb4b7(0x1ce)+_0xd58f0f['join'](',\x20')+')');}}function a99_0x5669(){const _0x389d09=['values','keys','some','toString','type','35LKDXKY','nodeName','extractFilenameFromPath','utf-8','name','../data/parent-xml-types','files','1448sMOQMv','1529843EgnpiV','indexOf','../data/child-types-map','1619676vURLmd','entries','crc-32','Unknown\x20child\x20type\x20for\x20','../../../constants','path','./xml','parse','from','crc','default','nodeData','__esModule','(((.+)+)+)+$','createChildComponentsFromParent','extname','calculateCRC32','basename','120810qQzkZl','META_XML_EXTENSION',']\x20index\x20in\x20(','17379CLGQTn','str','25839zgAIdE','endsWith','1021494NWmQaS','Xml','extractComponentTypeFromFiles','constructor','length','createEmptyRootNodeFrom','search','5010xHHQbS','isParentComponent','convertToCleanPaths','33457NoZxDl','Cannot\x20identify\x20component\x20type.\x20At\x20file\x20[','isParentComponentFile','__importDefault','includes','getChildComponentTypeByChildNodeName','filter','16zIyqSX','fullName','find'];a99_0x5669=function(){return _0x389d09;};return a99_0x5669();}exports[a99_0x39b174(0x1d5)]=extractComponentTypeFromFiles;