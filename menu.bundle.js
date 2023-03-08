"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menu"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css ***!
  \*******************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/wooden_plate.jpg */ "./src/assets/images/wooden_plate.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --menu-item-padding: 8px;\n  --generic-border-radius: 12px;\n  --menu-main-content-gap: 4rem;\n\n  --gold-color: #ca8a04;\n  --gold-color-hover: #eab308;\n  --white-color: #e8e6e3;\n  --border_color_grey: #858585;\n  --border_radius: 10px;\n}\n\nh2,\nh3 {\n  text-align: center;\n  text-decoration: underline;\n}\nh2 {\n  margin: 1rem auto;\n  margin-top: var(--menu-main-content-gap);\n  font-size: 2rem;\n}\nh3 {\n  margin: 0 auto;\n  font-size: 1.6rem;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-attachment: fixed;\n\n  box-shadow: inset 0 0 0 5000px rgba(0, 0, 0, 0.8);\n}\n\n/* ********** */\n/* Menu Items */\n/* ********** */\n\n.menu_items_container {\n  margin: 0 auto;\n  display: grid;\n  width: 90vw;\n\n  grid-template-columns: repeat(auto-fill, minmax(300px, 3fr));\n  grid-auto-rows: 250px;\n  background-color: var();\n  /* border: 4px solid pink; */\n  gap: var(--menu-main-content-gap);\n  padding: 0 var(--menu-main-content-gap);\n}\n\n.menu_item {\n  /* border: 4px solid yellow; */\n  transition-duration: 1s;\n  position: relative;\n\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr min-content min-content;\n  justify-items: center;\n  padding: var(--menu-item-padding);\n  padding-bottom: var(--menu-item-padding);\n  border-radius: var(--generic-border-radius);\n}\n\n.menu_item:hover {\n  color: var(--gold-color-hover);\n  cursor: pointer;\n  transform: scale(1.1);\n}\n\n.menu_item img {\n  margin: 0 auto;\n  /* max-width: 300px; */\n  max-height: 180px;\n  object-fit: contain;\n}\n\n.menu_item img.pizza {\n  width: 360px;\n  max-height: 250px;\n  margin-top: -20px;\n}\n\n.menu_item div.item_name {\n  font-size: 1.6rem;\n}\n.menu_item div.item_price {\n  font-size: 1.2rem;\n}\n\n.menu_item .approved_logo {\n  position: absolute;\n  z-index: 10;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* *********** */\n/* Sauce Items */\n/* *********** */\n\n.menu_sauce_items {\n  grid-column-start: 1;\n  grid-column-end: -1;\n}\n\n.menu_sauces {\n  display: flex;\n  justify-content: center;\n  height: 150px;\n  gap: 5rem;\n}\n\n.sauce_item {\n  /* background-color: orange;\n  border: 4px solid yellow; */\n  transition-duration: 1s;\n\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: min-content min-content;\n  justify-items: center;\n  align-items: center;\n\n  padding: var(--menu-item-padding);\n  padding-bottom: var(--menu-item-padding);\n  /* border-left: 8px solid var(--custom_article_blue_color); */\n  border-radius: var(--generic-border-radius);\n}\n\n.sauce_item:hover {\n  color: var(--gold-color-hover);\n  cursor: pointer;\n  transform: scale(1.1);\n}\n\n.sauce_item img {\n  margin: 0 auto;\n  width: 100px;\n  max-height: 120px;\n  object-fit: contain;\n}\n\n.sauce_item div.sauce_name {\n  font-size: 1.2rem;\n  margin-top: -1.2rem;\n}\n.sauce_item div.sauce_name:hover {\n  color: var(--gold-color-hover);\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/menu.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,6BAA6B;EAC7B,6BAA6B;;EAE7B,qBAAqB;EACrB,2BAA2B;EAC3B,sBAAsB;EACtB,4BAA4B;EAC5B,qBAAqB;AACvB;;AAEA;;EAEE,kBAAkB;EAClB,0BAA0B;AAC5B;AACA;EACE,iBAAiB;EACjB,wCAAwC;EACxC,eAAe;AACjB;AACA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,yDAAwD;EACxD,4BAA4B;EAC5B,2BAA2B;EAC3B,sBAAsB;EACtB,4BAA4B;;EAE5B,iDAAiD;AACnD;;AAEA,eAAe;AACf,eAAe;AACf,eAAe;;AAEf;EACE,cAAc;EACd,aAAa;EACb,WAAW;;EAEX,4DAA4D;EAC5D,qBAAqB;EACrB,uBAAuB;EACvB,4BAA4B;EAC5B,iCAAiC;EACjC,uCAAuC;AACzC;;AAEA;EACE,8BAA8B;EAC9B,uBAAuB;EACvB,kBAAkB;;EAElB,aAAa;EACb,0BAA0B;EAC1B,+CAA+C;EAC/C,qBAAqB;EACrB,iCAAiC;EACjC,wCAAwC;EACxC,2CAA2C;AAC7C;;AAEA;EACE,8BAA8B;EAC9B,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,QAAQ;EACR,gCAAgC;AAClC;;AAEA,gBAAgB;AAChB,gBAAgB;AAChB,gBAAgB;;AAEhB;EACE,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,aAAa;EACb,SAAS;AACX;;AAEA;EACE;6BAC2B;EAC3B,uBAAuB;;EAEvB,aAAa;EACb,0BAA0B;EAC1B,2CAA2C;EAC3C,qBAAqB;EACrB,mBAAmB;;EAEnB,iCAAiC;EACjC,wCAAwC;EACxC,6DAA6D;EAC7D,2CAA2C;AAC7C;;AAEA;EACE,8BAA8B;EAC9B,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,8BAA8B;EAC9B,eAAe;AACjB","sourcesContent":[":root {\n  --menu-item-padding: 8px;\n  --generic-border-radius: 12px;\n  --menu-main-content-gap: 4rem;\n\n  --gold-color: #ca8a04;\n  --gold-color-hover: #eab308;\n  --white-color: #e8e6e3;\n  --border_color_grey: #858585;\n  --border_radius: 10px;\n}\n\nh2,\nh3 {\n  text-align: center;\n  text-decoration: underline;\n}\nh2 {\n  margin: 1rem auto;\n  margin-top: var(--menu-main-content-gap);\n  font-size: 2rem;\n}\nh3 {\n  margin: 0 auto;\n  font-size: 1.6rem;\n}\n\nbody {\n  background-image: url(../assets/images/wooden_plate.jpg);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-attachment: fixed;\n\n  box-shadow: inset 0 0 0 5000px rgba(0, 0, 0, 0.8);\n}\n\n/* ********** */\n/* Menu Items */\n/* ********** */\n\n.menu_items_container {\n  margin: 0 auto;\n  display: grid;\n  width: 90vw;\n\n  grid-template-columns: repeat(auto-fill, minmax(300px, 3fr));\n  grid-auto-rows: 250px;\n  background-color: var();\n  /* border: 4px solid pink; */\n  gap: var(--menu-main-content-gap);\n  padding: 0 var(--menu-main-content-gap);\n}\n\n.menu_item {\n  /* border: 4px solid yellow; */\n  transition-duration: 1s;\n  position: relative;\n\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr min-content min-content;\n  justify-items: center;\n  padding: var(--menu-item-padding);\n  padding-bottom: var(--menu-item-padding);\n  border-radius: var(--generic-border-radius);\n}\n\n.menu_item:hover {\n  color: var(--gold-color-hover);\n  cursor: pointer;\n  transform: scale(1.1);\n}\n\n.menu_item img {\n  margin: 0 auto;\n  /* max-width: 300px; */\n  max-height: 180px;\n  object-fit: contain;\n}\n\n.menu_item img.pizza {\n  width: 360px;\n  max-height: 250px;\n  margin-top: -20px;\n}\n\n.menu_item div.item_name {\n  font-size: 1.6rem;\n}\n.menu_item div.item_price {\n  font-size: 1.2rem;\n}\n\n.menu_item .approved_logo {\n  position: absolute;\n  z-index: 10;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* *********** */\n/* Sauce Items */\n/* *********** */\n\n.menu_sauce_items {\n  grid-column-start: 1;\n  grid-column-end: -1;\n}\n\n.menu_sauces {\n  display: flex;\n  justify-content: center;\n  height: 150px;\n  gap: 5rem;\n}\n\n.sauce_item {\n  /* background-color: orange;\n  border: 4px solid yellow; */\n  transition-duration: 1s;\n\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: min-content min-content;\n  justify-items: center;\n  align-items: center;\n\n  padding: var(--menu-item-padding);\n  padding-bottom: var(--menu-item-padding);\n  /* border-left: 8px solid var(--custom_article_blue_color); */\n  border-radius: var(--generic-border-radius);\n}\n\n.sauce_item:hover {\n  color: var(--gold-color-hover);\n  cursor: pointer;\n  transform: scale(1.1);\n}\n\n.sauce_item img {\n  margin: 0 auto;\n  width: 100px;\n  max-height: 120px;\n  object-fit: contain;\n}\n\n.sauce_item div.sauce_name {\n  font-size: 1.2rem;\n  margin-top: -1.2rem;\n}\n.sauce_item div.sauce_name:hover {\n  color: var(--gold-color-hover);\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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

/***/ "./src/styles/menu.css":
/*!*****************************!*\
  !*** ./src/styles/menu.css ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/menu.css */ "./src/styles/menu.css");
/* harmony import */ var _assets_images_menu_images_menu_doner_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/menu_images/menu_doner.png */ "./src/assets/images/menu_images/menu_doner.png");
/* harmony import */ var _assets_images_menu_images_menu_durum_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/menu_images/menu_durum.png */ "./src/assets/images/menu_images/menu_durum.png");
/* harmony import */ var _assets_images_menu_images_menu_doner_box_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/menu_images/menu_doner_box.png */ "./src/assets/images/menu_images/menu_doner_box.png");
/* harmony import */ var _assets_images_menu_images_menu_lahmacun_durum_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/menu_images/menu_lahmacun_durum.png */ "./src/assets/images/menu_images/menu_lahmacun_durum.png");
/* harmony import */ var _assets_images_menu_images_menu_doner_teller_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/menu_images/menu_doner_teller.png */ "./src/assets/images/menu_images/menu_doner_teller.png");
/* harmony import */ var _assets_images_menu_images_menu_doner_pizza_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/menu_images/menu_doner_pizza.png */ "./src/assets/images/menu_images/menu_doner_pizza.png");
/* harmony import */ var _assets_images_menu_images_sauce_garlic_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/menu_images/sauce_garlic.png */ "./src/assets/images/menu_images/sauce_garlic.png");
/* harmony import */ var _assets_images_menu_images_sauce_hot_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/menu_images/sauce_hot.png */ "./src/assets/images/menu_images/sauce_hot.png");
/* harmony import */ var _assets_images_approved_logo_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/images/approved_logo.jpeg */ "./src/assets/images/approved_logo.jpeg");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home.js */ "./src/home.js");















// console.log("hallo from menu.js");
// console.log("2hallo from menu.js");

const mainContainer = document.querySelector(".menu_main_container");

function createMenuContent() {
  function createMenuItem(src, item_name, item_price) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu_item");
    menuItemsContainer.appendChild(menuItem);

    const img = document.createElement("img");
    img.classList.add("item_photo");
    img.setAttribute("alt", "item photo");
    img.setAttribute("src", `${src}`);
    menuItem.appendChild(img);

    const itemName = document.createElement("div");
    itemName.classList.add("item_name");
    itemName.innerHTML = item_name;
    menuItem.appendChild(itemName);

    const itemPrice = document.createElement("div");
    itemPrice.classList.add("item_price");
    itemPrice.innerHTML = item_price;
    menuItem.appendChild(itemPrice);

    menuItem.addEventListener("click", (element) => {
      if (menuItem.querySelector(".approved_logo")) {
        menuItem.querySelector(".approved_logo").remove();
      } else {
        const approvedLogo = document.createElement("img");
        approvedLogo.classList.add("approved_logo");
        approvedLogo.setAttribute("alt", "approved logo");
        approvedLogo.setAttribute("src", `${_assets_images_approved_logo_jpeg__WEBPACK_IMPORTED_MODULE_10__}`);
        menuItem.appendChild(approvedLogo);
      }
    });
  }

  function createSauceItem(src, sauce_name) {
    const sauceItem = document.createElement("div");
    sauceItem.classList.add("sauce_item");
    menuSauces.appendChild(sauceItem);

    const img = document.createElement("img");
    img.setAttribute("alt", "sauce item");
    img.setAttribute("src", `${src}`);
    sauceItem.appendChild(img);

    const sauceName = document.createElement("div");
    sauceName.classList.add("sauce_name");
    sauceName.innerHTML = sauce_name;
    sauceItem.appendChild(sauceName);
  }

  const h2_dönerVariants = document.createElement("h2");
  h2_dönerVariants.innerHTML = "Döner Variants";
  mainContainer.appendChild(h2_dönerVariants);

  const menuItemsContainer = document.createElement("div");
  menuItemsContainer.classList.add("menu_items_container");
  mainContainer.appendChild(menuItemsContainer);

  // creating Menu Items
  // img, name and price
  const menuItemsArray = [
    [_assets_images_menu_images_menu_doner_png__WEBPACK_IMPORTED_MODULE_2__, "Döner", "6€"],
    [_assets_images_menu_images_menu_durum_png__WEBPACK_IMPORTED_MODULE_3__, "Dürüm", "7€"],
    [_assets_images_menu_images_menu_doner_box_png__WEBPACK_IMPORTED_MODULE_4__, "Döner Box", "6€"],
    [_assets_images_menu_images_menu_lahmacun_durum_png__WEBPACK_IMPORTED_MODULE_5__, "Lahmacun Dürüm", "7€"],
    [_assets_images_menu_images_menu_doner_teller_png__WEBPACK_IMPORTED_MODULE_6__, "Döner Teller", "11€"],
    [_assets_images_menu_images_menu_doner_pizza_png__WEBPACK_IMPORTED_MODULE_7__, "Pizza Döner", "9€"],
  ];

  menuItemsArray.forEach((element) => {
    createMenuItem(...element);
  });

  const menuSauceItems = document.createElement("div");
  menuSauceItems.classList.add("menu_sauce_items");
  menuItemsContainer.appendChild(menuSauceItems);

  const h3_ourSauces = document.createElement("h3");
  h3_ourSauces.innerHTML = "Our sauces";
  menuSauceItems.appendChild(h3_ourSauces);

  const menuSauces = document.createElement("div");
  menuSauces.classList.add("menu_sauces");
  menuSauceItems.appendChild(menuSauces);

  // creating Sauce Items
  // img and name
  const menuSaucesArray = [
    [_assets_images_menu_images_sauce_garlic_png__WEBPACK_IMPORTED_MODULE_8__, "Garlic"],
    [_assets_images_menu_images_sauce_hot_png__WEBPACK_IMPORTED_MODULE_9__, "Spicy"],
  ];

  menuSaucesArray.forEach((element) => {
    createSauceItem(...element);
  });
}

function createMenuPage() {
  (0,_home_js__WEBPACK_IMPORTED_MODULE_11__.createHeader)();
  createMenuContent();
}

createMenuPage();


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

/***/ "./src/assets/images/approved_logo.jpeg":
/*!**********************************************!*\
  !*** ./src/assets/images/approved_logo.jpeg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8910f1ceeacd7966ff67.jpeg";

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

/***/ "./src/assets/images/menu_images/menu_doner.png":
/*!******************************************************!*\
  !*** ./src/assets/images/menu_images/menu_doner.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "14fee05a41aac961d3b8.png";

/***/ }),

/***/ "./src/assets/images/menu_images/menu_doner_box.png":
/*!**********************************************************!*\
  !*** ./src/assets/images/menu_images/menu_doner_box.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce8b419cb372d82bab73.png";

/***/ }),

/***/ "./src/assets/images/menu_images/menu_doner_pizza.png":
/*!************************************************************!*\
  !*** ./src/assets/images/menu_images/menu_doner_pizza.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "754f930314f6534cf2f6.png";

/***/ }),

/***/ "./src/assets/images/menu_images/menu_doner_teller.png":
/*!*************************************************************!*\
  !*** ./src/assets/images/menu_images/menu_doner_teller.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3954e1d75cd9726c88bd.png";

/***/ }),

/***/ "./src/assets/images/menu_images/menu_durum.png":
/*!******************************************************!*\
  !*** ./src/assets/images/menu_images/menu_durum.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73a4d6abb389cf814cc6.png";

/***/ }),

/***/ "./src/assets/images/menu_images/menu_lahmacun_durum.png":
/*!***************************************************************!*\
  !*** ./src/assets/images/menu_images/menu_lahmacun_durum.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58603244703c723eae2a.png";

/***/ }),

/***/ "./src/assets/images/menu_images/sauce_garlic.png":
/*!********************************************************!*\
  !*** ./src/assets/images/menu_images/sauce_garlic.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fa543642765aaa4efe6.png";

/***/ }),

/***/ "./src/assets/images/menu_images/sauce_hot.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/menu_images/sauce_hot.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "14648671c83cdda6cd8d.png";

/***/ }),

/***/ "./src/assets/images/turkish_chef.png":
/*!********************************************!*\
  !*** ./src/assets/images/turkish_chef.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b36d58fe601cc401c98.png";

/***/ }),

/***/ "./src/assets/images/wooden_plate.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/wooden_plate.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b7e4c0e4714da518496.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUN0QixLQUFLLDRFQUFnQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHdFQUFZO0FBQ2pCLEtBQUsscUVBQVM7QUFDZDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsRUFBRSx1REFBWTtBQUNkO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGVzL21lbnUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlcy9tZW51LmNzcz83MDBhIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvd29vZGVuX3BsYXRlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tbWVudS1pdGVtLXBhZGRpbmc6IDhweDtcXG4gIC0tZ2VuZXJpYy1ib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgLS1tZW51LW1haW4tY29udGVudC1nYXA6IDRyZW07XFxuXFxuICAtLWdvbGQtY29sb3I6ICNjYThhMDQ7XFxuICAtLWdvbGQtY29sb3ItaG92ZXI6ICNlYWIzMDg7XFxuICAtLXdoaXRlLWNvbG9yOiAjZThlNmUzO1xcbiAgLS1ib3JkZXJfY29sb3JfZ3JleTogIzg1ODU4NTtcXG4gIC0tYm9yZGVyX3JhZGl1czogMTBweDtcXG59XFxuXFxuaDIsXFxuaDMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbmgyIHtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tbWVudS1tYWluLWNvbnRlbnQtZ2FwKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuaDMge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcblxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNTAwMHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuLyogKioqKioqKioqKiAqL1xcbi8qIE1lbnUgSXRlbXMgKi9cXG4vKiAqKioqKioqKioqICovXFxuXFxuLm1lbnVfaXRlbXNfY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiA5MHZ3O1xcblxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDNmcikpO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDI1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCk7XFxuICAvKiBib3JkZXI6IDRweCBzb2xpZCBwaW5rOyAqL1xcbiAgZ2FwOiB2YXIoLS1tZW51LW1haW4tY29udGVudC1nYXApO1xcbiAgcGFkZGluZzogMCB2YXIoLS1tZW51LW1haW4tY29udGVudC1nYXApO1xcbn1cXG5cXG4ubWVudV9pdGVtIHtcXG4gIC8qIGJvcmRlcjogNHB4IHNvbGlkIHllbGxvdzsgKi9cXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiB2YXIoLS1tZW51LWl0ZW0tcGFkZGluZyk7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tbWVudS1pdGVtLXBhZGRpbmcpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2VuZXJpYy1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLm1lbnVfaXRlbTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tZ29sZC1jb2xvci1ob3Zlcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5tZW51X2l0ZW0gaW1nIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgLyogbWF4LXdpZHRoOiAzMDBweDsgKi9cXG4gIG1heC1oZWlnaHQ6IDE4MHB4O1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuLm1lbnVfaXRlbSBpbWcucGl6emEge1xcbiAgd2lkdGg6IDM2MHB4O1xcbiAgbWF4LWhlaWdodDogMjUwcHg7XFxuICBtYXJnaW4tdG9wOiAtMjBweDtcXG59XFxuXFxuLm1lbnVfaXRlbSBkaXYuaXRlbV9uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG4ubWVudV9pdGVtIGRpdi5pdGVtX3ByaWNlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubWVudV9pdGVtIC5hcHByb3ZlZF9sb2dvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLyogKioqKioqKioqKiogKi9cXG4vKiBTYXVjZSBJdGVtcyAqL1xcbi8qICoqKioqKioqKioqICovXFxuXFxuLm1lbnVfc2F1Y2VfaXRlbXMge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IC0xO1xcbn1cXG5cXG4ubWVudV9zYXVjZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGdhcDogNXJlbTtcXG59XFxuXFxuLnNhdWNlX2l0ZW0ge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgYm9yZGVyOiA0cHggc29saWQgeWVsbG93OyAqL1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIHBhZGRpbmc6IHZhcigtLW1lbnUtaXRlbS1wYWRkaW5nKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1tZW51LWl0ZW0tcGFkZGluZyk7XFxuICAvKiBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWN1c3RvbV9hcnRpY2xlX2JsdWVfY29sb3IpOyAqL1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2VuZXJpYy1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLnNhdWNlX2l0ZW06aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWdvbGQtY29sb3ItaG92ZXIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4uc2F1Y2VfaXRlbSBpbWcge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogMTAwcHg7XFxuICBtYXgtaGVpZ2h0OiAxMjBweDtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi5zYXVjZV9pdGVtIGRpdi5zYXVjZV9uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbWFyZ2luLXRvcDogLTEuMnJlbTtcXG59XFxuLnNhdWNlX2l0ZW0gZGl2LnNhdWNlX25hbWU6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWdvbGQtY29sb3ItaG92ZXIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21lbnUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLDZCQUE2QjtFQUM3Qiw2QkFBNkI7O0VBRTdCLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QyxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseURBQXdEO0VBQ3hELDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLDRCQUE0Qjs7RUFFNUIsaURBQWlEO0FBQ25EOztBQUVBLGVBQWU7QUFDZixlQUFlO0FBQ2YsZUFBZTs7QUFFZjtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsV0FBVzs7RUFFWCw0REFBNEQ7RUFDNUQscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsaUNBQWlDO0VBQ2pDLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsa0JBQWtCOztFQUVsQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLCtDQUErQztFQUMvQyxxQkFBcUI7RUFDckIsaUNBQWlDO0VBQ2pDLHdDQUF3QztFQUN4QywyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0NBQWdDO0FBQ2xDOztBQUVBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsZ0JBQWdCOztBQUVoQjtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRTs2QkFDMkI7RUFDM0IsdUJBQXVCOztFQUV2QixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLDJDQUEyQztFQUMzQyxxQkFBcUI7RUFDckIsbUJBQW1COztFQUVuQixpQ0FBaUM7RUFDakMsd0NBQXdDO0VBQ3hDLDZEQUE2RDtFQUM3RCwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tbWVudS1pdGVtLXBhZGRpbmc6IDhweDtcXG4gIC0tZ2VuZXJpYy1ib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgLS1tZW51LW1haW4tY29udGVudC1nYXA6IDRyZW07XFxuXFxuICAtLWdvbGQtY29sb3I6ICNjYThhMDQ7XFxuICAtLWdvbGQtY29sb3ItaG92ZXI6ICNlYWIzMDg7XFxuICAtLXdoaXRlLWNvbG9yOiAjZThlNmUzO1xcbiAgLS1ib3JkZXJfY29sb3JfZ3JleTogIzg1ODU4NTtcXG4gIC0tYm9yZGVyX3JhZGl1czogMTBweDtcXG59XFxuXFxuaDIsXFxuaDMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbmgyIHtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tbWVudS1tYWluLWNvbnRlbnQtZ2FwKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuaDMge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy93b29kZW5fcGxhdGUuanBnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG5cXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDUwMDBweCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi8qICoqKioqKioqKiogKi9cXG4vKiBNZW51IEl0ZW1zICovXFxuLyogKioqKioqKioqKiAqL1xcblxcbi5tZW51X2l0ZW1zX2NvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogOTB2dztcXG5cXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAzZnIpKTtcXG4gIGdyaWQtYXV0by1yb3dzOiAyNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigpO1xcbiAgLyogYm9yZGVyOiA0cHggc29saWQgcGluazsgKi9cXG4gIGdhcDogdmFyKC0tbWVudS1tYWluLWNvbnRlbnQtZ2FwKTtcXG4gIHBhZGRpbmc6IDAgdmFyKC0tbWVudS1tYWluLWNvbnRlbnQtZ2FwKTtcXG59XFxuXFxuLm1lbnVfaXRlbSB7XFxuICAvKiBib3JkZXI6IDRweCBzb2xpZCB5ZWxsb3c7ICovXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tbWVudS1pdGVtLXBhZGRpbmcpO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLW1lbnUtaXRlbS1wYWRkaW5nKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWdlbmVyaWMtYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5tZW51X2l0ZW06aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWdvbGQtY29sb3ItaG92ZXIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ubWVudV9pdGVtIGltZyB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIC8qIG1heC13aWR0aDogMzAwcHg7ICovXFxuICBtYXgtaGVpZ2h0OiAxODBweDtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi5tZW51X2l0ZW0gaW1nLnBpenphIHtcXG4gIHdpZHRoOiAzNjBweDtcXG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xcbiAgbWFyZ2luLXRvcDogLTIwcHg7XFxufVxcblxcbi5tZW51X2l0ZW0gZGl2Lml0ZW1fbmFtZSB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuLm1lbnVfaXRlbSBkaXYuaXRlbV9wcmljZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLm1lbnVfaXRlbSAuYXBwcm92ZWRfbG9nbyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi8qICoqKioqKioqKioqICovXFxuLyogU2F1Y2UgSXRlbXMgKi9cXG4vKiAqKioqKioqKioqKiAqL1xcblxcbi5tZW51X3NhdWNlX2l0ZW1zIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAtMTtcXG59XFxuXFxuLm1lbnVfc2F1Y2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBnYXA6IDVyZW07XFxufVxcblxcbi5zYXVjZV9pdGVtIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHllbGxvdzsgKi9cXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBwYWRkaW5nOiB2YXIoLS1tZW51LWl0ZW0tcGFkZGluZyk7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tbWVudS1pdGVtLXBhZGRpbmcpO1xcbiAgLyogYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1jdXN0b21fYXJ0aWNsZV9ibHVlX2NvbG9yKTsgKi9cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWdlbmVyaWMtYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5zYXVjZV9pdGVtOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1nb2xkLWNvbG9yLWhvdmVyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnNhdWNlX2l0ZW0gaW1nIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgbWF4LWhlaWdodDogMTIwcHg7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4uc2F1Y2VfaXRlbSBkaXYuc2F1Y2VfbmFtZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbi10b3A6IC0xLjJyZW07XFxufVxcbi5zYXVjZV9pdGVtIGRpdi5zYXVjZV9uYW1lOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1nb2xkLWNvbG9yLWhvdmVyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvTGlicmVfQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9MaWJyZV9CYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlLUl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvTGlicmVfQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZF9pbWFnZXMvYmFja2dyb3VuZF8xLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGlicmVfQmFza2VydmlsbGVcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XFxuICAtLWdvbGQtY29sb3I6ICNjYThhMDQ7XFxuICAtLWdvbGQtY29sb3ItaG92ZXI6ICNlYWIzMDg7XFxuICAtLXdoaXRlLWNvbG9yOiAjZThlNmUzO1xcbiAgLS1ib3JkZXJfY29sb3JfZ3JleTogIzg1ODU4NTtcXG4gIC0tYm9yZGVyX3JhZGl1czogMTBweDtcXG4gIC0tZm9ybV9ib3JkZXI6IDJweCB2YXIoLS1ib3JkZXJfY29sb3JfZ3JleSkgc29saWQ7XFxuICBmb250LWZhbWlseTogXFxcIkxpYnJlX0Jhc2tlcnZpbGxlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uZmlyc3RfYmxvY2tfbWFpbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxMDAwcHggcmdiYSgwLCAwLCAwLCAwLjgpO1xcblxcbiAgLyogYm94LXNoYWRvdzogaW5zZXQgMCAwIDk5OTk5cHggcmdiYSgwLCAxMjAsIDI1NSwgMSk7ICovXFxufVxcblxcbi8qICoqKioqKiAqL1xcbi8qIEhlYWRlciAqL1xcbi8qICoqKioqKiAqL1xcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaGVhZGVyX2xlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlcl9sZWZ0IC5yZXN0YXVyYW50X25hbWUge1xcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi5oZWFkZXIgaW1nIHtcXG4gIGhlaWdodDogNHJlbTtcXG4gIG1hcmdpbi10b3A6IC0wLjdyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbkBrZXlmcmFtZXMgdGlsdC1uLW1vdmUtc2hha2luZyB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgNXB4KSByb3RhdGUoNWRlZyk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoMGVnKTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDVweCkgcm90YXRlKC01ZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoMGRlZyk7XFxuICB9XFxufVxcbi5oZWFkZXIgaW1nOmhvdmVyIHtcXG4gIGhlaWdodDogNHJlbTtcXG4gIG1hcmdpbi10b3A6IC0wLjdyZW07XFxuICBhbmltYXRpb246IHRpbHQtbi1tb3ZlLXNoYWtpbmcgMC4yNXMgaW5maW5pdGU7XFxufVxcblxcbi5oZWFkZXJfcmlnaHQgYSB7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1nb2xkLWNvbG9yKTtcXG59XFxuLmhlYWRlcl9yaWdodCBhOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGNvbG9yOiB2YXIoLS1nb2xkLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLyogZmlyc3QgYmxvY2sgY29udGVudCAqL1xcblxcbi5maXJzdF9ibG9ja19jb250ZW50IHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmZpcnN0X2Jsb2NrX2NvbnRlbnQgLnJlc3RhdXJhbnRfc2xvZ2FuIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG4uZmlyc3RfYmxvY2tfY29udGVudCBpbWcge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAtMTIwcHg7XFxufVxcblxcbi5maXJzdF9ibG9ja19jb250ZW50IGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdmFyKC0tZm9udF9jb2xvcl93aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlcl9yYWRpdXMpO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxNHB4IGJsYWNrO1xcbn1cXG4uZmlyc3RfYmxvY2tfY29udGVudCBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZC1jb2xvci1ob3Zlcik7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdDQUFnQztFQUNoQzs7MkNBRXVFO0VBQ3ZFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixpREFBaUQ7RUFDakQsNENBQTRDO0VBQzVDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixnREFBZ0Q7RUFDaEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7O0VBRTlCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLHlEQUEyRTtFQUMzRSxpREFBaUQ7O0VBRWpELHdEQUF3RDtBQUMxRDs7QUFFQSxXQUFXO0FBQ1gsV0FBVztBQUNYLFdBQVc7O0FBRVg7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRTtJQUNFLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UsMkNBQTJDO0VBQzdDO0VBQ0E7SUFDRSxzQ0FBc0M7RUFDeEM7RUFDQTtJQUNFLDZDQUE2QztFQUMvQztFQUNBO0lBQ0UsdUNBQXVDO0VBQ3pDO0FBQ0Y7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQzs7QUFFQSx3QkFBd0I7O0FBRXhCO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixtQ0FBbUM7RUFDbkMsbUNBQW1DO0VBQ25DLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQix5Q0FBeUM7QUFDM0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkxpYnJlX0Jhc2tlcnZpbGxlXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvTGlicmVfQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZS1Cb2xkLnR0ZlxcXCIpLFxcbiAgICB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9MaWJyZV9CYXNrZXJ2aWxsZS9MaWJyZUJhc2tlcnZpbGxlLUl0YWxpYy50dGZcXFwiKSxcXG4gICAgdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvTGlicmVfQmFza2VydmlsbGUvTGlicmVCYXNrZXJ2aWxsZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XFxuICAtLWdvbGQtY29sb3I6ICNjYThhMDQ7XFxuICAtLWdvbGQtY29sb3ItaG92ZXI6ICNlYWIzMDg7XFxuICAtLXdoaXRlLWNvbG9yOiAjZThlNmUzO1xcbiAgLS1ib3JkZXJfY29sb3JfZ3JleTogIzg1ODU4NTtcXG4gIC0tYm9yZGVyX3JhZGl1czogMTBweDtcXG4gIC0tZm9ybV9ib3JkZXI6IDJweCB2YXIoLS1ib3JkZXJfY29sb3JfZ3JleSkgc29saWQ7XFxuICBmb250LWZhbWlseTogXFxcIkxpYnJlX0Jhc2tlcnZpbGxlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uZmlyc3RfYmxvY2tfbWFpbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRfaW1hZ2VzL2JhY2tncm91bmRfMS5qcGVnKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDEwMDBweCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuXFxuICAvKiBib3gtc2hhZG93OiBpbnNldCAwIDAgOTk5OTlweCByZ2JhKDAsIDEyMCwgMjU1LCAxKTsgKi9cXG59XFxuXFxuLyogKioqKioqICovXFxuLyogSGVhZGVyICovXFxuLyogKioqKioqICovXFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5oZWFkZXJfbGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyX2xlZnQgLnJlc3RhdXJhbnRfbmFtZSB7XFxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLmhlYWRlciBpbWcge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgbWFyZ2luLXRvcDogLTAuN3JlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuQGtleWZyYW1lcyB0aWx0LW4tbW92ZS1zaGFraW5nIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCA1cHgpIHJvdGF0ZSg1ZGVnKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgwZWcpO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgNXB4KSByb3RhdGUoLTVkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG59XFxuLmhlYWRlciBpbWc6aG92ZXIge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgbWFyZ2luLXRvcDogLTAuN3JlbTtcXG4gIGFuaW1hdGlvbjogdGlsdC1uLW1vdmUtc2hha2luZyAwLjI1cyBpbmZpbml0ZTtcXG59XFxuXFxuLmhlYWRlcl9yaWdodCBhIHtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgY29sb3I6IHZhcigtLWdvbGQtY29sb3IpO1xcbn1cXG4uaGVhZGVyX3JpZ2h0IGE6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgY29sb3I6IHZhcigtLWdvbGQtY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4vKiBmaXJzdCBibG9jayBjb250ZW50ICovXFxuXFxuLmZpcnN0X2Jsb2NrX2NvbnRlbnQge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZmlyc3RfYmxvY2tfY29udGVudCAucmVzdGF1cmFudF9zbG9nYW4ge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcbi5maXJzdF9ibG9ja19jb250ZW50IGltZyB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IC0xMjBweDtcXG59XFxuXFxuLmZpcnN0X2Jsb2NrX2NvbnRlbnQgYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1mb250X2NvbG9yX3doaXRlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyX3JhZGl1cyk7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDE0cHggYmxhY2s7XFxufVxcbi5maXJzdF9ibG9ja19jb250ZW50IGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkLWNvbG9yLWhvdmVyKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBmZXNfbG9nbyBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2Zlc19sb2dvLnBuZ1wiO1xuaW1wb3J0IHR1cmtpc2hfY2hlZiBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3R1cmtpc2hfY2hlZi5wbmdcIjtcbmltcG9ydCBiYWNrZ3JvdW5kXzEgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kX2ltYWdlcy9iYWNrZ3JvdW5kXzEuanBlZ1wiO1xuaW1wb3J0IGJhY2tncm91bmRfMiBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRfaW1hZ2VzL2JhY2tncm91bmRfMi5qcGVnXCI7XG5pbXBvcnQgYmFja2dyb3VuZF8zIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZF9pbWFnZXMvYmFja2dyb3VuZF8zLmpwZWdcIjtcbmltcG9ydCBiYWNrZ3JvdW5kXzQgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kX2ltYWdlcy9iYWNrZ3JvdW5kXzQuanBlZ1wiO1xuaW1wb3J0IGJhY2tncm91bmRfNSBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRfaW1hZ2VzL2JhY2tncm91bmRfNS5qcGVnXCI7XG5cbmNvbnNvbGUubG9nKFwiaGFsbG8gZnJvbSBob21lLmpzXCIpO1xuXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgKGZ1bmN0aW9uIGNyZWF0ZUhlYWRlckxlZnQoKSB7XG4gICAgY29uc3QgaGVhZGVyX2xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlcl9sZWZ0LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJfbGVmdFwiKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX2xlZnQpO1xuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWcuY2xhc3NMaXN0LmFkZChcIi5oZWFkZXJfbG9nb1wiKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGZlc19sb2dvKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiaGVhZGVyIGxvZ29cIik7XG4gICAgaGVhZGVyX2xlZnQuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbG9jYXRpb24uaHJlZiA9IFwiLi9pbmRleC5odG1sXCI7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmVzdGF1cmFudE5hbWUuY2xhc3NMaXN0LmFkZChcInJlc3RhdXJhbnRfbmFtZVwiKTtcbiAgICByZXN0YXVyYW50TmFtZS5pbm5lckhUTUwgPSBcIlBBU0hBIERPTkVSIFwiO1xuICAgIGhlYWRlcl9sZWZ0LmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcbiAgfSkoKTtcblxuICAoZnVuY3Rpb24gY3JlYXRlSGVhZGVyUmlndGgoKSB7XG4gICAgY29uc3QgaGVhZGVyX3JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJfcmlnaHQuY2xhc3NMaXN0LmFkZChcImhlYWRlcl9yaWdodFwiKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX3JpZ2h0KTtcblxuICAgIGNvbnN0IGxpbmtfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmtfMS5pbm5lckhUTUwgPSBcIkhvbWVcIjtcbiAgICBsaW5rXzEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIi4vaW5kZXguaHRtbFwiKTtcbiAgICBoZWFkZXJfcmlnaHQuYXBwZW5kQ2hpbGQobGlua18xKTtcblxuICAgIGNvbnN0IGxpbmtfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmtfMi5pbm5lckhUTUwgPSBcIk1lbnVcIjtcbiAgICBsaW5rXzIuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIi4vbWVudS5odG1sXCIpO1xuICAgIGhlYWRlcl9yaWdodC5hcHBlbmRDaGlsZChsaW5rXzIpO1xuXG4gICAgY29uc3QgbGlua18zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGlua18zLmlubmVySFRNTCA9IFwiQ29udGFjdFwiO1xuICAgIGxpbmtfMy5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiLi9jb250YWN0Lmh0bWxcIik7XG4gICAgaGVhZGVyX3JpZ2h0LmFwcGVuZENoaWxkKGxpbmtfMyk7XG4gIH0pKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnRCbG9jaygpIHtcbiAgY29uc3QgY29udGVudEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudEJsb2NrLmNsYXNzTGlzdC5hZGQoXCJmaXJzdF9ibG9ja19jb250ZW50XCIpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRCbG9jayk7XG5cbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCB0dXJraXNoX2NoZWYpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwicmVzdGF1cmFudCBsb2dvXCIpO1xuICBjb250ZW50QmxvY2suYXBwZW5kQ2hpbGQoaW1nKTtcblxuICBjb25zdCByZXN0YXVyYW50U2xvZ2FuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmVzdGF1cmFudFNsb2dhbi5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudF9zbG9nYW5cIik7XG4gIHJlc3RhdXJhbnRTbG9nYW4uaW5uZXJIVE1MID0gXCJCZXN0IFR1cmtpc2ggRm9vZCBpbiBUb3duXCI7XG4gIGNvbnRlbnRCbG9jay5hcHBlbmRDaGlsZChyZXN0YXVyYW50U2xvZ2FuKTtcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uaW5uZXJIVE1MID0gXCJDaGVjayBvdXIgc2VsZWN0aW9uIVwiO1xuICBjb250ZW50QmxvY2suYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2NhdGlvbi5ocmVmID0gXCIuL21lbnUuaHRtbFwiO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlSW1hZ2VBbmRNZXNzYWdlKCkge1xuICBjb25zdCBiYWNrZ3JvdW5kRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlyc3RfYmxvY2tfbWFpblwiKTtcbiAgY29uc3QgcmVzdGF1cmFudFNsb2dhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9zbG9nYW5cIik7XG5cbiAgY29uc3QgcmVzdGF1cmFudFNsb2dhblRleHRzID0ge1xuICAgIHRleHRfMTogXCJCZXN0IFR1cmtpc2ggRm9vZCBpbiBUb3duXCIsXG4gICAgdGV4dF8yOiBcIkF1dGhlbnRpYyBTYXVjZXNcIixcbiAgICB0ZXh0XzM6IFwiTm8gYWRkaXRpb24sIG9ubHkgTWVhdFwiLFxuICAgIHRleHRfNDogXCJFbGl0ZSBBbWJpYW5jZVwiLFxuICAgIHRleHRfNTogXCJEYWlseSBGcmVzaCBTYWxhZFwiLFxuICB9O1xuXG4gIGxldCBudW1iZXIgPSAyO1xuXG4gIGZ1bmN0aW9uIGNoYW5nZUZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG15QmFja2dyb3VuZHMgPSB7XG4gICAgICBteUJhY2tncm91bmQxOiBiYWNrZ3JvdW5kXzEsXG4gICAgICBteUJhY2tncm91bmQyOiBiYWNrZ3JvdW5kXzIsXG4gICAgICBteUJhY2tncm91bmQzOiBiYWNrZ3JvdW5kXzMsXG4gICAgICBteUJhY2tncm91bmQ0OiBiYWNrZ3JvdW5kXzQsXG4gICAgICBteUJhY2tncm91bmQ1OiBiYWNrZ3JvdW5kXzUsXG4gICAgfTtcblxuICAgIHJlc3RhdXJhbnRTbG9nYW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHJlc3RhdXJhbnRTbG9nYW4uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgIHJlc3RhdXJhbnRTbG9nYW4uc3R5bGUudHJhbnNpdGlvbiA9IFwiMG1zXCI7XG5cbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gYHRleHRfJHtudW1iZXJ9YDtcbiAgICByZXN0YXVyYW50U2xvZ2FuLnRleHRDb250ZW50ID0gcmVzdGF1cmFudFNsb2dhblRleHRzW3NlbGVjdGVkVGV4dF07XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXN0YXVyYW50U2xvZ2FuLnN0eWxlLnRyYW5zaXRpb24gPSBcIjIwMDBtc1wiO1xuICAgICAgcmVzdGF1cmFudFNsb2dhbi5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgfSwgMik7XG5cbiAgICBiYWNrZ3JvdW5kRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCIxMjAwbXNcIjtcbiAgICBsZXQgc2VsZWN0ZWRCYWNrZ3JvdW5kID0gbXlCYWNrZ3JvdW5kc1tgbXlCYWNrZ3JvdW5kJHtudW1iZXJ9YF07XG4gICAgYmFja2dyb3VuZEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3NlbGVjdGVkQmFja2dyb3VuZH0pYDtcblxuICAgIG51bWJlcisrO1xuICAgIGlmIChudW1iZXIgPiA1KSB7XG4gICAgICBudW1iZXIgPSAxO1xuICAgIH1cbiAgfVxuXG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBjaGFuZ2VGdW5jdGlvbigpO1xuICB9LCA3MDAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuICBjcmVhdGVIZWFkZXIoKTtcbiAgY3JlYXRlQ29udGVudEJsb2NrKCk7XG4gIGNoYW5nZUltYWdlQW5kTWVzc2FnZSgpO1xufVxuIiwiaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvbWVudS5jc3NcIjtcblxuaW1wb3J0IG1lbnVfZG9uZXIgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9tZW51X2ltYWdlcy9tZW51X2RvbmVyLnBuZ1wiO1xuaW1wb3J0IG1lbnVfZHVydW0gZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9tZW51X2ltYWdlcy9tZW51X2R1cnVtLnBuZ1wiO1xuaW1wb3J0IG1lbnVfZG9uZXJfYm94IGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvbWVudV9pbWFnZXMvbWVudV9kb25lcl9ib3gucG5nXCI7XG5pbXBvcnQgbWVudV9sYWhtYWN1bl9kdXJ1bSBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL21lbnVfaW1hZ2VzL21lbnVfbGFobWFjdW5fZHVydW0ucG5nXCI7XG5pbXBvcnQgbWVudV9kb25lcl90ZWxsZXIgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9tZW51X2ltYWdlcy9tZW51X2RvbmVyX3RlbGxlci5wbmdcIjtcbmltcG9ydCBtZW51X2RvbmVyX3BpenphIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvbWVudV9pbWFnZXMvbWVudV9kb25lcl9waXp6YS5wbmdcIjtcbmltcG9ydCBzYXVjZV9nYXJsaWMgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9tZW51X2ltYWdlcy9zYXVjZV9nYXJsaWMucG5nXCI7XG5pbXBvcnQgc2F1Y2VfaG90IGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvbWVudV9pbWFnZXMvc2F1Y2VfaG90LnBuZ1wiO1xuaW1wb3J0IGFwcHJvdmVkX2xvZ28gZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9hcHByb3ZlZF9sb2dvLmpwZWdcIjtcblxuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuXG4vLyBjb25zb2xlLmxvZyhcImhhbGxvIGZyb20gbWVudS5qc1wiKTtcbi8vIGNvbnNvbGUubG9nKFwiMmhhbGxvIGZyb20gbWVudS5qc1wiKTtcblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudV9tYWluX2NvbnRhaW5lclwiKTtcblxuZnVuY3Rpb24gY3JlYXRlTWVudUNvbnRlbnQoKSB7XG4gIGZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKHNyYywgaXRlbV9uYW1lLCBpdGVtX3ByaWNlKSB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51X2l0ZW1cIik7XG4gICAgbWVudUl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJpdGVtX3Bob3RvXCIpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJpdGVtIHBob3RvXCIpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYCR7c3JjfWApO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZChcIml0ZW1fbmFtZVwiKTtcbiAgICBpdGVtTmFtZS5pbm5lckhUTUwgPSBpdGVtX25hbWU7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuXG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtUHJpY2UuY2xhc3NMaXN0LmFkZChcIml0ZW1fcHJpY2VcIik7XG4gICAgaXRlbVByaWNlLmlubmVySFRNTCA9IGl0ZW1fcHJpY2U7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcblxuICAgIG1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKG1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYXBwcm92ZWRfbG9nb1wiKSkge1xuICAgICAgICBtZW51SXRlbS5xdWVyeVNlbGVjdG9yKFwiLmFwcHJvdmVkX2xvZ29cIikucmVtb3ZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhcHByb3ZlZExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBhcHByb3ZlZExvZ28uY2xhc3NMaXN0LmFkZChcImFwcHJvdmVkX2xvZ29cIik7XG4gICAgICAgIGFwcHJvdmVkTG9nby5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJhcHByb3ZlZCBsb2dvXCIpO1xuICAgICAgICBhcHByb3ZlZExvZ28uc2V0QXR0cmlidXRlKFwic3JjXCIsIGAke2FwcHJvdmVkX2xvZ299YCk7XG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGFwcHJvdmVkTG9nbyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTYXVjZUl0ZW0oc3JjLCBzYXVjZV9uYW1lKSB7XG4gICAgY29uc3Qgc2F1Y2VJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzYXVjZUl0ZW0uY2xhc3NMaXN0LmFkZChcInNhdWNlX2l0ZW1cIik7XG4gICAgbWVudVNhdWNlcy5hcHBlbmRDaGlsZChzYXVjZUl0ZW0pO1xuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwic2F1Y2UgaXRlbVwiKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGAke3NyY31gKTtcbiAgICBzYXVjZUl0ZW0uYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIGNvbnN0IHNhdWNlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2F1Y2VOYW1lLmNsYXNzTGlzdC5hZGQoXCJzYXVjZV9uYW1lXCIpO1xuICAgIHNhdWNlTmFtZS5pbm5lckhUTUwgPSBzYXVjZV9uYW1lO1xuICAgIHNhdWNlSXRlbS5hcHBlbmRDaGlsZChzYXVjZU5hbWUpO1xuICB9XG5cbiAgY29uc3QgaDJfZMO2bmVyVmFyaWFudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGgyX2TDtm5lclZhcmlhbnRzLmlubmVySFRNTCA9IFwiRMO2bmVyIFZhcmlhbnRzXCI7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaDJfZMO2bmVyVmFyaWFudHMpO1xuXG4gIGNvbnN0IG1lbnVJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVJdGVtc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudV9pdGVtc19jb250YWluZXJcIik7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1zQ29udGFpbmVyKTtcblxuICAvLyBjcmVhdGluZyBNZW51IEl0ZW1zXG4gIC8vIGltZywgbmFtZSBhbmQgcHJpY2VcbiAgY29uc3QgbWVudUl0ZW1zQXJyYXkgPSBbXG4gICAgW21lbnVfZG9uZXIsIFwiRMO2bmVyXCIsIFwiNuKCrFwiXSxcbiAgICBbbWVudV9kdXJ1bSwgXCJEw7xyw7xtXCIsIFwiN+KCrFwiXSxcbiAgICBbbWVudV9kb25lcl9ib3gsIFwiRMO2bmVyIEJveFwiLCBcIjbigqxcIl0sXG4gICAgW21lbnVfbGFobWFjdW5fZHVydW0sIFwiTGFobWFjdW4gRMO8csO8bVwiLCBcIjfigqxcIl0sXG4gICAgW21lbnVfZG9uZXJfdGVsbGVyLCBcIkTDtm5lciBUZWxsZXJcIiwgXCIxMeKCrFwiXSxcbiAgICBbbWVudV9kb25lcl9waXp6YSwgXCJQaXp6YSBEw7ZuZXJcIiwgXCI54oKsXCJdLFxuICBdO1xuXG4gIG1lbnVJdGVtc0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjcmVhdGVNZW51SXRlbSguLi5lbGVtZW50KTtcbiAgfSk7XG5cbiAgY29uc3QgbWVudVNhdWNlSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51U2F1Y2VJdGVtcy5jbGFzc0xpc3QuYWRkKFwibWVudV9zYXVjZV9pdGVtc1wiKTtcbiAgbWVudUl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVTYXVjZUl0ZW1zKTtcblxuICBjb25zdCBoM19vdXJTYXVjZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGgzX291clNhdWNlcy5pbm5lckhUTUwgPSBcIk91ciBzYXVjZXNcIjtcbiAgbWVudVNhdWNlSXRlbXMuYXBwZW5kQ2hpbGQoaDNfb3VyU2F1Y2VzKTtcblxuICBjb25zdCBtZW51U2F1Y2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudVNhdWNlcy5jbGFzc0xpc3QuYWRkKFwibWVudV9zYXVjZXNcIik7XG4gIG1lbnVTYXVjZUl0ZW1zLmFwcGVuZENoaWxkKG1lbnVTYXVjZXMpO1xuXG4gIC8vIGNyZWF0aW5nIFNhdWNlIEl0ZW1zXG4gIC8vIGltZyBhbmQgbmFtZVxuICBjb25zdCBtZW51U2F1Y2VzQXJyYXkgPSBbXG4gICAgW3NhdWNlX2dhcmxpYywgXCJHYXJsaWNcIl0sXG4gICAgW3NhdWNlX2hvdCwgXCJTcGljeVwiXSxcbiAgXTtcblxuICBtZW51U2F1Y2VzQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNyZWF0ZVNhdWNlSXRlbSguLi5lbGVtZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCkge1xuICBjcmVhdGVIZWFkZXIoKTtcbiAgY3JlYXRlTWVudUNvbnRlbnQoKTtcbn1cblxuY3JlYXRlTWVudVBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==