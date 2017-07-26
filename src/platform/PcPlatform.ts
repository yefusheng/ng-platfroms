import {BasePlatform} from "./BasePlatform";
import {Observable} from "rxjs/Observable";
import {platform_pc, platform_wechat, platformsName} from "./ExePlatform.service";
/**
 * Created by yefs on 2017/7/11.
 *
 * pc平台
 */

export   class PcPlatform extends  BasePlatform{

  window:any;
  protected initPlatform(): void {
    this.window = (<any>window);
  }
  public getPlatformContext() :any {
    return this.window;
  }
  public getPlatformName() :any {
    return platformsName[platform_pc];
  }
  public getPlatformCode() :any {
    return platform_pc;
  }

}
