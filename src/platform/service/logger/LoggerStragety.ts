
import {ExePlatformService, Platforms} from "../../ExePlatform.service";
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
    switch (this.platformService.platform.getPlatformCode()){
      case Platforms.mobile:
        this._logger=new LoggerNativeService();
        break;
      case Platforms.wechat:
        this._logger=new LoggerPcService();
        break;
      case Platforms.windows:
        this._logger=new LoggerPcService();
        break;

    }
    return  this._logger;
  }


}

