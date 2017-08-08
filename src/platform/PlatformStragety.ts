

import {Injectable, Provider} from "@angular/core";

import {Platform} from "ionic-angular";
import {PC_PLATFORM_PROVIDERS} from "./PcPlatform";
import {NATIVE_PLATFORM_PROVIDERS} from "./NativePlatform";
import {WECHAT_PLATFORM_PROVIDERS} from "./WechatPlatform";
import {ExePlatformService, Platforms} from "./ExePlatform.service";
/**
 * Created by yefs on 2017/7/11.
 *  文件传输
 *
 */
@Injectable()
export class PlatformStragety   {



  constructor(
    public platformService:ExePlatformService
  ){
  }

  public getStragety(): Provider[] {
    switch (this.platformService.platform.getPlatformCode()) {
      case Platforms.mobile:
        return NATIVE_PLATFORM_PROVIDERS;
      case Platforms.wechat:
        return WECHAT_PLATFORM_PROVIDERS;

      case Platforms.windows:
       return PC_PLATFORM_PROVIDERS;

    }
    return PC_PLATFORM_PROVIDERS;
  }

}
