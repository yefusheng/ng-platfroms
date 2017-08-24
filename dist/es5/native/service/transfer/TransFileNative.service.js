"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transfer_1 = require("@ionic-native/transfer");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var util_1 = require("../../../util/util");
/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */
var TransFileNative = (function () {
    function TransFileNative() {
        this.fileTransfer = new transfer_1.Transfer().create();
    }
    /**
     * app上传图片
     */
    TransFileNative.prototype.uploadPicture = function (path, url) {
        return this.upload(path, url);
    };
    TransFileNative.prototype.upload = function (path, url) {
        var options = {
            fileKey: 'file',
            fileName: path.substr(path.lastIndexOf('/') + 1)
        };
        var observable = rxjs_1.Observable.fromPromise(this.fileTransfer.upload(path, url, options)).map(function (result) {
            var exeFileUploadResult = null;
            exeFileUploadResult.response = result.response;
            util_1.log("exeFileUploadResult" + result);
            return exeFileUploadResult;
        });
        return observable.toPromise();
    };
    TransFileNative.prototype.chooseFile = function (options) {
        throw new Error("Method not implemented.");
    };
    TransFileNative.prototype.download = function (source, target, options) {
        throw new Error("Method not implemented.");
    };
    return TransFileNative;
}());
TransFileNative.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
TransFileNative.ctorParameters = function () { return []; };
exports.TransFileNative = TransFileNative;
