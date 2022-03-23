webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-stickynode */ "./node_modules/react-stickynode/index.js");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header */ "./src/components/header/header.js");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer */ "./src/components/footer/footer.js");
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\layout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */





function Layout(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isSticky = _useState[0],
      setIsSticky = _useState[1];

  var handleStateChange = function handleStateChange(status) {
    if (status.status === react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a, {
    innerZ: 1001,
    top: 0,
    onStateChange: handleStateChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "".concat(isSticky ? "sticky" : "unSticky"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("main", {
    id: "content",
    sx: {
      variant: "layout.main"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, children), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_footer_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }));
}

_s(Layout, "4Xv7pjWiiTNLaJhWZ3dQv4VkgkE=");

_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJpc1N0aWNreSIsInNldElzU3RpY2t5IiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJzdGF0dXMiLCJTdGlja3kiLCJTVEFUVVNfRklYRUQiLCJTVEFUVVNfT1JJR0lOQUwiLCJ2YXJpYW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLGtCQUNYQyxzREFBUSxDQUFDLEtBQUQsQ0FERztBQUFBLE1BQ3BDQyxRQURvQztBQUFBLE1BQzFCQyxXQUQwQjs7QUFHM0MsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxNQUFELEVBQVk7QUFDcEMsUUFBSUEsTUFBTSxDQUFDQSxNQUFQLEtBQWtCQyx1REFBTSxDQUFDQyxZQUE3QixFQUEyQztBQUN6Q0osaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDRCxLQUZELE1BRU8sSUFBSUUsTUFBTSxDQUFDQSxNQUFQLEtBQWtCQyx1REFBTSxDQUFDRSxlQUE3QixFQUE4QztBQUNuREwsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDRDtBQUNGLEdBTkQ7O0FBUUEsU0FDRSxxREFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLHVEQUFEO0FBQVEsVUFBTSxFQUFFLElBQWhCO0FBQXNCLE9BQUcsRUFBRSxDQUEzQjtBQUE4QixpQkFBYSxFQUFFQyxpQkFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLHNEQUFEO0FBQVEsYUFBUyxZQUFLRixRQUFRLEdBQUcsUUFBSCxHQUFjLFVBQTNCLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBTSxNQUFFLEVBQUMsU0FBVDtBQUFtQixNQUFFLEVBQUU7QUFBRU8sYUFBTyxFQUFFO0FBQVgsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVCxRQURILENBSkYsRUFPRSxxREFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERjtBQVdEOztHQXRCdUJELE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODU3YjcyMmY0YWU5ODBiYzdjNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTdGlja3kgZnJvbSBcInJlYWN0LXN0aWNreW5vZGVcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXIvaGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyL2Zvb3RlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtpc1N0aWNreSwgc2V0SXNTdGlja3ldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdGF0ZUNoYW5nZSA9IChzdGF0dXMpID0+IHtcclxuICAgIGlmIChzdGF0dXMuc3RhdHVzID09PSBTdGlja3kuU1RBVFVTX0ZJWEVEKSB7XHJcbiAgICAgIHNldElzU3RpY2t5KHRydWUpO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0dXMuc3RhdHVzID09PSBTdGlja3kuU1RBVFVTX09SSUdJTkFMKSB7XHJcbiAgICAgIHNldElzU3RpY2t5KGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8U3RpY2t5IGlubmVyWj17MTAwMX0gdG9wPXswfSBvblN0YXRlQ2hhbmdlPXtoYW5kbGVTdGF0ZUNoYW5nZX0+XHJcbiAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9e2Ake2lzU3RpY2t5ID8gXCJzdGlja3lcIiA6IFwidW5TdGlja3lcIn1gfSAvPlxyXG4gICAgICA8L1N0aWNreT5cclxuICAgICAgPG1haW4gaWQ9XCJjb250ZW50XCIgc3g9e3sgdmFyaWFudDogXCJsYXlvdXQubWFpblwiIH19PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==