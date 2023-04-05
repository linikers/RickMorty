"use strict";
exports.id = 828;
exports.ids = [828];
exports.modules = {

/***/ 4828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ FavoriteContext),
/* harmony export */   "s": () => (/* binding */ FavoriteProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const FavoriteContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    favorites: [],
    setFavorites: ()=>{},
    getPersonas: async ()=>({
            props: {
                personas: []
            }
        }),
    getImg: async (id)=>"",
    addToFavorites: (card)=>{}
});
const FavoriteProvider = ({ children  })=>{
    const [favorites, setFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    async function getPersonas() {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        console.log(response);
        const { results: personas  } = await response.json();
        return {
            props: {
                personas
            }
        };
    }
    async function getImg(id) {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        return data.image;
    }
    const addToFavorites = (card)=>{
        console.log("click");
        setFavorites((prevFavorites)=>[
                ...favorites,
                card
            ]);
        console.log(favorites);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FavoriteContext.Provider, {
        value: {
            favorites,
            setFavorites,
            getPersonas,
            getImg,
            addToFavorites
        },
        children: children
    });
};


/***/ })

};
;