"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Storage_service_1 = require("../service/Storage.service");
var StorageWeChat_1 = require("./service/storage/StorageWeChat");
var TransFileWechat_service_1 = require("./service/transfer/TransFileWechat.service");
var LoggerWindows_service_1 = require("./service/logger/LoggerWindows.service");
var Logger_service_1 = require("../service/Logger.service");
var TransFile_service_1 = require("../service/TransFile.service");
var WechatPlatform_1 = require("./WechatPlatform");
exports.WechatPlatformProvides = [
    { provide: Storage_service_1.StorageService, useClass: StorageWeChat_1.StorageWeChat },
    { provide: TransFile_service_1.TransFileService, useClass: TransFileWechat_service_1.TransFileWechat },
    { provide: Logger_service_1.LoggerService, useClass: LoggerWindows_service_1.LoggerPcService }
];
var WechatPlatformModule = (function () {
    function WechatPlatformModule() {
    }
    return WechatPlatformModule;
}());
WechatPlatformModule.decorators = [
    { type: core_1.NgModule, args: [{
                providers: [
                    WechatPlatform_1.WechatPlatform,
                    exports.WechatPlatformProvides
                ]
            },] },
];
/** @nocollapse */
WechatPlatformModule.ctorParameters = function () { return []; };
exports.WechatPlatformModule = WechatPlatformModule;
