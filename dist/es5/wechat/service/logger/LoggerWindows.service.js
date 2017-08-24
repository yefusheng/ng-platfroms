"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
LoggerPcService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
LoggerPcService.ctorParameters = function () { return []; };
exports.LoggerPcService = LoggerPcService;
