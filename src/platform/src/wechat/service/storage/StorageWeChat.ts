

import {Injectable} from "@angular/core";
import {BaseService} from "../../../BaseService";
import {IStorage} from "../../../service/Storage.service";
import {WechatPlatform} from "../../WechatPlatform";

/**
 * Created by yefs on 2017/7/11.
 *  wechat存储
 *
 */

@Injectable()
export class StorageWeChat  implements IStorage{


  constructor(
    private wechatPlatform :WechatPlatform
  ){

  }
  saveObject(key: string, value: any): void {
    try {
      this.wechatPlatform.getPlatformContext().setStorageSync(key, value)
    } catch (e) {
    }
}

  getObject(key: string, defaule: any): any {
    try {
      this.wechatPlatform.getPlatformContext().getStorageSync(key,defaule);
    } catch (e) {
    }
  }



}
