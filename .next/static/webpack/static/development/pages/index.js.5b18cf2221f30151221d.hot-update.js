webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/content.js":
/*!**************************!*\
  !*** ./pages/content.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _components_pokemon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/pokemon */ "./components/pokemon.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  {\n    pokemons(first: 4) {\n      id\n      name\n      types\n      image\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var getPokemons = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());
var AllPokemonsBlock = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "content__AllPokemonsBlock",
  componentId: "sc-1yo1xu4-0"
})(["width:80%;margin-left:10%;overflow:hidden;box-sizing:border-box;"]);

var Content = function Content() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      id = _useState2[0],
      setId = _useState2[1];

  var showPokemons = function showPokemons() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Query"], {
      query: getPokemons
    }, function (_ref) {
      var loading = _ref.loading,
          error = _ref.error,
          data = _ref.data;
      if (loading) return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Loading...");
      if (error) return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Error :(");
      return data.pokemons.map(function (pokemon) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_pokemon__WEBPACK_IMPORTED_MODULE_5__["default"], {
          onclick: function onclick() {
            setId(pokemon.id);
          },
          key: pokemon.id,
          src: pokemon.image,
          name: pokemon.name,
          type: id
        });
      });
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AllPokemonsBlock, null, showPokemons());
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ })

})
//# sourceMappingURL=index.js.5b18cf2221f30151221d.hot-update.js.map