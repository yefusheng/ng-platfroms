import {BasePlatform} from "./BasePlatform";
import {Platforms, windows} from "./ExePlatform.service";

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
    return windows;
  }
  public getPlatformCode() :any {
    return Platforms.windows;
  }

}
