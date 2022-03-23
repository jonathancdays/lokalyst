webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/team-card.js":
/*!*************************************!*\
  !*** ./src/components/team-card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\team-card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


function TeamCard(_ref) {
  var src = _ref.src,
      altText = _ref.altText,
      title = _ref.title,
      designation = _ref.designation,
      social = _ref.social;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: src,
    alt: altText,
    sx: styles.memberThumb,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.infoWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    className: "info__name",
    sx: styles.infoWrapper.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "info__designation",
    sx: styles.infoWrapper.designation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, designation)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.socialShare,
    className: "social__share",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, social));
}
_c = TeamCard;
var styles = {
  card: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    py: [0, null, 4, 5, 6],
    px: [2, null, 6, 7],
    transition: "ease-in-out 0.4s",
    borderRadius: "8px",
    position: "relative",
    "&:hover": {
      boxShadow: ["none", null, "0 4px 10px rgba(39, 83, 123, 0.12)"],
      ".info__name": {
        color: "primary"
      },
      ".info__designation": {
        color: "primary"
      },
      ".social__share": {
        opacity: 1,
        a: {
          my: 0,
          py: [0, null, 1]
        }
      }
    }
  },
  memberThumb: {
    width: ["70px", "80px", "100px", null, null, "130px"],
    height: ["70px", "80px", "100px", null, null, "130px"],
    flexShrink: 0,
    border: "2px solid",
    borderColor: "primary",
    borderRadius: "50%"
  },
  infoWrapper: {
    width: "100%",
    textAlign: "center",
    mt: [3, null, 4],
    name: {
      fontSize: [1, 2, 3, null, null, 4],
      fontWeight: "bold",
      lineHeight: [1.25, 1.35],
      transition: "color 0.25s",
      mb: 1
    },
    designation: {
      fontSize: ["14px", null, null, 2],
      fontWeight: "body",
      lineHeight: "heading",
      color: "text",
      transition: "color 0.25s"
    }
  },
  socialShare: {
    position: ["relative", null, "absolute"],
    right: [0, null, 6, null, 4, 6],
    bottom: [0, null, "18px", 5],
    width: ["100%", null, "auto"],
    display: "flex",
    flexDirection: ["row", null, "column"],
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.25s",
    opacity: [1, null, 0],
    pt: 2,
    a: {
      fontSize: [0, 1, null, 2],
      color: ["text", null, "primary"],
      lineHeight: "1em",
      my: [0, null, "-2px"],
      px: 1,
      transition: "all 0.25s",
      "&:hover": {
        color: ["primary", null, "text"]
      }
    }
  }
};

var _c;

$RefreshReg$(_c, "TeamCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzIl0sIm5hbWVzIjpbIlRlYW1DYXJkIiwic3JjIiwiYWx0VGV4dCIsInRpdGxlIiwiZGVzaWduYXRpb24iLCJzb2NpYWwiLCJzdHlsZXMiLCJjYXJkIiwibWVtYmVyVGh1bWIiLCJpbmZvV3JhcHBlciIsIm5hbWUiLCJzb2NpYWxTaGFyZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsInB5IiwicHgiLCJ0cmFuc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJib3hTaGFkb3ciLCJjb2xvciIsIm9wYWNpdHkiLCJhIiwibXkiLCJ3aWR0aCIsImhlaWdodCIsImZsZXhTaHJpbmsiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsInRleHRBbGlnbiIsIm10IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsIm1iIiwicmlnaHQiLCJib3R0b20iLCJqdXN0aWZ5Q29udGVudCIsInB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxPQUFnRTtBQUFBLE1BQTVDQyxHQUE0QyxRQUE1Q0EsR0FBNEM7QUFBQSxNQUF2Q0MsT0FBdUMsUUFBdkNBLE9BQXVDO0FBQUEsTUFBOUJDLEtBQThCLFFBQTlCQSxLQUE4QjtBQUFBLE1BQXZCQyxXQUF1QixRQUF2QkEsV0FBdUI7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDN0UsU0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsOENBQUQ7QUFBTyxPQUFHLEVBQUVOLEdBQVo7QUFBaUIsT0FBRyxFQUFFQyxPQUF0QjtBQUErQixNQUFFLEVBQUVJLE1BQU0sQ0FBQ0UsV0FBMUM7QUFBQTtBQUFBO0FB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O0FBUFY7QUFaUTtBQXZEQSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIyNjg2ZmY3MDYyNzE1N2FhNTRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCB7IFRleHQsIEhlYWRpbmcsIEltYWdlLCBCb3gsIExpbmsgfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlYW1DYXJkKHsgc3JjLCBhbHRUZXh0LCB0aXRsZSwgZGVzaWduYXRpb24sIHNvY2lhbCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgPEltYWdlIHNyYz17c3JjfSBhbHQ9e2FsdFRleHR9IHN4PXtzdHlsZXMubWVtYmVyVGh1bWJ9IC8+XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5pbmZvV3JhcHBlcn0+XHJcbiAgICAgICAgPEhlYWRpbmcgY2xhc3NOYW1lPVwiaW5mb19fbmFtZVwiIHN4PXtzdHlsZXMuaW5mb1dyYXBwZXIubmFtZX0+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cImluZm9fX2Rlc2lnbmF0aW9uXCIgc3g9e3N0eWxlcy5pbmZvV3JhcHBlci5kZXNpZ25hdGlvbn0+XHJcbiAgICAgICAgICB7ZGVzaWduYXRpb259XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLnNvY2lhbFNoYXJlfSBjbGFzc05hbWU9XCJzb2NpYWxfX3NoYXJlXCI+XHJcbiAgICAgICAge3NvY2lhbH1cclxuXHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBweTogWzAsIG51bGwsIDQsIDUsIDZdLFxyXG4gICAgcHg6IFsyLCBudWxsLCA2LCA3XSxcclxuICAgIHRyYW5zaXRpb246IFwiZWFzZS1pbi1vdXQgMC40c1wiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGJveFNoYWRvdzogW1wibm9uZVwiLCBudWxsLCBcIjAgNHB4IDEwcHggcmdiYSgzOSwgODMsIDEyMywgMC4xMilcIl0sXHJcbiAgICAgIFwiLmluZm9fX25hbWVcIjoge1xyXG4gICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcclxuICAgICAgfSxcclxuICAgICAgXCIuaW5mb19fZGVzaWduYXRpb25cIjoge1xyXG4gICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcclxuICAgICAgfSxcclxuICAgICAgXCIuc29jaWFsX19zaGFyZVwiOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICBhOiB7XHJcbiAgICAgICAgICBteTogMCxcclxuICAgICAgICAgIHB5OiBbMCwgbnVsbCwgMV0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgbWVtYmVyVGh1bWI6IHtcclxuICAgIHdpZHRoOiBbXCI3MHB4XCIsIFwiODBweFwiLCBcIjEwMHB4XCIsIG51bGwsIG51bGwsIFwiMTMwcHhcIl0sXHJcbiAgICBoZWlnaHQ6IFtcIjcwcHhcIiwgXCI4MHB4XCIsIFwiMTAwcHhcIiwgbnVsbCwgbnVsbCwgXCIxMzBweFwiXSxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBib3JkZXI6IFwiMnB4IHNvbGlkXCIsXHJcbiAgICBib3JkZXJDb2xvcjogXCJwcmltYXJ5XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgfSxcclxuICBpbmZvV3JhcHBlcjoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgbXQ6IFszLCBudWxsLCA0XSxcclxuICAgIG5hbWU6IHtcclxuICAgICAgZm9udFNpemU6IFsxLCAyLCAzLCBudWxsLCBudWxsLCA0XSxcclxuICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjI1LCAxLjM1XSxcclxuICAgICAgdHJhbnNpdGlvbjogXCJjb2xvciAwLjI1c1wiLFxyXG4gICAgICBtYjogMSxcclxuICAgIH0sXHJcbiAgICBkZXNpZ25hdGlvbjoge1xyXG4gICAgICBmb250U2l6ZTogW1wiMTRweFwiLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgZm9udFdlaWdodDogXCJib2R5XCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiaGVhZGluZ1wiLFxyXG4gICAgICBjb2xvcjogXCJ0ZXh0XCIsXHJcbiAgICAgIHRyYW5zaXRpb246IFwiY29sb3IgMC4yNXNcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzb2NpYWxTaGFyZToge1xyXG4gICAgcG9zaXRpb246IFtcInJlbGF0aXZlXCIsIG51bGwsIFwiYWJzb2x1dGVcIl0sXHJcbiAgICByaWdodDogWzAsIG51bGwsIDYsIG51bGwsIDQsIDZdLFxyXG4gICAgYm90dG9tOiBbMCwgbnVsbCwgXCIxOHB4XCIsIDVdLFxyXG4gICAgd2lkdGg6IFtcIjEwMCVcIiwgbnVsbCwgXCJhdXRvXCJdLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBbXCJyb3dcIiwgbnVsbCwgXCJjb2x1bW5cIl0sXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjI1c1wiLFxyXG4gICAgb3BhY2l0eTogWzEsIG51bGwsIDBdLFxyXG4gICAgcHQ6IDIsXHJcbiAgICBhOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMCwgMSwgbnVsbCwgMl0sXHJcbiAgICAgIGNvbG9yOiBbXCJ0ZXh0XCIsIG51bGwsIFwicHJpbWFyeVwiXSxcclxuICAgICAgbGluZUhlaWdodDogXCIxZW1cIixcclxuICAgICAgbXk6IFswLCBudWxsLCBcIi0ycHhcIl0sXHJcbiAgICAgIHB4OiAxLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjI1c1wiLFxyXG4gICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIGNvbG9yOiBbXCJwcmltYXJ5XCIsIG51bGwsIFwidGV4dFwiXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==