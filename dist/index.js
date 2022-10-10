
/*! *****************************************************************************************************************************
* Copyright (c) Tuvalsoft Corporation. All rights reserved.                                                                     *
*                                                                                                                               *
* ████████╗██╗   ██╗██╗   ██╗ █████╗ ██╗         ███████╗██████╗  █████╗ ███╗   ███╗███████╗██╗    ██╗ ██████╗ ██████╗ ██╗  ██╗ *
* ╚══██╔══╝██║   ██║██║   ██║██╔══██╗██║         ██╔════╝██╔══██╗██╔══██╗████╗ ████║██╔════╝██║    ██║██╔═══██╗██╔══██╗██║ ██╔╝ *
*    ██║   ██║   ██║██║   ██║███████║██║         █████╗  ██████╔╝███████║██╔████╔██║█████╗  ██║ █╗ ██║██║   ██║██████╔╝█████╔╝  *
*    ██║   ██║   ██║╚██╗ ██╔╝██╔══██║██║         ██╔══╝  ██╔══██╗██╔══██║██║╚██╔╝██║██╔══╝  ██║███╗██║██║   ██║██╔══██╗██╔═██╗  *
*    ██║   ╚██████╔╝ ╚████╔╝ ██║  ██║███████╗    ██║     ██║  ██║██║  ██║██║ ╚═╝ ██║███████╗╚███╔███╔╝╚██████╔╝██║  ██║██║  ██╗ *
*    ╚═╝    ╚═════╝   ╚═══╝  ╚═╝  ╚═╝╚══════╝    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝ ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ *
*                                                                                                                               *
*                                                                                                                               *
* This file is part of Tuval Framework.                                                                                         *
* Copyright (c) Tuvalsoft 2019 All rights reserved.                                                                             *
*                                                                                                                               *
* Licensed under the GNU General Public License v3.0.                                                                           *
* More info at: https://choosealicense.com/licenses/gpl-3.0/                                                                    *
* Tuval Framework Created By Tuvalsoft in 2019                                                                                  *
******************************************************************************************************************************@*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("tuval$core"), require("tuval$forms"), require("realmocean$charts"), require("tuval$core$graphics"), require("realmocean$diagram"), require("tuval$graphics"));
	else if(typeof define === 'function' && define.amd)
		define(["tuval$core", "tuval$forms", "realmocean$charts", "tuval$core$graphics", "realmocean$diagram", "tuval$graphics"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("tuval$core"), require("tuval$forms"), require("realmocean$charts"), require("tuval$core$graphics"), require("realmocean$diagram"), require("tuval$graphics")) : factory(root["tuval$core"], root["tuval$forms"], root["realmocean$charts"], root["tuval$core$graphics"], root["realmocean$diagram"], root["tuval$graphics"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE__tuval_core__, __WEBPACK_EXTERNAL_MODULE__tuval_forms__, __WEBPACK_EXTERNAL_MODULE__realmocean_charts__, __WEBPACK_EXTERNAL_MODULE__tuval_cg__, __WEBPACK_EXTERNAL_MODULE__realmocean_diagram__, __WEBPACK_EXTERNAL_MODULE__tuval_graphics__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@procetra/common/index.js":
/*!************************************************!*\
  !*** ./node_modules/@procetra/common/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! @tuval/forms */ "@tuval/forms"), __webpack_require__(/*! @tuval/core */ "@tuval/core"));
	else { var i, a; }
})(self, function(__WEBPACK_EXTERNAL_MODULE__tuval_forms__, __WEBPACK_EXTERNAL_MODULE__tuval_core__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/BrokerClients/MiningBrokerClient.ts":
/*!*************************************************!*\
  !*** ./src/BrokerClients/MiningBrokerClient.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_1024__) => {

__nested_webpack_require_1024__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_1024__.d(__webpack_exports__, {
/* harmony export */   "MiningBrokerClient": () => (/* binding */ MiningBrokerClient)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_1024__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_1024__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_1024__(/*! ../Services/ConfigService */ "./src/Services/ConfigService.ts");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_1024__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_1024__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};



var separators = [",", ";", "\t"];
function detectSeparator(csv) {
    var counts = {}, sepMax;
    separators.forEach(function (sep, i) {
        var re = new RegExp(sep, 'g');
        counts[sep] = (csv.match(re) || []).length;
        sepMax = !sepMax || counts[sep] > counts[sepMax] ? sep : sepMax;
    });
    return sepMax;
}
var MiningBrokerClient = /** @class */ (function () {
    function MiningBrokerClient() {
    }
    MiningBrokerClient.LoadCsv = function (csv, case_id, activity_key, timestamp_key, start_timestamp_key, resource_key, cost_key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var data = new FormData();
                        data.append('case_column_name', case_id);
                        data.append('activity_column_name', activity_key);
                        data.append('timestamp_key', timestamp_key);
                        data.append('start_timestamp_key', start_timestamp_key);
                        data.append('resource_key', resource_key);
                        data.append('cost_key', cost_key);
                        data.append('sep', detectSeparator(csv));
                        var parts = [
                            new Blob([csv], { type: 'text/plain' })
                        ];
                        var file = new File(parts, 'csv.txt');
                        data.append('file', file, 'test.csv');
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'LoadCsv?token=', data, {
                            headers: {
                                "Content-Encoding": "gzip"
                            }
                        })
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.ImportCsvFile = function (project_id, csv, case_column_name, activity_column_name, timestamp_key, start_timestamp_key, resource_key, cost_key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var data = new FormData();
                        data.append('project_id', project_id);
                        data.append('case_column_name', case_column_name);
                        data.append('activity_column_name', activity_column_name);
                        data.append('timestamp_key', timestamp_key);
                        data.append('start_timestamp_key', start_timestamp_key);
                        data.append('resource_key', resource_key);
                        data.append('cost_key', cost_key);
                        data.append('sep', detectSeparator(csv));
                        var parts = [
                            new Blob([csv], { type: 'text/plain' })
                        ];
                        var file = new File(parts, 'csv.txt');
                        data.append('file', file, 'test.csv');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'ImportCsvFile?token=', data, {
                            headers: {
                                "Content-Encoding": "gzip"
                            }
                        })
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetStatistics = function (log_id, activity_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        form.append('activity_name', activity_name);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetStatistics?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetActivityOverview = function (log_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetActivityStatistics?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetItemOverview = function (log_id, item_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        form.append('activity_name', item_name);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetStatistics?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetStartActivities = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetStartActivities?token=', form)
                            .then(function (response) {
                            resolve(response.data.startActivities);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetStartItems = function (log_id, item_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        form.append('item_name', item_name);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetStartItems', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetEndActivities = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetEndActivities?token=', form)
                            .then(function (response) {
                            resolve(response.data.endActivities);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetEndItems = function (log_id, item_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        form.append('item_name', item_name);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetEndItems?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetAllVariants = function (project_id, max_no_variants) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        // form.append('max_no_variants', '10');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetAllVariants?token=', form)
                            .then(function (response) {
                            resolve(response.data.variants);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetVariants = function (project_id, max_no_variants) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        // form.append('max_no_variants', '10');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetVariants?token=', form)
                            .then(function (response) {
                            resolve(response.data.variants);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetEventsPerTime = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        // form.append('max_no_variants', '10');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetEventsPerTime?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetHappyPath = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        // form.append('max_no_variants', '10');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetHappyPath?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetActivities = function (project_id, activity_key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('activity_key', activity_key);
                        // form.append('max_no_variants', '10');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetActivities?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetThroughputTimes = function (project_id, activity_key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('activity_key', activity_key);
                        // form.append('max_no_variants', '10');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetThroughputTimes?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetLogSummary = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetLogSummary?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetAllVariantsAndCases = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetAllVariantsAndCases?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetAllPaths = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetAllPaths?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetAttributeValues = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetAttributeValues?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetDailyCasesPerMonth = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetDailyCasesPerMonth?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetProcessSchema = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        // form.append('max_no_variants', '10');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetProcessSchema?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetLog = function (log_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetLog?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetEventsOverTime = function (log_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetEventsOverTime?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetEventDataInfo = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetEventDataInfo?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.LoadEventData = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'LoadEventData?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetResourceOverview = function (log_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetResourceOverview?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.Login = function (user, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('user', user);
                        form.append('password', password);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'LoginService?token=', form)
                            .then(function (response) {
                            resolve(response.data.sessionId);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.CreateProject = function (project_name, admin, is_public, disable_cache) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_name', project_name);
                        form.append('admin', admin);
                        form.append('is_public', is_public ? "true" : "false");
                        form.append('disable_cache', disable_cache ? "true" : "false");
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'CreateProject?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetProjects = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetProjects?token=')
                            .then(function (response) {
                            resolve(response.data.projects);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetProjectById = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetProjectById?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.CreateProjectItem = function (project_id, model_id, item_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('model_id', model_id);
                        form.append('item_id', item_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'CreateProjectItem?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetProjectItems = function (project_id, model_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('model_id', model_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetProjectItems?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    //#region Anayse Models
    MiningBrokerClient.CreateAnalyseModel = function (project_id, analyse_model_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('analyse_model_name', analyse_model_name);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'CreateAnalyseModel?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetAnalyseModelById = function (project_id, model_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('model_id', model_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetAnalyseModelById?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.DeleteAnalyseModelById = function (project_id, model_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('model_id', model_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'DeleteAnalyseModelById?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetAnalyseModels = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetAnalyseModels?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    //#endregion
    MiningBrokerClient.CreateMapping = function (project_id, mapping_name, mapping_file_name, mapping_data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('mapping_name', mapping_name);
                        form.append('mapping_file_name', mapping_file_name);
                        form.append('mapping_data', mapping_data);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'CreateMapping?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetCaseCount = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'metrics/GetCaseCount?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetEventCount = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'metrics/GetEventCount?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    return MiningBrokerClient;
}());



/***/ }),

/***/ "./src/BrokerClients/index.ts":
/*!************************************!*\
  !*** ./src/BrokerClients/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_39860__) => {

__nested_webpack_require_39860__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_39860__.d(__webpack_exports__, {
/* harmony export */   "MiningBrokerClient": () => (/* reexport safe */ _MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient)
/* harmony export */ });
/* harmony import */ var _MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_39860__(/*! ./MiningBrokerClient */ "./src/BrokerClients/MiningBrokerClient.ts");



/***/ }),

/***/ "./src/ListBounceAnimation.ts":
/*!************************************!*\
  !*** ./src/ListBounceAnimation.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_40565__) => {

__nested_webpack_require_40565__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_40565__.d(__webpack_exports__, {
/* harmony export */   "ListBounceAnimation": () => (/* binding */ ListBounceAnimation)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_40565__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_40565__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ListBounce = /** @class */ (function (_super) {
    __extends(ListBounce, _super);
    function ListBounce() {
        var _this = _super.call(this, 'list-bounce') || this;
        var keyFrame1 = new _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.KeyFrame('from');
        keyFrame1.style.Transform = 'translate(0px, 20px)';
        keyFrame1.style.Opacity = '0';
        _this.Add(keyFrame1);
        var keyFrame2 = new _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.KeyFrame('to');
        keyFrame2.style.Transform = 'translate(0px, 0px)';
        keyFrame2.style.Opacity = '1';
        _this.Add(keyFrame2);
        return _this;
    }
    return ListBounce;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.KeyFrameCollection));
var ListBounceAnimation = new ListBounce();


/***/ }),

/***/ "./src/Models/MIHappPath.ts":
/*!**********************************!*\
  !*** ./src/Models/MIHappPath.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_42895__) => {

__nested_webpack_require_42895__.r(__webpack_exports__);



/***/ }),

/***/ "./src/Models/MIMiningModel.ts":
/*!*************************************!*\
  !*** ./src/Models/MIMiningModel.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_43202__) => {

__nested_webpack_require_43202__.r(__webpack_exports__);



/***/ }),

/***/ "./src/Models/MIProject.ts":
/*!*********************************!*\
  !*** ./src/Models/MIProject.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_43493__) => {

__nested_webpack_require_43493__.r(__webpack_exports__);



/***/ }),

/***/ "./src/Models/index.ts":
/*!*****************************!*\
  !*** ./src/Models/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_43768__) => {

__nested_webpack_require_43768__.r(__webpack_exports__);
/* harmony import */ var _MIProject__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_43768__(/*! ./MIProject */ "./src/Models/MIProject.ts");
/* harmony import */ var _MIMiningModel__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_43768__(/*! ./MIMiningModel */ "./src/Models/MIMiningModel.ts");
/* harmony import */ var _MIHappPath__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_43768__(/*! ./MIHappPath */ "./src/Models/MIHappPath.ts");





/***/ }),

/***/ "./src/Resources/Icons/NewFile.ts":
/*!****************************************!*\
  !*** ./src/Resources/Icons/NewFile.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_44514__) => {

__nested_webpack_require_44514__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_44514__.d(__webpack_exports__, {
/* harmony export */   "NewFileIcon": () => (/* binding */ NewFileIcon)
/* harmony export */ });
var NewFileIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNNDIuNSwyMmgtMjVjLTAuNTUyLDAtMSwwLjQ0Ny0xLDFzMC40NDgsMSwxLDFoMjVjMC41NTIsMCwxLTAuNDQ3LDEtMVM0My4wNTIsMjIsNDIuNSwyMnoiLz4NCgk8cGF0aCBkPSJNMTcuNSwxNmgxMGMwLjU1MiwwLDEtMC40NDcsMS0xcy0wLjQ0OC0xLTEtMWgtMTBjLTAuNTUyLDAtMSwwLjQ0Ny0xLDFTMTYuOTQ4LDE2LDE3LjUsMTZ6Ii8+DQoJPHBhdGggZD0iTTQyLjUsMzBoLTI1Yy0wLjU1MiwwLTEsMC40NDctMSwxczAuNDQ4LDEsMSwxaDI1YzAuNTUyLDAsMS0wLjQ0NywxLTFTNDMuMDUyLDMwLDQyLjUsMzB6Ii8+DQoJPHBhdGggZD0iTTQyLjUsMzhoLTI1Yy0wLjU1MiwwLTEsMC40NDctMSwxczAuNDQ4LDEsMSwxaDI1YzAuNTUyLDAsMS0wLjQ0NywxLTFTNDMuMDUyLDM4LDQyLjUsMzh6Ii8+DQoJPHBhdGggZD0iTTQyLjUsNDZoLTI1Yy0wLjU1MiwwLTEsMC40NDctMSwxczAuNDQ4LDEsMSwxaDI1YzAuNTUyLDAsMS0wLjQ0NywxLTFTNDMuMDUyLDQ2LDQyLjUsNDZ6Ii8+DQoJPHBhdGggZD0iTTM4LjkxNCwwSDYuNXY2MGg0N1YxNC41ODZMMzguOTE0LDB6IE0zOS41LDMuNDE0TDUwLjA4NiwxNEgzOS41VjMuNDE0eiBNOC41LDU4VjJoMjl2MTRoMTR2NDJIOC41eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';


/***/ }),

/***/ "./src/Resources/Icons/OpenFile.ts":
/*!*****************************************!*\
  !*** ./src/Resources/Icons/OpenFile.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_46595__) => {

__nested_webpack_require_46595__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_46595__.d(__webpack_exports__, {
/* harmony export */   "OpenFileIcon": () => (/* binding */ OpenFileIcon)
/* harmony export */ });
var OpenFileIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBkPSJNNTcuNDksMjEuNUg1NHYtNi4yNjhjMC0xLjUwNy0xLjIyNi0yLjczMi0yLjczMi0yLjczMkgyNi41MTVsLTUtN0gyLjczMkMxLjIyNiw1LjUsMCw2LjcyNiwwLDguMjMydjQzLjY4N2wwLjAwNiwwDQoJYy0wLjAwNSwwLjU2MywwLjE3LDEuMTE0LDAuNTIyLDEuNTc1QzEuMDE4LDU0LjEzNCwxLjc2LDU0LjUsMi41NjUsNTQuNWg0NC43NTljMS4xNTYsMCwyLjE3NC0wLjc3OSwyLjQ1LTEuODEzTDYwLDI0LjY0OXYtMC4xNzcNCglDNjAsMjIuNzUsNTguOTQ0LDIxLjUsNTcuNDksMjEuNXogTTIsOC4yMzJDMiw3LjgyOCwyLjMyOSw3LjUsMi43MzIsNy41aDE3Ljc1M2w1LDdoMjUuNzgyYzAuNDA0LDAsMC43MzIsMC4zMjgsMC43MzIsMC43MzJWMjEuNQ0KCUgxMi43MzFjLTAuMTQ0LDAtMC4yODcsMC4wMTItMC40MjYsMC4wMzZjLTAuOTczLDAuMTYzLTEuNzgyLDAuODczLTIuMDIzLDEuNzc2TDIsNDUuODk5VjguMjMyeiBNNDcuODY5LDUyLjA4Mw0KCWMtMC4wNjYsMC4yNDUtMC4yOTEsMC40MTctMC41NDUsMC40MTdIMi41NjVjLTAuMjQzLDAtMC4zODUtMC4xMzktMC40NDgtMC4yMjJjLTAuMDYzLTAuMDgyLTAuMTYtMC4yNTYtMC4xMjMtMC40MDhsMTAuMTkxLTI3Ljk1Mw0KCWMwLjA2Ni0wLjI0NSwwLjI5MS0wLjQxNywwLjU0NS0wLjQxN0g1NGgzLjQ5YzAuMzgsMCwwLjQ3NywwLjU0NiwwLjUwMiwwLjgxOUw0Ny44NjksNTIuMDgzeiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';


/***/ }),

/***/ "./src/Resources/Icons/SaveFile.ts":
/*!*****************************************!*\
  !*** ./src/Resources/Icons/SaveFile.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_48787__) => {

__nested_webpack_require_48787__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_48787__.d(__webpack_exports__, {
/* harmony export */   "SaveFileIcon": () => (/* binding */ SaveFileIcon)
/* harmony export */ });
var SaveFileIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDkgNDkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5IDQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNMzkuOTE0LDBIMzcuNWgtMjhoLTl2NDloN2gzM2g4VjguNTg2TDM5LjkxNCwweiBNMzUuNSwydjE0aC0yNFYySDM1LjV6IE05LjUsNDdWMjhoMjl2MTlIOS41eiBNNDYuNSw0N2gtNlYyNmgtMzN2MjFoLTUNCgkJVjJoN3YxNmgyOFYyaDEuNTg2TDQ2LjUsOS40MTRWNDd6Ii8+DQoJPHBhdGggZD0iTTEzLjUsMzNoN2MwLjU1MywwLDEtMC40NDcsMS0xcy0wLjQ0Ny0xLTEtMWgtN2MtMC41NTMsMC0xLDAuNDQ3LTEsMVMxMi45NDcsMzMsMTMuNSwzM3oiLz4NCgk8cGF0aCBkPSJNMjMuNSwzNWgtMTBjLTAuNTUzLDAtMSwwLjQ0Ny0xLDFzMC40NDcsMSwxLDFoMTBjMC41NTMsMCwxLTAuNDQ3LDEtMVMyNC4wNTMsMzUsMjMuNSwzNXoiLz4NCgk8cGF0aCBkPSJNMjUuNzksMzUuMjljLTAuMTgxLDAuMTg5LTAuMjksMC40NS0wLjI5LDAuNzFzMC4xMDksMC41MiwwLjI5LDAuNzFDMjUuOTc5LDM2Ljg5LDI2LjIyOSwzNywyNi41LDM3DQoJCWMwLjI2LDAsMC41Mi0wLjExLDAuNzEtMC4yOWMwLjE4LTAuMTksMC4yOS0wLjQ1LDAuMjktMC43MXMtMC4xMS0wLjUyMS0wLjI5LTAuNzFDMjYuODQsMzQuOTIsMjYuMTYsMzQuOTIsMjUuNzksMzUuMjl6Ii8+DQoJPHBhdGggZD0iTTMzLjUsNGgtNnYxMGg2VjR6IE0zMS41LDEyaC0yVjZoMlYxMnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K';


/***/ }),

/***/ "./src/Resources/Resources.ts":
/*!************************************!*\
  !*** ./src/Resources/Resources.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_50895__) => {

__nested_webpack_require_50895__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_50895__.d(__webpack_exports__, {
/* harmony export */   "Resources": () => (/* binding */ Resources)
/* harmony export */ });
/* harmony import */ var _Icons_NewFile__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_50895__(/*! ./Icons/NewFile */ "./src/Resources/Icons/NewFile.ts");
/* harmony import */ var _Icons_OpenFile__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_50895__(/*! ./Icons/OpenFile */ "./src/Resources/Icons/OpenFile.ts");
/* harmony import */ var _Icons_SaveFile__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_50895__(/*! ./Icons/SaveFile */ "./src/Resources/Icons/SaveFile.ts");



var Resources = {
    Icons: {
        NewFile: _Icons_NewFile__WEBPACK_IMPORTED_MODULE_0__.NewFileIcon,
        OpenFile: _Icons_OpenFile__WEBPACK_IMPORTED_MODULE_1__.OpenFileIcon,
        SaveFile: _Icons_SaveFile__WEBPACK_IMPORTED_MODULE_2__.SaveFileIcon,
        ApplicationIcon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgdmVyc2lvbj0iMS4xIgogICB3aWR0aD0iMjIxLjgwMTcxIgogICBoZWlnaHQ9IjE5Ny4wODUxIgogICB2aWV3Qm94PSIwIDAgMjIxLjgwMTcxIDE5Ny4wODUxIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpZD0ic3ZnODciCiAgIHNvZGlwb2RpOmRvY25hbWU9ImxvZ29fcHJvY2V0cmFfLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4xLjIgKGI4ZTI1YmU4LCAyMDIyLTAyLTA1KSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48c29kaXBvZGk6bmFtZWR2aWV3CiAgIGlkPSJuYW1lZHZpZXcyMCIKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICBzaG93Z3JpZD0iZmFsc2UiCiAgIGlua3NjYXBlOnpvb209IjAuNzY3IgogICBpbmtzY2FwZTpjeD0iMjE4LjM4MzMxIgogICBpbmtzY2FwZTpjeT0iOTguNDM1NDYzIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijc0NyIKICAgaW5rc2NhcGU6d2luZG93LXg9IjE0NTQiCiAgIGlua3NjYXBlOndpbmRvdy15PSIxNjIiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2Zzg3IiAvPgo8ZGVzYwogICBpZD0iZGVzYzY2Ij5DcmVhdGVkIHdpdGggRmFicmljLmpzIDMuNS4wPC9kZXNjPgo8ZGVmcwogICBpZD0iZGVmczY4Ij4KPC9kZWZzPgoKPGcKICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4wNzk4LDAsMCwxLjA3OTgsMTEwLjkwMDg2LDk4LjU0MjU0OCkiCiAgIGlkPSJMYXllcl8xIj4KPHBhdGgKICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNkMDNmNDA7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIKICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMyMS44OTUsLTI5Ny42NCkiCiAgIGQ9Ik0gNDEyLjM3LDM4OC45IEggMjMyLjQyIGMgLTcuMzEsMCAtMTMuMjMsLTUuOTIgLTEzLjIzLC0xMy4yMyBWIDIxOS42MSBjIDAsLTcuMzEgNS45MiwtMTMuMjMgMTMuMjMsLTEzLjIzIGggMTc4Ljk1IGMgNy4zMSwwIDEzLjIzLDUuOTIgMTMuMjMsMTMuMjMgdiAxNTcuMDYgYyAtMC4wMSw2Ljc1IC01LjQ4LDEyLjIzIC0xMi4yMywxMi4yMyB6IgogICBzdHJva2UtbGluZWNhcD0icm91bmQiCiAgIGlkPSJwYXRoNzIiIC8+CjwvZz4KPGcKICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4wNzk4LDAsMCwxLjA3OTgsMTEwLjg5MTE2LDk4LjA4NzU0OCkiCiAgIGlkPSJnNzciPgo8cGF0aAogICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIgogICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIxLjg4NTYsLTI5Ny4yMTgyKSIKICAgZD0ibSA0MDQuMSwyNjYuMjcgYyAtMC4wOCwtNC4wNCAtMC4yNSwtOC4zMSAtMC45NiwtMTIuMjUgLTEuNzksLTkuOTggLTYuMzMsLTE3LjI2IC0xMy44NywtMjIuMjcgLTUuODUsLTMuODggLTEyLjcxLC01LjY5IC0yMS41NiwtNS42OSAtMjEuMTUsMC4wMiAtNDIuMjQsMC4wMyAtNjMuMzMsMC4wMyBoIC01Mi42OSBjIC02LjcsMCAtMTIuMTMsNS45OSAtMTIuMTMsMTMuMzggdiAxMjQuNjIgYyAwLDIuMzUgMS43Miw0LjI1IDMuODUsNC4yNSBoIDE1Ljc3IGMgMi4xMywwIDMuODUsMC40NiAzLjg1LC0xLjg5IHYgLTMxLjAzIGMgMCwtMC40NCAwLjA0LC0wLjg2IDAuMTIsLTEuMjggdiAtMzUuODYgLTEwLjQxIC0zMi45MSBjIDAsLTMuNjggMi42MSwtNi43MSA1Ljk0LC02LjkxIHYgMCBjIDAuNSwtMC4wMyAwLjk2LC0wLjA2IDEuNDIsLTAuMDYgaCAxMC4yNiAyOS44NyBjIDE2LjMzLDAgMzIuNjcsMCA0OS4wMSwtMC4wMiA1LjI5LDAgOS42NCwxLjMzIDEzLjM0LDQuMDYgNS4yMiwzLjg1IDguMDEsOS40OCA4LjA3LDE2LjI3IDAuMDUsNi4xIDAuMDUsMTEuMTUgMCwxNS44OSAtMC4xMiwxMC44MiAtNy4wNiwxOS4wNiAtMTYuODcsMjAuMDQgLTIuMDQsMC4yIC00LjA2LDAuMzEgLTYuMDIsMC4zMSAtMTAuMjksMC4wMSAtMjAuNTksMC4wMSAtMzAuODgsMC4wMSAtNS41NywwIC0xMC4wOCw0Ljk4IC0xMC4wOCwxMS4xMiB2IDAgYyAwLDYuMTUgNC41MSwxMS4xMyAxMC4wOSwxMS4xMiAxMS40OCwtMC4wMSAyOS44MywtMC4wNCAzOC45NiwtMC4wOCA0LjU0LC0wLjAyIDkuMTMsLTAuNTYgMTMuNjUsLTEuNjEgOS4wNCwtMi4xIDE1LjQ4LC03LjA0IDE5LjY4LC0xNS4xIDIuOSwtNS41NyA0LjM4LC0xMi4xIDQuNTMsLTE5Ljk5IDAuMTIsLTguMzcgMC4xMywtMTYuMTQgLTAuMDIsLTIzLjc0IHoiCiAgIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgaWQ9InBhdGg3NSIgLz4KPC9nPgo8ZwogICB0cmFuc2Zvcm09Im1hdHJpeCgxLjA3OTgsMCwwLDEuMDc5OCw2NC44Mzc2NTksMTY5Ljg0NTA1KSIKICAgaWQ9Imc4MSI+CjxwYXRoCiAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiCiAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNzkuMjM1LC0zNjMuNjcpIgogICBkPSJtIDI5MC44NSwzNjkuMjIgdiAtMC4zNiBjIC0wLjk2LC02LjExIC01Ljc4LC0xMC43NSAtMTEuNTksLTEwLjc1IC01LjkzLDAgLTEwLjgxLDQuODMgLTExLjY0LDExLjEyIGggMjMuMjMgeiIKICAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogICBpZD0icGF0aDc5IiAvPgo8L2c+CjxnCiAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMDc5OCwwLDAsMS4wNzk4LDEzMi4yODYxNiwxMTkuMTQxMDUpIgogICBpZD0iZzg1Ij4KPHBhdGgKICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNmZmZmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIKICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0MS42OTg4LC0zMTYuNzE1KSIKICAgZD0ibSA0MDQuMjMsMzQ2LjM0IGggLTEuNjEgLTI5Ljg3IGMgLTE2LjMzLDAgLTMyLjY3LDAgLTQ5LjAxLDAuMDIgLTUuMjksMCAtOS42NCwtMS4zMyAtMTMuMzQsLTQuMDYgLTUuMjIsLTMuODUgLTguMDEsLTExLjg0IC04LjA3LC0xOC42MyAtMC4wNSwtNi4xIC0wLjA1LC0xMS4xNSAwLC0xNS44OSAwLjEyLC0xMC44MiA3LjA2LC0xOS4wNiAxNi44NywtMjAuMDUgMi4wNCwtMC4yIDQuMDYsLTAuMzEgNi4wMiwtMC4zMSAxMC4xNywtMC4wMSAyMC4zNCwtMC4wMSAzMC41MSwtMC4wMSA0Ljg1LDAgOS4zLC0zLjU4IDEwLjI1LC04LjgzIDEuMjksLTcuMTUgLTMuNjMsLTEzLjQyIC05Ljg4LC0xMy40MSAtMTEuNDgsMC4wMSAtMjkuODMsMC4wNCAtMzguOTYsMC4wOCAtNC41NCwwLjAyIC05LjEzLDAuNTYgLTEzLjY1LDEuNjEgLTkuMDQsMi4xIC0xNS40OCw3LjA0IC0xOS42OCwxNS4xIC0yLjksNS41NyAtNC4zOCwxMi4xIC00LjUzLDE5Ljk5IC0wLjE1LDguMzcgLTAuMTUsMTYuMTMgMCwyMy43MyAwLjA4LDQuMDQgMC4yNSwxMC42NyAwLjk2LDE0LjYxIDEuNzksOS45OCA2LjMzLDE3LjI2IDEzLjg3LDIyLjI3IDUuODUsMy44OCAxMi43MSw1LjcgMjEuNTYsNS43IDIxLjE1LC0wLjAyIDQyLjI0LC0wLjAzIDYzLjMzLC0wLjAzIGggNS4zNyBjIDEwLjk2LDAuMDIgMTkuODYsLTkuNzkgMTkuODYsLTIxLjg5IHoiCiAgIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgaWQ9InBhdGg4MyIgLz4KPC9nPgo8L3N2Zz4K'
    }
};


/***/ }),

/***/ "./src/Services/BrokerProjectService.ts":
/*!**********************************************!*\
  !*** ./src/Services/BrokerProjectService.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_58110__) => {

__nested_webpack_require_58110__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_58110__.d(__webpack_exports__, {
/* harmony export */   "BrokerProjectService": () => (/* binding */ BrokerProjectService)
/* harmony export */ });
/* harmony import */ var _BrokerClients_MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_58110__(/*! ../BrokerClients/MiningBrokerClient */ "./src/BrokerClients/MiningBrokerClient.ts");
/* import { MIProject } from '@procetra/common';
import { IActivityInfo } from "../Bussiness/IActivityInfo";
import { IDataSet } from "../Bussiness/IDataSet";
import { IProject } from "../Bussiness/IProject";
import { Project } from "../Bussiness/Project"; */

var BrokerProjectService /*  implements IProjectService */ = /** @class */ (function () {
    function BrokerProjectService() {
    }
    BrokerProjectService.prototype.CreateProject = function (name, admin, isPublic, disableCache) {
        if (isPublic === void 0) { isPublic = true; }
        if (disableCache === void 0) { disableCache = false; }
        return new Promise(function (resolve, reject) {
            _BrokerClients_MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient.CreateProject(name, admin, isPublic, disableCache).then(function (project) {
                resolve({
                    project_id: project.project_id,
                    project_name: project.project_name,
                    admin: project.admin,
                    isPublic: project.is_public,
                    diableCache: project.disable_cache,
                    is_data_loaded: project.is_data_loaded,
                    case_count: 0,
                    event_count: 0
                });
            });
        });
    };
    BrokerProjectService.prototype.AddDataSet = function (dataset) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.DataSetFromCvs = function (projectId, datasetId, datasetName, csv, case_column, activity_column, time_stamp, start_date, date_format) {
        return new Promise(function (resolve, reject) {
            var datasetObject = {
                ProjectId: projectId,
                Id: datasetId
            };
            resolve(datasetObject);
        });
    };
    BrokerProjectService.prototype.DataSetFromXes = function (projectId, datasetName, xes) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.CloneDataSet = function (projectId, datasetName) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetDatasetById = function (projectId, id) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.SaveProject = function (projectId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetProjectListFromStorage = function () {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.LoadProject = function (name) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.CloseProject = function (id) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.ConvertCsvToJson = function (csv) {
        return new Promise(function (resolve, reject) {
            /* const data = CvsToJson.Convert(csv, { parseNumbers: true }); */
            return resolve(null);
        });
    };
    BrokerProjectService.prototype.GetDatasetAsData = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetDatasetEventCount = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.CasesStartedPerDay = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.ActivitiesStartedPerDay = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.ActivitiesPerCase = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetVariantsInfo = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetEventsOverTime = function (projectId, datasetId) {
        return new Promise(function (resolve, reject) {
        });
    };
    BrokerProjectService.prototype.GetStartEvents = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetEndEvents = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetTraceCount = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetEventCount = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetActivities = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetMedianCaseDuration = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetMeanCaseDuration = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetDatasetName = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.SetActivityInfo = function (projectId, datasetId, activityInfos) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetActivityInfo = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetAverageCostOfDataset = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetTotalCostOfDataset = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.SetDatasetFilteredData = function (projectId, datasetId, filteredData) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.SetDatasetCondition = function (projectId, datasetId, condition) {
        throw new Error("Method not implemented.");
    };
    //#region Project Methods
    BrokerProjectService.prototype.GetProjects = function (session_id) {
        return _BrokerClients_MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient.GetProjects();
    };
    BrokerProjectService.prototype.GetProjectItems = function (project_id) {
        //return MiningBrokerClient.GetProjectItems(session_id, org_name, project_id);
        return new Promise(function (resolve, reject) {
            resolve([
                {
                    project_item_id: '1',
                    name: 'Test Dataset 2',
                    type: 'Dataset'
                },
                {
                    project_item_id: '2',
                    name: 'İnsan kaynakları',
                    type: 'Dashboard'
                }
            ]);
        });
    };
    BrokerProjectService.prototype.GetProjectById = function (project_id) {
        return _BrokerClients_MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient.GetProjectById(project_id);
    };
    //#endregion
    //#region Analyse Models
    BrokerProjectService.prototype.CreateAnalyseModel = function (project_id, analyse_model_name) {
        return _BrokerClients_MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient.CreateAnalyseModel(project_id, analyse_model_name);
    };
    BrokerProjectService.prototype.GetAnalyseModels = function (project_id) {
        return _BrokerClients_MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient.GetAnalyseModels(project_id);
    };
    //#endregion
    BrokerProjectService.prototype.CreateMapping = function (project_id, mapping_name, mapping_file_name, mapping_data) {
        return _BrokerClients_MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient.CreateMapping(project_id, mapping_name, mapping_file_name, mapping_data);
    };
    return BrokerProjectService;
}());



/***/ }),

/***/ "./src/Services/ConfigService.ts":
/*!***************************************!*\
  !*** ./src/Services/ConfigService.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_67082__) => {

__nested_webpack_require_67082__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_67082__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_67082__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_67082__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);

var ConfigService = /** @class */ (function () {
    function ConfigService() {
    }
    ConfigService.GetEbaBrokerUrl = function () {
        return 'https://bpmgenesis.com/broker/eba';
    };
    ConfigService.GetEnsembleUrl = function () {
        return 'https://bpmgenesis.com/broker/ensemble';
    };
    ConfigService.GetSymbolBrokerUrl = function () {
        //return 'http://apidera.com/symbol';
        return 'https://bpmgenesis.com/broker/symbol';
    };
    ConfigService.GetMiningBrokerUrl = function () {
        var url = '';
        debugger;
        if (_tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.localhost()) {
            url = 'http://localhost:5001/v1/';
        }
        else {
            url = 'https://api.apirealm.com/mining/';
        }
        /*  const url = window.location.origin + '/broker/mining/v1/';
         console.log(url); */
        return url;
    };
    return ConfigService;
}());



/***/ }),

/***/ "./src/Services/IProjectService.ts":
/*!*****************************************!*\
  !*** ./src/Services/IProjectService.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_68808__) => {

__nested_webpack_require_68808__.r(__webpack_exports__);



/***/ }),

/***/ "./src/Services/Services.ts":
/*!**********************************!*\
  !*** ./src/Services/Services.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_69103__) => {

__nested_webpack_require_69103__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_69103__.d(__webpack_exports__, {
/* harmony export */   "Services": () => (/* binding */ Services)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_69103__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_69103__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);

var Services = /** @class */ (function () {
    function Services() {
    }
    Object.defineProperty(Services, "ProjectService", {
        get: function () {
            try {
                return _tuval_core__WEBPACK_IMPORTED_MODULE_0__.instance.resolve('IProjectService_Thread');
            }
            catch (_a) {
                throw 'Project Service Not Found.';
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Services, "StateService", {
        get: function () {
            try {
                return _tuval_core__WEBPACK_IMPORTED_MODULE_0__.instance.resolve('IStateService');
            }
            catch (_a) {
                throw 'State Service Not Found.';
            }
        },
        enumerable: false,
        configurable: true
    });
    return Services;
}());



/***/ }),

/***/ "./src/Services/index.ts":
/*!*******************************!*\
  !*** ./src/Services/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_70715__) => {

__nested_webpack_require_70715__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_70715__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* reexport safe */ _ConfigService__WEBPACK_IMPORTED_MODULE_0__.ConfigService),
/* harmony export */   "BrokerProjectService": () => (/* reexport safe */ _BrokerProjectService__WEBPACK_IMPORTED_MODULE_1__.BrokerProjectService),
/* harmony export */   "Services": () => (/* reexport safe */ _Services__WEBPACK_IMPORTED_MODULE_3__.Services)
/* harmony export */ });
/* harmony import */ var _ConfigService__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_70715__(/*! ./ConfigService */ "./src/Services/ConfigService.ts");
/* harmony import */ var _BrokerProjectService__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_70715__(/*! ./BrokerProjectService */ "./src/Services/BrokerProjectService.ts");
/* harmony import */ var _IProjectService__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_70715__(/*! ./IProjectService */ "./src/Services/IProjectService.ts");
/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_70715__(/*! ./Services */ "./src/Services/Services.ts");






/***/ }),

/***/ "./src/Views/Badge.ts":
/*!****************************!*\
  !*** ./src/Views/Badge.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_72081__) => {

__nested_webpack_require_72081__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_72081__.d(__webpack_exports__, {
/* harmony export */   "Badge": () => (/* binding */ Badge)
/* harmony export */ });
/* harmony import */ var _RegularText__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_72081__(/*! ./RegularText */ "./src/Views/RegularText.ts");

function Badge(text, color, backColor) {
    return ((0,_RegularText__WEBPACK_IMPORTED_MODULE_0__.RegularText)(text).padding('0 0.5rem')
        //.border(`1px solid ${color}`)
        .lineHeight('1').fontSize('0.65rem')
        .marginHorizontal('10px')
        .height('1.5rem')
        .backgroundColor(backColor)
        .foregroundColor(color)
        .cornerRadius(10).fontWeight('500')
        .shadow('rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;')
        .fontFamily('-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'));
}


/***/ }),

/***/ "./src/Views/CalculationMethodText.ts":
/*!********************************************!*\
  !*** ./src/Views/CalculationMethodText.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_73339__) => {

__nested_webpack_require_73339__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_73339__.d(__webpack_exports__, {
/* harmony export */   "CalculationMethodText": () => (/* binding */ CalculationMethodText)
/* harmony export */ });
/* harmony import */ var _Headline5__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_73339__(/*! ./Headline5 */ "./src/Views/Headline5.ts");

function CalculationMethodText(value) {
    return ((0,_Headline5__WEBPACK_IMPORTED_MODULE_0__.Headline5)(value).fontFamily('Proxima Nova, sans serif').foregroundColor('#AAA'));
}


/***/ }),

/***/ "./src/Views/CancelButton.ts":
/*!***********************************!*\
  !*** ./src/Views/CancelButton.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_74139__) => {

__nested_webpack_require_74139__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_74139__.d(__webpack_exports__, {
/* harmony export */   "CancelButton": () => (/* binding */ CancelButton)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_74139__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_74139__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

var CancelButton = function (text) { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(text))
    .cursor('pointer')
    .minWidth('64px')
    .foregroundColor(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Color.gray500)); };


/***/ }),

/***/ "./src/Views/DesktopPageTitle.ts":
/*!***************************************!*\
  !*** ./src/Views/DesktopPageTitle.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_75191__) => {

__nested_webpack_require_75191__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_75191__.d(__webpack_exports__, {
/* harmony export */   "DesktopPageTitle": () => (/* binding */ DesktopPageTitle)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_75191__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_75191__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function DesktopPageTitle(icon, text) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(icon).size(30).foregroundColor('gray'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(text)
        .fontFamily('Proxima Nova')
        .fontSize('22px')
        .foregroundColor('#333333'))
        .height() // auto
        .width() //auto
    );
}


/***/ }),

/***/ "./src/Views/FormView.ts":
/*!*******************************!*\
  !*** ./src/Views/FormView.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_76366__) => {

__nested_webpack_require_76366__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_76366__.d(__webpack_exports__, {
/* harmony export */   "FormView": () => (/* binding */ FormView)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_76366__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_76366__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Resources_Resources__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_76366__(/*! ../Resources/Resources */ "./src/Resources/Resources.ts");


var FormView = function (_a) {
    var content = _a.content;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIScene)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIImage)(_Resources_Resources__WEBPACK_IMPORTED_MODULE_1__.Resources.Icons.ApplicationIcon).width(25).opacity(0.8).position(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.PositionTypes.Absolute).left('10px').top('10px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Procetra').fontSize(16).fontWeight('700')).height(50), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })(content)
        // UIScene içerisine yayılması için
        .width('100%'))));
};


/***/ }),

/***/ "./src/Views/Headline4.ts":
/*!********************************!*\
  !*** ./src/Views/Headline4.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_78067__) => {

__nested_webpack_require_78067__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_78067__.d(__webpack_exports__, {
/* harmony export */   "Headline4": () => (/* binding */ Headline4)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_78067__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_78067__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function Headline4(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('34.6538px').kerning('0.25px'));
}


/***/ }),

/***/ "./src/Views/Headline5.ts":
/*!********************************!*\
  !*** ./src/Views/Headline5.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_78994__) => {

__nested_webpack_require_78994__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_78994__.d(__webpack_exports__, {
/* harmony export */   "Headline5": () => (/* binding */ Headline5)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_78994__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_78994__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function Headline5(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('24.4615px').kerning('0px'));
}


/***/ }),

/***/ "./src/Views/PageButton.ts":
/*!*********************************!*\
  !*** ./src/Views/PageButton.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_79922__) => {

__nested_webpack_require_79922__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_79922__.d(__webpack_exports__, {
/* harmony export */   "PageButton": () => (/* binding */ PageButton)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_79922__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_79922__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function PageButton(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value)
        .fontFamily('Source Sans Pro')
        .fontSize(16)
        .lineHeight('1.75'))
        .cornerRadius(5)
        .height(30)
        .foregroundColor('#fff')
        .backgroundColor('#028AEB')
        .transition('all 150ms ease-in-out')
        .shadow({
        default: '0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
        active: '0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%)'
    })));
}


/***/ }),

/***/ "./src/Views/PageTitle.ts":
/*!********************************!*\
  !*** ./src/Views/PageTitle.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_81301__) => {

__nested_webpack_require_81301__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_81301__.d(__webpack_exports__, {
/* harmony export */   "PageTitle": () => (/* binding */ PageTitle)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_81301__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_81301__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DesktopPageTitle__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_81301__(/*! ./DesktopPageTitle */ "./src/Views/DesktopPageTitle.ts");
/* harmony import */ var _PortalPageTitle__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_81301__(/*! ./PortalPageTitle */ "./src/Views/PortalPageTitle.ts");



function PageTitle(icon, text) {
    if (_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.ApplicationMode === _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ApplicationModes.Desktop) {
        return (0,_DesktopPageTitle__WEBPACK_IMPORTED_MODULE_1__.DesktopPageTitle)(icon, text);
    }
    else {
        return (0,_PortalPageTitle__WEBPACK_IMPORTED_MODULE_2__.PortalPageTitle)(icon, text);
    }
}


/***/ }),

/***/ "./src/Views/PortalFilterBarWidget.ts":
/*!********************************************!*\
  !*** ./src/Views/PortalFilterBarWidget.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_82799__) => {

__nested_webpack_require_82799__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_82799__.d(__webpack_exports__, {
/* harmony export */   "PortalFilterBarWidget": () => (/* binding */ PortalFilterBarWidget)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_82799__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_82799__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function PortalFilterBarWidget(params) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(params.value.toString()).fontSize('40px').foregroundColor('rgb(147,205,221)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('monts').foregroundColor('rgb(251,192,1)').fontSize('10px').fontWeight('700'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('AVG').foregroundColor('#AAA'))), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Duration').foregroundColor('rgb(147,205,221)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('15 - 40 monts').foregroundColor('#AAA')))
        .paddingRight('50px')
        .width() //auto
    );
}


/***/ }),

/***/ "./src/Views/PortalPageTitle.ts":
/*!**************************************!*\
  !*** ./src/Views/PortalPageTitle.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_84729__) => {

__nested_webpack_require_84729__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_84729__.d(__webpack_exports__, {
/* harmony export */   "PortalPageTitle": () => (/* binding */ PortalPageTitle)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_84729__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_84729__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function PortalPageTitle(icon, text) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(icon).size(30).foregroundColor('#333333'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(text)
        .fontWeight('700')
        .fontFamily('Ubuntu, sans-serif')
        .fontSize('30px')
        .foregroundColor('#495057'))
        .marginLeft('10px')
        .width() //auto
    );
}


/***/ }),

/***/ "./src/Views/PortalSideMenu.ts":
/*!*************************************!*\
  !*** ./src/Views/PortalSideMenu.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_85964__) => {

__nested_webpack_require_85964__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_85964__.d(__webpack_exports__, {
/* harmony export */   "PortalSideMenu": () => (/* binding */ PortalSideMenu)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_85964__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_85964__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function PortalSideMenu(params) {
    var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.bindState)(0), selectedIndex = _a[0], setSelectedIndex = _a[1];
    if (_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal) {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(params.items)(function (item, index) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(item.icon).size(26), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(item.name).fontSize('12px').fontFamily('-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'))
                .padding(5)
                .background(selectedIndex === index ? (params.second ? '#777b80' : '#52565b') : { hover: '#eee' })
                .borderBottom(selectedIndex === index ? '2px solid #e7b54a' : '2px solid transparent')
                .cursor('pointer')
                .foregroundColor(selectedIndex === index ? 'white' : { hover: '#333', default: 'white' })
                .height(80)
                .onClick(function () { setSelectedIndex(index); params.selectedAction(index); })
                .visible(item.isVisible());
        })).width()
            .initial({ width: 0 }).animate({ width: params.second ? 75 : 80 })
            .background(params.second ? '#52565b' : '#212932')
            .shadow(params.second ? 'inset 24px 0 20px -20px #373b40' : '')
            .borderBottom('2px solid #212932'));
    }
}


/***/ }),

/***/ "./src/Views/ProjectMainMenu.ts":
/*!**************************************!*\
  !*** ./src/Views/ProjectMainMenu.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_88470__) => {

__nested_webpack_require_88470__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_88470__.d(__webpack_exports__, {
/* harmony export */   "ProjectMainMenu": () => (/* binding */ ProjectMainMenu)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_88470__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_88470__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Resources_Resources__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_88470__(/*! ../Resources/Resources */ "./src/Resources/Resources.ts");
/* harmony import */ var _Texts__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_88470__(/*! ./Texts */ "./src/Views/Texts.ts");



/***
 * Proje sayfalarının başlığı, menulerin sorumlusu
 */
var ProjectMainMenu = function (project_name, model_name, eventCount, caseCount, miningModels, OnMiningModelChanged, menu, modelMenu, queryMenu) { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIImage)(_Resources_Resources__WEBPACK_IMPORTED_MODULE_1__.Resources.Icons.ApplicationIcon).width(25).opacity(0.8).position(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.PositionTypes.Absolute).left('10px').top('10px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Procetra').fontSize(16).fontWeight('700')).height(40), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\d1fd').size(30).marginBottom('10px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.AnimHeadline5)(project_name).lineHeight(35).whiteSpace('nowrap'), _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(miningModels)(function (item) {
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(item.model_name).onClick(function () { return OnMiningModelChanged(item); })).padding(5);
}))((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)(model_name).whiteSpace('nowrap'))
    .cornerRadius(5)
    .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 5).cursor('pointer')
    .border('dotted 1px var(--sub-border-color)')).marginLeft('5px').marginRight('10px').width(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VDivider)().width(1).height('60%').backgroundColor('rgb(120,120,120,50%)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 10 })(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(menu)(function (item) {
    return item.seperator ?
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HDivider)()
        :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)(item.title)
                .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 16))
                .minHeight(32);
}))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('Project').fontSize(16).fontWeight('500'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e5c5').size(16))
    .padding(3)
    .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 8)
    .paddingLeft('14px')
    .transition('all .3s cubic-bezier(0.55, 0, 0.55, 0.2)')
    .backgroundColor({ focus: 'rgb(120,120,120,50%)' }).tabIndex(0)).cursor('pointer').border('dotted 1px var(--sub-border-color)').transition('border .3s').cornerRadius(5).overflow('hidden'), _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(modelMenu)(function (menuItem) {
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(menuItem.icon).size(16), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(menuItem.title)).onClick(function () { menuItem.onClick(menuItem); });
}))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('Model').fontSize(16).fontWeight('500'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e5c5').size(16)).padding(3).backgroundColor({ focus: 'rgb(120,120,120,50%)' }).tabIndex(0)).cursor('pointer').border('dotted 1px var(--sub-border-color)').transition('border .3s').cornerRadius(5), 
// Query Menu
_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(queryMenu)(function (menuItem) {
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(menuItem.icon).size(16), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(menuItem.title));
}))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('Query').fontSize(16).fontWeight('500'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e5c5').size(16)).padding(3).backgroundColor({ focus: 'rgb(120,120,120,50%)' }).tabIndex(0)).cursor('pointer').border('dotted 1px var(--sub-border-color)').transition('border .3s').cornerRadius(5)).width().height(), //auto,
(0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VDivider)().width(1).height('60%').backgroundColor('rgb(120,120,120,50%)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e153').size(24).foregroundColor('#666'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)(eventCount.toLocaleString('en-EN')).fontFamily("'Source Sans Pro', Arial, sans-serif").fontWeight('600').fontSize(25).foregroundColor('#666').lineHeight('1em'), (0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('EVENTS').fontFamily("'Source Sans Pro', Arial, sans-serif").fontWeight('600').fontSize(14).foregroundColor('#666')).width(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VDivider)().height('60%').backgroundColor('rgb(120,120,120,50%)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\d25b').size(24).foregroundColor('#666'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)(caseCount.toLocaleString('en-EN')).fontFamily("'Source Sans Pro', Arial, sans-serif").fontWeight('600').fontSize(25).foregroundColor('#666').lineHeight('1em'), (0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('CASES').fontFamily("'Source Sans Pro', Arial, sans-serif").fontWeight('600').fontSize(14).foregroundColor('#666')).width(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 10 })(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(menu)(function (item) {
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HDivider)();
}
/*  item.seperator ?
     HDivider()
     :
     HStack({ alignment: cLeading, spacing: 10 })(
         RegularText(item.title)
     ) */
))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('Project').fontSize(16).fontWeight('500'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e5c5').size(16)).padding(5).backgroundColor({ focus: 'rgb(120,120,120,50%)' }).tabIndex(0).cornerRadius(5)).cursor('pointer').border('solid 1px var(--sub-border-color)').transition('border .3s'), _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(modelMenu)(function (menuItem) {
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(menuItem.icon).size(16), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(menuItem.title)).onClick(function () { menuItem.onClick(menuItem); });
}))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('Model').fontSize(16).fontWeight('500'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e5c5').size(16)).padding(5).backgroundColor({ focus: 'rgb(120,120,120,50%)' }).tabIndex(0).cornerRadius(5)).cursor('pointer').border('solid 1px var(--sub-border-color)').transition('border .3s'), 
// Query Menu
_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(queryMenu)(function (menuItem) {
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(menuItem.icon).size(16), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(menuItem.title));
}))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('Query').fontSize(16).fontWeight('500'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e5c5').size(16)).padding(5).backgroundColor({ focus: 'rgb(120,120,120,50%)' }).tabIndex(0).cornerRadius(5)).cursor('pointer').border('solid 1px var(--sub-border-color)').transition('border .3s')).visible(false).width())
    .height(80)
    .variable('--sub-border-color', { default: 'transparent', hover: '#14a9d5' }))
    .height()
    .background('rgb(255,255,255,20%)')
    .marginBottom('10px')
    .shadow('0 0 8px 0 #ccc')
    .visible(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsDesktop)); };


/***/ }),

/***/ "./src/Views/RegularText.ts":
/*!**********************************!*\
  !*** ./src/Views/RegularText.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_98901__) => {

__nested_webpack_require_98901__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_98901__.d(__webpack_exports__, {
/* harmony export */   "RegularText": () => (/* binding */ RegularText)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_98901__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_98901__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function RegularText(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('"Proxima Nova","Helvetica Neue",Helvetica,Arial,sans-serif').fontSize('14px').lineHeight('1.42857').foregroundColor('#333'));
}


/***/ }),

/***/ "./src/Views/SectionContent.ts":
/*!*************************************!*\
  !*** ./src/Views/SectionContent.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_99896__) => {

__nested_webpack_require_99896__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_99896__.d(__webpack_exports__, {
/* harmony export */   "SectionContent": () => (/* binding */ SectionContent)
/* harmony export */ });
/* harmony import */ var _RegularText__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_99896__(/*! ./RegularText */ "./src/Views/RegularText.ts");

function SectionContent(value) {
    return ((0,_RegularText__WEBPACK_IMPORTED_MODULE_0__.RegularText)(value));
}


/***/ }),

/***/ "./src/Views/SectionHeadline.ts":
/*!**************************************!*\
  !*** ./src/Views/SectionHeadline.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_100634__) => {

__nested_webpack_require_100634__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_100634__.d(__webpack_exports__, {
/* harmony export */   "SectionHeadline": () => (/* binding */ SectionHeadline)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_100634__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_100634__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function SectionHeadline(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('"Proxima Nova","Helvetica Neue",Helvetica,Arial,sans-serif').fontSize('20px').lineHeight('1.42857').foregroundColor('#333'));
}


/***/ }),

/***/ "./src/Views/SectionSubHeadline.ts":
/*!*****************************************!*\
  !*** ./src/Views/SectionSubHeadline.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_101657__) => {

__nested_webpack_require_101657__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_101657__.d(__webpack_exports__, {
/* harmony export */   "SectionSubHeadline": () => (/* binding */ SectionSubHeadline)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_101657__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_101657__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function SectionSubHeadline(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('"Proxima Nova","Helvetica Neue",Helvetica,Arial,sans-serif').fontSize('16px').fontWeight('normal').lineHeight('1.42857').foregroundColor('#666666'));
}


/***/ }),

/***/ "./src/Views/SectionTitle.ts":
/*!***********************************!*\
  !*** ./src/Views/SectionTitle.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_102689__) => {

__nested_webpack_require_102689__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_102689__.d(__webpack_exports__, {
/* harmony export */   "SectionTitle": () => (/* binding */ SectionTitle)
/* harmony export */ });
/* harmony import */ var _RegularText__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_102689__(/*! ./RegularText */ "./src/Views/RegularText.ts");

function SectionTitle(value) {
    return ((0,_RegularText__WEBPACK_IMPORTED_MODULE_0__.RegularText)(value).fontWeight('500'));
}


/***/ }),

/***/ "./src/Views/SelectAnalysisView.ts":
/*!*****************************************!*\
  !*** ./src/Views/SelectAnalysisView.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_103451__) => {

__nested_webpack_require_103451__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_103451__.d(__webpack_exports__, {
/* harmony export */   "SelectAnalysisView": () => (/* binding */ SelectAnalysisView)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_103451__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_103451__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageTitle__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_103451__(/*! ./PageTitle */ "./src/Views/PageTitle.ts");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_103451__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_103451__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_103451__(/*! ./Badge */ "./src/Views/Badge.ts");
/* harmony import */ var _RegularText__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_103451__(/*! ./RegularText */ "./src/Views/RegularText.ts");





var menuItems = [
    {
        icon: '\\f091',
        title: 'Add to model',
        onClick: function (item) { return console.log(item); }
    },
    {
        icon: '\\d2da',
        title: 'Tags',
        onClick: function (item) { return console.log(item); }
    },
    {
        icon: '\\f06b',
        title: 'Help',
        onClick: function (item) { return console.log(item); }
    }
];
var NewAnalyseTypes = [
    {
        id: 'process_overview',
        icon: '\\d2dc',
        title: 'Process Overview',
        description: 'An overhead view of your process',
        link: function (project) { return "/app(procetra)/modules/process-overview/overview/" + project.project_id; }
    },
    {
        id: 'dashboard',
        icon: '\\d2db',
        title: 'Dashboard',
        description: 'A new dashboard waiting to be built.',
        // controller: new ProcessDashboardController(),
    },
    {
        id: 'process_discover',
        icon: '\\d320',
        title: 'Discover',
        description: 'To understand and analyze your business',
        //controller: new ProcessExplorerController(),
    },
    {
        id: 'monitoring',
        icon: '\\d2c9',
        title: 'Monitoring',
        badge: 'New',
        description: 'Follow the process indicators',
        // controller: new MonitoringController(),
    },
    {
        id: 'statistics',
        icon: '\\d31a',
        title: 'Statistics',
        badge: 'Updated',
        description: 'General statistics of the process',
        // controller: new ProcessStatisticController(),
    },
    {
        id: 'variant_explorer',
        icon: '\\d203',
        title: 'Variant Explorer',
        badge: 'New',
        // controller: new VariantExplorerController(),
    },
    {
        id: 'loops',
        icon: '\\e028',
        title: 'Loops',
        badge: 'Preview',
        //controller: new LoopsController(),
    },
    {
        id: 'automation',
        icon: '\\d271',
        title: 'Automation',
        // controller: new AutomationController(),
    },
    {
        id: 'case_explorer',
        icon: '\\d25b',
        title: 'Case Explorer',
        // controller: new CaseExplorerController(),
    },
    {
        id: 'difference_analyse',
        icon: '\\d2a7',
        title: 'Difference Analyse'
    },
    {
        id: 'benchmarking',
        icon: '\\d218',
        title: 'Benchmarking'
    },
    {
        id: 'lead_times',
        icon: '\\d36b',
        title: 'Lead Times'
    },
    {
        id: 'process_steps',
        icon: '\\efe4',
        title: 'Process Steps'
    },
    {
        id: 'complience_analysis',
        icon: '\\d219',
        title: 'Complience Analysis'
    },
    {
        id: 'comformance_check',
        icon: '\\d21a',
        title: 'Comformance Check'
    },
    {
        id: 'social',
        icon: '\\d21c',
        title: 'Social'
    },
    {
        id: 'process_ai',
        icon: '\\d273',
        title: 'Process AI'
    },
    {
        id: 'costs',
        icon: '\\d23c',
        title: 'Cost'
    },
    {
        id: 'forecast',
        icon: '\\d229',
        title: 'Forecast'
    },
    {
        id: '',
        icon: '\\d222',
        title: 'Mosts'
    },
    {
        id: 'bottlenecks',
        icon: '\\d246',
        title: 'Bottlenecks'
    },
    {
        id: 'durations',
        icon: '\\d207',
        title: 'Durations'
    },
    {
        id: 'breakdown',
        icon: '\\d210',
        title: 'Breakdown'
    },
    {
        id: 'distribution',
        icon: '\\d27c',
        title: 'Distribution'
    },
    {
        id: 'metrics',
        icon: '\\d290',
        title: 'Metrics'
    }
];
function searchBox(_a) {
    var onSearchTextChanged = _a.onSearchTextChanged;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\d22c')
        .size(20)
        .paddingRight('10px')
        .paddingLeft('10px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TextField)().fontSize('1rem')
        .backgroundColor('transparent')
        .foregroundColor('#495057')
        .onTextChange(function (text) { setTimeout(function () { return onSearchTextChanged(text); }, 100); }))
        .width()
        .padding('0.50rem 0.50rem 0.50rem 0rem')
        .initial({ width: '50%', backgroundColor: 'rgba(255,255,255,0.3)' }).animate({ width: '50%' }).focus({ width: '80%', backgroundColor: 'rgba(255,255,255,0.6)' })
        .paddingRight('5px')
        .overflow('hidden')
        .cornerRadius(20)
        .border({ default: '1px solid #ced4da', focus: 'solid 1px #6366F1' })
        .shadow({ default: '', focus: '0 0 0 0.2rem #c7d2fe' })
        //.transition('background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s')
        //.backgroundColor('rgba(255,255,255,0.3)')
        .height()
        .tabIndex(0)).height());
}
function NewAnalyseModelTitleBox(tag, project, _a) {
    var id = _a.id, icon = _a.icon, title = _a.title, description = _a.description, link = _a.link, badge = _a.badge;
    return function (_a) {
        var controller = _a.controller;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)(
        // Menu stack
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)(
        // Badge('New', '#22C55E99', '#ffffff66'),
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Case)(badge, {
            'New': (0,_Badge__WEBPACK_IMPORTED_MODULE_3__.Badge)(badge, 'white', '#22C55E99'),
            'Updated': (0,_Badge__WEBPACK_IMPORTED_MODULE_3__.Badge)(badge, 'white', '#3B82F699'),
            'Preview': (0,_Badge__WEBPACK_IMPORTED_MODULE_3__.Badge)(badge, 'white', '#F59E0B99')
        }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(menuItems)(function (item) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(item.icon).size(16), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(item.title)).onClick(function (e) { item.onClick(null); });
        }))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\d2c6').size(20))
            .cursor('pointer')
            .border('solid 1px var(--sub-border-color)')
            .transition('border .3s')
            .cornerRadius(5)
            .marginRight('10px')).height(), //auto
        // Analysis Icon
        icon && (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(icon).size(50).foregroundColor('var(--sub-icon-color)').marginBottom('10px'), 
        // Analysis Name
        (0,_RegularText__WEBPACK_IMPORTED_MODULE_4__.RegularText)(title).fontSize('18px').searchWords([tag]), 
        // Analysis Description
        description && (0,_RegularText__WEBPACK_IMPORTED_MODULE_4__.RegularText)(description).fontSize('12px'))
            .marginTop('10px')
            .marginRight('10px')
            .cornerRadius(10)
            .width(240).height(150)
            .backgroundColor('rgba(255,255,255,0.3)')
            .shadow('rgb(0 0 0 / 2%) 0px 1px 3px 0px, rgb(27 31 35 / 15%) 0px 0px 0px 1px')
            .initial({ opacity: 0 }).animate({ opacity: 1 })
            .onClick(function () { return controller.navigotor(link(project)); })
            .variable('--sub-border-color', { default: 'transparent', hover: '#14a9d5' })
            .variable('--sub-icon-color', { default: '#33333366', hover: '#2baab5' })
            .variable('--sub-icon-size', { default: '50px', hover: '60px' })
            .cursor('pointer'));
    };
}
function SelectAnalysisView(project) {
    var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.bindState)(''), searchText = _a[0], setSearchText = _a[1];
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_PageTitle__WEBPACK_IMPORTED_MODULE_1__.PageTitle)('\\d27e', 'Mining Modules')).height().paddingTop('20px'), searchBox({ onSearchTextChanged: function (text) { return setSearchText(text); } }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ScrollView)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTop, spacing: 10 }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(NewAnalyseTypes)(function (item) {
        return (_tuval_core__WEBPACK_IMPORTED_MODULE_2__.is.nullOrEmpty(searchText) ||
            item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
            && NewAnalyseModelTitleBox(searchText, project, item);
    })).wrap('wrap').height().padding(10))));
}


/***/ }),

/***/ "./src/Views/Texts.ts":
/*!****************************!*\
  !*** ./src/Views/Texts.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_113969__) => {

__nested_webpack_require_113969__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_113969__.d(__webpack_exports__, {
/* harmony export */   "Headline1": () => (/* binding */ Headline1),
/* harmony export */   "Headline2": () => (/* binding */ Headline2),
/* harmony export */   "Headline3": () => (/* binding */ Headline3),
/* harmony export */   "Headline4": () => (/* binding */ Headline4),
/* harmony export */   "Headline5": () => (/* binding */ Headline5),
/* harmony export */   "AnimHeadline5": () => (/* binding */ AnimHeadline5),
/* harmony export */   "Headline6": () => (/* binding */ Headline6),
/* harmony export */   "Subtitle1": () => (/* binding */ Subtitle1),
/* harmony export */   "Subtitle2": () => (/* binding */ Subtitle2),
/* harmony export */   "Body1": () => (/* binding */ Body1),
/* harmony export */   "Body2": () => (/* binding */ Body2),
/* harmony export */   "ButtonText": () => (/* binding */ ButtonText),
/* harmony export */   "Caption": () => (/* binding */ Caption),
/* harmony export */   "Overline": () => (/* binding */ Overline),
/* harmony export */   "RegularText": () => (/* binding */ RegularText),
/* harmony export */   "SectionTitle": () => (/* binding */ SectionTitle),
/* harmony export */   "SectionContent": () => (/* binding */ SectionContent),
/* harmony export */   "SectionHeadline": () => (/* binding */ SectionHeadline),
/* harmony export */   "SectionSubHeadline": () => (/* binding */ SectionSubHeadline)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_113969__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_113969__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function Headline1(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('lighter').fontSize('97.8462px').kerning('-1.5px'));
}
function Headline2(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('lighter').fontSize('61.1538px').kerning('-0.5px'));
}
function Headline3(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('48.9231px').kerning('0px'));
}
function Headline4(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('34.6538px').kerning('0.25px'));
}
function Headline5(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('24.4615px').kerning('0px'));
}
function AnimHeadline5(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').kerning('0px').initial({ fontSize: '1px' }).animate({ fontSize: '25px' }));
}
function Headline6(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('500').fontSize('20.3846px').kerning('0.15px'));
}
function Subtitle1(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('16.3077px').kerning('0.15px'));
}
function Subtitle2(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('500').fontSize('14.2692px').kerning('0.1px'));
}
function Body1(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('16.3077px').kerning('0.5px'));
}
function Body2(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('14.2692px').kerning('0.25px'));
}
function ButtonText(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('500').fontSize('14.2692px').kerning('1.25px').textTransform('uppercase'));
}
function Caption(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('12.2308px').kerning('0.4px'));
}
function Overline(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('10.1923px').kerning('1.5px').textTransform('uppercase'));
}
function RegularText(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('"Proxima Nova","Helvetica Neue",Helvetica,Arial,sans-serif').fontSize('14px').lineHeight('1.42857').foregroundColor('#333'));
}
function SectionTitle(value) {
    return (RegularText(value).fontWeight('500'));
}
function SectionContent(value) {
    return (RegularText(value));
}
function SectionHeadline(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('"Proxima Nova","Helvetica Neue",Helvetica,Arial,sans-serif').fontSize('20px').lineHeight('1.42857').foregroundColor('#333'));
}
function SectionSubHeadline(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('"Proxima Nova","Helvetica Neue",Helvetica,Arial,sans-serif').fontSize('16px').fontWeight('normal').lineHeight('1.42857').foregroundColor('#666666'));
}


/***/ }),

/***/ "./src/Views/TileBox.ts":
/*!******************************!*\
  !*** ./src/Views/TileBox.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_119742__) => {

__nested_webpack_require_119742__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_119742__.d(__webpack_exports__, {
/* harmony export */   "TileBox": () => (/* binding */ TileBox)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_119742__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_119742__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function TileBox() {
    var content = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i];
    }
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack.apply(void 0, content).padding(10)
        .backgroundColor('rgb(255,255,255,60%)')
        .cornerRadius('12px')
        .shadow({ default: '0 1px 3px 0 rgb(0 0 0 / 10%), 0 2px 5px 0 rgb(0 0 0 / 5%)', focus: '0 0 3px 1px #00c3ff' })
        .tabIndex(0)).padding(2));
}


/***/ }),

/***/ "./src/Views/TileBoxHeaderText.ts":
/*!****************************************!*\
  !*** ./src/Views/TileBoxHeaderText.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_121032__) => {

__nested_webpack_require_121032__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_121032__.d(__webpack_exports__, {
/* harmony export */   "TileBoxHeaderText": () => (/* binding */ TileBoxHeaderText)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_121032__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_121032__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Headline5__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_121032__(/*! ./Headline5 */ "./src/Views/Headline5.ts");


function TileBoxHeaderText(value) {
    if (_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal) {
        return ((0,_Headline5__WEBPACK_IMPORTED_MODULE_1__.Headline5)(value).fontFamily('Ubuntu, sans-serif').padding('20px 30px 0 30px').fontWeight('700').foregroundColor('#495057DD'));
    }
    else {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).padding('20px 30px 0 30px').fontFamily('Proxima Nova').fontSize('14px').foregroundColor('#888888'));
    }
}


/***/ }),

/***/ "./src/Views/index.ts":
/*!****************************!*\
  !*** ./src/Views/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_122403__) => {

__nested_webpack_require_122403__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_122403__.d(__webpack_exports__, {
/* harmony export */   "CalculationMethodText": () => (/* reexport safe */ _CalculationMethodText__WEBPACK_IMPORTED_MODULE_0__.CalculationMethodText),
/* harmony export */   "DesktopPageTitle": () => (/* reexport safe */ _DesktopPageTitle__WEBPACK_IMPORTED_MODULE_1__.DesktopPageTitle),
/* harmony export */   "Headline4": () => (/* reexport safe */ _Headline4__WEBPACK_IMPORTED_MODULE_2__.Headline4),
/* harmony export */   "Headline5": () => (/* reexport safe */ _Headline5__WEBPACK_IMPORTED_MODULE_3__.Headline5),
/* harmony export */   "PageTitle": () => (/* reexport safe */ _PageTitle__WEBPACK_IMPORTED_MODULE_4__.PageTitle),
/* harmony export */   "PortalPageTitle": () => (/* reexport safe */ _PortalPageTitle__WEBPACK_IMPORTED_MODULE_5__.PortalPageTitle),
/* harmony export */   "PortalSideMenu": () => (/* reexport safe */ _PortalSideMenu__WEBPACK_IMPORTED_MODULE_6__.PortalSideMenu),
/* harmony export */   "RegularText": () => (/* reexport safe */ _RegularText__WEBPACK_IMPORTED_MODULE_7__.RegularText),
/* harmony export */   "SectionContent": () => (/* reexport safe */ _SectionContent__WEBPACK_IMPORTED_MODULE_8__.SectionContent),
/* harmony export */   "SectionHeadline": () => (/* reexport safe */ _SectionHeadline__WEBPACK_IMPORTED_MODULE_9__.SectionHeadline),
/* harmony export */   "SectionSubHeadline": () => (/* reexport safe */ _SectionSubHeadline__WEBPACK_IMPORTED_MODULE_10__.SectionSubHeadline),
/* harmony export */   "SectionTitle": () => (/* reexport safe */ _SectionTitle__WEBPACK_IMPORTED_MODULE_11__.SectionTitle),
/* harmony export */   "TileBox": () => (/* reexport safe */ _TileBox__WEBPACK_IMPORTED_MODULE_12__.TileBox),
/* harmony export */   "TileBoxHeaderText": () => (/* reexport safe */ _TileBoxHeaderText__WEBPACK_IMPORTED_MODULE_13__.TileBoxHeaderText),
/* harmony export */   "PortalFilterBarWidget": () => (/* reexport safe */ _PortalFilterBarWidget__WEBPACK_IMPORTED_MODULE_14__.PortalFilterBarWidget),
/* harmony export */   "PageButton": () => (/* reexport safe */ _PageButton__WEBPACK_IMPORTED_MODULE_15__.PageButton),
/* harmony export */   "Badge": () => (/* reexport safe */ _Badge__WEBPACK_IMPORTED_MODULE_16__.Badge),
/* harmony export */   "CancelButton": () => (/* reexport safe */ _CancelButton__WEBPACK_IMPORTED_MODULE_17__.CancelButton),
/* harmony export */   "FormView": () => (/* reexport safe */ _FormView__WEBPACK_IMPORTED_MODULE_18__.FormView),
/* harmony export */   "SelectAnalysisView": () => (/* reexport safe */ _SelectAnalysisView__WEBPACK_IMPORTED_MODULE_19__.SelectAnalysisView),
/* harmony export */   "ProjectMainMenu": () => (/* reexport safe */ _ProjectMainMenu__WEBPACK_IMPORTED_MODULE_20__.ProjectMainMenu)
/* harmony export */ });
/* harmony import */ var _CalculationMethodText__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_122403__(/*! ./CalculationMethodText */ "./src/Views/CalculationMethodText.ts");
/* harmony import */ var _DesktopPageTitle__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_122403__(/*! ./DesktopPageTitle */ "./src/Views/DesktopPageTitle.ts");
/* harmony import */ var _Headline4__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_122403__(/*! ./Headline4 */ "./src/Views/Headline4.ts");
/* harmony import */ var _Headline5__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_122403__(/*! ./Headline5 */ "./src/Views/Headline5.ts");
/* harmony import */ var _PageTitle__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_122403__(/*! ./PageTitle */ "./src/Views/PageTitle.ts");
/* harmony import */ var _PortalPageTitle__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_122403__(/*! ./PortalPageTitle */ "./src/Views/PortalPageTitle.ts");
/* harmony import */ var _PortalSideMenu__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_122403__(/*! ./PortalSideMenu */ "./src/Views/PortalSideMenu.ts");
/* harmony import */ var _RegularText__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_122403__(/*! ./RegularText */ "./src/Views/RegularText.ts");
/* harmony import */ var _SectionContent__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_122403__(/*! ./SectionContent */ "./src/Views/SectionContent.ts");
/* harmony import */ var _SectionHeadline__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_122403__(/*! ./SectionHeadline */ "./src/Views/SectionHeadline.ts");
/* harmony import */ var _SectionSubHeadline__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_122403__(/*! ./SectionSubHeadline */ "./src/Views/SectionSubHeadline.ts");
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_122403__(/*! ./SectionTitle */ "./src/Views/SectionTitle.ts");
/* harmony import */ var _TileBox__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_122403__(/*! ./TileBox */ "./src/Views/TileBox.ts");
/* harmony import */ var _TileBoxHeaderText__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_122403__(/*! ./TileBoxHeaderText */ "./src/Views/TileBoxHeaderText.ts");
/* harmony import */ var _PortalFilterBarWidget__WEBPACK_IMPORTED_MODULE_14__ = __nested_webpack_require_122403__(/*! ./PortalFilterBarWidget */ "./src/Views/PortalFilterBarWidget.ts");
/* harmony import */ var _PageButton__WEBPACK_IMPORTED_MODULE_15__ = __nested_webpack_require_122403__(/*! ./PageButton */ "./src/Views/PageButton.ts");
/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_16__ = __nested_webpack_require_122403__(/*! ./Badge */ "./src/Views/Badge.ts");
/* harmony import */ var _CancelButton__WEBPACK_IMPORTED_MODULE_17__ = __nested_webpack_require_122403__(/*! ./CancelButton */ "./src/Views/CancelButton.ts");
/* harmony import */ var _FormView__WEBPACK_IMPORTED_MODULE_18__ = __nested_webpack_require_122403__(/*! ./FormView */ "./src/Views/FormView.ts");
/* harmony import */ var _SelectAnalysisView__WEBPACK_IMPORTED_MODULE_19__ = __nested_webpack_require_122403__(/*! ./SelectAnalysisView */ "./src/Views/SelectAnalysisView.ts");
/* harmony import */ var _ProjectMainMenu__WEBPACK_IMPORTED_MODULE_20__ = __nested_webpack_require_122403__(/*! ./ProjectMainMenu */ "./src/Views/ProjectMainMenu.ts");























/***/ }),

/***/ "@tuval/core":
/*!******************************!*\
  !*** external "@tuval/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__tuval_core__;

/***/ }),

/***/ "@tuval/forms":
/*!*******************************!*\
  !*** external "@tuval/forms" ***!
  \*******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__tuval_forms__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_129076__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_129076__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_129076__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nested_webpack_require_129076__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_129076__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_129076__.o(definition, key) && !__nested_webpack_require_129076__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_129076__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_129076__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__nested_webpack_require_129076__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_129076__.d(__webpack_exports__, {
/* harmony export */   "Badge": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.Badge),
/* harmony export */   "CalculationMethodText": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.CalculationMethodText),
/* harmony export */   "CancelButton": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.CancelButton),
/* harmony export */   "DesktopPageTitle": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.DesktopPageTitle),
/* harmony export */   "FormView": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.FormView),
/* harmony export */   "Headline4": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.Headline4),
/* harmony export */   "Headline5": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.Headline5),
/* harmony export */   "PageButton": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.PageButton),
/* harmony export */   "PageTitle": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.PageTitle),
/* harmony export */   "PortalFilterBarWidget": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.PortalFilterBarWidget),
/* harmony export */   "PortalPageTitle": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.PortalPageTitle),
/* harmony export */   "PortalSideMenu": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.PortalSideMenu),
/* harmony export */   "ProjectMainMenu": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.ProjectMainMenu),
/* harmony export */   "RegularText": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.RegularText),
/* harmony export */   "SectionContent": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.SectionContent),
/* harmony export */   "SectionHeadline": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.SectionHeadline),
/* harmony export */   "SectionSubHeadline": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.SectionSubHeadline),
/* harmony export */   "SectionTitle": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.SectionTitle),
/* harmony export */   "SelectAnalysisView": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.SelectAnalysisView),
/* harmony export */   "TileBox": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.TileBox),
/* harmony export */   "TileBoxHeaderText": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.TileBoxHeaderText),
/* harmony export */   "BrokerProjectService": () => (/* reexport safe */ _Services__WEBPACK_IMPORTED_MODULE_2__.BrokerProjectService),
/* harmony export */   "ConfigService": () => (/* reexport safe */ _Services__WEBPACK_IMPORTED_MODULE_2__.ConfigService),
/* harmony export */   "Services": () => (/* reexport safe */ _Services__WEBPACK_IMPORTED_MODULE_2__.Services),
/* harmony export */   "MiningBrokerClient": () => (/* reexport safe */ _BrokerClients__WEBPACK_IMPORTED_MODULE_3__.MiningBrokerClient),
/* harmony export */   "ListBounceAnimation": () => (/* reexport safe */ _ListBounceAnimation__WEBPACK_IMPORTED_MODULE_4__.ListBounceAnimation)
/* harmony export */ });
/* harmony import */ var _Views__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_129076__(/*! ./Views */ "./src/Views/index.ts");
/* harmony import */ var _Models__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_129076__(/*! ./Models */ "./src/Models/index.ts");
/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_129076__(/*! ./Services */ "./src/Services/index.ts");
/* harmony import */ var _BrokerClients__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_129076__(/*! ./BrokerClients */ "./src/BrokerClients/index.ts");
/* harmony import */ var _ListBounceAnimation__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_129076__(/*! ./ListBounceAnimation */ "./src/ListBounceAnimation.ts");






})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@procetra/modules/processoverview/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@procetra/modules/processoverview/index.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! @realmocean/charts */ "@realmocean/charts"), __webpack_require__(/*! @tuval/forms */ "@tuval/forms"), __webpack_require__(/*! @tuval/core */ "@tuval/core"));
	else { var i, a; }
})(self, function(__WEBPACK_EXTERNAL_MODULE__realmocean_charts__, __WEBPACK_EXTERNAL_MODULE__tuval_forms__, __WEBPACK_EXTERNAL_MODULE__tuval_core__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@procetra/common/index.js":
/*!************************************************!*\
  !*** ./node_modules/@procetra/common/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_1144__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__nested_webpack_require_1144__(/*! @tuval/forms */ "@tuval/forms"), __nested_webpack_require_1144__(/*! @tuval/core */ "@tuval/core"));
	else { var i, a; }
})(self, function(__WEBPACK_EXTERNAL_MODULE__tuval_forms__, __WEBPACK_EXTERNAL_MODULE__tuval_core__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/BrokerClients/MiningBrokerClient.ts":
/*!*************************************************!*\
  !*** ./src/BrokerClients/MiningBrokerClient.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_1024__) => {

__nested_webpack_require_1024__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_1024__.d(__webpack_exports__, {
/* harmony export */   "MiningBrokerClient": () => (/* binding */ MiningBrokerClient)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_1024__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_1024__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_1024__(/*! ../Services/ConfigService */ "./src/Services/ConfigService.ts");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_1024__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_1024__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};



var separators = [",", ";", "\t"];
function detectSeparator(csv) {
    var counts = {}, sepMax;
    separators.forEach(function (sep, i) {
        var re = new RegExp(sep, 'g');
        counts[sep] = (csv.match(re) || []).length;
        sepMax = !sepMax || counts[sep] > counts[sepMax] ? sep : sepMax;
    });
    return sepMax;
}
var MiningBrokerClient = /** @class */ (function () {
    function MiningBrokerClient() {
    }
    MiningBrokerClient.LoadCsv = function (csv, case_id, activity_key, timestamp_key, start_timestamp_key, resource_key, cost_key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var data = new FormData();
                        data.append('case_column_name', case_id);
                        data.append('activity_column_name', activity_key);
                        data.append('timestamp_key', timestamp_key);
                        data.append('start_timestamp_key', start_timestamp_key);
                        data.append('resource_key', resource_key);
                        data.append('cost_key', cost_key);
                        data.append('sep', detectSeparator(csv));
                        var parts = [
                            new Blob([csv], { type: 'text/plain' })
                        ];
                        var file = new File(parts, 'csv.txt');
                        data.append('file', file, 'test.csv');
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'LoadCsv?token=', data, {
                            headers: {
                                "Content-Encoding": "gzip"
                            }
                        })
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.ImportCsvFile = function (project_id, csv, case_column_name, activity_column_name, timestamp_key, start_timestamp_key, resource_key, cost_key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var data = new FormData();
                        data.append('project_id', project_id);
                        data.append('case_column_name', case_column_name);
                        data.append('activity_column_name', activity_column_name);
                        data.append('timestamp_key', timestamp_key);
                        data.append('start_timestamp_key', start_timestamp_key);
                        data.append('resource_key', resource_key);
                        data.append('cost_key', cost_key);
                        data.append('sep', detectSeparator(csv));
                        var parts = [
                            new Blob([csv], { type: 'text/plain' })
                        ];
                        var file = new File(parts, 'csv.txt');
                        data.append('file', file, 'test.csv');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'ImportCsvFile?token=', data, {
                            headers: {
                                "Content-Encoding": "gzip"
                            }
                        })
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetStatistics = function (log_id, activity_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        form.append('activity_name', activity_name);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetStatistics?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetActivityOverview = function (log_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetActivityStatistics?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetItemOverview = function (log_id, item_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        form.append('activity_name', item_name);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetStatistics?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetStartActivities = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetStartActivities?token=', form)
                            .then(function (response) {
                            resolve(response.data.startActivities);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetStartItems = function (log_id, item_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        form.append('item_name', item_name);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetStartItems', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetEndActivities = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetEndActivities?token=', form)
                            .then(function (response) {
                            resolve(response.data.endActivities);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetEndItems = function (log_id, item_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        form.append('item_name', item_name);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetEndItems?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetAllVariants = function (project_id, max_no_variants) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        // form.append('max_no_variants', '10');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetAllVariants?token=', form)
                            .then(function (response) {
                            resolve(response.data.variants);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetVariants = function (project_id, max_no_variants) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        // form.append('max_no_variants', '10');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetVariants?token=', form)
                            .then(function (response) {
                            resolve(response.data.variants);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetEventsPerTime = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        // form.append('max_no_variants', '10');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetEventsPerTime?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetHappyPath = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        // form.append('max_no_variants', '10');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetHappyPath?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetActivities = function (project_id, activity_key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('activity_key', activity_key);
                        // form.append('max_no_variants', '10');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetActivities?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetThroughputTimes = function (project_id, activity_key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('activity_key', activity_key);
                        // form.append('max_no_variants', '10');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetThroughputTimes?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetLogSummary = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetLogSummary?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetAllVariantsAndCases = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetAllVariantsAndCases?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetAllPaths = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetAllPaths?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetAttributeValues = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetAttributeValues?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetDailyCasesPerMonth = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetDailyCasesPerMonth?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetProcessSchema = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        // form.append('max_no_variants', '10');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetProcessSchema?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetLog = function (log_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetLog?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetEventsOverTime = function (log_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetEventsOverTime?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetEventDataInfo = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetEventDataInfo?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.LoadEventData = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'LoadEventData?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetResourceOverview = function (log_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetResourceOverview?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.Login = function (user, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('user', user);
                        form.append('password', password);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'LoginService?token=', form)
                            .then(function (response) {
                            resolve(response.data.sessionId);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.CreateProject = function (project_name, admin, is_public, disable_cache) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_name', project_name);
                        form.append('admin', admin);
                        form.append('is_public', is_public ? "true" : "false");
                        form.append('disable_cache', disable_cache ? "true" : "false");
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'CreateProject?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetProjects = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetProjects?token=')
                            .then(function (response) {
                            resolve(response.data.projects);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetProjectById = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetProjectById?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.CreateProjectItem = function (project_id, model_id, item_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('model_id', model_id);
                        form.append('item_id', item_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'CreateProjectItem?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetProjectItems = function (project_id, model_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('model_id', model_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetProjectItems?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    //#region Anayse Models
    MiningBrokerClient.CreateAnalyseModel = function (project_id, analyse_model_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('analyse_model_name', analyse_model_name);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'CreateAnalyseModel?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetAnalyseModelById = function (project_id, model_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('model_id', model_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetAnalyseModelById?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.DeleteAnalyseModelById = function (project_id, model_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('model_id', model_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'DeleteAnalyseModelById?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetAnalyseModels = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetAnalyseModels?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    //#endregion
    MiningBrokerClient.CreateMapping = function (project_id, mapping_name, mapping_file_name, mapping_data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('mapping_name', mapping_name);
                        form.append('mapping_file_name', mapping_file_name);
                        form.append('mapping_data', mapping_data);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'CreateMapping?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetCaseCount = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'metrics/GetCaseCount?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetEventCount = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'metrics/GetEventCount?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    return MiningBrokerClient;
}());



/***/ }),

/***/ "./src/BrokerClients/index.ts":
/*!************************************!*\
  !*** ./src/BrokerClients/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_39860__) => {

__nested_webpack_require_39860__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_39860__.d(__webpack_exports__, {
/* harmony export */   "MiningBrokerClient": () => (/* reexport safe */ _MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient)
/* harmony export */ });
/* harmony import */ var _MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_39860__(/*! ./MiningBrokerClient */ "./src/BrokerClients/MiningBrokerClient.ts");



/***/ }),

/***/ "./src/ListBounceAnimation.ts":
/*!************************************!*\
  !*** ./src/ListBounceAnimation.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_40565__) => {

__nested_webpack_require_40565__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_40565__.d(__webpack_exports__, {
/* harmony export */   "ListBounceAnimation": () => (/* binding */ ListBounceAnimation)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_40565__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_40565__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ListBounce = /** @class */ (function (_super) {
    __extends(ListBounce, _super);
    function ListBounce() {
        var _this = _super.call(this, 'list-bounce') || this;
        var keyFrame1 = new _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.KeyFrame('from');
        keyFrame1.style.Transform = 'translate(0px, 20px)';
        keyFrame1.style.Opacity = '0';
        _this.Add(keyFrame1);
        var keyFrame2 = new _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.KeyFrame('to');
        keyFrame2.style.Transform = 'translate(0px, 0px)';
        keyFrame2.style.Opacity = '1';
        _this.Add(keyFrame2);
        return _this;
    }
    return ListBounce;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.KeyFrameCollection));
var ListBounceAnimation = new ListBounce();


/***/ }),

/***/ "./src/Models/MIHappPath.ts":
/*!**********************************!*\
  !*** ./src/Models/MIHappPath.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_42895__) => {

__nested_webpack_require_42895__.r(__webpack_exports__);



/***/ }),

/***/ "./src/Models/MIMiningModel.ts":
/*!*************************************!*\
  !*** ./src/Models/MIMiningModel.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_43202__) => {

__nested_webpack_require_43202__.r(__webpack_exports__);



/***/ }),

/***/ "./src/Models/MIProject.ts":
/*!*********************************!*\
  !*** ./src/Models/MIProject.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_43493__) => {

__nested_webpack_require_43493__.r(__webpack_exports__);



/***/ }),

/***/ "./src/Models/index.ts":
/*!*****************************!*\
  !*** ./src/Models/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_43768__) => {

__nested_webpack_require_43768__.r(__webpack_exports__);
/* harmony import */ var _MIProject__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_43768__(/*! ./MIProject */ "./src/Models/MIProject.ts");
/* harmony import */ var _MIMiningModel__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_43768__(/*! ./MIMiningModel */ "./src/Models/MIMiningModel.ts");
/* harmony import */ var _MIHappPath__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_43768__(/*! ./MIHappPath */ "./src/Models/MIHappPath.ts");





/***/ }),

/***/ "./src/Resources/Icons/NewFile.ts":
/*!****************************************!*\
  !*** ./src/Resources/Icons/NewFile.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_44514__) => {

__nested_webpack_require_44514__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_44514__.d(__webpack_exports__, {
/* harmony export */   "NewFileIcon": () => (/* binding */ NewFileIcon)
/* harmony export */ });
var NewFileIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNNDIuNSwyMmgtMjVjLTAuNTUyLDAtMSwwLjQ0Ny0xLDFzMC40NDgsMSwxLDFoMjVjMC41NTIsMCwxLTAuNDQ3LDEtMVM0My4wNTIsMjIsNDIuNSwyMnoiLz4NCgk8cGF0aCBkPSJNMTcuNSwxNmgxMGMwLjU1MiwwLDEtMC40NDcsMS0xcy0wLjQ0OC0xLTEtMWgtMTBjLTAuNTUyLDAtMSwwLjQ0Ny0xLDFTMTYuOTQ4LDE2LDE3LjUsMTZ6Ii8+DQoJPHBhdGggZD0iTTQyLjUsMzBoLTI1Yy0wLjU1MiwwLTEsMC40NDctMSwxczAuNDQ4LDEsMSwxaDI1YzAuNTUyLDAsMS0wLjQ0NywxLTFTNDMuMDUyLDMwLDQyLjUsMzB6Ii8+DQoJPHBhdGggZD0iTTQyLjUsMzhoLTI1Yy0wLjU1MiwwLTEsMC40NDctMSwxczAuNDQ4LDEsMSwxaDI1YzAuNTUyLDAsMS0wLjQ0NywxLTFTNDMuMDUyLDM4LDQyLjUsMzh6Ii8+DQoJPHBhdGggZD0iTTQyLjUsNDZoLTI1Yy0wLjU1MiwwLTEsMC40NDctMSwxczAuNDQ4LDEsMSwxaDI1YzAuNTUyLDAsMS0wLjQ0NywxLTFTNDMuMDUyLDQ2LDQyLjUsNDZ6Ii8+DQoJPHBhdGggZD0iTTM4LjkxNCwwSDYuNXY2MGg0N1YxNC41ODZMMzguOTE0LDB6IE0zOS41LDMuNDE0TDUwLjA4NiwxNEgzOS41VjMuNDE0eiBNOC41LDU4VjJoMjl2MTRoMTR2NDJIOC41eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';


/***/ }),

/***/ "./src/Resources/Icons/OpenFile.ts":
/*!*****************************************!*\
  !*** ./src/Resources/Icons/OpenFile.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_46595__) => {

__nested_webpack_require_46595__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_46595__.d(__webpack_exports__, {
/* harmony export */   "OpenFileIcon": () => (/* binding */ OpenFileIcon)
/* harmony export */ });
var OpenFileIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBkPSJNNTcuNDksMjEuNUg1NHYtNi4yNjhjMC0xLjUwNy0xLjIyNi0yLjczMi0yLjczMi0yLjczMkgyNi41MTVsLTUtN0gyLjczMkMxLjIyNiw1LjUsMCw2LjcyNiwwLDguMjMydjQzLjY4N2wwLjAwNiwwDQoJYy0wLjAwNSwwLjU2MywwLjE3LDEuMTE0LDAuNTIyLDEuNTc1QzEuMDE4LDU0LjEzNCwxLjc2LDU0LjUsMi41NjUsNTQuNWg0NC43NTljMS4xNTYsMCwyLjE3NC0wLjc3OSwyLjQ1LTEuODEzTDYwLDI0LjY0OXYtMC4xNzcNCglDNjAsMjIuNzUsNTguOTQ0LDIxLjUsNTcuNDksMjEuNXogTTIsOC4yMzJDMiw3LjgyOCwyLjMyOSw3LjUsMi43MzIsNy41aDE3Ljc1M2w1LDdoMjUuNzgyYzAuNDA0LDAsMC43MzIsMC4zMjgsMC43MzIsMC43MzJWMjEuNQ0KCUgxMi43MzFjLTAuMTQ0LDAtMC4yODcsMC4wMTItMC40MjYsMC4wMzZjLTAuOTczLDAuMTYzLTEuNzgyLDAuODczLTIuMDIzLDEuNzc2TDIsNDUuODk5VjguMjMyeiBNNDcuODY5LDUyLjA4Mw0KCWMtMC4wNjYsMC4yNDUtMC4yOTEsMC40MTctMC41NDUsMC40MTdIMi41NjVjLTAuMjQzLDAtMC4zODUtMC4xMzktMC40NDgtMC4yMjJjLTAuMDYzLTAuMDgyLTAuMTYtMC4yNTYtMC4xMjMtMC40MDhsMTAuMTkxLTI3Ljk1Mw0KCWMwLjA2Ni0wLjI0NSwwLjI5MS0wLjQxNywwLjU0NS0wLjQxN0g1NGgzLjQ5YzAuMzgsMCwwLjQ3NywwLjU0NiwwLjUwMiwwLjgxOUw0Ny44NjksNTIuMDgzeiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';


/***/ }),

/***/ "./src/Resources/Icons/SaveFile.ts":
/*!*****************************************!*\
  !*** ./src/Resources/Icons/SaveFile.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_48787__) => {

__nested_webpack_require_48787__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_48787__.d(__webpack_exports__, {
/* harmony export */   "SaveFileIcon": () => (/* binding */ SaveFileIcon)
/* harmony export */ });
var SaveFileIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDkgNDkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5IDQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNMzkuOTE0LDBIMzcuNWgtMjhoLTl2NDloN2gzM2g4VjguNTg2TDM5LjkxNCwweiBNMzUuNSwydjE0aC0yNFYySDM1LjV6IE05LjUsNDdWMjhoMjl2MTlIOS41eiBNNDYuNSw0N2gtNlYyNmgtMzN2MjFoLTUNCgkJVjJoN3YxNmgyOFYyaDEuNTg2TDQ2LjUsOS40MTRWNDd6Ii8+DQoJPHBhdGggZD0iTTEzLjUsMzNoN2MwLjU1MywwLDEtMC40NDcsMS0xcy0wLjQ0Ny0xLTEtMWgtN2MtMC41NTMsMC0xLDAuNDQ3LTEsMVMxMi45NDcsMzMsMTMuNSwzM3oiLz4NCgk8cGF0aCBkPSJNMjMuNSwzNWgtMTBjLTAuNTUzLDAtMSwwLjQ0Ny0xLDFzMC40NDcsMSwxLDFoMTBjMC41NTMsMCwxLTAuNDQ3LDEtMVMyNC4wNTMsMzUsMjMuNSwzNXoiLz4NCgk8cGF0aCBkPSJNMjUuNzksMzUuMjljLTAuMTgxLDAuMTg5LTAuMjksMC40NS0wLjI5LDAuNzFzMC4xMDksMC41MiwwLjI5LDAuNzFDMjUuOTc5LDM2Ljg5LDI2LjIyOSwzNywyNi41LDM3DQoJCWMwLjI2LDAsMC41Mi0wLjExLDAuNzEtMC4yOWMwLjE4LTAuMTksMC4yOS0wLjQ1LDAuMjktMC43MXMtMC4xMS0wLjUyMS0wLjI5LTAuNzFDMjYuODQsMzQuOTIsMjYuMTYsMzQuOTIsMjUuNzksMzUuMjl6Ii8+DQoJPHBhdGggZD0iTTMzLjUsNGgtNnYxMGg2VjR6IE0zMS41LDEyaC0yVjZoMlYxMnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K';


/***/ }),

/***/ "./src/Resources/Resources.ts":
/*!************************************!*\
  !*** ./src/Resources/Resources.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_50895__) => {

__nested_webpack_require_50895__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_50895__.d(__webpack_exports__, {
/* harmony export */   "Resources": () => (/* binding */ Resources)
/* harmony export */ });
/* harmony import */ var _Icons_NewFile__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_50895__(/*! ./Icons/NewFile */ "./src/Resources/Icons/NewFile.ts");
/* harmony import */ var _Icons_OpenFile__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_50895__(/*! ./Icons/OpenFile */ "./src/Resources/Icons/OpenFile.ts");
/* harmony import */ var _Icons_SaveFile__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_50895__(/*! ./Icons/SaveFile */ "./src/Resources/Icons/SaveFile.ts");



var Resources = {
    Icons: {
        NewFile: _Icons_NewFile__WEBPACK_IMPORTED_MODULE_0__.NewFileIcon,
        OpenFile: _Icons_OpenFile__WEBPACK_IMPORTED_MODULE_1__.OpenFileIcon,
        SaveFile: _Icons_SaveFile__WEBPACK_IMPORTED_MODULE_2__.SaveFileIcon,
        ApplicationIcon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgdmVyc2lvbj0iMS4xIgogICB3aWR0aD0iMjIxLjgwMTcxIgogICBoZWlnaHQ9IjE5Ny4wODUxIgogICB2aWV3Qm94PSIwIDAgMjIxLjgwMTcxIDE5Ny4wODUxIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpZD0ic3ZnODciCiAgIHNvZGlwb2RpOmRvY25hbWU9ImxvZ29fcHJvY2V0cmFfLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4xLjIgKGI4ZTI1YmU4LCAyMDIyLTAyLTA1KSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48c29kaXBvZGk6bmFtZWR2aWV3CiAgIGlkPSJuYW1lZHZpZXcyMCIKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICBzaG93Z3JpZD0iZmFsc2UiCiAgIGlua3NjYXBlOnpvb209IjAuNzY3IgogICBpbmtzY2FwZTpjeD0iMjE4LjM4MzMxIgogICBpbmtzY2FwZTpjeT0iOTguNDM1NDYzIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijc0NyIKICAgaW5rc2NhcGU6d2luZG93LXg9IjE0NTQiCiAgIGlua3NjYXBlOndpbmRvdy15PSIxNjIiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2Zzg3IiAvPgo8ZGVzYwogICBpZD0iZGVzYzY2Ij5DcmVhdGVkIHdpdGggRmFicmljLmpzIDMuNS4wPC9kZXNjPgo8ZGVmcwogICBpZD0iZGVmczY4Ij4KPC9kZWZzPgoKPGcKICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4wNzk4LDAsMCwxLjA3OTgsMTEwLjkwMDg2LDk4LjU0MjU0OCkiCiAgIGlkPSJMYXllcl8xIj4KPHBhdGgKICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNkMDNmNDA7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIKICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMyMS44OTUsLTI5Ny42NCkiCiAgIGQ9Ik0gNDEyLjM3LDM4OC45IEggMjMyLjQyIGMgLTcuMzEsMCAtMTMuMjMsLTUuOTIgLTEzLjIzLC0xMy4yMyBWIDIxOS42MSBjIDAsLTcuMzEgNS45MiwtMTMuMjMgMTMuMjMsLTEzLjIzIGggMTc4Ljk1IGMgNy4zMSwwIDEzLjIzLDUuOTIgMTMuMjMsMTMuMjMgdiAxNTcuMDYgYyAtMC4wMSw2Ljc1IC01LjQ4LDEyLjIzIC0xMi4yMywxMi4yMyB6IgogICBzdHJva2UtbGluZWNhcD0icm91bmQiCiAgIGlkPSJwYXRoNzIiIC8+CjwvZz4KPGcKICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4wNzk4LDAsMCwxLjA3OTgsMTEwLjg5MTE2LDk4LjA4NzU0OCkiCiAgIGlkPSJnNzciPgo8cGF0aAogICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIgogICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIxLjg4NTYsLTI5Ny4yMTgyKSIKICAgZD0ibSA0MDQuMSwyNjYuMjcgYyAtMC4wOCwtNC4wNCAtMC4yNSwtOC4zMSAtMC45NiwtMTIuMjUgLTEuNzksLTkuOTggLTYuMzMsLTE3LjI2IC0xMy44NywtMjIuMjcgLTUuODUsLTMuODggLTEyLjcxLC01LjY5IC0yMS41NiwtNS42OSAtMjEuMTUsMC4wMiAtNDIuMjQsMC4wMyAtNjMuMzMsMC4wMyBoIC01Mi42OSBjIC02LjcsMCAtMTIuMTMsNS45OSAtMTIuMTMsMTMuMzggdiAxMjQuNjIgYyAwLDIuMzUgMS43Miw0LjI1IDMuODUsNC4yNSBoIDE1Ljc3IGMgMi4xMywwIDMuODUsMC40NiAzLjg1LC0xLjg5IHYgLTMxLjAzIGMgMCwtMC40NCAwLjA0LC0wLjg2IDAuMTIsLTEuMjggdiAtMzUuODYgLTEwLjQxIC0zMi45MSBjIDAsLTMuNjggMi42MSwtNi43MSA1Ljk0LC02LjkxIHYgMCBjIDAuNSwtMC4wMyAwLjk2LC0wLjA2IDEuNDIsLTAuMDYgaCAxMC4yNiAyOS44NyBjIDE2LjMzLDAgMzIuNjcsMCA0OS4wMSwtMC4wMiA1LjI5LDAgOS42NCwxLjMzIDEzLjM0LDQuMDYgNS4yMiwzLjg1IDguMDEsOS40OCA4LjA3LDE2LjI3IDAuMDUsNi4xIDAuMDUsMTEuMTUgMCwxNS44OSAtMC4xMiwxMC44MiAtNy4wNiwxOS4wNiAtMTYuODcsMjAuMDQgLTIuMDQsMC4yIC00LjA2LDAuMzEgLTYuMDIsMC4zMSAtMTAuMjksMC4wMSAtMjAuNTksMC4wMSAtMzAuODgsMC4wMSAtNS41NywwIC0xMC4wOCw0Ljk4IC0xMC4wOCwxMS4xMiB2IDAgYyAwLDYuMTUgNC41MSwxMS4xMyAxMC4wOSwxMS4xMiAxMS40OCwtMC4wMSAyOS44MywtMC4wNCAzOC45NiwtMC4wOCA0LjU0LC0wLjAyIDkuMTMsLTAuNTYgMTMuNjUsLTEuNjEgOS4wNCwtMi4xIDE1LjQ4LC03LjA0IDE5LjY4LC0xNS4xIDIuOSwtNS41NyA0LjM4LC0xMi4xIDQuNTMsLTE5Ljk5IDAuMTIsLTguMzcgMC4xMywtMTYuMTQgLTAuMDIsLTIzLjc0IHoiCiAgIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgaWQ9InBhdGg3NSIgLz4KPC9nPgo8ZwogICB0cmFuc2Zvcm09Im1hdHJpeCgxLjA3OTgsMCwwLDEuMDc5OCw2NC44Mzc2NTksMTY5Ljg0NTA1KSIKICAgaWQ9Imc4MSI+CjxwYXRoCiAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiCiAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNzkuMjM1LC0zNjMuNjcpIgogICBkPSJtIDI5MC44NSwzNjkuMjIgdiAtMC4zNiBjIC0wLjk2LC02LjExIC01Ljc4LC0xMC43NSAtMTEuNTksLTEwLjc1IC01LjkzLDAgLTEwLjgxLDQuODMgLTExLjY0LDExLjEyIGggMjMuMjMgeiIKICAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogICBpZD0icGF0aDc5IiAvPgo8L2c+CjxnCiAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMDc5OCwwLDAsMS4wNzk4LDEzMi4yODYxNiwxMTkuMTQxMDUpIgogICBpZD0iZzg1Ij4KPHBhdGgKICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNmZmZmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIKICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0MS42OTg4LC0zMTYuNzE1KSIKICAgZD0ibSA0MDQuMjMsMzQ2LjM0IGggLTEuNjEgLTI5Ljg3IGMgLTE2LjMzLDAgLTMyLjY3LDAgLTQ5LjAxLDAuMDIgLTUuMjksMCAtOS42NCwtMS4zMyAtMTMuMzQsLTQuMDYgLTUuMjIsLTMuODUgLTguMDEsLTExLjg0IC04LjA3LC0xOC42MyAtMC4wNSwtNi4xIC0wLjA1LC0xMS4xNSAwLC0xNS44OSAwLjEyLC0xMC44MiA3LjA2LC0xOS4wNiAxNi44NywtMjAuMDUgMi4wNCwtMC4yIDQuMDYsLTAuMzEgNi4wMiwtMC4zMSAxMC4xNywtMC4wMSAyMC4zNCwtMC4wMSAzMC41MSwtMC4wMSA0Ljg1LDAgOS4zLC0zLjU4IDEwLjI1LC04LjgzIDEuMjksLTcuMTUgLTMuNjMsLTEzLjQyIC05Ljg4LC0xMy40MSAtMTEuNDgsMC4wMSAtMjkuODMsMC4wNCAtMzguOTYsMC4wOCAtNC41NCwwLjAyIC05LjEzLDAuNTYgLTEzLjY1LDEuNjEgLTkuMDQsMi4xIC0xNS40OCw3LjA0IC0xOS42OCwxNS4xIC0yLjksNS41NyAtNC4zOCwxMi4xIC00LjUzLDE5Ljk5IC0wLjE1LDguMzcgLTAuMTUsMTYuMTMgMCwyMy43MyAwLjA4LDQuMDQgMC4yNSwxMC42NyAwLjk2LDE0LjYxIDEuNzksOS45OCA2LjMzLDE3LjI2IDEzLjg3LDIyLjI3IDUuODUsMy44OCAxMi43MSw1LjcgMjEuNTYsNS43IDIxLjE1LC0wLjAyIDQyLjI0LC0wLjAzIDYzLjMzLC0wLjAzIGggNS4zNyBjIDEwLjk2LDAuMDIgMTkuODYsLTkuNzkgMTkuODYsLTIxLjg5IHoiCiAgIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgaWQ9InBhdGg4MyIgLz4KPC9nPgo8L3N2Zz4K'
    }
};


/***/ }),

/***/ "./src/Services/BrokerProjectService.ts":
/*!**********************************************!*\
  !*** ./src/Services/BrokerProjectService.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_58110__) => {

__nested_webpack_require_58110__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_58110__.d(__webpack_exports__, {
/* harmony export */   "BrokerProjectService": () => (/* binding */ BrokerProjectService)
/* harmony export */ });
/* harmony import */ var _BrokerClients_MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_58110__(/*! ../BrokerClients/MiningBrokerClient */ "./src/BrokerClients/MiningBrokerClient.ts");
/* import { MIProject } from '@procetra/common';
import { IActivityInfo } from "../Bussiness/IActivityInfo";
import { IDataSet } from "../Bussiness/IDataSet";
import { IProject } from "../Bussiness/IProject";
import { Project } from "../Bussiness/Project"; */

var BrokerProjectService /*  implements IProjectService */ = /** @class */ (function () {
    function BrokerProjectService() {
    }
    BrokerProjectService.prototype.CreateProject = function (name, admin, isPublic, disableCache) {
        if (isPublic === void 0) { isPublic = true; }
        if (disableCache === void 0) { disableCache = false; }
        return new Promise(function (resolve, reject) {
            _BrokerClients_MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient.CreateProject(name, admin, isPublic, disableCache).then(function (project) {
                resolve({
                    project_id: project.project_id,
                    project_name: project.project_name,
                    admin: project.admin,
                    isPublic: project.is_public,
                    diableCache: project.disable_cache,
                    is_data_loaded: project.is_data_loaded,
                    case_count: 0,
                    event_count: 0
                });
            });
        });
    };
    BrokerProjectService.prototype.AddDataSet = function (dataset) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.DataSetFromCvs = function (projectId, datasetId, datasetName, csv, case_column, activity_column, time_stamp, start_date, date_format) {
        return new Promise(function (resolve, reject) {
            var datasetObject = {
                ProjectId: projectId,
                Id: datasetId
            };
            resolve(datasetObject);
        });
    };
    BrokerProjectService.prototype.DataSetFromXes = function (projectId, datasetName, xes) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.CloneDataSet = function (projectId, datasetName) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetDatasetById = function (projectId, id) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.SaveProject = function (projectId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetProjectListFromStorage = function () {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.LoadProject = function (name) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.CloseProject = function (id) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.ConvertCsvToJson = function (csv) {
        return new Promise(function (resolve, reject) {
            /* const data = CvsToJson.Convert(csv, { parseNumbers: true }); */
            return resolve(null);
        });
    };
    BrokerProjectService.prototype.GetDatasetAsData = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetDatasetEventCount = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.CasesStartedPerDay = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.ActivitiesStartedPerDay = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.ActivitiesPerCase = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetVariantsInfo = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetEventsOverTime = function (projectId, datasetId) {
        return new Promise(function (resolve, reject) {
        });
    };
    BrokerProjectService.prototype.GetStartEvents = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetEndEvents = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetTraceCount = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetEventCount = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetActivities = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetMedianCaseDuration = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetMeanCaseDuration = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetDatasetName = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.SetActivityInfo = function (projectId, datasetId, activityInfos) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetActivityInfo = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetAverageCostOfDataset = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetTotalCostOfDataset = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.SetDatasetFilteredData = function (projectId, datasetId, filteredData) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.SetDatasetCondition = function (projectId, datasetId, condition) {
        throw new Error("Method not implemented.");
    };
    //#region Project Methods
    BrokerProjectService.prototype.GetProjects = function (session_id) {
        return _BrokerClients_MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient.GetProjects();
    };
    BrokerProjectService.prototype.GetProjectItems = function (project_id) {
        //return MiningBrokerClient.GetProjectItems(session_id, org_name, project_id);
        return new Promise(function (resolve, reject) {
            resolve([
                {
                    project_item_id: '1',
                    name: 'Test Dataset 2',
                    type: 'Dataset'
                },
                {
                    project_item_id: '2',
                    name: 'İnsan kaynakları',
                    type: 'Dashboard'
                }
            ]);
        });
    };
    BrokerProjectService.prototype.GetProjectById = function (project_id) {
        return _BrokerClients_MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient.GetProjectById(project_id);
    };
    //#endregion
    //#region Analyse Models
    BrokerProjectService.prototype.CreateAnalyseModel = function (project_id, analyse_model_name) {
        return _BrokerClients_MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient.CreateAnalyseModel(project_id, analyse_model_name);
    };
    BrokerProjectService.prototype.GetAnalyseModels = function (project_id) {
        return _BrokerClients_MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient.GetAnalyseModels(project_id);
    };
    //#endregion
    BrokerProjectService.prototype.CreateMapping = function (project_id, mapping_name, mapping_file_name, mapping_data) {
        return _BrokerClients_MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient.CreateMapping(project_id, mapping_name, mapping_file_name, mapping_data);
    };
    return BrokerProjectService;
}());



/***/ }),

/***/ "./src/Services/ConfigService.ts":
/*!***************************************!*\
  !*** ./src/Services/ConfigService.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_67082__) => {

__nested_webpack_require_67082__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_67082__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_67082__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_67082__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);

var ConfigService = /** @class */ (function () {
    function ConfigService() {
    }
    ConfigService.GetEbaBrokerUrl = function () {
        return 'https://bpmgenesis.com/broker/eba';
    };
    ConfigService.GetEnsembleUrl = function () {
        return 'https://bpmgenesis.com/broker/ensemble';
    };
    ConfigService.GetSymbolBrokerUrl = function () {
        //return 'http://apidera.com/symbol';
        return 'https://bpmgenesis.com/broker/symbol';
    };
    ConfigService.GetMiningBrokerUrl = function () {
        var url = '';
        debugger;
        if (_tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.localhost()) {
            url = 'http://localhost:5001/v1/';
        }
        else {
            url = 'https://api.apirealm.com/mining/';
        }
        /*  const url = window.location.origin + '/broker/mining/v1/';
         console.log(url); */
        return url;
    };
    return ConfigService;
}());



/***/ }),

/***/ "./src/Services/IProjectService.ts":
/*!*****************************************!*\
  !*** ./src/Services/IProjectService.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_68808__) => {

__nested_webpack_require_68808__.r(__webpack_exports__);



/***/ }),

/***/ "./src/Services/Services.ts":
/*!**********************************!*\
  !*** ./src/Services/Services.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_69103__) => {

__nested_webpack_require_69103__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_69103__.d(__webpack_exports__, {
/* harmony export */   "Services": () => (/* binding */ Services)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_69103__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_69103__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);

var Services = /** @class */ (function () {
    function Services() {
    }
    Object.defineProperty(Services, "ProjectService", {
        get: function () {
            try {
                return _tuval_core__WEBPACK_IMPORTED_MODULE_0__.instance.resolve('IProjectService_Thread');
            }
            catch (_a) {
                throw 'Project Service Not Found.';
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Services, "StateService", {
        get: function () {
            try {
                return _tuval_core__WEBPACK_IMPORTED_MODULE_0__.instance.resolve('IStateService');
            }
            catch (_a) {
                throw 'State Service Not Found.';
            }
        },
        enumerable: false,
        configurable: true
    });
    return Services;
}());



/***/ }),

/***/ "./src/Services/index.ts":
/*!*******************************!*\
  !*** ./src/Services/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_70715__) => {

__nested_webpack_require_70715__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_70715__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* reexport safe */ _ConfigService__WEBPACK_IMPORTED_MODULE_0__.ConfigService),
/* harmony export */   "BrokerProjectService": () => (/* reexport safe */ _BrokerProjectService__WEBPACK_IMPORTED_MODULE_1__.BrokerProjectService),
/* harmony export */   "Services": () => (/* reexport safe */ _Services__WEBPACK_IMPORTED_MODULE_3__.Services)
/* harmony export */ });
/* harmony import */ var _ConfigService__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_70715__(/*! ./ConfigService */ "./src/Services/ConfigService.ts");
/* harmony import */ var _BrokerProjectService__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_70715__(/*! ./BrokerProjectService */ "./src/Services/BrokerProjectService.ts");
/* harmony import */ var _IProjectService__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_70715__(/*! ./IProjectService */ "./src/Services/IProjectService.ts");
/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_70715__(/*! ./Services */ "./src/Services/Services.ts");






/***/ }),

/***/ "./src/Views/Badge.ts":
/*!****************************!*\
  !*** ./src/Views/Badge.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_72081__) => {

__nested_webpack_require_72081__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_72081__.d(__webpack_exports__, {
/* harmony export */   "Badge": () => (/* binding */ Badge)
/* harmony export */ });
/* harmony import */ var _RegularText__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_72081__(/*! ./RegularText */ "./src/Views/RegularText.ts");

function Badge(text, color, backColor) {
    return ((0,_RegularText__WEBPACK_IMPORTED_MODULE_0__.RegularText)(text).padding('0 0.5rem')
        //.border(`1px solid ${color}`)
        .lineHeight('1').fontSize('0.65rem')
        .marginHorizontal('10px')
        .height('1.5rem')
        .backgroundColor(backColor)
        .foregroundColor(color)
        .cornerRadius(10).fontWeight('500')
        .shadow('rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;')
        .fontFamily('-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'));
}


/***/ }),

/***/ "./src/Views/CalculationMethodText.ts":
/*!********************************************!*\
  !*** ./src/Views/CalculationMethodText.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_73339__) => {

__nested_webpack_require_73339__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_73339__.d(__webpack_exports__, {
/* harmony export */   "CalculationMethodText": () => (/* binding */ CalculationMethodText)
/* harmony export */ });
/* harmony import */ var _Headline5__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_73339__(/*! ./Headline5 */ "./src/Views/Headline5.ts");

function CalculationMethodText(value) {
    return ((0,_Headline5__WEBPACK_IMPORTED_MODULE_0__.Headline5)(value).fontFamily('Proxima Nova, sans serif').foregroundColor('#AAA'));
}


/***/ }),

/***/ "./src/Views/CancelButton.ts":
/*!***********************************!*\
  !*** ./src/Views/CancelButton.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_74139__) => {

__nested_webpack_require_74139__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_74139__.d(__webpack_exports__, {
/* harmony export */   "CancelButton": () => (/* binding */ CancelButton)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_74139__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_74139__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

var CancelButton = function (text) { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(text))
    .cursor('pointer')
    .minWidth('64px')
    .foregroundColor(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Color.gray500)); };


/***/ }),

/***/ "./src/Views/DesktopPageTitle.ts":
/*!***************************************!*\
  !*** ./src/Views/DesktopPageTitle.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_75191__) => {

__nested_webpack_require_75191__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_75191__.d(__webpack_exports__, {
/* harmony export */   "DesktopPageTitle": () => (/* binding */ DesktopPageTitle)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_75191__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_75191__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function DesktopPageTitle(icon, text) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(icon).size(30).foregroundColor('gray'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(text)
        .fontFamily('Proxima Nova')
        .fontSize('22px')
        .foregroundColor('#333333'))
        .height() // auto
        .width() //auto
    );
}


/***/ }),

/***/ "./src/Views/FormView.ts":
/*!*******************************!*\
  !*** ./src/Views/FormView.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_76366__) => {

__nested_webpack_require_76366__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_76366__.d(__webpack_exports__, {
/* harmony export */   "FormView": () => (/* binding */ FormView)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_76366__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_76366__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Resources_Resources__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_76366__(/*! ../Resources/Resources */ "./src/Resources/Resources.ts");


var FormView = function (_a) {
    var content = _a.content;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIScene)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIImage)(_Resources_Resources__WEBPACK_IMPORTED_MODULE_1__.Resources.Icons.ApplicationIcon).width(25).opacity(0.8).position(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.PositionTypes.Absolute).left('10px').top('10px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Procetra').fontSize(16).fontWeight('700')).height(50), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })(content)
        // UIScene içerisine yayılması için
        .width('100%'))));
};


/***/ }),

/***/ "./src/Views/Headline4.ts":
/*!********************************!*\
  !*** ./src/Views/Headline4.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_78067__) => {

__nested_webpack_require_78067__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_78067__.d(__webpack_exports__, {
/* harmony export */   "Headline4": () => (/* binding */ Headline4)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_78067__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_78067__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function Headline4(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('34.6538px').kerning('0.25px'));
}


/***/ }),

/***/ "./src/Views/Headline5.ts":
/*!********************************!*\
  !*** ./src/Views/Headline5.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_78994__) => {

__nested_webpack_require_78994__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_78994__.d(__webpack_exports__, {
/* harmony export */   "Headline5": () => (/* binding */ Headline5)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_78994__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_78994__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function Headline5(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('24.4615px').kerning('0px'));
}


/***/ }),

/***/ "./src/Views/PageButton.ts":
/*!*********************************!*\
  !*** ./src/Views/PageButton.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_79922__) => {

__nested_webpack_require_79922__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_79922__.d(__webpack_exports__, {
/* harmony export */   "PageButton": () => (/* binding */ PageButton)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_79922__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_79922__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function PageButton(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value)
        .fontFamily('Source Sans Pro')
        .fontSize(16)
        .lineHeight('1.75'))
        .cornerRadius(5)
        .height(30)
        .foregroundColor('#fff')
        .backgroundColor('#028AEB')
        .transition('all 150ms ease-in-out')
        .shadow({
        default: '0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
        active: '0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%)'
    })));
}


/***/ }),

/***/ "./src/Views/PageTitle.ts":
/*!********************************!*\
  !*** ./src/Views/PageTitle.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_81301__) => {

__nested_webpack_require_81301__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_81301__.d(__webpack_exports__, {
/* harmony export */   "PageTitle": () => (/* binding */ PageTitle)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_81301__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_81301__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DesktopPageTitle__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_81301__(/*! ./DesktopPageTitle */ "./src/Views/DesktopPageTitle.ts");
/* harmony import */ var _PortalPageTitle__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_81301__(/*! ./PortalPageTitle */ "./src/Views/PortalPageTitle.ts");



function PageTitle(icon, text) {
    if (_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.ApplicationMode === _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ApplicationModes.Desktop) {
        return (0,_DesktopPageTitle__WEBPACK_IMPORTED_MODULE_1__.DesktopPageTitle)(icon, text);
    }
    else {
        return (0,_PortalPageTitle__WEBPACK_IMPORTED_MODULE_2__.PortalPageTitle)(icon, text);
    }
}


/***/ }),

/***/ "./src/Views/PortalFilterBarWidget.ts":
/*!********************************************!*\
  !*** ./src/Views/PortalFilterBarWidget.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_82799__) => {

__nested_webpack_require_82799__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_82799__.d(__webpack_exports__, {
/* harmony export */   "PortalFilterBarWidget": () => (/* binding */ PortalFilterBarWidget)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_82799__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_82799__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function PortalFilterBarWidget(params) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(params.value.toString()).fontSize('40px').foregroundColor('rgb(147,205,221)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('monts').foregroundColor('rgb(251,192,1)').fontSize('10px').fontWeight('700'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('AVG').foregroundColor('#AAA'))), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Duration').foregroundColor('rgb(147,205,221)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('15 - 40 monts').foregroundColor('#AAA')))
        .paddingRight('50px')
        .width() //auto
    );
}


/***/ }),

/***/ "./src/Views/PortalPageTitle.ts":
/*!**************************************!*\
  !*** ./src/Views/PortalPageTitle.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_84729__) => {

__nested_webpack_require_84729__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_84729__.d(__webpack_exports__, {
/* harmony export */   "PortalPageTitle": () => (/* binding */ PortalPageTitle)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_84729__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_84729__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function PortalPageTitle(icon, text) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(icon).size(30).foregroundColor('#333333'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(text)
        .fontWeight('700')
        .fontFamily('Ubuntu, sans-serif')
        .fontSize('30px')
        .foregroundColor('#495057'))
        .marginLeft('10px')
        .width() //auto
    );
}


/***/ }),

/***/ "./src/Views/PortalSideMenu.ts":
/*!*************************************!*\
  !*** ./src/Views/PortalSideMenu.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_85964__) => {

__nested_webpack_require_85964__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_85964__.d(__webpack_exports__, {
/* harmony export */   "PortalSideMenu": () => (/* binding */ PortalSideMenu)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_85964__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_85964__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function PortalSideMenu(params) {
    var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.bindState)(0), selectedIndex = _a[0], setSelectedIndex = _a[1];
    if (_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal) {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(params.items)(function (item, index) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(item.icon).size(26), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(item.name).fontSize('12px').fontFamily('-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'))
                .padding(5)
                .background(selectedIndex === index ? (params.second ? '#777b80' : '#52565b') : { hover: '#eee' })
                .borderBottom(selectedIndex === index ? '2px solid #e7b54a' : '2px solid transparent')
                .cursor('pointer')
                .foregroundColor(selectedIndex === index ? 'white' : { hover: '#333', default: 'white' })
                .height(80)
                .onClick(function () { setSelectedIndex(index); params.selectedAction(index); })
                .visible(item.isVisible());
        })).width()
            .initial({ width: 0 }).animate({ width: params.second ? 75 : 80 })
            .background(params.second ? '#52565b' : '#212932')
            .shadow(params.second ? 'inset 24px 0 20px -20px #373b40' : '')
            .borderBottom('2px solid #212932'));
    }
}


/***/ }),

/***/ "./src/Views/ProjectMainMenu.ts":
/*!**************************************!*\
  !*** ./src/Views/ProjectMainMenu.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_88470__) => {

__nested_webpack_require_88470__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_88470__.d(__webpack_exports__, {
/* harmony export */   "ProjectMainMenu": () => (/* binding */ ProjectMainMenu)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_88470__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_88470__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Resources_Resources__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_88470__(/*! ../Resources/Resources */ "./src/Resources/Resources.ts");
/* harmony import */ var _Texts__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_88470__(/*! ./Texts */ "./src/Views/Texts.ts");



/***
 * Proje sayfalarının başlığı, menulerin sorumlusu
 */
var ProjectMainMenu = function (project_name, model_name, eventCount, caseCount, miningModels, OnMiningModelChanged, menu, modelMenu, queryMenu) { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIImage)(_Resources_Resources__WEBPACK_IMPORTED_MODULE_1__.Resources.Icons.ApplicationIcon).width(25).opacity(0.8).position(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.PositionTypes.Absolute).left('10px').top('10px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Procetra').fontSize(16).fontWeight('700')).height(40), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\d1fd').size(30).marginBottom('10px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.AnimHeadline5)(project_name).lineHeight(35).whiteSpace('nowrap'), _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(miningModels)(function (item) {
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(item.model_name).onClick(function () { return OnMiningModelChanged(item); })).padding(5);
}))((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)(model_name).whiteSpace('nowrap'))
    .cornerRadius(5)
    .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 5).cursor('pointer')
    .border('dotted 1px var(--sub-border-color)')).marginLeft('5px').marginRight('10px').width(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VDivider)().width(1).height('60%').backgroundColor('rgb(120,120,120,50%)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 10 })(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(menu)(function (item) {
    return item.seperator ?
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HDivider)()
        :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)(item.title)
                .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 16))
                .minHeight(32);
}))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('Project').fontSize(16).fontWeight('500'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e5c5').size(16))
    .padding(3)
    .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 8)
    .paddingLeft('14px')
    .transition('all .3s cubic-bezier(0.55, 0, 0.55, 0.2)')
    .backgroundColor({ focus: 'rgb(120,120,120,50%)' }).tabIndex(0)).cursor('pointer').border('dotted 1px var(--sub-border-color)').transition('border .3s').cornerRadius(5).overflow('hidden'), _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(modelMenu)(function (menuItem) {
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(menuItem.icon).size(16), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(menuItem.title)).onClick(function () { menuItem.onClick(menuItem); });
}))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('Model').fontSize(16).fontWeight('500'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e5c5').size(16)).padding(3).backgroundColor({ focus: 'rgb(120,120,120,50%)' }).tabIndex(0)).cursor('pointer').border('dotted 1px var(--sub-border-color)').transition('border .3s').cornerRadius(5), 
// Query Menu
_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(queryMenu)(function (menuItem) {
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(menuItem.icon).size(16), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(menuItem.title));
}))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('Query').fontSize(16).fontWeight('500'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e5c5').size(16)).padding(3).backgroundColor({ focus: 'rgb(120,120,120,50%)' }).tabIndex(0)).cursor('pointer').border('dotted 1px var(--sub-border-color)').transition('border .3s').cornerRadius(5)).width().height(), //auto,
(0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VDivider)().width(1).height('60%').backgroundColor('rgb(120,120,120,50%)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e153').size(24).foregroundColor('#666'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)(eventCount.toLocaleString('en-EN')).fontFamily("'Source Sans Pro', Arial, sans-serif").fontWeight('600').fontSize(25).foregroundColor('#666').lineHeight('1em'), (0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('EVENTS').fontFamily("'Source Sans Pro', Arial, sans-serif").fontWeight('600').fontSize(14).foregroundColor('#666')).width(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VDivider)().height('60%').backgroundColor('rgb(120,120,120,50%)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\d25b').size(24).foregroundColor('#666'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)(caseCount.toLocaleString('en-EN')).fontFamily("'Source Sans Pro', Arial, sans-serif").fontWeight('600').fontSize(25).foregroundColor('#666').lineHeight('1em'), (0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('CASES').fontFamily("'Source Sans Pro', Arial, sans-serif").fontWeight('600').fontSize(14).foregroundColor('#666')).width(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 10 })(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(menu)(function (item) {
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HDivider)();
}
/*  item.seperator ?
     HDivider()
     :
     HStack({ alignment: cLeading, spacing: 10 })(
         RegularText(item.title)
     ) */
))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('Project').fontSize(16).fontWeight('500'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e5c5').size(16)).padding(5).backgroundColor({ focus: 'rgb(120,120,120,50%)' }).tabIndex(0).cornerRadius(5)).cursor('pointer').border('solid 1px var(--sub-border-color)').transition('border .3s'), _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(modelMenu)(function (menuItem) {
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(menuItem.icon).size(16), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(menuItem.title)).onClick(function () { menuItem.onClick(menuItem); });
}))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('Model').fontSize(16).fontWeight('500'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e5c5').size(16)).padding(5).backgroundColor({ focus: 'rgb(120,120,120,50%)' }).tabIndex(0).cornerRadius(5)).cursor('pointer').border('solid 1px var(--sub-border-color)').transition('border .3s'), 
// Query Menu
_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(queryMenu)(function (menuItem) {
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(menuItem.icon).size(16), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(menuItem.title));
}))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('Query').fontSize(16).fontWeight('500'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e5c5').size(16)).padding(5).backgroundColor({ focus: 'rgb(120,120,120,50%)' }).tabIndex(0).cornerRadius(5)).cursor('pointer').border('solid 1px var(--sub-border-color)').transition('border .3s')).visible(false).width())
    .height(80)
    .variable('--sub-border-color', { default: 'transparent', hover: '#14a9d5' }))
    .height()
    .background('rgb(255,255,255,20%)')
    .marginBottom('10px')
    .shadow('0 0 8px 0 #ccc')
    .visible(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsDesktop)); };


/***/ }),

/***/ "./src/Views/RegularText.ts":
/*!**********************************!*\
  !*** ./src/Views/RegularText.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_98901__) => {

__nested_webpack_require_98901__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_98901__.d(__webpack_exports__, {
/* harmony export */   "RegularText": () => (/* binding */ RegularText)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_98901__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_98901__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function RegularText(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('"Proxima Nova","Helvetica Neue",Helvetica,Arial,sans-serif').fontSize('14px').lineHeight('1.42857').foregroundColor('#333'));
}


/***/ }),

/***/ "./src/Views/SectionContent.ts":
/*!*************************************!*\
  !*** ./src/Views/SectionContent.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_99896__) => {

__nested_webpack_require_99896__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_99896__.d(__webpack_exports__, {
/* harmony export */   "SectionContent": () => (/* binding */ SectionContent)
/* harmony export */ });
/* harmony import */ var _RegularText__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_99896__(/*! ./RegularText */ "./src/Views/RegularText.ts");

function SectionContent(value) {
    return ((0,_RegularText__WEBPACK_IMPORTED_MODULE_0__.RegularText)(value));
}


/***/ }),

/***/ "./src/Views/SectionHeadline.ts":
/*!**************************************!*\
  !*** ./src/Views/SectionHeadline.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_100634__) => {

__nested_webpack_require_100634__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_100634__.d(__webpack_exports__, {
/* harmony export */   "SectionHeadline": () => (/* binding */ SectionHeadline)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_100634__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_100634__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function SectionHeadline(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('"Proxima Nova","Helvetica Neue",Helvetica,Arial,sans-serif').fontSize('20px').lineHeight('1.42857').foregroundColor('#333'));
}


/***/ }),

/***/ "./src/Views/SectionSubHeadline.ts":
/*!*****************************************!*\
  !*** ./src/Views/SectionSubHeadline.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_101657__) => {

__nested_webpack_require_101657__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_101657__.d(__webpack_exports__, {
/* harmony export */   "SectionSubHeadline": () => (/* binding */ SectionSubHeadline)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_101657__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_101657__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function SectionSubHeadline(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('"Proxima Nova","Helvetica Neue",Helvetica,Arial,sans-serif').fontSize('16px').fontWeight('normal').lineHeight('1.42857').foregroundColor('#666666'));
}


/***/ }),

/***/ "./src/Views/SectionTitle.ts":
/*!***********************************!*\
  !*** ./src/Views/SectionTitle.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_102689__) => {

__nested_webpack_require_102689__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_102689__.d(__webpack_exports__, {
/* harmony export */   "SectionTitle": () => (/* binding */ SectionTitle)
/* harmony export */ });
/* harmony import */ var _RegularText__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_102689__(/*! ./RegularText */ "./src/Views/RegularText.ts");

function SectionTitle(value) {
    return ((0,_RegularText__WEBPACK_IMPORTED_MODULE_0__.RegularText)(value).fontWeight('500'));
}


/***/ }),

/***/ "./src/Views/SelectAnalysisView.ts":
/*!*****************************************!*\
  !*** ./src/Views/SelectAnalysisView.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_103451__) => {

__nested_webpack_require_103451__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_103451__.d(__webpack_exports__, {
/* harmony export */   "SelectAnalysisView": () => (/* binding */ SelectAnalysisView)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_103451__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_103451__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageTitle__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_103451__(/*! ./PageTitle */ "./src/Views/PageTitle.ts");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_103451__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_103451__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_103451__(/*! ./Badge */ "./src/Views/Badge.ts");
/* harmony import */ var _RegularText__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_103451__(/*! ./RegularText */ "./src/Views/RegularText.ts");





var menuItems = [
    {
        icon: '\\f091',
        title: 'Add to model',
        onClick: function (item) { return console.log(item); }
    },
    {
        icon: '\\d2da',
        title: 'Tags',
        onClick: function (item) { return console.log(item); }
    },
    {
        icon: '\\f06b',
        title: 'Help',
        onClick: function (item) { return console.log(item); }
    }
];
var NewAnalyseTypes = [
    {
        id: 'process_overview',
        icon: '\\d2dc',
        title: 'Process Overview',
        description: 'An overhead view of your process',
        link: function (project) { return "/app(procetra)/modules/process-overview/overview/" + project.project_id; }
    },
    {
        id: 'dashboard',
        icon: '\\d2db',
        title: 'Dashboard',
        description: 'A new dashboard waiting to be built.',
        // controller: new ProcessDashboardController(),
    },
    {
        id: 'process_discover',
        icon: '\\d320',
        title: 'Discover',
        description: 'To understand and analyze your business',
        //controller: new ProcessExplorerController(),
    },
    {
        id: 'monitoring',
        icon: '\\d2c9',
        title: 'Monitoring',
        badge: 'New',
        description: 'Follow the process indicators',
        // controller: new MonitoringController(),
    },
    {
        id: 'statistics',
        icon: '\\d31a',
        title: 'Statistics',
        badge: 'Updated',
        description: 'General statistics of the process',
        // controller: new ProcessStatisticController(),
    },
    {
        id: 'variant_explorer',
        icon: '\\d203',
        title: 'Variant Explorer',
        badge: 'New',
        // controller: new VariantExplorerController(),
    },
    {
        id: 'loops',
        icon: '\\e028',
        title: 'Loops',
        badge: 'Preview',
        //controller: new LoopsController(),
    },
    {
        id: 'automation',
        icon: '\\d271',
        title: 'Automation',
        // controller: new AutomationController(),
    },
    {
        id: 'case_explorer',
        icon: '\\d25b',
        title: 'Case Explorer',
        // controller: new CaseExplorerController(),
    },
    {
        id: 'difference_analyse',
        icon: '\\d2a7',
        title: 'Difference Analyse'
    },
    {
        id: 'benchmarking',
        icon: '\\d218',
        title: 'Benchmarking'
    },
    {
        id: 'lead_times',
        icon: '\\d36b',
        title: 'Lead Times'
    },
    {
        id: 'process_steps',
        icon: '\\efe4',
        title: 'Process Steps'
    },
    {
        id: 'complience_analysis',
        icon: '\\d219',
        title: 'Complience Analysis'
    },
    {
        id: 'comformance_check',
        icon: '\\d21a',
        title: 'Comformance Check'
    },
    {
        id: 'social',
        icon: '\\d21c',
        title: 'Social'
    },
    {
        id: 'process_ai',
        icon: '\\d273',
        title: 'Process AI'
    },
    {
        id: 'costs',
        icon: '\\d23c',
        title: 'Cost'
    },
    {
        id: 'forecast',
        icon: '\\d229',
        title: 'Forecast'
    },
    {
        id: '',
        icon: '\\d222',
        title: 'Mosts'
    },
    {
        id: 'bottlenecks',
        icon: '\\d246',
        title: 'Bottlenecks'
    },
    {
        id: 'durations',
        icon: '\\d207',
        title: 'Durations'
    },
    {
        id: 'breakdown',
        icon: '\\d210',
        title: 'Breakdown'
    },
    {
        id: 'distribution',
        icon: '\\d27c',
        title: 'Distribution'
    },
    {
        id: 'metrics',
        icon: '\\d290',
        title: 'Metrics'
    }
];
function searchBox(_a) {
    var onSearchTextChanged = _a.onSearchTextChanged;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\d22c')
        .size(20)
        .paddingRight('10px')
        .paddingLeft('10px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TextField)().fontSize('1rem')
        .backgroundColor('transparent')
        .foregroundColor('#495057')
        .onTextChange(function (text) { setTimeout(function () { return onSearchTextChanged(text); }, 100); }))
        .width()
        .padding('0.50rem 0.50rem 0.50rem 0rem')
        .initial({ width: '50%', backgroundColor: 'rgba(255,255,255,0.3)' }).animate({ width: '50%' }).focus({ width: '80%', backgroundColor: 'rgba(255,255,255,0.6)' })
        .paddingRight('5px')
        .overflow('hidden')
        .cornerRadius(20)
        .border({ default: '1px solid #ced4da', focus: 'solid 1px #6366F1' })
        .shadow({ default: '', focus: '0 0 0 0.2rem #c7d2fe' })
        //.transition('background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s')
        //.backgroundColor('rgba(255,255,255,0.3)')
        .height()
        .tabIndex(0)).height());
}
function NewAnalyseModelTitleBox(tag, project, _a) {
    var id = _a.id, icon = _a.icon, title = _a.title, description = _a.description, link = _a.link, badge = _a.badge;
    return function (_a) {
        var controller = _a.controller;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)(
        // Menu stack
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)(
        // Badge('New', '#22C55E99', '#ffffff66'),
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Case)(badge, {
            'New': (0,_Badge__WEBPACK_IMPORTED_MODULE_3__.Badge)(badge, 'white', '#22C55E99'),
            'Updated': (0,_Badge__WEBPACK_IMPORTED_MODULE_3__.Badge)(badge, 'white', '#3B82F699'),
            'Preview': (0,_Badge__WEBPACK_IMPORTED_MODULE_3__.Badge)(badge, 'white', '#F59E0B99')
        }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(menuItems)(function (item) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(item.icon).size(16), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(item.title)).onClick(function (e) { item.onClick(null); });
        }))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\d2c6').size(20))
            .cursor('pointer')
            .border('solid 1px var(--sub-border-color)')
            .transition('border .3s')
            .cornerRadius(5)
            .marginRight('10px')).height(), //auto
        // Analysis Icon
        icon && (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(icon).size(50).foregroundColor('var(--sub-icon-color)').marginBottom('10px'), 
        // Analysis Name
        (0,_RegularText__WEBPACK_IMPORTED_MODULE_4__.RegularText)(title).fontSize('18px').searchWords([tag]), 
        // Analysis Description
        description && (0,_RegularText__WEBPACK_IMPORTED_MODULE_4__.RegularText)(description).fontSize('12px'))
            .marginTop('10px')
            .marginRight('10px')
            .cornerRadius(10)
            .width(240).height(150)
            .backgroundColor('rgba(255,255,255,0.3)')
            .shadow('rgb(0 0 0 / 2%) 0px 1px 3px 0px, rgb(27 31 35 / 15%) 0px 0px 0px 1px')
            .initial({ opacity: 0 }).animate({ opacity: 1 })
            .onClick(function () { return controller.navigotor(link(project)); })
            .variable('--sub-border-color', { default: 'transparent', hover: '#14a9d5' })
            .variable('--sub-icon-color', { default: '#33333366', hover: '#2baab5' })
            .variable('--sub-icon-size', { default: '50px', hover: '60px' })
            .cursor('pointer'));
    };
}
function SelectAnalysisView(project) {
    var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.bindState)(''), searchText = _a[0], setSearchText = _a[1];
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_PageTitle__WEBPACK_IMPORTED_MODULE_1__.PageTitle)('\\d27e', 'Mining Modules')).height().paddingTop('20px'), searchBox({ onSearchTextChanged: function (text) { return setSearchText(text); } }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ScrollView)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTop, spacing: 10 }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(NewAnalyseTypes)(function (item) {
        return (_tuval_core__WEBPACK_IMPORTED_MODULE_2__.is.nullOrEmpty(searchText) ||
            item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
            && NewAnalyseModelTitleBox(searchText, project, item);
    })).wrap('wrap').height().padding(10))));
}


/***/ }),

/***/ "./src/Views/Texts.ts":
/*!****************************!*\
  !*** ./src/Views/Texts.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_113969__) => {

__nested_webpack_require_113969__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_113969__.d(__webpack_exports__, {
/* harmony export */   "Headline1": () => (/* binding */ Headline1),
/* harmony export */   "Headline2": () => (/* binding */ Headline2),
/* harmony export */   "Headline3": () => (/* binding */ Headline3),
/* harmony export */   "Headline4": () => (/* binding */ Headline4),
/* harmony export */   "Headline5": () => (/* binding */ Headline5),
/* harmony export */   "AnimHeadline5": () => (/* binding */ AnimHeadline5),
/* harmony export */   "Headline6": () => (/* binding */ Headline6),
/* harmony export */   "Subtitle1": () => (/* binding */ Subtitle1),
/* harmony export */   "Subtitle2": () => (/* binding */ Subtitle2),
/* harmony export */   "Body1": () => (/* binding */ Body1),
/* harmony export */   "Body2": () => (/* binding */ Body2),
/* harmony export */   "ButtonText": () => (/* binding */ ButtonText),
/* harmony export */   "Caption": () => (/* binding */ Caption),
/* harmony export */   "Overline": () => (/* binding */ Overline),
/* harmony export */   "RegularText": () => (/* binding */ RegularText),
/* harmony export */   "SectionTitle": () => (/* binding */ SectionTitle),
/* harmony export */   "SectionContent": () => (/* binding */ SectionContent),
/* harmony export */   "SectionHeadline": () => (/* binding */ SectionHeadline),
/* harmony export */   "SectionSubHeadline": () => (/* binding */ SectionSubHeadline)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_113969__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_113969__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function Headline1(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('lighter').fontSize('97.8462px').kerning('-1.5px'));
}
function Headline2(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('lighter').fontSize('61.1538px').kerning('-0.5px'));
}
function Headline3(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('48.9231px').kerning('0px'));
}
function Headline4(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('34.6538px').kerning('0.25px'));
}
function Headline5(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('24.4615px').kerning('0px'));
}
function AnimHeadline5(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').kerning('0px').initial({ fontSize: '1px' }).animate({ fontSize: '25px' }));
}
function Headline6(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('500').fontSize('20.3846px').kerning('0.15px'));
}
function Subtitle1(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('16.3077px').kerning('0.15px'));
}
function Subtitle2(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('500').fontSize('14.2692px').kerning('0.1px'));
}
function Body1(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('16.3077px').kerning('0.5px'));
}
function Body2(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('14.2692px').kerning('0.25px'));
}
function ButtonText(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('500').fontSize('14.2692px').kerning('1.25px').textTransform('uppercase'));
}
function Caption(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('12.2308px').kerning('0.4px'));
}
function Overline(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('10.1923px').kerning('1.5px').textTransform('uppercase'));
}
function RegularText(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('"Proxima Nova","Helvetica Neue",Helvetica,Arial,sans-serif').fontSize('14px').lineHeight('1.42857').foregroundColor('#333'));
}
function SectionTitle(value) {
    return (RegularText(value).fontWeight('500'));
}
function SectionContent(value) {
    return (RegularText(value));
}
function SectionHeadline(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('"Proxima Nova","Helvetica Neue",Helvetica,Arial,sans-serif').fontSize('20px').lineHeight('1.42857').foregroundColor('#333'));
}
function SectionSubHeadline(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('"Proxima Nova","Helvetica Neue",Helvetica,Arial,sans-serif').fontSize('16px').fontWeight('normal').lineHeight('1.42857').foregroundColor('#666666'));
}


/***/ }),

/***/ "./src/Views/TileBox.ts":
/*!******************************!*\
  !*** ./src/Views/TileBox.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_119742__) => {

__nested_webpack_require_119742__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_119742__.d(__webpack_exports__, {
/* harmony export */   "TileBox": () => (/* binding */ TileBox)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_119742__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_119742__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function TileBox() {
    var content = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i];
    }
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack.apply(void 0, content).padding(10)
        .backgroundColor('rgb(255,255,255,60%)')
        .cornerRadius('12px')
        .shadow({ default: '0 1px 3px 0 rgb(0 0 0 / 10%), 0 2px 5px 0 rgb(0 0 0 / 5%)', focus: '0 0 3px 1px #00c3ff' })
        .tabIndex(0)).padding(2));
}


/***/ }),

/***/ "./src/Views/TileBoxHeaderText.ts":
/*!****************************************!*\
  !*** ./src/Views/TileBoxHeaderText.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_121032__) => {

__nested_webpack_require_121032__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_121032__.d(__webpack_exports__, {
/* harmony export */   "TileBoxHeaderText": () => (/* binding */ TileBoxHeaderText)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_121032__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_121032__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Headline5__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_121032__(/*! ./Headline5 */ "./src/Views/Headline5.ts");


function TileBoxHeaderText(value) {
    if (_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal) {
        return ((0,_Headline5__WEBPACK_IMPORTED_MODULE_1__.Headline5)(value).fontFamily('Ubuntu, sans-serif').padding('20px 30px 0 30px').fontWeight('700').foregroundColor('#495057DD'));
    }
    else {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).padding('20px 30px 0 30px').fontFamily('Proxima Nova').fontSize('14px').foregroundColor('#888888'));
    }
}


/***/ }),

/***/ "./src/Views/index.ts":
/*!****************************!*\
  !*** ./src/Views/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_122403__) => {

__nested_webpack_require_122403__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_122403__.d(__webpack_exports__, {
/* harmony export */   "CalculationMethodText": () => (/* reexport safe */ _CalculationMethodText__WEBPACK_IMPORTED_MODULE_0__.CalculationMethodText),
/* harmony export */   "DesktopPageTitle": () => (/* reexport safe */ _DesktopPageTitle__WEBPACK_IMPORTED_MODULE_1__.DesktopPageTitle),
/* harmony export */   "Headline4": () => (/* reexport safe */ _Headline4__WEBPACK_IMPORTED_MODULE_2__.Headline4),
/* harmony export */   "Headline5": () => (/* reexport safe */ _Headline5__WEBPACK_IMPORTED_MODULE_3__.Headline5),
/* harmony export */   "PageTitle": () => (/* reexport safe */ _PageTitle__WEBPACK_IMPORTED_MODULE_4__.PageTitle),
/* harmony export */   "PortalPageTitle": () => (/* reexport safe */ _PortalPageTitle__WEBPACK_IMPORTED_MODULE_5__.PortalPageTitle),
/* harmony export */   "PortalSideMenu": () => (/* reexport safe */ _PortalSideMenu__WEBPACK_IMPORTED_MODULE_6__.PortalSideMenu),
/* harmony export */   "RegularText": () => (/* reexport safe */ _RegularText__WEBPACK_IMPORTED_MODULE_7__.RegularText),
/* harmony export */   "SectionContent": () => (/* reexport safe */ _SectionContent__WEBPACK_IMPORTED_MODULE_8__.SectionContent),
/* harmony export */   "SectionHeadline": () => (/* reexport safe */ _SectionHeadline__WEBPACK_IMPORTED_MODULE_9__.SectionHeadline),
/* harmony export */   "SectionSubHeadline": () => (/* reexport safe */ _SectionSubHeadline__WEBPACK_IMPORTED_MODULE_10__.SectionSubHeadline),
/* harmony export */   "SectionTitle": () => (/* reexport safe */ _SectionTitle__WEBPACK_IMPORTED_MODULE_11__.SectionTitle),
/* harmony export */   "TileBox": () => (/* reexport safe */ _TileBox__WEBPACK_IMPORTED_MODULE_12__.TileBox),
/* harmony export */   "TileBoxHeaderText": () => (/* reexport safe */ _TileBoxHeaderText__WEBPACK_IMPORTED_MODULE_13__.TileBoxHeaderText),
/* harmony export */   "PortalFilterBarWidget": () => (/* reexport safe */ _PortalFilterBarWidget__WEBPACK_IMPORTED_MODULE_14__.PortalFilterBarWidget),
/* harmony export */   "PageButton": () => (/* reexport safe */ _PageButton__WEBPACK_IMPORTED_MODULE_15__.PageButton),
/* harmony export */   "Badge": () => (/* reexport safe */ _Badge__WEBPACK_IMPORTED_MODULE_16__.Badge),
/* harmony export */   "CancelButton": () => (/* reexport safe */ _CancelButton__WEBPACK_IMPORTED_MODULE_17__.CancelButton),
/* harmony export */   "FormView": () => (/* reexport safe */ _FormView__WEBPACK_IMPORTED_MODULE_18__.FormView),
/* harmony export */   "SelectAnalysisView": () => (/* reexport safe */ _SelectAnalysisView__WEBPACK_IMPORTED_MODULE_19__.SelectAnalysisView),
/* harmony export */   "ProjectMainMenu": () => (/* reexport safe */ _ProjectMainMenu__WEBPACK_IMPORTED_MODULE_20__.ProjectMainMenu)
/* harmony export */ });
/* harmony import */ var _CalculationMethodText__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_122403__(/*! ./CalculationMethodText */ "./src/Views/CalculationMethodText.ts");
/* harmony import */ var _DesktopPageTitle__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_122403__(/*! ./DesktopPageTitle */ "./src/Views/DesktopPageTitle.ts");
/* harmony import */ var _Headline4__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_122403__(/*! ./Headline4 */ "./src/Views/Headline4.ts");
/* harmony import */ var _Headline5__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_122403__(/*! ./Headline5 */ "./src/Views/Headline5.ts");
/* harmony import */ var _PageTitle__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_122403__(/*! ./PageTitle */ "./src/Views/PageTitle.ts");
/* harmony import */ var _PortalPageTitle__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_122403__(/*! ./PortalPageTitle */ "./src/Views/PortalPageTitle.ts");
/* harmony import */ var _PortalSideMenu__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_122403__(/*! ./PortalSideMenu */ "./src/Views/PortalSideMenu.ts");
/* harmony import */ var _RegularText__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_122403__(/*! ./RegularText */ "./src/Views/RegularText.ts");
/* harmony import */ var _SectionContent__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_122403__(/*! ./SectionContent */ "./src/Views/SectionContent.ts");
/* harmony import */ var _SectionHeadline__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_122403__(/*! ./SectionHeadline */ "./src/Views/SectionHeadline.ts");
/* harmony import */ var _SectionSubHeadline__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_122403__(/*! ./SectionSubHeadline */ "./src/Views/SectionSubHeadline.ts");
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_122403__(/*! ./SectionTitle */ "./src/Views/SectionTitle.ts");
/* harmony import */ var _TileBox__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_122403__(/*! ./TileBox */ "./src/Views/TileBox.ts");
/* harmony import */ var _TileBoxHeaderText__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_122403__(/*! ./TileBoxHeaderText */ "./src/Views/TileBoxHeaderText.ts");
/* harmony import */ var _PortalFilterBarWidget__WEBPACK_IMPORTED_MODULE_14__ = __nested_webpack_require_122403__(/*! ./PortalFilterBarWidget */ "./src/Views/PortalFilterBarWidget.ts");
/* harmony import */ var _PageButton__WEBPACK_IMPORTED_MODULE_15__ = __nested_webpack_require_122403__(/*! ./PageButton */ "./src/Views/PageButton.ts");
/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_16__ = __nested_webpack_require_122403__(/*! ./Badge */ "./src/Views/Badge.ts");
/* harmony import */ var _CancelButton__WEBPACK_IMPORTED_MODULE_17__ = __nested_webpack_require_122403__(/*! ./CancelButton */ "./src/Views/CancelButton.ts");
/* harmony import */ var _FormView__WEBPACK_IMPORTED_MODULE_18__ = __nested_webpack_require_122403__(/*! ./FormView */ "./src/Views/FormView.ts");
/* harmony import */ var _SelectAnalysisView__WEBPACK_IMPORTED_MODULE_19__ = __nested_webpack_require_122403__(/*! ./SelectAnalysisView */ "./src/Views/SelectAnalysisView.ts");
/* harmony import */ var _ProjectMainMenu__WEBPACK_IMPORTED_MODULE_20__ = __nested_webpack_require_122403__(/*! ./ProjectMainMenu */ "./src/Views/ProjectMainMenu.ts");























/***/ }),

/***/ "@tuval/core":
/*!******************************!*\
  !*** external "@tuval/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__tuval_core__;

/***/ }),

/***/ "@tuval/forms":
/*!*******************************!*\
  !*** external "@tuval/forms" ***!
  \*******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__tuval_forms__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_129076__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_129076__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_129076__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nested_webpack_require_129076__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_129076__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_129076__.o(definition, key) && !__nested_webpack_require_129076__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_129076__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_129076__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__nested_webpack_require_129076__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_129076__.d(__webpack_exports__, {
/* harmony export */   "Badge": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.Badge),
/* harmony export */   "CalculationMethodText": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.CalculationMethodText),
/* harmony export */   "CancelButton": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.CancelButton),
/* harmony export */   "DesktopPageTitle": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.DesktopPageTitle),
/* harmony export */   "FormView": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.FormView),
/* harmony export */   "Headline4": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.Headline4),
/* harmony export */   "Headline5": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.Headline5),
/* harmony export */   "PageButton": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.PageButton),
/* harmony export */   "PageTitle": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.PageTitle),
/* harmony export */   "PortalFilterBarWidget": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.PortalFilterBarWidget),
/* harmony export */   "PortalPageTitle": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.PortalPageTitle),
/* harmony export */   "PortalSideMenu": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.PortalSideMenu),
/* harmony export */   "ProjectMainMenu": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.ProjectMainMenu),
/* harmony export */   "RegularText": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.RegularText),
/* harmony export */   "SectionContent": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.SectionContent),
/* harmony export */   "SectionHeadline": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.SectionHeadline),
/* harmony export */   "SectionSubHeadline": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.SectionSubHeadline),
/* harmony export */   "SectionTitle": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.SectionTitle),
/* harmony export */   "SelectAnalysisView": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.SelectAnalysisView),
/* harmony export */   "TileBox": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.TileBox),
/* harmony export */   "TileBoxHeaderText": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.TileBoxHeaderText),
/* harmony export */   "BrokerProjectService": () => (/* reexport safe */ _Services__WEBPACK_IMPORTED_MODULE_2__.BrokerProjectService),
/* harmony export */   "ConfigService": () => (/* reexport safe */ _Services__WEBPACK_IMPORTED_MODULE_2__.ConfigService),
/* harmony export */   "Services": () => (/* reexport safe */ _Services__WEBPACK_IMPORTED_MODULE_2__.Services),
/* harmony export */   "MiningBrokerClient": () => (/* reexport safe */ _BrokerClients__WEBPACK_IMPORTED_MODULE_3__.MiningBrokerClient),
/* harmony export */   "ListBounceAnimation": () => (/* reexport safe */ _ListBounceAnimation__WEBPACK_IMPORTED_MODULE_4__.ListBounceAnimation)
/* harmony export */ });
/* harmony import */ var _Views__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_129076__(/*! ./Views */ "./src/Views/index.ts");
/* harmony import */ var _Models__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_129076__(/*! ./Models */ "./src/Models/index.ts");
/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_129076__(/*! ./Services */ "./src/Services/index.ts");
/* harmony import */ var _BrokerClients__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_129076__(/*! ./BrokerClients */ "./src/BrokerClients/index.ts");
/* harmony import */ var _ListBounceAnimation__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_129076__(/*! ./ListBounceAnimation */ "./src/ListBounceAnimation.ts");






})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/Controllers/Activity/ActivityController.ts":
/*!********************************************************!*\
  !*** ./src/Controllers/Activity/ActivityController.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_140039__) => {

"use strict";
__nested_webpack_require_140039__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_140039__.d(__webpack_exports__, {
/* harmony export */   "ActivityController": () => (/* binding */ ActivityController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_140039__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_140039__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ActivityController = /** @class */ (function (_super) {
    __extends(ActivityController, _super);
    function ActivityController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActivityController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Activity Controller')));
    };
    return ActivityController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/Controllers/Overview/OverviewController.ts":
/*!********************************************************!*\
  !*** ./src/Controllers/Overview/OverviewController.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_142285__) => {

"use strict";
__nested_webpack_require_142285__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_142285__.d(__webpack_exports__, {
/* harmony export */   "OverviewController": () => (/* binding */ OverviewController)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_142285__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_142285__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_142285__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_142285__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Views_ActivitySection__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_142285__(/*! ./Views/ActivitySection */ "./src/Controllers/Overview/Views/ActivitySection.ts");
/* harmony import */ var _Views_HappyPathSection__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_142285__(/*! ./Views/HappyPathSection */ "./src/Controllers/Overview/Views/HappyPathSection.ts");
/* harmony import */ var _Views_MetricsSection__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_142285__(/*! ./Views/MetricsSection */ "./src/Controllers/Overview/Views/MetricsSection.ts");
/* harmony import */ var _procetra_common__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_142285__(/*! @procetra/common */ "./node_modules/@procetra/common/index.js");
/* harmony import */ var _procetra_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_142285__.n(_procetra_common__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var data = [
    { x: new Date(2021, 1, 1), y: 532.2 }, { x: new Date(2021, 2, 1), y: 453.4 },
    { x: new Date(2021, 3, 1), y: 422.8 }, { x: new Date(2021, 4, 1), y: 531.6 },
    { x: new Date(2021, 5, 1), y: 642.3 }, { x: new Date(2021, 6, 1), y: 432.5 },
    { x: new Date(2021, 7, 1), y: 462.9 }, { x: new Date(2021, 8, 1), y: 445.8 },
    { x: new Date(2021, 9, 1), y: 561.4 }, { x: new Date(2021, 10, 1), y: 433.1 }
];
var testActivitySectionModel = [
    {
        activityName: 'Activity 1',
        casePercentage: 14,
        eventCount: 40463
    },
    {
        activityName: 'Activity 2',
        casePercentage: 14,
        eventCount: 40463
    },
    {
        activityName: 'Activity 3',
        casePercentage: 14,
        eventCount: 40463
    },
    {
        activityName: 'Activity 4',
        casePercentage: 14,
        eventCount: 40463
    },
    {
        activityName: 'Activity 5',
        casePercentage: 14,
        eventCount: 40463
    }
];
var happyPathDiagramModelTest = [
    {
        name: 'Test 1'
    },
    {
        name: 'Test 1'
    },
    {
        name: 'Test 1'
    }
];
var OverviewController = /** @class */ (function (_super) {
    __extends(OverviewController, _super);
    function OverviewController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OverviewController.prototype.InitController = function () {
        // this.chart = new EventsOverTimeChart();
        var map = new Map();
        // this.map = [];
        for (var i = 0; i < 100; i++) {
            map[i] = i;
        }
        // this.chart.SetChartData(map);
        this.activitySectionModel = testActivitySectionModel;
    };
    OverviewController.prototype.BindRouterParams = function (_a) {
        var _this = this;
        var project_id = _a.project_id;
        _procetra_common__WEBPACK_IMPORTED_MODULE_5__.MiningBrokerClient.GetProjectById(project_id).then(function (project) {
            _this.project = project;
            var session_id = _procetra_common__WEBPACK_IMPORTED_MODULE_5__.Services.StateService.GetSessionId();
            _procetra_common__WEBPACK_IMPORTED_MODULE_5__.MiningBrokerClient.GetHappyPath(_this.project.project_id).then(function (info) {
                _this.happyPathModel = info;
            });
            _procetra_common__WEBPACK_IMPORTED_MODULE_5__.MiningBrokerClient.GetActivities(_this.project.project_id, 'concept:name').then(function (info) {
                console.log(info);
                _this.activities = [];
                for (var key in info) {
                    _this.activities.push({
                        activityName: key,
                        casePercentage: info[key]['case_rate'],
                        eventCount: info[key]['event_count']
                    });
                }
            });
            _procetra_common__WEBPACK_IMPORTED_MODULE_5__.MiningBrokerClient.GetDailyCasesPerMonth(_this.project.project_id).then(function (info) {
                var result = [];
                for (var i = 0; i < info.daily_cases_per_month.length; i++) {
                    result.push({
                        x: new Date(info.daily_cases_per_month[i].year, info.daily_cases_per_month[i].month - 1, 1),
                        y: Math.round(info.daily_cases_per_month[i].case_rate)
                    });
                }
                _this.metricSectionModel = {
                    metricBoxNodels: [
                        {
                            title: 'Cases per day',
                            value: _tuval_core__WEBPACK_IMPORTED_MODULE_0__.TMath.round(info.case_per_day, 2).toString(),
                            subTitle: 'Total number of cases per day',
                            /*  showMenu: new Bindable(false, this), */
                            chart: {
                                dataSource: [
                                    { x: 1, xval: 'Jan', yval: 34 },
                                    { x: 2, xval: 'Feb', yval: 36 },
                                    { x: 3, xval: 'Mar', yval: 32 },
                                    { x: 4, xval: 'Apr', yval: 35 },
                                    { x: 5, xval: 'May', yval: 40 },
                                    { x: 6, xval: 'Jun', yval: 38 },
                                    { x: 7, xval: 'Jul', yval: 33 },
                                    { x: 8, xval: 'Aug', yval: 37 },
                                    { x: 9, xval: 'Sep', yval: 34 },
                                    { x: 10, xval: 'Oct', yval: 31 },
                                    { x: 11, xval: 'Nov', yval: 30 },
                                    { x: 12, xval: 'Dec', yval: 29 },
                                ],
                                xName: 'xval',
                                yName: 'yval',
                            }
                        },
                        {
                            title: 'Events per day',
                            value: _tuval_core__WEBPACK_IMPORTED_MODULE_0__.TMath.round(info.event_per_day, 2).toString(),
                            subTitle: 'Total number of events per day',
                            /* showMenu: new Bindable(false, this), */
                            chart: {
                                dataSource: [
                                    { x: 1, xval: 'Jan', yval: 12 },
                                    { x: 2, xval: 'Feb', yval: 36 },
                                    { x: 3, xval: 'Mar', yval: 56 },
                                    { x: 4, xval: 'Apr', yval: 76 },
                                    { x: 5, xval: 'May', yval: 34 },
                                    { x: 6, xval: 'Jun', yval: 39 },
                                    { x: 7, xval: 'Jul', yval: 50 },
                                    { x: 8, xval: 'Aug', yval: 43 },
                                    { x: 9, xval: 'Sep', yval: 34 },
                                    { x: 10, xval: 'Oct', yval: 17 },
                                    { x: 11, xval: 'Nov', yval: 30 },
                                    { x: 12, xval: 'Dec', yval: 56 },
                                ],
                                xName: 'xval', yName: 'yval',
                            }
                        },
                        {
                            title: 'Throughput time',
                            value: '26 DAYS',
                            subTitle: 'Average case duration from process start to process end without extreme outliers',
                            /* showMenu: new Bindable(false, this), */
                            chart: {
                                dataSource: [
                                    { x: 1, xval: 'Jan', yval: 23 },
                                    { x: 2, xval: 'Feb', yval: 35 },
                                    { x: 3, xval: 'Mar', yval: 43 },
                                    { x: 4, xval: 'Apr', yval: 35 },
                                    { x: 5, xval: 'May', yval: 40 },
                                    { x: 6, xval: 'Jun', yval: 53 },
                                    { x: 7, xval: 'Jul', yval: 33 },
                                    { x: 8, xval: 'Aug', yval: 12 },
                                    { x: 9, xval: 'Sep', yval: 20 },
                                    { x: 10, xval: 'Oct', yval: 31 },
                                    { x: 11, xval: 'Nov', yval: 30 },
                                    { x: 12, xval: 'Dec', yval: 29 },
                                ],
                                xName: 'xval', yName: 'yval',
                            }
                        }
                    ],
                    data: result
                };
            });
        });
    };
    OverviewController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })((0,_Views_MetricsSection__WEBPACK_IMPORTED_MODULE_4__.MetricsSection)(this.metricSectionModel), (0,_Views_HappyPathSection__WEBPACK_IMPORTED_MODULE_3__.HappyPathSection)(this.happyPathModel), (0,_Views_ActivitySection__WEBPACK_IMPORTED_MODULE_2__.ActivitySection)(this.activities)).position(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.PositionTypes.Absolute));
    };
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.State)()
    ], OverviewController.prototype, "metricSectionModel", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.State)()
    ], OverviewController.prototype, "happyPathModel", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.State)()
    ], OverviewController.prototype, "activities", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.State)()
    ], OverviewController.prototype, "activitySectionModel", void 0);
    return OverviewController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIController));



/***/ }),

/***/ "./src/Controllers/Overview/Views/ActivityBox.ts":
/*!*******************************************************!*\
  !*** ./src/Controllers/Overview/Views/ActivityBox.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_154910__) => {

"use strict";
__nested_webpack_require_154910__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_154910__.d(__webpack_exports__, {
/* harmony export */   "ActivityBox": () => (/* binding */ ActivityBox)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_154910__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_154910__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_154910__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_154910__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);


function ActivityBox(params) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icon)('\\d309').size(30).foregroundColor('#14A9D5'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(params.activityName)
        .padding(10)
        .fontFamily('Proxima Nova')
        .fontWeight('500')
        .fontSize('14px')
        .foregroundColor('#333'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)("In " + _tuval_core__WEBPACK_IMPORTED_MODULE_0__.Convert.ToInt32(params.casePercentage) + "% of cases").fontFamily('Proxima Nova').fontSize('14px').foregroundColor('#333'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(params.eventCount + " Events").fontFamily('Proxima Nova').fontSize('14px').foregroundColor('#888'))
        .padding('20px')
        .backgroundColor('rgb(255,255,255,60%)')
        .cornerRadius('12px')
        .shadow({ default: '0 1px 3px 0 rgb(0 0 0 / 10%), 0 2px 5px 0 rgb(0 0 0 / 5%)', focus: '0 0 3px 1px #00c3ff' })
        .tabIndex(0))
        /* .border('solid var(--border-width) yellow') */
        .height('180px')
        .padding('10px')
        .maxWidth('25%'));
}


/***/ }),

/***/ "./src/Controllers/Overview/Views/ActivitySection.ts":
/*!***********************************************************!*\
  !*** ./src/Controllers/Overview/Views/ActivitySection.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_157297__) => {

"use strict";
__nested_webpack_require_157297__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_157297__.d(__webpack_exports__, {
/* harmony export */   "ActivitySection": () => (/* binding */ ActivitySection)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_157297__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_157297__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ActivityBox__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_157297__(/*! ./ActivityBox */ "./src/Controllers/Overview/Views/ActivityBox.ts");


function ActivitySection(activities) {
    return (
    // We want to space 10px between every vertical block
    (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Other frequent activities')
        .marginTop('30px')
        .paddingTop('5px')
        /*    .height('38px') */
        .fontFamily('Proxima Nova')
        .fontSize('20px')
        .foregroundColor('#333333'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e8b8').size(20).foregroundColor({ default: 'rgb(120,120,120, 50%)', hover: 'rgb(120,120,120, 80%)' })))
        // We prevent this stack to large more than its content
        .height('auto'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(activities)(function (activity) {
        return (0,_ActivityBox__WEBPACK_IMPORTED_MODULE_1__.ActivityBox)({ activityName: activity.activityName, casePercentage: activity.casePercentage, eventCount: activity.eventCount });
    })).height('auto')
        .wrap('wrap')));
}


/***/ }),

/***/ "./src/Controllers/Overview/Views/HappyPathBox.ts":
/*!********************************************************!*\
  !*** ./src/Controllers/Overview/Views/HappyPathBox.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_159718__) => {

"use strict";
__nested_webpack_require_159718__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_159718__.d(__webpack_exports__, {
/* harmony export */   "HappyPathGaugeBox": () => (/* binding */ HappyPathGaugeBox),
/* harmony export */   "HappyPathBox2": () => (/* binding */ HappyPathBox2),
/* harmony export */   "HappyPathBox3": () => (/* binding */ HappyPathBox3)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_159718__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_159718__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_159718__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_159718__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Views_TileBoxHeaderText__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_159718__(/*! ../../../Views/TileBoxHeaderText */ "./src/Views/TileBoxHeaderText.ts");



function HappyPathGaugeBox(params) {
    debugger;
    return (params == null ?
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UISkeleton)().width('100%').height('245px')
        :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_Views_TileBoxHeaderText__WEBPACK_IMPORTED_MODULE_2__.TileBoxHeaderText)('Happy path in percentages'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Gauge)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Range)()).color('rgb(118,209,187)').maskColor('rgb(120,120,120,20%)')
                .radius(80)
                .stroke(10)
                .value(_tuval_core__WEBPACK_IMPORTED_MODULE_0__.Convert.ToInt32(params.rate_count))
                .height(155)))
                .height('245px')
                .backgroundColor('rgb(255,255,255,60%)')
                .cornerRadius('12px')
                .shadow({ default: '0 1px 3px 0 rgb(0 0 0 / 10%), 0 2px 5px 0 rgb(0 0 0 / 5%)', focus: '0 0 3px 1px #00c3ff' })
                .marginHorizontal('2px')
                .tabIndex(0));
}
function HappyPathBox2(params) {
    return (params == null ?
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UISkeleton)().width('100%').height('245px')
        :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_Views_TileBoxHeaderText__WEBPACK_IMPORTED_MODULE_2__.TileBoxHeaderText)('Happy path in absolute numbers'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VDivider)().width('1px').background('gray'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.RoundedRectangle)().background('transparent').height('10px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.RoundedRectangle)().background({ default: '#14A9D5', hover: 'gray' }).height('20px').width().initial({ width: 0 }).animate({ width: (params.count / params.count_sum) * 100 + "%" }).__transition({ duration: 1 }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.RoundedRectangle)().background('#E4E4E4').height('20px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.RoundedRectangle)().background('transparent').height('10px'))).padding('30px').width('70%'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(params === null || params === void 0 ? void 0 : params.count.toString()).fontFamily('Proxima Nova').fontWeight('500').fontSize('27px').foregroundColor('#14a9d5'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)("of " + params.count_sum + " Cases")
                .marginBottom('15px')
                .fontFamily('Proxima Nova')
                .fontWeight('500')
                .fontSize('20px')
                .foregroundColor('#888888'))
                .height('245px')
                .backgroundColor('rgb(255,255,255,60%)')
                .cornerRadius('12px')
                .shadow({ default: '0 1px 3px 0 rgb(0 0 0 / 10%), 0 2px 5px 0 rgb(0 0 0 / 5%)', focus: '0 0 3px 1px #00c3ff' })
                .marginHorizontal('2px')
                .tabIndex(0));
}
function dhm(t) {
    debugger;
    var cd = 24 * 60 * 60 * 1000, ch = 60 * 60 * 1000, d = Math.floor(t / cd), h = Math.floor((t - d * cd) / ch), m = Math.round((t - d * cd - h * ch) / 60000), pad = function (n) { return n < 10 ? '0' + n : n; };
    if (m === 60) {
        h++;
        m = 0;
    }
    if (h === 24) {
        d++;
        h = 0;
    }
    return [d, pad(h), pad(m)].join(':');
}
function HappyPathBox3(params) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_Views_TileBoxHeaderText__WEBPACK_IMPORTED_MODULE_2__.TileBoxHeaderText)('Happy path throughput time'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cBottom })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.RoundedRectangle)().background('transparent').width('10px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.RoundedRectangle)().background('#14A9D5').width('20px').height('50%'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.RoundedRectangle)().background('#E4E4E4').width('20px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.RoundedRectangle)().background('transparent').width('10px')), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HDivider)().height('1px').background('gray').width('50%')).padding('30px').width('70%'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(dhm((params === null || params === void 0 ? void 0 : params.caseDuration_mean) * 1000)[0]).fontFamily('Proxima Nova').fontWeight('500').fontSize('27px').foregroundColor('#14a9d5'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(dhm((params === null || params === void 0 ? void 0 : params.caseDuration_all_mean) * 1000)[0])
        .marginBottom('15px')
        .fontFamily('Proxima Nova')
        .fontSize('20px')
        .foregroundColor('#888888'))
        .height('245px')
        .backgroundColor('rgb(255,255,255,60%)')
        .cornerRadius('12px')
        .shadow({ default: '0 1px 3px 0 rgb(0 0 0 / 10%), 0 2px 5px 0 rgb(0 0 0 / 5%)', focus: '0 0 3px 1px #00c3ff' })
        .marginHorizontal('2px')
        .tabIndex(0));
}


/***/ }),

/***/ "./src/Controllers/Overview/Views/HappyPathDiagram.ts":
/*!************************************************************!*\
  !*** ./src/Controllers/Overview/Views/HappyPathDiagram.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_166526__) => {

"use strict";
__nested_webpack_require_166526__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_166526__.d(__webpack_exports__, {
/* harmony export */   "HappyPathDiagram": () => (/* binding */ HappyPathDiagram)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_166526__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_166526__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Views_TileBoxHeaderText__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_166526__(/*! ../../../Views/TileBoxHeaderText */ "./src/Views/TileBoxHeaderText.ts");


function HappyPathDiagram(items) {
    return (items == null ?
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UISkeleton)().width('100%').height(154)
        :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_Views_TileBoxHeaderText__WEBPACK_IMPORTED_MODULE_1__.TileBoxHeaderText)('Algorithmic happy path').fontSize('14px').fontWeight('500').foregroundColor('#333').fontFamily('Proxima Nova'), _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(items.variant.split(','))(function (item, index) {
                return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(item).marginBottom('10px').fontSize('14px').fontWeight('500').foregroundColor('#333').fontFamily('Proxima Nova'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 3 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.If)(index === 0)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)().width('100%'))
                    .else((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.RoundedRectangle)().height(3).background('#e4e4e4').marginTop('-1px')), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.If)(index === 0)(null)
                    .else((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIImage)('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTNweCIgaGVpZ2h0PSIxM3B4IiB2aWV3Qm94PSIwIDAgMTMgMTMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA0MC4xICgzMzgwNCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+OTBDRDYzRDItOENGNy00OERFLTgzQTAtQUUzMTdERTg0MjVDPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQcm9jZXNzLW1ldHJpY3MiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJQcm9jZXNzLS0tb3ZlcnZpZXciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04NTYuMDAwMDAwLCAtMTE0OC4wMDAwMDApIiBmaWxsPSIjQ0NDQ0NDIj4KICAgICAgICAgICAgPGcgaWQ9Ik1BSU4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5MC4wMDAwMDAsIDU2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IkhhcHB5LXBhdGgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA2NjEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkhhcHB5LXBhdGgtdml6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMjk1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iTmV3LWhhcHB5LXBhdGgtdml6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMC4wMDAwMDAsIDc2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlJlY3RhbmdsZS00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2NDIuNTAwMDAwLCA2Ni41MDAwMDApIHJvdGF0ZSgtMjcwLjAwMDAwMCkgdHJhbnNsYXRlKC02NDIuNTAwMDAwLCAtNjYuNTAwMDAwKSAiIHBvaW50cz0iNjQyLjUgNjAgNjQ5IDczIDY0Mi41IDY5Ljc1IDYzNiA3MyI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=').marginLeft('-3px')), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\d309').size(30).foregroundColor('#14A9D5'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.If)(index === items.variant.split(',').length - 1)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)().width('100%'))
                    .else((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.RoundedRectangle)().height(3).background('#e4e4e4').marginTop('-1px'))))
                    .height() // auto
                    .marginTop('20px');
            })))
                .backgroundColor('rgb(255,255,255,60%)')
                .cornerRadius('12px')
                .height(154)
                .shadow({ default: '0 1px 3px 0 rgb(0 0 0 / 10%), 0 2px 5px 0 rgb(0 0 0 / 5%)', focus: '0 0 3px 1px #00c3ff' })
                .marginHorizontal('2px')
                .tabIndex(0));
}


/***/ }),

/***/ "./src/Controllers/Overview/Views/HappyPathSection.ts":
/*!************************************************************!*\
  !*** ./src/Controllers/Overview/Views/HappyPathSection.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_171524__) => {

"use strict";
__nested_webpack_require_171524__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_171524__.d(__webpack_exports__, {
/* harmony export */   "HappyPathSection": () => (/* binding */ HappyPathSection)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_171524__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_171524__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HappyPathBox__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_171524__(/*! ./HappyPathBox */ "./src/Controllers/Overview/Views/HappyPathBox.ts");
/* harmony import */ var _HappyPathDiagram__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_171524__(/*! ./HappyPathDiagram */ "./src/Controllers/Overview/Views/HappyPathDiagram.ts");



function HappyPathSection(value) {
    return (
    // We want to space 10px between every vertical block
    (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Happy path')
        .marginTop('30px')
        .paddingTop('5px')
        .height('38px')
        .fontFamily('Proxima Nova')
        .fontSize('20px')
        .foregroundColor('#333333'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 10 })((0,_HappyPathBox__WEBPACK_IMPORTED_MODULE_1__.HappyPathGaugeBox)(value), (0,_HappyPathBox__WEBPACK_IMPORTED_MODULE_1__.HappyPathBox2)(value), (0,_HappyPathBox__WEBPACK_IMPORTED_MODULE_1__.HappyPathBox3)(value)).height(), //auto height,
    (0,_HappyPathDiagram__WEBPACK_IMPORTED_MODULE_2__.HappyPathDiagram)(value)).height() // auto height
    );
}


/***/ }),

/***/ "./src/Controllers/Overview/Views/MetricBox.ts":
/*!*****************************************************!*\
  !*** ./src/Controllers/Overview/Views/MetricBox.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_173630__) => {

"use strict";
__nested_webpack_require_173630__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_173630__.d(__webpack_exports__, {
/* harmony export */   "PortalMetricBox": () => (/* binding */ PortalMetricBox),
/* harmony export */   "DesktopMetricBox": () => (/* binding */ DesktopMetricBox),
/* harmony export */   "MetricBox": () => (/* binding */ MetricBox)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_173630__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_173630__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TileSparkLine__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_173630__(/*! ./TileSparkLine */ "./src/Controllers/Overview/Views/TileSparkLine.ts");
/* harmony import */ var _Views_TileBoxHeaderText__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_173630__(/*! ../../../Views/TileBoxHeaderText */ "./src/Views/TileBoxHeaderText.ts");
/* harmony import */ var _Views_MetricBoxValueText__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_173630__(/*! ../../../Views/MetricBoxValueText */ "./src/Views/MetricBoxValueText.ts");
/* harmony import */ var _Views_CalculationMethodText__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_173630__(/*! ../../../Views/CalculationMethodText */ "./src/Views/CalculationMethodText.ts");
/* harmony import */ var _ListBounceAnimation__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_173630__(/*! ../../../ListBounceAnimation */ "./src/ListBounceAnimation.ts");






function PortalMetricBox(params, selected) {
    var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(false), showMenu = _a[0], setShowMenu = _a[1];
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ZStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_Views_TileBoxHeaderText__WEBPACK_IMPORTED_MODULE_2__.TileBoxHeaderText)(params.title), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_Views_MetricBoxValueText__WEBPACK_IMPORTED_MODULE_3__.MetricBoxValueText)(params.value.toString()), 
    /* Text(params.value.toString()).fontSize('40px').fontFamily('Proxima Nova, sans serif').fontWeight('500').foregroundColor('#14a9d5'), */
    (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })(
    /* Text('monts').foregroundColor('rgb(251,192,1)').fontSize('10px').fontWeight('700'), */
    (0,_Views_CalculationMethodText__WEBPACK_IMPORTED_MODULE_4__.CalculationMethodText)('AVG')
        .onClick(function () { return setShowMenu(true); })
        .padding()
        .cornerRadius(5)
        .cursor('pointer')
        .border('dashed 1px var(--sub-border-color)')
        .transition('border .3s')))
        .paddingLeft('30px')
        .paddingTop('10px'), 
    /* VStack(
        Text('Duration').foregroundColor('#b40404'),
        Text('15 - 40 monts').foregroundColor('#AAA')
    )
        .marginLeft('32px')
        .marginBottom('5px')
        .alignment(Alignment.leading), */
    (0,_TileSparkLine__WEBPACK_IMPORTED_MODULE_1__.TileSparkLine)(params.chart)
        .slFill(selected ? '#b2cfff' : 'rgb(120,120,120,30%)')
        .slBorder(selected ? { color: '#3C78EF', width: 2 } : { color: 'gray', width: 2 })
    /*  Text(params.value).padding('10px 30px 0 30px;').fontFamily('Proxima Nova').fontSize('27px').fontWeight('500').foregroundColor('#14a9d5'),
     Text(params.subTitle).paddingLeft('30px').fontFamily('Proxima Nova').fontSize('12px').foregroundColor('#666'), */
    )
        .height(148)
        .overflow('hidden')
        .backgroundColor('rgb(255,255,255,60%)')
        .cornerRadius('12px')
        .shadow({ default: '0 1px 3px 0 rgb(0 0 0 / 10%), 0 2px 5px 0 rgb(0 0 0 / 5%)', focus: '0 0 3px 1px #00c3ff' })
        .tabIndex(0)
        // Üzerine geldiğimizde alt text border için.
        .variable('--sub-border-color', { default: 'transparent', hover: '#14a9d5' }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.AnimationStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Mean').cursor('pointer').width('100%').height('100%').shadow('inset 0 -1px 0 0 #e4e4e4').backgroundColor({ hover: '#f9f9f9' }).padding(10).onClick(function () { return setShowMenu(false); }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Median').cursor('pointer').width('100%').height('100%').shadow('inset 0 -1px 0 0 #e4e4e4').backgroundColor({ hover: '#f9f9f9' }).padding(10).onClick(function () { return setShowMenu(false); }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Max').cursor('pointer').width('100%').height('100%').shadow('inset 0 -1px 0 0 #e4e4e4').backgroundColor({ hover: '#f9f9f9' }).padding(10).onClick(function () { return setShowMenu(false); }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Min').cursor('pointer').width('100%').height('100%').shadow('inset 0 -1px 0 0 #e4e4e4').backgroundColor({ hover: '#f9f9f9' }).padding(10).onClick(function () { return setShowMenu(false); })))
        .backgroundColor('white')
        .animation(_ListBounceAnimation__WEBPACK_IMPORTED_MODULE_5__.ListBounceAnimation, '.3s')
        .visible(showMenu)).margin('2px'));
}
function DesktopMetricBox(params) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_Views_TileBoxHeaderText__WEBPACK_IMPORTED_MODULE_2__.TileBoxHeaderText)(params.title), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(params.value).padding('10px 30px 0 30px;').fontFamily('Proxima Nova').fontSize('27px').fontWeight('500').foregroundColor('#14a9d5'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(params.subTitle).paddingLeft('30px').fontFamily('Proxima Nova').fontSize('12px').foregroundColor('#666'))
        .height('148px')
        .backgroundColor('rgb(255,255,255,60%)')
        .cornerRadius('12px')
        .shadow({ default: '0 1px 3px 0 rgb(0 0 0 / 10%), 0 2px 5px 0 rgb(0 0 0 / 5%)', focus: '0 0 3px 1px #00c3ff' })
        .tabIndex(0));
}
function MetricBox(params, selected) {
    if (_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.ApplicationMode === _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ApplicationModes.Desktop) {
        return DesktopMetricBox(params);
    }
    else {
        return PortalMetricBox(params, selected);
    }
}


/***/ }),

/***/ "./src/Controllers/Overview/Views/MetricsSection.ts":
/*!**********************************************************!*\
  !*** ./src/Controllers/Overview/Views/MetricsSection.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_180559__) => {

"use strict";
__nested_webpack_require_180559__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_180559__.d(__webpack_exports__, {
/* harmony export */   "MetricsSection": () => (/* binding */ MetricsSection)
/* harmony export */ });
/* harmony import */ var _realmocean_charts__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_180559__(/*! @realmocean/charts */ "@realmocean/charts");
/* harmony import */ var _realmocean_charts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_180559__.n(_realmocean_charts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_180559__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_180559__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MetricBox__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_180559__(/*! ./MetricBox */ "./src/Controllers/Overview/Views/MetricBox.ts");
/* harmony import */ var _Views_TileBoxHeaderText__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_180559__(/*! ../../../Views/TileBoxHeaderText */ "./src/Views/TileBoxHeaderText.ts");
/* harmony import */ var _Views_TileBox__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_180559__(/*! ../../../Views/TileBox */ "./src/Views/TileBox.ts");





function MetricsSection(params) {
    var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.bindState)(0), selectedIndex = _a[0], setSelectedIndex = _a[1];
    return (
    // We want to space 10px between every vertical block
    (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Metrics').paddingTop('5px').height(38).fontFamily('Proxima Nova').fontSize(20).foregroundColor('#333333'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icon)('\\e8b8').size(20).foregroundColor({ default: 'rgb(120,120,120, 50%)', hover: 'rgb(120,120,120, 80%)' })))
        // We prevent this stack to large more than its content
        .height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ spacing: 10 }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ForEach)(params === null || params === void 0 ? void 0 : params.metricBoxNodels)(function (metricBoxModel, index) {
        return (0,_MetricBox__WEBPACK_IMPORTED_MODULE_2__.MetricBox)(metricBoxModel, selectedIndex === index).onClick(function () { return setSelectedIndex(index); });
    })).height(150), (0,_Views_TileBox__WEBPACK_IMPORTED_MODULE_4__.TileBox)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })((0,_Views_TileBoxHeaderText__WEBPACK_IMPORTED_MODULE_3__.TileBoxHeaderText)('Daily cases per month').marginBottom('10px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_realmocean_charts__WEBPACK_IMPORTED_MODULE_0__.ChartView)()((0,_realmocean_charts__WEBPACK_IMPORTED_MODULE_0__.AreaSerie)().xName('x').yName('y').border({ color: '#FBCD4E', width: 3 })
        .marker({ visible: true, width: 10, height: 10, fill: '#FBB90A', border: { color: 'white' } })
        .fill('#FBCD4E55')
        .animation({
        enable: false
    })
        .data(params === null || params === void 0 ? void 0 : params.data))
        .xAxis({
        labelStyle: {
            fontFamily: 'Ubuntu, sans-serif',
            size: '14px'
        },
        valueType: 'DateTime',
        labelFormat: 'MMM',
        majorGridLines: { width: 0 },
        intervalType: 'Months',
        edgeLabelPlacement: 'Shift'
    })
        .yAxis({
        labelStyle: {
            fontFamily: 'Ubuntu, sans-serif',
            size: '14px'
        },
        labelFormat: '{value}',
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
    })
        .backgroundColor('transparent')))).height('300px')));
}


/***/ }),

/***/ "./src/Controllers/Overview/Views/TileSparkLine.ts":
/*!*********************************************************!*\
  !*** ./src/Controllers/Overview/Views/TileSparkLine.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_185041__) => {

"use strict";
__nested_webpack_require_185041__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_185041__.d(__webpack_exports__, {
/* harmony export */   "TileSparkLine": () => (/* binding */ TileSparkLine)
/* harmony export */ });
/* harmony import */ var _realmocean_charts__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_185041__(/*! @realmocean/charts */ "@realmocean/charts");
/* harmony import */ var _realmocean_charts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_185041__.n(_realmocean_charts__WEBPACK_IMPORTED_MODULE_0__);

function TileSparkLine(model) {
    return ((0,_realmocean_charts__WEBPACK_IMPORTED_MODULE_0__.Sparkline)().model(model)
        .slType('Area')
        .slWidth('100%')
        .slHeight('50px')
        .slPadding({
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    })
        .slLineWidth(1)
        .slOpacity(1)
        .slFill('#b2cfff')
        .slBorder({ color: '#3C78EF', width: 2 })
        .slValueType('Category')
        .marginBottom('-4px'));
}


/***/ }),

/***/ "./src/Controllers/ProcessOverviewController.ts":
/*!******************************************************!*\
  !*** ./src/Controllers/ProcessOverviewController.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_186410__) => {

"use strict";
__nested_webpack_require_186410__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_186410__.d(__webpack_exports__, {
/* harmony export */   "ProcessOverviewController": () => (/* binding */ ProcessOverviewController)
/* harmony export */ });
/* harmony import */ var _realmocean_charts__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_186410__(/*! @realmocean/charts */ "@realmocean/charts");
/* harmony import */ var _realmocean_charts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_186410__.n(_realmocean_charts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_186410__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_186410__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Overview_OverviewController__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_186410__(/*! ./Overview/OverviewController */ "./src/Controllers/Overview/OverviewController.ts");
/* harmony import */ var _ThroughputTimes_ThroughputTimesController__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_186410__(/*! ./ThroughputTimes/ThroughputTimesController */ "./src/Controllers/ThroughputTimes/ThroughputTimesController.ts");
/* harmony import */ var _Activity_ActivityController__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_186410__(/*! ./Activity/ActivityController */ "./src/Controllers/Activity/ActivityController.ts");
/* harmony import */ var _Views_PortalSideMenu__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_186410__(/*! ../Views/PortalSideMenu */ "./src/Views/PortalSideMenu.ts");
/* harmony import */ var _Views_PageTitle__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_186410__(/*! ../Views/PageTitle */ "./src/Views/PageTitle.ts");
/* harmony import */ var _procetra_common__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_186410__(/*! @procetra/common */ "./node_modules/@procetra/common/index.js");
/* harmony import */ var _procetra_common__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__nested_webpack_require_186410__.n(_procetra_common__WEBPACK_IMPORTED_MODULE_7__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









function getMax(array) {
    var max = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i].data > max) {
            max = array[i].data;
        }
    }
    return max;
}
var sideMenu = [
    {
        name: 'Overview',
        icon: '\\d2de',
        controller: new _Overview_OverviewController__WEBPACK_IMPORTED_MODULE_2__.OverviewController(),
        isVisible: function () { return true; }
    },
    {
        name: 'Throughput times',
        icon: '\\d36c',
        controller: new _ThroughputTimes_ThroughputTimesController__WEBPACK_IMPORTED_MODULE_3__.ThroughputTimesController(),
        isVisible: function () { return true; }
    },
    {
        name: 'Activities',
        icon: '\\d2fd',
        controller: new _Activity_ActivityController__WEBPACK_IMPORTED_MODULE_4__.ActivityController(),
        isVisible: function () { return true; }
    }
];
var ProcessOverviewController = /** @class */ (function (_super) {
    __extends(ProcessOverviewController, _super);
    function ProcessOverviewController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.map = [];
        return _this;
    }
    ProcessOverviewController.prototype.InitController = function () {
        this.Appearance.OverflowX = 'hidden';
        this.Appearance.OverflowY = 'auto';
        this.refresh = '1';
        this.chart1 = new _realmocean_charts__WEBPACK_IMPORTED_MODULE_0__.TvChart();
        this.chart1.Appearance.Width = '100%';
        this.chart1.Appearance.Height = '100px';
        this.chart2 = new _realmocean_charts__WEBPACK_IMPORTED_MODULE_0__.TvChart();
        this.chart2.Appearance.Width = '100%';
        this.chart2.Appearance.Height = '100px';
        this.chart3 = new _realmocean_charts__WEBPACK_IMPORTED_MODULE_0__.TvChart();
        this.chart3.Appearance.Width = '100%';
        this.chart3.Appearance.Height = '100px';
    };
    ProcessOverviewController.prototype.BindRouterParams = function (_a) {
        var _this = this;
        var project_id = _a.project_id;
        _procetra_common__WEBPACK_IMPORTED_MODULE_7__.MiningBrokerClient.GetProjectById(project_id).then(function (project) {
            _this.project = project;
            // this.OnControllerChanged(0);
        });
    };
    ProcessOverviewController.prototype.OnControllerChanged = function (index) {
        this.selectedIndex = index;
        var controller = this.currentController = sideMenu[index].controller;
        controller.Bind(this.project);
    };
    ProcessOverviewController.prototype.view_Content = function () {
        var _this = this;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIScene)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_Views_PortalSideMenu__WEBPACK_IMPORTED_MODULE_5__.PortalSideMenu)({
            items: sideMenu,
            selectedAction: function (index) { return _this.OnControllerChanged(index); },
            second: true
        }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 10 })((0,_Views_PageTitle__WEBPACK_IMPORTED_MODULE_6__.PageTitle)(sideMenu[0 /* this.selectedIndex */].icon, sideMenu[0 /* this.selectedIndex */].name), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Spacer)(), 
        // View Buttons Overview, Throuthput Times
        // Only Desktop
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ spacing: 5 }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ForEach)(sideMenu)(function (item, index) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icon)(item.icon).size(14).foregroundColor('gray'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(item.name).paddingLeft('5px'))
                .action(function () { return _this.OnControllerChanged(index); })
                .border('solid 1px gray')
                .cornerRadius('10px')
                .padding('3px 10px 3px 10px')
                .background(_this.selectedIndex === index ? 'rgb(120,120,120,20%)' : '');
        })).width() // auto width
            .visible(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.TApplication.IsDesktop), 
        // Portal
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ spacing: 30 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('traces').foregroundColor('#495057').textTransform('uppercase').fontWeight('700').fontSize('14px').fontFamily('Roboto, sans-serif'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('0').foregroundColor('#999').fontWeight('700').fontSize('27px').fontFamily('Roboto, sans-serif')), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('events').foregroundColor('#495057').textTransform('uppercase').fontWeight('700').fontSize('14px').fontFamily('Roboto, sans-serif'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('0').foregroundColor('#2ca3c0').fontWeight('700').fontSize('27px').fontFamily('Roboto, sans-serif')), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('variants').foregroundColor('#495057').textTransform('uppercase').fontWeight('700').fontSize('14px').fontFamily('Roboto, sans-serif'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('0').foregroundColor('#b40404').fontWeight('700').fontSize('27px').fontFamily('Roboto, sans-serif')))
            .width() //auto width
            .visible(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.TApplication.IsPortal)).height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HDivider)().height('1px').backgroundColor('rgb(120,120,120,20%)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })(// For scrolling
        //this.currentController
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIRouteOutlet)().width('100%').height('100%')).overflowX('hidden').overflowY('auto'))
            .padding(10)
            .background(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.TApplication.IsPortal ? '#f1f1f1' : ''))));
    };
    ProcessOverviewController.prototype.LoadView = function () {
        return ((0,_procetra_common__WEBPACK_IMPORTED_MODULE_7__.FormView)({
            content: this.view_Content()
        }));
    };
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.State)()
    ], ProcessOverviewController.prototype, "chart1", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.State)()
    ], ProcessOverviewController.prototype, "chart2", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.State)()
    ], ProcessOverviewController.prototype, "chart3", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.State)()
    ], ProcessOverviewController.prototype, "chartData", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.State)()
    ], ProcessOverviewController.prototype, "map", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.State)()
    ], ProcessOverviewController.prototype, "refresh", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.State)()
    ], ProcessOverviewController.prototype, "selectedIndex", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.State)()
    ], ProcessOverviewController.prototype, "currentController", void 0);
    return ProcessOverviewController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIController));



/***/ }),

/***/ "./src/Controllers/ThroughputTimes/ThroughputTimesController.ts":
/*!**********************************************************************!*\
  !*** ./src/Controllers/ThroughputTimes/ThroughputTimesController.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_198214__) => {

"use strict";
__nested_webpack_require_198214__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_198214__.d(__webpack_exports__, {
/* harmony export */   "ThroughputTimesController": () => (/* binding */ ThroughputTimesController)
/* harmony export */ });
/* harmony import */ var _procetra_common__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_198214__(/*! @procetra/common */ "./node_modules/@procetra/common/index.js");
/* harmony import */ var _procetra_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_198214__.n(_procetra_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_198214__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_198214__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _View_BottleneckSection__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_198214__(/*! ./View/BottleneckSection */ "./src/Controllers/ThroughputTimes/View/BottleneckSection.ts");
/* harmony import */ var _View_ThroughputTimeSection__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_198214__(/*! ./View/ThroughputTimeSection */ "./src/Controllers/ThroughputTimes/View/ThroughputTimeSection.ts");
/* harmony import */ var _utils_toDaysMinutesSeconds__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_198214__(/*! ../../utils/toDaysMinutesSeconds */ "./src/utils/toDaysMinutesSeconds.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ThroughputTimesController = /** @class */ (function (_super) {
    __extends(ThroughputTimesController, _super);
    function ThroughputTimesController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThroughputTimesController.prototype.InitController = function () {
        var map = new Map();
        // this.map = [];
        for (var i = 0; i < 100; i++) {
            map[i] = i;
        }
        // this.chart.SetChartData(map);
    };
    ThroughputTimesController.prototype.OnBindModel = function (project) {
        var _this = this;
        this.project = project;
        var session_id = _procetra_common__WEBPACK_IMPORTED_MODULE_0__.Services.StateService.GetSessionId();
        _procetra_common__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient.GetThroughputTimes(this.project.project_id, '').then(function (info) {
            var result = [];
            for (var key in info) {
                result.push({
                    x: key,
                    y: info[key]
                });
            }
            _this.throughputTimeData = result;
        });
        _procetra_common__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient.GetAllPaths(this.project.project_id).then(function (_a) {
            var paths = _a.paths;
            console.log(paths);
            var result = [];
            for (var i = 0; i < paths.length; i++) {
                var names = paths[i][0].split('@@');
                result.push({
                    firtEvent: names[0],
                    secondEvent: names[1],
                    duration: (0,_utils_toDaysMinutesSeconds__WEBPACK_IMPORTED_MODULE_4__.SecondsToDay)(paths[i][1])
                });
            }
            _this.bottleneckData = result;
            console.log(_this.bottleneckData);
        });
    };
    ThroughputTimesController.prototype.LoadView = function () {
        var _a;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading, spacing: 20 })((0,_View_ThroughputTimeSection__WEBPACK_IMPORTED_MODULE_3__.ThroughputTimeSection)(this.throughputTimeData), (0,_View_BottleneckSection__WEBPACK_IMPORTED_MODULE_2__.BottleneckSection)((_a = this.bottleneckData) === null || _a === void 0 ? void 0 : _a.slice(0, 10))).position(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.PositionTypes.Absolute));
    };
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.State)()
    ], ThroughputTimesController.prototype, "throughputTimeData", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.State)()
    ], ThroughputTimesController.prototype, "bottleneckData", void 0);
    return ThroughputTimesController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIController));



/***/ }),

/***/ "./src/Controllers/ThroughputTimes/View/BottleneckSection.ts":
/*!*******************************************************************!*\
  !*** ./src/Controllers/ThroughputTimes/View/BottleneckSection.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_204296__) => {

"use strict";
__nested_webpack_require_204296__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_204296__.d(__webpack_exports__, {
/* harmony export */   "BottleneckSection": () => (/* binding */ BottleneckSection)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_204296__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_204296__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Views_RegularText__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_204296__(/*! ../../../Views/RegularText */ "./src/Views/RegularText.ts");
/* harmony import */ var _Views_SectionContent__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_204296__(/*! ../../../Views/SectionContent */ "./src/Views/SectionContent.ts");
/* harmony import */ var _Views_SectionHeadline__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_204296__(/*! ../../../Views/SectionHeadline */ "./src/Views/SectionHeadline.ts");
/* harmony import */ var _Views_SectionSubHeadline__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_204296__(/*! ../../../Views/SectionSubHeadline */ "./src/Views/SectionSubHeadline.ts");
/* harmony import */ var _Views_SectionTitle__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_204296__(/*! ../../../Views/SectionTitle */ "./src/Views/SectionTitle.ts");






function BottleneckSection(data) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_Views_SectionHeadline__WEBPACK_IMPORTED_MODULE_3__.SectionHeadline)('Bottlenecks'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e8b8').size(20).foregroundColor({ default: 'rgb(120,120,120, 50%)', hover: 'rgb(120,120,120, 80%)' })))
        // We prevent this stack to large more than its content
        .height(), (0,_Views_SectionSubHeadline__WEBPACK_IMPORTED_MODULE_4__.SectionSubHeadline)('These connections increase process throughput time considerably'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ spacing: 15 }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(data)(function (item) {
        return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTop })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.RoundedRectangle)().width(3).backgroundColor('rgb(255, 136, 132)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 5 })((0,_Views_RegularText__WEBPACK_IMPORTED_MODULE_1__.RegularText)(item.firtEvent).fontSize('16px').fontWeight('500').foregroundColor('#1d6c83'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIImage)('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgMTggMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA0MC4zICgzMzgzOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+NDY5OEVGQ0UtNDQ0NC00MjU5LUE3NjItMzFGMDBGQjRFRDlFPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQcm9jZXNzLW1ldHJpY3MiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJQcm9jZXNzLS0tdGhyb3VnaHB1dC10aW1lIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDIyLjAwMDAwMCwgLTExODMuMDAwMDAwKSIgZmlsbD0iIzBCNUY3OCI+CiAgICAgICAgICAgIDxnIGlkPSJNQUlOIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODcuMDAwMDAwLCA1NC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJCb3R0bGVuZWNrcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4wMDAwMDAsIDEwNDMuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkJvdHRsZW5lY2staXRlbSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4wMDAwMDAsIDY5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iSGVhZGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDExLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNvbm5lY3Rpb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIxNy4wMDAwMDAsIDExLjAwMDAwMCkgcm90YXRlKC05MC4wMDAwMDApIHRyYW5zbGF0ZSgtMjE3LjAwMDAwMCwgLTExLjAwMDAwMCkgdHJhbnNsYXRlKDIxMi4wMDAwMDAsIDIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQsOS42IEwtMS43NzYzNTY4NGUtMTUsOCBMNSwxOCBMMTAsOCBMNiw5LjYgTDYsMCBMNCwwIEw0LDkuNiBaIiBpZD0iaWNvbi1hcnJvdy1yaWdodCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='), (0,_Views_RegularText__WEBPACK_IMPORTED_MODULE_1__.RegularText)(item.secondEvent).fontSize('16px').fontWeight('500').foregroundColor('#1d6c83')).width().height().padding('10px 15px 10px 15px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('View cases in…').paddingLeft('15px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 20 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_Views_SectionTitle__WEBPACK_IMPORTED_MODULE_5__.SectionTitle)('Throughput time'), (0,_Views_SectionContent__WEBPACK_IMPORTED_MODULE_2__.SectionContent)(item.duration + " day(s)")).width(), //auto
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_Views_SectionTitle__WEBPACK_IMPORTED_MODULE_5__.SectionTitle)('Cases affected'), (0,_Views_SectionContent__WEBPACK_IMPORTED_MODULE_2__.SectionContent)('14%')).width() //auto
        ).paddingLeft('15px')).padding())
            .background(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Color.white.opacity(0.5))
            .shadow({ default: '0 2px 5px 0 rgb(0 0 0 / 5%), 0 1px 3px 0 rgb(0 0 0 / 10%)', hover: '0 2px 10px rgb(0 0 0 / 16%), 0 2px 5px rgb(0 0 0 / 26%)' })
            .height(122);
    })).height().padding()).height()
    // We want to space 10px between every vertical block
    );
}


/***/ }),

/***/ "./src/Controllers/ThroughputTimes/View/ThroughputTimeSection.ts":
/*!***********************************************************************!*\
  !*** ./src/Controllers/ThroughputTimes/View/ThroughputTimeSection.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_211021__) => {

"use strict";
__nested_webpack_require_211021__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_211021__.d(__webpack_exports__, {
/* harmony export */   "ThroughputTimeSection": () => (/* binding */ ThroughputTimeSection)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_211021__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_211021__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Views_RegularText__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_211021__(/*! ../../../Views/RegularText */ "./src/Views/RegularText.ts");
/* harmony import */ var _Views_SectionHeadline__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_211021__(/*! ../../../Views/SectionHeadline */ "./src/Views/SectionHeadline.ts");
/* harmony import */ var _Views_SectionSubHeadline__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_211021__(/*! ../../../Views/SectionSubHeadline */ "./src/Views/SectionSubHeadline.ts");
/* harmony import */ var _Views_TileBox__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_211021__(/*! ../../../Views/TileBox */ "./src/Views/TileBox.ts");
/* harmony import */ var _realmocean_charts__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_211021__(/*! @realmocean/charts */ "@realmocean/charts");
/* harmony import */ var _realmocean_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_211021__.n(_realmocean_charts__WEBPACK_IMPORTED_MODULE_5__);






function DurationHeadline(value) {
    return ((0,_Views_RegularText__WEBPACK_IMPORTED_MODULE_1__.RegularText)(value)
        .cursor('pointer')
        .border('dashed 1px var(--sub-border-color)')
        .transition('border .3s'));
}
function DurationText(value) {
    return ((0,_Views_RegularText__WEBPACK_IMPORTED_MODULE_1__.RegularText)(value).fontSize(40).foregroundColor('#666'));
}
function DurationUnitText(value) {
    return ((0,_Views_RegularText__WEBPACK_IMPORTED_MODULE_1__.RegularText)(value).fontSize(20).foregroundColor('#666')
        .cursor('pointer')
        .border('dashed 1px var(--sub-border-color)')
        .transition('border .3s'));
}
function ProcessStartEnd() {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 10 })((0,_Views_RegularText__WEBPACK_IMPORTED_MODULE_1__.RegularText)('Process start').fontWeight('bold').foregroundColor('#555'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\f084').size(20).marginBottom('3px'), (0,_Views_RegularText__WEBPACK_IMPORTED_MODULE_1__.RegularText)('Process end').fontWeight('bold').foregroundColor('#555'))
        .cursor('pointer')
        .border({ default: 'dashed 1px var(--sub-border-color)', hover: 'solid 1px #2ca3c0' })
        .height() //auto
        .width() //auto
    );
}
function ThroughputTimeSection(data) {
    var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.bindState)(false), showMenu = _a[0], setShowMenu = _a[1];
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_Views_SectionHeadline__WEBPACK_IMPORTED_MODULE_2__.SectionHeadline)('Throughput Time Search'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e8b8').size(20).foregroundColor({ default: 'rgb(120,120,120, 50%)', hover: 'rgb(120,120,120, 80%)' })))
        // We prevent this stack to large more than its content
        .height(), (0,_Views_SectionSubHeadline__WEBPACK_IMPORTED_MODULE_3__.SectionSubHeadline)('Select any two activities to see throughput time between them'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ZStack)((0,_Views_TileBox__WEBPACK_IMPORTED_MODULE_4__.TileBox)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTop })(DurationHeadline('Average Throughput time').onClick(function () { return setShowMenu(true); }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)(DurationText('24'), DurationUnitText('Days')), ProcessStartEnd())
        .padding(10)
        .height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_realmocean_charts__WEBPACK_IMPORTED_MODULE_5__.ChartView)()((0,_realmocean_charts__WEBPACK_IMPORTED_MODULE_5__.BarSerie)().xName('x').yName('y')
        .columnWidth(0.5)
        .fill('#FFD062')
        .animation({
        enable: false,
    })
        .data(data))
        .xAxis({
        labelStyle: {
            fontFamily: 'Ubuntu, sans-serif',
            size: '14px'
        },
        valueType: 'Category',
        labelFormat: 'MMM',
        majorGridLines: { width: 0 },
        intervalType: 'Months'
    })
        .yAxis({
        labelStyle: {
            fontFamily: 'Ubuntu, sans-serif',
            size: '14px'
        },
        labelFormat: '{value}',
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
    })
        .backgroundColor('transparent')).height(325)).height().variable('--sub-border-color', { default: 'transparent', hover: '#14a9d5' }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.AnimationStack)(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(['Average', 'Median', 'Sum', 'Maximum', 'Minimum'])(function (name, index) {
        return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(name).cursor('pointer').width('100%').height('100%').shadow('inset 0 -1px 0 0 #e4e4e4').backgroundColor({ hover: '#f9f9f9' })
            .padding(10)
            .onClick(function () { /* this.selectedIndex = index; */ setShowMenu(false); });
    })))
        .initial({ y: 20, opacity: 0 }).animate({ y: 0, opacity: 1 }).__transition({ type: "spring", bounce: 0.3 })
        .overflow('hidden')
        .backgroundColor('white')
        // .animation(ListBounceAnimation, '.3s')
        .visible(showMenu)).overflow('hidden').minHeight('475px').cornerRadius(12)).height()
    // We want to space 10px between every vertical block
    );
}


/***/ }),

/***/ "./src/ListBounceAnimation.ts":
/*!************************************!*\
  !*** ./src/ListBounceAnimation.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_217521__) => {

"use strict";
__nested_webpack_require_217521__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_217521__.d(__webpack_exports__, {
/* harmony export */   "ListBounceAnimation": () => (/* binding */ ListBounceAnimation)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_217521__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_217521__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ListBounce = /** @class */ (function (_super) {
    __extends(ListBounce, _super);
    function ListBounce() {
        var _this = _super.call(this, 'list-bounce') || this;
        var keyFrame1 = new _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.KeyFrame('from');
        keyFrame1.style.Transform = 'translate(0px, 20px)';
        keyFrame1.style.Opacity = '0';
        _this.Add(keyFrame1);
        var keyFrame2 = new _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.KeyFrame('to');
        keyFrame2.style.Transform = 'translate(0px, 0px)';
        keyFrame2.style.Opacity = '1';
        _this.Add(keyFrame2);
        return _this;
    }
    return ListBounce;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.KeyFrameCollection));
var ListBounceAnimation = new ListBounce();


/***/ }),

/***/ "./src/Views/CalculationMethodText.ts":
/*!********************************************!*\
  !*** ./src/Views/CalculationMethodText.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_219905__) => {

"use strict";
__nested_webpack_require_219905__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_219905__.d(__webpack_exports__, {
/* harmony export */   "CalculationMethodText": () => (/* binding */ CalculationMethodText)
/* harmony export */ });
/* harmony import */ var _Headline5__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_219905__(/*! ./Headline5 */ "./src/Views/Headline5.ts");

function CalculationMethodText(value) {
    return ((0,_Headline5__WEBPACK_IMPORTED_MODULE_0__.Headline5)(value).fontFamily('Proxima Nova, sans serif').foregroundColor('#AAA'));
}


/***/ }),

/***/ "./src/Views/DesktopPageTitle.ts":
/*!***************************************!*\
  !*** ./src/Views/DesktopPageTitle.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_220735__) => {

"use strict";
__nested_webpack_require_220735__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_220735__.d(__webpack_exports__, {
/* harmony export */   "DesktopPageTitle": () => (/* binding */ DesktopPageTitle)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_220735__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_220735__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function DesktopPageTitle(icon, text) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(icon).size(30).foregroundColor('gray'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(text)
        .fontFamily('Proxima Nova')
        .fontSize('22px')
        .foregroundColor('#333333'))
        .height() // auto
        .width() //auto
    );
}


/***/ }),

/***/ "./src/Views/Headline4.ts":
/*!********************************!*\
  !*** ./src/Views/Headline4.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_221928__) => {

"use strict";
__nested_webpack_require_221928__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_221928__.d(__webpack_exports__, {
/* harmony export */   "Headline4": () => (/* binding */ Headline4)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_221928__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_221928__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function Headline4(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('34.6538px').kerning('0.25px'));
}


/***/ }),

/***/ "./src/Views/Headline5.ts":
/*!********************************!*\
  !*** ./src/Views/Headline5.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_222869__) => {

"use strict";
__nested_webpack_require_222869__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_222869__.d(__webpack_exports__, {
/* harmony export */   "Headline5": () => (/* binding */ Headline5)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_222869__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_222869__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function Headline5(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('24.4615px').kerning('0px'));
}


/***/ }),

/***/ "./src/Views/MetricBoxValueText.ts":
/*!*****************************************!*\
  !*** ./src/Views/MetricBoxValueText.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_223843__) => {

"use strict";
__nested_webpack_require_223843__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_223843__.d(__webpack_exports__, {
/* harmony export */   "MetricBoxValueText": () => (/* binding */ MetricBoxValueText)
/* harmony export */ });
/* harmony import */ var _Headline4__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_223843__(/*! ./Headline4 */ "./src/Views/Headline4.ts");

function MetricBoxValueText(value) {
    return ((0,_Headline4__WEBPACK_IMPORTED_MODULE_0__.Headline4)(value).fontFamily('Proxima Nova, sans serif').fontWeight('500').foregroundColor('#14a9d5').whiteSpace('nowrap'));
}


/***/ }),

/***/ "./src/Views/PageTitle.ts":
/*!********************************!*\
  !*** ./src/Views/PageTitle.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_224678__) => {

"use strict";
__nested_webpack_require_224678__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_224678__.d(__webpack_exports__, {
/* harmony export */   "PageTitle": () => (/* binding */ PageTitle)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_224678__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_224678__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DesktopPageTitle__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_224678__(/*! ./DesktopPageTitle */ "./src/Views/DesktopPageTitle.ts");
/* harmony import */ var _PortalPageTitle__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_224678__(/*! ./PortalPageTitle */ "./src/Views/PortalPageTitle.ts");



function PageTitle(icon, text) {
    if (_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.ApplicationMode === _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ApplicationModes.Desktop) {
        return (0,_DesktopPageTitle__WEBPACK_IMPORTED_MODULE_1__.DesktopPageTitle)(icon, text);
    }
    else {
        return (0,_PortalPageTitle__WEBPACK_IMPORTED_MODULE_2__.PortalPageTitle)(icon, text);
    }
}


/***/ }),

/***/ "./src/Views/PortalPageTitle.ts":
/*!**************************************!*\
  !*** ./src/Views/PortalPageTitle.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_226166__) => {

"use strict";
__nested_webpack_require_226166__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_226166__.d(__webpack_exports__, {
/* harmony export */   "PortalPageTitle": () => (/* binding */ PortalPageTitle)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_226166__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_226166__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function PortalPageTitle(icon, text) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(icon).size(30).foregroundColor('#333333'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(text)
        .fontWeight('700')
        .fontFamily('Ubuntu, sans-serif')
        .fontSize('30px')
        .foregroundColor('#495057'))
        .marginLeft('10px')
        .width() //auto
    );
}


/***/ }),

/***/ "./src/Views/PortalSideMenu.ts":
/*!*************************************!*\
  !*** ./src/Views/PortalSideMenu.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_227415__) => {

"use strict";
__nested_webpack_require_227415__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_227415__.d(__webpack_exports__, {
/* harmony export */   "PortalSideMenu": () => (/* binding */ PortalSideMenu)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_227415__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_227415__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function PortalSideMenu(params) {
    var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.bindState)(0), selectedIndex = _a[0], setSelectedIndex = _a[1];
    if (_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal) {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(params.items)(function (item, index) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(item.icon).size(26), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(item.name).fontSize('12px').fontFamily('-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'))
                .padding(5)
                .background(selectedIndex === index ? (params.second ? '#777b80' : '#52565b') : { hover: '#eee' })
                .borderBottom(selectedIndex === index ? '2px solid #e7b54a' : '2px solid transparent')
                .cursor('pointer')
                .foregroundColor(selectedIndex === index ? 'white' : { hover: '#333', default: 'white' })
                .height(80)
                .onClick(function () { setSelectedIndex(index); params.selectedAction(index); })
                .visible(item.isVisible());
        })).width()
            .initial({ width: 0 }).animate({ width: params.second ? 75 : 80 })
            .background(params.second ? '#52565b' : '#212932')
            .shadow(params.second ? 'inset 24px 0 20px -20px #373b40' : '')
            .borderBottom('2px solid #212932'));
    }
}


/***/ }),

/***/ "./src/Views/RegularText.ts":
/*!**********************************!*\
  !*** ./src/Views/RegularText.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_229919__) => {

"use strict";
__nested_webpack_require_229919__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_229919__.d(__webpack_exports__, {
/* harmony export */   "RegularText": () => (/* binding */ RegularText)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_229919__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_229919__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function RegularText(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('"Proxima Nova","Helvetica Neue",Helvetica,Arial,sans-serif').fontSize('14px').lineHeight('1.42857').foregroundColor('#333'));
}


/***/ }),

/***/ "./src/Views/SectionContent.ts":
/*!*************************************!*\
  !*** ./src/Views/SectionContent.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_230928__) => {

"use strict";
__nested_webpack_require_230928__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_230928__.d(__webpack_exports__, {
/* harmony export */   "SectionContent": () => (/* binding */ SectionContent)
/* harmony export */ });
/* harmony import */ var _RegularText__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_230928__(/*! ./RegularText */ "./src/Views/RegularText.ts");

function SectionContent(value) {
    return ((0,_RegularText__WEBPACK_IMPORTED_MODULE_0__.RegularText)(value));
}


/***/ }),

/***/ "./src/Views/SectionHeadline.ts":
/*!**************************************!*\
  !*** ./src/Views/SectionHeadline.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_231680__) => {

"use strict";
__nested_webpack_require_231680__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_231680__.d(__webpack_exports__, {
/* harmony export */   "SectionHeadline": () => (/* binding */ SectionHeadline)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_231680__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_231680__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function SectionHeadline(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('"Proxima Nova","Helvetica Neue",Helvetica,Arial,sans-serif').fontSize('20px').lineHeight('1.42857').foregroundColor('#333'));
}


/***/ }),

/***/ "./src/Views/SectionSubHeadline.ts":
/*!*****************************************!*\
  !*** ./src/Views/SectionSubHeadline.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_232717__) => {

"use strict";
__nested_webpack_require_232717__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_232717__.d(__webpack_exports__, {
/* harmony export */   "SectionSubHeadline": () => (/* binding */ SectionSubHeadline)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_232717__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_232717__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function SectionSubHeadline(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('"Proxima Nova","Helvetica Neue",Helvetica,Arial,sans-serif').fontSize('16px').fontWeight('normal').lineHeight('1.42857').foregroundColor('#666666'));
}


/***/ }),

/***/ "./src/Views/SectionTitle.ts":
/*!***********************************!*\
  !*** ./src/Views/SectionTitle.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_233763__) => {

"use strict";
__nested_webpack_require_233763__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_233763__.d(__webpack_exports__, {
/* harmony export */   "SectionTitle": () => (/* binding */ SectionTitle)
/* harmony export */ });
/* harmony import */ var _RegularText__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_233763__(/*! ./RegularText */ "./src/Views/RegularText.ts");

function SectionTitle(value) {
    return ((0,_RegularText__WEBPACK_IMPORTED_MODULE_0__.RegularText)(value).fontWeight('500'));
}


/***/ }),

/***/ "./src/Views/TileBox.ts":
/*!******************************!*\
  !*** ./src/Views/TileBox.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_234495__) => {

"use strict";
__nested_webpack_require_234495__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_234495__.d(__webpack_exports__, {
/* harmony export */   "TileBox": () => (/* binding */ TileBox)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_234495__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_234495__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function TileBox() {
    var content = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i];
    }
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTop })(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack.apply(void 0, content).padding(10)
        .backgroundColor('rgb(255,255,255,60%)')
        .cornerRadius('12px')
        .shadow({ default: '0 1px 3px 0 rgb(0 0 0 / 10%), 0 2px 5px 0 rgb(0 0 0 / 5%)', focus: '0 0 3px 1px #00c3ff' })
        .tabIndex(0)).padding(2));
}


/***/ }),

/***/ "./src/Views/TileBoxHeaderText.ts":
/*!****************************************!*\
  !*** ./src/Views/TileBoxHeaderText.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_235862__) => {

"use strict";
__nested_webpack_require_235862__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_235862__.d(__webpack_exports__, {
/* harmony export */   "TileBoxHeaderText": () => (/* binding */ TileBoxHeaderText)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_235862__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_235862__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Headline5__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_235862__(/*! ./Headline5 */ "./src/Views/Headline5.ts");


function TileBoxHeaderText(value) {
    if (_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal) {
        return ((0,_Headline5__WEBPACK_IMPORTED_MODULE_1__.Headline5)(value).fontFamily('Ubuntu, sans-serif').padding('20px 30px 0 30px').fontWeight('700').foregroundColor('#495057DD'));
    }
    else {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).padding('20px 30px 0 30px').fontFamily('Proxima Nova').fontSize('14px').foregroundColor('#888888'));
    }
}


/***/ }),

/***/ "./src/utils/toDaysMinutesSeconds.ts":
/*!*******************************************!*\
  !*** ./src/utils/toDaysMinutesSeconds.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_237307__) => {

"use strict";
__nested_webpack_require_237307__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_237307__.d(__webpack_exports__, {
/* harmony export */   "toDaysMinutesSeconds": () => (/* binding */ toDaysMinutesSeconds),
/* harmony export */   "SecondsToDay": () => (/* binding */ SecondsToDay)
/* harmony export */ });
function toDaysMinutesSeconds(totalSeconds) {
    var seconds = Math.floor(totalSeconds % 60);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    var days = Math.floor(totalSeconds / (3600 * 24));
    var secondsStr = makeHumanReadable(seconds, 'second');
    var minutesStr = makeHumanReadable(minutes, 'minute');
    var hoursStr = makeHumanReadable(hours, 'hour');
    var daysStr = makeHumanReadable(days, 'day');
    return ("" + daysStr + hoursStr + minutesStr + secondsStr).replace(/,\s*$/, '');
}
function SecondsToDay(totalSeconds) {
    var days = Math.floor(totalSeconds / (3600 * 24));
    return days;
}
function makeHumanReadable(num, singular) {
    return num > 0
        ? num + (num === 1 ? " " + singular + ", " : " " + singular + "s, ")
        : '';
}


/***/ }),

/***/ "@realmocean/charts":
/*!*************************************!*\
  !*** external "@realmocean/charts" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__realmocean_charts__;

/***/ }),

/***/ "@tuval/core":
/*!******************************!*\
  !*** external "@tuval/core" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__tuval_core__;

/***/ }),

/***/ "@tuval/forms":
/*!*******************************!*\
  !*** external "@tuval/forms" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__tuval_forms__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_239490__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_239490__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_239490__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nested_webpack_require_239490__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_239490__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_239490__.o(definition, key) && !__nested_webpack_require_239490__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_239490__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_239490__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__nested_webpack_require_239490__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_239490__.d(__webpack_exports__, {
/* harmony export */   "ProcessOverviewController": () => (/* reexport safe */ _Controllers_ProcessOverviewController__WEBPACK_IMPORTED_MODULE_0__.ProcessOverviewController),
/* harmony export */   "OverviewController": () => (/* reexport safe */ _Controllers_Overview_OverviewController__WEBPACK_IMPORTED_MODULE_1__.OverviewController)
/* harmony export */ });
/* harmony import */ var _Controllers_ProcessOverviewController__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_239490__(/*! ./Controllers/ProcessOverviewController */ "./src/Controllers/ProcessOverviewController.ts");
/* harmony import */ var _Controllers_Overview_OverviewController__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_239490__(/*! ./Controllers/Overview/OverviewController */ "./src/Controllers/Overview/OverviewController.ts");



})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@procetra/modules/statistic/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@procetra/modules/statistic/index.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! @tuval/forms */ "@tuval/forms"), __webpack_require__(/*! @tuval/core */ "@tuval/core"), __webpack_require__(/*! @realmocean/charts */ "@realmocean/charts"));
	else { var i, a; }
})(self, function(__WEBPACK_EXTERNAL_MODULE__tuval_forms__, __WEBPACK_EXTERNAL_MODULE__tuval_core__, __WEBPACK_EXTERNAL_MODULE__realmocean_charts__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@procetra/common/index.js":
/*!************************************************!*\
  !*** ./node_modules/@procetra/common/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_1144__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__nested_webpack_require_1144__(/*! @tuval/forms */ "@tuval/forms"), __nested_webpack_require_1144__(/*! @tuval/core */ "@tuval/core"));
	else { var i, a; }
})(self, function(__WEBPACK_EXTERNAL_MODULE__tuval_forms__, __WEBPACK_EXTERNAL_MODULE__tuval_core__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/BrokerClients/MiningBrokerClient.ts":
/*!*************************************************!*\
  !*** ./src/BrokerClients/MiningBrokerClient.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_1024__) => {

__nested_webpack_require_1024__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_1024__.d(__webpack_exports__, {
/* harmony export */   "MiningBrokerClient": () => (/* binding */ MiningBrokerClient)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_1024__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_1024__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_1024__(/*! ../Services/ConfigService */ "./src/Services/ConfigService.ts");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_1024__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_1024__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};



var separators = [",", ";", "\t"];
function detectSeparator(csv) {
    var counts = {}, sepMax;
    separators.forEach(function (sep, i) {
        var re = new RegExp(sep, 'g');
        counts[sep] = (csv.match(re) || []).length;
        sepMax = !sepMax || counts[sep] > counts[sepMax] ? sep : sepMax;
    });
    return sepMax;
}
var MiningBrokerClient = /** @class */ (function () {
    function MiningBrokerClient() {
    }
    MiningBrokerClient.LoadCsv = function (csv, case_id, activity_key, timestamp_key, start_timestamp_key, resource_key, cost_key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var data = new FormData();
                        data.append('case_column_name', case_id);
                        data.append('activity_column_name', activity_key);
                        data.append('timestamp_key', timestamp_key);
                        data.append('start_timestamp_key', start_timestamp_key);
                        data.append('resource_key', resource_key);
                        data.append('cost_key', cost_key);
                        data.append('sep', detectSeparator(csv));
                        var parts = [
                            new Blob([csv], { type: 'text/plain' })
                        ];
                        var file = new File(parts, 'csv.txt');
                        data.append('file', file, 'test.csv');
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'LoadCsv?token=', data, {
                            headers: {
                                "Content-Encoding": "gzip"
                            }
                        })
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.ImportCsvFile = function (project_id, csv, case_column_name, activity_column_name, timestamp_key, start_timestamp_key, resource_key, cost_key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var data = new FormData();
                        data.append('project_id', project_id);
                        data.append('case_column_name', case_column_name);
                        data.append('activity_column_name', activity_column_name);
                        data.append('timestamp_key', timestamp_key);
                        data.append('start_timestamp_key', start_timestamp_key);
                        data.append('resource_key', resource_key);
                        data.append('cost_key', cost_key);
                        data.append('sep', detectSeparator(csv));
                        var parts = [
                            new Blob([csv], { type: 'text/plain' })
                        ];
                        var file = new File(parts, 'csv.txt');
                        data.append('file', file, 'test.csv');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'ImportCsvFile?token=', data, {
                            headers: {
                                "Content-Encoding": "gzip"
                            }
                        })
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetStatistics = function (log_id, activity_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        form.append('activity_name', activity_name);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetStatistics?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetActivityOverview = function (log_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetActivityStatistics?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetItemOverview = function (log_id, item_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        form.append('activity_name', item_name);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetStatistics?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetStartActivities = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetStartActivities?token=', form)
                            .then(function (response) {
                            resolve(response.data.startActivities);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetStartItems = function (log_id, item_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        form.append('item_name', item_name);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetStartItems', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetEndActivities = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetEndActivities?token=', form)
                            .then(function (response) {
                            resolve(response.data.endActivities);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetEndItems = function (log_id, item_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        form.append('item_name', item_name);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetEndItems?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetAllVariants = function (project_id, max_no_variants) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        // form.append('max_no_variants', '10');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetAllVariants?token=', form)
                            .then(function (response) {
                            resolve(response.data.variants);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetVariants = function (project_id, max_no_variants) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        // form.append('max_no_variants', '10');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetVariants?token=', form)
                            .then(function (response) {
                            resolve(response.data.variants);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetEventsPerTime = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        // form.append('max_no_variants', '10');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetEventsPerTime?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetHappyPath = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        // form.append('max_no_variants', '10');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetHappyPath?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetActivities = function (project_id, activity_key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('activity_key', activity_key);
                        // form.append('max_no_variants', '10');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetActivities?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetThroughputTimes = function (project_id, activity_key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('activity_key', activity_key);
                        // form.append('max_no_variants', '10');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetThroughputTimes?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetLogSummary = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetLogSummary?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetAllVariantsAndCases = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetAllVariantsAndCases?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetAllPaths = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetAllPaths?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetAttributeValues = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetAttributeValues?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetDailyCasesPerMonth = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetDailyCasesPerMonth?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetProcessSchema = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        // form.append('max_no_variants', '10');
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetProcessSchema?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetLog = function (log_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetLog?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetEventsOverTime = function (log_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetEventsOverTime?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetEventDataInfo = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetEventDataInfo?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.LoadEventData = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'LoadEventData?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetResourceOverview = function (log_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('log_id', log_id);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetResourceOverview?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.Login = function (user, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('user', user);
                        form.append('password', password);
                        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'LoginService?token=', form)
                            .then(function (response) {
                            resolve(response.data.sessionId);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.CreateProject = function (project_name, admin, is_public, disable_cache) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_name', project_name);
                        form.append('admin', admin);
                        form.append('is_public', is_public ? "true" : "false");
                        form.append('disable_cache', disable_cache ? "true" : "false");
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'CreateProject?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetProjects = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetProjects?token=')
                            .then(function (response) {
                            resolve(response.data.projects);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetProjectById = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetProjectById?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.CreateProjectItem = function (project_id, model_id, item_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('model_id', model_id);
                        form.append('item_id', item_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'CreateProjectItem?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetProjectItems = function (project_id, model_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('model_id', model_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetProjectItems?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    //#region Anayse Models
    MiningBrokerClient.CreateAnalyseModel = function (project_id, analyse_model_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('analyse_model_name', analyse_model_name);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'CreateAnalyseModel?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetAnalyseModelById = function (project_id, model_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('model_id', model_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetAnalyseModelById?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.DeleteAnalyseModelById = function (project_id, model_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('model_id', model_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'DeleteAnalyseModelById?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetAnalyseModels = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'GetAnalyseModels?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    //#endregion
    MiningBrokerClient.CreateMapping = function (project_id, mapping_name, mapping_file_name, mapping_data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        form.append('mapping_name', mapping_name);
                        form.append('mapping_file_name', mapping_file_name);
                        form.append('mapping_data', mapping_data);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'CreateMapping?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetCaseCount = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'metrics/GetCaseCount?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    MiningBrokerClient.GetEventCount = function (project_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var form = new FormData();
                        form.append('project_id', project_id);
                        _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.RealmHttpClient.Post(_Services_ConfigService__WEBPACK_IMPORTED_MODULE_1__.ConfigService.GetMiningBrokerUrl() + 'metrics/GetEventCount?token=', form)
                            .then(function (response) {
                            resolve(response.data);
                        });
                    })];
            });
        });
    };
    return MiningBrokerClient;
}());



/***/ }),

/***/ "./src/BrokerClients/index.ts":
/*!************************************!*\
  !*** ./src/BrokerClients/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_39860__) => {

__nested_webpack_require_39860__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_39860__.d(__webpack_exports__, {
/* harmony export */   "MiningBrokerClient": () => (/* reexport safe */ _MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient)
/* harmony export */ });
/* harmony import */ var _MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_39860__(/*! ./MiningBrokerClient */ "./src/BrokerClients/MiningBrokerClient.ts");



/***/ }),

/***/ "./src/ListBounceAnimation.ts":
/*!************************************!*\
  !*** ./src/ListBounceAnimation.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_40565__) => {

__nested_webpack_require_40565__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_40565__.d(__webpack_exports__, {
/* harmony export */   "ListBounceAnimation": () => (/* binding */ ListBounceAnimation)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_40565__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_40565__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ListBounce = /** @class */ (function (_super) {
    __extends(ListBounce, _super);
    function ListBounce() {
        var _this = _super.call(this, 'list-bounce') || this;
        var keyFrame1 = new _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.KeyFrame('from');
        keyFrame1.style.Transform = 'translate(0px, 20px)';
        keyFrame1.style.Opacity = '0';
        _this.Add(keyFrame1);
        var keyFrame2 = new _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.KeyFrame('to');
        keyFrame2.style.Transform = 'translate(0px, 0px)';
        keyFrame2.style.Opacity = '1';
        _this.Add(keyFrame2);
        return _this;
    }
    return ListBounce;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.KeyFrameCollection));
var ListBounceAnimation = new ListBounce();


/***/ }),

/***/ "./src/Models/MIHappPath.ts":
/*!**********************************!*\
  !*** ./src/Models/MIHappPath.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_42895__) => {

__nested_webpack_require_42895__.r(__webpack_exports__);



/***/ }),

/***/ "./src/Models/MIMiningModel.ts":
/*!*************************************!*\
  !*** ./src/Models/MIMiningModel.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_43202__) => {

__nested_webpack_require_43202__.r(__webpack_exports__);



/***/ }),

/***/ "./src/Models/MIProject.ts":
/*!*********************************!*\
  !*** ./src/Models/MIProject.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_43493__) => {

__nested_webpack_require_43493__.r(__webpack_exports__);



/***/ }),

/***/ "./src/Models/index.ts":
/*!*****************************!*\
  !*** ./src/Models/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_43768__) => {

__nested_webpack_require_43768__.r(__webpack_exports__);
/* harmony import */ var _MIProject__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_43768__(/*! ./MIProject */ "./src/Models/MIProject.ts");
/* harmony import */ var _MIMiningModel__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_43768__(/*! ./MIMiningModel */ "./src/Models/MIMiningModel.ts");
/* harmony import */ var _MIHappPath__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_43768__(/*! ./MIHappPath */ "./src/Models/MIHappPath.ts");





/***/ }),

/***/ "./src/Resources/Icons/NewFile.ts":
/*!****************************************!*\
  !*** ./src/Resources/Icons/NewFile.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_44514__) => {

__nested_webpack_require_44514__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_44514__.d(__webpack_exports__, {
/* harmony export */   "NewFileIcon": () => (/* binding */ NewFileIcon)
/* harmony export */ });
var NewFileIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNNDIuNSwyMmgtMjVjLTAuNTUyLDAtMSwwLjQ0Ny0xLDFzMC40NDgsMSwxLDFoMjVjMC41NTIsMCwxLTAuNDQ3LDEtMVM0My4wNTIsMjIsNDIuNSwyMnoiLz4NCgk8cGF0aCBkPSJNMTcuNSwxNmgxMGMwLjU1MiwwLDEtMC40NDcsMS0xcy0wLjQ0OC0xLTEtMWgtMTBjLTAuNTUyLDAtMSwwLjQ0Ny0xLDFTMTYuOTQ4LDE2LDE3LjUsMTZ6Ii8+DQoJPHBhdGggZD0iTTQyLjUsMzBoLTI1Yy0wLjU1MiwwLTEsMC40NDctMSwxczAuNDQ4LDEsMSwxaDI1YzAuNTUyLDAsMS0wLjQ0NywxLTFTNDMuMDUyLDMwLDQyLjUsMzB6Ii8+DQoJPHBhdGggZD0iTTQyLjUsMzhoLTI1Yy0wLjU1MiwwLTEsMC40NDctMSwxczAuNDQ4LDEsMSwxaDI1YzAuNTUyLDAsMS0wLjQ0NywxLTFTNDMuMDUyLDM4LDQyLjUsMzh6Ii8+DQoJPHBhdGggZD0iTTQyLjUsNDZoLTI1Yy0wLjU1MiwwLTEsMC40NDctMSwxczAuNDQ4LDEsMSwxaDI1YzAuNTUyLDAsMS0wLjQ0NywxLTFTNDMuMDUyLDQ2LDQyLjUsNDZ6Ii8+DQoJPHBhdGggZD0iTTM4LjkxNCwwSDYuNXY2MGg0N1YxNC41ODZMMzguOTE0LDB6IE0zOS41LDMuNDE0TDUwLjA4NiwxNEgzOS41VjMuNDE0eiBNOC41LDU4VjJoMjl2MTRoMTR2NDJIOC41eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';


/***/ }),

/***/ "./src/Resources/Icons/OpenFile.ts":
/*!*****************************************!*\
  !*** ./src/Resources/Icons/OpenFile.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_46595__) => {

__nested_webpack_require_46595__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_46595__.d(__webpack_exports__, {
/* harmony export */   "OpenFileIcon": () => (/* binding */ OpenFileIcon)
/* harmony export */ });
var OpenFileIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBkPSJNNTcuNDksMjEuNUg1NHYtNi4yNjhjMC0xLjUwNy0xLjIyNi0yLjczMi0yLjczMi0yLjczMkgyNi41MTVsLTUtN0gyLjczMkMxLjIyNiw1LjUsMCw2LjcyNiwwLDguMjMydjQzLjY4N2wwLjAwNiwwDQoJYy0wLjAwNSwwLjU2MywwLjE3LDEuMTE0LDAuNTIyLDEuNTc1QzEuMDE4LDU0LjEzNCwxLjc2LDU0LjUsMi41NjUsNTQuNWg0NC43NTljMS4xNTYsMCwyLjE3NC0wLjc3OSwyLjQ1LTEuODEzTDYwLDI0LjY0OXYtMC4xNzcNCglDNjAsMjIuNzUsNTguOTQ0LDIxLjUsNTcuNDksMjEuNXogTTIsOC4yMzJDMiw3LjgyOCwyLjMyOSw3LjUsMi43MzIsNy41aDE3Ljc1M2w1LDdoMjUuNzgyYzAuNDA0LDAsMC43MzIsMC4zMjgsMC43MzIsMC43MzJWMjEuNQ0KCUgxMi43MzFjLTAuMTQ0LDAtMC4yODcsMC4wMTItMC40MjYsMC4wMzZjLTAuOTczLDAuMTYzLTEuNzgyLDAuODczLTIuMDIzLDEuNzc2TDIsNDUuODk5VjguMjMyeiBNNDcuODY5LDUyLjA4Mw0KCWMtMC4wNjYsMC4yNDUtMC4yOTEsMC40MTctMC41NDUsMC40MTdIMi41NjVjLTAuMjQzLDAtMC4zODUtMC4xMzktMC40NDgtMC4yMjJjLTAuMDYzLTAuMDgyLTAuMTYtMC4yNTYtMC4xMjMtMC40MDhsMTAuMTkxLTI3Ljk1Mw0KCWMwLjA2Ni0wLjI0NSwwLjI5MS0wLjQxNywwLjU0NS0wLjQxN0g1NGgzLjQ5YzAuMzgsMCwwLjQ3NywwLjU0NiwwLjUwMiwwLjgxOUw0Ny44NjksNTIuMDgzeiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';


/***/ }),

/***/ "./src/Resources/Icons/SaveFile.ts":
/*!*****************************************!*\
  !*** ./src/Resources/Icons/SaveFile.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_48787__) => {

__nested_webpack_require_48787__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_48787__.d(__webpack_exports__, {
/* harmony export */   "SaveFileIcon": () => (/* binding */ SaveFileIcon)
/* harmony export */ });
var SaveFileIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDkgNDkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5IDQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNMzkuOTE0LDBIMzcuNWgtMjhoLTl2NDloN2gzM2g4VjguNTg2TDM5LjkxNCwweiBNMzUuNSwydjE0aC0yNFYySDM1LjV6IE05LjUsNDdWMjhoMjl2MTlIOS41eiBNNDYuNSw0N2gtNlYyNmgtMzN2MjFoLTUNCgkJVjJoN3YxNmgyOFYyaDEuNTg2TDQ2LjUsOS40MTRWNDd6Ii8+DQoJPHBhdGggZD0iTTEzLjUsMzNoN2MwLjU1MywwLDEtMC40NDcsMS0xcy0wLjQ0Ny0xLTEtMWgtN2MtMC41NTMsMC0xLDAuNDQ3LTEsMVMxMi45NDcsMzMsMTMuNSwzM3oiLz4NCgk8cGF0aCBkPSJNMjMuNSwzNWgtMTBjLTAuNTUzLDAtMSwwLjQ0Ny0xLDFzMC40NDcsMSwxLDFoMTBjMC41NTMsMCwxLTAuNDQ3LDEtMVMyNC4wNTMsMzUsMjMuNSwzNXoiLz4NCgk8cGF0aCBkPSJNMjUuNzksMzUuMjljLTAuMTgxLDAuMTg5LTAuMjksMC40NS0wLjI5LDAuNzFzMC4xMDksMC41MiwwLjI5LDAuNzFDMjUuOTc5LDM2Ljg5LDI2LjIyOSwzNywyNi41LDM3DQoJCWMwLjI2LDAsMC41Mi0wLjExLDAuNzEtMC4yOWMwLjE4LTAuMTksMC4yOS0wLjQ1LDAuMjktMC43MXMtMC4xMS0wLjUyMS0wLjI5LTAuNzFDMjYuODQsMzQuOTIsMjYuMTYsMzQuOTIsMjUuNzksMzUuMjl6Ii8+DQoJPHBhdGggZD0iTTMzLjUsNGgtNnYxMGg2VjR6IE0zMS41LDEyaC0yVjZoMlYxMnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K';


/***/ }),

/***/ "./src/Resources/Resources.ts":
/*!************************************!*\
  !*** ./src/Resources/Resources.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_50895__) => {

__nested_webpack_require_50895__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_50895__.d(__webpack_exports__, {
/* harmony export */   "Resources": () => (/* binding */ Resources)
/* harmony export */ });
/* harmony import */ var _Icons_NewFile__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_50895__(/*! ./Icons/NewFile */ "./src/Resources/Icons/NewFile.ts");
/* harmony import */ var _Icons_OpenFile__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_50895__(/*! ./Icons/OpenFile */ "./src/Resources/Icons/OpenFile.ts");
/* harmony import */ var _Icons_SaveFile__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_50895__(/*! ./Icons/SaveFile */ "./src/Resources/Icons/SaveFile.ts");



var Resources = {
    Icons: {
        NewFile: _Icons_NewFile__WEBPACK_IMPORTED_MODULE_0__.NewFileIcon,
        OpenFile: _Icons_OpenFile__WEBPACK_IMPORTED_MODULE_1__.OpenFileIcon,
        SaveFile: _Icons_SaveFile__WEBPACK_IMPORTED_MODULE_2__.SaveFileIcon,
        ApplicationIcon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgdmVyc2lvbj0iMS4xIgogICB3aWR0aD0iMjIxLjgwMTcxIgogICBoZWlnaHQ9IjE5Ny4wODUxIgogICB2aWV3Qm94PSIwIDAgMjIxLjgwMTcxIDE5Ny4wODUxIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpZD0ic3ZnODciCiAgIHNvZGlwb2RpOmRvY25hbWU9ImxvZ29fcHJvY2V0cmFfLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4xLjIgKGI4ZTI1YmU4LCAyMDIyLTAyLTA1KSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48c29kaXBvZGk6bmFtZWR2aWV3CiAgIGlkPSJuYW1lZHZpZXcyMCIKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICBzaG93Z3JpZD0iZmFsc2UiCiAgIGlua3NjYXBlOnpvb209IjAuNzY3IgogICBpbmtzY2FwZTpjeD0iMjE4LjM4MzMxIgogICBpbmtzY2FwZTpjeT0iOTguNDM1NDYzIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijc0NyIKICAgaW5rc2NhcGU6d2luZG93LXg9IjE0NTQiCiAgIGlua3NjYXBlOndpbmRvdy15PSIxNjIiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2Zzg3IiAvPgo8ZGVzYwogICBpZD0iZGVzYzY2Ij5DcmVhdGVkIHdpdGggRmFicmljLmpzIDMuNS4wPC9kZXNjPgo8ZGVmcwogICBpZD0iZGVmczY4Ij4KPC9kZWZzPgoKPGcKICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4wNzk4LDAsMCwxLjA3OTgsMTEwLjkwMDg2LDk4LjU0MjU0OCkiCiAgIGlkPSJMYXllcl8xIj4KPHBhdGgKICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNkMDNmNDA7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIKICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMyMS44OTUsLTI5Ny42NCkiCiAgIGQ9Ik0gNDEyLjM3LDM4OC45IEggMjMyLjQyIGMgLTcuMzEsMCAtMTMuMjMsLTUuOTIgLTEzLjIzLC0xMy4yMyBWIDIxOS42MSBjIDAsLTcuMzEgNS45MiwtMTMuMjMgMTMuMjMsLTEzLjIzIGggMTc4Ljk1IGMgNy4zMSwwIDEzLjIzLDUuOTIgMTMuMjMsMTMuMjMgdiAxNTcuMDYgYyAtMC4wMSw2Ljc1IC01LjQ4LDEyLjIzIC0xMi4yMywxMi4yMyB6IgogICBzdHJva2UtbGluZWNhcD0icm91bmQiCiAgIGlkPSJwYXRoNzIiIC8+CjwvZz4KPGcKICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4wNzk4LDAsMCwxLjA3OTgsMTEwLjg5MTE2LDk4LjA4NzU0OCkiCiAgIGlkPSJnNzciPgo8cGF0aAogICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIgogICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIxLjg4NTYsLTI5Ny4yMTgyKSIKICAgZD0ibSA0MDQuMSwyNjYuMjcgYyAtMC4wOCwtNC4wNCAtMC4yNSwtOC4zMSAtMC45NiwtMTIuMjUgLTEuNzksLTkuOTggLTYuMzMsLTE3LjI2IC0xMy44NywtMjIuMjcgLTUuODUsLTMuODggLTEyLjcxLC01LjY5IC0yMS41NiwtNS42OSAtMjEuMTUsMC4wMiAtNDIuMjQsMC4wMyAtNjMuMzMsMC4wMyBoIC01Mi42OSBjIC02LjcsMCAtMTIuMTMsNS45OSAtMTIuMTMsMTMuMzggdiAxMjQuNjIgYyAwLDIuMzUgMS43Miw0LjI1IDMuODUsNC4yNSBoIDE1Ljc3IGMgMi4xMywwIDMuODUsMC40NiAzLjg1LC0xLjg5IHYgLTMxLjAzIGMgMCwtMC40NCAwLjA0LC0wLjg2IDAuMTIsLTEuMjggdiAtMzUuODYgLTEwLjQxIC0zMi45MSBjIDAsLTMuNjggMi42MSwtNi43MSA1Ljk0LC02LjkxIHYgMCBjIDAuNSwtMC4wMyAwLjk2LC0wLjA2IDEuNDIsLTAuMDYgaCAxMC4yNiAyOS44NyBjIDE2LjMzLDAgMzIuNjcsMCA0OS4wMSwtMC4wMiA1LjI5LDAgOS42NCwxLjMzIDEzLjM0LDQuMDYgNS4yMiwzLjg1IDguMDEsOS40OCA4LjA3LDE2LjI3IDAuMDUsNi4xIDAuMDUsMTEuMTUgMCwxNS44OSAtMC4xMiwxMC44MiAtNy4wNiwxOS4wNiAtMTYuODcsMjAuMDQgLTIuMDQsMC4yIC00LjA2LDAuMzEgLTYuMDIsMC4zMSAtMTAuMjksMC4wMSAtMjAuNTksMC4wMSAtMzAuODgsMC4wMSAtNS41NywwIC0xMC4wOCw0Ljk4IC0xMC4wOCwxMS4xMiB2IDAgYyAwLDYuMTUgNC41MSwxMS4xMyAxMC4wOSwxMS4xMiAxMS40OCwtMC4wMSAyOS44MywtMC4wNCAzOC45NiwtMC4wOCA0LjU0LC0wLjAyIDkuMTMsLTAuNTYgMTMuNjUsLTEuNjEgOS4wNCwtMi4xIDE1LjQ4LC03LjA0IDE5LjY4LC0xNS4xIDIuOSwtNS41NyA0LjM4LC0xMi4xIDQuNTMsLTE5Ljk5IDAuMTIsLTguMzcgMC4xMywtMTYuMTQgLTAuMDIsLTIzLjc0IHoiCiAgIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgaWQ9InBhdGg3NSIgLz4KPC9nPgo8ZwogICB0cmFuc2Zvcm09Im1hdHJpeCgxLjA3OTgsMCwwLDEuMDc5OCw2NC44Mzc2NTksMTY5Ljg0NTA1KSIKICAgaWQ9Imc4MSI+CjxwYXRoCiAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiCiAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNzkuMjM1LC0zNjMuNjcpIgogICBkPSJtIDI5MC44NSwzNjkuMjIgdiAtMC4zNiBjIC0wLjk2LC02LjExIC01Ljc4LC0xMC43NSAtMTEuNTksLTEwLjc1IC01LjkzLDAgLTEwLjgxLDQuODMgLTExLjY0LDExLjEyIGggMjMuMjMgeiIKICAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogICBpZD0icGF0aDc5IiAvPgo8L2c+CjxnCiAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMDc5OCwwLDAsMS4wNzk4LDEzMi4yODYxNiwxMTkuMTQxMDUpIgogICBpZD0iZzg1Ij4KPHBhdGgKICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNmZmZmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIKICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0MS42OTg4LC0zMTYuNzE1KSIKICAgZD0ibSA0MDQuMjMsMzQ2LjM0IGggLTEuNjEgLTI5Ljg3IGMgLTE2LjMzLDAgLTMyLjY3LDAgLTQ5LjAxLDAuMDIgLTUuMjksMCAtOS42NCwtMS4zMyAtMTMuMzQsLTQuMDYgLTUuMjIsLTMuODUgLTguMDEsLTExLjg0IC04LjA3LC0xOC42MyAtMC4wNSwtNi4xIC0wLjA1LC0xMS4xNSAwLC0xNS44OSAwLjEyLC0xMC44MiA3LjA2LC0xOS4wNiAxNi44NywtMjAuMDUgMi4wNCwtMC4yIDQuMDYsLTAuMzEgNi4wMiwtMC4zMSAxMC4xNywtMC4wMSAyMC4zNCwtMC4wMSAzMC41MSwtMC4wMSA0Ljg1LDAgOS4zLC0zLjU4IDEwLjI1LC04LjgzIDEuMjksLTcuMTUgLTMuNjMsLTEzLjQyIC05Ljg4LC0xMy40MSAtMTEuNDgsMC4wMSAtMjkuODMsMC4wNCAtMzguOTYsMC4wOCAtNC41NCwwLjAyIC05LjEzLDAuNTYgLTEzLjY1LDEuNjEgLTkuMDQsMi4xIC0xNS40OCw3LjA0IC0xOS42OCwxNS4xIC0yLjksNS41NyAtNC4zOCwxMi4xIC00LjUzLDE5Ljk5IC0wLjE1LDguMzcgLTAuMTUsMTYuMTMgMCwyMy43MyAwLjA4LDQuMDQgMC4yNSwxMC42NyAwLjk2LDE0LjYxIDEuNzksOS45OCA2LjMzLDE3LjI2IDEzLjg3LDIyLjI3IDUuODUsMy44OCAxMi43MSw1LjcgMjEuNTYsNS43IDIxLjE1LC0wLjAyIDQyLjI0LC0wLjAzIDYzLjMzLC0wLjAzIGggNS4zNyBjIDEwLjk2LDAuMDIgMTkuODYsLTkuNzkgMTkuODYsLTIxLjg5IHoiCiAgIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgaWQ9InBhdGg4MyIgLz4KPC9nPgo8L3N2Zz4K'
    }
};


/***/ }),

/***/ "./src/Services/BrokerProjectService.ts":
/*!**********************************************!*\
  !*** ./src/Services/BrokerProjectService.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_58110__) => {

__nested_webpack_require_58110__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_58110__.d(__webpack_exports__, {
/* harmony export */   "BrokerProjectService": () => (/* binding */ BrokerProjectService)
/* harmony export */ });
/* harmony import */ var _BrokerClients_MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_58110__(/*! ../BrokerClients/MiningBrokerClient */ "./src/BrokerClients/MiningBrokerClient.ts");
/* import { MIProject } from '@procetra/common';
import { IActivityInfo } from "../Bussiness/IActivityInfo";
import { IDataSet } from "../Bussiness/IDataSet";
import { IProject } from "../Bussiness/IProject";
import { Project } from "../Bussiness/Project"; */

var BrokerProjectService /*  implements IProjectService */ = /** @class */ (function () {
    function BrokerProjectService() {
    }
    BrokerProjectService.prototype.CreateProject = function (name, admin, isPublic, disableCache) {
        if (isPublic === void 0) { isPublic = true; }
        if (disableCache === void 0) { disableCache = false; }
        return new Promise(function (resolve, reject) {
            _BrokerClients_MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient.CreateProject(name, admin, isPublic, disableCache).then(function (project) {
                resolve({
                    project_id: project.project_id,
                    project_name: project.project_name,
                    admin: project.admin,
                    isPublic: project.is_public,
                    diableCache: project.disable_cache,
                    is_data_loaded: project.is_data_loaded,
                    case_count: 0,
                    event_count: 0
                });
            });
        });
    };
    BrokerProjectService.prototype.AddDataSet = function (dataset) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.DataSetFromCvs = function (projectId, datasetId, datasetName, csv, case_column, activity_column, time_stamp, start_date, date_format) {
        return new Promise(function (resolve, reject) {
            var datasetObject = {
                ProjectId: projectId,
                Id: datasetId
            };
            resolve(datasetObject);
        });
    };
    BrokerProjectService.prototype.DataSetFromXes = function (projectId, datasetName, xes) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.CloneDataSet = function (projectId, datasetName) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetDatasetById = function (projectId, id) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.SaveProject = function (projectId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetProjectListFromStorage = function () {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.LoadProject = function (name) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.CloseProject = function (id) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.ConvertCsvToJson = function (csv) {
        return new Promise(function (resolve, reject) {
            /* const data = CvsToJson.Convert(csv, { parseNumbers: true }); */
            return resolve(null);
        });
    };
    BrokerProjectService.prototype.GetDatasetAsData = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetDatasetEventCount = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.CasesStartedPerDay = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.ActivitiesStartedPerDay = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.ActivitiesPerCase = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetVariantsInfo = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetEventsOverTime = function (projectId, datasetId) {
        return new Promise(function (resolve, reject) {
        });
    };
    BrokerProjectService.prototype.GetStartEvents = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetEndEvents = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetTraceCount = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetEventCount = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetActivities = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetMedianCaseDuration = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetMeanCaseDuration = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetDatasetName = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.SetActivityInfo = function (projectId, datasetId, activityInfos) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetActivityInfo = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetAverageCostOfDataset = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.GetTotalCostOfDataset = function (projectId, datasetId) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.SetDatasetFilteredData = function (projectId, datasetId, filteredData) {
        throw new Error("Method not implemented.");
    };
    BrokerProjectService.prototype.SetDatasetCondition = function (projectId, datasetId, condition) {
        throw new Error("Method not implemented.");
    };
    //#region Project Methods
    BrokerProjectService.prototype.GetProjects = function (session_id) {
        return _BrokerClients_MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient.GetProjects();
    };
    BrokerProjectService.prototype.GetProjectItems = function (project_id) {
        //return MiningBrokerClient.GetProjectItems(session_id, org_name, project_id);
        return new Promise(function (resolve, reject) {
            resolve([
                {
                    project_item_id: '1',
                    name: 'Test Dataset 2',
                    type: 'Dataset'
                },
                {
                    project_item_id: '2',
                    name: 'İnsan kaynakları',
                    type: 'Dashboard'
                }
            ]);
        });
    };
    BrokerProjectService.prototype.GetProjectById = function (project_id) {
        return _BrokerClients_MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient.GetProjectById(project_id);
    };
    //#endregion
    //#region Analyse Models
    BrokerProjectService.prototype.CreateAnalyseModel = function (project_id, analyse_model_name) {
        return _BrokerClients_MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient.CreateAnalyseModel(project_id, analyse_model_name);
    };
    BrokerProjectService.prototype.GetAnalyseModels = function (project_id) {
        return _BrokerClients_MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient.GetAnalyseModels(project_id);
    };
    //#endregion
    BrokerProjectService.prototype.CreateMapping = function (project_id, mapping_name, mapping_file_name, mapping_data) {
        return _BrokerClients_MiningBrokerClient__WEBPACK_IMPORTED_MODULE_0__.MiningBrokerClient.CreateMapping(project_id, mapping_name, mapping_file_name, mapping_data);
    };
    return BrokerProjectService;
}());



/***/ }),

/***/ "./src/Services/ConfigService.ts":
/*!***************************************!*\
  !*** ./src/Services/ConfigService.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_67082__) => {

__nested_webpack_require_67082__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_67082__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_67082__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_67082__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);

var ConfigService = /** @class */ (function () {
    function ConfigService() {
    }
    ConfigService.GetEbaBrokerUrl = function () {
        return 'https://bpmgenesis.com/broker/eba';
    };
    ConfigService.GetEnsembleUrl = function () {
        return 'https://bpmgenesis.com/broker/ensemble';
    };
    ConfigService.GetSymbolBrokerUrl = function () {
        //return 'http://apidera.com/symbol';
        return 'https://bpmgenesis.com/broker/symbol';
    };
    ConfigService.GetMiningBrokerUrl = function () {
        var url = '';
        debugger;
        if (_tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.localhost()) {
            url = 'http://localhost:5001/v1/';
        }
        else {
            url = 'https://api.apirealm.com/mining/';
        }
        /*  const url = window.location.origin + '/broker/mining/v1/';
         console.log(url); */
        return url;
    };
    return ConfigService;
}());



/***/ }),

/***/ "./src/Services/IProjectService.ts":
/*!*****************************************!*\
  !*** ./src/Services/IProjectService.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_68808__) => {

__nested_webpack_require_68808__.r(__webpack_exports__);



/***/ }),

/***/ "./src/Services/Services.ts":
/*!**********************************!*\
  !*** ./src/Services/Services.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_69103__) => {

__nested_webpack_require_69103__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_69103__.d(__webpack_exports__, {
/* harmony export */   "Services": () => (/* binding */ Services)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_69103__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_69103__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);

var Services = /** @class */ (function () {
    function Services() {
    }
    Object.defineProperty(Services, "ProjectService", {
        get: function () {
            try {
                return _tuval_core__WEBPACK_IMPORTED_MODULE_0__.instance.resolve('IProjectService_Thread');
            }
            catch (_a) {
                throw 'Project Service Not Found.';
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Services, "StateService", {
        get: function () {
            try {
                return _tuval_core__WEBPACK_IMPORTED_MODULE_0__.instance.resolve('IStateService');
            }
            catch (_a) {
                throw 'State Service Not Found.';
            }
        },
        enumerable: false,
        configurable: true
    });
    return Services;
}());



/***/ }),

/***/ "./src/Services/index.ts":
/*!*******************************!*\
  !*** ./src/Services/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_70715__) => {

__nested_webpack_require_70715__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_70715__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* reexport safe */ _ConfigService__WEBPACK_IMPORTED_MODULE_0__.ConfigService),
/* harmony export */   "BrokerProjectService": () => (/* reexport safe */ _BrokerProjectService__WEBPACK_IMPORTED_MODULE_1__.BrokerProjectService),
/* harmony export */   "Services": () => (/* reexport safe */ _Services__WEBPACK_IMPORTED_MODULE_3__.Services)
/* harmony export */ });
/* harmony import */ var _ConfigService__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_70715__(/*! ./ConfigService */ "./src/Services/ConfigService.ts");
/* harmony import */ var _BrokerProjectService__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_70715__(/*! ./BrokerProjectService */ "./src/Services/BrokerProjectService.ts");
/* harmony import */ var _IProjectService__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_70715__(/*! ./IProjectService */ "./src/Services/IProjectService.ts");
/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_70715__(/*! ./Services */ "./src/Services/Services.ts");






/***/ }),

/***/ "./src/Views/Badge.ts":
/*!****************************!*\
  !*** ./src/Views/Badge.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_72081__) => {

__nested_webpack_require_72081__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_72081__.d(__webpack_exports__, {
/* harmony export */   "Badge": () => (/* binding */ Badge)
/* harmony export */ });
/* harmony import */ var _RegularText__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_72081__(/*! ./RegularText */ "./src/Views/RegularText.ts");

function Badge(text, color, backColor) {
    return ((0,_RegularText__WEBPACK_IMPORTED_MODULE_0__.RegularText)(text).padding('0 0.5rem')
        //.border(`1px solid ${color}`)
        .lineHeight('1').fontSize('0.65rem')
        .marginHorizontal('10px')
        .height('1.5rem')
        .backgroundColor(backColor)
        .foregroundColor(color)
        .cornerRadius(10).fontWeight('500')
        .shadow('rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;')
        .fontFamily('-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'));
}


/***/ }),

/***/ "./src/Views/CalculationMethodText.ts":
/*!********************************************!*\
  !*** ./src/Views/CalculationMethodText.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_73339__) => {

__nested_webpack_require_73339__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_73339__.d(__webpack_exports__, {
/* harmony export */   "CalculationMethodText": () => (/* binding */ CalculationMethodText)
/* harmony export */ });
/* harmony import */ var _Headline5__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_73339__(/*! ./Headline5 */ "./src/Views/Headline5.ts");

function CalculationMethodText(value) {
    return ((0,_Headline5__WEBPACK_IMPORTED_MODULE_0__.Headline5)(value).fontFamily('Proxima Nova, sans serif').foregroundColor('#AAA'));
}


/***/ }),

/***/ "./src/Views/CancelButton.ts":
/*!***********************************!*\
  !*** ./src/Views/CancelButton.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_74139__) => {

__nested_webpack_require_74139__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_74139__.d(__webpack_exports__, {
/* harmony export */   "CancelButton": () => (/* binding */ CancelButton)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_74139__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_74139__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

var CancelButton = function (text) { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(text))
    .cursor('pointer')
    .minWidth('64px')
    .foregroundColor(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Color.gray500)); };


/***/ }),

/***/ "./src/Views/DesktopPageTitle.ts":
/*!***************************************!*\
  !*** ./src/Views/DesktopPageTitle.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_75191__) => {

__nested_webpack_require_75191__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_75191__.d(__webpack_exports__, {
/* harmony export */   "DesktopPageTitle": () => (/* binding */ DesktopPageTitle)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_75191__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_75191__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function DesktopPageTitle(icon, text) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(icon).size(30).foregroundColor('gray'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(text)
        .fontFamily('Proxima Nova')
        .fontSize('22px')
        .foregroundColor('#333333'))
        .height() // auto
        .width() //auto
    );
}


/***/ }),

/***/ "./src/Views/FormView.ts":
/*!*******************************!*\
  !*** ./src/Views/FormView.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_76366__) => {

__nested_webpack_require_76366__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_76366__.d(__webpack_exports__, {
/* harmony export */   "FormView": () => (/* binding */ FormView)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_76366__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_76366__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Resources_Resources__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_76366__(/*! ../Resources/Resources */ "./src/Resources/Resources.ts");


var FormView = function (_a) {
    var content = _a.content;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIScene)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIImage)(_Resources_Resources__WEBPACK_IMPORTED_MODULE_1__.Resources.Icons.ApplicationIcon).width(25).opacity(0.8).position(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.PositionTypes.Absolute).left('10px').top('10px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Procetra').fontSize(16).fontWeight('700')).height(50), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })(content)
        // UIScene içerisine yayılması için
        .width('100%'))));
};


/***/ }),

/***/ "./src/Views/Headline4.ts":
/*!********************************!*\
  !*** ./src/Views/Headline4.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_78067__) => {

__nested_webpack_require_78067__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_78067__.d(__webpack_exports__, {
/* harmony export */   "Headline4": () => (/* binding */ Headline4)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_78067__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_78067__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function Headline4(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('34.6538px').kerning('0.25px'));
}


/***/ }),

/***/ "./src/Views/Headline5.ts":
/*!********************************!*\
  !*** ./src/Views/Headline5.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_78994__) => {

__nested_webpack_require_78994__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_78994__.d(__webpack_exports__, {
/* harmony export */   "Headline5": () => (/* binding */ Headline5)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_78994__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_78994__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function Headline5(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('24.4615px').kerning('0px'));
}


/***/ }),

/***/ "./src/Views/PageButton.ts":
/*!*********************************!*\
  !*** ./src/Views/PageButton.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_79922__) => {

__nested_webpack_require_79922__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_79922__.d(__webpack_exports__, {
/* harmony export */   "PageButton": () => (/* binding */ PageButton)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_79922__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_79922__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function PageButton(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value)
        .fontFamily('Source Sans Pro')
        .fontSize(16)
        .lineHeight('1.75'))
        .cornerRadius(5)
        .height(30)
        .foregroundColor('#fff')
        .backgroundColor('#028AEB')
        .transition('all 150ms ease-in-out')
        .shadow({
        default: '0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
        active: '0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%)'
    })));
}


/***/ }),

/***/ "./src/Views/PageTitle.ts":
/*!********************************!*\
  !*** ./src/Views/PageTitle.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_81301__) => {

__nested_webpack_require_81301__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_81301__.d(__webpack_exports__, {
/* harmony export */   "PageTitle": () => (/* binding */ PageTitle)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_81301__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_81301__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DesktopPageTitle__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_81301__(/*! ./DesktopPageTitle */ "./src/Views/DesktopPageTitle.ts");
/* harmony import */ var _PortalPageTitle__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_81301__(/*! ./PortalPageTitle */ "./src/Views/PortalPageTitle.ts");



function PageTitle(icon, text) {
    if (_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.ApplicationMode === _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ApplicationModes.Desktop) {
        return (0,_DesktopPageTitle__WEBPACK_IMPORTED_MODULE_1__.DesktopPageTitle)(icon, text);
    }
    else {
        return (0,_PortalPageTitle__WEBPACK_IMPORTED_MODULE_2__.PortalPageTitle)(icon, text);
    }
}


/***/ }),

/***/ "./src/Views/PortalFilterBarWidget.ts":
/*!********************************************!*\
  !*** ./src/Views/PortalFilterBarWidget.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_82799__) => {

__nested_webpack_require_82799__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_82799__.d(__webpack_exports__, {
/* harmony export */   "PortalFilterBarWidget": () => (/* binding */ PortalFilterBarWidget)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_82799__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_82799__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function PortalFilterBarWidget(params) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(params.value.toString()).fontSize('40px').foregroundColor('rgb(147,205,221)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('monts').foregroundColor('rgb(251,192,1)').fontSize('10px').fontWeight('700'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('AVG').foregroundColor('#AAA'))), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Duration').foregroundColor('rgb(147,205,221)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('15 - 40 monts').foregroundColor('#AAA')))
        .paddingRight('50px')
        .width() //auto
    );
}


/***/ }),

/***/ "./src/Views/PortalPageTitle.ts":
/*!**************************************!*\
  !*** ./src/Views/PortalPageTitle.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_84729__) => {

__nested_webpack_require_84729__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_84729__.d(__webpack_exports__, {
/* harmony export */   "PortalPageTitle": () => (/* binding */ PortalPageTitle)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_84729__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_84729__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function PortalPageTitle(icon, text) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(icon).size(30).foregroundColor('#333333'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(text)
        .fontWeight('700')
        .fontFamily('Ubuntu, sans-serif')
        .fontSize('30px')
        .foregroundColor('#495057'))
        .marginLeft('10px')
        .width() //auto
    );
}


/***/ }),

/***/ "./src/Views/PortalSideMenu.ts":
/*!*************************************!*\
  !*** ./src/Views/PortalSideMenu.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_85964__) => {

__nested_webpack_require_85964__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_85964__.d(__webpack_exports__, {
/* harmony export */   "PortalSideMenu": () => (/* binding */ PortalSideMenu)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_85964__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_85964__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function PortalSideMenu(params) {
    var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.bindState)(0), selectedIndex = _a[0], setSelectedIndex = _a[1];
    if (_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal) {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(params.items)(function (item, index) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(item.icon).size(26), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(item.name).fontSize('12px').fontFamily('-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'))
                .padding(5)
                .background(selectedIndex === index ? (params.second ? '#777b80' : '#52565b') : { hover: '#eee' })
                .borderBottom(selectedIndex === index ? '2px solid #e7b54a' : '2px solid transparent')
                .cursor('pointer')
                .foregroundColor(selectedIndex === index ? 'white' : { hover: '#333', default: 'white' })
                .height(80)
                .onClick(function () { setSelectedIndex(index); params.selectedAction(index); })
                .visible(item.isVisible());
        })).width()
            .initial({ width: 0 }).animate({ width: params.second ? 75 : 80 })
            .background(params.second ? '#52565b' : '#212932')
            .shadow(params.second ? 'inset 24px 0 20px -20px #373b40' : '')
            .borderBottom('2px solid #212932'));
    }
}


/***/ }),

/***/ "./src/Views/ProjectMainMenu.ts":
/*!**************************************!*\
  !*** ./src/Views/ProjectMainMenu.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_88470__) => {

__nested_webpack_require_88470__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_88470__.d(__webpack_exports__, {
/* harmony export */   "ProjectMainMenu": () => (/* binding */ ProjectMainMenu)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_88470__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_88470__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Resources_Resources__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_88470__(/*! ../Resources/Resources */ "./src/Resources/Resources.ts");
/* harmony import */ var _Texts__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_88470__(/*! ./Texts */ "./src/Views/Texts.ts");



/***
 * Proje sayfalarının başlığı, menulerin sorumlusu
 */
var ProjectMainMenu = function (project_name, model_name, eventCount, caseCount, miningModels, OnMiningModelChanged, menu, modelMenu, queryMenu) { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIImage)(_Resources_Resources__WEBPACK_IMPORTED_MODULE_1__.Resources.Icons.ApplicationIcon).width(25).opacity(0.8).position(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.PositionTypes.Absolute).left('10px').top('10px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Procetra').fontSize(16).fontWeight('700')).height(40), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\d1fd').size(30).marginBottom('10px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.AnimHeadline5)(project_name).lineHeight(35).whiteSpace('nowrap'), _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(miningModels)(function (item) {
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(item.model_name).onClick(function () { return OnMiningModelChanged(item); })).padding(5);
}))((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)(model_name).whiteSpace('nowrap'))
    .cornerRadius(5)
    .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 5).cursor('pointer')
    .border('dotted 1px var(--sub-border-color)')).marginLeft('5px').marginRight('10px').width(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VDivider)().width(1).height('60%').backgroundColor('rgb(120,120,120,50%)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 10 })(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(menu)(function (item) {
    return item.seperator ?
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HDivider)()
        :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)(item.title)
                .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 16))
                .minHeight(32);
}))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('Project').fontSize(16).fontWeight('500'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e5c5').size(16))
    .padding(3)
    .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 8)
    .paddingLeft('14px')
    .transition('all .3s cubic-bezier(0.55, 0, 0.55, 0.2)')
    .backgroundColor({ focus: 'rgb(120,120,120,50%)' }).tabIndex(0)).cursor('pointer').border('dotted 1px var(--sub-border-color)').transition('border .3s').cornerRadius(5).overflow('hidden'), _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(modelMenu)(function (menuItem) {
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(menuItem.icon).size(16), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(menuItem.title)).onClick(function () { menuItem.onClick(menuItem); });
}))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('Model').fontSize(16).fontWeight('500'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e5c5').size(16)).padding(3).backgroundColor({ focus: 'rgb(120,120,120,50%)' }).tabIndex(0)).cursor('pointer').border('dotted 1px var(--sub-border-color)').transition('border .3s').cornerRadius(5), 
// Query Menu
_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(queryMenu)(function (menuItem) {
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(menuItem.icon).size(16), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(menuItem.title));
}))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('Query').fontSize(16).fontWeight('500'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e5c5').size(16)).padding(3).backgroundColor({ focus: 'rgb(120,120,120,50%)' }).tabIndex(0)).cursor('pointer').border('dotted 1px var(--sub-border-color)').transition('border .3s').cornerRadius(5)).width().height(), //auto,
(0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VDivider)().width(1).height('60%').backgroundColor('rgb(120,120,120,50%)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e153').size(24).foregroundColor('#666'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)(eventCount.toLocaleString('en-EN')).fontFamily("'Source Sans Pro', Arial, sans-serif").fontWeight('600').fontSize(25).foregroundColor('#666').lineHeight('1em'), (0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('EVENTS').fontFamily("'Source Sans Pro', Arial, sans-serif").fontWeight('600').fontSize(14).foregroundColor('#666')).width(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VDivider)().height('60%').backgroundColor('rgb(120,120,120,50%)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\d25b').size(24).foregroundColor('#666'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)(caseCount.toLocaleString('en-EN')).fontFamily("'Source Sans Pro', Arial, sans-serif").fontWeight('600').fontSize(25).foregroundColor('#666').lineHeight('1em'), (0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('CASES').fontFamily("'Source Sans Pro', Arial, sans-serif").fontWeight('600').fontSize(14).foregroundColor('#666')).width(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 10 })(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(menu)(function (item) {
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HDivider)();
}
/*  item.seperator ?
     HDivider()
     :
     HStack({ alignment: cLeading, spacing: 10 })(
         RegularText(item.title)
     ) */
))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('Project').fontSize(16).fontWeight('500'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e5c5').size(16)).padding(5).backgroundColor({ focus: 'rgb(120,120,120,50%)' }).tabIndex(0).cornerRadius(5)).cursor('pointer').border('solid 1px var(--sub-border-color)').transition('border .3s'), _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(modelMenu)(function (menuItem) {
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(menuItem.icon).size(16), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(menuItem.title)).onClick(function () { menuItem.onClick(menuItem); });
}))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('Model').fontSize(16).fontWeight('500'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e5c5').size(16)).padding(5).backgroundColor({ focus: 'rgb(120,120,120,50%)' }).tabIndex(0).cornerRadius(5)).cursor('pointer').border('solid 1px var(--sub-border-color)').transition('border .3s'), 
// Query Menu
_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(queryMenu)(function (menuItem) {
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(menuItem.icon).size(16), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(menuItem.title));
}))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('Query').fontSize(16).fontWeight('500'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e5c5').size(16)).padding(5).backgroundColor({ focus: 'rgb(120,120,120,50%)' }).tabIndex(0).cornerRadius(5)).cursor('pointer').border('solid 1px var(--sub-border-color)').transition('border .3s')).visible(false).width())
    .height(80)
    .variable('--sub-border-color', { default: 'transparent', hover: '#14a9d5' }))
    .height()
    .background('rgb(255,255,255,20%)')
    .marginBottom('10px')
    .shadow('0 0 8px 0 #ccc')
    .visible(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsDesktop)); };


/***/ }),

/***/ "./src/Views/RegularText.ts":
/*!**********************************!*\
  !*** ./src/Views/RegularText.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_98901__) => {

__nested_webpack_require_98901__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_98901__.d(__webpack_exports__, {
/* harmony export */   "RegularText": () => (/* binding */ RegularText)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_98901__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_98901__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function RegularText(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('"Proxima Nova","Helvetica Neue",Helvetica,Arial,sans-serif').fontSize('14px').lineHeight('1.42857').foregroundColor('#333'));
}


/***/ }),

/***/ "./src/Views/SectionContent.ts":
/*!*************************************!*\
  !*** ./src/Views/SectionContent.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_99896__) => {

__nested_webpack_require_99896__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_99896__.d(__webpack_exports__, {
/* harmony export */   "SectionContent": () => (/* binding */ SectionContent)
/* harmony export */ });
/* harmony import */ var _RegularText__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_99896__(/*! ./RegularText */ "./src/Views/RegularText.ts");

function SectionContent(value) {
    return ((0,_RegularText__WEBPACK_IMPORTED_MODULE_0__.RegularText)(value));
}


/***/ }),

/***/ "./src/Views/SectionHeadline.ts":
/*!**************************************!*\
  !*** ./src/Views/SectionHeadline.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_100634__) => {

__nested_webpack_require_100634__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_100634__.d(__webpack_exports__, {
/* harmony export */   "SectionHeadline": () => (/* binding */ SectionHeadline)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_100634__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_100634__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function SectionHeadline(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('"Proxima Nova","Helvetica Neue",Helvetica,Arial,sans-serif').fontSize('20px').lineHeight('1.42857').foregroundColor('#333'));
}


/***/ }),

/***/ "./src/Views/SectionSubHeadline.ts":
/*!*****************************************!*\
  !*** ./src/Views/SectionSubHeadline.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_101657__) => {

__nested_webpack_require_101657__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_101657__.d(__webpack_exports__, {
/* harmony export */   "SectionSubHeadline": () => (/* binding */ SectionSubHeadline)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_101657__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_101657__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function SectionSubHeadline(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('"Proxima Nova","Helvetica Neue",Helvetica,Arial,sans-serif').fontSize('16px').fontWeight('normal').lineHeight('1.42857').foregroundColor('#666666'));
}


/***/ }),

/***/ "./src/Views/SectionTitle.ts":
/*!***********************************!*\
  !*** ./src/Views/SectionTitle.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_102689__) => {

__nested_webpack_require_102689__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_102689__.d(__webpack_exports__, {
/* harmony export */   "SectionTitle": () => (/* binding */ SectionTitle)
/* harmony export */ });
/* harmony import */ var _RegularText__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_102689__(/*! ./RegularText */ "./src/Views/RegularText.ts");

function SectionTitle(value) {
    return ((0,_RegularText__WEBPACK_IMPORTED_MODULE_0__.RegularText)(value).fontWeight('500'));
}


/***/ }),

/***/ "./src/Views/SelectAnalysisView.ts":
/*!*****************************************!*\
  !*** ./src/Views/SelectAnalysisView.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_103451__) => {

__nested_webpack_require_103451__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_103451__.d(__webpack_exports__, {
/* harmony export */   "SelectAnalysisView": () => (/* binding */ SelectAnalysisView)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_103451__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_103451__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageTitle__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_103451__(/*! ./PageTitle */ "./src/Views/PageTitle.ts");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_103451__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_103451__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_103451__(/*! ./Badge */ "./src/Views/Badge.ts");
/* harmony import */ var _RegularText__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_103451__(/*! ./RegularText */ "./src/Views/RegularText.ts");





var menuItems = [
    {
        icon: '\\f091',
        title: 'Add to model',
        onClick: function (item) { return console.log(item); }
    },
    {
        icon: '\\d2da',
        title: 'Tags',
        onClick: function (item) { return console.log(item); }
    },
    {
        icon: '\\f06b',
        title: 'Help',
        onClick: function (item) { return console.log(item); }
    }
];
var NewAnalyseTypes = [
    {
        id: 'process_overview',
        icon: '\\d2dc',
        title: 'Process Overview',
        description: 'An overhead view of your process',
        link: function (project) { return "/app(procetra)/modules/process-overview/overview/" + project.project_id; }
    },
    {
        id: 'dashboard',
        icon: '\\d2db',
        title: 'Dashboard',
        description: 'A new dashboard waiting to be built.',
        // controller: new ProcessDashboardController(),
    },
    {
        id: 'process_discover',
        icon: '\\d320',
        title: 'Discover',
        description: 'To understand and analyze your business',
        //controller: new ProcessExplorerController(),
    },
    {
        id: 'monitoring',
        icon: '\\d2c9',
        title: 'Monitoring',
        badge: 'New',
        description: 'Follow the process indicators',
        // controller: new MonitoringController(),
    },
    {
        id: 'statistics',
        icon: '\\d31a',
        title: 'Statistics',
        badge: 'Updated',
        description: 'General statistics of the process',
        // controller: new ProcessStatisticController(),
    },
    {
        id: 'variant_explorer',
        icon: '\\d203',
        title: 'Variant Explorer',
        badge: 'New',
        // controller: new VariantExplorerController(),
    },
    {
        id: 'loops',
        icon: '\\e028',
        title: 'Loops',
        badge: 'Preview',
        //controller: new LoopsController(),
    },
    {
        id: 'automation',
        icon: '\\d271',
        title: 'Automation',
        // controller: new AutomationController(),
    },
    {
        id: 'case_explorer',
        icon: '\\d25b',
        title: 'Case Explorer',
        // controller: new CaseExplorerController(),
    },
    {
        id: 'difference_analyse',
        icon: '\\d2a7',
        title: 'Difference Analyse'
    },
    {
        id: 'benchmarking',
        icon: '\\d218',
        title: 'Benchmarking'
    },
    {
        id: 'lead_times',
        icon: '\\d36b',
        title: 'Lead Times'
    },
    {
        id: 'process_steps',
        icon: '\\efe4',
        title: 'Process Steps'
    },
    {
        id: 'complience_analysis',
        icon: '\\d219',
        title: 'Complience Analysis'
    },
    {
        id: 'comformance_check',
        icon: '\\d21a',
        title: 'Comformance Check'
    },
    {
        id: 'social',
        icon: '\\d21c',
        title: 'Social'
    },
    {
        id: 'process_ai',
        icon: '\\d273',
        title: 'Process AI'
    },
    {
        id: 'costs',
        icon: '\\d23c',
        title: 'Cost'
    },
    {
        id: 'forecast',
        icon: '\\d229',
        title: 'Forecast'
    },
    {
        id: '',
        icon: '\\d222',
        title: 'Mosts'
    },
    {
        id: 'bottlenecks',
        icon: '\\d246',
        title: 'Bottlenecks'
    },
    {
        id: 'durations',
        icon: '\\d207',
        title: 'Durations'
    },
    {
        id: 'breakdown',
        icon: '\\d210',
        title: 'Breakdown'
    },
    {
        id: 'distribution',
        icon: '\\d27c',
        title: 'Distribution'
    },
    {
        id: 'metrics',
        icon: '\\d290',
        title: 'Metrics'
    }
];
function searchBox(_a) {
    var onSearchTextChanged = _a.onSearchTextChanged;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\d22c')
        .size(20)
        .paddingRight('10px')
        .paddingLeft('10px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TextField)().fontSize('1rem')
        .backgroundColor('transparent')
        .foregroundColor('#495057')
        .onTextChange(function (text) { setTimeout(function () { return onSearchTextChanged(text); }, 100); }))
        .width()
        .padding('0.50rem 0.50rem 0.50rem 0rem')
        .initial({ width: '50%', backgroundColor: 'rgba(255,255,255,0.3)' }).animate({ width: '50%' }).focus({ width: '80%', backgroundColor: 'rgba(255,255,255,0.6)' })
        .paddingRight('5px')
        .overflow('hidden')
        .cornerRadius(20)
        .border({ default: '1px solid #ced4da', focus: 'solid 1px #6366F1' })
        .shadow({ default: '', focus: '0 0 0 0.2rem #c7d2fe' })
        //.transition('background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s')
        //.backgroundColor('rgba(255,255,255,0.3)')
        .height()
        .tabIndex(0)).height());
}
function NewAnalyseModelTitleBox(tag, project, _a) {
    var id = _a.id, icon = _a.icon, title = _a.title, description = _a.description, link = _a.link, badge = _a.badge;
    return function (_a) {
        var controller = _a.controller;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)(
        // Menu stack
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)(
        // Badge('New', '#22C55E99', '#ffffff66'),
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Case)(badge, {
            'New': (0,_Badge__WEBPACK_IMPORTED_MODULE_3__.Badge)(badge, 'white', '#22C55E99'),
            'Updated': (0,_Badge__WEBPACK_IMPORTED_MODULE_3__.Badge)(badge, 'white', '#3B82F699'),
            'Preview': (0,_Badge__WEBPACK_IMPORTED_MODULE_3__.Badge)(badge, 'white', '#F59E0B99')
        }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIContextMenu.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(menuItems)(function (item) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(item.icon).size(16), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(item.title)).onClick(function (e) { item.onClick(null); });
        }))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\d2c6').size(20))
            .cursor('pointer')
            .border('solid 1px var(--sub-border-color)')
            .transition('border .3s')
            .cornerRadius(5)
            .marginRight('10px')).height(), //auto
        // Analysis Icon
        icon && (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(icon).size(50).foregroundColor('var(--sub-icon-color)').marginBottom('10px'), 
        // Analysis Name
        (0,_RegularText__WEBPACK_IMPORTED_MODULE_4__.RegularText)(title).fontSize('18px').searchWords([tag]), 
        // Analysis Description
        description && (0,_RegularText__WEBPACK_IMPORTED_MODULE_4__.RegularText)(description).fontSize('12px'))
            .marginTop('10px')
            .marginRight('10px')
            .cornerRadius(10)
            .width(240).height(150)
            .backgroundColor('rgba(255,255,255,0.3)')
            .shadow('rgb(0 0 0 / 2%) 0px 1px 3px 0px, rgb(27 31 35 / 15%) 0px 0px 0px 1px')
            .initial({ opacity: 0 }).animate({ opacity: 1 })
            .onClick(function () { return controller.navigotor(link(project)); })
            .variable('--sub-border-color', { default: 'transparent', hover: '#14a9d5' })
            .variable('--sub-icon-color', { default: '#33333366', hover: '#2baab5' })
            .variable('--sub-icon-size', { default: '50px', hover: '60px' })
            .cursor('pointer'));
    };
}
function SelectAnalysisView(project) {
    var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.bindState)(''), searchText = _a[0], setSearchText = _a[1];
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_PageTitle__WEBPACK_IMPORTED_MODULE_1__.PageTitle)('\\d27e', 'Mining Modules')).height().paddingTop('20px'), searchBox({ onSearchTextChanged: function (text) { return setSearchText(text); } }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ScrollView)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTop, spacing: 10 }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(NewAnalyseTypes)(function (item) {
        return (_tuval_core__WEBPACK_IMPORTED_MODULE_2__.is.nullOrEmpty(searchText) ||
            item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
            && NewAnalyseModelTitleBox(searchText, project, item);
    })).wrap('wrap').height().padding(10))));
}


/***/ }),

/***/ "./src/Views/Texts.ts":
/*!****************************!*\
  !*** ./src/Views/Texts.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_113969__) => {

__nested_webpack_require_113969__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_113969__.d(__webpack_exports__, {
/* harmony export */   "Headline1": () => (/* binding */ Headline1),
/* harmony export */   "Headline2": () => (/* binding */ Headline2),
/* harmony export */   "Headline3": () => (/* binding */ Headline3),
/* harmony export */   "Headline4": () => (/* binding */ Headline4),
/* harmony export */   "Headline5": () => (/* binding */ Headline5),
/* harmony export */   "AnimHeadline5": () => (/* binding */ AnimHeadline5),
/* harmony export */   "Headline6": () => (/* binding */ Headline6),
/* harmony export */   "Subtitle1": () => (/* binding */ Subtitle1),
/* harmony export */   "Subtitle2": () => (/* binding */ Subtitle2),
/* harmony export */   "Body1": () => (/* binding */ Body1),
/* harmony export */   "Body2": () => (/* binding */ Body2),
/* harmony export */   "ButtonText": () => (/* binding */ ButtonText),
/* harmony export */   "Caption": () => (/* binding */ Caption),
/* harmony export */   "Overline": () => (/* binding */ Overline),
/* harmony export */   "RegularText": () => (/* binding */ RegularText),
/* harmony export */   "SectionTitle": () => (/* binding */ SectionTitle),
/* harmony export */   "SectionContent": () => (/* binding */ SectionContent),
/* harmony export */   "SectionHeadline": () => (/* binding */ SectionHeadline),
/* harmony export */   "SectionSubHeadline": () => (/* binding */ SectionSubHeadline)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_113969__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_113969__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function Headline1(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('lighter').fontSize('97.8462px').kerning('-1.5px'));
}
function Headline2(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('lighter').fontSize('61.1538px').kerning('-0.5px'));
}
function Headline3(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('48.9231px').kerning('0px'));
}
function Headline4(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('34.6538px').kerning('0.25px'));
}
function Headline5(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('24.4615px').kerning('0px'));
}
function AnimHeadline5(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').kerning('0px').initial({ fontSize: '1px' }).animate({ fontSize: '25px' }));
}
function Headline6(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('500').fontSize('20.3846px').kerning('0.15px'));
}
function Subtitle1(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('16.3077px').kerning('0.15px'));
}
function Subtitle2(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('500').fontSize('14.2692px').kerning('0.1px'));
}
function Body1(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('16.3077px').kerning('0.5px'));
}
function Body2(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('14.2692px').kerning('0.25px'));
}
function ButtonText(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('500').fontSize('14.2692px').kerning('1.25px').textTransform('uppercase'));
}
function Caption(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('12.2308px').kerning('0.4px'));
}
function Overline(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('Ubuntu, sans-serif').fontWeight('normal').fontSize('10.1923px').kerning('1.5px').textTransform('uppercase'));
}
function RegularText(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('"Proxima Nova","Helvetica Neue",Helvetica,Arial,sans-serif').fontSize('14px').lineHeight('1.42857').foregroundColor('#333'));
}
function SectionTitle(value) {
    return (RegularText(value).fontWeight('500'));
}
function SectionContent(value) {
    return (RegularText(value));
}
function SectionHeadline(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('"Proxima Nova","Helvetica Neue",Helvetica,Arial,sans-serif').fontSize('20px').lineHeight('1.42857').foregroundColor('#333'));
}
function SectionSubHeadline(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontFamily('"Proxima Nova","Helvetica Neue",Helvetica,Arial,sans-serif').fontSize('16px').fontWeight('normal').lineHeight('1.42857').foregroundColor('#666666'));
}


/***/ }),

/***/ "./src/Views/TileBox.ts":
/*!******************************!*\
  !*** ./src/Views/TileBox.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_119742__) => {

__nested_webpack_require_119742__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_119742__.d(__webpack_exports__, {
/* harmony export */   "TileBox": () => (/* binding */ TileBox)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_119742__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_119742__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function TileBox() {
    var content = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i];
    }
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack.apply(void 0, content).padding(10)
        .backgroundColor('rgb(255,255,255,60%)')
        .cornerRadius('12px')
        .shadow({ default: '0 1px 3px 0 rgb(0 0 0 / 10%), 0 2px 5px 0 rgb(0 0 0 / 5%)', focus: '0 0 3px 1px #00c3ff' })
        .tabIndex(0)).padding(2));
}


/***/ }),

/***/ "./src/Views/TileBoxHeaderText.ts":
/*!****************************************!*\
  !*** ./src/Views/TileBoxHeaderText.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_121032__) => {

__nested_webpack_require_121032__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_121032__.d(__webpack_exports__, {
/* harmony export */   "TileBoxHeaderText": () => (/* binding */ TileBoxHeaderText)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_121032__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_121032__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Headline5__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_121032__(/*! ./Headline5 */ "./src/Views/Headline5.ts");


function TileBoxHeaderText(value) {
    if (_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal) {
        return ((0,_Headline5__WEBPACK_IMPORTED_MODULE_1__.Headline5)(value).fontFamily('Ubuntu, sans-serif').padding('20px 30px 0 30px').fontWeight('700').foregroundColor('#495057DD'));
    }
    else {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).padding('20px 30px 0 30px').fontFamily('Proxima Nova').fontSize('14px').foregroundColor('#888888'));
    }
}


/***/ }),

/***/ "./src/Views/index.ts":
/*!****************************!*\
  !*** ./src/Views/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_122403__) => {

__nested_webpack_require_122403__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_122403__.d(__webpack_exports__, {
/* harmony export */   "CalculationMethodText": () => (/* reexport safe */ _CalculationMethodText__WEBPACK_IMPORTED_MODULE_0__.CalculationMethodText),
/* harmony export */   "DesktopPageTitle": () => (/* reexport safe */ _DesktopPageTitle__WEBPACK_IMPORTED_MODULE_1__.DesktopPageTitle),
/* harmony export */   "Headline4": () => (/* reexport safe */ _Headline4__WEBPACK_IMPORTED_MODULE_2__.Headline4),
/* harmony export */   "Headline5": () => (/* reexport safe */ _Headline5__WEBPACK_IMPORTED_MODULE_3__.Headline5),
/* harmony export */   "PageTitle": () => (/* reexport safe */ _PageTitle__WEBPACK_IMPORTED_MODULE_4__.PageTitle),
/* harmony export */   "PortalPageTitle": () => (/* reexport safe */ _PortalPageTitle__WEBPACK_IMPORTED_MODULE_5__.PortalPageTitle),
/* harmony export */   "PortalSideMenu": () => (/* reexport safe */ _PortalSideMenu__WEBPACK_IMPORTED_MODULE_6__.PortalSideMenu),
/* harmony export */   "RegularText": () => (/* reexport safe */ _RegularText__WEBPACK_IMPORTED_MODULE_7__.RegularText),
/* harmony export */   "SectionContent": () => (/* reexport safe */ _SectionContent__WEBPACK_IMPORTED_MODULE_8__.SectionContent),
/* harmony export */   "SectionHeadline": () => (/* reexport safe */ _SectionHeadline__WEBPACK_IMPORTED_MODULE_9__.SectionHeadline),
/* harmony export */   "SectionSubHeadline": () => (/* reexport safe */ _SectionSubHeadline__WEBPACK_IMPORTED_MODULE_10__.SectionSubHeadline),
/* harmony export */   "SectionTitle": () => (/* reexport safe */ _SectionTitle__WEBPACK_IMPORTED_MODULE_11__.SectionTitle),
/* harmony export */   "TileBox": () => (/* reexport safe */ _TileBox__WEBPACK_IMPORTED_MODULE_12__.TileBox),
/* harmony export */   "TileBoxHeaderText": () => (/* reexport safe */ _TileBoxHeaderText__WEBPACK_IMPORTED_MODULE_13__.TileBoxHeaderText),
/* harmony export */   "PortalFilterBarWidget": () => (/* reexport safe */ _PortalFilterBarWidget__WEBPACK_IMPORTED_MODULE_14__.PortalFilterBarWidget),
/* harmony export */   "PageButton": () => (/* reexport safe */ _PageButton__WEBPACK_IMPORTED_MODULE_15__.PageButton),
/* harmony export */   "Badge": () => (/* reexport safe */ _Badge__WEBPACK_IMPORTED_MODULE_16__.Badge),
/* harmony export */   "CancelButton": () => (/* reexport safe */ _CancelButton__WEBPACK_IMPORTED_MODULE_17__.CancelButton),
/* harmony export */   "FormView": () => (/* reexport safe */ _FormView__WEBPACK_IMPORTED_MODULE_18__.FormView),
/* harmony export */   "SelectAnalysisView": () => (/* reexport safe */ _SelectAnalysisView__WEBPACK_IMPORTED_MODULE_19__.SelectAnalysisView),
/* harmony export */   "ProjectMainMenu": () => (/* reexport safe */ _ProjectMainMenu__WEBPACK_IMPORTED_MODULE_20__.ProjectMainMenu)
/* harmony export */ });
/* harmony import */ var _CalculationMethodText__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_122403__(/*! ./CalculationMethodText */ "./src/Views/CalculationMethodText.ts");
/* harmony import */ var _DesktopPageTitle__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_122403__(/*! ./DesktopPageTitle */ "./src/Views/DesktopPageTitle.ts");
/* harmony import */ var _Headline4__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_122403__(/*! ./Headline4 */ "./src/Views/Headline4.ts");
/* harmony import */ var _Headline5__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_122403__(/*! ./Headline5 */ "./src/Views/Headline5.ts");
/* harmony import */ var _PageTitle__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_122403__(/*! ./PageTitle */ "./src/Views/PageTitle.ts");
/* harmony import */ var _PortalPageTitle__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_122403__(/*! ./PortalPageTitle */ "./src/Views/PortalPageTitle.ts");
/* harmony import */ var _PortalSideMenu__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_122403__(/*! ./PortalSideMenu */ "./src/Views/PortalSideMenu.ts");
/* harmony import */ var _RegularText__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_122403__(/*! ./RegularText */ "./src/Views/RegularText.ts");
/* harmony import */ var _SectionContent__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_122403__(/*! ./SectionContent */ "./src/Views/SectionContent.ts");
/* harmony import */ var _SectionHeadline__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_122403__(/*! ./SectionHeadline */ "./src/Views/SectionHeadline.ts");
/* harmony import */ var _SectionSubHeadline__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_122403__(/*! ./SectionSubHeadline */ "./src/Views/SectionSubHeadline.ts");
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_122403__(/*! ./SectionTitle */ "./src/Views/SectionTitle.ts");
/* harmony import */ var _TileBox__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_122403__(/*! ./TileBox */ "./src/Views/TileBox.ts");
/* harmony import */ var _TileBoxHeaderText__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_122403__(/*! ./TileBoxHeaderText */ "./src/Views/TileBoxHeaderText.ts");
/* harmony import */ var _PortalFilterBarWidget__WEBPACK_IMPORTED_MODULE_14__ = __nested_webpack_require_122403__(/*! ./PortalFilterBarWidget */ "./src/Views/PortalFilterBarWidget.ts");
/* harmony import */ var _PageButton__WEBPACK_IMPORTED_MODULE_15__ = __nested_webpack_require_122403__(/*! ./PageButton */ "./src/Views/PageButton.ts");
/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_16__ = __nested_webpack_require_122403__(/*! ./Badge */ "./src/Views/Badge.ts");
/* harmony import */ var _CancelButton__WEBPACK_IMPORTED_MODULE_17__ = __nested_webpack_require_122403__(/*! ./CancelButton */ "./src/Views/CancelButton.ts");
/* harmony import */ var _FormView__WEBPACK_IMPORTED_MODULE_18__ = __nested_webpack_require_122403__(/*! ./FormView */ "./src/Views/FormView.ts");
/* harmony import */ var _SelectAnalysisView__WEBPACK_IMPORTED_MODULE_19__ = __nested_webpack_require_122403__(/*! ./SelectAnalysisView */ "./src/Views/SelectAnalysisView.ts");
/* harmony import */ var _ProjectMainMenu__WEBPACK_IMPORTED_MODULE_20__ = __nested_webpack_require_122403__(/*! ./ProjectMainMenu */ "./src/Views/ProjectMainMenu.ts");























/***/ }),

/***/ "@tuval/core":
/*!******************************!*\
  !*** external "@tuval/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__tuval_core__;

/***/ }),

/***/ "@tuval/forms":
/*!*******************************!*\
  !*** external "@tuval/forms" ***!
  \*******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__tuval_forms__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_129076__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_129076__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_129076__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nested_webpack_require_129076__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_129076__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_129076__.o(definition, key) && !__nested_webpack_require_129076__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_129076__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_129076__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__nested_webpack_require_129076__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_129076__.d(__webpack_exports__, {
/* harmony export */   "Badge": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.Badge),
/* harmony export */   "CalculationMethodText": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.CalculationMethodText),
/* harmony export */   "CancelButton": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.CancelButton),
/* harmony export */   "DesktopPageTitle": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.DesktopPageTitle),
/* harmony export */   "FormView": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.FormView),
/* harmony export */   "Headline4": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.Headline4),
/* harmony export */   "Headline5": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.Headline5),
/* harmony export */   "PageButton": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.PageButton),
/* harmony export */   "PageTitle": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.PageTitle),
/* harmony export */   "PortalFilterBarWidget": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.PortalFilterBarWidget),
/* harmony export */   "PortalPageTitle": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.PortalPageTitle),
/* harmony export */   "PortalSideMenu": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.PortalSideMenu),
/* harmony export */   "ProjectMainMenu": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.ProjectMainMenu),
/* harmony export */   "RegularText": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.RegularText),
/* harmony export */   "SectionContent": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.SectionContent),
/* harmony export */   "SectionHeadline": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.SectionHeadline),
/* harmony export */   "SectionSubHeadline": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.SectionSubHeadline),
/* harmony export */   "SectionTitle": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.SectionTitle),
/* harmony export */   "SelectAnalysisView": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.SelectAnalysisView),
/* harmony export */   "TileBox": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.TileBox),
/* harmony export */   "TileBoxHeaderText": () => (/* reexport safe */ _Views__WEBPACK_IMPORTED_MODULE_0__.TileBoxHeaderText),
/* harmony export */   "BrokerProjectService": () => (/* reexport safe */ _Services__WEBPACK_IMPORTED_MODULE_2__.BrokerProjectService),
/* harmony export */   "ConfigService": () => (/* reexport safe */ _Services__WEBPACK_IMPORTED_MODULE_2__.ConfigService),
/* harmony export */   "Services": () => (/* reexport safe */ _Services__WEBPACK_IMPORTED_MODULE_2__.Services),
/* harmony export */   "MiningBrokerClient": () => (/* reexport safe */ _BrokerClients__WEBPACK_IMPORTED_MODULE_3__.MiningBrokerClient),
/* harmony export */   "ListBounceAnimation": () => (/* reexport safe */ _ListBounceAnimation__WEBPACK_IMPORTED_MODULE_4__.ListBounceAnimation)
/* harmony export */ });
/* harmony import */ var _Views__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_129076__(/*! ./Views */ "./src/Views/index.ts");
/* harmony import */ var _Models__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_129076__(/*! ./Models */ "./src/Models/index.ts");
/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_129076__(/*! ./Services */ "./src/Services/index.ts");
/* harmony import */ var _BrokerClients__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_129076__(/*! ./BrokerClients */ "./src/BrokerClients/index.ts");
/* harmony import */ var _ListBounceAnimation__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_129076__(/*! ./ListBounceAnimation */ "./src/ListBounceAnimation.ts");






})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/Controllers/Activity/ActivityController.ts":
/*!********************************************************!*\
  !*** ./src/Controllers/Activity/ActivityController.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_140039__) => {

"use strict";
__nested_webpack_require_140039__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_140039__.d(__webpack_exports__, {
/* harmony export */   "ActivityController": () => (/* binding */ ActivityController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_140039__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_140039__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _procetra_common__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_140039__(/*! @procetra/common */ "./node_modules/@procetra/common/index.js");
/* harmony import */ var _procetra_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_140039__.n(_procetra_common__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { EventsOverTimeChart } from '../../../../UI/Controls/EventsOverTimeChart/EventsOverTimeChart';

var overviewTypes = [
    'Frequency',
    'Median duration',
    'Mean duration',
    'Duration range',
    'Aggreate duration'
];
function MetricSelectionButtons(buttons, selectedIndex, onSelectedAction) {
    return (_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(buttons)(function (name, index) {
        return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(name).fontSize('13px'))
            .action(function () { return onSelectedAction(index); })
            .height(30)
            .border('solid 1px #ccc')
            .padding(5)
            .paddingLeft('10px')
            .paddingRight('10px')
            .cornerRadius(index === 0 ? '15px 0px 0px 15px' : (index === buttons.length - 1 ? '0px 15px 15px 0px' : ''))
            .background(index === selectedIndex ? 'rgb(120,120,120,20%)' : '');
    })));
}
var ActivityController = /** @class */ (function (_super) {
    __extends(ActivityController, _super);
    function ActivityController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActivityController.prototype.InitController = function () {
        this.selectedIndex = 0;
        this.chart = null /* new EventsOverTimeChart() */;
        var map = new Map();
        // this.map = [];
        for (var i = 0; i < 100; i++) {
            map[i] = i;
        }
        // this.chart.SetChartData(map);
    };
    ActivityController.prototype.LoadView = function () {
        var _this = this;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIScene)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_procetra_common__WEBPACK_IMPORTED_MODULE_1__.SectionHeadline)('Overview'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_procetra_common__WEBPACK_IMPORTED_MODULE_1__.PortalFilterBarWidget)({ value: 23 })
        /* UIButton(
            Icon('\\f04a').size(20).foregroundColor({ default: 'rgb(120,120,120, 50%)', hover: 'rgb(120,120,120, 80%)' }),
        ) */
        )
            // We prevent this stack to large more than its content
            .height(), (0,_procetra_common__WEBPACK_IMPORTED_MODULE_1__.SectionSubHeadline)('Global statistics'), MetricSelectionButtons(overviewTypes, this.selectedIndex, function (index) { return _this.selectedIndex = index; }).visible(false), (0,_procetra_common__WEBPACK_IMPORTED_MODULE_1__.TileBox)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_procetra_common__WEBPACK_IMPORTED_MODULE_1__.RegularText)(overviewTypes[this.selectedIndex])
            .fontSize('30px')
            .cursor('pointer')
            .border('dashed 1px var(--sub-border-color)')
            .transition('border .3s'))
            .padding()
            .height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTop, spacing: 10 }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(overviewTypes)(function (name, index) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(name))
                .action(function () { return _this.selectedIndex = index; })
                .background(index === _this.selectedIndex ? 'rgb(120,120,120,20%)' : '')
                .width(180)
                .height(30)
                .border('solid 1px #ccc')
                .padding()
                .cornerRadius(12);
        })).minWidth('200px').maxWidth('200px'), this.chart))
            .height(400)
            .variable('--sub-border-color', { default: 'transparent', hover: '#14a9d5' }))));
    };
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.State)()
    ], ActivityController.prototype, "chart", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.State)()
    ], ActivityController.prototype, "selectedIndex", void 0);
    return ActivityController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/Controllers/Overview/MultiOverviewController.ts":
/*!*************************************************************!*\
  !*** ./src/Controllers/Overview/MultiOverviewController.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_147078__) => {

"use strict";
__nested_webpack_require_147078__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_147078__.d(__webpack_exports__, {
/* harmony export */   "MultiOverviewController": () => (/* binding */ MultiOverviewController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_147078__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_147078__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OverviewController__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_147078__(/*! ./OverviewController */ "./src/Controllers/Overview/OverviewController.ts");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_147078__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_147078__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ControllerList = /** @class */ (function (_super) {
    __extends(ControllerList, _super);
    function ControllerList(parentController) {
        var _this = _super.call(this) || this;
        _this.parentController = parentController;
        return _this;
    }
    ControllerList.prototype.Add = function (item) {
        _super.prototype.Add.call(this, item);
        this.parentController.ForceUpdate();
        return 1;
    };
    return ControllerList;
}(_tuval_core__WEBPACK_IMPORTED_MODULE_2__.List));
var MultiOverviewController = /** @class */ (function (_super) {
    __extends(MultiOverviewController, _super);
    function MultiOverviewController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiOverviewController.prototype.InitController = function () {
        this.controllerList = new ControllerList(this);
        this.controllerList.Add(new _OverviewController__WEBPACK_IMPORTED_MODULE_1__.OverviewController());
    };
    MultiOverviewController.prototype.LoadView = function () {
        var _this = this;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Metrics').paddingTop('5px').height(38).fontFamily('Proxima Nova').fontSize(20).foregroundColor('#333333'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\f078').size(20).foregroundColor({ default: 'rgb(51,51,51, 70%)', hover: 'rgb(51,51,51, 90%)' })).action(function () { return _this.controllerList.Add(new _OverviewController__WEBPACK_IMPORTED_MODULE_1__.OverviewController()); })), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(this.controllerList.ToArray())(function (item) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)(item);
        }))));
    };
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.State)()
    ], MultiOverviewController.prototype, "controllerList", void 0);
    return MultiOverviewController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/Controllers/Overview/OverviewController.ts":
/*!********************************************************!*\
  !*** ./src/Controllers/Overview/OverviewController.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_152225__) => {

"use strict";
__nested_webpack_require_152225__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_152225__.d(__webpack_exports__, {
/* harmony export */   "OverviewController": () => (/* binding */ OverviewController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_152225__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_152225__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _procetra_common__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_152225__(/*! @procetra/common */ "./node_modules/@procetra/common/index.js");
/* harmony import */ var _procetra_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_152225__.n(_procetra_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Views_ActiveCasesOverTime__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_152225__(/*! ../../Views/ActiveCasesOverTime */ "./src/Views/ActiveCasesOverTime.ts");
/* harmony import */ var _Views_CasesGrid__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_152225__(/*! ../../Views/CasesGrid */ "./src/Views/CasesGrid.ts");
/* harmony import */ var _Views_EventsOverTimeChart__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_152225__(/*! ../../Views/EventsOverTimeChart */ "./src/Views/EventsOverTimeChart.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var datas = [
    [
        { x: 'Jan', y: 532.2 }, { x: 'Feb', y: 453.4 },
        { x: 'Mar', y: 422.8 }, { x: 'Apr', y: 531.6 },
        { x: 'May', y: 532.2 }, { x: 'Jun', y: 453.4 },
        { x: 'July', y: 422.8 }, { x: 'Agu', y: 531.6 },
        { x: 'Sep', y: 532.2 }, { x: 'Oct', y: 453.4 },
        { x: 'Nov', y: 422.8 }
    ],
    [
        { x: new Date(2021, 1, 1), y: 252.2 }, { x: new Date(2021, 2, 1), y: 243.4 },
        { x: new Date(2021, 3, 1), y: 142.8 }, { x: new Date(2021, 4, 1), y: 331.6 },
        { x: new Date(2021, 5, 1), y: 262.3 }, { x: new Date(2021, 6, 1), y: 142.5 },
        { x: new Date(2021, 7, 1), y: 142.9 }, { x: new Date(2021, 8, 1), y: 145.8 },
        { x: new Date(2021, 9, 1), y: 251.4 }, { x: new Date(2021, 10, 1), y: 143.1 }
    ]
];
var overviewTypes = [
    {
        title: 'Events over time',
        builder: _Views_EventsOverTimeChart__WEBPACK_IMPORTED_MODULE_4__.EventsOverViewChart,
        data: [
            { x: 'Jan', y: 532.2 }, { x: 'Feb', y: 453.4 },
            { x: 'Mar', y: 422.8 }, { x: 'Apr', y: 531.6 },
            { x: 'May', y: 532.2 }, { x: 'Jun', y: 453.4 },
            { x: 'July', y: 422.8 }, { x: 'Agu', y: 531.6 },
            { x: 'Sep', y: 532.2 }, { x: 'Oct', y: 453.4 },
            { x: 'Nov', y: 422.8 }
        ]
    },
    {
        title: 'Active cases over time',
        builder: _Views_ActiveCasesOverTime__WEBPACK_IMPORTED_MODULE_2__.ActiveCasesOverTime,
        data: [
            { x: 'Jan', y: 532.2 }, { x: 'Feb', y: 453.4 },
            { x: 'Mar', y: 422.8 }, { x: 'Apr', y: 531.6 },
            { x: 'May', y: 532.2 }, { x: 'Jun', y: 453.4 },
            { x: 'July', y: 422.8 }, { x: 'Agu', y: 531.6 },
            { x: 'Sep', y: 532.2 }, { x: 'Oct', y: 453.4 },
            { x: 'Nov', y: 422.8 }
        ]
    },
    {
        title: 'Case variants',
        builder: _Views_EventsOverTimeChart__WEBPACK_IMPORTED_MODULE_4__.EventsOverViewChart,
        data: [
            { x: 'Jan', y: 532.2 }, { x: 'Feb', y: 453.4 },
            { x: 'Mar', y: 422.8 }, { x: 'Apr', y: 531.6 },
            { x: 'May', y: 532.2 }, { x: 'Jun', y: 453.4 },
            { x: 'July', y: 422.8 }, { x: 'Agu', y: 531.6 },
            { x: 'Sep', y: 532.2 }, { x: 'Oct', y: 453.4 },
            { x: 'Nov', y: 422.8 }
        ]
    },
    {
        title: 'Events per case',
        builder: _Views_EventsOverTimeChart__WEBPACK_IMPORTED_MODULE_4__.EventsOverViewChart,
        data: [
            { x: 'Jan', y: 532.2 }, { x: 'Feb', y: 453.4 },
            { x: 'Mar', y: 422.8 }, { x: 'Apr', y: 531.6 },
            { x: 'May', y: 532.2 }, { x: 'Jun', y: 453.4 },
            { x: 'July', y: 422.8 }, { x: 'Agu', y: 531.6 },
            { x: 'Sep', y: 532.2 }, { x: 'Oct', y: 453.4 },
            { x: 'Nov', y: 422.8 }
        ]
    },
    {
        title: 'Case duration',
        builder: _Views_EventsOverTimeChart__WEBPACK_IMPORTED_MODULE_4__.EventsOverViewChart,
        data: [
            { x: 'Jan', y: 532.2 }, { x: 'Feb', y: 453.4 },
            { x: 'Mar', y: 422.8 }, { x: 'Apr', y: 531.6 },
            { x: 'May', y: 532.2 }, { x: 'Jun', y: 453.4 },
            { x: 'July', y: 422.8 }, { x: 'Agu', y: 531.6 },
            { x: 'Sep', y: 532.2 }, { x: 'Oct', y: 453.4 },
            { x: 'Nov', y: 422.8 }
        ]
    },
    {
        title: 'Case utilization',
        builder: _Views_EventsOverTimeChart__WEBPACK_IMPORTED_MODULE_4__.EventsOverViewChart,
        data: [
            { x: 'Jan', y: 532.2 }, { x: 'Feb', y: 453.4 },
            { x: 'Mar', y: 422.8 }, { x: 'Apr', y: 531.6 },
            { x: 'May', y: 532.2 }, { x: 'Jun', y: 453.4 },
            { x: 'July', y: 422.8 }, { x: 'Agu', y: 531.6 },
            { x: 'Sep', y: 532.2 }, { x: 'Oct', y: 453.4 },
            { x: 'Nov', y: 422.8 }
        ]
    },
    {
        title: 'Mean activity duration',
        builder: _Views_EventsOverTimeChart__WEBPACK_IMPORTED_MODULE_4__.EventsOverViewChart,
        data: [
            { x: 'Jan', y: 532.2 }, { x: 'Feb', y: 453.4 },
            { x: 'Mar', y: 422.8 }, { x: 'Apr', y: 531.6 },
            { x: 'May', y: 532.2 }, { x: 'Jun', y: 453.4 },
            { x: 'July', y: 422.8 }, { x: 'Agu', y: 531.6 },
            { x: 'Sep', y: 532.2 }, { x: 'Oct', y: 453.4 },
            { x: 'Nov', y: 422.8 }
        ]
    },
    {
        title: 'Mean waiting time',
        builder: _Views_EventsOverTimeChart__WEBPACK_IMPORTED_MODULE_4__.EventsOverViewChart,
        data: [
            { x: 'Jan', y: 532.2 }, { x: 'Feb', y: 453.4 },
            { x: 'Mar', y: 422.8 }, { x: 'Apr', y: 531.6 },
            { x: 'May', y: 532.2 }, { x: 'Jun', y: 453.4 },
            { x: 'July', y: 422.8 }, { x: 'Agu', y: 531.6 },
            { x: 'Sep', y: 532.2 }, { x: 'Oct', y: 453.4 },
            { x: 'Nov', y: 422.8 }
        ]
    }
];
function MetricSelectionButtons(buttons, selectedIndex, onSelectedAction) {
    return (_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(buttons)(function (name, index) {
        return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(name).fontSize('13px'))
            .action(function () { return onSelectedAction(index); })
            .height(30)
            .border('solid 1px #ccc')
            .padding(5)
            .paddingLeft('10px')
            .paddingRight('10px')
            .cornerRadius(index === 0 ? '15px 0px 0px 15px' : (index === buttons.length - 1 ? '0px 15px 15px 0px' : ''))
            .background(index === selectedIndex ? 'rgb(120,120,120,20%)' : '');
    })));
}
var OverviewController = /** @class */ (function (_super) {
    __extends(OverviewController, _super);
    function OverviewController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OverviewController.prototype.InitController = function () {
        this.selectedIndex = 0;
    };
    OverviewController.prototype.LoadView = function () {
        var _this = this;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIScene)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading, spacing: 10 })(
        // Chart
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ZStack)((0,_procetra_common__WEBPACK_IMPORTED_MODULE_1__.TileBox)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_procetra_common__WEBPACK_IMPORTED_MODULE_1__.RegularText)(overviewTypes[this.selectedIndex].title)
            .fontSize('30px')
            .cursor('pointer')
            .border('dashed 1px var(--sub-border-color)')
            .transition('border .3s')
            .onClick(function () { return _this.showMenu = true; }))
            .padding()
            .height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ spacing: 10 }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(overviewTypes)(function (name, index) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(name.title))
                .action(function () { return _this.selectedIndex = index; })
                .background(index === _this.selectedIndex ? 'rgb(120,120,120,20%)' : '')
                .width(180)
                .height(30)
                .border('solid 1px #ccc')
                .padding()
                .cornerRadius(12);
        })).width(250).padding(10).visible(false), 
        // Chart here
        overviewTypes[this.selectedIndex].builder(overviewTypes[this.selectedIndex].data)))
            .visible(true)
            .variable('--sub-border-color', { default: 'transparent', hover: '#14a9d5' }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.AnimationStack)(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(overviewTypes)(function (name, index) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(name.title).cursor('pointer').width('100%').height('100%').shadow('inset 0 -1px 0 0 #e4e4e4').backgroundColor({ hover: '#f9f9f9' })
                .padding(10)
                .onClick(function () { _this.selectedIndex = index; _this.showMenu = false; });
        })))
            .initial({ y: 20, opacity: 0 }).animate({ y: 0, opacity: 1 }).__transition({ type: "spring", bounce: 0.3 })
            .overflow('hidden')
            .backgroundColor('white')
            // .animation(ListBounceAnimation, '.3s')
            .visible(this.showMenu))
            .overflow('hidden')
            .minHeight('350px'), 
        // Grid
        (0,_procetra_common__WEBPACK_IMPORTED_MODULE_1__.TileBox)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTop })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTrailing, spacing: -2 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_procetra_common__WEBPACK_IMPORTED_MODULE_1__.RegularText)('Cases (31)').fontSize('13px').fontWeight('600').padding('0 20px').height(30)).background('rgb(255,255,255,30%)').border('solid 2px #ccc').foregroundColor('#444').cornerRadius('5px 0 0 5px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_procetra_common__WEBPACK_IMPORTED_MODULE_1__.RegularText)('Variants (8)').fontSize('13px').fontWeight('600').padding('0 20px').height(30)).background('rgb(255,255,255,30%)').border('solid 2px #ccc').foregroundColor('#444').cornerRadius('0 5px 5px 0')), (0,_Views_CasesGrid__WEBPACK_IMPORTED_MODULE_3__.CasesGrid)())))));
    };
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.State)()
    ], OverviewController.prototype, "selectedIndex", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.State)()
    ], OverviewController.prototype, "showMenu", void 0);
    return OverviewController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/Controllers/ProcessStatisticController.ts":
/*!*******************************************************!*\
  !*** ./src/Controllers/ProcessStatisticController.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_165625__) => {

"use strict";
__nested_webpack_require_165625__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_165625__.d(__webpack_exports__, {
/* harmony export */   "ProcessStatisticController": () => (/* binding */ ProcessStatisticController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_165625__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_165625__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _procetra_common__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_165625__(/*! @procetra/common */ "./node_modules/@procetra/common/index.js");
/* harmony import */ var _procetra_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_165625__.n(_procetra_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Models_SideMenu__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_165625__(/*! ../Models/SideMenu */ "./src/Models/SideMenu.ts");
/* harmony import */ var _Activity_ActivityController__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_165625__(/*! ./Activity/ActivityController */ "./src/Controllers/Activity/ActivityController.ts");
/* harmony import */ var _Overview_MultiOverviewController__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_165625__(/*! ./Overview/MultiOverviewController */ "./src/Controllers/Overview/MultiOverviewController.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var controllers = [new _Overview_MultiOverviewController__WEBPACK_IMPORTED_MODULE_4__.MultiOverviewController, new _Activity_ActivityController__WEBPACK_IMPORTED_MODULE_3__.ActivityController];
var ProcessStatisticController = /** @class */ (function (_super) {
    __extends(ProcessStatisticController, _super);
    function ProcessStatisticController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProcessStatisticController.prototype.InitController = function () {
        this.selectedIndex = 0;
        this.currentController = controllers[0];
    };
    ProcessStatisticController.prototype.OnControllerChanged = function (index) {
        this.selectedIndex = index;
        this.currentController = _Models_SideMenu__WEBPACK_IMPORTED_MODULE_2__.sideMenuModel[index].controller;
    };
    ProcessStatisticController.prototype.LoadView = function () {
        var _this = this;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIScene)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_procetra_common__WEBPACK_IMPORTED_MODULE_1__.PortalSideMenu)({
            items: _Models_SideMenu__WEBPACK_IMPORTED_MODULE_2__.sideMenuModel,
            selectedAction: function (index) { return _this.OnControllerChanged(index); },
            second: true
        }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_procetra_common__WEBPACK_IMPORTED_MODULE_1__.PageTitle)(_Models_SideMenu__WEBPACK_IMPORTED_MODULE_2__.sideMenuModel[this.selectedIndex].icon, _Models_SideMenu__WEBPACK_IMPORTED_MODULE_2__.sideMenuModel[this.selectedIndex].name + ' statistics'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 5 }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(_Models_SideMenu__WEBPACK_IMPORTED_MODULE_2__.sideMenuModel)(function (item, index) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(item.icon).size(14).foregroundColor('gray').marginRight('5px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(item.name))
                .action(function () { return _this.OnControllerChanged(index); })
                .border('solid 1px gray').cornerRadius('10px').padding('3px 10px 3px 10px')
                .visible(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsDesktop);
        })).width()).height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HDivider)().height(1).backgroundColor('rgb(120,120,120,20%)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ScrollView)({ axes: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cVertical })(this.currentController)).padding('10px'))
            .background(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? '#f1f1f1' : '')));
    };
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.State)()
    ], ProcessStatisticController.prototype, "currentController", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.State)()
    ], ProcessStatisticController.prototype, "selectedIndex", void 0);
    return ProcessStatisticController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/Models/SideMenu.ts":
/*!********************************!*\
  !*** ./src/Models/SideMenu.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_172230__) => {

"use strict";
__nested_webpack_require_172230__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_172230__.d(__webpack_exports__, {
/* harmony export */   "sideMenuModel": () => (/* binding */ sideMenuModel)
/* harmony export */ });
/* harmony import */ var _Controllers_Activity_ActivityController__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_172230__(/*! ../Controllers/Activity/ActivityController */ "./src/Controllers/Activity/ActivityController.ts");
/* harmony import */ var _Controllers_Overview_MultiOverviewController__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_172230__(/*! ../Controllers/Overview/MultiOverviewController */ "./src/Controllers/Overview/MultiOverviewController.ts");
/* harmony import */ var _Controllers_Overview_OverviewController__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_172230__(/*! ../Controllers/Overview/OverviewController */ "./src/Controllers/Overview/OverviewController.ts");



var sideMenuModel = [
    {
        name: 'Overview',
        icon: '\\d300',
        controller: new _Controllers_Overview_MultiOverviewController__WEBPACK_IMPORTED_MODULE_1__.MultiOverviewController(),
        isVisible: function () { return true; }
    },
    {
        name: 'Activity',
        icon: '\\d30f',
        controller: new _Controllers_Activity_ActivityController__WEBPACK_IMPORTED_MODULE_0__.ActivityController(),
        isVisible: function () { return true; }
    },
    {
        name: 'Resource',
        icon: '\\e7fd',
        controller: new _Controllers_Overview_OverviewController__WEBPACK_IMPORTED_MODULE_2__.OverviewController(),
        isVisible: function () { return true; }
    }
];


/***/ }),

/***/ "./src/Views/ActiveCasesOverTime.ts":
/*!******************************************!*\
  !*** ./src/Views/ActiveCasesOverTime.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_174152__) => {

"use strict";
__nested_webpack_require_174152__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_174152__.d(__webpack_exports__, {
/* harmony export */   "ActiveCasesOverTime": () => (/* binding */ ActiveCasesOverTime)
/* harmony export */ });
/* harmony import */ var _realmocean_charts__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_174152__(/*! @realmocean/charts */ "@realmocean/charts");
/* harmony import */ var _realmocean_charts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_174152__.n(_realmocean_charts__WEBPACK_IMPORTED_MODULE_0__);

function ActiveCasesOverTime(data) {
    return ((0,_realmocean_charts__WEBPACK_IMPORTED_MODULE_0__.ChartView)()((0,_realmocean_charts__WEBPACK_IMPORTED_MODULE_0__.BarSerie)().xName('x').yName('y')
        .columnWidth(0.5)
        .fill('#FFD062')
        .data(data))
        .xAxis({
        labelStyle: {
            fontFamily: 'Ubuntu, sans-serif',
            size: '14px'
        },
        valueType: 'Category',
        labelFormat: 'MMM',
        majorGridLines: { width: 0 },
        intervalType: 'Months'
    })
        .yAxis({
        labelStyle: {
            fontFamily: 'Ubuntu, sans-serif',
            size: '14px'
        },
        labelFormat: '{value}',
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
    })
        .backgroundColor('transparent'));
}


/***/ }),

/***/ "./src/Views/CasesGrid.ts":
/*!********************************!*\
  !*** ./src/Views/CasesGrid.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_175809__) => {

"use strict";
__nested_webpack_require_175809__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_175809__.d(__webpack_exports__, {
/* harmony export */   "GridHeader": () => (/* binding */ GridHeader),
/* harmony export */   "GridRow": () => (/* binding */ GridRow),
/* harmony export */   "CasesGrid": () => (/* binding */ CasesGrid)
/* harmony export */ });
/* harmony import */ var _procetra_common__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_175809__(/*! @procetra/common */ "./node_modules/@procetra/common/index.js");
/* harmony import */ var _procetra_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_175809__.n(_procetra_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_175809__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_175809__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_175809__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_175809__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_2__);
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};



var columns = [
    {
        key: 'caseId',
        title: 'Case ID',
    },
    {
        key: 'events',
        title: 'Events',
        width: 120,
        builder: function (row) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_procetra_common__WEBPACK_IMPORTED_MODULE_0__.RegularText)(row['events']).marginRight('10px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.RoundedRectangle)().width().height(15).background('#7A9BCD').initial({ width: 0 }).animate({ width: '100%' }).__transition({ duration: 1 }));
        }
    },
    {
        key: 'variant',
        title: 'Variant',
    },
    {
        key: 'started',
        title: 'Started',
    },
    {
        key: 'finished',
        title: 'Finished',
    },
    {
        key: 'duration',
        title: 'Duration',
        builder: function (row) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_procetra_common__WEBPACK_IMPORTED_MODULE_0__.RegularText)(row['duration']).marginRight('10px').whiteSpace('nowrap'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.RoundedRectangle)().width('100%').height(15).background('#7A9BCD'));
        }
    }
];
var data = [
    {
        caseId: '1000-2645004',
        events: 5,
        variant: 'variant 5',
        started: '12/3/2019 16:17:43',
        finished: '01/02/2020 10:25:05',
        duration: '1 day, 18 hours'
    },
    {
        caseId: '1000-2653046',
        events: 5,
        variant: 'variant 5',
        started: '12/3/2019 16:17:43',
        finished: '01/02/2020 10:25:05',
        duration: '1 day, 18 hours'
    },
    {
        caseId: '1000-2653046',
        events: 5,
        variant: 'variant 5',
        started: '12/3/2019 16:17:43',
        finished: '01/02/2020 10:25:05',
        duration: '1 day, 18 hours'
    },
    {
        caseId: '1000-2691872',
        events: 5,
        variant: 'variant 5',
        started: '12/3/2019 16:17:43',
        finished: '01/02/2020 10:25:05',
        duration: '1 day, 18 hours'
    },
    {
        caseId: '1000-2691873',
        events: 5,
        variant: 'variant 5',
        started: '12/3/2019 16:17:43',
        finished: '01/02/2020 10:25:05',
        duration: '1 day, 18 hours'
    },
    {
        caseId: '1000-2653046',
        events: 5,
        variant: 'variant 5',
        started: '12/3/2019 16:17:43',
        finished: '01/02/2020 10:25:05',
        duration: '1 day, 18 hours'
    },
    {
        caseId: '1000-2691872',
        events: 5,
        variant: 'variant 5',
        started: '12/3/2019 16:17:43',
        finished: '01/02/2020 10:25:05',
        duration: '1 day, 18 hours'
    },
    {
        caseId: '1000-2691873',
        events: 5,
        variant: 'variant 5',
        started: '12/3/2019 16:17:43',
        finished: '01/02/2020 10:25:05',
        duration: '1 day, 18 hours'
    },
    {
        caseId: '1000-2653046',
        events: 5,
        variant: 'variant 5',
        started: '12/3/2019 16:17:43',
        finished: '01/02/2020 10:25:05',
        duration: '1 day, 18 hours'
    },
    {
        caseId: '1000-2691872',
        events: 5,
        variant: 'variant 5',
        started: '12/3/2019 16:17:43',
        finished: '01/02/2020 10:25:05',
        duration: '1 day, 18 hours'
    },
    {
        caseId: '1000-2691873',
        events: 5,
        variant: 'variant 5',
        started: '12/3/2019 16:17:43',
        finished: '01/02/2020 10:25:05',
        duration: '1 day, 18 hours'
    }
];
function GridHeader(columnInfo) {
    var width = _tuval_core__WEBPACK_IMPORTED_MODULE_2__.Convert.ToInt32(100 / columnInfo.length);
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ForEach)(columnInfo)(function (cInfo) {
        return (0,_procetra_common__WEBPACK_IMPORTED_MODULE_0__.RegularText)(cInfo.title)
            .fontFamily("'Source Sans Pro', Arial, sans-serif")
            .fontSize('18px')
            .fontWeight('500')
            .foregroundColor('#1A1A1A')
            //.textTransform('uppercase')
            .whiteSpace('nowrap')
            .width(_tuval_core__WEBPACK_IMPORTED_MODULE_2__.is.number(cInfo.width) ? cInfo.width + "px" : width + '%')
            .textOverflow('ellipsis')
            .padding('0 10px')
            .borderRight('2px solid transparent');
    })).height(40).borderBottom('2px solid #e4e4e4'));
}
function GridRow(columnInfo, row, onSelectedRow) {
    var width = _tuval_core__WEBPACK_IMPORTED_MODULE_2__.Convert.ToInt32(100 / columnInfo.length);
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ForEach)(columnInfo)(function (cInfo) {
        return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })(_tuval_core__WEBPACK_IMPORTED_MODULE_2__.is.function(cInfo.builder) ? cInfo.builder(row) :
            (0,_procetra_common__WEBPACK_IMPORTED_MODULE_0__.RegularText)(row[cInfo.key])
                .whiteSpace('nowrap')
                .textOverflow('ellipsis'))
            .borderTop('1px solid #e4e4e4')
            .padding('5px 10px')
            .width(_tuval_core__WEBPACK_IMPORTED_MODULE_2__.is.number(cInfo.width) ? cInfo.width + "px" : width + '%');
    })).backgroundColor({ hover: '#f5f5f5' })
        .height()
        .onClick(function () { return onSelectedRow(row); }).cursor('pointer'));
}
function CasesGrid() {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading }).apply(void 0, __spreadArray([GridHeader(columns)], (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ForEach)(data)((function (row) {
        return GridRow(columns, row, function () { });
    })))));
}


/***/ }),

/***/ "./src/Views/EventsOverTimeChart.ts":
/*!******************************************!*\
  !*** ./src/Views/EventsOverTimeChart.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_183725__) => {

"use strict";
__nested_webpack_require_183725__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_183725__.d(__webpack_exports__, {
/* harmony export */   "EventsOverViewChart": () => (/* binding */ EventsOverViewChart)
/* harmony export */ });
/* harmony import */ var _realmocean_charts__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_183725__(/*! @realmocean/charts */ "@realmocean/charts");
/* harmony import */ var _realmocean_charts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_183725__.n(_realmocean_charts__WEBPACK_IMPORTED_MODULE_0__);

function EventsOverViewChart(data) {
    return ((0,_realmocean_charts__WEBPACK_IMPORTED_MODULE_0__.ChartView)()((0,_realmocean_charts__WEBPACK_IMPORTED_MODULE_0__.AreaSerie)().xName('x').yName('y')
        .columnWidth(0.5)
        .fill('#FFD062')
        .data(data))
        .xAxis({
        labelStyle: {
            fontFamily: 'Ubuntu, sans-serif',
            size: '14px'
        },
        valueType: 'Category',
        labelFormat: 'MMM',
        majorGridLines: { width: 0 },
        intervalType: 'Months'
    })
        .yAxis({
        labelStyle: {
            fontFamily: 'Ubuntu, sans-serif',
            size: '14px'
        },
        labelFormat: '{value}',
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
    })
        .backgroundColor('transparent'));
}


/***/ }),

/***/ "@realmocean/charts":
/*!*************************************!*\
  !*** external "@realmocean/charts" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__realmocean_charts__;

/***/ }),

/***/ "@tuval/core":
/*!******************************!*\
  !*** external "@tuval/core" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__tuval_core__;

/***/ }),

/***/ "@tuval/forms":
/*!*******************************!*\
  !*** external "@tuval/forms" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__tuval_forms__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_186142__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_186142__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_186142__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nested_webpack_require_186142__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_186142__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_186142__.o(definition, key) && !__nested_webpack_require_186142__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_186142__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_186142__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__nested_webpack_require_186142__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_186142__.d(__webpack_exports__, {
/* harmony export */   "ProcessStatisticController": () => (/* reexport safe */ _Controllers_ProcessStatisticController__WEBPACK_IMPORTED_MODULE_0__.ProcessStatisticController)
/* harmony export */ });
/* harmony import */ var _Controllers_ProcessStatisticController__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_186142__(/*! ./Controllers/ProcessStatisticController */ "./src/Controllers/ProcessStatisticController.ts");


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/App/Controllers/AppController.ts":
/*!**********************************************!*\
  !*** ./src/App/Controllers/AppController.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppController": () => (/* binding */ AppController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Views_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Views/Router */ "./src/Views/Router.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var AppController = /** @class */ (function (_super) {
    __extends(AppController, _super);
    function AppController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppController.prototype.InitController = function () {
    };
    AppController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIScene)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_Views_Router__WEBPACK_IMPORTED_MODULE_1__.Routes)()))));
    };
    return AppController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/Application.ts":
/*!****************************!*\
  !*** ./src/Application.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessMining": () => (/* binding */ ProcessMining)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _procetra_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @procetra/common */ "./node_modules/@procetra/common/index.js");
/* harmony import */ var _procetra_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_procetra_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MainView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainView */ "./src/MainView.ts");
/* harmony import */ var _Resources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Resources */ "./src/Resources.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var manifest = __webpack_require__(/*! ./manifest */ "./src/manifest.js");
function make(ctorFun, argsArray) {
    var newInstance = Object.create(ctorFun.prototype.constructor.prototype);
    ctorFun.prototype.constructor.apply(newInstance, argsArray);
    return newInstance;
}
function makeFromInstance(instance, argsArray) {
    return make(instance.constructor, argsArray);
}
function App(manifest) {
    return function (constructor) {
        if (tuval$core['__APPS__'] == null) {
            tuval$core['__APPS__'] = {};
        }
        tuval$core['__APPS__'][manifest.application.name] = constructor;
    };
}
var ProcessMining = /** @class */ (function (_super) {
    __extends(ProcessMining, _super);
    function ProcessMining() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProcessMining.prototype.InitComponents = function () {
        var _this = this;
        this.Icon = _Resources__WEBPACK_IMPORTED_MODULE_4__.Resources.Icons.ApplicationIcon;
        //container.registerInstance('IProjectService', new LocalProjectService());
        var brokerProjectService = new _procetra_common__WEBPACK_IMPORTED_MODULE_2__.BrokerProjectService();
        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.instance.registerInstance('IProjectService_Thread', brokerProjectService);
        var fileExprorer = new _MainView__WEBPACK_IMPORTED_MODULE_3__.MainView();
        this.SetMainForm(fileExprorer);
        setTimeout(function () { return _this.Start(); }, 100); // Uygulamayı başlatıyoruz.
        //PMAcademyService.Start();
        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.TStorage.SaveFile('/static/tuval-core-wp.js', 'tuval-core-wp').then(function () {
            _tuval_core__WEBPACK_IMPORTED_MODULE_0__.TStorage.GetFile('tuval-core-wp').then(function (url) {
                // const thread = make(PMThreadWorker, ['/static/index-wp.js']);
                // container.registerInstance('IProjectService_Thread', thread);
                /*  thread.load().then(() => {
                    thread.start();
                }); */
            });
        });
    };
    ProcessMining.RecentlyUploadedFilesStorage = new _tuval_core__WEBPACK_IMPORTED_MODULE_0__.TuvalStorage({ name: 'BPMG_P2M', storeName: 'RecentlyUploadedFilesStorage' });
    ProcessMining = __decorate([
        App(manifest)
    ], ProcessMining);
    return ProcessMining;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.TApplication));



/***/ }),

/***/ "./src/Icons/NewFile.ts":
/*!******************************!*\
  !*** ./src/Icons/NewFile.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewFileIcon": () => (/* binding */ NewFileIcon)
/* harmony export */ });
var NewFileIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNNDIuNSwyMmgtMjVjLTAuNTUyLDAtMSwwLjQ0Ny0xLDFzMC40NDgsMSwxLDFoMjVjMC41NTIsMCwxLTAuNDQ3LDEtMVM0My4wNTIsMjIsNDIuNSwyMnoiLz4NCgk8cGF0aCBkPSJNMTcuNSwxNmgxMGMwLjU1MiwwLDEtMC40NDcsMS0xcy0wLjQ0OC0xLTEtMWgtMTBjLTAuNTUyLDAtMSwwLjQ0Ny0xLDFTMTYuOTQ4LDE2LDE3LjUsMTZ6Ii8+DQoJPHBhdGggZD0iTTQyLjUsMzBoLTI1Yy0wLjU1MiwwLTEsMC40NDctMSwxczAuNDQ4LDEsMSwxaDI1YzAuNTUyLDAsMS0wLjQ0NywxLTFTNDMuMDUyLDMwLDQyLjUsMzB6Ii8+DQoJPHBhdGggZD0iTTQyLjUsMzhoLTI1Yy0wLjU1MiwwLTEsMC40NDctMSwxczAuNDQ4LDEsMSwxaDI1YzAuNTUyLDAsMS0wLjQ0NywxLTFTNDMuMDUyLDM4LDQyLjUsMzh6Ii8+DQoJPHBhdGggZD0iTTQyLjUsNDZoLTI1Yy0wLjU1MiwwLTEsMC40NDctMSwxczAuNDQ4LDEsMSwxaDI1YzAuNTUyLDAsMS0wLjQ0NywxLTFTNDMuMDUyLDQ2LDQyLjUsNDZ6Ii8+DQoJPHBhdGggZD0iTTM4LjkxNCwwSDYuNXY2MGg0N1YxNC41ODZMMzguOTE0LDB6IE0zOS41LDMuNDE0TDUwLjA4NiwxNEgzOS41VjMuNDE0eiBNOC41LDU4VjJoMjl2MTRoMTR2NDJIOC41eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';


/***/ }),

/***/ "./src/Icons/OpenFile.ts":
/*!*******************************!*\
  !*** ./src/Icons/OpenFile.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenFileIcon": () => (/* binding */ OpenFileIcon)
/* harmony export */ });
var OpenFileIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBkPSJNNTcuNDksMjEuNUg1NHYtNi4yNjhjMC0xLjUwNy0xLjIyNi0yLjczMi0yLjczMi0yLjczMkgyNi41MTVsLTUtN0gyLjczMkMxLjIyNiw1LjUsMCw2LjcyNiwwLDguMjMydjQzLjY4N2wwLjAwNiwwDQoJYy0wLjAwNSwwLjU2MywwLjE3LDEuMTE0LDAuNTIyLDEuNTc1QzEuMDE4LDU0LjEzNCwxLjc2LDU0LjUsMi41NjUsNTQuNWg0NC43NTljMS4xNTYsMCwyLjE3NC0wLjc3OSwyLjQ1LTEuODEzTDYwLDI0LjY0OXYtMC4xNzcNCglDNjAsMjIuNzUsNTguOTQ0LDIxLjUsNTcuNDksMjEuNXogTTIsOC4yMzJDMiw3LjgyOCwyLjMyOSw3LjUsMi43MzIsNy41aDE3Ljc1M2w1LDdoMjUuNzgyYzAuNDA0LDAsMC43MzIsMC4zMjgsMC43MzIsMC43MzJWMjEuNQ0KCUgxMi43MzFjLTAuMTQ0LDAtMC4yODcsMC4wMTItMC40MjYsMC4wMzZjLTAuOTczLDAuMTYzLTEuNzgyLDAuODczLTIuMDIzLDEuNzc2TDIsNDUuODk5VjguMjMyeiBNNDcuODY5LDUyLjA4Mw0KCWMtMC4wNjYsMC4yNDUtMC4yOTEsMC40MTctMC41NDUsMC40MTdIMi41NjVjLTAuMjQzLDAtMC4zODUtMC4xMzktMC40NDgtMC4yMjJjLTAuMDYzLTAuMDgyLTAuMTYtMC4yNTYtMC4xMjMtMC40MDhsMTAuMTkxLTI3Ljk1Mw0KCWMwLjA2Ni0wLjI0NSwwLjI5MS0wLjQxNywwLjU0NS0wLjQxN0g1NGgzLjQ5YzAuMzgsMCwwLjQ3NywwLjU0NiwwLjUwMiwwLjgxOUw0Ny44NjksNTIuMDgzeiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';


/***/ }),

/***/ "./src/Icons/SaveFile.ts":
/*!*******************************!*\
  !*** ./src/Icons/SaveFile.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveFileIcon": () => (/* binding */ SaveFileIcon)
/* harmony export */ });
var SaveFileIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDkgNDkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5IDQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNMzkuOTE0LDBIMzcuNWgtMjhoLTl2NDloN2gzM2g4VjguNTg2TDM5LjkxNCwweiBNMzUuNSwydjE0aC0yNFYySDM1LjV6IE05LjUsNDdWMjhoMjl2MTlIOS41eiBNNDYuNSw0N2gtNlYyNmgtMzN2MjFoLTUNCgkJVjJoN3YxNmgyOFYyaDEuNTg2TDQ2LjUsOS40MTRWNDd6Ii8+DQoJPHBhdGggZD0iTTEzLjUsMzNoN2MwLjU1MywwLDEtMC40NDcsMS0xcy0wLjQ0Ny0xLTEtMWgtN2MtMC41NTMsMC0xLDAuNDQ3LTEsMVMxMi45NDcsMzMsMTMuNSwzM3oiLz4NCgk8cGF0aCBkPSJNMjMuNSwzNWgtMTBjLTAuNTUzLDAtMSwwLjQ0Ny0xLDFzMC40NDcsMSwxLDFoMTBjMC41NTMsMCwxLTAuNDQ3LDEtMVMyNC4wNTMsMzUsMjMuNSwzNXoiLz4NCgk8cGF0aCBkPSJNMjUuNzksMzUuMjljLTAuMTgxLDAuMTg5LTAuMjksMC40NS0wLjI5LDAuNzFzMC4xMDksMC41MiwwLjI5LDAuNzFDMjUuOTc5LDM2Ljg5LDI2LjIyOSwzNywyNi41LDM3DQoJCWMwLjI2LDAsMC41Mi0wLjExLDAuNzEtMC4yOWMwLjE4LTAuMTksMC4yOS0wLjQ1LDAuMjktMC43MXMtMC4xMS0wLjUyMS0wLjI5LTAuNzFDMjYuODQsMzQuOTIsMjYuMTYsMzQuOTIsMjUuNzksMzUuMjl6Ii8+DQoJPHBhdGggZD0iTTMzLjUsNGgtNnYxMGg2VjR6IE0zMS41LDEyaC0yVjZoMlYxMnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K';


/***/ }),

/***/ "./src/MainView.ts":
/*!*************************!*\
  !*** ./src/MainView.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainView": () => (/* binding */ MainView)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_Controllers_AppController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App/Controllers/AppController */ "./src/App/Controllers/AppController.ts");
/* harmony import */ var _Resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Resources */ "./src/Resources.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MainView = /** @class */ (function (_super) {
    __extends(MainView, _super);
    function MainView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainView.prototype.InitComponents = function () {
        this.Width = 1300;
        this.Height = 700;
        this.Name = 'ProcessMaining::MainForm';
        //this.Text = 'Procetra';
        this.Icon = _Resources__WEBPACK_IMPORTED_MODULE_2__.Resources.Icons.ApplicationIcon;
        this.HeaderColor = 'rgb(255,255,255, 20%)';
        var testController = new _App_Controllers_AppController__WEBPACK_IMPORTED_MODULE_1__.AppController();
        this.Controls.Add(testController);
        // testController.LoadRecentFiles();
        // testController.RequestDesktop.add(() => this.TopMaximize());
        // testController.LoadProjects();
        /*   const button = new TestButton();
          button.Text = 'Test';
          this.Controls.Add(button);
          setTimeout(()=> button.ShowText(),10000); */
        this.TopMaximizeChanged.add(function (topMaximized) {
            if (topMaximized) {
                _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.ApplicationMode = _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ApplicationModes.Portal;
            }
            else {
                _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.ApplicationMode = _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ApplicationModes.Desktop;
            }
        });
    };
    MainView.prototype.OnShown = function () {
        var _this = this;
        if (_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal) {
            setTimeout(function () { return _this.TopMaximize(); }, 10);
        }
    };
    MainView = __decorate([
        _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.View
    ], MainView);
    return MainView;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TForm));



/***/ }),

/***/ "./src/Resources.ts":
/*!**************************!*\
  !*** ./src/Resources.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Resources": () => (/* binding */ Resources)
/* harmony export */ });
/* harmony import */ var _Icons_NewFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icons/NewFile */ "./src/Icons/NewFile.ts");
/* harmony import */ var _Icons_OpenFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons/OpenFile */ "./src/Icons/OpenFile.ts");
/* harmony import */ var _Icons_SaveFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons/SaveFile */ "./src/Icons/SaveFile.ts");



var Resources = {
    Icons: {
        NewFile: _Icons_NewFile__WEBPACK_IMPORTED_MODULE_0__.NewFileIcon,
        OpenFile: _Icons_OpenFile__WEBPACK_IMPORTED_MODULE_1__.OpenFileIcon,
        SaveFile: _Icons_SaveFile__WEBPACK_IMPORTED_MODULE_2__.SaveFileIcon,
        ApplicationIcon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgdmVyc2lvbj0iMS4xIgogICB3aWR0aD0iMjIxLjgwMTcxIgogICBoZWlnaHQ9IjE5Ny4wODUxIgogICB2aWV3Qm94PSIwIDAgMjIxLjgwMTcxIDE5Ny4wODUxIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpZD0ic3ZnODciCiAgIHNvZGlwb2RpOmRvY25hbWU9ImxvZ29fcHJvY2V0cmFfLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4xLjIgKGI4ZTI1YmU4LCAyMDIyLTAyLTA1KSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48c29kaXBvZGk6bmFtZWR2aWV3CiAgIGlkPSJuYW1lZHZpZXcyMCIKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICBzaG93Z3JpZD0iZmFsc2UiCiAgIGlua3NjYXBlOnpvb209IjAuNzY3IgogICBpbmtzY2FwZTpjeD0iMjE4LjM4MzMxIgogICBpbmtzY2FwZTpjeT0iOTguNDM1NDYzIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijc0NyIKICAgaW5rc2NhcGU6d2luZG93LXg9IjE0NTQiCiAgIGlua3NjYXBlOndpbmRvdy15PSIxNjIiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2Zzg3IiAvPgo8ZGVzYwogICBpZD0iZGVzYzY2Ij5DcmVhdGVkIHdpdGggRmFicmljLmpzIDMuNS4wPC9kZXNjPgo8ZGVmcwogICBpZD0iZGVmczY4Ij4KPC9kZWZzPgoKPGcKICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4wNzk4LDAsMCwxLjA3OTgsMTEwLjkwMDg2LDk4LjU0MjU0OCkiCiAgIGlkPSJMYXllcl8xIj4KPHBhdGgKICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNkMDNmNDA7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIKICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMyMS44OTUsLTI5Ny42NCkiCiAgIGQ9Ik0gNDEyLjM3LDM4OC45IEggMjMyLjQyIGMgLTcuMzEsMCAtMTMuMjMsLTUuOTIgLTEzLjIzLC0xMy4yMyBWIDIxOS42MSBjIDAsLTcuMzEgNS45MiwtMTMuMjMgMTMuMjMsLTEzLjIzIGggMTc4Ljk1IGMgNy4zMSwwIDEzLjIzLDUuOTIgMTMuMjMsMTMuMjMgdiAxNTcuMDYgYyAtMC4wMSw2Ljc1IC01LjQ4LDEyLjIzIC0xMi4yMywxMi4yMyB6IgogICBzdHJva2UtbGluZWNhcD0icm91bmQiCiAgIGlkPSJwYXRoNzIiIC8+CjwvZz4KPGcKICAgdHJhbnNmb3JtPSJtYXRyaXgoMS4wNzk4LDAsMCwxLjA3OTgsMTEwLjg5MTE2LDk4LjA4NzU0OCkiCiAgIGlkPSJnNzciPgo8cGF0aAogICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIgogICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIxLjg4NTYsLTI5Ny4yMTgyKSIKICAgZD0ibSA0MDQuMSwyNjYuMjcgYyAtMC4wOCwtNC4wNCAtMC4yNSwtOC4zMSAtMC45NiwtMTIuMjUgLTEuNzksLTkuOTggLTYuMzMsLTE3LjI2IC0xMy44NywtMjIuMjcgLTUuODUsLTMuODggLTEyLjcxLC01LjY5IC0yMS41NiwtNS42OSAtMjEuMTUsMC4wMiAtNDIuMjQsMC4wMyAtNjMuMzMsMC4wMyBoIC01Mi42OSBjIC02LjcsMCAtMTIuMTMsNS45OSAtMTIuMTMsMTMuMzggdiAxMjQuNjIgYyAwLDIuMzUgMS43Miw0LjI1IDMuODUsNC4yNSBoIDE1Ljc3IGMgMi4xMywwIDMuODUsMC40NiAzLjg1LC0xLjg5IHYgLTMxLjAzIGMgMCwtMC40NCAwLjA0LC0wLjg2IDAuMTIsLTEuMjggdiAtMzUuODYgLTEwLjQxIC0zMi45MSBjIDAsLTMuNjggMi42MSwtNi43MSA1Ljk0LC02LjkxIHYgMCBjIDAuNSwtMC4wMyAwLjk2LC0wLjA2IDEuNDIsLTAuMDYgaCAxMC4yNiAyOS44NyBjIDE2LjMzLDAgMzIuNjcsMCA0OS4wMSwtMC4wMiA1LjI5LDAgOS42NCwxLjMzIDEzLjM0LDQuMDYgNS4yMiwzLjg1IDguMDEsOS40OCA4LjA3LDE2LjI3IDAuMDUsNi4xIDAuMDUsMTEuMTUgMCwxNS44OSAtMC4xMiwxMC44MiAtNy4wNiwxOS4wNiAtMTYuODcsMjAuMDQgLTIuMDQsMC4yIC00LjA2LDAuMzEgLTYuMDIsMC4zMSAtMTAuMjksMC4wMSAtMjAuNTksMC4wMSAtMzAuODgsMC4wMSAtNS41NywwIC0xMC4wOCw0Ljk4IC0xMC4wOCwxMS4xMiB2IDAgYyAwLDYuMTUgNC41MSwxMS4xMyAxMC4wOSwxMS4xMiAxMS40OCwtMC4wMSAyOS44MywtMC4wNCAzOC45NiwtMC4wOCA0LjU0LC0wLjAyIDkuMTMsLTAuNTYgMTMuNjUsLTEuNjEgOS4wNCwtMi4xIDE1LjQ4LC03LjA0IDE5LjY4LC0xNS4xIDIuOSwtNS41NyA0LjM4LC0xMi4xIDQuNTMsLTE5Ljk5IDAuMTIsLTguMzcgMC4xMywtMTYuMTQgLTAuMDIsLTIzLjc0IHoiCiAgIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgaWQ9InBhdGg3NSIgLz4KPC9nPgo8ZwogICB0cmFuc2Zvcm09Im1hdHJpeCgxLjA3OTgsMCwwLDEuMDc5OCw2NC44Mzc2NTksMTY5Ljg0NTA1KSIKICAgaWQ9Imc4MSI+CjxwYXRoCiAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiCiAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNzkuMjM1LC0zNjMuNjcpIgogICBkPSJtIDI5MC44NSwzNjkuMjIgdiAtMC4zNiBjIC0wLjk2LC02LjExIC01Ljc4LC0xMC43NSAtMTEuNTksLTEwLjc1IC01LjkzLDAgLTEwLjgxLDQuODMgLTExLjY0LDExLjEyIGggMjMuMjMgeiIKICAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogICBpZD0icGF0aDc5IiAvPgo8L2c+CjxnCiAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMDc5OCwwLDAsMS4wNzk4LDEzMi4yODYxNiwxMTkuMTQxMDUpIgogICBpZD0iZzg1Ij4KPHBhdGgKICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNmZmZmZmY7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIKICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0MS42OTg4LC0zMTYuNzE1KSIKICAgZD0ibSA0MDQuMjMsMzQ2LjM0IGggLTEuNjEgLTI5Ljg3IGMgLTE2LjMzLDAgLTMyLjY3LDAgLTQ5LjAxLDAuMDIgLTUuMjksMCAtOS42NCwtMS4zMyAtMTMuMzQsLTQuMDYgLTUuMjIsLTMuODUgLTguMDEsLTExLjg0IC04LjA3LC0xOC42MyAtMC4wNSwtNi4xIC0wLjA1LC0xMS4xNSAwLC0xNS44OSAwLjEyLC0xMC44MiA3LjA2LC0xOS4wNiAxNi44NywtMjAuMDUgMi4wNCwtMC4yIDQuMDYsLTAuMzEgNi4wMiwtMC4zMSAxMC4xNywtMC4wMSAyMC4zNCwtMC4wMSAzMC41MSwtMC4wMSA0Ljg1LDAgOS4zLC0zLjU4IDEwLjI1LC04LjgzIDEuMjksLTcuMTUgLTMuNjMsLTEzLjQyIC05Ljg4LC0xMy40MSAtMTEuNDgsMC4wMSAtMjkuODMsMC4wNCAtMzguOTYsMC4wOCAtNC41NCwwLjAyIC05LjEzLDAuNTYgLTEzLjY1LDEuNjEgLTkuMDQsMi4xIC0xNS40OCw3LjA0IC0xOS42OCwxNS4xIC0yLjksNS41NyAtNC4zOCwxMi4xIC00LjUzLDE5Ljk5IC0wLjE1LDguMzcgLTAuMTUsMTYuMTMgMCwyMy43MyAwLjA4LDQuMDQgMC4yNSwxMC42NyAwLjk2LDE0LjYxIDEuNzksOS45OCA2LjMzLDE3LjI2IDEzLjg3LDIyLjI3IDUuODUsMy44OCAxMi43MSw1LjcgMjEuNTYsNS43IDIxLjE1LC0wLjAyIDQyLjI0LC0wLjAzIDYzLjMzLC0wLjAzIGggNS4zNyBjIDEwLjk2LDAuMDIgMTkuODYsLTkuNzkgMTkuODYsLTIxLjg5IHoiCiAgIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgaWQ9InBhdGg4MyIgLz4KPC9nPgo8L3N2Zz4K'
    }
};


/***/ }),

/***/ "./src/Resources/Icons/AlllLog.ts":
/*!****************************************!*\
  !*** ./src/Resources/Icons/AlllLog.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllLogIcon": () => (/* binding */ AllLogIcon),
/* harmony export */   "AllLogSelectedIcon": () => (/* binding */ AllLogSelectedIcon)
/* harmony export */ });
var AllLogIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAABf0lEQVQ4T7XUMZLCMAwF0ByQnp4D0Ken5wDU9ByAPj09B6Cn984z/KwTYJjZyf4ZLZYlfX9b0XblA67XazkcDqXv+7JarUbbbrdlv9+XYRiema94Ib3dbhOi9Xo9IW19B1wul2flLyakElJEDbVzUkbl8XgcY6fT6cnwwEiKQIJEa4hiBH49h/hmsyn3+70atXPiSioouSWkJkRuEPJ2H1riPEUlddUUCTBqHIKECnF5YiER4+cgNZVUY2wsZefzuXRRwYnKvGX8uVJGrZvEZ/zdblc6fzgtFCAOFCD1PEGa1yJcnWIk7YmSJcR/pzSkYtlLbyqpxZL2P0rfvamDvr2p79ReC1w+q07XBf/SfQTxGXFyOhOhYCkzCHWicpWMZE5l1nOlFPKTm9tSD+PsZywz+2lEnsXaXkYy79vOfmon/6VadZCDoiRNtY/MiIdQTjCSQogluWrIspc1tZRmvyWECSlQkO/tm/lKcuUWL6SBq2mQwjTGL19D35E9UMoPrm3nt3GrLZwAAAAASUVORK5CYII=';
var AllLogSelectedIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAABlUlEQVQ4T7XUMUoEQRQE0DmaB/AAHsADaCpmJgaGmoqRiYGhwgYiGogIimAgi4GgCIIGCpsYtLxZa+nZHRBkLSid392/urp//20WVgelj8tbF+Xg9LFcD99LjeHTRzm6fC7ruze9eTgjurRx3hH6HH39fI1RxzZY2bnq5GNH1IIkccPttChwuXf8MJnbPrzvFyUAFvo2FscEwHWYf3kblcW1k5bcQi3cipq0uBbkBgg5ARCvx5Mb4VxFK+qoIMkEcmMTIlyAdeYiYk6cjeS0ogozT2zu35UmLgRxmbtMPO0UuXWSxCg+u30tjT8CtkMJhBNLANeTsRQvMUarkUyk3hEsSNznNKLmMpbatKLzxv847btTG/12p94pJEZanlWj6vCX6hNIjMxZ0+iIeUIjtB2Vo6Qlsyv6nnbKIWRtTss9vUnvpy3T+ylErgWMpSVzv3XvJ7fzK1W7M5aN4iRFNU5Mi0fQmmhNRDHC4KgRyxj45pbTjNeC2BFFDvLefoNXkiPXnBENHU2BJKYw/osVtE9szEH5BiNeoR2bsIsBAAAAAElFTkSuQmCC';


/***/ }),

/***/ "./src/Resources/Icons/CaseIcon.ts":
/*!*****************************************!*\
  !*** ./src/Resources/Icons/CaseIcon.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaseIcon": () => (/* binding */ CaseIcon),
/* harmony export */   "CaseSelectedIcon": () => (/* binding */ CaseSelectedIcon)
/* harmony export */ });
var CaseIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAAAhElEQVQ4T+2TQQrAIAwEfaB33+JbPPsW797zlpQVF9JarYceXVhIwmYIgk4XEhGttd6M2UpTYM5ZvfevLqX01KgpMITQlgGmU0ptFmPsqVFTIK956hOI8xFgiDWB7O0c17O3O3hfxxAMsd613cGzHOABbtjuHOBPQHxoFDDEetd2R0T0Alj9lVaHFEpyAAAAAElFTkSuQmCC';
var CaseSelectedIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAAAjUlEQVQ4T2NwKNz9HxdO6Tnxv2DqGRQMEsOmFoZxGrhgx93/uEDNvAtY9YAwTgM/f/sN1gwyGIZXH3wIFjt/+x1WPSCM00AYwCaO10CQ80EKYIpgbBiA8ZHFQa6H8ZH1gMKXAaYIBECSpAJkPaBgGTVw1EAiwKiBNDAQlKFBDBAGScLYxGJkPSk9J/4DAK+M6Ngc0yAWAAAAAElFTkSuQmCC';


/***/ }),

/***/ "./src/Resources/Icons/CsvFileIcon.ts":
/*!********************************************!*\
  !*** ./src/Resources/Icons/CsvFileIcon.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CsvFileIcon": () => (/* binding */ CsvFileIcon)
/* harmony export */ });
var CsvFileIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+SWNvbnMvRmlsZXR5cGUvY3N2PC90aXRsZT4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCAxLjAwMDAwMCkiIGZpbGw9IiM2RTgwQjgiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzEuMDAwMDEzNCwwIEMzMS4yMjEwMjczLDAgMzEuNDM0NDk3NywwLjA3MzE2NDU3ODkgMzEuNjA4MDQzMywwLjIwNjA4MDkwOCBMMzEuNzA3MTIwNiwwLjI5Mjg5MzYxNCBMNDMuNzA3MTA3MiwxMi4yOTI4OTM2IEM0My44NjMzODczLDEyLjQ0OTE3MzkgNDMuOTYyNTk4MywxMi42NTE4NTUyIDQzLjk5MTMyNzYsMTIuODY4NTU2MSBMNDQsMTMgTDQ0LDQzIEM0NCw0NC41OTc2Nzk5IDQyLjc1MTA3OTEsNDUuOTAzNjYwOCA0MS4xNzYyNzI3LDQ1Ljk5NDkwNzMgTDQxLDQ2IEw5LDQ2IEM3LjQwMjMxOTQ1LDQ2IDYuMDk2MzM5MTQsNDQuNzUxMDc5MyA2LjAwNTA5MjY5LDQzLjE3NjI3MjcgTDYsNDMgTDYsMzUgTDEsMzUgQzAuNDg3MTY0MTYxLDM1IDAuMDY0NDkyODM5MywzNC42MTM5NTk4IDAuMDA2NzI3NzMxMzMsMzQuMTE2NjIxMSBMMCwzNCBMMCwyMSBDMCwyMC40ODcxNjQyIDAuMzg2MDQwMTksMjAuMDY0NDkyOCAwLjg4MzM3ODg3NSwyMC4wMDY3Mjc3IEwxLDIwIEw2LDIwIEw2LDMgQzYsMS40MDIzMTkyMSA3LjI0ODkyMDA2LDAuMDk2MzM5MTI3NCA4LjgyMzcyNzIyLDAuMDA1MDkyNjkzNzggTDksMCBMMzEuMDAwMDEzNCwwIFogTTMwLDIgTDksMiBDOC40ODcxNjQyNSwyIDguMDY0NDkyODUsMi4zODYwNDAyOCA4LjAwNjcyNzczLDIuODgzMzc4ODkgTDgsMyBMOCwyMCBMMzUsMjAgQzM1LjUxMjgzNTgsMjAgMzUuOTM1NTA3MiwyMC4zODYwNDAyIDM1Ljk5MzI3MjMsMjAuODgzMzc4OSBMMzYsMjEgTDM2LDM0IEMzNiwzNC41MTI4MzU4IDM1LjYxMzk1OTgsMzQuOTM1NTA3MiAzNS4xMTY2MjExLDM0Ljk5MzI3MjMgTDM1LDM1IEw4LDM1IEw4LDQzIEM4LDQzLjUxMjgzNTMgOC4zODYwNDA2LDQzLjkzNTUwNzEgOC44ODMzNzg5Niw0My45OTMyNzIzIEw5LDQ0IEw0MSw0NCBDNDEuNTEyODM0OSw0NCA0MS45MzU1MDcsNDMuNjEzOTU4OSA0MS45OTMyNzIzLDQzLjExNjYyMDkgTDQyLDQzIEw0MiwxNCBMMzEsMTQgQzMwLjQ4NzE2NDIsMTQgMzAuMDY0NDkyOCwxMy42MTM5NTk4IDMwLjAwNjcyNzcsMTMuMTE2NjIxMSBMMzAsMTMgTDMwLDIgWiBNMzQsMjIgTDIsMjIgTDIsMzMgTDM0LDMzIEwzNCwyMiBaIE0zMiwzLjQxNSBMMzIsMTIgTDQwLjU4NSwxMiBMMzIsMy40MTUgWiI+PC9wYXRoPgogICAgICAgICAgICA8dGV4dCBmaWxsLXJ1bGU9Im5vbnplcm8iIGZvbnQtZmFtaWx5PSJPcGVuU2FucywgT3BlbiBTYW5zIiBmb250LXNpemU9IjkiIGZvbnQtd2VpZ2h0PSJub3JtYWwiPgogICAgICAgICAgICAgICAgPHRzcGFuIHg9IjUuMDY3MzIxOCIgeT0iMzEiPi5DU1Y8L3RzcGFuPgogICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';


/***/ }),

/***/ "./src/Resources/Icons/DataExtractorIcon.ts":
/*!**************************************************!*\
  !*** ./src/Resources/Icons/DataExtractorIcon.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataExtractorIcon": () => (/* binding */ DataExtractorIcon)
/* harmony export */ });


/***/ }),

/***/ "./src/Resources/Icons/DataSet.ts":
/*!****************************************!*\
  !*** ./src/Resources/Icons/DataSet.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSetIcon": () => (/* binding */ DataSetIcon),
/* harmony export */   "DataSetSelectedIcon": () => (/* binding */ DataSetSelectedIcon)
/* harmony export */ });
/* export const DataSetIcon: string  = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAALCAIAAAAFlbGkAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4xNkRpr/UAAACvSURBVDhPrZIxFsMgDEO5P1tuwMbGxkUY2dg4BVUqxSVtmua95g95jmwrxsGNJ7XWEILfiDG21ph6AzqyqvMeXehlavXKOSuzp5TCIgOKcnvggKyDq4Qjeu90AYilHgEfZ0dDwHPhuSwLxZQSjQBiisha5dzuGIF5BBsWbZLGsA/YgsA87MtLyQ2pk67375W3znW+L/4g8ntfNsKfwOfsfl1H92ud/uPeXwddWt8YD1i4QndEAVcfAAAAAElFTkSuQmCC';
export const DataSetSelectedIcon: string  = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAALCAIAAAAFlbGkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADDSURBVDhPY3Ao3A1ENfMu3H7y6T8MnL/9rmDqGYgUGgKKA2Wh6v7/B+oC6oVIgczafuopVAYVdCy7ClEER0ARqBwqAJoAlGUAmgoVwAZSek7ADQKyoaLYANAcBrjXgAyIv4Dk52+/IYKHL72CmwVkQwSBsnCVyNoZICwgQHYC3LFAbXBBuAXwAAIiZMcizIJLQxBUFEkcysetkqruwh9ekAiCIMLhBXcChQBoDr70RTyApi+I+4Gmwl1LEgDqggZf4W4AnA6fpRlRxx4AAAAASUVORK5CYII='; */
var DataSetIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAK5JREFUWIXtllEKgzAQRB89XaX3v4DxHvpTaQ27kmlcIXQHFiHB3SF5DkLqoxewAGtwFWCyDJQbhu81Wwb2zWgd5jxuGHiqIQxYV2Ot1RC7sCmDFAMWxBZsLmu9Buq1pn5DMDCMgeX9/D7iojToZWDiCOIMPIU5mYRpwNWvsSszpXwFLbGr9JNfaIndjOJQA92xa0lhoCV2L4PwaiWEroEarKgCB9garKjy/hP+VBuggNoWfaamWwAAAABJRU5ErkJggg==';
var DataSetSelectedIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAAA9klEQVRYR+2UwQrCMBAFC4JQKHgQvPr/H+ZZvFZQl+wkbRoMG0wKQgZ62HlJ9p06dFaM752QXVdduYJsN1i7gE+DyrCmF7AXQEcetT07oT2zuKNGC2T1C6ASiAPodgUYi95z4E0XUFnHaHrPgTddQGUdo+k9B950AbV1s9oY4gC6fgHhIGpd4inupNECmb1AbVjTC/xRAfTWn9EBcdFvF219r+wCKoHYgWpbgNF0xoNOfNEFVHCM2TMedOKLLqCCY8ye8aATX3RBxrvawEu+G7FDdaMCwlHU9rc7aqTgfy9QG9b0At8L7MSDtREXwubIrklXdobhA7MCC31Clb8eAAAAAElFTkSuQmCC';


/***/ }),

/***/ "./src/Resources/Icons/Loading.ts":
/*!****************************************!*\
  !*** ./src/Resources/Icons/Loading.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingIcon": () => (/* binding */ LoadingIcon)
/* harmony export */ });
var LoadingIcon = 'data:image/gif;base64,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';


/***/ }),

/***/ "./src/Resources/Icons/MapIcon.ts":
/*!****************************************!*\
  !*** ./src/Resources/Icons/MapIcon.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapIcon": () => (/* binding */ MapIcon),
/* harmony export */   "MapSelectedIcon": () => (/* binding */ MapSelectedIcon)
/* harmony export */ });
var MapIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAANCAYAAABGkiVgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAAAW0lEQVQ4T+XPMQrAMAxD0RzdN3fwIFDNd1oodOnwhshCkJWZo4jISe86DIXGpHcdhkJj0rsOQ6Ex6V2HIbkbchiSV6P+xaf6xuVRqHTy7WgdJl4W6kndfz2aawNtT/06M9gstQAAAABJRU5ErkJggg==';
var MapSelectedIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABmSURBVEhL7dNRCsAgCAZg2012U2/eVP56SeaCxXD0vZgQSGqUXkF0VYHjrSJwHByIy+wC79KhK6SP5G+Ru7+zbWi8//DNkG2SAmkI1yszL3/BidhZRa1uWaD1eOZ+/jXNX2D7PaIL3EYppuepJlIAAAAASUVORK5CYII=';


/***/ }),

/***/ "./src/Resources/Icons/OpenFile.ts":
/*!*****************************************!*\
  !*** ./src/Resources/Icons/OpenFile.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenFileIcon": () => (/* binding */ OpenFileIcon)
/* harmony export */ });
var OpenFileIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBkPSJNNTcuNDksMjEuNUg1NHYtNi4yNjhjMC0xLjUwNy0xLjIyNi0yLjczMi0yLjczMi0yLjczMkgyNi41MTVsLTUtN0gyLjczMkMxLjIyNiw1LjUsMCw2LjcyNiwwLDguMjMydjQzLjY4N2wwLjAwNiwwDQoJYy0wLjAwNSwwLjU2MywwLjE3LDEuMTE0LDAuNTIyLDEuNTc1QzEuMDE4LDU0LjEzNCwxLjc2LDU0LjUsMi41NjUsNTQuNWg0NC43NTljMS4xNTYsMCwyLjE3NC0wLjc3OSwyLjQ1LTEuODEzTDYwLDI0LjY0OXYtMC4xNzcNCglDNjAsMjIuNzUsNTguOTQ0LDIxLjUsNTcuNDksMjEuNXogTTIsOC4yMzJDMiw3LjgyOCwyLjMyOSw3LjUsMi43MzIsNy41aDE3Ljc1M2w1LDdoMjUuNzgyYzAuNDA0LDAsMC43MzIsMC4zMjgsMC43MzIsMC43MzJWMjEuNQ0KCUgxMi43MzFjLTAuMTQ0LDAtMC4yODcsMC4wMTItMC40MjYsMC4wMzZjLTAuOTczLDAuMTYzLTEuNzgyLDAuODczLTIuMDIzLDEuNzc2TDIsNDUuODk5VjguMjMyeiBNNDcuODY5LDUyLjA4Mw0KCWMtMC4wNjYsMC4yNDUtMC4yOTEsMC40MTctMC41NDUsMC40MTdIMi41NjVjLTAuMjQzLDAtMC4zODUtMC4xMzktMC40NDgtMC4yMjJjLTAuMDYzLTAuMDgyLTAuMTYtMC4yNTYtMC4xMjMtMC40MDhsMTAuMTkxLTI3Ljk1Mw0KCWMwLjA2Ni0wLjI0NSwwLjI5MS0wLjQxNywwLjU0NS0wLjQxN0g1NGgzLjQ5YzAuMzgsMCwwLjQ3NywwLjU0NiwwLjUwMiwwLjgxOUw0Ny44NjksNTIuMDgzeiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';


/***/ }),

/***/ "./src/Resources/Icons/RepositoryIcon.ts":
/*!***********************************************!*\
  !*** ./src/Resources/Icons/RepositoryIcon.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepositoryIcon": () => (/* binding */ RepositoryIcon)
/* harmony export */ });


/***/ }),

/***/ "./src/Resources/Icons/RightArrow.ts":
/*!*******************************************!*\
  !*** ./src/Resources/Icons/RightArrow.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightIcon": () => (/* binding */ RightIcon),
/* harmony export */   "RightSelectedIcon": () => (/* binding */ RightSelectedIcon)
/* harmony export */ });
var RightIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANCAIAAAD0YtNRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAAAYElEQVQoU43QwQ3AIAiFYQfk4oUBPTAMe7AAC9BHNW0Tadr/ovELMdrizMzm5lmaiPTeVXUeXTVMAIho55zDUcnrvpKXoZ1vQ2MMGGJmd/8xtwNKKwF9ve/1X+ZS/GfEAYl9E4x/h/PCAAAAAElFTkSuQmCC';
var RightSelectedIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANCAIAAAD0YtNRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAAAYklEQVQoU2NwKNwNRDFtRyEMZASSm7/j7q/ffytmn0eWACIGoA6gxP///zGlQfqAQlilofZhlYbKYZVGyAHR4t33gHJA8PX7b9/qA0Tow5SAymGVAMkR8B/OcIFQWMKzcDcAyBvdttnpPK8AAAAASUVORK5CYII=';


/***/ }),

/***/ "./src/Resources/Icons/SaveFile.ts":
/*!*****************************************!*\
  !*** ./src/Resources/Icons/SaveFile.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveFileIcon": () => (/* binding */ SaveFileIcon)
/* harmony export */ });
var SaveFileIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDkgNDkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5IDQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNMzkuOTE0LDBIMzcuNWgtMjhoLTl2NDloN2gzM2g4VjguNTg2TDM5LjkxNCwweiBNMzUuNSwydjE0aC0yNFYySDM1LjV6IE05LjUsNDdWMjhoMjl2MTlIOS41eiBNNDYuNSw0N2gtNlYyNmgtMzN2MjFoLTUNCgkJVjJoN3YxNmgyOFYyaDEuNTg2TDQ2LjUsOS40MTRWNDd6Ii8+DQoJPHBhdGggZD0iTTEzLjUsMzNoN2MwLjU1MywwLDEtMC40NDcsMS0xcy0wLjQ0Ny0xLTEtMWgtN2MtMC41NTMsMC0xLDAuNDQ3LTEsMVMxMi45NDcsMzMsMTMuNSwzM3oiLz4NCgk8cGF0aCBkPSJNMjMuNSwzNWgtMTBjLTAuNTUzLDAtMSwwLjQ0Ny0xLDFzMC40NDcsMSwxLDFoMTBjMC41NTMsMCwxLTAuNDQ3LDEtMVMyNC4wNTMsMzUsMjMuNSwzNXoiLz4NCgk8cGF0aCBkPSJNMjUuNzksMzUuMjljLTAuMTgxLDAuMTg5LTAuMjksMC40NS0wLjI5LDAuNzFzMC4xMDksMC41MiwwLjI5LDAuNzFDMjUuOTc5LDM2Ljg5LDI2LjIyOSwzNywyNi41LDM3DQoJCWMwLjI2LDAsMC41Mi0wLjExLDAuNzEtMC4yOWMwLjE4LTAuMTksMC4yOS0wLjQ1LDAuMjktMC43MXMtMC4xMS0wLjUyMS0wLjI5LTAuNzFDMjYuODQsMzQuOTIsMjYuMTYsMzQuOTIsMjUuNzksMzUuMjl6Ii8+DQoJPHBhdGggZD0iTTMzLjUsNGgtNnYxMGg2VjR6IE0zMS41LDEyaC0yVjZoMlYxMnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K';


/***/ }),

/***/ "./src/Resources/Icons/VariantIcon.ts":
/*!********************************************!*\
  !*** ./src/Resources/Icons/VariantIcon.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VariantIcon": () => (/* binding */ VariantIcon),
/* harmony export */   "VariantSelectedIcon": () => (/* binding */ VariantSelectedIcon)
/* harmony export */ });
var VariantIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAAA4klEQVQ4T+2TLQ6EMBCFOSAezwHweDwHQON7ADwezwHw+G6+CbOhLS0QksXsS16Gn8fXGSiZPdCyLHaaJsd3FEABFkVh8zx33Pf9ljhXAKUrIMaYb5dVVdm6rrfEuTIeogutbdsKlMo5LstSzDGTUFk0powOdDwdNWWdBMf0LrRpGgGu6yoVx3QJCnAYhmBXdF23YVxdgo7jKF+fXUAOsxD36NzXIZSu5nkW648AkB2ho/P1yVL3uSiUEJV7qQnU+xz1EMqKfjjl30B5f1zUih9D5c16+kODcMrvQZ9sfmOM/QCwu5BjGjUZVAAAAABJRU5ErkJggg==';
var VariantSelectedIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAAA90lEQVQ4T+2TPQrCQBCFczQP4AE8gAfQVuxsLCxjK1Y2FikVLES0EBEUwSIEC0ERBC0U0lisfAMr+dmEYApT+OAxSXz5dtadWKX6REVdaS1UrbsO2ZRLcgwK8Om/VFT98SGUS3MMSlfIdtxPl97poTbePZRLs8VLdKHraHUWKJV7fLn5Yq7ZCZVFTUBs0QEimEV6J8gExL+FzndXAZYbU6nYBMSZoADbg31sKoaz4/fQZm8rp88UkMMshOg8E5Suqp2lWH8IAJkIvXVOH1GDuUQoIcRvaTvQCuaoRigromJB+f94qCvODY2eHP5DJVB8aJ7htx1XvQHH7XEM29HIDQAAAABJRU5ErkJggg==';


/***/ }),

/***/ "./src/Resources/Icons/XesFileIcon.ts":
/*!********************************************!*\
  !*** ./src/Resources/Icons/XesFileIcon.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XesFileIcon": () => (/* binding */ XesFileIcon)
/* harmony export */ });
var XesFileIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+SWNvbnMvRmlsZXR5cGUveGVzPC90aXRsZT4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCAxLjAwMDAwMCkiIGZpbGw9IiM2RTgwQjgiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzEuMDAwMDEzNCwwIEMzMS4yMjEwMjczLDAgMzEuNDM0NDk3NywwLjA3MzE2NDU3ODkgMzEuNjA4MDQzMywwLjIwNjA4MDkwOCBMMzEuNzA3MTIwNiwwLjI5Mjg5MzYxNCBMNDMuNzA3MTA3MiwxMi4yOTI4OTM2IEM0My44NjMzODczLDEyLjQ0OTE3MzkgNDMuOTYyNTk4MywxMi42NTE4NTUyIDQzLjk5MTMyNzYsMTIuODY4NTU2MSBMNDQsMTMgTDQ0LDQzIEM0NCw0NC41OTc2Nzk5IDQyLjc1MTA3OTEsNDUuOTAzNjYwOCA0MS4xNzYyNzI3LDQ1Ljk5NDkwNzMgTDQxLDQ2IEw5LDQ2IEM3LjQwMjMxOTQ1LDQ2IDYuMDk2MzM5MTQsNDQuNzUxMDc5MyA2LjAwNTA5MjY5LDQzLjE3NjI3MjcgTDYsNDMgTDYsMzUgTDEsMzUgQzAuNDg3MTY0MTYxLDM1IDAuMDY0NDkyODM5MywzNC42MTM5NTk4IDAuMDA2NzI3NzMxMzMsMzQuMTE2NjIxMSBMMCwzNCBMMCwyMSBDMCwyMC40ODcxNjQyIDAuMzg2MDQwMTksMjAuMDY0NDkyOCAwLjg4MzM3ODg3NSwyMC4wMDY3Mjc3IEwxLDIwIEw2LDIwIEw2LDMgQzYsMS40MDIzMTkyMSA3LjI0ODkyMDA2LDAuMDk2MzM5MTI3NCA4LjgyMzcyNzIyLDAuMDA1MDkyNjkzNzggTDksMCBMMzEuMDAwMDEzNCwwIFogTTMwLDIgTDksMiBDOC40ODcxNjQyNSwyIDguMDY0NDkyODUsMi4zODYwNDAyOCA4LjAwNjcyNzczLDIuODgzMzc4ODkgTDgsMyBMOCwyMCBMMzUsMjAgQzM1LjUxMjgzNTgsMjAgMzUuOTM1NTA3MiwyMC4zODYwNDAyIDM1Ljk5MzI3MjMsMjAuODgzMzc4OSBMMzYsMjEgTDM2LDM0IEMzNiwzNC41MTI4MzU4IDM1LjYxMzk1OTgsMzQuOTM1NTA3MiAzNS4xMTY2MjExLDM0Ljk5MzI3MjMgTDM1LDM1IEw4LDM1IEw4LDQzIEM4LDQzLjUxMjgzNTMgOC4zODYwNDA2LDQzLjkzNTUwNzEgOC44ODMzNzg5Niw0My45OTMyNzIzIEw5LDQ0IEw0MSw0NCBDNDEuNTEyODM0OSw0NCA0MS45MzU1MDcsNDMuNjEzOTU4OSA0MS45OTMyNzIzLDQzLjExNjYyMDkgTDQyLDQzIEw0MiwxNCBMMzEsMTQgQzMwLjQ4NzE2NDIsMTQgMzAuMDY0NDkyOCwxMy42MTM5NTk4IDMwLjAwNjcyNzcsMTMuMTE2NjIxMSBMMzAsMTMgTDMwLDIgWiBNMzQsMjIgTDIsMjIgTDIsMzMgTDM0LDMzIEwzNCwyMiBaIE0zMiwzLjQxNSBMMzIsMTIgTDQwLjU4NSwxMiBMMzIsMy40MTUgWiI+PC9wYXRoPgogICAgICAgICAgICA8dGV4dCBmaWxsLXJ1bGU9Im5vbnplcm8iIGZvbnQtZmFtaWx5PSJPcGVuU2FucywgT3BlbiBTYW5zIiBmb250LXNpemU9IjkiIGZvbnQtd2VpZ2h0PSJub3JtYWwiPgogICAgICAgICAgICAgICAgPHRzcGFuIHg9IjUuMDY3MzIxOCIgeT0iMzEiPi5YRVM8L3RzcGFuPgogICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';


/***/ }),

/***/ "./src/Resources/Icons/XlsxFileIcon.ts":
/*!*********************************************!*\
  !*** ./src/Resources/Icons/XlsxFileIcon.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XlsxFileIcon": () => (/* binding */ XlsxFileIcon)
/* harmony export */ });
var XlsxFileIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+SWNvbnMvRmlsZXR5cGUveGxzeDwvdGl0bGU+CiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgMS4wMDAwMDApIiBmaWxsPSIjNkU4MEI4Ij4KICAgICAgICAgICAgPHBhdGggZD0iTTMxLjAwMDAxMzQsMCBDMzEuMjIxMDI3MywwIDMxLjQzNDQ5NzcsMC4wNzMxNjQ1Nzg5IDMxLjYwODA0MzMsMC4yMDYwODA5MDggTDMxLjcwNzEyMDYsMC4yOTI4OTM2MTQgTDQzLjcwNzEwNzIsMTIuMjkyODkzNiBDNDMuODYzMzg3MywxMi40NDkxNzM5IDQzLjk2MjU5ODMsMTIuNjUxODU1MiA0My45OTEzMjc2LDEyLjg2ODU1NjEgTDQ0LDEzIEw0NCw0MyBDNDQsNDQuNTk3Njc5OSA0Mi43NTEwNzkxLDQ1LjkwMzY2MDggNDEuMTc2MjcyNyw0NS45OTQ5MDczIEw0MSw0NiBMOSw0NiBDNy40MDIzMTk0NSw0NiA2LjA5NjMzOTE0LDQ0Ljc1MTA3OTMgNi4wMDUwOTI2OSw0My4xNzYyNzI3IEw2LDQzIEw2LDM1IEwxLDM1IEMwLjQ4NzE2NDE2MSwzNSAwLjA2NDQ5MjgzOTMsMzQuNjEzOTU5OCAwLjAwNjcyNzczMTMzLDM0LjExNjYyMTEgTDAsMzQgTDAsMjEgQzAsMjAuNDg3MTY0MiAwLjM4NjA0MDE5LDIwLjA2NDQ5MjggMC44ODMzNzg4NzUsMjAuMDA2NzI3NyBMMSwyMCBMNiwyMCBMNiwzIEM2LDEuNDAyMzE5MjEgNy4yNDg5MjAwNiwwLjA5NjMzOTEyNzQgOC44MjM3MjcyMiwwLjAwNTA5MjY5Mzc4IEw5LDAgTDMxLjAwMDAxMzQsMCBaIE0zMCwyIEw5LDIgQzguNDg3MTY0MjUsMiA4LjA2NDQ5Mjg1LDIuMzg2MDQwMjggOC4wMDY3Mjc3MywyLjg4MzM3ODg5IEw4LDMgTDgsMjAgTDM1LDIwIEMzNS41MTI4MzU4LDIwIDM1LjkzNTUwNzIsMjAuMzg2MDQwMiAzNS45OTMyNzIzLDIwLjg4MzM3ODkgTDM2LDIxIEwzNiwzNCBDMzYsMzQuNTEyODM1OCAzNS42MTM5NTk4LDM0LjkzNTUwNzIgMzUuMTE2NjIxMSwzNC45OTMyNzIzIEwzNSwzNSBMOCwzNSBMOCw0MyBDOCw0My41MTI4MzUzIDguMzg2MDQwNiw0My45MzU1MDcxIDguODgzMzc4OTYsNDMuOTkzMjcyMyBMOSw0NCBMNDEsNDQgQzQxLjUxMjgzNDksNDQgNDEuOTM1NTA3LDQzLjYxMzk1ODkgNDEuOTkzMjcyMyw0My4xMTY2MjA5IEw0Miw0MyBMNDIsMTQgTDMxLDE0IEMzMC40ODcxNjQyLDE0IDMwLjA2NDQ5MjgsMTMuNjEzOTU5OCAzMC4wMDY3Mjc3LDEzLjExNjYyMTEgTDMwLDEzIEwzMCwyIFogTTM0LDIyIEwyLDIyIEwyLDMzIEwzNCwzMyBMMzQsMjIgWiBNMzIsMy40MTUgTDMyLDEyIEw0MC41ODUsMTIgTDMyLDMuNDE1IFoiPjwvcGF0aD4KICAgICAgICAgICAgPHRleHQgZmlsbC1ydWxlPSJub256ZXJvIiBmb250LWZhbWlseT0iT3BlblNhbnMsIE9wZW4gU2FucyIgZm9udC1zaXplPSI5IiBmb250LXdlaWdodD0ibm9ybWFsIj4KICAgICAgICAgICAgICAgIDx0c3BhbiB4PSI1LjA2NzMyMTgiIHk9IjMxIj4uWExTWDwvdHNwYW4+CiAgICAgICAgICAgIDwvdGV4dD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';


/***/ }),

/***/ "./src/Resources/Resources.ts":
/*!************************************!*\
  !*** ./src/Resources/Resources.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Resources": () => (/* binding */ Resources)
/* harmony export */ });
/* harmony import */ var _Icons_NewFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Icons/NewFile */ "./src/Icons/NewFile.ts");
/* harmony import */ var _Icons_OpenFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons/OpenFile */ "./src/Resources/Icons/OpenFile.ts");
/* harmony import */ var _Icons_SaveFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons/SaveFile */ "./src/Resources/Icons/SaveFile.ts");
/* harmony import */ var _Icons_DataSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/DataSet */ "./src/Resources/Icons/DataSet.ts");
/* harmony import */ var _Icons_RightArrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icons/RightArrow */ "./src/Resources/Icons/RightArrow.ts");
/* harmony import */ var _Icons_VariantIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons/VariantIcon */ "./src/Resources/Icons/VariantIcon.ts");
/* harmony import */ var _Icons_CaseIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Icons/CaseIcon */ "./src/Resources/Icons/CaseIcon.ts");
/* harmony import */ var _Icons_AlllLog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Icons/AlllLog */ "./src/Resources/Icons/AlllLog.ts");
/* harmony import */ var _Icons_MapIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Icons/MapIcon */ "./src/Resources/Icons/MapIcon.ts");
/* harmony import */ var _Icons_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Icons/Loading */ "./src/Resources/Icons/Loading.ts");
/* harmony import */ var _Icons_CsvFileIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Icons/CsvFileIcon */ "./src/Resources/Icons/CsvFileIcon.ts");
/* harmony import */ var _Icons_XlsxFileIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Icons/XlsxFileIcon */ "./src/Resources/Icons/XlsxFileIcon.ts");
/* harmony import */ var _Icons_DataExtractorIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Icons/DataExtractorIcon */ "./src/Resources/Icons/DataExtractorIcon.ts");
/* harmony import */ var _Icons_XesFileIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Icons/XesFileIcon */ "./src/Resources/Icons/XesFileIcon.ts");
/* harmony import */ var _Icons_RepositoryIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Icons/RepositoryIcon */ "./src/Resources/Icons/RepositoryIcon.ts");















var Resources = {
    Icons: {
        NewFileIcon: _Icons_NewFile__WEBPACK_IMPORTED_MODULE_0__.NewFileIcon,
        OpenFileIcon: _Icons_OpenFile__WEBPACK_IMPORTED_MODULE_1__.OpenFileIcon,
        SaveFileIcon: _Icons_SaveFile__WEBPACK_IMPORTED_MODULE_2__.SaveFileIcon,
        DataSetIcon: _Icons_DataSet__WEBPACK_IMPORTED_MODULE_3__.DataSetIcon,
        DataSetSelectedIcon: _Icons_DataSet__WEBPACK_IMPORTED_MODULE_3__.DataSetSelectedIcon,
        RightArrowIcon: _Icons_RightArrow__WEBPACK_IMPORTED_MODULE_4__.RightIcon,
        RightArrowSelectedIcon: _Icons_RightArrow__WEBPACK_IMPORTED_MODULE_4__.RightSelectedIcon,
        VariantIcon: _Icons_VariantIcon__WEBPACK_IMPORTED_MODULE_5__.VariantIcon,
        VariantSelectedIcon: _Icons_VariantIcon__WEBPACK_IMPORTED_MODULE_5__.VariantSelectedIcon,
        CaseIcon: _Icons_CaseIcon__WEBPACK_IMPORTED_MODULE_6__.CaseIcon,
        CaseSelectedIcon: _Icons_CaseIcon__WEBPACK_IMPORTED_MODULE_6__.CaseSelectedIcon,
        AllLogIcon: _Icons_AlllLog__WEBPACK_IMPORTED_MODULE_7__.AllLogIcon,
        AllLogSelectedIcon: _Icons_AlllLog__WEBPACK_IMPORTED_MODULE_7__.AllLogSelectedIcon,
        MapIcon: _Icons_MapIcon__WEBPACK_IMPORTED_MODULE_8__.MapIcon,
        MapSelectedIcon: _Icons_MapIcon__WEBPACK_IMPORTED_MODULE_8__.MapSelectedIcon,
        Loading: _Icons_Loading__WEBPACK_IMPORTED_MODULE_9__.LoadingIcon,
        CsvFileIcon: _Icons_CsvFileIcon__WEBPACK_IMPORTED_MODULE_10__.CsvFileIcon,
        XlsxFileIcon: _Icons_XlsxFileIcon__WEBPACK_IMPORTED_MODULE_11__.XlsxFileIcon,
        DataExtractorIcon: _Icons_DataExtractorIcon__WEBPACK_IMPORTED_MODULE_12__.DataExtractorIcon,
        XesFileIcon: _Icons_XesFileIcon__WEBPACK_IMPORTED_MODULE_13__.XesFileIcon,
        RepositoryIcon: _Icons_RepositoryIcon__WEBPACK_IMPORTED_MODULE_14__.RepositoryIcon
    }
};


/***/ }),

/***/ "./src/UI/Controls/DashboardView/DashboardView.ts":
/*!********************************************************!*\
  !*** ./src/UI/Controls/DashboardView/DashboardView.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardView": () => (/* binding */ DashboardView)
/* harmony export */ });
/* harmony import */ var _realmocean_diagram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/diagram */ "@realmocean/diagram");
/* harmony import */ var _realmocean_diagram__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_diagram__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_cg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/cg */ "@tuval/cg");
/* harmony import */ var _tuval_cg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_cg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _manifest_types___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../__manifest__/__types__ */ "./src/__manifest__/__types__.ts");
/* harmony import */ var _Shapes_TdiActivityMeanDurationChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Shapes/TdiActivityMeanDurationChart */ "./src/UI/Controls/DashboardView/Shapes/TdiActivityMeanDurationChart.ts");
/* harmony import */ var _Shapes_TdiActivityMedianDurationChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Shapes/TdiActivityMedianDurationChart */ "./src/UI/Controls/DashboardView/Shapes/TdiActivityMedianDurationChart.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var sayac = 0;
var DashboardView = /** @class */ (function (_super) {
    __extends(DashboardView, _super);
    function DashboardView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DashboardView.prototype.DoExternalDrop = function (evt) {
        var data = evt.Data;
        var type = data.GetData('Type');
        var screenPnt = new _tuval_cg__WEBPACK_IMPORTED_MODULE_1__.CGPoint(evt.X, evt.Y);
        this.startTransaction();
        this.Selection.Clear();
        if (type instanceof _tuval_core__WEBPACK_IMPORTED_MODULE_2__.Type) {
            if (type === (0,_tuval_core__WEBPACK_IMPORTED_MODULE_2__.typeOf)(_realmocean_diagram__WEBPACK_IMPORTED_MODULE_0__.Types.TuText)) {
                var rect = _tuval_core__WEBPACK_IMPORTED_MODULE_2__.Activator.CreateInstance(type);
                rect.Text = 'Text';
                //rect.Brush = Brushes.BlueViolet;
                rect.Width = 200;
                rect.Height = 200;
                rect.Wrapping = true;
                rect.BackgroundColor = _tuval_cg__WEBPACK_IMPORTED_MODULE_1__.CGColor.Cornsilk;
                rect.Multiline = true;
                // rect.AutoResizes = true;
                rect.TransparentBackground = false;
                rect.Alignment = _realmocean_diagram__WEBPACK_IMPORTED_MODULE_0__.Middle;
                rect.WrappingWidth = 300;
                rect.Bordered = true;
                rect.Resizable = true;
                rect.FontSize = 20;
                this.Selection.HotSpot = new _tuval_cg__WEBPACK_IMPORTED_MODULE_1__.CGSize(25, 20);
                //const newobj = this.Document.addCopy(rect, screenPnt);
                this.Document.Add(rect);
                this.Selection.Add(rect);
            }
            else if (type === (0,_tuval_core__WEBPACK_IMPORTED_MODULE_2__.typeOf)(_manifest_types___WEBPACK_IMPORTED_MODULE_3__._Types.TdiActivityMeanDurationChart)) {
                var rect = new _Shapes_TdiActivityMeanDurationChart__WEBPACK_IMPORTED_MODULE_4__.TdiActivityMeanDurationChart(); //Activator.CreateInstance(type);
                rect.SetDataSet(this.pId, this.dId);
                //rect.Brush = Brushes.BlueViolet;
                rect.Left = -1000;
                rect.Width = 400;
                rect.Height = 250;
                this.Selection.HotSpot = new _tuval_cg__WEBPACK_IMPORTED_MODULE_1__.CGSize(100, 100);
                //const newobj = this.Document.addCopy(rect, screenPnt);
                this.Document.Add(rect);
                this.Selection.Add(rect);
            }
            else if (type === (0,_tuval_core__WEBPACK_IMPORTED_MODULE_2__.typeOf)(_manifest_types___WEBPACK_IMPORTED_MODULE_3__._Types.TdiActivityMedianDurationChart)) {
                var rect = new _Shapes_TdiActivityMedianDurationChart__WEBPACK_IMPORTED_MODULE_5__.TdiActivityMedianDurationChart(); //Activator.CreateInstance(type);
                rect.SetDataSet(this.pId, this.dId);
                //rect.Brush = Brushes.BlueViolet;
                rect.Left = -1000;
                rect.Width = 400;
                rect.Height = 250;
                this.Selection.HotSpot = new _tuval_cg__WEBPACK_IMPORTED_MODULE_1__.CGSize(100, 100);
                //const newobj = this.Document.addCopy(rect, screenPnt);
                this.Document.Add(rect);
                this.Selection.Add(rect);
            }
            else if (type === (0,_tuval_core__WEBPACK_IMPORTED_MODULE_2__.typeOf)(_manifest_types___WEBPACK_IMPORTED_MODULE_3__._Types.TdiFregProcessExplorerShape)) {
                /* const rect: TuObject = new TdiFregProcessExplorerShape();


                rect.Left = -1000;
                rect.Width = 400;
                rect.Height = 250;

                this.Selection.HotSpot = new CGSize(100, 100);


                this.Document.Add(rect);
                this.Selection.Add(rect); */
            }
        }
        else {
            var rect = new type(); //Activator.CreateInstance(type);
            //rect.Brush = Brushes.BlueViolet;
            rect.Left = -1000;
            this.Selection.HotSpot = new _tuval_cg__WEBPACK_IMPORTED_MODULE_1__.CGSize(100, 100);
            //const newobj = this.Document.addCopy(rect, screenPnt);
            this.Document.Add(rect);
            this.Selection.Add(rect);
        }
        this.finishTransaction("Insert from TreeView");
        return this.Selection;
    };
    return DashboardView;
}(_realmocean_diagram__WEBPACK_IMPORTED_MODULE_0__.TuView));



/***/ }),

/***/ "./src/UI/Controls/DashboardView/Shapes/TdiActivityMeanDurationChart.ts":
/*!******************************************************************************!*\
  !*** ./src/UI/Controls/DashboardView/Shapes/TdiActivityMeanDurationChart.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TdiActivityMeanDurationChart": () => (/* binding */ TdiActivityMeanDurationChart)
/* harmony export */ });
/* harmony import */ var _TuDashboardShape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TuDashboardShape */ "./src/UI/Controls/DashboardView/TuDashboardShape.tsx");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _manifest_types___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../__manifest__/__types__ */ "./src/__manifest__/__types__.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TdiActivityMeanDurationChart = /** @class */ (function (_super) {
    __extends(TdiActivityMeanDurationChart, _super);
    function TdiActivityMeanDurationChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TdiActivityMeanDurationChart.prototype.TdiActivityMeanDurationChart = function () {
    };
    TdiActivityMeanDurationChart.prototype.GetControl = function () {
        /*  const chart = new MeanChart();
         chart.Height = -90; //%
         chart.Title = 'Activity Mean Duration';
         return chart; */
        return null;
    };
    TdiActivityMeanDurationChart = __decorate([
        (0,_tuval_core__WEBPACK_IMPORTED_MODULE_1__.ClassInfo)({
            fullName: _manifest_types___WEBPACK_IMPORTED_MODULE_2__._Types.TdiActivityMeanDurationChart,
            name: 'TdiActivityMeanDurationChart',
            instanceof: [_manifest_types___WEBPACK_IMPORTED_MODULE_2__._Types.TdiActivityMeanDurationChart]
        })
    ], TdiActivityMeanDurationChart);
    return TdiActivityMeanDurationChart;
}(_TuDashboardShape__WEBPACK_IMPORTED_MODULE_0__.TuDashboardShape));



/***/ }),

/***/ "./src/UI/Controls/DashboardView/Shapes/TdiActivityMedianDurationChart.ts":
/*!********************************************************************************!*\
  !*** ./src/UI/Controls/DashboardView/Shapes/TdiActivityMedianDurationChart.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TdiActivityMedianDurationChart": () => (/* binding */ TdiActivityMedianDurationChart)
/* harmony export */ });
/* harmony import */ var _TuDashboardShape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TuDashboardShape */ "./src/UI/Controls/DashboardView/TuDashboardShape.tsx");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _manifest_types___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../__manifest__/__types__ */ "./src/__manifest__/__types__.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TdiActivityMedianDurationChart = /** @class */ (function (_super) {
    __extends(TdiActivityMedianDurationChart, _super);
    function TdiActivityMedianDurationChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TdiActivityMedianDurationChart.prototype.TdiActivityMedianDurationChart = function () {
    };
    TdiActivityMedianDurationChart.prototype.GetControl = function () {
        /*   const chart = new MedianChart();
          chart.Height = -90; //%
          chart.Title = 'Activity Median Duration';
          return chart; */
        return null;
    };
    TdiActivityMedianDurationChart = __decorate([
        (0,_tuval_core__WEBPACK_IMPORTED_MODULE_1__.ClassInfo)({
            fullName: _manifest_types___WEBPACK_IMPORTED_MODULE_2__._Types.TdiActivityMedianDurationChart,
            name: 'TdiActivityMeanDurationChart',
            instanceof: [_manifest_types___WEBPACK_IMPORTED_MODULE_2__._Types.TdiActivityMedianDurationChart]
        })
    ], TdiActivityMedianDurationChart);
    return TdiActivityMedianDurationChart;
}(_TuDashboardShape__WEBPACK_IMPORTED_MODULE_0__.TuDashboardShape));



/***/ }),

/***/ "./src/UI/Controls/DashboardView/TuDashboardShape.tsx":
/*!************************************************************!*\
  !*** ./src/UI/Controls/DashboardView/TuDashboardShape.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TuDashboardShape": () => (/* binding */ TuDashboardShape)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_cg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/cg */ "@tuval/cg");
/* harmony import */ var _tuval_cg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_cg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _realmocean_diagram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @realmocean/diagram */ "@realmocean/diagram");
/* harmony import */ var _realmocean_diagram__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_realmocean_diagram__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _manifest_types___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../__manifest__/__types__ */ "./src/__manifest__/__types__.ts");
/* harmony import */ var _TuDashboardShapeHtmlRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TuDashboardShapeHtmlRenderer */ "./src/UI/Controls/DashboardView/TuDashboardShapeHtmlRenderer.tsx");
/* harmony import */ var _procetra_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @procetra/common */ "./node_modules/@procetra/common/index.js");
/* harmony import */ var _procetra_common__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_procetra_common__WEBPACK_IMPORTED_MODULE_6__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SettingsDialog = /** @class */ (function (_super) {
    __extends(SettingsDialog, _super);
    function SettingsDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsDialog.prototype.SettingsDialog = function () {
        this.Width = 200;
        this.Height = 200;
    };
    return SettingsDialog;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Dialog));
var TuDashboardShape = /** @class */ (function (_super) {
    __extends(TuDashboardShape, _super);
    function TuDashboardShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TuDashboardShape.prototype.TuDashboardShape = function () {
        var _this = this;
        this._updated = 1;
        this.dropTarget = new _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.DropArea();
        this.dropTarget.Text = '';
        //   this.dropTarget.Controls.Add(this.GetPreviewControl());
        this.dropTarget.Drop.add((function (e) {
            var _a = e.nativeEvent.dataTransfer.getData('text').split(';'), projectId = _a[0], datasetId = _a[1];
            if (!_tuval_core__WEBPACK_IMPORTED_MODULE_2__.is.nullOrEmpty(projectId) && !_tuval_core__WEBPACK_IMPORTED_MODULE_2__.is.nullOrEmpty(datasetId)) {
                _this.SetDataSet(projectId, datasetId);
            }
        }));
        this.dialog = new SettingsDialog();
        this.BrushColor = _tuval_cg__WEBPACK_IMPORTED_MODULE_1__.CGColor.White;
        this.Control = this.GetControl();
        this.HtmlRenderer = new _TuDashboardShapeHtmlRenderer__WEBPACK_IMPORTED_MODULE_5__._TuDashboardShapeHtmlRenderer();
    };
    /*    public CreateElements(param: any) {
          const view: TuView = param;
          const result = [];
          if (view.RenderingMode === ViewRenderingMode.Html) {
              TuDashboardShapeHtmlRenderer.Apply(result, this);
          }
          return result;
      } */
    TuDashboardShape.prototype.SetDataSet = function (projectId, datasetId) {
        var _this = this;
        var log_id = datasetId;
        _procetra_common__WEBPACK_IMPORTED_MODULE_6__.MiningBrokerClient.GetActivityOverview(log_id).then(function (data) {
            _this.Control.SetChartData(data);
            _this.renderedNode = _this.Control.CreateMainElement();
        });
    };
    TuDashboardShape.prototype.OnBoundsChanged = function (old) {
        if (this.Width !== old.Width || this.Height !== old.Height) {
            console.log('New width: ', this.Width, ' Old Width : ', old.Width);
            console.log('New X: ', this.Left, ' Old C : ', old.X);
            this.Control.Width = this.Width - 40;
            this.Control.Height = this.Height - 40;
            this.dropTarget.Height = this.Height - 50;
            // setTimeout(()=> this.button.Refresh(), 100);
        }
    };
    TuDashboardShape.prototype.OnDoubleClick = function (evt, view) {
        this.dialog.ShowDialog();
        //view.Selection.Clear();
        //alert('double click');
        return false;
    };
    TuDashboardShape.prototype.GetControl = function () {
        /*    const chart = new MeanChart();
           chart.Height = -90; //%
           chart.Title = 'Activity Mean Duration';
           return chart; */
        return null;
    };
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.State)()
    ], TuDashboardShape.prototype, "Control", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.State)()
    ], TuDashboardShape.prototype, "renderedNode", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.State)()
    ], TuDashboardShape.prototype, "dialog", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.State)()
    ], TuDashboardShape.prototype, "dropTarget", void 0);
    __decorate([
        _tuval_forms__WEBPACK_IMPORTED_MODULE_0__._State
    ], TuDashboardShape.prototype, "_test", void 0);
    __decorate([
        _tuval_forms__WEBPACK_IMPORTED_MODULE_0__._State
    ], TuDashboardShape.prototype, "_projectId", void 0);
    __decorate([
        _tuval_forms__WEBPACK_IMPORTED_MODULE_0__._State
    ], TuDashboardShape.prototype, "_datasetId", void 0);
    __decorate([
        _tuval_forms__WEBPACK_IMPORTED_MODULE_0__._State
    ], TuDashboardShape.prototype, "_updated", void 0);
    TuDashboardShape = __decorate([
        (0,_tuval_core__WEBPACK_IMPORTED_MODULE_2__.ClassInfo)({
            fullName: _manifest_types___WEBPACK_IMPORTED_MODULE_4__._Types.TuDashboardShape,
            name: 'TuObject',
            instanceof: [_manifest_types___WEBPACK_IMPORTED_MODULE_4__._Types.TuDashboardShape]
        })
    ], TuDashboardShape);
    return TuDashboardShape;
}(_realmocean_diagram__WEBPACK_IMPORTED_MODULE_3__.TuRectangle));



/***/ }),

/***/ "./src/UI/Controls/DashboardView/TuDashboardShapeHtmlRenderer.tsx":
/*!************************************************************************!*\
  !*** ./src/UI/Controls/DashboardView/TuDashboardShapeHtmlRenderer.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_TuDashboardShapeHtmlRenderer": () => (/* binding */ _TuDashboardShapeHtmlRenderer),
/* harmony export */   "TuDashboardShapeHtmlRenderer": () => (/* binding */ TuDashboardShapeHtmlRenderer)
/* harmony export */ });
/* harmony import */ var _tuval_graphics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/graphics */ "@tuval/graphics");
/* harmony import */ var _tuval_graphics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_graphics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _realmocean_diagram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @realmocean/diagram */ "@realmocean/diagram");
/* harmony import */ var _realmocean_diagram__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_realmocean_diagram__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var _TuDashboardShapeHtmlRenderer = /** @class */ (function (_super) {
    __extends(_TuDashboardShapeHtmlRenderer, _super);
    function _TuDashboardShapeHtmlRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _TuDashboardShapeHtmlRenderer.prototype.GenerateElement = function (view, obj) {
        this.WriteStartElement('TuDashboardShape');
        return true;
    };
    _TuDashboardShapeHtmlRenderer.prototype.GenerateAttributes = function (view, obj) {
    };
    _TuDashboardShapeHtmlRenderer.prototype.GenerateBody = function (view, rectangleObject) {
        var bounds = rectangleObject.Bounds;
        var fillColor = 'transparent';
        if (rectangleObject.Brush != null) {
            var brush = (0,_tuval_core__WEBPACK_IMPORTED_MODULE_1__.as)(rectangleObject.Brush, _tuval_graphics__WEBPACK_IMPORTED_MODULE_0__.GraphicTypes.SolidBrush);
            if (brush != null) {
                fillColor = brush.Color.toString('#rrggbb');
            }
        }
        var pen = rectangleObject.Pen;
        var strokeColor = 'transparent';
        var strokeWidth = 0;
        if (rectangleObject.Pen != null) {
            strokeColor = pen.Color.toString('#rrggbb');
            strokeWidth = pen.Width;
        }
        this.WriteStartElement('div');
        var style = {};
        this.WriteStyleAttrVal('position', 'absolute');
        this.WriteStyleAttrVal('left', bounds.X + 'px');
        this.WriteStyleAttrVal('top', bounds.Y + 'px');
        this.WriteStyleAttrVal('width', bounds.Width + 'px');
        this.WriteStyleAttrVal('height', bounds.Height + 'px');
        this.WriteStyleAttrVal('padding', '20px');
        this.WriteStyleAttrVal('backgroundColor', fillColor);
        /*   style['borderColor'] = strokeColor;
          style['borderWidth'] = strokeWidth;
          style['borderStyle'] = 'solid'; */
        this.WriteStyleAttrVal('overflow', 'hidden');
        this.WriteStyleAttrVal('box-shadow', 'rgb(0 0 0 / 12%) 0px 1px 1px, rgb(0 0 0 / 12%) 0px 2px 2px, rgb(0 0 0 / 12%) 0px 4px 4px, rgb(0 0 0 / 12%) 0px 8px 8px, rgb(0 0 0 / 12%) 0px 16px 16px');
        this.WriteStyleAttrVal('border-radius', '20px');
        this.WriteStyleAttrVal('outline', 'none medium');
        //style['box-shadow'] = '0 0 6px #8dc4ff!important';
        this.WriteStyleAttrVal('border', '1px solid #3c9df7!important');
        /*  this.WriteComponent(
             <div style={{ display: 'block', textAlign: 'center' }}>
                 <i style={{ display: 'inline-block' }} class="icon-list-palette-line-chart rotate-270 placeholder-icon"></i>
                 <div style={{ fontSize: '20px', lineHeight: '20px', color: '#666', marginTop: '20px' }}>Activity Mean Chart</div>
                 <div style={{ fontSize: '14px', color: '#888' }}>You have no data yet</div>
             </div>
         ); */
        /*     this.WriteStartElement('i');
            this.WriteStyleAttrVal('display', 'inline-block');
            this.WriteAttrVal('class', 'icon-list-palette-line-chart rotate-270 placeholder-icon');
            this.WriteEndElement(); */
        if (rectangleObject.renderedNode == null) {
            this.writeDropTarget(rectangleObject);
        }
        else {
            this.WriteComponent(rectangleObject.renderedNode);
            this.writeMask(rectangleObject.Bounds);
        }
        this.WriteEndElement();
    };
    _TuDashboardShapeHtmlRenderer.prototype.writeDropTarget = function (rectangleObject) {
        this.WriteControl(rectangleObject.dropTarget);
    };
    _TuDashboardShapeHtmlRenderer.prototype.writeMask = function (bounds) {
        this.WriteStartElement('div');
        this.WriteStyleAttrVal('position', 'absolute');
        this.WriteStyleAttrVal('left', '0px');
        this.WriteStyleAttrVal('top', '0px');
        this.WriteStyleAttrVal('width', bounds.Width + 'px');
        this.WriteStyleAttrVal('height', bounds.Height + 'px');
        this.WriteStyleAttrVal('backgroundColor', 'transparent');
        this.WriteStyleAttrVal('borderColor', 'transparent');
        this.WriteStyleAttrVal('borderWidth', 0);
        this.WriteEndElement();
    };
    _TuDashboardShapeHtmlRenderer.prototype.GenerateElementFinish = function (view, obj) {
        this.WriteEndElement();
    };
    _TuDashboardShapeHtmlRenderer.prototype.DecideCache = function (view, obj) {
    };
    return _TuDashboardShapeHtmlRenderer;
}(_realmocean_diagram__WEBPACK_IMPORTED_MODULE_2__.TuHtmlRenderer));

var TuDashboardShapeHtmlRenderer = /** @class */ (function () {
    function TuDashboardShapeHtmlRenderer() {
    }
    TuDashboardShapeHtmlRenderer.Apply = function (result, rectangleObject) {
        var bounds = rectangleObject.Bounds;
        var fillColor = 'transparent';
        if (rectangleObject.Brush != null) {
            var brush = (0,_tuval_core__WEBPACK_IMPORTED_MODULE_1__.as)(rectangleObject.Brush, _tuval_graphics__WEBPACK_IMPORTED_MODULE_0__.GraphicTypes.SolidBrush);
            if (brush != null) {
                fillColor = brush.Color.toString('#rrggbb');
            }
        }
        var pen = rectangleObject.Pen;
        var strokeColor = 'transparent';
        var strokeWidth = 0;
        if (rectangleObject.Pen != null) {
            strokeColor = pen.Color.toString('#rrggbb');
            strokeWidth = pen.Width;
        }
        var style = {};
        style['position'] = 'absolute';
        style['left'] = bounds.X + 'px';
        style['top'] = bounds.Y + 'px';
        style['width'] = bounds.Width + 'px';
        style['height'] = bounds.Height + 'px';
        style['padding'] = '20px';
        style['backgroundColor'] = fillColor;
        /*   style['borderColor'] = strokeColor;
          style['borderWidth'] = strokeWidth;
          style['borderStyle'] = 'solid'; */
        style['overflow'] = 'hidden';
        style['box-shadow'] = 'rgb(0 0 0 / 12%) 0px 1px 1px, rgb(0 0 0 / 12%) 0px 2px 2px, rgb(0 0 0 / 12%) 0px 4px 4px, rgb(0 0 0 / 12%) 0px 8px 8px, rgb(0 0 0 / 12%) 0px 16px 16px';
        style['border-radius'] = '20px';
        style['outline'] = 'none medium';
        //style['box-shadow'] = '0 0 6px #8dc4ff!important';
        style['border'] = '1px solid #3c9df7!important';
        var styleMask = {};
        styleMask['position'] = 'absolute';
        styleMask['left'] = '0px';
        styleMask['top'] = '0px';
        styleMask['width'] = bounds.Width + 'px';
        styleMask['height'] = bounds.Height + 'px';
        styleMask['backgroundColor'] = 'transparent';
        styleMask['borderColor'] = 'transparent';
        styleMask['borderWidth'] = 0;
        /*   result.push(<div style={style}>
              {rectangleObject.renderedNode}
              <div style={styleMask}></div>
          </div>) */
    };
    return TuDashboardShapeHtmlRenderer;
}());



/***/ }),

/***/ "./src/UI/Dialogs/AddEditAnalyseModelName/AddEditAnalyseModelNameController.ts":
/*!*************************************************************************************!*\
  !*** ./src/UI/Dialogs/AddEditAnalyseModelName/AddEditAnalyseModelNameController.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditAnalyseModelNameDialog": () => (/* binding */ AddEditAnalyseModelNameDialog)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Views_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Views/Buttons */ "./src/UI/Views/Buttons.ts");
/* harmony import */ var _Views_RegularTextBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Views/RegularTextBox */ "./src/UI/Views/RegularTextBox.ts");
/* harmony import */ var _Views_Texts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Views/Texts */ "./src/UI/Views/Texts.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddEditAnalyseModelNameDialog = /** @class */ (function (_super) {
    __extends(AddEditAnalyseModelNameDialog, _super);
    function AddEditAnalyseModelNameDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddEditAnalyseModelNameDialog.prototype.InitComponents = function () {
        this.Text = 'New Analyse Model';
        this.Width = 600;
        this.Height = 230;
        this.openProjectDialogController = new AddEditAnalyseModelNameController();
        this.openProjectDialogController.Bind(this);
        this.Controls.Add(this.openProjectDialogController);
    };
    AddEditAnalyseModelNameDialog.prototype.OnShown = function () {
    };
    AddEditAnalyseModelNameDialog.prototype.OnOKClick = function (value) {
        this.ShowDialogAsyncResolve(value);
        this.Hide();
    };
    AddEditAnalyseModelNameDialog.prototype.OnCancel = function () {
        this.Hide();
    };
    return AddEditAnalyseModelNameDialog;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Dialog));

var AddEditAnalyseModelNameController = /** @class */ (function (_super) {
    __extends(AddEditAnalyseModelNameController, _super);
    function AddEditAnalyseModelNameController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddEditAnalyseModelNameController.prototype.OnBindModel = function (dialog) {
        this.dialog = dialog;
    };
    AddEditAnalyseModelNameController.prototype.LoadView = function () {
        var _this = this;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIScene)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 5 })(
        // Icon('\\d1fe').size(24).foregroundColor('#263238'),
        (0,_Views_Texts__WEBPACK_IMPORTED_MODULE_3__.RegularText)('New Mining Model').fontSize(20).fontFamily("'Source Sans Pro', Arial, sans-serif")).minHeight('64px').maxHeight('64px').background('#eceff1').foregroundColor('#263238').paddingLeft('10px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading, spacing: 20 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_Views_RegularTextBox__WEBPACK_IMPORTED_MODULE_2__.RegularTextBox)({ icon: '\\d1fd', value: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.$)(this.txtName), autofocus: true })).height(), //auto
        // Select Repository Button
        //SelectButton('Select Repository'),
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_Views_Buttons__WEBPACK_IMPORTED_MODULE_1__.CancelButton)('Cancel').action(function () { return _this.dialog.OnCancel(); }), (0,_Views_Buttons__WEBPACK_IMPORTED_MODULE_1__.AcceptButton)('OK').action(function () { return _this.dialog.OnOKClick(_this.txtName); }))).padding(10))));
    };
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Binding)()
    ], AddEditAnalyseModelNameController.prototype, "txtName", void 0);
    return AddEditAnalyseModelNameController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));


/***/ }),

/***/ "./src/UI/Dialogs/CreateNewProjectDialog/Controllers/CreateNewProjectController.ts":
/*!*****************************************************************************************!*\
  !*** ./src/UI/Dialogs/CreateNewProjectDialog/Controllers/CreateNewProjectController.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateNewProjectController": () => (/* binding */ CreateNewProjectController)
/* harmony export */ });
/* harmony import */ var _modules_ProcessOverview_Controllers_Overview_Bindable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../modules/ProcessOverview/Controllers/Overview/Bindable */ "./src/modules/ProcessOverview/Controllers/Overview/Bindable.ts");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Views_RegularTextBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Views/RegularTextBox */ "./src/UI/Views/RegularTextBox.ts");
/* harmony import */ var _Views_Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Views/Buttons */ "./src/UI/Views/Buttons.ts");
/* harmony import */ var _Views_Texts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Views/Texts */ "./src/UI/Views/Texts.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var CreateNewProjectController = /** @class */ (function (_super) {
    __extends(CreateNewProjectController, _super);
    function CreateNewProjectController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateNewProjectController.prototype.InitController = function () {
        this.$txtName = new _modules_ProcessOverview_Controllers_Overview_Bindable__WEBPACK_IMPORTED_MODULE_0__.Bindable('', this);
    };
    CreateNewProjectController.prototype.OnBindModel = function (dialog) {
        this.dialog = dialog;
    };
    CreateNewProjectController.prototype.LoadView = function () {
        var _this = this;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIScene)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 5 })(
        // Icon('\\d1fe').size(24).foregroundColor('#263238'),
        (0,_Views_Texts__WEBPACK_IMPORTED_MODULE_4__.RegularText)('Create new project').fontSize(20).fontFamily("'Source Sans Pro', Arial, sans-serif")).minHeight('64px').maxHeight('64px').background('#eceff1').foregroundColor('#263238').paddingLeft('10px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading, spacing: 20 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_Views_RegularTextBox__WEBPACK_IMPORTED_MODULE_2__.RegularTextBox)({ icon: '\\d277', value: this.$txtName })).height(), //auto
        // Select Repository Button
        //SelectButton('Select Repository'),
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_Views_Buttons__WEBPACK_IMPORTED_MODULE_3__.CancelButton)('Cancel').action(function () { return _this.dialog.OnCancel(); }), (0,_Views_Buttons__WEBPACK_IMPORTED_MODULE_3__.AcceptButton)('OK').action(function () { return _this.dialog.OnOKClick(_this.$txtName.get()); }))).padding(10))));
    };
    return CreateNewProjectController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIController));



/***/ }),

/***/ "./src/UI/Dialogs/CreateNewProjectDialog/CreateNewProjectDialog.ts":
/*!*************************************************************************!*\
  !*** ./src/UI/Dialogs/CreateNewProjectDialog/CreateNewProjectDialog.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateNewProjectDialog": () => (/* binding */ CreateNewProjectDialog)
/* harmony export */ });
/* harmony import */ var _Controllers_CreateNewProjectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controllers/CreateNewProjectController */ "./src/UI/Dialogs/CreateNewProjectDialog/Controllers/CreateNewProjectController.ts");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CreateNewProjectDialog = /** @class */ (function (_super) {
    __extends(CreateNewProjectDialog, _super);
    function CreateNewProjectDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.OkButtonClicked = new _tuval_core__WEBPACK_IMPORTED_MODULE_1__.Event();
        return _this;
    }
    CreateNewProjectDialog.prototype.InitComponents = function () {
        this.Text = 'Open Project';
        this.Width = 500;
        this.Height = 250;
        this.createNewProjectDialogController = new _Controllers_CreateNewProjectController__WEBPACK_IMPORTED_MODULE_0__.CreateNewProjectController();
        this.createNewProjectDialogController.Bind(this);
        this.Controls.Add(this.createNewProjectDialogController);
    };
    CreateNewProjectDialog.prototype.OnShown = function () {
        //this.createNewProjectDialogController.LoadProjects();
    };
    CreateNewProjectDialog.prototype.OnOKClick = function (value) {
        this.ShowDialogAsyncResolve(value);
        this.Hide();
    };
    CreateNewProjectDialog.prototype.OnCancel = function () {
        this.Hide();
    };
    return CreateNewProjectDialog;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Dialog));



/***/ }),

/***/ "./src/UI/Dialogs/MapColumnSettingsDialog/Controllers/MapColumnSettingsController.ts":
/*!*******************************************************************************************!*\
  !*** ./src/UI/Dialogs/MapColumnSettingsDialog/Controllers/MapColumnSettingsController.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapColumnSettingsController": () => (/* binding */ MapColumnSettingsController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Views_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Views/Buttons */ "./src/UI/Views/Buttons.ts");
/* harmony import */ var _Views_Texts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Views/Texts */ "./src/UI/Views/Texts.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var MapColumnSettingsController = /** @class */ (function (_super) {
    __extends(MapColumnSettingsController, _super);
    function MapColumnSettingsController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MapColumnSettingsController.prototype.InitController = function () {
    };
    MapColumnSettingsController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIScene)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e034').size(24).foregroundColor('#263238'), (0,_Views_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('Column Info').fontSize(20)).minHeight('44px').maxHeight('44px').background('#eceff1').foregroundColor('#263238').paddingLeft('10px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Column Name').whiteSpace('nowrap').width(100), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TextField)()).height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Title').whiteSpace('nowrap').width(100), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TextField)()).height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Column Type').whiteSpace('nowrap').width(100), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TextField)()).height()), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTrailing })((0,_Views_Buttons__WEBPACK_IMPORTED_MODULE_1__.AcceptButton)('OK'), (0,_Views_Buttons__WEBPACK_IMPORTED_MODULE_1__.CancelButton)('Cancel')).height())));
    };
    return MapColumnSettingsController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/UI/Dialogs/MapColumnSettingsDialog/MapColumnSettingDialog.ts":
/*!**************************************************************************!*\
  !*** ./src/UI/Dialogs/MapColumnSettingsDialog/MapColumnSettingDialog.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapColumnSettingsDialog": () => (/* binding */ MapColumnSettingsDialog)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controllers_MapColumnSettingsController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controllers/MapColumnSettingsController */ "./src/UI/Dialogs/MapColumnSettingsDialog/Controllers/MapColumnSettingsController.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var MapColumnSettingsDialog = /** @class */ (function (_super) {
    __extends(MapColumnSettingsDialog, _super);
    function MapColumnSettingsDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.OkButtonClicked = new _tuval_core__WEBPACK_IMPORTED_MODULE_0__.Event();
        return _this;
    }
    MapColumnSettingsDialog.prototype.InitComponents = function () {
        this.Text = '';
        this.Width = 300;
        this.Height = 300;
        this.mapColumnSettingsController = new _Controllers_MapColumnSettingsController__WEBPACK_IMPORTED_MODULE_2__.MapColumnSettingsController();
        this.mapColumnSettingsController.Bind(this);
        this.Controls.Add(this.mapColumnSettingsController);
    };
    MapColumnSettingsDialog.prototype.OnShown = function () {
        //this.uploadDataDialogController.LoadProjects();
    };
    MapColumnSettingsDialog.prototype.OnOKClick = function () {
        this.ShowDialogAsyncResolve( /* this.projectList.SelectedItem.Tag */);
        this.OkButtonClicked( /* this.projectList.SelectedItem.Text */);
        this.Hide();
    };
    return MapColumnSettingsDialog;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Dialog));



/***/ }),

/***/ "./src/UI/Dialogs/OpenProjectDialog.ts":
/*!*********************************************!*\
  !*** ./src/UI/Dialogs/OpenProjectDialog.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenProjectDialog": () => (/* binding */ OpenProjectDialog)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OpenProjectDialogController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OpenProjectDialogController */ "./src/UI/Dialogs/OpenProjectDialogController.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var OpenProjectDialog = /** @class */ (function (_super) {
    __extends(OpenProjectDialog, _super);
    function OpenProjectDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.OkButtonClicked = new _tuval_core__WEBPACK_IMPORTED_MODULE_0__.Event();
        return _this;
    }
    OpenProjectDialog.prototype.InitComponents = function () {
        this.Text = 'Open Project';
        this.Width = 1000;
        this.Height = 530;
        this.openProjectDialogController = new _OpenProjectDialogController__WEBPACK_IMPORTED_MODULE_2__.OpenProjectDialogController();
        this.openProjectDialogController.Bind(this);
        this.Controls.Add(this.openProjectDialogController);
        /*   this.projectList = new ListBox();
          this.projectList.Height = 360;
  
          this.Controls.Add(this.projectList);
  
          const btnOK = new Button();
          btnOK.Text = 'OK';
          btnOK.Color = 2;
          btnOK.Clicked = (() => {
              this.OnOKClick();
  
          }) as any;
  
          const btnCancel = new Button();
          btnCancel.Text = 'Cancel';
          btnCancel.Color = 1;
          btnCancel.Clicked = (() => {
              this.Hide();
          }) as any;
          this.FooterControls.AddRange([btnOK, btnCancel]); */
    };
    OpenProjectDialog.prototype.OnShown = function () {
        this.openProjectDialogController.LoadProjects();
    };
    OpenProjectDialog.prototype.OnOKClick = function () {
        this.ShowDialogAsyncResolve(this.projectList.SelectedItem.Tag);
        this.OkButtonClicked(this.projectList.SelectedItem.Text);
        this.Hide();
    };
    return OpenProjectDialog;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Dialog));



/***/ }),

/***/ "./src/UI/Dialogs/OpenProjectDialogController.ts":
/*!*******************************************************!*\
  !*** ./src/UI/Dialogs/OpenProjectDialogController.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectGrid": () => (/* binding */ ProjectGrid),
/* harmony export */   "OpenProjectDialogController": () => (/* binding */ OpenProjectDialogController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_Statistics_Views_CasesGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/Statistics/Views/CasesGrid */ "./src/modules/Statistics/Views/CasesGrid.ts");
/* harmony import */ var _Views_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Views/Buttons */ "./src/UI/Views/Buttons.ts");
/* harmony import */ var _Views_ListView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Views/ListView */ "./src/UI/Views/ListView.ts");
/* harmony import */ var _Views_Texts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Views/Texts */ "./src/UI/Views/Texts.ts");
/* harmony import */ var _procetra_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @procetra/common */ "./node_modules/@procetra/common/index.js");
/* harmony import */ var _procetra_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_procetra_common__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};






function detectBrowser() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        return 'Opera';
    }
    else if (navigator.userAgent.indexOf("Chrome") != -1) {
        return 'Chrome';
    }
    else if (navigator.userAgent.indexOf("Safari") != -1) {
        return 'Safari';
    }
    else if (navigator.userAgent.indexOf("Firefox") != -1) {
        return 'Firefox';
    }
    else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        return 'IE'; //crap
    }
    else {
        return 'Unknown';
    }
}
var columns = [
    {
        key: 'project_name',
        title: 'Name',
        width: 230
    },
    {
        key: 'flags',
        title: 'Flags',
        width: 80,
        builder: function (row) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.FHStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cCenter })((0,_Views_Texts__WEBPACK_IMPORTED_MODULE_4__.RegularText)(row['flags']).background('#2ca02c').fontSize(12).cornerRadius(3).textTransform('uppercase').foregroundColor('white').padding('2px 4px').fontFamily("'Source Sans Pro', Arial, sans-serif !important"));
        }
    },
    {
        key: 'owner',
        title: 'Project owner',
        width: 180
    },
    {
        key: 'stats',
        title: 'Stats',
        width: 100,
        builder: function (row) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.FVStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.FHStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 5 })((0,_Views_Texts__WEBPACK_IMPORTED_MODULE_4__.RegularText)(row['case_count']).fontFamily("'Source Sans Pro', Arial, sans-serif").foregroundColor('#cb5a25').fontSize('14px'), (0,_Views_Texts__WEBPACK_IMPORTED_MODULE_4__.RegularText)('case(s)').fontFamily("'Source Sans Pro', Arial, sans-serif").foregroundColor('#7f7f7f').fontSize('14px')), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.FHStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 5 })((0,_Views_Texts__WEBPACK_IMPORTED_MODULE_4__.RegularText)(row['event_count']).fontFamily("'Source Sans Pro', Arial, sans-serif").foregroundColor('#cb5a25').fontSize('14px'), (0,_Views_Texts__WEBPACK_IMPORTED_MODULE_4__.RegularText)('event(s)').fontFamily("'Source Sans Pro', Arial, sans-serif").foregroundColor('#7f7f7f').fontSize('14px')));
        }
    },
    {
        key: 'updated',
        title: 'Updatete at',
    },
    {
        key: 'finished',
        title: 'Tags',
    },
    {
        key: 'duration',
        title: 'Actions',
        width: 80,
        builder: function (row) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.FHStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e3c9').size(24).padding(8), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e92b').size(24).padding(8).foregroundColor('#A03B3B'));
        }
    }
];
/* const data = [
    {
        caseId: '1000-2645004',
        events: 5,
        variant: 'variant 5',
        started: '12/3/2019 16:17:43',
        finished: '01/02/2020 10:25:05',
        duration: '1 day, 18 hours'
    }
]
 */
function ProjectGrid(data, onSelectedRow) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading }).apply(void 0, __spreadArray([(0,_modules_Statistics_Views_CasesGrid__WEBPACK_IMPORTED_MODULE_1__.GridHeader)(columns)], (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(data)((function (row) {
        return (0,_modules_Statistics_Views_CasesGrid__WEBPACK_IMPORTED_MODULE_1__.GridRow)(columns, row, onSelectedRow);
    })))));
}
var OpenProjectDialogController = /** @class */ (function (_super) {
    __extends(OpenProjectDialogController, _super);
    function OpenProjectDialogController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenProjectDialogController.prototype.InitController = function () {
        //this.projects = [];
    };
    OpenProjectDialogController.prototype.LoadProjects = function () {
        var _this = this;
        var session_id = _procetra_common__WEBPACK_IMPORTED_MODULE_5__.Services.StateService.GetSessionId();
        if (session_id == null) {
            throw 'Invalid session.';
        }
        _procetra_common__WEBPACK_IMPORTED_MODULE_5__.Services.ProjectService.GetProjects(session_id).then(function (projects) {
            _this.projects = projects;
        });
    };
    OpenProjectDialogController.prototype.OnBindModel = function (model) {
        this.dialog = model;
    };
    OpenProjectDialogController.prototype.OnOK = function () {
        this.dialog.ShowDialogAsyncResolve(this.selectedProject);
        this.dialog.Hide();
    };
    OpenProjectDialogController.prototype.OnCancel = function () {
        console.log(detectBrowser());
        this.dialog.Hide();
    };
    OpenProjectDialogController.prototype.LoadView = function () {
        var _this = this;
        var _a;
        console.log('View loaded');
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIScene)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e241').size(24).foregroundColor('#263238'), (0,_Views_Texts__WEBPACK_IMPORTED_MODULE_4__.RegularText)('Project List').fontSize(20)).minHeight('64px').maxHeight('64px').background('#eceff1').foregroundColor('#263238').paddingLeft('10px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ScrollView)({ axes: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cVertical })(
        /*  Text('dfesdfdsf'),
         ...ForEach(this.projects)(item =>
             HStack(
                 ...ForEach([0, 1, 2, 3, 4, 5,6,7,8])(item_n =>
                     Text(item.project_name)
                 )
             )
         ) */
        ProjectGrid((_a = this.projects) === null || _a === void 0 ? void 0 : _a.map(function (item) {
            return {
                project_name: item.project_name,
                case_count: item.case_count,
                event_count: item.event_count,
                flags: 'Owner',
                owner: item.admin,
                updated: '09.05.2022',
                tag: item
            };
        }), function (row) { _this.selectedProject = row.tag; _this.OnOK(); })).padding(15).visible(this.projects != null), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)(
        /*  HDivider().height(20),
         UISkeleton().height(20).paddingLeft('10').paddingRight('10'),
         UISkeleton().height(20).paddingLeft('10').paddingRight('10'),
         UISkeleton().height(20).paddingLeft('10').paddingRight('10'), */
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spinner)().visible(detectBrowser() !== 'Chrome'), (0,_Views_Texts__WEBPACK_IMPORTED_MODULE_4__.RegularText)('Loading Projects...').fontSize('16px').visible(detectBrowser() === 'Chrome')).visible(this.projects == null), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cCenter : _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTrailing })((0,_Views_Buttons__WEBPACK_IMPORTED_MODULE_2__.AcceptButton)('OK').action(function () { return _this.OnOK(); }), (0,_Views_Buttons__WEBPACK_IMPORTED_MODULE_2__.CancelButton)('Cancel').action(function () { return _this.OnCancel(); })).height(50)).visible(true), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\d1fd').size(30).foregroundColor(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? '#ddd' : ''), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Select Project').font(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fonts.title).fontFamily('Ubuntu, sans-serif')
            .fontWeight(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? '600' : '400').foregroundColor(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? '#ddd' : '')).height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HDivider)().height(1).background(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? '#288ae2' : 'gray'), _Views_ListView__WEBPACK_IMPORTED_MODULE_3__.ListView.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(this.projects)(function (project) {
            return (0,_Views_ListView__WEBPACK_IMPORTED_MODULE_3__.ListViewItem)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(project.project_name).foregroundColor(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? '#bbb' : '').fontWeight('500'))
                .minHeight('50px')
                .background(_this.selectedProject === project ? 'rgb(120,120,120,50%)' : { default: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? '' : 'white', hover: 'rgb(120,120,120,10%)' })
                .onSelected(function () { _this.selectedProject = project; });
        })).width('100%').backgroundColor(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? '#2b3641' : 'white'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cCenter : _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTrailing })((0,_Views_Buttons__WEBPACK_IMPORTED_MODULE_2__.AcceptButton)('OK').action(function () { return _this.OnOK(); }), (0,_Views_Buttons__WEBPACK_IMPORTED_MODULE_2__.CancelButton)('Cancel').action(function () { return _this.OnCancel(); })).height(50)).grow().visible(false))
            .background(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? '#212932' : '')
        //.padding('10px')
        );
    };
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.State)()
    ], OpenProjectDialogController.prototype, "projects", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.State)()
    ], OpenProjectDialogController.prototype, "selectedProject", void 0);
    return OpenProjectDialogController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/UI/Dialogs/SelectFilterDialog/Controllers/SelectFilterController.ts":
/*!*********************************************************************************!*\
  !*** ./src/UI/Dialogs/SelectFilterDialog/Controllers/SelectFilterController.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectFilterController": () => (/* binding */ SelectFilterController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_ProcessOverview_Controllers_Overview_Bindable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../modules/ProcessOverview/Controllers/Overview/Bindable */ "./src/modules/ProcessOverview/Controllers/Overview/Bindable.ts");
/* harmony import */ var _Views_Buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Views/Buttons */ "./src/UI/Views/Buttons.ts");
/* harmony import */ var _Views_Texts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Views/Texts */ "./src/UI/Views/Texts.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var filtersModel = [
    {
        title: 'Attribute filter',
        description: 'Select cases based on specified attributes.',
        iconColor: 'rgb(196, 132, 243)',
        icon: '\\f07d',
        background: 'linear-gradient(rgb(187, 103, 255) 0%, rgb(196, 132, 243) 100%)'
    },
    {
        title: 'Activity filter',
        description: 'Select cases based on specified attributes.',
        iconColor: 'rgb(252, 146, 157)',
        icon: '\\f0e7',
        background: 'linear-gradient(rgb(255, 145, 157) 0%, rgb(252, 146, 157) 100%)'
    },
    {
        title: 'Timeframe filter',
        description: 'Select cases where duration between two activities is faster/slower than defined period of time.',
        iconColor: '#6EBF8B',
        icon: '\\f104',
        background: 'linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255, 202, 113) -46.42%)'
    },
    {
        title: 'Performance filter',
        description: 'Select cases where duration between two activities is faster/slower than defined period of time.',
        iconColor: '#F56D91',
        icon: '\\d36b',
        background: "linear-gradient(\n            90deg,\n            hsl(48deg 48% 72%) 0%,\n            hsl(48deg 48% 72%) 13%,\n            hsl(48deg 48% 72%) 25%,\n            hsl(48deg 48% 72%) 37%,\n            hsl(48deg 48% 72%) 50%,\n            hsl(48deg 48% 72%) 63%,\n            hsl(48deg 48% 72%) 75%,\n            hsl(48deg 48% 72%) 87%,\n            hsl(48deg 48% 72%) 100%\n          )"
    },
    {
        title: 'Rework filter',
        description: 'Select cases where duration between two activities is faster/slower than defined period of time.',
        iconColor: '#C93838',
        icon: '\\f096',
        background: ""
    },
    {
        title: 'Resource filter',
        description: 'Select cases where duration between two activities is faster/slower than defined period of time.',
        iconColor: '#F5A25D',
        icon: '\\f007',
        background: ""
    },
    {
        title: 'Variant filter',
        description: 'Select cases where duration between two activities is faster/slower than defined period of time.',
        iconColor: '#4E89AE',
        icon: '\\f145',
        background: ""
    },
    {
        title: 'Process flow filter',
        description: 'Select cases where duration between two activities is faster/slower than defined period of time.',
        iconColor: '#525E75',
        icon: '\\f0eb',
        background: ""
    },
];
var SelectFilterController = /** @class */ (function (_super) {
    __extends(SelectFilterController, _super);
    function SelectFilterController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectFilterController.prototype.InitController = function () {
        this.$txtName = new _modules_ProcessOverview_Controllers_Overview_Bindable__WEBPACK_IMPORTED_MODULE_1__.Bindable('', this);
    };
    SelectFilterController.prototype.OnBindModel = function (dialog) {
        this.dialog = dialog;
    };
    SelectFilterController.prototype.LoadView = function () {
        var _this = this;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIScene)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_Views_Texts__WEBPACK_IMPORTED_MODULE_3__.RegularText)('Select Filter').fontSize(18).fontWeight('700').marginBottom('10px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ScrollView)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(filtersModel)(function (filterInfo) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(filterInfo.icon).foregroundColor(filterInfo.iconColor).size(40) /* .filter(`drop-shadow(2px 4px 6px ${filterInfo.iconColor})`) */, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(filterInfo.title).fontSize(20).fontWeight('500').marginTop('10px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(filterInfo.description).marginTop('10px'))
                .initial({ opacity: 0 }).animate({ opacity: 1 })
                .margin(10)
                .width(350)
                .height(170)
                .cornerRadius(10)
                .shadow('rgba(0, 0, 0, 0.16) 0px 1px 4px')
                .backgroundColor('white');
        })).wrap('wrap')), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTrailing })((0,_Views_Buttons__WEBPACK_IMPORTED_MODULE_2__.AcceptButton)('OK').action(function () { return _this.dialog.OnOKClick(_this.$txtName.get()); }), (0,_Views_Buttons__WEBPACK_IMPORTED_MODULE_2__.CancelButton)('Cancel')).height() //auto
        )).padding(10).background('#f1f1f1'));
    };
    return SelectFilterController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/UI/Dialogs/SelectFilterDialog/SelectFilterDialog.ts":
/*!*****************************************************************!*\
  !*** ./src/UI/Dialogs/SelectFilterDialog/SelectFilterDialog.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectFilterDialog": () => (/* binding */ SelectFilterDialog)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controllers_SelectFilterController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controllers/SelectFilterController */ "./src/UI/Dialogs/SelectFilterDialog/Controllers/SelectFilterController.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SelectFilterDialog = /** @class */ (function (_super) {
    __extends(SelectFilterDialog, _super);
    function SelectFilterDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectFilterDialog.prototype.InitComponents = function () {
        this.Text = 'New Analyse Model';
        this.Width = 772;
        this.Height = 600;
        this.openProjectDialogController = new _Controllers_SelectFilterController__WEBPACK_IMPORTED_MODULE_1__.SelectFilterController();
        this.openProjectDialogController.Bind(this);
        this.Controls.Add(this.openProjectDialogController);
    };
    SelectFilterDialog.prototype.OnShown = function () {
    };
    SelectFilterDialog.prototype.OnOKClick = function (value) {
        this.ShowDialogAsyncResolve(value);
        this.Hide();
    };
    return SelectFilterDialog;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Dialog));



/***/ }),

/***/ "./src/UI/Dialogs/UploadDataDialog/Controllers/MapColumnsController.ts":
/*!*****************************************************************************!*\
  !*** ./src/UI/Dialogs/UploadDataDialog/Controllers/MapColumnsController.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapGridHeader": () => (/* binding */ MapGridHeader),
/* harmony export */   "MapColumnsGrid": () => (/* binding */ MapColumnsGrid),
/* harmony export */   "MapColumnsController": () => (/* binding */ MapColumnsController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_Statistics_Views_CasesGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../modules/Statistics/Views/CasesGrid */ "./src/modules/Statistics/Views/CasesGrid.ts");
/* harmony import */ var _utils_csv2json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/csv2json */ "./src/utils/csv2json.ts");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Models_MapTypesModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Models/MapTypesModel */ "./src/UI/Dialogs/UploadDataDialog/Models/MapTypesModel.ts");
/* harmony import */ var _Views_Texts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Views/Texts */ "./src/UI/Views/Texts.ts");
/* harmony import */ var _UIServices_ProjectUIService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../UIServices/ProjectUIService */ "./src/UI/UIServices/ProjectUIService.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};







var infoText = "\nTo upload data you must first map the fields (columns) of your data file.\n+ Map __required fields__ (Case ID, Timestamp and Event Name) by dragging the corresponding label to the desired column\n+ Map __optional fields__ (columns) that you want to use for filtering your cases by dragging the New Attribute label to the desired column.\n+ Once you have completed your mapping press the 'Confirm and start upload' button.\n";
function MapGridHeader(columnInfo) {
    var width = _tuval_core__WEBPACK_IMPORTED_MODULE_3__.Convert.ToInt32(100 / columnInfo.length);
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(columnInfo)(function (cInfo) {
        return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_Views_Texts__WEBPACK_IMPORTED_MODULE_5__.RegularText)(cInfo.title)
            .fontFamily("'Source Sans Pro', Arial, sans-serif")
            .fontSize('18px')
            .fontWeight('500')
            .foregroundColor('#1A1A1A')
            //.textTransform('uppercase')
            .whiteSpace('nowrap')
            .width('80%')
            .textOverflow('ellipsis')
            .padding('0 10px')
            .borderRight('2px solid transparent'), cInfo.mappedData && (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e3c9').size(20).cursor('pointer').onClick(function () { return _UIServices_ProjectUIService__WEBPACK_IMPORTED_MODULE_6__.ProjectUIService.MapColumnSettingsDialog(); }))
            .width()
            .minWidth(_tuval_core__WEBPACK_IMPORTED_MODULE_3__.is.number(cInfo.width) ? cInfo.width + "px" : width + '%');
    })).height(40).borderBottom('2px solid #e4e4e4'));
}
function MapColumnsGrid(columns, data, onSelectedRow) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })(MapGridHeader(columns), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Cache)(true, function () {
        return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(data)((function (row) {
            return (0,_modules_Statistics_Views_CasesGrid__WEBPACK_IMPORTED_MODULE_1__.GridRow)(columns, row, onSelectedRow);
        }))).useCache(true);
    })).alias('Merhaba'));
}
var MapColumnsController = /** @class */ (function (_super) {
    __extends(MapColumnsController, _super);
    function MapColumnsController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MapColumnsController.prototype.InitController = function () {
    };
    MapColumnsController.prototype.OnBindModel = function (fileInfo) {
        var headers = [];
        this.csv = fileInfo.GetFileContentAsString();
        this.csvData = _utils_csv2json__WEBPACK_IMPORTED_MODULE_2__.CvsToJson.Convert(this.csv, { parseNumbers: true });
        this.mappingFileName = fileInfo.fileName + '.' + fileInfo.fileExt;
        this.mappingName = this.mappingFileName;
        var keys = Object.keys(this.csvData[0]);
        (0,_tuval_core__WEBPACK_IMPORTED_MODULE_3__.foreach)(keys, function (key) {
            headers.push({
                key: key,
                title: key,
                width: 210,
                mappedData: null
            });
        });
        this.gridHeaders = headers;
    };
    MapColumnsController.prototype.onColumnMapped = function (column, selectedItem) {
        column.mappedData = selectedItem;
        this.gridHeaders = __spreadArray([], this.gridHeaders);
    };
    MapColumnsController.prototype.LoadView = function () {
        var _this = this;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIScene)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e2c6').size(35).foregroundColor('#33333399'), (0,_Views_Texts__WEBPACK_IMPORTED_MODULE_5__.RegularText)('Map').fontSize(24).fontWeight('500').lineHeight('1.25em').foregroundColor('#333').fontFamily("'Source Sans Pro', Arial, sans-serif"), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TextField)().fontSize('1rem')
            .backgroundColor('transparent')
            .foregroundColor('#495057')
            .padding('0.75rem 0.75rem 0.75rem 0rem')
            .value(this.mappingFileName)
            .onTextChange(function (text) { _this.mappingName = text; }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e3c9')
            .size(20)
            .paddingRight('10px')
            .paddingLeft('10px'))
            .width()
            .paddingRight('5px')
            .overflow('hidden')
            .borderBottom('1px solid #ced4da')
            //.shadow({ default: '', focus: '0 0 0 0.2rem #c7d2fe' })
            //.transition('background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s')
            //.backgroundColor('rgba(255,255,255,0.3)')
            .height()
            .tabIndex(0)).height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(infoText).render(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.RenderingTypes.Markdown).
            fontFamily("'Source Sans Pro', Arial, sans-serif")
            .fontSize('16px')
            .lineHeight('1.5'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ScrollView)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(this.gridHeaders)(function (header) {
            var _a, _b;
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.DropDown)(function (option) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(option.name); })(function (option) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(option.name); })
                .fontSize('1rem')
                .placeholder('Click to map...')
                .model(_Models_MapTypesModel__WEBPACK_IMPORTED_MODULE_4__.mapTypesModel)
                .value(header.mappedData)
                .backgroundColor((_a = header.mappedData) === null || _a === void 0 ? void 0 : _a.color)
                .foregroundColor((_b = header.mappedData) === null || _b === void 0 ? void 0 : _b.foreColor)
                .onSelected(function (item) { return _this.onColumnMapped(header, item); })).width().minWidth('200px').border('2px dashed #e0e0e0').height(42).minHeight('18px').marginTop('8px').marginBottom('10px');
        })), 
        /*     DataTable()
              .columns(
                 ...ForEach(this.gridHeaders)(item =>
                     Column()
                     .body(
                         Text(item.title)
                     )
                     .field(item.key)
                     .header(item.title)
                     .width(`${item.width}px`) as any
                 )

             ).value(this.csvData.slice(0, 1000)) */
        MapColumnsGrid(this.gridHeaders, this.csvData.slice(0, 5000), function () { })))));
    };
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.State)()
    ], MapColumnsController.prototype, "gridHeaders", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.State)()
    ], MapColumnsController.prototype, "selectedItem", void 0);
    return MapColumnsController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/UI/Dialogs/UploadDataDialog/Controllers/SelectFileController.ts":
/*!*****************************************************************************!*\
  !*** ./src/UI/Dialogs/UploadDataDialog/Controllers/SelectFileController.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileSelected": () => (/* binding */ FileSelected),
/* harmony export */   "SelectFileController": () => (/* binding */ SelectFileController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Views_Texts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Views/Texts */ "./src/UI/Views/Texts.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var FileSelected = /** @class */ (function (_super) {
    __extends(FileSelected, _super);
    function FileSelected() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FileSelected;
}(_tuval_core__WEBPACK_IMPORTED_MODULE_1__.Delegate));

var SelectFileController = /** @class */ (function (_super) {
    __extends(SelectFileController, _super);
    function SelectFileController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectFileController.prototype.InitController = function () {
        this.OnFileSelected = new _tuval_core__WEBPACK_IMPORTED_MODULE_1__.Event();
    };
    SelectFileController.prototype.LoadView = function () {
        var _this = this;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIScene)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTop })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e2c6').size(35).foregroundColor('#33333399'), (0,_Views_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('Select File').fontSize(24).fontWeight('500').lineHeight('1.25em').foregroundColor('#333').fontFamily("'Source Sans Pro', Arial, sans-serif")).height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIFileUpload)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Drop file here').fontSize('24px').foregroundColor('#333').fontFamily("'Source Sans Pro', Arial, sans-serif"))
            .cursor('copy')
            .backgroundColor({ hover: '#f5f5f5' })
            .border('2px dashed #2baab5'), (0,_Views_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('Browse Files').foregroundColor('#2baab5').fontSize('18px').fontWeight('bold').lineHeight('20px').cursor('pointer').padding(10).fontFamily("'Source Sans Pro', Arial, sans-serif")))
            .marginTop('10px')
            .width(400).height(200).onFileReady(function (e) { _this.OnFileSelected(e); /*  console.log(CvsToJson.Convert(e.GetFileContentAsString(), { parseNumbers: true })) */ }))));
    };
    return SelectFileController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/UI/Dialogs/UploadDataDialog/Controllers/UploadDataDialogController.ts":
/*!***********************************************************************************!*\
  !*** ./src/UI/Dialogs/UploadDataDialog/Controllers/UploadDataDialogController.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadDataDialogController": () => (/* binding */ UploadDataDialogController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Views_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Views/Buttons */ "./src/UI/Views/Buttons.ts");
/* harmony import */ var _Views_Texts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Views/Texts */ "./src/UI/Views/Texts.ts");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Views_Steps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Views/Steps */ "./src/UI/Dialogs/UploadDataDialog/Views/Steps.ts");
/* harmony import */ var _SelectFileController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectFileController */ "./src/UI/Dialogs/UploadDataDialog/Controllers/SelectFileController.ts");
/* harmony import */ var _MapColumnsController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MapColumnsController */ "./src/UI/Dialogs/UploadDataDialog/Controllers/MapColumnsController.ts");
/* harmony import */ var _procetra_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @procetra/common */ "./node_modules/@procetra/common/index.js");
/* harmony import */ var _procetra_common__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_procetra_common__WEBPACK_IMPORTED_MODULE_7__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UploadDataDialogController = /** @class */ (function (_super) {
    __extends(UploadDataDialogController, _super);
    function UploadDataDialogController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mapping = { mapping: {} };
        return _this;
    }
    UploadDataDialogController.prototype.OnPrepareColumnMapping = function () {
        var _this = this;
        this.mapping.mapping.case_id = [];
        this.mapping.mapping.event_id = [];
        this.mapping.mapping.resource_id = [];
        this.mapping.mapping.cost_id = [];
        this.mapping.mapping.case_attributes = [];
        this.mapping.mapping.event_attributes = [];
        (0,_tuval_core__WEBPACK_IMPORTED_MODULE_3__.foreach)(this.mapColumnsController.gridHeaders, function (header) {
            if (header.mappedData != null) {
                if (header.mappedData.name === 'Case ID') {
                    _this.mapping.mapping.case_id.push({
                        title: header.key,
                        index: 0
                    });
                }
                else if (header.mappedData.name === 'Activity') {
                    _this.mapping.mapping.event_id.push({
                        title: header.key,
                        index: 0
                    });
                }
                else if (header.mappedData.name === 'Start Timestamp') {
                    _this.mapping.mapping.start_timestamp = {
                        title: header.key,
                        index: 0,
                        dateFormat: {
                            type: "date",
                            format: "YYYY-M-D H:m:s.SSSS",
                            timeZone: false
                        }
                    };
                }
                else if (header.mappedData.name === 'End Timestamp') {
                    _this.mapping.mapping.end_timestamp = {
                        title: header.key,
                        index: 0,
                        dateFormat: {
                            type: "date",
                            format: "YYYY-M-D H:m:s.SSSS",
                            timeZone: false
                        }
                    };
                }
                else if (header.mappedData.name === 'Other Timestamp') {
                    _this.mapping.mapping.other_timestamp = {
                        title: header.key,
                        index: 0,
                        dateFormat: {
                            type: "date",
                            format: "YYYY-M-D H:m:s.SSSS",
                            timeZone: false
                        }
                    };
                }
                else if (header.mappedData.name === 'Resource') {
                    _this.mapping.mapping.resource_id.push({
                        title: header.key,
                        alias: header.key,
                        index: 0
                    });
                }
                else if (header.mappedData.name === 'Cost') {
                    _this.mapping.mapping.cost_id.push({
                        title: header.key,
                        alias: header.key,
                        index: 0
                    });
                }
                else if (header.mappedData.name === 'Case Attribute') {
                    _this.mapping.mapping.case_attributes.push({
                        title: header.key,
                        alias: header.key,
                        index: 0
                    });
                }
                else if (header.mappedData.name === 'Event Attribute') {
                    _this.mapping.mapping.event_attributes.push({
                        title: header.key,
                        alias: header.key,
                        index: 0
                    });
                }
            }
        });
        console.log(this.mapping);
        var session_id = _procetra_common__WEBPACK_IMPORTED_MODULE_7__.Services.StateService.GetSessionId();
        _procetra_common__WEBPACK_IMPORTED_MODULE_7__.Services.ProjectService.CreateMapping(this.project.project_id, this.mapColumnsController.mappingName, this.mapColumnsController.mappingFileName, JSON.stringify(this.mapping.mapping));
        _procetra_common__WEBPACK_IMPORTED_MODULE_7__.MiningBrokerClient.ImportCsvFile(this.project.project_id, this.fileData.GetFileContentAsString(), this.mapping.mapping.case_id.map(function (item) { return item.title; }).join(';'), this.mapping.mapping.event_id.map(function (item) { return item.title; }).join(';'), this.mapping.mapping.start_timestamp.title, this.mapping.mapping.end_timestamp.title, '', '').then(function () {
            _procetra_common__WEBPACK_IMPORTED_MODULE_7__.MiningBrokerClient.LoadEventData(_this.project.project_id).then(function () {
                _procetra_common__WEBPACK_IMPORTED_MODULE_7__.MiningBrokerClient.GetHappyPath(_this.project.project_id).then(function (info) {
                    console.log(info);
                });
            });
        });
    };
    UploadDataDialogController.prototype.InitController = function () {
        var _this = this;
        this.selectedIndex = 0;
        this.selectFileController = new _SelectFileController__WEBPACK_IMPORTED_MODULE_5__.SelectFileController();
        this.selectFileController.OnFileSelected.add(function (e) {
            _this.fileData = e;
            _this.mapColumnsController = new _MapColumnsController__WEBPACK_IMPORTED_MODULE_6__.MapColumnsController();
            _this.mapColumnsController.Bind(e);
            _this.currentController = _this.mapColumnsController;
            _this.selectedIndex = 1;
        });
        this.currentController = this.selectFileController;
    };
    UploadDataDialogController.prototype.OnBindModel = function (project) {
        this.project = project;
    };
    UploadDataDialogController.prototype.LoadView = function () {
        var _this = this;
        console.log('test');
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIScene)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e241').size(24).foregroundColor('#263238'), (0,_Views_Texts__WEBPACK_IMPORTED_MODULE_2__.RegularText)('Upload data').fontSize(20)).minHeight('64px').maxHeight('64px').background('#eceff1').foregroundColor('#263238').paddingLeft('10px'), (0,_Views_Steps__WEBPACK_IMPORTED_MODULE_4__.Steps)(['Select File', 'Map Columns', 'Upload File', 'Data Analysis'], this.selectedIndex), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTop })(this.currentController), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTrailing })((0,_Views_Buttons__WEBPACK_IMPORTED_MODULE_1__.AcceptButton)('OK').action(function () { return _this.OnPrepareColumnMapping(); }), (0,_Views_Buttons__WEBPACK_IMPORTED_MODULE_1__.CancelButton)('Cancel').action(function () { return _this.selectedIndex = 2; })).height())));
    };
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.State)()
    ], UploadDataDialogController.prototype, "selectedIndex", void 0);
    __decorate([
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.State)()
    ], UploadDataDialogController.prototype, "currentController", void 0);
    return UploadDataDialogController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/UI/Dialogs/UploadDataDialog/Models/MapTypesModel.ts":
/*!*****************************************************************!*\
  !*** ./src/UI/Dialogs/UploadDataDialog/Models/MapTypesModel.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapTypesModel": () => (/* binding */ mapTypesModel)
/* harmony export */ });
var mapTypesModel = [
    {
        name: 'Case ID',
        color: '#CB5A25',
        foreColor: 'white'
    },
    {
        name: 'Activity',
        color: '#CB5A25',
        foreColor: 'white'
    },
    {
        name: 'Start Timestamp',
        color: '#2CA02C',
        foreColor: 'white'
    },
    {
        name: 'End Timestamp',
        color: '#2CA02C',
        foreColor: 'white'
    },
    {
        name: 'Other Timestamp',
        color: '#2CA02C',
        foreColor: 'white'
    },
    {
        name: 'Resource',
        color: '#9467BD',
        foreColor: 'white'
    },
    {
        name: 'Cost',
        color: '#9467BD',
        foreColor: 'white'
    },
    {
        name: 'Event Attribute',
        color: '#9467BD',
        foreColor: 'white'
    },
    {
        name: 'Case Attribute',
        color: '#9467BD',
        foreColor: 'white'
    },
    {
        name: 'Ignore Column',
        color: '#9467BD',
        foreColor: 'white'
    }
];


/***/ }),

/***/ "./src/UI/Dialogs/UploadDataDialog/UploadDataDialog.ts":
/*!*************************************************************!*\
  !*** ./src/UI/Dialogs/UploadDataDialog/UploadDataDialog.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadDataDialog": () => (/* binding */ UploadDataDialog)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controllers_UploadDataDialogController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controllers/UploadDataDialogController */ "./src/UI/Dialogs/UploadDataDialog/Controllers/UploadDataDialogController.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var UploadDataDialog = /** @class */ (function (_super) {
    __extends(UploadDataDialog, _super);
    function UploadDataDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.OkButtonClicked = new _tuval_core__WEBPACK_IMPORTED_MODULE_0__.Event();
        return _this;
    }
    UploadDataDialog.prototype.InitComponents = function () {
        this.Text = 'Open Project';
        this.Width = 1200;
        this.Height = 930;
    };
    UploadDataDialog.prototype.SetProject = function (project) {
        this.uploadDataDialogController = new _Controllers_UploadDataDialogController__WEBPACK_IMPORTED_MODULE_2__.UploadDataDialogController();
        this.uploadDataDialogController.Bind(project);
        this.Controls.Add(this.uploadDataDialogController);
    };
    UploadDataDialog.prototype.OnShown = function () {
        //this.uploadDataDialogController.LoadProjects();
    };
    UploadDataDialog.prototype.OnCancel = function () {
        this.Hide();
    };
    UploadDataDialog.prototype.OnOKClick = function () {
        this.ShowDialogAsyncResolve( /* this.projectList.SelectedItem.Tag */);
        this.OkButtonClicked( /* this.projectList.SelectedItem.Text */);
        this.Hide();
    };
    return UploadDataDialog;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Dialog));



/***/ }),

/***/ "./src/UI/Dialogs/UploadDataDialog/Views/Steps.ts":
/*!********************************************************!*\
  !*** ./src/UI/Dialogs/UploadDataDialog/Views/Steps.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Steps": () => (/* binding */ Steps)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

var factor = 0.7;
function Steps(items, selectedIndex) {
    return function (_a) {
        var theme = _a.theme;
        return (_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(items)(function (item, index) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.If)(index === 0)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 10 })(
            // Eğer bu adımı geçtiysek ok icon gözüksün
            selectedIndex > index ?
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e5ca').size(20))
                    .width()
                    .height()
                    .backgroundColor(selectedIndex >= index ? theme.palette['primary'].light : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.lighten)(theme.palette['primary'].light, factor))
                    .cornerRadius(30).minWidth('30px').minHeight('30px')
                    .lineHeight('30px').fontSize('16px').transition('background-color 1000ms ease-in-out')
                    .foregroundColor('#fff')
                :
                    (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)((index + 1).toString()).backgroundColor(selectedIndex >= index ? theme.palette['primary'].light : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.lighten)(theme.palette['primary'].light, factor))
                        .cornerRadius(30).minWidth('30px').minHeight('30px')
                        .lineHeight('30px').fontSize('16px').transition('background-color 1000ms ease-in-out')
                        .foregroundColor('#fff'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.RoundedRectangle)().height(2).backgroundColor(selectedIndex > index ? theme.palette['primary'].light : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.lighten)(theme.palette['primary'].light, factor)).transition('background-color 1000ms ease-in-out')), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(item).foregroundColor(selectedIndex >= index ? '#2baab5' : '#7f7f7f').whiteSpace('nowrap').marginTop('5px')).width('50%')).else((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.If)(index === items.length - 1)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTrailing })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.RoundedRectangle)().height(2).backgroundColor(selectedIndex === items.length - 1 ? theme.palette['primary'].light : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.lighten)(theme.palette['primary'].light, factor)).transition('background-color 1000ms ease-in-out'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)((index + 1).toString()).backgroundColor(index === selectedIndex ? theme.palette['primary'].light : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.lighten)(theme.palette['primary'].light, factor))
                .cornerRadius(30).minWidth('30px').minHeight('30px')
                .lineHeight('30px').fontSize('16px')
                .foregroundColor('#fff')), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(item).foregroundColor(selectedIndex === items.length - 1 ? '#2baab5' : '#E0E0E0').whiteSpace('nowrap').marginTop('5px')).width('50%')).else((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTop })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.RoundedRectangle)().height(2).backgroundColor((selectedIndex === index || selectedIndex > index) ? theme.palette['primary'].light : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.lighten)(theme.palette['primary'].light, factor)).transition('background-color 1000ms ease-in-out'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)((index + 1).toString()).backgroundColor(selectedIndex >= index ? theme.palette['primary'].light : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.lighten)(theme.palette['primary'].light, factor))
                .cornerRadius(30).minWidth('30px').minHeight('30px')
                .lineHeight('30px').fontSize('16px').transition('background-color 1000ms ease-in-out')
                .foregroundColor('#fff'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.RoundedRectangle)().height(2).backgroundColor(selectedIndex > index ? theme.palette['primary'].light : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.lighten)(theme.palette['primary'].light, factor)).transition('background-color 1000ms ease-in-out')), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(item).foregroundColor((selectedIndex === index || selectedIndex > index) ? '#2baab5' : '#E0E0E0').whiteSpace('nowrap').marginTop('5px'))));
        })).padding(10).height());
    };
}


/***/ }),

/***/ "./src/UI/UIServices/AnalyseModelUIService.ts":
/*!****************************************************!*\
  !*** ./src/UI/UIServices/AnalyseModelUIService.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyseModelUIService": () => (/* binding */ AnalyseModelUIService)
/* harmony export */ });
/* harmony import */ var _Dialogs_AddEditAnalyseModelName_AddEditAnalyseModelNameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Dialogs/AddEditAnalyseModelName/AddEditAnalyseModelNameController */ "./src/UI/Dialogs/AddEditAnalyseModelName/AddEditAnalyseModelNameController.ts");

var AnalyseModelUIService = /** @class */ (function () {
    function AnalyseModelUIService() {
    }
    AnalyseModelUIService.AddEditAnalyseModelName = function () {
        return new Promise(function (resolve, reject) {
            var npd = new _Dialogs_AddEditAnalyseModelName_AddEditAnalyseModelNameController__WEBPACK_IMPORTED_MODULE_0__.AddEditAnalyseModelNameDialog();
            npd.ShowDialogAsync().then(function (name) {
                resolve(name);
            });
        });
    };
    return AnalyseModelUIService;
}());



/***/ }),

/***/ "./src/UI/UIServices/FiltersUIService.ts":
/*!***********************************************!*\
  !*** ./src/UI/UIServices/FiltersUIService.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterUIService": () => (/* binding */ FilterUIService)
/* harmony export */ });
/* harmony import */ var _Dialogs_SelectFilterDialog_SelectFilterDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Dialogs/SelectFilterDialog/SelectFilterDialog */ "./src/UI/Dialogs/SelectFilterDialog/SelectFilterDialog.ts");

var FilterUIService = /** @class */ (function () {
    function FilterUIService() {
    }
    FilterUIService.SelectFilter = function () {
        return new Promise(function (resolve, reject) {
            var npd = new _Dialogs_SelectFilterDialog_SelectFilterDialog__WEBPACK_IMPORTED_MODULE_0__.SelectFilterDialog();
            npd.ShowDialogAsync().then(function (name) {
                resolve(name);
            });
        });
    };
    return FilterUIService;
}());



/***/ }),

/***/ "./src/UI/UIServices/ProjectUIService.ts":
/*!***********************************************!*\
  !*** ./src/UI/UIServices/ProjectUIService.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectUIService": () => (/* binding */ ProjectUIService)
/* harmony export */ });
/* harmony import */ var _Dialogs_CreateNewProjectDialog_CreateNewProjectDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Dialogs/CreateNewProjectDialog/CreateNewProjectDialog */ "./src/UI/Dialogs/CreateNewProjectDialog/CreateNewProjectDialog.ts");
/* harmony import */ var _Dialogs_OpenProjectDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Dialogs/OpenProjectDialog */ "./src/UI/Dialogs/OpenProjectDialog.ts");
/* harmony import */ var _Dialogs_UploadDataDialog_UploadDataDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Dialogs/UploadDataDialog/UploadDataDialog */ "./src/UI/Dialogs/UploadDataDialog/UploadDataDialog.ts");
/* harmony import */ var _Dialogs_MapColumnSettingsDialog_MapColumnSettingDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Dialogs/MapColumnSettingsDialog/MapColumnSettingDialog */ "./src/UI/Dialogs/MapColumnSettingsDialog/MapColumnSettingDialog.ts");




var ProjectUIService = /** @class */ (function () {
    function ProjectUIService() {
    }
    ProjectUIService.NewProject = function () {
        return new Promise(function (resolve, reject) {
            var npd = new _Dialogs_CreateNewProjectDialog_CreateNewProjectDialog__WEBPACK_IMPORTED_MODULE_0__.CreateNewProjectDialog();
            npd.ShowDialogAsync().then(function (projectInfo) {
                //alert(JSON.stringify(projectInfo));
                resolve(projectInfo);
            });
        });
    };
    ProjectUIService.OpenProjectDialog = function () {
        return new Promise(function (resolve, reject) {
            var npd = new _Dialogs_OpenProjectDialog__WEBPACK_IMPORTED_MODULE_1__.OpenProjectDialog();
            npd.ShowDialogAsync().then(function (project) {
                resolve(project);
            });
        });
    };
    ProjectUIService.UploadDataDialog = function (project) {
        return new Promise(function (resolve, reject) {
            var npd = new _Dialogs_UploadDataDialog_UploadDataDialog__WEBPACK_IMPORTED_MODULE_2__.UploadDataDialog();
            npd.SetProject(project);
            npd.ShowDialogAsync().then(function (project) {
                resolve(project);
            });
        });
    };
    ProjectUIService.MapColumnSettingsDialog = function () {
        return new Promise(function (resolve, reject) {
            var npd = new _Dialogs_MapColumnSettingsDialog_MapColumnSettingDialog__WEBPACK_IMPORTED_MODULE_3__.MapColumnSettingsDialog();
            npd.ShowDialogAsync().then(function (project) {
                resolve(project);
            });
        });
    };
    return ProjectUIService;
}());



/***/ }),

/***/ "./src/UI/Views/Buttons.ts":
/*!*********************************!*\
  !*** ./src/UI/Views/Buttons.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectButton": () => (/* binding */ SelectButton),
/* harmony export */   "AcceptButton": () => (/* binding */ AcceptButton),
/* harmony export */   "CancelButton": () => (/* binding */ CancelButton),
/* harmony export */   "DefaultButton": () => (/* binding */ DefaultButton)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

function SelectButton(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontSize(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? '16px' : ''))
        .height('34px')
        .padding('15px 15px')
        .cornerRadius(3)
        .lineHeight('24px')
        .minHeight('24px')
        .shadow({ default: '0 2px 5px 0 rgb(0 0 0 / 26%)', active: '0 4px 8px 0 rgb(0 0 0 / 40%)' })
        .foregroundColor('rgba(255,255,255,0.87)')
        .backgroundColor({ default: 'rgb(43,170,181)', hover: 'rgb(127,217,225)' }));
}
function AcceptButton(value, disabled) {
    if (disabled === void 0) { disabled = false; }
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontSize(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? '16px' : ''))
        .disabled(disabled)
        .foregroundColor(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? '#eee' : 'white')
        .border({
        default: 'solid 1px #1687D9',
        hover: 'solid 1px #07c',
        active: 'solid 1px #07c',
        disabled: 'solid 1px #e0e0e0'
    })
        .backgroundImage({
        default: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsDesktop ? ' linear-gradient(#32AAFF, #1994EB)' : '',
        hover: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsDesktop ? 'linear-gradient(#25A4FF, #028AEB)' : '',
        disabled: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsDesktop ? 'linear-gradient(#e0e0e0, #e0e0e0)' : '',
        active: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsDesktop ? 'linear-gradient(#1897F2, #0182DF)' : ''
    })
        .backgroundColor({
        default: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? '#288ae2' : '#1994EB',
        hover: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? '#1a70bd' : '#028AEB',
        disabled: '#e0e0e0',
        active: '#0182DF'
    })
        .cursor({ disabled: 'not-allowed' })
        .height('27px')
        .minWidth(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? '140px' : '90px')
        .minHeight(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? '33px' : '')
        .margin('8px 10px 8px 0px')
        .cornerRadius('3px'));
}
function CancelButton(value) {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(value).fontSize(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? '16px' : ''))
        .foregroundColor(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? '#ddd' : '#505A64')
        .border({
        default: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? '1px solid #55606c' : 'solid 1px #C8D2DC',
        hover: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? '1px solid #55606c' : 'solid 1px #B4BEC8',
        active: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? '1px solid #55606c' : 'solid 1px #B4BEC8'
    })
        .backgroundImage({
        default: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TApplication.IsPortal ? '' : 'linear-gradient(#f5faff, #ebf0f5)',
    })
    })
}
}
