webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/feature-card.js":
/*!****************************************!*\
  !*** ./src/components/feature-card.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeatureCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\feature-card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */

function FeatureCard(_ref) {
  var src = _ref.src,
      _ref$altText = _ref.altText,
      altText = _ref$altText === void 0 ? 'default alt text' : _ref$altText,
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
      columnNumber: 5
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, text)));
}
_c = FeatureCard;
var styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    mb: -1
  },
  img: {
    width: ['70px', null, null, '80px', '90px', 'auto'],
    height: 'auto',
    flexShrink: 0,
    mr: [2, 3, null, null, 4, 5],
    ml: -2
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [2, 3],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: ['10px', null, '15px']
    },
    subTitle: {
      fontSize: [1, '15px'],
      fontWeight: 400,
      lineHeight: '1.9'
    }
  }
};

var _c;

$RefreshReg$(_c, "FeatureCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLmpzIl0sIm5hbWVzIjpbIkZlYXR1cmVDYXJkIiwic3JjIiwiYWx0VGV4dCIsInRpdGxlIiwidGV4dCIsInN0eWxlcyIsImNhcmQiLCJpbWciLCJ3cmFwcGVyIiwic3ViVGl0bGUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm1iIiwid2lkdGgiLCJoZWlnaHQiLCJmbGV4U2hyaW5rIiwibXIiLCJtbCIsImZsZXhEaXJlY3Rpb24iLCJtdCIsImZvbnRTaXplIiwiY29sb3IiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxXQUFULE9BS1o7QUFBQSxNQUpEQyxHQUlDLFFBSkRBLEdBSUM7QUFBQSwwQkFIREMsT0FHQztBQUFBLE1BSERBLE9BR0MsNkJBSFMsa0JBR1Q7QUFBQSxNQUZEQyxLQUVDLFFBRkRBLEtBRUM7QUFBQSxNQUREQyxJQUNDLFFBRERBLElBQ0M7QUFDRCxTQUNFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFQyxNQUFNLENBQUNDLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxxREFBQyw4Q0FBRDtBQUFPLE9BQUcsRUFBRUwsR0FBWjtBQUFpQixXQUFPLEVBQUVDLE9BQTFCO0FBQW1DLE1BQUUsRUFBRUcsTUFBTSxDQUFDRSxHQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsRUFFQSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUYsTUFBTSxDQUFDRyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsZ0RBQUQ7QUFBUyxNQUFFLEVBQUVILE1BQU0sQ0FBQ0csT0FBUCxDQUFlTCxLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9DQSxLQUFwQyxDQURGLEVBRUUscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUVFLE1BQU0sQ0FBQ0csT0FBUCxDQUFlQyxRQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9DTCxJQUFwQyxDQUZGLENBRkEsQ0FERjtBQVNEO0tBZnVCSixXO0FBaUJ4QixJQUFNSyxNQUFNLEdBQUc7QUFDYkMsTUFBSSxFQUFFO0FBQ0pJLFdBQU8sRUFBRSxNQURMO0FBRUpDLGNBQVUsRUFBRSxZQUZSO0FBR0pDLE1BQUUsRUFBRSxDQUFDO0FBSEQsR0FETztBQU9iTCxLQUFHLEVBQUU7QUFDSE0sU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLE1BQXJCLEVBQTZCLE1BQTdCLEVBQXFDLE1BQXJDLENBREo7QUFFSEMsVUFBTSxFQUFFLE1BRkw7QUFHSEMsY0FBVSxFQUFFLENBSFQ7QUFJSEMsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUpEO0FBS0hDLE1BQUUsRUFBRSxDQUFDO0FBTEYsR0FQUTtBQWNiVCxTQUFPLEVBQUU7QUFDUEssU0FBSyxFQUFFLE1BREE7QUFFUEgsV0FBTyxFQUFFLE1BRkY7QUFHUFEsaUJBQWEsRUFBRSxRQUhSO0FBSVBDLE1BQUUsRUFBRSxNQUpHO0FBS1BoQixTQUFLLEVBQUU7QUFDTGlCLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBREw7QUFFTEMsV0FBSyxFQUFFLG1CQUZGO0FBR0xDLGdCQUFVLEVBQUUsR0FIUDtBQUlMQyxnQkFBVSxFQUFFLEdBSlA7QUFLTFgsUUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxNQUFmO0FBTEMsS0FMQTtBQWFQSCxZQUFRLEVBQUU7QUFDUlcsY0FBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FERjtBQUVSRyxnQkFBVSxFQUFFLEdBRko7QUFHUkQsZ0JBQVUsRUFBRTtBQUhKO0FBYkg7QUFkSSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE4NGViYTdjYmUyNGY3NDk2ZjgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBJbWFnZSwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZUNhcmQoe1xyXG4gIHNyYyxcclxuICBhbHRUZXh0ID0gJ2RlZmF1bHQgYWx0IHRleHQnLFxyXG4gIHRpdGxlLFxyXG4gIHRleHQsXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzLmNhcmR9PlxyXG4gICAgPEltYWdlIHNyYz17c3JjfSBhbHRUZXh0PXthbHRUZXh0fSBzeD17c3R5bGVzLmltZ30gLz5cclxuICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT57dGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9Pnt0ZXh0fTwvVGV4dD5cclxuICAgIDwvQm94PlxyXG4gIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJkOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBtYjogLTEsXHJcbiAgfSxcclxuXHJcbiAgaW1nOiB7XHJcbiAgICB3aWR0aDogWyc3MHB4JywgbnVsbCwgbnVsbCwgJzgwcHgnLCAnOTBweCcsICdhdXRvJ10sXHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBtcjogWzIsIDMsIG51bGwsIG51bGwsIDQsIDVdLFxyXG4gICAgbWw6IC0yLFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgbXQ6ICctNXB4JyxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMiwgM10sXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgbWI6IFsnMTBweCcsIG51bGwsICcxNXB4J10sXHJcbiAgICB9LFxyXG5cclxuICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMSwgJzE1cHgnXSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMS45JyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==