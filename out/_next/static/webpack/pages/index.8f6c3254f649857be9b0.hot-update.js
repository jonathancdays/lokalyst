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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");

var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\list.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function List(_ref) {
  var _this = this;

  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      parentStyle = _ref.parentStyle,
      childStyle = _ref.childStyle;
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "ul",
    sx: _objectSpread({
      listStyleType: 'none',
      margin: 0,
      padding: 0
    }, parentStyle),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, items.map(function (item, i) {
    return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      className: item.isAvailable ? 'open' : 'closed',
      as: "li",
      sx: _objectSpread({}, childStyle),
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      sx: styles.listIcon,
      "aria-label": "list icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, item.icon), item.text);
  }));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGlzdC5qcyJdLCJuYW1lcyI6WyJMaXN0IiwiaXRlbXMiLCJwYXJlbnRTdHlsZSIsImNoaWxkU3R5bGUiLCJsaXN0U3R5bGVUeXBlIiwibWFyZ2luIiwicGFkZGluZyIsIm1hcCIsIml0ZW0iLCJpIiwiaXNBdmFpbGFibGUiLCJzdHlsZXMiLCJsaXN0SWNvbiIsImljb24iLCJ0ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJjb2xvciIsImZvbnRTaXplIiwibWwiLCJmbGV4U2hyaW5rIiwianVzdGlmeUNvbnRlbnQiLCJtdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsT0FBdUQ7QUFBQTs7QUFBQSx3QkFBdkNDLEtBQXVDO0FBQUEsTUFBdkNBLEtBQXVDLDJCQUEvQixFQUErQjtBQUFBLE1BQTNCQyxXQUEyQixRQUEzQkEsV0FBMkI7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7QUFDcEUsU0FDRSxNQUFDLDRDQUFEO0FBQ0UsTUFBRSxFQUFDLElBREw7QUFFRSxNQUFFO0FBQ0FDLG1CQUFhLEVBQUUsTUFEZjtBQUVBQyxZQUFNLEVBQUMsQ0FGUDtBQUdBQyxhQUFPLEVBQUU7QUFIVCxPQUlHSixXQUpILENBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNHRCxLQUFLLENBQUNNLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxXQUNULE1BQUMsNkNBQUQ7QUFDRSxlQUFTLEVBQUVELElBQUksQ0FBQ0UsV0FBTCxHQUFtQixNQUFuQixHQUEyQixRQUR4QztBQUVFLFFBQUUsRUFBQyxJQUZMO0FBR0UsUUFBRSxvQkFBUVAsVUFBUixDQUhKO0FBSUUsU0FBRyxFQUFJTSxDQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FNRSxNQUFDLG1EQUFEO0FBQVksUUFBRSxFQUFFRSxNQUFNLENBQUNDLFFBQXZCO0FBQWlDLG9CQUFXLFdBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0osSUFBSSxDQUFDSyxJQURSLENBTkYsRUFTR0wsSUFBSSxDQUFDTSxJQVRSLENBRFM7QUFBQSxHQUFWLENBVEgsQ0FERjtBQXlCRDtLQTFCdUJkLEk7QUE0QnhCLElBQU1XLE1BQU0sR0FBRztBQUNiQyxVQUFRLEVBQUU7QUFDUkcsU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FEQztBQUVSQyxVQUFNLEVBQUUsTUFGQTtBQUdSQyxTQUFLLEVBQUUsU0FIQztBQUlSWCxXQUFPLEVBQUUsQ0FKRDtBQUtSWSxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUxGO0FBTVJDLE1BQUUsRUFBRSxNQU5JO0FBT1JDLGNBQVUsRUFBRSxDQVBKO0FBUVJDLGtCQUFjLEVBQUUsWUFSUjtBQVNSQyxNQUFFLEVBQUU7QUFUSTtBQURHLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGY2YzMyNTRmNjQ5ODU3YmU5YjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmxleCwgQm94LCBJY29uQnV0dG9uIH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0KHsgaXRlbXMgPSBbXSwgcGFyZW50U3R5bGUsIGNoaWxkU3R5bGUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIGFzPVwidWxcIlxyXG4gICAgICBzeD17e1xyXG4gICAgICAgIGxpc3RTdHlsZVR5cGU6ICdub25lJyxcclxuICAgICAgICBtYXJnaW46MCxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgIC4uLnBhcmVudFN0eWxlXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtpdGVtLmlzQXZhaWxhYmxlID8gJ29wZW4nOiAnY2xvc2VkJyB9XHJcbiAgICAgICAgICBhcz1cImxpXCJcclxuICAgICAgICAgIHN4PXt7IC4uLiBjaGlsZFN0eWxlfX1cclxuICAgICAgICAgIGtleSA9IHtpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIHN4PXtzdHlsZXMubGlzdEljb259IGFyaWEtbGFiZWw9XCJsaXN0IGljb25cIj5cclxuICAgICAgICAgICAge2l0ZW0uaWNvbn1cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIHtpdGVtLnRleHR9XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICApKX1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBsaXN0SWNvbjoge1xyXG4gICAgd2lkdGg6IFtcIjI1cHhcIiwgXCIzNXB4XCJdLFxyXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcclxuICAgIGNvbG9yOiBcInByaW1hcnlcIixcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBmb250U2l6ZTogWzMsIDVdLFxyXG4gICAgbWw6IFwiLTFweFwiLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICAgIG10OiBcIjJweFwiLFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=