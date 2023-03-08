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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Libre_Baskerville\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  --header-background-color: lightslategray;\n  --gold-color: #ca8a04;\n  --gold-color-hover: #eab308;\n  --white-color: #e8e6e3;\n  --border_color_grey: #858585;\n  --border_radius: 10px;\n  --form_border: 2px var(--border_color_grey) solid;\n  --footer-height: 1.8rem;\n  font-family: \"Libre_Baskerville\", sans-serif;\n  color: var(--white-color);\n}\n\nbody {\n  background-color: lightslategray;\n  margin: 0;\n  padding: 0;\n}\n\n.first_block_main {\n  min-height: calc(100vh + var(--footer-height));\n  color: white;\n  background-color: var(--header-background-color);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.8);\n\n  /* box-shadow: inset 0 0 99999px rgba(0, 120, 255, 1); */\n}\n\n/* ****** */\n/* Header */\n/* ****** */\n\n.header {\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 2rem;\n  padding-bottom: 0;\n  font-size: 1.2rem;\n}\n\n.header_left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.header_left .restaurant_name {\n  font-family: cursive;\n  font-weight: 700;\n  font-size: 1.8rem;\n}\n\n.header img {\n  height: 4rem;\n  margin-top: -0.7rem;\n  cursor: pointer;\n}\n@keyframes tilt-n-move-shaking {\n  0% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n  25% {\n    transform: translate(5px, 5px) rotate(5deg);\n  }\n  50% {\n    transform: translate(0, 0) rotate(0eg);\n  }\n  75% {\n    transform: translate(-5px, 5px) rotate(-5deg);\n  }\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n.header img:hover {\n  height: 4rem;\n  margin-top: -0.7rem;\n  animation: tilt-n-move-shaking 0.25s infinite;\n}\n\n.header_right a {\n  margin: 0 1rem;\n  color: var(--gold-color);\n}\n.header_right a:hover {\n  transform: scale(1.1);\n  color: var(--gold-color-hover);\n}\n\n/* first block content */\n\n.first_block_content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  gap: 1rem;\n}\n\n.first_block_content .restaurant_slogan {\n  font-size: 2.5rem;\n}\n.first_block_content img {\n  width: 400px;\n  margin-right: -120px;\n}\n\n.first_block_content button {\n  cursor: pointer;\n  color: var(--font_color_white);\n  background-color: var(--gold-color);\n  border-radius: var(--border_radius);\n  font-size: 1.2rem;\n  text-align: center;\n  padding: 0.5rem 1rem;\n  border: none;\n  box-shadow: inset 0 0 14px black;\n}\n.first_block_content button:hover {\n  transform: scale(1.1);\n  background-color: var(--gold-color-hover);\n}\n\n\n/* footer */\n\nfooter {\n  background-color: rgba(93, 21, 21, 0.9);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.8rem;\n  height: var(--footer-height);\n\n  margin-top: auto;\n\n}\n\nfooter img {\n  height: var(--footer-height);\n  transform: scale(1.2);\n\n}\n\nfooter img:hover {\n  transform: scale(1.3);\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,gCAAgC;EAChC;;2CAEuE;EACvE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,yCAAyC;EACzC,qBAAqB;EACrB,2BAA2B;EAC3B,sBAAsB;EACtB,4BAA4B;EAC5B,qBAAqB;EACrB,iDAAiD;EACjD,uBAAuB;EACvB,4CAA4C;EAC5C,yBAAyB;AAC3B;;AAEA;EACE,gCAAgC;EAChC,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,8CAA8C;EAC9C,YAAY;EACZ,gDAAgD;EAChD,aAAa;EACb,sBAAsB;EACtB,8BAA8B;;EAE9B,4BAA4B;EAC5B,2BAA2B;EAC3B,sBAAsB;EACtB,yDAA2E;EAC3E,iDAAiD;;EAEjD,wDAAwD;AAC1D;;AAEA,WAAW;AACX,WAAW;AACX,WAAW;;AAEX;EACE,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE;IACE,uCAAuC;EACzC;EACA;IACE,2CAA2C;EAC7C;EACA;IACE,sCAAsC;EACxC;EACA;IACE,6CAA6C;EAC/C;EACA;IACE,uCAAuC;EACzC;AACF;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,6CAA6C;AAC/C;;AAEA;EACE,cAAc;EACd,wBAAwB;AAC1B;AACA;EACE,qBAAqB;EACrB,8BAA8B;AAChC;;AAEA,wBAAwB;;AAExB;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;;EAEnB,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,8BAA8B;EAC9B,mCAAmC;EACnC,mCAAmC;EACnC,iBAAiB;EACjB,kBAAkB;EAClB,oBAAoB;EACpB,YAAY;EACZ,gCAAgC;AAClC;AACA;EACE,qBAAqB;EACrB,yCAAyC;AAC3C;;;AAGA,WAAW;;AAEX;EACE,uCAAuC;EACvC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,4BAA4B;;EAE5B,gBAAgB;;AAElB;;AAEA;EACE,4BAA4B;EAC5B,qBAAqB;;AAEvB;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":["@font-face {\n  font-family: \"Libre_Baskerville\";\n  src: url(\"../assets/fonts/Libre_Baskerville/LibreBaskerville-Bold.ttf\"),\n    url(\"../assets/fonts/Libre_Baskerville/LibreBaskerville-Italic.ttf\"),\n    url(\"../assets/fonts/Libre_Baskerville/LibreBaskerville-Regular.ttf\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n:root {\n  --header-background-color: lightslategray;\n  --gold-color: #ca8a04;\n  --gold-color-hover: #eab308;\n  --white-color: #e8e6e3;\n  --border_color_grey: #858585;\n  --border_radius: 10px;\n  --form_border: 2px var(--border_color_grey) solid;\n  --footer-height: 1.8rem;\n  font-family: \"Libre_Baskerville\", sans-serif;\n  color: var(--white-color);\n}\n\nbody {\n  background-color: lightslategray;\n  margin: 0;\n  padding: 0;\n}\n\n.first_block_main {\n  min-height: calc(100vh + var(--footer-height));\n  color: white;\n  background-color: var(--header-background-color);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-image: url(../assets/images/background_images/background_1.jpeg);\n  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.8);\n\n  /* box-shadow: inset 0 0 99999px rgba(0, 120, 255, 1); */\n}\n\n/* ****** */\n/* Header */\n/* ****** */\n\n.header {\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 2rem;\n  padding-bottom: 0;\n  font-size: 1.2rem;\n}\n\n.header_left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.header_left .restaurant_name {\n  font-family: cursive;\n  font-weight: 700;\n  font-size: 1.8rem;\n}\n\n.header img {\n  height: 4rem;\n  margin-top: -0.7rem;\n  cursor: pointer;\n}\n@keyframes tilt-n-move-shaking {\n  0% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n  25% {\n    transform: translate(5px, 5px) rotate(5deg);\n  }\n  50% {\n    transform: translate(0, 0) rotate(0eg);\n  }\n  75% {\n    transform: translate(-5px, 5px) rotate(-5deg);\n  }\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n.header img:hover {\n  height: 4rem;\n  margin-top: -0.7rem;\n  animation: tilt-n-move-shaking 0.25s infinite;\n}\n\n.header_right a {\n  margin: 0 1rem;\n  color: var(--gold-color);\n}\n.header_right a:hover {\n  transform: scale(1.1);\n  color: var(--gold-color-hover);\n}\n\n/* first block content */\n\n.first_block_content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  gap: 1rem;\n}\n\n.first_block_content .restaurant_slogan {\n  font-size: 2.5rem;\n}\n.first_block_content img {\n  width: 400px;\n  margin-right: -120px;\n}\n\n.first_block_content button {\n  cursor: pointer;\n  color: var(--font_color_white);\n  background-color: var(--gold-color);\n  border-radius: var(--border_radius);\n  font-size: 1.2rem;\n  text-align: center;\n  padding: 0.5rem 1rem;\n  border: none;\n  box-shadow: inset 0 0 14px black;\n}\n.first_block_content button:hover {\n  transform: scale(1.1);\n  background-color: var(--gold-color-hover);\n}\n\n\n/* footer */\n\nfooter {\n  background-color: rgba(93, 21, 21, 0.9);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.8rem;\n  height: var(--footer-height);\n\n  margin-top: auto;\n\n}\n\nfooter img {\n  height: var(--footer-height);\n  transform: scale(1.2);\n\n}\n\nfooter img:hover {\n  transform: scale(1.3);\n}"],"sourceRoot":""}]);
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
/* harmony export */   "createFooter": () => (/* binding */ createFooter),
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
/* harmony import */ var _assets_images_icons_github_64_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/icons/github-64.png */ "./src/assets/images/icons/github-64.png");










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

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer_container");
  footer.innerHTML = "Here I practiced generating HTML files with Javascript and bundling with Webpack&nbsp;&nbsp;"
  mainContainer.appendChild(footer);

  const footerGithubLink = document.createElement("a")
  footerGithubLink.setAttribute("href", "https://github.com/berkgirgin/Restaurant_Page");
  footer.appendChild(footerGithubLink);

  const footerGithubLogo = document.createElement("img");
  footerGithubLogo.setAttribute("src", _assets_images_icons_github_64_png__WEBPACK_IMPORTED_MODULE_7__);
  footerGithubLogo.setAttribute("alt", "git repo")
  footerGithubLink.appendChild(footerGithubLogo)

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
  createFooter();
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

/***/ "./src/assets/images/icons/github-64.png":
/*!***********************************************!*\
  !*** ./src/assets/images/icons/github-64.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "770b383a99485f3f7a7d.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsNERBQVk7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQSw0R0FBNEcsTUFBTTtBQUNsSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsK0RBQVc7QUFDbEQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiwrRUFBWTtBQUNqQyxxQkFBcUIsK0VBQVk7QUFDakMscUJBQXFCLCtFQUFZO0FBQ2pDLHFCQUFxQiwrRUFBWTtBQUNqQyxxQkFBcUIsK0VBQVk7QUFDakM7O0FBRUE7QUFDQTtBQUNBOztBQUVBLCtCQUErQixPQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDBEQUEwRCxPQUFPO0FBQ2pFLHFEQUFxRCxtQkFBbUI7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0oyQztBQUNkOztBQUU3Qix3REFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9MaWJyZV9CYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL0xpYnJlX0Jhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGUtSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9MaWJyZV9CYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kX2ltYWdlcy9iYWNrZ3JvdW5kXzEuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMaWJyZV9CYXNrZXJ2aWxsZVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIiksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIiksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcXG4gIC0tZ29sZC1jb2xvcjogI2NhOGEwNDtcXG4gIC0tZ29sZC1jb2xvci1ob3ZlcjogI2VhYjMwODtcXG4gIC0td2hpdGUtY29sb3I6ICNlOGU2ZTM7XFxuICAtLWJvcmRlcl9jb2xvcl9ncmV5OiAjODU4NTg1O1xcbiAgLS1ib3JkZXJfcmFkaXVzOiAxMHB4O1xcbiAgLS1mb3JtX2JvcmRlcjogMnB4IHZhcigtLWJvcmRlcl9jb2xvcl9ncmV5KSBzb2xpZDtcXG4gIC0tZm9vdGVyLWhlaWdodDogMS44cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMaWJyZV9CYXNrZXJ2aWxsZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmZpcnN0X2Jsb2NrX21haW4ge1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCArIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMTAwMHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcXG5cXG4gIC8qIGJveC1zaGFkb3c6IGluc2V0IDAgMCA5OTk5OXB4IHJnYmEoMCwgMTIwLCAyNTUsIDEpOyAqL1xcbn1cXG5cXG4vKiAqKioqKiogKi9cXG4vKiBIZWFkZXIgKi9cXG4vKiAqKioqKiogKi9cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmhlYWRlcl9sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXJfbGVmdCAucmVzdGF1cmFudF9uYW1lIHtcXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4uaGVhZGVyIGltZyB7XFxuICBoZWlnaHQ6IDRyZW07XFxuICBtYXJnaW4tdG9wOiAtMC43cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5Aa2V5ZnJhbWVzIHRpbHQtbi1tb3ZlLXNoYWtpbmcge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAyNSUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIDVweCkgcm90YXRlKDVkZWcpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDBlZyk7XFxuICB9XFxuICA3NSUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCA1cHgpIHJvdGF0ZSgtNWRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDBkZWcpO1xcbiAgfVxcbn1cXG4uaGVhZGVyIGltZzpob3ZlciB7XFxuICBoZWlnaHQ6IDRyZW07XFxuICBtYXJnaW4tdG9wOiAtMC43cmVtO1xcbiAgYW5pbWF0aW9uOiB0aWx0LW4tbW92ZS1zaGFraW5nIDAuMjVzIGluZmluaXRlO1xcbn1cXG5cXG4uaGVhZGVyX3JpZ2h0IGEge1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBjb2xvcjogdmFyKC0tZ29sZC1jb2xvcik7XFxufVxcbi5oZWFkZXJfcmlnaHQgYTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBjb2xvcjogdmFyKC0tZ29sZC1jb2xvci1ob3Zlcik7XFxufVxcblxcbi8qIGZpcnN0IGJsb2NrIGNvbnRlbnQgKi9cXG5cXG4uZmlyc3RfYmxvY2tfY29udGVudCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5maXJzdF9ibG9ja19jb250ZW50IC5yZXN0YXVyYW50X3Nsb2dhbiB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuLmZpcnN0X2Jsb2NrX2NvbnRlbnQgaW1nIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIG1hcmdpbi1yaWdodDogLTEyMHB4O1xcbn1cXG5cXG4uZmlyc3RfYmxvY2tfY29udGVudCBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHZhcigtLWZvbnRfY29sb3Jfd2hpdGUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJfcmFkaXVzKTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTRweCBibGFjaztcXG59XFxuLmZpcnN0X2Jsb2NrX2NvbnRlbnQgYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG5cXG4vKiBmb290ZXIgKi9cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MywgMjEsIDIxLCAwLjkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG5cXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuXFxufVxcblxcbmZvb3RlciBpbWcge1xcbiAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG5cXG59XFxuXFxuZm9vdGVyIGltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdDQUFnQztFQUNoQzs7MkNBRXVFO0VBQ3ZFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixpREFBaUQ7RUFDakQsdUJBQXVCO0VBQ3ZCLDRDQUE0QztFQUM1Qyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLDhDQUE4QztFQUM5QyxZQUFZO0VBQ1osZ0RBQWdEO0VBQ2hELGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCOztFQUU5Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qix5REFBMkU7RUFDM0UsaURBQWlEOztFQUVqRCx3REFBd0Q7QUFDMUQ7O0FBRUEsV0FBVztBQUNYLFdBQVc7QUFDWCxXQUFXOztBQUVYO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0U7SUFDRSx1Q0FBdUM7RUFDekM7RUFDQTtJQUNFLDJDQUEyQztFQUM3QztFQUNBO0lBQ0Usc0NBQXNDO0VBQ3hDO0VBQ0E7SUFDRSw2Q0FBNkM7RUFDL0M7RUFDQTtJQUNFLHVDQUF1QztFQUN6QztBQUNGO0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQiw4QkFBOEI7QUFDaEM7O0FBRUEsd0JBQXdCOztBQUV4QjtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsbUNBQW1DO0VBQ25DLG1DQUFtQztFQUNuQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIseUNBQXlDO0FBQzNDOzs7QUFHQSxXQUFXOztBQUVYO0VBQ0UsdUNBQXVDO0VBQ3ZDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw0QkFBNEI7O0VBRTVCLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIscUJBQXFCOztBQUV2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGlicmVfQmFza2VydmlsbGVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9MaWJyZV9CYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlLUJvbGQudHRmXFxcIiksXFxuICAgIHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL0xpYnJlX0Jhc2tlcnZpbGxlL0xpYnJlQmFza2VydmlsbGUtSXRhbGljLnR0ZlxcXCIpLFxcbiAgICB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9MaWJyZV9CYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlLVJlZ3VsYXIudHRmXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcXG4gIC0tZ29sZC1jb2xvcjogI2NhOGEwNDtcXG4gIC0tZ29sZC1jb2xvci1ob3ZlcjogI2VhYjMwODtcXG4gIC0td2hpdGUtY29sb3I6ICNlOGU2ZTM7XFxuICAtLWJvcmRlcl9jb2xvcl9ncmV5OiAjODU4NTg1O1xcbiAgLS1ib3JkZXJfcmFkaXVzOiAxMHB4O1xcbiAgLS1mb3JtX2JvcmRlcjogMnB4IHZhcigtLWJvcmRlcl9jb2xvcl9ncmV5KSBzb2xpZDtcXG4gIC0tZm9vdGVyLWhlaWdodDogMS44cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMaWJyZV9CYXNrZXJ2aWxsZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmZpcnN0X2Jsb2NrX21haW4ge1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCArIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kX2ltYWdlcy9iYWNrZ3JvdW5kXzEuanBlZyk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxMDAwcHggcmdiYSgwLCAwLCAwLCAwLjgpO1xcblxcbiAgLyogYm94LXNoYWRvdzogaW5zZXQgMCAwIDk5OTk5cHggcmdiYSgwLCAxMjAsIDI1NSwgMSk7ICovXFxufVxcblxcbi8qICoqKioqKiAqL1xcbi8qIEhlYWRlciAqL1xcbi8qICoqKioqKiAqL1xcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaGVhZGVyX2xlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlcl9sZWZ0IC5yZXN0YXVyYW50X25hbWUge1xcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi5oZWFkZXIgaW1nIHtcXG4gIGhlaWdodDogNHJlbTtcXG4gIG1hcmdpbi10b3A6IC0wLjdyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbkBrZXlmcmFtZXMgdGlsdC1uLW1vdmUtc2hha2luZyB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgNXB4KSByb3RhdGUoNWRlZyk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoMGVnKTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDVweCkgcm90YXRlKC01ZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoMGRlZyk7XFxuICB9XFxufVxcbi5oZWFkZXIgaW1nOmhvdmVyIHtcXG4gIGhlaWdodDogNHJlbTtcXG4gIG1hcmdpbi10b3A6IC0wLjdyZW07XFxuICBhbmltYXRpb246IHRpbHQtbi1tb3ZlLXNoYWtpbmcgMC4yNXMgaW5maW5pdGU7XFxufVxcblxcbi5oZWFkZXJfcmlnaHQgYSB7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1nb2xkLWNvbG9yKTtcXG59XFxuLmhlYWRlcl9yaWdodCBhOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGNvbG9yOiB2YXIoLS1nb2xkLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLyogZmlyc3QgYmxvY2sgY29udGVudCAqL1xcblxcbi5maXJzdF9ibG9ja19jb250ZW50IHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmZpcnN0X2Jsb2NrX2NvbnRlbnQgLnJlc3RhdXJhbnRfc2xvZ2FuIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG4uZmlyc3RfYmxvY2tfY29udGVudCBpbWcge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAtMTIwcHg7XFxufVxcblxcbi5maXJzdF9ibG9ja19jb250ZW50IGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdmFyKC0tZm9udF9jb2xvcl93aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlcl9yYWRpdXMpO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxNHB4IGJsYWNrO1xcbn1cXG4uZmlyc3RfYmxvY2tfY29udGVudCBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZC1jb2xvci1ob3Zlcik7XFxufVxcblxcblxcbi8qIGZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkzLCAyMSwgMjEsIDAuOSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcblxcbiAgbWFyZ2luLXRvcDogYXV0bztcXG5cXG59XFxuXFxuZm9vdGVyIGltZyB7XFxuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcblxcbn1cXG5cXG5mb290ZXIgaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGZlc19sb2dvIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvZmVzX2xvZ28ucG5nXCI7XG5pbXBvcnQgdHVya2lzaF9jaGVmIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvdHVya2lzaF9jaGVmLnBuZ1wiO1xuaW1wb3J0IGJhY2tncm91bmRfMSBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRfaW1hZ2VzL2JhY2tncm91bmRfMS5qcGVnXCI7XG5pbXBvcnQgYmFja2dyb3VuZF8yIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZF9pbWFnZXMvYmFja2dyb3VuZF8yLmpwZWdcIjtcbmltcG9ydCBiYWNrZ3JvdW5kXzMgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kX2ltYWdlcy9iYWNrZ3JvdW5kXzMuanBlZ1wiO1xuaW1wb3J0IGJhY2tncm91bmRfNCBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRfaW1hZ2VzL2JhY2tncm91bmRfNC5qcGVnXCI7XG5pbXBvcnQgYmFja2dyb3VuZF81IGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZF9pbWFnZXMvYmFja2dyb3VuZF81LmpwZWdcIjtcbmltcG9ydCBnaXRodWJfbG9nbyBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2ljb25zL2dpdGh1Yi02NC5wbmdcIjtcblxuXG5jb25zb2xlLmxvZyhcImhhbGxvIGZyb20gaG9tZS5qc1wiKTtcblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmZpcnN0RWxlbWVudENoaWxkO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIChmdW5jdGlvbiBjcmVhdGVIZWFkZXJMZWZ0KCkge1xuICAgIGNvbnN0IGhlYWRlcl9sZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfbGVmdC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyX2xlZnRcIik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9sZWZ0KTtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoXCIuaGVhZGVyX2xvZ29cIik7XG4gICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBmZXNfbG9nbyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImhlYWRlciBsb2dvXCIpO1xuICAgIGhlYWRlcl9sZWZ0LmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSBcIi4vaW5kZXguaHRtbFwiO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50X25hbWVcIik7XG4gICAgcmVzdGF1cmFudE5hbWUuaW5uZXJIVE1MID0gXCJQQVNIQSBET05FUiBcIjtcbiAgICBoZWFkZXJfbGVmdC5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG4gIH0pKCk7XG5cbiAgKGZ1bmN0aW9uIGNyZWF0ZUhlYWRlclJpZ3RoKCkge1xuICAgIGNvbnN0IGhlYWRlcl9yaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyX3JpZ2h0LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfcmlnaHRcIik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9yaWdodCk7XG5cbiAgICBjb25zdCBsaW5rXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaW5rXzEuaW5uZXJIVE1MID0gXCJIb21lXCI7XG4gICAgbGlua18xLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIuL2luZGV4Lmh0bWxcIik7XG4gICAgaGVhZGVyX3JpZ2h0LmFwcGVuZENoaWxkKGxpbmtfMSk7XG5cbiAgICBjb25zdCBsaW5rXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaW5rXzIuaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gICAgbGlua18yLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIuL21lbnUuaHRtbFwiKTtcbiAgICBoZWFkZXJfcmlnaHQuYXBwZW5kQ2hpbGQobGlua18yKTtcblxuICAgIGNvbnN0IGxpbmtfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmtfMy5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcbiAgICBsaW5rXzMuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIi4vY29udGFjdC5odG1sXCIpO1xuICAgIGhlYWRlcl9yaWdodC5hcHBlbmRDaGlsZChsaW5rXzMpO1xuICB9KSgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50QmxvY2soKSB7XG4gIGNvbnN0IGNvbnRlbnRCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnRCbG9jay5jbGFzc0xpc3QuYWRkKFwiZmlyc3RfYmxvY2tfY29udGVudFwiKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50QmxvY2spO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdHVya2lzaF9jaGVmKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcInJlc3RhdXJhbnQgbG9nb1wiKTtcbiAgY29udGVudEJsb2NrLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgY29uc3QgcmVzdGF1cmFudFNsb2dhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJlc3RhdXJhbnRTbG9nYW4uY2xhc3NMaXN0LmFkZChcInJlc3RhdXJhbnRfc2xvZ2FuXCIpO1xuICByZXN0YXVyYW50U2xvZ2FuLmlubmVySFRNTCA9IFwiQmVzdCBUdXJraXNoIEZvb2QgaW4gVG93blwiO1xuICBjb250ZW50QmxvY2suYXBwZW5kQ2hpbGQocmVzdGF1cmFudFNsb2dhbik7XG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLmlubmVySFRNTCA9IFwiQ2hlY2sgb3VyIHNlbGVjdGlvbiFcIjtcbiAgY29udGVudEJsb2NrLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9jYXRpb24uaHJlZiA9IFwiLi9tZW51Lmh0bWxcIjtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX2NvbnRhaW5lclwiKTtcbiAgZm9vdGVyLmlubmVySFRNTCA9IFwiSGVyZSBJIHByYWN0aWNlZCBnZW5lcmF0aW5nIEhUTUwgZmlsZXMgd2l0aCBKYXZhc2NyaXB0IGFuZCBidW5kbGluZyB3aXRoIFdlYnBhY2smbmJzcDsmbmJzcDtcIlxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgY29uc3QgZm9vdGVyR2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXG4gIGZvb3RlckdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9iZXJrZ2lyZ2luL1Jlc3RhdXJhbnRfUGFnZVwiKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckdpdGh1YkxpbmspO1xuXG4gIGNvbnN0IGZvb3RlckdpdGh1YkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBmb290ZXJHaXRodWJMb2dvLnNldEF0dHJpYnV0ZShcInNyY1wiLCBnaXRodWJfbG9nbyk7XG4gIGZvb3RlckdpdGh1YkxvZ28uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiZ2l0IHJlcG9cIilcbiAgZm9vdGVyR2l0aHViTGluay5hcHBlbmRDaGlsZChmb290ZXJHaXRodWJMb2dvKVxuXG59XG5cbmZ1bmN0aW9uIGNoYW5nZUltYWdlQW5kTWVzc2FnZSgpIHtcbiAgY29uc3QgYmFja2dyb3VuZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpcnN0X2Jsb2NrX21haW5cIik7XG4gIGNvbnN0IHJlc3RhdXJhbnRTbG9nYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRfc2xvZ2FuXCIpO1xuXG4gIGNvbnN0IHJlc3RhdXJhbnRTbG9nYW5UZXh0cyA9IHtcbiAgICB0ZXh0XzE6IFwiQmVzdCBUdXJraXNoIEZvb2QgaW4gVG93blwiLFxuICAgIHRleHRfMjogXCJBdXRoZW50aWMgU2F1Y2VzXCIsXG4gICAgdGV4dF8zOiBcIk5vIGFkZGl0aW9uLCBvbmx5IE1lYXRcIixcbiAgICB0ZXh0XzQ6IFwiRWxpdGUgQW1iaWFuY2VcIixcbiAgICB0ZXh0XzU6IFwiRGFpbHkgRnJlc2ggU2FsYWRcIixcbiAgfTtcblxuICBsZXQgbnVtYmVyID0gMjtcblxuICBmdW5jdGlvbiBjaGFuZ2VGdW5jdGlvbigpIHtcbiAgICBjb25zdCBteUJhY2tncm91bmRzID0ge1xuICAgICAgbXlCYWNrZ3JvdW5kMTogYmFja2dyb3VuZF8xLFxuICAgICAgbXlCYWNrZ3JvdW5kMjogYmFja2dyb3VuZF8yLFxuICAgICAgbXlCYWNrZ3JvdW5kMzogYmFja2dyb3VuZF8zLFxuICAgICAgbXlCYWNrZ3JvdW5kNDogYmFja2dyb3VuZF80LFxuICAgICAgbXlCYWNrZ3JvdW5kNTogYmFja2dyb3VuZF81LFxuICAgIH07XG5cbiAgICByZXN0YXVyYW50U2xvZ2FuLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICByZXN0YXVyYW50U2xvZ2FuLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICByZXN0YXVyYW50U2xvZ2FuLnN0eWxlLnRyYW5zaXRpb24gPSBcIjBtc1wiO1xuXG4gICAgbGV0IHNlbGVjdGVkVGV4dCA9IGB0ZXh0XyR7bnVtYmVyfWA7XG4gICAgcmVzdGF1cmFudFNsb2dhbi50ZXh0Q29udGVudCA9IHJlc3RhdXJhbnRTbG9nYW5UZXh0c1tzZWxlY3RlZFRleHRdO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVzdGF1cmFudFNsb2dhbi5zdHlsZS50cmFuc2l0aW9uID0gXCIyMDAwbXNcIjtcbiAgICAgIHJlc3RhdXJhbnRTbG9nYW4uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgIH0sIDIpO1xuXG4gICAgYmFja2dyb3VuZEVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwiMTIwMG1zXCI7XG4gICAgbGV0IHNlbGVjdGVkQmFja2dyb3VuZCA9IG15QmFja2dyb3VuZHNbYG15QmFja2dyb3VuZCR7bnVtYmVyfWBdO1xuICAgIGJhY2tncm91bmRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzZWxlY3RlZEJhY2tncm91bmR9KWA7XG5cbiAgICBudW1iZXIrKztcbiAgICBpZiAobnVtYmVyID4gNSkge1xuICAgICAgbnVtYmVyID0gMTtcbiAgICB9XG4gIH1cblxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgY2hhbmdlRnVuY3Rpb24oKTtcbiAgfSwgNzAwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcbiAgY3JlYXRlSGVhZGVyKCk7XG4gIGNyZWF0ZUNvbnRlbnRCbG9jaygpO1xuICBjaGFuZ2VJbWFnZUFuZE1lc3NhZ2UoKTtcbiAgY3JlYXRlRm9vdGVyKCk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVIb21lUGFnZSB9IGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlcy5jc3NcIjtcblxuY3JlYXRlSG9tZVBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==