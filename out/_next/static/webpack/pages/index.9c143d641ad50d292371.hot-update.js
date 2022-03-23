webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/package.js":
/*!*********************************!*\
  !*** ./src/sections/package.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Package; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_price_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/price-card */ "./src/components/price-card.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");


var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\sections\\package.js",
    _templateObject,
    _templateObject2;

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

/** @jsx jsx */








var packages = {
  monthly: [{
    id: 1,
    name: 'Free Plan',
    description: 'For Small teams or office',
    buttonText: 'Start free trail',
    priceWithUnit: '$0',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }
      }),
      text: 'Drag & Drop Builder',
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }
      }),
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }
      }),
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCloseCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }
      }),
      text: 'eCommerce Store ',
      isAvailable: true
    }]
  }, {
    id: 2,
    name: 'Business king',
    description: 'For Enterprise business',
    priceWithUnit: '$15',
    buttonText: 'Create account',
    anotherOption: 'Or Start 14 Days trail',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }),
      text: 'Drag & Drop Builder',
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }
      }),
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }
      }),
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }),
      text: 'eCommerce Store ',
      isAvailable: true
    }]
  }, {
    id: 3,
    header: 'Suggested',
    headerIcon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 19
      }
    }),
    name: 'Pro Master',
    description: 'For pro level developers',
    priceWithUnit: '$24',
    buttonText: 'Create account',
    anotherOption: 'Or Start 14 Days trail',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }
      }),
      text: 'Drag & Drop Builder',
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }
      }),
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 17
        }
      }),
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 17
        }
      }),
      text: 'eCommerce Store ',
      isAvailable: true
    }]
  }],
  annual: [{
    id: 1,
    name: 'Free Plan',
    description: 'For Small teams or office',
    buttonText: 'Start free trail',
    priceWithUnit: '$0',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 17
        }
      }),
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 17
        }
      }),
      text: 'Drag & Drop Builder',
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 17
        }
      }),
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCloseCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 17
        }
      }),
      text: 'eCommerce Store ',
      isAvailable: true
    }]
  }, {
    id: 2,
    name: 'Business king',
    description: 'For Enterprise business',
    priceWithUnit: '$25',
    buttonText: 'Create account',
    anotherOption: 'Or Start 10 Days trail',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 17
        }
      }),
      text: 'eCommerce Store',
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 17
        }
      }),
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 17
        }
      }),
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 17
        }
      }),
      text: 'Drag & Drop Builder ',
      isAvailable: true
    }]
  }, {
    id: 3,
    header: 'Suggested',
    headerIcon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 19
      }
    }),
    name: 'Pro Master',
    description: 'For pro level developers',
    priceWithUnit: '$39',
    buttonText: 'Create account',
    anotherOption: 'Or Start 10 Days trail',
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 17
        }
      }),
      text: 'eCommerce Store',
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 17
        }
      }),
      text: 'Blog Support Tools',
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 17
        }
      }),
      text: "1,000's of Templates",
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 17
        }
      }),
      text: 'Drag & Drop Builder ',
      isAvailable: true
    }]
  }]
};
var responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    draggable: false
  },
  tablet: {
    breakpoint: {
      max: 1023,
      min: 640
    },
    items: 2,
    draggable: true
  },
  mobile: {
    breakpoint: {
      max: 639,
      min: 0
    },
    items: 1,
    draggable: true
  }
};
function Package() {
  var monthly = packages.monthly,
      annual = packages.annual;
  var sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 24
      }
    }),
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: ''
  };
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    id: "pricing",
    sx: {
      variant: 'section.pricing'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    slogan: "Payment Plan",
    title: "Choose your package",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: styles.buttonGroup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.buttonGroupIneer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 11
    }
  }))));
}
_c = Package;
var fadeIn = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"])));
var fadeIn2 = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    transform: translateY(50%);\n    opacity: 0;\n  }\n  to {\n\t\ttransform: translateY(0);\n    opacity: 1;\n  }\n"])));
var styles = {
  pricingWrapper: {
    mb: '-40px',
    mt: '-40px',
    mx: -3,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: "".concat(fadeIn, " 0.8s ease-in")
      },
      'ul > li': {
        animation: "".concat(fadeIn2, " 0.7s ease-in")
      },
      '.package__price': {
        animation: "".concat(fadeIn2, " 0.9s ease-in")
      },
      button: {
        animation: "".concat(fadeIn2, " 1s ease-in")
      }
    },
    '.carousel-container': {
      width: '100%',
      '> ul > li ': {
        display: 'flex'
      }
    },
    '.button__group': {
      display: ['flex', null, null, null, 'none'],
      mb: [4, null, null, null, 0]
    }
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto'
  },
  buttonGroup: {
    justifyContent: 'center',
    mb: '7',
    mt: ['-15px', '-35px'],
    position: 'relative',
    zIndex: 2
  },
  buttonGroupInner: {
    display: 'flex',
    padding: '7px',
    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#F7F8FB',
    button: {
      border: 0,
      padding: ['15px 20px', '15px 27px'],
      borderRadius: '5px',
      color: 'text',
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&.active': {
        color: '#0f2137',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)'
      },
      '&:focus': {
        outline: 0
      }
    }
  }
};

var _c;

$RefreshReg$(_c, "Package");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3BhY2thZ2UuanMiXSwibmFtZXMiOlsicGFja2FnZXMiLCJtb250aGx5IiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJidXR0b25UZXh0IiwicHJpY2VXaXRoVW5pdCIsInBvaW50cyIsImljb24iLCJ0ZXh0IiwiaXNBdmFpbGFibGUiLCJhbm90aGVyT3B0aW9uIiwiaGVhZGVyIiwiaGVhZGVySWNvbiIsImFubnVhbCIsInJlc3BvbnNpdmUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwiZHJhZ2dhYmxlIiwidGFibGV0IiwibW9iaWxlIiwiUGFja2FnZSIsInNsaWRlclBhcmFtcyIsImFkZGl0aW9uYWxUcmFuc2Zyb20iLCJhcnJvd3MiLCJhdXRvUGxheVNwZWVkIiwiY2VudGVyTW9kZSIsImNsYXNzTmFtZSIsInNsaWRlc1RvU2xpZGUiLCJjb250YWluZXJDbGFzcyIsImN1c3RvbUJ1dHRvbkdyb3VwIiwiZG90TGlzdENsYXNzIiwiZm9jdXNPblNlbGVjdCIsImluZmluaXRlIiwia2V5Qm9hcmRDb250cm9sIiwiaXRlbUNsYXNzIiwibWluaW11bVRvdWNoRHJhZyIsInJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZSIsInJlbmRlckRvdHNPdXRzaWRlIiwic2hvd0RvdHMiLCJzbGlkZXJDbGFzcyIsInZhcmlhbnQiLCJzdHlsZXMiLCJidXR0b25Hcm91cCIsImJ1dHRvbkdyb3VwSW5lZXIiLCJmYWRlSW4iLCJrZXlmcmFtZXMiLCJmYWRlSW4yIiwicHJpY2luZ1dyYXBwZXIiLCJtYiIsIm10IiwibXgiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImZsZXhXcmFwIiwiYW5pbWF0aW9uIiwiYnV0dG9uIiwid2lkdGgiLCJwcmljaW5nSXRlbSIsImZsZXhTaHJpbmsiLCJmbGV4IiwianVzdGlmeUNvbnRlbnQiLCJwb3NpdGlvbiIsInpJbmRleCIsImJ1dHRvbkdyb3VwSW5uZXIiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiY29sb3IiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwiY3Vyc29yIiwiZm9udEZhbWlseSIsImxldHRlclNwYWNpbmciLCJ0cmFuc2l0aW9uIiwiYm94U2hhZG93Iiwib3V0bGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRztBQUNmQyxTQUFPLEVBQUUsQ0FDUDtBQUNFQyxNQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFJLEVBQUUsV0FGUjtBQUdFQyxlQUFXLEVBQUUsMkJBSGY7QUFJRUMsY0FBVSxFQUFFLGtCQUpkO0FBS0VDLGlCQUFhLEVBQUUsSUFMakI7QUFNRUMsVUFBTSxFQUFFLENBQ047QUFDRUwsUUFBRSxFQUFFLENBRE47QUFFRU0sVUFBSSxFQUFFLHFEQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGUjtBQUdFQyxVQUFJLEVBQUUscUJBSFI7QUFJRUMsaUJBQVcsRUFBRTtBQUpmLEtBRE0sRUFPTjtBQUNFUixRQUFFLEVBQUUsQ0FETjtBQUVFTSxVQUFJLEVBQUUscURBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZSO0FBR0VDLFVBQUksRUFBRSxzQkFIUjtBQUlFQyxpQkFBVyxFQUFFO0FBSmYsS0FQTSxFQWFOO0FBQ0VSLFFBQUUsRUFBRSxDQUROO0FBRUVNLFVBQUksRUFBRSxxREFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRlI7QUFHRUMsVUFBSSxFQUFFLG9CQUhSO0FBSUVDLGlCQUFXLEVBQUU7QUFKZixLQWJNLEVBbUJOO0FBQ0VSLFFBQUUsRUFBRSxDQUROO0FBRUVNLFVBQUksRUFBRSxxREFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRlI7QUFHRUMsVUFBSSxFQUFFLGtCQUhSO0FBSUVDLGlCQUFXLEVBQUU7QUFKZixLQW5CTTtBQU5WLEdBRE8sRUFrQ1A7QUFDRVIsTUFBRSxFQUFFLENBRE47QUFFRUMsUUFBSSxFQUFFLGVBRlI7QUFHRUMsZUFBVyxFQUFFLHlCQUhmO0FBSUVFLGlCQUFhLEVBQUUsS0FKakI7QUFLRUQsY0FBVSxFQUFFLGdCQUxkO0FBTUVNLGlCQUFhLEVBQUUsd0JBTmpCO0FBT0VKLFVBQU0sRUFBRSxDQUNOO0FBQ0VMLFFBQUUsRUFBRSxDQUROO0FBRUVNLFVBQUksRUFBRSxxREFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRlI7QUFHRUMsVUFBSSxFQUFFLHFCQUhSO0FBSUVDLGlCQUFXLEVBQUU7QUFKZixLQURNLEVBT047QUFDRVIsUUFBRSxFQUFFLENBRE47QUFFRU0sVUFBSSxFQUFFLHFEQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGUjtBQUdFQyxVQUFJLEVBQUUsc0JBSFI7QUFJRUMsaUJBQVcsRUFBRTtBQUpmLEtBUE0sRUFhTjtBQUNFUixRQUFFLEVBQUUsQ0FETjtBQUVFTSxVQUFJLEVBQUUscURBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZSO0FBR0VDLFVBQUksRUFBRSxvQkFIUjtBQUlFQyxpQkFBVyxFQUFFO0FBSmYsS0FiTSxFQW1CTjtBQUNFUixRQUFFLEVBQUUsQ0FETjtBQUVFTSxVQUFJLEVBQUUscURBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZSO0FBR0VDLFVBQUksRUFBRSxrQkFIUjtBQUlFQyxpQkFBVyxFQUFFO0FBSmYsS0FuQk07QUFQVixHQWxDTyxFQW9FUDtBQUNFUixNQUFFLEVBQUUsQ0FETjtBQUVFVSxVQUFNLEVBQUUsV0FGVjtBQUdFQyxjQUFVLEVBQUUscURBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhkO0FBSUVWLFFBQUksRUFBRSxZQUpSO0FBS0VDLGVBQVcsRUFBRSwwQkFMZjtBQU1FRSxpQkFBYSxFQUFFLEtBTmpCO0FBT0VELGNBQVUsRUFBRSxnQkFQZDtBQVFFTSxpQkFBYSxFQUFFLHdCQVJqQjtBQVNFSixVQUFNLEVBQUUsQ0FDTjtBQUNFTCxRQUFFLEVBQUUsQ0FETjtBQUVFTSxVQUFJLEVBQUUscURBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZSO0FBR0VDLFVBQUksRUFBRSxxQkFIUjtBQUlFQyxpQkFBVyxFQUFFO0FBSmYsS0FETSxFQU9OO0FBQ0VSLFFBQUUsRUFBRSxDQUROO0FBRUVNLFVBQUksRUFBRSxxREFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRlI7QUFHRUMsVUFBSSxFQUFFLHNCQUhSO0FBSUVDLGlCQUFXLEVBQUU7QUFKZixLQVBNLEVBYU47QUFDRVIsUUFBRSxFQUFFLENBRE47QUFFRU0sVUFBSSxFQUFFLHFEQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGUjtBQUdFQyxVQUFJLEVBQUUsb0JBSFI7QUFJRUMsaUJBQVcsRUFBRTtBQUpmLEtBYk0sRUFtQk47QUFDRVIsUUFBRSxFQUFFLENBRE47QUFFRU0sVUFBSSxFQUFFLHFEQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGUjtBQUdFQyxVQUFJLEVBQUUsa0JBSFI7QUFJRUMsaUJBQVcsRUFBRTtBQUpmLEtBbkJNO0FBVFYsR0FwRU8sQ0FETTtBQTBHZkksUUFBTSxFQUFFLENBQ047QUFDRVosTUFBRSxFQUFFLENBRE47QUFFRUMsUUFBSSxFQUFFLFdBRlI7QUFHRUMsZUFBVyxFQUFFLDJCQUhmO0FBSUVDLGNBQVUsRUFBRSxrQkFKZDtBQUtFQyxpQkFBYSxFQUFFLElBTGpCO0FBTUVDLFVBQU0sRUFBRSxDQUNOO0FBQ0VMLFFBQUUsRUFBRSxDQUROO0FBRUVNLFVBQUksRUFBRSxxREFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRlI7QUFHRUMsVUFBSSxFQUFFLHNCQUhSO0FBSUVDLGlCQUFXLEVBQUU7QUFKZixLQURNLEVBT047QUFDRVIsUUFBRSxFQUFFLENBRE47QUFFRU0sVUFBSSxFQUFFLHFEQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGUjtBQUdFQyxVQUFJLEVBQUUscUJBSFI7QUFJRUMsaUJBQVcsRUFBRTtBQUpmLEtBUE0sRUFhTjtBQUNFUixRQUFFLEVBQUUsQ0FETjtBQUVFTSxVQUFJLEVBQUUscURBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZSO0FBR0VDLFVBQUksRUFBRSxvQkFIUjtBQUlFQyxpQkFBVyxFQUFFO0FBSmYsS0FiTSxFQW1CTjtBQUNFUixRQUFFLEVBQUUsQ0FETjtBQUVFTSxVQUFJLEVBQUUscURBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZSO0FBR0VDLFVBQUksRUFBRSxrQkFIUjtBQUlFQyxpQkFBVyxFQUFFO0FBSmYsS0FuQk07QUFOVixHQURNLEVBa0NOO0FBQ0VSLE1BQUUsRUFBRSxDQUROO0FBRUVDLFFBQUksRUFBRSxlQUZSO0FBR0VDLGVBQVcsRUFBRSx5QkFIZjtBQUlFRSxpQkFBYSxFQUFFLEtBSmpCO0FBS0VELGNBQVUsRUFBRSxnQkFMZDtBQU1FTSxpQkFBYSxFQUFFLHdCQU5qQjtBQU9FSixVQUFNLEVBQUUsQ0FDTjtBQUNFTCxRQUFFLEVBQUUsQ0FETjtBQUVFTSxVQUFJLEVBQUUscURBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZSO0FBR0VDLFVBQUksRUFBRSxpQkFIUjtBQUlFQyxpQkFBVyxFQUFFO0FBSmYsS0FETSxFQU9OO0FBQ0VSLFFBQUUsRUFBRSxDQUROO0FBRUVNLFVBQUksRUFBRSxxREFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRlI7QUFHRUMsVUFBSSxFQUFFLG9CQUhSO0FBSUVDLGlCQUFXLEVBQUU7QUFKZixLQVBNLEVBYU47QUFDRVIsUUFBRSxFQUFFLENBRE47QUFFRU0sVUFBSSxFQUFFLHFEQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGUjtBQUdFQyxVQUFJLEVBQUUsc0JBSFI7QUFJRUMsaUJBQVcsRUFBRTtBQUpmLEtBYk0sRUFtQk47QUFDRVIsUUFBRSxFQUFFLENBRE47QUFFRU0sVUFBSSxFQUFFLHFEQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGUjtBQUdFQyxVQUFJLEVBQUUsc0JBSFI7QUFJRUMsaUJBQVcsRUFBRTtBQUpmLEtBbkJNO0FBUFYsR0FsQ00sRUFvRU47QUFDRVIsTUFBRSxFQUFFLENBRE47QUFFRVUsVUFBTSxFQUFFLFdBRlY7QUFHRUMsY0FBVSxFQUFFLHFEQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIZDtBQUlFVixRQUFJLEVBQUUsWUFKUjtBQUtFQyxlQUFXLEVBQUUsMEJBTGY7QUFNRUUsaUJBQWEsRUFBRSxLQU5qQjtBQU9FRCxjQUFVLEVBQUUsZ0JBUGQ7QUFRRU0saUJBQWEsRUFBRSx3QkFSakI7QUFTRUosVUFBTSxFQUFFLENBQ047QUFDRUwsUUFBRSxFQUFFLENBRE47QUFFRU0sVUFBSSxFQUFFLHFEQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGUjtBQUdFQyxVQUFJLEVBQUUsaUJBSFI7QUFJRUMsaUJBQVcsRUFBRTtBQUpmLEtBRE0sRUFPTjtBQUNFUixRQUFFLEVBQUUsQ0FETjtBQUVFTSxVQUFJLEVBQUUscURBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZSO0FBR0VDLFVBQUksRUFBRSxvQkFIUjtBQUlFQyxpQkFBVyxFQUFFO0FBSmYsS0FQTSxFQWFOO0FBQ0VSLFFBQUUsRUFBRSxDQUROO0FBRUVNLFVBQUksRUFBRSxxREFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRlI7QUFHRUMsVUFBSSxFQUFFLHNCQUhSO0FBSUVDLGlCQUFXLEVBQUU7QUFKZixLQWJNLEVBbUJOO0FBQ0VSLFFBQUUsRUFBRSxDQUROO0FBRUVNLFVBQUksRUFBRSxxREFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRlI7QUFHRUMsVUFBSSxFQUFFLHNCQUhSO0FBSUVDLGlCQUFXLEVBQUU7QUFKZixLQW5CTTtBQVRWLEdBcEVNO0FBMUdPLENBQWpCO0FBcU5BLElBQU1LLFVBQVUsR0FBRztBQUNqQkMsU0FBTyxFQUFFO0FBQ1BDLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FETDtBQUVQQyxTQUFLLEVBQUUsQ0FGQTtBQUdQQyxhQUFTLEVBQUU7QUFISixHQURRO0FBTWpCQyxRQUFNLEVBQUU7QUFDTkwsY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQUROO0FBRU5DLFNBQUssRUFBRSxDQUZEO0FBR05DLGFBQVMsRUFBRTtBQUhMLEdBTlM7QUFXakJFLFFBQU0sRUFBRTtBQUNOTixjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLEdBQVA7QUFBWUMsU0FBRyxFQUFFO0FBQWpCLEtBRE47QUFFTkMsU0FBSyxFQUFFLENBRkQ7QUFHTkMsYUFBUyxFQUFFO0FBSEw7QUFYUyxDQUFuQjtBQWtCZSxTQUFTRyxPQUFULEdBQW1CO0FBQUEsTUFDeEJ2QixPQUR3QixHQUNKRCxRQURJLENBQ3hCQyxPQUR3QjtBQUFBLE1BQ2ZhLE1BRGUsR0FDSmQsUUFESSxDQUNmYyxNQURlO0FBR2hDLE1BQU1XLFlBQVksR0FBRztBQUNuQkMsdUJBQW1CLEVBQUUsQ0FERjtBQUVuQkMsVUFBTSxFQUFFLEtBRlc7QUFHbkJDLGlCQUFhLEVBQUUsSUFISTtBQUluQkMsY0FBVSxFQUFFLEtBSk87QUFLbkJDLGFBQVMsRUFBRSxFQUxRO0FBTW5CQyxpQkFBYSxFQUFFLENBTkk7QUFPbkJYLFNBQUssRUFBRSxDQVBZO0FBUW5CWSxrQkFBYyxFQUFFLG9CQVJHO0FBU25CQyxxQkFBaUIsRUFBRSxxREFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVEE7QUFVbkJDLGdCQUFZLEVBQUUsRUFWSztBQVduQkMsaUJBQWEsRUFBRSxLQVhJO0FBWW5CQyxZQUFRLEVBQUUsS0FaUztBQWFuQkMsbUJBQWUsRUFBRSxLQWJFO0FBY25CQyxhQUFTLEVBQUUsRUFkUTtBQWVuQkMsb0JBQWdCLEVBQUUsRUFmQztBQWdCbkJDLDRCQUF3QixFQUFFLElBaEJQO0FBaUJuQkMscUJBQWlCLEVBQUUsS0FqQkE7QUFrQm5CMUIsY0FBVSxFQUFFQSxVQWxCTztBQW1CbkIyQixZQUFRLEVBQUUsS0FuQlM7QUFvQm5CQyxlQUFXLEVBQUU7QUFwQk0sR0FBckI7QUF1QkEsU0FDRTtBQUFTLE1BQUUsRUFBQyxTQUFaO0FBQXNCLE1BQUUsRUFBRTtBQUFDQyxhQUFPLEVBQUU7QUFBVixLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGlFQUFEO0FBQ0UsVUFBTSxFQUFDLGNBRFQ7QUFFRSxTQUFLLEVBQUMscUJBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUUscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFRCxNQUFNLENBQUNFLGdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FORixDQURGLENBREY7QUFpQkQ7S0EzQ3VCdkIsTztBQTZDeEIsSUFBTXdCLE1BQU0sR0FBR0MsK0RBQUgsK01BQVo7QUFRQSxJQUFNQyxPQUFPLEdBQUdELCtEQUFILGlSQUFiO0FBVUEsSUFBTUosTUFBTSxHQUFHO0FBQ2JNLGdCQUFjLEVBQUU7QUFDZEMsTUFBRSxFQUFFLE9BRFU7QUFFZEMsTUFBRSxFQUFFLE9BRlU7QUFHZEMsTUFBRSxFQUFFLENBQUMsQ0FIUztBQUlkQyxXQUFPLEVBQUUsTUFKSztBQUtkQyxpQkFBYSxFQUFFLFFBTEQ7QUFNZEMsWUFBUSxFQUFFLE1BTkk7QUFPZCx5Q0FBcUM7QUFDbkMsMEJBQW9CO0FBQ2xCQyxpQkFBUyxZQUFLVixNQUFMO0FBRFMsT0FEZTtBQUluQyxpQkFBVztBQUNUVSxpQkFBUyxZQUFLUixPQUFMO0FBREEsT0FKd0I7QUFPbkMseUJBQW1CO0FBQ2pCUSxpQkFBUyxZQUFLUixPQUFMO0FBRFEsT0FQZ0I7QUFVbkNTLFlBQU0sRUFBRTtBQUNORCxpQkFBUyxZQUFLUixPQUFMO0FBREg7QUFWMkIsS0FQdkI7QUFxQmQsMkJBQXVCO0FBQ3JCVSxXQUFLLEVBQUUsTUFEYztBQUVyQixvQkFBYztBQUNaTCxlQUFPLEVBQUU7QUFERztBQUZPLEtBckJUO0FBMkJkLHNCQUFrQjtBQUNoQkEsYUFBTyxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLE1BQTNCLENBRE87QUFFaEJILFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixDQUF0QjtBQUZZO0FBM0JKLEdBREg7QUFpQ2JTLGFBQVcsRUFBRTtBQUNYUCxNQUFFLEVBQUUsQ0FETztBQUVYQyxXQUFPLEVBQUUsTUFGRTtBQUdYTyxjQUFVLEVBQUUsQ0FIRDtBQUlYQyxRQUFJLEVBQUU7QUFKSyxHQWpDQTtBQXVDYmpCLGFBQVcsRUFBRTtBQUNYa0Isa0JBQWMsRUFBRSxRQURMO0FBRVhaLE1BQUUsRUFBRSxHQUZPO0FBR1hDLE1BQUUsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLENBSE87QUFJWFksWUFBUSxFQUFFLFVBSkM7QUFLWEMsVUFBTSxFQUFFO0FBTEcsR0F2Q0E7QUE4Q2JDLGtCQUFnQixFQUFFO0FBQ2hCWixXQUFPLEVBQUUsTUFETztBQUVoQmEsV0FBTyxFQUFFLEtBRk87QUFHaEJDLFVBQU0sRUFBRSxRQUhRO0FBSWhCQyxnQkFBWSxFQUFFLEtBSkU7QUFLaEJDLG1CQUFlLEVBQUUsU0FMRDtBQU1oQlosVUFBTSxFQUFFO0FBQ05hLFlBQU0sRUFBRSxDQURGO0FBRU5KLGFBQU8sRUFBRSxDQUFDLFdBQUQsRUFBYyxXQUFkLENBRkg7QUFHTkUsa0JBQVksRUFBRSxLQUhSO0FBSU5HLFdBQUssRUFBRSxNQUpEO0FBS05DLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBTEo7QUFNTkMsZ0JBQVUsRUFBRSxHQU5OO0FBT05DLGdCQUFVLEVBQUUsR0FQTjtBQVFOTCxxQkFBZSxFQUFFLGFBUlg7QUFTTk0sWUFBTSxFQUFFLFNBVEY7QUFVTkMsZ0JBQVUsRUFBRSxNQVZOO0FBV05DLG1CQUFhLEVBQUUsU0FYVDtBQVlOQyxnQkFBVSxFQUFFLFVBWk47QUFhTixrQkFBWTtBQUNWUCxhQUFLLEVBQUUsU0FERztBQUVWRix1QkFBZSxFQUFFLFNBRlA7QUFHVlUsaUJBQVMsRUFBRTtBQUhELE9BYk47QUFrQk4saUJBQVc7QUFDVEMsZUFBTyxFQUFFO0FBREE7QUFsQkw7QUFOUTtBQTlDTCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjljMTQzZDY0MWFkNTBkMjkyMzcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgRmxleCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcclxuaW1wb3J0IFByaWNlQ2FyZCBmcm9tICdjb21wb25lbnRzL3ByaWNlLWNhcmQnO1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnY29tcG9uZW50cy9idXR0b24tZ3JvdXAnO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IHsgSW9Jb3NDaGVja21hcmtDaXJjbGUsIElvSW9zQ2xvc2VDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcblxyXG5jb25zdCBwYWNrYWdlcyA9IHtcclxuICBtb250aGx5OiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBuYW1lOiAnRnJlZSBQbGFuJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdGb3IgU21hbGwgdGVhbXMgb3Igb2ZmaWNlJyxcclxuICAgICAgYnV0dG9uVGV4dDogJ1N0YXJ0IGZyZWUgdHJhaWwnLFxyXG4gICAgICBwcmljZVdpdGhVbml0OiAnJDAnLFxyXG4gICAgICBwb2ludHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICdEcmFnICYgRHJvcCBCdWlsZGVyJyxcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiBcIjEsMDAwJ3Mgb2YgVGVtcGxhdGVzXCIsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJ0Jsb2cgU3VwcG9ydCBUb29scycsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2xvc2VDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnZUNvbW1lcmNlIFN0b3JlICcsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6ICdCdXNpbmVzcyBraW5nJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdGb3IgRW50ZXJwcmlzZSBidXNpbmVzcycsXHJcbiAgICAgIHByaWNlV2l0aFVuaXQ6ICckMTUnLFxyXG4gICAgICBidXR0b25UZXh0OiAnQ3JlYXRlIGFjY291bnQnLFxyXG4gICAgICBhbm90aGVyT3B0aW9uOiAnT3IgU3RhcnQgMTQgRGF5cyB0cmFpbCcsXHJcbiAgICAgIHBvaW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJ0RyYWcgJiBEcm9wIEJ1aWxkZXInLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMixcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiMSwwMDAncyBvZiBUZW1wbGF0ZXNcIixcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnQmxvZyBTdXBwb3J0IFRvb2xzJyxcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnZUNvbW1lcmNlIFN0b3JlICcsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIGhlYWRlcjogJ1N1Z2dlc3RlZCcsXHJcbiAgICAgIGhlYWRlckljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgbmFtZTogJ1BybyBNYXN0ZXInLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvciBwcm8gbGV2ZWwgZGV2ZWxvcGVycycsXHJcbiAgICAgIHByaWNlV2l0aFVuaXQ6ICckMjQnLFxyXG4gICAgICBidXR0b25UZXh0OiAnQ3JlYXRlIGFjY291bnQnLFxyXG4gICAgICBhbm90aGVyT3B0aW9uOiAnT3IgU3RhcnQgMTQgRGF5cyB0cmFpbCcsXHJcbiAgICAgIHBvaW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJ0RyYWcgJiBEcm9wIEJ1aWxkZXInLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMixcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiMSwwMDAncyBvZiBUZW1wbGF0ZXNcIixcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnQmxvZyBTdXBwb3J0IFRvb2xzJyxcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnZUNvbW1lcmNlIFN0b3JlICcsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGFubnVhbDogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmFtZTogJ0ZyZWUgUGxhbicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnRm9yIFNtYWxsIHRlYW1zIG9yIG9mZmljZScsXHJcbiAgICAgIGJ1dHRvblRleHQ6ICdTdGFydCBmcmVlIHRyYWlsJyxcclxuICAgICAgcHJpY2VXaXRoVW5pdDogJyQwJyxcclxuICAgICAgcG9pbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiBcIjEsMDAwJ3Mgb2YgVGVtcGxhdGVzXCIsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJ0RyYWcgJiBEcm9wIEJ1aWxkZXInLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICdCbG9nIFN1cHBvcnQgVG9vbHMnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgIGljb246IDxJb0lvc0Nsb3NlQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogJ2VDb21tZXJjZSBTdG9yZSAnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiAnQnVzaW5lc3Mga2luZycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnRm9yIEVudGVycHJpc2UgYnVzaW5lc3MnLFxyXG4gICAgICBwcmljZVdpdGhVbml0OiAnJDI1JyxcclxuICAgICAgYnV0dG9uVGV4dDogJ0NyZWF0ZSBhY2NvdW50JyxcclxuICAgICAgYW5vdGhlck9wdGlvbjogJ09yIFN0YXJ0IDEwIERheXMgdHJhaWwnLFxyXG4gICAgICBwb2ludHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICdlQ29tbWVyY2UgU3RvcmUnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMixcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICdCbG9nIFN1cHBvcnQgVG9vbHMnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiMSwwMDAncyBvZiBUZW1wbGF0ZXNcIixcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnRHJhZyAmIERyb3AgQnVpbGRlciAnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICBoZWFkZXI6ICdTdWdnZXN0ZWQnLFxyXG4gICAgICBoZWFkZXJJY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgIG5hbWU6ICdQcm8gTWFzdGVyJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdGb3IgcHJvIGxldmVsIGRldmVsb3BlcnMnLFxyXG4gICAgICBwcmljZVdpdGhVbml0OiAnJDM5JyxcclxuICAgICAgYnV0dG9uVGV4dDogJ0NyZWF0ZSBhY2NvdW50JyxcclxuICAgICAgYW5vdGhlck9wdGlvbjogJ09yIFN0YXJ0IDEwIERheXMgdHJhaWwnLFxyXG4gICAgICBwb2ludHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICdlQ29tbWVyY2UgU3RvcmUnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMixcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6ICdCbG9nIFN1cHBvcnQgVG9vbHMnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiMSwwMDAncyBvZiBUZW1wbGF0ZXNcIixcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiAnRHJhZyAmIERyb3AgQnVpbGRlciAnLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgZGVza3RvcDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxyXG4gICAgaXRlbXM6IDMsXHJcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAgdGFibGV0OiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMTAyMywgbWluOiA2NDAgfSxcclxuICAgIGl0ZW1zOiAyLFxyXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAgbW9iaWxlOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogNjM5LCBtaW46IDAgfSxcclxuICAgIGl0ZW1zOiAxLFxyXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWNrYWdlKCkge1xyXG4gIGNvbnN0IHsgbW9udGhseSwgYW5udWFsIH0gPSBwYWNrYWdlcztcclxuXHJcbiAgY29uc3Qgc2xpZGVyUGFyYW1zID0ge1xyXG4gICAgYWRkaXRpb25hbFRyYW5zZnJvbTogMCxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBhdXRvUGxheVNwZWVkOiAzMDAwLFxyXG4gICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICBjbGFzc05hbWU6ICcnLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMSxcclxuICAgIGl0ZW1zOiAzLFxyXG4gICAgY29udGFpbmVyQ2xhc3M6ICdjYXJvdXNlbC1jb250YWluZXInLFxyXG4gICAgY3VzdG9tQnV0dG9uR3JvdXA6IDxCdXR0b25Hcm91cCAvPixcclxuICAgIGRvdExpc3RDbGFzczogJycsXHJcbiAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIGtleUJvYXJkQ29udHJvbDogZmFsc2UsXHJcbiAgICBpdGVtQ2xhc3M6ICcnLFxyXG4gICAgbWluaW11bVRvdWNoRHJhZzogODAsXHJcbiAgICByZW5kZXJCdXR0b25Hcm91cE91dHNpZGU6IHRydWUsXHJcbiAgICByZW5kZXJEb3RzT3V0c2lkZTogZmFsc2UsXHJcbiAgICByZXNwb25zaXZlOiByZXNwb25zaXZlLFxyXG4gICAgc2hvd0RvdHM6IGZhbHNlLFxyXG4gICAgc2xpZGVyQ2xhc3M6ICcnLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cInByaWNpbmdcIiBzeD17e3ZhcmlhbnQ6ICdzZWN0aW9uLnByaWNpbmcnfX0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXIgXHJcbiAgICAgICAgICBzbG9nYW49XCJQYXltZW50IFBsYW5cIlxyXG4gICAgICAgICAgdGl0bGU9XCJDaG9vc2UgeW91ciBwYWNrYWdlXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8RmxleCBzeD17c3R5bGVzLmJ1dHRvbkdyb3VwfT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5idXR0b25Hcm91cEluZWVyfT5cclxuXHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBmYWRlSW4gPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuY29uc3QgZmFkZUluMiA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBwcmljaW5nV3JhcHBlcjoge1xyXG4gICAgbWI6ICctNDBweCcsXHJcbiAgICBtdDogJy00MHB4JyxcclxuICAgIG14OiAtMyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICcmLnByaWNpbmdfX3dyYXBwZXIgLnBhY2thZ2VfX2NhcmQnOiB7XHJcbiAgICAgICcucGFja2FnZV9faGVhZGVyJzoge1xyXG4gICAgICAgIGFuaW1hdGlvbjogYCR7ZmFkZUlufSAwLjhzIGVhc2UtaW5gLFxyXG4gICAgICB9LFxyXG4gICAgICAndWwgPiBsaSc6IHtcclxuICAgICAgICBhbmltYXRpb246IGAke2ZhZGVJbjJ9IDAuN3MgZWFzZS1pbmAsXHJcbiAgICAgIH0sXHJcbiAgICAgICcucGFja2FnZV9fcHJpY2UnOiB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBgJHtmYWRlSW4yfSAwLjlzIGVhc2UtaW5gLFxyXG4gICAgICB9LFxyXG4gICAgICBidXR0b246IHtcclxuICAgICAgICBhbmltYXRpb246IGAke2ZhZGVJbjJ9IDFzIGVhc2UtaW5gLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcuY2Fyb3VzZWwtY29udGFpbmVyJzoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAnPiB1bCA+IGxpICc6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJy5idXR0b25fX2dyb3VwJzoge1xyXG4gICAgICBkaXNwbGF5OiBbJ2ZsZXgnLCBudWxsLCBudWxsLCBudWxsLCAnbm9uZSddLFxyXG4gICAgICBtYjogWzQsIG51bGwsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByaWNpbmdJdGVtOiB7XHJcbiAgICBteDogMyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBmbGV4OiAnMSAxIGF1dG8nLFxyXG4gIH0sXHJcbiAgYnV0dG9uR3JvdXA6IHtcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIG1iOiAnNycsXHJcbiAgICBtdDogWyctMTVweCcsICctMzVweCddLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB6SW5kZXg6IDIsXHJcbiAgfSxcclxuICBidXR0b25Hcm91cElubmVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBwYWRkaW5nOiAnN3B4JyxcclxuICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3RjhGQicsXHJcbiAgICBidXR0b246IHtcclxuICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICBwYWRkaW5nOiBbJzE1cHggMjBweCcsICcxNXB4IDI3cHgnXSxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgZm9udFNpemU6IFsxLCAyXSxcclxuICAgICAgbGluZUhlaWdodDogMS4yLFxyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjI0cHgnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxyXG4gICAgICAnJi5hY3RpdmUnOiB7XHJcbiAgICAgICAgY29sb3I6ICcjMGYyMTM3JyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICBib3hTaGFkb3c6ICcwIDNweCA0cHggcmdiYSgzOCwgNzgsIDExOCwgMC4xKScsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmOmZvY3VzJzoge1xyXG4gICAgICAgIG91dGxpbmU6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=