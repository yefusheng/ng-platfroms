
import {IStorage} from "../IStorage";
import {Injectable} from "@angular/core";
import {stringify} from "../../util/util";

/**
 * Created by yefs on 2017/7/11.
 *  原生存储
 *
 */
@Injectable()
export class StorageNative implements IStorage{

  constructor(

  ){
  }
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
