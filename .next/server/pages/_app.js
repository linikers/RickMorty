/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context.tsx":
/*!*************************!*\
  !*** ./src/context.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FavoriteContext\": () => (/* binding */ FavoriteContext),\n/* harmony export */   \"FavoriteProvider\": () => (/* binding */ FavoriteProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst FavoriteContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    favorites: [],\n    setFavorites: ()=>{},\n    getPersonas: async ()=>({\n            props: {\n                personas: []\n            }\n        }),\n    getImg: async (id)=>\"\",\n    addToFavorites: (card)=>{}\n});\nconst FavoriteProvider = ({ children  })=>{\n    const [favorites, setFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    async function getPersonas() {\n        const response = await fetch(\"https://rickandmortyapi.com/api/character\");\n        console.log(response);\n        const { results: personas  } = await response.json();\n        return {\n            props: {\n                personas\n            }\n        };\n    }\n    async function getImg(id) {\n        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);\n        const data = await response.json();\n        return data.image;\n    }\n    const addToFavorites = (card)=>{\n        console.log(\"click\");\n        setFavorites((prevFavorites)=>[\n                ...favorites,\n                card\n            ]);\n        console.log(favorites);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FavoriteContext.Provider, {\n        value: {\n            favorites,\n            setFavorites,\n            getPersonas,\n            getImg,\n            addToFavorites\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/liniker/clientes_dev/RickMorty/src/context.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1RTtBQXFCaEUsTUFBTUUsZ0NBQWtCRixvREFBYUEsQ0FBc0I7SUFDaEVHLFdBQVcsRUFBRTtJQUNiQyxjQUFjLElBQU0sQ0FBQztJQUNyQkMsYUFBYSxVQUFhO1lBQUVDLE9BQU87Z0JBQUVDLFVBQVUsRUFBRTtZQUFDO1FBQUU7SUFDcERDLFFBQVEsT0FBT0MsS0FBZTtJQUM5QkMsZ0JBQWdCLENBQUNDLE9BQWdCLENBQUM7QUFDcEMsR0FBRztBQUVJLE1BQU1DLG1CQUE2QyxDQUFDLEVBQUVDLFNBQVEsRUFBRSxHQUFLO0lBQzFFLE1BQU0sQ0FBQ1YsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBVSxFQUFFO0lBRXRELGVBQWVJLGNBQWM7UUFDM0IsTUFBTVMsV0FBVyxNQUFNQyxNQUFNO1FBQzdCQyxRQUFRQyxHQUFHLENBQUNIO1FBQ1osTUFBTSxFQUFFSSxTQUFTWCxTQUFRLEVBQUUsR0FBRyxNQUFNTyxTQUFTSyxJQUFJO1FBRWpELE9BQU87WUFDTGIsT0FBTztnQkFDTEM7WUFDRjtRQUNGO0lBQ0Y7SUFDQSxlQUFlQyxPQUFPQyxFQUFVLEVBQUU7UUFDaEMsTUFBTUssV0FBVyxNQUFNQyxNQUNyQixDQUFDLDBDQUEwQyxFQUFFTixHQUFHLENBQUM7UUFFbkQsTUFBTVcsT0FBTyxNQUFNTixTQUFTSyxJQUFJO1FBRWhDLE9BQU9DLEtBQUtDLEtBQUs7SUFDbkI7SUFFQSxNQUFNWCxpQkFBaUIsQ0FBQ0MsT0FBZ0I7UUFDdENLLFFBQVFDLEdBQUcsQ0FBQztRQUVaYixhQUFhLENBQUNrQixnQkFBa0I7bUJBQUluQjtnQkFBV1E7YUFBSztRQUNwREssUUFBUUMsR0FBRyxDQUFDZDtJQUNkO0lBQ0EscUJBQ0UsOERBQUNELGdCQUFnQnFCLFFBQVE7UUFDdkJDLE9BQU87WUFDTHJCO1lBQ0FDO1lBQ0FDO1lBQ0FHO1lBQ0FFO1FBQ0Y7a0JBRUNHOzs7Ozs7QUFHUCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmljay8uL3NyYy9jb250ZXh0LnRzeD80YTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlQZXJzb25hIH0gZnJvbSBcIi4vY29tcG9uZW50cy9DYXJkL2lwZXJzb25hXCI7XG5cbmludGVyZmFjZSBGYXZvcml0ZUNvbnRleHRUeXBlIHtcbiAgZmF2b3JpdGVzOiBpQ2FyZFtdO1xuICBzZXRGYXZvcml0ZXM6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGlDYXJkW10+PjtcbiAgZ2V0UGVyc29uYXM6ICgpID0+IFByb21pc2U8eyBwcm9wczogeyBwZXJzb25hczogaVBlcnNvbmFbXSB9IH0+O1xuICBnZXRJbWc6IChpZDogbnVtYmVyKSA9PiBQcm9taXNlPHN0cmluZz47XG4gIGFkZFRvRmF2b3JpdGVzOiAoY2FyZDogaUNhcmQpID0+IHZvaWQ7XG59XG5pbnRlcmZhY2UgSUZhdm9yaXRlUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGlDYXJkIHtcbiAgaWQ/OiBudW1iZXI7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGltYWdlPzogc3RyaW5nO1xuICBzcGVjaWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBGYXZvcml0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PEZhdm9yaXRlQ29udGV4dFR5cGU+KHtcbiAgZmF2b3JpdGVzOiBbXSxcbiAgc2V0RmF2b3JpdGVzOiAoKSA9PiB7fSxcbiAgZ2V0UGVyc29uYXM6IGFzeW5jICgpID0+ICh7IHByb3BzOiB7IHBlcnNvbmFzOiBbXSB9IH0pLFxuICBnZXRJbWc6IGFzeW5jIChpZDogbnVtYmVyKSA9PiBcIlwiLFxuICBhZGRUb0Zhdm9yaXRlczogKGNhcmQ6IGlDYXJkKSA9PiB7fSxcbn0pO1xuXG5leHBvcnQgY29uc3QgRmF2b3JpdGVQcm92aWRlcjogUmVhY3QuRkM8SUZhdm9yaXRlUHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbZmF2b3JpdGVzLCBzZXRGYXZvcml0ZXNdID0gdXNlU3RhdGU8aUNhcmRbXT4oW10pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFBlcnNvbmFzKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3RlclwiKTtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgY29uc3QgeyByZXN1bHRzOiBwZXJzb25hcyB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHBlcnNvbmFzLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGdldEltZyhpZDogbnVtYmVyKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8ke2lkfWBcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4gZGF0YS5pbWFnZTtcbiAgfVxuXG4gIGNvbnN0IGFkZFRvRmF2b3JpdGVzID0gKGNhcmQ6IGlDYXJkKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjbGlja1wiKTtcblxuICAgIHNldEZhdm9yaXRlcygocHJldkZhdm9yaXRlcykgPT4gWy4uLmZhdm9yaXRlcywgY2FyZF0pO1xuICAgIGNvbnNvbGUubG9nKGZhdm9yaXRlcyk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPEZhdm9yaXRlQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgZmF2b3JpdGVzLFxuICAgICAgICBzZXRGYXZvcml0ZXMsXG4gICAgICAgIGdldFBlcnNvbmFzLFxuICAgICAgICBnZXRJbWcsXG4gICAgICAgIGFkZFRvRmF2b3JpdGVzLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9GYXZvcml0ZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkZhdm9yaXRlQ29udGV4dCIsImZhdm9yaXRlcyIsInNldEZhdm9yaXRlcyIsImdldFBlcnNvbmFzIiwicHJvcHMiLCJwZXJzb25hcyIsImdldEltZyIsImlkIiwiYWRkVG9GYXZvcml0ZXMiLCJjYXJkIiwiRmF2b3JpdGVQcm92aWRlciIsImNoaWxkcmVuIiwicmVzcG9uc2UiLCJmZXRjaCIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRzIiwianNvbiIsImRhdGEiLCJpbWFnZSIsInByZXZGYXZvcml0ZXMiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context */ \"./src/context.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_1__.FavoriteProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/liniker/clientes_dev/RickMorty/src/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE2QztBQUNmO0FBR2YsU0FBU0MsSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQzlELHFCQUNFLDhEQUFDSCxzREFBZ0JBO2tCQUNmLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaWNrLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmF2b3JpdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHRcIjtcbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEZhdm9yaXRlUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9GYXZvcml0ZVByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkZhdm9yaXRlUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();