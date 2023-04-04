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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FavoriteContext\": () => (/* binding */ FavoriteContext),\n/* harmony export */   \"FavoriteProvider\": () => (/* binding */ FavoriteProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst FavoriteContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    favorites: [],\n    setFavorites: ()=>{},\n    getPersonas: async ()=>({\n            props: {\n                personas: []\n            }\n        }),\n    getImg: async (id)=>\"\",\n    addToFavorites: (card)=>{}\n});\nconst FavoriteProvider = ({ children  })=>{\n    const [favorites, setFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    async function getPersonas() {\n        const response = await fetch(\"https://rickandmortyapi.com/api/character\");\n        console.log(response);\n        const { results: personas  } = await response.json();\n        return {\n            props: {\n                personas\n            }\n        };\n    }\n    async function getImg(id) {\n        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);\n        const data = await response.json();\n        return data.image;\n    }\n    const addToFavorites = (card)=>{\n        console.log(\"click\");\n        setFavorites((prevFavorites)=>[\n                ...favorites,\n                card\n            ]);\n        console.log(favorites);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FavoriteContext.Provider, {\n        value: {\n            favorites,\n            setFavorites,\n            getPersonas,\n            getImg,\n            addToFavorites\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/liniker/clientes_dev/RickMorty/src/context.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0RDtBQWtCckQsTUFBTUUsZ0NBQWtCRixvREFBYUEsQ0FBc0I7SUFDaEVHLFdBQVcsRUFBRTtJQUNiQyxjQUFjLElBQU0sQ0FBQztJQUNyQkMsYUFBYSxVQUFhO1lBQUVDLE9BQU87Z0JBQUVDLFVBQVUsRUFBRTtZQUFDO1FBQUU7SUFDcERDLFFBQVEsT0FBT0MsS0FBZTtJQUM5QkMsZ0JBQWdCLENBQUNDLE9BQWdCLENBQUM7QUFDcEMsR0FBRztBQUVJLE1BQU1DLG1CQUE2QixDQUFDLEVBQUVDLFNBQVEsRUFBTyxHQUFLO0lBQy9ELE1BQU0sQ0FBQ1YsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBVSxFQUFFO0lBRXRELGVBQWVJLGNBQWM7UUFDM0IsTUFBTVMsV0FBVyxNQUFNQyxNQUFNO1FBQzdCQyxRQUFRQyxHQUFHLENBQUNIO1FBQ1osTUFBTSxFQUFFSSxTQUFTWCxTQUFRLEVBQUUsR0FBRyxNQUFNTyxTQUFTSyxJQUFJO1FBRWpELE9BQU87WUFDTGIsT0FBTztnQkFDTEM7WUFDRjtRQUNGO0lBQ0Y7SUFDQSxlQUFlQyxPQUFPQyxFQUFVLEVBQUU7UUFDaEMsTUFBTUssV0FBVyxNQUFNQyxNQUNyQixDQUFDLDBDQUEwQyxFQUFFTixHQUFHLENBQUM7UUFFbkQsTUFBTVcsT0FBTyxNQUFNTixTQUFTSyxJQUFJO1FBRWhDLE9BQU9DLEtBQUtDLEtBQUs7SUFDbkI7SUFFQSxNQUFNWCxpQkFBaUIsQ0FBQ0MsT0FBZ0I7UUFDdENLLFFBQVFDLEdBQUcsQ0FBQztRQUVaYixhQUFhLENBQUNrQixnQkFBa0I7bUJBQUluQjtnQkFBV1E7YUFBSztRQUNwREssUUFBUUMsR0FBRyxDQUFDZDtJQUNkO0lBQ0EscUJBQ0UsOERBQUNELGdCQUFnQnFCLFFBQVE7UUFDdkJDLE9BQU87WUFDTHJCO1lBQ0FDO1lBQ0FDO1lBQ0FHO1lBQ0FFO1FBQ0Y7a0JBRUNHOzs7Ozs7QUFHUCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmljay8uL3NyYy9jb250ZXh0LnRzeD80YTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpUGVyc29uYSB9IGZyb20gXCIuL2NvbXBvbmVudHMvQ2FyZC9pcGVyc29uYVwiO1xuXG5pbnRlcmZhY2UgRmF2b3JpdGVDb250ZXh0VHlwZSB7XG4gIGZhdm9yaXRlczogaUNhcmRbXTtcbiAgc2V0RmF2b3JpdGVzOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxpQ2FyZFtdPj47XG4gIGdldFBlcnNvbmFzOiAoKSA9PiBQcm9taXNlPHsgcHJvcHM6IHsgcGVyc29uYXM6IGlQZXJzb25hW10gfSB9PjtcbiAgZ2V0SW1nOiAoaWQ6IG51bWJlcikgPT4gUHJvbWlzZTxzdHJpbmc+O1xuICBhZGRUb0Zhdm9yaXRlczogKGNhcmQ6IGlDYXJkKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGlDYXJkIHtcbiAgaWQ/OiBudW1iZXI7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGltYWdlPzogc3RyaW5nO1xuICBzcGVjaWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBGYXZvcml0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PEZhdm9yaXRlQ29udGV4dFR5cGU+KHtcbiAgZmF2b3JpdGVzOiBbXSxcbiAgc2V0RmF2b3JpdGVzOiAoKSA9PiB7fSxcbiAgZ2V0UGVyc29uYXM6IGFzeW5jICgpID0+ICh7IHByb3BzOiB7IHBlcnNvbmFzOiBbXSB9IH0pLFxuICBnZXRJbWc6IGFzeW5jIChpZDogbnVtYmVyKSA9PiBcIlwiLFxuICBhZGRUb0Zhdm9yaXRlczogKGNhcmQ6IGlDYXJkKSA9PiB7fSxcbn0pO1xuXG5leHBvcnQgY29uc3QgRmF2b3JpdGVQcm92aWRlcjogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9OiBhbnkpID0+IHtcbiAgY29uc3QgW2Zhdm9yaXRlcywgc2V0RmF2b3JpdGVzXSA9IHVzZVN0YXRlPGlDYXJkW10+KFtdKTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRQZXJzb25hcygpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXJcIik7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIGNvbnN0IHsgcmVzdWx0czogcGVyc29uYXMgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwZXJzb25hcyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBnZXRJbWcoaWQ6IG51bWJlcikge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvJHtpZH1gXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIGRhdGEuaW1hZ2U7XG4gIH1cblxuICBjb25zdCBhZGRUb0Zhdm9yaXRlcyA9IChjYXJkOiBpQ2FyZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIik7XG5cbiAgICBzZXRGYXZvcml0ZXMoKHByZXZGYXZvcml0ZXMpID0+IFsuLi5mYXZvcml0ZXMsIGNhcmRdKTtcbiAgICBjb25zb2xlLmxvZyhmYXZvcml0ZXMpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxGYXZvcml0ZUNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGZhdm9yaXRlcyxcbiAgICAgICAgc2V0RmF2b3JpdGVzLFxuICAgICAgICBnZXRQZXJzb25hcyxcbiAgICAgICAgZ2V0SW1nLFxuICAgICAgICBhZGRUb0Zhdm9yaXRlcyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRmF2b3JpdGVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJGYXZvcml0ZUNvbnRleHQiLCJmYXZvcml0ZXMiLCJzZXRGYXZvcml0ZXMiLCJnZXRQZXJzb25hcyIsInByb3BzIiwicGVyc29uYXMiLCJnZXRJbWciLCJpZCIsImFkZFRvRmF2b3JpdGVzIiwiY2FyZCIsIkZhdm9yaXRlUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJjb25zb2xlIiwibG9nIiwicmVzdWx0cyIsImpzb24iLCJkYXRhIiwiaW1hZ2UiLCJwcmV2RmF2b3JpdGVzIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context.tsx\n");

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