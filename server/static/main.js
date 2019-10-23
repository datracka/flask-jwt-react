/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/Users/vicensfayos/Projects/flask-jwt-react/server/static";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./client/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/apollo/store.js":
/*!********************************!*\
  !*** ./client/apollo/store.js ***!
  \********************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  extend type Query {\n    isDrawerOpened: Boolean!\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var typeDefs = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());
var resolvers = {};

/***/ }),

/***/ "./client/app.js":
/*!***********************!*\
  !*** ./client/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link-error */ "./node_modules/apollo-link-error/lib/bundle.esm.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./client/routes.js");
/* harmony import */ var _apollo_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./apollo/store */ "./client/apollo/store.js");









var cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]();
var client = new apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
  link: apollo_link__WEBPACK_IMPORTED_MODULE_5__["ApolloLink"].from([Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_4__["onError"])(function (_ref) {
    var graphQLErrors = _ref.graphQLErrors,
        networkError = _ref.networkError;
    if (graphQLErrors) graphQLErrors.forEach(function (_ref2) {
      var message = _ref2.message,
          locations = _ref2.locations,
          path = _ref2.path;
      return console.log("[GraphQL error]: Message: ".concat(message, ", Location: ").concat(locations, ", Path: ").concat(path));
    });
    if (networkError) console.log("[Network error]: ".concat(networkError));
  }), new apollo_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]({
    uri: "http://localhost:5000/graphql",
    credentials: "same-origin"
  })]),
  cache: cache,
  typeDefs: _apollo_store__WEBPACK_IMPORTED_MODULE_8__["typeDefs"],
  resolvers: _apollo_store__WEBPACK_IMPORTED_MODULE_8__["resolvers"]
});
cache.writeData({
  data: {
    isDrawerOpened: false
  }
});

var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["ApolloProvider"], {
    client: client
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./client/app.js");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById("root"));

/***/ }),

/***/ "./client/paths.js":
/*!*************************!*\
  !*** ./client/paths.js ***!
  \*************************/
/*! exports provided: getSignInPagePath, getLoginAction, getProtectedPagePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSignInPagePath", function() { return getSignInPagePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginAction", function() { return getLoginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProtectedPagePath", function() { return getProtectedPagePath; });
var getSignInPagePath = function getSignInPagePath() {
  return "/";
};
var getLoginAction = function getLoginAction() {
  return "/login";
};
var getProtectedPagePath = function getProtectedPagePath() {
  return "/protected";
};

/***/ }),

/***/ "./client/private-route.js":
/*!*********************************!*\
  !*** ./client/private-route.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paths */ "./client/paths.js");
/* harmony import */ var _utils_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/local-storage */ "./client/utils/local-storage.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var PrivateRoute = function PrivateRoute(_ref) {
  var Component = _ref.component,
      history = _ref.history,
      path = _ref.path,
      props = _objectWithoutProperties(_ref, ["component", "history", "path"]);

  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      allowRender = _React$useState2[0],
      setAllowRender = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    var token = Object(_utils_local_storage__WEBPACK_IMPORTED_MODULE_4__["getFromLocalStorage"])(_utils_local_storage__WEBPACK_IMPORTED_MODULE_4__["TOKEN_KEY"]);

    if (!token && location.pathname === path) {
      window.location.href = Object(_paths__WEBPACK_IMPORTED_MODULE_3__["getSignInPagePath"])();
    }

    setAllowRender(true);
  }, []);
  return allowRender ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], _extends({}, props, {
    path: path,
    exact: true,
    component: Component
  })) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(PrivateRoute));

/***/ }),

/***/ "./client/protected-page.js":
/*!**********************************!*\
  !*** ./client/protected-page.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



var ProtectedPage = function ProtectedPage() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  console.log(history);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Protected Page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "click to query")));
};

/* harmony default export */ __webpack_exports__["default"] = (ProtectedPage);

/***/ }),

/***/ "./client/routes.js":
/*!**************************!*\
  !*** ./client/routes.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paths */ "./client/paths.js");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in-page */ "./client/sign-in-page.js");
/* harmony import */ var _protected_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./protected-page */ "./client/protected-page.js");
/* harmony import */ var _private_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./private-route */ "./client/private-route.js");






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: Object(_paths__WEBPACK_IMPORTED_MODULE_2__["getSignInPagePath"])(),
    exact: true,
    component: _sign_in_page__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_private_route__WEBPACK_IMPORTED_MODULE_5__["default"], {
    path: Object(_paths__WEBPACK_IMPORTED_MODULE_2__["getProtectedPagePath"])(),
    exact: true,
    component: _protected_page__WEBPACK_IMPORTED_MODULE_4__["default"]
  }));
});

/***/ }),

/***/ "./client/sign-in-page.js":
/*!********************************!*\
  !*** ./client/sign-in-page.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _utils_query_string_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/query-string-helpers */ "./client/utils/query-string-helpers.js");
/* harmony import */ var _utils_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/local-storage */ "./client/utils/local-storage.js");
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paths */ "./client/paths.js");






var SignInPage = function SignInPage() {
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    var params = Object(_utils_query_string_helpers__WEBPACK_IMPORTED_MODULE_2__["toObject"])(location.search);
    var token = Object(_utils_local_storage__WEBPACK_IMPORTED_MODULE_3__["getFromLocalStorage"])(_utils_local_storage__WEBPACK_IMPORTED_MODULE_3__["TOKEN_KEY"]);
    console.log("token: ", params.token || token);

    if (params.token || token) {
      Object(_utils_local_storage__WEBPACK_IMPORTED_MODULE_3__["saveInLocalStorage"])(_utils_local_storage__WEBPACK_IMPORTED_MODULE_3__["TOKEN_KEY"], params.token); // window.location.href = getProtectedPagePath();
    }
  }, []);

  var onClick = function onClick() {
    console.log("login", Object(_paths__WEBPACK_IMPORTED_MODULE_4__["getLoginAction"])());
    window.location.href = Object(_paths__WEBPACK_IMPORTED_MODULE_4__["getLoginAction"])();
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: onClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "sign in using")));
};

/* harmony default export */ __webpack_exports__["default"] = (SignInPage);

/***/ }),

/***/ "./client/utils/local-storage.js":
/*!***************************************!*\
  !*** ./client/utils/local-storage.js ***!
  \***************************************/
/*! exports provided: TOKEN_KEY, extractToken, removeLocalStorageKey, saveInLocalStorage, getFromLocalStorage, getValidToken, getDecodedToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_KEY", function() { return TOKEN_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractToken", function() { return extractToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLocalStorageKey", function() { return removeLocalStorageKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveInLocalStorage", function() { return saveInLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFromLocalStorage", function() { return getFromLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValidToken", function() { return getValidToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDecodedToken", function() { return getDecodedToken; });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);

var TOKEN_KEY = "userToken";
function extractToken(response) {
  return response.xhr.getResponseHeader("Authorization").split(" ")[1];
}
function removeLocalStorageKey(key) {
  localStorage.removeItem(key);
}
function saveInLocalStorage(key, token) {
  if (token) {
    // Remember the token
    localStorage.setItem(key, token);
  }
}
function getFromLocalStorage(key) {
  return localStorage.getItem(key);
}
function getValidToken(key) {
  var token = localStorage.getItem(key);

  try {
    var decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(token);
    var now = Date.now() / 1000; // Check if token has expired

    if (now > decodedToken.exp) {
      return null;
    } // Valid token


    return token;
  } catch (error) {
    // Invalid token
    return null;
  }
}
function getDecodedToken(key) {
  var validToken = getValidToken(key);

  if (validToken) {
    return jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(validToken);
  } else {
    return null;
  }
}

/***/ }),

/***/ "./client/utils/query-string-helpers.js":
/*!**********************************************!*\
  !*** ./client/utils/query-string-helpers.js ***!
  \**********************************************/
/*! exports provided: toQueryString, toObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toQueryString", function() { return toQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toObject", function() { return toObject; });
function toObject(params) {
  if (Object.entries(params).length === 0) return params;
  var search = params.substring(1);
  if (!search) return {};
  return JSON.parse("{\"".concat(decodeURIComponent(search).replace(/"/g, '\\"') // eslint-disable-line quotes
  .replace(/&/g, '","') // eslint-disable-line quotes
  .replace(/=/g, '":"'), "\"}") // eslint-disable-line quotes
  );
}

function toQueryString(paramsObject) {
  return Object.keys(paramsObject).map(function (key) {
    return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(paramsObject[key]));
  }).join("&");
}



/***/ })

/******/ });
//# sourceMappingURL=main.js.map