import { Injectable } from '@angular/core';
import { compoentItem } from "./compoentItem";
import { ExePlatformService } from "../ExePlatform.service";
import { exeUploadFileWechatComponent } from "./fileUpload/wechat/UploadFileWechat.component";
import { exeUploadFileNativeComponent } from "./fileUpload/native/UploadFileNative.component";
import { exeUploadFilePcComponent } from "./fileUpload/pc/UploadFilePc.component";
import { log } from "../util/util";
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
            new compoentItem(exeUploadFileNativeComponent, { name: 'exeUploadFileNativeComponent' }),
            new compoentItem(exeUploadFilePcComponent, { name: 'exeUploadFilePcComponent' }),
            new compoentItem(exeUploadFileWechatComponent, { name: 'exeUploadFileWechatComponent' }),
        ];
        log("platform--" + this.platformService.getPlatformCode());
        return uploadCompoents[this.platformService.getPlatformCode()].component;
    };
    return ComponentsFactoryService;
}());
export { ComponentsFactoryService };
ComponentsFactoryService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ComponentsFactoryService.ctorParameters = function () { return [
    { type: ExePlatformService, },
]; };
//# sourceMappingURL=ComponentsFactory.service.js.map