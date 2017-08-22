import { Injectable } from "@angular/core";
import { WechatPlatform } from "../../WechatPlatform";
/**
 * Created by yefs on 2017/7/11.
 *  wechat存储
 *
 */
var StorageWeChat = (function () {
    function StorageWeChat(wechatPlatform) {
        this.wechatPlatform = wechatPlatform;
    }
    StorageWeChat.prototype.saveObject = function (key, value) {
        try {
            this.wechatPlatform.getPlatformContext().setStorageSync(key, value);
        }
        catch (e) {
        }
    };
    StorageWeChat.prototype.getObject = function (key, defaule) {
        try {
            this.wechatPlatform.getPlatformContext().getStorageSync(key, defaule);
        }
        catch (e) {
        }
    };
    return StorageWeChat;
}());
export { StorageWeChat };
StorageWeChat.decorators = [
    { type: Injectable },
];
/** @nocollapse */
StorageWeChat.ctorParameters = function () { return [
    { type: WechatPlatform, },
]; };
//# sourceMappingURL=StorageWeChat.js.map