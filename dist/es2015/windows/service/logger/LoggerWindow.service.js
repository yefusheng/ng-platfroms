import { Injectable } from "@angular/core";
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
export { LoggerWindowService };
LoggerWindowService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LoggerWindowService.ctorParameters = function () { return []; };
