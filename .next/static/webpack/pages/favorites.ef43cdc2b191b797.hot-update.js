"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/favorites",{

/***/ "./src/components/Card/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Card/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Card.module.css */ \"./src/styles/Card.module.css\");\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context */ \"./src/context.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nfunction Card(param) {\n    let { id , name , image , specie  } = param;\n    _s();\n    const { setFavorites , favorites , addToFavorites  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.FavoriteContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n        children: [\n            image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: image,\n                alt: name ? name : \"\",\n                width: 200,\n                height: 180,\n                quality: 75\n            }, void 0, false, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: specie\n            }, void 0, false, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FavoriteBtn, {\n                card: {\n                    id,\n                    name,\n                    image,\n                    specie\n                }\n            }, void 0, false, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, id, true, {\n        fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Card, \"BudMZ3TFlNqAjf+srkO62vMe3ZI=\");\n_c = Card;\nfunction FavoriteBtn(param) {\n    let { card  } = param;\n    _s1();\n    const { favorites , addToFavorites  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.FavoriteContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnCard),\n        onClick: ()=>addToFavorites(card),\n        children: \"Favoritos\"\n    }, void 0, false, {\n        fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s1(FavoriteBtn, \"KJBjlqICALKlVcu0cBIa2XYeGvA=\");\n_c1 = FavoriteBtn;\nvar _c, _c1;\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c1, \"FavoriteBtn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFPTUE7QUFOeUI7QUFDZTtBQUNBO0FBRUs7QUFJcEMsU0FBU0ssS0FBSyxLQUFrQyxFQUFFO1FBQXBDLEVBQUVDLEdBQUUsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBUyxHQUFsQzs7SUFDM0IsTUFBTSxFQUFFQyxhQUFZLEVBQUVDLFVBQVMsRUFBRUMsZUFBYyxFQUFFLEdBQy9DVCxpREFBVUEsQ0FBQ0MscURBQWVBO0lBRTVCLHFCQUNFLDhEQUFDUztRQUFZQyxXQUFXWixxRUFBVzs7WUFDaENNLHVCQUNDLDhEQUFDUCxtREFBS0E7Z0JBQ0plLEtBQUtSO2dCQUNMUyxLQUFLVixPQUFPQSxPQUFPLEVBQUU7Z0JBQ3JCVyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxTQUFTOzs7Ozs7MEJBR2IsOERBQUNDOzBCQUFJZDs7Ozs7OzBCQUNMLDhEQUFDZTswQkFBR2I7Ozs7OzswQkFDSiw4REFBQ2M7Z0JBQVlSLE1BQU07b0JBQUVUO29CQUFJQztvQkFBTUM7b0JBQU9DO2dCQUFPOzs7Ozs7O09BWnRDSDs7Ozs7QUFlYixDQUFDO0dBcEJ1QkQ7S0FBQUE7QUFzQnhCLFNBQVNrQixZQUFZLEtBQXlCLEVBQUU7UUFBM0IsRUFBRVIsS0FBSSxFQUFtQixHQUF6Qjs7SUFDbkIsTUFBTSxFQUFFSixVQUFTLEVBQUVDLGVBQWMsRUFBRSxHQUFHVCxpREFBVUEsQ0FBQ0MscURBQWVBO0lBRWhFLHFCQUNFLDhEQUFDb0I7UUFBT1YsV0FBV1osd0VBQWM7UUFBRXdCLFNBQVMsSUFBTWQsZUFBZUc7a0JBQU87Ozs7OztBQUk1RTtJQVJTUTtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJkL2luZGV4LnRzeD9jMTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEludGVyIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvQ2FyZC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgRmF2b3JpdGVDb250ZXh0LCBpQ2FyZCB9IGZyb20gXCJAL2NvbnRleHRcIjtcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkKHsgaWQsIG5hbWUsIGltYWdlLCBzcGVjaWUgfTogaUNhcmQpIHtcbiAgY29uc3QgeyBzZXRGYXZvcml0ZXMsIGZhdm9yaXRlcywgYWRkVG9GYXZvcml0ZXMgfSA9XG4gICAgdXNlQ29udGV4dChGYXZvcml0ZUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPGxpIGtleT17aWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAge2ltYWdlICYmIChcbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICBhbHQ9e25hbWUgPyBuYW1lIDogXCJcIn1cbiAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgIGhlaWdodD17MTgwfVxuICAgICAgICAgIHF1YWxpdHk9ezc1fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxoMj57bmFtZX08L2gyPlxuICAgICAgPHA+e3NwZWNpZX08L3A+XG4gICAgICA8RmF2b3JpdGVCdG4gY2FyZD17eyBpZCwgbmFtZSwgaW1hZ2UsIHNwZWNpZSB9fSAvPlxuICAgIDwvbGk+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEZhdm9yaXRlQnRuKHsgY2FyZCB9OiB7IGNhcmQ6IGlDYXJkIH0pIHtcbiAgY29uc3QgeyBmYXZvcml0ZXMsIGFkZFRvRmF2b3JpdGVzIH0gPSB1c2VDb250ZXh0KEZhdm9yaXRlQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ0bkNhcmR9IG9uQ2xpY2s9eygpID0+IGFkZFRvRmF2b3JpdGVzKGNhcmQpfT5cbiAgICAgIEZhdm9yaXRvc1xuICAgIDwvYnV0dG9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImludGVyIiwiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VDb250ZXh0IiwiRmF2b3JpdGVDb250ZXh0IiwiQ2FyZCIsImlkIiwibmFtZSIsImltYWdlIiwic3BlY2llIiwic2V0RmF2b3JpdGVzIiwiZmF2b3JpdGVzIiwiYWRkVG9GYXZvcml0ZXMiLCJsaSIsImNsYXNzTmFtZSIsImNhcmQiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInF1YWxpdHkiLCJoMiIsInAiLCJGYXZvcml0ZUJ0biIsImJ1dHRvbiIsImJ0bkNhcmQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Card/index.tsx\n"));

/***/ })

});