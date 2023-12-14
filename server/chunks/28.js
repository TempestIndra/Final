exports.id = 28;
exports.ids = [28];
exports.modules = {

/***/ 2875:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./components/Footer.js




function Footer() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
      className: "jsx-1011371744",
      children: ["Made with", ' ', /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/netliheart.svg",
        alt: "Netlify Logo",
        className: "jsx-1011371744" + " " + "logo"
      }), " for you"]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "1011371744",
      children: ["footer.jsx-1011371744{width:100%;height:100px;border-top:3px solid #3a93af;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".logo.jsx-1011371744{height:1em;margin:5px;}"]
    })]
  });
}
// EXTERNAL MODULE: ./components/Layout.module.css
var Layout_module = __webpack_require__(9729);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/Layout.js







function Layout({
  children,
  story
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Next.js Adventure!"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), story && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "Go Home"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Layout_module_default()).container,
      children: /*#__PURE__*/jsx_runtime_.jsx("main", {
        children: children
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
}

/***/ }),

/***/ 9729:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Layout_container__oiF2U"
};


/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;