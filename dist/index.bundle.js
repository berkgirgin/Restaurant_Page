"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Libre_Baskerville/LibreBaskerville-Bold.ttf */ "./src/assets/fonts/Libre_Baskerville/LibreBaskerville-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Libre_Baskerville/LibreBaskerville-Italic.ttf */ "./src/assets/fonts/Libre_Baskerville/LibreBaskerville-Italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf */ "./src/assets/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/background_images/background_1.jpeg */ "./src/assets/images/background_images/background_1.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Libre_Baskerville\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  --header-background-color: lightslategray;\n  --gold-color: #ca8a04;\n  --gold-color-hover: #eab308;\n  --white-color: #e8e6e3;\n  --border_color_grey: #858585;\n  --border_radius: 10px;\n  --form_border: 2px var(--border_color_grey) solid;\n  font-family: \"Libre_Baskerville\", sans-serif;\n  color: var(--white-color);\n}\n\nbody {\n  background-color: lightslategray;\n  margin: 0;\n  padding: 0;\n}\n\n.first_block_main {\n  height: 100vh;\n  color: white;\n  background-color: var(--header-background-color);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.8);\n\n  /* box-shadow: inset 0 0 99999px rgba(0, 120, 255, 1); */\n}\n\n/* ****** */\n/* Header */\n/* ****** */\n\n.header {\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 2rem;\n  padding-bottom: 0;\n  font-size: 1.2rem;\n}\n\n.header_left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.header_left .restaurant_name {\n  font-family: cursive;\n  font-weight: 700;\n  font-size: 1.8rem;\n}\n\n.header img {\n  height: 4rem;\n  margin-top: -0.7rem;\n  cursor: pointer;\n}\n@keyframes tilt-n-move-shaking {\n  0% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n  25% {\n    transform: translate(5px, 5px) rotate(5deg);\n  }\n  50% {\n    transform: translate(0, 0) rotate(0eg);\n  }\n  75% {\n    transform: translate(-5px, 5px) rotate(-5deg);\n  }\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n.header img:hover {\n  height: 4rem;\n  margin-top: -0.7rem;\n  animation: tilt-n-move-shaking 0.25s infinite;\n}\n\n.header_right a {\n  margin: 0 1rem;\n  color: var(--gold-color);\n}\n.header_right a:hover {\n  transform: scale(1.1);\n  color: var(--gold-color-hover);\n}\n\n/* first block content */\n\n.first_block_content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  gap: 1rem;\n}\n\n.first_block_content .restaurant_slogan {\n  font-size: 2.5rem;\n}\n.first_block_content img {\n  width: 400px;\n  margin-right: -120px;\n}\n\n.first_block_content button {\n  cursor: pointer;\n  color: var(--font_color_white);\n  background-color: var(--gold-color);\n  border-radius: var(--border_radius);\n  font-size: 1.2rem;\n  text-align: center;\n  padding: 0.5rem 1rem;\n  border: none;\n  box-shadow: inset 0 0 14px black;\n}\n.first_block_content button:hover {\n  transform: scale(1.1);\n  background-color: var(--gold-color-hover);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,gCAAgC;EAChC;;2CAEuE;EACvE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,yCAAyC;EACzC,qBAAqB;EACrB,2BAA2B;EAC3B,sBAAsB;EACtB,4BAA4B;EAC5B,qBAAqB;EACrB,iDAAiD;EACjD,4CAA4C;EAC5C,yBAAyB;AAC3B;;AAEA;EACE,gCAAgC;EAChC,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,gDAAgD;EAChD,aAAa;EACb,sBAAsB;EACtB,8BAA8B;;EAE9B,4BAA4B;EAC5B,2BAA2B;EAC3B,sBAAsB;EACtB,yDAA2E;EAC3E,iDAAiD;;EAEjD,wDAAwD;AAC1D;;AAEA,WAAW;AACX,WAAW;AACX,WAAW;;AAEX;EACE,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE;IACE,uCAAuC;EACzC;EACA;IACE,2CAA2C;EAC7C;EACA;IACE,sCAAsC;EACxC;EACA;IACE,6CAA6C;EAC/C;EACA;IACE,uCAAuC;EACzC;AACF;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,6CAA6C;AAC/C;;AAEA;EACE,cAAc;EACd,wBAAwB;AAC1B;AACA;EACE,qBAAqB;EACrB,8BAA8B;AAChC;;AAEA,wBAAwB;;AAExB;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;;EAEnB,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,8BAA8B;EAC9B,mCAAmC;EACnC,mCAAmC;EACnC,iBAAiB;EACjB,kBAAkB;EAClB,oBAAoB;EACpB,YAAY;EACZ,gCAAgC;AAClC;AACA;EACE,qBAAqB;EACrB,yCAAyC;AAC3C","sourcesContent":["@font-face {\n  font-family: \"Libre_Baskerville\";\n  src: url(\"../assets/fonts/Libre_Baskerville/LibreBaskerville-Bold.ttf\"),\n    url(\"../assets/fonts/Libre_Baskerville/LibreBaskerville-Italic.ttf\"),\n    url(\"../assets/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  --header-background-color: lightslategray;\n  --gold-color: #ca8a04;\n  --gold-color-hover: #eab308;\n  --white-color: #e8e6e3;\n  --border_color_grey: #858585;\n  --border_radius: 10px;\n  --form_border: 2px var(--border_color_grey) solid;\n  font-family: \"Libre_Baskerville\", sans-serif;\n  color: var(--white-color);\n}\n\nbody {\n  background-color: lightslategray;\n  margin: 0;\n  padding: 0;\n}\n\n.first_block_main {\n  height: 100vh;\n  color: white;\n  background-color: var(--header-background-color);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-image: url(../assets/images/background_images/background_1.jpeg);\n  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.8);\n\n  /* box-shadow: inset 0 0 99999px rgba(0, 120, 255, 1); */\n}\n\n/* ****** */\n/* Header */\n/* ****** */\n\n.header {\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 2rem;\n  padding-bottom: 0;\n  font-size: 1.2rem;\n}\n\n.header_left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.header_left .restaurant_name {\n  font-family: cursive;\n  font-weight: 700;\n  font-size: 1.8rem;\n}\n\n.header img {\n  height: 4rem;\n  margin-top: -0.7rem;\n  cursor: pointer;\n}\n@keyframes tilt-n-move-shaking {\n  0% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n  25% {\n    transform: translate(5px, 5px) rotate(5deg);\n  }\n  50% {\n    transform: translate(0, 0) rotate(0eg);\n  }\n  75% {\n    transform: translate(-5px, 5px) rotate(-5deg);\n  }\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n.header img:hover {\n  height: 4rem;\n  margin-top: -0.7rem;\n  animation: tilt-n-move-shaking 0.25s infinite;\n}\n\n.header_right a {\n  margin: 0 1rem;\n  color: var(--gold-color);\n}\n.header_right a:hover {\n  transform: scale(1.1);\n  color: var(--gold-color-hover);\n}\n\n/* first block content */\n\n.first_block_content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  gap: 1rem;\n}\n\n.first_block_content .restaurant_slogan {\n  font-size: 2.5rem;\n}\n.first_block_content img {\n  width: 400px;\n  margin-right: -120px;\n}\n\n.first_block_content button {\n  cursor: pointer;\n  color: var(--font_color_white);\n  background-color: var(--gold-color);\n  border-radius: var(--border_radius);\n  font-size: 1.2rem;\n  text-align: center;\n  padding: 0.5rem 1rem;\n  border: none;\n  box-shadow: inset 0 0 14px black;\n}\n.first_block_content button:hover {\n  transform: scale(1.1);\n  background-color: var(--gold-color-hover);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "createHomePage": () => (/* binding */ createHomePage)
/* harmony export */ });
/* harmony import */ var _assets_images_fes_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/fes_logo.png */ "./src/assets/images/fes_logo.png");
/* harmony import */ var _assets_images_turkish_chef_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/turkish_chef.png */ "./src/assets/images/turkish_chef.png");
/* harmony import */ var _assets_images_background_images_background_1_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/background_images/background_1.jpeg */ "./src/assets/images/background_images/background_1.jpeg");
/* harmony import */ var _assets_images_background_images_background_2_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/background_images/background_2.jpeg */ "./src/assets/images/background_images/background_2.jpeg");
/* harmony import */ var _assets_images_background_images_background_3_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/background_images/background_3.jpeg */ "./src/assets/images/background_images/background_3.jpeg");
/* harmony import */ var _assets_images_background_images_background_4_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/background_images/background_4.jpeg */ "./src/assets/images/background_images/background_4.jpeg");
/* harmony import */ var _assets_images_background_images_background_5_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/background_images/background_5.jpeg */ "./src/assets/images/background_images/background_5.jpeg");








console.log("hallo from home.js");

const mainContainer = document.querySelector("body").firstElementChild;

function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");
  mainContainer.appendChild(header);

  (function createHeaderLeft() {
    const header_left = document.createElement("div");
    header_left.classList.add("header_left");
    header.appendChild(header_left);

    const img = document.createElement("img");
    img.classList.add(".header_logo");
    img.setAttribute("src", _assets_images_fes_logo_png__WEBPACK_IMPORTED_MODULE_0__);
    img.setAttribute("alt", "header logo");
    header_left.appendChild(img);

    img.addEventListener("click", () => {
      location.href = "./index.html";
    });

    const restaurantName = document.createElement("div");
    restaurantName.classList.add("restaurant_name");
    restaurantName.innerHTML = "PASHA DONER ";
    header_left.appendChild(restaurantName);
  })();

  (function createHeaderRigth() {
    const header_right = document.createElement("div");
    header_right.classList.add("header_right");
    header.appendChild(header_right);

    const link_1 = document.createElement("a");
    link_1.innerHTML = "Home";
    link_1.setAttribute("href", "./index.html");
    header_right.appendChild(link_1);

    const link_2 = document.createElement("a");
    link_2.innerHTML = "Menu";
    link_2.setAttribute("href", "./menu.html");
    header_right.appendChild(link_2);

    const link_3 = document.createElement("a");
    link_3.innerHTML = "Contact";
    link_3.setAttribute("href", "./contact.html");
    header_right.appendChild(link_3);
  })();
}

function createContentBlock() {
  const contentBlock = document.createElement("div");
  contentBlock.classList.add("first_block_content");
  mainContainer.appendChild(contentBlock);

  const img = document.createElement("img");
  img.setAttribute("src", _assets_images_turkish_chef_png__WEBPACK_IMPORTED_MODULE_1__);
  img.setAttribute("alt", "restaurant logo");
  contentBlock.appendChild(img);

  const restaurantSlogan = document.createElement("div");
  restaurantSlogan.classList.add("restaurant_slogan");
  restaurantSlogan.innerHTML = "Best Turkish Food in Town";
  contentBlock.appendChild(restaurantSlogan);

  const button = document.createElement("button");
  button.innerHTML = "Check our selection!";
  contentBlock.appendChild(button);

  button.addEventListener("click", () => {
    location.href = "./menu.html";
  });
}

function changeImageAndMessage() {
  const backgroundElement = document.querySelector(".first_block_main");
  const restaurantSlogan = document.querySelector(".restaurant_slogan");

  const restaurantSloganTexts = {
    text_1: "Best Turkish Food in Town",
    text_2: "Authentic Sauces",
    text_3: "No addition, only Meat",
    text_4: "Elite Ambiance",
    text_5: "Daily Fresh Salad",
  };

  let number = 2;

  function changeFunction() {
    const myBackgrounds = {
      myBackground1: _assets_images_background_images_background_1_jpeg__WEBPACK_IMPORTED_MODULE_2__,
      myBackground2: _assets_images_background_images_background_2_jpeg__WEBPACK_IMPORTED_MODULE_3__,
      myBackground3: _assets_images_background_images_background_3_jpeg__WEBPACK_IMPORTED_MODULE_4__,
      myBackground4: _assets_images_background_images_background_4_jpeg__WEBPACK_IMPORTED_MODULE_5__,
      myBackground5: _assets_images_background_images_background_5_jpeg__WEBPACK_IMPORTED_MODULE_6__,
    };

    restaurantSlogan.textContent = "";
    restaurantSlogan.style.opacity = "0";
    restaurantSlogan.style.transition = "0ms";

    let selectedText = `text_${number}`;
    restaurantSlogan.textContent = restaurantSloganTexts[selectedText];
    setTimeout(() => {
      restaurantSlogan.style.transition = "2000ms";
      restaurantSlogan.style.opacity = "1";
    }, 2);

    backgroundElement.style.transition = "1200ms";
    let selectedBackground = myBackgrounds[`myBackground${number}`];
    backgroundElement.style.backgroundImage = `url(${selectedBackground})`;

    number++;
    if (number > 5) {
      number = 1;
    }
  }

  setInterval(() => {
    changeFunction();
  }, 7000);
}

function createHomePage() {
  createHeader();
  createContentBlock();
  changeImageAndMessage();
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");



(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();


/***/ }),

/***/ "./src/assets/fonts/Libre_Baskerville/LibreBaskerville-Bold.ttf":
/*!**********************************************************************!*\
  !*** ./src/assets/fonts/Libre_Baskerville/LibreBaskerville-Bold.ttf ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e5f70731aeed7c6e895.ttf";

/***/ }),

/***/ "./src/assets/fonts/Libre_Baskerville/LibreBaskerville-Italic.ttf":
/*!************************************************************************!*\
  !*** ./src/assets/fonts/Libre_Baskerville/LibreBaskerville-Italic.ttf ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cbbed9ea170d3b9e426.ttf";

/***/ }),

/***/ "./src/assets/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf":
/*!*************************************************************************!*\
  !*** ./src/assets/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "715e9cea90f54d5a4093.ttf";

/***/ }),

/***/ "./src/assets/images/background_images/background_1.jpeg":
/*!***************************************************************!*\
  !*** ./src/assets/images/background_images/background_1.jpeg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "619109f01fd7afa75fe6.jpeg";

/***/ }),

/***/ "./src/assets/images/background_images/background_2.jpeg":
/*!***************************************************************!*\
  !*** ./src/assets/images/background_images/background_2.jpeg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc4b744c2e00fbd357b3.jpeg";

/***/ }),

/***/ "./src/assets/images/background_images/background_3.jpeg":
/*!***************************************************************!*\
  !*** ./src/assets/images/background_images/background_3.jpeg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0feb547f451b25d059f5.jpeg";

/***/ }),

/***/ "./src/assets/images/background_images/background_4.jpeg":
/*!***************************************************************!*\
  !*** ./src/assets/images/background_images/background_4.jpeg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13723df81bbeabb7fa81.jpeg";

/***/ }),

/***/ "./src/assets/images/background_images/background_5.jpeg":
/*!***************************************************************!*\
  !*** ./src/assets/images/background_images/background_5.jpeg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1108aee95b577c2e51f8.jpeg";

/***/ }),

/***/ "./src/assets/images/fes_logo.png":
/*!****************************************!*\
  !*** ./src/assets/images/fes_logo.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82c8a5b37667957c409d.png";

/***/ }),

/***/ "./src/assets/images/turkish_chef.png":
/*!********************************************!*\
  !*** ./src/assets/images/turkish_chef.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b36d58fe601cc401c98.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXFCLCtFQUFZO0FBQ2pDLHFCQUFxQiwrRUFBWTtBQUNqQyxxQkFBcUIsK0VBQVk7QUFDakMscUJBQXFCLCtFQUFZO0FBQ2pDLHFCQUFxQiwrRUFBWTtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLE9BQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsMERBQTBELE9BQU87QUFDakUscURBQXFELG1CQUFtQjs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekkyQztBQUNkOztBQUU3Qix3REFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9MaWJyZV9CYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL0xpYnJlX0Jhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGUtSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9MaWJyZV9CYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kX2ltYWdlcy9iYWNrZ3JvdW5kXzEuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMaWJyZV9CYXNrZXJ2aWxsZVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIiksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIiksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcXG4gIC0tZ29sZC1jb2xvcjogI2NhOGEwNDtcXG4gIC0tZ29sZC1jb2xvci1ob3ZlcjogI2VhYjMwODtcXG4gIC0td2hpdGUtY29sb3I6ICNlOGU2ZTM7XFxuICAtLWJvcmRlcl9jb2xvcl9ncmV5OiAjODU4NTg1O1xcbiAgLS1ib3JkZXJfcmFkaXVzOiAxMHB4O1xcbiAgLS1mb3JtX2JvcmRlcjogMnB4IHZhcigtLWJvcmRlcl9jb2xvcl9ncmV5KSBzb2xpZDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGlicmVfQmFza2VydmlsbGVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5maXJzdF9ibG9ja19tYWluIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDEwMDBweCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuXFxuICAvKiBib3gtc2hhZG93OiBpbnNldCAwIDAgOTk5OTlweCByZ2JhKDAsIDEyMCwgMjU1LCAxKTsgKi9cXG59XFxuXFxuLyogKioqKioqICovXFxuLyogSGVhZGVyICovXFxuLyogKioqKioqICovXFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5oZWFkZXJfbGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyX2xlZnQgLnJlc3RhdXJhbnRfbmFtZSB7XFxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLmhlYWRlciBpbWcge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgbWFyZ2luLXRvcDogLTAuN3JlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuQGtleWZyYW1lcyB0aWx0LW4tbW92ZS1zaGFraW5nIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCA1cHgpIHJvdGF0ZSg1ZGVnKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgwZWcpO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgNXB4KSByb3RhdGUoLTVkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG59XFxuLmhlYWRlciBpbWc6aG92ZXIge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgbWFyZ2luLXRvcDogLTAuN3JlbTtcXG4gIGFuaW1hdGlvbjogdGlsdC1uLW1vdmUtc2hha2luZyAwLjI1cyBpbmZpbml0ZTtcXG59XFxuXFxuLmhlYWRlcl9yaWdodCBhIHtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgY29sb3I6IHZhcigtLWdvbGQtY29sb3IpO1xcbn1cXG4uaGVhZGVyX3JpZ2h0IGE6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgY29sb3I6IHZhcigtLWdvbGQtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4vKiBmaXJzdCBibG9jayBjb250ZW50ICovXFxuXFxuLmZpcnN0X2Jsb2NrX2NvbnRlbnQge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZmlyc3RfYmxvY2tfY29udGVudCAucmVzdGF1cmFudF9zbG9nYW4ge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcbi5maXJzdF9ibG9ja19jb250ZW50IGltZyB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IC0xMjBweDtcXG59XFxuXFxuLmZpcnN0X2Jsb2NrX2NvbnRlbnQgYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1mb250X2NvbG9yX3doaXRlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyX3JhZGl1cyk7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDE0cHggYmxhY2s7XFxufVxcbi5maXJzdF9ibG9ja19jb250ZW50IGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkLWNvbG9yLWhvdmVyKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0NBQWdDO0VBQ2hDOzsyQ0FFdUU7RUFDdkUsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLGlEQUFpRDtFQUNqRCw0Q0FBNEM7RUFDNUMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdEQUFnRDtFQUNoRCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4Qjs7RUFFOUIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIseURBQTJFO0VBQzNFLGlEQUFpRDs7RUFFakQsd0RBQXdEO0FBQzFEOztBQUVBLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVzs7QUFFWDtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFO0lBQ0UsdUNBQXVDO0VBQ3pDO0VBQ0E7SUFDRSwyQ0FBMkM7RUFDN0M7RUFDQTtJQUNFLHNDQUFzQztFQUN4QztFQUNBO0lBQ0UsNkNBQTZDO0VBQy9DO0VBQ0E7SUFDRSx1Q0FBdUM7RUFDekM7QUFDRjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsOEJBQThCO0FBQ2hDOztBQUVBLHdCQUF3Qjs7QUFFeEI7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLG1DQUFtQztFQUNuQyxtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLHlDQUF5QztBQUMzQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGlicmVfQmFza2VydmlsbGVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9MaWJyZV9CYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlLUJvbGQudHRmXFxcIiksXFxuICAgIHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL0xpYnJlX0Jhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGUtSXRhbGljLnR0ZlxcXCIpLFxcbiAgICB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9MaWJyZV9CYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlLVJlZ3VsYXIudHRmXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcXG4gIC0tZ29sZC1jb2xvcjogI2NhOGEwNDtcXG4gIC0tZ29sZC1jb2xvci1ob3ZlcjogI2VhYjMwODtcXG4gIC0td2hpdGUtY29sb3I6ICNlOGU2ZTM7XFxuICAtLWJvcmRlcl9jb2xvcl9ncmV5OiAjODU4NTg1O1xcbiAgLS1ib3JkZXJfcmFkaXVzOiAxMHB4O1xcbiAgLS1mb3JtX2JvcmRlcjogMnB4IHZhcigtLWJvcmRlcl9jb2xvcl9ncmV5KSBzb2xpZDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGlicmVfQmFza2VydmlsbGVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5maXJzdF9ibG9ja19tYWluIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZF9pbWFnZXMvYmFja2dyb3VuZF8xLmpwZWcpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMTAwMHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcXG5cXG4gIC8qIGJveC1zaGFkb3c6IGluc2V0IDAgMCA5OTk5OXB4IHJnYmEoMCwgMTIwLCAyNTUsIDEpOyAqL1xcbn1cXG5cXG4vKiAqKioqKiogKi9cXG4vKiBIZWFkZXIgKi9cXG4vKiAqKioqKiogKi9cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmhlYWRlcl9sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXJfbGVmdCAucmVzdGF1cmFudF9uYW1lIHtcXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uaGVhZGVyIGltZyB7XFxuICBoZWlnaHQ6IDRyZW07XFxuICBtYXJnaW4tdG9wOiAtMC43cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5Aa2V5ZnJhbWVzIHRpbHQtbi1tb3ZlLXNoYWtpbmcge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAyNSUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIDVweCkgcm90YXRlKDVkZWcpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDBlZyk7XFxuICB9XFxuICA3NSUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCA1cHgpIHJvdGF0ZSgtNWRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDBkZWcpO1xcbiAgfVxcbn1cXG4uaGVhZGVyIGltZzpob3ZlciB7XFxuICBoZWlnaHQ6IDRyZW07XFxuICBtYXJnaW4tdG9wOiAtMC43cmVtO1xcbiAgYW5pbWF0aW9uOiB0aWx0LW4tbW92ZS1zaGFraW5nIDAuMjVzIGluZmluaXRlO1xcbn1cXG5cXG4uaGVhZGVyX3JpZ2h0IGEge1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBjb2xvcjogdmFyKC0tZ29sZC1jb2xvcik7XFxufVxcbi5oZWFkZXJfcmlnaHQgYTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBjb2xvcjogdmFyKC0tZ29sZC1jb2xvci1ob3Zlcik7XFxufVxcblxcbi8qIGZpcnN0IGJsb2NrIGNvbnRlbnQgKi9cXG5cXG4uZmlyc3RfYmxvY2tfY29udGVudCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5maXJzdF9ibG9ja19jb250ZW50IC5yZXN0YXVyYW50X3Nsb2dhbiB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuLmZpcnN0X2Jsb2NrX2NvbnRlbnQgaW1nIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIG1hcmdpbi1yaWdodDogLTEyMHB4O1xcbn1cXG5cXG4uZmlyc3RfYmxvY2tfY29udGVudCBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHZhcigtLWZvbnRfY29sb3Jfd2hpdGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJfcmFkaXVzKTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTRweCBibGFjaztcXG59XFxuLmZpcnN0X2Jsb2NrX2NvbnRlbnQgYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQtY29sb3ItaG92ZXIpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZmVzX2xvZ28gZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9mZXNfbG9nby5wbmdcIjtcbmltcG9ydCB0dXJraXNoX2NoZWYgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy90dXJraXNoX2NoZWYucG5nXCI7XG5pbXBvcnQgYmFja2dyb3VuZF8xIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZF9pbWFnZXMvYmFja2dyb3VuZF8xLmpwZWdcIjtcbmltcG9ydCBiYWNrZ3JvdW5kXzIgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kX2ltYWdlcy9iYWNrZ3JvdW5kXzIuanBlZ1wiO1xuaW1wb3J0IGJhY2tncm91bmRfMyBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRfaW1hZ2VzL2JhY2tncm91bmRfMy5qcGVnXCI7XG5pbXBvcnQgYmFja2dyb3VuZF80IGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZF9pbWFnZXMvYmFja2dyb3VuZF80LmpwZWdcIjtcbmltcG9ydCBiYWNrZ3JvdW5kXzUgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kX2ltYWdlcy9iYWNrZ3JvdW5kXzUuanBlZ1wiO1xuXG5jb25zb2xlLmxvZyhcImhhbGxvIGZyb20gaG9tZS5qc1wiKTtcblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmZpcnN0RWxlbWVudENoaWxkO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIChmdW5jdGlvbiBjcmVhdGVIZWFkZXJMZWZ0KCkge1xuICAgIGNvbnN0IGhlYWRlcl9sZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfbGVmdC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX2xlZnRcIik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9sZWZ0KTtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoXCIuaGVhZGVyX2xvZ29cIik7XG4gICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBmZXNfbG9nbyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImhlYWRlciBsb2dvXCIpO1xuICAgIGhlYWRlcl9sZWZ0LmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSBcIi4vaW5kZXguaHRtbFwiO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50X25hbWVcIik7XG4gICAgcmVzdGF1cmFudE5hbWUuaW5uZXJIVE1MID0gXCJQQVNIQSBET05FUiBcIjtcbiAgICBoZWFkZXJfbGVmdC5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG4gIH0pKCk7XG5cbiAgKGZ1bmN0aW9uIGNyZWF0ZUhlYWRlclJpZ3RoKCkge1xuICAgIGNvbnN0IGhlYWRlcl9yaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyX3JpZ2h0LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfcmlnaHRcIik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9yaWdodCk7XG5cbiAgICBjb25zdCBsaW5rXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaW5rXzEuaW5uZXJIVE1MID0gXCJIb21lXCI7XG4gICAgbGlua18xLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIuL2luZGV4Lmh0bWxcIik7XG4gICAgaGVhZGVyX3JpZ2h0LmFwcGVuZENoaWxkKGxpbmtfMSk7XG5cbiAgICBjb25zdCBsaW5rXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaW5rXzIuaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gICAgbGlua18yLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIuL21lbnUuaHRtbFwiKTtcbiAgICBoZWFkZXJfcmlnaHQuYXBwZW5kQ2hpbGQobGlua18yKTtcblxuICAgIGNvbnN0IGxpbmtfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmtfMy5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcbiAgICBsaW5rXzMuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIi4vY29udGFjdC5odG1sXCIpO1xuICAgIGhlYWRlcl9yaWdodC5hcHBlbmRDaGlsZChsaW5rXzMpO1xuICB9KSgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50QmxvY2soKSB7XG4gIGNvbnN0IGNvbnRlbnRCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnRCbG9jay5jbGFzc0xpc3QuYWRkKFwiZmlyc3RfYmxvY2tfY29udGVudFwiKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50QmxvY2spO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdHVya2lzaF9jaGVmKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcInJlc3RhdXJhbnQgbG9nb1wiKTtcbiAgY29udGVudEJsb2NrLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgY29uc3QgcmVzdGF1cmFudFNsb2dhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJlc3RhdXJhbnRTbG9nYW4uY2xhc3NMaXN0LmFkZChcInJlc3RhdXJhbnRfc2xvZ2FuXCIpO1xuICByZXN0YXVyYW50U2xvZ2FuLmlubmVySFRNTCA9IFwiQmVzdCBUdXJraXNoIEZvb2QgaW4gVG93blwiO1xuICBjb250ZW50QmxvY2suYXBwZW5kQ2hpbGQocmVzdGF1cmFudFNsb2dhbik7XG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLmlubmVySFRNTCA9IFwiQ2hlY2sgb3VyIHNlbGVjdGlvbiFcIjtcbiAgY29udGVudEJsb2NrLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9jYXRpb24uaHJlZiA9IFwiLi9tZW51Lmh0bWxcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUltYWdlQW5kTWVzc2FnZSgpIHtcbiAgY29uc3QgYmFja2dyb3VuZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpcnN0X2Jsb2NrX21haW5cIik7XG4gIGNvbnN0IHJlc3RhdXJhbnRTbG9nYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRfc2xvZ2FuXCIpO1xuXG4gIGNvbnN0IHJlc3RhdXJhbnRTbG9nYW5UZXh0cyA9IHtcbiAgICB0ZXh0XzE6IFwiQmVzdCBUdXJraXNoIEZvb2QgaW4gVG93blwiLFxuICAgIHRleHRfMjogXCJBdXRoZW50aWMgU2F1Y2VzXCIsXG4gICAgdGV4dF8zOiBcIk5vIGFkZGl0aW9uLCBvbmx5IE1lYXRcIixcbiAgICB0ZXh0XzQ6IFwiRWxpdGUgQW1iaWFuY2VcIixcbiAgICB0ZXh0XzU6IFwiRGFpbHkgRnJlc2ggU2FsYWRcIixcbiAgfTtcblxuICBsZXQgbnVtYmVyID0gMjtcblxuICBmdW5jdGlvbiBjaGFuZ2VGdW5jdGlvbigpIHtcbiAgICBjb25zdCBteUJhY2tncm91bmRzID0ge1xuICAgICAgbXlCYWNrZ3JvdW5kMTogYmFja2dyb3VuZF8xLFxuICAgICAgbXlCYWNrZ3JvdW5kMjogYmFja2dyb3VuZF8yLFxuICAgICAgbXlCYWNrZ3JvdW5kMzogYmFja2dyb3VuZF8zLFxuICAgICAgbXlCYWNrZ3JvdW5kNDogYmFja2dyb3VuZF80LFxuICAgICAgbXlCYWNrZ3JvdW5kNTogYmFja2dyb3VuZF81LFxuICAgIH07XG5cbiAgICByZXN0YXVyYW50U2xvZ2FuLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICByZXN0YXVyYW50U2xvZ2FuLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICByZXN0YXVyYW50U2xvZ2FuLnN0eWxlLnRyYW5zaXRpb24gPSBcIjBtc1wiO1xuXG4gICAgbGV0IHNlbGVjdGVkVGV4dCA9IGB0ZXh0XyR7bnVtYmVyfWA7XG4gICAgcmVzdGF1cmFudFNsb2dhbi50ZXh0Q29udGVudCA9IHJlc3RhdXJhbnRTbG9nYW5UZXh0c1tzZWxlY3RlZFRleHRdO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVzdGF1cmFudFNsb2dhbi5zdHlsZS50cmFuc2l0aW9uID0gXCIyMDAwbXNcIjtcbiAgICAgIHJlc3RhdXJhbnRTbG9nYW4uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgIH0sIDIpO1xuXG4gICAgYmFja2dyb3VuZEVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwiMTIwMG1zXCI7XG4gICAgbGV0IHNlbGVjdGVkQmFja2dyb3VuZCA9IG15QmFja2dyb3VuZHNbYG15QmFja2dyb3VuZCR7bnVtYmVyfWBdO1xuICAgIGJhY2tncm91bmRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzZWxlY3RlZEJhY2tncm91bmR9KWA7XG5cbiAgICBudW1iZXIrKztcbiAgICBpZiAobnVtYmVyID4gNSkge1xuICAgICAgbnVtYmVyID0gMTtcbiAgICB9XG4gIH1cblxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgY2hhbmdlRnVuY3Rpb24oKTtcbiAgfSwgNzAwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcbiAgY3JlYXRlSGVhZGVyKCk7XG4gIGNyZWF0ZUNvbnRlbnRCbG9jaygpO1xuICBjaGFuZ2VJbWFnZUFuZE1lc3NhZ2UoKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGVzLmNzc1wiO1xuXG5jcmVhdGVIb21lUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9