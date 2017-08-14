

import {Injectable, ModuleWithProviders, Provider} from "@angular/core";

import {WindowsPlatformModule} from "./windows/WindowsPlatformModule";
import {NativePlatformModule} from "./native/NativePlatformModule";
import {WechatPlatformModule} from "./wechat/WechatPlatformModule";
import {Platform} from "ionic-angular";
import {Platforms} from "./ExePlatform.service";
import {BasePlatform} from "./BasePlatform";
import {WindowsPlatform} from "./windows/WindowsPlatform";
import {WechatPlatform} from "./wechat/WechatPlatform";
import {NativePlatform} from "./native/NativePlatform";
/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */
@Injectable()
export class PlatformStragety implements BasePlatform {


  _userAgent:string;
   platform:BasePlatform;

  constructor(
  ){
     this.initPlatform();
  }
  protected initPlatform() {

    switch (this.getPlatformCode()){
      case Platforms.windows:
        this.platform=new WindowsPlatform();
        break;
      case Platforms.wechat:
        this.platform=new WechatPlatform();
        break;
      case Platforms.mobile:
        this.platform=new NativePlatform(new Platform());
        break;
      default:
        this.platform=new NativePlatform(new Platform());
        break;
    }

  }

  public getPlatformContext() {
    return this.platform.getPlatformContext();
  }

  public getPlatformName(): string {
    return this.platform.getPlatformName();
  }
  public getStragety(): any {
    this._userAgent = navigator.userAgent.toLowerCase();
    if (this.isWechat()) {
     return WechatPlatformModule;
    } else if (this.isNative()) {
     return NativePlatformModule;
    } else if(this.isWindow()){
     return WindowsPlatformModule;
    }
    return WindowsPlatformModule;
  }
  public getPlatformCode(): any {
    this._userAgent = navigator.userAgent.toLowerCase();
    if (this.isWechat()) {
      return Platforms.wechat;
    } else if (this.isNative()) {
      return Platforms.mobile;
    } else if(this.isWindow()){
      return Platforms.windows;
    }
    return   Platforms.windows;;
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
