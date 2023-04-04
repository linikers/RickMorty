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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FavoriteContext\": function() { return /* binding */ FavoriteContext; },\n/* harmony export */   \"FavoriteProvider\": function() { return /* binding */ FavoriteProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst FavoriteContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    favorites: [],\n    setFavorites: ()=>{},\n    getPersonas: async ()=>({\n            props: {\n                personas: []\n            }\n        }),\n    getImg: async (id)=>\"\",\n    addToFavorites: (card)=>{}\n});\nconst FavoriteProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [favorites, setFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    async function getPersonas() {\n        const response = await fetch(\"https://rickandmortyapi.com/api/character\");\n        console.log(response);\n        const { results: personas  } = await response.json();\n        return {\n            props: {\n                personas\n            }\n        };\n    }\n    async function getImg(id) {\n        const response = await fetch(\"https://rickandmortyapi.com/api/character/\".concat(id));\n        const data = await response.json();\n        return data.image;\n    }\n    const addToFavorites = (card)=>{\n        console.log(\"click\");\n        setFavorites((prevFavorites)=>[\n                ...favorites,\n                card\n            ]);\n        console.log(favorites);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FavoriteContext.Provider, {\n        value: {\n            favorites,\n            setFavorites,\n            getPersonas,\n            getImg,\n            addToFavorites\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/liniker/clientes_dev/RickMorty/src/context.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FavoriteProvider, \"8/j46ayqkxuOXjyrDl2B5q17iyc=\");\n_c = FavoriteProvider;\nvar _c;\n$RefreshReg$(_c, \"FavoriteProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUU7QUFxQmhFLE1BQU1FLGdDQUFrQkYsb0RBQWFBLENBQXNCO0lBQ2hFRyxXQUFXLEVBQUU7SUFDYkMsY0FBYyxJQUFNLENBQUM7SUFDckJDLGFBQWEsVUFBYTtZQUFFQyxPQUFPO2dCQUFFQyxVQUFVLEVBQUU7WUFBQztRQUFFO0lBQ3BEQyxRQUFRLE9BQU9DLEtBQWU7SUFDOUJDLGdCQUFnQixDQUFDQyxPQUFnQixDQUFDO0FBQ3BDLEdBQUc7QUFFSSxNQUFNQyxtQkFBNkMsU0FBa0I7UUFBakIsRUFBRUMsU0FBUSxFQUFFOztJQUNyRSxNQUFNLENBQUNWLFdBQVdDLGFBQWEsR0FBR0gsK0NBQVFBLENBQVUsRUFBRTtJQUV0RCxlQUFlSSxjQUFjO1FBQzNCLE1BQU1TLFdBQVcsTUFBTUMsTUFBTTtRQUM3QkMsUUFBUUMsR0FBRyxDQUFDSDtRQUNaLE1BQU0sRUFBRUksU0FBU1gsU0FBUSxFQUFFLEdBQUcsTUFBTU8sU0FBU0ssSUFBSTtRQUVqRCxPQUFPO1lBQ0xiLE9BQU87Z0JBQ0xDO1lBQ0Y7UUFDRjtJQUNGO0lBQ0EsZUFBZUMsT0FBT0MsRUFBVSxFQUFFO1FBQ2hDLE1BQU1LLFdBQVcsTUFBTUMsTUFDckIsNkNBQWdELE9BQUhOO1FBRS9DLE1BQU1XLE9BQU8sTUFBTU4sU0FBU0ssSUFBSTtRQUVoQyxPQUFPQyxLQUFLQyxLQUFLO0lBQ25CO0lBRUEsTUFBTVgsaUJBQWlCLENBQUNDLE9BQWdCO1FBQ3RDSyxRQUFRQyxHQUFHLENBQUM7UUFFWmIsYUFBYSxDQUFDa0IsZ0JBQWtCO21CQUFJbkI7Z0JBQVdRO2FBQUs7UUFDcERLLFFBQVFDLEdBQUcsQ0FBQ2Q7SUFDZDtJQUNBLHFCQUNFLDhEQUFDRCxnQkFBZ0JxQixRQUFRO1FBQ3ZCQyxPQUFPO1lBQ0xyQjtZQUNBQztZQUNBQztZQUNBRztZQUNBRTtRQUNGO2tCQUVDRzs7Ozs7O0FBR1AsRUFBRTtHQTFDV0Q7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQudHN4PzRhMDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaVBlcnNvbmEgfSBmcm9tIFwiLi9jb21wb25lbnRzL0NhcmQvaXBlcnNvbmFcIjtcblxuaW50ZXJmYWNlIEZhdm9yaXRlQ29udGV4dFR5cGUge1xuICBmYXZvcml0ZXM6IGlDYXJkW107XG4gIHNldEZhdm9yaXRlczogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248aUNhcmRbXT4+O1xuICBnZXRQZXJzb25hczogKCkgPT4gUHJvbWlzZTx7IHByb3BzOiB7IHBlcnNvbmFzOiBpUGVyc29uYVtdIH0gfT47XG4gIGdldEltZzogKGlkOiBudW1iZXIpID0+IFByb21pc2U8c3RyaW5nPjtcbiAgYWRkVG9GYXZvcml0ZXM6IChjYXJkOiBpQ2FyZCkgPT4gdm9pZDtcbn1cbmludGVyZmFjZSBJRmF2b3JpdGVQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgaUNhcmQge1xuICBpZD86IG51bWJlcjtcbiAgbmFtZT86IHN0cmluZztcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIHNwZWNpZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEZhdm9yaXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8RmF2b3JpdGVDb250ZXh0VHlwZT4oe1xuICBmYXZvcml0ZXM6IFtdLFxuICBzZXRGYXZvcml0ZXM6ICgpID0+IHt9LFxuICBnZXRQZXJzb25hczogYXN5bmMgKCkgPT4gKHsgcHJvcHM6IHsgcGVyc29uYXM6IFtdIH0gfSksXG4gIGdldEltZzogYXN5bmMgKGlkOiBudW1iZXIpID0+IFwiXCIsXG4gIGFkZFRvRmF2b3JpdGVzOiAoY2FyZDogaUNhcmQpID0+IHt9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBGYXZvcml0ZVByb3ZpZGVyOiBSZWFjdC5GQzxJRmF2b3JpdGVQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtmYXZvcml0ZXMsIHNldEZhdm9yaXRlc10gPSB1c2VTdGF0ZTxpQ2FyZFtdPihbXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0UGVyc29uYXMoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyXCIpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICBjb25zdCB7IHJlc3VsdHM6IHBlcnNvbmFzIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgcGVyc29uYXMsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0SW1nKGlkOiBudW1iZXIpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyLyR7aWR9YFxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBkYXRhLmltYWdlO1xuICB9XG5cbiAgY29uc3QgYWRkVG9GYXZvcml0ZXMgPSAoY2FyZDogaUNhcmQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xuXG4gICAgc2V0RmF2b3JpdGVzKChwcmV2RmF2b3JpdGVzKSA9PiBbLi4uZmF2b3JpdGVzLCBjYXJkXSk7XG4gICAgY29uc29sZS5sb2coZmF2b3JpdGVzKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8RmF2b3JpdGVDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBmYXZvcml0ZXMsXG4gICAgICAgIHNldEZhdm9yaXRlcyxcbiAgICAgICAgZ2V0UGVyc29uYXMsXG4gICAgICAgIGdldEltZyxcbiAgICAgICAgYWRkVG9GYXZvcml0ZXMsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0Zhdm9yaXRlQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiRmF2b3JpdGVDb250ZXh0IiwiZmF2b3JpdGVzIiwic2V0RmF2b3JpdGVzIiwiZ2V0UGVyc29uYXMiLCJwcm9wcyIsInBlcnNvbmFzIiwiZ2V0SW1nIiwiaWQiLCJhZGRUb0Zhdm9yaXRlcyIsImNhcmQiLCJGYXZvcml0ZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyZXNwb25zZSIsImZldGNoIiwiY29uc29sZSIsImxvZyIsInJlc3VsdHMiLCJqc29uIiwiZGF0YSIsImltYWdlIiwicHJldkZhdm9yaXRlcyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context.tsx\n"));

/***/ })

});