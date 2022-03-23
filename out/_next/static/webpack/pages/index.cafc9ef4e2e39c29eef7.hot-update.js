webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/workflow.js":
/*!**********************************!*\
  !*** ./src/sections/workflow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkFlow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/patternBG.png */ "./src/assets/patternBG.png");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/arrowOdd.svg */ "./src/assets/arrowOdd.svg");
/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/arrowEven.svg */ "./src/assets/arrowEven.svg");
/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\sections\\workflow.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */






var data = [{
  id: 1,
  title: 'Research',
  text: 'Identifying a group of keyword phrases that will be used in optimization and analyze target competitor sites.'
}, {
  id: 2,
  title: 'Reporting & Goal Setting',
  text: 'After developing a complete picture of your site’s starting position, goals are set for the SEO plan.'
}, {
  id: 3,
  title: 'Page Optimization',
  text: "We meticulously pick page titles, a site map, and META data to increase your site's efficiency."
}, {
  id: 4,
  title: 'Follow Up Reporting and Analysis',
  text: 'The same reporting done in the initial phase of the campaign is done again at regular intervals, post-optimization.'
}];
function WorkFlow() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, "Workflow");
}
_c = WorkFlow;
var styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: "url(".concat(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default.a, ")"),
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10]
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: ['35px 0', null, '45px 30px', null, '50px 25px', null, null, '50px 65px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)']
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none'
      }
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: "url(".concat(assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4___default.a, ")")
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: "url(".concat(assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5___default.a, ")"),
      top: 17
    },
    '&:last-child::before': {
      display: 'none'
    }
  },
  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582'
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3]
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5]
    }
  }
};

var _c;

$RefreshReg$(_c, "WorkFlow");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwidGV4dCIsIldvcmtGbG93Iiwic3R5bGVzIiwid29ya2Zsb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJQYXR0ZXJuQkciLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJwb3NpdGlvbiIsInB5IiwiZ3JpZCIsIm1iIiwicHQiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImNhcmQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInRleHRBbGlnbiIsIndpZHRoIiwibXgiLCJweCIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiQXJyb3dPZGQiLCJBcnJvd0V2ZW4iLCJpY29uQm94IiwiZmxleFNocmluayIsImJvcmRlclJhZGl1cyIsImFsaWduSXRlbXMiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwid3JhcHBlciIsIm10IiwibGluZUhlaWdodCIsInByIiwic3ViVGl0bGUiLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLFVBRlQ7QUFHRUMsTUFBSSxFQUNGO0FBSkosQ0FEVyxFQU9YO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSwwQkFGVDtBQUdFQyxNQUFJLEVBQ0Y7QUFKSixDQVBXLEVBYVg7QUFDRUYsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLG1CQUZUO0FBR0VDLE1BQUksRUFDRjtBQUpKLENBYlcsRUFtQlg7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SCxXQUFLLEVBQUUsT0FKQztBQUtSTSxhQUFPLEVBQUUsSUFMRDtBQU1SRixRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsSUFBdEIsRUFBNEIsQ0FBNUI7QUFOSTtBQWJIO0FBL0VJLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2FmYzllZjRlMmUzOWMyOWVlZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuXHJcbmltcG9ydCBQYXR0ZXJuQkcgZnJvbSAnYXNzZXRzL3BhdHRlcm5CRy5wbmcnO1xyXG5pbXBvcnQgQXJyb3dPZGQgZnJvbSAnYXNzZXRzL2Fycm93T2RkLnN2Zyc7XHJcbmltcG9ydCBBcnJvd0V2ZW4gZnJvbSAnYXNzZXRzL2Fycm93RXZlbi5zdmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdGxlOiAnUmVzZWFyY2gnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0lkZW50aWZ5aW5nIGEgZ3JvdXAgb2Yga2V5d29yZCBwaHJhc2VzIHRoYXQgd2lsbCBiZSB1c2VkIGluIG9wdGltaXphdGlvbiBhbmQgYW5hbHl6ZSB0YXJnZXQgY29tcGV0aXRvciBzaXRlcy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogJ1JlcG9ydGluZyAmIEdvYWwgU2V0dGluZycsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnQWZ0ZXIgZGV2ZWxvcGluZyBhIGNvbXBsZXRlIHBpY3R1cmUgb2YgeW91ciBzaXRl4oCZcyBzdGFydGluZyBwb3NpdGlvbiwgZ29hbHMgYXJlIHNldCBmb3IgdGhlIFNFTyBwbGFuLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIHRpdGxlOiAnUGFnZSBPcHRpbWl6YXRpb24nLFxyXG4gICAgdGV4dDpcclxuICAgICAgXCJXZSBtZXRpY3Vsb3VzbHkgcGljayBwYWdlIHRpdGxlcywgYSBzaXRlIG1hcCwgYW5kIE1FVEEgZGF0YSB0byBpbmNyZWFzZSB5b3VyIHNpdGUncyBlZmZpY2llbmN5LlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0aXRsZTogJ0ZvbGxvdyBVcCBSZXBvcnRpbmcgYW5kIEFuYWx5c2lzJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdUaGUgc2FtZSByZXBvcnRpbmcgZG9uZSBpbiB0aGUgaW5pdGlhbCBwaGFzZSBvZiB0aGUgY2FtcGFpZ24gaXMgZG9uZSBhZ2FpbiBhdCByZWd1bGFyIGludGVydmFscywgcG9zdC1vcHRpbWl6YXRpb24uJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya0Zsb3coKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoMT5Xb3JrZmxvdzwvaDE+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHdvcmtmbG93OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1BhdHRlcm5CR30pYCxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBtYjogLTEsXHJcbiAgICBwdDogMCxcclxuICAgIGdyaWRHYXA6IFtcclxuICAgICAgJzM1cHggMCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc0NXB4IDMwcHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNTBweCAyNXB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzUwcHggNjVweCcsXHJcbiAgICBdLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAncmVwZWF0KDEsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCg0LDFmciknLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgJ2xlZnQnXSxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgJzEwMCUnXSxcclxuICAgIG14OiBbJ2F1dG8nXSxcclxuICAgIHB4OiBbNCwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICAnJjo6YmVmb3JlJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA3MiwgbnVsbCwgOTBdLFxyXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXHJcbiAgICAgIHdpZHRoOiAyMTUsXHJcbiAgICAgIGhlaWdodDogNjAsXHJcbiAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMjBweCknOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmOm50aC1vZi10eXBlKDJuLTEpOjpiZWZvcmUnOiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93T2RkfSlgLFxyXG4gICAgfSxcclxuICAgICcmOm50aC1vZi10eXBlKDJuKTo6YmVmb3JlJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtBcnJvd0V2ZW59KWAsXHJcbiAgICAgIHRvcDogMTcsXHJcbiAgICB9LFxyXG4gICAgJyY6bGFzdC1jaGlsZDo6YmVmb3JlJzoge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGljb25Cb3g6IHtcclxuICAgIHdpZHRoOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc3MHB4J10sXHJcbiAgICBoZWlnaHQ6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBib3JkZXJSYWRpdXM6IFsxNSwgbnVsbCwgMjMsIG51bGwsIG51bGwsIDMwXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgbWI6IFs1LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA2XSxcclxuICAgIG14OiBbJ2F1dG8nLCBudWxsLCAwXSxcclxuICAgIGZvbnRTaXplOiBbNiwgbnVsbCwgNywgbnVsbCwgbnVsbCwgJzMwcHgnXSxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGNvbG9yOiAnIzIzNDU4MicsXHJcbiAgfSxcclxuICB3cmFwcGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBtdDogJy01cHgnLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCA0LCBudWxsLCBudWxsLCA1XSxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDEuNTVdLFxyXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBtYjogWzIsIDNdLFxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMS45LCAyXSxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIG9wYWNpdHk6IDAuNzUsXHJcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=