"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var exeUploadFile_component_1 = require("./fileUpload/exeUploadFile.component");
var ComponentsFactory_service_1 = require("./ComponentsFactory.service");
var ExePlatform_service_1 = require("../ExePlatform.service");
var UploadFilePc_component_1 = require("./fileUpload/pc/UploadFilePc.component");
var UploadFileWechat_component_1 = require("./fileUpload/wechat/UploadFileWechat.component");
var UploadFileNative_component_1 = require("./fileUpload/native/UploadFileNative.component");
var ExePlatformConponentModule = (function () {
    function ExePlatformConponentModule() {
    }
    return ExePlatformConponentModule;
}());
ExePlatformConponentModule = __decorate([
    core_1.NgModule({
        exports: [exeUploadFile_component_1.exeUploadFileComponent],
        declarations: [exeUploadFile_component_1.exeUploadFileComponent, UploadFilePc_component_1.exeUploadFilePcComponent, UploadFileWechat_component_1.exeUploadFileWechatComponent, UploadFileNative_component_1.exeUploadFileNativeComponent],
        entryComponents: [exeUploadFile_component_1.exeUploadFileComponent, UploadFilePc_component_1.exeUploadFilePcComponent, UploadFileWechat_component_1.exeUploadFileWechatComponent, UploadFileNative_component_1.exeUploadFileNativeComponent],
        providers: [
            {
                provide: ComponentsFactory_service_1.ComponentsFactoryService, useFactory: function (ExePlatformService) {
                    return new ComponentsFactory_service_1.ComponentsFactoryService(ExePlatformService);
                }, deps: [ExePlatform_service_1.ExePlatformService]
            }
        ]
    })
], ExePlatformConponentModule);
exports.ExePlatformConponentModule = ExePlatformConponentModule;
