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
 *  文件传输
 *
 */
var TransFileWechat = (function () {
    function TransFileWechat(wechatPlatform) {
        this.wechatPlatform = wechatPlatform;
    }
    TransFileWechat.prototype.upload = function (fileUrl, url, options) {
        return new Promise(function (resolve, reject) {
            this.wechatPlatform.getPlatformContext().uploadImage({
                localId: fileUrl,
                isShowProcess: 1,
                success: function (res) {
                    resolve(res);
                },
                fail: function (res) {
                    reject(res);
                }
            });
        });
    };
    TransFileWechat.prototype.chooseFile = function (options) {
        return new Promise(function (resolve, reject) {
            this.wechatPlatform.getPlatformContext().chooseImage({
                count: 1,
                // sizeType: sizeType,      // 可以指定是原图还是压缩图，默认二者都有
                // sourceType: sourceType, // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    resolve(res);
                },
                fail: function (res) {
                    reject(res);
                }
            });
        });
    };
    TransFileWechat.prototype.download = function (source, target, options) {
        throw new Error("Method not implemented.");
    };
    return TransFileWechat;
}());
TransFileWechat = __decorate([
    core_1.Injectable()
], TransFileWechat);
exports.TransFileWechat = TransFileWechat;
