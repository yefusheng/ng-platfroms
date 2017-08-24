/**
 * Created by yefs on 2017/7/11.
 *  本地储存
 *
 */
export interface IStorage {
    saveObject(key: string, value: any): void;
    getObject(key: string, defaule: any): any;
}
export declare class StorageService implements IStorage {
    private storage;
    constructor(storage: IStorage);
    saveObject(key: string, value: any): void;
    getObject(key: string, defaule: any): any;
}
