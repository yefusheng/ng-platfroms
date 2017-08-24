"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WechatPlatform_1 = require("../../WechatPlatform");
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
StorageWeChat.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
StorageWeChat.ctorParameters = function () { return [
    { type: WechatPlatform_1.WechatPlatform, },
]; };
exports.StorageWeChat = StorageWeChat;
