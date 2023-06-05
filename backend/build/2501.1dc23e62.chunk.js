"use strict";
(self["webpackChunklab_nckh"] = self["webpackChunklab_nckh"] || []).push([[2501],{

/***/ 42501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _strapi_design_system_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40619);
/* harmony import */ var _strapi_design_system_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82562);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86896);




const MultiSelect = ({
  value,
  onChange,
  name,
  intlLabel,
  required,
  attribute,
  description,
  placeholder,
  disabled,
  error
}) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
  const possibleOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (attribute["options"] || []).map((option) => {
      const [label, value2] = [...option.split(":"), option];
      if (!label || !value2)
        return null;
      return { label, value: value2 };
    }).filter(Boolean);
  }, [attribute]);
  const sanitizedValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    let parsedValue;
    try {
      parsedValue = JSON.parse(value || "[]");
    } catch (e) {
      parsedValue = [];
    }
    return Array.isArray(parsedValue) ? parsedValue.filter(
      (val) => possibleOptions.some((option) => option.value === val)
    ) : [];
  }, [value, possibleOptions]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system_Select__WEBPACK_IMPORTED_MODULE_2__/* .Select */ .P,
    {
      name,
      id: name,
      label: formatMessage(intlLabel),
      error: error || (required && !possibleOptions.length ? "No options" : null),
      disabled: disabled || possibleOptions.length === 0,
      required,
      hint: description && formatMessage(description),
      onChange: (v) => {
        onChange({
          target: {
            name,
            value: JSON.stringify(v.filter(Boolean)),
            type: attribute.type
          }
        });
      },
      placeholder,
      multi: true,
      value: sanitizedValue,
      withTags: true
    },
    possibleOptions.map(({ label, value: value2 }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Select__WEBPACK_IMPORTED_MODULE_3__/* .Option */ .W, { value: value2, key: value2 }, label))
  );
};
MultiSelect.defaultProps = {
  description: null,
  disabled: false,
  error: null,
  labelAction: null,
  required: false,
  value: ""
};
MultiSelect.propTypes = {
  intlLabel: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object).isRequired,
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired,
  attribute: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object).isRequired,
  name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  error: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  labelAction: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiSelect);


/***/ })

}]);