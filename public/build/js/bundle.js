/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/scss/main.scss":
/*!**********************************!*\
  !*** ./resources/scss/main.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./resources/typescript/Components/Counter.ts":
/*!****************************************************!*\
  !*** ./resources/typescript/Components/Counter.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_2hgdvyoc7z=function(){var path="/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/resources/typescript/Components/Counter.ts",hash="a6c6af2d44920380875bcfbe50709fc083c78664",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/resources/typescript/Components/Counter.ts",statementMap:{"0":{start:{line:3,column:0},end:{line:5,column:3}},"1":{start:{line:7,column:13},end:{line:7,column:39}},"2":{start:{line:9,column:14},end:{line:9,column:33}},"3":{start:{line:11,column:0},end:{line:24,column:4}},"4":{start:{line:12,column:17},end:{line:14,column:3}},"5":{start:{line:17,column:17},end:{line:17,column:49}},"6":{start:{line:18,column:4},end:{line:18,column:67}},"7":{start:{line:21,column:2},end:{line:23,column:4}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:11,column:18},end:{line:11,column:19}},loc:{start:{line:11,column:30},end:{line:24,column:1}},line:11},"1":{name:"updateMarkedSquaresValue",decl:{start:{line:16,column:11},end:{line:16,column:35}},loc:{start:{line:16,column:38},end:{line:19,column:3}},line:16}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},f:{"0":0,"1":0},b:{},inputSourceMap:{version:3,sources:["resources/typescript/Components/Counter.ts"],names:[],mappings:";;;;;;AAAA,IAAA,MAAA,GAAA,OAAA,CAAA,iBAAA,CAAA;;AACA,IAAA,OAAA,GAAA,OAAA,CAAA,UAAA,CAAA;;AAEa,OAAA,CAAA,OAAA,GAAW,YAAA;AAEpB,MAAM,QAAQ,GAAG;AACb,IAAA,aAAa,EAAE;AADF,GAAjB;;AAMA,WAAS,wBAAT,GAAiC;AAC7B,QAAM,MAAM,GAAG,MAAA,CAAA,IAAA,CAAK,kBAAL,EAAf;AAEA,IAAA,OAAA,CAAA,CAAA,CAAE,QAAQ,CAAC,aAAX,EAA0B,WAA1B,GAAwC,MAAM,CAAC,MAAD,CAA9C;AACH;;AAED,SAAO;AACH,IAAA,wBAAwB,EAAA;AADrB,GAAP;AAIH,CAlBsB,EAAV",sourcesContent:["import { Grid } from 'Components/Grid';\nimport { $ } from '../utils';\n\nexport const Counter = (() => {\n\n    const Selector = {\n        COUNTER_VALUE: '.counterValue'\n    }\n\n    // onClick();\n\n    function updateMarkedSquaresValue() {\n        const amount = Grid.countMarkedSquares();\n\n        $(Selector.COUNTER_VALUE).textContent = String(amount);\n    }\n\n    return {\n        updateMarkedSquaresValue\n    }\n\n})();"],sourceRoot:"/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/",file:"/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/resources/typescript/Components/Counter.ts"},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_2hgdvyoc7z.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var Grid_1=(cov_2hgdvyoc7z.s[1]++,__webpack_require__(/*! Components/Grid */ "./resources/typescript/Components/Grid.ts"));var utils_1=(cov_2hgdvyoc7z.s[2]++,__webpack_require__(/*! ../utils */ "./resources/typescript/utils.ts"));cov_2hgdvyoc7z.s[3]++;exports.Counter=function(){cov_2hgdvyoc7z.f[0]++;var Selector=(cov_2hgdvyoc7z.s[4]++,{COUNTER_VALUE:'.counterValue'});function updateMarkedSquaresValue(){cov_2hgdvyoc7z.f[1]++;var amount=(cov_2hgdvyoc7z.s[5]++,Grid_1.Grid.countMarkedSquares());cov_2hgdvyoc7z.s[6]++;utils_1.$(Selector.COUNTER_VALUE).textContent=String(amount);}cov_2hgdvyoc7z.s[7]++;return{updateMarkedSquaresValue:updateMarkedSquaresValue};}();

/***/ }),

/***/ "./resources/typescript/Components/Grid.ts":
/*!*************************************************!*\
  !*** ./resources/typescript/Components/Grid.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_hkmdc4np7=function(){var path="/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/resources/typescript/Components/Grid.ts",hash="3162b509b33c7eab661d7b81245fcb7e3046054a",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/resources/typescript/Components/Grid.ts",statementMap:{"0":{start:{line:3,column:0},end:{line:5,column:3}},"1":{start:{line:7,column:15},end:{line:7,column:43}},"2":{start:{line:9,column:16},end:{line:9,column:45}},"3":{start:{line:11,column:16},end:{line:11,column:45}},"4":{start:{line:13,column:14},end:{line:13,column:33}},"5":{start:{line:15,column:0},end:{line:79,column:4}},"6":{start:{line:16,column:17},end:{line:23,column:3}},"7":{start:{line:24,column:2},end:{line:24,column:51}},"8":{start:{line:27,column:4},end:{line:29,column:5}},"9":{start:{line:28,column:6},end:{line:28,column:17}},"10":{start:{line:31,column:4},end:{line:33,column:5}},"11":{start:{line:32,column:6},end:{line:32,column:18}},"12":{start:{line:35,column:34},end:{line:35,column:48}},"13":{start:{line:37,column:4},end:{line:39,column:5}},"14":{start:{line:38,column:6},end:{line:38,column:31}},"15":{start:{line:41,column:4},end:{line:46,column:7}},"16":{start:{line:42,column:6},end:{line:45,column:9}},"17":{start:{line:43,column:8},end:{line:43,column:32}},"18":{start:{line:44,column:8},end:{line:44,column:53}},"19":{start:{line:50,column:13},end:{line:50,column:53}},"20":{start:{line:51,column:16},end:{line:51,column:24}},"21":{start:{line:52,column:17},end:{line:52,column:26}},"22":{start:{line:54,column:4},end:{line:57,column:5}},"23":{start:{line:55,column:6},end:{line:55,column:70}},"24":{start:{line:56,column:6},end:{line:56,column:13}},"25":{start:{line:59,column:15},end:{line:59,column:39}},"26":{start:{line:60,column:4},end:{line:60,column:57}},"27":{start:{line:61,column:4},end:{line:61,column:59}},"28":{start:{line:62,column:4},end:{line:62,column:44}},"29":{start:{line:63,column:4},end:{line:63,column:26}},"30":{start:{line:67,column:17},end:{line:67,column:18}},"31":{start:{line:68,column:4},end:{line:70,column:7}},"32":{start:{line:69,column:6},end:{line:69,column:22}},"33":{start:{line:71,column:4},end:{line:71,column:18}},"34":{start:{line:74,column:2},end:{line:78,column:4}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:15,column:15},end:{line:15,column:16}},loc:{start:{line:15,column:27},end:{line:79,column:1}},line:15},"1":{name:"render",decl:{start:{line:26,column:11},end:{line:26,column:17}},loc:{start:{line:26,column:33},end:{line:47,column:3}},line:26},"2":{name:"(anonymous_2)",decl:{start:{line:41,column:50},end:{line:41,column:51}},loc:{start:{line:41,column:68},end:{line:46,column:5}},line:41},"3":{name:"(anonymous_3)",decl:{start:{line:42,column:39},end:{line:42,column:40}},loc:{start:{line:42,column:52},end:{line:45,column:7}},line:42},"4":{name:"rerender",decl:{start:{line:49,column:11},end:{line:49,column:19}},loc:{start:{line:49,column:22},end:{line:64,column:3}},line:49},"5":{name:"countMarkedSquares",decl:{start:{line:66,column:11},end:{line:66,column:29}},loc:{start:{line:66,column:32},end:{line:72,column:3}},line:66},"6":{name:"(anonymous_6)",decl:{start:{line:68,column:49},end:{line:68,column:50}},loc:{start:{line:68,column:63},end:{line:70,column:5}},line:68}},branchMap:{"0":{loc:{start:{line:27,column:4},end:{line:29,column:5}},type:"if",locations:[{start:{line:27,column:4},end:{line:29,column:5}},{start:{line:27,column:4},end:{line:29,column:5}}],line:27},"1":{loc:{start:{line:31,column:4},end:{line:33,column:5}},type:"if",locations:[{start:{line:31,column:4},end:{line:33,column:5}},{start:{line:31,column:4},end:{line:33,column:5}}],line:31},"2":{loc:{start:{line:54,column:4},end:{line:57,column:5}},type:"if",locations:[{start:{line:54,column:4},end:{line:57,column:5}},{start:{line:54,column:4},end:{line:57,column:5}}],line:54},"3":{loc:{start:{line:54,column:8},end:{line:54,column:34}},type:"binary-expr",locations:[{start:{line:54,column:8},end:{line:54,column:19}},{start:{line:54,column:23},end:{line:54,column:34}}],line:54}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0]},inputSourceMap:{version:3,sources:["resources/typescript/Components/Grid.ts"],names:[],mappings:";;;;;;AAAA,IAAA,QAAA,GAAA,OAAA,CAAA,mBAAA,CAAA;;AACA,IAAA,SAAA,GAAA,OAAA,CAAA,oBAAA,CAAA;;AACA,IAAA,SAAA,GAAA,OAAA,CAAA,oBAAA,CAAA;;AACA,IAAA,OAAA,GAAA,OAAA,CAAA,UAAA,CAAA;;AAGa,OAAA,CAAA,IAAA,GAAQ,YAAA;AAEjB,MAAM,QAAQ,GAAG;AACb,IAAA,IAAI,EAAE,OADO;AAEb,IAAA,MAAM,EAAE;AACJ,MAAA,OAAO,EAAE,SADL;AAEJ,MAAA,MAAM,EAAE;AAFJ,KAFK;AAMb,IAAA,YAAY,EAAE;AAND,GAAjB;AASA,EAAA,OAAA,CAAA,OAAA,CAAQ,QAAQ,CAAC,YAAjB,EAA+B,QAA/B;;AAEA,WAAS,MAAT,CAAgB,KAAhB,EAAoC,MAApC,EAAuD;AAAvC,QAAA,KAAA,KAAA,KAAA,CAAA,EAAA;AAAA,MAAA,KAAA,GAAA,EAAA;AAAkB;;AAAE,QAAA,MAAA,KAAA,KAAA,CAAA,EAAA;AAAA,MAAA,MAAA,GAAA,EAAA;AAAmB;;AACnD,QAAM,uBAAuB,GAAG,KAAK,GAAG,MAAxC;;AAEA,SAAK,IAAI,CAAC,GAAG,CAAb,EAAgB,CAAC,IAAI,uBAArB,EAA8C,CAAC,EAA/C,EAAmD;AAC/C,MAAA,QAAA,CAAA,MAAA,CAAO,MAAP;AACH;;AAGD,IAAA,OAAA,CAAA,IAAA,CAAK,QAAQ,CAAC,MAAT,CAAgB,OAArB,EAA8B,OAA9B,CAAsC,UAAC,MAAD,EAAO;AAC7C,MAAA,MAAM,CAAC,gBAAP,CAAwB,OAAxB,EAAiC,UAAC,CAAD,EAAE;AAC/B,QAAA,QAAA,CAAA,MAAA,CAAO,IAAP,CAAY,CAAZ;AACA,QAAA,SAAA,CAAA,OAAA,CAAQ,wBAAR;AACH,OAHD;AAIH,KALG;AAMH;;AAED,WAAS,QAAT,GAAiB;AACP,QAAA,EAAA,GAAA,SAAA,CAAA,OAAA,CAAA,oBAAA,EAAA;AAAA,QAAE,KAAA,GAAA,EAAA,CAAA,KAAF;AAAA,QAAS,MAAA,GAAA,EAAA,CAAA,MAAT;;AAEN,QAAI,KAAK,IAAI,EAAT,IAAe,KAAK,IAAI,EAA5B,EAAgC;AAC5B,MAAA,KAAK,CAAC,wDAAD,CAAL;AACA;AACH;;AAED,QAAI,IAAI,GAAG,QAAQ,CAAC,eAApB;AAEA,IAAA,IAAI,CAAC,KAAL,CAAW,WAAX,CAAuB,aAAvB,EAAsC,MAAM,CAAC,KAAD,CAA5C;AACA,IAAA,IAAI,CAAC,KAAL,CAAW,WAAX,CAAuB,cAAvB,EAAuC,MAAM,CAAC,MAAD,CAA7C;AAGA,IAAA,OAAA,CAAA,CAAA,CAAE,QAAQ,CAAC,IAAX,EAAiB,SAAjB,GAA6B,EAA7B;AAEA,IAAA,MAAM,CAAC,KAAD,EAAQ,MAAR,CAAN;AACH;;AAGD,WAAS,kBAAT,GAA2B;AACvB,QAAI,MAAM,GAAG,CAAb;AACA,IAAA,OAAA,CAAA,IAAA,CAAK,QAAQ,CAAC,MAAT,CAAgB,MAArB,EAA6B,OAA7B,CAAqC,UAAC,EAAD,EAAG;AAAK,aAAA,MAAA,EAAA;AAAQ,KAArD;AAEA,WAAO,MAAP;AACH;;AAED,SAAO;AACH,IAAA,MAAM,EAAA,MADH;AAEH,IAAA,QAAQ,EAAA,QAFL;AAGH,IAAA,kBAAkB,EAAA;AAHf,GAAP;AAMH,CA9DmB,EAAP",sourcesContent:["import { Square } from 'Components/Square';\nimport { Counter } from 'Components/Counter';\nimport { Toolbox } from 'Components/Toolbox';\nimport { $, $All, onClick } from '../utils';\n\n\nexport const Grid = (() => {\n\n    const Selector = {\n        GRID: '.grid',\n        SQUARE: {\n            DEFAULT: '.square',\n            MARKED: '.square.marked'   \n        },\n        RERENDER_BTN: '#rerender-btn'\n    }\n\n    onClick(Selector.RERENDER_BTN, rerender);\n\n    function render(width: number = 32, height: number = 32) {\n        const amountOfSquaresToRender = width * height;\n\n        for (let i = 1; i <= amountOfSquaresToRender; i++) {\n            Square.create();\n        }\n\n        // Zapnij zaznaczanie po kliknieciu\n        $All(Selector.SQUARE.DEFAULT).forEach((square) => {\n        square.addEventListener('click', (e) => {\n            Square.mark(e);\n            Counter.updateMarkedSquaresValue();\n        });\n    })\n    }\n\n    function rerender() {\n        const { width, height } = Toolbox.getNewGridDimensions();\n\n        if (width >= 64 || width >= 64) { \n            alert('Nie mozna dodac wi\u0119cej niz 64! Sprobuj mniejsza liczbe');\n            return;\n        }\n\n        let root = document.documentElement;\n\n        root.style.setProperty('--gridWidth', String(width));\n        root.style.setProperty('--gridHeight', String(height));\n\n        // Clear previous grid before render()\n        $(Selector.GRID).innerHTML = '';\n\n        render(width, height);\n    }\n\n\n    function countMarkedSquares() {\n        let amount = 0;\n        $All(Selector.SQUARE.MARKED).forEach((el) => amount++);\n\n        return amount;\n    }\n\n    return {\n        render,\n        rerender,\n        countMarkedSquares\n    }\n\n})();"],sourceRoot:"/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/",file:"/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/resources/typescript/Components/Grid.ts"},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_hkmdc4np7.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var Square_1=(cov_hkmdc4np7.s[1]++,__webpack_require__(/*! Components/Square */ "./resources/typescript/Components/Square.ts"));var Counter_1=(cov_hkmdc4np7.s[2]++,__webpack_require__(/*! Components/Counter */ "./resources/typescript/Components/Counter.ts"));var Toolbox_1=(cov_hkmdc4np7.s[3]++,__webpack_require__(/*! Components/Toolbox */ "./resources/typescript/Components/Toolbox.ts"));var utils_1=(cov_hkmdc4np7.s[4]++,__webpack_require__(/*! ../utils */ "./resources/typescript/utils.ts"));cov_hkmdc4np7.s[5]++;exports.Grid=function(){cov_hkmdc4np7.f[0]++;var Selector=(cov_hkmdc4np7.s[6]++,{GRID:'.grid',SQUARE:{DEFAULT:'.square',MARKED:'.square.marked'},RERENDER_BTN:'#rerender-btn'});cov_hkmdc4np7.s[7]++;utils_1.onClick(Selector.RERENDER_BTN,rerender);function render(width,height){cov_hkmdc4np7.f[1]++;cov_hkmdc4np7.s[8]++;if(width===void 0){cov_hkmdc4np7.b[0][0]++;cov_hkmdc4np7.s[9]++;width=32;}else{cov_hkmdc4np7.b[0][1]++;}cov_hkmdc4np7.s[10]++;if(height===void 0){cov_hkmdc4np7.b[1][0]++;cov_hkmdc4np7.s[11]++;height=32;}else{cov_hkmdc4np7.b[1][1]++;}var amountOfSquaresToRender=(cov_hkmdc4np7.s[12]++,width*height);cov_hkmdc4np7.s[13]++;for(var i=1;i<=amountOfSquaresToRender;i++){cov_hkmdc4np7.s[14]++;Square_1.Square.create();}cov_hkmdc4np7.s[15]++;utils_1.$All(Selector.SQUARE.DEFAULT).forEach(function(square){cov_hkmdc4np7.f[2]++;cov_hkmdc4np7.s[16]++;square.addEventListener('click',function(e){cov_hkmdc4np7.f[3]++;cov_hkmdc4np7.s[17]++;Square_1.Square.mark(e);cov_hkmdc4np7.s[18]++;Counter_1.Counter.updateMarkedSquaresValue();});});}function rerender(){cov_hkmdc4np7.f[4]++;var _a=(cov_hkmdc4np7.s[19]++,Toolbox_1.Toolbox.getNewGridDimensions()),width=(cov_hkmdc4np7.s[20]++,_a.width),height=(cov_hkmdc4np7.s[21]++,_a.height);cov_hkmdc4np7.s[22]++;if((cov_hkmdc4np7.b[3][0]++,width>=64)||(cov_hkmdc4np7.b[3][1]++,width>=64)){cov_hkmdc4np7.b[2][0]++;cov_hkmdc4np7.s[23]++;alert('Nie mozna dodac więcej niz 64! Sprobuj mniejsza liczbe');cov_hkmdc4np7.s[24]++;return;}else{cov_hkmdc4np7.b[2][1]++;}var root=(cov_hkmdc4np7.s[25]++,document.documentElement);cov_hkmdc4np7.s[26]++;root.style.setProperty('--gridWidth',String(width));cov_hkmdc4np7.s[27]++;root.style.setProperty('--gridHeight',String(height));cov_hkmdc4np7.s[28]++;utils_1.$(Selector.GRID).innerHTML='';cov_hkmdc4np7.s[29]++;render(width,height);}function countMarkedSquares(){cov_hkmdc4np7.f[5]++;var amount=(cov_hkmdc4np7.s[30]++,0);cov_hkmdc4np7.s[31]++;utils_1.$All(Selector.SQUARE.MARKED).forEach(function(el){cov_hkmdc4np7.f[6]++;cov_hkmdc4np7.s[32]++;return amount++;});cov_hkmdc4np7.s[33]++;return amount;}cov_hkmdc4np7.s[34]++;return{render:render,rerender:rerender,countMarkedSquares:countMarkedSquares};}();

/***/ }),

/***/ "./resources/typescript/Components/Square.ts":
/*!***************************************************!*\
  !*** ./resources/typescript/Components/Square.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_24y9qc0p64=function(){var path="/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/resources/typescript/Components/Square.ts",hash="11acd1c6f52655504af9748628d56cd1ea31c55f",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/resources/typescript/Components/Square.ts",statementMap:{"0":{start:{line:3,column:0},end:{line:5,column:3}},"1":{start:{line:7,column:14},end:{line:7,column:33}},"2":{start:{line:9,column:0},end:{line:32,column:4}},"3":{start:{line:10,column:17},end:{line:12,column:3}},"4":{start:{line:15,column:17},end:{line:15,column:46}},"5":{start:{line:16,column:4},end:{line:16,column:35}},"6":{start:{line:17,column:4},end:{line:17,column:49}},"7":{start:{line:21,column:4},end:{line:25,column:5}},"8":{start:{line:22,column:6},end:{line:22,column:42}},"9":{start:{line:24,column:6},end:{line:24,column:39}},"10":{start:{line:28,column:2},end:{line:31,column:4}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:9,column:17},end:{line:9,column:18}},loc:{start:{line:9,column:29},end:{line:32,column:1}},line:9},"1":{name:"create",decl:{start:{line:14,column:11},end:{line:14,column:17}},loc:{start:{line:14,column:20},end:{line:18,column:3}},line:14},"2":{name:"mark",decl:{start:{line:20,column:11},end:{line:20,column:15}},loc:{start:{line:20,column:19},end:{line:26,column:3}},line:20}},branchMap:{"0":{loc:{start:{line:21,column:4},end:{line:25,column:5}},type:"if",locations:[{start:{line:21,column:4},end:{line:25,column:5}},{start:{line:21,column:4},end:{line:25,column:5}}],line:21}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},f:{"0":0,"1":0,"2":0},b:{"0":[0,0]},inputSourceMap:{version:3,sources:["resources/typescript/Components/Square.ts"],names:[],mappings:";;;;;;AAAA,IAAA,OAAA,GAAA,OAAA,CAAA,UAAA,CAAA;;AAEa,OAAA,CAAA,MAAA,GAAU,YAAA;AAEnB,MAAM,QAAQ,GAAG;AACb,IAAA,IAAI,EAAE;AADO,GAAjB;;AAMA,WAAS,MAAT,GAAe;AACX,QAAM,MAAM,GAAG,QAAQ,CAAC,aAAT,CAAuB,KAAvB,CAAf;AACA,IAAA,MAAM,CAAC,SAAP,CAAiB,GAAjB,CAAqB,QAArB;AAEA,IAAA,OAAA,CAAA,CAAA,CAAE,QAAQ,CAAC,IAAX,EAAiB,WAAjB,CAA6B,MAA7B;AACH;;AAED,WAAS,IAAT,CAAc,CAAd,EAAe;AACX,QAAI,CAAC,CAAC,MAAF,CAAS,SAAT,CAAmB,QAAnB,CAA4B,QAA5B,CAAJ,EAA2C;AACvC,MAAA,CAAC,CAAC,MAAF,CAAS,SAAT,CAAmB,MAAnB,CAA0B,QAA1B;AACH,KAFD,MAEO;AACH,MAAA,CAAC,CAAC,MAAF,CAAS,SAAT,CAAmB,GAAnB,CAAuB,QAAvB;AACH;AACJ;;AAED,SAAO;AACH,IAAA,MAAM,EAAA,MADH;AAEH,IAAA,IAAI,EAAA;AAFD,GAAP;AAMH,CA7BqB,EAAT",sourcesContent:["import { onClick, $ } from '../utils';\n\nexport const Square = (() => {\n\n    const Selector = {\n        GRID: '.grid'\n    }\n\n    // onClick();\n\n    function create() {\n        const square = document.createElement('div');\n        square.classList.add('square');\n\n        $(Selector.GRID).appendChild(square);\n    }\n\n    function mark(e) {\n        if (e.target.classList.contains('marked')) {\n            e.target.classList.remove('marked');\n        } else {\n            e.target.classList.add('marked');\n        }\n    }\n\n    return {\n        create,\n        mark\n    }\n\n\n})();"],sourceRoot:"/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/",file:"/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/resources/typescript/Components/Square.ts"},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_24y9qc0p64.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var utils_1=(cov_24y9qc0p64.s[1]++,__webpack_require__(/*! ../utils */ "./resources/typescript/utils.ts"));cov_24y9qc0p64.s[2]++;exports.Square=function(){cov_24y9qc0p64.f[0]++;var Selector=(cov_24y9qc0p64.s[3]++,{GRID:'.grid'});function create(){cov_24y9qc0p64.f[1]++;var square=(cov_24y9qc0p64.s[4]++,document.createElement('div'));cov_24y9qc0p64.s[5]++;square.classList.add('square');cov_24y9qc0p64.s[6]++;utils_1.$(Selector.GRID).appendChild(square);}function mark(e){cov_24y9qc0p64.f[2]++;cov_24y9qc0p64.s[7]++;if(e.target.classList.contains('marked')){cov_24y9qc0p64.b[0][0]++;cov_24y9qc0p64.s[8]++;e.target.classList.remove('marked');}else{cov_24y9qc0p64.b[0][1]++;cov_24y9qc0p64.s[9]++;e.target.classList.add('marked');}}cov_24y9qc0p64.s[10]++;return{create:create,mark:mark};}();

/***/ }),

/***/ "./resources/typescript/Components/Toolbox.ts":
/*!****************************************************!*\
  !*** ./resources/typescript/Components/Toolbox.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_1wptzs3dzt=function(){var path="/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/resources/typescript/Components/Toolbox.ts",hash="8f46299a1ced6930baed00e893ecff1cc0ed4ae6",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/resources/typescript/Components/Toolbox.ts",statementMap:{"0":{start:{line:3,column:0},end:{line:5,column:3}},"1":{start:{line:7,column:14},end:{line:7,column:33}},"2":{start:{line:9,column:0},end:{line:25,column:4}},"3":{start:{line:10,column:17},end:{line:13,column:3}},"4":{start:{line:16,column:4},end:{line:19,column:6}},"5":{start:{line:22,column:2},end:{line:24,column:4}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:9,column:18},end:{line:9,column:19}},loc:{start:{line:9,column:30},end:{line:25,column:1}},line:9},"1":{name:"getNewGridDimensions",decl:{start:{line:15,column:11},end:{line:15,column:31}},loc:{start:{line:15,column:34},end:{line:20,column:3}},line:15}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},f:{"0":0,"1":0},b:{},inputSourceMap:{version:3,sources:["resources/typescript/Components/Toolbox.ts"],names:[],mappings:";;;;;;AAAA,IAAA,OAAA,GAAA,OAAA,CAAA,UAAA,CAAA;;AAEa,OAAA,CAAA,OAAA,GAAW,YAAA;AAEpB,MAAM,QAAQ,GAAG;AACb,IAAA,WAAW,EAAE,aADA;AAEb,IAAA,YAAY,EAAE;AAFD,GAAjB;;AAQA,WAAS,oBAAT,GAA6B;AACzB,WAAO;AACH,MAAA,KAAK,EAAE,QAAQ,CACV,OAAA,CAAA,CAAA,CAAE,QAAQ,CAAC,WAAX,EAA6C,KADnC,CADZ;AAIH,MAAA,MAAM,EAAE,QAAQ,CACX,OAAA,CAAA,CAAA,CAAE,QAAQ,CAAC,YAAX,EAA8C,KADnC;AAJb,KAAP;AAQH;;AAED,SAAO;AACH,IAAA,oBAAoB,EAAA;AADjB,GAAP;AAIH,CAzBsB,EAAV",sourcesContent:["import { $ } from '../utils';\n\nexport const Toolbox = (() => {\n\n    const Selector = {\n        INPUT_WIDTH: '#grid-width',\n        INPUT_HEIGHT: '#grid-height',\n\n    }\n\n    // onClick();\n\n    function getNewGridDimensions() {\n        return {\n            width: parseInt(\n                ($(Selector.INPUT_WIDTH) as HTMLInputElement).value\n            ),\n            height: parseInt(\n                ($(Selector.INPUT_HEIGHT) as HTMLInputElement).value\n            )\n        }\n    }\n\n    return {\n        getNewGridDimensions\n    }\n\n})();"],sourceRoot:"/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/",file:"/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/resources/typescript/Components/Toolbox.ts"},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1wptzs3dzt.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var utils_1=(cov_1wptzs3dzt.s[1]++,__webpack_require__(/*! ../utils */ "./resources/typescript/utils.ts"));cov_1wptzs3dzt.s[2]++;exports.Toolbox=function(){cov_1wptzs3dzt.f[0]++;var Selector=(cov_1wptzs3dzt.s[3]++,{INPUT_WIDTH:'#grid-width',INPUT_HEIGHT:'#grid-height'});function getNewGridDimensions(){cov_1wptzs3dzt.f[1]++;cov_1wptzs3dzt.s[4]++;return{width:parseInt(utils_1.$(Selector.INPUT_WIDTH).value),height:parseInt(utils_1.$(Selector.INPUT_HEIGHT).value)};}cov_1wptzs3dzt.s[5]++;return{getNewGridDimensions:getNewGridDimensions};}();

/***/ }),

/***/ "./resources/typescript/main.ts":
/*!**************************************!*\
  !*** ./resources/typescript/main.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_q29yx65ny=function(){var path="/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/resources/typescript/main.ts",hash="cc8f2def8ba674d6cfe8971298cd8d4f67af90a8",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/resources/typescript/main.ts",statementMap:{"0":{start:{line:3,column:0},end:{line:5,column:3}},"1":{start:{line:7,column:13},end:{line:7,column:39}},"2":{start:{line:9,column:0},end:{line:9,column:21}}},fnMap:{},branchMap:{},s:{"0":0,"1":0,"2":0},f:{},b:{},inputSourceMap:{version:3,sources:["resources/typescript/main.ts"],names:[],mappings:";;;;;;AAAA,IAAA,MAAA,GAAA,OAAA,CAAA,iBAAA,CAAA;;AAGA,MAAA,CAAA,IAAA,CAAK,MAAL",sourcesContent:["import { Grid } from \"Components/Grid\";\n\n\nGrid.render();"],sourceRoot:"/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/",file:"/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/resources/typescript/main.ts"},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_q29yx65ny.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});var Grid_1=(cov_q29yx65ny.s[1]++,__webpack_require__(/*! Components/Grid */ "./resources/typescript/Components/Grid.ts"));cov_q29yx65ny.s[2]++;Grid_1.Grid.render();

/***/ }),

/***/ "./resources/typescript/utils.ts":
/*!***************************************!*\
  !*** ./resources/typescript/utils.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var cov_1w2wnd9xl8=function(){var path="/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/resources/typescript/utils.ts",hash="45d901c9060f6f926a22b44a55396fa3607405ff",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/resources/typescript/utils.ts",statementMap:{"0":{start:{line:3,column:0},end:{line:5,column:3}},"1":{start:{line:7,column:0},end:{line:9,column:2}},"2":{start:{line:8,column:2},end:{line:8,column:42}},"3":{start:{line:11,column:0},end:{line:13,column:2}},"4":{start:{line:12,column:2},end:{line:12,column:45}},"5":{start:{line:15,column:0},end:{line:17,column:2}},"6":{start:{line:16,column:2},end:{line:16,column:65}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:7,column:12},end:{line:7,column:13}},loc:{start:{line:7,column:32},end:{line:9,column:1}},line:7},"1":{name:"(anonymous_1)",decl:{start:{line:11,column:15},end:{line:11,column:16}},loc:{start:{line:11,column:35},end:{line:13,column:1}},line:11},"2":{name:"(anonymous_2)",decl:{start:{line:15,column:18},end:{line:15,column:19}},loc:{start:{line:15,column:48},end:{line:17,column:1}},line:15}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},f:{"0":0,"1":0,"2":0},b:{},inputSourceMap:{version:3,sources:["resources/typescript/utils.ts"],names:[],mappings:";;;;;;AACa,OAAA,CAAA,CAAA,GAAI,UAAC,QAAD,EAAiB;AAAkB,SAAA,QAAQ,CAAC,aAAT,CAAA,QAAA,CAAA;AAAgC,CAAvE;;AAEA,OAAA,CAAA,IAAA,GAAO,UAAC,QAAD,EAAiB;AAA0B,SAAA,QAAQ,CAAC,gBAAT,CAAA,QAAA,CAAA;AAAmC,CAArF;;AAEA,OAAA,CAAA,OAAA,GAAU,UAAC,QAAD,EAAmB,QAAnB,EAA2B;AAAK,SAAA,OAAA,CAAA,CAAA,CAAE,QAAF,EAAY,gBAAZ,CAA6B,OAA7B,EAAA,QAAA,CAAA;AAA+C,CAAzF",sourcesContent:["/** Important JQuery/Cheerio-like selector grabber */\nexport const $ = (selector: string): HTMLElement => document.querySelector(selector);\n/** Important JQuery/Cheerio-like selector grabber */\nexport const $All = (selector: string): NodeListOf<Element> => document.querySelectorAll(selector);\n\nexport const onClick = (selector: string, callback) => $(selector).addEventListener('click', callback);"],sourceRoot:"/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/",file:"/Users/kamyil/Desktop/MyProjects/MinecraftPlanner/resources/typescript/utils.ts"},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1w2wnd9xl8.s[0]++;Object.defineProperty(exports,"__esModule",{value:true});cov_1w2wnd9xl8.s[1]++;exports.$=function(selector){cov_1w2wnd9xl8.f[0]++;cov_1w2wnd9xl8.s[2]++;return document.querySelector(selector);};cov_1w2wnd9xl8.s[3]++;exports.$All=function(selector){cov_1w2wnd9xl8.f[1]++;cov_1w2wnd9xl8.s[4]++;return document.querySelectorAll(selector);};cov_1w2wnd9xl8.s[5]++;exports.onClick=function(selector,callback){cov_1w2wnd9xl8.f[2]++;cov_1w2wnd9xl8.s[6]++;return exports.$(selector).addEventListener('click',callback);};

/***/ }),

/***/ 0:
/*!***********************************************************************!*\
  !*** multi ./resources/typescript/main.ts ./resources/scss/main.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./resources/typescript/main.ts */"./resources/typescript/main.ts");
module.exports = __webpack_require__(/*! ./resources/scss/main.scss */"./resources/scss/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map