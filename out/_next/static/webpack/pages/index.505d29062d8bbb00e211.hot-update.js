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
  var _this = this;

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
  }, social.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      key: item.id,
      href: item.path,
      className: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    });
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzIl0sIm5hbWVzIjpbIlRlYW1DYXJkIiwic3JjIiwiYWx0VGV4dCIsInRpdGxlIiwiZGVzaWduYXRpb24iLCJzb2NpYWwiLCJzdHlsZXMiLCJjYXJkIiwibWVtYmVyVGh1bWIiLCJpbmZvV3JhcHBlciIsIm5hbWUiLCJzb2NpYWxTaGFyZSIsIm1hcCIsIml0ZW0iLCJpZCIsInBhdGgiLCJpIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwicHkiLCJweCIsInRyYW5zaXRpb24iLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsImJveFNoYWRvdyIsImNvbG9yIiwib3BhY2l0eSIsImEiLCJteSIsIndpZHRoIiwiaGVpZ2h0IiwiZmxleFNocmluayIsImJvcmRlciIsImJvcmRlckNvbG9yIiwidGV4dEFsaWduIiwibXQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwibWIiLCJyaWdodCIsImJvdHRvbSIsImp1c3RpZnlDb250ZW50IiwicHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULE9BQWdFO0FBQUE7O0FBQUEsTUFBNUNDLEdBQTRDLFFBQTVDQSxHQUE0QztBQUFBLE1BQXZDQyxPQUF1QyxRQUF2Q0EsT0FBdUM7QUFBQSxNQUE5QkMsS0FBOEIsUUFBOUJBLEtBQThCO0FBQUEsTUFBdkJDLFdBQXVCLFFBQXZCQSxXQUF1QjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUM3RSxTQUNFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFQyxNQUFNLENBQUNDLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw4Q0FBRDtBQUFPLE9BQUcsRUFBRU4sR0FBWjtBQUFpQixPQUFHLEVBQUVDLE9BQXRCO0FBQStCLE1BQUUsRUFBRUksTUFBTSxDQUFDRSxXQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUYsTUFBTSxDQUFDRyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsZ0RBQUQ7QUFBUyxhQUFTLEVBQUMsWUFBbkI7QUFBZ0MsTUFBRSxFQUFFSCxNQUFNLENBQUNHLFdBQVAsQ0FBbUJDLElBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsS0FESCxDQURGLEVBSUUscURBQUMsNkNBQUQ7QUFBTSxhQUFTLEVBQUMsbUJBQWhCO0FBQW9DLE1BQUUsRUFBRUcsTUFBTSxDQUFDRyxXQUFQLENBQW1CTCxXQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLFdBREgsQ0FKRixDQUZGLEVBVUUscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVFLE1BQU0sQ0FBQ0ssV0FBaEI7QUFBNkIsYUFBUyxFQUFDLGVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR04sTUFBTSxDQUFDTyxHQUFQLENBQVcsVUFBQ0MsSUFBRDtBQUFBLFdBQ1YscURBQUMsNkNBQUQ7QUFBTSxTQUFHLEVBQUdBLElBQUksQ0FBQ0MsRUFBakI7QUFBcUIsVUFBSSxFQUFFRCxJQUFJLENBQUNFLElBQWhDO0FBQXNDLGVBQVMsRUFBRUMsQ0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURVO0FBQUEsR0FBWCxDQURILENBVkYsQ0FERjtBQW1CRDtLQXBCdUJoQixRO0FBc0J4QixJQUFNTSxNQUFNLEdBQUc7QUFDYkMsTUFBSSxFQUFFO0FBQ0pVLFdBQU8sRUFBRSxNQURMO0FBRUpDLGNBQVUsRUFBRSxRQUZSO0FBR0pDLGlCQUFhLEVBQUUsUUFIWDtBQUlKQyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBSkE7QUFLSkMsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLEVBQWEsQ0FBYixDQUxBO0FBTUpDLGNBQVUsRUFBRSxrQkFOUjtBQU9KQyxnQkFBWSxFQUFFLEtBUFY7QUFRSkMsWUFBUSxFQUFFLFVBUk47QUFTSixlQUFXO0FBQ1RDLGVBQVMsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsb0NBQWYsQ0FERjtBQUVULHFCQUFlO0FBQ2JDLGFBQUssRUFBRTtBQURNLE9BRk47QUFLVCw0QkFBc0I7QUFDcEJBLGFBQUssRUFBRTtBQURhLE9BTGI7QUFRVCx3QkFBa0I7QUFDaEJDLGVBQU8sRUFBRSxDQURPO0FBRWhCQyxTQUFDLEVBQUU7QUFDREMsWUFBRSxFQUFFLENBREg7QUFFRFQsWUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWO0FBRkg7QUFGYTtBQVJUO0FBVFAsR0FETztBQTRCYlosYUFBVyxFQUFFO0FBQ1hzQixTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixPQUFqQixFQUEwQixJQUExQixFQUFnQyxJQUFoQyxFQUFzQyxPQUF0QyxDQURJO0FBRVhDLFVBQU0sRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE9BQWpCLEVBQTBCLElBQTFCLEVBQWdDLElBQWhDLEVBQXNDLE9BQXRDLENBRkc7QUFHWEMsY0FBVSxFQUFFLENBSEQ7QUFJWEMsVUFBTSxFQUFFLFdBSkc7QUFLWEMsZUFBVyxFQUFFLFNBTEY7QUFNWFgsZ0JBQVksRUFBRTtBQU5ILEdBNUJBO0FBb0NiZCxhQUFXLEVBQUU7QUFDWHFCLFNBQUssRUFBRSxNQURJO0FBRVhLLGFBQVMsRUFBRSxRQUZBO0FBR1hDLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixDQUhPO0FBSVgxQixRQUFJLEVBQUU7QUFDSjJCLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsQ0FBdEIsQ0FETjtBQUVKQyxnQkFBVSxFQUFFLE1BRlI7QUFHSkMsZ0JBQVUsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLENBSFI7QUFJSmpCLGdCQUFVLEVBQUUsYUFKUjtBQUtKa0IsUUFBRSxFQUFFO0FBTEEsS0FKSztBQVdYcEMsZUFBVyxFQUFFO0FBQ1hpQyxjQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsQ0FBckIsQ0FEQztBQUVYQyxnQkFBVSxFQUFFLE1BRkQ7QUFHWEMsZ0JBQVUsRUFBRSxTQUhEO0FBSVhiLFdBQUssRUFBRSxNQUpJO0FBS1hKLGdCQUFVLEVBQUU7QUFMRDtBQVhGLEdBcENBO0FBdURiWCxhQUFXLEVBQUU7QUFDWGEsWUFBUSxFQUFFLENBQUMsVUFBRCxFQUFhLElBQWIsRUFBbUIsVUFBbkIsQ0FEQztBQUVYaUIsU0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLEVBQWEsSUFBYixFQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUZJO0FBR1hDLFVBQU0sRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsTUFBVixFQUFrQixDQUFsQixDQUhHO0FBSVhaLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsTUFBZixDQUpJO0FBS1hiLFdBQU8sRUFBRSxNQUxFO0FBTVhFLGlCQUFhLEVBQUUsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLFFBQWQsQ0FOSjtBQU9YRCxjQUFVLEVBQUUsUUFQRDtBQVFYeUIsa0JBQWMsRUFBRSxRQVJMO0FBU1hyQixjQUFVLEVBQUUsV0FURDtBQVVYSyxXQUFPLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsQ0FWRTtBQVdYaUIsTUFBRSxFQUFFLENBWE87QUFZWGhCLEtBQUMsRUFBRTtBQUNEUyxjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLElBQVAsRUFBYSxDQUFiLENBRFQ7QUFFRFgsV0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxTQUFmLENBRk47QUFHRGEsZ0JBQVUsRUFBRSxLQUhYO0FBSURWLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsTUFBVixDQUpIO0FBS0RSLFFBQUUsRUFBRSxDQUxIO0FBTURDLGdCQUFVLEVBQUUsV0FOWDtBQU9ELGlCQUFXO0FBQ1RJLGFBQUssRUFBRSxDQUFDLFNBQUQsRUFBWSxJQUFaLEVBQWtCLE1BQWxCO0FBREU7QUFQVjtBQVpRO0FBdkRBLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTA1ZDI5MDYyZDhiYmIwMGUyMTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IHsgVGV4dCwgSGVhZGluZywgSW1hZ2UsIEJveCwgTGluayB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVhbUNhcmQoeyBzcmMsIGFsdFRleHQsIHRpdGxlLCBkZXNpZ25hdGlvbiwgc29jaWFsIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzLmNhcmR9PlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtzcmN9IGFsdD17YWx0VGV4dH0gc3g9e3N0eWxlcy5tZW1iZXJUaHVtYn0gLz5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLmluZm9XcmFwcGVyfT5cclxuICAgICAgICA8SGVhZGluZyBjbGFzc05hbWU9XCJpbmZvX19uYW1lXCIgc3g9e3N0eWxlcy5pbmZvV3JhcHBlci5uYW1lfT5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwiaW5mb19fZGVzaWduYXRpb25cIiBzeD17c3R5bGVzLmluZm9XcmFwcGVyLmRlc2lnbmF0aW9ufT5cclxuICAgICAgICAgIHtkZXNpZ25hdGlvbn1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuc29jaWFsU2hhcmV9IGNsYXNzTmFtZT1cInNvY2lhbF9fc2hhcmVcIj5cclxuICAgICAgICB7c29jaWFsLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPExpbmsga2V5PSB7aXRlbS5pZH0gaHJlZj17aXRlbS5wYXRofSBjbGFzc05hbWU9e2l9PjwvTGluaz5cclxuICAgICAgICApKX1cclxuXHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcmQ6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBweTogWzAsIG51bGwsIDQsIDUsIDZdLFxyXG4gICAgcHg6IFsyLCBudWxsLCA2LCA3XSxcclxuICAgIHRyYW5zaXRpb246IFwiZWFzZS1pbi1vdXQgMC40c1wiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGJveFNoYWRvdzogW1wibm9uZVwiLCBudWxsLCBcIjAgNHB4IDEwcHggcmdiYSgzOSwgODMsIDEyMywgMC4xMilcIl0sXHJcbiAgICAgIFwiLmluZm9fX25hbWVcIjoge1xyXG4gICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcclxuICAgICAgfSxcclxuICAgICAgXCIuaW5mb19fZGVzaWduYXRpb25cIjoge1xyXG4gICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcclxuICAgICAgfSxcclxuICAgICAgXCIuc29jaWFsX19zaGFyZVwiOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICBhOiB7XHJcbiAgICAgICAgICBteTogMCxcclxuICAgICAgICAgIHB5OiBbMCwgbnVsbCwgMV0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgbWVtYmVyVGh1bWI6IHtcclxuICAgIHdpZHRoOiBbXCI3MHB4XCIsIFwiODBweFwiLCBcIjEwMHB4XCIsIG51bGwsIG51bGwsIFwiMTMwcHhcIl0sXHJcbiAgICBoZWlnaHQ6IFtcIjcwcHhcIiwgXCI4MHB4XCIsIFwiMTAwcHhcIiwgbnVsbCwgbnVsbCwgXCIxMzBweFwiXSxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBib3JkZXI6IFwiMnB4IHNvbGlkXCIsXHJcbiAgICBib3JkZXJDb2xvcjogXCJwcmltYXJ5XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgfSxcclxuICBpbmZvV3JhcHBlcjoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgbXQ6IFszLCBudWxsLCA0XSxcclxuICAgIG5hbWU6IHtcclxuICAgICAgZm9udFNpemU6IFsxLCAyLCAzLCBudWxsLCBudWxsLCA0XSxcclxuICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjI1LCAxLjM1XSxcclxuICAgICAgdHJhbnNpdGlvbjogXCJjb2xvciAwLjI1c1wiLFxyXG4gICAgICBtYjogMSxcclxuICAgIH0sXHJcbiAgICBkZXNpZ25hdGlvbjoge1xyXG4gICAgICBmb250U2l6ZTogW1wiMTRweFwiLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgZm9udFdlaWdodDogXCJib2R5XCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiaGVhZGluZ1wiLFxyXG4gICAgICBjb2xvcjogXCJ0ZXh0XCIsXHJcbiAgICAgIHRyYW5zaXRpb246IFwiY29sb3IgMC4yNXNcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzb2NpYWxTaGFyZToge1xyXG4gICAgcG9zaXRpb246IFtcInJlbGF0aXZlXCIsIG51bGwsIFwiYWJzb2x1dGVcIl0sXHJcbiAgICByaWdodDogWzAsIG51bGwsIDYsIG51bGwsIDQsIDZdLFxyXG4gICAgYm90dG9tOiBbMCwgbnVsbCwgXCIxOHB4XCIsIDVdLFxyXG4gICAgd2lkdGg6IFtcIjEwMCVcIiwgbnVsbCwgXCJhdXRvXCJdLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBbXCJyb3dcIiwgbnVsbCwgXCJjb2x1bW5cIl0sXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjI1c1wiLFxyXG4gICAgb3BhY2l0eTogWzEsIG51bGwsIDBdLFxyXG4gICAgcHQ6IDIsXHJcbiAgICBhOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMCwgMSwgbnVsbCwgMl0sXHJcbiAgICAgIGNvbG9yOiBbXCJ0ZXh0XCIsIG51bGwsIFwicHJpbWFyeVwiXSxcclxuICAgICAgbGluZUhlaWdodDogXCIxZW1cIixcclxuICAgICAgbXk6IFswLCBudWxsLCBcIi0ycHhcIl0sXHJcbiAgICAgIHB4OiAxLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjI1c1wiLFxyXG4gICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIGNvbG9yOiBbXCJwcmltYXJ5XCIsIG51bGwsIFwidGV4dFwiXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==