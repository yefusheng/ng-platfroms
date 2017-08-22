import { Component, Input } from '@angular/core';
import { Platform } from "ionic-angular";
import { TransFileService } from "../../../service/TransFile.service";
var exeUploadFileWechatComponent = (function () {
    function exeUploadFileWechatComponent(_platform, transFileService) {
        this._platform = _platform;
        this.transFileService = transFileService;
        this.imageUrl = "";
        //是否启用头像上传功能
        this.enableUpload = true;
    }
    exeUploadFileWechatComponent.prototype.ngOnChanges = function (changes) {
    };
    exeUploadFileWechatComponent.prototype.ngOnInit = function () {
    };
    exeUploadFileWechatComponent.prototype.onSelect = function ($event) {
        this.openMenu();
    };
    exeUploadFileWechatComponent.prototype.openMenu = function () {
        this.transFileService.chooseFile().then(function (result) {
        }).catch(function (err) {
            // error
            alert("error" + err.code + "--" + err.body);
        });
    };
    exeUploadFileWechatComponent.prototype.getPicture = function (type) {
    };
    exeUploadFileWechatComponent.prototype.getPictureSuccess = function (imageBase64) {
        this.imageBase64 = imageBase64;
        this.avatarPath = 'data:image/jpeg;base64,' + imageBase64;
        this.saveAvatar();
    };
    exeUploadFileWechatComponent.prototype.saveAvatar = function () {
    };
    return exeUploadFileWechatComponent;
}());
export { exeUploadFileWechatComponent };
exeUploadFileWechatComponent.decorators = [
    { type: Component, args: [{
                selector: 'exe-upload-file-native',
                templateUrl: 'UploadFileWechat.html',
            },] },
];
/** @nocollapse */
exeUploadFileWechatComponent.ctorParameters = function () { return [
    { type: Platform, },
    { type: TransFileService, },
]; };
exeUploadFileWechatComponent.propDecorators = {
    'avatarSrc': [{ type: Input },],
    'hasRound': [{ type: Input },],
    'serverUrl': [{ type: Input },],
    'imageUrl': [{ type: Input },],
};
//# sourceMappingURL=UploadFileWechat.component.js.map