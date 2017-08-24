"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StorageService = (function () {
    function StorageService(storage) {
        this.storage = storage;
    }
    StorageService.prototype.saveObject = function (key, value) {
        this.storage.saveObject(key, value);
    };
    StorageService.prototype.getObject = function (key, defaule) {
        return this.storage.getObject(key, defaule);
    };
    return StorageService;
}());
StorageService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
StorageService.ctorParameters = function () { return [
    null,
]; };
exports.StorageService = StorageService;
