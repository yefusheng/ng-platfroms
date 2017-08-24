import { BasePlatform } from "./BasePlatform";
/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */
export declare class PlatformStragety implements BasePlatform {
    _userAgent: string;
    platform: BasePlatform;
    constructor();
    protected initPlatform(): void;
    getPlatformContext(): any;
    getPlatformName(): string;
    getStragety(): any;
    getPlatformCode(): any;
    isNative(): boolean;
    isWindow(): boolean;
    isWechat(): boolean;
    isPlatform(platformName: string): boolean;
}
