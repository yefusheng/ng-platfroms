import { NgModule } from '@angular/core';
import { exeUploadFileComponent } from "./fileUpload/exeUploadFile.component";
import { ComponentsFactoryService } from "./ComponentsFactory.service";
import { ExePlatformService } from "../ExePlatform.service";
import { exeUploadFilePcComponent } from "./fileUpload/pc/UploadFilePc.component";
import { exeUploadFileWechatComponent } from "./fileUpload/wechat/UploadFileWechat.component";
import { exeUploadFileNativeComponent } from "./fileUpload/native/UploadFileNative.component";
export function componentsFactory(exePlatformService) {
    return new ComponentsFactoryService(exePlatformService);
}
var ExePlatformConponentModule = (function () {
    function ExePlatformConponentModule() {
    }
    return ExePlatformConponentModule;
}());
export { ExePlatformConponentModule };
ExePlatformConponentModule.decorators = [
    { type: NgModule, args: [{
                exports: [exeUploadFileComponent],
                declarations: [exeUploadFileComponent, exeUploadFilePcComponent, exeUploadFileWechatComponent, exeUploadFileNativeComponent],
                entryComponents: [exeUploadFileComponent, exeUploadFilePcComponent, exeUploadFileWechatComponent, exeUploadFileNativeComponent],
                providers: [
                    {
                        provide: ComponentsFactoryService, useFactory: componentsFactory,
                        deps: [ExePlatformService]
                    }
                ]
            },] },
];
/** @nocollapse */
ExePlatformConponentModule.ctorParameters = function () { return []; };
//# sourceMappingURL=ExePlatformConponentModule.js.map