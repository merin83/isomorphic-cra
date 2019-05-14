exports.id = "main";
exports.modules = {

/***/ "./src/screens/Home.js":
/*!*****************************!*\
  !*** ./src/screens/Home.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_withSSR__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/withSSR */ \"./src/components/withSSR.js\");\nvar _jsxFileName = \"/Users/merin/codes/cra-universal-myapp/src/screens/Home.js\";\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  static getInitialData({\n    match,\n    req,\n    res\n  }) {\n    return new Promise((resolve, reject) => {\n      setTimeout(() => {\n        resolve({\n          article: `\n    This text is ALSO server rendered if and only if it's the initial render.\n              `,\n          currentRoute: match.pathname\n        });\n      }, 500);\n    });\n  }\n\n  render() {\n    console.log(this.props, 'hey props'); // const { isLoading, article, error } = this.props;\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23\n      }\n    }, \"Home\"), isLoading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24\n      }\n    }, \"Loading from client...\"), error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25\n      }\n    }, JSON.stringify(error, null, 2)), article && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26\n      }\n    }, article));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_components_withSSR__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Home));\n\n//# sourceURL=webpack:///./src/screens/Home.js?");

/***/ })

};