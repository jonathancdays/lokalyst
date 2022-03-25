webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/header/mobile-drawer.js":
/*!************************************************!*\
  !*** ./src/components/header/mobile-drawer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileDrawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/drawer */ "./src/components/drawer.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\header\\mobile-drawer.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var social = [{
  path: "/",
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaFacebookF"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  })
}, {
  path: "/",
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaTwitter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  })
}, {
  path: "/",
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaGithubAlt"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  })
}, {
  path: "/",
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaDribbble"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  })
}];
function MobileDrawer() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isDrawerOpen = _useState[0],
      setisDrawerOpen = _useState[1];

  return __jsx(components_drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "320px",
    drawerHandler: __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.handler,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdMenu"], {
      size: "26px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    })),
    open: isDrawerOpen,
    toggleHandler: function toggleHandler() {
      return setisDrawerOpen(function (prevState) {
        return !prevState;
      });
    },
    closeButton: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdClose"], {
      size: "24px",
      color: "000000",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 20
      }
    }),
    drawerStyle: styles.drawer,
    closeBtnStyle: styles.close,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__["Scrollbars"], {
    autoHide: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_7__["default"].map(function (menuItem, i) {
    return __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
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
        lineNumber: 54,
        columnNumber: 15
      }
    }, menuItem.label);
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menuFooter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.social,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, social.map(function (socialItem, i) {
    return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      as: "span",
      key: i,
      sx: styles.social.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: socialItem.path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 19
      }
    }, socialItem.icon));
  }))))));
}

_s(MobileDrawer, "eq2k4eZLw10RxHY53yP90RAtt7A=");

_c = MobileDrawer;
var styles = {
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "26px",
    "@media screen and (min-width: 1024px)": {
      display: "none"
    }
  },
  drawer: {
    width: "100%",
    height: "100%",
    backgroundColor: "dark"
  },
  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "25px",
    right: "30px",
    zIndex: "1",
    cursor: "pointer"
  },
  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    pt: "100px",
    pb: "40px",
    px: "30px"
  },
  menu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    a: {
      fontSize: "16px",
      fontWeight: "500",
      color: "text_white",
      py: "15px",
      cursor: "pointer",
      borderBottom: "1px solid #e8e5e5",
      transition: "all 0.25s",
      "&:hover": {
        color: "secondary"
      },
      "&.active": {
        color: "secondary"
      }
    }
  },
  menuFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: "auto"
  },
  social: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "text",
      fontSize: 14,
      mr: "15px",
      transition: "all 0.25s",
      cursor: "pointer",
      ":last-child": {
        mr: "0"
      },
      "&:hover": {
        color: "secondary"
      }
    }
  },
  button: {
    color: "white",
    fontSize: "14px",
    fw: "700",
    height: "45px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: "0"
  }
};

var _c;

$RefreshReg$(_c, "MobileDrawer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vYmlsZS1kcmF3ZXIuanMiXSwibmFtZXMiOlsic29jaWFsIiwicGF0aCIsImljb24iLCJNb2JpbGVEcmF3ZXIiLCJ1c2VTdGF0ZSIsImlzRHJhd2VyT3BlbiIsInNldGlzRHJhd2VyT3BlbiIsInN0eWxlcyIsImhhbmRsZXIiLCJwcmV2U3RhdGUiLCJkcmF3ZXIiLCJjbG9zZSIsImNvbnRlbnQiLCJtZW51IiwibWVudUl0ZW1zIiwibWFwIiwibWVudUl0ZW0iLCJpIiwibGFiZWwiLCJtZW51Rm9vdGVyIiwic29jaWFsSXRlbSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4U2hyaW5rIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiekluZGV4IiwiY3Vyc29yIiwiZmxleERpcmVjdGlvbiIsInB0IiwicGIiLCJweCIsImEiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsInB5IiwiYm9yZGVyQm90dG9tIiwidHJhbnNpdGlvbiIsIm10IiwibXIiLCJidXR0b24iLCJmdyIsImJvcmRlclJhZGl1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUVBLElBQU1BLE1BQU0sR0FBRyxDQUNiO0FBQ0VDLE1BQUksRUFBRSxHQURSO0FBRUVDLE1BQUksRUFBRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUixDQURhLEVBS2I7QUFDRUQsTUFBSSxFQUFFLEdBRFI7QUFFRUMsTUFBSSxFQUFFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZSLENBTGEsRUFTYjtBQUNFRCxNQUFJLEVBQUUsR0FEUjtB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U05DLGNBQVUsRUFBRSxRQVROO0FBVU5DLGtCQUFjLEVBQUUsUUFWVjtBQVdOa0IsTUFBRSxFQUFFO0FBWEU7QUE3RkssQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZTlkZmRjYjlkZWQ2ZWJjNzI0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgeyBTY3JvbGxiYXJzIH0gZnJvbSBcInJlYWN0LWN1c3RvbS1zY3JvbGxiYXJzXCI7XHJcbmltcG9ydCBEcmF3ZXIgZnJvbSBcImNvbXBvbmVudHMvZHJhd2VyXCI7XHJcbmltcG9ydCB7IElvTWRDbG9zZSwgSW9NZE1lbnUgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcclxuaW1wb3J0IHtcclxuICBGYUZhY2Vib29rRixcclxuICBGYVR3aXR0ZXIsXHJcbiAgRmFHaXRodWJBbHQsXHJcbiAgRmFEcmliYmJsZSxcclxufSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IG1lbnVJdGVtcyBmcm9tIFwiLi9oZWFkZXIuZGF0YVwiO1xyXG5cclxuY29uc3Qgc29jaWFsID0gW1xyXG4gIHtcclxuICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvXCIsXHJcbiAgICBpY29uOiA8RmFUd2l0dGVyIC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvXCIsXHJcbiAgICBpY29uOiA8RmFHaXRodWJBbHQgLz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9cIixcclxuICAgIGljb246IDxGYURyaWJiYmxlIC8+LFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2JpbGVEcmF3ZXIoKSB7XHJcbiAgY29uc3QgW2lzRHJhd2VyT3Blbiwgc2V0aXNEcmF3ZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPERyYXdlclxyXG4gICAgICB3aWR0aD1cIjMyMHB4XCJcclxuICAgICAgZHJhd2VySGFuZGxlcj17XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmhhbmRsZXJ9PlxyXG4gICAgICAgICAgPElvTWRNZW51IHNpemU9XCIyNnB4XCIgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgfVxyXG4gICAgICBvcGVuPXtpc0RyYXdlck9wZW59XHJcbiAgICAgIHRvZ2dsZUhhbmRsZXI9eygpID0+IHNldGlzRHJhd2VyT3BlbigocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKX1cclxuICAgICAgY2xvc2VCdXR0b249ezxJb01kQ2xvc2Ugc2l6ZT1cIjI0cHhcIiBjb2xvcj1cIjAwMDAwMFwiIC8+fVxyXG4gICAgICBkcmF3ZXJTdHlsZT17c3R5bGVzLmRyYXdlcn1cclxuICAgICAgY2xvc2VCdG5TdHlsZT17c3R5bGVzLmNsb3NlfVxyXG4gICAgPlxyXG4gICAgICA8U2Nyb2xsYmFycyBhdXRvSGlkZT5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAgICAgIHttZW51SXRlbXMubWFwKChtZW51SXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICB0bz17bWVudUl0ZW0ucGF0aH1cclxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9mZnNldD17LTcwfVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bWVudUl0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLm1lbnVGb290ZXJ9PlxyXG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuc29jaWFsfT5cclxuICAgICAgICAgICAgICB7c29jaWFsLm1hcCgoc29jaWFsSXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiBrZXk9e2l9IHN4PXtzdHlsZXMuc29jaWFsLmljb259PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayB0bz17c29jaWFsSXRlbS5wYXRofT57c29jaWFsSXRlbS5pY29ufTwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L1Njcm9sbGJhcnM+XHJcbiAgICA8L0RyYXdlcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgaGFuZGxlcjoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBmbGV4U2hyaW5rOiBcIjBcIixcclxuICAgIHdpZHRoOiBcIjI2cHhcIixcclxuXHJcbiAgICBcIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweClcIjoge1xyXG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgZHJhd2VyOiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcImRhcmtcIixcclxuICB9LFxyXG5cclxuICBjbG9zZToge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgdG9wOiBcIjI1cHhcIixcclxuICAgIHJpZ2h0OiBcIjMwcHhcIixcclxuICAgIHpJbmRleDogXCIxXCIsXHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gIH0sXHJcblxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBwdDogXCIxMDBweFwiLFxyXG4gICAgcGI6IFwiNDBweFwiLFxyXG4gICAgcHg6IFwiMzBweFwiLFxyXG4gIH0sXHJcblxyXG4gIG1lbnU6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIGE6IHtcclxuICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxyXG4gICAgICBjb2xvcjogXCJ0ZXh0X3doaXRlXCIsXHJcbiAgICAgIHB5OiBcIjE1cHhcIixcclxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjZThlNWU1XCIsXHJcbiAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuMjVzXCIsXHJcbiAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgY29sb3I6IFwic2Vjb25kYXJ5XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiJi5hY3RpdmVcIjoge1xyXG4gICAgICAgIGNvbG9yOiBcInNlY29uZGFyeVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBtZW51Rm9vdGVyOiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgbXQ6IFwiYXV0b1wiLFxyXG4gIH0sXHJcblxyXG4gIHNvY2lhbDoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcblxyXG4gICAgaWNvbjoge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIGNvbG9yOiBcInRleHRcIixcclxuICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICBtcjogXCIxNXB4XCIsXHJcbiAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuMjVzXCIsXHJcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgIFwiOmxhc3QtY2hpbGRcIjoge1xyXG4gICAgICAgIG1yOiBcIjBcIixcclxuICAgICAgfSxcclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICBjb2xvcjogXCJzZWNvbmRhcnlcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxyXG4gICAgZnc6IFwiNzAwXCIsXHJcbiAgICBoZWlnaHQ6IFwiNDVweFwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgcHk6IFwiMFwiLFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=