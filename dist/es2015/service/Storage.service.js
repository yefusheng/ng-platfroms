import { Injectable } from "@angular/core";
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
export { StorageService };
StorageService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
StorageService.ctorParameters = function () { return [
    null,
]; };
