"use strict";
(self["webpackChunklab_nckh"] = self["webpackChunklab_nckh"] || []).push([[3981],{

/***/ 28048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_HomePage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(64593);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 65 modules
var helper_plugin_esm = __webpack_require__(97285);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/assets/corner-ornament.svg
const corner_ornament_namespaceObject = __webpack_require__.p + "7e9af4fb7e723fcebf1f.svg";
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 31 modules
var hooks = __webpack_require__(48474);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/utils/isGuidedTourCompleted.js
const isGuidedTourCompleted = (guidedTourState) => Object.entries(guidedTourState).every(
  ([, section]) => Object.entries(section).every(([, step]) => step)
);
/* harmony default export */ const utils_isGuidedTourCompleted = (isGuidedTourCompleted);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/dist/Box/Box.js
var Box_Box = __webpack_require__(50781);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var components_useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex_Flex = __webpack_require__(75878);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography_Typography = __webpack_require__(78549);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/Stepper/StepNumber.js
var StepNumber = __webpack_require__(96392);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/Stepper/StepLine.js
var StepLine = __webpack_require__(89285);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/constants.js
var constants = __webpack_require__(99872);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Homepage/components/Step.js








const StepHomepage = ({ type, title, number, content, hasLine }) => {
  const { formatMessage } = (0,components_useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Box_Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Flex_Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Box_Box/* Box */.x, { minWidth: (0,helper_plugin_esm/* pxToRem */.Q1)(30), marginRight: 5 }, /* @__PURE__ */ react.createElement(StepNumber/* default */.Z, { type, number })), /* @__PURE__ */ react.createElement(Typography_Typography/* Typography */.Z, { variant: "delta", as: "h3" }, formatMessage(title))), /* @__PURE__ */ react.createElement(Flex_Flex/* Flex */.k, { alignItems: "flex-start" }, /* @__PURE__ */ react.createElement(
    Flex_Flex/* Flex */.k,
    {
      justifyContent: "center",
      minWidth: (0,helper_plugin_esm/* pxToRem */.Q1)(30),
      marginBottom: 3,
      marginTop: 3,
      marginRight: 5
    },
    hasLine && /* @__PURE__ */ react.createElement(StepLine/* default */.Z, { type, minHeight: type === constants/* IS_ACTIVE */.lW ? (0,helper_plugin_esm/* pxToRem */.Q1)(85) : (0,helper_plugin_esm/* pxToRem */.Q1)(65) })
  ), /* @__PURE__ */ react.createElement(Box_Box/* Box */.x, { marginTop: 2 }, type === constants/* IS_ACTIVE */.lW && content)));
};
StepHomepage.defaultProps = {
  content: void 0,
  number: void 0,
  type: constants/* IS_NOT_DONE */.VM,
  hasLine: true
};
StepHomepage.propTypes = {
  content: (prop_types_default()).node,
  number: (prop_types_default()).number,
  title: prop_types_default().shape({
    id: (prop_types_default()).string,
    defaultMessage: (prop_types_default()).string
  }).isRequired,
  type: prop_types_default().oneOf([constants/* IS_ACTIVE */.lW, constants/* IS_DONE */.hx, constants/* IS_NOT_DONE */.VM]),
  hasLine: (prop_types_default()).bool
};
/* harmony default export */ const Step = (StepHomepage);

;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Homepage/components/Stepper.js





const getType = (activeSectionIndex, index) => {
  if (activeSectionIndex === -1) {
    return constants/* IS_DONE */.hx;
  }
  if (index < activeSectionIndex) {
    return constants/* IS_DONE */.hx;
  }
  if (index > activeSectionIndex) {
    return constants/* IS_NOT_DONE */.VM;
  }
  return constants/* IS_ACTIVE */.lW;
};
const Stepper_StepperHomepage = ({ sections, currentSectionKey }) => {
  const activeSectionIndex = sections.findIndex((section) => section.key === currentSectionKey);
  return /* @__PURE__ */ react.createElement(Box_Box/* Box */.x, null, sections.map((section, index) => /* @__PURE__ */ react.createElement(
    Step,
    {
      key: section.key,
      title: section.title,
      content: section.content,
      number: index + 1,
      type: getType(activeSectionIndex, index),
      hasLine: index !== sections.length - 1
    }
  )));
};
Stepper_StepperHomepage.defaultProps = {
  currentSectionKey: void 0
};
Stepper_StepperHomepage.propTypes = {
  sections: prop_types_default().arrayOf(
    prop_types_default().shape({
      key: (prop_types_default()).string.isRequired,
      title: prop_types_default().shape({
        id: (prop_types_default()).string,
        defaultMessage: (prop_types_default()).string
      }).isRequired,
      content: (prop_types_default()).node
    })
  ).isRequired,
  currentSectionKey: (prop_types_default()).string
};
/* harmony default export */ const Stepper = ((/* unused pure expression or super */ null && (Stepper_StepperHomepage)));

// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/layout.js
var GuidedTour_layout = __webpack_require__(64729);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Homepage/index.js







const GuidedTourHomepage = () => {
  const { guidedTourState, setSkipped } = useGuidedTour();
  const { formatMessage } = useIntl();
  const { trackUsage } = useTracking();
  const sections = Object.entries(layout).map(([key, val]) => ({
    key,
    title: val.home.title,
    content: /* @__PURE__ */ React.createElement(
      LinkButton,
      {
        onClick: () => trackUsage(val.home.trackingEvent),
        to: val.home.cta.target,
        endIcon: /* @__PURE__ */ React.createElement(ArrowRight, null)
      },
      formatMessage(val.home.cta.title)
    )
  }));
  const enrichedSections = sections.map((section) => ({
    isDone: Object.entries(guidedTourState[section.key]).every(([, value]) => value),
    ...section
  }));
  const activeSection = enrichedSections.find((section) => !section.isDone)?.key;
  const handleSkip = () => {
    setSkipped(true);
    trackUsage("didSkipGuidedtour");
  };
  return /* @__PURE__ */ React.createElement(
    Box,
    {
      hasRadius: true,
      shadow: "tableShadow",
      paddingTop: 7,
      paddingRight: 4,
      paddingLeft: 7,
      paddingBottom: 4,
      background: "neutral0"
    },
    /* @__PURE__ */ React.createElement(Flex, { direction: "column", alignItems: "stretch", gap: 6 }, /* @__PURE__ */ React.createElement(Typography, { variant: "beta", as: "h2" }, formatMessage({
      id: "app.components.GuidedTour.title",
      defaultMessage: "3 steps to get started"
    })), /* @__PURE__ */ React.createElement(StepperHomepage, { sections, currentSectionKey: activeSection })),
    /* @__PURE__ */ React.createElement(Flex, { justifyContent: "flex-end" }, /* @__PURE__ */ React.createElement(Button, { variant: "tertiary", onClick: handleSkip }, formatMessage({ id: "app.components.GuidedTour.skip", defaultMessage: "Skip the tour" })))
  );
};
/* harmony default export */ const Homepage = ((/* unused pure expression or super */ null && (GuidedTourHomepage)));

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(1565);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(9370);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/LinkButton/LinkButton.js
var LinkButton_LinkButton = __webpack_require__(80994);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/dist/Discord.js

const l = (c) => /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...c, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
  "path",
  {
    fill: "#7289DA",
    d: "M20.04 0H3.96A2.464 2.464 0 0 0 1.5 2.468v16.2a2.464 2.464 0 0 0 2.46 2.469h13.608l-.636-2.217 1.536 1.426 1.452 1.342 2.58 2.277V2.468A2.464 2.464 0 0 0 20.04 0Zm-4.632 15.65s-.432-.516-.792-.972c1.572-.443 2.172-1.425 2.172-1.425-.492.323-.96.55-1.38.707-.6.251-1.176.419-1.74.515a8.417 8.417 0 0 1-3.108-.012 10.086 10.086 0 0 1-1.764-.515 7.053 7.053 0 0 1-.876-.408c-.036-.024-.072-.036-.108-.06a.166.166 0 0 1-.048-.036 4.202 4.202 0 0 1-.336-.203s.576.958 2.1 1.414c-.36.455-.804.994-.804.994-2.652-.084-3.66-1.821-3.66-1.821 0-3.859 1.728-6.986 1.728-6.986 1.728-1.294 3.372-1.258 3.372-1.258l.12.144c-2.16.623-3.156 1.57-3.156 1.57s.264-.144.708-.348c1.284-.563 2.304-.72 2.724-.755.072-.012.132-.024.204-.024A9.792 9.792 0 0 1 16.8 7.297s-.948-.898-2.988-1.521l.168-.192s1.644-.036 3.372 1.258c0 0 1.728 3.127 1.728 6.986 0 0-1.02 1.737-3.672 1.821Zm-5.58-5.597c-.684 0-1.224.6-1.224 1.33 0 .731.552 1.33 1.224 1.33.684 0 1.224-.599 1.224-1.33.012-.73-.54-1.33-1.224-1.33Zm4.38 0c-.684 0-1.224.6-1.224 1.33 0 .731.552 1.33 1.224 1.33.684 0 1.224-.599 1.224-1.33 0-.73-.54-1.33-1.224-1.33Z"
  }
) }), t = l;


;// CONCATENATED MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/dist/Reddit.js

const a = (l) => /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...l, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
  "path",
  {
    fill: "#FF4500",
    fillRule: "evenodd",
    d: "M23.634 12.018c0 6.583-5.263 11.92-11.754 11.92C5.388 23.938.125 18.6.125 12.018S5.388.098 11.88.098c6.491 0 11.754 5.337 11.754 11.92ZM17.94 10.34a1.73 1.73 0 0 1 1.779 1.677c.012.67-.36 1.286-.95 1.585.012.175.012.35 0 .524 0 2.673-3.067 4.842-6.851 4.842s-6.852-2.172-6.852-4.842a3.925 3.925 0 0 1 0-.524 1.662 1.662 0 0 1-.461-.314 1.756 1.756 0 0 1-.076-2.46 1.697 1.697 0 0 1 2.425-.076 8.339 8.339 0 0 1 4.584-1.467l.868-4.136v-.006a.364.364 0 0 1 .435-.282l2.881.584c.184-.326.517-.545.888-.584a1.18 1.18 0 0 1 1.295 1.058 1.188 1.188 0 0 1-1.044 1.313 1.18 1.18 0 0 1-1.294-1.058l-2.515-.536-.763 3.718a8.277 8.277 0 0 1 4.526 1.467 1.71 1.71 0 0 1 1.125-.483Zm-8.798 1.677c-.648 0-1.177.536-1.177 1.194a1.19 1.19 0 0 0 1.177 1.194c.649 0 1.178-.536 1.178-1.194 0-.658-.53-1.194-1.178-1.194Zm2.747 5.39a4.47 4.47 0 0 0 2.904-.919v.047a.339.339 0 0 0 .006-.47.327.327 0 0 0-.465-.007 3.83 3.83 0 0 1-2.457.726 3.802 3.802 0 0 1-2.446-.75.314.314 0 0 0-.403 0 .327.327 0 0 0-.044.454 4.47 4.47 0 0 0 2.905.918Zm1.516-4.155c0 .658.529 1.194 1.178 1.194l-.01.045h.06a1.186 1.186 0 0 0 1.127-1.239c0-.657-.529-1.194-1.178-1.194-.648 0-1.177.537-1.177 1.194Z",
    clipRule: "evenodd"
  }
) }), d = a;


;// CONCATENATED MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/dist/Strapi.js

const e = (h) => /* @__PURE__ */ (0,jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 80 80", ...h, children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      fill: "#4945FF",
      d: "M0 27.7c0-13 0-19.6 4-23.6C8.2 0 14.8 0 27.8 0h24.6C65.4 0 72 0 76 4c4 4.2 4 10.8 4 23.8v24.6c0 13 0 19.6-4 23.6-4.2 4-10.8 4-23.8 4H27.7c-13 0-19.6 0-23.6-4C0 71.8 0 65.2 0 52.2V27.7Z"
    }
  ),
  /* @__PURE__ */ (0,jsx_runtime.jsx)("path", { fill: "#fff", fillRule: "evenodd", d: "M55.2 24.3h-27V38H42v13.7h13.7V24.8c0-.3-.2-.5-.5-.5Z", clipRule: "evenodd" }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)("path", { fill: "#fff", d: "M41.5 38h.5v.5h-.5z" }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      fill: "#9593FF",
      d: "M28.3 38h13.2c.3 0 .5.2.5.5v13.2H28.8a.5.5 0 0 1-.5-.5V38ZM42 51.7h13.7L42.5 65c-.2.2-.5 0-.5-.2v-13ZM28.3 38H15.2a.3.3 0 0 1-.2-.5l13.3-13.2V38Z"
    }
  )
] }), i = e;


;// CONCATENATED MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/dist/Twitter.js

const Twitter_i = (e) => /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
  "path",
  {
    fill: "#1DA1F2",
    d: "M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 3.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 4.557Z"
  }
) }), o = Twitter_i;


;// CONCATENATED MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/dist/Discourse.js

const Discourse_i = (a) => /* @__PURE__ */ (0,jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...a, children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      fill: "#231F20",
      d: "M12.103 0C5.533 0 0 5.278 0 11.79V24l12.1-.012c6.57 0 11.9-5.481 11.9-11.992C24 5.486 18.666 0 12.103 0Z"
    }
  ),
  /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      fill: "#FFF9AE",
      d: "M12.22 4.564a7.43 7.43 0 0 0-3.644.956 7.346 7.346 0 0 0-2.692 2.614 7.26 7.26 0 0 0-.149 7.22L4.4 19.606l4.793-1.072a7.433 7.433 0 0 0 6.355-.14 7.36 7.36 0 0 0 2.513-2.057 7.28 7.28 0 0 0 1.372-2.93 7.243 7.243 0 0 0-.035-3.228A7.281 7.281 0 0 0 17.96 7.28a7.365 7.365 0 0 0-2.557-2.002 7.432 7.432 0 0 0-3.178-.715h-.007Z"
    }
  ),
  /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      fill: "#00AEEF",
      d: "M18.071 7.426a7.262 7.262 0 0 1 1.51 4.499 7.264 7.264 0 0 1-1.595 4.47 7.38 7.38 0 0 1-4.028 2.558 7.437 7.437 0 0 1-4.765-.43L4.4 19.61l4.88-.571a7.432 7.432 0 0 0 5.181.858 7.381 7.381 0 0 0 4.443-2.778 7.258 7.258 0 0 0-.833-9.693Z"
    }
  ),
  /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      fill: "#00A94F",
      d: "M16.713 6.078a7.253 7.253 0 0 1 .86 8.928 7.361 7.361 0 0 1-3.736 2.962 7.437 7.437 0 0 1-4.784.065L4.4 19.61l4.793-1.075a7.436 7.436 0 0 0 5.24.313 7.362 7.362 0 0 0 4.123-3.22 7.249 7.249 0 0 0 .914-5.123 7.296 7.296 0 0 0-2.757-4.427Z"
    }
  ),
  /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      fill: "#F15D22",
      d: "M6.176 15.515a7.246 7.246 0 0 1-.26-4.876 7.312 7.312 0 0 1 2.9-3.95 7.427 7.427 0 0 1 9.26.735 7.387 7.387 0 0 0-4.603-2.771 7.431 7.431 0 0 0-5.277 1.068A7.311 7.311 0 0 0 5.06 10.06a7.249 7.249 0 0 0 .676 5.294L4.4 19.607l1.776-4.092Z"
    }
  ),
  /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      fill: "#E31B23",
      d: "M5.735 15.353a7.25 7.25 0 0 1-.764-4.818 7.294 7.294 0 0 1 2.465-4.222 7.415 7.415 0 0 1 4.596-1.744 7.42 7.42 0 0 1 4.681 1.509 7.404 7.404 0 0 0-4.865-2.26 7.421 7.421 0 0 0-5.12 1.61 7.293 7.293 0 0 0-2.66 4.626A7.256 7.256 0 0 0 5.28 15.24l-.877 4.37 1.332-4.257Z"
    }
  )
] }), h = Discourse_i;


// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/dist/Github.js
var Github = __webpack_require__(86820);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/SocialLinks.js







const StyledDiscord = (0,styled_components_browser_esm/* default */.ZP)(t)`
  path {
    fill: #7289da !important;
  }
`;
const StyledReddit = (0,styled_components_browser_esm/* default */.ZP)(d)`
  > path:first-child {
    fill: #ff4500;
  }
`;
const StyledStrapi = (0,styled_components_browser_esm/* default */.ZP)(i)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`;
const StyledTwitter = (0,styled_components_browser_esm/* default */.ZP)(o)`
  path {
    fill: #1da1f2 !important;
  }
`;
const StyledDiscourse = (0,styled_components_browser_esm/* default */.ZP)(h)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`;
const socialLinks = [
  {
    name: { id: "app.components.HomePage.community.links.github", defaultMessage: "Github" },
    link: "https://github.com/strapi/strapi/",
    icon: /* @__PURE__ */ react.createElement(Github/* default */.Z, { fill: "#7289DA" }),
    alt: "github"
  },
  {
    name: { id: "app.components.HomePage.community.links.discord", defaultMessage: "Discord" },
    link: "https://discord.strapi.io/",
    icon: /* @__PURE__ */ react.createElement(StyledDiscord, null),
    alt: "discord"
  },
  {
    name: { id: "app.components.HomePage.community.links.reddit", defaultMessage: "Reddit" },
    link: "https://www.reddit.com/r/Strapi/",
    icon: /* @__PURE__ */ react.createElement(StyledReddit, null),
    alt: "reddit"
  },
  {
    name: { id: "app.components.HomePage.community.links.twitter", defaultMessage: "Twitter" },
    link: "https://twitter.com/strapijs",
    icon: /* @__PURE__ */ react.createElement(StyledTwitter, null),
    alt: "twitter"
  },
  {
    name: { id: "app.components.HomePage.community.links.forum", defaultMessage: "Forum" },
    link: "https://forum.strapi.io",
    icon: /* @__PURE__ */ react.createElement(StyledDiscourse, null),
    alt: "forum"
  },
  {
    name: { id: "app.components.HomePage.community.links.blog", defaultMessage: "Blog" },
    link: "https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",
    icon: /* @__PURE__ */ react.createElement(StyledStrapi, null),
    alt: "blog"
  },
  {
    name: {
      id: "app.components.HomePage.community.links.career",
      defaultMessage: "We are hiring!"
    },
    link: "https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",
    icon: /* @__PURE__ */ react.createElement(StyledStrapi, null),
    alt: "career"
  }
];
const LinkCustom = (0,styled_components_browser_esm/* default */.ZP)(LinkButton_LinkButton/* LinkButton */.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({ theme }) => theme.spaces[6]};
    height: ${({ theme }) => theme.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`;
const GridGap = (0,styled_components_browser_esm/* default */.ZP)(Grid/* Grid */.r)`
  row-gap: ${({ theme }) => theme.spaces[2]};
  column-gap: ${({ theme }) => theme.spaces[4]};
`;
const SocialLinks = () => {
  const { formatMessage } = useIntl();
  const { communityEdition } = useAppInfo();
  const socialLinksExtended = [
    ...socialLinks,
    {
      icon: /* @__PURE__ */ React.createElement(StyledStrapi, null),
      link: communityEdition ? "https://discord.strapi.io" : "https://support.strapi.io/support/home",
      name: {
        id: "Settings.application.get-help",
        defaultMessage: "Get help"
      }
    }
  ];
  return /* @__PURE__ */ React.createElement(
    Box,
    {
      as: "aside",
      "aria-labelledby": "join-the-community",
      background: "neutral0",
      hasRadius: true,
      paddingRight: 5,
      paddingLeft: 5,
      paddingTop: 6,
      paddingBottom: 6,
      shadow: "tableShadow"
    },
    /* @__PURE__ */ React.createElement(Box, { paddingBottom: 7 }, /* @__PURE__ */ React.createElement(Flex, { direction: "column", alignItems: "stretch", gap: 5 }, /* @__PURE__ */ React.createElement(Flex, { direction: "column", alignItems: "stretch", gap: 3 }, /* @__PURE__ */ React.createElement(Typography, { variant: "delta", as: "h2", id: "join-the-community" }, formatMessage({
      id: "app.components.HomePage.community",
      defaultMessage: "Join the community"
    })), /* @__PURE__ */ React.createElement(Typography, { textColor: "neutral600" }, formatMessage({
      id: "app.components.HomePage.community.content",
      defaultMessage: "Discuss with team members, contributors and developers on different channels"
    }))), /* @__PURE__ */ React.createElement(Link, { href: "https://feedback.strapi.io/", isExternal: true, endIcon: /* @__PURE__ */ React.createElement(ExternalLink, null) }, formatMessage({
      id: "app.components.HomePage.roadmap",
      defaultMessage: "See our road map"
    })))),
    /* @__PURE__ */ React.createElement(GridGap, null, socialLinksExtended.map(({ icon, link, name }) => {
      return /* @__PURE__ */ React.createElement(GridItem, { col: 6, s: 12, key: name.id }, /* @__PURE__ */ React.createElement(LinkCustom, { size: "L", startIcon: icon, variant: "tertiary", href: link, isExternal: true }, formatMessage(name)));
    }))
  );
};
/* harmony default export */ const HomePage_SocialLinks = ((/* unused pure expression or super */ null && (SocialLinks)));

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/dist/Button/Button.js
var Button_Button = __webpack_require__(19442);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Link/Link.js
var Link_Link = __webpack_require__(36182);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/dist/ArrowRight.js
var dist_ArrowRight = __webpack_require__(69858);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/HomeHeader.js







const WordWrap = (0,styled_components_browser_esm/* default */.ZP)(Typography_Typography/* Typography */.Z)`
  word-break: break-word;
`;
const HomeHeader = ({ hasCreatedContentType, onCreateCT }) => {
  const { formatMessage } = (0,components_useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(Box_Box/* Box */.x, { paddingLeft: 6, paddingBottom: 10 }, /* @__PURE__ */ react.createElement(Flex_Flex/* Flex */.k, { direction: "column", alignItems: "flex-start", gap: 5 }, /* @__PURE__ */ react.createElement(Typography_Typography/* Typography */.Z, { as: "h1", variant: "alpha" }, hasCreatedContentType ? formatMessage({
    id: "app.components.HomePage.welcome.again",
    defaultMessage: "Welcome \u{1F44B}"
  }) : formatMessage({
    id: "app.components.HomePage.welcome",
    defaultMessage: "Welcome on board!"
  })), /* @__PURE__ */ react.createElement(WordWrap, { textColor: "neutral600", variant: "epsilon" }, hasCreatedContentType ? formatMessage({
    id: "app.components.HomePage.welcomeBlock.content.again",
    defaultMessage: "We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."
  }) : formatMessage({
    id: "app.components.HomePage.welcomeBlock.content",
    defaultMessage: "Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"
  })), hasCreatedContentType ? /* @__PURE__ */ react.createElement(Link_Link/* Link */.r, { isExternal: true, href: "https://strapi.io/blog" }, formatMessage({
    id: "app.components.HomePage.button.blog",
    defaultMessage: "See more on the blog"
  })) : /* @__PURE__ */ react.createElement(Button_Button/* Button */.z, { size: "L", onClick: onCreateCT, endIcon: /* @__PURE__ */ react.createElement(dist_ArrowRight/* default */.Z, null) }, formatMessage({
    id: "app.components.HomePage.create",
    defaultMessage: "Create your first Content type"
  })))));
};
HomeHeader.defaultProps = {
  hasCreatedContentType: void 0,
  onCreateCT: void 0
};
HomeHeader.propTypes = {
  hasCreatedContentType: (prop_types_default()).bool,
  onCreateCT: (prop_types_default()).func
};
/* harmony default export */ const HomePage_HomeHeader = ((/* unused pure expression or super */ null && (HomeHeader)));

;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/assets/strapi-cloud-background.png
const strapi_cloud_background_namespaceObject = __webpack_require__.p + "27d16aefee06412db90a.png";
;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/assets/strapi-cloud-icon.svg
const strapi_cloud_icon_namespaceObject = __webpack_require__.p + "bb3108f7fd1e6179bde1.svg";
;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/assets/strapi-cloud-flags.svg
const strapi_cloud_flags_namespaceObject = __webpack_require__.p + "bb4d0d527bdfb161bc5a.svg";
;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/CloudBox.js








const BlockLink = styled_components_browser_esm/* default */.ZP.a`
  text-decoration: none;
`;
const CloudCustomWrapper = (0,styled_components_browser_esm/* default */.ZP)(Box_Box/* Box */.x)`
  background-image: url(${({ backgroundImage }) => backgroundImage});
`;
const CloudIconWrapper = (0,styled_components_browser_esm/* default */.ZP)(Flex_Flex/* Flex */.k)`
  background: rgba(255, 255, 255, 0.3);
`;
const CloudBox_CloudBox = () => {
  const { formatMessage } = useIntl();
  const { trackUsage } = useTracking();
  return /* @__PURE__ */ React.createElement(
    BlockLink,
    {
      href: "https://cloud.strapi.io",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      onClick: () => {
        trackUsage("didClickOnTryStrapiCloudSection");
      }
    },
    /* @__PURE__ */ React.createElement(
      Flex,
      {
        shadow: "tableShadow",
        hasRadius: true,
        padding: 6,
        background: "neutral0",
        position: "relative",
        gap: 6
      },
      /* @__PURE__ */ React.createElement(CloudCustomWrapper, { backgroundImage: cloudIconBackgroundImage, hasRadius: true, padding: 3 }, /* @__PURE__ */ React.createElement(
        CloudIconWrapper,
        {
          width: pxToRem(32),
          height: pxToRem(32),
          justifyContent: "center",
          hasRadius: true,
          alignItems: "center"
        },
        /* @__PURE__ */ React.createElement(
          "img",
          {
            src: cloudIcon,
            alt: formatMessage({
              id: "app.components.BlockLink.cloud",
              defaultMessage: "Strapi Cloud"
            })
          }
        )
      )),
      /* @__PURE__ */ React.createElement(Flex, { gap: 1, direction: "column", alignItems: "start" }, /* @__PURE__ */ React.createElement(Flex, null, /* @__PURE__ */ React.createElement(Typography, { fontWeight: "semiBold", variant: "pi" }, formatMessage({
        id: "app.components.BlockLink.cloud",
        defaultMessage: "Strapi Cloud"
      }))), /* @__PURE__ */ React.createElement(Typography, { textColor: "neutral600" }, formatMessage({
        id: "app.components.BlockLink.cloud.content",
        defaultMessage: "A fully composable, and collaborative platform to boost your team velocity."
      })), /* @__PURE__ */ React.createElement(Box, { src: cloudFlagsImage, position: "absolute", top: 0, right: 0, as: "img" }))
    )
  );
};
/* harmony default export */ const HomePage_CloudBox = ((/* unused pure expression or super */ null && (CloudBox_CloudBox)));

;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/ContentBlocks.js







const ContentBlocks_BlockLink = styled_components_browser_esm/* default */.ZP.a`
  text-decoration: none;
`;
const ContentBlocks = () => {
  const { formatMessage } = useIntl();
  const { trackUsage } = useTracking();
  const handleClick = (eventName) => {
    trackUsage(eventName);
  };
  return /* @__PURE__ */ React.createElement(Flex, { direction: "column", alignItems: "stretch", gap: 5 }, /* @__PURE__ */ React.createElement(CloudBox, null), /* @__PURE__ */ React.createElement(
    ContentBlocks_BlockLink,
    {
      href: "https://strapi.io/resource-center",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      onClick: () => handleClick("didClickonReadTheDocumentationSection")
    },
    /* @__PURE__ */ React.createElement(
      ContentBox,
      {
        title: formatMessage({
          id: "global.documentation",
          defaultMessage: "Documentation"
        }),
        subtitle: formatMessage({
          id: "app.components.BlockLink.documentation.content",
          defaultMessage: "Discover the essential concepts, guides and instructions."
        }),
        icon: /* @__PURE__ */ React.createElement(InformationSquare, null),
        iconBackground: "primary100"
      }
    )
  ), /* @__PURE__ */ React.createElement(
    ContentBlocks_BlockLink,
    {
      href: "https://strapi.io/starters",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      onClick: () => handleClick("didClickonCodeExampleSection")
    },
    /* @__PURE__ */ React.createElement(
      ContentBox,
      {
        title: formatMessage({
          id: "app.components.BlockLink.code",
          defaultMessage: "Code example"
        }),
        subtitle: formatMessage({
          id: "app.components.BlockLink.code.content",
          defaultMessage: "Learn by using ready-made starters for your projects."
        }),
        icon: /* @__PURE__ */ React.createElement(CodeSquare, null),
        iconBackground: "warning100"
      }
    )
  ), /* @__PURE__ */ React.createElement(
    ContentBlocks_BlockLink,
    {
      href: "https://strapi.io/blog/categories/tutorials",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      onClick: () => handleClick("didClickonTutorialSection")
    },
    /* @__PURE__ */ React.createElement(
      ContentBox,
      {
        title: formatMessage({
          id: "app.components.BlockLink.tutorial",
          defaultMessage: "Tutorials"
        }),
        subtitle: formatMessage({
          id: "app.components.BlockLink.tutorial.content",
          defaultMessage: "Follow step-by-step instructions to use and customize Strapi."
        }),
        icon: /* @__PURE__ */ React.createElement(PlaySquare, null),
        iconBackground: "secondary100"
      }
    )
  ), /* @__PURE__ */ React.createElement(
    ContentBlocks_BlockLink,
    {
      href: "https://strapi.io/blog",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      onClick: () => handleClick("didClickonBlogSection")
    },
    /* @__PURE__ */ React.createElement(
      ContentBox,
      {
        title: formatMessage({
          id: "app.components.BlockLink.blog",
          defaultMessage: "Blog"
        }),
        subtitle: formatMessage({
          id: "app.components.BlockLink.blog.content",
          defaultMessage: "Read the latest news about Strapi and the ecosystem."
        }),
        icon: /* @__PURE__ */ React.createElement(FeatherSquare, null),
        iconBackground: "alternative100"
      }
    )
  ));
};
/* harmony default export */ const HomePage_ContentBlocks = ((/* unused pure expression or super */ null && (ContentBlocks)));

;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/index.js
/*
 * HomePage
 *
 */var useLicenseLimitNotification=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(94018)/* ["default"] */ .Z);}return (__webpack_require__(67875)/* ["default"] */ .Z);}();var LogoContainer=/*#__PURE__*/(/* unused pure expression or super */ null && (styled(Box).withConfig({displayName:"HomePage__LogoContainer",componentId:"sc-1md9zz4-0"})(["position:absolute;top:0;right:0;img{width:","rem;}"],150/16)));var HomePage=function HomePage(){// Temporary until we develop the menu API
var _useModels=(0,hooks/* useModels */.bP)(),collectionTypes=_useModels.collectionTypes,singleTypes=_useModels.singleTypes,isLoadingForModels=_useModels.isLoading;var _useGuidedTour=(0,helper_plugin_esm/* useGuidedTour */.c1)(),guidedTourState=_useGuidedTour.guidedTourState,isGuidedTourVisible=_useGuidedTour.isGuidedTourVisible,isSkipped=_useGuidedTour.isSkipped;useLicenseLimitNotification();var showGuidedTour=!utils_isGuidedTourCompleted(guidedTourState)&&isGuidedTourVisible&&!isSkipped;var _useHistory=(0,react_router/* useHistory */.k6)(),push=_useHistory.push;var handleClick=function handleClick(e){e.preventDefault();push('/plugins/content-type-builder/content-types/create-content-type');};var hasAlreadyCreatedContentTypes=(0,react.useMemo)(function(){var filterContentTypes=function filterContentTypes(contentTypes){return contentTypes.filter(function(c){return c.isDisplayed;});};return filterContentTypes(collectionTypes).length>1||filterContentTypes(singleTypes).length>0;},[collectionTypes,singleTypes]);if(isLoadingForModels){return/*#__PURE__*/react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.dO,null);}return/*#__PURE__*/react.createElement("div",null,"Duy Khanh");};/* harmony default export */ const pages_HomePage = (/*#__PURE__*/(0,react.memo)(HomePage));

/***/ }),

/***/ 67875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const useLicenseLimitNotification = () => {
  return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLicenseLimitNotification);


/***/ }),

/***/ 86820:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const e = (i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...i, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#161614",
    d: "M12 0C5.373 0 0 5.501 0 12.288c0 5.43 3.438 10.035 8.206 11.66.6.114.82-.266.82-.59 0-.294-.01-1.262-.016-2.289-3.338.744-4.043-1.45-4.043-1.45-.546-1.42-1.332-1.797-1.332-1.797-1.089-.763.082-.747.082-.747 1.205.086 1.84 1.266 1.84 1.266 1.07 1.878 2.807 1.335 3.491 1.021.108-.794.42-1.336.762-1.643-2.665-.31-5.467-1.364-5.467-6.073 0-1.341.469-2.437 1.236-3.298-.124-.31-.535-1.56.117-3.252 0 0 1.007-.33 3.3 1.26A11.25 11.25 0 0 1 12 5.942c1.02.005 2.047.141 3.006.414 2.29-1.59 3.297-1.26 3.297-1.26.653 1.693.242 2.943.118 3.252.77.86 1.235 1.957 1.235 3.298 0 4.72-2.808 5.76-5.48 6.063.43.382.814 1.13.814 2.276 0 1.644-.014 2.967-.014 3.372 0 .327.216.71.825.59C20.566 22.32 24 17.715 24 12.288 24 5.501 18.627 0 12 0Z"
  }
) }), o = e;



/***/ }),

/***/ 36182:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ $)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91393);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1565);
/* harmony import */ var _themes_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15585);
/* harmony import */ var _BaseLink_BaseLink_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63507);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75515);







const x = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_BaseLink_BaseLink_js__WEBPACK_IMPORTED_MODULE_3__/* .BaseLink */ .f)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({ theme: r }) => r.spaces[2]};
  pointer-events: ${({ disabled: r }) => r ? "none" : void 0};

  svg {
    font-size: ${10 / 16}rem;

    path {
      fill: ${({ disabled: r, theme: o }) => r ? o.colors.neutral600 : o.colors.primary600};
    }
  }

  &:hover {
    color: ${({ theme: r }) => r.colors.primary500};
  }

  &:active {
    color: ${({ theme: r }) => r.colors.primary700};
  }

  ${_themes_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .buttonFocusStyle */ .BF};
`, $ = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ children: r, href: o, disabled: e = !1, startIcon: a, endIcon: t, isExternal: i = !0, ...l }, p) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(x, { ref: p, href: o, disabled: e, isExternal: i, ...l, children: [a, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .Z, { textColor: e ? "neutral600" : "primary600", children: r }), t, o && !t && i && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})] }));
$.displayName = "Link";



/***/ }),

/***/ 80994:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ L)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1565);
/* harmony import */ var _Button_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92577);
/* harmony import */ var _BaseButton_BaseButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21817);
/* harmony import */ var _BaseLink_BaseLink_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63507);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11047);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75515);








const k = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_BaseButton_BaseButton_js__WEBPACK_IMPORTED_MODULE_3__/* .BaseButtonWrapper */ .G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${_Button_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getDisabledStyle */ .sg}
    &:active {
      ${_Button_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getDisabledStyle */ .sg}
    }
  }

  &:hover {
    ${_Button_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getHoverStyle */ .yP}
  }

  &:active {
    ${_Button_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getActiveStyle */ .tB}
  }

  ${_Button_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVariantStyle */ .PD}
`, L = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ variant: m = "default", startIcon: e, endIcon: i, disabled: o = !1, children: u, size: t = "S", as: f = _BaseLink_BaseLink_js__WEBPACK_IMPORTED_MODULE_5__/* .BaseLink */ .f, ...s }, g) => {
  const a = t === "S" ? 2 : "10px", n = 4;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(k, { ref: g, "aria-disabled": o, size: t, variant: m, background: "buttonPrimary600", borderColor: "buttonPrimary600", hasRadius: !0, gap: 2, inline: !0, paddingBottom: a, paddingLeft: n, paddingRight: n, paddingTop: a, pointerEvents: o ? "none" : void 0, ...s, as: f || _BaseLink_BaseLink_js__WEBPACK_IMPORTED_MODULE_5__/* .BaseLink */ .f, children: [e && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .k, { "aria-hidden": !0, children: e }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_7__/* .Typography */ .Z, { variant: t === "S" ? "pi" : void 0, fontWeight: "bold", textColor: "buttonNeutral0", children: u }), i && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .k, { "aria-hidden": !0, children: i })] });
});
L.displayName = "LinkButton";



/***/ })

}]);