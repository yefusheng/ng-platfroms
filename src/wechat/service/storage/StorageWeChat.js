"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
StorageWeChat = __decorate([
    core_1.Injectable()
], StorageWeChat);
exports.StorageWeChat = StorageWeChat;
