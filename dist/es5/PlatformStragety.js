"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WindowsPlatformModule_1 = require("./windows/WindowsPlatformModule");
var NativePlatformModule_1 = require("./native/NativePlatformModule");
var WechatPlatformModule_1 = require("./wechat/WechatPlatformModule");
var ionic_angular_1 = require("ionic-angular");
var ExePlatform_service_1 = require("./ExePlatform.service");
var WindowsPlatform_1 = require("./windows/WindowsPlatform");
var WechatPlatform_1 = require("./wechat/WechatPlatform");
var NativePlatform_1 = require("./native/NativePlatform");
/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */
var PlatformStragety = (function () {
    function PlatformStragety() {
        this.initPlatform();
    }
    PlatformStragety.prototype.initPlatform = function () {
        switch (this.getPlatformCode()) {
            case ExePlatform_service_1.Platforms.windows:
                this.platform = new WindowsPlatform_1.WindowsPlatform();
                break;
            case ExePlatform_service_1.Platforms.wechat:
                this.platform = new WechatPlatform_1.WechatPlatform();
                break;
            case ExePlatform_service_1.Platforms.mobile:
                this.platform = new NativePlatform_1.NativePlatform(new ionic_angular_1.Platform());
                break;
            default:
                this.platform = new NativePlatform_1.NativePlatform(new ionic_angular_1.Platform());
                break;
        }
    };
    PlatformStragety.prototype.getPlatformContext = function () {
        return this.platform.getPlatformContext();
    };
    PlatformStragety.prototype.getPlatformName = function () {
        return this.platform.getPlatformName();
    };
    PlatformStragety.prototype.getStragety = function () {
        this._userAgent = navigator.userAgent.toLowerCase();
        if (this.isWechat()) {
            return WechatPlatformModule_1.WechatPlatformModule;
        }
        else if (this.isNative()) {
            return NativePlatformModule_1.NativePlatformModule;
        }
        else if (this.isWindow()) {
            return WindowsPlatformModule_1.WindowsPlatformModule;
        }
        return WindowsPlatformModule_1.WindowsPlatformModule;
    };
    PlatformStragety.prototype.getPlatformCode = function () {
        this._userAgent = navigator.userAgent.toLowerCase();
        if (this.isWechat()) {
            return ExePlatform_service_1.Platforms.wechat;
        }
        else if (this.isNative()) {
            return ExePlatform_service_1.Platforms.mobile;
        }
        else if (this.isWindow()) {
            return ExePlatform_service_1.Platforms.windows;
        }
        return ExePlatform_service_1.Platforms.windows;
        ;
    };
    PlatformStragety.prototype.isNative = function () {
        var Agents = ["android", "iphone",
            "ipad", "ipod"];
        for (var v = 0; v < Agents.length; v++) {
            if (this.isPlatform(Agents[v])) {
                return true;
            }
        }
        return false;
    };
    PlatformStragety.prototype.isWindow = function () {
        return this.isPlatform("windows");
    };
    PlatformStragety.prototype.isWechat = function () {
        return this.isPlatform("micromessenger");
    };
    PlatformStragety.prototype.isPlatform = function (platformName) {
        // return this.plt.is(platformName);
        return this._userAgent.indexOf(platformName) > -1 ? true : false;
    };
    return PlatformStragety;
}());
PlatformStragety.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
PlatformStragety.ctorParameters = function () { return []; };
exports.PlatformStragety = PlatformStragety;
