var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Injectable } from "@angular/core";
import { BasePlatform } from "./BasePlatform";
import { PlatformStragety } from "./PlatformStragety";
/**
 * Created by yefs on 2017/7/12.
 * 常量
 *    * | Platform Name   | Description                        |
 * |-----------------|------------------------------------|
 * | android         | on a device running Android.       |
 * | cordova         | on a device running Cordova.       |
 * | core            | on a desktop device.               |
 * | ios             | on a device running iOS.           |
 * | ipad            | on an iPad device.                 |
 * | iphone          | on an iPhone device.               |
 * | mobile          | on a mobile device.                |
 * | mobileweb       | in a browser on a mobile device.   |
 * | phablet         | on a phablet device.               |
 * | tablet          | on a tablet device.                |
 * | windows         | on a device running Windows.       |
 *
 * 跨平台管理
 */
export var windows = "windows";
export var mobile = "mobile";
export var wechat = "wechat";
export var Platforms;
(function (Platforms) {
    Platforms[Platforms["mobile"] = 0] = "mobile";
    Platforms[Platforms["windows"] = 1] = "windows";
    Platforms[Platforms["wechat"] = 2] = "wechat";
})(Platforms || (Platforms = {}));
;
var ExePlatformService = (function (_super) {
    __extends(ExePlatformService, _super);
    function ExePlatformService() {
        var _this = _super.call(this) || this;
        _this.platform = new PlatformStragety();
        return _this;
    }
    ExePlatformService.prototype.initPlatform = function () {
    };
    ExePlatformService.prototype.getPlatformCode = function () {
        return this.platform.getPlatformCode();
    };
    ExePlatformService.prototype.getPlatformContext = function () {
        return this.platform.getPlatformContext();
    };
    ExePlatformService.prototype.getPlatformName = function () {
        return this.platform.getPlatformName();
    };
    return ExePlatformService;
}(BasePlatform));
export { ExePlatformService };
ExePlatformService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ExePlatformService.ctorParameters = function () { return []; };
