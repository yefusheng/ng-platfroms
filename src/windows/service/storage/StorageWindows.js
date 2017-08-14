"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
StorageWindows = __decorate([
    core_1.Injectable()
], StorageWindows);
exports.StorageWindows = StorageWindows;
