webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
false,

/***/ "./node_modules/apollo-boost/lib/bundle.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/apollo-boost/lib/bundle.esm.js ***!
  \*****************************************************/
/*! exports provided: HttpLink, gql, default, ApolloClient, ObservableQuery, NetworkStatus, isApolloError, ApolloError, FetchType, Observable, getOperationName, createOperation, makePromise, toPromise, fromPromise, fromError, empty, from, split, concat, ApolloLink, execute, InMemoryCache, defaultDataIdFromObject, StoreReader, assertIdValue, WriteError, enhanceErrorWithDocument, StoreWriter, HeuristicFragmentMatcher, IntrospectionFragmentMatcher, ObjectCache, defaultNormalizedCacheFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloClient", function() { return apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableQuery", function() { return apollo_client__WEBPACK_IMPORTED_MODULE_1__["ObservableQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkStatus", function() { return apollo_client__WEBPACK_IMPORTED_MODULE_1__["NetworkStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isApolloError", function() { return apollo_client__WEBPACK_IMPORTED_MODULE_1__["isApolloError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloError", function() { return apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FetchType", function() { return apollo_client__WEBPACK_IMPORTED_MODULE_1__["FetchType"]; });

/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["Observable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["getOperationName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createOperation", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["createOperation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePromise", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["makePromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["toPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["fromPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["fromError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["empty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "from", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["from"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "split", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["split"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["concat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["ApolloLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return apollo_link__WEBPACK_IMPORTED_MODULE_2__["execute"]; });

/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InMemoryCache", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultDataIdFromObject", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["defaultDataIdFromObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoreReader", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["StoreReader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertIdValue", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["assertIdValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WriteError", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["WriteError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enhanceErrorWithDocument", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["enhanceErrorWithDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoreWriter", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["StoreWriter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeuristicFragmentMatcher", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["HeuristicFragmentMatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntrospectionFragmentMatcher", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["IntrospectionFragmentMatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectCache", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["ObjectCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultNormalizedCacheFactory", function() { return apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["defaultNormalizedCacheFactory"]; });

/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpLink", function() { return apollo_link_http__WEBPACK_IMPORTED_MODULE_4__["HttpLink"]; });

/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-link-error */ "./node_modules/apollo-link-error/lib/bundle.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "gql", function() { return graphql_tag__WEBPACK_IMPORTED_MODULE_6___default.a; });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ts-invariant */ "./node_modules/apollo-boost/node_modules/ts-invariant/lib/invariant.esm.js");













var PRESET_CONFIG_KEYS = [
    'request',
    'uri',
    'credentials',
    'headers',
    'fetch',
    'fetchOptions',
    'clientState',
    'onError',
    'cacheRedirects',
    'cache',
    'name',
    'version',
    'resolvers',
    'typeDefs',
    'fragmentMatcher',
];
var DefaultClient = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DefaultClient, _super);
    function DefaultClient(config) {
        if (config === void 0) { config = {}; }
        var _this = this;
        if (config) {
            var diff = Object.keys(config).filter(function (key) { return PRESET_CONFIG_KEYS.indexOf(key) === -1; });
            if (diff.length > 0) {
                 false || ts_invariant__WEBPACK_IMPORTED_MODULE_7__["invariant"].warn('ApolloBoost was initialized with unsupported options: ' +
                    ("" + diff.join(' ')));
            }
        }
        var request = config.request, uri = config.uri, credentials = config.credentials, headers = config.headers, fetch = config.fetch, fetchOptions = config.fetchOptions, clientState = config.clientState, cacheRedirects = config.cacheRedirects, errorCallback = config.onError, name = config.name, version = config.version, resolvers = config.resolvers, typeDefs = config.typeDefs, fragmentMatcher = config.fragmentMatcher;
        var cache = config.cache;
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_7__["invariant"])(!cache || !cacheRedirects, 'Incompatible cache configuration. If providing `cache` then ' +
            'configure the provided instance with `cacheRedirects` instead.');
        if (!cache) {
            cache = cacheRedirects
                ? new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]({ cacheRedirects: cacheRedirects })
                : new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]();
        }
        var errorLink = errorCallback
            ? Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_5__["onError"])(errorCallback)
            : Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_5__["onError"])(function (_a) {
                var graphQLErrors = _a.graphQLErrors, networkError = _a.networkError;
                if (graphQLErrors) {
                    graphQLErrors.map(function (_a) {
                        var message = _a.message, locations = _a.locations, path = _a.path;
                        return  false || ts_invariant__WEBPACK_IMPORTED_MODULE_7__["invariant"].warn("[GraphQL error]: Message: " + message + ", Location: " +
                            (locations + ", Path: " + path));
                    });
                }
                if (networkError) {
                     false || ts_invariant__WEBPACK_IMPORTED_MODULE_7__["invariant"].warn("[Network error]: " + networkError);
                }
            });
        var requestHandler = request
            ? new apollo_link__WEBPACK_IMPORTED_MODULE_2__["ApolloLink"](function (operation, forward) {
                return new apollo_link__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                    var handle;
                    Promise.resolve(operation)
                        .then(function (oper) { return request(oper); })
                        .then(function () {
                        handle = forward(operation).subscribe({
                            next: observer.next.bind(observer),
                            error: observer.error.bind(observer),
                            complete: observer.complete.bind(observer),
                        });
                    })
                        .catch(observer.error.bind(observer));
                    return function () {
                        if (handle) {
                            handle.unsubscribe();
                        }
                    };
                });
            })
            : false;
        var httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_4__["HttpLink"]({
            uri: uri || '/graphql',
            fetch: fetch,
            fetchOptions: fetchOptions || {},
            credentials: credentials || 'same-origin',
            headers: headers || {},
        });
        var link = apollo_link__WEBPACK_IMPORTED_MODULE_2__["ApolloLink"].from([errorLink, requestHandler, httpLink].filter(function (x) { return !!x; }));
        var activeResolvers = resolvers;
        var activeTypeDefs = typeDefs;
        var activeFragmentMatcher = fragmentMatcher;
        if (clientState) {
            if (clientState.defaults) {
                cache.writeData({
                    data: clientState.defaults,
                });
            }
            activeResolvers = clientState.resolvers;
            activeTypeDefs = clientState.typeDefs;
            activeFragmentMatcher = clientState.fragmentMatcher;
        }
        _this = _super.call(this, {
            cache: cache,
            link: link,
            name: name,
            version: version,
            resolvers: activeResolvers,
            typeDefs: activeTypeDefs,
            fragmentMatcher: activeFragmentMatcher,
        }) || this;
        return _this;
    }
    return DefaultClient;
}(apollo_client__WEBPACK_IMPORTED_MODULE_1__["default"]));

/* harmony default export */ __webpack_exports__["default"] = (DefaultClient);
//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-boost/node_modules/ts-invariant/lib/invariant.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/apollo-boost/node_modules/ts-invariant/lib/invariant.esm.js ***!
  \**********************************************************************************/
/*! exports provided: default, InvariantError, invariant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvariantError", function() { return InvariantError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
(function (invariant) {
    function warn() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.warn.apply(console, args);
    }
    invariant.warn = warn;
    function error() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.error.apply(console, args);
    }
    invariant.error = error;
})(invariant || (invariant = {}));
var invariant$1 = invariant;

/* harmony default export */ __webpack_exports__["default"] = (invariant$1);



/***/ }),

/***/ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/apollo-cache-inmemory/lib/bundle.esm.js ***!
  \**************************************************************/
/*! exports provided: InMemoryCache, defaultDataIdFromObject, StoreReader, assertIdValue, WriteError, enhanceErrorWithDocument, StoreWriter, HeuristicFragmentMatcher, IntrospectionFragmentMatcher, ObjectCache, defaultNormalizedCacheFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryCache", function() { return InMemoryCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDataIdFromObject", function() { return defaultDataIdFromObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreReader", function() { return StoreReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertIdValue", function() { return assertIdValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteError", function() { return WriteError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enhanceErrorWithDocument", function() { return enhanceErrorWithDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreWriter", function() { return StoreWriter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeuristicFragmentMatcher", function() { return HeuristicFragmentMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntrospectionFragmentMatcher", function() { return IntrospectionFragmentMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectCache", function() { return ObjectCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultNormalizedCacheFactory", function() { return defaultNormalizedCacheFactory$1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var apollo_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-cache */ "./node_modules/apollo-cache/lib/bundle.esm.js");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/bundle.esm.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/index.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(optimism__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts-invariant */ "./node_modules/apollo-cache-inmemory/node_modules/ts-invariant/lib/invariant.esm.js");






var testMap = new Map();
if (testMap.set(1, 2) !== testMap) {
    var set_1 = testMap.set;
    Map.prototype.set = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        set_1.apply(this, args);
        return this;
    };
}
var testSet = new Set();
if (testSet.add(3) !== testSet) {
    var add_1 = testSet.add;
    Set.prototype.add = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        add_1.apply(this, args);
        return this;
    };
}
var frozen = {};
if (typeof Object.freeze === 'function') {
    Object.freeze(frozen);
}
try {
    testMap.set(frozen, frozen).delete(frozen);
}
catch (_a) {
    var wrap = function (method) {
        return method && (function (obj) {
            try {
                testMap.set(obj, obj).delete(obj);
            }
            finally {
                return method.call(Object, obj);
            }
        });
    };
    Object.freeze = wrap(Object.freeze);
    Object.seal = wrap(Object.seal);
    Object.preventExtensions = wrap(Object.preventExtensions);
}

var haveWarned = false;
function shouldWarn() {
    var answer = !haveWarned;
    if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isTest"])()) {
        haveWarned = true;
    }
    return answer;
}
var HeuristicFragmentMatcher = (function () {
    function HeuristicFragmentMatcher() {
    }
    HeuristicFragmentMatcher.prototype.ensureReady = function () {
        return Promise.resolve();
    };
    HeuristicFragmentMatcher.prototype.canBypassInit = function () {
        return true;
    };
    HeuristicFragmentMatcher.prototype.match = function (idValue, typeCondition, context) {
        var obj = context.store.get(idValue.id);
        if (!obj && idValue.id === 'ROOT_QUERY') {
            return true;
        }
        if (!obj) {
            return false;
        }
        if (!obj.__typename) {
            if (shouldWarn()) {
                 false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].warn("You're using fragments in your queries, but either don't have the addTypename:\n  true option set in Apollo Client, or you are trying to write a fragment to the store without the __typename.\n   Please turn on the addTypename option and include __typename when writing fragments so that Apollo Client\n   can accurately match fragments.");
                 false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].warn('Could not find __typename on Fragment ', typeCondition, obj);
                 false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].warn("DEPRECATION WARNING: using fragments without __typename is unsupported behavior " +
                    "and will be removed in future versions of Apollo client. You should fix this and set addTypename to true now.");
            }
            return 'heuristic';
        }
        if (obj.__typename === typeCondition) {
            return true;
        }
        if (shouldWarn()) {
             false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].error('You are using the simple (heuristic) fragment matcher, but your ' +
                'queries contain union or interface types. Apollo Client will not be ' +
                'able to accurately map fragments. To make this error go away, use ' +
                'the `IntrospectionFragmentMatcher` as described in the docs: ' +
                'https://www.apollographql.com/docs/react/advanced/fragments.html#fragment-matcher');
        }
        return 'heuristic';
    };
    return HeuristicFragmentMatcher;
}());
var IntrospectionFragmentMatcher = (function () {
    function IntrospectionFragmentMatcher(options) {
        if (options && options.introspectionQueryResultData) {
            this.possibleTypesMap = this.parseIntrospectionResult(options.introspectionQueryResultData);
            this.isReady = true;
        }
        else {
            this.isReady = false;
        }
        this.match = this.match.bind(this);
    }
    IntrospectionFragmentMatcher.prototype.match = function (idValue, typeCondition, context) {
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(this.isReady, 'FragmentMatcher.match() was called before FragmentMatcher.init()');
        var obj = context.store.get(idValue.id);
        if (!obj) {
            return false;
        }
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(obj.__typename, "Cannot match fragment because __typename property is missing: " + JSON.stringify(obj));
        if (obj.__typename === typeCondition) {
            return true;
        }
        var implementingTypes = this.possibleTypesMap[typeCondition];
        if (implementingTypes && implementingTypes.indexOf(obj.__typename) > -1) {
            return true;
        }
        return false;
    };
    IntrospectionFragmentMatcher.prototype.parseIntrospectionResult = function (introspectionResultData) {
        var typeMap = {};
        introspectionResultData.__schema.types.forEach(function (type) {
            if (type.kind === 'UNION' || type.kind === 'INTERFACE') {
                typeMap[type.name] = type.possibleTypes.map(function (implementingType) { return implementingType.name; });
            }
        });
        return typeMap;
    };
    return IntrospectionFragmentMatcher;
}());

var CacheKeyNode = (function () {
    function CacheKeyNode() {
        this.children = null;
        this.key = null;
    }
    CacheKeyNode.prototype.lookup = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.lookupArray(args);
    };
    CacheKeyNode.prototype.lookupArray = function (array) {
        var node = this;
        array.forEach(function (value) {
            node = node.getOrCreate(value);
        });
        return node.key || (node.key = Object.create(null));
    };
    CacheKeyNode.prototype.getOrCreate = function (value) {
        var map = this.children || (this.children = new Map());
        var node = map.get(value);
        if (!node) {
            map.set(value, (node = new CacheKeyNode()));
        }
        return node;
    };
    return CacheKeyNode;
}());

var hasOwn = Object.prototype.hasOwnProperty;
var DepTrackingCache = (function () {
    function DepTrackingCache(data) {
        if (data === void 0) { data = Object.create(null); }
        var _this = this;
        this.data = data;
        this.depend = Object(optimism__WEBPACK_IMPORTED_MODULE_3__["wrap"])(function (dataId) { return _this.data[dataId]; }, {
            disposable: true,
            makeCacheKey: function (dataId) {
                return dataId;
            }
        });
    }
    DepTrackingCache.prototype.toObject = function () {
        return this.data;
    };
    DepTrackingCache.prototype.get = function (dataId) {
        this.depend(dataId);
        return this.data[dataId];
    };
    DepTrackingCache.prototype.set = function (dataId, value) {
        var oldValue = this.data[dataId];
        if (value !== oldValue) {
            this.data[dataId] = value;
            this.depend.dirty(dataId);
        }
    };
    DepTrackingCache.prototype.delete = function (dataId) {
        if (hasOwn.call(this.data, dataId)) {
            delete this.data[dataId];
            this.depend.dirty(dataId);
        }
    };
    DepTrackingCache.prototype.clear = function () {
        this.replace(null);
    };
    DepTrackingCache.prototype.replace = function (newData) {
        var _this = this;
        if (newData) {
            Object.keys(newData).forEach(function (dataId) {
                _this.set(dataId, newData[dataId]);
            });
            Object.keys(this.data).forEach(function (dataId) {
                if (!hasOwn.call(newData, dataId)) {
                    _this.delete(dataId);
                }
            });
        }
        else {
            Object.keys(this.data).forEach(function (dataId) {
                _this.delete(dataId);
            });
        }
    };
    return DepTrackingCache;
}());
function defaultNormalizedCacheFactory(seed) {
    return new DepTrackingCache(seed);
}

var StoreReader = (function () {
    function StoreReader(cacheKeyRoot) {
        if (cacheKeyRoot === void 0) { cacheKeyRoot = new CacheKeyNode; }
        var _this = this;
        this.cacheKeyRoot = cacheKeyRoot;
        var reader = this;
        var executeStoreQuery = reader.executeStoreQuery, executeSelectionSet = reader.executeSelectionSet;
        this.executeStoreQuery = Object(optimism__WEBPACK_IMPORTED_MODULE_3__["wrap"])(function (options) {
            return executeStoreQuery.call(_this, options);
        }, {
            makeCacheKey: function (_a) {
                var query = _a.query, rootValue = _a.rootValue, contextValue = _a.contextValue, variableValues = _a.variableValues, fragmentMatcher = _a.fragmentMatcher;
                if (contextValue.store instanceof DepTrackingCache) {
                    return reader.cacheKeyRoot.lookup(query, contextValue.store, fragmentMatcher, JSON.stringify(variableValues), rootValue.id);
                }
                return;
            }
        });
        this.executeSelectionSet = Object(optimism__WEBPACK_IMPORTED_MODULE_3__["wrap"])(function (options) {
            return executeSelectionSet.call(_this, options);
        }, {
            makeCacheKey: function (_a) {
                var selectionSet = _a.selectionSet, rootValue = _a.rootValue, execContext = _a.execContext;
                if (execContext.contextValue.store instanceof DepTrackingCache) {
                    return reader.cacheKeyRoot.lookup(selectionSet, execContext.contextValue.store, execContext.fragmentMatcher, JSON.stringify(execContext.variableValues), rootValue.id);
                }
                return;
            }
        });
    }
    StoreReader.prototype.readQueryFromStore = function (options) {
        var optsPatch = { returnPartialData: false };
        return this.diffQueryAgainstStore(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options, optsPatch)).result;
    };
    StoreReader.prototype.diffQueryAgainstStore = function (_a) {
        var store = _a.store, query = _a.query, variables = _a.variables, previousResult = _a.previousResult, _b = _a.returnPartialData, returnPartialData = _b === void 0 ? true : _b, _c = _a.rootId, rootId = _c === void 0 ? 'ROOT_QUERY' : _c, fragmentMatcherFunction = _a.fragmentMatcherFunction, config = _a.config;
        var queryDefinition = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["getQueryDefinition"])(query);
        variables = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["assign"])({}, Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["getDefaultValues"])(queryDefinition), variables);
        var context = {
            store: store,
            dataIdFromObject: (config && config.dataIdFromObject) || null,
            cacheRedirects: (config && config.cacheRedirects) || {},
        };
        var execResult = this.executeStoreQuery({
            query: query,
            rootValue: {
                type: 'id',
                id: rootId,
                generated: true,
                typename: 'Query',
            },
            contextValue: context,
            variableValues: variables,
            fragmentMatcher: fragmentMatcherFunction,
        });
        var hasMissingFields = execResult.missing && execResult.missing.length > 0;
        if (hasMissingFields && !returnPartialData) {
            execResult.missing.forEach(function (info) {
                if (info.tolerable)
                    return;
                throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_4__["InvariantError"]("Can't find field " + info.fieldName + " on object " + JSON.stringify(info.object, null, 2) + ".");
            });
        }
        if (previousResult) {
            if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(previousResult, execResult.result)) {
                execResult.result = previousResult;
            }
        }
        return {
            result: execResult.result,
            complete: !hasMissingFields,
        };
    };
    StoreReader.prototype.executeStoreQuery = function (_a) {
        var query = _a.query, rootValue = _a.rootValue, contextValue = _a.contextValue, variableValues = _a.variableValues, _b = _a.fragmentMatcher, fragmentMatcher = _b === void 0 ? defaultFragmentMatcher : _b;
        var mainDefinition = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["getMainDefinition"])(query);
        var fragments = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["getFragmentDefinitions"])(query);
        var fragmentMap = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["createFragmentMap"])(fragments);
        var execContext = {
            query: query,
            fragmentMap: fragmentMap,
            contextValue: contextValue,
            variableValues: variableValues,
            fragmentMatcher: fragmentMatcher,
        };
        return this.executeSelectionSet({
            selectionSet: mainDefinition.selectionSet,
            rootValue: rootValue,
            execContext: execContext,
        });
    };
    StoreReader.prototype.executeSelectionSet = function (_a) {
        var _this = this;
        var selectionSet = _a.selectionSet, rootValue = _a.rootValue, execContext = _a.execContext;
        var fragmentMap = execContext.fragmentMap, contextValue = execContext.contextValue, variables = execContext.variableValues;
        var finalResult = { result: null };
        var objectsToMerge = [];
        var object = contextValue.store.get(rootValue.id);
        var typename = (object && object.__typename) ||
            (rootValue.id === 'ROOT_QUERY' && 'Query') ||
            void 0;
        function handleMissing(result) {
            var _a;
            if (result.missing) {
                finalResult.missing = finalResult.missing || [];
                (_a = finalResult.missing).push.apply(_a, result.missing);
            }
            return result.result;
        }
        selectionSet.selections.forEach(function (selection) {
            var _a;
            if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["shouldInclude"])(selection, variables)) {
                return;
            }
            if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isField"])(selection)) {
                var fieldResult = handleMissing(_this.executeField(object, typename, selection, execContext));
                if (typeof fieldResult !== 'undefined') {
                    objectsToMerge.push((_a = {},
                        _a[Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["resultKeyNameFromField"])(selection)] = fieldResult,
                        _a));
                }
            }
            else {
                var fragment = void 0;
                if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isInlineFragment"])(selection)) {
                    fragment = selection;
                }
                else {
                    fragment = fragmentMap[selection.name.value];
                    if (!fragment) {
                        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_4__["InvariantError"]("No fragment named " + selection.name.value);
                    }
                }
                var typeCondition = fragment.typeCondition.name.value;
                var match = execContext.fragmentMatcher(rootValue, typeCondition, contextValue);
                if (match) {
                    var fragmentExecResult = _this.executeSelectionSet({
                        selectionSet: fragment.selectionSet,
                        rootValue: rootValue,
                        execContext: execContext,
                    });
                    if (match === 'heuristic' && fragmentExecResult.missing) {
                        fragmentExecResult = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fragmentExecResult, { missing: fragmentExecResult.missing.map(function (info) {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, info, { tolerable: true });
                            }) });
                    }
                    objectsToMerge.push(handleMissing(fragmentExecResult));
                }
            }
        });
        finalResult.result = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["mergeDeepArray"])(objectsToMerge);
        return finalResult;
    };
    StoreReader.prototype.executeField = function (object, typename, field, execContext) {
        var variables = execContext.variableValues, contextValue = execContext.contextValue;
        var fieldName = field.name.value;
        var args = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["argumentsObjectFromField"])(field, variables);
        var info = {
            resultKey: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["resultKeyNameFromField"])(field),
            directives: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["getDirectiveInfoFromField"])(field, variables),
        };
        var readStoreResult = readStoreResolver(object, typename, fieldName, args, contextValue, info);
        if (Array.isArray(readStoreResult.result)) {
            return this.combineExecResults(readStoreResult, this.executeSubSelectedArray(field, readStoreResult.result, execContext));
        }
        if (!field.selectionSet) {
            assertSelectionSetForIdValue(field, readStoreResult.result);
            return readStoreResult;
        }
        if (readStoreResult.result == null) {
            return readStoreResult;
        }
        return this.combineExecResults(readStoreResult, this.executeSelectionSet({
            selectionSet: field.selectionSet,
            rootValue: readStoreResult.result,
            execContext: execContext,
        }));
    };
    StoreReader.prototype.combineExecResults = function () {
        var execResults = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            execResults[_i] = arguments[_i];
        }
        var missing = null;
        execResults.forEach(function (execResult) {
            if (execResult.missing) {
                missing = missing || [];
                missing.push.apply(missing, execResult.missing);
            }
        });
        return {
            result: execResults.pop().result,
            missing: missing,
        };
    };
    StoreReader.prototype.executeSubSelectedArray = function (field, result, execContext) {
        var _this = this;
        var missing = null;
        function handleMissing(childResult) {
            if (childResult.missing) {
                missing = missing || [];
                missing.push.apply(missing, childResult.missing);
            }
            return childResult.result;
        }
        result = result.map(function (item) {
            if (item === null) {
                return null;
            }
            if (Array.isArray(item)) {
                return handleMissing(_this.executeSubSelectedArray(field, item, execContext));
            }
            if (field.selectionSet) {
                return handleMissing(_this.executeSelectionSet({
                    selectionSet: field.selectionSet,
                    rootValue: item,
                    execContext: execContext,
                }));
            }
            assertSelectionSetForIdValue(field, item);
            return item;
        });
        return { result: result, missing: missing };
    };
    return StoreReader;
}());
function assertSelectionSetForIdValue(field, value) {
    if (!field.selectionSet && Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isIdValue"])(value)) {
        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_4__["InvariantError"]("Missing selection set for object of type " + value.typename + " returned for query field " + field.name.value);
    }
}
function defaultFragmentMatcher() {
    return true;
}
function assertIdValue(idValue) {
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isIdValue"])(idValue), "Encountered a sub-selection on the query, but the store doesn't have an object reference. This should never happen during normal use unless you have custom code that is directly manipulating the store; please file an issue.");
}
function readStoreResolver(object, typename, fieldName, args, context, _a) {
    var resultKey = _a.resultKey, directives = _a.directives;
    var storeKeyName = fieldName;
    if (args || directives) {
        storeKeyName = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["getStoreKeyName"])(storeKeyName, args, directives);
    }
    var fieldValue = void 0;
    if (object) {
        fieldValue = object[storeKeyName];
        if (typeof fieldValue === 'undefined' &&
            context.cacheRedirects &&
            typeof typename === 'string') {
            var type = context.cacheRedirects[typename];
            if (type) {
                var resolver = type[fieldName];
                if (resolver) {
                    fieldValue = resolver(object, args, {
                        getCacheKey: function (storeObj) {
                            return Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["toIdValue"])({
                                id: context.dataIdFromObject(storeObj),
                                typename: storeObj.__typename,
                            });
                        },
                    });
                }
            }
        }
    }
    if (typeof fieldValue === 'undefined') {
        return {
            result: fieldValue,
            missing: [{
                    object: object,
                    fieldName: storeKeyName,
                    tolerable: false,
                }],
        };
    }
    if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isJsonValue"])(fieldValue)) {
        fieldValue = fieldValue.json;
    }
    return {
        result: fieldValue,
    };
}

var ObjectCache = (function () {
    function ObjectCache(data) {
        if (data === void 0) { data = Object.create(null); }
        this.data = data;
    }
    ObjectCache.prototype.toObject = function () {
        return this.data;
    };
    ObjectCache.prototype.get = function (dataId) {
        return this.data[dataId];
    };
    ObjectCache.prototype.set = function (dataId, value) {
        this.data[dataId] = value;
    };
    ObjectCache.prototype.delete = function (dataId) {
        this.data[dataId] = void 0;
    };
    ObjectCache.prototype.clear = function () {
        this.data = Object.create(null);
    };
    ObjectCache.prototype.replace = function (newData) {
        this.data = newData || Object.create(null);
    };
    return ObjectCache;
}());
function defaultNormalizedCacheFactory$1(seed) {
    return new ObjectCache(seed);
}

var WriteError = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WriteError, _super);
    function WriteError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'WriteError';
        return _this;
    }
    return WriteError;
}(Error));
function enhanceErrorWithDocument(error, document) {
    var enhancedError = new WriteError("Error writing result to store for query:\n " + JSON.stringify(document));
    enhancedError.message += '\n' + error.message;
    enhancedError.stack = error.stack;
    return enhancedError;
}
var StoreWriter = (function () {
    function StoreWriter() {
    }
    StoreWriter.prototype.writeQueryToStore = function (_a) {
        var query = _a.query, result = _a.result, _b = _a.store, store = _b === void 0 ? defaultNormalizedCacheFactory() : _b, variables = _a.variables, dataIdFromObject = _a.dataIdFromObject, fragmentMatcherFunction = _a.fragmentMatcherFunction;
        return this.writeResultToStore({
            dataId: 'ROOT_QUERY',
            result: result,
            document: query,
            store: store,
            variables: variables,
            dataIdFromObject: dataIdFromObject,
            fragmentMatcherFunction: fragmentMatcherFunction,
        });
    };
    StoreWriter.prototype.writeResultToStore = function (_a) {
        var dataId = _a.dataId, result = _a.result, document = _a.document, _b = _a.store, store = _b === void 0 ? defaultNormalizedCacheFactory() : _b, variables = _a.variables, dataIdFromObject = _a.dataIdFromObject, fragmentMatcherFunction = _a.fragmentMatcherFunction;
        var operationDefinition = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["getOperationDefinition"])(document);
        try {
            return this.writeSelectionSetToStore({
                result: result,
                dataId: dataId,
                selectionSet: operationDefinition.selectionSet,
                context: {
                    store: store,
                    processedData: {},
                    variables: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["assign"])({}, Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["getDefaultValues"])(operationDefinition), variables),
                    dataIdFromObject: dataIdFromObject,
                    fragmentMap: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["createFragmentMap"])(Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["getFragmentDefinitions"])(document)),
                    fragmentMatcherFunction: fragmentMatcherFunction,
                },
            });
        }
        catch (e) {
            throw enhanceErrorWithDocument(e, document);
        }
    };
    StoreWriter.prototype.writeSelectionSetToStore = function (_a) {
        var _this = this;
        var result = _a.result, dataId = _a.dataId, selectionSet = _a.selectionSet, context = _a.context;
        var variables = context.variables, store = context.store, fragmentMap = context.fragmentMap;
        selectionSet.selections.forEach(function (selection) {
            if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["shouldInclude"])(selection, variables)) {
                return;
            }
            if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isField"])(selection)) {
                var resultFieldKey = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["resultKeyNameFromField"])(selection);
                var value = result[resultFieldKey];
                if (typeof value !== 'undefined') {
                    _this.writeFieldToStore({
                        dataId: dataId,
                        value: value,
                        field: selection,
                        context: context,
                    });
                }
                else {
                    var isDefered = false;
                    var isClient = false;
                    if (selection.directives && selection.directives.length) {
                        isDefered = selection.directives.some(function (directive) { return directive.name && directive.name.value === 'defer'; });
                        isClient = selection.directives.some(function (directive) { return directive.name && directive.name.value === 'client'; });
                    }
                    if (!isDefered && !isClient && context.fragmentMatcherFunction) {
                         false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].warn("Missing field " + resultFieldKey + " in " + JSON.stringify(result, null, 2).substring(0, 100));
                    }
                }
            }
            else {
                var fragment = void 0;
                if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isInlineFragment"])(selection)) {
                    fragment = selection;
                }
                else {
                    fragment = (fragmentMap || {})[selection.name.value];
                     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(fragment, "No fragment named " + selection.name.value + ".");
                }
                var matches = true;
                if (context.fragmentMatcherFunction && fragment.typeCondition) {
                    var idValue = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["toIdValue"])({ id: 'self', typename: undefined });
                    var fakeContext = {
                        store: new ObjectCache({ self: result }),
                        cacheRedirects: {},
                    };
                    var match = context.fragmentMatcherFunction(idValue, fragment.typeCondition.name.value, fakeContext);
                    if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isProduction"])() && match === 'heuristic') {
                         false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].error('WARNING: heuristic fragment matching going on!');
                    }
                    matches = !!match;
                }
                if (matches) {
                    _this.writeSelectionSetToStore({
                        result: result,
                        selectionSet: fragment.selectionSet,
                        dataId: dataId,
                        context: context,
                    });
                }
            }
        });
        return store;
    };
    StoreWriter.prototype.writeFieldToStore = function (_a) {
        var field = _a.field, value = _a.value, dataId = _a.dataId, context = _a.context;
        var _b;
        var variables = context.variables, dataIdFromObject = context.dataIdFromObject, store = context.store;
        var storeValue;
        var storeObject;
        var storeFieldName = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["storeKeyNameFromField"])(field, variables);
        if (!field.selectionSet || value === null) {
            storeValue =
                value != null && typeof value === 'object'
                    ?
                        { type: 'json', json: value }
                    :
                        value;
        }
        else if (Array.isArray(value)) {
            var generatedId = dataId + "." + storeFieldName;
            storeValue = this.processArrayValue(value, generatedId, field.selectionSet, context);
        }
        else {
            var valueDataId = dataId + "." + storeFieldName;
            var generated = true;
            if (!isGeneratedId(valueDataId)) {
                valueDataId = '$' + valueDataId;
            }
            if (dataIdFromObject) {
                var semanticId = dataIdFromObject(value);
                 false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(!semanticId || !isGeneratedId(semanticId), 'IDs returned by dataIdFromObject cannot begin with the "$" character.');
                if (semanticId ||
                    (typeof semanticId === 'number' && semanticId === 0)) {
                    valueDataId = semanticId;
                    generated = false;
                }
            }
            if (!isDataProcessed(valueDataId, field, context.processedData)) {
                this.writeSelectionSetToStore({
                    dataId: valueDataId,
                    result: value,
                    selectionSet: field.selectionSet,
                    context: context,
                });
            }
            var typename = value.__typename;
            storeValue = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["toIdValue"])({ id: valueDataId, typename: typename }, generated);
            storeObject = store.get(dataId);
            var escapedId = storeObject && storeObject[storeFieldName];
            if (escapedId !== storeValue && Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isIdValue"])(escapedId)) {
                var hadTypename = escapedId.typename !== undefined;
                var hasTypename = typename !== undefined;
                var typenameChanged = hadTypename && hasTypename && escapedId.typename !== typename;
                 false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(!generated || escapedId.generated || typenameChanged, "Store error: the application attempted to write an object with no provided id but the store already contains an id of " + escapedId.id + " for this object. The selectionSet that was trying to be written is:\n" + JSON.stringify(field));
                 false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(!hadTypename || hasTypename, "Store error: the application attempted to write an object with no provided typename but the store already contains an object with typename of " + escapedId.typename + " for the object of id " + escapedId.id + ". The selectionSet that was trying to be written is:\n" + JSON.stringify(field));
                if (escapedId.generated) {
                    if (typenameChanged) {
                        if (!generated) {
                            store.delete(escapedId.id);
                        }
                    }
                    else {
                        mergeWithGenerated(escapedId.id, storeValue.id, store);
                    }
                }
            }
        }
        storeObject = store.get(dataId);
        if (!storeObject || !Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(storeValue, storeObject[storeFieldName])) {
            store.set(dataId, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, storeObject, (_b = {}, _b[storeFieldName] = storeValue, _b)));
        }
    };
    StoreWriter.prototype.processArrayValue = function (value, generatedId, selectionSet, context) {
        var _this = this;
        return value.map(function (item, index) {
            if (item === null) {
                return null;
            }
            var itemDataId = generatedId + "." + index;
            if (Array.isArray(item)) {
                return _this.processArrayValue(item, itemDataId, selectionSet, context);
            }
            var generated = true;
            if (context.dataIdFromObject) {
                var semanticId = context.dataIdFromObject(item);
                if (semanticId) {
                    itemDataId = semanticId;
                    generated = false;
                }
            }
            if (!isDataProcessed(itemDataId, selectionSet, context.processedData)) {
                _this.writeSelectionSetToStore({
                    dataId: itemDataId,
                    result: item,
                    selectionSet: selectionSet,
                    context: context,
                });
            }
            return Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["toIdValue"])({ id: itemDataId, typename: item.__typename }, generated);
        });
    };
    return StoreWriter;
}());
function isGeneratedId(id) {
    return id[0] === '$';
}
function mergeWithGenerated(generatedKey, realKey, cache) {
    if (generatedKey === realKey) {
        return false;
    }
    var generated = cache.get(generatedKey);
    var real = cache.get(realKey);
    var madeChanges = false;
    Object.keys(generated).forEach(function (key) {
        var value = generated[key];
        var realValue = real[key];
        if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isIdValue"])(value) &&
            isGeneratedId(value.id) &&
            Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isIdValue"])(realValue) &&
            !Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(value, realValue) &&
            mergeWithGenerated(value.id, realValue.id, cache)) {
            madeChanges = true;
        }
    });
    cache.delete(generatedKey);
    var newRealValue = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, generated, real);
    if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(newRealValue, real)) {
        return madeChanges;
    }
    cache.set(realKey, newRealValue);
    return true;
}
function isDataProcessed(dataId, field, processedData) {
    if (!processedData) {
        return false;
    }
    if (processedData[dataId]) {
        if (processedData[dataId].indexOf(field) >= 0) {
            return true;
        }
        else {
            processedData[dataId].push(field);
        }
    }
    else {
        processedData[dataId] = [field];
    }
    return false;
}

var defaultConfig = {
    fragmentMatcher: new HeuristicFragmentMatcher(),
    dataIdFromObject: defaultDataIdFromObject,
    addTypename: true,
    resultCaching: true,
};
function defaultDataIdFromObject(result) {
    if (result.__typename) {
        if (result.id !== undefined) {
            return result.__typename + ":" + result.id;
        }
        if (result._id !== undefined) {
            return result.__typename + ":" + result._id;
        }
    }
    return null;
}
var hasOwn$1 = Object.prototype.hasOwnProperty;
var OptimisticCacheLayer = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OptimisticCacheLayer, _super);
    function OptimisticCacheLayer(optimisticId, parent, transaction) {
        var _this = _super.call(this, Object.create(null)) || this;
        _this.optimisticId = optimisticId;
        _this.parent = parent;
        _this.transaction = transaction;
        return _this;
    }
    OptimisticCacheLayer.prototype.toObject = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.parent.toObject(), this.data);
    };
    OptimisticCacheLayer.prototype.get = function (dataId) {
        return hasOwn$1.call(this.data, dataId)
            ? this.data[dataId]
            : this.parent.get(dataId);
    };
    return OptimisticCacheLayer;
}(ObjectCache));
var InMemoryCache = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InMemoryCache, _super);
    function InMemoryCache(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this) || this;
        _this.watches = new Set();
        _this.typenameDocumentCache = new Map();
        _this.cacheKeyRoot = new CacheKeyNode();
        _this.silenceBroadcast = false;
        _this.config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultConfig, config);
        if (_this.config.customResolvers) {
             false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].warn('customResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating customResolvers in the next major version.');
            _this.config.cacheRedirects = _this.config.customResolvers;
        }
        if (_this.config.cacheResolvers) {
             false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].warn('cacheResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating cacheResolvers in the next major version.');
            _this.config.cacheRedirects = _this.config.cacheResolvers;
        }
        _this.addTypename = _this.config.addTypename;
        _this.data = _this.config.resultCaching
            ? new DepTrackingCache()
            : new ObjectCache();
        _this.optimisticData = _this.data;
        _this.storeReader = new StoreReader(_this.cacheKeyRoot);
        _this.storeWriter = new StoreWriter();
        var cache = _this;
        var maybeBroadcastWatch = cache.maybeBroadcastWatch;
        _this.maybeBroadcastWatch = Object(optimism__WEBPACK_IMPORTED_MODULE_3__["wrap"])(function (c) {
            return maybeBroadcastWatch.call(_this, c);
        }, {
            makeCacheKey: function (c) {
                if (c.optimistic) {
                    return;
                }
                if (c.previousResult) {
                    return;
                }
                if (cache.data instanceof DepTrackingCache) {
                    return cache.cacheKeyRoot.lookup(c.query, JSON.stringify(c.variables));
                }
            }
        });
        return _this;
    }
    InMemoryCache.prototype.restore = function (data) {
        if (data)
            this.data.replace(data);
        return this;
    };
    InMemoryCache.prototype.extract = function (optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return (optimistic ? this.optimisticData : this.data).toObject();
    };
    InMemoryCache.prototype.read = function (options) {
        if (typeof options.rootId === 'string' &&
            typeof this.data.get(options.rootId) === 'undefined') {
            return null;
        }
        return this.storeReader.readQueryFromStore({
            store: options.optimistic ? this.optimisticData : this.data,
            query: this.transformDocument(options.query),
            variables: options.variables,
            rootId: options.rootId,
            fragmentMatcherFunction: this.config.fragmentMatcher.match,
            previousResult: options.previousResult,
            config: this.config,
        });
    };
    InMemoryCache.prototype.write = function (write) {
        this.storeWriter.writeResultToStore({
            dataId: write.dataId,
            result: write.result,
            variables: write.variables,
            document: this.transformDocument(write.query),
            store: this.data,
            dataIdFromObject: this.config.dataIdFromObject,
            fragmentMatcherFunction: this.config.fragmentMatcher.match,
        });
        this.broadcastWatches();
    };
    InMemoryCache.prototype.diff = function (query) {
        return this.storeReader.diffQueryAgainstStore({
            store: query.optimistic ? this.optimisticData : this.data,
            query: this.transformDocument(query.query),
            variables: query.variables,
            returnPartialData: query.returnPartialData,
            previousResult: query.previousResult,
            fragmentMatcherFunction: this.config.fragmentMatcher.match,
            config: this.config,
        });
    };
    InMemoryCache.prototype.watch = function (watch) {
        var _this = this;
        this.watches.add(watch);
        return function () {
            _this.watches.delete(watch);
        };
    };
    InMemoryCache.prototype.evict = function (query) {
        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_4__["InvariantError"]("eviction is not implemented on InMemory Cache");
    };
    InMemoryCache.prototype.reset = function () {
        this.data.clear();
        this.broadcastWatches();
        return Promise.resolve();
    };
    InMemoryCache.prototype.removeOptimistic = function (idToRemove) {
        var toReapply = [];
        var removedCount = 0;
        var layer = this.optimisticData;
        while (layer instanceof OptimisticCacheLayer) {
            if (layer.optimisticId === idToRemove) {
                ++removedCount;
            }
            else {
                toReapply.push(layer);
            }
            layer = layer.parent;
        }
        if (removedCount > 0) {
            this.optimisticData = layer;
            while (toReapply.length > 0) {
                var layer_1 = toReapply.pop();
                this.performTransaction(layer_1.transaction, layer_1.optimisticId);
            }
            this.broadcastWatches();
        }
    };
    InMemoryCache.prototype.performTransaction = function (transaction, optimisticId) {
        var _a = this, data = _a.data, silenceBroadcast = _a.silenceBroadcast;
        this.silenceBroadcast = true;
        if (typeof optimisticId === 'string') {
            this.data = this.optimisticData = new OptimisticCacheLayer(optimisticId, this.optimisticData, transaction);
        }
        try {
            transaction(this);
        }
        finally {
            this.silenceBroadcast = silenceBroadcast;
            this.data = data;
        }
        this.broadcastWatches();
    };
    InMemoryCache.prototype.recordOptimisticTransaction = function (transaction, id) {
        return this.performTransaction(transaction, id);
    };
    InMemoryCache.prototype.transformDocument = function (document) {
        if (this.addTypename) {
            var result = this.typenameDocumentCache.get(document);
            if (!result) {
                result = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_2__["addTypenameToDocument"])(document);
                this.typenameDocumentCache.set(document, result);
                this.typenameDocumentCache.set(result, result);
            }
            return result;
        }
        return document;
    };
    InMemoryCache.prototype.broadcastWatches = function () {
        var _this = this;
        if (!this.silenceBroadcast) {
            this.watches.forEach(function (c) { return _this.maybeBroadcastWatch(c); });
        }
    };
    InMemoryCache.prototype.maybeBroadcastWatch = function (c) {
        c.callback(this.diff({
            query: c.query,
            variables: c.variables,
            previousResult: c.previousResult && c.previousResult(),
            optimistic: c.optimistic,
        }));
    };
    return InMemoryCache;
}(apollo_cache__WEBPACK_IMPORTED_MODULE_1__["ApolloCache"]));


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-cache-inmemory/node_modules/ts-invariant/lib/invariant.esm.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/apollo-cache-inmemory/node_modules/ts-invariant/lib/invariant.esm.js ***!
  \*******************************************************************************************/
/*! exports provided: default, InvariantError, invariant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvariantError", function() { return InvariantError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
(function (invariant) {
    function warn() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.warn.apply(console, args);
    }
    invariant.warn = warn;
    function error() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.error.apply(console, args);
    }
    invariant.error = error;
})(invariant || (invariant = {}));
var invariant$1 = invariant;

/* harmony default export */ __webpack_exports__["default"] = (invariant$1);



/***/ }),

/***/ "./node_modules/apollo-cache/lib/bundle.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/apollo-cache/lib/bundle.esm.js ***!
  \*****************************************************/
/*! exports provided: ApolloCache, Cache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloCache", function() { return ApolloCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return Cache; });
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/bundle.esm.js");


function queryFromPojo(obj) {
    var op = {
        kind: 'OperationDefinition',
        operation: 'query',
        name: {
            kind: 'Name',
            value: 'GeneratedClientQuery',
        },
        selectionSet: selectionSetFromObj(obj),
    };
    var out = {
        kind: 'Document',
        definitions: [op],
    };
    return out;
}
function fragmentFromPojo(obj, typename) {
    var frag = {
        kind: 'FragmentDefinition',
        typeCondition: {
            kind: 'NamedType',
            name: {
                kind: 'Name',
                value: typename || '__FakeType',
            },
        },
        name: {
            kind: 'Name',
            value: 'GeneratedClientQuery',
        },
        selectionSet: selectionSetFromObj(obj),
    };
    var out = {
        kind: 'Document',
        definitions: [frag],
    };
    return out;
}
function selectionSetFromObj(obj) {
    if (typeof obj === 'number' ||
        typeof obj === 'boolean' ||
        typeof obj === 'string' ||
        typeof obj === 'undefined' ||
        obj === null) {
        return null;
    }
    if (Array.isArray(obj)) {
        return selectionSetFromObj(obj[0]);
    }
    var selections = [];
    Object.keys(obj).forEach(function (key) {
        var nestedSelSet = selectionSetFromObj(obj[key]);
        var field = {
            kind: 'Field',
            name: {
                kind: 'Name',
                value: key,
            },
            selectionSet: nestedSelSet || undefined,
        };
        selections.push(field);
    });
    var selectionSet = {
        kind: 'SelectionSet',
        selections: selections,
    };
    return selectionSet;
}
var justTypenameQuery = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: null,
            variableDefinitions: null,
            directives: [],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        alias: null,
                        name: {
                            kind: 'Name',
                            value: '__typename',
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null,
                    },
                ],
            },
        },
    ],
};

var ApolloCache = (function () {
    function ApolloCache() {
    }
    ApolloCache.prototype.transformDocument = function (document) {
        return document;
    };
    ApolloCache.prototype.transformForLink = function (document) {
        return document;
    };
    ApolloCache.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.read({
            query: options.query,
            variables: options.variables,
            optimistic: optimistic,
        });
    };
    ApolloCache.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.read({
            query: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_0__["getFragmentQueryDocument"])(options.fragment, options.fragmentName),
            variables: options.variables,
            rootId: options.id,
            optimistic: optimistic,
        });
    };
    ApolloCache.prototype.writeQuery = function (options) {
        this.write({
            dataId: 'ROOT_QUERY',
            result: options.data,
            query: options.query,
            variables: options.variables,
        });
    };
    ApolloCache.prototype.writeFragment = function (options) {
        this.write({
            dataId: options.id,
            result: options.data,
            variables: options.variables,
            query: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_0__["getFragmentQueryDocument"])(options.fragment, options.fragmentName),
        });
    };
    ApolloCache.prototype.writeData = function (_a) {
        var id = _a.id, data = _a.data;
        if (typeof id !== 'undefined') {
            var typenameResult = null;
            try {
                typenameResult = this.read({
                    rootId: id,
                    optimistic: false,
                    query: justTypenameQuery,
                });
            }
            catch (e) {
            }
            var __typename = (typenameResult && typenameResult.__typename) || '__ClientData';
            var dataToWrite = Object.assign({ __typename: __typename }, data);
            this.writeFragment({
                id: id,
                fragment: fragmentFromPojo(dataToWrite, __typename),
                data: dataToWrite,
            });
        }
        else {
            this.writeQuery({ query: queryFromPojo(data), data: data });
        }
    };
    return ApolloCache;
}());

var Cache;
(function (Cache) {
})(Cache || (Cache = {}));


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-client/bundle.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/apollo-client/bundle.esm.js ***!
  \**************************************************/
/*! exports provided: default, ApolloClient, ObservableQuery, NetworkStatus, isApolloError, ApolloError, FetchType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloClient", function() { return ApolloClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableQuery", function() { return ObservableQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkStatus", function() { return NetworkStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isApolloError", function() { return isApolloError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloError", function() { return ApolloError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchType", function() { return FetchType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/bundle.esm.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts-invariant */ "./node_modules/apollo-client/node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var apollo_link_dedup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-link-dedup */ "./node_modules/apollo-link-dedup/lib/bundle.esm.js");
/* harmony import */ var graphql_language_visitor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql/language/visitor */ "./node_modules/graphql/language/visitor.mjs");








var NetworkStatus;
(function (NetworkStatus) {
    NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
    NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
    NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
    NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
    NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
    NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
    NetworkStatus[NetworkStatus["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
    return networkStatus < 7;
}

var Observable = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Observable, _super);
    function Observable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Observable.prototype[symbol_observable__WEBPACK_IMPORTED_MODULE_3__["default"]] = function () {
        return this;
    };
    Observable.prototype['@@observable'] = function () {
        return this;
    };
    return Observable;
}(apollo_link__WEBPACK_IMPORTED_MODULE_2__["Observable"]));

function isApolloError(err) {
    return err.hasOwnProperty('graphQLErrors');
}
var generateErrorMessage = function (err) {
    var message = '';
    if (Array.isArray(err.graphQLErrors) && err.graphQLErrors.length !== 0) {
        err.graphQLErrors.forEach(function (graphQLError) {
            var errorMessage = graphQLError
                ? graphQLError.message
                : 'Error message not found.';
            message += "GraphQL error: " + errorMessage + "\n";
        });
    }
    if (err.networkError) {
        message += 'Network error: ' + err.networkError.message + '\n';
    }
    message = message.replace(/\n$/, '');
    return message;
};
var ApolloError = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ApolloError, _super);
    function ApolloError(_a) {
        var graphQLErrors = _a.graphQLErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
        var _this = _super.call(this, errorMessage) || this;
        _this.graphQLErrors = graphQLErrors || [];
        _this.networkError = networkError || null;
        if (!errorMessage) {
            _this.message = generateErrorMessage(_this);
        }
        else {
            _this.message = errorMessage;
        }
        _this.extraInfo = extraInfo;
        _this.__proto__ = ApolloError.prototype;
        return _this;
    }
    return ApolloError;
}(Error));

var FetchType;
(function (FetchType) {
    FetchType[FetchType["normal"] = 1] = "normal";
    FetchType[FetchType["refetch"] = 2] = "refetch";
    FetchType[FetchType["poll"] = 3] = "poll";
})(FetchType || (FetchType = {}));

var hasError = function (storeValue, policy) {
    if (policy === void 0) { policy = 'none'; }
    return storeValue &&
        ((storeValue.graphQLErrors &&
            storeValue.graphQLErrors.length > 0 &&
            policy === 'none') ||
            storeValue.networkError);
};
var ObservableQuery = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ObservableQuery, _super);
    function ObservableQuery(_a) {
        var queryManager = _a.queryManager, options = _a.options, _b = _a.shouldSubscribe, shouldSubscribe = _b === void 0 ? true : _b;
        var _this = _super.call(this, function (observer) {
            return _this.onSubscribe(observer);
        }) || this;
        _this.isTornDown = false;
        _this.options = options;
        _this.variables = options.variables || {};
        _this.queryId = queryManager.generateQueryId();
        _this.shouldSubscribe = shouldSubscribe;
        _this.queryManager = queryManager;
        _this.observers = [];
        _this.subscriptionHandles = [];
        return _this;
    }
    ObservableQuery.prototype.result = function () {
        var that = this;
        return new Promise(function (resolve, reject) {
            var subscription;
            var observer = {
                next: function (result) {
                    resolve(result);
                    if (!that.observers.some(function (obs) { return obs !== observer; })) {
                        that.queryManager.removeQuery(that.queryId);
                    }
                    setTimeout(function () {
                        subscription.unsubscribe();
                    }, 0);
                },
                error: function (error) {
                    reject(error);
                },
            };
            subscription = that.subscribe(observer);
        });
    };
    ObservableQuery.prototype.currentResult = function () {
        var result = this.getCurrentResult();
        if (result.data === undefined) {
            result.data = {};
        }
        return result;
    };
    ObservableQuery.prototype.getCurrentResult = function () {
        if (this.isTornDown) {
            return {
                data: this.lastError
                    ? undefined
                    : this.lastResult
                        ? this.lastResult.data
                        : undefined,
                error: this.lastError,
                loading: false,
                networkStatus: NetworkStatus.error,
            };
        }
        var queryStoreValue = this.queryManager.queryStore.get(this.queryId);
        if (hasError(queryStoreValue, this.options.errorPolicy)) {
            return {
                data: undefined,
                loading: false,
                networkStatus: queryStoreValue.networkStatus,
                error: new ApolloError({
                    graphQLErrors: queryStoreValue.graphQLErrors,
                    networkError: queryStoreValue.networkError,
                }),
            };
        }
        if (queryStoreValue && queryStoreValue.variables) {
            this.options.variables = Object.assign({}, this.options.variables, queryStoreValue.variables);
        }
        var _a = this.queryManager.getCurrentQueryResult(this), data = _a.data, partial = _a.partial;
        var queryLoading = !queryStoreValue ||
            queryStoreValue.networkStatus === NetworkStatus.loading;
        var loading = (this.options.fetchPolicy === 'network-only' && queryLoading) ||
            (partial && this.options.fetchPolicy !== 'cache-only');
        var networkStatus;
        if (queryStoreValue) {
            networkStatus = queryStoreValue.networkStatus;
        }
        else {
            networkStatus = loading ? NetworkStatus.loading : NetworkStatus.ready;
        }
        var result = {
            data: data,
            loading: isNetworkRequestInFlight(networkStatus),
            networkStatus: networkStatus,
        };
        if (queryStoreValue &&
            queryStoreValue.graphQLErrors &&
            this.options.errorPolicy === 'all') {
            result.errors = queryStoreValue.graphQLErrors;
        }
        if (!partial) {
            this.lastResult = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result, { stale: false });
            this.lastResultSnapshot = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.lastResult);
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result, { partial: partial });
    };
    ObservableQuery.prototype.isDifferentFromLastResult = function (newResult) {
        var snapshot = this.lastResultSnapshot;
        return !(snapshot &&
            newResult &&
            snapshot.networkStatus === newResult.networkStatus &&
            snapshot.stale === newResult.stale &&
            Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(snapshot.data, newResult.data));
    };
    ObservableQuery.prototype.getLastResult = function () {
        return this.lastResult;
    };
    ObservableQuery.prototype.getLastError = function () {
        return this.lastError;
    };
    ObservableQuery.prototype.resetLastResults = function () {
        delete this.lastResult;
        delete this.lastResultSnapshot;
        delete this.lastError;
        this.isTornDown = false;
    };
    ObservableQuery.prototype.refetch = function (variables) {
        var fetchPolicy = this.options.fetchPolicy;
        if (fetchPolicy === 'cache-only') {
            return Promise.reject(new Error('cache-only fetchPolicy option should not be used together with query refetch.'));
        }
        if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(this.variables, variables)) {
            this.variables = Object.assign({}, this.variables, variables);
        }
        if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(this.options.variables, this.variables)) {
            this.options.variables = Object.assign({}, this.options.variables, this.variables);
        }
        var isNetworkFetchPolicy = fetchPolicy === 'network-only' || fetchPolicy === 'no-cache';
        var combinedOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options, { fetchPolicy: isNetworkFetchPolicy ? fetchPolicy : 'network-only' });
        return this.queryManager
            .fetchQuery(this.queryId, combinedOptions, FetchType.refetch)
            .then(function (result) { return result; });
    };
    ObservableQuery.prototype.fetchMore = function (fetchMoreOptions) {
        var _this = this;
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(fetchMoreOptions.updateQuery, 'updateQuery option is required. This function defines how to update the query data with the new results.');
        var combinedOptions;
        return Promise.resolve()
            .then(function () {
            var qid = _this.queryManager.generateQueryId();
            if (fetchMoreOptions.query) {
                combinedOptions = fetchMoreOptions;
            }
            else {
                combinedOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.options, fetchMoreOptions, { variables: Object.assign({}, _this.variables, fetchMoreOptions.variables) });
            }
            combinedOptions.fetchPolicy = 'network-only';
            return _this.queryManager.fetchQuery(qid, combinedOptions, FetchType.normal, _this.queryId);
        })
            .then(function (fetchMoreResult) {
            _this.updateQuery(function (previousResult) {
                return fetchMoreOptions.updateQuery(previousResult, {
                    fetchMoreResult: fetchMoreResult.data,
                    variables: combinedOptions.variables,
                });
            });
            return fetchMoreResult;
        });
    };
    ObservableQuery.prototype.subscribeToMore = function (options) {
        var _this = this;
        var subscription = this.queryManager
            .startGraphQLSubscription({
            query: options.document,
            variables: options.variables,
        })
            .subscribe({
            next: function (subscriptionData) {
                if (options.updateQuery) {
                    _this.updateQuery(function (previous, _a) {
                        var variables = _a.variables;
                        return options.updateQuery(previous, {
                            subscriptionData: subscriptionData,
                            variables: variables,
                        });
                    });
                }
            },
            error: function (err) {
                if (options.onError) {
                    options.onError(err);
                    return;
                }
                console.error('Unhandled GraphQL subscription error', err);
            },
        });
        this.subscriptionHandles.push(subscription);
        return function () {
            var i = _this.subscriptionHandles.indexOf(subscription);
            if (i >= 0) {
                _this.subscriptionHandles.splice(i, 1);
                subscription.unsubscribe();
            }
        };
    };
    ObservableQuery.prototype.setOptions = function (opts) {
        var oldOptions = this.options;
        this.options = Object.assign({}, this.options, opts);
        if (opts.pollInterval) {
            this.startPolling(opts.pollInterval);
        }
        else if (opts.pollInterval === 0) {
            this.stopPolling();
        }
        var tryFetch = (oldOptions.fetchPolicy !== 'network-only' &&
            opts.fetchPolicy === 'network-only') ||
            (oldOptions.fetchPolicy === 'cache-only' &&
                opts.fetchPolicy !== 'cache-only') ||
            (oldOptions.fetchPolicy === 'standby' &&
                opts.fetchPolicy !== 'standby') ||
            false;
        return this.setVariables(this.options.variables, tryFetch, opts.fetchResults);
    };
    ObservableQuery.prototype.setVariables = function (variables, tryFetch, fetchResults) {
        if (tryFetch === void 0) { tryFetch = false; }
        if (fetchResults === void 0) { fetchResults = true; }
        this.isTornDown = false;
        var newVariables = variables ? variables : this.variables;
        if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(newVariables, this.variables) && !tryFetch) {
            if (this.observers.length === 0 || !fetchResults) {
                return new Promise(function (resolve) { return resolve(); });
            }
            return this.result();
        }
        else {
            this.variables = newVariables;
            this.options.variables = newVariables;
            if (this.observers.length === 0) {
                return new Promise(function (resolve) { return resolve(); });
            }
            return this.queryManager
                .fetchQuery(this.queryId, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options, { variables: this.variables }))
                .then(function (result) { return result; });
        }
    };
    ObservableQuery.prototype.updateQuery = function (mapFn) {
        var _a = this.queryManager.getQueryWithPreviousResult(this.queryId), previousResult = _a.previousResult, variables = _a.variables, document = _a.document;
        var newResult = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["tryFunctionOrLogError"])(function () {
            return mapFn(previousResult, { variables: variables });
        });
        if (newResult) {
            this.queryManager.dataStore.markUpdateQueryResult(document, variables, newResult);
            this.queryManager.broadcastQueries();
        }
    };
    ObservableQuery.prototype.stopPolling = function () {
        this.queryManager.stopPollingQuery(this.queryId);
        this.options.pollInterval = undefined;
    };
    ObservableQuery.prototype.startPolling = function (pollInterval) {
        assertNotCacheFirstOrOnly(this);
        this.options.pollInterval = pollInterval;
        this.queryManager.startPollingQuery(this.options, this.queryId);
    };
    ObservableQuery.prototype.onSubscribe = function (observer) {
        var _this = this;
        if (observer._subscription &&
            observer._subscription._observer &&
            !observer._subscription._observer.error) {
            observer._subscription._observer.error = function (error) {
                console.error('Unhandled error', error.message, error.stack);
            };
        }
        this.observers.push(observer);
        if (observer.next && this.lastResult)
            observer.next(this.lastResult);
        if (observer.error && this.lastError)
            observer.error(this.lastError);
        if (this.observers.length === 1)
            this.setUpQuery();
        return function () {
            _this.observers = _this.observers.filter(function (obs) { return obs !== observer; });
            if (_this.observers.length === 0) {
                _this.tearDownQuery();
            }
        };
    };
    ObservableQuery.prototype.setUpQuery = function () {
        var _this = this;
        if (this.shouldSubscribe) {
            this.queryManager.addObservableQuery(this.queryId, this);
        }
        if (!!this.options.pollInterval) {
            assertNotCacheFirstOrOnly(this);
            this.queryManager.startPollingQuery(this.options, this.queryId);
        }
        var observer = {
            next: function (result) {
                _this.lastResult = result;
                _this.lastResultSnapshot = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(result);
                _this.observers.forEach(function (obs) { return obs.next && obs.next(result); });
            },
            error: function (error) {
                _this.lastError = error;
                _this.observers.forEach(function (obs) { return obs.error && obs.error(error); });
            },
        };
        this.queryManager.startQuery(this.queryId, this.options, this.queryManager.queryListenerForObserver(this.queryId, this.options, observer));
    };
    ObservableQuery.prototype.tearDownQuery = function () {
        this.isTornDown = true;
        this.queryManager.stopPollingQuery(this.queryId);
        this.subscriptionHandles.forEach(function (sub) { return sub.unsubscribe(); });
        this.subscriptionHandles = [];
        this.queryManager.removeObservableQuery(this.queryId);
        this.queryManager.stopQuery(this.queryId);
        this.observers = [];
    };
    return ObservableQuery;
}(Observable));
function assertNotCacheFirstOrOnly(obsQuery) {
    var fetchPolicy = obsQuery.options.fetchPolicy;
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(fetchPolicy !== 'cache-first' && fetchPolicy !== 'cache-only', 'Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries.');
}

var MutationStore = (function () {
    function MutationStore() {
        this.store = {};
    }
    MutationStore.prototype.getStore = function () {
        return this.store;
    };
    MutationStore.prototype.get = function (mutationId) {
        return this.store[mutationId];
    };
    MutationStore.prototype.initMutation = function (mutationId, mutation, variables) {
        this.store[mutationId] = {
            mutation: mutation,
            variables: variables || {},
            loading: true,
            error: null,
        };
    };
    MutationStore.prototype.markMutationError = function (mutationId, error) {
        var mutation = this.store[mutationId];
        if (!mutation) {
            return;
        }
        mutation.loading = false;
        mutation.error = error;
    };
    MutationStore.prototype.markMutationResult = function (mutationId) {
        var mutation = this.store[mutationId];
        if (!mutation) {
            return;
        }
        mutation.loading = false;
        mutation.error = null;
    };
    MutationStore.prototype.reset = function () {
        this.store = {};
    };
    return MutationStore;
}());

var QueryStore = (function () {
    function QueryStore() {
        this.store = {};
    }
    QueryStore.prototype.getStore = function () {
        return this.store;
    };
    QueryStore.prototype.get = function (queryId) {
        return this.store[queryId];
    };
    QueryStore.prototype.initQuery = function (query) {
        var previousQuery = this.store[query.queryId];
        if (previousQuery &&
            previousQuery.document !== query.document &&
            !Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(previousQuery.document, query.document)) {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_4__["InvariantError"]('Internal Error: may not update existing query string in store');
        }
        var isSetVariables = false;
        var previousVariables = null;
        if (query.storePreviousVariables &&
            previousQuery &&
            previousQuery.networkStatus !== NetworkStatus.loading) {
            if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(previousQuery.variables, query.variables)) {
                isSetVariables = true;
                previousVariables = previousQuery.variables;
            }
        }
        var networkStatus;
        if (isSetVariables) {
            networkStatus = NetworkStatus.setVariables;
        }
        else if (query.isPoll) {
            networkStatus = NetworkStatus.poll;
        }
        else if (query.isRefetch) {
            networkStatus = NetworkStatus.refetch;
        }
        else {
            networkStatus = NetworkStatus.loading;
        }
        var graphQLErrors = [];
        if (previousQuery && previousQuery.graphQLErrors) {
            graphQLErrors = previousQuery.graphQLErrors;
        }
        this.store[query.queryId] = {
            document: query.document,
            variables: query.variables,
            previousVariables: previousVariables,
            networkError: null,
            graphQLErrors: graphQLErrors,
            networkStatus: networkStatus,
            metadata: query.metadata,
        };
        if (typeof query.fetchMoreForQueryId === 'string' &&
            this.store[query.fetchMoreForQueryId]) {
            this.store[query.fetchMoreForQueryId].networkStatus =
                NetworkStatus.fetchMore;
        }
    };
    QueryStore.prototype.markQueryResult = function (queryId, result, fetchMoreForQueryId) {
        if (!this.store || !this.store[queryId])
            return;
        this.store[queryId].networkError = null;
        this.store[queryId].graphQLErrors =
            result.errors && result.errors.length ? result.errors : [];
        this.store[queryId].previousVariables = null;
        this.store[queryId].networkStatus = NetworkStatus.ready;
        if (typeof fetchMoreForQueryId === 'string' &&
            this.store[fetchMoreForQueryId]) {
            this.store[fetchMoreForQueryId].networkStatus = NetworkStatus.ready;
        }
    };
    QueryStore.prototype.markQueryError = function (queryId, error, fetchMoreForQueryId) {
        if (!this.store || !this.store[queryId])
            return;
        this.store[queryId].networkError = error;
        this.store[queryId].networkStatus = NetworkStatus.error;
        if (typeof fetchMoreForQueryId === 'string') {
            this.markQueryResultClient(fetchMoreForQueryId, true);
        }
    };
    QueryStore.prototype.markQueryResultClient = function (queryId, complete) {
        if (!this.store || !this.store[queryId])
            return;
        this.store[queryId].networkError = null;
        this.store[queryId].previousVariables = null;
        this.store[queryId].networkStatus = complete
            ? NetworkStatus.ready
            : NetworkStatus.loading;
    };
    QueryStore.prototype.stopQuery = function (queryId) {
        delete this.store[queryId];
    };
    QueryStore.prototype.reset = function (observableQueryIds) {
        var _this = this;
        this.store = Object.keys(this.store)
            .filter(function (queryId) {
            return observableQueryIds.indexOf(queryId) > -1;
        })
            .reduce(function (res, key) {
            res[key] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.store[key], { networkStatus: NetworkStatus.loading });
            return res;
        }, {});
    };
    return QueryStore;
}());

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var LocalState = (function () {
    function LocalState(_a) {
        var cache = _a.cache, client = _a.client, resolvers = _a.resolvers, fragmentMatcher = _a.fragmentMatcher;
        this.cache = cache;
        if (client) {
            this.client = client;
        }
        if (resolvers) {
            this.addResolvers(resolvers);
        }
        if (fragmentMatcher) {
            this.setFragmentMatcher(fragmentMatcher);
        }
    }
    LocalState.prototype.addResolvers = function (resolvers) {
        var _this = this;
        this.resolvers = this.resolvers || {};
        if (Array.isArray(resolvers)) {
            resolvers.forEach(function (resolverGroup) {
                _this.resolvers = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["mergeDeep"])(_this.resolvers, resolverGroup);
            });
        }
        else {
            this.resolvers = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["mergeDeep"])(this.resolvers, resolvers);
        }
    };
    LocalState.prototype.setResolvers = function (resolvers) {
        this.resolvers = {};
        this.addResolvers(resolvers);
    };
    LocalState.prototype.getResolvers = function () {
        return this.resolvers || {};
    };
    LocalState.prototype.runResolvers = function (_a) {
        var document = _a.document, remoteResult = _a.remoteResult, context = _a.context, variables = _a.variables, _b = _a.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                if (document) {
                    return [2, this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function (localResult) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, remoteResult, { data: localResult.result })); })];
                }
                return [2, remoteResult];
            });
        });
    };
    LocalState.prototype.setFragmentMatcher = function (fragmentMatcher) {
        this.fragmentMatcher = fragmentMatcher;
    };
    LocalState.prototype.getFragmentMatcher = function () {
        return this.fragmentMatcher;
    };
    LocalState.prototype.clientQuery = function (document) {
        if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["hasDirectives"])(['client'], document)) {
            if (this.resolvers) {
                return document;
            }
             false || ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"].warn('Found @client directives in query but no client resolvers were specified. ' +
                'You can now pass apollo-link-state resolvers to the ApolloClient constructor.');
        }
        return null;
    };
    LocalState.prototype.serverQuery = function (document) {
        return this.resolvers ? Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["removeClientSetsFromDocument"])(document) : document;
    };
    LocalState.prototype.prepareContext = function (context) {
        if (context === void 0) { context = {}; }
        var cache = this.cache;
        var newContext = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context, { cache: cache, getCacheKey: function (obj) {
                if (cache.config) {
                    return cache.config.dataIdFromObject(obj);
                }
                else {
                     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(false, 'To use context.getCacheKey, you need to use a cache that has ' +
                        'a configurable dataIdFromObject, like apollo-cache-inmemory.');
                }
            } });
        return newContext;
    };
    LocalState.prototype.addExportedVariables = function (document, variables, context) {
        if (variables === void 0) { variables = {}; }
        if (context === void 0) { context = {}; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (document) {
                    return [2, this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function (data) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, variables, data.exportedVariables)); })];
                }
                return [2, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, variables)];
            });
        });
    };
    LocalState.prototype.shouldForceResolvers = function (document) {
        var forceResolvers = false;
        Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_6__["visit"])(document, {
            Directive: {
                enter: function (node) {
                    if (node.name.value === 'client' && node.arguments) {
                        forceResolvers = node.arguments.some(function (arg) {
                            return arg.name.value === 'always' &&
                                arg.value.kind === 'BooleanValue' &&
                                arg.value.value === true;
                        });
                        if (forceResolvers) {
                            return graphql_language_visitor__WEBPACK_IMPORTED_MODULE_6__["BREAK"];
                        }
                    }
                },
            },
        });
        return forceResolvers;
    };
    LocalState.prototype.shouldForceResolver = function (field) {
        return this.shouldForceResolvers(field);
    };
    LocalState.prototype.buildRootValueFromCache = function (document, variables) {
        return this.cache.diff({
            query: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["buildQueryFromSelectionSet"])(document),
            variables: variables,
            optimistic: false,
        }).result;
    };
    LocalState.prototype.resolveDocument = function (document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
        if (context === void 0) { context = {}; }
        if (variables === void 0) { variables = {}; }
        if (fragmentMatcher === void 0) { fragmentMatcher = function () { return true; }; }
        if (onlyRunForcedResolvers === void 0) { onlyRunForcedResolvers = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a, cache, client, execContext;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                mainDefinition = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getMainDefinition"])(document);
                fragments = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getFragmentDefinitions"])(document);
                fragmentMap = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["createFragmentMap"])(fragments);
                definitionOperation = mainDefinition
                    .operation;
                defaultOperationType = definitionOperation
                    ? capitalizeFirstLetter(definitionOperation)
                    : 'Query';
                _a = this, cache = _a.cache, client = _a.client;
                execContext = {
                    fragmentMap: fragmentMap,
                    context: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context, { cache: cache,
                        client: client }),
                    variables: variables,
                    fragmentMatcher: fragmentMatcher,
                    defaultOperationType: defaultOperationType,
                    exportedVariables: {},
                    onlyRunForcedResolvers: onlyRunForcedResolvers,
                };
                return [2, this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function (result) { return ({
                        result: result,
                        exportedVariables: execContext.exportedVariables,
                    }); })];
            });
        });
    };
    LocalState.prototype.resolveSelectionSet = function (selectionSet, rootValue, execContext) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var fragmentMap, context, variables, resultsToMerge, execute;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
                resultsToMerge = [rootValue];
                execute = function (selection) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    var fragment, typeCondition;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["shouldInclude"])(selection, variables)) {
                            return [2];
                        }
                        if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isField"])(selection)) {
                            return [2, this.resolveField(selection, rootValue, execContext).then(function (fieldResult) {
                                    var _a;
                                    if (typeof fieldResult !== 'undefined') {
                                        resultsToMerge.push((_a = {},
                                            _a[Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["resultKeyNameFromField"])(selection)] = fieldResult,
                                            _a));
                                    }
                                })];
                        }
                        if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["isInlineFragment"])(selection)) {
                            fragment = selection;
                        }
                        else {
                            fragment = fragmentMap[selection.name.value];
                             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(fragment, "No fragment named " + selection.name.value);
                        }
                        if (fragment && fragment.typeCondition) {
                            typeCondition = fragment.typeCondition.name.value;
                            if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                                return [2, this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function (fragmentResult) {
                                        resultsToMerge.push(fragmentResult);
                                    })];
                            }
                        }
                        return [2];
                    });
                }); };
                return [2, Promise.all(selectionSet.selections.map(execute)).then(function () {
                        return Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["mergeDeepArray"])(resultsToMerge);
                    })];
            });
        });
    };
    LocalState.prototype.resolveField = function (field, rootValue, execContext) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                variables = execContext.variables;
                fieldName = field.name.value;
                aliasedFieldName = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["resultKeyNameFromField"])(field);
                aliasUsed = fieldName !== aliasedFieldName;
                defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
                resultPromise = Promise.resolve(defaultResult);
                if (!execContext.onlyRunForcedResolvers ||
                    this.shouldForceResolver(field)) {
                    resolverType = rootValue.__typename || execContext.defaultOperationType;
                    resolverMap = this.resolvers && this.resolvers[resolverType];
                    if (resolverMap) {
                        resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
                        if (resolve) {
                            resultPromise = Promise.resolve(resolve(rootValue, Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["argumentsObjectFromField"])(field, variables), execContext.context, { field: field }));
                        }
                    }
                }
                return [2, resultPromise.then(function (result) {
                        if (result === void 0) { result = defaultResult; }
                        if (field.directives) {
                            field.directives.forEach(function (directive) {
                                if (directive.name.value === 'export' && directive.arguments) {
                                    directive.arguments.forEach(function (arg) {
                                        if (arg.name.value === 'as' && arg.value.kind === 'StringValue') {
                                            execContext.exportedVariables[arg.value.value] = result;
                                        }
                                    });
                                }
                            });
                        }
                        if (!field.selectionSet) {
                            return result;
                        }
                        if (result == null) {
                            return result;
                        }
                        if (Array.isArray(result)) {
                            return _this.resolveSubSelectedArray(field, result, execContext);
                        }
                        if (field.selectionSet) {
                            return _this.resolveSelectionSet(field.selectionSet, result, execContext);
                        }
                    })];
            });
        });
    };
    LocalState.prototype.resolveSubSelectedArray = function (field, result, execContext) {
        var _this = this;
        return Promise.all(result.map(function (item) {
            if (item === null) {
                return null;
            }
            if (Array.isArray(item)) {
                return _this.resolveSubSelectedArray(field, item, execContext);
            }
            if (field.selectionSet) {
                return _this.resolveSelectionSet(field.selectionSet, item, execContext);
            }
        }));
    };
    return LocalState;
}());

var QueryManager = (function () {
    function QueryManager(_a) {
        var link = _a.link, _b = _a.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, store = _a.store, _c = _a.onBroadcast, onBroadcast = _c === void 0 ? function () { return undefined; } : _c, _d = _a.ssrMode, ssrMode = _d === void 0 ? false : _d, _e = _a.clientAwareness, clientAwareness = _e === void 0 ? {} : _e, localState = _a.localState;
        this.mutationStore = new MutationStore();
        this.queryStore = new QueryStore();
        this.clientAwareness = {};
        this.idCounter = 1;
        this.queries = new Map();
        this.fetchQueryRejectFns = new Map();
        this.queryIdsByName = {};
        this.pollingInfoByQueryId = new Map();
        this.nextPoll = null;
        this.link = link;
        this.deduplicator = apollo_link__WEBPACK_IMPORTED_MODULE_2__["ApolloLink"].from([new apollo_link_dedup__WEBPACK_IMPORTED_MODULE_5__["DedupLink"](), link]);
        this.queryDeduplication = queryDeduplication;
        this.dataStore = store;
        this.onBroadcast = onBroadcast;
        this.clientAwareness = clientAwareness;
        this.localState = localState || new LocalState({ cache: store.getCache() });
        this.ssrMode = ssrMode;
    }
    QueryManager.prototype.stop = function () {
        var _this = this;
        this.queries.forEach(function (_info, queryId) {
            _this.stopQueryNoBroadcast(queryId);
        });
        this.fetchQueryRejectFns.forEach(function (reject) {
            reject(new Error('QueryManager stopped while query was in flight'));
        });
    };
    QueryManager.prototype.mutate = function (_a) {
        var mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, updateQueriesByName = _a.updateQueries, _b = _a.refetchQueries, refetchQueries = _b === void 0 ? [] : _b, _c = _a.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c, updateWithProxyFn = _a.update, _d = _a.errorPolicy, errorPolicy = _d === void 0 ? 'none' : _d, fetchPolicy = _a.fetchPolicy, _e = _a.context, context = _e === void 0 ? {} : _e;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var mutationId, cache, generateUpdateQueriesInfo, updatedVariables, _f;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_g) {
                switch (_g.label) {
                    case 0:
                         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(mutation, 'mutation option is required. You must specify your GraphQL document in the mutation option.');
                         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(!fetchPolicy || fetchPolicy === 'no-cache', "fetchPolicy for mutations currently only supports the 'no-cache' policy");
                        mutationId = this.generateQueryId();
                        cache = this.dataStore.getCache();
                        (mutation = cache.transformDocument(mutation)),
                            (variables = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["assign"])({}, Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getDefaultValues"])(Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getMutationDefinition"])(mutation)), variables));
                        this.setQuery(mutationId, function () { return ({ document: mutation }); });
                        generateUpdateQueriesInfo = function () {
                            var ret = {};
                            if (updateQueriesByName) {
                                Object.keys(updateQueriesByName).forEach(function (queryName) {
                                    return (_this.queryIdsByName[queryName] || []).forEach(function (queryId) {
                                        ret[queryId] = {
                                            updater: updateQueriesByName[queryName],
                                            query: _this.queryStore.get(queryId),
                                        };
                                    });
                                });
                            }
                            return ret;
                        };
                        if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["hasClientExports"])(mutation)) return [3, 2];
                        return [4, this.localState.addExportedVariables(mutation, variables, context)];
                    case 1:
                        _f = _g.sent();
                        return [3, 3];
                    case 2:
                        _f = variables;
                        _g.label = 3;
                    case 3:
                        updatedVariables = _f;
                        this.mutationStore.initMutation(mutationId, mutation, updatedVariables);
                        this.dataStore.markMutationInit({
                            mutationId: mutationId,
                            document: mutation,
                            variables: updatedVariables || {},
                            updateQueries: generateUpdateQueriesInfo(),
                            update: updateWithProxyFn,
                            optimisticResponse: optimisticResponse,
                        });
                        this.broadcastQueries();
                        return [2, new Promise(function (resolve, reject) {
                                var storeResult;
                                var error;
                                var operation = _this.buildOperationForLink(mutation, updatedVariables, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context, { optimisticResponse: optimisticResponse }));
                                var completeMutation = function () {
                                    if (error) {
                                        _this.mutationStore.markMutationError(mutationId, error);
                                    }
                                    _this.dataStore.markMutationComplete({
                                        mutationId: mutationId,
                                        optimisticResponse: optimisticResponse,
                                    });
                                    _this.broadcastQueries();
                                    if (error) {
                                        return Promise.reject(error);
                                    }
                                    if (typeof refetchQueries === 'function') {
                                        refetchQueries = refetchQueries(storeResult);
                                    }
                                    var refetchQueryPromises = [];
                                    for (var _i = 0, refetchQueries_1 = refetchQueries; _i < refetchQueries_1.length; _i++) {
                                        var refetchQuery = refetchQueries_1[_i];
                                        if (typeof refetchQuery === 'string') {
                                            var promise = _this.refetchQueryByName(refetchQuery);
                                            if (promise) {
                                                refetchQueryPromises.push(promise);
                                            }
                                            continue;
                                        }
                                        var queryOptions = {
                                            query: refetchQuery.query,
                                            variables: refetchQuery.variables,
                                            fetchPolicy: 'network-only',
                                        };
                                        if (refetchQuery.context) {
                                            queryOptions.context = refetchQuery.context;
                                        }
                                        refetchQueryPromises.push(_this.query(queryOptions));
                                    }
                                    return Promise.all(awaitRefetchQueries ? refetchQueryPromises : []).then(function () {
                                        _this.setQuery(mutationId, function () { return ({ document: null }); });
                                        if (errorPolicy === 'ignore' &&
                                            storeResult &&
                                            Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(storeResult)) {
                                            delete storeResult.errors;
                                        }
                                        return storeResult;
                                    });
                                };
                                var clientQuery = _this.localState.clientQuery(operation.query);
                                var serverQuery = _this.localState.serverQuery(operation.query);
                                if (serverQuery) {
                                    operation.query = serverQuery;
                                }
                                var obs = serverQuery
                                    ? Object(apollo_link__WEBPACK_IMPORTED_MODULE_2__["execute"])(_this.link, operation)
                                    : Observable.of({
                                        data: {},
                                    });
                                var self = _this;
                                var complete = false;
                                var handlingNext = false;
                                obs.subscribe({
                                    next: function (result) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                        var updatedResult, context, variables;
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    handlingNext = true;
                                                    if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(result) && errorPolicy === 'none') {
                                                        handlingNext = false;
                                                        error = new ApolloError({
                                                            graphQLErrors: result.errors,
                                                        });
                                                        return [2];
                                                    }
                                                    self.mutationStore.markMutationResult(mutationId);
                                                    updatedResult = result;
                                                    context = operation.context, variables = operation.variables;
                                                    if (!(clientQuery && Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["hasDirectives"])(['client'], clientQuery))) return [3, 2];
                                                    return [4, self.localState
                                                            .runResolvers({
                                                            document: clientQuery,
                                                            remoteResult: result,
                                                            context: context,
                                                            variables: variables,
                                                        })
                                                            .catch(function (error) {
                                                            handlingNext = false;
                                                            reject(error);
                                                            return result;
                                                        })];
                                                case 1:
                                                    updatedResult = _a.sent();
                                                    _a.label = 2;
                                                case 2:
                                                    if (fetchPolicy !== 'no-cache') {
                                                        self.dataStore.markMutationResult({
                                                            mutationId: mutationId,
                                                            result: updatedResult,
                                                            document: mutation,
                                                            variables: updatedVariables || {},
                                                            updateQueries: generateUpdateQueriesInfo(),
                                                            update: updateWithProxyFn,
                                                        });
                                                    }
                                                    storeResult = updatedResult;
                                                    handlingNext = false;
                                                    if (complete) {
                                                        completeMutation().then(resolve, reject);
                                                    }
                                                    return [2];
                                            }
                                        });
                                    }); },
                                    error: function (err) {
                                        self.mutationStore.markMutationError(mutationId, err);
                                        self.dataStore.markMutationComplete({
                                            mutationId: mutationId,
                                            optimisticResponse: optimisticResponse,
                                        });
                                        self.broadcastQueries();
                                        self.setQuery(mutationId, function () { return ({ document: null }); });
                                        reject(new ApolloError({
                                            networkError: err,
                                        }));
                                    },
                                    complete: function () {
                                        if (!handlingNext) {
                                            completeMutation().then(resolve, reject);
                                        }
                                        complete = true;
                                    },
                                });
                            })];
                }
            });
        });
    };
    QueryManager.prototype.fetchQuery = function (queryId, options, fetchType, fetchMoreForQueryId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, variables, _b, metadata, _c, fetchPolicy, _d, context, cache, query, updatedVariables, _e, updatedOptions, storeResult, needToFetch, _f, complete, result, shouldFetch, requestId, cancel, shouldDispatchClientResult, networkResult;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _a = options.variables, variables = _a === void 0 ? {} : _a, _b = options.metadata, metadata = _b === void 0 ? null : _b, _c = options.fetchPolicy, fetchPolicy = _c === void 0 ? 'cache-first' : _c, _d = options.context, context = _d === void 0 ? {} : _d;
                        cache = this.dataStore.getCache();
                        query = cache.transformDocument(options.query);
                        if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["hasClientExports"])(query)) return [3, 2];
                        return [4, this.localState.addExportedVariables(query, variables, context)];
                    case 1:
                        _e = _g.sent();
                        return [3, 3];
                    case 2:
                        _e = variables;
                        _g.label = 3;
                    case 3:
                        updatedVariables = _e;
                        updatedOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options, { variables: updatedVariables });
                        needToFetch = fetchPolicy === 'network-only' || fetchPolicy === 'no-cache';
                        if (fetchType !== FetchType.refetch &&
                            fetchPolicy !== 'network-only' &&
                            fetchPolicy !== 'no-cache') {
                            _f = this.dataStore.getCache().diff({
                                query: query,
                                variables: updatedVariables,
                                returnPartialData: true,
                                optimistic: false,
                            }), complete = _f.complete, result = _f.result;
                            needToFetch = !complete || fetchPolicy === 'cache-and-network';
                            storeResult = result;
                        }
                        shouldFetch = needToFetch && fetchPolicy !== 'cache-only' && fetchPolicy !== 'standby';
                        if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["hasDirectives"])(['live'], query))
                            shouldFetch = true;
                        requestId = this.generateRequestId();
                        cancel = this.updateQueryWatch(queryId, query, updatedOptions);
                        this.setQuery(queryId, function () { return ({
                            document: query,
                            lastRequestId: requestId,
                            invalidated: true,
                            cancel: cancel,
                        }); });
                        this.invalidate(true, fetchMoreForQueryId);
                        this.queryStore.initQuery({
                            queryId: queryId,
                            document: query,
                            storePreviousVariables: shouldFetch,
                            variables: updatedVariables,
                            isPoll: fetchType === FetchType.poll,
                            isRefetch: fetchType === FetchType.refetch,
                            metadata: metadata,
                            fetchMoreForQueryId: fetchMoreForQueryId,
                        });
                        this.broadcastQueries();
                        shouldDispatchClientResult = !shouldFetch || fetchPolicy === 'cache-and-network';
                        if (shouldDispatchClientResult) {
                            this.queryStore.markQueryResultClient(queryId, !shouldFetch);
                            this.invalidate(true, queryId, fetchMoreForQueryId);
                            this.broadcastQueries(this.localState.shouldForceResolvers(query));
                        }
                        if (shouldFetch) {
                            networkResult = this.fetchRequest({
                                requestId: requestId,
                                queryId: queryId,
                                document: query,
                                options: updatedOptions,
                                fetchMoreForQueryId: fetchMoreForQueryId,
                            }).catch(function (error) {
                                if (isApolloError(error)) {
                                    throw error;
                                }
                                else {
                                    var lastRequestId = _this.getQuery(queryId).lastRequestId;
                                    if (requestId >= (lastRequestId || 1)) {
                                        _this.queryStore.markQueryError(queryId, error, fetchMoreForQueryId);
                                        _this.invalidate(true, queryId, fetchMoreForQueryId);
                                        _this.broadcastQueries();
                                    }
                                    throw new ApolloError({ networkError: error });
                                }
                            });
                            if (fetchPolicy !== 'cache-and-network') {
                                return [2, networkResult];
                            }
                            else {
                                networkResult.catch(function () { });
                            }
                        }
                        return [2, Promise.resolve({ data: storeResult })];
                }
            });
        });
    };
    QueryManager.prototype.queryListenerForObserver = function (queryId, options, observer) {
        var _this = this;
        var previouslyHadError = false;
        return function (queryStoreValue, newData, forceResolvers) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var observableQuery, fetchPolicy, errorPolicy, lastResult, lastError, shouldNotifyIfLoading, networkStatusChanged, errorStatusChanged, apolloError_1, data, isMissing, document_1, readResult, resultFromStore, query, variables, context, updatedResult, e_1, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.invalidate(false, queryId);
                        if (!queryStoreValue)
                            return [2];
                        observableQuery = this.getQuery(queryId).observableQuery;
                        fetchPolicy = observableQuery
                            ? observableQuery.options.fetchPolicy
                            : options.fetchPolicy;
                        if (fetchPolicy === 'standby')
                            return [2];
                        errorPolicy = observableQuery
                            ? observableQuery.options.errorPolicy
                            : options.errorPolicy;
                        lastResult = observableQuery
                            ? observableQuery.getLastResult()
                            : null;
                        lastError = observableQuery ? observableQuery.getLastError() : null;
                        shouldNotifyIfLoading = (!newData && queryStoreValue.previousVariables != null) ||
                            fetchPolicy === 'cache-only' ||
                            fetchPolicy === 'cache-and-network';
                        networkStatusChanged = Boolean(lastResult &&
                            queryStoreValue.networkStatus !== lastResult.networkStatus);
                        errorStatusChanged = errorPolicy &&
                            (lastError && lastError.graphQLErrors) !==
                                queryStoreValue.graphQLErrors &&
                            errorPolicy !== 'none';
                        if (!(!isNetworkRequestInFlight(queryStoreValue.networkStatus) ||
                            (networkStatusChanged && options.notifyOnNetworkStatusChange) ||
                            shouldNotifyIfLoading)) return [3, 8];
                        if (((!errorPolicy || errorPolicy === 'none') &&
                            queryStoreValue.graphQLErrors &&
                            queryStoreValue.graphQLErrors.length > 0) ||
                            queryStoreValue.networkError) {
                            apolloError_1 = new ApolloError({
                                graphQLErrors: queryStoreValue.graphQLErrors,
                                networkError: queryStoreValue.networkError,
                            });
                            previouslyHadError = true;
                            if (observer.error) {
                                try {
                                    observer.error(apolloError_1);
                                }
                                catch (e) {
                                    setTimeout(function () {
                                        throw e;
                                    }, 0);
                                }
                            }
                            else {
                                setTimeout(function () {
                                    throw apolloError_1;
                                }, 0);
                                if (true) {
                                    console.info('An unhandled error was thrown because no error handler is registered ' +
                                        'for the query ' +
                                        JSON.stringify(queryStoreValue.document));
                                }
                            }
                            return [2];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        data = void 0;
                        isMissing = void 0;
                        if (newData) {
                            if (fetchPolicy !== 'no-cache' && fetchPolicy !== 'network-only') {
                                this.setQuery(queryId, function () { return ({ newData: null }); });
                            }
                            data = newData.result;
                            isMissing = !newData.complete || false;
                        }
                        else {
                            if (lastResult && lastResult.data && !errorStatusChanged) {
                                data = lastResult.data;
                                isMissing = false;
                            }
                            else {
                                document_1 = this.getQuery(queryId).document;
                                readResult = this.dataStore.getCache().diff({
                                    query: document_1,
                                    variables: queryStoreValue.previousVariables ||
                                        queryStoreValue.variables,
                                    optimistic: true,
                                });
                                data = readResult.result;
                                isMissing = !readResult.complete;
                            }
                        }
                        resultFromStore = void 0;
                        if (isMissing && fetchPolicy !== 'cache-only') {
                            resultFromStore = {
                                data: lastResult && lastResult.data,
                                loading: isNetworkRequestInFlight(queryStoreValue.networkStatus),
                                networkStatus: queryStoreValue.networkStatus,
                                stale: true,
                            };
                        }
                        else {
                            resultFromStore = {
                                data: data,
                                loading: isNetworkRequestInFlight(queryStoreValue.networkStatus),
                                networkStatus: queryStoreValue.networkStatus,
                                stale: false,
                            };
                        }
                        if (errorPolicy === 'all' &&
                            queryStoreValue.graphQLErrors &&
                            queryStoreValue.graphQLErrors.length > 0) {
                            resultFromStore.errors = queryStoreValue.graphQLErrors;
                        }
                        if (!observer.next) return [3, 6];
                        if (!(previouslyHadError ||
                            !observableQuery ||
                            observableQuery.isDifferentFromLastResult(resultFromStore))) return [3, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        if (!forceResolvers) return [3, 4];
                        query = options.query, variables = options.variables, context = options.context;
                        return [4, this.localState.runResolvers({
                                document: query,
                                remoteResult: resultFromStore,
                                context: context,
                                variables: variables,
                                onlyRunForcedResolvers: forceResolvers,
                            })];
                    case 3:
                        updatedResult = _a.sent();
                        resultFromStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, resultFromStore, updatedResult);
                        _a.label = 4;
                    case 4:
                        observer.next(resultFromStore);
                        return [3, 6];
                    case 5:
                        e_1 = _a.sent();
                        setTimeout(function () {
                            throw e_1;
                        }, 0);
                        return [3, 6];
                    case 6:
                        previouslyHadError = false;
                        return [3, 8];
                    case 7:
                        error_1 = _a.sent();
                        previouslyHadError = true;
                        if (observer.error)
                            observer.error(new ApolloError({ networkError: error_1 }));
                        return [2];
                    case 8: return [2];
                }
            });
        }); };
    };
    QueryManager.prototype.watchQuery = function (options, shouldSubscribe) {
        if (shouldSubscribe === void 0) { shouldSubscribe = true; }
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(options.fetchPolicy !== 'standby', 'client.watchQuery cannot be called with fetchPolicy set to "standby"');
        var queryDefinition = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getQueryDefinition"])(options.query);
        if (queryDefinition.variableDefinitions &&
            queryDefinition.variableDefinitions.length) {
            var defaultValues = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getDefaultValues"])(queryDefinition);
            options.variables = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["assign"])({}, defaultValues, options.variables);
        }
        if (typeof options.notifyOnNetworkStatusChange === 'undefined') {
            options.notifyOnNetworkStatusChange = false;
        }
        var transformedOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options);
        return new ObservableQuery({
            queryManager: this,
            options: transformedOptions,
            shouldSubscribe: shouldSubscribe,
        });
    };
    QueryManager.prototype.query = function (options) {
        var _this = this;
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(options.query, 'query option is required. You must specify your GraphQL document ' +
            'in the query option.');
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(options.query.kind === 'Document', 'You must wrap the query string in a "gql" tag.');
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(!options.returnPartialData, 'returnPartialData option only supported on watchQuery.');
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(!options.pollInterval, 'pollInterval option only supported on watchQuery.');
        return new Promise(function (resolve, reject) {
            var watchedQuery = _this.watchQuery(options, false);
            _this.fetchQueryRejectFns.set("query:" + watchedQuery.queryId, reject);
            watchedQuery
                .result()
                .then(resolve, reject)
                .then(function () {
                return _this.fetchQueryRejectFns.delete("query:" + watchedQuery.queryId);
            });
        });
    };
    QueryManager.prototype.generateQueryId = function () {
        var queryId = this.idCounter.toString();
        this.idCounter++;
        return queryId;
    };
    QueryManager.prototype.stopQueryInStore = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryInStoreNoBroadcast = function (queryId) {
        this.stopPollingQuery(queryId);
        this.queryStore.stopQuery(queryId);
        this.invalidate(true, queryId);
    };
    QueryManager.prototype.addQueryListener = function (queryId, listener) {
        this.setQuery(queryId, function (_a) {
            var _b = _a.listeners, listeners = _b === void 0 ? [] : _b;
            return ({
                listeners: listeners.concat([listener]),
                invalidated: false,
            });
        });
    };
    QueryManager.prototype.updateQueryWatch = function (queryId, document, options) {
        var _this = this;
        var cancel = this.getQuery(queryId).cancel;
        if (cancel)
            cancel();
        var previousResult = function () {
            var previousResult = null;
            var observableQuery = _this.getQuery(queryId).observableQuery;
            if (observableQuery) {
                var lastResult = observableQuery.getLastResult();
                if (lastResult) {
                    previousResult = lastResult.data;
                }
            }
            return previousResult;
        };
        return this.dataStore.getCache().watch({
            query: document,
            variables: options.variables,
            optimistic: true,
            previousResult: previousResult,
            callback: function (newData) {
                _this.setQuery(queryId, function () { return ({ invalidated: true, newData: newData }); });
            },
        });
    };
    QueryManager.prototype.addObservableQuery = function (queryId, observableQuery) {
        this.setQuery(queryId, function () { return ({ observableQuery: observableQuery }); });
        var queryDef = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getQueryDefinition"])(observableQuery.options.query);
        if (queryDef.name && queryDef.name.value) {
            var queryName = queryDef.name.value;
            this.queryIdsByName[queryName] = this.queryIdsByName[queryName] || [];
            this.queryIdsByName[queryName].push(observableQuery.queryId);
        }
    };
    QueryManager.prototype.removeObservableQuery = function (queryId) {
        var _a = this.getQuery(queryId), observableQuery = _a.observableQuery, cancel = _a.cancel;
        if (cancel)
            cancel();
        if (!observableQuery)
            return;
        var definition = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getQueryDefinition"])(observableQuery.options.query);
        var queryName = definition.name ? definition.name.value : null;
        this.setQuery(queryId, function () { return ({ observableQuery: null }); });
        if (queryName) {
            this.queryIdsByName[queryName] = this.queryIdsByName[queryName].filter(function (val) {
                return !(observableQuery.queryId === val);
            });
        }
    };
    QueryManager.prototype.clearStore = function () {
        this.fetchQueryRejectFns.forEach(function (reject) {
            reject(new Error('Store reset while query was in flight(not completed in link chain)'));
        });
        var resetIds = [];
        this.queries.forEach(function (_a, queryId) {
            var observableQuery = _a.observableQuery;
            if (observableQuery)
                resetIds.push(queryId);
        });
        this.queryStore.reset(resetIds);
        this.mutationStore.reset();
        var reset = this.dataStore.reset();
        return reset;
    };
    QueryManager.prototype.resetStore = function () {
        var _this = this;
        return this.clearStore().then(function () {
            return _this.reFetchObservableQueries();
        });
    };
    QueryManager.prototype.reFetchObservableQueries = function (includeStandby) {
        var observableQueryPromises = this.getObservableQueryPromises(includeStandby);
        this.broadcastQueries();
        return Promise.all(observableQueryPromises);
    };
    QueryManager.prototype.startQuery = function (queryId, options, listener) {
        this.addQueryListener(queryId, listener);
        this.fetchQuery(queryId, options)
            .catch(function () { return undefined; });
        return queryId;
    };
    QueryManager.prototype.startGraphQLSubscription = function (options) {
        var _this = this;
        var query = options.query;
        var isCacheEnabled = !(options.fetchPolicy && options.fetchPolicy === 'no-cache');
        var cache = this.dataStore.getCache();
        var transformedDoc = cache.transformDocument(query);
        var variables = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["assign"])({}, Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getDefaultValues"])(Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getOperationDefinition"])(query)), options.variables);
        var updatedVariables = variables;
        var sub;
        var observers = [];
        var clientQuery = this.localState.clientQuery(transformedDoc);
        return new Observable(function (observer) {
            observers.push(observer);
            if (observers.length === 1) {
                var activeNextCalls_1 = 0;
                var complete_1 = false;
                var handler_1 = {
                    next: function (result) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var updatedResult;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    activeNextCalls_1 += 1;
                                    updatedResult = result;
                                    if (!(clientQuery && Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["hasDirectives"])(['client'], clientQuery))) return [3, 2];
                                    return [4, this.localState.runResolvers({
                                            document: clientQuery,
                                            remoteResult: result,
                                            context: {},
                                            variables: updatedVariables,
                                        })];
                                case 1:
                                    updatedResult = _a.sent();
                                    _a.label = 2;
                                case 2:
                                    if (isCacheEnabled) {
                                        this.dataStore.markSubscriptionResult(updatedResult, transformedDoc, updatedVariables);
                                        this.broadcastQueries();
                                    }
                                    observers.forEach(function (obs) {
                                        if (Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(updatedResult) && obs.error) {
                                            obs.error(new ApolloError({
                                                graphQLErrors: updatedResult.errors,
                                            }));
                                        }
                                        else if (obs.next) {
                                            obs.next(updatedResult);
                                        }
                                        activeNextCalls_1 -= 1;
                                    });
                                    if (activeNextCalls_1 === 0 && complete_1) {
                                        handler_1.complete();
                                    }
                                    return [2];
                            }
                        });
                    }); },
                    error: function (error) {
                        observers.forEach(function (obs) {
                            if (obs.error) {
                                obs.error(error);
                            }
                        });
                    },
                    complete: function () {
                        if (activeNextCalls_1 === 0) {
                            observers.forEach(function (obs) {
                                if (obs.complete) {
                                    obs.complete();
                                }
                            });
                        }
                        complete_1 = true;
                    }
                };
                (function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    var updatedVariables, _a, serverQuery, operation;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["hasClientExports"])(transformedDoc)) return [3, 2];
                                return [4, this.localState.addExportedVariables(transformedDoc, variables)];
                            case 1:
                                _a = _b.sent();
                                return [3, 3];
                            case 2:
                                _a = variables;
                                _b.label = 3;
                            case 3:
                                updatedVariables = _a;
                                serverQuery = this.localState.serverQuery(transformedDoc);
                                if (serverQuery) {
                                    operation = this.buildOperationForLink(serverQuery, updatedVariables);
                                    sub = Object(apollo_link__WEBPACK_IMPORTED_MODULE_2__["execute"])(this.link, operation).subscribe(handler_1);
                                }
                                else {
                                    sub = Observable.of({ data: {} }).subscribe(handler_1);
                                }
                                return [2];
                        }
                    });
                }); })();
            }
            return function () {
                observers = observers.filter(function (obs) { return obs !== observer; });
                if (observers.length === 0 && sub) {
                    sub.unsubscribe();
                }
            };
        });
    };
    QueryManager.prototype.stopQuery = function (queryId) {
        this.stopQueryNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryNoBroadcast = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.removeQuery(queryId);
    };
    QueryManager.prototype.removeQuery = function (queryId) {
        var subscriptions = this.getQuery(queryId).subscriptions;
        this.fetchQueryRejectFns.delete("query:" + queryId);
        this.fetchQueryRejectFns.delete("fetchRequest:" + queryId);
        subscriptions.forEach(function (x) { return x.unsubscribe(); });
        this.queries.delete(queryId);
    };
    QueryManager.prototype.getCurrentQueryResult = function (observableQuery, optimistic) {
        if (optimistic === void 0) { optimistic = true; }
        var _a = observableQuery.options, variables = _a.variables, query = _a.query, fetchPolicy = _a.fetchPolicy;
        var lastResult = observableQuery.getLastResult();
        var newData = this.getQuery(observableQuery.queryId).newData;
        if (newData && newData.complete) {
            return { data: newData.result, partial: false };
        }
        else if (fetchPolicy === 'no-cache' || fetchPolicy === 'network-only') {
            return { data: undefined, partial: false };
        }
        else {
            try {
                var data = this.dataStore.getCache().read({
                    query: query,
                    variables: variables,
                    previousResult: lastResult ? lastResult.data : undefined,
                    optimistic: optimistic,
                }) || undefined;
                return { data: data, partial: false };
            }
            catch (e) {
                return { data: undefined, partial: true };
            }
        }
    };
    QueryManager.prototype.getQueryWithPreviousResult = function (queryIdOrObservable) {
        var observableQuery;
        if (typeof queryIdOrObservable === 'string') {
            var foundObserveableQuery = this.getQuery(queryIdOrObservable).observableQuery;
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(foundObserveableQuery, "ObservableQuery with this id doesn't exist: " + queryIdOrObservable);
            observableQuery = foundObserveableQuery;
        }
        else {
            observableQuery = queryIdOrObservable;
        }
        var _a = observableQuery.options, variables = _a.variables, query = _a.query;
        var data = this.getCurrentQueryResult(observableQuery, false).data;
        return {
            previousResult: data,
            variables: variables,
            document: query,
        };
    };
    QueryManager.prototype.broadcastQueries = function (forceResolvers) {
        var _this = this;
        if (forceResolvers === void 0) { forceResolvers = false; }
        this.onBroadcast();
        this.queries.forEach(function (info, id) {
            if (!info.invalidated || !info.listeners)
                return;
            info.listeners
                .filter(function (x) { return !!x; })
                .forEach(function (listener) {
                listener(_this.queryStore.get(id), info.newData, forceResolvers);
            });
        });
    };
    QueryManager.prototype.getLocalState = function () {
        return this.localState;
    };
    QueryManager.prototype.getObservableQueryPromises = function (includeStandby) {
        var _this = this;
        var observableQueryPromises = [];
        this.queries.forEach(function (_a, queryId) {
            var observableQuery = _a.observableQuery;
            if (!observableQuery)
                return;
            var fetchPolicy = observableQuery.options.fetchPolicy;
            observableQuery.resetLastResults();
            if (fetchPolicy !== 'cache-only' &&
                (includeStandby || fetchPolicy !== 'standby')) {
                observableQueryPromises.push(observableQuery.refetch());
            }
            _this.setQuery(queryId, function () { return ({ newData: null }); });
            _this.invalidate(true, queryId);
        });
        return observableQueryPromises;
    };
    QueryManager.prototype.fetchRequest = function (_a) {
        var _this = this;
        var requestId = _a.requestId, queryId = _a.queryId, document = _a.document, options = _a.options, fetchMoreForQueryId = _a.fetchMoreForQueryId;
        var variables = options.variables, context = options.context, _b = options.errorPolicy, errorPolicy = _b === void 0 ? 'none' : _b, fetchPolicy = options.fetchPolicy;
        var resultFromStore;
        var errorsFromStore;
        return new Promise(function (resolve, reject) {
            var obs;
            var updatedContext = {};
            var clientQuery = _this.localState.clientQuery(document);
            var serverQuery = _this.localState.serverQuery(document);
            if (serverQuery) {
                var operation = _this.buildOperationForLink(serverQuery, variables, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context, { forceFetch: !_this.queryDeduplication }));
                updatedContext = operation.context;
                obs = Object(apollo_link__WEBPACK_IMPORTED_MODULE_2__["execute"])(_this.deduplicator, operation);
            }
            else {
                updatedContext = _this.prepareContext(context);
                obs = Observable.of({ data: {} });
            }
            _this.fetchQueryRejectFns.set("fetchRequest:" + queryId, reject);
            var complete = false;
            var handlingNext = true;
            var subscriber = {
                next: function (result) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    var updatedResult, lastRequestId;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                handlingNext = true;
                                updatedResult = result;
                                lastRequestId = this.getQuery(queryId).lastRequestId;
                                if (!(requestId >= (lastRequestId || 1))) return [3, 3];
                                if (!(clientQuery && Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["hasDirectives"])(['client'], clientQuery))) return [3, 2];
                                return [4, this.localState
                                        .runResolvers({
                                        document: clientQuery,
                                        remoteResult: result,
                                        context: updatedContext,
                                        variables: variables,
                                    })
                                        .catch(function (error) {
                                        handlingNext = false;
                                        reject(error);
                                        return result;
                                    })];
                            case 1:
                                updatedResult = _a.sent();
                                _a.label = 2;
                            case 2:
                                if (fetchPolicy !== 'no-cache') {
                                    try {
                                        this.dataStore.markQueryResult(updatedResult, document, variables, fetchMoreForQueryId, errorPolicy === 'ignore' || errorPolicy === 'all');
                                    }
                                    catch (e) {
                                        handlingNext = false;
                                        reject(e);
                                        return [2];
                                    }
                                }
                                else {
                                    this.setQuery(queryId, function () { return ({
                                        newData: { result: updatedResult.data, complete: true },
                                    }); });
                                }
                                this.queryStore.markQueryResult(queryId, updatedResult, fetchMoreForQueryId);
                                this.invalidate(true, queryId, fetchMoreForQueryId);
                                this.broadcastQueries();
                                _a.label = 3;
                            case 3:
                                if (updatedResult.errors && errorPolicy === 'none') {
                                    handlingNext = false;
                                    reject(new ApolloError({
                                        graphQLErrors: updatedResult.errors,
                                    }));
                                    return [2];
                                }
                                else if (errorPolicy === 'all') {
                                    errorsFromStore = updatedResult.errors;
                                }
                                if (fetchMoreForQueryId || fetchPolicy === 'no-cache') {
                                    resultFromStore = updatedResult.data;
                                }
                                else {
                                    try {
                                        resultFromStore = this.dataStore.getCache().read({
                                            variables: variables,
                                            query: document,
                                            optimistic: false,
                                        });
                                    }
                                    catch (e) { }
                                }
                                handlingNext = false;
                                if (complete) {
                                    subscriber.complete();
                                }
                                return [2];
                        }
                    });
                }); },
                error: function (error) {
                    _this.fetchQueryRejectFns.delete("fetchRequest:" + queryId);
                    _this.setQuery(queryId, function (_a) {
                        var subscriptions = _a.subscriptions;
                        return ({
                            subscriptions: subscriptions.filter(function (x) { return x !== subscription; }),
                        });
                    });
                    reject(error);
                },
                complete: function () {
                    if (!handlingNext) {
                        _this.fetchQueryRejectFns.delete("fetchRequest:" + queryId);
                        _this.setQuery(queryId, function (_a) {
                            var subscriptions = _a.subscriptions;
                            return ({
                                subscriptions: subscriptions.filter(function (x) { return x !== subscription; }),
                            });
                        });
                        resolve({
                            data: resultFromStore,
                            errors: errorsFromStore,
                            loading: false,
                            networkStatus: NetworkStatus.ready,
                            stale: false,
                        });
                    }
                    complete = true;
                },
            };
            var subscription = obs.subscribe(subscriber);
            _this.setQuery(queryId, function (_a) {
                var subscriptions = _a.subscriptions;
                return ({
                    subscriptions: subscriptions.concat([subscription]),
                });
            });
        }).catch(function (error) {
            _this.fetchQueryRejectFns.delete("fetchRequest:" + queryId);
            throw error;
        });
    };
    QueryManager.prototype.refetchQueryByName = function (queryName) {
        var _this = this;
        var refetchedQueries = this.queryIdsByName[queryName];
        if (refetchedQueries === undefined)
            return;
        return Promise.all(refetchedQueries
            .map(function (id) { return _this.getQuery(id).observableQuery; })
            .filter(function (x) { return !!x; })
            .map(function (x) { return x.refetch(); }));
    };
    QueryManager.prototype.generateRequestId = function () {
        var requestId = this.idCounter;
        this.idCounter++;
        return requestId;
    };
    QueryManager.prototype.getQuery = function (queryId) {
        return (this.queries.get(queryId) || {
            listeners: [],
            invalidated: false,
            document: null,
            newData: null,
            lastRequestId: null,
            observableQuery: null,
            subscriptions: [],
        });
    };
    QueryManager.prototype.setQuery = function (queryId, updater) {
        var prev = this.getQuery(queryId);
        var newInfo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prev, updater(prev));
        this.queries.set(queryId, newInfo);
    };
    QueryManager.prototype.invalidate = function (invalidated, queryId, fetchMoreForQueryId) {
        if (queryId)
            this.setQuery(queryId, function () { return ({ invalidated: invalidated }); });
        if (fetchMoreForQueryId) {
            this.setQuery(fetchMoreForQueryId, function () { return ({ invalidated: invalidated }); });
        }
    };
    QueryManager.prototype.buildOperationForLink = function (document, variables, extraContext) {
        var cache = this.dataStore.getCache();
        return {
            query: cache.transformForLink
                ? cache.transformForLink(document)
                : document,
            variables: variables,
            operationName: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getOperationName"])(document) || undefined,
            context: this.prepareContext(extraContext),
        };
    };
    QueryManager.prototype.prepareContext = function (context) {
        if (context === void 0) { context = {}; }
        var newContext = this.localState.prepareContext(context);
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, newContext, { clientAwareness: this.clientAwareness });
    };
    QueryManager.prototype.checkInFlight = function (queryId) {
        var query = this.queryStore.get(queryId);
        return (query &&
            query.networkStatus !== NetworkStatus.ready &&
            query.networkStatus !== NetworkStatus.error);
    };
    QueryManager.prototype.startPollingQuery = function (options, queryId, listener) {
        var pollInterval = options.pollInterval;
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(pollInterval, 'Attempted to start a polling query without a polling interval.');
        if (!this.ssrMode) {
            this.pollingInfoByQueryId.set(queryId, {
                interval: pollInterval,
                lastPollTimeMs: Date.now() - 10,
                options: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options, { fetchPolicy: 'network-only' }),
            });
            if (listener) {
                this.addQueryListener(queryId, listener);
            }
            this.schedulePoll(pollInterval);
        }
        return queryId;
    };
    QueryManager.prototype.stopPollingQuery = function (queryId) {
        this.pollingInfoByQueryId.delete(queryId);
    };
    QueryManager.prototype.schedulePoll = function (timeLimitMs) {
        var _this = this;
        var now = Date.now();
        if (this.nextPoll) {
            if (timeLimitMs < this.nextPoll.time - now) {
                clearTimeout(this.nextPoll.timeout);
            }
            else {
                return;
            }
        }
        this.nextPoll = {
            time: now + timeLimitMs,
            timeout: setTimeout(function () {
                _this.nextPoll = null;
                var nextTimeLimitMs = Infinity;
                _this.pollingInfoByQueryId.forEach(function (info, queryId) {
                    if (info.interval < nextTimeLimitMs) {
                        nextTimeLimitMs = info.interval;
                    }
                    if (!_this.checkInFlight(queryId)) {
                        if (Date.now() - info.lastPollTimeMs >= info.interval) {
                            var updateLastPollTime = function () {
                                info.lastPollTimeMs = Date.now();
                            };
                            _this.fetchQuery(queryId, info.options, FetchType.poll).then(updateLastPollTime, updateLastPollTime);
                        }
                    }
                });
                if (isFinite(nextTimeLimitMs)) {
                    _this.schedulePoll(nextTimeLimitMs);
                }
            }, timeLimitMs),
        };
    };
    return QueryManager;
}());

var DataStore = (function () {
    function DataStore(initialCache) {
        this.cache = initialCache;
    }
    DataStore.prototype.getCache = function () {
        return this.cache;
    };
    DataStore.prototype.markQueryResult = function (result, document, variables, fetchMoreForQueryId, ignoreErrors) {
        if (ignoreErrors === void 0) { ignoreErrors = false; }
        var writeWithErrors = !Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(result);
        if (ignoreErrors && Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(result) && result.data) {
            writeWithErrors = true;
        }
        if (!fetchMoreForQueryId && writeWithErrors) {
            this.cache.write({
                result: result.data,
                dataId: 'ROOT_QUERY',
                query: document,
                variables: variables,
            });
        }
    };
    DataStore.prototype.markSubscriptionResult = function (result, document, variables) {
        if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(result)) {
            this.cache.write({
                result: result.data,
                dataId: 'ROOT_SUBSCRIPTION',
                query: document,
                variables: variables,
            });
        }
    };
    DataStore.prototype.markMutationInit = function (mutation) {
        var _this = this;
        if (mutation.optimisticResponse) {
            var optimistic_1;
            if (typeof mutation.optimisticResponse === 'function') {
                optimistic_1 = mutation.optimisticResponse(mutation.variables);
            }
            else {
                optimistic_1 = mutation.optimisticResponse;
            }
            var changeFn_1 = function () {
                _this.markMutationResult({
                    mutationId: mutation.mutationId,
                    result: { data: optimistic_1 },
                    document: mutation.document,
                    variables: mutation.variables,
                    updateQueries: mutation.updateQueries,
                    update: mutation.update,
                });
            };
            this.cache.recordOptimisticTransaction(function (c) {
                var orig = _this.cache;
                _this.cache = c;
                try {
                    changeFn_1();
                }
                finally {
                    _this.cache = orig;
                }
            }, mutation.mutationId);
        }
    };
    DataStore.prototype.markMutationResult = function (mutation) {
        var _this = this;
        if (!Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["graphQLResultHasError"])(mutation.result)) {
            var cacheWrites_1 = [];
            cacheWrites_1.push({
                result: mutation.result.data,
                dataId: 'ROOT_MUTATION',
                query: mutation.document,
                variables: mutation.variables,
            });
            if (mutation.updateQueries) {
                Object.keys(mutation.updateQueries)
                    .filter(function (id) { return mutation.updateQueries[id]; })
                    .forEach(function (queryId) {
                    var _a = mutation.updateQueries[queryId], query = _a.query, updater = _a.updater;
                    var _b = _this.cache.diff({
                        query: query.document,
                        variables: query.variables,
                        returnPartialData: true,
                        optimistic: false,
                    }), currentQueryResult = _b.result, complete = _b.complete;
                    if (!complete) {
                        return;
                    }
                    var nextQueryResult = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["tryFunctionOrLogError"])(function () {
                        return updater(currentQueryResult, {
                            mutationResult: mutation.result,
                            queryName: Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["getOperationName"])(query.document) || undefined,
                            queryVariables: query.variables,
                        });
                    });
                    if (nextQueryResult) {
                        cacheWrites_1.push({
                            result: nextQueryResult,
                            dataId: 'ROOT_QUERY',
                            query: query.document,
                            variables: query.variables,
                        });
                    }
                });
            }
            this.cache.performTransaction(function (c) {
                cacheWrites_1.forEach(function (write) { return c.write(write); });
            });
            var update_1 = mutation.update;
            if (update_1) {
                this.cache.performTransaction(function (c) {
                    Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["tryFunctionOrLogError"])(function () { return update_1(c, mutation.result); });
                });
            }
        }
    };
    DataStore.prototype.markMutationComplete = function (_a) {
        var mutationId = _a.mutationId, optimisticResponse = _a.optimisticResponse;
        if (!optimisticResponse)
            return;
        this.cache.removeOptimistic(mutationId);
    };
    DataStore.prototype.markUpdateQueryResult = function (document, variables, newResult) {
        this.cache.write({
            result: newResult,
            dataId: 'ROOT_QUERY',
            variables: variables,
            query: document,
        });
    };
    DataStore.prototype.reset = function () {
        return this.cache.reset();
    };
    return DataStore;
}());

var version = "2.5.1";

var hasSuggestedDevtools = false;
var ApolloClient = (function () {
    function ApolloClient(options) {
        var _this = this;
        this.defaultOptions = {};
        this.resetStoreCallbacks = [];
        this.clearStoreCallbacks = [];
        this.clientAwareness = {};
        var cache = options.cache, _a = options.ssrMode, ssrMode = _a === void 0 ? false : _a, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, connectToDevTools = options.connectToDevTools, _c = options.queryDeduplication, queryDeduplication = _c === void 0 ? true : _c, defaultOptions = options.defaultOptions, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
        var link = options.link;
        if (!link && resolvers) {
            link = apollo_link__WEBPACK_IMPORTED_MODULE_2__["ApolloLink"].empty();
        }
        if (!link || !cache) {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_4__["InvariantError"]("\n        In order to initialize Apollo Client, you must specify link & cache properties on the config object.\n        This is part of the required upgrade when migrating from Apollo Client 1.0 to Apollo Client 2.0.\n        For more information, please visit:\n          https://www.apollographql.com/docs/react/basics/setup.html\n        to help you get started.\n      ");
        }
        var supportedCache = new Map();
        var supportedDirectives = new apollo_link__WEBPACK_IMPORTED_MODULE_2__["ApolloLink"](function (operation, forward) {
            var result = supportedCache.get(operation.query);
            if (!result) {
                result = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_1__["removeConnectionDirectiveFromDocument"])(operation.query);
                supportedCache.set(operation.query, result);
                supportedCache.set(result, result);
            }
            operation.query = result;
            return forward(operation);
        });
        this.link = supportedDirectives.concat(link);
        this.cache = cache;
        this.store = new DataStore(cache);
        this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
        this.queryDeduplication = queryDeduplication;
        this.ssrMode = ssrMode;
        this.defaultOptions = defaultOptions || {};
        this.typeDefs = typeDefs;
        if (ssrForceFetchDelay) {
            setTimeout(function () { return (_this.disableNetworkFetches = false); }, ssrForceFetchDelay);
        }
        this.watchQuery = this.watchQuery.bind(this);
        this.query = this.query.bind(this);
        this.mutate = this.mutate.bind(this);
        this.resetStore = this.resetStore.bind(this);
        this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
        var defaultConnectToDevTools =  true &&
            typeof window !== 'undefined' &&
            !window.__APOLLO_CLIENT__;
        if (typeof connectToDevTools === 'undefined'
            ? defaultConnectToDevTools
            : connectToDevTools && typeof window !== 'undefined') {
            window.__APOLLO_CLIENT__ = this;
        }
        if (!hasSuggestedDevtools && "development" !== 'production') {
            hasSuggestedDevtools = true;
            if (typeof window !== 'undefined' &&
                window.document &&
                window.top === window.self) {
                if (typeof window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
                    if (window.navigator &&
                        window.navigator.userAgent &&
                        window.navigator.userAgent.indexOf('Chrome') > -1) {
                        console.debug('Download the Apollo DevTools ' +
                            'for a better development experience: ' +
                            'https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm');
                    }
                }
            }
        }
        this.version = version;
        if (clientAwarenessName) {
            this.clientAwareness.name = clientAwarenessName;
        }
        if (clientAwarenessVersion) {
            this.clientAwareness.version = clientAwarenessVersion;
        }
        this.localState = new LocalState({
            cache: cache,
            client: this,
            resolvers: resolvers,
            fragmentMatcher: fragmentMatcher,
        });
    }
    ApolloClient.prototype.stop = function () {
        if (this.queryManager) {
            this.queryManager.stop();
        }
    };
    ApolloClient.prototype.watchQuery = function (options) {
        if (this.defaultOptions.watchQuery) {
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.defaultOptions.watchQuery, options);
        }
        if (this.disableNetworkFetches &&
            (options.fetchPolicy === 'network-only' ||
                options.fetchPolicy === 'cache-and-network')) {
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options, { fetchPolicy: 'cache-first' });
        }
        return this.initQueryManager().watchQuery(options);
    };
    ApolloClient.prototype.query = function (options) {
        if (this.defaultOptions.query) {
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.defaultOptions.query, options);
        }
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_4__["invariant"])(options.fetchPolicy !== 'cache-and-network', 'cache-and-network fetchPolicy can only be used with watchQuery');
        if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options, { fetchPolicy: 'cache-first' });
        }
        return this.initQueryManager().query(options);
    };
    ApolloClient.prototype.mutate = function (options) {
        if (this.defaultOptions.mutate) {
            options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.defaultOptions.mutate, options);
        }
        return this.initQueryManager().mutate(options);
    };
    ApolloClient.prototype.subscribe = function (options) {
        return this.initQueryManager().startGraphQLSubscription(options);
    };
    ApolloClient.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.initProxy().readQuery(options, optimistic);
    };
    ApolloClient.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.initProxy().readFragment(options, optimistic);
    };
    ApolloClient.prototype.writeQuery = function (options) {
        var result = this.initProxy().writeQuery(options);
        this.initQueryManager().broadcastQueries();
        return result;
    };
    ApolloClient.prototype.writeFragment = function (options) {
        var result = this.initProxy().writeFragment(options);
        this.initQueryManager().broadcastQueries();
        return result;
    };
    ApolloClient.prototype.writeData = function (options) {
        var result = this.initProxy().writeData(options);
        this.initQueryManager().broadcastQueries();
        return result;
    };
    ApolloClient.prototype.__actionHookForDevTools = function (cb) {
        this.devToolsHookCb = cb;
    };
    ApolloClient.prototype.__requestRaw = function (payload) {
        return Object(apollo_link__WEBPACK_IMPORTED_MODULE_2__["execute"])(this.link, payload);
    };
    ApolloClient.prototype.initQueryManager = function () {
        var _this = this;
        if (!this.queryManager) {
            this.queryManager = new QueryManager({
                link: this.link,
                store: this.store,
                queryDeduplication: this.queryDeduplication,
                ssrMode: this.ssrMode,
                clientAwareness: this.clientAwareness,
                localState: this.localState,
                onBroadcast: function () {
                    if (_this.devToolsHookCb) {
                        _this.devToolsHookCb({
                            action: {},
                            state: {
                                queries: _this.queryManager
                                    ? _this.queryManager.queryStore.getStore()
                                    : {},
                                mutations: _this.queryManager
                                    ? _this.queryManager.mutationStore.getStore()
                                    : {},
                            },
                            dataWithOptimisticResults: _this.cache.extract(true),
                        });
                    }
                },
            });
        }
        return this.queryManager;
    };
    ApolloClient.prototype.resetStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () {
            return _this.queryManager
                ? _this.queryManager.clearStore()
                : Promise.resolve(null);
        })
            .then(function () { return Promise.all(_this.resetStoreCallbacks.map(function (fn) { return fn(); })); })
            .then(function () {
            return _this.queryManager && _this.queryManager.reFetchObservableQueries
                ? _this.queryManager.reFetchObservableQueries()
                : Promise.resolve(null);
        });
    };
    ApolloClient.prototype.clearStore = function () {
        var _this = this;
        var queryManager = this.queryManager;
        return Promise.resolve()
            .then(function () { return Promise.all(_this.clearStoreCallbacks.map(function (fn) { return fn(); })); })
            .then(function () {
            return queryManager ? queryManager.clearStore() : Promise.resolve(null);
        });
    };
    ApolloClient.prototype.onResetStore = function (cb) {
        var _this = this;
        this.resetStoreCallbacks.push(cb);
        return function () {
            _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.onClearStore = function (cb) {
        var _this = this;
        this.clearStoreCallbacks.push(cb);
        return function () {
            _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.reFetchObservableQueries = function (includeStandby) {
        return this.queryManager
            ? this.queryManager.reFetchObservableQueries(includeStandby)
            : Promise.resolve(null);
    };
    ApolloClient.prototype.extract = function (optimistic) {
        return this.initProxy().extract(optimistic);
    };
    ApolloClient.prototype.restore = function (serializedState) {
        return this.initProxy().restore(serializedState);
    };
    ApolloClient.prototype.addResolvers = function (resolvers) {
        this.localState.addResolvers(resolvers);
    };
    ApolloClient.prototype.setResolvers = function (resolvers) {
        this.localState.setResolvers(resolvers);
    };
    ApolloClient.prototype.getResolvers = function () {
        return this.localState.getResolvers();
    };
    ApolloClient.prototype.setLocalStateFragmentMatcher = function (fragmentMatcher) {
        this.localState.setFragmentMatcher(fragmentMatcher);
    };
    ApolloClient.prototype.initProxy = function () {
        if (!this.proxy) {
            this.initQueryManager();
            this.proxy = this.cache;
        }
        return this.proxy;
    };
    return ApolloClient;
}());

/* harmony default export */ __webpack_exports__["default"] = (ApolloClient);

//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-client/node_modules/ts-invariant/lib/invariant.esm.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/apollo-client/node_modules/ts-invariant/lib/invariant.esm.js ***!
  \***********************************************************************************/
/*! exports provided: default, InvariantError, invariant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvariantError", function() { return InvariantError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
(function (invariant) {
    function warn() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.warn.apply(console, args);
    }
    invariant.warn = warn;
    function error() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.error.apply(console, args);
    }
    invariant.error = error;
})(invariant || (invariant = {}));
var invariant$1 = invariant;

/* harmony default export */ __webpack_exports__["default"] = (invariant$1);



/***/ }),

/***/ "./node_modules/apollo-link-dedup/lib/bundle.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/apollo-link-dedup/lib/bundle.esm.js ***!
  \**********************************************************/
/*! exports provided: DedupLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DedupLink", function() { return DedupLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link-dedup/node_modules/apollo-link/lib/bundle.esm.js");



var DedupLink = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DedupLink, _super);
    function DedupLink() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inFlightRequestObservables = new Map();
        _this.subscribers = new Map();
        return _this;
    }
    DedupLink.prototype.request = function (operation, forward) {
        var _this = this;
        if (operation.getContext().forceFetch) {
            return forward(operation);
        }
        var key = operation.toKey();
        if (!this.inFlightRequestObservables.get(key)) {
            var singleObserver_1 = forward(operation);
            var subscription_1;
            var sharedObserver = new apollo_link__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                if (!_this.subscribers.has(key))
                    _this.subscribers.set(key, new Set());
                _this.subscribers.get(key).add(observer);
                if (!subscription_1) {
                    subscription_1 = singleObserver_1.subscribe({
                        next: function (result) {
                            var subscribers = _this.subscribers.get(key);
                            _this.subscribers.delete(key);
                            _this.inFlightRequestObservables.delete(key);
                            if (subscribers) {
                                subscribers.forEach(function (obs) { return obs.next(result); });
                                subscribers.forEach(function (obs) { return obs.complete(); });
                            }
                        },
                        error: function (error) {
                            var subscribers = _this.subscribers.get(key);
                            _this.subscribers.delete(key);
                            _this.inFlightRequestObservables.delete(key);
                            if (subscribers) {
                                subscribers.forEach(function (obs) { return obs.error(error); });
                            }
                        },
                    });
                }
                return function () {
                    if (_this.subscribers.has(key)) {
                        _this.subscribers.get(key).delete(observer);
                        if (_this.subscribers.get(key).size === 0) {
                            _this.inFlightRequestObservables.delete(key);
                            if (subscription_1)
                                subscription_1.unsubscribe();
                        }
                    }
                };
            });
            this.inFlightRequestObservables.set(key, sharedObserver);
        }
        return this.inFlightRequestObservables.get(key);
    };
    return DedupLink;
}(apollo_link__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"]));


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-link-dedup/node_modules/apollo-link/lib/bundle.esm.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/apollo-link-dedup/node_modules/apollo-link/lib/bundle.esm.js ***!
  \***********************************************************************************/
/*! exports provided: Observable, getOperationName, createOperation, makePromise, toPromise, fromPromise, fromError, empty, from, split, concat, ApolloLink, execute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOperation", function() { return createOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePromise", function() { return makePromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return toPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return fromPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return fromError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return ApolloLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return execute; });
/* harmony import */ var zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable-ts */ "./node_modules/apollo-link-dedup/node_modules/zen-observable-ts/lib/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql_language_printer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql/language/printer */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return apollo_utilities__WEBPACK_IMPORTED_MODULE_4__["getOperationName"]; });









function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context',
    ];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("illegal argument: " + key);
        }
    }
    return operation;
}
var LinkError = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(LinkError, _super);
    function LinkError(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError;
}(Error));
function isTerminating(link) {
    return link.request.length <= 1;
}
function toPromise(observable) {
    var completed = false;
    return new Promise(function (resolve, reject) {
        observable.subscribe({
            next: function (data) {
                if (completed) {
                     false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn("Promise Wrapper does not support multiple results from Observable");
                }
                else {
                    completed = true;
                    resolve(data);
                }
            },
            error: reject,
        });
    });
}
var makePromise = toPromise;
function fromPromise(promise) {
    return new zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"](function (observer) {
        promise
            .then(function (value) {
            observer.next(value);
            observer.complete();
        })
            .catch(observer.error.bind(observer));
    });
}
function fromError(errorValue) {
    return new zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"](function (observer) {
        observer.error(errorValue);
    });
}
function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query,
    };
    if (!transformedOperation.operationName) {
        transformedOperation.operationName =
            typeof transformedOperation.query !== 'string'
                ? Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_4__["getOperationName"])(transformedOperation.query)
                : '';
    }
    return transformedOperation;
}
function createOperation(starting, operation) {
    var context = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, starting);
    var setContext = function (next) {
        if (typeof next === 'function') {
            context = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, context, next(context));
        }
        else {
            context = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, context, next);
        }
    };
    var getContext = function () { return (Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, context)); };
    Object.defineProperty(operation, 'setContext', {
        enumerable: false,
        value: setContext,
    });
    Object.defineProperty(operation, 'getContext', {
        enumerable: false,
        value: getContext,
    });
    Object.defineProperty(operation, 'toKey', {
        enumerable: false,
        value: function () { return getKey(operation); },
    });
    return operation;
}
function getKey(operation) {
    return Object(graphql_language_printer__WEBPACK_IMPORTED_MODULE_3__["print"])(operation.query) + "|" + JSON.stringify(operation.variables) + "|" + operation.operationName;
}

function passthrough(op, forward) {
    return forward ? forward(op) : zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
}
function toLink(handler) {
    return typeof handler === 'function' ? new ApolloLink(handler) : handler;
}
function empty() {
    return new ApolloLink(function () { return zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of(); });
}
function from(links) {
    if (links.length === 0)
        return empty();
    return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
}
function split(test, left, right) {
    var leftLink = toLink(left);
    var rightLink = toLink(right || new ApolloLink(passthrough));
    if (isTerminating(leftLink) && isTerminating(rightLink)) {
        return new ApolloLink(function (operation) {
            return test(operation)
                ? leftLink.request(operation) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of()
                : rightLink.request(operation) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
        });
    }
    else {
        return new ApolloLink(function (operation, forward) {
            return test(operation)
                ? leftLink.request(operation, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of()
                : rightLink.request(operation, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
        });
    }
}
var concat = function (first, second) {
    var firstLink = toLink(first);
    if (isTerminating(firstLink)) {
         false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
        return firstLink;
    }
    var nextLink = toLink(second);
    if (isTerminating(nextLink)) {
        return new ApolloLink(function (operation) {
            return firstLink.request(operation, function (op) { return nextLink.request(op) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of(); }) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
        });
    }
    else {
        return new ApolloLink(function (operation, forward) {
            return (firstLink.request(operation, function (op) {
                return nextLink.request(op, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
            }) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of());
        });
    }
};
var ApolloLink = (function () {
    function ApolloLink(request) {
        if (request)
            this.request = request;
    }
    ApolloLink.prototype.split = function (test, left, right) {
        return this.concat(split(test, left, right || new ApolloLink(passthrough)));
    };
    ApolloLink.prototype.concat = function (next) {
        return concat(this, next);
    };
    ApolloLink.prototype.request = function (operation, forward) {
        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]('request is not implemented');
    };
    ApolloLink.empty = empty;
    ApolloLink.from = from;
    ApolloLink.split = split;
    ApolloLink.execute = execute;
    return ApolloLink;
}());
function execute(link, operation) {
    return (link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of());
}


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-link-dedup/node_modules/zen-observable-ts/lib/bundle.esm.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/apollo-link-dedup/node_modules/zen-observable-ts/lib/bundle.esm.js ***!
  \*****************************************************************************************/
/*! exports provided: default, Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable */ "./node_modules/zen-observable/index.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zen_observable__WEBPACK_IMPORTED_MODULE_0__);


var Observable = zen_observable__WEBPACK_IMPORTED_MODULE_0___default.a;

/* harmony default export */ __webpack_exports__["default"] = (Observable);

//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-link-error/lib/bundle.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/apollo-link-error/lib/bundle.esm.js ***!
  \**********************************************************/
/*! exports provided: onError, ErrorLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onError", function() { return onError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorLink", function() { return ErrorLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link-error/node_modules/apollo-link/lib/bundle.esm.js");



function onError(errorHandler) {
    return new apollo_link__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"](function (operation, forward) {
        return new apollo_link__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            var sub;
            var retriedSub;
            var retriedResult;
            try {
                sub = forward(operation).subscribe({
                    next: function (result) {
                        if (result.errors) {
                            retriedResult = errorHandler({
                                graphQLErrors: result.errors,
                                response: result,
                                operation: operation,
                                forward: forward,
                            });
                            if (retriedResult) {
                                retriedSub = retriedResult.subscribe({
                                    next: observer.next.bind(observer),
                                    error: observer.error.bind(observer),
                                    complete: observer.complete.bind(observer),
                                });
                                return;
                            }
                        }
                        observer.next(result);
                    },
                    error: function (networkError) {
                        retriedResult = errorHandler({
                            operation: operation,
                            networkError: networkError,
                            graphQLErrors: networkError &&
                                networkError.result &&
                                networkError.result.errors,
                            forward: forward,
                        });
                        if (retriedResult) {
                            retriedSub = retriedResult.subscribe({
                                next: observer.next.bind(observer),
                                error: observer.error.bind(observer),
                                complete: observer.complete.bind(observer),
                            });
                            return;
                        }
                        observer.error(networkError);
                    },
                    complete: function () {
                        if (!retriedResult) {
                            observer.complete.bind(observer)();
                        }
                    },
                });
            }
            catch (e) {
                errorHandler({ networkError: e, operation: operation, forward: forward });
                observer.error(e);
            }
            return function () {
                if (sub)
                    sub.unsubscribe();
                if (retriedSub)
                    sub.unsubscribe();
            };
        });
    });
}
var ErrorLink = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ErrorLink, _super);
    function ErrorLink(errorHandler) {
        var _this = _super.call(this) || this;
        _this.link = onError(errorHandler);
        return _this;
    }
    ErrorLink.prototype.request = function (operation, forward) {
        return this.link.request(operation, forward);
    };
    return ErrorLink;
}(apollo_link__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"]));


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-link-error/node_modules/apollo-link/lib/bundle.esm.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/apollo-link-error/node_modules/apollo-link/lib/bundle.esm.js ***!
  \***********************************************************************************/
/*! exports provided: Observable, getOperationName, createOperation, makePromise, toPromise, fromPromise, fromError, empty, from, split, concat, ApolloLink, execute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOperation", function() { return createOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePromise", function() { return makePromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return toPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return fromPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return fromError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return ApolloLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return execute; });
/* harmony import */ var zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable-ts */ "./node_modules/apollo-link-error/node_modules/zen-observable-ts/lib/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql_language_printer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql/language/printer */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return apollo_utilities__WEBPACK_IMPORTED_MODULE_4__["getOperationName"]; });









function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context',
    ];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("illegal argument: " + key);
        }
    }
    return operation;
}
var LinkError = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(LinkError, _super);
    function LinkError(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError;
}(Error));
function isTerminating(link) {
    return link.request.length <= 1;
}
function toPromise(observable) {
    var completed = false;
    return new Promise(function (resolve, reject) {
        observable.subscribe({
            next: function (data) {
                if (completed) {
                     false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn("Promise Wrapper does not support multiple results from Observable");
                }
                else {
                    completed = true;
                    resolve(data);
                }
            },
            error: reject,
        });
    });
}
var makePromise = toPromise;
function fromPromise(promise) {
    return new zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"](function (observer) {
        promise
            .then(function (value) {
            observer.next(value);
            observer.complete();
        })
            .catch(observer.error.bind(observer));
    });
}
function fromError(errorValue) {
    return new zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"](function (observer) {
        observer.error(errorValue);
    });
}
function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query,
    };
    if (!transformedOperation.operationName) {
        transformedOperation.operationName =
            typeof transformedOperation.query !== 'string'
                ? Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_4__["getOperationName"])(transformedOperation.query)
                : '';
    }
    return transformedOperation;
}
function createOperation(starting, operation) {
    var context = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, starting);
    var setContext = function (next) {
        if (typeof next === 'function') {
            context = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, context, next(context));
        }
        else {
            context = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, context, next);
        }
    };
    var getContext = function () { return (Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, context)); };
    Object.defineProperty(operation, 'setContext', {
        enumerable: false,
        value: setContext,
    });
    Object.defineProperty(operation, 'getContext', {
        enumerable: false,
        value: getContext,
    });
    Object.defineProperty(operation, 'toKey', {
        enumerable: false,
        value: function () { return getKey(operation); },
    });
    return operation;
}
function getKey(operation) {
    return Object(graphql_language_printer__WEBPACK_IMPORTED_MODULE_3__["print"])(operation.query) + "|" + JSON.stringify(operation.variables) + "|" + operation.operationName;
}

function passthrough(op, forward) {
    return forward ? forward(op) : zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
}
function toLink(handler) {
    return typeof handler === 'function' ? new ApolloLink(handler) : handler;
}
function empty() {
    return new ApolloLink(function () { return zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of(); });
}
function from(links) {
    if (links.length === 0)
        return empty();
    return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
}
function split(test, left, right) {
    var leftLink = toLink(left);
    var rightLink = toLink(right || new ApolloLink(passthrough));
    if (isTerminating(leftLink) && isTerminating(rightLink)) {
        return new ApolloLink(function (operation) {
            return test(operation)
                ? leftLink.request(operation) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of()
                : rightLink.request(operation) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
        });
    }
    else {
        return new ApolloLink(function (operation, forward) {
            return test(operation)
                ? leftLink.request(operation, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of()
                : rightLink.request(operation, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
        });
    }
}
var concat = function (first, second) {
    var firstLink = toLink(first);
    if (isTerminating(firstLink)) {
         false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
        return firstLink;
    }
    var nextLink = toLink(second);
    if (isTerminating(nextLink)) {
        return new ApolloLink(function (operation) {
            return firstLink.request(operation, function (op) { return nextLink.request(op) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of(); }) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
        });
    }
    else {
        return new ApolloLink(function (operation, forward) {
            return (firstLink.request(operation, function (op) {
                return nextLink.request(op, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
            }) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of());
        });
    }
};
var ApolloLink = (function () {
    function ApolloLink(request) {
        if (request)
            this.request = request;
    }
    ApolloLink.prototype.split = function (test, left, right) {
        return this.concat(split(test, left, right || new ApolloLink(passthrough)));
    };
    ApolloLink.prototype.concat = function (next) {
        return concat(this, next);
    };
    ApolloLink.prototype.request = function (operation, forward) {
        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]('request is not implemented');
    };
    ApolloLink.empty = empty;
    ApolloLink.from = from;
    ApolloLink.split = split;
    ApolloLink.execute = execute;
    return ApolloLink;
}());
function execute(link, operation) {
    return (link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of());
}


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-link-error/node_modules/zen-observable-ts/lib/bundle.esm.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/apollo-link-error/node_modules/zen-observable-ts/lib/bundle.esm.js ***!
  \*****************************************************************************************/
/*! exports provided: default, Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable */ "./node_modules/zen-observable/index.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zen_observable__WEBPACK_IMPORTED_MODULE_0__);


var Observable = zen_observable__WEBPACK_IMPORTED_MODULE_0___default.a;

/* harmony default export */ __webpack_exports__["default"] = (Observable);

//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-link-http-common/lib/bundle.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/apollo-link-http-common/lib/bundle.esm.js ***!
  \****************************************************************/
/*! exports provided: fallbackHttpConfig, throwServerError, parseAndCheckHttpResponse, checkFetcher, createSignalIfSupported, selectHttpOptionsAndBody, serializeFetchParameter, selectURI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallbackHttpConfig", function() { return fallbackHttpConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwServerError", function() { return throwServerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAndCheckHttpResponse", function() { return parseAndCheckHttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFetcher", function() { return checkFetcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSignalIfSupported", function() { return createSignalIfSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHttpOptionsAndBody", function() { return selectHttpOptionsAndBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeFetchParameter", function() { return serializeFetchParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectURI", function() { return selectURI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql_language_printer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql/language/printer */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");




var defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false,
};
var defaultHeaders = {
    accept: '*/*',
    'content-type': 'application/json',
};
var defaultOptions = {
    method: 'POST',
};
var fallbackHttpConfig = {
    http: defaultHttpOptions,
    headers: defaultHeaders,
    options: defaultOptions,
};
var throwServerError = function (response, result, message) {
    var error = new Error(message);
    error.name = 'ServerError';
    error.response = response;
    error.statusCode = response.status;
    error.result = result;
    throw error;
};
var parseAndCheckHttpResponse = function (operations) { return function (response) {
    return (response
        .text()
        .then(function (bodyText) {
        try {
            return JSON.parse(bodyText);
        }
        catch (err) {
            var parseError = err;
            parseError.name = 'ServerParseError';
            parseError.response = response;
            parseError.statusCode = response.status;
            parseError.bodyText = bodyText;
            return Promise.reject(parseError);
        }
    })
        .then(function (result) {
        if (response.status >= 300) {
            throwServerError(response, result, "Response not successful: Received status code " + response.status);
        }
        if (!Array.isArray(result) &&
            !result.hasOwnProperty('data') &&
            !result.hasOwnProperty('errors')) {
            throwServerError(response, result, "Server response was missing for query '" + (Array.isArray(operations)
                ? operations.map(function (op) { return op.operationName; })
                : operations.operationName) + "'.");
        }
        return result;
    }));
}; };
var checkFetcher = function (fetcher) {
    if (!fetcher && typeof fetch === 'undefined') {
        var library = 'unfetch';
        if (typeof window === 'undefined')
            library = 'node-fetch';
        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_2__["InvariantError"]("\nfetch is not found globally and no fetcher passed, to fix pass a fetch for\nyour environment like https://www.npmjs.com/package/" + library + ".\n\nFor example:\nimport fetch from '" + library + "';\nimport { createHttpLink } from 'apollo-link-http';\n\nconst link = createHttpLink({ uri: '/graphql', fetch: fetch });");
    }
};
var createSignalIfSupported = function () {
    if (typeof AbortController === 'undefined')
        return { controller: false, signal: false };
    var controller = new AbortController();
    var signal = controller.signal;
    return { controller: controller, signal: signal };
};
var selectHttpOptionsAndBody = function (operation, fallbackConfig) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    var options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fallbackConfig.options, { headers: fallbackConfig.headers, credentials: fallbackConfig.credentials });
    var http = fallbackConfig.http;
    configs.forEach(function (config) {
        options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options, config.options, { headers: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.headers, config.headers) });
        if (config.credentials)
            options.credentials = config.credentials;
        http = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, http, config.http);
    });
    var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
    var body = { operationName: operationName, variables: variables };
    if (http.includeExtensions)
        body.extensions = extensions;
    if (http.includeQuery)
        body.query = Object(graphql_language_printer__WEBPACK_IMPORTED_MODULE_1__["print"])(query);
    return {
        options: options,
        body: body,
    };
};
var serializeFetchParameter = function (p, label) {
    var serialized;
    try {
        serialized = JSON.stringify(p);
    }
    catch (e) {
        var parseError =  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_2__["InvariantError"]("Network request failed. " + label + " is not serializable: " + e.message);
        parseError.parseError = e;
        throw parseError;
    }
    return serialized;
};
var selectURI = function (operation, fallbackURI) {
    var context = operation.getContext();
    var contextURI = context.uri;
    if (contextURI) {
        return contextURI;
    }
    else if (typeof fallbackURI === 'function') {
        return fallbackURI(operation);
    }
    else {
        return fallbackURI || '/graphql';
    }
};


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-link-http/lib/bundle.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/apollo-link-http/lib/bundle.esm.js ***!
  \*********************************************************/
/*! exports provided: createHttpLink, HttpLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHttpLink", function() { return createHttpLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLink", function() { return HttpLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link-http/node_modules/apollo-link/lib/bundle.esm.js");
/* harmony import */ var apollo_link_http_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-http-common */ "./node_modules/apollo-link-http-common/lib/bundle.esm.js");




var createHttpLink = function (linkOptions) {
    if (linkOptions === void 0) { linkOptions = {}; }
    var _a = linkOptions.uri, uri = _a === void 0 ? '/graphql' : _a, fetcher = linkOptions.fetch, includeExtensions = linkOptions.includeExtensions, useGETForQueries = linkOptions.useGETForQueries, requestOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(linkOptions, ["uri", "fetch", "includeExtensions", "useGETForQueries"]);
    Object(apollo_link_http_common__WEBPACK_IMPORTED_MODULE_2__["checkFetcher"])(fetcher);
    if (!fetcher) {
        fetcher = fetch;
    }
    var linkConfig = {
        http: { includeExtensions: includeExtensions },
        options: requestOptions.fetchOptions,
        credentials: requestOptions.credentials,
        headers: requestOptions.headers,
    };
    return new apollo_link__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"](function (operation) {
        var chosenURI = Object(apollo_link_http_common__WEBPACK_IMPORTED_MODULE_2__["selectURI"])(operation, uri);
        var context = operation.getContext();
        var clientAwarenessHeaders = {};
        if (context.clientAwareness) {
            var _a = context.clientAwareness, name_1 = _a.name, version = _a.version;
            if (name_1) {
                clientAwarenessHeaders['apollographql-client-name'] = name_1;
            }
            if (version) {
                clientAwarenessHeaders['apollographql-client-version'] = version;
            }
        }
        var contextHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, clientAwarenessHeaders, context.headers);
        var contextConfig = {
            http: context.http,
            options: context.fetchOptions,
            credentials: context.credentials,
            headers: contextHeaders,
        };
        var _b = Object(apollo_link_http_common__WEBPACK_IMPORTED_MODULE_2__["selectHttpOptionsAndBody"])(operation, apollo_link_http_common__WEBPACK_IMPORTED_MODULE_2__["fallbackHttpConfig"], linkConfig, contextConfig), options = _b.options, body = _b.body;
        var controller;
        if (!options.signal) {
            var _c = Object(apollo_link_http_common__WEBPACK_IMPORTED_MODULE_2__["createSignalIfSupported"])(), _controller = _c.controller, signal = _c.signal;
            controller = _controller;
            if (controller)
                options.signal = signal;
        }
        var definitionIsMutation = function (d) {
            return d.kind === 'OperationDefinition' && d.operation === 'mutation';
        };
        if (useGETForQueries &&
            !operation.query.definitions.some(definitionIsMutation)) {
            options.method = 'GET';
        }
        if (options.method === 'GET') {
            var _d = rewriteURIForGET(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
            if (parseError) {
                return Object(apollo_link__WEBPACK_IMPORTED_MODULE_1__["fromError"])(parseError);
            }
            chosenURI = newURI;
        }
        else {
            try {
                options.body = Object(apollo_link_http_common__WEBPACK_IMPORTED_MODULE_2__["serializeFetchParameter"])(body, 'Payload');
            }
            catch (parseError) {
                return Object(apollo_link__WEBPACK_IMPORTED_MODULE_1__["fromError"])(parseError);
            }
        }
        return new apollo_link__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            fetcher(chosenURI, options)
                .then(function (response) {
                operation.setContext({ response: response });
                return response;
            })
                .then(Object(apollo_link_http_common__WEBPACK_IMPORTED_MODULE_2__["parseAndCheckHttpResponse"])(operation))
                .then(function (result) {
                observer.next(result);
                observer.complete();
                return result;
            })
                .catch(function (err) {
                if (err.name === 'AbortError')
                    return;
                if (err.result && err.result.errors && err.result.data) {
                    observer.next(err.result);
                }
                observer.error(err);
            });
            return function () {
                if (controller)
                    controller.abort();
            };
        });
    });
};
function rewriteURIForGET(chosenURI, body) {
    var queryParams = [];
    var addQueryParam = function (key, value) {
        queryParams.push(key + "=" + encodeURIComponent(value));
    };
    if ('query' in body) {
        addQueryParam('query', body.query);
    }
    if (body.operationName) {
        addQueryParam('operationName', body.operationName);
    }
    if (body.variables) {
        var serializedVariables = void 0;
        try {
            serializedVariables = Object(apollo_link_http_common__WEBPACK_IMPORTED_MODULE_2__["serializeFetchParameter"])(body.variables, 'Variables map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('variables', serializedVariables);
    }
    if (body.extensions) {
        var serializedExtensions = void 0;
        try {
            serializedExtensions = Object(apollo_link_http_common__WEBPACK_IMPORTED_MODULE_2__["serializeFetchParameter"])(body.extensions, 'Extensions map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('extensions', serializedExtensions);
    }
    var fragment = '', preFragment = chosenURI;
    var fragmentStart = chosenURI.indexOf('#');
    if (fragmentStart !== -1) {
        fragment = chosenURI.substr(fragmentStart);
        preFragment = chosenURI.substr(0, fragmentStart);
    }
    var queryParamsPrefix = preFragment.indexOf('?') === -1 ? '?' : '&';
    var newURI = preFragment + queryParamsPrefix + queryParams.join('&') + fragment;
    return { newURI: newURI };
}
var HttpLink = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpLink, _super);
    function HttpLink(opts) {
        return _super.call(this, createHttpLink(opts).request) || this;
    }
    return HttpLink;
}(apollo_link__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"]));


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-link-http/node_modules/apollo-link/lib/bundle.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/apollo-link-http/node_modules/apollo-link/lib/bundle.esm.js ***!
  \**********************************************************************************/
/*! exports provided: Observable, getOperationName, createOperation, makePromise, toPromise, fromPromise, fromError, empty, from, split, concat, ApolloLink, execute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOperation", function() { return createOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePromise", function() { return makePromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return toPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return fromPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return fromError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return ApolloLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return execute; });
/* harmony import */ var zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable-ts */ "./node_modules/apollo-link-http/node_modules/zen-observable-ts/lib/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql_language_printer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql/language/printer */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return apollo_utilities__WEBPACK_IMPORTED_MODULE_4__["getOperationName"]; });









function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context',
    ];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("illegal argument: " + key);
        }
    }
    return operation;
}
var LinkError = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(LinkError, _super);
    function LinkError(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError;
}(Error));
function isTerminating(link) {
    return link.request.length <= 1;
}
function toPromise(observable) {
    var completed = false;
    return new Promise(function (resolve, reject) {
        observable.subscribe({
            next: function (data) {
                if (completed) {
                     false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn("Promise Wrapper does not support multiple results from Observable");
                }
                else {
                    completed = true;
                    resolve(data);
                }
            },
            error: reject,
        });
    });
}
var makePromise = toPromise;
function fromPromise(promise) {
    return new zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"](function (observer) {
        promise
            .then(function (value) {
            observer.next(value);
            observer.complete();
        })
            .catch(observer.error.bind(observer));
    });
}
function fromError(errorValue) {
    return new zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"](function (observer) {
        observer.error(errorValue);
    });
}
function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query,
    };
    if (!transformedOperation.operationName) {
        transformedOperation.operationName =
            typeof transformedOperation.query !== 'string'
                ? Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_4__["getOperationName"])(transformedOperation.query)
                : '';
    }
    return transformedOperation;
}
function createOperation(starting, operation) {
    var context = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, starting);
    var setContext = function (next) {
        if (typeof next === 'function') {
            context = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, context, next(context));
        }
        else {
            context = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, context, next);
        }
    };
    var getContext = function () { return (Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, context)); };
    Object.defineProperty(operation, 'setContext', {
        enumerable: false,
        value: setContext,
    });
    Object.defineProperty(operation, 'getContext', {
        enumerable: false,
        value: getContext,
    });
    Object.defineProperty(operation, 'toKey', {
        enumerable: false,
        value: function () { return getKey(operation); },
    });
    return operation;
}
function getKey(operation) {
    return Object(graphql_language_printer__WEBPACK_IMPORTED_MODULE_3__["print"])(operation.query) + "|" + JSON.stringify(operation.variables) + "|" + operation.operationName;
}

function passthrough(op, forward) {
    return forward ? forward(op) : zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
}
function toLink(handler) {
    return typeof handler === 'function' ? new ApolloLink(handler) : handler;
}
function empty() {
    return new ApolloLink(function () { return zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of(); });
}
function from(links) {
    if (links.length === 0)
        return empty();
    return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
}
function split(test, left, right) {
    var leftLink = toLink(left);
    var rightLink = toLink(right || new ApolloLink(passthrough));
    if (isTerminating(leftLink) && isTerminating(rightLink)) {
        return new ApolloLink(function (operation) {
            return test(operation)
                ? leftLink.request(operation) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of()
                : rightLink.request(operation) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
        });
    }
    else {
        return new ApolloLink(function (operation, forward) {
            return test(operation)
                ? leftLink.request(operation, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of()
                : rightLink.request(operation, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
        });
    }
}
var concat = function (first, second) {
    var firstLink = toLink(first);
    if (isTerminating(firstLink)) {
         false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
        return firstLink;
    }
    var nextLink = toLink(second);
    if (isTerminating(nextLink)) {
        return new ApolloLink(function (operation) {
            return firstLink.request(operation, function (op) { return nextLink.request(op) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of(); }) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
        });
    }
    else {
        return new ApolloLink(function (operation, forward) {
            return (firstLink.request(operation, function (op) {
                return nextLink.request(op, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
            }) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of());
        });
    }
};
var ApolloLink = (function () {
    function ApolloLink(request) {
        if (request)
            this.request = request;
    }
    ApolloLink.prototype.split = function (test, left, right) {
        return this.concat(split(test, left, right || new ApolloLink(passthrough)));
    };
    ApolloLink.prototype.concat = function (next) {
        return concat(this, next);
    };
    ApolloLink.prototype.request = function (operation, forward) {
        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]('request is not implemented');
    };
    ApolloLink.empty = empty;
    ApolloLink.from = from;
    ApolloLink.split = split;
    ApolloLink.execute = execute;
    return ApolloLink;
}());
function execute(link, operation) {
    return (link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of());
}


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-link-http/node_modules/zen-observable-ts/lib/bundle.esm.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/apollo-link-http/node_modules/zen-observable-ts/lib/bundle.esm.js ***!
  \****************************************************************************************/
/*! exports provided: default, Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable */ "./node_modules/zen-observable/index.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zen_observable__WEBPACK_IMPORTED_MODULE_0__);


var Observable = zen_observable__WEBPACK_IMPORTED_MODULE_0___default.a;

/* harmony default export */ __webpack_exports__["default"] = (Observable);

//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-link/lib/bundle.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/apollo-link/lib/bundle.esm.js ***!
  \****************************************************/
/*! exports provided: Observable, getOperationName, createOperation, makePromise, toPromise, fromPromise, fromError, empty, from, split, concat, ApolloLink, execute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOperation", function() { return createOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePromise", function() { return makePromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return toPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return fromPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return fromError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return ApolloLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return execute; });
/* harmony import */ var zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable-ts */ "./node_modules/zen-observable-ts/lib/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql_language_printer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql/language/printer */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return apollo_utilities__WEBPACK_IMPORTED_MODULE_4__["getOperationName"]; });









function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context',
    ];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("illegal argument: " + key);
        }
    }
    return operation;
}
var LinkError = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(LinkError, _super);
    function LinkError(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError;
}(Error));
function isTerminating(link) {
    return link.request.length <= 1;
}
function toPromise(observable) {
    var completed = false;
    return new Promise(function (resolve, reject) {
        observable.subscribe({
            next: function (data) {
                if (completed) {
                     false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn("Promise Wrapper does not support multiple results from Observable");
                }
                else {
                    completed = true;
                    resolve(data);
                }
            },
            error: reject,
        });
    });
}
var makePromise = toPromise;
function fromPromise(promise) {
    return new zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"](function (observer) {
        promise
            .then(function (value) {
            observer.next(value);
            observer.complete();
        })
            .catch(observer.error.bind(observer));
    });
}
function fromError(errorValue) {
    return new zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"](function (observer) {
        observer.error(errorValue);
    });
}
function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query,
    };
    if (!transformedOperation.operationName) {
        transformedOperation.operationName =
            typeof transformedOperation.query !== 'string'
                ? Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_4__["getOperationName"])(transformedOperation.query)
                : '';
    }
    return transformedOperation;
}
function createOperation(starting, operation) {
    var context = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, starting);
    var setContext = function (next) {
        if (typeof next === 'function') {
            context = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, context, next(context));
        }
        else {
            context = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, context, next);
        }
    };
    var getContext = function () { return (Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, context)); };
    Object.defineProperty(operation, 'setContext', {
        enumerable: false,
        value: setContext,
    });
    Object.defineProperty(operation, 'getContext', {
        enumerable: false,
        value: getContext,
    });
    Object.defineProperty(operation, 'toKey', {
        enumerable: false,
        value: function () { return getKey(operation); },
    });
    return operation;
}
function getKey(operation) {
    return Object(graphql_language_printer__WEBPACK_IMPORTED_MODULE_3__["print"])(operation.query) + "|" + JSON.stringify(operation.variables) + "|" + operation.operationName;
}

function passthrough(op, forward) {
    return forward ? forward(op) : zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
}
function toLink(handler) {
    return typeof handler === 'function' ? new ApolloLink(handler) : handler;
}
function empty() {
    return new ApolloLink(function () { return zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of(); });
}
function from(links) {
    if (links.length === 0)
        return empty();
    return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
}
function split(test, left, right) {
    var leftLink = toLink(left);
    var rightLink = toLink(right || new ApolloLink(passthrough));
    if (isTerminating(leftLink) && isTerminating(rightLink)) {
        return new ApolloLink(function (operation) {
            return test(operation)
                ? leftLink.request(operation) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of()
                : rightLink.request(operation) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
        });
    }
    else {
        return new ApolloLink(function (operation, forward) {
            return test(operation)
                ? leftLink.request(operation, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of()
                : rightLink.request(operation, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
        });
    }
}
var concat = function (first, second) {
    var firstLink = toLink(first);
    if (isTerminating(firstLink)) {
         false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
        return firstLink;
    }
    var nextLink = toLink(second);
    if (isTerminating(nextLink)) {
        return new ApolloLink(function (operation) {
            return firstLink.request(operation, function (op) { return nextLink.request(op) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of(); }) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
        });
    }
    else {
        return new ApolloLink(function (operation, forward) {
            return (firstLink.request(operation, function (op) {
                return nextLink.request(op, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of();
            }) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of());
        });
    }
};
var ApolloLink = (function () {
    function ApolloLink(request) {
        if (request)
            this.request = request;
    }
    ApolloLink.prototype.split = function (test, left, right) {
        return this.concat(split(test, left, right || new ApolloLink(passthrough)));
    };
    ApolloLink.prototype.concat = function (next) {
        return concat(this, next);
    };
    ApolloLink.prototype.request = function (operation, forward) {
        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]('request is not implemented');
    };
    ApolloLink.empty = empty;
    ApolloLink.from = from;
    ApolloLink.split = split;
    ApolloLink.execute = execute;
    return ApolloLink;
}());
function execute(link, operation) {
    return (link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["default"].of());
}


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-utilities/lib/bundle.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/apollo-utilities/lib/bundle.esm.js ***!
  \*********************************************************/
/*! exports provided: getDirectiveInfoFromField, shouldInclude, getDirectiveNames, hasDirectives, hasClientExports, getFragmentQueryDocument, getMutationDefinition, checkDocument, getOperationDefinition, getOperationDefinitionOrDie, getOperationName, getFragmentDefinitions, getQueryDefinition, getFragmentDefinition, getMainDefinition, createFragmentMap, getDefaultValues, variablesInOperation, removeDirectivesFromDocument, addTypenameToDocument, removeConnectionDirectiveFromDocument, getDirectivesFromDocument, removeArgumentsFromDocument, removeFragmentSpreadFromDocument, buildQueryFromSelectionSet, removeClientSetsFromDocument, isScalarValue, isNumberValue, valueToObjectRepresentation, storeKeyNameFromField, getStoreKeyName, argumentsObjectFromField, resultKeyNameFromField, isField, isInlineFragment, isIdValue, toIdValue, isJsonValue, valueFromNode, assign, cloneDeep, getEnv, isEnv, isProduction, isDevelopment, isTest, tryFunctionOrLogError, graphQLResultHasError, isEqual, maybeDeepFreeze, mergeDeep, mergeDeepArray, warnOnceInDevelopment, stripSymbols */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectiveInfoFromField", function() { return getDirectiveInfoFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldInclude", function() { return shouldInclude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectiveNames", function() { return getDirectiveNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasDirectives", function() { return hasDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClientExports", function() { return hasClientExports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentQueryDocument", function() { return getFragmentQueryDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMutationDefinition", function() { return getMutationDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDocument", function() { return checkDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationDefinition", function() { return getOperationDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationDefinitionOrDie", function() { return getOperationDefinitionOrDie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return getOperationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinitions", function() { return getFragmentDefinitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryDefinition", function() { return getQueryDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinition", function() { return getFragmentDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMainDefinition", function() { return getMainDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFragmentMap", function() { return createFragmentMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultValues", function() { return getDefaultValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variablesInOperation", function() { return variablesInOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDirectivesFromDocument", function() { return removeDirectivesFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTypenameToDocument", function() { return addTypenameToDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeConnectionDirectiveFromDocument", function() { return removeConnectionDirectiveFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectivesFromDocument", function() { return getDirectivesFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeArgumentsFromDocument", function() { return removeArgumentsFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFragmentSpreadFromDocument", function() { return removeFragmentSpreadFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildQueryFromSelectionSet", function() { return buildQueryFromSelectionSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClientSetsFromDocument", function() { return removeClientSetsFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScalarValue", function() { return isScalarValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberValue", function() { return isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueToObjectRepresentation", function() { return valueToObjectRepresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeKeyNameFromField", function() { return storeKeyNameFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoreKeyName", function() { return getStoreKeyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argumentsObjectFromField", function() { return argumentsObjectFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultKeyNameFromField", function() { return resultKeyNameFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isField", function() { return isField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInlineFragment", function() { return isInlineFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIdValue", function() { return isIdValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toIdValue", function() { return toIdValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJsonValue", function() { return isJsonValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueFromNode", function() { return valueFromNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneDeep", function() { return cloneDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnv", function() { return getEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnv", function() { return isEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProduction", function() { return isProduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDevelopment", function() { return isDevelopment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTest", function() { return isTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFunctionOrLogError", function() { return tryFunctionOrLogError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphQLResultHasError", function() { return graphQLResultHasError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return isEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeDeepFreeze", function() { return maybeDeepFreeze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepArray", function() { return mergeDeepArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOnceInDevelopment", function() { return warnOnceInDevelopment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripSymbols", function() { return stripSymbols; });
/* harmony import */ var graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql/language/visitor */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/apollo-utilities/node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fast-json-stable-stringify */ "./node_modules/fast-json-stable-stringify/index.js");
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_3__);





function isScalarValue(value) {
    return ['StringValue', 'BooleanValue', 'EnumValue'].indexOf(value.kind) > -1;
}
function isNumberValue(value) {
    return ['IntValue', 'FloatValue'].indexOf(value.kind) > -1;
}
function isStringValue(value) {
    return value.kind === 'StringValue';
}
function isBooleanValue(value) {
    return value.kind === 'BooleanValue';
}
function isIntValue(value) {
    return value.kind === 'IntValue';
}
function isFloatValue(value) {
    return value.kind === 'FloatValue';
}
function isVariable(value) {
    return value.kind === 'Variable';
}
function isObjectValue(value) {
    return value.kind === 'ObjectValue';
}
function isListValue(value) {
    return value.kind === 'ListValue';
}
function isEnumValue(value) {
    return value.kind === 'EnumValue';
}
function isNullValue(value) {
    return value.kind === 'NullValue';
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) {
        argObj[name.value] = Number(value.value);
    }
    else if (isBooleanValue(value) || isStringValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isObjectValue(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function (obj) {
            return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    }
    else if (isVariable(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    }
    else if (isListValue(value)) {
        argObj[name.value] = value.values.map(function (listValue) {
            var nestedArgArrayObj = {};
            valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
            return nestedArgArrayObj[name.value];
        });
    }
    else if (isEnumValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isNullValue(value)) {
        argObj[name.value] = null;
    }
    else {
        throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("The inline argument \"" + name.value + "\" of kind \"" + value.kind + "\"" +
            'is not supported. Use variables instead of inline arguments to ' +
            'overcome this limitation.');
    }
}
function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function (directive) {
            directivesObj[directive.name.value] = {};
            if (directive.arguments) {
                directive.arguments.forEach(function (_a) {
                    var name = _a.name, value = _a.value;
                    return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
                });
            }
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj, name, value, variables);
        });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
    'connection',
    'include',
    'skip',
    'client',
    'rest',
    'export',
];
function getStoreKeyName(fieldName, args, directives) {
    if (directives &&
        directives['connection'] &&
        directives['connection']['key']) {
        if (directives['connection']['filter'] &&
            directives['connection']['filter'].length > 0) {
            var filterKeys = directives['connection']['filter']
                ? directives['connection']['filter']
                : [];
            filterKeys.sort();
            var queryArgs_1 = args;
            var filteredArgs_1 = {};
            filterKeys.forEach(function (key) {
                filteredArgs_1[key] = queryArgs_1[key];
            });
            return directives['connection']['key'] + "(" + JSON.stringify(filteredArgs_1) + ")";
        }
        else {
            return directives['connection']['key'];
        }
    }
    var completeFieldName = fieldName;
    if (args) {
        var stringifiedArgs = fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_3___default()(args);
        completeFieldName += "(" + stringifiedArgs + ")";
    }
    if (directives) {
        Object.keys(directives).forEach(function (key) {
            if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
                return;
            if (directives[key] && Object.keys(directives[key]).length) {
                completeFieldName += "@" + key + "(" + JSON.stringify(directives[key]) + ")";
            }
            else {
                completeFieldName += "@" + key;
            }
        });
    }
    return completeFieldName;
}
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function isField(selection) {
    return selection.kind === 'Field';
}
function isInlineFragment(selection) {
    return selection.kind === 'InlineFragment';
}
function isIdValue(idObject) {
    return idObject &&
        idObject.type === 'id' &&
        typeof idObject.generated === 'boolean';
}
function toIdValue(idConfig, generated) {
    if (generated === void 0) { generated = false; }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ type: 'id', generated: generated }, (typeof idConfig === 'string'
        ? { id: idConfig, typename: undefined }
        : idConfig));
}
function isJsonValue(jsonObject) {
    return (jsonObject != null &&
        typeof jsonObject === 'object' &&
        jsonObject.type === 'json');
}
function defaultValueFromVariable(node) {
    throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Variable nodes are not supported by valueFromNode");
}
function valueFromNode(node, onVariable) {
    if (onVariable === void 0) { onVariable = defaultValueFromVariable; }
    switch (node.kind) {
        case 'Variable':
            return onVariable(node);
        case 'NullValue':
            return null;
        case 'IntValue':
            return parseInt(node.value, 10);
        case 'FloatValue':
            return parseFloat(node.value);
        case 'ListValue':
            return node.values.map(function (v) { return valueFromNode(v, onVariable); });
        case 'ObjectValue': {
            var value = {};
            for (var _i = 0, _a = node.fields; _i < _a.length; _i++) {
                var field = _a[_i];
                value[field.name.value] = valueFromNode(field.value, onVariable);
            }
            return value;
        }
        default:
            return node.value;
    }
}

function getDirectiveInfoFromField(field, variables) {
    if (field.directives && field.directives.length) {
        var directiveObj_1 = {};
        field.directives.forEach(function (directive) {
            directiveObj_1[directive.name.value] = argumentsObjectFromField(directive, variables);
        });
        return directiveObj_1;
    }
    return null;
}
function shouldInclude(selection, variables) {
    if (variables === void 0) { variables = {}; }
    if (!selection.directives) {
        return true;
    }
    var res = true;
    selection.directives.forEach(function (directive) {
        if (directive.name.value !== 'skip' && directive.name.value !== 'include') {
            return;
        }
        var directiveArguments = directive.arguments || [];
        var directiveName = directive.name.value;
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(directiveArguments.length === 1, "Incorrect number of arguments for the @" + directiveName + " directive.");
        var ifArgument = directiveArguments[0];
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(ifArgument.name && ifArgument.name.value === 'if', "Invalid argument for the @" + directiveName + " directive.");
        var ifValue = directiveArguments[0].value;
        var evaledValue = false;
        if (!ifValue || ifValue.kind !== 'BooleanValue') {
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(ifValue.kind === 'Variable', "Argument for the @" + directiveName + " directive must be a variable or a boolean value.");
            evaledValue = variables[ifValue.name.value];
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(evaledValue !== void 0, "Invalid variable referenced in @" + directiveName + " directive.");
        }
        else {
            evaledValue = ifValue.value;
        }
        if (directiveName === 'skip') {
            evaledValue = !evaledValue;
        }
        if (!evaledValue) {
            res = false;
        }
    });
    return res;
}
function getDirectiveNames(doc) {
    var names = [];
    Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(doc, {
        Directive: function (node) {
            names.push(node.name.value);
        },
    });
    return names;
}
function hasDirectives(names, doc) {
    return getDirectiveNames(doc).some(function (name) { return names.indexOf(name) > -1; });
}
function hasClientExports(document) {
    return (document &&
        hasDirectives(['client'], document) &&
        hasDirectives(['export'], document));
}

function getFragmentQueryDocument(document, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document.definitions.forEach(function (definition) {
        if (definition.kind === 'OperationDefinition') {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Found a " + definition.operation + " operation" + (definition.name ? " named '" + definition.name.value + "'" : '') + ". " +
                'No operations are allowed when using a fragment as a query. Only fragments are allowed.');
        }
        if (definition.kind === 'FragmentDefinition') {
            fragments.push(definition);
        }
    });
    if (typeof actualFragmentName === 'undefined') {
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fragments.length === 1, "Found " + fragments.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.");
        actualFragmentName = fragments[0].name.value;
    }
    var query = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, document, { definitions: [
            {
                kind: 'OperationDefinition',
                operation: 'query',
                selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                        {
                            kind: 'FragmentSpread',
                            name: {
                                kind: 'Name',
                                value: actualFragmentName,
                            },
                        },
                    ],
                },
            }
        ].concat(document.definitions) });
    return query;
}

function assign(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    sources.forEach(function (source) {
        if (typeof source === 'undefined' || source === null) {
            return;
        }
        Object.keys(source).forEach(function (key) {
            target[key] = source[key];
        });
    });
    return target;
}

function getMutationDefinition(doc) {
    checkDocument(doc);
    var mutationDef = doc.definitions.filter(function (definition) {
        return definition.kind === 'OperationDefinition' &&
            definition.operation === 'mutation';
    })[0];
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(mutationDef, 'Must contain a mutation definition.');
    return mutationDef;
}
function checkDocument(doc) {
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(doc && doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
    var operations = doc.definitions
        .filter(function (d) { return d.kind !== 'FragmentDefinition'; })
        .map(function (definition) {
        if (definition.kind !== 'OperationDefinition') {
            throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Schema type definitions not allowed in queries. Found: \"" + definition.kind + "\"");
        }
        return definition;
    });
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(operations.length <= 1, "Ambiguous GraphQL document: contains " + operations.length + " operations");
    return doc;
}
function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function (definition) { return definition.kind === 'OperationDefinition'; })[0];
}
function getOperationDefinitionOrDie(document) {
    var def = getOperationDefinition(document);
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(def, "GraphQL document is missing an operation");
    return def;
}
function getOperationName(doc) {
    return (doc.definitions
        .filter(function (definition) {
        return definition.kind === 'OperationDefinition' && definition.name;
    })
        .map(function (x) { return x.name.value; })[0] || null);
}
function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function (definition) { return definition.kind === 'FragmentDefinition'; });
}
function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(queryDef && queryDef.operation === 'query', 'Must contain a query definition.');
    return queryDef;
}
function getFragmentDefinition(doc) {
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(doc.definitions.length <= 1, 'Fragment must have exactly one definition.');
    var fragmentDef = doc.definitions[0];
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fragmentDef.kind === 'FragmentDefinition', 'Must be a fragment definition.');
    return fragmentDef;
}
function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
        var definition = _a[_i];
        if (definition.kind === 'OperationDefinition') {
            var operation = definition.operation;
            if (operation === 'query' ||
                operation === 'mutation' ||
                operation === 'subscription') {
                return definition;
            }
        }
        if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
            fragmentDefinition = definition;
        }
    }
    if (fragmentDefinition) {
        return fragmentDefinition;
    }
    throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.');
}
function createFragmentMap(fragments) {
    if (fragments === void 0) { fragments = []; }
    var symTable = {};
    fragments.forEach(function (fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getDefaultValues(definition) {
    if (definition &&
        definition.variableDefinitions &&
        definition.variableDefinitions.length) {
        var defaultValues = definition.variableDefinitions
            .filter(function (_a) {
            var defaultValue = _a.defaultValue;
            return defaultValue;
        })
            .map(function (_a) {
            var variable = _a.variable, defaultValue = _a.defaultValue;
            var defaultValueObj = {};
            valueToObjectRepresentation(defaultValueObj, variable.name, defaultValue);
            return defaultValueObj;
        });
        return assign.apply(void 0, [{}].concat(defaultValues));
    }
    return {};
}
function variablesInOperation(operation) {
    var names = new Set();
    if (operation.variableDefinitions) {
        for (var _i = 0, _a = operation.variableDefinitions; _i < _a.length; _i++) {
            var definition = _a[_i];
            names.add(definition.variable.name.value);
        }
    }
    return names;
}

function filterInPlace(array, test, context) {
    var target = 0;
    array.forEach(function (elem, i) {
        if (test.call(this, elem, i, array)) {
            array[target++] = elem;
        }
    }, context);
    array.length = target;
    return array;
}

var TYPENAME_FIELD = {
    kind: 'Field',
    name: {
        kind: 'Name',
        value: '__typename',
    },
};
function isEmpty(op, fragments) {
    return op.selectionSet.selections.every(function (selection) {
        return selection.kind === 'FragmentSpread' &&
            isEmpty(fragments[selection.name.value], fragments);
    });
}
function nullIfDocIsEmpty(doc) {
    return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc)))
        ? null
        : doc;
}
function getDirectiveMatcher(directives) {
    return function directiveMatcher(directive) {
        return directives.some(function (dir) {
            return (dir.name && dir.name === directive.name.value) ||
                (dir.test && dir.test(directive));
        });
    };
}
function removeDirectivesFromDocument(directives, doc) {
    var variablesInUse = Object.create(null);
    var variablesToRemove = [];
    var fragmentSpreadsInUse = Object.create(null);
    var fragmentSpreadsToRemove = [];
    var modifiedDoc = nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(doc, {
        Variable: {
            enter: function (node, _key, parent) {
                if (parent.kind !== 'VariableDefinition') {
                    variablesInUse[node.name.value] = true;
                }
            },
        },
        Field: {
            enter: function (node) {
                if (directives && node.directives) {
                    var shouldRemoveField = directives.some(function (directive) { return directive.remove; });
                    if (shouldRemoveField &&
                        node.directives &&
                        node.directives.some(getDirectiveMatcher(directives))) {
                        if (node.arguments) {
                            node.arguments.forEach(function (arg) {
                                if (arg.value.kind === 'Variable') {
                                    variablesToRemove.push({
                                        name: arg.value.name.value,
                                    });
                                }
                            });
                        }
                        if (node.selectionSet) {
                            getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function (frag) {
                                fragmentSpreadsToRemove.push({
                                    name: frag.name.value,
                                });
                            });
                        }
                        return null;
                    }
                }
            },
        },
        FragmentSpread: {
            enter: function (node) {
                fragmentSpreadsInUse[node.name.value] = true;
            },
        },
        Directive: {
            enter: function (node) {
                if (getDirectiveMatcher(directives)(node)) {
                    return null;
                }
            },
        },
    }));
    if (modifiedDoc &&
        filterInPlace(variablesToRemove, function (v) { return !variablesInUse[v.name]; }).length) {
        modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
    }
    if (modifiedDoc &&
        filterInPlace(fragmentSpreadsToRemove, function (fs) { return !fragmentSpreadsInUse[fs.name]; })
            .length) {
        modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
    }
    return modifiedDoc;
}
function addTypenameToDocument(doc) {
    return Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(checkDocument(doc), {
        SelectionSet: {
            enter: function (node, _key, parent) {
                if (parent &&
                    parent.kind === 'OperationDefinition') {
                    return;
                }
                var selections = node.selections;
                if (!selections) {
                    return;
                }
                var skip = selections.some(function (selection) {
                    return (selection.kind === 'Field' &&
                        (selection.name.value === '__typename' ||
                            selection.name.value.lastIndexOf('__', 0) === 0));
                });
                if (skip) {
                    return;
                }
                return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, node, { selections: selections.concat([TYPENAME_FIELD]) });
            },
        },
    });
}
var connectionRemoveConfig = {
    test: function (directive) {
        var willRemove = directive.name.value === 'connection';
        if (willRemove) {
            if (!directive.arguments ||
                !directive.arguments.some(function (arg) { return arg.name.value === 'key'; })) {
                console.warn('Removing an @connection directive even though it does not have a key. ' +
                    'You may want to use the key parameter to specify a store key.');
            }
        }
        return willRemove;
    },
};
function removeConnectionDirectiveFromDocument(doc) {
    return removeDirectivesFromDocument([connectionRemoveConfig], checkDocument(doc));
}
function hasDirectivesInSelectionSet(directives, selectionSet, nestedCheck) {
    if (nestedCheck === void 0) { nestedCheck = true; }
    return (selectionSet &&
        selectionSet.selections &&
        selectionSet.selections.some(function (selection) {
            return hasDirectivesInSelection(directives, selection, nestedCheck);
        }));
}
function hasDirectivesInSelection(directives, selection, nestedCheck) {
    if (nestedCheck === void 0) { nestedCheck = true; }
    if (selection.kind !== 'Field' || !selection) {
        return true;
    }
    if (!selection.directives) {
        return false;
    }
    return (selection.directives.some(getDirectiveMatcher(directives)) ||
        (nestedCheck &&
            hasDirectivesInSelectionSet(directives, selection.selectionSet, nestedCheck)));
}
function getDirectivesFromDocument(directives, doc) {
    checkDocument(doc);
    var parentPath;
    return nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(doc, {
        SelectionSet: {
            enter: function (node, _key, _parent, path) {
                var currentPath = path.join('-');
                if (!parentPath ||
                    currentPath === parentPath ||
                    !currentPath.startsWith(parentPath)) {
                    if (node.selections) {
                        var selectionsWithDirectives = node.selections.filter(function (selection) { return hasDirectivesInSelection(directives, selection); });
                        if (hasDirectivesInSelectionSet(directives, node, false)) {
                            parentPath = currentPath;
                        }
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, node, { selections: selectionsWithDirectives });
                    }
                    else {
                        return null;
                    }
                }
            },
        },
    }));
}
function getArgumentMatcher(config) {
    return function argumentMatcher(argument) {
        return config.some(function (aConfig) {
            return argument.value &&
                argument.value.kind === 'Variable' &&
                argument.value.name &&
                (aConfig.name === argument.value.name.value ||
                    (aConfig.test && aConfig.test(argument)));
        });
    };
}
function removeArgumentsFromDocument(config, doc) {
    var argMatcher = getArgumentMatcher(config);
    return nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(doc, {
        OperationDefinition: {
            enter: function (node) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, node, { variableDefinitions: node.variableDefinitions.filter(function (varDef) {
                        return !config.some(function (arg) { return arg.name === varDef.variable.name.value; });
                    }) });
            },
        },
        Field: {
            enter: function (node) {
                var shouldRemoveField = config.some(function (argConfig) { return argConfig.remove; });
                if (shouldRemoveField) {
                    var argMatchCount_1 = 0;
                    node.arguments.forEach(function (arg) {
                        if (argMatcher(arg)) {
                            argMatchCount_1 += 1;
                        }
                    });
                    if (argMatchCount_1 === 1) {
                        return null;
                    }
                }
            },
        },
        Argument: {
            enter: function (node) {
                if (argMatcher(node)) {
                    return null;
                }
            },
        },
    }));
}
function removeFragmentSpreadFromDocument(config, doc) {
    function enter(node) {
        if (config.some(function (def) { return def.name === node.name.value; })) {
            return null;
        }
    }
    return nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(doc, {
        FragmentSpread: { enter: enter },
        FragmentDefinition: { enter: enter },
    }));
}
function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
    var allFragments = [];
    selectionSet.selections.forEach(function (selection) {
        if ((selection.kind === 'Field' || selection.kind === 'InlineFragment') &&
            selection.selectionSet) {
            getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function (frag) { return allFragments.push(frag); });
        }
        else if (selection.kind === 'FragmentSpread') {
            allFragments.push(selection);
        }
    });
    return allFragments;
}
function buildQueryFromSelectionSet(document) {
    var definition = getMainDefinition(document);
    var definitionOperation = definition.operation;
    if (definitionOperation === 'query') {
        return document;
    }
    var modifiedDoc = Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(document, {
        OperationDefinition: {
            enter: function (node) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, node, { operation: 'query' });
            },
        },
    });
    return modifiedDoc;
}
function removeClientSetsFromDocument(document) {
    checkDocument(document);
    var modifiedDoc = removeDirectivesFromDocument([
        {
            test: function (directive) { return directive.name.value === 'client'; },
            remove: true,
        },
    ], document);
    if (modifiedDoc) {
        modifiedDoc = Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(modifiedDoc, {
            FragmentDefinition: {
                enter: function (node) {
                    if (node.selectionSet) {
                        var isTypenameOnly = node.selectionSet.selections.every(function (selection) {
                            return (selection.kind === 'Field' &&
                                selection.name.value === '__typename');
                        });
                        if (isTypenameOnly) {
                            return null;
                        }
                    }
                },
            },
        });
    }
    return modifiedDoc;
}

var toString = Object.prototype.toString;
function cloneDeep(value) {
    return cloneDeepHelper(value, new Map());
}
function cloneDeepHelper(val, seen) {
    switch (toString.call(val)) {
        case "[object Array]": {
            if (seen.has(val))
                return seen.get(val);
            var copy_1 = val.slice(0);
            seen.set(val, copy_1);
            copy_1.forEach(function (child, i) {
                copy_1[i] = cloneDeepHelper(child, seen);
            });
            return copy_1;
        }
        case "[object Object]": {
            if (seen.has(val))
                return seen.get(val);
            var copy_2 = Object.create(Object.getPrototypeOf(val));
            seen.set(val, copy_2);
            Object.keys(val).forEach(function (key) {
                copy_2[key] = cloneDeepHelper(val[key], seen);
            });
            return copy_2;
        }
        default:
            return val;
    }
}

function getEnv() {
    if (typeof process !== 'undefined' && "development") {
        return "development";
    }
    return 'development';
}
function isEnv(env) {
    return getEnv() === env;
}
function isProduction() {
    return isEnv('production') === true;
}
function isDevelopment() {
    return isEnv('development') === true;
}
function isTest() {
    return isEnv('test') === true;
}

function tryFunctionOrLogError(f) {
    try {
        return f();
    }
    catch (e) {
        if (console.error) {
            console.error(e);
        }
    }
}
function graphQLResultHasError(result) {
    return result.errors && result.errors.length;
}

function isEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
    }
    if (a != null &&
        typeof a === 'object' &&
        b != null &&
        typeof b === 'object') {
        for (var key in a) {
            if (Object.prototype.hasOwnProperty.call(a, key)) {
                if (!Object.prototype.hasOwnProperty.call(b, key)) {
                    return false;
                }
                if (!isEqual(a[key], b[key])) {
                    return false;
                }
            }
        }
        for (var key in b) {
            if (Object.prototype.hasOwnProperty.call(b, key) &&
                !Object.prototype.hasOwnProperty.call(a, key)) {
                return false;
            }
        }
        return true;
    }
    return false;
}

function deepFreeze(o) {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (o[prop] !== null &&
            (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
            !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    });
    return o;
}
function maybeDeepFreeze(obj) {
    if (isDevelopment() || isTest()) {
        var symbolIsPolyfilled = typeof Symbol === 'function' && typeof Symbol('') === 'string';
        if (!symbolIsPolyfilled) {
            return deepFreeze(obj);
        }
    }
    return obj;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function mergeDeep() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
    var target = sources[0] || {};
    var count = sources.length;
    if (count > 1) {
        var pastCopies = [];
        target = shallowCopyForMerge(target, pastCopies);
        for (var i = 1; i < count; ++i) {
            target = mergeHelper(target, sources[i], pastCopies);
        }
    }
    return target;
}
function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}
function mergeHelper(target, source, pastCopies) {
    if (isObject(source) && isObject(target)) {
        if (Object.isExtensible && !Object.isExtensible(target)) {
            target = shallowCopyForMerge(target, pastCopies);
        }
        Object.keys(source).forEach(function (sourceKey) {
            var sourceValue = source[sourceKey];
            if (hasOwnProperty.call(target, sourceKey)) {
                var targetValue = target[sourceKey];
                if (sourceValue !== targetValue) {
                    target[sourceKey] = mergeHelper(shallowCopyForMerge(targetValue, pastCopies), sourceValue, pastCopies);
                }
            }
            else {
                target[sourceKey] = sourceValue;
            }
        });
        return target;
    }
    return source;
}
function shallowCopyForMerge(value, pastCopies) {
    if (value !== null &&
        typeof value === 'object' &&
        pastCopies.indexOf(value) < 0) {
        if (Array.isArray(value)) {
            value = value.slice(0);
        }
        else {
            value = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ __proto__: Object.getPrototypeOf(value) }, value);
        }
        pastCopies.push(value);
    }
    return value;
}

var haveWarned = Object.create({});
function warnOnceInDevelopment(msg, type) {
    if (type === void 0) { type = 'warn'; }
    if (isProduction()) {
        return;
    }
    if (!haveWarned[msg]) {
        if (!isTest()) {
            haveWarned[msg] = true;
        }
        switch (type) {
            case 'error':
                console.error(msg);
                break;
            default:
                console.warn(msg);
        }
    }
}

function stripSymbols(data) {
    return JSON.parse(JSON.stringify(data));
}


//# sourceMappingURL=bundle.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/apollo-utilities/node_modules/ts-invariant/lib/invariant.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/apollo-utilities/node_modules/ts-invariant/lib/invariant.esm.js ***!
  \**************************************************************************************/
/*! exports provided: default, InvariantError, invariant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvariantError", function() { return InvariantError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
(function (invariant) {
    function warn() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.warn.apply(console, args);
    }
    invariant.warn = warn;
    function error() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.error.apply(console, args);
    }
    invariant.error = error;
})(invariant || (invariant = {}));
var invariant$1 = invariant;

/* harmony default export */ __webpack_exports__["default"] = (invariant$1);



/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
false,

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
false,

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
false,

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/_a-function.js":
false,

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
false,

/***/ "./node_modules/core-js/library/modules/_an-object.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
false,

/***/ "./node_modules/core-js/library/modules/_cof.js":
false,

/***/ "./node_modules/core-js/library/modules/_core.js":
false,

/***/ "./node_modules/core-js/library/modules/_ctx.js":
false,

/***/ "./node_modules/core-js/library/modules/_defined.js":
false,

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
false,

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_export.js":
false,

/***/ "./node_modules/core-js/library/modules/_fails.js":
false,

/***/ "./node_modules/core-js/library/modules/_global.js":
false,

/***/ "./node_modules/core-js/library/modules/_has.js":
false,

/***/ "./node_modules/core-js/library/modules/_hide.js":
false,

/***/ "./node_modules/core-js/library/modules/_html.js":
false,

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
false,

/***/ "./node_modules/core-js/library/modules/_iobject.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-array.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-object.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
false,

/***/ "./node_modules/core-js/library/modules/_iterators.js":
false,

/***/ "./node_modules/core-js/library/modules/_library.js":
false,

/***/ "./node_modules/core-js/library/modules/_meta.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
false,

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
false,

/***/ "./node_modules/core-js/library/modules/_redefine.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
false,

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
false,

/***/ "./node_modules/core-js/library/modules/_shared.js":
false,

/***/ "./node_modules/core-js/library/modules/_string-at.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-length.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-object.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
false,

/***/ "./node_modules/core-js/library/modules/_uid.js":
false,

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
false,

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
false,

/***/ "./node_modules/core-js/library/modules/_wks.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
false,

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
false,

/***/ "./node_modules/fast-json-stable-stringify/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/fast-json-stable-stringify/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (data, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (node) {
        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        if (node === undefined) return;
        if (typeof node == 'number') return isFinite(node) ? '' + node : 'null';
        if (typeof node !== 'object') return JSON.stringify(node);

        var i, out;
        if (Array.isArray(node)) {
            out = '[';
            for (i = 0; i < node.length; i++) {
                if (i) out += ',';
                out += stringify(node[i]) || 'null';
            }
            return out + ']';
        }

        if (node === null) return 'null';

        if (seen.indexOf(node) !== -1) {
            if (cycles) return JSON.stringify('__cycle__');
            throw new TypeError('Converting circular structure to JSON');
        }

        var seenIndex = seen.push(node) - 1;
        var keys = Object.keys(node).sort(cmp && cmp(node));
        out = '';
        for (i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = stringify(node[key]);

            if (!value) continue;
            if (out) out += ',';
            out += JSON.stringify(key) + ':' + value;
        }
        seen.splice(seenIndex, 1);
        return '{' + out + '}';
    })(data);
};


/***/ }),

/***/ "./node_modules/graphql-tag/src/index.js":
/*!***********************************************!*\
  !*** ./node_modules/graphql-tag/src/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__(/*! graphql/language/parser */ "./node_modules/graphql/language/parser.mjs");

var parse = parser.parse;

// Strip insignificant whitespace
// Note that this could do a lot more, such as reorder fields etc.
function normalize(string) {
  return string.replace(/[\s,]+/g, ' ').trim();
}

// A map docString -> graphql document
var docCache = {};

// A map fragmentName -> [normalized source]
var fragmentSourceMap = {};

function cacheKeyFromLoc(loc) {
  return normalize(loc.source.body.substring(loc.start, loc.end));
}

// For testing.
function resetCaches() {
  docCache = {};
  fragmentSourceMap = {};
}

// Take a unstripped parsed document (query/mutation or even fragment), and
// check all fragment definitions, checking for name->source uniqueness.
// We also want to make sure only unique fragments exist in the document.
var printFragmentWarnings = true;
function processFragments(ast) {
  var astFragmentMap = {};
  var definitions = [];

  for (var i = 0; i < ast.definitions.length; i++) {
    var fragmentDefinition = ast.definitions[i];

    if (fragmentDefinition.kind === 'FragmentDefinition') {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);

      // We know something about this fragment
      if (fragmentSourceMap.hasOwnProperty(fragmentName) && !fragmentSourceMap[fragmentName][sourceKey]) {

        // this is a problem because the app developer is trying to register another fragment with
        // the same name as one previously registered. So, we tell them about it.
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\n"
            + "graphql-tag enforces all fragment names across your application to be unique; read more about\n"
            + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }

        fragmentSourceMap[fragmentName][sourceKey] = true;

      } else if (!fragmentSourceMap.hasOwnProperty(fragmentName)) {
        fragmentSourceMap[fragmentName] = {};
        fragmentSourceMap[fragmentName][sourceKey] = true;
      }

      if (!astFragmentMap[sourceKey]) {
        astFragmentMap[sourceKey] = true;
        definitions.push(fragmentDefinition);
      }
    } else {
      definitions.push(fragmentDefinition);
    }
  }

  ast.definitions = definitions;
  return ast;
}

function disableFragmentWarnings() {
  printFragmentWarnings = false;
}

function stripLoc(doc, removeLocAtThisLevel) {
  var docType = Object.prototype.toString.call(doc);

  if (docType === '[object Array]') {
    return doc.map(function (d) {
      return stripLoc(d, removeLocAtThisLevel);
    });
  }

  if (docType !== '[object Object]') {
    throw new Error('Unexpected input.');
  }

  // We don't want to remove the root loc field so we can use it
  // for fragment substitution (see below)
  if (removeLocAtThisLevel && doc.loc) {
    delete doc.loc;
  }

  // https://github.com/apollographql/graphql-tag/issues/40
  if (doc.loc) {
    delete doc.loc.startToken;
    delete doc.loc.endToken;
  }

  var keys = Object.keys(doc);
  var key;
  var value;
  var valueType;

  for (key in keys) {
    if (keys.hasOwnProperty(key)) {
      value = doc[keys[key]];
      valueType = Object.prototype.toString.call(value);

      if (valueType === '[object Object]' || valueType === '[object Array]') {
        doc[keys[key]] = stripLoc(value, true);
      }
    }
  }

  return doc;
}

var experimentalFragmentVariables = false;
function parseDocument(doc) {
  var cacheKey = normalize(doc);

  if (docCache[cacheKey]) {
    return docCache[cacheKey];
  }

  var parsed = parse(doc, { experimentalFragmentVariables: experimentalFragmentVariables });
  if (!parsed || parsed.kind !== 'Document') {
    throw new Error('Not a valid GraphQL document.');
  }

  // check that all "new" fragments inside the documents are consistent with
  // existing fragments of the same name
  parsed = processFragments(parsed);
  parsed = stripLoc(parsed, false);
  docCache[cacheKey] = parsed;

  return parsed;
}

function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = true;
}

function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = false;
}

// XXX This should eventually disallow arbitrary string interpolation, like Relay does
function gql(/* arguments */) {
  var args = Array.prototype.slice.call(arguments);

  var literals = args[0];

  // We always get literals[0] and then matching post literals for each arg given
  var result = (typeof(literals) === "string") ? literals : literals[0];

  for (var i = 1; i < args.length; i++) {
    if (args[i] && args[i].kind && args[i].kind === 'Document') {
      result += args[i].loc.source.body;
    } else {
      result += args[i];
    }

    result += literals[i];
  }

  return parseDocument(result);
}

// Support typescript, which isn't as nice as Babel about default exports
gql.default = gql;
gql.resetCaches = resetCaches;
gql.disableFragmentWarnings = disableFragmentWarnings;
gql.enableExperimentalFragmentVariables = enableExperimentalFragmentVariables;
gql.disableExperimentalFragmentVariables = disableExperimentalFragmentVariables;

module.exports = gql;


/***/ }),

/***/ "./node_modules/graphql/error/GraphQLError.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/error/GraphQLError.mjs ***!
  \*****************************************************/
/*! exports provided: GraphQLError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLError", function() { return GraphQLError; });
/* harmony import */ var _printError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printError */ "./node_modules/graphql/error/printError.mjs");
/* harmony import */ var _language_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/location */ "./node_modules/graphql/language/location.mjs");
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


function GraphQLError( // eslint-disable-line no-redeclare
message, nodes, source, positions, path, originalError, extensions) {
  // Compute list of blame nodes.
  var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.


  var _source = source;

  if (!_source && _nodes) {
    var node = _nodes[0];
    _source = node && node.loc && node.loc.source;
  }

  var _positions = positions;

  if (!_positions && _nodes) {
    _positions = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(node.loc.start);
      }

      return list;
    }, []);
  }

  if (_positions && _positions.length === 0) {
    _positions = undefined;
  }

  var _locations;

  if (positions && source) {
    _locations = positions.map(function (pos) {
      return Object(_language_location__WEBPACK_IMPORTED_MODULE_1__["getLocation"])(source, pos);
    });
  } else if (_nodes) {
    _locations = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(Object(_language_location__WEBPACK_IMPORTED_MODULE_1__["getLocation"])(node.loc.source, node.loc.start));
      }

      return list;
    }, []);
  }

  var _extensions = extensions || originalError && originalError.extensions;

  Object.defineProperties(this, {
    message: {
      value: message,
      // By being enumerable, JSON.stringify will include `message` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true,
      writable: true
    },
    locations: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _locations || undefined,
      // By being enumerable, JSON.stringify will include `locations` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(_locations)
    },
    path: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: path || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(path)
    },
    nodes: {
      value: _nodes || undefined
    },
    source: {
      value: _source || undefined
    },
    positions: {
      value: _positions || undefined
    },
    originalError: {
      value: originalError
    },
    extensions: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _extensions || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(_extensions)
    }
  }); // Include (non-enumerable) stack trace.

  if (originalError && originalError.stack) {
    Object.defineProperty(this, 'stack', {
      value: originalError.stack,
      writable: true,
      configurable: true
    });
  } else if (Error.captureStackTrace) {
    Error.captureStackTrace(this, GraphQLError);
  } else {
    Object.defineProperty(this, 'stack', {
      value: Error().stack,
      writable: true,
      configurable: true
    });
  }
}
GraphQLError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: GraphQLError
  },
  name: {
    value: 'GraphQLError'
  },
  toString: {
    value: function toString() {
      return Object(_printError__WEBPACK_IMPORTED_MODULE_0__["printError"])(this);
    }
  }
});

/***/ }),

/***/ "./node_modules/graphql/error/formatError.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/error/formatError.mjs ***!
  \****************************************************/
/*! exports provided: formatError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatError", function() { return formatError; });
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/invariant */ "./node_modules/graphql/jsutils/invariant.mjs");
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 */
function formatError(error) {
  !error ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 'Received null or undefined error.') : void 0;
  var message = error.message || 'An unknown error occurred.';
  var locations = error.locations;
  var path = error.path;
  var extensions = error.extensions;
  return extensions ? {
    message: message,
    locations: locations,
    path: path,
    extensions: extensions
  } : {
    message: message,
    locations: locations,
    path: path
  };
}

/***/ }),

/***/ "./node_modules/graphql/error/index.mjs":
/*!**********************************************!*\
  !*** ./node_modules/graphql/error/index.mjs ***!
  \**********************************************/
/*! exports provided: GraphQLError, syntaxError, locatedError, printError, formatError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLError", function() { return _GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]; });

/* harmony import */ var _syntaxError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./syntaxError */ "./node_modules/graphql/error/syntaxError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "syntaxError", function() { return _syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"]; });

/* harmony import */ var _locatedError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locatedError */ "./node_modules/graphql/error/locatedError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locatedError", function() { return _locatedError__WEBPACK_IMPORTED_MODULE_2__["locatedError"]; });

/* harmony import */ var _printError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./printError */ "./node_modules/graphql/error/printError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printError", function() { return _printError__WEBPACK_IMPORTED_MODULE_3__["printError"]; });

/* harmony import */ var _formatError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatError */ "./node_modules/graphql/error/formatError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatError", function() { return _formatError__WEBPACK_IMPORTED_MODULE_4__["formatError"]; });

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */






/***/ }),

/***/ "./node_modules/graphql/error/locatedError.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/error/locatedError.mjs ***!
  \*****************************************************/
/*! exports provided: locatedError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locatedError", function() { return locatedError; });
/* harmony import */ var _GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


/**
 * Given an arbitrary Error, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */
function locatedError(originalError, nodes, path) {
  // Note: this uses a brand-check to support GraphQL errors originating from
  // other contexts.
  if (originalError && Array.isArray(originalError.path)) {
    return originalError;
  }

  return new _GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](originalError && originalError.message, originalError && originalError.nodes || nodes, originalError && originalError.source, originalError && originalError.positions, path, originalError);
}

/***/ }),

/***/ "./node_modules/graphql/error/printError.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/error/printError.mjs ***!
  \***************************************************/
/*! exports provided: printError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printError", function() { return printError; });
/* harmony import */ var _language_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/location */ "./node_modules/graphql/language/location.mjs");
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */
function printError(error) {
  var printedLocations = [];

  if (error.nodes) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = error.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var node = _step.value;

        if (node.loc) {
          printedLocations.push(highlightSourceAtLocation(node.loc.source, Object(_language_location__WEBPACK_IMPORTED_MODULE_0__["getLocation"])(node.loc.source, node.loc.start)));
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } else if (error.source && error.locations) {
    var source = error.source;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = error.locations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var location = _step2.value;
        printedLocations.push(highlightSourceAtLocation(source, location));
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  return printedLocations.length === 0 ? error.message : [error.message].concat(printedLocations).join('\n\n') + '\n';
}
/**
 * Render a helpful description of the location of the error in the GraphQL
 * Source document.
 */

function highlightSourceAtLocation(source, location) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = location.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = location.line + lineOffset;
  var columnOffset = location.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = location.column + columnOffset;
  var lines = body.split(/\r\n|[\n\r]/g);
  return "".concat(source.name, " (").concat(lineNum, ":").concat(columnNum, ")\n") + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1, ": "), lines[lineIndex - 1]], ["".concat(lineNum, ": "), lines[lineIndex]], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1, ": "), lines[lineIndex + 1]]]);
}

function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    var _ = _ref[0],
        line = _ref[1];
    return line !== undefined;
  });
  var padLen = 0;
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = existingLines[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _ref4 = _step3.value;
      var prefix = _ref4[0];
      padLen = Math.max(padLen, prefix.length);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return existingLines.map(function (_ref3) {
    var prefix = _ref3[0],
        line = _ref3[1];
    return lpad(padLen, prefix) + line;
  }).join('\n');
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function lpad(len, str) {
  return whitespace(len - str.length) + str;
}

/***/ }),

/***/ "./node_modules/graphql/error/syntaxError.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/error/syntaxError.mjs ***!
  \****************************************************/
/*! exports provided: syntaxError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syntaxError", function() { return syntaxError; });
/* harmony import */ var _GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError */ "./node_modules/graphql/error/GraphQLError.mjs");
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

function syntaxError(source, position, description) {
  return new _GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Syntax Error: ".concat(description), undefined, source, [position]);
}

/***/ }),

/***/ "./node_modules/graphql/jsutils/defineToJSON.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/jsutils/defineToJSON.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defineToJSON; });
/* harmony import */ var _nodejsCustomInspectSymbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodejsCustomInspectSymbol */ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * The `defineToJSON()` function defines toJSON() and inspect() prototype
 * methods, if no function provided they become aliases for toString().
 */

function defineToJSON( // eslint-disable-next-line flowtype/no-weak-types
classObject) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : classObject.prototype.toString;
  classObject.prototype.toJSON = fn;
  classObject.prototype.inspect = fn;

  if (_nodejsCustomInspectSymbol__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    classObject.prototype[_nodejsCustomInspectSymbol__WEBPACK_IMPORTED_MODULE_0__["default"]] = fn;
  }
}

/***/ }),

/***/ "./node_modules/graphql/jsutils/defineToStringTag.mjs":
/*!************************************************************!*\
  !*** ./node_modules/graphql/jsutils/defineToStringTag.mjs ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defineToStringTag; });
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * The `defineToStringTag()` function checks first to see if the runtime
 * supports the `Symbol` class and then if the `Symbol.toStringTag` constant
 * is defined as a `Symbol` instance. If both conditions are met, the
 * Symbol.toStringTag property is defined as a getter that returns the
 * supplied class constructor's name.
 *
 * @method defineToStringTag
 *
 * @param {Class<any>} classObject a class such as Object, String, Number but
 * typically one of your own creation through the class keyword; `class A {}`,
 * for example.
 */
function defineToStringTag(classObject) {
  if (typeof Symbol === 'function' && Symbol.toStringTag) {
    Object.defineProperty(classObject.prototype, Symbol.toStringTag, {
      get: function get() {
        return this.constructor.name;
      }
    });
  }
}

/***/ }),

/***/ "./node_modules/graphql/jsutils/inspect.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/jsutils/inspect.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return inspect; });
/* harmony import */ var _nodejsCustomInspectSymbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodejsCustomInspectSymbol */ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Used to print values in error messages.
 */

function inspect(value) {
  switch (_typeof(value)) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';

    case 'object':
      if (value) {
        var customInspectFn = getCustomFn(value);

        if (customInspectFn) {
          // $FlowFixMe(>=0.90.0)
          var customValue = customInspectFn.call(value);
          return typeof customValue === 'string' ? customValue : inspect(customValue);
        } else if (Array.isArray(value)) {
          return '[' + value.map(inspect).join(', ') + ']';
        }

        var properties = Object.keys(value).map(function (k) {
          return "".concat(k, ": ").concat(inspect(value[k]));
        }).join(', ');
        return properties ? '{ ' + properties + ' }' : '{}';
      }

      return String(value);

    default:
      return String(value);
  }
}

function getCustomFn(object) {
  var customInspectFn = object[String(_nodejsCustomInspectSymbol__WEBPACK_IMPORTED_MODULE_0__["default"])];

  if (typeof customInspectFn === 'function') {
    return customInspectFn;
  }

  if (typeof object.inspect === 'function') {
    return object.inspect;
  }
}

/***/ }),

/***/ "./node_modules/graphql/jsutils/invariant.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/invariant.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return invariant; });
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function invariant(condition, message) {
  /* istanbul ignore else */
  if (!condition) {
    throw new Error(message);
  }
}

/***/ }),

/***/ "./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/graphql/jsutils/nodejsCustomInspectSymbol.mjs ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright (c) 2018-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var nodejsCustomInspectSymbol = typeof Symbol === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;
/* harmony default export */ __webpack_exports__["default"] = (nodejsCustomInspectSymbol);

/***/ }),

/***/ "./node_modules/graphql/language/blockStringValue.mjs":
/*!************************************************************!*\
  !*** ./node_modules/graphql/language/blockStringValue.mjs ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return blockStringValue; });
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 */
function blockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

  var commonIndent = null;

  for (var i = 1; i < lines.length; i++) {
    var line = lines[i];
    var indent = leadingWhitespace(line);

    if (indent < line.length && (commonIndent === null || indent < commonIndent)) {
      commonIndent = indent;

      if (commonIndent === 0) {
        break;
      }
    }
  }

  if (commonIndent) {
    for (var _i = 1; _i < lines.length; _i++) {
      lines[_i] = lines[_i].slice(commonIndent);
    }
  } // Remove leading and trailing blank lines.


  while (lines.length > 0 && isBlank(lines[0])) {
    lines.shift();
  }

  while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
    lines.pop();
  } // Return a string of the lines joined with U+000A.


  return lines.join('\n');
}

function leadingWhitespace(str) {
  var i = 0;

  while (i < str.length && (str[i] === ' ' || str[i] === '\t')) {
    i++;
  }

  return i;
}

function isBlank(str) {
  return leadingWhitespace(str) === str.length;
}

/***/ }),

/***/ "./node_modules/graphql/language/directiveLocation.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/graphql/language/directiveLocation.mjs ***!
  \*************************************************************/
/*! exports provided: DirectiveLocation */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectiveLocation", function() { return DirectiveLocation; });
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});
/**
 * The enum type representing the directive location values.
 */

/***/ }),

/***/ "./node_modules/graphql/language/kinds.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/kinds.mjs ***!
  \*************************************************/
/*! exports provided: Kind */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return Kind; });
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = Object.freeze({
  // Name
  NAME: 'Name',
  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  // Values
  VARIABLE: 'Variable',
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  // Directives
  DIRECTIVE: 'Directive',
  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
  // Type System Extensions
  SCHEMA_EXTENSION: 'SchemaExtension',
  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
});
/**
 * The enum type representing the possible kind values of AST nodes.
 */

/***/ }),

/***/ "./node_modules/graphql/language/lexer.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/lexer.mjs ***!
  \*************************************************/
/*! exports provided: createLexer, TokenKind, getTokenDesc */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLexer", function() { return createLexer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenKind", function() { return TokenKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenDesc", function() { return getTokenDesc; });
/* harmony import */ var _jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/defineToJSON */ "./node_modules/graphql/jsutils/defineToJSON.mjs");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error */ "./node_modules/graphql/error/index.mjs");
/* harmony import */ var _blockStringValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blockStringValue */ "./node_modules/graphql/language/blockStringValue.mjs");
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



/**
 * Given a Source object, this returns a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */

function createLexer(source, options) {
  var startOfFileToken = new Tok(TokenKind.SOF, 0, 0, 0, 0, null);
  var lexer = {
    source: source,
    options: options,
    lastToken: startOfFileToken,
    token: startOfFileToken,
    line: 1,
    lineStart: 0,
    advance: advanceLexer,
    lookahead: lookahead
  };
  return lexer;
}

function advanceLexer() {
  this.lastToken = this.token;
  var token = this.token = this.lookahead();
  return token;
}

function lookahead() {
  var token = this.token;

  if (token.kind !== TokenKind.EOF) {
    do {
      // Note: next is only mutable during parsing, so we cast to allow this.
      token = token.next || (token.next = readToken(this, token));
    } while (token.kind === TokenKind.COMMENT);
  }

  return token;
}
/**
 * The return type of createLexer.
 */


/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});
/**
 * The enum type representing the token kinds values.
 */

/**
 * A helper function to describe a token as a string for debugging
 */
function getTokenDesc(token) {
  var value = token.value;
  return value ? "".concat(token.kind, " \"").concat(value, "\"") : token.kind;
}
var charCodeAt = String.prototype.charCodeAt;
var slice = String.prototype.slice;
/**
 * Helper function for constructing the Token object.
 */

function Tok(kind, start, end, line, column, prev, value) {
  this.kind = kind;
  this.start = start;
  this.end = end;
  this.line = line;
  this.column = column;
  this.value = value;
  this.prev = prev;
  this.next = null;
} // Print a simplified form when appearing in JSON/util.inspect.


Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_0__["default"])(Tok, function () {
  return {
    kind: this.kind,
    value: this.value,
    line: this.line,
    column: this.column
  };
});

function printCharCode(code) {
  return (// NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? TokenKind.EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
  );
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */


function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;
  var pos = positionAfterWhitespace(body, prev.end, lexer);
  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;

  if (pos >= bodyLength) {
    return new Tok(TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
  }

  var code = charCodeAt.call(body, pos); // SourceCharacter

  switch (code) {
    // !
    case 33:
      return new Tok(TokenKind.BANG, pos, pos + 1, line, col, prev);
    // #

    case 35:
      return readComment(source, pos, line, col, prev);
    // $

    case 36:
      return new Tok(TokenKind.DOLLAR, pos, pos + 1, line, col, prev);
    // &

    case 38:
      return new Tok(TokenKind.AMP, pos, pos + 1, line, col, prev);
    // (

    case 40:
      return new Tok(TokenKind.PAREN_L, pos, pos + 1, line, col, prev);
    // )

    case 41:
      return new Tok(TokenKind.PAREN_R, pos, pos + 1, line, col, prev);
    // .

    case 46:
      if (charCodeAt.call(body, pos + 1) === 46 && charCodeAt.call(body, pos + 2) === 46) {
        return new Tok(TokenKind.SPREAD, pos, pos + 3, line, col, prev);
      }

      break;
    // :

    case 58:
      return new Tok(TokenKind.COLON, pos, pos + 1, line, col, prev);
    // =

    case 61:
      return new Tok(TokenKind.EQUALS, pos, pos + 1, line, col, prev);
    // @

    case 64:
      return new Tok(TokenKind.AT, pos, pos + 1, line, col, prev);
    // [

    case 91:
      return new Tok(TokenKind.BRACKET_L, pos, pos + 1, line, col, prev);
    // ]

    case 93:
      return new Tok(TokenKind.BRACKET_R, pos, pos + 1, line, col, prev);
    // {

    case 123:
      return new Tok(TokenKind.BRACE_L, pos, pos + 1, line, col, prev);
    // |

    case 124:
      return new Tok(TokenKind.PIPE, pos, pos + 1, line, col, prev);
    // }

    case 125:
      return new Tok(TokenKind.BRACE_R, pos, pos + 1, line, col, prev);
    // A-Z _ a-z

    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 95:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
    case 110:
    case 111:
    case 112:
    case 113:
    case 114:
    case 115:
    case 116:
    case 117:
    case 118:
    case 119:
    case 120:
    case 121:
    case 122:
      return readName(source, pos, line, col, prev);
    // - 0-9

    case 45:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return readNumber(source, pos, code, line, col, prev);
    // "

    case 34:
      if (charCodeAt.call(body, pos + 1) === 34 && charCodeAt.call(body, pos + 2) === 34) {
        return readBlockString(source, pos, line, col, prev, lexer);
      }

      return readString(source, pos, line, col, prev);
  }

  throw Object(_error__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, pos, unexpectedCharacterMessage(code));
}
/**
 * Report a message that an unexpected character was encountered.
 */


function unexpectedCharacterMessage(code) {
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
  }

  if (code === 39) {
    // '
    return "Unexpected single quote character ('), did you mean to use " + 'a double quote (")?';
  }

  return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
}
/**
 * Reads from body starting at startPosition until it finds a non-whitespace
 * character, then returns the position of that character for lexing.
 */


function positionAfterWhitespace(body, startPosition, lexer) {
  var bodyLength = body.length;
  var position = startPosition;

  while (position < bodyLength) {
    var code = charCodeAt.call(body, position); // tab | space | comma | BOM

    if (code === 9 || code === 32 || code === 44 || code === 0xfeff) {
      ++position;
    } else if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (charCodeAt.call(body, position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else {
      break;
    }
  }

  return position;
}
/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */


function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code;
  var position = start;

  do {
    code = charCodeAt.call(body, ++position);
  } while (code !== null && ( // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new Tok(TokenKind.COMMENT, start, position, line, col, prev, slice.call(body, start + 1, position));
}
/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */


function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = charCodeAt.call(body, ++position);
  }

  if (code === 48) {
    // 0
    code = charCodeAt.call(body, ++position);

    if (code >= 48 && code <= 57) {
      throw Object(_error__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
    }
  } else {
    position = readDigits(source, position, code);
    code = charCodeAt.call(body, position);
  }

  if (code === 46) {
    // .
    isFloat = true;
    code = charCodeAt.call(body, ++position);
    position = readDigits(source, position, code);
    code = charCodeAt.call(body, position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;
    code = charCodeAt.call(body, ++position);

    if (code === 43 || code === 45) {
      // + -
      code = charCodeAt.call(body, ++position);
    }

    position = readDigits(source, position, code);
  }

  return new Tok(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, line, col, prev, slice.call(body, start, position));
}
/**
 * Returns the new position in the source after reading digits.
 */


function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;

  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = charCodeAt.call(body, ++position);
    } while (code >= 48 && code <= 57); // 0 - 9


    return position;
  }

  throw Object(_error__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
}
/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */


function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && (code = charCodeAt.call(body, position)) !== null && // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += slice.call(body, chunkStart, position);
      return new Tok(TokenKind.STRING, start, position + 1, line, col, prev, value);
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009) {
      throw Object(_error__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    ++position;

    if (code === 92) {
      // \
      value += slice.call(body, chunkStart, position - 1);
      code = charCodeAt.call(body, position);

      switch (code) {
        case 34:
          value += '"';
          break;

        case 47:
          value += '/';
          break;

        case 92:
          value += '\\';
          break;

        case 98:
          value += '\b';
          break;

        case 102:
          value += '\f';
          break;

        case 110:
          value += '\n';
          break;

        case 114:
          value += '\r';
          break;

        case 116:
          value += '\t';
          break;

        case 117:
          // u
          var charCode = uniCharCode(charCodeAt.call(body, position + 1), charCodeAt.call(body, position + 2), charCodeAt.call(body, position + 3), charCodeAt.call(body, position + 4));

          if (charCode < 0) {
            throw Object(_error__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, 'Invalid character escape sequence: ' + "\\u".concat(body.slice(position + 1, position + 5), "."));
          }

          value += String.fromCharCode(charCode);
          position += 4;
          break;

        default:
          throw Object(_error__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
      }

      ++position;
      chunkStart = position;
    }
  }

  throw Object(_error__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, 'Unterminated string.');
}
/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */


function readBlockString(source, start, line, col, prev, lexer) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && (code = charCodeAt.call(body, position)) !== null) {
    // Closing Triple-Quote (""")
    if (code === 34 && charCodeAt.call(body, position + 1) === 34 && charCodeAt.call(body, position + 2) === 34) {
      rawValue += slice.call(body, chunkStart, position);
      return new Tok(TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, Object(_blockStringValue__WEBPACK_IMPORTED_MODULE_2__["default"])(rawValue));
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw Object(_error__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (charCodeAt.call(body, position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else if ( // Escape Triple-Quote (\""")
    code === 92 && charCodeAt.call(body, position + 1) === 34 && charCodeAt.call(body, position + 2) === 34 && charCodeAt.call(body, position + 3) === 34) {
      rawValue += slice.call(body, chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw Object(_error__WEBPACK_IMPORTED_MODULE_1__["syntaxError"])(source, position, 'Unterminated string.');
}
/**
 * Converts four hexadecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */


function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}
/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */


function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */


function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;

  while (position !== bodyLength && (code = charCodeAt.call(body, position)) !== null && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }

  return new Tok(TokenKind.NAME, start, position, line, col, prev, slice.call(body, start, position));
}

/***/ }),

/***/ "./node_modules/graphql/language/location.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/language/location.mjs ***!
  \****************************************************/
/*! exports provided: getLocation */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;

  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }

  return {
    line: line,
    column: column
  };
}

/***/ }),

/***/ "./node_modules/graphql/language/parser.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/parser.mjs ***!
  \**************************************************/
/*! exports provided: parse, parseValue, parseType, parseConstValue, parseTypeReference, parseNamedType */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return parseValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseType", function() { return parseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseConstValue", function() { return parseConstValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTypeReference", function() { return parseTypeReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseNamedType", function() { return parseNamedType; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/defineToJSON */ "./node_modules/graphql/jsutils/defineToJSON.mjs");
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./source */ "./node_modules/graphql/language/source.mjs");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error */ "./node_modules/graphql/error/index.mjs");
/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lexer */ "./node_modules/graphql/language/lexer.mjs");
/* harmony import */ var _kinds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kinds */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _directiveLocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directiveLocation */ "./node_modules/graphql/language/directiveLocation.mjs");
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */







/**
 * Configuration options to control parser behavior
 */

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse(source, options) {
  var sourceObj = typeof source === 'string' ? new _source__WEBPACK_IMPORTED_MODULE_2__["Source"](source) : source;

  if (!(sourceObj instanceof _source__WEBPACK_IMPORTED_MODULE_2__["Source"])) {
    throw new TypeError("Must provide Source. Received: ".concat(Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(sourceObj)));
  }

  var lexer = Object(_lexer__WEBPACK_IMPORTED_MODULE_4__["createLexer"])(sourceObj, options || {});
  return parseDocument(lexer);
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */

function parseValue(source, options) {
  var sourceObj = typeof source === 'string' ? new _source__WEBPACK_IMPORTED_MODULE_2__["Source"](source) : source;
  var lexer = Object(_lexer__WEBPACK_IMPORTED_MODULE_4__["createLexer"])(sourceObj, options || {});
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].SOF);
  var value = parseValueLiteral(lexer, false);
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].EOF);
  return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */

function parseType(source, options) {
  var sourceObj = typeof source === 'string' ? new _source__WEBPACK_IMPORTED_MODULE_2__["Source"](source) : source;
  var lexer = Object(_lexer__WEBPACK_IMPORTED_MODULE_4__["createLexer"])(sourceObj, options || {});
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].SOF);
  var type = parseTypeReference(lexer);
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].EOF);
  return type;
}
/**
 * Converts a name lex token into a name parse node.
 */

function parseName(lexer) {
  var token = expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].NAME);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].NAME,
    value: token.value,
    loc: loc(lexer, token)
  };
} // Implements the parsing rules in the Document section.

/**
 * Document : Definition+
 */


function parseDocument(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].DOCUMENT,
    definitions: many(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].SOF, parseDefinition, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].EOF),
    loc: loc(lexer, start)
  };
}
/**
 * Definition :
 *   - ExecutableDefinition
 *   - TypeSystemDefinition
 *   - TypeSystemExtension
 */


function parseDefinition(lexer) {
  if (peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].NAME)) {
    switch (lexer.token.value) {
      case 'query':
      case 'mutation':
      case 'subscription':
      case 'fragment':
        return parseExecutableDefinition(lexer);

      case 'schema':
      case 'scalar':
      case 'type':
      case 'interface':
      case 'union':
      case 'enum':
      case 'input':
      case 'directive':
        return parseTypeSystemDefinition(lexer);

      case 'extend':
        return parseTypeSystemExtension(lexer);
    }
  } else if (peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_L)) {
    return parseExecutableDefinition(lexer);
  } else if (peekDescription(lexer)) {
    return parseTypeSystemDefinition(lexer);
  }

  throw unexpected(lexer);
}
/**
 * ExecutableDefinition :
 *   - OperationDefinition
 *   - FragmentDefinition
 */


function parseExecutableDefinition(lexer) {
  if (peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].NAME)) {
    switch (lexer.token.value) {
      case 'query':
      case 'mutation':
      case 'subscription':
        return parseOperationDefinition(lexer);

      case 'fragment':
        return parseFragmentDefinition(lexer);
    }
  } else if (peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_L)) {
    return parseOperationDefinition(lexer);
  }

  throw unexpected(lexer);
} // Implements the parsing rules in the Operations section.

/**
 * OperationDefinition :
 *  - SelectionSet
 *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
 */


function parseOperationDefinition(lexer) {
  var start = lexer.token;

  if (peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_L)) {
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].OPERATION_DEFINITION,
      operation: 'query',
      name: undefined,
      variableDefinitions: [],
      directives: [],
      selectionSet: parseSelectionSet(lexer),
      loc: loc(lexer, start)
    };
  }

  var operation = parseOperationType(lexer);
  var name;

  if (peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].NAME)) {
    name = parseName(lexer);
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].OPERATION_DEFINITION,
    operation: operation,
    name: name,
    variableDefinitions: parseVariableDefinitions(lexer),
    directives: parseDirectives(lexer, false),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}
/**
 * OperationType : one of query mutation subscription
 */


function parseOperationType(lexer) {
  var operationToken = expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].NAME);

  switch (operationToken.value) {
    case 'query':
      return 'query';

    case 'mutation':
      return 'mutation';

    case 'subscription':
      return 'subscription';
  }

  throw unexpected(lexer, operationToken);
}
/**
 * VariableDefinitions : ( VariableDefinition+ )
 */


function parseVariableDefinitions(lexer) {
  return peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].PAREN_L) ? many(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].PAREN_L, parseVariableDefinition, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].PAREN_R) : [];
}
/**
 * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
 */


function parseVariableDefinition(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].VARIABLE_DEFINITION,
    variable: parseVariable(lexer),
    type: (expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].COLON), parseTypeReference(lexer)),
    defaultValue: skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].EQUALS) ? parseValueLiteral(lexer, true) : undefined,
    directives: parseDirectives(lexer, true),
    loc: loc(lexer, start)
  };
}
/**
 * Variable : $ Name
 */


function parseVariable(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].DOLLAR);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].VARIABLE,
    name: parseName(lexer),
    loc: loc(lexer, start)
  };
}
/**
 * SelectionSet : { Selection+ }
 */


function parseSelectionSet(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].SELECTION_SET,
    selections: many(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_L, parseSelection, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_R),
    loc: loc(lexer, start)
  };
}
/**
 * Selection :
 *   - Field
 *   - FragmentSpread
 *   - InlineFragment
 */


function parseSelection(lexer) {
  return peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].SPREAD) ? parseFragment(lexer) : parseField(lexer);
}
/**
 * Field : Alias? Name Arguments? Directives? SelectionSet?
 *
 * Alias : Name :
 */


function parseField(lexer) {
  var start = lexer.token;
  var nameOrAlias = parseName(lexer);
  var alias;
  var name;

  if (skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].COLON)) {
    alias = nameOrAlias;
    name = parseName(lexer);
  } else {
    name = nameOrAlias;
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].FIELD,
    alias: alias,
    name: name,
    arguments: parseArguments(lexer, false),
    directives: parseDirectives(lexer, false),
    selectionSet: peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_L) ? parseSelectionSet(lexer) : undefined,
    loc: loc(lexer, start)
  };
}
/**
 * Arguments[Const] : ( Argument[?Const]+ )
 */


function parseArguments(lexer, isConst) {
  var item = isConst ? parseConstArgument : parseArgument;
  return peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].PAREN_L) ? many(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].PAREN_L, item, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].PAREN_R) : [];
}
/**
 * Argument[Const] : Name : Value[?Const]
 */


function parseArgument(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].ARGUMENT,
    name: parseName(lexer),
    value: (expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].COLON), parseValueLiteral(lexer, false)),
    loc: loc(lexer, start)
  };
}

function parseConstArgument(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].ARGUMENT,
    name: parseName(lexer),
    value: (expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].COLON), parseConstValue(lexer)),
    loc: loc(lexer, start)
  };
} // Implements the parsing rules in the Fragments section.

/**
 * Corresponds to both FragmentSpread and InlineFragment in the spec.
 *
 * FragmentSpread : ... FragmentName Directives?
 *
 * InlineFragment : ... TypeCondition? Directives? SelectionSet
 */


function parseFragment(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].SPREAD);
  var hasTypeCondition = skipKeyword(lexer, 'on');

  if (!hasTypeCondition && peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].NAME)) {
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].FRAGMENT_SPREAD,
      name: parseFragmentName(lexer),
      directives: parseDirectives(lexer, false),
      loc: loc(lexer, start)
    };
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].INLINE_FRAGMENT,
    typeCondition: hasTypeCondition ? parseNamedType(lexer) : undefined,
    directives: parseDirectives(lexer, false),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}
/**
 * FragmentDefinition :
 *   - fragment FragmentName on TypeCondition Directives? SelectionSet
 *
 * TypeCondition : NamedType
 */


function parseFragmentDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'fragment'); // Experimental support for defining variables within fragments changes
  // the grammar of FragmentDefinition:
  //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

  if (lexer.options.experimentalFragmentVariables) {
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].FRAGMENT_DEFINITION,
      name: parseFragmentName(lexer),
      variableDefinitions: parseVariableDefinitions(lexer),
      typeCondition: (expectKeyword(lexer, 'on'), parseNamedType(lexer)),
      directives: parseDirectives(lexer, false),
      selectionSet: parseSelectionSet(lexer),
      loc: loc(lexer, start)
    };
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].FRAGMENT_DEFINITION,
    name: parseFragmentName(lexer),
    typeCondition: (expectKeyword(lexer, 'on'), parseNamedType(lexer)),
    directives: parseDirectives(lexer, false),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}
/**
 * FragmentName : Name but not `on`
 */


function parseFragmentName(lexer) {
  if (lexer.token.value === 'on') {
    throw unexpected(lexer);
  }

  return parseName(lexer);
} // Implements the parsing rules in the Values section.

/**
 * Value[Const] :
 *   - [~Const] Variable
 *   - IntValue
 *   - FloatValue
 *   - StringValue
 *   - BooleanValue
 *   - NullValue
 *   - EnumValue
 *   - ListValue[?Const]
 *   - ObjectValue[?Const]
 *
 * BooleanValue : one of `true` `false`
 *
 * NullValue : `null`
 *
 * EnumValue : Name but not `true`, `false` or `null`
 */


function parseValueLiteral(lexer, isConst) {
  var token = lexer.token;

  switch (token.kind) {
    case _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACKET_L:
      return parseList(lexer, isConst);

    case _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_L:
      return parseObject(lexer, isConst);

    case _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].INT:
      lexer.advance();
      return {
        kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].INT,
        value: token.value,
        loc: loc(lexer, token)
      };

    case _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].FLOAT:
      lexer.advance();
      return {
        kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].FLOAT,
        value: token.value,
        loc: loc(lexer, token)
      };

    case _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].STRING:
    case _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BLOCK_STRING:
      return parseStringLiteral(lexer);

    case _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].NAME:
      if (token.value === 'true' || token.value === 'false') {
        lexer.advance();
        return {
          kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].BOOLEAN,
          value: token.value === 'true',
          loc: loc(lexer, token)
        };
      } else if (token.value === 'null') {
        lexer.advance();
        return {
          kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].NULL,
          loc: loc(lexer, token)
        };
      }

      lexer.advance();
      return {
        kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].ENUM,
        value: token.value,
        loc: loc(lexer, token)
      };

    case _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].DOLLAR:
      if (!isConst) {
        return parseVariable(lexer);
      }

      break;
  }

  throw unexpected(lexer);
}

function parseStringLiteral(lexer) {
  var token = lexer.token;
  lexer.advance();
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].STRING,
    value: token.value,
    block: token.kind === _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BLOCK_STRING,
    loc: loc(lexer, token)
  };
}

function parseConstValue(lexer) {
  return parseValueLiteral(lexer, true);
}

function parseValueValue(lexer) {
  return parseValueLiteral(lexer, false);
}
/**
 * ListValue[Const] :
 *   - [ ]
 *   - [ Value[?Const]+ ]
 */


function parseList(lexer, isConst) {
  var start = lexer.token;
  var item = isConst ? parseConstValue : parseValueValue;
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].LIST,
    values: any(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACKET_L, item, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACKET_R),
    loc: loc(lexer, start)
  };
}
/**
 * ObjectValue[Const] :
 *   - { }
 *   - { ObjectField[?Const]+ }
 */


function parseObject(lexer, isConst) {
  var start = lexer.token;
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_L);
  var fields = [];

  while (!skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_R)) {
    fields.push(parseObjectField(lexer, isConst));
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].OBJECT,
    fields: fields,
    loc: loc(lexer, start)
  };
}
/**
 * ObjectField[Const] : Name : Value[?Const]
 */


function parseObjectField(lexer, isConst) {
  var start = lexer.token;
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].OBJECT_FIELD,
    name: parseName(lexer),
    value: (expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].COLON), parseValueLiteral(lexer, isConst)),
    loc: loc(lexer, start)
  };
} // Implements the parsing rules in the Directives section.

/**
 * Directives[Const] : Directive[?Const]+
 */


function parseDirectives(lexer, isConst) {
  var directives = [];

  while (peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].AT)) {
    directives.push(parseDirective(lexer, isConst));
  }

  return directives;
}
/**
 * Directive[Const] : @ Name Arguments[?Const]?
 */


function parseDirective(lexer, isConst) {
  var start = lexer.token;
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].AT);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].DIRECTIVE,
    name: parseName(lexer),
    arguments: parseArguments(lexer, isConst),
    loc: loc(lexer, start)
  };
} // Implements the parsing rules in the Types section.

/**
 * Type :
 *   - NamedType
 *   - ListType
 *   - NonNullType
 */


function parseTypeReference(lexer) {
  var start = lexer.token;
  var type;

  if (skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACKET_L)) {
    type = parseTypeReference(lexer);
    expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACKET_R);
    type = {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].LIST_TYPE,
      type: type,
      loc: loc(lexer, start)
    };
  } else {
    type = parseNamedType(lexer);
  }

  if (skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BANG)) {
    return {
      kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].NON_NULL_TYPE,
      type: type,
      loc: loc(lexer, start)
    };
  }

  return type;
}
/**
 * NamedType : Name
 */

function parseNamedType(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].NAMED_TYPE,
    name: parseName(lexer),
    loc: loc(lexer, start)
  };
} // Implements the parsing rules in the Type Definition section.

/**
 * TypeSystemDefinition :
 *   - SchemaDefinition
 *   - TypeDefinition
 *   - DirectiveDefinition
 *
 * TypeDefinition :
 *   - ScalarTypeDefinition
 *   - ObjectTypeDefinition
 *   - InterfaceTypeDefinition
 *   - UnionTypeDefinition
 *   - EnumTypeDefinition
 *   - InputObjectTypeDefinition
 */

function parseTypeSystemDefinition(lexer) {
  // Many definitions begin with a description and require a lookahead.
  var keywordToken = peekDescription(lexer) ? lexer.lookahead() : lexer.token;

  if (keywordToken.kind === _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].NAME) {
    switch (keywordToken.value) {
      case 'schema':
        return parseSchemaDefinition(lexer);

      case 'scalar':
        return parseScalarTypeDefinition(lexer);

      case 'type':
        return parseObjectTypeDefinition(lexer);

      case 'interface':
        return parseInterfaceTypeDefinition(lexer);

      case 'union':
        return parseUnionTypeDefinition(lexer);

      case 'enum':
        return parseEnumTypeDefinition(lexer);

      case 'input':
        return parseInputObjectTypeDefinition(lexer);

      case 'directive':
        return parseDirectiveDefinition(lexer);
    }
  }

  throw unexpected(lexer, keywordToken);
}

function peekDescription(lexer) {
  return peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].STRING) || peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BLOCK_STRING);
}
/**
 * Description : StringValue
 */


function parseDescription(lexer) {
  if (peekDescription(lexer)) {
    return parseStringLiteral(lexer);
  }
}
/**
 * SchemaDefinition : schema Directives[Const]? { OperationTypeDefinition+ }
 */


function parseSchemaDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'schema');
  var directives = parseDirectives(lexer, true);
  var operationTypes = many(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_L, parseOperationTypeDefinition, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_R);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].SCHEMA_DEFINITION,
    directives: directives,
    operationTypes: operationTypes,
    loc: loc(lexer, start)
  };
}
/**
 * OperationTypeDefinition : OperationType : NamedType
 */


function parseOperationTypeDefinition(lexer) {
  var start = lexer.token;
  var operation = parseOperationType(lexer);
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].COLON);
  var type = parseNamedType(lexer);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].OPERATION_TYPE_DEFINITION,
    operation: operation,
    type: type,
    loc: loc(lexer, start)
  };
}
/**
 * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
 */


function parseScalarTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'scalar');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].SCALAR_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}
/**
 * ObjectTypeDefinition :
 *   Description?
 *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
 */


function parseObjectTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'type');
  var name = parseName(lexer);
  var interfaces = parseImplementsInterfaces(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].OBJECT_TYPE_DEFINITION,
    description: description,
    name: name,
    interfaces: interfaces,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}
/**
 * ImplementsInterfaces :
 *   - implements `&`? NamedType
 *   - ImplementsInterfaces & NamedType
 */


function parseImplementsInterfaces(lexer) {
  var types = [];

  if (skipKeyword(lexer, 'implements')) {
    // Optional leading ampersand
    skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].AMP);

    do {
      types.push(parseNamedType(lexer));
    } while (skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].AMP) || // Legacy support for the SDL?
    lexer.options.allowLegacySDLImplementsInterfaces && peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].NAME));
  }

  return types;
}
/**
 * FieldsDefinition : { FieldDefinition+ }
 */


function parseFieldsDefinition(lexer) {
  // Legacy support for the SDL?
  if (lexer.options.allowLegacySDLEmptyFields && peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_L) && lexer.lookahead().kind === _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_R) {
    lexer.advance();
    lexer.advance();
    return [];
  }

  return peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_L) ? many(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_L, parseFieldDefinition, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_R) : [];
}
/**
 * FieldDefinition :
 *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
 */


function parseFieldDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  var name = parseName(lexer);
  var args = parseArgumentDefs(lexer);
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].COLON);
  var type = parseTypeReference(lexer);
  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].FIELD_DEFINITION,
    description: description,
    name: name,
    arguments: args,
    type: type,
    directives: directives,
    loc: loc(lexer, start)
  };
}
/**
 * ArgumentsDefinition : ( InputValueDefinition+ )
 */


function parseArgumentDefs(lexer) {
  if (!peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].PAREN_L)) {
    return [];
  }

  return many(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].PAREN_L, parseInputValueDef, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].PAREN_R);
}
/**
 * InputValueDefinition :
 *   - Description? Name : Type DefaultValue? Directives[Const]?
 */


function parseInputValueDef(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  var name = parseName(lexer);
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].COLON);
  var type = parseTypeReference(lexer);
  var defaultValue;

  if (skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].EQUALS)) {
    defaultValue = parseConstValue(lexer);
  }

  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].INPUT_VALUE_DEFINITION,
    description: description,
    name: name,
    type: type,
    defaultValue: defaultValue,
    directives: directives,
    loc: loc(lexer, start)
  };
}
/**
 * InterfaceTypeDefinition :
 *   - Description? interface Name Directives[Const]? FieldsDefinition?
 */


function parseInterfaceTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'interface');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].INTERFACE_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}
/**
 * UnionTypeDefinition :
 *   - Description? union Name Directives[Const]? UnionMemberTypes?
 */


function parseUnionTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'union');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var types = parseUnionMemberTypes(lexer);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].UNION_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    types: types,
    loc: loc(lexer, start)
  };
}
/**
 * UnionMemberTypes :
 *   - = `|`? NamedType
 *   - UnionMemberTypes | NamedType
 */


function parseUnionMemberTypes(lexer) {
  var types = [];

  if (skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].EQUALS)) {
    // Optional leading pipe
    skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].PIPE);

    do {
      types.push(parseNamedType(lexer));
    } while (skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].PIPE));
  }

  return types;
}
/**
 * EnumTypeDefinition :
 *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
 */


function parseEnumTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'enum');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var values = parseEnumValuesDefinition(lexer);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].ENUM_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    values: values,
    loc: loc(lexer, start)
  };
}
/**
 * EnumValuesDefinition : { EnumValueDefinition+ }
 */


function parseEnumValuesDefinition(lexer) {
  return peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_L) ? many(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_L, parseEnumValueDefinition, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_R) : [];
}
/**
 * EnumValueDefinition : Description? EnumValue Directives[Const]?
 *
 * EnumValue : Name
 */


function parseEnumValueDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].ENUM_VALUE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}
/**
 * InputObjectTypeDefinition :
 *   - Description? input Name Directives[Const]? InputFieldsDefinition?
 */


function parseInputObjectTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'input');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseInputFieldsDefinition(lexer);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].INPUT_OBJECT_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}
/**
 * InputFieldsDefinition : { InputValueDefinition+ }
 */


function parseInputFieldsDefinition(lexer) {
  return peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_L) ? many(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_L, parseInputValueDef, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_R) : [];
}
/**
 * TypeSystemExtension :
 *   - SchemaExtension
 *   - TypeExtension
 *
 * TypeExtension :
 *   - ScalarTypeExtension
 *   - ObjectTypeExtension
 *   - InterfaceTypeExtension
 *   - UnionTypeExtension
 *   - EnumTypeExtension
 *   - InputObjectTypeDefinition
 */


function parseTypeSystemExtension(lexer) {
  var keywordToken = lexer.lookahead();

  if (keywordToken.kind === _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].NAME) {
    switch (keywordToken.value) {
      case 'schema':
        return parseSchemaExtension(lexer);

      case 'scalar':
        return parseScalarTypeExtension(lexer);

      case 'type':
        return parseObjectTypeExtension(lexer);

      case 'interface':
        return parseInterfaceTypeExtension(lexer);

      case 'union':
        return parseUnionTypeExtension(lexer);

      case 'enum':
        return parseEnumTypeExtension(lexer);

      case 'input':
        return parseInputObjectTypeExtension(lexer);
    }
  }

  throw unexpected(lexer, keywordToken);
}
/**
 * SchemaExtension :
 *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
 *  - extend schema Directives[Const]
 */


function parseSchemaExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'schema');
  var directives = parseDirectives(lexer, true);
  var operationTypes = peek(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_L) ? many(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_L, parseOperationTypeDefinition, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].BRACE_R) : [];

  if (directives.length === 0 && operationTypes.length === 0) {
    throw unexpected(lexer);
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].SCHEMA_EXTENSION,
    directives: directives,
    operationTypes: operationTypes,
    loc: loc(lexer, start)
  };
}
/**
 * ScalarTypeExtension :
 *   - extend scalar Name Directives[Const]
 */


function parseScalarTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'scalar');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);

  if (directives.length === 0) {
    throw unexpected(lexer);
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].SCALAR_TYPE_EXTENSION,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}
/**
 * ObjectTypeExtension :
 *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
 *  - extend type Name ImplementsInterfaces? Directives[Const]
 *  - extend type Name ImplementsInterfaces
 */


function parseObjectTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'type');
  var name = parseName(lexer);
  var interfaces = parseImplementsInterfaces(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);

  if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer);
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].OBJECT_TYPE_EXTENSION,
    name: name,
    interfaces: interfaces,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}
/**
 * InterfaceTypeExtension :
 *   - extend interface Name Directives[Const]? FieldsDefinition
 *   - extend interface Name Directives[Const]
 */


function parseInterfaceTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'interface');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);

  if (directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer);
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].INTERFACE_TYPE_EXTENSION,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}
/**
 * UnionTypeExtension :
 *   - extend union Name Directives[Const]? UnionMemberTypes
 *   - extend union Name Directives[Const]
 */


function parseUnionTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'union');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var types = parseUnionMemberTypes(lexer);

  if (directives.length === 0 && types.length === 0) {
    throw unexpected(lexer);
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].UNION_TYPE_EXTENSION,
    name: name,
    directives: directives,
    types: types,
    loc: loc(lexer, start)
  };
}
/**
 * EnumTypeExtension :
 *   - extend enum Name Directives[Const]? EnumValuesDefinition
 *   - extend enum Name Directives[Const]
 */


function parseEnumTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'enum');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var values = parseEnumValuesDefinition(lexer);

  if (directives.length === 0 && values.length === 0) {
    throw unexpected(lexer);
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].ENUM_TYPE_EXTENSION,
    name: name,
    directives: directives,
    values: values,
    loc: loc(lexer, start)
  };
}
/**
 * InputObjectTypeExtension :
 *   - extend input Name Directives[Const]? InputFieldsDefinition
 *   - extend input Name Directives[Const]
 */


function parseInputObjectTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'input');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseInputFieldsDefinition(lexer);

  if (directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer);
  }

  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].INPUT_OBJECT_TYPE_EXTENSION,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}
/**
 * DirectiveDefinition :
 *   - Description? directive @ Name ArgumentsDefinition? on DirectiveLocations
 */


function parseDirectiveDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'directive');
  expect(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].AT);
  var name = parseName(lexer);
  var args = parseArgumentDefs(lexer);
  expectKeyword(lexer, 'on');
  var locations = parseDirectiveLocations(lexer);
  return {
    kind: _kinds__WEBPACK_IMPORTED_MODULE_5__["Kind"].DIRECTIVE_DEFINITION,
    description: description,
    name: name,
    arguments: args,
    locations: locations,
    loc: loc(lexer, start)
  };
}
/**
 * DirectiveLocations :
 *   - `|`? DirectiveLocation
 *   - DirectiveLocations | DirectiveLocation
 */


function parseDirectiveLocations(lexer) {
  // Optional leading pipe
  skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].PIPE);
  var locations = [];

  do {
    locations.push(parseDirectiveLocation(lexer));
  } while (skip(lexer, _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].PIPE));

  return locations;
}
/*
 * DirectiveLocation :
 *   - ExecutableDirectiveLocation
 *   - TypeSystemDirectiveLocation
 *
 * ExecutableDirectiveLocation : one of
 *   `QUERY`
 *   `MUTATION`
 *   `SUBSCRIPTION`
 *   `FIELD`
 *   `FRAGMENT_DEFINITION`
 *   `FRAGMENT_SPREAD`
 *   `INLINE_FRAGMENT`
 *
 * TypeSystemDirectiveLocation : one of
 *   `SCHEMA`
 *   `SCALAR`
 *   `OBJECT`
 *   `FIELD_DEFINITION`
 *   `ARGUMENT_DEFINITION`
 *   `INTERFACE`
 *   `UNION`
 *   `ENUM`
 *   `ENUM_VALUE`
 *   `INPUT_OBJECT`
 *   `INPUT_FIELD_DEFINITION`
 */


function parseDirectiveLocation(lexer) {
  var start = lexer.token;
  var name = parseName(lexer);

  if (_directiveLocation__WEBPACK_IMPORTED_MODULE_6__["DirectiveLocation"].hasOwnProperty(name.value)) {
    return name;
  }

  throw unexpected(lexer, start);
} // Core parsing utility functions

/**
 * Returns a location object, used to identify the place in
 * the source that created a given parsed object.
 */


function loc(lexer, startToken) {
  if (!lexer.options.noLocation) {
    return new Loc(startToken, lexer.lastToken, lexer.source);
  }
}

function Loc(startToken, endToken, source) {
  this.start = startToken.start;
  this.end = endToken.end;
  this.startToken = startToken;
  this.endToken = endToken;
  this.source = source;
} // Print a simplified form when appearing in JSON/util.inspect.


Object(_jsutils_defineToJSON__WEBPACK_IMPORTED_MODULE_1__["default"])(Loc, function () {
  return {
    start: this.start,
    end: this.end
  };
});
/**
 * Determines if the next token is of a given kind
 */

function peek(lexer, kind) {
  return lexer.token.kind === kind;
}
/**
 * If the next token is of the given kind, return true after advancing
 * the lexer. Otherwise, do not change the parser state and return false.
 */


function skip(lexer, kind) {
  if (lexer.token.kind === kind) {
    lexer.advance();
    return true;
  }

  return false;
}
/**
 * If the next token is of the given kind, return that token after advancing
 * the lexer. Otherwise, do not change the parser state and throw an error.
 */


function expect(lexer, kind) {
  var token = lexer.token;

  if (token.kind === kind) {
    lexer.advance();
    return token;
  }

  throw Object(_error__WEBPACK_IMPORTED_MODULE_3__["syntaxError"])(lexer.source, token.start, "Expected ".concat(kind, ", found ").concat(Object(_lexer__WEBPACK_IMPORTED_MODULE_4__["getTokenDesc"])(token)));
}
/**
 * If the next token is a keyword with the given value, return true after advancing
 * the lexer. Otherwise, do not change the parser state and return false.
 */


function skipKeyword(lexer, value) {
  var token = lexer.token;

  if (token.kind === _lexer__WEBPACK_IMPORTED_MODULE_4__["TokenKind"].NAME && token.value === value) {
    lexer.advance();
    return true;
  }

  return false;
}
/**
 * If the next token is a keyword with the given value, return that token after
 * advancing the lexer. Otherwise, do not change the parser state and throw
 * an error.
 */


function expectKeyword(lexer, value) {
  if (!skipKeyword(lexer, value)) {
    throw Object(_error__WEBPACK_IMPORTED_MODULE_3__["syntaxError"])(lexer.source, lexer.token.start, "Expected \"".concat(value, "\", found ").concat(Object(_lexer__WEBPACK_IMPORTED_MODULE_4__["getTokenDesc"])(lexer.token)));
  }
}
/**
 * Helper function for creating an error when an unexpected lexed token
 * is encountered.
 */


function unexpected(lexer, atToken) {
  var token = atToken || lexer.token;
  return Object(_error__WEBPACK_IMPORTED_MODULE_3__["syntaxError"])(lexer.source, token.start, "Unexpected ".concat(Object(_lexer__WEBPACK_IMPORTED_MODULE_4__["getTokenDesc"])(token)));
}
/**
 * Returns a possibly empty list of parse nodes, determined by
 * the parseFn. This list begins with a lex token of openKind
 * and ends with a lex token of closeKind. Advances the parser
 * to the next lex token after the closing token.
 */


function any(lexer, openKind, parseFn, closeKind) {
  expect(lexer, openKind);
  var nodes = [];

  while (!skip(lexer, closeKind)) {
    nodes.push(parseFn(lexer));
  }

  return nodes;
}
/**
 * Returns a non-empty list of parse nodes, determined by
 * the parseFn. This list begins with a lex token of openKind
 * and ends with a lex token of closeKind. Advances the parser
 * to the next lex token after the closing token.
 */


function many(lexer, openKind, parseFn, closeKind) {
  expect(lexer, openKind);
  var nodes = [parseFn(lexer)];

  while (!skip(lexer, closeKind)) {
    nodes.push(parseFn(lexer));
  }

  return nodes;
}

/***/ }),

/***/ "./node_modules/graphql/language/printer.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/language/printer.mjs ***!
  \***************************************************/
/*! exports provided: print */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print", function() { return print; });
/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visitor */ "./node_modules/graphql/language/visitor.mjs");
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */

function print(ast) {
  return Object(_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(ast, {
    leave: printDocASTReducer
  });
}
var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },
  // Document
  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },
  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet; // Anonymous queries with no directives or variable definitions can use
    // the query short form.

    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },
  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue,
        directives = _ref.directives;
    return variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '));
  },
  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },
  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
  },
  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },
  // Fragments
  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },
  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },
  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        variableDefinitions = _ref7.variableDefinitions,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return (// Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      "fragment ".concat(name).concat(wrap('(', join(variableDefinitions, ', '), ')'), " ") + "on ".concat(typeCondition, " ").concat(wrap('', join(directives, ' '), ' ')) + selectionSet
    );
  },
  // Value
  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value,
        isBlockString = _ref10.block;
    return isBlockString ? printBlockString(value, key === 'description') : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? 'true' : 'false';
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },
  // Directive
  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },
  // Type
  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },
  // Type System Definitions
  SchemaDefinition: function SchemaDefinition(_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },
  ScalarTypeDefinition: addDescription(function (_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  }),
  ObjectTypeDefinition: addDescription(function (_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  FieldDefinition: addDescription(function (_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ': ' + type + wrap(' ', join(directives, ' '));
  }),
  InputValueDefinition: addDescription(function (_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  }),
  InterfaceTypeDefinition: addDescription(function (_ref26) {
    var name = _ref26.name,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, join(directives, ' '), block(fields)], ' ');
  }),
  UnionTypeDefinition: addDescription(function (_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  }),
  EnumTypeDefinition: addDescription(function (_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  }),
  EnumValueDefinition: addDescription(function (_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  }),
  InputObjectTypeDefinition: addDescription(function (_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  }),
  DirectiveDefinition: addDescription(function (_ref31) {
    var name = _ref31.name,
        args = _ref31.arguments,
        locations = _ref31.locations;
    return 'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ' on ' + join(locations, ' | ');
  }),
  SchemaExtension: function SchemaExtension(_ref32) {
    var directives = _ref32.directives,
        operationTypes = _ref32.operationTypes;
    return join(['extend schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
    var name = _ref33.name,
        directives = _ref33.directives;
    return join(['extend scalar', name, join(directives, ' ')], ' ');
  },
  ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
    var name = _ref34.name,
        interfaces = _ref34.interfaces,
        directives = _ref34.directives,
        fields = _ref34.fields;
    return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
    var name = _ref35.name,
        directives = _ref35.directives,
        fields = _ref35.fields;
    return join(['extend interface', name, join(directives, ' '), block(fields)], ' ');
  },
  UnionTypeExtension: function UnionTypeExtension(_ref36) {
    var name = _ref36.name,
        directives = _ref36.directives,
        types = _ref36.types;
    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  },
  EnumTypeExtension: function EnumTypeExtension(_ref37) {
    var name = _ref37.name,
        directives = _ref37.directives,
        values = _ref37.values;
    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
  },
  InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
    var name = _ref38.name,
        directives = _ref38.directives,
        fields = _ref38.fields;
    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
  }
};

function addDescription(cb) {
  return function (node) {
    return join([node.description, cb(node)], '\n');
  };
}
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */


function join(maybeArray, separator) {
  return maybeArray ? maybeArray.filter(function (x) {
    return x;
  }).join(separator || '') : '';
}
/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */


function block(array) {
  return array && array.length !== 0 ? '{\n' + indent(join(array, '\n')) + '\n}' : '';
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise
 * print an empty string.
 */


function wrap(start, maybeString, end) {
  return maybeString ? start + maybeString + (end || '') : '';
}

function indent(maybeString) {
  return maybeString && '  ' + maybeString.replace(/\n/g, '\n  ');
}

function isMultiline(string) {
  return string.indexOf('\n') !== -1;
}

function hasMultilineItems(maybeArray) {
  return maybeArray && maybeArray.some(isMultiline);
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 */


function printBlockString(value, isDescription) {
  var escaped = value.replace(/"""/g, '\\"""');
  return isMultiline(value) || value[0] !== ' ' && value[0] !== '\t' ? "\"\"\"\n".concat(isDescription ? escaped : indent(escaped), "\n\"\"\"") : "\"\"\"".concat(escaped.replace(/"$/, '"\n'), "\"\"\"");
}

/***/ }),

/***/ "./node_modules/graphql/language/source.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/source.mjs ***!
  \**************************************************/
/*! exports provided: Source */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return Source; });
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/invariant */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/defineToStringTag */ "./node_modules/graphql/jsutils/defineToStringTag.mjs");
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



/**
 * A representation of source input to GraphQL.
 * `name` and `locationOffset` are optional. They are useful for clients who
 * store GraphQL documents in source files; for example, if the GraphQL input
 * starts at line 40 in a file named Foo.graphql, it might be useful for name to
 * be "Foo.graphql" and location to be `{ line: 40, column: 0 }`.
 * line and column in locationOffset are 1-indexed
 */
var Source = function Source(body, name, locationOffset) {
  this.body = body;
  this.name = name || 'GraphQL request';
  this.locationOffset = locationOffset || {
    line: 1,
    column: 1
  };
  !(this.locationOffset.line > 0) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 'line in locationOffset is 1-indexed and must be positive') : void 0;
  !(this.locationOffset.column > 0) ? Object(_jsutils_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 'column in locationOffset is 1-indexed and must be positive') : void 0;
}; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

Object(_jsutils_defineToStringTag__WEBPACK_IMPORTED_MODULE_1__["default"])(Source);

/***/ }),

/***/ "./node_modules/graphql/language/visitor.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/language/visitor.mjs ***!
  \***************************************************/
/*! exports provided: QueryDocumentKeys, BREAK, visit, visitInParallel, visitWithTypeInfo, getVisitFn */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryDocumentKeys", function() { return QueryDocumentKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAK", function() { return BREAK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return visit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitInParallel", function() { return visitInParallel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitWithTypeInfo", function() { return visitWithTypeInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisitFn", function() { return getVisitFn; });
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect */ "./node_modules/graphql/jsutils/inspect.mjs");
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var QueryDocumentKeys = {
  Name: [],
  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],
  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', // Note: fragment variable definitions are experimental and may be changed
  // or removed in the future.
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],
  Directive: ['name', 'arguments'],
  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],
  SchemaDefinition: ['directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],
  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
  SchemaExtension: ['directives', 'operationTypes'],
  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields']
};
var BREAK = {};
/**
 * visit() will walk through an AST using a depth first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */

function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

  /* eslint-disable no-undef-init */
  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = undefined;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;

    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();

      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};

          var _arr = Object.keys(node);

          for (var _i = 0; _i < _arr.length; _i++) {
            var k = _arr[_i];
            clone[k] = node[k];
          }

          node = clone;
        }

        var editOffset = 0;

        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];

          if (inArray) {
            editKey -= editOffset;
          }

          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }

      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;

      if (node === null || node === undefined) {
        continue;
      }

      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;

    if (!Array.isArray(node)) {
      if (!isNode(node)) {
        throw new Error('Invalid AST Node: ' + Object(_jsutils_inspect__WEBPACK_IMPORTED_MODULE_0__["default"])(node));
      }

      var visitFn = getVisitFn(visitor, node.kind, isLeaving);

      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);

          if (!isLeaving) {
            if (isNode(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      stack = {
        inArray: inArray,
        index: index,
        keys: keys,
        edits: edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : visitorKeys[node.kind] || [];
      index = -1;
      edits = [];

      if (parent) {
        ancestors.push(parent);
      }

      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}

function isNode(maybeNode) {
  return Boolean(maybeNode && typeof maybeNode.kind === 'string');
}
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */


function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);
  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          false);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          true);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}
/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */

function visitWithTypeInfo(typeInfo, visitor) {
  return {
    enter: function enter(node) {
      typeInfo.enter(node);
      var fn = getVisitFn(visitor, node.kind,
      /* isLeaving */
      false);

      if (fn) {
        var result = fn.apply(visitor, arguments);

        if (result !== undefined) {
          typeInfo.leave(node);

          if (isNode(result)) {
            typeInfo.enter(result);
          }
        }

        return result;
      }
    },
    leave: function leave(node) {
      var fn = getVisitFn(visitor, node.kind,
      /* isLeaving */
      true);
      var result;

      if (fn) {
        result = fn.apply(visitor, arguments);
      }

      typeInfo.leave(node);
      return result;
    }
  };
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */

function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];

  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }

    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;

    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;

    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }

      var specificKindVisitor = specificVisitor[kind];

      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}

/***/ }),

/***/ "./node_modules/immutable-tuple/dist/tuple.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/immutable-tuple/dist/tuple.mjs ***!
  \*****************************************************/
/*! exports provided: default, tuple, lookup, lookupArray */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuple", function() { return tuple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookup", function() { return lookup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookupArray", function() { return lookupArray; });
// Although `Symbol` is widely supported these days, we can safely fall
// back to using a non-enumerable string property without violating any
// assumptions elsewhere in the implementation.
var useSymbol =
  typeof Symbol === "function" &&
  typeof Symbol.for === "function";

// Used to mark `tuple.prototype` so that all objects that inherit from
// any `tuple.prototype` object (there could be more than one) will test
// positive according to `tuple.isTuple`.
var brand = useSymbol
  ? Symbol.for("immutable-tuple")
  : "@@__IMMUTABLE_TUPLE__@@";

// Used to save a reference to the globally shared `UniversalWeakMap` that
// stores all known `tuple` objects.
var globalKey = useSymbol
  ? Symbol.for("immutable-tuple-root")
  : "@@__IMMUTABLE_TUPLE_ROOT__@@";

// Convenient helper for defining hidden immutable properties.
function def(obj, name, value, enumerable) {
  Object.defineProperty(obj, name, {
    value: value,
    enumerable: !! enumerable,
    writable: false,
    configurable: false
  });
  return value;
}

var freeze = Object.freeze || function (obj) {
  return obj;
};

function isObjRef(value) {
  switch (typeof value) {
  case "object":
    if (value === null) {
      return false;
    }
  case "function":
    return true;
  default:
    return false;
  }
}

// The `mustConvertThisToArray` value is true when the corresponding
// `Array` method does not attempt to modify `this`, which means we can
// pass a `tuple` object as `this` without first converting it to an
// `Array`.
function forEachArrayMethod(fn) {
  function call(name, mustConvertThisToArray) {
    var desc = Object.getOwnPropertyDescriptor(Array.prototype, name);
    fn(name, desc, !! mustConvertThisToArray);
  }

  call("every");
  call("filter");
  call("find");
  call("findIndex");
  call("forEach");
  call("includes");
  call("indexOf");
  call("join");
  call("lastIndexOf");
  call("map");
  call("reduce");
  call("reduceRight");
  call("slice");
  call("some");
  call("toLocaleString");
  call("toString");

  // The `reverse` and `sort` methods are usually destructive, but for
  // `tuple` objects they return a new `tuple` object that has been
  // appropriately reversed/sorted.
  call("reverse", true);
  call("sort", true);

  // Make `[...someTuple]` work.
  call(useSymbol && Symbol.iterator || "@@iterator");
}

// A map data structure that holds object keys weakly, yet can also hold
// non-object keys, unlike the native `WeakMap`.
var UniversalWeakMap = function UniversalWeakMap() {
  // Since a `WeakMap` cannot hold primitive values as keys, we need a
  // backup `Map` instance to hold primitive keys. Both `this._weakMap`
  // and `this._strongMap` are lazily initialized.
  this._weakMap = null;
  this._strongMap = null;
  this.data = null;
};

// Since `get` and `set` are the only methods used, that's all I've
// implemented here.

UniversalWeakMap.prototype.get = function get (key) {
  var map = this._getMap(key, false);
  if (map) {
    return map.get(key);
  }
};

UniversalWeakMap.prototype.set = function set (key, value) {
  this._getMap(key, true).set(key, value);
  // An actual `Map` or `WeakMap` would return `this` here, but
  // returning the `value` is more convenient for the `tuple`
  // implementation.
  return value;
};

UniversalWeakMap.prototype._getMap = function _getMap (key, canCreate) {
  if (! canCreate) {
    return isObjRef(key) ? this._weakMap : this._strongMap;
  }
  if (isObjRef(key)) {
    return this._weakMap || (this._weakMap = new WeakMap);
  }
  return this._strongMap || (this._strongMap = new Map);
};

// See [`universal-weak-map.js`](universal-weak-map.html).
// See [`util.js`](util.html).
// If this package is installed multiple times, there could be mutiple
// implementations of the `tuple` function with distinct `tuple.prototype`
// objects, but the shared pool of `tuple` objects must be the same across
// all implementations. While it would be ideal to use the `global`
// object, there's no reliable way to get the global object across all JS
// environments without using the `Function` constructor, so instead we
// use the global `Array` constructor as a shared namespace.
var root = Array[globalKey] || def(Array, globalKey, new UniversalWeakMap, false);

function lookup() {
  return lookupArray(arguments);
}

function lookupArray(array) {
  var node = root;

  // Because we are building a tree of *weak* maps, the tree will not
  // prevent objects in tuples from being garbage collected, since the
  // tree itself will be pruned over time when the corresponding `tuple`
  // objects become unreachable. In addition to internalization, this
  // property is a key advantage of the `immutable-tuple` package.
  var len = array.length;
  for (var i = 0; i < len; ++i) {
    var item = array[i];
    node = node.get(item) || node.set(item, new UniversalWeakMap);
  }

  // Return node.data rather than node itself to prevent tampering with
  // the UniversalWeakMap tree.
  return node.data || (node.data = Object.create(null));
}

// See [`lookup.js`](lookup.html).
// See [`util.js`](util.html).
// When called with any number of arguments, this function returns an
// object that inherits from `tuple.prototype` and is guaranteed to be
// `===` any other `tuple` object that has exactly the same items. In
// computer science jargon, `tuple` instances are "internalized" or just
// "interned," which allows for constant-time equality checking, and makes
// it possible for tuple objects to be used as `Map` or `WeakMap` keys, or
// stored in a `Set`.
function tuple() {
  var arguments$1 = arguments;

  var node = lookup.apply(null, arguments);

  if (node.tuple) {
    return node.tuple;
  }

  var t = Object.create(tuple.prototype);

  // Define immutable items with numeric indexes, and permanently fix the
  // `.length` property.
  var argc = arguments.length;
  for (var i = 0; i < argc; ++i) {
    t[i] = arguments$1[i];
  }

  def(t, "length", argc, false);

  // Remember this new `tuple` object so that we can return the same object
  // earlier next time.
  return freeze(node.tuple = t);
}

// Since the `immutable-tuple` package could be installed multiple times
// in an application, there is no guarantee that the `tuple` constructor
// or `tuple.prototype` will be unique, so `value instanceof tuple` is
// unreliable. Instead, to test if a value is a tuple, you should use
// `tuple.isTuple(value)`.
def(tuple.prototype, brand, true, false);
function isTuple(that) {
  return !! (that && that[brand] === true);
}

tuple.isTuple = isTuple;

function toArray(tuple) {
  var array = [];
  var i = tuple.length;
  while (i--) { array[i] = tuple[i]; }
  return array;
}

// Copy all generic non-destructive Array methods to `tuple.prototype`.
// This works because (for example) `Array.prototype.slice` can be invoked
// against any `Array`-like object.
forEachArrayMethod(function (name, desc, mustConvertThisToArray) {
  var method = desc && desc.value;
  if (typeof method === "function") {
    desc.value = function () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var result = method.apply(
        mustConvertThisToArray ? toArray(this) : this,
        args
      );
      // Of course, `tuple.prototype.slice` should return a `tuple` object,
      // not a new `Array`.
      return Array.isArray(result) ? tuple.apply(void 0, result) : result;
    };
    Object.defineProperty(tuple.prototype, name, desc);
  }
});

// Like `Array.prototype.concat`, except for the extra effort required to
// convert any tuple arguments to arrays, so that
// ```
// tuple(1).concat(tuple(2), 3) === tuple(1, 2, 3)
// ```
var ref = Array.prototype;
var concat = ref.concat;
tuple.prototype.concat = function () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return tuple.apply(void 0, concat.apply(toArray(this), args.map(
    function (item) { return isTuple(item) ? toArray(item) : item; }
  )));
};

/* harmony default export */ __webpack_exports__["default"] = (tuple);



/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/optimism/lib/cache.js":
/*!********************************************!*\
  !*** ./node_modules/optimism/lib/cache.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Cache(options) {
  this.map = new Map;
  this.newest = null;
  this.oldest = null;
  this.max = options && options.max;
  this.dispose = options && options.dispose;
}

exports.Cache = Cache;

var Cp = Cache.prototype;

Cp.has = function (key) {
  return this.map.has(key);
};

Cp.get = function (key) {
  var entry = getEntry(this, key);
  return entry && entry.value;
};

function getEntry(cache, key) {
  var entry = cache.map.get(key);
  if (entry &&
      entry !== cache.newest) {
    var older = entry.older;
    var newer = entry.newer;

    if (newer) {
      newer.older = older;
    }

    if (older) {
      older.newer = newer;
    }

    entry.older = cache.newest;
    entry.older.newer = entry;

    entry.newer = null;
    cache.newest = entry;

    if (entry === cache.oldest) {
      cache.oldest = newer;
    }
  }

  return entry;
}

Cp.set = function (key, value) {
  var entry = getEntry(this, key);
  if (entry) {
    return entry.value = value;
  }

  entry = {
    key: key,
    value: value,
    newer: null,
    older: this.newest
  };

  if (this.newest) {
    this.newest.newer = entry;
  }

  this.newest = entry;
  this.oldest = this.oldest || entry;

  this.map.set(key, entry);

  return entry.value;
};

Cp.clean = function () {
  if (typeof this.max === "number") {
    while (this.oldest &&
           this.map.size > this.max) {
      this.delete(this.oldest.key);
    }
  }
};

Cp.delete = function (key) {
  var entry = this.map.get(key);
  if (entry) {
    if (entry === this.newest) {
      this.newest = entry.older;
    }

    if (entry === this.oldest) {
      this.oldest = entry.newer;
    }

    if (entry.newer) {
      entry.newer.older = entry.older;
    }

    if (entry.older) {
      entry.older.newer = entry.newer;
    }

    this.map.delete(key);

    if (typeof this.dispose === "function") {
      this.dispose(key, entry.value);
    }

    return true;
  }

  return false;
};


/***/ }),

/***/ "./node_modules/optimism/lib/entry.js":
/*!********************************************!*\
  !*** ./node_modules/optimism/lib/entry.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getLocal = __webpack_require__(/*! ./local.js */ "./node_modules/optimism/lib/local.js").get;
var UNKNOWN_VALUE = Object.create(null);
var emptySetPool = [];
var entryPool = [];

// Don't let the emptySetPool or entryPool grow larger than this size,
// since unconstrained pool growth could lead to memory leaks.
exports.POOL_TARGET_SIZE = 100;

// Since this package might be used browsers, we should avoid using the
// Node built-in assert module.
function assert(condition, optionalMessage) {
  if (! condition) {
    throw new Error(optionalMessage || "assertion failure");
  }
}

function Entry(fn, key, args) {
  this.parents = new Set;
  this.childValues = new Map;

  // When this Entry has children that are dirty, this property becomes
  // a Set containing other Entry objects, borrowed from emptySetPool.
  // When the set becomes empty, it gets recycled back to emptySetPool.
  this.dirtyChildren = null;

  reset(this, fn, key, args);

  ++Entry.count;
}

Entry.count = 0;

function reset(entry, fn, key, args) {
  entry.fn = fn;
  entry.key = key;
  entry.args = args;
  entry.value = UNKNOWN_VALUE;
  entry.dirty = true;
  entry.subscribe = null;
  entry.unsubscribe = null;
  entry.recomputing = false;
  // Optional callback that will be invoked when entry.parents becomes
  // empty. The Entry object is given as the first parameter. If the
  // callback returns true, then this entry can be removed from the graph
  // and safely recycled into the entryPool.
  entry.reportOrphan = null;
}

Entry.acquire = function (fn, key, args) {
  var entry = entryPool.pop();
  if (entry) {
    reset(entry, fn, key, args);
    return entry;
  }
  return new Entry(fn, key, args);
};

function release(entry) {
  assert(entry.parents.size === 0);
  assert(entry.childValues.size === 0);
  assert(entry.dirtyChildren === null);
  if (entryPool.length < exports.POOL_TARGET_SIZE) {
    entryPool.push(entry);
  }
}

exports.Entry = Entry;

var Ep = Entry.prototype;

// The public API of Entry objects consists of the Entry constructor,
// along with the recompute, setDirty, and dispose methods.

Ep.recompute = function recompute() {
  if (! rememberParent(this) &&
      maybeReportOrphan(this)) {
    // The recipient of the entry.reportOrphan callback decided to dispose
    // of this orphan entry by calling entry.dispos(), which recycles it
    // into the entryPool, so we don't need to (and should not) proceed
    // with the recomputation.
    return;
  }

  return recomputeIfDirty(this);
};

// If the given entry has a reportOrphan method, and no remaining parents,
// call entry.reportOrphan and return true iff it returns true. The
// reportOrphan function should return true to indicate entry.dispose()
// has been called, and the entry has been removed from any other caches
// (see index.js for the only current example).
function maybeReportOrphan(entry) {
  var report = entry.reportOrphan;
  return typeof report === "function" &&
    entry.parents.size === 0 &&
    report(entry) === true;
}

Ep.setDirty = function setDirty() {
  if (this.dirty) return;
  this.dirty = true;
  this.value = UNKNOWN_VALUE;
  reportDirty(this);
  // We can go ahead and unsubscribe here, since any further dirty
  // notifications we receive will be redundant, and unsubscribing may
  // free up some resources, e.g. file watchers.
  unsubscribe(this);
};

Ep.dispose = function dispose() {
  var entry = this;
  forgetChildren(entry).forEach(maybeReportOrphan);
  unsubscribe(entry);

  // Because this entry has been kicked out of the cache (in index.js),
  // we've lost the ability to find out if/when this entry becomes dirty,
  // whether that happens through a subscription, because of a direct call
  // to entry.setDirty(), or because one of its children becomes dirty.
  // Because of this loss of future information, we have to assume the
  // worst (that this entry might have become dirty very soon), so we must
  // immediately mark this entry's parents as dirty. Normally we could
  // just call entry.setDirty() rather than calling parent.setDirty() for
  // each parent, but that would leave this entry in parent.childValues
  // and parent.dirtyChildren, which would prevent the child from being
  // truly forgotten.
  entry.parents.forEach(function (parent) {
    parent.setDirty();
    forgetChild(parent, entry);
  });

  // Since this entry has no parents and no children anymore, and the
  // caller of Entry#dispose has indicated that entry.value no longer
  // matters, we can safely recycle this Entry object for later use.
  release(entry);
};

function setClean(entry) {
  entry.dirty = false;

  if (mightBeDirty(entry)) {
    // This Entry may still have dirty children, in which case we can't
    // let our parents know we're clean just yet.
    return;
  }

  reportClean(entry);
}

function reportDirty(entry) {
  entry.parents.forEach(function (parent) {
    reportDirtyChild(parent, entry);
  });
}

function reportClean(entry) {
  entry.parents.forEach(function (parent) {
    reportCleanChild(parent, entry);
  });
}

function mightBeDirty(entry) {
  return entry.dirty ||
    (entry.dirtyChildren &&
     entry.dirtyChildren.size);
}

// Let a parent Entry know that one of its children may be dirty.
function reportDirtyChild(entry, child) {
  // Must have called rememberParent(child) before calling
  // reportDirtyChild(parent, child).
  assert(entry.childValues.has(child));
  assert(mightBeDirty(child));

  if (! entry.dirtyChildren) {
    entry.dirtyChildren = emptySetPool.pop() || new Set;

  } else if (entry.dirtyChildren.has(child)) {
    // If we already know this child is dirty, then we must have already
    // informed our own parents that we are dirty, so we can terminate
    // the recursion early.
    return;
  }

  entry.dirtyChildren.add(child);
  reportDirty(entry);
}

// Let a parent Entry know that one of its children is no longer dirty.
function reportCleanChild(entry, child) {
  var cv = entry.childValues;

  // Must have called rememberChild(child) before calling
  // reportCleanChild(parent, child).
  assert(cv.has(child));
  assert(! mightBeDirty(child));

  var childValue = cv.get(child);
  if (childValue === UNKNOWN_VALUE) {
    cv.set(child, child.value);
  } else if (childValue !== child.value) {
    entry.setDirty();
  }

  removeDirtyChild(entry, child);

  if (mightBeDirty(entry)) {
    return;
  }

  reportClean(entry);
}

function removeDirtyChild(entry, child) {
  var dc = entry.dirtyChildren;
  if (dc) {
    dc.delete(child);
    if (dc.size === 0) {
      if (emptySetPool.length < exports.POOL_TARGET_SIZE) {
        emptySetPool.push(dc);
      }
      entry.dirtyChildren = null;
    }
  }
}

function rememberParent(entry) {
  var local = getLocal();
  var parent = local.currentParentEntry;
  if (parent) {
    entry.parents.add(parent);

    if (! parent.childValues.has(entry)) {
      parent.childValues.set(entry, UNKNOWN_VALUE);
    }

    if (mightBeDirty(entry)) {
      reportDirtyChild(parent, entry);
    } else {
      reportCleanChild(parent, entry);
    }

    return parent;
  }
}

// This is the most important method of the Entry API, because it
// determines whether the cached entry.value can be returned immediately,
// or must be recomputed. The overall performance of the caching system
// depends on the truth of the following observations: (1) this.dirty is
// usually false, (2) this.dirtyChildren is usually null/empty, and thus
// (3) this.value is usally returned very quickly, without recomputation.
function recomputeIfDirty(entry) {
  if (entry.dirty) {
    // If this Entry is explicitly dirty because someone called
    // entry.setDirty(), recompute.
    return reallyRecompute(entry);
  }

  if (mightBeDirty(entry)) {
    // Get fresh values for any dirty children, and if those values
    // disagree with this.childValues, mark this Entry explicitly dirty.
    entry.dirtyChildren.forEach(function (child) {
      assert(entry.childValues.has(child));
      try {
        recomputeIfDirty(child);
      } catch (e) {
        entry.setDirty();
      }
    });

    if (entry.dirty) {
      // If this Entry has become explicitly dirty after comparing the fresh
      // values of its dirty children against this.childValues, recompute.
      return reallyRecompute(entry);
    }
  }

  assert(entry.value !== UNKNOWN_VALUE);

  return entry.value;
}

function reallyRecompute(entry) {
  assert(! entry.recomputing, "already recomputing");
  entry.recomputing = true;

  // Since this recomputation is likely to re-remember some of this
  // entry's children, we forget our children here but do not call
  // maybeReportOrphan until after the recomputation finishes.
  var originalChildren = forgetChildren(entry);

  var local = getLocal();
  var parent = local.currentParentEntry;
  local.currentParentEntry = entry;

  var threw = true;
  try {
    entry.value = entry.fn.apply(null, entry.args);
    threw = false;

  } finally {
    entry.recomputing = false;

    assert(local.currentParentEntry === entry);
    local.currentParentEntry = parent;

    if (threw || ! subscribe(entry)) {
      // Mark this Entry dirty if entry.fn threw or we failed to
      // resubscribe. This is important because, if we have a subscribe
      // function and it failed, then we're going to miss important
      // notifications about the potential dirtiness of entry.value.
      entry.setDirty();
    } else {
      // If we successfully recomputed entry.value and did not fail to
      // (re)subscribe, then this Entry is no longer explicitly dirty.
      setClean(entry);
    }
  }

  // Now that we've had a chance to re-remember any children that were
  // involved in the recomputation, we can safely report any orphan
  // children that remain.
  originalChildren.forEach(maybeReportOrphan);

  return entry.value;
}

var reusableEmptyArray = [];

// Removes all children from this entry and returns an array of the
// removed children.
function forgetChildren(entry) {
  var children = reusableEmptyArray;

  if (entry.childValues.size > 0) {
    children = [];
    entry.childValues.forEach(function (value, child) {
      forgetChild(entry, child);
      children.push(child);
    });
  }

  // After we forget all our children, this.dirtyChildren must be empty
  // and therefor must have been reset to null.
  assert(entry.dirtyChildren === null);

  return children;
}

function forgetChild(entry, child) {
  child.parents.delete(entry);
  entry.childValues.delete(child);
  removeDirtyChild(entry, child);
}

function subscribe(entry) {
  if (typeof entry.subscribe === "function") {
    try {
      unsubscribe(entry); // Prevent double subscriptions.
      entry.unsubscribe = entry.subscribe.apply(null, entry.args);
    } catch (e) {
      // If this Entry has a subscribe function and it threw an exception
      // (or an unsubscribe function it previously returned now throws),
      // return false to indicate that we were not able to subscribe (or
      // unsubscribe), and this Entry should remain dirty.
      entry.setDirty();
      return false;
    }
  }

  // Returning true indicates either that there was no entry.subscribe
  // function or that it succeeded.
  return true;
}

function unsubscribe(entry) {
  var unsub = entry.unsubscribe;
  if (typeof unsub === "function") {
    entry.unsubscribe = null;
    unsub();
  }
}


/***/ }),

/***/ "./node_modules/optimism/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/optimism/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cache = __webpack_require__(/*! ./cache.js */ "./node_modules/optimism/lib/cache.js").Cache;
var tuple = __webpack_require__(/*! immutable-tuple */ "./node_modules/immutable-tuple/dist/tuple.mjs").tuple;
var Entry = __webpack_require__(/*! ./entry.js */ "./node_modules/optimism/lib/entry.js").Entry;
var getLocal = __webpack_require__(/*! ./local.js */ "./node_modules/optimism/lib/local.js").get;

// Exported so that custom makeCacheKey functions can easily reuse the
// default implementation (with different arguments).
exports.defaultMakeCacheKey = tuple;

function normalizeOptions(options) {
  options = options || Object.create(null);

  if (typeof options.makeCacheKey !== "function") {
    options.makeCacheKey = tuple;
  }

  if (typeof options.max !== "number") {
    options.max = Math.pow(2, 16);
  }

  return options;
}

function wrap(fn, options) {
  options = normalizeOptions(options);

  // If this wrapped function is disposable, then its creator does not
  // care about its return value, and it should be removed from the cache
  // immediately when it no longer has any parents that depend on it.
  var disposable = !! options.disposable;

  var cache = new Cache({
    max: options.max,
    dispose: function (key, entry) {
      entry.dispose();
    }
  });

  function reportOrphan(entry) {
    if (disposable) {
      // Triggers the entry.dispose() call above.
      cache.delete(entry.key);
      return true;
    }
  }

  function optimistic() {
    if (disposable && ! getLocal().currentParentEntry) {
      // If there's no current parent computation, and this wrapped
      // function is disposable (meaning we don't care about entry.value,
      // just dependency tracking), then we can short-cut everything else
      // in this function, because entry.recompute() is going to recycle
      // the entry object without recomputing anything, anyway.
      return;
    }

    var key = options.makeCacheKey.apply(null, arguments);
    if (! key) {
      return fn.apply(null, arguments);
    }

    var args = [], len = arguments.length;
    while (len--) args[len] = arguments[len];

    var entry = cache.get(key);
    if (entry) {
      entry.args = args;
    } else {
      cache.set(key, entry = Entry.acquire(fn, key, args));
      entry.subscribe = options.subscribe;
      if (disposable) {
        entry.reportOrphan = reportOrphan;
      }
    }

    var value = entry.recompute();

    // Move this entry to the front of the least-recently used queue,
    // since we just finished computing its value.
    cache.set(key, entry);

    // Clean up any excess entries in the cache, but only if this entry
    // has no parents, which means we're not in the middle of a larger
    // computation that might be flummoxed by the cleaning.
    if (entry.parents.size === 0) {
      cache.clean();
    }

    // If options.disposable is truthy, the caller of wrap is telling us
    // they don't care about the result of entry.recompute(), so we should
    // avoid returning the value, so it won't be accidentally used.
    if (! disposable) {
      return value;
    }
  }

  optimistic.dirty = function () {
    var key = options.makeCacheKey.apply(null, arguments);
    if (! key) {
      return;
    }

    if (! cache.has(key)) {
      return;
    }

    cache.get(key).setDirty();
  };

  return optimistic;
}

exports.wrap = wrap;


/***/ }),

/***/ "./node_modules/optimism/lib/local.js":
/*!********************************************!*\
  !*** ./node_modules/optimism/lib/local.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var fakeNullFiber = new (function Fiber(){});
var localKey = "_optimism_local";

function getCurrentFiber() {
  return fakeNullFiber;
}

if (true) {
  try {
    var Fiber = module["eriuqer".split("").reverse().join("")]("fibers");
    // If we were able to require fibers, redefine the getCurrentFiber
    // function so that it has a chance to return Fiber.current.
    getCurrentFiber = function () {
      return Fiber.current || fakeNullFiber;
    };
  } catch (e) {}
}

// Returns an object unique to Fiber.current, if fibers are enabled.
// This object is used for Fiber-local storage in ./entry.js.
exports.get = function () {
  var fiber = getCurrentFiber();
  return fiber[localKey] || (fiber[localKey] = Object.create(null));
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../next/node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_92862a29917dee4fb2b1 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_92862a29917dee4fb2b1 */ "dll-reference dll_92862a29917dee4fb2b1"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_92862a29917dee4fb2b1 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_92862a29917dee4fb2b1 */ "dll-reference dll_92862a29917dee4fb2b1"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-apollo/react-apollo.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-apollo/react-apollo.esm.js ***!
  \*******************************************************/
/*! exports provided: ApolloConsumer, ApolloProvider, Query, Mutation, Subscription, graphql, withQuery, withMutation, withSubscription, withApollo, getDataFromTree, renderToStringWithData, compose, RenderPromises, getMarkupFromTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return ApolloConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return ApolloProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mutation", function() { return Mutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return Subscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withQuery", function() { return withQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMutation", function() { return withMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withSubscription", function() { return withSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withApollo", function() { return withApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataFromTree", function() { return getDataFromTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderToStringWithData", function() { return renderToStringWithData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPromises", function() { return RenderPromises; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkupFromTree", function() { return getMarkupFromTree; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__);







var ApolloConsumer = function (props, context) {
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!!context.client, "Could not find \"client\" in the context of ApolloConsumer. Wrap the root component in an <ApolloProvider>");
    return props.children(context.client);
};
ApolloConsumer.contextTypes = {
    client: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"].isRequired,
};
ApolloConsumer.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"].isRequired,
};

var ApolloProvider = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(ApolloProvider, _super);
    function ApolloProvider(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.operations = new Map();
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(props.client, 'ApolloProvider was not passed a client instance. Make ' +
            'sure you pass in your client via the "client" prop.');
        if (!props.client.__operations_cache__) {
            props.client.__operations_cache__ = _this.operations;
        }
        return _this;
    }
    ApolloProvider.prototype.getChildContext = function () {
        return {
            client: this.props.client,
            operations: this.props.client.__operations_cache__,
        };
    };
    ApolloProvider.prototype.render = function () {
        return this.props.children;
    };
    ApolloProvider.propTypes = {
        client: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"].isRequired,
        children: prop_types__WEBPACK_IMPORTED_MODULE_0__["node"].isRequired,
    };
    ApolloProvider.childContextTypes = {
        client: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"].isRequired,
        operations: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"],
    };
    return ApolloProvider;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]));

var DocumentType;
(function (DocumentType) {
    DocumentType[DocumentType["Query"] = 0] = "Query";
    DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
    DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
})(DocumentType || (DocumentType = {}));
var cache = new Map();
function parser(document) {
    var cached = cache.get(document);
    if (cached)
        return cached;
    var variables, type, name;
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!!document && !!document.kind, "Argument of " + document + " passed to parser was not a valid GraphQL " +
        "DocumentNode. You may need to use 'graphql-tag' or another method " +
        "to convert your operation into a document");
    var fragments = document.definitions.filter(function (x) { return x.kind === 'FragmentDefinition'; });
    var queries = document.definitions.filter(function (x) { return x.kind === 'OperationDefinition' && x.operation === 'query'; });
    var mutations = document.definitions.filter(function (x) { return x.kind === 'OperationDefinition' && x.operation === 'mutation'; });
    var subscriptions = document.definitions.filter(function (x) { return x.kind === 'OperationDefinition' && x.operation === 'subscription'; });
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!fragments.length || (queries.length || mutations.length || subscriptions.length), "Passing only a fragment to 'graphql' is not yet supported. " +
        "You must include a query, subscription or mutation as well");
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " +
        (document + " had " + queries.length + " queries, " + subscriptions.length + " ") +
        ("subscriptions and " + mutations.length + " mutations. ") +
        "You can use 'compose' to join multiple operation types to a component");
    type = queries.length ? DocumentType.Query : DocumentType.Mutation;
    if (!queries.length && !mutations.length)
        type = DocumentType.Subscription;
    var definitions = queries.length ? queries : mutations.length ? mutations : subscriptions;
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(definitions.length === 1, "react-apollo only supports one definition per HOC. " + document + " had " +
        (definitions.length + " definitions. ") +
        "You can use 'compose' to join multiple operation types to a component");
    var definition = definitions[0];
    variables = definition.variableDefinitions || [];
    if (definition.name && definition.name.kind === 'Name') {
        name = definition.name.value;
    }
    else {
        name = 'data';
    }
    var payload = { name: name, type: type, variables: variables };
    cache.set(document, payload);
    return payload;
}

function getClient(props, context) {
    var client = props.client || context.client;
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!!client, 'Could not find "client" in the context or passed in as a prop. ' +
        'Wrap the root component in an <ApolloProvider>, or pass an ' +
        'ApolloClient instance in via props.');
    return client;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function is(x, y) {
    if (x === y) {
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
    }
    return x !== x && y !== y;
}
function isObject(obj) {
    return obj !== null && typeof obj === "object";
}
function shallowEqual(objA, objB) {
    if (is(objA, objB)) {
        return true;
    }
    if (!isObject(objA) || !isObject(objB)) {
        return false;
    }
    var keys = Object.keys(objA);
    if (keys.length !== Object.keys(objB).length) {
        return false;
    }
    return keys.every(function (key) { return hasOwnProperty.call(objB, key) && is(objA[key], objB[key]); });
}

function observableQueryFields(observable) {
    var fields = {
        variables: observable.variables,
        refetch: observable.refetch.bind(observable),
        fetchMore: observable.fetchMore.bind(observable),
        updateQuery: observable.updateQuery.bind(observable),
        startPolling: observable.startPolling.bind(observable),
        stopPolling: observable.stopPolling.bind(observable),
        subscribeToMore: observable.subscribeToMore.bind(observable),
    };
    return fields;
}
var Query = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(Query, _super);
    function Query(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.previousData = {};
        _this.hasMounted = false;
        _this.lastResult = null;
        _this.startQuerySubscription = function (justMounted) {
            if (justMounted === void 0) { justMounted = false; }
            if (!justMounted) {
                _this.lastResult = _this.queryObservable.getLastResult();
            }
            if (_this.querySubscription)
                return;
            var initial = _this.getQueryResult();
            _this.querySubscription = _this.queryObservable.subscribe({
                next: function (_a) {
                    var loading = _a.loading, networkStatus = _a.networkStatus, data = _a.data;
                    if (initial && initial.networkStatus === 7 && shallowEqual(initial.data, data)) {
                        initial = undefined;
                        return;
                    }
                    if (_this.lastResult &&
                        _this.lastResult.loading === loading &&
                        _this.lastResult.networkStatus === networkStatus &&
                        shallowEqual(_this.lastResult.data, data)) {
                        return;
                    }
                    initial = undefined;
                    _this.updateCurrentData();
                },
                error: function (error) {
                    _this.resubscribeToQuery();
                    if (!error.hasOwnProperty('graphQLErrors'))
                        throw error;
                    _this.updateCurrentData();
                },
            });
        };
        _this.removeQuerySubscription = function () {
            if (_this.querySubscription) {
                _this.lastResult = _this.queryObservable.getLastResult();
                _this.querySubscription.unsubscribe();
                delete _this.querySubscription;
            }
        };
        _this.updateCurrentData = function () {
            if (_this.hasMounted)
                _this.forceUpdate();
        };
        _this.getQueryResult = function () {
            var data = { data: Object.create(null) };
            Object.assign(data, observableQueryFields(_this.queryObservable));
            if (_this.props.skip) {
                data = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, data, { data: undefined, error: undefined, loading: false });
            }
            else {
                var currentResult = _this.queryObservable.currentResult();
                var loading = currentResult.loading, partial = currentResult.partial, networkStatus = currentResult.networkStatus, errors = currentResult.errors;
                var error = currentResult.error;
                if (errors && errors.length > 0) {
                    error = new apollo_client__WEBPACK_IMPORTED_MODULE_4__["ApolloError"]({ graphQLErrors: errors });
                }
                Object.assign(data, { loading: loading, networkStatus: networkStatus, error: error });
                if (loading) {
                    Object.assign(data.data, _this.previousData, currentResult.data);
                }
                else if (error) {
                    Object.assign(data, {
                        data: (_this.queryObservable.getLastResult() || {}).data,
                    });
                }
                else {
                    var fetchPolicy = _this.queryObservable.options.fetchPolicy;
                    var partialRefetch = _this.props.partialRefetch;
                    if (partialRefetch &&
                        Object.keys(currentResult.data).length === 0 &&
                        partial &&
                        fetchPolicy !== 'cache-only') {
                        Object.assign(data, { loading: true, networkStatus: apollo_client__WEBPACK_IMPORTED_MODULE_4__["NetworkStatus"].loading });
                        data.refetch();
                        return data;
                    }
                    Object.assign(data.data, currentResult.data);
                    _this.previousData = currentResult.data;
                }
            }
            if (!_this.querySubscription) {
                var oldRefetch_1 = data.refetch;
                data.refetch = function (args) {
                    if (_this.querySubscription) {
                        return oldRefetch_1(args);
                    }
                    else {
                        return new Promise(function (r, f) {
                            _this.refetcherQueue = { resolve: r, reject: f, args: args };
                        });
                    }
                };
            }
            data.client = _this.client;
            return data;
        };
        _this.client = getClient(props, context);
        _this.initializeQueryObservable(props);
        return _this;
    }
    Query.prototype.fetchData = function () {
        if (this.props.skip)
            return false;
        var _a = this.props, children = _a.children, ssr = _a.ssr, displayName = _a.displayName, skip = _a.skip, client = _a.client, onCompleted = _a.onCompleted, onError = _a.onError, partialRefetch = _a.partialRefetch, opts = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__rest"])(_a, ["children", "ssr", "displayName", "skip", "client", "onCompleted", "onError", "partialRefetch"]);
        var fetchPolicy = opts.fetchPolicy;
        if (ssr === false)
            return false;
        if (fetchPolicy === 'network-only' || fetchPolicy === 'cache-and-network') {
            fetchPolicy = 'cache-first';
        }
        var observable = this.client.watchQuery(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, opts, { fetchPolicy: fetchPolicy }));
        if (this.context && this.context.renderPromises) {
            this.context.renderPromises.registerSSRObservable(this, observable);
        }
        var result = this.queryObservable.currentResult();
        return result.loading ? observable.result() : false;
    };
    Query.prototype.componentDidMount = function () {
        this.hasMounted = true;
        if (this.props.skip)
            return;
        this.startQuerySubscription(true);
        if (this.refetcherQueue) {
            var _a = this.refetcherQueue, args = _a.args, resolve = _a.resolve, reject = _a.reject;
            this.queryObservable.refetch(args)
                .then(resolve)
                .catch(reject);
        }
    };
    Query.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        if (nextProps.skip && !this.props.skip) {
            this.removeQuerySubscription();
            return;
        }
        var nextClient = getClient(nextProps, nextContext);
        if (shallowEqual(this.props, nextProps) && this.client === nextClient) {
            return;
        }
        if (this.client !== nextClient) {
            this.client = nextClient;
            this.removeQuerySubscription();
            this.queryObservable = null;
            this.previousData = {};
            this.updateQuery(nextProps);
        }
        if (this.props.query !== nextProps.query) {
            this.removeQuerySubscription();
        }
        this.updateQuery(nextProps);
        if (nextProps.skip)
            return;
        this.startQuerySubscription();
    };
    Query.prototype.componentWillUnmount = function () {
        this.removeQuerySubscription();
        this.hasMounted = false;
    };
    Query.prototype.componentDidUpdate = function () {
        var _a = this.props, onCompleted = _a.onCompleted, onError = _a.onError;
        if (onCompleted || onError) {
            var currentResult = this.queryObservable.currentResult();
            var loading = currentResult.loading, error = currentResult.error, data = currentResult.data;
            if (onCompleted && !loading && !error) {
                onCompleted(data);
            }
            else if (onError && !loading && error) {
                onError(error);
            }
        }
    };
    Query.prototype.render = function () {
        var _this = this;
        var context = this.context;
        var finish = function () { return _this.props.children(_this.getQueryResult()); };
        if (context && context.renderPromises) {
            return context.renderPromises.addQueryPromise(this, finish);
        }
        return finish();
    };
    Query.prototype.extractOptsFromProps = function (props) {
        this.operation = parser(props.query);
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(this.operation.type === DocumentType.Query, "The <Query /> component requires a graphql query, but got a " + (this.operation.type === DocumentType.Mutation ? 'mutation' : 'subscription') + ".");
        var displayName = props.displayName || 'Query';
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, props, { displayName: displayName, context: props.context || {}, metadata: { reactComponent: { displayName: displayName } } });
    };
    Query.prototype.initializeQueryObservable = function (props) {
        var opts = this.extractOptsFromProps(props);
        this.setOperations(opts);
        if (this.context && this.context.renderPromises) {
            this.queryObservable = this.context.renderPromises.getSSRObservable(this);
        }
        if (!this.queryObservable) {
            this.queryObservable = this.client.watchQuery(opts);
        }
    };
    Query.prototype.setOperations = function (props) {
        if (this.context.operations) {
            this.context.operations.set(this.operation.name, {
                query: props.query,
                variables: props.variables,
            });
        }
    };
    Query.prototype.updateQuery = function (props) {
        if (!this.queryObservable) {
            this.initializeQueryObservable(props);
        }
        else {
            this.setOperations(props);
        }
        this.queryObservable.setOptions(this.extractOptsFromProps(props))
            .catch(function () { return null; });
    };
    Query.prototype.resubscribeToQuery = function () {
        this.removeQuerySubscription();
        var lastError = this.queryObservable.getLastError();
        var lastResult = this.lastResult;
        this.queryObservable.resetLastResults();
        this.startQuerySubscription();
        Object.assign(this.queryObservable, { lastError: lastError, lastResult: lastResult });
    };
    Query.contextTypes = {
        client: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"],
        operations: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"],
        renderPromises: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"],
    };
    Query.propTypes = {
        client: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"],
        children: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"].isRequired,
        fetchPolicy: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
        notifyOnNetworkStatusChange: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
        onCompleted: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
        onError: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
        pollInterval: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"],
        query: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"].isRequired,
        variables: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"],
        ssr: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
        partialRefetch: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
    };
    return Query;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]));

var initialState = {
    loading: false,
    called: false,
    error: undefined,
    data: undefined,
};
var Mutation = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(Mutation, _super);
    function Mutation(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.hasMounted = false;
        _this.runMutation = function (options) {
            if (options === void 0) { options = {}; }
            _this.onMutationStart();
            var mutationId = _this.generateNewMutationId();
            return _this.mutate(options)
                .then(function (response) {
                _this.onMutationCompleted(response, mutationId);
                return response;
            })
                .catch(function (e) {
                _this.onMutationError(e, mutationId);
                if (!_this.props.onError)
                    throw e;
            });
        };
        _this.mutate = function (options) {
            var _a = _this.props, mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, update = _a.update, _b = _a.context, context = _b === void 0 ? {} : _b, _c = _a.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c, fetchPolicy = _a.fetchPolicy;
            var mutateOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, options);
            var refetchQueries = mutateOptions.refetchQueries || _this.props.refetchQueries;
            if (refetchQueries && refetchQueries.length && Array.isArray(refetchQueries)) {
                refetchQueries = refetchQueries.map(function (x) {
                    if (typeof x === 'string' && _this.context.operations)
                        return _this.context.operations.get(x) || x;
                    return x;
                });
                delete mutateOptions.refetchQueries;
            }
            var mutateVariables = Object.assign({}, variables, mutateOptions.variables);
            delete mutateOptions.variables;
            return _this.client.mutate(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ mutation: mutation,
                optimisticResponse: optimisticResponse,
                refetchQueries: refetchQueries,
                awaitRefetchQueries: awaitRefetchQueries,
                update: update,
                context: context,
                fetchPolicy: fetchPolicy, variables: mutateVariables }, mutateOptions));
        };
        _this.onMutationStart = function () {
            if (!_this.state.loading && !_this.props.ignoreResults) {
                _this.setState({
                    loading: true,
                    error: undefined,
                    data: undefined,
                    called: true,
                });
            }
        };
        _this.onMutationCompleted = function (response, mutationId) {
            var _a = _this.props, onCompleted = _a.onCompleted, ignoreResults = _a.ignoreResults;
            var data = response.data, errors = response.errors;
            var error = errors && errors.length > 0 ? new apollo_client__WEBPACK_IMPORTED_MODULE_4__["ApolloError"]({ graphQLErrors: errors }) : undefined;
            var callOncomplete = function () { return (onCompleted ? onCompleted(data) : null); };
            if (_this.hasMounted && _this.isMostRecentMutation(mutationId) && !ignoreResults) {
                _this.setState({ loading: false, data: data, error: error }, callOncomplete);
            }
            else {
                callOncomplete();
            }
        };
        _this.onMutationError = function (error, mutationId) {
            var onError = _this.props.onError;
            var callOnError = function () { return (onError ? onError(error) : null); };
            if (_this.hasMounted && _this.isMostRecentMutation(mutationId)) {
                _this.setState({ loading: false, error: error }, callOnError);
            }
            else {
                callOnError();
            }
        };
        _this.generateNewMutationId = function () {
            _this.mostRecentMutationId = _this.mostRecentMutationId + 1;
            return _this.mostRecentMutationId;
        };
        _this.isMostRecentMutation = function (mutationId) {
            return _this.mostRecentMutationId === mutationId;
        };
        _this.verifyDocumentIsMutation = function (mutation) {
            var operation = parser(mutation);
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(operation.type === DocumentType.Mutation, "The <Mutation /> component requires a graphql mutation, but got a " + (operation.type === DocumentType.Query ? 'query' : 'subscription') + ".");
        };
        _this.client = getClient(props, context);
        _this.verifyDocumentIsMutation(props.mutation);
        _this.mostRecentMutationId = 0;
        _this.state = initialState;
        return _this;
    }
    Mutation.prototype.componentDidMount = function () {
        this.hasMounted = true;
    };
    Mutation.prototype.componentWillUnmount = function () {
        this.hasMounted = false;
    };
    Mutation.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        var nextClient = getClient(nextProps, nextContext);
        if (shallowEqual(this.props, nextProps) && this.client === nextClient) {
            return;
        }
        if (this.props.mutation !== nextProps.mutation) {
            this.verifyDocumentIsMutation(nextProps.mutation);
        }
        if (this.client !== nextClient) {
            this.client = nextClient;
            this.setState(initialState);
        }
    };
    Mutation.prototype.render = function () {
        var children = this.props.children;
        var _a = this.state, loading = _a.loading, data = _a.data, error = _a.error, called = _a.called;
        var result = {
            called: called,
            loading: loading,
            data: data,
            error: error,
            client: this.client,
        };
        return children(this.runMutation, result);
    };
    Mutation.contextTypes = {
        client: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"],
        operations: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"],
    };
    Mutation.propTypes = {
        mutation: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"].isRequired,
        variables: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"],
        optimisticResponse: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"],
        refetchQueries: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([
            Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], prop_types__WEBPACK_IMPORTED_MODULE_0__["object"]])),
            prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
        ]),
        awaitRefetchQueries: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
        update: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
        children: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"].isRequired,
        onCompleted: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
        onError: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
        fetchPolicy: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
    };
    return Mutation;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]));

var Subscription = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(Subscription, _super);
    function Subscription(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.initialize = function (props) {
            if (_this.queryObservable)
                return;
            _this.queryObservable = _this.client.subscribe({
                query: props.subscription,
                variables: props.variables,
                fetchPolicy: props.fetchPolicy,
            });
        };
        _this.startSubscription = function () {
            if (_this.querySubscription)
                return;
            _this.querySubscription = _this.queryObservable.subscribe({
                next: _this.updateCurrentData,
                error: _this.updateError,
                complete: _this.completeSubscription
            });
        };
        _this.getInitialState = function () { return ({
            loading: true,
            error: undefined,
            data: undefined,
        }); };
        _this.updateCurrentData = function (result) {
            var _a = _this, client = _a.client, onSubscriptionData = _a.props.onSubscriptionData;
            if (onSubscriptionData)
                onSubscriptionData({ client: client, subscriptionData: result });
            _this.setState({
                data: result.data,
                loading: false,
                error: undefined,
            });
        };
        _this.updateError = function (error) {
            _this.setState({
                error: error,
                loading: false,
            });
        };
        _this.completeSubscription = function () {
            var onSubscriptionComplete = _this.props.onSubscriptionComplete;
            if (onSubscriptionComplete)
                onSubscriptionComplete();
            _this.endSubscription();
        };
        _this.endSubscription = function () {
            if (_this.querySubscription) {
                _this.querySubscription.unsubscribe();
                delete _this.querySubscription;
            }
        };
        _this.client = getClient(props, context);
        _this.initialize(props);
        _this.state = _this.getInitialState();
        return _this;
    }
    Subscription.prototype.componentDidMount = function () {
        this.startSubscription();
    };
    Subscription.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        var nextClient = getClient(nextProps, nextContext);
        if (shallowEqual(this.props.variables, nextProps.variables) &&
            this.client === nextClient &&
            this.props.subscription === nextProps.subscription) {
            return;
        }
        var shouldResubscribe = nextProps.shouldResubscribe;
        if (typeof shouldResubscribe === 'function') {
            shouldResubscribe = !!shouldResubscribe(this.props, nextProps);
        }
        var shouldNotResubscribe = shouldResubscribe === false;
        if (this.client !== nextClient) {
            this.client = nextClient;
        }
        if (!shouldNotResubscribe) {
            this.endSubscription();
            delete this.queryObservable;
            this.initialize(nextProps);
            this.startSubscription();
            this.setState(this.getInitialState());
            return;
        }
        this.initialize(nextProps);
        this.startSubscription();
    };
    Subscription.prototype.componentWillUnmount = function () {
        this.endSubscription();
    };
    Subscription.prototype.render = function () {
        var renderFn = this.props.children;
        if (!renderFn)
            return null;
        var result = Object.assign({}, this.state, {
            variables: this.props.variables,
        });
        return renderFn(result);
    };
    Subscription.contextTypes = {
        client: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"],
    };
    Subscription.propTypes = {
        subscription: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"].isRequired,
        variables: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"],
        children: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
        onSubscriptionData: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
        onSubscriptionComplete: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
        shouldResubscribe: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_0__["func"], prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"]]),
    };
    return Subscription;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]));

var defaultMapPropsToOptions = function () { return ({}); };
var defaultMapPropsToSkip = function () { return false; };
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
function calculateVariablesFromProps(operation, props) {
    var variables = {};
    for (var _i = 0, _a = operation.variables; _i < _a.length; _i++) {
        var _b = _a[_i], variable = _b.variable, type = _b.type;
        if (!variable.name || !variable.name.value)
            continue;
        var variableName = variable.name.value;
        var variableProp = props[variableName];
        if (typeof variableProp !== 'undefined') {
            variables[variableName] = variableProp;
            continue;
        }
        if (type.kind !== 'NonNullType') {
            variables[variableName] = null;
        }
    }
    return variables;
}
var GraphQLBase = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(GraphQLBase, _super);
    function GraphQLBase(props) {
        var _this = _super.call(this, props) || this;
        _this.withRef = false;
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
        return _this;
    }
    GraphQLBase.prototype.getWrappedInstance = function () {
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(this.withRef, "To access the wrapped instance, you need to specify " + "{ withRef: true } in the options");
        return this.wrappedInstance;
    };
    GraphQLBase.prototype.setWrappedInstance = function (ref) {
        this.wrappedInstance = ref;
    };
    return GraphQLBase;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]));

function withQuery(document, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    var operation = parser(document);
    var _a = operationOptions.options, options = _a === void 0 ? defaultMapPropsToOptions : _a, _b = operationOptions.skip, skip = _b === void 0 ? defaultMapPropsToSkip : _b, _c = operationOptions.alias, alias = _c === void 0 ? 'Apollo' : _c;
    var mapPropsToOptions = options;
    if (typeof mapPropsToOptions !== 'function') {
        mapPropsToOptions = function () { return options; };
    }
    var mapPropsToSkip = skip;
    if (typeof mapPropsToSkip !== 'function') {
        mapPropsToSkip = function () { return skip; };
    }
    var lastResultProps;
    return function (WrappedComponent) {
        var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";
        var GraphQL = (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(GraphQL, _super);
            function GraphQL() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GraphQL.prototype.render = function () {
                var _this = this;
                var props = this.props;
                var shouldSkip = mapPropsToSkip(props);
                var opts = shouldSkip ? Object.create(null) : Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, mapPropsToOptions(props));
                if (!shouldSkip && !opts.variables && operation.variables.length > 0) {
                    opts.variables = calculateVariablesFromProps(operation, props);
                }
                return (Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Query, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, opts, { displayName: graphQLDisplayName, skip: shouldSkip, query: document, warnUnhandledError: true }), function (_a) {
                    var _ = _a.client, data = _a.data, r = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__rest"])(_a, ["client", "data"]);
                    var _b, _c;
                    if (operationOptions.withRef) {
                        _this.withRef = true;
                        props = Object.assign({}, props, {
                            ref: _this.setWrappedInstance,
                        });
                    }
                    if (shouldSkip)
                        return Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, props));
                    var result = Object.assign(r, data || {});
                    var name = operationOptions.name || 'data';
                    var childProps = (_b = {}, _b[name] = result, _b);
                    if (operationOptions.props) {
                        var newResult = (_c = {},
                            _c[name] = result,
                            _c.ownProps = props,
                            _c);
                        lastResultProps = operationOptions.props(newResult, lastResultProps);
                        childProps = lastResultProps;
                    }
                    return Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, props, childProps));
                }));
            };
            GraphQL.displayName = graphQLDisplayName;
            GraphQL.WrappedComponent = WrappedComponent;
            return GraphQL;
        }(GraphQLBase));
        return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default()(GraphQL, WrappedComponent, {});
    };
}

function withMutation(document, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    var operation = parser(document);
    var _a = operationOptions.options, options = _a === void 0 ? defaultMapPropsToOptions : _a, _b = operationOptions.alias, alias = _b === void 0 ? 'Apollo' : _b;
    var mapPropsToOptions = options;
    if (typeof mapPropsToOptions !== 'function')
        mapPropsToOptions = function () { return options; };
    return function (WrappedComponent) {
        var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";
        var GraphQL = (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(GraphQL, _super);
            function GraphQL() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GraphQL.prototype.render = function () {
                var props = this.props;
                var opts = mapPropsToOptions(props);
                if (operationOptions.withRef) {
                    this.withRef = true;
                    props = Object.assign({}, props, {
                        ref: this.setWrappedInstance,
                    });
                }
                if (!opts.variables && operation.variables.length > 0) {
                    opts.variables = calculateVariablesFromProps(operation, props);
                }
                return (Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Mutation, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, opts, { mutation: document, ignoreResults: true }), function (mutate, _result) {
                    var _a, _b;
                    var name = operationOptions.name || 'mutate';
                    var childProps = (_a = {}, _a[name] = mutate, _a);
                    if (operationOptions.props) {
                        var newResult = (_b = {},
                            _b[name] = mutate,
                            _b.ownProps = props,
                            _b);
                        childProps = operationOptions.props(newResult);
                    }
                    return Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, props, childProps));
                }));
            };
            GraphQL.displayName = graphQLDisplayName;
            GraphQL.WrappedComponent = WrappedComponent;
            return GraphQL;
        }(GraphQLBase));
        return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default()(GraphQL, WrappedComponent, {});
    };
}

function withSubscription(document, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    var operation = parser(document);
    var _a = operationOptions.options, options = _a === void 0 ? defaultMapPropsToOptions : _a, _b = operationOptions.skip, skip = _b === void 0 ? defaultMapPropsToSkip : _b, _c = operationOptions.alias, alias = _c === void 0 ? 'Apollo' : _c, shouldResubscribe = operationOptions.shouldResubscribe;
    var mapPropsToOptions = options;
    if (typeof mapPropsToOptions !== 'function')
        mapPropsToOptions = function () { return options; };
    var mapPropsToSkip = skip;
    if (typeof mapPropsToSkip !== 'function')
        mapPropsToSkip = function () { return skip; };
    var lastResultProps;
    return function (WrappedComponent) {
        var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";
        var GraphQL = (function (_super) {
            Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(GraphQL, _super);
            function GraphQL(props) {
                var _this = _super.call(this, props) || this;
                _this.state = { resubscribe: false };
                return _this;
            }
            GraphQL.prototype.componentWillReceiveProps = function (nextProps) {
                if (!shouldResubscribe)
                    return;
                this.setState({
                    resubscribe: shouldResubscribe(this.props, nextProps),
                });
            };
            GraphQL.prototype.render = function () {
                var _this = this;
                var props = this.props;
                var shouldSkip = mapPropsToSkip(props);
                var opts = shouldSkip ? Object.create(null) : mapPropsToOptions(props);
                if (!shouldSkip && !opts.variables && operation.variables.length > 0) {
                    opts.variables = calculateVariablesFromProps(operation, props);
                }
                return (Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Subscription, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, opts, { displayName: graphQLDisplayName, skip: shouldSkip, subscription: document, shouldResubscribe: this.state.resubscribe }), function (_a) {
                    var data = _a.data, r = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__rest"])(_a, ["data"]);
                    var _b, _c;
                    if (operationOptions.withRef) {
                        _this.withRef = true;
                        props = Object.assign({}, props, {
                            ref: _this.setWrappedInstance,
                        });
                    }
                    if (shouldSkip)
                        return Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, props));
                    var result = Object.assign(r, data || {});
                    var name = operationOptions.name || 'data';
                    var childProps = (_b = {}, _b[name] = result, _b);
                    if (operationOptions.props) {
                        var newResult = (_c = {},
                            _c[name] = result,
                            _c.ownProps = props,
                            _c);
                        lastResultProps = operationOptions.props(newResult, lastResultProps);
                        childProps = lastResultProps;
                    }
                    return Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, props, childProps));
                }));
            };
            GraphQL.displayName = graphQLDisplayName;
            GraphQL.WrappedComponent = WrappedComponent;
            return GraphQL;
        }(GraphQLBase));
        return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default()(GraphQL, WrappedComponent, {});
    };
}

function graphql(document, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    switch (parser(document).type) {
        case DocumentType.Mutation:
            return withMutation(document, operationOptions);
        case DocumentType.Subscription:
            return withSubscription(document, operationOptions);
        case DocumentType.Query:
        default:
            return withQuery(document, operationOptions);
    }
}

function getDisplayName$1(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
function withApollo(WrappedComponent, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    var withDisplayName = "withApollo(" + getDisplayName$1(WrappedComponent) + ")";
    var WithApollo = (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(WithApollo, _super);
        function WithApollo(props) {
            var _this = _super.call(this, props) || this;
            _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
            return _this;
        }
        WithApollo.prototype.getWrappedInstance = function () {
             false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(operationOptions.withRef, "To access the wrapped instance, you need to specify " + "{ withRef: true } in the options");
            return this.wrappedInstance;
        };
        WithApollo.prototype.setWrappedInstance = function (ref) {
            this.wrappedInstance = ref;
        };
        WithApollo.prototype.render = function () {
            var _this = this;
            return (Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(ApolloConsumer, null, function (client) {
                var props = Object.assign({}, _this.props, {
                    client: client,
                    ref: operationOptions.withRef ? _this.setWrappedInstance : undefined,
                });
                return Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, props));
            }));
        };
        WithApollo.displayName = withDisplayName;
        WithApollo.WrappedComponent = WrappedComponent;
        return WithApollo;
    }(react__WEBPACK_IMPORTED_MODULE_3__["Component"]));
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default()(WithApollo, WrappedComponent, {});
}

function makeDefaultQueryInfo() {
    return {
        seen: false,
        observable: null,
    };
}
var RenderPromises = (function () {
    function RenderPromises() {
        this.queryPromises = new Map();
        this.queryInfoTrie = new Map();
    }
    RenderPromises.prototype.registerSSRObservable = function (queryInstance, observable) {
        this.lookupQueryInfo(queryInstance).observable = observable;
    };
    RenderPromises.prototype.getSSRObservable = function (queryInstance) {
        return this.lookupQueryInfo(queryInstance).observable;
    };
    RenderPromises.prototype.addQueryPromise = function (queryInstance, finish) {
        var info = this.lookupQueryInfo(queryInstance);
        if (!info.seen) {
            this.queryPromises.set(queryInstance, new Promise(function (resolve) {
                resolve(queryInstance.fetchData());
            }));
            return null;
        }
        return finish();
    };
    RenderPromises.prototype.hasPromises = function () {
        return this.queryPromises.size > 0;
    };
    RenderPromises.prototype.consumeAndAwaitPromises = function () {
        var _this = this;
        var promises = [];
        this.queryPromises.forEach(function (promise, queryInstance) {
            _this.lookupQueryInfo(queryInstance).seen = true;
            promises.push(promise);
        });
        this.queryPromises.clear();
        return Promise.all(promises);
    };
    RenderPromises.prototype.lookupQueryInfo = function (queryInstance) {
        var queryInfoTrie = this.queryInfoTrie;
        var _a = queryInstance.props, query = _a.query, variables = _a.variables;
        var varMap = queryInfoTrie.get(query) || new Map();
        if (!queryInfoTrie.has(query))
            queryInfoTrie.set(query, varMap);
        var variablesString = JSON.stringify(variables);
        var info = varMap.get(variablesString) || makeDefaultQueryInfo();
        if (!varMap.has(variablesString))
            varMap.set(variablesString, info);
        return info;
    };
    return RenderPromises;
}());
function getDataFromTree(tree, context) {
    if (context === void 0) { context = {}; }
    return getMarkupFromTree({
        tree: tree,
        context: context,
        renderFunction: __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js").renderToStaticMarkup,
    });
}
function getMarkupFromTree(_a) {
    var tree = _a.tree, _b = _a.context, context = _b === void 0 ? {} : _b, _c = _a.renderFunction, renderFunction = _c === void 0 ? __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js").renderToStaticMarkup : _c;
    var renderPromises = new RenderPromises();
    var RenderPromisesProvider = (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(RenderPromisesProvider, _super);
        function RenderPromisesProvider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RenderPromisesProvider.prototype.getChildContext = function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, context, { renderPromises: renderPromises });
        };
        RenderPromisesProvider.prototype.render = function () {
            return tree;
        };
        RenderPromisesProvider.childContextTypes = {
            renderPromises: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"],
        };
        return RenderPromisesProvider;
    }(react__WEBPACK_IMPORTED_MODULE_3__["Component"]));
    Object.keys(context).forEach(function (key) {
        RenderPromisesProvider.childContextTypes[key] = prop_types__WEBPACK_IMPORTED_MODULE_0__["any"];
    });
    function process() {
        var html = renderFunction(Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RenderPromisesProvider));
        return renderPromises.hasPromises()
            ? renderPromises.consumeAndAwaitPromises().then(process)
            : html;
    }
    return Promise.resolve().then(process);
}

function renderToStringWithData(component) {
    return getMarkupFromTree({
        tree: component,
        renderFunction: __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js").renderToString,
    });
}

function compose() {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    var functions = funcs.reverse();
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var firstFunction = functions[0], restFunctions = functions.slice(1);
        var result = firstFunction.apply(null, args);
        restFunctions.forEach(function (fnc) {
            result = fnc.call(null, result);
        });
        return result;
    };
}


//# sourceMappingURL=react-apollo.esm.js.map


/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom-server.browser.development.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.3
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function () {};

{
  validateFormat = function (format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error = void 0;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

// Relying on the `invariant()` implementation lets us
// preserve the format and params in the www builds.

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.8.3';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }
    if (condition) {
      return;
    }
    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format);

      // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;


var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;

var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

var Resolved = 1;


function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }
  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }
  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_CONCURRENT_MODE_TYPE:
      return 'ConcurrentMode';
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';
    case REACT_PORTAL_TYPE:
      return 'Portal';
    case REACT_PROFILER_TYPE:
      return 'Profiler';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_SUSPENSE_TYPE:
      return 'Suspense';
  }
  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';
      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';
      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');
      case REACT_MEMO_TYPE:
        return getComponentName(type.type);
      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);
          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }
        }
    }
  }
  return null;
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

// Prevent newer renderers from RTE when used with older react package versions.
// Current owner and dispatcher used to share the same ref,
// but PR #14548 split them out to better support the react-debug-tools package.
if (!ReactSharedInternals.hasOwnProperty('ReactCurrentDispatcher')) {
  ReactSharedInternals.ReactCurrentDispatcher = {
    current: null
  };
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';
  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');
    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);
        if (match) {
          var pathBeforeSlash = match[1];
          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }
    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }
  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:
var warnAboutDeprecatedLifecycles = false;

// Gather advanced timing metrics for Profiler subtrees.


// Trace which interactions trigger each commit.


// Only used in www builds.
var enableSuspenseServerRenderer = false; // TODO: true? Here it might just be false.

// Only used in www builds.


// Only used in www builds.


// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties


// These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.

var ReactDebugCurrentFrame$1 = void 0;
{
  ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
}

var didWarnAboutInvalidateContextType = {};

var emptyObject = {};
{
  Object.freeze(emptyObject);
}

function maskContext(type, context) {
  var contextTypes = type.contextTypes;
  if (!contextTypes) {
    return emptyObject;
  }
  var maskedContext = {};
  for (var contextName in contextTypes) {
    maskedContext[contextName] = context[contextName];
  }
  return maskedContext;
}

function checkContextTypes(typeSpecs, values, location) {
  {
    checkPropTypes(typeSpecs, values, location, 'Component', ReactDebugCurrentFrame$1.getCurrentStack);
  }
}

function validateContextBounds(context, threadID) {
  // If we don't have enough slots in this context to store this threadID,
  // fill it in without leaving any holes to ensure that the VM optimizes
  // this as non-holey index properties.
  // (Note: If `react` package is < 16.6, _threadCount is undefined.)
  for (var i = context._threadCount | 0; i <= threadID; i++) {
    // We assume that this is the same as the defaultValue which might not be
    // true if we're rendering inside a secondary renderer but they are
    // secondary because these use cases are very rare.
    context[i] = context._currentValue2;
    context._threadCount = i + 1;
  }
}

function processContext(type, context, threadID) {
  var contextType = type.contextType;
  if (typeof contextType === 'object' && contextType !== null) {
    {
      if (contextType.$$typeof !== REACT_CONTEXT_TYPE) {
        var name = getComponentName(type) || 'Component';
        if (!didWarnAboutInvalidateContextType[name]) {
          didWarnAboutInvalidateContextType[name] = true;
          warningWithoutStack$1(false, '%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext(). ' + 'Did you accidentally pass the Context.Provider instead?', name);
        }
      }
    }
    validateContextBounds(contextType, threadID);
    return contextType[threadID];
  } else {
    var maskedContext = maskContext(type, context);
    {
      if (type.contextTypes) {
        checkContextTypes(type.contextTypes, maskedContext, 'context');
      }
    }
    return maskedContext;
  }
}

// Allocates a new index for each request. Tries to stay as compact as possible so that these
// indices can be used to reference a tightly packaged array. As opposed to being used in a Map.
// The first allocated index is 1.

var nextAvailableThreadIDs = new Uint16Array(16);
for (var i = 0; i < 15; i++) {
  nextAvailableThreadIDs[i] = i + 1;
}
nextAvailableThreadIDs[15] = 0;

function growThreadCountAndReturnNextAvailable() {
  var oldArray = nextAvailableThreadIDs;
  var oldSize = oldArray.length;
  var newSize = oldSize * 2;
  !(newSize <= 0x10000) ? invariant(false, 'Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.') : void 0;
  var newArray = new Uint16Array(newSize);
  newArray.set(oldArray);
  nextAvailableThreadIDs = newArray;
  nextAvailableThreadIDs[0] = oldSize + 1;
  for (var _i = oldSize; _i < newSize - 1; _i++) {
    nextAvailableThreadIDs[_i] = _i + 1;
  }
  nextAvailableThreadIDs[newSize - 1] = 0;
  return oldSize;
}

function allocThreadID() {
  var nextID = nextAvailableThreadIDs[0];
  if (nextID === 0) {
    return growThreadCountAndReturnNextAvailable();
  }
  nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID];
  return nextID;
}

function freeThreadID(id) {
  nextAvailableThreadIDs[id] = nextAvailableThreadIDs[0];
  nextAvailableThreadIDs[0] = id;
}

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0;

// A simple string attribute.
// Attributes that aren't in the whitelist are presumed to have this type.
var STRING = 1;

// A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.
var BOOLEANISH_STRING = 2;

// A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
var BOOLEAN = 3;

// An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.
var OVERLOADED_BOOLEAN = 4;

// An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.
var NUMERIC = 5;

// An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.
var POSITIVE_NUMERIC = 6;

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
/* eslint-enable max-len */
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';


var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');

var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};

function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty$1.call(validatedAttributeNameCache, attributeName)) {
    return true;
  }
  if (hasOwnProperty$1.call(illegalAttributeNameCache, attributeName)) {
    return false;
  }
  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }
  illegalAttributeNameCache[attributeName] = true;
  {
    warning$1(false, 'Invalid attribute name: `%s`', attributeName);
  }
  return false;
}

function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null) {
    return propertyInfo.type === RESERVED;
  }
  if (isCustomComponentTag) {
    return false;
  }
  if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
    return true;
  }
  return false;
}

function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
    return false;
  }
  switch (typeof value) {
    case 'function':
    // $FlowIssue symbol is perfectly valid here
    case 'symbol':
      // eslint-disable-line
      return true;
    case 'boolean':
      {
        if (isCustomComponentTag) {
          return false;
        }
        if (propertyInfo !== null) {
          return !propertyInfo.acceptsBooleans;
        } else {
          var prefix = name.toLowerCase().slice(0, 5);
          return prefix !== 'data-' && prefix !== 'aria-';
        }
      }
    default:
      return false;
  }
}

function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
  if (value === null || typeof value === 'undefined') {
    return true;
  }
  if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
    return true;
  }
  if (isCustomComponentTag) {
    return false;
  }
  if (propertyInfo !== null) {
    switch (propertyInfo.type) {
      case BOOLEAN:
        return !value;
      case OVERLOADED_BOOLEAN:
        return value === false;
      case NUMERIC:
        return isNaN(value);
      case POSITIVE_NUMERIC:
        return isNaN(value) || value < 1;
    }
  }
  return false;
}

function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
}

// When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.
var properties = {};

// These props are reserved by React. They shouldn't be written to the DOM.
['children', 'dangerouslySetInnerHTML',
// TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.
[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var name = _ref[0],
      attributeName = _ref[1];

  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null);
} // attributeNamespace
);

// These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

// These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// These are HTML boolean attributes.
['allowFullScreen', 'async',
// Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless',
// Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

// These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.
['checked',
// Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.
['capture', 'download'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// These are HTML attributes that must be positive numbers.
['cols', 'rows', 'size', 'span'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// These are HTML attributes that must be numbers.
['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

var CAMELIZE = /[\-\:]([a-z])/g;
var capitalize = function (token) {
  return token[1].toUpperCase();
};

// This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML whitelist.
// Some of these attributes can be hard to find. This list was created by
// scrapping the MDN documentation.
['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null);
} // attributeNamespace
);

// String SVG attributes with the xlink namespace.
['xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink');
});

// String SVG attributes with the xml namespace.
['xml:base', 'xml:lang', 'xml:space'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace');
});

// These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.
['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

// code copied and modified from escape-html
/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Escapes special characters and HTML entities in a given html string.
 *
 * @param  {string} string HTML string to escape for later insertion
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape = void 0;
  var html = '';
  var index = void 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;
      case 38:
        // &
        escape = '&amp;';
        break;
      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'
        break;
      case 60:
        // <
        escape = '&lt;';
        break;
      case 62:
        // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
// end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */
function escapeTextForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }
  return escapeHtml(text);
}

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */
function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextForBrowser(value) + '"';
}

/**
 * Operations for dealing with DOM properties.
 */

/**
 * Creates markup for the ID property.
 *
 * @param {string} id Unescaped ID.
 * @return {string} Markup string.
 */


function createMarkupForRoot() {
  return ROOT_ATTRIBUTE_NAME + '=""';
}

/**
 * Creates markup for a property.
 *
 * @param {string} name
 * @param {*} value
 * @return {?string} Markup string, or null if the property was invalid.
 */
function createMarkupForProperty(name, value) {
  var propertyInfo = getPropertyInfo(name);
  if (name !== 'style' && shouldIgnoreAttribute(name, propertyInfo, false)) {
    return '';
  }
  if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
    return '';
  }
  if (propertyInfo !== null) {
    var attributeName = propertyInfo.attributeName;
    var type = propertyInfo.type;

    if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
      return attributeName + '=""';
    } else {
      return attributeName + '=' + quoteAttributeValueForBrowser(value);
    }
  } else if (isAttributeNameSafe(name)) {
    return name + '=' + quoteAttributeValueForBrowser(value);
  }
  return '';
}

/**
 * Creates markup for a custom property.
 *
 * @param {string} name
 * @param {*} value
 * @return {string} Markup string, or empty string if the property was invalid.
 */
function createMarkupForCustomAttribute(name, value) {
  if (!isAttributeNameSafe(name) || value == null) {
    return '';
  }
  return name + '=' + quoteAttributeValueForBrowser(value);
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var currentlyRenderingComponent = null;
var firstWorkInProgressHook = null;
var workInProgressHook = null;
// Whether the work-in-progress hook is a re-rendered hook
var isReRender = false;
// Whether an update was scheduled during the currently executing render pass.
var didScheduleRenderPhaseUpdate = false;
// Lazily created map of render-phase updates
var renderPhaseUpdates = null;
// Counter to prevent infinite loops.
var numberOfReRenders = 0;
var RE_RENDER_LIMIT = 25;

var isInHookUserCodeInDev = false;

// In DEV, this is the name of the currently executing primitive hook
var currentHookNameInDev = void 0;

function resolveCurrentlyRenderingComponent() {
  !(currentlyRenderingComponent !== null) ? invariant(false, 'Hooks can only be called inside the body of a function component. (https://fb.me/react-invalid-hook-call)') : void 0;
  {
    !!isInHookUserCodeInDev ? warning$1(false, 'Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://fb.me/rules-of-hooks') : void 0;
  }
  return currentlyRenderingComponent;
}

function areHookInputsEqual(nextDeps, prevDeps) {
  if (prevDeps === null) {
    {
      warning$1(false, '%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
    }
    return false;
  }

  {
    // Don't bother comparing lengths in prod because these arrays should be
    // passed inline.
    if (nextDeps.length !== prevDeps.length) {
      warning$1(false, 'The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, '[' + nextDeps.join(', ') + ']', '[' + prevDeps.join(', ') + ']');
    }
  }
  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (is(nextDeps[i], prevDeps[i])) {
      continue;
    }
    return false;
  }
  return true;
}

function createHook() {
  if (numberOfReRenders > 0) {
    invariant(false, 'Rendered more hooks than during the previous render');
  }
  return {
    memoizedState: null,
    queue: null,
    next: null
  };
}

function createWorkInProgressHook() {
  if (workInProgressHook === null) {
    // This is the first hook in the list
    if (firstWorkInProgressHook === null) {
      isReRender = false;
      firstWorkInProgressHook = workInProgressHook = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = firstWorkInProgressHook;
    }
  } else {
    if (workInProgressHook.next === null) {
      isReRender = false;
      // Append to the end of the list
      workInProgressHook = workInProgressHook.next = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = workInProgressHook.next;
    }
  }
  return workInProgressHook;
}

function prepareToUseHooks(componentIdentity) {
  currentlyRenderingComponent = componentIdentity;
  {
    isInHookUserCodeInDev = false;
  }

  // The following should have already been reset
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;
}

function finishHooks(Component, props, children, refOrContext) {
  // This must be called after every function component to prevent hooks from
  // being used in classes.

  while (didScheduleRenderPhaseUpdate) {
    // Updates were scheduled during the render phase. They are stored in
    // the `renderPhaseUpdates` map. Call the component again, reusing the
    // work-in-progress hooks and applying the additional updates on top. Keep
    // restarting until no more updates are scheduled.
    didScheduleRenderPhaseUpdate = false;
    numberOfReRenders += 1;

    // Start over from the beginning of the list
    workInProgressHook = null;

    children = Component(props, refOrContext);
  }
  currentlyRenderingComponent = null;
  firstWorkInProgressHook = null;
  numberOfReRenders = 0;
  renderPhaseUpdates = null;
  workInProgressHook = null;
  {
    isInHookUserCodeInDev = false;
  }

  // These were reset above
  // currentlyRenderingComponent = null;
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;

  return children;
}

function readContext(context, observedBits) {
  var threadID = currentThreadID;
  validateContextBounds(context, threadID);
  {
    !!isInHookUserCodeInDev ? warning$1(false, 'Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().') : void 0;
  }
  return context[threadID];
}

function useContext(context, observedBits) {
  {
    currentHookNameInDev = 'useContext';
  }
  resolveCurrentlyRenderingComponent();
  var threadID = currentThreadID;
  validateContextBounds(context, threadID);
  return context[threadID];
}

function basicStateReducer(state, action) {
  return typeof action === 'function' ? action(state) : action;
}

function useState(initialState) {
  {
    currentHookNameInDev = 'useState';
  }
  return useReducer(basicStateReducer,
  // useReducer has a special case to support lazy useState initializers
  initialState);
}

function useReducer(reducer, initialArg, init) {
  {
    if (reducer !== basicStateReducer) {
      currentHookNameInDev = 'useReducer';
    }
  }
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  if (isReRender) {
    // This is a re-render. Apply the new render phase updates to the previous
    var _queue = workInProgressHook.queue;
    var _dispatch = _queue.dispatch;
    if (renderPhaseUpdates !== null) {
      // Render phase updates are stored in a map of queue -> linked list
      var firstRenderPhaseUpdate = renderPhaseUpdates.get(_queue);
      if (firstRenderPhaseUpdate !== undefined) {
        renderPhaseUpdates.delete(_queue);
        var newState = workInProgressHook.memoizedState;
        var update = firstRenderPhaseUpdate;
        do {
          // Process this render phase update. We don't have to check the
          // priority because it will always be the same as the current
          // render's.
          var _action = update.action;
          {
            isInHookUserCodeInDev = true;
          }
          newState = reducer(newState, _action);
          {
            isInHookUserCodeInDev = false;
          }
          update = update.next;
        } while (update !== null);

        workInProgressHook.memoizedState = newState;

        return [newState, _dispatch];
      }
    }
    return [workInProgressHook.memoizedState, _dispatch];
  } else {
    {
      isInHookUserCodeInDev = true;
    }
    var initialState = void 0;
    if (reducer === basicStateReducer) {
      // Special case for `useState`.
      initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
    } else {
      initialState = init !== undefined ? init(initialArg) : initialArg;
    }
    {
      isInHookUserCodeInDev = false;
    }
    workInProgressHook.memoizedState = initialState;
    var _queue2 = workInProgressHook.queue = {
      last: null,
      dispatch: null
    };
    var _dispatch2 = _queue2.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue2);
    return [workInProgressHook.memoizedState, _dispatch2];
  }
}

function useMemo(nextCreate, deps) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();

  var nextDeps = deps === undefined ? null : deps;

  if (workInProgressHook !== null) {
    var prevState = workInProgressHook.memoizedState;
    if (prevState !== null) {
      if (nextDeps !== null) {
        var prevDeps = prevState[1];
        if (areHookInputsEqual(nextDeps, prevDeps)) {
          return prevState[0];
        }
      }
    }
  }

  {
    isInHookUserCodeInDev = true;
  }
  var nextValue = nextCreate();
  {
    isInHookUserCodeInDev = false;
  }
  workInProgressHook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}

function useRef(initialValue) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var previousRef = workInProgressHook.memoizedState;
  if (previousRef === null) {
    var ref = { current: initialValue };
    {
      Object.seal(ref);
    }
    workInProgressHook.memoizedState = ref;
    return ref;
  } else {
    return previousRef;
  }
}

function useLayoutEffect(create, inputs) {
  {
    currentHookNameInDev = 'useLayoutEffect';
  }
  warning$1(false, 'useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client.');
}

function dispatchAction(componentIdentity, queue, action) {
  !(numberOfReRenders < RE_RENDER_LIMIT) ? invariant(false, 'Too many re-renders. React limits the number of renders to prevent an infinite loop.') : void 0;

  if (componentIdentity === currentlyRenderingComponent) {
    // This is a render phase update. Stash it in a lazily-created map of
    // queue -> linked list of updates. After this render pass, we'll restart
    // and apply the stashed updates on top of the work-in-progress hook.
    didScheduleRenderPhaseUpdate = true;
    var update = {
      action: action,
      next: null
    };
    if (renderPhaseUpdates === null) {
      renderPhaseUpdates = new Map();
    }
    var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
    if (firstRenderPhaseUpdate === undefined) {
      renderPhaseUpdates.set(queue, update);
    } else {
      // Append the update to the end of the list.
      var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
      while (lastRenderPhaseUpdate.next !== null) {
        lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
      }
      lastRenderPhaseUpdate.next = update;
    }
  } else {
    // This means an update has happened after the function component has
    // returned. On the server this is a no-op. In React Fiber, the update
    // would be scheduled for a future render.
  }
}

function useCallback(callback, deps) {
  // Callbacks are passed as they are in the server environment.
  return callback;
}

function noop() {}

var currentThreadID = 0;

function setCurrentThreadID(threadID) {
  currentThreadID = threadID;
}

var Dispatcher = {
  readContext: readContext,
  useContext: useContext,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  useLayoutEffect: useLayoutEffect,
  useCallback: useCallback,
  // useImperativeHandle is not run in the server environment
  useImperativeHandle: noop,
  // Effects are not run in the server environment.
  useEffect: noop,
  // Debugging effect
  useDebugValue: noop
};

var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

var Namespaces = {
  html: HTML_NAMESPACE,
  mathml: MATH_NAMESPACE,
  svg: SVG_NAMESPACE
};

// Assumes there is no parent namespace.
function getIntrinsicNamespace(type) {
  switch (type) {
    case 'svg':
      return SVG_NAMESPACE;
    case 'math':
      return MATH_NAMESPACE;
    default:
      return HTML_NAMESPACE;
  }
}

function getChildNamespace(parentNamespace, type) {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
    // No (or default) parent namespace: potential entry point.
    return getIntrinsicNamespace(type);
  }
  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
    // We're leaving SVG.
    return HTML_NAMESPACE;
  }
  // By default, pass namespace below.
  return parentNamespace;
}

var ReactDebugCurrentFrame$2 = null;

var ReactControlledValuePropTypes = {
  checkPropTypes: null
};

{
  ReactDebugCurrentFrame$2 = ReactSharedInternals.ReactDebugCurrentFrame;

  var hasReadOnlyValue = {
    button: true,
    checkbox: true,
    image: true,
    hidden: true,
    radio: true,
    reset: true,
    submit: true
  };

  var propTypes = {
    value: function (props, propName, componentName) {
      if (hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled || props[propName] == null) {
        return null;
      }
      return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    checked: function (props, propName, componentName) {
      if (props.onChange || props.readOnly || props.disabled || props[propName] == null) {
        return null;
      }
      return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }
  };

  /**
   * Provide a linked `value` attribute for controlled forms. You should not use
   * this outside of the ReactDOM controlled form components.
   */
  ReactControlledValuePropTypes.checkPropTypes = function (tagName, props) {
    checkPropTypes(propTypes, props, 'prop', tagName, ReactDebugCurrentFrame$2.getStackAddendum);
  };
}

// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.

var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
  // NOTE: menuitem's close tag should be omitted, but that causes problems.
};

// For HTML, certain tags cannot have children. This has the same purpose as
// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = _assign({
  menuitem: true
}, omittedCloseTags);

// TODO: We can remove this if we add invariantWithStack()
// or add stack by default to invariants where possible.
var HTML = '__html';

var ReactDebugCurrentFrame$3 = null;
{
  ReactDebugCurrentFrame$3 = ReactSharedInternals.ReactDebugCurrentFrame;
}

function assertValidProps(tag, props) {
  if (!props) {
    return;
  }
  // Note the use of `==` which checks for null or undefined.
  if (voidElementTags[tag]) {
    !(props.children == null && props.dangerouslySetInnerHTML == null) ? invariant(false, '%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s', tag, ReactDebugCurrentFrame$3.getStackAddendum()) : void 0;
  }
  if (props.dangerouslySetInnerHTML != null) {
    !(props.children == null) ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : void 0;
    !(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML) ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.') : void 0;
  }
  {
    !(props.suppressContentEditableWarning || !props.contentEditable || props.children == null) ? warning$1(false, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : void 0;
  }
  !(props.style == null || typeof props.style === 'object') ? invariant(false, 'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s', ReactDebugCurrentFrame$3.getStackAddendum()) : void 0;
}

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */
function hyphenateStyleName(name) {
  return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }
  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;
    default:
      return true;
  }
}

var warnValidStyle = function () {};

{
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
  var msPattern$1 = /^-ms-/;
  var hyphenPattern = /-(.)/g;

  // style values shouldn't contain a semicolon
  var badStyleValueWithSemicolonPattern = /;\s*$/;

  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var camelize = function (string) {
    return string.replace(hyphenPattern, function (_, character) {
      return character.toUpperCase();
    });
  };

  var warnHyphenatedStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning$1(false, 'Unsupported style property %s. Did you mean %s?', name,
    // As Andi Smith suggests
    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
    // is converted to lowercase `ms`.
    camelize(name.replace(msPattern$1, 'ms-')));
  };

  var warnBadVendoredStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning$1(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
  };

  var warnStyleValueWithSemicolon = function (name, value) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
    warning$1(false, "Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function (name, value) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;
    warning$1(false, '`NaN` is an invalid value for the `%s` css style property.', name);
  };

  var warnStyleValueIsInfinity = function (name, value) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;
    warning$1(false, '`Infinity` is an invalid value for the `%s` css style property.', name);
  };

  warnValidStyle = function (name, value) {
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value);
      }
    }
  };
}

var warnValidStyle$1 = warnValidStyle;

var ariaProperties = {
  'aria-current': 0, // state
  'aria-details': 0,
  'aria-disabled': 0, // state
  'aria-hidden': 0, // state
  'aria-invalid': 0, // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

var hasOwnProperty$2 = Object.prototype.hasOwnProperty;

function validateProperty(tagName, name) {
  if (hasOwnProperty$2.call(warnedProperties, name) && warnedProperties[name]) {
    return true;
  }

  if (rARIACamel.test(name)) {
    var ariaName = 'aria-' + name.slice(4).toLowerCase();
    var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;

    // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.
    if (correctName == null) {
      warning$1(false, 'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);
      warnedProperties[name] = true;
      return true;
    }
    // aria-* attributes should be lowercase; suggest the lowercase version.
    if (name !== correctName) {
      warning$1(false, 'Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);
      warnedProperties[name] = true;
      return true;
    }
  }

  if (rARIA.test(name)) {
    var lowerCasedName = name.toLowerCase();
    var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;

    // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.
    if (standardName == null) {
      warnedProperties[name] = true;
      return false;
    }
    // aria-* attributes should be lowercase; suggest the lowercase version.
    if (name !== standardName) {
      warning$1(false, 'Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);
      warnedProperties[name] = true;
      return true;
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props) {
  var invalidProps = [];

  for (var key in props) {
    var isValid = validateProperty(type, key);
    if (!isValid) {
      invalidProps.push(key);
    }
  }

  var unknownPropString = invalidProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');

  if (invalidProps.length === 1) {
    warning$1(false, 'Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
  } else if (invalidProps.length > 1) {
    warning$1(false, 'Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
  }
}

function validateProperties(type, props) {
  if (isCustomComponent(type, props)) {
    return;
  }
  warnInvalidARIAProps(type, props);
}

var didWarnValueNull = false;

function validateProperties$1(type, props) {
  if (type !== 'input' && type !== 'textarea' && type !== 'select') {
    return;
  }

  if (props != null && props.value === null && !didWarnValueNull) {
    didWarnValueNull = true;
    if (type === 'select' && props.multiple) {
      warning$1(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
    } else {
      warning$1(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
    }
  }
}

/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */

/**
 * Ordered list of injected plugins.
 */


/**
 * Mapping from event name to dispatch config
 */


/**
 * Mapping from registration name to plugin module
 */
var registrationNameModules = {};

/**
 * Mapping from registration name to event name
 */


/**
 * Mapping from lowercase registration names to the properly cased version,
 * used to warn in the case of missing event handlers. Available
 * only in true.
 * @type {Object}
 */
var possibleRegistrationNames = {};
// Trust the developer to only use possibleRegistrationNames in true

/**
 * Injects an ordering of plugins (by plugin name). This allows the ordering
 * to be decoupled from injection of the actual plugins so that ordering is
 * always deterministic regardless of packaging, on-the-fly injection, etc.
 *
 * @param {array} InjectedEventPluginOrder
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginOrder}
 */


/**
 * Injects plugins to be used by `EventPluginHub`. The plugin names must be
 * in the ordering injected by `injectEventPluginOrder`.
 *
 * Plugins can be injected as part of page initialization or on-the-fly.
 *
 * @param {object} injectedNamesToPlugins Map from names to plugin modules.
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginsByName}
 */

// When adding attributes to the HTML or SVG whitelist, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  class: 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  default: 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  for: 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nomodule: 'noModule',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',

  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  in: 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  suppresshydrationwarning: 'suppressHydrationWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  typeof: 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

var validateProperty$1 = function () {};

{
  var warnedProperties$1 = {};
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var EVENT_NAME_REGEX = /^on./;
  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

  validateProperty$1 = function (tagName, name, value, canUseEventSystem) {
    if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    var lowerCasedName = name.toLowerCase();
    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      warning$1(false, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');
      warnedProperties$1[name] = true;
      return true;
    }

    // We can't rely on the event system being injected on the server.
    if (canUseEventSystem) {
      if (registrationNameModules.hasOwnProperty(name)) {
        return true;
      }
      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
      if (registrationName != null) {
        warning$1(false, 'Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);
        warnedProperties$1[name] = true;
        return true;
      }
      if (EVENT_NAME_REGEX.test(name)) {
        warning$1(false, 'Unknown event handler property `%s`. It will be ignored.', name);
        warnedProperties$1[name] = true;
        return true;
      }
    } else if (EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we are in a server environment.
      // So we can't tell if the event name is correct for sure, but we can filter
      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
      if (INVALID_EVENT_NAME_REGEX.test(name)) {
        warning$1(false, 'Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
      }
      warnedProperties$1[name] = true;
      return true;
    }

    // Let the ARIA attribute hook validate ARIA attributes
    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      warning$1(false, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      warning$1(false, 'The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      warning$1(false, 'Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);
      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      warning$1(false, 'Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);
      warnedProperties$1[name] = true;
      return true;
    }

    var propertyInfo = getPropertyInfo(name);
    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;

    // Known attributes should match the casing specified in the property config.
    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];
      if (standardName !== name) {
        warning$1(false, 'Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);
        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      warning$1(false, 'React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);
      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      if (value) {
        warning$1(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
      } else {
        warning$1(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
      }
      warnedProperties$1[name] = true;
      return true;
    }

    // Now that we've validated casing, do not validate
    // data types for reserved props
    if (isReserved) {
      return true;
    }

    // Warn when a known attribute is a bad type
    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      warnedProperties$1[name] = true;
      return false;
    }

    // Warn when passing the strings 'false' or 'true' into a boolean prop
    if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
      warning$1(false, 'Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
      warnedProperties$1[name] = true;
      return true;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props, canUseEventSystem) {
  var unknownProps = [];
  for (var key in props) {
    var isValid = validateProperty$1(type, key, props[key], canUseEventSystem);
    if (!isValid) {
      unknownProps.push(key);
    }
  }

  var unknownPropString = unknownProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');
  if (unknownProps.length === 1) {
    warning$1(false, 'Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
  } else if (unknownProps.length > 1) {
    warning$1(false, 'Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
  }
};

function validateProperties$2(type, props, canUseEventSystem) {
  if (isCustomComponent(type, props)) {
    return;
  }
  warnUnknownProperties(type, props, canUseEventSystem);
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Based on reading the React.Children implementation. TODO: type this somewhere?

var toArray = React.Children.toArray;

// This is only used in DEV.
// Each entry is `this.stack` from a currently executing renderer instance.
// (There may be more than one because ReactDOMServer is reentrant).
// Each stack is an array of frames which may contain nested stacks of elements.
var currentDebugStacks = [];

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var ReactDebugCurrentFrame = void 0;
var prevGetCurrentStackImpl = null;
var getCurrentServerStackImpl = function () {
  return '';
};
var describeStackFrame = function (element) {
  return '';
};

var validatePropertiesInDevelopment = function (type, props) {};
var pushCurrentDebugStack = function (stack) {};
var pushElementToDebugStack = function (element) {};
var popCurrentDebugStack = function () {};
var hasWarnedAboutUsingContextAsConsumer = false;

{
  ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

  validatePropertiesInDevelopment = function (type, props) {
    validateProperties(type, props);
    validateProperties$1(type, props);
    validateProperties$2(type, props, /* canUseEventSystem */false);
  };

  describeStackFrame = function (element) {
    var source = element._source;
    var type = element.type;
    var name = getComponentName(type);
    var ownerName = null;
    return describeComponentFrame(name, source, ownerName);
  };

  pushCurrentDebugStack = function (stack) {
    currentDebugStacks.push(stack);

    if (currentDebugStacks.length === 1) {
      // We are entering a server renderer.
      // Remember the previous (e.g. client) global stack implementation.
      prevGetCurrentStackImpl = ReactDebugCurrentFrame.getCurrentStack;
      ReactDebugCurrentFrame.getCurrentStack = getCurrentServerStackImpl;
    }
  };

  pushElementToDebugStack = function (element) {
    // For the innermost executing ReactDOMServer call,
    var stack = currentDebugStacks[currentDebugStacks.length - 1];
    // Take the innermost executing frame (e.g. <Foo>),
    var frame = stack[stack.length - 1];
    // and record that it has one more element associated with it.
    frame.debugElementStack.push(element);
    // We only need this because we tail-optimize single-element
    // children and directly handle them in an inner loop instead of
    // creating separate frames for them.
  };

  popCurrentDebugStack = function () {
    currentDebugStacks.pop();

    if (currentDebugStacks.length === 0) {
      // We are exiting the server renderer.
      // Restore the previous (e.g. client) global stack implementation.
      ReactDebugCurrentFrame.getCurrentStack = prevGetCurrentStackImpl;
      prevGetCurrentStackImpl = null;
    }
  };

  getCurrentServerStackImpl = function () {
    if (currentDebugStacks.length === 0) {
      // Nothing is currently rendering.
      return '';
    }
    // ReactDOMServer is reentrant so there may be multiple calls at the same time.
    // Take the frames from the innermost call which is the last in the array.
    var frames = currentDebugStacks[currentDebugStacks.length - 1];
    var stack = '';
    // Go through every frame in the stack from the innermost one.
    for (var i = frames.length - 1; i >= 0; i--) {
      var frame = frames[i];
      // Every frame might have more than one debug element stack entry associated with it.
      // This is because single-child nesting doesn't create materialized frames.
      // Instead it would push them through `pushElementToDebugStack()`.
      var _debugElementStack = frame.debugElementStack;
      for (var ii = _debugElementStack.length - 1; ii >= 0; ii--) {
        stack += describeStackFrame(_debugElementStack[ii]);
      }
    }
    return stack;
  };
}

var didWarnDefaultInputValue = false;
var didWarnDefaultChecked = false;
var didWarnDefaultSelectValue = false;
var didWarnDefaultTextareaValue = false;
var didWarnInvalidOptionChildren = false;
var didWarnAboutNoopUpdateForComponent = {};
var didWarnAboutBadClass = {};
var didWarnAboutDeprecatedWillMount = {};
var didWarnAboutUndefinedDerivedState = {};
var didWarnAboutUninitializedState = {};
var valuePropNames = ['value', 'defaultValue'];
var newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true
};

// We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name
var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
var validatedTagCache = {};
function validateDangerousTag(tag) {
  if (!validatedTagCache.hasOwnProperty(tag)) {
    !VALID_TAG_REGEX.test(tag) ? invariant(false, 'Invalid tag: %s', tag) : void 0;
    validatedTagCache[tag] = true;
  }
}

var styleNameCache = {};
var processStyleName = function (styleName) {
  if (styleNameCache.hasOwnProperty(styleName)) {
    return styleNameCache[styleName];
  }
  var result = hyphenateStyleName(styleName);
  styleNameCache[styleName] = result;
  return result;
};

function createMarkupForStyles(styles) {
  var serialized = '';
  var delimiter = '';
  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = styles[styleName];
    {
      if (!isCustomProperty) {
        warnValidStyle$1(styleName, styleValue);
      }
    }
    if (styleValue != null) {
      serialized += delimiter + processStyleName(styleName) + ':';
      serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);

      delimiter = ';';
    }
  }
  return serialized || null;
}

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && getComponentName(_constructor) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnAboutNoopUpdateForComponent[warningKey]) {
      return;
    }

    warningWithoutStack$1(false, '%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
    didWarnAboutNoopUpdateForComponent[warningKey] = true;
  }
}

function shouldConstruct(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function getNonChildrenInnerMarkup(props) {
  var innerHTML = props.dangerouslySetInnerHTML;
  if (innerHTML != null) {
    if (innerHTML.__html != null) {
      return innerHTML.__html;
    }
  } else {
    var content = props.children;
    if (typeof content === 'string' || typeof content === 'number') {
      return escapeTextForBrowser(content);
    }
  }
  return null;
}

function flattenTopLevelChildren(children) {
  if (!React.isValidElement(children)) {
    return toArray(children);
  }
  var element = children;
  if (element.type !== REACT_FRAGMENT_TYPE) {
    return [element];
  }
  var fragmentChildren = element.props.children;
  if (!React.isValidElement(fragmentChildren)) {
    return toArray(fragmentChildren);
  }
  var fragmentChildElement = fragmentChildren;
  return [fragmentChildElement];
}

function flattenOptionChildren(children) {
  if (children === undefined || children === null) {
    return children;
  }
  var content = '';
  // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.
  React.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }
    content += child;
    {
      if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
        didWarnInvalidOptionChildren = true;
        warning$1(false, 'Only strings and numbers are supported as <option> children.');
      }
    }
  });
  return content;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var STYLE = 'style';
var RESERVED_PROPS = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null,
  suppressHydrationWarning: null
};

function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
  var ret = '<' + tagVerbatim;

  for (var propKey in props) {
    if (!hasOwnProperty.call(props, propKey)) {
      continue;
    }
    var propValue = props[propKey];
    if (propValue == null) {
      continue;
    }
    if (propKey === STYLE) {
      propValue = createMarkupForStyles(propValue);
    }
    var markup = null;
    if (isCustomComponent(tagLowercase, props)) {
      if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
        markup = createMarkupForCustomAttribute(propKey, propValue);
      }
    } else {
      markup = createMarkupForProperty(propKey, propValue);
    }
    if (markup) {
      ret += ' ' + markup;
    }
  }

  // For static pages, no need to put React ID and checksum. Saves lots of
  // bytes.
  if (makeStaticMarkup) {
    return ret;
  }

  if (isRootElement) {
    ret += ' ' + createMarkupForRoot();
  }
  return ret;
}

function validateRenderResult(child, type) {
  if (child === undefined) {
    invariant(false, '%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.', getComponentName(type) || 'Component');
  }
}

function resolve(child, context, threadID) {
  while (React.isValidElement(child)) {
    // Safe because we just checked it's an element.
    var element = child;
    var Component = element.type;
    {
      pushElementToDebugStack(element);
    }
    if (typeof Component !== 'function') {
      break;
    }
    processChild(element, Component);
  }

  // Extra closure so queue and replace can be captured properly
  function processChild(element, Component) {
    var publicContext = processContext(Component, context, threadID);

    var queue = [];
    var replace = false;
    var updater = {
      isMounted: function (publicInstance) {
        return false;
      },
      enqueueForceUpdate: function (publicInstance) {
        if (queue === null) {
          warnNoop(publicInstance, 'forceUpdate');
          return null;
        }
      },
      enqueueReplaceState: function (publicInstance, completeState) {
        replace = true;
        queue = [completeState];
      },
      enqueueSetState: function (publicInstance, currentPartialState) {
        if (queue === null) {
          warnNoop(publicInstance, 'setState');
          return null;
        }
        queue.push(currentPartialState);
      }
    };

    var inst = void 0;
    if (shouldConstruct(Component)) {
      inst = new Component(element.props, publicContext, updater);

      if (typeof Component.getDerivedStateFromProps === 'function') {
        {
          if (inst.state === null || inst.state === undefined) {
            var componentName = getComponentName(Component) || 'Unknown';
            if (!didWarnAboutUninitializedState[componentName]) {
              warningWithoutStack$1(false, '`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, inst.state === null ? 'null' : 'undefined', componentName);
              didWarnAboutUninitializedState[componentName] = true;
            }
          }
        }

        var partialState = Component.getDerivedStateFromProps.call(null, element.props, inst.state);

        {
          if (partialState === undefined) {
            var _componentName = getComponentName(Component) || 'Unknown';
            if (!didWarnAboutUndefinedDerivedState[_componentName]) {
              warningWithoutStack$1(false, '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', _componentName);
              didWarnAboutUndefinedDerivedState[_componentName] = true;
            }
          }
        }

        if (partialState != null) {
          inst.state = _assign({}, inst.state, partialState);
        }
      }
    } else {
      {
        if (Component.prototype && typeof Component.prototype.render === 'function') {
          var _componentName2 = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutBadClass[_componentName2]) {
            warningWithoutStack$1(false, "The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', _componentName2, _componentName2);
            didWarnAboutBadClass[_componentName2] = true;
          }
        }
      }
      var componentIdentity = {};
      prepareToUseHooks(componentIdentity);
      inst = Component(element.props, publicContext, updater);
      inst = finishHooks(Component, element.props, inst, publicContext);

      if (inst == null || inst.render == null) {
        child = inst;
        validateRenderResult(child, Component);
        return;
      }
    }

    inst.props = element.props;
    inst.context = publicContext;
    inst.updater = updater;

    var initialState = inst.state;
    if (initialState === undefined) {
      inst.state = initialState = null;
    }
    if (typeof inst.UNSAFE_componentWillMount === 'function' || typeof inst.componentWillMount === 'function') {
      if (typeof inst.componentWillMount === 'function') {
        {
          if (warnAboutDeprecatedLifecycles && inst.componentWillMount.__suppressDeprecationWarning !== true) {
            var _componentName3 = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutDeprecatedWillMount[_componentName3]) {
              lowPriorityWarning$1(false, '%s: componentWillMount() is deprecated and will be ' + 'removed in the next major version. Read about the motivations ' + 'behind this change: ' + 'https://fb.me/react-async-component-lifecycle-hooks' + '\n\n' + 'As a temporary workaround, you can rename to ' + 'UNSAFE_componentWillMount instead.', _componentName3);
              didWarnAboutDeprecatedWillMount[_componentName3] = true;
            }
          }
        }

        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        if (typeof Component.getDerivedStateFromProps !== 'function') {
          inst.componentWillMount();
        }
      }
      if (typeof inst.UNSAFE_componentWillMount === 'function' && typeof Component.getDerivedStateFromProps !== 'function') {
        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        inst.UNSAFE_componentWillMount();
      }
      if (queue.length) {
        var oldQueue = queue;
        var oldReplace = replace;
        queue = null;
        replace = false;

        if (oldReplace && oldQueue.length === 1) {
          inst.state = oldQueue[0];
        } else {
          var nextState = oldReplace ? oldQueue[0] : inst.state;
          var dontMutate = true;
          for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
            var partial = oldQueue[i];
            var _partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;
            if (_partialState != null) {
              if (dontMutate) {
                dontMutate = false;
                nextState = _assign({}, nextState, _partialState);
              } else {
                _assign(nextState, _partialState);
              }
            }
          }
          inst.state = nextState;
        }
      } else {
        queue = null;
      }
    }
    child = inst.render();

    {
      if (child === undefined && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        child = null;
      }
    }
    validateRenderResult(child, Component);

    var childContext = void 0;
    if (typeof inst.getChildContext === 'function') {
      var childContextTypes = Component.childContextTypes;
      if (typeof childContextTypes === 'object') {
        childContext = inst.getChildContext();
        for (var contextKey in childContext) {
          !(contextKey in childContextTypes) ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', getComponentName(Component) || 'Unknown', contextKey) : void 0;
        }
      } else {
        warningWithoutStack$1(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(Component) || 'Unknown');
      }
    }
    if (childContext) {
      context = _assign({}, context, childContext);
    }
  }
  return { child: child, context: context };
}

var ReactDOMServerRenderer = function () {
  // DEV-only

  // TODO: type this more strictly:
  function ReactDOMServerRenderer(children, makeStaticMarkup) {
    _classCallCheck(this, ReactDOMServerRenderer);

    var flatChildren = flattenTopLevelChildren(children);

    var topFrame = {
      type: null,
      // Assume all trees start in the HTML namespace (not totally true, but
      // this is what we did historically)
      domNamespace: Namespaces.html,
      children: flatChildren,
      childIndex: 0,
      context: emptyObject,
      footer: ''
    };
    {
      topFrame.debugElementStack = [];
    }
    this.threadID = allocThreadID();
    this.stack = [topFrame];
    this.exhausted = false;
    this.currentSelectValue = null;
    this.previousWasTextNode = false;
    this.makeStaticMarkup = makeStaticMarkup;
    this.suspenseDepth = 0;

    // Context (new API)
    this.contextIndex = -1;
    this.contextStack = [];
    this.contextValueStack = [];
    {
      this.contextProviderStack = [];
    }
  }

  ReactDOMServerRenderer.prototype.destroy = function destroy() {
    if (!this.exhausted) {
      this.exhausted = true;
      this.clearProviders();
      freeThreadID(this.threadID);
    }
  };

  /**
   * Note: We use just two stacks regardless of how many context providers you have.
   * Providers are always popped in the reverse order to how they were pushed
   * so we always know on the way down which provider you'll encounter next on the way up.
   * On the way down, we push the current provider, and its context value *before*
   * we mutated it, onto the stacks. Therefore, on the way up, we always know which
   * provider needs to be "restored" to which value.
   * https://github.com/facebook/react/pull/12985#issuecomment-396301248
   */

  ReactDOMServerRenderer.prototype.pushProvider = function pushProvider(provider) {
    var index = ++this.contextIndex;
    var context = provider.type._context;
    var threadID = this.threadID;
    validateContextBounds(context, threadID);
    var previousValue = context[threadID];

    // Remember which value to restore this context to on our way up.
    this.contextStack[index] = context;
    this.contextValueStack[index] = previousValue;
    {
      // Only used for push/pop mismatch warnings.
      this.contextProviderStack[index] = provider;
    }

    // Mutate the current value.
    context[threadID] = provider.props.value;
  };

  ReactDOMServerRenderer.prototype.popProvider = function popProvider(provider) {
    var index = this.contextIndex;
    {
      !(index > -1 && provider === this.contextProviderStack[index]) ? warningWithoutStack$1(false, 'Unexpected pop.') : void 0;
    }

    var context = this.contextStack[index];
    var previousValue = this.contextValueStack[index];

    // "Hide" these null assignments from Flow by using `any`
    // because conceptually they are deletions--as long as we
    // promise to never access values beyond `this.contextIndex`.
    this.contextStack[index] = null;
    this.contextValueStack[index] = null;
    {
      this.contextProviderStack[index] = null;
    }
    this.contextIndex--;

    // Restore to the previous value we stored as we were walking down.
    // We've already verified that this context has been expanded to accommodate
    // this thread id, so we don't need to do it again.
    context[this.threadID] = previousValue;
  };

  ReactDOMServerRenderer.prototype.clearProviders = function clearProviders() {
    // Restore any remaining providers on the stack to previous values
    for (var index = this.contextIndex; index >= 0; index--) {
      var _context = this.contextStack[index];
      var previousValue = this.contextValueStack[index];
      _context[this.threadID] = previousValue;
    }
  };

  ReactDOMServerRenderer.prototype.read = function read(bytes) {
    if (this.exhausted) {
      return null;
    }

    var prevThreadID = currentThreadID;
    setCurrentThreadID(this.threadID);
    var prevDispatcher = ReactCurrentDispatcher.current;
    ReactCurrentDispatcher.current = Dispatcher;
    try {
      // Markup generated within <Suspense> ends up buffered until we know
      // nothing in that boundary suspended
      var out = [''];
      var suspended = false;
      while (out[0].length < bytes) {
        if (this.stack.length === 0) {
          this.exhausted = true;
          freeThreadID(this.threadID);
          break;
        }
        var frame = this.stack[this.stack.length - 1];
        if (suspended || frame.childIndex >= frame.children.length) {
          var _footer = frame.footer;
          if (_footer !== '') {
            this.previousWasTextNode = false;
          }
          this.stack.pop();
          if (frame.type === 'select') {
            this.currentSelectValue = null;
          } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
            var provider = frame.type;
            this.popProvider(provider);
          } else if (frame.type === REACT_SUSPENSE_TYPE) {
            this.suspenseDepth--;
            var buffered = out.pop();

            if (suspended) {
              suspended = false;
              // If rendering was suspended at this boundary, render the fallbackFrame
              var _fallbackFrame = frame.fallbackFrame;
              !_fallbackFrame ? invariant(false, 'suspense fallback not found, something is broken') : void 0;
              this.stack.push(_fallbackFrame);
              // Skip flushing output since we're switching to the fallback
              continue;
            } else {
              out[this.suspenseDepth] += buffered;
            }
          }

          // Flush output
          out[this.suspenseDepth] += _footer;
          continue;
        }
        var child = frame.children[frame.childIndex++];

        var outBuffer = '';
        {
          pushCurrentDebugStack(this.stack);
          // We're starting work on this frame, so reset its inner stack.
          frame.debugElementStack.length = 0;
        }
        try {
          outBuffer += this.render(child, frame.context, frame.domNamespace);
        } catch (err) {
          if (enableSuspenseServerRenderer && typeof err.then === 'function') {
            suspended = true;
          } else {
            throw err;
          }
        } finally {
          {
            popCurrentDebugStack();
          }
        }
        if (out.length <= this.suspenseDepth) {
          out.push('');
        }
        out[this.suspenseDepth] += outBuffer;
      }
      return out[0];
    } finally {
      ReactCurrentDispatcher.current = prevDispatcher;
      setCurrentThreadID(prevThreadID);
    }
  };

  ReactDOMServerRenderer.prototype.render = function render(child, context, parentNamespace) {
    if (typeof child === 'string' || typeof child === 'number') {
      var text = '' + child;
      if (text === '') {
        return '';
      }
      if (this.makeStaticMarkup) {
        return escapeTextForBrowser(text);
      }
      if (this.previousWasTextNode) {
        return '<!-- -->' + escapeTextForBrowser(text);
      }
      this.previousWasTextNode = true;
      return escapeTextForBrowser(text);
    } else {
      var nextChild = void 0;

      var _resolve = resolve(child, context, this.threadID);

      nextChild = _resolve.child;
      context = _resolve.context;

      if (nextChild === null || nextChild === false) {
        return '';
      } else if (!React.isValidElement(nextChild)) {
        if (nextChild != null && nextChild.$$typeof != null) {
          // Catch unexpected special types early.
          var $$typeof = nextChild.$$typeof;
          !($$typeof !== REACT_PORTAL_TYPE) ? invariant(false, 'Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.') : void 0;
          // Catch-all to prevent an infinite loop if React.Children.toArray() supports some new type.
          invariant(false, 'Unknown element-like object type: %s. This is likely a bug in React. Please file an issue.', $$typeof.toString());
        }
        var nextChildren = toArray(nextChild);
        var frame = {
          type: null,
          domNamespace: parentNamespace,
          children: nextChildren,
          childIndex: 0,
          context: context,
          footer: ''
        };
        {
          frame.debugElementStack = [];
        }
        this.stack.push(frame);
        return '';
      }
      // Safe because we just checked it's an element.
      var nextElement = nextChild;
      var elementType = nextElement.type;

      if (typeof elementType === 'string') {
        return this.renderDOM(nextElement, context, parentNamespace);
      }

      switch (elementType) {
        case REACT_STRICT_MODE_TYPE:
        case REACT_CONCURRENT_MODE_TYPE:
        case REACT_PROFILER_TYPE:
        case REACT_FRAGMENT_TYPE:
          {
            var _nextChildren = toArray(nextChild.props.children);
            var _frame = {
              type: null,
              domNamespace: parentNamespace,
              children: _nextChildren,
              childIndex: 0,
              context: context,
              footer: ''
            };
            {
              _frame.debugElementStack = [];
            }
            this.stack.push(_frame);
            return '';
          }
        case REACT_SUSPENSE_TYPE:
          {
            if (enableSuspenseServerRenderer) {
              var fallback = nextChild.props.fallback;
              if (fallback === undefined) {
                // If there is no fallback, then this just behaves as a fragment.
                var _nextChildren3 = toArray(nextChild.props.children);
                var _frame3 = {
                  type: null,
                  domNamespace: parentNamespace,
                  children: _nextChildren3,
                  childIndex: 0,
                  context: context,
                  footer: ''
                };
                {
                  _frame3.debugElementStack = [];
                }
                this.stack.push(_frame3);
                return '';
              }
              var fallbackChildren = toArray(fallback);
              var _nextChildren2 = toArray(nextChild.props.children);
              var _fallbackFrame2 = {
                type: null,
                domNamespace: parentNamespace,
                children: fallbackChildren,
                childIndex: 0,
                context: context,
                footer: '',
                out: ''
              };
              var _frame2 = {
                fallbackFrame: _fallbackFrame2,
                type: REACT_SUSPENSE_TYPE,
                domNamespace: parentNamespace,
                children: _nextChildren2,
                childIndex: 0,
                context: context,
                footer: '<!--/$-->'
              };
              {
                _frame2.debugElementStack = [];
                _fallbackFrame2.debugElementStack = [];
              }
              this.stack.push(_frame2);
              this.suspenseDepth++;
              return '<!--$-->';
            } else {
              invariant(false, 'ReactDOMServer does not yet support Suspense.');
            }
          }
        // eslint-disable-next-line-no-fallthrough
        default:
          break;
      }
      if (typeof elementType === 'object' && elementType !== null) {
        switch (elementType.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            {
              var element = nextChild;
              var _nextChildren4 = void 0;
              var componentIdentity = {};
              prepareToUseHooks(componentIdentity);
              _nextChildren4 = elementType.render(element.props, element.ref);
              _nextChildren4 = finishHooks(elementType.render, element.props, _nextChildren4, element.ref);
              _nextChildren4 = toArray(_nextChildren4);
              var _frame4 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren4,
                childIndex: 0,
                context: context,
                footer: ''
              };
              {
                _frame4.debugElementStack = [];
              }
              this.stack.push(_frame4);
              return '';
            }
          case REACT_MEMO_TYPE:
            {
              var _element = nextChild;
              var _nextChildren5 = [React.createElement(elementType.type, _assign({ ref: _element.ref }, _element.props))];
              var _frame5 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren5,
                childIndex: 0,
                context: context,
                footer: ''
              };
              {
                _frame5.debugElementStack = [];
              }
              this.stack.push(_frame5);
              return '';
            }
          case REACT_PROVIDER_TYPE:
            {
              var provider = nextChild;
              var nextProps = provider.props;
              var _nextChildren6 = toArray(nextProps.children);
              var _frame6 = {
                type: provider,
                domNamespace: parentNamespace,
                children: _nextChildren6,
                childIndex: 0,
                context: context,
                footer: ''
              };
              {
                _frame6.debugElementStack = [];
              }

              this.pushProvider(provider);

              this.stack.push(_frame6);
              return '';
            }
          case REACT_CONTEXT_TYPE:
            {
              var reactContext = nextChild.type;
              // The logic below for Context differs depending on PROD or DEV mode. In
              // DEV mode, we create a separate object for Context.Consumer that acts
              // like a proxy to Context. This proxy object adds unnecessary code in PROD
              // so we use the old behaviour (Context.Consumer references Context) to
              // reduce size and overhead. The separate object references context via
              // a property called "_context", which also gives us the ability to check
              // in DEV mode if this property exists or not and warn if it does not.
              {
                if (reactContext._context === undefined) {
                  // This may be because it's a Context (rather than a Consumer).
                  // Or it may be because it's older React where they're the same thing.
                  // We only want to warn if we're sure it's a new React.
                  if (reactContext !== reactContext.Consumer) {
                    if (!hasWarnedAboutUsingContextAsConsumer) {
                      hasWarnedAboutUsingContextAsConsumer = true;
                      warning$1(false, 'Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                    }
                  }
                } else {
                  reactContext = reactContext._context;
                }
              }
              var _nextProps = nextChild.props;
              var threadID = this.threadID;
              validateContextBounds(reactContext, threadID);
              var nextValue = reactContext[threadID];

              var _nextChildren7 = toArray(_nextProps.children(nextValue));
              var _frame7 = {
                type: nextChild,
                domNamespace: parentNamespace,
                children: _nextChildren7,
                childIndex: 0,
                context: context,
                footer: ''
              };
              {
                _frame7.debugElementStack = [];
              }
              this.stack.push(_frame7);
              return '';
            }
          case REACT_LAZY_TYPE:
            invariant(false, 'ReactDOMServer does not yet support lazy-loaded components.');
        }
      }

      var info = '';
      {
        var owner = nextElement._owner;
        if (elementType === undefined || typeof elementType === 'object' && elementType !== null && Object.keys(elementType).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
        }
        var ownerName = owner ? getComponentName(owner) : null;
        if (ownerName) {
          info += '\n\nCheck the render method of `' + ownerName + '`.';
        }
      }
      invariant(false, 'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s', elementType == null ? elementType : typeof elementType, info);
    }
  };

  ReactDOMServerRenderer.prototype.renderDOM = function renderDOM(element, context, parentNamespace) {
    var tag = element.type.toLowerCase();

    var namespace = parentNamespace;
    if (parentNamespace === Namespaces.html) {
      namespace = getIntrinsicNamespace(tag);
    }

    {
      if (namespace === Namespaces.html) {
        // Should this check be gated by parent namespace? Not sure we want to
        // allow <SVG> or <mATH>.
        !(tag === element.type) ? warning$1(false, '<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', element.type) : void 0;
      }
    }

    validateDangerousTag(tag);

    var props = element.props;
    if (tag === 'input') {
      {
        ReactControlledValuePropTypes.checkPropTypes('input', props);

        if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
          warning$1(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
          didWarnDefaultChecked = true;
        }
        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
          warning$1(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
          didWarnDefaultInputValue = true;
        }
      }

      props = _assign({
        type: undefined
      }, props, {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: props.value != null ? props.value : props.defaultValue,
        checked: props.checked != null ? props.checked : props.defaultChecked
      });
    } else if (tag === 'textarea') {
      {
        ReactControlledValuePropTypes.checkPropTypes('textarea', props);
        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
          warning$1(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
          didWarnDefaultTextareaValue = true;
        }
      }

      var initialValue = props.value;
      if (initialValue == null) {
        var defaultValue = props.defaultValue;
        // TODO (yungsters): Remove support for children content in <textarea>.
        var textareaChildren = props.children;
        if (textareaChildren != null) {
          {
            warning$1(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
          }
          !(defaultValue == null) ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : void 0;
          if (Array.isArray(textareaChildren)) {
            !(textareaChildren.length <= 1) ? invariant(false, '<textarea> can only have at most one child.') : void 0;
            textareaChildren = textareaChildren[0];
          }

          defaultValue = '' + textareaChildren;
        }
        if (defaultValue == null) {
          defaultValue = '';
        }
        initialValue = defaultValue;
      }

      props = _assign({}, props, {
        value: undefined,
        children: '' + initialValue
      });
    } else if (tag === 'select') {
      {
        ReactControlledValuePropTypes.checkPropTypes('select', props);

        for (var i = 0; i < valuePropNames.length; i++) {
          var propName = valuePropNames[i];
          if (props[propName] == null) {
            continue;
          }
          var isArray = Array.isArray(props[propName]);
          if (props.multiple && !isArray) {
            warning$1(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
          } else if (!props.multiple && isArray) {
            warning$1(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
          }
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
          warning$1(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
          didWarnDefaultSelectValue = true;
        }
      }
      this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
      props = _assign({}, props, {
        value: undefined
      });
    } else if (tag === 'option') {
      var selected = null;
      var selectValue = this.currentSelectValue;
      var optionChildren = flattenOptionChildren(props.children);
      if (selectValue != null) {
        var value = void 0;
        if (props.value != null) {
          value = props.value + '';
        } else {
          value = optionChildren;
        }
        selected = false;
        if (Array.isArray(selectValue)) {
          // multiple
          for (var j = 0; j < selectValue.length; j++) {
            if ('' + selectValue[j] === value) {
              selected = true;
              break;
            }
          }
        } else {
          selected = '' + selectValue === value;
        }

        props = _assign({
          selected: undefined,
          children: undefined
        }, props, {
          selected: selected,
          children: optionChildren
        });
      }
    }

    {
      validatePropertiesInDevelopment(tag, props);
    }

    assertValidProps(tag, props);

    var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
    var footer = '';
    if (omittedCloseTags.hasOwnProperty(tag)) {
      out += '/>';
    } else {
      out += '>';
      footer = '</' + element.type + '>';
    }
    var children = void 0;
    var innerMarkup = getNonChildrenInnerMarkup(props);
    if (innerMarkup != null) {
      children = [];
      if (newlineEatingTags[tag] && innerMarkup.charAt(0) === '\n') {
        // text/html ignores the first character in these tags if it's a newline
        // Prefer to break application/xml over text/html (for now) by adding
        // a newline specifically to get eaten by the parser. (Alternately for
        // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
        // \r is normalized out by HTMLTextAreaElement#value.)
        // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
        // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
        // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
        // See: Parsing of "textarea" "listing" and "pre" elements
        //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
        out += '\n';
      }
      out += innerMarkup;
    } else {
      children = toArray(props.children);
    }
    var frame = {
      domNamespace: getChildNamespace(parentNamespace, element.type),
      type: tag,
      children: children,
      childIndex: 0,
      context: context,
      footer: footer
    };
    {
      frame.debugElementStack = [];
    }
    this.stack.push(frame);
    this.previousWasTextNode = false;
    return out;
  };

  return ReactDOMServerRenderer;
}();

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostring
 */
function renderToString(element) {
  var renderer = new ReactDOMServerRenderer(element, false);
  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}

/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
 */
function renderToStaticMarkup(element) {
  var renderer = new ReactDOMServerRenderer(element, true);
  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}

function renderToNodeStream() {
  invariant(false, 'ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.');
}

function renderToStaticNodeStream() {
  invariant(false, 'ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.');
}

// Note: when changing this, also consider https://github.com/facebook/react/issues/11526
var ReactDOMServerBrowser = {
  renderToString: renderToString,
  renderToStaticMarkup: renderToStaticMarkup,
  renderToNodeStream: renderToNodeStream,
  renderToStaticNodeStream: renderToStaticNodeStream,
  version: ReactVersion
};

var ReactDOMServerBrowser$1 = Object.freeze({
	default: ReactDOMServerBrowser
});

var ReactDOMServer = ( ReactDOMServerBrowser$1 && ReactDOMServerBrowser ) || ReactDOMServerBrowser$1;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest
var server_browser = ReactDOMServer.default || ReactDOMServer;

module.exports = server_browser;
  })();
}


/***/ }),

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/react-dom/server.browser.js":
/*!**************************************************!*\
  !*** ./node_modules/react-dom/server.browser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-dom-server.browser.development.js */ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js");
}


/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../next/node_modules/webpack/buildin/global.js */ "./node_modules/next/node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/ts-invariant/lib/invariant.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/ts-invariant/lib/invariant.esm.js ***!
  \********************************************************/
/*! exports provided: default, InvariantError, invariant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvariantError", function() { return InvariantError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, typeof message === "number"
            ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
            : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
(function (invariant) {
    function warn() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.warn.apply(console, args);
    }
    invariant.warn = warn;
    function error() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.error.apply(console, args);
    }
    invariant.error = error;
})(invariant || (invariant = {}));
var invariant$1 = invariant;

/* harmony default export */ __webpack_exports__["default"] = (invariant$1);



/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/zen-observable-ts/lib/bundle.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/zen-observable-ts/lib/bundle.esm.js ***!
  \**********************************************************/
/*! exports provided: default, Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable */ "./node_modules/zen-observable/index.js");
/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zen_observable__WEBPACK_IMPORTED_MODULE_0__);


var Observable = zen_observable__WEBPACK_IMPORTED_MODULE_0___default.a;

/* harmony default export */ __webpack_exports__["default"] = (Observable);

//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/zen-observable/index.js":
/*!**********************************************!*\
  !*** ./node_modules/zen-observable/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/Observable.js */ "./node_modules/zen-observable/lib/Observable.js").Observable;


/***/ }),

/***/ "./node_modules/zen-observable/lib/Observable.js":
/*!*******************************************************!*\
  !*** ./node_modules/zen-observable/lib/Observable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// === Symbol Support ===

var hasSymbols = function () {
  return typeof Symbol === 'function';
};
var hasSymbol = function (name) {
  return hasSymbols() && Boolean(Symbol[name]);
};
var getSymbol = function (name) {
  return hasSymbol(name) ? Symbol[name] : '@@' + name;
};

if (hasSymbols() && !hasSymbol('observable')) {
  Symbol.observable = Symbol('observable');
}

var SymbolIterator = getSymbol('iterator');
var SymbolObservable = getSymbol('observable');
var SymbolSpecies = getSymbol('species');

// === Abstract Operations ===

function getMethod(obj, key) {
  var value = obj[key];

  if (value == null) return undefined;

  if (typeof value !== 'function') throw new TypeError(value + ' is not a function');

  return value;
}

function getSpecies(obj) {
  var ctor = obj.constructor;
  if (ctor !== undefined) {
    ctor = ctor[SymbolSpecies];
    if (ctor === null) {
      ctor = undefined;
    }
  }
  return ctor !== undefined ? ctor : Observable;
}

function isObservable(x) {
  return x instanceof Observable; // SPEC: Brand check
}

function hostReportError(e) {
  if (hostReportError.log) {
    hostReportError.log(e);
  } else {
    setTimeout(function () {
      throw e;
    });
  }
}

function enqueue(fn) {
  Promise.resolve().then(function () {
    try {
      fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}

function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === undefined) return;

  subscription._cleanup = undefined;

  if (!cleanup) {
    return;
  }

  try {
    if (typeof cleanup === 'function') {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, 'unsubscribe');
      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e) {
    hostReportError(e);
  }
}

function closeSubscription(subscription) {
  subscription._observer = undefined;
  subscription._queue = undefined;
  subscription._state = 'closed';
}

function flushSubscription(subscription) {
  var queue = subscription._queue;
  if (!queue) {
    return;
  }
  subscription._queue = undefined;
  subscription._state = 'ready';
  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === 'closed') break;
  }
}

function notifySubscription(subscription, type, value) {
  subscription._state = 'running';

  var observer = subscription._observer;

  try {
    var m = getMethod(observer, type);
    switch (type) {
      case 'next':
        if (m) m.call(observer, value);
        break;
      case 'error':
        closeSubscription(subscription);
        if (m) m.call(observer, value);else throw value;
        break;
      case 'complete':
        closeSubscription(subscription);
        if (m) m.call(observer);
        break;
    }
  } catch (e) {
    hostReportError(e);
  }

  if (subscription._state === 'closed') cleanupSubscription(subscription);else if (subscription._state === 'running') subscription._state = 'ready';
}

function onNotify(subscription, type, value) {
  if (subscription._state === 'closed') return;

  if (subscription._state === 'buffering') {
    subscription._queue.push({ type: type, value: value });
    return;
  }

  if (subscription._state !== 'ready') {
    subscription._state = 'buffering';
    subscription._queue = [{ type: type, value: value }];
    enqueue(function () {
      return flushSubscription(subscription);
    });
    return;
  }

  notifySubscription(subscription, type, value);
}

var Subscription = function () {
  function Subscription(observer, subscriber) {
    _classCallCheck(this, Subscription);

    // ASSERT: observer is an object
    // ASSERT: subscriber is callable

    this._cleanup = undefined;
    this._observer = observer;
    this._queue = undefined;
    this._state = 'initializing';

    var subscriptionObserver = new SubscriptionObserver(this);

    try {
      this._cleanup = subscriber.call(undefined, subscriptionObserver);
    } catch (e) {
      subscriptionObserver.error(e);
    }

    if (this._state === 'initializing') this._state = 'ready';
  }

  _createClass(Subscription, [{
    key: 'unsubscribe',
    value: function unsubscribe() {
      if (this._state !== 'closed') {
        closeSubscription(this);
        cleanupSubscription(this);
      }
    }
  }, {
    key: 'closed',
    get: function () {
      return this._state === 'closed';
    }
  }]);

  return Subscription;
}();

var SubscriptionObserver = function () {
  function SubscriptionObserver(subscription) {
    _classCallCheck(this, SubscriptionObserver);

    this._subscription = subscription;
  }

  _createClass(SubscriptionObserver, [{
    key: 'next',
    value: function next(value) {
      onNotify(this._subscription, 'next', value);
    }
  }, {
    key: 'error',
    value: function error(value) {
      onNotify(this._subscription, 'error', value);
    }
  }, {
    key: 'complete',
    value: function complete() {
      onNotify(this._subscription, 'complete');
    }
  }, {
    key: 'closed',
    get: function () {
      return this._subscription._state === 'closed';
    }
  }]);

  return SubscriptionObserver;
}();

var Observable = exports.Observable = function () {
  function Observable(subscriber) {
    _classCallCheck(this, Observable);

    if (!(this instanceof Observable)) throw new TypeError('Observable cannot be called as a function');

    if (typeof subscriber !== 'function') throw new TypeError('Observable initializer must be a function');

    this._subscriber = subscriber;
  }

  _createClass(Observable, [{
    key: 'subscribe',
    value: function subscribe(observer) {
      if (typeof observer !== 'object' || observer === null) {
        observer = {
          next: observer,
          error: arguments[1],
          complete: arguments[2]
        };
      }
      return new Subscription(observer, this._subscriber);
    }
  }, {
    key: 'forEach',
    value: function forEach(fn) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (typeof fn !== 'function') {
          reject(new TypeError(fn + ' is not a function'));
          return;
        }

        function done() {
          subscription.unsubscribe();
          resolve();
        }

        var subscription = _this.subscribe({
          next: function (value) {
            try {
              fn(value, done);
            } catch (e) {
              reject(e);
              subscription.unsubscribe();
            }
          },

          error: reject,
          complete: resolve
        });
      });
    }
  }, {
    key: 'map',
    value: function map(fn) {
      var _this2 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

      var C = getSpecies(this);

      return new C(function (observer) {
        return _this2.subscribe({
          next: function (value) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }
            observer.next(value);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            observer.complete();
          }
        });
      });
    }
  }, {
    key: 'filter',
    value: function filter(fn) {
      var _this3 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

      var C = getSpecies(this);

      return new C(function (observer) {
        return _this3.subscribe({
          next: function (value) {
            try {
              if (!fn(value)) return;
            } catch (e) {
              return observer.error(e);
            }
            observer.next(value);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            observer.complete();
          }
        });
      });
    }
  }, {
    key: 'reduce',
    value: function reduce(fn) {
      var _this4 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

      var C = getSpecies(this);
      var hasSeed = arguments.length > 1;
      var hasValue = false;
      var seed = arguments[1];
      var acc = seed;

      return new C(function (observer) {
        return _this4.subscribe({
          next: function (value) {
            var first = !hasValue;
            hasValue = true;

            if (!first || hasSeed) {
              try {
                acc = fn(acc, value);
              } catch (e) {
                return observer.error(e);
              }
            } else {
              acc = value;
            }
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            if (!hasValue && !hasSeed) return observer.error(new TypeError('Cannot reduce an empty sequence'));

            observer.next(acc);
            observer.complete();
          }
        });
      });
    }
  }, {
    key: 'concat',
    value: function concat() {
      var _this5 = this;

      for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }

      var C = getSpecies(this);

      return new C(function (observer) {
        var subscription = void 0;
        var index = 0;

        function startNext(next) {
          subscription = next.subscribe({
            next: function (v) {
              observer.next(v);
            },
            error: function (e) {
              observer.error(e);
            },
            complete: function () {
              if (index === sources.length) {
                subscription = undefined;
                observer.complete();
              } else {
                startNext(C.from(sources[index++]));
              }
            }
          });
        }

        startNext(_this5);

        return function () {
          if (subscription) {
            subscription.unsubscribe();
            subscription = undefined;
          }
        };
      });
    }
  }, {
    key: 'flatMap',
    value: function flatMap(fn) {
      var _this6 = this;

      if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

      var C = getSpecies(this);

      return new C(function (observer) {
        var subscriptions = [];

        var outer = _this6.subscribe({
          next: function (value) {
            if (fn) {
              try {
                value = fn(value);
              } catch (e) {
                return observer.error(e);
              }
            }

            var inner = C.from(value).subscribe({
              next: function (value) {
                observer.next(value);
              },
              error: function (e) {
                observer.error(e);
              },
              complete: function () {
                var i = subscriptions.indexOf(inner);
                if (i >= 0) subscriptions.splice(i, 1);
                completeIfDone();
              }
            });

            subscriptions.push(inner);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            completeIfDone();
          }
        });

        function completeIfDone() {
          if (outer.closed && subscriptions.length === 0) observer.complete();
        }

        return function () {
          subscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
          outer.unsubscribe();
        };
      });
    }
  }, {
    key: SymbolObservable,
    value: function () {
      return this;
    }
  }], [{
    key: 'from',
    value: function from(x) {
      var C = typeof this === 'function' ? this : Observable;

      if (x == null) throw new TypeError(x + ' is not an object');

      var method = getMethod(x, SymbolObservable);
      if (method) {
        var observable = method.call(x);

        if (Object(observable) !== observable) throw new TypeError(observable + ' is not an object');

        if (isObservable(observable) && observable.constructor === C) return observable;

        return new C(function (observer) {
          return observable.subscribe(observer);
        });
      }

      if (hasSymbol('iterator')) {
        method = getMethod(x, SymbolIterator);
        if (method) {
          return new C(function (observer) {
            enqueue(function () {
              if (observer.closed) return;
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = method.call(x)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var item = _step.value;

                  observer.next(item);
                  if (observer.closed) return;
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              observer.complete();
            });
          });
        }
      }

      if (Array.isArray(x)) {
        return new C(function (observer) {
          enqueue(function () {
            if (observer.closed) return;
            for (var i = 0; i < x.length; ++i) {
              observer.next(x[i]);
              if (observer.closed) return;
            }
            observer.complete();
          });
        });
      }

      throw new TypeError(x + ' is not observable');
    }
  }, {
    key: 'of',
    value: function of() {
      for (var _len2 = arguments.length, items = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        items[_key2] = arguments[_key2];
      }

      var C = typeof this === 'function' ? this : Observable;

      return new C(function (observer) {
        enqueue(function () {
          if (observer.closed) return;
          for (var i = 0; i < items.length; ++i) {
            observer.next(items[i]);
            if (observer.closed) return;
          }
          observer.complete();
        });
      });
    }
  }, {
    key: SymbolSpecies,
    get: function () {
      return this;
    }
  }]);

  return Observable;
}();

if (hasSymbols()) {
  Object.defineProperty(Observable, Symbol('extensions'), {
    value: {
      symbol: SymbolObservable,
      hostReportError: hostReportError
    },
    configurable: true
  });
}

/***/ }),

/***/ "./pages/content.js":
/*!**************************!*\
  !*** ./pages/content.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Content = function Content() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Asya");
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ "./pages/content.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");




var client = new apollo_boost__WEBPACK_IMPORTED_MODULE_2__["default"]({
  uri: 'https://graphql-pokemon.now.sh/graphql'
});

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
    client: client
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_content__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.f9ec2333cf73f19d3952.hot-update.js.map