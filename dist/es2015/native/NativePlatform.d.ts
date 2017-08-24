import { BasePlatform } from "../BasePlatform";
import { Platform } from "ionic-angular";
/**
 * Created by yefs on 2017/7/11.
 *
 * 原生平台
 */
export declare class NativePlatform extends BasePlatform {
    private platform;
    constructor(platform: Platform);
    protected initPlatform(): void;
    getPlatformContext(): any;
    getPlatformName(): any;
    getPlatformCode(): any;
}
