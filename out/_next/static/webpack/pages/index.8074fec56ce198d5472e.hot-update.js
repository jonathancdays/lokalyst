webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/service-section.js":
/*!*****************************************!*\
  !*** ./src/sections/service-section.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceSection; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modal-video */ "./node_modules/react-modal-video/lib/index.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/service-thumb.png */ "./src/assets/service-thumb.png");
/* harmony import */ var assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/shape-pattern1.png */ "./src/assets/shape-pattern1.png");
/* harmony import */ var assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/services/smart.svg */ "./src/assets/services/smart.svg");
/* harmony import */ var assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/services/secure.svg */ "./src/assets/services/secure.svg");
/* harmony import */ var assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\sections\\service-section.js",
    _s = $RefreshSig$(),
    _templateObject;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */










var data = {
  subTitle: 'our service',
  title: 'Business Goals Achieved with SEO',
  features: [{
    id: 1,
    imgSrc: assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    altText: 'On-Page SEO',
    title: 'On-Page SEO',
    text: 'We will optimize individual web pages in order to rank you higher and earn more relevant traffic in search engines.'
  }, {
    id: 2,
    imgSrc: assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    altText: 'Off-Page SEO',
    title: 'Off-Page SEO',
    text: 'We impact your rankings by telling search engines that your website is important to others on the web.'
  }]
};
function ServiceSection() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      videoOpen = _useState[0],
      setVideoOpen = _useState[1];

  var handleClick = function handleClick(e) {
    e.preventDefault();
    setVideoOpen(true);
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("section", {
    sx: {
      variant: 'section.services'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "Thumbnail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    sx: styles.videoBtn,
    onClick: handleClick,
    "aria-label": "Play Button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoIosPlay"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.shapeBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_4__["default"], {
    subTitle: data.subTitle,
    title: data.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, data.features.map(function (feature) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.card,
      key: feature.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: feature.imgSrc,
      alt: feature.altText,
      sx: styles.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 19
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.wrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 19
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      sx: styles.wrapper.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }
    }, feature.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      sx: styles.wrapper.subTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }
    }, feature.subTitle)));
  })))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_modal_video__WEBPACK_IMPORTED_MODULE_5___default.a, {
    channel: "youtube",
    isOpen: videoOpen,
    videoId: "0eKVizvYSUQ",
    onClose: function onClose() {
      return setVideoOpen(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }));
}

_s(ServiceSection, "fjrTXSMqqo5cVpzR03nEXJYpFAo=");

_c = ServiceSection;
var playPluse = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);\n    opacity: 1;\n  }\n\n  to {\n\ttransform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);\n    opacity: 0;\n  }\n"])));
var styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative'
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7]
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto']
    }
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block']
  },
  videoBtn: {
    zIndex: 2,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: ['60px', null, '80px', null, '100px'],
    height: ['60px', null, '80px', null, '100px'],
    p: '0px !important',
    backgroundColor: 'transparent',
    '&::before': {
      position: 'absolute',
      content: '""',
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: ['60px', null, '80px', null, '100px'],
      height: ['60px', null, '80px', null, '100px'],
      backgroundColor: 'primary',
      borderRadius: '50%',
      animation: "".concat(playPluse, " 1.5s ease-out infinite"),
      opacity: 0.5
    },
    '> span': {
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 'inherit',
      height: 'inherit',
      textAlign: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2
    },
    svg: {
      fontSize: [40, null, 48, null, 62]
    }
  },
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left']
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
    gridGap: ['35px 0', null, null, null, '50px 0'],
    gridTemplateColumns: ['repeat(1,1fr)']
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s'
  },
  icon: {
    width: ['45px', null, null, null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, null, null, null, 4]
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3]
    },
    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9
    }
  },
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%'
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    }
  }
};

var _c;

$RefreshReg$(_c, "ServiceSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3NlcnZpY2Utc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJkYXRhIiwic3ViVGl0bGUiLCJ0aXRsZSIsImZlYXR1cmVzIiwiaWQiLCJpbWdTcmMiLCJTbWFydCIsImFsdFRleHQiLCJ0ZXh0IiwiU2VjdXJlIiwiU2VydmljZVNlY3Rpb24iLCJ1c2VTdGF0ZSIsInZpZGVvT3BlbiIsInNldFZpZGVvT3BlbiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFyaWFudCIsInN0eWxlcyIsImNvbnRhaW5lckJveCIsInRodW1ibmFpbCIsIlNlcnZpY2VUaHVtYiIsInZpZGVvQnRuIiwic2hhcGVCb3giLCJzaGFwZVBhdHRlcm4iLCJjb250ZW50Qm94IiwiZ3JpZCIsIm1hcCIsImZlYXR1cmUiLCJjYXJkIiwiaWNvbiIsIndyYXBwZXIiLCJwbGF5UGx1c2UiLCJrZXlmcmFtZXMiLCJjb3JlRmVhdHVyZSIsInB5IiwicG9zaXRpb24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsInBiIiwibXIiLCJvcmRlciIsIm1sIiwiekluZGV4IiwiaGVpZ2h0IiwiYm90dG9tIiwibGVmdCIsInRvcCIsInRyYW5zZm9ybSIsIndpZHRoIiwicCIsImJhY2tncm91bmRDb2xvciIsImNvbnRlbnQiLCJib3JkZXJSYWRpdXMiLCJhbmltYXRpb24iLCJvcGFjaXR5IiwidGV4dEFsaWduIiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsInN2ZyIsImZvbnRTaXplIiwiZmxleFNocmluayIsIm1iIiwicHIiLCJwbCIsInB0IiwibXgiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm10IiwiY29sb3IiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCIsInZpZGVvV3JhcHBlciIsIm1heFdpZHRoIiwicGFkZGluZ1RvcCIsImlmcmFtZSJdLCJtYXBwaW5ncyI6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O0FBd0hiRSxjQUFZLEVBQUU7QUFDWkMsWUFBUSxFQUFFLE1BREU7QUFFWnhDLFlBQVEsRUFBRSxVQUZFO0FBR1plLFNBQUssRUFBRSxPQUhLO0FBSVosZ0JBQVk7QUFDVkcsYUFBTyxFQUFFLElBREM7QUFFVmpCLGFBQU8sRUFBRSxPQUZDO0FBR1Z3QyxnQkFBVSxFQUFFO0FBSEYsS0FKQTtBQVNaQyxVQUFNLEVBQUU7QUFDTjNCLFdBQUssRUFBRSxNQUREO0FBRU5MLFlBQU0sRUFBRSxNQUZGO0FBR05WLGNBQVEsRUFBRSxVQUhKO0FBSU5hLFNBQUcsRUFBRSxDQUpDO0FBS05ELFVBQUksRUFBRTtBQUxBO0FBVEk7QUF4SEQsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MDc0ZmVjNTZjZTE5OGQ1NDcyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgR3JpZCwgVGV4dCwgSGVhZGluZywgQnV0dG9uLCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcbmltcG9ydCBUZXh0RmVhdHVyZSBmcm9tICdjb21wb25lbnRzL3RleHQtZmVhdHVyZSc7XHJcbmltcG9ydCBNb2RhbFZpZGVvIGZyb20gJ3JlYWN0LW1vZGFsLXZpZGVvJztcclxuaW1wb3J0IHsgSW9Jb3NQbGF5IH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5cclxuaW1wb3J0IFNlcnZpY2VUaHVtYiBmcm9tICdhc3NldHMvc2VydmljZS10aHVtYi5wbmcnO1xyXG5pbXBvcnQgc2hhcGVQYXR0ZXJuIGZyb20gJ2Fzc2V0cy9zaGFwZS1wYXR0ZXJuMS5wbmcnO1xyXG5cclxuaW1wb3J0IFNtYXJ0IGZyb20gJ2Fzc2V0cy9zZXJ2aWNlcy9zbWFydC5zdmcnO1xyXG5pbXBvcnQgU2VjdXJlIGZyb20gJ2Fzc2V0cy9zZXJ2aWNlcy9zZWN1cmUuc3ZnJztcclxuXHJcbmNvbnN0IGRhdGEgPSB7XHJcbiAgc3ViVGl0bGU6ICdvdXIgc2VydmljZScsXHJcbiAgdGl0bGU6ICdCdXNpbmVzcyBHb2FscyBBY2hpZXZlZCB3aXRoIFNFTycsXHJcbiAgZmVhdHVyZXM6IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIGltZ1NyYzogU21hcnQsXHJcbiAgICAgIGFsdFRleHQ6ICdPbi1QYWdlIFNFTycsXHJcbiAgICAgIHRpdGxlOiAnT24tUGFnZSBTRU8nLFxyXG4gICAgICB0ZXh0OlxyXG4gICAgICAgICdXZSB3aWxsIG9wdGltaXplIGluZGl2aWR1YWwgd2ViIHBhZ2VzIGluIG9yZGVyIHRvIHJhbmsgeW91IGhpZ2hlciBhbmQgZWFybiBtb3JlIHJlbGV2YW50IHRyYWZmaWMgaW4gc2VhcmNoIGVuZ2luZXMuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBpbWdTcmM6IFNlY3VyZSxcclxuICAgICAgYWx0VGV4dDogJ09mZi1QYWdlIFNFTycsXHJcbiAgICAgIHRpdGxlOiAnT2ZmLVBhZ2UgU0VPJyxcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnV2UgaW1wYWN0IHlvdXIgcmFua2luZ3MgYnkgdGVsbGluZyBzZWFyY2ggZW5naW5lcyB0aGF0IHlvdXIgd2Vic2l0ZSBpcyBpbXBvcnRhbnQgdG8gb3RoZXJzIG9uIHRoZSB3ZWIuJyxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnZpY2VTZWN0aW9uKCkge1xyXG4gIGNvbnN0W3ZpZGVvT3Blbiwgc2V0VmlkZW9PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgc2V0VmlkZW9PcGVuKHRydWUpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24uc2VydmljZXMnfX0+XHJcbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJCb3h9PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy50aHVtYm5haWx9PlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17U2VydmljZVRodW1ifSBhbHQ9XCJUaHVtYm5haWxcIi8+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBzeD17c3R5bGVzLnZpZGVvQnRufVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQbGF5IEJ1dHRvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxJb0lvc1BsYXkgLz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuc2hhcGVCb3h9PlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3NoYXBlUGF0dGVybn0gYWx0PVwic2hhcGVcIi8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cclxuICAgICAgICAgIDxUZXh0RmVhdHVyZSBzdWJUaXRsZT17ZGF0YS5zdWJUaXRsZX0gdGl0bGU9e2RhdGEudGl0bGV9Lz5cclxuXHJcbiAgICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgICB7ZGF0YS5mZWF0dXJlcy5tYXAoKGZlYXR1cmUpID0+IChcclxuICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0ga2V5PXtmZWF0dXJlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17ZmVhdHVyZS5pbWdTcmN9IGFsdD17ZmVhdHVyZS5hbHRUZXh0fSBzeD17c3R5bGVzLmljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9PntmZWF0dXJlLnRpdGxlfTwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PntmZWF0dXJlLnN1YlRpdGxlfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPE1vZGFsVmlkZW8gXHJcbiAgICAgICAgY2hhbm5lbD1cInlvdXR1YmVcIlxyXG4gICAgICAgIGlzT3Blbj17dmlkZW9PcGVufVxyXG4gICAgICAgIHZpZGVvSWQ9XCIwZUtWaXp2WVNVUVwiXHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0VmlkZW9PcGVuKGZhbHNlKX1cclxuICAgICAgLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBwbGF5UGx1c2UgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDApIHNjYWxlKDEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDApIHNjYWxlKDEuNSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjb3JlRmVhdHVyZToge1xyXG4gICAgcHk6IFswLCBudWxsLCBudWxsLCAyLCBudWxsLCA3XSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIH0sXHJcbiAgY29udGFpbmVyQm94OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiBbJ2ZsZXgtc3RhcnQnLCBudWxsLCBudWxsLCAnY2VudGVyJ10sXHJcbiAgICBqdXN0aWZ5Q29udGVudDogWydmbGV4LXN0YXJ0JywgbnVsbCwgbnVsbCwgJ3NwYWNlLWJldHdlZW4nXSxcclxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgbnVsbCwgJ3JvdyddLFxyXG4gICAgcGI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA3XSxcclxuICB9LFxyXG4gIHRodW1ibmFpbDoge1xyXG4gICAgbXI6IFsnYXV0bycsIG51bGwsIG51bGwsIDYsIDYwLCA4NV0sXHJcbiAgICBvcmRlcjogWzIsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgbWw6IFsnYXV0bycsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgJz4gaW1nJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgekluZGV4OiAxLFxyXG4gICAgICBoZWlnaHQ6IFszMTAsICdhdXRvJ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2hhcGVCb3g6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgYm90dG9tOiAtNjgsXHJcbiAgICBsZWZ0OiAtMTYwLFxyXG4gICAgekluZGV4OiAtMSxcclxuICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcclxuICB9LFxyXG4gIHZpZGVvQnRuOiB7XHJcbiAgICB6SW5kZXg6IDIsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgdG9wOiAnNTAlJyxcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICB3aWR0aDogWyc2MHB4JywgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTAwcHgnXSxcclxuICAgIGhlaWdodDogWyc2MHB4JywgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTAwcHgnXSxcclxuICAgIHA6ICcwcHggIWltcG9ydGFudCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAnJjo6YmVmb3JlJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgdG9wOiAnNTAlJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpJyxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgd2lkdGg6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXHJcbiAgICAgIGhlaWdodDogWyc2MHB4JywgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTAwcHgnXSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgIGFuaW1hdGlvbjogYCR7cGxheVBsdXNlfSAxLjVzIGVhc2Utb3V0IGluZmluaXRlYCxcclxuICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgfSxcclxuICAgICc+IHNwYW4nOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC41KScsXHJcbiAgICAgIHdpZHRoOiAnaW5oZXJpdCcsXHJcbiAgICAgIGhlaWdodDogJ2luaGVyaXQnLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjVzJyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgekluZGV4OiAyLFxyXG4gICAgfSxcclxuICAgIHN2Zzoge1xyXG4gICAgICBmb250U2l6ZTogWzQwLCBudWxsLCA0OCwgbnVsbCwgNjJdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbnRlbnRCb3g6IHtcclxuICAgIHdpZHRoOiBbJzEwMCUnLCBudWxsLCBudWxsLCAzMTUsIDM5MCwgNDUwLCBudWxsLCA1MDBdLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIG1iOiBbNywgbnVsbCwgNjAsIDBdLFxyXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBwcjogWzIsIDAsIG51bGwsIG51bGwsIDYsICc3MHB4J10sXHJcbiAgICBwbDogWzIsIDBdLFxyXG4gICAgcHQ6IFsyLCBudWxsLCBudWxsLCBudWxsLCAzXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICB3aWR0aDogWycxMDAlJywgMzcwLCA0MjAsICcxMDAlJ10sXHJcbiAgICBncmlkR2FwOiBbJzM1cHggMCcsIG51bGwsIG51bGwsIG51bGwsICc1MHB4IDAnXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFsncmVwZWF0KDEsMWZyKSddLFxyXG4gIH0sXHJcbiAgY2FyZDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcclxuICB9LFxyXG5cclxuICBpY29uOiB7XHJcbiAgICB3aWR0aDogWyc0NXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzU1cHgnXSxcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIG1yOiBbMywgbnVsbCwgbnVsbCwgbnVsbCwgNF0sXHJcbiAgfSxcclxuICB3cmFwcGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgIG10OiAnLTVweCcsXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMyxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBtYjogWzIsIG51bGwsIDMsIDIsIDNdLFxyXG4gICAgfSxcclxuXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsICcxNHB4JywgMV0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgbGluZUhlaWdodDogMS45LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHZpZGVvV3JhcHBlcjoge1xyXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgd2lkdGg6ICc5MDBweCcsXHJcbiAgICAnJjpiZWZvcmUnOiB7XHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgcGFkZGluZ1RvcDogJzU2LjI1JScsXHJcbiAgICB9LFxyXG4gICAgaWZyYW1lOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9