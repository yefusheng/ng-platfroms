import {Observable} from "rxjs/Observable";
/**
 * Created by yefs on 2017/7/11.
 *  本地数据接口
 *
 */


export interface IStorage{


  saveObject(key: string,value :any):void;

  getObject(key: string,defaule:any): any;

}
