import {Injectable} from "@angular/core";
import {BasePlatform} from "./BasePlatform";
import {Platform} from "ionic-angular";
import {log} from "./util/util";
import {PlatformStragety} from "./PlatformStragety";
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
 *
 * 跨平台管理
 */
export const windows ="windows";
export const mobile ="mobile";
export const wechat ="wechat";
export enum Platforms { mobile, windows,wechat } ;

@Injectable()
export class ExePlatformService extends  BasePlatform{



  platform:PlatformStragety;
  constructor(
  ) {
    super();
     this.platform=new PlatformStragety();
  }
  protected initPlatform() {

  }
  public getPlatformCode(): number {
   return this.platform.getPlatformCode()
  }

  public getPlatformContext() {
    return this.platform.getPlatformContext();
  }

  public getPlatformName(): string {
    return this.platform.getPlatformName();
  }



}
