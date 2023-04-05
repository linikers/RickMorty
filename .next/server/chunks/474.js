exports.id = 474;
exports.ids = [474];
exports.modules = {

/***/ 3159:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__yiMvd",
	"btnCard": "Card_btnCard__41Vxy"
};


/***/ }),

/***/ 5512:
/***/ ((module) => {

// Exports
module.exports = {
	"top": "Header_top__q5KzD",
	"logo": "Header_logo__YVuNB",
	"fav": "Header_fav__Ph6yu",
	"formSearch": "Header_formSearch__OAhFB",
	"inputSearch": "Header_inputSearch__AmGno",
	"btnSearch": "Header_btnSearch__5GJVN"
};


/***/ }),

/***/ 176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3159);
/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4828);






function Card({ id , name , image , specie  }) {
    const { setFavorites , favorites , addToFavorites  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__/* .FavoriteContext */ .a);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),
        children: [
            image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: image,
                alt: name ? name : "",
                width: 200,
                height: 180,
                quality: 75
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: specie
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FavoriteBtn, {
                card: {
                    id,
                    name,
                    image,
                    specie
                }
            })
        ]
    }, id);
}
function FavoriteBtn({ card  }) {
    const { favorites , addToFavorites  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__/* .FavoriteContext */ .a);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().btnCard),
        onClick: ()=>addToFavorites(card),
        children: "Favoritos"
    });
}


/***/ }),

/***/ 8986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.245e2553.svg","height":221,"width":752,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./src/styles/Header.module.css
var Header_module = __webpack_require__(5512);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Header/index.tsx







function Header() {
    const [search, setSearch] = (0,external_react_.useState)("");
    const router = (0,router_.useRouter)();
    const handleSearch = async (e)=>{
        e.preventDefault();
        if (!search.trim()) {
            return;
        }
        const result = await searchPerson(search.trim());
        router.push(`/search?q=${search.trim()}`);
        setSearch("");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (Header_module_default()).top,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    className: (Header_module_default()).logo,
                    src: logo,
                    alt: "Rick and morty",
                    quality: 75,
                    width: 270,
                    height: 79
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                className: (Header_module_default()).fav,
                href: "/favorites",
                children: "Favoritos"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                className: (Header_module_default()).formSearch,
                onSubmit: handleSearch,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: (Header_module_default()).inputSearch,
                        id: "search",
                        type: "text",
                        placeholder: "Pesquisa",
                        onChange: (e)=>setSearch(e.target.value),
                        value: search
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: (Header_module_default()).btnSearch,
                        type: "submit",
                        children: "Busca"
                    })
                ]
            })
        ]
    });
}
async function searchPerson(person) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${person}`);
    const data = await response.json();
    console.log(data.results);
    return data.results;
}


/***/ })

};
;