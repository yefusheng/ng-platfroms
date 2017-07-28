import {BasePlatform} from "./BasePlatform";
import {Observable} from "rxjs/Observable";
import {platform_native, platform_wechat, platformsName} from "./ExePlatform.service";
import {Platform} from "ionic-angular";
/**
 * Created by yefs on 2017/7/11.
 *
 * 原生平台基类
 */

export   class NativePlatform extends  BasePlatform{

  constructor(

    private platform:Platform) {
    super();

  }

  protected initPlatform(): void {

  }
  public getPlatformContext() :any {
    return this.platform;
  }
  public getPlatformName() :any {
    return platformsName[platform_native];
  }
  public getPlatformCode() :any {
    return platform_native;
  }

}
