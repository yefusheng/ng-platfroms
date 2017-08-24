"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LoggerWindowService = (function () {
    function LoggerWindowService() {
    }
    LoggerWindowService.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.log(message, optionalParams);
    };
    LoggerWindowService.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.error(message, optionalParams);
    };
    return LoggerWindowService;
}());
LoggerWindowService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
LoggerWindowService.ctorParameters = function () { return []; };
exports.LoggerWindowService = LoggerWindowService;
