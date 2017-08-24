import { BasePlatform } from "../BasePlatform";
/**
 * Created by yefs on 2017/7/11.
 *
 * pc平台上下文
 */
export declare class WindowsPlatform extends BasePlatform {
    window: any;
    protected initPlatform(): void;
    getPlatformContext(): any;
    getPlatformName(): any;
    getPlatformCode(): any;
}
