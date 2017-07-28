import {BasePlatform} from "./BasePlatform";
import {Observable} from "rxjs/Observable";
import {mobile, Platforms} from "./ExePlatform.service";
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
    return mobile;
  }
  public getPlatformCode() :any {
    return Platforms.mobile;
  }

}
