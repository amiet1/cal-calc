/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/identify/route";
exports.ids = ["app/api/identify/route"];
exports.modules = {

/***/ "(rsc)/./app/api/identify/IdentifyHandler.js":
/*!*********************************************!*\
  !*** ./app/api/identify/IdentifyHandler.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   identifyFood: () => (/* binding */ identifyFood)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/lib/axios.js\");\n\nasync function identifyFood(base64Image) {\n    const apiKey = process.env.ROBOFLOW_API_KEY;\n    console.log('Roboflow API key is set:', !!apiKey);\n    if (!apiKey) {\n        throw new Error('Roboflow API key is not configured');\n    }\n    const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n        timeout: 20000,\n        maxContentLength: Infinity,\n        maxBodyLength: Infinity\n    });\n    const response = await axiosInstance.post('https://serverless.roboflow.com/infer/workflows/foodidentifier-pzqkj/detect-and-classify', {\n        api_key: apiKey,\n        inputs: {\n            image: {\n                type: 'base64',\n                value: base64Image\n            }\n        }\n    }, {\n        headers: {\n            'Content-Type': 'application/json'\n        }\n    });\n    return response.data;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2lkZW50aWZ5L0lkZW50aWZ5SGFuZGxlci5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQjtBQUVuQixlQUFlQyxhQUFhQyxXQUFXO0lBQzVDLE1BQU1DLFNBQVNDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO0lBQzNDQyxRQUFRQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQ0w7SUFDMUMsSUFBSSxDQUFDQSxRQUFRO1FBQ1gsTUFBTSxJQUFJTSxNQUFNO0lBQ2xCO0lBRUEsTUFBTUMsZ0JBQWdCViw2Q0FBS0EsQ0FBQ1csTUFBTSxDQUFDO1FBQ2pDQyxTQUFTO1FBQ1RDLGtCQUFrQkM7UUFDbEJDLGVBQWVEO0lBQ2pCO0lBRUEsTUFBTUUsV0FBVyxNQUFNTixjQUFjTyxJQUFJLENBQ3ZDLDRGQUNBO1FBQ0VDLFNBQVNmO1FBQ1RnQixRQUFRO1lBQ05DLE9BQU87Z0JBQ0xDLE1BQU07Z0JBQ05DLE9BQU9wQjtZQUNUO1FBQ0Y7SUFDRixHQUNBO1FBQ0VxQixTQUFTO1lBQUUsZ0JBQWdCO1FBQW1CO0lBQ2hEO0lBR0YsT0FBT1AsU0FBU1EsSUFBSTtBQUN0QiIsInNvdXJjZXMiOlsiL1VzZXJzL21hcmN5L0RldmVsb3BtZW50L0FydC9jYWxvcmllLWFpLWFwcC9hcHAvYXBpL2lkZW50aWZ5L0lkZW50aWZ5SGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaWRlbnRpZnlGb29kKGJhc2U2NEltYWdlKSB7XG4gIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52LlJPQk9GTE9XX0FQSV9LRVk7XG4gIGNvbnNvbGUubG9nKCdSb2JvZmxvdyBBUEkga2V5IGlzIHNldDonLCAhIWFwaUtleSk7XG4gIGlmICghYXBpS2V5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdSb2JvZmxvdyBBUEkga2V5IGlzIG5vdCBjb25maWd1cmVkJyk7XG4gIH1cblxuICBjb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgICB0aW1lb3V0OiAyMDAwMCxcbiAgICBtYXhDb250ZW50TGVuZ3RoOiBJbmZpbml0eSxcbiAgICBtYXhCb2R5TGVuZ3RoOiBJbmZpbml0eSxcbiAgfSk7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0luc3RhbmNlLnBvc3QoXG4gICAgJ2h0dHBzOi8vc2VydmVybGVzcy5yb2JvZmxvdy5jb20vaW5mZXIvd29ya2Zsb3dzL2Zvb2RpZGVudGlmaWVyLXB6cWtqL2RldGVjdC1hbmQtY2xhc3NpZnknLFxuICAgIHtcbiAgICAgIGFwaV9rZXk6IGFwaUtleSxcbiAgICAgIGlucHV0czoge1xuICAgICAgICBpbWFnZToge1xuICAgICAgICAgIHR5cGU6ICdiYXNlNjQnLFxuICAgICAgICAgIHZhbHVlOiBiYXNlNjRJbWFnZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG59XG5cbiJdLCJuYW1lcyI6WyJheGlvcyIsImlkZW50aWZ5Rm9vZCIsImJhc2U2NEltYWdlIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIlJPQk9GTE9XX0FQSV9LRVkiLCJjb25zb2xlIiwibG9nIiwiRXJyb3IiLCJheGlvc0luc3RhbmNlIiwiY3JlYXRlIiwidGltZW91dCIsIm1heENvbnRlbnRMZW5ndGgiLCJJbmZpbml0eSIsIm1heEJvZHlMZW5ndGgiLCJyZXNwb25zZSIsInBvc3QiLCJhcGlfa2V5IiwiaW5wdXRzIiwiaW1hZ2UiLCJ0eXBlIiwidmFsdWUiLCJoZWFkZXJzIiwiZGF0YSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/identify/IdentifyHandler.js\n");

/***/ }),

/***/ "(rsc)/./app/api/identify/route.js":
/*!***********************************!*\
  !*** ./app/api/identify/route.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _IdentifyHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IdentifyHandler */ \"(rsc)/./app/api/identify/IdentifyHandler.js\");\n\nasync function POST(request) {\n    try {\n        const body = await request.json();\n        if (!body.image) {\n            return new Response(JSON.stringify({\n                error: 'No image data provided'\n            }), {\n                status: 400,\n                headers: {\n                    'Content-Type': 'application/json'\n                }\n            });\n        }\n        const base64Image = body.image.replace(/^data:image\\/(jpeg|png|jpg);base64,/, '');\n        const result = await (0,_IdentifyHandler__WEBPACK_IMPORTED_MODULE_0__.identifyFood)(base64Image);\n        return new Response(JSON.stringify(result), {\n            status: 200,\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        });\n    } catch (error) {\n        console.error('Error in /api/identify:', error);\n        const statusCode = error.response?.status || 500;\n        const errorMessage = error.response?.data?.error || error.message;\n        return new Response(JSON.stringify({\n            error: 'Failed to identify food',\n            details: errorMessage,\n            status: statusCode\n        }), {\n            status: statusCode,\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2lkZW50aWZ5L3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlEO0FBRTFDLGVBQWVDLEtBQUtDLE9BQU87SUFDaEMsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTUQsUUFBUUUsSUFBSTtRQUUvQixJQUFJLENBQUNELEtBQUtFLEtBQUssRUFBRTtZQUNmLE9BQU8sSUFBSUMsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxPQUFPO1lBQXlCLElBQUk7Z0JBQ3ZFQyxRQUFRO2dCQUNSQyxTQUFTO29CQUFFLGdCQUFnQjtnQkFBbUI7WUFDaEQ7UUFDRjtRQUVBLE1BQU1DLGNBQWNULEtBQUtFLEtBQUssQ0FBQ1EsT0FBTyxDQUFDLHVDQUF1QztRQUM5RSxNQUFNQyxTQUFTLE1BQU1kLDhEQUFZQSxDQUFDWTtRQUVsQyxPQUFPLElBQUlOLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQ00sU0FBUztZQUMxQ0osUUFBUTtZQUNSQyxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtRQUNoRDtJQUVGLEVBQUUsT0FBT0YsT0FBTztRQUNkTSxRQUFRTixLQUFLLENBQUMsMkJBQTJCQTtRQUV6QyxNQUFNTyxhQUFhUCxNQUFNUSxRQUFRLEVBQUVQLFVBQVU7UUFDN0MsTUFBTVEsZUFBZVQsTUFBTVEsUUFBUSxFQUFFRSxNQUFNVixTQUFTQSxNQUFNVyxPQUFPO1FBRWpFLE9BQU8sSUFBSWQsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1lBQ2pDQyxPQUFPO1lBQ1BZLFNBQVNIO1lBQ1RSLFFBQVFNO1FBQ1YsSUFBSTtZQUNGTixRQUFRTTtZQUNSTCxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtRQUNoRDtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjeS9EZXZlbG9wbWVudC9BcnQvY2Fsb3JpZS1haS1hcHAvYXBwL2FwaS9pZGVudGlmeS9yb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpZGVudGlmeUZvb2QgfSBmcm9tICcuL0lkZW50aWZ5SGFuZGxlcic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG5cbiAgICBpZiAoIWJvZHkuaW1hZ2UpIHtcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogJ05vIGltYWdlIGRhdGEgcHJvdmlkZWQnIH0pLCB7XG4gICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGJhc2U2NEltYWdlID0gYm9keS5pbWFnZS5yZXBsYWNlKC9eZGF0YTppbWFnZVxcLyhqcGVnfHBuZ3xqcGcpO2Jhc2U2NCwvLCAnJyk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgaWRlbnRpZnlGb29kKGJhc2U2NEltYWdlKTtcblxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSwge1xuICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICB9KTtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIC9hcGkvaWRlbnRpZnk6JywgZXJyb3IpO1xuXG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IGVycm9yLnJlc3BvbnNlPy5zdGF0dXMgfHwgNTAwO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlPy5kYXRhPy5lcnJvciB8fCBlcnJvci5tZXNzYWdlO1xuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICBlcnJvcjogJ0ZhaWxlZCB0byBpZGVudGlmeSBmb29kJyxcbiAgICAgIGRldGFpbHM6IGVycm9yTWVzc2FnZSxcbiAgICAgIHN0YXR1czogc3RhdHVzQ29kZSxcbiAgICB9KSwge1xuICAgICAgc3RhdHVzOiBzdGF0dXNDb2RlLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbiJdLCJuYW1lcyI6WyJpZGVudGlmeUZvb2QiLCJQT1NUIiwicmVxdWVzdCIsImJvZHkiLCJqc29uIiwiaW1hZ2UiLCJSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsInN0YXR1cyIsImhlYWRlcnMiLCJiYXNlNjRJbWFnZSIsInJlcGxhY2UiLCJyZXN1bHQiLCJjb25zb2xlIiwic3RhdHVzQ29kZSIsInJlc3BvbnNlIiwiZXJyb3JNZXNzYWdlIiwiZGF0YSIsIm1lc3NhZ2UiLCJkZXRhaWxzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/identify/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fidentify%2Froute&page=%2Fapi%2Fidentify%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fidentify%2Froute.js&appDir=%2FUsers%2Fmarcy%2FDevelopment%2FArt%2Fcalorie-ai-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmarcy%2FDevelopment%2FArt%2Fcalorie-ai-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fidentify%2Froute&page=%2Fapi%2Fidentify%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fidentify%2Froute.js&appDir=%2FUsers%2Fmarcy%2FDevelopment%2FArt%2Fcalorie-ai-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmarcy%2FDevelopment%2FArt%2Fcalorie-ai-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_marcy_Development_Art_calorie_ai_app_app_api_identify_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/identify/route.js */ \"(rsc)/./app/api/identify/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/identify/route\",\n        pathname: \"/api/identify\",\n        filename: \"route\",\n        bundlePath: \"app/api/identify/route\"\n    },\n    resolvedPagePath: \"/Users/marcy/Development/Art/calorie-ai-app/app/api/identify/route.js\",\n    nextConfigOutput,\n    userland: _Users_marcy_Development_Art_calorie_ai_app_app_api_identify_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZpZGVudGlmeSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGaWRlbnRpZnklMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZpZGVudGlmeSUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRm1hcmN5JTJGRGV2ZWxvcG1lbnQlMkZBcnQlMkZjYWxvcmllLWFpLWFwcCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZtYXJjeSUyRkRldmVsb3BtZW50JTJGQXJ0JTJGY2Fsb3JpZS1haS1hcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3FCO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvbWFyY3kvRGV2ZWxvcG1lbnQvQXJ0L2NhbG9yaWUtYWktYXBwL2FwcC9hcGkvaWRlbnRpZnkvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2lkZW50aWZ5L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvaWRlbnRpZnlcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2lkZW50aWZ5L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL21hcmN5L0RldmVsb3BtZW50L0FydC9jYWxvcmllLWFpLWFwcC9hcHAvYXBpL2lkZW50aWZ5L3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fidentify%2Froute&page=%2Fapi%2Fidentify%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fidentify%2Froute.js&appDir=%2FUsers%2Fmarcy%2FDevelopment%2FArt%2Fcalorie-ai-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmarcy%2FDevelopment%2FArt%2Fcalorie-ai-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/axios","vendor-chunks/asynckit","vendor-chunks/math-intrinsics","vendor-chunks/es-errors","vendor-chunks/form-data","vendor-chunks/call-bind-apply-helpers","vendor-chunks/debug","vendor-chunks/get-proto","vendor-chunks/has-symbols","vendor-chunks/gopd","vendor-chunks/function-bind","vendor-chunks/follow-redirects","vendor-chunks/supports-color","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/hasown","vendor-chunks/has-tostringtag","vendor-chunks/has-flag","vendor-chunks/get-intrinsic","vendor-chunks/es-set-tostringtag","vendor-chunks/es-object-atoms","vendor-chunks/es-define-property","vendor-chunks/dunder-proto","vendor-chunks/delayed-stream","vendor-chunks/combined-stream"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fidentify%2Froute&page=%2Fapi%2Fidentify%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fidentify%2Froute.js&appDir=%2FUsers%2Fmarcy%2FDevelopment%2FArt%2Fcalorie-ai-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmarcy%2FDevelopment%2FArt%2Fcalorie-ai-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();