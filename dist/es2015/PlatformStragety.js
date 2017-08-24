import { Injectable } from "@angular/core";
import { WindowsPlatformModule } from "./windows/WindowsPlatformModule";
import { NativePlatformModule } from "./native/NativePlatformModule";
import { WechatPlatformModule } from "./wechat/WechatPlatformModule";
import { Platform } from "ionic-angular";
import { Platforms } from "./ExePlatform.service";
import { WindowsPlatform } from "./windows/WindowsPlatform";
import { WechatPlatform } from "./wechat/WechatPlatform";
import { NativePlatform } from "./native/NativePlatform";
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
            case Platforms.windows:
                this.platform = new WindowsPlatform();
                break;
            case Platforms.wechat:
                this.platform = new WechatPlatform();
                break;
            case Platforms.mobile:
                this.platform = new NativePlatform(new Platform());
                break;
            default:
                this.platform = new NativePlatform(new Platform());
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
            return WechatPlatformModule;
        }
        else if (this.isNative()) {
            return NativePlatformModule;
        }
        else if (this.isWindow()) {
            return WindowsPlatformModule;
        }
        return WindowsPlatformModule;
    };
    PlatformStragety.prototype.getPlatformCode = function () {
        this._userAgent = navigator.userAgent.toLowerCase();
        if (this.isWechat()) {
            return Platforms.wechat;
        }
        else if (this.isNative()) {
            return Platforms.mobile;
        }
        else if (this.isWindow()) {
            return Platforms.windows;
        }
        return Platforms.windows;
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
export { PlatformStragety };
PlatformStragety.decorators = [
    { type: Injectable },
];
/** @nocollapse */
PlatformStragety.ctorParameters = function () { return []; };
