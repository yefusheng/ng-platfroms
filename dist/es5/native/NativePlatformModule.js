"use strict";
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
NativePlatformModule.decorators = [
    { type: core_1.NgModule, args: [{
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
            },] },
];
/** @nocollapse */
NativePlatformModule.ctorParameters = function () { return []; };
exports.NativePlatformModule = NativePlatformModule;
