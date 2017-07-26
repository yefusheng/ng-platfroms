import {BasePlatform} from "./BasePlatform";
import {Observable} from "rxjs/Observable";
import {platform_native, platform_wechat, platformsName} from "./ExePlatform.service";
/**
 * Created by yefs on 2017/7/11.
 *
 * 原生平台基类
 */

export   class NativePlatform extends  BasePlatform{

  cordova:any;

  protected initPlatform(): void {
    this.cordova = (<any>window).cordova;
    //todo  获取cordova 环境变量
  }
  public getPlatformContext() :any {
    return this.cordova;
  }
  public getPlatformName() :any {
    return platformsName[platform_native];
  }
  public getPlatformCode() :any {
    return platform_native;
  }

}
