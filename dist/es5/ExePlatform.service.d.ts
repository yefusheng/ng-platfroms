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
export declare const windows = "windows";
export declare const mobile = "mobile";
export declare const wechat = "wechat";
export declare enum Platforms {
    mobile = 0,
    windows = 1,
    wechat = 2,
}
export declare class ExePlatformService extends BasePlatform {
    platform: PlatformStragety;
    constructor();
    protected initPlatform(): void;
    getPlatformCode(): number;
    getPlatformContext(): any;
    getPlatformName(): string;
}
