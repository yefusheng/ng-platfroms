import { IStorage } from "../../../service/Storage.service";
import { WechatPlatform } from "../../WechatPlatform";
/**
 * Created by yefs on 2017/7/11.
 *  wechat存储
 *
 */
export declare class StorageWeChat implements IStorage {
    private wechatPlatform;
    constructor(wechatPlatform: WechatPlatform);
    saveObject(key: string, value: any): void;
    getObject(key: string, defaule: any): any;
}
