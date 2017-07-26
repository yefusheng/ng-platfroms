
import {IStorage} from "../IStorage";
import {Injectable} from "@angular/core";
import {BaseService} from "../../../BaseService";

/**
 * Created by yefs on 2017/7/11.
 *  wechat存储
 *
 */

@Injectable()
export class StorageWeChat extends BaseService implements IStorage{


  saveObject(key: string, value: any): void {
    try {
      this.exePlatform.getPlatformContext().setStorageSync(key, value)
    } catch (e) {
    }
}

  getObject(key: string, defaule: any): any {
    try {
      this.exePlatform.getPlatformContext().getStorageSync(key,defaule);
    } catch (e) {
    }
  }



}
