webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.data */ "./src/components/footer/footer.data.js");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\footer\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




function Footer() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("footer", {
    sx: styles.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.footerBottomArea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_logo_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.menus,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("nav", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, _footer_data__WEBPACK_IMPORTED_MODULE_3__["default"].menuItem.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      path: item.path,
      key: item.key,
      label: item.label,
      sx: styles.footer.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    });
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.footer.copyright,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Copyright Disclaimer under Section 107 of the copyright act 1976, allowance is made for fair use for purposes such as criticism, comment, news reporting, scholarship, and research."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.footer.copyright,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "Disclaimer: Under the Fair Use Copyright Act I have taken inspiration and my experience from my previous employer to design and code a personal project for creative purposes. I do not own any Lokalyst assets."))));
}
_c = Footer;
var styles = {
  footer: {
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      pt: [7, null, 8],
      pb: ["40px", null, "100px"],
      textAlign: "center",
      flexDirection: "column"
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap"
      }
    },
    link: {
      fontSize: [1, "15px"],
      color: "text",
      fontWeight: "400",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ":hover": {
        color: "primary"
      }
    },
    copyright: {
      fontSize: [1, "15px"],
      width: "100%"
    }
  }
};

var _c;

$RefreshReg$(_c, "Footer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/header/header.data.js":
/*!**********************************************!*\
  !*** ./src/components/header/header.data.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ([{
  path: 'home',
  label: 'Home'
}, {
  path: 'feature',
  label: 'Features'
}, {
  path: 'pricing',
  label: 'Pricing'
}, {
  path: 'testimonial',
  label: 'Testimonial'
}]);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/logo */ "./src/components/logo.js");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_logo_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mobile_drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mobile-drawer */ "./src/components/header/mobile-drawer.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");


var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\header\\header.js",
    _templateObject;


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */







function Header(_ref) {
  var _this = this;

  var className = _ref.className;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("header", {
    sx: styles.header,
    className: className,
    id: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    sx: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: assets_logo_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    as: "nav",
    sx: styles.nav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_8__["default"].map(function (menuItem, i) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      activeClass: "active",
      to: menuItem.path,
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }
    }, menuItem.label);
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "donate__btn",
    varient: "secondary",
    "aria-label": "Get Started",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "Register"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "donate__btn",
    varient: "secondary",
    "aria-label": "Get Started",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Log In"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_mobile_drawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  })));
}
_c = Header;
var positionAnim = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    position: fixed;\n    opacity: 1;\n  }\n\n  to {\n    position: absolute;\n    opacity: 1;\n    transition: all 0.4s ease;\n  }\n"])));
var styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: "".concat(positionAnim, " 0.4s ease"),
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0]
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text'
      }
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block'
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary'
      },
      '&.active': {
        color: 'primary'
      }
    }
  }
};

var _c;

$RefreshReg$(_c, "Header");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/header/mobile-drawer.js":
/*!************************************************!*\
  !*** ./src/components/header/mobile-drawer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileDrawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/drawer */ "./src/components/drawer.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\header\\mobile-drawer.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var social = [{
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaFacebookF"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  })
}, {
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaTwitter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  })
}, {
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaGithubAlt"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  })
}, {
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaDribbble"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  })
}];
function MobileDrawer() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isDrawerOpen = _useState[0],
      setisDrawerOpen = _useState[1];

  return __jsx(components_drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "320px",
    drawerHandler: __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.handler,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdMenu"], {
      size: "26px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    })),
    open: isDrawerOpen,
    toggleHandler: function toggleHandler() {
      return setisDrawerOpen(function (prevState) {
        return !prevState;
      });
    },
    closeButton: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdClose"], {
      size: "24px",
      color: "000000",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 20
      }
    }),
    drawerStyle: styles.drawer,
    closeBtnStyle: styles.close,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__["Scrollbars"], {
    autoHide: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_7__["default"].map(function (menuItem, i) {
    return __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      activeClass: "active",
      to: menuItem.path,
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }
    }, menuItem.label);
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menuFooter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.social,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, social.map(function (socialItem, i) {
    return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      as: "span",
      key: i,
      sx: styles.social.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: socialItem.path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 19
      }
    }, socialItem.icon));
  }))))));
}

_s(MobileDrawer, "eq2k4eZLw10RxHY53yP90RAtt7A=");

_c = MobileDrawer;
;
var styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    '@media screen and (min-width: 1024px)': {
      display: 'none'
    }
  },
  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark'
  },
  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer'
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px'
  },
  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary'
      },
      '&.active': {
        color: 'secondary'
      }
    }
  },
  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto'
  },
  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 14,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0'
      },
      '&:hover': {
        color: 'secondary'
      }
    }
  },
  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0'
  }
};

var _c;

$RefreshReg$(_c, "MobileDrawer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme */ "./src/theme/index.js");
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/seo */ "./src/components/seo.js");
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/layout */ "./src/components/layout.js");
/* harmony import */ var _sections_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/banner */ "./src/sections/banner.js");
/* harmony import */ var _sections_key_feature__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/key-feature */ "./src/sections/key-feature.js");
/* harmony import */ var _sections_service_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sections/service-section */ "./src/sections/service-section.js");
/* harmony import */ var _sections_feature__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sections/feature */ "./src/sections/feature.js");
/* harmony import */ var _sections_core_feature__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sections/core-feature */ "./src/sections/core-feature.js");
/* harmony import */ var _sections_workflow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sections/workflow */ "./src/sections/workflow.js");
/* harmony import */ var _sections_package__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sections/package */ "./src/sections/package.js");
/* harmony import */ var _sections_team_section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sections/team-section */ "./src/sections/team-section.js");
/* harmony import */ var _sections_testimonial__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sections/testimonial */ "./src/sections/testimonial.js");
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














function IndexPage() {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(components_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Jonathan Days SEO Project",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }), __jsx(_sections_banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), __jsx(_sections_key_feature__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx(_sections_service_section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }), __jsx(_sections_feature__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx(_sections_core_feature__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx(_sections_workflow__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx(_sections_package__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx(_sections_team_section__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), __jsx(_sections_testimonial__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  })));
}
_c = IndexPage;

var _c;

$RefreshReg$(_c, "IndexPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5kYXRhLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvbW9iaWxlLWRyYXdlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkZvb3RlciIsInN0eWxlcyIsImZvb3RlciIsImZvb3RlckJvdHRvbUFyZWEiLCJGb290ZXJMb2dvIiwibWVudXMiLCJkYXRhIiwibWVudUl0ZW0iLCJtYXAiLCJpdGVtIiwicGF0aCIsImtleSIsImxhYmVsIiwibGluayIsImNvcHlyaWdodCIsImJvcmRlclRvcCIsImJvcmRlclRvcENvbG9yIiwiZGlzcGxheSIsInB0IiwicGIiLCJ0ZXh0QWxpZ24iLCJmbGV4RGlyZWN0aW9uIiwibXQiLCJtYiIsIm5hdiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhXcmFwIiwiZm9udFNpemUiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJjdXJzb3IiLCJ0cmFuc2l0aW9uIiwidGV4dERlY29yYXRpb24iLCJsaW5lSGVpZ2h0IiwicHgiLCJ3aWR0aCIsIkhlYWRlciIsImNsYXNzTmFtZSIsImhlYWRlciIsImNvbnRhaW5lciIsIkxvZ29EYXJrIiwibWVudUl0ZW1zIiwiaSIsInBvc2l0aW9uQW5pbSIsImtleWZyYW1lcyIsInB5IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwiYW5pbWF0aW9uIiwiZmxleFNocmluayIsIm1yIiwibWwiLCJib3hTaGFkb3ciLCJteCIsImEiLCJzb2NpYWwiLCJpY29uIiwiTW9iaWxlRHJhd2VyIiwidXNlU3RhdGUiLCJpc0RyYXdlck9wZW4iLCJzZXRpc0RyYXdlck9wZW4iLCJoYW5kbGVyIiwicHJldlN0YXRlIiwiZHJhd2VyIiwiY2xvc2UiLCJjb250ZW50IiwibWVudSIsIm1lbnVGb290ZXIiLCJzb2NpYWxJdGVtIiwiaGVpZ2h0IiwicmlnaHQiLCJ6SW5kZXgiLCJib3JkZXJCb3R0b20iLCJidXR0b24iLCJmdyIsImJvcmRlclJhZGl1cyIsIkluZGV4UGFnZSIsInRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQy9CLFNBQ0U7QUFBUSxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUQsTUFBTSxDQUFDQyxNQUFQLENBQWNDLGdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsb0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsOENBQUQ7QUFBTyxPQUFHLEVBQUVDLHNEQUFaO0FBQXdCLE9BQUcsRUFBQyxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFSCxNQUFNLENBQUNDLE1BQVAsQ0FBY0csS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0Msb0RBQUksQ0FBQ0MsUUFBTCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLElBQUQ7QUFBQSxXQUNqQixxREFBQyxvREFBRDtBQUNFLFVBQUksRUFBRUEsSUFBSSxDQUFDQyxJQURiO0FBRUUsU0FBRyxFQUFFRCxJQUFJLENBQUNFLEdBRlo7QUFHRSxXQUFLLEVBQUVGLElBQUksQ0FBQ0csS0FIZDtBQUlFLFFBQUUsRUFBRVgsTUFBTSxDQUFDQyxNQUFQLENBQWNXLElBSnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEaUI7QUFBQSxHQUFsQixDQURILENBREYsQ0FKRixFQWdCRSxxREFBQyw2Q0FBRDtBQUFNLE1BQUUsRUFBRVosTUFBTSxDQUFDQyxNQUFQLENBQWNZLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNExBaEJGLEVBcUJFLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFFYixNQUFNLENBQUNDLE1BQVAsQ0FBY1ksU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3TkFyQkYsQ0FERixDQURGLENBREY7QUFrQ0Q7S0FuQ3VCZCxNO0FBcUN4QixJQUFNQyxNQUFNLEdBQUc7QUFDYkMsUUFBTSxFQUFFO0FBQ05DLG9CQUFnQixFQUFFO0FBQ2hCWSxlQUFTLEVBQUUsV0FESztBQUVoQkMsb0JBQWMsRUFBRSxjQUZBO0FBR2hCQyxhQUFPLEVBQUUsTUFITztBQUloQkMsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLENBSlk7QUFLaEJDLFFBQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsT0FBZixDQUxZO0FBTWhCQyxlQUFTLEVBQUUsUUFOSztBQU9oQkMsbUJBQWEsRUFBRTtBQVBDLEtBRFo7QUFVTmhCLFNBQUssRUFBRTtBQUNMaUIsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FEQztBQUVMQyxRQUFFLEVBQUUsQ0FGQztBQUdMQyxTQUFHLEVBQUU7QUFDSFAsZUFBTyxFQUFFLE1BRE47QUFFSFEsa0JBQVUsRUFBRSxRQUZUO0FBR0hDLHNCQUFjLEVBQUUsUUFIYjtBQUlIQyxnQkFBUSxFQUFFO0FBSlA7QUFIQSxLQVZEO0FBcUJOZCxRQUFJLEVBQUU7QUFDSmUsY0FBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FETjtBQUVKQyxXQUFLLEVBQUUsTUFGSDtBQUdKQyxnQkFBVSxFQUFFLEtBSFI7QUFJSlAsUUFBRSxFQUFFLENBSkE7QUFLSlEsWUFBTSxFQUFFLFNBTEo7QUFNSkMsZ0JBQVUsRUFBRSxXQU5SO0FBT0pmLGFBQU8sRUFBRSxPQVBMO0FBUUpnQixvQkFBYyxFQUFFLE1BUlo7QUFTSkMsZ0JBQVUsRUFBRSxDQUFDLEdBQUQsRUFBTSxJQUFOLEVBQVksR0FBWixDQVRSO0FBVUpDLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixDQVZBO0FBV0osZ0JBQVU7QUFDUk4sYUFBSyxFQUFFO0FBREM7QUFYTixLQXJCQTtBQW9DTmYsYUFBUyxFQUFFO0FBQ1RjLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxNQUFKLENBREQ7QUFFVFEsV0FBSyxFQUFFO0FBRkU7QUFwQ0w7QUFESyxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUEsOENBQWUsZ0VBQ2I7QUFDRTFCLE1BQUksRUFBRSxNQURSO0FBRUVFLE9BQUssRUFBRTtBQUZULENBRGEsRUFLYjtBQUNFRixNQUFJLEVBQUUsU0FEUjtBQUVFRSxPQUFLLEVBQUU7QUFGVCxDQUxhLEVBU2I7QUFDRUYsTUFBSSxFQUFFLFNBRFI7QUFFRUUsT0FBSyxFQUFFO0FBRlQsQ0FUYSxFQWFiO0FBQ0VGLE1BQUksRUFBRSxhQURSO0FBRUVFLE9BQUssRUFBRTtBQUZULENBYmEsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTeUIsTUFBVCxPQUErQjtBQUFBOztBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUM1QyxTQUNJO0FBQVEsTUFBRSxFQUFFckMsTUFBTSxDQUFDc0MsTUFBbkI7QUFBMkIsYUFBUyxFQUFFRCxTQUF0QztBQUFpRCxNQUFFLEVBQUMsUUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQVcsTUFBRSxFQUFFckMsTUFBTSxDQUFDdUMsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLHVEQUFEO0FBQU0sT0FBRyxFQUFFQyxzREFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxxREFBQyw2Q0FBRDtBQUFNLE1BQUUsRUFBQyxLQUFUO0FBQWUsTUFBRSxFQUFFeEMsTUFBTSxDQUFDdUIsR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHa0Isb0RBQVMsQ0FBQ2xDLEdBQVYsQ0FBYyxVQUFDRCxRQUFELEVBQVdvQyxDQUFYO0FBQUEsV0FDYixxREFBQyxpREFBRDtBQUNFLGlCQUFXLEVBQUMsUUFEZDtBQUVFLFFBQUUsRUFBRXBDLFFBQVEsQ0FBQ0csSUFGZjtBQUdFLFNBQUcsRUFBRSxJQUhQO0FBSUUsWUFBTSxFQUFFLElBSlY7QUFLRSxZQUFNLEVBQUUsQ0FBQyxFQUxYO0FBTUUsY0FBUSxFQUFFLEdBTlo7QUFPRSxTQUFHLEVBQUVpQyxDQVBQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FTR3BDLFFBQVEsQ0FBQ0ssS0FUWixDQURhO0FBQUEsR0FBZCxDQURILENBRkYsRUFpQkUscURBQUMsK0NBQUQ7QUFBUSxhQUFTLEVBQUMsYUFBbEI7QUFBZ0MsV0FBTyxFQUFDLFdBQXhDO0FBQW9ELGtCQUFXLGFBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakJGLEVBa0JFLHFEQUFDLCtDQUFEO0FBQVEsYUFBUyxFQUFDLGFBQWxCO0FBQWdDLFdBQU8sRUFBQyxXQUF4QztBQUFvRCxrQkFBVyxhQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEJGLEVBbUJFLHFEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQkYsQ0FERixDQURKO0FBeUJEO0tBMUJ1QnlCLE07QUE0QnhCLElBQU1PLFlBQVksR0FBR0MsK0RBQUgsZ1NBQWxCO0FBYUEsSUFBTTVDLE1BQU0sR0FBRztBQUNic0MsUUFBTSxFQUFFO0FBQ05WLFNBQUssRUFBRSxNQUREO0FBRU5DLGNBQVUsRUFBRSxNQUZOO0FBR05nQixNQUFFLEVBQUUsQ0FIRTtBQUlOVixTQUFLLEVBQUUsTUFKRDtBQUtOVyxZQUFRLEVBQUUsVUFMSjtBQU1OQyxPQUFHLEVBQUUsQ0FOQztBQU9OQyxRQUFJLEVBQUUsQ0FQQTtBQVFOQyxtQkFBZSxFQUFFLGFBUlg7QUFTTmxCLGNBQVUsRUFBRSxlQVROO0FBVU5tQixhQUFTLFlBQUtQLFlBQUwsZUFWSDtBQVdOLG9CQUFnQjtBQUNkUSxnQkFBVSxFQUFFLENBREU7QUFFZEMsUUFBRSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixDQUFyQixDQUZVO0FBR2RDLFFBQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEzQjtBQUhVLEtBWFY7QUFnQk4sZ0JBQVk7QUFDVlAsY0FBUSxFQUFFLE9BREE7QUFFVkcscUJBQWUsRUFBRSxZQUZQO0FBR1ZyQixXQUFLLEVBQUUsU0FIRztBQUlWMEIsZUFBUyxFQUFFLCtCQUpEO0FBS1ZULFFBQUUsRUFBRSxDQUxNO0FBTVYsaUJBQVc7QUFDVGpCLGFBQUssRUFBRTtBQURFO0FBTkQ7QUFoQk4sR0FESztBQTRCYlcsV0FBUyxFQUFFO0FBQ1R2QixXQUFPLEVBQUUsTUFEQTtBQUVUUSxjQUFVLEVBQUUsUUFGSDtBQUdUQyxrQkFBYyxFQUFFO0FBSFAsR0E1QkU7QUFpQ2JGLEtBQUcsRUFBRTtBQUNIZ0MsTUFBRSxFQUFFLE1BREQ7QUFFSHZDLFdBQU8sRUFBRSxNQUZOO0FBR0gsNkNBQXlDO0FBQ3ZDQSxhQUFPLEVBQUU7QUFEOEIsS0FIdEM7QUFNSHdDLEtBQUMsRUFBRTtBQUNEN0IsY0FBUSxFQUFFLENBRFQ7QUFFREUsZ0JBQVUsRUFBRSxNQUZYO0FBR0RLLFFBQUUsRUFBRSxDQUhIO0FBSURKLFlBQU0sRUFBRSxTQUpQO0FBS0RHLGdCQUFVLEVBQUUsS0FMWDtBQU1ERixnQkFBVSxFQUFFLFdBTlg7QUFPRCxpQkFBVztBQUNUSCxhQUFLLEVBQUU7QUFERSxPQVBWO0FBVUQsa0JBQVk7QUFDVkEsYUFBSyxFQUFFO0FBREc7QUFWWDtBQU5BO0FBakNRLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTTZCLE1BQU0sR0FBRyxDQUNiO0FBQ0VoRCxNQUFJLEVBQUUsR0FEUjtBQUVFaUQsTUFBSSxFQUFFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZSLENBRGEsRUFLYjtBQUNFakQsTUFBSSxFQUFFLEdBRFI7QUFFRWlELE1BQUksRUFBRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUixDQUxhLEVBU2I7QUFDRWpELE1BQUksRUFBRSxHQURSO0FBRUVpRCxNQUFJLEVBQUUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlIsQ0FUYSxFQWFiO0FBQ0VqRCxNQUFJLEVBQUUsR0FEUjtBQUVFaUQsTUFBSSxFQUFFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZSLENBYmEsQ0FBZjtBQW1CZSxTQUFTQyxZQUFULEdBQXdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQUMsS0FBRCxDQURYO0FBQUEsTUFDOUJDLFlBRDhCO0FBQUEsTUFDaEJDLGVBRGdCOztBQUVyQyxTQUNFLE1BQUMseURBQUQ7QUFDRSxTQUFLLEVBQUMsT0FEUjtBQUVFLGlCQUFhLEVBQ1gsTUFBQyw0Q0FBRDtBQUFLLFFBQUUsRUFBRTlELE1BQU0sQ0FBQytELE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHVEQUFEO0FBQVUsVUFBSSxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBSEo7QUFPRSxRQUFJLEVBQUVGLFlBUFI7QUFRRSxpQkFBYSxFQUFFO0FBQUEsYUFBS0MsZUFBZSxDQUFDLFVBQUNFLFNBQUQ7QUFBQSxlQUFlLENBQUNBLFNBQWhCO0FBQUEsT0FBRCxDQUFwQjtBQUFBLEtBUmpCO0FBU0UsZUFBVyxFQUFFLE1BQUMsd0RBQUQ7QUFBVyxVQUFJLEVBQUMsTUFBaEI7QUFBdUIsV0FBSyxFQUFDLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFUZjtBQVVFLGVBQVcsRUFBRWhFLE1BQU0sQ0FBQ2lFLE1BVnRCO0FBV0UsaUJBQWEsRUFBRWpFLE1BQU0sQ0FBQ2tFLEtBWHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FhRSxNQUFDLGtFQUFEO0FBQVksWUFBUSxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRWxFLE1BQU0sQ0FBQ21FLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFbkUsTUFBTSxDQUFDb0UsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDM0Isb0RBQVMsQ0FBQ2xDLEdBQVYsQ0FBYyxVQUFDRCxRQUFELEVBQVdvQyxDQUFYO0FBQUEsV0FDWCxNQUFDLGlEQUFEO0FBQ0UsaUJBQVcsRUFBQyxRQURkO0FBRUUsUUFBRSxFQUFFcEMsUUFBUSxDQUFDRyxJQUZmO0FBR0UsU0FBRyxFQUFFLElBSFA7QUFJRSxZQUFNLEVBQUUsSUFKVjtBQUtFLFlBQU0sRUFBRSxDQUFDLEVBTFg7QUFNRSxjQUFRLEVBQUUsR0FOWjtBQU9FLFNBQUcsRUFBRWlDLENBUFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVNHcEMsUUFBUSxDQUFDSyxLQVRaLENBRFc7QUFBQSxHQUFkLENBREQsQ0FERixFQWdCRSxNQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFWCxNQUFNLENBQUNxRSxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRXJFLE1BQU0sQ0FBQ3lELE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsTUFBTSxDQUFDbEQsR0FBUCxDQUFXLFVBQUMrRCxVQUFELEVBQWE1QixDQUFiO0FBQUEsV0FDVixNQUFDLDRDQUFEO0FBQUssUUFBRSxFQUFDLE1BQVI7QUFBZSxTQUFHLEVBQUdBLENBQXJCO0FBQXdCLFFBQUUsRUFBRTFDLE1BQU0sQ0FBQ3lELE1BQVAsQ0FBY0MsSUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsaURBQUQ7QUFBTSxRQUFFLEVBQUdZLFVBQVUsQ0FBQzdELElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBNkI2RCxVQUFVLENBQUNaLElBQXhDLENBREYsQ0FEVTtBQUFBLEdBQVgsQ0FESCxDQURGLENBaEJGLENBREYsQ0FiRixDQURGO0FBOENEOztHQWhEdUJDLFk7O0tBQUFBLFk7QUFnRHZCO0FBRUQsSUFBTTNELE1BQU0sR0FBRztBQUNiK0QsU0FBTyxFQUFFO0FBQ1AvQyxXQUFPLEVBQUUsTUFERjtBQUVQUSxjQUFVLEVBQUUsUUFGTDtBQUdQQyxrQkFBYyxFQUFFLFFBSFQ7QUFJUDBCLGNBQVUsRUFBRSxHQUpMO0FBS1BoQixTQUFLLEVBQUUsTUFMQTtBQU9QLDZDQUF5QztBQUN2Q25CLGFBQU8sRUFBRTtBQUQ4QjtBQVBsQyxHQURJO0FBYWJpRCxRQUFNLEVBQUU7QUFDTjlCLFNBQUssRUFBRSxNQUREO0FBRU5vQyxVQUFNLEVBQUUsTUFGRjtBQUdOdEIsbUJBQWUsRUFBRTtBQUhYLEdBYks7QUFtQmJpQixPQUFLLEVBQUU7QUFDTGxELFdBQU8sRUFBRSxNQURKO0FBRUxRLGNBQVUsRUFBRSxRQUZQO0FBR0xDLGtCQUFjLEVBQUUsUUFIWDtBQUlMcUIsWUFBUSxFQUFFLFVBSkw7QUFLTEMsT0FBRyxFQUFFLE1BTEE7QUFNTHlCLFNBQUssRUFBRSxNQU5GO0FBT0xDLFVBQU0sRUFBRSxHQVBIO0FBUUwzQyxVQUFNLEVBQUU7QUFSSCxHQW5CTTtBQThCYnFDLFNBQU8sRUFBRTtBQUNQaEMsU0FBSyxFQUFFLE1BREE7QUFFUG9DLFVBQU0sRUFBRSxNQUZEO0FBR1B2RCxXQUFPLEVBQUUsTUFIRjtBQUlQSSxpQkFBYSxFQUFFLFFBSlI7QUFLUEgsTUFBRSxFQUFFLE9BTEc7QUFNUEMsTUFBRSxFQUFFLE1BTkc7QUFPUGdCLE1BQUUsRUFBRTtBQVBHLEdBOUJJO0FBd0Nia0MsTUFBSSxFQUFFO0FBQ0pqQyxTQUFLLEVBQUUsTUFESDtBQUVKbkIsV0FBTyxFQUFFLE1BRkw7QUFHSkksaUJBQWEsRUFBRSxRQUhYO0FBSUpvQyxLQUFDLEVBQUU7QUFDRDdCLGNBQVEsRUFBRSxNQURUO0FBRURFLGdCQUFVLEVBQUUsS0FGWDtBQUdERCxXQUFLLEVBQUUsWUFITjtBQUlEaUIsUUFBRSxFQUFFLE1BSkg7QUFLRGYsWUFBTSxFQUFFLFNBTFA7QUFNRDRDLGtCQUFZLEVBQUUsbUJBTmI7QUFPRDNDLGdCQUFVLEVBQUUsV0FQWDtBQVFELGlCQUFXO0FBQ1RILGFBQUssRUFBRTtBQURFLE9BUlY7QUFXRCxrQkFBWTtBQUNWQSxhQUFLLEVBQUU7QUFERztBQVhYO0FBSkMsR0F4Q087QUE2RGJ5QyxZQUFVLEVBQUU7QUFDVmxDLFNBQUssRUFBRSxNQURHO0FBRVZuQixXQUFPLEVBQUUsTUFGQztBQUdWSSxpQkFBYSxFQUFFLFFBSEw7QUFJVkksY0FBVSxFQUFFLFFBSkY7QUFLVkgsTUFBRSxFQUFFO0FBTE0sR0E3REM7QUFxRWJvQyxRQUFNLEVBQUU7QUFDTnRCLFNBQUssRUFBRSxNQUREO0FBRU5uQixXQUFPLEVBQUUsTUFGSDtBQUdOUSxjQUFVLEVBQUUsUUFITjtBQUlOQyxrQkFBYyxFQUFFLFFBSlY7QUFNTmlDLFFBQUksRUFBRTtBQUNKMUMsYUFBTyxFQUFFLE1BREw7QUFFSlEsZ0JBQVUsRUFBRSxRQUZSO0FBR0pDLG9CQUFjLEVBQUUsUUFIWjtBQUlKRyxXQUFLLEVBQUUsTUFKSDtBQUtKRCxjQUFRLEVBQUUsRUFMTjtBQU1KeUIsUUFBRSxFQUFFLE1BTkE7QUFPSnJCLGdCQUFVLEVBQUUsV0FQUjtBQVFKRCxZQUFNLEVBQUUsU0FSSjtBQVNKLHFCQUFlO0FBQ2JzQixVQUFFLEVBQUU7QUFEUyxPQVRYO0FBWUosaUJBQVc7QUFDVHhCLGFBQUssRUFBRTtBQURFO0FBWlA7QUFOQSxHQXJFSztBQTZGYitDLFFBQU0sRUFBRTtBQUNOL0MsU0FBSyxFQUFFLE9BREQ7QUFFTkQsWUFBUSxFQUFFLE1BRko7QUFHTmlELE1BQUUsRUFBRSxLQUhFO0FBSU5MLFVBQU0sRUFBRSxNQUpGO0FBS05NLGdCQUFZLEVBQUUsS0FMUjtBQU1OL0MsVUFBTSxFQUFFLFNBTkY7QUFPTkssU0FBSyxFQUFFLE1BUEQ7QUFRTm5CLFdBQU8sRUFBRSxNQVJIO0FBU05RLGNBQVUsRUFBRSxRQVROO0FBVU5DLGtCQUFjLEVBQUUsUUFWVjtBQVdOb0IsTUFBRSxFQUFFO0FBWEU7QUE3RkssQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNpQyxTQUFULEdBQXFCO0FBQ2xDLFNBQ0UsTUFBQyxzREFBRDtBQUFlLFNBQUssRUFBRUMsNkNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQUssU0FBSyxFQUFDLDJCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFPRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVFFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFVRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixDQURKLENBREY7QUFnQkQ7S0FqQnVCRCxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdmMTY0YWQxZmZhODU5MTUyOGU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciwgSW1hZ2UsIFRleHQgfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJjb21wb25lbnRzL2xpbmtcIjtcclxuaW1wb3J0IGRhdGEgZnJvbSBcIi4vZm9vdGVyLmRhdGFcIjtcclxuaW1wb3J0IEZvb3RlckxvZ28gZnJvbSBcImFzc2V0cy9sb2dvLnN2Z1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIHN4PXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVyLmZvb3RlckJvdHRvbUFyZWF9PlxyXG4gICAgICAgICAgPExpbmsgcGF0aD1cIi9cIj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17Rm9vdGVyTG9nb30gYWx0PVwiTG9nb1wiIC8+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVyLm1lbnVzfT5cclxuICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICB7ZGF0YS5tZW51SXRlbS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgIHBhdGg9e2l0ZW0ucGF0aH1cclxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmtleX1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgIHN4PXtzdHlsZXMuZm9vdGVyLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5mb290ZXIuY29weXJpZ2h0fT5cclxuICAgICAgICAgICAgQ29weXJpZ2h0IERpc2NsYWltZXIgdW5kZXIgU2VjdGlvbiAxMDcgb2YgdGhlIGNvcHlyaWdodCBhY3QgMTk3NixcclxuICAgICAgICAgICAgYWxsb3dhbmNlIGlzIG1hZGUgZm9yIGZhaXIgdXNlIGZvciBwdXJwb3NlcyBzdWNoIGFzIGNyaXRpY2lzbSxcclxuICAgICAgICAgICAgY29tbWVudCwgbmV3cyByZXBvcnRpbmcsIHNjaG9sYXJzaGlwLCBhbmQgcmVzZWFyY2guXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmZvb3Rlci5jb3B5cmlnaHR9PlxyXG4gICAgICAgICAgICBEaXNjbGFpbWVyOiBVbmRlciB0aGUgRmFpciBVc2UgQ29weXJpZ2h0IEFjdCBJIGhhdmUgdGFrZW5cclxuICAgICAgICAgICAgaW5zcGlyYXRpb24gYW5kIG15IGV4cGVyaWVuY2UgZnJvbSBteSBwcmV2aW91cyBlbXBsb3llciB0byBkZXNpZ25cclxuICAgICAgICAgICAgYW5kIGNvZGUgYSBwZXJzb25hbCBwcm9qZWN0IGZvciBjcmVhdGl2ZSBwdXJwb3Nlcy4gSSBkbyBub3Qgb3duIGFueVxyXG4gICAgICAgICAgICBMb2thbHlzdCBhc3NldHMuXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGZvb3Rlcjoge1xyXG4gICAgZm9vdGVyQm90dG9tQXJlYToge1xyXG4gICAgICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkXCIsXHJcbiAgICAgIGJvcmRlclRvcENvbG9yOiBcImJvcmRlcl9jb2xvclwiLFxyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgcHQ6IFs3LCBudWxsLCA4XSxcclxuICAgICAgcGI6IFtcIjQwcHhcIiwgbnVsbCwgXCIxMDBweFwiXSxcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgfSxcclxuICAgIG1lbnVzOiB7XHJcbiAgICAgIG10OiBbMywgNF0sXHJcbiAgICAgIG1iOiAyLFxyXG4gICAgICBuYXY6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgbGluazoge1xyXG4gICAgICBmb250U2l6ZTogWzEsIFwiMTVweFwiXSxcclxuICAgICAgY29sb3I6IFwidGV4dFwiLFxyXG4gICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxyXG4gICAgICBtYjogMixcclxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4zNXNcIixcclxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjUsIG51bGwsIDEuOF0sXHJcbiAgICAgIHB4OiBbMiwgbnVsbCwgNF0sXHJcbiAgICAgIFwiOmhvdmVyXCI6IHtcclxuICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY29weXJpZ2h0OiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMSwgXCIxNXB4XCJdLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IFtcclxuICB7XHJcbiAgICBwYXRoOiAnaG9tZScsXHJcbiAgICBsYWJlbDogJ0hvbWUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ2ZlYXR1cmUnLFxyXG4gICAgbGFiZWw6ICdGZWF0dXJlcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAncHJpY2luZycsXHJcbiAgICBsYWJlbDogJ1ByaWNpbmcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3Rlc3RpbW9uaWFsJyxcclxuICAgIGxhYmVsOiAnVGVzdGltb25pYWwnLFxyXG4gIH0sXHJcbl07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgRmxleCwgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvbG9nbyc7XHJcbmltcG9ydCBMb2dvRGFyayBmcm9tICdhc3NldHMvbG9nby5zdmcnO1xyXG5pbXBvcnQgTW9iaWxlRHJhd2VyIGZyb20gJy4vbW9iaWxlLWRyYXdlcic7XHJcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyBjbGFzc05hbWUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxoZWFkZXIgc3g9e3N0eWxlcy5oZWFkZXJ9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD1cImhlYWRlclwiPlxyXG4gICAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPExvZ28gc3JjPXtMb2dvRGFya30vPlxyXG4gICAgICAgICAgPEZsZXggYXM9XCJuYXZcIiBzeD17c3R5bGVzLm5hdn0+XHJcbiAgICAgICAgICAgIHttZW51SXRlbXMubWFwKChtZW51SXRlbSwgaSkgPT4gKCBcclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgdG89e21lbnVJdGVtLnBhdGh9XHJcbiAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ9ey03MH1cclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge21lbnVJdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImRvbmF0ZV9fYnRuXCIgdmFyaWVudD1cInNlY29uZGFyeVwiIGFyaWEtbGFiZWw9XCJHZXQgU3RhcnRlZFwiPlJlZ2lzdGVyPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImRvbmF0ZV9fYnRuXCIgdmFyaWVudD1cInNlY29uZGFyeVwiIGFyaWEtbGFiZWw9XCJHZXQgU3RhcnRlZFwiPkxvZyBJbjwvQnV0dG9uPlxyXG4gICAgICAgICAgPE1vYmlsZURyYXdlciAvPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBwb3NpdGlvbkFuaW0gPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGhlYWRlcjoge1xyXG4gICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcclxuICAgIHB5OiA0LFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC40cyBlYXNlJyxcclxuICAgIGFuaW1hdGlvbjogYCR7cG9zaXRpb25BbmltfSAwLjRzIGVhc2VgLFxyXG4gICAgJy5kb25hdGVfX2J0bic6IHtcclxuICAgICAgZmxleFNocmluazogMCxcclxuICAgICAgbXI6IFsxNSwgMjAsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgICBtbDogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICB9LFxyXG4gICAgJyYuc3RpY2t5Jzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmFja2dyb3VuZCcsXHJcbiAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICAgIGJveFNoYWRvdzogJzAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpJyxcclxuICAgICAgcHk6IDMsXHJcbiAgICAgICduZXYgPiBhJzoge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgfSxcclxuICBuYXY6IHtcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSc6IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIH0sXHJcbiAgICBhOiB7XHJcbiAgICAgIGZvbnRTaXplOiAyLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXHJcbiAgICAgIHB4OiA1LFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgbGluZUhlaWdodDogJzEuMicsXHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4xNXMnLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICB9LFxyXG4gICAgICAnJi5hY3RpdmUnOiB7XHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IFNjcm9sbGJhcnMgfSBmcm9tICdyZWFjdC1jdXN0b20tc2Nyb2xsYmFycyc7XHJcbmltcG9ydCBEcmF3ZXIgZnJvbSAnY29tcG9uZW50cy9kcmF3ZXInO1xyXG5pbXBvcnQgeyBJb01kQ2xvc2UsIElvTWRNZW51IH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IHsgRmFGYWNlYm9va0YsIEZhVHdpdHRlciwgRmFHaXRodWJBbHQsIEZhRHJpYmJibGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XHJcblxyXG5jb25zdCBzb2NpYWwgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgaWNvbjogPEZhVHdpdHRlciAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGljb246IDxGYUdpdGh1YkFsdCAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGljb246IDxGYURyaWJiYmxlIC8+LFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2JpbGVEcmF3ZXIoKSB7XHJcbiAgY29uc3QgW2lzRHJhd2VyT3Blbiwgc2V0aXNEcmF3ZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPERyYXdlclxyXG4gICAgICB3aWR0aD1cIjMyMHB4XCJcclxuICAgICAgZHJhd2VySGFuZGxlcj17XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmhhbmRsZXJ9PlxyXG4gICAgICAgICAgPElvTWRNZW51IHNpemU9XCIyNnB4XCIgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgfVxyXG4gICAgICBvcGVuPXtpc0RyYXdlck9wZW59XHJcbiAgICAgIHRvZ2dsZUhhbmRsZXI9eygpPT4gc2V0aXNEcmF3ZXJPcGVuKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpfVxyXG4gICAgICBjbG9zZUJ1dHRvbj17PElvTWRDbG9zZSBzaXplPVwiMjRweFwiIGNvbG9yPVwiMDAwMDAwXCIgLz59XHJcbiAgICAgIGRyYXdlclN0eWxlPXtzdHlsZXMuZHJhd2VyfVxyXG4gICAgICBjbG9zZUJ0blN0eWxlPXtzdHlsZXMuY2xvc2V9XHJcbiAgICA+XHJcbiAgICAgIDxTY3JvbGxiYXJzIGF1dG9IaWRlPlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgIHttZW51SXRlbXMubWFwKChtZW51SXRlbSwgaSkgPT4gKCBcclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgdG89e21lbnVJdGVtLnBhdGh9XHJcbiAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ9ey03MH1cclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge21lbnVJdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5tZW51Rm9vdGVyfT5cclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnNvY2lhbH0+XHJcbiAgICAgICAgICAgICAge3NvY2lhbC5tYXAoKHNvY2lhbEl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxCb3ggYXM9XCJzcGFuXCIga2V5ID17aX0gc3g9e3N0eWxlcy5zb2NpYWwuaWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvID17c29jaWFsSXRlbS5wYXRofT57c29jaWFsSXRlbS5pY29ufTwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9TY3JvbGxiYXJzPlxyXG5cclxuICAgIDwvRHJhd2VyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgaGFuZGxlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBmbGV4U2hyaW5rOiAnMCcsXHJcbiAgICB3aWR0aDogJzI2cHgnLFxyXG5cclxuICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpJzoge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGRyYXdlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZGFyaycsXHJcbiAgfSxcclxuXHJcbiAgY2xvc2U6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICcyNXB4JyxcclxuICAgIHJpZ2h0OiAnMzBweCcsXHJcbiAgICB6SW5kZXg6ICcxJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIH0sXHJcblxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgcHQ6ICcxMDBweCcsXHJcbiAgICBwYjogJzQwcHgnLFxyXG4gICAgcHg6ICczMHB4JyxcclxuICB9LFxyXG5cclxuICBtZW51OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG4gICAgICBjb2xvcjogJ3RleHRfd2hpdGUnLFxyXG4gICAgICBweTogJzE1cHgnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlOGU1ZTUnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgICAnJi5hY3RpdmUnOiB7XHJcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBtZW51Rm9vdGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG10OiAnYXV0bycsXHJcbiAgfSxcclxuXHJcbiAgc29jaWFsOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblxyXG4gICAgaWNvbjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgbXI6ICcxNXB4JyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAnOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgICAgbXI6ICcwJyxcclxuICAgICAgfSxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBidXR0b246IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIGZ3OiAnNzAwJyxcclxuICAgIGhlaWdodDogJzQ1cHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgcHk6ICcwJyxcclxuICB9LFxyXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICd0aGVtZSc7XHJcblxyXG5pbXBvcnQgU0VPIGZyb20gJ2NvbXBvbmVudHMvc2VvJztcclxuaW1wb3J0IExheW91dCBmcm9tICdjb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vc2VjdGlvbnMvYmFubmVyJztcclxuaW1wb3J0IEtleUZlYXR1cmUgZnJvbSAnLi4vc2VjdGlvbnMva2V5LWZlYXR1cmUnO1xyXG5pbXBvcnQgU2VydmljZVNlY3Rpb24gZnJvbSAnLi4vc2VjdGlvbnMvc2VydmljZS1zZWN0aW9uJztcclxuaW1wb3J0IEZlYXR1cmUgZnJvbSAnLi4vc2VjdGlvbnMvZmVhdHVyZSc7XHJcbmltcG9ydCBDb3JlRmVhdHVyZSBmcm9tICcuLi9zZWN0aW9ucy9jb3JlLWZlYXR1cmUnO1xyXG5pbXBvcnQgV29ya0Zsb3cgZnJvbSAnLi4vc2VjdGlvbnMvd29ya2Zsb3cnO1xyXG5pbXBvcnQgUGFja2FnZSBmcm9tICcuLi9zZWN0aW9ucy9wYWNrYWdlJztcclxuaW1wb3J0IFRlYW1TZWN0aW9uIGZyb20gJy4uL3NlY3Rpb25zL3RlYW0tc2VjdGlvbic7XHJcbmltcG9ydCBUZXN0aW1vbmlhbENhcmQgZnJvbSAnLi4vc2VjdGlvbnMvdGVzdGltb25pYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8U0VPIHRpdGxlPVwiSm9uYXRoYW4gRGF5cyBTRU8gUHJvamVjdFwiIC8+XHJcbiAgICAgICAgICA8QmFubmVyIC8+XHJcbiAgICAgICAgICA8S2V5RmVhdHVyZSAvPlxyXG4gICAgICAgICAgPFNlcnZpY2VTZWN0aW9uIC8+XHJcbiAgICAgICAgICA8RmVhdHVyZSAvPlxyXG4gICAgICAgICAgPENvcmVGZWF0dXJlIC8+XHJcbiAgICAgICAgICA8V29ya0Zsb3cgLz5cclxuICAgICAgICAgIDxQYWNrYWdlIC8+XHJcbiAgICAgICAgICA8VGVhbVNlY3Rpb24gLz5cclxuICAgICAgICAgIDxUZXN0aW1vbmlhbENhcmQgLz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=