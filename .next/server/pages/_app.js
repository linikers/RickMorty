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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FavoriteContext\": () => (/* binding */ FavoriteContext),\n/* harmony export */   \"FavoriteProvider\": () => (/* binding */ FavoriteProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst FavoriteContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    favorites: [],\n    setFavorites: ()=>{},\n    getPersonas: async ()=>({\n            props: {\n                personas: []\n            }\n        }),\n    getImg: async (id)=>\"\",\n    addToFavorites: (card)=>{}\n});\nconst FavoriteProvider = ({ children  })=>{\n    const [favorites, setFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    async function getPersonas() {\n        const response = await fetch(\"https://rickandmortyapi.com/api/character\");\n        console.log(response);\n        const { results: personas  } = await response.json();\n        return {\n            props: {\n                personas\n            }\n        };\n    }\n    async function getImg(id) {\n        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);\n        const data = await response.json();\n        return data.image;\n    }\n    const addToFavorites = (card)=>{\n        console.log(\"click\");\n        setFavorites((prevFavorites)=>[\n                ...favorites,\n                card\n            ]);\n        console.log(favorites);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FavoriteContext.Provider, {\n        value: {\n            favorites,\n            setFavorites,\n            getPersonas,\n            getImg,\n            addToFavorites\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/liniker/clientes_dev/RickMorty/src/context.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1RTtBQXFCaEUsTUFBTUUsZ0NBQWtCRixvREFBYUEsQ0FBc0I7SUFDaEVHLFdBQVcsRUFBRTtJQUNiQyxjQUFjLElBQU0sQ0FBQztJQUNyQkMsYUFBYSxVQUFhO1lBQUVDLE9BQU87Z0JBQUVDLFVBQVUsRUFBRTtZQUFDO1FBQUU7SUFDcERDLFFBQVEsT0FBT0MsS0FBZTtJQUM5QkMsZ0JBQWdCLENBQUNDLE9BQWdCLENBQUM7QUFDcEMsR0FBRztBQUVJLE1BQU1DLG1CQUE2QyxDQUFDLEVBQUVDLFNBQVEsRUFBRSxHQUFLO0lBQzFFLE1BQU0sQ0FBQ1YsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBVSxFQUFFO0lBRXRELGVBQWVJLGNBQWM7UUFDM0IsTUFBTVMsV0FBVyxNQUFNQyxNQUFNO1FBQzdCQyxRQUFRQyxHQUFHLENBQUNIO1FBQ1osTUFBTSxFQUFFSSxTQUFTWCxTQUFRLEVBQUUsR0FBRyxNQUFNTyxTQUFTSyxJQUFJO1FBRWpELE9BQU87WUFDTGIsT0FBTztnQkFDTEM7WUFDRjtRQUNGO0lBQ0Y7SUFDQSxlQUFlQyxPQUFPQyxFQUFVLEVBQUU7UUFDaEMsTUFBTUssV0FBVyxNQUFNQyxNQUNyQixDQUFDLDBDQUEwQyxFQUFFTixHQUFHLENBQUM7UUFFbkQsTUFBTVcsT0FBTyxNQUFNTixTQUFTSyxJQUFJO1FBRWhDLE9BQU9DLEtBQUtDLEtBQUs7SUFDbkI7SUFFQSxNQUFNWCxpQkFBaUIsQ0FBQ0MsT0FBZ0I7UUFDdENLLFFBQVFDLEdBQUcsQ0FBQztRQUVaYixhQUFhLENBQUNrQixnQkFBa0I7bUJBQUluQjtnQkFBV1E7YUFBSztRQUNwREssUUFBUUMsR0FBRyxDQUFDZDtJQUNkO0lBQ0EscUJBQ0UsOERBQUNELGdCQUFnQnFCLFFBQVE7UUFDdkJDLE9BQU87WUFDTHJCO1lBQ0FDO1lBQ0FDO1lBQ0FHO1lBQ0FFO1FBQ0Y7a0JBRUNHOzs7Ozs7QUFHUCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmljay8uL3NyYy9jb250ZXh0LnRzeD80YTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlQZXJzb25hIH0gZnJvbSBcIi4vY29tcG9uZW50cy9DYXJkL2lwZXJzb25hXCI7XG5cbmludGVyZmFjZSBGYXZvcml0ZUNvbnRleHRUeXBlIHtcbiAgZmF2b3JpdGVzOiBpQ2FyZFtdO1xuICBzZXRGYXZvcml0ZXM6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGlDYXJkW10+PjtcbiAgZ2V0UGVyc29uYXM6ICgpID0+IFByb21pc2U8eyBwcm9wczogeyBwZXJzb25hczogaVBlcnNvbmFbXSB9IH0+O1xuICBnZXRJbWc6IChpZDogbnVtYmVyKSA9PiBQcm9taXNlPHN0cmluZz47XG4gIGFkZFRvRmF2b3JpdGVzOiAoY2FyZDogaUNhcmQpID0+IHZvaWQ7XG59XG5pbnRlcmZhY2UgSUZhdm9yaXRlUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGlDYXJkIHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZT86IHN0cmluZztcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIHNwZWNpZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEZhdm9yaXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8RmF2b3JpdGVDb250ZXh0VHlwZT4oe1xuICBmYXZvcml0ZXM6IFtdLFxuICBzZXRGYXZvcml0ZXM6ICgpID0+IHt9LFxuICBnZXRQZXJzb25hczogYXN5bmMgKCkgPT4gKHsgcHJvcHM6IHsgcGVyc29uYXM6IFtdIH0gfSksXG4gIGdldEltZzogYXN5bmMgKGlkOiBudW1iZXIpID0+IFwiXCIsXG4gIGFkZFRvRmF2b3JpdGVzOiAoY2FyZDogaUNhcmQpID0+IHt9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBGYXZvcml0ZVByb3ZpZGVyOiBSZWFjdC5GQzxJRmF2b3JpdGVQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtmYXZvcml0ZXMsIHNldEZhdm9yaXRlc10gPSB1c2VTdGF0ZTxpQ2FyZFtdPihbXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0UGVyc29uYXMoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyXCIpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICBjb25zdCB7IHJlc3VsdHM6IHBlcnNvbmFzIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgcGVyc29uYXMsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0SW1nKGlkOiBudW1iZXIpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLyR7aWR9YFxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBkYXRhLmltYWdlO1xuICB9XG5cbiAgY29uc3QgYWRkVG9GYXZvcml0ZXMgPSAoY2FyZDogaUNhcmQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xuXG4gICAgc2V0RmF2b3JpdGVzKChwcmV2RmF2b3JpdGVzKSA9PiBbLi4uZmF2b3JpdGVzLCBjYXJkXSk7XG4gICAgY29uc29sZS5sb2coZmF2b3JpdGVzKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8RmF2b3JpdGVDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBmYXZvcml0ZXMsXG4gICAgICAgIHNldEZhdm9yaXRlcyxcbiAgICAgICAgZ2V0UGVyc29uYXMsXG4gICAgICAgIGdldEltZyxcbiAgICAgICAgYWRkVG9GYXZvcml0ZXMsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0Zhdm9yaXRlQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiRmF2b3JpdGVDb250ZXh0IiwiZmF2b3JpdGVzIiwic2V0RmF2b3JpdGVzIiwiZ2V0UGVyc29uYXMiLCJwcm9wcyIsInBlcnNvbmFzIiwiZ2V0SW1nIiwiaWQiLCJhZGRUb0Zhdm9yaXRlcyIsImNhcmQiLCJGYXZvcml0ZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyZXNwb25zZSIsImZldGNoIiwiY29uc29sZSIsImxvZyIsInJlc3VsdHMiLCJqc29uIiwiZGF0YSIsImltYWdlIiwicHJldkZhdm9yaXRlcyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context.tsx\n");

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