"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LoggerNativeService = (function () {
    function LoggerNativeService() {
    }
    LoggerNativeService.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.log(message, optionalParams);
    };
    LoggerNativeService.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
    };
    return LoggerNativeService;
}());
LoggerNativeService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
LoggerNativeService.ctorParameters = function () { return []; };
exports.LoggerNativeService = LoggerNativeService;
