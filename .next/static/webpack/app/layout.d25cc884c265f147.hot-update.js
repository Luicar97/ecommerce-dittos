"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./lib/theme.ts":
/*!**********************!*\
  !*** ./lib/theme.ts ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   theme: function() { return /* binding */ theme; }\n/* harmony export */ });\n/* harmony import */ var next_font_google_target_css_path_lib_theme_ts_import_Inter_arguments_weight_300_400_700_style_normal_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"lib/theme.ts\",\"import\":\"Inter\",\"arguments\":[{\"weight\":[\"300\",\"400\",\"700\"],\"style\":[\"normal\"],\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"lib/theme.ts\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"weight\\\":[\\\"300\\\",\\\"400\\\",\\\"700\\\"],\\\"style\\\":[\\\"normal\\\"],\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_lib_theme_ts_import_Inter_arguments_weight_300_400_700_style_normal_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_lib_theme_ts_import_Inter_arguments_weight_300_400_700_style_normal_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/createTheme.js\");\n\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    components: {\n        // Name of the component\n        MuiButtonBase: {\n            defaultProps: {\n                // The props to change the default for.\n                disableRipple: true\n            }\n        },\n        MuiSvgIcon: {\n            styleOverrides: {\n                root: {\n                    color: \"#323232\"\n                }\n            }\n        },\n        MuiTypography: {\n            defaultProps: {\n                fontFamily: (next_font_google_target_css_path_lib_theme_ts_import_Inter_arguments_weight_300_400_700_style_normal_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_1___default().style).fontFamily,\n                variantMapping: {\n                    h1: \"h1\",\n                    h2: \"h2\",\n                    h3: \"h3\",\n                    h4: \"h4\",\n                    h5: \"h5\",\n                    h6: \"h6\",\n                    subtitle1: \"subtitle1\",\n                    subtitle2: \"subtitle2\",\n                    body1: \"body1\",\n                    body2: \"body2\"\n                }\n            }\n        }\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi90aGVtZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR01BO0FBSDZDO0FBVTVDLE1BQU1FLFFBQVFELGdFQUFXQSxDQUFDO0lBRS9CRSxZQUFZO1FBQ1Ysd0JBQXdCO1FBQ3hCQyxlQUFlO1lBQ2JDLGNBQWM7Z0JBQ1osdUNBQXVDO2dCQUN2Q0MsZUFBZTtZQUNqQjtRQUNGO1FBQ0FDLFlBQVk7WUFDVkMsZ0JBQWdCO2dCQUNkQyxNQUFNO29CQUNKQyxPQUFPO2dCQUNUO1lBQ0Y7UUFDRjtRQUNBQyxlQUFlO1lBQ2JOLGNBQWM7Z0JBQ1pPLFlBQVlaLHFMQUFXLENBQUNZLFVBQVU7Z0JBQ2xDRSxnQkFBZ0I7b0JBQ2RDLElBQUk7b0JBQ0pDLElBQUk7b0JBQ0pDLElBQUk7b0JBQ0pDLElBQUk7b0JBQ0pDLElBQUk7b0JBQ0pDLElBQUk7b0JBQ0pDLFdBQVc7b0JBQ1hDLFdBQVc7b0JBQ1hDLE9BQU87b0JBQ1BDLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO0lBRUY7QUFDRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi90aGVtZS50cz8yNDRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoe1xuICB3ZWlnaHQ6IFtcIjMwMFwiLCBcIjQwMFwiLCBcIjcwMFwiXSxcbiAgc3R5bGU6IFtcIm5vcm1hbFwiXSxcbiAgc3Vic2V0czogW1wibGF0aW5cIl0sXG59KTtcblxuXG5leHBvcnQgY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gIFxuICBjb21wb25lbnRzOiB7XG4gICAgLy8gTmFtZSBvZiB0aGUgY29tcG9uZW50XG4gICAgTXVpQnV0dG9uQmFzZToge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIC8vIFRoZSBwcm9wcyB0byBjaGFuZ2UgdGhlIGRlZmF1bHQgZm9yLlxuICAgICAgICBkaXNhYmxlUmlwcGxlOiB0cnVlLCAvLyBObyBtb3JlIHJpcHBsZSwgb24gdGhlIHdob2xlIGFwcGxpY2F0aW9uIPCfkqMhXG4gICAgICB9LFxuICAgIH0sXG4gICAgTXVpU3ZnSWNvbjoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIGNvbG9yOiBcIiMzMjMyMzJcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBNdWlUeXBvZ3JhcGh5OiB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgZm9udEZhbWlseTogaW50ZXIuc3R5bGUuZm9udEZhbWlseSxcbiAgICAgICAgdmFyaWFudE1hcHBpbmc6IHtcbiAgICAgICAgICBoMTogJ2gxJyxcbiAgICAgICAgICBoMjogJ2gyJyxcbiAgICAgICAgICBoMzogJ2gzJyxcbiAgICAgICAgICBoNDogJ2g0JyxcbiAgICAgICAgICBoNTogJ2g1JyxcbiAgICAgICAgICBoNjogJ2g2JyxcbiAgICAgICAgICBzdWJ0aXRsZTE6ICdzdWJ0aXRsZTEnLFxuICAgICAgICAgIHN1YnRpdGxlMjogJ3N1YnRpdGxlMicsXG4gICAgICAgICAgYm9keTE6ICdib2R5MScsXG4gICAgICAgICAgYm9keTI6ICdib2R5MicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJpbnRlciIsImNyZWF0ZVRoZW1lIiwidGhlbWUiLCJjb21wb25lbnRzIiwiTXVpQnV0dG9uQmFzZSIsImRlZmF1bHRQcm9wcyIsImRpc2FibGVSaXBwbGUiLCJNdWlTdmdJY29uIiwic3R5bGVPdmVycmlkZXMiLCJyb290IiwiY29sb3IiLCJNdWlUeXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsInN0eWxlIiwidmFyaWFudE1hcHBpbmciLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJzdWJ0aXRsZTEiLCJzdWJ0aXRsZTIiLCJib2R5MSIsImJvZHkyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/theme.ts\n"));

/***/ })

});