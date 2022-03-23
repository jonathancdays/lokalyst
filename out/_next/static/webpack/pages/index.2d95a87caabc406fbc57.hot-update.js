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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJpY2UtY2FyZC5qcyJdLCJuYW1lcyI6WyJQcmljZUNhcmQiLCJkYXRhIiwiaGVhZGVyIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2VXaXRoVW5pdCIsImJ1dHRvblRleHQiLCJhbm90aGVyT3B0aW9uIiwicG9pbnRzIiwic3R5bGVzIiwicHJpY2luZ0JveCIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwidHJhbnNpdGlvbiIsInAiLCJ3aWR0aCIsIm1iIiwibXQiLCJteCIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiYm9yZGVyIiwiekluZGV4IiwiYm94U2hhZG93Iiwib3BhY2l0eSIsImJhY2tncm91bmRDb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJsZXR0ZXJTcGFjaW5nIiwicHgiLCJwcmljaW5nSGVhZGVyIiwibWFyZ2luQm90dG9tIiwicHJpY2UiLCJwdCIsInBsIiwibGlzdEl0ZW0iLCJmb250RmFtaWx5IiwiZm9udFN0eWxlIiwiYnV0dG9uIiwiYnV0dG9uR3JvdXAiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsT0FVWjtBQUFBLHVCQVREQyxJQVNDO0FBQUEsTUFSQ0MsTUFRRCxhQVJDQSxNQVFEO0FBQUEsTUFQQ0MsSUFPRCxhQVBDQSxJQU9EO0FBQUEsTUFOQ0MsV0FNRCxhQU5DQSxXQU1EO0FBQUEsTUFMQ0MsYUFLRCxhQUxDQSxhQUtEO0FBQUEsdUNBSkNDLFVBSUQ7QUFBQSxNQUpDQSxVQUlELHFDQUpjLGtCQUlkO0FBQUEsTUFIQ0MsYUFHRCxhQUhDQSxhQUdEO0FBQUEsTUFGQ0MsTUFFRCxhQUZDQSxNQUVEO0FBQ0QsU0FDRSxNQUFDLDZDQUFE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USxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FKRjtBQUtSRCxnQkFBVSxFQUFFO0FBTEo7QUFYTCxHQTFETTtBQTZFYmMsVUFBUSxFQUFFO0FBQ1JDLGNBQVUsRUFBRSxTQURKO0FBRVJDLGFBQVMsRUFBRSxRQUZIO0FBR1JoQixjQUFVLEVBQUUsUUFISjtBQUlSQyxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUpGO0FBS1JDLGNBQVUsRUFBRSxDQUFDLElBQUQsRUFBTyxHQUFQLENBTEo7QUFNUmQsTUFBRSxFQUFFLENBTkk7QUFPUmdCLGNBQVUsRUFBRSxZQVBKO0FBUVJFLFNBQUssRUFBRSxNQVJDO0FBU1IsZ0JBQVk7QUFDVlIsYUFBTyxFQUFFLElBREM7QUFFVm1CLFlBQU0sRUFBRTtBQUNOWCxhQUFLLEVBQUU7QUFERDtBQUZFO0FBVEosR0E3RUc7QUE2RmJZLGFBQVcsRUFBRTtBQUNYQyxhQUFTLEVBQUUsUUFEQTtBQUVYOUIsTUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLE1BQTNCLENBRk87QUFHWCxvQkFBZ0I7QUFDZGlCLFdBQUssRUFBRSxXQURPO0FBRWRuQixXQUFLLEVBQUUsTUFGTztBQUdka0Isb0JBQWMsRUFBRSxRQUhGO0FBSWRMLGdCQUFVLEVBQUUsR0FKRTtBQUtkQyxjQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVMsQ0FBVCxDQUxJO0FBTWRmLE9BQUMsRUFBRTtBQU5XO0FBSEw7QUE3RkEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yZDk1YTg3Y2FhYmM0MDZmYmM1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBDYXJkLCBUZXh0LCBIZWFkaW5nLCBCdXR0b24gfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmljZUNhcmQoe1xyXG4gIGRhdGE6IHtcclxuICAgIGhlYWRlcixcclxuICAgIG5hbWUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIHByaWNlV2l0aFVuaXQsXHJcbiAgICBidXR0b25UZXh0ID0gXCJTdGFydCBGcmVlIFRyaWFsXCIsXHJcbiAgICBhbm90aGVyT3B0aW9uLFxyXG4gICAgcG9pbnRzLFxyXG4gIH0sXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRcclxuICAgICAgY2xhc3NOYW1lPXtoZWFkZXIgPyAncGFja2FnZV9fY2FyZCBhY3RpdmUnIDogJ3BhY2thZ2VfX2NhcmQnfVxyXG4gICAgPlxyXG5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgcHJpY2luZ0JveDoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiAyMCxcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzXCIsXHJcbiAgICBwOiBbXCIzNXB4IDI1cHhcIiwgbnVsbCwgbnVsbCwgXCI0MHB4XCJdLFxyXG4gICAgd2lkdGg6IFtcIjEwMCVcIiwgXCI3NSVcIiwgXCIxMDAlXCJdLFxyXG4gICAgbWI6IFwiNDBweFwiLFxyXG4gICAgbXQ6IFwiNDBweFwiLFxyXG4gICAgbXg6IFswLCBcImF1dG9cIiwgMF0sXHJcbiAgICBcIiY6YmVmb3JlXCI6IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgY29udGVudDogXCInJ1wiLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpXCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCJpbmhlcml0XCIsXHJcbiAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3NcIixcclxuICAgICAgekluZGV4OiAtMSxcclxuICAgIH0sXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBib3hTaGFkb3c6IFwiMHB4IDRweCAyNXB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSkgIWltcG9ydGFudFwiLFxyXG4gICAgICBcIiY6YmVmb3JlXCI6IHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgaGVpZ2h0OiBbXCIyOHB4XCIsIG51bGwsIG51bGwsIFwiMzJweFwiXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dcIixcclxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgZm9udFNpemU6IDEsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgdG9wOiBcIi0xN3B4XCIsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIi0uMTRweFwiLFxyXG4gICAgcHg6IFwiMTJweFwiLFxyXG4gIH0sXHJcbiAgcHJpY2luZ0hlYWRlcjoge1xyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICBtYjogW1wiMzBweFwiLCBudWxsLCBudWxsLCBudWxsLCBcIjQwcHhcIl0sXHJcbiAgICBwOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICAgIGNvbG9yOiBcInRleHRcIixcclxuICAgICAgbGluZUhlaWdodDogXCJoZWFkaW5nXCIsXHJcbiAgICB9LFxyXG4gICAgXCIucGFja2FnZV9fbmFtZVwiOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogWzEsIG51bGwsIDJdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByaWNlOiB7XHJcbiAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICBmb250U2l6ZTogWzQsIG51bGwsIDUsIG51bGwsIFwiMzBweFwiXSxcclxuICAgIGxpbmVIZWlnaHQ6IDEsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIi0wLjU1cHhcIixcclxuICAgIGNvbG9yOiBcInRleHRcIixcclxuICAgIG1hcmdpbkJvdHRvbTogMixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgcHQ6IFs0LCA2XSxcclxuICAgIFwiPiBzcGFuXCI6IHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgcGw6IFwiM3B4XCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06IHtcclxuICAgIGZvbnRGYW1pbHk6IFwiRE0gU2Fuc1wiLFxyXG4gICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxyXG4gICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcclxuICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS43NSwgMS42XSxcclxuICAgIG1iOiAzLFxyXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICBjb2xvcjogXCJ0ZXh0XCIsXHJcbiAgICBcIiYuY2xvc2VkXCI6IHtcclxuICAgICAgb3BhY2l0eTogMC41NSxcclxuICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgY29sb3I6IFwiIzc4OEZCNVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1dHRvbkdyb3VwOiB7XHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBtdDogW1wiMzBweFwiLCBudWxsLCBudWxsLCBudWxsLCBcIjM1cHhcIl0sXHJcbiAgICBcIi5mcmVlX190cmFpbFwiOiB7XHJcbiAgICAgIGNvbG9yOiBcInNlY29uZGFyeVwiLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIGZvbnRTaXplOiBbXCIxNHB4XCIsIDFdLFxyXG4gICAgICBwOiBcIjIwcHggMCAwXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=