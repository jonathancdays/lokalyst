webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/button-group.js":
/*!****************************************!*\
  !*** ./src/components/button-group.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\button-group.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


function ButtonGroup(_ref) {
  var next = _ref.next,
      previous = _ref.previous;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: {
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.button,
    className: "button__group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
    onClick: previous,
    "aria-label": "Previous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosArrowRoundBack"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
    onClick: next,
    "aria-label": "Next",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }))));
}
_c = ButtonGroup;
var styles = {
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    mb: -4,
    button: {
      bg: "transparent",
      border: "0px solid",
      fontSize: 40,
      cursor: "pointer",
      px: "2px",
      color: "#BBC7D7",
      transition: "all 0.25s",
      "&:hover": {
        color: "text"
      },
      "&:focus": {
        outline: 0
      }
    }
  }
};

var _c;

$RefreshReg$(_c, "ButtonGroup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbkdyb3VwIiwibmV4dCIsInByZXZpb3VzIiwid2lkdGgiLCJzdHlsZXMiLCJidXR0b24iLCJidXR0b25Hcm91cCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1iIiwiYmciLCJib3JkZXIiLCJmb250U2l6ZSIsImN1cnNvciIsInB4IiwiY29sb3IiLCJ0cmFuc2l0aW9uIiwib3V0bGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxXQUFULE9BQXlDO0FBQUEsTUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUN0RCxTQUNFLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFFO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxNQUFoQjtBQUF3QixhQUFTLEVBQUMsZUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFSCxRQUFqQjtBQUEyQixrQkFBVyxVQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFRLFdBQU8sRUFBRUQsSUFBakI7QUFBdUIsa0JBQVcsTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREYsQ0FERixDQURGO0FBZUQ7S0FoQnVCRCxXO0FBa0J4QixJQUFNSSxNQUFNLEdBQUc7QUFDYkUsYUFBVyxFQUFFO0FBQ1hDLFdBQU8sRUFBRSxNQURFO0FBRVhDLGtCQUFjLEVBQUUsUUFGTDtBQUdYQyxNQUFFLEVBQUUsQ0FBQyxDQUhNO0FBSVhKLFVBQU0sRUFBRTtBQUNOSyxRQUFFLEVBQUUsYUFERTtBQUVOQyxZQUFNLEVBQUUsV0FGRjtBQUdOQyxjQUFRLEVBQUUsRUFISjtBQUlOQyxZQUFNLEVBQUUsU0FKRjtBQUtOQyxRQUFFLEVBQUUsS0FMRTtBQU1OQyxXQUFLLEVBQUUsU0FORDtBQU9OQyxnQkFBVSxFQUFFLFdBUE47QUFRTixpQkFBVztBQUNURCxhQUFLLEVBQUU7QUFERSxPQVJMO0FBV04saUJBQVc7QUFDVEUsZUFBTyxFQUFFO0FBREE7QUFYTDtBQUpHO0FBREEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNTMyNjkzZDdmY2I2NjMzZTMxNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIsIEZsZXggfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd1JvdW5kQmFjaywgSW9Jb3NBcnJvd1JvdW5kRm9yd2FyZCB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uR3JvdXAoeyBuZXh0LCBwcmV2aW91cyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4IHN4PXt7IHdpZHRoOiAnMTAwJSd9fT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYnV0dG9ufSBjbGFzc05hbWU9XCJidXR0b25fX2dyb3VwXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ByZXZpb3VzfSBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIj5cclxuICAgICAgICAgICAgPElvSW9zQXJyb3dSb3VuZEJhY2sgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXh0fSBhcmlhLWxhYmVsPVwiTmV4dFwiPlxyXG5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGJ1dHRvbkdyb3VwOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgbWI6IC00LFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgIGJnOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIGJvcmRlcjogXCIwcHggc29saWRcIixcclxuICAgICAgZm9udFNpemU6IDQwLFxyXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICBweDogXCIycHhcIixcclxuICAgICAgY29sb3I6IFwiI0JCQzdEN1wiLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjI1c1wiLFxyXG4gICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIGNvbG9yOiBcInRleHRcIixcclxuICAgICAgfSxcclxuICAgICAgXCImOmZvY3VzXCI6IHtcclxuICAgICAgICBvdXRsaW5lOiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9