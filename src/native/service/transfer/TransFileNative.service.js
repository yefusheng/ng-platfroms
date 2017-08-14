"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
TransFileNative = __decorate([
    core_1.Injectable()
], TransFileNative);
exports.TransFileNative = TransFileNative;
