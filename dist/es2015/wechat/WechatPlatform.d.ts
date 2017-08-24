import { BasePlatform } from "../BasePlatform";
/**
 * Created by yefs on 2017/7/11.
 *
 * 微信平台
 */
export declare class WechatPlatform extends BasePlatform {
    wx: any;
    protected initPlatform(): void;
    getPlatformContext(): any;
    getPlatformName(): any;
    getPlatformCode(): any;
    _getWxOption(tenantId: string): {
        jsApiList: string[];
        configUrl: string;
    };
    _getWxConfigUrl(tenantId: string): string;
    _wxInit(option: any): void;
}
