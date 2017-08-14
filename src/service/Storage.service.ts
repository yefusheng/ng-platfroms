
import {Injectable} from "@angular/core";


/**
 * Created by yefs on 2017/7/11.
 *  本地储存
 *
 */
export interface IStorage{


  saveObject(key: string,value :any):void;

  getObject(key: string,defaule:any): any;

}
@Injectable()

export class StorageService   implements IStorage {

  constructor(
  private  storage :IStorage
  ){

  }
  saveObject(key: string, value: any): void {
    this.storage.saveObject(key,value);
  }

  getObject(key: string, defaule: any): any {
    return   this.storage.getObject(key,defaule);
  }
}
