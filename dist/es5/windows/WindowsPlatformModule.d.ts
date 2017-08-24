import { StorageService } from "../service/Storage.service";
import { StorageWindows } from "./service/storage/StorageWindows";
import { TransFilePc } from "./service/transfer/TransFileWindows";
import { LoggerPcService } from "../wechat/service/logger/LoggerWindows.service";
import { LoggerService } from "../service/Logger.service";
import { TransFileService } from "../service/TransFile.service";
export declare let windowsPlatformProvides: ({
    provide: typeof StorageService;
    useClass: typeof StorageWindows;
} | {
    provide: typeof TransFileService;
    useClass: typeof TransFilePc;
} | {
    provide: typeof LoggerService;
    useClass: typeof LoggerPcService;
})[];
export declare class WindowsPlatformModule {
}
