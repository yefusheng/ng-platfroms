

import {Injectable} from "@angular/core";
import {IStorage} from "../../../service/Storage.service";
import {stringify} from "../../../util/util";


/**
 * Created by yefs on 2017/7/11.
 *  原生存储
 *
 */
@Injectable()
export class StorageNative implements IStorage{


  saveObject(key: string, value: any): void {

    localStorage.setItem(key,stringify(value));
  }

  getObject(key: string, defaule: any): any {
    let value = localStorage.getItem(key);
    if(value){
      value= JSON.parse(value);
    }else {
      value=defaule;
    }
    return value;
  }


}
