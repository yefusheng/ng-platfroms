
import {ExePlatformService, platform_native, platform_pc, platform_wechat} from "../../ExePlatform.service";
import {Observable} from "rxjs/Observable";
import {IStorage} from "./IStorage";
import {StoragePc} from "./pc/StoragePc";
import {StorageNative} from "./native/StorageNative.service";
import {Injectable} from "@angular/core";
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
    switch (this.platformService.platform){
      case platform_native:
        this._Storage=new StorageNative();
        break;
      case platform_wechat:
        this._Storage=new StoragePc();
        break;
      case platform_pc:
        this._Storage=new StoragePc();
        break;

    }
    return  this._Storage;
  }
}

