import {BasePlatform} from "./BasePlatform";
import {Platforms, windows} from "./ExePlatform.service";
import {Provider} from "@angular/core";
import {StorageService} from "./service/storage/Storage.service";
import {TransFilePc} from "./service/transfer/pc/TransFilePc";
import {StoragePc} from "./service/storage/pc/StoragePc";
import {TransFileService} from "./service/transfer/TransFile.service";
import {LoggerService} from "./service/logger/Logger.service";
import {LoggerPcService} from "./service/logger/pc/LoggerPc.service";

/**
 * Created by yefs on 2017/7/11.
 *
 * pc平台上下文
 */
export const PC_PLATFORM_PROVIDERS: Provider[] = [
  {provide: StorageService, useClass: StoragePc},
  {provide: TransFileService, useClass: TransFilePc},
  {provide: LoggerService, useClass: LoggerPcService},
];
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
