"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
__decorate([
    core_1.Input()
], exeUploadFileWechatComponent.prototype, "avatarSrc", void 0);
__decorate([
    core_1.Input()
], exeUploadFileWechatComponent.prototype, "hasRound", void 0);
__decorate([
    core_1.Input()
], exeUploadFileWechatComponent.prototype, "serverUrl", void 0);
__decorate([
    core_1.Input()
], exeUploadFileWechatComponent.prototype, "imageUrl", void 0);
exeUploadFileWechatComponent = __decorate([
    core_1.Component({
        selector: 'exe-upload-file-native',
        templateUrl: 'UploadFileWechat.html',
    })
], exeUploadFileWechatComponent);
exports.exeUploadFileWechatComponent = exeUploadFileWechatComponent;
