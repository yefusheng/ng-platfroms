
import {ExePlatformService, Platforms} from "../../ExePlatform.service";
import {Observable} from "rxjs/Observable";
import {IStorage} from "./IStorage";
import {StoragePc} from "./pc/StoragePc";
import {StorageNative} from "./native/StorageNative.service";
import {Injectable} from "@angular/core";
import {StorageWeChat} from "./wechat/StorageWeChat";
/**
 * Created by yefs on 2017/7/11.
 *  本地存储策略
 *
 */
@Injectable()
export class StorageStragety{
  _Storage:IStorage;
  constructor(
    public platformService:ExePlatformService
  ){
  }
  public getStragety(): IStorage {
    switch (this.platformService.platform.getPlatformCode()){
      case Platforms.mobile:
        this._Storage=new StorageNative();
        break;
      case Platforms.wechat:
        this._Storage=new StorageWeChat(this.platformService);
        break;
      case Platforms.windows:
        this._Storage=new StoragePc();
        break;

    }
    return  this._Storage;
  }
}

