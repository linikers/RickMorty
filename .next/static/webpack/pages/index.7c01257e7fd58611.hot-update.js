"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Card/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Card/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Card.module.css */ \"./src/styles/Card.module.css\");\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context */ \"./src/context.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nfunction Card(param) {\n    let { id , name , image , specie  } = param;\n    _s();\n    const { setFavorites , favorites , addToFavorites  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.FavoriteContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: image,\n                alt: name,\n                width: 200,\n                height: 180,\n                quality: 75\n            }, void 0, false, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: specie\n            }, void 0, false, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FavoriteBtn, {\n                card: {\n                    id,\n                    name,\n                    image,\n                    specie\n                }\n            }, void 0, false, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, id, true, {\n        fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Card, \"BudMZ3TFlNqAjf+srkO62vMe3ZI=\");\n_c = Card;\nfunction FavoriteBtn(param) {\n    let { card  } = param;\n    _s1();\n    const { favorites , addToFavorites  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.FavoriteContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnCard),\n        onClick: ()=>addToFavorites(card),\n        children: \"Favoritos\"\n    }, void 0, false, {\n        fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s1(FavoriteBtn, \"KJBjlqICALKlVcu0cBIa2XYeGvA=\");\n_c1 = FavoriteBtn;\nvar _c, _c1;\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c1, \"FavoriteBtn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFPTUE7QUFOeUI7QUFDZTtBQUNBO0FBRUs7QUFJcEMsU0FBU0ssS0FBSyxLQUFrQyxFQUFFO1FBQXBDLEVBQUVDLEdBQUUsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBUyxHQUFsQzs7SUFDM0IsTUFBTSxFQUFFQyxhQUFZLEVBQUVDLFVBQVMsRUFBRUMsZUFBYyxFQUFFLEdBQy9DVCxpREFBVUEsQ0FBQ0MscURBQWVBO0lBRTVCLHFCQUNFLDhEQUFDUztRQUFZQyxXQUFXWixxRUFBVzs7MEJBQ2pDLDhEQUFDRCxtREFBS0E7Z0JBQUNlLEtBQUtSO2dCQUFPUyxLQUFLVjtnQkFBTVcsT0FBTztnQkFBS0MsUUFBUTtnQkFBS0MsU0FBUzs7Ozs7OzBCQUNoRSw4REFBQ0M7MEJBQUlkOzs7Ozs7MEJBQ0wsOERBQUNlOzBCQUFHYjs7Ozs7OzBCQUNKLDhEQUFDYztnQkFBWVIsTUFBTTtvQkFBRVQ7b0JBQUlDO29CQUFNQztvQkFBT0M7Z0JBQU87Ozs7Ozs7T0FKdENIOzs7OztBQU9iLENBQUM7R0FadUJEO0tBQUFBO0FBY3hCLFNBQVNrQixZQUFZLEtBQXlCLEVBQUU7UUFBM0IsRUFBRVIsS0FBSSxFQUFtQixHQUF6Qjs7SUFDbkIsTUFBTSxFQUFFSixVQUFTLEVBQUVDLGVBQWMsRUFBRSxHQUFHVCxpREFBVUEsQ0FBQ0MscURBQWVBO0lBRWhFLHFCQUNFLDhEQUFDb0I7UUFBT1YsV0FBV1osd0VBQWM7UUFBRXdCLFNBQVMsSUFBTWQsZUFBZUc7a0JBQU87Ozs7OztBQUk1RTtJQVJTUTtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJkL2luZGV4LnRzeD9jMTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEludGVyIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvQ2FyZC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgRmF2b3JpdGVDb250ZXh0LCBpQ2FyZCB9IGZyb20gXCJAL2NvbnRleHRcIjtcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkKHsgaWQsIG5hbWUsIGltYWdlLCBzcGVjaWUgfTogaUNhcmQpIHtcbiAgY29uc3QgeyBzZXRGYXZvcml0ZXMsIGZhdm9yaXRlcywgYWRkVG9GYXZvcml0ZXMgfSA9XG4gICAgdXNlQ29udGV4dChGYXZvcml0ZUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPGxpIGtleT17aWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD17bmFtZX0gd2lkdGg9ezIwMH0gaGVpZ2h0PXsxODB9IHF1YWxpdHk9ezc1fSAvPlxuICAgICAgPGgyPntuYW1lfTwvaDI+XG4gICAgICA8cD57c3BlY2llfTwvcD5cbiAgICAgIDxGYXZvcml0ZUJ0biBjYXJkPXt7IGlkLCBuYW1lLCBpbWFnZSwgc3BlY2llIH19IC8+XG4gICAgPC9saT5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRmF2b3JpdGVCdG4oeyBjYXJkIH06IHsgY2FyZDogaUNhcmQgfSkge1xuICBjb25zdCB7IGZhdm9yaXRlcywgYWRkVG9GYXZvcml0ZXMgfSA9IHVzZUNvbnRleHQoRmF2b3JpdGVDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRuQ2FyZH0gb25DbGljaz17KCkgPT4gYWRkVG9GYXZvcml0ZXMoY2FyZCl9PlxuICAgICAgRmF2b3JpdG9zXG4gICAgPC9idXR0b24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJJbWFnZSIsInN0eWxlcyIsInVzZUNvbnRleHQiLCJGYXZvcml0ZUNvbnRleHQiLCJDYXJkIiwiaWQiLCJuYW1lIiwiaW1hZ2UiLCJzcGVjaWUiLCJzZXRGYXZvcml0ZXMiLCJmYXZvcml0ZXMiLCJhZGRUb0Zhdm9yaXRlcyIsImxpIiwiY2xhc3NOYW1lIiwiY2FyZCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicXVhbGl0eSIsImgyIiwicCIsIkZhdm9yaXRlQnRuIiwiYnV0dG9uIiwiYnRuQ2FyZCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Card/index.tsx\n"));

/***/ })

});