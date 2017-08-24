/**
 * Created by yefs on 2017/7/11.
 *
 * 平台基类
 */
export declare abstract class BasePlatform {
    constructor();
    abstract getPlatformContext(): any;
    abstract getPlatformName(): string;
    abstract getPlatformCode(): number;
}
