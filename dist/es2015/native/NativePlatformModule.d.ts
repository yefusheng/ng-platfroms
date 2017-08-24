import { StorageService } from "../service/Storage.service";
import { StorageNative } from "./service/storage/StorageNative.service";
import { LoggerNativeService } from "./service/logger/LoggerNative.service";
import { TransFileNative } from "./service/transfer/TransFileNative.service";
import { TransFileService } from "../service/TransFile.service";
import { LoggerService } from "../service/Logger.service";
export declare let NativePlatformProvides: ({
    provide: typeof StorageService;
    useClass: typeof StorageNative;
} | {
    provide: typeof TransFileService;
    useClass: typeof TransFileNative;
} | {
    provide: typeof LoggerService;
    useClass: typeof LoggerNativeService;
})[];
export declare class NativePlatformModule {
}
