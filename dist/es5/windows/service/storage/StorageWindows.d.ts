import { IStorage } from "../../../service/Storage.service";
/**
 * Created by yefs on 2017/7/11.
 *  pc存储
 *
 */
export declare class StorageWindows implements IStorage {
    saveObject(key: string, value: any): void;
    getObject(key: string, defaule: any): any;
}
