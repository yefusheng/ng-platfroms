"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LoggerService = (function () {
    function LoggerService(enable, logger) {
        this.enable = enable;
        this.logger = logger;
    }
    LoggerService.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (!this.enable) {
            return;
        }
        this.logger.log(message, optionalParams);
    };
    LoggerService.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.logger.error(message, optionalParams);
    };
    return LoggerService;
}());
LoggerService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
LoggerService.ctorParameters = function () { return [
    null,
    null,
]; };
exports.LoggerService = LoggerService;
