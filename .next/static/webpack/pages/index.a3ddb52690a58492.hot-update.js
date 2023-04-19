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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   \"getImg\": function() { return /* binding */ getImg; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Header_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/index */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context */ \"./src/context.tsx\");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-paginate */ \"./node_modules/react-paginate/dist/react-paginate.js\");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home(param) {\n    let { personas  } = param;\n    _s();\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [imageUrls, setImageUrls] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [personagem, setPersonagem] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(personas);\n    const { favorites , page , setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.FavoriteContext);\n    const [totalPages, setTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [totalItems, setTotalItems] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response = await fetch(\"https://rickandmortyapi.com/api/character?page=\".concat(page));\n            const data = await response.json();\n            setTotalPages(data.info.pages);\n            setTotalItems(data.info.count);\n            const personas = data.results;\n            const urls = await Promise.all(personas.map(async (persona)=>{\n                if (persona.image) {\n                    const response = await fetch(persona.image);\n                    return response.url;\n                }\n                return \"\";\n            }));\n            setImageUrls(urls);\n            setPersonagem(personas);\n        };\n        fetchData();\n    }, [\n        page\n    ]);\n    const itemsPerPage = 20;\n    console.log(personagem);\n    const pageCount = Math.ceil(personas.length / itemsPerPage);\n    const offset = currentPage * itemsPerPage;\n    const currentItems = personas.slice(offset, offset + itemsPerPage);\n    function handlePage(selectedItem) {\n        setPage(selectedItem.selected + 1);\n    // setOffSet(selectedItem.selected * itemsPerPage);\n    }\n    const handlePageClick = (param)=>{\n        let { selected  } = param;\n        setCurrentPage(selected);\n    };\n    var _persona_id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Rick and Morty\"\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Rick and Morty\"\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().listPersona),\n                        children: currentItems.map((persona, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                id: (_persona_id = persona.id) !== null && _persona_id !== void 0 ? _persona_id : 0,\n                                image: imageUrls[offset + index],\n                                name: persona.name,\n                                specie: persona.species,\n                                isFavorite: false\n                            }, index, false, {\n                                fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_paginate__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        previousLabel: \"< Anterior\",\n                        nextLabel: \"Pr\\xf3ximo\",\n                        breakLabel: \"...\",\n                        breakClassName: \"break\",\n                        pageCount: totalPages,\n                        marginPagesDisplayed: 2,\n                        pageRangeDisplayed: 5,\n                        onPageChange: handlePage,\n                        containerClassName: \"paginate\",\n                        activeClassName: \"active\",\n                        initialPage: currentPage\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"pnu2MKPA15lyfNWhNTNnSj2QWHM=\");\n_c = Home;\nasync function getImg(id) {\n    const response = await fetch(\"https://rickandmortyapi.com/api/character/\".concat(id));\n    const data = await response.json();\n    return data.image;\n}\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPO2dDQUN2QkMsWUFBWSxLQUFLOytCQUxaSjs7Ozs7Ozs7OztrQ0FTWCw4REFBQ3pELHVEQUFhQTt3QkFDWjhELGVBQWU7d0JBQ2ZDLFdBQVc7d0JBQ1hDLFlBQVk7d0JBQ1pDLGdCQUFnQjt3QkFDaEI5QixXQUFXdkI7d0JBQ1hzRCxzQkFBc0I7d0JBQ3RCQyxvQkFBb0I7d0JBQ3BCQyxjQUFjMUI7d0JBQ2QyQixvQkFBb0I7d0JBQ3BCQyxpQkFBaUI7d0JBQ2pCQyxhQUFhcEU7Ozs7Ozs7Ozs7Ozs7O0FBS3ZCLENBQUM7R0ExRnVCRjtLQUFBQTtBQTRGakIsZUFBZXVFLE9BQU9kLEVBQVUsRUFBRTtJQUN2QyxNQUFNekMsV0FBVyxNQUFNQyxNQUNyQiw2Q0FBZ0QsT0FBSHdDO0lBRS9DLE1BQU12QyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7SUFFaEMsT0FBT0QsS0FBS1csS0FBSztBQUNuQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4XCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlQZXJzb25hIH0gZnJvbSBcIkAvY29tcG9uZW50cy9DYXJkL2lwZXJzb25hXCI7XG5pbXBvcnQgeyBGYXZvcml0ZUNvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0XCI7XG5pbXBvcnQgUmVhY3RQYWdpbmF0ZSBmcm9tIFwicmVhY3QtcGFnaW5hdGVcIjtcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5pbnRlcmZhY2UgSUhvbWVQcm9wcyB7XG4gIHBlcnNvbmFzOiBpUGVyc29uYVtdO1xufVxuaW50ZXJmYWNlIElQYWdlU2VsZWN0ZWQge1xuICBzZWxlY3RlZDogbnVtYmVyO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHBlcnNvbmFzIH06IElIb21lUHJvcHMpIHtcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2ltYWdlVXJscywgc2V0SW1hZ2VVcmxzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtwZXJzb25hZ2VtLCBzZXRQZXJzb25hZ2VtXSA9IHVzZVN0YXRlPGlQZXJzb25hW10+KHBlcnNvbmFzKTtcblxuICBjb25zdCB7IGZhdm9yaXRlcywgcGFnZSwgc2V0UGFnZSB9ID0gdXNlQ29udGV4dChGYXZvcml0ZUNvbnRleHQpO1xuXG4gIGNvbnN0IFt0b3RhbFBhZ2VzLCBzZXRUb3RhbFBhZ2VzXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFt0b3RhbEl0ZW1zLCBzZXRUb3RhbEl0ZW1zXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXI/cGFnZT0ke3BhZ2V9YFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRUb3RhbFBhZ2VzKGRhdGEuaW5mby5wYWdlcyk7XG4gICAgICBzZXRUb3RhbEl0ZW1zKGRhdGEuaW5mby5jb3VudCk7XG4gICAgICBjb25zdCBwZXJzb25hcyA9IGRhdGEucmVzdWx0cztcblxuICAgICAgY29uc3QgdXJscyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICBwZXJzb25hcy5tYXAoYXN5bmMgKHBlcnNvbmE6IHsgaW1hZ2U6IFJlcXVlc3RJbmZvIHwgVVJMIH0pID0+IHtcbiAgICAgICAgICBpZiAocGVyc29uYS5pbWFnZSkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwZXJzb25hLmltYWdlKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS51cmw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgc2V0SW1hZ2VVcmxzKHVybHMpO1xuICAgICAgc2V0UGVyc29uYWdlbShwZXJzb25hcyk7XG4gICAgfTtcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW3BhZ2VdKTtcblxuICBjb25zdCBpdGVtc1BlclBhZ2UgPSAyMDtcblxuICBjb25zb2xlLmxvZyhwZXJzb25hZ2VtKTtcbiAgY29uc3QgcGFnZUNvdW50ID0gTWF0aC5jZWlsKHBlcnNvbmFzLmxlbmd0aCAvIGl0ZW1zUGVyUGFnZSk7XG4gIGNvbnN0IG9mZnNldCA9IGN1cnJlbnRQYWdlICogaXRlbXNQZXJQYWdlO1xuICBjb25zdCBjdXJyZW50SXRlbXMgPSBwZXJzb25hcy5zbGljZShvZmZzZXQsIG9mZnNldCArIGl0ZW1zUGVyUGFnZSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlUGFnZShzZWxlY3RlZEl0ZW06IHsgc2VsZWN0ZWQ6IG51bWJlciB9KSB7XG4gICAgc2V0UGFnZShzZWxlY3RlZEl0ZW0uc2VsZWN0ZWQgKyAxKTtcbiAgICAvLyBzZXRPZmZTZXQoc2VsZWN0ZWRJdGVtLnNlbGVjdGVkICogaXRlbXNQZXJQYWdlKTtcbiAgfVxuICBjb25zdCBoYW5kbGVQYWdlQ2xpY2sgPSAoeyBzZWxlY3RlZCB9OiB7IHNlbGVjdGVkOiBudW1iZXIgfSkgPT4ge1xuICAgIHNldEN1cnJlbnRQYWdlKHNlbGVjdGVkKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5SaWNrIGFuZCBNb3J0eTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJSaWNrIGFuZCBNb3J0eVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPEhlYWRlciAvPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RQZXJzb25hfT5cbiAgICAgICAgICB7Y3VycmVudEl0ZW1zLm1hcCgocGVyc29uYSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGlkPXtwZXJzb25hLmlkID8/IDB9XG4gICAgICAgICAgICAgIGltYWdlPXtpbWFnZVVybHNbb2Zmc2V0ICsgaW5kZXhdfVxuICAgICAgICAgICAgICBuYW1lPXtwZXJzb25hLm5hbWV9XG4gICAgICAgICAgICAgIHNwZWNpZT17cGVyc29uYS5zcGVjaWVzfVxuICAgICAgICAgICAgICBpc0Zhdm9yaXRlPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxSZWFjdFBhZ2luYXRlXG4gICAgICAgICAgcHJldmlvdXNMYWJlbD17XCI8IEFudGVyaW9yXCJ9XG4gICAgICAgICAgbmV4dExhYmVsPXtcIlByw7N4aW1vXCJ9XG4gICAgICAgICAgYnJlYWtMYWJlbD17XCIuLi5cIn1cbiAgICAgICAgICBicmVha0NsYXNzTmFtZT17XCJicmVha1wifVxuICAgICAgICAgIHBhZ2VDb3VudD17dG90YWxQYWdlc31cbiAgICAgICAgICBtYXJnaW5QYWdlc0Rpc3BsYXllZD17Mn1cbiAgICAgICAgICBwYWdlUmFuZ2VEaXNwbGF5ZWQ9ezV9XG4gICAgICAgICAgb25QYWdlQ2hhbmdlPXtoYW5kbGVQYWdlfVxuICAgICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZT17XCJwYWdpbmF0ZVwifVxuICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17XCJhY3RpdmVcIn1cbiAgICAgICAgICBpbml0aWFsUGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbWcoaWQ6IG51bWJlcikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8ke2lkfWBcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gZGF0YS5pbWFnZTtcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkhlYWQiLCJzdHlsZXMiLCJIZWFkZXIiLCJDYXJkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiRmF2b3JpdGVDb250ZXh0IiwiUmVhY3RQYWdpbmF0ZSIsIkhvbWUiLCJwZXJzb25hcyIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJpbWFnZVVybHMiLCJzZXRJbWFnZVVybHMiLCJwZXJzb25hZ2VtIiwic2V0UGVyc29uYWdlbSIsImZhdm9yaXRlcyIsInBhZ2UiLCJzZXRQYWdlIiwidG90YWxQYWdlcyIsInNldFRvdGFsUGFnZXMiLCJ0b3RhbEl0ZW1zIiwic2V0VG90YWxJdGVtcyIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImluZm8iLCJwYWdlcyIsImNvdW50IiwicmVzdWx0cyIsInVybHMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwicGVyc29uYSIsImltYWdlIiwidXJsIiwiaXRlbXNQZXJQYWdlIiwiY29uc29sZSIsImxvZyIsInBhZ2VDb3VudCIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwib2Zmc2V0IiwiY3VycmVudEl0ZW1zIiwic2xpY2UiLCJoYW5kbGVQYWdlIiwic2VsZWN0ZWRJdGVtIiwic2VsZWN0ZWQiLCJoYW5kbGVQYWdlQ2xpY2siLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsInVsIiwibGlzdFBlcnNvbmEiLCJpbmRleCIsImlkIiwic3BlY2llIiwic3BlY2llcyIsImlzRmF2b3JpdGUiLCJwcmV2aW91c0xhYmVsIiwibmV4dExhYmVsIiwiYnJlYWtMYWJlbCIsImJyZWFrQ2xhc3NOYW1lIiwibWFyZ2luUGFnZXNEaXNwbGF5ZWQiLCJwYWdlUmFuZ2VEaXNwbGF5ZWQiLCJvblBhZ2VDaGFuZ2UiLCJjb250YWluZXJDbGFzc05hbWUiLCJhY3RpdmVDbGFzc05hbWUiLCJpbml0aWFsUGFnZSIsImdldEltZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});