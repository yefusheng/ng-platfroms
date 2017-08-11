import {Injectable} from "@angular/core";

/**
 * Created by yefs on 2017/7/28.
 * 需要被注入的授权服务
 */
export interface  IAuthService {


  getToken(): string ;

  setToken(token: string) ;
}

export  class AuthService implements IAuthService{

  token:string="";

  setToken(token: string) {
     this.token=token;
  }

  getToken(): string {
    return this.token;
  }

}
