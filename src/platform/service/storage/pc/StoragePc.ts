
import {IStorage} from "../IStorage";
import {Injectable} from "@angular/core";
import {stringify} from "../../util/util";

/**
 * Created by yefs on 2017/7/11.
 *  pc存储
 *
 */

@Injectable()
export class StoragePc implements IStorage{


  saveObject(key: string, value: any): void {
    window.sessionStorage.setItem(key,stringify(value));
  }

  getObject(key: string, defaule: any): any {
    let value = window.sessionStorage.getItem(key);
    if(value){
      value= JSON.parse(value);
    }else {
      value=defaule;
    }
    return value;
  }

}
