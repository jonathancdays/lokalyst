webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/feature-card-column.js":
/*!***********************************************!*\
  !*** ./src/components/feature-card-column.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeatureCardColumn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\feature-card-column.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */

function FeatureCardColumn(_ref) {
  var src = _ref.src,
      _ref$altText = _ref.altText,
      altText = _ref$altText === void 0 ? "default alt text" : _ref$altText,
      title = _ref.title,
      text = _ref.text;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: src,
    altText: altText,
    sx: styles.img,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, text)));
}
_c = FeatureCardColumn;
var styles = {
  card: {
    display: "flex",
    alignItems: ["center", "flex-start"],
    flexDirection: "column",
    mb: -1,
    textAlign: ["center", null, "left"],
    px: [4, null, 0]
  },
  img: {
    mx: ["auto", null, 0],
    ml: ["auto", null, "-13px"],
    mb: -2,
    width: ["80px", null, null, "90px", null, "auto"]
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3]
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: "1.9"
    }
  }
};

var _c;

$RefreshReg$(_c, "FeatureCardColumn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLWNvbHVtbi5qcyJdLCJuYW1lcyI6WyJGZWF0dXJlQ2FyZENvbHVtbiIsInNyYyIsImFsdFRleHQiLCJ0aXRsZSIsInRleHQiLCJzdHlsZXMiLCJjYXJkIiwiaW1nIiwid3JhcHBlciIsInN1YlRpdGxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwibWIiLCJ0ZXh0QWxpZ24iLCJweCIsIm14IiwibWwiLCJ3aWR0aCIsImZvbnRTaXplIiwiY29sb3IiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxpQkFBVCxPQUtaO0FBQUEsTUFKREMsR0FJQyxRQUpEQSxHQUlDO0FBQUEsMEJBSERDLE9BR0M7QUFBQSxNQUhEQSxPQUdDLDZCQUhTLGtCQUdUO0FBQUEsTUFGREMsS0FFQyxRQUZEQSxLQUVDO0FBQUEsTUFEREMsSUFDQyxRQUREQSxJQUNDO0FBQ0QsU0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsOENBQUQ7QUFBTyxPQUFHLEVBQUVMLEdBQVo7QUFBaUIsV0FBTyxFQUFFQyxPQUExQjtBQUFtQyxNQUFFLEVBQUVHLE1BQU0sQ0FBQ0UsR0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVGLE1BQU0sQ0FBQ0csT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGdEQUFEO0FBQVMsTUFBRSxFQUFFSCxNQUFNLENBQUNHLE9BQVAsQ0FBZUwsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQ0EsS0FBcEMsQ0FERixFQUVFLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFFRSxNQUFNLENBQUNHLE9BQVAsQ0FBZUMsUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQ0wsSUFBcEMsQ0FGRixDQUZGLENBREY7QUFTRDtLQWZ1QkosaUI7QUFpQnhCLElBQU1LLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUU7QUFDSkksV0FBTyxFQUFFLE1BREw7QUFFSkMsY0FBVSxFQUFFLENBQUMsUUFBRCxFQUFXLFlBQVgsQ0FGUjtBQUdKQyxpQkFBYSxFQUFFLFFBSFg7QUFJSkMsTUFBRSxFQUFFLENBQUMsQ0FKRDtBQUtKQyxhQUFTLEVBQUUsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixNQUFqQixDQUxQO0FBTUpDLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVjtBQU5BLEdBRE87QUFTYlIsS0FBRyxFQUFFO0FBQ0hTLE1BQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsQ0FBZixDQUREO0FBRUhDLE1BQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsT0FBZixDQUZEO0FBR0hKLE1BQUUsRUFBRSxDQUFDLENBSEY7QUFJSEssU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLE1BQXJCLEVBQTZCLElBQTdCLEVBQW1DLE1BQW5DO0FBSkosR0FUUTtBQWViVixTQUFPLEVBQUU7QUFDUFUsU0FBSyxFQUFFLE1BREE7QUFFUFIsV0FBTyxFQUFFLE1BRkY7QUFHUEUsaUJBQWEsRUFBRSxRQUhSO0FBSVBULFNBQUssRUFBRTtBQUNMZ0IsY0FBUSxFQUFFLENBREw7QUFFTEMsV0FBSyxFQUFFLG1CQUZGO0FBR0xDLGdCQUFVLEVBQUUsR0FIUDtBQUlMQyxnQkFBVSxFQUFFLEdBSlA7QUFLTFQsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWO0FBTEMsS0FKQTtBQVdQSixZQUFRLEVBQUU7QUFDUlUsY0FBUSxFQUFFLENBREY7QUFFUkcsZ0JBQVUsRUFBRSxHQUZKO0FBR1JELGdCQUFVLEVBQUU7QUFISjtBQVhIO0FBZkksQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYjk2ZjhmYjdkNDY3ZjBkMjFmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgSW1hZ2UsIEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZUNhcmRDb2x1bW4oe1xyXG4gIHNyYyxcclxuICBhbHRUZXh0ID0gXCJkZWZhdWx0IGFsdCB0ZXh0XCIsXHJcbiAgdGl0bGUsXHJcbiAgdGV4dCxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgIDxJbWFnZSBzcmM9e3NyY30gYWx0VGV4dD17YWx0VGV4dH0gc3g9e3N0eWxlcy5pbWd9IC8+XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9Pnt0aXRsZX08L0hlYWRpbmc+XHJcbiAgICAgICAgPFRleHQgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT57dGV4dH08L1RleHQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogW1wiY2VudGVyXCIsIFwiZmxleC1zdGFydFwiXSxcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBtYjogLTEsXHJcbiAgICB0ZXh0QWxpZ246IFtcImNlbnRlclwiLCBudWxsLCBcImxlZnRcIl0sXHJcbiAgICBweDogWzQsIG51bGwsIDBdLFxyXG4gIH0sXHJcbiAgaW1nOiB7XHJcbiAgICBteDogW1wiYXV0b1wiLCBudWxsLCAwXSxcclxuICAgIG1sOiBbXCJhdXRvXCIsIG51bGwsIFwiLTEzcHhcIl0sXHJcbiAgICBtYjogLTIsXHJcbiAgICB3aWR0aDogW1wiODBweFwiLCBudWxsLCBudWxsLCBcIjkwcHhcIiwgbnVsbCwgXCJhdXRvXCJdLFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IDMsXHJcbiAgICAgIGNvbG9yOiBcImhlYWRpbmdfc2Vjb25kYXJ5XCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBtYjogWzIsIG51bGwsIDNdLFxyXG4gICAgfSxcclxuICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMS45XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=