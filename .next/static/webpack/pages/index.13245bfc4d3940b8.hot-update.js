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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Card.module.css */ \"./src/styles/Card.module.css\");\n/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context */ \"./src/context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Card(param) {\n    let { id , name , image , specie  } = param;\n    _s();\n    const { setFavorites , favorites , addToFavorites  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.FavoriteContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(favorites);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: image,\n                alt: name,\n                width: 200,\n                height: 180,\n                quality: 75\n            }, void 0, false, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: specie\n            }, void 0, false, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FavoriteBtn, {\n                id,\n                name,\n                image,\n                specie,\n                favorites,\n                addToFavorites\n            }, void 0, false, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, id, true, {\n        fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Card, \"h5t5DjnRU/W/uq0S/7/XtyL3Mfw=\");\n_c = Card;\nfunction FavoriteBtn(param) {\n    let { id , name , image , specie , favorites , addToFavorites  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnCard),\n        onClick: ()=>addToFavorites(id, name, image, specie),\n        children: \"Favoritos\"\n    }, void 0, false, {\n        fileName: \"/home/liniker/clientes_dev/RickMorty/src/components/Card/index.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_c1 = FavoriteBtn;\nvar _c, _c1;\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c1, \"FavoriteBtn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFPTUE7QUFOeUI7QUFDZTtBQUNBO0FBRUs7QUFJcEMsU0FBU00sS0FBSyxLQUFrQyxFQUFFO1FBQXBDLEVBQUVDLEdBQUUsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBUyxHQUFsQzs7SUFDM0IsTUFBTSxFQUFFQyxhQUFZLEVBQUVDLFVBQVMsRUFBRUMsZUFBYyxFQUFFLEdBQy9DVixpREFBVUEsQ0FBQ0UscURBQWVBO0lBRTVCRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RVLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDZDtJQUVBLHFCQUNFLDhEQUFDSTtRQUFZQyxXQUFXZixxRUFBVzs7MEJBQ2pDLDhEQUFDRCxtREFBS0E7Z0JBQUNrQixLQUFLVjtnQkFBT1csS0FBS1o7Z0JBQU1hLE9BQU87Z0JBQUtDLFFBQVE7Z0JBQUtDLFNBQVM7Ozs7OzswQkFDaEUsOERBQUNDOzBCQUFJaEI7Ozs7OzswQkFDTCw4REFBQ2lCOzBCQUFHZjs7Ozs7OzBCQUNKLDhEQUFDZ0I7Z0JBQ09uQjtnQkFBSUM7Z0JBQU1DO2dCQUFPQztnQkFBUUU7Z0JBQVdDOzs7Ozs7O09BTHJDTjs7Ozs7QUFTYixDQUFDO0dBbEJ1QkQ7S0FBQUE7QUFvQnhCLFNBQVNvQixZQUFZLEtBZXBCLEVBQUU7UUFma0IsRUFDbkJuQixHQUFFLEVBQ0ZDLEtBQUksRUFDSkMsTUFBSyxFQUNMQyxPQUFNLEVBQ05FLFVBQVMsRUFDVEMsZUFBYyxFQVNmLEdBZm9CO0lBZ0JuQixxQkFDRSw4REFBQ2M7UUFDQ1YsV0FBV2Ysd0VBQWM7UUFDekIyQixTQUFTLElBQU1oQixlQUFlTixJQUFJQyxNQUFNQyxPQUFPQztrQkFDaEQ7Ozs7OztBQUlMO01BeEJTZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC9pbmRleC50c3g/YzEzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL0NhcmQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEZhdm9yaXRlQ29udGV4dCwgaUNhcmQgfSBmcm9tIFwiQC9jb250ZXh0XCI7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCh7IGlkLCBuYW1lLCBpbWFnZSwgc3BlY2llIH06IGlDYXJkKSB7XG4gIGNvbnN0IHsgc2V0RmF2b3JpdGVzLCBmYXZvcml0ZXMsIGFkZFRvRmF2b3JpdGVzIH0gPVxuICAgIHVzZUNvbnRleHQoRmF2b3JpdGVDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGZhdm9yaXRlcyk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGxpIGtleT17aWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD17bmFtZX0gd2lkdGg9ezIwMH0gaGVpZ2h0PXsxODB9IHF1YWxpdHk9ezc1fSAvPlxuICAgICAgPGgyPntuYW1lfTwvaDI+XG4gICAgICA8cD57c3BlY2llfTwvcD5cbiAgICAgIDxGYXZvcml0ZUJ0blxuICAgICAgICB7Li4ueyBpZCwgbmFtZSwgaW1hZ2UsIHNwZWNpZSwgZmF2b3JpdGVzLCBhZGRUb0Zhdm9yaXRlcyB9fVxuICAgICAgLz5cbiAgICA8L2xpPlxuICApO1xufVxuXG5mdW5jdGlvbiBGYXZvcml0ZUJ0bih7XG4gIGlkLFxuICBuYW1lLFxuICBpbWFnZSxcbiAgc3BlY2llLFxuICBmYXZvcml0ZXMsXG4gIGFkZFRvRmF2b3JpdGVzLFxufTogaUNhcmQgJiB7XG4gIGZhdm9yaXRlczogaUNhcmRbXTtcbiAgYWRkVG9GYXZvcml0ZXM6IChcbiAgICBpZDogbnVtYmVyLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBpbWFnZTogc3RyaW5nLFxuICAgIHNwZWNpZTogc3RyaW5nXG4gICkgPT4gdm9pZDtcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5idG5DYXJkfVxuICAgICAgb25DbGljaz17KCkgPT4gYWRkVG9GYXZvcml0ZXMoaWQsIG5hbWUsIGltYWdlLCBzcGVjaWUpfVxuICAgID5cbiAgICAgIEZhdm9yaXRvc1xuICAgIDwvYnV0dG9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImludGVyIiwiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiRmF2b3JpdGVDb250ZXh0IiwiQ2FyZCIsImlkIiwibmFtZSIsImltYWdlIiwic3BlY2llIiwic2V0RmF2b3JpdGVzIiwiZmF2b3JpdGVzIiwiYWRkVG9GYXZvcml0ZXMiLCJjb25zb2xlIiwibG9nIiwibGkiLCJjbGFzc05hbWUiLCJjYXJkIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJxdWFsaXR5IiwiaDIiLCJwIiwiRmF2b3JpdGVCdG4iLCJidXR0b24iLCJidG5DYXJkIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Card/index.tsx\n"));

/***/ })

});