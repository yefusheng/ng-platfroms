import { Injectable } from "@angular/core";
import { stringify } from "../../../util/util";
/**
 * Created by yefs on 2017/7/11.
 *  原生存储
 *
 */
var StorageNative = (function () {
    function StorageNative() {
    }
    StorageNative.prototype.saveObject = function (key, value) {
        localStorage.setItem(key, stringify(value));
    };
    StorageNative.prototype.getObject = function (key, defaule) {
        var value = localStorage.getItem(key);
        if (value) {
            value = JSON.parse(value);
        }
        else {
            value = defaule;
        }
        return value;
    };
    return StorageNative;
}());
export { StorageNative };
StorageNative.decorators = [
    { type: Injectable },
];
/** @nocollapse */
StorageNative.ctorParameters = function () { return []; };
