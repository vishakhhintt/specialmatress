webpackHotUpdate_N_E("pages/products/[slug]",{

/***/ "./pages/products/[slug].jsx":
/*!***********************************!*\
  !*** ./pages/products/[slug].jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_xampp_htdocs_special_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_xampp_htdocs_special_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_special_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_xampp_htdocs_special_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _productenquiry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../productenquiry */ "./pages/productenquiry.js");




var _jsxFileName = "C:\\xampp\\htdocs\\special-next\\pages\\products\\[slug].jsx",
    _this = undefined;








 // export async function getServerSideProps({context,params}) {
//     const router = useRouter();
//           return {
//               props : {
//                   slug:router,
//           }};
//   }

var Product = function Product(_ref) {
  var statusCode = _ref.statusCode,
      post = _ref.post;
  console.log(slug);

  if (statusCode !== 200) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        children: "Oops"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: "Something has gone wrong"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, _this);
  }

  var title = post.title.rendered,
      slug = post.slug;
  console.log(slug);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      children: slug
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 7
  }, _this);
};

_c = Product;

Product.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(C_xampp_htdocs_special_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_xampp_htdocs_special_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(slug) {
    var post, statusCode;
    return C_xampp_htdocs_special_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            post = null;
            statusCode = 200;
            return _context.abrupt("return", {
              statusCode: statusCode,
              post: post,
              slug: slug
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Product);

var _c;

$RefreshReg$(_c, "Product");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvW3NsdWddLmpzeCJdLCJuYW1lcyI6WyJQcm9kdWN0Iiwic3RhdHVzQ29kZSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwic2x1ZyIsInRpdGxlIiwicmVuZGVyZWQiLCJnZXRJbml0aWFsUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUdBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQTBCO0FBQUEsTUFBdkJDLFVBQXVCLFFBQXZCQSxVQUF1QjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN0Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQVo7O0FBQ0EsTUFBSUosVUFBVSxLQUFLLEdBQW5CLEVBQXdCO0FBQ3RCLHdCQUVFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFPRDs7QUFWcUMsTUFZWEssS0FaVyxHQVlPSixJQVpQLENBWTlCSSxLQVo4QixDQVlyQkMsUUFacUI7QUFBQSxNQVlGRixJQVpFLEdBWU9ILElBWlAsQ0FZRkcsSUFaRTtBQWF4Q0YsU0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQVo7QUFDRSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSxnQkFBSUQ7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQXBCSDs7S0FBTUwsTzs7QUFxQkpBLE9BQU8sQ0FBQ1EsZUFBUjtBQUFBLCtRQUEwQixpQkFBT0gsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJILGdCQURrQixHQUNWLElBRFU7QUFFbEJELHNCQUZrQixHQUVMLEdBRks7QUFBQSw2Q0FHakI7QUFDTEEsd0JBQVUsRUFBVkEsVUFESztBQUVMQyxrQkFBSSxFQUFKQSxJQUZLO0FBR0xHLGtCQUFJLEVBQUpBO0FBSEssYUFIaUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVWVMLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzL1tzbHVnXS42N2Y1ZmMwMGNlZjRlMGZmMmRmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gIGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjsgXHJcbmltcG9ydCB7dG9hc3R9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0IFByb2R1Y3RFbnF1aXJ5Rm9ybSBmcm9tICcuLy4uL3Byb2R1Y3RlbnF1aXJ5JztcclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe2NvbnRleHQscGFyYW1zfSkge1xyXG4vLyAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbi8vICAgICAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgICAgICAgIHByb3BzIDoge1xyXG4vLyAgICAgICAgICAgICAgICAgICBzbHVnOnJvdXRlcixcclxuICAgICAgICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICB9fTtcclxuICAgICAgXHJcbi8vICAgfVxyXG5cclxuXHJcbmNvbnN0IFByb2R1Y3QgPSAoeyBzdGF0dXNDb2RlLCBwb3N0IH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHNsdWcpO1xyXG4gICAgaWYgKHN0YXR1c0NvZGUgIT09IDIwMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMT5Pb3BzPC9oMT5cclxuICAgICAgICAgIDxwPlNvbWV0aGluZyBoYXMgZ29uZSB3cm9uZzwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IHsgdGl0bGU6IHsgcmVuZGVyZWQ6IHRpdGxlIH0sIHNsdWcgfSA9IHBvc3Q7XHJcbiAgY29uc29sZS5sb2coc2x1Zyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICA8cD57c2x1Z308L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgUHJvZHVjdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoc2x1ZykgPT4ge1xyXG4gICAgY29uc3QgcG9zdCAgPSBudWxsO1xyXG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IDIwMDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN0YXR1c0NvZGUsXHJcbiAgICAgIHBvc3QsXHJcbiAgICAgIHNsdWdcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDsgICJdLCJzb3VyY2VSb290IjoiIn0=