"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var util_1 = require("../../../util/util");
/**
 * Created by yefs on 2017/7/11.
 *  pc存储
 *
 */
var StorageWindows = (function () {
    function StorageWindows() {
    }
    StorageWindows.prototype.saveObject = function (key, value) {
        window.sessionStorage.setItem(key, util_1.stringify(value));
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
StorageWindows.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
StorageWindows.ctorParameters = function () { return []; };
exports.StorageWindows = StorageWindows;
