import { Injectable } from "@angular/core";
var LoggerPcService = (function () {
    function LoggerPcService() {
    }
    LoggerPcService.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.log(message, optionalParams);
    };
    LoggerPcService.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.error(message, optionalParams);
    };
    return LoggerPcService;
}());
export { LoggerPcService };
LoggerPcService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LoggerPcService.ctorParameters = function () { return []; };
