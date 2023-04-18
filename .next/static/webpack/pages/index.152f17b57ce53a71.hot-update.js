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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   \"getImg\": function() { return /* binding */ getImg; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Header_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/index */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context */ \"./src/context.tsx\");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-paginate */ \"./node_modules/react-paginate/dist/react-paginate.js\");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home(param) {\n    let { personas  } = param;\n    _s();\n    const [imageUrls, setImageUrls] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const { favorites , page , setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.FavoriteContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (personas) {\n            const fetchImgs = async ()=>{\n                const urls = await Promise.all(personas.map(async (persona)=>{\n                    if (persona.image) {\n                        const response = await fetch(persona.image);\n                        return response.url;\n                    }\n                    return \"\";\n                }));\n                setImageUrls(urls);\n            };\n            fetchImgs();\n        }\n    }, [\n        personas\n    ]);\n    const itemsPerPage = 20;\n    const [totalPages, setTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [totalItems, setTotalItems] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response = await fetch(\"https://rickandmortyapi.com/api/character?page=\".concat(page));\n            const data = await response.json();\n            setTotalPages(data.info.pages);\n            setTotalItems(data.info.count);\n            const personas = data.results;\n            console.log(personas);\n            return {\n                props: {\n                    personas\n                }\n            };\n        };\n        fetchData();\n    }, [\n        page\n    ]);\n    console.log(page);\n    const pageCount = Math.ceil(totalItems / itemsPerPage);\n    const offset = (page - 1) * itemsPerPage;\n    const currentItems = personas ? personas.slice(offset, offset + itemsPerPage) : [];\n    function handlePage(selectedItem) {\n        setPage(selectedItem.selected + 1);\n    }\n    var _persona_id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Rick and Morty\"\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Rick and Morty\"\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().listPersona),\n                        children: currentItems.map((persona, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                id: (_persona_id = persona.id) !== null && _persona_id !== void 0 ? _persona_id : 0,\n                                image: imageUrls[offset + index],\n                                name: persona.name,\n                                specie: persona.species,\n                                isFavorite: false\n                            }, index, false, {\n                                fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_paginate__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        previousLabel: \"< Anterior\",\n                        nextLabel: \"Pr\\xf3ximo\",\n                        breakLabel: \"...\",\n                        breakClassName: \"break\",\n                        pageCount: totalPages,\n                        marginPagesDisplayed: 2,\n                        pageRangeDisplayed: 5,\n                        onPageChange: handlePage,\n                        containerClassName: \"paginate\",\n                        activeClassName: \"active\",\n                        initialPage: page\n                    }, void 0, false, {\n                        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/index.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"5jqXm53HFGvpDZoybwS7LJgDM7U=\");\n_c = Home;\n// export async function getStaticProps() {\n//   const response = await fetch(`https://rickandmortyapi.com/api/character`);\n//   const { results: personas } = await response.json();\n//   return {\n//     props: {\n//       personas,\n//     },\n//   };\n// }\nasync function getImg(id) {\n    const response = await fetch(\"https://rickandmortyapi.com/api/character/\".concat(id));\n    const data = await response.json();\n    return data.image;\n}\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxPQUFPO2dDQUN2QkMsWUFBWSxLQUFLOytCQUxaSjs7Ozs7Ozs7OztrQ0FTWCw4REFBQ3JELHVEQUFhQTt3QkFDWjBELGVBQWU7d0JBQ2ZDLFdBQVc7d0JBQ1hDLFlBQVk7d0JBQ1pDLGdCQUFnQjt3QkFDaEI1QixXQUFXZDt3QkFDWDJDLHNCQUFzQjt3QkFDdEJDLG9CQUFvQjt3QkFDcEJDLGNBQWN6Qjt3QkFDZDBCLG9CQUFvQjt3QkFDcEJDLGlCQUFpQjt3QkFDakJDLGFBQWE3RDs7Ozs7Ozs7Ozs7Ozs7QUFLdkIsQ0FBQztHQWpHdUJMO0tBQUFBO0FBa0d4QiwyQ0FBMkM7QUFDM0MsK0VBQStFO0FBRS9FLHlEQUF5RDtBQUV6RCxhQUFhO0FBQ2IsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1QsT0FBTztBQUNQLElBQUk7QUFDRyxlQUFlbUUsT0FBT2QsRUFBVSxFQUFFO0lBQ3ZDLE1BQU12QyxXQUFXLE1BQU1DLE1BQ3JCLDZDQUFnRCxPQUFIc0M7SUFFL0MsTUFBTTlCLE9BQU8sTUFBTVQsU0FBU1UsSUFBSTtJQUVoQyxPQUFPRCxLQUFLVixLQUFLO0FBQ25CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IEludGVyIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXhcIjtcbmltcG9ydCBDYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvQ2FyZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaVBlcnNvbmEgfSBmcm9tIFwiQC9jb21wb25lbnRzL0NhcmQvaXBlcnNvbmFcIjtcbmltcG9ydCB7IEZhdm9yaXRlQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHRcIjtcbmltcG9ydCBSZWFjdFBhZ2luYXRlIGZyb20gXCJyZWFjdC1wYWdpbmF0ZVwiO1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5cbmludGVyZmFjZSBJSG9tZVByb3BzIHtcbiAgcGVyc29uYXM6IGlQZXJzb25hW107XG59XG5pbnRlcmZhY2UgSVBhZ2VTZWxlY3RlZCB7XG4gIHNlbGVjdGVkOiBudW1iZXI7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcGVyc29uYXMgfTogSUhvbWVQcm9wcykge1xuICBjb25zdCBbaW1hZ2VVcmxzLCBzZXRJbWFnZVVybHNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICBjb25zdCB7IGZhdm9yaXRlcywgcGFnZSwgc2V0UGFnZSB9ID0gdXNlQ29udGV4dChGYXZvcml0ZUNvbnRleHQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBlcnNvbmFzKSB7XG4gICAgICBjb25zdCBmZXRjaEltZ3MgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVybHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICBwZXJzb25hcy5tYXAoYXN5bmMgKHBlcnNvbmEpID0+IHtcbiAgICAgICAgICAgIGlmIChwZXJzb25hLmltYWdlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocGVyc29uYS5pbWFnZSk7XG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS51cmw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIHNldEltYWdlVXJscyh1cmxzKTtcbiAgICAgIH07XG4gICAgICBmZXRjaEltZ3MoKTtcbiAgICB9XG4gIH0sIFtwZXJzb25hc10pO1xuXG4gIGNvbnN0IGl0ZW1zUGVyUGFnZSA9IDIwO1xuXG4gIGNvbnN0IFt0b3RhbFBhZ2VzLCBzZXRUb3RhbFBhZ2VzXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFt0b3RhbEl0ZW1zLCBzZXRUb3RhbEl0ZW1zXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXI/cGFnZT0ke3BhZ2V9YFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRUb3RhbFBhZ2VzKGRhdGEuaW5mby5wYWdlcyk7XG4gICAgICBzZXRUb3RhbEl0ZW1zKGRhdGEuaW5mby5jb3VudCk7XG4gICAgICBjb25zdCBwZXJzb25hcyA9IGRhdGEucmVzdWx0cztcbiAgICAgIGNvbnNvbGUubG9nKHBlcnNvbmFzKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7IHBlcnNvbmFzIH0sXG4gICAgICB9O1xuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW3BhZ2VdKTtcbiAgY29uc29sZS5sb2cocGFnZSk7XG4gIGNvbnN0IHBhZ2VDb3VudCA9IE1hdGguY2VpbCh0b3RhbEl0ZW1zIC8gaXRlbXNQZXJQYWdlKTtcbiAgY29uc3Qgb2Zmc2V0ID0gKHBhZ2UgLSAxKSAqIGl0ZW1zUGVyUGFnZTtcbiAgY29uc3QgY3VycmVudEl0ZW1zID0gcGVyc29uYXNcbiAgICA/IHBlcnNvbmFzLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgaXRlbXNQZXJQYWdlKVxuICAgIDogW107XG5cbiAgZnVuY3Rpb24gaGFuZGxlUGFnZShzZWxlY3RlZEl0ZW06IHsgc2VsZWN0ZWQ6IG51bWJlciB9KSB7XG4gICAgc2V0UGFnZShzZWxlY3RlZEl0ZW0uc2VsZWN0ZWQgKyAxKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UmljayBhbmQgTW9ydHk8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiUmljayBhbmQgTW9ydHlcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0UGVyc29uYX0+XG4gICAgICAgICAge2N1cnJlbnRJdGVtcy5tYXAoKHBlcnNvbmEsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBpZD17cGVyc29uYS5pZCA/PyAwfVxuICAgICAgICAgICAgICBpbWFnZT17aW1hZ2VVcmxzW29mZnNldCArIGluZGV4XX1cbiAgICAgICAgICAgICAgbmFtZT17cGVyc29uYS5uYW1lfVxuICAgICAgICAgICAgICBzcGVjaWU9e3BlcnNvbmEuc3BlY2llc31cbiAgICAgICAgICAgICAgaXNGYXZvcml0ZT17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8UmVhY3RQYWdpbmF0ZVxuICAgICAgICAgIHByZXZpb3VzTGFiZWw9e1wiPCBBbnRlcmlvclwifVxuICAgICAgICAgIG5leHRMYWJlbD17XCJQcsOzeGltb1wifVxuICAgICAgICAgIGJyZWFrTGFiZWw9e1wiLi4uXCJ9XG4gICAgICAgICAgYnJlYWtDbGFzc05hbWU9e1wiYnJlYWtcIn1cbiAgICAgICAgICBwYWdlQ291bnQ9e3RvdGFsUGFnZXN9XG4gICAgICAgICAgbWFyZ2luUGFnZXNEaXNwbGF5ZWQ9ezJ9XG4gICAgICAgICAgcGFnZVJhbmdlRGlzcGxheWVkPXs1fVxuICAgICAgICAgIG9uUGFnZUNoYW5nZT17aGFuZGxlUGFnZX1cbiAgICAgICAgICBjb250YWluZXJDbGFzc05hbWU9e1wicGFnaW5hdGVcIn1cbiAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e1wiYWN0aXZlXCJ9XG4gICAgICAgICAgaW5pdGlhbFBhZ2U9e3BhZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4vLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyYCk7XG5cbi8vICAgY29uc3QgeyByZXN1bHRzOiBwZXJzb25hcyB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIHBlcnNvbmFzLFxuLy8gICAgIH0sXG4vLyAgIH07XG4vLyB9XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW1nKGlkOiBudW1iZXIpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvJHtpZH1gXG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGRhdGEuaW1hZ2U7XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwic3R5bGVzIiwiSGVhZGVyIiwiQ2FyZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIkZhdm9yaXRlQ29udGV4dCIsIlJlYWN0UGFnaW5hdGUiLCJIb21lIiwicGVyc29uYXMiLCJpbWFnZVVybHMiLCJzZXRJbWFnZVVybHMiLCJmYXZvcml0ZXMiLCJwYWdlIiwic2V0UGFnZSIsImZldGNoSW1ncyIsInVybHMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwicGVyc29uYSIsImltYWdlIiwicmVzcG9uc2UiLCJmZXRjaCIsInVybCIsIml0ZW1zUGVyUGFnZSIsInRvdGFsUGFnZXMiLCJzZXRUb3RhbFBhZ2VzIiwidG90YWxJdGVtcyIsInNldFRvdGFsSXRlbXMiLCJmZXRjaERhdGEiLCJkYXRhIiwianNvbiIsImluZm8iLCJwYWdlcyIsImNvdW50IiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsInBhZ2VDb3VudCIsIk1hdGgiLCJjZWlsIiwib2Zmc2V0IiwiY3VycmVudEl0ZW1zIiwic2xpY2UiLCJoYW5kbGVQYWdlIiwic2VsZWN0ZWRJdGVtIiwic2VsZWN0ZWQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsInVsIiwibGlzdFBlcnNvbmEiLCJpbmRleCIsImlkIiwic3BlY2llIiwic3BlY2llcyIsImlzRmF2b3JpdGUiLCJwcmV2aW91c0xhYmVsIiwibmV4dExhYmVsIiwiYnJlYWtMYWJlbCIsImJyZWFrQ2xhc3NOYW1lIiwibWFyZ2luUGFnZXNEaXNwbGF5ZWQiLCJwYWdlUmFuZ2VEaXNwbGF5ZWQiLCJvblBhZ2VDaGFuZ2UiLCJjb250YWluZXJDbGFzc05hbWUiLCJhY3RpdmVDbGFzc05hbWUiLCJpbml0aWFsUGFnZSIsImdldEltZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});