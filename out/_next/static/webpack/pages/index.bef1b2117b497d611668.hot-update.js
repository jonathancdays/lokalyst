webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/rating.js":
/*!**********************************!*\
  !*** ./src/components/rating.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _this = undefined,
    _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\rating.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Rating = function Rating(_ref) {
  var rating = _ref.rating;
  var totalRating = [];

  for (var i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(__jsx("li", {
        className: "star",
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaStar"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }
      })));
    } else {
      totalRating.push(__jsx("li", {
        className: "star-o",
        key: i,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaStar"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }
      })));
    }
  }

  return __jsx("div", {
    className: "rating",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, totalRating));
};

_c = Rating;
/* harmony default export */ __webpack_exports__["default"] = (Rating);

var _c;

$RefreshReg$(_c, "Rating");

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

/***/ }),

/***/ "./src/sections/testimonial.js":
/*!*************************************!*\
  !*** ./src/sections/testimonial.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestimonialCard; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/rating */ "./src/components/rating.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/testimonial/avatar1.png */ "./src/assets/testimonial/avatar1.png");
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/testimonial/avatar2.png */ "./src/assets/testimonial/avatar2.png");
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/testimonial/avatar3.png */ "./src/assets/testimonial/avatar3.png");
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/testimonial/avatar4.png */ "./src/assets/testimonial/avatar4.png");
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\sections\\testimonial.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */









var data = [{
  id: 1,
  title: 'Modern look & trending design',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 4
}, {
  id: 2,
  title: 'Design Quality & performance',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 5
}, {
  id: 3,
  title: 'Layout and organized layers',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 5
}, {
  id: 4,
  title: 'Modern look & trending design',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 4
}];
var responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1619
    },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.

  },
  laptop: {
    breakpoint: {
      max: 1619,
      min: 1024
    },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.

  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 640
    },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.

  },
  mobile: {
    breakpoint: {
      max: 639,
      min: 0
    },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.

  }
};
var carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }),
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1
};
function TestimonialCard() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("section", {
    id: "testimonial",
    sx: {
      variant: 'section.testimonial'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    css: {
      textAlign: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slogan: "Testimonial",
    title: "Meet Client Satisfaction",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.carouselWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, carouselParams, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }), data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.reviewCard,
      key: item.sliderClass,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_rating__WEBPACK_IMPORTED_MODULE_4__["default"], {
      rating: item.review,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 15
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      as: "h3",
      sx: styles.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 15
      }
    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      sx: styles.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 15
      }
    }, item.description), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "card-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: item.avatar,
      alt: "Client Image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }
    })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "reviewer-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      as: "h4",
      sx: styles.heading,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }
    }, item.name), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      sx: styles.designation,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }
    }, item.designation))));
  }))));
}
_c = TestimonialCard;
var styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: ['100%', null, null, '750px', '1000px', '1180px', null, 'calc(50% + 865px)'],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s'
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1
        }
      }
    }
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: ['30px 20px 35px', '30px 25px 35px', '30px 20px 35px', '35px 30px 40px 40px', '30px 30px 35px', '35px 30px 40px 40px'],
    bg: 'white',
    textAlign: 'left',
    m: ['28px 5px 30px 5px', '28px 20px 30px 20px', '28px 15px 30px 15px', '28px 15px 30px 15px', '30px 20px 40px'],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)'
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex'
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0
        }
      },
      '.star': {
        color: 'primary',
        mr: '1px'
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px'
      }
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover'
        }
      }
    }
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2]
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4
  }
};

var _c;

$RefreshReg$(_c, "TestimonialCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcmF0aW5nLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvc2VjdGlvbnMvdGVzdGltb25pYWwuanMiXSwibmFtZXMiOlsiUmF0aW5nIiwicmF0aW5nIiwidG90YWxSYXRpbmciLCJpIiwicHVzaCIsImRhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhdmF0YXIiLCJBdmF0YXIxIiwibmFtZSIsImRlc2lnbmF0aW9uIiwicmV2aWV3IiwiQXZhdGFyMiIsIkF2YXRhcjMiLCJBdmF0YXI0IiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJzbGlkZXNUb1NsaWRlIiwibGFwdG9wIiwidGFibGV0IiwibW9iaWxlIiwiY2Fyb3VzZWxQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJjb250YWluZXJDbGFzcyIsImN1c3RvbUJ1dHRvbkdyb3VwIiwiZG90TGlzdENsYXNzIiwiZHJhZ2dhYmxlIiwiZm9jdXNPblNlbGVjdCIsImluZmluaXRlIiwiaXRlbUNsYXNzIiwia2V5Qm9hcmRDb250cm9sIiwibWluaW11bVRvdWNoRHJhZyIsInJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZSIsInJlbmRlckRvdHNPdXRzaWRlIiwic2hvd0RvdHMiLCJzbGlkZXJDbGFzcyIsIlRlc3RpbW9uaWFsQ2FyZCIsInZhcmlhbnQiLCJ0ZXh0QWxpZ24iLCJzdHlsZXMiLCJjYXJvdXNlbFdyYXBwZXIiLCJtYXAiLCJpdGVtIiwicmV2aWV3Q2FyZCIsImhlYWRpbmciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm10IiwicHgiLCJ3aWR0aCIsIm1heFdpZHRoIiwibXIiLCJtbCIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwicCIsImJnIiwibSIsIm1iIiwidWwiLCJwbCIsImxpc3RTdHlsZSIsInN2ZyIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJmbGV4U2hyaW5rIiwiaW1nIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFnQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUM3QixNQUFNQyxXQUFXLEdBQUUsRUFBbkI7O0FBRUEsT0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsQ0FBbkIsRUFBc0JBLENBQUMsRUFBdkIsRUFBMkI7QUFDekIsUUFBSUEsQ0FBQyxHQUFHRixNQUFSLEVBQWdCO0FBQ2RDLGlCQUFXLENBQUNFLElBQVosQ0FDRTtBQUFJLGlCQUFTLEVBQUMsTUFBZDtBQUFxQixXQUFHLEVBQUVELENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURGO0FBS0QsS0FORCxNQU1PO0FBQ0xELGlCQUFXLENBQUNFLElBQVosQ0FDRTtBQUFJLGlCQUFTLEVBQUMsUUFBZDtBQUF1QixXQUFHLEVBQUVELENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURGO0FBS0Q7QUFDRjs7QUFDRCxTQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEs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QVUsSUFBVixFQUFnQixNQUFoQixDQUhDO0FBSUxNLFNBQUssRUFBRSxNQUpGO0FBS0xRLGNBQVUsRUFBRTtBQUxQLEdBakdNO0FBd0diOUUsYUFBVyxFQUFFO0FBQ1g0RSxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsQ0FEQztBQUVYQyxjQUFVLEVBQUUsUUFGRDtBQUdYUCxTQUFLLEVBQUUsTUFISTtBQUlYUSxjQUFVLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLENBQWI7QUFKRCxHQXhHQTtBQThHYmhDLFNBQU8sRUFBRTtBQUNQOEIsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLENBQWhCLENBREg7QUFFUEMsY0FBVSxFQUFFLEdBRkw7QUFHUGIsTUFBRSxFQUFFLEtBSEc7QUFJUE0sU0FBSyxFQUFFLE1BSkE7QUFLUFEsY0FBVSxFQUFFO0FBTEwsR0E5R0k7QUFxSGIxRSxhQUFXLEVBQUU7QUFDWGtFLFNBQUssRUFBRSxTQURJO0FBRVhPLGNBQVUsRUFBRSxLQUZEO0FBR1hELFlBQVEsRUFBRSxDQUhDO0FBSVhFLGNBQVUsRUFBRTtBQUpEO0FBckhBLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmVmMWIyMTE3YjQ5N2Q2MTE2NjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmFTdGFyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcblxyXG5jb25zdCBSYXRpbmcgPSAoeyByYXRpbmcgfSkgPT4ge1xyXG4gIGNvbnN0IHRvdGFsUmF0aW5nPSBbXTtcclxuXHJcbiAgZm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgaWYgKGkgPCByYXRpbmcpIHtcclxuICAgICAgdG90YWxSYXRpbmcucHVzaChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwic3RhclwiIGtleT17aX0+XHJcbiAgICAgICAgICA8RmFTdGFyIC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvdGFsUmF0aW5nLnB1c2goXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInN0YXItb1wiIGtleT17aX0+XHJcbiAgICAgICAgICA8RmFTdGFyIC8+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdcIj5cclxuICAgICAgPHVsPnt0b3RhbFJhdGluZ308L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKSBcclxuICBcclxuICA7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYXRpbmc7XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgSGVhZGluZywgVGV4dCwgQm94LCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcbmltcG9ydCBSYXRpbmcgZnJvbSAnY29tcG9uZW50cy9yYXRpbmcnO1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnY29tcG9uZW50cy9idXR0b24tZ3JvdXAnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xyXG5cclxuaW1wb3J0IEF2YXRhcjEgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjEucG5nJztcclxuaW1wb3J0IEF2YXRhcjIgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjIucG5nJztcclxuaW1wb3J0IEF2YXRhcjMgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjMucG5nJztcclxuaW1wb3J0IEF2YXRhcjQgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjQucG5nJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogJ01vZGVybiBsb29rICYgdHJlbmRpbmcgZGVzaWduJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnR2V0IHdvcmtpbmcgZXhwZXJpZW5jZSB0byB3b3JrIHdpdGggdGhpcyBhbWF6aW5nIHRlYW0gJiBpbiBmdXR1cmUgd2FudCB0byB3b3JrIHRvZ2V0aGVyIGZvciBicmlnaHQgZnV0dXJlIHByb2plY3RzIGFuZCBhbHNvIG1ha2UgZGVwb3NpdCB0byBmcmVlbGFuY2VyLicsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjEsXHJcbiAgICBuYW1lOiAnRGVubnkgSGlsZ3VzdG9uJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQGRlbm55LmhpbCcsXHJcbiAgICByZXZpZXc6IDQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiAnRGVzaWduIFF1YWxpdHkgJiBwZXJmb3JtYW5jZScsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0dldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci4nLFxyXG4gICAgYXZhdGFyOiBBdmF0YXIyLFxyXG4gICAgbmFtZTogJ0Rlbm55IEhpbGd1c3RvbicsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BkZW5ueS5oaWwnLFxyXG4gICAgcmV2aWV3OiA1LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aXRsZTogJ0xheW91dCBhbmQgb3JnYW5pemVkIGxheWVycycsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0dldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci4nLFxyXG4gICAgYXZhdGFyOiBBdmF0YXIzLFxyXG4gICAgbmFtZTogJ0Rlbm55IEhpbGd1c3RvbicsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BkZW5ueS5oaWwnLFxyXG4gICAgcmV2aWV3OiA1LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0aXRsZTogJ01vZGVybiBsb29rICYgdHJlbmRpbmcgZGVzaWduJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnR2V0IHdvcmtpbmcgZXhwZXJpZW5jZSB0byB3b3JrIHdpdGggdGhpcyBhbWF6aW5nIHRlYW0gJiBpbiBmdXR1cmUgd2FudCB0byB3b3JrIHRvZ2V0aGVyIGZvciBicmlnaHQgZnV0dXJlIHByb2plY3RzIGFuZCBhbHNvIG1ha2UgZGVwb3NpdCB0byBmcmVlbGFuY2VyLicsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjQsXHJcbiAgICBuYW1lOiAnRGVubnkgSGlsZ3VzdG9uJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQGRlbm55LmhpbCcsXHJcbiAgICByZXZpZXc6IDQsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgZGVza3RvcDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTYxOSB9LFxyXG4gICAgaXRlbXM6IDQsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiA0LCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgbGFwdG9wOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMTYxOSwgbWluOiAxMDI0IH0sXHJcbiAgICBpdGVtczogMyxcclxuICAgIHNsaWRlc1RvU2xpZGU6IDMsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxuICB0YWJsZXQ6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDY0MCB9LFxyXG4gICAgaXRlbXM6IDIsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAyLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgbW9iaWxlOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogNjM5LCBtaW46IDAgfSxcclxuICAgIGl0ZW1zOiAxLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgY2Fyb3VzZWxQYXJhbXMgPSB7XHJcbiAgYWRkaXRpb25hbFRyYW5zZnJvbTowLFxyXG4gIGFycm93czpmYWxzZSxcclxuICBhdXRvUGxheVNwZWVkOjMwMDAsXHJcbiAgY2VudGVyTW9kZTpmYWxzZSxcclxuICBjbGFzc05hbWU6XCJcIixcclxuICBjb250YWluZXJDbGFzczpcImNhcm91c2VsLWNvbnRhaW5lclwiLFxyXG4gIGN1c3RvbUJ1dHRvbkdyb3VwOjxCdXR0b25Hcm91cCAvPixcclxuICBkb3RMaXN0Q2xhc3M6XCJcIixcclxuICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgZm9jdXNPblNlbGVjdDpmYWxzZSxcclxuICBpbmZpbml0ZTp0cnVlLFxyXG4gIGl0ZW1DbGFzczpcIlwiLFxyXG4gIGtleUJvYXJkQ29udHJvbDogdHJ1ZSxcclxuICBtaW5pbXVtVG91Y2hEcmFnOjgwLFxyXG4gIHJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZTogdHJ1ZSxcclxuICByZW5kZXJEb3RzT3V0c2lkZTpmYWxzZSxcclxuICByZXNwb25zaXZlOnJlc3BvbnNpdmUsXHJcbiAgc2hvd0RvdHM6ZmFsc2UsXHJcbiAgc2xpZGVyQ2xhc3M6XCJcIixcclxuICBzbGlkZXNUb1NsaWRlOjEsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RpbW9uaWFsQ2FyZCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJ0ZXN0aW1vbmlhbFwiIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLnRlc3RpbW9uaWFsJ319PlxyXG4gICAgICA8Q29udGFpbmVyIGNzcz17eyB0ZXh0QWxpZ246ICdjZW50ZXInfX0+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHNsb2dhbj1cIlRlc3RpbW9uaWFsXCJcclxuICAgICAgICAgIHRpdGxlPVwiTWVldCBDbGllbnQgU2F0aXNmYWN0aW9uXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLmNhcm91c2VsV3JhcHBlcn0+XHJcbiAgICAgICAgPENhcm91c2VsIHsuLi5jYXJvdXNlbFBhcmFtc30+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnJldmlld0NhcmR9IGtleT17aXRlbS5zbGlkZXJDbGFzc30+XHJcbiAgICAgICAgICAgICAgPFJhdGluZyByYXRpbmc9IHtpdGVtLnJldmlld30vPlxyXG4gICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBzeD17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmRlc2NyaXB0aW9ufT57aXRlbS5kZXNjcmlwdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uYXZhdGFyfSBhbHQ9XCJDbGllbnQgSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3ZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiIHN4PXtzdHlsZXMuaGVhZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmRlc2lnbmF0aW9ufT57aXRlbS5kZXNpZ25hdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9DYXJvdXNlbD5cclxuXHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcm91c2VsV3JhcHBlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsXHJcbiAgICBtdDogJy0zMHB4JyxcclxuICAgIHB4OiAnMTVweCcsXHJcbiAgICAnLmNhcm91c2VsLWNvbnRhaW5lcic6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgbWF4V2lkdGg6IFtcclxuICAgICAgICAnMTAwJScsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICc3NTBweCcsXHJcbiAgICAgICAgJzEwMDBweCcsXHJcbiAgICAgICAgJzExODBweCcsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnY2FsYyg1MCUgKyA4NjVweCknLFxyXG4gICAgICBdLFxyXG4gICAgICBtcjogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJy0yMjBweCddLFxyXG4gICAgICBtbDogJ2F1dG8nLFxyXG4gICAgICAnLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0nOiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgIH0sXHJcbiAgICAgICcucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDRuKSc6IHtcclxuICAgICAgICBvcGFjaXR5OiAnMC41JyxcclxuICAgICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYyMHB4KSc6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICByZXZpZXdDYXJkOiB7XHJcbiAgICBib3hTaGFkb3c6ICcwcHggMHB4IDFweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjM1KScsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNnB4JyxcclxuICAgIHA6IFtcclxuICAgICAgJzMwcHggMjBweCAzNXB4JyxcclxuICAgICAgJzMwcHggMjVweCAzNXB4JyxcclxuICAgICAgJzMwcHggMjBweCAzNXB4JyxcclxuICAgICAgJzM1cHggMzBweCA0MHB4IDQwcHgnLFxyXG4gICAgICAnMzBweCAzMHB4IDM1cHgnLFxyXG4gICAgICAnMzVweCAzMHB4IDQwcHggNDBweCcsXHJcbiAgICBdLFxyXG4gICAgYmc6ICd3aGl0ZScsXHJcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgIG06IFtcclxuICAgICAgJzI4cHggNXB4IDMwcHggNXB4JyxcclxuICAgICAgJzI4cHggMjBweCAzMHB4IDIwcHgnLFxyXG4gICAgICAnMjhweCAxNXB4IDMwcHggMTVweCcsXHJcbiAgICAgICcyOHB4IDE1cHggMzBweCAxNXB4JyxcclxuICAgICAgJzMwcHggMjBweCA0MHB4JyxcclxuICAgIF0sXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm94U2hhZG93OiAnMHB4IDZweCAzMHB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSknLFxyXG4gICAgfSxcclxuICAgICcucmF0aW5nJzoge1xyXG4gICAgICBtYjogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICB1bDoge1xyXG4gICAgICAgIHBsOiAwLFxyXG4gICAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgICAgIG1iOiAwLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgfSxcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcycHgnLFxyXG4gICAgICAgICcmOmxhc3Qtb2YtdHlwZSc6IHtcclxuICAgICAgICAgIG1hcmdpblJpZ2h0OiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgICcuc3Rhcic6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgIG1yOiAnMXB4JyxcclxuICAgICAgfSxcclxuICAgICAgJy5zdGFyLW8nOiB7XHJcbiAgICAgICAgY29sb3I6ICcjZGRkJyxcclxuICAgICAgICBtcjogJzFweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJy5jYXJkLWZvb3Rlcic6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgbWFyZ2luVG9wOiBbNSwgbnVsbCwgbnVsbCwgJzMzcHgnXSxcclxuICAgICAgJy5pbWFnZSc6IHtcclxuICAgICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICAgIG1yOiBbMywgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGltZzoge1xyXG4gICAgICAgICAgd2lkdGg6ICc1NXB4JyxcclxuICAgICAgICAgIGhlaWdodDogJzU1cHgnLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogWzEsIDJdLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgbWI6IFszLCBudWxsLCBudWxsLCAnMjJweCddLFxyXG4gICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIGxpbmVIZWlnaHQ6IDEuNixcclxuICB9LFxyXG4gIGRlc2NyaXB0aW9uOiB7XHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIDJdLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIG1iOiAnM3B4JyxcclxuICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjMsXHJcbiAgfSxcclxuICBkZXNpZ25hdGlvbjoge1xyXG4gICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG4gICAgZm9udFNpemU6IDEsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==