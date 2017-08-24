"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var util_1 = require("../../../util/util");
/**
 * Created by yefs on 2017/7/11.
 *  原生存储
 *
 */
var StorageNative = (function () {
    function StorageNative() {
    }
    StorageNative.prototype.saveObject = function (key, value) {
        localStorage.setItem(key, util_1.stringify(value));
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
StorageNative.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
StorageNative.ctorParameters = function () { return []; };
exports.StorageNative = StorageNative;
