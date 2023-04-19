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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Card.module.css */ \"./src/styles/Card.module.css\");\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context */ \"./src/context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Card(param) {\n    let { id , name , image , specie , isFavorite  } = param;\n    _s();\n    const { setFavorites , favorites , addToFavorites , removeFavorites  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.FavoriteContext);\n    const [cardIsFavorite, setCardIsFavorite] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(isFavorite);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setCardIsFavorite(favorites.some((fav)=>fav.id === id));\n    }, [\n        favorites\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n        children: [\n            image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: image,\n                alt: name ? name : \"\",\n                width: 200,\n                height: 180,\n                quality: 75\n            }, void 0, false, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: specie\n            }, void 0, false, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            cardIsFavorite ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnCard),\n                onClick: ()=>removeFavorites(id),\n                children: [\n                    \" \",\n                    \"Remover\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnCard),\n                onClick: ()=>addToFavorites({\n                        id,\n                        name,\n                        image,\n                        specie,\n                        isFavorite: true\n                    }),\n                children: \"Favorito\"\n            }, void 0, false, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this)\n        ]\n    }, id, true, {\n        fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(Card, \"Lw/5HgPVpOjWS9V9XFWVsxiiwvs=\");\n_c = Card;\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFPTUE7QUFOeUI7QUFDZTtBQUNVO0FBRUw7QUFJcEMsU0FBU08sS0FBSyxLQUE4QyxFQUFFO1FBQWhELEVBQUVDLEdBQUUsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRUMsV0FBVSxFQUFTLEdBQTlDOztJQUMzQixNQUFNLEVBQUVDLGFBQVksRUFBRUMsVUFBUyxFQUFFQyxlQUFjLEVBQUVDLGdCQUFlLEVBQUUsR0FDaEViLGlEQUFVQSxDQUFDRyxxREFBZUE7SUFFNUIsTUFBTSxDQUFDVyxnQkFBZ0JDLGtCQUFrQixHQUFHYiwrQ0FBUUEsQ0FBQ087SUFDckRSLGdEQUFTQSxDQUFDLElBQU07UUFDZGMsa0JBQWtCSixVQUFVSyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSVosRUFBRSxLQUFLQTtJQUN2RCxHQUFHO1FBQUNNO0tBQVU7SUFFZCxxQkFDRSw4REFBQ087UUFBWUMsV0FBV3BCLHFFQUFXOztZQUNoQ1EsdUJBQ0MsOERBQUNULG1EQUFLQTtnQkFDSnVCLEtBQUtkO2dCQUNMZSxLQUFLaEIsT0FBT0EsT0FBTyxFQUFFO2dCQUNyQmlCLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLFNBQVM7Ozs7OzswQkFHYiw4REFBQ0M7MEJBQUlwQjs7Ozs7OzBCQUNMLDhEQUFDcUI7MEJBQUduQjs7Ozs7O1lBQ0hNLCtCQUNDLDhEQUFDYztnQkFBT1QsV0FBV3BCLHdFQUFjO2dCQUFFK0IsU0FBUyxJQUFNakIsZ0JBQWdCUjs7b0JBQy9EO29CQUFJOzs7Ozs7cUNBSVAsOERBQUN1QjtnQkFDQ1QsV0FBV3BCLHdFQUFjO2dCQUN6QitCLFNBQVMsSUFDUGxCLGVBQWU7d0JBQUVQO3dCQUFJQzt3QkFBTUM7d0JBQU9DO3dCQUFRQyxZQUFZLElBQUk7b0JBQUM7MEJBRTlEOzs7OztvQkFHRjs7T0ExQk1KOzs7OztBQTZCYixDQUFDO0dBdkN1QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC9pbmRleC50c3g/YzEzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL0NhcmQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBGYXZvcml0ZUNvbnRleHQsIGlDYXJkIH0gZnJvbSBcIkAvY29udGV4dFwiO1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQoeyBpZCwgbmFtZSwgaW1hZ2UsIHNwZWNpZSwgaXNGYXZvcml0ZSB9OiBpQ2FyZCkge1xuICBjb25zdCB7IHNldEZhdm9yaXRlcywgZmF2b3JpdGVzLCBhZGRUb0Zhdm9yaXRlcywgcmVtb3ZlRmF2b3JpdGVzIH0gPVxuICAgIHVzZUNvbnRleHQoRmF2b3JpdGVDb250ZXh0KTtcblxuICBjb25zdCBbY2FyZElzRmF2b3JpdGUsIHNldENhcmRJc0Zhdm9yaXRlXSA9IHVzZVN0YXRlKGlzRmF2b3JpdGUpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENhcmRJc0Zhdm9yaXRlKGZhdm9yaXRlcy5zb21lKChmYXYpID0+IGZhdi5pZCA9PT0gaWQpKTtcbiAgfSwgW2Zhdm9yaXRlc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGxpIGtleT17aWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAge2ltYWdlICYmIChcbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICBhbHQ9e25hbWUgPyBuYW1lIDogXCJcIn1cbiAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgIGhlaWdodD17MTgwfVxuICAgICAgICAgIHF1YWxpdHk9ezc1fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxoMj57bmFtZX08L2gyPlxuICAgICAgPHA+e3NwZWNpZX08L3A+XG4gICAgICB7Y2FyZElzRmF2b3JpdGUgPyAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRuQ2FyZH0gb25DbGljaz17KCkgPT4gcmVtb3ZlRmF2b3JpdGVzKGlkKX0+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIFJlbW92ZXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApIDogKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnRuQ2FyZH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgYWRkVG9GYXZvcml0ZXMoeyBpZCwgbmFtZSwgaW1hZ2UsIHNwZWNpZSwgaXNGYXZvcml0ZTogdHJ1ZSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIEZhdm9yaXRvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2xpPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImludGVyIiwiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGYXZvcml0ZUNvbnRleHQiLCJDYXJkIiwiaWQiLCJuYW1lIiwiaW1hZ2UiLCJzcGVjaWUiLCJpc0Zhdm9yaXRlIiwic2V0RmF2b3JpdGVzIiwiZmF2b3JpdGVzIiwiYWRkVG9GYXZvcml0ZXMiLCJyZW1vdmVGYXZvcml0ZXMiLCJjYXJkSXNGYXZvcml0ZSIsInNldENhcmRJc0Zhdm9yaXRlIiwic29tZSIsImZhdiIsImxpIiwiY2xhc3NOYW1lIiwiY2FyZCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicXVhbGl0eSIsImgyIiwicCIsImJ1dHRvbiIsImJ0bkNhcmQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Card/index.tsx\n"));

/***/ })

});