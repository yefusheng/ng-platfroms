import { StorageService } from "../service/Storage.service";
import { StorageWeChat } from "./service/storage/StorageWeChat";
import { TransFileWechat } from "./service/transfer/TransFileWechat.service";
import { LoggerPcService } from "./service/logger/LoggerWindows.service";
import { LoggerService } from "../service/Logger.service";
import { TransFileService } from "../service/TransFile.service";
export declare let WechatPlatformProvides: ({
    provide: typeof StorageService;
    useClass: typeof StorageWeChat;
} | {
    provide: typeof TransFileService;
    useClass: typeof TransFileWechat;
} | {
    provide: typeof LoggerService;
    useClass: typeof LoggerPcService;
})[];
export declare class WechatPlatformModule {
}
