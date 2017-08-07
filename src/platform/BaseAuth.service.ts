import {Injectable} from "@angular/core";

/**
 * Created by yefs on 2017/7/28.
 * 需要被注入的授权服务
 */
export interface  IAuthService {


  getToken(): string ;


}

export  class BaseAuthService implements IAuthService{
  getToken(): string {
    throw new Error("Method not implemented.");
  }

}
