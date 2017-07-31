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
export const windows ="windows";
export const mobile ="mobile";
export const wechat ="wechat";
export enum Platforms { mobile, windows,wechat } ;

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
  isPlatform(platformName:string): boolean {
    // return this.plt.is(platformName);
    return this._userAgent.indexOf(platformName) > -1?true :false;
  }



}
