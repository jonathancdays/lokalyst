webpackHotUpdate_N_E("pages/index",{

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
  }, header));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJpY2UtY2FyZC5qcyJdLCJuYW1lcyI6WyJQcmljZUNhcmQiLCJkYXRhIiwiaGVhZGVyIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2VXaXRoVW5pdCIsImJ1dHRvblRleHQiLCJhbm90aGVyT3B0aW9uIiwicG9pbnRzIiwic3R5bGVzIiwicHJpY2luZ0JveCIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwidHJhbnNpdGlvbiIsInAiLCJ3aWR0aCIsIm1iIiwibXQiLCJteCIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiYm9yZGVyIiwiekluZGV4IiwiYm94U2hhZG93Iiwib3BhY2l0eSIsImJhY2tncm91bmRDb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJsZXR0ZXJTcGFjaW5nIiwicHgiLCJwcmljaW5nSGVhZGVyIiwibWFyZ2luQm90dG9tIiwicHJpY2UiLCJwdCIsInBsIiwibGlzdEl0ZW0iLCJmb250RmFtaWx5IiwiZm9udFN0eWxlIiwiYnV0dG9uIiwiYnV0dG9uR3JvdXAiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsT0FVWjtBQUFBLHVCQVREQyxJQVNDO0FBQUEsTUFSQ0MsTUFRRCxhQVJDQSxNQVFEO0FBQUEsTUFQQ0MsSUFPRCxhQVBDQSxJQU9EO0FBQUEsTUFOQ0MsV0FNRCxhQU5DQSxXQU1EO0FBQUEsTUFMQ0MsYUFLRCxhQUxDQSxhQUtEO0FBQUEsdUNBSkNDLFVBSUQ7QUFBQSxNQUpDQSxVQUlELHFDQUpjLGtCQUlkO0FBQUEsTUFIQ0MsYUFHRCxhQUhDQSxhQUdEO0FBQUEsTUFGQ0MsTUFFRCxhQUZDQSxNQUVEO0FBQ0QsU0FDRSxNQUFDLDZDQUFE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U0xDLGtCQUFjLEVBQUUsUUFUWDtBQVVMTyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQVZDO0FBV0wsY0FBVTtBQUNSNUIsY0FBUSxFQUFFLFVBREY7QUFFUjZCLFFBQUUsRUFBRSxLQUZJO0FBR1JWLGFBQU8sRUFBRSxjQUhEO0FBSVJGLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBSkY7QUFLUkQsZ0JBQVUsRUFBRTtBQUxKO0FBWEwsR0ExRE07QUE2RWJjLFVBQVEsRUFBRTtBQUNSQyxjQUFVLEVBQUUsU0FESjtBQUVSQyxhQUFTLEVBQUUsUUFGSDtBQUdSaEIsY0FBVSxFQUFFLFFBSEo7QUFJUkMsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FKRjtBQUtSQyxjQUFVLEVBQUUsQ0FBQyxJQUFELEVBQU8sR0FBUCxDQUxKO0FBTVJkLE1BQUUsRUFBRSxDQU5JO0FBT1JnQixjQUFVLEVBQUUsWUFQSjtBQVFSRSxTQUFLLEVBQUUsTUFSQztBQVNSLGdCQUFZO0FBQ1ZSLGFBQU8sRUFBRSxJQURDO0FBRVZtQixZQUFNLEVBQUU7QUFDTlgsYUFBSyxFQUFFO0FBREQ7QUFGRTtBQVRKLEdBN0VHO0FBNkZiWSxhQUFXLEVBQUU7QUFDWEMsYUFBUyxFQUFFLFFBREE7QUFFWDlCLE1BQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixNQUEzQixDQUZPO0FBR1gsb0JBQWdCO0FBQ2RpQixXQUFLLEVBQUUsV0FETztBQUVkbkIsV0FBSyxFQUFFLE1BRk87QUFHZGtCLG9CQUFjLEVBQUUsUUFIRjtBQUlkTCxnQkFBVSxFQUFFLEdBSkU7QUFLZEMsY0FBUSxFQUFFLENBQUMsTUFBRCxFQUFTLENBQVQsQ0FMSTtBQU1kZixPQUFDLEVBQUU7QUFOVztBQUhMO0FBN0ZBLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGQ3M2M2YmU3OGNmZjk4Yjg1N2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQ2FyZCwgVGV4dCwgSGVhZGluZywgQnV0dG9uIH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4vbGlzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2VDYXJkKHtcclxuICBkYXRhOiB7XHJcbiAgICBoZWFkZXIsXHJcbiAgICBuYW1lLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBwcmljZVdpdGhVbml0LFxyXG4gICAgYnV0dG9uVGV4dCA9IFwiU3RhcnQgRnJlZSBUcmlhbFwiLFxyXG4gICAgYW5vdGhlck9wdGlvbixcclxuICAgIHBvaW50cyxcclxuICB9LFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkXHJcbiAgICAgIGNsYXNzTmFtZT17aGVhZGVyID8gJ3BhY2thZ2VfX2NhcmQgYWN0aXZlJyA6ICdwYWNrYWdlX19jYXJkJ31cclxuICAgICAgc3g9e3N0eWxlcy5wcmljaW5nQm94fVxyXG4gICAgPlxyXG4gICAgICB7aGVhZGVyICYmIDxUZXh0IHN4PXtzdHlsZXMuaGVhZGVyfT57aGVhZGVyfTwvVGV4dD59XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHByaWNpbmdCb3g6IHtcclxuICAgIGJvcmRlclJhZGl1czogMjAsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMC4zc1wiLFxyXG4gICAgcDogW1wiMzVweCAyNXB4XCIsIG51bGwsIG51bGwsIFwiNDBweFwiXSxcclxuICAgIHdpZHRoOiBbXCIxMDAlXCIsIFwiNzUlXCIsIFwiMTAwJVwiXSxcclxuICAgIG1iOiBcIjQwcHhcIixcclxuICAgIG10OiBcIjQwcHhcIixcclxuICAgIG14OiBbMCwgXCJhdXRvXCIsIDBdLFxyXG4gICAgXCImOmJlZm9yZVwiOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGNvbnRlbnQ6IFwiJydcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgzOCwgNzgsIDExOCwgMC4xKVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiaW5oZXJpdFwiLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzXCIsXHJcbiAgICAgIHpJbmRleDogLTEsXHJcbiAgICB9LFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgYm94U2hhZG93OiBcIjBweCA0cHggMjVweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpICFpbXBvcnRhbnRcIixcclxuICAgICAgXCImOmJlZm9yZVwiOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBoZWFkZXI6IHtcclxuICAgIGhlaWdodDogW1wiMjhweFwiLCBudWxsLCBudWxsLCBcIjMycHhcIl0sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgIGZvbnRTaXplOiAxLFxyXG4gICAgbGluZUhlaWdodDogMS4yLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHRvcDogXCItMTdweFwiLFxyXG4gICAgbGV0dGVyU3BhY2luZzogXCItLjE0cHhcIixcclxuICAgIHB4OiBcIjEycHhcIixcclxuICB9LFxyXG4gIHByaWNpbmdIZWFkZXI6IHtcclxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxyXG4gICAgbWI6IFtcIjMwcHhcIiwgbnVsbCwgbnVsbCwgbnVsbCwgXCI0MHB4XCJdLFxyXG4gICAgcDoge1xyXG4gICAgICBmb250U2l6ZTogWzEsIDJdLFxyXG4gICAgICBjb2xvcjogXCJ0ZXh0XCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiaGVhZGluZ1wiLFxyXG4gICAgfSxcclxuICAgIFwiLnBhY2thZ2VfX25hbWVcIjoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IFsxLCBudWxsLCAyXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwcmljZToge1xyXG4gICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgZm9udFNpemU6IFs0LCBudWxsLCA1LCBudWxsLCBcIjMwcHhcIl0sXHJcbiAgICBsaW5lSGVpZ2h0OiAxLFxyXG4gICAgbGV0dGVyU3BhY2luZzogXCItMC41NXB4XCIsXHJcbiAgICBjb2xvcjogXCJ0ZXh0XCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IDIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIHB0OiBbNCwgNl0sXHJcbiAgICBcIj4gc3BhblwiOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIHBsOiBcIjNweFwiLFxyXG4gICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICBmb250U2l6ZTogWzEsIDJdLFxyXG4gICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpc3RJdGVtOiB7XHJcbiAgICBmb250RmFtaWx5OiBcIkRNIFNhbnNcIixcclxuICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXHJcbiAgICBmb250U2l6ZTogWzEsIDJdLFxyXG4gICAgbGluZUhlaWdodDogWzEuNzUsIDEuNl0sXHJcbiAgICBtYjogMyxcclxuICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxyXG4gICAgY29sb3I6IFwidGV4dFwiLFxyXG4gICAgXCImLmNsb3NlZFwiOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTUsXHJcbiAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIGNvbG9yOiBcIiM3ODhGQjVcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBidXR0b25Hcm91cDoge1xyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgbXQ6IFtcIjMwcHhcIiwgbnVsbCwgbnVsbCwgbnVsbCwgXCIzNXB4XCJdLFxyXG4gICAgXCIuZnJlZV9fdHJhaWxcIjoge1xyXG4gICAgICBjb2xvcjogXCJzZWNvbmRhcnlcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBmb250U2l6ZTogW1wiMTRweFwiLCAxXSxcclxuICAgICAgcDogXCIyMHB4IDAgMFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9