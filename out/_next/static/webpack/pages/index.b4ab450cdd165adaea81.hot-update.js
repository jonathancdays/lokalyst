webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/list.js":
/*!********************************!*\
  !*** ./src/components/list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\list.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function List(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      parentStyle = _ref.parentStyle,
      childStyle = _ref.childStyle;
  return __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }, "List");
}
_c = List;
var styles = {
  listIcon: {
    width: ["25px", "35px"],
    height: "auto",
    color: "primary",
    padding: 0,
    fontSize: [3, 5],
    ml: "-1px",
    flexShrink: 0,
    justifyContent: "flex-start",
    mt: "2px"
  }
};

var _c;

$RefreshReg$(_c, "List");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/price-card.js":
/*!**************************************!*\
  !*** ./src/components/price-card.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PriceCard; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/components/list.js");
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\price-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function PriceCard(_ref) {
  var _ref$data = _ref.data,
      header = _ref$data.header,
      name = _ref$data.name,
      description = _ref$data.description,
      priceWithUnit = _ref$data.priceWithUnit,
      _ref$data$buttonText = _ref$data.buttonText,
      buttonText = _ref$data$buttonText === void 0 ? "Start Free Trial" : _ref$data$buttonText,
      anotherOption = _ref$data.anotherOption,
      points = _ref$data.points;
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    className: header ? 'package__card active' : 'package__card',
    sx: styles.pricingBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, header && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    sx: styles.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 18
    }
  }, header), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: "package__header",
    sx: styles.pricingHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    className: "package__name",
    variant: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, name))));
}
_c = PriceCard;
var styles = {
  pricingBox: {
    borderRadius: 20,
    position: "relative",
    transition: "all 0.3s",
    p: ["35px 25px", null, null, "40px"],
    width: ["100%", "75%", "100%"],
    mb: "40px",
    mt: "40px",
    mx: [0, "auto", 0],
    "&:before": {
      position: "absolute",
      content: "''",
      width: "100%",
      top: 0,
      left: 0,
      height: "100%",
      border: "1px solid rgba(38, 78, 118, 0.1)",
      borderRadius: "inherit",
      transition: "all 0.3s",
      zIndex: -1
    },
    "&:hover": {
      boxShadow: "0px 4px 25px rgba(38, 78, 118, 0.1) !important",
      "&:before": {
        opacity: 0
      }
    }
  },
  header: {
    height: ["28px", null, null, "32px"],
    backgroundColor: "yellow",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: 1,
    lineHeight: 1.2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    position: "absolute",
    top: "-17px",
    letterSpacing: "-.14px",
    px: "12px"
  },
  pricingHeader: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    mb: ["30px", null, null, null, "40px"],
    p: {
      fontSize: [1, 2],
      color: "text",
      lineHeight: "heading"
    },
    ".package__name": {
      marginBottom: [1, null, 2]
    }
  },
  price: {
    fontWeight: 500,
    fontSize: [4, null, 5, null, "30px"],
    lineHeight: 1,
    letterSpacing: "-0.55px",
    color: "text",
    marginBottom: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pt: [4, 6],
    "> span": {
      position: "relative",
      pl: "3px",
      display: "inline-block",
      fontSize: [1, 2],
      fontWeight: "normal"
    }
  },
  listItem: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: [1, 2],
    lineHeight: [1.75, 1.6],
    mb: 3,
    alignItems: "flex-start",
    color: "text",
    "&.closed": {
      opacity: 0.55,
      button: {
        color: "#788FB5"
      }
    }
  },
  buttonGroup: {
    textAlign: "center",
    mt: ["30px", null, null, null, "35px"],
    ".free__trail": {
      color: "secondary",
      width: "100%",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: ["14px", 1],
      p: "20px 0 0"
    }
  }
};

var _c;

$RefreshReg$(_c, "PriceCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/sections/package.js":
/*!*********************************!*\
  !*** ./src/sections/package.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Package; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_price_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/price-card */ "./src/components/price-card.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");



var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\sections\\package.js",
    _s = $RefreshSig$(),
    _templateObject,
    _templateObject2;

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

/** @jsx jsx */








var packages = {
  monthly: [{
    id: 1,
    name: 'Basic Plan',
    description: 'For small teams or office',
    buttonText: 'Get A Proposal',
    priceWithUnit: '$1,000',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }
      }),
      text: '100 keyphrases optimized',
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }
      }),
      text: "20 pages optimized",
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }
      }),
      text: '4.5 content, outreach, UX, or CRO assets per quarter',
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCloseCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }
      }),
      text: '4 custom dashboards',
      isAvailable: true
    }]
  }, {
    id: 2,
    name: 'Corporate Plan',
    description: 'For medium-sized business.',
    priceWithUnit: '$2,500',
    buttonText: 'Create account',
    anotherOption: 'Or Start 14 Days trail',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }),
      text: '150 keyphrases optimized',
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }
      }),
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }
      }),
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }),
      text: 'eCommerce Store ',
      isAvailable: true
    }]
  }, {
    id: 3,
    header: 'Suggested',
    headerIcon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 19
      }
    }),
    name: 'Enterprise Plan',
    description: 'For international businesses.',
    priceWithUnit: '$5,000',
    buttonText: 'Create account',
    anotherOption: 'Or Start 14 Days trail',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }
      }),
      text: 'Drag & Drop Builder',
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }
      }),
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 17
        }
      }),
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 17
        }
      }),
      text: 'eCommerce Store ',
      isAvailable: true
    }]
  }],
  annual: [{
    id: 1,
    name: 'Free Plan',
    description: 'For Small teams or office',
    buttonText: 'Start free trail',
    priceWithUnit: '$0',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 17
        }
      }),
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 17
        }
      }),
      text: 'Drag & Drop Builder',
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 17
        }
      }),
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCloseCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 17
        }
      }),
      text: 'eCommerce Store ',
      isAvailable: true
    }]
  }, {
    id: 2,
    name: 'Business king',
    description: 'For Enterprise business',
    priceWithUnit: '$25',
    buttonText: 'Create account',
    anotherOption: 'Or Start 10 Days trail',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 17
        }
      }),
      text: 'eCommerce Store',
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 17
        }
      }),
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 17
        }
      }),
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 17
        }
      }),
      text: 'Drag & Drop Builder ',
      isAvailable: true
    }]
  }, {
    id: 3,
    header: 'Suggested',
    headerIcon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 19
      }
    }),
    name: 'Pro Master',
    description: 'For pro level developers',
    priceWithUnit: '$39',
    buttonText: 'Create account',
    anotherOption: 'Or Start 10 Days trail',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 17
        }
      }),
      text: 'eCommerce Store',
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 17
        }
      }),
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 17
        }
      }),
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_9__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 17
        }
      }),
      text: 'Drag & Drop Builder ',
      isAvailable: true
    }]
  }]
};
var responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    draggable: false
  },
  tablet: {
    breakpoint: {
      max: 1023,
      min: 640
    },
    items: 2,
    draggable: true
  },
  mobile: {
    breakpoint: {
      max: 639,
      min: 0
    },
    items: 1,
    draggable: true
  }
};
function Package() {
  _s();

  var _this = this;

  var monthly = packages.monthly,
      annual = packages.annual;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    active: 'monthly',
    pricingPlan: monthly
  }),
      state = _useState[0],
      setState = _useState[1];

  var handlePricingPlan = function handlePricingPlan(plan) {
    if (plan === 'annual') {
      setState({
        active: 'annual',
        pricingPlan: annual
      });
    } else {
      setState({
        active: 'monthly',
        pricingPlan: monthly
      });
    }
  };

  var sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 24
      }
    }),
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: ''
  };
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("section", {
    id: "pricing",
    sx: {
      variant: 'section.pricing'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    slogan: "Payment Plan",
    title: "Choose your package",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    sx: styles.buttonGroup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.buttonGroupInner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("button", {
    className: state.active === 'monthly' ? 'active' : '',
    type: "button",
    "aria-label": "Monthly",
    onClick: function onClick() {
      return handlePricingPlan('monthly');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 13
    }
  }, "Monthly Plan"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("button", {
    className: state.active === 'monthly' ? 'active' : '',
    type: "button",
    "aria-label": "Annual",
    onClick: function onClick() {
      return handlePricingPlan('annual');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 13
    }
  }, "Annual Plan"))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.pricingWrapper,
    className: "pricing__wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, sliderParams, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 11
    }
  }), state.pricingPlan.map(function (packageData) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.pricingItem,
      key: packageData.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_price_card__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: packageData,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 17
      }
    }));
  })))));
}

_s(Package, "2VFeE+GI1Hr6Hi6xW+LFhrLJ6DE=");

_c = Package;
var fadeIn = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"])));
var fadeIn2 = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    transform: translateY(50%);\n    opacity: 0;\n  }\n  to {\n\t\ttransform: translateY(0);\n    opacity: 1;\n  }\n"])));
var styles = {
  pricingWrapper: {
    mb: '-40px',
    mt: '-40px',
    mx: -3,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: "".concat(fadeIn, " 0.8s ease-in")
      },
      'ul > li': {
        animation: "".concat(fadeIn2, " 0.7s ease-in")
      },
      '.package__price': {
        animation: "".concat(fadeIn2, " 0.9s ease-in")
      },
      button: {
        animation: "".concat(fadeIn2, " 1s ease-in")
      }
    },
    '.carousel-container': {
      width: '100%',
      '> ul > li ': {
        display: 'flex'
      }
    },
    '.button__group': {
      display: ['flex', null, null, null, 'none'],
      mb: [4, null, null, null, 0]
    }
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto'
  },
  buttonGroup: {
    justifyContent: 'center',
    mb: '7',
    mt: ['-15px', '-35px'],
    position: 'relative',
    zIndex: 2
  },
  buttonGroupInner: {
    display: 'flex',
    padding: '7px',
    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#F7F8FB',
    button: {
      border: 0,
      padding: ['15px 20px', '15px 27px'],
      borderRadius: '5px',
      color: 'text',
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&.active': {
        color: '#0f2137',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)'
      },
      '&:focus': {
        outline: 0
      }
    }
  }
};

var _c;

$RefreshReg$(_c, "Package");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGlzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJpY2UtY2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3BhY2thZ2UuanMiXSwibmFtZXMiOlsiTGlzdCIsIml0ZW1zIiwicGFyZW50U3R5bGUiLCJjaGlsZFN0eWxlIiwic3R5bGVzIiwibGlzdEljb24iLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwicGFkZGluZyIsImZvbnRTaXplIiwibWwiLCJmbGV4U2hyaW5rIiwianVzdGlmeUNvbnRlbnQiLCJtdCIsIlByaWNlQ2FyZCIsImRhdGEiLCJoZWFkZXIiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZVdpdGhVbml0IiwiYnV0dG9uVGV4dCIsImFub3RoZXJPcHRpb24iLCJwb2ludHMiLCJwcmljaW5nQm94IiwicHJpY2luZ0hlYWRlciIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwidHJhbnNpdGlvbiIsInAiLCJtYiIsIm14IiwiY29udGVudCIsInRvcCIsImxlZnQiLCJib3JkZXIiLCJ6SW5kZXgiLCJib3hTaGFkb3ciLCJvcGFjaXR5IiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImxldHRlclNwYWNpbmciLCJweCIsIm1hcmdpbkJvdHRvbSIsInByaWNlIiwicHQiLCJwbCIsImxpc3RJdGVtIiwiZm9udEZhbWlseSIsImZvbnRTdHlsZSIsImJ1dHRvbiIsImJ1dHRvbkdyb3VwIiwidGV4dEFsaWduIiwicGFja2FnZXMiLCJtb250aGx5IiwiaWQiLCJpY29uIiwidGV4dCIsImlzQXZhaWxhYmxlIiwiaGVhZGVySWNvbiIsImFubnVhbCIsInJlc3BvbnNpdmUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsImRyYWdnYWJsZSIsInRhYmxldCIsIm1vYmlsZSIsIlBhY2thZ2UiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInByaWNpbmdQbGFuIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZVByaWNpbmdQbGFuIiwicGxhbiIsInNsaWRlclBhcmFtcyIsImFkZGl0aW9uYWxUcmFuc2Zyb20iLCJhcnJvd3MiLCJhdXRvUGxheVNwZWVkIiwiY2VudGVyTW9kZSIsImNsYXNzTmFtZSIsInNsaWRlc1RvU2xpZGUiLCJjb250YWluZXJDbGFzcyIsImN1c3RvbUJ1dHRvbkdyb3VwIiwiZG90TGlzdENsYXNzIiwiZm9jdXNPblNlbGVjdCIsImluZmluaXRlIiwia2V5Qm9hcmRDb250cm9sIiwiaXRlbUNsYXNzIiwibWluaW11bVRvdWNoRHJhZyIsInJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZSIsInJlbmRlckRvdHNPdXRzaWRlIiwic2hvd0RvdHMiLCJzbGlkZXJDbGFzcyIsInZhcmlhbnQiLCJidXR0b25Hcm91cElubmVyIiwicHJpY2luZ1dyYXBwZXIiLCJtYXAiLCJwYWNrYWdlRGF0YSIsInByaWNpbmdJdGVtIiwiZmFkZUluIiwia2V5ZnJhbWVzIiwiZmFkZUluMiIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsImFuaW1hdGlvbiIsImZsZXgiLCJtYXJnaW4iLCJjdXJzb3IiLCJvdXRsaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULE9BQXVEO0FBQUEsd0JBQXZDQyxLQUF1QztBQUFBLE1BQXZDQSxLQUF1QywyQkFBL0IsRUFBK0I7QUFBQSxNQUEzQkMsV0FBMkIsUUFBM0JBLFdBQTJCO0FBQUEsTUFBZEMsVUFBYyxRQUFkQSxVQUFjO0FBQ3BFLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7S0FGdUJILEk7QUFJeEIsSUFBTUksTUFBTSxHQUFHO0FBQ2JDLFVBQVEsRUFBRTtBQUNSQyxTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQURD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LFNBRlA7QUFHVkYsaUJBQVMsRUFBRTtBQUhELE9BYk47QUFrQk4saUJBQVc7QUFDVDZFLGVBQU8sRUFBRTtBQURBO0FBbEJMO0FBTlE7QUE5Q0wsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNGFiNDUwY2RkMTY1YWRhZWE4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGbGV4LCBCb3gsIEljb25CdXR0b24gfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QoeyBpdGVtcyA9IFtdLCBwYXJlbnRTdHlsZSwgY2hpbGRTdHlsZSB9KSB7XHJcbiAgcmV0dXJuIDxoMT5MaXN0PC9oMT47XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBsaXN0SWNvbjoge1xyXG4gICAgd2lkdGg6IFtcIjI1cHhcIiwgXCIzNXB4XCJdLFxyXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcclxuICAgIGNvbG9yOiBcInByaW1hcnlcIixcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBmb250U2l6ZTogWzMsIDVdLFxyXG4gICAgbWw6IFwiLTFweFwiLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICAgIG10OiBcIjJweFwiLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCB7IEJveCwgQ2FyZCwgVGV4dCwgSGVhZGluZywgQnV0dG9uIH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4vbGlzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2VDYXJkKHtcclxuICBkYXRhOiB7XHJcbiAgICBoZWFkZXIsXHJcbiAgICBuYW1lLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBwcmljZVdpdGhVbml0LFxyXG4gICAgYnV0dG9uVGV4dCA9IFwiU3RhcnQgRnJlZSBUcmlhbFwiLFxyXG4gICAgYW5vdGhlck9wdGlvbixcclxuICAgIHBvaW50cyxcclxuICB9LFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkXHJcbiAgICAgIGNsYXNzTmFtZT17aGVhZGVyID8gJ3BhY2thZ2VfX2NhcmQgYWN0aXZlJyA6ICdwYWNrYWdlX19jYXJkJ31cclxuICAgICAgc3g9e3N0eWxlcy5wcmljaW5nQm94fVxyXG4gICAgPlxyXG4gICAgICB7aGVhZGVyICYmIDxUZXh0IHN4PXtzdHlsZXMuaGVhZGVyfT57aGVhZGVyfTwvVGV4dD59XHJcbiAgICAgIDxCb3g+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9XCJwYWNrYWdlX19oZWFkZXJcIiBzeD17c3R5bGVzLnByaWNpbmdIZWFkZXJ9PlxyXG4gICAgICAgICAgPEhlYWRpbmcgY2xhc3NOYW1lPVwicGFja2FnZV9fbmFtZVwiIHZhcmlhbnQ9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHByaWNpbmdCb3g6IHtcclxuICAgIGJvcmRlclJhZGl1czogMjAsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMC4zc1wiLFxyXG4gICAgcDogW1wiMzVweCAyNXB4XCIsIG51bGwsIG51bGwsIFwiNDBweFwiXSxcclxuICAgIHdpZHRoOiBbXCIxMDAlXCIsIFwiNzUlXCIsIFwiMTAwJVwiXSxcclxuICAgIG1iOiBcIjQwcHhcIixcclxuICAgIG10OiBcIjQwcHhcIixcclxuICAgIG14OiBbMCwgXCJhdXRvXCIsIDBdLFxyXG4gICAgXCImOmJlZm9yZVwiOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGNvbnRlbnQ6IFwiJydcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgzOCwgNzgsIDExOCwgMC4xKVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzXCIsXHJcbiAgICAgIHpJbmRleDogLTEsXHJcbiAgICB9LFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgYm94U2hhZG93OiBcIjBweCA0cHggMjVweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpICFpbXBvcnRhbnRcIixcclxuICAgICAgXCImOmJlZm9yZVwiOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBoZWFkZXI6IHtcclxuICAgIGhlaWdodDogW1wiMjhweFwiLCBudWxsLCBudWxsLCBcIjMycHhcIl0sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgIGZvbnRTaXplOiAxLFxyXG4gICAgbGluZUhlaWdodDogMS4yLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHRvcDogXCItMTdweFwiLFxyXG4gICAgbGV0dGVyU3BhY2luZzogXCItLjE0cHhcIixcclxuICAgIHB4OiBcIjEycHhcIixcclxuICB9LFxyXG4gIHByaWNpbmdIZWFkZXI6IHtcclxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxyXG4gICAgbWI6IFtcIjMwcHhcIiwgbnVsbCwgbnVsbCwgbnVsbCwgXCI0MHB4XCJdLFxyXG4gICAgcDoge1xyXG4gICAgICBmb250U2l6ZTogWzEsIDJdLFxyXG4gICAgICBjb2xvcjogXCJ0ZXh0XCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiaGVhZGluZ1wiLFxyXG4gICAgfSxcclxuICAgIFwiLnBhY2thZ2VfX25hbWVcIjoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IFsxLCBudWxsLCAyXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwcmljZToge1xyXG4gICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgZm9udFNpemU6IFs0LCBudWxsLCA1LCBudWxsLCBcIjMwcHhcIl0sXHJcbiAgICBsaW5lSGVpZ2h0OiAxLFxyXG4gICAgbGV0dGVyU3BhY2luZzogXCItMC41NXB4XCIsXHJcbiAgICBjb2xvcjogXCJ0ZXh0XCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IDIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIHB0OiBbNCwgNl0sXHJcbiAgICBcIj4gc3BhblwiOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIHBsOiBcIjNweFwiLFxyXG4gICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICBmb250U2l6ZTogWzEsIDJdLFxyXG4gICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpc3RJdGVtOiB7XHJcbiAgICBmb250RmFtaWx5OiBcIkRNIFNhbnNcIixcclxuICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXHJcbiAgICBmb250U2l6ZTogWzEsIDJdLFxyXG4gICAgbGluZUhlaWdodDogWzEuNzUsIDEuNl0sXHJcbiAgICBtYjogMyxcclxuICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxyXG4gICAgY29sb3I6IFwidGV4dFwiLFxyXG4gICAgXCImLmNsb3NlZFwiOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTUsXHJcbiAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIGNvbG9yOiBcIiM3ODhGQjVcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBidXR0b25Hcm91cDoge1xyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgbXQ6IFtcIjMwcHhcIiwgbnVsbCwgbnVsbCwgbnVsbCwgXCIzNXB4XCJdLFxyXG4gICAgXCIuZnJlZV9fdHJhaWxcIjoge1xyXG4gICAgICBjb2xvcjogXCJzZWNvbmRhcnlcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBmb250U2l6ZTogW1wiMTRweFwiLCAxXSxcclxuICAgICAgcDogXCIyMHB4IDAgMFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgRmxleCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcclxuaW1wb3J0IFByaWNlQ2FyZCBmcm9tICdjb21wb25lbnRzL3ByaWNlLWNhcmQnO1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnY29tcG9uZW50cy9idXR0b24tZ3JvdXAnO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IHsgSW9Jb3NDaGVja21hcmtDaXJjbGUsIElvSW9zQ2xvc2VDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcblxyXG5jb25zdCBwYWNrYWdlcyA9IHtcclxuICBtb250aGx5OiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBuYW1lOiAnQmFzaWMgUGxhbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnRm9yIHNtYWxsIHRlYW1zIG9yIG9mZmljZScsXHJcbiAgICAgIGJ1dHRvblRleHQ6ICdHZXQgQSBQcm9wb3NhbCcsXHJcbiAgICAgIHByaWNlV2l0aFVuaXQ6ICckMSwwMDAnLFxyXG4gICAgICBwb2ludHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICcxMDAga2V5cGhyYXNlcyBvcHRpbWl6ZWQnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMixcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiMjAgcGFnZXMgb3B0aW1pemVkXCIsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJzQuNSBjb250ZW50LCBvdXRyZWFjaCwgVVgsIG9yIENSTyBhc3NldHMgcGVyIHF1YXJ0ZXInLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgIGljb246IDxJb0lvc0Nsb3NlQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJzQgY3VzdG9tIGRhc2hib2FyZHMnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiAnQ29ycG9yYXRlIFBsYW4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvciBtZWRpdW0tc2l6ZWQgYnVzaW5lc3MuJyxcclxuICAgICAgcHJpY2VXaXRoVW5pdDogJyQyLDUwMCcsXHJcbiAgICAgIGJ1dHRvblRleHQ6ICdDcmVhdGUgYWNjb3VudCcsXHJcbiAgICAgIGFub3RoZXJPcHRpb246ICdPciBTdGFydCAxNCBEYXlzIHRyYWlsJyxcclxuICAgICAgcG9pbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnMTUwIGtleXBocmFzZXMgb3B0aW1pemVkJyxcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiBcIjEsMDAwJ3Mgb2YgVGVtcGxhdGVzXCIsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJ0Jsb2cgU3VwcG9ydCBUb29scycsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJ2VDb21tZXJjZSBTdG9yZSAnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICBoZWFkZXI6ICdTdWdnZXN0ZWQnLFxyXG4gICAgICBoZWFkZXJJY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgIG5hbWU6ICdFbnRlcnByaXNlIFBsYW4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvciBpbnRlcm5hdGlvbmFsIGJ1c2luZXNzZXMuJyxcclxuICAgICAgcHJpY2VXaXRoVW5pdDogJyQ1LDAwMCcsXHJcbiAgICAgIGJ1dHRvblRleHQ6ICdDcmVhdGUgYWNjb3VudCcsXHJcbiAgICAgIGFub3RoZXJPcHRpb246ICdPciBTdGFydCAxNCBEYXlzIHRyYWlsJyxcclxuICAgICAgcG9pbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnRHJhZyAmIERyb3AgQnVpbGRlcicsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogXCIxLDAwMCdzIG9mIFRlbXBsYXRlc1wiLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICdCbG9nIFN1cHBvcnQgVG9vbHMnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICdlQ29tbWVyY2UgU3RvcmUgJyxcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgYW5udWFsOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBuYW1lOiAnRnJlZSBQbGFuJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdGb3IgU21hbGwgdGVhbXMgb3Igb2ZmaWNlJyxcclxuICAgICAgYnV0dG9uVGV4dDogJ1N0YXJ0IGZyZWUgdHJhaWwnLFxyXG4gICAgICBwcmljZVdpdGhVbml0OiAnJDAnLFxyXG4gICAgICBwb2ludHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiMSwwMDAncyBvZiBUZW1wbGF0ZXNcIixcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnRHJhZyAmIERyb3AgQnVpbGRlcicsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJ0Jsb2cgU3VwcG9ydCBUb29scycsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2xvc2VDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnZUNvbW1lcmNlIFN0b3JlICcsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6ICdCdXNpbmVzcyBraW5nJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdGb3IgRW50ZXJwcmlzZSBidXNpbmVzcycsXHJcbiAgICAgIHByaWNlV2l0aFVuaXQ6ICckMjUnLFxyXG4gICAgICBidXR0b25UZXh0OiAnQ3JlYXRlIGFjY291bnQnLFxyXG4gICAgICBhbm90aGVyT3B0aW9uOiAnT3IgU3RhcnQgMTAgRGF5cyB0cmFpbCcsXHJcbiAgICAgIHBvaW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJ2VDb21tZXJjZSBTdG9yZScsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJ0Jsb2cgU3VwcG9ydCBUb29scycsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogXCIxLDAwMCdzIG9mIFRlbXBsYXRlc1wiLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICdEcmFnICYgRHJvcCBCdWlsZGVyICcsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIGhlYWRlcjogJ1N1Z2dlc3RlZCcsXHJcbiAgICAgIGhlYWRlckljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgbmFtZTogJ1BybyBNYXN0ZXInLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvciBwcm8gbGV2ZWwgZGV2ZWxvcGVycycsXHJcbiAgICAgIHByaWNlV2l0aFVuaXQ6ICckMzknLFxyXG4gICAgICBidXR0b25UZXh0OiAnQ3JlYXRlIGFjY291bnQnLFxyXG4gICAgICBhbm90aGVyT3B0aW9uOiAnT3IgU3RhcnQgMTAgRGF5cyB0cmFpbCcsXHJcbiAgICAgIHBvaW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJ2VDb21tZXJjZSBTdG9yZScsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJ0Jsb2cgU3VwcG9ydCBUb29scycsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogXCIxLDAwMCdzIG9mIFRlbXBsYXRlc1wiLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICdEcmFnICYgRHJvcCBCdWlsZGVyICcsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcclxuICBkZXNrdG9wOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXHJcbiAgICBpdGVtczogMyxcclxuICAgIGRyYWdnYWJsZTogZmFsc2UsXHJcbiAgfSxcclxuICB0YWJsZXQ6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDIzLCBtaW46IDY0MCB9LFxyXG4gICAgaXRlbXM6IDIsXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgfSxcclxuICBtb2JpbGU6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhY2thZ2UoKSB7XHJcbiAgY29uc3QgeyBtb250aGx5LCBhbm51YWwgfSA9IHBhY2thZ2VzO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUgKHtcclxuICAgIGFjdGl2ZTogJ21vbnRobHknLHByaWNpbmdQbGFuOiBtb250aGx5LFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZVByaWNpbmdQbGFuID0gKHBsYW4pID0+IHtcclxuICAgIGlmKHBsYW4gPT09ICdhbm51YWwnKSB7XHJcbiAgICAgIHNldFN0YXRlKHthY3RpdmU6J2FubnVhbCcsIHByaWNpbmdQbGFuOiBhbm51YWx9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U3RhdGUgKHthY3RpdmU6ICdtb250aGx5JywgcHJpY2luZ1BsYW46IG1vbnRobHl9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2xpZGVyUGFyYW1zID0ge1xyXG4gICAgYWRkaXRpb25hbFRyYW5zZnJvbTogMCxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBhdXRvUGxheVNwZWVkOiAzMDAwLFxyXG4gICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICBjbGFzc05hbWU6ICcnLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMSxcclxuICAgIGl0ZW1zOiAzLFxyXG4gICAgY29udGFpbmVyQ2xhc3M6ICdjYXJvdXNlbC1jb250YWluZXInLFxyXG4gICAgY3VzdG9tQnV0dG9uR3JvdXA6IDxCdXR0b25Hcm91cCAvPixcclxuICAgIGRvdExpc3RDbGFzczogJycsXHJcbiAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIGtleUJvYXJkQ29udHJvbDogZmFsc2UsXHJcbiAgICBpdGVtQ2xhc3M6ICcnLFxyXG4gICAgbWluaW11bVRvdWNoRHJhZzogODAsXHJcbiAgICByZW5kZXJCdXR0b25Hcm91cE91dHNpZGU6IHRydWUsXHJcbiAgICByZW5kZXJEb3RzT3V0c2lkZTogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiByZXNwb25zaXZlLFxyXG4gICAgc2hvd0RvdHM6IGZhbHNlLFxyXG4gICAgc2xpZGVyQ2xhc3M6ICcnLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cInByaWNpbmdcIiBzeD17e3ZhcmlhbnQ6ICdzZWN0aW9uLnByaWNpbmcnfX0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXIgXHJcbiAgICAgICAgICBzbG9nYW49XCJQYXltZW50IFBsYW5cIlxyXG4gICAgICAgICAgdGl0bGU9XCJDaG9vc2UgeW91ciBwYWNrYWdlXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8RmxleCBzeD17c3R5bGVzLmJ1dHRvbkdyb3VwfT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5idXR0b25Hcm91cElubmVyfT5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3RhdGUuYWN0aXZlID09PSAnbW9udGhseScgPyAnYWN0aXZlJyA6ICcnfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNb250aGx5XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcmljaW5nUGxhbignbW9udGhseScpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTW9udGhseSBQbGFuXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdGF0ZS5hY3RpdmUgPT09ICdtb250aGx5JyA/ICdhY3RpdmUnIDogJyd9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkFubnVhbFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUHJpY2luZ1BsYW4oJ2FubnVhbCcpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQW5udWFsIFBsYW5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnByaWNpbmdXcmFwcGVyfSBjbGFzc05hbWU9XCJwcmljaW5nX193cmFwcGVyXCI+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWwgey4uLnNsaWRlclBhcmFtc30+XHJcbiAgICAgICAgICAgIHtzdGF0ZS5wcmljaW5nUGxhbi5tYXAoKHBhY2thZ2VEYXRhKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnByaWNpbmdJdGVtfSBrZXk9e3BhY2thZ2VEYXRhLmlkfT5cclxuICAgICAgICAgICAgICAgIDxQcmljZUNhcmQgZGF0YT17cGFja2FnZURhdGF9IC8+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgZmFkZUluID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IGZhZGVJbjIgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgcHJpY2luZ1dyYXBwZXI6IHtcclxuICAgIG1iOiAnLTQwcHgnLFxyXG4gICAgbXQ6ICctNDBweCcsXHJcbiAgICBteDogLTMsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAnJi5wcmljaW5nX193cmFwcGVyIC5wYWNrYWdlX19jYXJkJzoge1xyXG4gICAgICAnLnBhY2thZ2VfX2hlYWRlcic6IHtcclxuICAgICAgICBhbmltYXRpb246IGAke2ZhZGVJbn0gMC44cyBlYXNlLWluYCxcclxuICAgICAgfSxcclxuICAgICAgJ3VsID4gbGknOiB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBgJHtmYWRlSW4yfSAwLjdzIGVhc2UtaW5gLFxyXG4gICAgICB9LFxyXG4gICAgICAnLnBhY2thZ2VfX3ByaWNlJzoge1xyXG4gICAgICAgIGFuaW1hdGlvbjogYCR7ZmFkZUluMn0gMC45cyBlYXNlLWluYCxcclxuICAgICAgfSxcclxuICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBgJHtmYWRlSW4yfSAxcyBlYXNlLWluYCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnLmNhcm91c2VsLWNvbnRhaW5lcic6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgJz4gdWwgPiBsaSAnOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcuYnV0dG9uX19ncm91cCc6IHtcclxuICAgICAgZGlzcGxheTogWydmbGV4JywgbnVsbCwgbnVsbCwgbnVsbCwgJ25vbmUnXSxcclxuICAgICAgbWI6IFs0LCBudWxsLCBudWxsLCBudWxsLCAwXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwcmljaW5nSXRlbToge1xyXG4gICAgbXg6IDMsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgZmxleDogJzEgMSBhdXRvJyxcclxuICB9LFxyXG4gIGJ1dHRvbkdyb3VwOiB7XHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBtYjogJzcnLFxyXG4gICAgbXQ6IFsnLTE1cHgnLCAnLTM1cHgnXSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgekluZGV4OiAyLFxyXG4gIH0sXHJcbiAgYnV0dG9uR3JvdXBJbm5lcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgcGFkZGluZzogJzdweCcsXHJcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0Y4RkInLFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgIGJvcmRlcjogMCxcclxuICAgICAgcGFkZGluZzogWycxNXB4IDIwcHgnLCAnMTVweCAyN3B4J10sXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMC4yNHB4JyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcclxuICAgICAgJyYuYWN0aXZlJzoge1xyXG4gICAgICAgIGNvbG9yOiAnIzBmMjEzNycsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgYm94U2hhZG93OiAnMCAzcHggNHB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSknLFxyXG4gICAgICB9LFxyXG4gICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICBvdXRsaW5lOiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9