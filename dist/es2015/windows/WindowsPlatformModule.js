import { NgModule } from '@angular/core';
import { FileUploadModule } from "./service/transfer/file-upload/file-upload.module";
import { StorageService } from "../service/Storage.service";
import { StorageWindows } from "./service/storage/StorageWindows";
import { TransFilePc } from "./service/transfer/TransFileWindows";
import { LoggerPcService } from "../wechat/service/logger/LoggerWindows.service";
import { LoggerService } from "../service/Logger.service";
import { TransFileService } from "../service/TransFile.service";
export var windowsPlatformProvides = [
    { provide: StorageService, useClass: StorageWindows },
    { provide: TransFileService, useClass: TransFilePc },
    { provide: LoggerService, useClass: LoggerPcService }
];
var WindowsPlatformModule = (function () {
    function WindowsPlatformModule() {
    }
    return WindowsPlatformModule;
}());
export { WindowsPlatformModule };
WindowsPlatformModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FileUploadModule
                ],
                exports: [FileUploadModule],
                providers: [
                    windowsPlatformProvides
                ]
            },] },
];
/** @nocollapse */
WindowsPlatformModule.ctorParameters = function () { return []; };
