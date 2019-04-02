webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/content.js":
/*!**************************!*\
  !*** ./pages/content.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  {\n    pokemons(first: 10) {\n      id\n      name\n      types\n      image\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var getPokemons = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject());

var Page = function Page() {
  var showPokemons = function showPokemons() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Query, {
      query: getPokemons
    }, function (_ref) {
      var loading = _ref.loading,
          error = _ref.error,
          data = _ref.data;
      if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Loading...");
      if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Error :(");
      return data.pokemons.map(function (pokemon) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Pokemon, {
          key: pokemon.id,
          id: id,
          onClick: function onClick() {
            Router.push({
              pathname: '/pokemonInfo',
              query: {
                id: pokemon.id
              }
            }), setId(pokemon.id);
          },
          src: pokemon.image,
          name: pokemon.name,
          type: pokemon.types
        });
      });
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, showPokemons());
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=index.js.5f561ed8b907bc3f620b.hot-update.js.map