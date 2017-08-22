import { Injectable } from "@angular/core";
import { stringify } from "../../../util/util";
/**
 * Created by yefs on 2017/7/11.
 *  pc存储
 *
 */
var StorageWindows = (function () {
    function StorageWindows() {
    }
    StorageWindows.prototype.saveObject = function (key, value) {
        window.sessionStorage.setItem(key, stringify(value));
    };
    StorageWindows.prototype.getObject = function (key, defaule) {
        var value = window.sessionStorage.getItem(key);
        if (value) {
            value = JSON.parse(value);
        }
        else {
            value = defaule;
        }
        return value;
    };
    return StorageWindows;
}());
export { StorageWindows };
StorageWindows.decorators = [
    { type: Injectable },
];
/** @nocollapse */
StorageWindows.ctorParameters = function () { return []; };
//# sourceMappingURL=StorageWindows.js.map