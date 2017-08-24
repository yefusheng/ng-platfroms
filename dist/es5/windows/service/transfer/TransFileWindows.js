"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_uploader_class_1 = require("./file-upload/file-uploader.class");
var core_1 = require("@angular/core");
var Auth_service_1 = require("../../../Auth.service");
var util_1 = require("../../../util/util");
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
            this.uploader = new file_uploader_class_1.FileUploader(this.fileUploaderOptions);
        }
        this.uploader.setOptions(this.fileUploaderOptions);
        util_1.log("initFileUploader token", this.authService.getToken());
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
TransFilePc.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
TransFilePc.ctorParameters = function () { return [
    { type: Auth_service_1.AuthService, },
]; };
exports.TransFilePc = TransFilePc;
