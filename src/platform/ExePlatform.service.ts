import {Injectable} from "@angular/core";
import {BasePlatform} from "./BasePlatform";
import {WechatPlatform} from "./WechatPlatform";
import {NativePlatform} from "./NativePlatform";
import {PcPlatform} from "./PcPlatform";
/**
 * Created by yefs on 2017/7/12.
 * 常量
 */

export const platform_native: number = 0;
export const platform_pc: number = 1;
export const platform_wechat: number = 2;
export const platformsName = ["phone", "pc", "wechat"];
@Injectable()
export class ExePlatformService extends  BasePlatform{

  platform: any;
  constructor() {
      super();
      this.initPlatform();
  }

  public initPlatform() {
    if (this.is_weixin()) {
      this.platform=new WechatPlatform();
    } else if (this.isNative()) {
      this.platform=new NativePlatform();
    } else {
      this.platform=new PcPlatform();
    }
    console.log("platform" + this.platform.getPlatformName());
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
  /**
   * 是否原生平台
   * @returns {boolean}
   */
  isNative(): boolean {
    let Agents = ["android", "iphone",
      "ipad", "ipod"];
    let userAgent = navigator.userAgent.toLowerCase();

    for (var v = 0; v < Agents.length; v++) {
      if (userAgent.indexOf(Agents[v]) > 0) {
        return true;
      }
    }
    return false;
  }

  /**
   * 是否微信平台
   * @returns {boolean}
   */
  is_weixin(): boolean {
    let userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf("micromessenger") > -1) {
      return true;
    } else {
      return false;
    }
  }

  token: string = "yObxVpQqz9OZpev1AsLG88N%2bnUXqL1x%2bo2mSerEDthg%3d";

  userUrl: string = "https://tests.exexm.com:800";
  uploadUrl = this.userUrl + "/api/User/Picture/V2";
}
