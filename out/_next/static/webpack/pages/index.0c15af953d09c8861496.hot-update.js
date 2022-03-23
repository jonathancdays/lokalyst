webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/feature.js":
/*!*********************************!*\
  !*** ./src/sections/feature.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Feature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_feature_card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/feature-card.js */ "./src/components/feature-card.js");
/* harmony import */ var assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/feature/performance.svg */ "./src/assets/feature/performance.svg");
/* harmony import */ var assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/feature/partnership.svg */ "./src/assets/feature/partnership.svg");
/* harmony import */ var assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/feature/subscription.svg */ "./src/assets/feature/subscription.svg");
/* harmony import */ var assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/feature/support.svg */ "./src/assets/feature/support.svg");
/* harmony import */ var assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\sections\\feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */








var data = [{
  id: 1,
  imgSrc: assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  altText: 'SEO Web Design',
  title: 'SEO Web Design',
  text: 'We will create a comprehensive website SEO strategy and manage the website launch to ensure the best possible outcome.'
}, {
  id: 2,
  imgSrc: assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: 'Speed Optimization',
  title: 'Speed Optimization',
  text: 'We can work with your existing developer or bring in our dev team to optimize your website’s speed performance.'
}, {
  id: 3,
  imgSrc: assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: 'Partnership deal',
  title: 'Partnership deal',
  text: 'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.'
}, {
  id: 4,
  imgSrc: assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  altText: 'Customer Support',
  title: 'Customer Support',
  text: 'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.'
}];
function Feature() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }
  }, "Feature");
}
_c = Feature;
var styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: ['40px 0', null, '45px 30px', null, '60px 50px', '70px 50px', null, '80px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)']
  }
};

var _c;

$RefreshReg$(_c, "Feature");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2ZlYXR1cmUuanMiXSwibmFtZXMiOlsiZGF0YSIsImlkIiwiaW1nU3JjIiwiUGVyZm9ybWFuY2UiLCJhbHRUZXh0IiwidGl0bGUiLCJ0ZXh0IiwiUGFydG5lcnNoaXAiLCJTdWJzY3JpcHRpb24iLCJTdXBwb3J0IiwiRmVhdHVyZSIsInN0eWxlcyIsImdyaWQiLCJwdCIsInB4IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFQyxxRUFGVjtBQUdFQyxTQUFPLEVBQUUsZ0JBSFg7QUFJRUMsT0FBSyxFQUFFLGdCQUpUO0FBS0VDLE1BQUksRUFDRjtBQU5KLENBRFcsRUFTWDtBQUNFTCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFNLEVBQUVLLHFFQUZWO0FBR0VILFNBQU8sRUFBRSxvQkFIWDtBQUlFQyxPQUFLLEVBQUUsb0JBSlQ7QUFLRUMsTUFBSSxFQUNGO0FBTkosQ0FUVyxFQWlCWDtBQUNFTCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFNLEVBQUVNLHNFQUZWO0FBR0VKLFNBQU8sRUFBRSxrQkFIWDtBQUlFQyxPQUFLLEVBQUUsa0JBSlQ7QUFLRUMsTUFBSSxFQUNGO0FBTkosQ0FqQlcsRUF5Qlg7QUFDRUwsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFTyxpRUFGVjtBQUdFTCxTQUFPLEVBQUUsa0JBSFg7QUFJRUMsT0FBSyxFQUFFLGtCQUpUO0FBS0VDLE1BQUksRUFDRjtBQU5KLENBekJXLENBQWI7QUFtQ2UsU0FBU0ksT0FBVCxHQUFtQjtBQUNoQyxTQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQUdEO0tBSnVCQSxPO0FBTXhCLElBQU1DLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUU7QUFDSkMsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLElBQTVCLEVBQWtDLENBQWxDLENBREE7QUFFSkMsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsSUFBVixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUZBO0FBR0pDLFdBQU8sRUFBRSxDQUNQLFFBRE8sRUFFUCxJQUZPLEVBR1AsV0FITyxFQUlQLElBSk8sRUFLUCxXQUxPLEVBTVAsV0FOTyxFQU9QLElBUE8sRUFRUCxXQVJPLENBSEw7QUFhSkMsdUJBQW1CLEVBQUUsQ0FBQyxlQUFELEVBQWtCLElBQWxCLEVBQXdCLGVBQXhCO0FBYmpCO0FBRE8sQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYzE1YWY5NTNkMDljODg2MTQ5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IEZlYXR1cmVDYXJkIGZyb20gJ2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLmpzJztcclxuaW1wb3J0IFBlcmZvcm1hbmNlIGZyb20gJ2Fzc2V0cy9mZWF0dXJlL3BlcmZvcm1hbmNlLnN2Zyc7XHJcbmltcG9ydCBQYXJ0bmVyc2hpcCBmcm9tICdhc3NldHMvZmVhdHVyZS9wYXJ0bmVyc2hpcC5zdmcnO1xyXG5pbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJ2Fzc2V0cy9mZWF0dXJlL3N1YnNjcmlwdGlvbi5zdmcnO1xyXG5pbXBvcnQgU3VwcG9ydCBmcm9tICdhc3NldHMvZmVhdHVyZS9zdXBwb3J0LnN2Zyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaW1nU3JjOiBQZXJmb3JtYW5jZSxcclxuICAgIGFsdFRleHQ6ICdTRU8gV2ViIERlc2lnbicsXHJcbiAgICB0aXRsZTogJ1NFTyBXZWIgRGVzaWduJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdXZSB3aWxsIGNyZWF0ZSBhIGNvbXByZWhlbnNpdmUgd2Vic2l0ZSBTRU8gc3RyYXRlZ3kgYW5kIG1hbmFnZSB0aGUgd2Vic2l0ZSBsYXVuY2ggdG8gZW5zdXJlIHRoZSBiZXN0IHBvc3NpYmxlIG91dGNvbWUuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgaW1nU3JjOiBQYXJ0bmVyc2hpcCxcclxuICAgIGFsdFRleHQ6ICdTcGVlZCBPcHRpbWl6YXRpb24nLFxyXG4gICAgdGl0bGU6ICdTcGVlZCBPcHRpbWl6YXRpb24nLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ1dlIGNhbiB3b3JrIHdpdGggeW91ciBleGlzdGluZyBkZXZlbG9wZXIgb3IgYnJpbmcgaW4gb3VyIGRldiB0ZWFtIHRvIG9wdGltaXplIHlvdXIgd2Vic2l0ZeKAmXMgc3BlZWQgcGVyZm9ybWFuY2UuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgaW1nU3JjOiBTdWJzY3JpcHRpb24sXHJcbiAgICBhbHRUZXh0OiAnUGFydG5lcnNoaXAgZGVhbCcsXHJcbiAgICB0aXRsZTogJ1BhcnRuZXJzaGlwIGRlYWwnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0xldOKAmXMganVzdCBnZXQgdGhpcyBvdXQgb2YgdGhlIHdheSAtIHRoZXJlIHdpbGwgYWx3YXlzIGJlIGEga2l0IHZlcnNpb24gb2YgRWR1IGZsb3cuIFBhaWQgc3Vic2NyaXB0aW9ucyBhbGxvdyB1cyB0byBjb250aW51ZSBoZWxwaW5nIGxlYXJuZXJzIGFyb3VuZCB0aGUgd29ybGQuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgaW1nU3JjOiBTdXBwb3J0LFxyXG4gICAgYWx0VGV4dDogJ0N1c3RvbWVyIFN1cHBvcnQnLFxyXG4gICAgdGl0bGU6ICdDdXN0b21lciBTdXBwb3J0JyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdXZSBiZWxpZXZlIGl04oCZcyBpbXBvcnRhbnQgZm9yIGV2ZXJ5b25lIHRvIGhhdmUgYWNjZXNzIHRvIHNvZnR3YXJlIOKAkyBlc3BlY2lhbGx5IHdoZW4gaXQgY29tZXMgdG8gZGlnaXRhbCBsZWFybmluZyBiZSBuYXZpZ2F0ZWQgYnkga2V5Ym9hcmQgYW5kIHNjcmVlbiByZWFkZXJzLicsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgPGgxPkZlYXR1cmU8L2gxPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBncmlkOiB7XHJcbiAgICBwdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgcHg6IFs1LCA2LCAwLCBudWxsLCA3LCA4LCA3XSxcclxuICAgIGdyaWRHYXA6IFtcclxuICAgICAgJzQwcHggMCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc0NXB4IDMwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNjBweCA1MHB4JyxcclxuICAgICAgJzcwcHggNTBweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc4MHB4IDkwcHgnLFxyXG4gICAgXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFsncmVwZWF0KDEsMWZyKScsIG51bGwsICdyZXBlYXQoMiwxZnIpJ10sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==