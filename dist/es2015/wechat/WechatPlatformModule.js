import { NgModule } from '@angular/core';
import { StorageService } from "../service/Storage.service";
import { StorageWeChat } from "./service/storage/StorageWeChat";
import { TransFileWechat } from "./service/transfer/TransFileWechat.service";
import { LoggerPcService } from "./service/logger/LoggerWindows.service";
import { LoggerService } from "../service/Logger.service";
import { TransFileService } from "../service/TransFile.service";
import { WechatPlatform } from "./WechatPlatform";
export var WechatPlatformProvides = [
    { provide: StorageService, useClass: StorageWeChat },
    { provide: TransFileService, useClass: TransFileWechat },
    { provide: LoggerService, useClass: LoggerPcService }
];
var WechatPlatformModule = (function () {
    function WechatPlatformModule() {
    }
    return WechatPlatformModule;
}());
export { WechatPlatformModule };
WechatPlatformModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    WechatPlatform,
                    WechatPlatformProvides
                ]
            },] },
];
/** @nocollapse */
WechatPlatformModule.ctorParameters = function () { return []; };
