import { FileUploader } from "./file-upload/file-uploader.class";
import { Injectable } from "@angular/core";
import { AuthService } from "../../../Auth.service";
import { log } from "../../../util/util";
/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */
var TransFilePc = (function () {
    function TransFilePc(authService) {
        this.authService = authService;
        this.headersList = new Array();
    }
    TransFilePc.prototype.upload = function (fileUrl, serveUrl, options) {
        var _this = this;
        this.fileUploaderOptions = {
            url: serveUrl,
            authTokenHeader: this.authService.getToken(),
            autoUpload: true
        };
        // let header: Headers = {
        //   name: "token",
        //   value: this.authService.getToken()
        // };
        // this.headersList.push(header);
        // this.fileUploaderOptions.headers = this.headersList;
        if (!this.uploader) {
            this.uploader = new FileUploader(this.fileUploaderOptions);
        }
        this.uploader.setOptions(this.fileUploaderOptions);
        log("initFileUploader token", this.authService.getToken());
        var file = fileUrl;
        return new Promise(function (resolve, reject) {
            _this.uploader.onSuccessItem = function (item, response, status, headers) {
                if (!response) {
                    return;
                }
                resolve({ response: response ? response : "" });
            };
            _this.uploader.onErrorItem = function (item, response, status, headers) {
                if (!response) {
                    return;
                }
                reject({ response: response ? response : "" });
            };
            _this.uploader.addToQueue(file, _this.fileUploaderOptions);
            _this.uploader.uploadAll();
        });
    };
    TransFilePc.prototype.chooseFile = function (options) {
        throw new Error("Method not implemented.");
    };
    TransFilePc.prototype.download = function (source, target, options) {
        throw new Error("Method not implemented.");
    };
    return TransFilePc;
}());
export { TransFilePc };
TransFilePc.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TransFilePc.ctorParameters = function () { return [
    { type: AuthService, },
]; };
//# sourceMappingURL=TransFileWindows.js.map