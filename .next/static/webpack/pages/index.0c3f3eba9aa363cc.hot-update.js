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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   \"getImg\": function() { return /* binding */ getImg; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Header_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/index */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context */ \"./src/context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { personas  } = param;\n    _s();\n    const [imageUrls, setImageUrls] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const { favorites  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.FavoriteContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchImgs = async ()=>{\n            const urls = await Promise.all(personas.map(async (persona)=>{\n                if (persona.image) {\n                    const response = await fetch(persona.image);\n                    return response.url;\n                }\n                return \"\";\n            }));\n            setImageUrls(urls);\n        };\n        fetchImgs();\n    }, [\n        personas\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Rick and Morty\"\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Rick and Morty\"\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().listPersona),\n                        children: personas && personas.map((persona, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                image: imageUrls[index],\n                                name: persona.name,\n                                specie: persona.species\n                            }, persona.id, false, {\n                                fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 17\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"xBdryQexCl54m95er6U9wMFYWmM=\");\n_c = Home;\nasync function getImg(id) {\n    const response = await fetch(\"https://rickandmortyapi.com/api/character/\".concat(id));\n    const data = await response.json();\n    return data.image;\n}\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTTUE7QUFUdUI7QUFFaUI7QUFDRTtBQUNYO0FBQ21CO0FBRVo7O0FBUTdCLFNBQVNTLEtBQUssS0FBd0IsRUFBRTtRQUExQixFQUFFQyxTQUFRLEVBQWMsR0FBeEI7O0lBQzNCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBVyxFQUFFO0lBRXZELE1BQU0sRUFBRVEsVUFBUyxFQUFFLEdBQUdOLGlEQUFVQSxDQUFDQyxxREFBZUE7SUFFaERGLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNUSxZQUFZLFVBQVk7WUFDNUIsTUFBTUMsT0FBTyxNQUFNQyxRQUFRQyxHQUFHLENBQzVCUCxTQUFTUSxHQUFHLENBQUMsT0FBT0MsVUFBWTtnQkFDOUIsSUFBSUEsUUFBUUMsS0FBSyxFQUFFO29CQUNqQixNQUFNQyxXQUFXLE1BQU1DLE1BQU1ILFFBQVFDLEtBQUs7b0JBQzFDLE9BQU9DLFNBQVNFLEdBQUc7Z0JBQ3JCLENBQUM7Z0JBQ0QsT0FBTztZQUNUO1lBR0ZYLGFBQWFHO1FBQ2Y7UUFDQUQ7SUFDRixHQUFHO1FBQUNKO0tBQVM7SUFDYixxQkFDRTs7MEJBQ0UsOERBQUNULGtEQUFJQTs7a0NBQ0gsOERBQUN1QjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDM0IsZ0VBQU1BOzs7OzswQkFDUCw4REFBQzRCO2dCQUFLQyxXQUFXOUIscUVBQVc7MEJBQzFCLDRFQUFDK0I7OEJBQ0MsNEVBQUNDO3dCQUFHRixXQUFXOUIsNEVBQWtCO2tDQUM5QlEsWUFDQ0EsU0FBU1EsR0FBRyxDQUFDLENBQUNDLFNBQVNpQixzQkFDckIsOERBQUNoQyx3REFBSUE7Z0NBRUhnQixPQUFPVCxTQUFTLENBQUN5QixNQUFNO2dDQUN2QlYsTUFBTVAsUUFBUU8sSUFBSTtnQ0FDbEJXLFFBQVFsQixRQUFRbUIsT0FBTzsrQkFIbEJuQixRQUFRb0IsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdqQyxDQUFDO0dBaER1QjlCO0tBQUFBO0FBNERqQixlQUFlK0IsT0FBT0QsRUFBVSxFQUFFO0lBQ3ZDLE1BQU1sQixXQUFXLE1BQU1DLE1BQ3JCLDZDQUFnRCxPQUFIaUI7SUFFL0MsTUFBTUUsT0FBTyxNQUFNcEIsU0FBU3FCLElBQUk7SUFFaEMsT0FBT0QsS0FBS3JCLEtBQUs7QUFDbkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlci9pbmRleFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpUGVyc29uYSB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ2FyZC9pcGVyc29uYVwiO1xuaW1wb3J0IHsgRmF2b3JpdGVDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dFwiO1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5cbmludGVyZmFjZSBJSG9tZVByb3BzIHtcbiAgcGVyc29uYXM6IGlQZXJzb25hW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwZXJzb25hcyB9OiBJSG9tZVByb3BzKSB7XG4gIGNvbnN0IFtpbWFnZVVybHMsIHNldEltYWdlVXJsc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuXG4gIGNvbnN0IHsgZmF2b3JpdGVzIH0gPSB1c2VDb250ZXh0KEZhdm9yaXRlQ29udGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaEltZ3MgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB1cmxzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIHBlcnNvbmFzLm1hcChhc3luYyAocGVyc29uYSkgPT4ge1xuICAgICAgICAgIGlmIChwZXJzb25hLmltYWdlKSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHBlcnNvbmEuaW1hZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnVybDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICBzZXRJbWFnZVVybHModXJscyk7XG4gICAgfTtcbiAgICBmZXRjaEltZ3MoKTtcbiAgfSwgW3BlcnNvbmFzXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UmljayBhbmQgTW9ydHk8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiUmljayBhbmQgTW9ydHlcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0UGVyc29uYX0+XG4gICAgICAgICAgICB7cGVyc29uYXMgJiZcbiAgICAgICAgICAgICAgcGVyc29uYXMubWFwKChwZXJzb25hLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICBrZXk9e3BlcnNvbmEuaWR9XG4gICAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2VVcmxzW2luZGV4XX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9e3BlcnNvbmEubmFtZX1cbiAgICAgICAgICAgICAgICAgIHNwZWNpZT17cGVyc29uYS5zcGVjaWVzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXJcIik7XG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgY29uc3QgeyByZXN1bHRzOiBwZXJzb25hcyB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBlcnNvbmFzLFxuICAgIH0sXG4gIH07XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW1nKGlkOiBudW1iZXIpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvJHtpZH1gXG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGRhdGEuaW1hZ2U7XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwic3R5bGVzIiwiSGVhZGVyIiwiQ2FyZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIkZhdm9yaXRlQ29udGV4dCIsIkhvbWUiLCJwZXJzb25hcyIsImltYWdlVXJscyIsInNldEltYWdlVXJscyIsImZhdm9yaXRlcyIsImZldGNoSW1ncyIsInVybHMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwicGVyc29uYSIsImltYWdlIiwicmVzcG9uc2UiLCJmZXRjaCIsInVybCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwidWwiLCJsaXN0UGVyc29uYSIsImluZGV4Iiwic3BlY2llIiwic3BlY2llcyIsImlkIiwiZ2V0SW1nIiwiZGF0YSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});