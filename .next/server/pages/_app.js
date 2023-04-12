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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FavoriteContext\": () => (/* binding */ FavoriteContext),\n/* harmony export */   \"FavoriteProvider\": () => (/* binding */ FavoriteProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst FavoriteContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    favorites: [],\n    setFavorites: ()=>{},\n    getPersonas: async ()=>({\n            props: {\n                personas: []\n            }\n        }),\n    getImg: async (id)=>\"\",\n    addToFavorites: (card)=>{},\n    removeFavorites: (id)=>{},\n    page: 0,\n    setPage: ()=>{}\n});\nconst FavoriteProvider = ({ children  })=>{\n    const [favorites, setFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    async function getPersonas() {\n        const response = await fetch(\"https://rickandmortyapi.com/api/character\");\n        console.log(response);\n        const { results: personas  } = await response.json();\n        return {\n            props: {\n                personas\n            }\n        };\n    }\n    async function getImg(id) {\n        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);\n        const data = await response.json();\n        return data.image;\n    }\n    const addToFavorites = (card)=>{\n        setFavorites((prevFavorites)=>[\n                ...favorites,\n                card\n            ]);\n    };\n    const removeFavorites = (id)=>{\n        setFavorites((prevFavorites)=>prevFavorites.filter((card)=>card.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FavoriteContext.Provider, {\n        value: {\n            favorites,\n            setFavorites,\n            getPersonas,\n            getImg,\n            addToFavorites,\n            removeFavorites,\n            page,\n            setPage\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/liniker/clientes_dev/RickMorty/src/context.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1RTtBQTBCaEUsTUFBTUUsZ0NBQWtCRixvREFBYUEsQ0FBc0I7SUFDaEVHLFdBQVcsRUFBRTtJQUNiQyxjQUFjLElBQU0sQ0FBQztJQUNyQkMsYUFBYSxVQUFhO1lBQUVDLE9BQU87Z0JBQUVDLFVBQVUsRUFBRTtZQUFDO1FBQUU7SUFDcERDLFFBQVEsT0FBT0MsS0FBZTtJQUM5QkMsZ0JBQWdCLENBQUNDLE9BQWdCLENBQUM7SUFDbENDLGlCQUFpQixDQUFDSCxLQUFlLENBQUM7SUFFbENJLE1BQU07SUFDTkMsU0FBUyxJQUFNLENBQUM7QUFDbEIsR0FBRztBQUVJLE1BQU1DLG1CQUE2QyxDQUFDLEVBQUVDLFNBQVEsRUFBRSxHQUFLO0lBQzFFLE1BQU0sQ0FBQ2IsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBVSxFQUFFO0lBRXRELE1BQU0sQ0FBQ1ksTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBUztJQUV6QyxlQUFlSSxjQUFjO1FBQzNCLE1BQU1ZLFdBQVcsTUFBTUMsTUFBTTtRQUM3QkMsUUFBUUMsR0FBRyxDQUFDSDtRQUNaLE1BQU0sRUFBRUksU0FBU2QsU0FBUSxFQUFFLEdBQUcsTUFBTVUsU0FBU0ssSUFBSTtRQUVqRCxPQUFPO1lBQ0xoQixPQUFPO2dCQUNMQztZQUNGO1FBQ0Y7SUFDRjtJQUNBLGVBQWVDLE9BQU9DLEVBQVUsRUFBRTtRQUNoQyxNQUFNUSxXQUFXLE1BQU1DLE1BQ3JCLENBQUMsMENBQTBDLEVBQUVULEdBQUcsQ0FBQztRQUVuRCxNQUFNYyxPQUFPLE1BQU1OLFNBQVNLLElBQUk7UUFFaEMsT0FBT0MsS0FBS0MsS0FBSztJQUNuQjtJQUVBLE1BQU1kLGlCQUFpQixDQUFDQyxPQUFnQjtRQUN0Q1AsYUFBYSxDQUFDcUIsZ0JBQWtCO21CQUFJdEI7Z0JBQVdRO2FBQUs7SUFDdEQ7SUFFQSxNQUFNQyxrQkFBa0IsQ0FBQ0gsS0FBZTtRQUN0Q0wsYUFBYSxDQUFDcUIsZ0JBQ1pBLGNBQWNDLE1BQU0sQ0FBQyxDQUFDZixPQUFTQSxLQUFLRixFQUFFLEtBQUtBO0lBRS9DO0lBRUEscUJBQ0UsOERBQUNQLGdCQUFnQnlCLFFBQVE7UUFDdkJDLE9BQU87WUFDTHpCO1lBQ0FDO1lBQ0FDO1lBQ0FHO1lBQ0FFO1lBQ0FFO1lBRUFDO1lBQ0FDO1FBQ0Y7a0JBRUNFOzs7Ozs7QUFHUCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmljay8uL3NyYy9jb250ZXh0LnRzeD80YTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlQZXJzb25hIH0gZnJvbSBcIi4vY29tcG9uZW50cy9DYXJkL2lwZXJzb25hXCI7XG5cbmludGVyZmFjZSBGYXZvcml0ZUNvbnRleHRUeXBlIHtcbiAgZmF2b3JpdGVzOiBpQ2FyZFtdO1xuICBzZXRGYXZvcml0ZXM6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGlDYXJkW10+PjtcbiAgZ2V0UGVyc29uYXM6ICgpID0+IFByb21pc2U8eyBwcm9wczogeyBwZXJzb25hczogaVBlcnNvbmFbXSB9IH0+O1xuICBnZXRJbWc6IChpZDogbnVtYmVyKSA9PiBQcm9taXNlPHN0cmluZz47XG4gIGFkZFRvRmF2b3JpdGVzOiAoY2FyZDogaUNhcmQpID0+IHZvaWQ7XG4gIHJlbW92ZUZhdm9yaXRlczogKGlkOiBudW1iZXIpID0+IHZvaWQ7XG5cbiAgcGFnZTogbnVtYmVyO1xuICBzZXRQYWdlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxudW1iZXI+Pjtcbn1cbmludGVyZmFjZSBJRmF2b3JpdGVQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgaUNhcmQge1xuICBpZDogbnVtYmVyO1xuICBuYW1lPzogc3RyaW5nO1xuICBpbWFnZT86IHN0cmluZztcbiAgc3BlY2llPzogc3RyaW5nO1xuICBpc0Zhdm9yaXRlOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgRmF2b3JpdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxGYXZvcml0ZUNvbnRleHRUeXBlPih7XG4gIGZhdm9yaXRlczogW10sXG4gIHNldEZhdm9yaXRlczogKCkgPT4ge30sXG4gIGdldFBlcnNvbmFzOiBhc3luYyAoKSA9PiAoeyBwcm9wczogeyBwZXJzb25hczogW10gfSB9KSxcbiAgZ2V0SW1nOiBhc3luYyAoaWQ6IG51bWJlcikgPT4gXCJcIixcbiAgYWRkVG9GYXZvcml0ZXM6IChjYXJkOiBpQ2FyZCkgPT4ge30sXG4gIHJlbW92ZUZhdm9yaXRlczogKGlkOiBudW1iZXIpID0+IHt9LFxuXG4gIHBhZ2U6IDAsXG4gIHNldFBhZ2U6ICgpID0+IHt9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBGYXZvcml0ZVByb3ZpZGVyOiBSZWFjdC5GQzxJRmF2b3JpdGVQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtmYXZvcml0ZXMsIHNldEZhdm9yaXRlc10gPSB1c2VTdGF0ZTxpQ2FyZFtdPihbXSk7XG5cbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRQZXJzb25hcygpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXJcIik7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIGNvbnN0IHsgcmVzdWx0czogcGVyc29uYXMgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwZXJzb25hcyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBnZXRJbWcoaWQ6IG51bWJlcikge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvJHtpZH1gXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIGRhdGEuaW1hZ2U7XG4gIH1cblxuICBjb25zdCBhZGRUb0Zhdm9yaXRlcyA9IChjYXJkOiBpQ2FyZCkgPT4ge1xuICAgIHNldEZhdm9yaXRlcygocHJldkZhdm9yaXRlcykgPT4gWy4uLmZhdm9yaXRlcywgY2FyZF0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUZhdm9yaXRlcyA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgc2V0RmF2b3JpdGVzKChwcmV2RmF2b3JpdGVzKSA9PlxuICAgICAgcHJldkZhdm9yaXRlcy5maWx0ZXIoKGNhcmQpID0+IGNhcmQuaWQgIT09IGlkKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RmF2b3JpdGVDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBmYXZvcml0ZXMsXG4gICAgICAgIHNldEZhdm9yaXRlcyxcbiAgICAgICAgZ2V0UGVyc29uYXMsXG4gICAgICAgIGdldEltZyxcbiAgICAgICAgYWRkVG9GYXZvcml0ZXMsXG4gICAgICAgIHJlbW92ZUZhdm9yaXRlcyxcblxuICAgICAgICBwYWdlLFxuICAgICAgICBzZXRQYWdlLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9GYXZvcml0ZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkZhdm9yaXRlQ29udGV4dCIsImZhdm9yaXRlcyIsInNldEZhdm9yaXRlcyIsImdldFBlcnNvbmFzIiwicHJvcHMiLCJwZXJzb25hcyIsImdldEltZyIsImlkIiwiYWRkVG9GYXZvcml0ZXMiLCJjYXJkIiwicmVtb3ZlRmF2b3JpdGVzIiwicGFnZSIsInNldFBhZ2UiLCJGYXZvcml0ZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyZXNwb25zZSIsImZldGNoIiwiY29uc29sZSIsImxvZyIsInJlc3VsdHMiLCJqc29uIiwiZGF0YSIsImltYWdlIiwicHJldkZhdm9yaXRlcyIsImZpbHRlciIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context.tsx\n");

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