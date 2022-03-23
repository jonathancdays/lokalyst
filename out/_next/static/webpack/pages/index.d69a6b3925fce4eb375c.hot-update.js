webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/drawer.js":
/*!**********************************!*\
  !*** ./src/components/drawer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drawer; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-drawer */ "./node_modules/rc-drawer/es/index.js");


var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function Drawer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      closeButton = _ref.closeButton,
      closeButtonStyle = _ref.closeButtonStyle,
      drawerHandler = _ref.drawerHandler,
      toggleHandler = _ref.toggleHandler,
      open = _ref.open,
      width = _ref.width,
      placement = _ref.placement,
      drawerStyle = _ref.drawerStyle,
      closeBtnStyle = _ref.closeBtnStyle,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open", "width", "placement", "drawerStyle", "closeBtnStyle"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(rc_drawer__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    open: open,
    ocClose: toggleHandler,
    className: "drawer ".concat(className ? className : "").trim(),
    width: width,
    placement: placement,
    handler: false,
    level: null,
    duration: "0.4s"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), closeButton && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    as: "div",
    onclick: toggleHandler,
    sx: closeBtnStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, closeButton), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    sx: drawerStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, children)), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    className: "drawer__handler",
    style: {
      display: "inline-block"
    },
    onClick: toggleHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, drawerHandler));
}
_c = Drawer;
Drawer.defaultProps = {
  width: "320px",
  placement: "left"
};

var _c;

$RefreshReg$(_c, "Drawer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZHJhd2VyLmpzIl0sIm5hbWVzIjpbIkRyYXdlciIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiY2xvc2VCdXR0b24iLCJjbG9zZUJ1dHRvblN0eWxlIiwiZHJhd2VySGFuZGxlciIsInRvZ2dsZUhhbmRsZXIiLCJvcGVuIiwid2lkdGgiLCJwbGFjZW1lbnQiLCJkcmF3ZXJTdHlsZSIsImNsb3NlQnRuU3R5bGUiLCJwcm9wcyIsInRyaW0iLCJkaXNwbGF5IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQWFaO0FBQUEsTUFaREMsU0FZQyxRQVpEQSxTQVlDO0FBQUEsTUFYREMsUUFXQyxRQVhEQSxRQVdDO0FBQUEsTUFWREMsV0FVQyxRQVZEQSxXQVVDO0FBQUEsTUFUREMsZ0JBU0MsUUFUREEsZ0JBU0M7QUFBQSxNQVJEQyxhQVFDLFFBUkRBLGFBUUM7QUFBQSxNQVBEQyxhQU9DLFFBUERBLGFBT0M7QUFBQSxNQU5EQyxJQU1DLFFBTkRBLElBTUM7QUFBQSxNQUxEQyxLQUtDLFFBTERBLEtBS0M7QUFBQSxNQUpEQyxTQUlDLFFBSkRBLFNBSUM7QUFBQSxNQUhEQyxXQUdDLFFBSERBLFdBR0M7QUFBQSxNQUZEQyxhQUVDLFFBRkRBLGFBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUNFLFFBQUksRUFBRUwsSUFEUjtBQUVFLFdBQU8sRUFBRUQsYUFGWDtBQUdFLGFBQVMsRUFBRSxpQkFBVUwsU0FBUyxHQUFHQSxTQUFILEdBQWUsRUFBbEMsRUFBdUNZLElBQXZDLEVBSGI7QUFJRSxTQUFLLEVBQUVMLEtBSlQ7QUFLRSxhQUFTLEVBQUVDLFNBTGI7QUFNRSxXQUFPLEVBQUUsS0FOWDtBQU9FLFNBQUssRUFBRSxJQVBUO0FBUUUsWUFBUSxFQUFFO0FBUlosS0FTTUcsS0FUTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BV0dULFdBQVcsSUFDVixNQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFDLEtBQVI7QUFBYyxXQUFPLEVBQUVHLGFBQXZCO0FBQXNDLE1BQUUsRUFBRUssYUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUixXQURILENBWkosRUFnQkUsTUFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRU8sV0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVCUixRQUF2QixDQWhCRixDQURGLEVBbUJFLE1BQUMsNENBQUQ7QUFDRSxhQUFTLEVBQUMsaUJBRFo7QUFFRSxTQUFLLEVBQUU7QUFBRVksYUFBTyxFQUFFO0FBQVgsS0FGVDtBQUdFLFdBQU8sRUFBRVIsYUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0dELGFBTEgsQ0FuQkYsQ0FERjtBQTZCRDtLQTNDdUJMLE07QUE2Q3hCQSxNQUFNLENBQUNlLFlBQVAsR0FBc0I7QUFDcEJQLE9BQUssRUFBRSxPQURhO0FBRXBCQyxXQUFTLEVBQUU7QUFGUyxDQUF0QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNjlhNmIzOTI1ZmNlNGViMzc1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgUmNEcmF3ZXIgZnJvbSBcInJjLWRyYXdlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJhd2VyKHtcclxuICBjbGFzc05hbWUsXHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xvc2VCdXR0b24sXHJcbiAgY2xvc2VCdXR0b25TdHlsZSxcclxuICBkcmF3ZXJIYW5kbGVyLFxyXG4gIHRvZ2dsZUhhbmRsZXIsXHJcbiAgb3BlbixcclxuICB3aWR0aCxcclxuICBwbGFjZW1lbnQsXHJcbiAgZHJhd2VyU3R5bGUsXHJcbiAgY2xvc2VCdG5TdHlsZSxcclxuICAuLi5wcm9wc1xyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPFJjRHJhd2VyXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvY0Nsb3NlPXt0b2dnbGVIYW5kbGVyfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YGRyYXdlciAke2NsYXNzTmFtZSA/IGNsYXNzTmFtZSA6IFwiXCJ9YC50cmltKCl9XHJcbiAgICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICAgIHBsYWNlbWVudD17cGxhY2VtZW50fVxyXG4gICAgICAgIGhhbmRsZXI9e2ZhbHNlfVxyXG4gICAgICAgIGxldmVsPXtudWxsfVxyXG4gICAgICAgIGR1cmF0aW9uPXtcIjAuNHNcIn1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2xvc2VCdXR0b24gJiYgKFxyXG4gICAgICAgICAgPEJveCBhcz1cImRpdlwiIG9uY2xpY2s9e3RvZ2dsZUhhbmRsZXJ9IHN4PXtjbG9zZUJ0blN0eWxlfT5cclxuICAgICAgICAgICAge2Nsb3NlQnV0dG9ufVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8Qm94IHN4PXtkcmF3ZXJTdHlsZX0+e2NoaWxkcmVufTwvQm94PlxyXG4gICAgICA8L1JjRHJhd2VyPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZHJhd2VyX19oYW5kbGVyXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19XHJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlSGFuZGxlcn1cclxuICAgICAgPlxyXG4gICAgICAgIHtkcmF3ZXJIYW5kbGVyfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuRHJhd2VyLmRlZmF1bHRQcm9wcyA9IHtcclxuICB3aWR0aDogXCIzMjBweFwiLFxyXG4gIHBsYWNlbWVudDogXCJsZWZ0XCIsXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=