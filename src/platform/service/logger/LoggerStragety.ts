
import {ExePlatformService, platform_native, platform_pc, platform_wechat} from "../../ExePlatform.service";
import {Injectable} from "@angular/core";
import {ILogger} from "./ILogger";
import {LoggerNativeService} from "./native/LoggerNative.service";
import {LoggerPcService} from "./pc/LoggerPc.service";
/**
 * Created by yefs on 2017/7/11.
 *  log
 *
 */
@Injectable()
export class LoggerStragety{
  _logger:ILogger;
  constructor(
    public platformService:ExePlatformService
  ){
  }
  public getStragety(): ILogger {
    switch (this.platformService.platform){
      case platform_native:
        this._logger=new LoggerNativeService();
        break;
      case platform_wechat:
        this._logger=new LoggerPcService();
        break;
      case platform_pc:
        this._logger=new LoggerPcService();
        break;

    }
    return  this._logger;
  }


}

