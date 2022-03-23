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
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: styles.workflow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Roadmap",
    title: "What's our process?",
    isWhite: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.card,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    });
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwidGV4dCIsIldvcmtGbG93Iiwic3R5bGVzIiwid29ya2Zsb3ciLCJncmlkIiwibWFwIiwiaXRlbSIsImNhcmQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJQYXR0ZXJuQkciLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJwb3NpdGlvbiIsInB5IiwibWIiLCJwdCIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ0ZXh0QWxpZ24iLCJ3aWR0aCIsIm14IiwicHgiLCJjb250ZW50IiwidG9wIiwibGVmdCIsImhlaWdodCIsIkFycm93T2RkIiwiQXJyb3dFdmVuIiwiaWNvbkJveCIsImZsZXhTaHJpbmsiLCJib3JkZXJSYWRpdXMiLCJhbGlnbkl0ZW1zIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsIndyYXBwZXIiLCJtdCIsImxpbmVIZWlnaHQiLCJwciIsInN1YlRpdGxlIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNYO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSxVQUZUO0FBR0VDLE1BQUksRUFDRjtBQUpKLENBRFcsRUFPWDtBQUNFRixJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsMEJBRlQ7QUFHRUMsTUFBSSxFQUNGO0FBSkosQ0FQVyxFQWFYO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSxtQkFGVDtBQUdFQyxNQUFJLEVBQ0Y7QUFK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TUFBRSxFQUFFLE1BSkc7QUFLUDFDLFNBQUssRUFBRTtBQUNMcUMsY0FBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixDQUF6QixDQURMO0FBRUxHLFdBQUssRUFBRSxPQUZGO0FBR0xHLGdCQUFVLEVBQUUsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLElBQVosRUFBa0IsSUFBbEIsRUFBd0IsSUFBeEIsRUFBOEIsSUFBOUIsQ0FIUDtBQUlMQyxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsSUFBdEIsRUFBNEIsQ0FBNUIsQ0FKQztBQUtMM0IsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUo7QUFMQyxLQUxBO0FBYVA0QixZQUFRLEVBQUU7QUFDUlIsY0FBUSxFQUFFLENBREY7QUFFUkMsZ0JBQVUsRUFBRSxHQUZKO0FBR1JLLGdCQUFVLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsR0FBbkIsRUFBd0IsQ0FBeEIsQ0FISjtBQUlSSCxXQUFLLEVBQUUsT0FKQztBQUtSTSxhQUFPLEVBQUUsSUFMRDtBQU1SRixRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsSUFBdEIsRUFBNEIsQ0FBNUI7QUFOSTtBQWJIO0FBL0VJLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzY4NDdiYzUzYjFkYzlmYTQ0NzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuXHJcbmltcG9ydCBQYXR0ZXJuQkcgZnJvbSAnYXNzZXRzL3BhdHRlcm5CRy5wbmcnO1xyXG5pbXBvcnQgQXJyb3dPZGQgZnJvbSAnYXNzZXRzL2Fycm93T2RkLnN2Zyc7XHJcbmltcG9ydCBBcnJvd0V2ZW4gZnJvbSAnYXNzZXRzL2Fycm93RXZlbi5zdmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdGxlOiAnUmVzZWFyY2gnLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0lkZW50aWZ5aW5nIGEgZ3JvdXAgb2Yga2V5d29yZCBwaHJhc2VzIHRoYXQgd2lsbCBiZSB1c2VkIGluIG9wdGltaXphdGlvbiBhbmQgYW5hbHl6ZSB0YXJnZXQgY29tcGV0aXRvciBzaXRlcy4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogJ1JlcG9ydGluZyAmIEdvYWwgU2V0dGluZycsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnQWZ0ZXIgZGV2ZWxvcGluZyBhIGNvbXBsZXRlIHBpY3R1cmUgb2YgeW91ciBzaXRl4oCZcyBzdGFydGluZyBwb3NpdGlvbiwgZ29hbHMgYXJlIHNldCBmb3IgdGhlIFNFTyBwbGFuLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIHRpdGxlOiAnUGFnZSBPcHRpbWl6YXRpb24nLFxyXG4gICAgdGV4dDpcclxuICAgICAgXCJXZSBtZXRpY3Vsb3VzbHkgcGljayBwYWdlIHRpdGxlcywgYSBzaXRlIG1hcCwgYW5kIE1FVEEgZGF0YSB0byBpbmNyZWFzZSB5b3VyIHNpdGUncyBlZmZpY2llbmN5LlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0aXRsZTogJ0ZvbGxvdyBVcCBSZXBvcnRpbmcgYW5kIEFuYWx5c2lzJyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdUaGUgc2FtZSByZXBvcnRpbmcgZG9uZSBpbiB0aGUgaW5pdGlhbCBwaGFzZSBvZiB0aGUgY2FtcGFpZ24gaXMgZG9uZSBhZ2FpbiBhdCByZWd1bGFyIGludGVydmFscywgcG9zdC1vcHRpbWl6YXRpb24uJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya0Zsb3coKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXtzdHlsZXMud29ya2Zsb3d9PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyIFxyXG4gICAgICAgICAgc2xvZ2FuPVwiUm9hZG1hcFwiXHJcbiAgICAgICAgICB0aXRsZT1cIldoYXQncyBvdXIgcHJvY2Vzcz9cIlxyXG4gICAgICAgICAgaXNXaGl0ZT17dHJ1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNhcmR9IGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgd29ya2Zsb3c6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7UGF0dGVybkJHfSlgLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIG1iOiAtMSxcclxuICAgIHB0OiAwLFxyXG4gICAgZ3JpZEdhcDogW1xyXG4gICAgICAnMzVweCAwJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzQ1cHggMzBweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc1MHB4IDI1cHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnNTBweCA2NXB4JyxcclxuICAgIF0sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMSwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDQsMWZyKScsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgY2FyZDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCAnbGVmdCddLFxyXG4gICAgd2lkdGg6IFsnMTAwJScsICc4MCUnLCAnMTAwJSddLFxyXG4gICAgbXg6IFsnYXV0byddLFxyXG4gICAgcHg6IFs0LCBudWxsLCBudWxsLCAwXSxcclxuICAgICcmOjpiZWZvcmUnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDcyLCBudWxsLCA5MF0sXHJcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcclxuICAgICAgd2lkdGg6IDIxNSxcclxuICAgICAgaGVpZ2h0OiA2MCxcclxuICAgICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTIyMHB4KSc6IHtcclxuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyY6bnRoLW9mLXR5cGUoMm4tMSk6OmJlZm9yZSc6IHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QXJyb3dPZGR9KWAsXHJcbiAgICB9LFxyXG4gICAgJyY6bnRoLW9mLXR5cGUoMm4pOjpiZWZvcmUnOiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93RXZlbn0pYCxcclxuICAgICAgdG9wOiAxNyxcclxuICAgIH0sXHJcbiAgICAnJjpsYXN0LWNoaWxkOjpiZWZvcmUnOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgaWNvbkJveDoge1xyXG4gICAgd2lkdGg6IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzcwcHgnXSxcclxuICAgIGhlaWdodDogWyc1MHB4JywgbnVsbCwgJzYwcHgnLCBudWxsLCBudWxsLCAnNzBweCddLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIGJvcmRlclJhZGl1czogWzE1LCBudWxsLCAyMywgbnVsbCwgbnVsbCwgMzBdLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtYjogWzUsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDZdLFxyXG4gICAgbXg6IFsnYXV0bycsIG51bGwsIDBdLFxyXG4gICAgZm9udFNpemU6IFs2LCBudWxsLCA3LCBudWxsLCBudWxsLCAnMzBweCddLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgY29sb3I6ICcjMjM0NTgyJyxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIG10OiAnLTVweCcsXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIDQsIG51bGwsIG51bGwsIDVdLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgbGluZUhlaWdodDogWzEuNCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMS41NV0sXHJcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIG1iOiBbMiwgM10sXHJcbiAgICB9LFxyXG5cclxuICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAxLjksIDJdLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgb3BhY2l0eTogMC43NSxcclxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA1XSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==