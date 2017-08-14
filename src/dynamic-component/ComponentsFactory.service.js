"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var compoentItem_1 = require("./compoentItem");
var UploadFileWechat_component_1 = require("./fileUpload/wechat/UploadFileWechat.component");
var UploadFileNative_component_1 = require("./fileUpload/native/UploadFileNative.component");
var UploadFilePc_component_1 = require("./fileUpload/pc/UploadFilePc.component");
var util_1 = require("../util/util");
/**
 * 动态组件提供商
 * @author yefs
 */
var ComponentsFactoryService = (function () {
    function ComponentsFactoryService(platformService) {
        this.platformService = platformService;
    }
    ComponentsFactoryService.prototype.getUploadComponent = function () {
        var uploadCompoents = [
            new compoentItem_1.compoentItem(UploadFileNative_component_1.exeUploadFileNativeComponent, { name: 'exeUploadFileNativeComponent' }),
            new compoentItem_1.compoentItem(UploadFilePc_component_1.exeUploadFilePcComponent, { name: 'exeUploadFilePcComponent' }),
            new compoentItem_1.compoentItem(UploadFileWechat_component_1.exeUploadFileWechatComponent, { name: 'exeUploadFileWechatComponent' }),
        ];
        util_1.log("platform--" + this.platformService.getPlatformCode());
        return uploadCompoents[this.platformService.getPlatformCode()].component;
    };
    return ComponentsFactoryService;
}());
ComponentsFactoryService = __decorate([
    core_1.Injectable()
], ComponentsFactoryService);
exports.ComponentsFactoryService = ComponentsFactoryService;
