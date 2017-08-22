import { Injectable } from "@angular/core";
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
export { LoggerNativeService };
LoggerNativeService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LoggerNativeService.ctorParameters = function () { return []; };
//# sourceMappingURL=LoggerNative.service.js.map