const a91_0x52b77d=a91_0x3380;(function(_0x4ea822,_0x4670d9){const _0x4bcaa6=a91_0x3380,_0x1f9029=_0x4ea822();while(!![]){try{const _0x44c76a=-parseInt(_0x4bcaa6(0xa2))/0x1+-parseInt(_0x4bcaa6(0xd5))/0x2*(-parseInt(_0x4bcaa6(0xb6))/0x3)+parseInt(_0x4bcaa6(0xbe))/0x4*(-parseInt(_0x4bcaa6(0xad))/0x5)+parseInt(_0x4bcaa6(0xb4))/0x6*(parseInt(_0x4bcaa6(0xbf))/0x7)+-parseInt(_0x4bcaa6(0xd7))/0x8*(-parseInt(_0x4bcaa6(0xd6))/0x9)+-parseInt(_0x4bcaa6(0xc9))/0xa+parseInt(_0x4bcaa6(0xa9))/0xb;if(_0x44c76a===_0x4670d9)break;else _0x1f9029['push'](_0x1f9029['shift']());}catch(_0x5bdd14){_0x1f9029['push'](_0x1f9029['shift']());}}}(a91_0x5d38,0x724eb));const a91_0x5614f9=function(){let _0x4034eb=!![];return function(_0x145122,_0x94f228){const _0x15356b=_0x4034eb?function(){const _0x5b6dde=a91_0x3380;if(_0x94f228){const _0x558675=_0x94f228[_0x5b6dde(0xa8)](_0x145122,arguments);return _0x94f228=null,_0x558675;}}:function(){};return _0x4034eb=![],_0x15356b;};}(),a91_0x1a1a88=a91_0x5614f9(this,function(){const _0xadde9b=a91_0x3380;return a91_0x1a1a88['toString']()[_0xadde9b(0xce)]('(((.+)+)+)+$')[_0xadde9b(0xca)]()[_0xadde9b(0xcc)](a91_0x1a1a88)[_0xadde9b(0xce)](_0xadde9b(0xb2));});a91_0x1a1a88();'use strict';var __importDefault=this&&this[a91_0x52b77d(0xcd)]||function(_0x345d39){return _0x345d39&&_0x345d39['__esModule']?_0x345d39:{'default':_0x345d39};};Object[a91_0x52b77d(0xda)](exports,'__esModule',{'value':!![]}),exports[a91_0x52b77d(0xc0)]=void 0x0;const fs_internal_1=require(a91_0x52b77d(0xc8)),core_1=require('../../../core'),xml_1=require(a91_0x52b77d(0xd1)),child_types_1=__importDefault(require(a91_0x52b77d(0xbd))),child_types_map_1=__importDefault(require('../data/child-types-map')),path_1=__importDefault(require(a91_0x52b77d(0xb8)));function a91_0x3380(_0x5c82db,_0x47ee0d){const _0x32b672=a91_0x5d38();return a91_0x3380=function(_0x1a1a88,_0x5614f9){_0x1a1a88=_0x1a1a88-0xa0;let _0x5d384e=_0x32b672[_0x1a1a88];return _0x5d384e;},a91_0x3380(_0x5c82db,_0x47ee0d);}class MDApiRemover{constructor(_0x35d538,_0x2210e7){const _0x26d673=a91_0x52b77d;this['components']=_0x35d538,this['sourceDir']=_0x2210e7,this['META_EXTENSION']=_0x26d673(0xb5),this[_0x26d673(0xd2)]='site-meta.xml',this[_0x26d673(0xc6)]=0x64,this[_0x26d673(0xa6)]=new core_1[(_0x26d673(0xaa))](MDApiRemover[_0x26d673(0xab)]),this[_0x26d673(0xc4)]={};}async[a91_0x52b77d(0xa3)](_0x39817c){const _0x1ec0f9=a91_0x52b77d,_0x4fb457=path_1['default']['join'](this[_0x1ec0f9(0xcf)],_0x39817c['path']),_0x15ab6f=path_1[_0x1ec0f9(0xac)]['join'](this[_0x1ec0f9(0xcf)],''+_0x39817c['path']+this['META_EXTENSION']);this[_0x1ec0f9(0xc4)][_0x39817c[_0x1ec0f9(0xb8)]]&&delete this[_0x1ec0f9(0xc4)][_0x39817c[_0x1ec0f9(0xb8)]];const _0x3be919=await fs_internal_1['FS'][_0x1ec0f9(0xa1)](_0x4fb457)[_0x1ec0f9(0xb0)](()=>![]);if(_0x3be919){this['logger'][_0x1ec0f9(0xbb)]('remove\x20component\x20directory\x20%s\x20[%s]',_0x4fb457,_0x39817c[_0x1ec0f9(0xa5)]),await fs_internal_1['FS']['removeDir'](_0x4fb457);_0x39817c[_0x1ec0f9(0xa5)]===_0x1ec0f9(0xa7)&&await fs_internal_1['FS'][_0x1ec0f9(0xcb)](''+_0x4fb457+this['META_EXPERIENCE_BUNDLE'])[_0x1ec0f9(0xb0)](()=>void 0x0);return;}this[_0x1ec0f9(0xa6)][_0x1ec0f9(0xbb)]('remove\x20component\x20\x20%s\x20[%s]',_0x4fb457,_0x39817c[_0x1ec0f9(0xa5)]),await Promise[_0x1ec0f9(0xc3)]([fs_internal_1['FS']['removeFile'](_0x4fb457),fs_internal_1['FS'][_0x1ec0f9(0xcb)](_0x15ab6f)]);}async[a91_0x52b77d(0xb9)](_0x386479){const _0x2d38ad=a91_0x52b77d,{fileName:_0x2b852c,type:_0x4c6488,path:_0x53fce6}=_0x386479,_0x44268d=child_types_map_1[_0x2d38ad(0xac)][_0x4c6488];if(!_0x44268d)throw new Error(_0x2d38ad(0xa0)+_0x4c6488);if(!this[_0x2d38ad(0xc4)][_0x53fce6]){const _0x4c4691=path_1[_0x2d38ad(0xac)]['join'](this[_0x2d38ad(0xcf)],_0x53fce6),_0x4c177d=await fs_internal_1['FS']['exists'](_0x4c4691);if(!_0x4c177d)return;const _0x5d843a=await fs_internal_1['FS'][_0x2d38ad(0xb1)](_0x4c4691);this[_0x2d38ad(0xc4)][_0x53fce6]=await xml_1['Xml']['parse'](_0x5d843a);}const _0x2ae3bd=this['parentComponents'][_0x53fce6],_0x253413=_0x2b852c[_0x2d38ad(0xc7)]('.')[_0x2d38ad(0xd8)]();xml_1[_0x2d38ad(0xd3)][_0x2d38ad(0xae)](_0x2ae3bd,_0x44268d,_0x253413||_0x2b852c),xml_1[_0x2d38ad(0xd3)]['isEmptyXml'](_0x2ae3bd)?(this[_0x2d38ad(0xa6)]['log']('remote\x20empty\x20parent\x20component\x20file\x20%s\x20[%s]',_0x386479['path'],_0x386479[_0x2d38ad(0xb3)]),await this[_0x2d38ad(0xa3)](_0x386479),delete this['parentComponents'][_0x53fce6]):this[_0x2d38ad(0xc4)][_0x53fce6]=_0x2ae3bd;}async[a91_0x52b77d(0xd4)](){const _0xc2dfad=a91_0x52b77d;!await fs_internal_1['FS'][_0xc2dfad(0xa4)](this[_0xc2dfad(0xcf)])&&await fs_internal_1['FS'][_0xc2dfad(0xc2)](this[_0xc2dfad(0xcf)]);for(const _0x3abb97 of this[_0xc2dfad(0xba)]){!child_types_1['default']['includes'](_0x3abb97['type'])?(this[_0xc2dfad(0xa6)][_0xc2dfad(0xbb)](_0xc2dfad(0xd9),_0x3abb97[_0xc2dfad(0xb3)],_0x3abb97[_0xc2dfad(0xa5)]),await this[_0xc2dfad(0xa3)](_0x3abb97)):(this[_0xc2dfad(0xa6)][_0xc2dfad(0xbb)](_0xc2dfad(0xc5),_0x3abb97[_0xc2dfad(0xb3)],_0x3abb97['type']),await this['removeChild'](_0x3abb97));}const _0x8b87a2=Object['keys'](this[_0xc2dfad(0xc4)]);this['logger'][_0xc2dfad(0xbb)](_0xc2dfad(0xb7),this[_0xc2dfad(0xba)][_0xc2dfad(0xaf)]);while(_0x8b87a2[_0xc2dfad(0xaf)]){const _0x477370=_0x8b87a2['splice'](0x0,this[_0xc2dfad(0xc6)]);for(const _0x16a824 of _0x477370){await fs_internal_1['FS'][_0xc2dfad(0xbc)](path_1[_0xc2dfad(0xac)][_0xc2dfad(0xd0)](this[_0xc2dfad(0xcf)],_0x16a824),xml_1[_0xc2dfad(0xd3)][_0xc2dfad(0xc1)](this[_0xc2dfad(0xc4)][_0x16a824]));}}this['parentComponents']={};}}exports[a91_0x52b77d(0xc0)]=MDApiRemover;function a91_0x5d38(){const _0x437e1f=['length','catch','readFile','(((.+)+)+)+$','fileName','6HdtiLZ','-meta.xml','9zXVewV','have\x20to\x20update\x20%d\x20files','path','removeChild','components','log','writeFile','../data/child-types','1686436wrNymL','2079259IrbsNN','MDApiRemover','convertToString','makeDir','all','parentComponents','remove\x20child\x20component\x20%s\x20[%s]','MAX_WRITES_PER_TICK','split','../../internal/fs.internal','6891950sYpAmi','toString','removeFile','constructor','__importDefault','search','sourceDir','join','../utils/xml','META_EXPERIENCE_BUNDLE','Xml','start','40026ZGsRAZ','909JsuGin','59064nRFeaV','pop','remove\x20parent\x20component\x20%s\x20[%s]','defineProperty','Unknown\x20child\x20type\x20','isDir','251284PuEXDs','removeParent','exists','type','logger','ExperienceBundle','apply','8002852EsDBgF','Logger','name','default','5EiSJlU','removeAt'];a91_0x5d38=function(){return _0x437e1f;};return a91_0x5d38();}