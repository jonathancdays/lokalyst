webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFsLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhdmF0YXIiLCJBdmF0YXIxIiwibmFtZSIsImRlc2lnbmF0aW9uIiwicmV2aWV3IiwiQXZhdGFyMiIsIkF2YXRhcjMiLCJBdmF0YXI0IiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJzbGlkZXNUb1NsaWRlIiwibGFwdG9wIiwidGFibGV0IiwibW9iaWxlIiwiY2Fyb3VzZWxQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJjb250YWluZXJDbGFzcyIsImN1c3RvbUJ1dHRvbkdyb3VwIiwiZG90TGlzdENsYXNzIiwiZHJhZ2dhYmxlIiwiZm9jdXNPblNlbGVjdCIsImluZmluaXRlIiwiaXRlbUNsYXNzIiwia2V5Qm9hcmRDb250cm9sIiwibWluaW11bVRvdWNoRHJhZyIsInJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZSIsInJlbmRlckRvdHNPdXRzaWRlIiwic2hvd0RvdHMiLCJzbGlkZXJDbGFzcyIsIlRlc3RpbW9uaWFsQ2FyZCIsInZhcmlhbnQiLCJ0ZXh0QWxpZ24iLCJzdHlsZXMiLCJjYXJvdXNlbFdyYXBwZXIiLCJtYXAiLCJpdGVtIiwicmV2aWV3Q2FyZCIsImhlYWRpbmciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm10IiwicHgiLCJ3aWR0aCIsIm1heFdpZHRoIiwibXIiLCJtbCIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwicCIsImJnIiwibSIsIm1iIiwidWwiLCJwbCIsImxpc3RTdHlsZSIsInN2ZyIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJmbGV4U2hyaW5rIiwiaW1nIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLCtCQUZUO0FBR0VDLGFBQVcsRUFDVCx5SkFKSjtBQUtFQyxRQUFNLEVBQUVDLHFFQUxWO0FBTUVDLE1BQUksRUFBRSxpQkFOUjtBQU9FQyxhQUFXLEVBQUUsWUFQZjtBQVFFQyxRQUFNLEVBQUU7QUFSVixDQURXLEVBV1g7QUFDRVAsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLDhCQUZUO0FBR0VDLGFBQVcsRUFDVCx5SkFKSjtBQUtFQyxRQUFNLEVBQUVLLHFFQUxWO0FBTUVILE1BQUksRUFBRSxpQkFOUjtBQU9FQyxhQUFXLEVBQUUsWUFQZjtBQVFFQyxRQUFNLEVBQUU7QUFSVixDQVhXLEVBcUJYO0FBQ0VQLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSw2QkFGVDtBQUdFQyxhQUFXLEVBQ1QseUpBSko7QUFLRUMsUUFBTSxFQUFFTSxxRUFMVjtBQU1FSixNQUFJLEVBQUUsaUJBTlI7QUFPRUMsYUFBVyxFQUFFLFlBUGY7QUFRRUMsUUFBTSxFQUFFO0FBUlYsQ0FyQlcsRUErQlg7QUFDRVAsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLCtCQUZUO0FBR0VDLGFBQVcsRUFDVCx5SkFKSjtBQUtFQyxRQUFNLEVBQUVPLHNFQUxWO0FBTUVMLE1BQUksRUFBRSxpQkFOUjtBQU9FQyxhQUFXLEVBQUUsWUFQZjtBQVFFQyxRQUFNLEVBQUU7QUFSVixDQS9CVyxDQUFiO0FBMkNBLElBQU1JLFVBQVUsR0FBRztBQUNq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QVYsRUFBZ0IsTUFBaEIsQ0FIQztBQUlMTSxTQUFLLEVBQUUsTUFKRjtBQUtMUSxjQUFVLEVBQUU7QUFMUCxHQWpHTTtBQXdHYjlFLGFBQVcsRUFBRTtBQUNYNEUsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLENBQWhCLENBREM7QUFFWEMsY0FBVSxFQUFFLFFBRkQ7QUFHWFAsU0FBSyxFQUFFLE1BSEk7QUFJWFEsY0FBVSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxDQUFiO0FBSkQsR0F4R0E7QUE4R2JoQyxTQUFPLEVBQUU7QUFDUDhCLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixDQUFoQixDQURIO0FBRVBDLGNBQVUsRUFBRSxHQUZMO0FBR1BiLE1BQUUsRUFBRSxLQUhHO0FBSVBNLFNBQUssRUFBRSxNQUpBO0FBS1BRLGNBQVUsRUFBRTtBQUxMLEdBOUdJO0FBcUhiMUUsYUFBVyxFQUFFO0FBQ1hrRSxTQUFLLEVBQUUsU0FESTtBQUVYTyxjQUFVLEVBQUUsS0FGRDtBQUdYRCxZQUFRLEVBQUUsQ0FIQztBQUlYRSxjQUFVLEVBQUU7QUFKRDtBQXJIQSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjgzNzEwZGIwZTIwNTU3ZDRiMGM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEhlYWRpbmcsIFRleHQsIEJveCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gJ2NvbXBvbmVudHMvcmF0aW5nJztcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwJztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcclxuXHJcbmltcG9ydCBBdmF0YXIxIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIxLnBuZyc7XHJcbmltcG9ydCBBdmF0YXIyIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIyLnBuZyc7XHJcbmltcG9ydCBBdmF0YXIzIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIzLnBuZyc7XHJcbmltcG9ydCBBdmF0YXI0IGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXI0LnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6ICdNb2Rlcm4gbG9vayAmIHRyZW5kaW5nIGRlc2lnbicsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0dldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci4nLFxyXG4gICAgYXZhdGFyOiBBdmF0YXIxLFxyXG4gICAgbmFtZTogJ0Rlbm55IEhpbGd1c3RvbicsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BkZW5ueS5oaWwnLFxyXG4gICAgcmV2aWV3OiA0LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogJ0Rlc2lnbiBRdWFsaXR5ICYgcGVyZm9ybWFuY2UnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdHZXQgd29ya2luZyBleHBlcmllbmNlIHRvIHdvcmsgd2l0aCB0aGlzIGFtYXppbmcgdGVhbSAmIGluIGZ1dHVyZSB3YW50IHRvIHdvcmsgdG9nZXRoZXIgZm9yIGJyaWdodCBmdXR1cmUgcHJvamVjdHMgYW5kIGFsc28gbWFrZSBkZXBvc2l0IHRvIGZyZWVsYW5jZXIuJyxcclxuICAgIGF2YXRhcjogQXZhdGFyMixcclxuICAgIG5hbWU6ICdEZW5ueSBIaWxndXN0b24nLFxyXG4gICAgZGVzaWduYXRpb246ICdAZGVubnkuaGlsJyxcclxuICAgIHJldmlldzogNSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6ICdMYXlvdXQgYW5kIG9yZ2FuaXplZCBsYXllcnMnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdHZXQgd29ya2luZyBleHBlcmllbmNlIHRvIHdvcmsgd2l0aCB0aGlzIGFtYXppbmcgdGVhbSAmIGluIGZ1dHVyZSB3YW50IHRvIHdvcmsgdG9nZXRoZXIgZm9yIGJyaWdodCBmdXR1cmUgcHJvamVjdHMgYW5kIGFsc28gbWFrZSBkZXBvc2l0IHRvIGZyZWVsYW5jZXIuJyxcclxuICAgIGF2YXRhcjogQXZhdGFyMyxcclxuICAgIG5hbWU6ICdEZW5ueSBIaWxndXN0b24nLFxyXG4gICAgZGVzaWduYXRpb246ICdAZGVubnkuaGlsJyxcclxuICAgIHJldmlldzogNSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgdGl0bGU6ICdNb2Rlcm4gbG9vayAmIHRyZW5kaW5nIGRlc2lnbicsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0dldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci4nLFxyXG4gICAgYXZhdGFyOiBBdmF0YXI0LFxyXG4gICAgbmFtZTogJ0Rlbm55IEhpbGd1c3RvbicsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BkZW5ueS5oaWwnLFxyXG4gICAgcmV2aWV3OiA0LFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCByZXNwb25zaXZlID0ge1xyXG4gIGRlc2t0b3A6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDE2MTkgfSxcclxuICAgIGl0ZW1zOiA0LFxyXG4gICAgc2xpZGVzVG9TbGlkZTogNCwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG4gIGxhcHRvcDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDE2MTksIG1pbjogMTAyNCB9LFxyXG4gICAgaXRlbXM6IDMsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAzLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgdGFibGV0OiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMTAyNCwgbWluOiA2NDAgfSxcclxuICAgIGl0ZW1zOiAyLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMiwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG4gIG1vYmlsZToge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDYzOSwgbWluOiAwIH0sXHJcbiAgICBpdGVtczogMSxcclxuICAgIHNsaWRlc1RvU2xpZGU6IDEsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGNhcm91c2VsUGFyYW1zID0ge1xyXG4gIGFkZGl0aW9uYWxUcmFuc2Zyb206MCxcclxuICBhcnJvd3M6ZmFsc2UsXHJcbiAgYXV0b1BsYXlTcGVlZDozMDAwLFxyXG4gIGNlbnRlck1vZGU6ZmFsc2UsXHJcbiAgY2xhc3NOYW1lOlwiXCIsXHJcbiAgY29udGFpbmVyQ2xhc3M6XCJjYXJvdXNlbC1jb250YWluZXJcIixcclxuICBjdXN0b21CdXR0b25Hcm91cDo8QnV0dG9uR3JvdXAgLz4sXHJcbiAgZG90TGlzdENsYXNzOlwiXCIsXHJcbiAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gIGZvY3VzT25TZWxlY3Q6ZmFsc2UsXHJcbiAgaW5maW5pdGU6dHJ1ZSxcclxuICBpdGVtQ2xhc3M6XCJcIixcclxuICBrZXlCb2FyZENvbnRyb2w6IHRydWUsXHJcbiAgbWluaW11bVRvdWNoRHJhZzo4MCxcclxuICByZW5kZXJCdXR0b25Hcm91cE91dHNpZGU6IHRydWUsXHJcbiAgcmVuZGVyRG90c091dHNpZGU6ZmFsc2UsXHJcbiAgcmVzcG9uc2l2ZTpyZXNwb25zaXZlLFxyXG4gIHNob3dEb3RzOmZhbHNlLFxyXG4gIHNsaWRlckNsYXNzOlwiXCIsXHJcbiAgc2xpZGVzVG9TbGlkZToxLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0aW1vbmlhbENhcmQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwidGVzdGltb25pYWxcIiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi50ZXN0aW1vbmlhbCd9fT5cclxuICAgICAgPENvbnRhaW5lciBjc3M9e3sgdGV4dEFsaWduOiAnY2VudGVyJ319PlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICBzbG9nYW49XCJUZXN0aW1vbmlhbFwiXHJcbiAgICAgICAgICB0aXRsZT1cIk1lZXQgQ2xpZW50IFNhdGlzZmFjdGlvblwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJvdXNlbFdyYXBwZXJ9PlxyXG4gICAgICAgIDxDYXJvdXNlbCB7Li4uY2Fyb3VzZWxQYXJhbXN9PlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5yZXZpZXdDYXJkfSBrZXk9e2l0ZW0uc2xpZGVyQ2xhc3N9PlxyXG4gICAgICAgICAgICAgIDxSYXRpbmcgcmF0aW5nPSB7aXRlbS5yZXZpZXd9Lz5cclxuICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgc3g9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e2l0ZW0uZGVzY3JpcHRpb259PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmF2YXRhcn0gYWx0PVwiQ2xpZW50IEltYWdlXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlld2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIiBzeD17c3R5bGVzLmhlYWRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5kZXNpZ25hdGlvbn0+e2l0ZW0uZGVzaWduYXRpb259PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcblxyXG4gICAgICA8L0JveD5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJvdXNlbFdyYXBwZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxyXG4gICAgbXQ6ICctMzBweCcsXHJcbiAgICBweDogJzE1cHgnLFxyXG4gICAgJy5jYXJvdXNlbC1jb250YWluZXInOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIG1heFdpZHRoOiBbXHJcbiAgICAgICAgJzEwMCUnLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnNzUwcHgnLFxyXG4gICAgICAgICcxMDAwcHgnLFxyXG4gICAgICAgICcxMTgwcHgnLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJ2NhbGMoNTAlICsgODY1cHgpJyxcclxuICAgICAgXSxcclxuICAgICAgbXI6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICctMjIwcHgnXSxcclxuICAgICAgbWw6ICdhdXRvJyxcclxuICAgICAgJy5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtJzoge1xyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxyXG4gICAgICB9LFxyXG4gICAgICAnLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0tLWFjdGl2ZTpudGgtb2YtdHlwZSg0biknOiB7XHJcbiAgICAgICAgb3BhY2l0eTogJzAuNScsXHJcbiAgICAgICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MjBweCknOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcmV2aWV3Q2FyZDoge1xyXG4gICAgYm94U2hhZG93OiAnMHB4IDBweCAxcHggcmdiYSgzOCwgNzgsIDExOCwgMC4zNSknLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcclxuICAgIGJvcmRlclJhZGl1czogJzZweCcsXHJcbiAgICBwOiBbXHJcbiAgICAgICczMHB4IDIwcHggMzVweCcsXHJcbiAgICAgICczMHB4IDI1cHggMzVweCcsXHJcbiAgICAgICczMHB4IDIwcHggMzVweCcsXHJcbiAgICAgICczNXB4IDMwcHggNDBweCA0MHB4JyxcclxuICAgICAgJzMwcHggMzBweCAzNXB4JyxcclxuICAgICAgJzM1cHggMzBweCA0MHB4IDQwcHgnLFxyXG4gICAgXSxcclxuICAgIGJnOiAnd2hpdGUnLFxyXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICBtOiBbXHJcbiAgICAgICcyOHB4IDVweCAzMHB4IDVweCcsXHJcbiAgICAgICcyOHB4IDIwcHggMzBweCAyMHB4JyxcclxuICAgICAgJzI4cHggMTVweCAzMHB4IDE1cHgnLFxyXG4gICAgICAnMjhweCAxNXB4IDMwcHggMTVweCcsXHJcbiAgICAgICczMHB4IDIwcHggNDBweCcsXHJcbiAgICBdLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJveFNoYWRvdzogJzBweCA2cHggMzBweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpJyxcclxuICAgIH0sXHJcbiAgICAnLnJhdGluZyc6IHtcclxuICAgICAgbWI6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgdWw6IHtcclxuICAgICAgICBwbDogMCxcclxuICAgICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgICAgICBtYjogMCxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN2Zzoge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMnB4JyxcclxuICAgICAgICAnJjpsYXN0LW9mLXR5cGUnOiB7XHJcbiAgICAgICAgICBtYXJnaW5SaWdodDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICAnLnN0YXInOiB7XHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICBtcjogJzFweCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICcuc3Rhci1vJzoge1xyXG4gICAgICAgIGNvbG9yOiAnI2RkZCcsXHJcbiAgICAgICAgbXI6ICcxcHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcuY2FyZC1mb290ZXInOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIG1hcmdpblRvcDogWzUsIG51bGwsIG51bGwsICczM3B4J10sXHJcbiAgICAgICcuaW1hZ2UnOiB7XHJcbiAgICAgICAgZmxleFNocmluazogMCxcclxuICAgICAgICBtcjogWzMsIG51bGwsIG51bGwsIDRdLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBpbWc6IHtcclxuICAgICAgICAgIHdpZHRoOiAnNTVweCcsXHJcbiAgICAgICAgICBoZWlnaHQ6ICc1NXB4JyxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFNpemU6IFsxLCAyXSxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIG1iOiBbMywgbnVsbCwgbnVsbCwgJzIycHgnXSxcclxuICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjYsXHJcbiAgfSxcclxuICBkZXNjcmlwdGlvbjoge1xyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCAyXSxcclxuICB9LFxyXG4gIGhlYWRpbmc6IHtcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBtYjogJzNweCcsXHJcbiAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgbGluZUhlaWdodDogMS4zLFxyXG4gIH0sXHJcbiAgZGVzaWduYXRpb246IHtcclxuICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICBmb250V2VpZ2h0OiAnNTAwJyxcclxuICAgIGZvbnRTaXplOiAxLFxyXG4gICAgbGluZUhlaWdodDogMS40LFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=