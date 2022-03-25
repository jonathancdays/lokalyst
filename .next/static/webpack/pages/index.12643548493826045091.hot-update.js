webpackHotUpdate_N_E("pages/index",{

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
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    sx: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: assets_logo_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    as: "nav",
    sx: styles.nav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
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
        columnNumber: 13
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
      columnNumber: 9
    }
  }, "Register"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "donate__btn",
    varient: "secondary",
    "aria-label": "Get Started",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "Log In"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_mobile_drawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })));
}
_c = Header;
var positionAnim = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    position: fixed;\n    opacity: 1;\n  }\n\n  to {\n    position: absolute;\n    opacity: 1;\n    transition: all 0.4s ease;\n  }\n"])));
var styles = {
  header: {
    color: "text",
    fontWeight: "body",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    animation: "".concat(positionAnim, " 0.4s ease"),
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0]
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text"
      }
    }
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block"
    },
    a: {
      fontSize: 2,
      fontWeight: "body",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "primary"
      },
      "&.active": {
        color: "primary"
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJoZWFkZXIiLCJjb250YWluZXIiLCJMb2dvRGFyayIsIm5hdiIsIm1lbnVJdGVtcyIsIm1hcCIsIm1lbnVJdGVtIiwiaSIsInBhdGgiLCJsYWJlbCIsInBvc2l0aW9uQW5pbSIsImtleWZyYW1lcyIsImNvbG9yIiwiZm9udFdlaWdodCIsInB5Iiwid2lkdGgiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0aW9uIiwiZmxleFNocmluayIsIm1yIiwibWwiLCJib3hTaGFkb3ciLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibXgiLCJhIiwiZm9udFNpemUiLCJweCIsImN1cnNvciIsImxpbmVIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsT0FBK0I7QUFBQTs7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDNUMsU0FDRTtBQUFRLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxNQUFuQjtBQUEyQixhQUFTLEVBQUVGLFNBQXRDO0FBQWlELE1BQUUsRUFBQyxRQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsa0RBQUQ7QUFBVyxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0UsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLHVEQUFEO0FBQU0sT0FBRyxFQUFFQyxzREFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxxREFBQyw2Q0FBRDtBQUFN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L3dlYnBhY2svcGFnZXMvaW5kZXguMTI2NDM1NDg0OTM4MjYwNDUwOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgRmxleCwgQnV0dG9uIH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCJjb21wb25lbnRzL2xvZ29cIjtcclxuaW1wb3J0IExvZ29EYXJrIGZyb20gXCJhc3NldHMvbG9nby5zdmdcIjtcclxuaW1wb3J0IE1vYmlsZURyYXdlciBmcm9tIFwiLi9tb2JpbGUtZHJhd2VyXCI7XHJcbmltcG9ydCBtZW51SXRlbXMgZnJvbSBcIi4vaGVhZGVyLmRhdGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IGNsYXNzTmFtZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgc3g9e3N0eWxlcy5oZWFkZXJ9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD1cImhlYWRlclwiPlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8TG9nbyBzcmM9e0xvZ29EYXJrfSAvPlxyXG4gICAgICAgIDxGbGV4IGFzPVwibmF2XCIgc3g9e3N0eWxlcy5uYXZ9PlxyXG4gICAgICAgICAge21lbnVJdGVtcy5tYXAoKG1lbnVJdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIHRvPXttZW51SXRlbS5wYXRofVxyXG4gICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XHJcbiAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bWVudUl0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkb25hdGVfX2J0blwiXHJcbiAgICAgICAgICB2YXJpZW50PVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJHZXQgU3RhcnRlZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkb25hdGVfX2J0blwiXHJcbiAgICAgICAgICB2YXJpZW50PVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJHZXQgU3RhcnRlZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTG9nIEluXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPE1vYmlsZURyYXdlciAvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHBvc2l0aW9uQW5pbSA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgaGVhZGVyOiB7XHJcbiAgICBjb2xvcjogXCJ0ZXh0XCIsXHJcbiAgICBmb250V2VpZ2h0OiBcImJvZHlcIixcclxuICAgIHB5OiA0LFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDAuNHMgZWFzZVwiLFxyXG4gICAgYW5pbWF0aW9uOiBgJHtwb3NpdGlvbkFuaW19IDAuNHMgZWFzZWAsXHJcbiAgICBcIi5kb25hdGVfX2J0blwiOiB7XHJcbiAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgIG1yOiBbMTUsIDIwLCBudWxsLCBudWxsLCAwXSxcclxuICAgICAgbWw6IFtcImF1dG9cIiwgbnVsbCwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICB9LFxyXG4gICAgXCImLnN0aWNreVwiOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kXCIsXHJcbiAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgYm94U2hhZG93OiBcIjAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpXCIsXHJcbiAgICAgIHB5OiAzLFxyXG4gICAgICBcIm5ldiA+IGFcIjoge1xyXG4gICAgICAgIGNvbG9yOiBcInRleHRcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICB9LFxyXG4gIG5hdjoge1xyXG4gICAgbXg6IFwiYXV0b1wiLFxyXG4gICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICBcIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweClcIjoge1xyXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICB9LFxyXG4gICAgYToge1xyXG4gICAgICBmb250U2l6ZTogMixcclxuICAgICAgZm9udFdlaWdodDogXCJib2R5XCIsXHJcbiAgICAgIHB4OiA1LFxyXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBcIjEuMlwiLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjE1c1wiLFxyXG4gICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcclxuICAgICAgfSxcclxuICAgICAgXCImLmFjdGl2ZVwiOiB7XHJcbiAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9