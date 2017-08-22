import { Transfer } from "@ionic-native/transfer";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { log } from "../../../util/util";
/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */
var TransFileNative = (function () {
    function TransFileNative() {
        this.fileTransfer = new Transfer().create();
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
        var observable = Observable.fromPromise(this.fileTransfer.upload(path, url, options)).map(function (result) {
            var exeFileUploadResult = null;
            exeFileUploadResult.response = result.response;
            log("exeFileUploadResult" + result);
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
export { TransFileNative };
TransFileNative.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TransFileNative.ctorParameters = function () { return []; };
//# sourceMappingURL=TransFileNative.service.js.map