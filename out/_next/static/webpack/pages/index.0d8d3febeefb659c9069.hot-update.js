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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/rating */ "./src/components/rating.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/testimonial/avatar1.png */ "./src/assets/testimonial/avatar1.png");
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/testimonial/avatar2.png */ "./src/assets/testimonial/avatar2.png");
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/testimonial/avatar3.png */ "./src/assets/testimonial/avatar3.png");
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/testimonial/avatar4.png */ "./src/assets/testimonial/avatar4.png");
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\sections\\testimonial.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */









var data = [{
  id: 1,
  title: 'Modern look & trending design',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 4
}, {
  id: 2,
  title: 'Design Quality & performance',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 5
}, {
  id: 3,
  title: 'Layout and organized layers',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  name: 'Denny Hilguston',
  designation: '@denny.hil',
  review: 5
}, {
  id: 4,
  title: 'Modern look & trending design',
  description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  avatar: assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_9___default.a,
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
  customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
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
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    css: {
      textAlign: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFsLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhdmF0YXIiLCJBdmF0YXIxIiwibmFtZSIsImRlc2lnbmF0aW9uIiwicmV2aWV3IiwiQXZhdGFyMiIsIkF2YXRhcjMiLCJBdmF0YXI0IiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJzbGlkZXNUb1NsaWRlIiwibGFwdG9wIiwidGFibGV0IiwibW9iaWxlIiwiY2Fyb3VzZWxQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJjb250YWluZXJDbGFzcyIsImN1c3RvbUJ1dHRvbkdyb3VwIiwiZG90TGlzdENsYXNzIiwiZHJhZ2dhYmxlIiwiZm9jdXNPblNlbGVjdCIsImluZmluaXRlIiwiaXRlbUNsYXNzIiwia2V5Qm9hcmRDb250cm9sIiwibWluaW11bVRvdWNoRHJhZyIsInJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZSIsInJlbmRlckRvdHNPdXRzaWRlIiwic2hvd0RvdHMiLCJzbGlkZXJDbGFzcyIsIlRlc3RpbW9uaWFsQ2FyZCIsInZhcmlhbnQiLCJ0ZXh0QWxpZ24iLCJzdHlsZXMiLCJjYXJvdXNlbFdyYXBwZXIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm10IiwicHgiLCJ3aWR0aCIsIm1heFdpZHRoIiwibXIiLCJtbCIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwicmV2aWV3Q2FyZCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsInAiLCJiZyIsIm0iLCJtYiIsInVsIiwicGwiLCJsaXN0U3R5bGUiLCJzdmciLCJtYXJnaW5SaWdodCIsImNvbG9yIiwibWFyZ2luVG9wIiwiZmxleFNocmluayIsImltZyIsImhlaWdodCIsIm9iamVjdEZpdCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJoZWFkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLCtCQUZUO0FBR0VDLGFBQVcsRUFDVCx5SkFKSjtBQUtFQyxRQUFNLEVBQUVDLHFFQUxWO0FBTUVDLE1BQUksRUFBRSxpQkFOUjtBQU9FQyxhQUFXLEVBQUUsWUFQZjtBQVFFQyxRQUFNLEVBQUU7QUFSVixDQURXLEVBV1g7QUFDRVAsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLDhCQUZUO0FBR0VDLGFBQVcsRUFDVCx5SkFKSjtBQUtFQyxRQUFNLEVBQUVLLHFFQUxWO0FBTUVILE1BQUksRUFBRSxpQkFOUjtBQU9FQyxhQUFXLEVBQUUsWUFQZjtBQVFFQyxRQUFNLEVBQUU7QUFSVixDQVhXLEVBcUJYO0FBQ0VQLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSw2QkFGVDtBQUdFQyxhQUFXLEVBQ1QseUpBSko7QUFLRUMsUUFBTSxFQUFFTSxxRUFMVjtBQU1FSixNQUFJLEVBQUUsaUJBTlI7QUFPRUMsYUFBVyxFQUFFLFlBUGY7QUFRRUMsUUFBTSxFQUFFO0FBUlYsQ0FyQlcsRUErQlg7QUFDRVAsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLCtCQUZUO0FBR0VDLGFBQVcsRUFDVCx5SkFKSjtBQUtFQyxRQUFNLEVBQUVPLHFFQUxWO0FBTUVMLE1BQUksRUFBRSxpQkFOUjtBQU9FQyxhQUFXLEVBQUUsWUFQZjtBQVFFQyxRQUFNLEVBQUU7QUFSVixDQS9CVyxDQUFiO0FBMkNBLElBQU1JLFVBQVUsR0FBRztBQUNqQkMsU0FBTyxFQUFFO0FBQ1BDLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FETDtBQUVQQyxTQUFLLEVBQUUsQ0FGQTtBQUdQQyxpQkFBYSxFQUFFLENBSFIsQ0FHVzs7QUFIWCxHQURRO0FBTWpCQyxRQUFNLEVBQUU7QUFDTkwsY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQUROO0FBRU5DLFNBQUssRUFBRSxDQUZEO0FBR05DLGlCQUFhLEVBQUUsQ0FIVCxDQUdZOztBQUhaLEdBTlM7QUFXakJFLFFBQU0sRUFBRTtBQUNOTixjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBRE47QUFFTkMsU0FBSyxFQUFFLENBRkQ7QUFHTkMsaUJBQWEsRUFBRSxDQUhULENBR1k7O0FBSFosR0FYUztBQWdCakJHLFFBQU0sRUFBRTtBQUNOUCxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLEdBQVA7QUFBWUMsU0FBRyxFQUFFO0FBQWpCLEtBRE47QUFFTkMsU0FBSyxFQUFFLENBRkQ7QUFHTkMsaUJBQWEsRUFBRSxDQUhULENBR1k7O0FBSFo7QUFoQlMsQ0FBbkI7QUF1QkEsSUFBTUksY0FBYyxHQUFHO0FBQ3JCQyxxQkFBbUIsRUFBQyxDQURDO0FBRXJCQyxRQUFNLEVBQUMsS0FGYztBQUdyQkMsZUFBYSxFQUFDLElBSE87QUFJckJDLFlBQVUsRUFBQyxLQUpVO0FBS3JCQyxXQUFTLEVBQUMsRUFMVztBQU1yQkMsZ0JBQWMsRUFBQyxvQkFOTTtBQU9yQkMsbUJBQWlCLEVBQUMscURBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBHO0FBUXJCQyxjQUFZLEVBQUMsRUFSUTtBQVNyQkMsV0FBUyxFQUFFLElBVFU7QUFVckJDLGVBQWEsRUFBQyxLQVZPO0FBV3JCQyxVQUFRLEVBQUMsSUFYWTtBQVlyQkMsV0FBUyxFQUFDLEVBWlc7QUFhckJDLGlCQUFlLEVBQUUsSUFiSTtBQWNyQkMsa0JBQWdCLEVBQUMsRUFkSTtBQWVyQkMsMEJBQXdCLEVBQUUsSUFmTDtBQWdCckJDLG1CQUFpQixFQUFDLEtBaEJHO0FBaUJyQjFCLFlBQVUsRUFBQ0EsVUFqQlU7QUFrQnJCMkIsVUFBUSxFQUFDLEtBbEJZO0FBbUJyQkMsYUFBVyxFQUFDLEVBbkJTO0FBb0JyQnRCLGVBQWEsRUFBQztBQXBCTyxDQUF2QjtBQXVCZSxTQUFTdUIsZUFBVCxHQUEyQjtBQUN4QyxTQUNFO0FBQVMsTUFBRSxFQUFDLGFBQVo7QUFBMEIsTUFBRSxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFXLE9BQUcsRUFBRTtBQUFFQyxlQUFTLEVBQUU7QUFBYixLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQU9EO0tBUnVCRixlO0FBVXhCLElBQU1HLE1BQU0sR0FBRztBQUNiQyxpQkFBZSxFQUFFO0FBQ2ZDLFdBQU8sRUFBRSxNQURNO0FBRWZDLGtCQUFjLEVBQUUsVUFGRDtBQUdmQyxpQkFBYSxFQUFFLFFBSEE7QUFJZkMsY0FBVSxFQUFFLFVBSkc7QUFLZkMsTUFBRSxFQUFFLE9BTFc7QUFNZkMsTUFBRSxFQUFFLE1BTlc7QUFPZiwyQkFBdUI7QUFDckJDLFdBQUssRUFBRSxNQURjO0FBRXJCQyxjQUFRLEVBQUUsQ0FDUixNQURRLEVBRVIsSUFGUSxFQUdSLElBSFEsRUFJUixPQUpRLEVBS1IsUUFMUSxFQU1SLFFBTlEsRUFPUixJQVBRLEVBUVIsbUJBUlEsQ0FGVztBQVlyQkMsUUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCLEVBQWlDLElBQWpDLEVBQXVDLElBQXZDLEVBQTZDLFFBQTdDLENBWmlCO0FBYXJCQyxRQUFFLEVBQUUsTUFiaUI7QUFjckIsb0NBQThCO0FBQzVCQyxrQkFBVSxFQUFFO0FBRGdCLE9BZFQ7QUFpQnJCLDREQUFzRDtBQUNwREMsZUFBTyxFQUFFLEtBRDJDO0FBRXBELGlEQUF5QztBQUN2Q0EsaUJBQU8sRUFBRTtBQUQ4QjtBQUZXO0FBakJqQztBQVBSLEdBREo7QUFpQ2JDLFlBQVUsRUFBRTtBQUNWQyxhQUFTLEVBQUUscUNBREQ7QUFFVkgsY0FBVSxFQUFFLFVBRkY7QUFHVkksZ0JBQVksRUFBRSxLQUhKO0FBSVZDLEtBQUMsRUFBRSxDQUNELGdCQURDLEVBRUQsZ0JBRkMsRUFHRCxnQkFIQyxFQUlELHFCQUpDLEVBS0QsZ0JBTEMsRUFNRCxxQkFOQyxDQUpPO0FBWVZDLE1BQUUsRUFBRSxPQVpNO0FBYVZuQixhQUFTLEVBQUUsTUFiRDtBQWNWb0IsS0FBQyxFQUFFLENBQ0QsbUJBREMsRUFFRCxxQkFGQyxFQUdELHFCQUhDLEVBSUQscUJBSkMsRUFLRCxnQkFMQyxDQWRPO0FBcUJWLGVBQVc7QUFDVEosZUFBUyxFQUFFO0FBREYsS0FyQkQ7QUF3QlYsZUFBVztBQUNUSyxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsQ0FESztBQUVUQyxRQUFFLEVBQUU7QUFDRkMsVUFBRSxFQUFFLENBREY7QUFFRkMsaUJBQVMsRUFBRSxNQUZUO0FBR0ZILFVBQUUsRUFBRSxDQUhGO0FBSUZsQixlQUFPLEVBQUU7QUFKUCxPQUZLO0FBUVRzQixTQUFHLEVBQUU7QUFDSEMsbUJBQVcsRUFBRSxLQURWO0FBRUgsMEJBQWtCO0FBQ2hCQSxxQkFBVyxFQUFFO0FBREc7QUFGZixPQVJJO0FBY1QsZUFBUztBQUNQQyxhQUFLLEVBQUUsU0FEQTtBQUVQaEIsVUFBRSxFQUFFO0FBRkcsT0FkQTtBQWtCVCxpQkFBVztBQUNUZ0IsYUFBSyxFQUFFLE1BREU7QUFFVGhCLFVBQUUsRUFBRTtBQUZLO0FBbEJGLEtBeEJEO0FBK0NWLG9CQUFnQjtBQUNkUixhQUFPLEVBQUUsTUFESztBQUVkRyxnQkFBVSxFQUFFLFFBRkU7QUFHZHNCLGVBQVMsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixNQUFoQixDQUhHO0FBSWQsZ0JBQVU7QUFDUkMsa0JBQVUsRUFBRSxDQURKO0FBRVJsQixVQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsQ0FGSTtBQUdSUixlQUFPLEVBQUUsTUFIRDtBQUlSMkIsV0FBRyxFQUFFO0FBQ0hyQixlQUFLLEVBQUUsTUFESjtBQUVIc0IsZ0JBQU0sRUFBRSxNQUZMO0FBR0hkLHNCQUFZLEVBQUUsS0FIWDtBQUlIZSxtQkFBUyxFQUFFO0FBSlI7QUFKRztBQUpJO0FBL0NOLEdBakNDO0FBaUdiekUsT0FBSyxFQUFFO0FBQ0wwRSxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQURMO0FBRUxDLGNBQVUsRUFBRSxHQUZQO0FBR0xiLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixNQUFoQixDQUhDO0FBSUxNLFNBQUssRUFBRSxNQUpGO0FBS0xRLGNBQVUsRUFBRTtBQUxQLEdBakdNO0FBd0diM0UsYUFBVyxFQUFFO0FBQ1h5RSxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsQ0FEQztBQUVYQyxjQUFVLEVBQUUsUUFGRDtBQUdYUCxTQUFLLEVBQUUsTUFISTtBQUlYUSxjQUFVLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLENBQWI7QUFKRCxHQXhHQTtBQThHYkMsU0FBTyxFQUFFO0FBQ1BILFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixDQUFoQixDQURIO0FBRVBDLGNBQVUsRUFBRSxHQUZMO0FBR1BiLE1BQUUsRUFBRSxLQUhHO0FBSVBNLFNBQUssRUFBRSxNQUpBO0FBS1BRLGNBQVUsRUFBRTtBQUxMLEdBOUdJO0FBcUhidkUsYUFBVyxFQUFFO0FBQ1grRCxTQUFLLEVBQUUsU0FESTtBQUVYTyxjQUFVLEVBQUUsS0FGRDtBQUdYRCxZQUFRLEVBQUUsQ0FIQztBQUlYRSxjQUFVLEVBQUU7QUFKRDtBQXJIQSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBkOGQzZmViZWVmYjY1OWM5MDY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEhlYWRpbmcsIFRleHQsIEJveCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gJ2NvbXBvbmVudHMvcmF0aW5nJztcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwJztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcclxuXHJcbmltcG9ydCBBdmF0YXIxIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIxLnBuZyc7XHJcbmltcG9ydCBBdmF0YXIyIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIyLnBuZyc7XHJcbmltcG9ydCBBdmF0YXIzIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIzLnBuZyc7XHJcbmltcG9ydCBBdmF0YXI0IGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXI0LnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6ICdNb2Rlcm4gbG9vayAmIHRyZW5kaW5nIGRlc2lnbicsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0dldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci4nLFxyXG4gICAgYXZhdGFyOiBBdmF0YXIxLFxyXG4gICAgbmFtZTogJ0Rlbm55IEhpbGd1c3RvbicsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BkZW5ueS5oaWwnLFxyXG4gICAgcmV2aWV3OiA0LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogJ0Rlc2lnbiBRdWFsaXR5ICYgcGVyZm9ybWFuY2UnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdHZXQgd29ya2luZyBleHBlcmllbmNlIHRvIHdvcmsgd2l0aCB0aGlzIGFtYXppbmcgdGVhbSAmIGluIGZ1dHVyZSB3YW50IHRvIHdvcmsgdG9nZXRoZXIgZm9yIGJyaWdodCBmdXR1cmUgcHJvamVjdHMgYW5kIGFsc28gbWFrZSBkZXBvc2l0IHRvIGZyZWVsYW5jZXIuJyxcclxuICAgIGF2YXRhcjogQXZhdGFyMixcclxuICAgIG5hbWU6ICdEZW5ueSBIaWxndXN0b24nLFxyXG4gICAgZGVzaWduYXRpb246ICdAZGVubnkuaGlsJyxcclxuICAgIHJldmlldzogNSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6ICdMYXlvdXQgYW5kIG9yZ2FuaXplZCBsYXllcnMnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdHZXQgd29ya2luZyBleHBlcmllbmNlIHRvIHdvcmsgd2l0aCB0aGlzIGFtYXppbmcgdGVhbSAmIGluIGZ1dHVyZSB3YW50IHRvIHdvcmsgdG9nZXRoZXIgZm9yIGJyaWdodCBmdXR1cmUgcHJvamVjdHMgYW5kIGFsc28gbWFrZSBkZXBvc2l0IHRvIGZyZWVsYW5jZXIuJyxcclxuICAgIGF2YXRhcjogQXZhdGFyMyxcclxuICAgIG5hbWU6ICdEZW5ueSBIaWxndXN0b24nLFxyXG4gICAgZGVzaWduYXRpb246ICdAZGVubnkuaGlsJyxcclxuICAgIHJldmlldzogNSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgdGl0bGU6ICdNb2Rlcm4gbG9vayAmIHRyZW5kaW5nIGRlc2lnbicsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0dldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci4nLFxyXG4gICAgYXZhdGFyOiBBdmF0YXI0LFxyXG4gICAgbmFtZTogJ0Rlbm55IEhpbGd1c3RvbicsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0BkZW5ueS5oaWwnLFxyXG4gICAgcmV2aWV3OiA0LFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCByZXNwb25zaXZlID0ge1xyXG4gIGRlc2t0b3A6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDE2MTkgfSxcclxuICAgIGl0ZW1zOiA0LFxyXG4gICAgc2xpZGVzVG9TbGlkZTogNCwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG4gIGxhcHRvcDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDE2MTksIG1pbjogMTAyNCB9LFxyXG4gICAgaXRlbXM6IDMsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAzLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgdGFibGV0OiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMTAyNCwgbWluOiA2NDAgfSxcclxuICAgIGl0ZW1zOiAyLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMiwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG4gIG1vYmlsZToge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDYzOSwgbWluOiAwIH0sXHJcbiAgICBpdGVtczogMSxcclxuICAgIHNsaWRlc1RvU2xpZGU6IDEsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGNhcm91c2VsUGFyYW1zID0ge1xyXG4gIGFkZGl0aW9uYWxUcmFuc2Zyb206MCxcclxuICBhcnJvd3M6ZmFsc2UsXHJcbiAgYXV0b1BsYXlTcGVlZDozMDAwLFxyXG4gIGNlbnRlck1vZGU6ZmFsc2UsXHJcbiAgY2xhc3NOYW1lOlwiXCIsXHJcbiAgY29udGFpbmVyQ2xhc3M6XCJjYXJvdXNlbC1jb250YWluZXJcIixcclxuICBjdXN0b21CdXR0b25Hcm91cDo8QnV0dG9uR3JvdXAgLz4sXHJcbiAgZG90TGlzdENsYXNzOlwiXCIsXHJcbiAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gIGZvY3VzT25TZWxlY3Q6ZmFsc2UsXHJcbiAgaW5maW5pdGU6dHJ1ZSxcclxuICBpdGVtQ2xhc3M6XCJcIixcclxuICBrZXlCb2FyZENvbnRyb2w6IHRydWUsXHJcbiAgbWluaW11bVRvdWNoRHJhZzo4MCxcclxuICByZW5kZXJCdXR0b25Hcm91cE91dHNpZGU6IHRydWUsXHJcbiAgcmVuZGVyRG90c091dHNpZGU6ZmFsc2UsXHJcbiAgcmVzcG9uc2l2ZTpyZXNwb25zaXZlLFxyXG4gIHNob3dEb3RzOmZhbHNlLFxyXG4gIHNsaWRlckNsYXNzOlwiXCIsXHJcbiAgc2xpZGVzVG9TbGlkZToxLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0aW1vbmlhbENhcmQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwidGVzdGltb25pYWxcIiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi50ZXN0aW1vbmlhbCd9fT5cclxuICAgICAgPENvbnRhaW5lciBjc3M9e3sgdGV4dEFsaWduOiAnY2VudGVyJ319ID5cclxuXHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcm91c2VsV3JhcHBlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsXHJcbiAgICBtdDogJy0zMHB4JyxcclxuICAgIHB4OiAnMTVweCcsXHJcbiAgICAnLmNhcm91c2VsLWNvbnRhaW5lcic6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgbWF4V2lkdGg6IFtcclxuICAgICAgICAnMTAwJScsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICc3NTBweCcsXHJcbiAgICAgICAgJzEwMDBweCcsXHJcbiAgICAgICAgJzExODBweCcsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnY2FsYyg1MCUgKyA4NjVweCknLFxyXG4gICAgICBdLFxyXG4gICAgICBtcjogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJy0yMjBweCddLFxyXG4gICAgICBtbDogJ2F1dG8nLFxyXG4gICAgICAnLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0nOiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgIH0sXHJcbiAgICAgICcucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDRuKSc6IHtcclxuICAgICAgICBvcGFjaXR5OiAnMC41JyxcclxuICAgICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYyMHB4KSc6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICByZXZpZXdDYXJkOiB7XHJcbiAgICBib3hTaGFkb3c6ICcwcHggMHB4IDFweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjM1KScsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNnB4JyxcclxuICAgIHA6IFtcclxuICAgICAgJzMwcHggMjBweCAzNXB4JyxcclxuICAgICAgJzMwcHggMjVweCAzNXB4JyxcclxuICAgICAgJzMwcHggMjBweCAzNXB4JyxcclxuICAgICAgJzM1cHggMzBweCA0MHB4IDQwcHgnLFxyXG4gICAgICAnMzBweCAzMHB4IDM1cHgnLFxyXG4gICAgICAnMzVweCAzMHB4IDQwcHggNDBweCcsXHJcbiAgICBdLFxyXG4gICAgYmc6ICd3aGl0ZScsXHJcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgIG06IFtcclxuICAgICAgJzI4cHggNXB4IDMwcHggNXB4JyxcclxuICAgICAgJzI4cHggMjBweCAzMHB4IDIwcHgnLFxyXG4gICAgICAnMjhweCAxNXB4IDMwcHggMTVweCcsXHJcbiAgICAgICcyOHB4IDE1cHggMzBweCAxNXB4JyxcclxuICAgICAgJzMwcHggMjBweCA0MHB4JyxcclxuICAgIF0sXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm94U2hhZG93OiAnMHB4IDZweCAzMHB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSknLFxyXG4gICAgfSxcclxuICAgICcucmF0aW5nJzoge1xyXG4gICAgICBtYjogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICB1bDoge1xyXG4gICAgICAgIHBsOiAwLFxyXG4gICAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgICAgIG1iOiAwLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgfSxcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcycHgnLFxyXG4gICAgICAgICcmOmxhc3Qtb2YtdHlwZSc6IHtcclxuICAgICAgICAgIG1hcmdpblJpZ2h0OiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgICcuc3Rhcic6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgIG1yOiAnMXB4JyxcclxuICAgICAgfSxcclxuICAgICAgJy5zdGFyLW8nOiB7XHJcbiAgICAgICAgY29sb3I6ICcjZGRkJyxcclxuICAgICAgICBtcjogJzFweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJy5jYXJkLWZvb3Rlcic6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgbWFyZ2luVG9wOiBbNSwgbnVsbCwgbnVsbCwgJzMzcHgnXSxcclxuICAgICAgJy5pbWFnZSc6IHtcclxuICAgICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICAgIG1yOiBbMywgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGltZzoge1xyXG4gICAgICAgICAgd2lkdGg6ICc1NXB4JyxcclxuICAgICAgICAgIGhlaWdodDogJzU1cHgnLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogWzEsIDJdLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgbWI6IFszLCBudWxsLCBudWxsLCAnMjJweCddLFxyXG4gICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIGxpbmVIZWlnaHQ6IDEuNixcclxuICB9LFxyXG4gIGRlc2NyaXB0aW9uOiB7XHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIDJdLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIG1iOiAnM3B4JyxcclxuICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjMsXHJcbiAgfSxcclxuICBkZXNpZ25hdGlvbjoge1xyXG4gICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG4gICAgZm9udFNpemU6IDEsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==