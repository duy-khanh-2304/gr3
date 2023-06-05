"use strict";
(self["webpackChunklab_nckh"] = self["webpackChunklab_nckh"] || []).push([[1077],{

/***/ 62579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Input)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/@googlemaps/js-api-loader/dist/index.esm.js
// do not edit .js files directly - edit src/index.jst



var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ID = "__googleMapsScriptId";
/**
 * The status of the [[Loader]].
 */
var LoaderStatus;
(function (LoaderStatus) {
    LoaderStatus[LoaderStatus["INITIALIZED"] = 0] = "INITIALIZED";
    LoaderStatus[LoaderStatus["LOADING"] = 1] = "LOADING";
    LoaderStatus[LoaderStatus["SUCCESS"] = 2] = "SUCCESS";
    LoaderStatus[LoaderStatus["FAILURE"] = 3] = "FAILURE";
})(LoaderStatus || (LoaderStatus = {}));
/**
 * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
 * dynamically using
 * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 * It works by dynamically creating and appending a script node to the the
 * document head and wrapping the callback function so as to return a promise.
 *
 * ```
 * const loader = new Loader({
 *   apiKey: "",
 *   version: "weekly",
 *   libraries: ["places"]
 * });
 *
 * loader.load().then((google) => {
 *   const map = new google.maps.Map(...)
 * })
 * ```
 */
class Loader {
    /**
     * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
     * using this library, instead the defaults are set by the Google Maps
     * JavaScript API server.
     *
     * ```
     * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
     * ```
     */
    constructor({ apiKey, authReferrerPolicy, channel, client, id = DEFAULT_ID, language, libraries = [], mapIds, nonce, region, retries = 3, url = "https://maps.googleapis.com/maps/api/js", version, }) {
        this.CALLBACK = "__googleMapsCallback";
        this.callbacks = [];
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.apiKey = apiKey;
        this.authReferrerPolicy = authReferrerPolicy;
        this.channel = channel;
        this.client = client;
        this.id = id || DEFAULT_ID; // Do not allow empty string
        this.language = language;
        this.libraries = libraries;
        this.mapIds = mapIds;
        this.nonce = nonce;
        this.region = region;
        this.retries = retries;
        this.url = url;
        this.version = version;
        if (Loader.instance) {
            if (!fastDeepEqual(this.options, Loader.instance.options)) {
                throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);
            }
            return Loader.instance;
        }
        Loader.instance = this;
    }
    get options() {
        return {
            version: this.version,
            apiKey: this.apiKey,
            channel: this.channel,
            client: this.client,
            id: this.id,
            libraries: this.libraries,
            language: this.language,
            region: this.region,
            mapIds: this.mapIds,
            nonce: this.nonce,
            url: this.url,
            authReferrerPolicy: this.authReferrerPolicy,
        };
    }
    get status() {
        if (this.errors.length) {
            return LoaderStatus.FAILURE;
        }
        if (this.done) {
            return LoaderStatus.SUCCESS;
        }
        if (this.loading) {
            return LoaderStatus.LOADING;
        }
        return LoaderStatus.INITIALIZED;
    }
    get failed() {
        return this.done && !this.loading && this.errors.length >= this.retries + 1;
    }
    /**
     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
     *
     * @ignore
     */
    createUrl() {
        let url = this.url;
        url += `?callback=${this.CALLBACK}`;
        if (this.apiKey) {
            url += `&key=${this.apiKey}`;
        }
        if (this.channel) {
            url += `&channel=${this.channel}`;
        }
        if (this.client) {
            url += `&client=${this.client}`;
        }
        if (this.libraries.length > 0) {
            url += `&libraries=${this.libraries.join(",")}`;
        }
        if (this.language) {
            url += `&language=${this.language}`;
        }
        if (this.region) {
            url += `&region=${this.region}`;
        }
        if (this.version) {
            url += `&v=${this.version}`;
        }
        if (this.mapIds) {
            url += `&map_ids=${this.mapIds.join(",")}`;
        }
        if (this.authReferrerPolicy) {
            url += `&auth_referrer_policy=${this.authReferrerPolicy}`;
        }
        return url;
    }
    deleteScript() {
        const script = document.getElementById(this.id);
        if (script) {
            script.remove();
        }
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     */
    load() {
        return this.loadPromise();
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     *
     * @ignore
     */
    loadPromise() {
        return new Promise((resolve, reject) => {
            this.loadCallback((err) => {
                if (!err) {
                    resolve(window.google);
                }
                else {
                    reject(err.error);
                }
            });
        });
    }
    /**
     * Load the Google Maps JavaScript API script with a callback.
     */
    loadCallback(fn) {
        this.callbacks.push(fn);
        this.execute();
    }
    /**
     * Set the script on document.
     */
    setScript() {
        if (document.getElementById(this.id)) {
            // TODO wrap onerror callback for cases where the script was loaded elsewhere
            this.callback();
            return;
        }
        const url = this.createUrl();
        const script = document.createElement("script");
        script.id = this.id;
        script.type = "text/javascript";
        script.src = url;
        script.onerror = this.loadErrorCallback.bind(this);
        script.defer = true;
        script.async = true;
        if (this.nonce) {
            script.nonce = this.nonce;
        }
        document.head.appendChild(script);
    }
    /**
     * Reset the loader state.
     */
    reset() {
        this.deleteScript();
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.onerrorEvent = null;
    }
    resetIfRetryingFailed() {
        if (this.failed) {
            this.reset();
        }
    }
    loadErrorCallback(e) {
        this.errors.push(e);
        if (this.errors.length <= this.retries) {
            const delay = this.errors.length * Math.pow(2, this.errors.length);
            console.log(`Failed to load Google Maps script, retrying in ${delay} ms.`);
            setTimeout(() => {
                this.deleteScript();
                this.setScript();
            }, delay);
        }
        else {
            this.onerrorEvent = e;
            this.callback();
        }
    }
    setCallback() {
        window.__googleMapsCallback = this.callback.bind(this);
    }
    callback() {
        this.done = true;
        this.loading = false;
        this.callbacks.forEach((cb) => {
            cb(this.onerrorEvent);
        });
        this.callbacks = [];
    }
    execute() {
        this.resetIfRetryingFailed();
        if (this.done) {
            this.callback();
        }
        else {
            // short circuit and warn if google.maps is already loaded
            if (window.google && window.google.maps && window.google.maps.version) {
                console.warn("Google Maps already loaded outside @googlemaps/js-api-loader." +
                    "This may result in undesirable behavior as options and script parameters may not match.");
                this.callback();
                return;
            }
            if (this.loading) ;
            else {
                this.loading = true;
                this.setCallback();
                this.setScript();
            }
        }
    }
}


//# sourceMappingURL=index.esm.js.map

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(75878);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(50781);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/dist/NumberInput/NumberInput.js + 1 modules
var NumberInput = __webpack_require__(29872);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/dist/Combobox/Combobox.js
var Combobox = __webpack_require__(63122);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.js
var ComboboxOption = __webpack_require__(85612);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 65 modules
var helper_plugin_esm = __webpack_require__(97285);
;// CONCATENATED MODULE: ./node_modules/strapi-location-field-plugin/admin/src/components/LocationInput.js






function Input({ onChange, value, name, attribute, error, required }) {
  const [apiKey, setApiKey] = (0,react.useState)(null);
  const [fields, setFields] = (0,react.useState)(null);
  const [loader, setLoader] = (0,react.useState)(null);
  const [autocompletionRequestOptions, setAutocompletionRequestOptions] = (0,react.useState)(null);
  const getConfigDetails = async () => {
    const { signal } = new AbortController();
    const { fields: fields2, autocompletionRequestOptions: autocompletionRequestOptions2, googleMapsApiKey } = await (0,helper_plugin_esm/* request */.WY)("/location-field/config", {
      method: "GET",
      signal
    });
    return { fields: fields2, autocompletionRequestOptions: autocompletionRequestOptions2, googleMapsApiKey };
  };
  react.useEffect(() => {
    getConfigDetails().then((config) => {
      setApiKey(config.googleMapsApiKey);
      config.fields = config.fields || [];
      if (!config.fields.includes("geometry")) {
        config.fields.push("geometry");
      }
      setFields(config.fields);
      setAutocompletionRequestOptions(config.autocompletionRequestOptions);
    });
  }, []);
  react.useEffect(() => {
    if (apiKey) {
      const loader2 = new Loader({
        apiKey,
        version: "weekly",
        libraries: ["places"]
      });
      setLoader(loader2);
    }
  }, [apiKey]);
  react.useEffect(() => {
    if (fields && !fields.includes("geometry")) {
      fields.push("geometry");
    }
  }, [fields]);
  const [predictions, setPredictions] = (0,react.useState)([]);
  const handleInputChange = (e) => {
    if (!e.target.value) {
      setLocationValue(
        {
          description: "",
          place_id: "no_location",
          lat: null,
          lng: null
        },
        true
      );
      setPredictions([]);
      return;
    }
    const getSuggestions = async () => {
      loader.load().then((google) => {
        let sessionToken = new google.maps.places.AutocompleteSessionToken();
        let service = new google.maps.places.AutocompleteService();
        service.getPlacePredictions(
          { ...autocompletionRequestOptions, input: e.target.value, sessionToken },
          (predictions2, status) => {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
              console.error(status);
              return;
            }
            if (predictions2.length > 0) {
              setPredictions(predictions2);
            }
          }
        );
      });
    };
    getSuggestions();
  };
  const setLocationValue = (val, creatingNew) => {
    if (!val)
      return;
    let targetValue = null;
    if (!creatingNew) {
      let selectedPrediction = predictions.find((prediction) => prediction.place_id === val);
      loader.load().then((google) => {
        let service = new google.maps.places.PlacesService(document.createElement("div"));
        service.getDetails({ placeId: selectedPrediction.place_id, fields }, (place, status) => {
          if (status !== google.maps.places.PlacesServiceStatus.OK) {
            console.error(status);
            return;
          }
          if (fields.includes("photo") && place?.photos) {
            place.photos.forEach((photo) => {
              photo.url = photo.getUrl();
            });
          }
          selectedPrediction.details = place;
          targetValue = JSON.stringify({
            description: selectedPrediction.description,
            place_id: selectedPrediction.place_id,
            lat: selectedPrediction.details.geometry.location.lat(),
            lng: selectedPrediction.details.geometry.location.lng(),
            details: selectedPrediction.details
          });
          onChange({
            target: {
              name,
              value: targetValue,
              type: attribute.type
            }
          });
        });
      });
    } else {
      targetValue = JSON.stringify(val);
      onChange({
        target: {
          name,
          value: targetValue,
          type: attribute.type
        }
      });
    }
  };
  const setCoordinates = (val, type) => {
    let targetValue = null;
    if (value !== "null") {
      targetValue = JSON.parse(value);
    } else {
      targetValue = {
        description: "",
        place_id: "no_location",
        lat: null,
        lng: null
      };
    }
    if (type === "lat") {
      targetValue.lat = val || null;
    } else {
      targetValue.lng = val || null;
    }
    onChange({
      target: {
        name,
        value: JSON.stringify(targetValue),
        type: attribute.type
      }
    });
  };
  const createNewLocation = (value2) => {
    const newPrediction = { description: value2, place_id: "custom_location", lat: null, lng: null };
    setLocationValue(newPrediction, true);
  };
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "start", gap: 3 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { width: "100%" }, loader && apiKey && fields && /* @__PURE__ */ react.createElement(
    Combobox/* Combobox */.hQ,
    {
      label: "Location",
      name: "location",
      error,
      required,
      placeholder: "Ex. 123 Street, Niagara Falls, ON",
      onChange: (selection) => setLocationValue(selection, false),
      onInputChange: (e) => handleInputChange(e),
      value: value !== "null" && JSON.parse(value).place_id !== "no_location" ? JSON.parse(value).place_id : "",
      onClear: () => {
        setLocationValue(
          {
            description: "",
            place_id: "no_location",
            lat: null,
            lng: null
          },
          true
        );
      },
      creatable: true,
      createMessage: (e) => `Create Location: "${e}"`,
      onCreateOption: (e) => createNewLocation(e)
    },
    predictions.map((prediction) => /* @__PURE__ */ react.createElement(ComboboxOption/* ComboboxOption */.O, { key: prediction.place_id, value: prediction.place_id }, prediction.description)).concat(
      [/* @__PURE__ */ react.createElement("div", { key: "no_location", value: "no_location", style: { display: "none" } }, "No Location")]
    ).concat(
      [/* @__PURE__ */ react.createElement("div", { key: "custom_location", value: "custom_location", style: { display: "none" } }, value !== "null" && JSON.parse(value).place_id === "custom_location" ? JSON.parse(value).description : "Custom Location")]
    ).concat(
      [
        /* @__PURE__ */ react.createElement("div", { key: "selected", value: value !== "null" ? JSON.parse(value).place_id : "", style: { display: "none" } }, value !== "null" ? JSON.parse(value).description : "")
      ]
    )
  )), value !== "null" && JSON.parse(value).place_id === "custom_location" && /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2 }, /* @__PURE__ */ react.createElement(
    NumberInput/* NumberInput */.Y,
    {
      label: "Latitude",
      name: "latitude",
      placeholder: "Ex. 43.123456",
      onValueChange: (e) => setCoordinates(e, "lat"),
      value: value !== "null" ? JSON.parse(value).lat : null
    }
  ), /* @__PURE__ */ react.createElement(
    NumberInput/* NumberInput */.Y,
    {
      label: "Longitude",
      name: "longitude",
      placeholder: "Ex. -79.123456",
      onValueChange: (e) => setCoordinates(e, "lng"),
      value: value !== "null" ? JSON.parse(value).lng : null
    }
  )));
}
Input.defaultProps = {
  value: "null"
};


/***/ }),

/***/ 63122:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Wx: () => (/* binding */ Ke),
/* harmony export */   XU: () => (/* binding */ Je),
/* harmony export */   hQ: () => (/* binding */ we)
/* harmony export */ });
/* unused harmony export OptionBox */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15800);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(21514);
/* harmony import */ var _strapi_ui_primitives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52605);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1565);
/* harmony import */ var _helpers_strings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35571);
/* harmony import */ var _hooks_useControllableState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46169);
/* harmony import */ var _hooks_useId_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73879);
/* harmony import */ var _hooks_useIntersection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43931);
/* harmony import */ var _themes_utils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(27882);
/* harmony import */ var _Loader_Loader_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(28809);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50781);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(78549);
/* harmony import */ var _Field_Field_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32156);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75878);
/* harmony import */ var _Field_FieldLabel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29516);
/* harmony import */ var _Field_FieldHint_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(27124);
/* harmony import */ var _Field_FieldError_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8595);


















const we = ({ children: e, clearLabel: n = "clear", creatable: s = !1, createMessage: f = (c) => `Create "${c}"`, defaultFilterValue: m, defaultTextValue: g, defaultOpen: D = !1, open: H, onOpenChange: N, disabled: b = !1, error: $, filterValue: W, hasMoreItems: L = !1, hint: U, id: A, label: G, labelAction: J, loading: C = !1, loadingMessage: K = "Loading content...", noOptionsMessage: Q = () => "No results found", onChange: V, onClear: x, onCreateOption: v, onFilterValueChange: X, onInputChange: y, onTextValueChange: Y, onLoadMore: k, placeholder: Z = "Select or enter a value", required: T = !1, startIcon: F, textValue: _, value: O }) => {
  const [c, M] = (0,_hooks_useControllableState_js__WEBPACK_IMPORTED_MODULE_2__/* .useControllableState */ .T)({
    prop: H,
    defaultProp: D,
    onChange: N
  }), [i, B] = (0,_hooks_useControllableState_js__WEBPACK_IMPORTED_MODULE_2__/* .useControllableState */ .T)({
    prop: _,
    defaultProp: g,
    onChange: Y
  }), [ee, P] = (0,_hooks_useControllableState_js__WEBPACK_IMPORTED_MODULE_2__/* .useControllableState */ .T)({
    prop: W,
    defaultProp: m,
    onChange: X
  }), S = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null), j = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null), re = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null), u = (0,_hooks_useId_js__WEBPACK_IMPORTED_MODULE_3__/* .useId */ .M)(A), oe = (o) => {
    x && !b && (B(""), P(""), x(o), j.current.focus());
  }, te = (o) => {
    M(o);
  }, ne = (o) => {
    B(o);
  }, le = (o) => {
    P(o);
  }, ie = (o) => {
    y && y(o);
  }, ae = (o) => {
    V && V(o);
  }, se = (0,_hooks_useId_js__WEBPACK_IMPORTED_MODULE_3__/* .useId */ .M)(), E = `intersection-${(0,_helpers_strings_js__WEBPACK_IMPORTED_MODULE_4__/* .stripReactIdOfColon */ .B)(se)}`, de = (o) => {
    k && L && !C && k(o);
  }, z = () => {
    v && i && v(i);
  };
  (0,_hooks_useIntersection_js__WEBPACK_IMPORTED_MODULE_5__/* .useIntersection */ .s)(S, de, {
    selectorToWatch: `#${E}`,
    /**
     * We need to know when the select is open because only then will viewportRef
     * not be null. Because it uses a portal that (sensibly) is not mounted 24/7.
     */
    skipWhen: !c
  });
  const ce = `${u}-hint`, ue = `${u}-error`;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Field_Field_js__WEBPACK_IMPORTED_MODULE_6__/* .Field */ .g, { hint: U, error: $, id: u, required: T, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .k, { direction: "column", alignItems: "stretch", gap: 1, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Field_FieldLabel_js__WEBPACK_IMPORTED_MODULE_8__/* .FieldLabel */ .Q, { action: J, children: G }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_strapi_ui_primitives__WEBPACK_IMPORTED_MODULE_9__/* .Combobox */ .hQ.Root, { autocomplete: s ? "list" : "both", open: c, onOpenChange: te, onTextValueChange: ne, textValue: i, allowCustomValue: !0, disabled: b, required: T, value: O === null ? void 0 : O, onValueChange: ae, filterValue: ee, onFilterValueChange: le, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Ve, { $hasError: !!$, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .k, { flex: "1", as: "span", gap: 3, children: [F ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .x, { as: "span", "aria-hidden": !0, children: F }) : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ve, { placeholder: Z, id: u, "aria-invalid": !!$, "aria-labelledby": `${ce} ${ue}`, onChange: ie, ref: j })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .k, { as: "span", gap: 3, children: [i && x ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Re, { as: "button", hasRadius: !0, background: "transparent", type: "button", onClick: oe, "aria-disabled": b, "aria-label": n, title: n, ref: re, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}) }) : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ye, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}) })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_ui_primitives__WEBPACK_IMPORTED_MODULE_9__/* .Combobox */ .hQ.Portal, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ke, { sideOffset: 4, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Te, { ref: S, children: [e, s ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_ui_primitives__WEBPACK_IMPORTED_MODULE_9__/* .Combobox */ .hQ.CreateItem, { onPointerUp: z, onClick: z, asChild: !0, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(R, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .Z, { children: f(i ?? "") }) }) }) : null, !s && !C ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_ui_primitives__WEBPACK_IMPORTED_MODULE_9__/* .Combobox */ .hQ.NoValueFound, { asChild: !0, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(R, { $hasHover: !1, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .Z, { children: Q(i ?? "") }) }) }) : null, C ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .k, { justifyContent: "center", alignItems: "center", paddingTop: 2, paddingBottom: 2, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Loader_Loader_js__WEBPACK_IMPORTED_MODULE_14__/* .Loader */ .a, { small: !0, children: K }) }) : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .x, { id: E, width: "100%", height: "1px" })] }) }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Field_FieldHint_js__WEBPACK_IMPORTED_MODULE_15__/* .FieldHint */ .J, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Field_FieldError_js__WEBPACK_IMPORTED_MODULE_16__/* .FieldError */ .c, {})] }) });
}, Je = (e) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(we, { ...e, creatable: !0 }), Re = (0,styled_components__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_10__/* .Box */ .x)`
  border: none;

  svg {
    height: ${11 / 16}rem;
    width: ${11 / 16}rem;
  }

  svg path {
    fill: ${({ theme: e }) => e.colors.neutral600};
  }
`, Ve = (0,styled_components__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP)(_strapi_ui_primitives__WEBPACK_IMPORTED_MODULE_9__/* .Combobox */ .hQ.Trigger)`
  position: relative;
  border: 1px solid ${({ theme: e, $hasError: n }) => n ? e.colors.danger600 : e.colors.neutral200};
  padding-right: ${({ theme: e }) => e.spaces[3]};
  padding-left: ${({ theme: e }) => e.spaces[3]};
  border-radius: ${({ theme: e }) => e.borderRadius};
  background: ${({ theme: e }) => e.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme: e }) => e.spaces[4]};

  &[data-disabled] {
    color: ${({ theme: e }) => e.colors.neutral600};
    background: ${({ theme: e }) => e.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({ theme: e, $hasError: n }) => (0,_themes_utils_js__WEBPACK_IMPORTED_MODULE_18__/* .inputFocusStyle */ .k3)()({ theme: e, hasError: n })};
`, ve = (0,styled_components__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP)(_strapi_ui_primitives__WEBPACK_IMPORTED_MODULE_9__/* .Combobox */ .hQ.TextInput)`
  width: 100%;
  font-size: ${14 / 16}rem;
  color: ${({ theme: e }) => e.colors.neutral800};
  min-height: ${40 / 16}rem;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`, ye = (0,styled_components__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP)(_strapi_ui_primitives__WEBPACK_IMPORTED_MODULE_9__/* .Combobox */ .hQ.Icon)`
  & > svg {
    width: ${6 / 16}rem;

    & > path {
      fill: ${({ theme: e }) => e.colors.neutral600};
    }
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`, ke = (0,styled_components__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP)(_strapi_ui_primitives__WEBPACK_IMPORTED_MODULE_9__/* .Combobox */ .hQ.Content)`
  background: ${({ theme: e }) => e.colors.neutral0};
  box-shadow: ${({ theme: e }) => e.shadows.filterShadow};
  border: 1px solid ${({ theme: e }) => e.colors.neutral150};
  border-radius: ${({ theme: e }) => e.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({ theme: e }) => e.zIndices[1]};
`, Te = (0,styled_components__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP)(_strapi_ui_primitives__WEBPACK_IMPORTED_MODULE_9__/* .Combobox */ .hQ.Viewport)`
  padding: ${({ theme: e }) => e.spaces[1]};
`, Ke = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ children: e, value: n, disabled: s, textValue: f, ...m }, g) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_ui_primitives__WEBPACK_IMPORTED_MODULE_9__/* .Combobox */ .hQ.ComboboxItem, { asChild: !0, value: n, disabled: s, textValue: f, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(R, { ref: g, ...m, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_ui_primitives__WEBPACK_IMPORTED_MODULE_9__/* .Combobox */ .hQ.ItemText, { asChild: !0, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .Z, { children: e }) }) }) })), R = styled_components__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({ theme: e }) => e.spaces[2]} ${({ theme: e }) => e.spaces[4]};
  background-color: ${({ theme: e }) => e.colors.neutral0};
  border-radius: ${({ theme: e }) => e.borderRadius};
  user-select: none;

  &[data-selected] {
    background-color: ${({ theme: e }) => e.colors.primary100};

    ${_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .Z} {
      color: ${({ theme: e }) => e.colors.primary600};
      font-weight: bold;
    }
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({ theme: e, $hasHover: n = !0 }) => n ? e.colors.primary100 : e.colors.neutral0};
  }

  &[data-highlighted] {
    ${_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_13__/* .Typography */ .Z} {
      color: ${({ theme: e }) => e.colors.primary600};
      font-weight: bold;
    }
  }
`;



/***/ }),

/***/ 85612:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _Combobox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63122);

const p = _Combobox_js__WEBPACK_IMPORTED_MODULE_0__/* .Option */ .Wx;



/***/ })

}]);