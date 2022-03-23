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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFsLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhdmF0YXIiLCJBdmF0YXIxIiwibmFtZSIsImRlc2lnbmF0aW9uIiwicmV2aWV3IiwiQXZhdGFyMiIsIkF2YXRhcjMiLCJBdmF0YXI0IiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJzbGlkZXNUb1NsaWRlIiwibGFwdG9wIiwidGFibGV0IiwibW9iaWxlIiwiY2Fyb3VzZWxQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJjb250YWluZXJDbGFzcyIsImN1c3RvbUJ1dHRvbkdyb3VwIiwiZG90TGlzdENsYXNzIiwiZHJhZ2dhYmxlIiwiZm9jdXNPblNlbGVjdCIsImluZmluaXRlIiwiaXRlbUNsYXNzIiwia2V5Qm9hcmRDb250cm9sIiwibWluaW11bVRvdWNoRHJhZyIsInJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZSIsInJlbmRlckRvdHNPdXRzaWRlIiwic2hvd0RvdHMiLCJzbGlkZXJDbGFzcyIsIlRlc3RpbW9uaWFsQ2FyZCIsInZhcmlhbnQiLCJ0ZXh0QWxpZ24iLCJzdHlsZXMiLCJjYXJvdXNlbFdyYXBwZXIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm10IiwicHgiLCJ3aWR0aCIsIm1heFdpZHRoIiwibXIiLCJtbCIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwicmV2aWV3Q2FyZCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsInAiLCJiZyIsIm0iLCJtYiIsInVsIiwicGwiLCJsaXN0U3R5bGUiLCJzdmciLCJtYXJnaW5SaWdodCIsImNvbG9yIiwibWFyZ2luVG9wIiwiZmxleFNocmluayIsImltZyIsImhlaWdodCIsIm9iamVjdEZpdCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJoZWFkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsK0JBRlQ7QUFHRUMsYUFBVyxFQUNULHlKQUpKO0FBS0VDLFFBQU0sRUFBRUMscUVBTFY7QUFNRUMsTUFBSSxFQUFFLGlCQU5SO0FBT0VDLGFBQVcsRUFBRSxZQVBmO0FBUUVDLFFBQU0sRUFBRTtBQVJWLENBRFcsRUFXWDtBQUNFUCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsOEJBRlQ7QUFHRUMsYUFBVyxFQUNULHlKQUpKO0FBS0VDLFFBQU0sRUFBRUsscUVBTFY7QUFNRUgsTUFBSSxFQUFFLGlCQU5SO0FBT0VDLGFBQVcsRUFBRSxZQVBmO0FBUUVDLFFBQU0sRUFBRTtBQVJWLENBWFcsRUFxQlg7QUFDRVAsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLDZCQUZUO0FBR0VDLGFBQVcsRUFDVCx5SkFKSjtBQUtFQyxRQUFNLEVBQUVNLHFFQUxWO0FBTUVKLE1BQUksRUFBRSxpQkFOUjtBQU9FQyxhQUFXLEVBQUUsWUFQZjtBQVFFQyxRQUFNLEVBQUU7QUFSVixDQXJCVyxFQStCWDtBQUNFUCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsK0JBRlQ7QUFHRUMsYUFBVyxFQUNULHlKQUpKO0FBS0VDLFFBQU0sRUFBRU8sc0VBTFY7QUFNRUwsTUFBSSxFQUFFLGlCQU5SO0FBT0VDLGFBQVcsRUFBRSxZQVBmO0FBUUVDLFFBQU0sRUFBRTtBQVJWLENBL0JXLENBQWI7QUEyQ0EsSUFBTUksVUFBVSxHQUFHO0FBQ2pCQyxTQUFPLEVBQUU7QUFDUEMsY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQURMO0FBRVBDLFNBQUssRUFBRSxDQUZBO0FBR1BDLGlCQUFhLEVBQUUsQ0FIUixDQUdXOztBQUhYLEdBRFE7QUFNakJDLFFBQU0sRUFBRTtBQUNOTCxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBRE47QUFFTkMsU0FBSyxFQUFFLENBRkQ7QUFHTkMsaUJBQWEsRUFBRSxDQUhULENBR1k7O0FBSFosR0FOUztBQVdqQkUsUUFBTSxFQUFFO0FBQ05OLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FETjtBQUVOQyxTQUFLLEVBQUUsQ0FGRDtBQUdOQyxpQkFBYSxFQUFFLENBSFQsQ0FHWTs7QUFIWixHQVhTO0FBZ0JqQkcsUUFBTSxFQUFFO0FBQ05QLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsR0FBUDtBQUFZQyxTQUFHLEVBQUU7QUFBakIsS0FETjtBQUVOQyxTQUFLLEVBQUUsQ0FGRDtBQUdOQyxpQkFBYSxFQUFFLENBSFQsQ0FHWTs7QUFIWjtBQWhCUyxDQUFuQjtBQXVCQSxJQUFNSSxjQUFjLEdBQUc7QUFDckJDLHFCQUFtQixFQUFDLENBREM7QUFFckJDLFFBQU0sRUFBQyxLQUZjO0FBR3JCQyxlQUFhLEVBQUMsSUFITztBQUlyQkMsWUFBVSxFQUFDLEtBSlU7QUFLckJDLFdBQVMsRUFBQyxFQUxXO0FBTXJCQyxnQkFBYyxFQUFDLG9CQU5NO0FBT3JCQyxtQkFBaUIsRUFBQyxxREFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEc7QUFRckJDLGNBQVksRUFBQyxFQVJRO0FBU3JCQyxXQUFTLEVBQUUsSUFUVTtBQVVyQkMsZUFBYSxFQUFDLEtBVk87QUFXckJDLFVBQVEsRUFBQyxJQVhZO0FBWXJCQyxXQUFTLEVBQUMsRUFaVztBQWFyQkMsaUJBQWUsRUFBRSxJQWJJO0FBY3JCQyxrQkFBZ0IsRUFBQyxFQWRJO0FBZXJCQywwQkFBd0IsRUFBRSxJQWZMO0FBZ0JyQkMsbUJBQWlCLEVBQUMsS0FoQkc7QUFpQnJCMUIsWUFBVSxFQUFDQSxVQWpCVTtBQWtCckIyQixVQUFRLEVBQUMsS0FsQlk7QUFtQnJCQyxhQUFXLEVBQUMsRUFuQlM7QUFvQnJCdEIsZUFBYSxFQUFDO0FBcEJPLENBQXZCO0FBdUJlLFNBQVN1QixlQUFULEdBQTJCO0FBQ3hDLFNBQ0U7QUFBUyxNQUFFLEVBQUMsYUFBWjtBQUEwQixNQUFFLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQVcsT0FBRyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxpRUFBRDtBQUNFLFVBQU0sRUFBQyxhQURUO0FBRUUsU0FBSyxFQUFDLDBCQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBT0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDJEQUFELHlGQUFjdkIsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FQRixDQURGO0FBY0Q7S0FmdUJtQixlO0FBaUJ4QixJQUFNRyxNQUFNLEdBQUc7QUFDYkMsaUJBQWUsRUFBRTtBQUNmQyxXQUFPLEVBQUUsTUFETTtBQUVmQyxrQkFBYyxFQUFFLFVBRkQ7QUFHZkMsaUJBQWEsRUFBRSxRQUhBO0FBSWZDLGNBQVUsRUFBRSxVQUpHO0FBS2ZDLE1BQUUsRUFBRSxPQUxXO0FBTWZDLE1BQUUsRUFBRSxNQU5XO0FBT2YsMkJBQXVCO0FBQ3JCQyxXQUFLLEVBQUUsTUFEYztBQUVyQkMsY0FBUSxFQUFFLENBQ1IsTUFEUSxFQUVSLElBRlEsRUFHUixJQUhRLEVBSVIsT0FKUSxFQUtSLFFBTFEsRUFNUixRQU5RLEVBT1IsSUFQUSxFQVFSLG1CQVJRLENBRlc7QUFZckJDLFFBQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixJQUEzQixFQUFpQyxJQUFqQyxFQUF1QyxJQUF2QyxFQUE2QyxRQUE3QyxDQVppQjtBQWFyQkMsUUFBRSxFQUFFLE1BYmlCO0FBY3JCLG9DQUE4QjtBQUM1QkMsa0JBQVUsRUFBRTtBQURnQixPQWRUO0FBaUJyQiw0REFBc0Q7QUFDcERDLGVBQU8sRUFBRSxLQUQyQztBQUVwRCxpREFBeUM7QUFDdkNBLGlCQUFPLEVBQUU7QUFEOEI7QUFGVztBQWpCakM7QUFQUixHQURKO0FBaUNiQyxZQUFVLEVBQUU7QUFDVkMsYUFBUyxFQUFFLHFDQUREO0FBRVZILGNBQVUsRUFBRSxVQUZGO0FBR1ZJLGdCQUFZLEVBQUUsS0FISjtBQUlWQyxLQUFDLEVBQUUsQ0FDRCxnQkFEQyxFQUVELGdCQUZDLEVBR0QsZ0JBSEMsRUFJRCxxQkFKQyxFQUtELGdCQUxDLEVBTUQscUJBTkMsQ0FKTztBQVlWQyxNQUFFLEVBQUUsT0FaTTtBQWFWbkIsYUFBUyxFQUFFLE1BYkQ7QUFjVm9CLEtBQUMsRUFBRSxDQUNELG1CQURDLEVBRUQscUJBRkMsRUFHRCxxQkFIQyxFQUlELHFCQUpDLEVBS0QsZ0JBTEMsQ0FkTztBQXFCVixlQUFXO0FBQ1RKLGVBQVMsRUFBRTtBQURGLEtBckJEO0FBd0JWLGVBQVc7QUFDVEssUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLENBQWhCLENBREs7QUFFVEMsUUFBRSxFQUFFO0FBQ0ZDLFVBQUUsRUFBRSxDQURGO0FBRUZDLGlCQUFTLEVBQUUsTUFGVDtBQUdGSCxVQUFFLEVBQUUsQ0FIRjtBQUlGbEIsZUFBTyxFQUFFO0FBSlAsT0FGSztBQVFUc0IsU0FBRyxFQUFFO0FBQ0hDLG1CQUFXLEVBQUUsS0FEVjtBQUVILDBCQUFrQjtBQUNoQkEscUJBQVcsRUFBRTtBQURHO0FBRmYsT0FSSTtBQWNULGVBQVM7QUFDUEMsYUFBSyxFQUFFLFNBREE7QUFFUGhCLFVBQUUsRUFBRTtBQUZHLE9BZEE7QUFrQlQsaUJBQVc7QUFDVGdCLGFBQUssRUFBRSxNQURFO0FBRVRoQixVQUFFLEVBQUU7QUFGSztBQWxCRixLQXhCRDtBQStDVixvQkFBZ0I7QUFDZFIsYUFBTyxFQUFFLE1BREs7QUFFZEcsZ0JBQVUsRUFBRSxRQUZFO0FBR2RzQixlQUFTLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsTUFBaEIsQ0FIRztBQUlkLGdCQUFVO0FBQ1JDLGtCQUFVLEVBQUUsQ0FESjtBQUVSbEIsVUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLENBQWhCLENBRkk7QUFHUlIsZUFBTyxFQUFFLE1BSEQ7QUFJUjJCLFdBQUcsRUFBRTtBQUNIckIsZUFBSyxFQUFFLE1BREo7QUFFSHNCLGdCQUFNLEVBQUUsTUFGTDtBQUdIZCxzQkFBWSxFQUFFLEtBSFg7QUFJSGUsbUJBQVMsRUFBRTtBQUpSO0FBSkc7QUFKSTtBQS9DTixHQWpDQztBQWlHYnpFLE9BQUssRUFBRTtBQUNMMEUsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FETDtBQUVMQyxjQUFVLEVBQUUsR0FGUDtBQUdMYixNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsTUFBaEIsQ0FIQztBQUlMTSxTQUFLLEVBQUUsTUFKRjtBQUtMUSxjQUFVLEVBQUU7QUFMUCxHQWpHTTtBQXdHYjNFLGFBQVcsRUFBRTtBQUNYeUUsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLENBQWhCLENBREM7QUFFWEMsY0FBVSxFQUFFLFFBRkQ7QUFHWFAsU0FBSyxFQUFFLE1BSEk7QUFJWFEsY0FBVSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxDQUFiO0FBSkQsR0F4R0E7QUE4R2JDLFNBQU8sRUFBRTtBQUNQSCxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsQ0FESDtBQUVQQyxjQUFVLEVBQUUsR0FGTDtBQUdQYixNQUFFLEVBQUUsS0FIRztBQUlQTSxTQUFLLEVBQUUsTUFKQTtBQUtQUSxjQUFVLEVBQUU7QUFMTCxHQTlHSTtBQXFIYnZFLGFBQVcsRUFBRTtBQUNYK0QsU0FBSyxFQUFFLFNBREk7QUFFWE8sY0FBVSxFQUFFLEtBRkQ7QUFHWEQsWUFBUSxFQUFFLENBSEM7QUFJWEUsY0FBVSxFQUFFO0FBSkQ7QUFySEEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNTc2MTg1ZmNlZTEzODM4NzU0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBIZWFkaW5nLCBUZXh0LCBCb3gsIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IFJhdGluZyBmcm9tICdjb21wb25lbnRzL3JhdGluZyc7XHJcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdjb21wb25lbnRzL2J1dHRvbi1ncm91cCc7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tdWx0aS1jYXJvdXNlbCc7XHJcblxyXG5pbXBvcnQgQXZhdGFyMSBmcm9tICdhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMS5wbmcnO1xyXG5pbXBvcnQgQXZhdGFyMiBmcm9tICdhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMi5wbmcnO1xyXG5pbXBvcnQgQXZhdGFyMyBmcm9tICdhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMy5wbmcnO1xyXG5pbXBvcnQgQXZhdGFyNCBmcm9tICdhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyNC5wbmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdGxlOiAnTW9kZXJuIGxvb2sgJiB0cmVuZGluZyBkZXNpZ24nLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdHZXQgd29ya2luZyBleHBlcmllbmNlIHRvIHdvcmsgd2l0aCB0aGlzIGFtYXppbmcgdGVhbSAmIGluIGZ1dHVyZSB3YW50IHRvIHdvcmsgdG9nZXRoZXIgZm9yIGJyaWdodCBmdXR1cmUgcHJvamVjdHMgYW5kIGFsc28gbWFrZSBkZXBvc2l0IHRvIGZyZWVsYW5jZXIuJyxcclxuICAgIGF2YXRhcjogQXZhdGFyMSxcclxuICAgIG5hbWU6ICdEZW5ueSBIaWxndXN0b24nLFxyXG4gICAgZGVzaWduYXRpb246ICdAZGVubnkuaGlsJyxcclxuICAgIHJldmlldzogNCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6ICdEZXNpZ24gUXVhbGl0eSAmIHBlcmZvcm1hbmNlJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnR2V0IHdvcmtpbmcgZXhwZXJpZW5jZSB0byB3b3JrIHdpdGggdGhpcyBhbWF6aW5nIHRlYW0gJiBpbiBmdXR1cmUgd2FudCB0byB3b3JrIHRvZ2V0aGVyIGZvciBicmlnaHQgZnV0dXJlIHByb2plY3RzIGFuZCBhbHNvIG1ha2UgZGVwb3NpdCB0byBmcmVlbGFuY2VyLicsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjIsXHJcbiAgICBuYW1lOiAnRGVubnkgSGlsZ3VzdG9uJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQGRlbm55LmhpbCcsXHJcbiAgICByZXZpZXc6IDUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIHRpdGxlOiAnTGF5b3V0IGFuZCBvcmdhbml6ZWQgbGF5ZXJzJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnR2V0IHdvcmtpbmcgZXhwZXJpZW5jZSB0byB3b3JrIHdpdGggdGhpcyBhbWF6aW5nIHRlYW0gJiBpbiBmdXR1cmUgd2FudCB0byB3b3JrIHRvZ2V0aGVyIGZvciBicmlnaHQgZnV0dXJlIHByb2plY3RzIGFuZCBhbHNvIG1ha2UgZGVwb3NpdCB0byBmcmVlbGFuY2VyLicsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjMsXHJcbiAgICBuYW1lOiAnRGVubnkgSGlsZ3VzdG9uJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQGRlbm55LmhpbCcsXHJcbiAgICByZXZpZXc6IDUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHRpdGxlOiAnTW9kZXJuIGxvb2sgJiB0cmVuZGluZyBkZXNpZ24nLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdHZXQgd29ya2luZyBleHBlcmllbmNlIHRvIHdvcmsgd2l0aCB0aGlzIGFtYXppbmcgdGVhbSAmIGluIGZ1dHVyZSB3YW50IHRvIHdvcmsgdG9nZXRoZXIgZm9yIGJyaWdodCBmdXR1cmUgcHJvamVjdHMgYW5kIGFsc28gbWFrZSBkZXBvc2l0IHRvIGZyZWVsYW5jZXIuJyxcclxuICAgIGF2YXRhcjogQXZhdGFyNCxcclxuICAgIG5hbWU6ICdEZW5ueSBIaWxndXN0b24nLFxyXG4gICAgZGVzaWduYXRpb246ICdAZGVubnkuaGlsJyxcclxuICAgIHJldmlldzogNCxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcclxuICBkZXNrdG9wOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxNjE5IH0sXHJcbiAgICBpdGVtczogNCxcclxuICAgIHNsaWRlc1RvU2xpZGU6IDQsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxuICBsYXB0b3A6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxNjE5LCBtaW46IDEwMjQgfSxcclxuICAgIGl0ZW1zOiAzLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMywgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG4gIHRhYmxldDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNjQwIH0sXHJcbiAgICBpdGVtczogMixcclxuICAgIHNsaWRlc1RvU2xpZGU6IDIsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxuICBtb2JpbGU6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAxLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBjYXJvdXNlbFBhcmFtcyA9IHtcclxuICBhZGRpdGlvbmFsVHJhbnNmcm9tOjAsXHJcbiAgYXJyb3dzOmZhbHNlLFxyXG4gIGF1dG9QbGF5U3BlZWQ6MzAwMCxcclxuICBjZW50ZXJNb2RlOmZhbHNlLFxyXG4gIGNsYXNzTmFtZTpcIlwiLFxyXG4gIGNvbnRhaW5lckNsYXNzOlwiY2Fyb3VzZWwtY29udGFpbmVyXCIsXHJcbiAgY3VzdG9tQnV0dG9uR3JvdXA6PEJ1dHRvbkdyb3VwIC8+LFxyXG4gIGRvdExpc3RDbGFzczpcIlwiLFxyXG4gIGRyYWdnYWJsZTogdHJ1ZSxcclxuICBmb2N1c09uU2VsZWN0OmZhbHNlLFxyXG4gIGluZmluaXRlOnRydWUsXHJcbiAgaXRlbUNsYXNzOlwiXCIsXHJcbiAga2V5Qm9hcmRDb250cm9sOiB0cnVlLFxyXG4gIG1pbmltdW1Ub3VjaERyYWc6ODAsXHJcbiAgcmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlOiB0cnVlLFxyXG4gIHJlbmRlckRvdHNPdXRzaWRlOmZhbHNlLFxyXG4gIHJlc3BvbnNpdmU6cmVzcG9uc2l2ZSxcclxuICBzaG93RG90czpmYWxzZSxcclxuICBzbGlkZXJDbGFzczpcIlwiLFxyXG4gIHNsaWRlc1RvU2xpZGU6MSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdGltb25pYWxDYXJkKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cInRlc3RpbW9uaWFsXCIgc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24udGVzdGltb25pYWwnfX0+XHJcbiAgICAgIDxDb250YWluZXIgY3NzPXt7IHRleHRBbGlnbjogJ2NlbnRlcid9fT5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgc2xvZ2FuPVwiVGVzdGltb25pYWxcIlxyXG4gICAgICAgICAgdGl0bGU9XCJNZWV0IENsaWVudCBTYXRpc2ZhY3Rpb25cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuY2Fyb3VzZWxXcmFwcGVyfT5cclxuICAgICAgICA8Q2Fyb3VzZWwgey4uLmNhcm91c2VsUGFyYW1zfT48L0Nhcm91c2VsPlxyXG5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2Fyb3VzZWxXcmFwcGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJyxcclxuICAgIG10OiAnLTMwcHgnLFxyXG4gICAgcHg6ICcxNXB4JyxcclxuICAgICcuY2Fyb3VzZWwtY29udGFpbmVyJzoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBtYXhXaWR0aDogW1xyXG4gICAgICAgICcxMDAlJyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzc1MHB4JyxcclxuICAgICAgICAnMTAwMHB4JyxcclxuICAgICAgICAnMTE4MHB4JyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICdjYWxjKDUwJSArIDg2NXB4KScsXHJcbiAgICAgIF0sXHJcbiAgICAgIG1yOiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnLTIyMHB4J10sXHJcbiAgICAgIG1sOiAnYXV0bycsXHJcbiAgICAgICcucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbSc6IHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcclxuICAgICAgfSxcclxuICAgICAgJy5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoNG4pJzoge1xyXG4gICAgICAgIG9wYWNpdHk6ICcwLjUnLFxyXG4gICAgICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjIwcHgpJzoge1xyXG4gICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJldmlld0NhcmQ6IHtcclxuICAgIGJveFNoYWRvdzogJzBweCAwcHggMXB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMzUpJyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcycsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxyXG4gICAgcDogW1xyXG4gICAgICAnMzBweCAyMHB4IDM1cHgnLFxyXG4gICAgICAnMzBweCAyNXB4IDM1cHgnLFxyXG4gICAgICAnMzBweCAyMHB4IDM1cHgnLFxyXG4gICAgICAnMzVweCAzMHB4IDQwcHggNDBweCcsXHJcbiAgICAgICczMHB4IDMwcHggMzVweCcsXHJcbiAgICAgICczNXB4IDMwcHggNDBweCA0MHB4JyxcclxuICAgIF0sXHJcbiAgICBiZzogJ3doaXRlJyxcclxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgbTogW1xyXG4gICAgICAnMjhweCA1cHggMzBweCA1cHgnLFxyXG4gICAgICAnMjhweCAyMHB4IDMwcHggMjBweCcsXHJcbiAgICAgICcyOHB4IDE1cHggMzBweCAxNXB4JyxcclxuICAgICAgJzI4cHggMTVweCAzMHB4IDE1cHgnLFxyXG4gICAgICAnMzBweCAyMHB4IDQwcHgnLFxyXG4gICAgXSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBib3hTaGFkb3c6ICcwcHggNnB4IDMwcHggcmdiYSgzOCwgNzgsIDExOCwgMC4xKScsXHJcbiAgICB9LFxyXG4gICAgJy5yYXRpbmcnOiB7XHJcbiAgICAgIG1iOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIHVsOiB7XHJcbiAgICAgICAgcGw6IDAsXHJcbiAgICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICAgICAgbWI6IDAsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICB9LFxyXG4gICAgICBzdmc6IHtcclxuICAgICAgICBtYXJnaW5SaWdodDogJzJweCcsXHJcbiAgICAgICAgJyY6bGFzdC1vZi10eXBlJzoge1xyXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgJy5zdGFyJzoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgbXI6ICcxcHgnLFxyXG4gICAgICB9LFxyXG4gICAgICAnLnN0YXItbyc6IHtcclxuICAgICAgICBjb2xvcjogJyNkZGQnLFxyXG4gICAgICAgIG1yOiAnMXB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnLmNhcmQtZm9vdGVyJzoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBtYXJnaW5Ub3A6IFs1LCBudWxsLCBudWxsLCAnMzNweCddLFxyXG4gICAgICAnLmltYWdlJzoge1xyXG4gICAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgICAgbXI6IFszLCBudWxsLCBudWxsLCA0XSxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgaW1nOiB7XHJcbiAgICAgICAgICB3aWR0aDogJzU1cHgnLFxyXG4gICAgICAgICAgaGVpZ2h0OiAnNTVweCcsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBtYjogWzMsIG51bGwsIG51bGwsICcyMnB4J10sXHJcbiAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgbGluZUhlaWdodDogMS42LFxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb246IHtcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgMl0sXHJcbiAgfSxcclxuICBoZWFkaW5nOiB7XHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgbWI6ICczcHgnLFxyXG4gICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIGxpbmVIZWlnaHQ6IDEuMyxcclxuICB9LFxyXG4gIGRlc2lnbmF0aW9uOiB7XHJcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgICBmb250U2l6ZTogMSxcclxuICAgIGxpbmVIZWlnaHQ6IDEuNCxcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9