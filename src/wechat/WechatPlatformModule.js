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
WechatPlatformModule = __decorate([
    core_1.NgModule({
        providers: [
            WechatPlatform_1.WechatPlatform,
            exports.WechatPlatformProvides
        ]
    })
], WechatPlatformModule);
exports.WechatPlatformModule = WechatPlatformModule;
