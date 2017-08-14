"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
WindowsPlatformModule = __decorate([
    core_1.NgModule({
        imports: [
            file_upload_module_1.FileUploadModule
        ],
        exports: [file_upload_module_1.FileUploadModule],
        providers: [
            exports.windowsPlatformProvides
        ]
    })
], WindowsPlatformModule);
exports.WindowsPlatformModule = WindowsPlatformModule;
