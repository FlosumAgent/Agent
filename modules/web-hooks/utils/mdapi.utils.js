const a189_0x3be0f7=a189_0x2af8;(function(_0x57f975,_0x400a0d){const _0x3dd2eb=a189_0x2af8,_0x109067=_0x57f975();while(!![]){try{const _0x729b38=parseInt(_0x3dd2eb(0x1aa))/0x1+-parseInt(_0x3dd2eb(0x1cb))/0x2+parseInt(_0x3dd2eb(0x1b5))/0x3+parseInt(_0x3dd2eb(0x1bc))/0x4+-parseInt(_0x3dd2eb(0x19b))/0x5*(parseInt(_0x3dd2eb(0x19d))/0x6)+parseInt(_0x3dd2eb(0x199))/0x7+-parseInt(_0x3dd2eb(0x1be))/0x8;if(_0x729b38===_0x400a0d)break;else _0x109067['push'](_0x109067['shift']());}catch(_0x263a0f){_0x109067['push'](_0x109067['shift']());}}}(a189_0x2da4,0x3dc71));function a189_0x2af8(_0x395481,_0x1ce5c){const _0x45071b=a189_0x2da4();return a189_0x2af8=function(_0x2b589a,_0x2b808e){_0x2b589a=_0x2b589a-0x199;let _0x2da4c0=_0x45071b[_0x2b589a];return _0x2da4c0;},a189_0x2af8(_0x395481,_0x1ce5c);}const a189_0x2b808e=function(){let _0xdec7d6=!![];return function(_0x3c3160,_0x3e5f68){const _0x471d73=_0xdec7d6?function(){const _0x5beab6=a189_0x2af8;if(_0x3e5f68){const _0x41bb29=_0x3e5f68[_0x5beab6(0x1c2)](_0x3c3160,arguments);return _0x3e5f68=null,_0x41bb29;}}:function(){};return _0xdec7d6=![],_0x471d73;};}(),a189_0x2b589a=a189_0x2b808e(this,function(){const _0x3f9fc3=a189_0x2af8;return a189_0x2b589a['toString']()['search'](_0x3f9fc3(0x1a0))['toString']()[_0x3f9fc3(0x1a9)](a189_0x2b589a)[_0x3f9fc3(0x1ab)](_0x3f9fc3(0x1a0));});a189_0x2b589a();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5a9017){const _0xd1b1a0=a189_0x2af8;return _0x5a9017&&_0x5a9017[_0xd1b1a0(0x1b2)]?_0x5a9017:{'default':_0x5a9017};};Object[a189_0x3be0f7(0x1ca)](exports,a189_0x3be0f7(0x1b2),{'value':!![]}),exports[a189_0x3be0f7(0x1b3)]=void 0x0;const path_1=__importDefault(require(a189_0x3be0f7(0x1af))),core_1=require(a189_0x3be0f7(0x1c4)),fs_internal_1=require(a189_0x3be0f7(0x19a)),shell_internal_1=require(a189_0x3be0f7(0x1a1)),mdapi_1=require(a189_0x3be0f7(0x1a3)),remover_1=require(a189_0x3be0f7(0x1b9)),sfdx_utils_1=require('../../salesforce/utils/sfdx.utils'),logger=new core_1[(a189_0x3be0f7(0x1ac))](a189_0x3be0f7(0x1bb));class MDApiUtils{constructor(_0x190c07,_0x3485c4){const _0xfe2bca=a189_0x3be0f7;this['repoName']=_0x190c07,this[_0xfe2bca(0x1c1)]=_0x3485c4;}get['fullDirName'](){const _0x2f5830=a189_0x3be0f7;return this['repoName']+'_'+this[_0x2f5830(0x1c1)];}get[a189_0x3be0f7(0x19c)](){const _0x2dab6d=a189_0x3be0f7;return path_1[_0x2dab6d(0x1bf)][_0x2dab6d(0x1bd)](process['cwd'](),_0x2dab6d(0x1c6),_0x2dab6d(0x1b0),this[_0x2dab6d(0x1a8)]);}async['prepareMdapi'](_0x51542e){const _0x479b9e=a189_0x3be0f7;if(await sfdx_utils_1[_0x479b9e(0x1ae)][_0x479b9e(0x1c7)](_0x51542e))logger[_0x479b9e(0x1b8)](_0x479b9e(0x1c8)),await sfdx_utils_1['SFDX'][_0x479b9e(0x19f)](_0x51542e,this['dir']);else{logger['log'](_0x479b9e(0x19e)),await fs_internal_1['FS'][_0x479b9e(0x1c5)](this[_0x479b9e(0x19c)]);try{await shell_internal_1[_0x479b9e(0x1b1)][_0x479b9e(0x1a2)](_0x479b9e(0x1a4)+_0x51542e+_0x479b9e(0x1c3)+this[_0x479b9e(0x19c)]),await fs_internal_1['FS'][_0x479b9e(0x1a7)](this[_0x479b9e(0x19c)]+'/.git');}catch(_0x16a9cf){}}await sfdx_utils_1['SFDX'][_0x479b9e(0x1b7)](this[_0x479b9e(0x19c)]);}async[a189_0x3be0f7(0x1a5)](_0x2668bf){const _0x10e843=a189_0x3be0f7;await fs_internal_1['FS'][_0x10e843(0x1a6)](this[_0x10e843(0x19c)]+_0x10e843(0x1ad)),await shell_internal_1[_0x10e843(0x1b1)][_0x10e843(0x1a2)](_0x10e843(0x1a4)+this[_0x10e843(0x19c)]+_0x10e843(0x1c3)+_0x2668bf);}async[a189_0x3be0f7(0x1a7)](){const _0xd96a2d=a189_0x3be0f7;await fs_internal_1['FS'][_0xd96a2d(0x1a7)](this['dir']);}async[a189_0x3be0f7(0x1b6)](_0x151c65,_0x1d577b){const _0x2b2b27=a189_0x3be0f7,_0x230b74=new mdapi_1[(_0x2b2b27(0x1b4))]({'components':_0x151c65,'sourceDir':this[_0x2b2b27(0x19c)],'skipChildErrors':_0x1d577b===null||_0x1d577b===void 0x0?void 0x0:_0x1d577b[_0x2b2b27(0x1c9)]});await _0x230b74['start']();}async[a189_0x3be0f7(0x1c0)](_0x3e2b27){const _0x4b0899=a189_0x3be0f7,_0x2c686a=new remover_1['MDApiRemover'](_0x3e2b27,this[_0x4b0899(0x19c)]);await _0x2c686a[_0x4b0899(0x1ba)]();}}function a189_0x2da4(){const _0x1a24a1=['exec','../../parsers/mdapi','cp\x20-r\x20','copyMdapiTo','removeFile','removeDir','fullDirName','constructor','372657WPdWQI','search','Logger','/package.xml','SFDX','path','mdapi','Shell','__esModule','MDApiUtils','MDApiWriter','964191PlQRAI','writeFlosumComponents','createEmptyPackageXml','log','../../parsers/mdapi/remover','start','mdapi-utils','335424PgyqiA','join','874096PffLXt','default','removeComponents','branchName','apply','/*\x20','../../../core','makeDir','.temp','isSFDXProject','detected\x20sfdx\x20project\x20convert\x20to\x20mdapi','skipChildErrors','defineProperty','571050UuRJbT','1196314CYnQLo','../../internal/fs.internal','10zuaJsD','dir','902952cvBQxJ','copy\x20mdapi\x20to\x20temp\x20dir','sourceToMdapi','(((.+)+)+)+$','../../internal/shell.internal'];a189_0x2da4=function(){return _0x1a24a1;};return a189_0x2da4();}exports['MDApiUtils']=MDApiUtils;