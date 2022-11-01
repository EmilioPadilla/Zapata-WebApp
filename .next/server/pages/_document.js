"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

<<<<<<< HEAD
/***/ 613:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



const _excluded = ["strategy", "src", "children", "dangerouslySetInnerHTML"],
      _excluded2 = ["strategy"],
      _excluded3 = ["crossOrigin", "nonce"],
      _excluded4 = ["strategy", "children", "dangerouslySetInnerHTML", "src"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Html = Html;
exports.Main = Main;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(689));

var _constants = __webpack_require__(724);

var _getPageFiles = __webpack_require__(140);

var _htmlescape = __webpack_require__(716);

var _isError = _interopRequireDefault(__webpack_require__(676));

var _htmlContext = __webpack_require__(743);

class Document extends _react.default.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static getInitialProps(ctx) {
    return ctx.defaultGetInitialProps(ctx);
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports["default"] = Document;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

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

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles).getPageFiles(buildManifest, "/_app");
  const pageFiles =  true && inAmpMode ? [] : (0, _getPageFiles).getPageFiles(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}

function getPolyfillScripts(context, props) {
  // polyfills.js has to be rendered as nomodule without async
  // It also has to be the first script to load
  const {
    assetPrefix,
    buildManifest,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading,
    crossOrigin
  } = context;
  return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith(".js") && !polyfill.endsWith(".module.js")).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
    key: polyfill,
    defer: !disableOptimizedLoading,
    nonce: props.nonce,
    crossOrigin: props.crossOrigin || crossOrigin,
    noModule: true,
    src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
  }));
}

function hasComponentProps(child) {
  return !!child && !!child.props;
}

function AmpStyles({
  styles
}) {
  if (!styles) return null; // try to parse styles from fragment for backwards compat

  const curStyles = Array.isArray(styles) ? styles : [];

  if ( // @ts-ignore Property 'props' does not exist on type ReactElement
  styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
  Array.isArray(styles.props.children)) {
    const hasStyles = el => {
      var ref, ref1;
      return el == null ? void 0 : (ref = el.props) == null ? void 0 : (ref1 = ref.dangerouslySetInnerHTML) == null ? void 0 : ref1.__html;
    }; // @ts-ignore Property 'props' does not exist on type ReactElement


    styles.props.children.forEach(child => {
      if (Array.isArray(child)) {
        child.forEach(el => hasStyles(el) && curStyles.push(el));
      } else if (hasStyles(child)) {
        curStyles.push(child);
      }
    });
  }
  /* Add custom styles before AMP styles to prevent accidental overrides */


  return /*#__PURE__*/_react.default.createElement("style", {
    "amp-custom": "",
    dangerouslySetInnerHTML: {
      __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join("").replace(/\/\*# sourceMappingURL=.*\*\//g, "").replace(/\/\*@ sourceURL=.*?\*\//g, "")
    }
  });
}

function getDynamicChunks(context, props, files) {
  const {
    dynamicImports,
    assetPrefix,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading,
    crossOrigin
  } = context;
  return dynamicImports.map(file => {
    if (!file.endsWith(".js") || files.allFiles.includes(file)) return null;
    return /*#__PURE__*/_react.default.createElement("script", {
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || crossOrigin
    });
  });
}

function getScripts(context, props, files) {
  var ref;
  const {
    assetPrefix,
    buildManifest,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading,
    crossOrigin
  } = context;
  const normalScripts = files.allFiles.filter(file => file.endsWith(".js"));
  const lowPriorityScripts = (ref = buildManifest.lowPriorityFiles) == null ? void 0 : ref.filter(file => file.endsWith(".js"));
  return [...normalScripts, ...lowPriorityScripts].map(file => {
    return /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      crossOrigin: props.crossOrigin || crossOrigin
    });
  });
}

function getPreNextWorkerScripts(context, props) {
  const {
    assetPrefix,
    scriptLoader,
    crossOrigin,
    nextScriptWorkers
  } = context; // disable `nextScriptWorkers` in edge runtime

  if (!nextScriptWorkers || "nodejs" === "edge") return null;

  try {
    let {
      partytownSnippet
    } = require("@builder.io/partytown/integration");

    const children = Array.isArray(props.children) ? props.children : [props.children]; // Check to see if the user has defined their own Partytown configuration

    const userDefinedConfig = children.find(child => {
      var ref, ref2;
      return hasComponentProps(child) && (child == null ? void 0 : (ref = child.props) == null ? void 0 : (ref2 = ref.dangerouslySetInnerHTML) == null ? void 0 : ref2.__html.length) && "data-partytown-config" in child.props;
    });
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !userDefinedConfig && /*#__PURE__*/_react.default.createElement("script", {
      "data-partytown-config": "",
      dangerouslySetInnerHTML: {
        __html: `
            partytown = {
              lib: "${assetPrefix}/_next/static/~partytown/"
            };
          `
      }
    }), /*#__PURE__*/_react.default.createElement("script", {
      "data-partytown": "",
      dangerouslySetInnerHTML: {
        __html: partytownSnippet()
      }
    }), (scriptLoader.worker || []).map((file, index) => {
      const {
        strategy,
        src,
        children: scriptChildren,
        dangerouslySetInnerHTML
      } = file,
            scriptProps = _objectWithoutProperties(file, _excluded);

      let srcProps = {};

      if (src) {
        // Use external src if provided
        srcProps.src = src;
      } else if (dangerouslySetInnerHTML && dangerouslySetInnerHTML.__html) {
        // Embed inline script if provided with dangerouslySetInnerHTML
        srcProps.dangerouslySetInnerHTML = {
          __html: dangerouslySetInnerHTML.__html
        };
      } else if (scriptChildren) {
        // Embed inline script if provided with children
        srcProps.dangerouslySetInnerHTML = {
          __html: typeof scriptChildren === "string" ? scriptChildren : Array.isArray(scriptChildren) ? scriptChildren.join("") : ""
        };
      } else {
        throw new Error("Invalid usage of next/script. Did you forget to include a src attribute or an inline script? https://nextjs.org/docs/messages/invalid-script");
      }

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, srcProps, scriptProps, {
        type: "text/partytown",
        key: src || index,
        nonce: props.nonce,
        "data-nscript": "worker",
        crossOrigin: props.crossOrigin || crossOrigin
      }));
    }));
  } catch (err) {
    if ((0, _isError).default(err) && err.code !== "MODULE_NOT_FOUND") {
      console.warn(`Warning: ${err.message}`);
    }

    return null;
  }
}

function getPreNextScripts(context, props) {
  const {
    scriptLoader,
    disableOptimizedLoading,
    crossOrigin
  } = context;
  const webWorkerScripts = getPreNextWorkerScripts(context, props);
  const beforeInteractiveScripts = (scriptLoader.beforeInteractive || []).filter(script => script.src).map((file, index) => {
    const {
      strategy
    } = file,
          scriptProps = _objectWithoutProperties(file, _excluded2);

    var _defer;

    return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, scriptProps, {
      key: scriptProps.src || index,
      defer: (_defer = scriptProps.defer) != null ? _defer : !disableOptimizedLoading,
      nonce: props.nonce,
      "data-nscript": "beforeInteractive",
      crossOrigin: props.crossOrigin || crossOrigin
    }));
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, webWorkerScripts, beforeInteractiveScripts);
}

function getHeadHTMLProps(props) {
  const {
    crossOrigin,
    nonce
  } = props,
        restProps = _objectWithoutProperties(props, _excluded3); // This assignment is necessary for additional type checking to avoid unsupported attributes in <head>


  const headProps = restProps;
  return headProps;
}

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes("?") ? "&" : "?"}amp=1`;
}

class Head extends _react.default.Component {
  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports,
      crossOrigin,
      optimizeCss,
      optimizeFonts
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith(".css"));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = Array.from(new Set(dynamicImports.filter(file => file.endsWith(".css"))));

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (!optimizeCss) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || crossOrigin
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || crossOrigin,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? "" : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ""
      }));
    });

    if ( true && optimizeFonts) {
      cssLinkElements = this.makeStylesheetInert(cssLinkElements);
    }

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString,
      crossOrigin
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith(".js")) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: file,
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || crossOrigin
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader,
      crossOrigin
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith(".js");
    });
    return [...(scriptLoader.beforeInteractive || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || crossOrigin
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || crossOrigin
    }))];
  }

  getBeforeInteractiveInlineScripts() {
    const {
      scriptLoader
    } = this.context;
    const {
      nonce,
      crossOrigin
    } = this.props;
    return (scriptLoader.beforeInteractive || []).filter(script => !script.src && (script.dangerouslySetInnerHTML || script.children)).map((file, index) => {
      const {
        strategy,
        children,
        dangerouslySetInnerHTML,
        src
      } = file,
            scriptProps = _objectWithoutProperties(file, _excluded4);

      let html = "";

      if (dangerouslySetInnerHTML && dangerouslySetInnerHTML.__html) {
        html = dangerouslySetInnerHTML.__html;
      } else if (children) {
        html = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
      }

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, scriptProps, {
        dangerouslySetInnerHTML: {
          __html: html
        },
        key: scriptProps.id || index,
        nonce: nonce,
        "data-nscript": "beforeInteractive",
        crossOrigin: crossOrigin || "anonymous"
      }));
    });
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      var ref5, ref3;

      if ((c == null ? void 0 : c.type) === "link" && (c == null ? void 0 : (ref5 = c.props) == null ? void 0 : ref5.href) && _constants.OPTIMIZED_FONT_PROVIDERS.some(({
        url
      }) => {
        var ref, ref4;
        return c == null ? void 0 : (ref = c.props) == null ? void 0 : (ref4 = ref.href) == null ? void 0 : ref4.startsWith(url);
      })) {
        const newProps = _objectSpread(_objectSpread({}, c.props || {}), {}, {
          "data-href": c.props.href,
          href: undefined
        });

        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c == null ? void 0 : (ref3 = c.props) == null ? void 0 : ref3.children) {
        const newProps = _objectSpread(_objectSpread({}, c.props || {}), {}, {
          children: this.makeStylesheetInert(c.props.children)
        });

        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      }

      return c;
    }).filter(Boolean);
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload,
      disableOptimizedLoading,
      optimizeCss,
      optimizeFonts
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === "link" && c.props["rel"] === "preload" && c.props["as"] === "style") {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = _react.default.Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


    if (false) {}

    if ( true && optimizeFonts && !( true && inAmpMode)) {
      children = this.makeStylesheetInert(children);
    }

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if ( true && inAmpMode) {
        let badProp = "";

        if (type === "meta" && props.name === "viewport") {
          badProp = 'name="viewport"';
        } else if (type === "link" && props.rel === "canonical") {
          hasCanonicalRel = true;
        } else if (type === "script") {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf("ampproject") < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === "text/javascript")) {
            badProp = "<script";
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += "/>";
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === "link" && props.rel === "amphtml") {
          hasAmphtmlRel = true;
        }
      }

      return child;
    });
    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page,  true && inAmpMode);

    var _nonce, _nonce1;

    return /*#__PURE__*/_react.default.createElement("head", Object.assign({}, getHeadHTMLProps(this.props)), this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode":  true && inAmpMode ? "true" : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode":  true && inAmpMode ? "true" : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), children, optimizeFonts && /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-font-preconnect"
    }),  true && inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (__webpack_require__(368).cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), /*#__PURE__*/_react.default.createElement(AmpStyles, {
      styles: styles
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !( true && inAmpMode) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getBeforeInteractiveInlineScripts(), !optimizeCss && this.getCssLinks(files), !optimizeCss && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_nonce = this.props.nonce) != null ? _nonce : ""
    }), !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files), optimizeCss && this.getCssLinks(files), optimizeCss && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_nonce1 = this.props.nonce) != null ? _nonce1 : ""
    }), this.context.isDevelopment && // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)

    /*#__PURE__*/
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

_defineProperty(Head, "contextType", _htmlContext.HtmlContext);

exports.Head = Head;

function handleDocumentScriptLoaderItems(scriptLoader, __NEXT_DATA__, props) {
  var ref10, ref7, ref8, ref9;
  if (!props.children) return;
  const scriptLoaderItems = [];
  const children = Array.isArray(props.children) ? props.children : [props.children];
  const headChildren = (ref10 = children.find(child => child.type === Head)) == null ? void 0 : (ref7 = ref10.props) == null ? void 0 : ref7.children;
  const bodyChildren = (ref8 = children.find(child => child.type === "body")) == null ? void 0 : (ref9 = ref8.props) == null ? void 0 : ref9.children; // Scripts with beforeInteractive can be placed inside Head or <body> so children of both needs to be traversed

  const combinedChildren = [...(Array.isArray(headChildren) ? headChildren : [headChildren]), ...(Array.isArray(bodyChildren) ? bodyChildren : [bodyChildren])];

  _react.default.Children.forEach(combinedChildren, child => {
    var ref;
    if (!child) return; // When using the `next/script` component, register it in script loader.

    if ((ref = child.type) == null ? void 0 : ref.__nextScript) {
      if (child.props.strategy === "beforeInteractive") {
        scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);
        return;
      } else if (["lazyOnload", "afterInteractive", "worker"].includes(child.props.strategy)) {
        scriptLoaderItems.push(child.props);
        return;
      }
    }
  });

  __NEXT_DATA__.scriptLoader = scriptLoaderItems;
}

class NextScript extends _react.default.Component {
  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  static getInlineScriptSource(context) {
    const {
      __NEXT_DATA__,
      largePageDataBytes
    } = context;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      const bytes =  false ? 0 : Buffer.from(data).byteLength;

      const prettyBytes = (__webpack_require__(955)/* ["default"] */ .Z);

      if (largePageDataBytes && bytes > largePageDataBytes) {
        console.warn(`Warning: data for page "${__NEXT_DATA__.page}"${__NEXT_DATA__.page === context.dangerousAsPath ? "" : ` (path "${context.dangerousAsPath}")`} is ${prettyBytes(bytes)} which exceeds the threshold of ${prettyBytes(largePageDataBytes)}, this amount of data can reduce performance.\nSee more info here: https://nextjs.org/docs/messages/large-page-data`);
      }

      return (0, _htmlescape).htmlEscapeJsonString(data);
    } catch (err) {
      if ((0, _isError).default(err) && err.message.indexOf("circular structure") !== -1) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString,
      disableOptimizedLoading,
      crossOrigin
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if ( true && inAmpMode) {
      if (true) {
        return null;
      }

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || crossOrigin,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || crossOrigin,
        "data-ampdevmode": true
      })));
    }

    if (false) {}

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page,  true && inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || crossOrigin
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || crossOrigin,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
  }

}

_defineProperty(NextScript, "contextType", _htmlContext.HtmlContext);

exports.NextScript = NextScript;

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale,
    scriptLoader,
    __NEXT_DATA__
  } = (0, _react).useContext(_htmlContext.HtmlContext);
  docComponentsRendered.Html = true;
  handleDocumentScriptLoaderItems(scriptLoader, __NEXT_DATA__, props);
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp:  true && inAmpMode ? "" : undefined,
    "data-ampdevmode":  true && inAmpMode && false ? 0 : undefined
  }));
}

function Main() {
  const {
    docComponentsRendered
  } = (0, _react).useContext(_htmlContext.HtmlContext);
  docComponentsRendered.Main = true; // @ts-ignore

  return /*#__PURE__*/_react.default.createElement("next-js-internal-body-render-target", null);
} // Add a special property to the built-in `Document` component so later we can
// identify if a user customized `Document` is used or not.


const InternalFunctionDocument = function InternalFunctionDocument() {
  return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
};

Document[_constants.NEXT_BUILTIN_DOCUMENT] = InternalFunctionDocument;
=======
/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nconst _excluded = [\"strategy\", \"src\", \"children\", \"dangerouslySetInnerHTML\"],\n      _excluded2 = [\"strategy\"],\n      _excluded3 = [\"crossOrigin\", \"nonce\"],\n      _excluded4 = [\"strategy\", \"children\", \"dangerouslySetInnerHTML\", \"src\"];\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Html = Html;\nexports.Main = Main;\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _constants = __webpack_require__(/*! ../shared/lib/constants */ \"../shared/lib/constants\");\n\nvar _getPageFiles = __webpack_require__(/*! ../server/get-page-files */ \"../server/get-page-files\");\n\nvar _htmlescape = __webpack_require__(/*! ../server/htmlescape */ \"../server/htmlescape\");\n\nvar _isError = _interopRequireDefault(__webpack_require__(/*! ../lib/is-error */ \"./node_modules/next/dist/lib/is-error.js\"));\n\nvar _htmlContext = __webpack_require__(/*! ../shared/lib/html-context */ \"../shared/lib/html-context\");\n\nclass Document extends _react.default.Component {\n  /**\n  * `getInitialProps` hook returns the context object with the addition of `renderPage`.\n  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers\n  */\n  static getInitialProps(ctx) {\n    return ctx.defaultGetInitialProps(ctx);\n  }\n\n  render() {\n    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement(\"body\", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));\n  }\n\n}\n\nexports[\"default\"] = Document;\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    default: obj\n  };\n}\n\nfunction _getRequireWildcardCache() {\n  if (typeof WeakMap !== \"function\") return null;\n  var cache = new WeakMap();\n\n  _getRequireWildcardCache = function () {\n    return cache;\n  };\n\n  return cache;\n}\n\nfunction _interopRequireWildcard(obj) {\n  if (obj && obj.__esModule) {\n    return obj;\n  }\n\n  if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") {\n    return {\n      default: obj\n    };\n  }\n\n  var cache = _getRequireWildcardCache();\n\n  if (cache && cache.has(obj)) {\n    return cache.get(obj);\n  }\n\n  var newObj = {};\n  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;\n\n  for (var key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) {\n      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;\n\n      if (desc && (desc.get || desc.set)) {\n        Object.defineProperty(newObj, key, desc);\n      } else {\n        newObj[key] = obj[key];\n      }\n    }\n  }\n\n  newObj.default = obj;\n\n  if (cache) {\n    cache.set(obj, newObj);\n  }\n\n  return newObj;\n}\n\nfunction getDocumentFiles(buildManifest, pathname, inAmpMode) {\n  const sharedFiles = (0, _getPageFiles).getPageFiles(buildManifest, \"/_app\");\n  const pageFiles =  true && inAmpMode ? [] : (0, _getPageFiles).getPageFiles(buildManifest, pathname);\n  return {\n    sharedFiles,\n    pageFiles,\n    allFiles: [...new Set([...sharedFiles, ...pageFiles])]\n  };\n}\n\nfunction getPolyfillScripts(context, props) {\n  // polyfills.js has to be rendered as nomodule without async\n  // It also has to be the first script to load\n  const {\n    assetPrefix,\n    buildManifest,\n    devOnlyCacheBusterQueryString,\n    disableOptimizedLoading,\n    crossOrigin\n  } = context;\n  return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith(\".js\") && !polyfill.endsWith(\".module.js\")).map(polyfill => /*#__PURE__*/_react.default.createElement(\"script\", {\n    key: polyfill,\n    defer: !disableOptimizedLoading,\n    nonce: props.nonce,\n    crossOrigin: props.crossOrigin || crossOrigin,\n    noModule: true,\n    src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`\n  }));\n}\n\nfunction hasComponentProps(child) {\n  return !!child && !!child.props;\n}\n\nfunction AmpStyles({\n  styles\n}) {\n  if (!styles) return null; // try to parse styles from fragment for backwards compat\n\n  const curStyles = Array.isArray(styles) ? styles : [];\n\n  if ( // @ts-ignore Property 'props' does not exist on type ReactElement\n  styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement\n  Array.isArray(styles.props.children)) {\n    const hasStyles = el => {\n      var ref, ref1;\n      return el == null ? void 0 : (ref = el.props) == null ? void 0 : (ref1 = ref.dangerouslySetInnerHTML) == null ? void 0 : ref1.__html;\n    }; // @ts-ignore Property 'props' does not exist on type ReactElement\n\n\n    styles.props.children.forEach(child => {\n      if (Array.isArray(child)) {\n        child.forEach(el => hasStyles(el) && curStyles.push(el));\n      } else if (hasStyles(child)) {\n        curStyles.push(child);\n      }\n    });\n  }\n  /* Add custom styles before AMP styles to prevent accidental overrides */\n\n\n  return /*#__PURE__*/_react.default.createElement(\"style\", {\n    \"amp-custom\": \"\",\n    dangerouslySetInnerHTML: {\n      __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join(\"\").replace(/\\/\\*# sourceMappingURL=.*\\*\\//g, \"\").replace(/\\/\\*@ sourceURL=.*?\\*\\//g, \"\")\n    }\n  });\n}\n\nfunction getDynamicChunks(context, props, files) {\n  const {\n    dynamicImports,\n    assetPrefix,\n    isDevelopment,\n    devOnlyCacheBusterQueryString,\n    disableOptimizedLoading,\n    crossOrigin\n  } = context;\n  return dynamicImports.map(file => {\n    if (!file.endsWith(\".js\") || files.allFiles.includes(file)) return null;\n    return /*#__PURE__*/_react.default.createElement(\"script\", {\n      async: !isDevelopment && disableOptimizedLoading,\n      defer: !disableOptimizedLoading,\n      key: file,\n      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,\n      nonce: props.nonce,\n      crossOrigin: props.crossOrigin || crossOrigin\n    });\n  });\n}\n\nfunction getScripts(context, props, files) {\n  var ref;\n  const {\n    assetPrefix,\n    buildManifest,\n    isDevelopment,\n    devOnlyCacheBusterQueryString,\n    disableOptimizedLoading,\n    crossOrigin\n  } = context;\n  const normalScripts = files.allFiles.filter(file => file.endsWith(\".js\"));\n  const lowPriorityScripts = (ref = buildManifest.lowPriorityFiles) == null ? void 0 : ref.filter(file => file.endsWith(\".js\"));\n  return [...normalScripts, ...lowPriorityScripts].map(file => {\n    return /*#__PURE__*/_react.default.createElement(\"script\", {\n      key: file,\n      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,\n      nonce: props.nonce,\n      async: !isDevelopment && disableOptimizedLoading,\n      defer: !disableOptimizedLoading,\n      crossOrigin: props.crossOrigin || crossOrigin\n    });\n  });\n}\n\nfunction getPreNextWorkerScripts(context, props) {\n  const {\n    assetPrefix,\n    scriptLoader,\n    crossOrigin,\n    nextScriptWorkers\n  } = context; // disable `nextScriptWorkers` in edge runtime\n\n  if (!nextScriptWorkers || \"nodejs\" === \"edge\") return null;\n\n  try {\n    let {\n      partytownSnippet\n    } = require(\"@builder.io/partytown/integration\");\n\n    const children = Array.isArray(props.children) ? props.children : [props.children]; // Check to see if the user has defined their own Partytown configuration\n\n    const userDefinedConfig = children.find(child => {\n      var ref, ref2;\n      return hasComponentProps(child) && (child == null ? void 0 : (ref = child.props) == null ? void 0 : (ref2 = ref.dangerouslySetInnerHTML) == null ? void 0 : ref2.__html.length) && \"data-partytown-config\" in child.props;\n    });\n    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !userDefinedConfig && /*#__PURE__*/_react.default.createElement(\"script\", {\n      \"data-partytown-config\": \"\",\n      dangerouslySetInnerHTML: {\n        __html: `\n            partytown = {\n              lib: \"${assetPrefix}/_next/static/~partytown/\"\n            };\n          `\n      }\n    }), /*#__PURE__*/_react.default.createElement(\"script\", {\n      \"data-partytown\": \"\",\n      dangerouslySetInnerHTML: {\n        __html: partytownSnippet()\n      }\n    }), (scriptLoader.worker || []).map((file, index) => {\n      const {\n        strategy,\n        src,\n        children: scriptChildren,\n        dangerouslySetInnerHTML\n      } = file,\n            scriptProps = _objectWithoutProperties(file, _excluded);\n\n      let srcProps = {};\n\n      if (src) {\n        // Use external src if provided\n        srcProps.src = src;\n      } else if (dangerouslySetInnerHTML && dangerouslySetInnerHTML.__html) {\n        // Embed inline script if provided with dangerouslySetInnerHTML\n        srcProps.dangerouslySetInnerHTML = {\n          __html: dangerouslySetInnerHTML.__html\n        };\n      } else if (scriptChildren) {\n        // Embed inline script if provided with children\n        srcProps.dangerouslySetInnerHTML = {\n          __html: typeof scriptChildren === \"string\" ? scriptChildren : Array.isArray(scriptChildren) ? scriptChildren.join(\"\") : \"\"\n        };\n      } else {\n        throw new Error(\"Invalid usage of next/script. Did you forget to include a src attribute or an inline script? https://nextjs.org/docs/messages/invalid-script\");\n      }\n\n      return /*#__PURE__*/_react.default.createElement(\"script\", Object.assign({}, srcProps, scriptProps, {\n        type: \"text/partytown\",\n        key: src || index,\n        nonce: props.nonce,\n        \"data-nscript\": \"worker\",\n        crossOrigin: props.crossOrigin || crossOrigin\n      }));\n    }));\n  } catch (err) {\n    if ((0, _isError).default(err) && err.code !== \"MODULE_NOT_FOUND\") {\n      console.warn(`Warning: ${err.message}`);\n    }\n\n    return null;\n  }\n}\n\nfunction getPreNextScripts(context, props) {\n  const {\n    scriptLoader,\n    disableOptimizedLoading,\n    crossOrigin\n  } = context;\n  const webWorkerScripts = getPreNextWorkerScripts(context, props);\n  const beforeInteractiveScripts = (scriptLoader.beforeInteractive || []).filter(script => script.src).map((file, index) => {\n    const {\n      strategy\n    } = file,\n          scriptProps = _objectWithoutProperties(file, _excluded2);\n\n    var _defer;\n\n    return /*#__PURE__*/_react.default.createElement(\"script\", Object.assign({}, scriptProps, {\n      key: scriptProps.src || index,\n      defer: (_defer = scriptProps.defer) != null ? _defer : !disableOptimizedLoading,\n      nonce: props.nonce,\n      \"data-nscript\": \"beforeInteractive\",\n      crossOrigin: props.crossOrigin || crossOrigin\n    }));\n  });\n  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, webWorkerScripts, beforeInteractiveScripts);\n}\n\nfunction getHeadHTMLProps(props) {\n  const {\n    crossOrigin,\n    nonce\n  } = props,\n        restProps = _objectWithoutProperties(props, _excluded3); // This assignment is necessary for additional type checking to avoid unsupported attributes in <head>\n\n\n  const headProps = restProps;\n  return headProps;\n}\n\nfunction getAmpPath(ampPath, asPath) {\n  return ampPath || `${asPath}${asPath.includes(\"?\") ? \"&\" : \"?\"}amp=1`;\n}\n\nclass Head extends _react.default.Component {\n  getCssLinks(files) {\n    const {\n      assetPrefix,\n      devOnlyCacheBusterQueryString,\n      dynamicImports,\n      crossOrigin,\n      optimizeCss,\n      optimizeFonts\n    } = this.context;\n    const cssFiles = files.allFiles.filter(f => f.endsWith(\".css\"));\n    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the\n    // webpack runtime (`mini-css-extract-plugin`).\n\n    let unmangedFiles = new Set([]);\n    let dynamicCssFiles = Array.from(new Set(dynamicImports.filter(file => file.endsWith(\".css\"))));\n\n    if (dynamicCssFiles.length) {\n      const existing = new Set(cssFiles);\n      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));\n      unmangedFiles = new Set(dynamicCssFiles);\n      cssFiles.push(...dynamicCssFiles);\n    }\n\n    let cssLinkElements = [];\n    cssFiles.forEach(file => {\n      const isSharedFile = sharedFiles.has(file);\n\n      if (!optimizeCss) {\n        cssLinkElements.push( /*#__PURE__*/_react.default.createElement(\"link\", {\n          key: `${file}-preload`,\n          nonce: this.props.nonce,\n          rel: \"preload\",\n          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,\n          as: \"style\",\n          crossOrigin: this.props.crossOrigin || crossOrigin\n        }));\n      }\n\n      const isUnmanagedFile = unmangedFiles.has(file);\n      cssLinkElements.push( /*#__PURE__*/_react.default.createElement(\"link\", {\n        key: file,\n        nonce: this.props.nonce,\n        rel: \"stylesheet\",\n        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,\n        crossOrigin: this.props.crossOrigin || crossOrigin,\n        \"data-n-g\": isUnmanagedFile ? undefined : isSharedFile ? \"\" : undefined,\n        \"data-n-p\": isUnmanagedFile ? undefined : isSharedFile ? undefined : \"\"\n      }));\n    });\n\n    if (false) {}\n\n    return cssLinkElements.length === 0 ? null : cssLinkElements;\n  }\n\n  getPreloadDynamicChunks() {\n    const {\n      dynamicImports,\n      assetPrefix,\n      devOnlyCacheBusterQueryString,\n      crossOrigin\n    } = this.context;\n    return dynamicImports.map(file => {\n      if (!file.endsWith(\".js\")) {\n        return null;\n      }\n\n      return /*#__PURE__*/_react.default.createElement(\"link\", {\n        rel: \"preload\",\n        key: file,\n        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,\n        as: \"script\",\n        nonce: this.props.nonce,\n        crossOrigin: this.props.crossOrigin || crossOrigin\n      });\n    }) // Filter out nulled scripts\n    .filter(Boolean);\n  }\n\n  getPreloadMainLinks(files) {\n    const {\n      assetPrefix,\n      devOnlyCacheBusterQueryString,\n      scriptLoader,\n      crossOrigin\n    } = this.context;\n    const preloadFiles = files.allFiles.filter(file => {\n      return file.endsWith(\".js\");\n    });\n    return [...(scriptLoader.beforeInteractive || []).map(file => /*#__PURE__*/_react.default.createElement(\"link\", {\n      key: file.src,\n      nonce: this.props.nonce,\n      rel: \"preload\",\n      href: file.src,\n      as: \"script\",\n      crossOrigin: this.props.crossOrigin || crossOrigin\n    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement(\"link\", {\n      key: file,\n      nonce: this.props.nonce,\n      rel: \"preload\",\n      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,\n      as: \"script\",\n      crossOrigin: this.props.crossOrigin || crossOrigin\n    }))];\n  }\n\n  getBeforeInteractiveInlineScripts() {\n    const {\n      scriptLoader\n    } = this.context;\n    const {\n      nonce,\n      crossOrigin\n    } = this.props;\n    return (scriptLoader.beforeInteractive || []).filter(script => !script.src && (script.dangerouslySetInnerHTML || script.children)).map((file, index) => {\n      const {\n        strategy,\n        children,\n        dangerouslySetInnerHTML,\n        src\n      } = file,\n            scriptProps = _objectWithoutProperties(file, _excluded4);\n\n      let html = \"\";\n\n      if (dangerouslySetInnerHTML && dangerouslySetInnerHTML.__html) {\n        html = dangerouslySetInnerHTML.__html;\n      } else if (children) {\n        html = typeof children === \"string\" ? children : Array.isArray(children) ? children.join(\"\") : \"\";\n      }\n\n      return /*#__PURE__*/_react.default.createElement(\"script\", Object.assign({}, scriptProps, {\n        dangerouslySetInnerHTML: {\n          __html: html\n        },\n        key: scriptProps.id || index,\n        nonce: nonce,\n        \"data-nscript\": \"beforeInteractive\",\n        crossOrigin: crossOrigin || \"anonymous\"\n      }));\n    });\n  }\n\n  getDynamicChunks(files) {\n    return getDynamicChunks(this.context, this.props, files);\n  }\n\n  getPreNextScripts() {\n    return getPreNextScripts(this.context, this.props);\n  }\n\n  getScripts(files) {\n    return getScripts(this.context, this.props, files);\n  }\n\n  getPolyfillScripts() {\n    return getPolyfillScripts(this.context, this.props);\n  }\n\n  makeStylesheetInert(node) {\n    return _react.default.Children.map(node, c => {\n      var ref5, ref3;\n\n      if ((c == null ? void 0 : c.type) === \"link\" && (c == null ? void 0 : (ref5 = c.props) == null ? void 0 : ref5.href) && _constants.OPTIMIZED_FONT_PROVIDERS.some(({\n        url\n      }) => {\n        var ref, ref4;\n        return c == null ? void 0 : (ref = c.props) == null ? void 0 : (ref4 = ref.href) == null ? void 0 : ref4.startsWith(url);\n      })) {\n        const newProps = _objectSpread(_objectSpread({}, c.props || {}), {}, {\n          \"data-href\": c.props.href,\n          href: undefined\n        });\n\n        return /*#__PURE__*/_react.default.cloneElement(c, newProps);\n      } else if (c == null ? void 0 : (ref3 = c.props) == null ? void 0 : ref3.children) {\n        const newProps = _objectSpread(_objectSpread({}, c.props || {}), {}, {\n          children: this.makeStylesheetInert(c.props.children)\n        });\n\n        return /*#__PURE__*/_react.default.cloneElement(c, newProps);\n      }\n\n      return c;\n    }).filter(Boolean);\n  }\n\n  render() {\n    const {\n      styles,\n      ampPath,\n      inAmpMode,\n      hybridAmp,\n      canonicalBase,\n      __NEXT_DATA__,\n      dangerousAsPath,\n      headTags,\n      unstable_runtimeJS,\n      unstable_JsPreload,\n      disableOptimizedLoading,\n      optimizeCss,\n      optimizeFonts\n    } = this.context;\n    const disableRuntimeJS = unstable_runtimeJS === false;\n    const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;\n    this.context.docComponentsRendered.Head = true;\n    let {\n      head\n    } = this.context;\n    let cssPreloads = [];\n    let otherHeadElements = [];\n\n    if (head) {\n      head.forEach(c => {\n        if (c && c.type === \"link\" && c.props[\"rel\"] === \"preload\" && c.props[\"as\"] === \"style\") {\n          cssPreloads.push(c);\n        } else {\n          c && otherHeadElements.push(c);\n        }\n      });\n      head = cssPreloads.concat(otherHeadElements);\n    }\n\n    let children = _react.default.Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)\n\n\n    if (true) {\n      children = _react.default.Children.map(children, child => {\n        var ref;\n        const isReactHelmet = child == null ? void 0 : (ref = child.props) == null ? void 0 : ref[\"data-react-helmet\"];\n\n        if (!isReactHelmet) {\n          var ref6;\n\n          if ((child == null ? void 0 : child.type) === \"title\") {\n            console.warn(\"Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title\");\n          } else if ((child == null ? void 0 : child.type) === \"meta\" && (child == null ? void 0 : (ref6 = child.props) == null ? void 0 : ref6.name) === \"viewport\") {\n            console.warn(\"Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta\");\n          }\n        }\n\n        return child;\n      });\n      if (this.props.crossOrigin) console.warn(\"Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated\");\n    }\n\n    if (false) {}\n\n    let hasAmphtmlRel = false;\n    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags\n\n    head = _react.default.Children.map(head || [], child => {\n      if (!child) return child;\n      const {\n        type,\n        props\n      } = child;\n\n      if ( true && inAmpMode) {\n        let badProp = \"\";\n\n        if (type === \"meta\" && props.name === \"viewport\") {\n          badProp = 'name=\"viewport\"';\n        } else if (type === \"link\" && props.rel === \"canonical\") {\n          hasCanonicalRel = true;\n        } else if (type === \"script\") {\n          // only block if\n          // 1. it has a src and isn't pointing to ampproject's CDN\n          // 2. it is using dangerouslySetInnerHTML without a type or\n          // a type of text/javascript\n          if (props.src && props.src.indexOf(\"ampproject\") < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === \"text/javascript\")) {\n            badProp = \"<script\";\n            Object.keys(props).forEach(prop => {\n              badProp += ` ${prop}=\"${props[prop]}\"`;\n            });\n            badProp += \"/>\";\n          }\n        }\n\n        if (badProp) {\n          console.warn(`Found conflicting amp tag \"${child.type}\" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);\n          return null;\n        }\n      } else {\n        // non-amp mode\n        if (type === \"link\" && props.rel === \"amphtml\") {\n          hasAmphtmlRel = true;\n        }\n      }\n\n      return child;\n    });\n    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page,  true && inAmpMode);\n\n    var _nonce, _nonce1;\n\n    return /*#__PURE__*/_react.default.createElement(\"head\", Object.assign({}, getHeadHTMLProps(this.props)), this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(\"style\", {\n      \"data-next-hide-fouc\": true,\n      \"data-ampdevmode\":  true && inAmpMode ? \"true\" : undefined,\n      dangerouslySetInnerHTML: {\n        __html: `body{display:none}`\n      }\n    }), /*#__PURE__*/_react.default.createElement(\"noscript\", {\n      \"data-next-hide-fouc\": true,\n      \"data-ampdevmode\":  true && inAmpMode ? \"true\" : undefined\n    }, /*#__PURE__*/_react.default.createElement(\"style\", {\n      dangerouslySetInnerHTML: {\n        __html: `body{display:block}`\n      }\n    }))), head, /*#__PURE__*/_react.default.createElement(\"meta\", {\n      name: \"next-head-count\",\n      content: _react.default.Children.count(head || []).toString()\n    }), children, optimizeFonts && /*#__PURE__*/_react.default.createElement(\"meta\", {\n      name: \"next-font-preconnect\"\n    }),  true && inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width,minimum-scale=1,initial-scale=1\"\n    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement(\"link\", {\n      rel: \"canonical\",\n      href: canonicalBase + (__webpack_require__(/*! ../server/utils */ \"../server/utils\").cleanAmpPath)(dangerousAsPath)\n    }), /*#__PURE__*/_react.default.createElement(\"link\", {\n      rel: \"preload\",\n      as: \"script\",\n      href: \"https://cdn.ampproject.org/v0.js\"\n    }), /*#__PURE__*/_react.default.createElement(AmpStyles, {\n      styles: styles\n    }), /*#__PURE__*/_react.default.createElement(\"style\", {\n      \"amp-boilerplate\": \"\",\n      dangerouslySetInnerHTML: {\n        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`\n      }\n    }), /*#__PURE__*/_react.default.createElement(\"noscript\", null, /*#__PURE__*/_react.default.createElement(\"style\", {\n      \"amp-boilerplate\": \"\",\n      dangerouslySetInnerHTML: {\n        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`\n      }\n    })), /*#__PURE__*/_react.default.createElement(\"script\", {\n      async: true,\n      src: \"https://cdn.ampproject.org/v0.js\"\n    })), !( true && inAmpMode) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement(\"link\", {\n      rel: \"amphtml\",\n      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)\n    }), this.getBeforeInteractiveInlineScripts(), !optimizeCss && this.getCssLinks(files), !optimizeCss && /*#__PURE__*/_react.default.createElement(\"noscript\", {\n      \"data-n-css\": (_nonce = this.props.nonce) != null ? _nonce : \"\"\n    }), !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files), optimizeCss && this.getCssLinks(files), optimizeCss && /*#__PURE__*/_react.default.createElement(\"noscript\", {\n      \"data-n-css\": (_nonce1 = this.props.nonce) != null ? _nonce1 : \"\"\n    }), this.context.isDevelopment && // this element is used to mount development styles so the\n    // ordering matches production\n    // (by default, style-loader injects at the bottom of <head />)\n\n    /*#__PURE__*/\n    _react.default.createElement(\"noscript\", {\n      id: \"__next_css__DO_NOT_USE__\"\n    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));\n  }\n\n}\n\n_defineProperty(Head, \"contextType\", _htmlContext.HtmlContext);\n\nexports.Head = Head;\n\nfunction handleDocumentScriptLoaderItems(scriptLoader, __NEXT_DATA__, props) {\n  var ref10, ref7, ref8, ref9;\n  if (!props.children) return;\n  const scriptLoaderItems = [];\n  const children = Array.isArray(props.children) ? props.children : [props.children];\n  const headChildren = (ref10 = children.find(child => child.type === Head)) == null ? void 0 : (ref7 = ref10.props) == null ? void 0 : ref7.children;\n  const bodyChildren = (ref8 = children.find(child => child.type === \"body\")) == null ? void 0 : (ref9 = ref8.props) == null ? void 0 : ref9.children; // Scripts with beforeInteractive can be placed inside Head or <body> so children of both needs to be traversed\n\n  const combinedChildren = [...(Array.isArray(headChildren) ? headChildren : [headChildren]), ...(Array.isArray(bodyChildren) ? bodyChildren : [bodyChildren])];\n\n  _react.default.Children.forEach(combinedChildren, child => {\n    var ref;\n    if (!child) return; // When using the `next/script` component, register it in script loader.\n\n    if ((ref = child.type) == null ? void 0 : ref.__nextScript) {\n      if (child.props.strategy === \"beforeInteractive\") {\n        scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);\n        return;\n      } else if ([\"lazyOnload\", \"afterInteractive\", \"worker\"].includes(child.props.strategy)) {\n        scriptLoaderItems.push(child.props);\n        return;\n      }\n    }\n  });\n\n  __NEXT_DATA__.scriptLoader = scriptLoaderItems;\n}\n\nclass NextScript extends _react.default.Component {\n  getDynamicChunks(files) {\n    return getDynamicChunks(this.context, this.props, files);\n  }\n\n  getPreNextScripts() {\n    return getPreNextScripts(this.context, this.props);\n  }\n\n  getScripts(files) {\n    return getScripts(this.context, this.props, files);\n  }\n\n  getPolyfillScripts() {\n    return getPolyfillScripts(this.context, this.props);\n  }\n\n  static getInlineScriptSource(context) {\n    const {\n      __NEXT_DATA__,\n      largePageDataBytes\n    } = context;\n\n    try {\n      const data = JSON.stringify(__NEXT_DATA__);\n      const bytes =  false ? 0 : Buffer.from(data).byteLength;\n\n      const prettyBytes = (__webpack_require__(/*! ../lib/pretty-bytes */ \"./node_modules/next/dist/lib/pretty-bytes.js\")[\"default\"]);\n\n      if (largePageDataBytes && bytes > largePageDataBytes) {\n        console.warn(`Warning: data for page \"${__NEXT_DATA__.page}\"${__NEXT_DATA__.page === context.dangerousAsPath ? \"\" : ` (path \"${context.dangerousAsPath}\")`} is ${prettyBytes(bytes)} which exceeds the threshold of ${prettyBytes(largePageDataBytes)}, this amount of data can reduce performance.\\nSee more info here: https://nextjs.org/docs/messages/large-page-data`);\n      }\n\n      return (0, _htmlescape).htmlEscapeJsonString(data);\n    } catch (err) {\n      if ((0, _isError).default(err) && err.message.indexOf(\"circular structure\") !== -1) {\n        throw new Error(`Circular structure in \"getInitialProps\" result of page \"${__NEXT_DATA__.page}\". https://nextjs.org/docs/messages/circular-structure`);\n      }\n\n      throw err;\n    }\n  }\n\n  render() {\n    const {\n      assetPrefix,\n      inAmpMode,\n      buildManifest,\n      unstable_runtimeJS,\n      docComponentsRendered,\n      devOnlyCacheBusterQueryString,\n      disableOptimizedLoading,\n      crossOrigin\n    } = this.context;\n    const disableRuntimeJS = unstable_runtimeJS === false;\n    docComponentsRendered.NextScript = true;\n\n    if ( true && inAmpMode) {\n      if (false) {}\n\n      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];\n      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement(\"script\", {\n        id: \"__NEXT_DATA__\",\n        type: \"application/json\",\n        nonce: this.props.nonce,\n        crossOrigin: this.props.crossOrigin || crossOrigin,\n        dangerouslySetInnerHTML: {\n          __html: NextScript.getInlineScriptSource(this.context)\n        },\n        \"data-ampdevmode\": true\n      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement(\"script\", {\n        key: file,\n        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,\n        nonce: this.props.nonce,\n        crossOrigin: this.props.crossOrigin || crossOrigin,\n        \"data-ampdevmode\": true\n      })));\n    }\n\n    if (true) {\n      if (this.props.crossOrigin) console.warn(\"Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated\");\n    }\n\n    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page,  true && inAmpMode);\n    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement(\"script\", {\n      key: file,\n      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,\n      nonce: this.props.nonce,\n      crossOrigin: this.props.crossOrigin || crossOrigin\n    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement(\"script\", {\n      id: \"__NEXT_DATA__\",\n      type: \"application/json\",\n      nonce: this.props.nonce,\n      crossOrigin: this.props.crossOrigin || crossOrigin,\n      dangerouslySetInnerHTML: {\n        __html: NextScript.getInlineScriptSource(this.context)\n      }\n    }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));\n  }\n\n}\n\n_defineProperty(NextScript, \"contextType\", _htmlContext.HtmlContext);\n\nexports.NextScript = NextScript;\n\nfunction Html(props) {\n  const {\n    inAmpMode,\n    docComponentsRendered,\n    locale,\n    scriptLoader,\n    __NEXT_DATA__\n  } = (0, _react).useContext(_htmlContext.HtmlContext);\n  docComponentsRendered.Html = true;\n  handleDocumentScriptLoaderItems(scriptLoader, __NEXT_DATA__, props);\n  return /*#__PURE__*/_react.default.createElement(\"html\", Object.assign({}, props, {\n    lang: props.lang || locale || undefined,\n    amp:  true && inAmpMode ? \"\" : undefined,\n    \"data-ampdevmode\":  true && inAmpMode && true ? \"\" : undefined\n  }));\n}\n\nfunction Main() {\n  const {\n    docComponentsRendered\n  } = (0, _react).useContext(_htmlContext.HtmlContext);\n  docComponentsRendered.Main = true; // @ts-ignore\n\n  return /*#__PURE__*/_react.default.createElement(\"next-js-internal-body-render-target\", null);\n} // Add a special property to the built-in `Document` component so later we can\n// identify if a user customized `Document` is used or not.\n\n\nconst InternalFunctionDocument = function InternalFunctionDocument() {\n  return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement(\"body\", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));\n};\n\nDocument[_constants.NEXT_BUILTIN_DOCUMENT] = InternalFunctionDocument;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19kb2N1bWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDYkEsOENBQTZDO0VBQ3pDRyxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsWUFBQSxHQUFlRSxJQUFmO0FBQ0FGLFlBQUEsR0FBZUcsSUFBZjtBQUNBSCxrQkFBQSxHQUFrQixLQUFLLENBQXZCOztBQUNBLElBQUlLLE1BQU0sR0FBR0MsdUJBQXVCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFwQzs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELG1CQUFPLENBQUMsd0RBQXlCLENBQWxEOztBQUNBLElBQUlFLGFBQWEsR0FBR0YsbUJBQU8sQ0FBQywwREFBMEIsQ0FBdEQ7O0FBQ0EsSUFBSUcsV0FBVyxHQUFHSCxtQkFBTyxDQUFDLGtEQUFzQixDQUFoRDs7QUFDQSxJQUFJSSxRQUFRLEdBQUdDLHNCQUFzQixDQUFDTCxtQkFBTyxDQUFDLGlFQUFpQixDQUExQixDQUFyQzs7QUFDQSxJQUFJTSxZQUFZLEdBQUdOLG1CQUFPLENBQUMsOERBQTRCLENBQXZEOztBQUNBLE1BQU1PLFFBQU4sU0FBdUJULE1BQU0sQ0FBQ0QsT0FBUCxDQUFlVyxTQUF0QyxDQUFnRDtFQUM1QztBQUNKO0FBQ0E7QUFDQTtFQUE0QixPQUFmQyxlQUFlLENBQUNDLEdBQUQsRUFBTTtJQUMxQixPQUFPQSxHQUFHLENBQUNDLHNCQUFKLENBQTJCRCxHQUEzQixDQUFQO0VBQ0g7O0VBQ0RFLE1BQU0sR0FBRztJQUNMLE9BQU8sYUFBY2QsTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCbEIsSUFBN0IsRUFBbUMsSUFBbkMsRUFBeUMsYUFBY0csTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCQyxJQUE3QixFQUFtQyxJQUFuQyxDQUF2RCxFQUFpRyxhQUFjaEIsTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCLE1BQTdCLEVBQXFDLElBQXJDLEVBQTJDLGFBQWNmLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlZ0IsYUFBZixDQUE2QmpCLElBQTdCLEVBQW1DLElBQW5DLENBQXpELEVBQW1HLGFBQWNFLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlZ0IsYUFBZixDQUE2QkUsVUFBN0IsRUFBeUMsSUFBekMsQ0FBakgsQ0FBL0csQ0FBckI7RUFDSDs7QUFUMkM7O0FBV2hEdEIsa0JBQUEsR0FBa0JjLFFBQWxCOztBQUNBLFNBQVNGLHNCQUFULENBQWdDVyxHQUFoQyxFQUFxQztFQUNqQyxPQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7SUFDakNuQixPQUFPLEVBQUVtQjtFQUR3QixDQUFyQztBQUdIOztBQUNELFNBQVNFLHdCQUFULEdBQW9DO0VBQ2hDLElBQUksT0FBT0MsT0FBUCxLQUFtQixVQUF2QixFQUFtQyxPQUFPLElBQVA7RUFDbkMsSUFBSUMsS0FBSyxHQUFHLElBQUlELE9BQUosRUFBWjs7RUFDQUQsd0JBQXdCLEdBQUcsWUFBVztJQUNsQyxPQUFPRSxLQUFQO0VBQ0gsQ0FGRDs7RUFHQSxPQUFPQSxLQUFQO0FBQ0g7O0FBQ0QsU0FBU3JCLHVCQUFULENBQWlDaUIsR0FBakMsRUFBc0M7RUFDbEMsSUFBSUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQWYsRUFBMkI7SUFDdkIsT0FBT0QsR0FBUDtFQUNIOztFQUNELElBQUlBLEdBQUcsS0FBSyxJQUFSLElBQWdCLE9BQU9BLEdBQVAsS0FBZSxRQUFmLElBQTJCLE9BQU9BLEdBQVAsS0FBZSxVQUE5RCxFQUEwRTtJQUN0RSxPQUFPO01BQ0huQixPQUFPLEVBQUVtQjtJQUROLENBQVA7RUFHSDs7RUFDRCxJQUFJSSxLQUFLLEdBQUdGLHdCQUF3QixFQUFwQzs7RUFDQSxJQUFJRSxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsR0FBTixDQUFVTCxHQUFWLENBQWIsRUFBNkI7SUFDekIsT0FBT0ksS0FBSyxDQUFDRSxHQUFOLENBQVVOLEdBQVYsQ0FBUDtFQUNIOztFQUNELElBQUlPLE1BQU0sR0FBRyxFQUFiO0VBQ0EsSUFBSUMscUJBQXFCLEdBQUdqQyxNQUFNLENBQUNDLGNBQVAsSUFBeUJELE1BQU0sQ0FBQ2tDLHdCQUE1RDs7RUFDQSxLQUFJLElBQUlDLEdBQVIsSUFBZVYsR0FBZixFQUFtQjtJQUNmLElBQUl6QixNQUFNLENBQUNvQyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNiLEdBQXJDLEVBQTBDVSxHQUExQyxDQUFKLEVBQW9EO01BQ2hELElBQUlJLElBQUksR0FBR04scUJBQXFCLEdBQUdqQyxNQUFNLENBQUNrQyx3QkFBUCxDQUFnQ1QsR0FBaEMsRUFBcUNVLEdBQXJDLENBQUgsR0FBK0MsSUFBL0U7O01BQ0EsSUFBSUksSUFBSSxLQUFLQSxJQUFJLENBQUNSLEdBQUwsSUFBWVEsSUFBSSxDQUFDQyxHQUF0QixDQUFSLEVBQW9DO1FBQ2hDeEMsTUFBTSxDQUFDQyxjQUFQLENBQXNCK0IsTUFBdEIsRUFBOEJHLEdBQTlCLEVBQW1DSSxJQUFuQztNQUNILENBRkQsTUFFTztRQUNIUCxNQUFNLENBQUNHLEdBQUQsQ0FBTixHQUFjVixHQUFHLENBQUNVLEdBQUQsQ0FBakI7TUFDSDtJQUNKO0VBQ0o7O0VBQ0RILE1BQU0sQ0FBQzFCLE9BQVAsR0FBaUJtQixHQUFqQjs7RUFDQSxJQUFJSSxLQUFKLEVBQVc7SUFDUEEsS0FBSyxDQUFDVyxHQUFOLENBQVVmLEdBQVYsRUFBZU8sTUFBZjtFQUNIOztFQUNELE9BQU9BLE1BQVA7QUFDSDs7QUFDRCxTQUFTUyxnQkFBVCxDQUEwQkMsYUFBMUIsRUFBeUNDLFFBQXpDLEVBQW1EQyxTQUFuRCxFQUE4RDtFQUMxRCxNQUFNQyxXQUFXLEdBQUcsQ0FBQyxHQUFHbEMsYUFBSixFQUFtQm1DLFlBQW5CLENBQWdDSixhQUFoQyxFQUErQyxPQUEvQyxDQUFwQjtFQUNBLE1BQU1LLFNBQVMsR0FBR0MsS0FBQSxJQUF1Q0osU0FBdkMsR0FBbUQsRUFBbkQsR0FBd0QsQ0FBQyxHQUFHakMsYUFBSixFQUFtQm1DLFlBQW5CLENBQWdDSixhQUFoQyxFQUErQ0MsUUFBL0MsQ0FBMUU7RUFDQSxPQUFPO0lBQ0hFLFdBREc7SUFFSEUsU0FGRztJQUdISSxRQUFRLEVBQUUsQ0FDTixHQUFHLElBQUlDLEdBQUosQ0FBUSxDQUNQLEdBQUdQLFdBREksRUFFUCxHQUFHRSxTQUZJLENBQVIsQ0FERztFQUhQLENBQVA7QUFVSDs7QUFDRCxTQUFTTSxrQkFBVCxDQUE0QkMsT0FBNUIsRUFBcUNDLEtBQXJDLEVBQTRDO0VBQ3hDO0VBQ0E7RUFDQSxNQUFNO0lBQUVDLFdBQUY7SUFBZ0JkLGFBQWhCO0lBQWdDZSw2QkFBaEM7SUFBZ0VDLHVCQUFoRTtJQUEwRkM7RUFBMUYsSUFBNkdMLE9BQW5IO0VBQ0EsT0FBT1osYUFBYSxDQUFDa0IsYUFBZCxDQUE0QkMsTUFBNUIsQ0FBb0NDLFFBQUQsSUFBWUEsUUFBUSxDQUFDQyxRQUFULENBQWtCLEtBQWxCLEtBQTRCLENBQUNELFFBQVEsQ0FBQ0MsUUFBVCxDQUFrQixZQUFsQixDQUE1RSxFQUE2R0MsR0FBN0csQ0FBa0hGLFFBQUQsSUFBWSxhQUFjdkQsTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCLFFBQTdCLEVBQXVDO0lBQ2pMYSxHQUFHLEVBQUUyQixRQUQ0SztJQUVqTEcsS0FBSyxFQUFFLENBQUNQLHVCQUZ5SztJQUdqTFEsS0FBSyxFQUFFWCxLQUFLLENBQUNXLEtBSG9LO0lBSWpMUCxXQUFXLEVBQUVKLEtBQUssQ0FBQ0ksV0FBTixJQUFxQkEsV0FKK0k7SUFLakxRLFFBQVEsRUFBRSxJQUx1SztJQU1qTEMsR0FBRyxFQUFHLEdBQUVaLFdBQVksVUFBU00sUUFBUyxHQUFFTCw2QkFBOEI7RUFOMkcsQ0FBdkMsQ0FBM0ksQ0FBUDtBQVFIOztBQUNELFNBQVNZLGlCQUFULENBQTJCQyxLQUEzQixFQUFrQztFQUM5QixPQUFPLENBQUMsQ0FBQ0EsS0FBRixJQUFXLENBQUMsQ0FBQ0EsS0FBSyxDQUFDZixLQUExQjtBQUNIOztBQUNELFNBQVNnQixTQUFULENBQW1CO0VBQUVDO0FBQUYsQ0FBbkIsRUFBZ0M7RUFDNUIsSUFBSSxDQUFDQSxNQUFMLEVBQWEsT0FBTyxJQUFQLENBRGUsQ0FFNUI7O0VBQ0EsTUFBTUMsU0FBUyxHQUFHQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0gsTUFBZCxJQUF3QkEsTUFBeEIsR0FBaUMsRUFBbkQ7O0VBQ0EsS0FBSTtFQUNKQSxNQUFNLENBQUNqQixLQUFQLElBQWdCO0VBQ2hCbUIsS0FBSyxDQUFDQyxPQUFOLENBQWNILE1BQU0sQ0FBQ2pCLEtBQVAsQ0FBYXFCLFFBQTNCLENBRkEsRUFFc0M7SUFDbEMsTUFBTUMsU0FBUyxHQUFJQyxFQUFELElBQU07TUFDcEIsSUFBSUMsR0FBSixFQUFTQyxJQUFUO01BQ0EsT0FBT0YsRUFBRSxJQUFJLElBQU4sR0FBYSxLQUFLLENBQWxCLEdBQXNCLENBQUNDLEdBQUcsR0FBR0QsRUFBRSxDQUFDdkIsS0FBVixLQUFvQixJQUFwQixHQUEyQixLQUFLLENBQWhDLEdBQW9DLENBQUN5QixJQUFJLEdBQUdELEdBQUcsQ0FBQ0UsdUJBQVosS0FBd0MsSUFBeEMsR0FBK0MsS0FBSyxDQUFwRCxHQUF3REQsSUFBSSxDQUFDRSxNQUE5SDtJQUNILENBSEQsQ0FEa0MsQ0FLbEM7OztJQUNBVixNQUFNLENBQUNqQixLQUFQLENBQWFxQixRQUFiLENBQXNCTyxPQUF0QixDQUErQmIsS0FBRCxJQUFTO01BQ25DLElBQUlJLEtBQUssQ0FBQ0MsT0FBTixDQUFjTCxLQUFkLENBQUosRUFBMEI7UUFDdEJBLEtBQUssQ0FBQ2EsT0FBTixDQUFlTCxFQUFELElBQU1ELFNBQVMsQ0FBQ0MsRUFBRCxDQUFULElBQWlCTCxTQUFTLENBQUNXLElBQVYsQ0FBZU4sRUFBZixDQUFyQztNQUNILENBRkQsTUFFTyxJQUFJRCxTQUFTLENBQUNQLEtBQUQsQ0FBYixFQUFzQjtRQUN6QkcsU0FBUyxDQUFDVyxJQUFWLENBQWVkLEtBQWY7TUFDSDtJQUNKLENBTkQ7RUFPSDtFQUNEOzs7RUFBMEUsT0FBTyxhQUFjL0QsTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCLE9BQTdCLEVBQXNDO0lBQ2pJLGNBQWMsRUFEbUg7SUFFakkyRCx1QkFBdUIsRUFBRTtNQUNyQkMsTUFBTSxFQUFFVCxTQUFTLENBQUNULEdBQVYsQ0FBZXFCLEtBQUQsSUFBU0EsS0FBSyxDQUFDOUIsS0FBTixDQUFZMEIsdUJBQVosQ0FBb0NDLE1BQTNELEVBQW1FSSxJQUFuRSxDQUF3RSxFQUF4RSxFQUE0RUMsT0FBNUUsQ0FBb0YsZ0NBQXBGLEVBQXNILEVBQXRILEVBQTBIQSxPQUExSCxDQUFrSSwwQkFBbEksRUFBOEosRUFBOUo7SUFEYTtFQUZ3RyxDQUF0QyxDQUFyQjtBQU03RTs7QUFDRCxTQUFTQyxnQkFBVCxDQUEwQmxDLE9BQTFCLEVBQW1DQyxLQUFuQyxFQUEwQ2tDLEtBQTFDLEVBQWlEO0VBQzdDLE1BQU07SUFBRUMsY0FBRjtJQUFtQmxDLFdBQW5CO0lBQWlDbUMsYUFBakM7SUFBaURsQyw2QkFBakQ7SUFBaUZDLHVCQUFqRjtJQUEyR0M7RUFBM0csSUFBOEhMLE9BQXBJO0VBQ0EsT0FBT29DLGNBQWMsQ0FBQzFCLEdBQWYsQ0FBb0I0QixJQUFELElBQVE7SUFDOUIsSUFBSSxDQUFDQSxJQUFJLENBQUM3QixRQUFMLENBQWMsS0FBZCxDQUFELElBQXlCMEIsS0FBSyxDQUFDdEMsUUFBTixDQUFlMEMsUUFBZixDQUF3QkQsSUFBeEIsQ0FBN0IsRUFBNEQsT0FBTyxJQUFQO0lBQzVELE9BQU8sYUFBY3JGLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlZ0IsYUFBZixDQUE2QixRQUE3QixFQUF1QztNQUN4RHdFLEtBQUssRUFBRSxDQUFDSCxhQUFELElBQWtCakMsdUJBRCtCO01BRXhETyxLQUFLLEVBQUUsQ0FBQ1AsdUJBRmdEO01BR3hEdkIsR0FBRyxFQUFFeUQsSUFIbUQ7TUFJeER4QixHQUFHLEVBQUcsR0FBRVosV0FBWSxVQUFTdUMsU0FBUyxDQUFDSCxJQUFELENBQU8sR0FBRW5DLDZCQUE4QixFQUpyQjtNQUt4RFMsS0FBSyxFQUFFWCxLQUFLLENBQUNXLEtBTDJDO01BTXhEUCxXQUFXLEVBQUVKLEtBQUssQ0FBQ0ksV0FBTixJQUFxQkE7SUFOc0IsQ0FBdkMsQ0FBckI7RUFRSCxDQVZNLENBQVA7QUFXSDs7QUFDRCxTQUFTcUMsVUFBVCxDQUFvQjFDLE9BQXBCLEVBQTZCQyxLQUE3QixFQUFvQ2tDLEtBQXBDLEVBQTJDO0VBQ3ZDLElBQUlWLEdBQUo7RUFDQSxNQUFNO0lBQUV2QixXQUFGO0lBQWdCZCxhQUFoQjtJQUFnQ2lELGFBQWhDO0lBQWdEbEMsNkJBQWhEO0lBQWdGQyx1QkFBaEY7SUFBMEdDO0VBQTFHLElBQTZITCxPQUFuSTtFQUNBLE1BQU0yQyxhQUFhLEdBQUdSLEtBQUssQ0FBQ3RDLFFBQU4sQ0FBZVUsTUFBZixDQUF1QitCLElBQUQsSUFBUUEsSUFBSSxDQUFDN0IsUUFBTCxDQUFjLEtBQWQsQ0FBOUIsQ0FBdEI7RUFDQSxNQUFNbUMsa0JBQWtCLEdBQUcsQ0FBQ25CLEdBQUcsR0FBR3JDLGFBQWEsQ0FBQ3lELGdCQUFyQixLQUEwQyxJQUExQyxHQUFpRCxLQUFLLENBQXRELEdBQTBEcEIsR0FBRyxDQUFDbEIsTUFBSixDQUFZK0IsSUFBRCxJQUFRQSxJQUFJLENBQUM3QixRQUFMLENBQWMsS0FBZCxDQUFuQixDQUFyRjtFQUNBLE9BQU8sQ0FDSCxHQUFHa0MsYUFEQSxFQUVILEdBQUdDLGtCQUZBLEVBR0xsQyxHQUhLLENBR0E0QixJQUFELElBQVE7SUFDVixPQUFPLGFBQWNyRixNQUFNLENBQUNELE9BQVAsQ0FBZWdCLGFBQWYsQ0FBNkIsUUFBN0IsRUFBdUM7TUFDeERhLEdBQUcsRUFBRXlELElBRG1EO01BRXhEeEIsR0FBRyxFQUFHLEdBQUVaLFdBQVksVUFBU3VDLFNBQVMsQ0FBQ0gsSUFBRCxDQUFPLEdBQUVuQyw2QkFBOEIsRUFGckI7TUFHeERTLEtBQUssRUFBRVgsS0FBSyxDQUFDVyxLQUgyQztNQUl4RDRCLEtBQUssRUFBRSxDQUFDSCxhQUFELElBQWtCakMsdUJBSitCO01BS3hETyxLQUFLLEVBQUUsQ0FBQ1AsdUJBTGdEO01BTXhEQyxXQUFXLEVBQUVKLEtBQUssQ0FBQ0ksV0FBTixJQUFxQkE7SUFOc0IsQ0FBdkMsQ0FBckI7RUFRSCxDQVpNLENBQVA7QUFhSDs7QUFDRCxTQUFTeUMsdUJBQVQsQ0FBaUM5QyxPQUFqQyxFQUEwQ0MsS0FBMUMsRUFBaUQ7RUFDN0MsTUFBTTtJQUFFQyxXQUFGO0lBQWdCNkMsWUFBaEI7SUFBK0IxQyxXQUEvQjtJQUE2QzJDO0VBQTdDLElBQW9FaEQsT0FBMUUsQ0FENkMsQ0FFN0M7O0VBQ0EsSUFBSSxDQUFDZ0QsaUJBQUQsSUFBc0J0RCxRQUFBLEtBQTZCLE1BQXZELEVBQStELE9BQU8sSUFBUDs7RUFDL0QsSUFBSTtJQUNBLElBQUk7TUFBRXVEO0lBQUYsSUFBd0JDLE9BQXVCLENBQUMsbUNBQUQsQ0FBbkQ7O0lBQ0EsTUFBTTVCLFFBQVEsR0FBR0YsS0FBSyxDQUFDQyxPQUFOLENBQWNwQixLQUFLLENBQUNxQixRQUFwQixJQUFnQ3JCLEtBQUssQ0FBQ3FCLFFBQXRDLEdBQWlELENBQzlEckIsS0FBSyxDQUFDcUIsUUFEd0QsQ0FBbEUsQ0FGQSxDQUtBOztJQUNBLE1BQU02QixpQkFBaUIsR0FBRzdCLFFBQVEsQ0FBQzhCLElBQVQsQ0FBZXBDLEtBQUQsSUFBUztNQUM3QyxJQUFJUyxHQUFKLEVBQVM0QixJQUFUO01BQ0EsT0FBT3RDLGlCQUFpQixDQUFDQyxLQUFELENBQWpCLEtBQTZCQSxLQUFLLElBQUksSUFBVCxHQUFnQixLQUFLLENBQXJCLEdBQXlCLENBQUNTLEdBQUcsR0FBR1QsS0FBSyxDQUFDZixLQUFiLEtBQXVCLElBQXZCLEdBQThCLEtBQUssQ0FBbkMsR0FBdUMsQ0FBQ29ELElBQUksR0FBRzVCLEdBQUcsQ0FBQ0UsdUJBQVosS0FBd0MsSUFBeEMsR0FBK0MsS0FBSyxDQUFwRCxHQUF3RDBCLElBQUksQ0FBQ3pCLE1BQUwsQ0FBWTBCLE1BQWpLLEtBQTRLLDJCQUEyQnRDLEtBQUssQ0FBQ2YsS0FBcE47SUFDSCxDQUh5QixDQUExQjtJQUlBLE9BQU8sYUFBY2hELE1BQU0sQ0FBQ0QsT0FBUCxDQUFlZ0IsYUFBZixDQUE2QmYsTUFBTSxDQUFDRCxPQUFQLENBQWV1RyxRQUE1QyxFQUFzRCxJQUF0RCxFQUE0RCxDQUFDSixpQkFBRCxJQUFzQixhQUFjbEcsTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCLFFBQTdCLEVBQXVDO01BQ3hKLHlCQUF5QixFQUQrSDtNQUV4SjJELHVCQUF1QixFQUFFO1FBQ3JCQyxNQUFNLEVBQUc7QUFDekI7QUFDQSxzQkFBc0IxQixXQUFZO0FBQ2xDO0FBQ0E7TUFMcUM7SUFGK0gsQ0FBdkMsQ0FBaEcsRUFTakIsYUFBY2pELE1BQU0sQ0FBQ0QsT0FBUCxDQUFlZ0IsYUFBZixDQUE2QixRQUE3QixFQUF1QztNQUNyRCxrQkFBa0IsRUFEbUM7TUFFckQyRCx1QkFBdUIsRUFBRTtRQUNyQkMsTUFBTSxFQUFFcUIsZ0JBQWdCO01BREg7SUFGNEIsQ0FBdkMsQ0FURyxFQWNqQixDQUFDRixZQUFZLENBQUNTLE1BQWIsSUFBdUIsRUFBeEIsRUFBNEI5QyxHQUE1QixDQUFnQyxDQUFDNEIsSUFBRCxFQUFPbUIsS0FBUCxLQUFlO01BQy9DLE1BQU07UUFBRUMsUUFBRjtRQUFhNUMsR0FBYjtRQUFtQlEsUUFBUSxFQUFFcUMsY0FBN0I7UUFBOENoQztNQUE5QyxJQUEyRlcsSUFBakc7TUFBQSxNQUFpRnNCLFdBQWpGLDRCQUFpR3RCLElBQWpHOztNQUNBLElBQUl1QixRQUFRLEdBQUcsRUFBZjs7TUFDQSxJQUFJL0MsR0FBSixFQUFTO1FBQ0w7UUFDQStDLFFBQVEsQ0FBQy9DLEdBQVQsR0FBZUEsR0FBZjtNQUNILENBSEQsTUFHTyxJQUFJYSx1QkFBdUIsSUFBSUEsdUJBQXVCLENBQUNDLE1BQXZELEVBQStEO1FBQ2xFO1FBQ0FpQyxRQUFRLENBQUNsQyx1QkFBVCxHQUFtQztVQUMvQkMsTUFBTSxFQUFFRCx1QkFBdUIsQ0FBQ0M7UUFERCxDQUFuQztNQUdILENBTE0sTUFLQSxJQUFJK0IsY0FBSixFQUFvQjtRQUN2QjtRQUNBRSxRQUFRLENBQUNsQyx1QkFBVCxHQUFtQztVQUMvQkMsTUFBTSxFQUFFLE9BQU8rQixjQUFQLEtBQTBCLFFBQTFCLEdBQXFDQSxjQUFyQyxHQUFzRHZDLEtBQUssQ0FBQ0MsT0FBTixDQUFjc0MsY0FBZCxJQUFnQ0EsY0FBYyxDQUFDM0IsSUFBZixDQUFvQixFQUFwQixDQUFoQyxHQUEwRDtRQUR6RixDQUFuQztNQUdILENBTE0sTUFLQTtRQUNILE1BQU0sSUFBSThCLEtBQUosQ0FBVSw4SUFBVixDQUFOO01BQ0g7O01BQ0QsT0FBTyxhQUFjN0csTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCLFFBQTdCLEVBQXVDdEIsTUFBTSxDQUFDcUgsTUFBUCxDQUFjLEVBQWQsRUFBa0JGLFFBQWxCLEVBQTRCRCxXQUE1QixFQUF5QztRQUNqR0ksSUFBSSxFQUFFLGdCQUQyRjtRQUVqR25GLEdBQUcsRUFBRWlDLEdBQUcsSUFBSTJDLEtBRnFGO1FBR2pHN0MsS0FBSyxFQUFFWCxLQUFLLENBQUNXLEtBSG9GO1FBSWpHLGdCQUFnQixRQUppRjtRQUtqR1AsV0FBVyxFQUFFSixLQUFLLENBQUNJLFdBQU4sSUFBcUJBO01BTCtELENBQXpDLENBQXZDLENBQXJCO0lBT0gsQ0ExQkcsQ0FkaUIsQ0FBckI7RUF5Q0gsQ0FuREQsQ0FtREUsT0FBTzRELEdBQVAsRUFBWTtJQUNWLElBQUksQ0FBQyxHQUFHMUcsUUFBSixFQUFjUCxPQUFkLENBQXNCaUgsR0FBdEIsS0FBOEJBLEdBQUcsQ0FBQ0MsSUFBSixLQUFhLGtCQUEvQyxFQUFtRTtNQUMvREMsT0FBTyxDQUFDQyxJQUFSLENBQWMsWUFBV0gsR0FBRyxDQUFDSSxPQUFRLEVBQXJDO0lBQ0g7O0lBQ0QsT0FBTyxJQUFQO0VBQ0g7QUFDSjs7QUFDRCxTQUFTQyxpQkFBVCxDQUEyQnRFLE9BQTNCLEVBQW9DQyxLQUFwQyxFQUEyQztFQUN2QyxNQUFNO0lBQUU4QyxZQUFGO0lBQWlCM0MsdUJBQWpCO0lBQTJDQztFQUEzQyxJQUE0REwsT0FBbEU7RUFDQSxNQUFNdUUsZ0JBQWdCLEdBQUd6Qix1QkFBdUIsQ0FBQzlDLE9BQUQsRUFBVUMsS0FBVixDQUFoRDtFQUNBLE1BQU11RSx3QkFBd0IsR0FBRyxDQUFDekIsWUFBWSxDQUFDMEIsaUJBQWIsSUFBa0MsRUFBbkMsRUFBdUNsRSxNQUF2QyxDQUErQ21FLE1BQUQsSUFBVUEsTUFBTSxDQUFDNUQsR0FBL0QsRUFBb0VKLEdBQXBFLENBQXdFLENBQUM0QixJQUFELEVBQU9tQixLQUFQLEtBQWU7SUFDcEgsTUFBTTtNQUFFQztJQUFGLElBQWdDcEIsSUFBdEM7SUFBQSxNQUFzQnNCLFdBQXRCLDRCQUFzQ3RCLElBQXRDOztJQUNBLElBQUlxQyxNQUFKOztJQUNBLE9BQU8sYUFBYzFILE1BQU0sQ0FBQ0QsT0FBUCxDQUFlZ0IsYUFBZixDQUE2QixRQUE3QixFQUF1Q3RCLE1BQU0sQ0FBQ3FILE1BQVAsQ0FBYyxFQUFkLEVBQWtCSCxXQUFsQixFQUErQjtNQUN2Ri9FLEdBQUcsRUFBRStFLFdBQVcsQ0FBQzlDLEdBQVosSUFBbUIyQyxLQUQrRDtNQUV2RjlDLEtBQUssRUFBRSxDQUFDZ0UsTUFBTSxHQUFHZixXQUFXLENBQUNqRCxLQUF0QixLQUFnQyxJQUFoQyxHQUF1Q2dFLE1BQXZDLEdBQWdELENBQUN2RSx1QkFGK0I7TUFHdkZRLEtBQUssRUFBRVgsS0FBSyxDQUFDVyxLQUgwRTtNQUl2RixnQkFBZ0IsbUJBSnVFO01BS3ZGUCxXQUFXLEVBQUVKLEtBQUssQ0FBQ0ksV0FBTixJQUFxQkE7SUFMcUQsQ0FBL0IsQ0FBdkMsQ0FBckI7RUFPSCxDQVZnQyxDQUFqQztFQVdBLE9BQU8sYUFBY3BELE1BQU0sQ0FBQ0QsT0FBUCxDQUFlZ0IsYUFBZixDQUE2QmYsTUFBTSxDQUFDRCxPQUFQLENBQWV1RyxRQUE1QyxFQUFzRCxJQUF0RCxFQUE0RGdCLGdCQUE1RCxFQUE4RUMsd0JBQTlFLENBQXJCO0FBQ0g7O0FBQ0QsU0FBU0ksZ0JBQVQsQ0FBMEIzRSxLQUExQixFQUFpQztFQUM3QixNQUFNO0lBQUVJLFdBQUY7SUFBZ0JPO0VBQWhCLElBQXlDWCxLQUEvQztFQUFBLE1BQWlDNEUsU0FBakMsNEJBQStDNUUsS0FBL0MsY0FENkIsQ0FFN0I7OztFQUNBLE1BQU02RSxTQUFTLEdBQUdELFNBQWxCO0VBQ0EsT0FBT0MsU0FBUDtBQUNIOztBQUNELFNBQVNDLFVBQVQsQ0FBb0JDLE9BQXBCLEVBQTZCQyxNQUE3QixFQUFxQztFQUNqQyxPQUFPRCxPQUFPLElBQUssR0FBRUMsTUFBTyxHQUFFQSxNQUFNLENBQUMxQyxRQUFQLENBQWdCLEdBQWhCLElBQXVCLEdBQXZCLEdBQTZCLEdBQUksT0FBL0Q7QUFDSDs7QUFDRCxNQUFNdEUsSUFBTixTQUFtQmhCLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlVyxTQUFsQyxDQUE0QztFQUV4Q3VILFdBQVcsQ0FBQy9DLEtBQUQsRUFBUTtJQUNmLE1BQU07TUFBRWpDLFdBQUY7TUFBZ0JDLDZCQUFoQjtNQUFnRGlDLGNBQWhEO01BQWlFL0IsV0FBakU7TUFBK0U4RSxXQUEvRTtNQUE2RkM7SUFBN0YsSUFBa0gsS0FBS3BGLE9BQTdIO0lBQ0EsTUFBTXFGLFFBQVEsR0FBR2xELEtBQUssQ0FBQ3RDLFFBQU4sQ0FBZVUsTUFBZixDQUF1QitFLENBQUQsSUFBS0EsQ0FBQyxDQUFDN0UsUUFBRixDQUFXLE1BQVgsQ0FBM0IsQ0FBakI7SUFDQSxNQUFNbEIsV0FBVyxHQUFHLElBQUlPLEdBQUosQ0FBUXFDLEtBQUssQ0FBQzVDLFdBQWQsQ0FBcEIsQ0FIZSxDQUlmO0lBQ0E7O0lBQ0EsSUFBSWdHLGFBQWEsR0FBRyxJQUFJekYsR0FBSixDQUFRLEVBQVIsQ0FBcEI7SUFDQSxJQUFJMEYsZUFBZSxHQUFHcEUsS0FBSyxDQUFDcUUsSUFBTixDQUFXLElBQUkzRixHQUFKLENBQVFzQyxjQUFjLENBQUM3QixNQUFmLENBQXVCK0IsSUFBRCxJQUFRQSxJQUFJLENBQUM3QixRQUFMLENBQWMsTUFBZCxDQUE5QixDQUFSLENBQVgsQ0FBdEI7O0lBQ0EsSUFBSStFLGVBQWUsQ0FBQ2xDLE1BQXBCLEVBQTRCO01BQ3hCLE1BQU1vQyxRQUFRLEdBQUcsSUFBSTVGLEdBQUosQ0FBUXVGLFFBQVIsQ0FBakI7TUFDQUcsZUFBZSxHQUFHQSxlQUFlLENBQUNqRixNQUFoQixDQUF3QitFLENBQUQsSUFBSyxFQUFFSSxRQUFRLENBQUNsSCxHQUFULENBQWE4RyxDQUFiLEtBQW1CL0YsV0FBVyxDQUFDZixHQUFaLENBQWdCOEcsQ0FBaEIsQ0FBckIsQ0FBNUIsQ0FBbEI7TUFDQUMsYUFBYSxHQUFHLElBQUl6RixHQUFKLENBQVEwRixlQUFSLENBQWhCO01BQ0FILFFBQVEsQ0FBQ3ZELElBQVQsQ0FBYyxHQUFHMEQsZUFBakI7SUFDSDs7SUFDRCxJQUFJRyxlQUFlLEdBQUcsRUFBdEI7SUFDQU4sUUFBUSxDQUFDeEQsT0FBVCxDQUFrQlMsSUFBRCxJQUFRO01BQ3JCLE1BQU1zRCxZQUFZLEdBQUdyRyxXQUFXLENBQUNmLEdBQVosQ0FBZ0I4RCxJQUFoQixDQUFyQjs7TUFDQSxJQUFJLENBQUM2QyxXQUFMLEVBQWtCO1FBQ2RRLGVBQWUsQ0FBQzdELElBQWhCLEVBQXFCLGFBQWM3RSxNQUFNLENBQUNELE9BQVAsQ0FBZWdCLGFBQWYsQ0FBNkIsTUFBN0IsRUFBcUM7VUFDcEVhLEdBQUcsRUFBRyxHQUFFeUQsSUFBSyxVQUR1RDtVQUVwRTFCLEtBQUssRUFBRSxLQUFLWCxLQUFMLENBQVdXLEtBRmtEO1VBR3BFaUYsR0FBRyxFQUFFLFNBSCtEO1VBSXBFQyxJQUFJLEVBQUcsR0FBRTVGLFdBQVksVUFBU3VDLFNBQVMsQ0FBQ0gsSUFBRCxDQUFPLEdBQUVuQyw2QkFBOEIsRUFKVjtVQUtwRTRGLEVBQUUsRUFBRSxPQUxnRTtVQU1wRTFGLFdBQVcsRUFBRSxLQUFLSixLQUFMLENBQVdJLFdBQVgsSUFBMEJBO1FBTjZCLENBQXJDLENBQW5DO01BUUg7O01BQ0QsTUFBTTJGLGVBQWUsR0FBR1QsYUFBYSxDQUFDL0csR0FBZCxDQUFrQjhELElBQWxCLENBQXhCO01BQ0FxRCxlQUFlLENBQUM3RCxJQUFoQixFQUFxQixhQUFjN0UsTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCLE1BQTdCLEVBQXFDO1FBQ3BFYSxHQUFHLEVBQUV5RCxJQUQrRDtRQUVwRTFCLEtBQUssRUFBRSxLQUFLWCxLQUFMLENBQVdXLEtBRmtEO1FBR3BFaUYsR0FBRyxFQUFFLFlBSCtEO1FBSXBFQyxJQUFJLEVBQUcsR0FBRTVGLFdBQVksVUFBU3VDLFNBQVMsQ0FBQ0gsSUFBRCxDQUFPLEdBQUVuQyw2QkFBOEIsRUFKVjtRQUtwRUUsV0FBVyxFQUFFLEtBQUtKLEtBQUwsQ0FBV0ksV0FBWCxJQUEwQkEsV0FMNkI7UUFNcEUsWUFBWTJGLGVBQWUsR0FBR0MsU0FBSCxHQUFlTCxZQUFZLEdBQUcsRUFBSCxHQUFRSyxTQU5NO1FBT3BFLFlBQVlELGVBQWUsR0FBR0MsU0FBSCxHQUFlTCxZQUFZLEdBQUdLLFNBQUgsR0FBZTtNQVBELENBQXJDLENBQW5DO0lBU0gsQ0F0QkQ7O0lBdUJBLElBQUksS0FBSixFQUE2RCxFQUU1RDs7SUFDRCxPQUFPTixlQUFlLENBQUNyQyxNQUFoQixLQUEyQixDQUEzQixHQUErQixJQUEvQixHQUFzQ3FDLGVBQTdDO0VBQ0g7O0VBQ0RRLHVCQUF1QixHQUFHO0lBQ3RCLE1BQU07TUFBRS9ELGNBQUY7TUFBbUJsQyxXQUFuQjtNQUFpQ0MsNkJBQWpDO01BQWlFRTtJQUFqRSxJQUFvRixLQUFLTCxPQUEvRjtJQUNBLE9BQU9vQyxjQUFjLENBQUMxQixHQUFmLENBQW9CNEIsSUFBRCxJQUFRO01BQzlCLElBQUksQ0FBQ0EsSUFBSSxDQUFDN0IsUUFBTCxDQUFjLEtBQWQsQ0FBTCxFQUEyQjtRQUN2QixPQUFPLElBQVA7TUFDSDs7TUFDRCxPQUFPLGFBQWN4RCxNQUFNLENBQUNELE9BQVAsQ0FBZWdCLGFBQWYsQ0FBNkIsTUFBN0IsRUFBcUM7UUFDdEQ2SCxHQUFHLEVBQUUsU0FEaUQ7UUFFdERoSCxHQUFHLEVBQUV5RCxJQUZpRDtRQUd0RHdELElBQUksRUFBRyxHQUFFNUYsV0FBWSxVQUFTdUMsU0FBUyxDQUFDSCxJQUFELENBQU8sR0FBRW5DLDZCQUE4QixFQUh4QjtRQUl0RDRGLEVBQUUsRUFBRSxRQUprRDtRQUt0RG5GLEtBQUssRUFBRSxLQUFLWCxLQUFMLENBQVdXLEtBTG9DO1FBTXREUCxXQUFXLEVBQUUsS0FBS0osS0FBTCxDQUFXSSxXQUFYLElBQTBCQTtNQU5lLENBQXJDLENBQXJCO0lBUUgsQ0FaTSxFQVlMO0lBWkssQ0FhTkUsTUFiTSxDQWFDNkYsT0FiRCxDQUFQO0VBY0g7O0VBQ0RDLG1CQUFtQixDQUFDbEUsS0FBRCxFQUFRO0lBQ3ZCLE1BQU07TUFBRWpDLFdBQUY7TUFBZ0JDLDZCQUFoQjtNQUFnRDRDLFlBQWhEO01BQStEMUM7SUFBL0QsSUFBa0YsS0FBS0wsT0FBN0Y7SUFDQSxNQUFNc0csWUFBWSxHQUFHbkUsS0FBSyxDQUFDdEMsUUFBTixDQUFlVSxNQUFmLENBQXVCK0IsSUFBRCxJQUFRO01BQy9DLE9BQU9BLElBQUksQ0FBQzdCLFFBQUwsQ0FBYyxLQUFkLENBQVA7SUFDSCxDQUZvQixDQUFyQjtJQUdBLE9BQU8sQ0FDSCxHQUFHLENBQUNzQyxZQUFZLENBQUMwQixpQkFBYixJQUFrQyxFQUFuQyxFQUF1Qy9ELEdBQXZDLENBQTRDNEIsSUFBRCxJQUFRLGFBQWNyRixNQUFNLENBQUNELE9BQVAsQ0FBZWdCLGFBQWYsQ0FBNkIsTUFBN0IsRUFBcUM7TUFDakdhLEdBQUcsRUFBRXlELElBQUksQ0FBQ3hCLEdBRHVGO01BRWpHRixLQUFLLEVBQUUsS0FBS1gsS0FBTCxDQUFXVyxLQUYrRTtNQUdqR2lGLEdBQUcsRUFBRSxTQUg0RjtNQUlqR0MsSUFBSSxFQUFFeEQsSUFBSSxDQUFDeEIsR0FKc0Y7TUFLakdpRixFQUFFLEVBQUUsUUFMNkY7TUFNakcxRixXQUFXLEVBQUUsS0FBS0osS0FBTCxDQUFXSSxXQUFYLElBQTBCQTtJQU4wRCxDQUFyQyxDQUFqRSxDQURBLEVBU0gsR0FBR2lHLFlBQVksQ0FBQzVGLEdBQWIsQ0FBa0I0QixJQUFELElBQVEsYUFBY3JGLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlZ0IsYUFBZixDQUE2QixNQUE3QixFQUFxQztNQUN2RWEsR0FBRyxFQUFFeUQsSUFEa0U7TUFFdkUxQixLQUFLLEVBQUUsS0FBS1gsS0FBTCxDQUFXVyxLQUZxRDtNQUd2RWlGLEdBQUcsRUFBRSxTQUhrRTtNQUl2RUMsSUFBSSxFQUFHLEdBQUU1RixXQUFZLFVBQVN1QyxTQUFTLENBQUNILElBQUQsQ0FBTyxHQUFFbkMsNkJBQThCLEVBSlA7TUFLdkU0RixFQUFFLEVBQUUsUUFMbUU7TUFNdkUxRixXQUFXLEVBQUUsS0FBS0osS0FBTCxDQUFXSSxXQUFYLElBQTBCQTtJQU5nQyxDQUFyQyxDQUF2QyxDQVRBLENBQVA7RUFrQkg7O0VBQ0RrRyxpQ0FBaUMsR0FBRztJQUNoQyxNQUFNO01BQUV4RDtJQUFGLElBQW9CLEtBQUsvQyxPQUEvQjtJQUNBLE1BQU07TUFBRVksS0FBRjtNQUFVUDtJQUFWLElBQTJCLEtBQUtKLEtBQXRDO0lBQ0EsT0FBTyxDQUFDOEMsWUFBWSxDQUFDMEIsaUJBQWIsSUFBa0MsRUFBbkMsRUFBdUNsRSxNQUF2QyxDQUErQ21FLE1BQUQsSUFBVSxDQUFDQSxNQUFNLENBQUM1RCxHQUFSLEtBQWdCNEQsTUFBTSxDQUFDL0MsdUJBQVAsSUFBa0MrQyxNQUFNLENBQUNwRCxRQUF6RCxDQUF4RCxFQUE0SFosR0FBNUgsQ0FBZ0ksQ0FBQzRCLElBQUQsRUFBT21CLEtBQVAsS0FBZTtNQUNsSixNQUFNO1FBQUVDLFFBQUY7UUFBYXBDLFFBQWI7UUFBd0JLLHVCQUF4QjtRQUFrRGI7TUFBbEQsSUFBMkV3QixJQUFqRjtNQUFBLE1BQWlFc0IsV0FBakUsNEJBQWlGdEIsSUFBakY7O01BQ0EsSUFBSWtFLElBQUksR0FBRyxFQUFYOztNQUNBLElBQUk3RSx1QkFBdUIsSUFBSUEsdUJBQXVCLENBQUNDLE1BQXZELEVBQStEO1FBQzNENEUsSUFBSSxHQUFHN0UsdUJBQXVCLENBQUNDLE1BQS9CO01BQ0gsQ0FGRCxNQUVPLElBQUlOLFFBQUosRUFBYztRQUNqQmtGLElBQUksR0FBRyxPQUFPbEYsUUFBUCxLQUFvQixRQUFwQixHQUErQkEsUUFBL0IsR0FBMENGLEtBQUssQ0FBQ0MsT0FBTixDQUFjQyxRQUFkLElBQTBCQSxRQUFRLENBQUNVLElBQVQsQ0FBYyxFQUFkLENBQTFCLEdBQThDLEVBQS9GO01BQ0g7O01BQ0QsT0FBTyxhQUFjL0UsTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCLFFBQTdCLEVBQXVDdEIsTUFBTSxDQUFDcUgsTUFBUCxDQUFjLEVBQWQsRUFBa0JILFdBQWxCLEVBQStCO1FBQ3ZGakMsdUJBQXVCLEVBQUU7VUFDckJDLE1BQU0sRUFBRTRFO1FBRGEsQ0FEOEQ7UUFJdkYzSCxHQUFHLEVBQUUrRSxXQUFXLENBQUM2QyxFQUFaLElBQWtCaEQsS0FKZ0U7UUFLdkY3QyxLQUFLLEVBQUVBLEtBTGdGO1FBTXZGLGdCQUFnQixtQkFOdUU7UUFPdkZQLFdBQVcsRUFBRUEsV0FBVyxJQUFJWCxXQUErQmdIO01BUDRCLENBQS9CLENBQXZDLENBQXJCO0lBU0gsQ0FqQk0sQ0FBUDtFQWtCSDs7RUFDRHhFLGdCQUFnQixDQUFDQyxLQUFELEVBQVE7SUFDcEIsT0FBT0QsZ0JBQWdCLENBQUMsS0FBS2xDLE9BQU4sRUFBZSxLQUFLQyxLQUFwQixFQUEyQmtDLEtBQTNCLENBQXZCO0VBQ0g7O0VBQ0RtQyxpQkFBaUIsR0FBRztJQUNoQixPQUFPQSxpQkFBaUIsQ0FBQyxLQUFLdEUsT0FBTixFQUFlLEtBQUtDLEtBQXBCLENBQXhCO0VBQ0g7O0VBQ0R5QyxVQUFVLENBQUNQLEtBQUQsRUFBUTtJQUNkLE9BQU9PLFVBQVUsQ0FBQyxLQUFLMUMsT0FBTixFQUFlLEtBQUtDLEtBQXBCLEVBQTJCa0MsS0FBM0IsQ0FBakI7RUFDSDs7RUFDRHBDLGtCQUFrQixHQUFHO0lBQ2pCLE9BQU9BLGtCQUFrQixDQUFDLEtBQUtDLE9BQU4sRUFBZSxLQUFLQyxLQUFwQixDQUF6QjtFQUNIOztFQUNEaUcsbUJBQW1CLENBQUNTLElBQUQsRUFBTztJQUN0QixPQUFPMUosTUFBTSxDQUFDRCxPQUFQLENBQWU0SixRQUFmLENBQXdCbEcsR0FBeEIsQ0FBNEJpRyxJQUE1QixFQUFtQ0UsQ0FBRCxJQUFLO01BQzFDLElBQUlDLElBQUosRUFBVUMsSUFBVjs7TUFDQSxJQUFJLENBQUNGLENBQUMsSUFBSSxJQUFMLEdBQVksS0FBSyxDQUFqQixHQUFxQkEsQ0FBQyxDQUFDN0MsSUFBeEIsTUFBa0MsTUFBbEMsS0FBNkM2QyxDQUFDLElBQUksSUFBTCxHQUFZLEtBQUssQ0FBakIsR0FBcUIsQ0FBQ0MsSUFBSSxHQUFHRCxDQUFDLENBQUM1RyxLQUFWLEtBQW9CLElBQXBCLEdBQTJCLEtBQUssQ0FBaEMsR0FBb0M2RyxJQUFJLENBQUNoQixJQUEzRyxLQUFvSDFJLFVBQVUsQ0FBQzRKLHdCQUFYLENBQW9DQyxJQUFwQyxDQUF5QyxDQUFDO1FBQUVDO01BQUYsQ0FBRCxLQUFZO1FBQ3pLLElBQUl6RixHQUFKLEVBQVMwRixJQUFUO1FBQ0EsT0FBT04sQ0FBQyxJQUFJLElBQUwsR0FBWSxLQUFLLENBQWpCLEdBQXFCLENBQUNwRixHQUFHLEdBQUdvRixDQUFDLENBQUM1RyxLQUFULEtBQW1CLElBQW5CLEdBQTBCLEtBQUssQ0FBL0IsR0FBbUMsQ0FBQ2tILElBQUksR0FBRzFGLEdBQUcsQ0FBQ3FFLElBQVosS0FBcUIsSUFBckIsR0FBNEIsS0FBSyxDQUFqQyxHQUFxQ3FCLElBQUksQ0FBQ0MsVUFBTCxDQUFnQkYsR0FBaEIsQ0FBcEc7TUFDSCxDQUh1SCxDQUF4SCxFQUdJO1FBQ0EsTUFBTUcsUUFBUSxtQ0FDUFIsQ0FBQyxDQUFDNUcsS0FBRixJQUFXLEVBREo7VUFFVixhQUFhNEcsQ0FBQyxDQUFDNUcsS0FBRixDQUFRNkYsSUFGWDtVQUdWQSxJQUFJLEVBQUVHO1FBSEksRUFBZDs7UUFLQSxPQUFPLGFBQWNoSixNQUFNLENBQUNELE9BQVAsQ0FBZXNLLFlBQWYsQ0FBNEJULENBQTVCLEVBQStCUSxRQUEvQixDQUFyQjtNQUNILENBVkQsTUFVTyxJQUFJUixDQUFDLElBQUksSUFBTCxHQUFZLEtBQUssQ0FBakIsR0FBcUIsQ0FBQ0UsSUFBSSxHQUFHRixDQUFDLENBQUM1RyxLQUFWLEtBQW9CLElBQXBCLEdBQTJCLEtBQUssQ0FBaEMsR0FBb0M4RyxJQUFJLENBQUN6RixRQUFsRSxFQUE0RTtRQUMvRSxNQUFNK0YsUUFBUSxtQ0FDUFIsQ0FBQyxDQUFDNUcsS0FBRixJQUFXLEVBREo7VUFFVnFCLFFBQVEsRUFBRSxLQUFLNEUsbUJBQUwsQ0FBeUJXLENBQUMsQ0FBQzVHLEtBQUYsQ0FBUXFCLFFBQWpDO1FBRkEsRUFBZDs7UUFJQSxPQUFPLGFBQWNyRSxNQUFNLENBQUNELE9BQVAsQ0FBZXNLLFlBQWYsQ0FBNEJULENBQTVCLEVBQStCUSxRQUEvQixDQUFyQjtNQUNIOztNQUNELE9BQU9SLENBQVA7SUFDSCxDQXBCTSxFQW9CSnRHLE1BcEJJLENBb0JHNkYsT0FwQkgsQ0FBUDtFQXFCSDs7RUFDRHJJLE1BQU0sR0FBRztJQUNMLE1BQU07TUFBRW1ELE1BQUY7TUFBVzhELE9BQVg7TUFBcUIxRixTQUFyQjtNQUFpQ2lJLFNBQWpDO01BQTZDQyxhQUE3QztNQUE2REMsYUFBN0Q7TUFBNkVDLGVBQTdFO01BQStGQyxRQUEvRjtNQUEwR0Msa0JBQTFHO01BQStIQyxrQkFBL0g7TUFBb0p6SCx1QkFBcEo7TUFBOEsrRSxXQUE5SztNQUE0TEM7SUFBNUwsSUFBaU4sS0FBS3BGLE9BQTVOO0lBQ0EsTUFBTThILGdCQUFnQixHQUFHRixrQkFBa0IsS0FBSyxLQUFoRDtJQUNBLE1BQU1HLGdCQUFnQixHQUFHRixrQkFBa0IsS0FBSyxLQUF2QixJQUFnQyxDQUFDekgsdUJBQTFEO0lBQ0EsS0FBS0osT0FBTCxDQUFhZ0kscUJBQWIsQ0FBbUMvSixJQUFuQyxHQUEwQyxJQUExQztJQUNBLElBQUk7TUFBRWdLO0lBQUYsSUFBWSxLQUFLakksT0FBckI7SUFDQSxJQUFJa0ksV0FBVyxHQUFHLEVBQWxCO0lBQ0EsSUFBSUMsaUJBQWlCLEdBQUcsRUFBeEI7O0lBQ0EsSUFBSUYsSUFBSixFQUFVO01BQ05BLElBQUksQ0FBQ3BHLE9BQUwsQ0FBY2dGLENBQUQsSUFBSztRQUNkLElBQUlBLENBQUMsSUFBSUEsQ0FBQyxDQUFDN0MsSUFBRixLQUFXLE1BQWhCLElBQTBCNkMsQ0FBQyxDQUFDNUcsS0FBRixDQUFRLEtBQVIsTUFBbUIsU0FBN0MsSUFBMEQ0RyxDQUFDLENBQUM1RyxLQUFGLENBQVEsSUFBUixNQUFrQixPQUFoRixFQUF5RjtVQUNyRmlJLFdBQVcsQ0FBQ3BHLElBQVosQ0FBaUIrRSxDQUFqQjtRQUNILENBRkQsTUFFTztVQUNIQSxDQUFDLElBQUlzQixpQkFBaUIsQ0FBQ3JHLElBQWxCLENBQXVCK0UsQ0FBdkIsQ0FBTDtRQUNIO01BQ0osQ0FORDtNQU9Bb0IsSUFBSSxHQUFHQyxXQUFXLENBQUNFLE1BQVosQ0FBbUJELGlCQUFuQixDQUFQO0lBQ0g7O0lBQ0QsSUFBSTdHLFFBQVEsR0FBR3JFLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlNEosUUFBZixDQUF3QnlCLE9BQXhCLENBQWdDLEtBQUtwSSxLQUFMLENBQVdxQixRQUEzQyxFQUFxRGYsTUFBckQsQ0FBNEQ2RixPQUE1RCxDQUFmLENBbEJLLENBbUJMOzs7SUFDQSxJQUFJLE1BQXVDO01BQ3ZDOUUsUUFBUSxHQUFHckUsTUFBTSxDQUFDRCxPQUFQLENBQWU0SixRQUFmLENBQXdCbEcsR0FBeEIsQ0FBNEJZLFFBQTVCLEVBQXVDTixLQUFELElBQVM7UUFDdEQsSUFBSVMsR0FBSjtRQUNBLE1BQU02RyxhQUFhLEdBQUd0SCxLQUFLLElBQUksSUFBVCxHQUFnQixLQUFLLENBQXJCLEdBQXlCLENBQUNTLEdBQUcsR0FBR1QsS0FBSyxDQUFDZixLQUFiLEtBQXVCLElBQXZCLEdBQThCLEtBQUssQ0FBbkMsR0FBdUN3QixHQUFHLENBQUMsbUJBQUQsQ0FBekY7O1FBQ0EsSUFBSSxDQUFDNkcsYUFBTCxFQUFvQjtVQUNoQixJQUFJQyxJQUFKOztVQUNBLElBQUksQ0FBQ3ZILEtBQUssSUFBSSxJQUFULEdBQWdCLEtBQUssQ0FBckIsR0FBeUJBLEtBQUssQ0FBQ2dELElBQWhDLE1BQTBDLE9BQTlDLEVBQXVEO1lBQ25ERyxPQUFPLENBQUNDLElBQVIsQ0FBYSxrSEFBYjtVQUNILENBRkQsTUFFTyxJQUFJLENBQUNwRCxLQUFLLElBQUksSUFBVCxHQUFnQixLQUFLLENBQXJCLEdBQXlCQSxLQUFLLENBQUNnRCxJQUFoQyxNQUEwQyxNQUExQyxJQUFvRCxDQUFDaEQsS0FBSyxJQUFJLElBQVQsR0FBZ0IsS0FBSyxDQUFyQixHQUF5QixDQUFDdUgsSUFBSSxHQUFHdkgsS0FBSyxDQUFDZixLQUFkLEtBQXdCLElBQXhCLEdBQStCLEtBQUssQ0FBcEMsR0FBd0NzSSxJQUFJLENBQUNDLElBQXZFLE1BQWlGLFVBQXpJLEVBQXFKO1lBQ3hKckUsT0FBTyxDQUFDQyxJQUFSLENBQWEscUlBQWI7VUFDSDtRQUNKOztRQUNELE9BQU9wRCxLQUFQO01BQ0gsQ0FaVSxDQUFYO01BYUEsSUFBSSxLQUFLZixLQUFMLENBQVdJLFdBQWYsRUFBNEI4RCxPQUFPLENBQUNDLElBQVIsQ0FBYSxvSEFBYjtJQUMvQjs7SUFDRCxJQUFJLEtBQUosRUFBb0gsRUFFbkg7O0lBQ0QsSUFBSXFFLGFBQWEsR0FBRyxLQUFwQjtJQUNBLElBQUlDLGVBQWUsR0FBRyxLQUF0QixDQXhDSyxDQXlDTDs7SUFDQVQsSUFBSSxHQUFHaEwsTUFBTSxDQUFDRCxPQUFQLENBQWU0SixRQUFmLENBQXdCbEcsR0FBeEIsQ0FBNEJ1SCxJQUFJLElBQUksRUFBcEMsRUFBeUNqSCxLQUFELElBQVM7TUFDcEQsSUFBSSxDQUFDQSxLQUFMLEVBQVksT0FBT0EsS0FBUDtNQUNaLE1BQU07UUFBRWdELElBQUY7UUFBUy9EO01BQVQsSUFBb0JlLEtBQTFCOztNQUNBLElBQUl0QixLQUFBLElBQXVDSixTQUEzQyxFQUFzRDtRQUNsRCxJQUFJcUosT0FBTyxHQUFHLEVBQWQ7O1FBQ0EsSUFBSTNFLElBQUksS0FBSyxNQUFULElBQW1CL0QsS0FBSyxDQUFDdUksSUFBTixLQUFlLFVBQXRDLEVBQWtEO1VBQzlDRyxPQUFPLEdBQUcsaUJBQVY7UUFDSCxDQUZELE1BRU8sSUFBSTNFLElBQUksS0FBSyxNQUFULElBQW1CL0QsS0FBSyxDQUFDNEYsR0FBTixLQUFjLFdBQXJDLEVBQWtEO1VBQ3JENkMsZUFBZSxHQUFHLElBQWxCO1FBQ0gsQ0FGTSxNQUVBLElBQUkxRSxJQUFJLEtBQUssUUFBYixFQUF1QjtVQUMxQjtVQUNBO1VBQ0E7VUFDQTtVQUNBLElBQUkvRCxLQUFLLENBQUNhLEdBQU4sSUFBYWIsS0FBSyxDQUFDYSxHQUFOLENBQVU4SCxPQUFWLENBQWtCLFlBQWxCLElBQWtDLENBQUMsQ0FBaEQsSUFBcUQzSSxLQUFLLENBQUMwQix1QkFBTixLQUFrQyxDQUFDMUIsS0FBSyxDQUFDK0QsSUFBUCxJQUFlL0QsS0FBSyxDQUFDK0QsSUFBTixLQUFlLGlCQUFoRSxDQUF6RCxFQUE2STtZQUN6STJFLE9BQU8sR0FBRyxTQUFWO1lBQ0FqTSxNQUFNLENBQUNtTSxJQUFQLENBQVk1SSxLQUFaLEVBQW1CNEIsT0FBbkIsQ0FBNEJpSCxJQUFELElBQVE7Y0FDL0JILE9BQU8sSUFBSyxJQUFHRyxJQUFLLEtBQUk3SSxLQUFLLENBQUM2SSxJQUFELENBQU8sR0FBcEM7WUFDSCxDQUZEO1lBR0FILE9BQU8sSUFBSSxJQUFYO1VBQ0g7UUFDSjs7UUFDRCxJQUFJQSxPQUFKLEVBQWE7VUFDVHhFLE9BQU8sQ0FBQ0MsSUFBUixDQUFjLDhCQUE2QnBELEtBQUssQ0FBQ2dELElBQUssMkJBQTBCMkUsT0FBUSxPQUFNbEIsYUFBYSxDQUFDc0IsSUFBSyx3REFBakg7VUFDQSxPQUFPLElBQVA7UUFDSDtNQUNKLENBdkJELE1BdUJPO1FBQ0g7UUFDQSxJQUFJL0UsSUFBSSxLQUFLLE1BQVQsSUFBbUIvRCxLQUFLLENBQUM0RixHQUFOLEtBQWMsU0FBckMsRUFBZ0Q7VUFDNUM0QyxhQUFhLEdBQUcsSUFBaEI7UUFDSDtNQUNKOztNQUNELE9BQU96SCxLQUFQO0lBQ0gsQ0FqQ00sQ0FBUDtJQWtDQSxNQUFNbUIsS0FBSyxHQUFHaEQsZ0JBQWdCLENBQUMsS0FBS2EsT0FBTCxDQUFhWixhQUFkLEVBQTZCLEtBQUtZLE9BQUwsQ0FBYXlILGFBQWIsQ0FBMkJzQixJQUF4RCxFQUE4RHJKLEtBQUEsSUFBdUNKLFNBQXJHLENBQTlCOztJQUNBLElBQUkwSixNQUFKLEVBQVlDLE9BQVo7O0lBQ0EsT0FBTyxhQUFjaE0sTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCLE1BQTdCLEVBQXFDdEIsTUFBTSxDQUFDcUgsTUFBUCxDQUFjLEVBQWQsRUFBa0JhLGdCQUFnQixDQUFDLEtBQUszRSxLQUFOLENBQWxDLENBQXJDLEVBQXNGLEtBQUtELE9BQUwsQ0FBYXFDLGFBQWIsSUFBOEIsYUFBY3BGLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlZ0IsYUFBZixDQUE2QmYsTUFBTSxDQUFDRCxPQUFQLENBQWV1RyxRQUE1QyxFQUFzRCxJQUF0RCxFQUE0RCxhQUFjdEcsTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCLE9BQTdCLEVBQXNDO01BQ25RLHVCQUF1QixJQUQ0TztNQUVuUSxtQkFBbUIwQixLQUFBLElBQXVDSixTQUF2QyxHQUFtRCxNQUFuRCxHQUE0RDJHLFNBRm9MO01BR25RdEUsdUJBQXVCLEVBQUU7UUFDckJDLE1BQU0sRUFBRztNQURZO0lBSDBPLENBQXRDLENBQTFFLEVBTW5KLGFBQWMzRSxNQUFNLENBQUNELE9BQVAsQ0FBZWdCLGFBQWYsQ0FBNkIsVUFBN0IsRUFBeUM7TUFDdkQsdUJBQXVCLElBRGdDO01BRXZELG1CQUFtQjBCLEtBQUEsSUFBdUNKLFNBQXZDLEdBQW1ELE1BQW5ELEdBQTREMkc7SUFGeEIsQ0FBekMsRUFHZixhQUFjaEosTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCLE9BQTdCLEVBQXNDO01BQ25EMkQsdUJBQXVCLEVBQUU7UUFDckJDLE1BQU0sRUFBRztNQURZO0lBRDBCLENBQXRDLENBSEMsQ0FOcUksQ0FBbEksRUFhZnFHLElBYmUsRUFhVCxhQUFjaEwsTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCLE1BQTdCLEVBQXFDO01BQzNEd0ssSUFBSSxFQUFFLGlCQURxRDtNQUUzRFUsT0FBTyxFQUFFak0sTUFBTSxDQUFDRCxPQUFQLENBQWU0SixRQUFmLENBQXdCdUMsS0FBeEIsQ0FBOEJsQixJQUFJLElBQUksRUFBdEMsRUFBMENtQixRQUExQztJQUZrRCxDQUFyQyxDQWJMLEVBZ0JqQjlILFFBaEJpQixFQWdCUDhELGFBQWEsSUFBSSxhQUFjbkksTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCLE1BQTdCLEVBQXFDO01BQzlFd0ssSUFBSSxFQUFFO0lBRHdFLENBQXJDLENBaEJ4QixFQWtCakI5SSxLQUFBLElBQXVDSixTQUF2QyxJQUFvRCxhQUFjckMsTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCZixNQUFNLENBQUNELE9BQVAsQ0FBZXVHLFFBQTVDLEVBQXNELElBQXRELEVBQTRELGFBQWN0RyxNQUFNLENBQUNELE9BQVAsQ0FBZWdCLGFBQWYsQ0FBNkIsTUFBN0IsRUFBcUM7TUFDakx3SyxJQUFJLEVBQUUsVUFEMks7TUFFakxVLE9BQU8sRUFBRTtJQUZ3SyxDQUFyQyxDQUExRSxFQUdsRSxDQUFDUixlQUFELElBQW9CLGFBQWN6TCxNQUFNLENBQUNELE9BQVAsQ0FBZWdCLGFBQWYsQ0FBNkIsTUFBN0IsRUFBcUM7TUFDdkU2SCxHQUFHLEVBQUUsV0FEa0U7TUFFdkVDLElBQUksRUFBRTBCLGFBQWEsR0FBR3JLLDRFQUFBLENBQXdDdUssZUFBeEM7SUFGaUQsQ0FBckMsQ0FIZ0MsRUFNbEUsYUFBY3pLLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlZ0IsYUFBZixDQUE2QixNQUE3QixFQUFxQztNQUNuRDZILEdBQUcsRUFBRSxTQUQ4QztNQUVuREUsRUFBRSxFQUFFLFFBRitDO01BR25ERCxJQUFJLEVBQUU7SUFINkMsQ0FBckMsQ0FOb0QsRUFVbEUsYUFBYzdJLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlZ0IsYUFBZixDQUE2QmlELFNBQTdCLEVBQXdDO01BQ3REQyxNQUFNLEVBQUVBO0lBRDhDLENBQXhDLENBVm9ELEVBWWxFLGFBQWNqRSxNQUFNLENBQUNELE9BQVAsQ0FBZWdCLGFBQWYsQ0FBNkIsT0FBN0IsRUFBc0M7TUFDcEQsbUJBQW1CLEVBRGlDO01BRXBEMkQsdUJBQXVCLEVBQUU7UUFDckJDLE1BQU0sRUFBRztNQURZO0lBRjJCLENBQXRDLENBWm9ELEVBaUJsRSxhQUFjM0UsTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCLFVBQTdCLEVBQXlDLElBQXpDLEVBQStDLGFBQWNmLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlZ0IsYUFBZixDQUE2QixPQUE3QixFQUFzQztNQUNqSCxtQkFBbUIsRUFEOEY7TUFFakgyRCx1QkFBdUIsRUFBRTtRQUNyQkMsTUFBTSxFQUFHO01BRFk7SUFGd0YsQ0FBdEMsQ0FBN0QsQ0FqQm9ELEVBc0JqRSxhQUFjM0UsTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCLFFBQTdCLEVBQXVDO01BQ3REd0UsS0FBSyxFQUFFLElBRCtDO01BRXREMUIsR0FBRyxFQUFFO0lBRmlELENBQXZDLENBdEJtRCxDQWxCakQsRUEyQ2hCLEVBQUVwQixLQUFBLElBQXVDSixTQUF6QyxLQUF1RCxhQUFjckMsTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCZixNQUFNLENBQUNELE9BQVAsQ0FBZXVHLFFBQTVDLEVBQXNELElBQXRELEVBQTRELENBQUNrRixhQUFELElBQWtCbEIsU0FBbEIsSUFBK0IsYUFBY3RLLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlZ0IsYUFBZixDQUE2QixNQUE3QixFQUFxQztNQUNwTjZILEdBQUcsRUFBRSxTQUQrTTtNQUVwTkMsSUFBSSxFQUFFMEIsYUFBYSxHQUFHekMsVUFBVSxDQUFDQyxPQUFELEVBQVUwQyxlQUFWO0lBRm9MLENBQXJDLENBQXpHLEVBR3RFLEtBQUtuQixpQ0FBTCxFQUhzRSxFQUc1QixDQUFDcEIsV0FBRCxJQUFnQixLQUFLRCxXQUFMLENBQWlCL0MsS0FBakIsQ0FIWSxFQUdhLENBQUNnRCxXQUFELElBQWdCLGFBQWNsSSxNQUFNLENBQUNELE9BQVAsQ0FBZWdCLGFBQWYsQ0FBNkIsVUFBN0IsRUFBeUM7TUFDMUosY0FBYyxDQUFDZ0wsTUFBTSxHQUFHLEtBQUsvSSxLQUFMLENBQVdXLEtBQXJCLEtBQStCLElBQS9CLEdBQXNDb0ksTUFBdEMsR0FBK0M7SUFENkYsQ0FBekMsQ0FIM0MsRUFLdEUsQ0FBQ2xCLGdCQUFELElBQXFCLENBQUNDLGdCQUF0QixJQUEwQyxLQUFLNUIsdUJBQUwsRUFMNEIsRUFLSSxDQUFDMkIsZ0JBQUQsSUFBcUIsQ0FBQ0MsZ0JBQXRCLElBQTBDLEtBQUsxQixtQkFBTCxDQUF5QmxFLEtBQXpCLENBTDlDLEVBSytFLENBQUMvQix1QkFBRCxJQUE0QixDQUFDMEgsZ0JBQTdCLElBQWlELEtBQUsvSCxrQkFBTCxFQUxoSSxFQUsySixDQUFDSyx1QkFBRCxJQUE0QixDQUFDMEgsZ0JBQTdCLElBQWlELEtBQUt4RCxpQkFBTCxFQUw1TSxFQUtzTyxDQUFDbEUsdUJBQUQsSUFBNEIsQ0FBQzBILGdCQUE3QixJQUFpRCxLQUFLNUYsZ0JBQUwsQ0FBc0JDLEtBQXRCLENBTHZSLEVBS3FULENBQUMvQix1QkFBRCxJQUE0QixDQUFDMEgsZ0JBQTdCLElBQWlELEtBQUtwRixVQUFMLENBQWdCUCxLQUFoQixDQUx0VyxFQUs4WGdELFdBQVcsSUFBSSxLQUFLRCxXQUFMLENBQWlCL0MsS0FBakIsQ0FMN1ksRUFLc2FnRCxXQUFXLElBQUksYUFBY2xJLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlZ0IsYUFBZixDQUE2QixVQUE3QixFQUF5QztNQUNsakIsY0FBYyxDQUFDaUwsT0FBTyxHQUFHLEtBQUtoSixLQUFMLENBQVdXLEtBQXRCLEtBQWdDLElBQWhDLEdBQXVDcUksT0FBdkMsR0FBaUQ7SUFEbWYsQ0FBekMsQ0FMbmMsRUFPdEUsS0FBS2pKLE9BQUwsQ0FBYXFDLGFBQWIsSUFBOEI7SUFDbEM7SUFDQTs7SUFDQTtJQUFjcEYsTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCLFVBQTdCLEVBQXlDO01BQ25EeUksRUFBRSxFQUFFO0lBRCtDLENBQXpDLENBVjRELEVBWXRFdkYsTUFBTSxJQUFJLElBWjRELENBM0NyRCxFQXVEQSxhQUFjakUsTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCZixNQUFNLENBQUNELE9BQVAsQ0FBZXVHLFFBQTVDLEVBQXNELEVBQXRELEVBQTBELElBQUdvRSxRQUFRLElBQUksRUFBZixDQUExRCxDQXZEZCxDQUFyQjtFQXdESDs7QUFyUnVDOztnQkFBdEMxSixJLGlCQUNtQlIsWUFBWSxDQUFDNkwsVzs7QUFzUnRDMU0sWUFBQSxHQUFlcUIsSUFBZjs7QUFDQSxTQUFTc0wsK0JBQVQsQ0FBeUN4RyxZQUF6QyxFQUF1RDBFLGFBQXZELEVBQXNFeEgsS0FBdEUsRUFBNkU7RUFDekUsSUFBSXVKLEtBQUosRUFBV0MsSUFBWCxFQUFpQkMsSUFBakIsRUFBdUJDLElBQXZCO0VBQ0EsSUFBSSxDQUFDMUosS0FBSyxDQUFDcUIsUUFBWCxFQUFxQjtFQUNyQixNQUFNc0ksaUJBQWlCLEdBQUcsRUFBMUI7RUFDQSxNQUFNdEksUUFBUSxHQUFHRixLQUFLLENBQUNDLE9BQU4sQ0FBY3BCLEtBQUssQ0FBQ3FCLFFBQXBCLElBQWdDckIsS0FBSyxDQUFDcUIsUUFBdEMsR0FBaUQsQ0FDOURyQixLQUFLLENBQUNxQixRQUR3RCxDQUFsRTtFQUdBLE1BQU11SSxZQUFZLEdBQUcsQ0FBQ0wsS0FBSyxHQUFHbEksUUFBUSxDQUFDOEIsSUFBVCxDQUFlcEMsS0FBRCxJQUFTQSxLQUFLLENBQUNnRCxJQUFOLEtBQWUvRixJQUF0QyxDQUFULEtBQXlELElBQXpELEdBQWdFLEtBQUssQ0FBckUsR0FBeUUsQ0FBQ3dMLElBQUksR0FBR0QsS0FBSyxDQUFDdkosS0FBZCxLQUF3QixJQUF4QixHQUErQixLQUFLLENBQXBDLEdBQXdDd0osSUFBSSxDQUFDbkksUUFBM0k7RUFDQSxNQUFNd0ksWUFBWSxHQUFHLENBQUNKLElBQUksR0FBR3BJLFFBQVEsQ0FBQzhCLElBQVQsQ0FBZXBDLEtBQUQsSUFBU0EsS0FBSyxDQUFDZ0QsSUFBTixLQUFlLE1BQXRDLENBQVIsS0FBMEQsSUFBMUQsR0FBaUUsS0FBSyxDQUF0RSxHQUEwRSxDQUFDMkYsSUFBSSxHQUFHRCxJQUFJLENBQUN6SixLQUFiLEtBQXVCLElBQXZCLEdBQThCLEtBQUssQ0FBbkMsR0FBdUMwSixJQUFJLENBQUNySSxRQUEzSSxDQVJ5RSxDQVN6RTs7RUFDQSxNQUFNeUksZ0JBQWdCLEdBQUcsQ0FDckIsSUFBRzNJLEtBQUssQ0FBQ0MsT0FBTixDQUFjd0ksWUFBZCxJQUE4QkEsWUFBOUIsR0FBNkMsQ0FDNUNBLFlBRDRDLENBQWhELENBRHFCLEVBSXJCLElBQUd6SSxLQUFLLENBQUNDLE9BQU4sQ0FBY3lJLFlBQWQsSUFBOEJBLFlBQTlCLEdBQTZDLENBQzVDQSxZQUQ0QyxDQUFoRCxDQUpxQixDQUF6Qjs7RUFRQTdNLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlNEosUUFBZixDQUF3Qi9FLE9BQXhCLENBQWdDa0ksZ0JBQWhDLEVBQW1EL0ksS0FBRCxJQUFTO0lBQ3ZELElBQUlTLEdBQUo7SUFDQSxJQUFJLENBQUNULEtBQUwsRUFBWSxPQUYyQyxDQUd2RDs7SUFDQSxJQUFJLENBQUNTLEdBQUcsR0FBR1QsS0FBSyxDQUFDZ0QsSUFBYixLQUFzQixJQUF0QixHQUE2QixLQUFLLENBQWxDLEdBQXNDdkMsR0FBRyxDQUFDdUksWUFBOUMsRUFBNEQ7TUFDeEQsSUFBSWhKLEtBQUssQ0FBQ2YsS0FBTixDQUFZeUQsUUFBWixLQUF5QixtQkFBN0IsRUFBa0Q7UUFDOUNYLFlBQVksQ0FBQzBCLGlCQUFiLEdBQWlDLENBQUMxQixZQUFZLENBQUMwQixpQkFBYixJQUFrQyxFQUFuQyxFQUF1QzJELE1BQXZDLENBQThDLG1CQUVwRXBILEtBQUssQ0FBQ2YsS0FGOEQsRUFBOUMsQ0FBakM7UUFLQTtNQUNILENBUEQsTUFPTyxJQUFJLENBQ1AsWUFETyxFQUVQLGtCQUZPLEVBR1AsUUFITyxFQUlUc0MsUUFKUyxDQUlBdkIsS0FBSyxDQUFDZixLQUFOLENBQVl5RCxRQUpaLENBQUosRUFJMkI7UUFDOUJrRyxpQkFBaUIsQ0FBQzlILElBQWxCLENBQXVCZCxLQUFLLENBQUNmLEtBQTdCO1FBQ0E7TUFDSDtJQUNKO0VBQ0osQ0FyQkQ7O0VBc0JBd0gsYUFBYSxDQUFDMUUsWUFBZCxHQUE2QjZHLGlCQUE3QjtBQUNIOztBQUNELE1BQU0xTCxVQUFOLFNBQXlCakIsTUFBTSxDQUFDRCxPQUFQLENBQWVXLFNBQXhDLENBQWtEO0VBRTlDdUUsZ0JBQWdCLENBQUNDLEtBQUQsRUFBUTtJQUNwQixPQUFPRCxnQkFBZ0IsQ0FBQyxLQUFLbEMsT0FBTixFQUFlLEtBQUtDLEtBQXBCLEVBQTJCa0MsS0FBM0IsQ0FBdkI7RUFDSDs7RUFDRG1DLGlCQUFpQixHQUFHO0lBQ2hCLE9BQU9BLGlCQUFpQixDQUFDLEtBQUt0RSxPQUFOLEVBQWUsS0FBS0MsS0FBcEIsQ0FBeEI7RUFDSDs7RUFDRHlDLFVBQVUsQ0FBQ1AsS0FBRCxFQUFRO0lBQ2QsT0FBT08sVUFBVSxDQUFDLEtBQUsxQyxPQUFOLEVBQWUsS0FBS0MsS0FBcEIsRUFBMkJrQyxLQUEzQixDQUFqQjtFQUNIOztFQUNEcEMsa0JBQWtCLEdBQUc7SUFDakIsT0FBT0Esa0JBQWtCLENBQUMsS0FBS0MsT0FBTixFQUFlLEtBQUtDLEtBQXBCLENBQXpCO0VBQ0g7O0VBQzJCLE9BQXJCZ0sscUJBQXFCLENBQUNqSyxPQUFELEVBQVU7SUFDbEMsTUFBTTtNQUFFeUgsYUFBRjtNQUFrQnlDO0lBQWxCLElBQTBDbEssT0FBaEQ7O0lBQ0EsSUFBSTtNQUNBLE1BQU1tSyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlNUMsYUFBZixDQUFiO01BQ0EsTUFBTTZDLEtBQUssR0FBRzVLLE1BQUEsR0FBc0MsQ0FBdEMsR0FBeUZpTCxNQUFNLENBQUNsRixJQUFQLENBQVkwRSxJQUFaLEVBQWtCTyxVQUF6SDs7TUFDQSxNQUFNRSxXQUFXLEdBQUd6TiwyR0FBcEI7O01BQ0EsSUFBSStNLGtCQUFrQixJQUFJSSxLQUFLLEdBQUdKLGtCQUFsQyxFQUFzRDtRQUNsRC9GLE9BQU8sQ0FBQ0MsSUFBUixDQUFjLDJCQUEwQnFELGFBQWEsQ0FBQ3NCLElBQUssSUFBR3RCLGFBQWEsQ0FBQ3NCLElBQWQsS0FBdUIvSSxPQUFPLENBQUMwSCxlQUEvQixHQUFpRCxFQUFqRCxHQUF1RCxXQUFVMUgsT0FBTyxDQUFDMEgsZUFBZ0IsSUFBSSxPQUFNa0QsV0FBVyxDQUFDTixLQUFELENBQVEsbUNBQWtDTSxXQUFXLENBQUNWLGtCQUFELENBQXFCLHFIQUF0UDtNQUNIOztNQUNELE9BQU8sQ0FBQyxHQUFHNU0sV0FBSixFQUFpQnVOLG9CQUFqQixDQUFzQ1YsSUFBdEMsQ0FBUDtJQUNILENBUkQsQ0FRRSxPQUFPbEcsR0FBUCxFQUFZO01BQ1YsSUFBSSxDQUFDLEdBQUcxRyxRQUFKLEVBQWNQLE9BQWQsQ0FBc0JpSCxHQUF0QixLQUE4QkEsR0FBRyxDQUFDSSxPQUFKLENBQVl1RSxPQUFaLENBQW9CLG9CQUFwQixNQUE4QyxDQUFDLENBQWpGLEVBQW9GO1FBQ2hGLE1BQU0sSUFBSTlFLEtBQUosQ0FBVywyREFBMEQyRCxhQUFhLENBQUNzQixJQUFLLHdEQUF4RixDQUFOO01BQ0g7O01BQ0QsTUFBTTlFLEdBQU47SUFDSDtFQUNKOztFQUNEbEcsTUFBTSxHQUFHO0lBQ0wsTUFBTTtNQUFFbUMsV0FBRjtNQUFnQlosU0FBaEI7TUFBNEJGLGFBQTVCO01BQTRDd0ksa0JBQTVDO01BQWlFSSxxQkFBakU7TUFBeUY3SCw2QkFBekY7TUFBeUhDLHVCQUF6SDtNQUFtSkM7SUFBbkosSUFBc0ssS0FBS0wsT0FBakw7SUFDQSxNQUFNOEgsZ0JBQWdCLEdBQUdGLGtCQUFrQixLQUFLLEtBQWhEO0lBQ0FJLHFCQUFxQixDQUFDOUosVUFBdEIsR0FBbUMsSUFBbkM7O0lBQ0EsSUFBSXdCLEtBQUEsSUFBdUNKLFNBQTNDLEVBQXNEO01BQ2xELElBQUksT0FBdUMsRUFFMUM7O01BQ0QsTUFBTXdMLFdBQVcsR0FBRyxDQUNoQixHQUFHMUwsYUFBYSxDQUFDMkwsUUFERCxFQUVoQixHQUFHM0wsYUFBYSxDQUFDa0IsYUFGRCxFQUdoQixHQUFHbEIsYUFBYSxDQUFDMEwsV0FIRCxDQUFwQjtNQUtBLE9BQU8sYUFBYzdOLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlZ0IsYUFBZixDQUE2QmYsTUFBTSxDQUFDRCxPQUFQLENBQWV1RyxRQUE1QyxFQUFzRCxJQUF0RCxFQUE0RHVFLGdCQUFnQixHQUFHLElBQUgsR0FBVSxhQUFjN0ssTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCLFFBQTdCLEVBQXVDO1FBQzVKeUksRUFBRSxFQUFFLGVBRHdKO1FBRTVKekMsSUFBSSxFQUFFLGtCQUZzSjtRQUc1SnBELEtBQUssRUFBRSxLQUFLWCxLQUFMLENBQVdXLEtBSDBJO1FBSTVKUCxXQUFXLEVBQUUsS0FBS0osS0FBTCxDQUFXSSxXQUFYLElBQTBCQSxXQUpxSDtRQUs1SnNCLHVCQUF1QixFQUFFO1VBQ3JCQyxNQUFNLEVBQUUxRCxVQUFVLENBQUMrTCxxQkFBWCxDQUFpQyxLQUFLakssT0FBdEM7UUFEYSxDQUxtSTtRQVE1SixtQkFBbUI7TUFSeUksQ0FBdkMsQ0FBcEcsRUFTakI4SyxXQUFXLENBQUNwSyxHQUFaLENBQWlCNEIsSUFBRCxJQUFRLGFBQWNyRixNQUFNLENBQUNELE9BQVAsQ0FBZWdCLGFBQWYsQ0FBNkIsUUFBN0IsRUFBdUM7UUFDekVhLEdBQUcsRUFBRXlELElBRG9FO1FBRXpFeEIsR0FBRyxFQUFHLEdBQUVaLFdBQVksVUFBU29DLElBQUssR0FBRW5DLDZCQUE4QixFQUZPO1FBR3pFUyxLQUFLLEVBQUUsS0FBS1gsS0FBTCxDQUFXVyxLQUh1RDtRQUl6RVAsV0FBVyxFQUFFLEtBQUtKLEtBQUwsQ0FBV0ksV0FBWCxJQUEwQkEsV0FKa0M7UUFLekUsbUJBQW1CO01BTHNELENBQXZDLENBQXRDLENBVGlCLENBQXJCO0lBZ0JIOztJQUNELElBQUksTUFBdUM7TUFDdkMsSUFBSSxLQUFLSixLQUFMLENBQVdJLFdBQWYsRUFBNEI4RCxPQUFPLENBQUNDLElBQVIsQ0FBYSwwSEFBYjtJQUMvQjs7SUFDRCxNQUFNakMsS0FBSyxHQUFHaEQsZ0JBQWdCLENBQUMsS0FBS2EsT0FBTCxDQUFhWixhQUFkLEVBQTZCLEtBQUtZLE9BQUwsQ0FBYXlILGFBQWIsQ0FBMkJzQixJQUF4RCxFQUE4RHJKLEtBQUEsSUFBdUNKLFNBQXJHLENBQTlCO0lBQ0EsT0FBTyxhQUFjckMsTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCZixNQUFNLENBQUNELE9BQVAsQ0FBZXVHLFFBQTVDLEVBQXNELElBQXRELEVBQTRELENBQUN1RSxnQkFBRCxJQUFxQjFJLGFBQWEsQ0FBQzJMLFFBQW5DLEdBQThDM0wsYUFBYSxDQUFDMkwsUUFBZCxDQUF1QnJLLEdBQXZCLENBQTRCNEIsSUFBRCxJQUFRLGFBQWNyRixNQUFNLENBQUNELE9BQVAsQ0FBZWdCLGFBQWYsQ0FBNkIsUUFBN0IsRUFBdUM7TUFDL01hLEdBQUcsRUFBRXlELElBRDBNO01BRS9NeEIsR0FBRyxFQUFHLEdBQUVaLFdBQVksVUFBU3VDLFNBQVMsQ0FBQ0gsSUFBRCxDQUFPLEdBQUVuQyw2QkFBOEIsRUFGa0k7TUFHL01TLEtBQUssRUFBRSxLQUFLWCxLQUFMLENBQVdXLEtBSDZMO01BSS9NUCxXQUFXLEVBQUUsS0FBS0osS0FBTCxDQUFXSSxXQUFYLElBQTBCQTtJQUp3SyxDQUF2QyxDQUFqRCxDQUE5QyxHQUt2RSxJQUxXLEVBS0x5SCxnQkFBZ0IsR0FBRyxJQUFILEdBQVUsYUFBYzdLLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlZ0IsYUFBZixDQUE2QixRQUE3QixFQUF1QztNQUMzRnlJLEVBQUUsRUFBRSxlQUR1RjtNQUUzRnpDLElBQUksRUFBRSxrQkFGcUY7TUFHM0ZwRCxLQUFLLEVBQUUsS0FBS1gsS0FBTCxDQUFXVyxLQUh5RTtNQUkzRlAsV0FBVyxFQUFFLEtBQUtKLEtBQUwsQ0FBV0ksV0FBWCxJQUEwQkEsV0FKb0Q7TUFLM0ZzQix1QkFBdUIsRUFBRTtRQUNyQkMsTUFBTSxFQUFFMUQsVUFBVSxDQUFDK0wscUJBQVgsQ0FBaUMsS0FBS2pLLE9BQXRDO01BRGE7SUFMa0UsQ0FBdkMsQ0FMbkMsRUFhakJJLHVCQUF1QixJQUFJLENBQUMwSCxnQkFBNUIsSUFBZ0QsS0FBSy9ILGtCQUFMLEVBYi9CLEVBYTBESyx1QkFBdUIsSUFBSSxDQUFDMEgsZ0JBQTVCLElBQWdELEtBQUt4RCxpQkFBTCxFQWIxRyxFQWFvSWxFLHVCQUF1QixJQUFJLENBQUMwSCxnQkFBNUIsSUFBZ0QsS0FBSzVGLGdCQUFMLENBQXNCQyxLQUF0QixDQWJwTCxFQWFrTi9CLHVCQUF1QixJQUFJLENBQUMwSCxnQkFBNUIsSUFBZ0QsS0FBS3BGLFVBQUwsQ0FBZ0JQLEtBQWhCLENBYmxRLENBQXJCO0VBY0g7O0FBL0U2Qzs7Z0JBQTVDakUsVSxpQkFDbUJULFlBQVksQ0FBQzZMLFc7O0FBZ0Z0QzFNLGtCQUFBLEdBQXFCc0IsVUFBckI7O0FBQ0EsU0FBU3BCLElBQVQsQ0FBY21ELEtBQWQsRUFBcUI7RUFDakIsTUFBTTtJQUFFWCxTQUFGO0lBQWMwSSxxQkFBZDtJQUFzQ2dELE1BQXRDO0lBQStDakksWUFBL0M7SUFBOEQwRTtFQUE5RCxJQUFtRixDQUFDLEdBQUd4SyxNQUFKLEVBQVlnTyxVQUFaLENBQXVCeE4sWUFBWSxDQUFDNkwsV0FBcEMsQ0FBekY7RUFDQXRCLHFCQUFxQixDQUFDbEwsSUFBdEIsR0FBNkIsSUFBN0I7RUFDQXlNLCtCQUErQixDQUFDeEcsWUFBRCxFQUFlMEUsYUFBZixFQUE4QnhILEtBQTlCLENBQS9CO0VBQ0EsT0FBTyxhQUFjaEQsTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCLE1BQTdCLEVBQXFDdEIsTUFBTSxDQUFDcUgsTUFBUCxDQUFjLEVBQWQsRUFBa0I5RCxLQUFsQixFQUF5QjtJQUMvRWlMLElBQUksRUFBRWpMLEtBQUssQ0FBQ2lMLElBQU4sSUFBY0YsTUFBZCxJQUF3Qi9FLFNBRGlEO0lBRS9Fa0YsR0FBRyxFQUFFekwsS0FBQSxJQUF1Q0osU0FBdkMsR0FBbUQsRUFBbkQsR0FBd0QyRyxTQUZrQjtJQUcvRSxtQkFBbUJ2RyxLQUFBLElBQXVDSixTQUF2QyxXQUE0RixFQUE1RixHQUFpRzJHO0VBSHJDLENBQXpCLENBQXJDLENBQXJCO0FBS0g7O0FBQ0QsU0FBU2xKLElBQVQsR0FBZ0I7RUFDWixNQUFNO0lBQUVpTDtFQUFGLElBQTZCLENBQUMsR0FBRy9LLE1BQUosRUFBWWdPLFVBQVosQ0FBdUJ4TixZQUFZLENBQUM2TCxXQUFwQyxDQUFuQztFQUNBdEIscUJBQXFCLENBQUNqTCxJQUF0QixHQUE2QixJQUE3QixDQUZZLENBR1o7O0VBQ0EsT0FBTyxhQUFjRSxNQUFNLENBQUNELE9BQVAsQ0FBZWdCLGFBQWYsQ0FBNkIscUNBQTdCLEVBQW9FLElBQXBFLENBQXJCO0FBQ0gsQyxDQUNEO0FBQ0E7OztBQUNBLE1BQU1vTix3QkFBd0IsR0FBRyxTQUFTQSx3QkFBVCxHQUFvQztFQUNqRSxPQUFPLGFBQWNuTyxNQUFNLENBQUNELE9BQVAsQ0FBZWdCLGFBQWYsQ0FBNkJsQixJQUE3QixFQUFtQyxJQUFuQyxFQUF5QyxhQUFjRyxNQUFNLENBQUNELE9BQVAsQ0FBZWdCLGFBQWYsQ0FBNkJDLElBQTdCLEVBQW1DLElBQW5DLENBQXZELEVBQWlHLGFBQWNoQixNQUFNLENBQUNELE9BQVAsQ0FBZWdCLGFBQWYsQ0FBNkIsTUFBN0IsRUFBcUMsSUFBckMsRUFBMkMsYUFBY2YsTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCakIsSUFBN0IsRUFBbUMsSUFBbkMsQ0FBekQsRUFBbUcsYUFBY0UsTUFBTSxDQUFDRCxPQUFQLENBQWVnQixhQUFmLENBQTZCRSxVQUE3QixFQUF5QyxJQUF6QyxDQUFqSCxDQUEvRyxDQUFyQjtBQUNILENBRkQ7O0FBR0FSLFFBQVEsQ0FBQ04sVUFBVSxDQUFDaU8scUJBQVosQ0FBUixHQUE2Q0Qsd0JBQTdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemFwYXRhLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2RvY3VtZW50LmpzPzNiOGMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkh0bWwgPSBIdG1sO1xuZXhwb3J0cy5NYWluID0gTWFpbjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9jb25zdGFudHNcIik7XG52YXIgX2dldFBhZ2VGaWxlcyA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXNcIik7XG52YXIgX2h0bWxlc2NhcGUgPSByZXF1aXJlKFwiLi4vc2VydmVyL2h0bWxlc2NhcGVcIik7XG52YXIgX2lzRXJyb3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9saWIvaXMtZXJyb3JcIikpO1xudmFyIF9odG1sQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2h0bWwtY29udGV4dFwiKTtcbmNsYXNzIERvY3VtZW50IGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICogYGdldEluaXRpYWxQcm9wc2AgaG9vayByZXR1cm5zIHRoZSBjb250ZXh0IG9iamVjdCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBgcmVuZGVyUGFnZWAuXG4gICAqIGByZW5kZXJQYWdlYCBjYWxsYmFjayBleGVjdXRlcyBgUmVhY3RgIHJlbmRlcmluZyBsb2dpYyBzeW5jaHJvbm91c2x5IHRvIHN1cHBvcnQgc2VydmVyLXJlbmRlcmluZyB3cmFwcGVyc1xuICAgKi8gc3RhdGljIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcbiAgICAgICAgcmV0dXJuIGN0eC5kZWZhdWx0R2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChIdG1sLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJvZHlcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE1haW4sIG51bGwpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTmV4dFNjcmlwdCwgbnVsbCkpKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBEb2N1bWVudDtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gICAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbiAgICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlO1xuICAgIH07XG4gICAgcmV0dXJuIGNhY2hlO1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gICAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG4gICAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgICB9XG4gICAgdmFyIG5ld09iaiA9IHt9O1xuICAgIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgICBmb3IodmFyIGtleSBpbiBvYmope1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG4gICAgICAgICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBuZXdPYmouZGVmYXVsdCA9IG9iajtcbiAgICBpZiAoY2FjaGUpIHtcbiAgICAgICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld09iajtcbn1cbmZ1bmN0aW9uIGdldERvY3VtZW50RmlsZXMoYnVpbGRNYW5pZmVzdCwgcGF0aG5hbWUsIGluQW1wTW9kZSkge1xuICAgIGNvbnN0IHNoYXJlZEZpbGVzID0gKDAsIF9nZXRQYWdlRmlsZXMpLmdldFBhZ2VGaWxlcyhidWlsZE1hbmlmZXN0LCBcIi9fYXBwXCIpO1xuICAgIGNvbnN0IHBhZ2VGaWxlcyA9IHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSAhPT0gXCJlZGdlXCIgJiYgaW5BbXBNb2RlID8gW10gOiAoMCwgX2dldFBhZ2VGaWxlcykuZ2V0UGFnZUZpbGVzKGJ1aWxkTWFuaWZlc3QsIHBhdGhuYW1lKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaGFyZWRGaWxlcyxcbiAgICAgICAgcGFnZUZpbGVzLFxuICAgICAgICBhbGxGaWxlczogW1xuICAgICAgICAgICAgLi4ubmV3IFNldChbXG4gICAgICAgICAgICAgICAgLi4uc2hhcmVkRmlsZXMsXG4gICAgICAgICAgICAgICAgLi4ucGFnZUZpbGVzXG4gICAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldFBvbHlmaWxsU2NyaXB0cyhjb250ZXh0LCBwcm9wcykge1xuICAgIC8vIHBvbHlmaWxscy5qcyBoYXMgdG8gYmUgcmVuZGVyZWQgYXMgbm9tb2R1bGUgd2l0aG91dCBhc3luY1xuICAgIC8vIEl0IGFsc28gaGFzIHRvIGJlIHRoZSBmaXJzdCBzY3JpcHQgdG8gbG9hZFxuICAgIGNvbnN0IHsgYXNzZXRQcmVmaXggLCBidWlsZE1hbmlmZXN0ICwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcgLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAsIGNyb3NzT3JpZ2luICwgIH0gPSBjb250ZXh0O1xuICAgIHJldHVybiBidWlsZE1hbmlmZXN0LnBvbHlmaWxsRmlsZXMuZmlsdGVyKChwb2x5ZmlsbCk9PnBvbHlmaWxsLmVuZHNXaXRoKFwiLmpzXCIpICYmICFwb2x5ZmlsbC5lbmRzV2l0aChcIi5tb2R1bGUuanNcIikpLm1hcCgocG9seWZpbGwpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgICAgICAgICAga2V5OiBwb2x5ZmlsbCxcbiAgICAgICAgICAgIGRlZmVyOiAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gICAgICAgICAgICBub25jZTogcHJvcHMubm9uY2UsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogcHJvcHMuY3Jvc3NPcmlnaW4gfHwgY3Jvc3NPcmlnaW4sXG4gICAgICAgICAgICBub01vZHVsZTogdHJ1ZSxcbiAgICAgICAgICAgIHNyYzogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7cG9seWZpbGx9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gXG4gICAgICAgIH0pKTtcbn1cbmZ1bmN0aW9uIGhhc0NvbXBvbmVudFByb3BzKGNoaWxkKSB7XG4gICAgcmV0dXJuICEhY2hpbGQgJiYgISFjaGlsZC5wcm9wcztcbn1cbmZ1bmN0aW9uIEFtcFN0eWxlcyh7IHN0eWxlcyAgfSkge1xuICAgIGlmICghc3R5bGVzKSByZXR1cm4gbnVsbDtcbiAgICAvLyB0cnkgdG8gcGFyc2Ugc3R5bGVzIGZyb20gZnJhZ21lbnQgZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgICBjb25zdCBjdXJTdHlsZXMgPSBBcnJheS5pc0FycmF5KHN0eWxlcykgPyBzdHlsZXMgOiBbXTtcbiAgICBpZiAoLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgc3R5bGVzLnByb3BzICYmIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgIEFycmF5LmlzQXJyYXkoc3R5bGVzLnByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICBjb25zdCBoYXNTdHlsZXMgPSAoZWwpPT57XG4gICAgICAgICAgICB2YXIgcmVmLCByZWYxO1xuICAgICAgICAgICAgcmV0dXJuIGVsID09IG51bGwgPyB2b2lkIDAgOiAocmVmID0gZWwucHJvcHMpID09IG51bGwgPyB2b2lkIDAgOiAocmVmMSA9IHJlZi5kYW5nZXJvdXNseVNldElubmVySFRNTCkgPT0gbnVsbCA/IHZvaWQgMCA6IHJlZjEuX19odG1sO1xuICAgICAgICB9O1xuICAgICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgICAgc3R5bGVzLnByb3BzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKT0+e1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuZm9yRWFjaCgoZWwpPT5oYXNTdHlsZXMoZWwpICYmIGN1clN0eWxlcy5wdXNoKGVsKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc1N0eWxlcyhjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICBjdXJTdHlsZXMucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKiBBZGQgY3VzdG9tIHN0eWxlcyBiZWZvcmUgQU1QIHN0eWxlcyB0byBwcmV2ZW50IGFjY2lkZW50YWwgb3ZlcnJpZGVzICovIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgIFwiYW1wLWN1c3RvbVwiOiBcIlwiLFxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgX19odG1sOiBjdXJTdHlsZXMubWFwKChzdHlsZSk9PnN0eWxlLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbCkuam9pbihcIlwiKS5yZXBsYWNlKC9cXC9cXCojIHNvdXJjZU1hcHBpbmdVUkw9LipcXCpcXC8vZywgXCJcIikucmVwbGFjZSgvXFwvXFwqQCBzb3VyY2VVUkw9Lio/XFwqXFwvL2csIFwiXCIpXG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldER5bmFtaWNDaHVua3MoY29udGV4dCwgcHJvcHMsIGZpbGVzKSB7XG4gICAgY29uc3QgeyBkeW5hbWljSW1wb3J0cyAsIGFzc2V0UHJlZml4ICwgaXNEZXZlbG9wbWVudCAsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nICwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgLCBjcm9zc09yaWdpbiAsICB9ID0gY29udGV4dDtcbiAgICByZXR1cm4gZHluYW1pY0ltcG9ydHMubWFwKChmaWxlKT0+e1xuICAgICAgICBpZiAoIWZpbGUuZW5kc1dpdGgoXCIuanNcIikgfHwgZmlsZXMuYWxsRmlsZXMuaW5jbHVkZXMoZmlsZSkpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgIGFzeW5jOiAhaXNEZXZlbG9wbWVudCAmJiBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgICAgICAgICAgIGRlZmVyOiAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gICAgICAgICAgICBrZXk6IGZpbGUsXG4gICAgICAgICAgICBzcmM6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBub25jZTogcHJvcHMubm9uY2UsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogcHJvcHMuY3Jvc3NPcmlnaW4gfHwgY3Jvc3NPcmlnaW5cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRTY3JpcHRzKGNvbnRleHQsIHByb3BzLCBmaWxlcykge1xuICAgIHZhciByZWY7XG4gICAgY29uc3QgeyBhc3NldFByZWZpeCAsIGJ1aWxkTWFuaWZlc3QgLCBpc0RldmVsb3BtZW50ICwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcgLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAsIGNyb3NzT3JpZ2luICwgIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IG5vcm1hbFNjcmlwdHMgPSBmaWxlcy5hbGxGaWxlcy5maWx0ZXIoKGZpbGUpPT5maWxlLmVuZHNXaXRoKFwiLmpzXCIpKTtcbiAgICBjb25zdCBsb3dQcmlvcml0eVNjcmlwdHMgPSAocmVmID0gYnVpbGRNYW5pZmVzdC5sb3dQcmlvcml0eUZpbGVzKSA9PSBudWxsID8gdm9pZCAwIDogcmVmLmZpbHRlcigoZmlsZSk9PmZpbGUuZW5kc1dpdGgoXCIuanNcIikpO1xuICAgIHJldHVybiBbXG4gICAgICAgIC4uLm5vcm1hbFNjcmlwdHMsXG4gICAgICAgIC4uLmxvd1ByaW9yaXR5U2NyaXB0c1xuICAgIF0ubWFwKChmaWxlKT0+e1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgIGtleTogZmlsZSxcbiAgICAgICAgICAgIHNyYzogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIG5vbmNlOiBwcm9wcy5ub25jZSxcbiAgICAgICAgICAgIGFzeW5jOiAhaXNEZXZlbG9wbWVudCAmJiBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgICAgICAgICAgIGRlZmVyOiAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogcHJvcHMuY3Jvc3NPcmlnaW4gfHwgY3Jvc3NPcmlnaW5cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRQcmVOZXh0V29ya2VyU2NyaXB0cyhjb250ZXh0LCBwcm9wcykge1xuICAgIGNvbnN0IHsgYXNzZXRQcmVmaXggLCBzY3JpcHRMb2FkZXIgLCBjcm9zc09yaWdpbiAsIG5leHRTY3JpcHRXb3JrZXJzICB9ID0gY29udGV4dDtcbiAgICAvLyBkaXNhYmxlIGBuZXh0U2NyaXB0V29ya2Vyc2AgaW4gZWRnZSBydW50aW1lXG4gICAgaWYgKCFuZXh0U2NyaXB0V29ya2VycyB8fCBwcm9jZXNzLmVudi5ORVhUX1JVTlRJTUUgPT09IFwiZWRnZVwiKSByZXR1cm4gbnVsbDtcbiAgICB0cnkge1xuICAgICAgICBsZXQgeyBwYXJ0eXRvd25TbmlwcGV0ICB9ID0gX19ub25fd2VicGFja19yZXF1aXJlX18oXCJAYnVpbGRlci5pby9wYXJ0eXRvd24vaW50ZWdyYXRpb25cIik7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gQXJyYXkuaXNBcnJheShwcm9wcy5jaGlsZHJlbikgPyBwcm9wcy5jaGlsZHJlbiA6IFtcbiAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgICAgIF07XG4gICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgdXNlciBoYXMgZGVmaW5lZCB0aGVpciBvd24gUGFydHl0b3duIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgY29uc3QgdXNlckRlZmluZWRDb25maWcgPSBjaGlsZHJlbi5maW5kKChjaGlsZCk9PntcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjI7XG4gICAgICAgICAgICByZXR1cm4gaGFzQ29tcG9uZW50UHJvcHMoY2hpbGQpICYmIChjaGlsZCA9PSBudWxsID8gdm9pZCAwIDogKHJlZiA9IGNoaWxkLnByb3BzKSA9PSBudWxsID8gdm9pZCAwIDogKHJlZjIgPSByZWYuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpID09IG51bGwgPyB2b2lkIDAgOiByZWYyLl9faHRtbC5sZW5ndGgpICYmIFwiZGF0YS1wYXJ0eXRvd24tY29uZmlnXCIgaW4gY2hpbGQucHJvcHM7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCAhdXNlckRlZmluZWRDb25maWcgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgIFwiZGF0YS1wYXJ0eXRvd24tY29uZmlnXCI6IFwiXCIsXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgcGFydHl0b3duID0ge1xuICAgICAgICAgICAgICBsaWI6IFwiJHthc3NldFByZWZpeH0vX25leHQvc3RhdGljL35wYXJ0eXRvd24vXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgYFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgIFwiZGF0YS1wYXJ0eXRvd25cIjogXCJcIixcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgX19odG1sOiBwYXJ0eXRvd25TbmlwcGV0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksIChzY3JpcHRMb2FkZXIud29ya2VyIHx8IFtdKS5tYXAoKGZpbGUsIGluZGV4KT0+e1xuICAgICAgICAgICAgY29uc3QgeyBzdHJhdGVneSAsIHNyYyAsIGNoaWxkcmVuOiBzY3JpcHRDaGlsZHJlbiAsIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICwgLi4uc2NyaXB0UHJvcHMgfSA9IGZpbGU7XG4gICAgICAgICAgICBsZXQgc3JjUHJvcHMgPSB7fTtcbiAgICAgICAgICAgIGlmIChzcmMpIHtcbiAgICAgICAgICAgICAgICAvLyBVc2UgZXh0ZXJuYWwgc3JjIGlmIHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgc3JjUHJvcHMuc3JjID0gc3JjO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYW5nZXJvdXNseVNldElubmVySFRNTCAmJiBkYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwpIHtcbiAgICAgICAgICAgICAgICAvLyBFbWJlZCBpbmxpbmUgc2NyaXB0IGlmIHByb3ZpZGVkIHdpdGggZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcbiAgICAgICAgICAgICAgICBzcmNQcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCA9IHtcbiAgICAgICAgICAgICAgICAgICAgX19odG1sOiBkYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzY3JpcHRDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIC8vIEVtYmVkIGlubGluZSBzY3JpcHQgaWYgcHJvdmlkZWQgd2l0aCBjaGlsZHJlblxuICAgICAgICAgICAgICAgIHNyY1Byb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID0ge1xuICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IHR5cGVvZiBzY3JpcHRDaGlsZHJlbiA9PT0gXCJzdHJpbmdcIiA/IHNjcmlwdENoaWxkcmVuIDogQXJyYXkuaXNBcnJheShzY3JpcHRDaGlsZHJlbikgPyBzY3JpcHRDaGlsZHJlbi5qb2luKFwiXCIpIDogXCJcIlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdXNhZ2Ugb2YgbmV4dC9zY3JpcHQuIERpZCB5b3UgZm9yZ2V0IHRvIGluY2x1ZGUgYSBzcmMgYXR0cmlidXRlIG9yIGFuIGlubGluZSBzY3JpcHQ/IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtc2NyaXB0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCBPYmplY3QuYXNzaWduKHt9LCBzcmNQcm9wcywgc2NyaXB0UHJvcHMsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInRleHQvcGFydHl0b3duXCIsXG4gICAgICAgICAgICAgICAga2V5OiBzcmMgfHwgaW5kZXgsXG4gICAgICAgICAgICAgICAgbm9uY2U6IHByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgIFwiZGF0YS1uc2NyaXB0XCI6IFwid29ya2VyXCIsXG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHByb3BzLmNyb3NzT3JpZ2luIHx8IGNyb3NzT3JpZ2luXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKCgwLCBfaXNFcnJvcikuZGVmYXVsdChlcnIpICYmIGVyci5jb2RlICE9PSBcIk1PRFVMRV9OT1RfRk9VTkRcIikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBXYXJuaW5nOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldFByZU5leHRTY3JpcHRzKGNvbnRleHQsIHByb3BzKSB7XG4gICAgY29uc3QgeyBzY3JpcHRMb2FkZXIgLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAsIGNyb3NzT3JpZ2luICB9ID0gY29udGV4dDtcbiAgICBjb25zdCB3ZWJXb3JrZXJTY3JpcHRzID0gZ2V0UHJlTmV4dFdvcmtlclNjcmlwdHMoY29udGV4dCwgcHJvcHMpO1xuICAgIGNvbnN0IGJlZm9yZUludGVyYWN0aXZlU2NyaXB0cyA9IChzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgfHwgW10pLmZpbHRlcigoc2NyaXB0KT0+c2NyaXB0LnNyYykubWFwKChmaWxlLCBpbmRleCk9PntcbiAgICAgICAgY29uc3QgeyBzdHJhdGVneSAsIC4uLnNjcmlwdFByb3BzIH0gPSBmaWxlO1xuICAgICAgICB2YXIgX2RlZmVyO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIE9iamVjdC5hc3NpZ24oe30sIHNjcmlwdFByb3BzLCB7XG4gICAgICAgICAgICBrZXk6IHNjcmlwdFByb3BzLnNyYyB8fCBpbmRleCxcbiAgICAgICAgICAgIGRlZmVyOiAoX2RlZmVyID0gc2NyaXB0UHJvcHMuZGVmZXIpICE9IG51bGwgPyBfZGVmZXIgOiAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gICAgICAgICAgICBub25jZTogcHJvcHMubm9uY2UsXG4gICAgICAgICAgICBcImRhdGEtbnNjcmlwdFwiOiBcImJlZm9yZUludGVyYWN0aXZlXCIsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogcHJvcHMuY3Jvc3NPcmlnaW4gfHwgY3Jvc3NPcmlnaW5cbiAgICAgICAgfSkpO1xuICAgIH0pO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIHdlYldvcmtlclNjcmlwdHMsIGJlZm9yZUludGVyYWN0aXZlU2NyaXB0cyk7XG59XG5mdW5jdGlvbiBnZXRIZWFkSFRNTFByb3BzKHByb3BzKSB7XG4gICAgY29uc3QgeyBjcm9zc09yaWdpbiAsIG5vbmNlICwgLi4ucmVzdFByb3BzIH0gPSBwcm9wcztcbiAgICAvLyBUaGlzIGFzc2lnbm1lbnQgaXMgbmVjZXNzYXJ5IGZvciBhZGRpdGlvbmFsIHR5cGUgY2hlY2tpbmcgdG8gYXZvaWQgdW5zdXBwb3J0ZWQgYXR0cmlidXRlcyBpbiA8aGVhZD5cbiAgICBjb25zdCBoZWFkUHJvcHMgPSByZXN0UHJvcHM7XG4gICAgcmV0dXJuIGhlYWRQcm9wcztcbn1cbmZ1bmN0aW9uIGdldEFtcFBhdGgoYW1wUGF0aCwgYXNQYXRoKSB7XG4gICAgcmV0dXJuIGFtcFBhdGggfHwgYCR7YXNQYXRofSR7YXNQYXRoLmluY2x1ZGVzKFwiP1wiKSA/IFwiJlwiIDogXCI/XCJ9YW1wPTFgO1xufVxuY2xhc3MgSGVhZCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGNvbnRleHRUeXBlID0gX2h0bWxDb250ZXh0Lkh0bWxDb250ZXh0O1xuICAgIGdldENzc0xpbmtzKGZpbGVzKSB7XG4gICAgICAgIGNvbnN0IHsgYXNzZXRQcmVmaXggLCBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyAsIGR5bmFtaWNJbXBvcnRzICwgY3Jvc3NPcmlnaW4gLCBvcHRpbWl6ZUNzcyAsIG9wdGltaXplRm9udHMgLCAgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3QgY3NzRmlsZXMgPSBmaWxlcy5hbGxGaWxlcy5maWx0ZXIoKGYpPT5mLmVuZHNXaXRoKFwiLmNzc1wiKSk7XG4gICAgICAgIGNvbnN0IHNoYXJlZEZpbGVzID0gbmV3IFNldChmaWxlcy5zaGFyZWRGaWxlcyk7XG4gICAgICAgIC8vIFVubWFuYWdlZCBmaWxlcyBhcmUgQ1NTIGZpbGVzIHRoYXQgd2lsbCBiZSBoYW5kbGVkIGRpcmVjdGx5IGJ5IHRoZVxuICAgICAgICAvLyB3ZWJwYWNrIHJ1bnRpbWUgKGBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbmApLlxuICAgICAgICBsZXQgdW5tYW5nZWRGaWxlcyA9IG5ldyBTZXQoW10pO1xuICAgICAgICBsZXQgZHluYW1pY0Nzc0ZpbGVzID0gQXJyYXkuZnJvbShuZXcgU2V0KGR5bmFtaWNJbXBvcnRzLmZpbHRlcigoZmlsZSk9PmZpbGUuZW5kc1dpdGgoXCIuY3NzXCIpKSkpO1xuICAgICAgICBpZiAoZHluYW1pY0Nzc0ZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBuZXcgU2V0KGNzc0ZpbGVzKTtcbiAgICAgICAgICAgIGR5bmFtaWNDc3NGaWxlcyA9IGR5bmFtaWNDc3NGaWxlcy5maWx0ZXIoKGYpPT4hKGV4aXN0aW5nLmhhcyhmKSB8fCBzaGFyZWRGaWxlcy5oYXMoZikpKTtcbiAgICAgICAgICAgIHVubWFuZ2VkRmlsZXMgPSBuZXcgU2V0KGR5bmFtaWNDc3NGaWxlcyk7XG4gICAgICAgICAgICBjc3NGaWxlcy5wdXNoKC4uLmR5bmFtaWNDc3NGaWxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNzc0xpbmtFbGVtZW50cyA9IFtdO1xuICAgICAgICBjc3NGaWxlcy5mb3JFYWNoKChmaWxlKT0+e1xuICAgICAgICAgICAgY29uc3QgaXNTaGFyZWRGaWxlID0gc2hhcmVkRmlsZXMuaGFzKGZpbGUpO1xuICAgICAgICAgICAgaWYgKCFvcHRpbWl6ZUNzcykge1xuICAgICAgICAgICAgICAgIGNzc0xpbmtFbGVtZW50cy5wdXNoKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGAke2ZpbGV9LXByZWxvYWRgLFxuICAgICAgICAgICAgICAgICAgICBub25jZTogdGhpcy5wcm9wcy5ub25jZSxcbiAgICAgICAgICAgICAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgICAgICAgICAgYXM6IFwic3R5bGVcIixcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgY3Jvc3NPcmlnaW5cbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpc1VubWFuYWdlZEZpbGUgPSB1bm1hbmdlZEZpbGVzLmhhcyhmaWxlKTtcbiAgICAgICAgICAgIGNzc0xpbmtFbGVtZW50cy5wdXNoKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGtleTogZmlsZSxcbiAgICAgICAgICAgICAgICBub25jZTogdGhpcy5wcm9wcy5ub25jZSxcbiAgICAgICAgICAgICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgY3Jvc3NPcmlnaW4sXG4gICAgICAgICAgICAgICAgXCJkYXRhLW4tZ1wiOiBpc1VubWFuYWdlZEZpbGUgPyB1bmRlZmluZWQgOiBpc1NoYXJlZEZpbGUgPyBcIlwiIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIFwiZGF0YS1uLXBcIjogaXNVbm1hbmFnZWRGaWxlID8gdW5kZWZpbmVkIDogaXNTaGFyZWRGaWxlID8gdW5kZWZpbmVkIDogXCJcIlxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcImRldmVsb3BtZW50XCIgJiYgb3B0aW1pemVGb250cykge1xuICAgICAgICAgICAgY3NzTGlua0VsZW1lbnRzID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGNzc0xpbmtFbGVtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNzc0xpbmtFbGVtZW50cy5sZW5ndGggPT09IDAgPyBudWxsIDogY3NzTGlua0VsZW1lbnRzO1xuICAgIH1cbiAgICBnZXRQcmVsb2FkRHluYW1pY0NodW5rcygpIHtcbiAgICAgICAgY29uc3QgeyBkeW5hbWljSW1wb3J0cyAsIGFzc2V0UHJlZml4ICwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcgLCBjcm9zc09yaWdpbiAsICB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICByZXR1cm4gZHluYW1pY0ltcG9ydHMubWFwKChmaWxlKT0+e1xuICAgICAgICAgICAgaWYgKCFmaWxlLmVuZHNXaXRoKFwiLmpzXCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgICAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgICAgICAgICBrZXk6IGZpbGUsXG4gICAgICAgICAgICAgICAgaHJlZjogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgICAgICBhczogXCJzY3JpcHRcIixcbiAgICAgICAgICAgICAgICBub25jZTogdGhpcy5wcm9wcy5ub25jZSxcbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBjcm9zc09yaWdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLy8gRmlsdGVyIG91dCBudWxsZWQgc2NyaXB0c1xuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICAgIH1cbiAgICBnZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzKSB7XG4gICAgICAgIGNvbnN0IHsgYXNzZXRQcmVmaXggLCBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyAsIHNjcmlwdExvYWRlciAsIGNyb3NzT3JpZ2luICwgIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IHByZWxvYWRGaWxlcyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZmlsZSk9PntcbiAgICAgICAgICAgIHJldHVybiBmaWxlLmVuZHNXaXRoKFwiLmpzXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC4uLihzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgfHwgW10pLm1hcCgoZmlsZSk9Pi8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGZpbGUuc3JjLFxuICAgICAgICAgICAgICAgICAgICBub25jZTogdGhpcy5wcm9wcy5ub25jZSxcbiAgICAgICAgICAgICAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogZmlsZS5zcmMsXG4gICAgICAgICAgICAgICAgICAgIGFzOiBcInNjcmlwdFwiLFxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBjcm9zc09yaWdpblxuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIC4uLnByZWxvYWRGaWxlcy5tYXAoKGZpbGUpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBmaWxlLFxuICAgICAgICAgICAgICAgICAgICBub25jZTogdGhpcy5wcm9wcy5ub25jZSxcbiAgICAgICAgICAgICAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgICAgICAgICAgYXM6IFwic2NyaXB0XCIsXG4gICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IGNyb3NzT3JpZ2luXG4gICAgICAgICAgICAgICAgfSkpLCBcbiAgICAgICAgXTtcbiAgICB9XG4gICAgZ2V0QmVmb3JlSW50ZXJhY3RpdmVJbmxpbmVTY3JpcHRzKCkge1xuICAgICAgICBjb25zdCB7IHNjcmlwdExvYWRlciAgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3QgeyBub25jZSAsIGNyb3NzT3JpZ2luICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgfHwgW10pLmZpbHRlcigoc2NyaXB0KT0+IXNjcmlwdC5zcmMgJiYgKHNjcmlwdC5kYW5nZXJvdXNseVNldElubmVySFRNTCB8fCBzY3JpcHQuY2hpbGRyZW4pKS5tYXAoKGZpbGUsIGluZGV4KT0+e1xuICAgICAgICAgICAgY29uc3QgeyBzdHJhdGVneSAsIGNoaWxkcmVuICwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgLCBzcmMgLCAuLi5zY3JpcHRQcm9wcyB9ID0gZmlsZTtcbiAgICAgICAgICAgIGxldCBodG1sID0gXCJcIjtcbiAgICAgICAgICAgIGlmIChkYW5nZXJvdXNseVNldElubmVySFRNTCAmJiBkYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwpIHtcbiAgICAgICAgICAgICAgICBodG1sID0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGh0bWwgPSB0eXBlb2YgY2hpbGRyZW4gPT09IFwic3RyaW5nXCIgPyBjaGlsZHJlbiA6IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4uam9pbihcIlwiKSA6IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIE9iamVjdC5hc3NpZ24oe30sIHNjcmlwdFByb3BzLCB7XG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICAgICAgX19odG1sOiBodG1sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBrZXk6IHNjcmlwdFByb3BzLmlkIHx8IGluZGV4LFxuICAgICAgICAgICAgICAgIG5vbmNlOiBub25jZSxcbiAgICAgICAgICAgICAgICBcImRhdGEtbnNjcmlwdFwiOiBcImJlZm9yZUludGVyYWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IGNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldER5bmFtaWNDaHVua3MoZmlsZXMpIHtcbiAgICAgICAgcmV0dXJuIGdldER5bmFtaWNDaHVua3ModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzLCBmaWxlcyk7XG4gICAgfVxuICAgIGdldFByZU5leHRTY3JpcHRzKCkge1xuICAgICAgICByZXR1cm4gZ2V0UHJlTmV4dFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzKTtcbiAgICB9XG4gICAgZ2V0U2NyaXB0cyhmaWxlcykge1xuICAgICAgICByZXR1cm4gZ2V0U2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMsIGZpbGVzKTtcbiAgICB9XG4gICAgZ2V0UG9seWZpbGxTY3JpcHRzKCkge1xuICAgICAgICByZXR1cm4gZ2V0UG9seWZpbGxTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcyk7XG4gICAgfVxuICAgIG1ha2VTdHlsZXNoZWV0SW5lcnQobm9kZSkge1xuICAgICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKG5vZGUsIChjKT0+e1xuICAgICAgICAgICAgdmFyIHJlZjUsIHJlZjM7XG4gICAgICAgICAgICBpZiAoKGMgPT0gbnVsbCA/IHZvaWQgMCA6IGMudHlwZSkgPT09IFwibGlua1wiICYmIChjID09IG51bGwgPyB2b2lkIDAgOiAocmVmNSA9IGMucHJvcHMpID09IG51bGwgPyB2b2lkIDAgOiByZWY1LmhyZWYpICYmIF9jb25zdGFudHMuT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTLnNvbWUoKHsgdXJsICB9KT0+e1xuICAgICAgICAgICAgICAgIHZhciByZWYsIHJlZjQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGMgPT0gbnVsbCA/IHZvaWQgMCA6IChyZWYgPSBjLnByb3BzKSA9PSBudWxsID8gdm9pZCAwIDogKHJlZjQgPSByZWYuaHJlZikgPT0gbnVsbCA/IHZvaWQgMCA6IHJlZjQuc3RhcnRzV2l0aCh1cmwpO1xuICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uYy5wcm9wcyB8fCB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWhyZWZcIjogYy5wcm9wcy5ocmVmLFxuICAgICAgICAgICAgICAgICAgICBocmVmOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjLCBuZXdQcm9wcyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGMgPT0gbnVsbCA/IHZvaWQgMCA6IChyZWYzID0gYy5wcm9wcykgPT0gbnVsbCA/IHZvaWQgMCA6IHJlZjMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uYy5wcm9wcyB8fCB7fSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjLnByb3BzLmNoaWxkcmVuKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGMsIG5ld1Byb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICB9KS5maWx0ZXIoQm9vbGVhbik7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzdHlsZXMgLCBhbXBQYXRoICwgaW5BbXBNb2RlICwgaHlicmlkQW1wICwgY2Fub25pY2FsQmFzZSAsIF9fTkVYVF9EQVRBX18gLCBkYW5nZXJvdXNBc1BhdGggLCBoZWFkVGFncyAsIHVuc3RhYmxlX3J1bnRpbWVKUyAsIHVuc3RhYmxlX0pzUHJlbG9hZCAsIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICwgb3B0aW1pemVDc3MgLCBvcHRpbWl6ZUZvbnRzICwgIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IGRpc2FibGVSdW50aW1lSlMgPSB1bnN0YWJsZV9ydW50aW1lSlMgPT09IGZhbHNlO1xuICAgICAgICBjb25zdCBkaXNhYmxlSnNQcmVsb2FkID0gdW5zdGFibGVfSnNQcmVsb2FkID09PSBmYWxzZSB8fCAhZGlzYWJsZU9wdGltaXplZExvYWRpbmc7XG4gICAgICAgIHRoaXMuY29udGV4dC5kb2NDb21wb25lbnRzUmVuZGVyZWQuSGVhZCA9IHRydWU7XG4gICAgICAgIGxldCB7IGhlYWQgIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGxldCBjc3NQcmVsb2FkcyA9IFtdO1xuICAgICAgICBsZXQgb3RoZXJIZWFkRWxlbWVudHMgPSBbXTtcbiAgICAgICAgaWYgKGhlYWQpIHtcbiAgICAgICAgICAgIGhlYWQuZm9yRWFjaCgoYyk9PntcbiAgICAgICAgICAgICAgICBpZiAoYyAmJiBjLnR5cGUgPT09IFwibGlua1wiICYmIGMucHJvcHNbXCJyZWxcIl0gPT09IFwicHJlbG9hZFwiICYmIGMucHJvcHNbXCJhc1wiXSA9PT0gXCJzdHlsZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNzc1ByZWxvYWRzLnB1c2goYyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYyAmJiBvdGhlckhlYWRFbGVtZW50cy5wdXNoKGMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaGVhZCA9IGNzc1ByZWxvYWRzLmNvbmNhdChvdGhlckhlYWRFbGVtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNoaWxkcmVuID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgICAgIC8vIHNob3cgYSB3YXJuaW5nIGlmIEhlYWQgY29udGFpbnMgPHRpdGxlPiAob25seSBpbiBkZXZlbG9wbWVudClcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCk9PntcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzUmVhY3RIZWxtZXQgPSBjaGlsZCA9PSBudWxsID8gdm9pZCAwIDogKHJlZiA9IGNoaWxkLnByb3BzKSA9PSBudWxsID8gdm9pZCAwIDogcmVmW1wiZGF0YS1yZWFjdC1oZWxtZXRcIl07XG4gICAgICAgICAgICAgICAgaWYgKCFpc1JlYWN0SGVsbWV0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWY2O1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGNoaWxkID09IG51bGwgPyB2b2lkIDAgOiBjaGlsZC50eXBlKSA9PT0gXCJ0aXRsZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJXYXJuaW5nOiA8dGl0bGU+IHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLWRvY3VtZW50LXRpdGxlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChjaGlsZCA9PSBudWxsID8gdm9pZCAwIDogY2hpbGQudHlwZSkgPT09IFwibWV0YVwiICYmIChjaGlsZCA9PSBudWxsID8gdm9pZCAwIDogKHJlZjYgPSBjaGlsZC5wcm9wcykgPT0gbnVsbCA/IHZvaWQgMCA6IHJlZjYubmFtZSkgPT09IFwidmlld3BvcnRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiV2FybmluZzogdmlld3BvcnQgbWV0YSB0YWdzIHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLWRvY3VtZW50LXZpZXdwb3J0LW1ldGFcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jcm9zc09yaWdpbikgY29uc29sZS53YXJuKFwiV2FybmluZzogYEhlYWRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJkZXZlbG9wbWVudFwiICYmIG9wdGltaXplRm9udHMgJiYgIShwcm9jZXNzLmVudi5ORVhUX1JVTlRJTUUgIT09IFwiZWRnZVwiICYmIGluQW1wTW9kZSkpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaGFzQW1waHRtbFJlbCA9IGZhbHNlO1xuICAgICAgICBsZXQgaGFzQ2Fub25pY2FsUmVsID0gZmFsc2U7XG4gICAgICAgIC8vIHNob3cgd2FybmluZyBhbmQgcmVtb3ZlIGNvbmZsaWN0aW5nIGFtcCBoZWFkIHRhZ3NcbiAgICAgICAgaGVhZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm1hcChoZWFkIHx8IFtdLCAoY2hpbGQpPT57XG4gICAgICAgICAgICBpZiAoIWNoaWxkKSByZXR1cm4gY2hpbGQ7XG4gICAgICAgICAgICBjb25zdCB7IHR5cGUgLCBwcm9wcyAgfSA9IGNoaWxkO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSAhPT0gXCJlZGdlXCIgJiYgaW5BbXBNb2RlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJhZFByb3AgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBcIm1ldGFcIiAmJiBwcm9wcy5uYW1lID09PSBcInZpZXdwb3J0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFkUHJvcCA9ICduYW1lPVwidmlld3BvcnRcIic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcImxpbmtcIiAmJiBwcm9wcy5yZWwgPT09IFwiY2Fub25pY2FsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzQ2Fub25pY2FsUmVsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwic2NyaXB0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBibG9jayBpZlxuICAgICAgICAgICAgICAgICAgICAvLyAxLiBpdCBoYXMgYSBzcmMgYW5kIGlzbid0IHBvaW50aW5nIHRvIGFtcHByb2plY3QncyBDRE5cbiAgICAgICAgICAgICAgICAgICAgLy8gMi4gaXQgaXMgdXNpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgd2l0aG91dCBhIHR5cGUgb3JcbiAgICAgICAgICAgICAgICAgICAgLy8gYSB0eXBlIG9mIHRleHQvamF2YXNjcmlwdFxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcHMuc3JjICYmIHByb3BzLnNyYy5pbmRleE9mKFwiYW1wcHJvamVjdFwiKSA8IC0xIHx8IHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICYmICghcHJvcHMudHlwZSB8fCBwcm9wcy50eXBlID09PSBcInRleHQvamF2YXNjcmlwdFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFkUHJvcCA9IFwiPHNjcmlwdFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goKHByb3ApPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFkUHJvcCArPSBgICR7cHJvcH09XCIke3Byb3BzW3Byb3BdfVwiYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFkUHJvcCArPSBcIi8+XCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGJhZFByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBGb3VuZCBjb25mbGljdGluZyBhbXAgdGFnIFwiJHtjaGlsZC50eXBlfVwiIHdpdGggY29uZmxpY3RpbmcgcHJvcCAke2JhZFByb3B9IGluICR7X19ORVhUX0RBVEFfXy5wYWdlfS4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvY29uZmxpY3RpbmctYW1wLXRhZ2ApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG5vbi1hbXAgbW9kZVxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBcImxpbmtcIiAmJiBwcm9wcy5yZWwgPT09IFwiYW1waHRtbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc0FtcGh0bWxSZWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGZpbGVzID0gZ2V0RG9jdW1lbnRGaWxlcyh0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCwgdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18ucGFnZSwgcHJvY2Vzcy5lbnYuTkVYVF9SVU5USU1FICE9PSBcImVkZ2VcIiAmJiBpbkFtcE1vZGUpO1xuICAgICAgICB2YXIgX25vbmNlLCBfbm9uY2UxO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaGVhZFwiLCBPYmplY3QuYXNzaWduKHt9LCBnZXRIZWFkSFRNTFByb3BzKHRoaXMucHJvcHMpKSwgdGhpcy5jb250ZXh0LmlzRGV2ZWxvcG1lbnQgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgICAgICBcImRhdGEtbmV4dC1oaWRlLWZvdWNcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZGF0YS1hbXBkZXZtb2RlXCI6IHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSAhPT0gXCJlZGdlXCIgJiYgaW5BbXBNb2RlID8gXCJ0cnVlXCIgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpub25lfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIHtcbiAgICAgICAgICAgIFwiZGF0YS1uZXh0LWhpZGUtZm91Y1wiOiB0cnVlLFxuICAgICAgICAgICAgXCJkYXRhLWFtcGRldm1vZGVcIjogcHJvY2Vzcy5lbnYuTkVYVF9SVU5USU1FICE9PSBcImVkZ2VcIiAmJiBpbkFtcE1vZGUgPyBcInRydWVcIiA6IHVuZGVmaW5lZFxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpibG9ja31gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSksIGhlYWQsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgbmFtZTogXCJuZXh0LWhlYWQtY291bnRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KGhlYWQgfHwgW10pLnRvU3RyaW5nKClcbiAgICAgICAgfSksIGNoaWxkcmVuLCBvcHRpbWl6ZUZvbnRzICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgbmFtZTogXCJuZXh0LWZvbnQtcHJlY29ubmVjdFwiXG4gICAgICAgIH0pLCBwcm9jZXNzLmVudi5ORVhUX1JVTlRJTUUgIT09IFwiZWRnZVwiICYmIGluQW1wTW9kZSAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgbmFtZTogXCJ2aWV3cG9ydFwiLFxuICAgICAgICAgICAgY29udGVudDogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsbWluaW11bS1zY2FsZT0xLGluaXRpYWwtc2NhbGU9MVwiXG4gICAgICAgIH0pLCAhaGFzQ2Fub25pY2FsUmVsICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICAgICAgcmVsOiBcImNhbm9uaWNhbFwiLFxuICAgICAgICAgICAgaHJlZjogY2Fub25pY2FsQmFzZSArIHJlcXVpcmUoXCIuLi9zZXJ2ZXIvdXRpbHNcIikuY2xlYW5BbXBQYXRoKGRhbmdlcm91c0FzUGF0aClcbiAgICAgICAgfSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgICAgIGFzOiBcInNjcmlwdFwiLFxuICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wiXG4gICAgICAgIH0pLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQW1wU3R5bGVzLCB7XG4gICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xuICAgICAgICB9KSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xuICAgICAgICAgICAgXCJhbXAtYm9pbGVycGxhdGVcIjogXCJcIixcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tb3otYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1zLWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoO2FuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RofUAtd2Via2l0LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1vei1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tcy1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1vLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1Aa2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIHtcbiAgICAgICAgICAgIFwiYW1wLWJvaWxlcnBsYXRlXCI6IFwiXCIsXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7LXdlYmtpdC1hbmltYXRpb246bm9uZTstbW96LWFuaW1hdGlvbjpub25lOy1tcy1hbmltYXRpb246bm9uZTthbmltYXRpb246bm9uZX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJcbiAgICAgICAgfSkpLCAhKHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSAhPT0gXCJlZGdlXCIgJiYgaW5BbXBNb2RlKSAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsICFoYXNBbXBodG1sUmVsICYmIGh5YnJpZEFtcCAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAgICAgIHJlbDogXCJhbXBodG1sXCIsXG4gICAgICAgICAgICBocmVmOiBjYW5vbmljYWxCYXNlICsgZ2V0QW1wUGF0aChhbXBQYXRoLCBkYW5nZXJvdXNBc1BhdGgpXG4gICAgICAgIH0pLCB0aGlzLmdldEJlZm9yZUludGVyYWN0aXZlSW5saW5lU2NyaXB0cygpLCAhb3B0aW1pemVDc3MgJiYgdGhpcy5nZXRDc3NMaW5rcyhmaWxlcyksICFvcHRpbWl6ZUNzcyAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCB7XG4gICAgICAgICAgICBcImRhdGEtbi1jc3NcIjogKF9ub25jZSA9IHRoaXMucHJvcHMubm9uY2UpICE9IG51bGwgPyBfbm9uY2UgOiBcIlwiXG4gICAgICAgIH0pLCAhZGlzYWJsZVJ1bnRpbWVKUyAmJiAhZGlzYWJsZUpzUHJlbG9hZCAmJiB0aGlzLmdldFByZWxvYWREeW5hbWljQ2h1bmtzKCksICFkaXNhYmxlUnVudGltZUpTICYmICFkaXNhYmxlSnNQcmVsb2FkICYmIHRoaXMuZ2V0UHJlbG9hZE1haW5MaW5rcyhmaWxlcyksICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpLCAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiYgIWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQcmVOZXh0U2NyaXB0cygpLCAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiYgIWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXREeW5hbWljQ2h1bmtzKGZpbGVzKSwgIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0U2NyaXB0cyhmaWxlcyksIG9wdGltaXplQ3NzICYmIHRoaXMuZ2V0Q3NzTGlua3MoZmlsZXMpLCBvcHRpbWl6ZUNzcyAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCB7XG4gICAgICAgICAgICBcImRhdGEtbi1jc3NcIjogKF9ub25jZTEgPSB0aGlzLnByb3BzLm5vbmNlKSAhPSBudWxsID8gX25vbmNlMSA6IFwiXCJcbiAgICAgICAgfSksIHRoaXMuY29udGV4dC5pc0RldmVsb3BtZW50ICYmIC8vIHRoaXMgZWxlbWVudCBpcyB1c2VkIHRvIG1vdW50IGRldmVsb3BtZW50IHN0eWxlcyBzbyB0aGVcbiAgICAgICAgLy8gb3JkZXJpbmcgbWF0Y2hlcyBwcm9kdWN0aW9uXG4gICAgICAgIC8vIChieSBkZWZhdWx0LCBzdHlsZS1sb2FkZXIgaW5qZWN0cyBhdCB0aGUgYm90dG9tIG9mIDxoZWFkIC8+KVxuICAgICAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCB7XG4gICAgICAgICAgICBpZDogXCJfX25leHRfY3NzX19ET19OT1RfVVNFX19cIlxuICAgICAgICB9KSwgc3R5bGVzIHx8IG51bGwpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIHt9LCAuLi5oZWFkVGFncyB8fCBbXSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuSGVhZCA9IEhlYWQ7XG5mdW5jdGlvbiBoYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zKHNjcmlwdExvYWRlciwgX19ORVhUX0RBVEFfXywgcHJvcHMpIHtcbiAgICB2YXIgcmVmMTAsIHJlZjcsIHJlZjgsIHJlZjk7XG4gICAgaWYgKCFwcm9wcy5jaGlsZHJlbikgcmV0dXJuO1xuICAgIGNvbnN0IHNjcmlwdExvYWRlckl0ZW1zID0gW107XG4gICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5pc0FycmF5KHByb3BzLmNoaWxkcmVuKSA/IHByb3BzLmNoaWxkcmVuIDogW1xuICAgICAgICBwcm9wcy5jaGlsZHJlblxuICAgIF07XG4gICAgY29uc3QgaGVhZENoaWxkcmVuID0gKHJlZjEwID0gY2hpbGRyZW4uZmluZCgoY2hpbGQpPT5jaGlsZC50eXBlID09PSBIZWFkKSkgPT0gbnVsbCA/IHZvaWQgMCA6IChyZWY3ID0gcmVmMTAucHJvcHMpID09IG51bGwgPyB2b2lkIDAgOiByZWY3LmNoaWxkcmVuO1xuICAgIGNvbnN0IGJvZHlDaGlsZHJlbiA9IChyZWY4ID0gY2hpbGRyZW4uZmluZCgoY2hpbGQpPT5jaGlsZC50eXBlID09PSBcImJvZHlcIikpID09IG51bGwgPyB2b2lkIDAgOiAocmVmOSA9IHJlZjgucHJvcHMpID09IG51bGwgPyB2b2lkIDAgOiByZWY5LmNoaWxkcmVuO1xuICAgIC8vIFNjcmlwdHMgd2l0aCBiZWZvcmVJbnRlcmFjdGl2ZSBjYW4gYmUgcGxhY2VkIGluc2lkZSBIZWFkIG9yIDxib2R5PiBzbyBjaGlsZHJlbiBvZiBib3RoIG5lZWRzIHRvIGJlIHRyYXZlcnNlZFxuICAgIGNvbnN0IGNvbWJpbmVkQ2hpbGRyZW4gPSBbXG4gICAgICAgIC4uLkFycmF5LmlzQXJyYXkoaGVhZENoaWxkcmVuKSA/IGhlYWRDaGlsZHJlbiA6IFtcbiAgICAgICAgICAgIGhlYWRDaGlsZHJlblxuICAgICAgICBdLFxuICAgICAgICAuLi5BcnJheS5pc0FycmF5KGJvZHlDaGlsZHJlbikgPyBib2R5Q2hpbGRyZW4gOiBbXG4gICAgICAgICAgICBib2R5Q2hpbGRyZW5cbiAgICAgICAgXSwgXG4gICAgXTtcbiAgICBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKGNvbWJpbmVkQ2hpbGRyZW4sIChjaGlsZCk9PntcbiAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgaWYgKCFjaGlsZCkgcmV0dXJuO1xuICAgICAgICAvLyBXaGVuIHVzaW5nIHRoZSBgbmV4dC9zY3JpcHRgIGNvbXBvbmVudCwgcmVnaXN0ZXIgaXQgaW4gc2NyaXB0IGxvYWRlci5cbiAgICAgICAgaWYgKChyZWYgPSBjaGlsZC50eXBlKSA9PSBudWxsID8gdm9pZCAwIDogcmVmLl9fbmV4dFNjcmlwdCkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzLnN0cmF0ZWd5ID09PSBcImJlZm9yZUludGVyYWN0aXZlXCIpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgPSAoc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlIHx8IFtdKS5jb25jYXQoW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jaGlsZC5wcm9wc1xuICAgICAgICAgICAgICAgICAgICB9LCBcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFtcbiAgICAgICAgICAgICAgICBcImxhenlPbmxvYWRcIixcbiAgICAgICAgICAgICAgICBcImFmdGVySW50ZXJhY3RpdmVcIixcbiAgICAgICAgICAgICAgICBcIndvcmtlclwiXG4gICAgICAgICAgICBdLmluY2x1ZGVzKGNoaWxkLnByb3BzLnN0cmF0ZWd5KSkge1xuICAgICAgICAgICAgICAgIHNjcmlwdExvYWRlckl0ZW1zLnB1c2goY2hpbGQucHJvcHMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIF9fTkVYVF9EQVRBX18uc2NyaXB0TG9hZGVyID0gc2NyaXB0TG9hZGVySXRlbXM7XG59XG5jbGFzcyBOZXh0U2NyaXB0IGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY29udGV4dFR5cGUgPSBfaHRtbENvbnRleHQuSHRtbENvbnRleHQ7XG4gICAgZ2V0RHluYW1pY0NodW5rcyhmaWxlcykge1xuICAgICAgICByZXR1cm4gZ2V0RHluYW1pY0NodW5rcyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMsIGZpbGVzKTtcbiAgICB9XG4gICAgZ2V0UHJlTmV4dFNjcmlwdHMoKSB7XG4gICAgICAgIHJldHVybiBnZXRQcmVOZXh0U2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMpO1xuICAgIH1cbiAgICBnZXRTY3JpcHRzKGZpbGVzKSB7XG4gICAgICAgIHJldHVybiBnZXRTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcywgZmlsZXMpO1xuICAgIH1cbiAgICBnZXRQb2x5ZmlsbFNjcmlwdHMoKSB7XG4gICAgICAgIHJldHVybiBnZXRQb2x5ZmlsbFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzKTtcbiAgICB9XG4gICAgc3RhdGljIGdldElubGluZVNjcmlwdFNvdXJjZShjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHsgX19ORVhUX0RBVEFfXyAsIGxhcmdlUGFnZURhdGFCeXRlcyAgfSA9IGNvbnRleHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoX19ORVhUX0RBVEFfXyk7XG4gICAgICAgICAgICBjb25zdCBieXRlcyA9IHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSA9PT0gXCJlZGdlXCIgPyBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoZGF0YSkuYnVmZmVyLmJ5dGVMZW5ndGggOiBCdWZmZXIuZnJvbShkYXRhKS5ieXRlTGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgcHJldHR5Qnl0ZXMgPSByZXF1aXJlKFwiLi4vbGliL3ByZXR0eS1ieXRlc1wiKS5kZWZhdWx0O1xuICAgICAgICAgICAgaWYgKGxhcmdlUGFnZURhdGFCeXRlcyAmJiBieXRlcyA+IGxhcmdlUGFnZURhdGFCeXRlcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgV2FybmluZzogZGF0YSBmb3IgcGFnZSBcIiR7X19ORVhUX0RBVEFfXy5wYWdlfVwiJHtfX05FWFRfREFUQV9fLnBhZ2UgPT09IGNvbnRleHQuZGFuZ2Vyb3VzQXNQYXRoID8gXCJcIiA6IGAgKHBhdGggXCIke2NvbnRleHQuZGFuZ2Vyb3VzQXNQYXRofVwiKWB9IGlzICR7cHJldHR5Qnl0ZXMoYnl0ZXMpfSB3aGljaCBleGNlZWRzIHRoZSB0aHJlc2hvbGQgb2YgJHtwcmV0dHlCeXRlcyhsYXJnZVBhZ2VEYXRhQnl0ZXMpfSwgdGhpcyBhbW91bnQgb2YgZGF0YSBjYW4gcmVkdWNlIHBlcmZvcm1hbmNlLlxcblNlZSBtb3JlIGluZm8gaGVyZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGFyZ2UtcGFnZS1kYXRhYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9odG1sZXNjYXBlKS5odG1sRXNjYXBlSnNvblN0cmluZyhkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0Vycm9yKS5kZWZhdWx0KGVycikgJiYgZXJyLm1lc3NhZ2UuaW5kZXhPZihcImNpcmN1bGFyIHN0cnVjdHVyZVwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENpcmN1bGFyIHN0cnVjdHVyZSBpbiBcImdldEluaXRpYWxQcm9wc1wiIHJlc3VsdCBvZiBwYWdlIFwiJHtfX05FWFRfREFUQV9fLnBhZ2V9XCIuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2NpcmN1bGFyLXN0cnVjdHVyZWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBhc3NldFByZWZpeCAsIGluQW1wTW9kZSAsIGJ1aWxkTWFuaWZlc3QgLCB1bnN0YWJsZV9ydW50aW1lSlMgLCBkb2NDb21wb25lbnRzUmVuZGVyZWQgLCBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyAsIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICwgY3Jvc3NPcmlnaW4gLCAgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3QgZGlzYWJsZVJ1bnRpbWVKUyA9IHVuc3RhYmxlX3J1bnRpbWVKUyA9PT0gZmFsc2U7XG4gICAgICAgIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5OZXh0U2NyaXB0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSAhPT0gXCJlZGdlXCIgJiYgaW5BbXBNb2RlKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhbXBEZXZGaWxlcyA9IFtcbiAgICAgICAgICAgICAgICAuLi5idWlsZE1hbmlmZXN0LmRldkZpbGVzLFxuICAgICAgICAgICAgICAgIC4uLmJ1aWxkTWFuaWZlc3QucG9seWZpbGxGaWxlcyxcbiAgICAgICAgICAgICAgICAuLi5idWlsZE1hbmlmZXN0LmFtcERldkZpbGVzLCBcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiX19ORVhUX0RBVEFfX1wiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IGNyb3NzT3JpZ2luLFxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgICAgIF9faHRtbDogTmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkYXRhLWFtcGRldm1vZGVcIjogdHJ1ZVxuICAgICAgICAgICAgfSksIGFtcERldkZpbGVzLm1hcCgoZmlsZSk9Pi8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtmaWxlfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgICAgICAgICAgbm9uY2U6IHRoaXMucHJvcHMubm9uY2UsXG4gICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IGNyb3NzT3JpZ2luLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGEtYW1wZGV2bW9kZVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jcm9zc09yaWdpbikgY29uc29sZS53YXJuKFwiV2FybmluZzogYE5leHRTY3JpcHRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbGVzID0gZ2V0RG9jdW1lbnRGaWxlcyh0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCwgdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18ucGFnZSwgcHJvY2Vzcy5lbnYuTkVYVF9SVU5USU1FICE9PSBcImVkZ2VcIiAmJiBpbkFtcE1vZGUpO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCAhZGlzYWJsZVJ1bnRpbWVKUyAmJiBidWlsZE1hbmlmZXN0LmRldkZpbGVzID8gYnVpbGRNYW5pZmVzdC5kZXZGaWxlcy5tYXAoKGZpbGUpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgICAgICAgICAgICAgIGtleTogZmlsZSxcbiAgICAgICAgICAgICAgICBzcmM6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICAgICAgbm9uY2U6IHRoaXMucHJvcHMubm9uY2UsXG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgY3Jvc3NPcmlnaW5cbiAgICAgICAgICAgIH0pKSA6IG51bGwsIGRpc2FibGVSdW50aW1lSlMgPyBudWxsIDogLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgIGlkOiBcIl9fTkVYVF9EQVRBX19cIixcbiAgICAgICAgICAgIHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgbm9uY2U6IHRoaXMucHJvcHMubm9uY2UsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBjcm9zc09yaWdpbixcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFByZU5leHRTY3JpcHRzKCksIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0RHluYW1pY0NodW5rcyhmaWxlcyksIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0U2NyaXB0cyhmaWxlcykpO1xuICAgIH1cbn1cbmV4cG9ydHMuTmV4dFNjcmlwdCA9IE5leHRTY3JpcHQ7XG5mdW5jdGlvbiBIdG1sKHByb3BzKSB7XG4gICAgY29uc3QgeyBpbkFtcE1vZGUgLCBkb2NDb21wb25lbnRzUmVuZGVyZWQgLCBsb2NhbGUgLCBzY3JpcHRMb2FkZXIgLCBfX05FWFRfREFUQV9fICwgIH0gPSAoMCwgX3JlYWN0KS51c2VDb250ZXh0KF9odG1sQ29udGV4dC5IdG1sQ29udGV4dCk7XG4gICAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLkh0bWwgPSB0cnVlO1xuICAgIGhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMoc2NyaXB0TG9hZGVyLCBfX05FWFRfREFUQV9fLCBwcm9wcyk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImh0bWxcIiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgbGFuZzogcHJvcHMubGFuZyB8fCBsb2NhbGUgfHwgdW5kZWZpbmVkLFxuICAgICAgICBhbXA6IHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSAhPT0gXCJlZGdlXCIgJiYgaW5BbXBNb2RlID8gXCJcIiA6IHVuZGVmaW5lZCxcbiAgICAgICAgXCJkYXRhLWFtcGRldm1vZGVcIjogcHJvY2Vzcy5lbnYuTkVYVF9SVU5USU1FICE9PSBcImVkZ2VcIiAmJiBpbkFtcE1vZGUgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJcIiA6IHVuZGVmaW5lZFxuICAgIH0pKTtcbn1cbmZ1bmN0aW9uIE1haW4oKSB7XG4gICAgY29uc3QgeyBkb2NDb21wb25lbnRzUmVuZGVyZWQgIH0gPSAoMCwgX3JlYWN0KS51c2VDb250ZXh0KF9odG1sQ29udGV4dC5IdG1sQ29udGV4dCk7XG4gICAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLk1haW4gPSB0cnVlO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibmV4dC1qcy1pbnRlcm5hbC1ib2R5LXJlbmRlci10YXJnZXRcIiwgbnVsbCk7XG59XG4vLyBBZGQgYSBzcGVjaWFsIHByb3BlcnR5IHRvIHRoZSBidWlsdC1pbiBgRG9jdW1lbnRgIGNvbXBvbmVudCBzbyBsYXRlciB3ZSBjYW5cbi8vIGlkZW50aWZ5IGlmIGEgdXNlciBjdXN0b21pemVkIGBEb2N1bWVudGAgaXMgdXNlZCBvciBub3QuXG5jb25zdCBJbnRlcm5hbEZ1bmN0aW9uRG9jdW1lbnQgPSBmdW5jdGlvbiBJbnRlcm5hbEZ1bmN0aW9uRG9jdW1lbnQoKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChIdG1sLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJvZHlcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE1haW4sIG51bGwpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTmV4dFNjcmlwdCwgbnVsbCkpKTtcbn07XG5Eb2N1bWVudFtfY29uc3RhbnRzLk5FWFRfQlVJTFRJTl9ET0NVTUVOVF0gPSBJbnRlcm5hbEZ1bmN0aW9uRG9jdW1lbnQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9kb2N1bWVudC5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJIdG1sIiwiTWFpbiIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfY29uc3RhbnRzIiwiX2dldFBhZ2VGaWxlcyIsIl9odG1sZXNjYXBlIiwiX2lzRXJyb3IiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2h0bWxDb250ZXh0IiwiRG9jdW1lbnQiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJkZWZhdWx0R2V0SW5pdGlhbFByb3BzIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsIkhlYWQiLCJOZXh0U2NyaXB0Iiwib2JqIiwiX19lc01vZHVsZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIldlYWtNYXAiLCJjYWNoZSIsImhhcyIsImdldCIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzZXQiLCJnZXREb2N1bWVudEZpbGVzIiwiYnVpbGRNYW5pZmVzdCIsInBhdGhuYW1lIiwiaW5BbXBNb2RlIiwic2hhcmVkRmlsZXMiLCJnZXRQYWdlRmlsZXMiLCJwYWdlRmlsZXMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9SVU5USU1FIiwiYWxsRmlsZXMiLCJTZXQiLCJnZXRQb2x5ZmlsbFNjcmlwdHMiLCJjb250ZXh0IiwicHJvcHMiLCJhc3NldFByZWZpeCIsImRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nIiwiZGlzYWJsZU9wdGltaXplZExvYWRpbmciLCJjcm9zc09yaWdpbiIsInBvbHlmaWxsRmlsZXMiLCJmaWx0ZXIiLCJwb2x5ZmlsbCIsImVuZHNXaXRoIiwibWFwIiwiZGVmZXIiLCJub25jZSIsIm5vTW9kdWxlIiwic3JjIiwiaGFzQ29tcG9uZW50UHJvcHMiLCJjaGlsZCIsIkFtcFN0eWxlcyIsInN0eWxlcyIsImN1clN0eWxlcyIsIkFycmF5IiwiaXNBcnJheSIsImNoaWxkcmVuIiwiaGFzU3R5bGVzIiwiZWwiLCJyZWYiLCJyZWYxIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJmb3JFYWNoIiwicHVzaCIsInN0eWxlIiwiam9pbiIsInJlcGxhY2UiLCJnZXREeW5hbWljQ2h1bmtzIiwiZmlsZXMiLCJkeW5hbWljSW1wb3J0cyIsImlzRGV2ZWxvcG1lbnQiLCJmaWxlIiwiaW5jbHVkZXMiLCJhc3luYyIsImVuY29kZVVSSSIsImdldFNjcmlwdHMiLCJub3JtYWxTY3JpcHRzIiwibG93UHJpb3JpdHlTY3JpcHRzIiwibG93UHJpb3JpdHlGaWxlcyIsImdldFByZU5leHRXb3JrZXJTY3JpcHRzIiwic2NyaXB0TG9hZGVyIiwibmV4dFNjcmlwdFdvcmtlcnMiLCJwYXJ0eXRvd25TbmlwcGV0IiwiX19ub25fd2VicGFja19yZXF1aXJlX18iLCJ1c2VyRGVmaW5lZENvbmZpZyIsImZpbmQiLCJyZWYyIiwibGVuZ3RoIiwiRnJhZ21lbnQiLCJ3b3JrZXIiLCJpbmRleCIsInN0cmF0ZWd5Iiwic2NyaXB0Q2hpbGRyZW4iLCJzY3JpcHRQcm9wcyIsInNyY1Byb3BzIiwiRXJyb3IiLCJhc3NpZ24iLCJ0eXBlIiwiZXJyIiwiY29kZSIsImNvbnNvbGUiLCJ3YXJuIiwibWVzc2FnZSIsImdldFByZU5leHRTY3JpcHRzIiwid2ViV29ya2VyU2NyaXB0cyIsImJlZm9yZUludGVyYWN0aXZlU2NyaXB0cyIsImJlZm9yZUludGVyYWN0aXZlIiwic2NyaXB0IiwiX2RlZmVyIiwiZ2V0SGVhZEhUTUxQcm9wcyIsInJlc3RQcm9wcyIsImhlYWRQcm9wcyIsImdldEFtcFBhdGgiLCJhbXBQYXRoIiwiYXNQYXRoIiwiZ2V0Q3NzTGlua3MiLCJvcHRpbWl6ZUNzcyIsIm9wdGltaXplRm9udHMiLCJjc3NGaWxlcyIsImYiLCJ1bm1hbmdlZEZpbGVzIiwiZHluYW1pY0Nzc0ZpbGVzIiwiZnJvbSIsImV4aXN0aW5nIiwiY3NzTGlua0VsZW1lbnRzIiwiaXNTaGFyZWRGaWxlIiwicmVsIiwiaHJlZiIsImFzIiwiaXNVbm1hbmFnZWRGaWxlIiwidW5kZWZpbmVkIiwibWFrZVN0eWxlc2hlZXRJbmVydCIsImdldFByZWxvYWREeW5hbWljQ2h1bmtzIiwiQm9vbGVhbiIsImdldFByZWxvYWRNYWluTGlua3MiLCJwcmVsb2FkRmlsZXMiLCJnZXRCZWZvcmVJbnRlcmFjdGl2ZUlubGluZVNjcmlwdHMiLCJodG1sIiwiaWQiLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwibm9kZSIsIkNoaWxkcmVuIiwiYyIsInJlZjUiLCJyZWYzIiwiT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTIiwic29tZSIsInVybCIsInJlZjQiLCJzdGFydHNXaXRoIiwibmV3UHJvcHMiLCJjbG9uZUVsZW1lbnQiLCJoeWJyaWRBbXAiLCJjYW5vbmljYWxCYXNlIiwiX19ORVhUX0RBVEFfXyIsImRhbmdlcm91c0FzUGF0aCIsImhlYWRUYWdzIiwidW5zdGFibGVfcnVudGltZUpTIiwidW5zdGFibGVfSnNQcmVsb2FkIiwiZGlzYWJsZVJ1bnRpbWVKUyIsImRpc2FibGVKc1ByZWxvYWQiLCJkb2NDb21wb25lbnRzUmVuZGVyZWQiLCJoZWFkIiwiY3NzUHJlbG9hZHMiLCJvdGhlckhlYWRFbGVtZW50cyIsImNvbmNhdCIsInRvQXJyYXkiLCJpc1JlYWN0SGVsbWV0IiwicmVmNiIsIm5hbWUiLCJoYXNBbXBodG1sUmVsIiwiaGFzQ2Fub25pY2FsUmVsIiwiYmFkUHJvcCIsImluZGV4T2YiLCJrZXlzIiwicHJvcCIsInBhZ2UiLCJfbm9uY2UiLCJfbm9uY2UxIiwiY29udGVudCIsImNvdW50IiwidG9TdHJpbmciLCJjbGVhbkFtcFBhdGgiLCJIdG1sQ29udGV4dCIsImhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMiLCJyZWYxMCIsInJlZjciLCJyZWY4IiwicmVmOSIsInNjcmlwdExvYWRlckl0ZW1zIiwiaGVhZENoaWxkcmVuIiwiYm9keUNoaWxkcmVuIiwiY29tYmluZWRDaGlsZHJlbiIsIl9fbmV4dFNjcmlwdCIsImdldElubGluZVNjcmlwdFNvdXJjZSIsImxhcmdlUGFnZURhdGFCeXRlcyIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiYnl0ZXMiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsImJ1ZmZlciIsImJ5dGVMZW5ndGgiLCJCdWZmZXIiLCJwcmV0dHlCeXRlcyIsImh0bWxFc2NhcGVKc29uU3RyaW5nIiwiYW1wRGV2RmlsZXMiLCJkZXZGaWxlcyIsImxvY2FsZSIsInVzZUNvbnRleHQiLCJsYW5nIiwiYW1wIiwiSW50ZXJuYWxGdW5jdGlvbkRvY3VtZW50IiwiTkVYVF9CVUlMVElOX0RPQ1VNRU5UIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_document.js\n");
>>>>>>> develop

/***/ }),

/***/ "./node_modules/next/dist/lib/is-error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/lib/is-error.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = isError;\nexports.getProperError = getProperError;\nvar _isPlainObject = __webpack_require__(/*! ../shared/lib/is-plain-object */ \"../shared/lib/is-plain-object\");\nfunction isError(err) {\n    return typeof err === \"object\" && err !== null && \"name\" in err && \"message\" in err;\n}\nfunction getProperError(err) {\n    if (isError(err)) {\n        return err;\n    }\n    if (true) {\n        // provide better error for case where `throw undefined`\n        // is called in development\n        if (typeof err === \"undefined\") {\n            return new Error(\"An undefined error was thrown, \" + \"see here for more info: https://nextjs.org/docs/messages/threw-undefined\");\n        }\n        if (err === null) {\n            return new Error(\"A null error was thrown, \" + \"see here for more info: https://nextjs.org/docs/messages/threw-undefined\");\n        }\n    }\n    return new Error((0, _isPlainObject).isPlainObject(err) ? JSON.stringify(err) : err + \"\");\n}\n\n//# sourceMappingURL=is-error.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2xpYi9pcy1lcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2Ysc0JBQXNCO0FBQ3RCLHFCQUFxQixtQkFBTyxDQUFDLG9FQUErQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBc0M7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3phcGF0YS13ZWJhcHAvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2xpYi9pcy1lcnJvci5qcz8xNzhlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaXNFcnJvcjtcbmV4cG9ydHMuZ2V0UHJvcGVyRXJyb3IgPSBnZXRQcm9wZXJFcnJvcjtcbnZhciBfaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2lzLXBsYWluLW9iamVjdFwiKTtcbmZ1bmN0aW9uIGlzRXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBlcnIgPT09IFwib2JqZWN0XCIgJiYgZXJyICE9PSBudWxsICYmIFwibmFtZVwiIGluIGVyciAmJiBcIm1lc3NhZ2VcIiBpbiBlcnI7XG59XG5mdW5jdGlvbiBnZXRQcm9wZXJFcnJvcihlcnIpIHtcbiAgICBpZiAoaXNFcnJvcihlcnIpKSB7XG4gICAgICAgIHJldHVybiBlcnI7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgIC8vIHByb3ZpZGUgYmV0dGVyIGVycm9yIGZvciBjYXNlIHdoZXJlIGB0aHJvdyB1bmRlZmluZWRgXG4gICAgICAgIC8vIGlzIGNhbGxlZCBpbiBkZXZlbG9wbWVudFxuICAgICAgICBpZiAodHlwZW9mIGVyciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIkFuIHVuZGVmaW5lZCBlcnJvciB3YXMgdGhyb3duLCBcIiArIFwic2VlIGhlcmUgZm9yIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvdGhyZXctdW5kZWZpbmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJBIG51bGwgZXJyb3Igd2FzIHRocm93biwgXCIgKyBcInNlZSBoZXJlIGZvciBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3RocmV3LXVuZGVmaW5lZFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IEVycm9yKCgwLCBfaXNQbGFpbk9iamVjdCkuaXNQbGFpbk9iamVjdChlcnIpID8gSlNPTi5zdHJpbmdpZnkoZXJyKSA6IGVyciArIFwiXCIpO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy1lcnJvci5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/lib/is-error.js\n");

/***/ }),

/***/ "./node_modules/next/dist/lib/pretty-bytes.js":
/*!****************************************************!*\
  !*** ./node_modules/next/dist/lib/pretty-bytes.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = prettyBytes;\nfunction prettyBytes(number, options) {\n    if (!Number.isFinite(number)) {\n        throw new TypeError(`Expected a finite number, got ${typeof number}: ${number}`);\n    }\n    options = Object.assign({}, options);\n    if (options.signed && number === 0) {\n        return \" 0 B\";\n    }\n    const isNegative = number < 0;\n    const prefix = isNegative ? \"-\" : options.signed ? \"+\" : \"\";\n    if (isNegative) {\n        number = -number;\n    }\n    if (number < 1) {\n        const numberString = toLocaleString(number, options.locale);\n        return prefix + numberString + \" B\";\n    }\n    const exponent = Math.min(Math.floor(Math.log10(number) / 3), UNITS.length - 1);\n    number = Number((number / Math.pow(1000, exponent)).toPrecision(3));\n    const numberString = toLocaleString(number, options.locale);\n    const unit = UNITS[exponent];\n    return prefix + numberString + \" \" + unit;\n}\n/*\nMIT License\n\nCopyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/ const UNITS = [\n    \"B\",\n    \"kB\",\n    \"MB\",\n    \"GB\",\n    \"TB\",\n    \"PB\",\n    \"EB\",\n    \"ZB\",\n    \"YB\"\n];\n/*\nFormats the given number using `Number#toLocaleString`.\n- If locale is a string, the value is expected to be a locale-key (for example: `de`).\n- If locale is true, the system default locale is used for translation.\n- If no value for locale is specified, the number is returned unmodified.\n*/ const toLocaleString = (number, locale)=>{\n    let result = number;\n    if (typeof locale === \"string\") {\n        result = number.toLocaleString(locale);\n    } else if (locale === true) {\n        result = number.toLocaleString();\n    }\n    return result;\n};\n\n//# sourceMappingURL=pretty-bytes.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2xpYi9wcmV0dHktYnl0ZXMuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmO0FBQ0E7QUFDQSw2REFBNkQsY0FBYyxJQUFJLE9BQU87QUFDdEY7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96YXBhdGEtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9saWIvcHJldHR5LWJ5dGVzLmpzP2ZmMzAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBwcmV0dHlCeXRlcztcbmZ1bmN0aW9uIHByZXR0eUJ5dGVzKG51bWJlciwgb3B0aW9ucykge1xuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKG51bWJlcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYSBmaW5pdGUgbnVtYmVyLCBnb3QgJHt0eXBlb2YgbnVtYmVyfTogJHtudW1iZXJ9YCk7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcbiAgICBpZiAob3B0aW9ucy5zaWduZWQgJiYgbnVtYmVyID09PSAwKSB7XG4gICAgICAgIHJldHVybiBcIiAwIEJcIjtcbiAgICB9XG4gICAgY29uc3QgaXNOZWdhdGl2ZSA9IG51bWJlciA8IDA7XG4gICAgY29uc3QgcHJlZml4ID0gaXNOZWdhdGl2ZSA/IFwiLVwiIDogb3B0aW9ucy5zaWduZWQgPyBcIitcIiA6IFwiXCI7XG4gICAgaWYgKGlzTmVnYXRpdmUpIHtcbiAgICAgICAgbnVtYmVyID0gLW51bWJlcjtcbiAgICB9XG4gICAgaWYgKG51bWJlciA8IDEpIHtcbiAgICAgICAgY29uc3QgbnVtYmVyU3RyaW5nID0gdG9Mb2NhbGVTdHJpbmcobnVtYmVyLCBvcHRpb25zLmxvY2FsZSk7XG4gICAgICAgIHJldHVybiBwcmVmaXggKyBudW1iZXJTdHJpbmcgKyBcIiBCXCI7XG4gICAgfVxuICAgIGNvbnN0IGV4cG9uZW50ID0gTWF0aC5taW4oTWF0aC5mbG9vcihNYXRoLmxvZzEwKG51bWJlcikgLyAzKSwgVU5JVFMubGVuZ3RoIC0gMSk7XG4gICAgbnVtYmVyID0gTnVtYmVyKChudW1iZXIgLyBNYXRoLnBvdygxMDAwLCBleHBvbmVudCkpLnRvUHJlY2lzaW9uKDMpKTtcbiAgICBjb25zdCBudW1iZXJTdHJpbmcgPSB0b0xvY2FsZVN0cmluZyhudW1iZXIsIG9wdGlvbnMubG9jYWxlKTtcbiAgICBjb25zdCB1bml0ID0gVU5JVFNbZXhwb25lbnRdO1xuICAgIHJldHVybiBwcmVmaXggKyBudW1iZXJTdHJpbmcgKyBcIiBcIiArIHVuaXQ7XG59XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBTaW5kcmUgU29yaHVzIDxzaW5kcmVzb3JodXNAZ21haWwuY29tPiAoc2luZHJlc29yaHVzLmNvbSlcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gY29uc3QgVU5JVFMgPSBbXG4gICAgXCJCXCIsXG4gICAgXCJrQlwiLFxuICAgIFwiTUJcIixcbiAgICBcIkdCXCIsXG4gICAgXCJUQlwiLFxuICAgIFwiUEJcIixcbiAgICBcIkVCXCIsXG4gICAgXCJaQlwiLFxuICAgIFwiWUJcIlxuXTtcbi8qXG5Gb3JtYXRzIHRoZSBnaXZlbiBudW1iZXIgdXNpbmcgYE51bWJlciN0b0xvY2FsZVN0cmluZ2AuXG4tIElmIGxvY2FsZSBpcyBhIHN0cmluZywgdGhlIHZhbHVlIGlzIGV4cGVjdGVkIHRvIGJlIGEgbG9jYWxlLWtleSAoZm9yIGV4YW1wbGU6IGBkZWApLlxuLSBJZiBsb2NhbGUgaXMgdHJ1ZSwgdGhlIHN5c3RlbSBkZWZhdWx0IGxvY2FsZSBpcyB1c2VkIGZvciB0cmFuc2xhdGlvbi5cbi0gSWYgbm8gdmFsdWUgZm9yIGxvY2FsZSBpcyBzcGVjaWZpZWQsIHRoZSBudW1iZXIgaXMgcmV0dXJuZWQgdW5tb2RpZmllZC5cbiovIGNvbnN0IHRvTG9jYWxlU3RyaW5nID0gKG51bWJlciwgbG9jYWxlKT0+e1xuICAgIGxldCByZXN1bHQgPSBudW1iZXI7XG4gICAgaWYgKHR5cGVvZiBsb2NhbGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmVzdWx0ID0gbnVtYmVyLnRvTG9jYWxlU3RyaW5nKGxvY2FsZSk7XG4gICAgfSBlbHNlIGlmIChsb2NhbGUgPT09IHRydWUpIHtcbiAgICAgICAgcmVzdWx0ID0gbnVtYmVyLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmV0dHktYnl0ZXMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/lib/pretty-bytes.js\n");

/***/ }),

/***/ "../server/get-page-files":
/*!*****************************************************!*\
  !*** external "next/dist/server/get-page-files.js" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ "../server/htmlescape":
/*!*************************************************!*\
  !*** external "next/dist/server/htmlescape.js" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ "../server/utils":
/*!********************************************!*\
  !*** external "next/dist/server/utils.js" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ "../shared/lib/constants":
/*!****************************************************!*\
  !*** external "next/dist/shared/lib/constants.js" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ "../shared/lib/html-context":
/*!*******************************************************!*\
  !*** external "next/dist/shared/lib/html-context.js" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ "../shared/lib/is-plain-object":
/*!**********************************************************!*\
  !*** external "next/dist/shared/lib/is-plain-object.js" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
<<<<<<< HEAD
var __webpack_exports__ = (__webpack_exec__(613));
=======
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_document.js"));
>>>>>>> develop
module.exports = __webpack_exports__;

})();