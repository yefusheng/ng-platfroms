"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var file_upload_module_1 = require("./service/transfer/file-upload/file-upload.module");
var Storage_service_1 = require("../service/Storage.service");
var StorageWindows_1 = require("./service/storage/StorageWindows");
var TransFileWindows_1 = require("./service/transfer/TransFileWindows");
var LoggerWindows_service_1 = require("../wechat/service/logger/LoggerWindows.service");
var Logger_service_1 = require("../service/Logger.service");
var TransFile_service_1 = require("../service/TransFile.service");
exports.windowsPlatformProvides = [
    { provide: Storage_service_1.StorageService, useClass: StorageWindows_1.StorageWindows },
    { provide: TransFile_service_1.TransFileService, useClass: TransFileWindows_1.TransFilePc },
    { provide: Logger_service_1.LoggerService, useClass: LoggerWindows_service_1.LoggerPcService }
];
var WindowsPlatformModule = (function () {
    function WindowsPlatformModule() {
    }
    return WindowsPlatformModule;
}());
WindowsPlatformModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    file_upload_module_1.FileUploadModule
                ],
                exports: [file_upload_module_1.FileUploadModule],
                providers: [
                    exports.windowsPlatformProvides
                ]
            },] },
];
/** @nocollapse */
WindowsPlatformModule.ctorParameters = function () { return []; };
exports.WindowsPlatformModule = WindowsPlatformModule;
