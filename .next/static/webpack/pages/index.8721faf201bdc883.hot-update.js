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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   \"getImg\": function() { return /* binding */ getImg; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Header_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/index */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context */ \"./src/context.tsx\");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-paginate */ \"./node_modules/react-paginate/dist/react-paginate.js\");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home(param) {\n    let { personas  } = param;\n    _s();\n    const [imageUrls, setImageUrls] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [personagem, setPersonagem] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(personas);\n    const { favorites , page , setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.FavoriteContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response = await fetch(\"https://rickandmortyapi.com/api/character?page=\".concat(page));\n            const data = await response.json();\n            setTotalPages(data.info.pages);\n            setTotalItems(data.info.count);\n            const personas = data.results;\n            const urls = await Promise.all(personas.map(async (persona)=>{\n                if (persona.image) {\n                    const response = await fetch(persona.image);\n                    return response.url;\n                }\n                return \"\";\n            }));\n            setImageUrls(urls);\n            setPersonagem(personas);\n        };\n        fetchData();\n    }, [\n        page\n    ]);\n    const itemsPerPage = 18;\n    const [totalPages, setTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [totalItems, setTotalItems] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    console.log(personagem);\n    const pageCount = Math.ceil(totalItems / itemsPerPage);\n    const offset = (page - 1) * itemsPerPage;\n    const currentItems = personagem ? personagem.slice(offset, offset + itemsPerPage) : [];\n    function handlePage(selectedItem) {\n        setPage(selectedItem.selected + 1);\n    // setOffSet(selectedItem.selected * itemsPerPage);\n    }\n    var _persona_id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Rick and Morty\"\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Rick and Morty\"\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().listPersona),\n                        children: currentItems.map((persona, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                id: (_persona_id = persona.id) !== null && _persona_id !== void 0 ? _persona_id : 0,\n                                image: imageUrls[offset + index],\n                                name: persona.name,\n                                specie: persona.species,\n                                isFavorite: false\n                            }, index, false, {\n                                fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_paginate__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        previousLabel: \"< Anterior\",\n                        nextLabel: \"Pr\\xf3ximo\",\n                        breakLabel: \"...\",\n                        breakClassName: \"break\",\n                        pageCount: totalPages,\n                        marginPagesDisplayed: 2,\n                        pageRangeDisplayed: 5,\n                        onPageChange: handlePage,\n                        containerClassName: \"paginate\",\n                        activeClassName: \"active\",\n                        initialPage: page - 1\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"4igo9qYpiTMM+LL7Sfe0/NlloWY=\");\n_c = Home;\nasync function getImg(id) {\n    const response = await fetch(\"https://rickandmortyapi.com/api/character/\".concat(id));\n    const data = await response.json();\n    return data.image;\n}\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1pDLGdCQUFnQjt3QkFDaEI1QixXQUFXSjt3QkFDWGlDLHNCQUFzQjt3QkFDdEJDLG9CQUFvQjt3QkFDcEJDLGNBQWN6Qjt3QkFDZDBCLG9CQUFvQjt3QkFDcEJDLGlCQUFpQjt3QkFDakJDLGFBQWEzRCxPQUFPOzs7Ozs7Ozs7Ozs7OztBQUs5QixDQUFDO0dBekZ1QlA7S0FBQUE7QUEyRmpCLGVBQWVtRSxPQUFPZCxFQUFVLEVBQUU7SUFDdkMsTUFBTTNDLFdBQVcsTUFBTUMsTUFDckIsNkNBQWdELE9BQUgwQztJQUUvQyxNQUFNekMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO0lBRWhDLE9BQU9ELEtBQUthLEtBQUs7QUFDbkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlci9pbmRleFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpUGVyc29uYSB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ2FyZC9pcGVyc29uYVwiO1xuaW1wb3J0IHsgRmF2b3JpdGVDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dFwiO1xuaW1wb3J0IFJlYWN0UGFnaW5hdGUgZnJvbSBcInJlYWN0LXBhZ2luYXRlXCI7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcblxuaW50ZXJmYWNlIElIb21lUHJvcHMge1xuICBwZXJzb25hczogaVBlcnNvbmFbXTtcbn1cbmludGVyZmFjZSBJUGFnZVNlbGVjdGVkIHtcbiAgc2VsZWN0ZWQ6IG51bWJlcjtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwZXJzb25hcyB9OiBJSG9tZVByb3BzKSB7XG4gIGNvbnN0IFtpbWFnZVVybHMsIHNldEltYWdlVXJsc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbcGVyc29uYWdlbSwgc2V0UGVyc29uYWdlbV0gPSB1c2VTdGF0ZTxpUGVyc29uYVtdPihwZXJzb25hcyk7XG5cbiAgY29uc3QgeyBmYXZvcml0ZXMsIHBhZ2UsIHNldFBhZ2UgfSA9IHVzZUNvbnRleHQoRmF2b3JpdGVDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlcj9wYWdlPSR7cGFnZX1gXG4gICAgICApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHNldFRvdGFsUGFnZXMoZGF0YS5pbmZvLnBhZ2VzKTtcbiAgICAgIHNldFRvdGFsSXRlbXMoZGF0YS5pbmZvLmNvdW50KTtcbiAgICAgIGNvbnN0IHBlcnNvbmFzID0gZGF0YS5yZXN1bHRzO1xuXG4gICAgICBjb25zdCB1cmxzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIHBlcnNvbmFzLm1hcChhc3luYyAocGVyc29uYTogeyBpbWFnZTogUmVxdWVzdEluZm8gfCBVUkwgfSkgPT4ge1xuICAgICAgICAgIGlmIChwZXJzb25hLmltYWdlKSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHBlcnNvbmEuaW1hZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnVybDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICBzZXRJbWFnZVVybHModXJscyk7XG4gICAgICBzZXRQZXJzb25hZ2VtKHBlcnNvbmFzKTtcbiAgICB9O1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbcGFnZV0pO1xuXG4gIGNvbnN0IGl0ZW1zUGVyUGFnZSA9IDE4O1xuXG4gIGNvbnN0IFt0b3RhbFBhZ2VzLCBzZXRUb3RhbFBhZ2VzXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFt0b3RhbEl0ZW1zLCBzZXRUb3RhbEl0ZW1zXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgY29uc29sZS5sb2cocGVyc29uYWdlbSk7XG4gIGNvbnN0IHBhZ2VDb3VudCA9IE1hdGguY2VpbCh0b3RhbEl0ZW1zIC8gaXRlbXNQZXJQYWdlKTtcbiAgY29uc3Qgb2Zmc2V0ID0gKHBhZ2UgLSAxKSAqIGl0ZW1zUGVyUGFnZTtcbiAgY29uc3QgY3VycmVudEl0ZW1zID0gcGVyc29uYWdlbVxuICAgID8gcGVyc29uYWdlbS5zbGljZShvZmZzZXQsIG9mZnNldCArIGl0ZW1zUGVyUGFnZSlcbiAgICA6IFtdO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVBhZ2Uoc2VsZWN0ZWRJdGVtOiB7IHNlbGVjdGVkOiBudW1iZXIgfSkge1xuICAgIHNldFBhZ2Uoc2VsZWN0ZWRJdGVtLnNlbGVjdGVkICsgMSk7XG4gICAgLy8gc2V0T2ZmU2V0KHNlbGVjdGVkSXRlbS5zZWxlY3RlZCAqIGl0ZW1zUGVyUGFnZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlJpY2sgYW5kIE1vcnR5PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlJpY2sgYW5kIE1vcnR5XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubGlzdFBlcnNvbmF9PlxuICAgICAgICAgIHtjdXJyZW50SXRlbXMubWFwKChwZXJzb25hLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgaWQ9e3BlcnNvbmEuaWQgPz8gMH1cbiAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlVXJsc1tvZmZzZXQgKyBpbmRleF19XG4gICAgICAgICAgICAgIG5hbWU9e3BlcnNvbmEubmFtZX1cbiAgICAgICAgICAgICAgc3BlY2llPXtwZXJzb25hLnNwZWNpZXN9XG4gICAgICAgICAgICAgIGlzRmF2b3JpdGU9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPFJlYWN0UGFnaW5hdGVcbiAgICAgICAgICBwcmV2aW91c0xhYmVsPXtcIjwgQW50ZXJpb3JcIn1cbiAgICAgICAgICBuZXh0TGFiZWw9e1wiUHLDs3hpbW9cIn1cbiAgICAgICAgICBicmVha0xhYmVsPXtcIi4uLlwifVxuICAgICAgICAgIGJyZWFrQ2xhc3NOYW1lPXtcImJyZWFrXCJ9XG4gICAgICAgICAgcGFnZUNvdW50PXt0b3RhbFBhZ2VzfVxuICAgICAgICAgIG1hcmdpblBhZ2VzRGlzcGxheWVkPXsyfVxuICAgICAgICAgIHBhZ2VSYW5nZURpc3BsYXllZD17NX1cbiAgICAgICAgICBvblBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2V9XG4gICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lPXtcInBhZ2luYXRlXCJ9XG4gICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPXtcImFjdGl2ZVwifVxuICAgICAgICAgIGluaXRpYWxQYWdlPXtwYWdlIC0gMX1cbiAgICAgICAgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEltZyhpZDogbnVtYmVyKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLyR7aWR9YFxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBkYXRhLmltYWdlO1xufVxuIl0sIm5hbWVzIjpbImludGVyIiwiSGVhZCIsInN0eWxlcyIsIkhlYWRlciIsIkNhcmQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJGYXZvcml0ZUNvbnRleHQiLCJSZWFjdFBhZ2luYXRlIiwiSG9tZSIsInBlcnNvbmFzIiwiaW1hZ2VVcmxzIiwic2V0SW1hZ2VVcmxzIiwicGVyc29uYWdlbSIsInNldFBlcnNvbmFnZW0iLCJmYXZvcml0ZXMiLCJwYWdlIiwic2V0UGFnZSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInNldFRvdGFsUGFnZXMiLCJpbmZvIiwicGFnZXMiLCJzZXRUb3RhbEl0ZW1zIiwiY291bnQiLCJyZXN1bHRzIiwidXJscyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJwZXJzb25hIiwiaW1hZ2UiLCJ1cmwiLCJpdGVtc1BlclBhZ2UiLCJ0b3RhbFBhZ2VzIiwidG90YWxJdGVtcyIsImNvbnNvbGUiLCJsb2ciLCJwYWdlQ291bnQiLCJNYXRoIiwiY2VpbCIsIm9mZnNldCIsImN1cnJlbnRJdGVtcyIsInNsaWNlIiwiaGFuZGxlUGFnZSIsInNlbGVjdGVkSXRlbSIsInNlbGVjdGVkIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJ1bCIsImxpc3RQZXJzb25hIiwiaW5kZXgiLCJpZCIsInNwZWNpZSIsInNwZWNpZXMiLCJpc0Zhdm9yaXRlIiwicHJldmlvdXNMYWJlbCIsIm5leHRMYWJlbCIsImJyZWFrTGFiZWwiLCJicmVha0NsYXNzTmFtZSIsIm1hcmdpblBhZ2VzRGlzcGxheWVkIiwicGFnZVJhbmdlRGlzcGxheWVkIiwib25QYWdlQ2hhbmdlIiwiY29udGFpbmVyQ2xhc3NOYW1lIiwiYWN0aXZlQ2xhc3NOYW1lIiwiaW5pdGlhbFBhZ2UiLCJnZXRJbWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});