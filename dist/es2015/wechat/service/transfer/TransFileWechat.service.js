import { Injectable } from "@angular/core";
import { WechatPlatform } from "../../WechatPlatform";
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
export { TransFileWechat };
TransFileWechat.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TransFileWechat.ctorParameters = function () { return [
    { type: WechatPlatform, },
]; };
