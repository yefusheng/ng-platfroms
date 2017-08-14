"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Storage_service_1 = require("../service/Storage.service");
var StorageNative_service_1 = require("./service/storage/StorageNative.service");
var LoggerNative_service_1 = require("./service/logger/LoggerNative.service");
var TransFileNative_service_1 = require("./service/transfer/TransFileNative.service");
var TransFile_service_1 = require("../service/TransFile.service");
var Logger_service_1 = require("../service/Logger.service");
var file_opener_1 = require("@ionic-native/file-opener");
var transfer_1 = require("@ionic-native/transfer");
var in_app_browser_1 = require("@ionic-native/in-app-browser");
var image_picker_1 = require("@ionic-native/image-picker");
var network_1 = require("@ionic-native/network");
var call_number_1 = require("@ionic-native/call-number");
var NativeService_1 = require("./service/transfer/NativeService");
var app_version_1 = require("@ionic-native/app-version");
var camera_1 = require("@ionic-native/camera");
exports.NativePlatformProvides = [
    { provide: Storage_service_1.StorageService, useClass: StorageNative_service_1.StorageNative },
    { provide: TransFile_service_1.TransFileService, useClass: TransFileNative_service_1.TransFileNative },
    { provide: Logger_service_1.LoggerService, useClass: LoggerNative_service_1.LoggerNativeService }
];
var NativePlatformModule = (function () {
    function NativePlatformModule() {
    }
    return NativePlatformModule;
}());
NativePlatformModule = __decorate([
    core_1.NgModule({
        providers: [
            exports.NativePlatformProvides,
            TransFileNative_service_1.TransFileNative,
            app_version_1.AppVersion,
            file_opener_1.FileOpener,
            transfer_1.Transfer,
            in_app_browser_1.InAppBrowser,
            image_picker_1.ImagePicker,
            network_1.Network,
            call_number_1.CallNumber,
            NativeService_1.NativeService,
            camera_1.Camera,
        ]
    })
], NativePlatformModule);
exports.NativePlatformModule = NativePlatformModule;
