"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/context.tsx":
/*!*************************!*\
  !*** ./src/context.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FavoriteContext\": function() { return /* binding */ FavoriteContext; },\n/* harmony export */   \"FavoriteProvider\": function() { return /* binding */ FavoriteProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst FavoriteContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    favorites: [],\n    setFavorites: ()=>{},\n    getPersonas: async ()=>({\n            props: {\n                personas: []\n            }\n        }),\n    getImg: async (id)=>\"\",\n    addToFavorites: (card)=>{}\n});\nconst FavoriteProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [favorites, setFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    async function getPersonas() {\n        const response = await fetch(\"https://rickandmortyapi.com/api/character\");\n        console.log(response);\n        const { results: personas  } = await response.json();\n        return {\n            props: {\n                personas\n            }\n        };\n    }\n    async function getImg(id) {\n        const response = await fetch(\"https://rickandmortyapi.com/api/character/\".concat(id));\n        const data = await response.json();\n        return data.image;\n    }\n    const addToFavorites = (id, name, image, specie)=>{\n        console.log(\"click\");\n        const favorite = {\n            id,\n            name,\n            image,\n            specie\n        };\n        setFavorites([\n            ...favorites,\n            favorite\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FavoriteContext.Provider, {\n        value: {\n            favorites,\n            setFavorites,\n            getPersonas,\n            getImg,\n            addToFavorites\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/liniker/clientes_dev/RickMorty/src/context.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FavoriteProvider, \"8/j46ayqkxuOXjyrDl2B5q17iyc=\");\n_c = FavoriteProvider;\nvar _c;\n$RefreshReg$(_c, \"FavoriteProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEQ7QUFrQnJELE1BQU1FLGdDQUFrQkYsb0RBQWFBLENBQXNCO0lBQ2hFRyxXQUFXLEVBQUU7SUFDYkMsY0FBYyxJQUFNLENBQUM7SUFDckJDLGFBQWEsVUFBYTtZQUFFQyxPQUFPO2dCQUFFQyxVQUFVLEVBQUU7WUFBQztRQUFFO0lBQ3BEQyxRQUFRLE9BQU9DLEtBQWU7SUFDOUJDLGdCQUFnQixDQUFDQyxPQUFnQixDQUFDO0FBQ3BDLEdBQUc7QUFFSSxNQUFNQyxtQkFBNkIsU0FBdUI7UUFBdEIsRUFBRUMsU0FBUSxFQUFPOztJQUMxRCxNQUFNLENBQUNWLFdBQVdDLGFBQWEsR0FBR0gsK0NBQVFBLENBQVUsRUFBRTtJQUV0RCxlQUFlSSxjQUFjO1FBQzNCLE1BQU1TLFdBQVcsTUFBTUMsTUFBTTtRQUM3QkMsUUFBUUMsR0FBRyxDQUFDSDtRQUNaLE1BQU0sRUFBRUksU0FBU1gsU0FBUSxFQUFFLEdBQUcsTUFBTU8sU0FBU0ssSUFBSTtRQUVqRCxPQUFPO1lBQ0xiLE9BQU87Z0JBQ0xDO1lBQ0Y7UUFDRjtJQUNGO0lBQ0EsZUFBZUMsT0FBT0MsRUFBVSxFQUFFO1FBQ2hDLE1BQU1LLFdBQVcsTUFBTUMsTUFDckIsNkNBQWdELE9BQUhOO1FBRS9DLE1BQU1XLE9BQU8sTUFBTU4sU0FBU0ssSUFBSTtRQUVoQyxPQUFPQyxLQUFLQyxLQUFLO0lBQ25CO0lBRUEsTUFBTVgsaUJBQWlCLENBQ3JCRCxJQUNBYSxNQUNBRCxPQUNBRSxTQUNHO1FBQ0hQLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE1BQU1PLFdBQWtCO1lBQUVmO1lBQUlhO1lBQU1EO1lBQU9FO1FBQU87UUFDbERuQixhQUFhO2VBQUlEO1lBQVdxQjtTQUFTO0lBQ3ZDO0lBQ0EscUJBQ0UsOERBQUN0QixnQkFBZ0J1QixRQUFRO1FBQ3ZCQyxPQUFPO1lBQ0x2QjtZQUNBQztZQUNBQztZQUNBRztZQUNBRTtRQUNGO2tCQUVDRzs7Ozs7O0FBR1AsRUFBRTtHQTlDV0Q7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQudHN4PzRhMDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlQZXJzb25hIH0gZnJvbSBcIi4vY29tcG9uZW50cy9DYXJkL2lwZXJzb25hXCI7XG5cbmludGVyZmFjZSBGYXZvcml0ZUNvbnRleHRUeXBlIHtcbiAgZmF2b3JpdGVzOiBpQ2FyZFtdO1xuICBzZXRGYXZvcml0ZXM6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGlDYXJkW10+PjtcbiAgZ2V0UGVyc29uYXM6ICgpID0+IFByb21pc2U8eyBwcm9wczogeyBwZXJzb25hczogaVBlcnNvbmFbXSB9IH0+O1xuICBnZXRJbWc6IChpZDogbnVtYmVyKSA9PiBQcm9taXNlPHN0cmluZz47XG4gIGFkZFRvRmF2b3JpdGVzOiAoY2FyZDogaUNhcmQpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgaUNhcmQge1xuICBpZD86IG51bWJlcjtcbiAgbmFtZT86IHN0cmluZztcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIHNwZWNpZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEZhdm9yaXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8RmF2b3JpdGVDb250ZXh0VHlwZT4oe1xuICBmYXZvcml0ZXM6IFtdLFxuICBzZXRGYXZvcml0ZXM6ICgpID0+IHt9LFxuICBnZXRQZXJzb25hczogYXN5bmMgKCkgPT4gKHsgcHJvcHM6IHsgcGVyc29uYXM6IFtdIH0gfSksXG4gIGdldEltZzogYXN5bmMgKGlkOiBudW1iZXIpID0+IFwiXCIsXG4gIGFkZFRvRmF2b3JpdGVzOiAoY2FyZDogaUNhcmQpID0+IHt9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBGYXZvcml0ZVByb3ZpZGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH06IGFueSkgPT4ge1xuICBjb25zdCBbZmF2b3JpdGVzLCBzZXRGYXZvcml0ZXNdID0gdXNlU3RhdGU8aUNhcmRbXT4oW10pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFBlcnNvbmFzKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3RlclwiKTtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgY29uc3QgeyByZXN1bHRzOiBwZXJzb25hcyB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHBlcnNvbmFzLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGdldEltZyhpZDogbnVtYmVyKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8ke2lkfWBcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4gZGF0YS5pbWFnZTtcbiAgfVxuXG4gIGNvbnN0IGFkZFRvRmF2b3JpdGVzID0gKFxuICAgIGlkOiBudW1iZXIsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGltYWdlOiBzdHJpbmcsXG4gICAgc3BlY2llOiBzdHJpbmdcbiAgKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjbGlja1wiKTtcbiAgICBjb25zdCBmYXZvcml0ZTogaUNhcmQgPSB7IGlkLCBuYW1lLCBpbWFnZSwgc3BlY2llIH07XG4gICAgc2V0RmF2b3JpdGVzKFsuLi5mYXZvcml0ZXMsIGZhdm9yaXRlXSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPEZhdm9yaXRlQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgZmF2b3JpdGVzLFxuICAgICAgICBzZXRGYXZvcml0ZXMsXG4gICAgICAgIGdldFBlcnNvbmFzLFxuICAgICAgICBnZXRJbWcsXG4gICAgICAgIGFkZFRvRmF2b3JpdGVzLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9GYXZvcml0ZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkZhdm9yaXRlQ29udGV4dCIsImZhdm9yaXRlcyIsInNldEZhdm9yaXRlcyIsImdldFBlcnNvbmFzIiwicHJvcHMiLCJwZXJzb25hcyIsImdldEltZyIsImlkIiwiYWRkVG9GYXZvcml0ZXMiLCJjYXJkIiwiRmF2b3JpdGVQcm92aWRlciIsImNoaWxkcmVuIiwicmVzcG9uc2UiLCJmZXRjaCIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRzIiwianNvbiIsImRhdGEiLCJpbWFnZSIsIm5hbWUiLCJzcGVjaWUiLCJmYXZvcml0ZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context.tsx\n"));

/***/ })

});