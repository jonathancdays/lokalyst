module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)(as, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
    }

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/',
  decode: decodeParam
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys, matcherOptions);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

function decodeParam(param) {
  try {
    return decodeURIComponent(param);
  } catch (_) {
    const err = new Error('failed to decode param');
    err.code = 'DECODE_FAILED';
    throw err;
  }
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      searchParams,
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  parsedDestination.query = (0, _querystring.searchParamsToUrlQuery)(parsedDestination.searchParams);
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${encodeURI(destinationCompiler(params))}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
    delete parsedDestination.searchParams;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes(asPath)) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/assets/arrowEven.svg":
/*!**********************************!*\
  !*** ./src/assets/arrowEven.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA0IiBoZWlnaHQ9IjQzIiB2aWV3Qm94PSIwIDAgMjA0IDQzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTAuNDgxMjAxIDEwLjI1NzFDMC40ODEyMDEgMTAuMjU3MSA5Mi43ODEyIDgxLjc4NDcgMTk1LjQ4MSAxMC4yNTcxIiBzdHJva2U9IiNDMkNCREUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtZGFzaGFycmF5PSI1IDUiLz4NCjxwYXRoIGQ9Ik0xODAuNyAzLjQ3NDU1QzE4MC43IDMuNDc0NTUgMTk5LjgxNSAtMi4wNTE3NyAyMDEuNjM3IDQuMjA5MTZDMjAzLjQ1OSAxMC40NzAxIDIwMi4wOTMgMTYuOTQ0NCAxOTYuMTc2IDI1LjgxNDIiIHN0cm9rZT0iI0MyQ0JERSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1kYXNoYXJyYXk9IjQgNCIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./src/assets/arrowOdd.svg":
/*!*********************************!*\
  !*** ./src/assets/arrowOdd.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA0IiBoZWlnaHQ9IjQzIiB2aWV3Qm94PSIwIDAgMjA0IDQzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTAuOTk5NzU2IDMyLjcxOTVDMC45OTk3NTYgMzIuNzE5NSA5My4yOTk4IC0zOC44MDgxIDE5NiAzMi43MTk1IiBzdHJva2U9IiNDMkNCREUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtZGFzaGFycmF5PSI1IDUiLz4NCjxwYXRoIGQ9Ik0xODEuMjE5IDM5LjQ5NzZDMTgxLjIxOSAzOS40OTc2IDIwMC4zMzQgNDUuMDI0IDIwMi4xNTYgMzguNzYzQzIwMy45NzggMzIuNTAxOSAyMDIuNjExIDI2LjAyNzUgMTk2LjY5NCAxNy4xNTc1IiBzdHJva2U9IiNDMkNCREUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtZGFzaGFycmF5PSI0IDQiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/banner-thumb.png":
/*!*************************************!*\
  !*** ./src/assets/banner-thumb.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-thumb-38cb8b737a80b4c820909015266783f0.png";

/***/ }),

/***/ "./src/assets/core-feature.png":
/*!*************************************!*\
  !*** ./src/assets/core-feature.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/core-feature-749dc086eec25ac14ed0c92a6876d29e.png";

/***/ }),

/***/ "./src/assets/feature/partnership.svg":
/*!********************************************!*\
  !*** ./src/assets/feature/partnership.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTUiIGhlaWdodD0iMTA1IiB2aWV3Qm94PSIwIDAgOTUgMTA1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ny40OTk5IDE3Ljk5OTlDNjIuMTM1NSAxNy45OTk5IDczLjk5OTkgMjkuODY0NCA3My45OTk5IDQ0LjQ5OTlDNzMuOTk5OSA1OS4xMzUzIDYyLjEzNTUgNzAuOTk5OSA0Ny40OTk5IDcwLjk5OTlDMzIuODY0NCA3MC45OTk5IDIxIDU5LjEzNTMgMjEgNDQuNDk5OUMyMSAyOS44NjQ0IDMyLjg2NDQgMTcuOTk5OSA0Ny40OTk5IDE3Ljk5OTlaIiBmaWxsPSIjRkY0MzYxIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ3LjQ5OTkgMTcuOTk5OUM2Mi4xMzU1IDE3Ljk5OTkgNzMuOTk5OSAyOS44NjQ0IDczLjk5OTkgNDQuNDk5OUM3My45OTk5IDU5LjEzNTMgNjIuMTM1NSA3MC45OTk5IDQ3LjQ5OTkgNzAuOTk5OUMzMi44NjQ0IDcwLjk5OTkgMjEgNTkuMTM1MyAyMSA0NC40OTk5QzIxIDI5Ljg2NDQgMzIuODY0NCAxNy45OTk5IDQ3LjQ5OTkgMTcuOTk5OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4NCjwvZz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDMgMC45OTk5MzZINTIuOTk5OUM2OS41Njg1IDAuOTk5OTM2IDgyLjk5OTkgMTQuNDMxMSA4Mi45OTk5IDMwLjk5OTlWNDAuOTk5OUM4Mi45OTk5IDU3LjU2ODIgNjkuNTY4NSA3MC45OTk4IDUyLjk5OTkgNzAuOTk5OEg0M0MyNi40MzE1IDcwLjk5OTggMTIuOTk5OSA1Ny41NjgyIDEyLjk5OTkgNDAuOTk5OVYzMC45OTk5QzEyLjk5OTkgMTQuNDMxMSAyNi40MzE1IDAuOTk5OTM2IDQzIDAuOTk5OTM2WiIgZmlsbD0iI0ZGNDM2MSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MyAwLjk5OTkzNkg1Mi45OTk5QzY5LjU2ODUgMC45OTk5MzYgODIuOTk5OSAxNC40MzExIDgyLjk5OTkgMzAuOTk5OVY0MC45OTk5QzgyLjk5OTkgNTcuNTY4MiA2OS41Njg1IDcwLjk5OTggNTIuOTk5OSA3MC45OTk4SDQzQzI2LjQzMTUgNzAuOTk5OCAxMi45OTk5IDU3LjU2ODIgMTIuOTk5OSA0MC45OTk5VjMwLjk5OTlDMTIuOTk5OSAxNC40MzExIDI2LjQzMTUgMC45OTk5MzYgNDMgMC45OTk5MzZaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUxLjQzMjIgNDEuNjM5OEM1MS42NDQxIDQxLjQyNDcgNTEuNzUwMiA0MS4xNzA5IDUxLjc1MDIgNDAuODc3NFYzOC4xNjg4SDYzVjQ2LjI5NTJDNjMgNDcuMDM5MiA2Mi43Mzc5IDQ3LjY3NzQgNjIuMjEzMiA0OC4yMDc1QzYxLjY4ODcgNDguNzM4MSA2MS4wNTgxIDQ5LjAwMzIgNjAuMzIxNiA0OS4wMDMySDM1LjY3ODdDMzQuOTQyIDQ5LjAwMzIgMzQuMzExNCA0OC43MzgxIDMzLjc4NjkgNDguMjA3NUMzMy4yNjIyIDQ3LjY3NzQgMzMgNDcuMDM5MiAzMyA0Ni4yOTUyVjM4LjE2ODhINDQuMjVWNDAuODc3NEM0NC4yNSA0MS4xNzA5IDQ0LjM1NjEgNDEuNDI0NyA0NC41NjgyIDQxLjYzOThDNDQuNzgwMiA0MS44NTM3IDQ1LjAzMTMgNDEuOTYxMyA0NS4zMjE2IDQxLjk2MTNINTAuNjc4N0M1MC45Njg4IDQxLjk2MTMgNTEuMjIwMSA0MS44NTM3IDUxLjQzMjIgNDEuNjM5OFpNNTAuMTQzMSAzOC4xNjg4SDQ1Ljg1NzFWNDAuMzM1NUg1MC4xNDMxVjM4LjE2ODhaTTYyLjIxMzIgMjguMTMwMUM2MS42ODg3IDI3LjU5ODkgNjEuMDU4MSAyNy4zMzM5IDYwLjMyMTYgMjcuMzMzOUg1NC40Mjg1VjI0LjYyNTNDNTQuNDI4NSAyNC4xNzM3IDU0LjI3MjQgMjMuNzkwMyA1My45NTk4IDIzLjQ3MzdDNTMuNjQ3NSAyMy4xNTg2IDUzLjI2NzggMjMgNTIuODIxNiAyM0g0My4xNzg3QzQyLjczMjMgMjMgNDIuMzUyOSAyMy4xNTg2IDQyLjA0MDQgMjMuNDczN0M0MS43Mjc4IDIzLjc4OTggNDEuNTcxNiAyNC4xNzM3IDQxLjU3MTYgMjQuNjI1M1YyNy4zMzM5SDM1LjY3ODdDMzQuOTQyIDI3LjMzMzkgMzQuMzExNCAyNy41OTg5IDMzLjc4NjkgMjguMTMwMUMzMy4yNjIyIDI4LjY1OTcgMzMgMjkuMjk3MyAzMyAzMC4wNDI1VjM2LjU0MzVINjNWMzAuMDQyNUM2MyAyOS4yOTczIDYyLjczNzkgMjguNjU5NyA2Mi4yMTMyIDI4LjEzMDFaTTUyLjI4NTggMjcuMzMzOUg0My43MTQ0VjI1LjE2NjdINTIuMjg1OFYyNy4zMzM5WiIgZmlsbD0id2hpdGUiLz4NCjxkZWZzPg0KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSItMy4wNTE3NmUtMDUiIHk9IjkuOTk5ODgiIHdpZHRoPSI5NSIgaGVpZ2h0PSI5NSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPg0KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4NCjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+DQo8ZmVPZmZzZXQgZHk9IjEzIi8+DQo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMC41Ii8+DQo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAxIDAgMCAwIDAgMC4yNjY2NjcgMCAwIDAgMCAwLjM0MTE3NiAwIDAgMCAwLjMgMCIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+DQo8L2ZpbHRlcj4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjUxLjYzNTEiIHkxPSIxMDMuNjM1IiB4Mj0iMTA2LjYzNSIgeTI9IjQwLjM2NDkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiNGODA3NTkiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0JDNEU5QyIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjUzLjQxMzIiIHkxPSIxMTMuNDEzIiB4Mj0iMTI1LjQxMyIgeTI9IjMwLjU4NjgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiNGRjQxNkMiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNEIyQiIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjwvZGVmcz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/feature/performance.svg":
/*!********************************************!*\
  !*** ./src/assets/feature/performance.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTUiIGhlaWdodD0iMTA0IiB2aWV3Qm94PSIwIDAgOTUgMTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ny41IDE2Ljk5OTlDNjIuMTM1NSAxNi45OTk5IDczLjk5OTkgMjguODY0NCA3My45OTk5IDQzLjQ5OTlDNzMuOTk5OSA1OC4xMzUzIDYyLjEzNTUgNjkuOTk5OSA0Ny41IDY5Ljk5OTlDMzIuODY0NCA2OS45OTk5IDIxIDU4LjEzNTMgMjEgNDMuNDk5OUMyMSAyOC44NjQ0IDMyLjg2NDQgMTYuOTk5OSA0Ny41IDE2Ljk5OTlaIiBmaWxsPSIjRkY0MzYxIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ3LjUgMTYuOTk5OUM2Mi4xMzU1IDE2Ljk5OTkgNzMuOTk5OSAyOC44NjQ0IDczLjk5OTkgNDMuNDk5OUM3My45OTk5IDU4LjEzNTMgNjIuMTM1NSA2OS45OTk5IDQ3LjUgNjkuOTk5OUMzMi44NjQ0IDY5Ljk5OTkgMjEgNTguMTM1MyAyMSA0My40OTk5QzIxIDI4Ljg2NDQgMzIuODY0NCAxNi45OTk5IDQ3LjUgMTYuOTk5OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4NCjwvZz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDIgMC45OTk5MzZINTEuOTk5OUM2OC41Njg1IDAuOTk5OTM2IDgxLjk5OTkgMTQuNDMxMSA4MS45OTk5IDMwLjk5OTlWNDAuOTk5OUM4MS45OTk5IDU3LjU2ODIgNjguNTY4NSA3MC45OTk4IDUxLjk5OTkgNzAuOTk5OEg0MkMyNS40MzE1IDcwLjk5OTggMTEuOTk5OSA1Ny41NjgyIDExLjk5OTkgNDAuOTk5OVYzMC45OTk5QzExLjk5OTkgMTQuNDMxMSAyNS40MzE1IDAuOTk5OTM2IDQyIDAuOTk5OTM2WiIgZmlsbD0iI0ZGNDM2MSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MiAwLjk5OTkzNkg1MS45OTk5QzY4LjU2ODUgMC45OTk5MzYgODEuOTk5OSAxNC40MzExIDgxLjk5OTkgMzAuOTk5OVY0MC45OTk5QzgxLjk5OTkgNTcuNTY4MiA2OC41Njg1IDcwLjk5OTggNTEuOTk5OSA3MC45OTk4SDQyQzI1LjQzMTUgNzAuOTk5OCAxMS45OTk5IDU3LjU2ODIgMTEuOTk5OSA0MC45OTk5VjMwLjk5OTlDMTEuOTk5OSAxNC40MzExIDI1LjQzMTUgMC45OTk5MzYgNDIgMC45OTk5MzZaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTU1Ljk0OTIgMzEuMDAyNkM1NS44NTc1IDMwLjc5NzIgNTUuNjYwMiAzMC42NjU1IDU1LjQ0MjkgMzAuNjY1NUg0OC44MjA5TDU1LjM1NjMgMTkuODk0QzU1LjQ2NTIgMTkuNzE0NCA1NS40NzE4IDE5LjQ4NyA1NS4zNzM1IDE5LjMwMTVDNTUuMjc1MiAxOS4xMTQ0IDU1LjA4NzQgMTguOTk4OCA1NC44ODQgMTguOTk4OEg0NS45NDI5QzQ1LjczMTIgMTguOTk4OCA0NS41Mzc4IDE5LjEyMzYgNDUuNDQyOCAxOS4zMjE0TDM3LjA2MDYgMzYuODIxNEMzNi45NzQgMzcuMDAyMSAzNi45ODM1IDM3LjIxNjYgMzcuMDg1MSAzNy4zODg2QzM3LjE4NzQgMzcuNTYwNyAzNy4zNjY3IDM3LjY2NSAzNy41NjA3IDM3LjY2NUg0My4zMDdMMzcuMDQ1NSA1My4xODkxQzM2LjkzODcgNTMuNDU0NyAzNy4wMzM3IDUzLjc2MjMgMzcuMjY5IDUzLjkxMzNDMzcuMzU5NCA1My45NzAzIDM3LjQ2IDUzLjk5ODggMzcuNTYwMSA1My45OTg4QzM3LjcyMDQgNTMuOTk4OCAzNy44Nzg2IDUzLjkyNjggMzcuOTg4MSA1My43OTE4TDU1Ljg3MDMgMzEuNjI1MkM1Ni4wMTA2IDMxLjQ1MTUgNTYuMDQwNyAzMS4yMDg1IDU1Ljk0OTIgMzEuMDAyNloiIGZpbGw9IndoaXRlIi8+DQo8ZGVmcz4NCjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgeD0iLTMuMDUxNzZlLTA1IiB5PSI4Ljk5OTg4IiB3aWR0aD0iOTUiIGhlaWdodD0iOTUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4NCjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+DQo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPg0KPGZlT2Zmc2V0IGR5PSIxMyIvPg0KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTAuNSIvPg0KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC44OTgwMzkgMCAwIDAgMCAwLjExNzY0NyAwIDAgMCAwIDAuNDM1Mjk0IDAgMCAwIDAuMyAwIi8+DQo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4NCjwvZmlsdGVyPg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iNTEuNjM1MSIgeTE9IjEwMi42MzUiIHgyPSIxMDYuNjM1IiB5Mj0iMzkuMzY0OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iI0Y4MDc1OSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQkM0RTlDIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyIiB4MT0iNTIuNDEzMiIgeTE9IjExMy40MTMiIHgyPSIxMjQuNDEzIiB5Mj0iMzAuNTg2OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KPHN0b3Agc3RvcC1jb2xvcj0iI0Y4MDc1OSIvPg0KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQkM0RTlDIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPC9kZWZzPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./src/assets/feature/subscription.svg":
/*!*********************************************!*\
  !*** ./src/assets/feature/subscription.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTUiIGhlaWdodD0iMTA0IiB2aWV3Qm94PSIwIDAgOTUgMTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ny40OTk5IDE2Ljk5OTlDNjIuMTM1NCAxNi45OTk5IDc0IDI4Ljg2NDQgNzQgNDMuNDk5OUM3NCA1OC4xMzUzIDYyLjEzNTQgNjkuOTk5OSA0Ny40OTk5IDY5Ljk5OTlDMzIuODY0NCA2OS45OTk5IDIxIDU4LjEzNTMgMjEgNDMuNDk5OUMyMSAyOC44NjQ0IDMyLjg2NDQgMTYuOTk5OSA0Ny40OTk5IDE2Ljk5OTlaIiBmaWxsPSIjRkY0MzYxIi8+DQo8L2c+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQxLjk5OTkgMC45OTk5MzZINTJDNjguNTY4NSAwLjk5OTkzNiA4MiAxNC40MzExIDgyIDMwLjk5OTlWNDAuOTk5OUM4MiA1Ny41NjgyIDY4LjU2ODUgNzAuOTk5OCA1MiA3MC45OTk4SDQxLjk5OTlDMjUuNDMxNCA3MC45OTk4IDExLjk5OTkgNTcuNTY4MiAxMS45OTk5IDQwLjk5OTlWMzAuOTk5OUMxMS45OTk5IDE0LjQzMTEgMjUuNDMxNCAwLjk5OTkzNiA0MS45OTk5IDAuOTk5OTM2WiIgZmlsbD0iI0ZGNDM2MSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MS45OTk5IDAuOTk5OTM2SDUyQzY4LjU2ODUgMC45OTk5MzYgODIgMTQuNDMxMSA4MiAzMC45OTk5VjQwLjk5OTlDODIgNTcuNTY4MiA2OC41Njg1IDcwLjk5OTggNTIgNzAuOTk5OEg0MS45OTk5QzI1LjQzMTQgNzAuOTk5OCAxMS45OTk5IDU3LjU2ODIgMTEuOTk5OSA0MC45OTk5VjMwLjk5OTlDMTEuOTk5OSAxNC40MzExIDI1LjQzMTQgMC45OTk5MzYgNDEuOTk5OSAwLjk5OTkzNloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjQuNTQ0MSAzMS44NTg1QzY0LjU0OTggMzEuOTYwNyA2NC41NDI0IDMyLjA2NDQgNjQuNTE2OCAzMi4xNjg3TDYyLjIzNDYgNDEuMzM0OEM2Mi4xMTk0IDQxLjc5NjEgNjEuNzA3MiA0Mi4xMjE0IDYxLjIzMzQgNDIuMTI0MUw0Ny41Mzk5IDQyLjE5MzRDNDcuNTM4MiA0Mi4xOTM0IDQ3LjUzNjQgNDIuMTkzNCA0Ny41MzQ2IDQyLjE5MzRIMzMuODQxMUMzMy4zNjQ2IDQyLjE5MzQgMzIuOTQ5NiA0MS44NjcxIDMyLjgzNDYgNDEuNDAzMUwzMC41NTIzIDMyLjIwMkMzMC41MjU5IDMyLjA5NTYgMzAuNTE4NCAzMS45ODg2IDMwLjUyNSAzMS44ODM4QzI5LjY0MjEgMzEuNjA0NyAyOSAzMC43NzUyIDI5IDI5Ljc5NzdDMjkgMjguNTkwOCAyOS45NzcyIDI3LjYwOTYgMzEuMTc4NSAyNy42MDk2QzMyLjM3OTggMjcuNjA5NiAzMy4zNTcgMjguNTkwOCAzMy4zNTcgMjkuNzk3N0MzMy4zNTcgMzAuNDc2OCAzMy4wNDcgMzEuMDg0MyAzMi41NjE2IDMxLjQ4NjRMMzUuNDE5IDM0LjM3NjhDMzYuMTQxMiAzNS4xMDc0IDM3LjE0MzIgMzUuNTI2OCAzOC4xNjg0IDM1LjUyNjhDMzkuMzgwNyAzNS41MjY4IDQwLjUzNjQgMzQuOTQ4MyA0MS4yNjQzIDMzLjk4TDQ1Ljk2MDIgMjcuNzMyMUM0NS41NjU4IDI3LjMzNjUgNDUuMzIxNCAyNi43ODk3IDQ1LjMyMTQgMjYuMTg2NUM0NS4zMjE0IDI0Ljk4IDQ2LjI5ODYgMjMuOTk4MyA0Ny40OTk5IDIzLjk5ODNDNDguNzAxMiAyMy45OTgzIDQ5LjY3ODQgMjQuOTggNDkuNjc4NCAyNi4xODY1QzQ5LjY3ODQgMjYuNzcxNCA0OS40NDcyIDI3LjMwMiA0OS4wNzMzIDI3LjY5NUM0OS4wNzQ1IDI3LjY5NjcgNDkuMDc2MSAyNy42OTgzIDQ5LjA3NzMgMjcuNjk5OUw1My43MzkxIDMzLjk2NDlDNTQuNDY2OCAzNC45NDI0IDU1LjYyNjYgMzUuNTI2OCA1Ni44NDIzIDM1LjUyNjhDNTcuODc3IDM1LjUyNjggNTguODUgMzUuMTIxOSA1OS41ODE0IDM0LjM4NzVMNjIuNDU2OCAzMS40OTk5QzYxLjk2MTIgMzEuMDk4MyA2MS42NDI5IDMwLjQ4NTQgNjEuNjQyOSAyOS43OTc3QzYxLjY0MjkgMjguNTkwOCA2Mi42MjAyIDI3LjYwOTYgNjMuODIxNSAyNy42MDk2QzY1LjAyMjcgMjcuNjA5NiA2NiAyOC41OTA4IDY2IDI5Ljc5NzdDNjYgMzAuNzQ4OCA2NS4zOTA2IDMxLjU1ODUgNjQuNTQ0MSAzMS44NTg1Wk02Mi4wMTE4IDQ1LjQ1NjlDNjIuMDExOCA0NC44ODIxIDYxLjU0NzMgNDQuNDE1NSA2MC45NzQ0IDQ0LjQxNTVIMzQuMTQwOEMzMy41Njc5IDQ0LjQxNTUgMzMuMTAzNCA0NC44ODIxIDMzLjEwMzQgNDUuNDU2OVY0Ny45NTY5QzMzLjEwMzQgNDguNTMyNyAzMy41Njc5IDQ4Ljk5ODggMzQuMTQwOCA0OC45OTg4SDYwLjk3NDRDNjEuNTQ3MyA0OC45OTg4IDYyLjAxMTggNDguNTMyNyA2Mi4wMTE4IDQ3Ljk1NjlWNDUuNDU2OVoiIGZpbGw9IndoaXRlIi8+DQo8ZGVmcz4NCjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgeD0iMS4xNDQ0MWUtMDUiIHk9IjguOTk5ODgiIHdpZHRoPSI5NSIgaGVpZ2h0PSI5NSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPg0KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4NCjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+DQo8ZmVPZmZzZXQgZHk9IjEzIi8+DQo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMC41Ii8+DQo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwLjk5MjE1NyAwIDAgMCAwIDAuMzQ1MDk4IDAgMCAwIDAgMC40NDcwNTkgMCAwIDAgMC4zIDAiLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+DQo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPg0KPC9maWx0ZXI+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI1Mi40MTMyIiB5MT0iMTEzLjQxMyIgeDI9IjEyNC40MTMiIHkyPSIzMC41ODY4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjRkY1ODU4Ii8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGODU3QTYiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./src/assets/feature/support.svg":
/*!****************************************!*\
  !*** ./src/assets/feature/support.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTUiIGhlaWdodD0iMTA1IiB2aWV3Qm94PSIwIDAgOTUgMTA1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ny40OTk5IDE3Ljk5OTlDNjIuMTM1NCAxNy45OTk5IDczLjk5OTkgMjkuODY0NCA3My45OTk5IDQ0LjQ5OTlDNzMuOTk5OSA1OS4xMzUzIDYyLjEzNTQgNzAuOTk5OSA0Ny40OTk5IDcwLjk5OTlDMzIuODY0NCA3MC45OTk5IDIwLjk5OTkgNTkuMTM1MyAyMC45OTk5IDQ0LjQ5OTlDMjAuOTk5OSAyOS44NjQ0IDMyLjg2NDQgMTcuOTk5OSA0Ny40OTk5IDE3Ljk5OTlaIiBmaWxsPSIjRkY0MzYxIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ3LjQ5OTkgMTcuOTk5OUM2Mi4xMzU0IDE3Ljk5OTkgNzMuOTk5OSAyOS44NjQ0IDczLjk5OTkgNDQuNDk5OUM3My45OTk5IDU5LjEzNTMgNjIuMTM1NCA3MC45OTk5IDQ3LjQ5OTkgNzAuOTk5OUMzMi44NjQ0IDcwLjk5OTkgMjAuOTk5OSA1OS4xMzUzIDIwLjk5OTkgNDQuNDk5OUMyMC45OTk5IDI5Ljg2NDQgMzIuODY0NCAxNy45OTk5IDQ3LjQ5OTkgMTcuOTk5OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4NCjwvZz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDIuOTk5OSAwLjk5OTkzNkg1M0M2OS41Njg1IDAuOTk5OTM2IDgzIDE0LjQzMTEgODMgMzAuOTk5OVY0MC45OTk5QzgzIDU3LjU2ODIgNjkuNTY4NSA3MC45OTk4IDUzIDcwLjk5OThINDIuOTk5OUMyNi40MzE0IDcwLjk5OTggMTIuOTk5OSA1Ny41NjgyIDEyLjk5OTkgNDAuOTk5OVYzMC45OTk5QzEyLjk5OTkgMTQuNDMxMSAyNi40MzE0IDAuOTk5OTM2IDQyLjk5OTkgMC45OTk5MzZaIiBmaWxsPSIjRkY0MzYxIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjk5OTkgMC45OTk5MzZINTNDNjkuNTY4NSAwLjk5OTkzNiA4MyAxNC40MzExIDgzIDMwLjk5OTlWNDAuOTk5OUM4MyA1Ny41NjgyIDY5LjU2ODUgNzAuOTk5OCA1MyA3MC45OTk4SDQyLjk5OTlDMjYuNDMxNCA3MC45OTk4IDEyLjk5OTkgNTcuNTY4MiAxMi45OTk5IDQwLjk5OTlWMzAuOTk5OUMxMi45OTk5IDE0LjQzMTEgMjYuNDMxNCAwLjk5OTkzNiA0Mi45OTk5IDAuOTk5OTM2WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyKSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02MC4wOTk5IDIxLjk5OTRIMzYuOUMzNS4zMDQ5IDIxLjk5OTQgMzMuOTk5OSAyMy4zMDM3IDMzLjk5OTkgMjQuODk4OFY1MC45OTg4TDM5Ljc5OTkgNDUuMTk4OEg2MC4wOTk5QzYxLjY5NSA0NS4xOTg4IDYyLjk5OTkgNDMuODk0IDYyLjk5OTkgNDIuMjk4OFYyNC44OTg4QzYyLjk5OTkgMjMuMzAzNyA2MS42OTUgMjEuOTk5NCA2MC4wOTk5IDIxLjk5OTRaIiBmaWxsPSIjRkVGQUZDIi8+DQo8ZGVmcz4NCjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgeD0iLTkuOTE4MjFlLTA1IiB5PSI5Ljk5OTg4IiB3aWR0aD0iOTUiIGhlaWdodD0iOTUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4NCjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+DQo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPg0KPGZlT2Zmc2V0IGR5PSIxMyIvPg0KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTAuNSIvPg0KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC45NDkwMiAwIDAgMCAwIDAuNTAxOTYxIDAgMCAwIDAgMC4yNzQ1MSAwIDAgMCAwLjMgMCIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+DQo8L2ZpbHRlcj4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjUxLjYzNTEiIHkxPSIxMDMuNjM1IiB4Mj0iMTA2LjYzNSIgeTI9IjQwLjM2NDkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiNGODA3NTkiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0JDNEU5QyIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjUzLjQxMzIiIHkxPSIxMTMuNDEzIiB4Mj0iMTI1LjQxMyIgeTI9IjMwLjU4NjgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiNGNDZCNDUiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0VFQTg0OSIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjwvZGVmcz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/key-feature/partnership.svg":
/*!************************************************!*\
  !*** ./src/assets/key-feature/partnership.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iMTA0IiB2aWV3Qm94PSIwIDAgOTYgMTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00OC4yMTQyIDE2Ljk5OTlDNjIuODM2NyAxNi45OTk5IDc0LjY5MDUgMjguODY0NCA3NC42OTA1IDQzLjQ5OTlDNzQuNjkwNSA1OC4xMzUzIDYyLjgzNjcgNjkuOTk5OSA0OC4yMTQyIDY5Ljk5OTlDMzMuNTkxOSA2OS45OTk5IDIxLjczODEgNTguMTM1MyAyMS43MzgxIDQzLjQ5OTlDMjEuNzM4MSAyOC44NjQ0IDMzLjU5MTkgMTYuOTk5OSA0OC4yMTQyIDE2Ljk5OTlaIiBmaWxsPSIjRkY0MzYxIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ4LjIxNDIgMTYuOTk5OUM2Mi44MzY3IDE2Ljk5OTkgNzQuNjkwNSAyOC44NjQ0IDc0LjY5MDUgNDMuNDk5OUM3NC42OTA1IDU4LjEzNTMgNjIuODM2NyA2OS45OTk5IDQ4LjIxNDIgNjkuOTk5OUMzMy41OTE5IDY5Ljk5OTkgMjEuNzM4MSA1OC4xMzUzIDIxLjczODEgNDMuNDk5OUMyMS43MzgxIDI4Ljg2NDQgMzMuNTkxOSAxNi45OTk5IDQ4LjIxNDIgMTYuOTk5OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4NCjwvZz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDIuNzIwMiAwLjk5OTkzNkg1Mi43MTEyQzY5LjI2NDkgMC45OTk5MzYgODIuNjg0MyAxNC40MzExIDgyLjY4NDMgMzAuOTk5OVY0MC45OTk5QzgyLjY4NDMgNTcuNTY4MiA2OS4yNjQ5IDcwLjk5OTggNTIuNzExMiA3MC45OTk4SDQyLjcyMDJDMjYuMTY2NiA3MC45OTk4IDEyLjc0NzIgNTcuNTY4MiAxMi43NDcyIDQwLjk5OTlWMzAuOTk5OUMxMi43NDcyIDE0LjQzMTEgMjYuMTY2NiAwLjk5OTkzNiA0Mi43MjAyIDAuOTk5OTM2WiIgZmlsbD0iI0ZGNDM2MSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi43MjAyIDAuOTk5OTM2SDUyLjcxMTJDNjkuMjY0OSAwLjk5OTkzNiA4Mi42ODQzIDE0LjQzMTEgODIuNjg0MyAzMC45OTk5VjQwLjk5OTlDODIuNjg0MyA1Ny41NjgyIDY5LjI2NDkgNzAuOTk5OCA1Mi43MTEyIDcwLjk5OThINDIuNzIwMkMyNi4xNjY2IDcwLjk5OTggMTIuNzQ3MiA1Ny41NjgyIDEyLjc0NzIgNDAuOTk5OVYzMC45OTk5QzEyLjc0NzIgMTQuNDMxMSAyNi4xNjY2IDAuOTk5OTM2IDQyLjcyMDIgMC45OTk5MzZaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUxLjE0NCA0MS42MzcxQzUxLjM1NTggNDEuNDIyIDUxLjQ2MTggNDEuMTY4MiA1MS40NjE4IDQwLjg3NDdWMzguMTY2MUg2Mi43MDE1VjQ2LjI5MjVDNjIuNzAxNSA0Ny4wMzY1IDYyLjQzOTYgNDcuNjc0NyA2MS45MTU0IDQ4LjIwNDhDNjEuMzkxNCA0OC43MzU0IDYwLjc2MTIgNDkuMDAwNSA2MC4wMjU1IDQ5LjAwMDVIMzUuNDA0N0MzNC42Njg3IDQ5LjAwMDUgMzQuMDM4NiA0OC43MzU0IDMzLjUxNDUgNDguMjA0OEMzMi45OTAzIDQ3LjY3NDcgMzIuNzI4NCA0Ny4wMzY1IDMyLjcyODQgNDYuMjkyNVYzOC4xNjYxSDQzLjk2ODNWNDAuODc0N0M0My45NjgzIDQxLjE2ODIgNDQuMDc0MyA0MS40MjIgNDQuMjg2MSA0MS42MzcxQzQ0LjQ5OCA0MS44NTEgNDQuNzQ4OSA0MS45NTg2IDQ1LjAzODkgNDEuOTU4Nkg1MC4zOTEyQzUwLjY4MTEgNDEuOTU4NiA1MC45MzIxIDQxLjg1MSA1MS4xNDQgNDEuNjM3MVpNNDkuODU2MSAzOC4xNjYxSDQ1LjU3MzlWNDAuMzMyOEg0OS44NTYxVjM4LjE2NjFaTTYxLjkxNTQgMjguMTI3NEM2MS4zOTE0IDI3LjU5NjIgNjAuNzYxMiAyNy4zMzEyIDYwLjAyNTUgMjcuMzMxMkg1NC4xMzc2VjI0LjYyMjZDNTQuMTM3NiAyNC4xNzEgNTMuOTgxNyAyMy43ODc2IDUzLjY2OTMgMjMuNDcxQzUzLjM1NzQgMjMuMTU1OSA1Mi45NzggMjIuOTk3MyA1Mi41MzIyIDIyLjk5NzNINDIuODk4QzQyLjQ1MTkgMjIuOTk3MyA0Mi4wNzI5IDIzLjE1NTkgNDEuNzYwNiAyMy40NzFDNDEuNDQ4NCAyMy43ODcxIDQxLjI5MjMgMjQuMTcxIDQxLjI5MjMgMjQuNjIyNlYyNy4zMzEySDM1LjQwNDdDMzQuNjY4NyAyNy4zMzEyIDM0LjAzODYgMjcuNTk2MiAzMy41MTQ1IDI4LjEyNzRDMzIuOTkwMyAyOC42NTcgMzIuNzI4NCAyOS4yOTQ2IDMyLjcyODQgMzAuMDM5OFYzNi41NDA4SDYyLjcwMTVWMzAuMDM5OEM2Mi43MDE1IDI5LjI5NDYgNjIuNDM5NiAyOC42NTcgNjEuOTE1NCAyOC4xMjc0Wk01MS45OTY5IDI3LjMzMTJINDMuNDMzMlYyNS4xNjRINTEuOTk2OVYyNy4zMzEyWiIgZmlsbD0id2hpdGUiLz4NCjxkZWZzPg0KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwLjczODA2OCIgeT0iOSIgd2lkdGg9Ijk0Ljk1MjQiIGhlaWdodD0iOTUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4NCjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+DQo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPg0KPGZlT2Zmc2V0IGR5PSIxMyIvPg0KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTAuNSIvPg0KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDAuMjY2NjY3IDAgMCAwIDAgMC4zNDExNzYgMCAwIDAgMC4zIDAiLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+DQo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPg0KPC9maWx0ZXI+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI1Mi4zNDU4IiB5MT0iMTAyLjYzNSIgeDI9IjEwNy4zNTMiIHkyPSIzOS40MTM4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjRjgwNzU5Ii8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNCQzRFOUMiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSI1My4xMjQyIiB5MT0iMTEzLjQxMyIgeDI9IjEyNS4xMzMiIHkyPSIzMC42NTA3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQo8c3RvcCBzdG9wLWNvbG9yPSIjRkY0MTZDIi8+DQo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjRCMkIiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./src/assets/key-feature/performance.svg":
/*!************************************************!*\
  !*** ./src/assets/key-feature/performance.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iMTA0IiB2aWV3Qm94PSIwIDAgOTYgMTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00OC40NjY0IDE2Ljk5OTlDNjMuMDg4NyAxNi45OTk5IDc0Ljk0MjUgMjguODY0NCA3NC45NDI1IDQzLjQ5OTlDNzQuOTQyNSA1OC4xMzUzIDYzLjA4ODcgNjkuOTk5OSA0OC40NjY0IDY5Ljk5OTlDMzMuODQzOSA2OS45OTk5IDIxLjk5MDEgNTguMTM1MyAyMS45OTAxIDQzLjQ5OTlDMjEuOTkwMSAyOC44NjQ0IDMzLjg0MzkgMTYuOTk5OSA0OC40NjY0IDE2Ljk5OTlaIiBmaWxsPSIjRkY0MzYxIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ4LjQ2NjQgMTYuOTk5OUM2My4wODg3IDE2Ljk5OTkgNzQuOTQyNSAyOC44NjQ0IDc0Ljk0MjUgNDMuNDk5OUM3NC45NDI1IDU4LjEzNTMgNjMuMDg4NyA2OS45OTk5IDQ4LjQ2NjQgNjkuOTk5OUMzMy44NDM5IDY5Ljk5OTkgMjEuOTkwMSA1OC4xMzUzIDIxLjk5MDEgNDMuNDk5OUMyMS45OTAxIDI4Ljg2NDQgMzMuODQzOSAxNi45OTk5IDQ4LjQ2NjQgMTYuOTk5OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4NCjwvZz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDIuOTcyMiAwLjk5OTkzNkg1Mi45NjMxQzY5LjUxNjggMC45OTk5MzYgODIuOTM2MiAxNC40MzExIDgyLjkzNjIgMzAuOTk5OVY0MC45OTk5QzgyLjkzNjIgNTcuNTY4MiA2OS41MTY4IDcwLjk5OTggNTIuOTYzMSA3MC45OTk4SDQyLjk3MjJDMjYuNDE4NSA3MC45OTk4IDEyLjk5OSA1Ny41NjgyIDEyLjk5OSA0MC45OTk5VjMwLjk5OTlDMTIuOTk5IDE0LjQzMTEgMjYuNDE4NSAwLjk5OTkzNiA0Mi45NzIyIDAuOTk5OTM2WiIgZmlsbD0iI0ZGNDM2MSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi45NzIyIDAuOTk5OTM2SDUyLjk2MzFDNjkuNTE2OCAwLjk5OTkzNiA4Mi45MzYyIDE0LjQzMTEgODIuOTM2MiAzMC45OTk5VjQwLjk5OTlDODIuOTM2MiA1Ny41NjgyIDY5LjUxNjggNzAuOTk5OCA1Mi45NjMxIDcwLjk5OThINDIuOTcyMkMyNi40MTg1IDcwLjk5OTggMTIuOTk5IDU3LjU2ODIgMTIuOTk5IDQwLjk5OTlWMzAuOTk5OUMxMi45OTkgMTQuNDMxMSAyNi40MTg1IDAuOTk5OTM2IDQyLjk3MjIgMC45OTk5MzZaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTU2LjkwOCAzMS4wMDI2QzU2LjgxNjQgMzAuNzk3MiA1Ni42MTkzIDMwLjY2NTUgNTYuNDAyMSAzMC42NjU1SDQ5Ljc4NjFMNTYuMzE1NiAxOS44OTRDNTYuNDI0NCAxOS43MTQ0IDU2LjQzMTEgMTkuNDg3IDU2LjMzMjkgMTkuMzAxNUM1Ni4yMzQ3IDE5LjExNDQgNTYuMDQ3IDE4Ljk5ODggNTUuODQzNyAxOC45OTg4SDQ2LjkxMDdDNDYuNjk5MiAxOC45OTg4IDQ2LjUwNTkgMTkuMTIzNiA0Ni40MTEgMTkuMzIxNEwzOC4wMzYzIDM2LjgyMTRDMzcuOTQ5OCAzNy4wMDIxIDM3Ljk1OTMgMzcuMjE2NiAzOC4wNjA4IDM3LjM4ODZDMzguMTYzIDM3LjU2MDcgMzguMzQyMiAzNy42NjUgMzguNTM2IDM3LjY2NUg0NC4yNzcyTDM4LjAyMTIgNTMuMTg5MUMzNy45MTQ2IDUzLjQ1NDcgMzguMDA5NSA1My43NjIzIDM4LjI0NDUgNTMuOTEzM0MzOC4zMzQ5IDUzLjk3MDMgMzguNDM1NCA1My45OTg4IDM4LjUzNTQgNTMuOTk4OEMzOC42OTU2IDUzLjk5ODggMzguODUzNiA1My45MjY4IDM4Ljk2MzEgNTMuNzkxOEw1Ni44MjkyIDMxLjYyNTJDNTYuOTY5NCAzMS40NTE1IDU2Ljk5OTUgMzEuMjA4NSA1Ni45MDggMzEuMDAyNloiIGZpbGw9IndoaXRlIi8+DQo8ZGVmcz4NCjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgeD0iMC45OTAxMTIiIHk9IjkiIHdpZHRoPSI5NC45NTI0IiBoZWlnaHQ9Ijk1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+DQo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPg0KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4NCjxmZU9mZnNldCBkeT0iMTMiLz4NCjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEwLjUiLz4NCjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuODk4MDM5IDAgMCAwIDAgMC4xMTc2NDcgMCAwIDAgMCAwLjQzNTI5NCAwIDAgMCAwLjMgMCIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+DQo8L2ZpbHRlcj4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjUyLjU5NzgiIHkxPSIxMDIuNjM1IiB4Mj0iMTA3LjYwNSIgeTI9IjM5LjQxMzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiNGODA3NTkiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0JDNEU5QyIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjUzLjM3NjEiIHkxPSIxMTMuNDEzIiB4Mj0iMTI1LjM4NSIgeTI9IjMwLjY1MDciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiNGODA3NTkiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0JDNEU5QyIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjwvZGVmcz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/key-feature/subscription.svg":
/*!*************************************************!*\
  !*** ./src/assets/key-feature/subscription.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iMTA0IiB2aWV3Qm94PSIwIDAgOTYgMTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ny45NTk2IDE2Ljk5OTlDNjIuNTgyIDE2Ljk5OTkgNzQuNDM1OSAyOC44NjQ0IDc0LjQzNTkgNDMuNDk5OUM3NC40MzU5IDU4LjEzNTMgNjIuNTgyIDY5Ljk5OTkgNDcuOTU5NiA2OS45OTk5QzMzLjMzNzIgNjkuOTk5OSAyMS40ODM0IDU4LjEzNTMgMjEuNDgzNCA0My40OTk5QzIxLjQ4MzQgMjguODY0NCAzMy4zMzcyIDE2Ljk5OTkgNDcuOTU5NiAxNi45OTk5WiIgZmlsbD0iI0ZGNDM2MSIvPg0KPC9nPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi40NjUyIDAuOTk5OTM2SDUyLjQ1NjRDNjkuMDEwMSAwLjk5OTkzNiA4Mi40Mjk1IDE0LjQzMTEgODIuNDI5NSAzMC45OTk5VjQwLjk5OTlDODIuNDI5NSA1Ny41NjgyIDY5LjAxMDEgNzAuOTk5OCA1Mi40NTY0IDcwLjk5OThINDIuNDY1MkMyNS45MTE2IDcwLjk5OTggMTIuNDkyMiA1Ny41NjgyIDEyLjQ5MjIgNDAuOTk5OVYzMC45OTk5QzEyLjQ5MjIgMTQuNDMxMSAyNS45MTE2IDAuOTk5OTM2IDQyLjQ2NTIgMC45OTk5MzZaIiBmaWxsPSIjRkY0MzYxIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjQ2NTIgMC45OTk5MzZINTIuNDU2NEM2OS4wMTAxIDAuOTk5OTM2IDgyLjQyOTUgMTQuNDMxMSA4Mi40Mjk1IDMwLjk5OTlWNDAuOTk5OUM4Mi40Mjk1IDU3LjU2ODIgNjkuMDEwMSA3MC45OTk4IDUyLjQ1NjQgNzAuOTk5OEg0Mi40NjUyQzI1LjkxMTYgNzAuOTk5OCAxMi40OTIyIDU3LjU2ODIgMTIuNDkyMiA0MC45OTk5VjMwLjk5OTlDMTIuNDkyMiAxNC40MzExIDI1LjkxMTYgMC45OTk5MzYgNDIuNDY1MiAwLjk5OTkzNloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjQuOTg4NiAzMS44NTg1QzY0Ljk5NDMgMzEuOTYwNyA2NC45ODY5IDMyLjA2NDQgNjQuOTYxNCAzMi4xNjg3TDYyLjY4MTEgNDEuMzM0OEM2Mi41NjYxIDQxLjc5NjEgNjIuMTU0MyA0Mi4xMjE0IDYxLjY4MDkgNDIuMTI0MUw0Ny45OTk2IDQyLjE5MzRDNDcuOTk3OSA0Mi4xOTM0IDQ3Ljk5NjIgNDIuMTkzNCA0Ny45OTQ0IDQyLjE5MzRIMzQuMzEzMUMzMy44MzcxIDQyLjE5MzQgMzMuNDIyNCA0MS44NjcxIDMzLjMwNzUgNDEuNDAzMUwzMS4wMjczIDMyLjIwMkMzMS4wMDA5IDMyLjA5NTYgMzAuOTkzNCAzMS45ODg2IDMxLjAwMDEgMzEuODgzOEMzMC4xMTc5IDMxLjYwNDcgMjkuNDc2NCAzMC43NzUyIDI5LjQ3NjQgMjkuNzk3N0MyOS40NzY0IDI4LjU5MDggMzAuNDUyNyAyNy42MDk2IDMxLjY1MjkgMjcuNjA5NkMzMi44NTMxIDI3LjYwOTYgMzMuODI5NCAyOC41OTA4IDMzLjgyOTQgMjkuNzk3N0MzMy44Mjk0IDMwLjQ3NjggMzMuNTE5NyAzMS4wODQzIDMzLjAzNDggMzEuNDg2NEwzNS44ODk2IDM0LjM3NjhDMzYuNjExMiAzNS4xMDc0IDM3LjYxMjMgMzUuNTI2OCAzOC42MzY2IDM1LjUyNjhDMzkuODQ3OCAzNS41MjY4IDQxLjAwMjUgMzQuOTQ4MyA0MS43Mjk3IDMzLjk4TDQ2LjQyMTQgMjcuNzMyMUM0Ni4wMjczIDI3LjMzNjUgNDUuNzgzMiAyNi43ODk3IDQ1Ljc4MzIgMjYuMTg2NUM0NS43ODMyIDI0Ljk4IDQ2Ljc1OTUgMjMuOTk4MyA0Ny45NTk3IDIzLjk5ODNDNDkuMTU5OSAyMy45OTgzIDUwLjEzNjMgMjQuOTggNTAuMTM2MyAyNi4xODY1QzUwLjEzNjMgMjYuNzcxNCA0OS45MDUyIDI3LjMwMiA0OS41MzE3IDI3LjY5NUM0OS41MzI5IDI3LjY5NjcgNDkuNTM0NSAyNy42OTgzIDQ5LjUzNTcgMjcuNjk5OUw1NC4xOTMzIDMzLjk2NDlDNTQuOTIwMyAzNC45NDI0IDU2LjA3OTEgMzUuNTI2OCA1Ny4yOTM3IDM1LjUyNjhDNTguMzI3NSAzNS41MjY4IDU5LjI5OTYgMzUuMTIxOSA2MC4wMzA0IDM0LjM4NzVMNjIuOTAzMiAzMS40OTk5QzYyLjQwODEgMzEuMDk4MyA2Mi4wOSAzMC40ODU0IDYyLjA5IDI5Ljc5NzdDNjIuMDkgMjguNTkwOCA2My4wNjY0IDI3LjYwOTYgNjQuMjY2NiAyNy42MDk2QzY1LjQ2NjggMjcuNjA5NiA2Ni40NDMyIDI4LjU5MDggNjYuNDQzMiAyOS43OTc3QzY2LjQ0MzIgMzAuNzQ4OCA2NS44MzQ0IDMxLjU1ODUgNjQuOTg4NiAzMS44NTg1Wk02Mi40NTg2IDQ1LjQ1NjlDNjIuNDU4NiA0NC44ODIxIDYxLjk5NDUgNDQuNDE1NSA2MS40MjIyIDQ0LjQxNTVIMzQuNjEyNkMzNC4wNDAyIDQ0LjQxNTUgMzMuNTc2MSA0NC44ODIxIDMzLjU3NjEgNDUuNDU2OVY0Ny45NTY5QzMzLjU3NjEgNDguNTMyNyAzNC4wNDAyIDQ4Ljk5ODggMzQuNjEyNiA0OC45OTg4SDYxLjQyMjJDNjEuOTk0NSA0OC45OTg4IDYyLjQ1ODYgNDguNTMyNyA2Mi40NTg2IDQ3Ljk1NjlWNDUuNDU2OVoiIGZpbGw9IndoaXRlIi8+DQo8ZGVmcz4NCjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgeD0iMC40ODM0MTgiIHk9IjkiIHdpZHRoPSI5NC45NTI0IiBoZWlnaHQ9Ijk1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+DQo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPg0KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4NCjxmZU9mZnNldCBkeT0iMTMiLz4NCjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEwLjUiLz4NCjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuOTkyMTU3IDAgMCAwIDAgMC4zNDUwOTggMCAwIDAgMCAwLjQ0NzA1OSAwIDAgMCAwLjMgMCIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+DQo8L2ZpbHRlcj4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjUyLjg2OTMiIHkxPSIxMTMuNDEzIiB4Mj0iMTI0Ljg3OCIgeTI9IjMwLjY1MDciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiNGRjU4NTgiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Y4NTdBNiIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjwvZGVmcz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/key-feature/support.svg":
/*!********************************************!*\
  !*** ./src/assets/key-feature/support.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iMTA0IiB2aWV3Qm94PSIwIDAgOTYgMTA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ny43MDM5IDE2Ljk5OTlDNjIuMzI2MyAxNi45OTk5IDc0LjE4MDEgMjguODY0NCA3NC4xODAxIDQzLjQ5OTlDNzQuMTgwMSA1OC4xMzUzIDYyLjMyNjMgNjkuOTk5OSA0Ny43MDM5IDY5Ljk5OTlDMzMuMDgxNiA2OS45OTk5IDIxLjIyNzcgNTguMTM1MyAyMS4yMjc3IDQzLjQ5OTlDMjEuMjI3NyAyOC44NjQ0IDMzLjA4MTYgMTYuOTk5OSA0Ny43MDM5IDE2Ljk5OTlaIiBmaWxsPSIjRkY0MzYxIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ3LjcwMzkgMTYuOTk5OUM2Mi4zMjYzIDE2Ljk5OTkgNzQuMTgwMSAyOC44NjQ0IDc0LjE4MDEgNDMuNDk5OUM3NC4xODAxIDU4LjEzNTMgNjIuMzI2MyA2OS45OTk5IDQ3LjcwMzkgNjkuOTk5OUMzMy4wODE2IDY5Ljk5OTkgMjEuMjI3NyA1OC4xMzUzIDIxLjIyNzcgNDMuNDk5OUMyMS4yMjc3IDI4Ljg2NDQgMzMuMDgxNiAxNi45OTk5IDQ3LjcwMzkgMTYuOTk5OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4NCjwvZz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDIuMjA4OSAwLjk5OTkzNkg1Mi4yQzY4Ljc1MzcgMC45OTk5MzYgODIuMTczMSAxNC40MzExIDgyLjE3MzEgMzAuOTk5OVY0MC45OTk5QzgyLjE3MzEgNTcuNTY4MiA2OC43NTM3IDcwLjk5OTggNTIuMiA3MC45OTk4SDQyLjIwODlDMjUuNjU1MiA3MC45OTk4IDEyLjIzNTggNTcuNTY4MiAxMi4yMzU4IDQwLjk5OTlWMzAuOTk5OUMxMi4yMzU4IDE0LjQzMTEgMjUuNjU1MiAwLjk5OTkzNiA0Mi4yMDg5IDAuOTk5OTM2WiIgZmlsbD0iI0ZGNDM2MSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi4yMDg5IDAuOTk5OTM2SDUyLjJDNjguNzUzNyAwLjk5OTkzNiA4Mi4xNzMxIDE0LjQzMTEgODIuMTczMSAzMC45OTk5VjQwLjk5OTlDODIuMTczMSA1Ny41NjgyIDY4Ljc1MzcgNzAuOTk5OCA1Mi4yIDcwLjk5OThINDIuMjA4OUMyNS42NTUyIDcwLjk5OTggMTIuMjM1OCA1Ny41NjgyIDEyLjIzNTggNDAuOTk5OVYzMC45OTk5QzEyLjIzNTggMTQuNDMxMSAyNS42NTUyIDAuOTk5OTM2IDQyLjIwODkgMC45OTk5MzZaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYwLjI5MjYgMjIuOTk5NEgzNy4xMTM1QzM1LjUxOTggMjIuOTk5NCAzNC4yMTYgMjQuMzAzNyAzNC4yMTYgMjUuODk4OFY1MS45OTg4TDQwLjAxMDggNDYuMTk4OEg2MC4yOTI2QzYxLjg4NjIgNDYuMTk4OCA2My4xOSA0NC44OTQgNjMuMTkgNDMuMjk4OFYyNS44OTg4QzYzLjE5IDI0LjMwMzcgNjEuODg2MiAyMi45OTk0IDYwLjI5MjYgMjIuOTk5NFoiIGZpbGw9IiNGRUZBRkMiLz4NCjxkZWZzPg0KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwLjIyNzY2MSIgeT0iOSIgd2lkdGg9Ijk0Ljk1MjQiIGhlaWdodD0iOTUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4NCjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+DQo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPg0KPGZlT2Zmc2V0IGR5PSIxMyIvPg0KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTAuNSIvPg0KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC45NDkwMiAwIDAgMCAwIDAuNTAxOTYxIDAgMCAwIDAgMC4yNzQ1MSAwIDAgMCAwLjMgMCIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+DQo8L2ZpbHRlcj4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjUxLjgzNTQiIHkxPSIxMDIuNjM1IiB4Mj0iMTA2Ljg0MiIgeTI9IjM5LjQxMzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiNGODA3NTkiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0JDNEU5QyIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjUyLjYxMjkiIHkxPSIxMTMuNDEzIiB4Mj0iMTI0LjYyMiIgeTI9IjMwLjY1MDciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiNGNDZCNDUiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0VFQTg0OSIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjwvZGVmcz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-2444e79630ae2bfe60435f2048c2281d.svg";

/***/ }),

/***/ "./src/assets/patternBG.png":
/*!**********************************!*\
  !*** ./src/assets/patternBG.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/patternBG-f25af38e357096ca23290d5f5bcb3355.png";

/***/ }),

/***/ "./src/assets/service-thumb.png":
/*!**************************************!*\
  !*** ./src/assets/service-thumb.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/service-thumb-0a5ac5aae7621b13f0ef8d5f5b13da52.png";

/***/ }),

/***/ "./src/assets/services/secure.svg":
/*!****************************************!*\
  !*** ./src/assets/services/secure.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iNTciIHZpZXdCb3g9IjAgMCA1NyA1NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQuNTQxNiAwLjc5MTYxNkgzMi40NTgzQzQ1LjU3NSAwLjc5MTYxNiA1Ni4yMDgzIDExLjQyNDYgNTYuMjA4MyAyNC41NDE2VjMyLjQ1ODNDNTYuMjA4MyA0NS41NzQ4IDQ1LjU3NSA1Ni4yMDgyIDMyLjQ1ODMgNTYuMjA4MkgyNC41NDE2QzExLjQyNDkgNTYuMjA4MiAwLjc5MTY3MyA0NS41NzQ4IDAuNzkxNjczIDMyLjQ1ODNWMjQuNTQxNkMwLjc5MTY3MyAxMS40MjQ2IDExLjQyNDkgMC43OTE2MTYgMjQuNTQxNiAwLjc5MTYxNloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzEuMjE3MSAzMi45NjI1QzMxLjM4NDkgMzIuNzkyMyAzMS40Njg4IDMyLjU5MTQgMzEuNDY4OCAzMi4zNTlWMzAuMjE0N0g0MC4zNzQ5VjM2LjY0OEM0MC4zNzQ5IDM3LjIzNzEgNDAuMTY3NCAzNy43NDIzIDM5Ljc1MiAzOC4xNjJDMzkuMzM2OCAzOC41ODIxIDM4LjgzNzUgMzguNzkxOSAzOC4yNTQ1IDM4Ljc5MTlIMTguNzQ1NkMxOC4xNjI0IDM4Ljc5MTkgMTcuNjYzMSAzOC41ODIxIDE3LjI0NzkgMzguMTYyQzE2LjgzMjUgMzcuNzQyMyAxNi42MjQ5IDM3LjIzNzEgMTYuNjI0OSAzNi42NDhWMzAuMjE0N0gyNS41MzEyVjMyLjM1OUMyNS41MzEyIDMyLjU5MTQgMjUuNjE1MSAzMi43OTIzIDI1Ljc4MyAzMi45NjI1QzI1Ljk1MDkgMzMuMTMxOSAyNi4xNDk3IDMzLjIxNzEgMjYuMzc5NSAzMy4yMTcxSDMwLjYyMDZDMzAuODUwMiAzMy4yMTcxIDMxLjA0OTIgMzMuMTMxOSAzMS4yMTcxIDMyLjk2MjVaTTMwLjE5NjYgMzAuMjE0N0gyNi44MDM0VjMxLjkzSDMwLjE5NjZWMzAuMjE0N1pNMzkuNzUyMSAyMi4yNjc0QzM5LjMzNjkgMjEuODQ2OSAzOC44Mzc2IDIxLjYzNyAzOC4yNTQ1IDIxLjYzN0gzMy41ODkxVjE5LjQ5MjdDMzMuNTg5MSAxOS4xMzUyIDMzLjQ2NTYgMTguODMxNyAzMy4yMTgxIDE4LjU4MUMzMi45NzA5IDE4LjMzMTYgMzIuNjcwMyAxOC4yMDYxIDMyLjMxNyAxOC4yMDYxSDI0LjY4MzFDMjQuMzI5NyAxOC4yMDYxIDI0LjAyOTMgMTguMzMxNiAyMy43ODE5IDE4LjU4MUMyMy41MzQ1IDE4LjgzMTMgMjMuNDEwOCAxOS4xMzUyIDIzLjQxMDggMTkuNDkyN1YyMS42MzdIMTguNzQ1NkMxOC4xNjI0IDIxLjYzNyAxNy42NjMxIDIxLjg0NjkgMTcuMjQ3OSAyMi4yNjc0QzE2LjgzMjUgMjIuNjg2NiAxNi42MjQ5IDIzLjE5MTQgMTYuNjI0OSAyMy43ODEzVjI4LjkyOEg0MC4zNzQ5VjIzLjc4MTNDNDAuMzc0OSAyMy4xOTE0IDQwLjE2NzQgMjIuNjg2NiAzOS43NTIxIDIyLjI2NzRaTTMxLjg5MjkgMjEuNjM3SDI1LjEwNzJWMTkuOTIxM0gzMS44OTI5VjIxLjYzN1oiIGZpbGw9IndoaXRlIi8+DQo8ZGVmcz4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjMyLjc4NTUiIHkxPSI4OS43ODU1IiB4Mj0iODkuNzg1NSIgeTI9IjI0LjIxNDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiNGRjQxNkMiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNEIyQiIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjwvZGVmcz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/services/smart.svg":
/*!***************************************!*\
  !*** ./src/assets/services/smart.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iNTciIHZpZXdCb3g9IjAgMCA1NyA1NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQuNTQxNiAwLjc5MTYxNkgzMi40NTgzQzQ1LjU3NTEgMC43OTE2MTYgNTYuMjA4MyAxMS40MjQ2IDU2LjIwODMgMjQuNTQxNlYzMi40NTgzQzU2LjIwODMgNDUuNTc0OCA0NS41NzUxIDU2LjIwODIgMzIuNDU4MyA1Ni4yMDgySDI0LjU0MTZDMTEuNDI0OSA1Ni4yMDgyIDAuNzkxNjE2IDQ1LjU3NDggMC43OTE2MTYgMzIuNDU4M1YyNC41NDE2QzAuNzkxNjE2IDExLjQyNDYgMTEuNDI0OSAwLjc5MTYxNiAyNC41NDE2IDAuNzkxNjE2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi4zODkxIDI1LjIyMTRDNDIuMzkzNiAyNS4zMDIzIDQyLjM4NzcgMjUuMzg0NSA0Mi4zNjc1IDI1LjQ2N0w0MC41NjA3IDMyLjcyMzVDNDAuNDY5NSAzMy4wODg3IDQwLjE0MzIgMzMuMzQ2MiAzOS43NjgxIDMzLjM0ODNMMjguOTI3NCAzMy40MDMzQzI4LjkyNiAzMy40MDMzIDI4LjkyNDcgMzMuNDAzMyAyOC45MjMyIDMzLjQwMzNIMTguMDgyNUMxNy43MDUzIDMzLjQwMzMgMTcuMzc2NyAzMy4xNDQ5IDE3LjI4NTcgMzIuNzc3NkwxNS40Nzg5IDI1LjQ5MzRDMTUuNDU4IDI1LjQwOTEgMTUuNDUyMSAyNS4zMjQ0IDE1LjQ1NzMgMjUuMjQxNEMxNC43NTgzIDI1LjAyMDYgMTQuMjUgMjQuMzYzOCAxNC4yNSAyMy41OUMxNC4yNSAyMi42MzQ1IDE1LjAyMzYgMjEuODU3NyAxNS45NzQ2IDIxLjg1NzdDMTYuOTI1NiAyMS44NTc3IDE3LjY5OTMgMjIuNjM0NSAxNy42OTkzIDIzLjU5QzE3LjY5OTMgMjQuMTI3NiAxNy40NTM4IDI0LjYwODUgMTcuMDY5NiAyNC45MjY5TDE5LjMzMTcgMjcuMjE1MUMxOS45MDM0IDI3Ljc5MzUgMjAuNjk2NyAyOC4xMjU1IDIxLjUwODMgMjguMTI1NUMyMi40NjggMjguMTI1NSAyMy4zODMgMjcuNjY3NSAyMy45NTkyIDI2LjkwMUwyNy42NzY5IDIxLjk1NDdDMjcuMzY0NiAyMS42NDE1IDI3LjE3MTEgMjEuMjA4NiAyNy4xNzExIDIwLjczMTFDMjcuMTcxMSAxOS43NzYgMjcuOTQ0OCAxOC45OTg4IDI4Ljg5NTggMTguOTk4OEMyOS44NDY4IDE4Ljk5ODggMzAuNjIwNCAxOS43NzYgMzAuNjIwNCAyMC43MzExQzMwLjYyMDQgMjEuMTk0MiAzMC40MzczIDIxLjYxNDIgMzAuMTQxMyAyMS45MjU0QzMwLjE0MjMgMjEuOTI2NyAzMC4xNDM2IDIxLjkyNzkgMzAuMTQ0NSAyMS45MjkyTDMzLjgzNTEgMjYuODg5QzM0LjQxMTIgMjcuNjYyOCAzNS4zMjk0IDI4LjEyNTUgMzYuMjkxOCAyOC4xMjU1QzM3LjExMDkgMjguMTI1NSAzNy44ODEyIDI3LjgwNSAzOC40NjAzIDI3LjIyMzZMNDAuNzM2NiAyNC45Mzc1QzQwLjM0NDMgMjQuNjE5NiA0MC4wOTIzIDI0LjEzNDQgNDAuMDkyMyAyMy41OUM0MC4wOTIzIDIyLjYzNDUgNDAuODY2IDIxLjg1NzcgNDEuODE3IDIxLjg1NzdDNDIuNzY4IDIxLjg1NzcgNDMuNTQxNyAyMi42MzQ1IDQzLjU0MTcgMjMuNTlDNDMuNTQxNyAyNC4zNDI5IDQzLjA1OTIgMjQuOTgzOSA0Mi4zODkxIDI1LjIyMTRaTTQwLjM4NDQgMzUuOTg2OEM0MC4zODQ0IDM1LjUzMTggNDAuMDE2NiAzNS4xNjI0IDM5LjU2MzEgMzUuMTYyNEgxOC4zMTk4QzE3Ljg2NjIgMzUuMTYyNCAxNy40OTg1IDM1LjUzMTggMTcuNDk4NSAzNS45ODY4VjM3Ljk2NkMxNy40OTg1IDM4LjQyMTggMTcuODY2MiAzOC43OTA4IDE4LjMxOTggMzguNzkwOEgzOS41NjMxQzQwLjAxNjYgMzguNzkwOCA0MC4zODQ0IDM4LjQyMTggNDAuMzg0NCAzNy45NjZWMzUuOTg2OFoiIGZpbGw9IndoaXRlIi8+DQo8ZGVmcz4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjMyLjc4NTUiIHkxPSI4OS43ODU1IiB4Mj0iODkuNzg1NSIgeTI9IjI0LjIxNDUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiNGRjU4NTgiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Y4NTdBNiIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjwvZGVmcz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/shape-left.png":
/*!***********************************!*\
  !*** ./src/assets/shape-left.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shape-left-a30c855c457ee544a0c1f0e9808d4b2f.png";

/***/ }),

/***/ "./src/assets/shape-pattern1.png":
/*!***************************************!*\
  !*** ./src/assets/shape-pattern1.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shape-pattern1-2e621a0ce670fbec7ea6ff71ecbf22a0.png";

/***/ }),

/***/ "./src/assets/shape-pattern2.png":
/*!***************************************!*\
  !*** ./src/assets/shape-pattern2.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shape-pattern2-2e621a0ce670fbec7ea6ff71ecbf22a0.png";

/***/ }),

/***/ "./src/assets/shape-right.png":
/*!************************************!*\
  !*** ./src/assets/shape-right.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shape-right-b92fec1789f900079fb2bec9db12409e.png";

/***/ }),

/***/ "./src/assets/team/member-1.png":
/*!**************************************!*\
  !*** ./src/assets/team/member-1.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/member-1-91b98a285548c2590927cff29e8bfb43.png";

/***/ }),

/***/ "./src/assets/team/member-2.png":
/*!**************************************!*\
  !*** ./src/assets/team/member-2.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/member-2-2d599d47e3b020e274e0a619a792256a.png";

/***/ }),

/***/ "./src/assets/team/member-3.png":
/*!**************************************!*\
  !*** ./src/assets/team/member-3.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/member-3-8a6654a8df725186136b2eb13409bac4.png";

/***/ }),

/***/ "./src/assets/team/member-4.png":
/*!**************************************!*\
  !*** ./src/assets/team/member-4.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/member-4-7794f21b0d9a98da9c94518eeceeba7a.png";

/***/ }),

/***/ "./src/assets/team/member-5.png":
/*!**************************************!*\
  !*** ./src/assets/team/member-5.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/member-5-92f2874ba2db4bba3c36b834f6b2b59f.png";

/***/ }),

/***/ "./src/assets/team/member-6.png":
/*!**************************************!*\
  !*** ./src/assets/team/member-6.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/member-6-26fa18c86a2ceb663eb2aaac7c05269f.png";

/***/ }),

/***/ "./src/assets/testimonial/avatar1.png":
/*!********************************************!*\
  !*** ./src/assets/testimonial/avatar1.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/testimonial/avatar2.png":
/*!********************************************!*\
  !*** ./src/assets/testimonial/avatar2.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/testimonial/avatar3.png":
/*!********************************************!*\
  !*** ./src/assets/testimonial/avatar3.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/testimonial/avatar4.png":
/*!********************************************!*\
  !*** ./src/assets/testimonial/avatar4.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/components/button-group.js":
/*!****************************************!*\
  !*** ./src/components/button-group.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\button-group.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


function ButtonGroup({
  next,
  previous
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: {
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.buttonGroup,
    className: "button__group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
    onClick: previous,
    "aria-label": "Previous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosArrowRoundBack"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
    onClick: next,
    "aria-label": "Next",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosArrowRoundForward"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  })))));
}
const styles = {
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    mb: -4,
    button: {
      bg: "transparent",
      border: "0px solid",
      fontSize: 40,
      cursor: "pointer",
      px: "2px",
      color: "#BBC7D7",
      transition: "all 0.25s",
      "&:hover": {
        color: "text"
      },
      "&:focus": {
        outline: 0
      }
    }
  }
};

/***/ }),

/***/ "./src/components/drawer.js":
/*!**********************************!*\
  !*** ./src/components/drawer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-drawer */ "rc-drawer");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_drawer__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Drawer(_ref) {
  let {
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open,
    width,
    placement,
    drawerStyle,
    closeBtnStyle
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open", "width", "placement", "drawerStyle", "closeBtnStyle"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(rc_drawer__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    open: open,
    ocClose: toggleHandler,
    className: `drawer ${className ? className : ""}`.trim(),
    width: width,
    placement: placement,
    handler: false,
    level: null,
    duration: "0.4s"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), closeButton && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "div",
    onclick: toggleHandler,
    sx: closeBtnStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, closeButton), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: drawerStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, children)), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "drawer__handler",
    style: {
      display: "inline-block"
    },
    onClick: toggleHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, drawerHandler));
}
Drawer.defaultProps = {
  width: "320px",
  placement: "left"
};

/***/ }),

/***/ "./src/components/feature-card-column.js":
/*!***********************************************!*\
  !*** ./src/components/feature-card-column.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeatureCardColumn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\feature-card-column.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */

function FeatureCardColumn({
  src,
  altText = "default alt text",
  title,
  text
}) {
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
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, text)));
}
const styles = {
  card: {
    display: "flex",
    alignItems: ["center", "flex-start"],
    flexDirection: "column",
    mb: -1,
    textAlign: ["center", null, "left"],
    px: [4, null, 0]
  },
  img: {
    mx: ["auto", null, 0],
    ml: ["auto", null, "-13px"],
    mb: -2,
    width: ["80px", null, null, "90px", null, "auto"]
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3]
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: "1.9"
    }
  }
};

/***/ }),

/***/ "./src/components/feature-card.js":
/*!****************************************!*\
  !*** ./src/components/feature-card.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeatureCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\feature-card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */

function FeatureCard({
  src,
  altText = "default alt text",
  title,
  text
}) {
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
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, text)));
}
const styles = {
  card: {
    display: "flex",
    alignItems: "flex-start",
    mb: -1
  },
  img: {
    width: ["70px", null, null, "80px", "90px", "auto"],
    height: "auto",
    flexShrink: 0,
    mr: [2, 3, null, null, 4, 5],
    ml: -2
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: [2, 3],
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: ["10px", null, "15px"]
    },
    subTitle: {
      fontSize: [1, "15px"],
      fontWeight: 400,
      lineHeight: "1.9"
    }
  }
};

/***/ }),

/***/ "./src/components/footer/footer.data.js":
/*!**********************************************!*\
  !*** ./src/components/footer/footer.data.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  menuItem: [{
    path: "/",
    label: "Home"
  }, {
    path: "/",
    label: "Adversite"
  }, {
    path: "/",
    label: "Supports"
  }, {
    path: "/",
    label: "Marketing"
  }, {
    path: "/",
    label: "Contact"
  }]
});

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.data */ "./src/components/footer/footer.data.js");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\footer\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




function Footer() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("footer", {
    sx: styles.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.footerBottomArea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_logo_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.menus,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("nav", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, _footer_data__WEBPACK_IMPORTED_MODULE_3__["default"].menuItem.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: item.path,
    key: item.key,
    label: item.label,
    sx: styles.footer.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  })))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.footer.copyright,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Copyright Disclaimer under Section 107 of the copyright act 1976, allowance is made for fair use for purposes such as criticism, comment, news reporting, scholarship, and research."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.footer.copyright,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "Disclaimer: Under the Fair Use Copyright Act I have taken inspiration and my experience from my previous employer to design and code a personal project for creative purposes. I do not own any Lokalyst assets."))));
}
const styles = {
  footer: {
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      pt: [7, null, 8],
      pb: ["40px", null, "100px"],
      textAlign: "center",
      flexDirection: "column"
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap"
      }
    },
    link: {
      fontSize: [1, "15px"],
      color: "text",
      fontWeight: "400",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ":hover": {
        color: "primary"
      }
    },
    copyright: {
      fontSize: [1, "15px"],
      width: "100%"
    }
  }
};

/***/ }),

/***/ "./src/components/header/header.data.js":
/*!**********************************************!*\
  !*** ./src/components/header/header.data.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  path: "home",
  label: "Home"
}, {
  path: "feature",
  label: "Features"
}, {
  path: "pricing",
  label: "Pricing"
}, {
  path: "testimonial",
  label: "Testimonial"
}]);

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/logo */ "./src/components/logo.js");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_logo_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mobile_drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobile-drawer */ "./src/components/header/mobile-drawer.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\header\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */







function Header({
  className
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("header", {
    sx: styles.header,
    className: className,
    id: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: assets_logo_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    as: "nav",
    sx: styles.nav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_7__["default"].map((menuItem, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    activeClass: "active",
    to: menuItem.path,
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
    key: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, menuItem.label))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "donate__btn",
    varient: "secondary",
    "aria-label": "Get Started",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "Register"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "donate__btn",
    varient: "secondary",
    "aria-label": "Get Started",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "Log In"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_mobile_drawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })));
}
const positionAnim = _emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;
const styles = {
  header: {
    color: "text",
    fontWeight: "body",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0]
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text"
      }
    }
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block"
    },
    a: {
      fontSize: 2,
      fontWeight: "body",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "primary"
      },
      "&.active": {
        color: "primary"
      }
    }
  }
};

/***/ }),

/***/ "./src/components/header/mobile-drawer.js":
/*!************************************************!*\
  !*** ./src/components/header/mobile-drawer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileDrawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/drawer */ "./src/components/drawer.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\header\\mobile-drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const social = [{
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
  const {
    0: isDrawerOpen,
    1: setisDrawerOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
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
    toggleHandler: () => setisDrawerOpen(prevState => !prevState),
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
  }, _header_data__WEBPACK_IMPORTED_MODULE_7__["default"].map((menuItem, i) => __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    activeClass: "active",
    to: menuItem.path,
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
    key: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, menuItem.label))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
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
  }, social.map((socialItem, i) => __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "span",
    key: i,
    sx: styles.social.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: socialItem.path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, socialItem.icon))))))));
}
const styles = {
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

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header */ "./src/components/header/header.js");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer */ "./src/components/footer/footer.js");
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */





function Layout({
  children
}) {
  const {
    0: isSticky,
    1: setIsSticky
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleStateChange = status => {
    if (status.status === react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a, {
    innerZ: 1001,
    top: 0,
    onStateChange: handleStateChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: `${isSticky ? "sticky" : "unSticky"}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("main", {
    id: "content",
    sx: {
      variant: "layout.main"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, children), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_footer_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/link.js":
/*!********************************!*\
  !*** ./src/components/link.js ***!
  \********************************/
/*! exports provided: NavLink, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\link.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */


function NavLink(_ref) {
  let {
    path,
    label,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["path", "label", "children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  }, "NavLink");
}
function Link(_ref2) {
  let {
    path,
    label,
    children
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["path", "label", "children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], _extends({}, rest, {
    href: path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }), children || label);
}

/***/ }),

/***/ "./src/components/list.js":
/*!********************************!*\
  !*** ./src/components/list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\list.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function List({
  items = [],
  parentStyle,
  childStyle
}) {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "ul",
    sx: _objectSpread({
      listStyleType: "none",
      margin: 0,
      padding: 0
    }, parentStyle),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, items.map((item, i) => __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    className: item.isAvailable ? "open" : "closed",
    as: "li",
    sx: _objectSpread({}, childStyle),
    key: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    sx: styles.listIcon,
    "aria-label": "list icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, item.icon), item.text)));
}
const styles = {
  listIcon: {
    width: ["25px", "35px"],
    height: "auto",
    color: "primary",
    padding: 0,
    fontSize: [3, 5],
    ml: "-1px",
    flexShrink: 0,
    justifyContent: "flex-start",
    mt: "2px"
  }
};

/***/ }),

/***/ "./src/components/logo.js":
/*!********************************!*\
  !*** ./src/components/logo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\logo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */


function Logo(_ref) {
  let {
    src
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["src"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], _extends({
    path: "/",
    sx: {
      variant: "links.logo",
      display: "flex",
      cursor: "pointer",
      mr: 15
    }
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: src,
    alt: "Jonathan Days social media logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/price-card.js":
/*!**************************************!*\
  !*** ./src/components/price-card.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PriceCard; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/components/list.js");
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\price-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function PriceCard({
  data: {
    header,
    name,
    description,
    priceWithUnit,
    buttonText = "Start Free Trial",
    anotherOption,
    points
  }
}) {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    className: header ? "package__card active" : "package__card",
    sx: styles.pricingBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, header && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    sx: styles.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 18
    }
  }, header), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: "package__header",
    sx: styles.pricingHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    className: "package__name",
    variant: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, name)), __jsx(_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: points,
    childStyle: styles.listItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    className: "package__price",
    sex: styles.price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, priceWithUnit, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "/Monthly")), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: styles.buttonGroup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: "primary",
    "aria-label": buttonText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, buttonText), anotherOption && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: "textButton",
    className: "free__trial",
    "aria-label": anotherOption,
    sx: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, anotherOption))));
}
const styles = {
  pricingBox: {
    borderRadius: 20,
    position: "relative",
    transition: "all 0.3s",
    p: ["35px 25px", null, null, "40px"],
    width: ["100%", "75%", "100%"],
    mb: "40px",
    mt: "40px",
    mx: [0, "auto", 0],
    "&:before": {
      position: "absolute",
      content: "''",
      width: "100%",
      top: 0,
      left: 0,
      height: "100%",
      border: "1px solid rgba(38, 78, 118, 0.1)",
      borderRadius: "inherit",
      transition: "all 0.3s",
      zIndex: -1
    },
    "&:hover": {
      boxShadow: "0px 4px 25px rgba(38, 78, 118, 0.1) !important",
      "&:before": {
        opacity: 0
      }
    }
  },
  header: {
    height: ["28px", null, null, "32px"],
    backgroundColor: "yellow",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: 1,
    lineHeight: 1.2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    position: "absolute",
    top: "-17px",
    letterSpacing: "-.14px",
    px: "12px"
  },
  pricingHeader: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    mb: ["30px", null, null, null, "40px"],
    p: {
      fontSize: [1, 2],
      color: "text",
      lineHeight: "heading"
    },
    ".package__name": {
      marginBottom: [1, null, 2]
    }
  },
  price: {
    fontWeight: 500,
    fontSize: [4, null, 5, null, "30px"],
    lineHeight: 1,
    letterSpacing: "-0.55px",
    color: "text",
    marginBottom: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pt: [4, 6],
    "> span": {
      position: "relative",
      pl: "3px",
      display: "inline-block",
      fontSize: [1, 2],
      fontWeight: "normal"
    }
  },
  listItem: {
    fontFamily: "Varela Round",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: [1, 2],
    lineHeight: [1.75, 1.6],
    mb: 3,
    alignItems: "flex-start",
    color: "text",
    "&.closed": {
      opacity: 0.55,
      button: {
        color: "#788FB5"
      }
    }
  },
  buttonGroup: {
    textAlign: "center",
    mt: ["30px", null, null, null, "35px"],
    ".free__trail": {
      color: "secondary",
      width: "100%",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: ["14px", 1],
      p: "20px 0 0"
    }
  }
};

/***/ }),

/***/ "./src/components/rating.js":
/*!**********************************!*\
  !*** ./src/components/rating.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\rating.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Rating = ({
  rating
}) => {
  const totalRating = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(__jsx("li", {
        className: "star",
        key: i,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaStar"], {
        __self: undefined,
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
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }
      }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaStar"], {
        __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, totalRating));
};

/* harmony default export */ __webpack_exports__["default"] = (Rating);

/***/ }),

/***/ "./src/components/section-header.js":
/*!******************************************!*\
  !*** ./src/components/section-header.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\section-header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SectionHeader({
  title,
  slogan,
  isWhite
}) {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      variant: "sectionHeader"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: {
      variant: "sectionHeader.subTitle",
      color: isWhite ? "white" : "primary",
      opacity: isWhite ? 0.7 : 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, slogan), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h2",
    sx: {
      variant: "sectionHeader.title",
      color: isWhite ? "white" : "heading"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, title));
}

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SEO; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\seo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SEO({
  description = "Jonathan Days SEO WebSite Project",
  author = "Jonathan Days",
  meta,
  title = "SEO Website Project"
}) {
  const metaData = [{
    name: `description`,
    content: description
  }, {
    property: `og:title`,
    content: title
  }, {
    property: `og:description`,
    content: description
  }, {
    property: `og:type`,
    content: `website`
  }, {
    name: `twitter:card`,
    content: `summary`
  }, {
    name: `twitter:creator`,
    content: author
  }, {
    name: `twitter:title`,
    content: title
  }, {
    name: `twitter:description`,
    content: description
  }].concat(meta);
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, title), metaData.map(({
    name,
    content
  }, i) => __jsx("meta", {
    key: i,
    name: name,
    content: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })));
}
SEO.defaultProps = {
  lang: `en`,
  meta: []
};

/***/ }),

/***/ "./src/components/team-card.js":
/*!*************************************!*\
  !*** ./src/components/team-card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\team-card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


function TeamCard({
  src,
  altText,
  title,
  designation,
  social
}) {
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
  }, social.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    key: item.id,
    href: item.path,
    className: item.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, item.icon))));
}
const styles = {
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

/***/ }),

/***/ "./src/components/text-feature.js":
/*!****************************************!*\
  !*** ./src/components/text-feature.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\components\\text-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */

function TextFeature({
  subTitle,
  title,
  description,
  btnName,
  btnURL = "#"
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, subTitle), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h2",
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, title)), description && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    className: "description",
    sx: styles.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, description), btnName && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: btnURL,
    variant: "default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    "aria-label": btnName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, btnName)));
}
const styles = {
  card: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexShrink: 0,
    a: {
      m: ["0 auto", null, null, 0]
    }
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: -1,
    subTitle: {
      fontSize: [0, null, 1],
      color: "primary",
      textTransform: "uppercase",
      fontWeight: "700",
      mb: [2, 3],
      lineHeight: 1.5,
      letterSpacing: ["1.5px", null, "2px"]
    },
    title: {
      fontSize: ["24px", null, "28px", "30px", "36px", "42px", null, "48px"],
      color: "heading_secondary",
      lineHeight: [1.3, null, null, null, 1.2],
      fontWeight: "700",
      letterSpacing: "-.5px",
      mb: 5
    }
  },
  description: {
    fontSize: ["15px", 2, null, null, null, "17px", null, 3],
    fontWeight: 400,
    lineHeight: [1.85, null, null, 2, null, "2.2"],
    color: "text_secondary",
    mb: "30px"
  }
};

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme */ "./src/theme/index.js");
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/seo */ "./src/components/seo.js");
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/layout */ "./src/components/layout.js");
/* harmony import */ var _sections_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/banner */ "./src/sections/banner.js");
/* harmony import */ var _sections_key_feature__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/key-feature */ "./src/sections/key-feature.js");
/* harmony import */ var _sections_service_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sections/service-section */ "./src/sections/service-section.js");
/* harmony import */ var _sections_feature__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sections/feature */ "./src/sections/feature.js");
/* harmony import */ var _sections_core_feature__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sections/core-feature */ "./src/sections/core-feature.js");
/* harmony import */ var _sections_workflow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sections/workflow */ "./src/sections/workflow.js");
/* harmony import */ var _sections_package__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sections/package */ "./src/sections/package.js");
/* harmony import */ var _sections_team_section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sections/team-section */ "./src/sections/team-section.js");
/* harmony import */ var _sections_testimonial__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sections/testimonial */ "./src/sections/testimonial.js");
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














function IndexPage() {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(components_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Jonathan Days SEO Project",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx(_sections_banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx(_sections_key_feature__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx(_sections_service_section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx(_sections_feature__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx(_sections_core_feature__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx(_sections_workflow__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx(_sections_package__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx(_sections_team_section__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx(_sections_testimonial__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./src/sections/banner.js":
/*!********************************!*\
  !*** ./src/sections/banner.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Banner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/banner-thumb.png */ "./src/assets/banner-thumb.png");
/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/shape-left.png */ "./src/assets/shape-left.png");
/* harmony import */ var assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/shape-right.png */ "./src/assets/shape-right.png");
/* harmony import */ var assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\sections\\banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */





function Banner() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: styles.banner,
    id: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.banner.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.banner.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h1",
    variant: "heroPrimary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "Gain an edge on SEO with our services"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    variant: "heroSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "Rise through the ranks of Google with our affordable plans! With our help you'll see web traffic go through the roof!"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "Free Qoute")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.banner.imageBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }))));
}
const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3___default.a})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%"
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4___default.a})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%"
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7]
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [245, "auto"]
      }
    }
  }
};

/***/ }),

/***/ "./src/sections/core-feature.js":
/*!**************************************!*\
  !*** ./src/sections/core-feature.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoreFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/core-feature.png */ "./src/assets/core-feature.png");
/* harmony import */ var assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/shape-pattern2.png */ "./src/assets/shape-pattern2.png");
/* harmony import */ var assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\sections\\core-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




const data = {
  subTitle: "Core Feature",
  title: "One of our core features is Voice Search",
  description: "As of January 2018 there were an estimated 1 billion voice searches per month, and it is estimated to grow to become 50% of all searches by 2020." + " Virtual assistants such as Alexa, Google Assistant, SIRI, and Cortana all help modern businesses and consumers find information, take action, and solve problems. ",
  btnName: "Get Started",
  btnURL: "#"
};
function CoreFeature() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: "section.coreFeature"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subTitle: data.subTitle,
    title: data.title,
    description: data.description,
    btnName: data.btnName,
    btnURL: data.btnURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Thumbnail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.shapeBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  })))));
}
const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, 7, 0, null, 7]
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    pb: ["50px", "60px", null, 0],
    mx: ["auto", null, null, 0],
    ".description": {
      pr: [0, null, 6, 7, 6]
    }
  },
  thumbnail: {
    display: "inline-flex",
    position: "relative",
    mr: "auto",
    ml: ["auto", null, null, null, 7],
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"]
    }
  },
  shapeBox: {
    position: "absolute",
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ["none", "inline-block", "none", null, "inline-block"]
  }
};

/***/ }),

/***/ "./src/sections/feature.js":
/*!*********************************!*\
  !*** ./src/sections/feature.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Feature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_feature_card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/feature-card.js */ "./src/components/feature-card.js");
/* harmony import */ var assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/feature/performance.svg */ "./src/assets/feature/performance.svg");
/* harmony import */ var assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/feature/partnership.svg */ "./src/assets/feature/partnership.svg");
/* harmony import */ var assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/feature/subscription.svg */ "./src/assets/feature/subscription.svg");
/* harmony import */ var assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/feature/support.svg */ "./src/assets/feature/support.svg");
/* harmony import */ var assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\sections\\feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */








const data = [{
  id: 1,
  imgSrc: assets_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  altText: "SEO Web Design",
  title: "SEO Web Design",
  text: "We will create a comprehensive website SEO strategy and manage the website launch to ensure the best possible outcome."
}, {
  id: 2,
  imgSrc: assets_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: "Speed Optimization",
  title: "Speed Optimization",
  text: "We can work with your existing developer or bring in our dev team to optimize your website’s speed performance."
}, {
  id: 3,
  imgSrc: assets_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: "Pentaly Recovery",
  title: "Penalty Recovery",
  text: "Assess your site for penalties, address any identified issues"
}, {
  id: 4,
  imgSrc: assets_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  altText: "Video SEO",
  title: "Video SEO",
  text: "Align align unique large-scale platforms with your larger SEO and digital strategy."
}];
function Feature() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: "section.feature"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Primary Features",
    title: "What we can and will do for you",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_feature_card_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: item.id,
    src: item.imgSrc,
    alt: item.altText,
    title: item.title,
    text: item.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  })))));
}
const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: ["40px 0", null, "45px 30px", null, "60px 50px", "70px 50px", null, "80px 90px"],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"]
  }
};

/***/ }),

/***/ "./src/sections/key-feature.js":
/*!*************************************!*\
  !*** ./src/sections/key-feature.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/feature-card-column.js */ "./src/components/feature-card-column.js");
/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/key-feature/performance.svg */ "./src/assets/key-feature/performance.svg");
/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/key-feature/partnership.svg */ "./src/assets/key-feature/partnership.svg");
/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/key-feature/subscription.svg */ "./src/assets/key-feature/subscription.svg");
/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/key-feature/support.svg */ "./src/assets/key-feature/support.svg");
/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\sections\\key-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */








const data = [{
  id: 1,
  imgSrc: assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  altText: "Drive Web Traffic",
  title: "Drive Web Traffic",
  text: "Increase organic traffic to your site."
}, {
  id: 2,
  imgSrc: assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: "Leaders in industry",
  title: "Become the authority in your industry",
  text: "Get ahead of the competition by leading from their searches."
}, {
  id: 3,
  imgSrc: assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: "Convert into leads",
  title: "Help convert your website visitors into leads",
  text: "Natural search results generate natural leads"
}, {
  id: 4,
  imgSrc: assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  altText: "Connect with your target audience",
  title: "Connect with your target audience",
  text: "Create unique, valuable insights that can only come from you, not your competitors."
}];
function KeyFeature() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: "section.keyFeature"
    },
    id: "feature",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "High Quality Returns",
    title: "Achieve these results",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: item.id,
    src: item.imgSrc,
    alt: item.altText,
    title: item.title,
    text: item.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  })))));
}
const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: ["35px 0", null, "40px 40px", "50px 60px", "30px", "50px 40px", "55px 90px"],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)", null, "repeat(4,1fr)"]
  }
};

/***/ }),

/***/ "./src/sections/package.js":
/*!*********************************!*\
  !*** ./src/sections/package.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Package; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_price_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/price-card */ "./src/components/price-card.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\sections\\package.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/** @jsx jsx */








const packages = {
  monthly: [{
    id: 1,
    name: "Basic Plan",
    description: "For small teams or office",
    buttonText: "Get A Proposal",
    priceWithUnit: "$1,000",
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }
      }),
      text: "100 keyphrases optimized",
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }
      }),
      text: "20 pages optimized",
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }
      }),
      text: "4.5 content, outreach, UX, or CRO assets per quarter",
      isAvailable: false
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCloseCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }
      }),
      text: "4 custom dashboards",
      isAvailable: false
    }]
  }, {
    id: 2,
    name: "Corporate Plan",
    description: "For medium-sized business.",
    priceWithUnit: "$2,500",
    buttonText: "Get a proposal",
    anotherOption: "Or Start 14 Days trail",
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }),
      text: "150 keyphrases optimized",
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }
      }),
      text: "30 pages optimized",
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }
      }),
      text: "9 content, outreach, UX, or CRO assets per quarter",
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }),
      text: "8 custom dashboards",
      isAvailable: false
    }]
  }, {
    id: 3,
    header: "Suggested",
    headerIcon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 19
      }
    }),
    name: "Enterprise Plan",
    description: "For international businesses.",
    priceWithUnit: "$5,000",
    buttonText: "Get a proposal",
    anotherOption: "Or Start 14 Days trail",
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }
      }),
      text: "200 keyphrases optimized",
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }
      }),
      text: "40 pages optimized",
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 17
        }
      }),
      text: "12 content, outreach, UX, or CRO assets per quarter",
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 17
        }
      }),
      text: "12 custom dashboards",
      isAvailable: true
    }]
  }],
  annual: [{
    id: 1,
    name: "Basic Plan",
    description: "For small teams or office",
    buttonText: "Get A Proposal",
    priceWithUnit: "$1,000",
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 17
        }
      }),
      text: "1500 keyphrases optimized",
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 17
        }
      }),
      text: "300 pages optimized",
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 17
        }
      }),
      text: "54 content, outreach, UX, or CRO assets per quarter",
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCloseCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 17
        }
      }),
      text: "75 custom dashboards",
      isAvailable: true
    }]
  }, {
    id: 2,
    name: "Corporate Plan",
    description: "For medium-sized business.",
    priceWithUnit: "$2,500",
    buttonText: "Get a proposal",
    anotherOption: "Or Start 14 Days trail",
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 17
        }
      }),
      text: "2,250 keyphrases optimized",
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 17
        }
      }),
      text: "450 pages optimized",
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 17
        }
      }),
      text: "135 content, outreach, UX, or CRO assets per quarter",
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 17
        }
      }),
      text: "120 custom dashboards",
      isAvailable: true
    }]
  }, {
    id: 3,
    header: "Suggested",
    headerIcon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 19
      }
    }),
    name: "Enterprise Plan",
    description: "For international businesses.",
    priceWithUnit: "$5,000",
    buttonText: "Get a proposal",
    anotherOption: "Or Start 14 Days trail",
    points: [{
      id: 1,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 17
        }
      }),
      text: "3000 keyphrases optimized",
      isAvailable: true
    }, {
      id: 2,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 17
        }
      }),
      text: "600 pages optimized",
      isAvailable: true
    }, {
      id: 3,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 17
        }
      }),
      text: "180 content, outreach, UX, or CRO assets per quarter",
      isAvailable: true
    }, {
      id: 4,
      icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCheckmarkCircle"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 17
        }
      }),
      text: "180 custom dashboards",
      isAvailable: true
    }]
  }]
};
const responsive = {
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
  const {
    monthly,
    annual
  } = packages;
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    active: "monthly",
    pricingPlan: monthly
  });

  const handlePricingPlan = plan => {
    if (plan === "annual") {
      setState({
        active: "annual",
        pricingPlan: annual
      });
    } else {
      setState({
        active: "monthly",
        pricingPlan: monthly
      });
    }
  };

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    slidesToSlide: 1,
    items: 3,
    containerClass: "carousel-container",
    customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 24
      }
    }),
    dotListClass: "",
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: "",
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: ""
  };
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
    id: "pricing",
    sx: {
      variant: "section.pricing"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    slogan: "Payment Plan",
    title: "Choose your package",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    sx: styles.buttonGroup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: styles.buttonGroupInner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
    className: state.active === "monthly" ? "active" : "",
    type: "button",
    "aria-label": "Monthly",
    onClick: () => handlePricingPlan("monthly"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 13
    }
  }, "Monthly Plan"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
    className: state.active === "monthly" ? "active" : "",
    type: "button",
    "aria-label": "Annual",
    onClick: () => handlePricingPlan("annual"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 13
    }
  }, "Annual Plan"))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: styles.pricingWrapper,
    className: "pricing__wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({}, sliderParams, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 11
    }
  }), state.pricingPlan.map(packageData => Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: styles.pricingItem,
    key: packageData.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_price_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: packageData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 17
    }
  })))))));
}
const fadeIn = _emotion_core__WEBPACK_IMPORTED_MODULE_1__["keyframes"]`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = _emotion_core__WEBPACK_IMPORTED_MODULE_1__["keyframes"]`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricingWrapper: {
    mb: "-40px",
    mt: "-40px",
    mx: -3,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    "&.pricing__wrapper .package__card": {
      ".package__header": {
        animation: `${fadeIn} 0.8s ease-in`
      },
      "ul > li": {
        animation: `${fadeIn2} 0.7s ease-in`
      },
      ".package__price": {
        animation: `${fadeIn2} 0.9s ease-in`
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`
      }
    },
    ".carousel-container": {
      width: "100%",
      "> ul > li ": {
        display: "flex"
      }
    },
    ".button__group": {
      display: ["flex", null, null, null, "none"],
      mb: [4, null, null, null, 0]
    }
  },
  pricingItem: {
    mx: 3,
    display: "flex",
    flexShrink: 0,
    flex: "1 1 auto"
  },
  buttonGroup: {
    justifyContent: "center",
    mb: "7",
    mt: ["-15px", "-35px"],
    position: "relative",
    zIndex: 2
  },
  buttonGroupInner: {
    display: "flex",
    padding: "7px",
    margin: "0 auto",
    borderRadius: "5px",
    backgroundColor: "#F7F8FB",
    button: {
      border: 0,
      padding: ["15px 20px", "15px 27px"],
      borderRadius: "5px",
      color: "text",
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: "transparent",
      cursor: "pointer",
      fontFamily: "body",
      letterSpacing: "-0.24px",
      transition: "all 0.3s",
      "&.active": {
        color: "#0f2137",
        backgroundColor: "#ffffff",
        boxShadow: "0 3px 4px rgba(38, 78, 118, 0.1)"
      },
      "&:focus": {
        outline: 0
      }
    }
  }
};

/***/ }),

/***/ "./src/sections/service-section.js":
/*!*****************************************!*\
  !*** ./src/sections/service-section.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal-video */ "react-modal-video");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/service-thumb.png */ "./src/assets/service-thumb.png");
/* harmony import */ var assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/shape-pattern1.png */ "./src/assets/shape-pattern1.png");
/* harmony import */ var assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/services/smart.svg */ "./src/assets/services/smart.svg");
/* harmony import */ var assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/services/secure.svg */ "./src/assets/services/secure.svg");
/* harmony import */ var assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\sections\\service-section.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */










const data = {
  subTitle: "our service",
  title: "Business Goals Achieved with SEO",
  features: [{
    id: 1,
    imgSrc: assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    altText: "On-Page SEO",
    title: "On-Page SEO",
    text: "We will optimize individual web pages in order to rank you higher and earn more relevant traffic in search engines."
  }, {
    id: 2,
    imgSrc: assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    altText: "Off-Page SEO",
    title: "Off-Page SEO",
    text: "We impact your rankings by telling search engines that your website is important to others on the web."
  }]
};
function ServiceSection() {
  const {
    0: videoOpen,
    1: setVideoOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleClick = e => {
    e.preventDefault();
    setVideoOpen(true);
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: "section.services"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "Thumbnail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    sx: styles.videoBtn,
    onClick: handleClick,
    "aria-label": "Play Button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoIosPlay"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.shapeBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_3__["default"], {
    subTitle: data.subTitle,
    title: data.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, data.features.map(feature => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    key: feature.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: feature.imgSrc,
    alt: feature.altText,
    sx: styles.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 19
    }
  }, feature.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, feature.text))))))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_modal_video__WEBPACK_IMPORTED_MODULE_4___default.a, {
    channel: "youtube",
    isOpen: videoOpen,
    videoId: "0eKVizvYSUQ",
    onClose: () => setVideoOpen(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }));
}
const playPluse = _emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;
const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: "relative"
  },
  containerBox: {
    display: "flex",
    alignItems: ["flex-start", null, null, "center"],
    justifyContent: ["flex-start", null, null, "space-between"],
    flexDirection: ["column", null, null, "row"],
    pb: [0, null, null, null, null, 7]
  },
  thumbnail: {
    mr: ["auto", null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ["auto", null, null, 0],
    display: "inline-flex",
    position: "relative",
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"]
    }
  },
  shapeBox: {
    position: "absolute",
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ["none", null, null, null, null, "inline-block"]
  },
  videoBtn: {
    zIndex: 2,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: ["60px", null, "80px", null, "100px"],
    height: ["60px", null, "80px", null, "100px"],
    p: "0px !important",
    backgroundColor: "transparent",
    "&::before": {
      position: "absolute",
      content: '""',
      left: "50%",
      top: "50%",
      transform: "translateX(-50%) translateY(-50%)",
      display: "block",
      width: ["60px", null, "80px", null, "100px"],
      height: ["60px", null, "80px", null, "100px"],
      backgroundColor: "primary",
      borderRadius: "50%",
      animation: `${playPluse} 1.5s ease-out infinite`,
      opacity: 0.5
    },
    "> span": {
      backgroundColor: "rgba(255,255,255,0.5)",
      width: "inherit",
      height: "inherit",
      textAlign: "center",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "all 0.5s",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      zIndex: 2
    },
    svg: {
      fontSize: [40, null, 48, null, 62]
    }
  },
  contentBox: {
    width: ["100%", null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ["center", null, null, "left"]
  },
  grid: {
    pr: [2, 0, null, null, 6, "70px"],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: "auto",
    width: ["100%", 370, 420, "100%"],
    gridGap: ["35px 0", null, null, null, "50px 0"],
    gridTemplateColumns: ["repeat(1,1fr)"]
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    transition: "all 0.3s"
  },
  icon: {
    width: ["45px", null, null, null, "55px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, null, null, null, 4]
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    mt: "-5px",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3]
    },
    subTitle: {
      fontSize: [1, null, null, "14px", 1],
      fontWeight: 400,
      lineHeight: 1.9
    }
  },
  videoWrapper: {
    maxWidth: "100%",
    position: "relative",
    width: "900px",
    "&:before": {
      content: '""',
      display: "block",
      paddingTop: "56.25%"
    },
    iframe: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0
    }
  }
};

/***/ }),

/***/ "./src/sections/team-section.js":
/*!**************************************!*\
  !*** ./src/sections/team-section.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_team_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/team-card */ "./src/components/team-card.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_team_member_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/team/member-1.png */ "./src/assets/team/member-1.png");
/* harmony import */ var assets_team_member_1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_1_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/team/member-2.png */ "./src/assets/team/member-2.png");
/* harmony import */ var assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_team_member_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/team/member-3.png */ "./src/assets/team/member-3.png");
/* harmony import */ var assets_team_member_3_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_3_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_team_member_4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/team/member-4.png */ "./src/assets/team/member-4.png");
/* harmony import */ var assets_team_member_4_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_4_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_team_member_5_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/team/member-5.png */ "./src/assets/team/member-5.png");
/* harmony import */ var assets_team_member_5_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_5_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_team_member_6_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/team/member-6.png */ "./src/assets/team/member-6.png");
/* harmony import */ var assets_team_member_6_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_6_png__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "F:\\Portfolio\\lokalyst\\src\\sections\\team-section.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */











const data = [{
  id: 1,
  imgSrc: assets_team_member_1_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: "Saimon Harmer",
  title: "Saimon Harmer",
  designation: "CEO and Founder",
  socialProfile: [{
    id: 1,
    name: "facebook",
    path: "#",
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaFacebookF"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 15
      }
    })
  }, {
    id: 2,
    name: "twitter",
    path: "#",
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaTwitter"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 15
      }
    })
  }, {
    id: 3,
    name: "instagram",
    path: "#",
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaInstagram"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 15
      }
    })
  }]
}, {
  id: 2,
  imgSrc: assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: "Aubrey Lyons",
  title: "Aubrey Lyons",
  designation: "Founder",
  socialProfile: [{
    id: 1,
    name: "facebook",
    path: "#",
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaFacebookF"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    })
  }, {
    id: 2,
    name: "twitter",
    path: "#",
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaTwitter"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    })
  }, {
    id: 3,
    name: "instagram",
    path: "#",
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaInstagram"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    })
  }]
}, {
  id: 3,
  imgSrc: assets_team_member_3_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  altText: "Mateo De la Garza",
  title: "Mateo De la Garza",
  designation: "Director of Global SEO",
  socialProfile: [{
    id: 1,
    name: "facebook",
    path: "#",
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaFacebookF"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 15
      }
    })
  }, {
    id: 2,
    name: "twitter",
    path: "#",
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaTwitter"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 15
      }
    })
  }, {
    id: 3,
    name: "instagram",
    path: "#",
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaInstagram"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 15
      }
    })
  }]
}, {
  id: 4,
  imgSrc: assets_team_member_4_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  altText: "Miloslav Kolá",
  title: "Miloslav Kolá",
  designation: "Lead SEO Specialist",
  socialProfile: [{
    id: 1,
    name: "facebook",
    path: "#",
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaFacebookF"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 15
      }
    })
  }, {
    id: 2,
    name: "twitter",
    path: "#",
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaTwitter"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 15
      }
    })
  }, {
    id: 3,
    name: "instagram",
    path: "#",
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaInstagram"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 15
      }
    })
  }]
}, {
  id: 5,
  imgSrc: assets_team_member_5_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  altText: "Yannis Zenakis",
  title: "Yannis Zenakis",
  designation: "SEO Specialist",
  socialProfile: [{
    id: 1,
    name: "facebook",
    path: "#",
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaFacebookF"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 15
      }
    })
  }, {
    id: 2,
    name: "twitter",
    path: "#",
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaTwitter"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 15
      }
    })
  }, {
    id: 3,
    name: "instagram",
    path: "#",
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaInstagram"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 15
      }
    })
  }]
}, {
  id: 6,
  imgSrc: assets_team_member_6_png__WEBPACK_IMPORTED_MODULE_10___default.a,
  altText: "Aaron Nunez",
  title: "Aaron Nunez",
  designation: "Web Designer",
  socialProfile: [{
    id: 1,
    name: "facebook",
    path: "#",
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaFacebookF"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 15
      }
    })
  }, {
    id: 2,
    name: "twitter",
    path: "#",
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaTwitter"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 15
      }
    })
  }, {
    id: 3,
    name: "instagram",
    path: "#",
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaInstagram"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 15
      }
    })
  }]
}];
function TeamSection() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "our team",
    title: "The most qualified and talented individuals you'll ever meet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }, data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_team_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: item.id,
    src: item.imgSrc,
    altText: item.altTexr,
    title: item.title,
    designation: item.designation,
    social: item.socialProfile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  })))));
}
const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ["35px 0px", null, 0, null, null, "30px 35px"],
    gridTemplateColumns: ["repeat(2,1fr)", null, "repeat(2,1fr)", null, "repeat(3,1fr)"]
  }
};

/***/ }),

/***/ "./src/sections/testimonial.js":
/*!*************************************!*\
  !*** ./src/sections/testimonial.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestimonialCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/rating */ "./src/components/rating.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/** @jsx jsx */









const data = [{
  id: 1,
  title: "Guranteed Success",
  description: "The meticulous work done to drive up my organic traffic was well worth the cost",
  avatar: assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  name: "Brooke Reyes",
  designation: "@dBrooke.Reyes",
  review: 4
}, {
  id: 2,
  title: "Great team of high performers",
  description: "I had a huge list of goals I wanted to achieve and they completed every single one.",
  avatar: assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  name: "Marshall Wells",
  designation: "@Marshall.Wells",
  review: 5
}, {
  id: 3,
  title: "Very knowledgeable and professional",
  description: "This field is not my forte but I felt very welcome asking questions and I received straight-forward asnwers.",
  avatar: assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  name: "Victor Fabela",
  designation: "@Victor.Fabela",
  review: 5
}, {
  id: 4,
  title: "Almost an overnight change!",
  description: "The team I worked with hit the pavement running and I saw huge changes almost immediately!.",
  avatar: assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  name: "Jackson Campbell",
  designation: "@jackson.campbell",
  review: 4
}];
const responsive = {
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
const carouselParams = {
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
      columnNumber: 22
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
      variant: "section.testimonial"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    css: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Testimonial",
    title: "Meet Client Satisfaction",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.carouselWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({}, carouselParams, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }), data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.reviewCard,
    key: item.sliderClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_rating__WEBPACK_IMPORTED_MODULE_3__["default"], {
    rating: item.review,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    sx: styles.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, item.description), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "card-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: item.avatar,
    alt: "Client Image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 19
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "reviewer-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h4",
    sx: styles.heading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 19
    }
  }, item.name), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.designation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 19
    }
  }, item.designation))))))));
}
const styles = {
  carouselWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    mt: "-30px",
    px: "15px",
    ".carousel-container": {
      width: "100%",
      maxWidth: ["100%", null, null, "750px", "1000px", "1180px", null, "calc(50% + 865px)"],
      mr: ["auto", null, null, null, null, null, null, "-220px"],
      ml: "auto",
      ".react-multi-carousel-item": {
        transition: "all 0.25s"
      },
      ".react-multi-carousel-item--active:nth-of-type(4n)": {
        opacity: "0.5",
        "@media screen and (max-width: 1620px)": {
          opacity: 1
        }
      }
    }
  },
  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: ["30px 20px 35px", "30px 25px 35px", "30px 20px 35px", "35px 30px 40px 40px", "30px 30px 35px", "35px 30px 40px 40px"],
    bg: "white",
    textAlign: "left",
    m: ["28px 5px 30px 5px", "28px 20px 30px 20px", "28px 15px 30px 15px", "28px 15px 30px 15px", "30px 20px 40px"],
    "&:hover": {
      boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.1)"
    },
    ".rating": {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: "none",
        mb: 0,
        display: "flex"
      },
      svg: {
        marginRight: "2px",
        "&:last-of-type": {
          marginRight: 0
        }
      },
      ".star": {
        color: "primary",
        mr: "1px"
      },
      ".star-o": {
        color: "#ddd",
        mr: "1px"
      }
    },
    ".card-footer": {
      display: "flex",
      alignItems: "center",
      marginTop: [5, null, null, "33px"],
      ".image": {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: "flex",
        img: {
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          objectFit: "cover"
        }
      }
    }
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1.6
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2]
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3
  },
  designation: {
    color: "primary",
    fontWeight: "500",
    fontSize: 1,
    lineHeight: 1.4
  }
};

/***/ }),

/***/ "./src/sections/workflow.js":
/*!**********************************!*\
  !*** ./src/sections/workflow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkFlow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
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






const data = [{
  id: 1,
  title: "Research",
  text: "Identifying a group of keyword phrases that will be used in optimization and analyze target competitor sites."
}, {
  id: 2,
  title: "Reporting & Goal Setting",
  text: "After developing a complete picture of your site’s starting position, goals are set for the SEO plan."
}, {
  id: 3,
  title: "Page Optimization",
  text: "We meticulously pick page titles, a site map, and META data to increase your site's efficiency."
}, {
  id: 4,
  title: "Follow Up Reporting and Analysis",
  text: "The same reporting done in the initial phase of the campaign is done again at regular intervals, post-optimization."
}];
function WorkFlow() {
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
  }, data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    key: item.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.iconBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, `0${item.id}`), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, item.text)))))));
}
const styles = {
  workflow: {
    backgroundColor: "primary",
    backgroundImage: `url(${assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default.a})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    py: [8, null, 9, null, null, 10]
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: ["35px 0", null, "45px 30px", null, "50px 25px", null, null, "50px 65px"],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)", null, "repeat(4,1fr)"]
  },
  card: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    textAlign: ["center", null, "left"],
    width: ["100%", "80%", "100%"],
    mx: ["auto"],
    px: [4, null, null, 0],
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "center center",
      width: 215,
      height: 60,
      "@media screen and (max-width:1220px)": {
        display: "none"
      }
    },
    "&:nth-of-type(2n-1)::before": {
      backgroundImage: `url(${assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4___default.a})`
    },
    "&:nth-of-type(2n)::before": {
      backgroundImage: `url(${assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5___default.a})`,
      top: 17
    },
    "&:last-child::before": {
      display: "none"
    }
  },
  iconBox: {
    width: ["50px", null, "60px", null, null, "70px"],
    height: ["50px", null, "60px", null, null, "70px"],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    mb: [5, null, null, null, null, 6],
    mx: ["auto", null, 0],
    fontSize: [6, null, 7, null, null, "30px"],
    fontWeight: 700,
    justifyContent: "center",
    color: "#234582"
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: "white",
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3]
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: "white",
      opacity: 0.75,
      pr: [0, null, null, null, null, 5]
    }
  }
};

/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // example colors with dark mode
  colors: {
    text: '#020202',
    // body color and primary color
    text_secondary: '#575757',
    // secondary body color
    heading: '#056676',
    // primary heading color
    heading_secondary: '#5eaaa8',
    // heading color
    background: '#FFFFFF',
    // body background color
    background_secondary: '#F9FBFD',
    // secondary background color
    border_color: '#e8ded2',
    // border color
    yellow: '#e8ded2',
    // border color
    primary: '#056676',
    // primary button and link color
    secondary: '#5eaaa8',
    // secondary color - can be used for hover states
    muted: '#a3d2ca',
    // muted color
    accent: '#dc6454',
    // a contrast color for emphasizing UI
    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111'
      }
    }
  },
  breakpoints: ['480px', '640px', '768px', '1024px', '1220px', '1366px', '1620px'],
  fonts: {
    body: "'Varela Round', sans-serif",
    heading: "'Varela Round', sans-serif"
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: 1.8,
    heading: 1.5
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px'
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: ['100%', null, null, '780px', '1020px', '1200px', null, '1310px'],
      px: [4, 6]
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3,
      position: 'absolute',
      width: '100%'
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    main: {}
  },
  section: {
    keyFeature: {
      pt: [8, null, 9, null, null, 10],
      pb: ['90px', null, 9, null, null, 10, null, '165px']
    },
    feature: {
      pb: [8, null, 9, null, null, 10, null, '170px']
    },
    news: {
      pb: [8, null, 9, null, null, 10, null, '170px']
    },
    coreFeature: {
      pb: [8, null, 9, null, null, 10, null, '170px'],
      overflow: 'hidden'
    },
    testimonial: {
      pt: [8, null, 8, '70px', null, 8, null, '145px'],
      pb: ['90px', null, 9, null, null, 10, null, '190px'],
      overflow: 'hidden'
    },
    services: {
      pb: ['90px', null, 9, null, null, 10, null, '150px']
    },
    pricing: {
      pt: [8, null, 9, null, null, 10, null, '180px'],
      pb: ['90px', null, 9, null, null, 10, null, '180px']
    }
  },
  sectionHeader: {
    width: ['100%', null, '540px'],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: ['-3px', null, -1],
    marginBottom: ['50px', null, '60px', null, null, '65px', null, '80px'],
    mx: 'auto',
    title: {
      fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
      color: 'heading',
      lineHeight: [1.3, null, null, 1.25],
      textAlign: 'center',
      fontWeight: '700',
      letterSpacing: '-.5px'
    },
    subTitle: {
      fontSize: [0, '13px', null, '14px'],
      color: 'primary',
      textAlign: 'center',
      letterSpacing: ['1.5px', null, '2px'],
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: 2,
      lineHeight: 1.5
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [4],
      letterSpacing: '-.55px',
      color: 'heading'
    },
    heroPrimary: {
      color: 'heading',
      fontSize: ['32px', '36px', '42px', '40px', '42px', '52px', '58px', '66px'],
      lineHeight: [1.3, null, null, null, null, 1.2],
      fontWeight: 700,
      mb: [4, null, null, null, null, 5]
    },
    heroSecondary: {
      fontSize: [2, null, '17px', null, null, '19px', 4],
      lineHeight: [1.9, null, null, 2],
      fontWeight: 'body',
      mb: 5,
      px: [0, null, 5, 6, null, 8, 9],
      color: 'heading'
    },
    title: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontWeight: 'bold',
      fontSize: [3, null, 4],
      lineHeight: 1.25,
      mb: 1
    },
    lead: {
      fontSize: 40,
      fontFamily: 'Varela Round',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#0F2137'
    },
    muted: {
      lineHeight: '26px',
      color: 'muted'
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px'
    }
  },
  links: {
    default: {
      cursor: 'pointer'
    },
    bold: {
      fontWeight: 'bold'
    },
    nav: {
      display: ['none', null, 'inline-block'],
      px: 25,
      fontWeight: 'normal'
    },
    blog: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      transition: 'color 0.25s',
      '&:hover': {
        color: 'primary'
      }
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none'
    },
    logo: {
      display: 'flex'
    }
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999
    }
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, 'none']
    },
    // default variant for MenuButton
    // you can reference other values defined in the theme
    defaultBtn: {
      borderRadius: '45px',
      fontSize: ['14px', null, null, 2],
      letterSpacings: '-0.15px',
      padding: ['12px 20px', null, '15px 30px'],
      fontFamily: 'body',
      cursor: 'pointer',
      lineHeight: 1.2,
      transition: 'all 0.25s',
      fontWeight: 500,
      '&:focus': {
        outline: 0
      }
    },
    primary: {
      variant: 'buttons.defaultBtn',
      color: 'white',
      bg: 'primary',
      '&:hover': {
        boxShadow: 'rgba(233, 76, 84, 0.57) 0px 9px 20px -5px'
      }
    },
    whiteButton: {
      variant: 'buttons.defaultBtn',
      color: 'heading_secondary',
      bg: 'white',
      '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 12px 24px -10px'
      }
    },
    secondary: {
      variant: 'buttons.defaultBtn',
      border: '2px solid',
      borderColor: 'primary',
      color: 'primary',
      bg: 'transparent',
      padding: ['10px 15px', null, '15px 30px'],
      '&:hover': {
        color: 'white',
        bg: 'primary'
      }
    },
    textButton: {
      variant: 'buttons.defaultBtn',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      color: 'white',
      svg: {
        fontSize: [4, 6],
        mr: 2
      }
    }
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4
    },
    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFFFF',
      border: '1px solid #EDEFF6',
      borderRadius: 5
    },
    featureCard: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      p: 3
    }
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold'
    },
    input: {
      borderRadius: 8,
      borderColor: 'border_color',
      height: 60,
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none'
      }
    }
  },
  badges: {
    primary: {
      color: 'background',
      bg: '#28A5FF',
      borderRadius: 30,
      p: '3px 11px',
      fontSize: 1,
      letterSpacing: '-0.5px'
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px'
    }
  },
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSmoothing: 'antialiased',
      // Modal Global Style
      '.modal-video-close-btn': {
        cursor: 'pointer'
      },
      '.modal-video-movie-wrap': {
        margin: 6,
        width: 'auto'
      }
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7'
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none'
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important'
    }
  }
});

/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "rc-drawer":
/*!****************************!*\
  !*** external "rc-drawer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-custom-scrollbars":
/*!******************************************!*\
  !*** external "react-custom-scrollbars" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-modal-video":
/*!************************************!*\
  !*** external "react-modal-video" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal-video");

/***/ }),

/***/ "react-multi-carousel":
/*!***************************************!*\
  !*** external "react-multi-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "theme-ui":
/*!***************************!*\
  !*** external "theme-ui" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("theme-ui");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Fycm93RXZlbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9hcnJvd09kZC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iYW5uZXItdGh1bWIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvY29yZS1mZWF0dXJlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZlYXR1cmUvcGFydG5lcnNoaXAuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZmVhdHVyZS9wZXJmb3JtYW5jZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mZWF0dXJlL3N1YnNjcmlwdGlvbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mZWF0dXJlL3N1cHBvcnQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMva2V5LWZlYXR1cmUvcGFydG5lcnNoaXAuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMva2V5LWZlYXR1cmUvcGVyZm9ybWFuY2Uuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMva2V5LWZlYXR1cmUvc3Vic2NyaXB0aW9uLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2tleS1mZWF0dXJlL3N1cHBvcnQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wYXR0ZXJuQkcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VydmljZS10aHVtYi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zZXJ2aWNlcy9zZWN1cmUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VydmljZXMvc21hcnQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2hhcGUtbGVmdC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zaGFwZS1wYXR0ZXJuMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zaGFwZS1wYXR0ZXJuMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zaGFwZS1yaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZWFtL21lbWJlci0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RlYW0vbWVtYmVyLTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVhbS9tZW1iZXItMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZWFtL21lbWJlci00LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RlYW0vbWVtYmVyLTUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVhbS9tZW1iZXItNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXI0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b24tZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZlYXR1cmUtY2FyZC1jb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9tb2JpbGUtZHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9nby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcmljZS1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHQtZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvY29yZS1mZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9mZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9rZXktZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvcGFja2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvc2VydmljZS1zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy90ZWFtLXNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFsLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy93b3JrZmxvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJjLWRyYXdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY3VzdG9tLXNjcm9sbGJhcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2lvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tb2RhbC12aWRlb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW11bHRpLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RpY2t5bm9kZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRoZW1lLXVpXCIiXSwibmFtZXMiOlsibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkSHJlZiIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwic3RhdGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImNoYW5nZSIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJyZXNvbHZlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJjbGVhblBhdGhuYW1lIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImRlY29kZSIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInZhbHVlIiwiQXJyYXkiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJhbXMiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsImVuY29kZVVSSSIsInNlYXJjaFBhcmFtcyIsInJlc3VsdCIsIml0ZW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJvcHRpb25hbCIsInJlcGVhdCIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInNlZ21lbnQiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJCdXR0b25Hcm91cCIsIm5leHQiLCJwcmV2aW91cyIsIndpZHRoIiwic3R5bGVzIiwiYnV0dG9uR3JvdXAiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYiIsImJ1dHRvbiIsImJnIiwiYm9yZGVyIiwiZm9udFNpemUiLCJjdXJzb3IiLCJweCIsImNvbG9yIiwidHJhbnNpdGlvbiIsIm91dGxpbmUiLCJEcmF3ZXIiLCJjbGFzc05hbWUiLCJjbG9zZUJ1dHRvbiIsImNsb3NlQnV0dG9uU3R5bGUiLCJkcmF3ZXJIYW5kbGVyIiwidG9nZ2xlSGFuZGxlciIsIm9wZW4iLCJwbGFjZW1lbnQiLCJkcmF3ZXJTdHlsZSIsImNsb3NlQnRuU3R5bGUiLCJ0cmltIiwiZGVmYXVsdFByb3BzIiwiRmVhdHVyZUNhcmRDb2x1bW4iLCJzcmMiLCJhbHRUZXh0IiwidGl0bGUiLCJ0ZXh0IiwiY2FyZCIsImltZyIsIndyYXBwZXIiLCJzdWJUaXRsZSIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwidGV4dEFsaWduIiwibXgiLCJtbCIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwiRmVhdHVyZUNhcmQiLCJoZWlnaHQiLCJmbGV4U2hyaW5rIiwibXIiLCJtdCIsIm1lbnVJdGVtIiwibGFiZWwiLCJGb290ZXIiLCJmb290ZXIiLCJmb290ZXJCb3R0b21BcmVhIiwiRm9vdGVyTG9nbyIsIm1lbnVzIiwibWFwIiwibGluayIsImNvcHlyaWdodCIsImJvcmRlclRvcCIsImJvcmRlclRvcENvbG9yIiwicHQiLCJwYiIsIm5hdiIsImZsZXhXcmFwIiwidGV4dERlY29yYXRpb24iLCJIZWFkZXIiLCJoZWFkZXIiLCJjb250YWluZXIiLCJMb2dvRGFyayIsIm1lbnVJdGVtcyIsInBvc2l0aW9uQW5pbSIsImtleWZyYW1lcyIsInB5IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwiYW5pbWF0aW9uIiwiYm94U2hhZG93IiwiYSIsInNvY2lhbCIsImljb24iLCJNb2JpbGVEcmF3ZXIiLCJpc0RyYXdlck9wZW4iLCJzZXRpc0RyYXdlck9wZW4iLCJ1c2VTdGF0ZSIsInByZXZTdGF0ZSIsImRyYXdlciIsImNsb3NlIiwiY29udGVudCIsIm1lbnUiLCJtZW51Rm9vdGVyIiwic29jaWFsSXRlbSIsInJpZ2h0IiwiekluZGV4IiwiYm9yZGVyQm90dG9tIiwiZnciLCJib3JkZXJSYWRpdXMiLCJMYXlvdXQiLCJpc1N0aWNreSIsInNldElzU3RpY2t5IiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJzdGF0dXMiLCJTdGlja3kiLCJTVEFUVVNfRklYRUQiLCJTVEFUVVNfT1JJR0lOQUwiLCJ2YXJpYW50IiwiTmF2TGluayIsInJlc3QiLCJMaXN0IiwiaXRlbXMiLCJwYXJlbnRTdHlsZSIsImNoaWxkU3R5bGUiLCJsaXN0U3R5bGVUeXBlIiwibWFyZ2luIiwicGFkZGluZyIsImlzQXZhaWxhYmxlIiwibGlzdEljb24iLCJMb2dvIiwiUHJpY2VDYXJkIiwiZGVzY3JpcHRpb24iLCJwcmljZVdpdGhVbml0IiwiYnV0dG9uVGV4dCIsImFub3RoZXJPcHRpb24iLCJwb2ludHMiLCJwcmljaW5nQm94IiwicHJpY2luZ0hlYWRlciIsImxpc3RJdGVtIiwicHJpY2UiLCJvcGFjaXR5IiwibGV0dGVyU3BhY2luZyIsIm1hcmdpbkJvdHRvbSIsInBsIiwiZm9udEZhbWlseSIsImZvbnRTdHlsZSIsIlJhdGluZyIsInJhdGluZyIsInRvdGFsUmF0aW5nIiwiU2VjdGlvbkhlYWRlciIsInNsb2dhbiIsImlzV2hpdGUiLCJTRU8iLCJhdXRob3IiLCJtZXRhIiwibWV0YURhdGEiLCJwcm9wZXJ0eSIsImNvbmNhdCIsImxhbmciLCJUZWFtQ2FyZCIsImRlc2lnbmF0aW9uIiwibWVtYmVyVGh1bWIiLCJpbmZvV3JhcHBlciIsInNvY2lhbFNoYXJlIiwiaWQiLCJteSIsImJvcmRlckNvbG9yIiwiYm90dG9tIiwiVGV4dEZlYXR1cmUiLCJidG5OYW1lIiwiYnRuVVJMIiwidGV4dFRyYW5zZm9ybSIsIkluZGV4UGFnZSIsInRoZW1lIiwiQmFubmVyIiwiYmFubmVyIiwiY29udGVudEJveCIsImltYWdlQm94IiwiQmFubmVySW1nIiwiYmFja2dyb3VuZEltYWdlIiwiU2hhcGVMZWZ0IiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwiU2hhcGVSaWdodCIsIm1pbkhlaWdodCIsIkNvcmVGZWF0dXJlIiwiY29udGFpbmVyQm94IiwidGh1bWJuYWlsIiwiRmVhdHVyZVRodW1iIiwic2hhcGVCb3giLCJzaGFwZVBhdHRlcm4iLCJwciIsImltZ1NyYyIsIlBlcmZvcm1hbmNlIiwiUGFydG5lcnNoaXAiLCJTdWJzY3JpcHRpb24iLCJTdXBwb3J0IiwiRmVhdHVyZSIsImdyaWQiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIktleUZlYXR1cmUiLCJwYWNrYWdlcyIsIm1vbnRobHkiLCJoZWFkZXJJY29uIiwiYW5udWFsIiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiZHJhZ2dhYmxlIiwidGFibGV0IiwibW9iaWxlIiwiUGFja2FnZSIsInNldFN0YXRlIiwiYWN0aXZlIiwicHJpY2luZ1BsYW4iLCJoYW5kbGVQcmljaW5nUGxhbiIsInBsYW4iLCJzbGlkZXJQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJzbGlkZXNUb1NsaWRlIiwiY29udGFpbmVyQ2xhc3MiLCJjdXN0b21CdXR0b25Hcm91cCIsImRvdExpc3RDbGFzcyIsImZvY3VzT25TZWxlY3QiLCJpbmZpbml0ZSIsImtleUJvYXJkQ29udHJvbCIsIml0ZW1DbGFzcyIsIm1pbmltdW1Ub3VjaERyYWciLCJyZW5kZXJCdXR0b25Hcm91cE91dHNpZGUiLCJyZW5kZXJEb3RzT3V0c2lkZSIsInNob3dEb3RzIiwic2xpZGVyQ2xhc3MiLCJidXR0b25Hcm91cElubmVyIiwicHJpY2luZ1dyYXBwZXIiLCJwYWNrYWdlRGF0YSIsInByaWNpbmdJdGVtIiwiZmFkZUluIiwiZmFkZUluMiIsImZsZXgiLCJmZWF0dXJlcyIsIlNtYXJ0IiwiU2VjdXJlIiwiU2VydmljZVNlY3Rpb24iLCJ2aWRlb09wZW4iLCJzZXRWaWRlb09wZW4iLCJoYW5kbGVDbGljayIsInByZXZlbnREZWZhdWx0IiwiU2VydmljZVRodW1iIiwidmlkZW9CdG4iLCJmZWF0dXJlIiwicGxheVBsdXNlIiwiY29yZUZlYXR1cmUiLCJvcmRlciIsInRyYW5zZm9ybSIsInN2ZyIsInZpZGVvV3JhcHBlciIsIm1heFdpZHRoIiwicGFkZGluZ1RvcCIsImlmcmFtZSIsIk1lbWJlcjEiLCJzb2NpYWxQcm9maWxlIiwiTWVtYmVyMiIsIk1lbWJlcjMiLCJNZW1iZXI0IiwiTWVtYmVyNSIsIk1lbWJlcjYiLCJUZWFtU2VjdGlvbiIsImFsdFRleHIiLCJhdmF0YXIiLCJBdmF0YXIxIiwicmV2aWV3IiwiQXZhdGFyMiIsIkF2YXRhcjMiLCJBdmF0YXI0IiwibGFwdG9wIiwiY2Fyb3VzZWxQYXJhbXMiLCJUZXN0aW1vbmlhbENhcmQiLCJjYXJvdXNlbFdyYXBwZXIiLCJyZXZpZXdDYXJkIiwiaGVhZGluZyIsInVsIiwibGlzdFN0eWxlIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Ub3AiLCJvYmplY3RGaXQiLCJXb3JrRmxvdyIsIndvcmtmbG93IiwiaWNvbkJveCIsIlBhdHRlcm5CRyIsIkFycm93T2RkIiwiQXJyb3dFdmVuIiwiY29sb3JzIiwidGV4dF9zZWNvbmRhcnkiLCJoZWFkaW5nX3NlY29uZGFyeSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kX3NlY29uZGFyeSIsImJvcmRlcl9jb2xvciIsInllbGxvdyIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJtdXRlZCIsImFjY2VudCIsIm1vZGVzIiwiZGFyayIsImJyZWFrcG9pbnRzIiwiZm9udHMiLCJib2R5IiwiZm9udFNpemVzIiwiZm9udFdlaWdodHMiLCJib2xkIiwibGluZUhlaWdodHMiLCJsZXR0ZXJTcGFjaW5ncyIsImNhcHMiLCJzcGFjZSIsImxheW91dCIsInRvb2xiYXIiLCJtYWluIiwic2VjdGlvbiIsImtleUZlYXR1cmUiLCJuZXdzIiwib3ZlcmZsb3ciLCJ0ZXN0aW1vbmlhbCIsInNlcnZpY2VzIiwicHJpY2luZyIsInNlY3Rpb25IZWFkZXIiLCJoZXJvUHJpbWFyeSIsImhlcm9TZWNvbmRhcnkiLCJsZWFkIiwibGlua3MiLCJkZWZhdWx0IiwiYmxvZyIsImxvZ28iLCJpbWFnZXMiLCJidXR0b25zIiwiZGVmYXVsdEJ0biIsIndoaXRlQnV0dG9uIiwidGV4dEJ1dHRvbiIsImNhcmRzIiwib2ZmZXIiLCJmZWF0dXJlQ2FyZCIsImZvcm1zIiwiaW5wdXQiLCJ0IiwiYmFkZ2VzIiwicm9vdCIsImZvbnRTbW9vdGhpbmciLCJociIsInNyT25seSIsImNsaXAiLCJjbGlwUGF0aCIsIndoaXRlU3BhY2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7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UjtBQUlKMlMsbUJBQWEsRUFBRSxhQUpYO0FBS0o7QUFDQSxnQ0FBMEI7QUFDeEIzVSxjQUFNLEVBQUU7QUFEZ0IsT0FOdEI7QUFTSixpQ0FBMkI7QUFDekJ3RyxjQUFNLEVBQUUsQ0FEaUI7QUFFekJsSCxhQUFLLEVBQUU7QUFGa0I7QUFUdkIsS0FGQTtBQWdCTjtBQUNBc1YsTUFBRSxFQUFFO0FBQ0Y5VSxZQUFNLEVBQUUsQ0FETjtBQUVGdUYsa0JBQVksRUFBRSxXQUZaO0FBR0Y0RCxpQkFBVyxFQUFFO0FBSFgsS0FqQkU7QUFzQk47QUFDQXlILE1BQUUsRUFBRTtBQUNGQyxlQUFTLEVBQUU7QUFEVCxLQXZCRTtBQTBCTmtFLFVBQU0sRUFBRTtBQUNOL1UsWUFBTSxFQUFFLGNBREY7QUFFTmdWLFVBQUksRUFBRSxxQ0FGQTtBQUdOQyxjQUFRLEVBQUUsdUJBSEo7QUFJTjdTLFlBQU0sRUFBRSxnQkFKRjtBQUtOc0UsWUFBTSxFQUFFLGlCQUxGO0FBTU4wTSxjQUFRLEVBQUUsbUJBTko7QUFPTnpNLGFBQU8sRUFBRSxjQVBIO0FBUU4xQyxjQUFRLEVBQUUscUJBUko7QUFTTnpFLFdBQUssRUFBRSxnQkFURDtBQVVOMFYsZ0JBQVUsRUFBRTtBQVZOO0FBMUJGO0FBcFdLLENBQWYsRTs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZilcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKSA6IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChhcylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBiYXNlUGF0aCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGJhc2VQYXRoKVxuICAgICAgOiBiYXNlUGF0aCArIHBhdGhcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoY3VycmVudFBhdGg6IHN0cmluZywgaHJlZjogVXJsKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIHJldHVybiBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgIDogZmluYWxVcmwuaHJlZlxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIHVybEFzU3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcylcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhcyxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsQmFzZVBhdGgocmVzb2x2ZWRBcylcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IGRlbm9ybWFsaXplUGFnZVBhdGgoZGVsQmFzZVBhdGgocGF0aG5hbWUhKSlcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYWdlKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGFzUGF0aCksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG4gIGRlY29kZTogZGVjb2RlUGFyYW0sXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKFxuICAgICAgbWF0Y2hlclJlZ2V4LFxuICAgICAga2V5cyxcbiAgICAgIG1hdGNoZXJPcHRpb25zXG4gICAgKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVjb2RlUGFyYW0ocGFyYW06IHN0cmluZykge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKVxuICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgdGhyb3cgZXJyXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgKVxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2VuY29kZVVSSShcbiAgICAgIGRlc3RpbmF0aW9uQ29tcGlsZXIocGFyYW1zKVxuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFBhcmFtc1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIGl0ZW0pKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgdmFsdWUpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTWpBMElpQm9aV2xuYUhROUlqUXpJaUIyYVdWM1FtOTRQU0l3SURBZ01qQTBJRFF6SWlCbWFXeHNQU0p1YjI1bElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaVBnMEtQSEJoZEdnZ1pEMGlUVEF1TkRneE1qQXhJREV3TGpJMU56RkRNQzQwT0RFeU1ERWdNVEF1TWpVM01TQTVNaTQzT0RFeUlEZ3hMamM0TkRjZ01UazFMalE0TVNBeE1DNHlOVGN4SWlCemRISnZhMlU5SWlORE1rTkNSRVVpSUhOMGNtOXJaUzEzYVdSMGFEMGlNUzQxSWlCemRISnZhMlV0WkdGemFHRnljbUY1UFNJMUlEVWlMejROQ2p4d1lYUm9JR1E5SWsweE9EQXVOeUF6TGpRM05EVTFRekU0TUM0M0lETXVORGMwTlRVZ01UazVMamd4TlNBdE1pNHdOVEUzTnlBeU1ERXVOak0zSURRdU1qQTVNVFpETWpBekxqUTFPU0F4TUM0ME56QXhJREl3TWk0d09UTWdNVFl1T1RRME5DQXhPVFl1TVRjMklESTFMamd4TkRJaUlITjBjbTlyWlQwaUkwTXlRMEpFUlNJZ2MzUnliMnRsTFhkcFpIUm9QU0l4TGpVaUlITjBjbTlyWlMxa1lYTm9ZWEp5WVhrOUlqUWdOQ0l2UGcwS1BDOXpkbWMrRFFvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1qQTBJaUJvWldsbmFIUTlJalF6SWlCMmFXVjNRbTk0UFNJd0lEQWdNakEwSURReklpQm1hV3hzUFNKdWIyNWxJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQZzBLUEhCaGRHZ2daRDBpVFRBdU9UazVOelUySURNeUxqY3hPVFZETUM0NU9UazNOVFlnTXpJdU56RTVOU0E1TXk0eU9UazRJQzB6T0M0NE1EZ3hJREU1TmlBek1pNDNNVGsxSWlCemRISnZhMlU5SWlORE1rTkNSRVVpSUhOMGNtOXJaUzEzYVdSMGFEMGlNUzQxSWlCemRISnZhMlV0WkdGemFHRnljbUY1UFNJMUlEVWlMejROQ2p4d1lYUm9JR1E5SWsweE9ERXVNakU1SURNNUxqUTVOelpETVRneExqSXhPU0F6T1M0ME9UYzJJREl3TUM0ek16UWdORFV1TURJMElESXdNaTR4TlRZZ016Z3VOell6UXpJd015NDVOemdnTXpJdU5UQXhPU0F5TURJdU5qRXhJREkyTGpBeU56VWdNVGsyTGpZNU5DQXhOeTR4TlRjMUlpQnpkSEp2YTJVOUlpTkRNa05DUkVVaUlITjBjbTlyWlMxM2FXUjBhRDBpTVM0MUlpQnpkSEp2YTJVdFpHRnphR0Z5Y21GNVBTSTBJRFFpTHo0TkNqd3ZjM1puUGcwS1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jhbm5lci10aHVtYi0zOGNiOGI3MzdhODBiNGM4MjA5MDkwMTUyNjY3ODNmMC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvY29yZS1mZWF0dXJlLTc0OWRjMDg2ZWVjMjVhYzE0ZWQwYzkyYTY4NzZkMjllLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPVFVpSUdobGFXZG9kRDBpTVRBMUlpQjJhV1YzUW05NFBTSXdJREFnT1RVZ01UQTFJaUJtYVd4c1BTSnViMjVsSWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpUGcwS1BHY2dabWxzZEdWeVBTSjFjbXdvSTJacGJIUmxjakJmWkNraVBnMEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswME55NDBPVGs1SURFM0xqazVPVGxETmpJdU1UTTFOU0F4Tnk0NU9UazVJRGN6TGprNU9Ua2dNamt1T0RZME5DQTNNeTQ1T1RrNUlEUTBMalE1T1RsRE56TXVPVGs1T1NBMU9TNHhNelV6SURZeUxqRXpOVFVnTnpBdU9UazVPU0EwTnk0ME9UazVJRGN3TGprNU9UbERNekl1T0RZME5DQTNNQzQ1T1RrNUlESXhJRFU1TGpFek5UTWdNakVnTkRRdU5EazVPVU15TVNBeU9TNDROalEwSURNeUxqZzJORFFnTVRjdU9UazVPU0EwTnk0ME9UazVJREUzTGprNU9UbGFJaUJtYVd4c1BTSWpSa1kwTXpZeElpOCtEUW84Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUUTNMalE1T1RrZ01UY3VPVGs1T1VNMk1pNHhNelUxSURFM0xqazVPVGtnTnpNdU9UazVPU0F5T1M0NE5qUTBJRGN6TGprNU9Ua2dORFF1TkRrNU9VTTNNeTQ1T1RrNUlEVTVMakV6TlRNZ05qSXVNVE0xTlNBM01DNDVPVGs1SURRM0xqUTVPVGtnTnpBdU9UazVPVU16TWk0NE5qUTBJRGN3TGprNU9Ua2dNakVnTlRrdU1UTTFNeUF5TVNBME5DNDBPVGs1UXpJeElESTVMamcyTkRRZ016SXVPRFkwTkNBeE55NDVPVGs1SURRM0xqUTVPVGtnTVRjdU9UazVPVm9pSUdacGJHdzlJblZ5YkNnamNHRnBiblF3WDJ4cGJtVmhjaWtpTHo0TkNqd3ZaejROQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5ORE1nTUM0NU9UazVNelpJTlRJdU9UazVPVU0yT1M0MU5qZzFJREF1T1RrNU9UTTJJRGd5TGprNU9Ua2dNVFF1TkRNeE1TQTRNaTQ1T1RrNUlETXdMams1T1RsV05EQXVPVGs1T1VNNE1pNDVPVGs1SURVM0xqVTJPRElnTmprdU5UWTROU0EzTUM0NU9UazRJRFV5TGprNU9Ua2dOekF1T1RrNU9FZzBNME15Tmk0ME16RTFJRGN3TGprNU9UZ2dNVEl1T1RrNU9TQTFOeTQxTmpneUlERXlMams1T1RrZ05EQXVPVGs1T1ZZek1DNDVPVGs1UXpFeUxqazVPVGtnTVRRdU5ETXhNU0F5Tmk0ME16RTFJREF1T1RrNU9UTTJJRFF6SURBdU9UazVPVE0yV2lJZ1ptbHNiRDBpSTBaR05ETTJNU0l2UGcwS1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAwTXlBd0xqazVPVGt6TmtnMU1pNDVPVGs1UXpZNUxqVTJPRFVnTUM0NU9UazVNellnT0RJdU9UazVPU0F4TkM0ME16RXhJRGd5TGprNU9Ua2dNekF1T1RrNU9WWTBNQzQ1T1RrNVF6Z3lMams1T1RrZ05UY3VOVFk0TWlBMk9TNDFOamcxSURjd0xqazVPVGdnTlRJdU9UazVPU0EzTUM0NU9UazRTRFF6UXpJMkxqUXpNVFVnTnpBdU9UazVPQ0F4TWk0NU9UazVJRFUzTGpVMk9ESWdNVEl1T1RrNU9TQTBNQzQ1T1RrNVZqTXdMams1T1RsRE1USXVPVGs1T1NBeE5DNDBNekV4SURJMkxqUXpNVFVnTUM0NU9UazVNellnTkRNZ01DNDVPVGs1TXpaYUlpQm1hV3hzUFNKMWNtd29JM0JoYVc1ME1WOXNhVzVsWVhJcElpOCtEUW84Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUVXhMalF6TWpJZ05ERXVOak01T0VNMU1TNDJORFF4SURReExqUXlORGNnTlRFdU56VXdNaUEwTVM0eE56QTVJRFV4TGpjMU1ESWdOREF1T0RjM05GWXpPQzR4TmpnNFNEWXpWalEyTGpJNU5USkROak1nTkRjdU1ETTVNaUEyTWk0M016YzVJRFEzTGpZM056UWdOakl1TWpFek1pQTBPQzR5TURjMVF6WXhMalk0T0RjZ05EZ3VOek00TVNBMk1TNHdOVGd4SURRNUxqQXdNeklnTmpBdU16SXhOaUEwT1M0d01ETXlTRE0xTGpZM09EZERNelF1T1RReUlEUTVMakF3TXpJZ016UXVNekV4TkNBME9DNDNNemd4SURNekxqYzROamtnTkRndU1qQTNOVU16TXk0eU5qSXlJRFEzTGpZM056UWdNek1nTkRjdU1ETTVNaUF6TXlBME5pNHlPVFV5VmpNNExqRTJPRGhJTkRRdU1qVldOREF1T0RjM05FTTBOQzR5TlNBME1TNHhOekE1SURRMExqTTFOakVnTkRFdU5ESTBOeUEwTkM0MU5qZ3lJRFF4TGpZek9UaERORFF1Tnpnd01pQTBNUzQ0TlRNM0lEUTFMakF6TVRNZ05ERXVPVFl4TXlBME5TNHpNakUySURReExqazJNVE5JTlRBdU5qYzROME0xTUM0NU5qZzRJRFF4TGprMk1UTWdOVEV1TWpJd01TQTBNUzQ0TlRNM0lEVXhMalF6TWpJZ05ERXVOak01T0ZwTk5UQXVNVFF6TVNBek9DNHhOamc0U0RRMUxqZzFOekZXTkRBdU16TTFOVWcxTUM0eE5ETXhWak00TGpFMk9EaGFUVFl5TGpJeE16SWdNamd1TVRNd01VTTJNUzQyT0RnM0lESTNMalU1T0RrZ05qRXVNRFU0TVNBeU55NHpNek01SURZd0xqTXlNVFlnTWpjdU16TXpPVWcxTkM0ME1qZzFWakkwTGpZeU5UTkROVFF1TkRJNE5TQXlOQzR4TnpNM0lEVTBMakkzTWpRZ01qTXVOemt3TXlBMU15NDVOVGs0SURJekxqUTNNemRETlRNdU5qUTNOU0F5TXk0eE5UZzJJRFV6TGpJMk56Z2dNak1nTlRJdU9ESXhOaUF5TTBnME15NHhOemczUXpReUxqY3pNak1nTWpNZ05ESXVNelV5T1NBeU15NHhOVGcySURReUxqQTBNRFFnTWpNdU5EY3pOME0wTVM0M01qYzRJREl6TGpjNE9UZ2dOREV1TlRjeE5pQXlOQzR4TnpNM0lEUXhMalUzTVRZZ01qUXVOakkxTTFZeU55NHpNek01U0RNMUxqWTNPRGRETXpRdU9UUXlJREkzTGpNek16a2dNelF1TXpFeE5DQXlOeTQxT1RnNUlETXpMamM0TmprZ01qZ3VNVE13TVVNek15NHlOakl5SURJNExqWTFPVGNnTXpNZ01qa3VNamszTXlBek15QXpNQzR3TkRJMVZqTTJMalUwTXpWSU5qTldNekF1TURReU5VTTJNeUF5T1M0eU9UY3pJRFl5TGpjek56a2dNamd1TmpVNU55QTJNaTR5TVRNeUlESTRMakV6TURGYVRUVXlMakk0TlRnZ01qY3VNek16T1VnME15NDNNVFEwVmpJMUxqRTJOamRJTlRJdU1qZzFPRll5Tnk0ek16TTVXaUlnWm1sc2JEMGlkMmhwZEdVaUx6NE5DanhrWldaelBnMEtQR1pwYkhSbGNpQnBaRDBpWm1sc2RHVnlNRjlrSWlCNFBTSXRNeTR3TlRFM05tVXRNRFVpSUhrOUlqa3VPVGs1T0RnaUlIZHBaSFJvUFNJNU5TSWdhR1ZwWjJoMFBTSTVOU0lnWm1sc2RHVnlWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWlCamIyeHZjaTFwYm5SbGNuQnZiR0YwYVc5dUxXWnBiSFJsY25NOUluTlNSMElpUGcwS1BHWmxSbXh2YjJRZ1pteHZiMlF0YjNCaFkybDBlVDBpTUNJZ2NtVnpkV3gwUFNKQ1lXTnJaM0p2ZFc1a1NXMWhaMlZHYVhnaUx6NE5DanhtWlVOdmJHOXlUV0YwY21sNElHbHVQU0pUYjNWeVkyVkJiSEJvWVNJZ2RIbHdaVDBpYldGMGNtbDRJaUIyWVd4MVpYTTlJakFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREV5TnlBd0lpOCtEUW84Wm1WUFptWnpaWFFnWkhrOUlqRXpJaTgrRFFvOFptVkhZWFZ6YzJsaGJrSnNkWElnYzNSa1JHVjJhV0YwYVc5dVBTSXhNQzQxSWk4K0RRbzhabVZEYjJ4dmNrMWhkSEpwZUNCMGVYQmxQU0p0WVhSeWFYZ2lJSFpoYkhWbGN6MGlNQ0F3SURBZ01DQXhJREFnTUNBd0lEQWdNQzR5TmpZMk5qY2dNQ0F3SURBZ01DQXdMak0wTVRFM05pQXdJREFnTUNBd0xqTWdNQ0l2UGcwS1BHWmxRbXhsYm1RZ2JXOWtaVDBpYm05eWJXRnNJaUJwYmpJOUlrSmhZMnRuY205MWJtUkpiV0ZuWlVacGVDSWdjbVZ6ZFd4MFBTSmxabVpsWTNReFgyUnliM0JUYUdGa2IzY2lMejROQ2p4bVpVSnNaVzVrSUcxdlpHVTlJbTV2Y20xaGJDSWdhVzQ5SWxOdmRYSmpaVWR5WVhCb2FXTWlJR2x1TWowaVpXWm1aV04wTVY5a2NtOXdVMmhoWkc5M0lpQnlaWE4xYkhROUluTm9ZWEJsSWk4K0RRbzhMMlpwYkhSbGNqNE5DanhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpY0dGcGJuUXdYMnhwYm1WaGNpSWdlREU5SWpVeExqWXpOVEVpSUhreFBTSXhNRE11TmpNMUlpQjRNajBpTVRBMkxqWXpOU0lnZVRJOUlqUXdMak0yTkRraUlHZHlZV1JwWlc1MFZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJajROQ2p4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlOR09EQTNOVGtpTHo0TkNqeHpkRzl3SUc5bVpuTmxkRDBpTVNJZ2MzUnZjQzFqYjJ4dmNqMGlJMEpETkVVNVF5SXZQZzBLUEM5c2FXNWxZWEpIY21Ga2FXVnVkRDROQ2p4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaWNHRnBiblF4WDJ4cGJtVmhjaUlnZURFOUlqVXpMalF4TXpJaUlIa3hQU0l4TVRNdU5ERXpJaUI0TWowaU1USTFMalF4TXlJZ2VUSTlJak13TGpVNE5qZ2lJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWo0TkNqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTkdSalF4TmtNaUx6NE5Danh6ZEc5d0lHOW1abk5sZEQwaU1TSWdjM1J2Y0MxamIyeHZjajBpSTBaR05FSXlRaUl2UGcwS1BDOXNhVzVsWVhKSGNtRmthV1Z1ZEQ0TkNqd3ZaR1ZtY3o0TkNqd3ZjM1puUGcwS1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9UVWlJR2hsYVdkb2REMGlNVEEwSWlCMmFXVjNRbTk0UFNJd0lEQWdPVFVnTVRBMElpQm1hV3hzUFNKdWIyNWxJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQZzBLUEdjZ1ptbHNkR1Z5UFNKMWNtd29JMlpwYkhSbGNqQmZaQ2tpUGcwS1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAwTnk0MUlERTJMams1T1RsRE5qSXVNVE0xTlNBeE5pNDVPVGs1SURjekxqazVPVGtnTWpndU9EWTBOQ0EzTXk0NU9UazVJRFF6TGpRNU9UbEROek11T1RrNU9TQTFPQzR4TXpVeklEWXlMakV6TlRVZ05qa3VPVGs1T1NBME55NDFJRFk1TGprNU9UbERNekl1T0RZME5DQTJPUzQ1T1RrNUlESXhJRFU0TGpFek5UTWdNakVnTkRNdU5EazVPVU15TVNBeU9DNDROalEwSURNeUxqZzJORFFnTVRZdU9UazVPU0EwTnk0MUlERTJMams1T1RsYUlpQm1hV3hzUFNJalJrWTBNell4SWk4K0RRbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRRM0xqVWdNVFl1T1RrNU9VTTJNaTR4TXpVMUlERTJMams1T1RrZ056TXVPVGs1T1NBeU9DNDROalEwSURjekxqazVPVGtnTkRNdU5EazVPVU0zTXk0NU9UazVJRFU0TGpFek5UTWdOakl1TVRNMU5TQTJPUzQ1T1RrNUlEUTNMalVnTmprdU9UazVPVU16TWk0NE5qUTBJRFk1TGprNU9Ua2dNakVnTlRndU1UTTFNeUF5TVNBME15NDBPVGs1UXpJeElESTRMamcyTkRRZ016SXVPRFkwTkNBeE5pNDVPVGs1SURRM0xqVWdNVFl1T1RrNU9Wb2lJR1pwYkd3OUluVnliQ2dqY0dGcGJuUXdYMnhwYm1WaGNpa2lMejROQ2p3dlp6NE5Danh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk5ESWdNQzQ1T1RrNU16WklOVEV1T1RrNU9VTTJPQzQxTmpnMUlEQXVPVGs1T1RNMklEZ3hMams1T1RrZ01UUXVORE14TVNBNE1TNDVPVGs1SURNd0xqazVPVGxXTkRBdU9UazVPVU00TVM0NU9UazVJRFUzTGpVMk9ESWdOamd1TlRZNE5TQTNNQzQ1T1RrNElEVXhMams1T1RrZ056QXVPVGs1T0VnME1rTXlOUzQwTXpFMUlEY3dMams1T1RnZ01URXVPVGs1T1NBMU55NDFOamd5SURFeExqazVPVGtnTkRBdU9UazVPVll6TUM0NU9UazVRekV4TGprNU9Ua2dNVFF1TkRNeE1TQXlOUzQwTXpFMUlEQXVPVGs1T1RNMklEUXlJREF1T1RrNU9UTTJXaUlnWm1sc2JEMGlJMFpHTkRNMk1TSXZQZzBLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDBNaUF3TGprNU9Ua3pOa2cxTVM0NU9UazVRelk0TGpVMk9EVWdNQzQ1T1RrNU16WWdPREV1T1RrNU9TQXhOQzQwTXpFeElEZ3hMams1T1RrZ016QXVPVGs1T1ZZME1DNDVPVGs1UXpneExqazVPVGtnTlRjdU5UWTRNaUEyT0M0MU5qZzFJRGN3TGprNU9UZ2dOVEV1T1RrNU9TQTNNQzQ1T1RrNFNEUXlRekkxTGpRek1UVWdOekF1T1RrNU9DQXhNUzQ1T1RrNUlEVTNMalUyT0RJZ01URXVPVGs1T1NBME1DNDVPVGs1VmpNd0xqazVPVGxETVRFdU9UazVPU0F4TkM0ME16RXhJREkxTGpRek1UVWdNQzQ1T1RrNU16WWdORElnTUM0NU9UazVNelphSWlCbWFXeHNQU0oxY213b0kzQmhhVzUwTVY5c2FXNWxZWElwSWk4K0RRbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRVMUxqazBPVElnTXpFdU1EQXlOa00xTlM0NE5UYzFJRE13TGpjNU56SWdOVFV1TmpZd01pQXpNQzQyTmpVMUlEVTFMalEwTWprZ016QXVOalkxTlVnME9DNDRNakE1VERVMUxqTTFOak1nTVRrdU9EazBRelUxTGpRMk5USWdNVGt1TnpFME5DQTFOUzQwTnpFNElERTVMalE0TnlBMU5TNHpOek0xSURFNUxqTXdNVFZETlRVdU1qYzFNaUF4T1M0eE1UUTBJRFUxTGpBNE56UWdNVGd1T1RrNE9DQTFOQzQ0T0RRZ01UZ3VPVGs0T0VnME5TNDVOREk1UXpRMUxqY3pNVElnTVRndU9UazRPQ0EwTlM0MU16YzRJREU1TGpFeU16WWdORFV1TkRReU9DQXhPUzR6TWpFMFRETTNMakEyTURZZ016WXVPREl4TkVNek5pNDVOelFnTXpjdU1EQXlNU0F6Tmk0NU9ETTFJRE0zTGpJeE5qWWdNemN1TURnMU1TQXpOeTR6T0RnMlF6TTNMakU0TnpRZ016Y3VOVFl3TnlBek55NHpOalkzSURNM0xqWTJOU0F6Tnk0MU5qQTNJRE0zTGpZMk5VZzBNeTR6TURkTU16Y3VNRFExTlNBMU15NHhPRGt4UXpNMkxqa3pPRGNnTlRNdU5EVTBOeUF6Tnk0d016TTNJRFV6TGpjMk1qTWdNemN1TWpZNUlEVXpMamt4TXpORE16Y3VNelU1TkNBMU15NDVOekF6SURNM0xqUTJJRFV6TGprNU9EZ2dNemN1TlRZd01TQTFNeTQ1T1RnNFF6TTNMamN5TURRZ05UTXVPVGs0T0NBek55NDROemcySURVekxqa3lOamdnTXpjdU9UZzRNU0ExTXk0M09URTRURFUxTGpnM01ETWdNekV1TmpJMU1rTTFOaTR3TVRBMklETXhMalExTVRVZ05UWXVNRFF3TnlBek1TNHlNRGcxSURVMUxqazBPVElnTXpFdU1EQXlObG9pSUdacGJHdzlJbmRvYVhSbElpOCtEUW84WkdWbWN6NE5DanhtYVd4MFpYSWdhV1E5SW1acGJIUmxjakJmWkNJZ2VEMGlMVE11TURVeE56WmxMVEExSWlCNVBTSTRMams1T1RnNElpQjNhV1IwYUQwaU9UVWlJR2hsYVdkb2REMGlPVFVpSUdacGJIUmxjbFZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJZ1kyOXNiM0l0YVc1MFpYSndiMnhoZEdsdmJpMW1hV3gwWlhKelBTSnpVa2RDSWo0TkNqeG1aVVpzYjI5a0lHWnNiMjlrTFc5d1lXTnBkSGs5SWpBaUlISmxjM1ZzZEQwaVFtRmphMmR5YjNWdVpFbHRZV2RsUm1sNElpOCtEUW84Wm1WRGIyeHZjazFoZEhKcGVDQnBiajBpVTI5MWNtTmxRV3h3YUdFaUlIUjVjR1U5SW0xaGRISnBlQ0lnZG1Gc2RXVnpQU0l3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F4TWpjZ01DSXZQZzBLUEdabFQyWm1jMlYwSUdSNVBTSXhNeUl2UGcwS1BHWmxSMkYxYzNOcFlXNUNiSFZ5SUhOMFpFUmxkbWxoZEdsdmJqMGlNVEF1TlNJdlBnMEtQR1psUTI5c2IzSk5ZWFJ5YVhnZ2RIbHdaVDBpYldGMGNtbDRJaUIyWVd4MVpYTTlJakFnTUNBd0lEQWdNQzQ0T1Rnd016a2dNQ0F3SURBZ01DQXdMakV4TnpZME55QXdJREFnTUNBd0lEQXVORE0xTWprMElEQWdNQ0F3SURBdU15QXdJaTgrRFFvOFptVkNiR1Z1WkNCdGIyUmxQU0p1YjNKdFlXd2lJR2x1TWowaVFtRmphMmR5YjNWdVpFbHRZV2RsUm1sNElpQnlaWE4xYkhROUltVm1abVZqZERGZlpISnZjRk5vWVdSdmR5SXZQZzBLUEdabFFteGxibVFnYlc5a1pUMGlibTl5YldGc0lpQnBiajBpVTI5MWNtTmxSM0poY0docFl5SWdhVzR5UFNKbFptWmxZM1F4WDJSeWIzQlRhR0ZrYjNjaUlISmxjM1ZzZEQwaWMyaGhjR1VpTHo0TkNqd3ZabWxzZEdWeVBnMEtQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0p3WVdsdWREQmZiR2x1WldGeUlpQjRNVDBpTlRFdU5qTTFNU0lnZVRFOUlqRXdNaTQyTXpVaUlIZ3lQU0l4TURZdU5qTTFJaUI1TWowaU16a3VNelkwT1NJZ1ozSmhaR2xsYm5SVmJtbDBjejBpZFhObGNsTndZV05sVDI1VmMyVWlQZzBLUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpSTBZNE1EYzFPU0l2UGcwS1BITjBiM0FnYjJabWMyVjBQU0l4SWlCemRHOXdMV052Ykc5eVBTSWpRa00wUlRsRElpOCtEUW84TDJ4cGJtVmhja2R5WVdScFpXNTBQZzBLUEd4cGJtVmhja2R5WVdScFpXNTBJR2xrUFNKd1lXbHVkREZmYkdsdVpXRnlJaUI0TVQwaU5USXVOREV6TWlJZ2VURTlJakV4TXk0ME1UTWlJSGd5UFNJeE1qUXVOREV6SWlCNU1qMGlNekF1TlRnMk9DSWdaM0poWkdsbGJuUlZibWwwY3owaWRYTmxjbE53WVdObFQyNVZjMlVpUGcwS1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUkwWTRNRGMxT1NJdlBnMEtQSE4wYjNBZ2IyWm1jMlYwUFNJeElpQnpkRzl3TFdOdmJHOXlQU0lqUWtNMFJUbERJaTgrRFFvOEwyeHBibVZoY2tkeVlXUnBaVzUwUGcwS1BDOWtaV1p6UGcwS1BDOXpkbWMrRFFvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9UVWlJR2hsYVdkb2REMGlNVEEwSWlCMmFXVjNRbTk0UFNJd0lEQWdPVFVnTVRBMElpQm1hV3hzUFNKdWIyNWxJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQZzBLUEdjZ1ptbHNkR1Z5UFNKMWNtd29JMlpwYkhSbGNqQmZaQ2tpUGcwS1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAwTnk0ME9UazVJREUyTGprNU9UbEROakl1TVRNMU5DQXhOaTQ1T1RrNUlEYzBJREk0TGpnMk5EUWdOelFnTkRNdU5EazVPVU0zTkNBMU9DNHhNelV6SURZeUxqRXpOVFFnTmprdU9UazVPU0EwTnk0ME9UazVJRFk1TGprNU9UbERNekl1T0RZME5DQTJPUzQ1T1RrNUlESXhJRFU0TGpFek5UTWdNakVnTkRNdU5EazVPVU15TVNBeU9DNDROalEwSURNeUxqZzJORFFnTVRZdU9UazVPU0EwTnk0ME9UazVJREUyTGprNU9UbGFJaUJtYVd4c1BTSWpSa1kwTXpZeElpOCtEUW84TDJjK0RRbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRReExqazVPVGtnTUM0NU9UazVNelpJTlRKRE5qZ3VOVFk0TlNBd0xqazVPVGt6TmlBNE1pQXhOQzQwTXpFeElEZ3lJRE13TGprNU9UbFdOREF1T1RrNU9VTTRNaUExTnk0MU5qZ3lJRFk0TGpVMk9EVWdOekF1T1RrNU9DQTFNaUEzTUM0NU9UazRTRFF4TGprNU9UbERNalV1TkRNeE5DQTNNQzQ1T1RrNElERXhMams1T1RrZ05UY3VOVFk0TWlBeE1TNDVPVGs1SURRd0xqazVPVGxXTXpBdU9UazVPVU14TVM0NU9UazVJREUwTGpRek1URWdNalV1TkRNeE5DQXdMams1T1Rrek5pQTBNUzQ1T1RrNUlEQXVPVGs1T1RNMldpSWdabWxzYkQwaUkwWkdORE0yTVNJdlBnMEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswME1TNDVPVGs1SURBdU9UazVPVE0yU0RVeVF6WTRMalUyT0RVZ01DNDVPVGs1TXpZZ09ESWdNVFF1TkRNeE1TQTRNaUF6TUM0NU9UazVWalF3TGprNU9UbERPRElnTlRjdU5UWTRNaUEyT0M0MU5qZzFJRGN3TGprNU9UZ2dOVElnTnpBdU9UazVPRWcwTVM0NU9UazVRekkxTGpRek1UUWdOekF1T1RrNU9DQXhNUzQ1T1RrNUlEVTNMalUyT0RJZ01URXVPVGs1T1NBME1DNDVPVGs1VmpNd0xqazVPVGxETVRFdU9UazVPU0F4TkM0ME16RXhJREkxTGpRek1UUWdNQzQ1T1RrNU16WWdOREV1T1RrNU9TQXdMams1T1Rrek5sb2lJR1pwYkd3OUluVnliQ2dqY0dGcGJuUXdYMnhwYm1WaGNpa2lMejROQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5OalF1TlRRME1TQXpNUzQ0TlRnMVF6WTBMalUwT1RnZ016RXVPVFl3TnlBMk5DNDFOREkwSURNeUxqQTJORFFnTmpRdU5URTJPQ0F6TWk0eE5qZzNURFl5TGpJek5EWWdOREV1TXpNME9FTTJNaTR4TVRrMElEUXhMamM1TmpFZ05qRXVOekEzTWlBME1pNHhNakUwSURZeExqSXpNelFnTkRJdU1USTBNVXcwTnk0MU16azVJRFF5TGpFNU16UkRORGN1TlRNNE1pQTBNaTR4T1RNMElEUTNMalV6TmpRZ05ESXVNVGt6TkNBME55NDFNelEySURReUxqRTVNelJJTXpNdU9EUXhNVU16TXk0ek5qUTJJRFF5TGpFNU16UWdNekl1T1RRNU5pQTBNUzQ0TmpjeElETXlMamd6TkRZZ05ERXVOREF6TVV3ek1DNDFOVEl6SURNeUxqSXdNa016TUM0MU1qVTVJRE15TGpBNU5UWWdNekF1TlRFNE5DQXpNUzQ1T0RnMklETXdMalV5TlNBek1TNDRPRE00UXpJNUxqWTBNakVnTXpFdU5qQTBOeUF5T1NBek1DNDNOelV5SURJNUlESTVMamM1TnpkRE1qa2dNamd1TlRrd09DQXlPUzQ1TnpjeUlESTNMall3T1RZZ016RXVNVGM0TlNBeU55NDJNRGsyUXpNeUxqTTNPVGdnTWpjdU5qQTVOaUF6TXk0ek5UY2dNamd1TlRrd09DQXpNeTR6TlRjZ01qa3VOemszTjBNek15NHpOVGNnTXpBdU5EYzJPQ0F6TXk0d05EY2dNekV1TURnME15QXpNaTQxTmpFMklETXhMalE0TmpSTU16VXVOREU1SURNMExqTTNOamhETXpZdU1UUXhNaUF6TlM0eE1EYzBJRE0zTGpFME16SWdNelV1TlRJMk9DQXpPQzR4TmpnMElETTFMalV5TmpoRE16a3VNemd3TnlBek5TNDFNalk0SURRd0xqVXpOalFnTXpRdU9UUTRNeUEwTVM0eU5qUXpJRE16TGprNFREUTFMamsyTURJZ01qY3VOek15TVVNME5TNDFOalU0SURJM0xqTXpOalVnTkRVdU16SXhOQ0F5Tmk0M09EazNJRFExTGpNeU1UUWdNall1TVRnMk5VTTBOUzR6TWpFMElESTBMams0SURRMkxqSTVPRFlnTWpNdU9UazRNeUEwTnk0ME9UazVJREl6TGprNU9ETkRORGd1TnpBeE1pQXlNeTQ1T1RneklEUTVMalkzT0RRZ01qUXVPVGdnTkRrdU5qYzROQ0F5Tmk0eE9EWTFRelE1TGpZM09EUWdNall1TnpjeE5DQTBPUzQwTkRjeUlESTNMak13TWlBME9TNHdOek16SURJM0xqWTVOVU0wT1M0d056UTFJREkzTGpZNU5qY2dORGt1TURjMk1TQXlOeTQyT1RneklEUTVMakEzTnpNZ01qY3VOams1T1V3MU15NDNNemt4SURNekxqazJORGxETlRRdU5EWTJPQ0F6TkM0NU5ESTBJRFUxTGpZeU5qWWdNelV1TlRJMk9DQTFOaTQ0TkRJeklETTFMalV5TmpoRE5UY3VPRGMzSURNMUxqVXlOamdnTlRndU9EVWdNelV1TVRJeE9TQTFPUzQxT0RFMElETTBMak00TnpWTU5qSXVORFUyT0NBek1TNDBPVGs1UXpZeExqazJNVElnTXpFdU1EazRNeUEyTVM0Mk5ESTVJRE13TGpRNE5UUWdOakV1TmpReU9TQXlPUzQzT1RjM1F6WXhMalkwTWprZ01qZ3VOVGt3T0NBMk1pNDJNakF5SURJM0xqWXdPVFlnTmpNdU9ESXhOU0F5Tnk0Mk1EazJRelkxTGpBeU1qY2dNamN1TmpBNU5pQTJOaUF5T0M0MU9UQTRJRFkySURJNUxqYzVOemRETmpZZ016QXVOelE0T0NBMk5TNHpPVEEySURNeExqVTFPRFVnTmpRdU5UUTBNU0F6TVM0NE5UZzFXazAyTWk0d01URTRJRFExTGpRMU5qbEROakl1TURFeE9DQTBOQzQ0T0RJeElEWXhMalUwTnpNZ05EUXVOREUxTlNBMk1DNDVOelEwSURRMExqUXhOVFZJTXpRdU1UUXdPRU16TXk0MU5qYzVJRFEwTGpReE5UVWdNek11TVRBek5DQTBOQzQ0T0RJeElETXpMakV3TXpRZ05EVXVORFUyT1ZZME55NDVOVFk1UXpNekxqRXdNelFnTkRndU5UTXlOeUF6TXk0MU5qYzVJRFE0TGprNU9EZ2dNelF1TVRRd09DQTBPQzQ1T1RnNFNEWXdMamszTkRSRE5qRXVOVFEzTXlBME9DNDVPVGc0SURZeUxqQXhNVGdnTkRndU5UTXlOeUEyTWk0d01URTRJRFEzTGprMU5qbFdORFV1TkRVMk9Wb2lJR1pwYkd3OUluZG9hWFJsSWk4K0RRbzhaR1ZtY3o0TkNqeG1hV3gwWlhJZ2FXUTlJbVpwYkhSbGNqQmZaQ0lnZUQwaU1TNHhORFEwTVdVdE1EVWlJSGs5SWpndU9UazVPRGdpSUhkcFpIUm9QU0k1TlNJZ2FHVnBaMmgwUFNJNU5TSWdabWxzZEdWeVZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJaUJqYjJ4dmNpMXBiblJsY25CdmJHRjBhVzl1TFdacGJIUmxjbk05SW5OU1IwSWlQZzBLUEdabFJteHZiMlFnWm14dmIyUXRiM0JoWTJsMGVUMGlNQ0lnY21WemRXeDBQU0pDWVdOclozSnZkVzVrU1cxaFoyVkdhWGdpTHo0TkNqeG1aVU52Ykc5eVRXRjBjbWw0SUdsdVBTSlRiM1Z5WTJWQmJIQm9ZU0lnZEhsd1pUMGliV0YwY21sNElpQjJZV3gxWlhNOUlqQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lERXlOeUF3SWk4K0RRbzhabVZQWm1aelpYUWdaSGs5SWpFeklpOCtEUW84Wm1WSFlYVnpjMmxoYmtKc2RYSWdjM1JrUkdWMmFXRjBhVzl1UFNJeE1DNDFJaTgrRFFvOFptVkRiMnh2Y2sxaGRISnBlQ0IwZVhCbFBTSnRZWFJ5YVhnaUlIWmhiSFZsY3owaU1DQXdJREFnTUNBd0xqazVNakUxTnlBd0lEQWdNQ0F3SURBdU16UTFNRGs0SURBZ01DQXdJREFnTUM0ME5EY3dOVGtnTUNBd0lEQWdNQzR6SURBaUx6NE5DanhtWlVKc1pXNWtJRzF2WkdVOUltNXZjbTFoYkNJZ2FXNHlQU0pDWVdOclozSnZkVzVrU1cxaFoyVkdhWGdpSUhKbGMzVnNkRDBpWldabVpXTjBNVjlrY205d1UyaGhaRzkzSWk4K0RRbzhabVZDYkdWdVpDQnRiMlJsUFNKdWIzSnRZV3dpSUdsdVBTSlRiM1Z5WTJWSGNtRndhR2xqSWlCcGJqSTlJbVZtWm1WamRERmZaSEp2Y0ZOb1lXUnZkeUlnY21WemRXeDBQU0p6YUdGd1pTSXZQZzBLUEM5bWFXeDBaWEkrRFFvOGJHbHVaV0Z5UjNKaFpHbGxiblFnYVdROUluQmhhVzUwTUY5c2FXNWxZWElpSUhneFBTSTFNaTQwTVRNeUlpQjVNVDBpTVRFekxqUXhNeUlnZURJOUlqRXlOQzQwTVRNaUlIa3lQU0l6TUM0MU9EWTRJaUJuY21Ga2FXVnVkRlZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJK0RRbzhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpSa1kxT0RVNElpOCtEUW84YzNSdmNDQnZabVp6WlhROUlqRWlJSE4wYjNBdFkyOXNiM0k5SWlOR09EVTNRVFlpTHo0TkNqd3ZiR2x1WldGeVIzSmhaR2xsYm5RK0RRbzhMMlJsWm5NK0RRbzhMM04yWno0TkNnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPVFVpSUdobGFXZG9kRDBpTVRBMUlpQjJhV1YzUW05NFBTSXdJREFnT1RVZ01UQTFJaUJtYVd4c1BTSnViMjVsSWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpUGcwS1BHY2dabWxzZEdWeVBTSjFjbXdvSTJacGJIUmxjakJmWkNraVBnMEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswME55NDBPVGs1SURFM0xqazVPVGxETmpJdU1UTTFOQ0F4Tnk0NU9UazVJRGN6TGprNU9Ua2dNamt1T0RZME5DQTNNeTQ1T1RrNUlEUTBMalE1T1RsRE56TXVPVGs1T1NBMU9TNHhNelV6SURZeUxqRXpOVFFnTnpBdU9UazVPU0EwTnk0ME9UazVJRGN3TGprNU9UbERNekl1T0RZME5DQTNNQzQ1T1RrNUlESXdMams1T1RrZ05Ua3VNVE0xTXlBeU1DNDVPVGs1SURRMExqUTVPVGxETWpBdU9UazVPU0F5T1M0NE5qUTBJRE15TGpnMk5EUWdNVGN1T1RrNU9TQTBOeTQwT1RrNUlERTNMams1T1RsYUlpQm1hV3hzUFNJalJrWTBNell4SWk4K0RRbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRRM0xqUTVPVGtnTVRjdU9UazVPVU0yTWk0eE16VTBJREUzTGprNU9Ua2dOek11T1RrNU9TQXlPUzQ0TmpRMElEY3pMams1T1RrZ05EUXVORGs1T1VNM015NDVPVGs1SURVNUxqRXpOVE1nTmpJdU1UTTFOQ0EzTUM0NU9UazVJRFEzTGpRNU9Ua2dOekF1T1RrNU9VTXpNaTQ0TmpRMElEY3dMams1T1RrZ01qQXVPVGs1T1NBMU9TNHhNelV6SURJd0xqazVPVGtnTkRRdU5EazVPVU15TUM0NU9UazVJREk1TGpnMk5EUWdNekl1T0RZME5DQXhOeTQ1T1RrNUlEUTNMalE1T1RrZ01UY3VPVGs1T1ZvaUlHWnBiR3c5SW5WeWJDZ2pjR0ZwYm5Rd1gyeHBibVZoY2lraUx6NE5Dand2Wno0TkNqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTkRJdU9UazVPU0F3TGprNU9Ua3pOa2cxTTBNMk9TNDFOamcxSURBdU9UazVPVE0ySURneklERTBMalF6TVRFZ09ETWdNekF1T1RrNU9WWTBNQzQ1T1RrNVF6Z3pJRFUzTGpVMk9ESWdOamt1TlRZNE5TQTNNQzQ1T1RrNElEVXpJRGN3TGprNU9UaElOREl1T1RrNU9VTXlOaTQwTXpFMElEY3dMams1T1RnZ01USXVPVGs1T1NBMU55NDFOamd5SURFeUxqazVPVGtnTkRBdU9UazVPVll6TUM0NU9UazVRekV5TGprNU9Ua2dNVFF1TkRNeE1TQXlOaTQwTXpFMElEQXVPVGs1T1RNMklEUXlMams1T1RrZ01DNDVPVGs1TXpaYUlpQm1hV3hzUFNJalJrWTBNell4SWk4K0RRbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRReUxqazVPVGtnTUM0NU9UazVNelpJTlRORE5qa3VOVFk0TlNBd0xqazVPVGt6TmlBNE15QXhOQzQwTXpFeElEZ3pJRE13TGprNU9UbFdOREF1T1RrNU9VTTRNeUExTnk0MU5qZ3lJRFk1TGpVMk9EVWdOekF1T1RrNU9DQTFNeUEzTUM0NU9UazRTRFF5TGprNU9UbERNall1TkRNeE5DQTNNQzQ1T1RrNElERXlMams1T1RrZ05UY3VOVFk0TWlBeE1pNDVPVGs1SURRd0xqazVPVGxXTXpBdU9UazVPVU14TWk0NU9UazVJREUwTGpRek1URWdNall1TkRNeE5DQXdMams1T1Rrek5pQTBNaTQ1T1RrNUlEQXVPVGs1T1RNMldpSWdabWxzYkQwaWRYSnNLQ053WVdsdWRERmZiR2x1WldGeUtTSXZQZzBLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDJNQzR3T1RrNUlESXhMams1T1RSSU16WXVPVU16TlM0ek1EUTVJREl4TGprNU9UUWdNek11T1RrNU9TQXlNeTR6TURNM0lETXpMams1T1RrZ01qUXVPRGs0T0ZZMU1DNDVPVGc0VERNNUxqYzVPVGtnTkRVdU1UazRPRWcyTUM0d09UazVRell4TGpZNU5TQTBOUzR4T1RnNElEWXlMams1T1RrZ05ETXVPRGswSURZeUxqazVPVGtnTkRJdU1qazRPRll5TkM0NE9UZzRRell5TGprNU9Ua2dNak11TXpBek55QTJNUzQyT1RVZ01qRXVPVGs1TkNBMk1DNHdPVGs1SURJeExqazVPVFJhSWlCbWFXeHNQU0lqUmtWR1FVWkRJaTgrRFFvOFpHVm1jejROQ2p4bWFXeDBaWElnYVdROUltWnBiSFJsY2pCZlpDSWdlRDBpTFRrdU9URTRNakZsTFRBMUlpQjVQU0k1TGprNU9UZzRJaUIzYVdSMGFEMGlPVFVpSUdobGFXZG9kRDBpT1RVaUlHWnBiSFJsY2xWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSWdZMjlzYjNJdGFXNTBaWEp3YjJ4aGRHbHZiaTFtYVd4MFpYSnpQU0p6VWtkQ0lqNE5DanhtWlVac2IyOWtJR1pzYjI5a0xXOXdZV05wZEhrOUlqQWlJSEpsYzNWc2REMGlRbUZqYTJkeWIzVnVaRWx0WVdkbFJtbDRJaTgrRFFvOFptVkRiMnh2Y2sxaGRISnBlQ0JwYmowaVUyOTFjbU5sUVd4d2FHRWlJSFI1Y0dVOUltMWhkSEpwZUNJZ2RtRnNkV1Z6UFNJd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBeE1qY2dNQ0l2UGcwS1BHWmxUMlptYzJWMElHUjVQU0l4TXlJdlBnMEtQR1psUjJGMWMzTnBZVzVDYkhWeUlITjBaRVJsZG1saGRHbHZiajBpTVRBdU5TSXZQZzBLUEdabFEyOXNiM0pOWVhSeWFYZ2dkSGx3WlQwaWJXRjBjbWw0SWlCMllXeDFaWE05SWpBZ01DQXdJREFnTUM0NU5Ea3dNaUF3SURBZ01DQXdJREF1TlRBeE9UWXhJREFnTUNBd0lEQWdNQzR5TnpRMU1TQXdJREFnTUNBd0xqTWdNQ0l2UGcwS1BHWmxRbXhsYm1RZ2JXOWtaVDBpYm05eWJXRnNJaUJwYmpJOUlrSmhZMnRuY205MWJtUkpiV0ZuWlVacGVDSWdjbVZ6ZFd4MFBTSmxabVpsWTNReFgyUnliM0JUYUdGa2IzY2lMejROQ2p4bVpVSnNaVzVrSUcxdlpHVTlJbTV2Y20xaGJDSWdhVzQ5SWxOdmRYSmpaVWR5WVhCb2FXTWlJR2x1TWowaVpXWm1aV04wTVY5a2NtOXdVMmhoWkc5M0lpQnlaWE4xYkhROUluTm9ZWEJsSWk4K0RRbzhMMlpwYkhSbGNqNE5DanhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpY0dGcGJuUXdYMnhwYm1WaGNpSWdlREU5SWpVeExqWXpOVEVpSUhreFBTSXhNRE11TmpNMUlpQjRNajBpTVRBMkxqWXpOU0lnZVRJOUlqUXdMak0yTkRraUlHZHlZV1JwWlc1MFZXNXBkSE05SW5WelpYSlRjR0ZqWlU5dVZYTmxJajROQ2p4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlOR09EQTNOVGtpTHo0TkNqeHpkRzl3SUc5bVpuTmxkRDBpTVNJZ2MzUnZjQzFqYjJ4dmNqMGlJMEpETkVVNVF5SXZQZzBLUEM5c2FXNWxZWEpIY21Ga2FXVnVkRDROQ2p4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaWNHRnBiblF4WDJ4cGJtVmhjaUlnZURFOUlqVXpMalF4TXpJaUlIa3hQU0l4TVRNdU5ERXpJaUI0TWowaU1USTFMalF4TXlJZ2VUSTlJak13TGpVNE5qZ2lJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWo0TkNqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTkdORFpDTkRVaUx6NE5Danh6ZEc5d0lHOW1abk5sZEQwaU1TSWdjM1J2Y0MxamIyeHZjajBpSTBWRlFUZzBPU0l2UGcwS1BDOXNhVzVsWVhKSGNtRmthV1Z1ZEQ0TkNqd3ZaR1ZtY3o0TkNqd3ZjM1puUGcwS1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9UWWlJR2hsYVdkb2REMGlNVEEwSWlCMmFXVjNRbTk0UFNJd0lEQWdPVFlnTVRBMElpQm1hV3hzUFNKdWIyNWxJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQZzBLUEdjZ1ptbHNkR1Z5UFNKMWNtd29JMlpwYkhSbGNqQmZaQ2tpUGcwS1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAwT0M0eU1UUXlJREUyTGprNU9UbEROakl1T0RNMk55QXhOaTQ1T1RrNUlEYzBMalk1TURVZ01qZ3VPRFkwTkNBM05DNDJPVEExSURRekxqUTVPVGxETnpRdU5qa3dOU0ExT0M0eE16VXpJRFl5TGpnek5qY2dOamt1T1RrNU9TQTBPQzR5TVRReUlEWTVMams1T1RsRE16TXVOVGt4T1NBMk9TNDVPVGs1SURJeExqY3pPREVnTlRndU1UTTFNeUF5TVM0M016Z3hJRFF6TGpRNU9UbERNakV1TnpNNE1TQXlPQzQ0TmpRMElETXpMalU1TVRrZ01UWXVPVGs1T1NBME9DNHlNVFF5SURFMkxqazVPVGxhSWlCbWFXeHNQU0lqUmtZME16WXhJaTgrRFFvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVFE0TGpJeE5ESWdNVFl1T1RrNU9VTTJNaTQ0TXpZM0lERTJMams1T1RrZ056UXVOamt3TlNBeU9DNDROalEwSURjMExqWTVNRFVnTkRNdU5EazVPVU0zTkM0Mk9UQTFJRFU0TGpFek5UTWdOakl1T0RNMk55QTJPUzQ1T1RrNUlEUTRMakl4TkRJZ05qa3VPVGs1T1VNek15NDFPVEU1SURZNUxqazVPVGtnTWpFdU56TTRNU0ExT0M0eE16VXpJREl4TGpjek9ERWdORE11TkRrNU9VTXlNUzQzTXpneElESTRMamcyTkRRZ016TXVOVGt4T1NBeE5pNDVPVGs1SURRNExqSXhORElnTVRZdU9UazVPVm9pSUdacGJHdzlJblZ5YkNnamNHRnBiblF3WDJ4cGJtVmhjaWtpTHo0TkNqd3ZaejROQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5OREl1TnpJd01pQXdMams1T1Rrek5rZzFNaTQzTVRFeVF6WTVMakkyTkRrZ01DNDVPVGs1TXpZZ09ESXVOamcwTXlBeE5DNDBNekV4SURneUxqWTRORE1nTXpBdU9UazVPVlkwTUM0NU9UazVRemd5TGpZNE5ETWdOVGN1TlRZNE1pQTJPUzR5TmpRNUlEY3dMams1T1RnZ05USXVOekV4TWlBM01DNDVPVGs0U0RReUxqY3lNREpETWpZdU1UWTJOaUEzTUM0NU9UazRJREV5TGpjME56SWdOVGN1TlRZNE1pQXhNaTQzTkRjeUlEUXdMams1T1RsV016QXVPVGs1T1VNeE1pNDNORGN5SURFMExqUXpNVEVnTWpZdU1UWTJOaUF3TGprNU9Ua3pOaUEwTWk0M01qQXlJREF1T1RrNU9UTTJXaUlnWm1sc2JEMGlJMFpHTkRNMk1TSXZQZzBLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDBNaTQzTWpBeUlEQXVPVGs1T1RNMlNEVXlMamN4TVRKRE5qa3VNalkwT1NBd0xqazVPVGt6TmlBNE1pNDJPRFF6SURFMExqUXpNVEVnT0RJdU5qZzBNeUF6TUM0NU9UazVWalF3TGprNU9UbERPREl1TmpnME15QTFOeTQxTmpneUlEWTVMakkyTkRrZ056QXVPVGs1T0NBMU1pNDNNVEV5SURjd0xqazVPVGhJTkRJdU56SXdNa015Tmk0eE5qWTJJRGN3TGprNU9UZ2dNVEl1TnpRM01pQTFOeTQxTmpneUlERXlMamMwTnpJZ05EQXVPVGs1T1ZZek1DNDVPVGs1UXpFeUxqYzBOeklnTVRRdU5ETXhNU0F5Tmk0eE5qWTJJREF1T1RrNU9UTTJJRFF5TGpjeU1ESWdNQzQ1T1RrNU16WmFJaUJtYVd4c1BTSjFjbXdvSTNCaGFXNTBNVjlzYVc1bFlYSXBJaTgrRFFvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVFV4TGpFME5DQTBNUzQyTXpjeFF6VXhMak0xTlRnZ05ERXVOREl5SURVeExqUTJNVGdnTkRFdU1UWTRNaUExTVM0ME5qRTRJRFF3TGpnM05EZFdNemd1TVRZMk1VZzJNaTQzTURFMVZqUTJMakk1TWpWRE5qSXVOekF4TlNBME55NHdNelkxSURZeUxqUXpPVFlnTkRjdU5qYzBOeUEyTVM0NU1UVTBJRFE0TGpJd05EaEROakV1TXpreE5DQTBPQzQzTXpVMElEWXdMamMyTVRJZ05Ea3VNREF3TlNBMk1DNHdNalUxSURRNUxqQXdNRFZJTXpVdU5EQTBOME16TkM0Mk5qZzNJRFE1TGpBd01EVWdNelF1TURNNE5pQTBPQzQzTXpVMElETXpMalV4TkRVZ05EZ3VNakEwT0VNek1pNDVPVEF6SURRM0xqWTNORGNnTXpJdU56STROQ0EwTnk0d016WTFJRE15TGpjeU9EUWdORFl1TWpreU5WWXpPQzR4TmpZeFNEUXpMamsyT0ROV05EQXVPRGMwTjBNME15NDVOamd6SURReExqRTJPRElnTkRRdU1EYzBNeUEwTVM0ME1qSWdORFF1TWpnMk1TQTBNUzQyTXpjeFF6UTBMalE1T0NBME1TNDROVEVnTkRRdU56UTRPU0EwTVM0NU5UZzJJRFExTGpBek9Ea2dOREV1T1RVNE5rZzFNQzR6T1RFeVF6VXdMalk0TVRFZ05ERXVPVFU0TmlBMU1DNDVNekl4SURReExqZzFNU0ExTVM0eE5EUWdOREV1TmpNM01WcE5ORGt1T0RVMk1TQXpPQzR4TmpZeFNEUTFMalUzTXpsV05EQXVNek15T0VnME9TNDROVFl4VmpNNExqRTJOakZhVFRZeExqa3hOVFFnTWpndU1USTNORU0yTVM0ek9URTBJREkzTGpVNU5qSWdOakF1TnpZeE1pQXlOeTR6TXpFeUlEWXdMakF5TlRVZ01qY3VNek14TWtnMU5DNHhNemMyVmpJMExqWXlNalpETlRRdU1UTTNOaUF5TkM0eE56RWdOVE11T1RneE55QXlNeTQzT0RjMklEVXpMalkyT1RNZ01qTXVORGN4UXpVekxqTTFOelFnTWpNdU1UVTFPU0ExTWk0NU56Z2dNakl1T1RrM015QTFNaTQxTXpJeUlESXlMams1TnpOSU5ESXVPRGs0UXpReUxqUTFNVGtnTWpJdU9UazNNeUEwTWk0d056STVJREl6TGpFMU5Ua2dOREV1TnpZd05pQXlNeTQwTnpGRE5ERXVORFE0TkNBeU15NDNPRGN4SURReExqSTVNak1nTWpRdU1UY3hJRFF4TGpJNU1qTWdNalF1TmpJeU5sWXlOeTR6TXpFeVNETTFMalF3TkRkRE16UXVOalk0TnlBeU55NHpNekV5SURNMExqQXpPRFlnTWpjdU5UazJNaUF6TXk0MU1UUTFJREk0TGpFeU56UkRNekl1T1Rrd015QXlPQzQyTlRjZ016SXVOekk0TkNBeU9TNHlPVFEySURNeUxqY3lPRFFnTXpBdU1ETTVPRll6Tmk0MU5EQTRTRFl5TGpjd01UVldNekF1TURNNU9FTTJNaTQzTURFMUlESTVMakk1TkRZZ05qSXVORE01TmlBeU9DNDJOVGNnTmpFdU9URTFOQ0F5T0M0eE1qYzBXazAxTVM0NU9UWTVJREkzTGpNek1USklORE11TkRNek1sWXlOUzR4TmpSSU5URXVPVGsyT1ZZeU55NHpNekV5V2lJZ1ptbHNiRDBpZDJocGRHVWlMejROQ2p4a1pXWnpQZzBLUEdacGJIUmxjaUJwWkQwaVptbHNkR1Z5TUY5a0lpQjRQU0l3TGpjek9EQTJPQ0lnZVQwaU9TSWdkMmxrZEdnOUlqazBMamsxTWpRaUlHaGxhV2RvZEQwaU9UVWlJR1pwYkhSbGNsVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0lnWTI5c2IzSXRhVzUwWlhKd2IyeGhkR2x2YmkxbWFXeDBaWEp6UFNKelVrZENJajROQ2p4bVpVWnNiMjlrSUdac2IyOWtMVzl3WVdOcGRIazlJakFpSUhKbGMzVnNkRDBpUW1GamEyZHliM1Z1WkVsdFlXZGxSbWw0SWk4K0RRbzhabVZEYjJ4dmNrMWhkSEpwZUNCcGJqMGlVMjkxY21ObFFXeHdhR0VpSUhSNWNHVTlJbTFoZEhKcGVDSWdkbUZzZFdWelBTSXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXhNamNnTUNJdlBnMEtQR1psVDJabWMyVjBJR1I1UFNJeE15SXZQZzBLUEdabFIyRjFjM05wWVc1Q2JIVnlJSE4wWkVSbGRtbGhkR2x2YmowaU1UQXVOU0l2UGcwS1BHWmxRMjlzYjNKTllYUnlhWGdnZEhsd1pUMGliV0YwY21sNElpQjJZV3gxWlhNOUlqQWdNQ0F3SURBZ01TQXdJREFnTUNBd0lEQXVNalkyTmpZM0lEQWdNQ0F3SURBZ01DNHpOREV4TnpZZ01DQXdJREFnTUM0eklEQWlMejROQ2p4bVpVSnNaVzVrSUcxdlpHVTlJbTV2Y20xaGJDSWdhVzR5UFNKQ1lXTnJaM0p2ZFc1a1NXMWhaMlZHYVhnaUlISmxjM1ZzZEQwaVpXWm1aV04wTVY5a2NtOXdVMmhoWkc5M0lpOCtEUW84Wm1WQ2JHVnVaQ0J0YjJSbFBTSnViM0p0WVd3aUlHbHVQU0pUYjNWeVkyVkhjbUZ3YUdsaklpQnBiakk5SW1WbVptVmpkREZmWkhKdmNGTm9ZV1J2ZHlJZ2NtVnpkV3gwUFNKemFHRndaU0l2UGcwS1BDOW1hV3gwWlhJK0RRbzhiR2x1WldGeVIzSmhaR2xsYm5RZ2FXUTlJbkJoYVc1ME1GOXNhVzVsWVhJaUlIZ3hQU0kxTWk0ek5EVTRJaUI1TVQwaU1UQXlMall6TlNJZ2VESTlJakV3Tnk0ek5UTWlJSGt5UFNJek9TNDBNVE00SWlCbmNtRmthV1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSStEUW84YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqUmpnd056VTVJaTgrRFFvOGMzUnZjQ0J2Wm1aelpYUTlJakVpSUhOMGIzQXRZMjlzYjNJOUlpTkNRelJGT1VNaUx6NE5Dand2YkdsdVpXRnlSM0poWkdsbGJuUStEUW84YkdsdVpXRnlSM0poWkdsbGJuUWdhV1E5SW5CaGFXNTBNVjlzYVc1bFlYSWlJSGd4UFNJMU15NHhNalF5SWlCNU1UMGlNVEV6TGpReE15SWdlREk5SWpFeU5TNHhNek1pSUhreVBTSXpNQzQyTlRBM0lpQm5jbUZrYVdWdWRGVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0krRFFvOGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJalJrWTBNVFpESWk4K0RRbzhjM1J2Y0NCdlptWnpaWFE5SWpFaUlITjBiM0F0WTI5c2IzSTlJaU5HUmpSQ01rSWlMejROQ2p3dmJHbHVaV0Z5UjNKaFpHbGxiblErRFFvOEwyUmxabk0rRFFvOEwzTjJaejROQ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9UWWlJR2hsYVdkb2REMGlNVEEwSWlCMmFXVjNRbTk0UFNJd0lEQWdPVFlnTVRBMElpQm1hV3hzUFNKdWIyNWxJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQZzBLUEdjZ1ptbHNkR1Z5UFNKMWNtd29JMlpwYkhSbGNqQmZaQ2tpUGcwS1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAwT0M0ME5qWTBJREUyTGprNU9UbEROak11TURnNE55QXhOaTQ1T1RrNUlEYzBMamswTWpVZ01qZ3VPRFkwTkNBM05DNDVOREkxSURRekxqUTVPVGxETnpRdU9UUXlOU0ExT0M0eE16VXpJRFl6TGpBNE9EY2dOamt1T1RrNU9TQTBPQzQwTmpZMElEWTVMams1T1RsRE16TXVPRFF6T1NBMk9TNDVPVGs1SURJeExqazVNREVnTlRndU1UTTFNeUF5TVM0NU9UQXhJRFF6TGpRNU9UbERNakV1T1Rrd01TQXlPQzQ0TmpRMElETXpMamcwTXprZ01UWXVPVGs1T1NBME9DNDBOalkwSURFMkxqazVPVGxhSWlCbWFXeHNQU0lqUmtZME16WXhJaTgrRFFvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVFE0TGpRMk5qUWdNVFl1T1RrNU9VTTJNeTR3T0RnM0lERTJMams1T1RrZ056UXVPVFF5TlNBeU9DNDROalEwSURjMExqazBNalVnTkRNdU5EazVPVU0zTkM0NU5ESTFJRFU0TGpFek5UTWdOak11TURnNE55QTJPUzQ1T1RrNUlEUTRMalEyTmpRZ05qa3VPVGs1T1VNek15NDRORE01SURZNUxqazVPVGtnTWpFdU9Ua3dNU0ExT0M0eE16VXpJREl4TGprNU1ERWdORE11TkRrNU9VTXlNUzQ1T1RBeElESTRMamcyTkRRZ016TXVPRFF6T1NBeE5pNDVPVGs1SURRNExqUTJOalFnTVRZdU9UazVPVm9pSUdacGJHdzlJblZ5YkNnamNHRnBiblF3WDJ4cGJtVmhjaWtpTHo0TkNqd3ZaejROQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5OREl1T1RjeU1pQXdMams1T1Rrek5rZzFNaTQ1TmpNeFF6WTVMalV4TmpnZ01DNDVPVGs1TXpZZ09ESXVPVE0yTWlBeE5DNDBNekV4SURneUxqa3pOaklnTXpBdU9UazVPVlkwTUM0NU9UazVRemd5TGprek5qSWdOVGN1TlRZNE1pQTJPUzQxTVRZNElEY3dMams1T1RnZ05USXVPVFl6TVNBM01DNDVPVGs0U0RReUxqazNNakpETWpZdU5ERTROU0EzTUM0NU9UazRJREV5TGprNU9TQTFOeTQxTmpneUlERXlMams1T1NBME1DNDVPVGs1VmpNd0xqazVPVGxETVRJdU9UazVJREUwTGpRek1URWdNall1TkRFNE5TQXdMams1T1Rrek5pQTBNaTQ1TnpJeUlEQXVPVGs1T1RNMldpSWdabWxzYkQwaUkwWkdORE0yTVNJdlBnMEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswME1pNDVOekl5SURBdU9UazVPVE0yU0RVeUxqazJNekZETmprdU5URTJPQ0F3TGprNU9Ua3pOaUE0TWk0NU16WXlJREUwTGpRek1URWdPREl1T1RNMk1pQXpNQzQ1T1RrNVZqUXdMams1T1RsRE9ESXVPVE0yTWlBMU55NDFOamd5SURZNUxqVXhOamdnTnpBdU9UazVPQ0ExTWk0NU5qTXhJRGN3TGprNU9UaElOREl1T1RjeU1rTXlOaTQwTVRnMUlEY3dMams1T1RnZ01USXVPVGs1SURVM0xqVTJPRElnTVRJdU9UazVJRFF3TGprNU9UbFdNekF1T1RrNU9VTXhNaTQ1T1RrZ01UUXVORE14TVNBeU5pNDBNVGcxSURBdU9UazVPVE0ySURReUxqazNNaklnTUM0NU9UazVNelphSWlCbWFXeHNQU0oxY213b0kzQmhhVzUwTVY5c2FXNWxZWElwSWk4K0RRbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRVMkxqa3dPQ0F6TVM0d01ESTJRelUyTGpneE5qUWdNekF1TnprM01pQTFOaTQyTVRreklETXdMalkyTlRVZ05UWXVOREF5TVNBek1DNDJOalUxU0RRNUxqYzROakZNTlRZdU16RTFOaUF4T1M0NE9UUkROVFl1TkRJME5DQXhPUzQzTVRRMElEVTJMalF6TVRFZ01Ua3VORGczSURVMkxqTXpNamtnTVRrdU16QXhOVU0xTmk0eU16UTNJREU1TGpFeE5EUWdOVFl1TURRM0lERTRMams1T0RnZ05UVXVPRFF6TnlBeE9DNDVPVGc0U0RRMkxqa3hNRGRETkRZdU5qazVNaUF4T0M0NU9UZzRJRFEyTGpVd05Ua2dNVGt1TVRJek5pQTBOaTQwTVRFZ01Ua3VNekl4TkV3ek9DNHdNell6SURNMkxqZ3lNVFJETXpjdU9UUTVPQ0F6Tnk0d01ESXhJRE0zTGprMU9UTWdNemN1TWpFMk5pQXpPQzR3TmpBNElETTNMak00T0RaRE16Z3VNVFl6SURNM0xqVTJNRGNnTXpndU16UXlNaUF6Tnk0Mk5qVWdNemd1TlRNMklETTNMalkyTlVnME5DNHlOemN5VERNNExqQXlNVElnTlRNdU1UZzVNVU16Tnk0NU1UUTJJRFV6TGpRMU5EY2dNemd1TURBNU5TQTFNeTQzTmpJeklETTRMakkwTkRVZ05UTXVPVEV6TTBNek9DNHpNelE1SURVekxqazNNRE1nTXpndU5ETTFOQ0ExTXk0NU9UZzRJRE00TGpVek5UUWdOVE11T1RrNE9FTXpPQzQyT1RVMklEVXpMams1T0RnZ016Z3VPRFV6TmlBMU15NDVNalk0SURNNExqazJNekVnTlRNdU56a3hPRXcxTmk0NE1qa3lJRE14TGpZeU5USkROVFl1T1RZNU5DQXpNUzQwTlRFMUlEVTJMams1T1RVZ016RXVNakE0TlNBMU5pNDVNRGdnTXpFdU1EQXlObG9pSUdacGJHdzlJbmRvYVhSbElpOCtEUW84WkdWbWN6NE5DanhtYVd4MFpYSWdhV1E5SW1acGJIUmxjakJmWkNJZ2VEMGlNQzQ1T1RBeE1USWlJSGs5SWpraUlIZHBaSFJvUFNJNU5DNDVOVEkwSWlCb1pXbG5hSFE5SWprMUlpQm1hV3gwWlhKVmJtbDBjejBpZFhObGNsTndZV05sVDI1VmMyVWlJR052Ykc5eUxXbHVkR1Z5Y0c5c1lYUnBiMjR0Wm1sc2RHVnljejBpYzFKSFFpSStEUW84Wm1WR2JHOXZaQ0JtYkc5dlpDMXZjR0ZqYVhSNVBTSXdJaUJ5WlhOMWJIUTlJa0poWTJ0bmNtOTFibVJKYldGblpVWnBlQ0l2UGcwS1BHWmxRMjlzYjNKTllYUnlhWGdnYVc0OUlsTnZkWEpqWlVGc2NHaGhJaUIwZVhCbFBTSnRZWFJ5YVhnaUlIWmhiSFZsY3owaU1DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01USTNJREFpTHo0TkNqeG1aVTltWm5ObGRDQmtlVDBpTVRNaUx6NE5DanhtWlVkaGRYTnphV0Z1UW14MWNpQnpkR1JFWlhacFlYUnBiMjQ5SWpFd0xqVWlMejROQ2p4bVpVTnZiRzl5VFdGMGNtbDRJSFI1Y0dVOUltMWhkSEpwZUNJZ2RtRnNkV1Z6UFNJd0lEQWdNQ0F3SURBdU9EazRNRE01SURBZ01DQXdJREFnTUM0eE1UYzJORGNnTUNBd0lEQWdNQ0F3TGpRek5USTVOQ0F3SURBZ01DQXdMak1nTUNJdlBnMEtQR1psUW14bGJtUWdiVzlrWlQwaWJtOXliV0ZzSWlCcGJqSTlJa0poWTJ0bmNtOTFibVJKYldGblpVWnBlQ0lnY21WemRXeDBQU0psWm1abFkzUXhYMlJ5YjNCVGFHRmtiM2NpTHo0TkNqeG1aVUpzWlc1a0lHMXZaR1U5SW01dmNtMWhiQ0lnYVc0OUlsTnZkWEpqWlVkeVlYQm9hV01pSUdsdU1qMGlaV1ptWldOME1WOWtjbTl3VTJoaFpHOTNJaUJ5WlhOMWJIUTlJbk5vWVhCbElpOCtEUW84TDJacGJIUmxjajROQ2p4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaWNHRnBiblF3WDJ4cGJtVmhjaUlnZURFOUlqVXlMalU1TnpnaUlIa3hQU0l4TURJdU5qTTFJaUI0TWowaU1UQTNMall3TlNJZ2VUSTlJak01TGpReE16Z2lJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWo0TkNqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTkdPREEzTlRraUx6NE5Danh6ZEc5d0lHOW1abk5sZEQwaU1TSWdjM1J2Y0MxamIyeHZjajBpSTBKRE5FVTVReUl2UGcwS1BDOXNhVzVsWVhKSGNtRmthV1Z1ZEQ0TkNqeHNhVzVsWVhKSGNtRmthV1Z1ZENCcFpEMGljR0ZwYm5ReFgyeHBibVZoY2lJZ2VERTlJalV6TGpNM05qRWlJSGt4UFNJeE1UTXVOREV6SWlCNE1qMGlNVEkxTGpNNE5TSWdlVEk5SWpNd0xqWTFNRGNpSUdkeVlXUnBaVzUwVlc1cGRITTlJblZ6WlhKVGNHRmpaVTl1VlhObElqNE5Danh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU5HT0RBM05Ua2lMejROQ2p4emRHOXdJRzltWm5ObGREMGlNU0lnYzNSdmNDMWpiMnh2Y2owaUkwSkRORVU1UXlJdlBnMEtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENE5Dand2WkdWbWN6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPVFlpSUdobGFXZG9kRDBpTVRBMElpQjJhV1YzUW05NFBTSXdJREFnT1RZZ01UQTBJaUJtYVd4c1BTSnViMjVsSWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpUGcwS1BHY2dabWxzZEdWeVBTSjFjbXdvSTJacGJIUmxjakJmWkNraVBnMEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswME55NDVOVGsySURFMkxqazVPVGxETmpJdU5UZ3lJREUyTGprNU9Ua2dOelF1TkRNMU9TQXlPQzQ0TmpRMElEYzBMalF6TlRrZ05ETXVORGs1T1VNM05DNDBNelU1SURVNExqRXpOVE1nTmpJdU5UZ3lJRFk1TGprNU9Ua2dORGN1T1RVNU5pQTJPUzQ1T1RrNVF6TXpMak16TnpJZ05qa3VPVGs1T1NBeU1TNDBPRE0wSURVNExqRXpOVE1nTWpFdU5EZ3pOQ0EwTXk0ME9UazVRekl4TGpRNE16UWdNamd1T0RZME5DQXpNeTR6TXpjeUlERTJMams1T1RrZ05EY3VPVFU1TmlBeE5pNDVPVGs1V2lJZ1ptbHNiRDBpSTBaR05ETTJNU0l2UGcwS1BDOW5QZzBLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDBNaTQwTmpVeUlEQXVPVGs1T1RNMlNEVXlMalExTmpSRE5qa3VNREV3TVNBd0xqazVPVGt6TmlBNE1pNDBNamsxSURFMExqUXpNVEVnT0RJdU5ESTVOU0F6TUM0NU9UazVWalF3TGprNU9UbERPREl1TkRJNU5TQTFOeTQxTmpneUlEWTVMakF4TURFZ056QXVPVGs1T0NBMU1pNDBOVFkwSURjd0xqazVPVGhJTkRJdU5EWTFNa015TlM0NU1URTJJRGN3TGprNU9UZ2dNVEl1TkRreU1pQTFOeTQxTmpneUlERXlMalE1TWpJZ05EQXVPVGs1T1ZZek1DNDVPVGs1UXpFeUxqUTVNaklnTVRRdU5ETXhNU0F5TlM0NU1URTJJREF1T1RrNU9UTTJJRFF5TGpRMk5USWdNQzQ1T1RrNU16WmFJaUJtYVd4c1BTSWpSa1kwTXpZeElpOCtEUW84Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUUXlMalEyTlRJZ01DNDVPVGs1TXpaSU5USXVORFUyTkVNMk9TNHdNVEF4SURBdU9UazVPVE0ySURneUxqUXlPVFVnTVRRdU5ETXhNU0E0TWk0ME1qazFJRE13TGprNU9UbFdOREF1T1RrNU9VTTRNaTQwTWprMUlEVTNMalUyT0RJZ05qa3VNREV3TVNBM01DNDVPVGs0SURVeUxqUTFOalFnTnpBdU9UazVPRWcwTWk0ME5qVXlRekkxTGpreE1UWWdOekF1T1RrNU9DQXhNaTQwT1RJeUlEVTNMalUyT0RJZ01USXVORGt5TWlBME1DNDVPVGs1VmpNd0xqazVPVGxETVRJdU5Ea3lNaUF4TkM0ME16RXhJREkxTGpreE1UWWdNQzQ1T1RrNU16WWdOREl1TkRZMU1pQXdMams1T1Rrek5sb2lJR1pwYkd3OUluVnliQ2dqY0dGcGJuUXdYMnhwYm1WaGNpa2lMejROQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5OalF1T1RnNE5pQXpNUzQ0TlRnMVF6WTBMams1TkRNZ016RXVPVFl3TnlBMk5DNDVPRFk1SURNeUxqQTJORFFnTmpRdU9UWXhOQ0F6TWk0eE5qZzNURFl5TGpZNE1URWdOREV1TXpNME9FTTJNaTQxTmpZeElEUXhMamM1TmpFZ05qSXVNVFUwTXlBME1pNHhNakUwSURZeExqWTRNRGtnTkRJdU1USTBNVXcwTnk0NU9UazJJRFF5TGpFNU16UkRORGN1T1RrM09TQTBNaTR4T1RNMElEUTNMams1TmpJZ05ESXVNVGt6TkNBME55NDVPVFEwSURReUxqRTVNelJJTXpRdU16RXpNVU16TXk0NE16Y3hJRFF5TGpFNU16UWdNek11TkRJeU5DQTBNUzQ0TmpjeElETXpMak13TnpVZ05ERXVOREF6TVV3ek1TNHdNamN6SURNeUxqSXdNa016TVM0d01EQTVJRE15TGpBNU5UWWdNekF1T1Rrek5DQXpNUzQ1T0RnMklETXhMakF3TURFZ016RXVPRGd6T0VNek1DNHhNVGM1SURNeExqWXdORGNnTWprdU5EYzJOQ0F6TUM0M056VXlJREk1TGpRM05qUWdNamt1TnprM04wTXlPUzQwTnpZMElESTRMalU1TURnZ016QXVORFV5TnlBeU55NDJNRGsySURNeExqWTFNamtnTWpjdU5qQTVOa016TWk0NE5UTXhJREkzTGpZd09UWWdNek11T0RJNU5DQXlPQzQxT1RBNElETXpMamd5T1RRZ01qa3VOemszTjBNek15NDRNamswSURNd0xqUTNOamdnTXpNdU5URTVOeUF6TVM0d09EUXpJRE16TGpBek5EZ2dNekV1TkRnMk5Fd3pOUzQ0T0RrMklETTBMak0zTmpoRE16WXVOakV4TWlBek5TNHhNRGMwSURNM0xqWXhNak1nTXpVdU5USTJPQ0F6T0M0Mk16WTJJRE0xTGpVeU5qaERNemt1T0RRM09DQXpOUzQxTWpZNElEUXhMakF3TWpVZ016UXVPVFE0TXlBME1TNDNNamszSURNekxqazRURFEyTGpReU1UUWdNamN1TnpNeU1VTTBOaTR3TWpjeklESTNMak16TmpVZ05EVXVOemd6TWlBeU5pNDNPRGszSURRMUxqYzRNeklnTWpZdU1UZzJOVU0wTlM0M09ETXlJREkwTGprNElEUTJMamMxT1RVZ01qTXVPVGs0TXlBME55NDVOVGszSURJekxqazVPRE5ETkRrdU1UVTVPU0F5TXk0NU9UZ3pJRFV3TGpFek5qTWdNalF1T1RnZ05UQXVNVE0yTXlBeU5pNHhPRFkxUXpVd0xqRXpOak1nTWpZdU56Y3hOQ0EwT1M0NU1EVXlJREkzTGpNd01pQTBPUzQxTXpFM0lESTNMalk1TlVNME9TNDFNekk1SURJM0xqWTVOamNnTkRrdU5UTTBOU0F5Tnk0Mk9UZ3pJRFE1TGpVek5UY2dNamN1TmprNU9VdzFOQzR4T1RNeklETXpMamsyTkRsRE5UUXVPVEl3TXlBek5DNDVOREkwSURVMkxqQTNPVEVnTXpVdU5USTJPQ0ExTnk0eU9UTTNJRE0xTGpVeU5qaEROVGd1TXpJM05TQXpOUzQxTWpZNElEVTVMakk1T1RZZ016VXVNVEl4T1NBMk1DNHdNekEwSURNMExqTTROelZNTmpJdU9UQXpNaUF6TVM0ME9UazVRell5TGpRd09ERWdNekV1TURrNE15QTJNaTR3T1NBek1DNDBPRFUwSURZeUxqQTVJREk1TGpjNU56ZEROakl1TURrZ01qZ3VOVGt3T0NBMk15NHdOalkwSURJM0xqWXdPVFlnTmpRdU1qWTJOaUF5Tnk0Mk1EazJRelkxTGpRMk5qZ2dNamN1TmpBNU5pQTJOaTQwTkRNeUlESTRMalU1TURnZ05qWXVORFF6TWlBeU9TNDNPVGMzUXpZMkxqUTBNeklnTXpBdU56UTRPQ0EyTlM0NE16UTBJRE14TGpVMU9EVWdOalF1T1RnNE5pQXpNUzQ0TlRnMVdrMDJNaTQwTlRnMklEUTFMalExTmpsRE5qSXVORFU0TmlBME5DNDRPREl4SURZeExqazVORFVnTkRRdU5ERTFOU0EyTVM0ME1qSXlJRFEwTGpReE5UVklNelF1TmpFeU5rTXpOQzR3TkRBeUlEUTBMalF4TlRVZ016TXVOVGMyTVNBME5DNDRPREl4SURNekxqVTNOakVnTkRVdU5EVTJPVlkwTnk0NU5UWTVRek16TGpVM05qRWdORGd1TlRNeU55QXpOQzR3TkRBeUlEUTRMams1T0RnZ016UXVOakV5TmlBME9DNDVPVGc0U0RZeExqUXlNakpETmpFdU9UazBOU0EwT0M0NU9UZzRJRFl5TGpRMU9EWWdORGd1TlRNeU55QTJNaTQwTlRnMklEUTNMamsxTmpsV05EVXVORFUyT1ZvaUlHWnBiR3c5SW5kb2FYUmxJaTgrRFFvOFpHVm1jejROQ2p4bWFXeDBaWElnYVdROUltWnBiSFJsY2pCZlpDSWdlRDBpTUM0ME9ETTBNVGdpSUhrOUlqa2lJSGRwWkhSb1BTSTVOQzQ1TlRJMElpQm9aV2xuYUhROUlqazFJaUJtYVd4MFpYSlZibWwwY3owaWRYTmxjbE53WVdObFQyNVZjMlVpSUdOdmJHOXlMV2x1ZEdWeWNHOXNZWFJwYjI0dFptbHNkR1Z5Y3owaWMxSkhRaUkrRFFvOFptVkdiRzl2WkNCbWJHOXZaQzF2Y0dGamFYUjVQU0l3SWlCeVpYTjFiSFE5SWtKaFkydG5jbTkxYm1SSmJXRm5aVVpwZUNJdlBnMEtQR1psUTI5c2IzSk5ZWFJ5YVhnZ2FXNDlJbE52ZFhKalpVRnNjR2hoSWlCMGVYQmxQU0p0WVhSeWFYZ2lJSFpoYkhWbGN6MGlNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNVEkzSURBaUx6NE5DanhtWlU5bVpuTmxkQ0JrZVQwaU1UTWlMejROQ2p4bVpVZGhkWE56YVdGdVFteDFjaUJ6ZEdSRVpYWnBZWFJwYjI0OUlqRXdMalVpTHo0TkNqeG1aVU52Ykc5eVRXRjBjbWw0SUhSNWNHVTlJbTFoZEhKcGVDSWdkbUZzZFdWelBTSXdJREFnTUNBd0lEQXVPVGt5TVRVM0lEQWdNQ0F3SURBZ01DNHpORFV3T1RnZ01DQXdJREFnTUNBd0xqUTBOekExT1NBd0lEQWdNQ0F3TGpNZ01DSXZQZzBLUEdabFFteGxibVFnYlc5a1pUMGlibTl5YldGc0lpQnBiakk5SWtKaFkydG5jbTkxYm1SSmJXRm5aVVpwZUNJZ2NtVnpkV3gwUFNKbFptWmxZM1F4WDJSeWIzQlRhR0ZrYjNjaUx6NE5DanhtWlVKc1pXNWtJRzF2WkdVOUltNXZjbTFoYkNJZ2FXNDlJbE52ZFhKalpVZHlZWEJvYVdNaUlHbHVNajBpWldabVpXTjBNVjlrY205d1UyaGhaRzkzSWlCeVpYTjFiSFE5SW5Ob1lYQmxJaTgrRFFvOEwyWnBiSFJsY2o0TkNqeHNhVzVsWVhKSGNtRmthV1Z1ZENCcFpEMGljR0ZwYm5Rd1gyeHBibVZoY2lJZ2VERTlJalV5TGpnMk9UTWlJSGt4UFNJeE1UTXVOREV6SWlCNE1qMGlNVEkwTGpnM09DSWdlVEk5SWpNd0xqWTFNRGNpSUdkeVlXUnBaVzUwVlc1cGRITTlJblZ6WlhKVGNHRmpaVTl1VlhObElqNE5Danh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU5HUmpVNE5UZ2lMejROQ2p4emRHOXdJRzltWm5ObGREMGlNU0lnYzNSdmNDMWpiMnh2Y2owaUkwWTROVGRCTmlJdlBnMEtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENE5Dand2WkdWbWN6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPVFlpSUdobGFXZG9kRDBpTVRBMElpQjJhV1YzUW05NFBTSXdJREFnT1RZZ01UQTBJaUJtYVd4c1BTSnViMjVsSWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpUGcwS1BHY2dabWxzZEdWeVBTSjFjbXdvSTJacGJIUmxjakJmWkNraVBnMEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswME55NDNNRE01SURFMkxqazVPVGxETmpJdU16STJNeUF4Tmk0NU9UazVJRGMwTGpFNE1ERWdNamd1T0RZME5DQTNOQzR4T0RBeElEUXpMalE1T1RsRE56UXVNVGd3TVNBMU9DNHhNelV6SURZeUxqTXlOak1nTmprdU9UazVPU0EwTnk0M01ETTVJRFk1TGprNU9UbERNek11TURneE5pQTJPUzQ1T1RrNUlESXhMakl5TnpjZ05UZ3VNVE0xTXlBeU1TNHlNamMzSURRekxqUTVPVGxETWpFdU1qSTNOeUF5T0M0NE5qUTBJRE16TGpBNE1UWWdNVFl1T1RrNU9TQTBOeTQzTURNNUlERTJMams1T1RsYUlpQm1hV3hzUFNJalJrWTBNell4SWk4K0RRbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRRM0xqY3dNemtnTVRZdU9UazVPVU0yTWk0ek1qWXpJREUyTGprNU9Ua2dOelF1TVRnd01TQXlPQzQ0TmpRMElEYzBMakU0TURFZ05ETXVORGs1T1VNM05DNHhPREF4SURVNExqRXpOVE1nTmpJdU16STJNeUEyT1M0NU9UazVJRFEzTGpjd016a2dOamt1T1RrNU9VTXpNeTR3T0RFMklEWTVMams1T1RrZ01qRXVNakkzTnlBMU9DNHhNelV6SURJeExqSXlOemNnTkRNdU5EazVPVU15TVM0eU1qYzNJREk0TGpnMk5EUWdNek11TURneE5pQXhOaTQ1T1RrNUlEUTNMamN3TXprZ01UWXVPVGs1T1ZvaUlHWnBiR3c5SW5WeWJDZ2pjR0ZwYm5Rd1gyeHBibVZoY2lraUx6NE5Dand2Wno0TkNqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTkRJdU1qQTRPU0F3TGprNU9Ua3pOa2cxTWk0eVF6WTRMamMxTXpjZ01DNDVPVGs1TXpZZ09ESXVNVGN6TVNBeE5DNDBNekV4SURneUxqRTNNekVnTXpBdU9UazVPVlkwTUM0NU9UazVRemd5TGpFM016RWdOVGN1TlRZNE1pQTJPQzQzTlRNM0lEY3dMams1T1RnZ05USXVNaUEzTUM0NU9UazRTRFF5TGpJd09EbERNalV1TmpVMU1pQTNNQzQ1T1RrNElERXlMakl6TlRnZ05UY3VOVFk0TWlBeE1pNHlNelU0SURRd0xqazVPVGxXTXpBdU9UazVPVU14TWk0eU16VTRJREUwTGpRek1URWdNalV1TmpVMU1pQXdMams1T1Rrek5pQTBNaTR5TURnNUlEQXVPVGs1T1RNMldpSWdabWxzYkQwaUkwWkdORE0yTVNJdlBnMEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswME1pNHlNRGc1SURBdU9UazVPVE0yU0RVeUxqSkROamd1TnpVek55QXdMams1T1Rrek5pQTRNaTR4TnpNeElERTBMalF6TVRFZ09ESXVNVGN6TVNBek1DNDVPVGs1VmpRd0xqazVPVGxET0RJdU1UY3pNU0ExTnk0MU5qZ3lJRFk0TGpjMU16Y2dOekF1T1RrNU9DQTFNaTR5SURjd0xqazVPVGhJTkRJdU1qQTRPVU15TlM0Mk5UVXlJRGN3TGprNU9UZ2dNVEl1TWpNMU9DQTFOeTQxTmpneUlERXlMakl6TlRnZ05EQXVPVGs1T1ZZek1DNDVPVGs1UXpFeUxqSXpOVGdnTVRRdU5ETXhNU0F5TlM0Mk5UVXlJREF1T1RrNU9UTTJJRFF5TGpJd09Ea2dNQzQ1T1RrNU16WmFJaUJtYVd4c1BTSjFjbXdvSTNCaGFXNTBNVjlzYVc1bFlYSXBJaTgrRFFvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVFl3TGpJNU1qWWdNakl1T1RrNU5FZ3pOeTR4TVRNMVF6TTFMalV4T1RnZ01qSXVPVGs1TkNBek5DNHlNVFlnTWpRdU16QXpOeUF6TkM0eU1UWWdNalV1T0RrNE9GWTFNUzQ1T1RnNFREUXdMakF4TURnZ05EWXVNVGs0T0VnMk1DNHlPVEkyUXpZeExqZzROaklnTkRZdU1UazRPQ0EyTXk0eE9TQTBOQzQ0T1RRZ05qTXVNVGtnTkRNdU1qazRPRll5TlM0NE9UZzRRell6TGpFNUlESTBMak13TXpjZ05qRXVPRGcyTWlBeU1pNDVPVGswSURZd0xqSTVNallnTWpJdU9UazVORm9pSUdacGJHdzlJaU5HUlVaQlJrTWlMejROQ2p4a1pXWnpQZzBLUEdacGJIUmxjaUJwWkQwaVptbHNkR1Z5TUY5a0lpQjRQU0l3TGpJeU56WTJNU0lnZVQwaU9TSWdkMmxrZEdnOUlqazBMamsxTWpRaUlHaGxhV2RvZEQwaU9UVWlJR1pwYkhSbGNsVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0lnWTI5c2IzSXRhVzUwWlhKd2IyeGhkR2x2YmkxbWFXeDBaWEp6UFNKelVrZENJajROQ2p4bVpVWnNiMjlrSUdac2IyOWtMVzl3WVdOcGRIazlJakFpSUhKbGMzVnNkRDBpUW1GamEyZHliM1Z1WkVsdFlXZGxSbWw0SWk4K0RRbzhabVZEYjJ4dmNrMWhkSEpwZUNCcGJqMGlVMjkxY21ObFFXeHdhR0VpSUhSNWNHVTlJbTFoZEhKcGVDSWdkbUZzZFdWelBTSXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXdJREFnTUNBd0lEQWdNQ0F3SURBZ01DQXhNamNnTUNJdlBnMEtQR1psVDJabWMyVjBJR1I1UFNJeE15SXZQZzBLUEdabFIyRjFjM05wWVc1Q2JIVnlJSE4wWkVSbGRtbGhkR2x2YmowaU1UQXVOU0l2UGcwS1BHWmxRMjlzYjNKTllYUnlhWGdnZEhsd1pUMGliV0YwY21sNElpQjJZV3gxWlhNOUlqQWdNQ0F3SURBZ01DNDVORGt3TWlBd0lEQWdNQ0F3SURBdU5UQXhPVFl4SURBZ01DQXdJREFnTUM0eU56UTFNU0F3SURBZ01DQXdMak1nTUNJdlBnMEtQR1psUW14bGJtUWdiVzlrWlQwaWJtOXliV0ZzSWlCcGJqSTlJa0poWTJ0bmNtOTFibVJKYldGblpVWnBlQ0lnY21WemRXeDBQU0psWm1abFkzUXhYMlJ5YjNCVGFHRmtiM2NpTHo0TkNqeG1aVUpzWlc1a0lHMXZaR1U5SW01dmNtMWhiQ0lnYVc0OUlsTnZkWEpqWlVkeVlYQm9hV01pSUdsdU1qMGlaV1ptWldOME1WOWtjbTl3VTJoaFpHOTNJaUJ5WlhOMWJIUTlJbk5vWVhCbElpOCtEUW84TDJacGJIUmxjajROQ2p4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaWNHRnBiblF3WDJ4cGJtVmhjaUlnZURFOUlqVXhMamd6TlRRaUlIa3hQU0l4TURJdU5qTTFJaUI0TWowaU1UQTJMamcwTWlJZ2VUSTlJak01TGpReE16Z2lJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWo0TkNqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTkdPREEzTlRraUx6NE5Danh6ZEc5d0lHOW1abk5sZEQwaU1TSWdjM1J2Y0MxamIyeHZjajBpSTBKRE5FVTVReUl2UGcwS1BDOXNhVzVsWVhKSGNtRmthV1Z1ZEQ0TkNqeHNhVzVsWVhKSGNtRmthV1Z1ZENCcFpEMGljR0ZwYm5ReFgyeHBibVZoY2lJZ2VERTlJalV5TGpZeE1qa2lJSGt4UFNJeE1UTXVOREV6SWlCNE1qMGlNVEkwTGpZeU1pSWdlVEk5SWpNd0xqWTFNRGNpSUdkeVlXUnBaVzUwVlc1cGRITTlJblZ6WlhKVGNHRmpaVTl1VlhObElqNE5Danh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU5HTkRaQ05EVWlMejROQ2p4emRHOXdJRzltWm5ObGREMGlNU0lnYzNSdmNDMWpiMnh2Y2owaUkwVkZRVGcwT1NJdlBnMEtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENE5Dand2WkdWbWN6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9sb2dvLTI0NDRlNzk2MzBhZTJiZmU2MDQzNWYyMDQ4YzIyODFkLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9wYXR0ZXJuQkctZjI1YWYzOGUzNTcwOTZjYTIzMjkwZDVmNWJjYjMzNTUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NlcnZpY2UtdGh1bWItMGE1YWM1YWFlNzYyMWIxM2YwZWY4ZDVmNWIxM2RhNTIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU5UY2lJR2hsYVdkb2REMGlOVGNpSUhacFpYZENiM2c5SWpBZ01DQTFOeUExTnlJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNE5Danh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk1qUXVOVFF4TmlBd0xqYzVNVFl4Tmtnek1pNDBOVGd6UXpRMUxqVTNOU0F3TGpjNU1UWXhOaUExTmk0eU1EZ3pJREV4TGpReU5EWWdOVFl1TWpBNE15QXlOQzQxTkRFMlZqTXlMalExT0RORE5UWXVNakE0TXlBME5TNDFOelE0SURRMUxqVTNOU0ExTmk0eU1EZ3lJRE15TGpRMU9ETWdOVFl1TWpBNE1rZ3lOQzQxTkRFMlF6RXhMalF5TkRrZ05UWXVNakE0TWlBd0xqYzVNVFkzTXlBME5TNDFOelE0SURBdU56a3hOamN6SURNeUxqUTFPRE5XTWpRdU5UUXhOa013TGpjNU1UWTNNeUF4TVM0ME1qUTJJREV4TGpReU5Ea2dNQzQzT1RFMk1UWWdNalF1TlRReE5pQXdMamM1TVRZeE5sb2lJR1pwYkd3OUluVnliQ2dqY0dGcGJuUXdYMnhwYm1WaGNpa2lMejROQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5NekV1TWpFM01TQXpNaTQ1TmpJMVF6TXhMak00TkRrZ016SXVOemt5TXlBek1TNDBOamc0SURNeUxqVTVNVFFnTXpFdU5EWTRPQ0F6TWk0ek5UbFdNekF1TWpFME4wZzBNQzR6TnpRNVZqTTJMalkwT0VNME1DNHpOelE1SURNM0xqSXpOekVnTkRBdU1UWTNOQ0F6Tnk0M05ESXpJRE01TGpjMU1pQXpPQzR4TmpKRE16a3VNek0yT0NBek9DNDFPREl4SURNNExqZ3pOelVnTXpndU56a3hPU0F6T0M0eU5UUTFJRE00TGpjNU1UbElNVGd1TnpRMU5rTXhPQzR4TmpJMElETTRMamM1TVRrZ01UY3VOall6TVNBek9DNDFPREl4SURFM0xqSTBOemtnTXpndU1UWXlRekUyTGpnek1qVWdNemN1TnpReU15QXhOaTQyTWpRNUlETTNMakl6TnpFZ01UWXVOakkwT1NBek5pNDJORGhXTXpBdU1qRTBOMGd5TlM0MU16RXlWak15TGpNMU9VTXlOUzQxTXpFeUlETXlMalU1TVRRZ01qVXVOakUxTVNBek1pNDNPVEl6SURJMUxqYzRNeUF6TWk0NU5qSTFRekkxTGprMU1Ea2dNek11TVRNeE9TQXlOaTR4TkRrM0lETXpMakl4TnpFZ01qWXVNemM1TlNBek15NHlNVGN4U0RNd0xqWXlNRFpETXpBdU9EVXdNaUF6TXk0eU1UY3hJRE14TGpBME9USWdNek11TVRNeE9TQXpNUzR5TVRjeElETXlMamsyTWpWYVRUTXdMakU1TmpZZ016QXVNakUwTjBneU5pNDRNRE0wVmpNeExqa3pTRE13TGpFNU5qWldNekF1TWpFME4xcE5Nemt1TnpVeU1TQXlNaTR5TmpjMFF6TTVMak16TmprZ01qRXVPRFEyT1NBek9DNDRNemMySURJeExqWXpOeUF6T0M0eU5UUTFJREl4TGpZek4wZ3pNeTQxT0RreFZqRTVMalE1TWpkRE16TXVOVGc1TVNBeE9TNHhNelV5SURNekxqUTJOVFlnTVRndU9ETXhOeUF6TXk0eU1UZ3hJREU0TGpVNE1VTXpNaTQ1TnpBNUlERTRMak16TVRZZ016SXVOamN3TXlBeE9DNHlNRFl4SURNeUxqTXhOeUF4T0M0eU1EWXhTREkwTGpZNE16RkRNalF1TXpJNU55QXhPQzR5TURZeElESTBMakF5T1RNZ01UZ3VNek14TmlBeU15NDNPREU1SURFNExqVTRNVU15TXk0MU16UTFJREU0TGpnek1UTWdNak11TkRFd09DQXhPUzR4TXpVeUlESXpMalF4TURnZ01Ua3VORGt5TjFZeU1TNDJNemRJTVRndU56UTFOa014T0M0eE5qSTBJREl4TGpZek55QXhOeTQyTmpNeElESXhMamcwTmprZ01UY3VNalEzT1NBeU1pNHlOamMwUXpFMkxqZ3pNalVnTWpJdU5qZzJOaUF4Tmk0Mk1qUTVJREl6TGpFNU1UUWdNVFl1TmpJME9TQXlNeTQzT0RFelZqSTRMamt5T0VnME1DNHpOelE1VmpJekxqYzRNVE5ETkRBdU16YzBPU0F5TXk0eE9URTBJRFF3TGpFMk56UWdNakl1TmpnMk5pQXpPUzQzTlRJeElESXlMakkyTnpSYVRUTXhMamc1TWprZ01qRXVOak0zU0RJMUxqRXdOekpXTVRrdU9USXhNMGd6TVM0NE9USTVWakl4TGpZek4xb2lJR1pwYkd3OUluZG9hWFJsSWk4K0RRbzhaR1ZtY3o0TkNqeHNhVzVsWVhKSGNtRmthV1Z1ZENCcFpEMGljR0ZwYm5Rd1gyeHBibVZoY2lJZ2VERTlJak15TGpjNE5UVWlJSGt4UFNJNE9TNDNPRFUxSWlCNE1qMGlPRGt1TnpnMU5TSWdlVEk5SWpJMExqSXhORFVpSUdkeVlXUnBaVzUwVlc1cGRITTlJblZ6WlhKVGNHRmpaVTl1VlhObElqNE5Danh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU5HUmpReE5rTWlMejROQ2p4emRHOXdJRzltWm5ObGREMGlNU0lnYzNSdmNDMWpiMnh2Y2owaUkwWkdORUl5UWlJdlBnMEtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENE5Dand2WkdWbWN6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlOVGNpSUdobGFXZG9kRDBpTlRjaUlIWnBaWGRDYjNnOUlqQWdNQ0ExTnlBMU55SWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5NalF1TlRReE5pQXdMamM1TVRZeE5rZ3pNaTQwTlRnelF6UTFMalUzTlRFZ01DNDNPVEUyTVRZZ05UWXVNakE0TXlBeE1TNDBNalEySURVMkxqSXdPRE1nTWpRdU5UUXhObFl6TWk0ME5UZ3pRelUyTGpJd09ETWdORFV1TlRjME9DQTBOUzQxTnpVeElEVTJMakl3T0RJZ016SXVORFU0TXlBMU5pNHlNRGd5U0RJMExqVTBNVFpETVRFdU5ESTBPU0ExTmk0eU1EZ3lJREF1TnpreE5qRTJJRFExTGpVM05EZ2dNQzQzT1RFMk1UWWdNekl1TkRVNE0xWXlOQzQxTkRFMlF6QXVOemt4TmpFMklERXhMalF5TkRZZ01URXVOREkwT1NBd0xqYzVNVFl4TmlBeU5DNDFOREUySURBdU56a3hOakUyV2lJZ1ptbHNiRDBpZFhKc0tDTndZV2x1ZERCZmJHbHVaV0Z5S1NJdlBnMEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswME1pNHpPRGt4SURJMUxqSXlNVFJETkRJdU16a3pOaUF5TlM0ek1ESXpJRFF5TGpNNE56Y2dNalV1TXpnME5TQTBNaTR6TmpjMUlESTFMalEyTjB3ME1DNDFOakEzSURNeUxqY3lNelZETkRBdU5EWTVOU0F6TXk0d09EZzNJRFF3TGpFME16SWdNek11TXpRMk1pQXpPUzQzTmpneElETXpMak0wT0ROTU1qZ3VPVEkzTkNBek15NDBNRE16UXpJNExqa3lOaUF6TXk0ME1ETXpJREk0TGpreU5EY2dNek11TkRBek15QXlPQzQ1TWpNeUlETXpMalF3TXpOSU1UZ3VNRGd5TlVNeE55NDNNRFV6SURNekxqUXdNek1nTVRjdU16YzJOeUF6TXk0eE5EUTVJREUzTGpJNE5UY2dNekl1TnpjM05rd3hOUzQwTnpnNUlESTFMalE1TXpSRE1UVXVORFU0SURJMUxqUXdPVEVnTVRVdU5EVXlNU0F5TlM0ek1qUTBJREUxTGpRMU56TWdNalV1TWpReE5FTXhOQzQzTlRneklESTFMakF5TURZZ01UUXVNalVnTWpRdU16WXpPQ0F4TkM0eU5TQXlNeTQxT1VNeE5DNHlOU0F5TWk0Mk16UTFJREUxTGpBeU16WWdNakV1T0RVM055QXhOUzQ1TnpRMklESXhMamcxTnpkRE1UWXVPVEkxTmlBeU1TNDROVGMzSURFM0xqWTVPVE1nTWpJdU5qTTBOU0F4Tnk0Mk9Ua3pJREl6TGpVNVF6RTNMalk1T1RNZ01qUXVNVEkzTmlBeE55NDBOVE00SURJMExqWXdPRFVnTVRjdU1EWTVOaUF5TkM0NU1qWTVUREU1TGpNek1UY2dNamN1TWpFMU1VTXhPUzQ1TURNMElESTNMamM1TXpVZ01qQXVOamsyTnlBeU9DNHhNalUxSURJeExqVXdPRE1nTWpndU1USTFOVU15TWk0ME5qZ2dNamd1TVRJMU5TQXlNeTR6T0RNZ01qY3VOalkzTlNBeU15NDVOVGt5SURJMkxqa3dNVXd5Tnk0Mk56WTVJREl4TGprMU5EZERNamN1TXpZME5pQXlNUzQyTkRFMUlESTNMakUzTVRFZ01qRXVNakE0TmlBeU55NHhOekV4SURJd0xqY3pNVEZETWpjdU1UY3hNU0F4T1M0M056WWdNamN1T1RRME9DQXhPQzQ1T1RnNElESTRMamc1TlRnZ01UZ3VPVGs0T0VNeU9TNDRORFk0SURFNExqazVPRGdnTXpBdU5qSXdOQ0F4T1M0M056WWdNekF1TmpJd05DQXlNQzQzTXpFeFF6TXdMall5TURRZ01qRXVNVGswTWlBek1DNDBNemN6SURJeExqWXhORElnTXpBdU1UUXhNeUF5TVM0NU1qVTBRek13TGpFME1qTWdNakV1T1RJMk55QXpNQzR4TkRNMklESXhMamt5TnprZ016QXVNVFEwTlNBeU1TNDVNamt5VERNekxqZ3pOVEVnTWpZdU9EZzVRek0wTGpReE1USWdNamN1TmpZeU9DQXpOUzR6TWprMElESTRMakV5TlRVZ016WXVNamt4T0NBeU9DNHhNalUxUXpNM0xqRXhNRGtnTWpndU1USTFOU0F6Tnk0NE9ERXlJREkzTGpnd05TQXpPQzQwTmpBeklESTNMakl5TXpaTU5EQXVOek0yTmlBeU5DNDVNemMxUXpRd0xqTTBORE1nTWpRdU5qRTVOaUEwTUM0d09USXpJREkwTGpFek5EUWdOREF1TURreU15QXlNeTQxT1VNME1DNHdPVEl6SURJeUxqWXpORFVnTkRBdU9EWTJJREl4TGpnMU56Y2dOREV1T0RFM0lESXhMamcxTnpkRE5ESXVOelk0SURJeExqZzFOemNnTkRNdU5UUXhOeUF5TWk0Mk16UTFJRFF6TGpVME1UY2dNak11TlRsRE5ETXVOVFF4TnlBeU5DNHpOREk1SURRekxqQTFPVElnTWpRdU9UZ3pPU0EwTWk0ek9Ea3hJREkxTGpJeU1UUmFUVFF3TGpNNE5EUWdNelV1T1RnMk9FTTBNQzR6T0RRMElETTFMalV6TVRnZ05EQXVNREUyTmlBek5TNHhOakkwSURNNUxqVTJNekVnTXpVdU1UWXlORWd4T0M0ek1UazRRekUzTGpnMk5qSWdNelV1TVRZeU5DQXhOeTQwT1RnMUlETTFMalV6TVRnZ01UY3VORGs0TlNBek5TNDVPRFk0VmpNM0xqazJOa014Tnk0ME9UZzFJRE00TGpReU1UZ2dNVGN1T0RZMk1pQXpPQzQzT1RBNElERTRMak14T1RnZ016Z3VOemt3T0Vnek9TNDFOak14UXpRd0xqQXhOallnTXpndU56a3dPQ0EwTUM0ek9EUTBJRE00TGpReU1UZ2dOREF1TXpnME5DQXpOeTQ1TmpaV016VXVPVGcyT0ZvaUlHWnBiR3c5SW5kb2FYUmxJaTgrRFFvOFpHVm1jejROQ2p4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaWNHRnBiblF3WDJ4cGJtVmhjaUlnZURFOUlqTXlMamM0TlRVaUlIa3hQU0k0T1M0M09EVTFJaUI0TWowaU9Ea3VOemcxTlNJZ2VUSTlJakkwTGpJeE5EVWlJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWo0TkNqeHpkRzl3SUhOMGIzQXRZMjlzYjNJOUlpTkdSalU0TlRnaUx6NE5Danh6ZEc5d0lHOW1abk5sZEQwaU1TSWdjM1J2Y0MxamIyeHZjajBpSTBZNE5UZEJOaUl2UGcwS1BDOXNhVzVsWVhKSGNtRmthV1Z1ZEQ0TkNqd3ZaR1ZtY3o0TkNqd3ZjM1puUGcwS1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NoYXBlLWxlZnQtYTMwYzg1NWM0NTdlZTU0NGEwYzFmMGU5ODA4ZDRiMmYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NoYXBlLXBhdHRlcm4xLTJlNjIxYTBjZTY3MGZiZWM3ZWE2ZmY3MWVjYmYyMmEwLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zaGFwZS1wYXR0ZXJuMi0yZTYyMWEwY2U2NzBmYmVjN2VhNmZmNzFlY2JmMjJhMC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2hhcGUtcmlnaHQtYjkyZmVjMTc4OWY5MDAwNzlmYjJiZWM5ZGIxMjQwOWUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21lbWJlci0xLTkxYjk4YTI4NTU0OGMyNTkwOTI3Y2ZmMjllOGJmYjQzLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9tZW1iZXItMi0yZDU5OWQ0N2UzYjAyMGUyNzRlMGE2MTlhNzkyMjU2YS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbWVtYmVyLTMtOGE2NjU0YThkZjcyNTE4NjEzNmIyZWIxMzQwOWJhYzQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21lbWJlci00LTc3OTRmMjFiMGQ5YTk4ZGE5Yzk0NTE4ZWVjZWViYTdhLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9tZW1iZXItNS05MmYyODc0YmEyZGI0YmJhM2MzNmI4MzRmNmIyYjU5Zi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbWVtYmVyLTYtMjZmYTE4Yzg2YTJjZWI2NjNlYjJhYWFjN2MwNTI2OWYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRGNBQUFBM0NBWUFBQUNvMjlKR0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUJtVVNVUkJWSGdCclZwWmtGeG5kZjd1MXZzNnUwWXpveDVaa2lYTFJtTWJzREM0R05rVW9ZcEF4cFZVd0tFcXdFTkNVVVZoK3pGNXNRandrRXFxTENlVjRLcFVTcGdYVEJLQ0FqZzJjZUdNU2ZBQ01oNWp5YlpzeVdvdHMyODlQVE85MzN2em5mTjN6OWp4Sm1OZjZXcGF0Ky84OXovYmQ3NXp6clh3UGgvSDcvcFNMcEwySm1MeDdLRk1ObE5JNUhKajBYUXVaemxPcnRXczZUMmVFeTFGa3RsaTRQdWxhcjA1TmZtTHh4K3ZObHBUUjQvZFg4VDdlRmg0SDQ3eHNiSGNOYnY3N2h6dXpvL0hZczU0UGgySFo3dElKVlBJRCs1RXBxY2ZUYitGNm1ZWjB4Y3Y0ZkxzRXRZMjY2alVXMWd1bDVIUDVkRnExdEhiMHoyVlNLVWU2Qm5LblBqeVY0OFc4UjZQOXlUYzBNREFlQ29adXlmaXVPTlJ4MEZ2UG9XaG5od0svVjFJdWlGNmN6bnMySDBWdW9ZTHFHMnU0K1hUcC9ETGs2ZXdWbTFpbzlaRXJkRkVJaG5INk1nZ2R1OGFSdUdxdmJCZEQxNGtocDd1L0ltK29SMzNEZSs5ZmhLLzQrSGlkemdLTzNlT2VhNTlMM1V6SGdZaG1rR0xtZzlRbVYvRjNISVppMHRsN09wTElobUp3cWI2YkRlQ1JDWVBKNVpDYjNjZXVWYUQxMjFrTXluMDlXYVFwWUE5dzhQb0dSbENOajhFTjViRytucDVvbG4zSjVabXprODI2N1V2N3hnOVVNUzdQTjZWY0lWQ0llY0YvajM4ZUpkSERlZlNLYVNpcnBxLzFmUlJiL0ZzMURHOXVnS0VEWXgwWjJGWkFlS3BES0twSE1ZU2FRd05kK09WWjUvREs4VVpuRnRhd01XaWkvNitMSzdtR2wwRHU3aVdMNnNoMDVWSHZWNUg2QWZqVGlSeWZuSDYzTkhlblZkOTQ5M3MxNzdTR3dzREE0V3dXWCtXdTczTG90WjkzMGVURnJBc253Qmh3WEZzUkQwWEhrK2YxbHpkcUtGTTE3TWlIaUtKQktLTXYyUXlnZG1MbC9ITTFBczRYWnhIY1dFVDV4Y3JXS2hhS0ZWZHpDeVdjUEhpUlRScW13aGJkY1JqY2NDaDhpeXFMd3lPUHZuekg1OC9mSGlzY0tWN3ZpTGhyaW9VSnJoSkNtWVh3akRrbFJBaG4xZXVOTEN5MmNKYWc5ZmlTVFI0c1JWWWpDVWZtODBXZk50R2hFSjVVVzdTcHR1V1YzSG0rWmN4VjZwaW93R3NNUFplWFZqR0k3OThIdi93L1lmeDRFOGZ4OHp5SnBibUY5Q3FWeEQ0RFlTMjJXSVErTERDc05DYnpqOTc0OWpZeEpYcyt4MkZHeHU3OFU3SGNYNFVobGFPcDJyUmtnZnlaNlZXdy94S0NhOU96K0pWSXVEczhocldLbFVLYmtOVUlHQVJUYVgwL3BDVzlobWI2Vndha1ZnVXBVb05FUUtIeTNoc3RGb1lHZDJIY3JtT2IzNzdiL0hqaHg5R1pYMlpucjFKZ1pxaVNsV295OGRHSTI0dTlCcy91dVdqSDducm5mYit0akUzOXFHUDNPblhxOGRhZkxoNGhxVVBvVWFJRWsxZWM3aHBteWdaTURaYytjNmpFTHp1dVM3aVVRL1piSXJhRHhEUTJuWVlJQnBMWVBmZTNWZ3ByVE95SW93c0M5MnBLTy92UjJGSEZnY09ITURRNXo2Tm1jc1hzSFRwQXBMeEJHd3ZCb3V1U1ExQjR0eDFIYldpWXpuMzNucnJwL0hZWXc4ZGU5ZkMzWGpMYlJOaHZYNnNSWTFUNVZRY05jZTRDcmhKeS9Jb21FUEVDeEh4UEhTbmswZ1RYQmdYcUZacjhCbUwyVmlFd3FXUlRHV0pmdHdnMTRuR1UrZ3Y3RUh5aFpmUW40bGhvMjdpYW5UWEVLNDZzQWU3RHV3bFd2WmcvOVVGMkg2ZGJ1V3BoMEE4SlhSb2FRK3BlQlJ4UGpNZWo2UGhSTzhkdjIyaU9QbnpFeWZlVElZM2RjdXh3K09GTVBDUCswSEFqZnJxaWgzWGtNT2g1Y1R4SXRSaXhITVE1VStmN0NNZ0NMaDJpSHdtZ2J6QWV6YUxSQ3JQZ0pFbk9mQVNTZlNQak9MUTRac3hORFNBd21BZkJyb3pTRVNBaUUzMjBsalhNMkM4MlJUSW9nQ0VLZ3BvemhpVlkxUEpIOWkvQjEvNTB6dmdVdTdBc280ZkhwOG92SmtjenB0ZEhCemUvU3ozUG1EUll2WHFHbHErOFhzUnpSTHZvOXVKRmVPUkNHTFJDUDh2N21rams0eWhLNU5rZkRHR2NpbU0zWEFEOGp0RzZFcTB1R3lUYm1YVDZybWVidlIwNVJSbGQrd2N3T0RJVGlvaFJrVzVGSkwyOGl5TlJadEFaRG0wbnVOb3ZneklZbEJadzU2aEhiaHh1QXZGVWcxelM2V1k3Vm9UbzhQN0h5Z1dYNnE5clZ2ZWNQUDRQVFNVb3FKWXJOWHk5YnBhVDY3WmtnWUNKbVp1SXVLZ2l5NFpwL1ZpTVJkUldtMTF2WW9NTjNidzZxdVE3ZTVUZHd3YmhFYTdTZlBFbU1pamNHb2VCbWpCVEU4WDFwYm13TGhHYzMyVldvc2dGSUdJdks3RW11M3hkS2tZWXdPWHBPRG04U09JY1UvVEQ5NlBrWjc5ZU1aUzh4VjhPNVQ4ZS9kYnVxVzRveFZhUnkyMWtGaUtGZ3Y5cmU4N1hDMWtiSW5iMEtUSUo2TG96eWZSbTRqUkxYMFY1dHJkUTlpMWExUTNHREFsaUNXSkFvemRWdHZGdURJdEVPR0t1WFNlY1psQlQvOFFrdGtlNXNNdWVQRWNyR2lTd2tZWmFxNXVVd0xEb1JWamlReWFYRE5xdGVqMkNRMFYyUTl2dU92bThZbXh0N1FjSDN1OHZYdjVTd3UxWVBLYXNaeWxYNFVFRmFEWjRIZDBvMGE5QmljWjRiNERoZlFrZzMwZ255TmtleFNXeXFGUWxoMVZVQWg1VCtoUU1VUzcrc284djIvUjlaamdhUjFXQ1JRcXlkUkJtaFpoWG5TamFqa1ZUTHlHT2c0SlZDNkJTb2hCb2pmSDlNTjBZWFpsTE9WWXBJUTQ4Z2JMMFdyakZHazhiQ2RvUXdwOC9SQ3FzS0ZhU3o4SFJzQTZpVys5M2lTWVVEQnFzOWtRTXR6QVJxbUU4dndzS3N1TEN1TVdxWmVUNnFGTEpoRnNybUw1M0hOb3JNNFRPMWJSM0NqcDVsMkhMdXZGRGV4VE9JdFdVeXZyRnZrOFdqdG9WbEc5K0NKQ2d0ZjZ5SFg0eFhORm1NMGF0Nkw2eHo4MlBqSCtCdUg0KzNmcXhoRzJoV0Yrb292WmJjMEZ0RUFuRGlVWnkzME51dUVtaGR0ZzRwYXpYdmRSMnFpaWVIa0JxNWZuVVZ0WlVKWWhObThGVE83Y3RKdklvam85ZzQzcGk2ak16cUcxU2FwVnE1dmN4VCsyR3pNZ29sWXpzV2J4MlRhOXlFMzF3cStVNFRBRUhubUZxQnBZQnVHMjloeUtoUGU4VHJpeHNmRUN2NWtRNlRzM1Naekk3MG5DN2dnbUNWdjFZeG1kQ0xEVWFMRUtYYlRPc3lXdTZZYzR0N0NDMmRJcU5wZVg0RytVNFpkTE9QdkVmNk8rZUJFMkdYK3Nkd0RsbFRXeWtESnF5eXVvODJmUWJEQ3hXOFlWbFUrYXhJMTJHdkxGTDUwUVVjYW1jTmIvZmVhTWVsYWc0YlpkdWRHUTQrUGpFN2x0eTduK2hOR0FpUzJqQ2Qra2dDRHNXRjB0Q1Exc1d4YzBjV2lFYlVsTzVMMkphQXlYUzJXY1dTaGhzN3pKYXFHSjJlZWZ4VVBmK1M0ZS92YTMwSmgrRVJIR1dUTGZoeEtKOHVyc1BPcWJHMVFtbFNkb0taaFBkOXpPcTVKRUdKdjBsdWJLSEJ6Znhha3o1MUVqQVJCdVlhbXgxTCsyQkt6WndWMWJ3b1ZXK0VVUlFrNUZFZ0VCdFl6d1FkOHNvRlkwdXJDWmtNazNPMjVBSmJSVU9LRlo1WTJLQ250bVpnRVhWc3JLWWxJTS9zLzkyUjNZLzZFUFlITitIcEZNRDNKN3IwVXRjTEJXV2tPdHZNRkt2YUZiRkZjTWRaLzBGZ3BrQlFadExTRUIyWDdZUk5UVHJ4U3BCUE5zVVVLZ2FOazJRU2dHdGo2dSs5dy9kcmpBSzJNZHhKRllVNFFUMEpDWTQvT1VjdG5HVWlLVUpPeU9ZSExESmtHazJteHBEa3lsNHVobmdqNHdQSWcway9xclUwOVRWeTEwWFgwUVF4KzdEYkdlQVNSNFpvZEdrUjBlUVluV0xjM1BNVGV2VWtsU1FyVVZyRGdZR0NIbCthSnpydCt3STNqcHpHbGhlaXFRdFlVYW5YQVI3aFRTTmNkenR1ZDRZNi90Tm5SS0dxRmU1aUdkNUcyMTBaSy9Mb3Z5YWN5SnFMTklMUXVZQ0xsbVlzK3hmMUxvemVMNnZTTzRhclRBNUV5ckVDRjlVVXdpQlNlZDVjOE1Za3p3aFJ2RzBPUzZwZVZWMUZqbU5DdnJXajNZS294dkJCTUI1VE9WN1hEelAvbmh2L0o3Y2QxZ0t3ZUhuWDJIMnhTeDVpY21YQ3RzallzZmhHMEIxUmo4dDhuRmJQcSt0QkNFMzFtaDAzWkovazl1b2dYVkhYazJlS2JKUEZ3S0VLZjdES2JJSWJ1eTZpbnBiSjZ3djRIMG9CU3VVVVZCYXBRVUs4VzJ3ajcwRllhd2RQWUMxdGVXVWFQMWtyMURESWNtbisxMjhoR3FxNnQ0Y25JU3o1eCtDY1ZYVGlPUjM2RnhMeDdWa25EU3FETmlocFlKRDdLOE1aZnhkcWdqVnNmVk5JemJNWVRYNURpcmJUV1ROd2tna3N5RmVQQ0RwQVNOOEUyQzBOSUdLOUU2OWd6dndNNmRPOEMyRjNQZXk0aDJNOWZ0R29UZFMxckZLaUthN2tadllSOFdMMDRUTW9pOEd5c2tBeFY0WWJRZForSXBMVHgzNmpTKy9YZi9oQjMwaU9IdU9JbEFxSVErQ0R2NURXMnJkUXdYQ213VVNLenRuSW5nc0kxOG9YR0owTmZQZ1h6VzRBMFV4WVNXR1FFdEU4TnRtNit6K0d3U3dzTUlOYzMxbW5PTEtLOXRvREs5Z2o0Q1NKejlreGpyT2UvMGVicGxGSkhCSGl5RkZjek9yREJlQXdXa2tOYndtUkxjb0VQVGJJMzlKNTc4RmR0L1Nld2F5Q0JPaHRNZ1dSZVh0SUpPOW01WExXMzVMRFVLRHJsRXlJS0NSUnZhUmFnT0RDc0t0ZE9ERklxbXROcEd5bWcwcXFBVFlYVWdsb2FraUhRQ3cyelZIYnp4ZzloSDhoeXNMR0xmWVlKWEkwQXNrMkUrWTczSHBEMjl0SVIvL0p2am1EdC9DWWRHc2poRXQwNzM5aWxZaVZKRFRVMVNTL3I0MWNsbldFbzVKaFZST0ZkNk5sSlB0a204R3EyZHNqUkhDK2tJZzV5NGFxNWpWZVdObWhLb1NmSkNXY3lqSUM1TG5BWTFLdmM0WEZoU2hOd3JsYmpjR3lQWEV6OUlSTWdSQ1RCcks2dElaM0p3NHhsRUdIc3VQemVKY3BXYVdNWEcyYWVmUWZuUkovR0ZQUi9Bbi8veEo4bEhRM1FORGlLUjZ5V3Y5TFpjVEZ6enNVY2Z4ZUxpaWlSWkpLa0FTUlVlSzM1aE5Cb3VuVFJsYllPaUdJV1hjdTVXS2ZPNjVOM1M5b0JKaklIbVAyRW5oZ002YWtFcGhUVHZoZTFjS00wZ3VtT09CaXl3bXpYemJ6OUZsY2lZcFF0bFQ4NlJ4YlB1RXdMTk9OeWYzSVh3WXdmZ0RTWngvc0xUcUpjdklUc3dTR0pDdHc2YUtweTRsaERyZno3K1BmMi9BRWlEOVZ4Y2FqNEs1eWlnQllhZGhHSEhJN0dkMHRnNTJQYlZVTXNLc1lUbU9YRkJXYUJodUtFQ1N0dEZtMXRXZERTbzJWdlU2cHlSZ29ZNEUxbEpoc1EzUnBUTU1kYXM4M05Jc0FFVTJ6Mks2SjRodWk0YlExMGVOMWZCZ0h0QVUwVzZ2NC9DTUpGVFFFMVhWTmpEUDMwSU0zUEx1cmJBb2Z5TVJvMWxkWi9iWWJZbGtMbldiaWh4SzBMTGMzcVRJR1FudjRXZG5HZmFRaVo1R3hZbktTS1FFbElBUjY0NHBoS1h0R0d6b3ZZWWQrbnVITHBZazZWNXhrZEhFRDI0RzNIV2VVNG1peUJxSy91dytYaVhTaGk1OWdhV2Jpa2xobTRrUWJsYW1MbDBHZmY5L1hlVVAxb3NmdVV4Y3E5UGwwdncvNWJ0Sy93TGFob0RXWVpoS1c2b041WWttWlQ0S1dlRU1FR3BLYUR0dzF0cGdKK1RSTGtLV2J4bE9lcmp2c2Fuci83ZktZZGFoT2xhaEpRcHo5N0tTQSs4M2k0NE8zdGc5YkZ3alhGWjF6U2NndEQwWmx4eVVTK2VVdmZtcXNwQ21td3kzWFAwbTBvTVJHbWk2WHF0cFhnZ3l2ZVlKeVh1dFVvUEFtejM1VXdLa3lEazJrWEdZemdWdGhFbDlBMm5WTGczaEZ6QkpNWkFsdVF0M1dUeGMybjFDV2RzZTRzV3FuSS9leG50OU1IRXpyUHBremo3TmJJWS9telZ1RDVkM0c5b0hDdFZrdlhqYVRnazBwYVFaamFhRURUdzY5K2N4QXdyQzl1V2hxR3RRc245bGlQMExxRWtRQjZzWlpKdGR4SmRKeXUwalFKYUxnZ3ZHSmZjTnFsb1MrcFVFVXdXRkJmS3NBZXBNNEdXcnkwMngzRzNMQ2JYb3F6QUhZTS9uUGFrMllKemtNcXd0ZGZWZzNSK0JISG1PcGZGYUJpMktZUGt4SGErREFnaXltVVp5M1l5ZzVQUC9oWUNaOUtqRkYveXVMWXZTcE9lanNSM0cvNmJSUFJPTWJ0VmgyN0gzbk11OXpMVm9TNkdXRnNhQzc1ZEo1aTBGR3JqdEZ3aTdxRzhYbU1QeDJzRGl3bHcwL1lMTkY0RjBhU21hM0dUNmg3OEc4LzBJa2FJbDdRZ25XaHhKVk9NMm1xTmtCWUZUeW1BSFRJV2dmRXk2N3NtUVNrUlp3ZE1sQ2l4eUxhRDhGZzM1ZEVqaklLQ0RwQUU0UlluRHR1WVFjNHh5ZXpUUElHTzBVTERVbnk2bmU4YlVocGp6eUlhTmRYNFpxV2liVDFKbkEwKzNOSGtibTkxTVFSMEpPRFhxblVDUkVSR3FHMXJDaEVPRkFHRjZkdGFWbEhyTFZibjlVM3RiamtwZHNwbzJTWXI3VHI3TWhBbDJBSUpSaGtPZVdtREZDL0NZVXFWUkYyOEJxRWhHbHNGZHZzVU4vWkRlOHFlbXBvcVVmZVRXOVFzTkxsT051UXBXd2c0blVtaXhCYjRkaFl4MWJtNHJRaW5sYnJoTkdpRjBub0lzTGk2enU1ekJiWGFPdXFWa3ZZL1pYTFRxcTNCcjViWlhpaWh3UTVZUUFTMFl6bGpVZjV1ZFdNTkZ5NU1xd3U2YktmSDBoeC9zWnFROWFNY2x6WElkSnJhVGZPVjMxcUI4UnEwU3pXNWtaNDROZlhVSTBYWE1JSGdjZEtkY1lPS29iYk9KRkFGa2lQc0hOZXFkZTFYZERwaEFpNGlXTFZ0U2R1eXRtb0s2WG90a1dldXNoVXdkMmxHS1pwVTN0TEViVGtsazJYRTlkbkRqR2Q3YWFDb0trVmlNV1ExY082VkZ6QXp2WWdXZlVxR2tJclczS1ZIRnhaWE5YS0UydUN0NjR6ZDNvNjFOanZodncvSWJsUTQxdzJPdFFMN0hvVmN1a1RZS1U1dFUzSUlpWlZmY3VrZVRaYjMwbVhXdWt0WUNWMnZValAxbnJtSDdzc3VXTG5sNHZ4Q0dSdCtFY3Y4M3FQMXhZcWJwUTNzT2JnZkl3ZHVVQ1RVa0ZCeWJ0UENaZnpQNUMrMDNHcFEwS3YzN1VheGVGbHpXZFFMTllITHBFZEN4bEZtdFIxNW5lUnRCQTEwZHFCRjJ0emNYSzJ2cjMvY2I5UUxnZFpTVUtoUEp1SktnVkljUXkyUkx3cDVscndtVm5CZFQ1dXdPVmJlRFFvanVUSENKOGRrZGtEclNUbkV1U2htMXFwNDhlSWNGbGlUQ2ZMMjlYWHJXQ3VSN3VKZ0pLN1dsaEd5dE5rdm5UMkZCeC84ZHc0dUc5b3p2ZmV2L3hJZnZHNHZXL1RjUjIwRFdZK2hZa3RjdTVndk5WVUpKdmEydVRFTjh4OVRUMC9ldnlXY0hKbEU2Z0tmL1NWUFJrU2tRV0lkdTYyU3pjMjZhYTFRWXpMTmFYQXVKd0lJdVU1RUhVWEpPcitMODVxUTJpeHpVWU11STVQVUt0M3o3TXd5K3g0emVPSHNIRGZGT0NUcWJaQU1DUEkyV2czZDFNclNaZnpMZ3ovQWIxNllnZTlFY2UxMUJ6SHhtVTlxWHR2Wm44UEJmYnVvclZYSmV0b3JYYTc0cU5RYkpoZHVFWDd0LzN4MWJxWlkzSEpMT2M0V3owNGUycjkza2wybGNZa2hjYitRNkNjeFUyVXZYOGR2VE9JQ0VvRldCWUZxWEZwN2lhZ3cvcnJHWHB1MnNqS1BjZU5zMklhbVNxZGpZcFdOb0pPL1BZZVRwODZyYXlVNXZ1cmhVRVNJdXN5L216UzNid256OS9HSjIyN1I4a3BDSVVvS0oxNHlPRHhNa0x1RWJyWW9idjNFS0M3TkxuSVFzb2JwMlJJdXphM2dwWE9YSmw4OGMycXlJOVByMnVuSm1IZDN2Vlo5RnUyYVRVbXlWTHdhWDA2YmQ5STFXTDlKZmRYaVBOeG56cEd5U0ZCVHZuT2xOU0hEeURqSk1XRmNXbjA5dVFqVzU5ZVVOb1VLQUpacVdocExkV0VpanFrblhlWTBoK2ljemlieDRlc1Bxa0NLeWpwcjkzVFd0eGhjNGw2YU9uSGQyWnZDUUpaVzNwbm1HZ1hXaTUvOThwRTd2cm9seitzR0lVOU12VERsZXBIN2toelFpd1VFbmNSTnhSNGMxMnA4U0V0QmtGVG1Bb3FBYmIrWGVHc1B1ZFNWWTY0eVJUUFc0c0FpNGRvNm9oS2hCR2s3Yll0T0phTERHdjRSR3Z4N1IyNUJPdTZpdHI2Q3hpWmJmeHNiVENGTUxXdUwrcUpPZy9NN2VUc2lQMUJBdm44bnowR3lvY3czS0ZqeHRmSzhZWVRsTm9Pam0zNzFEeGpRQlFFVU16STJKWSs4M21TMU9aeFkwNlhBZFdyZkR5S2tXekdkSGNoOXBqdG1yT2h3ME4rVlNuTWdHV0Y3eFRlSlhtcEY2VjViSmo5YVZpZVJXT2dqMGY3TXAyNWhwM29kcGFWcDVyMlNrdW9tQWFXOE5LOVVNRTdrN2QyeEN4N2JGaHVsSmRRZHIzampIMzc5NlArWDVRMlQxYWxpc1VUdk9rSnNMeW01MVFxQmNGK3RheFVnQldXemFab3p3aS9sTlNnQmlHamJLcElhSkMySVZidUlwSzRNRTJtMVFXNWFlcHFlclZSWXJlK1JMR3ZkYUJsWGpSS2MvdW92dnNiS0h0aWdsY29MTXloeFByNnhPRWUwckhKR0hrTnZiNDlXSmRFa0owbHhUbTdUUFNVN216bUNOem5lZExLNlZDcVYrbkw1TTBUQnp5dWlOVnRiMzRubFBNZVVITEpwYVRzSW81Rlp0Yko4Y1VjQkd4aXVLYkhhYUFYYWdhd3lGbHRzRVVyTFFzaTJjR2hIRzd5bStab2hHM25paWFmd2swY2V4OEg5K3pDNmJ6OFM3THZFaUxxcGZEZGRjazNIWXZKcTFkVWZ1dFdNeFJ6Y3NmL1FiVSs5bVJ4dithckdpOFhpaVhnc2NqZVVzVFRielJpRGtsdHZOV2lPYWc5TDZHSUpVWGtZYXY0UnBVaVR4K1gxN2x3YWErdWJHTnJSenpVNCtnM3Q5b1RXOUVHa2RTRnV2cnk4akZjdnpHSnVjUlcvZnVFOE12MjcwRDF5RFlsM056SjlvenJEVzVtakc3SmxiL3JtOXQwamV6NTQ0cTFrZU52M1VKNmNPbjJNcWVGdWViZ2thZzM2TmdNWEVLaTNoWlptYkxYZVVoZVVabTJEQU9OYnJ0WjRTUTRtQlFGN09KRDAyUVBwNzhreGtXZGgrcnF1c284YTg2WVNkZTQzazh1Z00veDBCQ0h6L1hUQlBHT3VpbFJ1a01WeURXdkw2eEtMZHc4TTdULzJkdnQveDVkc2Zudm0xV09OV3ZWMk5vRksrc0JPWVFoak1kbFVwenNtZ3EydHJ5T1ZUbXZ5ZG0zWFRJb3RTZkEyb21RMXYvK0pqMk1vRzhHSGI3eU9pTXJpbDByclVEa3BlK0xNanovOHdYRjgvV3RmMFhkUVpFNmVwd1UzbG1iUVBiU1BqNGlVVmhaWGJ0OTF6YzNIM21udlYvUjYxTG5aaFJOQks3aWVPYWNvK2MxQXVaUkdvWGJKSkdSTUw5TTNKUk92TFhHTTFXaFpyTTBxU3RzODIvVC9oWHRtMldMZnU3dUFXMjRhVTJRVlFESHRWVXVyai85ODZHR05YZWxOU3Fsa2UvTHVXRlphNU1YclBucmI5ZDg2OGVTSks5bjNGYi9ZVnB5Yks3NDZQVHRLeC95R0tWQk5ncGRpVXZLYlZBY2laVGFUd0JJSEd4NHJnUTJpcURTTzE5WXEyTDFyZ0lDd2pvZC9Ob25mdkh3UkY2ZG5kY1p0YzNBZklRc1NyaXB2R1Bsc1EwU2x5YXRLODAwWnd5TzNjOTk5My92ZS9kZC81STY3aTFlNlp3ZnY4cGhmTFUvMmRtY2U0QlJvalBGWGlFU2tOR0t5bDRxWlB0akhGc1B5UnIxZGxUZVJ5NlRVZXVsc1RDdnErZFVLK3l1dXRzNDlGcUEzWFhjTlhqNTdqb29LdGJuN2hjL2Zqai81bzg5S1EwMDlnZkU5U1NlNWZlaWFtNzQ3K2RUcjN6TjVwK09LTGZmYVkrcWxZdkhVdVV0SG1NMk8xT3V0RS9KQ2pMaGkwemVRTDBmUUhnYVdpSkp4dGd1V1Ztb1lZRVdRcDVCU1ZpMHNMT0tYVDU5RXJyc2JOOTkwZzFxL1N1YngwaXZuOExOSEg1TjN5Q1laajBkMjdMN3VTTi9vdFZQNEhRNEw3OFB4cWNOamhWcWxPcEhQZVY4YzZrMlBuWjlid3lxdHRXZG52OUtvM255Q3lCcVNXY1Roc0xyK3J5Zk9ZV1hUSk9Va2MrVzBvRjlkaUZjd0diYkN4MjNXbDBXU0Niekg0MzBSN3JYSDhhTmZLbnovSjVOajYwMTdmRmQvOWxEUzgzSlhqdzRVSEMrZWs4NWtPaC9ETTg5ZkxwMmZYeXRaampOMTVPWVBYL2p1RHg2YWF2ckpFOFhpMUhzVzZMWEgvd0VjL0RDRXFsTmZYd0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRGNBQUFBM0NBWUFBQUNvMjlKR0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUJrZ1NVUkJWSGdCclZwcGJGem5kVDN2elpzMys4WnR1R3VvaFNKbDJaSWMyN0ZiT0tiYkpFMENOSldCQWszK05EQ0tCaTNRMXZidkFyVU45TCtWNWtjS3RJVVRCSWFScHFtWnBUR0N4Qkc5UkxKalc2UWtXN0pFYzEvRUlZZXo3L09XbnU5N2I0YVVJOGV5NHljTmh2Tm0zcHZ2ZnZmZWM4NjlkeFI4eXNmc0M4L0cxN2JtVDRjQ2lSTnpNNitrTEt0K01wWUl4clBwU3R5Q0IxYkRRTGpMbjljRG51Vkt2cEVmR1Q4d3AvandjalE2T1BmbHYzOXFHWi9pb2VCVE9HWm5YNGlIcmE3SE51WXZUc0Z1VGQxWXVvcjBlaDd2WGxyRFFDeUFvY05KckMxdW9sQ3pFVkJWak44MWpIcXRnZldWWFp5OGZ4SmV2dytKdm41RWswTnpYczMvdldyUm1IN2drYTh2NHc4OC9pRGpsaTYvT2FWNDhHU3BrSnZLcks4Z2ZmMGlMTE9HVERxTE4yWTNrQ20yTUJEWGNYaTBHNDF5RTZzN0pWVG91VCs2N3lBdVg5dEVYMjhFeHlhSDBkM2ZCOVdqOEtIUnEzM1FOUi84OGU3cDN1SEQzeG9ZdTNNR24vRFE4QW1PcGRuZm5JVFgrd3kzWnNxMmJOaVdRWWRWVWRqZFJYa25BMXUxVVdzYUtEWXR4QmlLcTZ1N0NPbytORlVOTmRQRTRrb09henRWakExMW9WRnZ5bnRtdDdaUUxsWXdObUVEMFFTQzBlaHBHK3JwcmVYck03WnRQam93TnJtTWozbW9IK2ZEczdPejhhVjMzbmpHMXJSWnZtUUkyakRORm1yVklqWVhydERJS2xvdEM1cW00Yk4zalNEb296RlZBK2x5Qy9sYUM5dWxPdnc4dDdKZFFpd1VRSjZlTE9XcVdGOWF3K0xWTlZTeWRSUXl1MmcyNm1qeDBheVdBZHVjVWxWdGFXZHQ2VWw4ek9PMmpiczZlejRWOHpSbTZhakhiUnJGL3pCYUxleHNyR0Q1N1hQSWIyNmlVbWloWlNqWVRGZlJsWWhnT0VGdkdTWnFMUnNWZXJMZU5HRWFOc3IxRmhUZXFNb1FMV2J6V0p2ZlJucXJ6STFwb0Zrck1iUk4zcnRKdzdkaDJhWk1IdHUybnRwZVhWaGlQcWR1ZDgyM1pkejdzK2RPNng2Rmh0a3BhUlVQMjdKUUsrVncvVGUveHZ6cmw1QmVMV0poSVl0Y29Va2pHOWhKWnhDa0IwWFllbFVGaHNrUTlYbmhzVVV1S0RTdXhZQUZTaVVENVd3RklRK1J0TkpBT0JpRTBTeHpFMHpVcXlVK04yVjBRTEdoS0VoNU5POXNlblhwOU8ycyt5T05XN2g0N2pGYndRdjBWdHp4bVB2Z3YwSXVBOE5xUVBHcXFEZWFNQXlMSUZMbm9oWGticFFRNG9JaXpPb1FyVWp3TThOK0ZiMUJEVU1oTHc0a1F1amgzNzBSSDdwQ1BCL3hZR0F3QnFOZWcxbXJvYlN6aWZMdU5xcUZIQ1BUNkh3dkxZeXJIcnl3dGI3MCtFZXQvZmNDeXNMc3VjZE15ejdEZlpiR09FWTVoMm0wRUF6SGtCdzdndXhHRm1hbUJpL1A2NXFLc0ZlbkI4c0llRFVjamZubDUwTitIUm9OMUFuN092TXUxQlZFS095SG43a25EUElHTktoY2RhTmxvRkVxb3JoYkJIdzdDQ1dTOEFXanZOWkh3enp5WHNKR2V1V1pyZlVGOUE4Zk92T3hqYnYyMWl1bkRkdVNGMHFUWEtzVWVYTmJMaVFRamlLYzZFZXgzSlNmMHZqZElWMmxrVGFTWEhRaTdFTzBLNFJJVHhRZW53NlBKb3lLUXdzRW9RWEQ4QWREQ0lRaTBCaXVYbDJIeGJnclo3ZHhhZVpYeU5DNDd1RSs1TGRYRWU4ZmdaLzNWRnpERkJtaUtpTkVmWVlodXB3Y0hadStiZU5tejU5TjBiQm5WY3N4U2lIeDJ2dHU3cG9JbFl0dHRreVVDbFVhcEtKSklJajR1TU1FRHVHVjNzRW9nZ2w2cUN0QjNvclRnQ0QwUUVRYUlXNFI3MHJDRzQ3QXd6eFRTUlZnYnZyaVhSamVXQ1hwdjRiRjRxcDhQY3I4Smd2Q1ZseGlsaEhFYzRyZ1JqeDdZMmxwYm1Cc2JQbURkdHd5NTd5S2ZaYUF3Unl6cEZHV1pVb0FzZmdRQUNGZWk0ZEprUEI0L2ZEU1pRVkNmaXlndzI0MkNSb213alJPVUlMRzBQUjQ2RFZxTEQwUTVVWjVvSEd6d2xFeUlFTllrTGRIdU54Wk5UK3JvZS9BR0lZUGRLRzdKNDcrQTBlNVVWSHBxZmEyT21IazVpQ1V1TWVubk0wdExjVS8wblB2dm5uMlNjdTBpSW9XRnkrMlNuVmpnUTlobk53NGkram54R2tvSEdhZTJLZ1Q0bjFjdE1XY0NZYURDQVQ5aEhOdUFrbGFMRWhodnBpa0FBK05VeGk2bGlrNDBvUW1Ob3VicElLZ0lkYlA3d3ZHZXpBNFFhT1llNG4rUVhoOS9vNldjaUpJY1NKSVJJQXQzMG9aUGxYdzRCTWY2cm1yNTE5TThSdWZFb3VYWHJJRjM1QjdtblZxd1NxcVJMRnF0WUo2bldUZHFFbWlwZjhvS0pnN21uTXpIM1BMUjlDZzIrQU5oVkhLTjlDcW05Smozb0RndlFaVUFvNnFpQVV5ckJRQ2lZZ0tjaVpKVFc2Q0ZvcWlhK1NnazV1Nlh3S0ozZkdiQ3NjdXg3QU94Tm4yNDl2clN5Yy8xRGhiOFQwcm4vbGxwbUdnV2FkaDlUcDVoMGFRVkMxRExNQ1F6NDdzc3VRWFJudTdhWXVLZUNUTUVQUGkvYlVNTGw5ZHh3cGxsNm5xcUZCV21ReFhWZFA1ZVF2MWlzTmpYaTVjOGFneUltUkN3YzF0aHFaS2dFbU9ISVkva25BTWNVMlRFZVFtdndNc1N1ZDlWVldldVdWWVhqNy95eW5UTXFaa1BqRmNMQnBuaXB3VEQ1NXpOZ2N5a2NWQ3hJM2xydkc1ZjJRVUcxZFdDT3QrZ2tzRlhYR0NCait6dEw2RFhMYUkzbGdRWnFQRjhOSlJ6ZTVLZzZ4bUF3SG1uV242b1BEMndoaVZxeGJSTHI1SDB3T0lSSHA1ejcxVWNyeWt5SCswWk8rOEU2UGl1cWtiYTB0VEF5TmpNemNaUjk1NlRNUytORXg0eC9XS1pSdlNRTEU3ZkdKNE9WOWhVMkhZcnNVS0ZVUTBva3RQUmtNaFhxdFFjalZ3b0NlQkJvMnFGS2xZVnRQb0d1cm4vVnRvVUhLbDMzOGY1ZndPYkNLb1B4WkJ1S2Nia2U1K0JHTGQ4cDRXSXlNZVR6cmZLNmhIY3ExN0tHMkQzSmVLZzk3aVdkTThJdmYyakp0OThZVlVxOWs4TFR6a0VMWHBYdXh4bnUwMkVhalNpNDczVkdjditYYmhyZmNRRlp0SjBCTXlLNU9yWU1kU3NVRnlqb2h3NVRtYkx0bFpYTVhnOGNQa05US1UxNHV0Njh2SVUxOE9UeDVDcEt0SEtodWpWV05vNjNMUlBsK0lRYUk0dU9FUVhKdUx1TWtLMnFmMlBDczNlMG9nWjJKc0xDOTlhMmlXTk15VUQwT2ltS05JclBiV09Na3JnRVk4VzRwTERiWUVnVnFtQkw5T2JVajVaVkFMTXZZUkN3ZXdXcTJpNThBb1NneWhYTFZKSURJUkd6aUFnV04zRTEwWnRodFYvT3JxTHM1ZEwrRDlpKzloZS9FOUdmS3F4MHZrMVdFV3Nuc2gxeWs5YmRlYis5eTQvK0I3VGIvNmVNZHovUGczUk13cERtakxENGliU3RGbHdZMW4rNllZbDE4Z1BzdU4wRm1uZVhYU09POFc3UXB6ZldVa3lGOWZIZTFCdDFGSE9lYVRxS3ZyQWtGRENCUGUreWZ2d1BhTlBQcUprcU1EUGJqendUOGlxaFo0WHljRlBIV0NXaU1IcmJ2WEJROW5iZEpqY0JUS0IwT3ovWW9SOEpBMDd2eUx6NmY0b1pNTzlMZjN4bFgrcEFKeGtVZy81OW5xN0o3dGhxcWd3a0JmRExZbTBGQWxMWVNoQjNYcXd6cENRVW9ramRVQVVkU282Z2d3TDNtRlZDUTlCdy9qVUhvSG80ZUhrUncvakdDRXBKNU1pcFhKKytvUktoY3QrQUhQcUc0MDdTRWxZTzl0dnRLaGVCbWFtcTE2VDBwRWJKY3lyaXB4WGlnZFR6a211NmhwS1RlUlNDRFp5em9zVFhYQkx4Y1NqSDJUT0dXWENIR3ZMNGdXMVV1cGtZWENtczRyT0l1YkZLRHNPblRmZmFpUXFIMEJQMVRxUytFVktJNEJWcXNPdFg5WTN0K1MzMDgxNDJyS05zaDBRdFFOeC8xQjJ2SjZUZ3VFbU9xZ29iekEycGVrQ3RwcEo3M1dManVraGFxcnpoVUVod2VrSEJPWHRlcEVWK2FlaHlFWUZIcVM0cmpJbkt4U1hBdXBKYitIbkdleXloYlBFWWFkVDhncmQvZWRqYlVrMTBFOGJDZHE5cEIvM3hwY3d5VFhBVGZ4SVZkM2twY29Kd1Q2aVJDVUtBaG4wWHZoM1BZb3BLS1F3S0pBVnNpMld5eUVSdnJZR2pDSWxLNEc1UnNlYjREaDJZVnF6c0QyMmk2Umo4b2pUUFFUQytibnNsZmZRWDV0RlUxNlRxTzhFcXBGTGt4Z0ZBbGVaemRNNXJTeVZ4eTNOU1gyR1hUVFl0dC9pMDFTbFJSWnk0dzc1eFdwdkIydHBrb0wydlZidTVaenhLdEhia0M3dGhKQmJQRjhvZHJnSlR5bmlqcGJrNmhhcHpKNWYvWXFJc0VBZkFRU1h5Ukt5VWFWUTZITVBnd0s2NHVvc0tra1pKeVRNMnFIZXJnekhURjk4NkYwdkl4OTNtb2I1ZUNPcEk4VFlpVXA0YkIyYW9xemxvdE9FdXJkQ3gzREZEZEViVkdkT0dISjhCUnFRaU5vdEloODR1WWlKSDFVT0pubFRjb3VBeXRzQXZueUpScHZNZ1FEU00vUGkvWXMreTBxaXV5OWhIdjdXUHFFWlVVdkZ0R2diZzJLOHIydFAxWGxKdU1zMXdpN2c2TDczKzNZRVZjVldkb0lSMW5TRDdKT2crcGVpRDJ1YzVXNFBHODdwWTlVRW5EeXF5ODFSaEN3S2JMWkpHTExvYlNkWi9PSFlDRU05YkpPMHhXMHFFNjBVSkFselJCNlJvYW8vSStoVnN6SlhvelZiTG4zWk40eUYrMTlpLzZnbDlyNTEzR2ErMEpjWTlxZGkrS3EzZWEyVHZqdHB3SW5CeDBDTi9jUnFzeFNXY1JDY2RCTXA1SVhYbXBVNjVMTWI5ellwUVJyd1ZCWjFvUTBEQjhkSWJob3lDeGVSemE5aUliTjNrdlFpemlOeks0djhacUdsSDRtYzh0UDJkWE90WnNVaUgyTEVIV0ZzKzFhc1ovdlhHMXB1VkxHQ1QySDg2eU9reDFHVURxMW5NZ054UTFQU3lJdCtZd2VhYllzV2MvbHR3dll6UmNSWWF1aFFGVkNHWW9iVnpjd1FzcG9LRTJVclJvYXRTM21hb1g4Rm1FNFYwZ2hEVzZPQTJsNmJOaVZmTmdYa20xRDBDSHhqdHNrN2pnOHAzYk1GS210ZVBLbWJjcXFXNnA5ZVJQVnJjRGREOXI3bnQwaXNVM2lsaVFEVWZiMFlwM0tudnBMZml3V1lVdUI1WStQSHU5TzlraU9zeXNjZ3ZRRTBUOCtEalhzd2NxbE41bTdmSC8wa0l3MXJvVWJ4T3BCY2U2SmZUSnJqNnFVVHZTNE5uY01kK205VGU1NWhpWHlVTnFYdEwxanU3MFQ5elhVempuSFNBZFpiZmR2c1M4ZUVyR1M2R1Yxb2FEQkhrcTV5azQwaHgycWFxSGhLY1BvVnJDdGxkRVlDS0NsdDBqNlJReE5IcVdLOXpFY3FXZFpBdFVyZVRhU2dpNS91V3hsSy90aVUrMFl1cC9YWU85aHFuU0tMTGJ0WlpXMTFaeHpzU3B6UitSVzU5UDd0VnZiZkJFT05NYTAycnJUdVprNGx6aVV3bnErak4xS0hXbktyeDArZzRKYTR6VzEzVHpMSWVyUFJoRVcyKzhpREdzVXhoNlBreFoxbnR0TnI3T0JFM1lyRGlmQUlKdFRxcnNVVzRLR1hKcnlRZTg1cG5mV3FhcDUwY0pZVWRxdUU5Z25qTFBWRHFhS3RuZWJIcVFOOG4zWHEyM1ZRcG0xbGNsaWRYTVhDeFM4Y2NxMEZzc2MxdTRJc2pQV1lFZ21ZanBDVWZLZnlYWkZicDNGcWJES2tHamJLRnFjRzJ3aWZ2aGVFbnF3RFdkT0RTZHFPWW1FNGxudGNHOWJ1TytuQWx0Ujl1RFJzaTVxL01DY29qaGY1RlFDNkZTODdabUFJdzcyR3JLMks2S0ZzYWJaeExYcmEvamhUMTlpcURYUUw1U0ltNWNWb1VRb3g2b0NhSGgvaGZLTENRVkRxYlBmR2VVOUJJZ3d4d2o5Ti9JS0xtMHY0ZUdlQ1hSM1JUcWwyLzVhcnMyL2FLc1RvR1BvWHBTNVJ0dldqQnIwcXRQdFJtdEgyY24ybmVYaWgrSld4cUphdDJTbnluUmxsa0h3eU9aS2VPNUh2MEN4V0VXUkRhUUI4dG5SL2pnQ05NVGdmVFlxTFdRcHphcVdCMW5PQWtvMHB0WWdWYXhzb1pEbE5ReGZXNCtnRVV4aWRtNE9aOCsrSmdXMzdmWW0yNTVTbFQzS2FxLzNKbldDUFVLVEdyZHB6cW1uSG40a1Q2U2NjUlIvdXgvdjNMVFRuN1QyT0U3d2tFMEREWWJhNnZJcWZ2eXpHVTVybXB5L2VUQkNVSWtTUUR5S2dZbUJCQTZ3ZDVLZ0owV0lwdk1WYk94V2NPMzlMSllXYzlqTlZObDhNdEdUbXNENC9WOUFIN2t3UUhpTG9rb2c0cXlBaGE3Y1lMSFl0bmh3MmJ0RDJzQStUSEFkNU9DR2JOSTZ4YXJaZXBsUFUrMHd0TjB1aldRSGx5SWNUOXJTTUdGZ29WREVOcVhUbmFNaERoTlZKTm1yMURpVmFWb2FEYmZKWHg0YzVuQ3hRbERKbE1waUp6bnQ4YkN3bGMwTERCMDZpRU4zMzQzZXNYRzV5UFRTQ3BaV3QzRjk1elhZYk43MkRJMGlrOW5CK09FVURvNE44eHBSNkZsN25uSkRVZG1yNFJ3akhjcjRudmhiR3Rkc05zK3dKZmVrTUVvaWthVzRuak5rZldaSVR6V2xHTTRTRFlYUS9iK1gzbUF2czRVVVBkUk5YVGpFOWw1cnF5b2ozcEFiWTh0MlgwOHlpdVJ3SEFyL0RrUWppUFd4a3p3OHd2bEJMenZRUWVtWndtNGE2YzBzS3VVeVBXYmc1ejgvaC9HSkRURmR4VnR2WDhGZi9lVVhjREJGaGNQS29lMDlLZTQvS0tyZC9OUVVhM292VEhtODhwUHZuMlV2Y1Vya20rZ3BpdkxsMnZ3eVE2N09mbVNBTFhJYnovL2taV1JMYkxLeWs1enNqa2tVTE5IQTBiNDRQak0yZ09ieWd1QUk5ajlJQzlFZ3dpeGFvNzB4VG1sOHJBb0NDUGIwMGFOUnR1dENiTE43NWJQSWtQWDVxL2oxLzc2TU56bE9uaWZhZWpRL0hucDRDcHVyODBnZFRIRW9Vc2JKdThaeC96MUhlWHVkMDlvNitycFlZWENOM1QxZFNIUWwwRTVKQnRXUGswTUhUbmM4SjQ1R28vNjAzVEttRENhOE1HNkQyakNYTFZIRmgzQjlKWU5YejgyaVlkZ1NzVkpEdmJqajhBRjA5U2Z4Mmh0WDBCZjNvM3NreWF5dG8zRmpFMDZUUjRHZkhlWTQxWWxYdGd6RUpDY2dPMXVhVUM3K2dJeXlmRFl0ODFjaGtjZllxZmFReklYV01JcTcrT3g5OStLNTUzK0k0OGZ2d050dlhjQ1IwUVFXVnJMWUpCanB6U3JIWjBPWVg5dVc4L2QvK2VkL1FvUlRKYVpQWjZUbGFmL3gvUi8rZFBrengrNmFtcjI4a0pwZjJzSlB6djRXbCtkWEJYWWluOHVqd0VwYUVaTlNFYnBjL0lXcjg3aHc2U29HQjRmNUdNU2R4NCt3UXp6STFkNUFOQ3JxTjAwMmpJSlJOb1I2T1dQemM1TERHWnVYN1FReElCR1ZoSnljTmhvY01tYVFYdGpFZTV5Slo5bk4xdG1KRnNQVWdWR0tnczExNWw2R09Xdmg5ZGN2NE1xVmE5amVUbU9MemQydi9zVVg1U2hhMFBlcjU2NWg2bk9uWnVpMXAzL0hPSEZzWlJvWDMxbGUvN3VselIwMlJMdlF5MlpQcGRiRTFjVTFMdFNIbmxnUGZDVFNUTGxBR25DR0dsOSs2RDdvMFRpTzMzbEk1b2hYWlUxWEwvSnZQL3NrQkJubVNUdzV3QWdJVTJ4b1V1MEw0eXkyNTVzVjNrZVVTSlVLZHRkdm9Nb2g0MnFtSUNlcDlXYU5zL1VzUHYrbHIrRGc0WU9ZdjM1TmxNRDQ0d2Z1d2Z6OEl0Y1N4OUdqeDFoTzZUZzBNWUZMRitZUjhnVWYvc0dQbnN2ZjJyaWR6YTM3VHoyUUdCMFl2RDgxTW9KamgvcHdmSElNbXhzWnlpUTJVYmMyR0c2MlZQdFZ6aEVFYW9weDFiRTdUK0Q0SFljSkNDV01uN3lQL1pFQ2Uvd1JHalhJeVdpZjlKYlg2NVVBSU1vaXN5RU1LMHROS2FVY1E3SEMycS9KdWNCU3VvQUFhZVZnZnhjVmpvYUJvUlRIWFJIOCtaL2VnOExtR3JaWitBWVlCUnVjdVllNyt2R0xWNjhnTlRHSllMUDY5RGVmK091YmhwQTNHU2VPb1FNVHJ6ZnJ6YTlWR3MxNGJ5S0NFTC93NHVWckdCM3F3V2Z2UHNTNFQwSjBDbmE0R0VHc0d6c1psaFlxdnZ4blUrUW5EaUY5REVreDRHQnoxaGNJczUwWG9jZFVSMkVJRWNBd05ObUpodHV1RjIzcWVxbUtYSzZPK2JLSjNWS0YrV2ZoTXhNak1MMGhuTCt3aksxZHBnUUZRNzFZd052dnptTXJWK1RtVm5IaTJDVG1OeHZZTGFyTC8vYXR4eDc1b0MyL001K2JtWm5PcDFJbkgrN3VTYzdtQ3FWNEtMeUpiWExheEVTS0lhZFI3VGVvUkV5cCszUi9TSTZ6M256akxaVEpaMzVDZTR2aDZ1L3BKMEp4a1hJaTZ1U29iZGlTVmlRaGsycUVGSk1sRSt1L3drWWF5OXMxdk1WY0Z4VFNIU045RExEMksyaTR3SEJNcDNQNHhRWmJFMmFlcXFkRk5BNmd6dlJZV0Z0bmFzVHo3MTFjZlJpM09EeTNPcG5QYitXUFRUNTRUZmZyWDB1d2g3K3hzY1RpVTNBUU9MbkpNbndacG5UR0FHZlZzWUFYbjV0SUVpZDlTS1dHNkRWQ05SY2NvTEEyYTJWSCt3bmVNMHlIZ3cybjJKVWFVTlJ2RE0rZHhVMWN6bG00dHIwdHA3VmkzdDdQY0h4M1lSMGxEazBpQWJZSW03dlNFNks2YndtOXE0aXlSdVgzZXIvKzlxdG5YcitWSFIvNlU0MlhYdnJ1OU1SZzd4TXhsaWFpcDlKZ3J6L0w4UlQ3eFZ5ZkdCbmJHQmhNNG9GN2o4TWt0Syt1YlRDdmZFNzRNWWZVVUZSNlRaVTlGOXNaZzdsVEpDbDh4UmhMdE5xM013aU9IVUhKZHVZVEJvVkRvVmFuWVZ2SVU2K0tka1N4V1VhZUlGVVR2VkdHdUJoVHgyTmR5QlVMVC96MnBlOU1mNWdOdi9kM0tOLys3cGt6dVowYlQxaTJNeTQrMHRXSEJHZmdIazVERFliYVppYkhqaFU3eFVTc0xmS2IrRVdDbUduN2VFNE1pNzNoQkZQSzQ5UmVORkFNTUIwUjZNd0FtMFJKVDNjZllwT1Q4SFBCWHJnamF0NjdVcW5LR1ovTnFrTnFYTEVodk85SWZ3TDMzSFVFazBlT1BQSHUzTXlaMzdmK2oveVJ6Zi9NL1BRTVUrUVJaaysreUMvYnFSSU1oUGdSTzgvWVAzOWhBZGMzYThnV203S3FsdTh4N0FURTZ4d3VDaVVpTzhiMHJqVFVuY3lhZGZaTjlDaDY3N3Jid1pXZ2FNcFNRZkxhQTlGdStCWE9HempWOVhvOU9EU1dSSnhVY3VMSUdJNGZITXpyamRvanp6My9uVE1mdGZiYitublU4c0xsYVU4b2ZLcHN0SmJyb21EbFRnNlBqQ0hBVHZHL1B2VVB1TytCdTlsSkZnMFpqOXg1VTFhMUxkbFlsYk53WVpqcTlQaUZ3bW14bFY0cDFwRThjYThrZDFINENvRmd1Tk9JV0Y4UzQwTWtmcXVKc0YvSHlZbERHQi91eDVjZXZHTzVsc3VkK3EvcC81NituWFhmOWcvYjNwdWJXWjQ1KzRNeGJ2blRJcXlvR0RIUm5jREc4aGJldmJLRVNSSXAzSUdnOEpCNHRJaUl2b0VVRis3dDFJWUNXSFlwbjhZKy94VVdzVlU1S05FNC9oSjVyTGhkTlpVR1g4OFhXT3h5S3N2UXZYeHBEcXNiNlcvVlFqajE3OVBUeTdlNzVvLzFrMFJ4WEhsbjVpbFRyNDNsTmMvTUprZFFpeGRYc0hqcEhYemxpdys1YlQ4THVwaDljMUU2UGRja0lxcmh1UFNPU1cvbVZwY1JPWGdVVmZKV09CS1hiUWFoUTczVW5GMGNIZnZJazJGcVJJL2lwVEJ2aUlKMXByODNlZXFWTjMvNStLT1BQcEgvT0d2MTRCTWMrVXdtdjdJdzk3M1UrS21YRFY4Z25pMW5Kcjc1TjE5RHFaaWxYcXhLT2lqbTgxS2VCZU1KdHRxanNtRDFjSnFqVXNLTlBmQ1E3TVZFaUhqRlFvNml2WUdybDYvTDM3YjB4S1A0a3dkUElWOXF6cXl2clR4NjdkcWJUMStZTzdlRlQzQjhvbC9LdG8rZi9ldy9aL2cwYy9ic2l5a0N4ZWxhdWZxTmFxVjBVb1J0bmNpNHM3VkpUUmxoWHZrUkdSeWpBRTlqNU1BNHlaOTU1dFZRSTZnVWNqbjJYbXFVYmpXRU5YMG1Hdks4Zk05ZHcyZis5ckYvL0ZoZXV0V2g0Rk0renIvNFlzb2Y4NTRzN201UGxYTDVFd2VPVHNZWnBpbk5vOGU5L3FCRVQzbzBYNkpyUytYODNPcTE2eXZoY0hUdTI5LytqK25wbVprLzJLRDl4LzhESHRuRTlOWUtUVE1BQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRGNBQUFBM0NBWUFBQUNvMjlKR0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUJqVVNVUkJWSGdCclZvSmNGMW5kZjd1K3ZhbnA2ZkZXaXo3T1U2OHhIaUx3V2tTRmdYS05HMVNFRk9neVhSaEtXMHpNQ1ZPTzIySE1FQXlhYUNGUXBJTzAzWTZ3d1JJcHhuRzdaQTBnWWFVd1hJQ0pJNlRTQTVlNUMyU0xkbmFwU2U5L2IyNzhKMy9MWks4RUdmNU5YZWUzbkx2L2M5L3p2bk9kNzcvYW5pYng1N2Uza1F1bU9zTDJ1YjJSTElsQmZnN2dwYWRTTVJpaVVEQWdta2F5R1lYMHE3cmp1UUxUam9VRGd4R3c2SDlSaUE0K0tsNy8zMEViK1BROERhTXZ0NVVvaXZSZFpmaGwzckRnVkJ2YTFzM211Tk5QT0tJaEVLSXFzTkdNQmlBNzdtQTdxTmNjVkFzK1ppWm1VRTRFa1l3RUlUbWU0T0ZRdTU3NmJuWnh6L3lOaGo2bG96N1ROKzdlMTNIL1VvNWwrOU54cG9RaTBiUjJkYUNOVjJkYU9IL0lScGpXQm9DbkxobFdMQnRDNzd2MTg3MnhSZ2FXSUxyT2pUYWgrTlUrTDZBOGZrNW5KbWVldnhuTDcvNjhPUDlRLzE0azhQQW14Z2Z2UEhhSGJ2V2R6d1dpOGJ1TFpmS0tVUFhFYktEYUdsT1lzM3FiblIzZE1EaVo0WWhobFU5WnBtV09sZlROSDV1cVBEVXViVHlLdWN6VE5WQmkxR2lzZmxLWmROaXR2akozaHQzOXpZRi9QMm54bWJTZUlORGZ5TS9IaGdlVG96Tlp4L2NzdVBHQWMvMWVuUDVQQ3BjYmNNd0VXTG90YmEyb2luUnJMeGpXU1luYmtJM2RCNUd3NmhnSUtBK04zbU9MZ3ZBdzdadGRYNHdHSVJ0MllqUzAySER4dXJPTG5pZTEydUh3c00vK2I4ZmZRVnZjRnl4Y2NlR3gxTVJQVERnT2Y0ZVJoUTlFa0M1WEZZVEROZ0JyT3BZaFNoRFVlT1hIbzBUUTJ4K3JtczZ2V2FxaVlzQllxZ1k3ekVrbGNIOFRvYjhMOFBuUzRUR1JRUE0wMkFJcGtVUTBqeGtNdlAzbmg2ZkdqNDJQSnk2MGpsZmtYRkhUNTNyNDgwSE9LdVU1TWZNN0l6NlhGWmMwallVRHFySm1aeTQ0emlRZVlyUkVtSVc4OHoxUFBFQWlzVWlzcGtNeXN5elVyR2tGcWNrLy9Nb0ZvcktZTS9od2ZBVUVHb2lJQ1VTVGJBWjNxZFBEUEhhYnNvMnpJR2p3K2Y2cm1UZXIydmMwZUh6ZDJtNjlrTWZsWVRIRk0wWEYxRmgwbGMwRzJXUElSV0l3S04zU2s0QlRpbExlMHB3L0NMS3FLaU1kdFdFSGVUU2k4Z3NabEFTZzdMOGZqR0hjcjRBMzNIaDBOQWlRenkvUU1NTFpSVDVlNTh6MDdrZ3M5UGpDSVREYUc1dVI3bVloMmZvQ1V2M2ZqZzBQTGJuTFJsMzlQVDV1M3pYZTBpOThlVm12c3FITmF0WDgwUk5oVjJBNGViUW03TDZWUVQwWVJNODVNTGlCYm9EQXBBK284OE1FRWdFUkh4WGVhT09teEtxRXVhMkhMWUpUVTZXc0dYWm1Ka1lSNWs0czJuekZwWGY0bDI1SGdQandkY3owTHpjRnk4ZFBkVlhMcGNlTW1zNUlVWERrVnppbE1LeEtFeUJlVTRxazFsa0xiTlZuWklKUmlNeHdyNU43enIwbklZU1BTRy9DMFNpQ0ViRHFpeG9yZ2VYaTZHWDhpb243V0JZNWFHRWRLRmNBRCtHeC9NcVpRZVRrN01JdEhiRENqTkM2R1ZaTEdneUMxOFc0Y0hqdzJkSE5xNWI4L2dWR3pjd2NDemxlOW9qUG91dDVJcmtqNlM3NUpLc3RxRGljVTZrNkZZUW9KY0VLSnFUeldocGFTRUFNRnc1MFFyekpwM0pZdno4T09kaXdZbzNvMzNWS3JRUVRSTTBScXNRYU95UU1rcEtRS2xjUVo3aG51TjFweGJ5R0JrZVF6cGJSaWJ2WU91MmQzSUJJbkFxWmY3ZTVYeXNLaGxRYnRjZkljZ01ibDYzYnVTS2pQTnRleDlmRWdyVlBLOEs3ZUlJTVpFckd1UEZtOHdnaXA2Z3BWWUZFMEUxZXRrVkR6QWFSeWNtc0RpWFptR1BjUUZzbkRsMUNpZVBIRVpUTElhT1JBdldyVjJEY05SbUtOcklaYk5ZV0ZqQThPZzVuQmdmcDBGWkZITkZwQmRLYU90YWl3Ly93Y2ZKYUNvS29NUW9YOENLNFNudlpaNmFadTFqbWRxNWM5MjY5RzgwYnVESTZhL3dsRlREVURHUUsrc3hGUFNRaGNWZkhjVGFnSVpOdDkyR1h4dzZRRFl4bzF4cWFpWUx0NldNZFFvbHRNVGk2R3Bwd29rejB4aVltR1dvQnRIVEhrTmNaNzZaRlN3dXpDSVc2a0pBa1BEOEtBNmZIc1c1YkltQUVXVElhOWkxOFJwTVRLZVJ0eE9JTWFRTHBRckRVTkNZNWNOaU5Fbk8rcWd4SGo4VmdpRjE4TzdsdHF3QWxPY1pqb1R0ZTFkNHNSWTJGZjZWNlNtam5FZmMxcEZzanVIOTczczNkbDkzbmFJNW12cmphbWtPRW1FZExmRWdaaWNtRVEvRjBkMjFEcDJwVGZqQXJiK1BKT3RoMitwTzJMRUFZSldobWJ3MkYrVHEzVGNnc21renpKNzEyTEI1SjQ0UEhtWVppR0R0bHZXTUhwZnI1NnY4MUhTRk5oZjZSR3JybnNNbmhuZGMxbk1NcTBmRUdCOHJTYWNVWmFJKzJZU0xnSHhCYXp5ZEVFOFlhMk1PYVV4eXFYR2VuTWNxckxsbFJNaFF0bXpjd0x3MGNaVm1vWkROWU9MVmw5QVpFMkNKSWMzUzRKWTFJaUJVcU5xMmh1c1RNV1FLY2k1QjV0b05tS3Q0dUdwVmlzYjVhdWtrOTAyOXluYmdMeGtvNytYUUxlTkJ2cjM1SXM4ZEhEalp5eE42YSs1U0h2T1hYOERqQlhtNGdwcEVPNU5obXA5ZmdJQitlN0tWeUZabXJubEV1Z29uUWZyRStwZG9ha1k4YWlCSjc3UkZJK2hvYVdkeGpzSEpGaEFpOEpTNGpMckxLZERDY21ZT0xVenNObVFSY3RQb2JvOGp5RFJvYWtsV0Z4aFZTbWN4dCt2RzFJKzZnVEwvWDUwYzdyM1ljd2J1V3U0cFpibTI1RDlHR3h4NnpBNUdZWWZqaUliWkJRUVhZSVpENk9yc0pOb1ZGYXYzV2ZOQ3pMOEtZZHYwTFVTaXpieExIaVhtaU00RktkSXdSYUZkTWhPM3dDN0FRRUdLTm0vVjA5cE1DaGVEd1VYS1pPY1J6TE5tc2gyUzJsYW5jeEtXTHNOVVBGZ0h1K1ZETXpUSnZmNkc1eVRYZk45clVCcWZKOVc5SnhlUTRmaFNZMXdZN1YzOHY0UnNmaFpzUm9WSm9qVVJaeWh5Z3B4aFJkWkR0eGtpQVhoRXVBclpSNTRIcldBWXMzUUVKZGQwWkJsK1RzRlhyVkNVeUVzV3F0SkJEaytSYmFKdktJSUtTMFptb1VBQXlqR1VGNUFua3hIdnlkd2FOQTlMM0pRcjBUc3dNSnhvR0Vjeit2eExoS0k2cWZaYXBuR2FSOTZZU0dDZW9WUWhGNXpQTFdJK24wTlRhNUs1a3VPNVhHRjZoMUhMU1RIVVdJMEZ1Z01zd0NGNk1CeUpTK1pnZW1vR2JvV2ZzOTU1cnMrK0wxU2RwRW12UUZvZWdoYzk3N056V0NBbEs1WEs5QnBSbERWVitHalZNQWxKWGIzV1BWZzMwSXg2ZXhyRzhYcWZxSHVwN3FuNmU2ZlJaM0hDdkxWREhoVkpiY2ZrWElFd2JxT25iVFZCeEJBMFFvRmNVVUxab3hkbEVxNWJ2WllWcENjcE1jek16bUoyWmhaQlRqTE9Ea0k4RUdsT3NKWjFJRmZJcSs3Qkp4aVZ1SEFMUlljTDV5QkdzQkhtMDliV3FraENqR1JhcnEwV25LL2l5ZnI3SlkvbzcxTkc3bnQrSUVWTGRuakxMQmVqeEtCR3d2STdVOGd4L3cvUnp1Q3FIaXkwblVXMm1FT0laREV6TWNjY2dwcWdjRWREbDZKdXFuT0ZVckgzdyt6c2xQSnNsR2c1UERtRjR2U01ZaWo1VW83ZFFnRno2VFEyeVAyRWFETkNwdE01Sk5kdGdrNkRvelRPa1Vpb1pBVFRVQkttNG5xTmVVbzdKWWUvbEVvTXpZR0U5Skk3NUFkZUxjOVVybmxlbzdtVW85cUQwVEFFNFpuaUNXb2g3VDBZWlJmOXY4OC9od0J6UXhKZFl5NmxPVWwyNXlwa1pFSmkzTlQ0QkNwNUFnNXpicDdmWjhrZnMyUWh3azdPbkJ2RHozNytMSUtSRUFwc2lad0taUWNDMHl4ekxCaExZcGFTdytUa3BHcVQ1RnI1UXFHUk9rTDdwTzJxSStpS2xBcEcra3hETTN0VmpaQ2VYNzFXMjM2SlZVTTNWQzlXalZ3UE9kNG8xaExIek9RRUlxeHYyV3d6U2pTd1RBNWFxYkRZcys0Wk5DckxVQWx3RVlJTVJabHdzVmpocElGek5FVHFZWmFjczBRZVdTWlBjNm14bEpoZkw3M3lLc3NEUzBqWVFvN0lPMTNPNFpwb0FpWnpUYkluR0l1b3VYRjVGYzBUelVVTWs3Q1VzSzJuRStxejliMGRaamdjMmk0ckxhc2lQNW9nSnh3ZEhVV0JLM1RpeEFsczI3WU5rVWlFWWFieHhpRTg4TFg3MGRYVmhYdnV1WWVGT1kxNFU0TG5rdUV6N1JaekJSWmdobEJlYUgwWkhhdVNoSGdOaXd6WEUwT25FV1lZdGxGbldkdlJnampwV1lhQTVITlJReHQ0MytscEhIejFLTmIwdENBU2pLTUFHM0dXQnA5bzJkemV5bkNPWVdwcVNubHJnYWhaVHg5cHRUcW8yVndFaEQ1U2pMbkFucUZqeHpwT25EaUpyVnUzNHVtbm4xYVRuNXViVTdLQkpMR3N6dXpzTkxadjM0WkRodzZSRmlXcVJqZTM0UHpJRUJKNmtWNzJNVFE4U29yR2ZDUHE2WlFHSlBkMElwNHNYQXZMUmlRUWhwdHpVTW01T0h0OEJIbHFQcVYwaHMwcWdZSGVpaEIxaFhOV0NnUXlFdWUxMjNleDNoVWhXbzFFbDRTZkVHeEpGUm5WSGhKcThldGh1WFFRdC9LNVhHcnpwazAwaGtoR05BdXo2MzN5eVNkeCsrMjM0Nm1ubnNKTk45MkVBd2NPNE9TcElTVFoxdXphdFl0ZGNUTVdGeGZKRXp2Vi8rVzVNNlJoVGRRZ1oxa1NTZ2hZM1lxYVNkY1Z6SmU0Nm5HMGQzR1JGdW1QcmlCbFN4T0JMZGNpeXpEM3ZBcVJNWU1tbHlFWUR1RHNtSVBqN0F5NnZTS0NCS2xDMEZUM0ZjQVE0NHhsWXBPMFhzSTdQYTl1a0ZjREZHVmN3bXltR3h3VzI1NmVOWGowMFVmVjVBdTVQTkx6ODlpNWN5ZmloTjd1N2k2c1RhMUdrbFNvcmEydG9WaVpVb3ZvRlYwM0dYSmhiRngzRlY1a1d4T3lERnpUMDRrNTByTWt4ZG5XSkxVVzFqV3F5NnAxV2N3dk12ZHNlQ0cvV2k3b2lFaEpsdHBuQ0pjdzQ5cjQzYjRQMGRnb2tqeW5sZlRPNHYxazRzSlNKS2NhVXVCbGg1OHdyM3ZYTy9Ibzk3NlB6Mzd1YzdoMnl4WnNZV2h1Mjc2ZHRDbWlMalpISTdkdTI0N3g4VkZNRUVoNlVqMDRjdmdJa2MvQmU2Ky9BVmw2UEdKS2lqbTRmdXM3c0VnQU9YV0srY1dhY05YcUxrek96cXQyWmUyYUxxeHFTeXFHVXFKWGh2aWI4WE5UN0M3QzZGN1ZnaVlha2M3a2NlVHNPYnpubzU5R2NzZHUrR1dpTnR1b3VrSldMOVNTWHZVaTd0V2ExbG9vcnNnOS9hcjE2L0dQMy9nNlNhK0w5Ly8yQjRSUTR1alFNWEpEUjFHaEo1NTZVbjBuQ1QxTjFVc3dxYXVIWG14dHdhZis1SStRWi8zU1JQVWlNN0UxRjczdjJvVXVxczVqWTJPc1ZXbk1abktZcFRkR0dmS0xMUEtDZkFteWxlNzJUbkxTRHZRd3RLTk1CVFpUR0NaekNiZDFZdWZ1ZDVHNmVZcnU2YWJlUU1EbEpMbld4eTB6ckc2VTF2aTk4SmQwaG5MYlQzLzZVNVZISXBvT0RnNnEvK1dFNjNmdlZwSmNrRHJpMXEzYkNPaysycmtYSVBFL2ZPb29QWmdqYTJLc3M5dVdoWWtZSG42djl6MjRidHNXNWVuejAzTTQ5dHBaSEJ1WndIRjY2dnpzQWhaNGJadWU3ZTVzVjAxbm1ndHdsb1g5bFdNbnNmUDZtMnI5bTNRQ2JIRU12WWFNUzhaZGJ0UkxXdlYzV3RyNDJCMS9mQ2RCSkNFSXFCUW94cmFncGt4ZVdFc3ltYXl1REM4ZWk3TWpDRVJ4aURYcHpyLzhETFhHZ3Fwbk96ZjBrS213RXhEdjhkVm1Uc2FiWXF4UkZnNHhoSE1zNWo1cm1EaWpJcnFrMUNwTDlFeVJKSHhNTFdieDhySFhNTXYrN3FPZnZGUEpnUVJiR200andvZ1JUbmtoR2k1L3Y3ejFhWGhVMDRhTXozNytiN2laNFd5cUc3ZWlXVjEyc21vVUtidVZpYjUvOTdmM1lucDZWRUgrME9nRTFyT3pYdC9WSnJPaEhCNVVEYXZQMllVaTVJU3IybkQ0eUJHY09qdkcvRXZERVRyTFNVL1NxOWxjRGhtV2dkUGpNM2gxWkJ5My9lRW4wZFp6TlEwcktRSnVFanpDOFZpdHg3L1FTL295WTdBaVBHdjVOMlFXUzhVekZtdFIvVWVxMHRjYVhibUEwdlA1dldVYlNxUGN1L2ZITFBDRWVTdEtiNmFoMlZIOHl3OStBb3RoZTlNN05qQnpITGowdm0ySVZGZkVhb0xJUjI3OUhUeDNZQUF2RGg3RitmRkp2TUxDMzlxU2dPRlQ3M1RLbU1tVThPR1AveWwyMy9CZXNwT0thb1NsOXc2d1lHc1hHYlgwV2djVlVjU1cvUUkxQXc2UmVPaURGN3E3L2h0ZjZmbUdDbEdia3ZuazlEd2UrNjhuYUdnRXNjUnFMRXd1c0taUmEyVC85czMvZkJLUlAvc1licnoyS25xTzdRelppTWJKR3lUUUtTNU8rL3ZmZzgycE5YajI0Q0JPam8xaitPd1pCTzNxdGxhaUs0VVAzdm9oUmtXQmpTcnZLM3hXQkYvZVV5bTAvbEpPMVFHajdveTZrVExFRWRYUHBUUHgrN1Y5d3A1TDJ2eUY5S1Y2QVZjcHdLSUVnNnJVRisvNU92WEVDZlc1SE9tNU1UYlVVMHIvMER3YllUWkZYL2lMMjNHamlEcnN5UnlDVE1VdncyTmY1N0hPbGVWZ2JaeEp6NU41NUZUT1VSYkFZODg4ajk1YisvRGxMMzhKeFV5Qm9wSEpuT1hHSmZOV1RkWFhMakUzZjhWUjcrbnFuUUxMNlRyOTVwMDcwN3hBLzhvZmU2cVZyN3BjdHBrc2ZQV0JiMkg0dFhORVN6bXhwRDRQeFR0NU1WTWxQMXR2NUxVUXZ2U3YzOFcrSXlkSXlybGJ5aFVNbTJHbHFkQU56Sjg0NlZ3U1Y3T1ViTDVxRFpvVFFiTDhyTXFwSHoveEpKN3YzMS9kM3FydENsMWl2VmNZZDdsQkR3N3UzTHh1cE5xSnUrNytGU2ZDVXgxQmdPSDMycW56dU9mdkg4Q3JneWVVdHp4S0RBcXBtRnNHTzRKd3JJM2hKRGNpVkpDdEdxRW0zUGZ0NytQN1Avb0ZEWW9vdGN4U2NNNnVJaSs5VzBrdG1qQ1RNZElzbDRzaVhZRkJSUHptTi81SkVmWXdjNjNPSDkvWXFCbnNlOTlUUnFvM1pmMGgrZGRYb2dSWE94VEY1TlFzdnZxMWY4WVh2M2cvRGg5K2pXc3JiUVkzR2sxUDdZaHFxQUpQSkVvNlpzYzRXWDZuRVF6b2NUdlNqSC83NzZmeHJVZjJRZ3NLbHl4UkxLSXFKbW8wT3dTSGRYTitacDZxTW45UC9hVENLUEJJdkNkSUV2YnUzWXNtaHFRc25BcC9SUnY4WllkWE82cmpRaFZNSnNlMVUzc0hqV0R1UDNoMEh6bGpiNDd3L0ozL2VBd3Z2dmpTQ3RlYnpKOFZNcHJjZ2tBaTkzTktjOGd0VEhEcldQb28yZEIzbFlEcUZvRzFyVkY4K3gvdWhsWllRSG94ejU2dndsWXBoOUh6NTVDdEZQSFM4RFFlZi9abFZkUU5peHNpTEliOXorMUhSMDhYYVZxNVdvWThhOGs0cllicTdsSWVOc0JRaWNmK0U1dlc5dlF0ZVk1alByMXczek0vMlllLyt0d1gyQVVjWElhZWVpMzNhc296TTFWSkI1TEF2SlJHeWhVSUpLajd0MUV5WUJuZ2VsVjgyVE9RL1hBVDQ0c2wzUEhYRDVCKzVhbHljY09qa0dFblRzR0hIRk5hcWxuS0RZM0ZRdldhOTkvL0FBR0lhV0hGbGluTVduVWZqTUNsamt1QWpFT3ZFUzRlcXI5dkJQWVBIdjNPeUptejJWN09PVldIM09XZVV0MHY3MUZuNCtvN2lwbWladm5VSjJVdjI2SDI0YkY5c1hSWDFTbkRWeUdDRWs5ODVya0RhRzFmaFZSSE0rR2VIbUZUSzV0c1AzLzVNR1lvNUVydko3dFRGdXZqNmRObnNQZC9ubUcvNXBHMGIyR2FCQlRNSzVJc215SHdheVZBVnpKN1BjQllsZnMzcnUyKzd5TGpaRFIzckR2RWsrNFVyMmpMNHJtcURlb05iNHJubE5IcWMwM1ZJdG1tMGdnS0h2VUVrZE10UTFPTXhSZVFZU3Zqc0pTOHdDSXVUelZzdkRxbFhzdjg3WXUvT283SnhXSnQwOUZXTzBrdVE5czA0M2o1bGVQNE1adG55YzJ4c1FrVy9oWnVsU1dVZ0ZUdENMd1Zuak1jM1B6d3c5OU1YOUs0OVBUSVJMdzUxY3dWL0swbGRtSW9JeHFjVzZRN0NWRXhzQmF1Q2wxTlVZQ3B2NFFUcW94UU0xZnRTa1UzRklwS1lmZHA0TURKTVVVRzNyMTd1OUlqWHpwOG5OeXlvRVFvajhCU0l0am93bTdjQUxsc0ozTHN5QSsrY0FUUFBYc0FyNURUaWxpVVRMYWhqZEtEdnpRcklkYjNyVi9idVdJVDhxTEFUYVY2RTE3QUh1Q3FwT3FkcjVxKzU2allGNjlKV0NxdGtCT09VRmVwc08rcUtsRGNPYkNxVzhiWnVkZTRjb3NLZ1VseWhOK3IyNGtSQyt3UlkwRURXOWUyazBDSDhNdkRROGlVZVE5MkhJR1FhSU9rZTRGMnFteHRTaUdUemwxcXI5ZkkreksyYk4rQXV6Ny9DZXgrNXc0dVNHWGs2dTcyZFJmYWN0R2UrTWhJZjVwSWR6TTlrVjdSWXFoOWFLTjI2TFdXbjhwenVhSVdRT3FXRWxWWjd6eUNRamphd2ZCaUdSQSs1ZW1OdkpDTlJ2bDNpdExkTDQrY3dlaGNqa0t2RkJycWozcnRTUWlXLzJUemFwWVdXeTIvcHpZYXRZYU9FcVJDZlh6b0ZQNzgwM3ZZcXUxUGMvZnBabHhpWExaQldyLzF0ajVHMHcvbHd0Vms5bXBoQ1hsa29xcGR1RVcxbFNzZWkzQ0RVS1NEc2w5Uzljbnd3aWptSnhpKzUrbEJTejFzSTMyakRKSDNLcnllTGQ0V2JWT3Y1bStaaG5zTVNkMW9Ra3ZiWm5vOXlLWEtxY1ZSTTYxMTRKNXFZZzMxZUVkK2Nmd2orZlRwUys2Slg1WUd6RStkR0VwMlhMUEEzTHVsenI2aG5tSFFWWDlseUVhRlBQNFV0RlRYVVAyK3h0S0pmSUtYc25jdGV3bzJBU1dieXpiRUhYbmVTL0tRR3dZa3oyeXpER1dkZWtqQTlTc3EvRXlMT2lVUldPMmdlclZTc05Sa3F6em5ndDA5ZjM3Z3U1ZXo0VGR5bkxuSmt5OGtPell1c0xqZmNtRnBFQ0RSeVNwRVhMSmtSNmYyU0laQjcwbWVlWnIwWkdUMlJvQnkzSGx1Y1pWVXZ0UkJTcmE0Uk1EVnZPcmV0blFFYXFmSUVMUVVpY09nb0VUOWtuVE4wSmVlcUZneXpyOTcvRlQvUTc5cC9xOUw0T1ltVDd6UTBySDVrS2xydC9DQ1FXbmo2ekpBaFNUYVpIUHFxWHBXN2NFVVE1RXV1cmFaTEZ0WjhvaUhxWmZVdzI1cWg1VHFtRzdKUHJxbE9uSHhkcmtzWExYNlJKTFBjUGRkZVU2c2hlRVhVdks2ZXFLaStqZ0ZpYjUyeC9qcGZkOTl2YmxmRVR1ZG5SZ2FhdTNZOUFQWjZ1SU5Fc3U5dUx6VzFQRkgwVFlmalE3YVluaTUzR2kwVEVjOWtDUFNqZnFLMjFkQ0RoVGI4WHlGcE9KRktaOWxRVTZXRlpQZGhGSFRSZmk3RVc2cTNEQXh2TytGSzVuM0ZWUHZtWW1oOU96azhZZGIycS9SZkxXOTdLdlZyTE9WZXFQWTBEUnFPVklOWDdOS2R6MFJrMHp1MGpocWwwYXZFUU92dHZHaVYybUgwa1hMUkdHTCszZXlrMXYxbVBhdzViaDNqSTMwVDF6cG5EVzhpWkhhMFpjeVhlY1IzclJYYml3MVQxUFA2MVVOVmdDdzdNcWVUSmhOWDI3aEhFbndBdlhaa2dwcHc2dFdvZ2FkVS9XbUNpRENVbHlkY243SE5mMithOTU5N3VUL0QrSU5qamRsWEgxYy9ZN2Jlam1ydTVpSGZmWEhFK3NUVlliV1JCeFhDTEhvSXRRdEMvbVRETThpQzY4OFJMRFNPT1ZsUXJ5d0g5L3cra25BN3l1bVovcnhKc2RiTXE0K05tMjZKZVhiVmgrM3F6N0J2Tm14WElzUmozcWFveERVNUNaSmZ2RXNKZmlNWWhuMXdpeXNwOHFFUkJIUTlwTjlQNVNXamI2M09ONFc0NWFQRkExbEV1M2dyTVdyMjBrQ0VwcnBweGhvQ1VNa0NhcGQ2Zmt6YWM5WlRHdUdPY2dKbkNGSU1PUXFqNzhkQmkwZnZ3WTl6ZHVnV2phR0pBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEY0FBQUEzQ0FZQUFBQ28yOUpHQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQnUyU1VSQlZIZ0J0VnA1ZEZ4M2ViMXZtMVhMU0JxdEhzbVNMSGxKSEM4aGl4T1NXR1luQ2NRaFlUdW5MRDVwb2RCeUV2OVZ1dEE0NTdRbFhRNDRMUlJPU3drY09CQW9ZRlBLQ1Fra3RnbVFRQnhianAzWXNtVnB0STZXa1diUjdQT1czdTgzc3BOQXlFYjZrdkZvWnQ2ODkvdTIrOTN2L2tiRDYzd2NPSEFvRW9heDJ6RDByVlhENjlVMGJadm1lUkhQUlFUUTRGWXJxR1pTNlpYcDJiaVd5NlVyVG5YWTg5d2pjREM4Wi8rK09GN0hROFByY0loQklWTy9rNHNjc214bnFESzNnR0krajFCekMzelJLR3lEUnNtSi9NZmpmNjduUVhjZGxKZFRLTTNPb1poWmd1NEJqdVlNZTY3NzlZcGJQZmlKL2ZmRzhRY2VmNUJ4RHg3NDZaQmhtSGZ6enlIWGMyQXZKR0VuNXFCWGJGN1pRTlZ4b2Z0ODhNVzZZTkJJVDllaDBRZ3h6dE0wL3UzQzRLTVlIME5tY29iQnMwRUh3ZVZKMVdyMVlCbjZmWHUvY085aHZNYmpOUm4zOElHSHR3SG01NkZyUTJxaGZHOWxhUjVuZi9NRVROdkJZRWMzZkM2TjQ5V2RjQWloN2hpcWxoK2FHTWR6ZlQ2TFJ2RG1wU0pXeHMraHVyVENxTGswellick9QeEFROFh3SWJ5bUd3Mnhuc09lcmUyNTlZTzc0bmlWeDZzeTd2Njc3b28wK0NKM2h3YlczeFZzNjRCcm1yeUFwaTZ5c0RDSHpFcWFpeXZEVFdheHJxMGRsWEFRT1JwUnFGYXhsRW9pbVZ5QUx4REEyclkxYUxRWjFWUVdldFZCbGRHcTBscGJzMUdGamtCc0xlcDRmZmpwRUw2V1pIWTE3THYxdHAzM3ZKcjF2bUxqRHR6MWFZS0RjY2l3ZkwyV0x3QzlPUUs5clEwRjFrNW1KWWZVeWdvc3Y4Vy9sekdUbUlHZmthcG4xQ3FNemtJeWlkRjRIQUYreitJdExVUEhwbWdIdHZhc1E0TXZwTkswSUdEVDNBaWpxeE9XR1dUd05MR0paVW9uOERPbm1FZHhaaXBlVE0zdDJuUHZLd09lVjJUY1ExLzUxbTU3YlBUK29HNUZxcGFCczR6Q3FhazRDcDROUjlld3VMd01tL1hGTklYSjh6dFlZeVBuenNOZ1ZEcWlyYkJaajZGZ0NIYXBnb0cyTG16djZjZVRwNTlHUTMwZDNueloxZEFibStGMnRjR2w4WElaVitxT2Y3aU1lS1ZjUUg1cUJtVkczWkRQTktRZDNkdXo1N04vZGZEbDFtMjgzQW1QL2V5eE8vM056VjlyNmwwWG1Nc3M0UDZIL3hjUEgzc0tjOWtVNmlLTkNJWERjTGlRS2cwSmhVS00waExHeCtMSTUxYXdaZXRXNkxxQnFla1pGRXBscExJWkxLZlNzRjBYYjc3aWpaZ3ZGT0hyN1ViMzlxM1FRZ0hXSXNISDcyUGtMUGhwWUpuZnk1OGZnNUhMdzJBa0pjS0dZUVEwdy9qQSsyLzVVT1o3RHg5NEFxODFjc2VmT0hxbjUrcjdMZE9INWVRaS91NGY3c0haU2FaWDBJL3RsMTFHTDd0SUxpMWpibTRlQVgrQXFhUmprU25ZMUJSQnBMR3VkblZYVis5WENEUXJURjJEb0tMellUSFpCZ1lHRVltMjRKTWYrempNZ0I4TzA5QmZjcEFqY3VZbVo0RlNpVW1wc1JaZGxHd2JaYnNLcjY0UnZxNTIrT29hWU92YTNodHZ2bmIvcXpidTEvditaWGR3WGY4Qi83cDE4UHdtdnZDbCsvQ3pSdytocWFVWjlYVmhoSmxTSTJmUElwOHY4R3hkUWJnczNHQnFoaG5CVUgwWTVYSUZ0dTJxMnpRME5Lclh1VnlPa1NZcTBqR21ZY0N5ZlBqb1IvZmc5cHZlQlkrb1dSeWZnY3RyU3BwTFM1Qm5jWXhEaDNwdFRRZzBSVkdSdEhYWkxsanYvUGpXdDk5NDlZdW02SXVtNWZIUGZyN1haK29QK29xbGdMRzRoT1hGT1h6eGdXOFJ5ZzMwckZtRG5wNXVUSXpIa1Z4ZTRrTFprSmt5RW8wNkdyVzJldzM4aFBwaXZsaHJ6RVFGazNVcUtWc3VsMUVvRlBnZEJ3YVJWbHFJNDlvWUdUa0xmVG1MamNFbVdQeE1OeXdhN3FPakRMZzB5cmN1QnY5QUwveU5KRG1XcWRLV3lZQ0EvRk1vdnVPV2pWZDk1enVIZjV6K2JUdk1Gek9PeVg4b1pPa1J3eUFVazEwa3pwNURzWlFqR3ZveGw1ekQ1TXdFVEJwVno5ZHM0dWhxYThXdWE2N0docjVlV1BUb0VnRm1JakdMOGRsRnpHZlN5QkZJYk5JdW44OUFtQWk2UW5SMW1HWlNqM0pVK2RtM2YvWVRWSElGL05IUVRYemZZWjh6RU9pTXd0OGs2U2RPWUhwS2RrZ2Y5SWk0MlJKN1pCemx4V1FrNE5NUEhkajMrZTIzN3R1YmZrbmpSazZNM0cyc3JQUnFaQnZHY29hMTRTSEFZdmRZekVVdU1oQjBzSTZSdTRTUDFwWVc5Szd0WmUzMG82V3RHWjViaFpQTndzbmtjZlpaQTJ1WmlrOVB4SEZzYkFMeCtYa1ZEVEhJWk5TcVZVbE5Xd0JDZUFtL2ErT0JYeHhDcUs0T3Q3L3ZmUWhGNjluNExVZ2hHdnhja3pTbVhTZ1RRZU1KRk9lVDhCRk5kVjZ6cXRtOXBoa1VwclQzOTZibDZlT25ldzJmY1ZDamQ4MzJkaGpOemVxaUJyMTg3T3dJRXVrVUtwVXlicjd4YmZpek96K0pTeS9kaUs3dWRvUWJHNGtFN0UxY3FPN1F6YXl0dW1DWWFlcUR4NmpNRUNGWFNsWGtDUkJTUTlMMnhTanBaWTVpSklZeTJpSW9uWXlQNDRwZE42Q2xvMDNWcjhuVTArU1phS3hOSjFFZG5ZV2VMYWpXemhQVXVnVkYzYUJ2eDhjLzlaYy8vT3EzL25QdWdqMzY4NDJyODV2M201TFQ5SmhtNlhCYndyQzNEcUJ0NkRwY3Yyc25GNkRoTFc5NUN6NzI1NStDRndqRHE2K0hIbUVkMURkQ0N6ZkFzMEo4K0tBRkEyd1RUUVNlUmxWbnJZMU5pUEMxb1pzcUE4U2dTcVdpK3BtdUtKbW02RmloeUZSalRYN2hpLyt1YUpoOHBrdk5UaS9CZlhvY3h2d3lmQUpDckdrLzI0YWZ0ZWZXQlZGMzJRWTBYWFVGckthNnp6L2Zub3ZHbmZ2U040YmNveWVIQWpNTHFtNE1JVDVhRGNhZGhoRGFldnVsUitPUC8rUU8zbzZHeXhtNm4xZnc4U0ZvNmFqVThrd2lKaU5Rb1ZIU0ZteW1sYUJua1BVcEN4THdrWWd4MFZBbGt0cThsME1qNVZHMXl6V0FHUjNCMFY4OURvMDE2NTRhaHphM3hENUg2K2x3azlmWFdidGVuUi9XaG01RXJ0b0Npd1RBSUR2eW1jYlFrNCtkSHZvZDR3S0dmcWZCUnV1T1RrQi9hZ1JtZ2prdC9FLytvNEg5YkFudDdXMFlIQmdBMU5KcVh4ZmoxVUREZE5VWURaMHA3TEkyYytrMFptWm5FQW9JQldORXBCYjVtWHhQVStpcXFjbEFHc1dGYU1xellsMU0zWWUrZnhER1hKb0F3alV3L1V3K05FbEQ4bFZqZlRlQ1Y2eUhHWXRDWjVzU09zY3lKaXByQ01LNSt3WEdqWC83d1Y3NmU3YzBWbE1Tb1ppRGZuWU0xV09uWU5Kck9tK3c4WkpOdU9PT080VCtxRU5ndkdZaHoyYzllTlV5UERaWmx4Rnp5aVVVK1lnUXVudGlheEJqL2JoMlJhV29OSDU1Q0phcmxCUUQrZHFyc1EvMTJ1YmZKOGJPSXNkcmluUEZZaTFNUHR2YkFkL1dmbWlkVGRDWW1xYlVxV1FLalFwSStrNG1VSDd5Mk5EeGZmZEhMaHJuMzc1K3QzSGxWbFNqUkR6ZVFHWXNXYjR2VndGT1RRQ1BuNkVYbDNIYkxidWhpdVBpTE1CRlZZclE4aGxvaGJJeVVwcDJpVTFhWDAzRENnbHZWM01EcnQrMm1XU2E2V1NvYjZrMDFGYjdZeTFpei8wdFI1RklPRFU5aXpKVDBldHZoM2JwV21oZDVLQ21wc3BEM1o3UjhoT1B6UEVGVkgvOUREU3lHaC9Mdy9WWDdycllDaHkvK1JHUGNHODJYd0lrVTNBbTVvRk1EaWJyUVJjMlVNZ0Jad3J3NkQydm81RUxxQ3IwY2xsVEtkS3hSMy81Qk1ZVEMxak81ckMwdEVTd3JMS2ZCUkRqZ0RvWTYwUUhKL0kzOVBZaGx5L2hwOE1udUhCWHBiTHJhclVhbEJTdDVZSXlrRWlEQ2lsWE1xeGgwMlc5RUFDV0xxRFZUbEdwaXpLemhVQlRJVVpvekJLZmpFWHN1YWEwRHc4N2xYR0owK085NUF2YmREWkdWNzVGaXFNMTFVTmJ6S0k4bFlDVnlxbU9JVXpEYzBySXh4ZWg1WmE1K0RDS1MybDgvOXNQNE5tcFdTeXNGSkVndGRKNG5RQm50ckludElscFFsYmZRYTdaU3RxMmt3UzV4TThmT1g2QzlWZmx1WTZxTzA4MWN4cnNYcWhrMGk2YW42QlVVZFZxT1ZKRFZFOE53OTdzRXFvc0Z6TlBZa0FLNXJLVmVKSzlkSklkc21ERTZvZU9IejhlTWQzanA3ZjVlanNaa1ZZaW5hR0lya3VJZGJwYVlOSlFqL0RyVGlUZ2tlVi85VjgvaC9qMEpQcWJHckZ6NXcxWXYyc1hOdlQySWs3dlpRbmhMcU1aNitoQ1kzMUlrV2xaVlRNYmVYMm9qbTBtektIVlFULzc1MU5zRlV2WkNoRlFWM3cwMWtLaXpmUE96eTJpd0toTGl4QkRpOFdpbWpna1pZV1ptUE1FcFNuS0dFeFpTK3AwTmRvU0U0MFJjM3ZhT2VpMmdsZVdPdDV0R3BtbEllL3BGT3p4QnVpRDNkRGFXeFVXU2dvNGtpS2tRRm9IbzhtYWEzb21ndi81NWE5eCtPUnA1T3FiTWZDZTIzSDV6aUdjSnY4c1ZFcTQ1WTAzb0gvOUlDbmFBdkpjVEhlc0IyMnM0d0lqbW1ka1MyenVBWjlKUThKSTUxWVVkMnlMTktDbnZZT0NrWWN0YTd2eHk5T2pxbm16cjJCNlloS0o4NU9vTDFiaFQrVVJLTHVxLzZvUmx1Zm9ESmZqNDNOWEsveGRKTlNHVm5NRzJ3L3JiWnZKU0c4VlJxOXpITkdPbndaYVNKUFdkc0dOUm5nQm80YUxjaTkrK2VwMzc4Ymp6NHhnb0xVSjE5MThJL1N5alZCWEYrN1krMG1rcVdMVis0TE0rU0M2Q2MwT3ZRdHAxcGtNcWtUSitXWHl6UFF5c2tUaUpqS2dCTUhHbE5HSGFMZFN5R1BMNEFZc0xpWlZQNnRoaW9mVHAwN2d2NWdwSFZZWUczaWZucFlPdEpBTUNQc2hRd0I2Mm1EUzhRNGRWdkUwQlhiaUYwbEEvdCtyVFgzclI4Zk5kSGFidEdYWGtPWk4zc2ZGZVV3VnE2OGJMZ2RTVnhVOGE0RW9XSm81RHpvTG9mNUJPSXdXWng0U2JhWUJhMUJqUFpBVksvN24wZkF5WjhDVlZBclRYUFE0VmJHSnhVVXNFS2dXQ1ZEei9LeTd0Wk5CWUNPbkkzcmJPeEZrYWoxdzVPY0tHSVJQRHJaSDBjQUc1b2kxL0wrZHFiMXA3UUMyWEhzRE9yWmVna0Mwb1NaSFZHWDhJYnF6NXhsY2cwdE9YSjFJeEUxOXgrWmVkekVEKyt3RURIclpOUWpqQWk0a3p1NEM2eTNLTVdSZEx6eXljNGRHMTYwYnBGdk1XcUdYcUZxNWJOeFVnWVNWQ0R1QlVEZnA2YWtWRkdqNEpJV2pCRzgyeFFsOUpyVk00ektvY0NFOXJNM05mUU1ZSTdHMm1TRnlibnQzajJvVE9vMEo4bHArQWtXUlRsSTZKd2ZtQXJudVltY256dEI1Q3lQamlNeEYwTkhaU3RwV2hFaEpyYUsyVFM4UTNUbTVPMTdFdERXT05rd3pRd1FmR2xQaEdHSGxpcHlyMkl1WUl1WmlDaTVSMFdtTHdDUkxNVnJyaVp3MHpCWUFJYXRueEx6NUpmWTRTVU81T3BkWExGTXZLWEhCQldRNXhpU3pZbVFTYzFUSE11eDdOci9YVmQrRStkbHBGRmV5NkdxSjR2TEJUUmlkbnlWNkt0bVc0MVNRU01zcGcwNXNXeE5ERTQyeS9DSGt5NHg4Y2dhcDlBTHF5R2ZuT1ZvNXlYbjQyWmEwamhqQnJFNFJlRTAzSTJwaWxIU1Y1dWl0b1VKTUk5eVplVlFKN3pyN2tpWk5nQ2ZvU1dvZjZaTXdyNmRrU2FDZWYvcHBCbENNckNCN2JoeDk3M3dyQ1hOWVRlUUM4VldtYkZVRUhrWXB5ZjZYTG9xaGVkWlhUakdMYkg0RkxZRW9Qcno3VnNUSVpBNGRHOGIzSHp1Q0M2T0tQK0JUaW5Xa2cwYXhqalhkVWpWRnVSYzUxcTJmMlpPTW4wZG1ha3FOUHEzaGVqUlJjUXY1T053R0xHWUQyWmJGZnFHMXR5am1JTWhoazlab2ZXdGdydW1BUFVGUGlwWlJaaVFGbWJod0VXeCtkZmduK041UEhzSFlRaHBCRnZOVjVKdWYrZUI3VmFPVnZRQkQwc2pRbGRwc1VCc1JKU1JIWTNYVFVCT0hjTlVscHVjZ1VkTGp0VC8zblFkeDVOU0k2bm5pNlk3dUxzVFc5c0FnUUhtR2NGQkhTWHdTVStHN3VjUWt4aWtlYWVUQzhoWHVTeUJuRjFGNTVqam56VEM2MXJmQlQxSnQybzhmU3lQYUdQRmZzcDZwMTNTUlNRc0NlUnQ2aUp6dHFOTEE4dGdNQXNMNk9SeHV1ZlUyL1BNUGZnU3RvWTdjTVlicjMvRjJWSmk2SmVaK2dHTk5sU3BYbVRmT01qV241dVp3Zm5LQ3RNeFdmY3RqSkV0T0ZZMTFBVTRCRlR4MjZqaEdabVlWaEV2LzZlam9RSGQzTjdQQ2dxVW1DRU8xRElQQXN6UXhoaFVPdlZiVlZnQlhJKzIxNWk2VCtnS05QRWEwQzNER2pOYUgwNFNpU3RwTExrUktqMmVnczhkWkcvc0JNaFJYTTFXVGRZTms0UnY2WWJFSDJlZW5VQ0RLUFhMa0dCYXBGcS9ySWRDUUlUeDA1QkZNVDArZ0lob21jLzlkMSsxZzJsaVlKVHBPRVNsbFNNMElXS0ZHa20wMUhYaW9vMEltMDREdEtIS0YxbGIyem9GMXE5R2xRWXkweHM4eVJOcDBNZ0dOSk1Ca1pHMmp0dWRBTmk1aFF3TnJMYlorQTBLUlpxNUJ4NVBIVG1EYnBadmpwcVBidzVybXlTcmhMYzRTNVJZQU1ubEJTSlBEcUtPcnE4RGhWSzF2NlVmOGtURWNlK0lKYkdZdHRKRjVQTXRHVytVQ2pqNXpGa1ZHeEtWREpxWW04ZTRiZG1Jc01ZOXpqRXFlNkdWN05aWnVTZTgwUFRRU2lDeG1oMFlRS25KYzZ1Sk10cTUvclJxdXBkY1o1SzlwTXArVnBTVDlYK0h5WE5VWFhhL21JR2xvalozdDZGcTNIdUdtRm9XbXJocWdIT1NyQlF5Zk9aazJyV3Z5RTFJZmlzSm90V2tBSGhHeWVJYmsxYWp4VFpFRk5CbE1UVHc3K25NS3JDWDBOVWNSYSszRm15Ky9GazhOSDhWOGxTU0FyTC9FRzVmbzBTZk9uRUlxWHliTnlsQjdLYW0wMDVscU9qMGRKTXVJVUI3VWFuREZ3cGQwRk1Wc1dra0hJbFdVS2RnS3EyZHJZOFBXbE14SGNzdU1nTnBRaVJBbmZIUjR5V1hLWitiWXVDMDF6NGxDWnhGc3NvdjJDZE1OclF3TFdaRXYwSTNLSTZKcHFIem14VFQyTVlWUkdrVlhOR0xIdFJ2dzdKTlQrTVFIN2tDU1JjMzFZc3NsdTVGZ3VoYlk5NTZkbk1Jb1lUL0R2bFdrYnVManpSeWVWQmVrbXNXR3JHWTIxa2k5REoyOHBlemp4VHJyMllqemlpd0xLc2s1Wmxoa0JsZUdienFFMzVPSm53WmFRcnNzWVNSczFFWHVUL0NhdHRJL3VhdGsxMlRHTXM4eGRQY3dCU1hmUWI1OXYrTGRxNE5vN2NtdEdVVWE2bmtrMHRaYVF1eG10TWI4dVA2R01tSGFqNFhKTE55c2kzYnV6dlJ1R21EYVVKQnRiY1B5NDBkeGZuWktPU2pFNW00eElRUkFSSVV1VXljUnlTRkVXY0JWV2tvVlFlNGpPTndkRXFNRkhHUVMxNHdhQmZNVVlMZ3lCU20vZTh3ZVc4MkNhb3hWSk50UWMwUnR3cjlnaEc3cHcyYmY5bjNwcWVOL2M5ano3S0VheDZycEcwb0FVQ05KREw3Z0ZrTDZnRXJMWU1SRjM0WkxvVk9ZYWFGZ0dvMjFJVXh5M016Tmp6eEJKdHdnNmVrakswbXBERmVxc2dpb2xxRmFSRjBvcUl3VGNpeHpZWmFwUzRiSzhZaGFKQ01TWk92UVdSN0ZFa1VoSVJKU0tZWkV4RlBhalN6UnV6Q3NldW9qcGVqb2dnM2VxcEhRaHUrOTk4RzRHbFp0MXo3Q0QydkcwVVdhVXFrNDF2dXVoRW5EQkpFOGp6ZjFIRlV6VGUxZDFFVXlhR3B1VmNLTVBNNlBqcEZLVGVGWFR3M2pOMmRHdU9paUt2d2dDNzI1UGtDRGZHby9RUkJRVWtkRnlLMXRJVnRVMGs2ZU9VOEgrTkhXRnNYNi9uNTBkc1l3T2pZc1VLYWNJdGZTVnpjdmxmTlg1enpWQm1UZHdwYVl2anI3SW9Ya3IxK2N4S0VIOXJ0dS9tN2RzNVhkbnRZT2YrZzZWbk9uR2gxbHROQ29Bc3RBS0JlYkdCK0RzenlQbVpsRWJhK2JOVFhGT252cytOT1lvOFF1ZXdLQ2F1TEhJRWwxTS90aGtBT3N5T3dDK3dMOFltUXFWeUpvMGUrc2xhcHdTRGJvQ3RuR1NpbVAxclllckIvY2pqUG5qaW8xUUZOUkViVk1Kb21hVm5teGh0aU9OTU5VbjB0ZnBLSjI4S0p4a3BxangvWWVwaXVIb0E4Z1VNY2crc2k0UFdNMWo3MVZPYTZXMXk2amNQRFJ3MlFKYy9SNlNFSDlDaEZ4Z1lxWFVDUlJsTlZFemh0R09ONkV5UlA5VE5VTFc4emkrUm1ldTF3b0VjYWJxWXlWRkdzcFV5NVlwaFRmMWQySkFoM1UwdFNGdnI1dG1KeDRXczE3SHFNamk2OGhyNkdBaHVWME1ZcXFuYm42RC9mLzIwUHg1eUluN3p2ZVBhNDFNQlJzZUN0SEhLYVBkMEdNZnM2d0M4ZkdTellqMnRXTkU1UUJjK2tWNU1rOGxNem4xVmlEcExhMHN6cnl3MWFxMFlLTWN2Y1NGNWZtdVN0RlJwYnBYY2RCMWVGN3dsUWFHdXM1TFdsSzBmWngwUjNSTnZSMjkzS3dKYjlzaU9BOFU3UmF6S3J4U09CZUpBV1gyV1NzaWxXcUQvSjdWS3d1Ym1tOVlBdHJidXpNSWRjSUQ4bm1od1JNdEVWTmZ3NkJMaDZyN09EaEIzK01IeDc4RVphNVIxZGk1RUorTWFZZUo4Nk9xbzNFbnM0T3RESXlCc0VrUzkxeWxsSFJTR3pEM0E4UW5VV2NKcyt6Q3d0WW9QYnZPVktMRmJ6dnR2Zmd2YmZkcmdqMnlKbHpPRDB5UW1BcDRCeFROSnRQTURNc3hXS2taVmpDVjZVMzZxcUZITDd2UzQvc3VyRE1GK3dWM0hYWHAwK1F4UDJwdHFvS3E0ZXU0M2NPc1pYdjl3OXV4STQzYktLbXNZSVB2ZmRXbkRsOUJvMGhFbGR1a0loalJFVEtzQmxQSjVleHpBbERKUFlHeXUvaWFVbGRTNlEvc284bDdpV0lsbW1KNFVUVHYvNzBYNkNSb2xLUjMxMU16Q3ZudGpTM1U1SnZVV21aNFVRdjZYaEI5NVQxQ1BwV05XL1gwYVB4aXpzOUwxaDVyQzgyelBQdVUrZkxKL3JMYlptN21Ca2Y1VVprSTRIRGgxdHVmanVTbk5lbVVtUWw1SUd6M0txYXAxWmljY0dObkJlbEp3bDVscjA1a2YrSzdIbExqTHFrZ3BMSmlldVhiOStHQ0ozamNxSk9rblRuQ3ludTdmbXdhY042WFBHR2E2aWQ3c0dPSzkvRVppL1hxTlFBU3FSQUYvZDgrY3VINDg5ZjNlK0VwV3k3KzNpenVQcWRpUGJTeG9rZ2UrVElZN2pwdGcrb1RmMW1SdVh0dTY3RkpaczNzQStHRkVUTHpxbnNwTXFtbzdjSzZYbXlFbmt0VVpQMGtrZVFCRjE2Nnp0dmZJY3FCUUdwUE04UlVVazRwVGk3ZzF3eXhqMzBkKy8rTUxadXVWN0FnelhveXM1Ui9EKytjbmpmYjYvdmQ0enI2K3RMZXhWbkY5TXEvVktHU2M5Y25CNWxzZGZEeDRuWUY2aERMcE5TRWwyUWtCK2xKQkRtZ3ZWVmJucGhHaEREWkloViszMk1vaml3Z1RVb0Jxemh1UE9HeXk5SGhlbTRORDlId1lnRE15TnFzai82dVprU0lCKzFBcWJhTDl5d2NZdXFmZTdzcHNzcnpxNFhYZU9MdmRuWjF4Y25rdS9CUzBVTlZaeDk1aFIyWEhXdDJqOEljd05laEJ4WmVGUkFSTmVWbkdBemFySkhJTVlJNk1naEVWTjhZN1dlQlFFRFpDMWJ0MjFUcjJXL081dGR1YWhiTnRKaGZpRUx4bk1VMGU4TFkvVE1JaXpiMlBQQXdTZmlyOWc0T2RyYjF4elViV2Z2aXhzR0duWVNEejM2R0FhMlg2Vis1Uk9rOTIzV1dYeG1HaVdieUVudlNtK1EzNU9JY1JJMWVUaXIrMjd5dm1uNWxCTWFxV05HQ1NBMzNYU2phZzBsUnE3RVliZElEU1VRRUxsUVgxVmVOZFY3eFZHTmpjMVlUcFgzZnZQZzQ3LzM5eWdtWHVKbzZZcnRYNXliRldCNXdhYWVvSk5zSWIvNzF0dEp2WUlxWXNHbUtEbzVsUjgvZHhhSnBSUlNtWkxpaGxMd0YzWnlMbXgwaUxGMWRJYWs3N29ZOTlpYTYzSGJlOStQRnFyUm1lVTBVbVE1eTZrbGhZamlTcjlmZEJHLzBqT0ZWTXQxMnFLdGUrT0p4UDZYV3Y5TEdpZEhhMGZYL3VUOFRKeDYvdjI4dXRvYUV2YXg1WXByNk9VeWFqL0VvTFdNUWhzWEd1dUtJY1VkbjNJeWg1VjhyaVkra1I2SlFHdXU3b3JLRkNBL2J0dllQOEF0NkJ2UnYzR3dOc1pRTlpQRnAwaTZaUzhoeUtqWjNKQ01jbC9RTUd1L0FTUFlwRWs0OWd4dTNmeXl2eURTOFFxT0tGUFV0cjN0ZEZ5ODlrNk5SQmswNk1JcmdUTS9nYVdSU2xhQnRDcExjVmFNRWlQOGJOU0NobjcyTVptL1JJM3VhSTNpc3ZVRDVKQXR5TEZsbENnblZvbU1SVXJ2WVZJNlAwRkVXczA2NnFTK29GOGhLQk1nN3VydTlqVTlmUzlybUJ3dkc3a0xSMmRuWjV4UGZZdnppWDJjcnU0V3o0cUFJN0tDTHI4cGtmR2Z2b3EydE5WbU1QRWNHWVl3ZjJFaGtscVZja1VObFczYzJtcmxSSEhveUtQNHAvdjJZL3VWTzNETmptc3cyTjlIWWFrbUlvbHg5UTFCTnU2b29uVk15ZnZ5UldlZm9Qa3JYZk5yK3IxbElwSG8vY2ZQZlByK04xMTM5ZEF5TnlkdVp1MEoram1VOWM2Zk9va0RQLzRSeGlabmtNNWtGWWdJVFJKZ2tCakgyS3VhRzV2SS9sMGNPUEFEeFV6S2RtMS9vQ2ZXZ1hlKzgyMVl1NmFMaktRRkc5WnZRbjFUNUxCdVdIdGpmWDNEZUpYSEs0N2M4NC9WS081cWo5UVBaWFgvblRmQjJ5M3ZHNnlicnU0WWhxNW1lN0IvZ1hPeVQyNkdWYStUV1U2b1ZZamJWK3NwbzMvanUvOE4yVm9RN2NOVHYwUnhNRTJWNjJ2ZitDYXV1dkpLdkdYbkRZYzcyN3J1dWZUS3F3N2pOUjZ2eTIrY0paS21SZ00xZklRZ3N5MmZTV1BxZkJ4UG5SeFdNa0tlbEV4TkRkSWRhZkNHZ2N2d3Q1LzllL1VEQUdIek5vMWZFNm1qQ2xZOW5DOVZqK1JLcGYzcGRQb1ZweC8rUDQxNy9wRklqUGRTMTlsV3JUaERoVlIycTJmYmtjVDhRdS8wOUdSa2NYR08rbjRRbzVQejZXOSs5enRwR2piTXRKeWd0ajhjS0pVT3hsOEhnNTUvL0IrTW1IWWRlbmZ5NVFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBGbGV4IH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCB7IElvSW9zQXJyb3dSb3VuZEJhY2ssIElvSW9zQXJyb3dSb3VuZEZvcndhcmQgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkdyb3VwKHsgbmV4dCwgcHJldmlvdXMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleCBzeD17eyB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJ1dHRvbkdyb3VwfSBjbGFzc05hbWU9XCJidXR0b25fX2dyb3VwXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ByZXZpb3VzfSBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIj5cclxuICAgICAgICAgICAgPElvSW9zQXJyb3dSb3VuZEJhY2sgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXh0fSBhcmlhLWxhYmVsPVwiTmV4dFwiPlxyXG4gICAgICAgICAgICA8SW9Jb3NBcnJvd1JvdW5kRm9yd2FyZCAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBidXR0b25Hcm91cDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIG1iOiAtNCxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBiZzogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBib3JkZXI6IFwiMHB4IHNvbGlkXCIsXHJcbiAgICAgIGZvbnRTaXplOiA0MCxcclxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgcHg6IFwiMnB4XCIsXHJcbiAgICAgIGNvbG9yOiBcIiNCQkM3RDdcIixcclxuICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4yNXNcIixcclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICBjb2xvcjogXCJ0ZXh0XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiJjpmb2N1c1wiOiB7XHJcbiAgICAgICAgb3V0bGluZTogMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgUmNEcmF3ZXIgZnJvbSBcInJjLWRyYXdlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJhd2VyKHtcclxuICBjbGFzc05hbWUsXHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xvc2VCdXR0b24sXHJcbiAgY2xvc2VCdXR0b25TdHlsZSxcclxuICBkcmF3ZXJIYW5kbGVyLFxyXG4gIHRvZ2dsZUhhbmRsZXIsXHJcbiAgb3BlbixcclxuICB3aWR0aCxcclxuICBwbGFjZW1lbnQsXHJcbiAgZHJhd2VyU3R5bGUsXHJcbiAgY2xvc2VCdG5TdHlsZSxcclxuICAuLi5wcm9wc1xyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPFJjRHJhd2VyXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvY0Nsb3NlPXt0b2dnbGVIYW5kbGVyfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YGRyYXdlciAke2NsYXNzTmFtZSA/IGNsYXNzTmFtZSA6IFwiXCJ9YC50cmltKCl9XHJcbiAgICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICAgIHBsYWNlbWVudD17cGxhY2VtZW50fVxyXG4gICAgICAgIGhhbmRsZXI9e2ZhbHNlfVxyXG4gICAgICAgIGxldmVsPXtudWxsfVxyXG4gICAgICAgIGR1cmF0aW9uPXtcIjAuNHNcIn1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2xvc2VCdXR0b24gJiYgKFxyXG4gICAgICAgICAgPEJveCBhcz1cImRpdlwiIG9uY2xpY2s9e3RvZ2dsZUhhbmRsZXJ9IHN4PXtjbG9zZUJ0blN0eWxlfT5cclxuICAgICAgICAgICAge2Nsb3NlQnV0dG9ufVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8Qm94IHN4PXtkcmF3ZXJTdHlsZX0+e2NoaWxkcmVufTwvQm94PlxyXG4gICAgICA8L1JjRHJhd2VyPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZHJhd2VyX19oYW5kbGVyXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19XHJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlSGFuZGxlcn1cclxuICAgICAgPlxyXG4gICAgICAgIHtkcmF3ZXJIYW5kbGVyfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuRHJhd2VyLmRlZmF1bHRQcm9wcyA9IHtcclxuICB3aWR0aDogXCIzMjBweFwiLFxyXG4gIHBsYWNlbWVudDogXCJsZWZ0XCIsXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEltYWdlLCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVDYXJkQ29sdW1uKHtcclxuICBzcmMsXHJcbiAgYWx0VGV4dCA9IFwiZGVmYXVsdCBhbHQgdGV4dFwiLFxyXG4gIHRpdGxlLFxyXG4gIHRleHQsXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzLmNhcmR9PlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtzcmN9IGFsdFRleHQ9e2FsdFRleHR9IHN4PXtzdHlsZXMuaW1nfSAvPlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT57dGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+e3RleHR9PC9UZXh0PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJkOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFtcImNlbnRlclwiLCBcImZsZXgtc3RhcnRcIl0sXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgbWI6IC0xLFxyXG4gICAgdGV4dEFsaWduOiBbXCJjZW50ZXJcIiwgbnVsbCwgXCJsZWZ0XCJdLFxyXG4gICAgcHg6IFs0LCBudWxsLCAwXSxcclxuICB9LFxyXG4gIGltZzoge1xyXG4gICAgbXg6IFtcImF1dG9cIiwgbnVsbCwgMF0sXHJcbiAgICBtbDogW1wiYXV0b1wiLCBudWxsLCBcIi0xM3B4XCJdLFxyXG4gICAgbWI6IC0yLFxyXG4gICAgd2lkdGg6IFtcIjgwcHhcIiwgbnVsbCwgbnVsbCwgXCI5MHB4XCIsIG51bGwsIFwiYXV0b1wiXSxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiAzLFxyXG4gICAgICBjb2xvcjogXCJoZWFkaW5nX3NlY29uZGFyeVwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgbWI6IFsyLCBudWxsLCAzXSxcclxuICAgIH0sXHJcbiAgICBzdWJUaXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBcIjEuOVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBJbWFnZSwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlQ2FyZCh7XHJcbiAgc3JjLFxyXG4gIGFsdFRleHQgPSBcImRlZmF1bHQgYWx0IHRleHRcIixcclxuICB0aXRsZSxcclxuICB0ZXh0LFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgPEltYWdlIHNyYz17c3JjfSBhbHRUZXh0PXthbHRUZXh0fSBzeD17c3R5bGVzLmltZ30gLz5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e3RpdGxlfTwvSGVhZGluZz5cclxuICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9Pnt0ZXh0fTwvVGV4dD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2FyZDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcclxuICAgIG1iOiAtMSxcclxuICB9LFxyXG5cclxuICBpbWc6IHtcclxuICAgIHdpZHRoOiBbXCI3MHB4XCIsIG51bGwsIG51bGwsIFwiODBweFwiLCBcIjkwcHhcIiwgXCJhdXRvXCJdLFxyXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBtcjogWzIsIDMsIG51bGwsIG51bGwsIDQsIDVdLFxyXG4gICAgbWw6IC0yLFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgbXQ6IFwiLTVweFwiLFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFsyLCAzXSxcclxuICAgICAgY29sb3I6IFwiaGVhZGluZ19zZWNvbmRhcnlcIixcclxuICAgICAgbGluZUhlaWdodDogMS40LFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIG1iOiBbXCIxMHB4XCIsIG51bGwsIFwiMTVweFwiXSxcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFsxLCBcIjE1cHhcIl0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgbGluZUhlaWdodDogXCIxLjlcIixcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIG1lbnVJdGVtOiBbXHJcbiAgICB7XHJcbiAgICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgICBsYWJlbDogXCJIb21lXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiBcIi9cIixcclxuICAgICAgbGFiZWw6IFwiQWR2ZXJzaXRlXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiBcIi9cIixcclxuICAgICAgbGFiZWw6IFwiU3VwcG9ydHNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgICBsYWJlbDogXCJNYXJrZXRpbmdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgICBsYWJlbDogXCJDb250YWN0XCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBJbWFnZSwgVGV4dCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcImNvbXBvbmVudHMvbGlua1wiO1xyXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi9mb290ZXIuZGF0YVwiO1xyXG5pbXBvcnQgRm9vdGVyTG9nbyBmcm9tIFwiYXNzZXRzL2xvZ28uc3ZnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgc3g9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5mb290ZXIuZm9vdGVyQm90dG9tQXJlYX0+XHJcbiAgICAgICAgICA8TGluayBwYXRoPVwiL1wiPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtGb290ZXJMb2dvfSBhbHQ9XCJMb2dvXCIgLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5mb290ZXIubWVudXN9PlxyXG4gICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgIHtkYXRhLm1lbnVJdGVtLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgcGF0aD17aXRlbS5wYXRofVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ua2V5fVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5mb290ZXIubGlua31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmZvb3Rlci5jb3B5cmlnaHR9PlxyXG4gICAgICAgICAgICBDb3B5cmlnaHQgRGlzY2xhaW1lciB1bmRlciBTZWN0aW9uIDEwNyBvZiB0aGUgY29weXJpZ2h0IGFjdCAxOTc2LFxyXG4gICAgICAgICAgICBhbGxvd2FuY2UgaXMgbWFkZSBmb3IgZmFpciB1c2UgZm9yIHB1cnBvc2VzIHN1Y2ggYXMgY3JpdGljaXNtLFxyXG4gICAgICAgICAgICBjb21tZW50LCBuZXdzIHJlcG9ydGluZywgc2Nob2xhcnNoaXAsIGFuZCByZXNlYXJjaC5cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMuZm9vdGVyLmNvcHlyaWdodH0+XHJcbiAgICAgICAgICAgIERpc2NsYWltZXI6IFVuZGVyIHRoZSBGYWlyIFVzZSBDb3B5cmlnaHQgQWN0IEkgaGF2ZSB0YWtlblxyXG4gICAgICAgICAgICBpbnNwaXJhdGlvbiBhbmQgbXkgZXhwZXJpZW5jZSBmcm9tIG15IHByZXZpb3VzIGVtcGxveWVyIHRvIGRlc2lnblxyXG4gICAgICAgICAgICBhbmQgY29kZSBhIHBlcnNvbmFsIHByb2plY3QgZm9yIGNyZWF0aXZlIHB1cnBvc2VzLiBJIGRvIG5vdCBvd24gYW55XHJcbiAgICAgICAgICAgIExva2FseXN0IGFzc2V0cy5cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZm9vdGVyOiB7XHJcbiAgICBmb290ZXJCb3R0b21BcmVhOiB7XHJcbiAgICAgIGJvcmRlclRvcDogXCIxcHggc29saWRcIixcclxuICAgICAgYm9yZGVyVG9wQ29sb3I6IFwiYm9yZGVyX2NvbG9yXCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBwdDogWzcsIG51bGwsIDhdLFxyXG4gICAgICBwYjogW1wiNDBweFwiLCBudWxsLCBcIjEwMHB4XCJdLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICB9LFxyXG4gICAgbWVudXM6IHtcclxuICAgICAgbXQ6IFszLCA0XSxcclxuICAgICAgbWI6IDIsXHJcbiAgICAgIG5hdjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBsaW5rOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMSwgXCIxNXB4XCJdLFxyXG4gICAgICBjb2xvcjogXCJ0ZXh0XCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICAgIG1iOiAyLFxyXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjM1c1wiLFxyXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgbGluZUhlaWdodDogWzEuNSwgbnVsbCwgMS44XSxcclxuICAgICAgcHg6IFsyLCBudWxsLCA0XSxcclxuICAgICAgXCI6aG92ZXJcIjoge1xyXG4gICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb3B5cmlnaHQ6IHtcclxuICAgICAgZm9udFNpemU6IFsxLCBcIjE1cHhcIl0sXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIHBhdGg6IFwiaG9tZVwiLFxyXG4gICAgbGFiZWw6IFwiSG9tZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCJmZWF0dXJlXCIsXHJcbiAgICBsYWJlbDogXCJGZWF0dXJlc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCJwcmljaW5nXCIsXHJcbiAgICBsYWJlbDogXCJQcmljaW5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcInRlc3RpbW9uaWFsXCIsXHJcbiAgICBsYWJlbDogXCJUZXN0aW1vbmlhbFwiLFxyXG4gIH0sXHJcbl07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgRmxleCwgQnV0dG9uIH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCJjb21wb25lbnRzL2xvZ29cIjtcclxuaW1wb3J0IExvZ29EYXJrIGZyb20gXCJhc3NldHMvbG9nby5zdmdcIjtcclxuaW1wb3J0IE1vYmlsZURyYXdlciBmcm9tIFwiLi9tb2JpbGUtZHJhd2VyXCI7XHJcbmltcG9ydCBtZW51SXRlbXMgZnJvbSBcIi4vaGVhZGVyLmRhdGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IGNsYXNzTmFtZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgc3g9e3N0eWxlcy5oZWFkZXJ9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD1cImhlYWRlclwiPlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8TG9nbyBzcmM9e0xvZ29EYXJrfSAvPlxyXG4gICAgICAgIDxGbGV4IGFzPVwibmF2XCIgc3g9e3N0eWxlcy5uYXZ9PlxyXG4gICAgICAgICAge21lbnVJdGVtcy5tYXAoKG1lbnVJdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIHRvPXttZW51SXRlbS5wYXRofVxyXG4gICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XHJcbiAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bWVudUl0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkb25hdGVfX2J0blwiXHJcbiAgICAgICAgICB2YXJpZW50PVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJHZXQgU3RhcnRlZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkb25hdGVfX2J0blwiXHJcbiAgICAgICAgICB2YXJpZW50PVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJHZXQgU3RhcnRlZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTG9nIEluXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPE1vYmlsZURyYXdlciAvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHBvc2l0aW9uQW5pbSA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgaGVhZGVyOiB7XHJcbiAgICBjb2xvcjogXCJ0ZXh0XCIsXHJcbiAgICBmb250V2VpZ2h0OiBcImJvZHlcIixcclxuICAgIHB5OiA0LFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDAuNHMgZWFzZVwiLFxyXG4gICAgYW5pbWF0aW9uOiBgJHtwb3NpdGlvbkFuaW19IDAuNHMgZWFzZWAsXHJcbiAgICBcIi5kb25hdGVfX2J0blwiOiB7XHJcbiAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgIG1yOiBbMTUsIDIwLCBudWxsLCBudWxsLCAwXSxcclxuICAgICAgbWw6IFtcImF1dG9cIiwgbnVsbCwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICB9LFxyXG4gICAgXCImLnN0aWNreVwiOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kXCIsXHJcbiAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgYm94U2hhZG93OiBcIjAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpXCIsXHJcbiAgICAgIHB5OiAzLFxyXG4gICAgICBcIm5ldiA+IGFcIjoge1xyXG4gICAgICAgIGNvbG9yOiBcInRleHRcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICB9LFxyXG4gIG5hdjoge1xyXG4gICAgbXg6IFwiYXV0b1wiLFxyXG4gICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICBcIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweClcIjoge1xyXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICB9LFxyXG4gICAgYToge1xyXG4gICAgICBmb250U2l6ZTogMixcclxuICAgICAgZm9udFdlaWdodDogXCJib2R5XCIsXHJcbiAgICAgIHB4OiA1LFxyXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBcIjEuMlwiLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjE1c1wiLFxyXG4gICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcclxuICAgICAgfSxcclxuICAgICAgXCImLmFjdGl2ZVwiOiB7XHJcbiAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94IH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCB7IFNjcm9sbGJhcnMgfSBmcm9tIFwicmVhY3QtY3VzdG9tLXNjcm9sbGJhcnNcIjtcclxuaW1wb3J0IERyYXdlciBmcm9tIFwiY29tcG9uZW50cy9kcmF3ZXJcIjtcclxuaW1wb3J0IHsgSW9NZENsb3NlLCBJb01kTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xyXG5pbXBvcnQge1xyXG4gIEZhRmFjZWJvb2tGLFxyXG4gIEZhVHdpdHRlcixcclxuICBGYUdpdGh1YkFsdCxcclxuICBGYURyaWJiYmxlLFxyXG59IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gXCIuL2hlYWRlci5kYXRhXCI7XHJcblxyXG5jb25zdCBzb2NpYWwgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogXCIvXCIsXHJcbiAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9cIixcclxuICAgIGljb246IDxGYVR3aXR0ZXIgLz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi9cIixcclxuICAgIGljb246IDxGYUdpdGh1YkFsdCAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgaWNvbjogPEZhRHJpYmJibGUgLz4sXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vYmlsZURyYXdlcigpIHtcclxuICBjb25zdCBbaXNEcmF3ZXJPcGVuLCBzZXRpc0RyYXdlck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhd2VyXHJcbiAgICAgIHdpZHRoPVwiMzIwcHhcIlxyXG4gICAgICBkcmF3ZXJIYW5kbGVyPXtcclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaGFuZGxlcn0+XHJcbiAgICAgICAgICA8SW9NZE1lbnUgc2l6ZT1cIjI2cHhcIiAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICB9XHJcbiAgICAgIG9wZW49e2lzRHJhd2VyT3Blbn1cclxuICAgICAgdG9nZ2xlSGFuZGxlcj17KCkgPT4gc2V0aXNEcmF3ZXJPcGVuKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpfVxyXG4gICAgICBjbG9zZUJ1dHRvbj17PElvTWRDbG9zZSBzaXplPVwiMjRweFwiIGNvbG9yPVwiMDAwMDAwXCIgLz59XHJcbiAgICAgIGRyYXdlclN0eWxlPXtzdHlsZXMuZHJhd2VyfVxyXG4gICAgICBjbG9zZUJ0blN0eWxlPXtzdHlsZXMuY2xvc2V9XHJcbiAgICA+XHJcbiAgICAgIDxTY3JvbGxiYXJzIGF1dG9IaWRlPlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKG1lbnVJdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIHRvPXttZW51SXRlbS5wYXRofVxyXG4gICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHttZW51SXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMubWVudUZvb3Rlcn0+XHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5zb2NpYWx9PlxyXG4gICAgICAgICAgICAgIHtzb2NpYWwubWFwKChzb2NpYWxJdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Qm94IGFzPVwic3BhblwiIGtleT17aX0gc3g9e3N0eWxlcy5zb2NpYWwuaWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtzb2NpYWxJdGVtLnBhdGh9Pntzb2NpYWxJdGVtLmljb259PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvU2Nyb2xsYmFycz5cclxuICAgIDwvRHJhd2VyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBoYW5kbGVyOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGZsZXhTaHJpbms6IFwiMFwiLFxyXG4gICAgd2lkdGg6IFwiMjZweFwiLFxyXG5cclxuICAgIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KVwiOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBkcmF3ZXI6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZGFya1wiLFxyXG4gIH0sXHJcblxyXG4gIGNsb3NlOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICB0b3A6IFwiMjVweFwiLFxyXG4gICAgcmlnaHQ6IFwiMzBweFwiLFxyXG4gICAgekluZGV4OiBcIjFcIixcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgfSxcclxuXHJcbiAgY29udGVudDoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIHB0OiBcIjEwMHB4XCIsXHJcbiAgICBwYjogXCI0MHB4XCIsXHJcbiAgICBweDogXCIzMHB4XCIsXHJcbiAgfSxcclxuXHJcbiAgbWVudToge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgYToge1xyXG4gICAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXHJcbiAgICAgIGNvbG9yOiBcInRleHRfd2hpdGVcIixcclxuICAgICAgcHk6IFwiMTVweFwiLFxyXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNlOGU1ZTVcIixcclxuICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4yNXNcIixcclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICBjb2xvcjogXCJzZWNvbmRhcnlcIixcclxuICAgICAgfSxcclxuICAgICAgXCImLmFjdGl2ZVwiOiB7XHJcbiAgICAgICAgY29sb3I6IFwic2Vjb25kYXJ5XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIG1lbnVGb290ZXI6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBtdDogXCJhdXRvXCIsXHJcbiAgfSxcclxuXHJcbiAgc29jaWFsOiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuXHJcbiAgICBpY29uOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgY29sb3I6IFwidGV4dFwiLFxyXG4gICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIG1yOiBcIjE1cHhcIixcclxuICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4yNXNcIixcclxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgXCI6bGFzdC1jaGlsZFwiOiB7XHJcbiAgICAgICAgbXI6IFwiMFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgIGNvbG9yOiBcInNlY29uZGFyeVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBidXR0b246IHtcclxuICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICBmb250U2l6ZTogXCIxNHB4XCIsXHJcbiAgICBmdzogXCI3MDBcIixcclxuICAgIGhlaWdodDogXCI0NXB4XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBweTogXCIwXCIsXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN0aWNreSBmcm9tIFwicmVhY3Qtc3RpY2t5bm9kZVwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXIvZm9vdGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW2lzU3RpY2t5LCBzZXRJc1N0aWNreV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN0YXRlQ2hhbmdlID0gKHN0YXR1cykgPT4ge1xyXG4gICAgaWYgKHN0YXR1cy5zdGF0dXMgPT09IFN0aWNreS5TVEFUVVNfRklYRUQpIHtcclxuICAgICAgc2V0SXNTdGlja3kodHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1cy5zdGF0dXMgPT09IFN0aWNreS5TVEFUVVNfT1JJR0lOQUwpIHtcclxuICAgICAgc2V0SXNTdGlja3koZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxTdGlja3kgaW5uZXJaPXsxMDAxfSB0b3A9ezB9IG9uU3RhdGVDaGFuZ2U9e2hhbmRsZVN0YXRlQ2hhbmdlfT5cclxuICAgICAgICA8SGVhZGVyIGNsYXNzTmFtZT17YCR7aXNTdGlja3kgPyBcInN0aWNreVwiIDogXCJ1blN0aWNreVwifWB9IC8+XHJcbiAgICAgIDwvU3RpY2t5PlxyXG4gICAgICA8bWFpbiBpZD1cImNvbnRlbnRcIiBzeD17eyB2YXJpYW50OiBcImxheW91dC5tYWluXCIgfX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBOYXZMaW5rIGFzIE1lbnVMaW5rLCBMaW5rIGFzIEEgfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOYXZMaW5rKHsgcGF0aCwgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcclxuICByZXR1cm4gPGgxPk5hdkxpbms8L2gxPjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExpbmsoeyBwYXRoLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QSB7Li4ucmVzdH0gaHJlZj17cGF0aH0+XHJcbiAgICAgIHtjaGlsZHJlbiB8fCBsYWJlbH1cclxuICAgIDwvQT5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmxleCwgQm94LCBJY29uQnV0dG9uIH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0KHsgaXRlbXMgPSBbXSwgcGFyZW50U3R5bGUsIGNoaWxkU3R5bGUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIGFzPVwidWxcIlxyXG4gICAgICBzeD17e1xyXG4gICAgICAgIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgIC4uLnBhcmVudFN0eWxlLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7aXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgIGNsYXNzTmFtZT17aXRlbS5pc0F2YWlsYWJsZSA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cclxuICAgICAgICAgIGFzPVwibGlcIlxyXG4gICAgICAgICAgc3g9e3sgLi4uY2hpbGRTdHlsZSB9fVxyXG4gICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIHN4PXtzdHlsZXMubGlzdEljb259IGFyaWEtbGFiZWw9XCJsaXN0IGljb25cIj5cclxuICAgICAgICAgICAge2l0ZW0uaWNvbn1cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIHtpdGVtLnRleHR9XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICApKX1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBsaXN0SWNvbjoge1xyXG4gICAgd2lkdGg6IFtcIjI1cHhcIiwgXCIzNXB4XCJdLFxyXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcclxuICAgIGNvbG9yOiBcInByaW1hcnlcIixcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBmb250U2l6ZTogWzMsIDVdLFxyXG4gICAgbWw6IFwiLTFweFwiLFxyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICAgIG10OiBcIjJweFwiLFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEltYWdlIH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiY29tcG9uZW50cy9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvKHsgc3JjLCAuLi5yZXN0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmtcclxuICAgICAgcGF0aD1cIi9cIlxyXG4gICAgICBzeD17e1xyXG4gICAgICAgIHZhcmlhbnQ6IFwibGlua3MubG9nb1wiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgbXI6IDE1LFxyXG4gICAgICB9fVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgPEltYWdlIHNyYz17c3JjfSBhbHQ9XCJKb25hdGhhbiBEYXlzIHNvY2lhbCBtZWRpYSBsb2dvXCIgLz5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IEJveCwgQ2FyZCwgVGV4dCwgSGVhZGluZywgQnV0dG9uIH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4vbGlzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2VDYXJkKHtcclxuICBkYXRhOiB7XHJcbiAgICBoZWFkZXIsXHJcbiAgICBuYW1lLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBwcmljZVdpdGhVbml0LFxyXG4gICAgYnV0dG9uVGV4dCA9IFwiU3RhcnQgRnJlZSBUcmlhbFwiLFxyXG4gICAgYW5vdGhlck9wdGlvbixcclxuICAgIHBvaW50cyxcclxuICB9LFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkXHJcbiAgICAgIGNsYXNzTmFtZT17aGVhZGVyID8gXCJwYWNrYWdlX19jYXJkIGFjdGl2ZVwiIDogXCJwYWNrYWdlX19jYXJkXCJ9XHJcbiAgICAgIHN4PXtzdHlsZXMucHJpY2luZ0JveH1cclxuICAgID5cclxuICAgICAge2hlYWRlciAmJiA8VGV4dCBzeD17c3R5bGVzLmhlYWRlcn0+e2hlYWRlcn08L1RleHQ+fVxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwicGFja2FnZV9faGVhZGVyXCIgc3g9e3N0eWxlcy5wcmljaW5nSGVhZGVyfT5cclxuICAgICAgICAgIDxIZWFkaW5nIGNsYXNzTmFtZT1cInBhY2thZ2VfX25hbWVcIiB2YXJpYW50PVwidGl0bGVcIj5cclxuICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPExpc3QgaXRlbXM9e3BvaW50c30gY2hpbGRTdHlsZT17c3R5bGVzLmxpc3RJdGVtfSAvPlxyXG4gICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInBhY2thZ2VfX3ByaWNlXCIgc2V4PXtzdHlsZXMucHJpY2V9PlxyXG4gICAgICAgICAge3ByaWNlV2l0aFVuaXR9XHJcbiAgICAgICAgICA8c3Bhbj4vTW9udGhseTwvc3Bhbj5cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJ1dHRvbkdyb3VwfT5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBhcmlhLWxhYmVsPXtidXR0b25UZXh0fT5cclxuICAgICAgICAgICAge2J1dHRvblRleHR9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIHthbm90aGVyT3B0aW9uICYmIChcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0QnV0dG9uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmcmVlX190cmlhbFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YW5vdGhlck9wdGlvbn1cclxuICAgICAgICAgICAgICBzeD17eyBjb2xvcjogXCJibGFja1wiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7YW5vdGhlck9wdGlvbn1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgcHJpY2luZ0JveDoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiAyMCxcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzXCIsXHJcbiAgICBwOiBbXCIzNXB4IDI1cHhcIiwgbnVsbCwgbnVsbCwgXCI0MHB4XCJdLFxyXG4gICAgd2lkdGg6IFtcIjEwMCVcIiwgXCI3NSVcIiwgXCIxMDAlXCJdLFxyXG4gICAgbWI6IFwiNDBweFwiLFxyXG4gICAgbXQ6IFwiNDBweFwiLFxyXG4gICAgbXg6IFswLCBcImF1dG9cIiwgMF0sXHJcbiAgICBcIiY6YmVmb3JlXCI6IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgY29udGVudDogXCInJ1wiLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpXCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCJpbmhlcml0XCIsXHJcbiAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3NcIixcclxuICAgICAgekluZGV4OiAtMSxcclxuICAgIH0sXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBib3hTaGFkb3c6IFwiMHB4IDRweCAyNXB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSkgIWltcG9ydGFudFwiLFxyXG4gICAgICBcIiY6YmVmb3JlXCI6IHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgaGVpZ2h0OiBbXCIyOHB4XCIsIG51bGwsIG51bGwsIFwiMzJweFwiXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dcIixcclxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgZm9udFNpemU6IDEsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgdG9wOiBcIi0xN3B4XCIsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIi0uMTRweFwiLFxyXG4gICAgcHg6IFwiMTJweFwiLFxyXG4gIH0sXHJcbiAgcHJpY2luZ0hlYWRlcjoge1xyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICBtYjogW1wiMzBweFwiLCBudWxsLCBudWxsLCBudWxsLCBcIjQwcHhcIl0sXHJcbiAgICBwOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICAgIGNvbG9yOiBcInRleHRcIixcclxuICAgICAgbGluZUhlaWdodDogXCJoZWFkaW5nXCIsXHJcbiAgICB9LFxyXG4gICAgXCIucGFja2FnZV9fbmFtZVwiOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogWzEsIG51bGwsIDJdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByaWNlOiB7XHJcbiAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICBmb250U2l6ZTogWzQsIG51bGwsIDUsIG51bGwsIFwiMzBweFwiXSxcclxuICAgIGxpbmVIZWlnaHQ6IDEsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIi0wLjU1cHhcIixcclxuICAgIGNvbG9yOiBcInRleHRcIixcclxuICAgIG1hcmdpbkJvdHRvbTogMixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgcHQ6IFs0LCA2XSxcclxuICAgIFwiPiBzcGFuXCI6IHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgcGw6IFwiM3B4XCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06IHtcclxuICAgIGZvbnRGYW1pbHk6IFwiRE0gU2Fuc1wiLFxyXG4gICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxyXG4gICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcclxuICAgIGZvbnRTaXplOiBbMSwgMl0sXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS43NSwgMS42XSxcclxuICAgIG1iOiAzLFxyXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICBjb2xvcjogXCJ0ZXh0XCIsXHJcbiAgICBcIiYuY2xvc2VkXCI6IHtcclxuICAgICAgb3BhY2l0eTogMC41NSxcclxuICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgY29sb3I6IFwiIzc4OEZCNVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1dHRvbkdyb3VwOiB7XHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBtdDogW1wiMzBweFwiLCBudWxsLCBudWxsLCBudWxsLCBcIjM1cHhcIl0sXHJcbiAgICBcIi5mcmVlX190cmFpbFwiOiB7XHJcbiAgICAgIGNvbG9yOiBcInNlY29uZGFyeVwiLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIGZvbnRTaXplOiBbXCIxNHB4XCIsIDFdLFxyXG4gICAgICBwOiBcIjIwcHggMCAwXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmFTdGFyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcblxyXG5jb25zdCBSYXRpbmcgPSAoeyByYXRpbmcgfSkgPT4ge1xyXG4gIGNvbnN0IHRvdGFsUmF0aW5nID0gW107XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICBpZiAoaSA8IHJhdGluZykge1xyXG4gICAgICB0b3RhbFJhdGluZy5wdXNoKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdGFyXCIga2V5PXtpfT5cclxuICAgICAgICAgIDxGYVN0YXIgLz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG90YWxSYXRpbmcucHVzaChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwic3Rhci1vXCIga2V5PXtpfT5cclxuICAgICAgICAgIDxGYVN0YXIgLz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdcIj5cclxuICAgICAgPHVsPnt0b3RhbFJhdGluZ308L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhdGluZztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIFRleHQsIEhlYWRpbmcgfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY3Rpb25IZWFkZXIoeyB0aXRsZSwgc2xvZ2FuLCBpc1doaXRlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17eyB2YXJpYW50OiBcInNlY3Rpb25IZWFkZXJcIiB9fT5cclxuICAgICAgPFRleHRcclxuICAgICAgICBhcz1cInBcIlxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICB2YXJpYW50OiBcInNlY3Rpb25IZWFkZXIuc3ViVGl0bGVcIixcclxuICAgICAgICAgIGNvbG9yOiBpc1doaXRlID8gXCJ3aGl0ZVwiIDogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgICBvcGFjaXR5OiBpc1doaXRlID8gMC43IDogMSxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3Nsb2dhbn1cclxuICAgICAgPC9UZXh0PlxyXG4gICAgICA8SGVhZGluZ1xyXG4gICAgICAgIGFzPVwiaDJcIlxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICB2YXJpYW50OiBcInNlY3Rpb25IZWFkZXIudGl0bGVcIixcclxuICAgICAgICAgIGNvbG9yOiBpc1doaXRlID8gXCJ3aGl0ZVwiIDogXCJoZWFkaW5nXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHt0aXRsZX1cclxuICAgICAgPC9IZWFkaW5nPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNFTyh7XHJcbiAgZGVzY3JpcHRpb24gPSBcIkpvbmF0aGFuIERheXMgU0VPIFdlYlNpdGUgUHJvamVjdFwiLFxyXG4gIGF1dGhvciA9IFwiSm9uYXRoYW4gRGF5c1wiLFxyXG4gIG1ldGEsXHJcbiAgdGl0bGUgPSBcIlNFTyBXZWJzaXRlIFByb2plY3RcIixcclxufSkge1xyXG4gIGNvbnN0IG1ldGFEYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBgZGVzY3JpcHRpb25gLFxyXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3BlcnR5OiBgb2c6dGl0bGVgLFxyXG4gICAgICBjb250ZW50OiB0aXRsZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3BlcnR5OiBgb2c6ZGVzY3JpcHRpb25gLFxyXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3BlcnR5OiBgb2c6dHlwZWAsXHJcbiAgICAgIGNvbnRlbnQ6IGB3ZWJzaXRlYCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOmNhcmRgLFxyXG4gICAgICBjb250ZW50OiBgc3VtbWFyeWAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjpjcmVhdG9yYCxcclxuICAgICAgY29udGVudDogYXV0aG9yLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogYHR3aXR0ZXI6dGl0bGVgLFxyXG4gICAgICBjb250ZW50OiB0aXRsZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOmRlc2NyaXB0aW9uYCxcclxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gIF0uY29uY2F0KG1ldGEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAge21ldGFEYXRhLm1hcCgoeyBuYW1lLCBjb250ZW50IH0sIGkpID0+IChcclxuICAgICAgICA8bWV0YSBrZXk9e2l9IG5hbWU9e25hbWV9IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcbn1cclxuXHJcblNFTy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbGFuZzogYGVuYCxcclxuICBtZXRhOiBbXSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgeyBUZXh0LCBIZWFkaW5nLCBJbWFnZSwgQm94LCBMaW5rIH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWFtQ2FyZCh7IHNyYywgYWx0VGV4dCwgdGl0bGUsIGRlc2lnbmF0aW9uLCBzb2NpYWwgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgIDxJbWFnZSBzcmM9e3NyY30gYWx0PXthbHRUZXh0fSBzeD17c3R5bGVzLm1lbWJlclRodW1ifSAvPlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuaW5mb1dyYXBwZXJ9PlxyXG4gICAgICAgIDxIZWFkaW5nIGNsYXNzTmFtZT1cImluZm9fX25hbWVcIiBzeD17c3R5bGVzLmluZm9XcmFwcGVyLm5hbWV9PlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJpbmZvX19kZXNpZ25hdGlvblwiIHN4PXtzdHlsZXMuaW5mb1dyYXBwZXIuZGVzaWduYXRpb259PlxyXG4gICAgICAgICAge2Rlc2lnbmF0aW9ufVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5zb2NpYWxTaGFyZX0gY2xhc3NOYW1lPVwic29jaWFsX19zaGFyZVwiPlxyXG4gICAgICAgIHtzb2NpYWwubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8TGluayBrZXk9e2l0ZW0uaWR9IGhyZWY9e2l0ZW0ucGF0aH0gY2xhc3NOYW1lPXtpdGVtLm5hbWV9PlxyXG4gICAgICAgICAgICB7aXRlbS5pY29ufVxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJkOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgcHk6IFswLCBudWxsLCA0LCA1LCA2XSxcclxuICAgIHB4OiBbMiwgbnVsbCwgNiwgN10sXHJcbiAgICB0cmFuc2l0aW9uOiBcImVhc2UtaW4tb3V0IDAuNHNcIixcclxuICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBib3hTaGFkb3c6IFtcIm5vbmVcIiwgbnVsbCwgXCIwIDRweCAxMHB4IHJnYmEoMzksIDgzLCAxMjMsIDAuMTIpXCJdLFxyXG4gICAgICBcIi5pbmZvX19uYW1lXCI6IHtcclxuICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiLmluZm9fX2Rlc2lnbmF0aW9uXCI6IHtcclxuICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiLnNvY2lhbF9fc2hhcmVcIjoge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgYToge1xyXG4gICAgICAgICAgbXk6IDAsXHJcbiAgICAgICAgICBweTogWzAsIG51bGwsIDFdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIG1lbWJlclRodW1iOiB7XHJcbiAgICB3aWR0aDogW1wiNzBweFwiLCBcIjgwcHhcIiwgXCIxMDBweFwiLCBudWxsLCBudWxsLCBcIjEzMHB4XCJdLFxyXG4gICAgaGVpZ2h0OiBbXCI3MHB4XCIsIFwiODBweFwiLCBcIjEwMHB4XCIsIG51bGwsIG51bGwsIFwiMTMwcHhcIl0sXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgYm9yZGVyOiBcIjJweCBzb2xpZFwiLFxyXG4gICAgYm9yZGVyQ29sb3I6IFwicHJpbWFyeVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gIH0sXHJcbiAgaW5mb1dyYXBwZXI6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIG10OiBbMywgbnVsbCwgNF0sXHJcbiAgICBuYW1lOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMSwgMiwgMywgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4yNSwgMS4zNV0sXHJcbiAgICAgIHRyYW5zaXRpb246IFwiY29sb3IgMC4yNXNcIixcclxuICAgICAgbWI6IDEsXHJcbiAgICB9LFxyXG4gICAgZGVzaWduYXRpb246IHtcclxuICAgICAgZm9udFNpemU6IFtcIjE0cHhcIiwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiYm9keVwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBcImhlYWRpbmdcIixcclxuICAgICAgY29sb3I6IFwidGV4dFwiLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcImNvbG9yIDAuMjVzXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc29jaWFsU2hhcmU6IHtcclxuICAgIHBvc2l0aW9uOiBbXCJyZWxhdGl2ZVwiLCBudWxsLCBcImFic29sdXRlXCJdLFxyXG4gICAgcmlnaHQ6IFswLCBudWxsLCA2LCBudWxsLCA0LCA2XSxcclxuICAgIGJvdHRvbTogWzAsIG51bGwsIFwiMThweFwiLCA1XSxcclxuICAgIHdpZHRoOiBbXCIxMDAlXCIsIG51bGwsIFwiYXV0b1wiXSxcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogW1wicm93XCIsIG51bGwsIFwiY29sdW1uXCJdLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMC4yNXNcIixcclxuICAgIG9wYWNpdHk6IFsxLCBudWxsLCAwXSxcclxuICAgIHB0OiAyLFxyXG4gICAgYToge1xyXG4gICAgICBmb250U2l6ZTogWzAsIDEsIG51bGwsIDJdLFxyXG4gICAgICBjb2xvcjogW1widGV4dFwiLCBudWxsLCBcInByaW1hcnlcIl0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMWVtXCIsXHJcbiAgICAgIG15OiBbMCwgbnVsbCwgXCItMnB4XCJdLFxyXG4gICAgICBweDogMSxcclxuICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4yNXNcIixcclxuICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICBjb2xvcjogW1wicHJpbWFyeVwiLCBudWxsLCBcInRleHRcIl0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgSGVhZGluZywgVGV4dCwgQnV0dG9uLCBMaW5rIH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0RmVhdHVyZSh7XHJcbiAgc3ViVGl0bGUsXHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgYnRuTmFtZSxcclxuICBidG5VUkwgPSBcIiNcIixcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PlxyXG4gICAgICAgICAge3N1YlRpdGxlfVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICB7ZGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgIDxUZXh0IGFzPVwicFwiIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCIgc3g9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICApfVxyXG5cclxuICAgICAge2J0bk5hbWUgJiYgKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2J0blVSTH0gdmFyaWFudD1cImRlZmF1bHRcIj5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBhcmlhLWxhYmVsPXtidG5OYW1lfT5cclxuICAgICAgICAgICAge2J0bk5hbWV9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2FyZDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgYToge1xyXG4gICAgICBtOiBbXCIwIGF1dG9cIiwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgd3JhcHBlcjoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgbXQ6IC0xLFxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFswLCBudWxsLCAxXSxcclxuICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxyXG4gICAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxyXG4gICAgICBtYjogWzIsIDNdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6IFtcIjEuNXB4XCIsIG51bGwsIFwiMnB4XCJdLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbXCIyNHB4XCIsIG51bGwsIFwiMjhweFwiLCBcIjMwcHhcIiwgXCIzNnB4XCIsIFwiNDJweFwiLCBudWxsLCBcIjQ4cHhcIl0sXHJcbiAgICAgIGNvbG9yOiBcImhlYWRpbmdfc2Vjb25kYXJ5XCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjMsIG51bGwsIG51bGwsIG51bGwsIDEuMl0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6IFwiLS41cHhcIixcclxuICAgICAgbWI6IDUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb246IHtcclxuICAgIGZvbnRTaXplOiBbXCIxNXB4XCIsIDIsIG51bGwsIG51bGwsIG51bGwsIFwiMTdweFwiLCBudWxsLCAzXSxcclxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAyLCBudWxsLCBcIjIuMlwiXSxcclxuICAgIGNvbG9yOiBcInRleHRfc2Vjb25kYXJ5XCIsXHJcbiAgICBtYjogXCIzMHB4XCIsXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCB0aGVtZSBmcm9tIFwidGhlbWVcIjtcclxuXHJcbmltcG9ydCBTRU8gZnJvbSBcImNvbXBvbmVudHMvc2VvXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uL3NlY3Rpb25zL2Jhbm5lclwiO1xyXG5pbXBvcnQgS2V5RmVhdHVyZSBmcm9tIFwiLi4vc2VjdGlvbnMva2V5LWZlYXR1cmVcIjtcclxuaW1wb3J0IFNlcnZpY2VTZWN0aW9uIGZyb20gXCIuLi9zZWN0aW9ucy9zZXJ2aWNlLXNlY3Rpb25cIjtcclxuaW1wb3J0IEZlYXR1cmUgZnJvbSBcIi4uL3NlY3Rpb25zL2ZlYXR1cmVcIjtcclxuaW1wb3J0IENvcmVGZWF0dXJlIGZyb20gXCIuLi9zZWN0aW9ucy9jb3JlLWZlYXR1cmVcIjtcclxuaW1wb3J0IFdvcmtGbG93IGZyb20gXCIuLi9zZWN0aW9ucy93b3JrZmxvd1wiO1xyXG5pbXBvcnQgUGFja2FnZSBmcm9tIFwiLi4vc2VjdGlvbnMvcGFja2FnZVwiO1xyXG5pbXBvcnQgVGVhbVNlY3Rpb24gZnJvbSBcIi4uL3NlY3Rpb25zL3RlYW0tc2VjdGlvblwiO1xyXG5pbXBvcnQgVGVzdGltb25pYWxDYXJkIGZyb20gXCIuLi9zZWN0aW9ucy90ZXN0aW1vbmlhbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxTRU8gdGl0bGU9XCJKb25hdGhhbiBEYXlzIFNFTyBQcm9qZWN0XCIgLz5cclxuICAgICAgICA8QmFubmVyIC8+XHJcbiAgICAgICAgPEtleUZlYXR1cmUgLz5cclxuICAgICAgICA8U2VydmljZVNlY3Rpb24gLz5cclxuICAgICAgICA8RmVhdHVyZSAvPlxyXG4gICAgICAgIDxDb3JlRmVhdHVyZSAvPlxyXG4gICAgICAgIDxXb3JrRmxvdyAvPlxyXG4gICAgICAgIDxQYWNrYWdlIC8+XHJcbiAgICAgICAgPFRlYW1TZWN0aW9uIC8+XHJcbiAgICAgICAgPFRlc3RpbW9uaWFsQ2FyZCAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEhlYWRpbmcsIFRleHQsIEltYWdlLCBCdXR0b24gfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IEJhbm5lckltZyBmcm9tIFwiYXNzZXRzL2Jhbm5lci10aHVtYi5wbmdcIjtcclxuaW1wb3J0IFNoYXBlTGVmdCBmcm9tIFwiYXNzZXRzL3NoYXBlLWxlZnQucG5nXCI7XHJcbmltcG9ydCBTaGFwZVJpZ2h0IGZyb20gXCJhc3NldHMvc2hhcGUtcmlnaHQucG5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYW5uZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXtzdHlsZXMuYmFubmVyfSBpZD1cImhvbWVcIj5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmJhbm5lci5jb250YWluZXJ9PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5iYW5uZXIuY29udGVudEJveH0+XHJcbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgdmFyaWFudD1cImhlcm9QcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIEdhaW4gYW4gZWRnZSBvbiBTRU8gd2l0aCBvdXIgc2VydmljZXNcclxuICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHZhcmlhbnQ9XCJoZXJvU2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgIFJpc2UgdGhyb3VnaCB0aGUgcmFua3Mgb2YgR29vZ2xlIHdpdGggb3VyIGFmZm9yZGFibGUgcGxhbnMhIFdpdGggb3VyXHJcbiAgICAgICAgICAgIGhlbHAgeW91J2xsIHNlZSB3ZWIgdHJhZmZpYyBnbyB0aHJvdWdoIHRoZSByb29mIVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiPkZyZWUgUW91dGU8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYmFubmVyLmltYWdlQm94fT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e0Jhbm5lckltZ30gYWx0PVwiYmFubmVyXCI+PC9JbWFnZT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGJhbm5lcjoge1xyXG4gICAgcHQ6IFtcIjE0MHB4XCIsIFwiMTQ1cHhcIiwgXCIxNTVweFwiLCBcIjE3MHB4XCIsIG51bGwsIG51bGwsIFwiMTgwcHhcIiwgXCIyMTVweFwiXSxcclxuICAgIHBiOiBbMiwgbnVsbCwgMCwgbnVsbCwgMiwgMCwgbnVsbCwgNV0sXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgekluZGV4OiAyLFxyXG4gICAgXCImOjpiZWZvcmVcIjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIGJvdHRvbTogNixcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICB6SW5kZXg6IC0xLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtTaGFwZUxlZnR9KWAsXHJcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiYm90dG9tIGxlZnRcIixcclxuICAgICAgYmFja2dyb3VuZFNpemU6IFwiMzYlXCIsXHJcbiAgICB9LFxyXG4gICAgXCImOjphZnRlclwiOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgYm90dG9tOiBcIjQwcHhcIixcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgekluZGV4OiAtMSxcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7U2hhcGVSaWdodH0pYCxcclxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJib3R0b20gcmlnaHRcIixcclxuICAgICAgYmFja2dyb3VuZFNpemU6IFwiMzIlXCIsXHJcbiAgICB9LFxyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgIG1pbkhlaWdodDogXCJpbmhlcml0XCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgICBjb250ZW50Qm94OiB7XHJcbiAgICAgIHdpZHRoOiBbXCIxMDAlXCIsIFwiOTAlXCIsIFwiNTM1cHhcIiwgbnVsbCwgXCI1NyVcIiwgXCI2MCVcIiwgXCI2OCVcIiwgXCI2MCVcIl0sXHJcbiAgICAgIG14OiBcImF1dG9cIixcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBtYjogW1wiNDBweFwiLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA3XSxcclxuICAgIH0sXHJcbiAgICBpbWFnZUJveDoge1xyXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXHJcbiAgICAgIG1iOiBbMCwgbnVsbCwgLTYsIG51bGwsIG51bGwsIFwiLTQwcHhcIiwgbnVsbCwgLTNdLFxyXG4gICAgICBpbWc6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgIGhlaWdodDogWzI0NSwgXCJhdXRvXCJdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgSW1hZ2UgfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IFRleHRGZWF0dXJlIGZyb20gXCJjb21wb25lbnRzL3RleHQtZmVhdHVyZVwiO1xyXG5cclxuaW1wb3J0IEZlYXR1cmVUaHVtYiBmcm9tIFwiYXNzZXRzL2NvcmUtZmVhdHVyZS5wbmdcIjtcclxuaW1wb3J0IHNoYXBlUGF0dGVybiBmcm9tIFwiYXNzZXRzL3NoYXBlLXBhdHRlcm4yLnBuZ1wiO1xyXG5cclxuY29uc3QgZGF0YSA9IHtcclxuICBzdWJUaXRsZTogXCJDb3JlIEZlYXR1cmVcIixcclxuICB0aXRsZTogXCJPbmUgb2Ygb3VyIGNvcmUgZmVhdHVyZXMgaXMgVm9pY2UgU2VhcmNoXCIsXHJcbiAgZGVzY3JpcHRpb246XHJcbiAgICBcIkFzIG9mIEphbnVhcnkgMjAxOCB0aGVyZSB3ZXJlIGFuIGVzdGltYXRlZCAxIGJpbGxpb24gdm9pY2Ugc2VhcmNoZXMgcGVyIG1vbnRoLCBhbmQgaXQgaXMgZXN0aW1hdGVkIHRvIGdyb3cgdG8gYmVjb21lIDUwJSBvZiBhbGwgc2VhcmNoZXMgYnkgMjAyMC5cIiArXHJcbiAgICBcIiBWaXJ0dWFsIGFzc2lzdGFudHMgc3VjaCBhcyBBbGV4YSwgR29vZ2xlIEFzc2lzdGFudCwgU0lSSSwgYW5kIENvcnRhbmEgYWxsIGhlbHAgbW9kZXJuIGJ1c2luZXNzZXMgYW5kIGNvbnN1bWVycyBmaW5kIGluZm9ybWF0aW9uLCB0YWtlIGFjdGlvbiwgYW5kIHNvbHZlIHByb2JsZW1zLiBcIixcclxuICBidG5OYW1lOiBcIkdldCBTdGFydGVkXCIsXHJcbiAgYnRuVVJMOiBcIiNcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcmVGZWF0dXJlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiBcInNlY3Rpb24uY29yZUZlYXR1cmVcIiB9fT5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lckJveH0+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnRCb3h9PlxyXG4gICAgICAgICAgPFRleHRGZWF0dXJlXHJcbiAgICAgICAgICAgIHN1YlRpdGxlPXtkYXRhLnN1YlRpdGxlfVxyXG4gICAgICAgICAgICB0aXRsZT17ZGF0YS50aXRsZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2RhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIGJ0bk5hbWU9e2RhdGEuYnRuTmFtZX1cclxuICAgICAgICAgICAgYnRuVVJMPXtkYXRhLmJ0blVSTH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnRodW1ibmFpbH0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtGZWF0dXJlVGh1bWJ9IGFsdD1cIlRodW1ibmFpbFwiIC8+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuc2hhcGVCb3h9PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtzaGFwZVBhdHRlcm59IGFsdD1cIlNoYXBlXCIgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29udGFpbmVyQm94OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICBmbGV4V3JhcDogW1wid3JhcFwiLCBudWxsLCBudWxsLCBcIm5vd3JhcFwiXSxcclxuICAgIHBiOiBbMCwgNywgMCwgbnVsbCwgN10sXHJcbiAgfSxcclxuICBjb250ZW50Qm94OiB7XHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgcHg6IFswLCBudWxsLCBcIjMwcHhcIiwgMF0sXHJcbiAgICB0ZXh0QWxpZ246IFtcImNlbnRlclwiLCBudWxsLCBudWxsLCBcImxlZnRcIl0sXHJcbiAgICB3aWR0aDogW1wiMTAwJVwiLCBcIjgwJVwiLCBudWxsLCAzNDAsIDQwMCwgNDMwLCBudWxsLCA0ODVdLFxyXG4gICAgcGI6IFtcIjUwcHhcIiwgXCI2MHB4XCIsIG51bGwsIDBdLFxyXG4gICAgbXg6IFtcImF1dG9cIiwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICBcIi5kZXNjcmlwdGlvblwiOiB7XHJcbiAgICAgIHByOiBbMCwgbnVsbCwgNiwgNywgNl0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGh1bWJuYWlsOiB7XHJcbiAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgbXI6IFwiYXV0b1wiLFxyXG4gICAgbWw6IFtcImF1dG9cIiwgbnVsbCwgbnVsbCwgbnVsbCwgN10sXHJcbiAgICBcIj4gaW1nXCI6IHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgekluZGV4OiAxLFxyXG4gICAgICBoZWlnaHQ6IFszMTAsIFwiYXV0b1wiXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzaGFwZUJveDoge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIGJvdHRvbTogLTY1LFxyXG4gICAgcmlnaHQ6IC0xNjUsXHJcbiAgICB6SW5kZXg6IC0xLFxyXG4gICAgZGlzcGxheTogW1wibm9uZVwiLCBcImlubGluZS1ibG9ja1wiLCBcIm5vbmVcIiwgbnVsbCwgXCJpbmxpbmUtYmxvY2tcIl0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXJcIjtcclxuaW1wb3J0IEZlYXR1cmVDYXJkIGZyb20gXCJjb21wb25lbnRzL2ZlYXR1cmUtY2FyZC5qc1wiO1xyXG5pbXBvcnQgUGVyZm9ybWFuY2UgZnJvbSBcImFzc2V0cy9mZWF0dXJlL3BlcmZvcm1hbmNlLnN2Z1wiO1xyXG5pbXBvcnQgUGFydG5lcnNoaXAgZnJvbSBcImFzc2V0cy9mZWF0dXJlL3BhcnRuZXJzaGlwLnN2Z1wiO1xyXG5pbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gXCJhc3NldHMvZmVhdHVyZS9zdWJzY3JpcHRpb24uc3ZnXCI7XHJcbmltcG9ydCBTdXBwb3J0IGZyb20gXCJhc3NldHMvZmVhdHVyZS9zdXBwb3J0LnN2Z1wiO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGltZ1NyYzogUGVyZm9ybWFuY2UsXHJcbiAgICBhbHRUZXh0OiBcIlNFTyBXZWIgRGVzaWduXCIsXHJcbiAgICB0aXRsZTogXCJTRU8gV2ViIERlc2lnblwiLFxyXG4gICAgdGV4dDpcclxuICAgICAgXCJXZSB3aWxsIGNyZWF0ZSBhIGNvbXByZWhlbnNpdmUgd2Vic2l0ZSBTRU8gc3RyYXRlZ3kgYW5kIG1hbmFnZSB0aGUgd2Vic2l0ZSBsYXVuY2ggdG8gZW5zdXJlIHRoZSBiZXN0IHBvc3NpYmxlIG91dGNvbWUuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltZ1NyYzogUGFydG5lcnNoaXAsXHJcbiAgICBhbHRUZXh0OiBcIlNwZWVkIE9wdGltaXphdGlvblwiLFxyXG4gICAgdGl0bGU6IFwiU3BlZWQgT3B0aW1pemF0aW9uXCIsXHJcbiAgICB0ZXh0OlxyXG4gICAgICBcIldlIGNhbiB3b3JrIHdpdGggeW91ciBleGlzdGluZyBkZXZlbG9wZXIgb3IgYnJpbmcgaW4gb3VyIGRldiB0ZWFtIHRvIG9wdGltaXplIHlvdXIgd2Vic2l0ZeKAmXMgc3BlZWQgcGVyZm9ybWFuY2UuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGltZ1NyYzogU3Vic2NyaXB0aW9uLFxyXG4gICAgYWx0VGV4dDogXCJQZW50YWx5IFJlY292ZXJ5XCIsXHJcbiAgICB0aXRsZTogXCJQZW5hbHR5IFJlY292ZXJ5XCIsXHJcbiAgICB0ZXh0OiBcIkFzc2VzcyB5b3VyIHNpdGUgZm9yIHBlbmFsdGllcywgYWRkcmVzcyBhbnkgaWRlbnRpZmllZCBpc3N1ZXNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgaW1nU3JjOiBTdXBwb3J0LFxyXG4gICAgYWx0VGV4dDogXCJWaWRlbyBTRU9cIixcclxuICAgIHRpdGxlOiBcIlZpZGVvIFNFT1wiLFxyXG4gICAgdGV4dDpcclxuICAgICAgXCJBbGlnbiBhbGlnbiB1bmlxdWUgbGFyZ2Utc2NhbGUgcGxhdGZvcm1zIHdpdGggeW91ciBsYXJnZXIgU0VPIGFuZCBkaWdpdGFsIHN0cmF0ZWd5LlwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiBcInNlY3Rpb24uZmVhdHVyZVwiIH19PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICBzbG9nYW49XCJQcmltYXJ5IEZlYXR1cmVzXCJcclxuICAgICAgICAgIHRpdGxlPVwiV2hhdCB3ZSBjYW4gYW5kIHdpbGwgZG8gZm9yIHlvdVwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8RmVhdHVyZUNhcmRcclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgc3JjPXtpdGVtLmltZ1NyY31cclxuICAgICAgICAgICAgICBhbHQ9e2l0ZW0uYWx0VGV4dH1cclxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICB0ZXh0PXtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBncmlkOiB7XHJcbiAgICBwdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgcHg6IFs1LCA2LCAwLCBudWxsLCA3LCA4LCA3XSxcclxuICAgIGdyaWRHYXA6IFtcclxuICAgICAgXCI0MHB4IDBcIixcclxuICAgICAgbnVsbCxcclxuICAgICAgXCI0NXB4IDMwcHhcIixcclxuICAgICAgbnVsbCxcclxuICAgICAgXCI2MHB4IDUwcHhcIixcclxuICAgICAgXCI3MHB4IDUwcHhcIixcclxuICAgICAgbnVsbCxcclxuICAgICAgXCI4MHB4IDkwcHhcIixcclxuICAgIF0sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXCJyZXBlYXQoMSwxZnIpXCIsIG51bGwsIFwicmVwZWF0KDIsMWZyKVwiXSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlclwiO1xyXG5pbXBvcnQgRmVhdHVyZUNhcmRDb2x1bW4gZnJvbSBcImNvbXBvbmVudHMvZmVhdHVyZS1jYXJkLWNvbHVtbi5qc1wiO1xyXG5pbXBvcnQgUGVyZm9ybWFuY2UgZnJvbSBcImFzc2V0cy9rZXktZmVhdHVyZS9wZXJmb3JtYW5jZS5zdmdcIjtcclxuaW1wb3J0IFBhcnRuZXJzaGlwIGZyb20gXCJhc3NldHMva2V5LWZlYXR1cmUvcGFydG5lcnNoaXAuc3ZnXCI7XHJcbmltcG9ydCBTdWJzY3JpcHRpb24gZnJvbSBcImFzc2V0cy9rZXktZmVhdHVyZS9zdWJzY3JpcHRpb24uc3ZnXCI7XHJcbmltcG9ydCBTdXBwb3J0IGZyb20gXCJhc3NldHMva2V5LWZlYXR1cmUvc3VwcG9ydC5zdmdcIjtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWdTcmM6IFBlcmZvcm1hbmNlLFxyXG4gICAgYWx0VGV4dDogXCJEcml2ZSBXZWIgVHJhZmZpY1wiLFxyXG4gICAgdGl0bGU6IFwiRHJpdmUgV2ViIFRyYWZmaWNcIixcclxuICAgIHRleHQ6IFwiSW5jcmVhc2Ugb3JnYW5pYyB0cmFmZmljIHRvIHlvdXIgc2l0ZS5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgaW1nU3JjOiBQYXJ0bmVyc2hpcCxcclxuICAgIGFsdFRleHQ6IFwiTGVhZGVycyBpbiBpbmR1c3RyeVwiLFxyXG4gICAgdGl0bGU6IFwiQmVjb21lIHRoZSBhdXRob3JpdHkgaW4geW91ciBpbmR1c3RyeVwiLFxyXG4gICAgdGV4dDogXCJHZXQgYWhlYWQgb2YgdGhlIGNvbXBldGl0aW9uIGJ5IGxlYWRpbmcgZnJvbSB0aGVpciBzZWFyY2hlcy5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgaW1nU3JjOiBTdWJzY3JpcHRpb24sXHJcbiAgICBhbHRUZXh0OiBcIkNvbnZlcnQgaW50byBsZWFkc1wiLFxyXG4gICAgdGl0bGU6IFwiSGVscCBjb252ZXJ0IHlvdXIgd2Vic2l0ZSB2aXNpdG9ycyBpbnRvIGxlYWRzXCIsXHJcbiAgICB0ZXh0OiBcIk5hdHVyYWwgc2VhcmNoIHJlc3VsdHMgZ2VuZXJhdGUgbmF0dXJhbCBsZWFkc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBpbWdTcmM6IFN1cHBvcnQsXHJcbiAgICBhbHRUZXh0OiBcIkNvbm5lY3Qgd2l0aCB5b3VyIHRhcmdldCBhdWRpZW5jZVwiLFxyXG4gICAgdGl0bGU6IFwiQ29ubmVjdCB3aXRoIHlvdXIgdGFyZ2V0IGF1ZGllbmNlXCIsXHJcbiAgICB0ZXh0OlxyXG4gICAgICBcIkNyZWF0ZSB1bmlxdWUsIHZhbHVhYmxlIGluc2lnaHRzIHRoYXQgY2FuIG9ubHkgY29tZSBmcm9tIHlvdSwgbm90IHlvdXIgY29tcGV0aXRvcnMuXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtleUZlYXR1cmUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6IFwic2VjdGlvbi5rZXlGZWF0dXJlXCIgfX0gaWQ9XCJmZWF0dXJlXCI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHNsb2dhbj1cIkhpZ2ggUXVhbGl0eSBSZXR1cm5zXCJcclxuICAgICAgICAgIHRpdGxlPVwiQWNoaWV2ZSB0aGVzZSByZXN1bHRzXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxGZWF0dXJlQ2FyZENvbHVtblxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nU3JjfVxyXG4gICAgICAgICAgICAgIGFsdD17aXRlbS5hbHRUZXh0fVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHRleHQ9e2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGdyaWQ6IHtcclxuICAgIHdpZHRoOiBbXCIxMDAlXCIsIFwiODAlXCIsIFwiMTAwJVwiXSxcclxuICAgIG14OiBcImF1dG9cIixcclxuICAgIGdyaWRHYXA6IFtcclxuICAgICAgXCIzNXB4IDBcIixcclxuICAgICAgbnVsbCxcclxuICAgICAgXCI0MHB4IDQwcHhcIixcclxuICAgICAgXCI1MHB4IDYwcHhcIixcclxuICAgICAgXCIzMHB4XCIsXHJcbiAgICAgIFwiNTBweCA0MHB4XCIsXHJcbiAgICAgIFwiNTVweCA5MHB4XCIsXHJcbiAgICBdLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICBcInJlcGVhdCgxLDFmcilcIixcclxuICAgICAgbnVsbCxcclxuICAgICAgXCJyZXBlYXQoMiwxZnIpXCIsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIFwicmVwZWF0KDQsMWZyKVwiLFxyXG4gICAgXSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgRmxleCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiO1xyXG5pbXBvcnQgUHJpY2VDYXJkIGZyb20gXCJjb21wb25lbnRzL3ByaWNlLWNhcmRcIjtcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gXCJjb21wb25lbnRzL2J1dHRvbi1ncm91cFwiO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlclwiO1xyXG5pbXBvcnQgeyBJb0lvc0NoZWNrbWFya0NpcmNsZSwgSW9Jb3NDbG9zZUNpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5cclxuY29uc3QgcGFja2FnZXMgPSB7XHJcbiAgbW9udGhseTogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmFtZTogXCJCYXNpYyBQbGFuXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkZvciBzbWFsbCB0ZWFtcyBvciBvZmZpY2VcIixcclxuICAgICAgYnV0dG9uVGV4dDogXCJHZXQgQSBQcm9wb3NhbFwiLFxyXG4gICAgICBwcmljZVdpdGhVbml0OiBcIiQxLDAwMFwiLFxyXG4gICAgICBwb2ludHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiMTAwIGtleXBocmFzZXMgb3B0aW1pemVkXCIsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogXCIyMCBwYWdlcyBvcHRpbWl6ZWRcIixcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiBcIjQuNSBjb250ZW50LCBvdXRyZWFjaCwgVVgsIG9yIENSTyBhc3NldHMgcGVyIHF1YXJ0ZXJcIixcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2xvc2VDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiBcIjQgY3VzdG9tIGRhc2hib2FyZHNcIixcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6IFwiQ29ycG9yYXRlIFBsYW5cIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiRm9yIG1lZGl1bS1zaXplZCBidXNpbmVzcy5cIixcclxuICAgICAgcHJpY2VXaXRoVW5pdDogXCIkMiw1MDBcIixcclxuICAgICAgYnV0dG9uVGV4dDogXCJHZXQgYSBwcm9wb3NhbFwiLFxyXG4gICAgICBhbm90aGVyT3B0aW9uOiBcIk9yIFN0YXJ0IDE0IERheXMgdHJhaWxcIixcclxuICAgICAgcG9pbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiBcIjE1MCBrZXlwaHJhc2VzIG9wdGltaXplZFwiLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMixcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiMzAgcGFnZXMgb3B0aW1pemVkXCIsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogXCI5IGNvbnRlbnQsIG91dHJlYWNoLCBVWCwgb3IgQ1JPIGFzc2V0cyBwZXIgcXVhcnRlclwiLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiOCBjdXN0b20gZGFzaGJvYXJkc1wiLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgaGVhZGVyOiBcIlN1Z2dlc3RlZFwiLFxyXG4gICAgICBoZWFkZXJJY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgIG5hbWU6IFwiRW50ZXJwcmlzZSBQbGFuXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkZvciBpbnRlcm5hdGlvbmFsIGJ1c2luZXNzZXMuXCIsXHJcbiAgICAgIHByaWNlV2l0aFVuaXQ6IFwiJDUsMDAwXCIsXHJcbiAgICAgIGJ1dHRvblRleHQ6IFwiR2V0IGEgcHJvcG9zYWxcIixcclxuICAgICAgYW5vdGhlck9wdGlvbjogXCJPciBTdGFydCAxNCBEYXlzIHRyYWlsXCIsXHJcbiAgICAgIHBvaW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogXCIyMDAga2V5cGhyYXNlcyBvcHRpbWl6ZWRcIixcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiBcIjQwIHBhZ2VzIG9wdGltaXplZFwiLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiMTIgY29udGVudCwgb3V0cmVhY2gsIFVYLCBvciBDUk8gYXNzZXRzIHBlciBxdWFydGVyXCIsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogXCIxMiBjdXN0b20gZGFzaGJvYXJkc1wiLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBhbm51YWw6IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIG5hbWU6IFwiQmFzaWMgUGxhblwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJGb3Igc21hbGwgdGVhbXMgb3Igb2ZmaWNlXCIsXHJcbiAgICAgIGJ1dHRvblRleHQ6IFwiR2V0IEEgUHJvcG9zYWxcIixcclxuICAgICAgcHJpY2VXaXRoVW5pdDogXCIkMSwwMDBcIixcclxuICAgICAgcG9pbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiBcIjE1MDAga2V5cGhyYXNlcyBvcHRpbWl6ZWRcIixcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiBcIjMwMCBwYWdlcyBvcHRpbWl6ZWRcIixcclxuICAgICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICBpY29uOiA8SW9Jb3NDaGVja21hcmtDaXJjbGUgLz4sXHJcbiAgICAgICAgICB0ZXh0OiBcIjU0IGNvbnRlbnQsIG91dHJlYWNoLCBVWCwgb3IgQ1JPIGFzc2V0cyBwZXIgcXVhcnRlclwiLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgIGljb246IDxJb0lvc0Nsb3NlQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogXCI3NSBjdXN0b20gZGFzaGJvYXJkc1wiLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiBcIkNvcnBvcmF0ZSBQbGFuXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkZvciBtZWRpdW0tc2l6ZWQgYnVzaW5lc3MuXCIsXHJcbiAgICAgIHByaWNlV2l0aFVuaXQ6IFwiJDIsNTAwXCIsXHJcbiAgICAgIGJ1dHRvblRleHQ6IFwiR2V0IGEgcHJvcG9zYWxcIixcclxuICAgICAgYW5vdGhlck9wdGlvbjogXCJPciBTdGFydCAxNCBEYXlzIHRyYWlsXCIsXHJcbiAgICAgIHBvaW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgaWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICAgICAgdGV4dDogXCIyLDI1MCBrZXlwaHJhc2VzIG9wdGltaXplZFwiLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMixcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiNDUwIHBhZ2VzIG9wdGltaXplZFwiLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiMTM1IGNvbnRlbnQsIG91dHJlYWNoLCBVWCwgb3IgQ1JPIGFzc2V0cyBwZXIgcXVhcnRlclwiLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiMTIwIGN1c3RvbSBkYXNoYm9hcmRzXCIsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIGhlYWRlcjogXCJTdWdnZXN0ZWRcIixcclxuICAgICAgaGVhZGVySWNvbjogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlIC8+LFxyXG4gICAgICBuYW1lOiBcIkVudGVycHJpc2UgUGxhblwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJGb3IgaW50ZXJuYXRpb25hbCBidXNpbmVzc2VzLlwiLFxyXG4gICAgICBwcmljZVdpdGhVbml0OiBcIiQ1LDAwMFwiLFxyXG4gICAgICBidXR0b25UZXh0OiBcIkdldCBhIHByb3Bvc2FsXCIsXHJcbiAgICAgIGFub3RoZXJPcHRpb246IFwiT3IgU3RhcnQgMTQgRGF5cyB0cmFpbFwiLFxyXG4gICAgICBwb2ludHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiMzAwMCBrZXlwaHJhc2VzIG9wdGltaXplZFwiLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMixcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiNjAwIHBhZ2VzIG9wdGltaXplZFwiLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiMTgwIGNvbnRlbnQsIG91dHJlYWNoLCBVWCwgb3IgQ1JPIGFzc2V0cyBwZXIgcXVhcnRlclwiLFxyXG4gICAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgIGljb246IDxJb0lvc0NoZWNrbWFya0NpcmNsZSAvPixcclxuICAgICAgICAgIHRleHQ6IFwiMTgwIGN1c3RvbSBkYXNoYm9hcmRzXCIsXHJcbiAgICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcclxuICBkZXNrdG9wOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXHJcbiAgICBpdGVtczogMyxcclxuICAgIGRyYWdnYWJsZTogZmFsc2UsXHJcbiAgfSxcclxuICB0YWJsZXQ6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDIzLCBtaW46IDY0MCB9LFxyXG4gICAgaXRlbXM6IDIsXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgfSxcclxuICBtb2JpbGU6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhY2thZ2UoKSB7XHJcbiAgY29uc3QgeyBtb250aGx5LCBhbm51YWwgfSA9IHBhY2thZ2VzO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgYWN0aXZlOiBcIm1vbnRobHlcIixcclxuICAgIHByaWNpbmdQbGFuOiBtb250aGx5LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmljaW5nUGxhbiA9IChwbGFuKSA9PiB7XHJcbiAgICBpZiAocGxhbiA9PT0gXCJhbm51YWxcIikge1xyXG4gICAgICBzZXRTdGF0ZSh7IGFjdGl2ZTogXCJhbm51YWxcIiwgcHJpY2luZ1BsYW46IGFubnVhbCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFN0YXRlKHsgYWN0aXZlOiBcIm1vbnRobHlcIiwgcHJpY2luZ1BsYW46IG1vbnRobHkgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2xpZGVyUGFyYW1zID0ge1xyXG4gICAgYWRkaXRpb25hbFRyYW5zZnJvbTogMCxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBhdXRvUGxheVNwZWVkOiAzMDAwLFxyXG4gICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICBjbGFzc05hbWU6IFwiXCIsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAxLFxyXG4gICAgaXRlbXM6IDMsXHJcbiAgICBjb250YWluZXJDbGFzczogXCJjYXJvdXNlbC1jb250YWluZXJcIixcclxuICAgIGN1c3RvbUJ1dHRvbkdyb3VwOiA8QnV0dG9uR3JvdXAgLz4sXHJcbiAgICBkb3RMaXN0Q2xhc3M6IFwiXCIsXHJcbiAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIGtleUJvYXJkQ29udHJvbDogZmFsc2UsXHJcbiAgICBpdGVtQ2xhc3M6IFwiXCIsXHJcbiAgICBtaW5pbXVtVG91Y2hEcmFnOiA4MCxcclxuICAgIHJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZTogdHJ1ZSxcclxuICAgIHJlbmRlckRvdHNPdXRzaWRlOiBmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IHJlc3BvbnNpdmUsXHJcbiAgICBzaG93RG90czogZmFsc2UsXHJcbiAgICBzbGlkZXJDbGFzczogXCJcIixcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJwcmljaW5nXCIgc3g9e3sgdmFyaWFudDogXCJzZWN0aW9uLnByaWNpbmdcIiB9fT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlciBzbG9nYW49XCJQYXltZW50IFBsYW5cIiB0aXRsZT1cIkNob29zZSB5b3VyIHBhY2thZ2VcIiAvPlxyXG5cclxuICAgICAgICA8RmxleCBzeD17c3R5bGVzLmJ1dHRvbkdyb3VwfT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5idXR0b25Hcm91cElubmVyfT5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3RhdGUuYWN0aXZlID09PSBcIm1vbnRobHlcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNb250aGx5XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcmljaW5nUGxhbihcIm1vbnRobHlcIil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBNb250aGx5IFBsYW5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0YXRlLmFjdGl2ZSA9PT0gXCJtb250aGx5XCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQW5udWFsXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcmljaW5nUGxhbihcImFubnVhbFwiKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFubnVhbCBQbGFuXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5wcmljaW5nV3JhcHBlcn0gY2xhc3NOYW1lPVwicHJpY2luZ19fd3JhcHBlclwiPlxyXG4gICAgICAgICAgPENhcm91c2VsIHsuLi5zbGlkZXJQYXJhbXN9PlxyXG4gICAgICAgICAgICB7c3RhdGUucHJpY2luZ1BsYW4ubWFwKChwYWNrYWdlRGF0YSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5wcmljaW5nSXRlbX0ga2V5PXtwYWNrYWdlRGF0YS5pZH0+XHJcbiAgICAgICAgICAgICAgICA8UHJpY2VDYXJkIGRhdGE9e3BhY2thZ2VEYXRhfSAvPlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBmYWRlSW4yID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHByaWNpbmdXcmFwcGVyOiB7XHJcbiAgICBtYjogXCItNDBweFwiLFxyXG4gICAgbXQ6IFwiLTQwcHhcIixcclxuICAgIG14OiAtMyxcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgIFwiJi5wcmljaW5nX193cmFwcGVyIC5wYWNrYWdlX19jYXJkXCI6IHtcclxuICAgICAgXCIucGFja2FnZV9faGVhZGVyXCI6IHtcclxuICAgICAgICBhbmltYXRpb246IGAke2ZhZGVJbn0gMC44cyBlYXNlLWluYCxcclxuICAgICAgfSxcclxuICAgICAgXCJ1bCA+IGxpXCI6IHtcclxuICAgICAgICBhbmltYXRpb246IGAke2ZhZGVJbjJ9IDAuN3MgZWFzZS1pbmAsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiLnBhY2thZ2VfX3ByaWNlXCI6IHtcclxuICAgICAgICBhbmltYXRpb246IGAke2ZhZGVJbjJ9IDAuOXMgZWFzZS1pbmAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIGFuaW1hdGlvbjogYCR7ZmFkZUluMn0gMXMgZWFzZS1pbmAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCIuY2Fyb3VzZWwtY29udGFpbmVyXCI6IHtcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBcIj4gdWwgPiBsaSBcIjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIFwiLmJ1dHRvbl9fZ3JvdXBcIjoge1xyXG4gICAgICBkaXNwbGF5OiBbXCJmbGV4XCIsIG51bGwsIG51bGwsIG51bGwsIFwibm9uZVwiXSxcclxuICAgICAgbWI6IFs0LCBudWxsLCBudWxsLCBudWxsLCAwXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwcmljaW5nSXRlbToge1xyXG4gICAgbXg6IDMsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBmbGV4OiBcIjEgMSBhdXRvXCIsXHJcbiAgfSxcclxuICBidXR0b25Hcm91cDoge1xyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBtYjogXCI3XCIsXHJcbiAgICBtdDogW1wiLTE1cHhcIiwgXCItMzVweFwiXSxcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB6SW5kZXg6IDIsXHJcbiAgfSxcclxuICBidXR0b25Hcm91cElubmVyOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIHBhZGRpbmc6IFwiN3B4XCIsXHJcbiAgICBtYXJnaW46IFwiMCBhdXRvXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0Y3RjhGQlwiLFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgIGJvcmRlcjogMCxcclxuICAgICAgcGFkZGluZzogW1wiMTVweCAyMHB4XCIsIFwiMTVweCAyN3B4XCJdLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgIGNvbG9yOiBcInRleHRcIixcclxuICAgICAgZm9udFNpemU6IFsxLCAyXSxcclxuICAgICAgbGluZUhlaWdodDogMS4yLFxyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICBmb250RmFtaWx5OiBcImJvZHlcIixcclxuICAgICAgbGV0dGVyU3BhY2luZzogXCItMC4yNHB4XCIsXHJcbiAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3NcIixcclxuICAgICAgXCImLmFjdGl2ZVwiOiB7XHJcbiAgICAgICAgY29sb3I6IFwiIzBmMjEzN1wiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgYm94U2hhZG93OiBcIjAgM3B4IDRweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiJjpmb2N1c1wiOiB7XHJcbiAgICAgICAgb3V0bGluZTogMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQge1xyXG4gIGpzeCxcclxuICBDb250YWluZXIsXHJcbiAgQm94LFxyXG4gIEdyaWQsXHJcbiAgVGV4dCxcclxuICBIZWFkaW5nLFxyXG4gIEJ1dHRvbixcclxuICBJbWFnZSxcclxufSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcclxuaW1wb3J0IFRleHRGZWF0dXJlIGZyb20gXCJjb21wb25lbnRzL3RleHQtZmVhdHVyZVwiO1xyXG5pbXBvcnQgTW9kYWxWaWRlbyBmcm9tIFwicmVhY3QtbW9kYWwtdmlkZW9cIjtcclxuaW1wb3J0IHsgSW9Jb3NQbGF5IH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcblxyXG5pbXBvcnQgU2VydmljZVRodW1iIGZyb20gXCJhc3NldHMvc2VydmljZS10aHVtYi5wbmdcIjtcclxuaW1wb3J0IHNoYXBlUGF0dGVybiBmcm9tIFwiYXNzZXRzL3NoYXBlLXBhdHRlcm4xLnBuZ1wiO1xyXG5cclxuaW1wb3J0IFNtYXJ0IGZyb20gXCJhc3NldHMvc2VydmljZXMvc21hcnQuc3ZnXCI7XHJcbmltcG9ydCBTZWN1cmUgZnJvbSBcImFzc2V0cy9zZXJ2aWNlcy9zZWN1cmUuc3ZnXCI7XHJcblxyXG5jb25zdCBkYXRhID0ge1xyXG4gIHN1YlRpdGxlOiBcIm91ciBzZXJ2aWNlXCIsXHJcbiAgdGl0bGU6IFwiQnVzaW5lc3MgR29hbHMgQWNoaWV2ZWQgd2l0aCBTRU9cIixcclxuICBmZWF0dXJlczogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgaW1nU3JjOiBTbWFydCxcclxuICAgICAgYWx0VGV4dDogXCJPbi1QYWdlIFNFT1wiLFxyXG4gICAgICB0aXRsZTogXCJPbi1QYWdlIFNFT1wiLFxyXG4gICAgICB0ZXh0OlxyXG4gICAgICAgIFwiV2Ugd2lsbCBvcHRpbWl6ZSBpbmRpdmlkdWFsIHdlYiBwYWdlcyBpbiBvcmRlciB0byByYW5rIHlvdSBoaWdoZXIgYW5kIGVhcm4gbW9yZSByZWxldmFudCB0cmFmZmljIGluIHNlYXJjaCBlbmdpbmVzLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIGltZ1NyYzogU2VjdXJlLFxyXG4gICAgICBhbHRUZXh0OiBcIk9mZi1QYWdlIFNFT1wiLFxyXG4gICAgICB0aXRsZTogXCJPZmYtUGFnZSBTRU9cIixcclxuICAgICAgdGV4dDpcclxuICAgICAgICBcIldlIGltcGFjdCB5b3VyIHJhbmtpbmdzIGJ5IHRlbGxpbmcgc2VhcmNoIGVuZ2luZXMgdGhhdCB5b3VyIHdlYnNpdGUgaXMgaW1wb3J0YW50IHRvIG90aGVycyBvbiB0aGUgd2ViLlwiLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZVNlY3Rpb24oKSB7XHJcbiAgY29uc3QgW3ZpZGVvT3Blbiwgc2V0VmlkZW9PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgc2V0VmlkZW9PcGVuKHRydWUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6IFwic2VjdGlvbi5zZXJ2aWNlc1wiIH19PlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyQm94fT5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMudGh1bWJuYWlsfT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e1NlcnZpY2VUaHVtYn0gYWx0PVwiVGh1bWJuYWlsXCIgLz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3g9e3N0eWxlcy52aWRlb0J0bn1cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQbGF5IEJ1dHRvblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIDxJb0lvc1BsYXkgLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuc2hhcGVCb3h9PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtzaGFwZVBhdHRlcm59IGFsdD1cInNoYXBlXCIgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cclxuICAgICAgICAgIDxUZXh0RmVhdHVyZSBzdWJUaXRsZT17ZGF0YS5zdWJUaXRsZX0gdGl0bGU9e2RhdGEudGl0bGV9IC8+XHJcblxyXG4gICAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgICAge2RhdGEuZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNhcmR9IGtleT17ZmVhdHVyZS5pZH0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXtmZWF0dXJlLmltZ1NyY31cclxuICAgICAgICAgICAgICAgICAgYWx0PXtmZWF0dXJlLmFsdFRleHR9XHJcbiAgICAgICAgICAgICAgICAgIHN4PXtzdHlsZXMuaWNvbn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e2ZlYXR1cmUudGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PntmZWF0dXJlLnRleHR9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPE1vZGFsVmlkZW9cclxuICAgICAgICBjaGFubmVsPVwieW91dHViZVwiXHJcbiAgICAgICAgaXNPcGVuPXt2aWRlb09wZW59XHJcbiAgICAgICAgdmlkZW9JZD1cIjBlS1ZpenZZU1VRXCJcclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRWaWRlb09wZW4oZmFsc2UpfVxyXG4gICAgICAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHBsYXlQbHVzZSA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooMCkgc2NhbGUoMSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooMCkgc2NhbGUoMS41KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNvcmVGZWF0dXJlOiB7XHJcbiAgICBweTogWzAsIG51bGwsIG51bGwsIDIsIG51bGwsIDddLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICB9LFxyXG4gIGNvbnRhaW5lckJveDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBbXCJmbGV4LXN0YXJ0XCIsIG51bGwsIG51bGwsIFwiY2VudGVyXCJdLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFtcImZsZXgtc3RhcnRcIiwgbnVsbCwgbnVsbCwgXCJzcGFjZS1iZXR3ZWVuXCJdLFxyXG4gICAgZmxleERpcmVjdGlvbjogW1wiY29sdW1uXCIsIG51bGwsIG51bGwsIFwicm93XCJdLFxyXG4gICAgcGI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA3XSxcclxuICB9LFxyXG4gIHRodW1ibmFpbDoge1xyXG4gICAgbXI6IFtcImF1dG9cIiwgbnVsbCwgbnVsbCwgNiwgNjAsIDg1XSxcclxuICAgIG9yZGVyOiBbMiwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICBtbDogW1wiYXV0b1wiLCBudWxsLCBudWxsLCAwXSxcclxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBcIj4gaW1nXCI6IHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgekluZGV4OiAxLFxyXG4gICAgICBoZWlnaHQ6IFszMTAsIFwiYXV0b1wiXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzaGFwZUJveDoge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIGJvdHRvbTogLTY4LFxyXG4gICAgbGVmdDogLTE2MCxcclxuICAgIHpJbmRleDogLTEsXHJcbiAgICBkaXNwbGF5OiBbXCJub25lXCIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIFwiaW5saW5lLWJsb2NrXCJdLFxyXG4gIH0sXHJcbiAgdmlkZW9CdG46IHtcclxuICAgIHpJbmRleDogMixcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICBsZWZ0OiBcIjUwJVwiLFxyXG4gICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxyXG4gICAgd2lkdGg6IFtcIjYwcHhcIiwgbnVsbCwgXCI4MHB4XCIsIG51bGwsIFwiMTAwcHhcIl0sXHJcbiAgICBoZWlnaHQ6IFtcIjYwcHhcIiwgbnVsbCwgXCI4MHB4XCIsIG51bGwsIFwiMTAwcHhcIl0sXHJcbiAgICBwOiBcIjBweCAhaW1wb3J0YW50XCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgIFwiJjo6YmVmb3JlXCI6IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICBsZWZ0OiBcIjUwJVwiLFxyXG4gICAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSlcIixcclxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICB3aWR0aDogW1wiNjBweFwiLCBudWxsLCBcIjgwcHhcIiwgbnVsbCwgXCIxMDBweFwiXSxcclxuICAgICAgaGVpZ2h0OiBbXCI2MHB4XCIsIG51bGwsIFwiODBweFwiLCBudWxsLCBcIjEwMHB4XCJdLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicHJpbWFyeVwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgIGFuaW1hdGlvbjogYCR7cGxheVBsdXNlfSAxLjVzIGVhc2Utb3V0IGluZmluaXRlYCxcclxuICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgfSxcclxuICAgIFwiPiBzcGFuXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiLFxyXG4gICAgICB3aWR0aDogXCJpbmhlcml0XCIsXHJcbiAgICAgIGhlaWdodDogXCJpbmhlcml0XCIsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjVzXCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgekluZGV4OiAyLFxyXG4gICAgfSxcclxuICAgIHN2Zzoge1xyXG4gICAgICBmb250U2l6ZTogWzQwLCBudWxsLCA0OCwgbnVsbCwgNjJdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbnRlbnRCb3g6IHtcclxuICAgIHdpZHRoOiBbXCIxMDAlXCIsIG51bGwsIG51bGwsIDMxNSwgMzkwLCA0NTAsIG51bGwsIDUwMF0sXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgbWI6IFs3LCBudWxsLCA2MCwgMF0sXHJcbiAgICB0ZXh0QWxpZ246IFtcImNlbnRlclwiLCBudWxsLCBudWxsLCBcImxlZnRcIl0sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBwcjogWzIsIDAsIG51bGwsIG51bGwsIDYsIFwiNzBweFwiXSxcclxuICAgIHBsOiBbMiwgMF0sXHJcbiAgICBwdDogWzIsIG51bGwsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgbXg6IFwiYXV0b1wiLFxyXG4gICAgd2lkdGg6IFtcIjEwMCVcIiwgMzcwLCA0MjAsIFwiMTAwJVwiXSxcclxuICAgIGdyaWRHYXA6IFtcIjM1cHggMFwiLCBudWxsLCBudWxsLCBudWxsLCBcIjUwcHggMFwiXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcInJlcGVhdCgxLDFmcilcIl0sXHJcbiAgfSxcclxuICBjYXJkOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxyXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMC4zc1wiLFxyXG4gIH0sXHJcblxyXG4gIGljb246IHtcclxuICAgIHdpZHRoOiBbXCI0NXB4XCIsIG51bGwsIG51bGwsIG51bGwsIFwiNTVweFwiXSxcclxuICAgIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgbXI6IFszLCBudWxsLCBudWxsLCBudWxsLCA0XSxcclxuICB9LFxyXG4gIHdyYXBwZXI6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICBtdDogXCItNXB4XCIsXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogMyxcclxuICAgICAgY29sb3I6IFwiaGVhZGluZ19zZWNvbmRhcnlcIixcclxuICAgICAgbGluZUhlaWdodDogMS40LFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIG1iOiBbMiwgbnVsbCwgMywgMiwgM10sXHJcbiAgICB9LFxyXG5cclxuICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgXCIxNHB4XCIsIDFdLFxyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuOSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB2aWRlb1dyYXBwZXI6IHtcclxuICAgIG1heFdpZHRoOiBcIjEwMCVcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB3aWR0aDogXCI5MDBweFwiLFxyXG4gICAgXCImOmJlZm9yZVwiOiB7XHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICBwYWRkaW5nVG9wOiBcIjU2LjI1JVwiLFxyXG4gICAgfSxcclxuICAgIGlmcmFtZToge1xyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXJcIjtcclxuaW1wb3J0IFRlYW1DYXJkIGZyb20gXCJjb21wb25lbnRzL3RlYW0tY2FyZFwiO1xyXG5pbXBvcnQgeyBGYUZhY2Vib29rRiwgRmFUd2l0dGVyLCBGYUluc3RhZ3JhbSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5cclxuaW1wb3J0IE1lbWJlcjEgZnJvbSBcImFzc2V0cy90ZWFtL21lbWJlci0xLnBuZ1wiO1xyXG5pbXBvcnQgTWVtYmVyMiBmcm9tIFwiYXNzZXRzL3RlYW0vbWVtYmVyLTIucG5nXCI7XHJcbmltcG9ydCBNZW1iZXIzIGZyb20gXCJhc3NldHMvdGVhbS9tZW1iZXItMy5wbmdcIjtcclxuaW1wb3J0IE1lbWJlcjQgZnJvbSBcImFzc2V0cy90ZWFtL21lbWJlci00LnBuZ1wiO1xyXG5pbXBvcnQgTWVtYmVyNSBmcm9tIFwiYXNzZXRzL3RlYW0vbWVtYmVyLTUucG5nXCI7XHJcbmltcG9ydCBNZW1iZXI2IGZyb20gXCJhc3NldHMvdGVhbS9tZW1iZXItNi5wbmdcIjtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWdTcmM6IE1lbWJlcjEsXHJcbiAgICBhbHRUZXh0OiBcIlNhaW1vbiBIYXJtZXJcIixcclxuICAgIHRpdGxlOiBcIlNhaW1vbiBIYXJtZXJcIixcclxuICAgIGRlc2lnbmF0aW9uOiBcIkNFTyBhbmQgRm91bmRlclwiLFxyXG4gICAgc29jaWFsUHJvZmlsZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJmYWNlYm9va1wiLFxyXG4gICAgICAgIHBhdGg6IFwiI1wiLFxyXG4gICAgICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6IFwidHdpdHRlclwiLFxyXG4gICAgICAgIHBhdGg6IFwiI1wiLFxyXG4gICAgICAgIGljb246IDxGYVR3aXR0ZXIgLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuYW1lOiBcImluc3RhZ3JhbVwiLFxyXG4gICAgICAgIHBhdGg6IFwiI1wiLFxyXG4gICAgICAgIGljb246IDxGYUluc3RhZ3JhbSAvPixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltZ1NyYzogTWVtYmVyMixcclxuICAgIGFsdFRleHQ6IFwiQXVicmV5IEx5b25zXCIsXHJcbiAgICB0aXRsZTogXCJBdWJyZXkgTHlvbnNcIixcclxuICAgIGRlc2lnbmF0aW9uOiBcIkZvdW5kZXJcIixcclxuICAgIHNvY2lhbFByb2ZpbGU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6IFwiZmFjZWJvb2tcIixcclxuICAgICAgICBwYXRoOiBcIiNcIixcclxuICAgICAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcInR3aXR0ZXJcIixcclxuICAgICAgICBwYXRoOiBcIiNcIixcclxuICAgICAgICBpY29uOiA8RmFUd2l0dGVyIC8+LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgbmFtZTogXCJpbnN0YWdyYW1cIixcclxuICAgICAgICBwYXRoOiBcIiNcIixcclxuICAgICAgICBpY29uOiA8RmFJbnN0YWdyYW0gLz4sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBpbWdTcmM6IE1lbWJlcjMsXHJcbiAgICBhbHRUZXh0OiBcIk1hdGVvIERlIGxhIEdhcnphXCIsXHJcbiAgICB0aXRsZTogXCJNYXRlbyBEZSBsYSBHYXJ6YVwiLFxyXG4gICAgZGVzaWduYXRpb246IFwiRGlyZWN0b3Igb2YgR2xvYmFsIFNFT1wiLFxyXG4gICAgc29jaWFsUHJvZmlsZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJmYWNlYm9va1wiLFxyXG4gICAgICAgIHBhdGg6IFwiI1wiLFxyXG4gICAgICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6IFwidHdpdHRlclwiLFxyXG4gICAgICAgIHBhdGg6IFwiI1wiLFxyXG4gICAgICAgIGljb246IDxGYVR3aXR0ZXIgLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuYW1lOiBcImluc3RhZ3JhbVwiLFxyXG4gICAgICAgIHBhdGg6IFwiI1wiLFxyXG4gICAgICAgIGljb246IDxGYUluc3RhZ3JhbSAvPixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIGltZ1NyYzogTWVtYmVyNCxcclxuICAgIGFsdFRleHQ6IFwiTWlsb3NsYXYgS29sw6FcIixcclxuICAgIHRpdGxlOiBcIk1pbG9zbGF2IEtvbMOhXCIsXHJcbiAgICBkZXNpZ25hdGlvbjogXCJMZWFkIFNFTyBTcGVjaWFsaXN0XCIsXHJcbiAgICBzb2NpYWxQcm9maWxlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiBcImZhY2Vib29rXCIsXHJcbiAgICAgICAgcGF0aDogXCIjXCIsXHJcbiAgICAgICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJ0d2l0dGVyXCIsXHJcbiAgICAgICAgcGF0aDogXCIjXCIsXHJcbiAgICAgICAgaWNvbjogPEZhVHdpdHRlciAvPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6IFwiaW5zdGFncmFtXCIsXHJcbiAgICAgICAgcGF0aDogXCIjXCIsXHJcbiAgICAgICAgaWNvbjogPEZhSW5zdGFncmFtIC8+LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgaW1nU3JjOiBNZW1iZXI1LFxyXG4gICAgYWx0VGV4dDogXCJZYW5uaXMgWmVuYWtpc1wiLFxyXG4gICAgdGl0bGU6IFwiWWFubmlzIFplbmFraXNcIixcclxuICAgIGRlc2lnbmF0aW9uOiBcIlNFTyBTcGVjaWFsaXN0XCIsXHJcbiAgICBzb2NpYWxQcm9maWxlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiBcImZhY2Vib29rXCIsXHJcbiAgICAgICAgcGF0aDogXCIjXCIsXHJcbiAgICAgICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogXCJ0d2l0dGVyXCIsXHJcbiAgICAgICAgcGF0aDogXCIjXCIsXHJcbiAgICAgICAgaWNvbjogPEZhVHdpdHRlciAvPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIG5hbWU6IFwiaW5zdGFncmFtXCIsXHJcbiAgICAgICAgcGF0aDogXCIjXCIsXHJcbiAgICAgICAgaWNvbjogPEZhSW5zdGFncmFtIC8+LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgaW1nU3JjOiBNZW1iZXI2LFxyXG4gICAgYWx0VGV4dDogXCJBYXJvbiBOdW5lelwiLFxyXG4gICAgdGl0bGU6IFwiQWFyb24gTnVuZXpcIixcclxuICAgIGRlc2lnbmF0aW9uOiBcIldlYiBEZXNpZ25lclwiLFxyXG4gICAgc29jaWFsUHJvZmlsZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJmYWNlYm9va1wiLFxyXG4gICAgICAgIHBhdGg6IFwiI1wiLFxyXG4gICAgICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIG5hbWU6IFwidHdpdHRlclwiLFxyXG4gICAgICAgIHBhdGg6IFwiI1wiLFxyXG4gICAgICAgIGljb246IDxGYVR3aXR0ZXIgLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuYW1lOiBcImluc3RhZ3JhbVwiLFxyXG4gICAgICAgIHBhdGg6IFwiI1wiLFxyXG4gICAgICAgIGljb246IDxGYUluc3RhZ3JhbSAvPixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlYW1TZWN0aW9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgc2xvZ2FuPVwib3VyIHRlYW1cIlxyXG4gICAgICAgICAgdGl0bGU9XCJUaGUgbW9zdCBxdWFsaWZpZWQgYW5kIHRhbGVudGVkIGluZGl2aWR1YWxzIHlvdSdsbCBldmVyIG1lZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8VGVhbUNhcmRcclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgc3JjPXtpdGVtLmltZ1NyY31cclxuICAgICAgICAgICAgICBhbHRUZXh0PXtpdGVtLmFsdFRleHJ9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgZGVzaWduYXRpb249e2l0ZW0uZGVzaWduYXRpb259XHJcbiAgICAgICAgICAgICAgc29jaWFsPXtpdGVtLnNvY2lhbFByb2ZpbGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBncmlkOiB7XHJcbiAgICBtdDogWzAsIG51bGwsIC02LCBudWxsLCAtNF0sXHJcbiAgICBncmlkR2FwOiBbXCIzNXB4IDBweFwiLCBudWxsLCAwLCBudWxsLCBudWxsLCBcIjMwcHggMzVweFwiXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcclxuICAgICAgXCJyZXBlYXQoMiwxZnIpXCIsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIFwicmVwZWF0KDIsMWZyKVwiLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBcInJlcGVhdCgzLDFmcilcIixcclxuICAgIF0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBIZWFkaW5nLCBUZXh0LCBCb3gsIEltYWdlIH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyXCI7XHJcbmltcG9ydCBSYXRpbmcgZnJvbSBcImNvbXBvbmVudHMvcmF0aW5nXCI7XHJcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tIFwiY29tcG9uZW50cy9idXR0b24tZ3JvdXBcIjtcclxuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiO1xyXG5cclxuaW1wb3J0IEF2YXRhcjEgZnJvbSBcImFzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXIxLnBuZ1wiO1xyXG5pbXBvcnQgQXZhdGFyMiBmcm9tIFwiYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjIucG5nXCI7XHJcbmltcG9ydCBBdmF0YXIzIGZyb20gXCJhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMy5wbmdcIjtcclxuaW1wb3J0IEF2YXRhcjQgZnJvbSBcImFzc2V0cy90ZXN0aW1vbmlhbC9hdmF0YXI0LnBuZ1wiO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdGxlOiBcIkd1cmFudGVlZCBTdWNjZXNzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJUaGUgbWV0aWN1bG91cyB3b3JrIGRvbmUgdG8gZHJpdmUgdXAgbXkgb3JnYW5pYyB0cmFmZmljIHdhcyB3ZWxsIHdvcnRoIHRoZSBjb3N0XCIsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjEsXHJcbiAgICBuYW1lOiBcIkJyb29rZSBSZXllc1wiLFxyXG4gICAgZGVzaWduYXRpb246IFwiQGRCcm9va2UuUmV5ZXNcIixcclxuICAgIHJldmlldzogNCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6IFwiR3JlYXQgdGVhbSBvZiBoaWdoIHBlcmZvcm1lcnNcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkkgaGFkIGEgaHVnZSBsaXN0IG9mIGdvYWxzIEkgd2FudGVkIHRvIGFjaGlldmUgYW5kIHRoZXkgY29tcGxldGVkIGV2ZXJ5IHNpbmdsZSBvbmUuXCIsXHJcbiAgICBhdmF0YXI6IEF2YXRhcjIsXHJcbiAgICBuYW1lOiBcIk1hcnNoYWxsIFdlbGxzXCIsXHJcbiAgICBkZXNpZ25hdGlvbjogXCJATWFyc2hhbGwuV2VsbHNcIixcclxuICAgIHJldmlldzogNSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6IFwiVmVyeSBrbm93bGVkZ2VhYmxlIGFuZCBwcm9mZXNzaW9uYWxcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRoaXMgZmllbGQgaXMgbm90IG15IGZvcnRlIGJ1dCBJIGZlbHQgdmVyeSB3ZWxjb21lIGFza2luZyBxdWVzdGlvbnMgYW5kIEkgcmVjZWl2ZWQgc3RyYWlnaHQtZm9yd2FyZCBhc253ZXJzLlwiLFxyXG4gICAgYXZhdGFyOiBBdmF0YXIzLFxyXG4gICAgbmFtZTogXCJWaWN0b3IgRmFiZWxhXCIsXHJcbiAgICBkZXNpZ25hdGlvbjogXCJAVmljdG9yLkZhYmVsYVwiLFxyXG4gICAgcmV2aWV3OiA1LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0aXRsZTogXCJBbG1vc3QgYW4gb3Zlcm5pZ2h0IGNoYW5nZSFcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRoZSB0ZWFtIEkgd29ya2VkIHdpdGggaGl0IHRoZSBwYXZlbWVudCBydW5uaW5nIGFuZCBJIHNhdyBodWdlIGNoYW5nZXMgYWxtb3N0IGltbWVkaWF0ZWx5IS5cIixcclxuICAgIGF2YXRhcjogQXZhdGFyNCxcclxuICAgIG5hbWU6IFwiSmFja3NvbiBDYW1wYmVsbFwiLFxyXG4gICAgZGVzaWduYXRpb246IFwiQGphY2tzb24uY2FtcGJlbGxcIixcclxuICAgIHJldmlldzogNCxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcclxuICBkZXNrdG9wOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxNjE5IH0sXHJcbiAgICBpdGVtczogNCxcclxuICAgIHNsaWRlc1RvU2xpZGU6IDQsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxuICBsYXB0b3A6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxNjE5LCBtaW46IDEwMjQgfSxcclxuICAgIGl0ZW1zOiAzLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMywgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG4gIHRhYmxldDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNjQwIH0sXHJcbiAgICBpdGVtczogMixcclxuICAgIHNsaWRlc1RvU2xpZGU6IDIsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxuICBtb2JpbGU6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAxLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBjYXJvdXNlbFBhcmFtcyA9IHtcclxuICBhZGRpdGlvbmFsVHJhbnNmcm9tOiAwLFxyXG4gIGFycm93czogZmFsc2UsXHJcbiAgYXV0b1BsYXlTcGVlZDogMzAwMCxcclxuICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICBjbGFzc05hbWU6IFwiXCIsXHJcbiAgY29udGFpbmVyQ2xhc3M6IFwiY2Fyb3VzZWwtY29udGFpbmVyXCIsXHJcbiAgY3VzdG9tQnV0dG9uR3JvdXA6IDxCdXR0b25Hcm91cCAvPixcclxuICBkb3RMaXN0Q2xhc3M6IFwiXCIsXHJcbiAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gIGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxyXG4gIGluZmluaXRlOiB0cnVlLFxyXG4gIGl0ZW1DbGFzczogXCJcIixcclxuICBrZXlCb2FyZENvbnRyb2w6IHRydWUsXHJcbiAgbWluaW11bVRvdWNoRHJhZzogODAsXHJcbiAgcmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlOiB0cnVlLFxyXG4gIHJlbmRlckRvdHNPdXRzaWRlOiBmYWxzZSxcclxuICByZXNwb25zaXZlOiByZXNwb25zaXZlLFxyXG4gIHNob3dEb3RzOiBmYWxzZSxcclxuICBzbGlkZXJDbGFzczogXCJcIixcclxuICBzbGlkZXNUb1NsaWRlOiAxLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdGltb25pYWxDYXJkKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cInRlc3RpbW9uaWFsXCIgc3g9e3sgdmFyaWFudDogXCJzZWN0aW9uLnRlc3RpbW9uaWFsXCIgfX0+XHJcbiAgICAgIDxDb250YWluZXIgY3NzPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlciBzbG9nYW49XCJUZXN0aW1vbmlhbFwiIHRpdGxlPVwiTWVldCBDbGllbnQgU2F0aXNmYWN0aW9uXCIgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJvdXNlbFdyYXBwZXJ9PlxyXG4gICAgICAgIDxDYXJvdXNlbCB7Li4uY2Fyb3VzZWxQYXJhbXN9PlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5yZXZpZXdDYXJkfSBrZXk9e2l0ZW0uc2xpZGVyQ2xhc3N9PlxyXG4gICAgICAgICAgICAgIDxSYXRpbmcgcmF0aW5nPXtpdGVtLnJldmlld30gLz5cclxuICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgc3g9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e2l0ZW0uZGVzY3JpcHRpb259PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5hdmF0YXJ9IGFsdD1cIkNsaWVudCBJbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3ZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgc3g9e3N0eWxlcy5oZWFkaW5nfT5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMuZGVzaWduYXRpb259PntpdGVtLmRlc2lnbmF0aW9ufTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJvdXNlbFdyYXBwZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtZW5kXCIsXHJcbiAgICBtdDogXCItMzBweFwiLFxyXG4gICAgcHg6IFwiMTVweFwiLFxyXG4gICAgXCIuY2Fyb3VzZWwtY29udGFpbmVyXCI6IHtcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBtYXhXaWR0aDogW1xyXG4gICAgICAgIFwiMTAwJVwiLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBcIjc1MHB4XCIsXHJcbiAgICAgICAgXCIxMDAwcHhcIixcclxuICAgICAgICBcIjExODBweFwiLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgXCJjYWxjKDUwJSArIDg2NXB4KVwiLFxyXG4gICAgICBdLFxyXG4gICAgICBtcjogW1wiYXV0b1wiLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBcIi0yMjBweFwiXSxcclxuICAgICAgbWw6IFwiYXV0b1wiLFxyXG4gICAgICBcIi5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtXCI6IHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjI1c1wiLFxyXG4gICAgICB9LFxyXG4gICAgICBcIi5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoNG4pXCI6IHtcclxuICAgICAgICBvcGFjaXR5OiBcIjAuNVwiLFxyXG4gICAgICAgIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYyMHB4KVwiOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcmV2aWV3Q2FyZDoge1xyXG4gICAgYm94U2hhZG93OiBcIjBweCAwcHggMXB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMzUpXCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiNnB4XCIsXHJcbiAgICBwOiBbXHJcbiAgICAgIFwiMzBweCAyMHB4IDM1cHhcIixcclxuICAgICAgXCIzMHB4IDI1cHggMzVweFwiLFxyXG4gICAgICBcIjMwcHggMjBweCAzNXB4XCIsXHJcbiAgICAgIFwiMzVweCAzMHB4IDQwcHggNDBweFwiLFxyXG4gICAgICBcIjMwcHggMzBweCAzNXB4XCIsXHJcbiAgICAgIFwiMzVweCAzMHB4IDQwcHggNDBweFwiLFxyXG4gICAgXSxcclxuICAgIGJnOiBcIndoaXRlXCIsXHJcbiAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgbTogW1xyXG4gICAgICBcIjI4cHggNXB4IDMwcHggNXB4XCIsXHJcbiAgICAgIFwiMjhweCAyMHB4IDMwcHggMjBweFwiLFxyXG4gICAgICBcIjI4cHggMTVweCAzMHB4IDE1cHhcIixcclxuICAgICAgXCIyOHB4IDE1cHggMzBweCAxNXB4XCIsXHJcbiAgICAgIFwiMzBweCAyMHB4IDQwcHhcIixcclxuICAgIF0sXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBib3hTaGFkb3c6IFwiMHB4IDZweCAzMHB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSlcIixcclxuICAgIH0sXHJcbiAgICBcIi5yYXRpbmdcIjoge1xyXG4gICAgICBtYjogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICB1bDoge1xyXG4gICAgICAgIHBsOiAwLFxyXG4gICAgICAgIGxpc3RTdHlsZTogXCJub25lXCIsXHJcbiAgICAgICAgbWI6IDAsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN2Zzoge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiBcIjJweFwiLFxyXG4gICAgICAgIFwiJjpsYXN0LW9mLXR5cGVcIjoge1xyXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgXCIuc3RhclwiOiB7XHJcbiAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgIG1yOiBcIjFweFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBcIi5zdGFyLW9cIjoge1xyXG4gICAgICAgIGNvbG9yOiBcIiNkZGRcIixcclxuICAgICAgICBtcjogXCIxcHhcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIi5jYXJkLWZvb3RlclwiOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICBtYXJnaW5Ub3A6IFs1LCBudWxsLCBudWxsLCBcIjMzcHhcIl0sXHJcbiAgICAgIFwiLmltYWdlXCI6IHtcclxuICAgICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICAgIG1yOiBbMywgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgaW1nOiB7XHJcbiAgICAgICAgICB3aWR0aDogXCI1NXB4XCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiNTVweFwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFNpemU6IFsxLCAyXSxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIG1iOiBbMywgbnVsbCwgbnVsbCwgXCIyMnB4XCJdLFxyXG4gICAgY29sb3I6IFwidGV4dFwiLFxyXG4gICAgbGluZUhlaWdodDogMS42LFxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb246IHtcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxyXG4gICAgY29sb3I6IFwidGV4dFwiLFxyXG4gICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIDJdLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIG1iOiBcIjNweFwiLFxyXG4gICAgY29sb3I6IFwidGV4dFwiLFxyXG4gICAgbGluZUhlaWdodDogMS4zLFxyXG4gIH0sXHJcbiAgZGVzaWduYXRpb246IHtcclxuICAgIGNvbG9yOiBcInByaW1hcnlcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXHJcbiAgICBmb250U2l6ZTogMSxcclxuICAgIGxpbmVIZWlnaHQ6IDEuNCxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyXCI7XHJcblxyXG5pbXBvcnQgUGF0dGVybkJHIGZyb20gXCJhc3NldHMvcGF0dGVybkJHLnBuZ1wiO1xyXG5pbXBvcnQgQXJyb3dPZGQgZnJvbSBcImFzc2V0cy9hcnJvd09kZC5zdmdcIjtcclxuaW1wb3J0IEFycm93RXZlbiBmcm9tIFwiYXNzZXRzL2Fycm93RXZlbi5zdmdcIjtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogXCJSZXNlYXJjaFwiLFxyXG4gICAgdGV4dDpcclxuICAgICAgXCJJZGVudGlmeWluZyBhIGdyb3VwIG9mIGtleXdvcmQgcGhyYXNlcyB0aGF0IHdpbGwgYmUgdXNlZCBpbiBvcHRpbWl6YXRpb24gYW5kIGFuYWx5emUgdGFyZ2V0IGNvbXBldGl0b3Igc2l0ZXMuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiBcIlJlcG9ydGluZyAmIEdvYWwgU2V0dGluZ1wiLFxyXG4gICAgdGV4dDpcclxuICAgICAgXCJBZnRlciBkZXZlbG9waW5nIGEgY29tcGxldGUgcGljdHVyZSBvZiB5b3VyIHNpdGXigJlzIHN0YXJ0aW5nIHBvc2l0aW9uLCBnb2FscyBhcmUgc2V0IGZvciB0aGUgU0VPIHBsYW4uXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIHRpdGxlOiBcIlBhZ2UgT3B0aW1pemF0aW9uXCIsXHJcbiAgICB0ZXh0OlxyXG4gICAgICBcIldlIG1ldGljdWxvdXNseSBwaWNrIHBhZ2UgdGl0bGVzLCBhIHNpdGUgbWFwLCBhbmQgTUVUQSBkYXRhIHRvIGluY3JlYXNlIHlvdXIgc2l0ZSdzIGVmZmljaWVuY3kuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHRpdGxlOiBcIkZvbGxvdyBVcCBSZXBvcnRpbmcgYW5kIEFuYWx5c2lzXCIsXHJcbiAgICB0ZXh0OlxyXG4gICAgICBcIlRoZSBzYW1lIHJlcG9ydGluZyBkb25lIGluIHRoZSBpbml0aWFsIHBoYXNlIG9mIHRoZSBjYW1wYWlnbiBpcyBkb25lIGFnYWluIGF0IHJlZ3VsYXIgaW50ZXJ2YWxzLCBwb3N0LW9wdGltaXphdGlvbi5cIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya0Zsb3coKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXtzdHlsZXMud29ya2Zsb3d9PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICBzbG9nYW49XCJSb2FkbWFwXCJcclxuICAgICAgICAgIHRpdGxlPVwiV2hhdCdzIG91ciBwcm9jZXNzP1wiXHJcbiAgICAgICAgICBpc1doaXRlPXt0cnVlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0ga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaWNvbkJveH0+e2AwJHtpdGVtLmlkfWB9PC9Cb3g+XHJcbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT57aXRlbS50aXRsZX08L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PntpdGVtLnRleHR9PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHdvcmtmbG93OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicHJpbWFyeVwiLFxyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7UGF0dGVybkJHfSlgLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyIGNlbnRlclwiLFxyXG4gICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIG1iOiAtMSxcclxuICAgIHB0OiAwLFxyXG4gICAgZ3JpZEdhcDogW1xyXG4gICAgICBcIjM1cHggMFwiLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBcIjQ1cHggMzBweFwiLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBcIjUwcHggMjVweFwiLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBcIjUwcHggNjVweFwiLFxyXG4gICAgXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcclxuICAgICAgXCJyZXBlYXQoMSwxZnIpXCIsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIFwicmVwZWF0KDIsMWZyKVwiLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBcInJlcGVhdCg0LDFmcilcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICBjYXJkOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgdGV4dEFsaWduOiBbXCJjZW50ZXJcIiwgbnVsbCwgXCJsZWZ0XCJdLFxyXG4gICAgd2lkdGg6IFtcIjEwMCVcIiwgXCI4MCVcIiwgXCIxMDAlXCJdLFxyXG4gICAgbXg6IFtcImF1dG9cIl0sXHJcbiAgICBweDogWzQsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgXCImOjpiZWZvcmVcIjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDcyLCBudWxsLCA5MF0sXHJcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyIGNlbnRlclwiLFxyXG4gICAgICB3aWR0aDogMjE1LFxyXG4gICAgICBoZWlnaHQ6IDYwLFxyXG4gICAgICBcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTIyMHB4KVwiOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCImOm50aC1vZi10eXBlKDJuLTEpOjpiZWZvcmVcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtBcnJvd09kZH0pYCxcclxuICAgIH0sXHJcbiAgICBcIiY6bnRoLW9mLXR5cGUoMm4pOjpiZWZvcmVcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtBcnJvd0V2ZW59KWAsXHJcbiAgICAgIHRvcDogMTcsXHJcbiAgICB9LFxyXG4gICAgXCImOmxhc3QtY2hpbGQ6OmJlZm9yZVwiOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBpY29uQm94OiB7XHJcbiAgICB3aWR0aDogW1wiNTBweFwiLCBudWxsLCBcIjYwcHhcIiwgbnVsbCwgbnVsbCwgXCI3MHB4XCJdLFxyXG4gICAgaGVpZ2h0OiBbXCI1MHB4XCIsIG51bGwsIFwiNjBweFwiLCBudWxsLCBudWxsLCBcIjcwcHhcIl0sXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBbMTUsIG51bGwsIDIzLCBudWxsLCBudWxsLCAzMF0sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIG1iOiBbNSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNl0sXHJcbiAgICBteDogW1wiYXV0b1wiLCBudWxsLCAwXSxcclxuICAgIGZvbnRTaXplOiBbNiwgbnVsbCwgNywgbnVsbCwgbnVsbCwgXCIzMHB4XCJdLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBjb2xvcjogXCIjMjM0NTgyXCIsXHJcbiAgfSxcclxuICB3cmFwcGVyOiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBtdDogXCItNXB4XCIsXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIDQsIG51bGwsIG51bGwsIDVdLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS40LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxLjU1XSxcclxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgbWI6IFsyLCAzXSxcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIG51bGwsIDEuOSwgMl0sXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIG9wYWNpdHk6IDAuNzUsXHJcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAvLyBleGFtcGxlIGNvbG9ycyB3aXRoIGRhcmsgbW9kZVxyXG4gIGNvbG9yczoge1xyXG4gICAgdGV4dDogJyMwMjAyMDInLCAvLyBib2R5IGNvbG9yIGFuZCBwcmltYXJ5IGNvbG9yXHJcbiAgICB0ZXh0X3NlY29uZGFyeTogJyM1NzU3NTcnLCAvLyBzZWNvbmRhcnkgYm9keSBjb2xvclxyXG4gICAgaGVhZGluZzogJyMwNTY2NzYnLCAvLyBwcmltYXJ5IGhlYWRpbmcgY29sb3JcclxuICAgIGhlYWRpbmdfc2Vjb25kYXJ5OiAnIzVlYWFhOCcsIC8vIGhlYWRpbmcgY29sb3JcclxuICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJywgLy8gYm9keSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBiYWNrZ3JvdW5kX3NlY29uZGFyeTogJyNGOUZCRkQnLCAvLyBzZWNvbmRhcnkgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgYm9yZGVyX2NvbG9yOiAnI2U4ZGVkMicsIC8vIGJvcmRlciBjb2xvclxyXG4gICAgeWVsbG93OiAnI2U4ZGVkMicsIC8vIGJvcmRlciBjb2xvclxyXG4gICAgcHJpbWFyeTogJyMwNTY2NzYnLCAvLyBwcmltYXJ5IGJ1dHRvbiBhbmQgbGluayBjb2xvclxyXG4gICAgc2Vjb25kYXJ5OiAnIzVlYWFhOCcsIC8vIHNlY29uZGFyeSBjb2xvciAtIGNhbiBiZSB1c2VkIGZvciBob3ZlciBzdGF0ZXNcclxuICAgIG11dGVkOiAnI2EzZDJjYScsIC8vIG11dGVkIGNvbG9yXHJcbiAgICBhY2NlbnQ6ICcjZGM2NDU0JywgLy8gYSBjb250cmFzdCBjb2xvciBmb3IgZW1waGFzaXppbmcgVUlcclxuXHJcbiAgICAvLyBoaWdobGlnaHRcdGEgYmFja2dyb3VuZCBjb2xvciBmb3IgaGlnaGxpZ2h0aW5nIHRleHRcclxuICAgIG1vZGVzOiB7XHJcbiAgICAgIGRhcms6IHtcclxuICAgICAgICB0ZXh0OiAnI2ZmZicsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJyMwMDAnLFxyXG4gICAgICAgIHByaW1hcnk6ICcjMGNmJyxcclxuICAgICAgICBzZWNvbmRhcnk6ICcjMDljJyxcclxuICAgICAgICBtdXRlZDogJyMxMTEnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJyZWFrcG9pbnRzOiBbXHJcbiAgICAnNDgwcHgnLFxyXG4gICAgJzY0MHB4JyxcclxuICAgICc3NjhweCcsXHJcbiAgICAnMTAyNHB4JyxcclxuICAgICcxMjIwcHgnLFxyXG4gICAgJzEzNjZweCcsXHJcbiAgICAnMTYyMHB4JyxcclxuICBdLFxyXG4gIGZvbnRzOiB7XHJcbiAgICBib2R5OiBcIidETSBTYW5zJywgc2Fucy1zZXJpZlwiLFxyXG4gICAgaGVhZGluZzogXCInRE0gU2FucycsIHNhbnMtc2VyaWZcIixcclxuICB9LFxyXG4gIGZvbnRTaXplczogWzEyLCAxNSwgMTYsIDE4LCAyMCwgMjIsIDI0LCAyOCwgMzIsIDM2LCA0MiwgNDgsIDUyLCA2NF0sXHJcbiAgZm9udFdlaWdodHM6IHtcclxuICAgIGJvZHk6ICdub3JtYWwnLFxyXG4gICAgaGVhZGluZzogNTAwLFxyXG4gICAgYm9sZDogNzAwLFxyXG4gIH0sXHJcbiAgbGluZUhlaWdodHM6IHtcclxuICAgIGJvZHk6IDEuOCxcclxuICAgIGhlYWRpbmc6IDEuNSxcclxuICB9LFxyXG4gIGxldHRlclNwYWNpbmdzOiB7XHJcbiAgICBib2R5OiAnbm9ybWFsJyxcclxuICAgIGNhcHM6ICcwLjJlbScsXHJcbiAgICBoZWFkaW5nOiAnLTAuNXB4JyxcclxuICB9LFxyXG4gIHNwYWNlOiBbMCwgNSwgMTAsIDE1LCAyMCwgMjUsIDMwLCA1MCwgODAsIDEwMCwgMTIwLCAxNTBdLFxyXG4gIC8vIHZhcmlhbnRzIGNhbiB1c2UgY3VzdG9tLCB1c2VyLWRlZmluZWQgbmFtZXNcclxuICBsYXlvdXQ6IHtcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICBtYXhXaWR0aDogW1xyXG4gICAgICAgICcxMDAlJyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzc4MHB4JyxcclxuICAgICAgICAnMTAyMHB4JyxcclxuICAgICAgICAnMTIwMHB4JyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICcxMzEwcHgnLFxyXG4gICAgICBdLFxyXG4gICAgICBweDogWzQsIDZdLFxyXG4gICAgfSxcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICBjb2xvcjogJyMwMjA3M0UnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgcHk6IDMsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgfSxcclxuICAgIHRvb2xiYXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIH0sXHJcbiAgICBtYWluOiB7fSxcclxuICB9LFxyXG4gIHNlY3Rpb246IHtcclxuICAgIGtleUZlYXR1cmU6IHtcclxuICAgICAgcHQ6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICAgIHBiOiBbJzkwcHgnLCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE2NXB4J10sXHJcbiAgICB9LFxyXG4gICAgZmVhdHVyZToge1xyXG4gICAgICBwYjogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTcwcHgnXSxcclxuICAgIH0sXHJcbiAgICBuZXdzOiB7XHJcbiAgICAgIHBiOiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNzBweCddLFxyXG4gICAgfSxcclxuICAgIGNvcmVGZWF0dXJlOiB7XHJcbiAgICAgIHBiOiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNzBweCddLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICB9LFxyXG4gICAgdGVzdGltb25pYWw6IHtcclxuICAgICAgcHQ6IFs4LCBudWxsLCA4LCAnNzBweCcsIG51bGwsIDgsIG51bGwsICcxNDVweCddLFxyXG4gICAgICBwYjogWyc5MHB4JywgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxOTBweCddLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICB9LFxyXG4gICAgc2VydmljZXM6IHtcclxuICAgICAgcGI6IFsnOTBweCcsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTUwcHgnXSxcclxuICAgIH0sXHJcbiAgICBwcmljaW5nOiB7XHJcbiAgICAgIHB0OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxODBweCddLFxyXG4gICAgICBwYjogWyc5MHB4JywgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxODBweCddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY3Rpb25IZWFkZXI6IHtcclxuICAgIHdpZHRoOiBbJzEwMCUnLCBudWxsLCAnNTQwcHgnXSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtdDogWyctM3B4JywgbnVsbCwgLTFdLFxyXG4gICAgbWFyZ2luQm90dG9tOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc2NXB4JywgbnVsbCwgJzgwcHgnXSxcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmb250U2l6ZTogWycyNHB4JywgbnVsbCwgJzI4cHgnLCBudWxsLCBudWxsLCAnMzJweCcsIG51bGwsICczNnB4J10sXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjMsIG51bGwsIG51bGwsIDEuMjVdLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0uNXB4JyxcclxuICAgIH0sXHJcblxyXG4gICAgc3ViVGl0bGU6IHtcclxuICAgICAgZm9udFNpemU6IFswLCAnMTNweCcsIG51bGwsICcxNHB4J10sXHJcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6IFsnMS41cHgnLCBudWxsLCAnMnB4J10sXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcclxuICAgICAgbWI6IDIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0ZXh0OiB7XHJcbiAgICBoZWFkaW5nOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcclxuICAgICAgbGluZUhlaWdodDogJ2hlYWRpbmcnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnaGVhZGluZycsXHJcbiAgICAgIGZvbnRTaXplOiBbNF0sXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctLjU1cHgnLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgfSxcclxuICAgIGhlcm9QcmltYXJ5OiB7XHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICAgIGZvbnRTaXplOiBbXHJcbiAgICAgICAgJzMycHgnLFxyXG4gICAgICAgICczNnB4JyxcclxuICAgICAgICAnNDJweCcsXHJcbiAgICAgICAgJzQwcHgnLFxyXG4gICAgICAgICc0MnB4JyxcclxuICAgICAgICAnNTJweCcsXHJcbiAgICAgICAgJzU4cHgnLFxyXG4gICAgICAgICc2NnB4JyxcclxuICAgICAgXSxcclxuICAgICAgbGluZUhlaWdodDogWzEuMywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMS4yXSxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBtYjogWzQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDVdLFxyXG4gICAgfSxcclxuICAgIGhlcm9TZWNvbmRhcnk6IHtcclxuICAgICAgZm9udFNpemU6IFsyLCBudWxsLCAnMTdweCcsIG51bGwsIG51bGwsICcxOXB4JywgNF0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjksIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXHJcbiAgICAgIG1iOiA1LFxyXG4gICAgICBweDogWzAsIG51bGwsIDUsIDYsIG51bGwsIDgsIDldLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIC8vIGV4dGVuZHMgdGhlIHRleHQuaGVhZGluZyBzdHlsZXNcclxuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCA0XSxcclxuICAgICAgbGluZUhlaWdodDogMS4yNSxcclxuICAgICAgbWI6IDEsXHJcbiAgICB9LFxyXG4gICAgbGVhZDoge1xyXG4gICAgICBmb250U2l6ZTogNDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdETSBTYW5zJyxcclxuICAgICAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc2MHB4JyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0xLjVweCcsXHJcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICB9LFxyXG4gICAgbXV0ZWQ6IHtcclxuICAgICAgbGluZUhlaWdodDogJzI2cHgnLFxyXG4gICAgICBjb2xvcjogJ211dGVkJyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBjb2xvcjogJyMwMEE5OUQnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnNDBweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlua3M6IHtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICB9LFxyXG4gICAgYm9sZDoge1xyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICB9LFxyXG4gICAgbmF2OiB7XHJcbiAgICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcclxuICAgICAgcHg6IDI1LFxyXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgIH0sXHJcbiAgICBibG9nOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHB4OiAwLFxyXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnY29sb3IgMC4yNXMnLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBweDogMCxcclxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgIH0sXHJcbiAgICBsb2dvOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZXM6IHtcclxuICAgIGF2YXRhcjoge1xyXG4gICAgICB3aWR0aDogNDgsXHJcbiAgICAgIGhlaWdodDogNDgsXHJcbiAgICAgIGJvcmRlclJhZGl1czogOTk5OTksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgLy8gdmFyaWFudHMgZm9yIGJ1dHRvbnNcclxuICBidXR0b25zOiB7XHJcbiAgICBtZW51OiB7XHJcbiAgICAgIGRpc3BsYXk6IFtudWxsLCBudWxsLCAnbm9uZSddLFxyXG4gICAgfSwgLy8gZGVmYXVsdCB2YXJpYW50IGZvciBNZW51QnV0dG9uXHJcbiAgICAvLyB5b3UgY2FuIHJlZmVyZW5jZSBvdGhlciB2YWx1ZXMgZGVmaW5lZCBpbiB0aGUgdGhlbWVcclxuICAgIGRlZmF1bHRCdG46IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNDVweCcsXHJcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgbGV0dGVyU3BhY2luZ3M6ICctMC4xNXB4JyxcclxuICAgICAgcGFkZGluZzogWycxMnB4IDIwcHgnLCBudWxsLCAnMTVweCAzMHB4J10sXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgICAgb3V0bGluZTogMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgYmc6ICdwcmltYXJ5JyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgyMzMsIDc2LCA4NCwgMC41NykgMHB4IDlweCAyMHB4IC01cHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHdoaXRlQnV0dG9uOiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcclxuICAgICAgYmc6ICd3aGl0ZScsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGJveFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC41KSAwcHggMTJweCAyNHB4IC0xMHB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXHJcbiAgICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBwYWRkaW5nOiBbJzEwcHggMTVweCcsIG51bGwsICcxNXB4IDMwcHgnXSxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgYmc6ICdwcmltYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB0ZXh0QnV0dG9uOiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFs0LCA2XSxcclxuICAgICAgICBtcjogMixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJkczoge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBwYWRkaW5nOiAyLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICB9LFxyXG4gICAgb2ZmZXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgZmxleDogWycxIDEgY2FsYyg1MCUgLSAxNnB4KScsICcxIDEgMjAlJ10sXHJcbiAgICAgIG1pbkhlaWdodDogMTMwLFxyXG4gICAgICBtOiAyLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsXHJcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjRURFRkY2JyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgfSxcclxuICAgIGZlYXR1cmVDYXJkOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgcDogMyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmb3Jtczoge1xyXG4gICAgbGFiZWw6IHtcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIH0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAnYm9yZGVyX2NvbG9yJyxcclxuICAgICAgaGVpZ2h0OiA2MCxcclxuICAgICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICBib3hTaGFkb3c6ICh0KSA9PiBgMCAwIDAgMnB4ICR7dC5jb2xvcnMucHJpbWFyeX1gLFxyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgYmFkZ2VzOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIGNvbG9yOiAnYmFja2dyb3VuZCcsXHJcbiAgICAgIGJnOiAnIzI4QTVGRicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMzAsXHJcbiAgICAgIHA6ICczcHggMTFweCcsXHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyxcclxuICAgIH0sXHJcbiAgICBvdXRsaW5lOiB7XHJcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBib3hTaGFkb3c6ICdpbnNldCAwIDAgMCAxcHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBzdHlsZXM6IHtcclxuICAgIC8vIFRvIGFkZCBiYXNlLCB0b3AtbGV2ZWwgc3R5bGVzIHRvIHRoZSA8Ym9keT4gZWxlbWVudCwgdXNlIHRoZW1lLnN0eWxlcy5yb290LlxyXG4gICAgcm9vdDoge1xyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICdib2R5JyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgICBmb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxyXG4gICAgICAvLyBNb2RhbCBHbG9iYWwgU3R5bGVcclxuICAgICAgJy5tb2RhbC12aWRlby1jbG9zZS1idG4nOiB7XHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIH0sXHJcbiAgICAgICcubW9kYWwtdmlkZW8tbW92aWUtd3JhcCc6IHtcclxuICAgICAgICBtYXJnaW46IDYsXHJcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAvLyBEaXZpZGVyIHN0eWxlc1xyXG4gICAgaHI6IHtcclxuICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQnLFxyXG4gICAgICBib3JkZXJDb2xvcjogJyNEOUUwRTcnLFxyXG4gICAgfSxcclxuICAgIC8vIGFsc28geW91IGNhbiB1c2Ugb3RoZXIgSFRNTCBlbGVtZW50cyBzdHlsZSBoZXJlXHJcbiAgICB1bDoge1xyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgIH0sXHJcbiAgICBzck9ubHk6IHtcclxuICAgICAgYm9yZGVyOiAnMCAhaW1wb3J0YW50JyxcclxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KSAhaW1wb3J0YW50JyxcclxuICAgICAgY2xpcFBhdGg6ICdpbnNldCg1MCUpICFpbXBvcnRhbnQnLFxyXG4gICAgICBoZWlnaHQ6ICcxcHggIWltcG9ydGFudCcsXHJcbiAgICAgIG1hcmdpbjogJy0xcHggIWltcG9ydGFudCcsXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuICFpbXBvcnRhbnQnLFxyXG4gICAgICBwYWRkaW5nOiAnMCAhaW1wb3J0YW50JyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgd2lkdGg6ICcxcHggIWltcG9ydGFudCcsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAgIWltcG9ydGFudCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJjLWRyYXdlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jdXN0b20tc2Nyb2xsYmFyc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tb2RhbC12aWRlb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RpY2t5bm9kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aGVtZS11aVwiKTsiXSwic291cmNlUm9vdCI6IiJ9