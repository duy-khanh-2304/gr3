"use strict";
(self["webpackChunklab_nckh"] = self["webpackChunklab_nckh"] || []).push([[4522],{

/***/ 46228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 65 modules
var helper_plugin_esm = __webpack_require__(97285);
// EXTERNAL MODULE: ./node_modules/strapi-tiptap-editor/admin/src/pluginId.js
var pluginId = __webpack_require__(91071);
var pluginId_default = /*#__PURE__*/__webpack_require__.n(pluginId);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(88767);
// EXTERNAL MODULE: ./node_modules/strapi-tiptap-editor/utils/api.js
var api = __webpack_require__(48826);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(1565);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js



const a = (0,styled_components_browser_esm/* default */.ZP)(Box/* Box */.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`, m = ({ labelledBy: o = "main-content-title", ...n }) => (0,jsx_runtime.jsx)(a, { "aria-labelledby": o, as: "main", id: "main-content", tabIndex: -1, ...n });


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useElementOnScreen.js

const b = (t) => {
  const e = (0,react.useRef)(null), [s, c] = (0,react.useState)(!0), i = ([n]) => {
    c(n.isIntersecting);
  };
  return (0,react.useEffect)(() => {
    const n = e.current, r = new IntersectionObserver(i, t);
    return n && r.observe(e.current), () => {
      n && r.disconnect();
    };
  }, [e, t]), [e, s];
};


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var dist = __webpack_require__(79698);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useResizeObserver.js


const c = (e, i) => {
  const t = (0,dist/* useCallbackRef */.W)(i);
  (0,react.useLayoutEffect)(() => {
    const r = new ResizeObserver(t);
    return Array.isArray(e) ? e.forEach((n) => {
      n.current && r.observe(n.current);
    }) : e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e, t]);
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js








const HeaderLayout_b = (r) => {
  const t = (0,react.useRef)(null), [i, d] = (0,react.useState)(null), [a, h] = b({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });
  return c(a, () => {
    a.current && d(a.current.getBoundingClientRect());
  }), (0,react.useEffect)(() => {
    t.current && d(t.current.getBoundingClientRect());
  }, [t]), (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)("div", { style: { height: i?.height }, ref: a, children: h && (0,jsx_runtime.jsx)(p, { ref: t, ...r }) }), !h && (0,jsx_runtime.jsx)(p, { ...r, sticky: !0, width: i?.width })] });
};
HeaderLayout_b.displayName = "HeaderLayout";
const C = (0,styled_components_browser_esm/* default */.ZP)(Box/* Box */.x)`
  width: ${({ width: r }) => r ? `${r / 16}rem` : void 0};
  z-index: ${({ theme: r }) => r.zIndices[1]};
`, p = react.forwardRef(({ navigationAction: r, primaryAction: t, secondaryAction: i, subtitle: d, title: a, sticky: h, width: c, ...s }, g) => {
  const f = typeof d == "string";
  return h ? (0,jsx_runtime.jsx)(C, { paddingLeft: 6, paddingRight: 6, paddingTop: 3, paddingBottom: 3, position: "fixed", top: 0, right: 0, background: "neutral0", shadow: "tableShadow", width: c, "data-strapi-header-sticky": !0, children: (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { children: [r && (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingRight: 3, children: r }), (0,jsx_runtime.jsxs)(Box/* Box */.x, { children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "beta", as: "h1", ...s, children: a }), f ? (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600", children: d }) : d] }), i ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 4, children: i }) : null] }), (0,jsx_runtime.jsx)(Flex/* Flex */.k, { children: t ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 2, children: t }) : void 0 })] }) }) : (0,jsx_runtime.jsxs)(Box/* Box */.x, { ref: g, paddingLeft: 10, paddingRight: 10, paddingBottom: 8, paddingTop: r ? 6 : 8, background: "neutral100", "data-strapi-header": !0, children: [r ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingBottom: 2, children: r }) : null, (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { minWidth: 0, children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, { as: "h1", variant: "alpha", ...s, children: a }), i ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 4, children: i }) : null] }), t] }), f ? (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "epsilon", textColor: "neutral600", as: "p", children: d }) : d] });
});


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js


const d = ({ children: t }) => (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 10, paddingRight: 10, children: t });


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabsContext.js

const TabsContext_n = (0,react.createContext)({
  id: "",
  label: "",
  selectedTabIndex: 0,
  selectTabIndex() {
    throw new Error("TabsContext.selectTabIndex is not implemented.");
  }
}), TabsContext_s = () => (0,react.useContext)(TabsContext_n);


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/hooks/useId.js
var useId = __webpack_require__(2504);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabGroup.js




const l = react.forwardRef(({ id: c, initialSelectedTabIndex: n = 0, label: t, onTabChange: o, variant: r, ...i }, p) => {
  const s = (0,useId/* useId */.M)(c), [d, a] = react.useState(n);
  react.useImperativeHandle(p, () => ({
    _handlers: { setSelectedTabIndex: a }
  }));
  const u = react.useMemo(() => ({ id: s, selectedTabIndex: d, selectTabIndex: a, label: t, variant: r, onTabChange: o }), [t, o, d, s, r]);
  return (0,jsx_runtime.jsx)(TabsContext_n.Provider, { value: u, children: (0,jsx_runtime.jsx)("div", { ...i }) });
});
l.displayName = "TabGroup";


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Tabs/components.js



const components_u = (0,styled_components_browser_esm/* default */.ZP)(Box/* Box */.x)`
  border-bottom: 2px solid
    ${({ theme: r, selected: o, hasError: d }) => o ? d ? r.colors.danger600 : r.colors.primary600 : "transparent"};
`, e = (0,styled_components_browser_esm/* default */.ZP)(Box/* Box */.x)`
  border-bottom: 1px solid ${({ theme: r, selected: o }) => o ? r.colors.neutral0 : r.colors.neutral150};
`, components_a = styled_components_browser_esm/* default */.ZP.button`
  border: none;
  background: transparent;
  padding: 0;

  & + & > ${e} {
    border-left: 1px solid ${({ theme: r }) => r.colors.neutral150};
  }

  ${e} {
    border-right: ${({ theme: r, showRightBorder: o }) => o ? `1px solid ${r.colors.neutral150}` : "none"};
  }

  // Hack preventing the outline from being overflow by the following tab
  outline-offset: -2px;

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`, $ = (0,styled_components_browser_esm/* default */.ZP)(Flex/* Flex */.k)`
  & > * {
    flex: 1;
  }

  & ${components_a}:first-of-type ${e} {
    border-radius: ${({ theme: r }) => `${r.borderRadius} 0 0 0`};
  }

  & ${components_a}:last-of-type ${e} {
    border-radius: ${({ theme: r }) => `0 ${r.borderRadius} 0 0`};
  }

  & ${components_a}[aria-selected="true"] ${e} {
    border-radius: ${({ theme: r }) => `${r.borderRadius} ${r.borderRadius} 0 0`};
    border-left: none;
    border-right: none;
  }
`;


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/keyboardKeys.js
var keyboardKeys = __webpack_require__(7801);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Tabs/Tabs.js








const N = (s, b) => {
  const i = (0,react.useRef)(null), l = (0,react.useRef)(!1), r = (0,dist/* useCallbackRef */.W)(b);
  return (0,react.useEffect)(() => {
    if (i.current) {
      if (l.current) {
        const d = i.current.querySelector('[tabindex="0"]');
        d && (d.focus(), r(s));
      }
      l.current || (l.current = !0);
    }
  }, [s, r]), i;
}, Tabs_$ = styled_components_browser_esm/* default */.ZP.button`
  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`, G = ({ children: s, ...b }) => {
  const { id: i, selectedTabIndex: l, selectTabIndex: r, label: d, variant: h, onTabChange: x } = TabsContext_s(), p = N(l, x), n = react.Children.toArray(s).map((t, u) => (0,react.cloneElement)(t, {
    id: `${i}-${u}`,
    index: u,
    selectedTabIndex: l,
    onTabClick: () => r(u),
    variant: h
  })), m = (t) => {
    if (!n.every((a) => a.props.disabled))
      switch (t.key) {
        case keyboardKeys/* KeyboardKeys */.y.RIGHT: {
          const a = l + 1, e = (o) => n[o].props.disabled ? o === n.length - 1 ? e(0) : e(o + 1) : o, f = e(a >= n.length ? 0 : a);
          r(f);
          break;
        }
        case keyboardKeys/* KeyboardKeys */.y.LEFT: {
          const a = l - 1, e = (o) => n[o].props.disabled ? e(o === 0 ? n.length - 1 : o - 1) : o, f = e(a < 0 ? n.length - 1 : a);
          r(f);
          break;
        }
        case keyboardKeys/* KeyboardKeys */.y.HOME: {
          const a = n.findIndex((e) => !e.props.disabled);
          r(a);
          break;
        }
        case keyboardKeys/* KeyboardKeys */.y.END: {
          const e = n.map((f, o) => ({ isDisabled: f.props.disabled, index: o })).reverse().find(({ isDisabled: f }) => !f);
          e && r(e.index);
          break;
        }
      }
  };
  return h === "simple" ? (
    // TODO: This needs to be reviewed how to handle correctly since it's supposed to have focus.
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    (0,jsx_runtime.jsx)("div", { ref: p, role: "tablist", "aria-label": d, onKeyDown: m, ...b, children: n })
  ) : (0,jsx_runtime.jsx)($, { ref: p, role: "tablist", alignItems: "flex-end", "aria-label": d, onKeyDown: m, ...b, children: n });
}, L = ({ disabled: s = !1, id: b, children: i, variant: l, hasError: r = !1, index: d, selectedTabIndex: h, onTabClick: x, ...p }) => {
  const n = `${b}-tab`, m = `${b}-tabpanel`, t = d === h, u = () => {
    s || x && x();
  };
  if (l === "simple") {
    let e;
    return r ? e = "danger600" : t ? e = "primary600" : e = "neutral600", (0,jsx_runtime.jsx)(Tabs_$, { id: n, role: "tab", "aria-controls": t ? m : void 0, tabIndex: t ? 0 : -1, "aria-selected": t, type: "button", onClick: u, "aria-disabled": s, ...p, children: (0,jsx_runtime.jsx)(components_u, { padding: 4, selected: t, hasError: r, children: (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "sigma", textColor: e, children: i }) }) });
  }
  r && console.warn('The "hasError" prop is only available for the "simple" variant.');
  const a = h && h - 1 === d;
  return (0,jsx_runtime.jsx)(components_a, { id: n, role: "tab", type: "button", "aria-controls": t ? m : void 0, tabIndex: t ? 0 : -1, "aria-selected": t, onClick: u, "aria-disabled": s, showRightBorder: !!a, ...p, children: (0,jsx_runtime.jsx)(e, { padding: t ? 4 : 3, background: t ? "neutral0" : "neutral100", selected: t, children: (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { fontWeight: "bold", textColor: t ? "primary700" : "neutral600", children: i }) }) });
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabPanels.js



const f = ({ children: e, ...t }) => {
  const { id: a, selectedTabIndex: r } = TabsContext_s(), d = react.Children.toArray(e).map((l, n) => (0,react.cloneElement)(l, { id: `${a}-${n}` })).filter((l, n) => n === r);
  return (0,jsx_runtime.jsx)("div", { ...t, children: d });
}, x = ({ id: e, ...t }) => {
  const a = `${e}-tab`, r = `${e}-tabpanel`;
  return (0,jsx_runtime.jsx)("div", { id: r, role: "tabpanel", tabIndex: 0, "aria-labelledby": a, ...t });
};


// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(41054);
// EXTERNAL MODULE: ./node_modules/strapi-tiptap-editor/utils/defaults.js
var defaults = __webpack_require__(90258);
var defaults_default = /*#__PURE__*/__webpack_require__.n(defaults);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/GridLayout.js

const GridLayout_a = styled_components_browser_esm/* default */.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({ theme: t }) => t.spaces[4]};
`;


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/themes/utils.js
var utils = __webpack_require__(15585);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldContext.js
var FieldContext = __webpack_require__(88262);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/ToggleCheckbox/ToggleCheckbox.js









const B = styled_components_browser_esm/* default */.ZP.label`
  position: relative;
  display: inline-block;
  z-index: 0;
  width: 100%;
`, S = (0,styled_components_browser_esm/* default */.ZP)(Box/* Box */.x)`
  cursor: ${({ disabled: e }) => e ? "not-allowed" : void 0};
  // Masks the background of each value
  overflow: hidden;
  flex-wrap: wrap;

  ${(0,utils/* inputFocusStyle */.k3)()}
`, g = (0,styled_components_browser_esm/* default */.ZP)(Flex/* Flex */.k).attrs({
  hasRadius: !0
})`
  background-color: ${({ theme: e, checked: o, disabled: n }) => o ? n ? e.colors.neutral200 : e.colors.neutral0 : "transparent"};
  border: 1px solid
    ${({ theme: e, checked: o, disabled: n }) => o && o !== null ? n ? e.colors.neutral300 : e.colors.neutral200 : n ? e.colors.neutral150 : e.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
  flex: 1 1 50%;
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({ size: e }) => `${e === "S" ? "2px" : "6px"}`};
  padding-bottom: ${({ size: e }) => `${e === "S" ? "2px" : "6px"}`};
`, F = styled_components_browser_esm/* default */.ZP.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`, I = react.forwardRef(({ size: e = "M", onLabel: o, offLabel: n, children: x, checked: r = !1, disabled: t = !1, onChange: s, ...b }, m) => {
  const { error: d, hint: y, id: p, name: w, required: C } = (0,FieldContext/* useField */.U)(), f = "neutral600";
  let $ = !r && r !== null ? "danger700" : f, v = r ? "primary600" : f;
  const k = (u) => {
    t || s && s(u);
  };
  let l;
  return d ? l = `${p}-error` : y && (l = `${p}-hint`), (0,jsx_runtime.jsxs)(B, { children: [(0,jsx_runtime.jsx)(VisuallyHidden/* VisuallyHidden */.T, { children: x }), (0,jsx_runtime.jsxs)(S, { hasRadius: !0, disabled: t, padding: 1, display: "flex", background: t ? "neutral150" : "neutral100", borderStyle: "solid", borderWidth: "1px", borderColor: "neutral200", hasError: !!d, children: [(0,jsx_runtime.jsx)(g, { size: e, paddingLeft: 3, paddingRight: 3, justifyContent: "center", alignItems: "center", "aria-hidden": !0, checked: r === null ? !1 : !r, disabled: t, children: (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold", textTransform: "uppercase", textColor: t ? "neutral700" : $, children: n }) }), (0,jsx_runtime.jsx)(g, { size: e, paddingLeft: 3, paddingRight: 3, justifyContent: "center", alignItems: "center", "aria-hidden": !0, checked: r === null ? !1 : r, disabled: t, children: (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold", textTransform: "uppercase", textColor: t ? "neutral700" : v, children: o }) }), (0,jsx_runtime.jsx)(F, { type: "checkbox", "aria-disabled": t, "aria-describedby": l, onChange: (u) => k(u), name: w, ref: m, "aria-required": C, ...b, checked: !(r === null || !r) })] })] });
});
I.displayName = "ToggleCheckbox";


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/Field.js
var Field = __webpack_require__(54574);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/dist/Loader.js
var Loader = __webpack_require__(64518);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/TextButton/TextButton.js







const TextButton_b = styled_components_browser_esm/* keyframes */.F4`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, v = styled_components_browser_esm/* default */.ZP.div`
  animation: ${TextButton_b} 2s infinite linear;
  will-change: transform;
`, T = (0,styled_components_browser_esm/* default */.ZP)(Flex/* Flex */.k)`
  border: none;

  &[aria-disabled='true'] {
    pointer-events: none;
    svg path {
      fill: ${({ theme: r }) => r.colors.neutral600};
    }
  }

  svg path {
    fill: ${({ theme: r }) => r.colors.primary600};
  }

  ${utils/* buttonFocusStyle */.BF}
`, TextButton_$ = react.forwardRef(({ children: r, startIcon: s, endIcon: l, onClick: o, disabled: e = !1, loading: a = !1, ...p }, m) => {
  const f = o && !e ? o : void 0, n = e || a;
  return (0,jsx_runtime.jsxs)(T, { ref: m, "aria-disabled": n, onClick: f, as: "button", type: "button", background: "transparent", gap: 2, ...p, children: [a ? (0,jsx_runtime.jsx)(v, { "aria-hidden": !0, children: (0,jsx_runtime.jsx)(Loader/* default */.Z, {}) }) : s, (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "pi", textColor: n ? "neutral600" : "primary600", children: r }), l] });
});
TextButton_$.displayName = "TextButton";


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.js + 1 modules
var FieldLabel = __webpack_require__(19270);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldHint.js
var FieldHint = __webpack_require__(63428);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldError.js
var FieldError = __webpack_require__(96404);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/ToggleInput/ToggleInput.js










const ToggleInput_C = (0,styled_components_browser_esm/* default */.ZP)(Field/* Field */.g)`
  max-width: 320px;
`, q = (0,styled_components_browser_esm/* default */.ZP)(TextButton_$)`
  align-self: flex-end;
  margin-left: auto;
`, w = ({ disabled: e = !1, size: s = "M", error: f, hint: c, label: o, name: a, labelAction: g, required: h = !1, id: u, onClear: i, clearLabel: t, checked: n = !1, ...x }) => {
  const l = (0,useId/* useId */.M)(u);
  return (0,jsx_runtime.jsx)(ToggleInput_C, { name: a, hint: c, error: f, id: l, required: h, children: (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 1, children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { children: [(0,jsx_runtime.jsx)(FieldLabel/* FieldLabel */.Q, { action: g, children: o }), t && i && n !== null && !e && (0,jsx_runtime.jsx)(q, { onClick: i, children: t })] }), (0,jsx_runtime.jsx)(I, { id: l, size: s, checked: n, disabled: e, ...x, children: o }), (0,jsx_runtime.jsx)(FieldHint/* FieldHint */.J, {}), (0,jsx_runtime.jsx)(FieldError/* FieldError */.c, {})] }) });
};
w.displayName = "ToggleInput";


;// CONCATENATED MODULE: ./node_modules/strapi-tiptap-editor/utils/helpers.js
const addRemoveFromList = (list, val) => {
  if (!list.includes(val)) {
    list.push(val);
  } else {
    list.splice(list.indexOf(val), 1);
  }
  return list;
};

;// CONCATENATED MODULE: ./node_modules/strapi-tiptap-editor/admin/src/pages/HomePage/Tabs/Text.js







/* harmony default export */ const Text = (({ errors, values, handleChange, isSubmitting }) => {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginBottom: "1rem" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "beta", as: "h2" }, "Heading")), /* @__PURE__ */ react.createElement(GridLayout_a, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Field/* Field */.g, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Heading 1",
      size: "S",
      name: "headings",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.headings.includes("h1"),
      onChange: (e) => handleChange({
        target: {
          name: "headings",
          value: addRemoveFromList([...values.headings], "h1")
        }
      })
    }
  ))), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Heading 2",
      size: "S",
      name: "headings",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.headings.includes("h2"),
      onChange: (e) => handleChange({
        target: {
          name: "headings",
          value: addRemoveFromList([...values.headings], "h2")
        }
      })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Heading 3",
      size: "S",
      name: "headings",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.headings.includes("h3"),
      onChange: (e) => handleChange({
        target: {
          name: "headings",
          value: addRemoveFromList([...values.headings], "h3")
        }
      })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Heading 4",
      size: "S",
      name: "headings",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.headings.includes("h4"),
      onChange: (e) => handleChange({
        target: {
          name: "headings",
          value: addRemoveFromList([...values.headings], "h4")
        }
      })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Heading 5",
      size: "S",
      name: "headings",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.headings.includes("h5"),
      onChange: (e) => handleChange({
        target: {
          name: "headings",
          value: addRemoveFromList([...values.headings], "h5")
        }
      })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Heading 6",
      size: "S",
      name: "headings",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.headings.includes("h6"),
      onChange: (e) => handleChange({
        target: {
          name: "headings",
          value: addRemoveFromList([...values.headings], "h6")
        }
      })
    }
  ))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginTop: "2rem", marginBottom: "1rem" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "beta" }, "Text styles")), /* @__PURE__ */ react.createElement(GridLayout_a, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Bold",
      name: "bold",
      size: "S",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.bold,
      onChange: (e) => handleChange({ target: { name: "bold", value: !values.bold } })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Italic",
      name: "italic",
      size: "S",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.italic,
      onChange: (e) => handleChange({ target: { name: "italic", value: !values.italic } })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Strikethrough",
      name: "strikethrough",
      size: "S",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.strikethrough,
      onChange: (e) => handleChange({ target: { name: "strikethrough", value: !values.strikethrough } })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Underline",
      name: "underline",
      size: "S",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.underline,
      onChange: (e) => handleChange({ target: { name: "underline", value: !values.underline } })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Code",
      name: "code",
      size: "S",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.code,
      onChange: (e) => handleChange({ target: { name: "code", value: !values.code } })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Blockquote",
      name: "blockquote",
      size: "S",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.blockquote,
      onChange: (e) => handleChange({ target: { name: "blockquote", value: !values.blockquote } })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Color",
      name: "color",
      size: "S",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.color,
      onChange: (e) => handleChange({ target: { name: "color", value: !values.color } })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Highlight",
      name: "highlight",
      size: "S",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.highlight,
      onChange: (e) => handleChange({ target: { name: "highlight", value: !values.highlight } })
    }
  ))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginTop: "2rem", marginBottom: "1rem" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "beta" }, "Text alignment")), /* @__PURE__ */ react.createElement(GridLayout_a, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Left",
      size: "S",
      name: "align",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.align.includes("left"),
      onChange: (e) => handleChange({
        target: {
          name: "align",
          value: addRemoveFromList([...values.align], "left")
        }
      })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Center",
      size: "S",
      name: "align",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.align.includes("center"),
      onChange: (e) => handleChange({
        target: {
          name: "align",
          value: addRemoveFromList([...values.align], "center")
        }
      })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Right",
      size: "S",
      name: "align",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.align.includes("right"),
      onChange: (e) => handleChange({
        target: {
          name: "align",
          value: addRemoveFromList([...values.align], "right")
        }
      })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null)), /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginTop: "2rem", marginBottom: "1rem" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "beta" }, "Lists")), /* @__PURE__ */ react.createElement(GridLayout_a, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Ordered list",
      size: "S",
      name: "lists",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.lists.includes("ol"),
      onChange: (e) => handleChange({
        target: {
          name: "lists",
          value: addRemoveFromList([...values.lists], "ol")
        }
      })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Unordered list",
      size: "S",
      name: "align",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.lists.includes("ul"),
      onChange: (e) => handleChange({
        target: {
          name: "lists",
          value: addRemoveFromList([...values.lists], "ul")
        }
      })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Disable shorthand for ordered list",
      hint: "Normally you can type: 1. and after the space it converts it to a ordered list. This can be annoying when typing dates.",
      size: "S",
      name: "lists",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.disableOrderedListShorthand,
      onChange: (e) => handleChange({
        target: {
          name: "disableOrderedListShorthand",
          value: !values.disableOrderedListShorthand
        }
      })
    }
  ))));
});

;// CONCATENATED MODULE: ./node_modules/strapi-tiptap-editor/admin/src/pages/HomePage/Tabs/Layout.js






/* harmony default export */ const Layout = (({ errors, values, handleChange, isSubmitting }) => {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginBottom: "1rem" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "beta" }, "Columns")), /* @__PURE__ */ react.createElement(GridLayout_a, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "2 Columns",
      size: "S",
      name: "columns",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.columns.includes("two"),
      onChange: (e) => handleChange({
        target: {
          name: "columns",
          value: addRemoveFromList([...values.columns], "two")
        }
      })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "3 Columns",
      size: "S",
      name: "columns",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.columns.includes("three"),
      onChange: (e) => handleChange({
        target: {
          name: "columns",
          value: addRemoveFromList([...values.columns], "three")
        }
      })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, null)), /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginTop: "2rem", marginBottom: "1rem" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "beta" }, "Table")), /* @__PURE__ */ react.createElement(GridLayout_a, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Enable table",
      size: "S",
      name: "table",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.table,
      onChange: (e) => handleChange({
        target: {
          name: "table",
          value: !values.table
        }
      })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, null)), /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginTop: "2rem", marginBottom: "1rem" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "beta" }, "Horizontal Rule")), /* @__PURE__ */ react.createElement(GridLayout_a, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Enable horizontal rule",
      size: "S",
      name: "horizontal",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.horizontal,
      onChange: (e) => handleChange({
        target: {
          name: "horizontal",
          value: !values.horizontal
        }
      })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, null)), /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginTop: "2rem", marginBottom: "1rem" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "beta" }, "Hardbreak")), /* @__PURE__ */ react.createElement(GridLayout_a, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Enable hardbreaks",
      size: "S",
      name: "hardbreak",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.hardbreak,
      onChange: (e) => handleChange({
        target: {
          name: "hardbreak",
          value: !values.hardbreak
        }
      })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, null)));
});

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
;// CONCATENATED MODULE: ./node_modules/strapi-tiptap-editor/admin/src/pages/HomePage/Tabs/Embeds.js







/* harmony default export */ const Embeds = (({ errors, values, handleChange, isSubmitting }) => {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginBottom: "1rem" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "beta" }, "Image")), /* @__PURE__ */ react.createElement(GridLayout_a, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Images",
      hint: "Allow to add images to content",
      size: "S",
      name: "image.enabled",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.image.enabled,
      onChange: (e) => handleChange({
        target: {
          name: "image.enabled",
          value: !values.image.enabled
        }
      })
    }
  ))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginTop: "1rem", marginBottom: "1rem" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta" }, "Settings")), /* @__PURE__ */ react.createElement(GridLayout_a, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Inline",
      hint: "Renders the image node inline",
      disabled: !values.image.enabled,
      size: "S",
      name: "image.inline",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.image.inline,
      onChange: (e) => handleChange({
        target: {
          name: "image.inline",
          value: !values.image.inline
        }
      })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Allow base64 images",
      hint: "Allow images to be parsed as base64 strings",
      disabled: !values.image.enabled,
      size: "S",
      name: "image.allowBase64",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.image.allowBase64,
      onChange: (e) => handleChange({
        target: {
          name: "image.allowBase64",
          value: !values.image.allowBase64
        }
      })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, null)), /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginTop: "2rem", marginBottom: "1rem" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "beta" }, "Links")), /* @__PURE__ */ react.createElement(GridLayout_a, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Enabled",
      hint: "Allow to make text into links",
      size: "S",
      name: "links.enabled",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.links.enabled,
      onChange: (e) => handleChange({
        target: {
          name: "links.enabled",
          value: !values.links.enabled
        }
      })
    }
  ))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginTop: "1rem", marginBottom: "1rem" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta" }, "Settings")), /* @__PURE__ */ react.createElement(GridLayout_a, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Auto link",
      hint: "If enabled, it adds links as you type.",
      disabled: !values.links.enabled,
      size: "S",
      name: "links.autolink",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.links.autolink,
      onChange: (e) => handleChange({
        target: {
          name: "links.autolink",
          value: !values.links.autolink
        }
      })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Open on click",
      hint: "Open the link, when clicking it inside the editor",
      disabled: !values.links.enabled,
      size: "S",
      name: "links.openOnClick",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.links.openOnClick,
      onChange: (e) => handleChange({
        target: {
          name: "links.autolink",
          value: !values.links.openOnClick
        }
      })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Link on paste",
      hint: "Adds a link to the current selection if the pasted content only contains an url.",
      disabled: !values.links.enabled,
      size: "S",
      name: "links.linkOnPaste",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.links.linkOnPaste,
      onChange: (e) => handleChange({
        target: {
          name: "links.linkOnPaste",
          value: !values.links.linkOnPaste
        }
      })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null)), /* @__PURE__ */ react.createElement(GridLayout_a, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      label: "Rel attribute value",
      type: "text",
      placeholder: "Value of the rel attribute of links",
      name: "rel",
      onChange: (e) => handleChange({
        target: {
          name: "links.HTMLAttributes.rel",
          value: e.target.value
        }
      }),
      value: values.links.HTMLAttributes.rel,
      "aria-label": "Value of the rel attribute of links"
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, null)), /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginTop: "2rem", marginBottom: "1rem" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "beta" }, "YouTube")), /* @__PURE__ */ react.createElement(GridLayout_a, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Enabled",
      hint: "Allow to add YouTube video embeds",
      size: "S",
      name: "youtube.enabled",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.youtube.enabled,
      onChange: (e) => handleChange({
        target: {
          name: "youtube.enabled",
          value: !values.youtube.enabled
        }
      })
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      label: "Default video width",
      type: "number",
      placeholder: "width of the embed",
      name: "width",
      onChange: (e) => handleChange({
        target: {
          name: "youtube.width",
          value: e.target.value
        }
      }),
      value: values.youtube.width,
      "aria-label": "YouTube video width"
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      label: "Default video height",
      type: "number",
      placeholder: "height of the embed",
      name: "height",
      onChange: (e) => handleChange({
        target: {
          name: "youtube.height",
          value: e.target.value
        }
      }),
      value: values.youtube.height,
      "aria-label": "YouTube video height"
    }
  ))));
});

;// CONCATENATED MODULE: ./node_modules/strapi-tiptap-editor/admin/src/pages/HomePage/Tabs/Other.js





/* harmony default export */ const Other = (({ values, handleChange }) => {
  const wordcount = values.other && values.other.wordcount;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginBottom: "1rem" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "beta" }, "Other")), /* @__PURE__ */ react.createElement(GridLayout_a, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Word count",
      hint: "Show a word counter under the editor",
      size: "S",
      name: "other.wordcount",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: wordcount,
      onChange: (e) => handleChange({
        target: {
          name: "other.wordcount",
          value: !wordcount
        }
      })
    }
  ))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { marginTop: "2rem", marginBottom: "1rem" }), /* @__PURE__ */ react.createElement(GridLayout_a, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    w,
    {
      label: "Save content as JSON",
      hint: "Save editor content as JSON instead of raw HTML. NOTE: You will have to save pages again, as changing this setting will NOT auto update you currently saved content",
      size: "S",
      name: "other.saveJson",
      onLabel: "Enabled",
      offLabel: "Disabled",
      checked: values.other.saveJson,
      onChange: (e) => handleChange({
        target: {
          name: "other.saveJson",
          value: !values.other.saveJson
        }
      })
    }
  ))));
});

// EXTERNAL MODULE: ./node_modules/strapi-tiptap-editor/admin/src/utils/merge.js
var merge = __webpack_require__(22400);
;// CONCATENATED MODULE: ./node_modules/strapi-tiptap-editor/admin/src/pages/HomePage/index.js

















const HomePage = (ctx) => {
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.lm)();
  const { lockApp, unlockApp } = (0,helper_plugin_esm/* useOverlayBlocker */.o1)();
  const queryClient = (0,es.useQueryClient)();
  const query = (0,es.useQuery)("settings", api/* getSettings */.G);
  const mutation = (0,es.useMutation)((settings) => (0,api/* updateSettings */.V)(settings), {
    onSuccess: async () => {
      await queryClient.invalidateQueries("settings");
      toggleNotification({
        type: "success",
        message: { id: "strapi-tiptap-editor-save-success", defaultMessage: "Saved" }
      });
      unlockApp();
    },
    onError: async () => {
      toggleNotification({
        type: "warning",
        message: { id: "strapi-tiptap-editor-save-error", defaultMessage: "Saved failed" }
      });
      unlockApp();
    }
  });
  if (query.isLoading) {
    return /* @__PURE__ */ react.createElement(m, { "aria-busy": "true" }, /* @__PURE__ */ react.createElement(
      HeaderLayout_b,
      {
        title: "Strapi TipTap Editor settings",
        subtitle: "Change how the editor should behave"
      }
    ), /* @__PURE__ */ react.createElement(d, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.dO, null)));
  }
  const mergedSettings = (0,merge/* mergeDeep */.E)((defaults_default()), query.data);
  return /* @__PURE__ */ react.createElement(m, { "aria-busy": query.isLoading }, /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.J9,
    {
      initialValues: mergedSettings,
      onSubmit: async (values) => {
        lockApp();
        await mutation.mutateAsync(values);
      }
    },
    ({ errors, values, handleChange, isSubmitting }) => {
      return /* @__PURE__ */ react.createElement(helper_plugin_esm/* Form */.l0, null, /* @__PURE__ */ react.createElement(
        HeaderLayout_b,
        {
          title: "Strapi TipTap Editor settings",
          subtitle: "Change how the editor should behave",
          primaryAction: /* @__PURE__ */ react.createElement(
            Button/* Button */.z,
            {
              isLoading: mutation.isLoading,
              type: "submit",
              startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
              size: "L"
            },
            "Save"
          )
        }
      ), /* @__PURE__ */ react.createElement(d, null, /* @__PURE__ */ react.createElement(
        Box/* Box */.x,
        {
          background: "neutral0",
          hasRadius: true,
          shadow: "filterShadow",
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 7,
          paddingRight: 7
        },
        /* @__PURE__ */ react.createElement(l, { label: "Some stuff for the label", id: "tabs", variant: "simple" }, /* @__PURE__ */ react.createElement(G, null, /* @__PURE__ */ react.createElement(L, null, "Text"), /* @__PURE__ */ react.createElement(L, null, "Layout"), /* @__PURE__ */ react.createElement(L, null, "Embeds"), /* @__PURE__ */ react.createElement(L, null, "Other")), /* @__PURE__ */ react.createElement(f, null, /* @__PURE__ */ react.createElement(x, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { color: "neutral800", padding: 4, background: "neutral0" }, /* @__PURE__ */ react.createElement(
          Text,
          {
            errors,
            values,
            handleChange,
            isSubmitting
          }
        ))), /* @__PURE__ */ react.createElement(x, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { color: "neutral800", padding: 4, background: "neutral0" }, /* @__PURE__ */ react.createElement(
          Layout,
          {
            errors,
            values,
            handleChange,
            isSubmitting
          }
        ))), /* @__PURE__ */ react.createElement(x, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { color: "neutral800", padding: 4, background: "neutral0" }, /* @__PURE__ */ react.createElement(
          Embeds,
          {
            errors,
            values,
            handleChange,
            isSubmitting
          }
        ))), /* @__PURE__ */ react.createElement(x, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { color: "neutral800", padding: 4, background: "neutral0" }, /* @__PURE__ */ react.createElement(
          Other,
          {
            errors,
            values,
            handleChange,
            isSubmitting
          }
        )))))
      )));
    }
  ));
};
/* harmony default export */ const pages_HomePage = ((0,react.memo)(HomePage));

;// CONCATENATED MODULE: ./node_modules/strapi-tiptap-editor/admin/src/pages/App/index.js





const App = () => {
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(react_router/* Switch */.rs, null, /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: `/settings/${(pluginId_default())}`, component: pages_HomePage, exact: true }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { component: helper_plugin_esm.NotFound })));
};
/* harmony default export */ const pages_App = (App);


/***/ })

}]);