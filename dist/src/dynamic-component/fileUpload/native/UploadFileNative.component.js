import { Component, Input } from '@angular/core';
import { ActionSheetController, Platform } from "ionic-angular";
import { NativeService } from "../../../native/service/transfer/NativeService";
import { TransFileService } from "../../../service/TransFile.service";
var exeUploadFileNativeComponent = (function () {
    function exeUploadFileNativeComponent(_platform, nativeService, actionsheetCtrl, fileService) {
        this._platform = _platform;
        this.nativeService = nativeService;
        this.actionsheetCtrl = actionsheetCtrl;
        this.fileService = fileService;
        this.imageUrl = "";
        //是否启用头像上传功能
        this.enableUpload = true;
    }
    exeUploadFileNativeComponent.prototype.ngOnChanges = function (changes) {
    };
    exeUploadFileNativeComponent.prototype.ngOnInit = function () {
    };
    exeUploadFileNativeComponent.prototype.onSelect = function ($event) {
        this.openMenu();
    };
    exeUploadFileNativeComponent.prototype.openMenu = function () {
        var _this = this;
        if (!this.enableUpload)
            return;
        this.actionsheetCtrl.create({
            title: '选择照片',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: '拍照',
                    icon: !this._platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.getPicture(1);
                    }
                },
                {
                    text: '相册',
                    icon: !this._platform.is('ios') ? 'albums' : null,
                    handler: function () {
                        _this.getPicture(0);
                    }
                }
            ]
        }).present();
    };
    exeUploadFileNativeComponent.prototype.getPicture = function (type) {
        var _this = this;
        var options = {
            targetWidth: 400,
            targetHeight: 400
        };
        if (type == 1) {
            this.nativeService
                .getPictureByCamera(options)
                .then(function (imageBase64) {
                _this.getPictureSuccess(imageBase64);
            });
        }
        else {
            this.nativeService
                .getPictureByPhotoLibrary(options)
                .then(function (imageBase64) {
                _this.getPictureSuccess(imageBase64);
            });
        }
    };
    exeUploadFileNativeComponent.prototype.getPictureSuccess = function (imageBase64) {
        this.imageBase64 = imageBase64;
        this.avatarPath = 'data:image/jpeg;base64,' + imageBase64;
        this.saveAvatar();
    };
    exeUploadFileNativeComponent.prototype.saveAvatar = function () {
        this.fileService
            .upload(this.avatarPath, "")
            .then(function (exeFileUploadResult) {
            var response;
            var data;
            response = JSON.parse(exeFileUploadResult.response);
            if (response.code != 200) {
                alert("error1" + exeFileUploadResult.response);
                return;
            }
            if (!('data' in response)) {
                alert("error3" + response);
                return;
            }
            data = response.data;
        }, function (err) {
            // error
            alert("error" + err.code + "--" + err.body);
        });
    };
    return exeUploadFileNativeComponent;
}());
export { exeUploadFileNativeComponent };
exeUploadFileNativeComponent.decorators = [
    { type: Component, args: [{
                selector: 'exe-upload-file-native',
                templateUrl: 'UploadFileNative.html',
            },] },
];
/** @nocollapse */
exeUploadFileNativeComponent.ctorParameters = function () { return [
    { type: Platform, },
    { type: NativeService, },
    { type: ActionSheetController, },
    { type: TransFileService, },
]; };
exeUploadFileNativeComponent.propDecorators = {
    'avatarSrc': [{ type: Input },],
    'hasRound': [{ type: Input },],
    'serverUrl': [{ type: Input },],
    'imageUrl': [{ type: Input },],
};
//# sourceMappingURL=UploadFileNative.component.js.map