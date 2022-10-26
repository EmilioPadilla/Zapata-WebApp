"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "@mui/material/styles/ThemeProvider"
const ThemeProvider_namespaceObject = require("@mui/material/styles/ThemeProvider");
var ThemeProvider_default = /*#__PURE__*/__webpack_require__.n(ThemeProvider_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/styles/createTheme"
const createTheme_namespaceObject = require("@mui/material/styles/createTheme");
var createTheme_default = /*#__PURE__*/__webpack_require__.n(createTheme_namespaceObject);
;// CONCATENATED MODULE: ./src/themes/DefaultTheme.ts

const DefaultTheme = createTheme_default()({
  palette: {
    primary: {
      main: '#404041'
    },
    secondary: {
      main: '#D3D3D3'
    },
    background: {
      default: '#F3F3F3'
    },
    divider: '#D3D3D3',
    text: {
      primary: '#404041'
    }
  },
  shape: {
    borderRadius: 5
  },
  typography: {
    h1: {
      fontSize: '3.25rem'
    },
    h2: {
      fontSize: '2.75rem'
    },
    h3: {
      fontSize: '2.375rem'
    },
    subtitle1: {
      fontSize: '1.75rem'
    },
    button: {
      fontSize: '1.25rem'
    },
    fontSize: 16
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          padding: '0.75rem 2rem'
        }
      }
    }
  }
});
/* harmony default export */ const themes_DefaultTheme = (DefaultTheme);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Main React parent component
 */








function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preconnect",
        href: "/"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=5"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "msapplication-TileColor",
        content: "#1c1c1c"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "theme-color",
        content: "#ffffff"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "P\xE1gina administrativa de Corporaci\xF3n Zapata en Zapata Connect"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Zapata Connect"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((ThemeProvider_default()), {
      theme: themes_DefaultTheme,
      children: [/*#__PURE__*/jsx_runtime_.jsx((CssBaseline_default()), {
        enableColorScheme: true
      }), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
    })]
  });
}

/* harmony default export */ const _app = (App);

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(445));
module.exports = __webpack_exports__;

})();