import {Injectable} from "@angular/core";
import {BasePlatform} from "./BasePlatform";
import {WechatPlatform} from "./WechatPlatform";
import {NativePlatform} from "./NativePlatform";
import {PcPlatform} from "./PcPlatform";
import {Platform} from "ionic-angular";
import {log} from "./service/util/util";
/**
 * Created by yefs on 2017/7/12.
 * 常量
 *    * | Platform Name   | Description                        |
 * |-----------------|------------------------------------|
 * | android         | on a device running Android.       |
 * | cordova         | on a device running Cordova.       |
 * | core            | on a desktop device.               |
 * | ios             | on a device running iOS.           |
 * | ipad            | on an iPad device.                 |
 * | iphone          | on an iPhone device.               |
 * | mobile          | on a mobile device.                |
 * | mobileweb       | in a browser on a mobile device.   |
 * | phablet         | on a phablet device.               |
 * | tablet          | on a tablet device.                |
 * | windows         | on a device running Windows.       |
 */
export enum Platforms { 'mobile', 'windows', 'wechat'} ;
// export const platformsName = ["phone", "windows", "wechat"];
@Injectable()
export class ExePlatformService extends  BasePlatform{

  platform: any;
  _userAgent:string;
  constructor(
    private plt:Platform,
  ) {
      super();
    log("_userAgent",this._userAgent);
      this.initPlatform();
    //
    // log("platformName",this.plt._platforms[0]);
  }

  public initPlatform() {
    this._userAgent = navigator.userAgent.toLowerCase();
    if (this.isWechat()) {
      this.platform=new WechatPlatform();
    } else if (this.isNative()) {
      this.platform=new NativePlatform(this.plt);
    } else if(this.isWindow()){
      this.platform=new PcPlatform();
    }
    log("platform" + this.platform.getPlatformName());
  }
  public getPlatformContext() {
    return this.platform.getPlatformContext;
  }
  /**
   * 获取平台名称
   * @returns {string|string|string}
   */
  getPlatformName(): string {
    return this.platform.getPlatformName();
  }

  public getPlatformCode(): number {
    return this.platform.getPlatformCode();
  }
  // /**
  //  * 是否原生平台
  //  * @returns {boolean}
  //  */
  // isNative(): boolean {
  //   let Agents = ["android", "iphone",
  //     "ipad", "ipod"];
  //   for (var v = 0; v < Agents.length; v++) {
  //     if (this.plt.is(Agents[v])) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
  isNative(): boolean {
    let Agents = ["android", "iphone",
      "ipad", "ipod"];
    for (var v = 0; v < Agents.length; v++) {
      if (this.isPlatform(Agents[v])) {
        return true;
      }
    }
    return false;
  }
  isWindow(): boolean {
    return this.isPlatform("windows");
  }

  isWechat(): boolean {
    return this.isPlatform("micromessenger");
  }
  isPlatform(userAgent:string): boolean {
    return this._userAgent.indexOf(userAgent) > -1?true :false;
  }


  userUrl: string = "https://tests.exexm.com:800";
  uploadUrl = this.userUrl + "/api/User/Picture/V2";
}
